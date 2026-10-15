# SFIA STUDIO — P6 NORA PREMATURE INCOMPLETE
## Cycle 13 — PR Readiness / Git Integration — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-15 08:20:03 CEST
**B. GO Morris:** COMMIT + PUSH + DRAFT PR + CI — AUTHORIZED / CONSUMED (2026-10-15)
**C. Cycle / profil:** Cycle 13 — CRITICAL — INC corrective — PR Readiness / Git Integration
**D. Repository:** mcleland147/sfia-workspace

---

## D. Git Truth initial (VERIFIE)

| Check | Value |
|---|---|
| Worktree retenu | `/Users/morris/Projects/sfia-workspace-p6-nora-incomplete-fix-b555` |
| Branche | `fix/sfia-studio-p6-nora-premature-incomplete-b555` |
| HEAD initial | `b555819d8c3711fd2782b5ee7926517b6b3b8615` |
| origin/main | `b555819d8c3711fd2782b5ee7926517b6b3b8615` (inchangé) |
| Handoff entrée | `2aafbc07` / blob `4ee7842e` |
| Staging initial | vide |
| Commit correctif initial | absent |

---

## E. Convergence

Build Doctrine VALIDATED/ACTIVE · Roadmap VALIDATED/ACTIVE · C1 VALIDATED · P6 NOT PASSED · Runtime v3 NON ADOPTED.
Actif: Runner cognitif ADAPT. Architecture parallèle: AUCUNE.
Trajectoire: Fix local → Git integration (ce cycle) → Critical PR Review → Morris MERGE GO → post-merge → Human QA Nora.

CKC guidance: `ckc:studio:delivery-implementation`.

---

## F. Candidat retenu / exclusion

**RETENU:** worktree `…-incomplete-fix-b555` · branche `…-incomplete-b555` · handoff `2aafbc07` / `4ee7842e`.

**EXCLU:** worktree `…-premature-incomplete-fix` · branche `…-premature-incomplete` · handoff `db7b38d2` (modifie `controlledContinuation.ts`).

Aucun mélange de diffs. Aucun cherry-pick depuis l'autre candidat.

---

## G–I. Root cause / Correctif / Manifest

Root cause: R-EXT-02 gated on `continuationPlan.enable`; short missions (`single_segment_sufficient`) could not productive-extend despite MissionProgressGuard progress → premature incomplete.

Correctif: gate on `input.enableControlledContinuation !== false`. Within-mission multi-segment still uses `continuationPlan.enable`. No global budget lift. Incomplete honesty preserved when OFF/no progress.

Manifest EXACT 4 MODIFIED:
1. `runNoraAgentsTurn.ts`
2. `p6.nora.maxTurns.documentary.d0.test.ts`
3. `p6.nora.p1p2.documentary.mission.d0.test.ts`
4. `p6.productiveExtension.d0.test.ts`

`controlledContinuation.ts` ABSENT du candidat.

---

## J. Diffs COMPLETS (4 fichiers)

### 1. runNoraAgentsTurn.ts
```diff
commit 50eac4394fda17dfc88739d012d47c706291bfbe
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 15 08:10:41 2026 +0200

    fix(studio): restore Nora productive extension for short missions

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index f3c32dc1..ac3ad90d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -920,8 +920,16 @@ export async function runNoraAgentsTurn(

             // R-EXT-02 — productive extension beyond initial mission budget when
             // tool fingerprints advanced (never model self-declaration).
+            //
+            // Do NOT require continuationPlan.enable: single-segment missions
+            // (e.g. Routine maxTurns=5 → single_segment_sufficient) still need
+            // RunState resume when verifiable tool progress exists. Otherwise a
+            // normal Product conversation that reads sources then drafts a
+            // recommendation hits MaxTurnsExceeded, returns partial structured
+            // text, and surfaces premature "Analyse inachevée".
+            // Explicit enableControlledContinuation === false still blocks.
             if (
-              continuationPlan.enable &&
+              input.enableControlledContinuation !== false &&
               atMissionCeiling &&
               !atSafetyEnvelope &&
               !adaptiveDecision.explicitOverride &&
```

### 2. p6.nora.maxTurns.documentary.d0.test.ts
```diff
commit 50eac4394fda17dfc88739d012d47c706291bfbe
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 15 08:10:41 2026 +0200

    fix(studio): restore Nora productive extension for short missions

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
index 3a4e9f2b..33200cda 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
@@ -129,7 +129,11 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
     expect(CT_MAX_TOOL_ROUNDS + 1).toBe(5);
   });

-  it("V1 — default maxTurns (5) stops multi-read documentary sequence incomplete", async () => {
+  it("V1 — default maxTurns (5) without continuation/extension stops multi-read incomplete", async () => {
+    // Historical ceiling-alone fact: initial mission=5 cannot finish a 7-turn
+    // script when productive extension / RunState resume is disabled.
+    // Product default path (continuation allowed) is covered by R-EXT-02 /
+    // REG-PREMATURE-01 — do not conflate the two.
     const session = tmpSession("prj:p6-mt-v1");
     const model = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
     const result = await runNoraAgentsTurn({
@@ -142,6 +146,7 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
       model,
       workspaceRoot: resolveWorkspaceRootFromAppCwd(),
       enableTools: true,
+      enableControlledContinuation: false,
       // omit maxTurns → Product default CT_MAX_TOOL_ROUNDS + 1 (=5)
     });

@@ -328,7 +333,7 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
     expect(hasState === true || hasState === false).toBe(true);
   });

-  it("V5 — comparison matrix facts: default incomplete vs test maxTurns=12 complete", async () => {
+  it("V5 — comparison matrix: ceiling-alone incomplete vs adapted maxTurns=12 complete", async () => {
     const sessionA = tmpSession("prj:p6-mt-v5a");
     const sessionB = tmpSession("prj:p6-mt-v5b");
     const modelA = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
@@ -343,6 +348,8 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
       model: modelA,
       workspaceRoot: resolveWorkspaceRootFromAppCwd(),
       enableTools: true,
+      // Ceiling-alone fact (extension off) — Product-with-extension is R-EXT-02.
+      enableControlledContinuation: false,
     });
     const v2 = await runNoraAgentsTurn({
       correlationId: "p6-maxturns-v5-adapted",
@@ -387,8 +394,8 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {

     // Options for Morris (QA conclusions, not architecture choice):
     // A — adapted turn budget can finish this ScriptedModel workload
-    // B — controlled continuation also needed for Product autonomy after stop
-    // Evidence: A true for this fake workload; B still required for Product resume.
+    // B — controlled continuation / productive extension for Product autonomy
+    // Evidence: A true for this fake workload; B covered by R-EXT-02 / REG-PREMATURE.
     expect(matrix.v2.complete && !matrix.v1.complete).toBe(true);
     expect(matrix.v1.productRunStateResume).toBe(false);

```

### 3. p6.nora.p1p2.documentary.mission.d0.test.ts
```diff
commit 50eac4394fda17dfc88739d012d47c706291bfbe
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 15 08:10:41 2026 +0200

    fix(studio): restore Nora productive extension for short missions

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
index 90bf4c2a..1a27f183 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
@@ -210,11 +210,14 @@ describe("P6 Nora P1+P2 — documentary mission consolidated", () => {
     expect(snap.consumedModelInvocations).toBeLessThanOrEqual(4);
   });

-  it("T-exhaust — mission budget too small remains incomplete (honest)", async () => {
+  it("T-exhaust — mission budget too small remains incomplete when continuation/extension off (honest)", async () => {
+    // With verifiable tool progress, productive extension may raise the effective
+    // cap (R-EXT-02). P0 honesty for a hard-capped small mission requires
+    // continuation/extension disabled — not an appearance-based incomplete.
     const result = await runDocumentary({
       projectId: "prj:p1p2-exhaust",
       maxTurns: 3,
-      enableControlledContinuation: true,
+      enableControlledContinuation: false,
       cognitiveStrategyClass: "Routine",
     });
     expect(result.limitReached).toBe(true);
```

### 4. p6.productiveExtension.d0.test.ts
```diff
commit 50eac4394fda17dfc88739d012d47c706291bfbe
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 15 08:10:41 2026 +0200

    fix(studio): restore Nora productive extension for short missions

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
index f0302cc9..31373b25 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
@@ -262,4 +262,73 @@ describe("R-EXT-02 — productive extension integration (ScriptedModel)", () =>
     ).toBe(false);
     session.close();
   });
+
+  it("REG-PREMATURE-01 — Routine single-segment (maxTurns=5) still extends when tool progress exists", async () => {
+    // Product default path: Routine → requestedMaxTurns=5 → planContinuationSegments
+    // returns single_segment_sufficient (enable=false). Premature incomplete regresses
+    // when productive extension stayed gated on continuationPlan.enable.
+    const session = tmpSession("prj:p6-routine-single-seg-ext");
+    const model = new ScriptedModel(sevenTurnDocumentaryScript());
+    const result = await runNoraAgentsTurn({
+      correlationId: "p6-routine-single-seg-ext",
+      projectId: "prj:p6-routine-single-seg-ext",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent:
+        "Peux-tu proposer un livrable documentaire après lecture de package.json ?",
+      session,
+      model,
+      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
+      enableTools: true,
+      // Default Product: continuation allowed unless explicitly false.
+      enableControlledContinuation: true,
+      cognitiveStrategyClass: "Routine",
+      adaptiveMaxTurnsDecision: {
+        requestedMaxTurns: 5,
+        strategyClass: "Routine",
+        reasonCodes: ["test_routine_single_segment_5"],
+        floor: 3,
+        ceiling: 24,
+        explicitOverride: false,
+      },
+    });
+
+    expect(result.continuationObserve?.reasonCodes).toEqual(
+      expect.arrayContaining([expect.stringMatching(/^productive_extension_/)]),
+    );
+    expect(result.limitReached).toBe(false);
+    expect(result.text).toContain(COMPLETE_MARKER);
+    expect(result.continuationObserve?.stopReason).toBe("complete");
+    session.close();
+  });
+
+  it("REG-PREMATURE-02 — continuation explicitly off keeps incomplete even with tool progress", async () => {
+    const session = tmpSession("prj:p6-routine-ext-off");
+    const model = new ScriptedModel(sevenTurnDocumentaryScript());
+    const result = await runNoraAgentsTurn({
+      correlationId: "p6-routine-ext-off",
+      projectId: "prj:p6-routine-ext-off",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent:
+        "Peux-tu proposer un livrable documentaire après lecture de package.json ?",
+      session,
+      model,
+      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
+      enableTools: true,
+      enableControlledContinuation: false,
+      cognitiveStrategyClass: "Routine",
+      adaptiveMaxTurnsDecision: {
+        requestedMaxTurns: 5,
+        strategyClass: "Routine",
+        reasonCodes: ["test_routine_ext_off"],
+        floor: 3,
+        ceiling: 24,
+        explicitOverride: false,
+      },
+    });
+
+    expect(result.limitReached).toBe(true);
+    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
+    expect(result.text).not.toContain(COMPLETE_MARKER);
+    session.close();
+  });
 });
```

---

## K. Validations (VERIFIE)

| Check | Result |
|---|---|
| vitest productiveExtension + maxTurns + p1p2 + missionProgressGuard + fakeConvergence | 5 files / **55 PASS** |
| tsc --noEmit | PASS |
| next lint | PASS |
| next build | PASS |
| git diff --check | PASS |
| secrets in diff | NONE |

## L. PRR
`runNoraAgentsTurn.ts` documenté PRR comme behaviorally central / untracked-in-manifest. Pas d'élargissement manifest. Contrôle digest dédié: N/A.

## M. Sécurité
Aucun secret. Pas d'auth/middleware. Pas d'autorité/HD. Banner incomplete non masqué.

## N. Fake / Real
DETERMINISTIC PROVEN. REAL NOT EXECUTED. E2E-REAL NOT PROVEN.

## O–Q. Commit / Push / Draft PR

| Item | Value |
|---|---|
| Commit | `50eac4394fda17dfc88739d012d47c706291bfbe` |
| Parent | `b555819d8c3711fd2782b5ee7926517b6b3b8615` |
| Message | `fix(studio): restore Nora productive extension for short missions` |
| Remote branch HEAD | `50eac439…` (= local) |
| Draft PR | **#584** OPEN/DRAFT |
| URL | https://github.com/mcleland147/sfia-workspace/pull/584 |
| Base/head | main ← fix/sfia-studio-p6-nora-premature-incomplete-b555 |
| Files/commits | 4 files / 1 commit |

## R–T. CI / Required Gate (VERIFIE)

| Item | Value |
|---|---|
| Workflow | SFIA Studio CI |
| Run ID | **38691024711** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/38691024711 |
| Event | pull_request |
| headSha | `50eac4394fda17dfc88739d012d47c706291bfbe` |
| Conclusion | **success** |
| Required Gate | PASS |

Jobs:
- Detect SFIA Studio changes: **success**
- Build and validate SFIA Studio: **success**
- SFIA Studio Required Gate: **success**


## U. Réserves

- Tour Morris historique sans receipt détaillé (NOT OBSERVED)
- Mécanisme reproduit DET
- Cause historique exacte du tour unique non prouvée indépendamment
- Human QA REAL après intégration requise
- P6 GLOBAL NOT PASSED
- Runtime v3 NON ADOPTED
- Merge NOT AUTHORIZED

## V. Dette / exit

Exit cycle 13: commit + Draft PR + CI PASS. Next: ChatGPT Critical PR Review → Morris MERGE GO distinct.

## W. Gates

GO commit/push/Draft PR/CI CONSUMED. Non consommés: Draft→Ready, merge, REAL, :3020, cleanup, P6 PASS, runtime v3.

## X. Git Truth final

HEAD `50eac439` · branch `fix/sfia-studio-p6-nora-premature-incomplete-b555` tracking origin · dirty: `.tmp-sfia-review/chatgpt-review.md` only · main `b555819d` inchangé.

## Y. Verdict

**NORA PREMATURE INCOMPLETE — GIT INTEGRATION COMPLETE / DRAFT PR OPEN / CI PASS / READY FOR CHATGPT CRITICAL PR REVIEW.**

## Z. Instruction ChatGPT

Lire handoff distant. Vérifier commit `50eac439`, parent, branche, Draft PR #584, 4 fichiers, patch (gate `enableControlledContinuation !== false`), absence budget lift / incomplete masking, tests 55 PASS, CI 38691024711 Required Gate PASS, réserves. Produire CHATGPT CRITICAL PR REVIEW — NORA PREMATURE INCOMPLETE. Si PASS → MORRIS MERGE GO distinct. Aucun merge automatique. Aucun GO REAL implicite.

---

## Git Review Index

1. COMMIT 50eac439 — 4M exact
2. DRAFT PR #584
3. CI 38691024711 SUCCESS + Required Gate
4. Excluded historical candidate db7b38d2 / controlledContinuation
5. READY FOR CHATGPT CRITICAL PR REVIEW

END OF REVIEW PACK FULL — CYCLE 13
