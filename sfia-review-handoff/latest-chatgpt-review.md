# ChatGPT Critical Review Pack — FULL
## HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01 — Proof-completion QA sub-pass

## 1. Timestamp

2026-10-02T11:36:53Z (UTC)

## 2. Cycle / profile / typology

- **Cycle:** 9 — QA / validation (proof-completion sub-pass of HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01)
- **Profil:** Critical
- **Typology v2.4:** EVOL — proof-completion QA sub-pass
- **CKC:** `ckc:studio:delivery` (closes Delivery Critical Review reserves)

## 3. Local Git Truth

### Initial (this QA sub-pass entry)

- Branch: `delivery/sfia-studio-habitflow-semantic-presentation-continuity-01`
- HEAD: `e996caeba6ec67c85f9d6f98d31b88958e70159d`
- origin/main: `e996caeba6ec67c85f9d6f98d31b88958e70159d`
- ahead/behind: **0/0**
- staged: **none**
- Candidate Product dirty: exactly 6 Delivery files (+ `.tmp-sfia-review/**`)

### Final

- Same branch / HEAD / main / 0/0 / staged none
- **Only additional Product delta this sub-pass:** corr02 test file
- Five non-corr02 candidate files: **bit-identical** to entry (sha256 captured)

## 4. Main

`e996caeba6ec67c85f9d6f98d31b88958e70159d` — Merge PR #543

## 5. Candidate branch

`delivery/sfia-studio-habitflow-semantic-presentation-continuity-01`

## 6. Handoff d'entrée (Critical Review prior)

- Branch: `sfia/review-handoff`
- Commit: `4ecab43aff08cac6a5cc5a0d0a0df611ff8da225`
- Blob: `0d0a72d798c881888b22c87d4bf5efa4f0f12fc6`

## 7. Deux réserves ChatGPT fermées

1. **T-SPC-15** — vraie preuve via `history` (pas stale wording dans narrative courante)
2. **T-SPC-06** — clarify transcript = label contextuel CURRENT TDS

## 8. Confirmation TEST-ONLY

- Product implementation files: **NOT modified** this sub-pass
- PRR manifest: **NOT modified** this sub-pass
- `presentationLabels.test.ts`: **NOT modified** this sub-pass
- Allowed write: **only** `pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts`

## 9. Fichiers candidate à l'entrée (6)

1. `presentationLabels.ts`
2. `studioCognitiveContext.ts`
3. `orchestrateTurn.ts`
4. `presentationLabels.test.ts`
5. `pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts`
6. `production-runtime-reference.manifest.json`

## 10. Preuve seul corr02 a reçu un nouveau delta

Entry sha256 (must remain identical for files 1–4 and 6):

```
4b546bb234d0cfabb654258f3f6d9bd2e6826144d00718336b023cebbc9f6fed  projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
5780338fcf96d3cd0a9503d3704392946d7359fd4f1b62542c93398f86ef82a3  projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
a7b846cb4ae83cc6cbda663befbac4637a57a463e04cfc4fe88828feedc82ebd  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
e165aa4e0c17fc01e746036a56a2c83eb8dafb3d1b0d69d176882ff8a5ca0f34  projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
597ac8db37bfe9fbddb50785f7e79e408ac15a261e3c55c1c195cbb004dce5de  projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

Final verification: **ALL_FIVE_UNCHANGED=yes** / **FINAL_FIVE_UNCHANGED=yes**

## 11–12. T-SPC-06 — clarify transcript proof

### Test body

```ts
it("T-SPC-06 — clarify transcript uses CURRENT TDS contextual label", async () => {
    const db = tempProductDbPath("spc-clarify.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spcc" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "spcc" });
    const oa = runtime.oa!;
    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    const clarifyIdx = tds.optionRefs.indexOf(CLARIFY_OPTION_REF);
    expect(clarifyIdx).toBeGreaterThanOrEqual(0);
    const clarifyLabel = tds.optionLabels[clarifyIdx]!.trim();
    expect(clarifyLabel.length).toBeGreaterThan(0);

    const result = await runStructuredRecommendationTurn({
      projectId: seeded.projectId,
      composed,
      oa,
      recommendedOptionRef: CLARIFY_OPTION_REF,
      narrative:
        "Recommendation clarify-first structurée (fixture SPC-06 — sans répéter le libellé TDS).",
      content: "Clarifie avant d'engager.",
      suffix: "clar",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toContain(
      `Recommandation structurée (pas une décision) : « ${clarifyLabel} ».`,
    );
    expect(result.text).not.toContain(
      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
    );
    expect(CLARIFY_OPTION_REF).toBe("opt:trajectory:clarify-first");
  });
```

### Result

**PASS** — contextual clarify label taken from `tds.optionRefs`/`tds.optionLabels` (not hardcoded primary); structured block exact; HD count unchanged; optionRef `opt:trajectory:clarify-first`.

## 13–17. T-SPC-15 — historical conversation via `history`

### Why prior test was insufficient

Previous T-SPC-15 injected recovery wording into the **current** turn narrative. That did not exercise `orchestrateProjectAssistantTurn({ history })`.

### New test body

```ts
it("T-SPC-15 — historical conversation recovery wording does not override CURRENT nominal TDS", async () => {
    const db = tempProductDbPath("spc-hist.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spch" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "spch" });
    const oa = runtime.oa!;
    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    const boundedIdx = tds.optionRefs.indexOf(BOUNDED_OPTION_REF);
    const nominalBoundedLabel = tds.optionLabels[boundedIdx]!.trim();
    expect(nominalBoundedLabel).toBe("Trajectoire bornée directe");

    const staleStructuredBlock = `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`;
    const history: AssistantHistoryMessage[] = [
      {
        role: "user",
        content: "Ancien tour — quelle trajectoire recommander ?",
      },
      {
        role: "assistant",
        content: `Tour historique (stale). ${staleStructuredBlock}`,
      },
    ];
    expect(history[1]!.content).toContain(staleStructuredBlock);

    const currentNarrative =
      "Nouveau tour bounded-direct (fixture SPC-15 — narrative sans libellé recovery ni TDS).";
    expect(currentNarrative).not.toContain(RECOVERY_BOUNDED_LABEL);
    expect(currentNarrative).not.toContain(nominalBoundedLabel);

    const result = await runBoundedStructuredTurn({
      projectId: seeded.projectId,
      composed,
      oa,
      history,
      narrative: currentNarrative,
      suffix: "hist",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.text).toContain(
      `Recommandation structurée (pas une décision) : « ${nominalBoundedLabel} ».`,
    );
    expect(result.text).not.toContain(staleStructuredBlock);
    expect(result.text).not.toContain(
      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
    );
    expect(BOUNDED_OPTION_REF).toBe("opt:trajectory:bounded-direct");
    // Historical conversation was an input only — no migration/rewrite of history.
    expect(history[1]!.content).toContain(staleStructuredBlock);
  });
```

### Proof of real `history` usage

- Prior assistant message contains: `Recommandation structurée (pas une décision) : « Replanifier ou suspendre sans relance immédiate ».`
- Passed as `history: AssistantHistoryMessage[]` into `orchestrateProjectAssistantTurn`
- Current narrative **does not** contain recovery nor nominal TDS label
- New structured block: `« Trajectoire bornée directe »`
- New structured block **does not** contain recovery label
- History array content still contains stale block after turn (no migration/rewrite)
- FakeConversationProvider envelope inspection not required (orchestrator `history` input sufficient per cycle brief)

### CURRENT TDS outrank

CURRENT TDS nominal bounded + historical recovery structured wording → new Pilot structured Recommendation uses CURRENT nominal label only.

## 18. Clarify contextual label exact

Derived from CURRENT TDS pairing for `CLARIFY_OPTION_REF` at runtime of the test.

## 19. optionRef identity

- bounded: `opt:trajectory:bounded-direct`
- clarify: `opt:trajectory:clarify-first`
- No transformation.

## 20–21. HumanDecision / EC non-impact

- T-SPC-06/15 assert decision list length unchanged across the turn
- No HD/EC Product code touched this sub-pass (or Delivery authority paths)

## 22. Targeted results

| Suite | Result |
|-------|--------|
| corr02.c2ProductTurn.d0.test.ts | **6 PASS** (incl. T-SPC-06, T-SPC-15) |
| studioCognitiveContext.test.ts | 11 PASS |
| pilotNoraStudioSemanticContinuity.d0.test.ts | 15 PASS |
| corr01.d0.test.ts | 5 PASS |
| presentationLabels.test.ts | 39 PASS |
| **Targeted total** | **76 PASS** (6 + 70) |

## 23–27. Full validations

| Check | Result |
|-------|--------|
| Full Vitest | **5072 passed**, 137 skipped (458 files) |
| `npx tsc --noEmit` | PASS |
| lint | PASS |
| build | PASS (pre-existing better-sqlite3 warning unchanged) |
| `git diff --check` | PASS |

## 28. PRR manifest unchanged during this sub-pass

Yes — sha256 identical to entry; no new digest generated (corr02 not PRR-tracked).

## 29. Product implementation unchanged during this sub-pass

Yes — presentationLabels.ts, studioCognitiveContext.ts, orchestrateTurn.ts bit-identical to entry.

## 30. Fake / Real

- Fake: FakeConversationProvider
- Product path: real `orchestrateProjectAssistantTurn`
- REAL this cycle: **ZERO**
- READY FOR REAL: **NO**
- runtime v3: **NON ADOPTED**

## 31. Réserves

- better-sqlite3 Next build warning (pre-existing, non-blocking)
- Fake provider does not expose last-message capture API; history proof is via explicit orchestrator `history` param (accepted by cycle brief)

## 32. Claims

- Deterministic semantic presentation continuity proven at tested scope **including** clarify transcript + true historical conversation outrank
- Authority unchanged
- Test-only proof completion; Delivery Option B implementation unchanged this sub-pass

## 33. Anti-claims

- NOT full Product REAL E2E
- NOT READY FOR REAL
- NOT runtime v3 adopted
- NOT HabitFlow HD/EC executed

## 34. Project Git effects

| Effect | Value |
|--------|-------|
| project commit | **NO** |
| project push | **NO** |
| PR | **NO** |
| merge | **NO** |
| staged | **none** |

## 35. Review Handoff

Published in-cycle: `docs(review-handoff): publish habitflow semantic presentation proof completion`

## 36. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01**

**Proof ceiling:** DETERMINISTIC SEMANTIC PRESENTATION CONTINUITY PROVEN AT TESTED SCOPE

ZERO REAL · READY FOR REAL NO · runtime v3 NON ADOPTED

---

## APPENDIX — FULL USEFUL DIFF (current candidate, all 6 Product files)

### 1. presentationLabels.ts (Delivery — unchanged this QA sub-pass)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index 54076f12..b9db0e87 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -862,6 +862,9 @@ export function pilotProposalOptionLabel(
 /**
  * Pilote labels for ProjectTrajectory option refs (PJ-REPROOF-01/02).
  * Raw optionRef stays secondary/audit only.
+ *
+ * CONTEXTLESS FALLBACK ONLY — recovery-biased for bounded-direct. When trajectory
+ * decision-support OptionSet pairing is available, use `pilotPresentedOptionLabel`.
  */
 export function pilotTrajectoryOptionLabel(
   optionRef: string | null | undefined,
@@ -882,6 +885,20 @@ export function pilotTrajectoryOptionLabel(
   }
 }

+/**
+ * Pure shape adapter: parallel TDS arrays → PresentedOptionSet-compatible rows.
+ * Does not resolve labels — use with `pilotPresentedOptionLabel`.
+ */
+export function presentedOptionsFromTrajectoryDecisionSupportPairing(
+  optionRefs: readonly string[],
+  optionLabels: readonly string[],
+): readonly { readonly optionRef: string; readonly label: string }[] {
+  return optionRefs.map((optionRef, i) => ({
+    optionRef,
+    label: (optionLabels[i] ?? "").trim(),
+  }));
+}
+
 /** Resolve Pilote label from PresentedOptionSet when available; else trajectory map. */
 export function pilotPresentedOptionLabel(input: {
   readonly optionRef: string | null | undefined;
```

### 2. studioCognitiveContext.ts (Delivery — unchanged this QA sub-pass)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index 9ac22fff..a5d1af96 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -47,7 +47,10 @@ import {
   classifyAcwRecommendationCurrentness,
   resolveTrajectoryRecommendationCutoffFromDecisions,
 } from "../trajectoryRecommendationCurrentness";
-import { pilotTrajectoryOptionLabel } from "../presentationLabels";
+import {
+  pilotPresentedOptionLabel,
+  presentedOptionsFromTrajectoryDecisionSupportPairing,
+} from "../presentationLabels";
 import {
   buildReservationCompactForPrompt,
   formatReservationCompactForPrompt,
@@ -892,27 +895,6 @@ export async function composeStudioCognitiveContext(input: {
   };
 }

-/**
- * Resolve a trajectory option presentation label from the server OptionSet
- * pairing (optionRefs[i] ↔ optionLabels[i]). Same optionRef can legitimately
- * carry different labels across nominal vs recovery contexts.
- *
- * Fallback to contextless `pilotTrajectoryOptionLabel` only when the
- * contextual label is absent — never as the nominal source of truth.
- */
-function contextualTrajectoryOptionLabelFromDecisionSupport(
-  optionRef: string,
-  optionRefs: readonly string[],
-  optionLabels: readonly string[],
-): string {
-  const idx = optionRefs.indexOf(optionRef);
-  if (idx >= 0) {
-    const contextual = optionLabels[idx]?.trim();
-    if (contextual) return contextual;
-  }
-  return pilotTrajectoryOptionLabel(optionRef);
-}
-
 /**
  * Render StudioCognitiveContext into F1 system-prompt sections.
  * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
@@ -1025,29 +1007,29 @@ export function buildStudioCognitivePromptSections(
     }
     const tds = ctx.trajectoryDecisionSupport;
     if (tds.state === "PRESENT" && tds.optionRefs.length > 0) {
+      const presentedOptions =
+        presentedOptionsFromTrajectoryDecisionSupportPairing(
+          tds.optionRefs,
+          tds.optionLabels,
+        );
       lines.push("");
       lines.push(
         "Options trajectoire serveur (decision-support — Nora ne peut recommander QUE parmi ces refs) :",
       );
       for (let i = 0; i < tds.optionRefs.length; i += 1) {
         const ref = tds.optionRefs[i]!;
-        const label = contextualTrajectoryOptionLabelFromDecisionSupport(
-          ref,
-          tds.optionRefs,
-          tds.optionLabels,
-        );
+        const label = pilotPresentedOptionLabel({
+          optionRef: ref,
+          options: presentedOptions,
+        });
         lines.push(`• ${ref} — ${label}`);
       }
       if (tds.currentNoraRecommendedOptionRef) {
-        // HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01 — use OptionSet contextual
-        // label (nominal vs recovery). Same optionRef can carry different
-        // presentation labels; never re-map via contextless recovery helper.
         const recRef = tds.currentNoraRecommendedOptionRef;
-        const recLabel = contextualTrajectoryOptionLabelFromDecisionSupport(
-          recRef,
-          tds.optionRefs,
-          tds.optionLabels,
-        );
+        const recLabel = pilotPresentedOptionLabel({
+          optionRef: recRef,
+          options: presentedOptions,
+        });
         lines.push(
           `Recommendation Nora courante (structurée) : ${recRef} (${recLabel}) — PAS une HumanDecision.`,
         );
```

### 3. orchestrateTurn.ts (Delivery — unchanged this QA sub-pass)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 08b3e5bd..165c90be 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -48,7 +48,11 @@ import {
   LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
   lifecycleRecommendationMaterializeFailurePiloteNotice,
 } from "./lifecycleRecommendationPiloteNotice";
-import { pilotTrajectoryOptionLabel } from "./presentationLabels";
+import {
+  pilotPresentedOptionLabel,
+  pilotTrajectoryOptionLabel,
+  presentedOptionsFromTrajectoryDecisionSupportPairing,
+} from "./presentationLabels";
 import {
   materializeActiveCycleWork,
   validateActiveCycleRecommendationAgainstDecisionSupport,
@@ -1212,13 +1216,24 @@ export async function orchestrateProjectAssistantTurn(input: {
             optionRefs: tdsForDisplay?.optionRefs,
           })
         : { ok: true as const };
+      const recommendedOptionRef =
+        structuredRecItem?.recommendedOptionRef?.trim() ?? "";
       const structuredRecommendation =
-        displayValidation.ok && structuredRecItem?.recommendedOptionRef
+        displayValidation.ok && recommendedOptionRef
           ? {
-              recommendedOptionRef: structuredRecItem.recommendedOptionRef.trim(),
-              optionLabel: pilotTrajectoryOptionLabel(
-                structuredRecItem.recommendedOptionRef,
-              ),
+              recommendedOptionRef,
+              optionLabel:
+                tdsForDisplay?.state === "PRESENT" &&
+                (tdsForDisplay.optionRefs?.length ?? 0) > 0
+                  ? pilotPresentedOptionLabel({
+                      optionRef: recommendedOptionRef,
+                      options:
+                        presentedOptionsFromTrajectoryDecisionSupportPairing(
+                          tdsForDisplay.optionRefs!,
+                          tdsForDisplay.optionLabels ?? [],
+                        ),
+                    })
+                  : pilotTrajectoryOptionLabel(recommendedOptionRef),
             }
           : null;
       assistantText = composePilotFacingAssistantText(
```

### 4. presentationLabels.test.ts (Delivery — unchanged this QA sub-pass)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
index f753d59d..0ab1db55 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
@@ -11,6 +11,8 @@ import {
   resolvePersistenceNotice,
   shouldShowProjectRecovery,
   textContainsInternalLpsMarker,
+  pilotPresentedOptionLabel,
+  pilotTrajectoryOptionLabel,
 } from "@/features/project-assistant/presentationLabels";

 describe("G-UX-10 recommendation freshness", () => {
@@ -591,3 +593,28 @@ describe("UAT-UX-09 pre-confirmation Fake/Real truth", () => {
     expect(facts.constraints).toContain("Pas d'écriture Git");
   });
 });
+
+describe("HABITFLOW-SPC-01 — pilotPresentedOptionLabel fallback (T-SPC-10)", () => {
+  it("falls back to contextless map when no matching contextual option", () => {
+    expect(
+      pilotPresentedOptionLabel({
+        optionRef: "opt:trajectory:bounded-direct",
+        options: [{ optionRef: "opt:trajectory:governed-gated", label: "X" }],
+      }),
+    ).toBe(pilotTrajectoryOptionLabel("opt:trajectory:bounded-direct"));
+  });
+
+  it("prefers contextual label when optionRef matches", () => {
+    expect(
+      pilotPresentedOptionLabel({
+        optionRef: "opt:trajectory:bounded-direct",
+        options: [
+          {
+            optionRef: "opt:trajectory:bounded-direct",
+            label: "Trajectoire bornée directe",
+          },
+        ],
+      }),
+    ).toBe("Trajectoire bornée directe");
+  });
+});
```

### 5. production-runtime-reference.manifest.json (Delivery — unchanged this QA sub-pass)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 6159c7ca..ca1dc909 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -582,7 +582,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "44ae65a43da3f02e"
+      "sha256_16": "a7b846cb4ae83cc6"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
```

### 6. pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts (Delivery + QA proof-completion delta)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
index e0e0701b..7018c7e6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
@@ -4,7 +4,8 @@
  *
  * Exercises real orchestrateProjectAssistantTurn with FakeConversationProvider
  * structured output. Does NOT call the C2 validator as the primary assertion.
- * ZERO production code change. Isolated Product SQLite only.
+ * HABITFLOW-SPC-01 — transcript structured Recommendation uses TDS contextual labels.
+ * Isolated Product SQLite only.
  */
 import fs from "node:fs";
 import os from "node:os";
@@ -25,6 +26,8 @@ import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-r
 import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
 import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import type { StudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
+import type { AssistantHistoryMessage } from "@/features/project-assistant/types";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
@@ -400,10 +403,257 @@ describe("CORR-02 C2 Product-turn integration proof", () => {
       lpsVersionBefore,
     );

-    // Pilot-facing structured line derived from same canonical option.
-    expect(result.text).toMatch(
-      /Recommandation structurée \(pas une décision\)/i,
+    const governedIdx = tds.optionRefs.indexOf(GOVERNED_OPTION_REF);
+    const governedLabel = tds.optionLabels[governedIdx]!.trim();
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${governedLabel} ».`,
     );
     expect(result.text).not.toContain(INVENTED_REF);
   });
 });
+
+describe("HABITFLOW-SPC-01 — transcript contextual structured Recommendation", () => {
+  const RECOVERY_BOUNDED_LABEL =
+    "Replanifier ou suspendre sans relance immédiate";
+
+  function withPatchedTdsLabels(
+    ctx: StudioCognitiveContext,
+    patch: (ref: string, label: string) => string,
+  ): StudioCognitiveContext {
+    const tds = ctx.trajectoryDecisionSupport;
+    if (tds.state !== "PRESENT") return ctx;
+    const optionLabels = tds.optionRefs.map((ref, i) =>
+      patch(ref, tds.optionLabels[i] ?? ""),
+    );
+    return {
+      ...ctx,
+      trajectoryDecisionSupport: {
+        ...tds,
+        optionLabels: Object.freeze([...optionLabels]),
+      },
+    };
+  }
+
+  async function runStructuredRecommendationTurn(input: {
+    projectId: string;
+    composed: StudioCognitiveContext;
+    narrative: string;
+    suffix: string;
+    recommendedOptionRef: string;
+    content?: string;
+    history?: AssistantHistoryMessage[];
+    oa?: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
+  }) {
+    const provider = new FakeConversationProvider({
+      scripted: [
+        acwProductTurn(
+          [
+            {
+              type: "Recommendation",
+              statement: input.narrative,
+              confidence: "high",
+              blocking: null,
+              recommendedOptionRef: input.recommendedOptionRef,
+            },
+          ],
+          input.narrative,
+        ),
+      ],
+    });
+
+    const decisionsBefore =
+      input.oa != null
+        ? (
+            await input.oa.decisionServices.decisions.listByProject(
+              input.projectId,
+            )
+          ).length
+        : null;
+
+    const result = await orchestrateProjectAssistantTurn({
+      projectId: input.projectId,
+      content: input.content ?? "Recommande parmi les options serveur.",
+      history: input.history,
+      sessionDbPath: sessionDbPath(`spc-turn-${input.suffix}.sqlite`),
+      simulateMemoryBUnavailable: true,
+      provider,
+      studioCognitiveContext: input.composed,
+      turnCorrelationId: `ltu:spc:turn:${input.suffix}`,
+    });
+
+    if (input.oa != null && decisionsBefore != null) {
+      const decisionsAfter =
+        await input.oa.decisionServices.decisions.listByProject(input.projectId);
+      expect(decisionsAfter.length).toBe(decisionsBefore);
+    }
+
+    return result;
+  }
+
+  async function runBoundedStructuredTurn(input: {
+    projectId: string;
+    composed: StudioCognitiveContext;
+    narrative: string;
+    suffix: string;
+    history?: AssistantHistoryMessage[];
+    oa?: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
+  }) {
+    return runStructuredRecommendationTurn({
+      ...input,
+      recommendedOptionRef: BOUNDED_OPTION_REF,
+      content: "Recommande trajectoire bornée.",
+    });
+  }
+
+  it("T-SPC-03 — nominal bounded transcript uses TDS label, not contextless recovery map", async () => {
+    const db = tempProductDbPath("spc-nominal.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spcn" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "spcn" });
+    const oa = runtime.oa!;
+    const { tds, composed } = await composeWithDecisionSupport({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+    });
+    const boundedIdx = tds.optionRefs.indexOf(BOUNDED_OPTION_REF);
+    const nominalBoundedLabel = tds.optionLabels[boundedIdx]!.trim();
+    expect(nominalBoundedLabel).toBe("Trajectoire bornée directe");
+
+    const result = await runBoundedStructuredTurn({
+      projectId: seeded.projectId,
+      composed,
+      narrative:
+        "Recommandation structurée bounded-direct (fixture SPC nominal — sans répéter le libellé TDS).",
+      suffix: "nom",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${nominalBoundedLabel} ».`,
+    );
+    expect(result.text).not.toContain(
+      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
+    );
+  });
+
+  it("T-SPC-04 — recovery bounded transcript uses contextual recovery label", async () => {
+    const db = tempProductDbPath("spc-recovery.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spcr" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "spcr" });
+    const oa = runtime.oa!;
+    const { composed } = await composeWithDecisionSupport({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+    });
+    const composedRecovery = withPatchedTdsLabels(composed, (ref, label) =>
+      ref === BOUNDED_OPTION_REF ? RECOVERY_BOUNDED_LABEL : label,
+    );
+
+    const result = await runBoundedStructuredTurn({
+      projectId: seeded.projectId,
+      composed: composedRecovery,
+      narrative: "Replanifier sans relance (fixture SPC recovery).",
+      suffix: "rec",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
+    );
+    expect(result.text).not.toContain(
+      "Recommandation structurée (pas une décision) : « Trajectoire bornée directe ».",
+    );
+  });
+
+  it("T-SPC-06 — clarify transcript uses CURRENT TDS contextual label", async () => {
+    const db = tempProductDbPath("spc-clarify.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spcc" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "spcc" });
+    const oa = runtime.oa!;
+    const { tds, composed } = await composeWithDecisionSupport({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+    });
+    const clarifyIdx = tds.optionRefs.indexOf(CLARIFY_OPTION_REF);
+    expect(clarifyIdx).toBeGreaterThanOrEqual(0);
+    const clarifyLabel = tds.optionLabels[clarifyIdx]!.trim();
+    expect(clarifyLabel.length).toBeGreaterThan(0);
+
+    const result = await runStructuredRecommendationTurn({
+      projectId: seeded.projectId,
+      composed,
+      oa,
+      recommendedOptionRef: CLARIFY_OPTION_REF,
+      narrative:
+        "Recommendation clarify-first structurée (fixture SPC-06 — sans répéter le libellé TDS).",
+      content: "Clarifie avant d'engager.",
+      suffix: "clar",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${clarifyLabel} ».`,
+    );
+    expect(result.text).not.toContain(
+      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
+    );
+    expect(CLARIFY_OPTION_REF).toBe("opt:trajectory:clarify-first");
+  });
+
+  it("T-SPC-15 — historical conversation recovery wording does not override CURRENT nominal TDS", async () => {
+    const db = tempProductDbPath("spc-hist.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "spch" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "spch" });
+    const oa = runtime.oa!;
+    const { tds, composed } = await composeWithDecisionSupport({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+    });
+    const boundedIdx = tds.optionRefs.indexOf(BOUNDED_OPTION_REF);
+    const nominalBoundedLabel = tds.optionLabels[boundedIdx]!.trim();
+    expect(nominalBoundedLabel).toBe("Trajectoire bornée directe");
+
+    const staleStructuredBlock = `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`;
+    const history: AssistantHistoryMessage[] = [
+      {
+        role: "user",
+        content: "Ancien tour — quelle trajectoire recommander ?",
+      },
+      {
+        role: "assistant",
+        content: `Tour historique (stale). ${staleStructuredBlock}`,
+      },
+    ];
+    expect(history[1]!.content).toContain(staleStructuredBlock);
+
+    const currentNarrative =
+      "Nouveau tour bounded-direct (fixture SPC-15 — narrative sans libellé recovery ni TDS).";
+    expect(currentNarrative).not.toContain(RECOVERY_BOUNDED_LABEL);
+    expect(currentNarrative).not.toContain(nominalBoundedLabel);
+
+    const result = await runBoundedStructuredTurn({
+      projectId: seeded.projectId,
+      composed,
+      oa,
+      history,
+      narrative: currentNarrative,
+      suffix: "hist",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${nominalBoundedLabel} ».`,
+    );
+    expect(result.text).not.toContain(staleStructuredBlock);
+    expect(result.text).not.toContain(
+      `Recommandation structurée (pas une décision) : « ${RECOVERY_BOUNDED_LABEL} ».`,
+    );
+    expect(BOUNDED_OPTION_REF).toBe("opt:trajectory:bounded-direct");
+    // Historical conversation was an input only — no migration/rewrite of history.
+    expect(history[1]!.content).toContain(staleStructuredBlock);
+  });
+});
```
