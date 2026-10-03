/**
 * MD-WR-03 — Read-only resolution of the unique Work Recommendation decision
 * subject (ACW identity) for chat-first disposition.
 *
 * ACW (`active-cycle-work:nora` Recommendation) stays the durable identity.
 * A sealed `work_recommendation` PresentedOptionSet is only a decision carrier
 * created lazily on accept / refuse / amend / defer (see
 * `sealWorkRecommendationPresentedOptionSet`). No new store, no Proposal, no
 * ProjectTrajectory mutation.
 *
 * Candidates = active ACW Work Recommendations of the ACTIVE cycle that are
 * NOT ProjectTrajectory fuel (opt:trajectory:* while TDS is open). Multiple
 * candidates → ambiguous (Studio never selects for the Pilot).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  hasTrajectoryOptionRef,
  isAcwExcludedFromWorkByTrajectoryState,
  isActiveCycleWorkRecommendationItem,
  workRecommendationBelongsToCycle,
  type EpistemicItem,
  type TrajectoryDecisionSupportState,
} from "@/lib/oa/cycle";
import {
  decidedOptionSetRefsFromEpistemicItems,
  type EpistemicReadFailure,
} from "./activeProposalDecisionSubject";
import {
  isWorkRecommendationPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { sealWorkRecommendationPresentedOptionSet } from "./proposeTrajectoryOptions";

export type ActiveWorkRecommendationLookup =
  | { readonly ok: true; readonly kind: "none" }
  | {
      readonly ok: true;
      readonly kind: "ambiguous";
      readonly workRecommendationIds: readonly string[];
    }
  | {
      readonly ok: true;
      readonly kind: "unique";
      readonly workRecommendationEpistemicItemId: string;
      readonly statement: string;
      /** Sealed awaiting set when one already exists; null → seal lazily. */
      readonly presented: PresentedOptionSetBinding | null;
    }
  | EpistemicReadFailure
  | {
      readonly ok: false;
      readonly code: "WORK_SUBJECT_READ_FAILED";
      readonly message: string;
    };

async function resolveTrajectoryDecisionSupportState(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string;
}): Promise<TrajectoryDecisionSupportState> {
  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  try {
    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
    });
    return tds.state;
  } catch {
    return "UNAVAILABLE";
  }
}

/**
 * Pure-ish candidate selection (exported for tests).
 */
export function selectActiveWorkRecommendationCandidates(input: {
  readonly items: ReadonlyArray<EpistemicItem>;
  readonly cycleInstanceId: string;
  /** Explicit tri-state — NONE and UNAVAILABLE are never collapsed. */
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): {
  readonly awaitingSets: ReadonlyMap<string, PresentedOptionSetBinding>;
  readonly unbound: ReadonlyArray<EpistemicItem>;
  readonly acwIds: readonly string[];
} {
  const decidedRefs = decidedOptionSetRefsFromEpistemicItems(input.items);
  const activeAcw = new Map<string, EpistemicItem>();
  for (const item of input.items) {
    if (item.status !== "active") continue;
    if (!isActiveCycleWorkRecommendationItem(item)) continue;
    // PRESENT → PT fuel; UNAVAILABLE → fail-closed; both excluded from Work.
    if (
      isAcwExcludedFromWorkByTrajectoryState(item, {
        trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
      })
    ) {
      continue;
    }
    if (
      !workRecommendationBelongsToCycle(
        item,
        input.cycleInstanceId,
        input.cycleInstanceId,
      )
    ) {
      continue;
    }
    activeAcw.set(item.epistemicItemId, item);
  }

  const awaitingSets = new Map<string, PresentedOptionSetBinding>();
  for (const item of input.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed || parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (!isWorkRecommendationPresentedSet(parsed)) continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    const acwId = parsed.workRecommendationEpistemicItemId!;
    // A sealed set whose ACW is no longer active is stale carrier residue.
    if (!activeAcw.has(acwId)) continue;
    awaitingSets.set(acwId, parsed);
  }

  const unbound = [...activeAcw.values()].filter(
    (item) => !awaitingSets.has(item.epistemicItemId),
  );
  return {
    awaitingSets,
    unbound,
    acwIds: [...activeAcw.keys()],
  };
}

export async function findActiveWorkRecommendationSubject(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ActiveWorkRecommendationLookup> {
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer une recommandation de travail active.",
    };
  }
  const items = epistemic.state.items;

  // Cheap pre-filter: no ACW Recommendation at all → no Work subject (and no
  // TDS resolution cost).
  if (!items.some((i) => i.status === "active" && isActiveCycleWorkRecommendationItem(i))) {
    return { ok: true, kind: "none" };
  }

  // MD-WR-07 — make finalization blockers use the same TDS tri-state.
  try {
    const { bindPilotLifecycleTrajectoryDecisionSupport } = await import(
      "./resolveTrajectoryDecisionSupportProjection"
    );
    bindPilotLifecycleTrajectoryDecisionSupport(input.oa);
  } catch {
    /* binding is best-effort; unbound finalization stays fail-closed */
  }

  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const cycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  if (!cycleInstanceId) {
    return { ok: true, kind: "none" };
  }

  // TDS only matters when an ACW item carries opt:trajectory:* refs.
  const needsTds = items.some(
    (i) =>
      i.status === "active" &&
      isActiveCycleWorkRecommendationItem(i) &&
      hasTrajectoryOptionRef(i),
  );
  const tdsState: TrajectoryDecisionSupportState = needsTds
    ? await resolveTrajectoryDecisionSupportState({
        oa: input.oa,
        projectId: input.projectId,
        cycleInstanceId,
      })
    : "NONE";

  const candidates = selectActiveWorkRecommendationCandidates({
    items,
    cycleInstanceId,
    trajectoryDecisionSupportState: tdsState,
  });
  if (candidates.acwIds.length === 0) {
    return { ok: true, kind: "none" };
  }
  if (candidates.acwIds.length > 1) {
    return {
      ok: true,
      kind: "ambiguous",
      workRecommendationIds: candidates.acwIds,
    };
  }
  const acwId = candidates.acwIds[0]!;
  const acw = items.find((i) => i.epistemicItemId === acwId)!;
  return {
    ok: true,
    kind: "unique",
    workRecommendationEpistemicItemId: acwId,
    statement: acw.statement,
    presented: candidates.awaitingSets.get(acwId) ?? null,
  };
}

/**
 * ProjectTrajectory chat-first accept would be sealable right now (TDS PRESENT
 * with a CURRENT Nora ref and no trajectory HD). Used only to refuse a silent
 * pick between PT and Work.
 */
export async function isProjectTrajectoryChatFirstSealEligible(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<boolean> {
  const current = await input.oa.cycleServices.getCurrentTrajectory.execute({
    projectId: input.projectId,
  });
  if (
    current.ok &&
    typeof current.trajectory.decidedByDecisionRef === "string" &&
    current.trajectory.decidedByDecisionRef.trim().length > 0
  ) {
    return false;
  }
  const { resolveTrajectoryDecisionSupportProjection } = await import(
    "./resolveTrajectoryDecisionSupportProjection"
  );
  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const cycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId,
  });
  return (
    tds.state === "PRESENT" &&
    typeof tds.currentNoraRecommendedOptionRef === "string" &&
    tds.currentNoraRecommendedOptionRef.trim().length > 0
  );
}

/**
 * Return the sealed set for the unique Work subject, sealing lazily when the
 * subject is still an unbound ACW. Idempotent.
 */
export async function ensureSealedWorkRecommendationPresentedOptionSet(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly workRecommendationEpistemicItemId: string;
  readonly presented: PresentedOptionSetBinding | null;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  if (input.presented) return { ok: true, presented: input.presented };
  const sealed = await sealWorkRecommendationPresentedOptionSet({
    oa: input.oa,
    projectId: input.projectId,
    workRecommendationEpistemicItemId: input.workRecommendationEpistemicItemId,
  });
  if (!sealed.ok) return sealed;
  return { ok: true, presented: sealed.presented };
}
