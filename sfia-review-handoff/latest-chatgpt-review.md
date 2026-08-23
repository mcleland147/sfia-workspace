# ChatGPT Review Pack — FULL
## W2 Track D / Bounded CKC Phase B — Git Integration

## A. Metadata

| Field | Value |
|---|---|
| timestamp (UTC) | 2026-08-23T14:26:06Z |
| repo | mcleland147/sfia-workspace |
| branch | `delivery/sfia-studio-w2-track-d-phase-b` |
| original base | `40de367e2a5a74423f3cab843b7e7a0d1f9879df` |
| project commit SHA | `1cdf4b41270cffe31be28e02e3effe17a1b15477` |
| origin/main | `40de367e2a5a74423f3cab843b7e7a0d1f9879df` |
| remote Delivery SHA | `1cdf4b41270cffe31be28e02e3effe17a1b15477` |
| Phase B GO | CONSUMED |
| R1 correction GO | CONSUMED |
| Git integration GO | **CONSUMED** |
| merge | **NOT AUTHORIZED** |
| REAL | NOT CONSUMED |
| Execute | OUT |
| FinOps/T7 | FREEZE |
| C6 | CLOSED |
| runtime v3 | NON ADOPTED |
| prior R1 handoff | commit `5c61a330…` / blob `0fa67bc1…` |
| Draft PR | **#403** |

## B. Candidate freeze

- Candidate **unchanged** from reviewed R1 (no functional code edit this cycle).
- Exact **17** project files (frozen set).
- Known NON-BLOCKING comment debt carried unchanged in `w2EabcDelivery.test.ts`:
  `No Execute · no REAL · no Phase B / Track D.` (historical header debt).
- Pre-commit targeted smoke: **58 PASS**.

## C. Commit evidence

| Field | Value |
|---|---|
| SHA | `1cdf4b41270cffe31be28e02e3effe17a1b15477` |
| message | `feat(sfia-studio): complete W2 bounded CKC Phase B` |
| file count | 17 |

Exact files:
```
projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
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

## D. Push evidence

| Field | Value |
|---|---|
| remote branch | `origin/delivery/sfia-studio-w2-track-d-phase-b` |
| SHA | `1cdf4b41270cffe31be28e02e3effe17a1b15477` |
| push | normal (`-u`) |
| force | **no** |

## E. Draft PR

| Field | Value |
|---|---|
| number | **403** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/403 |
| base | main @ `40de367e…` |
| head | delivery/sfia-studio-w2-track-d-phase-b @ `1cdf4b41…` |
| draft | **true** |
| mergeable | MERGEABLE |

## F. CI

| Field | Value |
|---|---|
| run ID | **32645232920** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/32645232920 |
| conclusion | **success** |

Jobs:
- Detect SFIA Studio changes — success
- Build and validate SFIA Studio — success
  - Typecheck / Lint / Build / Unit tests (Vitest)
  - FinOps/T7 freeze notice — success (frozen)
  - Modeled governance / Secret scan / Trailing whitespace — success
- SFIA Studio Required Gate — success

FinOps: **FREEZE** (notice only; postgres not executed).

## G. Functional / architectural truth

- D-W2-02 ADOPTED · US-P1-14 / REQ-24 Phase B complete (bounded).
- P1→P12 PASS · I1→I4 PASS · R1-S/G/UX/CUT PASS.
- PB-DLV-01…06 preserved (03/06 strengthened in R1).
- PB-RES-REAL-01 OPEN / TRACE ONLY.
- Proof ceiling: DETERMINISTIC PROVEN ≠ REAL.

## H. Convergence state

C1/C2/UX/FA/C6/CKC/W1/W2 aligned · architecture parallel = **no** ·
C6 reopening = **no** · W2 finally closed = **no** · W3 started = **no**.

## I. Complete modified content — project commit patch

```diff
commit 1cdf4b41270cffe31be28e02e3effe17a1b15477
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sun Aug 23 16:21:39 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sun Aug 23 16:21:39 2026 +0200

    feat(sfia-studio): complete W2 bounded CKC Phase B

    Co-authored-by: Cursor <cursoragent@cursor.com>

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
index 5736e62a..27cf07b1 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts
@@ -76,7 +76,19 @@ function methodCandidateProof() {
 function productNativeProof() {
   return {
     ...methodCandidateProof(),
+    source: "product_package" as const,
     doctrineStatus: "product-studio-native" as const,
+    doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
+    packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
+    packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
+    indexDigest:
+      "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+    ckcId: "ckc:studio:delivery",
+    ckcContractVersion: "0.1.0",
+    sourceDigest:
+      "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
+    usedReference: "ckc:studio:delivery",
+    expectedPrimaryReference: "ckc:studio:delivery",
     packageProvenance: {
       ckcId: "ckc:studio:delivery",
       cycleTypeId: "cyc:delivery",
@@ -159,7 +171,7 @@ describe("W1 bounded CKC→Nora semantic seam — enrichment", () => {
     expect(enriched.ckcCognitiveRecommendation).toBeUndefined();
   });

-  it("treatment: product-native proof enriches rationale with attributable CKC marker", () => {
+  it("treatment: product-native proof enriches rationale with CKC guidance without raw mechanics", () => {
     const enriched = enrichQualificationWithCkcSemantics({
       qualification: baseQualification(),
       proof: productNativeProof(),
@@ -168,8 +180,10 @@ describe("W1 bounded CKC→Nora semantic seam — enrichment", () => {
       ckcCognitiveRecommendation:
         "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice.",
     });
-    expect(enriched.rationale).toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
-    expect(enriched.rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
+    expect(enriched.rationale).not.toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
+    expect(enriched.rationale).not.toMatch(/\[CKC:/);
+    expect(enriched.rationale).not.toMatch(/ckc:studio:/);
+    expect(enriched.rationale.toLowerCase()).toMatch(/anti scope creep|scope creep|borner/);
     expect(enriched.isMorrisDecision).toBe(false);
     expect(enriched.executionAuthority).toBe(false);
     expect(enriched.ckcSemanticProvenance?.ckcId).toBe("ckc:studio:delivery");
@@ -189,7 +203,9 @@ describe("W1 bounded CKC→Nora semantic seam — enrichment", () => {
       content,
     });
     expect(rationale).toMatch(/Base\./);
-    expect(rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
+    expect(rationale.toLowerCase()).toMatch(/anti scope creep|scope creep|borner|guidance|finalit/);
+    expect(rationale).not.toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
+    expect(rationale).not.toMatch(/\[CKC:/);
   });
 });

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
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
new file mode 100644
index 00000000..670e1349
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
@@ -0,0 +1,834 @@
+// @vitest-environment node
+/**
+ * W2 Track D / bounded CKC Phase B — deterministic product-native exit proof.
+ * FakeConversationProvider only · same production W2 path · STOP BEFORE EXECUTE.
+ * Proof ceiling: DETERMINISTIC PROVEN ≠ REAL.
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import {
+  buildCkcCognitivePromptSection,
+  computeCkcSemanticFingerprint,
+  isProductStudioNativeCkcProof,
+  loadProductCkcCognitiveContent,
+  reasonWithResolvedCkcContext,
+} from "@/features/project-assistant/f2/ckcCognitiveContext";
+import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
+import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { BOUNDED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  proposeW2OptionsForProject,
+  seedQualifiedProject,
+  tempProductDbPath,
+  W2_REGISTRY_ROOT,
+  W2_TEST_ACTOR,
+} from "./w2Harness";
+
+const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  setConversationProviderForTests(null);
+});
+
+afterEach(() => {
+  setConversationProviderForTests(null);
+  cleanupW2TempDirs();
+});
+
+async function proposeFor(
+  runtime: ReturnType<typeof bootW2Runtime>,
+  projectId: string,
+) {
+  const oa = runtime.oa!;
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  expect(qualification.ok).toBe(true);
+  if (!qualification.ok) throw new Error("qualification failed");
+  return {
+    qualification,
+    proposed: await proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    }),
+  };
+}
+
+describe("Phase B P1/P2 — product-native resolution", () => {
+  it("P1: cyc:delivery resolves product package CKC with provenance", () => {
+    const content = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:delivery",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    });
+    expect(content).toBeTruthy();
+    expect(content?.ckcId).toBe("ckc:studio:delivery");
+    expect(content?.provenance.doctrinePackageId).toBe(
+      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
+    );
+    expect(content?.provenance.contentDigest).toMatch(/^sha256:/);
+    expect(content?.markdown.toLowerCase()).toMatch(/anti scope creep|scope creep/);
+  });
+
+  it("P2: cyc:security resolves via same path with distinct ckcId/digest", () => {
+    const delivery = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:delivery",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    });
+    const security = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:security",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    });
+    expect(security).toBeTruthy();
+    expect(security?.ckcId).toBe("ckc:studio:security");
+    expect(security?.ckcId).not.toBe(delivery?.ckcId);
+    expect(security?.provenance.contentDigest).not.toBe(
+      delivery?.provenance.contentDigest,
+    );
+    expect(security?.markdown.toLowerCase()).toMatch(
+      /adversarial|risque résiduel|secret/,
+    );
+  });
+});
+
+describe("Phase B P3/P4 — control vs treatment semantic cause", () => {
+  it("P3: delivery CKC treatment differs from no-CKC control", async () => {
+    const content = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:delivery",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    });
+    expect(content).toBeTruthy();
+    if (!content) return;
+    const control = await reasonWithResolvedCkcContext({
+      userContent: "Instruire Options",
+      projectSummary: "name=Test",
+      intentSummary: "cyc:delivery",
+      ckcPromptSection: null,
+    });
+    const treatment = await reasonWithResolvedCkcContext({
+      userContent: "Instruire Options",
+      projectSummary: "name=Test",
+      intentSummary: "cyc:delivery",
+      ckcPromptSection: buildCkcCognitivePromptSection(content),
+    });
+    expect(control.recommendation.toLowerCase()).toContain("générique");
+    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
+    expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
+  });
+
+  it("P4: security CKC treatment is semantically distinct from delivery", async () => {
+    const delivery = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:delivery",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    })!;
+    const security = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:security",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    })!;
+    const d = await reasonWithResolvedCkcContext({
+      userContent: "Instruire Options",
+      projectSummary: "name=Test",
+      intentSummary: "cyc:delivery",
+      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
+    });
+    const s = await reasonWithResolvedCkcContext({
+      userContent: "Instruire Options",
+      projectSummary: "name=Test",
+      intentSummary: "cyc:security",
+      ckcPromptSection: buildCkcCognitivePromptSection(security),
+    });
+    expect(d.recommendation.toLowerCase()).toMatch(/anti scope creep/);
+    expect(s.recommendation.toLowerCase()).toMatch(
+      /adversarial|risque résiduel|secret/,
+    );
+    expect(d.recommendation).not.toBe(s.recommendation);
+  });
+});
+
+describe("Phase B P5–P9 — W2 product path ordering / integrity", () => {
+  it("P5/P6/P7/P8/P9: cognition before mutation; provenance; no HD/authority/Execute", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-p5.sqlite"),
+      idPrefix: "pbp5",
+    });
+    expect(W2_REGISTRY_ROOT).toContain("doctrine/product");
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: "p5",
+      cycleTypeId: "cyc:delivery",
+    });
+    const { proposed } = await proposeFor(runtime, seeded.projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
+    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
+      "ckc:studio:delivery",
+    );
+    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
+      /^sha256:/,
+    );
+    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
+      /^sha256:/,
+    );
+    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
+      /anti scope creep/,
+    );
+    // R1-UX: business-first rationale / statement
+    expect(proposed.recommendation.rationale).not.toMatch(/\[CKC:/);
+    expect(proposed.recommendation.rationale).not.toMatch(/ckc:studio:/);
+    expect(proposed.recommendation.rationale).not.toMatch(/digest=/);
+    expect(proposed.recommendation.rationale).not.toMatch(/\bfp=/);
+    expect(proposed.recommendation.isHumanDecision).toBe(false);
+    expect(proposed.recommendation.promotesTrajectory).toBe(false);
+    expect(proposed.autoDecisionPerformed).toBe(false);
+    expect(proposed.executionPerformed).toBe(false);
+    expect(proposed.proposedTrajectory.status).toBe("candidate");
+    expect(proposed.proposedTrajectory.isCurrent).toBe(false);
+
+    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(current.ok).toBe(false);
+
+    const presented = await loadPresentedOptionSet(
+      runtime.oa!,
+      seeded.projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+    expect(presented.presented.ckcSemanticFingerprint).toBe(
+      proposed.recommendation.ckcProvenance?.semanticFingerprint,
+    );
+
+    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
+      projectId: seeded.projectId,
+    });
+    expect(epistemic.ok).toBe(true);
+    if (!epistemic.ok) return;
+    const recItem = epistemic.state.items.find(
+      (i) =>
+        i.type === "Recommendation" &&
+        i.status === "active" &&
+        i.source === proposed.optionSetRef,
+    );
+    expect(recItem).toBeTruthy();
+    expect(recItem!.statement).not.toMatch(/CKC provenance:/);
+    expect(recItem!.statement).not.toMatch(/digest=/);
+    expect(recItem!.statement).not.toMatch(/\bfp=/);
+    expect(recItem!.statement).not.toMatch(/\[CKC:/);
+  });
+
+  it("two-cycle same production path: delivery vs security", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-2cyc.sqlite"),
+      idPrefix: "pb2c",
+    });
+    const deliverySeed = await seedQualifiedProject(runtime, {
+      suffix: "del",
+      cycleTypeId: "cyc:delivery",
+    });
+    const delivery = await proposeFor(runtime, deliverySeed.projectId);
+    expect(delivery.proposed.ok).toBe(true);
+    if (!delivery.proposed.ok) return;
+
+    const securitySeed = await seedQualifiedProject(runtime, {
+      suffix: "sec",
+      cycleTypeId: "cyc:security",
+    });
+    const security = await proposeFor(runtime, securitySeed.projectId);
+    expect(security.proposed.ok).toBe(true);
+    if (!security.proposed.ok) return;
+
+    expect(delivery.proposed.recommendation.ckcProvenance?.ckcId).toBe(
+      "ckc:studio:delivery",
+    );
+    expect(security.proposed.recommendation.ckcProvenance?.ckcId).toBe(
+      "ckc:studio:security",
+    );
+    expect(delivery.proposed.recommendation.rationale.toLowerCase()).toMatch(
+      /anti scope creep/,
+    );
+    expect(security.proposed.recommendation.rationale.toLowerCase()).toMatch(
+      /adversarial|risque résiduel|secret/,
+    );
+    expect(
+      delivery.proposed.recommendation.ckcProvenance?.semanticFingerprint,
+    ).not.toBe(
+      security.proposed.recommendation.ckcProvenance?.semanticFingerprint,
+    );
+  });
+});
+
+describe("Phase B P10 — requalification via existing createCycle", () => {
+  it("honest cycle-type change yields distinct fingerprint / binding", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-p10.sqlite"),
+      idPrefix: "pbp10",
+    });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: "rq",
+      cycleTypeId: "cyc:delivery",
+    });
+    const first = await proposeFor(runtime, seeded.projectId);
+    expect(first.proposed.ok).toBe(true);
+    if (!first.proposed.ok) return;
+    const v1 = first.proposed.proposedTrajectory.version;
+
+    const overview = await runtime.getProject(seeded.projectId);
+    expect(overview.ok).toBe(true);
+    if (!overview.ok) return;
+    const requal = await runtime.oa!.cycleServices.createCycle.execute({
+      cycleInstanceId: "cyc:inst:w2-rq-sec",
+      cycleTypeId: "cyc:security",
+      projectId: seeded.projectId,
+      signals: {},
+      objective: "Requalification sécurité",
+      scope: "w2-requal",
+      createdBy: W2_TEST_ACTOR,
+      linkAsActiveCycle: true,
+      expectedLpsVersion: overview.livingState.version,
+      ckcResolutionRef: "ckcres:w2-harness-sec",
+    });
+    expect(requal.ok).toBe(true);
+
+    const second = await proposeFor(runtime, seeded.projectId);
+    expect(second.proposed.ok).toBe(true);
+    if (!second.proposed.ok) return;
+    expect(second.proposed.recommendation.ckcProvenance?.ckcId).toBe(
+      "ckc:studio:security",
+    );
+    expect(
+      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
+    ).not.toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
+    expect(second.proposed.proposedTrajectory.version).toBeGreaterThan(v1);
+  });
+});
+
+describe("Phase B P11 — fail closed before mutation", () => {
+  it("P11A: missing cycle CKC yields no trajectory", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-p11a.sqlite"),
+      idPrefix: "p11a",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "p11a" });
+    const oa = runtime.oa!;
+    const overview = await runtime.getProject(seeded.projectId);
+    if (!overview.ok) throw new Error("overview");
+    // Force an unknown cycle type that is not in the product index.
+    const bad = await oa.cycleServices.createCycle.execute({
+      cycleInstanceId: "cyc:inst:w2-p11a-bad",
+      cycleTypeId: "cyc:nonexistent-phase-b",
+      projectId: seeded.projectId,
+      signals: {},
+      objective: "fail closed",
+      scope: "p11a",
+      createdBy: W2_TEST_ACTOR,
+      linkAsActiveCycle: true,
+      expectedLpsVersion: overview.livingState.version,
+      ckcResolutionRef: "ckcres:bad",
+    });
+    // createCycle may accept unknown type at OA level; propose must fail closed.
+    if (bad.ok) {
+      const proposed = await proposeW2OptionsForProject(
+        runtime,
+        seeded.projectId,
+      );
+      expect(proposed.ok).toBe(false);
+      if (proposed.ok) return;
+      expect(proposed.code).toBe("CKC_UNAVAILABLE");
+    }
+    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(traj.ok).toBe(false);
+  });
+
+  it("P11B: forced fake-provider error → no OptionSet/trajectory mutation", async () => {
+    setConversationProviderForTests(
+      new FakeConversationProvider({ failOnCall: 1 }),
+    );
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-p11b.sqlite"),
+      idPrefix: "p11b",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "p11b" });
+    const proposed = await proposeW2OptionsForProject(
+      runtime,
+      seeded.projectId,
+    );
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");
+
+    const latest = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(latest.ok).toBe(false);
+    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
+      projectId: seeded.projectId,
+    });
+    if (epistemic.ok) {
+      const options = epistemic.state.items.filter((i) => i.type === "Option");
+      const recs = epistemic.state.items.filter(
+        (i) => i.type === "Recommendation",
+      );
+      expect(options).toHaveLength(0);
+      expect(recs).toHaveLength(0);
+    }
+  });
+});
+
+describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
+  it("I1: exact semantic retry reuses candidate version", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-i1.sqlite"),
+      idPrefix: "pbi1",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "i1" });
+    const first = await proposeFor(runtime, seeded.projectId);
+    expect(first.proposed.ok).toBe(true);
+    if (!first.proposed.ok) return;
+    const second = await proposeFor(runtime, seeded.projectId);
+    expect(second.proposed.ok).toBe(true);
+    if (!second.proposed.ok) return;
+    expect(second.proposed.proposedTrajectory.version).toBe(
+      first.proposed.proposedTrajectory.version,
+    );
+    expect(second.proposed.proposedTrajectory.trajectoryId).toBe(
+      first.proposed.proposedTrajectory.trajectoryId,
+    );
+  });
+
+  it("I2: superficial provider rewording does not bump trajectory version", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-i2.sqlite"),
+      idPrefix: "pbi2",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "i2" });
+    const first = await proposeFor(runtime, seeded.projectId);
+    expect(first.proposed.ok).toBe(true);
+    if (!first.proposed.ok) return;
+
+    setConversationProviderForTests(
+      new FakeConversationProvider({
+        scripted: [
+          "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : WORDING VARIANT A. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
+        ],
+      }),
+    );
+    // Scripted complete() is only used when NOT matching CKC system marker branch.
+    // Force a provider that still matches CKC branch but with different wording via subclass:
+    setConversationProviderForTests(
+      new (class extends FakeConversationProvider {
+        override async complete(
+          messages: Parameters<FakeConversationProvider["complete"]>[0],
+        ) {
+          const base = await super.complete(messages);
+          if (
+            messages.some(
+              (m) =>
+                m.role === "system" &&
+                m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
+            )
+          ) {
+            return {
+              ...base,
+              text: `${base.text} · WORDING VARIANT SUPERFICIEL`,
+            };
+          }
+          return base;
+        }
+      })(),
+    );
+
+    const second = await proposeFor(runtime, seeded.projectId);
+    expect(second.proposed.ok).toBe(true);
+    if (!second.proposed.ok) return;
+    expect(second.proposed.proposedTrajectory.version).toBe(
+      first.proposed.proposedTrajectory.version,
+    );
+    // Rationale may differ in wording but fingerprint (binding) is stable.
+    expect(
+      second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
+    ).toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
+  });
+
+  it("I3: material cycle/CKC change changes binding", async () => {
+    const delivery = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:delivery",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    })!;
+    const security = loadProductCkcCognitiveContent({
+      registryRoot: PRODUCT_REGISTRY,
+      cycleTypeId: "cyc:security",
+      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+    })!;
+    expect(computeCkcSemanticFingerprint(delivery.provenance)).not.toBe(
+      computeCkcSemanticFingerprint(security.provenance),
+    );
+  });
+
+  it("I4: HumanDecision binds exact presented OptionSet", async () => {
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-i4.sqlite"),
+      idPrefix: "pbi4",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "i4" });
+    const { proposed } = await proposeFor(runtime, seeded.projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const selected =
+      proposed.options.find((o) => o.optionRef === BOUNDED_OPTION_REF) ??
+      proposed.options[0]!;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: selected.optionRef,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      epistemicRefs: proposed.epistemicRefs,
+      reservesText: null,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory.isCurrent).toBe(true);
+    expect(decided.decision.selectedOptionRef).toBe(selected.optionRef);
+    expect(decided.executionPerformed).toBe(false);
+  });
+});
+
+describe("Phase B R1 — semantic Fake oracle (content-only)", () => {
+  it("R1-S01/S02/S03: specialized Fake requires semantic content; ID-only stays generic", async () => {
+    const {
+      FakeConversationProvider,
+      setConversationProviderForTests,
+    } = await import("@/lib/platform/ai");
+    const {
+      CKC_COGNITIVE_REASONING_SYSTEM_MARKER,
+    } = await import("@/features/project-assistant/f2/ckcCognitiveContext");
+
+    const provider = new FakeConversationProvider();
+    setConversationProviderForTests(provider);
+
+    const deliveryContent = await provider.complete([
+      {
+        role: "system",
+        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nGuidance: anti scope creep — borner le slice.`,
+      },
+      { role: "user", content: "Instruire" },
+    ]);
+    expect(deliveryContent.text.toLowerCase()).toMatch(/anti scope creep/);
+
+    const securityContent = await provider.complete([
+      {
+        role: "system",
+        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nGuidance: posture adversarial ; risque résiduel ; secret en repo.`,
+      },
+      { role: "user", content: "Instruire" },
+    ]);
+    expect(securityContent.text.toLowerCase()).toMatch(
+      /adversarial|risque résiduel|secret/,
+    );
+
+    const idOnlySecurity = await provider.complete([
+      {
+        role: "system",
+        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nCKC ckc:studio:security (cyc:security) — no distinctive guidance.`,
+      },
+      { role: "user", content: "Instruire" },
+    ]);
+    expect(idOnlySecurity.text.toLowerCase()).toContain("générique");
+    expect(idOnlySecurity.text.toLowerCase()).not.toMatch(
+      /adversarial|risque résiduel|secret en repo/,
+    );
+
+    const idOnlyDelivery = await provider.complete([
+      {
+        role: "system",
+        content: `${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}\nCKC ckc:studio:delivery (cyc:delivery) — no distinctive guidance.`,
+      },
+      { role: "user", content: "Instruire" },
+    ]);
+    expect(idOnlyDelivery.text.toLowerCase()).toContain("générique");
+    expect(idOnlyDelivery.text.toLowerCase()).not.toMatch(/anti scope creep/);
+  });
+});
+
+describe("Phase B R1 — canonical product-native proof gate", () => {
+  const completeCanonical = () =>
+    ({
+      cycleTypeId: "cyc:delivery",
+      detailedStatus: "resolved_detailed" as const,
+      level: "detailed" as const,
+      status: "resolved" as const,
+      source: "product_package" as const,
+      expectedPrimaryReference: "ckc:studio:delivery",
+      usedReference: "ckc:studio:delivery",
+      fallbackUsed: false,
+      catalogVersion: "test",
+      catalogHash: "sha256:test",
+      correlationId: "cor:gate",
+      resolvedAt: "2026-08-23T12:00:00.000Z",
+      doctrineStatus: "product-studio-native" as const,
+      executionAuthority: false as const,
+      consumed: true as const,
+      disclosures: [] as readonly string[],
+      ckcId: "ckc:studio:delivery",
+      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
+      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
+      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
+      indexDigest:
+        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
+      ckcContractVersion: "0.1.0",
+      sourceDigest:
+        "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
+    }) as const;
+
+  it("R1-G01: complete canonical flat product-native proof passes", () => {
+    expect(isProductStudioNativeCkcProof(completeCanonical())).toBe(true);
+  });
+
+  it("R1-G02: product-studio-native + ckcId only fails", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        cycleTypeId: "cyc:delivery",
+        detailedStatus: "resolved_detailed",
+        level: "detailed",
+        status: "resolved",
+        source: "product_package",
+        expectedPrimaryReference: "ckc:studio:delivery",
+        usedReference: "ckc:studio:delivery",
+        fallbackUsed: false,
+        catalogVersion: "test",
+        catalogHash: "sha256:test",
+        correlationId: "cor:id-only",
+        resolvedAt: "2026-08-23T12:00:00.000Z",
+        doctrineStatus: "product-studio-native",
+        executionAuthority: false,
+        consumed: true,
+        disclosures: [],
+        ckcId: "ckc:studio:delivery",
+      }),
+    ).toBe(false);
+  });
+
+  it("R1-G03: nested packageProvenance alone with incomplete flat proof fails", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        cycleTypeId: "cyc:delivery",
+        detailedStatus: "resolved_detailed",
+        level: "detailed",
+        status: "resolved",
+        source: "product_package",
+        expectedPrimaryReference: "ckc:studio:delivery",
+        usedReference: "ckc:studio:delivery",
+        fallbackUsed: false,
+        catalogVersion: "test",
+        catalogHash: "sha256:test",
+        correlationId: "cor:nested",
+        resolvedAt: "2026-08-23T12:00:00.000Z",
+        doctrineStatus: "product-studio-native",
+        executionAuthority: false,
+        consumed: true,
+        disclosures: [],
+        packageProvenance: {
+          ckcId: "ckc:studio:delivery",
+          cycleTypeId: "cyc:delivery",
+          doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
+          packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
+          contentDigest: "sha256:deadbeef",
+          doctrineStatus: "product-studio-native",
+        },
+      }),
+    ).toBe(false);
+  });
+
+  it("R1-G04: wrong source fails", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        ...completeCanonical(),
+        source: "repository_candidate",
+      }),
+    ).toBe(false);
+  });
+
+  it("R1-G05: fallbackUsed true fails", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        ...completeCanonical(),
+        fallbackUsed: true,
+      }),
+    ).toBe(false);
+  });
+
+  it("R1-G06: missing required digest/provenance fails", () => {
+    const { indexDigest: _drop, ...missingIndex } = completeCanonical();
+    expect(isProductStudioNativeCkcProof(missingIndex)).toBe(false);
+    const { packageDigest: _drop2, ...missingPkg } = completeCanonical();
+    expect(isProductStudioNativeCkcProof(missingPkg)).toBe(false);
+  });
+
+  it("R1-G07: usedReference mismatch fails", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        ...completeCanonical(),
+        usedReference: "ckc:other",
+      }),
+    ).toBe(false);
+  });
+
+  it("method-candidate remains false", () => {
+    expect(
+      isProductStudioNativeCkcProof({
+        ...completeCanonical(),
+        doctrineStatus: "method-candidate",
+        source: "repository_candidate",
+      }),
+    ).toBe(false);
+  });
+});
+
+describe("Phase B R1 — legacy pre-Phase-B OptionSet cutover", () => {
+  it("R1-CUT01…04: legacy binding without fingerprint is fail-closed; no HD/promote/Execute", async () => {
+    const {
+      computeQualificationDigest,
+      optionSetObservationId,
+    } = await import("@/features/project-assistant/w2/presentedOptionSet");
+    const { LOCAL_PILOTE_ACTOR } = await import("@/lib/oa/decision");
+
+    const runtime = bootW2Runtime({
+      productDbPath: tempProductDbPath("pb-cutover.sqlite"),
+      idPrefix: "pbcut",
+    });
+    const seeded = await seedQualifiedProject(runtime, {
+      suffix: "cut",
+      cycleTypeId: "cyc:delivery",
+    });
+    const { proposed } = await proposeFor(runtime, seeded.projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const presented = await loadPresentedOptionSet(
+      runtime.oa!,
+      seeded.projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+
+    // Construct representative pre-Phase-B binding: no fingerprint, legacy digest.
+    const legacyDigest = computeQualificationDigest({
+      cycleTypeId: presented.presented.cycleTypeId,
+      recommendedProfile: presented.presented.recommendedProfile,
+      criticalSignalsPresent: presented.presented.criticalSignalsPresent,
+      irreversible: presented.presented.irreversible,
+      reservations: presented.presented.reservations,
+      ckcAttribution: presented.presented.ckcAttribution,
+      ckcSemanticFingerprint: null,
+    });
+    const legacyBinding = {
+      ...presented.presented,
+      qualificationDigest: legacyDigest,
+      ckcSemanticFingerprint: null,
+    };
+    // Omit fingerprint key to mimic historical JSON shape.
+    const { ckcSemanticFingerprint: _omit, ...legacyWithoutFp } = legacyBinding;
+    void _omit;
+
+    await runtime.oa!.cycleServices.updateEpistemicState.execute({
+      projectId: seeded.projectId,
+      items: [
+        {
+          epistemicItemId: optionSetObservationId(proposed.optionSetRef),
+          type: "Observation",
+          statement: JSON.stringify(legacyWithoutFp),
+          status: "active",
+          source: proposed.optionSetRef,
+          relatedObjects: [seeded.projectId, proposed.optionSetRef],
+        },
+      ],
+      createdBy: LOCAL_PILOTE_ACTOR,
+    });
+
+    const decisionsBefore =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId: seeded.projectId,
+      });
+    const decisionCountBefore = decisionsBefore.ok
+      ? decisionsBefore.decisions.length
+      : 0;
+
+    const selected =
+      proposed.options.find((o) => o.optionRef === proposed.recommendation.recommendedOptionRef) ??
+      proposed.options[0]!;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId: seeded.projectId,
+      optionSetRef: proposed.optionSetRef,
+      options: proposed.options,
+      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+      selectedOptionRef: selected.optionRef,
+      trajectoryId: proposed.proposedTrajectory.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory.version,
+      epistemicRefs: proposed.epistemicRefs,
+      reservesText: null,
+      forceLocalAuthority: true,
+    });
+
+    expect(decided.ok).toBe(false);
+    if (decided.ok) return;
+    expect(decided.code).toBe("OPTION_SET_STALE");
+
+    const decisionsAfter =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId: seeded.projectId,
+      });
+    const decisionCountAfter = decisionsAfter.ok
+      ? decisionsAfter.decisions.length
+      : 0;
+    expect(decisionCountAfter).toBe(decisionCountBefore);
+
+    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(current.ok).toBe(false);
+  });
+});
+
+describe("Phase B gate + genericity", () => {
+  it("production cognitive helper has no cycleTypeId branching", async () => {
+    const fs = await import("node:fs");
+    const path = await import("node:path");
+    const file = path.join(
+      process.cwd(),
+      "features/project-assistant/f2/ckcCognitiveContext.ts",
+    );
+    const text = fs.readFileSync(file, "utf8");
+    expect(text).not.toMatch(/if\s*\(\s*cycleType\s*===/);
+    expect(text).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
+    expect(text).not.toMatch(/DISTINCTIVE_PHRASES/);
+  });
+});
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
index af1714c7..8d5b13c0 100644
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
@@ -28,6 +32,10 @@ export {
   PRODUCT_DOCTRINE_PACKAGE_ID,
 };

+/**
+ * Historical marker — MUST NOT appear in Pilote-facing Recommendation rationale
+ * (R1-03 business-first). Retained for negative assertions only.
+ */
 export const CKC_ATTRIBUTION_MARKER_PREFIX =
   "[CKC ATTRIBUTABLE · ckc:studio:" as const;

@@ -41,6 +49,8 @@ export type CkcCognitiveProvenance = {
   readonly packageVersion: string;
   readonly contentDigest: string;
   readonly doctrineStatus: "product-studio-native";
+  /** Optional package pin digest when available from LPS/proof. */
+  readonly packageDigest?: string;
 };

 export type ProductCkcCognitiveContent = {
@@ -50,48 +60,172 @@ export type ProductCkcCognitiveContent = {
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

+/**
+ * Business-first Recommendation rationale (R1-03).
+ * Cognitive guidance may inform the text; CKC IDs / package digests / fingerprints
+ * must not appear as Pilote-facing prose. Structured provenance is separate.
+ */
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
-  const marker = `${CKC_ATTRIBUTION_MARKER_PREFIX}${input.content.ckcId.replace(/^ckc:studio:/, "")}]`;
-  return `${input.baseRationale} ${marker} ${guidance}`;
+  const guidance = extractCkcGuidanceFromMarkdown(input.content.markdown);
+  const guidanceText =
+    guidance.condensed[0] ??
+    "Appliquer la guidance cycle applicable avant toute extension.";
+  const cognitive = scrubTechnicalCkcMechanics(
+    input.cognitiveRecommendation?.trim() ?? "",
+  );
+  if (cognitive) {
+    return `${input.baseRationale} ${cognitive} · ${guidanceText}`;
+  }
+  return `${input.baseRationale} ${guidanceText}`;
+}
+
+/** Strip technical CKC mechanics that must not leak into Pilote-facing prose. */
+function scrubTechnicalCkcMechanics(text: string): string {
+  if (!text) return text;
+  return text
+    .replace(/\[CKC[^\]]*\]/gi, "")
+    .replace(/\bckc:studio:[a-z0-9_-]+\b/gi, "")
+    .replace(/\bdigest\s*=\s*sha256:[a-f0-9]+\b/gi, "")
+    .replace(/\bfp\s*=\s*sha256:[a-f0-9]+\b/gi, "")
+    .replace(/\s{2,}/g, " ")
+    .trim();
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
@@ -136,6 +270,7 @@ export function loadProductCkcCognitiveContent(input: {
     packageVersion: indexResult.packageVersion,
     contentDigest: indexEntry.sourceDigest,
     doctrineStatus: "product-studio-native",
+    packageDigest: input.packagePin.digest,
   });

   return Object.freeze({
@@ -190,18 +325,56 @@ export async function reasonWithResolvedCkcContext(input: {
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
+ * Defensive consumer gate aligned with canonical OA flat product-native proof
+ * (R1-02). Nested packageProvenance alone is NEVER sufficient.
+ * Does not mutate / compete with CkcConsumptionProof domain.
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
+  if (proof.detailedStatus !== "resolved_detailed") return false;
+  if (proof.level !== "detailed") return false;
+  if (proof.status !== "resolved") return false;
+  if (proof.source !== "product_package") return false;
+  if (proof.fallbackUsed !== false) return false;
+  if (proof.executionAuthority !== false) return false;
+  if (proof.consumed !== true) return false;
+
+  const ckcId = nonEmpty(proof.ckcId);
+  const doctrinePackageId = nonEmpty(proof.doctrinePackageId);
+  const packageVersion = nonEmpty(proof.packageVersion);
+  const packageDigest = nonEmpty(proof.packageDigest);
+  const indexDigest = nonEmpty(proof.indexDigest);
+  const ckcContractVersion = nonEmpty(proof.ckcContractVersion);
+  const sourceDigest = nonEmpty(proof.sourceDigest);
+  if (
+    !ckcId ||
+    !doctrinePackageId ||
+    !packageVersion ||
+    !packageDigest ||
+    !indexDigest ||
+    !ckcContractVersion ||
+    !sourceDigest
+  ) {
+    return false;
+  }
+  if (proof.usedReference !== ckcId) return false;
+  return true;
+}
+
+function nonEmpty(value: string | undefined | null): string | null {
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
 }

 export function enrichQualificationWithCkcSemantics(input: {
@@ -228,6 +401,7 @@ export function enrichQualificationWithCkcSemantics(input: {
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
index cb7b2074..fb81048d 100644
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
@@ -295,23 +381,21 @@ export async function proposeTrajectoryOptions(
     );
   });

+  // R1-03: Epistemic Recommendation statement stays business-first.
+  // Structured audit provenance lives on recommendation.ckcProvenance /
+  // presented binding / relatedObjects tags — not in Pilote-facing prose.
   const recommendationItem = withPriorSetSupersedes(
     {
       epistemicItemId: optionSetRecommendationId(optionSetRef),
       type: "Recommendation" as const,
-      // Process/qualification source — CKC attribution is context only.
-      statement: [
-        recommendationStatement(recommendation, options),
-        input.ckcAttribution
-          ? ` CKC context (not semantic cause): ${input.ckcAttribution}.`
-          : " CKC context: none.",
-      ].join(""),
+      statement: recommendationStatement(recommendation, options),
       status: "active" as const,
       source: optionSetRef,
       relatedObjects: [
         input.projectId,
         recommendation.recommendedOptionRef,
         optionSetRef,
+        recommendation.ckcProvenance?.ckcId ?? "ckc:none",
         ...(input.ckcAttribution ? [input.ckcAttribution] : []),
       ],
     },
@@ -344,6 +428,7 @@ export async function proposeTrajectoryOptions(
     irreversible: input.irreversible,
     reservations: [...input.reservations],
     ckcAttribution: input.ckcAttribution,
+    ckcSemanticFingerprint: semanticFingerprint,
   };

   const observationItem = withPriorSetSupersedes(
@@ -392,6 +477,7 @@ export async function proposeTrajectoryOptions(
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
index 35672d38..c9e5894a 100644
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
+      // Specialized Fake CKC cognition keys off CONTENT markers only.
+      // CKC IDs (ckc:studio:*) must never trigger specialized behavior (R1-01).
+      const joined = messages.map((m) => m.content).join("\n").toLowerCase();
+      const hasSecurity =
+        joined.includes("risque résiduel") ||
+        joined.includes("risque residuel") ||
+        joined.includes("adversarial") ||
+        joined.includes("secret en repo");
+      const hasDelivery =
+        joined.includes("anti scope creep") ||
+        joined.includes("scope creep") ||
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

## J. Remaining debt

- PB-RES-REAL-01
- full CKC track W3
- Roadmap post-Delivery sync
- W2 final closure
- FinOps FREEZE
- historical w2Eabc header comment debt (NON-BLOCKING)

## K. Anti-claims

- deterministic ≠ REAL
- bounded Phase B ≠ full CKC track
- Phase B integrated ≠ W2 closed
- Recommendation ≠ HumanDecision
- CKC ≠ execution authority
- no Execute
- C6 CLOSED
- FinOps FREEZE
- runtime v3 NON ADOPTED
- Product Completion incomplete
- Draft PR ≠ merge authorization

## L. Verdict

**PHASE B DRAFT PR READY FOR CHATGPT PR READINESS REVIEW — MERGE NOT AUTHORIZED**

### Final Git status snapshot
```
branch: delivery/sfia-studio-w2-track-d-phase-b
HEAD: 1cdf4b41270cffe31be28e02e3effe17a1b15477
origin/main: 40de367e2a5a74423f3cab843b7e7a0d1f9879df
remote delivery: 1cdf4b41270cffe31be28e02e3effe17a1b15477
status --short:
?? .tmp-sfia-review/
?? projects/eventops-poc/
?? projects/flex-office-demo/
```
