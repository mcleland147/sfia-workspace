# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — OPTION A DURABLE TYPED WORK RECOMMENDATION RELATION DELIVERY
# Local Bounded Delivery (template v2.6 §7.5)

## 1. Horodatage

- Generated: 2026-10-10T20:48:22+02:00
- Cycle: P6-HQA-02 / REC-01 — Option A Durable Typed Relation Delivery
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Prior architecture handoff: `60f5c7383a197d674bc9f88548fe83d5380fbfe9` blob `b9a23e6bc93de6e7432eb37448457070508758eb`
- Morris: Option A ADOPTED for REC-01; CONTRADICTORY durable; DISTINCT_RELATED proportional; T3 maintained

## 2. Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branch | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| Staged | empty |
| Candidate preserved | YES (Option B + bounded trust + Option A delivery layered) |
| Destructive git | NONE |
| Project commit/push/PR | NONE |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 896 +++++++++++++++++----
 .../corrProof06.artifactObligation.d0.test.ts      |   4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |  11 +-
 ...qa.rec03.journalRecommendationLabel.ui.test.tsx |   1 +
 .../p6.ux.recommendationContinuity.ui.test.tsx     |   1 +
 .../activeCycleCognitiveWork.d0.test.ts            | 450 +++++++++++
 .../noraConversationalInitiative.d0.test.ts        |   3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |   9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |   6 +
 .../studioCognitiveContext.test.ts                 |   8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |  10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |  23 +
 .../project-assistant/f2/studioCognitiveContext.ts | 152 +++-
 .../materializeActiveCycleWork.ts                  | 149 +++-
 .../features/project-assistant/orchestrateTurn.ts  |  46 +-
 .../noraProductTurnOutputType.ts                   |  94 ++-
 .../cycle/application/deriveWorkRecommendations.ts | 110 +++
 .../oa/cycle/application/updateEpistemicState.ts   |   3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |  23 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  17 +
 20 files changed, 1843 insertions(+), 173 deletions(-)
```

### git diff --cached --stat

```
(empty)
```

## 3. GO Morris

**DELIVERY LOCALE BORNÉE** — Option A durable typed WR relations.

Applied:
1. Optional typed envelope on EpistemicItem WR via payload_json — no new table/DDL/store
2. CONTRADICTORY durable + reconstructible; candidate judgment; no HD/supersede/dispose
3. DISTINCT_RELATED proportional — not systematically persisted this increment
4. No trackingRationaleSnapshot; no Product-id citation pseudo-proof
5. Currentness derived at read (durable ≠ CURRENT)
6. Provenance reused (no duplicated timestamps/correlation)
7. Nora projection of persisted relation after resume
8. Journal/UX unchanged beyond fixture TS; UX-REC-02 kept
9. T3 — REC-01 not closed until durable continuity proven/reviewed
10. Strictly prospective — no historical mutation/backfill

## 4. Qualification SFIA

| Field | Value |
|-------|-------|
| Cycle | 8 — Delivery |
| Profile | Critical |
| Typologie | EVOL — correction/complétion structurée |
| Capacités | V3-F04, V3-F08, V3-F05, V3-F02, V3-F14 |

## 5. Convergence Pre-check

Build Doctrine VALIDATED · Roadmap P6 · C1/P2 VALIDATED · P6 Human QA IN PROGRESS · P6 GLOBAL PASS=NO · Runtime v3 NON ADOPTED.

Gap closed (deterministic): typed CONTRADICTORY relation reconstructible after SQLite reload.

## 6. Sources

Governance / Product Simplification / doctrine v3 / template / routing / prior handoff `60f5c738` (Option A study). CKC Cycle 8 synthetic fallback.

Primary code paths adapted on corrective worktree (not main).

## 7. Architecture Option A adoptée

Carrier: `EpistemicItem.workRecommendationRelation?` optional typed envelope.
Persist: existing `oa_epistemic_items.payload_json` via `UpdateEpistemicState` → `SqliteEpistemicRepository.saveForProject`.
Pattern harvest: `lifecycleRecommendation` / `reservation` Option A.

## 8–10. Contrat Product initial → final / Enveloppe

### Initial (bounded trust)
Mint-time `relationKind` / `relatedRecommendationRef` gates only — not persisted.

### Final (Option A)
```typescript
/**
 * P6-HQA-02 REC-01 Option A — optional typed Work Recommendation relation.
 * Persisted on the source Recommendation EpistemicItem (payload_json).
 * Absent on historical / non-WR items. CURRENT/STALE never stored here.
 * Candidate Nora judgment admitted by Studio — never Pilot HumanDecision.
 */
export type EpistemicWorkRecommendationRelationKind =
  | "CONTRADICTORY"
  | "DISTINCT_RELATED";

export type EpistemicWorkRecommendationRelation = {
  kind: EpistemicWorkRecommendationRelationKind;
  targetEpistemicItemId: string;
  judgmentOrigin: "nora_structured_candidate";
  authority: "none";
};

export type EpistemicItem = {
  schemaVersion: "0.1.0-oa";
  epistemicItemId: string;
  type: EpistemicItemType;
  statement: string;
  status: EpistemicItemStatus;
  confidence?: EpistemicConfidence;
  source?: string;
  createdBy: ActorReference;
  createdAt: string;
  supersedes?: string;
  relatedObjects?: string[];
  /**
   * Legacy generic flag. New Reservations must not rely on this as nominal
   * FINALIZE semantics — use reservation.finalizationRelevance instead.
   * Historical blocking=true without reservation metadata remains fail-closed.
   */
  blocking?: boolean;
  provenance?: ProvenanceRecord;
  /** Optional — absent on historical / non-lifecycle Recommendations. */
  lifecycleRecommendation?: EpistemicLifecycleRecommendation;
  /**
   * CYCLE-RESERVATION-PILOTING-01 — optional typed Reservation metadata.
   * Absent on legacy MealFlow / pre-metadata Reservations.
   */
  reservation?: import("./reservationSemantics").EpistemicReservationMetadata;
  /**
   * P6-HQA-02 REC-01 Option A — optional typed WR–WR relation on source item.
   * Work Recommendations (ACW) only. Absent on legacy / non-WR items.
   */
  workRecommendationRelation?: EpistemicWorkRecommendationRelation;
};
```

## 11. Validation des relations

Before write (inside UoW after Context Seal):
- Recommendation ACW only
- CONTRADICTORY plan requires normalized target id
- Target must pass `isOpenWorkRecommendationRelationTarget` (active ACW WR, non-lifecycle, undisposed, cycle-bound)
- Fail-closed: `ACTIVE_CYCLE_WORK_RELATION_INVALID` — no incomplete CONTRADICTORY mint
- Coverage/ref gates remain in `qualifyProspective…` (COMPLETE required for mint paths)

## 12. CONTRADICTORY / DISTINCT_RELATED

| Kind | Mint WR | Persist envelope |
|------|---------|------------------|
| CONTRADICTORY | if Product gates pass | **YES — atomic with item** |
| DISTINCT_RELATED | if Product gates pass | **NO** this increment (proportionality; no material-necessity signal without new classifier) |
| NEW | if gates pass | NO |
| ALREADY_COVERED / UNCERTAIN | abstain | N/A |

```typescript
export function planDurableWorkRecommendationRelation(input: {
  readonly relationKind?: NoraWorkRecommendationRelationKind | null;
  readonly relatedRecommendationRef?: string | null;
}
```

## 13. Provenance

Reuses existing ACW `buildProvenance` on item. Envelope does not duplicate projectId/cycleInstanceId/correlationId/timestamps.

## 14. Product SQLite

No DDL change. Envelope serialized in payload_json when present on write object. Absent on legacy → parse OK.

## 15. UoW / atomicité

Relation planned + written in same `UpdateEpistemicState` batch as Recommendation create inside `runInTransaction`. CONTRADICTORY without applicable target aborts before write.

## 16–17. materialParity / Idempotence

`materialParity` now includes relation material key (kind|target|origin|authority). Same ACW id with different relation → `ACTIVE_CYCLE_WORK_IDEM_CONFLICT`. sourceIndexes preserved. Replay same turn with same relation → reuse.

## 18. Reconstructibilité après reload

Integrated test: seed SQLite → mint REC-001 → mint REC-002 CONTRADICTORY → reopenRuntime(same dbPath) → listByProject → relation reconstructed → studioCognitiveContext projection + prompt.

**PASS** (see §22).

## 19. Currentness

`deriveWorkRecommendationRelationApplicability`: applicable | not_applicable | unknown — derived at read against open target facts. Never persisted as CURRENT/STALE. No new Currentness Engine.

## 20. Projections Nora

`StudioOpenWorkRecommendationProjection.workRecommendationRelation` + prompt lines `relation=KIND->target … applicability=…` with disclaimer ≠ HumanDecision.

## 21. Historique

Prospective only. Optional field. Legacy items without envelope remain valid (tested). No backfill.

## 22. Tests

| Suite | Result |
|-------|--------|
| qualifyProspective… (23) incl. planDurable | **PASS** |
| Option A SQLite reload + DISTINCT + legacy + materialParity (4) | **PASS** |
| bounded trust integrated idempotence | **PASS** |
| chatFirstWorkRecommendationContinuity (49) | **PASS** |
| noraLifecycleRecommendationContinuity (26) | **PASS** |
| UX-REC-02 / UX continuity / REC-03 fixtures | **PASS** (tsc + prior runs) |
| `tsc --noEmit` | **PASS** |
| ESLint targeted | **PASS** |
| Historical suites not re-run | **NOT RUN** |

## 23. Fake / Real

DETERMINISTIC PROVEN AT DURABLE RELATION CONTRACTED SCOPE (fixtures). ≠ READY FOR REAL. REAL BOUNDARY / E2E REAL / P6 PASS / v3 ADOPTED = NO.

## 24–26. Fichiers / contenus / diffs

### Created / rewritten (untracked vs HEAD)
- `qualifyProspectiveWorkRecommendationMaterialization.ts` (full — includes Option A planDurable)
- qualify tests; optionB context test; UX-REC-02 test (prior campaign)

### Modified this cycle (Option A)
- `domain/types.ts` — envelope types + EpistemicItem + UpdateEpistemicStateRequest
- `updateEpistemicState.ts` — clone envelope
- `materializeActiveCycleWork.ts` — resolve/write/parity
- `deriveWorkRecommendations.ts` — target check, applicability, card field
- `studioCognitiveContext.ts` — projection + prompt
- `buildProjectSystemPrompt.ts` — minimal CONTRADICTORY resume note
- `lib/oa/cycle/index.ts` — exports
- ACW tests — SQLite reload suite
- UI test fixtures — `workRecommendationRelation: null`

### Full qualify module

```typescript
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

```

### types.ts diff vs HEAD

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index fbf7b67a..d38da7db 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -326,6 +326,23 @@ export type EpistemicLifecycleRecommendation = {
   qualificationSignals?: ExplicitCycleQualificationSignals;
 };

+/**
+ * P6-HQA-02 REC-01 Option A — optional typed Work Recommendation relation.
+ * Persisted on the source Recommendation EpistemicItem (payload_json).
+ * Absent on historical / non-WR items. CURRENT/STALE never stored here.
+ * Candidate Nora judgment admitted by Studio — never Pilot HumanDecision.
+ */
+export type EpistemicWorkRecommendationRelationKind =
+  | "CONTRADICTORY"
+  | "DISTINCT_RELATED";
+
+export type EpistemicWorkRecommendationRelation = {
+  kind: EpistemicWorkRecommendationRelationKind;
+  targetEpistemicItemId: string;
+  judgmentOrigin: "nora_structured_candidate";
+  authority: "none";
+};
+
 export type EpistemicItem = {
   schemaVersion: "0.1.0-oa";
   epistemicItemId: string;
@@ -352,6 +369,11 @@ export type EpistemicItem = {
    * Absent on legacy MealFlow / pre-metadata Reservations.
    */
   reservation?: import("./reservationSemantics").EpistemicReservationMetadata;
+  /**
+   * P6-HQA-02 REC-01 Option A — optional typed WR–WR relation on source item.
+   * Work Recommendations (ACW) only. Absent on legacy / non-WR items.
+   */
+  workRecommendationRelation?: EpistemicWorkRecommendationRelation;
 };

 export type CkcResolution = {
@@ -479,6 +501,7 @@ export type UpdateEpistemicStateRequest = {
     provenance?: ProvenanceRecord;
     lifecycleRecommendation?: EpistemicLifecycleRecommendation;
     reservation?: import("./reservationSemantics").EpistemicReservationMetadata;
+    workRecommendationRelation?: EpistemicWorkRecommendationRelation;
     /**
      * Forbidden auto-promotion signal — if true and type is DecisionRef
      * while superseding a Hypothesis, refused.

```

### updateEpistemicState.ts diff vs HEAD

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
index cd8b3064..a135ba86 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
@@ -139,6 +139,9 @@ export class UpdateEpistemicState {
             reservation: raw.reservation
               ? structuredClone(raw.reservation)
               : undefined,
+            workRecommendationRelation: raw.workRecommendationRelation
+              ? structuredClone(raw.workRecommendationRelation)
+              : undefined,
           };

           if (this.epistemic.saveForProject) {

```

### materializeActiveCycleWork.ts diff vs HEAD

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
index 4ae0f934..7f963060 100644
--- a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
@@ -12,6 +12,7 @@ import type {
   EpistemicConfidence,
   EpistemicItem,
   EpistemicItemType,
+  EpistemicWorkRecommendationRelation,
 } from "@/lib/oa/cycle";
 import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
 import type { AppendLivingProjectStateVersion } from "@/lib/oa/project/application/appendLivingProjectStateVersion";
@@ -19,8 +20,13 @@ import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/
 import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
 import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
 import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
-import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import {
+  normalizeActiveCycleRecommendedOptionRef,
+  normalizeRelatedRecommendationRef,
+} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
+import { planDurableWorkRecommendationRelation } from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
+import { isOpenWorkRecommendationRelationTarget } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
 import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

 /** Stable Product source for Nora active-cycle cognitive work. */
@@ -209,6 +215,18 @@ function buildProvenance(input: {
   };
 }

+function relationMaterialKey(
+  relation: EpistemicWorkRecommendationRelation | null | undefined,
+): string {
+  if (!relation) return "";
+  return [
+    relation.kind,
+    relation.targetEpistemicItemId,
+    relation.judgmentOrigin,
+    relation.authority,
+  ].join("|");
+}
+
 function materialParity(
   existing: EpistemicItem,
   next: {
@@ -217,6 +235,7 @@ function materialParity(
     confidence?: EpistemicConfidence;
     blocking?: boolean;
     recommendedOptionRef?: string | null;
+    workRecommendationRelation?: EpistemicWorkRecommendationRelation | null;
   },
 ): boolean {
   if (existing.type !== next.type) return false;
@@ -231,9 +250,72 @@ function materialParity(
   const existingRef = extractAcwRecommendedOptionRef(existing.relatedObjects);
   const nextRef = next.recommendedOptionRef?.trim() || null;
   if ((existingRef ?? null) !== (nextRef ?? null)) return false;
+  // Option A — same identity must not silently change typed relation material.
+  if (
+    relationMaterialKey(existing.workRecommendationRelation) !==
+    relationMaterialKey(next.workRecommendationRelation)
+  ) {
+    return false;
+  }
   return true;
 }

+/**
+ * Resolve durable typed WR relation for a Recommendation mint inside UoW.
+ * CONTRADICTORY requires an open applicable Work Recommendation target now.
+ * Fail-closed: never mint CONTRADICTORY without a writable envelope.
+ */
+function resolveWorkRecommendationRelationForWrite(input: {
+  readonly item: NoraActiveCycleWorkItem;
+  readonly existingItems: readonly EpistemicItem[];
+  readonly cycleInstanceId: string;
+}):
+  | { readonly ok: true; readonly relation?: EpistemicWorkRecommendationRelation }
+  | { readonly ok: false; readonly reason: string } {
+  if (input.item.type !== "Recommendation") {
+    return { ok: true };
+  }
+  const planned = planDurableWorkRecommendationRelation({
+    relationKind: input.item.relationKind,
+    relatedRecommendationRef: input.item.relatedRecommendationRef,
+  });
+  if (!planned.persist) {
+    if (planned.reason === "contradictory_target_missing") {
+      return { ok: false, reason: "contradictory_relation_target_missing" };
+    }
+    return { ok: true };
+  }
+  const targetId = planned.relation.targetEpistemicItemId;
+  const target = input.existingItems.find((e) => e.epistemicItemId === targetId);
+  if (
+    !target ||
+    !isOpenWorkRecommendationRelationTarget({
+      item: target,
+      allItems: input.existingItems,
+      cycleInstanceId: input.cycleInstanceId,
+    })
+  ) {
+    return {
+      ok: false,
+      reason: "contradictory_relation_target_not_applicable",
+    };
+  }
+  // Normalize once more against Product id (not Nora text paraphrase).
+  const normalized = normalizeRelatedRecommendationRef(targetId);
+  if (!normalized || normalized !== target.epistemicItemId) {
+    return { ok: false, reason: "contradictory_relation_target_invalid" };
+  }
+  return {
+    ok: true,
+    relation: {
+      kind: "CONTRADICTORY",
+      targetEpistemicItemId: normalized,
+      judgmentOrigin: "nora_structured_candidate",
+      authority: "none",
+    },
+  };
+}
+
 function normNullable(value: string | null | undefined): string | null {
   const t = value?.trim();
   return t ? t : null;
@@ -353,6 +435,14 @@ function assertContextSealAgainstLiveState(input: {
  */
 export async function materializeActiveCycleWork(input: {
   items: readonly NoraActiveCycleWorkItem[];
+  /**
+   * Optional original Nora ACW payload indexes parallel to `items`.
+   * When set, Epistemic identity uses these indexes instead of the filtered
+   * array position — required so prospective REC-01 suppression cannot shift
+   * identities of surviving items on logical-turn replay.
+   * Omit for legacy callers that pass the full unfiltered payload.
+   */
+  itemSourceIndexes?: readonly number[];
   facts: ActiveCycleWorkMaterializationFacts;
   updateEpistemicState: UpdateEpistemicState;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
@@ -378,6 +468,17 @@ export async function materializeActiveCycleWork(input: {
     };
   }

+  if (
+    input.itemSourceIndexes != null &&
+    input.itemSourceIndexes.length !== input.items.length
+  ) {
+    return {
+      ok: false,
+      code: "ACTIVE_CYCLE_WORK_INVALID",
+      reason: "source_indexes_length_mismatch",
+    };
+  }
+
   for (const item of input.items) {
     if (!ACTIVE_CYCLE_WORK_ALLOWED_TYPES.has(item.type as EpistemicItemType)) {
       return {
@@ -398,6 +499,19 @@ export async function materializeActiveCycleWork(input: {
         reason: "recommended_option_ref_only_on_recommendation",
       };
     }
+    // P6-HQA-02 REC-01 Option B — structured WR fields are Recommendation-only.
+    if (
+      item.type !== "Recommendation" &&
+      (item.trackingRationale !== undefined ||
+        item.relationKind !== undefined ||
+        item.relatedRecommendationRef !== undefined)
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "option_b_fields_only_on_recommendation",
+      };
+    }
     if (
       item.type === "Recommendation" &&
       item.recommendedOptionRef != null &&
@@ -516,6 +630,7 @@ export async function materializeActiveCycleWork(input: {
         blocking?: boolean;
         relatedObjects: string[];
         provenance: ProvenanceRecord;
+        workRecommendationRelation?: EpistemicWorkRecommendationRelation;
         reuse: boolean;
       }> = [];

@@ -525,6 +640,9 @@ export async function materializeActiveCycleWork(input: {

       for (let index = 0; index < input.items.length; index += 1) {
         const raw = input.items[index]!;
+        // Prefer original ACW payload index when prospective filtering compacted
+        // the write list — identity must not depend on post-filter position.
+        const identityIndex = input.itemSourceIndexes?.[index] ?? index;
         const type = raw.type as EpistemicItemType;
         const statement = raw.statement.trim();
         if (!statement) {
@@ -543,7 +661,7 @@ export async function materializeActiveCycleWork(input: {
           projectId: facts.projectId,
           cycleInstanceId: facts.activeCycleInstanceId,
           turnCorrelationId: facts.turnCorrelationId,
-          index,
+          index: identityIndex,
           type,
           statement,
           recommendedOptionRef,
@@ -555,6 +673,20 @@ export async function materializeActiveCycleWork(input: {
             : (raw.confidence as EpistemicConfidence);
         const blocking = resolveActiveCycleWorkBlockingFlag(type, raw.blocking);

+        // Re-validate CONTRADICTORY target inside UoW (after Context Seal).
+        const relationPlan = resolveWorkRecommendationRelationForWrite({
+          item: raw,
+          existingItems: facts.existingItems,
+          cycleInstanceId: facts.activeCycleInstanceId,
+        });
+        if (!relationPlan.ok) {
+          throw new ActiveCycleWorkAtomicFailure(
+            "ACTIVE_CYCLE_WORK_RELATION_INVALID",
+            relationPlan.reason,
+          );
+        }
+        const workRecommendationRelation = relationPlan.relation;
+
         if (existing) {
           if (
             !materialParity(existing, {
@@ -563,6 +695,7 @@ export async function materializeActiveCycleWork(input: {
               confidence,
               blocking,
               recommendedOptionRef,
+              workRecommendationRelation: workRecommendationRelation ?? null,
             })
           ) {
             throw new ActiveCycleWorkAtomicFailure(
@@ -586,8 +719,11 @@ export async function materializeActiveCycleWork(input: {
                   cycleInstanceId: facts.activeCycleInstanceId,
                   turnCorrelationId: facts.turnCorrelationId,
                   producedAt: input.producedAt,
-                  index,
+                  index: identityIndex,
                 }),
+            workRecommendationRelation: existing.workRecommendationRelation
+              ? structuredClone(existing.workRecommendationRelation)
+              : undefined,
             reuse: true,
           });
           continue;
@@ -613,8 +749,9 @@ export async function materializeActiveCycleWork(input: {
             cycleInstanceId: facts.activeCycleInstanceId,
             turnCorrelationId: facts.turnCorrelationId,
             producedAt: input.producedAt,
-            index,
+            index: identityIndex,
           }),
+          workRecommendationRelation,
           reuse: false,
         });
       }
@@ -635,6 +772,7 @@ export async function materializeActiveCycleWork(input: {
             blocking: p.blocking,
             relatedObjects: p.relatedObjects,
             provenance: p.provenance,
+            workRecommendationRelation: p.workRecommendationRelation,
           })),
         });
         if (!write.ok) {
@@ -702,6 +840,9 @@ export async function materializeActiveCycleWork(input: {
       relatedObjects: p.relatedObjects,
       blocking: p.blocking,
       provenance: p.provenance,
+      workRecommendationRelation: p.workRecommendationRelation
+        ? structuredClone(p.workRecommendationRelation)
+        : undefined,
     }));

     return {

```

### deriveWorkRecommendations.ts diff vs HEAD

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
index 9a7c8341..44cac7e5 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
@@ -23,6 +23,20 @@ const CYCLE_ID_PREFIX = "cycinst:";
 const CYCLE_INSTANCE_PREFIXES = ["cycinst:", "cycle:", "cyc:"] as const;
 const TRAJECTORY_OPTION_PREFIX = "opt:trajectory:";

+export type WorkRecommendationRelationApplicability =
+  | "applicable"
+  | "not_applicable"
+  | "unknown";
+
+export type WorkRecommendationRelationProjection = {
+  readonly kind: "CONTRADICTORY" | "DISTINCT_RELATED";
+  readonly targetEpistemicItemId: string;
+  readonly judgmentOrigin: "nora_structured_candidate";
+  readonly authority: "none";
+  /** Derived at read time — never persisted as CURRENT/STALE. */
+  readonly applicability: WorkRecommendationRelationApplicability;
+};
+
 export type WorkRecommendationItemLike = {
   readonly type: string;
   readonly status: string;
@@ -33,6 +47,12 @@ export type WorkRecommendationItemLike = {
   readonly relatedObjects?: readonly string[] | null;
   readonly lifecycleRecommendation?: unknown;
   readonly supersedes?: string | null;
+  readonly workRecommendationRelation?: {
+    readonly kind: "CONTRADICTORY" | "DISTINCT_RELATED";
+    readonly targetEpistemicItemId: string;
+    readonly judgmentOrigin: "nora_structured_candidate";
+    readonly authority: "none";
+  } | null;
 };

 export type WorkRecommendationProjectionCard = {
@@ -48,6 +68,8 @@ export type WorkRecommendationProjectionCard = {
   readonly dispositionDecisionId: string | null;
   /** ACW identity when this card is (or is linked to) an ACW Recommendation. */
   readonly workRecommendationEpistemicItemId: string | null;
+  /** Option A durable typed relation on source — optional / absent on legacy. */
+  readonly workRecommendationRelation: WorkRecommendationRelationProjection | null;
 };

 export function isLifecycleRecommendationItem(
@@ -223,6 +245,89 @@ function dispositionDecisionIdFromItems(
   return null;
 }

+/**
+ * True when `item` is an open ACW Work Recommendation suitable as a typed
+ * relation target (active, non-lifecycle, undisposed, cycle-bound).
+ */
+export function isOpenWorkRecommendationRelationTarget(input: {
+  readonly item: WorkRecommendationItemLike;
+  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
+  readonly cycleInstanceId: string;
+}): boolean {
+  const { item, allItems, cycleInstanceId } = input;
+  if (!isActiveCycleWorkRecommendationItem(item)) return false;
+  if (item.status !== "active") return false;
+  if (item.lifecycleRecommendation != null) return false;
+  if (dispositionDecisionIdFromItems(item, allItems)) return false;
+  if (
+    !workRecommendationBelongsToCycle(
+      item,
+      cycleInstanceId,
+      cycleInstanceId,
+    )
+  ) {
+    return false;
+  }
+  return true;
+}
+
+/**
+ * Derive relation applicability at read time (Identity ≠ currentness).
+ * Durable envelope remains; applicability is not persisted.
+ */
+export function deriveWorkRecommendationRelationApplicability(input: {
+  readonly relation: NonNullable<
+    WorkRecommendationItemLike["workRecommendationRelation"]
+  >;
+  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
+  readonly cycleInstanceId: string | null;
+  readonly contextAvailable?: boolean;
+}): WorkRecommendationRelationApplicability {
+  if (input.contextAvailable === false) return "unknown";
+  const targetId = input.relation.targetEpistemicItemId.trim();
+  if (!targetId) return "unknown";
+  const target = input.allItems.find((i) => i.epistemicItemId === targetId);
+  if (!target) return "unknown";
+  if (!input.cycleInstanceId) return "unknown";
+  if (
+    isOpenWorkRecommendationRelationTarget({
+      item: target,
+      allItems: input.allItems,
+      cycleInstanceId: input.cycleInstanceId,
+    })
+  ) {
+    return "applicable";
+  }
+  return "not_applicable";
+}
+
+function projectWorkRecommendationRelation(
+  item: WorkRecommendationItemLike,
+  all: ReadonlyArray<WorkRecommendationItemLike>,
+  cycleInstanceId: string,
+): WorkRecommendationRelationProjection | null {
+  const rel = item.workRecommendationRelation;
+  if (!rel) return null;
+  if (rel.kind !== "CONTRADICTORY" && rel.kind !== "DISTINCT_RELATED") {
+    return null;
+  }
+  if (rel.judgmentOrigin !== "nora_structured_candidate") return null;
+  if (rel.authority !== "none") return null;
+  const targetId = rel.targetEpistemicItemId?.trim();
+  if (!targetId) return null;
+  return {
+    kind: rel.kind,
+    targetEpistemicItemId: targetId,
+    judgmentOrigin: "nora_structured_candidate",
+    authority: "none",
+    applicability: deriveWorkRecommendationRelationApplicability({
+      relation: rel,
+      allItems: all,
+      cycleInstanceId,
+    }),
+  };
+}
+
 /**
  * Does this work Recommendation belong to the cycle being inspected?
  * Prefer explicit relatedObjects cycle binding. Legacy optset Recommendations
@@ -307,6 +412,11 @@ export function projectCycleWorkRecommendations(input: {
       createdAt: item.createdAt ?? "",
       dispositionDecisionId: dispositionDecisionIdFromItems(item, input.items),
       workRecommendationEpistemicItemId: acwId,
+      workRecommendationRelation: projectWorkRecommendationRelation(
+        item,
+        input.items,
+        cycleId,
+      ),
     });
   }
   return cards.sort((a, b) => {

```

### studioCognitiveContext.ts diff vs HEAD

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index f3b01c17..e9a0fd71 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -22,6 +22,8 @@ import {
   obligationPolicySubjectFor,
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
   getCycleTypeById,
+  projectCycleWorkRecommendations,
+  type TrajectoryDecisionSupportState,
 } from "@/lib/oa/cycle";
 import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
 import {
@@ -64,6 +66,9 @@ export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
   maxEvidence: 8,
   maxReviewBundles: 4,
   maxActiveCycleWorkItems: 12,
+  /** Open Work Recommendations projected for Nora Option B referencing. */
+  maxOpenWorkRecommendations: 12,
+  workRecommendationStatementChars: 240,
   decisionSubjectChars: 160,
   decisionOptionChars: 120,
   evidenceLabelChars: 120,
@@ -74,6 +79,41 @@ export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
 });

 export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
+
+/**
+ * P6-HQA-02 REC-01 Option B — coverage of open Work Recommendations projected
+ * to Nora. Never invent COMPLETE; empty successful read ≠ UNAVAILABLE.
+ */
+export type WorkRecommendationsContextCoverage =
+  | "COMPLETE"
+  | "PARTIAL"
+  | "UNAVAILABLE";
+
+export type StudioOpenWorkRecommendationRelationProjection = {
+  readonly kind: "CONTRADICTORY" | "DISTINCT_RELATED";
+  readonly targetEpistemicItemId: string;
+  readonly judgmentOrigin: "nora_structured_candidate";
+  readonly authority: "none";
+  /** Derived applicability — durable ≠ CURRENT. */
+  readonly applicability: "applicable" | "not_applicable" | "unknown";
+};
+
+export type StudioOpenWorkRecommendationProjection = {
+  readonly epistemicItemId: string;
+  readonly statement: string;
+  readonly status: string;
+  readonly cycleInstanceId: string | null;
+  readonly dispositionDecisionId: string | null;
+  /** Explicit family — never Lifecycle / Trajectory. */
+  readonly family: "Work";
+  /** Option A durable typed relation on source — absent on legacy. */
+  readonly workRecommendationRelation: StudioOpenWorkRecommendationRelationProjection | null;
+};
+
+export type StudioWorkRecommendationsContextProjection = {
+  readonly coverage: WorkRecommendationsContextCoverage;
+  readonly items: readonly StudioOpenWorkRecommendationProjection[];
+};
 export type TrajectoryPresenceState =
   | "PRESENT"
   | "ABSENT"
@@ -272,6 +312,12 @@ export type StudioCognitiveContext = {
     readonly state: PresenceState;
     readonly items: readonly StudioActiveCycleWorkProjection[];
   };
+  /**
+   * P6-HQA-02 REC-01 Option B — open Work Recommendations Nora may reference.
+   * Projection for cognition only — not Truth C. Studio re-resolves authoritatively
+   * at materialization time.
+   */
+  readonly workRecommendationsContext: StudioWorkRecommendationsContextProjection;
   readonly trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection;
   readonly decisions: {
     readonly state: PresenceState;
@@ -541,6 +587,10 @@ export async function composeStudioCognitiveContext(input: {
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
         }),
+        workRecommendationsContext: Object.freeze({
+          coverage: "UNAVAILABLE" as const,
+          items: Object.freeze([]),
+        }),
         trajectoryDecisionSupport: Object.freeze({
           state: "UNAVAILABLE" as const,
           optionRefs: Object.freeze([]),
@@ -656,6 +706,11 @@ export async function composeStudioCognitiveContext(input: {

   let acwState: PresenceState = "NONE";
   let acwItems: StudioActiveCycleWorkProjection[] = [];
+  let workRecommendationsContext: StudioWorkRecommendationsContextProjection =
+    Object.freeze({
+      coverage: activeCycle ? ("COMPLETE" as const) : ("UNAVAILABLE" as const),
+      items: Object.freeze([] as StudioOpenWorkRecommendationProjection[]),
+    });
   if (activeCycle) {
     try {
       const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
@@ -690,8 +745,54 @@ export async function composeStudioCognitiveContext(input: {
           .reverse()
           .map((item) => projectActiveCycleWorkItem(item, hdCutoff));
       }
+
+      // P6-HQA-02 REC-01 Option B — open Work Recommendations for referencing.
+      // Reuses the same Product read; COMPLETE only when the full open set fits.
+      const tdsStateForWork: TrajectoryDecisionSupportState =
+        input.trajectoryDecisionSupport?.state === "PRESENT"
+          ? "PRESENT"
+          : input.trajectoryDecisionSupport?.state === "UNAVAILABLE"
+            ? "UNAVAILABLE"
+            : "NONE";
+      const wrCards = projectCycleWorkRecommendations({
+        items: epistemic,
+        cycleInstanceId: activeCycle.cycleInstanceId,
+        fallbackCycleInstanceId: activeCycle.cycleInstanceId,
+        trajectoryDecisionSupportState: tdsStateForWork,
+      });
+      const openWr = wrCards.filter(
+        (c) => c.status === "active" && !c.dispositionDecisionId,
+      );
+      const truncated =
+        openWr.length > budget.maxOpenWorkRecommendations;
+      const selected = openWr.slice(0, budget.maxOpenWorkRecommendations);
+      workRecommendationsContext = Object.freeze({
+        coverage: truncated ? ("PARTIAL" as const) : ("COMPLETE" as const),
+        items: Object.freeze(
+          selected.map((c) =>
+            Object.freeze({
+              epistemicItemId: c.epistemicItemId,
+              statement: clip(
+                c.statement,
+                budget.workRecommendationStatementChars,
+              ),
+              status: c.status,
+              cycleInstanceId: c.cycleInstanceId,
+              dispositionDecisionId: c.dispositionDecisionId,
+              family: "Work" as const,
+              workRecommendationRelation: c.workRecommendationRelation
+                ? Object.freeze({ ...c.workRecommendationRelation })
+                : null,
+            }),
+          ),
+        ),
+      });
     } catch {
       acwState = "UNAVAILABLE";
+      workRecommendationsContext = Object.freeze({
+        coverage: "UNAVAILABLE" as const,
+        items: Object.freeze([]),
+      });
     }
   }

@@ -843,7 +944,7 @@ export async function composeStudioCognitiveContext(input: {
     }
   }

-  let trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
+  const trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
     input.trajectoryDecisionSupport ??
     Object.freeze({
       state: "NONE" as const,
@@ -863,6 +964,7 @@ export async function composeStudioCognitiveContext(input: {
         state: acwState,
         items: Object.freeze(acwItems),
       }),
+      workRecommendationsContext,
       trajectoryDecisionSupport,
       decisions: Object.freeze({
         state: decisionsState,
@@ -1045,6 +1147,54 @@ export function buildStudioCognitivePromptSections(
         "Options trajectoire (ProjectTrajectory) : non ouvertes pour ce travail — les Work Recommendations se disposent en chat (accepter / amender / refuser / reporter) ; ne pas proposer d'optionRefs trajectoire.",
       );
     }
+    lines.push("");
+    lines.push(
+      "=== Work Recommendations durables ouvertes (famille Work — ≠ Lifecycle ≠ Trajectory) ===",
+    );
+    const wrCtx = ctx.workRecommendationsContext;
+    lines.push(`coverage=${wrCtx.coverage}`);
+    if (wrCtx.coverage === "UNAVAILABLE") {
+      lines.push(
+        "Contexte Work Recommendations : UNAVAILABLE — ne pas inventer d'ids ; relationKind=UNCERTAIN ou conversationGuidance ; jamais NEW par défaut.",
+      );
+    } else if (wrCtx.items.length === 0) {
+      lines.push(
+        "Aucune Work Recommendation ouverte dans le périmètre couvert (liste vide ≠ licence d'invention).",
+      );
+      if (wrCtx.coverage === "PARTIAL") {
+        lines.push(
+          "coverage=PARTIAL — ne pas conclure NEW uniquement parce qu'aucune correspondance n'apparaît ici.",
+        );
+      }
+    } else {
+      if (wrCtx.coverage === "PARTIAL") {
+        lines.push(
+          "coverage=PARTIAL — vue tronquée ; ne pas conclure NEW uniquement par absence de correspondance ici.",
+        );
+      }
+      lines.push(
+        "Ids autorisés pour relatedRecommendationRef (copier EXACTEMENT ; ne jamais inventer) :",
+      );
+      for (const w of wrCtx.items) {
+        const disposition =
+          w.dispositionDecisionId != null
+            ? ` disposition=${w.dispositionDecisionId}`
+            : " disposition=none";
+        const cycle =
+          w.cycleInstanceId != null ? ` cycle=${w.cycleInstanceId}` : "";
+        const rel = w.workRecommendationRelation;
+        const relation =
+          rel != null
+            ? ` relation=${rel.kind}->${rel.targetEpistemicItemId} origin=${rel.judgmentOrigin} authority=${rel.authority} applicability=${rel.applicability}`
+            : " relation=none";
+        lines.push(
+          `• id=${w.epistemicItemId} family=Work status=${w.status}${cycle}${disposition}${relation} — ${w.statement}`,
+        );
+      }
+      lines.push(
+        "relation=* est une relation candidate durable admise par Studio (≠ HumanDecision ; ≠ contradiction tranchée par le Pilote).",
+      );
+    }
     if (ctx.reservationFocusSection) {
       lines.push("");
       lines.push(ctx.reservationFocusSection);

```

### SQLite reload test suite (appended)

```typescript
describe("P6-HQA-02 REC-01 Option A durable typed relation (SQLite reload)", () => {
  function wrRec(
    statement: string,
    opts: {
      relationKind?: NoraActiveCycleWorkItem["relationKind"];
      relatedRecommendationRef?: string | null;
      trackingRationale?: string;
    } = {},
  ): NoraActiveCycleWorkItem {
    return {
      type: "Recommendation",
      statement,
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
      trackingRationale:
        opts.trackingRationale ??
        "Orientation de travail distincte nécessitant un suivi propre hors tour.",
      relationKind: opts.relationKind ?? "NEW",
      relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
    };
  }

  it("CONTRADICTORY relation survives SQLite close/reopen with target unchanged", async () => {
    const dbPath = tempDbPath("rec01-optA-contradictory.sqlite");
    const s = await seedStarted("rec01-opta-c", { dbPath });
    const cycleId = s.cycle.cycleInstanceId;

    const rec001Payload = [
      wrRec(
        "Prioriser l'analyse du suivi d'avancement avant la planification.",
      ),
    ];
    const filter1 = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: rec001Payload,
      existingItems: [],
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(filter1.items).toHaveLength(1);

    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      "turn:logical:rec01-opta-001",
    );
    const mat1 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts1, filter1.items),
      itemSourceIndexes: filter1.sourceIndexes,
    });
    expect(mat1.ok).toBe(true);
    if (!mat1.ok) throw new Error(mat1.reason);
    expect(mat1.createdIds).toHaveLength(1);
    const rec001Id = mat1.createdIds[0]!;
    const after001 = await s.oa.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const rec001 = after001.find((e) => e.epistemicItemId === rec001Id);
    expect(rec001?.type).toBe("Recommendation");
    expect(rec001?.workRecommendationRelation).toBeUndefined();
    expect(rec001?.status).toBe("active");
    const rec001Snapshot = JSON.stringify(rec001);

    const rec002Payload = [
      wrRec("Prioriser la planification avant le suivi d'avancement.", {
        relationKind: "CONTRADICTORY",
        relatedRecommendationRef: rec001Id,
        trackingRationale:
          "Contradiction candidate sur l'ordre de priorité suivi/planification.",
      }),
    ];
    const filter2 = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: rec002Payload,
      existingItems: after001,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(filter2.items).toHaveLength(1);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      "turn:logical:rec01-opta-002",
    );
    const mat2 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts2, filter2.items),
      itemSourceIndexes: filter2.sourceIndexes,
    });
    expect(mat2.ok).toBe(true);
    if (!mat2.ok) throw new Error(mat2.reason);
    expect(mat2.createdIds).toHaveLength(1);
    const rec002Id = mat2.createdIds[0]!;

    const beforeClose = await s.oa.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const rec002Before = beforeClose.find((e) => e.epistemicItemId === rec002Id);
    expect(rec002Before?.workRecommendationRelation).toEqual({
      kind: "CONTRADICTORY",
      targetEpistemicItemId: rec001Id,
      judgmentOrigin: "nora_structured_candidate",
      authority: "none",
    });
    const rec001Before = beforeClose.find((e) => e.epistemicItemId === rec001Id);
    expect(JSON.stringify(rec001Before)).toBe(rec001Snapshot);
    expect(rec001Before?.status).toBe("active");
    expect(rec001Before?.supersedes).toBeUndefined();

    const hdBefore = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );

    // Close persistence handles and reopen on the same SQLite file.
    const reopened = await reopenRuntime("rec01-opta-c", dbPath);
    const afterReload = await reopened.oa!.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const rec002 = afterReload.find((e) => e.epistemicItemId === rec002Id);
    const rec001Reload = afterReload.find((e) => e.epistemicItemId === rec001Id);
    expect(rec002).toBeTruthy();
    expect(rec002!.type).toBe("Recommendation");
    expect(rec002!.source).toBe(ACTIVE_CYCLE_WORK_SOURCE);
    expect(rec002!.workRecommendationRelation).toEqual({
      kind: "CONTRADICTORY",
      targetEpistemicItemId: rec001Id,
      judgmentOrigin: "nora_structured_candidate",
      authority: "none",
    });
    expect(rec002!.provenance).toBeTruthy();
    expect(rec001Reload?.epistemicItemId).toBe(rec001Id);
    expect(rec001Reload?.status).toBe("active");
    expect(JSON.stringify(rec001Reload)).toBe(rec001Snapshot);

    const hdAfter = await reopened.oa!.decisionServices.decisions.listByProject(
      s.projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);

    const dto = await projectDtoFromOa(reopened.oa!, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: reopened.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const projected = composed.context.workRecommendationsContext.items.find(
      (i) => i.epistemicItemId === rec002Id,
    );
    expect(projected?.workRecommendationRelation).toEqual({
      kind: "CONTRADICTORY",
      targetEpistemicItemId: rec001Id,
      judgmentOrigin: "nora_structured_candidate",
      authority: "none",
      applicability: "applicable",
    });
    const prompt = buildStudioCognitivePromptSections(composed.context).join(
      "\n",
    );
    expect(prompt).toContain(`relation=CONTRADICTORY->${rec001Id}`);
    expect(prompt).toMatch(/≠ HumanDecision/i);
  });

  it("DISTINCT_RELATED may mint WR without durable typed relation envelope", async () => {
    const s = await seedStarted("rec01-opta-dr");
    const cycleId = s.cycle.cycleInstanceId;
    const facts0 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      "turn:logical:rec01-opta-dr-0",
    );
    const mat0 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts0, [
        wrRec("Prioriser le suivi avant la planification."),
      ]),
      itemSourceIndexes: [0],
    });
    expect(mat0.ok).toBe(true);
    if (!mat0.ok) throw new Error(mat0.reason);
    const openId = mat0.createdIds[0]!;

    const after0 = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const filter = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        wrRec("Documenter les responsabilités de suivi en parallèle.", {
          relationKind: "DISTINCT_RELATED",
          relatedRecommendationRef: openId,
          trackingRationale:
            "Orientation liée mais distincte — suivi propre en parallèle.",
        }),
      ],
      existingItems: after0,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(filter.items).toHaveLength(1);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      "turn:logical:rec01-opta-dr-1",
    );
    const mat = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts, filter.items),
      itemSourceIndexes: filter.sourceIndexes,
    });
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.reason);
    const created = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).find((e) => e.epistemicItemId === mat.createdIds[0]!);
    expect(created?.type).toBe("Recommendation");
    // Proportionality: DISTINCT_RELATED mint ≠ systematic durable typed relation.
    expect(created?.workRecommendationRelation).toBeUndefined();
  });

  it("legacy EpistemicItem without workRecommendationRelation remains readable", async () => {
    const s = await seedStarted("rec01-opta-legacy");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "turn:logical:rec01-opta-legacy",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.reason);
    const items = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const obs = items.find((e) => e.epistemicItemId === mat.createdIds[0]!);
    expect(obs?.workRecommendationRelation).toBeUndefined();
    expect(obs?.type).toBe("Observation");
  });

  it("same ACW identity with different relationKind fails closed (no silent mutation)", async () => {
    const s = await seedStarted("rec01-opta-parity");
    const cycleId = s.cycle.cycleInstanceId;
    const facts0 = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      "turn:logical:rec01-opta-parity-0",
    );
    const mat0 = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, facts0, [
        wrRec("Prioriser le suivi avant la planification."),
      ]),
      itemSourceIndexes: [0],
    });
    expect(mat0.ok).toBe(true);
    if (!mat0.ok) throw new Error(mat0.reason);
    const openId = mat0.createdIds[0]!;

    const statement =
      "Prioriser la planification avant le suivi d'avancement.";
    const turnCorrelationId = "turn:logical:rec01-opta-parity-same";
    const after0 = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const filterA = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        wrRec(statement, {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: openId,
          trackingRationale:
            "Contradiction candidate sur l'ordre de priorité suivi/planification.",
        }),
      ],
      existingItems: after0,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    const factsA = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      turnCorrelationId,
    );
    const matA = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, factsA, filterA.items),
      itemSourceIndexes: filterA.sourceIndexes,
    });
    expect(matA.ok).toBe(true);
    if (!matA.ok) throw new Error(matA.reason);

    // Same logical turn identity (same statement/index/turn) but NEW instead of CONTRADICTORY.
    const factsB = await materializeFacts(
      s.oa,
      s.projectId,
      cycleId,
      turnCorrelationId,
    );
    const matB = await materializeActiveCycleWork({
      ...acwMaterializeInput(s.oa, factsB, [
        wrRec(statement, { relationKind: "NEW" }),
      ]),
      itemSourceIndexes: filterA.sourceIndexes,
    });
    expect(matB.ok).toBe(false);
    if (matB.ok) throw new Error("expected idem conflict");
    expect(matB.code).toBe("ACTIVE_CYCLE_WORK_IDEM_CONFLICT");
  });
});

```

## 27. Réserves

1. DISTINCT_RELATED durable relation not persisted this increment (proportionality limit documented).
2. trackingRationale remains transient (no snapshot).
3. REAL Nora contradiction quality unevaluated.
4. REC-01 not closed (T3) pending ChatGPT review + Morris integration GO + HQA replay.
5. Journal UI not adapted (Nora projection sufficient for this proof).
6. Local candidate still uncommitted vs main.

## 28. Dette et exit

Debt: DISTINCT_RELATED material-necessity rule; rationale auditability; REAL HQA.
Exit: ChatGPT review → Morris integration GO → HQA replay → continue P6.
T3 maintained.

## 29. Décisions Morris restantes

1. Integration / PR GO (distinct)
2. Whether DISTINCT_RELATED needs a future structured material-necessity signal
3. Optional Journal disclosure of durable relations
4. Human QA authorization for REAL paths

## 30. Verdict

**LOCAL OPTION A DURABLE RELATION CANDIDATE — READY FOR CHATGPT REVIEW**

Conditions met: Option A per Morris; CONTRADICTORY persisted atomically; SQLite reload reconstruction proven; Product controls preserved; DISTINCT_RELATED not systematically persisted; history intact; materialParity/idempotence PASS; Review Pack FULL; Handoff L3 pending verify after publish.

Not: PR readiness; project commit/push; P6 GLOBAL PASS; v3 ADOPTED; REC-01 closed.

---

## INSTRUCTION CHATGPT

Lire depuis `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier cycle, branche, HEAD/base, GO Morris, architecture Option A, contrat, fichiers, code, tests, relation durable, SQLite/reload, currentness, historique, réserves, décisions, verdict.
