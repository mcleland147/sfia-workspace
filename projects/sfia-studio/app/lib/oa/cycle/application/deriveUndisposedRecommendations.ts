/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 + MD-WR-07 — derive Work Recommendations
 * that still require an explicit Pilot disposition before a cycle can be
 * finalized.
 *
 * Scope (Morris correction):
 * - WORK Recommendations only:
 *     · sealed OptionSet carriers (source / relatedObjects optset:*)
 *     · MD-WR-07: active ACW (active-cycle-work:nora) Work still UNBOUND (no
 *       sealed carrier yet) — an unbound ACW IS a pending Work decision subject
 * - belonging to the cycle being finalized
 * - still active / applicable
 * - without durable disposition (active DecisionRef closing the OptionSet OR
 *   the ACW id; Recommendation status already resolved/rejected/superseded)
 *
 * ACW identity dedupe: an ACW with an ACTIVE sealed carrier linking its id is
 * represented by that carrier only → exactly ONE logical blocker per ACW
 * before and after seal.
 *
 * TDS tri-state (Blocker 3), same classification as Journal Work:
 * - PRESENT: ACW+opt:trajectory:* = PT fuel → never a blocker
 * - NONE: non-lifecycle ACW (incl. opt:trajectory:*) is Work
 * - UNAVAILABLE: ACW+opt:trajectory:* NEVER becomes Work (fail-closed);
 *   plain ACW without opt:trajectory:* may remain Work
 *
 * Explicitly OUT of scope (never blockers):
 * - Lifecycle Recommendation NEXT_CYCLE / FINALIZE_CURRENT_CYCLE
 * - Journal cards (projection only — not Truth C)
 * - Recommendations of another cycle
 * - stale / resolved / rejected / superseded work Recommendations
 *
 * Pure derivation over EpistemicItems. NOT a second authority.
 */

import {
  hasTrajectoryOptionRef,
  isActiveCycleWorkRecommendationItem,
  isLifecycleRecommendationItem,
  isWorkRecommendationItem,
  workRecommendationAcwId,
  workRecommendationBelongsToCycle,
  workRecommendationOptionSetRef,
  type TrajectoryDecisionSupportState,
  type WorkRecommendationItemLike,
} from "./deriveWorkRecommendations";

const OPTION_SET_REF_PREFIX = "optset:";

/**
 * CP02 — derived finalization sentinel when an active ACW carries
 * `opt:trajectory:*` but TDS is UNAVAILABLE (Work/PT classification impossible).
 * NOT a Work identity. NOT a PT identity. Never persisted.
 */
export const RECOMMENDATION_CLASSIFICATION_UNAVAILABLE_PREFIX =
  "recommendation_classification_unavailable:" as const;

export function recommendationClassificationUnavailableRef(
  epistemicItemId: string,
): string {
  return `${RECOMMENDATION_CLASSIFICATION_UNAVAILABLE_PREFIX}${epistemicItemId}`;
}

/**
 * CP02 — pure, derived refs for finalization only.
 * Emits when TDS=UNAVAILABLE and an active ACW (cycle-bound, non-Lifecycle)
 * carries opt:trajectory:* so Work/PT cannot be decided honestly.
 * Empty for PRESENT / NONE. Never classifies the item as Work or PT.
 */
export function deriveRecommendationClassificationUnavailableRefs(
  items: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId: string | null | undefined,
  trajectoryDecisionSupportState: TrajectoryDecisionSupportState,
): readonly string[] {
  if (trajectoryDecisionSupportState !== "UNAVAILABLE") return [];
  const out: string[] = [];
  for (const item of items) {
    if (item.status !== "active") continue;
    if (item.type !== "Recommendation") continue;
    if (!isActiveCycleWorkRecommendationItem(item)) continue;
    if (isLifecycleRecommendationItem(item)) continue;
    if (!hasTrajectoryOptionRef(item)) continue;
    if (
      cycleInstanceId &&
      !workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId)
    ) {
      continue;
    }
    const id = item.epistemicItemId?.trim();
    if (!id) continue;
    out.push(recommendationClassificationUnavailableRef(id));
  }
  return out;
}

export type UndisposedRecommendation = {
  readonly epistemicItemId: string;
  /** Sealed OptionSet ref; null while the ACW is still unbound (MD-WR-07). */
  readonly optionSetRef: string | null;
  /** ACW identity when known (unbound ACW or sealed carrier linking an ACW). */
  readonly workRecommendationEpistemicItemId: string | null;
  readonly statement: string;
  readonly cycleInstanceId: string;
};

function disposedRefs(
  items: ReadonlyArray<WorkRecommendationItemLike>,
): ReadonlySet<string> {
  const refs = new Set<string>();
  for (const item of items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    for (const related of item.relatedObjects ?? []) {
      if (related.startsWith(OPTION_SET_REF_PREFIX)) refs.add(related);
      if (related.startsWith("epi:acw:")) refs.add(related);
    }
  }
  return refs;
}

export function deriveUndisposedRecommendations(
  items: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId?: string | null,
  options?: {
    /**
     * Omitted → "UNAVAILABLE" (fail-closed: ACW+opt:trajectory:* is never
     * promoted to a Work blocker without an explicit NONE).
     */
    readonly trajectoryDecisionSupportState?: TrajectoryDecisionSupportState;
  },
): readonly UndisposedRecommendation[] {
  // Back-compat: callers that omit cycle still get project-scoped work-only
  // filtering (never lifecycle). Prefer passing cycleInstanceId.
  const tdsState: TrajectoryDecisionSupportState =
    options?.trajectoryDecisionSupportState ?? "UNAVAILABLE";
  const disposed = disposedRefs(items);
  const out: UndisposedRecommendation[] = [];
  const logicalKeys = new Set<string>();

  const belongs = (item: WorkRecommendationItemLike): boolean =>
    !cycleInstanceId ||
    workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId);

  // Pass 1 — sealed OptionSet carriers.
  const sealedAcwIds = new Set<string>();
  for (const item of items) {
    if (!isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState })) {
      continue;
    }
    if (isLifecycleRecommendationItem(item)) continue;
    if (item.status !== "active") continue;
    const optionSetRef = workRecommendationOptionSetRef(item);
    if (!optionSetRef) continue;
    const acwId = workRecommendationAcwId(item);
    if (acwId && !isActiveCycleWorkRecommendationItem(item)) {
      // Active sealed carrier represents its ACW (dedupe by ACW identity).
      sealedAcwIds.add(acwId);
    }
    if (disposed.has(optionSetRef)) continue;
    if (acwId && disposed.has(acwId)) continue;
    if (!belongs(item)) continue;
    const key = acwId ?? optionSetRef;
    if (logicalKeys.has(key)) continue;
    logicalKeys.add(key);
    out.push({
      epistemicItemId: item.epistemicItemId ?? optionSetRef,
      optionSetRef,
      workRecommendationEpistemicItemId: acwId,
      statement: item.statement ?? "",
      cycleInstanceId: cycleInstanceId ?? "",
    });
  }

  // Pass 2 — MD-WR-07: active unbound ACW Work (no active sealed carrier).
  for (const item of items) {
    if (item.status !== "active") continue;
    if (!isActiveCycleWorkRecommendationItem(item)) continue;
    if (
      !isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState })
    ) {
      continue;
    }
    const acwId = item.epistemicItemId;
    if (!acwId) continue;
    if (sealedAcwIds.has(acwId)) continue;
    // A carrier-linked optset on the ACW itself is handled in pass 1.
    if (workRecommendationOptionSetRef(item)) continue;
    if (disposed.has(acwId)) continue;
    if (!belongs(item)) continue;
    if (logicalKeys.has(acwId)) continue;
    logicalKeys.add(acwId);
    out.push({
      epistemicItemId: acwId,
      optionSetRef: null,
      workRecommendationEpistemicItemId: acwId,
      statement: item.statement ?? "",
      cycleInstanceId: cycleInstanceId ?? "",
    });
  }
  return out;
}
