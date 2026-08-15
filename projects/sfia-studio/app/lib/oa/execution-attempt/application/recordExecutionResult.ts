/**
 * RecordExecutionResult — technical result only (Evidence/Claim are T-A6).
 *
 * Authority is the adapter bound to THIS Attempt: a foreign adapter identity
 * is denied. When the terminal persist fails, the Attempt becomes
 * `result_pending` (bounded refs, no payload) and the contract STAYS
 * `executing` — never a speculative `completed`. The recording budget is
 * bounded; once exhausted the Attempt fails with RESULT_RECORDING_FAILED.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import { isOaIdentifier, MAX_LOG_REFS } from "../domain/invariants";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
  RecordExecutionResultRequest,
} from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import { newCorrelationId } from "./attemptSupport";
import type { AttemptPolicy } from "./attemptPolicy";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export class RecordExecutionResult {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly registry: AgentRegistryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly policy: AttemptPolicy,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: RecordExecutionResultRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.succeeded",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        adapterId: request.adapterId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode,
          timestamp,
          correlationId,
          attemptId: request.attemptId,
          internalCauseRef,
          ...errorExtra,
        }),
        attempt,
        durationMs,
      };
    };

    try {
      if (!isOaIdentifier(request.resultRef)) {
        return fail("ATTEMPT_INVALID", "result_ref_invalid");
      }
      if (request.logRefs) {
        if (request.logRefs.length > MAX_LOG_REFS) {
          return fail("ATTEMPT_INVALID", "log_refs_max_16");
        }
        if (!request.logRefs.every((ref) => isOaIdentifier(ref))) {
          return fail("ATTEMPT_INVALID", "log_ref_invalid");
        }
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }
      if (attempt.status !== "running" && attempt.status !== "result_pending") {
        return fail(
          "ATTEMPT_STATE_CONFLICT",
          `attempt_status_${attempt.status}`,
          { executionContractId: attempt.executionContractId },
        );
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered");
      }
      if (request.adapterId !== agent.adapterRef) {
        return fail("ADAPTER_ATTEMPT_MISMATCH", "foreign_adapter_identity", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }

      const previousRecordings =
        this.store.resultRecordingAttempts.get(attempt.attemptId) ?? 0;
      const recordingAttempt = previousRecordings + 1;
      this.store.resultRecordingAttempts.set(
        attempt.attemptId,
        recordingAttempt,
      );

      const succeeded: ExecutionAttempt = {
        ...attempt,
        status: "succeeded",
        resultRef: request.resultRef,
        completedAt: timestamp,
        technicalExitCode: request.technicalExitCode,
        durationMs: request.durationMs,
        logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      let persisted = false;
      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(succeeded, attempt.version);
          await this.attempts.releaseActiveContract(
            succeeded.executionContractId,
            succeeded.attemptId,
          );
        });
        persisted = true;
      } catch (err) {
        if (
          isExecutionAttemptDomainError(err) &&
          err.detailCode === "VERSION_CONFLICT"
        ) {
          return fail("VERSION_CONFLICT", "attempt_occ_race", {
            expectedVersion: err.expectedVersion,
            currentVersion: err.currentVersion,
          });
        }
        persisted = false;
      }

      if (!persisted) {
        if (recordingAttempt >= this.policy.maxResultRecordingAttempts) {
          return this.exhaustBudget({
            attempt,
            contractVersion: contract.version,
            timestamp,
            correlationId,
            started,
          });
        }
        return this.markResultPending({
          attempt,
          timestamp,
          correlationId,
          started,
          contractStatus: contract.status,
        });
      }

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "completed",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.succeeded",
        ts: timestamp,
        correlationId,
        attemptId: succeeded.attemptId,
        executionContractId: succeeded.executionContractId,
        selectedAgentRef: succeeded.selectedAgentRef,
        adapterId: request.adapterId,
        previousStatus: attempt.status,
        newStatus: "succeeded",
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        result: contractWrite.ok ? "ok" : "error",
        detailCode: contractWrite.ok ? undefined : contractWrite.detailCode,
        durationMs,
      });

      if (!contractWrite.ok) {
        return {
          ok: false,
          error: createAttemptError({
            detailCode: contractWrite.detailCode,
            timestamp,
            correlationId,
            attemptId: succeeded.attemptId,
            executionContractId: succeeded.executionContractId,
            internalCauseRef: contractWrite.internalCauseRef,
          }),
          attempt: structuredClone(succeeded),
          durationMs,
        };
      }

      return {
        ok: true,
        attempt: structuredClone(succeeded),
        contractStatus: contractWrite.contract.status,
        contractVersion: contractWrite.contract.version,
        durationMs,
      };
    } catch {
      return fail("RESULT_RECORDING_FAILED", "unexpected_exception");
    }
  }

  private async markResultPending(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
    contractStatus: string;
  }): Promise<ExecutionAttemptResult> {
    const pending: ExecutionAttempt = {
      ...input.attempt,
      status: "result_pending",
      resultPendingAt: input.timestamp,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    const durationMs = Date.now() - input.started;
    if (input.attempt.status !== "result_pending") {
      try {
        await this.attempts.update(pending, input.attempt.version);
      } catch {
        return {
          ok: false,
          error: createAttemptError({
            detailCode: "RESULT_RECORDING_FAILED",
            timestamp: input.timestamp,
            correlationId: input.correlationId,
            attemptId: input.attempt.attemptId,
            executionContractId: input.attempt.executionContractId,
            internalCauseRef: "result_pending_persist_failed",
          }),
          durationMs,
        };
      }
    }
    this.audit.append({
      event: "oa.execution_attempt.result_pending",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      previousStatus: input.attempt.status,
      newStatus: "result_pending",
      contractStatus: input.contractStatus,
      result: "error",
      detailCode: "RESULT_RECORDING_FAILED",
      durationMs,
    });
    return {
      ok: false,
      error: createAttemptError({
        detailCode: "RESULT_RECORDING_FAILED",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: "terminal_persist_failed_result_pending",
      }),
      attempt:
        input.attempt.status === "result_pending"
          ? structuredClone(input.attempt)
          : structuredClone(pending),
      durationMs,
    };
  }

  private async exhaustBudget(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const failed: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: "RESULT_RECORDING_FAILED: retry budget exhausted",
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      await this.attempts.update(failed, input.attempt.version);
      await this.attempts.releaseActiveContract(
        failed.executionContractId,
        failed.attemptId,
      );
      persistedAttempt = failed;
    } catch {
      persistedAttempt = undefined;
    }
    const contractWrite = await this.contractStatusWriter.write({
      executionContractId: input.attempt.executionContractId,
      expectedVersion: input.contractVersion,
      nextStatus: "failed",
      reason: "Result recording budget exhausted",
    });
    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      previousStatus: input.attempt.status,
      newStatus: persistedAttempt ? "failed" : input.attempt.status,
      contractStatus: contractWrite.ok ? contractWrite.contract.status : undefined,
      stopReason: failed.stopReason,
      result: "error",
      detailCode: "RESULT_RECORDING_FAILED",
      durationMs,
    });
    return {
      ok: false,
      error: createAttemptError({
        detailCode: "RESULT_RECORDING_FAILED",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: "result_recording_budget_exhausted",
      }),
      attempt: persistedAttempt ? structuredClone(persistedAttempt) : undefined,
      durationMs,
    };
  }
}
