/**
 * CORR-01 + MD-WR currentness —
 * subject-aware HumanDecision cutoff for Nora trajectory Recommendation
 * currentness. Pure domain helpers — no RuntimeOaStack / node:crypto.
 *
 * Cutoff sources (PT Recommendations only — never Work Recommendations):
 * - accepted|amended HD with DecisionBasis.sourceType `trajectory_option`
 *   bound to the active cycle
 * - accepted|amended HD that is the current trajectory's decidedByDecisionRef
 *   (covers HabitFlow `candidate_trajectory` approval path)
 *
 * Proposal subjects do not cut off.
 *
 * Blocker 4 — every PT currentness computation MUST pass the current
 * trajectory's decidedByDecisionRef. `resolveProjectTrajectoryRecommendationCutoff`
 * is the single shared entry point (studioCognitiveContext, Nora resolution).
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { GetTrajectoryResult } from "@/lib/oa/cycle/domain/types";

/** Structural ports only — no RuntimeOaStack import (browser-safe module). */
export type TrajectoryCurrentnessPorts = {
  readonly cycleServices: {
    readonly getCurrentTrajectory: {
      execute(input: { projectId: string }): Promise<GetTrajectoryResult>;
    };
  };
  readonly decisionServices: {
    readonly decisions: {
      listByProject(projectId: string): Promise<HumanDecision[]>;
    };
  };
};

export type CurrentTrajectoryDecidedByRead =
  | {
      readonly kind: "ok";
      /** null = current PT exists but undecided, OR no current PT at all. */
      readonly decidedByDecisionRef: string | null;
      readonly hasCurrentTrajectory: boolean;
    }
  | { readonly kind: "unavailable" };

/**
 * Fail-closed read of the current PT's decidedByDecisionRef.
 * - ok:true → ref (trimmed) or null
 * - ok:false + detailCode TRAJECTORY_NOT_FOUND → no current PT (undecided)
 * - any other failure or thrown error → unavailable (never a silent null)
 */
export async function readCurrentTrajectoryDecidedByRef(input: {
  readonly oa: Pick<TrajectoryCurrentnessPorts, "cycleServices">;
  readonly projectId: string;
}): Promise<CurrentTrajectoryDecidedByRead> {
  try {
    const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: input.projectId,
    });
    if (current.ok) {
      const ref = current.trajectory.decidedByDecisionRef;
      return {
        kind: "ok",
        hasCurrentTrajectory: true,
        decidedByDecisionRef:
          typeof ref === "string" ? ref.trim() || null : null,
      };
    }
    if (current.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      return {
        kind: "ok",
        hasCurrentTrajectory: false,
        decidedByDecisionRef: null,
      };
    }
    return { kind: "unavailable" };
  } catch {
    return { kind: "unavailable" };
  }
}

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
 * HD that actually decided the current ProjectTrajectory pointer.
 * Includes candidate_trajectory greenfield approval (HabitFlow Replay 02).
 */
export function isDecidingProjectTrajectoryHumanDecision(
  decision: HumanDecision,
  decidedByDecisionRef: string | null | undefined,
): boolean {
  if (decision.status !== "accepted" && decision.status !== "amended") {
    return false;
  }
  const ref = decidedByDecisionRef?.trim() || "";
  if (!ref) return false;
  return decision.decisionId === ref;
}

/**
 * Latest effectiveAt among PT-deciding HDs that supersede prior Nora PT Recs.
 */
export function resolveTrajectoryRecommendationCutoffFromDecisions(input: {
  readonly decisions: readonly HumanDecision[];
  readonly cycleInstanceId: string;
  /** Current ProjectTrajectory.decidedByDecisionRef when known. */
  readonly decidedByDecisionRef?: string | null;
}): string | null {
  const matching = input.decisions.filter(
    (d) =>
      isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId) ||
      isDecidingProjectTrajectoryHumanDecision(
        d,
        input.decidedByDecisionRef ?? null,
      ),
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

/**
 * Blocker 4 — shared PT currentness cutoff for a project/cycle. Always feeds
 * the current trajectory's decidedByDecisionRef into the cutoff resolver.
 * `ok:false` when decisions or the current trajectory cannot be read
 * (callers must fail closed — never claim CURRENT).
 */
export async function resolveProjectTrajectoryRecommendationCutoff(input: {
  readonly oa: TrajectoryCurrentnessPorts;
  readonly projectId: string;
  readonly cycleInstanceId: string;
}): Promise<
  | { readonly ok: true; readonly cutoff: string | null }
  | { readonly ok: false; readonly reason: "decisions_unreadable" | "trajectory_unreadable" }
> {
  let decisions: HumanDecision[];
  try {
    decisions = await input.oa.decisionServices.decisions.listByProject(
      input.projectId,
    );
  } catch {
    return { ok: false, reason: "decisions_unreadable" };
  }
  const current = await readCurrentTrajectoryDecidedByRef({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (current.kind === "unavailable") {
    return { ok: false, reason: "trajectory_unreadable" };
  }
  return {
    ok: true,
    cutoff: resolveTrajectoryRecommendationCutoffFromDecisions({
      decisions,
      cycleInstanceId: input.cycleInstanceId,
      decidedByDecisionRef: current.decidedByDecisionRef,
    }),
  };
}
