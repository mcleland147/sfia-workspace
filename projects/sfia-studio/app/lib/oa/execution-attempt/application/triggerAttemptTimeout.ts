/**
 * TriggerAttemptTimeout (RTA5-07 / RTA5-08).
 *
 * The ONLY auto-safety of this foundation, and it is deterministic: an
 * explicit command evaluated against an injected Clock. There is no scheduler,
 * no worker and no queue. The deadline is
 * `startedAt + (attempt.resolvedMaxDurationMs ?? policy.attemptTimeoutMs)`.
 *
 * Before the deadline the command refuses. After the deadline the Attempt
 * becomes `timeout` and the contract `failed`. It is idempotent once applied.
 * Authority: bounded auto-safety, or an actor at the contract authority bar,
 * or Morris. Auto-safety is never Morris-equivalent and never cancels.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
  TriggerAttemptTimeoutRequest,
} from "../domain/types";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { AttemptPolicy } from "./attemptPolicy";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export class TriggerAttemptTimeout {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly policy: AttemptPolicy,
    private readonly store: ExecutionAttemptTechnicalStorePort,
  ) {}

  async execute(
    request: TriggerAttemptTimeoutRequest,
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
        event: "oa.execution_attempt.timed_out",
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
          ...extra,
        }),
        durationMs,
      };
    };

    try {
      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }
      if (attempt.status === "timeout") {
        const durationMs = Date.now() - started;
        return { ok: true, attempt, replayed: true, durationMs };
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

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }

      // Authority: bounded auto-safety OR an authorized human actor.
      if (request.autoSafety !== true) {
        if (!request.actor?.actorId) {
          return fail("AUTHORITY_DENIED", "actor_required_without_auto_safety");
        }
        const verification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: request.actor.actorId,
          scope: contract.scope,
          evidenceId: request.authorityEvidenceId,
          claimedAuthorityLevel: request.claimedAuthorityLevel,
          displayName: request.actor.displayName,
        });
        if (!verification.ok) {
          return fail(
            authorityFailureDetail(verification.reason),
            verification.reason,
          );
        }
      }

      if (!attempt.startedAt) {
        return fail("ATTEMPT_STATE_CONFLICT", "attempt_not_started");
      }
      const windowMs =
        attempt.resolvedMaxDurationMs ?? this.policy.attemptTimeoutMs;
      const deadlineMs = Date.parse(attempt.startedAt) + windowMs;
      if (Date.parse(timestamp) < deadlineMs) {
        return fail("TIMEOUT_NOT_REACHED", "deadline_not_reached");
      }

      const timedOut: ExecutionAttempt = {
        ...attempt,
        status: "timeout",
        timedOutAt: timestamp,
        stopReason: attempt.stopReason ?? "EXECUTION_TIMEOUT",
        updatedAt: timestamp,
        version: attempt.version + 1,
      };

      try {
        await this.store.runInTransaction(async () => {
          await this.attempts.update(timedOut, attempt.version);
          await this.attempts.releaseActiveContract(
            timedOut.executionContractId,
            timedOut.attemptId,
          );
        });
      } catch {
        return fail("EXECUTION_PERSISTENCE_FAILED", "timeout_persist_failed");
      }

      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "failed",
        reason: "Execution attempt timed out (bounded auto-safety)",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.timed_out",
        ts: timestamp,
        correlationId,
        attemptId: timedOut.attemptId,
        executionContractId: timedOut.executionContractId,
        previousStatus: attempt.status,
        newStatus: "timeout",
        contractStatus: contractWrite.ok
          ? contractWrite.contract.status
          : contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        attempt: structuredClone(timedOut),
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
