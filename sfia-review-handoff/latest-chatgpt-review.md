# SFIA Review Pack — FULL
# Pass: POST-MERGE DOCUMENTARY CLOSURE 01
# Generated: 2026-10-12T15:24:39+02:00 (Europe/Paris)
# Level: FULL
# Cycle: 14 — Post-merge
# Profile: STANDARD

---

## A. Horodatage / Identification

- Timestamp: 2026-10-12T15:24:39+02:00 (Europe/Paris)
- Project: SFIA Studio
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campagne: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Chantier: NORA-ADAPTIVE-COGNITIVE-EXECUTION-CONTINUATION-01
- Pass: POST-MERGE DOCUMENTARY CLOSURE 01
- Cycle: 14 — Post-merge
- Profile: STANDARD
- Typologie: DOC / POST-MERGE / REFERENCE SYNC
- CKC: projects/sfia-studio/sfia-v3-framing/ckc/14-post-merge.md
- Runtime v3: NON ADOPTED

## B. GO Morris consommé

GO Morris 2026-10-12 — clôture documentaire ciblée post-intégration Nora P0/P1/P2/TV01 sur main.

Autorisé: lecture Git/CI ; mise à jour documentaire bornée (bloc 6) ; métadonnées référentiel ; digests ; conformance ; Review Pack FULL ; handoff L3 ; qualification P6-MIN-09.

NON autorisé: push branche projet ; nouvelle PR ; merge ; suppression branche ; modification directe de main ; force push ; architecture/persistence/runtime Product ; Build Doctrine/Roadmap/C1/v3 ; REAL ; Runtime v3 promotion.

Le GO documentaire **ne vaut pas** GO Git Integration.

## C. Local Git Truth Check

```
pwd=/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
remote=origin https://github.com/mcleland147/sfia-workspace.git
working_branch=docs/pr577-post-merge-documentary-closure  (dédiée documentaire, créée depuis origin/main)
HEAD=d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc  (= origin/main merge SHA)
origin/main=d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
prior_project_branch=qa/p6-hqa-02-rec01-human-qa @ b826526ce5531f73ec1f2013443c55e18155cbc2 (conservée, non supprimée)
dirty_scope=7 fichiers production-runtime-reference uniquement
staged=none
push_projet=NON (ce cycle)
```

Cohérence: OK. Workspace approprié = branche documentaire depuis `origin/main` (pas le HEAD historique PR).

## D. Sources

- convergence build-doctrine / roadmap
- product-completion cadrage
- sfia-v3-framing 33/34/35/37 + ckc/14-post-merge.md
- nora-cognitive-completion/08-…
- product-simplification/07-… P6
- process templates + method fast-track
- Living Production Runtime Reference (README, volumes, manifest)
- Prior handoff: commit 37d45933bfe6ae06465b0c426c65507a8f4d3c56 / blob 4bf37dfd6cf449b47ce3ba015b33b567f1a381ca

## E. Convergence Pre-check

- Capacité: autonomie cognitive bornée Nora + Session + honesty Product. Runtime v3 NON ADOPTED.
- Milestone: P6.
- État: P0/P1/P2/TV01 sur main via PR #577 MERGED ; CI post-merge SUCCESS.
- Actifs KEEP; Living Reference ADAPT descriptif (statut Git seulement).
- Gap: métadonnées/overlays encore « candidate / Draft ».
- Exit proof: référentiel cohérent localement + handoff FULL ; intégration Git différée.
- Dette nouvelle: aucune. Réserves historiques KEEP.
- Capacité suivante: P6-MIN-09 Guided Document Review (après GO intégration documentaire).

## F. PR #577 merged identity

- URL: https://github.com/mcleland147/sfia-workspace/pull/577
- State: MERGED
- mergeCommit: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc`
- mergedAt: 2026-10-12T12:53:30Z
- head (PR tip): b826526ce5531f73ec1f2013443c55e18155cbc2
- base was: f31bb8f610802c102edbe68889fb8ecf0339ec28

## G. CI post-merge

- Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421
- Workflow: SFIA Studio CI
- Event: push on main
- headSha: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc`
- conclusion: **SUCCESS**
- Detect SFIA Studio changes: PASS
- Build and validate SFIA Studio: PASS
- Vitest: **5612 PASS / 143 SKIPPED / 0 FAIL**
- Modeled governance: **73 PASS / 0 FAIL**

## H. Required Gate

- SFIA Studio Required Gate: **PASS** (même run 38251916421)

## I. Inventaire mentions obsolètes (PR #577 seulement)

Corrigées:
- README: « Nora autonomy overlay (candidate) / PR #577 (Draft, not merged) »
- 03 F04: « PR #577 candidate »
- 04 Sample D title + Fake/Real row: « PR #577 candidate »
- 06 heading: « PR #577 candidate »
- 08 flow row + oracles heading: « PR #577 candidate »
- 09 overlay: « Draft candidate, not merged » + status rows

Préservées volontairement (autres chantiers):
- 03 « Correction Pass 02 candidate »
- 09 GENERIC-EXECUTION… local candidate / POST-EXECUTION… local candidate
- mentions « Nora candidate ≠ Product authorization » (autorité, pas statut PR)

## J. Qualification sémantique

**NO PRODUCT SEMANTIC CHANGE.**

Mise à jour descriptive du statut Git après merge uniquement.
Mécanismes P0/P1/P2 inchangés. Aucun runtime Product modifié.

## K. Manifest review metadata

Sémantique retenue:
- `lastReviewedCommit` = arbre Git couvert par **cette sync de statut scoped Nora post-merge** = merge SHA `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc`.
- Ce n'est **pas** une affirmation de réaudit intégral du corpus Living Reference.
- README distingue désormais: corpus historical Reviewed commit (`b433d431…`) vs Nora post-merge status sync scoped.

Avant:
- lastReviewedCommit = 95ebe42c5c4ecc5a662241171ee1e03eb3010b52
- lastReviewedAt = 2026-10-12T14:23:24+02:00

Après:
- lastReviewedCommit = d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
- lastReviewedAt = 2026-10-12T15:23:44+02:00

## L. Digests avant / après (volumes modifiés)

| Volume | BEFORE sha256_16 | AFTER sha256_16 |
|---|---|---|
| README.md | 5d82151d25ffcfca | c09cbc9ab915b0f5 |
| 03-end-to-end-flow-catalog.md | cfb2e852e13ad587 | d53b7d0ef85c7dc9 |
| 04-dependency-impact-map.md | 356689dccb46b102 | e35bf2999d5ede1b |
| 06-persistence-restart-and-recovery.md | cae47e899f4d07cc | 175eaa3ab11a1795 |
| 08-test-proof-and-conformance-map.md | 268f641ce0004f76 | a6c865cfc75373bb |
| 09-known-gaps-reserves-and-current-boundaries.md | ee816d0da3ff7a63 | 84420a9d7b284814 |

TrackedSources inchangés (spot-check): orchestrateTurn `4b5dc69962b5a7ed` ; runNoraCognitiveTurn `0ae04ca7503de628` ; useProductConversation `17e442645cd02afb`.

Digests rafraîchis **après** revue du contenu via `check-production-runtime-reference.mjs --write-digests`.

## M. Conformance

- `node scripts/check-production-runtime-reference.mjs` → **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK**
- `vitest … productionRuntimeReference.conformance.d0.test.ts` → **5/5 PASS**

## N. Contenu exploitable — diffs Git utiles

Chaque bloc = `git diff -- <path>` exact sur la branche documentaire locale.
Reconstruction: NON. Placeholder: NON.

### N.1 `projects/sfia-studio/production-runtime-reference/README.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/README.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index ff1a1fa0..7d5c5c8d 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,14 +1,14 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
-**Reviewed at:** 2026-10-10T21:48:00+0200
+**Corpus historical Reviewed commit (REC-01 / prior overlays):** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` @ 2026-10-10T21:48:00+0200 — not a claim that the entire corpus was re-audited in this pass.
+**Nora post-merge status sync (scoped):** merge `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` · reviewed at 2026-10-12 (Europe/Paris) — Git/status requalification of PR #577 overlays only; **not** a full Living Reference re-audit.
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
 **Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
 **First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
 **REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09
-**Nora autonomy overlay (candidate):** P6 / **PR #577 (Draft, not merged)** — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns` restored (CI Correction Pass 01). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. ZERO REAL. Runtime v3 **NON ADOPTED**. Volumes 01 / 02 / 03 / 04 / 06 / 08 / 09 + digests.
+**Nora autonomy overlay (INTEGRATED ON MAIN):** P6 / **PR #577 MERGED** @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (mergedAt 2026-10-12T12:53:30Z) — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns`. Post-merge CI: [run 38251916421](https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421) SUCCESS (Vitest 5612 PASS / 143 SKIPPED / 0 FAIL; governance 73 PASS; Required Gate PASS). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. REAL **NOT PROVEN**. Runtime v3 **NON ADOPTED**. Volumes 01 / 02 / 03 / 04 / 06 / 08 / 09 + digests.

 ## What this corpus is

```

### N.2 `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index bd6f379b..9dbc6b20 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -30,7 +30,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
-- **Nora autonomy (PR #577 candidate — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality.
+- **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
 - **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
```

### N.3 `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 01afe429..4aa93846 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -108,7 +108,7 @@ LifecycleSurface / lifecyclePresentation

 Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.

-## Sample impact analysis D — Nora P0/P1/P2 (PR #577 candidate)
+## Sample impact analysis D — Nora P0/P1/P2 (PR #577 INTEGRATED ON MAIN)

 **Changed tracked paths (digest drift at sync):**
 - `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
@@ -125,7 +125,7 @@ Untracked but behaviorally central (documented, digests not expanded): `runNoraA
 | Invariants | INV-COG-NE-AUTH; INV-MEMB-NE-TRUTHC; INV-NO-SILENT-HD; FinOps numeric fail-closed; INV-FAKE-REAL-SM |
 | Persistence | Session SQLite history between Product turns; RunState **in-process same turn only**; cross-restart RunState DEFER |
 | Authority | Nora candidate ≠ Product authorization / HD |
-| Fake/Real | DETERMINISTIC proven at PR #577 scope; REAL documentary quality NOT PROVEN |
+| Fake/Real | DETERMINISTIC proven at PR #577 scope (merged `d8ceb8ad`); REAL documentary quality NOT PROVEN |
 | Tests | `p6.nora.p0.*`, `p6.nora.p1.*`, `p6.nora.p1p2.*`, `mw6.pre-real.budget-hardening` NUM-CLAMP / R-PRE-REAL-08A, `runner.d0`, `orchestrateTurn.test` |
 | Docs | volumes 01, 02, 03, 04, 06, 08, 09 + README overlay |
 | Digests | refreshed **after** content review + Morris GO on this sync pass |
```

### N.4 `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 25f5c293..d143fb4b 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -21,7 +21,7 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

-## Nora Session vs RunState (PR #577 candidate)
+## Nora Session vs RunState (PR #577 INTEGRATED ON MAIN)

 | Kind | Lifetime | Role |
 |---|---|---|
```

### N.5 `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 2c8f37a1..87961928 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -18,7 +18,7 @@
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
-| F04 Nora autonomy P0/P1/P2 (PR #577 candidate) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality |
+| F04 Nora autonomy P0/P1/P2 (PR #577 INTEGRATED ON MAIN) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality; merge `d8ceb8ad` |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
 | F01 greenfield | greenfield continuity tests on main | #531 |
@@ -45,7 +45,7 @@
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**

-## Nora autonomy P0/P1/P2 oracles (PR #577 candidate)
+## Nora autonomy P0/P1/P2 oracles (PR #577 INTEGRATED ON MAIN)

 | Oracle | Level | Notes |
 |---|---|---|
```

### N.6 `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 54c246cc..2a43d3ec 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,14 +5,14 @@
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
```

### N.7 `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

- chemin exact: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`
- base tree: `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (origin/main)
- reconstruction: NON — diff Git utile réel

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 030c43bd..80e69681 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "95ebe42c5c4ecc5a662241171ee1e03eb3010b52",
-  "lastReviewedAt": "2026-10-12T14:23:24+02:00",
+  "lastReviewedCommit": "d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc",
+  "lastReviewedAt": "2026-10-12T15:23:44+02:00",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "5d82151d25ffcfca"
+      "sha256_16": "c09cbc9ab915b0f5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,11 +19,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "cfb2e852e13ad587"
+      "sha256_16": "d53b7d0ef85c7dc9"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "356689dccb46b102"
+      "sha256_16": "e35bf2999d5ede1b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "cae47e899f4d07cc"
+      "sha256_16": "175eaa3ab11a1795"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "268f641ce0004f76"
+      "sha256_16": "a6c865cfc75373bb"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "ee816d0da3ff7a63"
+      "sha256_16": "84420a9d7b284814"
     }
   ],
   "components": [
```

## O. Fichiers créés / modifiés

Créés: aucun (hors Review Pack temporaire `.tmp-sfia-review/chatgpt-review.md`).

Modifiés (7/7 max):
- `projects/sfia-studio/production-runtime-reference/README.md`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`
- `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`
- `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

## P. Réserves (KEEP)

- FPPC-RES-01 OPEN residual / NON-BLOCKING
- P0-EFFECT-02 NOT PROVEN
- Cross-restart RunState DEFER
- Eval maxTurns > 10 NON-BLOCKING
- Documentary REAL quality NOT PROVEN
- P6 GLOBAL PASS NOT CLAIMED
- Runtime v3 NON ADOPTED

## Q. Fake / Real Qualification

- Applicable: OUI — reprise preuves PR #577
- Fake: ScriptedModel / FakeConversationProvider
- Niveau acquis: DETERMINISTIC PRODUCT WIRING VERIFIED
- Niveau de ce cycle: POST-MERGE TECHNICAL CI VERIFIED + DOCUMENTARY SYNC REVIEWED LOCALLY
- REAL: NON EXÉCUTÉ / Gate Morris REAL NON CONSOMMÉ
- Interdit: REAL PROVEN ; P6 GLOBAL PASS ; Runtime v3 ADOPTED

## R. Gates restants / décision Morris

1. Revue documentaire ChatGPT (ce handoff).
2. GO Morris **intégration documentaire** (push/PR/merge de la sync) — **non autorisé dans ce cycle**.
3. Puis clôture post-merge formelle + reprise **P6-MIN-09**.

Ne pas déclarer: POST-MERGE DOCUMENTARY SYNC INTEGRATED (pas encore sur main).

## S. Verdict pack

REVIEW PACK FULL — MODIFIED CONTENT PRESENT (7 diffs Git utiles).
Conformance PASS. Scope OK. NO PRODUCT SEMANTIC CHANGE.

## T. Prochaine capacité

P6-MIN-09 — Guided Document Review, après intégration documentaire gouvernée.
