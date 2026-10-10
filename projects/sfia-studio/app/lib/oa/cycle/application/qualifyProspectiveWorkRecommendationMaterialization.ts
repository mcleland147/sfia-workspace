/**
 * P6-HQA-02 / REC-01 — Bounded Cognitive Trust + Option A durable relation plan.
 *
 * Prospective Work Recommendation materialization (Studio authority):
 *   Nora structured Recommendation candidate (semantic judgment)
 *   → Product open Work Recommendation facts + coverage
 *   → reference resolution + mechanical Product guards
 *   → materialize | abstain
 *   → (materialize path) optional workRecommendationRelation envelope
 *
 * Bounded cognitive trust (Morris):
 * Studio may accept Nora's structured semantic candidate when Product controls
 * pass and no identified material uncertainty remains. Acceptance is neither a
 * HumanDecision nor deterministic proof of semantic exactness.
 *
 * Option A durable relation (Morris):
 * - CONTRADICTORY: when mint is justified, typed envelope MUST be written
 *   atomically with the source Recommendation (planned here; enforced in writer).
 * - DISTINCT_RELATED: mint may proceed; durable typed relation is NOT automatic
 *   (proportionality — no material-necessity signal without new classifier).
 *
 * Explicitly NOT required:
 * - trackingRationale textual citation of Product ids (pseudo-proof removed).
 * - lexical/Jaccard/keyword business classifier.
 * - trackingRationaleSnapshot persistence.
 *
 * Preserved Product controls:
 * coverage COMPLETE/PARTIAL/UNAVAILABLE, valid related refs, ALREADY_COVERED,
 * UNCERTAIN abstention, exact open duplicate, exact conversationGuidance match,
 * original ACW sourceIndexes, Work/Lifecycle/Trajectory separation.
 */

import type {
  NoraActiveCycleWorkItem,
  NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { normalizeRelatedRecommendationRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { EpistemicWorkRecommendationRelation } from "../domain/types";
import {
  projectCycleWorkRecommendations,
  type TrajectoryDecisionSupportState,
  type WorkRecommendationItemLike,
  type WorkRecommendationProjectionCard,
} from "./deriveWorkRecommendations";

/** Coverage of the open-WR context presented to Nora / used for novelty claims. */
export type OpenWorkRecommendationsCoverage =
  | "COMPLETE"
  | "PARTIAL"
  | "UNAVAILABLE";

export type ProspectiveWorkRecommendationSuppressReason =
  | "missing_structured_contract"
  | "insufficient_tracking_rationale"
  | "insufficient_context_coverage"
  | "uncertain_relation"
  | "already_covered"
  | "invalid_related_ref"
  | "exact_open_duplicate"
  | "conversational_channel_exact"
  | "open_context_unavailable";

export type ProspectiveWorkRecommendationMaterializationDecision =
  | { readonly materialize: true; readonly reason: "justified_durable_work" }
  | {
      readonly materialize: false;
      readonly reason: ProspectiveWorkRecommendationSuppressReason;
    };

export type ProspectiveMaterializationPlanItem = {
  readonly item: NoraActiveCycleWorkItem;
  /** Original index in the Nora ACW payload (identity contract). */
  readonly sourceIndex: number;
};

export type OpenWorkRecommendationFact = {
  readonly epistemicItemId: string;
  readonly statement: string;
};

function normalizeExact(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function hasTrajectoryRecommendedOptionRef(
  ref: string | null | undefined,
): boolean {
  if (typeof ref !== "string") return false;
  return /^opt:trajectory:/i.test(ref.trim());
}

/**
 * Contract-minimum trackingRationale validation — not semantic materiality proof.
 * Reject empty / whitespace / mere statement echo.
 * Does NOT require Product id citation.
 */
export function isExploitableTrackingRationale(
  trackingRationale: string | null | undefined,
  statement: string,
): boolean {
  if (typeof trackingRationale !== "string") return false;
  const rationale = trackingRationale.trim();
  if (rationale.length < 8) return false;
  if (normalizeExact(rationale) === normalizeExact(statement)) return false;
  return true;
}

export function openWorkRecommendationFactsForCycle(input: {
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): OpenWorkRecommendationFact[] {
  const cards = projectCycleWorkRecommendations({
    items: input.existingItems,
    cycleInstanceId: input.cycleInstanceId,
    fallbackCycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
  });
  return cards
    .filter((c) => c.status === "active" && !c.dispositionDecisionId)
    .map((c) => ({
      epistemicItemId: c.epistemicItemId,
      statement: c.statement,
    }))
    .filter((f) => f.epistemicItemId.trim().length > 0);
}

function resolveRelatedOpenFact(
  relatedRecommendationRef: string | null | undefined,
  open: readonly OpenWorkRecommendationFact[],
): OpenWorkRecommendationFact | null {
  const normalized = normalizeRelatedRecommendationRef(relatedRecommendationRef);
  if (!normalized) return null;
  return open.find((f) => f.epistemicItemId === normalized) ?? null;
}

function relationKindOf(
  item: NoraActiveCycleWorkItem,
): NoraWorkRecommendationRelationKind | null {
  const kind = item.relationKind;
  if (
    kind === "NEW" ||
    kind === "ALREADY_COVERED" ||
    kind === "DISTINCT_RELATED" ||
    kind === "CONTRADICTORY" ||
    kind === "UNCERTAIN"
  ) {
    return kind;
  }
  return null;
}

function resolveCoverage(input: {
  readonly openRecommendationsContextAvailable?: boolean;
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
}): OpenWorkRecommendationsCoverage {
  if (input.openRecommendationsContextAvailable === false) {
    return "UNAVAILABLE";
  }
  return input.openWorkRecommendationsCoverage ?? "UNAVAILABLE";
}

/**
 * Qualify whether a single ACW Recommendation candidate should mint a durable
 * Work Recommendation under bounded cognitive trust.
 *
 * Nora supplies the semantic candidate (relationKind / trackingRationale).
 * Studio verifies Product facts, coverage, refs, and exact mechanical guards.
 * Residual semantic risk (Nora mis-labeling NEW vs guidance) is empirical —
 * not deterministically eliminated here.
 */
export function qualifyProspectiveWorkRecommendationMaterialization(input: {
  readonly statement: string;
  readonly recommendedOptionRef?: string | null;
  readonly trackingRationale?: string | null;
  readonly relationKind?: NoraWorkRecommendationRelationKind | null;
  readonly relatedRecommendationRef?: string | null;
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly openWorkRecommendationStatements?: readonly string[];
  readonly openWorkRecommendationFacts?: readonly OpenWorkRecommendationFact[];
  readonly cycleInstanceId?: string;
  /**
   * Coverage of the open-WR context used for novelty / distinctness claims.
   * PARTIAL / UNAVAILABLE never authorize NEW / DISTINCT / CONTRADICTORY mint.
   */
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
  /**
   * When false, open Recommendations could not be loaded — fail-closed.
   */
  readonly openRecommendationsContextAvailable?: boolean;
}): ProspectiveWorkRecommendationMaterializationDecision {
  const statement = input.statement.trim();
  if (!statement) {
    return { materialize: false, reason: "missing_structured_contract" };
  }

  const coverage = resolveCoverage(input);
  if (coverage === "UNAVAILABLE") {
    return { materialize: false, reason: "open_context_unavailable" };
  }

  const relationKind = input.relationKind ?? null;
  if (!relationKind) {
    return { materialize: false, reason: "missing_structured_contract" };
  }

  const openFacts: OpenWorkRecommendationFact[] =
    input.openWorkRecommendationFacts?.length
      ? [...input.openWorkRecommendationFacts]
      : (input.openWorkRecommendationStatements ?? []).map((s, i) => ({
          epistemicItemId: `epi:synthetic-open:${i}`,
          statement: s,
        }));

  const statementKey = normalizeExact(statement);

  // Exact conversationGuidance match → conversational channel, not durable WR.
  const guidance = (input.conversationGuidanceStatement ?? "").trim();
  if (guidance && normalizeExact(guidance) === statementKey) {
    return { materialize: false, reason: "conversational_channel_exact" };
  }

  // Exact re-emission guard (mechanical — not semantic equivalence).
  for (const existing of openFacts) {
    if (normalizeExact(existing.statement) === statementKey) {
      return { materialize: false, reason: "exact_open_duplicate" };
    }
  }

  if (relationKind === "UNCERTAIN") {
    return { materialize: false, reason: "uncertain_relation" };
  }

  const relatedFact = resolveRelatedOpenFact(
    input.relatedRecommendationRef,
    openFacts,
  );
  const relatedRaw = input.relatedRecommendationRef;
  const relatedProvided =
    relatedRaw !== null &&
    relatedRaw !== undefined &&
    String(relatedRaw).trim().length > 0;

  if (relationKind === "ALREADY_COVERED") {
    // Disposition of "already covered" needs a resolvable open ref (server facts).
    if (!relatedProvided || !relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    return { materialize: false, reason: "already_covered" };
  }

  // Mint paths require COMPLETE coverage — PARTIAL ≠ novelty/distinctness proof.
  if (coverage === "PARTIAL") {
    return { materialize: false, reason: "insufficient_context_coverage" };
  }

  if (
    relationKind === "DISTINCT_RELATED" ||
    relationKind === "CONTRADICTORY"
  ) {
    // Valid open ref required. Never treat as equivalence / never mutate prior.
    // Mint-time coexistence under COMPLETE + exploitable rationale.
    // CONTRADICTORY durable typed envelope is planned for the writer (Option A).
    // DISTINCT_RELATED mint does not imply systematic durable relation persist.
    if (!relatedProvided || !relatedFact) {
      return { materialize: false, reason: "invalid_related_ref" };
    }
    if (
      !isExploitableTrackingRationale(input.trackingRationale, statement)
    ) {
      return { materialize: false, reason: "insufficient_tracking_rationale" };
    }
    // CONTRADICTORY ≠ equivalence; DISTINCT_RELATED ≠ auto-collapse.
    // Coexisting durable candidate allowed; historical item unchanged.
    return { materialize: true, reason: "justified_durable_work" };
  }

  // relationKind === "NEW"
  if (relatedProvided && !relatedFact) {
    return { materialize: false, reason: "invalid_related_ref" };
  }

  if (
    !isExploitableTrackingRationale(input.trackingRationale, statement)
  ) {
    return { materialize: false, reason: "insufficient_tracking_rationale" };
  }

  // Trajectory-bound + NEW + COMPLETE + exploitable rationale.
  if (hasTrajectoryRecommendedOptionRef(input.recommendedOptionRef)) {
    return { materialize: true, reason: "justified_durable_work" };
  }

  // Bounded cognitive trust: Nora's NEW is a semantic candidate.
  // Studio verified COMPLETE coverage + contract-minimum rationale + Product guards.
  // This is NOT deterministic proof of semantic materiality.
  return { materialize: true, reason: "justified_durable_work" };
}

/** @deprecated Prefer openWorkRecommendationFactsForCycle — statements only. */
export function openWorkRecommendationStatementsForCycle(input: {
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
}): string[] {
  return openWorkRecommendationFactsForCycle(input).map((f) => f.statement);
}

/**
 * Prospective filter on ACW items before materializeActiveCycleWork.
 * Preserves original payload indexes for Epistemic identity stability.
 * Non-Recommendation items are never blocked by WR coverage.
 */
export function filterActiveCycleWorkItemsForProspectiveMaterialization(input: {
  readonly items: ReadonlyArray<NoraActiveCycleWorkItem>;
  readonly conversationGuidanceStatement?: string | null | undefined;
  readonly existingItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
  readonly trajectoryDecisionSupportState: TrajectoryDecisionSupportState;
  readonly openRecommendationsContextAvailable?: boolean;
  readonly openWorkRecommendationsCoverage?: OpenWorkRecommendationsCoverage;
}): {
  readonly items: NoraActiveCycleWorkItem[];
  /** Parallel to `items` — original ACW payload indexes. */
  readonly sourceIndexes: number[];
  readonly plan: ProspectiveMaterializationPlanItem[];
  readonly suppressed: ReadonlyArray<{
    readonly statement: string;
    readonly reason: ProspectiveWorkRecommendationSuppressReason;
    readonly sourceIndex: number;
  }>;
} {
  const contextAvailable = input.openRecommendationsContextAvailable !== false;
  const coverage: OpenWorkRecommendationsCoverage = !contextAvailable
    ? "UNAVAILABLE"
    : (input.openWorkRecommendationsCoverage ?? "UNAVAILABLE");

  const openFacts = contextAvailable
    ? openWorkRecommendationFactsForCycle({
        existingItems: input.existingItems,
        cycleInstanceId: input.cycleInstanceId,
        trajectoryDecisionSupportState: input.trajectoryDecisionSupportState,
      })
    : [];

  const plan: ProspectiveMaterializationPlanItem[] = [];
  const suppressed: Array<{
    statement: string;
    reason: ProspectiveWorkRecommendationSuppressReason;
    sourceIndex: number;
  }> = [];
  const acceptedStatements: string[] = [];

  for (let sourceIndex = 0; sourceIndex < input.items.length; sourceIndex += 1) {
    const item = input.items[sourceIndex]!;
    if (item.type !== "Recommendation") {
      plan.push({ item, sourceIndex });
      continue;
    }
    const openWithAccepted: OpenWorkRecommendationFact[] = [
      ...openFacts,
      ...acceptedStatements.map((statement, i) => ({
        epistemicItemId: `epi:same-turn:${i}`,
        statement,
      })),
    ];
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: item.statement,
      recommendedOptionRef: item.recommendedOptionRef,
      trackingRationale: item.trackingRationale,
      relationKind: relationKindOf(item),
      relatedRecommendationRef: item.relatedRecommendationRef,
      conversationGuidanceStatement: input.conversationGuidanceStatement,
      openWorkRecommendationFacts: openWithAccepted,
      cycleInstanceId: input.cycleInstanceId,
      openWorkRecommendationsCoverage: coverage,
      openRecommendationsContextAvailable: contextAvailable,
    });
    if (decision.materialize) {
      plan.push({ item, sourceIndex });
      acceptedStatements.push(item.statement.trim());
    } else {
      suppressed.push({
        statement: item.statement.trim(),
        reason: decision.reason,
        sourceIndex,
      });
    }
  }

  return {
    items: plan.map((p) => p.item),
    sourceIndexes: plan.map((p) => p.sourceIndex),
    plan,
    suppressed,
  };
}

/**
 * Plan the optional durable typed relation envelope for a minting Recommendation.
 *
 * CONTRADICTORY → envelope required (writer fails closed if target not applicable).
 * DISTINCT_RELATED → no durable envelope in this increment (proportionality;
 * no material-necessity signal without inventing a classifier / new Nora field).
 * Other kinds → no envelope.
 */
export function planDurableWorkRecommendationRelation(input: {
  readonly relationKind?: NoraWorkRecommendationRelationKind | null;
  readonly relatedRecommendationRef?: string | null;
}):
  | {
      readonly persist: true;
      readonly relation: EpistemicWorkRecommendationRelation;
    }
  | { readonly persist: false; readonly reason: "not_required" }
  | {
      readonly persist: false;
      readonly reason: "contradictory_target_missing";
    } {
  if (input.relationKind === "CONTRADICTORY") {
    const targetId = normalizeRelatedRecommendationRef(
      input.relatedRecommendationRef,
    );
    if (!targetId) {
      return { persist: false, reason: "contradictory_target_missing" };
    }
    return {
      persist: true,
      relation: {
        kind: "CONTRADICTORY",
        targetEpistemicItemId: targetId,
        judgmentOrigin: "nora_structured_candidate",
        authority: "none",
      },
    };
  }
  // DISTINCT_RELATED / NEW / others: no systematic durable typed relation.
  return { persist: false, reason: "not_required" };
}

/** Re-export card type for context projection consumers. */
export type { WorkRecommendationProjectionCard };
