/**
 * SelectExecutionAgent (RTA5-04) — resolves an agent against a CONFIRMED
 * ExecutionContract and persists the selection inside an Attempt `accepted`.
 *
 * Never launches anything: the contract stays `confirmed` and no adapter is
 * called. Re-selection is a new Attempt; an agent is never silently mutated.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort, DecisionServices } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import {
  AGENT_SELECTION_SCOPE,
  agentMatchViolation,
  assertAgentSelectionConfirmation,
  isOaIdentifier,
  parseAgentSelectionActionRef,
  resolveSelectionStrategy,
  selectionFingerprint,
  SELECTION_PROFILES,
  IDEMPOTENCY_KEY_MIN_LENGTH,
} from "../domain/invariants";
import type {
  AgentMatchCriteria,
  InvariantViolation,
} from "../domain/invariants";
import type {
  AgentDescriptor,
  AttemptDetailCode,
  ExecutionAttempt,
  ExecutionAttemptResult,
  SelectExecutionAgentRequest,
  SelectionStrategy,
} from "../domain/types";
import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  buildAttemptProvenance,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { AttemptPolicy } from "./attemptPolicy";

export class SelectExecutionAgent {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly decisionServices: DecisionServices,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly policy: AttemptPolicy,
    private readonly store?: MemoryExecutionAttemptStore,
  ) {}

  async execute(
    request: SelectExecutionAgentRequest,
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
      const error = createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_attempt.accepted",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        executionContractId: request.executionContractId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }
      if (!isOaIdentifier(request.attemptId) || !request.attemptId.startsWith("xat:")) {
        return fail("ATTEMPT_INVALID", "attempt_id_invalid");
      }
      if (
        !isOaIdentifier(request.executionContractId) ||
        !request.executionContractId.startsWith("xct:")
      ) {
        return fail("ATTEMPT_INVALID", "execution_contract_id_invalid");
      }
      if (
        typeof request.idempotencyKey !== "string" ||
        request.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
      ) {
        return fail("ATTEMPT_INVALID", "idempotency_key_min_8");
      }
      if (!SELECTION_PROFILES.has(request.selectionProfile)) {
        return fail("ATTEMPT_INVALID", "selection_profile_invalid");
      }

      const strategyResolution = resolveSelectionStrategy(
        request.selectionProfile,
        request.selectionStrategy,
      );
      if ("detailCode" in strategyResolution) {
        return fail(
          strategyResolution.detailCode,
          strategyResolution.reason,
        );
      }
      const strategy: SelectionStrategy = strategyResolution.strategy;

      // A system-initiated selection is bounded to the closed non-Critical
      // deterministic path (D02/D08) and is never Morris-equivalent.
      if (request.systemInitiated === true) {
        if (
          strategy !== "capabilities_deterministic" ||
          request.selectionProfile === "critical"
        ) {
          return fail(
            "AGENT_SELECTION_STRATEGY_REFUSED",
            "system_actor_restricted_to_non_critical_deterministic",
          );
        }
      }

      const contract = await this.contracts.findById(
        request.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        return fail(gate, `contract_status_${contract.status}`);
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch", {
          expectedVersion: request.expectedContractVersion,
          currentVersion: contract.version,
        });
      }

      // Mandatory T-A4 gate: deny-by-default action/target/scope, decision
      // freshness, Critical acknowledgment, authority.
      const authorization = await this.checkExecutionAuthorization.execute({
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authorization.ok) {
        return fail(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
        );
      }

      const criteria = {
        requiredCapabilities: [...contract.requiredCapabilities],
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      };
      const candidates = this.registry.findCandidates(criteria);
      if (candidates.length === 0) {
        return fail("AGENT_NOT_FOUND", "no_registry_candidate");
      }
      // Deterministic tie-break: agentId lexicographic (registry order).
      const proposedAgentRef = candidates[0].agentId;

      let selectedAgentRef = request.requestedAgentRef ?? proposedAgentRef;
      let agentConfirmationRef: string | undefined;

      if (strategy === "human_confirmed_proposal") {
        if (!request.agentConfirmationRef) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_ref_required",
          );
        }
        const confirmation = await this.decisionServices.confirmations.findById(
          request.agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: request.agentConfirmationRef },
          );
        }
        const binding = parseAgentSelectionActionRef(confirmation.actionRef);
        if (!binding) {
          return fail(
            "AGENT_CONFIRMATION_INVALID",
            "confirmation_action_ref_unparseable",
            { confirmationId: confirmation.confirmationId },
          );
        }
        if (
          request.requestedAgentRef &&
          request.requestedAgentRef !== binding.selectedAgentRef
        ) {
          return fail(
            "AGENT_CONFIRMATION_INVALID",
            "confirmation_binding_agent_mismatch",
            { confirmationId: confirmation.confirmationId },
          );
        }
        selectedAgentRef = binding.selectedAgentRef;
        agentConfirmationRef = confirmation.confirmationId;
      }

      const selectedAgent = this.registry.getAgent(selectedAgentRef);
      if (!selectedAgent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
          selectedAgentRef,
        });
      }
      if (!candidates.some((c) => c.agentId === selectedAgentRef)) {
        // Deny-by-default: re-derive the precise reason for the audit trail.
        const violation = agentDenyReason(selectedAgent, criteria);
        return fail(violation.detailCode, violation.reason, {
          selectedAgentRef,
        });
      }

      const nowMs = Date.parse(timestamp);
      const ttlMs = request.selectionTtlMs ?? this.policy.defaultSelectionTtlMs;
      const selectionExpiresAt =
        request.selectionExpiresAt ?? new Date(nowMs + ttlMs).toISOString();
      if (Number.isNaN(Date.parse(selectionExpiresAt))) {
        return fail("ATTEMPT_INVALID", "selection_expires_at_invalid");
      }
      if (Date.parse(selectionExpiresAt) <= nowMs) {
        return fail("AGENT_SELECTION_EXPIRED", "selection_ttl_in_the_past");
      }

      if (strategy === "human_confirmed_proposal" && agentConfirmationRef) {
        const confirmation = await this.decisionServices.confirmations.findById(
          agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: agentConfirmationRef },
          );
        }
        const violation = assertAgentSelectionConfirmation({
          confirmationScope: confirmation.scope,
          confirmationLevel: confirmation.level,
          confirmationStatus: confirmation.status,
          confirmationActionRef: confirmation.actionRef,
          confirmationExpiresAt: confirmation.expiresAt,
          expectedBinding: {
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            selectedAgentRef,
          },
          requiredAuthority: contract.requiredAuthority,
          selectionExpiresAt,
          nowIso: timestamp,
        });
        if (violation) {
          return fail(violation.detailCode, violation.reason, {
            confirmationId: agentConfirmationRef,
            selectedAgentRef,
          });
        }
        // The confirming actor must itself hold the contract authority bar
        // on the agent_selection scope.
        const confirmerVerification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: confirmation.requestedTo.actorId,
          scope: AGENT_SELECTION_SCOPE,
        });
        if (!confirmerVerification.ok) {
          return fail(
            authorityFailureDetail(confirmerVerification.reason),
            `confirmer_${confirmerVerification.reason}`,
            { confirmationId: agentConfirmationRef },
          );
        }
      }

      const fingerprint = selectionFingerprint({
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        selectionStrategy: strategy,
        selectionProfile: request.selectionProfile,
        selectedAgentRef,
      });

      const byKey = await this.attempts.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (byKey) {
        const existingFingerprint = selectionFingerprint({
          executionContractId: byKey.executionContractId,
          executionContractVersion: byKey.executionContractVersion,
          selectionStrategy:
            byKey.selectionStrategy ?? "capabilities_deterministic",
          selectionProfile: byKey.selectionProfile ?? "standard",
          selectedAgentRef: byKey.selectedAgentRef,
        });
        if (existingFingerprint !== fingerprint) {
          return fail(
            "ATTEMPT_IDEMPOTENCY_CONFLICT",
            "idempotency_payload_mismatch",
          );
        }
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.execution_attempt.accepted",
          ts: timestamp,
          correlationId,
          attemptId: byKey.attemptId,
          executionContractId: byKey.executionContractId,
          executionContractVersion: byKey.executionContractVersion,
          selectedAgentRef: byKey.selectedAgentRef,
          newStatus: byKey.status,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          attempt: byKey,
          contractStatus: contract.status,
          contractVersion: contract.version,
          reusedFromIdempotencyKey: true,
          durationMs,
        };
      }

      if (await this.attempts.exists(request.attemptId)) {
        return fail("ATTEMPT_ALREADY_EXISTS", "attempt_id_taken");
      }

      const attempt: ExecutionAttempt = {
        schemaVersion: "0.2.0-oa",
        attemptId: request.attemptId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        selectedAgentRef,
        status: "accepted",
        idempotencyKey: request.idempotencyKey,
        correlationId,
        version: 1,
        createdAt: timestamp,
        provenance: buildAttemptProvenance({
          actor: request.actor,
          timestamp,
          correlationId,
        }),
        selectionStrategy: strategy,
        selectionProfile: request.selectionProfile,
        proposedAgentRef,
        agentConfirmationRef,
        selectionExpiresAt,
        retryOfAttemptId: request.retryOfAttemptId,
        retryIndex: request.retryIndex,
        maxRetriesBudget:
          request.retryOfAttemptId !== undefined
            ? (request.maxRetriesBudget ?? this.policy.defaultMaxRetriesBudget)
            : request.maxRetriesBudget,
        updatedAt: timestamp,
      };

      const persist = async () => {
        await this.attempts.assertActiveIndexConsistent();
        await this.attempts.reserveActiveContract(
          contract.executionContractId,
          attempt.attemptId,
        );
        await this.attempts.create(attempt);
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, err.message, {
            expectedVersion: err.expectedVersion,
            currentVersion: err.currentVersion,
          });
        }
        return fail("EXECUTION_PERSISTENCE_FAILED", "atomic_select_failed");
      }

      const durationMs = Date.now() - started;
      if (strategy === "human_confirmed_proposal") {
        this.audit.append({
          event: "oa.execution_attempt.agent_proposed",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          executionContractVersion: attempt.executionContractVersion,
          selectedAgentRef: proposedAgentRef,
          confirmationRef: agentConfirmationRef,
          result: "ok",
          durationMs,
        });
      }
      this.audit.append({
        event: "oa.execution_attempt.agent_selected",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        selectedAgentRef: attempt.selectedAgentRef,
        confirmationRef: agentConfirmationRef,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.execution_attempt.accepted",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        executionContractVersion: attempt.executionContractVersion,
        selectedAgentRef: attempt.selectedAgentRef,
        newStatus: "accepted",
        contractStatus: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        attempt: structuredClone(attempt),
        contractStatus: contract.status,
        contractVersion: contract.version,
        durationMs,
      };
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }
}

/** Precise deny reason for a non-candidate agent (audit + error mapping). */
function agentDenyReason(
  agent: AgentDescriptor,
  criteria: AgentMatchCriteria,
): InvariantViolation {
  return (
    agentMatchViolation(agent, criteria) ?? {
      detailCode: "AGENT_NOT_FOUND",
      reason: "agent_not_candidate",
    }
  );
}

/** Map T-A4 authorization detail codes into the T-A5 catalogue. */
export function mapContractAuthorizationDetail(
  detailCode: string,
): AttemptDetailCode {
  switch (detailCode) {
    case "CONTRACT_NOT_FOUND":
      return "EXECUTION_CONTRACT_NOT_FOUND";
    case "TA5_STATUS_REFUSED":
      return "ATTEMPT_STATE_CONFLICT";
    case "AUTHORITY_DENIED":
      return "AUTHORITY_DENIED";
    case "AUTHORITY_SCOPE_MISMATCH":
      return "AUTHORITY_SCOPE_MISMATCH";
    case "AUTHORIZATION_DENIED":
      return "AUTHORIZATION_DENIED";
    case "CRITICAL_NOT_ACKNOWLEDGED":
      return "CRITICAL_NOT_ACKNOWLEDGED";
    case "DECISION_NOT_CURRENT":
    case "DECISION_NOT_FOUND":
    case "DECISION_REQUIRED":
      return "DECISION_NOT_CURRENT";
    case "STATE_CONFLICT":
      return "EXECUTION_CONTRACT_NOT_CONFIRMED";
    default:
      return "AUTHORIZATION_DENIED";
  }
}
