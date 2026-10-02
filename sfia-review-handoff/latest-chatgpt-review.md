# ChatGPT Critical Review Pack — FULL
## Regularization republish (embedded diffs + PRR digest rule)

## 1. Timestamp

2026-10-02T11:24:29Z (UTC)

**Nature of this republish:** Review Handoff regularization only.
**Product code:** NOT modified in this regularization turn.
**Candidate Product tree:** unchanged from Delivery HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01 (6 uncommitted files).

## 2. Cycle / profile / typology

- **Cycle:** HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01 — Delivery / implémentation (Cycle 8)
- **Profil:** Critical
- **Typology v2.4:** EVOL
- **CKC:** `ckc:studio:delivery`
- **Sub-pass:** Review Handoff regularization (FULL pack + embedded diffs + PRR rule proof)

## 3. MD-HF-SPC-01 consumed

**Option B APPROVED** — reuse existing `pilotPresentedOptionLabel` when TDS OptionSet pairing is available; `pilotTrajectoryOptionLabel` remains contextless fallback only; consolidate/remove private #543 helper; fix `orchestrateTurn.ts` structured Recommendation label from TDS, not optionRef-only map.

## 4. Local Git Truth

### Candidate (unchanged this regularization)

- Branch: `delivery/sfia-studio-habitflow-semantic-presentation-continuity-01`
- HEAD: `e996caeba6ec67c85f9d6f98d31b88958e70159d` (= `origin/main`)
- vs `origin/main`: **0 ahead / 0 behind**
- Staged: **none**
- Project commit/push/PR: **NO**

### Product dirty (exact 6 files — no additional Product change this turn)

1. `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
2. `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
3. `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
4. `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`
5. `projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts`
6. `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

Confirm: regularization touched **only** `.tmp-sfia-review/**` + handoff publish on `sfia/review-handoff`.

## 5. Branch / base

- **Delivery branch:** `delivery/sfia-studio-habitflow-semantic-presentation-continuity-01`
- **Base:** `origin/main` @ `e996caeba6ec67c85f9d6f98d31b88958e70159d` (merge PR #543)

## 6. Architecture entry handoff

- Branch: `sfia/review-handoff`
- Commit: `7e1842e1a7d430d7d446541fb36ae3aebd432034`
- Blob: `988cd67f413bc7f8845d54c926e73a2c577810ca`
- File: `sfia-review-handoff/latest-chatgpt-review.md` (ARCH-01 qualified Option B)

## 7. Sources

Architecture Option B consumed; Product implementation already present on candidate; this pack embeds full useful diffs for Critical Review.

## 8. Discovery grep (summary)

- `contextualTrajectoryOptionLabelFromDecisionSupport`: **removed** from `studioCognitiveContext.ts`
- Canonical: `pilotPresentedOptionLabel` + shape adapter `presentedOptionsFromTrajectoryDecisionSupportPairing`
- Fallback: `pilotTrajectoryOptionLabel` when TDS not PRESENT

## 9. Before / after

| Seam | Before (#543 on main) | After (this delivery candidate) |
|------|----------------------|------------------------|
| Nora cognitive INPUT | Contextual via private helper | Same via `pilotPresentedOptionLabel` |
| Pilot transcript structured Recommendation | Contextless `pilotTrajectoryOptionLabel(ref)` | Contextual from TDS when PRESENT |
| W2 TrajectorySurface | Already contextual | Unchanged |
| optionRef identity | Unchanged | Unchanged |

## 10–11. Exact code changes & why Option B

Single canonical presentation owner; close OUTPUT gap without parallel resolver / DTO reshape / authority change.

## 12. Canonical presentation ownership

- **Owner:** `pilotPresentedOptionLabel`
- **Shape adapter only:** `presentedOptionsFromTrajectoryDecisionSupportPairing`

## 13. Contextless fallback disposition

`pilotTrajectoryOptionLabel` = CONTEXTLESS FALLBACK ONLY (JSDoc); strings unchanged.

## 14. Private #543 helper disposition

**Removed** `contextualTrajectoryOptionLabelFromDecisionSupport`.

## 15–27. Delivery proofs (summary)

INPUT preserved; OUTPUT contextual; W2 non-regression; historical prose outrank (T-SPC-15); optionRef/HD/EC unchanged; invented fail-closed; recovery/fallback matrices PASS at prior full validation.

## 28. Fake / Real

FakeConversationProvider; ZERO REAL; READY FOR REAL NO; runtime v3 NON ADOPTED.

## 29–30. Validations (Delivery — already run; not re-run this regularization except PRR proof below)

- Targeted semantic suites PASS
- Full Vitest 5071 PASS
- tsc / lint / build PASS
- git diff --check PASS
- PRR conformance PASS **with** digest sync (re-proven this turn)

## 31. Files modified (candidate Product tree)

Exactly the 6 files listed in §4.

## 32. FULL USEFUL DIFF — all 6 files (embedded)

### presentationLabels.ts

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

### studioCognitiveContext.ts

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

### orchestrateTurn.ts

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

### presentationLabels.test.ts

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

### pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
index e0e0701b..8cbb2481 100644
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
+import { pilotTrajectoryOptionLabel } from "@/features/project-assistant/presentationLabels";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
@@ -400,10 +403,160 @@ describe("CORR-02 C2 Product-turn integration proof", () => {
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
+  async function runBoundedStructuredTurn(input: {
+    projectId: string;
+    composed: StudioCognitiveContext;
+    narrative: string;
+    suffix: string;
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
+              recommendedOptionRef: BOUNDED_OPTION_REF,
+            },
+          ],
+          input.narrative,
+        ),
+      ],
+    });
+
+    return orchestrateProjectAssistantTurn({
+      projectId: input.projectId,
+      content: "Recommande trajectoire bornée.",
+      sessionDbPath: sessionDbPath(`spc-bounded-${input.suffix}.sqlite`),
+      simulateMemoryBUnavailable: true,
+      provider,
+      studioCognitiveContext: input.composed,
+      turnCorrelationId: `ltu:spc:bounded:${input.suffix}`,
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
+  it("T-SPC-15 — historical prose with recovery wording does not override CURRENT TDS nominal structured label", async () => {
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
+
+    const staleWording = pilotTrajectoryOptionLabel(BOUNDED_OPTION_REF);
+    const result = await runBoundedStructuredTurn({
+      projectId: seeded.projectId,
+      composed,
+      narrative: `Ancien tour mentionnait « ${staleWording} » dans la prose — CURRENT TDS reste nominal.`,
+      suffix: "hist",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.text).toContain(staleWording);
+    expect(result.text).toContain(
+      `Recommandation structurée (pas une décision) : « ${nominalBoundedLabel} ».`,
+    );
+    expect(result.text).not.toContain(
+      `Recommandation structurée (pas une décision) : « ${staleWording} ».`,
+    );
+  });
+});
```

### production-runtime-reference.manifest.json

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


## 33. PRR DIGEST SYNCHRONIZATION RULE (authoritative)

### Rule location

1. **Living maintenance contract** — `projects/sfia-studio/production-runtime-reference/README.md`:

> For any Studio change touching tracked paths in the manifest:
> … Refresh digests **only after** human/ChatGPT review of content.
> A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
> Refreshing a digest ≠ validating semantic correctness.

2. **Manifest machine contract** — `production-runtime-reference.manifest.json` → `maintenance`:

```json
"maintenance": {
  "digestMismatchMeans": "REFERENCE REVIEW REQUIRED",
  "refreshDigestDoesNotValidateSemantics": true,
  "automateDriftDetection": true,
  "automateStructuralArbitration": false
}
```

3. **Deterministic gate** — `__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`:

- Test: `tracked source/test/volume digests match current tree`
- Asserts every `volumes` / `trackedSources` / `trackedTests` entry: `e.sha256_16 === sha16(file)`
- `orchestrateTurn.ts` is listed under `trackedSources` → any content change **requires** matching `sha256_16` update or full Vitest fails.

### Why the manifest line changed in this Delivery

`orchestrateTurn.ts` is a **tracked source**. Option B modified it. Without updating:

```
"sha256_16": "44ae65a43da3f02e"  →  "a7b846cb4ae83cc6"
```

conformance fails. Sync is **mechanical digest alignment** for Living PRR drift detection — **not** a semantic architecture claim (`refreshDigestDoesNotValidateSemantics: true`).

### Exact manifest-only diff

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

## 34. PRR proof: without digest sync → FAIL / with sync → PASS

Executed this regularization turn on the candidate tree (temporary stale digest then restore; **no lasting Product change**).

### Without digest sync (stale `44ae65a43da3f02e` while file hashes to `a7b846cb4ae83cc6`)

- Exit code: **1**
- Failure:

```
FAIL  productionRuntimeReference.conformance.d0.test.ts
> tracked source/test/volume digests match current tree
AssertionError: expected '44ae65a43da3f02e' to be 'a7b846cb4ae83cc6'
```

Full log excerpt:

```

> sfia-studio@0.1.0 test
> vitest run __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-post-execution-handoff-01/projects/sfia-studio/app

 ❯ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests | 1 failed) 6ms
   ✓ Living Production Runtime Reference conformance > manifest exists and is valid JSON schema v1 1ms
   ✓ Living Production Runtime Reference conformance > canonical README and all volumes exist 0ms
   ✓ Living Production Runtime Reference conformance > component / flow / invariant / dependency IDs are unique and resolve 1ms
   × Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree 3ms
     → expected '44ae65a43da3f02e' to be 'a7b846cb4ae83cc6' // Object.is equality
   ✓ Living Production Runtime Reference conformance > intentional digest drift is detectable (temporary mutation) 0ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts > Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree
AssertionError: expected '44ae65a43da3f02e' to be 'a7b846cb4ae83cc6' // Object.is equality

Expected: "a7b846cb4ae83cc6"
Received: "44ae65a43da3f02e"

 ❯ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts:100:27
     98|       const abs = path.join(repoRoot, e.path);
     99|       expect(fs.existsSync(abs)).toBe(true);
    100|       expect(e.sha256_16).toBe(sha16(abs));
       |                           ^
    101|     }
    102|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 4 passed (5)
   Start at  13:23:54
   Duration  229ms (transform 17ms, setup 54ms, collect 7ms, tests 6ms, environment 0ms, prepare 37ms)


```

### With digest sync (restored `a7b846cb4ae83cc6`)

- Exit code: **0**
- **5/5 tests PASS**

```

> sfia-studio@0.1.0 test
> vitest run __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-post-execution-handoff-01/projects/sfia-studio/app

 ✓ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests) 11ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  13:23:54
   Duration  180ms (transform 15ms, setup 24ms, collect 8ms, tests 11ms, environment 0ms, prepare 29ms)


```

## 35. Risks / reservations

- Digest refresh ≠ semantic PRR content review of volumes (contract says so).
- `composePilotFacingAssistantText` may omit structured block if narrative already contains the label substring (existing behavior).

## 36. Debt / exit

Private #543 helper eliminated; contextless map fallback-only; no parallel resolver; HabitFlow remains PAUSED before HumanDecision.

## 37. Claims

Contextual presentation consolidation proven at tested deterministic scope; authority unchanged.

## 38. Anti-claims

NOT full Product REAL E2E; NOT READY FOR REAL; NOT runtime v3 adopted; NOT HabitFlow HD/EC completed.

## 39. Morris decisions remaining

ChatGPT Critical Review → GO project commit/push/PR → resume HabitFlow.

## 40. Project Git effects (this regularization)

| Effect | Value |
|--------|-------|
| Product code change | **NO** (tree unchanged vs Delivery candidate) |
| project commit | **NO** |
| project push | **NO** |
| PR | **NO** |
| handoff publish | **YES** (sfia/review-handoff only) |

## 41. Review Handoff

Published via `scripts/sfia/publish-review-handoff.sh` (see remote verification after publish).

## 42. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-SEMANTIC-PRESENTATION-CONTINUITY-01**

**Proof ceiling:** DETERMINISTIC SEMANTIC PRESENTATION CONTINUITY PROVEN AT TESTED SCOPE

ZERO REAL · READY FOR REAL NO · runtime v3 NON ADOPTED

**Handoff regularization:** FULL pack now embeds complete 6-file diffs + PRR rule + fail/pass digest proof.
