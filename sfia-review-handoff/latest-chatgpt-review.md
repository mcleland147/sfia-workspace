# SFIA STUDIO — P6 NORA PREMATURE INCOMPLETE
## Root Cause & Bounded Correction — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-15 07:21:05 CEST
**B. GO Morris:** DIAGNOSE + BOUNDED LOCAL FIX — AUTHORIZED / CONSUMED (2026-10-15)
**C. Cycle / profil:** Cycle 8 — CRITICAL — INC / QA corrective
**D. Repository:** mcleland147/sfia-workspace

---

## Git Truth (VERIFIE)

| Check | Value |
|---|---|
| Worktree correctif | `/Users/morris/Projects/sfia-workspace-p6-nora-incomplete-fix-b555` |
| Branch | `fix/sfia-studio-p6-nora-premature-incomplete-b555` |
| HEAD base | `b555819d8c3711fd2782b5ee7926517b6b3b8615` (= origin/main tip at start) |
| origin/main | `b555819d8c3711fd2782b5ee7926517b6b3b8615` |
| :3020 / DB Human QA | NON TOUCHES |
| REAL OpenAI | NON EXECUTE |
| Commit / push projet | NON EXECUTE (GO interdit) |

Status:
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1p2.documentary.mission.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts

```

---

## Convergence

Capacité v3: analyse cognitive fiable/continue/honnête au service Pilote→Nora→Recommendation→EC.
Milestone P6. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.
Next après fix validé: reprendre Human QA Execution/Review/Synthèse.

CKC: `ckc:studio:delivery` / guidance only (doctrine package) — aucune autorité.

---

## Observation

Morris (Human QA historique :3020 / eec68a41): Nora a produit une réponse structurée proposant un livrable documentaire, mais le bandeau **"Analyse inachevée — Limite d'exécution atteinte"** est apparu.

Trace historique du tour exact: **NOT OBSERVED** (pas de receipt tour récupéré; REAL non autorisé pour rejouer).
Mécanisme reproduit en **DETERMINISTIC** sur le chemin Product Agents Runner.

Code cognitif principal: identique entre `eec68a41` et `b555819d` pour ce chemin (confirmé par périmètre GO + inspection).

---

## Route Product réelle

```
Pilot message
→ Product send / orchestrateTurn
→ runNoraCognitiveTurn (strategy + adaptive maxTurns)
→ runNoraAgentsTurn (Agents Runner)
→ planContinuationSegments
→ MaxTurnsExceededError / controlled continuation / productive extension
→ turn.limitReached
→ orchestrateTurn status incomplete + EXECUTION_LIMIT notice
→ useProductConversation setExecutionIncomplete
→ ConversationSurface banner "Analyse inachevée"
```

MW6: non requis pour ce path — spine Agents `runNoraCognitiveTurn` → `runNoraAgentsTurn`.

UI (inchangé):
- `orchestrateTurn.ts`: `executionLimitReached = turn.limitReached === true` → `status: "incomplete"`
- `ConversationSurface.tsx`: banner `project-assistant-incomplete-surface`

---

## Hypothèses

| ID | Hypothèse | CODE | OBSERVATION | TEST | VERDICT |
|---|---|---|---|---|---|
| A | Classification sous-dimensionnée | Routine base=5 | Possible contributeur | adaptiveBudget tests | PARTIAL — pas root exclusive |
| B | Plafond effectif trop bas | adaptive clamp | 5 si Routine | DET | PARTIAL |
| **C** | **Continuation/extension interrompue prématurément** | **`continuationPlan.enable` gate on R-EXT-02** | **Routine mission≤5 → `single_segment_sufficient` → enable=false → productive extension NEVER runs** | **REG-PREMATURE-01** | **CONFIRMED ROOT** |
| D | Progression non reconnue | MissionProgressGuard | Si tools ok, progress true | guard tests | NOT root (progress exists but gate blocked) |
| E | Campaign/provider cap | campaignBudget | NOT OBSERVED on Morris turn | — | NOT PROVEN for this incident |
| F | Incomplete mal propagé | orchestrateTurn/UI | Propagation correcte si limitReached | UI wiring | NOT root — honest given limitReached |
| G | Autre | — | — | — | N/A |

**Root cause prouvée (C):**
Pour missions single-segment (`planContinuationSegments` quand `missionMaxTurns <= segmentMaxTurns`, typiquement Routine=5), `continuationPlan.enable === false`.
Le bloc R-EXT-02 exigeait `continuationPlan.enable`, donc **aucune** extension productive malgré `hasVerifiableProgressForExtension()`.
Résultat: `MaxTurnsExceeded` → `limitReached=true` + texte partiel souvent déjà structuré → bandeau incomplete **prématuré**.

Ce n'est pas spécifique au scénario documentaire P1–P4: toute conversation Product Routine/Focused-at-segment-boundary avec outils peut le déclencher.

---

## Correctif borné

Fichier: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

Changer la condition R-EXT-02:
- AVANT: `continuationPlan.enable && …`
- APRES: `input.enableControlledContinuation !== false && …`

Préserve:
- budgets finis / safety envelope 36
- PRODUCTIVE_EXTENSION_MAX=3
- MissionProgressGuard (fingerprint utile requis)
- `enableControlledContinuation === false` bloque toujours
- explicitOverride pin (tests/eval)
- campaign lease / provider caps
- incomplete honnête si vraiment épuisé / sans progress
- aucune suppression du bandeau; aucun incomplete→ok sur apparence texte

Interdit non consommé: pas d'augmentation arbitraire de plafonds, pas de nouvelle architecture.

---

## Diff exploitable — runNoraAgentsTurn.ts

```diff
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

---

## Diffs tests

```diff
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

## Validations (VERIFIE)

| Check | Result |
|---|---|
| vitest productiveExtension + p1p2 documentary + maxTurns + missionProgressGuard + fakeConvergence | **55 PASS** |
| REG-PREMATURE-01 Routine single-segment extends | PASS |
| REG-PREMATURE-02 continuation off stays incomplete | PASS |
| typecheck (`tsc --noEmit`) | PASS |
| lint (`next lint`) | PASS |
| build (`next build`) | PASS |
| `git diff --check` | clean |
| PRR | `runNoraAgentsTurn.ts` documenté comme untracked-in-manifest / behaviorally central — **pas d'élargissement manifest** sans GO; contrôle dédié N/A pour digest update |
| REAL | NON EXECUTE |
| :3020 | NON TOUCHE |

---

## Fake / Real

Preuve cycle = **DETERMINISTIC**.
REAL NOT EXECUTED.
End-to-end REAL NOT PROVEN.
CI verte ≠ bug fermé en production Human QA.

---

## Réserves

1. Tour Morris historique exact NOT OBSERVED (pas de receipt) — root cause démontrée par mécanisme Product + DET.
2. Validation Human QA sur runtime tip encore requise avant de clore la régression en situation Pilote.
3. Classification Routine peut rester basse; le fix ne remplace pas une bonne stratégie, il restaure l'extension prévue.
4. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.

---

## Dette / exit

Exit proof cycle: root cause + local fix + DET + pack + handoff.
Dette: rejeu Human QA Product tip pour confirmer absence du bandeau prématuré.
Next: ChatGPT Critical Review → éventuellement GO commit/push/PR distinct → Human QA.

---

## Gates Morris

| Gate | Status |
|---|---|
| Correction locale bornée | FAITE (worktree local) |
| Commit / push / Draft PR projet | **NOT AUTHORIZED** par ce GO |
| REAL | NOT AUTHORIZED |
| Merge | NOT AUTHORIZED |

---

## Verdict

**NORA PREMATURE INCOMPLETE — ROOT CAUSE CONFIRMED / LOCAL FIX READY FOR CHATGPT CRITICAL REVIEW.**

Anti-claims: NOT closed in production Human QA · NOT P6 GLOBAL PASS · NOT runtime v3 adopted · NOT REAL proven.

---

## Instruction ChatGPT

Vérifier remote handoff + worktree local:
1. Root cause = R-EXT-02 gated on `continuationPlan.enable` for single-segment.
2. Fix = gate on `enableControlledContinuation !== false`.
3. DET REG-PREMATURE-01/02 + suites.
4. Aucun commit projet poussé.
5. Recommander GO Morris commit/push/PR si PASS; puis Human QA tip.

---

## Git Review Index

1. Root cause CONFIRMED (C)
2. Fix local in `runNoraAgentsTurn.ts`
3. Tests: productiveExtension REG-PREMATURE + maxTurns V1/V5 honesty pins + p1p2 T-exhaust
4. Validations PASS DET/tsc/lint/build
5. Verdict: LOCAL FIX READY FOR CHATGPT CRITICAL REVIEW

END OF REVIEW PACK FULL
