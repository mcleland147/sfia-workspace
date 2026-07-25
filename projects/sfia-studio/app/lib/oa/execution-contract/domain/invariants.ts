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

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export const EXECUTION_CONTRACT_SCHEMA_VERSION = "0.2.0-oa" as const;

/** Non-whitespace content required (modeled pattern .*\\S.*). */
export const NON_WHITESPACE_PATTERN = /\S/;

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

export function isValidSupersessionReason(reason: unknown): boolean {
  return (
    typeof reason === "string" &&
    reason.length >= 1 &&
    NON_WHITESPACE_PATTERN.test(reason)
  );
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
  if (!Array.isArray(input.decisionRefs) || input.decisionRefs.length < 1) {
    return { detailCode: "DECISION_REQUIRED", reason: "decision_refs_required" };
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
 */
export function contractIdempotencyFingerprint(input: {
  projectId: string;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: AuthorityClass;
  decisionRefs: string[];
}): string {
  return [
    input.projectId,
    input.action,
    input.target,
    input.scope,
    input.requiredAuthority,
    [...input.decisionRefs].sort().join(","),
  ].join("|");
}
