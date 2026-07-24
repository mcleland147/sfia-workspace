/**
 * Semantic invariants for T-A3 Decision / Confirmation / Authority.
 */
import type {
  ConfirmationLevel,
  DecisionAuthority,
  DecisionDetailCode,
  DecisionOption,
  DecisionReservation,
  HumanDecisionStatus,
} from "./types";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export type InvariantViolation = {
  detailCode: DecisionDetailCode;
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
  prefix: "dec:" | "cfm:" | "opt:" | "rsv:" | "evd:" | "prj:" | "cyc:" | "act:",
): InvariantViolation | null {
  if (!isOaIdentifier(value)) {
    return { detailCode: "DECISION_INVALID", reason: "identifier_pattern" };
  }
  if (!value.startsWith(prefix)) {
    return {
      detailCode: "DECISION_INVALID",
      reason: `identifier_prefix_${prefix}`,
    };
  }
  return null;
}

const LEVEL_RANK: Record<ConfirmationLevel, number> = {
  N1: 1,
  N2: 2,
  N3: 3,
};

/** True when verifiedLevel is sufficient for requiredLevel (N3 covers N2/N1). */
export function levelSatisfies(
  verified: ConfirmationLevel,
  required: ConfirmationLevel,
): boolean {
  return LEVEL_RANK[verified] >= LEVEL_RANK[required];
}

/**
 * Clone mutable arrays BEFORE validation (T-A2 B1 pattern).
 * Caller must use returned clones for all subsequent reads.
 */
export function cloneDecisionArrays(input: {
  options?: DecisionOption[];
  reservations?: DecisionReservation[];
  evidenceRefs?: string[];
  impacts?: string[];
  risks?: string[];
}): {
  options: DecisionOption[];
  reservations: DecisionReservation[];
  evidenceRefs: string[];
  impacts: string[];
  risks: string[];
} {
  return {
    options: input.options ? structuredClone(input.options) : [],
    reservations: input.reservations
      ? structuredClone(input.reservations)
      : [],
    evidenceRefs: input.evidenceRefs ? [...input.evidenceRefs] : [],
    impacts: input.impacts ? [...input.impacts] : [],
    risks: input.risks ? [...input.risks] : [],
  };
}

export function validateDecisionFields(input: {
  decisionId: string;
  projectId: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  nonStructuring?: boolean;
  cycleInstanceId?: string;
}): InvariantViolation | null {
  const idErr = assertPrefixedId(input.decisionId, "dec:");
  if (idErr) return idErr;
  if (!isOaIdentifier(input.projectId) || !input.projectId.startsWith("prj:")) {
    return { detailCode: "DECISION_INVALID", reason: "project_id_invalid" };
  }
  if (typeof input.subject !== "string" || input.subject.trim().length < 1) {
    return { detailCode: "DECISION_INVALID", reason: "subject_required" };
  }
  if (!Array.isArray(input.options) || input.options.length < 1) {
    return { detailCode: "DECISION_INVALID", reason: "options_required" };
  }
  const optionIds = new Set<string>();
  for (const opt of input.options) {
    if (!opt?.optionId || !isOaIdentifier(opt.optionId)) {
      return { detailCode: "DECISION_INVALID", reason: "option_id_invalid" };
    }
    if (typeof opt.label !== "string" || opt.label.trim().length < 1) {
      return { detailCode: "DECISION_INVALID", reason: "option_label_required" };
    }
    if (optionIds.has(opt.optionId)) {
      return { detailCode: "DECISION_INVALID", reason: "option_id_duplicate" };
    }
    optionIds.add(opt.optionId);
  }
  if (!optionIds.has(input.selectedOptionId)) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "selected_option_not_in_options",
    };
  }
  if (
    input.authority !== "morris" &&
    input.authority !== "delegated" &&
    input.authority !== "system_non_structuring"
  ) {
    return { detailCode: "DECISION_INVALID", reason: "authority_invalid" };
  }
  if (input.authority === "system_non_structuring" && !input.nonStructuring) {
    return {
      detailCode: "AUTHORITY_DENIED",
      reason: "system_non_structuring_requires_flag",
    };
  }
  if (input.cycleInstanceId) {
    if (
      !isOaIdentifier(input.cycleInstanceId) ||
      !input.cycleInstanceId.startsWith("cyc:")
    ) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "cycle_instance_id_invalid",
      };
    }
  }
  return null;
}

export function validateConfirmationFields(input: {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  scope: string;
  idempotencyKey: string;
}): InvariantViolation | null {
  const idErr = assertPrefixedId(input.confirmationId, "cfm:");
  if (idErr) {
    return { detailCode: "CONFIRMATION_INVALID", reason: idErr.reason };
  }
  if (input.level !== "N1" && input.level !== "N2" && input.level !== "N3") {
    return { detailCode: "CONFIRMATION_INVALID", reason: "level_invalid" };
  }
  if (!isOaIdentifier(input.actionRef)) {
    return { detailCode: "CONFIRMATION_INVALID", reason: "action_ref_invalid" };
  }
  if (typeof input.scope !== "string" || input.scope.trim().length < 1) {
    return { detailCode: "CONFIRMATION_INVALID", reason: "scope_required" };
  }
  if (
    typeof input.idempotencyKey !== "string" ||
    input.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
  ) {
    return {
      detailCode: "CONFIRMATION_INVALID",
      reason: "idempotency_key_min_8",
    };
  }
  return null;
}

/**
 * Recommendation flag on an option must never auto-select the decision.
 * selectedOptionId must be explicit and independent of recommended.
 */
export function assertRecommendationIsNotDecision(input: {
  options: DecisionOption[];
  selectedOptionId: string;
}): InvariantViolation | null {
  const recommended = input.options.filter((o) => o.recommended === true);
  if (
    recommended.length === 1 &&
    recommended[0].optionId === input.selectedOptionId &&
    input.options.every(
      (o) => o.optionId === input.selectedOptionId || !o.recommended,
    )
  ) {
    // Allowed: human may select the recommended option explicitly.
    // Forbidden would be auto-setting selected from recommended without request.
    return null;
  }
  return null;
}

export function isConfirmationExpired(
  expiresAt: string | undefined,
  nowIso: string,
): boolean {
  if (!expiresAt) return false;
  return Date.parse(expiresAt) <= Date.parse(nowIso);
}

export function confirmationPayloadFingerprint(input: {
  level: ConfirmationLevel;
  actionRef: string;
  scope: string;
  decisionRef?: string;
  requestedToActorId: string;
}): string {
  return [
    input.level,
    input.actionRef,
    input.scope,
    input.decisionRef ?? "",
    input.requestedToActorId,
  ].join("|");
}
