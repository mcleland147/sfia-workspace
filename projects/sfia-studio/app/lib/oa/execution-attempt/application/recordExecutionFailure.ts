/**
 * RecordExecutionFailure — adapter-bound technical failure.
 * running|result_pending → failed, contract → failed.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import { isOaIdentifier, MAX_LOG_REFS } from "../domain/invariants";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
  RecordExecutionFailureRequest,
} from "../domain/types";
import { withAttemptContractBindingSync } from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import { newCorrelationId } from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export class RecordExecutionFailure {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly registry: AgentRegistryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: RecordExecutionFailureRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]>,
    ): ExecutionAttemptResult => {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.failed",
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
          ...extra,
        }),
        durationMs,
      };
    };

    try {
      if (!request.errorRef && !request.stopReason) {
        return fail("ATTEMPT_INVALID", "error_ref_or_stop_reason_required");
      }
      if (request.errorRef && !isOaIdentifier(request.errorRef)) {
        return fail("ATTEMPT_INVALID", "error_ref_invalid");
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
        return fail("ADAPTER_ATTEMPT_MISMATCH", "foreign_adapter_identity");
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }

      const failed: ExecutionAttempt = {
        ...attempt,
        status: "failed",
        failedAt: timestamp,
        errorRef: request.errorRef ?? attempt.errorRef,
        stopReason: request.stopReason ?? attempt.stopReason,
        technicalExitCode: request.technicalExitCode,
        durationMs: request.durationMs,
        logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(failed, attempt.version);
          await this.attempts.releaseActiveContract(
            failed.executionContractId,
            failed.attemptId,
          );
        });
      } catch {
        return fail("EXECUTION_PERSISTENCE_FAILED", "failed_persist_failed");
      }

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "failed",
        reason: "Execution attempt reported a technical failure",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.failed",
        ts: timestamp,
        correlationId,
        attemptId: failed.attemptId,
        executionContractId: failed.executionContractId,
        selectedAgentRef: failed.selectedAgentRef,
        adapterId: request.adapterId,
        previousStatus: attempt.status,
        newStatus: "failed",
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        stopReason: failed.stopReason,
        result: "ok",
        durationMs,
      });

      let terminalAttempt = failed;
      if (contractWrite.ok) {
        terminalAttempt = withAttemptContractBindingSync(
          failed,
          contractWrite.contract,
        );
        if (
          terminalAttempt.executionContractVersion !== failed.executionContractVersion
        ) {
          terminalAttempt = {
            ...terminalAttempt,
            version: failed.version + 1,
          };
          await this.attempts.update(terminalAttempt, failed.version);
        }
      }

      return {
        ok: true,
        attempt: structuredClone(terminalAttempt),
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        contractVersion: contractWrite.ok
          ? contractWrite.contract.version
          : contract.version,
        durationMs,
      };
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }
}
