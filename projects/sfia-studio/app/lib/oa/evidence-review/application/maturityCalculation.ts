/**
 * Deterministic fail-closed maturity calculation from exact ClaimEvaluation bindings.
 * Never promotes by default. Waiver ≠ PASS. Disputed/superseded never positive.
 * Never mutates ClaimEvaluation. Never creates Decision or sets executionAuthority.
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type {
  MaturityClaimBinding,
  MaturityClaimIneligibilityCode,
  MaturityCriterionResult,
  MaturityGap,
  MaturityLevel,
} from "../domain/maturityAssessmentTypes";
import { levelRank, minLevel } from "../domain/maturityAssessmentInvariants";

export type ClaimEligibilityInput = {
  claim: ClaimEvaluation;
  expectedVersion: number;
  isSuperseded: boolean;
};

export function assessClaimEligibility(
  input: ClaimEligibilityInput,
): MaturityClaimBinding {
  const { claim, expectedVersion, isSuperseded } = input;
  const base = {
    claimEvaluationId: claim.claimEvaluationId,
    claimEvaluationVersion: claim.version,
    claimType: claim.claimType,
    criticality: claim.criticality,
    status: claim.status,
    confirmationAuthority: claim.confirmationAuthority,
    confirmedByActorId: claim.confirmedBy?.actorId,
    reviewBundleId: claim.reviewBundleId,
    reviewBundleVersion: claim.reviewBundleVersion,
  };

  const ineligible = (
    code: MaturityClaimIneligibilityCode,
  ): MaturityClaimBinding => ({
    ...base,
    eligibleForPositive: false,
    ineligibilityCode: code,
  });

  if (claim.version !== expectedVersion) {
    return ineligible("version_mismatch");
  }
  if (isSuperseded) {
    return ineligible("superseded");
  }
  if (claim.status === "disputed") {
    return ineligible("disputed");
  }
  if (claim.status === "waived") {
    return ineligible("waived");
  }
  if (claim.status !== "pass") {
    return ineligible("not_pass");
  }

  // PASS requires confirmation when Critical/structural (or when confirmationAuthority missing for non-deterministic).
  if (claim.criticality === "structural") {
    if (
      !claim.confirmedBy ||
      claim.confirmationAuthority !== "morris"
    ) {
      return ineligible("structural_confirmation_required");
    }
  } else if (claim.criticality === "critical") {
    if (
      !claim.confirmedBy ||
      claim.confirmationAuthority === "system_deterministic" ||
      claim.confirmedBy.role === "system" ||
      claim.confirmedBy.role === "agent"
    ) {
      return ineligible("confirmation_required");
    }
  } else {
    // non_critical: system_deterministic PASS ok; otherwise human confirmation if evaluating was confirmed to pass
    if (
      claim.confirmationAuthority !== "system_deterministic" &&
      !claim.confirmedBy
    ) {
      return ineligible("confirmation_required");
    }
  }

  return { ...base, eligibleForPositive: true };
}

export type MaturityCalculation = {
  /** Highest modeled level supported by eligible claims; null if none eligible. */
  supportedLevel: MaturityLevel | null;
  proposedLevel: MaturityLevel;
  status: "proposed" | "blocked";
  criteriaResults: MaturityCriterionResult[];
  gaps: MaturityGap[];
  dimensions?: Array<{
    dimensionId: string;
    proposedLevel: MaturityLevel;
    blocked?: boolean;
  }>;
};

/**
 * Explicit level thresholds (no averages, no majority):
 * - DOCUMENTED: ≥1 eligible PASS
 * - VALIDATED: ≥1 eligible PASS with any confirmation authority
 * - MODELED: ≥1 eligible PASS with claimType technique|maturite_support|conformite
 * - IMPLEMENTED: ≥1 eligible PASS with criticality critical|structural
 * - ADOPTED: ≥1 eligible PASS structural with morris confirmation
 * HARD reserves ⇒ blocked (cannot confirm; proposedLevel capped at DOCUMENTED for display)
 */
export function calculateMaturityLevel(input: {
  requestedLevel: MaturityLevel;
  bindings: MaturityClaimBinding[];
  blockingReservationRefs: string[];
  dimensions?: Array<{ dimensionId: string; proposedLevel: MaturityLevel }>;
}): MaturityCalculation {
  const eligible = input.bindings.filter((b) => b.eligibleForPositive);
  const gaps: MaturityGap[] = [];

  for (const b of input.bindings) {
    if (b.eligibleForPositive) continue;
    if (b.ineligibilityCode === "disputed") {
      gaps.push({
        code: "claim_disputed",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "waived") {
      gaps.push({
        code: "claim_waived",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "superseded") {
      gaps.push({
        code: "claim_superseded",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (
      b.ineligibilityCode === "confirmation_required" ||
      b.ineligibilityCode === "structural_confirmation_required"
    ) {
      gaps.push({
        code: "claim_not_confirmed",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "version_mismatch") {
      gaps.push({
        code: "claim_version_mismatch",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "missing") {
      gaps.push({
        code: "claim_missing",
        claimEvaluationId: b.claimEvaluationId,
      });
    }
  }

  const hasEligible = eligible.length > 0;
  if (!hasEligible) {
    gaps.push({ code: "no_eligible_claims" });
  }

  const hasConfirmed = eligible.some(
    (b) =>
      Boolean(b.confirmationAuthority) || Boolean(b.confirmedByActorId),
  );
  const hasModeledSupport = eligible.some((b) =>
    ["technique", "maturite_support", "conformite"].includes(b.claimType),
  );
  const hasImplementedSupport = eligible.some(
    (b) => b.criticality === "critical" || b.criticality === "structural",
  );
  const hasAdoptedSupport = eligible.some(
    (b) =>
      b.criticality === "structural" &&
      b.confirmationAuthority === "morris",
  );
  const hardBlocked = input.blockingReservationRefs.length > 0;

  const criteriaResults: MaturityCriterionResult[] = [
    {
      code: "has_eligible_pass",
      satisfied: hasEligible,
      supportingClaimEvaluationIds: eligible.map((b) => b.claimEvaluationId),
    },
    {
      code: "has_confirmed_pass",
      satisfied: hasConfirmed,
      supportingClaimEvaluationIds: eligible
        .filter((b) => b.confirmationAuthority || b.confirmedByActorId)
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_modeled_support",
      satisfied: hasModeledSupport,
      supportingClaimEvaluationIds: eligible
        .filter((b) =>
          ["technique", "maturite_support", "conformite"].includes(b.claimType),
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_implemented_support",
      satisfied: hasImplementedSupport,
      supportingClaimEvaluationIds: eligible
        .filter(
          (b) =>
            b.criticality === "critical" || b.criticality === "structural",
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_adopted_morris_support",
      satisfied: hasAdoptedSupport,
      supportingClaimEvaluationIds: eligible
        .filter(
          (b) =>
            b.criticality === "structural" &&
            b.confirmationAuthority === "morris",
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "no_hard_blocking_reserve",
      satisfied: !hardBlocked,
      supportingClaimEvaluationIds: [],
    },
  ];

  // Fail-closed: no eligible PASS ⇒ no supported modeled level (DOCUMENTED requires ≥1).
  let supported: MaturityLevel | null = null;
  if (hasEligible) supported = "DOCUMENTED";
  if (hasEligible && hasConfirmed) supported = "VALIDATED";
  if (hasEligible && hasConfirmed && hasModeledSupport) supported = "MODELED";
  if (hasEligible && hasConfirmed && hasImplementedSupport) {
    supported = "IMPLEMENTED";
  }
  if (hasEligible && hasConfirmed && hasAdoptedSupport) {
    supported = "ADOPTED";
  }

  if (supported === null) {
    gaps.push({
      code: "insufficient_for_level",
      level: input.requestedLevel,
    });
    // proposedLevel kept as requested for gap context only — callers must not persist
    // a positive maturity without eligible claims (Propose/Confirm fail-closed).
    const placeholder = minLevel(input.requestedLevel, "DOCUMENTED");
    if (hardBlocked) {
      gaps.push({
        code: "hard_reserve_blocks_level",
        level: placeholder,
      });
      return {
        supportedLevel: null,
        proposedLevel: placeholder,
        status: "blocked",
        criteriaResults,
        gaps,
        dimensions: [
          {
            dimensionId: "default",
            proposedLevel: placeholder,
            blocked: true,
          },
        ],
      };
    }
    return {
      supportedLevel: null,
      proposedLevel: placeholder,
      status: "proposed",
      criteriaResults,
      gaps,
    };
  }

  let proposedLevel = minLevel(input.requestedLevel, supported);
  if (levelRank(input.requestedLevel) > levelRank(supported)) {
    gaps.push({
      code: "requested_level_unsupported",
      level: input.requestedLevel,
    });
    gaps.push({
      code: "insufficient_for_level",
      level: input.requestedLevel,
    });
  }

  if (hardBlocked) {
    gaps.push({
      code: "hard_reserve_blocks_level",
      level: proposedLevel,
    });
    proposedLevel = minLevel(proposedLevel, "DOCUMENTED");
    const dimensions = (input.dimensions ?? []).map((d) => ({
      dimensionId: d.dimensionId,
      proposedLevel: minLevel(d.proposedLevel, proposedLevel),
      blocked: true,
    }));
    return {
      supportedLevel: supported,
      proposedLevel,
      status: "blocked",
      criteriaResults,
      gaps,
      dimensions: dimensions.length
        ? dimensions
        : [
            {
              dimensionId: "default",
              proposedLevel,
              blocked: true,
            },
          ],
    };
  }

  const dimensions = (input.dimensions ?? []).map((d) => ({
    dimensionId: d.dimensionId,
    proposedLevel: minLevel(d.proposedLevel, proposedLevel),
  }));

  return {
    supportedLevel: supported,
    proposedLevel,
    status: "proposed",
    criteriaResults,
    gaps,
    dimensions: dimensions.length ? dimensions : undefined,
  };
}

/** Re-read exact ClaimEvaluation bindings (Confirm fail-closed). Never mutates claims. */
export async function reassessStoredBindings(input: {
  bindings: MaturityClaimBinding[];
  claims: {
    findById(id: string): Promise<ClaimEvaluation | null>;
    isSuperseded(id: string): Promise<boolean>;
  };
}): Promise<MaturityClaimBinding[]> {
  const out: MaturityClaimBinding[] = [];
  for (const bound of input.bindings) {
    const claim = await input.claims.findById(bound.claimEvaluationId);
    if (!claim) {
      out.push(
        missingClaimBinding(
          bound.claimEvaluationId,
          bound.claimEvaluationVersion,
        ),
      );
      continue;
    }
    const isSuperseded = await input.claims.isSuperseded(
      bound.claimEvaluationId,
    );
    out.push(
      assessClaimEligibility({
        claim,
        expectedVersion: bound.claimEvaluationVersion,
        isSuperseded,
      }),
    );
  }
  return out;
}

export function missingClaimBinding(
  claimEvaluationId: string,
  expectedVersion: number,
): MaturityClaimBinding {
  return {
    claimEvaluationId,
    claimEvaluationVersion: expectedVersion,
    claimType: "",
    criticality: "",
    status: "missing",
    eligibleForPositive: false,
    ineligibilityCode: "missing",
    reviewBundleId: "",
    reviewBundleVersion: 0,
  };
}
