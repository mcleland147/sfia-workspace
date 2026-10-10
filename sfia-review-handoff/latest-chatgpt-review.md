# SFIA Review Pack — FULL CRITICAL
# P6 First Framing — PRR Conformance Correction (Draft PR #574)
# Modified content complete (template v2.6 §7.5)

## Meta
- Date / heure : **2026-10-10 09:35:55 CEST** (Europe/Paris)
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Cycle : 13 — PR readiness / Correction Pass CI-PRR
- Profil : Critical
- Typologie : DOC / INC — Reference Conformance Correction
- GO Morris : PRR correction + commit/push PR #574 **AUTHORIZED**
- GO MERGE / READY : **NON**
- Handoff précédent : `b9454e47e0c6368c7079e040577838443327e1fc`
- Synthesis only : **no**
- P6 GLOBAL PASS : **NO**
- Runtime v3 ADOPTED : **NO**

---

## 1. Local Git Truth Check

| Check | Result |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD avant correction | `6a4374ed54cf346d16c11b995eec772090c81807` |
| HEAD après | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| `origin/main` | `60247eb21074c5e7be76e09bcb66d850926ded1e` |
| Draft PR | **#574** — https://github.com/mcleland147/sfia-workspace/pull/574 |
| `isDraft` | **true** (conservé) |
| Product code modifié | **NON** (PRR only) |

### Status final (exclusions préservées)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
```

---

## 2. Git Review Index

| Champ | Valeur |
|-------|--------|
| Product commit | `6a4374ed54cf346d16c11b995eec772090c81807` |
| PRR commit | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| SHA distant | `980064c05f1769f00d0ef85ef5284a899c6a0d73` |
| Fichiers PRR | **5** |
| Digests recalculés | **6** (2 sources + 4 volumes) |
| Nouvelle PR | **NON** |
| CI | voir §8 (observée après push) |

---

## 3. Impact analysis (vol 04 procedure)

### Mismatches read-only (avant sync)

| Path | Manifest | Current |
|------|----------|---------|
| `…/f2/orchestrateF2.ts` | `a718e67e59895d23` | `d064b36ddc2f21cd` |
| `…/hooks/useProductConversation.ts` | `83dc7e3be704199d` | `b9d52757c944c06b` |

### Matrice d'impact

| Source modifiée (Product `6a4374ed`) | Composant PRR | Flux | Effet sémantique | Volume | Tests |
|--------------------------------------|---------------|------|------------------|--------|-------|
| `orchestrateF2.ts` | F2 orchestration (tracked) | F03, F04, F07, F14 | First Framing Rec→…→explicit START→LPS ; no auto-START ; already-active no-op | 03, 08, 09 | F01 gate, framing continuity |
| `useProductConversation.ts` | Product conversation UI hook | F04 | Framing Continuity Card projection / advance CTAs | 03, 08, 09 | framingContinuity* UI |
| `chatFirstFramingContinuity.ts` (new, not tracked entry) | referenced via F2/conversation paths | F03/F07 | phase projection / examinationSufficient | 03 | d0 + UI |
| `preCycleCandidateTrajectoryActions.ts` | via F2 | F03/F07/F14 | prepare candidate/cycle/read continuity | 03 | front-door |
| Autres 15 fichiers Product | presentation / prompt / tests | F04/F07 | UX copy / gates — **no PRR model restructure** | 03/08 notes | UX suites |

### Classification

- Changement fonctionnel Product : **déjà intégré** dans `6a4374ed` — hors scope de ce pass.
- Ce pass : **effet documentaire + digests** après revue sémantique.
- Restructuration manifeste (nouveaux composants/flux/invariants) : **NON nécessaire** — STOP architecture non déclenché.
- Volumes 01, 02, 04, 05, 06, 07 : **NO SEMANTIC IMPACT** (procédure/invariants/persistence inchangés ; First Framing documenté dans 03/08/09).

---

## 4. Semantic review — décisions

| Élément | Décision |
|---------|----------|
| F03 | Actualisé — chaîne First Framing descriptive + preuves |
| F04 | Actualisé — continuité présentation Framing |
| F07 | Actualisé — split Studio KEEP vs Framing START borné ; pas « tout Lifecycle chat-first » |
| F14 | Actualisé — LPS re-read / continuity projection |
| Vol 09 Lifecycle row | Requalifié + overlay First Framing |
| Vol 08 proof map | Lignes F03/F04/F07 Framing ajoutées |
| README | Métadonnées reviewed commit = Product `6a4374ed` |
| INV-* | **INCHANGÉS** |
| Persistence | **INCHANGÉE** (pas de store parallèle) |

---

## 5. Digests avant → après

| Entrée | Avant | Après |
|--------|-------|-------|
| orchestrateF2.ts | a718e67e59895d23 | d064b36ddc2f21cd |
| useProductConversation.ts | 83dc7e3be704199d | b9d52757c944c06b |
| README.md | 0ba9591485795187 | 77ac0325a44e8590 |
| 03-end-to-end-flow-catalog.md | 4059db411bb5a428 | f56c3eadbe7856b0 |
| 08-test-proof-and-conformance-map.md | 7c7596c841933c67 | f35d6fa177e27ecb |
| 09-known-gaps-…md | 439b50db8e68633d | c27b2d9ac9de87c3 |

Aucune autre entrée manifeste modifiée. schemaVersion/kind/IDs/relations préservés.
`lastReviewedCommit` → `6a4374ed54cf346d16c11b995eec772090c81807` (provenance Product réelle).

---

## 6. Validations locales

| Contrôle | Résultat |
|----------|----------|
| PRR checker read-only (après) | **PASS** — CONFORMANCE OK |
| Vitest conformance + Framing | **7 files / 41 tests PASS** |
| `git diff --check` PRR | **PASS** |
| Product `app/` diff | **vide** (unchanged) |
| REAL / CURSOR_REAL / DB | **NON touchés** |

Niveau preuve : **PRR CONFORMANCE PROVEN** (+ CI à confirmer §8).

---

## 7. DIFF COMPLET — manifeste + volumes

### Manifest diff

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 94716594..6dd9de0b 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "0984a4559130907ac46d2c0457c0e420419a723d",
-  "lastReviewedAt": "2026-10-06T18:08:07.408Z",
+  "lastReviewedCommit": "6a4374ed54cf346d16c11b995eec772090c81807",
+  "lastReviewedAt": "2026-10-10T07:35:00.000Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "0ba9591485795187"
+      "sha256_16": "77ac0325a44e8590"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "4059db411bb5a428"
+      "sha256_16": "f56c3eadbe7856b0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7c7596c841933c67"
+      "sha256_16": "f35d6fa177e27ecb"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "439b50db8e68633d"
+      "sha256_16": "c27b2d9ac9de87c3"
     }
   ],
   "components": [
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "a718e67e59895d23"
+      "sha256_16": "d064b36ddc2f21cd"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "83dc7e3be704199d"
+      "sha256_16": "b9d52757c944c06b"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

### Full PRR tree diff (`6a4374ed..980064c0`)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index df6f99f6..eb820f39 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -1,6 +1,6 @@
 # 03 — End-to-End Flow Catalog

-**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**
+**As-implemented @ `6a4374ed54cf346d16c11b995eec772090c81807`** (First Framing chat-first continuity overlay)

 Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

@@ -17,18 +17,23 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** PARTIAL — transcript availability depends on session DB path colocation

 ## F03 — Cycle qualification / activation
-- **Trigger:** F2 qualification / Pilot lifecycle start
-- **Objects:** CycleInstance, CKC, LPS active pointer
-- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
-- **Status:** COMPLETE deterministic core
+- **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
+- **Trigger (First Framing chat-first, AS-IMPLEMENTED @ `6a4374ed`):** conversational continuity after a CURRENT Framing Recommendation — **descriptive chain, not automation**:
+  Recommendation CURRENT → candidate trajectory (prepare) → examinable presentation (`FramingTrajectoryExamination` / Framing Continuity Card) → HumanDecision when structural (trajectory approval) → prepare cycle → **explicit Pilot START** (intent `attempt_start`, never a bare recommendation accept) → LPS re-read → conversational continuity while active
+- **Objects:** CycleInstance, CKC, LPS active pointer; Framing continuity snapshot (phase projection only — ≠ Truth C)
+- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `f2/chatFirstFramingContinuity.ts`, `preCycleCandidateTrajectoryActions.ts`, `pilotLifecycle.start` (Studio KEEP)
+- **Authority:** no silent HD; no auto-START; already-active + START intent → honest no-op (no second CycleInstance); Pilot-facing START copy must not expose internal `cyc:…` / `activeCycleInstanceId`
+- **Status:** COMPLETE deterministic core + First Framing START gate DETERMINISTIC at tested scope (ZERO REAL claim)
+- **Proof at tested scope:** `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `chatFirstFramingContinuity.frontDoor.d0.test.ts`, `chatFirstFramingContinuity.d0.test.ts`

 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
 - **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
-- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
+- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
-- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts
-- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A (pending subject + unrelated topic → answered turn, ZERO HumanDecision, subject intact)
+- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
+- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
@@ -51,16 +56,18 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
 - **Status:** COMPLETE for in-process; PARTIAL across restart

-## F07 — HumanDecision on Proposal
+## F07 — HumanDecision on Proposal / Framing trajectory
 - **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
-- **Trigger (nominal, chat-first Work only):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » never START/FINALIZE a Lifecycle Recommendation.
+- **Trigger (nominal, chat-first Work):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » on a Work Recommendation never START/FINALIZE.
 - **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
-- **Lifecycle family:** explicit Studio actions preserved — prepareCandidateTrajectory / approval / prepareCycle / START / FINALIZE on the right-panel lifecycle surface. Not condensed into chat disposition.
+- **Lifecycle / Framing family (AS-IMPLEMENTED split):**
+  - **Studio KEEP:** prepareCandidateTrajectory / approve / prepareCycle / START / FINALIZE remain available on lifecycle controls.
+  - **First Framing conversational path (bounded):** Recommendation CURRENT → prepare candidate → **examinable** trajectory presentation → structural HumanDecision for trajectory when required → prepare cycle → **explicit** Pilot START intent (`resolveChatFirstCycleStartGate` / `attempt_start`). A bare recommendation accept at `ready_to_start` does **not** start. Not every Lifecycle transition is chat-first — FINALIZE and non-Framing Lifecycle dispositions remain explicit Studio / non-chat unless separately proven.
 - **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
-- **Authority boundary:** the candidate is never a HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**; the conversation stays open. Lifecycle CURRENT alone never yields a chat START/FINALIZE.
-- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
-- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work + hybrid non-START proofs)
-- **Status:** COMPLETE durable Work path (deterministic); Lifecycle explicit Studio path preserved
+- **Authority boundary:** Recommendation / `pilotDecisionCandidate` never equals HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**. Lifecycle CURRENT alone never invents HD or auto-START. Trajectory examination insufficient ⇒ validation CTA disabled (no invented substance).
+- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `f2/chatFirstFramingContinuity.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `preCycleCandidateTrajectoryActions.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work); Framing — `chatFirstFramingContinuity*.d0.test.ts`, `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `p6.ux.recommendationContinuity.ui.test.tsx`
+- **Status:** COMPLETE durable Work path (deterministic); First Framing START conversational path DETERMINISTIC at tested scope; other Lifecycle transitions Studio-preserved; ZERO REAL claim

 ## F08 — EC PREPARE
 - **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
@@ -104,8 +111,9 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** DETERMINISTIC fresh + restart handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

 ## F14 — LPS / trajectory continuation or recovery
-- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
-- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)
+- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`; Framing continuity rehydrate via `projectAssistantReadFramingContinuityAction` after remount / send
+- **First Framing:** after governed START, LPS / `activeCycleInstanceId` are re-read from Product (Truth C); continuity snapshot phases (`recommendation_ready` → … → `ready_to_start` → `active`) are projections over existing OA objects — no parallel persistence
+- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope; Framing continuity rehydrate DETERMINISTIC UI at tested scope)

 ## F15 — Cycle finalization
 - **Paths:** `assessFinalization.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 64664fc2..eded8a19 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -15,7 +15,10 @@
 |---|---|---|
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
+| F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
+| F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
+| F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
 | F01 greenfield | greenfield continuity tests on main | #531 |
 | F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
 | Architecture drift | productionRuntimeReference.conformance | living reference |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 2689802b..aa7890d2 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -105,11 +105,24 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | Journal Recommandations / Décisions tabs | AS-IMPLEMENTED projection from existing Epistemic / HumanDecision reads — never Truth C |
 | Finalization undisposed Recommendations | AS-IMPLEMENTED blocker `undisposed_recommendations` via existing `assessFinalization` blockers family (Work only) |
 | Defer disposition (Work) | AS-IMPLEMENTED at tested scope — durable HD + Reservation `may_affect` + Work Recommendation resolved; missing honest target ⇒ `defer_target_unresolved` |
-| Lifecycle transitions | EXPLICIT Studio actions preserved (prepare trajectory / approve / prepare cycle / START / FINALIZE) — NOT chat-first; candidate Lifecycle Chat-first resolver RETIRED |
+| Lifecycle transitions (general) | Studio actions KEEP (prepare / approve / prepare cycle / START / FINALIZE). Generic « Lifecycle Chat-first resolver » remains RETIRED — not every Lifecycle transition is conversational |
+| First Framing START (bounded) | AS-IMPLEMENTED @ `6a4374ed` — conversational Rec→candidate→examinable→HD→prepare→**explicit** Pilot START→LPS; no auto-START; already-active = honest no-op; DETERMINISTIC proven; ZERO REAL claim |
 | Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
 | REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
+| Visual Figma / Pilot runtime fidelity (First Framing UX) | RESERVE — residual Human QA / visual; not closed by PRR sync |
+| Recommendation materiality engine (M-DISP) | RESERVE — presentation-only neutrality (P2-D-01); no new materiality engine |
 | Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

+## FIRST-FRAMING-CHAT-FIRST-CONTINUITY overlay (P6 @ `6a4374ed`)
+
+| Item | Status |
+|---|---|
+| Examinable trajectory before HD | AS-IMPLEMENTED — digest + trajectory substance (≠ generic Project objective / bare « Cadrage » label) |
+| HumanDecision inventée / START automatique | FORBIDDEN — preserved |
+| Conversational START when prepared | DETERMINISTIC at tested scope (`resolveChatFirstCycleStartGate`) |
+| All Lifecycle transitions chat-first | **NOT CLAIMED** — First Framing START path only |
+| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |
+
 ## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index ace4d688..fd93f21b 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,11 +1,12 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `6beb8cc369bd9b82eebee97b70309838373b3dfa`
-**Reviewed at:** 2026-09-27T15:40:00+0200
+**Reviewed commit:** `6a4374ed54cf346d16c11b995eec772090c81807`
+**Reviewed at:** 2026-10-10T09:35:00+0200
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
 **Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
+**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (Draft PR #574)

 ## What this corpus is

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 94716594..6dd9de0b 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "0984a4559130907ac46d2c0457c0e420419a723d",
-  "lastReviewedAt": "2026-10-06T18:08:07.408Z",
+  "lastReviewedCommit": "6a4374ed54cf346d16c11b995eec772090c81807",
+  "lastReviewedAt": "2026-10-10T07:35:00.000Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "0ba9591485795187"
+      "sha256_16": "77ac0325a44e8590"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "4059db411bb5a428"
+      "sha256_16": "f56c3eadbe7856b0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7c7596c841933c67"
+      "sha256_16": "f35d6fa177e27ecb"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "439b50db8e68633d"
+      "sha256_16": "c27b2d9ac9de87c3"
     }
   ],
   "components": [
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "a718e67e59895d23"
+      "sha256_16": "d064b36ddc2f21cd"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "83dc7e3be704199d"
+      "sha256_16": "b9d52757c944c06b"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

---

## 8. CI (post-push) — FINAL (2026-10-10 09:46:04 CEST)

Run : https://github.com/mcleland147/sfia-workspace/actions/runs/38034829235
Head : `980064c05f1769f00d0ef85ef5284a899c6a0d73`

| Check | Status |
|-------|--------|
| Detect SFIA Studio changes | **PASS** (6s) |
| Build and validate SFIA Studio | **PASS** (8m6s) |
| — Typecheck | **PASS** |
| — Lint | **PASS** |
| — Build | **PASS** |
| — Unit tests (Vitest) | **PASS** |
| — Secret pattern scan | **PASS** |
| — Trailing whitespace | **PASS** |
| — Modeled governance | **PASS** |
| SFIA Studio Required Gate | **PASS** (2s) |

CI PASS ≠ Ready ≠ merge.

---

## 9. FICHIERS MODIFIÉS — CONTENU COMPLET

### `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```md
# 03 — End-to-End Flow Catalog

**As-implemented @ `6a4374ed54cf346d16c11b995eec772090c81807`** (First Framing chat-first continuity overlay)

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
- **Trigger (First Framing chat-first, AS-IMPLEMENTED @ `6a4374ed`):** conversational continuity after a CURRENT Framing Recommendation — **descriptive chain, not automation**:
  Recommendation CURRENT → candidate trajectory (prepare) → examinable presentation (`FramingTrajectoryExamination` / Framing Continuity Card) → HumanDecision when structural (trajectory approval) → prepare cycle → **explicit Pilot START** (intent `attempt_start`, never a bare recommendation accept) → LPS re-read → conversational continuity while active
- **Objects:** CycleInstance, CKC, LPS active pointer; Framing continuity snapshot (phase projection only — ≠ Truth C)
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `f2/chatFirstFramingContinuity.ts`, `preCycleCandidateTrajectoryActions.ts`, `pilotLifecycle.start` (Studio KEEP)
- **Authority:** no silent HD; no auto-START; already-active + START intent → honest no-op (no second CycleInstance); Pilot-facing START copy must not expose internal `cyc:…` / `activeCycleInstanceId`
- **Status:** COMPLETE deterministic core + First Framing START gate DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `chatFirstFramingContinuity.frontDoor.d0.test.ts`, `chatFirstFramingContinuity.d0.test.ts`

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
- **Exit:** Proposal `DECISION_REQUIRED`
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
- **Sealed set without a CTA (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** the `PresentedOptionSet` is materialised server-side when a chat-first disposition needs it (`resolveChatFirstPilotDecision` → existing `proposeTrajectoryOptions` with the resolved `proposalId`), and the UI keeps the pre-existing FR-01 auto-instruct for a sole recoverable pending subject. Materialisation is **lazy, on the disposition turn** — NOT at `DECISION_REQUIRED` mint time. Reserve: an unbound subject that is never disposed of stays unbound (see vol 09).
- **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal / Framing trajectory
- **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
- **Trigger (nominal, chat-first Work):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » on a Work Recommendation never START/FINALIZE.
- **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
- **Lifecycle / Framing family (AS-IMPLEMENTED split):**
  - **Studio KEEP:** prepareCandidateTrajectory / approve / prepareCycle / START / FINALIZE remain available on lifecycle controls.
  - **First Framing conversational path (bounded):** Recommendation CURRENT → prepare candidate → **examinable** trajectory presentation → structural HumanDecision for trajectory when required → prepare cycle → **explicit** Pilot START intent (`resolveChatFirstCycleStartGate` / `attempt_start`). A bare recommendation accept at `ready_to_start` does **not** start. Not every Lifecycle transition is chat-first — FINALIZE and non-Framing Lifecycle dispositions remain explicit Studio / non-chat unless separately proven.
- **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
- **Authority boundary:** Recommendation / `pilotDecisionCandidate` never equals HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**. Lifecycle CURRENT alone never invents HD or auto-START. Trajectory examination insufficient ⇒ validation CTA disabled (no invented substance).
- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `f2/chatFirstFramingContinuity.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `preCycleCandidateTrajectoryActions.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work); Framing — `chatFirstFramingContinuity*.d0.test.ts`, `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `p6.ux.recommendationContinuity.ui.test.tsx`
- **Status:** COMPLETE durable Work path (deterministic); First Framing START conversational path DETERMINISTIC at tested scope; other Lifecycle transitions Studio-preserved; ZERO REAL claim

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Status:** COMPLETE tables/services; Product E2E at tested scope

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle; deterministic report envelope + runtime enforcement AS-IMPLEMENTED

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
- **Nora:** `product_execution_context_get` tool (project-bound); W3-C and conversation both invoke shared `runNoraCognitiveCore` → Agents Runner (`runNoraAgentsTurn`); post_execution mode disables tools/Memory B/hosted search/MW5.
- **Status:** DETERMINISTIC at tested scope (incl. CORRECTION PASS 02 canonical lineage); ZERO REAL this macro; runtime v3 NON ADOPTED

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
- **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro

## F13 — Nora post-Evidence
- **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
- **UI:** TrajectorySurface shows business-first « Rapport d'exécution » from `postEvidence.executionReport` when present; rehydrate button remains recovery-only (not nominal step); after restart the report is restored from durable refs without a new Nora call solely for the report
- **Status:** DETERMINISTIC fresh + restart handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`; Framing continuity rehydrate via `projectAssistantReadFramingContinuityAction` after remount / send
- **First Framing:** after governed START, LPS / `activeCycleInstanceId` are re-read from Product (Truth C); continuity snapshot phases (`recommendation_ready` → … → `ready_to_start` → `active`) are projections over existing OA objects — no parallel persistence
- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope; Framing continuity rehydrate DETERMINISTIC UI at tested scope)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
- **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
- **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
- **Proof at tested scope:** `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
- **Product resume (legacy arm, still supported):** explicit `reinstructionOfProposalId` on Send, then Decide — proven by `productCycleE2eStabilization.frontDoor.d0.test.ts`
- **Product resume (nominal, chat-first):** the Pilot disposes of the pending subject in the conversation. The server owns the continuity: after a chat-first AMEND closes the subject, the next formalization turn needs **no** client-supplied `reinstructionOfProposalId`. A non-reconstructible pending subject yields `no_eligible_subject` (ZERO HumanDecision), never an invented decision.
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case D
- **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
- **Status:** PARTIAL — front-door rehydrate assertions at tested scope

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)

## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

Nominal Product path (architecture D-ER; delivery candidate, LOCAL CANDIDATE / NOT INTEGRATED ON MAIN):

HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
```

### `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```md
# 08 — Test, Proof & Conformance Map

**As-implemented @ HEAD (see manifest lastReviewedCommit)**

## Suite topology

- Unit/domain + application-path: Vitest under `app/__tests__/**`
- UI: Vitest + Testing Library for pre-m6 surfaces
- E2E: Playwright `app/e2e/**` (often harness/boundary routes)
- Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Flow → tests (selected)

| Flow | Deterministic tests | Notes |
|---|---|---|
| F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
| F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
| F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
| F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
| F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
| F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
| F01 greenfield | greenfield continuity tests on main | #531 |
| F10–F11 attempt/evidence | productCycleE2eStabilization.frontDoor + PWR E2E | Fake adapter / Fake docs-write only |
| Architecture drift | productionRuntimeReference.conformance | living reference |

## Oracle weaknesses (updated after PRODUCT-CYCLE-E2E-STABILIZATION-01)

| Weakness | Classification | Evidence |
|---|---|---|
| Seam tests green while natural Product journey regresses | **MITIGATED** at tested scope by front-door oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Tests bypass conversation front door (direct resolver/AP seed) | Still true for many unit/seam tests; front-door oracle now exists | direct `resolveActiveCycleGovernedContinuation` calls |
| Fake-only note+cadrage magic as sole success path | **MITIGATED** — provider-neutral Nora leaf cues; materialization Fake default assessment null | `fakeProvider.ts` |
| Local tests may pre-satisfy MW5 `challengeResponseAssessment` | **MITIGATED** on materialization Fake path (default null); other fixtures may still set sufficient | fixtures |
| Historical E2E uses QA/boundary routes | CONFIRMED | `app/api/e2e/**` |
| Clarification accepted where product contract wants seamless continuation | **MITIGATED** for nominal pathless with semantic cues | continuity CORR-01 tightened |
| Product Prepare N2 vs Confirm MORRIS-only boundary | **MITIGATED** — confirm/validate accept N2 Product Pilot matching PREPARE | `validateResolvedM3ExecutionBoundary`, `confirmAndExecuteResolvedM3` |
| Docs-write Evidence without LPS outcome refs | **MITIGATED** — bounded docs-write appends LPS evidence/RB ids | `executeConfirmedBoundedDocsWriteContract` |

## Proof levels

- **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — Product UI server-action lineage at Fake scope (this macro)
- DETERMINISTIC PROVEN (seam/unit)
- REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
- Runtime v3 **NON ADOPTED**; Product global READY **not claimed**

## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

| Proof | Level | Notes |
| --- | --- | --- |
| Front-door authorized local-write → Git FACTS mismatch → Evidence/CE → Nora tool → Pilot | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** | Correction Pass 02 · `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` |
| NodeLocalGitStatusDiffPort observes delta only / HEAD H0 / UNAVAILABLE fail-closed | DETERMINISTIC AT TESTED SCOPE | `cp2Seams` + frontDoor |
| Native Cursor REO present; missing REO stays missing (no synthetic) | DETERMINISTIC AT TESTED SCOPE | frontDoor + finalize |
| Verification Evidence in same RB → ContractResult ≠ PASS under mismatch | DETERMINISTIC AT TESTED SCOPE | frontDoor + missionResultContractResultSemantic |
| Nora Agents actual `execution_review_get_manifest` tool call | DETERMINISTIC AT TESTED SCOPE | frontDoor CP2-05 |
| Result Surface real data + Pilot itemId server read | DETERMINISTIC AT TESTED SCOPE | TrajectorySurface + `w2ReadExecutionReviewItemAction` |
| Mounted scheduled continue + remount auto-resume / same Attempt | DETERMINISTIC AT TESTED SCOPE | trajectorySurface + frontDoor (no total abandon counter) |
| 0-file OBSERVED ≠ verification UNAVAILABLE | DETERMINISTIC AT TESTED SCOPE | cp2Seams |
| Product Continuity shared knowledge non-regression | DETERMINISTIC AT TESTED SCOPE | existing continuity suites |
| REAL generic / NoteLite replay | **NOT PROVEN** | ZERO REAL this macro |

### GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 Correction Pass 03
- Front-door Product oracle: decideTrajectory durableLocalWriteSeal (no Decision repository fabrication).
- Nominal Git HEAD binding; durable VerifiedChangeSet digest; REO binding; missing REO blocks ContractResult PASS.
- W3-C nominally enables execution_review_* tools; ReviewItem integrity checked.
- Proof ceiling claimed when EP/T green: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
```

### `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```md
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)
- PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
- ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
- CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
- POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01: DETERMINISTIC post-execution report/artifact→Nora handoff proven at tested scope only — **NOT REAL PROVEN**; SprintBoard REAL re-proof requires distinct Morris GO
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
| E2E backbone can bypass natural conversation front door | MITIGATED at tested scope — Product server-action oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (CURRENT MACRO — local candidate)

- **CURRENT MACRO** on branch `delivery/sfia-studio-generic-execution-review-result-convergence-01` · Correction Pass **04 RESUMED AFTER MORRIS DECISION** · **CLOSED FOR CRITICAL REVIEW**.
- **CP4-01 WIRED** — Product carrier = Proposal `PresentedOptionSet.sealedExecutionBasis` → pursue HumanDecision → DecisionBasis → generic local-write (MD-CP4-01 consumed). MAIN front-door oracle does **not** inject `durableLocalWriteSeal`.
- **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
- Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
- Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
- `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
- NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
- Retention GC / Git promotion: **NOT IMPLEMENTED**.
- Next = ChatGPT Critical Review of Correction Pass 04 resume → Morris GO commit/push/PR (distinct).

### Historical — Correction Pass 04 STOP (superseded)

Prior documentary tip recorded **STOP — MORRIS DECISION REQUIRED** (CP4-02) with CP4-01 SOURCE FOUND / NOT WIRED. Morris decisions MD-CP4-01 + MD-CP4-02 Option C consumed; this CURRENT section supersedes that STOP state.

## Next / CURRENT REAL campaign

NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this delivery macro.

## Prior overlay retained — PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01

`PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` is **INTEGRATED ON MAIN** (historical). Prior tip wording « local candidate » is obsolete as CURRENT next macro.

## Prior overlay retained — POST-EXECUTION

`POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.

## POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 overlay

| Item | Status |
|---|---|
| Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
| docs_write report **runtime** required (not optional) | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded |
| docs_write report continuity after `completeBoundedDocsWriteLaunch` | AS-IMPLEMENTED — bind + persist claim beside Artifact Evidence |
| Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
| Claim completion result propagation | AS-IMPLEMENTED — closed classifier; only headings-missing / empty-content → NOT_PROVEN; oracle/integrity/lineage/unknown → continuity fail-closed |
| Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
| Fresh + **restart/rehydrate** executionReport surface | AS-IMPLEMENTED — shared `projectW3cExecutionReportSurfaceFromDurable`; LPS keeps Recommendation only |
| Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
| Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |

## PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 overlay

| Item | Status |
|---|---|
| Shared Product Resolution READ-ONLY | AS-IMPLEMENTED at tested scope — canonical `contractResultBindingsMatchCurrentFacts`; no prefix/repo-order preference |
| Canonical Execution Continuity Projection | AS-IMPLEMENTED — reachable stages only (TECHNICAL_TERMINAL / PRODUCT_QUALIFIED removed) |
| Lineage integrity → RECOVERY_REQUIRED | AS-IMPLEMENTED — closed integrity code set; Reconciler STOP; query errors remain resolve errors |
| Server Reconciler (observe/execute/continue) | AS-IMPLEMENTED — no Attempt on observe/continue-without-Attempt; STOP on recoveryRequired |
| ACCEPTED / RUNNING restart | AS-IMPLEMENTED at deterministic tested scope (R2/R3) |
| TrajectorySurface workflow ownership removed | AS-IMPLEMENTED — command + projection |
| Nora product_execution_context_get | AS-IMPLEMENTED — project-bound tool |
| W3-C shared Nora cognitive core (Agents) | AS-IMPLEMENTED — conversation + post_execution via `runNoraCognitiveCore` → `runNoraAgentsTurn` |
| New store / workflow engine / event bus | NONE |
| REAL / READY FOR REAL / runtime v3 ADOPTED | NOT claimed — ZERO REAL |


| REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
| New store/table / parallel engines | NONE |

## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay

| Item | Status |
|---|---|
| Chat-first = nominal Work disposition path | DETERMINISTIC proven at tested scope — `pilotDecisionCandidate` → Work only (`resolveChatFirstPilotDecision` → `decideTrajectory`). Chat « oui » never START/FINALIZE |
| Work vs Lifecycle recommendation families | AS-IMPLEMENTED — Journal Work-only; Lifecycle CURRENT on right-panel / lifecycle projection; finalization `undisposed_recommendations` scans Work in-cycle only |
| Conversation non-blocking under pending subject | DETERMINISTIC — reinstruction gate no longer dead-ends composer; unrelated turns stay conversational |
| CTAs Instruire / Décider / Modifier as required UX | RETIRED FROM NOMINAL (`decisionWorkflowMode="chat_first"`); server actions KEEP for legacy_cta / harvest |
| Journal Recommandations / Décisions tabs | AS-IMPLEMENTED projection from existing Epistemic / HumanDecision reads — never Truth C |
| Finalization undisposed Recommendations | AS-IMPLEMENTED blocker `undisposed_recommendations` via existing `assessFinalization` blockers family (Work only) |
| Defer disposition (Work) | AS-IMPLEMENTED at tested scope — durable HD + Reservation `may_affect` + Work Recommendation resolved; missing honest target ⇒ `defer_target_unresolved` |
| Lifecycle transitions (general) | Studio actions KEEP (prepare / approve / prepare cycle / START / FINALIZE). Generic « Lifecycle Chat-first resolver » remains RETIRED — not every Lifecycle transition is conversational |
| First Framing START (bounded) | AS-IMPLEMENTED @ `6a4374ed` — conversational Rec→candidate→examinable→HD→prepare→**explicit** Pilot START→LPS; no auto-START; already-active = honest no-op; DETERMINISTIC proven; ZERO REAL claim |
| Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
| REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
| Visual Figma / Pilot runtime fidelity (First Framing UX) | RESERVE — residual Human QA / visual; not closed by PRR sync |
| Recommendation materiality engine (M-DISP) | RESERVE — presentation-only neutrality (P2-D-01); no new materiality engine |
| Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

## FIRST-FRAMING-CHAT-FIRST-CONTINUITY overlay (P6 @ `6a4374ed`)

| Item | Status |
|---|---|
| Examinable trajectory before HD | AS-IMPLEMENTED — digest + trajectory substance (≠ generic Project objective / bare « Cadrage » label) |
| HumanDecision inventée / START automatique | FORBIDDEN — preserved |
| Conversational START when prepared | DETERMINISTIC at tested scope (`resolveChatFirstCycleStartGate`) |
| All Lifecycle transitions chat-first | **NOT CLAIMED** — First Framing START path only |
| P6 GLOBAL PASS / runtime v3 ADOPTED | **NOT CLAIMED** |

## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

| Item | Status |
|---|---|
| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via Product server-action front-door oracle (Fake docs-write + LPS outcome refs) |
| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.

### CP4 residual reserves (acceptable debt after resume)
- docs_write compatibility bridges retained
- Review Material GC/retention not implemented
- Git promotion of reviewed candidate not implemented
- NoteLite REAL re-proof deferred (Morris GO distinct)
- Nora model/provider tuning deferred
- `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
```

### `projects/sfia-studio/production-runtime-reference/README.md`

```md
# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Reviewed commit:** `6a4374ed54cf346d16c11b995eec772090c81807`
**Reviewed at:** 2026-10-10T09:35:00+0200
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (Draft PR #574)

## What this corpus is

This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:

- objects and responsibilities;
- end-to-end flows;
- upstream/downstream dependencies;
- persistence / restart / recovery;
- authority / cognition / execution boundaries;
- environments and configuration;
- tests and proof oracles;
- impact-analysis procedure for future changes.

It is the primary **impact-analysis substrate** for future Studio corrections.

## What this corpus is NOT

It does **not** replace:

- doctrine produit v3 (`sfia-v3-framing/**`);
- Build Doctrine / Roadmap (`convergence/**`);
- Product Completion C1 (`product-completion/**`);
- Morris decisions;
- Pilot HumanDecisions;
- the Transmission Guide as pedagogy/history.

It does **not** invent architecture, promote Runtime v3, or change product behavior.

## Source hierarchy (authority of facts)

1. **Git current tree** (code + tests + schemas + config examples)
2. **Deterministic product tests** (behavior oracles — with documented weaknesses)
3. Product Completion / doctrine / Transmission Guide — **guidance / intent / history only**

When docs conflict with code: **code wins**; mark the conflict as a gap.

## Relation to Transmission Guide

| Corpus | Role |
|---|---|
| `sfia-studio-transmission-guide.md` | Bootstrap / why / pedagogy / capitalization chronology |
| `production-runtime-reference/` | Current machine / how it works **now** |

Do not treat the Transmission Guide as the as-implemented oracle.

## Volumes

| File | Purpose |
|---|---|
| [01-system-runtime-overview.md](./01-system-runtime-overview.md) | System map, composition, layers |
| [02-runtime-object-catalog.md](./02-runtime-object-catalog.md) | Runtime objects |
| [03-end-to-end-flow-catalog.md](./03-end-to-end-flow-catalog.md) | E2E flows F01–F20 |
| [04-dependency-impact-map.md](./04-dependency-impact-map.md) | Dependencies + impact procedure + samples |
| [05-environments-configuration-and-boundaries.md](./05-environments-configuration-and-boundaries.md) | Env/config / Fake-Real |
| [06-persistence-restart-and-recovery.md](./06-persistence-restart-and-recovery.md) | Stores + restart matrix |
| [07-authority-invariants-and-failure-modes.md](./07-authority-invariants-and-failure-modes.md) | Invariants + failure modes |
| [08-test-proof-and-conformance-map.md](./08-test-proof-and-conformance-map.md) | Tests / oracles / bypasses |
| [09-known-gaps-reserves-and-current-boundaries.md](./09-known-gaps-reserves-and-current-boundaries.md) | Gaps + campaign findings |
| [production-runtime-reference.manifest.json](./production-runtime-reference.manifest.json) | Machine-readable index |

## Living maintenance contract

For any Studio change touching tracked paths in the manifest:

1. Run **impact analysis** (see volume 04).
2. Review affected object cards, flows, dependencies, invariants.
3. Review env / persistence / restart if applicable.
4. Run mapped regression tests.
5. Update architecture **content** if semantics changed.
6. Refresh digests **only after** human/ChatGPT review of content.
7. Record `NO SEMANTIC IMPACT` when only implementation changed.

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.

## Conformance tooling

- Manifest: `production-runtime-reference.manifest.json`
- Checker script: `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`
- Vitest: `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Explicit non-claims

- Runtime v3 **NON ADOPTED**
- Product Journey **not** declared READY
- E2E REAL **not** declared PROVEN
- PocketTasks campaign gaps are recorded, not fixed here
```

---

## 10. Exclusions préservées

C14, `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, `p6-campaign/*.real.test.ts`, secrets, DB HQA.

## 11. Réserves

1. Visual Figma / Pilot runtime fidelity
2. M-DISP materiality engine
3. Not every Lifecycle transition is chat-first
4. ZERO REAL / P6 GLOBAL PASS / runtime v3 NON ADOPTED
5. Ready/merge require distinct Morris GO

## 12. Verdict

# PRR CONFORMANCE RESTORED — DRAFT PR #574 CI PASS — PENDING MORRIS REVIEW

Gate suivant : Critical PR Review ChatGPT. Aucun Ready/merge.
