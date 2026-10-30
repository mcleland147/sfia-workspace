# R24-NAP-01 — NORA ADAPTIVE PRESENTATION — LIVING PRR SEMANTIC TRUTH-SYNC

**Cycle:** SFIA 8 — Delivery / implémentation documentaire
**Profil:** STANDARD — revue sémantique renforcée
**Typologie:** DOC
**Review Pack:** FULL
**Review Handoff:** REQUIRED / publish-in-cycle
**Timestamp UTC:** `2026-10-30T07:04:35Z`

---

## 1. Timestamp UTC

`2026-10-30T07:04:35Z` (authoring / pack finalization wall-clock).

---

## 2. Git Truth Check

| Check | Result |
|---|---|
| Repo root | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| Origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Branch | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| `origin/main` | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| merge-base(HEAD, origin/main) | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Staged | **none** |
| Project commit this cycle | **NONE** (authorized: documentary WIP only + L3 handoff) |
| WIP Product | **PRESERVED UNCOMMITTED** (Option C + CORR-NAP-01…04 + QA-NAP-01…03 + harness) |
| Destructive git | **NOT USED** (no reset/stash/clean/rebase) |

**Prior Review Handoff (CORR-NAP-04):** tip `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · blob `b1972a63b3f6730e9151bffc26f294fca80a746c`
**QA-NAP-03 handoff:** `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · blob `006daf8f…`

**Git Truth:** COHERENT with contract expectations. Proceed.

---

## 3. Git Review Index

### Modified (documentary — this cycle)

| Path | Role |
|---|---|
| `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md` | F02/F04 pointers + Option C overlay |
| `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md` | Memory B columns / reload vs restart |
| `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md` | Proof index (impact YES) |
| `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` | Reserves matrix overlay |

### Modified (Product Delivery WIP — **not authored this cycle**; preserved)

`actions.ts`, `orchestrateTurn.ts`, `types.ts`, `buildProjectSystemPrompt.ts`, `ConversationSurface.tsx`, `useProductConversation.ts`, `cycleJournalStore.ts`, `cycleJournalTypes.ts`, `index.ts`, `noraProductTurnOutputType.ts`, `productSqliteSession.ts`, `providerAgentsModel.ts`, `runNoraAgentsTurn.ts`, `fakeProvider.ts`, `authenticatedStudioSession.ts` (+ d0 test), `preCycleRoutingBoundary.d0.test.ts`, `e2e-auth-bootstrap.ts`

### Untracked (Product Delivery WIP — preserved)

`noraAdaptivePresentation.ts`, `NoraAdaptivePresentationView.tsx` + `.module.css`, `noraAdaptivePresentation.d0.test.ts`, `noraAdaptivePresentation.ui.test.tsx`, `studio-nora-adaptive-qa-nap01.spec.ts`, `app/__tests__/platform/ai/`

### Review pack (local only — not project-committed)

`.tmp-sfia-review/chatgpt-review.md`

### Diff-stat (PRR only)

```
 03-end-to-end-flow-catalog.md                  | 42 ++++++++++++++++++++++
 06-persistence-restart-and-recovery.md         | 36 +++++++++++++++++++
 08-test-proof-and-conformance-map.md           | 20 +++++++++++
 09-known-gaps-reserves-and-current-boundaries.md | 36 +++++++++++++++++++
 4 files changed, 134 insertions(+)
```

`git diff --check` on PRR: **clean**.

---

## 4. Sources réellement lues

**Processus / méthode (sampled for R24 routing):** cycle execution template · cycle routing guide · rules-and-guardrails posture · prior R24 overlay patterns in PRR.

**Convergence (boundary confirm — not rewritten):** Build Doctrine · Roadmap · Product Completion C1 · doctrines v3 30/32/34/35 — **no writes**.

**PRR read:** README · vols 02/03/04/06/07/08/09 (structure + CURRENT overlays) · manifest.json · checker `app/scripts/check-production-runtime-reference.mjs`.

**Preuves / code (R23 inventory):**
- `noraAdaptivePresentation.ts`, `noraProductTurnOutputType.ts`, `productSqliteSession.ts` (ALTER `presentation_json` / `studio_control_json`), `cycleJournalStore.ts`, `ConversationSurface.tsx`, `NoraAdaptivePresentationView.tsx`, `orchestrateTurn.ts`, `actions.ts`, `useProductConversation.ts`, `fakeProvider.ts`, `preCycleRoutingBoundary` / coherence (CORR-NAP-04), E2E `studio-nora-adaptive-qa-nap01.spec.ts`.
- Handoffs QA-NAP-03 / CORR-NAP-04 (refs above).
- Captures path `.tmp-sfia-review/runtime-captures/nora-adaptive/` (referenced, not re-run LIVE).

**Publisher contract:** `scripts/sfia/README.md` + `publish-review-handoff.sh`.

---

## 5. Convergence Pre-check

| Gate | Result |
|---|---|
| Keep architecture | YES — Option C overlays on existing F02/F04 / Memory B |
| No Build Doctrine / Roadmap / C1 / v3 doctrine mutation | YES |
| No Product code mutation this cycle | YES |
| No SQLite schema invent beyond documenting WIP ALTERs | YES (docs only) |
| No CURRENT ON MAIN promotion | YES — LOCAL CANDIDATE explicit |
| No L3/L4/v3 promotion | YES |
| L3 GLOBAL | remains OPEN |
| EP-S2-08 | remains PARTIAL |
| EP-S2-05 | remains NOT PROVEN |

---

## 6. Trajectoire et capacité v3

| Field | Value |
|---|---|
| Capacité | Nora Adaptive Presentation A3/A4 — Option C |
| Milestone | AKG-M5 / L3-S2 |
| Classification | KEEP architecture · DOCUMENT candidate · COMPLETE doc deltas · VERIFY coherence |
| Exit doc | Sections 03/06/09 (+08 index) synced · provenance candidate explicit · anti-claims · digest gate pending |
| Next capacity | PR readiness / Git Integration — **only after** R24 semantic review + Morris gates |
| Runtime v3 | **NON ADOPTED** |
| L4 | **NOT AUTHORIZED** |

---

## 7. Inventaire code / preuves (R23 delta réel)

### A. Émission Nora
- Schema: nullable `presentation` on Product turn structured output (`noraProductTurnOutputType.ts`).
- Normalize fail-closed; narrative conserved; guidance / LR / journal / reservation compatibility preserved.
- Placement: UI projection only after validation.

### B. Validation / sécurité
- DTO + block limits; strict parse; plain fallback; Studio-owned titles/disclaimers; no free Product CTA; Nora ≠ Product authority.

### C. Persistance
- `pilot_transcript_turns.presentation_json` + `studio_control_json` (TEXT NULL).
- Idempotent ALTER in `productSqliteSession.ts`; historical NULL → plain.
- Continuity after `page.reload()` DET Fake (QA-NAP-03). Server restart **NOT PROVEN**.

### D. UI
- `NoraAdaptivePresentationView` + `ConversationSurface` resolve path; short/composed/compare/reco; provenance; notices/incomplete.

### E. CORR-NAP-04
- `withGuidance` must return local neutralized `lifecycleRecommendation` after Cognitive STOP; DET T1/T5/T9.

### F. Fake / QA
- `__NAP_QA_*__` markers gated `SFIA_STUDIO_E2E_QA_CONTROL`; Better Auth Playwright; `/studio` path; screenshots; reload; STOP browser / LIVE / server restart still open.

---

## 8. Matrice impacts R23/R24

| Volume | Impact | Action |
|---|---|---|
| PRR 03 | YES — F02/F04 adaptive overlay | Synced |
| PRR 06 | YES — Memory B columns / continuity distinctions | Synced |
| PRR 09 | YES — reserves matrix LOCAL CANDIDATE | Synced |
| PRR 08 | YES — proof index for NAP/Fake/Auth/CORR | Synced (documentary index) |
| PRR 02 | NO — presentation ≠ OA Truth C object | NO SEMANTIC / COVERAGE IMPACT |
| PRR 04 | NO — no second graph | NO SEMANTIC / COVERAGE IMPACT |
| PRR 05 | NO — Fake/Auth boundary already QA-scoped; no env frontier rewrite required in 05 | NO SEMANTIC / COVERAGE IMPACT |
| PRR 07 | NO new artificial invariant — STOP/LR already covered via 03/09 + existing cognition≠authority | NO SEMANTIC / COVERAGE IMPACT (no write) |
| PRR README | NO — must not announce CURRENT ON MAIN | NO WRITE |
| Manifest | Digests drifted (expected) — **write NOT authorized** | REFERENCE REVIEW REQUIRED — DOCUMENTARY DIGEST GATE PENDING |

---

## 9. Fichiers PRR modifiés

1. `03-end-to-end-flow-catalog.md`
2. `06-persistence-restart-and-recovery.md`
3. `08-test-proof-and-conformance-map.md`
4. `09-known-gaps-reserves-and-current-boundaries.md`

---

## 10. Contenu créé / sections nouvelles

All changes are **overlays appended / pointers** inside existing volumes (no new architectural files). Full unified diffs in §11.

---

## 11. Diffs complets (PRR)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index fd18c1c3..117f96ba 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -23,6 +23,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Reads:** Product DB Truth C + Nora session continuity action
 - **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
 - **Status:** PARTIAL — transcript availability depends on session DB path colocation
+- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** continuity rehydrate may restore assistant `presentation_json` / `studio_control_json` when present (see dedicated overlay after F04). **≠ CURRENT ON MAIN** · **≠** server restart proven.

 ## F03 — Cycle qualification / activation
 - **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
@@ -47,6 +48,47 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
 - **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
 - **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests
+- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** when a coherent Product turn carries a validated `presentation` DTO, ConversationSurface may render `NoraAdaptivePresentationView` instead of plain prose (coverage + Studio notices). See dedicated overlay below. **≠ CURRENT ON MAIN** · OpenAI LIVE structured emit **NOT PROVEN**.
+
+## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+
+> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · source worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · **Delivery Product bytes UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** L3 GLOBAL CLOSED · **≠** runtime v3 ADOPTED · **≠** OpenAI LIVE / Cursor REAL.
+>
+> **Evidence refs (Git handoffs):** QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · prior CORR-NAP-01…03 / QA-NAP-01…02 as supporting chronology only.
+
+### Flow — Pilot message → adaptive UI (F04 extension; F02 rehydrate)
+
+1. **Pilot message** → Product `orchestrateTurn` / Agents Runner (`runNoraAgentsTurn`) — existing F04 spine unchanged as authority path.
+2. **Structured Product turn** may include nullable `presentation` (Option C DTO) alongside `narrative`, `conversationGuidance`, LR / journal / reservation fields (`noraProductTurnOutputType.ts`).
+3. **Normalize / coherence** (`normalizeNoraProductTurnStructuredOutput` → `applyPreCycleRoutingBoundaryCoherence`): invalid presentation → null (fail-closed, narrative kept); Cognitive STOP / routing gates still own LR (CORR-NAP-04 restores local neutralized LR on return — see vol 07/09).
+4. **Authority split:** `narrative` remains canonical conversational text; `presentation` is **UI projection only** (≠ Truth C, ≠ HumanDecision, ≠ Evidence Product, ≠ CTA).
+5. **Persist (Memory B):** assistant `pilot_transcript_turns` may store `presentation_json` + `studio_control_json` (typed Studio notices) — Nora session SQLite only (vol 06).
+6. **Transport:** send success / continuity actions expose `adaptivePresentation` + `studioControlNotices` to `useProductConversation`.
+7. **Compose UI:** `ConversationSurface` → `resolveAdaptiveAssistantRender` → `NoraAdaptivePresentationView` when coverage allows; else plain bubble text.
+8. **Fallback:** absent/invalid DTO → plain content; forged `[Studio]` in Nora prose is **not** Studio provenance (CORR-NAP-02 typed notices only).
+9. **Reload:** `page.reload()` rehydrates transcript + DTO when columns present (QA-NAP-03 DET browser Fake). **Server process restart NOT PROVEN.**
+
+### Guardrails (as-implemented local)
+
+| Rule | Status |
+|---|---|
+| presentation ≠ Truth C / OA object | DOCUMENTED local |
+| recommendation block ≠ HumanDecision | DOCUMENTED + DET UI |
+| evidence_reserves ≠ validated Product Evidence | DOCUMENTED + DET UI |
+| no free Product CTA from adaptive blocks | DET browser QA-NAP-03 |
+| server Studio notices > forged Nora `[Studio]` | DET unit/UI CORR-NAP-02/03 |
+| Cognitive STOP outranks optimistic LR | DET CORR-NAP-04 |
+| F2 does not auto-gain Nora-generated adaptive DTO as authority | DOCUMENTED — projection only |
+
+### Proof ceiling / anti-claims
+
+- **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** (Better Auth Playwright + Fake NAP QA markers gated `SFIA_STUDIO_E2E_QA_CONTROL=1`) — A4 **STRUCTURAL ALIGNMENT** at reported QA scope · **≠ PIXEL PERFECT** · **≠** shell↔Figma pixel score.
+- **DETERMINISTIC VERIFIED** unit/UI/Fake/coherence suites at tested paths.
+- OpenAI LIVE structured `presentation` emit **NOT PROVEN**.
+- QA-NAP-06 STOP browser / QA-NAP-10 server restart **NOT PROVEN**.
+- Does **not** rewrite CURRENT ON MAIN F04 semantics for Binding/docs_write/Generic PREPARE.
+
+**Paths (local WIP):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `noraProductTurnOutputType.ts`, `cycleJournalStore.ts`, `productSqliteSession.ts`, `features/.../NoraAdaptivePresentationView.tsx`, `ConversationSurface.tsx`, `orchestrateTurn.ts`, `actions.ts`, `useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts`.

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 172ad37c..f774088e 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -29,6 +29,42 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

+## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+
+> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · Product Delivery **UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
+>
+> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts`.
+
+### Columns on `pilot_transcript_turns` (Memory B only)
+
+| Column | Type | Role |
+|---|---|---|
+| `presentation_json` | TEXT NULL | Serialized validated Option C presentation DTO (UI projection); absent/null → plain `content` fallback |
+| `studio_control_json` | TEXT NULL | Serialized Studio-owned typed notices (server authority); forged Nora prose `[Studio]` ≠ this column |
+
+**Migration (local WIP):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.
+
+### Write / read / fallback
+
+| Path | Behavior (local) |
+|---|---|
+| Write | After Product turn normalize: persist validated `presentation` + Studio notices on assistant transcript row (`cycleJournalStore` insert/update paths) |
+| Read | Continuity / transcript load → `presentationJson` / `studioControlJson` → hook → ConversationSurface |
+| Invalid / absent DTO | Fail-closed parse → ignore projection; render canonical `content` |
+| Notices | Restored from `studio_control_json` when present; Studio titles/disclaimers remain Studio-owned |
+
+### Continuity proof distinctions
+
+| Checkpoint | Status | Limit |
+|---|---|---|
+| Browser `page.reload()` | **DETERMINISTIC VERIFIED** at reported Fake QA scope (QA-NAP-03) | Fake markers + Better Auth Playwright only |
+| Local **server** process restart | **NOT PROVEN** (QA-NAP-10 open) | Do not claim Memory B path alone = process restart proof |
+| OpenAI RunState cross-restart | Unchanged — **NOT IMPLEMENTED / DEFER** | Option C does not serialize RunState |
+| F2 proposal process-local | Unchanged | — |
+| Memory B vs Truth C | Columns **only** on Nora session transcript | presentation ≠ OA object · ≠ Evidence · ≠ HumanDecision |
+
+**Paths:** `lib/nora-cognitive-runtime/productSqliteSession.ts` · `cycleJournalStore.ts` · continuity actions / `useProductConversation.ts`.
+
 ## Nora Session vs RunState (PR #577 INTEGRATED ON MAIN)
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 8f6ef32f..77bbe71c 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,6 +9,26 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

+## Overlay — Nora Adaptive Presentation Option C proof index (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+
+> **Impact check R24-NAP-01:** **YES — documentary index only.** New NAP/Fake/Auth oracles, browser QA, and CORR-NAP-04 introduce proof rows that must stay traceable. **No** new CURRENT ON MAIN claim · Product suites remain **UNCOMMITTED WIP** · **≠** REAL · **≠** L3 closed.
+>
+> Evidence handoffs: QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…`.
+
+| Suite / artifact | What it proves | Class |
+|---|---|---|
+| `noraAdaptivePresentation.d0.test.ts` | DTO parse/normalize fail-closed; block limits; legacy `presentation_json` migrate idempotent (CORR-NAP-01 P2); Memory B write/read | **DETERMINISTIC VERIFIED** · local WIP |
+| `noraAdaptivePresentation.ui.test.tsx` | Adaptive compose / fallback / Studio notices / incomplete banner trust / continuity restore | **DETERMINISTIC VERIFIED** · jsdom · local WIP |
+| `preCycleRoutingBoundary` / coherence suites (CORR-NAP-04) | Cognitive STOP → local LR neutralization **returned** (no silent LR revive drop) | **DETERMINISTIC VERIFIED** · local WIP |
+| `fakeProvider` NAP QA markers (`__NAP_QA_*__`) | Deterministic Fake structured presentation emit — gated QA control | **DET Fake** · ≠ OpenAI LIVE |
+| `e2e/studio-nora-adaptive-qa-nap01.spec.ts` | Authenticated Better Auth Playwright + Fake NAP browser runtime; reload continuity; no free CTA | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** · local WIP |
+| Captures `.tmp-sfia-review/runtime-captures/nora-adaptive/` | Structural A4 screenshots at reported QA scope | **STRUCTURAL ALIGNMENT** · ≠ PIXEL PERFECT |
+| QA-NAP-06 STOP browser | — | **NOT PROVEN** |
+| QA-NAP-10 server restart | — | **NOT PROVEN** |
+| OpenAI LIVE structured `presentation` | — | **NOT PROVEN** |
+
+**PRR conformance note:** documentary volumes 03/06/08/09 touched under R24-NAP-01 ⇒ digest mismatch vs committed manifest **expected** until distinct digest regularization GO. Digest MATCH ≠ semantic validity.
+
 ## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)
```

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index e074214d..e5ba8d0a 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,42 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — Nora Adaptive Presentation Option C / AKG-M5 L3-S2 (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+
+| Field | Value |
+|---|---|
+| Capability | Nora Adaptive Presentation A3/A4 — Option C |
+| Authoring date | 2026-10-30 |
+| Git base / HEAD alignment | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) |
+| Branch / worktree | `feat/akg-m5-nora-adaptive-presentation` |
+| Status | **LOCAL CANDIDATE — PRE-INTEGRATION** · Product Delivery **UNCOMMITTED** · **≠ CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** |
+| Evidence refs | QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · CORR-NAP-01…03 / QA-NAP-01…02 supporting · local unit/UI/E2E WIP |
+| PRR sync cycle | R24-NAP-01 (this overlay) — **DOCUMENTARY DIGEST GATE PENDING** (manifest `--write-digests` **NOT** authorized here) |
+
+| Élément | Statut | Preuve | Limite / exit |
+|---|---|---|---|
+| A. Option C Delivery | **LOCAL IMPLEMENTED** (WIP) | Code paths + DET suites local | **≠** ON MAIN · distinct Morris GI GO |
+| B. CORR-NAP-01/02/03 | **DETERMINISTIC VERIFIED** at tested scope | Unit/UI CORR suites | Scope-bounded · ≠ LIVE |
+| C. CORR-NAP-04 Product Turn Coherence (LR return after STOP) | **DETERMINISTIC VERIFIED** | CORR-NAP-04 handoff + `applyPreCycleRoutingBoundaryCoherence` T1/T5/T9 | ≠ browser STOP QA |
+| D. QA navigateur Fake/Auth | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** | QA-NAP-03 + `studio-nora-adaptive-qa-nap01.spec.ts` + captures | Better Auth Playwright · Fake NAP markers · gate `SFIA_STUDIO_E2E_QA_CONTROL` |
+| E. A4 structural | **STRUCTURAL ALIGNMENT** at QA scope | Captures / E2E assertions | **≠ PIXEL PERFECT** · ≠ shell↔Figma score |
+| F. Browser reload | **DETERMINISTIC VERIFIED** at reported scope | QA-NAP-03 `page.reload()` | Fake only |
+| G. Server restart | **NOT PROVEN** | — | QA-NAP-10 open |
+| H. STOP navigateur | **NOT PROVEN** | — | QA-NAP-06 open |
+| I. OpenAI LIVE structured emit | **NOT PROVEN** | — | distinct REAL GO |
+| J. Fake/Real gap | Fake DET ≠ model REAL quality/latency/cost | — | keep ceiling |
+| K. Product Git Integration | **NOT AUTHORIZED / NOT ON MAIN** | — | Morris GI + PR + merge gates |
+| L. PRR semantic sync | **LOCAL DOC CANDIDATE** | R24-NAP-01 volumes 03/06/09 (+08 index) | Manifest digest gate + semantic review **PENDING** |
+
+**Covered (local, not ON MAIN):** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI composition · Memory B columns · Fake QA Auth browser · CORR-NAP-01…04 DET · Cognitive STOP LR coherence unit.
+
+**Preserved L3-S2 reserves (unchanged by NAP):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.
+
+**Exit / next (documentary → integration):** (1) R24 semantic review PASS · (2) distinct manifest digest regularization GO · (3) distinct Morris Product GI / PR / merge · (4) post-merge requalify LOCAL CANDIDATE → CURRENT only after verified merge + proofs · (5) open Product proofs: STOP browser · server restart · OpenAI LIVE structured emit · build/CI on integrated bytes.
+
+**Anti-claims:** ≠ CURRENT ON MAIN · ≠ PR READY · ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · digest MATCH ≠ semantic validity.
+
+**Gates Morris still open:** semantic review of R24-NAP-01 · manifest digest gate · Product commit/PR/merge authorization · any LIVE/REAL/STOP-browser/server-restart proof GOs.

 ## Overlay — AKG-M5 L3-S2 Option B / S8 (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)
```

---

## 12. Classification candidate / current

| Claim | Classification |
|---|---|
| Option C Delivery | **LOCAL CANDIDATE — PRE-INTEGRATION** · UNCOMMITTED · **≠ CURRENT ON MAIN** |
| PRR overlays R24-NAP-01 | **LOCAL DOC CANDIDATE** · digest gate pending |
| Existing PR #618/#623/#626/#612/#614 overlays | **CURRENT ON MAIN** preserved (untouched senses) |
| EP-S2-08 / EP-S2-05 / L3 GLOBAL | Unchanged PARTIAL / NOT PROVEN / OPEN |

---

## 13. Vérifications sémantiques

| Check | Result |
|---|---|
| Affirmations backed by code/proof | YES (paths + handoff refs) |
| Inter-volume contradiction | NONE detected (03↔06↔08↔09 aligned LOCAL CANDIDATE) |
| Premature CURRENT | NONE |
| Authority invent | NONE (presentation ≠ Truth C / HD / Evidence / CTA) |
| Reserves preserved | YES |
| Trailing whitespace / diff --check | CLEAN on PRR |
| Secrets in pack | NONE |
| Product mutation this cycle | NONE |

---

## 14. Résultats checker / digest (lecture seule)

Command (RO, no `--write-digests`):

```text
node projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED
```

Volume digests:

| File | Manifest (old) | Current (new) |
|---|---|---|
| 03-end-to-end-flow-catalog.md | `f68f7167f71016f9` | `496d1e190534e35a` |
| 06-persistence-restart-and-recovery.md | `6fc1d9a4b224a2a2` | `4c13a758cb0f4fd3` |
| 08-test-proof-and-conformance-map.md | `357fb5ba5b423903` | `f6bc6f73585425dd` |
| 09-known-gaps-reserves-and-current-boundaries.md | `66e1ef8ee74259af` | `6ebfc7c9f2163bcb` |

Also observed **trackedSource** digest drift on Product WIP paths (actions, orchestrateTurn, productSqliteSession, cycleJournalStore, fakeProvider, useProductConversation) — expected while Delivery remains uncommitted; **not** regularized here.

**Qualification:** `REFERENCE REVIEW REQUIRED — DOCUMENTARY DIGEST GATE PENDING`
**≠** CONFORMANCE PASS · **≠** PR READY · digest MATCH ≠ semantic validity.

---

## 15. Écarts de manifest

| Item | Status |
|---|---|
| `--write-digests` | **NOT RUN** (forbidden this GO) |
| Manifest file edited | **NO** |
| `lastReviewedCommit` | **UNCHANGED** |
| New components/flows/invariants in manifest | **NONE** |
| Proposal for later gate | After semantic review PASS: refresh four volume digests (± trackedSources only under distinct Product GI/doc gate) |

---

## 16. Fake / Real Qualification

| Field | Value |
|---|---|
| Applicable | OUI |
| External boundary | OpenAI Agents / Structured Outputs |
| Fake | `FakeConversationProvider` NAP QA markers |
| REAL | OpenAI LIVE |
| Entry level | DETERMINISTIC VERIFIED + AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED (reported scope) |
| This cycle target | **DOCUMENTARY SEMANTIC COVERAGE VERIFIED** (pack/handoff for ChatGPT semantic review) |
| Out of scope | REAL BOUNDARY PROVEN · E2E REAL · G-REAL · FULL RESTART PROVEN · L3 CLOSED · v3 ADOPTED |
| New LIVE tests | **NONE** |

---

## 17. Réserves et dettes

- QA-NAP-06 STOP browser **NOT PROVEN**
- QA-NAP-10 server restart **NOT PROVEN**
- OpenAI LIVE structured emit **NOT PROVEN**
- Build/CI on integrated bytes — requalify after GI
- Manifest digest gate pending
- Project uncommitted / not merged
- EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN
- Fake ≠ REAL quality/latency/cost

---

## 18. Conditions de sortie

1. ChatGPT semantic review of this pack / PRR diffs PASS
2. Distinct Morris GO for manifest digest regularization
3. Distinct Morris GO for Product Git Integration / PR / merge
4. Post-merge: requalify LOCAL CANDIDATE → CURRENT only after verified merge + proofs
5. Open Product proofs remain gated separately (STOP browser · server restart · LIVE)

---

## 19. Décisions Morris encore nécessaires

1. **Semantic review verdict** on R24-NAP-01 documentary overlays
2. **Manifest digest regularization** GO (distinct)
3. **Product commit / PR / merge** authorization (distinct)
4. Optional later: LIVE structured emit · STOP browser · server restart proof GOs

---

## 20. Verdict unique

**R24 LOCAL DOCUMENTARY SYNC COMPLETE — SEMANTIC REVIEW REQUIRED — MANIFEST GATE PENDING — PROJECT INTEGRATION NOT AUTHORIZED**

Anti-claims locked: ≠ CURRENT ON MAIN (Option C) · ≠ PR READY · ≠ REAL PROVEN · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED.

---

## ChatGPT instruction (handoff consumer)

À réception: lire ce rapport Git canonique; vérifier Git/currentness; contrôler la totalité des diffs PRR (§11); confronter affirmations au code local rapporté et aux preuves; vérifier absence de promotion implicite; qualifier le manifest gate; rendre le verdict de revue sémantique.

FIN R24-NAP-01 REVIEW PACK FULL.
