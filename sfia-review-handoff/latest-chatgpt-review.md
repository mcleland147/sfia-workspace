# SFIA STUDIO — P6 NORA PREMATURE INCOMPLETE
## Root Cause & Bounded Correction — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-15 07:20:23 CEST
**B. GO Morris:** PREMATURE INCOMPLETE — ROOT CAUSE & BOUNDED CORRECTION — AUTHORIZED / CONSUMED (2026-10-15)
**C. Cycle / profil:** Cycle 8 — CRITICAL — INC / QA corrective
**D. Repository:** mcleland147/sfia-workspace

---

## D. Git Truth (VERIFIE)

| Check | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-nora-premature-incomplete-fix` |
| Branch | `fix/sfia-studio-p6-nora-premature-incomplete` |
| HEAD base | `b555819d8c3711fd2782b5ee7926517b6b3b8615` (= origin/main) |
| :3020 / Human QA DB | NON TOUCHES |
| REAL | NON EXECUTE |
| Commit/push projet | NON EXECUTE |

---

## E. Convergence

Capacité: analyse cognitive fiable/continue/honnête. Milestone P6. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.
CKC guidance: `ckc:studio:delivery-implementation` (`ckc/08-delivery-implementation.md`).

---

## F. Observation

Morris RAPPORTÉ: réponse structurée + bandeau Analyse inachevée.
Trace tour historique détaillée: NOT OBSERVED (ephemeralNotice hors transcript).
Mécanisme reproduit DETERMINISTIC.

Transcript T2 (read-only): seq19 assistant propose livrable après demande opérationnelle P1–P4.

---

## G. Route Product réelle

Pilot → assistant/send → orchestrateTurn → runNoraCognitiveTurn → adaptiveTurnBudget → runNoraAgentsTurn → planContinuationSegments → MaxTurnsExceeded → (bug) extension bloquée → limitReached → status incomplete → UI banner.
MW6 non impliqué.

---

## H. Root cause CONFIRMED

`planContinuationSegments` sets `enable=false` when `missionMaxTurns <= 5` (`single_segment_sufficient`, e.g. Routine).
Productive extension R-EXT-02 was incorrectly gated on `continuationPlan.enable`, so tool-progressing floor missions could not extend toward safety envelope → premature `limitReached` while partial/structured text still visible.

Hypotheses: C+B CONFIRMED; A contributive; D/E/F not primary.

---

## I. Correctif

`runNoraAgentsTurn.ts`: extension condition uses `input.enableControlledContinuation !== false` instead of `continuationPlan.enable`.
Within-mission multi-segment still uses `continuationPlan.enable`.
Preserves budgets, campaign, MissionProgressGuard, honest incomplete when disabled/no progress.
Comment in `controlledContinuation.ts`.

Tests R-INC-01/02 + V1/V5 honesty pin.

---

## J. Diffs

### runNoraAgentsTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index f3c32dc1..348321b5 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -920,8 +920,17 @@ export async function runNoraAgentsTurn(

             // R-EXT-02 — productive extension beyond initial mission budget when
             // tool fingerprints advanced (never model self-declaration).
+            //
+            // CRITICAL: do NOT gate on continuationPlan.enable.
+            // When missionMaxTurns <= segmentMaxTurns (e.g. Routine base = 5),
+            // planContinuationSegments returns enable=false ("single_segment_sufficient").
+            // That correctly disables *within-mission* multi-segment resume, but must
+            // NOT disable productive extension toward the safety envelope — otherwise
+            // tool-using Routine/Focused-floor missions exhaust with limitReached while
+            // still holding a partial structured proposal (premature "Analyse inachevée").
+            // Explicit enableControlledContinuation === false still blocks extension.
             if (
-              continuationPlan.enable &&
+              input.enableControlledContinuation !== false &&
               atMissionCeiling &&
               !atSafetyEnvelope &&
               !adaptiveDecision.explicitOverride &&
@@ -947,6 +956,9 @@ export async function runNoraAgentsTurn(
                   ...continuationObserve.reasonCodes,
                   `productive_extension_${productiveExtensions}`,
                   `extended_absolute_cap_${absoluteCap}`,
+                  ...(continuationPlan.enable
+                    ? []
+                    : ["productive_extension_despite_single_segment_plan"]),
                 ];
                 continue;
               }
```

### controlledContinuation.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
index d81eb60b..e2e3aa86 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
@@ -81,6 +81,10 @@ export function planContinuationSegments(input: {
     return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
   }
   if (mission <= segmentMaxTurns) {
+    // Within-mission multi-segment resume is unnecessary (one segment covers the
+    // initial mission). Productive extension toward the safety envelope remains
+    // eligible in runNoraAgentsTurn when MissionProgressGuard reports verifiable
+    // tool progress — enable=false here must NOT be read as "no extension".
     reasonCodes.push("single_segment_sufficient");
     return { enable: false, segmentMaxTurns: mission || segmentMaxTurns, reasonCodes };
   }
```

### p6.productiveExtension.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
index f0302cc9..980ae671 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
@@ -262,4 +262,77 @@ describe("R-EXT-02 — productive extension integration (ScriptedModel)", () =>
     ).toBe(false);
     session.close();
   });
+
+  it("R-INC-01 — Routine floor (maxTurns=5 / single_segment plan) still extends when tools advance", async () => {
+    // Premature incomplete regression: missionMaxTurns <= CONTINUATION_SEGMENT_MAX_TURNS
+    // yielded enable=false, which previously blocked productive extension entirely.
+    const session = tmpSession("prj:p6-routine-floor-ext");
+    const model = new ScriptedModel(sevenTurnDocumentaryScript());
+    const result = await runNoraAgentsTurn({
+      correlationId: "p6-routine-floor-ext",
+      projectId: "prj:p6-routine-floor-ext",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent:
+        "Lis le fichier package.json en plusieurs passes puis propose un livrable concret.",
+      session,
+      model,
+      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
+      enableTools: true,
+      enableControlledContinuation: true,
+      cognitiveStrategyClass: "Routine",
+      adaptiveMaxTurnsDecision: {
+        requestedMaxTurns: 5,
+        strategyClass: "Routine",
+        reasonCodes: ["test_routine_floor_5"],
+        floor: 3,
+        ceiling: 24,
+        explicitOverride: false,
+      },
+    });
+
+    const codes = result.continuationObserve?.reasonCodes ?? [];
+    expect(codes).toContain("single_segment_sufficient");
+    expect(result.continuationObserve?.productiveExtensions ?? 0).toBeGreaterThanOrEqual(
+      1,
+    );
+    expect(codes.some((c) => c.startsWith("productive_extension_"))).toBe(true);
+    expect(codes).toContain("productive_extension_despite_single_segment_plan");
+    expect(result.limitReached).toBe(false);
+    expect(result.text).toContain(COMPLETE_MARKER);
+    session.close();
+  });
+
+  it("R-INC-02 — continuation disabled still refuses extension (honest incomplete)", async () => {
+    const session = tmpSession("prj:p6-routine-ext-disabled");
+    const model = new ScriptedModel(sevenTurnDocumentaryScript());
+    const result = await runNoraAgentsTurn({
+      correlationId: "p6-routine-ext-disabled",
+      projectId: "prj:p6-routine-ext-disabled",
+      systemInstructions: sfiaBoundaryInstructions(),
+      userContent:
+        "Lis le fichier package.json en plusieurs passes puis propose un livrable concret.",
+      session,
+      model,
+      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
+      enableTools: true,
+      enableControlledContinuation: false,
+      adaptiveMaxTurnsDecision: {
+        requestedMaxTurns: 5,
+        strategyClass: "Routine",
+        reasonCodes: ["test_routine_floor_5_disabled"],
+        floor: 3,
+        ceiling: 24,
+        explicitOverride: false,
+      },
+    });
+
+    expect(result.limitReached).toBe(true);
+    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
+    expect(
+      (result.continuationObserve?.reasonCodes ?? []).some((c) =>
+        c.startsWith("productive_extension_"),
+      ),
+    ).toBe(false);
+    session.close();
+  });
 });
```

### p6.nora.maxTurns.documentary.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
index 3a4e9f2b..55b296fb 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
@@ -129,7 +129,11 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
     expect(CT_MAX_TOOL_ROUNDS + 1).toBe(5);
   });

-  it("V1 — default maxTurns (5) stops multi-read documentary sequence incomplete", async () => {
+  it("V1 — maxTurns=5 with continuation disabled stays incomplete (P0 honesty)", async () => {
+    // With continuation enabled, R-EXT-02 may productive-extend a tool-progressing
+    // mission past the initial ceiling (see p6.productiveExtension R-INC-01).
+    // This case pins continuation off to prove honest incomplete when extension
+    // is not authorized.
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
+  it("V5 — comparison matrix: continuation-off incomplete vs adapted maxTurns=12 complete", async () => {
     const sessionA = tmpSession("prj:p6-mt-v5a");
     const sessionB = tmpSession("prj:p6-mt-v5b");
     const modelA = new ScriptedModel(documentaryScriptNeedingSevenModelTurns());
@@ -343,6 +348,7 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {
       model: modelA,
       workspaceRoot: resolveWorkspaceRootFromAppCwd(),
       enableTools: true,
+      enableControlledContinuation: false,
     });
     const v2 = await runNoraAgentsTurn({
       correlationId: "p6-maxturns-v5-adapted",
@@ -358,7 +364,7 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {

     const matrix = {
       v1: {
-        requestedMaxTurns: "default(=5)",
+        requestedMaxTurns: "default(=5)+continuation_off",
         appliedCeiling: 5,
         modelTurns: modelA.calls.length,
         toolCalls: v1.toolCalls,
@@ -387,8 +393,8 @@ describe("P6 Nora maxTurns — documentary qualification (V1–V5)", () => {

     // Options for Morris (QA conclusions, not architecture choice):
     // A — adapted turn budget can finish this ScriptedModel workload
-    // B — controlled continuation also needed for Product autonomy after stop
-    // Evidence: A true for this fake workload; B still required for Product resume.
+    // B — productive extension (when continuation allowed) also finishes floor missions
+    // Evidence: A true here; B covered by p6.productiveExtension R-INC-01.
     expect(matrix.v2.complete && !matrix.v1.complete).toBe(true);
     expect(matrix.v1.productRunStateResume).toBe(false);

```

---

## K. Validations (VERIFIE)

| Check | Result |
|---|---|
| vitest productiveExtension + p1p2 + P0 honesty + P0 UI | 4 files / 29 PASS |
| vitest maxTurns documentary | 8 PASS |
| tsc | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |
| PRR dedicated | N/A (paths documented in PRR prose; not digested manifest objects; no manifest expansion) |

---

## L. Fake/Real

DETERMINISTIC PASS. REAL NOT EXECUTED. E2E-REAL NOT PROVEN.

---

## M. Reserves

1. Tour historique exact metrics NOT OBSERVED.
2. Fix local only — Human QA / Product REAL path validation still required after Git integration GO.
3. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.

---

## N. Dette / exit

Local fix READY FOR CHATGPT CRITICAL REVIEW. Project commit/push/PR = Morris gate. Human QA re-proof after merge path.

---

## O. Impacts

Runner cognitive only + DET tests. No authority/doctrine/global budget lift/FinOps.

---

## P. Gates

ChatGPT Critical Review NEXT. Commit/push/PR NOT AUTHORIZED HERE. REAL/Human QA DISTINCT GO.

---

## Q. Verdict

**NORA PREMATURE INCOMPLETE — ROOT CAUSE CONFIRMED / LOCAL FIX READY FOR CHATGPT CRITICAL REVIEW.**

---

## R. Instruction ChatGPT

Verify root cause, bounded fix, R-INC-01/02, no budget lift, no banner masking, handoff remote. If PASS → recommend Morris GO commit/push/Draft PR.

---

## Git Review Index

1. Branch fix/sfia-studio-p6-nora-premature-incomplete @ b555819d
2. Files: runNoraAgentsTurn.ts, controlledContinuation.ts, p6.productiveExtension.d0.test.ts, p6.nora.maxTurns.documentary.d0.test.ts
3. DET PASS; no project push; no :3020; no REAL
4. Verdict READY FOR CHATGPT CRITICAL REVIEW

END OF REVIEW PACK FULL
