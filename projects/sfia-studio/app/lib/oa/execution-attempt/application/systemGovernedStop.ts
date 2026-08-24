/**
 * StopExecutionAttemptFromRuntimeGuard — TD-W3B-03/04 (FC-10).
 * Separate from human Cancel; mandatory durable SYSTEM_GOVERNED_STOP provenance.
 * Post-running / proven execution frontier only.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import { isAttemptTerminal } from "../domain/invariants";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
} from "../domain/types";
import { withAttemptContractBindingSync } from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import { newCorrelationId } from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export type SystemGovernedStopRequest = {
  attemptId: string;
  stopCode: string;
  stopSourceRef: string;
  reason: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  nowIso?: string;
};

export class SystemGovernedStop {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: SystemGovernedStopRequest,
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
        event: "oa.execution_attempt.cancellation_failed",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
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
      if (
        typeof request.stopCode !== "string" ||
        request.stopCode.trim().length < 1
      ) {
        return fail("ATTEMPT_INVALID", "stop_code_required");
      }
      if (
        typeof request.stopSourceRef !== "string" ||
        request.stopSourceRef.trim().length < 1
      ) {
        return fail("ATTEMPT_INVALID", "stop_source_ref_required");
      }
      if (typeof request.reason !== "string" || request.reason.trim().length < 1) {
        return fail("ATTEMPT_INVALID", "stop_reason_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }
      if (attempt.status === "cancelled" && attempt.stopOrigin === "SYSTEM_GOVERNED_STOP") {
        const durationMs = Date.now() - started;
        return { ok: true, attempt, replayed: true, durationMs };
      }
      if (isAttemptTerminal(attempt.status)) {
        return fail(
          "ATTEMPT_STATE_CONFLICT",
          `attempt_terminal_${attempt.status}`,
        );
      }
      if (
        attempt.status !== "running" &&
        attempt.status !== "result_pending"
      ) {
        return fail(
          "ATTEMPT_STATE_CONFLICT",
          "system_stop_requires_post_running_frontier",
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

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      let cancelResult;
      try {
        cancelResult = await this.adapter.cancel({
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          selectedAgentRef: attempt.selectedAgentRef,
          adapterRef: agent?.adapterRef ?? this.adapter.adapterId,
          correlationId,
          reason: request.reason,
        });
      } catch {
        cancelResult = {
          outcome: "fail" as const,
          adapterId: this.adapter.adapterId,
          attemptId: attempt.attemptId,
          reason: "adapter_threw",
          irreversibleEffectsPossible: true,
        };
      }

      if (cancelResult.outcome !== "ack") {
        const flagged: ExecutionAttempt = {
          ...attempt,
          cancellationRequested: true,
          irreversibleEffectsPossible:
            cancelResult.irreversibleEffectsPossible ?? true,
          updatedAt: timestamp,
          version: attempt.version + 1,
        };
        let persistedAttempt: ExecutionAttempt | undefined;
        try {
          await this.attempts.update(flagged, attempt.version);
          persistedAttempt = flagged;
        } catch {
          persistedAttempt = undefined;
        }
        return fail("EXECUTION_CANCEL_FAILED", cancelResult.reason ?? "cancel_not_acked", {
          attempt: persistedAttempt,
        });
      }

      const stopped: ExecutionAttempt = {
        ...attempt,
        status: "cancelled",
        cancelledAt: timestamp,
        cancellationRequested: true,
        stopReason: request.reason,
        stopOrigin: "SYSTEM_GOVERNED_STOP",
        stopCode: request.stopCode,
        stopSourceRef: request.stopSourceRef,
        stopObservedAt: timestamp,
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(stopped, attempt.version);
          await this.attempts.releaseActiveContract(
            stopped.executionContractId,
            stopped.attemptId,
          );
        });
      } catch {
        return fail("EXECUTION_PERSISTENCE_FAILED", "system_stop_persist_failed");
      }

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "cancelled",
        reason: request.reason,
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.system_governed_stop",
        ts: timestamp,
        correlationId,
        attemptId: stopped.attemptId,
        executionContractId: stopped.executionContractId,
        previousStatus: attempt.status,
        newStatus: "cancelled",
        result: "ok",
        durationMs,
      });

      let terminalAttempt = stopped;
      if (contractWrite.ok) {
        terminalAttempt = withAttemptContractBindingSync(
          stopped,
          contractWrite.contract,
        );
        if (
          terminalAttempt.executionContractVersion !== stopped.executionContractVersion
        ) {
          terminalAttempt = {
            ...terminalAttempt,
            version: stopped.version + 1,
          };
          await this.attempts.update(terminalAttempt, stopped.version);
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
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_system_stop_failure");
    }
  }
}
