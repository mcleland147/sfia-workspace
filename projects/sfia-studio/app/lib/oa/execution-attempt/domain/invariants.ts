/**
 * Semantic invariants for T-A5 ExecutionAttempt runtime foundation.
 *
 * The shape guard mirrors the modeled conditionals of
 * `execution-attempt.schema.json` 0.2.0-oa so the memory repository can refuse
 * a non-modeled Attempt before persisting it.
 */
import type {
  ActiveExecutionAttemptStatus,
  AgentDescriptor,
  AgentSelectionBinding,
  AttemptDetailCode,
  AuthorityClass,
  ExecutionAttempt,
  ExecutionAttemptStatus,
  SelectionProfile,
  SelectionStrategy,
  TerminalExecutionAttemptStatus,
} from "./types";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export const MAX_LOG_REFS = 16 as const;

export type InvariantViolation = {
  detailCode: AttemptDetailCode;
  reason: string;
};

export const ACTIVE_ATTEMPT_STATUSES: ReadonlySet<ActiveExecutionAttemptStatus> =
  new Set<ActiveExecutionAttemptStatus>([
    "accepted",
    "running",
    "result_pending",
  ]);

export const TERMINAL_ATTEMPT_STATUSES: ReadonlySet<TerminalExecutionAttemptStatus> =
  new Set<TerminalExecutionAttemptStatus>([
    "succeeded",
    "failed",
    "timeout",
    "cancelled",
  ]);

export const ATTEMPT_STATUSES: ReadonlySet<ExecutionAttemptStatus> = new Set<
  ExecutionAttemptStatus
>([
  "accepted",
  "running",
  "result_pending",
  "succeeded",
  "failed",
  "timeout",
  "cancelled",
]);

/**
 * Statuses explicitly removed from the Attempt aggregate in 0.2.0-oa.
 * They must never appear as an Attempt status (planned/blocked/starting are
 * not durable; partial and completed belong to other aggregates / T-A6).
 */
export const FORBIDDEN_ATTEMPT_STATUSES: readonly string[] = [
  "planned",
  "blocked",
  "starting",
  "partial",
  "completed",
];

export const SELECTION_STRATEGIES: ReadonlySet<SelectionStrategy> = new Set<
  SelectionStrategy
>(["capabilities_deterministic", "human_confirmed_proposal"]);

export const SELECTION_PROFILES: ReadonlySet<SelectionProfile> = new Set<
  SelectionProfile
>(["critical", "standard", "light", "capitalization"]);

/** capabilities_deterministic is refused for the critical profile (D02). */
export const NON_CRITICAL_PROFILES: ReadonlySet<SelectionProfile> = new Set<
  SelectionProfile
>(["standard", "light", "capitalization"]);

export function isOaIdentifier(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function isAttemptTerminal(status: ExecutionAttemptStatus): boolean {
  return TERMINAL_ATTEMPT_STATUSES.has(
    status as TerminalExecutionAttemptStatus,
  );
}

export function isAttemptActive(status: ExecutionAttemptStatus): boolean {
  return ACTIVE_ATTEMPT_STATUSES.has(status as ActiveExecutionAttemptStatus);
}

/* -------------------------------------------------------------------------- */
/* agent_selection Confirmation binding (RTA5-01)                              */
/* -------------------------------------------------------------------------- */

/** Exact Confirmation.scope required for an agent selection confirmation. */
export const AGENT_SELECTION_SCOPE = "agent_selection" as const;

/**
 * Canonical Confirmation.actionRef binding.
 *
 * `act:agent_selection:<executionContractId>:v<executionContractVersion>:<selectedAgentRef>`
 *
 * The `act:` namespace is mandatory: T-A3 `RequestConfirmation` validates
 * actionRef against the modeled identifier grammar
 * (`^[a-z][a-z0-9]*:...`), which rejects a bare `agent_selection:` prefix
 * because of the underscore. No T-A3 change is made by T-A5; the closed
 * binding token `agent_selection` is carried as the first path segment.
 */
export const AGENT_SELECTION_ACTION_REF_PREFIX =
  `act:${AGENT_SELECTION_SCOPE}:` as const;

const AGENT_SELECTION_ACTION_REF_PATTERN =
  /^act:agent_selection:(.+?):v(\d+):(.+)$/;

export function formatAgentSelectionActionRef(
  binding: AgentSelectionBinding,
): string {
  return `${AGENT_SELECTION_ACTION_REF_PREFIX}${binding.executionContractId}:v${binding.executionContractVersion}:${binding.selectedAgentRef}`;
}

/**
 * Deterministic parse. The round-trip check removes any ambiguity introduced
 * by identifiers that themselves contain `:` separators.
 */
export function parseAgentSelectionActionRef(
  actionRef: unknown,
): AgentSelectionBinding | null {
  if (typeof actionRef !== "string") return null;
  const match = AGENT_SELECTION_ACTION_REF_PATTERN.exec(actionRef);
  if (!match) return null;
  const [, executionContractId, rawVersion, selectedAgentRef] = match;
  const executionContractVersion = Number(rawVersion);
  if (!Number.isInteger(executionContractVersion) || executionContractVersion < 1) {
    return null;
  }
  if (!isOaIdentifier(executionContractId) || !executionContractId.startsWith("xct:")) {
    return null;
  }
  if (!isOaIdentifier(selectedAgentRef)) return null;
  const binding: AgentSelectionBinding = {
    executionContractId,
    executionContractVersion,
    selectedAgentRef,
  };
  return formatAgentSelectionActionRef(binding) === actionRef ? binding : null;
}

const AUTHORITY_RANK: Record<"N1" | "N2" | "N3", number> = {
  N1: 1,
  N2: 2,
  N3: 3,
};

export function confirmationLevelSatisfiesAuthority(
  confirmationLevel: "N1" | "N2" | "N3",
  requiredAuthority: AuthorityClass,
): boolean {
  const required: "N1" | "N2" | "N3" =
    requiredAuthority === "MORRIS" ? "N3" : requiredAuthority;
  return AUTHORITY_RANK[confirmationLevel] >= AUTHORITY_RANK[required];
}

export type AgentSelectionConfirmationInput = {
  confirmationScope: string;
  confirmationLevel: "N1" | "N2" | "N3";
  confirmationStatus: string;
  confirmationActionRef: string;
  confirmationExpiresAt?: string;
  expectedBinding: AgentSelectionBinding;
  requiredAuthority: AuthorityClass;
  /** Selection TTL that the confirmation must cover. */
  selectionExpiresAt?: string;
  nowIso: string;
  /** Start consumes the confirmation; before that it must not be consumed. */
  allowConsumed?: boolean;
};

/**
 * Verify an agent_selection Confirmation against its closed binding.
 * Distinct from the contract Confirm binding: an execution contract Confirm
 * uses `confirmation.scope === contract.scope`, never `agent_selection`.
 */
export function assertAgentSelectionConfirmation(
  input: AgentSelectionConfirmationInput,
): InvariantViolation | null {
  if (input.confirmationScope !== AGENT_SELECTION_SCOPE) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_scope_not_agent_selection",
    };
  }
  const binding = parseAgentSelectionActionRef(input.confirmationActionRef);
  if (!binding) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_action_ref_unparseable",
    };
  }
  if (binding.executionContractId !== input.expectedBinding.executionContractId) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_binding_contract_mismatch",
    };
  }
  if (
    binding.executionContractVersion !==
    input.expectedBinding.executionContractVersion
  ) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_binding_contract_version_mismatch",
    };
  }
  if (binding.selectedAgentRef !== input.expectedBinding.selectedAgentRef) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_binding_agent_mismatch",
    };
  }
  if (input.confirmationStatus === "consumed") {
    if (!input.allowConsumed) {
      return {
        detailCode: "AGENT_CONFIRMATION_ALREADY_CONSUMED",
        reason: "confirmation_consumed_before_start",
      };
    }
  } else if (input.confirmationStatus !== "granted") {
    return {
      detailCode: "AGENT_CONFIRMATION_REQUIRED",
      reason: `confirmation_status_${input.confirmationStatus}`,
    };
  }
  if (
    !confirmationLevelSatisfiesAuthority(
      input.confirmationLevel,
      input.requiredAuthority,
    )
  ) {
    return {
      detailCode: "AGENT_CONFIRMATION_INVALID",
      reason: "confirmation_level_insufficient",
    };
  }
  if (!input.confirmationExpiresAt) {
    return {
      detailCode: "AGENT_CONFIRMATION_TTL_MISALIGNED",
      reason: "confirmation_expires_at_required",
    };
  }
  const confirmationExpiry = Date.parse(input.confirmationExpiresAt);
  if (Number.isNaN(confirmationExpiry)) {
    return {
      detailCode: "AGENT_CONFIRMATION_TTL_MISALIGNED",
      reason: "confirmation_expires_at_invalid",
    };
  }
  if (confirmationExpiry <= Date.parse(input.nowIso)) {
    return {
      detailCode: "AGENT_CONFIRMATION_EXPIRED",
      reason: "confirmation_expired",
    };
  }
  if (input.selectionExpiresAt) {
    const selectionExpiry = Date.parse(input.selectionExpiresAt);
    if (Number.isNaN(selectionExpiry)) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "selection_expires_at_invalid",
      };
    }
    // TTL alignment (RTA5-01): the confirmation window must cover the
    // selection window; a selection may not outlive its human confirmation.
    if (selectionExpiry > confirmationExpiry) {
      return {
        detailCode: "AGENT_CONFIRMATION_TTL_MISALIGNED",
        reason: "selection_ttl_exceeds_confirmation_ttl",
      };
    }
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/* Registry matching (deny-by-default)                                         */
/* -------------------------------------------------------------------------- */

export type AgentMatchCriteria = {
  requiredCapabilities: string[];
  action: string;
  target: string;
  scope: string;
};

export function agentMatchViolation(
  agent: AgentDescriptor,
  criteria: AgentMatchCriteria,
): InvariantViolation | null {
  if (agent.enabled !== true) {
    return { detailCode: "AGENT_DISABLED", reason: "agent_disabled" };
  }
  if (agent.healthStatus !== "healthy") {
    return {
      detailCode: "AGENT_UNHEALTHY",
      reason: `agent_health_${agent.healthStatus}`,
    };
  }
  for (const capability of criteria.requiredCapabilities) {
    if (!agent.supportedCapabilities.includes(capability)) {
      return {
        detailCode: "AGENT_CAPABILITY_MISMATCH",
        reason: "capability_not_supported",
      };
    }
  }
  if (!agent.allowedActions.includes(criteria.action)) {
    return { detailCode: "AGENT_SCOPE_MISMATCH", reason: "action_not_allowed" };
  }
  if (!agent.allowedTargets.includes(criteria.target)) {
    return { detailCode: "AGENT_SCOPE_MISMATCH", reason: "target_not_allowed" };
  }
  if (!agent.allowedScopes.includes(criteria.scope)) {
    return { detailCode: "AGENT_SCOPE_MISMATCH", reason: "scope_not_allowed" };
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/* Selection strategy / profile                                                */
/* -------------------------------------------------------------------------- */

export function resolveSelectionStrategy(
  profile: SelectionProfile,
  requested?: SelectionStrategy,
): { strategy: SelectionStrategy } | InvariantViolation {
  if (requested !== undefined && !SELECTION_STRATEGIES.has(requested)) {
    return {
      detailCode: "AGENT_SELECTION_STRATEGY_REFUSED",
      reason: "strategy_not_in_closed_enum",
    };
  }
  if (profile === "critical") {
    if (requested && requested !== "human_confirmed_proposal") {
      return {
        detailCode: "AGENT_SELECTION_STRATEGY_REFUSED",
        reason: "critical_requires_human_confirmed_proposal",
      };
    }
    return { strategy: "human_confirmed_proposal" };
  }
  return { strategy: requested ?? "capabilities_deterministic" };
}

/* -------------------------------------------------------------------------- */
/* Modeled shape guard (0.2.0-oa conditionals)                                 */
/* -------------------------------------------------------------------------- */

const LAUNCH_FAIL_STOP_REASON_PATTERN =
  /^(EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED)([:; ].*)?$/;

/**
 * MODELED GAP T-A5-M1 (documented, not silently resolved).
 *
 * `execution-attempt.schema.json` 0.2.0-oa requires `launchedAt` + `startedAt`
 * for `cancelled`, while the approved T-A5 rules require cancelling an
 * `accepted` Attempt WITHOUT any adapter call (nothing was ever launched).
 * Fabricating `launchedAt` would assert a launch that never happened, so the
 * runtime guard excludes `cancelled` from the post-launch set and instead
 * requires `launchedAt ⇒ startedAt`. The modeled schema is NOT modified here;
 * the divergence is escalated for arbitration.
 */
const POST_LAUNCH_STATUSES: ReadonlySet<ExecutionAttemptStatus> = new Set<
  ExecutionAttemptStatus
>(["running", "result_pending", "succeeded", "timeout"]);

/**
 * Refuse any Attempt that the modeled schema would reject.
 * Applied before every persist (create and update).
 */
export function validateAttemptShape(
  attempt: ExecutionAttempt,
): InvariantViolation | null {
  if (attempt.schemaVersion !== "0.2.0-oa") {
    return { detailCode: "ATTEMPT_INVALID", reason: "schema_version_invalid" };
  }
  if (!isOaIdentifier(attempt.attemptId) || !attempt.attemptId.startsWith("xat:")) {
    return { detailCode: "ATTEMPT_INVALID", reason: "attempt_id_invalid" };
  }
  if (
    !isOaIdentifier(attempt.executionContractId) ||
    !attempt.executionContractId.startsWith("xct:")
  ) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "execution_contract_id_invalid",
    };
  }
  if (
    !Number.isInteger(attempt.executionContractVersion) ||
    attempt.executionContractVersion < 1
  ) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "execution_contract_version_invalid",
    };
  }
  if (!isOaIdentifier(attempt.selectedAgentRef)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "selected_agent_ref_invalid" };
  }
  if (FORBIDDEN_ATTEMPT_STATUSES.includes(attempt.status as string)) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: `forbidden_status_${attempt.status}`,
    };
  }
  if (!ATTEMPT_STATUSES.has(attempt.status)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "status_not_in_enum" };
  }
  if (
    typeof attempt.idempotencyKey !== "string" ||
    attempt.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
  ) {
    return { detailCode: "ATTEMPT_INVALID", reason: "idempotency_key_min_8" };
  }
  if (!isOaIdentifier(attempt.correlationId)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "correlation_id_invalid" };
  }
  if (!Number.isInteger(attempt.version) || attempt.version < 1) {
    return { detailCode: "ATTEMPT_INVALID", reason: "version_invalid" };
  }
  if (!attempt.createdAt || Number.isNaN(Date.parse(attempt.createdAt))) {
    return { detailCode: "ATTEMPT_INVALID", reason: "created_at_invalid" };
  }
  if (!attempt.provenance) {
    return { detailCode: "ATTEMPT_INVALID", reason: "provenance_required" };
  }
  if (attempt.selectionStrategy && !SELECTION_STRATEGIES.has(attempt.selectionStrategy)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "selection_strategy_invalid" };
  }
  if (attempt.selectionProfile && !SELECTION_PROFILES.has(attempt.selectionProfile)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "selection_profile_invalid" };
  }
  if (attempt.selectionStrategy === "capabilities_deterministic") {
    if (!attempt.selectionProfile) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "capabilities_deterministic_requires_profile",
      };
    }
    if (!NON_CRITICAL_PROFILES.has(attempt.selectionProfile)) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "capabilities_deterministic_forbidden_on_critical",
      };
    }
  }
  if (
    attempt.selectionProfile === "critical" &&
    attempt.selectionStrategy !== "human_confirmed_proposal"
  ) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "critical_requires_human_confirmed_proposal",
    };
  }
  if (attempt.status === "accepted") {
    if (
      !attempt.selectionStrategy ||
      !attempt.selectionProfile ||
      !attempt.selectionExpiresAt
    ) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "accepted_requires_selection_fields",
      };
    }
  }
  if (
    attempt.selectionStrategy === "human_confirmed_proposal" &&
    attempt.status !== "accepted" &&
    !attempt.agentConfirmationRef
  ) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "human_confirmed_requires_agent_confirmation_ref",
    };
  }
  if (attempt.status === "result_pending" && !attempt.resultPendingAt) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "result_pending_requires_result_pending_at",
    };
  }
  if (attempt.status === "succeeded" && (!attempt.resultRef || !attempt.completedAt)) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "succeeded_requires_result_ref_and_completed_at",
    };
  }
  if (attempt.status === "timeout" && !attempt.timedOutAt) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "timeout_requires_timed_out_at",
    };
  }
  if (attempt.status === "cancelled") {
    if (!attempt.cancelledAt) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "cancelled_requires_cancelled_at",
      };
    }
    // See MODELED GAP T-A5-M1: a pre-launch cancel has no launch timestamps,
    // but a post-launch cancel must carry both.
    if (attempt.launchedAt && !attempt.startedAt) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "post_launch_cancelled_requires_started_at",
      };
    }
  }
  if (POST_LAUNCH_STATUSES.has(attempt.status)) {
    if (!attempt.launchedAt || !attempt.startedAt) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "post_launch_requires_launched_and_started_at",
      };
    }
  }
  if (attempt.status === "failed") {
    if (!attempt.failedAt) {
      return { detailCode: "ATTEMPT_INVALID", reason: "failed_requires_failed_at" };
    }
    if (!attempt.errorRef && !attempt.stopReason) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "failed_requires_error_ref_or_stop_reason",
      };
    }
    if (!attempt.launchedAt) {
      if (
        !attempt.stopReason ||
        !LAUNCH_FAIL_STOP_REASON_PATTERN.test(attempt.stopReason)
      ) {
        return {
          detailCode: "ATTEMPT_INVALID",
          reason: "pre_launch_failed_requires_launch_or_persistence_stop_reason",
        };
      }
    } else if (!attempt.startedAt) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "post_launch_failed_requires_started_at",
      };
    }
  }
  if (attempt.retryOfAttemptId !== undefined) {
    if (
      !isOaIdentifier(attempt.retryOfAttemptId) ||
      !attempt.retryOfAttemptId.startsWith("xat:")
    ) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "retry_of_attempt_id_invalid",
      };
    }
    if (
      !Number.isInteger(attempt.retryIndex) ||
      (attempt.retryIndex as number) < 1 ||
      !Number.isInteger(attempt.maxRetriesBudget)
    ) {
      return {
        detailCode: "ATTEMPT_INVALID",
        reason: "retry_requires_index_and_budget",
      };
    }
  } else if (attempt.retryIndex !== undefined) {
    return {
      detailCode: "ATTEMPT_INVALID",
      reason: "retry_index_requires_retry_of_attempt_id",
    };
  }
  if (attempt.logRefs) {
    if (attempt.logRefs.length > MAX_LOG_REFS) {
      return { detailCode: "ATTEMPT_INVALID", reason: "log_refs_max_16" };
    }
    for (const ref of attempt.logRefs) {
      if (!isOaIdentifier(ref)) {
        return { detailCode: "ATTEMPT_INVALID", reason: "log_ref_invalid" };
      }
    }
  }
  if (attempt.resultRef !== undefined && !isOaIdentifier(attempt.resultRef)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "result_ref_invalid" };
  }
  if (attempt.errorRef !== undefined && !isOaIdentifier(attempt.errorRef)) {
    return { detailCode: "ATTEMPT_INVALID", reason: "error_ref_invalid" };
  }
  return null;
}

/** Closed Attempt transition table (modeled matrix T-A5). */
const ALLOWED_TRANSITIONS: Record<
  ExecutionAttemptStatus,
  readonly ExecutionAttemptStatus[]
> = {
  accepted: ["running", "failed", "cancelled"],
  running: ["result_pending", "succeeded", "failed", "timeout", "cancelled"],
  result_pending: ["succeeded", "failed", "timeout", "cancelled"],
  succeeded: [],
  failed: [],
  timeout: [],
  cancelled: [],
};

export function assertAttemptTransition(
  from: ExecutionAttemptStatus,
  to: ExecutionAttemptStatus,
): InvariantViolation | null {
  if (from === to) return null;
  if (!ALLOWED_TRANSITIONS[from].includes(to)) {
    return {
      detailCode: "ATTEMPT_STATE_CONFLICT",
      reason: `transition_refused_${from}_to_${to}`,
    };
  }
  return null;
}

/** Fingerprint used for Select idempotency replay detection. */
export function selectionFingerprint(input: {
  executionContractId: string;
  executionContractVersion: number;
  selectionStrategy: SelectionStrategy;
  selectionProfile: SelectionProfile;
  selectedAgentRef: string;
}): string {
  return [
    input.executionContractId,
    String(input.executionContractVersion),
    input.selectionStrategy,
    input.selectionProfile,
    input.selectedAgentRef,
  ].join("|");
}
