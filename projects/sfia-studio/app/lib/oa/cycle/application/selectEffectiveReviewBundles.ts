/**
 * CORR-PROOF-05 #3 — effective ReviewBundle set via supersession.
 * Pure; no persistence.
 */
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";

export type SelectEffectiveReviewBundlesResult = {
  /** Current non-superseded, non-synthesisOnly bundles. */
  effective: ReviewBundle[];
  /** Current non-superseded but synthesisOnly (ineligible to satisfy). */
  ineligible: ReviewBundle[];
};

/**
 * Filter to cycle-bound bundles, then:
 * - current = not superseded by another in the set AND status !== "superseded"
 * - effective = current ∧ !synthesisOnly
 * - ineligible = current ∧ synthesisOnly
 */
export function selectEffectiveReviewBundles(
  bundles: readonly ReviewBundle[],
  cycleInstanceId: string,
): SelectEffectiveReviewBundlesResult {
  const cycleBound = bundles.filter(
    (r) => !r.cycleInstanceId || r.cycleInstanceId === cycleInstanceId,
  );

  const supersededPredecessorIds = new Set(
    cycleBound
      .map((r) => r.supersedesReviewBundleId)
      .filter((id): id is string => Boolean(id)),
  );

  const current = cycleBound.filter(
    (r) =>
      !supersededPredecessorIds.has(r.reviewBundleId) &&
      r.status !== "superseded",
  );

  const effective = current.filter((r) => !r.synthesisOnly);
  const ineligible = current.filter((r) => r.synthesisOnly);

  return { effective, ineligible };
}
