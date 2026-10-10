# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — BOUNDED COGNITIVE TRUST COMPLETION
# Local Bounded Prospective Correction (template v2.6 §7.5)

## 1. Horodatage

- Generated: 2026-10-10T20:13:38+02:00
- Cycle: P6-HQA-02 / REC-01 — Option B Bounded Cognitive Trust Completion
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Milestone: P6 — Global Integrated Product QA / Phase 5 Human QA
- Prior handoff (CP02): commit `7f434bc06c208707558343e51515422aa6e96737` blob `42baf193c6295549e7835d3cc9eacf365992f5a5`
- ChatGPT prior verdict: LOCAL CORRECTIVE CANDIDATE — PARTIAL / MORRIS DECISION REQUIRED
- Morris new decision consumed: bounded cognitive trust toward Nora (no product-anchor pseudo-proof)

## 2. Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branch | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| HEAD == origin/main base | YES (`8ed61737…`) |
| Staged | empty |
| Candidate preserved | YES — prior Option B / CP02 local work intact; this cycle adapts qualify + prompt + tests |
| Destructive git | NONE (no reset/clean/stash/rebase/cherry-pick) |
| Project commit/push/PR | NONE |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
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
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 1647 ++++++++++++++++++--
 .../corrProof06.artifactObligation.d0.test.ts      |    4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   10 +-
 .../activeCycleCognitiveWork.d0.test.ts            |  135 ++
 .../noraConversationalInitiative.d0.test.ts        |    3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |    9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |    6 +
 .../studioCognitiveContext.test.ts                 |    8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   21 +
 .../project-assistant/f2/studioCognitiveContext.ts |  130 +-
 .../materializeActiveCycleWork.ts                  |   41 +-
 .../features/project-assistant/orchestrateTurn.ts  |   46 +-
 .../noraProductTurnOutputType.ts                   |   94 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   12 +
 15 files changed, 2025 insertions(+), 151 deletions(-)
```

### git diff --cached --stat

```
(empty)
```

### git worktree list (excerpt — product WT confirmed)

```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-codex-pilot                                                                                                                                                                                                                                            ec7f397a [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-doc-od04-i01-truth                                                                                                                                                                                                                                     299cb617 [docs/sfia-studio-nora-od04-i01-boundary-truth-sync]
/Users/morris/Projects/sfia-gcec-b-commit-target-binding-c481610c                                                                                                                                                                                                                  11a43d3d [delivery/sfia-studio-gcec-b-commit-target-binding-alignment]
/Users/morris/Projects/sfia-gcec-c-remote-push-auth-env-11a43d3d                                                                                                                                                                                                                   ff267fdf [delivery/sfia-studio-gcec-c-remote-push-auth-env]
/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf                                                                                                                                                                                                                f4210388 [delivery/sfia-studio-gcec-d-ephemeral-secret-bridge]
/Users/morris/Projects/sfia-gcec-d-post-merge-docs-76e2d786                                                                                                                                                                                                                        e90249b2 [docs/sfia-studio-gcec-d-post-merge-truth-sync]
/Users/morris/Projects/sfia-gcec-d-remote-github-env-parity-ff267fdf                                                                                                                                                                                                               ff267fdf [delivery/sfia-studio-gcec-d-remote-github-env-parity]
…
```

**Collision:** NONE — candidate continues on expected branch/worktree.

## 3. Sources consultées

### Gouvernance
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`

### Produit
- `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md`
- `projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md`
- `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`

### Doctrine v3
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`

### Processus
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Operating Model / guardrails v2.6 applicables

### Prior Review Handoff
- `sfia/review-handoff` @ `7f434bc0` — Option B Corrective Pass 02 FULL pack

### Code inspected (relation continuity / currentness)
- `EpistemicItem` (`relatedObjects`, `supersedes`, provenance) — `lib/oa/cycle/domain/types.ts`
- LR doctrine: *no relatedObjects machine protocol* — `lifecycleRecommendation/types.ts`
- `materializeActiveCycleWork.ts` relatedObjects construction (project/cycle/trajectory/optionRef only)
- `trajectoryRecommendationCurrentness.ts`, `lifecycleRecommendation/currentness.ts`, `basisFingerprint.ts`, `resolveCanonicalBasis.ts` — **not transferable as WR currentness engine**

### CKC Cycle 8
- Fallback synthétique (aucun CKC détaillé applicable autorisé inventé). CKC sans autorité d'exécution.

## 4. GO Morris

**GO actuel:** poursuivre la complétion locale bornée de REC-01 avec réutilisation de l'architecture actuelle.

**Décision Morris consommée (nouvelle):** confiance cognitive bornée envers Nora.

Studio may materialize a Work Recommendation from Nora's structured semantic judgment when:
- applicable Product controls are satisfied;
- required context is available;
- references are valid;
- authority and idempotence rules are respected;
- no identified material uncertainty remains.

This does **not** mean blind trust, materializing every suggestion, Nora decision authority, Human QA waiver, or runtime v3 adoption.

**Already validated:** Option B structured contract (`trackingRationale`, `relationKind`, `relatedRecommendationRef`, coverage COMPLETE/PARTIAL/UNAVAILABLE); material uncertainty forbids automatic materialization.

**Forbidden (respected):** new recommendation architecture; new cognitive engine; new lexical classifier; new AI provider; systematic second AI call; migration/new storage; structural Product schema change; historical mutation; project commit/push/PR/merge; doctrine modification; runtime v3 promotion.

## 5. Qualification SFIA

| Field | Value |
|-------|-------|
| Cycle type | 8 — Delivery / implementation |
| Profile | Critical |
| Typologie v2.4 | EVOL — corrective prospective |
| Capacités v3 | V3-F05, V3-F04, V3-F02, V3-F14 |
| Blocs activés | Convergence Studio; Delivery Product; Contrat cognitif; Validation épistémique; Autorité/currentness; QA/non-régression; Fake/Real; Review Pack + Handoff |
| Blocs désactivés | UI/Figma refactor; new AI engine; data migration; deploy; FinOps/GreenOps; advanced automation |
| QA level | Critical — targeted deterministic proofs + explicit REAL reserves |

## 6. Convergence Pre-check

| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED / ACTIVE ON MAIN |
| Roadmap P6 | applicable |
| C1 | VALIDATED |
| P2 | VALIDATED |
| P6 Human QA | IN PROGRESS |
| P6 GLOBAL PASS | NO |
| Runtime v3 | NON ADOPTED |

**Trajectory link:** REC-01 fiable → ChatGPT re-review → GO intégration Morris distinct → Human QA replay → continue P6.

### Asset classification

| Asset | Disposition |
|-------|-------------|
| conversationGuidance | KEEP |
| activeCycleWork | KEEP / ADAPT minimum |
| Nora Structured Outputs | KEEP |
| studioCognitiveContext | KEEP |
| qualifyProspectiveWorkRecommendationMaterialization | **ADAPT** (bounded trust; remove product-anchor) |
| materializeActiveCycleWork | KEEP / ADAPT minimum (unchanged this cycle) |
| EpistemicItem / Product SQLite | KEEP |
| LPS / Journal | KEEP |
| UX-REC-02 | KEEP |
| REC-02 | RESERVED |

## 7. Contrat Option B initial (état CP02)

Structured Nora fields retained:
- `trackingRationale`
- `relationKind`: NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN
- `relatedRecommendationRef`
- Coverage: COMPLETE | PARTIAL | UNAVAILABLE

CP02 also required `trackingRationaleCitesProductAnchor` (textual citation of cycleInstanceId / epi id / recommendedOptionRef) — **now removed** as pseudo-proof per Morris.

## 8. Politique de confiance cognitive bornée (implémentée)

**Nora responsibility:** produce structured semantic candidate (`relationKind`, `trackingRationale`, `relatedRecommendationRef`).

**Studio responsibility:** Product verification + technical materialization decision under bounded trust.

A Recommendation may become durable when:
1. Nora produced it as structured Recommendation candidate;
2. trackingRationale is present and contract-minimum valid (non-empty, ≥8 chars, not exact statement echo);
3. cycle context coherent;
4. coverage sufficient for the claimed novelty/distinctness (COMPLETE for NEW/DISTINCT/CONTRADICTORY);
5. applicable refs resolved;
6. declared relation admissible under gates;
7. no known Product conflict forbids write;
8. effect remains non-authoritative Recommendation (≠ HumanDecision).

**Explicitly not claimed:** deterministic universal proof of semantic relevance; elimination of Nora mis-classification risk.

## 9. Matrice jugement Nora / contrôle Studio

| Signal / step | Nature | Who | Blocks mint? |
|---------------|--------|-----|--------------|
| Structured Recommendation fields present | Contract | Nora→Studio | YES if missing (`missing_structured_contract`) |
| `trackingRationale` exploitable (non-echo) | Contract-minimum | Studio | YES (`insufficient_tracking_rationale`) |
| Product id citation in rationale | **REMOVED** (pseudo-proof) | — | N/A |
| `relationKind=UNCERTAIN` | Cognitive candidate | Nora; gate Studio | YES (`uncertain_relation`) |
| `relationKind=ALREADY_COVERED` + valid ref | Cognitive + Product ref | Studio | YES abstain (`already_covered`) — no new object |
| `relationKind=NEW/DISTINCT/CONTRADICTORY` | Cognitive candidate | Nora; Studio accepts under trust | Mint if Product gates pass |
| Coverage UNAVAILABLE | Product fact | Studio | YES (`open_context_unavailable`) |
| Coverage PARTIAL | Product fact | Studio | YES for novelty paths (`insufficient_context_coverage`) |
| Invalid / stale related ref | Product fact | Studio | YES (`invalid_related_ref`) |
| Exact open duplicate statement | Mechanical | Studio | YES (`exact_open_duplicate`) — not general semantic equivalence |
| Exact conversationGuidance match | Mechanical | Studio | YES (`conversational_channel_exact`) |
| Distinct/contradictory coexistence | Product write | Studio | Mint allowed; **never** dispose/mutate prior; **never** HD |
| Typed relation after reload | Persistence | — | **NOT reconstructible** (see §12) |

## 10. Pseudo-preuves supprimées

Removed:
- `trackingRationaleCitesProductAnchor` function (deleted)
- suppress reason `missing_product_anchor` (deleted from union)
- export from `lib/oa/cycle/index.ts`
- prompt requirement to cite cycleInstanceId / epi:… / recommendedOptionRef as materiality proof
- tests that required Product id citation for mint

Retained (contract-minimum only, **not** claimed as semantic materiality proof):
- `isExploitableTrackingRationale` (length ≥ 8, not exact statement echo)

Not introduced as replacement:
- intent regex; word score; token count threshold as business proof; similarity score; parallel classifier.

## 11. Contrôles Product conservés

- COMPLETE / PARTIAL / UNAVAILABLE coverage gates
- Open context fail-closed (`openRecommendationsContextAvailable=false`)
- Related ref resolution against Product open WR facts
- ALREADY_COVERED → no new mint
- UNCERTAIN → abstention
- Exact open duplicate
- Exact conversationGuidance channel guard
- Original ACW `sourceIndexes` → `itemSourceIndexes` identity
- Transaction / UoW / LPS path unchanged
- Work vs Lifecycle vs Trajectory separation unchanged
- Historical items never mutated by prospective filter

## 12. Relations et currentness

### Feasibility matrix (A–E)

| Q | Answer |
|---|--------|
| A. Can relation to existing object be kept with existing semantically appropriate mechanism? | **Partial only:** `relatedObjects` can hold generic ids (`projectId`, `cycleInstanceId`, `opt:…`, occasionally `epi:`). It is **not** a typed relationKind carrier. LR doctrine explicitly forbids relatedObjects machine protocol. `supersedes` means replacement — **wrong** for CONTRADICTORY coexistence. |
| B. Does mechanism represent relation nature or only generic link? | Existing carriers = **generic link** at best; cannot honestly encode NEW/DISTINCT_RELATED/CONTRADICTORY. |
| C. Reconstructible after reload? | Typed `relationKind` + `relatedRecommendationRef`: **NO** after materialization (transient Nora signals). Generic project/cycle links on EpistemicItem: YES (pre-existing). |
| D. Inspectable without false Product status? | Mint-time coexistence inspectable as two active Recommendations; claiming durable CONTRADICTORY/DISTINCT Product status would be false. |
| E. Prospective, no historical mutation? | YES for coexistence mint path (proven in tests). |

**Decision this cycle:** do **not** invent persistence / do **not** abuse `relatedObjects` as pseudo-enum storage / do **not** inject relationKind into statement.

**Implemented relation behavior:**
- NEW without ref: mint under COMPLETE + exploitable rationale (bounded trust)
- DISTINCT_RELATED / CONTRADICTORY with valid open ref + COMPLETE: mint coexisting WR; prior unchanged; no auto-disposition; no HumanDecision
- Stale/invalid ref: abstain
- Typed relation continuity after reload: **not claimed** (residual / Morris if durable typed relation required)

### Currentness

Lifecycle / ProjectTrajectory currentness engines are **not** transferred to Work Recommendations. No new Currentness Engine. No CURRENT claim merely because an id exists. Verifiable WR facts remain: projectId, cycleInstanceId, source/family, status, disposition, refs. Recommendation never creates HumanDecision.

## 13. Auditabilité et reconstructibilité

| Information | Durable? | Notes |
|-------------|----------|-------|
| EpistemicItem id / statement / status | YES | Product SQLite |
| projectId / cycleInstanceId in relatedObjects | YES | existing |
| provenance (turnCorrelationId, etc.) | YES | existing |
| `sourceIndexes` identity | YES | preserved |
| `relationKind` | NO (mint-time) | Nora candidate signal |
| `relatedRecommendationRef` | NO (mint-time) | used for gates only |
| `trackingRationale` | NO (not persisted on EpistemicItem) | candidate signal |
| Typed DISTINCT/CONTRADICTORY link | NO | would need Morris structural persistence choice |

Transient signals are therefore **not** presented as reconstructible Product audit facts.

## 14. Correctifs réellement effectués

1. Applied bounded cognitive trust policy in `qualifyProspectiveWorkRecommendationMaterialization.ts`.
2. Removed `trackingRationaleCitesProductAnchor` and `missing_product_anchor`.
3. Updated Nora system prompt section (no Product-id citation requirement; natural-language rationale; Studio decides under bounded trust).
4. Removed obsolete export from `lib/oa/cycle/index.ts`.
5. Rewrote targeted tests for trust policy, coverage, relations (mint-time honesty), residual mis-label risk documentation, sourceIndexes.
6. Updated integrated idempotence fixture to use rationale **without** Product id citation.
7. Did **not** add new persistence for typed relations (documented gap).

## 15. Idempotence et intégrité transactionnelle

Integrated test (filter → materializeActiveCycleWork → Product UoW → LPS → replay):
- PASS — Observation sourceIndex preserved; no double mint; LPS ids stable; historical Recommendation remains; replay suppresses exact open Recommendation.

Controls preserved: IDs stable; no double mint; no LPS duplicates; historical unchanged; Context Seal / sourceIndexes original indexes.

## 16. Historique préservé

- Strictly prospective filter — no backfill, delete, reclassify, status change, implicit supersession, historical provenance mutation, identity change, retroactive LPS mutation, Journal disappearance.
- Human QA historical open WRs remain valid without new fields.
- No migration / second store.

## 17. Tests et non-régressions

| Suite | Result |
|-------|--------|
| `qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts` (20) | **PASS** |
| `p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts` (3) | **PASS** |
| ACW integrated idempotence (bounded trust) | **PASS** |
| `chatFirstWorkRecommendationContinuity.d0.test.ts` (49) | **PASS** |
| `noraConversationalInitiative.d0.test.ts` (28) | **PASS** |
| `pilotNoraStudioSemanticContinuity.d0.test.ts` (15) | **PASS** |
| `pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts` (6) | **PASS** |
| `p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx` (1) | **PASS** |
| `p6.ux.recommendationContinuity.ui.test.tsx` (6) | **PASS** |
| `noraLifecycleRecommendationContinuity.d0.test.ts` (26) | **PASS** |
| `tsc --noEmit` | **PASS** |
| ESLint targeted changed files | **PASS** |
| `git diff --check` | **PASS** |
| Historical tests not re-run this cycle | **NOT RUN** (explicit) |

Relation reload reconstructibility of typed relationKind: **NOT CLAIMED** (no PASS asserted).

## 18. Fake / Real Qualification

| Item | Value |
|------|-------|
| Applicable | YES |
| External boundary | Nora / OpenAI provider |
| Entry | DETERMINISTIC PROVEN AT CORRECTED SCOPE (this cycle) under ChatGPT re-review reserves |
| Fake | controlled structured fixtures |
| REAL | real Nora responses in SFIA Studio (not run this cycle) |
| Known deltas | semantic classification quality; guidance vs Recommendation confusion; paraphrased equivalents; contradictory relations; trackingRationale variability; multi-turn context |
| Expected level | deterministic proof of corrected invariants |
| Not claimed | REAL BOUNDARY PROVEN; END-TO-END REAL PROVEN; P6 GLOBAL PASS; Runtime v3 ADOPTED |
| Next proof | Human QA on representative paths under campaign authorization |
| Note | DETERMINISTIC PROVEN ≠ READY FOR REAL |

## 19. Fichiers créés et modifiés

### Modified this cycle (bounded trust completion)
- `projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` (rewrite of CP02 file — untracked vs HEAD)
- `projects/sfia-studio/app/lib/oa/cycle/index.ts` (drop `trackingRationaleCitesProductAnchor` export)
- `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts` (prompt policy)
- `projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts` (rewrite)
- `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts` (idempotence rationale without Product ids)

### Candidate retained from prior REC-01 / Option B / CP02 (not re-architected this cycle)
- `noraProductTurnOutputType.ts`, `orchestrateTurn.ts`, `materializeActiveCycleWork.ts`, `studioCognitiveContext.ts`, JournalSurface UX-REC-02, related tests, etc.

### Created files this campaign (still untracked vs HEAD)
- qualify module + qualify tests + optionB context test + UX-REC-02 UI test

## 20. Contenu complet des fichiers créés / réécrits

### `qualifyProspectiveWorkRecommendationMaterialization.ts`

```typescript
/**
 * P6-HQA-02 / REC-01 — Bounded Cognitive Trust Completion.
 *
 * Prospective Work Recommendation materialization (Studio authority):
 *   Nora structured Recommendation candidate (semantic judgment)
 *   → Product open Work Recommendation facts + coverage
 *   → reference resolution + mechanical Product guards
 *   → materialize | abstain
 *
 * Bounded cognitive trust (Morris):
 * Studio may accept Nora's structured semantic candidate when Product controls
 * pass and no identified material uncertainty remains. Acceptance is neither a
 * HumanDecision nor deterministic proof of semantic exactness.
 *
 * Explicitly NOT required:
 * - trackingRationale textual citation of cycleInstanceId / epistemicItemId /
 *   recommendedOptionRef (product-anchor pseudo-proof — removed).
 * - lexical/Jaccard/keyword business classifier.
 * - durable typed relationKind persistence (no existing honest carrier —
 *   relationKind / relatedRecommendationRef are mint-time candidate signals).
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
    // Typed relationKind is NOT persisted as a reconstructible Product fact
    // (no honest carrier without structural Morris decision).
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

/** Re-export card type for context projection consumers. */
export type { WorkRecommendationProjectionCard };
```

### `qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts`

```typescript
/**
 * P6-HQA-02 / REC-01 — Bounded Cognitive Trust Completion.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import Ajv from "ajv";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  isExploitableTrackingRationale,
  qualifyProspectiveWorkRecommendationMaterialization,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { activeCycleWorkEpistemicItemId } from "@/features/project-assistant/materializeActiveCycleWork";
import {
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  isNoraActiveCycleWorkItem,
  type NoraActiveCycleWorkItem,
  type NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const CYCLE = "cycinst:qa-rec01-b";
const RATIONALE =
  "Orientation de travail distincte nécessitant un suivi propre hors tour.";

function rec(
  statement: string,
  opts: {
    recommendedOptionRef?: string | null;
    trackingRationale?: string;
    relationKind?: NoraWorkRecommendationRelationKind;
    relatedRecommendationRef?: string | null;
  } = {},
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: opts.recommendedOptionRef ?? null,
    trackingRationale: opts.trackingRationale ?? RATIONALE,
    relationKind: opts.relationKind ?? "NEW",
    relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
  };
}

function observation(statement: string): NoraActiveCycleWorkItem {
  return {
    type: "Observation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
  };
}

describe("P6-HQA-02 REC-01 Option B structured schema", () => {
  const ajv = new Ajv({ allErrors: true });
  const validateItem = ajv.compile(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);

  it("Recommendation with Option B fields is schema-valid", () => {
    const item = rec(
      "Prioriser l'analyse du suivi d'avancement avant la planification.",
    );
    expect(validateItem(item)).toBe(true);
    expect(isNoraActiveCycleWorkItem(item)).toBe(true);
  });

  it("Recommendation missing Option B fields is rejected", () => {
    const item = {
      type: "Recommendation",
      statement: "Prioriser le suivi.",
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
    };
    expect(validateItem(item)).toBe(false);
    expect(isNoraActiveCycleWorkItem(item)).toBe(false);
  });
});

describe("P6-HQA-02 bounded cognitive trust policy", () => {
  it("NEW + exploitable rationale without Product id citation may mint under COMPLETE", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je recommande de prioriser l'analyse du suivi d'avancement avant celle de la planification.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
    // Product id citation is not required (pseudo-proof removed).
    expect(RATIONALE.includes(CYCLE)).toBe(false);
  });

  it("NEW + empty / too-short rationale does not mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je te propose d'examiner un exemple concret de retard.",
      trackingRationale: "Court.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_tracking_rationale",
    });
  });

  it("exact conversationGuidance match stays non-durable", () => {
    const statement =
      "Je te propose d'examiner un exemple concret de retard.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement,
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      conversationGuidanceStatement: statement,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "conversational_channel_exact",
    });
  });

  it("trackingRationale echo of statement is not exploitable", () => {
    expect(
      isExploitableTrackingRationale(
        "Prioriser le suivi avant la planification.",
        "Prioriser le suivi avant la planification.",
      ),
    ).toBe(false);
  });

  it("documents residual risk: Nora mis-labeling conversational invite as NEW can mint when Product gates pass", () => {
    // Deterministic fixture only — not empirical Nora quality proof.
    // Residual cognitive risk: incorrect NEW classification with exploitable
    // rationale under COMPLETE still materializes (bounded trust).
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Souhaites-tu que je te propose un exemple concret de retard ?",
      trackingRationale:
        "Suivi durable demandé pour transformer cette invitation en orientation de travail.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });
});

describe("P6-HQA-02 coverage continuity", () => {
  it("PARTIAL blocks NEW even when statement differs from all opens", () => {
    const opens = Array.from({ length: 15 }, (_, i) => ({
      epistemicItemId: `epi:acw:open-${i}`,
      statement: `Recommandation ouverte numéro ${i} sur le suivi.`,
    }));
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Documenter les responsabilités de livraison pour le prochain jalon.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: opens.slice(0, 12),
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("UNAVAILABLE blocks mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Structurer le cadrage autour des responsabilités.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "UNAVAILABLE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "open_context_unavailable",
    });
  });

  it("PARTIAL does not block non-Recommendation ACW items", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Documenter les responsabilités de livraison."),
        observation("Observation indépendante du cycle."),
      ],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "PARTIAL",
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
    expect(plan.suppressed[0]!.reason).toBe("insufficient_context_coverage");
  });

  it("ALREADY_COVERED still resolves against Product facts under PARTIAL", () => {
    const openId = "epi:acw:open-followup-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Commencer par analyser le suivi d'avancement.",
      trackingRationale: "Déjà couvert par l'orientation ouverte sur le suivi.",
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        {
          epistemicItemId: openId,
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "already_covered",
    });
  });

  it("fail-closed when open Recommendations context unavailable", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [rec("Documenter les responsabilités de livraison.")],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openRecommendationsContextAvailable: false,
    });
    expect(plan.items).toHaveLength(0);
    expect(plan.suppressed[0]!.reason).toBe("open_context_unavailable");
  });
});

describe("P6-HQA-02 relations (mint-time; typed continuity not durable)", () => {
  const openId = "epi:acw:open-priority-1";
  const openFacts = [
    {
      epistemicItemId: openId,
      statement: "Prioriser le suivi avant la planification.",
    },
  ];

  it("NEW without relatedRecommendationRef may mint under COMPLETE", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("DISTINCT_RELATED with valid ref + COMPLETE may mint coexisting WR", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale:
        "Orientation liée mais distincte — suivi propre requis en parallèle.",
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("CONTRADICTORY is never equivalence; may mint coexisting without disposing prior", () => {
    const existing = Object.freeze([
      Object.freeze({
        type: "Recommendation",
        status: "active",
        epistemicItemId: openId,
        source: "active-cycle-work:nora",
        statement: "Prioriser le suivi avant la planification.",
        createdAt: "2026-10-01T00:00:00.000Z",
        relatedObjects: Object.freeze([CYCLE]),
      }),
    ]);
    const before = JSON.stringify(existing);
    const filtered = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Prioriser la planification avant le suivi.", {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: openId,
          trackingRationale:
            "Contradiction candidate sur l'ordre de priorité suivi/planification.",
        }),
      ],
      existingItems: existing,
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(JSON.stringify(existing)).toBe(before);
    expect(existing[0]!.status).toBe("active");
    expect(existing[0]!.epistemicItemId).toBe(openId);
    expect(filtered.items).toHaveLength(1);
    expect(filtered.items[0]!.type).toBe("Recommendation");
    // Typed relationKind is mint-time only — not claimed reconstructible after materialize.
  });

  it("CONTRADICTORY under PARTIAL abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale:
        "Contradiction candidate sur l'ordre de priorité suivi/planification.",
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("stale related ref abstains without text similarity fallback", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: RATIONALE,
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: "epi:acw:does-not-exist",
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "invalid_related_ref",
    });
  });

  it("UNCERTAIN abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Peut-être prioriser le suivi.",
      trackingRationale: RATIONALE,
      relationKind: "UNCERTAIN",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "uncertain_relation",
    });
  });

  it("exact open duplicate blocks even under COMPLETE + NEW", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser le suivi avant la planification.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "exact_open_duplicate",
    });
  });
});

describe("P6-HQA-02 identity / sourceIndexes", () => {
  const projectId = "proj:qa-rec01-b";
  const turnCorrelationId = "turn:logical:rec01-option-b";

  it("suppressing Recommendation preserves Observation source index", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
      ),
      observation("Les retards reviennent souvent sur ce cycle."),
    ];

    const first = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(first.sourceIndexes).toEqual([0, 1]);

    const idObsFirst = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: first.sourceIndexes[1]!,
      type: "Observation",
      statement: first.items[1]!.statement,
    });
    const idRec = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: first.sourceIndexes[0]!,
      type: "Recommendation",
      statement: first.items[0]!.statement,
    });

    const replay = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [
        {
          type: "Recommendation",
          status: "active",
          epistemicItemId: idRec,
          source: "active-cycle-work:nora",
          statement: items[0]!.statement,
          createdAt: "2026-10-10T00:00:00.000Z",
          relatedObjects: [CYCLE],
        },
      ],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(replay.sourceIndexes).toEqual([1]);
    const idObsReplay = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: replay.sourceIndexes[0]!,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(idObsReplay).toBe(idObsFirst);
  });
});
```

## 21. Sections modifiées / diffs utiles

### `buildProjectSystemPrompt.ts` (diff vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index ea46da10..870d6713 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -349,6 +349,27 @@ function buildActiveCycleWorkOutputSection(
       "recommendedOptionRef est un champ structuré — JAMAIS déduit du texte statement.",
       "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
       "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
+      "=== P6-HQA-02 / REC-01 — Work Recommendation (confiance cognitive bornée) ===",
+      "Une Work Recommendation (type=Recommendation) est exclusivement un objet Product DURABLE.",
+      "Suggestion conversationnelle ordinaire → conversationGuidance SEULEMENT (zéro Recommendation).",
+      "Pour toute Recommendation, renseigne OBLIGATOIREMENT :",
+      "- trackingRationale : pourquoi un suivi durable distinct est nécessaire (≠ simple copie de statement) ;",
+      "  justification métier en langage naturel — NE PAS inventer ni coller d'ids techniques",
+      "  (cycleInstanceId / epi:… / recommendedOptionRef) comme « preuve » ;",
+      "- relationKind : NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN ;",
+      "- relatedRecommendationRef : id=epi:… EXACT d'une Work Recommendation ouverte du contexte, ou null.",
+      "Règles relationKind :",
+      "- ALREADY_COVERED / DISTINCT_RELATED / CONTRADICTORY → relatedRecommendationRef requis (id réel du contexte) ;",
+      "- NEW → relatedRecommendationRef = null en général ; INTERDIT si coverage=PARTIAL ou UNAVAILABLE",
+      "  — préfère UNCERTAIN ou conversationGuidance ;",
+      "- UNCERTAIN → aucune matérialisation automatique ; poursuis en conversation.",
+      "- DISTINCT_RELATED : proposition liée mais potentiellement distincte — Studio peut matérialiser",
+      "  une nouvelle WR coexistant si couverture COMPLETE et contrôles Product ; jamais fusionner.",
+      "- CONTRADICTORY ≠ équivalence ; aucun remplacement / disposition automatique de l'existante ;",
+      "  coexistence durable possible sous contrôle Studio (coverage COMPLETE + refs valides).",
+      "trackingRationale et relationKind=NEW sont un jugement sémantique candidat — PAS une autorisation Product.",
+      "Studio décide de la matérialisation selon la politique de confiance cognitive bornée.",
+      "Ne jamais inventer d'identifiant. Ne jamais créer de HumanDecision pour une recommandation ordinaire.",
     );
     lines.push(
       "=== INTÉGRITÉ ÉPISTÉMIQUE — Reservation ===",
```

### `lib/oa/cycle/index.ts` (diff vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 4a3d74e1..abc24aa1 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -94,6 +94,18 @@ export {
   type TrajectoryDecisionSupportState,
   type WorkRecommendationProjectionCard,
 } from "./application/deriveWorkRecommendations";
+export {
+  filterActiveCycleWorkItemsForProspectiveMaterialization,
+  isExploitableTrackingRationale,
+  openWorkRecommendationFactsForCycle,
+  openWorkRecommendationStatementsForCycle,
+  qualifyProspectiveWorkRecommendationMaterialization,
+  type OpenWorkRecommendationFact,
+  type OpenWorkRecommendationsCoverage,
+  type ProspectiveMaterializationPlanItem,
+  type ProspectiveWorkRecommendationMaterializationDecision,
+  type ProspectiveWorkRecommendationSuppressReason,
+} from "./application/qualifyProspectiveWorkRecommendationMaterialization";
 export {
   deriveFinalizationApplicability,
   obligationPolicySubjectFor,
```

### `activeCycleCognitiveWork.d0.test.ts` (diff vs HEAD — includes prior Option B idempotence + this cycle rationale change)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
index 143ccc03..6925398f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
@@ -57,6 +57,7 @@ import {
   activeCycleWorkEpistemicItemId,
   ACTIVE_CYCLE_WORK_SOURCE,
 } from "@/features/project-assistant/materializeActiveCycleWork";
+import { filterActiveCycleWorkItemsForProspectiveMaterialization } from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
 import {
   buildActiveCycleWorkContextSeal,
   type ActiveCycleWorkContextSeal,
@@ -561,6 +562,9 @@ const MVP_OBS: NoraActiveCycleWorkItem[] = [
     statement: "Cadrer le MVP autour d'une liste priorisée datée.",
     confidence: null,
     blocking: null,
+    trackingRationale: "Suivi durable nécessaire pour ce cycle.",
+    relationKind: "NEW",
+    relatedRecommendationRef: null,
   },
 ];

@@ -891,6 +895,9 @@ describe("D-GF-ACW-01 schema (BAR-WORK-12..15)", () => {
       confidence: "high" as const,
       blocking: false,
       recommendedOptionRef: validOpt,
+      trackingRationale: "Suivi durable nécessaire pour ce cycle.",
+      relationKind: "NEW",
+      relatedRecommendationRef: null,
     };
     expect(validateItem(recWithRef)).toBe(true);
     expect(isNoraActiveCycleWorkItem(recWithRef)).toBe(true);
@@ -901,6 +908,9 @@ describe("D-GF-ACW-01 schema (BAR-WORK-12..15)", () => {
       confidence: null,
       blocking: null,
       recommendedOptionRef: null,
+      trackingRationale: "Suivi durable nécessaire pour ce cycle.",
+      relationKind: "NEW",
+      relatedRecommendationRef: null,
     };
     expect(validateItem(recWithNull)).toBe(true);
     expect(isNoraActiveCycleWorkItem(recWithNull)).toBe(true);
@@ -2764,3 +2774,128 @@ describe("CR-ACW-04 catalog-wide active-cycle cognitive context", () => {
     expect(acwSrc).not.toMatch(/if\s*\(\s*cycleTypeId\s*===/);
   });
 });
+
+/**
+ * P6-HQA-02 REC-01 Bounded Cognitive Trust —
+ * integrated idempotence: filter → materializeActiveCycleWork → Product UoW → LPS → replay.
+ * trackingRationale has no Product id citation (pseudo-proof removed).
+ */
+describe("P6-HQA-02 REC-01 bounded trust integrated idempotence (filter→UoW→LPS→replay)", () => {
+  function optionBRec(statement: string): NoraActiveCycleWorkItem {
+    return {
+      type: "Recommendation",
+      statement,
+      confidence: "medium",
+      blocking: null,
+      recommendedOptionRef: null,
+      trackingRationale:
+        "Orientation de travail distincte nécessitant un suivi propre hors tour.",
+      relationKind: "NEW",
+      relatedRecommendationRef: null,
+    };
+  }
+
+  it("Recommendation+Observation: filter→write→LPS→replay keeps Observation id and no double mint", async () => {
+    const s = await seedStarted("rec01-idem");
+    const cycleId = s.cycle.cycleInstanceId;
+    const turnCorrelationId = "turn:logical:rec01-option-b-idem";
+    const payload: NoraActiveCycleWorkItem[] = [
+      optionBRec(
+        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
+      ),
+      {
+        type: "Observation",
+        statement: "Les retards reviennent souvent sur ce cycle.",
+        confidence: "medium",
+        blocking: null,
+        recommendedOptionRef: null,
+      },
+    ];
+
+    const firstFilter = filterActiveCycleWorkItemsForProspectiveMaterialization({
+      items: payload,
+      existingItems: [],
+      cycleInstanceId: cycleId,
+      trajectoryDecisionSupportState: "NONE",
+      openWorkRecommendationsCoverage: "COMPLETE",
+    });
+    expect(firstFilter.sourceIndexes).toEqual([0, 1]);
+
+    const facts1 = await materializeFacts(
+      s.oa,
+      s.projectId,
+      cycleId,
+      turnCorrelationId,
+    );
+    const mat1 = await materializeActiveCycleWork({
+      ...acwMaterializeInput(s.oa, facts1, firstFilter.items),
+      itemSourceIndexes: firstFilter.sourceIndexes,
+    });
+    expect(mat1.ok).toBe(true);
+    if (!mat1.ok) throw new Error(mat1.reason);
+    expect(mat1.createdIds.length).toBe(2);
+
+    const afterFirst = await s.oa.cycleServices.epistemic.listByProject(
+      s.projectId,
+    );
+    const acwAfterFirst = afterFirst.filter(
+      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
+    );
+    expect(acwAfterFirst.length).toBeGreaterThanOrEqual(2);
+    const lps1 = await s.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: s.projectId,
+    });
+    expect(lps1.ok).toBe(true);
+    if (!lps1.ok) throw new Error("lps");
+    const lpsIds1 = new Set(lps1.livingProjectState.epistemicItemIds ?? []);
+    for (const item of acwAfterFirst) {
+      expect(lpsIds1.has(item.epistemicItemId)).toBe(true);
+    }
+    const obsFirst = acwAfterFirst.find((e) => e.type === "Observation");
+    expect(obsFirst).toBeTruthy();
+
+    // Replay same logical turn: Recommendation already open → Observation @ sourceIndex 1.
+    const replayFilter = filterActiveCycleWorkItemsForProspectiveMaterialization({
+      items: payload,
+      existingItems: afterFirst,
+      cycleInstanceId: cycleId,
+      trajectoryDecisionSupportState: "NONE",
+      openWorkRecommendationsCoverage: "COMPLETE",
+    });
+    expect(replayFilter.items.map((i) => i.type)).toEqual(["Observation"]);
+    expect(replayFilter.sourceIndexes).toEqual([1]);
+
+    const facts2 = await materializeFacts(
+      s.oa,
+      s.projectId,
+      cycleId,
+      turnCorrelationId,
+    );
+    const mat2 = await materializeActiveCycleWork({
+      ...acwMaterializeInput(s.oa, facts2, replayFilter.items),
+      itemSourceIndexes: replayFilter.sourceIndexes,
+    });
+    expect(mat2.ok).toBe(true);
+    if (!mat2.ok) throw new Error(mat2.reason);
+    expect(mat2.idempotent).toBe(true);
+    expect(mat2.createdIds).toEqual([]);
+
+    const afterReplay = await s.oa.cycleServices.epistemic.listByProject(
+      s.projectId,
+    );
+    const acwAfterReplay = afterReplay.filter(
+      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
+    );
+    expect(acwAfterReplay).toHaveLength(acwAfterFirst.length);
+    const obsReplay = acwAfterReplay.find((e) => e.type === "Observation");
+    expect(obsReplay?.epistemicItemId).toBe(obsFirst!.epistemicItemId);
+
+    const lps2 = await s.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId: s.projectId,
+    });
+    expect(lps2.ok).toBe(true);
+    if (!lps2.ok) throw new Error("lps2");
+    const lpsIds2 = lps2.livingProjectState.epistemicItemIds ?? [];
+    expect(new Set(lpsIds2).size).toBe(lpsIds2.length);
+  });
+});
```

## 22. Réserves

1. **Typed relation continuity:** `relationKind` / `relatedRecommendationRef` are mint-time candidate signals; not reconstructible as typed Product facts after materialization. Coexistence is proven; durable typed link is not.
2. **Residual cognitive risk:** Nora may mis-label a conversational invite as NEW; under COMPLETE + exploitable rationale, bounded trust may mint. Documented in test; empirical Human QA required — not hidden behind pseudo-deterministic proof.
3. **Exact-duplicate ≠ semantic de-duplication:** mechanical exact match only.
4. **trackingRationale not persisted** on EpistemicItem — audit of rationale is turn/transient unless separately captured (out of scope).
5. **REAL boundary not proven** this cycle.
6. **REC-02 RESERVED**; UX-REC-02 preserved; no UI redesign.
7. Work Recommendation currentness: no dedicated engine; Lifecycle/Trajectory currentness not transferred.

## 23. Dette et condition de sortie

**Debt:**
- Empirical Nora semantic quality (Human QA campaign)
- Auditable durability of typed WR relations (if required)
- Transient signal auditability (`trackingRationale`, relationKind)

**Exit condition:** ChatGPT re-review → Morris GO for integration (distinct) → Human QA replay → resolve any structuring reserves.

## 24. Arbitrages Morris encore nécessaires

1. **If** durable reconstructible typed WR relations (DISTINCT_RELATED / CONTRADICTORY) are required for Product audit/Human QA exit: choose persistence carrier (new field vs typed envelope vs other) — **STOP structural** until decided. This cycle intentionally did not invent one.
2. Distinct GO for project integration / PR (not requested here).
3. Human QA authorization for REAL paths (campaign-level).

No other structural arbitration taken locally.

## 25. Verdict

**LOCAL BOUNDED COGNITIVE TRUST CANDIDATE — READY FOR CHATGPT RE-REVIEW**

Conditions met:
- Morris bounded trust policy applied faithfully;
- product-anchor pseudo-proof removed; no replacement heuristic semantic proof;
- deterministic Product controls preserved and tested;
- relations treated honestly within existing contracts (mint-time coexistence; typed continuity **not** falsely claimed);
- history intact; idempotence + targeted non-regressions PASS;
- Review Pack FULL; Handoff L3 to be verified after publish.

Not claimed: PR readiness; project commit/push; P6 GLOBAL PASS; runtime v3 ADOPTED; REAL BOUNDARY PROVEN; reconstructible typed relationKind.

---

## INSTRUCTION CHATGPT

Lire depuis `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier: cycle, branche, HEAD/base, GO Morris, contenu exploitable, code, tests, relations, currentness, historique, réserves, décisions et verdict.
