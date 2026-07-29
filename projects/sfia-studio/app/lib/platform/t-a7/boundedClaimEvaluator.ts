/**
 * T-A7 consolidated lot — R-M01 bounded claim evaluator (INTERNAL_ONLY).
 * Honest statuses; refuses delivery/cutover/RUN/complete surclaims.
 * Does not close T-A6 or R-M01.
 */

export type BoundedClaimId =
  | "T_A7_COMPLETE"
  | "T_A6_COMPLETE"
  | "OPTION_A_COMPLETE"
  | "RUN_READY"
  | "DELIVERY_READY"
  | "CUTOVER_READY"
  | "F11_INTERNAL_CONTRACT_PRESENT"
  | "F13_BOUNDED_HISTORY_PRESENT"
  | "CI_GREEN_ONLY"
  | "HEALTH_SIMULATED"
  | "CUSTOM_BOUNDED";

export type ClaimEvaluationStatus =
  | "SUPPORTED"
  | "UNSUPPORTED"
  | "UNKNOWN"
  | "BLOCKED";

export type CriterionState = "SATISFIED" | "NOT_SATISFIED" | "UNKNOWN";

export interface ClaimCriterion {
  readonly id: string;
  readonly state: CriterionState;
  readonly detail: string;
}

export interface ClaimEvidenceSource {
  readonly id: string;
  readonly kind: "TEST" | "DOC" | "CI" | "OBSERVATION" | "UNKNOWN";
  readonly present: boolean;
  readonly detail: string;
}

export interface BoundedClaimEvaluation {
  readonly schemaVersion: "t-a7-r-m01-claim-eval.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly claimId: BoundedClaimId | string;
  readonly status: ClaimEvaluationStatus;
  readonly evidenceSources: readonly ClaimEvidenceSource[];
  readonly criteria: readonly ClaimCriterion[];
  readonly activeBlockers: readonly string[];
  readonly dependencies: readonly string[];
  readonly explanation: string;
  readonly rM01RemainsOpen: true;
  readonly tA6Complete: false;
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
}

export interface EvaluateBoundedClaimInput {
  readonly claimId: BoundedClaimId | string;
  readonly evidenceSources?: readonly ClaimEvidenceSource[];
  readonly criteria?: readonly ClaimCriterion[];
  readonly activeBlockers?: readonly string[];
  readonly tA6Complete?: boolean;
  readonly hardOpen?: boolean;
  readonly healthStatus?: "SIMULATED" | "OBSERVED" | "UNKNOWN";
  readonly ciGreen?: boolean;
}

const FORBIDDEN_SUPPORTED_CLAIMS: ReadonlySet<string> = new Set([
  "T_A7_COMPLETE",
  "T_A6_COMPLETE",
  "OPTION_A_COMPLETE",
  "RUN_READY",
  "DELIVERY_READY",
  "CUTOVER_READY",
]);

function freezeEval(value: BoundedClaimEvaluation): BoundedClaimEvaluation {
  return Object.freeze({
    ...value,
    evidenceSources: Object.freeze([...value.evidenceSources]),
    criteria: Object.freeze([...value.criteria]),
    activeBlockers: Object.freeze([...value.activeBlockers]),
    dependencies: Object.freeze([...value.dependencies]),
  });
}

/**
 * Evaluate a bounded claim. Forbidden surclaims never become SUPPORTED.
 * CI green alone and health SIMULATED never elevate RUN/delivery claims.
 */
export function evaluateBoundedClaim(
  input: EvaluateBoundedClaimInput,
): BoundedClaimEvaluation {
  const claimId = input.claimId;
  const hardOpen = input.hardOpen ?? true;
  const tA6Complete = input.tA6Complete ?? false;
  const healthStatus = input.healthStatus ?? "SIMULATED";
  const ciGreen = input.ciGreen ?? false;
  const evidenceSources = input.evidenceSources ?? [];
  const criteria = input.criteria ?? [];
  const activeBlockers = input.activeBlockers ?? [
    "B5_OPEN",
    "R1_OPEN",
    "R_M01_OPEN",
    "HARD_OPEN",
  ];

  const base = {
    schemaVersion: "t-a7-r-m01-claim-eval.1" as const,
    accessSurface: "INTERNAL_ONLY" as const,
    claimId,
    evidenceSources,
    criteria,
    activeBlockers,
    rM01RemainsOpen: true as const,
    tA6Complete: false as const,
    mutable: false as const,
    iam: "NOT_SELECTED" as const,
    persistence: "NOT_SELECTED" as const,
  };

  // Forbidden surclaims — always UNSUPPORTED or BLOCKED, never SUPPORTED.
  if (FORBIDDEN_SUPPORTED_CLAIMS.has(claimId)) {
    const deliveryAdjacent =
      claimId === "DELIVERY_READY" ||
      claimId === "CUTOVER_READY" ||
      claimId === "RUN_READY";

    if (deliveryAdjacent && hardOpen) {
      return freezeEval({
        ...base,
        status: "BLOCKED",
        dependencies: ["HARD", "B5", "T-A6"],
        explanation: `${claimId} is BLOCKED while HARD is OPEN HARD; CI/health cannot elevate delivery/cutover/RUN claims.`,
      });
    }

    if (
      (claimId === "T_A6_COMPLETE" ||
        claimId === "OPTION_A_COMPLETE" ||
        claimId === "T_A7_COMPLETE") &&
      !tA6Complete
    ) {
      return freezeEval({
        ...base,
        status: "BLOCKED",
        dependencies: ["T-A6", "R-M01"],
        explanation: `${claimId} is BLOCKED — T-A6 remains incomplete; R-M01 stays OPEN.`,
      });
    }

    return freezeEval({
      ...base,
      status: "UNSUPPORTED",
      dependencies: ["GOVERNANCE"],
      explanation: `${claimId} must never be SUPPORTED by this bounded evaluator.`,
    });
  }

  // CI green alone is never enough for readiness-adjacent claims.
  if (claimId === "CI_GREEN_ONLY") {
    return freezeEval({
      ...base,
      status: ciGreen ? "UNSUPPORTED" : "UNKNOWN",
      dependencies: ["EVIDENCE_BEYOND_CI"],
      explanation:
        "CI green alone is insufficient for readiness or delivery claims.",
    });
  }

  if (claimId === "HEALTH_SIMULATED") {
    return freezeEval({
      ...base,
      status: healthStatus === "SIMULATED" ? "UNSUPPORTED" : "UNKNOWN",
      dependencies: ["OBSERVED_HEALTH"],
      explanation:
        "health SIMULATED is not evidence of RUN READY.",
    });
  }

  // Bounded non-delivery claims may be SUPPORTED with complete evidence.
  if (
    claimId === "F11_INTERNAL_CONTRACT_PRESENT" ||
    claimId === "F13_BOUNDED_HISTORY_PRESENT" ||
    claimId === "CUSTOM_BOUNDED"
  ) {
    const allCriteriaOk =
      criteria.length > 0 &&
      criteria.every((c) => c.state === "SATISFIED");
    const evidenceOk =
      evidenceSources.length > 0 &&
      evidenceSources.every((e) => e.present);

    if (!evidenceOk && criteria.length === 0) {
      return freezeEval({
        ...base,
        status: "UNKNOWN",
        dependencies: ["EVIDENCE"],
        explanation: "Insufficient evidence to evaluate bounded claim.",
      });
    }

    if (allCriteriaOk && evidenceOk) {
      return freezeEval({
        ...base,
        status: "SUPPORTED",
        dependencies: [],
        explanation: `${claimId} SUPPORTED for bounded internal contract evidence only — does not imply RUN/delivery/cutover readiness.`,
      });
    }

    if (criteria.some((c) => c.state === "NOT_SATISFIED")) {
      return freezeEval({
        ...base,
        status: "UNSUPPORTED",
        dependencies: ["CRITERIA"],
        explanation: `${claimId} UNSUPPORTED — one or more criteria not satisfied.`,
      });
    }

    return freezeEval({
      ...base,
      status: "UNKNOWN",
      dependencies: ["CRITERIA", "EVIDENCE"],
      explanation: `${claimId} UNKNOWN — incomplete criteria or evidence.`,
    });
  }

  return freezeEval({
    ...base,
    status: "UNKNOWN",
    dependencies: ["UNKNOWN_CLAIM"],
    explanation: `Claim ${claimId} has no bounded evaluation rule — UNKNOWN.`,
  });
}
