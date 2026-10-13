# SFIA STUDIO — P6 PR #579 GOVERNED DOCUMENTARY MERGE
## Review Pack FULL

**Horodatage:** 2026-10-13 12:32:28 CEST
**Typologie:** DOC — GOVERNED DOCUMENTARY INTEGRATION
**Cycle:** 13 — PR readiness / Git Integration — MERGE GATE
**Profil:** CRITICAL
**PR:** #579
**Statut:** MERGED ON MAIN / POST-MERGE VERIFIED

---

## A. Horodatage Europe/Paris

2026-10-13 12:32:28 CEST

## B. Identification cycle/profil

| Champ | Valeur |
|------|--------|
| Projet | SFIA Studio |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Milestone | P6 |
| Chantier | CONSOLIDATED POST-MERGE DOCUMENTARY CLOSURE |
| PR | #579 |
| Cycle | 13 — MERGE GATE |
| Profil | CRITICAL |
| Runtime v3 | NON ADOPTED |

## C. GO Morris

**2026-10-13 — MERGE PR #579 AUTORISÉ** (merge commit).

NON autorisé: Product edits, new project commit, cleanup, REAL, debt auto-closure, force push, branch delete.

## D. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| Worktree | `/Users/morris/Projects/sfia-workspace-prr-consolidated-pr577-pr578` |
| Branche | `docs/pr577-pr578-consolidated-prr-closure` |
| HEAD | `0bbdee5585560bf335c91746d8f991db7fe37c66` |
| origin/main pré-merge | `440066485eaae458ccca188b2c91f8f47bd4987f` |
| Status | seul `.tmp-sfia-review/chatgpt-review.md` dirty |
| Staged | vide |
| Untracked | aucun |

## E. Sources consultées

Build Doctrine; Roadmap; C1; doctrine v3 30–35/37; Nora trajectory 08; Product Simplification 01§12.6 / 02§17 / P6-07; CKC 13/14; PRR README+04; handoff `899b7518` / blob `a89aff83`; CI workflow.

## F. Convergence Pre-check

PR #577/#578 MERGED · RCD-01 INTEGRATED · PR #579 documentary sync · ChatGPT MERGE READINESS PASS · GDR REAL NOT PROVEN · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED · architecture parallèle NONE.

## G. Final Merge Gate

PASS — OPEN · draft entry true · mergeable MERGEABLE · mergeStateStatus CLEAN · 1 commit · 8 files · CI 38378376935 SUCCESS · Required Gate SUCCESS · head/base exacts.

## H. État PR avant merge

OPEN / Draft → Ready / head `0bbdee55…` / base `44006648…` / merged=false.

## I. HEAD/base

Head source: `0bbdee5585560bf335c91746d8f991db7fe37c66`
Base: `440066485eaae458ccca188b2c91f8f47bd4987f`
Branch: `docs/pr577-pr578-consolidated-prr-closure` → `main`

## J. Contrôles CI PR

Run [38378376935](https://github.com/mcleland147/sfia-workspace/actions/runs/38378376935) · headSha `0bbdee55…` · completed success · Detect/Build/Required Gate SUCCESS.

## K. Liste exacte des huit fichiers

```
projects/sfia-studio/production-runtime-reference/README.md
projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

Volumes 01/05/07 unchanged. Product/app/doctrine/roadmap unchanged.

## L. Git Review Index

8 files modified · 88 insertions / 24 deletions · NO PRODUCT PATHS on `44006648..bd3f440c`.

## M. Diff documentaire exploitable

Source commit `0bbdee55` (integrated via merge `bd3f440c`):

```diff
commit 0bbdee5585560bf335c91746d8f991db7fe37c66
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Oct 13 11:43:07 2026 +0200

    docs(studio): consolidate PR577 and PR578 runtime reference

    Consolidate post-merge Nora P0/P1/P2/TV01
    and RCD-01 documentary reliability reference.

    Document semantic impact for OBJ-TURN-ORCH/F04.

    Preserve deterministic/REAL proof boundaries.

    Debts remain pending integration and Morris closure.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index ec33e46d..b868cf56 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -172,12 +172,19 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 ## OBJ-TURN-ORCH — Project assistant / Nora turn orchestration

 - **Purpose:** Product/Nora turn spine — `orchestrateTurn` → `runNoraCognitiveTurn` → Agents Runner (`runNoraAgentsTurn`).
-- **Paths:** `features/project-assistant/orchestrateTurn.ts`, `actions.ts`, `f2/orchestrateF2.ts`, `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (+ Runner helpers `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts` — some untracked in manifest).
-- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling **10**, not experimental 12). Explicit **finite** `maxTurns` remains tests/eval override. Explicit **NaN / ±Infinity** fail-closed via existing `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback).
+- **Paths:** `features/project-assistant/orchestrateTurn.ts`, `actions.ts`, `f2/orchestrateF2.ts`, `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (+ Runner helpers `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, `readCoverage.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` — some untracked in manifest). Tool path: `lib/platform/repository/gitLocalReadAdapter.ts`, `lib/platform/tools/toolRouter.ts` (`prepareGitLocalReadDataForModel`), `lib/platform/security/redaction.ts`.
+- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling **10**, not experimental 12). Explicit **finite** `maxTurns` remains tests/eval override. Explicit **NaN / ±Infinity** fail-closed via existing `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback). Natural mono-file documentary synthesis prompts may elevate Focused (≥8, ≤10) without raising the FinOps ceiling.
 - **Controlled continuation (P2):** within one Product turn, `MaxTurnsExceededError.state` may resume with absolute `maxTurns` raised toward mission budget; campaign clamps remain imperative.
 - **Status honesty (P0):** `limitReached` → Product status `incomplete` (≠ `ok`, ≠ `cognitive_stop`). Incomplete must not materialize durable LR/ACW illegitimately.
+- **Documentary reliability (RCD-01 / PR #578 INTEGRATED ON MAIN):**
+  - Mono-file documentary guidance may be appended to system instructions (bounded; not a dedicated GDR engine).
+  - `git_local_read_file` returns complete-line coverage only; `truncated` ≠ `documentHasMore`; `hasMore` = document remainder **or** content cut.
+  - Secrets are redacted **before** complete-line accounting; content is never rebuilt from raw secret lines.
+  - Final model-visible JSON envelope is budgeted; coverage fields are reconciled to the payload actually returned (no silent mid-line credit; no false FULL).
+  - Envelope-only oversized lines emit `lineExceedsCap` and advance `nextStartLineHint` (bounded skip; no mid-line offset protocol).
+  - Soft maxTurns exhaustion discloses honest incomplete documentary perimeter from tool results when facts exist.
 - **Invariant:** INV-COG-NE-AUTH — Nora cognition ≠ Product authority.
-- **Non-claims:** no durable RunState across process restart; no Product client `maxTurns` DTO; Runtime v3 not adopted.
+- **Non-claims:** no durable RunState across process restart; no Product client `maxTurns` DTO; no dedicated documentary engine; Runtime v3 not adopted; GDR REAL quality not proven.

 ## OBJ-MEMORY-B — ProductSqliteSession / Memory B

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index bd6f379b..68f813a5 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -30,7 +30,8 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
-- **Nora autonomy (PR #577 candidate — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality.
+- **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
+- **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
 - **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
 - **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 01afe429..b9ad266f 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -108,7 +108,7 @@ LifecycleSurface / lifecyclePresentation

 Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.

-## Sample impact analysis D — Nora P0/P1/P2 (PR #577 candidate)
+## Sample impact analysis D — Nora P0/P1/P2 (PR #577 INTEGRATED ON MAIN)

 **Changed tracked paths (digest drift at sync):**
 - `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
@@ -125,13 +125,36 @@ Untracked but behaviorally central (documented, digests not expanded): `runNoraA
 | Invariants | INV-COG-NE-AUTH; INV-MEMB-NE-TRUTHC; INV-NO-SILENT-HD; FinOps numeric fail-closed; INV-FAKE-REAL-SM |
 | Persistence | Session SQLite history between Product turns; RunState **in-process same turn only**; cross-restart RunState DEFER |
 | Authority | Nora candidate ≠ Product authorization / HD |
-| Fake/Real | DETERMINISTIC proven at PR #577 scope; REAL documentary quality NOT PROVEN |
+| Fake/Real | DETERMINISTIC proven at PR #577 scope (merged `d8ceb8ad`); REAL documentary quality NOT PROVEN |
 | Tests | `p6.nora.p0.*`, `p6.nora.p1.*`, `p6.nora.p1p2.*`, `mw6.pre-real.budget-hardening` NUM-CLAMP / R-PRE-REAL-08A, `runner.d0`, `orchestrateTurn.test` |
 | Docs | volumes 01, 02, 03, 04, 06, 08, 09 + README overlay |
 | Digests | refreshed **after** content review + Morris GO on this sync pass |

 **SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).

+## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)
+
+**Changed Product paths (historical semantic change; already on main @ `44006648`):**
+- `lib/platform/repository/gitLocalReadAdapter.ts` → Git read / coverage accounting
+- `lib/platform/tools/toolRouter.ts` → final model-visible envelope (`prepareGitLocalReadDataForModel`)
+- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH (documentary guidance hook); tracked digest `f4804915f8906eda`
+- `lib/nora-cognitive-runtime/readCoverage.ts`, `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` → coverage / restitution / Focused elevation (several untracked in manifest)
+
+**This documentary pass:** NO NEW PRODUCT CODE CHANGE — Living Reference sync only.
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT = YES** on F04 documentary acquisition); tool/Git adapter adjacent |
+| Direct deps | OBJ-MEMORY-B (Session tool results); OBJ-CWP/adaptive budget adjacent; platform tools/redaction |
+| Transitive | Product conversation UI consumers of incomplete / coverage disclosure; REC-01 coverage readers |
+| Flows | **F04 primary**; F02 / F15 / F19 adjacent (Session / tests) |
+| Invariants | INV-COG-NE-AUTH; INV-FAKE-REAL-SM; FinOps ceilings unchanged (≤10 / 12000); no silent HD / Deliverable invent |
+| Persistence | **None changed** — Session/tool results only; no new tables; RunState cross-restart still DEFER |
+| Authority | ToolRouter gains no Product authority; Nora candidate ≠ HD |
+| Fake/Real | DETERMINISTIC R1–R7 proven at tested scope; **GDR REAL NOT PROVEN** |
+| Tests | `p6.nora.min09.documentaryReliability.d0.test.ts` (+ P1/P2/Session regressions) |
+| Docs | volumes 02, 03, 04, 06, 08, 09 + README; debt `RCD-01-PRR-SEMANTIC-COHERENCE` documentary correction prepared / integration pending |
+
 ## Component → flows (summary)

 | Component | Flows |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 25f5c293..a199efbb 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -21,7 +21,9 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

-## Nora Session vs RunState (PR #577 candidate)
+## Nora Session vs RunState (PR #577 INTEGRATED ON MAIN)
+
+**RCD-01 / PR #578 persistence note:** documentary reliability correction **does not** introduce new persistence. Coverage/redaction/envelope reconciliation are in-process tool + turn path behaviors. Session continues to store tool results as Agent items under existing `ProductSqliteSession` rules. RunState cross-restart remains **DEFER**. No new tables, migrations, or provider routing.

 | Kind | Lifetime | Role |
 |---|---|---|
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 2c8f37a1..c7442607 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -18,7 +18,8 @@
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
-| F04 Nora autonomy P0/P1/P2 (PR #577 candidate) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality |
+| F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
+| F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
 | F01 greenfield | greenfield continuity tests on main | #531 |
@@ -45,7 +46,7 @@
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**

-## Nora autonomy P0/P1/P2 oracles (PR #577 candidate)
+## Nora autonomy P0/P1/P2 oracles (PR #577 INTEGRATED ON MAIN)

 | Oracle | Level | Notes |
 |---|---|---|
@@ -56,6 +57,18 @@
 | Campaign remaining clamps mission | DETERMINISTIC | documentary mission / budget-hardening |
 | REAL documentary quality / P6 GLOBAL PASS | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this chantier |

+## Documentary reliability RCD-01 oracles (PR #578 INTEGRATED ON MAIN)
+
+| Oracle | Level | Notes |
+|---|---|---|
+| R1 — returned range / partial-line never credited; `truncated` ≠ `documentHasMore` | DETERMINISTIC | adapter + coverage parse |
+| R2 — soft maxTurns restitution discloses honest incomplete perimeter from tool crumbs | DETERMINISTIC Runner/ScriptedModel | Session text items |
+| R4 — redaction does not block progression; no secret reintroduction in adapter/tool/Session/events | DETERMINISTIC | fiction fixtures matching `redaction.ts` |
+| R5 — final model-visible envelope metadata matches complete lines actually delivered | DETERMINISTIC ToolRouter | ceiling 12000 |
+| R6 — adapter-fit / envelope-unfit line → `lineExceedsCap` + monotone skip (no loop) | DETERMINISTIC | fail-closed RESULT_CAPPED when meta alone cannot fit |
+| R7 — security fixtures regex-conformant; positive + negative redaction assertions | DETERMINISTIC | evidence fidelity |
+| GDR REAL / Product READY / Runtime v3 | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this lot |
+
 ## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

 | Proof | Level | Notes |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 54c246cc..f345e1b3 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,20 +5,36 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

-## Overlay — Nora autonomy PR #577 (Draft candidate, not merged)
+## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

 | Item | Status |
 |---|---|
-| P0 incomplete Status Honesty (Chat-first + panel) | AS-IMPLEMENTED on PR #577 candidate — DETERMINISTIC |
+| P0 incomplete Status Honesty (Chat-first + panel) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
 | P1 Adaptive Runner Budget (5/8/10, ceiling 10) | AS-IMPLEMENTED — DETERMINISTIC |
 | P2 Controlled Continuation (same-turn RunState) + Session-on-resume | AS-IMPLEMENTED — DETERMINISTIC |
-| Explicit non-finite `maxTurns` fail-closed (CI Correction) | AS-IMPLEMENTED locally → integrated on this sync commit |
+| Explicit non-finite `maxTurns` fail-closed (CI Correction) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
 | **FPPC-RES-01** — prior user utterance not a Session `role:user` AgentInputItem under observed SDK prepare | OPEN residual / NON-BLOCKING |
 | **P0-EFFECT-02** store-level incomplete effects | NOT PROVEN |
 | Cross-restart RunState persistence | **DEFER** (architecture GO required) |
 | Eval/explicit `maxTurns` > adaptive ceiling 10 | NON-BLOCKING (tests/eval only; not Product DTO) |
 | Documentary quality REAL / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
 | Runtime v3 | **NON ADOPTED** |
+| Debt **DOC-PR577-POSTMERGE-SYNC** | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** |
+
+## Overlay — Documentary reliability RCD-01 / PR #578 (INTEGRATED ON MAIN)
+
+| Item | Status |
+|---|---|
+| Complete-line Git coverage + honest `truncated`/`documentHasMore` | AS-IMPLEMENTED on main @ `44006648` — DETERMINISTIC |
+| Secret redaction before coverage accounting | AS-IMPLEMENTED — DETERMINISTIC |
+| Final model-visible envelope coverage truth (cap 12000) | AS-IMPLEMENTED — DETERMINISTIC |
+| Envelope oversized-line skip (`lineExceedsCap`) | AS-IMPLEMENTED — explicit skip; **no mid-line offset protocol** |
+| Soft maxTurns honest documentary disclosure | AS-IMPLEMENTED — DETERMINISTIC |
+| FinOps ceilings (≤10 / 12000) | UNCHANGED |
+| R1–R7 | CLOSED AT DETERMINISTIC TESTED SCOPE |
+| Dedicated GDR engine / parallel architecture | **NONE** |
+| GDR REAL T1 / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
+| Debt **RCD-01-PRR-SEMANTIC-COHERENCE** (OBJ-TURN-ORCH / F04; SEMANTIC IMPACT=YES) | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** (digest ≠ semantic closure until Git-integrated + Morris accept) |
 - PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
 - ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
 - CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index ff1a1fa0..f502bf76 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,14 +1,16 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
-**Reviewed at:** 2026-10-10T21:48:00+0200
+**Corpus historical Reviewed commit (REC-01 / prior overlays):** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` @ 2026-10-10T21:48:00+0200 — not a claim that the entire corpus was re-audited in this pass.
+**Nora post-merge status sync (scoped):** merge `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` · reviewed at 2026-10-12 (Europe/Paris) — Git/status requalification of PR #577 overlays; later consolidated with PR #578 (see below). **Not** a full Living Reference re-audit of the entire corpus.
+**Consolidated documentary closure (scoped):** baseline runtime `440066485eaae458ccca188b2c91f8f47bd4987f` (main after PR #578) · reviewed at 2026-10-13 (Europe/Paris) — Nora Product overlays PR #577 + RCD-01/PR #578 only; **not** a full Living Reference re-audit.
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
 **Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
 **First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
 **REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09
-**Nora autonomy overlay (candidate):** P6 / **PR #577 (Draft, not merged)** — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns` restored (CI Correction Pass 01). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. ZERO REAL. Runtime v3 **NON ADOPTED**. Volumes 01 / 02 / 03 / 04 / 06 / 08 / 09 + digests.
+**Nora autonomy overlay (INTEGRATED ON MAIN):** P6 / **PR #577 MERGED** @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (mergedAt 2026-10-12T12:53:30Z) — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns`. Post-merge CI: [run 38251916421](https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421) SUCCESS (Required Gate PASS). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. REAL **NOT PROVEN**. Runtime v3 **NON ADOPTED**.
+**RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.

 ## What this corpus is

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 4dd9057f..dd1d89b0 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "95ebe42c5c4ecc5a662241171ee1e03eb3010b52",
-  "lastReviewedAt": "2026-10-12T14:23:24+02:00",
+  "lastReviewedCommit": "440066485eaae458ccca188b2c91f8f47bd4987f",
+  "lastReviewedAt": "2026-10-13T11:17:40+02:00",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "5d82151d25ffcfca"
+      "sha256_16": "b982c5cbfe20af6c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,15 +15,15 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "efafc11154b86fe1"
+      "sha256_16": "cc17e518466f6b38"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "cfb2e852e13ad587"
+      "sha256_16": "87063a056923917c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "356689dccb46b102"
+      "sha256_16": "7b4089cd4fbb4e17"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "cae47e899f4d07cc"
+      "sha256_16": "a67fd0fb0c858962"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "268f641ce0004f76"
+      "sha256_16": "25fb9a38f1eca0f9"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "ee816d0da3ff7a63"
+      "sha256_16": "4582c1d2695a5f76"
     }
   ],
   "components": [

```

## N. Référence handoff précédent

Commit `899b751845b7f544fe3eec3848ba2f6c5ca1560d` · blob `a89aff8320ac6a657e70d2e80590d8d5ea317445`

## O. Draft → Ready

`gh pr ready 579` · draft=false · head/base inchangés · checks SUCCESS · mergeable CLEAN.

## P. Merge SHA

| Champ | Valeur |
|-------|--------|
| Method | merge commit |
| merge_commit_sha | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| merged_at | 2026-10-13T10:23:19Z |
| PR state | MERGED / CLOSED |
| URL | https://github.com/mcleland147/sfia-workspace/pull/579 |

## Q. Preuve main

- `origin/main` = `bd3f440c749a059d73fb76e09bb1d0ce91e27af4`
- source `0bbdee55` is ancestor of main
- eight PRR paths present on main
- diff main vs pre-merge base = eight PRR files only

## R. Digests/manifeste (main)

| Champ | Valeur |
|-------|--------|
| lastReviewedCommit | `440066485eaae458ccca188b2c91f8f47bd4987f` (runtime baseline — NOT replaced by merge SHA) |
| lastReviewedAt | `2026-10-13T11:17:40+02:00` |
| runNoraCognitiveTurn.ts sha256_16 | `f4804915f8906eda` |

## S. CI post-merge

| Champ | Valeur |
|-------|--------|
| Workflow | SFIA Studio CI |
| Event | push (main) |
| Run ID | **38383013250** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/38383013250 |
| headSha | `bd3f440c749a059d73fb76e09bb1d0ce91e27af4` |
| status | completed |
| conclusion | **success** |

Jobs: Detect SUCCESS · Build and validate SUCCESS · Required Gate SUCCESS.

## T. Required Gate

**PASS** (post-merge run 38383013250).

## U. Fake/Real Qualification

DOCUMENTARY MERGE ONLY · ZERO OpenAI REAL · DETERMINISTIC proofs historical for #577/#578 · GDR REAL / P6 GLOBAL / Product READY / Runtime v3 ADOPTED: **NOT CLAIMED**.

## V. Dettes et réserves

| Item | Qualification |
|------|---------------|
| DOC-PR577-POSTMERGE-SYNC | DOCUMENTARY INTEGRATION PROVEN · DEBT EXIT EVIDENCE AVAILABLE — **MORRIS CLOSURE DECISION PENDING** (NOT auto-CLOSED) |
| RCD-01-PRR-SEMANTIC-COHERENCE | DOCUMENTARY INTEGRATION PROVEN · DEBT EXIT EVIDENCE AVAILABLE — **MORRIS CLOSURE DECISION PENDING** (Owner Morris) |
| SEMANTIC IMPACT (RCD-01 historical Product) | YES (OBJ-TURN-ORCH / F04) |
| NO NEW PRODUCT CODE (#579) | YES |
| FPPC-RES-01 | OPEN |
| P0-EFFECT-02 | NOT PROVEN |
| RunState cross-restart | DEFER |
| lineExceedsCap | AS-IMPLEMENTED |
| GDR REAL | NOT PROVEN |
| P6 GLOBAL | NOT PASSED |
| Runtime v3 | NON ADOPTED |

## W. Exit proof

PR merged · merge SHA identified · main tip = merge · source in ancestry · 8 files integrated · CI post-merge SUCCESS · Required Gate PASS · handoff to publish.

## X. Gates restants

1. Morris debt closure decision (DOC-PR577 + RCD-01-PRR)
2. Human QA REAL T1 — GO distinct
3. Cleanup branches/worktrees — NOT authorized this pass

## Y. Verdict

**PR #579 MERGED ON MAIN / DOCUMENTARY INTEGRATION VERIFIED / POST-MERGE CI PASS / DEBT CLOSURE AWAITING MORRIS**

## Z. Instruction ChatGPT

Lire ce handoff distant. Vérifier PR #579 merged, merge SHA `bd3f440c…`, main HEAD, source `0bbdee55` intégré, 8 fichiers PRR, absence Product, manifeste/digests, CI post-merge 38383013250 + Required Gate, dettes (EXIT EVIDENCE / closure PENDING), réserves, absence cleanup. Préparer qualification de clôture documentaire **sans la consommer**. Aucun test REAL.

---
FIN REVIEW PACK FULL — PR #579 GOVERNED DOCUMENTARY MERGE
