# SFIA Review Pack — FULL
# P6-HQA-02 / REC-01 — CI FIX — LIVING PRODUCTION RUNTIME REFERENCE SYNC
# Cycle 8 Critical · RUN — correction CI documentaire

## 1. Horodatage

- Generated: 2026-10-10T21:49:53+02:00
- Cycle: 8 — Delivery / implémentation
- Profil: Critical
- Typologie: RUN — correction CI documentaire
- Lot: P6-HQA-02 / REC-01
- PR: #576
- Prior handoff: `ba3c3337de6cac49d73960f6cf4f3e425bca6611` blob `962e210afc9f210b3625cf1c05146e1f3f43d411`
- Local pack before overwrite: blob matched prior handoff exactly

## 2. GO Morris

Synchronisation bornée Living Production Runtime Reference après revue d'impact, puis commit + push correctif sur la branche existante.

Autorisé: reference docs + manifest digests · commit · push · pack FULL · handoff L3.
Interdit: Product code · tests · CI pipeline · merge · nouvelle PR · REAL · architecture rewrite.

## 3. Local Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branch | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD pre-fix | `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| PR head pre-fix | `b433d431…` |
| Dirty pre-fix | `.tmp-sfia-review/chatgpt-review.md` only |
| Staged | empty |
| Destructive git | NONE |

## 4. Qualification SFIA / Convergence

- Macro STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 · Campaign P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Build Doctrine VALIDATED · Roadmap ACTIVE · C1 VALIDATED · P6 IN PROGRESS · P6 GLOBAL PASS NO · Runtime v3 NON ADOPTED
- Capacités V3-F04/F05/F08/F02/F14
- Trajectoire: REC-01 → PR #576 → CI fix → CI PASS → Review ChatGPT → Gate merge Morris → Human QA

## 5. Sources

Template / routing / OM v2.6 · Build Doctrine · Roadmap · C1 · P2/P4/P6 · doctrine 33 · production-runtime-reference README + 04 + manifest + volumes · conformance test + checker · handoff ba3c3337.

## 6. CI failure evidence

- Actions run: `38079868269` — conclusion **failure**
- Job: Build and validate SFIA Studio · step Unit tests (Vitest)
- Test: `productionRuntimeReference.conformance.d0.test.ts` — tracked digests
- Known: `orchestrateTurn.ts` manifest `cba03a9222f5b6a6` ≠ current `2495024ae952effe`
- Known: `corrProof06.artifactObligation.d0.test.ts` also drifted
- Aggregate CI Vitest reported: 5568 PASS / 1 FAIL / 143 SKIPPED · tsc/eslint/build PASS · Required Gate FAIL
- Checker (exhaustive, no write): **exactly 2** digest drifts (source + test) — no other tracked path drift

## 7. Impact architectural qualifié

### Components

| Path | Component | Semantic? |
|------|-----------|-----------|
| `orchestrateTurn.ts` | OBJ-TURN-ORCH · F04/F05/F06 · INV-COG-NE-AUTH | **YES** — prospective WR gate before ACW mint |
| `corrProof06…test.ts` | OBJ-FINALIZATION-ASSESS testPath · F05/F15 | **NO SEMANTIC IMPACT** — fixture adds `workRecommendationsContext: {coverage:COMPLETE, items:[]}` only |

### Flows / invariants / deps

- Flows: F04 primary (WR mint on turn); F05/F06 adjacent via turn orch; F15 fixture-only
- Invariants: INV-COG-NE-AUTH, INV-REC-NE-HD; coverage fail-closed; no auto-HD/disposition
- Persistence: existing `oa_epistemic_items` / ACW UoW — no new table
- Fake/Real: DETERMINISTIC at REC-01 scope; Human QA REAL NOT RUN
- Other REC-01 Product files on PR are not in trackedSources/trackedTests — documented in volumes without expanding tracked set

## 8. Documentation revue / sections modifiées

| Volume | Action | Delta |
|--------|--------|-------|
| README | UPDATE | reviewed commit → `b433d431`; REC-01 overlay line |
| 02 | UPDATE | OBJ-RECOMMENDATION expanded (ACW / Option B / Option A / gates) |
| 03 | UPDATE | F04 steps + REC-01 WR materialization + proof pointers |
| 04 | UPDATE | Sample impact analysis C + OBJ-TURN-ORCH in summary |
| 08 | UPDATE | F04 REC-01 test row |
| 09 | UPDATE | P6-HQA-02 / REC-01 overlay reserves |
| 01,05,06,07 | NO CHANGE | still accurate |
| manifest | UPDATE | lastReviewed* + digests after content review |

### README head (complete current)

```markdown
# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Reviewed commit:** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
**Reviewed at:** 2026-10-10T21:48:00+0200
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
**REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09

## What this corpus is
```

### OBJ-RECOMMENDATION (complete current section)

```markdown
## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation / Work Recommendation

- **Purpose:** Non-authoritative next-step guidance (≠ HumanDecision).
- **Families (AS-IMPLEMENTED):**
  - **Lifecycle Recommendation** — typed lifecycle recommendation path (`lifecycleRecommendation/**`); not Journal Work.
  - **Work Recommendation (ACW)** — durable EpistemicItem `type=Recommendation` with `source=active-cycle-work:nora`, minted only after Studio prospective qualification (P6-HQA-02 / REC-01).
  - **conversationGuidance** — ordinary conversational suggestion; **never** an EpistemicItem.
- **Nora structured candidate (Option B):** Recommendations may carry `trackingRationale`, `relationKind` (`NEW` | `ALREADY_COVERED` | `DISTINCT_RELATED` | `CONTRADICTORY` | `UNCERTAIN`), `relatedRecommendationRef`. Candidate judgment only — not Product authorization.
- **Studio gates:** `qualifyProspectiveWorkRecommendationMaterialization` / `filterActiveCycleWorkItemsForProspectiveMaterialization` in `orchestrateTurn` before `materializeActiveCycleWork`. Coverage `PARTIAL`/`UNAVAILABLE` fail-closed for NEW (and CONTRADICTORY mint under current policy). Exact duplicate / ALREADY_COVERED may still use full Product open facts.
- **Option A typed relation:** optional durable `workRecommendationRelation` on EpistemicItem (`kind`, `targetEpistemicItemId`, `judgmentOrigin=nora_structured_candidate`, `authority=none`) via existing Product SQLite payload — CONTRADICTORY planned for persist; DISTINCT_RELATED systematic durability deferred. Historical replay is existing-first (materialParity); live target applicability required only for **new** mints. Read-time `applicability` (source∧target open) ≠ persisted CURRENT.
- **Paths:** `lifecycleRecommendation/**`, `qualifyProspectiveWorkRecommendationMaterialization.ts`, `materializeActiveCycleWork.ts`, `orchestrateTurn.ts`, `noraProductTurnOutputType.ts`, `deriveWorkRecommendations.ts`, Journal presentation.
- **Invariant:** Recommendation ≠ HumanDecision; no auto-disposition / auto-supersession from CONTRADICTORY.

```

### F04 (complete current section)

```markdown
## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → (optional) prospective Active Cycle Work / Work Recommendation materialization → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
- **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests

```

### Sample impact analysis C (complete)

```markdown
## Sample impact analysis C — P6-HQA-02 / REC-01 (PR #576 @ `b433d431`)

**Changed tracked paths (digest drift):**
- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
- `__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts` → OBJ-FINALIZATION-ASSESS testPath

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (semantic); OBJ-FINALIZATION-ASSESS (**NO SEMANTIC IMPACT** — fixture adds `workRecommendationsContext` only) |
| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; ACW writer / qualify module / Epistemic SQLite (via turn path; not all separately tracked) |
| Transitive | Journal Work projection consumers; F07 disposition remains separate (no auto-HD) |
| Flows | F04 primary (prospective WR mint); F05/F06 adjacent (shared turn orch); F15 tests fixture-only |
| Invariants | INV-COG-NE-AUTH, INV-REC-NE-HD; coverage fail-closed; no auto-disposition from CONTRADICTORY |
| Persistence | Durable WR via existing `oa_epistemic_items` / ACW UoW — no new table |
| Authority | Nora candidate ≠ Product authorization; Studio qualifies |
| Fake/Real | DETERMINISTIC proven at REC-01 scope; Human QA REAL NOT RUN |
| Tests | qualify / ACW Option A+replay / minimalStabilization / Option B context / UX-REC-02 / chatFirst WR / Lifecycle WR / corrProof06 |
| Docs | volumes 02, 03, 04, 08, 09 + README overlay |

Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.

```

### P6-HQA-02 / REC-01 overlay (complete)

```markdown
## P6-HQA-02 / REC-01 overlay (PR #576 @ `b433d431`)

| Item | Status |
|---|---|
| Option B structured WR candidate fields | AS-IMPLEMENTED — `trackingRationale` / `relationKind` / `relatedRecommendationRef` |
| Bounded cognitive trust + prospective qualify | AS-IMPLEMENTED — Studio fail-closed mint; conversationGuidance ≠ WR |
| Coverage PARTIAL (>12 open WR in Nora projection) | ACCEPTED RESERVATION — NEW (and CONTRADICTORY mint) blocked; exact dup / ALREADY_COVERED may still use Product facts |
| Option A CONTRADICTORY durable envelope | AS-IMPLEMENTED — EpistemicItem `workRecommendationRelation`; SQLite reload DETERMINISTIC |
| DISTINCT_RELATED systematic durable envelope | DEFERRED |
| Historical replay after target superseded | AS-IMPLEMENTED — existing-first + materialParity; new mint still live-gated |
| Applicability projection | AS-IMPLEMENTED — read-time source∧target open; durable ≠ CURRENT |
| Auto HD / auto-disposition / auto-supersession from CONTRADICTORY | FORBIDDEN — preserved |
| Human QA REAL / REAL BOUNDARY / E2E REAL | **NOT RUN / NOT CLAIMED** |
| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |
| REC-02 | RESERVED — out of this PR |

```

### Full commit diff (complete — 7 files)

```diff
commit 6f68ea24ac61a59235065d5984904c7e24c22157
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 10 21:49:14 2026 +0200

    docs(studio): sync production runtime reference for REC-01

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index cf0a8f06..5d75994f 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -1,6 +1,6 @@
 # 02 — Runtime Object Catalog

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
+**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (REC-01 overlay; prior harvest retained)**

 Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**. Fields marked UNKNOWN when not confirmed in harvest.

@@ -67,11 +67,18 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Maturity:** PARTIAL as standalone named aggregate — carried inside Proposal DTO / epistemic markers.
 - **Paths:** proposal types, epistemic items table `oa_epistemic_items`.

-## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation
+## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation / Work Recommendation

 - **Purpose:** Non-authoritative next-step guidance (≠ HumanDecision).
-- **Paths:** `lifecycleRecommendation/**`, presentation labels, conversationGuidance.
-- **Invariant:** Recommendation ≠ HumanDecision.
+- **Families (AS-IMPLEMENTED):**
+  - **Lifecycle Recommendation** — typed lifecycle recommendation path (`lifecycleRecommendation/**`); not Journal Work.
+  - **Work Recommendation (ACW)** — durable EpistemicItem `type=Recommendation` with `source=active-cycle-work:nora`, minted only after Studio prospective qualification (P6-HQA-02 / REC-01).
+  - **conversationGuidance** — ordinary conversational suggestion; **never** an EpistemicItem.
+- **Nora structured candidate (Option B):** Recommendations may carry `trackingRationale`, `relationKind` (`NEW` | `ALREADY_COVERED` | `DISTINCT_RELATED` | `CONTRADICTORY` | `UNCERTAIN`), `relatedRecommendationRef`. Candidate judgment only — not Product authorization.
+- **Studio gates:** `qualifyProspectiveWorkRecommendationMaterialization` / `filterActiveCycleWorkItemsForProspectiveMaterialization` in `orchestrateTurn` before `materializeActiveCycleWork`. Coverage `PARTIAL`/`UNAVAILABLE` fail-closed for NEW (and CONTRADICTORY mint under current policy). Exact duplicate / ALREADY_COVERED may still use full Product open facts.
+- **Option A typed relation:** optional durable `workRecommendationRelation` on EpistemicItem (`kind`, `targetEpistemicItemId`, `judgmentOrigin=nora_structured_candidate`, `authority=none`) via existing Product SQLite payload — CONTRADICTORY planned for persist; DISTINCT_RELATED systematic durability deferred. Historical replay is existing-first (materialParity); live target applicability required only for **new** mints. Read-time `applicability` (source∧target open) ≠ persisted CURRENT.
+- **Paths:** `lifecycleRecommendation/**`, `qualifyProspectiveWorkRecommendationMaterialization.ts`, `materializeActiveCycleWork.ts`, `orchestrateTurn.ts`, `noraProductTurnOutputType.ts`, `deriveWorkRecommendations.ts`, Journal presentation.
+- **Invariant:** Recommendation ≠ HumanDecision; no auto-disposition / auto-supersession from CONTRADICTORY.

 ## OBJ-RESERVATION — Reservation

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index eb820f39..74bb5c7c 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -28,12 +28,13 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
-- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
+- **Steps:** orchestrateTurn → provider analyze/respond → (optional) prospective Active Cycle Work / Work Recommendation materialization → session append → journal tools
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
+- **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
 - **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
-- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope
-- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`
+- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 15bbaa43..4fc8d551 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -1,6 +1,6 @@
 # 04 — Dependency & Impact Map

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
+**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (impact sample C = REC-01; prior samples retained)**

 ## Impact analysis procedure (mandatory for future changes)

@@ -87,12 +87,34 @@ LifecycleSurface / lifecyclePresentation
 | Tests | MW5-related nora-cognitive / project-assistant continuity tests; **oracle weakness:** local tests may pre-satisfy challenge |
 | Docs | 02,03,04,08,09 |

+## Sample impact analysis C — P6-HQA-02 / REC-01 (PR #576 @ `b433d431`)
+
+**Changed tracked paths (digest drift):**
+- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
+- `__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts` → OBJ-FINALIZATION-ASSESS testPath
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH (semantic); OBJ-FINALIZATION-ASSESS (**NO SEMANTIC IMPACT** — fixture adds `workRecommendationsContext` only) |
+| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; ACW writer / qualify module / Epistemic SQLite (via turn path; not all separately tracked) |
+| Transitive | Journal Work projection consumers; F07 disposition remains separate (no auto-HD) |
+| Flows | F04 primary (prospective WR mint); F05/F06 adjacent (shared turn orch); F15 tests fixture-only |
+| Invariants | INV-COG-NE-AUTH, INV-REC-NE-HD; coverage fail-closed; no auto-disposition from CONTRADICTORY |
+| Persistence | Durable WR via existing `oa_epistemic_items` / ACW UoW — no new table |
+| Authority | Nora candidate ≠ Product authorization; Studio qualifies |
+| Fake/Real | DETERMINISTIC proven at REC-01 scope; Human QA REAL NOT RUN |
+| Tests | qualify / ACW Option A+replay / minimalStabilization / Option B context / UX-REC-02 / chatFirst WR / Lifecycle WR / corrProof06 |
+| Docs | volumes 02, 03, 04, 08, 09 + README overlay |
+
+Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.
+
 ## Component → flows (summary)

 | Component | Flows |
 |---|---|
 | OBJ-ARTIFACT-CONTINUATION | F05, F06, F17 |
 | OBJ-MW5-CHALLENGE | F04, F05, F06 |
+| OBJ-TURN-ORCH | F04, F05, F06 |
 | OBJ-PROPOSAL | F06, F07, F17 |
 | OBJ-EC | F08–F11, F18 |
 | OBJ-MEMORY-B | F02, F04, F19 |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index eded8a19..f4a67bc5 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -17,6 +17,7 @@
 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
+| F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
 | F01 greenfield | greenfield continuity tests on main | #531 |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index aa7890d2..b9839f14 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -123,6 +123,22 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | All Lifecycle transitions chat-first | **NOT CLAIMED** — First Framing START path only |
 | P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |

+## P6-HQA-02 / REC-01 overlay (PR #576 @ `b433d431`)
+
+| Item | Status |
+|---|---|
+| Option B structured WR candidate fields | AS-IMPLEMENTED — `trackingRationale` / `relationKind` / `relatedRecommendationRef` |
+| Bounded cognitive trust + prospective qualify | AS-IMPLEMENTED — Studio fail-closed mint; conversationGuidance ≠ WR |
+| Coverage PARTIAL (>12 open WR in Nora projection) | ACCEPTED RESERVATION — NEW (and CONTRADICTORY mint) blocked; exact dup / ALREADY_COVERED may still use Product facts |
+| Option A CONTRADICTORY durable envelope | AS-IMPLEMENTED — EpistemicItem `workRecommendationRelation`; SQLite reload DETERMINISTIC |
+| DISTINCT_RELATED systematic durable envelope | DEFERRED |
+| Historical replay after target superseded | AS-IMPLEMENTED — existing-first + materialParity; new mint still live-gated |
+| Applicability projection | AS-IMPLEMENTED — read-time source∧target open; durable ≠ CURRENT |
+| Auto HD / auto-disposition / auto-supersession from CONTRADICTORY | FORBIDDEN — preserved |
+| Human QA REAL / REAL BOUNDARY / E2E REAL | **NOT RUN / NOT CLAIMED** |
+| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |
+| REC-02 | RESERVED — out of this PR |
+
 ## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index fd93f21b..7b73fe00 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,12 +1,13 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `6a4374ed54cf346d16c11b995eec772090c81807`
-**Reviewed at:** 2026-10-10T09:35:00+0200
+**Reviewed commit:** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
+**Reviewed at:** 2026-10-10T21:48:00+0200
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
 **Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
-**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (Draft PR #574)
+**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
+**REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09

 ## What this corpus is

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 6dd9de0b..59b98b70 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "6a4374ed54cf346d16c11b995eec772090c81807",
-  "lastReviewedAt": "2026-10-10T07:35:00.000Z",
+  "lastReviewedCommit": "b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9",
+  "lastReviewedAt": "2026-10-10T19:48:00.000Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "77ac0325a44e8590"
+      "sha256_16": "aaea587edf5a83d9"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,15 +15,15 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "0899fb8fc72e30cc"
+      "sha256_16": "64e7a716758f799d"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "f56c3eadbe7856b0"
+      "sha256_16": "3724cd42f8ff5012"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "0269b99d4d6c6c5f"
+      "sha256_16": "3104b5187a2843e7"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "f35d6fa177e27ecb"
+      "sha256_16": "a770429e8c495738"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "c27b2d9ac9de87c3"
+      "sha256_16": "fe20dea595a3ac89"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "cba03a9222f5b6a6"
+      "sha256_16": "2495024ae952effe"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
@@ -700,7 +700,7 @@
     },
     {
       "path": "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts",
-      "sha256_16": "80a56713fcbf1c40"
+      "sha256_16": "8797f3e117cde1ee"
     },
     {
       "path": "projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts",

```

## 9. Digests avant / après

| Path | Before | After |
|------|--------|-------|
| orchestrateTurn.ts | `cba03a9222f5b6a6` | `2495024ae952effe` |
| corrProof06…test.ts | `80a56713fcbf1c40` | `8797f3e117cde1ee` |
| lastReviewedCommit | `6a4374ed…` | `b433d431…` (code reviewed; not the docs commit) |
| lastReviewedAt | 2026-10-10T07:35:00.000Z | 2026-10-10T19:48:00.000Z |

### Volume digests after `--write-digests`

| `README.md` | `aaea587edf5a83d9` |
| `01-system-runtime-overview.md` | `669b0737f4cc5890` |
| `02-runtime-object-catalog.md` | `64e7a716758f799d` |
| `03-end-to-end-flow-catalog.md` | `3724cd42f8ff5012` |
| `04-dependency-impact-map.md` | `3104b5187a2843e7` |
| `05-environments-configuration-and-boundaries.md` | `101ec96a6908db71` |
| `06-persistence-restart-and-recovery.md` | `0fc09ae3105d36ed` |
| `07-authority-invariants-and-failure-modes.md` | `90a3ea63bda274bd` |
| `08-test-proof-and-conformance-map.md` | `a770429e8c495738` |
| `09-known-gaps-reserves-and-current-boundaries.md` | `fe20dea595a3ac89` |

Algorithm unchanged: SHA-256 of exact file bytes, first 16 hex chars.
No tracked entries deleted. Conformance test not modified.

## 10. Tests

| Control | Result |
|---------|--------|
| `check-production-runtime-reference.mjs` (pre) | FAIL — 2 drifts |
| `check-production-runtime-reference.mjs --write-digests` | PASS (after content review) |
| `check-production-runtime-reference.mjs` (post) | PASS |
| `productionRuntimeReference.conformance.d0.test.ts` | PASS |
| corrProof06 | PASS |
| qualify + minimalStabilization + Option B + ACW + chatFirst WR + Lifecycle WR + UX-REC-02 | PASS (200 tests / 9 files) |
| REAL provider | NOT RUN |
| Full GitHub CI (new run) | PENDING at pack time |

## 11. Commit / Push / PR

- Commit: `6f68ea24ac61a59235065d5984904c7e24c22157` — `docs(studio): sync production runtime reference for REC-01`
- Files: 7 under `production-runtime-reference/**` only
- Product code: NONE
- Push: remote SHA `6f68ea24ac61a59235065d5984904c7e24c22157` == local
- PR: **#576** preserved — https://github.com/mcleland147/sfia-workspace/pull/576
- Base: main · Head SHA: `6f68ea24ac61a59235065d5984904c7e24c22157` · mergedAt: null
- New CI run: `38081313626` — Detect SFIA Studio changes **PENDING** / workflow **in_progress**
- Force push: NO · New PR: NO · Merge: NO

## 12. Fake / Real

- DETERMINISTIC PROVEN at REC-01 qualified scope (unchanged Product)
- This cycle: reference maintenance + CI fix only
- REAL NOT RUN · not REAL BOUNDARY / E2E REAL / P6 PASS / v3 ADOPTED

## 13. Réserves

Coverage PARTIAL>12 · CONTRADICTORY sous PARTIAL · DISTINCT_RELATED DEFER · paraphrase dups · Human QA REAL NOT RUN · P6 PASS=NO · tracked set not expanded to all REC-01 paths

## 14. Décisions Morris restantes

1. Await CI completion on run `38081313626`
2. ChatGPT review of this sync
3. Explicit merge gate for #576
4. Human QA REC-01 after integrate

## 15. État final worktree

```
 M .tmp-sfia-review/chatgpt-review.md
```

## 16. Verdict

**REC-01 PR #576 CI REFERENCE FIX — PUSHED / REMOTE VERIFIED / CI PENDING**

Anti-claims: no merge · no Product change · no P6 GLOBAL PASS · no runtime v3 adoption · CI not claimed PASS while pending.

---

## Instruction ChatGPT (obligatoire)

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: cycle, branche, HEAD/base, GO, root cause, impact, documents, digests, tests, commit, push, PR #576, CI, handoff, réserves, verdict.
