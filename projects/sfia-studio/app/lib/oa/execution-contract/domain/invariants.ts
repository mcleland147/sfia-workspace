/**
 * Semantic invariants for T-A4 ExecutionContract governance.
 */
import type {
  AuthorityClass,
  ExecutionContractStatus,
  ExecutionDetailCode,
  Reversibility,
  Ta4ExecutionContractStatus,
  Ta5ExecutionContractStatus,
} from "./types";
import {
  isExecutionWindowClass,
  type ExecutionWindowClass,
} from "./executionWindowPolicy";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export const EXECUTION_CONTRACT_SCHEMA_VERSION = "0.2.0-oa" as const;

/** Non-whitespace content required (modeled pattern .*\\S.*). */
export const NON_WHITESPACE_PATTERN = /\S/;

/** Zero-width / BOM invisible characters that must not alone satisfy reason checks. */
export const INVISIBLE_CHARS_PATTERN = /[\u200B-\u200D\uFEFF]/g;

/** Visible letter or number (Unicode) — supersession/cancel reasons. */
export const VISIBLE_LETTER_OR_NUMBER = /\p{L}|\p{N}/u;

const AUTHORITY_RANK: Record<"N1" | "N2" | "N3", number> = {
  N1: 1,
  N2: 2,
  N3: 3,
};
export const TA4_STATUSES: ReadonlySet<Ta4ExecutionContractStatus> = new Set([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
  "confirmed",
  "cancelled",
  "superseded",
]);

export const TA5_STATUSES: ReadonlySet<Ta5ExecutionContractStatus> = new Set([
  "executing",
  "completed",
  "failed",
]);

export const PRE_EXEC_CANCEL_STATUSES: ReadonlySet<ExecutionContractStatus> =
  new Set([
    "draft",
    "proposed",
    "validated",
    "confirmation_required",
    "confirmed",
  ]);

export const AUTHORITY_CLASSES: ReadonlySet<AuthorityClass> = new Set([
  "N1",
  "N2",
  "N3",
  "MORRIS",
]);

export type InvariantViolation = {
  detailCode: ExecutionDetailCode;
  reason: string;
};

export function isOaIdentifier(value: string): boolean {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function assertPrefixedId(
  value: string,
  prefix: "xct:" | "prj:" | "cyc:" | "dec:" | "cap:" | "evreq:" | "cor:" | "act:",
): InvariantViolation | null {
  if (!isOaIdentifier(value)) {
    return { detailCode: "CONTRACT_INVALID", reason: "identifier_pattern" };
  }
  if (!value.startsWith(prefix)) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: `identifier_prefix_${prefix}`,
    };
  }
  return null;
}

/**
 * Durable constraint: FC-08 evaluated Confirmation and concluded NOT REQUIRED.
 * Generic EC-domain token — not a W3-A feature import. Reconstructible from
 * persisted constraints (R16). Legacy validated/N1 without this marker is
 * NOT Execute-ready.
 */
export const EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED =
  "EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED" as const;

/** Prefix for effect-driven Confirmation requirement constraints. */
export const EFFECT_CONFIRMATION_REQUIRED_PREFIX =
  "EFFECT_CONFIRMATION_REQUIRED" as const;

/** Prefix for FC-08 system-owned Confirmation evaluation markers. */
export const EXECUTION_CONFIRMATION_EVALUATED_PREFIX =
  "EXECUTION_CONFIRMATION_EVALUATED" as const;

/** Normalize constraint text the same way as W2 amendment ingress. */
export function normalizeExecutionConstraintText(raw: string): string | null {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) return null;
  return trimmed.replace(/\s+/g, " ");
}

export function contractHasEffectConfirmationRequired(
  constraints: readonly string[] | null | undefined,
): boolean {
  if (!constraints) return false;
  return constraints.some(
    (c) =>
      c === EFFECT_CONFIRMATION_REQUIRED_PREFIX ||
      c.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_PREFIX}:`),
  );
}

export function contractHasConfirmationEvaluatedNotRequired(
  constraints: readonly string[] | null | undefined,
): boolean {
  if (!constraints) return false;
  return constraints.includes(EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED);
}

/** Both REQUIRED and NOT_REQUIRED markers present — always fail-closed. */
export function hasConfirmationConstraintContradiction(
  constraints: readonly string[] | null | undefined,
): boolean {
  return (
    contractHasEffectConfirmationRequired(constraints) &&
    contractHasConfirmationEvaluatedNotRequired(constraints)
  );
}

/**
 * System-owned Confirmation constraint namespaces — not user/Pilote amendable.
 * Uses the same normalization as amendment ingress.
 */
export function isSystemOwnedExecutionConstraint(raw: string): boolean {
  const normalized = normalizeExecutionConstraintText(raw);
  if (!normalized) return false;
  if (normalized === EFFECT_CONFIRMATION_REQUIRED_PREFIX) return true;
  if (normalized.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_PREFIX}:`)) {
    return true;
  }
  if (normalized === EXECUTION_CONFIRMATION_EVALUATED_PREFIX) return true;
  if (normalized.startsWith(`${EXECUTION_CONFIRMATION_EVALUATED_PREFIX}:`)) {
    return true;
  }
  return false;
}

export function assertUserAmendableExecutionConstraint(
  raw: string,
): { ok: true; normalized: string } | { ok: false; message: string } {
  const normalized = normalizeExecutionConstraintText(raw);
  if (!normalized) {
    return {
      ok: false,
      message:
        "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
    };
  }
  if (isSystemOwnedExecutionConstraint(normalized)) {
    return {
      ok: false,
      message:
        "Marqueur système réservé (EXECUTION_CONFIRMATION_EVALUATED / EFFECT_CONFIRMATION_REQUIRED) — amendement Pilote refusé.",
    };
  }
  return { ok: true, normalized };
}

/**
 * Execute-ready lifecycle status for FC-09 / FC-10 gates.
 *
 * Order: contradiction check FIRST (including confirmed).
 * - contradictory REQUIRED + NOT_REQUIRED → NOT ready (any status)
 * - `confirmed` → ready
 * - `validated` + N1 + CONFIRMATION_EVALUATED:NOT_REQUIRED
 *   + no EFFECT_CONFIRMATION_REQUIRED* → ready
 * - `validated` + N1 without explicit evaluation marker → NOT ready (legacy)
 * - N2/N3/MORRIS validated → NOT ready
 * - `confirmation_required` → NOT ready
 *
 * Never a universal validated+N1 bypass.
 */
export function isExecutionReadyStatus(contract: {
  status: ExecutionContractStatus | string;
  requiredAuthority: AuthorityClass | string;
  constraints?: readonly string[] | null;
}): boolean {
  const constraints = contract.constraints ?? [];
  if (hasConfirmationConstraintContradiction(constraints)) return false;
  if (contract.status === "confirmed") return true;
  if (contract.status !== "validated") return false;
  if (contract.requiredAuthority !== "N1") return false;
  const required = contractHasEffectConfirmationRequired(constraints);
  const notRequired = contractHasConfirmationEvaluatedNotRequired(constraints);
  if (required) return false;
  return notRequired;
}

export function isTa5Status(status: ExecutionContractStatus): boolean {
  return TA5_STATUSES.has(status as Ta5ExecutionContractStatus);
}

export function isTa4Status(status: ExecutionContractStatus): boolean {
  return TA4_STATUSES.has(status as Ta4ExecutionContractStatus);
}

export function isValidAuthorityClass(value: unknown): value is AuthorityClass {
  return (
    typeof value === "string" &&
    AUTHORITY_CLASSES.has(value as AuthorityClass)
  );
}

/**
 * Supersession / cancel reason must contain a visible letter or number after
 * stripping zero-width / BOM characters (hardens beyond modeled `.*\\S.*`).
 */
export function isValidSupersessionReason(reason: unknown): boolean {
  if (typeof reason !== "string" || reason.length < 1) {
    return false;
  }
  const visible = reason.replace(INVISIBLE_CHARS_PATTERN, "");
  return VISIBLE_LETTER_OR_NUMBER.test(visible);
}

/**
 * Confirmation.level must satisfy contract.requiredAuthority
 * (MORRIS maps to N3 for confirmation-level comparison).
 */
export function confirmationLevelSatisfiesAuthority(
  confirmationLevel: "N1" | "N2" | "N3",
  requiredAuthority: AuthorityClass,
): boolean {
  const required: "N1" | "N2" | "N3" =
    requiredAuthority === "MORRIS" ? "N3" : requiredAuthority;
  return AUTHORITY_RANK[confirmationLevel] >= AUTHORITY_RANK[required];
}

/**
 * Confirmation binding for ConfirmExecutionContract.
 * Emits CONFIRMATION_INVALID on scope / level / decisionRef mismatch.
 */
export function assertConfirmationBinding(input: {
  confirmationScope: string;
  confirmationLevel: "N1" | "N2" | "N3";
  confirmationDecisionRef?: string;
  contractScope: string;
  requiredAuthority: AuthorityClass;
  contractDecisionRefs: string[];
}): InvariantViolation | null {
  if (input.confirmationScope !== input.contractScope) {
    return {
      detailCode: "CONFIRMATION_INVALID",
      reason: "confirmation_scope_mismatch",
    };
  }
  if (
    !confirmationLevelSatisfiesAuthority(
      input.confirmationLevel,
      input.requiredAuthority,
    )
  ) {
    return {
      detailCode: "CONFIRMATION_INVALID",
      reason: "confirmation_level_insufficient",
    };
  }
  if (
    input.confirmationDecisionRef !== undefined &&
    input.confirmationDecisionRef !== null &&
    input.confirmationDecisionRef !== "" &&
    !input.contractDecisionRefs.includes(input.confirmationDecisionRef)
  ) {
    return {
      detailCode: "CONFIRMATION_INVALID",
      reason: "confirmation_decision_ref_not_in_contract",
    };
  }
  return null;
}

/**
 * Clone mutable arrays/objects BEFORE validation (TOCTOU / B1 pattern).
 * Caller must use returned clones for all subsequent reads.
 */
export function cloneContractArrays(input: {
  decisionRefs?: string[];
  requiredCapabilities?: string[];
  constraints?: string[];
  stopConditions?: string[];
  evidenceRequirements?: string[];
  expectedOutputs?: string[];
  inputs?: Record<string, unknown>;
}): {
  decisionRefs: string[];
  requiredCapabilities: string[];
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  expectedOutputs: string[];
  inputs: Record<string, unknown> | undefined;
} {
  return {
    decisionRefs: input.decisionRefs ? [...input.decisionRefs] : [],
    requiredCapabilities: input.requiredCapabilities
      ? [...input.requiredCapabilities]
      : [],
    constraints: input.constraints ? [...input.constraints] : [],
    stopConditions: input.stopConditions ? [...input.stopConditions] : [],
    evidenceRequirements: input.evidenceRequirements
      ? [...input.evidenceRequirements]
      : [],
    expectedOutputs: input.expectedOutputs ? [...input.expectedOutputs] : [],
    inputs: input.inputs ? structuredClone(input.inputs) : undefined,
  };
}

export function validateNonEmptyString(
  value: unknown,
  reason: string,
): InvariantViolation | null {
  if (typeof value !== "string" || value.trim().length < 1) {
    return { detailCode: "CONTRACT_INVALID", reason };
  }
  return null;
}

export function validateIdentifierArray(
  values: string[],
  reasonPrefix: string,
  minItems = 1,
): InvariantViolation | null {
  if (!Array.isArray(values) || values.length < minItems) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: `${reasonPrefix}_required`,
    };
  }
  for (const v of values) {
    if (!isOaIdentifier(v)) {
      return {
        detailCode: "CONTRACT_INVALID",
        reason: `${reasonPrefix}_id_invalid`,
      };
    }
  }
  return null;
}

export function validateBuildFields(input: {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs: string[];
  action: string;
  target: string;
  scope: string;
  requiredCapabilities: string[];
  requiredAuthority: AuthorityClass;
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: Reversibility;
  executionWindowClass?: ExecutionWindowClass;
  idempotencyKey: string;
  correlationId: string;
  status: "draft" | "proposed";
}): InvariantViolation | null {
  const idErr = assertPrefixedId(input.executionContractId, "xct:");
  if (idErr) return idErr;
  if (!isOaIdentifier(input.projectId) || !input.projectId.startsWith("prj:")) {
    return { detailCode: "CONTRACT_INVALID", reason: "project_id_invalid" };
  }
  if (input.cycleInstanceId) {
    if (
      !isOaIdentifier(input.cycleInstanceId) ||
      !input.cycleInstanceId.startsWith("cyc:")
    ) {
      return {
        detailCode: "CONTRACT_INVALID",
        reason: "cycle_instance_id_invalid",
      };
    }
  }
  if (!isValidAuthorityClass(input.requiredAuthority)) {
    return { detailCode: "CONTRACT_INVALID", reason: "authority_enum_invalid" };
  }
  const actionErr = validateNonEmptyString(input.action, "action_required");
  if (actionErr) return actionErr;
  const targetErr = validateNonEmptyString(input.target, "target_required");
  if (targetErr) return targetErr;
  const scopeErr = validateNonEmptyString(input.scope, "scope_required");
  if (scopeErr) return scopeErr;

  const capsErr = validateIdentifierArray(
    input.requiredCapabilities,
    "capabilities",
  );
  if (capsErr) return capsErr;
  if (
    !Array.isArray(input.constraints) ||
    input.constraints.length < 1 ||
    input.constraints.some(
      (c) => typeof c !== "string" || c.trim().length < 1,
    )
  ) {
    return { detailCode: "CONTRACT_INVALID", reason: "constraints_required" };
  }
  if (
    !Array.isArray(input.stopConditions) ||
    input.stopConditions.length < 1 ||
    input.stopConditions.some(
      (c) => typeof c !== "string" || c.trim().length < 1,
    )
  ) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: "stop_conditions_required",
    };
  }
  const evErr = validateIdentifierArray(
    input.evidenceRequirements,
    "evidence",
  );
  if (evErr) return evErr;

  if (
    input.reversibility !== "reversible" &&
    input.reversibility !== "partially_reversible" &&
    input.reversibility !== "irreversible"
  ) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: "reversibility_invalid",
    };
  }
  if (
    input.executionWindowClass !== undefined &&
    !isExecutionWindowClass(input.executionWindowClass)
  ) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: "execution_window_class_invalid",
    };
  }
  if (
    typeof input.idempotencyKey !== "string" ||
    input.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
  ) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: "idempotency_key_min_8",
    };
  }
  if (!isOaIdentifier(input.correlationId)) {
    return {
      detailCode: "CONTRACT_INVALID",
      reason: "correlation_id_invalid",
    };
  }
  if (input.status !== "draft" && input.status !== "proposed") {
    return { detailCode: "CONTRACT_INVALID", reason: "build_status_invalid" };
  }
  if (!Array.isArray(input.decisionRefs)) {
    return { detailCode: "CONTRACT_INVALID", reason: "decision_refs_invalid" };
  }
  for (const d of input.decisionRefs) {
    if (!isOaIdentifier(d) || !d.startsWith("dec:")) {
      return {
        detailCode: "CONTRACT_INVALID",
        reason: "decision_ref_invalid",
      };
    }
  }
  return null;
}

/**
 * Deny-by-default: requested action/target/scope must exactly match contract.
 */
export function denyByDefaultMatch(input: {
  contractAction: string;
  contractTarget: string;
  contractScope: string;
  requestedAction: string;
  requestedTarget: string;
  requestedScope: string;
}): InvariantViolation | null {
  if (
    input.contractAction !== input.requestedAction ||
    input.contractTarget !== input.requestedTarget ||
    input.contractScope !== input.requestedScope
  ) {
    return {
      detailCode: "AUTHORIZATION_DENIED",
      reason: "action_target_scope_mismatch",
    };
  }
  return null;
}

export function assertNoSelfSupersession(
  newId: string,
  supersedesId: string,
): InvariantViolation | null {
  if (newId === supersedesId) {
    return { detailCode: "SELF_SUPERSESSION", reason: "self_supersession" };
  }
  return null;
}

export function assertNotTa5Injection(input: {
  status?: string;
  selectedAgentRef?: string;
}): InvariantViolation | null {
  if (
    input.status === "executing" ||
    input.status === "completed" ||
    input.status === "failed"
  ) {
    return { detailCode: "TA5_STATUS_REFUSED", reason: "ta5_status_injection" };
  }
  if (input.selectedAgentRef !== undefined && input.selectedAgentRef !== null) {
    // Hostile injection of selectedAgentRef is refused (even if ignored later).
    return {
      detailCode: "TA5_STATUS_REFUSED",
      reason: "selected_agent_ref_refused",
    };
  }
  return null;
}

/**
 * Fingerprint for idempotency conflict detection (stable field subset).
 * Includes constraints / capabilities / stopConditions / evidence /
 * reversibility / status so hostile divergences cannot reuse a key.
 */
export function contractIdempotencyFingerprint(input: {
  projectId: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: AuthorityClass;
  decisionRefs: string[];
  constraints: string[];
  requiredCapabilities: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: Reversibility;
  status: "draft" | "proposed" | string;
  executionWindowClass?: ExecutionWindowClass;
}): string {
  const stableJoin = (values: string[]) => [...values].sort().join(",");
  return [
    input.projectId,
    input.action,
    input.target,
    input.scope,
    input.requiredAuthority,
    stableJoin(input.decisionRefs),
    stableJoin(input.constraints),
    stableJoin(input.requiredCapabilities),
    stableJoin(input.stopConditions),
    stableJoin(input.evidenceRequirements),
    input.reversibility,
    input.status,
    input.executionWindowClass ?? "",
  ].join("|");
}
