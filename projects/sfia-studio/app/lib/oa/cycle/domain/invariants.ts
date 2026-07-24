/**
 * Semantic invariants for T-A2 Cycle / Trajectory / Epistemic / CKC.
 */
import {
  CAPITALIZATION_CYCLE_TYPE_ID,
  MAX_TRAJECTORY_SNAPSHOT_BYTES,
  type CycleDetailCode,
  type CycleProfile,
  type EpistemicItem,
  type EpistemicItemType,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "./types";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export type InvariantViolation = {
  detailCode: CycleDetailCode;
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
  prefix: "cyc:" | "trj:" | "stp:" | "epi:" | "ckc:" | "prj:" | "cor:" | "prv:",
): InvariantViolation | null {
  if (!isOaIdentifier(value)) {
    return { detailCode: "CYCLE_INVALID", reason: "identifier_pattern" };
  }
  if (!value.startsWith(prefix)) {
    return {
      detailCode: "CYCLE_INVALID",
      reason: `identifier_prefix_${prefix}`,
    };
  }
  return null;
}

export function isCapitalizationCycleType(cycleTypeId: string): boolean {
  return cycleTypeId === CAPITALIZATION_CYCLE_TYPE_ID;
}

/** Critical signals: any structural/security/architecture/data/irreversible. */
export function hasCriticalSignals(signals: {
  structuralChange?: boolean;
  securityImpact?: boolean;
  architectureImpact?: boolean;
  dataImpact?: boolean;
  irreversible?: boolean;
}): boolean {
  return Boolean(
    signals.structuralChange ||
      signals.securityImpact ||
      signals.architectureImpact ||
      signals.dataImpact ||
      signals.irreversible,
  );
}

/**
 * Deterministic profile recommendation from explicit signals only.
 * requestedProfile may be echoed when compatible; Critical still requires justification at Create.
 */
export function recommendProfile(input: {
  signals: {
    structuralChange?: boolean;
    securityImpact?: boolean;
    architectureImpact?: boolean;
    dataImpact?: boolean;
    irreversible?: boolean;
    lowRiskBounded?: boolean;
  };
  requestedProfile?: CycleProfile;
}): { profile: CycleProfile; rationale: string; critical: boolean } {
  const critical = hasCriticalSignals(input.signals);
  if (critical) {
    return {
      profile: "Critical",
      rationale: "critical_signal_present",
      critical: true,
    };
  }
  if (input.signals.lowRiskBounded) {
    return {
      profile: "Light",
      rationale: "low_risk_bounded_no_critical_signals",
      critical: false,
    };
  }
  if (input.requestedProfile === "Light") {
    // Light without lowRiskBounded → Standard (default); do not invent Light.
    return {
      profile: "Standard",
      rationale: "default_standard_light_requires_low_risk_bounded",
      critical: false,
    };
  }
  if (input.requestedProfile === "Critical") {
    // Requested Critical without signals still recommends Critical (Create will require justification).
    return {
      profile: "Critical",
      rationale: "requested_critical_without_signals",
      critical: true,
    };
  }
  return {
    profile: "Standard",
    rationale: "default_standard",
    critical: false,
  };
}

export function validateCycleIds(input: {
  cycleInstanceId: string;
  cycleTypeId: string;
  projectId: string;
}): InvariantViolation | null {
  const cycleId = assertPrefixedId(input.cycleInstanceId, "cyc:");
  if (cycleId) {
    return { detailCode: "CYCLE_INVALID", reason: "cycle_instance_id_invalid" };
  }
  if (!isOaIdentifier(input.cycleTypeId)) {
    return { detailCode: "CYCLE_INVALID", reason: "cycle_type_id_invalid" };
  }
  const projectId = assertPrefixedId(input.projectId, "prj:");
  if (projectId) {
    return { detailCode: "CYCLE_INVALID", reason: "project_id_invalid" };
  }
  return null;
}

export function validateCriticalJustification(
  profile: CycleProfile,
  justification: string | undefined,
): InvariantViolation | null {
  if (profile !== "Critical") return null;
  if (typeof justification !== "string" || justification.trim().length < 1) {
    return {
      detailCode: "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED",
      reason: "critical_justification_empty",
    };
  }
  return null;
}

export function measureTrajectorySnapshotBytes(
  trajectory: Pick<ProjectTrajectory, "steps" | "status" | "version">,
): number {
  return Buffer.byteLength(JSON.stringify(trajectory), "utf8");
}

export function assertTrajectorySize(
  trajectory: Pick<ProjectTrajectory, "steps" | "status" | "version">,
): InvariantViolation | null {
  if (measureTrajectorySnapshotBytes(trajectory) > MAX_TRAJECTORY_SNAPSHOT_BYTES) {
    return { detailCode: "TRAJECTORY_INVALID", reason: "snapshot_too_large" };
  }
  return null;
}

export function validateTrajectorySteps(
  steps: TrajectoryStep[],
): InvariantViolation | null {
  if (!Array.isArray(steps) || steps.length < 1) {
    return { detailCode: "TRAJECTORY_INVALID", reason: "steps_required" };
  }
  const seen = new Set<string>();
  const orders = new Set<number>();
  for (const step of steps) {
    if (!isOaIdentifier(step.stepId) || !step.stepId.startsWith("stp:")) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "step_id_invalid" };
    }
    if (seen.has(step.stepId)) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "duplicate_step_id" };
    }
    seen.add(step.stepId);
    if (!Number.isInteger(step.order) || step.order < 1) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "step_order_invalid" };
    }
    if (orders.has(step.order)) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "duplicate_step_order" };
    }
    orders.add(step.order);
    if (typeof step.label !== "string" || step.label.trim().length < 1) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "step_label_invalid" };
    }
    if (step.dependencies) {
      for (const dep of step.dependencies) {
        if (!isOaIdentifier(dep)) {
          return {
            detailCode: "TRAJECTORY_INVALID",
            reason: "dependency_id_invalid",
          };
        }
      }
    }
  }
  const cycle = detectCyclicDependencies(steps);
  if (cycle) {
    return { detailCode: "TRAJECTORY_INVALID", reason: "cyclic_dependencies" };
  }
  return null;
}

/** DFS cycle detection over step dependency edges. */
export function detectCyclicDependencies(steps: TrajectoryStep[]): boolean {
  const byId = new Map(steps.map((s) => [s.stepId, s]));
  const visiting = new Set<string>();
  const visited = new Set<string>();

  const visit = (id: string): boolean => {
    if (visited.has(id)) return false;
    if (visiting.has(id)) return true;
    visiting.add(id);
    const step = byId.get(id);
    for (const dep of step?.dependencies ?? []) {
      if (!byId.has(dep)) {
        // Unknown dependency is invalid separately; treat as non-cycle here.
        continue;
      }
      if (visit(dep)) return true;
    }
    visiting.delete(id);
    visited.add(id);
    return false;
  };

  for (const step of steps) {
    if (visit(step.stepId)) return true;
  }
  return false;
}

export function validateEpistemicItemInput(input: {
  epistemicItemId: string;
  type: EpistemicItemType;
  statement: string;
  source?: string;
  provenance?: unknown;
}): InvariantViolation | null {
  if (
    !isOaIdentifier(input.epistemicItemId) ||
    !input.epistemicItemId.startsWith("epi:")
  ) {
    return { detailCode: "EPISTEMIC_INVALID", reason: "epistemic_id_invalid" };
  }
  if (typeof input.statement !== "string" || input.statement.trim().length < 1) {
    return { detailCode: "EPISTEMIC_INVALID", reason: "statement_invalid" };
  }
  // Observation as fact-like: if provided without source AND without provenance → refuse.
  if (
    input.type === "Observation" &&
    !input.source &&
    !input.provenance
  ) {
    return {
      detailCode: "EPISTEMIC_INVALID",
      reason: "observation_requires_source_or_provenance",
    };
  }
  return null;
}

/**
 * Refuse Hypothesis → DecisionRef automatic promotion.
 * Detected when promoteFromHypothesis flag is set, or when superseding an
 * active Hypothesis item while declaring type DecisionRef.
 */
export function assertNoHypothesisDecisionPromotion(input: {
  nextType: EpistemicItemType;
  promoteFromHypothesis?: boolean;
  supersedes?: string;
  existing: EpistemicItem[];
}): InvariantViolation | null {
  if (input.nextType !== "DecisionRef") return null;
  if (input.promoteFromHypothesis) {
    return {
      detailCode: "EPISTEMIC_PROMOTION_FORBIDDEN",
      reason: "promote_from_hypothesis_flag",
    };
  }
  if (input.supersedes) {
    const prior = input.existing.find(
      (e) => e.epistemicItemId === input.supersedes,
    );
    if (prior && prior.type === "Hypothesis") {
      return {
        detailCode: "EPISTEMIC_PROMOTION_FORBIDDEN",
        reason: "supersede_hypothesis_as_decision_ref",
      };
    }
  }
  return null;
}
