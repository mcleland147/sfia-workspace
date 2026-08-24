/**
 * CancelExecutionAttempt (post-start context of the catalogue CancelExecution).
 *
 * Authority: the contract `requiredAuthority` bar, or a Morris emergency stop
 * (N3 ∧ canActAsMorris verified server-side). A client-claimed authority level
 * and a "Morris" displayName are ignored. Auto-safety never cancels: only a
 * human authorized actor or Morris can.
 *
 * `accepted` is cancelled without touching the adapter. `running` /
 * `result_pending` call `adapter.cancel` best-effort; a cancel failure does
 * NOT claim a cancelled Attempt — the Attempt stays running with
 * cancellationRequested and irreversibleEffectsPossible recorded.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import { isAttemptTerminal } from "../domain/invariants";
import type {
  CancelExecutionAttemptRequest,
  ExecutionAttempt,
  ExecutionAttemptResult,
} from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export class CancelExecutionAttempt {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: CancelExecutionAttemptRequest,
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
        event: "oa.execution_attempt.cancelled",
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
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }
      if (typeof request.reason !== "string" || request.reason.trim().length < 1) {
        return fail("ATTEMPT_INVALID", "cancel_reason_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }
      if (attempt.status === "cancelled") {
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

      const verification = verifyAttemptAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: request.actor.actorId,
        scope: contract.scope,
        evidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        displayName: request.actor.displayName,
        requireMorrisGate: request.emergency === true,
      });
      this.audit.append({
        event: "oa.execution_attempt.cancellation_requested",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        authorityEvidenceRef: verification.evidenceId,
        result: verification.ok ? "ok" : "error",
        detailCode: verification.ok ? undefined : verification.reason,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          authorityFailureDetail(verification.reason),
          request.emergency === true
            ? `emergency_${verification.reason}`
            : verification.reason,
          { executionContractId: attempt.executionContractId },
        );
      }

      // accepted → no adapter interaction at all (nothing was launched).
      if (attempt.status !== "accepted") {
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
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.execution_attempt.cancellation_failed",
            ts: timestamp,
            correlationId,
            attemptId: attempt.attemptId,
            executionContractId: attempt.executionContractId,
            adapterId: this.adapter.adapterId,
            previousStatus: attempt.status,
            newStatus: attempt.status,
            result: "error",
            detailCode: "EXECUTION_CANCEL_FAILED",
            durationMs,
          });
          return {
            ok: false,
            error: createAttemptError({
              detailCode: "EXECUTION_CANCEL_FAILED",
              timestamp,
              correlationId,
              attemptId: attempt.attemptId,
              executionContractId: attempt.executionContractId,
              internalCauseRef: cancelResult.reason,
            }),
            attempt: persistedAttempt,
            durationMs,
          };
        }
      }

      const cancelled: ExecutionAttempt = {
        ...attempt,
        status: "cancelled",
        cancelledAt: timestamp,
        cancellationRequested: true,
        stopReason: attempt.stopReason ?? request.reason,
        stopOrigin: "USER_CANCEL",
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(cancelled, attempt.version);
          await this.attempts.releaseActiveContract(
            cancelled.executionContractId,
            cancelled.attemptId,
          );
        });
      } catch {
        return fail("EXECUTION_PERSISTENCE_FAILED", "cancel_persist_failed");
      }

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "cancelled",
        reason: request.reason,
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.cancelled",
        ts: timestamp,
        correlationId,
        attemptId: cancelled.attemptId,
        executionContractId: cancelled.executionContractId,
        previousStatus: attempt.status,
        newStatus: "cancelled",
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        attempt: structuredClone(cancelled),
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
