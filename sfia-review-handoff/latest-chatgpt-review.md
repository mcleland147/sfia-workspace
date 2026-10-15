# SFIA STUDIO — P6 NORA PREMATURE INCOMPLETE
## Cycle 8 — DELIVERY / IMPLÉMENTATION — Review Pack FULL

**A. Horodatage (Europe/Paris):** 2026-10-15 07:20:42 CEST
**B. GO Morris:** PREMATURE INCOMPLETE — ROOT CAUSE & BOUNDED CORRECTION — AUTHORIZED / CONSUMED (2026-10-15)
**C. Cycle / profil:** Cycle 8 — CRITICAL — INC / QA corrective
**D. Repository:** mcleland147/sfia-workspace

---

## D. Git Truth (VERIFIE)

| Check | Value |
|---|---|
| Corrective worktree | `/Users/morris/Projects/sfia-workspace-p6-nora-premature-incomplete-fix` |
| Branch | `fix/sfia-studio-p6-nora-premature-incomplete` |
| HEAD | `b555819d8c3711fd2782b5ee7926517b6b3b8615` (= origin/main tip) |
| origin/main | `b555819d8c3711fd2782b5ee7926517b6b3b8615` |
| :3020 / Human QA DB | NON TOUCHE |
| REAL OpenAI | NON EXECUTE |
| Project commit/push/PR | NON EXECUTE (hors GO) |

Status:
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.maxTurns.documentary.d0.test.ts
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.productiveExtension.d0.test.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/controlledContinuation.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
```

Sources lues depuis tip main / worktree aligné main.
CKC guidance: `ckc:studio:delivery` / fallback doctrine v3 — aucune autorité d'exécution.

---

## E. Convergence

Capacité: analyse cognitive fiable/continue/honnête au service Pilote→Nora→Recommendation→EC.
Milestone P6 · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED.
Next après validation: reprendre Human QA Execution/Review/Synthèse.

---

## F. Observation Morris

Nora a produit une réponse structurée proposant un livrable documentaire,
mais la conversation s'est terminée avec **"Analyse inachevée — Limite d'exécution atteinte"**.

Trace historique du tour Human QA : **NOT OBSERVED** (pas de receipt accessible sans mutation :3020 / sans REAL).
Mécanisme reproduit en **DETERMINISTIC** sur le même chemin Product Runner.

---

## G. Route Product réelle

```
Pilot message
→ /api/studio/projects/[id]/assistant/send
→ orchestrateTurn (F1/F2; MW6 non requis pour ce tour conversationnel standard)
→ runNoraCognitiveTurn (strategy + adaptive maxTurns)
→ runNoraAgentsTurn (Agents Runner + controlledContinuation + MissionProgressGuard)
→ turn.limitReached
→ orchestrateTurn status "incomplete"
→ ConversationSurface banner "Analyse inachevée"
```

Product path **ne passe pas** `enableControlledContinuation: false` → extension autorisée si `!== false`.

---

## H. Hypothèses → verdicts

| ID | Hypothèse | CODE | OBSERVATION/TEST | VERDICT |
|---|---|---|---|---|
| A | Classification sous-dimensionnée | adaptiveTurnBudget Routine=5 | Possible contributeur; pas root cause unique | PARTIEL |
| B | Plafond effectif trop bas | effectiveMaxTurns après clamp | Budget demandé respecté; extension devait compenser | NON root |
| **C** | Continuation / extension prématurément bloquée | `continuationPlan.enable &&` gated productive extension | enable=false pour mission≤segment (Routine=5) | **ROOT CAUSE** |
| D | Progression non reconnue | MissionProgressGuard | Avec outils utiles, progress OK; gate amont bloquait | SECONDARY |
| E | Campaign/provider cap | campaignBudget | NOT OBSERVED sur tour historique | NON prouvé |
| F | Propag incomplete incorrecte | orchestrateTurn maps limitReached→incomplete | Correct SI limitReached vrai; cause amont | NON root |
| G | Autre | — | — | — |

---

## I. Root cause prouvée

**R-EXT-02 productive extension was incorrectly gated on `continuationPlan.enable`.**

When `missionMaxTurns <= CONTINUATION_SEGMENT_MAX_TURNS` (Routine base = 5):
`planContinuationSegments` returns `enable: false` (`single_segment_sufficient`).

That correctly disables *within-mission multi-segment resume*, but the same flag
also blocked productive extension toward `ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE`.

Consequence: tool-using Routine (and any ≤5 mission) exhausted at the initial
ceiling with `limitReached=true` while partial/structured proposal text was already
visible → premature UI incomplete banner.

Generic — not documentary-only.

---

## J. Correctif borné

File: `runNoraAgentsTurn.ts`

- Replace `continuationPlan.enable &&` with `input.enableControlledContinuation !== false &&` on the productive-extension branch.
- Keep multi-segment resume gated on `continuationPlan.enable`.
- Keep MissionProgressGuard / PRODUCTIVE_EXTENSION_MAX / safety envelope / explicitOverride / campaign caps.
- Explicit `enableControlledContinuation: false` still refuses extension (honest incomplete).
- Observe code `productive_extension_despite_single_segment_plan` when extending under single-segment plan.

Comment in `controlledContinuation.ts` clarifying enable=false ≠ no extension.

**Does NOT:** hide banner; coerce incomplete→ok on text appearance; reset counters; raise global budgets; change authority/doctrine.

---

## K. Diffs exploitables (fichiers modifiés)

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

---

## L. Nouveaux tests (R-INC) — contenu intégral des cas ajoutés

```typescript
nt:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: explicitMax,
      enableControlledContinuation: true,
    });

    expect(result.continuationObserve?.safetyEnvelope).toBe(explicitMax);
    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
    expect(
      (result.continuationObserve?.reasonCodes ?? []).some((c) =>
        c.startsWith("productive_extension_"),
      ),
    ).toBe(false);
    session.close();
  });

  it("R-INC-01 — Routine floor (maxTurns=5 / single_segment plan) still extends when tools advance", async () => {
    // Premature incomplete regression: missionMaxTurns <= CONTINUATION_SEGMENT_MAX_TURNS
    // yielded enable=false, which previously blocked productive extension entirely.
    const session = tmpSession("prj:p6-routine-floor-ext");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-routine-floor-ext",
      projectId: "prj:p6-routine-floor-ext",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Lis le fichier package.json en plusieurs passes puis propose un livrable concret.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Routine",
      adaptiveMaxTurnsDecision: {
        requestedMaxTurns: 5,
        strategyClass: "Routine",
        reasonCodes: ["test_routine_floor_5"],
        floor: 3,
        ceiling: 24,
        explicitOverride: false,
      },
    });

    const codes = result.continuationObserve?.reasonCodes ?? [];
    expect(codes).toContain("single_segment_sufficient");
    expect(result.continuationObserve?.productiveExtensions ?? 0).toBeGreaterThanOrEqual(
      1,
    );
    expect(codes.some((c) => c.startsWith("productive_extension_"))).toBe(true);
    expect(codes).toContain("productive_extension_despite_single_segment_plan");
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    session.close();
  });

  it("R-INC-02 — continuation disabled still refuses extension (honest incomplete)", async () => {
    const session = tmpSession("prj:p6-routine-ext-disabled");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-routine-ext-disabled",
      projectId: "prj:p6-routine-ext-disabled",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Lis le fichier package.json en plusieurs passes puis propose un livrable concret.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      enableControlledContinuation: false,
      adaptiveMaxTurnsDecision: {
        requestedMaxTurns: 5,
        strategyClass: "Routine",
        reasonCodes: ["test_routine_floor_5_disabled"],
        floor: 3,
        ceiling: 24,
        explicitOverride: false,
      },
    });

    expect(result.limitReached).toBe(true);
    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
    expect(
      (result.continuationObserve?.reasonCodes ?? []).some((c) =>
        c.startsWith("productive_extension_"),
      ),
    ).toBe(false);
    session.close();
  });
});

```

---

## M. Extrait code correctif (working tree)

```
919:            }
920:
921:            // R-EXT-02 — productive extension beyond initial mission budget when
922:            // tool fingerprints advanced (never model self-declaration).
923:            //
924:            // CRITICAL: do NOT gate on continuationPlan.enable.
925:            // When missionMaxTurns <= segmentMaxTurns (e.g. Routine base = 5),
926:            // planContinuationSegments returns enable=false ("single_segment_sufficient").
927:            // That correctly disables *within-mission* multi-segment resume, but must
928:            // NOT disable productive extension toward the safety envelope — otherwise
929:            // tool-using Routine/Focused-floor missions exhaust with limitReached while
930:            // still holding a partial structured proposal (premature "Analyse inachevée").
931:            // Explicit enableControlledContinuation === false still blocks extension.
932:            if (
933:              input.enableControlledContinuation !== false &&
934:              atMissionCeiling &&
935:              !atSafetyEnvelope &&
936:              !adaptiveDecision.explicitOverride &&
937:              state &&
938:              productiveExtensions < PRODUCTIVE_EXTENSION_MAX &&
939:              segmentsExecuted < CONTINUATION_MAX_SEGMENTS &&
940:              missionProgressGuard?.hasVerifiableProgressForExtension()
941:            ) {
942:              const nextCap = Math.min(
943:                safetyEnvelope,
944:                absoluteCap + continuationPlan.segmentMaxTurns,
945:              );
946:              if (nextCap > absoluteCap) {
947:                productiveExtensions += 1;
948:                effectiveMissionCap = nextCap;
949:                absoluteCap = nextCap;
950:                missionProgressGuard.markExtensionConsumed();
951:                // eslint-disable-next-line @typescript-eslint/no-explicit-any
952:                runInput = state as RunState<any, Agent<any, any>>;
953:                continued = true;
954:                budget.limitReached = false;
955:                continuationObserve.reasonCodes = [
956:                  ...continuationObserve.reasonCodes,
957:                  `productive_extension_${productiveExtensions}`,
958:                  `extended_absolute_cap_${absoluteCap}`,
959:                  ...(continuationPlan.enable
960:                    ? []
961:                    : ["productive_extension_despite_single_segment_plan"]),
962:                ];
963:                continue;
964:              }
965:            }
966:
967:            budget.limitReached = true;
968:            text = partial;
969:            stopReason = !state
970:              ? "segment_limit_no_state"
```

---

## N. Validations (VERIFIE)

| Check | Result |
|---|---|
| vitest productiveExtension + p1p2 documentary + maxTurns documentary + missionProgressGuard | **44 PASS** |
| typecheck (`tsc --noEmit`) | PASS |
| lint (`next lint`) | PASS |
| build (`next build`) | PASS |
| `git diff --check` | clean |
| PRR dedicated script | N/A (no package script; paths noted in PRR docs as untracked helpers — no manifest expand) |
| REAL | NON EXECUTE |
| :3020 | NON TOUCHE |

---

## O. Fake / Real

Preuve cycle = **DETERMINISTIC**.
REAL NOT EXECUTED.
End-to-end REAL NOT PROVEN.
CI verte ≠ bug fermé en production Human QA.

---

## P. Réserves

- Tour historique Morris NOT OBSERVED (pas de receipt).
- Validation Human QA sur parcours Nora réel encore requise (GO distinct).
- Classification Routine peut rester basse; le correctif rétablit l'extension productive générique, pas une hausse de plafond.
- Capture navigateur sources post-#583 toujours non indépendamment vérifiée (hors scope).

---

## Q. Dette / exit

Exit proof cycle: root cause + local fix + DET regression + pack + handoff.
Dette: rejouer Human QA conversation→recommendation après intégration Git (GO ultérieur).

---

## R. Impacts

- Positif: missions single-segment avec progrès outils peuvent étendre vers safety envelope.
- Préserve: incomplete honnête si continuation off / pas de progrès / envelope / campaign.
- UI: banner incomplete inchangé fonctionnellement; moins de faux positifs.

---

## S. Gates Morris

| Gate | Status |
|---|---|
| GO diagnostic+fix local | CONSUMED |
| ChatGPT Critical Review | NEXT |
| Commit/push/PR projet | NOT AUTHORIZED HERE |
| REAL / :3020 | NOT AUTHORIZED |
| P6 PASS / runtime v3 | NOT CLAIMED |

---

## T. Verdict

**NORA PREMATURE INCOMPLETE — ROOT CAUSE CONFIRMED / LOCAL FIX READY FOR CHATGPT CRITICAL REVIEW.**

Anti-claims: NOT P6 GLOBAL PASS · NOT REAL PROVEN · NOT MERGED · NOT Human-QA closed.

---

## U. Instruction ChatGPT

1. Lire ce handoff distant.
2. Vérifier root cause (gate `continuationPlan.enable` vs single_segment).
3. Vérifier correctif borné + tests R-INC-01/02 + V1 honesty avec continuation off.
4. Si PASS: recommander Morris Git Integration GO (commit/push/Draft PR) distinct.
5. Puis Human QA re-proof sur parcours Nora réel.

---

## Git Review Index

1. Root cause: productive extension gated on continuationPlan.enable
2. Fix: enableControlledContinuation !== false for extension branch
3. Tests: R-INC-01/02 + V1/V5 honesty with continuation off
4. Validations: 44 PASS + tsc/lint/build
5. No project push; handoff L3 only

END OF REVIEW PACK FULL
