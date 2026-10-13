# SFIA STUDIO — P6 CONSOLIDATED POST-MERGE DOCUMENTARY CLOSURE
# PR #577 + PR #578

**Review Pack level:** FULL
**Cycle:** 14 — Post-merge
**Profil:** CRITICAL
**Typologie:** DOC — POST-MERGE / CONSOLIDATED REFERENCE SYNC
**Timestamp:** 2026-10-13 11:19:15 CEST
**GO Morris:** 2026-10-13 — REGROUPEMENT ET CONSTRUCTION DOCUMENTAIRE LOCALE AUTORISÉS (consommé)
**GO Git Integration / REAL:** NON AUTORISÉS

---

## A. Horodatage Europe/Paris

2026-10-13 11:19:15 CEST

## B. Identification / cycle / profil

| Champ | Valeur |
|---|---|
| Projet | SFIA Studio |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Chantier | CONSOLIDATED POST-MERGE DOCUMENTARY CLOSURE |
| Dettes | DOC-PR577-POSTMERGE-SYNC + RCD-01-PRR-SEMANTIC-COHERENCE |
| Cycle | 14 — Post-merge |
| Profil | CRITICAL |

## C. GO Morris

Autorisé: lecture Git, inventaire, préservation, worktree isolé, réconciliation, analyse d'impact, PRR docs, digests, conformance, Review Pack FULL, handoff L3.
Non autorisé: commit/push/PR/merge projet, cleanup branches/worktrees, runtime Product, doctrine/roadmap/C1, REAL, Human QA T1.

## D. Local Git Truth Check

### Worktree consolidé (deliverable)

```
pwd: /Users/morris/Projects/sfia-workspace-prr-consolidated-pr577-pr578
branch: docs/pr577-pr578-consolidated-prr-closure
HEAD (= origin/main): 440066485eaae458ccca188b2c91f8f47bd4987f
origin/main: 440066485eaae458ccca188b2c91f8f47bd4987f
expected main: 440066485eaae458ccca188b2c91f8f47bd4987f
match: TRUE
```

### git status --short (consolidé)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

### Worktree historique (préservé)

```
path: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
HEAD: d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc (detached; branch docs/pr577-post-merge-documentary-closure exists @ same SHA)
7 fichiers PRR staged preserved (copie + cached.diff @ /tmp/prr-hist-pr577-preserve/)
```

Historical staged stat:

```
 .tmp-sfia-review/chatgpt-review.md                 | 706 +++++++++++++++++----
 .../03-end-to-end-flow-catalog.md                  |   2 +-
 .../04-dependency-impact-map.md                    |   4 +-
 .../06-persistence-restart-and-recovery.md         |   2 +-
 .../08-test-proof-and-conformance-map.md           |   4 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |   6 +-
 .../production-runtime-reference/README.md         |   6 +-
 .../production-runtime-reference.manifest.json     |  16 +-
 8 files changed, 589 insertions(+), 157 deletions(-)

```

## E. Sources consultées

Build Doctrine, Roadmap, C1, framing v3 30–37 applicables, trajectoire Nora 08, Product Simplification P1§12.6 / P2§17, P6 QA, CKC 14, process v2.6, PRR README+volumes+manifest, handoff historique `89739ce8` / blob `3859e272`, handoff PR #578 `6eccce57` / blob `9cc724c0`.

## F. Convergence Pre-check

Capacité: analyse documentaire Nora dans Product Operating Loop.
État: PR #577/#578 MERGED+CI PASS; R1–R7 CLOSED AT DETERMINISTIC TESTED SCOPE; GDR REAL NOT PROVEN; P6 GLOBAL NOT PASSED; Runtime v3 NON ADOPTED.
Gaps traités localement: G1–G4 (status Git, métadonnées, mécanismes RCD-01, dette sémantique décrite).
Architecture parallèle: NONE.

## G. PR #577 — merge/CI

MERGED. Merge `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc`. Post-merge CI `38251916421` SUCCESS. P0/P1/P2/TV01 INTEGRATED. Réserves FPPC-RES-01 / P0-EFFECT-02 / RunState DEFER conservées.

## H. PR #578 — merge/CI

MERGED. Merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8d…`). Post-merge CI `38361885447` SUCCESS; Required Gate PASS. RCD-01 DETERMINISTIC AT TESTED SCOPE. SEMANTIC IMPACT=YES (OBJ-TURN-ORCH / F04).

## I. Handoff historique récupéré

Commit `89739ce89e899eeefc2d8699bf5fa9cd651ef548` — POST-MERGE DOCUMENTARY CLOSURE 01 (7 fichiers). Contenu réutilisé comme base de réconciliation.

## J. État des sept modifications historiques

Présentes staged sur worktree historique @ `d8ceb8ad`. Copie sûre: `/tmp/prr-hist-pr577-preserve/`. Worktree historique **non écrasé**.

## K. Stratégie de reprise et préservation

1. Inventaire + copie diff/cached + copies fichiers.
2. Nouveau worktree `docs/pr577-pr578-consolidated-prr-closure` depuis `origin/main` (`44006648`).
3. Réapplication contrôlée des markdown historiques (pas le manifeste historique).
4. Complément RCD-01.
5. Manifeste = main + métadonnées scoped + digests volumes après revue.
6. Digest `runNoraCognitiveTurn.ts` **préservé** `f4804915f8906eda` (vérifié vs source).

## L. Analyse d'impact PR #578

Voir volume 04 — Sample impact analysis E. SEMANTIC IMPACT=YES. NO NEW PRODUCT CODE CHANGE ce passage.

## M. Composants / flows / invariants

OBJ-TURN-ORCH / F04 primary; INV-COG-NE-AUTH; FinOps ≤10 / 12000; persistence unchanged; Fake/Real SM.

## N. Réconciliation documentaire PR #577

Mentions « Draft / candidate / not merged » pour le **statut Git** de PR #577 requalifiées en **INTEGRATED ON MAIN** (README, 03, 04, 06, 08, 09). Mentions « candidate » non liées au statut PR #577 conservées.

## O. Complément documentaire RCD-01

Mécanismes documentés (guidance mono-fichier, coverage, redaction, envelope, lineExceedsCap, restitution maxTurns, observabilité, FinOps, R1–R7) sans coller le code intégral. Pas de moteur GDR dédié.

## P. Fichiers créés/modifiés

**Créés:** aucun fichier documentaire nouveau.
**Modifiés (8):** README, 02, 03, 04, 06, 08, 09, manifest.json.
**01 / 05 / 07:** non modifiés (impact couvert via 02/03/04).
**Runtime app/**: NON modifié.

### git diff --name-status

```
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

### git diff --stat

```
 .../02-runtime-object-catalog.md                   | 13 ++++++++---
 .../03-end-to-end-flow-catalog.md                  |  3 ++-
 .../04-dependency-impact-map.md                    | 27 ++++++++++++++++++++--
 .../06-persistence-restart-and-recovery.md         |  4 +++-
 .../08-test-proof-and-conformance-map.md           | 17 ++++++++++++--
 ...9-known-gaps-reserves-and-current-boundaries.md | 22 +++++++++++++++---
 .../production-runtime-reference/README.md         |  8 ++++---
 .../production-runtime-reference.manifest.json     | 18 +++++++--------
 8 files changed, 88 insertions(+), 24 deletions(-)

```

## Q. Git Review Index

| Artefact | Réf |
|---|---|
| Consolidated WT | `/Users/morris/Projects/sfia-workspace-prr-consolidated-pr577-pr578` |
| Branch | `docs/pr577-pr578-consolidated-prr-closure` |
| Baseline | `44006648` |
| Historical WT | `sfia-workspace-p6-rec01-human-qa` @ `d8ceb8ad` |
| Preserve | `/tmp/prr-hist-pr577-preserve/` |

## R. Diff utile complet

```diff
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

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/README.md`

```markdown
# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Corpus historical Reviewed commit (REC-01 / prior overlays):** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` @ 2026-10-10T21:48:00+0200 — not a claim that the entire corpus was re-audited in this pass.
**Nora post-merge status sync (scoped):** merge `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` · reviewed at 2026-10-12 (Europe/Paris) — Git/status requalification of PR #577 overlays; later consolidated with PR #578 (see below). **Not** a full Living Reference re-audit of the entire corpus.
**Consolidated documentary closure (scoped):** baseline runtime `440066485eaae458ccca188b2c91f8f47bd4987f` (main after PR #578) · reviewed at 2026-10-13 (Europe/Paris) — Nora Product overlays PR #577 + RCD-01/PR #578 only; **not** a full Living Reference re-audit.
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
**REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09
**Nora autonomy overlay (INTEGRATED ON MAIN):** P6 / **PR #577 MERGED** @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (mergedAt 2026-10-12T12:53:30Z) — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns`. Post-merge CI: [run 38251916421](https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421) SUCCESS (Required Gate PASS). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. REAL **NOT PROVEN**. Runtime v3 **NON ADOPTED**.
**RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.

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

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md`

```markdown
# 02 — Runtime Object Catalog

**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (REC-01 overlay; prior harvest retained)**

Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**. Fields marked UNKNOWN when not confirmed in harvest.

## OBJ-PROJECT — Project

- **Purpose:** Durable product container (name, objective, binding, workspace key).
- **SoT / persistence:** `oa_projects` (+ payload_json) via OA project store.
- **Create:** `RuntimeApplicationService.createProject` / LocalProjectComposition.
- **Upstream:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`).
- **Downstream:** LPS, trajectories, cycles, decisions, contracts.
- **Paths:** `lib/oa/project/**`, `lib/vertical-slice-runtime/service.ts`
- **Restart:** survives product DB.

## OBJ-REPO-BINDING — RepositoryBinding

- **Purpose:** Explicit GitHub identity/remote/branch/pathRoot for Project.
- **SoT:** Project payload / binding fields — server-owned; never client-authored.
- **Paths:** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`
- **Authority:** configuration ≠ authority; enables docs_write composition.

## OBJ-LPS — LivingProjectState

- **Purpose:** Versioned living state; current pointer `oa_lps_current`.
- **Persistence:** `oa_lps`, `oa_lps_current` (OCC via version).
- **Paths:** `lib/oa/project/**`
- **Downstream:** activeCycleInstanceId, ckcResolutionRef projections.

## OBJ-CYCLE — CycleInstance

- **Purpose:** Governed cycle execution unit (type, profile, status).
- **Persistence:** `oa_cycle_instances`.
- **Paths:** `lib/oa/cycle/**`, `pilotLifecycleActions.ts`
- **Invariant:** Project ≠ CycleInstance; old-cycle HD ≠ current authority.

## OBJ-CYCLE-TYPE — CycleType / Catalog

- **Purpose:** Catalogued cycle types + CKC refs + workspace segments.
- **Paths:** `lib/oa/cycle/domain/cycleTypeCatalog.ts`
- **Example:** `cyc:functional-design` drives F14 obligation snapshot when repo-backed.

## OBJ-CKC — CKC / CkcResolution

- **Purpose:** Cycle Knowledge Contract qualification/consumption for cycle type.
- **Paths:** `lib/oa/cycle/domain/ckc*.ts`, F2 `ckcCognitiveContext.ts`
- **Failure codes:** `CKC_*` (see volume 07).

## OBJ-TRAJECTORY — ProjectTrajectory

- **Purpose:** Versioned project trajectory; current pointer with OCC token.
- **Persistence:** `oa_project_trajectories`, `oa_project_trajectory_current`.
- **Paths:** cycle/project trajectory services; greenfield continuity readers.

## OBJ-PROPOSAL — F2 Proposal

- **Purpose:** Structured decision subject presented to Pilot (DECISION_REQUIRED).
- **Persistence:** **process-local** `f2/proposalStore.ts` (Map on globalThis).
- **Notice:** `F2_PROCESS_LOCAL_NOTICE` — conversation/proposal not durable aggregate.
- **Downstream:** HumanDecision via `recordDecision.ts`.
- **Restart:** NOT sole restart authority; subject may need reconstruction/requalification.

## OBJ-PENDING-SUBJECT / OptionSet

- **Purpose:** Effective decision subject / presented options for Pilot.
- **Maturity:** PARTIAL as standalone named aggregate — carried inside Proposal DTO / epistemic markers.
- **Paths:** proposal types, epistemic items table `oa_epistemic_items`.

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

## OBJ-RESERVATION — Reservation

- **Purpose:** Bounded reservation context for piloting (cognitive / cycle reservation).
- **Paths:** `reservationInteractionContext.ts`, nora reservation modules.
- **Authority:** recommendation-class; not execution grant.

## OBJ-HD — HumanDecision

- **Purpose:** Durable Pilot decision (accept/refuse/…); authority evidence scoped.
- **Persistence:** `oa_human_decisions`.
- **Paths:** `lib/oa/decision/**`, `f2/recordDecision.ts`, obligation policy HDs in `pilotLifecycleActions.ts`
- **Examples:** Proposal accept; `OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

## OBJ-DECISION-BASIS — DecisionBasis

- **Purpose:** Sealed WHAT/scope feeding ExecutionContract preparation.
- **Paths:** execution-contract domain / F2 accept path.
- **Invariant:** EC cannot expand DecisionBasis WHAT.

## OBJ-CONFIRMATION — Confirmation

- **Purpose:** Explicit confirmation records (≠ HumanDecision).
- **Persistence:** `oa_confirmations`.
- **Invariant:** HumanDecision ≠ Confirmation.

## OBJ-EC — ExecutionContract

- **Purpose:** Prepared execution contract after required Pilot decision/authority.
- **Persistence:** `oa_execution_contracts`.
- **Paths:** `lib/oa/execution-contract/**`
- **Gate:** no EC before required Proposal HD (product path).

## OBJ-INSPECTION — InspectionAttestation

- **Purpose:** EC inspection attestation before launch.
- **Persistence:** `oa_ec_inspection_attestations`.

## OBJ-AUTH-RECEIPT — AuthorityVerificationReceipt

- **Purpose:** Durable authority verification evidence.
- **Persistence:** `oa_authority_verification_receipts`.
- **Invariant:** Capability ≠ Authority.

## OBJ-CAPABILITY — AgentCapability

- **Purpose:** Declared agent capabilities (e.g. `cap:cursor.docs_write`).
- **Authority:** capability presence ≠ permission to execute.

## OBJ-ATTEMPT — ExecutionAttempt

- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
- **Invariant:** Attempt terminal ≠ Product Result PROVEN.

## OBJ-ARTIFACT — Artifact obligation / materialization

- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
- **Continuation gate:** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
- **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority.

## OBJ-EVIDENCE — Evidence

- **Purpose:** Durable evidence records tied to attempts/artifacts.
- **Persistence:** `oa_evidence` (+ idempotency).

## OBJ-RB — ReviewBundle

- **Purpose:** Review bundle aggregation over evidence.
- **Persistence:** `oa_review_bundles`.

## OBJ-CLAIM — ClaimEvaluation / ContractResult

- **Purpose:** Claim evaluation / contract result semantics post-evidence.
- **Persistence:** `oa_claim_evaluations` (+ idempotency).
- **Invariant:** Technical SUCCESS ≠ READY.

## OBJ-EPISTEMIC — EpistemicItem

- **Purpose:** Durable epistemic markers (observation / decision-subject continuity aids).
- **Persistence:** `oa_epistemic_items`.

## OBJ-CONTRADICTION / OBJ-COG-STOP

- **Purpose:** MW3 contradiction candidates / cognitive STOP signals (non-authoritative alone).
- **Paths:** intentAnalysis cognitive fields; nora-cognitive-runtime MW3 modules.
- **Maturity:** modeled as signals; never silent HumanDecision.

## OBJ-TURN-ORCH — Project assistant / Nora turn orchestration

- **Purpose:** Product/Nora turn spine — `orchestrateTurn` → `runNoraCognitiveTurn` → Agents Runner (`runNoraAgentsTurn`).
- **Paths:** `features/project-assistant/orchestrateTurn.ts`, `actions.ts`, `f2/orchestrateF2.ts`, `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (+ Runner helpers `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, `readCoverage.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` — some untracked in manifest). Tool path: `lib/platform/repository/gitLocalReadAdapter.ts`, `lib/platform/tools/toolRouter.ts` (`prepareGitLocalReadDataForModel`), `lib/platform/security/redaction.ts`.
- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling **10**, not experimental 12). Explicit **finite** `maxTurns` remains tests/eval override. Explicit **NaN / ±Infinity** fail-closed via existing `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback). Natural mono-file documentary synthesis prompts may elevate Focused (≥8, ≤10) without raising the FinOps ceiling.
- **Controlled continuation (P2):** within one Product turn, `MaxTurnsExceededError.state` may resume with absolute `maxTurns` raised toward mission budget; campaign clamps remain imperative.
- **Status honesty (P0):** `limitReached` → Product status `incomplete` (≠ `ok`, ≠ `cognitive_stop`). Incomplete must not materialize durable LR/ACW illegitimately.
- **Documentary reliability (RCD-01 / PR #578 INTEGRATED ON MAIN):**
  - Mono-file documentary guidance may be appended to system instructions (bounded; not a dedicated GDR engine).
  - `git_local_read_file` returns complete-line coverage only; `truncated` ≠ `documentHasMore`; `hasMore` = document remainder **or** content cut.
  - Secrets are redacted **before** complete-line accounting; content is never rebuilt from raw secret lines.
  - Final model-visible JSON envelope is budgeted; coverage fields are reconciled to the payload actually returned (no silent mid-line credit; no false FULL).
  - Envelope-only oversized lines emit `lineExceedsCap` and advance `nextStartLineHint` (bounded skip; no mid-line offset protocol).
  - Soft maxTurns exhaustion discloses honest incomplete documentary perimeter from tool results when facts exist.
- **Invariant:** INV-COG-NE-AUTH — Nora cognition ≠ Product authority.
- **Non-claims:** no durable RunState across process restart; no Product client `maxTurns` DTO; no dedicated documentary engine; Runtime v3 not adopted; GDR REAL quality not proven.

## OBJ-MEMORY-B — ProductSqliteSession / Memory B

- **Purpose:** Session working memory, transcript, journal — ≠ Truth C.
- **Persistence:** `nora-session.sqlite` tables: `session_items`, `logical_product_turns`, `pilot_transcript_turns`, `cycle_journal_*`.
- **Paths:** `productSqliteSession.ts`, `sessionPaths.ts`, `cycleJournalStore.ts`
- **Session-on-resume (P2 / TV01):** `ProductSqliteSession` is passed to the Agents Runner on **every** segment, including native RunState resume, so history persists for the next Product turn (close/reopen SQLite retains items when DB path is stable).
- **Observed SDK limit (FPPC-RES-01):** under the installed Agents Session prepare path, the initial user utterance is often **not** stored as a Session `role:user` AgentInputItem; tool/assistant items and next-turn ModelRequest.input carry the conserved history. Session is not an exhaustive transcript SoT.
- **Invariant:** Memory B ≠ Truth C.
- **Ops note:** path defaults relative to worktree `cwd` unless `SFIA_STUDIO_NORA_SESSION_DB_PATH` is absolute — worktree switches can orphan transcript (observed in campaign ops).

## OBJ-HYBRID — Hybrid Context Envelope

- **Purpose:** Composed cognitive context for turns (studioCognitiveContext / activeCycleCognitiveContext).
- **Paths:** `f2/studioCognitiveContext.ts`, `activeCycleCognitiveContext.ts`

## OBJ-CWP — Cognitive Workload / Strategy

- **Purpose:** Internal CWP assessment influencing strategy — not profile authority.
- **Paths:** intentAnalysis `cognitiveWorkload`; nora CWP decision hooks.

## OBJ-RECOVERY — Recovery / post-Evidence context

- **Purpose:** Continuity after attempt/evidence; recovery ownership projections.
- **Paths:** recovery-related project-assistant modules; EC rehydration; greenfield continuity readers.
- **Maturity:** multiple seams — lineage E2E re-proof deferred to next macro.

## OBJ-MW5-CHALLENGE — MW5 Critical Challenge session

- **Purpose:** Challenge/clarification loop before structurally advancing some turns.
- **Paths:** `criticalChallengeClarification.ts`, `mw5ChallengeSessionStore.ts`, `resolveMw5ProductAuthorityFromOa.ts`
- **Risk:** may re-challenge structurally resolved continuation (campaign observation — see vol 09).

## Harvest addendum — ABSENT / PARTIAL aggregates (repo-verified)

| Concept | Finding | Paths |
|---|---|---|
| ContractResult table | **ABSENT** — subject of ClaimEvaluation + derived verdict projection | `lib/oa/evidence-review/domain/contractResultTypes.ts`, `evaluateContractResult.ts` |
| LifecycleRecommendation table | **ABSENT** — EpistemicItem Recommendation payload | `lib/oa/cycle/application/lifecycleRecommendation/*` |
| Hybrid Context store | **ABSENT** — composer only | `f2/studioCognitiveContext.ts` |
| Dedicated Recovery aggregate | **ABSENT** — projections over Attempt/Evidence/RB/Epistemic | `features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts` et al. |
| CWP persistence table | **ABSENT** — turn/policy signals | `lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts` |
| Contradiction standalone table | **ABSENT** — EpistemicItem type + disposition policy | `contradictionDisposition.ts` |
| MaturityAssessment Product SQLite | **PARTIAL** — domain + memory store only (“out of minimal M5”) | `memoryMaturityAssessmentStore.ts` |
| ExecutionRun Product SQLite | **ABSENT** — memory-only parallel BC | `lib/oa/execution-run/**` |
| DebtItem / RiskItem BC | **PARTIAL** — LPS id fields exist; dedicated tables not found | LPS type fields |
| OPS1 ↔ OA unified session | **ABSENT by design** — separate DBs | `lib/ops1/db.ts` vs product OA |

Source: repository harvest at `b4aa09bd` (architecture inventory agent).

```

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```markdown
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
- **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
- **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
- **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
- **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests

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

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`

```markdown
# 04 — Dependency & Impact Map

**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (impact sample C = REC-01; prior samples retained)**

## Impact analysis procedure (mandatory for future changes)

Given changed paths:

1. Map paths → component IDs (manifest `components[].trackedSourcePaths`).
2. Collect direct `dependsOn` / `dependedBy`.
3. Walk transitive closure (cap depth 6).
4. Union `flowIds`.
5. Union `invariantIds`.
6. Note persistence/restart flags on components.
7. Note authority-sensitive components (`authoritySensitive: true`).
8. Note Fake/Real boundary flags.
9. Collect `testPaths` as mandatory regression set.
10. List doc volumes requiring review; after content review only, refresh digests.

## Core dependency edges (harvested)

```
intentAnalysis / Fake provider
  → activeCycleGovernedContinuation
    → artifactTargetRouting
    → deriveCycleObligationSnapshot / assessFinalization
    → Proposal (proposalStore)
      → recordDecision (HumanDecision)
        → ExecutionContract prepare
          → Attempt → Evidence → ReviewBundle → ClaimEvaluation

criticalChallengeClarification (MW5)
  → orchestrateTurn / F2 progression
  → may delay or re-enter clarification before Proposal continuation

LifecycleSurface / lifecyclePresentation
  → reads assessFinalization obligations (APPLICABLE display)
  → does not alone authorize materialization
```

## DEP edges (stable IDs)

| ID | From | To | Why |
|---|---|---|---|
| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | launch |
| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |

## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

**Changed path:** `features/project-assistant/f2/activeCycleGovernedContinuation.ts`

| Step | Result |
|---|---|
| Components | OBJ-ARTIFACT-CONTINUATION |
| Direct deps | Artifact routing, finalization assess/obligation snapshot, Proposal emission, Fake/intent hints |
| Transitive | DecisionBasis/EC/Attempt/Evidence (via Proposal→HD), Lifecycle UI wording consumers |
| Flows | F05 primary; F04/F06/F07 adjacent; F17 restart at proposal |
| Invariants | INV-APPLICABILITY-NE-AUTHORITY, INV-UNKNOWN-NE-APPLICABLE, INV-NO-AUTO-HD, INV-NO-EXEC-BEFORE-AUTH, INV-OLD-CYCLE-HD |
| Persistence | Reads product DB assess/decisions; writes none directly; Proposal process-local |
| Authority | Opens Proposal path only; never EC |
| Fake/Real | Server gate identical; provider may omit continuationKind (mitigated by natural signal) |
| Tests | continuity CORR-01, bridge CORR-01, corrProof07/06, fakeProvider materialization |
| Docs | volumes 02,03,04,06,07,08,09 |

## Sample impact analysis B — `criticalChallengeClarification.ts` (MW5)

**Changed path:** `lib/nora-cognitive-runtime/criticalChallengeClarification.ts`

| Step | Result |
|---|---|
| Components | OBJ-MW5-CHALLENGE |
| Direct deps | Turn orchestration, MW5 session store, product authority facts |
| Transitive | Intent→active-cycle materialization Proposal path (F05) can be delayed/re-challenged; Fake may pre-satisfy challengeAssessment |
| Flows | F04, F05, F06 |
| Invariants | INV-RECOMMENDATION-NE-HD, INV-COGNITION-NE-AUTHORITY, INV-NO-SILENT-HD |
| Persistence | MW5 session store (process/session — verify store type in code); transcript appends |
| Authority | Challenge is cognitive gate, not execution authority |
| Fake/Real | High REAL sensitivity — classifier/challenge sufficiency |
| Tests | MW5-related nora-cognitive / project-assistant continuity tests; **oracle weakness:** local tests may pre-satisfy challenge |
| Docs | 02,03,04,08,09 |

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

## Sample impact analysis D — Nora P0/P1/P2 (PR #577 INTEGRATED ON MAIN)

**Changed tracked paths (digest drift at sync):**
- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH
- `features/pre-m6-product-ui/hooks/useProductConversation.ts` → OBJ-UI-LIFECYCLE

Untracked but behaviorally central (documented, digests not expanded): `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, P0 UI panel/surface files, P0/P1/P2/TV01 tests.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT**); OBJ-UI-LIFECYCLE (incomplete Chat-first); OBJ-MEMORY-B adjacent (Session-on-resume); OBJ-MW5-CHALLENGE adjacent |
| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; Runner/adaptive helpers |
| Flows | F04 primary; F02 / F05 / F06 / F15 / F19 adjacent per manifest |
| Invariants | INV-COG-NE-AUTH; INV-MEMB-NE-TRUTHC; INV-NO-SILENT-HD; FinOps numeric fail-closed; INV-FAKE-REAL-SM |
| Persistence | Session SQLite history between Product turns; RunState **in-process same turn only**; cross-restart RunState DEFER |
| Authority | Nora candidate ≠ Product authorization / HD |
| Fake/Real | DETERMINISTIC proven at PR #577 scope (merged `d8ceb8ad`); REAL documentary quality NOT PROVEN |
| Tests | `p6.nora.p0.*`, `p6.nora.p1.*`, `p6.nora.p1p2.*`, `mw6.pre-real.budget-hardening` NUM-CLAMP / R-PRE-REAL-08A, `runner.d0`, `orchestrateTurn.test` |
| Docs | volumes 01, 02, 03, 04, 06, 08, 09 + README overlay |
| Digests | refreshed **after** content review + Morris GO on this sync pass |

**SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).

## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

**Changed Product paths (historical semantic change; already on main @ `44006648`):**
- `lib/platform/repository/gitLocalReadAdapter.ts` → Git read / coverage accounting
- `lib/platform/tools/toolRouter.ts` → final model-visible envelope (`prepareGitLocalReadDataForModel`)
- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH (documentary guidance hook); tracked digest `f4804915f8906eda`
- `lib/nora-cognitive-runtime/readCoverage.ts`, `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` → coverage / restitution / Focused elevation (several untracked in manifest)

**This documentary pass:** NO NEW PRODUCT CODE CHANGE — Living Reference sync only.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT = YES** on F04 documentary acquisition); tool/Git adapter adjacent |
| Direct deps | OBJ-MEMORY-B (Session tool results); OBJ-CWP/adaptive budget adjacent; platform tools/redaction |
| Transitive | Product conversation UI consumers of incomplete / coverage disclosure; REC-01 coverage readers |
| Flows | **F04 primary**; F02 / F15 / F19 adjacent (Session / tests) |
| Invariants | INV-COG-NE-AUTH; INV-FAKE-REAL-SM; FinOps ceilings unchanged (≤10 / 12000); no silent HD / Deliverable invent |
| Persistence | **None changed** — Session/tool results only; no new tables; RunState cross-restart still DEFER |
| Authority | ToolRouter gains no Product authority; Nora candidate ≠ HD |
| Fake/Real | DETERMINISTIC R1–R7 proven at tested scope; **GDR REAL NOT PROVEN** |
| Tests | `p6.nora.min09.documentaryReliability.d0.test.ts` (+ P1/P2/Session regressions) |
| Docs | volumes 02, 03, 04, 06, 08, 09 + README; debt `RCD-01-PRR-SEMANTIC-COHERENCE` documentary correction prepared / integration pending |

## Component → flows (summary)

| Component | Flows |
|---|---|
| OBJ-ARTIFACT-CONTINUATION | F05, F06, F17 |
| OBJ-MW5-CHALLENGE | F04, F05, F06 |
| OBJ-TURN-ORCH | F04, F05, F06 |
| OBJ-PROPOSAL | F06, F07, F17 |
| OBJ-EC | F08–F11, F18 |
| OBJ-MEMORY-B | F02, F04, F19 |

```

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`

```markdown
# 06 — Persistence, Restart & Recovery

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

## Store topology

| Store | Path resolution | Contents |
|---|---|---|
| Product OA SQLite | `SFIA_STUDIO_PRODUCT_DB_PATH` or default | Truth C tables (`oa_*`) |
| Nora Session SQLite | `SFIA_STUDIO_NORA_SESSION_DB_PATH` or cwd-relative default | Memory B transcript/journal/session items |
| F2 Proposal store | process memory (`proposalStore.ts`) | Proposal DTOs |
| MW5 challenge store | `mw5ChallengeSessionStore.ts` | challenge session (process-scoped) |
| Ops1 / D1 sqlite | separate (`lib/ops1`, `lib/d1`) | historical/ops surfaces — not Product Truth C |
| Launch safety journal | under exec/m4 | attempt safety |

### Product tables (from `lib/oa/project/infrastructure/sqlite/db.ts`)

`schema_meta`, `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_idempotency`, `oa_audit_events`, `oa_cycle_instances`, `oa_human_decisions`, `oa_execution_contracts`, `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`, `oa_evidence`, `oa_evidence_idempotency`, `oa_review_bundles`, `oa_review_bundle_idempotency`, `oa_project_trajectories`, `oa_project_trajectory_current`, `oa_confirmations`, `oa_epistemic_items`, `oa_ec_inspection_attestations`, `oa_authority_verification_receipts`, `oa_claim_evaluations`, `oa_claim_evaluation_idempotency`

### Nora session tables

`session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

## Nora Session vs RunState (PR #577 INTEGRATED ON MAIN)

**RCD-01 / PR #578 persistence note:** documentary reliability correction **does not** introduce new persistence. Coverage/redaction/envelope reconciliation are in-process tool + turn path behaviors. Session continues to store tool results as Agent items under existing `ProductSqliteSession` rules. RunState cross-restart remains **DEFER**. No new tables, migrations, or provider routing.

| Kind | Lifetime | Role |
|---|---|---|
| **A. ProductSqliteSession (Memory B)** | Durable while DB path is stable | Conversational history items between **Product turns**; passed to Runner on every segment including RunState resume |
| **B. OpenAI RunState** | In-process, **same Product turn** only | Native Agents resume after segment maxTurns; not a second transcript SoT |
| **C. Cross-restart RunState** | **NOT IMPLEMENTED / DEFER** | No serialized RunState across process crash/restart |
| **D. FPPC-RES-01** | Observed SDK Session prepare | Initial user utterance often **not** persisted as Session `role:user` AgentInputItem; tool/assistant trail + next-turn `ModelRequest.input` carry conserved context |

Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** claim C1 long-horizon conversational memory as fully satisfied. No additional persistence engine is introduced.

## Restart checkpoint matrix

| Checkpoint | Survives (product DB) | Rehydrated | Process-local lost? | Fail-closed expectation |
|---|---|---|---|---|
| Fresh project | Project/LPS | UI load | n/a | ok |
| Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
| Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
| Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
| HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
| EC prepared | `oa_execution_contracts` | EC projection | | |
| Inspected | attestations | | | |
| Confirmed/authorized | confirmations + receipts | | | |
| Attempt accepted/terminal | attempts | | | |
| Evidence/RB | evidence/RB | | | |
| ContractResult | claim evaluations | | | |
| Post-Evidence | Truth C + session if path stable | Nora continuity | session orphan if path drifts | |
| Finalization | finalize HD + assessment | | | |

## Reconstruction rules

- Truth C objects: reload from SQLite repositories.
- Transcript/journal: reload from Nora session DB **at resolved path**.
- Proposal: not durable; Pilot may need new Proposal turn.
- Never invent HumanDecision on restart.

## Additional stores (harvest)

| Store | Role | Notes |
|---|---|---|
| M4 launch safety SQLite | Gate D grants / launch frontier | `sqliteLaunchSafetyJournal.ts` — separate from Truth C |
| OPS1 sqlite | Historical ops1 sessions/journals | Isolated; not Product Truth C |
| D1 sqlite | D1 projects/assignments | Isolated parallel surface |
| ExecutionRun memory store | Parallel BC | Not Product SQLite |
| MaturityAssessment memory | Out of minimal M5 product path | Memory-primary |

```

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```markdown
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
| F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
| F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
| F04 Documentary reliability RCD-01 (PR #578 INTEGRATED ON MAIN) | `p6.nora.min09.documentaryReliability.d0.test.ts` (R1–R7); P1/P2/Session regressions | Complete-line coverage; redaction progression; final envelope truth; envelope `lineExceedsCap`; fixture regex fidelity; **DETERMINISTIC ONLY** — not GDR REAL; merge `44006648` |
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

## Nora autonomy P0/P1/P2 oracles (PR #577 INTEGRATED ON MAIN)

| Oracle | Level | Notes |
|---|---|---|
| Explicit `maxTurns` NaN/±Infinity fail-closed (with/without campaign); no Runner dispatch; no campaign consume | DETERMINISTIC seam | `mw6.pre-real.budget-hardening` NUM-CLAMP-01 / R-PRE-REAL-08A; uses `normalizeSafeNonNegativeInteger` |
| Absent `maxTurns` → adaptive 5/8/10; Product cognitive entry via `runNoraCognitiveTurn` | DETERMINISTIC Product cognitive entry | `p6.nora.p1.adaptiveBudget` + `p6.nora.p1p2.targetedVerification` CR-TV01-01 (not full UI→orch E2E) |
| RunState multi-segment continuation; Session items persist; next-turn `ModelRequest.input` contains prior Session history | DETERMINISTIC seam | `p6.nora.p1p2.*` / CR-TV01-02 — input proof, not scripted RECALL_OK alone |
| P0 `limitReached` → `incomplete`; STOP distinct; no illegitimate LR materialization; Chat-first incomplete surface | DETERMINISTIC Product/UI seam | `p6.nora.p0.*` |
| Campaign remaining clamps mission | DETERMINISTIC | documentary mission / budget-hardening |
| REAL documentary quality / P6 GLOBAL PASS | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this chantier |

## Documentary reliability RCD-01 oracles (PR #578 INTEGRATED ON MAIN)

| Oracle | Level | Notes |
|---|---|---|
| R1 — returned range / partial-line never credited; `truncated` ≠ `documentHasMore` | DETERMINISTIC | adapter + coverage parse |
| R2 — soft maxTurns restitution discloses honest incomplete perimeter from tool crumbs | DETERMINISTIC Runner/ScriptedModel | Session text items |
| R4 — redaction does not block progression; no secret reintroduction in adapter/tool/Session/events | DETERMINISTIC | fiction fixtures matching `redaction.ts` |
| R5 — final model-visible envelope metadata matches complete lines actually delivered | DETERMINISTIC ToolRouter | ceiling 12000 |
| R6 — adapter-fit / envelope-unfit line → `lineExceedsCap` + monotone skip (no loop) | DETERMINISTIC | fail-closed RESULT_CAPPED when meta alone cannot fit |
| R7 — security fixtures regex-conformant; positive + negative redaction assertions | DETERMINISTIC | evidence fidelity |
| GDR REAL / Product READY / Runtime v3 | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this lot |

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

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```markdown
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)

## Overlay — Nora autonomy PR #577 (INTEGRATED ON MAIN)

| Item | Status |
|---|---|
| P0 incomplete Status Honesty (Chat-first + panel) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
| P1 Adaptive Runner Budget (5/8/10, ceiling 10) | AS-IMPLEMENTED — DETERMINISTIC |
| P2 Controlled Continuation (same-turn RunState) + Session-on-resume | AS-IMPLEMENTED — DETERMINISTIC |
| Explicit non-finite `maxTurns` fail-closed (CI Correction) | AS-IMPLEMENTED on main @ `d8ceb8ad` — DETERMINISTIC |
| **FPPC-RES-01** — prior user utterance not a Session `role:user` AgentInputItem under observed SDK prepare | OPEN residual / NON-BLOCKING |
| **P0-EFFECT-02** store-level incomplete effects | NOT PROVEN |
| Cross-restart RunState persistence | **DEFER** (architecture GO required) |
| Eval/explicit `maxTurns` > adaptive ceiling 10 | NON-BLOCKING (tests/eval only; not Product DTO) |
| Documentary quality REAL / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
| Runtime v3 | **NON ADOPTED** |
| Debt **DOC-PR577-POSTMERGE-SYNC** | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** |

## Overlay — Documentary reliability RCD-01 / PR #578 (INTEGRATED ON MAIN)

| Item | Status |
|---|---|
| Complete-line Git coverage + honest `truncated`/`documentHasMore` | AS-IMPLEMENTED on main @ `44006648` — DETERMINISTIC |
| Secret redaction before coverage accounting | AS-IMPLEMENTED — DETERMINISTIC |
| Final model-visible envelope coverage truth (cap 12000) | AS-IMPLEMENTED — DETERMINISTIC |
| Envelope oversized-line skip (`lineExceedsCap`) | AS-IMPLEMENTED — explicit skip; **no mid-line offset protocol** |
| Soft maxTurns honest documentary disclosure | AS-IMPLEMENTED — DETERMINISTIC |
| FinOps ceilings (≤10 / 12000) | UNCHANGED |
| R1–R7 | CLOSED AT DETERMINISTIC TESTED SCOPE |
| Dedicated GDR engine / parallel architecture | **NONE** |
| GDR REAL T1 / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
| Debt **RCD-01-PRR-SEMANTIC-COHERENCE** (OBJ-TURN-ORCH / F04; SEMANTIC IMPACT=YES) | DOCUMENTARY CORRECTION PREPARED locally — **integration PENDING** (digest ≠ semantic closure until Git-integrated + Morris accept) |
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

### S — FULL FILE `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```json
{
  "schemaVersion": 1,
  "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
  "lastReviewedCommit": "440066485eaae458ccca188b2c91f8f47bd4987f",
  "lastReviewedAt": "2026-10-13T11:17:40+02:00",
  "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
  "volumes": [
    {
      "path": "projects/sfia-studio/production-runtime-reference/README.md",
      "sha256_16": "b982c5cbfe20af6c"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
      "sha256_16": "8bfbcb286b053f04"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
      "sha256_16": "cc17e518466f6b38"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
      "sha256_16": "87063a056923917c"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
      "sha256_16": "7b4089cd4fbb4e17"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
      "sha256_16": "101ec96a6908db71"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
      "sha256_16": "a67fd0fb0c858962"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
      "sha256_16": "90a3ea63bda274bd"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
      "sha256_16": "25fb9a38f1eca0f9"
    },
    {
      "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
      "sha256_16": "4582c1d2695a5f76"
    }
  ],
  "components": [
    {
      "id": "OBJ-ARTIFACT-CONTINUATION",
      "title": "Active-cycle Artifact governed continuation",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
        "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts"
      ],
      "flowIds": [
        "F05",
        "F06",
        "F17"
      ],
      "invariantIds": [
        "INV-APPLICABILITY-NE-AUTHORITY",
        "INV-UNKNOWN-NE-APPLICABLE",
        "INV-NO-SILENT-HD",
        "INV-OLD-CYCLE-HD"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts",
        "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts",
        "projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts",
        "projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts"
      ],
      "dependsOn": [
        "OBJ-FINALIZATION-ASSESS",
        "OBJ-ARTIFACT-ROUTING",
        "OBJ-PROPOSAL"
      ],
      "dependencyIds": [
        "DEP-ACGC-ART",
        "DEP-ACGC-ASSESS",
        "DEP-ACGC-PROP"
      ],
      "authoritySensitive": true,
      "persistence": "reads-product-db"
    },
    {
      "id": "OBJ-MW5-CHALLENGE",
      "title": "MW5 critical challenge clarification",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts"
      ],
      "flowIds": [
        "F04",
        "F05",
        "F06"
      ],
      "invariantIds": [
        "INV-COG-NE-AUTH",
        "INV-NO-SILENT-HD"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-TURN-ORCH"
      ],
      "dependencyIds": [
        "DEP-MW5-TURN"
      ],
      "authoritySensitive": false,
      "persistence": "session-or-process"
    },
    {
      "id": "OBJ-PROPOSAL",
      "title": "F2 Proposal process-local store",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts"
      ],
      "flowIds": [
        "F06",
        "F07",
        "F17"
      ],
      "invariantIds": [
        "INV-PROP-NE-HD",
        "INV-PROP-NOT-SOLE-RESTART"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-HD"
      ],
      "dependencyIds": [
        "DEP-PROP-HD"
      ],
      "authoritySensitive": true,
      "persistence": "process-local"
    },
    {
      "id": "OBJ-HD",
      "title": "HumanDecision",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts"
      ],
      "flowIds": [
        "F07",
        "F08",
        "F15"
      ],
      "invariantIds": [
        "INV-REC-NE-HD",
        "INV-NO-SILENT-HD"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-HD-EC"
      ],
      "authoritySensitive": true,
      "persistence": "oa_human_decisions"
    },
    {
      "id": "OBJ-ARTIFACT-ROUTING",
      "title": "Artifact target routing",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts"
      ],
      "flowIds": [
        "F05",
        "F08"
      ],
      "invariantIds": [
        "INV-EC-NO-EXPAND-WHAT"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-FINALIZATION-ASSESS",
      "title": "Finalization assessment / obligations",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts",
        "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts"
      ],
      "flowIds": [
        "F05",
        "F15"
      ],
      "invariantIds": [
        "INV-ARTIFACT-COND",
        "INV-UNKNOWN-NE-APPLICABLE"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts"
      ],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "derived-read"
    },
    {
      "id": "OBJ-TURN-ORCH",
      "title": "Project assistant / Nora turn orchestration",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/project-assistant/actions.ts",
        "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts"
      ],
      "flowIds": [
        "F04",
        "F05",
        "F06"
      ],
      "invariantIds": [
        "INV-COG-NE-AUTH"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-MEMORY-B",
        "OBJ-MW5-CHALLENGE"
      ],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "mixed"
    },
    {
      "id": "OBJ-MEMORY-B",
      "title": "ProductSqliteSession / transcript / journal",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts",
        "projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts"
      ],
      "flowIds": [
        "F02",
        "F04",
        "F19"
      ],
      "invariantIds": [
        "INV-MEMB-NE-TRUTHC"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-SESSION-TURN"
      ],
      "authoritySensitive": false,
      "persistence": "nora-session.sqlite"
    },
    {
      "id": "OBJ-FAKE-PROVIDER",
      "title": "FakeConversationProvider",
      "docSection": "05-environments-configuration-and-boundaries.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
        "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts"
      ],
      "flowIds": [
        "F04",
        "F05"
      ],
      "invariantIds": [
        "INV-FAKE-REAL-SM"
      ],
      "testPaths": [
        "projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts"
      ],
      "dependsOn": [],
      "dependencyIds": [
        "DEP-FAKE-INTENT"
      ],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-EC",
      "title": "ExecutionContract aggregate",
      "docSection": "02-runtime-object-catalog.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts"
      ],
      "flowIds": [
        "F08",
        "F09",
        "F10",
        "F18"
      ],
      "invariantIds": [
        "INV-EC-NO-EXPAND-WHAT",
        "INV-NO-EXEC-BEFORE-AUTH"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-HD"
      ],
      "dependencyIds": [
        "DEP-EC-ATT"
      ],
      "authoritySensitive": true,
      "persistence": "oa_execution_contracts"
    },
    {
      "id": "OBJ-UI-LIFECYCLE",
      "title": "Lifecycle UI presentation",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
        "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts",
        "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts"
      ],
      "flowIds": [
        "F02",
        "F05",
        "F15"
      ],
      "invariantIds": [
        "INV-APPLICABILITY-NE-AUTHORITY"
      ],
      "testPaths": [],
      "dependsOn": [
        "OBJ-FINALIZATION-ASSESS"
      ],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "none"
    },
    {
      "id": "OBJ-RUNTIME-COMPOSITION",
      "title": "Vertical-slice runtime composition",
      "docSection": "01-system-runtime-overview.md",
      "trackedSourcePaths": [
        "projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts",
        "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
        "projects/sfia-studio/app/.env.example"
      ],
      "flowIds": [
        "F01",
        "F02"
      ],
      "invariantIds": [
        "INV-NO-V3-ADOPT"
      ],
      "testPaths": [],
      "dependsOn": [],
      "dependencyIds": [],
      "authoritySensitive": false,
      "persistence": "product-db-path"
    }
  ],
  "flows": [
    {
      "id": "F01",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F02",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F03",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F04",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F05",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F06",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F07",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F08",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F09",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F10",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F11",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F12",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F13",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F14",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F15",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F16",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F17",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F18",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F19",
      "docSection": "03-end-to-end-flow-catalog.md"
    },
    {
      "id": "F20",
      "docSection": "03-end-to-end-flow-catalog.md"
    }
  ],
  "invariants": [
    {
      "id": "INV-REC-NE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-HD-NE-CONF",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-CAP-NE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROJ-NE-CYCLE",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-MEMB-NE-TRUTHC",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-COG-NE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROP-NE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-EC-NO-EXPAND-WHAT",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-EXEC-BEFORE-AUTH",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-ARTIFACT-COND",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-ATTEMPT-NE-PROVEN",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-SUCCESS-NE-READY",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-FAKE-REAL-SM",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-PROP-NOT-SOLE-RESTART",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-OLD-CYCLE-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-UNKNOWN-NE-APPLICABLE",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-SILENT-REPLAN",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-SILENT-HD",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-NO-V3-ADOPT",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    },
    {
      "id": "INV-APPLICABILITY-NE-AUTHORITY",
      "docSection": "07-authority-invariants-and-failure-modes.md"
    }
  ],
  "dependencies": [
    {
      "id": "DEP-ACGC-ART",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-ARTIFACT-ROUTING"
    },
    {
      "id": "DEP-ACGC-ASSESS",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-FINALIZATION-ASSESS"
    },
    {
      "id": "DEP-ACGC-PROP",
      "from": "OBJ-ARTIFACT-CONTINUATION",
      "to": "OBJ-PROPOSAL"
    },
    {
      "id": "DEP-PROP-HD",
      "from": "OBJ-PROPOSAL",
      "to": "OBJ-HD"
    },
    {
      "id": "DEP-HD-EC",
      "from": "OBJ-HD",
      "to": "OBJ-EC"
    },
    {
      "id": "DEP-EC-ATT",
      "from": "OBJ-EC",
      "to": "OBJ-EC"
    },
    {
      "id": "DEP-MW5-TURN",
      "from": "OBJ-MW5-CHALLENGE",
      "to": "OBJ-TURN-ORCH"
    },
    {
      "id": "DEP-FAKE-INTENT",
      "from": "OBJ-FAKE-PROVIDER",
      "to": "OBJ-TURN-ORCH"
    },
    {
      "id": "DEP-SESSION-TURN",
      "from": "OBJ-MEMORY-B",
      "to": "OBJ-TURN-ORCH"
    }
  ],
  "trackedSources": [
    {
      "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
      "sha256_16": "3abbffc860197bb3"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
      "sha256_16": "4b5dc69962b5a7ed"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
      "sha256_16": "d064b36ddc2f21cd"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
      "sha256_16": "aeb3359752700910"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
      "sha256_16": "dabf1140dceaf91a"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
      "sha256_16": "c4a5ff1ec041343b"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts",
      "sha256_16": "4d6a43b0c2c9fe3e"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts",
      "sha256_16": "28d9f987998b6847"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/canonicalConversationSession.ts",
      "sha256_16": "c4434a8c3447f926"
    },
    {
      "path": "projects/sfia-studio/app/features/project-assistant/f2/mw5ChallengeSessionStore.ts",
      "sha256_16": "3b2dbd8a49169860"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts",
      "sha256_16": "01c0e604b1758454"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      "sha256_16": "f4804915f8906eda"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
      "sha256_16": "37d79b9db14322c3"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts",
      "sha256_16": "d76d75e72451048a"
    },
    {
      "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts",
      "sha256_16": "f3780f7c36792984"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
      "sha256_16": "600264cca081308d"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts",
      "sha256_16": "21dfef1c7b08764a"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts",
      "sha256_16": "52e6055fa1013a3c"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts",
      "sha256_16": "1963f097d0aa9328"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts",
      "sha256_16": "bd13da2b572cf65f"
    },
    {
      "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts",
      "sha256_16": "015b001efc49aedb"
    },
    {
      "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
      "sha256_16": "5cc1d0ffd4760463"
    },
    {
      "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
      "sha256_16": "fcef0a89005eeefb"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      "sha256_16": "5024a8dde9da86a8"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts",
      "sha256_16": "0b25b629a4a889d5"
    },
    {
      "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
      "sha256_16": "17e442645cd02afb"
    },
    {
      "path": "projects/sfia-studio/app/.env.example",
      "sha256_16": "c14369cbe6ac4f42"
    }
  ],
  "trackedTests": [
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts",
      "sha256_16": "aecf179ced91a076"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts",
      "sha256_16": "866294bc20ff538e"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts",
      "sha256_16": "29485cbfb95f7939"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts",
      "sha256_16": "8797f3e117cde1ee"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts",
      "sha256_16": "8995d4d266fa3cd6"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts",
      "sha256_16": "9ed95e13d8f41f09"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts",
      "sha256_16": "0b4277b6c3e98126"
    }
  ],
  "maintenance": {
    "digestMismatchMeans": "REFERENCE REVIEW REQUIRED",
    "refreshDigestDoesNotValidateSemantics": true,
    "automateDriftDetection": true,
    "automateStructuralArbitration": false
  }
}

```

## T. Manifest et métadonnées

| Champ | Avant (main) | Après (local) |
|---|---|---|
| lastReviewedCommit | `95ebe42c5c4ecc5a662241171ee1e03eb3010b52` | `440066485eaae458ccca188b2c91f8f47bd4987f` |
| lastReviewedAt | 2026-10-12T14:23:24+02:00 | 2026-10-13T11:17:40+02:00 |
| Scope | prior overlays | **Scoped** Nora PR #577+#578 overlays only — **not** full corpus re-audit (README explicit) |
| runNoraCognitiveTurn sha256_16 | `f4804915f8906eda` | `f4804915f8906eda` (preserved / verified) |

## U. Digests avant/après (volumes)

| Volume | Avant | Après |
|---|---|---|
| README.md | 5d82151d25ffcfca | b982c5cbfe20af6c |
| 02 | efafc11154b86fe1 | cc17e518466f6b38 |
| 03 | cfb2e852e13ad587 | 87063a056923917c |
| 04 | 356689dccb46b102 | 7b4089cd4fbb4e17 |
| 06 | cae47e899f4d07cc | a67fd0fb0c858962 |
| 08 | 268f641ce0004f76 | 25fb9a38f1eca0f9 |
| 09 | ee816d0da3ff7a63 | 4582c1d2695a5f76 |

Refresh via `node scripts/check-production-runtime-reference.mjs --write-digests` **after** content review. Refresh ≠ semantic validation alone.

## V. Tests et conformance

| Contrôle | Résultat |
|---|---|
| `check-production-runtime-reference.mjs` | PASS / CONFORMANCE OK |
| `productionRuntimeReference.conformance.d0.test.ts` | 5 PASS |
| `git diff --check` | PASS |
| Runtime Product code | unchanged |
| REAL OpenAI | ZERO |

## W. Fake/Real Qualification

DOC ONLY this pass. Entry: PR #577/#578 INTEGRATED DETERMINISTIC. Expected: DOCUMENTARY COHERENCE REVIEWED LOCALLY. Hors scope: GDR REAL PASS / P6 GLOBAL / Product READY / Runtime v3 ADOPTED.

## X. Réserves et dettes

**Réserves:** FPPC-RES-01 · P0-EFFECT-02 · RunState DEFER · lineExceedsCap explicit skip · GDR REAL NOT PROVEN · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED · DOC-PR577 historical scope preserved.

**Dettes:**
| ID | Statut fin de passage |
|---|---|
| DOC-PR577-POSTMERGE-SYNC | DOCUMENTARY CORRECTION PREPARED / INTEGRATION PENDING |
| RCD-01-PRR-SEMANTIC-COHERENCE | DOCUMENTARY CORRECTION PREPARED / INTEGRATION PENDING (SEMANTIC IMPACT=YES) |

**Not CLOSED** until Git-integrated + Morris accept applicable.

## Y. Exit proof local

Référentiel consolidé sur baseline `44006648`, diff exploitable, conformance PASS, historique PR #577 préservé, handoff FULL.

## Z. Décisions Morris restantes

1. GO intégration Git documentaire unique (commit/push/PR) — NON consommé.
2. Acceptation clôture dettes après merge doc — NON.
3. GO Human QA REAL T1 — NON.
4. Cleanup worktrees/branches historiques — NON.

## AA. Verdict

**CONSOLIDATED DOCUMENTARY CLOSURE IMPLEMENTED LOCALLY / PRR CONFORMANCE PASS / READY FOR CHATGPT REVIEW**

Ce verdict ≠ document intégré sur main ≠ dettes CLOSED ≠ GDR REAL PASS ≠ P6 GLOBAL PASS ≠ Product READY ≠ Runtime v3 ADOPTED.

## AB. Instruction ChatGPT

Lire le dernier Review Handoff distant sur `sfia/review-handoff`.

Vérifier: main `44006648`; préservation historique; réconciliation PR #577; cohérence RCD-01/PR #578; impact OBJ-TURN-ORCH/F04; mécanismes; preuves; métadonnées/digests; diff; tests PRR; dettes/réserves; verdict.

Si favorable: qualifier **une unique intégration Git documentaire gouvernée**. Aucun GO commit/push/PR/merge implicite.

---
FIN DU REVIEW PACK FULL — CONSOLIDATED POST-MERGE DOCUMENTARY CLOSURE
