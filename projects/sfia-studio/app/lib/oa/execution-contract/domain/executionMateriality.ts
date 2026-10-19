/**
 * G-D4 / T-A4 — server-owned execution materiality (structural vs non-structural).
 *
 * Does NOT trust Nora/LLM `structuralChange=false` alone.
 * Does NOT invent HumanDecision / DecisionBasis.
 * Does NOT classify by business task catalog (docs/code/QA/design).
 *
 * Used at PREPARE (stamp) and re-checked at Confirm/Authorize (fail-closed).
 */

export const MATERIALITY_CONSTRAINT_PREFIX = "MATERIALITY:" as const;

export type ExecutionMaterialityClass =
  | "non_structural"
  | "structural"
  | "unknown";

export type ExecutionMaterialityAssessment = {
  readonly materiality: ExecutionMaterialityClass;
  readonly reasonCodes: readonly string[];
  /** True when Confirm/Authorize must have ≥1 accepted decisionRef. */
  readonly humanDecisionRequired: boolean;
  /** Constraint token stamped on ExecutionContract.constraints. */
  readonly constraintToken: `MATERIALITY:${Uppercase<ExecutionMaterialityClass>}`;
};

export type ExecutionMaterialityFacts = {
  /** Model signals — insufficient alone; used only as positive structural hints. */
  readonly modelSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  } | null;
  readonly contradictionConflictPresent?: boolean;
  /** Repo-relative paths in mission scope that hit protected Product paths. */
  readonly protectedPathHits?: readonly string[];
  /** Mission would mutate LPS objective / criticality / doctrine pin. */
  readonly wouldMutateStructuralProjectTruth?: boolean;
  /** Mission would change active cycle type / profile / trajectory promotion. */
  readonly wouldMutateCycleOrTrajectoryTruth?: boolean;
  /** Authority envelope wider than already-authorized Product scope. */
  readonly authorityEnvelopeExpanded?: boolean;
  /** Current Product contradiction / unresolved CURRENT conflict. */
  readonly currentContradictionUnresolved?: boolean;
  /** Explicit structural HumanDecision already linked (positive for structural path). */
  readonly hasAcceptedStructuralDecisionRef?: boolean;
};

function constraintTokenFor(
  materiality: ExecutionMaterialityClass,
): ExecutionMaterialityAssessment["constraintToken"] {
  if (materiality === "structural") return "MATERIALITY:STRUCTURAL";
  if (materiality === "unknown") return "MATERIALITY:UNKNOWN";
  return "MATERIALITY:NON_STRUCTURAL";
}

/**
 * Assess whether an execution mission requires a structural HumanDecision.
 * Fail-closed: any unresolved structural hint → structural or unknown.
 */
export function assessExecutionMateriality(
  facts: ExecutionMaterialityFacts,
): ExecutionMaterialityAssessment {
  const reasonCodes: string[] = [];
  const signals = facts.modelSignals;

  if (signals?.structuralChange === true) {
    reasonCodes.push("model_signal_structural_change");
  }
  if (signals?.securityImpact === true) {
    reasonCodes.push("model_signal_security_impact");
  }
  if (signals?.architectureImpact === true) {
    reasonCodes.push("model_signal_architecture_impact");
  }
  if (signals?.dataImpact === true) {
    reasonCodes.push("model_signal_data_impact");
  }
  if (signals?.irreversible === true) {
    reasonCodes.push("model_signal_irreversible");
  }
  if (facts.contradictionConflictPresent === true) {
    reasonCodes.push("contradiction_conflict_present");
  }
  if (facts.currentContradictionUnresolved === true) {
    reasonCodes.push("current_contradiction_unresolved");
  }
  if ((facts.protectedPathHits ?? []).length > 0) {
    reasonCodes.push("protected_path_in_scope");
  }
  if (facts.wouldMutateStructuralProjectTruth === true) {
    reasonCodes.push("would_mutate_structural_project_truth");
  }
  if (facts.wouldMutateCycleOrTrajectoryTruth === true) {
    reasonCodes.push("would_mutate_cycle_or_trajectory_truth");
  }
  if (facts.authorityEnvelopeExpanded === true) {
    reasonCodes.push("authority_envelope_expanded");
  }

  if (reasonCodes.length > 0) {
    return {
      materiality: "structural",
      reasonCodes,
      humanDecisionRequired: true,
      constraintToken: constraintTokenFor("structural"),
    };
  }

  // No positive structural facts — still unknown if caller could not supply
  // enough Product context to decide (explicit unknown flag via empty protected
  // assessment when required fields were unavailable is handled by callers).
  return {
    materiality: "non_structural",
    reasonCodes: ["no_structural_materiality_facts"],
    humanDecisionRequired: false,
    constraintToken: constraintTokenFor("non_structural"),
  };
}

/**
 * When Product context required for a safe non-structural claim is missing,
 * force UNKNOWN (fail-closed — no empty decisionRefs confirm).
 *
 * D-P6-SHE-01 / Option A: positive structural facts still stamp STRUCTURAL
 * even when non-structural sufficiency is absent — UNKNOWN is only for the
 * residual case (no structural facts ∧ insufficient context for NON_STRUCTURAL).
 */
export function assessExecutionMaterialityOrUnknown(input: {
  readonly facts: ExecutionMaterialityFacts;
  readonly productContextSufficient: boolean;
}): ExecutionMaterialityAssessment {
  const assessed = assessExecutionMateriality(input.facts);
  if (assessed.materiality === "structural") {
    return assessed;
  }
  if (!input.productContextSufficient) {
    return {
      materiality: "unknown",
      reasonCodes: ["product_context_insufficient", ...assessed.reasonCodes],
      humanDecisionRequired: true,
      constraintToken: constraintTokenFor("unknown"),
    };
  }
  return assessed;
}

export function materialityFromContractConstraints(
  constraints: readonly string[] | undefined,
): ExecutionMaterialityClass | null {
  if (!constraints) return null;
  for (const c of constraints) {
    if (c === "MATERIALITY:STRUCTURAL") return "structural";
    if (c === "MATERIALITY:NON_STRUCTURAL") return "non_structural";
    if (c === "MATERIALITY:UNKNOWN") return "unknown";
  }
  return null;
}

/**
 * Confirm/Authorize gate: empty decisionRefs only when non-structural.
 */
export function assertDecisionRefsAdmissibleForConfirm(input: {
  readonly decisionRefs: readonly string[];
  readonly stampedMateriality: ExecutionMaterialityClass | null;
  readonly recomputed: ExecutionMaterialityAssessment;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const refs = input.decisionRefs;
  const recomputed = input.recomputed.materiality;

  // Stamped vs recomputed divergence → fail-closed.
  if (
    input.stampedMateriality != null &&
    input.stampedMateriality !== recomputed
  ) {
    return {
      ok: false,
      reason: `materiality_stamp_mismatch_${input.stampedMateriality}_vs_${recomputed}`,
    };
  }

  if (refs.length >= 1) {
    return { ok: true };
  }

  // Empty refs — require an explicit NON_STRUCTURAL stamp (no silent bypass).
  if (input.stampedMateriality == null) {
    return {
      ok: false,
      reason: "empty_decision_refs_missing_materiality_stamp",
    };
  }
  if (
    input.stampedMateriality === "structural" ||
    input.stampedMateriality === "unknown"
  ) {
    return {
      ok: false,
      reason: "empty_decision_refs_stamp_forbids",
    };
  }
  if (recomputed === "structural" || recomputed === "unknown") {
    return {
      ok: false,
      reason:
        recomputed === "unknown"
          ? "empty_decision_refs_materiality_unknown"
          : "empty_decision_refs_structural_required",
    };
  }
  // stamped non_structural ∧ recomputed non_structural
  return { ok: true };
}
