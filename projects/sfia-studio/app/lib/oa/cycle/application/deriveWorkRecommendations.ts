/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 (Morris correction) —
 * Work Recommendation vs Lifecycle Recommendation family separation.
 *
 * Work Recommendations: in-cycle governed work (OptionSet / Proposal subject).
 * Carrier: EpistemicItem.type = Recommendation WITHOUT lifecycleRecommendation
 * and source ≠ lifecycle-recommendation:nora (typically source = optset:…).
 *
 * Lifecycle Recommendations: NEXT_CYCLE / FINALIZE_CURRENT_CYCLE transitions.
 * Carrier: typed lifecycleRecommendation + source lifecycle-recommendation:nora.
 *
 * Journal > Recommandations projects WORK only.
 * Right-panel / lifecycle projection keeps Lifecycle CURRENT only.
 * No new store / table.
 */

const LIFECYCLE_RECOMMENDATION_SOURCE = "lifecycle-recommendation:nora";
const OPTION_SET_REF_PREFIX = "optset:";
const PROPOSAL_ID_PREFIX = "prop:";
const CYCLE_ID_PREFIX = "cycinst:";
/** Alternate cycle id prefix used by some durable writers. */
const CYCLE_INSTANCE_PREFIXES = ["cycinst:", "cycle:", "cyc:"] as const;

export type WorkRecommendationItemLike = {
  readonly type: string;
  readonly status: string;
  readonly epistemicItemId?: string;
  readonly source?: string | null;
  readonly statement?: string;
  readonly createdAt?: string;
  readonly relatedObjects?: readonly string[] | null;
  readonly lifecycleRecommendation?: unknown;
  readonly supersedes?: string | null;
};

export type WorkRecommendationProjectionCard = {
  readonly epistemicItemId: string;
  readonly statement: string;
  readonly status: string;
  readonly source: string | null;
  readonly optionSetRef: string | null;
  readonly proposalId: string | null;
  readonly cycleInstanceId: string | null;
  readonly createdAt: string;
  /** HumanDecision id closing this work recommendation when reconstructible. */
  readonly dispositionDecisionId: string | null;
};

export function isLifecycleRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (item.lifecycleRecommendation != null) return true;
  return (item.source ?? "") === LIFECYCLE_RECOMMENDATION_SOURCE;
}

export function isWorkRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (isLifecycleRecommendationItem(item)) return false;
  const source = item.source ?? "";
  // Primary durable carrier for chat-first work: PresentedOptionSet Recommendation.
  if (source.startsWith(OPTION_SET_REF_PREFIX)) return true;
  // Fail-closed: unknown Recommendation sources without lifecycle payload are
  // treated as work only when they carry an optset-related object.
  return (item.relatedObjects ?? []).some((r) =>
    r.startsWith(OPTION_SET_REF_PREFIX),
  );
}

export function workRecommendationOptionSetRef(
  item: WorkRecommendationItemLike,
): string | null {
  const source = item.source ?? "";
  if (source.startsWith(OPTION_SET_REF_PREFIX)) return source;
  return (
    (item.relatedObjects ?? []).find((r) =>
      r.startsWith(OPTION_SET_REF_PREFIX),
    ) ?? null
  );
}

function relatedCycleInstanceId(
  item: WorkRecommendationItemLike,
): string | null {
  for (const related of item.relatedObjects ?? []) {
    if (related.startsWith(CYCLE_ID_PREFIX)) return related;
    for (const prefix of CYCLE_INSTANCE_PREFIXES) {
      if (related.startsWith(prefix) && related !== prefix) return related;
    }
  }
  // Many writers store raw cycleInstanceId strings (no prefix). Prefer explicit
  // ids that look like durable cycle instance ids when present.
  for (const related of item.relatedObjects ?? []) {
    if (/^cycinst:/i.test(related)) return related;
    if (/^ci[_:]/i.test(related)) return related;
  }
  return null;
}

function relatedProposalId(item: WorkRecommendationItemLike): string | null {
  return (
    (item.relatedObjects ?? []).find((r) => r.startsWith(PROPOSAL_ID_PREFIX)) ??
    null
  );
}

function dispositionDecisionIdFromItems(
  item: WorkRecommendationItemLike,
  all: ReadonlyArray<WorkRecommendationItemLike>,
): string | null {
  const optionSetRef = workRecommendationOptionSetRef(item);
  if (!optionSetRef) return null;
  for (const candidate of all) {
    if (candidate.type !== "DecisionRef" || candidate.status !== "active") {
      continue;
    }
    const related = candidate.relatedObjects ?? [];
    if (!related.includes(optionSetRef)) continue;
    const fromSource =
      typeof candidate.source === "string" && candidate.source.startsWith("dec:")
        ? candidate.source
        : null;
    const fromRelated =
      related.find((r) => typeof r === "string" && r.startsWith("dec:")) ?? null;
    return fromSource ?? fromRelated;
  }
  return null;
}

/**
 * Does this work Recommendation belong to the cycle being inspected?
 * Prefer explicit relatedObjects cycle binding. Legacy optset Recommendations
 * without a cycle id are attributed to `fallbackCycleInstanceId` when provided
 * (typically LPS active / selected cycle) so finalization stays honest.
 */
export function workRecommendationBelongsToCycle(
  item: WorkRecommendationItemLike,
  cycleInstanceId: string,
  fallbackCycleInstanceId?: string | null,
): boolean {
  const bound = relatedCycleInstanceId(item);
  if (bound) return bound === cycleInstanceId;
  if (
    fallbackCycleInstanceId &&
    fallbackCycleInstanceId === cycleInstanceId &&
    isWorkRecommendationItem(item)
  ) {
    return true;
  }
  return false;
}

export function projectCycleWorkRecommendations(input: {
  readonly items: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string | null;
  /** When cycle binding is missing on legacy items, attribute to this cycle. */
  readonly fallbackCycleInstanceId?: string | null;
}): readonly WorkRecommendationProjectionCard[] {
  const cycleId = input.cycleInstanceId;
  if (!cycleId) return [];
  const cards: WorkRecommendationProjectionCard[] = [];
  for (const item of input.items) {
    if (!isWorkRecommendationItem(item)) continue;
    if (
      !workRecommendationBelongsToCycle(
        item,
        cycleId,
        input.fallbackCycleInstanceId ?? cycleId,
      )
    ) {
      continue;
    }
    cards.push({
      epistemicItemId: item.epistemicItemId ?? workRecommendationOptionSetRef(item) ?? "",
      statement: item.statement ?? "",
      status: item.status,
      source: item.source ?? null,
      optionSetRef: workRecommendationOptionSetRef(item),
      proposalId: relatedProposalId(item),
      cycleInstanceId: relatedCycleInstanceId(item) ?? cycleId,
      createdAt: item.createdAt ?? "",
      dispositionDecisionId: dispositionDecisionIdFromItems(item, input.items),
    });
  }
  return cards.sort((a, b) => {
    if (a.createdAt !== b.createdAt) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.epistemicItemId < b.epistemicItemId ? 1 : -1;
  });
}
