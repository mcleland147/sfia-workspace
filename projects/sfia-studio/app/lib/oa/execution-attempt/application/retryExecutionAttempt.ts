/**
 * RetryExecutionAttempt (D09) — ALWAYS a new Attempt.
 *
 * An in-place restart of a terminal Attempt is refused. The new Attempt
 * carries `retryOfAttemptId`, `retryIndex`, a bounded `maxRetriesBudget` and a
 * NEW idempotencyKey. There is no automatic retry: this command is explicit
 * and authorized exactly like Start. An irreversible contract requires an
 * explicit policy reference.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { createAttemptError } from "../domain/errors";
import { isAttemptTerminal } from "../domain/invariants";
import type {
  ExecutionAttemptResult,
  RetryExecutionAttemptRequest,
} from "../domain/types";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { AttemptPolicy } from "./attemptPolicy";
import type { SelectExecutionAgent } from "./selectExecutionAgent";

const RETRYABLE_PRIOR_STATUSES = new Set(["failed", "timeout", "cancelled"]);

export class RetryExecutionAttempt {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly selectExecutionAgent: SelectExecutionAgent,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly policy: AttemptPolicy,
  ) {}

  async execute(
    request: RetryExecutionAttemptRequest,
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
        event: "oa.execution_attempt.retry_authorized",
        ts: timestamp,
        correlationId,
        attemptId: request.newAttemptId,
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
          attemptId: request.newAttemptId,
          internalCauseRef,
          ...extra,
        }),
        durationMs,
      };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }
      const prior = await this.attempts.findById(request.priorAttemptId);
      if (!prior) {
        return fail("ATTEMPT_NOT_FOUND", "missing_prior_attempt");
      }
      if (!isAttemptTerminal(prior.status)) {
        return fail(
          "RETRY_NOT_AUTHORIZED",
          `prior_attempt_not_terminal_${prior.status}`,
        );
      }
      if (!RETRYABLE_PRIOR_STATUSES.has(prior.status)) {
        return fail(
          "RETRY_NOT_AUTHORIZED",
          `prior_attempt_status_${prior.status}`,
        );
      }
      if (request.idempotencyKey === prior.idempotencyKey) {
        return fail(
          "ATTEMPT_IDEMPOTENCY_CONFLICT",
          "retry_requires_new_idempotency_key",
        );
      }
      if (request.newAttemptId === prior.attemptId) {
        return fail("RETRY_NOT_AUTHORIZED", "retry_must_create_new_attempt");
      }

      const contract = await this.contracts.findById(
        prior.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        return fail(gate, `contract_status_${contract.status}`, {
          executionContractId: contract.executionContractId,
        });
      }
      if (
        contract.reversibility === "irreversible" &&
        !request.irreversibleRetryPolicyRef
      ) {
        return fail(
          "RETRY_IRREVERSIBLE_REFUSED",
          "irreversible_retry_requires_explicit_policy",
          { executionContractId: contract.executionContractId },
        );
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

      const budget =
        request.maxRetriesBudget ??
        prior.maxRetriesBudget ??
        this.policy.defaultMaxRetriesBudget;
      const retryIndex = (prior.retryIndex ?? 0) + 1;
      if (retryIndex > budget) {
        return fail("RETRY_BUDGET_EXHAUSTED", "retry_budget_exhausted", {
          executionContractId: contract.executionContractId,
        });
      }

      const selected = await this.selectExecutionAgent.execute({
        attemptId: request.newAttemptId,
        executionContractId: contract.executionContractId,
        idempotencyKey: request.idempotencyKey,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        selectionProfile: prior.selectionProfile ?? "standard",
        selectionStrategy: prior.selectionStrategy,
        agentConfirmationRef: request.agentConfirmationRef,
        requestedAgentRef:
          prior.selectionStrategy === "human_confirmed_proposal"
            ? undefined
            : prior.selectedAgentRef,
        selectionExpiresAt: request.selectionExpiresAt,
        selectionTtlMs: request.selectionTtlMs,
        retryOfAttemptId: prior.attemptId,
        retryIndex,
        maxRetriesBudget: budget,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        nowIso: timestamp,
      });

      const durationMs = Date.now() - started;
      if (!selected.ok) {
        this.audit.append({
          event: "oa.execution_attempt.retry_authorized",
          ts: timestamp,
          correlationId,
          attemptId: request.newAttemptId,
          executionContractId: contract.executionContractId,
          retryIndex,
          result: "error",
          detailCode: selected.error.detailCode,
          durationMs,
        });
        return selected;
      }

      this.audit.append({
        event: "oa.execution_attempt.retry_authorized",
        ts: timestamp,
        correlationId,
        attemptId: selected.attempt.attemptId,
        executionContractId: selected.attempt.executionContractId,
        selectedAgentRef: selected.attempt.selectedAgentRef,
        retryIndex,
        result: "ok",
        durationMs,
      });
      return { ...selected, durationMs };
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }
}
