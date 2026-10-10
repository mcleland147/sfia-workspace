/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 + CHAT-FIRST-WORK-RECOMMENDATION-CONTINUITY-01
 * Work Recommendation vs Lifecycle Recommendation family separation.
 *
 * Work Recommendations:
 * - historical sealed carriers: source / relatedObjects optset:*
 * - ACW Nora Recommendations (source = active-cycle-work:nora) that are not
 *   Lifecycle and not classified as active ProjectTrajectory-replan Recommendations
 *
 * Lifecycle Recommendations: typed lifecycleRecommendation + source
 * lifecycle-recommendation:nora — never Journal Work.
 *
 * Journal > Recommandations projects WORK only (MD-WR-02).
 * Dedup: when a sealed optset WR links an ACW id, project the sealed card only.
 */

const LIFECYCLE_RECOMMENDATION_SOURCE = "lifecycle-recommendation:nora";
const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora";
const OPTION_SET_REF_PREFIX = "optset:";
const PROPOSAL_ID_PREFIX = "prop:";
const CYCLE_ID_PREFIX = "cycinst:";
/** Alternate cycle id prefix used by some durable writers. */
const CYCLE_INSTANCE_PREFIXES = ["cycinst:", "cycle:", "cyc:"] as const;
const TRAJECTORY_OPTION_PREFIX = "opt:trajectory:";

export type WorkRecommendationRelationApplicability =
  | "applicable"
  | "not_applicable"
  | "unknown";

export type WorkRecommendationRelationProjection = {
  readonly kind: "CONTRADICTORY" | "DISTINCT_RELATED";
  readonly targetEpistemicItemId: string;
  readonly judgmentOrigin: "nora_structured_candidate";
  readonly authority: "none";
  /** Derived at read time — never persisted as CURRENT/STALE. */
  readonly applicability: WorkRecommendationRelationApplicability;
};

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
  readonly workRecommendationRelation?: {
    readonly kind: "CONTRADICTORY" | "DISTINCT_RELATED";
    readonly targetEpistemicItemId: string;
    readonly judgmentOrigin: "nora_structured_candidate";
    readonly authority: "none";
  } | null;
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
  /** ACW identity when this card is (or is linked to) an ACW Recommendation. */
  readonly workRecommendationEpistemicItemId: string | null;
  /** Option A durable typed relation on source — optional / absent on legacy. */
  readonly workRecommendationRelation: WorkRecommendationRelationProjection | null;
};

export function isLifecycleRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (item.lifecycleRecommendation != null) return true;
  return (item.source ?? "") === LIFECYCLE_RECOMMENDATION_SOURCE;
}

export function isActiveCycleWorkRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (isLifecycleRecommendationItem(item)) return false;
  return (item.source ?? "") === ACTIVE_CYCLE_WORK_SOURCE;
}

/**
 * Blocker 3 — explicit tri-state of the ProjectTrajectory decision-support
 * (TDS) projection. NONE and UNAVAILABLE MUST NOT be collapsed:
 * - PRESENT: ACW+opt:trajectory:* is PT fuel — excluded from Work.
 * - NONE: non-lifecycle ACW (incl. opt:trajectory:*) can be Work.
 * - UNAVAILABLE: fail-closed — ACW+opt:trajectory:* must NOT become Work;
 *   plain ACW without opt:trajectory:* may remain Work if coherent.
 */
export type TrajectoryDecisionSupportState = "PRESENT" | "NONE" | "UNAVAILABLE";

/** ACW Recommendation carrying a typed opt:trajectory:* option ref. */
export function hasTrajectoryOptionRef(
  item: WorkRecommendationItemLike,
): boolean {
  return (item.relatedObjects ?? []).some((r) =>
    r.startsWith(TRAJECTORY_OPTION_PREFIX),
  );
}

/**
 * ACW Recommendation currently treated as ProjectTrajectory / replan fuel.
 * Pure: opt:trajectory:* present AND TDS state is PRESENT.
 */
export function isAcwProjectTrajectoryRecommendationItem(
  item: WorkRecommendationItemLike,
  input: {
    readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
  },
): boolean {
  if (!isActiveCycleWorkRecommendationItem(item)) return false;
  if (input.trajectoryDecisionSupportState !== "PRESENT") return false;
  return hasTrajectoryOptionRef(item);
}

/**
 * ACW Recommendation that must NOT be treated as Work under the given TDS
 * state: PT fuel (PRESENT) or uncertain / fail-closed (UNAVAILABLE).
 * NONE never excludes.
 */
export function isAcwExcludedFromWorkByTrajectoryState(
  item: WorkRecommendationItemLike,
  input: {
    readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
  },
): boolean {
  if (!isActiveCycleWorkRecommendationItem(item)) return false;
  if (input.trajectoryDecisionSupportState === "NONE") return false;
  return hasTrajectoryOptionRef(item);
}

export function isWorkRecommendationItem(
  item: WorkRecommendationItemLike,
  input?: {
    /**
     * PRESENT → ACW+opt:trajectory:* is PT fuel; UNAVAILABLE → fail-closed
     * (also excluded); NONE → Work. Omitted → "NONE" (callers that already
     * hold a sealed optset / ACW identity and do not classify PT fuel).
     */
    readonly trajectoryDecisionSupportState?: TrajectoryDecisionSupportState;
  },
): boolean {
  if (item.type !== "Recommendation") return false;
  if (isLifecycleRecommendationItem(item)) return false;
  const source = item.source ?? "";
  if (source.startsWith(OPTION_SET_REF_PREFIX)) return true;
  if (
    (item.relatedObjects ?? []).some((r) => r.startsWith(OPTION_SET_REF_PREFIX))
  ) {
    return true;
  }
  if (source === ACTIVE_CYCLE_WORK_SOURCE) {
    if (
      isAcwExcludedFromWorkByTrajectoryState(item, {
        trajectoryDecisionSupportState:
          input?.trajectoryDecisionSupportState ?? "NONE",
      })
    ) {
      return false;
    }
    return true;
  }
  return false;
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

export function workRecommendationAcwId(
  item: WorkRecommendationItemLike,
): string | null {
  if (isActiveCycleWorkRecommendationItem(item)) {
    return item.epistemicItemId ?? null;
  }
  const fromRelated = (item.relatedObjects ?? []).find(
    (r) => typeof r === "string" && r.startsWith("epi:acw:"),
  );
  return fromRelated ?? null;
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
  const acwId = workRecommendationAcwId(item);
  for (const candidate of all) {
    if (candidate.type !== "DecisionRef" || candidate.status !== "active") {
      continue;
    }
    const related = candidate.relatedObjects ?? [];
    const closesOptionSet =
      optionSetRef != null && related.includes(optionSetRef);
    const closesAcw = acwId != null && related.includes(acwId);
    if (!closesOptionSet && !closesAcw) continue;
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
 * True when `item` is an open ACW Work Recommendation suitable as a typed
 * relation target (active, non-lifecycle, undisposed, cycle-bound).
 */
export function isOpenWorkRecommendationRelationTarget(input: {
  readonly item: WorkRecommendationItemLike;
  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
}): boolean {
  const { item, allItems, cycleInstanceId } = input;
  if (!isActiveCycleWorkRecommendationItem(item)) return false;
  if (item.status !== "active") return false;
  if (item.lifecycleRecommendation != null) return false;
  if (dispositionDecisionIdFromItems(item, allItems)) return false;
  if (
    !workRecommendationBelongsToCycle(
      item,
      cycleInstanceId,
      cycleInstanceId,
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Derive relation applicability at read time (Identity ≠ currentness).
 * Durable envelope remains; applicability is not persisted.
 *
 * "applicable" means both source (when provided) and target are still open
 * active Work Recommendations — not a global Currentness Engine verdict.
 */
export function deriveWorkRecommendationRelationApplicability(input: {
  readonly relation: NonNullable<
    WorkRecommendationItemLike["workRecommendationRelation"]
  >;
  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string | null;
  readonly contextAvailable?: boolean;
  /** Source Recommendation carrying the envelope — required for honest applicability. */
  readonly sourceItem?: WorkRecommendationItemLike | null;
}): WorkRecommendationRelationApplicability {
  if (input.contextAvailable === false) return "unknown";
  if (!input.cycleInstanceId) return "unknown";
  const targetId = input.relation.targetEpistemicItemId.trim();
  if (!targetId) return "unknown";
  const target = input.allItems.find((i) => i.epistemicItemId === targetId);
  if (!target) return "unknown";

  if (input.sourceItem) {
    const sourceOpen = isOpenWorkRecommendationRelationTarget({
      item: input.sourceItem,
      allItems: input.allItems,
      cycleInstanceId: input.cycleInstanceId,
    });
    if (!sourceOpen) return "not_applicable";
  }

  if (
    isOpenWorkRecommendationRelationTarget({
      item: target,
      allItems: input.allItems,
      cycleInstanceId: input.cycleInstanceId,
    })
  ) {
    return "applicable";
  }
  return "not_applicable";
}

function projectWorkRecommendationRelation(
  item: WorkRecommendationItemLike,
  all: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId: string,
): WorkRecommendationRelationProjection | null {
  const rel = item.workRecommendationRelation;
  if (!rel) return null;
  if (rel.kind !== "CONTRADICTORY" && rel.kind !== "DISTINCT_RELATED") {
    return null;
  }
  if (rel.judgmentOrigin !== "nora_structured_candidate") return null;
  if (rel.authority !== "none") return null;
  const targetId = rel.targetEpistemicItemId?.trim();
  if (!targetId) return null;
  return {
    kind: rel.kind,
    targetEpistemicItemId: targetId,
    judgmentOrigin: "nora_structured_candidate",
    authority: "none",
    applicability: deriveWorkRecommendationRelationApplicability({
      relation: rel,
      allItems: all,
      cycleInstanceId,
      sourceItem: item,
    }),
  };
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
  /**
   * Blocker 3 — explicit TDS tri-state. PRESENT: ACW+opt:trajectory:* is PT
   * fuel (excluded, MD-WR-02/04). UNAVAILABLE: same exclusion, fail-closed.
   * NONE: ACW can be Work. REQUIRED — no boolean collapse.
   */
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): readonly WorkRecommendationProjectionCard[] {
  const cycleId = input.cycleInstanceId;
  if (!cycleId) return [];
  const tdsState = input.trajectoryDecisionSupportState;
  const workItems = input.items.filter((item) =>
    isWorkRecommendationItem(item, { trajectoryDecisionSupportState: tdsState }),
  );

  // Dedup: sealed optset WR that links an ACW id suppresses the unbound ACW card.
  const sealedAcwIds = new Set<string>();
  for (const item of workItems) {
    const optset = workRecommendationOptionSetRef(item);
    if (!optset) continue;
    const acw = workRecommendationAcwId(item);
    if (acw) sealedAcwIds.add(acw);
  }

  const cards: WorkRecommendationProjectionCard[] = [];
  for (const item of workItems) {
    if (
      !workRecommendationBelongsToCycle(
        item,
        cycleId,
        input.fallbackCycleInstanceId ?? cycleId,
      )
    ) {
      continue;
    }
    const acwId = workRecommendationAcwId(item);
    const optset = workRecommendationOptionSetRef(item);
    if (
      !optset &&
      acwId &&
      sealedAcwIds.has(acwId) &&
      isActiveCycleWorkRecommendationItem(item)
    ) {
      continue;
    }
    cards.push({
      epistemicItemId:
        item.epistemicItemId ?? workRecommendationOptionSetRef(item) ?? "",
      statement: item.statement ?? "",
      status: item.status,
      source: item.source ?? null,
      optionSetRef: optset,
      proposalId: relatedProposalId(item),
      cycleInstanceId: relatedCycleInstanceId(item) ?? cycleId,
      createdAt: item.createdAt ?? "",
      dispositionDecisionId: dispositionDecisionIdFromItems(item, input.items),
      workRecommendationEpistemicItemId: acwId,
      workRecommendationRelation: projectWorkRecommendationRelation(
        item,
        input.items,
        cycleId,
      ),
    });
  }
  return cards.sort((a, b) => {
    if (a.createdAt !== b.createdAt) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.epistemicItemId < b.epistemicItemId ? 1 : -1;
  });
}
