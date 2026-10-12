# SFIA Review Pack — FULL
# Pass: PR577 HANDOFF REGULARIZATION + CONTROLLED MERGE 01
# Generated: 2026-10-12T14:52:36+02:00 (Europe/Paris)
# Level: FULL
# Cycle: 13 — PR readiness
# Profile: CRITICAL

---

## A. Horodatage / Identification

- Timestamp: 2026-10-12T14:52:36+02:00 (Europe/Paris)
- Project: SFIA Studio
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P6 GLOBAL INTEGRATED PRODUCT QA
- Chantier: NORA-ADAPTIVE-COGNITIVE-EXECUTION-CONTINUATION-01
- Pass: PR577 HANDOFF REGULARIZATION + CONTROLLED MERGE 01
- Cycle projet: 13 — PR readiness
- Profile: CRITICAL
- Typologie: QA GATE / GIT INTEGRATION / MERGE
- Processus: SFIA v2.6
- Runtime v3: NON ADOPTED

## B. GO Morris consommé

GO Morris explicite 2026-10-12 — « fais les deux ... régulation handoff + merge ».

Autorisé:
- régularisation du Review Handoff ;
- commit/push L3 branche handoff uniquement ;
- passage PR #577 Ready for Review ;
- merge PR #577 sur main ;
- vérifications Git immédiates post-merge.

NON autorisé:
- nouveau développement ;
- modification du commit projet ;
- nouvelle PR ;
- force push ;
- suppression de branche ;
- contournement protections GitHub / bypass CI ;
- REAL OpenAI ;
- promotion Runtime v3 ;
- modification doctrine / roadmap.

Ce GO est conditionné au respect intégral des gates. Il ne constitue pas une autorisation de contournement.

## C. Local Git Truth Check (pré-régularisation)

```
pwd=/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
remote=origin https://github.com/mcleland147/sfia-workspace.git
branch=qa/p6-hqa-02-rec01-human-qa
HEAD=b826526ce5531f73ec1f2013443c55e18155cbc2
origin/main=f31bb8f610802c102edbe68889fb8ecf0339ec28
origin/qa/p6-hqa-02-rec01-human-qa=b826526ce5531f73ec1f2013443c55e18155cbc2
status_dirty=.tmp-sfia-review/chatgpt-review.md only (hors commit projet)
staged=none
untracked=none
```

Cohérence: OK. Aucune anomalie bloquante. Aucun nettoyage destructif.

## D. Sources canoniques (consultées / référencées)

- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md
- projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md
- projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
- projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md
- projects/sfia-studio/sfia-v3-framing/ckc/13-pr-readiness.md
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- scripts/sfia/publish-review-handoff.sh
- Living Production Runtime Reference (volumes + manifest sur HEAD projet)
- Prior handoff CI Correction: commit 615250941c38291d79b350ee1920b7716bede3b0 / blob 924ea3a4d562f1206fdcb769808488364cc5808e
- Prior handoff Reference Sync (formellement incomplet): commit 1eda5c65d169bd0e4ff345474fd6c7ffec1ac907 / blob 9682a0eedb9de21ef14b5ed4dbec24ad9662c2b5

## E. Convergence Pre-check

- Capacité v3: Autonomie cognitive bornée de Nora (Session + honesty Product). Runtime v3 NON ADOPTED.
- Milestone: P6.
- État: P0/P1/P2/TV01 dans PR #577 ; correction numérique ; référence synchronisée ; CI Required Gate PASS.
- Actifs KEEP: P0 Status Honesty ; P1 Adaptive Budget ; P2 Controlled Continuation ; ProductSqliteSession ; Living Production Runtime Reference.
- Gap de ce cycle: incomplétude formelle du Review Handoff (renvois stub au lieu de patches exploitables).
- Exit proof: handoff FULL vérifié + merge GitHub confirmé sur main.
- Dette conservée: FPPC-RES-01 ; P0-EFFECT-02 NOT PROVEN ; RunState cross-restart DEFER ; REAL documentary quality NOT PROVEN.
- Capacité suivante: P6-MIN-09 après qualification post-merge (cycle 14 distinct).
- Aucune architecture parallèle. Aucune nouvelle dette fonctionnelle.

## F. Référence PR #577

- URL: https://github.com/mcleland147/sfia-workspace/pull/577
- Title: Studio / Nora — P0 Status Honesty + P1 Adaptive Budget + P2 Controlled Continuation
- State pré-merge: OPEN / DRAFT
- headRefName: qa/p6-hqa-02-rec01-human-qa
- baseRefName: main

## G. HEAD et base

- HEAD / headRefOid: b826526ce5531f73ec1f2013443c55e18155cbc2
- Commit message: fix(studio): restore Nora budget guards and sync runtime reference
- baseRefOid (main): f31bb8f610802c102edbe68889fb8ecf0339ec28
- Delivery P0/P1/P2 antérieur: 95ebe42c5c4ecc5a662241171ee1e03eb3010b52 (référencé dans manifest lastReviewedCommit)

## H. Git Review Index — fichiers du commit correctif

Commit source unique pour les patches ci-dessous: `b826526ce5531f73ec1f2013443c55e18155cbc2`

| Path | Role |
|------|------|
| projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts | Numeric fail-closed |
| projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts | Non-regression P1 |
| projects/sfia-studio/production-runtime-reference/README.md | Overlay PR#577 candidate |
| projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md | Nora cognitive layer |
| projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md | OBJ-TURN-ORCH / Memory B |
| projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md | F04 |
| projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md | Sample D |
| projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md | Session vs RunState |
| projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md | Proof map |
| projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md | Reserves |
| projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json | Digests |

Total: 11 fichiers. Aucun fichier hors périmètre dans ce commit.

## I. CI Required Gate PASS

- Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38248825220
- headSha: b826526ce5531f73ec1f2013443c55e18155cbc2
- conclusion: success
- Detect SFIA Studio changes: PASS
- Build and validate SFIA Studio: PASS
- SFIA Studio Required Gate: PASS
- mergeable: MERGEABLE
- mergeStateStatus: CLEAN

## J. Verdict ChatGPT technique préalable

TECHNICAL REVIEW PASS.
CI REQUIRED GATE PASS.
HANDOFF FORMAL REGULARIZATION REQUIRED.

La régularisation est documentaire. Elle ne modifie pas les conclusions techniques.

## K. Réserves historiques (KEEP)

- FPPC-RES-01 — prior user utterance non conservée comme Session AgentInputItem (SDK observé).
- P0-EFFECT-02 — store-level NOT PROVEN.
- RunState cross-restart — DEFER / NON IMPLÉMENTÉ.
- Eval maxTurns explicite > 10 — NON-BLOCKING (tests/eval seulement).
- Qualité documentaire REAL — NOT PROVEN.
- P6 GLOBAL PASS — NOT CLAIMED.
- Runtime v3 — NON ADOPTED.

## L. Fake / Real Qualification

- Applicable: OUI (reprise preuves antérieures).
- Substituts: ScriptedModel / FakeConversationProvider.
- Niveau: DETERMINISTIC PRODUCT WIRING + NEXT-TURN INPUT + NUMERIC FAIL-CLOSED.
- CI: GLOBAL SUCCESS (run 38248825220).
- REAL: NON PROVEN.
- P6 GLOBAL PASS: NON CLAIMED.
- Runtime v3: NON ADOPTED.
- Le merge ne change pas automatiquement la qualification des preuves.

## M. Contenu exploitable — patches Git réels

Cause de la régularisation: le handoff précédent substituait des renvois au commit aux patches exploitables.
Correction: chaque fichier ci-dessous embarque le `git show b826526ce5531f73ec1f2013443c55e18155cbc2 -- <path>` exact.
Aucun résumé substitutif. Aucun placeholder non résolu. Contenu reconstruit: NON.

### M.1 `projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts`

- chemin exact: `projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index d25d4f49..c08d4306 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -93,6 +93,11 @@ export function inferWorkloadHintsFromUserContent(
 /**
  * Resolve adaptive mission maxTurns.
  * Explicit caller maxTurns always wins (tests, eval). Otherwise strategy+signals.
+ *
+ * Historical FinOps contract: an *explicit* non-finite maxTurns (NaN / ±Infinity)
+ * must NOT fall back to the adaptive nominal budget. Preserve the invalid value
+ * so downstream `normalizeSafeNonNegativeInteger` fail-closes before Runner dispatch.
+ * Absent / null maxTurns remains the adaptive Product path.
  */
 export function resolveAdaptiveMaxTurns(input: {
   strategyClass?: CognitiveStrategyClass | null;
@@ -103,10 +108,18 @@ export function resolveAdaptiveMaxTurns(input: {
   const floor = ADAPTIVE_MAX_TURNS_FLOOR;
   const ceiling = ADAPTIVE_MAX_TURNS_CEILING;

-  if (
-    input.explicitMaxTurns != null &&
-    Number.isFinite(input.explicitMaxTurns)
-  ) {
+  if (input.explicitMaxTurns != null) {
+    if (!Number.isFinite(input.explicitMaxTurns)) {
+      reasonCodes.push("explicit_caller_maxTurns_non_finite");
+      return {
+        requestedMaxTurns: input.explicitMaxTurns,
+        strategyClass: input.strategyClass ?? null,
+        reasonCodes,
+        floor,
+        ceiling,
+        explicitOverride: true,
+      };
+    }
     const requestedMaxTurns = Math.max(0, Math.trunc(input.explicitMaxTurns));
     reasonCodes.push("explicit_caller_maxTurns");
     return {
```

### M.2 `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts`

- chemin exact: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
index 8a528be0..46f31e2b 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
@@ -106,4 +106,26 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
       resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
     ).toBe(5);
   });
+
+  it("absent maxTurns uses adaptive; explicit NaN/Infinity preserved (no adaptive fallback)", () => {
+    const absent = resolveAdaptiveMaxTurns({ strategyClass: "Routine" });
+    expect(absent.explicitOverride).toBe(false);
+    expect(absent.requestedMaxTurns).toBe(5);
+
+    for (const bad of [
+      Number.NaN,
+      Number.POSITIVE_INFINITY,
+      Number.NEGATIVE_INFINITY,
+    ]) {
+      const d = resolveAdaptiveMaxTurns({
+        strategyClass: "Deep",
+        explicitMaxTurns: bad,
+      });
+      expect(d.explicitOverride).toBe(true);
+      expect(d.reasonCodes).toContain("explicit_caller_maxTurns_non_finite");
+      expect(Number.isFinite(d.requestedMaxTurns)).toBe(false);
+      // Must not silently substitute Deep adaptive ceiling (10).
+      expect(d.requestedMaxTurns).not.toBe(10);
+    }
+  });
 });
```

### M.3 `projects/sfia-studio/production-runtime-reference/README.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/README.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 7b73fe00..ff1a1fa0 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -8,6 +8,7 @@
 **Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
 **First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
 **REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09
+**Nora autonomy overlay (candidate):** P6 / **PR #577 (Draft, not merged)** — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns` restored (CI Correction Pass 01). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. ZERO REAL. Runtime v3 **NON ADOPTED**. Volumes 01 / 02 / 03 / 04 / 06 / 08 / 09 + digests.

 ## What this corpus is

```

### M.4 `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md b/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
index acfc083e..93dfdc00 100644
--- a/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
+++ b/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
@@ -12,6 +12,8 @@ Project Assistant (features/project-assistant)
         ↓
 Nora Cognitive Runtime (lib/nora-cognitive-runtime)
   ProductSqliteSession · Cycle Journal · MW5 critical challenge · CWP hooks
+  Adaptive mission maxTurns (P1) · Controlled same-turn RunState continuation (P2)
+  Session passed on every Runner segment (incl. RunState resume) · cognitive context ≠ Truth C
         ↓
 OA domain aggregates (lib/oa/{project,cycle,decision,execution-contract,
   execution-attempt,evidence-review,doctrine,git-ports})
@@ -46,9 +48,12 @@ Cursor / Git / GitHub adapters (execution-attempt composition /
 | Concern | Store | Authority |
 |---|---|---|
 | Transcript / Journal / Memory B session items | `nora-session.sqlite` | Working context ≠ Truth C |
+| In-process OpenAI RunState (P2) | process memory only | Same Product turn resume ≠ durable SoT |
 | Project / LPS / Cycle / HD / EC / Attempt / Evidence / RB | `oa-product.sqlite` | Truth C / durable product |
 | F2 Proposal map | process-local `proposalStore.ts` | Not sole restart authority |

+**Nora cognition ≠ Product authority.** Adaptive budgets and RunState continuation do not mint HumanDecision, ExecutionContract, or Truth C writes by themselves.
+
 ## Fake vs REAL boundary (overview)

 - Conversation provider: `OPS1_CONVERSATION_PROVIDER=fake|openai` (`lib/platform/ai`)
```

### M.5 `projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index 5d75994f..ec33e46d 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -169,11 +169,23 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Paths:** intentAnalysis cognitive fields; nora-cognitive-runtime MW3 modules.
 - **Maturity:** modeled as signals; never silent HumanDecision.

+## OBJ-TURN-ORCH — Project assistant / Nora turn orchestration
+
+- **Purpose:** Product/Nora turn spine — `orchestrateTurn` → `runNoraCognitiveTurn` → Agents Runner (`runNoraAgentsTurn`).
+- **Paths:** `features/project-assistant/orchestrateTurn.ts`, `actions.ts`, `f2/orchestrateF2.ts`, `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (+ Runner helpers `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts` — some untracked in manifest).
+- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling **10**, not experimental 12). Explicit **finite** `maxTurns` remains tests/eval override. Explicit **NaN / ±Infinity** fail-closed via existing `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback).
+- **Controlled continuation (P2):** within one Product turn, `MaxTurnsExceededError.state` may resume with absolute `maxTurns` raised toward mission budget; campaign clamps remain imperative.
+- **Status honesty (P0):** `limitReached` → Product status `incomplete` (≠ `ok`, ≠ `cognitive_stop`). Incomplete must not materialize durable LR/ACW illegitimately.
+- **Invariant:** INV-COG-NE-AUTH — Nora cognition ≠ Product authority.
+- **Non-claims:** no durable RunState across process restart; no Product client `maxTurns` DTO; Runtime v3 not adopted.
+
 ## OBJ-MEMORY-B — ProductSqliteSession / Memory B

 - **Purpose:** Session working memory, transcript, journal — ≠ Truth C.
 - **Persistence:** `nora-session.sqlite` tables: `session_items`, `logical_product_turns`, `pilot_transcript_turns`, `cycle_journal_*`.
 - **Paths:** `productSqliteSession.ts`, `sessionPaths.ts`, `cycleJournalStore.ts`
+- **Session-on-resume (P2 / TV01):** `ProductSqliteSession` is passed to the Agents Runner on **every** segment, including native RunState resume, so history persists for the next Product turn (close/reopen SQLite retains items when DB path is stable).
+- **Observed SDK limit (FPPC-RES-01):** under the installed Agents Session prepare path, the initial user utterance is often **not** stored as a Session `role:user` AgentInputItem; tool/assistant items and next-turn ModelRequest.input carry the conserved history. Session is not an exhaustive transcript SoT.
 - **Invariant:** Memory B ≠ Truth C.
 - **Ops note:** path defaults relative to worktree `cwd` unless `SFIA_STUDIO_NORA_SESSION_DB_PATH` is absolute — worktree switches can orphan transcript (observed in campaign ops).

```

### M.6 `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 74bb5c7c..bd6f379b 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -28,8 +28,9 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
-- **Steps:** orchestrateTurn → provider analyze/respond → (optional) prospective Active Cycle Work / Work Recommendation materialization → session append → journal tools
+- **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
+- **Nora autonomy (PR #577 candidate — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality.
 - **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
 - **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
```

### M.7 `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 4fc8d551..01afe429 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -108,6 +108,30 @@ LifecycleSurface / lifecyclePresentation

 Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.

+## Sample impact analysis D — Nora P0/P1/P2 (PR #577 candidate)
+
+**Changed tracked paths (digest drift at sync):**
+- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
+- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH
+- `features/pre-m6-product-ui/hooks/useProductConversation.ts` → OBJ-UI-LIFECYCLE
+
+Untracked but behaviorally central (documented, digests not expanded): `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, P0 UI panel/surface files, P0/P1/P2/TV01 tests.
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT**); OBJ-UI-LIFECYCLE (incomplete Chat-first); OBJ-MEMORY-B adjacent (Session-on-resume); OBJ-MW5-CHALLENGE adjacent |
+| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; Runner/adaptive helpers |
+| Flows | F04 primary; F02 / F05 / F06 / F15 / F19 adjacent per manifest |
+| Invariants | INV-COG-NE-AUTH; INV-MEMB-NE-TRUTHC; INV-NO-SILENT-HD; FinOps numeric fail-closed; INV-FAKE-REAL-SM |
+| Persistence | Session SQLite history between Product turns; RunState **in-process same turn only**; cross-restart RunState DEFER |
+| Authority | Nora candidate ≠ Product authorization / HD |
+| Fake/Real | DETERMINISTIC proven at PR #577 scope; REAL documentary quality NOT PROVEN |
+| Tests | `p6.nora.p0.*`, `p6.nora.p1.*`, `p6.nora.p1p2.*`, `mw6.pre-real.budget-hardening` NUM-CLAMP / R-PRE-REAL-08A, `runner.d0`, `orchestrateTurn.test` |
+| Docs | volumes 01, 02, 03, 04, 06, 08, 09 + README overlay |
+| Digests | refreshed **after** content review + Morris GO on this sync pass |
+
+**SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).
+
 ## Component → flows (summary)

 | Component | Flows |
```

### M.8 `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index d04dcff0..25f5c293 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -21,6 +21,17 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

+## Nora Session vs RunState (PR #577 candidate)
+
+| Kind | Lifetime | Role |
+|---|---|---|
+| **A. ProductSqliteSession (Memory B)** | Durable while DB path is stable | Conversational history items between **Product turns**; passed to Runner on every segment including RunState resume |
+| **B. OpenAI RunState** | In-process, **same Product turn** only | Native Agents resume after segment maxTurns; not a second transcript SoT |
+| **C. Cross-restart RunState** | **NOT IMPLEMENTED / DEFER** | No serialized RunState across process crash/restart |
+| **D. FPPC-RES-01** | Observed SDK Session prepare | Initial user utterance often **not** persisted as Session `role:user` AgentInputItem; tool/assistant trail + next-turn `ModelRequest.input` carry conserved context |
+
+Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** claim C1 long-horizon conversational memory as fully satisfied. No additional persistence engine is introduced.
+
 ## Restart checkpoint matrix

 | Checkpoint | Survives (product DB) | Rehydrated | Process-local lost? | Fail-closed expectation |
```

### M.9 `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index f4a67bc5..2c8f37a1 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -18,6 +18,7 @@
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
 | F04 Work Recommendation materialization (REC-01) | qualifyProspectiveWorkRecommendationMaterialization.d0; activeCycleCognitiveWork.d0 (Option A SQLite reload + historical replay); p6.hqa.rec01.minimalStabilization.d0; p6.hqa.rec01.optionB.workRecommendationsContext.d0; UX-REC-02 journalDisclaimer; chatFirstWorkRecommendationContinuity; noraLifecycleRecommendationContinuity | DETERMINISTIC at tested scope; coverage PARTIAL fail-closed; REAL NOT RUN |
+| F04 Nora autonomy P0/P1/P2 (PR #577 candidate) | `p6.nora.maxTurns.documentary.d0.test.ts`; `p6.nora.p1.adaptiveBudget.d0.test.ts`; `p6.nora.p1p2.documentary.mission.d0.test.ts`; `p6.nora.p1p2.targetedVerification.d0.test.ts`; `p6.nora.p0.productStatusHonesty.d0.test.ts`; `p6.nora.p0.incomplete.panel.ux.d0.test.tsx`; `p6.nora.p0.incomplete.chatFirst.ui.d0.test.tsx`; `mw6.pre-real.budget-hardening.d0.test.ts` (NUM-CLAMP / R-PRE-REAL-08A); `runner.d0.test.ts`; `orchestrateTurn.test.ts` | See proof oracles below — **DETERMINISTIC ONLY**; not Product UI E2E REAL; not documentary REAL quality |
 | F06/F07 integrity | recommendationDecisionIntegrity*, recommendation-vs-decision | Proposal≠HD |
 | F07 Framing HD / START boundary | chatFirstFramingContinuity* + F01 gate | HD structural when required; START gated |
 | F01 greenfield | greenfield continuity tests on main | #531 |
@@ -44,6 +45,17 @@
 - REAL BOUNDARY / E2E REAL — require distinct Morris GO; **not claimed**
 - Runtime v3 **NON ADOPTED**; Product global READY **not claimed**

+## Nora autonomy P0/P1/P2 oracles (PR #577 candidate)
+
+| Oracle | Level | Notes |
+|---|---|---|
+| Explicit `maxTurns` NaN/±Infinity fail-closed (with/without campaign); no Runner dispatch; no campaign consume | DETERMINISTIC seam | `mw6.pre-real.budget-hardening` NUM-CLAMP-01 / R-PRE-REAL-08A; uses `normalizeSafeNonNegativeInteger` |
+| Absent `maxTurns` → adaptive 5/8/10; Product cognitive entry via `runNoraCognitiveTurn` | DETERMINISTIC Product cognitive entry | `p6.nora.p1.adaptiveBudget` + `p6.nora.p1p2.targetedVerification` CR-TV01-01 (not full UI→orch E2E) |
+| RunState multi-segment continuation; Session items persist; next-turn `ModelRequest.input` contains prior Session history | DETERMINISTIC seam | `p6.nora.p1p2.*` / CR-TV01-02 — input proof, not scripted RECALL_OK alone |
+| P0 `limitReached` → `incomplete`; STOP distinct; no illegitimate LR materialization; Chat-first incomplete surface | DETERMINISTIC Product/UI seam | `p6.nora.p0.*` |
+| Campaign remaining clamps mission | DETERMINISTIC | documentary mission / budget-hardening |
+| REAL documentary quality / P6 GLOBAL PASS | **NOT PROVEN / NOT CLAIMED** | ZERO REAL this chantier |
+
 ## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01

 | Proof | Level | Notes |
```

### M.10 `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

- chemin exact: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index b9839f14..54c246cc 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -4,6 +4,21 @@

 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)
+
+## Overlay — Nora autonomy PR #577 (Draft candidate, not merged)
+
+| Item | Status |
+|---|---|
+| P0 incomplete Status Honesty (Chat-first + panel) | AS-IMPLEMENTED on PR #577 candidate — DETERMINISTIC |
+| P1 Adaptive Runner Budget (5/8/10, ceiling 10) | AS-IMPLEMENTED — DETERMINISTIC |
+| P2 Controlled Continuation (same-turn RunState) + Session-on-resume | AS-IMPLEMENTED — DETERMINISTIC |
+| Explicit non-finite `maxTurns` fail-closed (CI Correction) | AS-IMPLEMENTED locally → integrated on this sync commit |
+| **FPPC-RES-01** — prior user utterance not a Session `role:user` AgentInputItem under observed SDK prepare | OPEN residual / NON-BLOCKING |
+| **P0-EFFECT-02** store-level incomplete effects | NOT PROVEN |
+| Cross-restart RunState persistence | **DEFER** (architecture GO required) |
+| Eval/explicit `maxTurns` > adaptive ceiling 10 | NON-BLOCKING (tests/eval only; not Product DTO) |
+| Documentary quality REAL / P6 GLOBAL PASS / Product READY | **NOT PROVEN / NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
 - PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
 - ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
 - CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
```

### M.11 `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

- chemin exact: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`
- commit source: `b826526ce5531f73ec1f2013443c55e18155cbc2`
- reconstruction: NON — patch Git utile réel

```diff
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 59b98b70..030c43bd 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,29 +1,29 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9",
-  "lastReviewedAt": "2026-10-10T19:48:00.000Z",
+  "lastReviewedCommit": "95ebe42c5c4ecc5a662241171ee1e03eb3010b52",
+  "lastReviewedAt": "2026-10-12T14:23:24+02:00",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "aaea587edf5a83d9"
+      "sha256_16": "5d82151d25ffcfca"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
-      "sha256_16": "669b0737f4cc5890"
+      "sha256_16": "8bfbcb286b053f04"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "64e7a716758f799d"
+      "sha256_16": "efafc11154b86fe1"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "3724cd42f8ff5012"
+      "sha256_16": "cfb2e852e13ad587"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "3104b5187a2843e7"
+      "sha256_16": "356689dccb46b102"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "0fc09ae3105d36ed"
+      "sha256_16": "cae47e899f4d07cc"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "a770429e8c495738"
+      "sha256_16": "268f641ce0004f76"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "fe20dea595a3ac89"
+      "sha256_16": "ee816d0da3ff7a63"
     }
   ],
   "components": [
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "2495024ae952effe"
+      "sha256_16": "4b5dc69962b5a7ed"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "b4aaef8d204e35c7"
+      "sha256_16": "0ae04ca7503de628"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "b9d52757c944c06b"
+      "sha256_16": "17e442645cd02afb"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

## N. Gate merge et conditions

Pré-conditions pour Ready for Review + merge:
1. Handoff distant FULL vérifié (ce pack), patches présents, blob relu.
2. PR #577 OPEN, non mergée, head exact `b826526ce5531f73ec1f2013443c55e18155cbc2`, base main `f31bb8f610802c102edbe68889fb8ecf0339ec28`.
3. CI 38248825220 SUCCESS ; Required Gate PASS ; aucun required check FAIL/PENDING.
4. mergeable=true ; mergeStateStatus CLEAN.
5. Aucune review bloquante ; aucun thread bloquant.
6. Aucune modification projet nouvelle ; GO Morris présent.
7. Pas de --admin / --force / bypass.

Méthode merge: merge commit GitHub normal (allow_merge_commit=true). Pas de suppression de branche.
Post-merge: facts Git immédiats seulement. Ne pas déclarer POST-MERGE VERIFIED.
Cycle 14 Post-merge distinct pour requalifier mentions « PR #577 candidate ».

## O. Décisions restantes / Verdict pack

- Décision immédiate: publier ce pack via L3 handoff, puis Ready for Review, puis merge si gates inchangés.
- Décisions différées: post-merge qualification ; P6-MIN-09 ; REAL ; Runtime v3.
- Verdict pack: REVIEW PACK FULL — MODIFIED CONTENT PRESENT (11 patches Git utiles).

## P. Anti-stub / secrets

- Contenu section M: 11 patches `git show` avec hunks `@@` — présents.
- Secrets: aucun.
- Doctrine / roadmap / C1: non modifiés dans ce cycle.
- Commit projet: non modifié (HEAD reste `b826526ce5531f73ec1f2013443c55e18155cbc2`).
