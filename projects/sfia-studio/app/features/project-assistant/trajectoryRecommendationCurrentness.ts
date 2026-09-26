/**
 * CORR-01 — subject-aware HumanDecision cutoff for Nora trajectory Recommendation
 * currentness. Pure domain helpers — no RuntimeOaStack / node:crypto.
 *
 * Same subject = accepted|amended HD with DecisionBasis.sourceType
 * `trajectory_option` bound to the active cycle. Proposal subjects do not cut off.
 */
import type { HumanDecision } from "@/lib/oa/decision";

export function isAcceptedTrajectoryOptionDecisionForCycle(
  decision: HumanDecision,
  cycleInstanceId: string,
): boolean {
  if (decision.status !== "accepted" && decision.status !== "amended") {
    return false;
  }
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "trajectory_option") {
    return false;
  }
  const decisionCycle =
    decision.cycleInstanceId?.trim() ||
    basis.cycleInstanceId?.trim() ||
    basis.proposalContext?.activeCycleInstanceId?.trim() ||
    null;
  return decisionCycle === cycleInstanceId;
}

/**
 * Latest effectiveAt among accepted/amended trajectory_option HDs for this cycle.
 */
export function resolveTrajectoryRecommendationCutoffFromDecisions(input: {
  readonly decisions: readonly HumanDecision[];
  readonly cycleInstanceId: string;
}): string | null {
  const matching = input.decisions.filter((d) =>
    isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId),
  );
  if (matching.length === 0) return null;
  let latest = matching[0]!.effectiveAt;
  for (let i = 1; i < matching.length; i += 1) {
    const at = matching[i]!.effectiveAt;
    if (at > latest) latest = at;
  }
  return latest;
}

export function classifyAcwRecommendationCurrentness(input: {
  readonly createdAt: string;
  readonly ignoreCreatedAtOnOrBefore: string | null;
}): "CURRENT" | "HISTORICAL" {
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  if (cutoff && input.createdAt <= cutoff) return "HISTORICAL";
  return "CURRENT";
}
