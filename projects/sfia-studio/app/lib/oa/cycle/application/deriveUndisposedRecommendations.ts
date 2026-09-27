/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — derive Work Recommendations that still
 * require an explicit Pilot disposition before a cycle can be finalized.
 *
 * Scope (Morris correction):
 * - WORK Recommendations only (OptionSet / Proposal subject carriers)
 * - belonging to the cycle being finalized
 * - still active / applicable
 * - without durable disposition (active DecisionRef closing the OptionSet OR
 *   Recommendation status already resolved/rejected/superseded)
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
  isLifecycleRecommendationItem,
  isWorkRecommendationItem,
  workRecommendationBelongsToCycle,
  workRecommendationOptionSetRef,
  type WorkRecommendationItemLike,
} from "./deriveWorkRecommendations";

const OPTION_SET_REF_PREFIX = "optset:";

export type UndisposedRecommendation = {
  readonly epistemicItemId: string;
  readonly optionSetRef: string;
  readonly statement: string;
  readonly cycleInstanceId: string;
};

function disposedOptionSetRefs(
  items: ReadonlyArray<WorkRecommendationItemLike>,
): ReadonlySet<string> {
  const refs = new Set<string>();
  for (const item of items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    for (const related of item.relatedObjects ?? []) {
      if (related.startsWith(OPTION_SET_REF_PREFIX)) refs.add(related);
    }
  }
  return refs;
}

export function deriveUndisposedRecommendations(
  items: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId?: string | null,
): readonly UndisposedRecommendation[] {
  // Back-compat: callers that omit cycle still get project-scoped work-only
  // filtering (never lifecycle). Prefer passing cycleInstanceId.
  const disposed = disposedOptionSetRefs(items);
  const out: UndisposedRecommendation[] = [];
  for (const item of items) {
    if (!isWorkRecommendationItem(item)) continue;
    if (isLifecycleRecommendationItem(item)) continue;
    if (item.status !== "active") continue;
    const optionSetRef = workRecommendationOptionSetRef(item);
    if (!optionSetRef) continue;
    if (disposed.has(optionSetRef)) continue;
    if (cycleInstanceId) {
      if (
        !workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId)
      ) {
        continue;
      }
    }
    out.push({
      epistemicItemId: item.epistemicItemId ?? optionSetRef,
      optionSetRef,
      statement: item.statement ?? "",
      cycleInstanceId: cycleInstanceId ?? "",
    });
  }
  return out;
}
