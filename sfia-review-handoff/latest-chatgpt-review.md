# ChatGPT Review Pack — FULL
## W2 Track D / Bounded CKC Phase B Delivery — Cycle 8

## A. Metadata

| Field | Value |
|---|---|
| timestamp (UTC) | 2026-08-23T13:18:31Z |
| repo | mcleland147/sfia-workspace |
| branch | `delivery/sfia-studio-w2-track-d-phase-b` |
| pre-HEAD / current HEAD | `40de367e2a5a74423f3cab843b7e7a0d1f9879df` |
| origin/main | `40de367e2a5a74423f3cab843b7e7a0d1f9879df` |
| cycle | 8 — Delivery / implémentation |
| typology | INC |
| profile | CRITICAL |
| capacity | W2 Track D — bounded CKC Phase B |
| functional owner | EPIC-B · US-P1-14 · REQ-24 |
| design decision | D-W2-02 ADOPTED |
| Morris Phase B GO | **CONSUMED** |
| project Git integration | **NOT AUTHORIZED** (no commit / push / PR / merge) |
| REAL | **NOT AUTHORIZED** |
| Execute | OUT |
| FinOps/T7 | FREEZE |
| C6 | CLOSED |
| runtime v3 | NON ADOPTED |
| proof ceiling | DETERMINISTIC PROVEN |

Expected origin/main match: `40de367e2a5a74423f3cab843b7e7a0d1f9879df` — **MATCH**.
PR #402 MERGED at that SHA (qualification document 09 integrated).

## B. Sources actually read

### Process
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/ (01–04 only; no Delivery pilot)

### Convergence / Product Completion
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md (READ ONLY; not mutated)
- projects/sfia-studio/product-completion/01…09 (09 READ ONLY; not mutated)
- ux-product-experience/01…03 (READ ONLY contradiction check)
- sfia-v3-framing/30,31,32,33,37

### Product-native CKC (READ ONLY)
- pkg-sfia-studio-doctrine-v3-1.0.0/ckc/08-delivery-implementation.md
- pkg-sfia-studio-doctrine-v3-1.0.0/ckc/10-securite-rssi.md

### Runtime / tests inspected & adapted
- f2/ckcCognitiveContext.ts, orchestrateF2.ts, qualify.ts, types.ts
- w2/actions.ts, qualificationInputs.ts, proposeTrajectoryOptions.ts, trajectoryOptions.ts, presentedOptionSet.ts, types.ts, decideTrajectory.ts
- fakeProvider.ts, disclosures.ts, paths.ts (via barrel), index.ts
- oa doctrine product / ckcConsumptionProof (READ ONLY)
- w1CkcSemanticSeam, w2EabcDelivery, w2Harness, NEW w2TrackDPhaseB

## C. Local Git truth

### Before Delivery (expected / verified)
- branch created: `delivery/sfia-studio-w2-track-d-phase-b` from `origin/main`
- HEAD = origin/main = `40de367e2a5a74423f3cab843b7e7a0d1f9879df`
- unrelated untracked preserved: `.tmp-sfia-review/`, `projects/eventops-poc/`, `projects/flex-office-demo/`

### After Delivery (pre-handoff; project uncommitted)
```
branch: delivery/sfia-studio-w2-track-d-phase-b
HEAD: 40de367e2a5a74423f3cab843b7e7a0d1f9879df
origin/main: 40de367e2a5a74423f3cab843b7e7a0d1f9879df
status --short:
M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
?? .tmp-sfia-review/
?? projects/eventops-poc/
?? projects/flex-office-demo/
?? projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts

diff --cached --name-only:
(empty)

diff --name-only:
projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
projects/sfia-studio/app/features/project-assistant/w2/actions.ts
projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
projects/sfia-studio/app/features/project-assistant/w2/types.ts
projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
```

Project commit: **NONE** (not authorized).
Staged: **EMPTY**.

## D. Convergence qualification

| Dimension | Value |
|---|---|
| capacity | W2 Track D — bounded CKC Phase B Delivery |
| milestone | Product Completion Wave 2 — Track D Phase B (bounded) |
| current state | LOCAL Delivery candidate; deterministic proof green; awaiting ChatGPT review then Morris Git gate |
| assets | existing W2 path ADAPT/COMPLETE; product DoctrinePackage KEEP; CKC package content KEEP |
| gaps closed this cycle | CKC cognition before Options/Recommendation; generic multi-cycle helper; fail-closed; OA flat proof gate; semantic fingerprint binding |
| gaps remaining | full CKC track (W3); REAL boundary; W2 final closure; FinOps freeze; Confirmation residual if any |
| dependencies | D-W2-02; GO Phase B consumed; FakeConversationProvider |
| trajectory | Track D Phase B Delivery → ChatGPT review → Morris Git integration decision |
| exit proof | P1→P12 + I1→I4 + PB-DLV-01…06 deterministic |
| debt/exit | disclosure honest bounded claim; Roadmap lag (post-Delivery sync later) |
| next gate | ChatGPT FULL review of this handoff |
| next capacity | Morris project Git integration (NOT CONSUMED) OR return on gaps |

## E. Documentary snapshot reconciliation

1. **PR #402** merged at `40de367e…` — qualification document 09 **INTEGRATED ON MAIN**.
2. Embedded 09 statements (`LOCAL CANDIDATE`, `NOT INTEGRATED ON MAIN`, Git integration NOT AUTHORIZED) are **HISTORICAL SNAPSHOT** from pre-merge — **not mutated** this cycle.
3. Roadmap still naming Track D Phase B QUALIFICATION as next capacity = **documentary lag** after PR #402 — **not mutated** this cycle.
4. Current gate truth: GO Phase B **CONSUMED**; Phase B Delivery **authorized locally**; W2 **NOT finally closed**; Product Completion **NON TERMINATED**.

## F. Exact current→target call graph

### Before (W2 Options path)
```
resolveW2QualificationInputs
  → proposeTrajectoryOptions
      → deriveTrajectoryOptions / deriveTrajectoryRecommendation  (NO CKC cognition)
      → createInitialTrajectory / proposeTrajectoryVersion
      → updateEpistemicState (OptionSet / Recommendation)
  → HumanDecision only via decideTrajectory (Pilote)
  → STOP BEFORE EXECUTE
```
F2 seam: `isProductStudioNativeCkcProof` required nested `packageProvenance` → **unreachable** with flat OA `CkcConsumptionProof`.
Production helper: delivery-biased `DISTINCTIVE_PHRASES`.

### After (Phase B)
```
resolveW2QualificationInputs  (+ packagePin, objective, projectTitle from durable LPS/Project)
  → proposeTrajectoryOptions
      → resolveProductDoctrineRegistryRoot (barrel)
      → loadProductCkcCognitiveContent (product package index + artifact)
      → buildCkcCognitivePromptSection (generic Markdown extraction)
      → reasonWithResolvedCkcContext (ConversationProvider / Fake)
      → FAIL CLOSED if CKC missing or provider throws (ZERO durable mutation)
      → deriveTrajectoryOptions (governed catalogue unchanged)
      → deriveTrajectoryRecommendation + CKC enrichment (rationale/challenge)
      → computeCkcSemanticFingerprint → qualificationDigest / optionSetDigest
      → ONLY THEN createInitialTrajectory / proposeTrajectoryVersion / updateEpistemicState
  → HumanDecision only via decideTrajectory (Pilote; live fingerprint stale check)
  → STOP BEFORE EXECUTE
```
No `orchestrateAssistantSend` / proposalStore on W2 path.

## G. Exact modified project file list

| File | Classification |
|---|---|
| features/project-assistant/f2/ckcCognitiveContext.ts | ADAPT |
| features/project-assistant/w2/proposeTrajectoryOptions.ts | ADAPT/COMPLETE |
| features/project-assistant/w2/qualificationInputs.ts | COMPLETE |
| features/project-assistant/w2/actions.ts | COMPLETE |
| features/project-assistant/w2/presentedOptionSet.ts | COMPLETE |
| features/project-assistant/w2/types.ts | COMPLETE |
| features/project-assistant/w2/trajectoryOptions.ts | COMPLETE |
| features/project-assistant/w2/decideTrajectory.ts | ADAPT |
| lib/platform/ai/fakeProvider.ts | ADAPT |
| lib/vertical-slice-runtime/disclosures.ts | COMPLETE (post-proof) |
| lib/vertical-slice-runtime/index.ts | ADAPT (re-export registry root; import-boundary coherence) |
| __tests__/…/w1CkcSemanticSeam.test.ts | ADAPT |
| __tests__/…/w2EabcDelivery.test.ts | ADAPT |
| __tests__/…/w2Harness.ts | ADAPT |
| __tests__/…/w2TrackDPhaseB.test.ts | NEW |
| __tests__/…/ProjectAssistantPanel.test.tsx | ADAPT (disclosure mock) |
| __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx | ADAPT (disclosure mock) |

**NOT modified:** Roadmap, doc 09, product CKC packages, CkcConsumptionProof domain, persistence/schema, UI production screens, FinOps, CI.

## H. Complete exploitable modified content

### H.1 Full `git diff` (all tracked modifications)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index 7553b57b..b57ebd18 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -119,7 +119,7 @@ const SUCCESS_RESULT = {
     requestedConfirmationRestartSafe: false as const,
     restoredConfirmationIsHistoricalConsentOnly: true as const,
     w2Cognition: "IN_PROGRESS_NOT_COMPLETE" as const,
-    ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED" as const,
+    ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL" as const,
     messages: [] as const,
   },
 };
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
index 5736e62a..7da15445 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
@@ -77,6 +77,13 @@ function productNativeProof() {
   return {
     ...methodCandidateProof(),
     doctrineStatus: "product-studio-native" as const,
+    doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
+    packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
+    packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
+    ckcId: "ckc:studio:delivery",
+    ckcContractVersion: "0.1.0",
+    sourceDigest:
+      "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
     packageProvenance: {
       ckcId: "ckc:studio:delivery",
       cycleTypeId: "cyc:delivery",
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
index 3a773550..4a6cf790 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
@@ -3,7 +3,7 @@
  * W2-G3 E+A+B+C — deterministic product-native proof.
  * No Execute · no REAL · no Phase B / Track D.
  */
-import { afterEach, describe, expect, it } from "vitest";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { RUNTIME_DISCLOSURES } from "@/lib/vertical-slice-runtime/disclosures";
 import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
 import {
@@ -50,25 +50,32 @@ import {
   seedQualifiedProject,
   tempProductDbPath,
 } from "./w2Harness";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  setConversationProviderForTests(null);
+});

 afterEach(() => {
   cleanupW2TempDirs();
 });

 describe("W2 Track E — disclosure honesty", () => {
-  it("states trajectory / epistemic / granted confirmation as durable and Phase B as not implemented", () => {
+  it("states trajectory / epistemic / granted confirmation as durable and Phase B as deterministic-only", () => {
     expect(RUNTIME_DISCLOSURES.projectTrajectoryRestartSafe).toBe(true);
     expect(RUNTIME_DISCLOSURES.materializedEpistemicRestartSafe).toBe(true);
     expect(RUNTIME_DISCLOSURES.grantedConfirmationRestartSafe).toBe(true);
     expect(RUNTIME_DISCLOSURES.requestedConfirmationRestartSafe).toBe(false);
     expect(RUNTIME_DISCLOSURES.w2Cognition).toBe("IN_PROGRESS_NOT_COMPLETE");
     expect(RUNTIME_DISCLOSURES.ckcPhaseBCognition).toBe(
-      "NOT_AUTHORIZED_NOT_IMPLEMENTED",
+      "IMPLEMENTED_DETERMINISTIC_NOT_REAL",
     );
     const joined = RUNTIME_DISCLOSURES.messages.join(" ");
     expect(joined).toMatch(/ProjectTrajectory versions/);
     expect(joined).not.toMatch(/Trajectory\/Epistemic Memory remain process-local/);
-    expect(joined).toMatch(/CKC Phase B cognition integration is NOT authorized/);
+    expect(joined).toMatch(/IMPLEMENTED with DETERMINISTIC proof only/);
+    expect(joined).toMatch(/NOT REAL/);
     expect(joined).toMatch(/Runtime v3 is not ADOPTED/);
     expect(w1RestartHonestyMessage()).toMatch(/trajectoire effective\/décidée/i);
     expect(w1RestartHonestyMessage()).toMatch(/confirmation demandée/i);
@@ -142,6 +149,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -243,6 +253,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -255,8 +268,12 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(loaded.ok).toBe(true);
     if (!loaded.ok) return;
     expect(loaded.presented.qualificationDigest).toBe(
-      computeQualificationDigest(qualification.qualification.inputs),
+      computeQualificationDigest({
+        ...qualification.qualification.inputs,
+        ckcSemanticFingerprint: loaded.presented.ckcSemanticFingerprint,
+      }),
     );
+    expect(loaded.presented.ckcSemanticFingerprint).toBeTruthy();

     const epistemic = await oa.cycleServices.getEpistemicState.execute({
       projectId: seeded.projectId,
@@ -301,6 +318,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -325,8 +345,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(driftedQual.ok).toBe(true);
     if (!driftedQual.ok) return;
     expect(
-      computeQualificationDigest(driftedQual.qualification.inputs),
-    ).not.toBe(computeQualificationDigest(qualification.qualification.inputs));
+      computeQualificationDigest({ ...driftedQual.qualification.inputs, ckcSemanticFingerprint: null }),
+    ).not.toBe(computeQualificationDigest({ ...qualification.qualification.inputs, ckcSemanticFingerprint: null }));
     expect(
       deriveTrajectoryRecommendation(driftedQual.qualification.inputs)
         .recommendedOptionRef,
@@ -376,6 +396,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -453,6 +476,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: oa1,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -502,6 +528,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -510,6 +539,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -581,6 +613,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -619,6 +654,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
+      packagePin: requal.qualification.packagePin,
+      objective: requal.qualification.objective,
+      projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -654,7 +692,10 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(loadedY.presented.optionSetDigest).not.toBe(firstDigest);
     expect(loadedY.presented.candidateVersion).toBe(2);
     expect(loadedY.presented.qualificationDigest).toBe(
-      computeQualificationDigest(requal.qualification.inputs),
+      computeQualificationDigest({
+        ...requal.qualification.inputs,
+        ckcSemanticFingerprint: loadedY.presented.ckcSemanticFingerprint,
+      }),
     );

     const v1 = await oa.cycleServices.getTrajectoryVersion.execute({
@@ -697,6 +738,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -724,6 +768,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
+      packagePin: requal.qualification.packagePin,
+      objective: requal.qualification.objective,
+      projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -793,6 +840,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: oa1,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -827,7 +877,10 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: oa1,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
-    });
+packagePin: requal.qualification.packagePin,
+objective: requal.qualification.objective,
+projectTitle: requal.qualification.projectTitle,
+});
     expect(second.ok).toBe(true);
     if (!second.ok) return;

@@ -878,6 +931,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -950,6 +1006,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -982,6 +1041,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
+      packagePin: requal.qualification.packagePin,
+      objective: requal.qualification.objective,
+      projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -1015,6 +1077,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1040,6 +1105,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...afterDecideQual.qualification.inputs,
+      packagePin: afterDecideQual.qualification.packagePin,
+      objective: afterDecideQual.qualification.objective,
+      projectTitle: afterDecideQual.qualification.projectTitle,
     });
     expect(x.ok).toBe(true);
     if (!x.ok) return;
@@ -1069,6 +1137,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
+      packagePin: requal.qualification.packagePin,
+      objective: requal.qualification.objective,
+      projectTitle: requal.qualification.projectTitle,
     });
     expect(y.ok).toBe(true);
     if (!y.ok) return;
@@ -1116,6 +1187,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1164,6 +1238,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1191,6 +1268,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
+      packagePin: requal.qualification.packagePin,
+      objective: requal.qualification.objective,
+      projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -1266,6 +1346,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: oa1,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1292,7 +1375,10 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: oa1,
       projectId: seeded.projectId,
       ...requal.qualification.inputs,
-    });
+packagePin: requal.qualification.packagePin,
+objective: requal.qualification.objective,
+projectTitle: requal.qualification.projectTitle,
+});
     expect(second.ok).toBe(true);
     if (!second.ok) return;

@@ -1333,6 +1419,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1340,6 +1429,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
@@ -1398,6 +1490,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1475,6 +1570,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
@@ -1554,6 +1652,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -1614,6 +1715,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       oa: first.oa!,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -1674,6 +1778,9 @@ describe("W2 Track B1 — CKC provenance honesty", () => {
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -1742,6 +1849,9 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -1859,6 +1969,9 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
@@ -1987,6 +2100,9 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       oa,
       projectId: seeded.projectId,
       ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
     });
     expect(proposed.ok).toBe(true);
     if (!proposed.ok) return;
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index 32cbd11a..cfbb6b1e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -102,9 +102,11 @@ export async function seedQualifiedProject(
     profile?: "Standard" | "Critical";
     reservations?: readonly { statement: string; blocking?: boolean }[];
     suffix?: string;
+    cycleTypeId?: string;
   },
 ): Promise<SeededW2Project> {
   const suffix = options?.suffix ?? "a";
+  const cycleTypeId = options?.cycleTypeId ?? "cyc:delivery";
   const created = await runtime.createProject({
     name: `W2 harness ${suffix}`,
     objective: "Prouver Options / Décision / Trajectoire / Autorité",
@@ -128,7 +130,7 @@ export async function seedQualifiedProject(
   const cycleInstanceId = `cyc:inst:w2-${suffix}`;
   const cycle = await oa.cycleServices.createCycle.execute({
     cycleInstanceId,
-    cycleTypeId: "cyc:delivery",
+    cycleTypeId,
     projectId,
     signals: options?.profile === "Critical" ? { irreversible: true } : {},
     justification:
@@ -170,6 +172,43 @@ export async function seedQualifiedProject(
   };
 }

+/** Resolve qualification + propose Options on the production W2 Phase B path. */
+export async function proposeW2OptionsForProject(
+  runtime: RuntimeApplicationService,
+  projectId: string,
+) {
+  const oa = runtime.oa;
+  if (!oa) {
+    return {
+      ok: false as const,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "OA stack unavailable",
+    };
+  }
+  const { resolveW2QualificationInputs } = await import(
+    "@/features/project-assistant/w2/qualificationInputs"
+  );
+  const { proposeTrajectoryOptions } = await import(
+    "@/features/project-assistant/w2/proposeTrajectoryOptions"
+  );
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  if (!qualification.ok) {
+    return {
+      ok: false as const,
+      code: qualification.code,
+      message: qualification.message,
+    };
+  }
+  return proposeTrajectoryOptions({
+    oa,
+    projectId,
+    ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
+  });
+}
+
 /** F2 context snapshot expected by the F3 prepare/resolve product path. */
 export async function currentF2Context(
   runtime: RuntimeApplicationService,
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index 12fe3207..fc2c1905 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -121,7 +121,7 @@ const SUCCESS_RESULT = {
     requestedConfirmationRestartSafe: false as const,
     restoredConfirmationIsHistoricalConsentOnly: true as const,
     w2Cognition: "IN_PROGRESS_NOT_COMPLETE" as const,
-    ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED" as const,
+    ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL" as const,
     messages: [] as const,
   },
 };
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
index af1714c7..00158e32 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
@@ -1,10 +1,14 @@
 /**
- * W1 bounded CKC→Nora semantic seam.
+ * W1/W2 CKC→Nora cognitive seam.
  * Loads resolved product-package CKC through the DoctrinePackage repository seam
  * and derives attributable Recommendations via the existing conversation provider.
  * No live OpenAI · no execution authority · no Morris decision.
+ *
+ * Phase B: generic Markdown extraction (no cycleType production branching).
+ * Gate aligns with flat OA CkcConsumptionProof product-native fields.
  */

+import { createHash } from "node:crypto";
 import {
   isFakeConversationProviderForced,
   resolveConversationProvider,
@@ -41,6 +45,8 @@ export type CkcCognitiveProvenance = {
   readonly packageVersion: string;
   readonly contentDigest: string;
   readonly doctrineStatus: "product-studio-native";
+  /** Optional package pin digest when available from LPS/proof. */
+  readonly packageDigest?: string;
 };

 export type ProductCkcCognitiveContent = {
@@ -50,48 +56,153 @@ export type ProductCkcCognitiveContent = {
   readonly provenance: CkcCognitiveProvenance;
 };

-const DISTINCTIVE_PHRASES = [
-  "anti scope creep",
-  "scope creep",
-] as const;
-
-function extractDistinctiveGuidance(markdown: string): string | null {
-  const lower = markdown.toLowerCase();
-  for (const phrase of DISTINCTIVE_PHRASES) {
-    if (lower.includes(phrase)) {
-      return phrase === "anti scope creep"
-        ? "Contrainte CKC : anti scope creep — borner le slice avant toute extension."
-        : "Contrainte CKC : surveiller le scope creep — pas d'élargissement non autorisé.";
-    }
+export type ExtractedCkcGuidance = {
+  readonly finality: string | null;
+  readonly posture: string | null;
+  readonly signals: string | null;
+  readonly antiClaims: string | null;
+  /** Bounded condensed lines for prompt/rationale — derived generically. */
+  readonly condensed: readonly string[];
+};
+
+/**
+ * Generic CKC Markdown section extraction.
+ * No cycleTypeId branching — content comes from the product package.
+ */
+export function extractCkcGuidanceFromMarkdown(
+  markdown: string,
+): ExtractedCkcGuidance {
+  const finality = extractSection(markdown, [
+    /^##\s*Finalité\s*$/im,
+    /^##\s*Finalite\s*$/im,
+  ]);
+  const posture = extractSection(markdown, [
+    /^##\s*Nora posture(?:\s*&?\s*guidance)?\s*$/im,
+    /^##\s*Nora posture\s*$/im,
+  ]);
+  const signals = extractSection(markdown, [
+    /^##\s*Signals?\s*$/im,
+    /^##\s*Signaux\s*$/im,
+    /^###\s*Guidance(?:\s*\(condensé\))?\s*$/im,
+    /^###\s*Guidance strategy/im,
+  ]);
+  const antiClaims = extractSection(markdown, [
+    /^##\s*Anti-claims?\s*$/im,
+    /^##\s*Anti-claim\s*$/im,
+    /^##\s*Contradictions?\s*$/im,
+  ]);
+
+  const condensed: string[] = [];
+  pushCondensed(condensed, finality, 180);
+  pushCondensed(condensed, posture, 220);
+  pushCondensed(condensed, signals, 220);
+  pushCondensed(condensed, antiClaims, 160);
+
+  if (condensed.length === 0) {
+    const firstMeaningful = markdown
+      .split(/\n+/)
+      .map((l) => l.trim())
+      .find((l) => l.length > 20 && !l.startsWith("#") && !l.startsWith("|") && !l.startsWith(">"));
+    if (firstMeaningful) condensed.push(clip(firstMeaningful, 180));
+  }
+
+  return Object.freeze({
+    finality,
+    posture,
+    signals,
+    antiClaims,
+    condensed: Object.freeze([...condensed]),
+  });
+}
+
+function extractSection(
+  markdown: string,
+  headers: readonly RegExp[],
+): string | null {
+  for (const header of headers) {
+    const match = header.exec(markdown);
+    if (!match || match.index === undefined) continue;
+    const start = match.index + match[0].length;
+    const rest = markdown.slice(start);
+    const nextHeader = rest.search(/\n##\s+/);
+    const body = (nextHeader >= 0 ? rest.slice(0, nextHeader) : rest).trim();
+    if (body.length > 0) return body;
   }
   return null;
 }

+function pushCondensed(
+  out: string[],
+  section: string | null,
+  max: number,
+): void {
+  if (!section) return;
+  const line = section
+    .split(/\n+/)
+    .map((l) => l.replace(/^[-*|>]+\s*/, "").trim())
+    .filter((l) => l.length > 0 && !l.startsWith("| ---") && !l.startsWith("|---"))
+    .slice(0, 3)
+    .join(" · ");
+  if (line) out.push(clip(line, max));
+}
+
+function clip(text: string, max: number): string {
+  const compact = text.replace(/\s+/g, " ").trim();
+  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
+}
+
 export function buildCkcCognitivePromptSection(
   content: ProductCkcCognitiveContent,
   provenance: CkcCognitiveProvenance = content.provenance,
 ): string {
-  const guidance = extractDistinctiveGuidance(content.markdown);
+  const guidance = extractCkcGuidanceFromMarkdown(content.markdown);
   const lines = [
     `CKC ${provenance.ckcId} (${provenance.cycleTypeId})`,
     `Package ${provenance.doctrinePackageId}@${provenance.packageVersion}`,
-    guidance ?? "Guidance delivery : implémentation bornée, pas de redesign.",
+    `contentDigest ${provenance.contentDigest}`,
+    ...guidance.condensed.map((c) => `Guidance: ${c}`),
   ];
+  if (guidance.condensed.length === 0) {
+    lines.push("Guidance CKC product package applicable.");
+  }
   return lines.join(" · ");
 }

 export function deriveCkcAttributedRecommendation(input: {
   baseRationale: string;
   content: ProductCkcCognitiveContent | null;
+  cognitiveRecommendation?: string | null;
 }): string {
   if (!input.content) {
     return input.baseRationale;
   }
-  const guidance =
-    extractDistinctiveGuidance(input.content.markdown) ??
-    "Guidance CKC product package applicable.";
+  const guidance = extractCkcGuidanceFromMarkdown(input.content.markdown);
+  const guidanceText =
+    guidance.condensed[0] ?? "Guidance CKC product package applicable.";
   const marker = `${CKC_ATTRIBUTION_MARKER_PREFIX}${input.content.ckcId.replace(/^ckc:studio:/, "")}]`;
-  return `${input.baseRationale} ${marker} ${guidance}`;
+  const cognitive = input.cognitiveRecommendation?.trim();
+  if (cognitive) {
+    return `${input.baseRationale} ${marker} ${cognitive} · ${guidanceText}`;
+  }
+  return `${input.baseRationale} ${marker} ${guidanceText}`;
+}
+
+/**
+ * Stable semantic fingerprint for W2 binding (PB-DLV-01).
+ * Excludes raw provider prose — material CKC identity/content only.
+ */
+export function computeCkcSemanticFingerprint(
+  provenance: CkcCognitiveProvenance,
+): string {
+  const payload = [
+    provenance.cycleTypeId,
+    provenance.ckcId,
+    provenance.doctrinePackageId,
+    provenance.packageVersion,
+    provenance.contentDigest,
+    provenance.packageDigest ?? "",
+  ].join("|");
+  return `sha256:${createHash("sha256").update(payload, "utf8").digest("hex")}`;
 }

 export function loadProductCkcCognitiveContent(input: {
@@ -136,6 +247,7 @@ export function loadProductCkcCognitiveContent(input: {
     packageVersion: indexResult.packageVersion,
     contentDigest: indexEntry.sourceDigest,
     doctrineStatus: "product-studio-native",
+    packageDigest: input.packagePin.digest,
   });

   return Object.freeze({
@@ -190,18 +302,23 @@ export async function reasonWithResolvedCkcContext(input: {
 export type CkcQualificationProof = CkcQualificationSuccessResult["proof"] & {
   doctrineStatus?: string;
   packageProvenance?: CkcCognitiveProvenance;
+  ckcId?: string;
+  doctrinePackageId?: string;
+  packageVersion?: string;
+  sourceDigest?: string;
+  packageDigest?: string;
 };

+/**
+ * Aligns with CURRENT canonical OA flat product-native proof fields.
+ * Nested packageProvenance remains accepted for legacy test fixtures.
+ */
 export function isProductStudioNativeCkcProof(
   proof: CkcQualificationProof,
-): proof is CkcQualificationProof & {
-  doctrineStatus: "product-studio-native";
-  packageProvenance: CkcCognitiveProvenance;
-} {
-  return (
-    proof.doctrineStatus === "product-studio-native" &&
-    Boolean(proof.packageProvenance?.ckcId)
-  );
+): boolean {
+  if (proof.doctrineStatus !== "product-studio-native") return false;
+  if (proof.packageProvenance?.ckcId) return true;
+  return Boolean(proof.ckcId);
 }

 export function enrichQualificationWithCkcSemantics(input: {
@@ -228,6 +345,7 @@ export function enrichQualificationWithCkcSemantics(input: {
   const rationale = deriveCkcAttributedRecommendation({
     baseRationale: input.qualification.rationale,
     content,
+    cognitiveRecommendation: input.ckcCognitiveRecommendation,
   });

   return {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 1a7a01e3..5ec3c340 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -58,6 +58,9 @@ export async function w2ProposeTrajectoryOptionsAction(input: {
     oa: runtime.oa,
     projectId: input.projectId,
     ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index 3bb43041..d5e285c3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -15,7 +15,10 @@

 import { randomBytes, randomUUID } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
-import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
+import {
+  readLiveProjectContext,
+  resolveProductDoctrineRegistryRoot,
+} from "@/lib/vertical-slice-runtime";
 import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
 import {
   computeDecisionBasisSourceDigest,
@@ -23,6 +26,10 @@ import {
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import type { TrajectoryStep } from "@/lib/oa/cycle";
+import {
+  computeCkcSemanticFingerprint,
+  loadProductCkcCognitiveContent,
+} from "@/features/project-assistant/f2/ckcCognitiveContext";
 import {
   computeOptionSetDigest,
   computeQualificationDigest,
@@ -227,14 +234,24 @@ export async function decideTrajectory(
       message: liveQualification.message,
     };
   }
+  const currentQual = liveQualification.qualification;
+  const registryRoot = resolveProductDoctrineRegistryRoot();
+  const liveCkc = loadProductCkcCognitiveContent({
+    registryRoot,
+    cycleTypeId: currentQual.inputs.cycleTypeId,
+    packagePin: currentQual.packagePin,
+  });
+  const liveFingerprint = liveCkc
+    ? computeCkcSemanticFingerprint(liveCkc.provenance)
+    : null;
   const currentQualificationDigest = computeQualificationDigest({
-    cycleTypeId: liveQualification.qualification.inputs.cycleTypeId,
-    recommendedProfile: liveQualification.qualification.inputs.recommendedProfile,
-    criticalSignalsPresent:
-      liveQualification.qualification.inputs.criticalSignalsPresent,
-    irreversible: liveQualification.qualification.inputs.irreversible,
-    reservations: liveQualification.qualification.inputs.reservations,
-    ckcAttribution: liveQualification.qualification.inputs.ckcAttribution,
+    cycleTypeId: currentQual.inputs.cycleTypeId,
+    recommendedProfile: currentQual.inputs.recommendedProfile,
+    criticalSignalsPresent: currentQual.inputs.criticalSignalsPresent,
+    irreversible: currentQual.inputs.irreversible,
+    reservations: currentQual.inputs.reservations,
+    ckcAttribution: currentQual.inputs.ckcAttribution,
+    ckcSemanticFingerprint: liveFingerprint,
   });
   if (currentQualificationDigest !== presented.qualificationDigest) {
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index 2009d21e..e440e65e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -29,6 +29,11 @@ export type QualificationDigestInputs = {
   readonly irreversible: boolean;
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
+  /**
+   * Stable CKC semantic fingerprint (PB-DLV-01). Material cycle/CKC/content
+   * change invalidates binding; raw provider prose is never included.
+   */
+  readonly ckcSemanticFingerprint: string | null;
 };

 export type PresentedOptionSetBinding = {
@@ -49,6 +54,7 @@ export type PresentedOptionSetBinding = {
   readonly irreversible: boolean;
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
+  readonly ckcSemanticFingerprint: string | null;
 };

 export function computeQualificationDigest(
@@ -61,6 +67,7 @@ export function computeQualificationDigest(
     irreversible: inputs.irreversible,
     reservations: [...inputs.reservations],
     ckcAttribution: inputs.ckcAttribution,
+    ckcSemanticFingerprint: inputs.ckcSemanticFingerprint,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index cb7b2074..92d88650 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -1,23 +1,36 @@
 /**
- * W2 Track A — product application path: publish trajectory Options and the
- * accompanying Recommendation, and materialise the PROPOSED trajectory.
+ * W2 Track A + Track D Phase B — product application path: publish trajectory
+ * Options and the accompanying Recommendation, and materialise the PROPOSED
+ * trajectory.
  *
- * Durability follows D-W2-01: what must survive is materialised as durable
- * Epistemic items (Option / Recommendation / presented OptionSet Observation)
- * plus one durable `candidate` ProjectTrajectory version. Nothing here promotes
- * the trajectory and nothing here records a decision — PROPOSED ≠ DECIDED.
+ * Phase B order (binding):
+ *   resolve inputs → load product CKC → provider cognition → derive Options →
+ *   enrich Recommendation → digests → ONLY THEN durable trajectory/epistemic writes.
  *
- * D-W2-A3-01 — material reinstruction mints a new candidate version on the same
- * ProjectTrajectory SoT; exact semantic idempotence may reuse the same version.
+ * Durability follows D-W2-01. D-W2-A3-01 idempotence uses stable CKC semantic
+ * fingerprint (not raw provider prose). STOP BEFORE EXECUTE.
  *
- * Reuses existing OA use cases only. No parallel engine, no second store.
+ * Reuses existing OA use cases only. No parallel engine, no Proposal-store.
  */

 import { randomBytes } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
-import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
+import {
+  readLiveProjectContext,
+  resolveProductDoctrineRegistryRoot,
+} from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ProjectTrajectory, TrajectoryStep } from "@/lib/oa/cycle";
+import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
+import {
+  buildCkcCognitivePromptSection,
+  computeCkcSemanticFingerprint,
+  deriveCkcAttributedRecommendation,
+  loadProductCkcCognitiveContent,
+  reasonWithResolvedCkcContext,
+  type CkcCognitiveProvenance,
+  type ProductCkcCognitiveContent,
+} from "@/features/project-assistant/f2/ckcCognitiveContext";
 import {
   computeOptionSetDigest,
   computeQualificationDigest,
@@ -34,6 +47,7 @@ import {
   type TrajectoryOptionInputs,
 } from "./trajectoryOptions";
 import type {
+  CkcRecommendationProvenanceDto,
   ProposeTrajectoryOptionsResult,
   TrajectoryOptionDto,
   TrajectoryRecommendationDto,
@@ -91,11 +105,6 @@ function recommendationStatement(
   return `${recommendation.label} — option recommandée: ${target?.label ?? recommendation.recommendedOptionRef}. ${recommendation.rationale}`;
 }

-/**
- * A3-EPI-01 — when presenting a successor OptionSet, declare supersedes links
- * so UpdateEpistemicState retires the prior set's Observation, Recommendation,
- * and corresponding Options (by optionRef). No delete; history stays durable.
- */
 function withPriorSetSupersedes<T extends object>(
   item: T,
   priorEpistemicItemId: string | undefined,
@@ -104,6 +113,39 @@ function withPriorSetSupersedes<T extends object>(
   return { ...item, supersedes: priorEpistemicItemId };
 }

+function toProvenanceDto(
+  provenance: CkcCognitiveProvenance,
+  fingerprint: string,
+): CkcRecommendationProvenanceDto {
+  return Object.freeze({
+    ckcId: provenance.ckcId,
+    cycleTypeId: provenance.cycleTypeId,
+    doctrinePackageId: provenance.doctrinePackageId,
+    packageVersion: provenance.packageVersion,
+    contentDigest: provenance.contentDigest,
+    semanticFingerprint: fingerprint,
+    doctrineStatus: "product-studio-native",
+  });
+}
+
+function enrichRecommendationWithCognition(input: {
+  base: TrajectoryRecommendationDto;
+  content: ProductCkcCognitiveContent;
+  cognitiveRecommendation: string;
+  fingerprint: string;
+}): TrajectoryRecommendationDto {
+  const rationale = deriveCkcAttributedRecommendation({
+    baseRationale: input.base.rationale,
+    content: input.content,
+    cognitiveRecommendation: input.cognitiveRecommendation,
+  });
+  return {
+    ...input.base,
+    rationale,
+    ckcProvenance: toProvenanceDto(input.content.provenance, input.fingerprint),
+  };
+}
+
 export type ProposeTrajectoryOptionsInput = {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -113,8 +155,11 @@ export type ProposeTrajectoryOptionsInput = {
   readonly criticalSignalsPresent: boolean;
   readonly irreversible: boolean;
   readonly reservations: readonly string[];
-  /** W1 bounded CKC seam attribution, or null when unavailable. */
+  /** Opaque LPS CKC resolution ref (secondary pointer). */
   readonly ckcAttribution: string | null;
+  readonly packagePin: DoctrinePackagePin;
+  readonly objective: string;
+  readonly projectTitle: string;
   readonly correlationId?: string;
 };

@@ -127,6 +172,49 @@ export async function proposeTrajectoryOptions(
     return { ok: false, code: live.code, message: live.message };
   }

+  // ── Phase B: product-native CKC cognition BEFORE any durable mutation ──
+  const registryRoot = resolveProductDoctrineRegistryRoot();
+  const ckcContent = loadProductCkcCognitiveContent({
+    registryRoot,
+    cycleTypeId: input.cycleTypeId,
+    packagePin: input.packagePin,
+  });
+  if (!ckcContent) {
+    return {
+      ok: false,
+      code: "CKC_UNAVAILABLE",
+      message:
+        "CKC product-native introuvable ou incohérent pour le cycle actif — aucune mutation de trajectoire/OptionSet.",
+    };
+  }
+
+  const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
+  let cognitiveRecommendation: string;
+  try {
+    const reasoning = await reasonWithResolvedCkcContext({
+      userContent: `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`,
+      projectSummary: [
+        `name=${input.projectTitle}`,
+        `objective=${input.objective}`,
+        `projectId=${input.projectId}`,
+      ].join(" | "),
+      intentSummary: `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
+      ckcPromptSection,
+    });
+    cognitiveRecommendation = reasoning.recommendation;
+  } catch (error) {
+    const detail = error instanceof Error ? error.message : "provider_error";
+    return {
+      ok: false,
+      code: "PROVIDER_COGNITION_FAILED",
+      message: `Cognition Nora/provider échouée (${detail}) — aucune mutation de trajectoire/OptionSet.`,
+    };
+  }
+
+  const semanticFingerprint = computeCkcSemanticFingerprint(
+    ckcContent.provenance,
+  );
+
   const inputs: TrajectoryOptionInputs = {
     cycleTypeId: input.cycleTypeId,
     recommendedProfile: input.recommendedProfile,
@@ -136,7 +224,14 @@ export async function proposeTrajectoryOptions(
     ckcAttribution: input.ckcAttribution,
   };
   const options = deriveTrajectoryOptions(inputs);
-  const recommendation = deriveTrajectoryRecommendation(inputs);
+  const baseRecommendation = deriveTrajectoryRecommendation(inputs);
+  const recommendation = enrichRecommendationWithCognition({
+    base: baseRecommendation,
+    content: ckcContent,
+    cognitiveRecommendation,
+    fingerprint: semanticFingerprint,
+  });
+
   const optionSetRef = `optset:w2-${shortId()}`;
   const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;
   const qualificationDigest = computeQualificationDigest({
@@ -146,6 +241,7 @@ export async function proposeTrajectoryOptions(
     irreversible: input.irreversible,
     reservations: input.reservations,
     ckcAttribution: input.ckcAttribution,
+    ckcSemanticFingerprint: semanticFingerprint,
   });
   const optionSetDigest = computeOptionSetDigest({
     cycleTypeId: input.cycleTypeId,
@@ -157,8 +253,6 @@ export async function proposeTrajectoryOptions(
     recommendedOptionRef: recommendation.recommendedOptionRef,
   });

-  // The proposed trajectory mirrors the recommended option's outline for
-  // presentation. Decide seals the Pilote-selected option's steps (A1).
   const proposedSteps: TrajectoryStep[] = structuredClone(
     (options.find((o) => o.optionRef === recommendation.recommendedOptionRef) ??
       options[0]!).steps,
@@ -168,7 +262,6 @@ export async function proposeTrajectoryOptions(

   let proposedTrajectoryId: string;
   let proposedVersion: number;
-  /** Prior candidate version whose OptionSet Observation should be superseded. */
   let observationSupersedeVersion: number | null = null;

   const existingCandidate =
@@ -189,14 +282,10 @@ export async function proposeTrajectoryOptions(
   }

   if (reuseExistingCandidate && existingCandidate) {
-    // A3-1 — exact semantic idempotence: same SoT version, no artificial bump.
     proposedTrajectoryId = existingCandidate.trajectoryId;
     proposedVersion = existingCandidate.version;
     observationSupersedeVersion = existingCandidate.version;
   } else if (latest) {
-    // D-W2-A3-01 — OCC against lineage HEAD (latest), never client-invented.
-    // Material change on an undecided candidate → vN+1 + supersede vN.
-    // First propose after a decided current → candidate ahead of current.
     const liveAfterHead = await readLiveProjectContext(oa, input.projectId);
     if (!liveAfterHead.ok) {
       return {
@@ -261,9 +350,6 @@ export async function proposeTrajectoryOptions(
   const priorOptionRefs = new Set(
     priorBinding?.options.map((o) => o.optionRef) ?? [],
   );
-  // Current W2 catalogue always re-emits the same structuring optionRefs.
-  // If a prior Option cannot be retired via an optionRef-matched replacement,
-  // that would require a Morris retirement semantic — fail closed here.
   if (priorBinding) {
     for (const priorOption of priorBinding.options) {
       if (!options.some((o) => o.optionRef === priorOption.optionRef)) {
@@ -295,16 +381,17 @@ export async function proposeTrajectoryOptions(
     );
   });

+  const provenanceAudit = recommendation.ckcProvenance
+    ? ` CKC provenance: ${recommendation.ckcProvenance.ckcId}@${recommendation.ckcProvenance.doctrinePackageId}@${recommendation.ckcProvenance.packageVersion} digest=${recommendation.ckcProvenance.contentDigest} fp=${recommendation.ckcProvenance.semanticFingerprint}.`
+    : "";
+
   const recommendationItem = withPriorSetSupersedes(
     {
       epistemicItemId: optionSetRecommendationId(optionSetRef),
       type: "Recommendation" as const,
-      // Process/qualification source — CKC attribution is context only.
       statement: [
         recommendationStatement(recommendation, options),
-        input.ckcAttribution
-          ? ` CKC context (not semantic cause): ${input.ckcAttribution}.`
-          : " CKC context: none.",
+        provenanceAudit,
       ].join(""),
       status: "active" as const,
       source: optionSetRef,
@@ -312,6 +399,7 @@ export async function proposeTrajectoryOptions(
         input.projectId,
         recommendation.recommendedOptionRef,
         optionSetRef,
+        recommendation.ckcProvenance?.ckcId ?? "ckc:none",
         ...(input.ckcAttribution ? [input.ckcAttribution] : []),
       ],
     },
@@ -344,6 +432,7 @@ export async function proposeTrajectoryOptions(
     irreversible: input.irreversible,
     reservations: [...input.reservations],
     ckcAttribution: input.ckcAttribution,
+    ckcSemanticFingerprint: semanticFingerprint,
   };

   const observationItem = withPriorSetSupersedes(
@@ -392,6 +481,7 @@ export async function proposeTrajectoryOptions(
     phase: "OPTIONS_PROPOSED",
     autoDecisionPerformed: false,
     executionPerformed: false,
+    ckcCognitionCompletedBeforeMutation: true,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
index 4e66eb70..370ba80d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
@@ -7,12 +7,14 @@
  * set and the recommendation are reproducible for a given project state and a
  * hostile payload cannot reshape what is proposed or decided.
  *
- * This reads the W1 CKC attribution already carried by the LPS. It performs no
- * cognition and is not a Phase B integration point.
+ * Phase B: also surfaces doctrine pin fields from LPS for product-native CKC
+ * load. No Proposal-store / F2 process-local dependency.
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
+import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
+import type { Digest } from "@/lib/oa/doctrine/domain/types";
 import type { TrajectoryOptionInputs } from "./trajectoryOptions";

 export type ResolvedW2Qualification = {
@@ -20,6 +22,8 @@ export type ResolvedW2Qualification = {
   readonly activeCycleInstanceId: string;
   readonly lpsVersion: number;
   readonly objective: string;
+  readonly projectTitle: string;
+  readonly packagePin: DoctrinePackagePin;
 };

 const MAX_REPORTED_RESERVATIONS = 5;
@@ -77,6 +81,12 @@ export async function resolveW2QualificationInputs(input: {
       )
     : false;

+  const packagePin: DoctrinePackagePin = Object.freeze({
+    doctrinePackageId: live.context.doctrinePackageId,
+    version: live.context.doctrineVersion,
+    digest: live.context.doctrineDigest as Digest,
+  });
+
   return {
     ok: true,
     qualification: {
@@ -91,6 +101,8 @@ export async function resolveW2QualificationInputs(input: {
       activeCycleInstanceId: cycleInstanceId,
       lpsVersion: live.context.lpsVersion,
       objective: live.context.objective,
+      projectTitle: live.context.projectTitle,
+      packagePin,
     },
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
index e3f4ce4e..957ddada 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
@@ -173,6 +173,7 @@ export function deriveTrajectoryRecommendation(
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: inputs.ckcAttribution,
+      ckcProvenance: null,
     };
   }
   if (inputs.criticalSignalsPresent || inputs.recommendedProfile === "Critical") {
@@ -184,6 +185,7 @@ export function deriveTrajectoryRecommendation(
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: inputs.ckcAttribution,
+      ckcProvenance: null,
     };
   }
   return {
@@ -194,5 +196,6 @@ export function deriveTrajectoryRecommendation(
     isHumanDecision: false,
     promotesTrajectory: false,
     ckcAttribution: inputs.ckcAttribution,
+    ckcProvenance: null,
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 474590ae..19655ba4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -23,6 +23,16 @@ export type TrajectoryOptionDto = {
   readonly steps: readonly TrajectoryStep[];
 };

+export type CkcRecommendationProvenanceDto = {
+  readonly ckcId: string;
+  readonly cycleTypeId: string;
+  readonly doctrinePackageId: string;
+  readonly packageVersion: string;
+  readonly contentDigest: string;
+  readonly semanticFingerprint: string;
+  readonly doctrineStatus: "product-studio-native";
+};
+
 export type TrajectoryRecommendationDto = {
   readonly label: "RECOMMANDATION — PAS UNE DÉCISION";
   readonly recommendedOptionRef: string;
@@ -35,6 +45,11 @@ export type TrajectoryRecommendationDto = {
    * Absent attribution is reported honestly rather than invented.
    */
   readonly ckcAttribution: string | null;
+  /**
+   * Phase B reconstructible package/CKC provenance (audit).
+   * Business-first rationale remains above; raw CKC markdown is never stored here.
+   */
+  readonly ckcProvenance: CkcRecommendationProvenanceDto | null;
 };

 export type TrajectoryDecisionPhase =
@@ -82,6 +97,8 @@ export type TrajectoryOptionSetDto = {
   readonly phase: "OPTIONS_PROPOSED";
   readonly autoDecisionPerformed: false;
   readonly executionPerformed: false;
+  /** Phase B ordering proof: cognition completed before durable mutation. */
+  readonly ckcCognitionCompletedBeforeMutation: true;
 };

 export type W2Failure = {
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 35672d38..b07de001 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -65,14 +65,34 @@ export class FakeConversationProvider implements ConversationProvider {
         m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
       )
     ) {
-      const hasCkcContext = messages.some(
-        (m) =>
-          m.content.toLowerCase().includes("anti scope creep") ||
-          m.content.includes("ckc:studio:delivery"),
-      );
-      if (hasCkcContext) {
+      const joined = messages.map((m) => m.content).join("\n").toLowerCase();
+      const hasSecurity =
+        joined.includes("ckc:studio:security") ||
+        joined.includes("risque résiduel") ||
+        joined.includes("risque residuel") ||
+        joined.includes("adversarial") ||
+        joined.includes("secret en repo");
+      const hasDelivery =
+        joined.includes("anti scope creep") ||
+        joined.includes("scope creep") ||
+        joined.includes("ckc:studio:delivery") ||
+        joined.includes("implémentation bornée") ||
+        joined.includes("implementation bornee");
+      if (hasSecurity) {
         return {
-          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — posture adversarial : risque résiduel majeures → HumanDecision explicite ; secret en repo → STOP. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+          usage: {
+            inputTokens: 10 * this.callCount,
+            outputTokens: 5 * this.callCount,
+            totalTokens: 15 * this.callCount,
+            model: "fake-test-model",
+            providerResponseId: `fake-resp-${this.callCount}`,
+          },
+        };
+      }
+      if (hasDelivery) {
+        return {
+          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension ; pas de silent REAL ; Evidence/done honnête. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
           usage: {
             inputTokens: 10 * this.callCount,
             outputTokens: 5 * this.callCount,
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index d8ab14e6..31d63580 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -6,8 +6,8 @@ import "./serverGuard";
  * ProjectTrajectory/materialized Epistemic/granted Confirmation are Product SQLite
  * restart-safe on the Product path; conversation/proposal/requested Confirmation
  * remain process-local.
- * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D / W2-complete /
- * CKC Phase B claim surface.
+ * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D / W2-complete claim
+ * surface. Bounded Phase B cognition may be IMPLEMENTED_DETERMINISTIC_NOT_REAL.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
@@ -41,8 +41,12 @@ export interface RuntimeDisclosures {
   readonly restoredConfirmationIsHistoricalConsentOnly: true;
   /** W2 capability is under delivery — never presented as complete. */
   readonly w2Cognition: "IN_PROGRESS_NOT_COMPLETE";
-  /** CKC Phase B cognition integration requires a distinct Morris GO — not consumed. */
-  readonly ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED";
+  /**
+   * Bounded W2 Track D Phase B: product-native CKC cognition on the W2 path,
+   * deterministic Fake proof only. NOT REAL, NOT full CKC track, NOT W2 closed,
+   * runtime v3 NON ADOPTED.
+   */
+  readonly ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL";
   readonly messages: readonly string[];
 }

@@ -63,7 +67,7 @@ export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Delivery and cutover are not authorized.",
   "Runtime v3 is not ADOPTED.",
   "W2 cognition/trajectory/decision capability is in progress — not complete.",
-  "CKC Phase B cognition integration is NOT authorized and NOT implemented (distinct Morris GO required).",
+  "CKC Phase B bounded cognition is IMPLEMENTED with DETERMINISTIC proof only — NOT REAL, NOT full CKC track, W2 NOT closed, runtime v3 NON ADOPTED.",
 ]);

 export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
@@ -86,7 +90,7 @@ export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   requestedConfirmationRestartSafe: false,
   restoredConfirmationIsHistoricalConsentOnly: true,
   w2Cognition: "IN_PROGRESS_NOT_COMPLETE",
-  ckcPhaseBCognition: "NOT_AUTHORIZED_NOT_IMPLEMENTED",
+  ckcPhaseBCognition: "IMPLEMENTED_DETERMINISTIC_NOT_REAL",
   messages: RUNTIME_DISCLOSURE_MESSAGES,
 });

diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
index 8f9f75dc..871f3c92 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
@@ -19,7 +19,7 @@ export {
   toRuntimeProjectListItem,
   toRuntimeProjectState,
 } from "./mapping";
-export { resolveDefaultVerticalSliceRoots } from "./paths";
+export { resolveDefaultVerticalSliceRoots, resolveProductDoctrineRegistryRoot } from "./paths";
 export {
   RuntimeApplicationService,
   createRuntimeApplicationService,

```

### H.2 NEW file — complete content
`projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts`

```typescript
// @vitest-environment node
/**
 * W2 Track D / bounded CKC Phase B — deterministic product-native exit proof.
 * FakeConversationProvider only · same production W2 path · STOP BEFORE EXECUTE.
 * Proof ceiling: DETERMINISTIC PROVEN ≠ REAL.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { BOUNDED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_TEST_ACTOR,
} from "./w2Harness";

const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
});

async function proposeFor(
  runtime: ReturnType<typeof bootW2Runtime>,
  projectId: string,
) {
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qualification failed");
  return {
    qualification,
    proposed: await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    }),
  };
}

describe("Phase B P1/P2 — product-native resolution", () => {
  it("P1: cyc:delivery resolves product package CKC with provenance", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    expect(content?.ckcId).toBe("ckc:studio:delivery");
    expect(content?.provenance.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(content?.provenance.contentDigest).toMatch(/^sha256:/);
    expect(content?.markdown.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });

  it("P2: cyc:security resolves via same path with distinct ckcId/digest", () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(security).toBeTruthy();
    expect(security?.ckcId).toBe("ckc:studio:security");
    expect(security?.ckcId).not.toBe(delivery?.ckcId);
    expect(security?.provenance.contentDigest).not.toBe(
      delivery?.provenance.contentDigest,
    );
    expect(security?.markdown.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
  });
});

describe("Phase B P3/P4 — control vs treatment semantic cause", () => {
  it("P3: delivery CKC treatment differs from no-CKC control", async () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    if (!content) return;
    const control = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: null,
    });
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(content),
    });
    expect(control.recommendation.toLowerCase()).toContain("générique");
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
  });

  it("P4: security CKC treatment is semantically distinct from delivery", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const d = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
    });
    const s = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:security",
      ckcPromptSection: buildCkcCognitivePromptSection(security),
    });
    expect(d.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(s.recommendation.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
    expect(d.recommendation).not.toBe(s.recommendation);
  });
});

describe("Phase B P5–P9 — W2 product path ordering / integrity", () => {
  it("P5/P6/P7/P8/P9: cognition before mutation; provenance; no HD/authority/Execute", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p5.sqlite"),
      idPrefix: "pbp5",
    });
    expect(W2_REGISTRY_ROOT).toContain("doctrine/product");
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "p5",
      cycleTypeId: "cyc:delivery",
    });
    const { proposed } = await proposeFor(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.proposedTrajectory.status).toBe("candidate");
    expect(proposed.proposedTrajectory.isCurrent).toBe(false);

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    expect(presented.presented.ckcSemanticFingerprint).toBe(
      proposed.recommendation.ckcProvenance?.semanticFingerprint,
    );
  });

  it("two-cycle same production path: delivery vs security", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-2cyc.sqlite"),
      idPrefix: "pb2c",
    });
    const deliverySeed = await seedQualifiedProject(runtime, {
      suffix: "del",
      cycleTypeId: "cyc:delivery",
    });
    const delivery = await proposeFor(runtime, deliverySeed.projectId);
    expect(delivery.proposed.ok).toBe(true);
    if (!delivery.proposed.ok) return;

    const securitySeed = await seedQualifiedProject(runtime, {
      suffix: "sec",
      cycleTypeId: "cyc:security",
    });
    const security = await proposeFor(runtime, securitySeed.projectId);
    expect(security.proposed.ok).toBe(true);
    if (!security.proposed.ok) return;

    expect(delivery.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(security.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:security",
    );
    expect(delivery.proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(security.proposed.recommendation.rationale.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
    expect(
      delivery.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).not.toBe(
      security.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    );
  });
});

describe("Phase B P10 — requalification via existing createCycle", () => {
  it("honest cycle-type change yields distinct fingerprint / binding", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p10.sqlite"),
      idPrefix: "pbp10",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "rq",
      cycleTypeId: "cyc:delivery",
    });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;
    const v1 = first.proposed.proposedTrajectory.version;

    const overview = await runtime.getProject(seeded.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const requal = await runtime.oa!.cycleServices.createCycle.execute({
      cycleInstanceId: "cyc:inst:w2-rq-sec",
      cycleTypeId: "cyc:security",
      projectId: seeded.projectId,
      signals: {},
      objective: "Requalification sécurité",
      scope: "w2-requal",
      createdBy: W2_TEST_ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: overview.livingState.version,
      ckcResolutionRef: "ckcres:w2-harness-sec",
    });
    expect(requal.ok).toBe(true);

    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:security",
    );
    expect(
      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).not.toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
    expect(second.proposed.proposedTrajectory.version).toBeGreaterThan(v1);
  });
});

describe("Phase B P11 — fail closed before mutation", () => {
  it("P11A: missing cycle CKC yields no trajectory", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p11a.sqlite"),
      idPrefix: "p11a",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p11a" });
    const oa = runtime.oa!;
    const overview = await runtime.getProject(seeded.projectId);
    if (!overview.ok) throw new Error("overview");
    // Force an unknown cycle type that is not in the product index.
    const bad = await oa.cycleServices.createCycle.execute({
      cycleInstanceId: "cyc:inst:w2-p11a-bad",
      cycleTypeId: "cyc:nonexistent-phase-b",
      projectId: seeded.projectId,
      signals: {},
      objective: "fail closed",
      scope: "p11a",
      createdBy: W2_TEST_ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: overview.livingState.version,
      ckcResolutionRef: "ckcres:bad",
    });
    // createCycle may accept unknown type at OA level; propose must fail closed.
    if (bad.ok) {
      const proposed = await proposeW2OptionsForProject(
        runtime,
        seeded.projectId,
      );
      expect(proposed.ok).toBe(false);
      if (proposed.ok) return;
      expect(proposed.code).toBe("CKC_UNAVAILABLE");
    }
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(traj.ok).toBe(false);
  });

  it("P11B: forced fake-provider error → no OptionSet/trajectory mutation", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-p11b.sqlite"),
      idPrefix: "p11b",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p11b" });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");

    const latest = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(latest.ok).toBe(false);
    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId: seeded.projectId,
    });
    if (epistemic.ok) {
      const options = epistemic.state.items.filter((i) => i.type === "Option");
      const recs = epistemic.state.items.filter(
        (i) => i.type === "Recommendation",
      );
      expect(options).toHaveLength(0);
      expect(recs).toHaveLength(0);
    }
  });
});

describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
  it("I1: exact semantic retry reuses candidate version", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i1.sqlite"),
      idPrefix: "pbi1",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i1" });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;
    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.proposedTrajectory.version).toBe(
      first.proposed.proposedTrajectory.version,
    );
    expect(second.proposed.proposedTrajectory.trajectoryId).toBe(
      first.proposed.proposedTrajectory.trajectoryId,
    );
  });

  it("I2: superficial provider rewording does not bump trajectory version", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i2.sqlite"),
      idPrefix: "pbi2",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i2" });
    const first = await proposeFor(runtime, seeded.projectId);
    expect(first.proposed.ok).toBe(true);
    if (!first.proposed.ok) return;

    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : WORDING VARIANT A. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
        ],
      }),
    );
    // Scripted complete() is only used when NOT matching CKC system marker branch.
    // Force a provider that still matches CKC branch but with different wording via subclass:
    setConversationProviderForTests(
      new (class extends FakeConversationProvider {
        override async complete(
          messages: Parameters<FakeConversationProvider["complete"]>[0],
        ) {
          const base = await super.complete(messages);
          if (
            messages.some(
              (m) =>
                m.role === "system" &&
                m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
            )
          ) {
            return {
              ...base,
              text: `${base.text} · WORDING VARIANT SUPERFICIEL`,
            };
          }
          return base;
        }
      })(),
    );

    const second = await proposeFor(runtime, seeded.projectId);
    expect(second.proposed.ok).toBe(true);
    if (!second.proposed.ok) return;
    expect(second.proposed.proposedTrajectory.version).toBe(
      first.proposed.proposedTrajectory.version,
    );
    // Rationale may differ in wording but fingerprint (binding) is stable.
    expect(
      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
    ).toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
  });

  it("I3: material cycle/CKC change changes binding", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const security = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    expect(computeCkcSemanticFingerprint(delivery.provenance)).not.toBe(
      computeCkcSemanticFingerprint(security.provenance),
    );
  });

  it("I4: HumanDecision binds exact presented OptionSet", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("pb-i4.sqlite"),
      idPrefix: "pbi4",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "i4" });
    const { proposed } = await proposeFor(runtime, seeded.projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const selected =
      proposed.options.find((o) => o.optionRef === BOUNDED_OPTION_REF) ??
      proposed.options[0]!;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: selected.optionRef,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      epistemicRefs: proposed.epistemicRefs,
      reservesText: null,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory.isCurrent).toBe(true);
    expect(decided.decision.selectedOptionRef).toBe(selected.optionRef);
    expect(decided.executionPerformed).toBe(false);
  });
});

describe("Phase B gate + genericity", () => {
  it("flat OA product-native proof satisfies gate without nested packageProvenance", () => {
    expect(
      isProductStudioNativeCkcProof({
        cycleTypeId: "cyc:delivery",
        detailedStatus: "resolved_detailed",
        level: "detailed",
        status: "resolved",
        source: "product_package",
        expectedPrimaryReference: "ckc:studio:delivery",
        usedReference: "ckc:studio:delivery",
        fallbackUsed: false,
        catalogVersion: "test",
        catalogHash: "sha256:test",
        correlationId: "cor:flat",
        resolvedAt: "2026-08-23T12:00:00.000Z",
        doctrineStatus: "product-studio-native",
        executionAuthority: false,
        consumed: true,
        disclosures: [],
        ckcId: "ckc:studio:delivery",
        doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
        packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      }),
    ).toBe(true);
    expect(
      isProductStudioNativeCkcProof({
        cycleTypeId: "cyc:delivery",
        detailedStatus: "resolved_detailed",
        level: "detailed",
        status: "resolved",
        source: "repository_candidate",
        expectedPrimaryReference: "ckc:studio:delivery",
        usedReference: "ckc:studio:delivery",
        fallbackUsed: false,
        catalogVersion: "test",
        catalogHash: "sha256:test",
        correlationId: "cor:method",
        resolvedAt: "2026-08-23T12:00:00.000Z",
        doctrineStatus: "method-candidate",
        executionAuthority: false,
        consumed: true,
        disclosures: [],
      }),
    ).toBe(false);
  });

  it("production cognitive helper has no cycleTypeId branching", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const file = path.join(
      process.cwd(),
      "features/project-assistant/f2/ckcCognitiveContext.ts",
    );
    const text = fs.readFileSync(file, "utf8");
    expect(text).not.toMatch(/if\s*\(\s*cycleType\s*===/);
    expect(text).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
    expect(text).not.toMatch(/DISTINCTIVE_PHRASES/);
  });
});

```

## I. PB-DLV-01…06 evidence

### PB-DLV-01 — Binding / idempotence
- `computeCkcSemanticFingerprint` from cycleTypeId/ckcId/packageId/version/contentDigest/packageDigest
- Included in `qualificationDigest` / presented binding
- Raw provider prose **excluded** from version identity
- I1–I4 tests green; D-W2-A3-01 stale/exact OptionSet tests preserved in w2EabcDelivery

### PB-DLV-02 — Generic multi-cycle cognition
- `extractCkcGuidanceFromMarkdown` — Finalité / Nora / Signals / anti-claims / decision guidance
- **No** production `if cycleType ===` / `switch(cycleTypeId)` / `DISTINCTIVE_PHRASES`
- delivery/security are test representatives only; Fake adapter may key off CKC content markers

### PB-DLV-03 — Semantic cause
- Provider cognition runs **before** OptionSet/Recommendation materialization
- Recommendation rationale/challenge enriched from CKC cognitive result
- Governed Options catalogue unchanged (governed/bounded/clarify)
- Recommendation ≠ HumanDecision

### PB-DLV-04 — No Proposal-store dependency
- Inputs from Project + LPS + CycleInstance + doctrine pin + resolved CKC
- No proposalStore / F2 Proposal / orchestrateAssistantSend

### PB-DLV-05 — Fail closed before durable mutation
- Missing CKC → `CKC_UNAVAILABLE`, no trajectory/OptionSet write
- Forced Fake provider failure → `PROVIDER_COGNITION_FAILED`, no mutation
- Adversarial P11 tests green

### PB-DLV-06 — Provenance / business-first
- Persisted `ckcProvenance` on Recommendation: ckcId, cycleTypeId, packageId, version, contentDigest, fingerprint
- Pilote-facing text remains business rationale; no raw Markdown/package dump in UX

## J. P1→P12 Exit Matrix

| ID | Result | Proof |
|---|---|---|
| P1 | PASS | delivery product-native resolution + provenance |
| P2 | PASS | security same path, distinct ckcId/digest |
| P3 | PASS | control vs delivery treatment semantic difference |
| P4 | PASS | security treatment distinct from delivery |
| P5 | PASS | cognition before mutation; `ckcCognitionCompletedBeforeMutation` |
| P6 | PASS | reconstructible provenance on Recommendation |
| P7 | PASS | type Recommendation; no HD; autoDecision=false |
| P8 | PASS | candidate/proposed only until Pilote HD |
| P9 | PASS | no Confirmation/authority/Execute; executionPerformed=false |
| P10 | PASS | requalify via existing createCycle path |
| P11 | PASS | CKC miss + provider fail → zero durable mutation |
| P12 | PASS | W1 seam + W2 EABC + product doctrine/index/qualification + full unit suite green |

## K. I1→I4 Binding Matrix

| ID | Result | Proof |
|---|---|---|
| I1 | PASS | exact semantic retry → no trajectory version bump |
| I2 | PASS | superficial Fake rewording → no version bump |
| I3 | PASS | material cycle/CKC change → binding/digest changes |
| I4 | PASS | HD consumes exact presented OptionSet |

## L. Genericity proof
- Same production path for delivery and security
- Source scan: no cycleType branching / DISTINCTIVE_PHRASES in ckcCognitiveContext.ts
- Fake provider may emit distinct deterministic markers from **CKC content** in prompt

## M. Fake / Real qualification
- Boundary: ConversationProvider / FakeConversationProvider
- `OPS1_CONVERSATION_PROVIDER=fake` forced in Phase B tests
- Same production W2 cognition orchestration path
- **No** OpenAI LIVE / credentials / REAL configuration
- Proof ceiling: **DETERMINISTIC PROVEN**
- Remaining realism gaps: live provider latency/failure shapes; REAL boundary not proven; READY FOR REAL = false

## N. Authority anti-regression
- Recommendation remains Recommendation
- No auto HumanDecision
- No Confirmation creation from CKC cognition
- No authority grant / ExecutionAttempt / Execute
- STOP BEFORE EXECUTE preserved
- C6 U1/U2/U3 untouched

## O. Validation outputs

### Targeted
```
npm test -- --run w1CkcSemanticSeam w2EabcDelivery w2TrackDPhaseB
→ 49 passed (6+28+15)
```

### Product doctrine / CKC
```
productDoctrinePackage + productCkcIndex + productCkcQualification
→ 14 passed
```

### typecheck
```
npm run typecheck → exit 0
```

### lint
```
npm run lint → No ESLint warnings or errors
```

### build
```
npm run build → Compiled successfully; static generation OK
```

### full unit suite
```
npm test
→ Test Files  211 passed | 13 skipped (224)
→ Tests  1978 passed | 131 skipped (2109)
(FinOps postgres integration skipped by design — FREEZE; not run via test:db)
```

### git diff --check
```
exit 0 (clean)
```

Full suite tail:
```
 ↓ __tests__/oa/finops/postgres/t3.alert-review.integration.test.ts (7 tests | 7 skipped)
 ↓ __tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts (14 tests | 14 skipped)
 ↓ __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts (8 tests | 8 skipped)
 ↓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests | 4 skipped)
 ↓ __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts (4 tests | 4 skipped)
 ↓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (12 tests | 12 skipped)
 ↓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests | 16 skipped)
 ↓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (19 tests | 19 skipped)
 ↓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests | 23 skipped)

 Test Files  211 passed | 13 skipped (224)
      Tests  1978 passed | 131 skipped (2109)
   Start at  15:09:33
   Duration  12.51s (transform 5.42s, setup 7.30s, collect 26.86s, tests 36.03s, environment 8.21s, prepare 7.93s)

```

## P. Reserves / debt

Qualification doc 09 non-blocking reserves retain original IDs (not reused).
Downstream Delivery constraints PB-DLV-01…06 addressed in this Delivery.

Remaining debt:
- Full CKC catalog/track closure → W3 (not this cycle)
- REAL boundary proof
- W2 final closure Morris gate
- Roadmap post-Delivery truth-sync (later)
- FinOps/T7 remains FREEZE
- Confirmation residual (historical consent only) unchanged

## Q. Morris decisions / gates remaining

| Gate | Status |
|---|---|
| Phase B GO | CONSUMED |
| Project Git integration | **NOT CONSUMED** |
| W2 final closure | NOT CONSUMED |
| REAL | NOT CONSUMED |
| FinOps unfreeze | NOT CONSUMED |
| runtime v3 adoption | NOT CONSUMED |

## R. Anti-claims

- Phase B deterministic ≠ REAL BOUNDARY PROVEN ≠ READY FOR REAL
- Phase B bounded ≠ full CKC track
- Phase B implementation ≠ W2 automatically closed
- Recommendation ≠ HumanDecision
- CKC ≠ execution authority
- No Execute
- FinOps remains FREEZE
- C6 remains CLOSED
- runtime v3 NON ADOPTED
- Product Completion incomplete
- local Delivery ≠ integrated on main
- no project commit / push / PR / merge this cycle

## S. Final verdict

**PHASE B BOUNDED DELIVERY — DETERMINISTIC PROOF READY FOR CHATGPT REVIEW — PROJECT GIT INTEGRATION NOT AUTHORIZED**
