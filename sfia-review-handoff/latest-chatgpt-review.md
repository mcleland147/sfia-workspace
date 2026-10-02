# HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01 — ChatGPT Critical Review Pack (FULL)

**OVERWRITE** mono-cycle. Not a micro-cycle redesign. Not CP5.

### 1. Timestamp
- UTC: `2026-10-02T09:29:21Z`
- Local: `2026-10-02T11:29:21+0200`

### 2. Cycle
**HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01** · Cycle 8 Delivery · CRITICAL · EVOL

### 3. Git truth
| Field | Value |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` |
| branch | `delivery/sfia-studio-habitflow-semantic-option-label-corr-01` |
| HEAD | `b4547c8c9b5bada18695aba887e4200d03d51d87` |
| origin/main | `b4547c8c9b5bada18695aba887e4200d03d51d87` |
| ahead/behind | `0	0` |
| project commits | **0** (no commit authorized) |
| staged | none |

Initial entry note: workspace was on obsolete delivery tip `9197cfe1` (ancestor of merged PR #542). Aligned by creating correction branch from `origin/main` @ `b4547c8c…`. Versioned product tree was clean; only `.tmp-sfia-review/**` local dirt.

Status now:
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
?? .tmp-sfia-review/pack-assets/
```

Diff stat (product only):
```
.../studioCognitiveContext.test.ts                 | 144 +++++++++++++++++++++
 .../project-assistant/f2/studioCognitiveContext.ts |  39 +++++-
 2 files changed, 180 insertions(+), 3 deletions(-)
```

`git diff --check` (product) → **0**

### 4. Diagnostic — CONFIRMED
- `deriveTrajectoryOptions()` / OptionSet: same `opt:trajectory:bounded-direct` → nominal label `Trajectoire bornée directe` vs recovery label `Replanifier ou suspendre sans relance immédiate`.
- `resolveTrajectoryDecisionSupportProjection` already transports `optionRefs` + `optionLabels` contextually.
- `buildStudioCognitivePromptSections()` listed Options with `tds.optionLabels[i]` correctly, BUT rendered `Recommendation Nora courante` via contextless `pilotTrajectoryOptionLabel(ref)` which always maps bounded-direct → recovery wording.
- Result: Nora saw contradictory representations of the same Product state (HabitFlow campaign).

### 5. Sources read
Build Doctrine, Roadmap, C1, framing 32/33/34, CKC 08 (read-only), cycle routing guide, execution template, `studioCognitiveContext.ts`, `presentationLabels.ts`, `trajectoryOptions.ts`, `resolveTrajectoryDecisionSupportProjection.ts`, semantic continuity tests, historical commit context `71c31a8e…`.

### 6. Files modified
1. `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
2. `projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts`

No other product files. Protected paths untouched. No authority/decision/EC changes.

### 7. Fix (minimal)
Added `contextualTrajectoryOptionLabelFromDecisionSupport(ref, optionRefs, optionLabels)`:
- prefer `optionLabels[indexOf(ref)]` when present;
- fallback to `pilotTrajectoryOptionLabel(ref)` only if contextual label absent.

Used for Option list rows AND for `Recommendation Nora courante (structurée)`.

Does NOT change optionRefs, recommendedOptionRef, HumanDecision, authority, recovery derivation, or presentationLabels global map.

### 8. Complete useful diffs

#### studioCognitiveContext.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index cbe173ab..9ac22fff 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -892,6 +892,27 @@ export async function composeStudioCognitiveContext(input: {
   };
 }
 
+/**
+ * Resolve a trajectory option presentation label from the server OptionSet
+ * pairing (optionRefs[i] ↔ optionLabels[i]). Same optionRef can legitimately
+ * carry different labels across nominal vs recovery contexts.
+ *
+ * Fallback to contextless `pilotTrajectoryOptionLabel` only when the
+ * contextual label is absent — never as the nominal source of truth.
+ */
+function contextualTrajectoryOptionLabelFromDecisionSupport(
+  optionRef: string,
+  optionRefs: readonly string[],
+  optionLabels: readonly string[],
+): string {
+  const idx = optionRefs.indexOf(optionRef);
+  if (idx >= 0) {
+    const contextual = optionLabels[idx]?.trim();
+    if (contextual) return contextual;
+  }
+  return pilotTrajectoryOptionLabel(optionRef);
+}
+
 /**
  * Render StudioCognitiveContext into F1 system-prompt sections.
  * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
@@ -1010,13 +1031,25 @@ export function buildStudioCognitivePromptSections(
       );
       for (let i = 0; i < tds.optionRefs.length; i += 1) {
         const ref = tds.optionRefs[i]!;
-        const label =
-          tds.optionLabels[i] ?? pilotTrajectoryOptionLabel(ref);
+        const label = contextualTrajectoryOptionLabelFromDecisionSupport(
+          ref,
+          tds.optionRefs,
+          tds.optionLabels,
+        );
         lines.push(`• ${ref} — ${label}`);
       }
       if (tds.currentNoraRecommendedOptionRef) {
+        // HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01 — use OptionSet contextual
+        // label (nominal vs recovery). Same optionRef can carry different
+        // presentation labels; never re-map via contextless recovery helper.
+        const recRef = tds.currentNoraRecommendedOptionRef;
+        const recLabel = contextualTrajectoryOptionLabelFromDecisionSupport(
+          recRef,
+          tds.optionRefs,
+          tds.optionLabels,
+        );
         lines.push(
-          `Recommendation Nora courante (structurée) : ${tds.currentNoraRecommendedOptionRef} (${pilotTrajectoryOptionLabel(tds.currentNoraRecommendedOptionRef)}) — PAS une HumanDecision.`,
+          `Recommendation Nora courante (structurée) : ${recRef} (${recLabel}) — PAS une HumanDecision.`,
         );
       } else {
         lines.push(

```

#### studioCognitiveContext.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
index 2d52e150..64487e05 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
@@ -749,3 +749,147 @@ describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
   });
 
 });
+
+/**
+ * HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01 — bounded-direct label must follow
+ * the server OptionSet contextual label (nominal ≠ recovery), not the
+ * contextless recovery mapping in pilotTrajectoryOptionLabel.
+ */
+describe("HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01 — contextual bounded-direct label", () => {
+  const BOUNDED = "opt:trajectory:bounded-direct";
+  const GOVERNED = "opt:trajectory:governed-gated";
+  const CLARIFY = "opt:trajectory:clarify-first";
+  const NOMINAL_BOUNDED_LABEL = "Trajectoire bornée directe";
+  const RECOVERY_BOUNDED_LABEL =
+    "Replanifier ou suspendre sans relance immédiate";
+
+  function promptWithBoundedRecommendation(input: {
+    readonly boundedLabel: string;
+    readonly recommendedRef?: string;
+  }): string {
+    const optionRefs = [GOVERNED, BOUNDED, CLARIFY] as const;
+    const optionLabels = [
+      "Préparer une nouvelle tentative gouvernée",
+      input.boundedLabel,
+      "Diagnostiquer / clarifier avant nouvelle tentative",
+    ] as const;
+    const recommendedRef = input.recommendedRef ?? BOUNDED;
+    const ctx = {
+      projectTruth: {
+        projectId: "prj:habitflow-label",
+        name: "HabitFlow",
+        objective: "O",
+        context: "C",
+        constraints: [],
+        criticality: "STANDARD",
+        shortReference: null,
+        lpsId: "lps:hf",
+        lpsVersion: 1,
+        activeCycleInstanceId: "cycinst:hf",
+        doctrineId: "pkg:hf",
+        doctrineVersion: "1",
+        doctrineStatus: "resolved",
+      },
+      method: {
+        orientation: {
+          state: "UNRESOLVED" as const,
+          candidateCycleTypeId: null,
+        },
+        cycleLabel: "Delivery",
+        ckcLensSection: null,
+        ckcLoaded: false,
+        doctrinePinPresent: true,
+        sourceLimit: "none" as const,
+        trajectory: null,
+      },
+      activeCycle: {
+        cycleInstanceId: "cycinst:hf",
+        cycleTypeId: "cyc:delivery",
+        cycleLabel: "Delivery",
+        profile: "Standard",
+        status: "active",
+        workEligible: true,
+        trajectoryId: "traj:hf",
+        trajectoryVersion: 1,
+        trajectoryStepId: null,
+        ckcResolutionRef: null,
+      },
+      activeCycleWorkItems: { state: "NONE" as const, items: [] },
+      trajectoryDecisionSupport: {
+        state: "PRESENT" as const,
+        optionRefs: Object.freeze([...optionRefs]),
+        optionLabels: Object.freeze([...optionLabels]),
+        currentNoraRecommendedOptionRef: recommendedRef,
+        currentRecommendationSource: "nora_active_cycle" as const,
+      },
+      decisions: { state: "NONE" as const, items: [] },
+      evidence: { state: "NONE" as const, items: [] },
+      review: { state: "NONE" as const, items: [] },
+      trajectory: { state: "ABSENT" as const, current: null },
+      lifecycleRecommendation: {
+        state: "NONE" as const,
+        current: null,
+        satisfiesPreCycleNextCycleTransition: false,
+      },
+      reservationCompactSection: null,
+      reservationFocusSection: null,
+      limits: {
+        oaAvailable: true,
+        truthOutranksConversation: true as const,
+        composerDoesNotScoreMaturity: true as const,
+        composerDoesNotSelectTrajectory: true as const,
+      },
+    } satisfies StudioCognitiveContext;
+    return buildStudioCognitivePromptSections(ctx).join("\n");
+  }
+
+  it("NOMINAL — bounded-direct Recommendation uses Trajectoire bornée directe", () => {
+    const prompt = promptWithBoundedRecommendation({
+      boundedLabel: NOMINAL_BOUNDED_LABEL,
+    });
+    expect(prompt).toContain(
+      `Recommendation Nora courante (structurée) : ${BOUNDED} (${NOMINAL_BOUNDED_LABEL}) — PAS une HumanDecision.`,
+    );
+    expect(prompt).toContain(`• ${BOUNDED} — ${NOMINAL_BOUNDED_LABEL}`);
+    // Must not re-map via contextless recovery helper for this Recommendation.
+    expect(prompt).not.toContain(
+      `Recommendation Nora courante (structurée) : ${BOUNDED} (${RECOVERY_BOUNDED_LABEL})`,
+    );
+    // optionRef identity unchanged
+    expect(prompt).toMatch(
+      new RegExp(
+        `Recommendation Nora courante \\(structurée\\) : ${BOUNDED.replace(/:/g, "\\:")} \\(`,
+      ),
+    );
+  });
+
+  it("RECOVERY — same bounded-direct ref keeps Replanifier ou suspendre label", () => {
+    const prompt = promptWithBoundedRecommendation({
+      boundedLabel: RECOVERY_BOUNDED_LABEL,
+    });
+    expect(prompt).toContain(
+      `Recommendation Nora courante (structurée) : ${BOUNDED} (${RECOVERY_BOUNDED_LABEL}) — PAS une HumanDecision.`,
+    );
+    expect(prompt).toContain(`• ${BOUNDED} — ${RECOVERY_BOUNDED_LABEL}`);
+    expect(prompt).not.toContain(
+      `Recommendation Nora courante (structurée) : ${BOUNDED} (${NOMINAL_BOUNDED_LABEL})`,
+    );
+  });
+
+  it("optionRef is never transformed when label context changes", () => {
+    const nominal = promptWithBoundedRecommendation({
+      boundedLabel: NOMINAL_BOUNDED_LABEL,
+    });
+    const recovery = promptWithBoundedRecommendation({
+      boundedLabel: RECOVERY_BOUNDED_LABEL,
+    });
+    const recLine =
+      /Recommendation Nora courante \(structurée\) : (opt:trajectory:bounded-direct) \(([^)]+)\)/;
+    const n = nominal.match(recLine);
+    const r = recovery.match(recLine);
+    expect(n?.[1]).toBe(BOUNDED);
+    expect(r?.[1]).toBe(BOUNDED);
+    expect(n?.[2]).toBe(NOMINAL_BOUNDED_LABEL);
+    expect(r?.[2]).toBe(RECOVERY_BOUNDED_LABEL);
+  });
+});

```

### 9. Proofs
**NOMINAL:** OptionSet label `Trajectoire bornée directe` → prompt Recommendation line uses that label; does NOT use recovery wording for that Recommendation.
**RECOVERY:** same optionRef → prompt keeps `Replanifier ou suspendre sans relance immédiate`.
**Identity:** optionRef never transformed across contexts.
**Authority:** no HD created; no authority mutation; no EC mutation.

### 10. Validations (executed now)
**Targeted:**
```

stdout | __tests__/project-assistant/studioCognitiveContext.test.ts > CORR-PROOF-04 studioCognitiveContext composer > S8/S10/S12 — PRESENT projections when seeded via legitimate services
{"event":"oa.evidence.registered","ts":"2026-09-07T06:00:00.000Z","correlationId":"cor:4ffe36ee541fbbe6","evidenceId":"ev:c04-prj:dde9c82a-3848-4c59-9207-fcd7b904daee","actorId":"actor:morris","newStatus":"available","version":1,"result":"ok","durationMs":1}

stdout | __tests__/project-assistant/studioCognitiveContext.test.ts > CORR-PROOF-04 studioCognitiveContext composer > S8/S10/S12 — PRESENT projections when seeded via legitimate services
{"event":"oa.review_bundle.created","ts":"2026-09-07T06:00:00.000Z","correlationId":"cor:590d7826bea425e4","reviewBundleId":"rb:c04-prj:dde9c82a-3848-4c59-9207-fcd7b904daee","evidenceIds":["ev:c04-prj:dde9c82a-3848-4c59-9207-fcd7b904daee"],"actorId":"actor:morris","newStatus":"draft","version":1,"result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/studioCognitiveContext.test.ts (11 tests) 201ms
 ✓ __tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts (5 tests) 168ms

 Test Files  2 passed (2)
      Tests  16 passed (16)
   Start at  11:28:43
   Duration  1.38s (transform 972ms, setup 58ms, collect 1.99s, tests 368ms, environment 0ms, prepare 44ms)

```
→ 2 files · **16 passed** · exit 0

**Full Vitest:**
```
 ✓ __tests__/auth/allowlist-actor-s1.test.ts (13 tests) 6ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.d0.test.ts (4 tests) 1ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/pre-m6-product-ui/pilotContractPresentation.d0.test.ts (2 tests) 2ms
 ✓ __tests__/project-assistant/pilotExecutionExperience.trustedLaunch.d0.test.ts (3 tests) 1ms
 ✓ __tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts (9 tests) 3ms

 Test Files  458 passed | 17 skipped (475)
      Tests  5066 passed | 137 skipped (5203)
   Start at  11:27:40
   Duration  57.51s (transform 10.60s, setup 20.58s, collect 225.82s, tests 168.84s, environment 16.86s, prepare 19.91s)

```
→ **5066 passed** | 137 skipped · 0 failed · exit 0

**typecheck:** `tsc --noEmit exit 0` · exit **0**
**lint:**
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```
→ exit **0**
**build:**
```
├ ƒ /api/e2e/option-a-qa-scenario          138 B         103 kB
├ ƒ /api/e2e/w3b-boundary                  138 B         103 kB
├ ○ /cycle-actif                         3.83 kB         130 kB
├ ○ /decision                            5.54 kB         132 kB
├ ƒ /login                               1.42 kB         104 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande                 19 kB         145 kB
├ ƒ /projects/[id]                       2.66 kB         109 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ○ /studio                                126 B         165 kB
├ ƒ /studio/projects/[id]                  128 B         165 kB
├ ○ /studio/projects/new                   128 B         165 kB
├ ○ /synthese                            4.85 kB         131 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          2.02 kB


ƒ Middleware                              234 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

```
→ exit **0**

### 11. Fake / Real
Deterministic semantic regression only. Fake provider if used by existing suites. ZERO REAL. ≠ READY FOR REAL. runtime v3 NON ADOPTED.

### 12. Debt / reserves
- `pilotTrajectoryOptionLabel` remains contextless recovery-biased map for fallback/legacy UI — documented, not nominal Product carrier for Recommendation prompt.
- No new debt expected beyond that explicit fallback.
- HabitFlow Product project itself not modified; campaign resume is next gate after review/GO.

### 13. Morris decisions
NONE for this correction scope.
Project commit/push/PR = **NO** this cycle (authorized only after ChatGPT Critical Review + Morris GO).

### 14. Project Git effects
commit NO · push NO · PR NO · merge NO · branch delete NO · force push NO

### 15. Review Handoff
publish-in-cycle · `docs(review-handoff): publish habitflow semantic option label correction`
(filled post-publish)

### 16. Verdict
**READY FOR CHATGPT CRITICAL REVIEW — HABITFLOW-SEMANTIC-OPTION-LABEL-CORR-01**

---

Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter :
branche : `sfia/review-handoff`
fichier : `sfia-review-handoff/latest-chatgpt-review.md`

ChatGPT doit vérifier :
cycle, profil, branche projet, HEAD/base, sources, fichiers modifiés, diff utile, tests, validations, réserves, décisions Morris, verdict, commit handoff et vérification distante.

Si le handoff est absent, incohérent, obsolète ou synthesis-only :
REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING

Si Cursor annonce le handoff publié mais que le remote n’est pas réellement à jour :
REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED
