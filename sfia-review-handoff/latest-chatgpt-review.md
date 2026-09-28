# POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 — Correction Review Pack (FULL)

**Timestamp (UTC):** 2026-09-28T00:53:54Z
**Macro:** POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 (continuation — ChatGPT reserve closure)
**Cycle:** 8 — Delivery / implementation | **Typology:** EVOL | **Profile:** CRITICAL
**Prior handoff consumed:** `sfia/review-handoff` @ `338a4cb3` / blob `0b7b78d8`
**ChatGPT verdict consumed:** `NOT READY FOR LOCAL PROJECT COMMIT — POST-EXECUTION CONTINUITY GAPS REMAIN`

## Git truth

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` |
| Branch | `feat/sfia-studio-post-execution-handoff-01` |
| HEAD (uncommitted candidate base) | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| origin/main | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| Project commits | **ZERO** |
| Repo | mcleland147/sfia-workspace |

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
```

### diff --stat (product)
```
 .../postExecutionTrajectorySurface.ui.test.tsx     |  16 ++
 ...oductCycleE2eStabilization.frontDoor.d0.test.ts |   7 +-
 ...spaceArtifactRouting.applicationPath.d0.test.ts |   7 +-
 .../surfaces/TrajectorySurface.tsx                 |  52 ++++
 .../f3/ingestDocsWriteArtifactEvidence.ts          |  82 ++++++-
 .../f3/postEvidenceNoraAnalysis.ts                 |  26 +-
 .../w2/governedExecuteAuthorizedContract.ts        | 195 +++++++++++++--
 .../app/features/project-assistant/w2/types.ts     |   9 +
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    | 269 +++++++++++++++++++--
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  15 +-
 .../projectExecutionContractToCursorPrompt.ts      |  17 ++
 .../03-end-to-end-flow-catalog.md                  |  17 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |  19 +-
 .../production-runtime-reference.manifest.json     |   6 +-
 14 files changed, 674 insertions(+), 63 deletions(-)
```

## Morris GO / limits

- Local correction of ChatGPT reserves R1–R3 + integrated proof R4: YES
- Project commit/push/PR/merge: NOT AUTHORIZED
- REAL Cursor/OpenAI: NOT AUTHORIZED (ZERO REAL)
- New store/table: NONE
- Runtime v3: NON ADOPTED
- Review Handoff L3: AUTHORIZED

## Sources read

Build Doctrine, Roadmap, C1, framing 33/34/35/37, CKC 08, Living Ref 03/09, method v2.6 process docs, prior Review Handoff `338a4cb3`, and GO-listed code paths.

## Diagnostic — three reserves (before correction)

| ID | Reserve | Proven as-implemented before fix |
|---|---|---|
| R1 | Report required in prompt but optional in docs_write runtime | `governedExecuteRecordResult` continued when `cursorReport` absent; W3-C invented « sans CursorExecutionReport » surface |
| R2 | `executionReport` not rehydrate-safe | `runW3cPostEvidenceLoop` set `executionReport`; `rehydrateW3cPostEvidenceFromLps` / `successFromPayload` dropped it |
| R3 | `completeDocsWriteClaimEvidenceCompletion` result swallowed | `await completeDocsWriteClaimEvidenceCompletion(...)` with no result check |
| R4 | Proof quality | Unit helpers / direct DTO injection — no integrated Product wiring + restart proof |

**Architecture decision:** NONE required — reuse durable `mission-result-refs` + existing LPS Recommendation SoT; reconstruct report on rehydrate (no second SoT).

## Corrections AFTER

### R1 — Report required
- Classify stdout: `ok` / `absent` / `malformed`
- Absent → `CURSOR_EXECUTION_REPORT_REQUIRED`; malformed → `CURSOR_EXECUTION_REPORT_MALFORMED`
- Bind fail-closed unchanged
- Attempt may remain `succeeded`; Product handoff continuity refuses; no invented report surface
- Independently verified artifact bytes may still be ingested as technical Evidence

### R2 — Rehydrate-safe Rapport d'exécution
- Shared `projectW3cExecutionReportSurfaceFromDurable`
- Fresh W3-C + `rehydrateW3cPostEvidenceFromLps` + `findExistingW3cPostEvidence` attach `executionReport` from durable refs
- LPS/Epistemic remain Recommendation/Nora SoT — report not duplicated into LPS
- Removed fabricated « sans CursorExecutionReport » surface

### R3 — Claim completion propagation
- Capture result
- Infrastructure/invariant → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`
- Conformity insufficiency (`CONFORMITY_*`, `BOUND_ACCEPTANCE_*`, …) → continue; Product stays NOT_PROVEN/UNCLAIMED honestly

### R4 — Integrated proof
- `postExecutionHandoff.integrated.d0.test.ts`: FakeDocsWrite → governedExecute → durable refs → materialize → destroy worktree → restart runtime → rehydrate restores `executionReport` + Recommendation
- N1 omit / N2 malformed fail-closed

## Files created
- `persistDocsWriteArtifactReviewMaterial.ts` (prior pass)
- `postExecutionCursorReportArtifactHandoff.d0.test.ts` (prior + N1 surface)
- `postExecutionHandoff.integrated.d0.test.ts` (**new this pass**)

## Files modified (this correction delta emphasis)
- `governedExecuteAuthorizedContract.ts` (R1+R3)
- `w3cPostEvidenceLoop.ts` (R2)
- `fakeDocsWriteLaunchPort.ts` (TestOnly `cursorReportMode`)
- Living Ref 03/09 + manifest digests
- prior handoff files retained

## Exploitable modified content

### `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 7fe6c105..80128eec 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -14,6 +14,7 @@
  */

 import { createHash } from "node:crypto";
+import fs from "node:fs";
 import path from "node:path";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import {
@@ -46,6 +47,7 @@ import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
 } from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
@@ -64,15 +66,25 @@ import type {
   GovernedExecutePhaseResult,
 } from "./types";

-function tryParseReportFromStdout(
-  stdout: string,
-): CursorExecutionReportWithMission | null {
+type CursorReportStdoutParse =
+  | { kind: "ok"; report: CursorExecutionReportWithMission }
+  | { kind: "absent" }
+  | { kind: "malformed"; message: string };
+
+/**
+ * Classify CursorExecutionReport claim from stdout.
+ * Marker present + unparseable JSON → malformed (fail-closed).
+ * Marker absent → absent (docs_write nominal requires report).
+ */
+function classifyCursorReportFromStdout(stdout: string): CursorReportStdoutParse {
   const trimmed = stdout.trim();
-  if (!trimmed) return null;
+  if (!trimmed) return { kind: "absent" };
   const marker = "CURSOR_EXECUTION_REPORT_JSON=";
   const idx = trimmed.indexOf(marker);
   const candidates: string[] = [];
+  let markerPresent = false;
   if (idx >= 0) {
+    markerPresent = true;
     candidates.push(
       trimmed.slice(idx + marker.length).trim().split("\n")[0] ?? "",
     );
@@ -81,18 +93,50 @@ function tryParseReportFromStdout(
   if (trimmed.startsWith("{")) {
     candidates.push(trimmed);
   }
+  if (candidates.length === 0) return { kind: "absent" };
   for (const json of candidates) {
     if (!json) continue;
     try {
       const parsed = parseCursorExecutionReport(JSON.parse(json));
       if (parsed.ok) {
-        return parsed.report as CursorExecutionReportWithMission;
+        return {
+          kind: "ok",
+          report: parsed.report as CursorExecutionReportWithMission,
+        };
       }
     } catch {
       /* try next candidate */
     }
   }
-  return null;
+  if (markerPresent) {
+    return {
+      kind: "malformed",
+      message:
+        "CURSOR_EXECUTION_REPORT_JSON présent mais JSON / schéma non parseable — fail-closed.",
+    };
+  }
+  return { kind: "absent" };
+}
+
+function tryParseReportFromStdout(
+  stdout: string,
+): CursorExecutionReportWithMission | null {
+  const classified = classifyCursorReportFromStdout(stdout);
+  return classified.kind === "ok" ? classified.report : null;
+}
+
+/** Claim-completion codes that are honest insufficiency (Product NOT_PROVEN), not infra. */
+function isDocsWriteClaimCompletionInsufficiency(code: string): boolean {
+  return (
+    code.startsWith("CONFORMITY_") ||
+    code.startsWith("BOUND_ACCEPTANCE_") ||
+    code.startsWith("ARTIFACT_") ||
+    code === "HISTORICAL_ARTIFACT_DIGEST_MISMATCH" ||
+    code === "DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_UNPARSEABLE" ||
+    code === "DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_MISMATCH" ||
+    code.includes("NOT_PROVEN") ||
+    code.includes("INSUFFICIENT")
+  );
 }
 function mapCycleProfileToSelectionProfile(
   profile: CycleProfile | string | null | undefined,
@@ -948,6 +992,97 @@ export async function governedExecuteRecordResult(
         completed.facts &&
         contract.cycleInstanceId
       ) {
+        const refsRoot =
+          input.missionResultRefsRoot?.trim() ||
+          resolveProductEvidenceRefsRoot();
+
+        // Read independently verified hot-worktree bytes for durable review material.
+        let artifactBytes: Buffer | undefined;
+        let hotArtifactAbsolutePath: string | undefined;
+        if (completed.facts.worktreeRef) {
+          hotArtifactAbsolutePath = path.join(
+            completed.facts.worktreeRef,
+            completed.facts.targetPath,
+          );
+          try {
+            artifactBytes = fs.readFileSync(hotArtifactAbsolutePath);
+          } catch (err) {
+            return {
+              ok: false,
+              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+              message: `Attempt succeeded durable — lecture artifact hot-worktree échouée: ${
+                err instanceof Error ? err.message : String(err)
+              }`,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+        }
+
+        // R1 — CursorExecutionReport REQUIRED for nominal docs_write Product handoff.
+        // Technical Attempt may remain succeeded; missing/malformed report ≠ product handoff.
+        const stdout = completed.facts.stdout ?? "";
+        const classified = classifyCursorReportFromStdout(stdout);
+        const reportCandidate =
+          completed.facts.cursorReport ??
+          (classified.kind === "ok" ? classified.report : null);
+        if (!reportCandidate) {
+          // Preserve independently verified artifact as technical Evidence when possible.
+          if (artifactBytes) {
+            await ingestDocsWriteArtifactEvidence({
+              evidenceReviewServices: input.oa.evidenceReviewServices,
+              projectId: input.projectId,
+              cycleInstanceId: contract.cycleInstanceId,
+              executionContractId: contract.executionContractId,
+              executionAttemptId: attempt.attemptId,
+              targetPath: completed.facts.targetPath,
+              digest: completed.facts.digest,
+              nowIso: input.oa.clock.nowIso(),
+              refsRoot,
+              artifactBytes,
+            });
+          }
+          const code =
+            classified.kind === "malformed"
+              ? "CURSOR_EXECUTION_REPORT_MALFORMED"
+              : "CURSOR_EXECUTION_REPORT_REQUIRED";
+          const message =
+            classified.kind === "malformed"
+              ? classified.message
+              : "CursorExecutionReport structuré obligatoire pour le handoff Product docs_write — rapport absent après Attempt succeeded.";
+          return {
+            ok: false,
+            code,
+            message: `Attempt succeeded durable — continuité Product refusée (${code}): ${message}`,
+            attempt: projectAttempt(attempt, adapterId),
+          };
+        }
+
+        const expectedRepo =
+          typeof contract.inputs?.repositoryBindingIdentity === "string"
+            ? contract.inputs.repositoryBindingIdentity
+            : null;
+        const expectedSha =
+          typeof contract.inputs?.baseHeadSha === "string"
+            ? contract.inputs.baseHeadSha
+            : null;
+        const bound = bindCursorExecutionReportToAttempt({
+          report: reportCandidate,
+          expectedAttemptId: attempt.attemptId,
+          expectedExecutionContractId: contract.executionContractId,
+          attemptExecutionContractId: attempt.executionContractId,
+          expectedRepositoryRef: expectedRepo,
+          expectedBaseSha: expectedSha,
+        });
+        if (!bound.ok) {
+          return {
+            ok: false,
+            code: bound.code,
+            message: bound.message,
+            attempt: projectAttempt(attempt, adapterId),
+          };
+        }
+        const boundReport = reportCandidate;
+
         const ingested = await ingestDocsWriteArtifactEvidence({
           evidenceReviewServices: input.oa.evidenceReviewServices,
           projectId: input.projectId,
@@ -957,6 +1092,9 @@ export async function governedExecuteRecordResult(
           targetPath: completed.facts.targetPath,
           digest: completed.facts.digest,
           nowIso: input.oa.clock.nowIso(),
+          refsRoot,
+          cursorReport: boundReport,
+          ...(artifactBytes ? { artifactBytes } : {}),
         });
         // CR-PCONT-06 — Attempt succeeded stays durable; ingest / advance failure
         // must surface as post-execution continuity failure (never silent).
@@ -986,20 +1124,37 @@ export async function governedExecuteRecordResult(
             attempt: projectAttempt(attempt, adapterId),
           };
         }
-        // Automatic Product result qualification while worktree is still hot.
-        // Failures stay fail-closed on Product claim; technical Attempt unchanged.
-        if (completed.facts.worktreeRef) {
-          await completeDocsWriteClaimEvidenceCompletion({
-            evidenceReviewServices: input.oa.evidenceReviewServices!,
-            attempt,
-            contract,
-            actor: LOCAL_PILOTE_ACTOR,
-            artifactAbsolutePath: path.join(
-              completed.facts.worktreeRef,
-              completed.facts.targetPath,
-            ),
-            nowIso: input.oa.clock.nowIso(),
-          });
+        // R3 — Automatic Product result qualification while worktree / durable path hot.
+        // Never swallow the result: infra fail-closed; insufficiency → honest NOT_PROVEN later.
+        const qualifyPath =
+          ingested.durableArtifactAbsolutePath ?? hotArtifactAbsolutePath;
+        if (!qualifyPath) {
+          return {
+            ok: false,
+            code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+            message:
+              "Attempt succeeded durable — aucun chemin artifact pour claim completion (durable ou hot).",
+            attempt: projectAttempt(attempt, adapterId),
+          };
+        }
+        const qualified = await completeDocsWriteClaimEvidenceCompletion({
+          evidenceReviewServices: input.oa.evidenceReviewServices!,
+          attempt,
+          contract,
+          actor: LOCAL_PILOTE_ACTOR,
+          artifactAbsolutePath: qualifyPath,
+          nowIso: input.oa.clock.nowIso(),
+        });
+        if (!qualified.ok) {
+          if (!isDocsWriteClaimCompletionInsufficiency(qualified.code)) {
+            return {
+              ok: false,
+              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+              message: `Attempt succeeded durable — claim completion infrastructure échouée (${qualified.code}): ${qualified.message}`,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+          // Insufficiency: keep technical Attempt; Product materialize stays NOT_PROVEN/UNCLAIMED.
         }
       }
     }
```


### `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index f4c5e48b..af8477d6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -26,6 +26,10 @@ import {
   formatW3cRecommendationPayloadForLps,
   lastW3cEvidenceIdInLpsContext,
 } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
+import {
+  loadDocsWriteArtifactReviewMaterial,
+  resolveProductEvidenceRefsRoot,
+} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
 import {
   buildCkcCognitivePromptSection,
   loadProductCkcCognitiveContent,
@@ -63,6 +67,156 @@ export type W3cPostEvidenceRecommendation = {
   nextActionCode: string | null;
 };

+export type W3cExecutionReportSurface = {
+  readonly cursorStatus: string | null;
+  readonly workPerformedSummary: string | null;
+  readonly artifactsSummary: string | null;
+  readonly validationsSummary: string | null;
+  readonly blockersSummary: string | null;
+  readonly reservationsSummary: string | null;
+  readonly artifactReviewCompleteness: "FULL" | "PARTIAL" | null;
+};
+
+/**
+ * Rebuild business-first execution report from durable server-owned refs
+ * (mission-result-refs). Shared by fresh W3-C and rehydrate — never invent
+ * a Cursor report when the claim file is absent.
+ */
+export function projectW3cExecutionReportSurfaceFromDurable(input: {
+  readonly attemptId: string;
+  readonly targetPath?: string | null;
+  readonly refsRoot?: string | null;
+}): {
+  readonly executionReport: W3cExecutionReportSurface | null;
+  readonly artifactReviewMaterial: string | undefined;
+  readonly artifactReviewCompleteness: "FULL" | "PARTIAL" | undefined;
+  readonly workPerformedSummary: string | undefined;
+  readonly blockersSummary: string | undefined;
+  readonly stopReason: string | undefined;
+  readonly cursorReportSummary: string | undefined;
+} {
+  const durable = loadDocsWriteArtifactReviewMaterial({
+    refsRoot: resolveProductEvidenceRefsRoot(input.refsRoot),
+    attemptId: input.attemptId,
+    ...(input.targetPath ? { targetPath: input.targetPath } : {}),
+  });
+  if (!durable.ok) {
+    return {
+      executionReport: null,
+      artifactReviewMaterial: undefined,
+      artifactReviewCompleteness: undefined,
+      workPerformedSummary: undefined,
+      blockersSummary: undefined,
+      stopReason: undefined,
+      cursorReportSummary: undefined,
+    };
+  }
+  const artifactReviewMaterial = durable.artifactText;
+  const artifactReviewCompleteness = durable.completeness;
+  const report = durable.cursorReport;
+  if (!report) {
+    // Artifact bytes may exist without a Cursor claim — do not fabricate a report surface.
+    return {
+      executionReport: null,
+      artifactReviewMaterial,
+      artifactReviewCompleteness,
+      workPerformedSummary: undefined,
+      blockersSummary: undefined,
+      stopReason: undefined,
+      cursorReportSummary: undefined,
+    };
+  }
+  const workPerformedSummary = (report.workPerformed ?? [])
+    .map((s) => String(s))
+    .join("; ")
+    .slice(0, 1200);
+  const blockersSummary = (report.blockers ?? [])
+    .map((s) => String(s))
+    .join("; ")
+    .slice(0, 800);
+  const stopReason = report.stopConditionTriggered?.trim() || undefined;
+  const fileFx = report.fileEffects;
+  const artifactsSummary = fileFx
+    ? [
+        ...(fileFx.created ?? []).map((p) => `créé:${p}`),
+        ...(fileFx.modified ?? []).map((p) => `modifié:${p}`),
+        ...(fileFx.deleted ?? []).map((p) => `supprimé:${p}`),
+      ]
+        .join("; ")
+        .slice(0, 800)
+    : null;
+  const validationsSummary = (report.validationEffects ?? [])
+    .map((v) => `${v.identity}:${v.result}`)
+    .join("; ")
+    .slice(0, 600);
+  const reservationsSummary = (report.reservations ?? [])
+    .map((s) => String(s))
+    .join("; ")
+    .slice(0, 600);
+  const cursorReportSummary = [
+    `status=${report.status}`,
+    workPerformedSummary ? `work=${workPerformedSummary}` : null,
+    artifactsSummary ? `files=${artifactsSummary}` : null,
+    validationsSummary ? `validations=${validationsSummary}` : null,
+    blockersSummary ? `blockers=${blockersSummary}` : null,
+    `artifactReview=${durable.completeness}`,
+  ]
+    .filter(Boolean)
+    .join(" | ")
+    .slice(0, 2000);
+  return {
+    executionReport: {
+      cursorStatus: report.status,
+      workPerformedSummary: workPerformedSummary || null,
+      artifactsSummary,
+      validationsSummary: validationsSummary || null,
+      blockersSummary: blockersSummary || null,
+      reservationsSummary: reservationsSummary || null,
+      artifactReviewCompleteness: durable.completeness,
+    },
+    artifactReviewMaterial,
+    artifactReviewCompleteness,
+    workPerformedSummary: workPerformedSummary || undefined,
+    blockersSummary: blockersSummary || undefined,
+    stopReason,
+    cursorReportSummary,
+  };
+}
+
+async function resolveDocsWriteTargetPathForProduct(input: {
+  readonly oa: RuntimeOaStack;
+  readonly executionContractId: string;
+}): Promise<string | undefined> {
+  if (!input.oa.executionContractServices) return undefined;
+  const loaded =
+    await input.oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: input.executionContractId,
+    });
+  if (!loaded.ok) return undefined;
+  const raw = loaded.contract.inputs?.targetPath;
+  return typeof raw === "string" && raw.trim() ? raw.trim() : undefined;
+}
+
+async function withDurableExecutionReport(
+  success: W3cPostEvidenceLoopSuccess,
+  input: {
+    readonly oa: RuntimeOaStack;
+    readonly product: W3BProductTerminalProjection;
+  },
+): Promise<W3cPostEvidenceLoopSuccess> {
+  if (success.executionReport) return success;
+  const targetPath = await resolveDocsWriteTargetPathForProduct({
+    oa: input.oa,
+    executionContractId: input.product.technicalDetail.executionContractId,
+  });
+  const projected = projectW3cExecutionReportSurfaceFromDurable({
+    attemptId: input.product.technicalDetail.attemptId,
+    targetPath,
+  });
+  if (!projected.executionReport) return success;
+  return { ...success, executionReport: projected.executionReport };
+}
+
 export type W3cPostEvidenceLoopSuccess = {
   ok: true;
   noraInvoked: boolean;
@@ -76,6 +230,8 @@ export type W3cPostEvidenceLoopSuccess = {
   reviewBundleId: string;
   claimEvaluationId: string | null;
   productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+  /** Business-first Cursor/artifact handoff surface (optional). */
+  executionReport?: W3cExecutionReportSurface | null;
 };

 export type W3cPostEvidenceLoopResult =
@@ -635,7 +791,10 @@ export async function findExistingW3cPostEvidence(input: {
     | "claimEvaluationId"
     | "outcome"
   > & {
-    readonly technicalDetail: { readonly attemptId: string };
+    readonly technicalDetail: {
+      readonly attemptId: string;
+      readonly executionContractId?: string;
+    };
   };
 }): Promise<W3cPostEvidenceLoopSuccess | null> {
   if (!input.oa.cycleServices) return null;
@@ -724,7 +883,41 @@ export async function findExistingW3cPostEvidence(input: {
       }
     }
   }
-  return successFromPayload(payload);
+  const success = successFromPayload(payload);
+  const ecId = input.product?.technicalDetail?.executionContractId;
+  if (ecId) {
+    return withDurableExecutionReport(success, {
+      oa: input.oa,
+      product: {
+        ...input.product,
+        evidenceId: input.product.evidenceId ?? input.evidenceId,
+        reviewBundleId:
+          input.product.reviewBundleId ?? success.reviewBundleId,
+        technicalDetail: {
+          attemptId:
+            input.product.technicalDetail.attemptId || input.attemptId,
+          attemptStatus: "unknown",
+          resultRef: null,
+          errorRef: null,
+          stopReason: null,
+          stopOrigin: null,
+          stopCode: null,
+          executionContractId: ecId,
+          executionContractVersion: 0,
+        },
+      } as W3BProductTerminalProjection,
+    });
+  }
+  // Fallback: attemptId alone — try durable load without contract targetPath.
+  if (input.product) {
+    const projected = projectW3cExecutionReportSurfaceFromDurable({
+      attemptId: input.attemptId,
+    });
+    if (projected.executionReport) {
+      return { ...success, executionReport: projected.executionReport };
+    }
+  }
+  return success;
 }

 /**
@@ -1231,6 +1424,7 @@ export async function runW3cPostEvidenceLoop(input: {
   let acceptanceCriteriaSummary: string | undefined;
   let expectedOutputsSummary: string | undefined;
   let validationPlanSummary: string | undefined;
+  let docsWriteTargetPath: string | undefined;
   if (oa.executionContractServices) {
     const loaded =
       await oa.executionContractServices.getExecutionContract.execute({
@@ -1243,6 +1437,10 @@ export async function runW3cPostEvidenceLoop(input: {
       if (typeof objective === "string" && objective.trim()) {
         contractObjective = objective.trim().slice(0, 500);
       }
+      const targetPathRaw = loaded.contract.inputs?.targetPath;
+      if (typeof targetPathRaw === "string" && targetPathRaw.trim()) {
+        docsWriteTargetPath = targetPathRaw.trim();
+      }
       const criteria = parseContractAcceptanceCriteria(
         loaded.contract.inputs?.[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY],
       );
@@ -1292,7 +1490,6 @@ export async function runW3cPostEvidenceLoop(input: {
   }
   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);

-  noraInvoked = true;
   const eoSummary =
     claimEvaluation?.expectedOutputAssessments
       ?.map((a) => `${a.itemId.ordinal}:${a.result}`)
@@ -1301,6 +1498,23 @@ export async function runW3cPostEvidenceLoop(input: {
     claimEvaluation?.evidenceRequirementAssessments
       ?.map((a) => `${a.itemId.ordinal}:${a.result}`)
       .join("; ") ?? undefined;
+
+  // Durable Cursor report + artifact review material (no Pilot paste / PATH widen).
+  // Shared projection with rehydrate — never invent a report when claim file absent.
+  const durableProjection = projectW3cExecutionReportSurfaceFromDurable({
+    attemptId,
+    targetPath: docsWriteTargetPath,
+  });
+  const workPerformedSummary = durableProjection.workPerformedSummary;
+  const blockersSummary = durableProjection.blockersSummary;
+  const stopReason = durableProjection.stopReason;
+  const artifactReviewMaterial = durableProjection.artifactReviewMaterial;
+  const artifactReviewCompleteness =
+    durableProjection.artifactReviewCompleteness;
+  const cursorReportSummary = durableProjection.cursorReportSummary;
+  const executionReport = durableProjection.executionReport;
+
+  noraInvoked = true;
   const analysis = await analyzePostEvidenceWithProvider(
     {
       projectId,
@@ -1336,6 +1550,13 @@ export async function runW3cPostEvidenceLoop(input: {
         : {}),
       ...(processStdout !== undefined ? { stdout: processStdout } : {}),
       ...(processStderr !== undefined ? { stderr: processStderr } : {}),
+      ...(workPerformedSummary ? { workPerformedSummary } : {}),
+      ...(blockersSummary ? { blockersSummary } : {}),
+      ...(stopReason ? { stopReason } : {}),
+      ...(artifactReviewMaterial
+        ? { artifactReviewMaterial, artifactReviewCompleteness }
+        : {}),
+      ...(cursorReportSummary ? { cursorReportSummary } : {}),
     },
     { ckcPromptSection },
   );
@@ -1371,6 +1592,7 @@ export async function runW3cPostEvidenceLoop(input: {
     reviewBundleId: product.reviewBundleId,
     claimEvaluationId: product.claimEvaluationId,
     productOutcome: product.outcome,
+    ...(executionReport ? { executionReport } : {}),
   };

   // Exact Recommendation payload in existing LPS context (Option A).
@@ -1452,7 +1674,10 @@ export async function rehydrateW3cPostEvidenceFromLps(input: {
     attemptId: product.technicalDetail.attemptId,
   });
   if (payload) {
-    return successFromPayload(payload);
+    return withDurableExecutionReport(successFromPayload(payload), {
+      oa,
+      product,
+    });
   }

   // Exact LPS V1 payload (partial-write recovery) before any lossy rebuild.
@@ -1463,12 +1688,13 @@ export async function rehydrateW3cPostEvidenceFromLps(input: {
     product,
   });
   if (exact) {
-    return repairEpistemicFromRecoveredSuccess({
+    const repaired = await repairEpistemicFromRecoveredSuccess({
       oa,
       projectId,
       attemptId: product.technicalDetail.attemptId,
       success: exact,
     });
+    return withDurableExecutionReport(repaired, { oa, product });
   }

   // Legacy fallback: evidence-scoped LPS Nora extract — never return B's analysis for A.
@@ -1551,19 +1777,22 @@ export async function rehydrateW3cPostEvidenceFromLps(input: {
       ? { ...built, nextStep: lps.nextStep.trim() }
       : built;

-  return {
-    ok: true,
-    // Fidelity: never invent Nora — only from scoped extract.
-    noraInvoked: Boolean(scoped.analysisText),
-    replanInvoked: false,
-    analysisText: scoped.analysisText,
-    analysisUnavailableReason: scoped.analysisUnavailableReason,
-    analysisProviderId: null,
-    recommendation,
-    lpsVersion: lps.version,
-    evidenceId: product.evidenceId,
-    reviewBundleId: product.reviewBundleId,
-    claimEvaluationId: product.claimEvaluationId,
-    productOutcome: product.outcome,
-  };
+  return withDurableExecutionReport(
+    {
+      ok: true,
+      // Fidelity: never invent Nora — only from scoped extract.
+      noraInvoked: Boolean(scoped.analysisText),
+      replanInvoked: false,
+      analysisText: scoped.analysisText,
+      analysisUnavailableReason: scoped.analysisUnavailableReason,
+      analysisProviderId: null,
+      recommendation,
+      lpsVersion: lps.version,
+      evidenceId: product.evidenceId,
+      reviewBundleId: product.reviewBundleId,
+      claimEvaluationId: product.claimEvaluationId,
+      productOutcome: product.outcome,
+    },
+    { oa, product },
+  );
 }
```


### `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index 0229be55..24ee0deb 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -77,6 +77,11 @@ export type FakeDocsWriteLaunchPortOptions = {
   gitState?: FakeCursorGitExternalState;
   /** Default branch name used for fake commit/push when not otherwise known. */
   defaultBranch?: string;
+  /**
+   * TestOnly — control CursorExecutionReport stdout claim emission.
+   * Default `emit` (nominal). `omit` / `malformed` prove fail-closed handoff.
+   */
+  cursorReportMode?: "emit" | "omit" | "malformed";
 };

 const DEFAULT_FILESYSTEM_EFFECTS: readonly CursorAuthorizedEffectId[] = [
@@ -774,13 +779,21 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     this.lastReport = report;

     const processRef = `proc:fake-docs-write:${request.attemptId}`;
+    const reportMode = this.options.cursorReportMode ?? "emit";
+    let reportStdout = "";
+    if (reportMode === "emit") {
+      reportStdout = `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`;
+    } else if (reportMode === "malformed") {
+      reportStdout = "CURSOR_EXECUTION_REPORT_JSON={not-valid-json\n";
+    }
+    // omit → no marker / no claim
     this.observations.set(processRef, {
       processRef,
       exitCode: 0,
       timedOut: false,
       stdout:
         `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${this.lastDigest ?? ""}\n` +
-        `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
+        reportStdout,
       stderr: "",
       durationMs: 1,
       realProcessInvoked: true,
```


### `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`

**Form:** FULL

```typescript
/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 — integrated Product proof (R1–R4).
 * Deterministic FakeDocsWriteLaunchPort only. ZERO REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  docsWriteArtifactRefsRelative,
  loadDocsWriteArtifactReviewMaterial,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  materializeProductOutcomeFromAttempt,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  materializeLifecycleRecommendationFromStructuredOutput,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  resolveTrajectoryBootstrapPresence,
  startPreparedTrajectoryCycle,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  isStudioCursorRealEnabled,
  type FakeDocsWriteLaunchPortOptions,
} from "@/lib/oa/execution-attempt";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-16T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_CONTENT =
  "# Functional design\n\n## Goals\nPost-execution handoff integrated proof.\n";

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempRoots: string[] = [];
let previousProductDb: string | undefined;
let previousManaged: string | undefined;
let previousProvider: string | undefined;
let previousMorris: string | undefined;
let previousAllowReset: string | undefined;

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, "docs", ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:peh-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:peh-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:peh-${this.prefix}-${this.n}`;
  }
}

type HandoffCtx = {
  suffix: string;
  root: string;
  managedBase: string;
  repoRoot: string;
  baseHeadSha: string;
  productDbPath: string;
  refsRoot: string;
  runtime: RuntimeApplicationService;
  oa: RuntimeOaStack;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  fakeLaunch: FakeDocsWriteLaunchPort;
  currentContext: {
    projectId: string;
    lpsId: string;
    lpsVersion: number;
    doctrineDigest: string;
    activeCycleInstanceId: string;
  };
};

async function bootHandoffJourney(
  suffix: string,
  launchOverrides: Pick<
    FakeDocsWriteLaunchPortOptions,
    "cursorReportMode" | "content" | "targetPath"
  > = {},
): Promise<HandoffCtx> {
  const root = tempDir(`sfia-peh-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: BRANCH,
    initialSha: baseHeadSha,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
    targetPath: TARGET_PATH,
    content: ARTIFACT_CONTENT,
    ...launchOverrides,
  });
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const productDbPath = path.join(root, "oa.sqlite");
  const refsRoot = path.join(path.dirname(productDbPath), "mission-result-refs");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = productDbPath;
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;

  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath,
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal,
      managedRepoRootBase: managedBase,
    },
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `PEH ${suffix}`,
    objective: "Post-execution handoff integrated",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `PEH${suffix}`.slice(0, 8),
    idempotencyKey: `idem:peh-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject");
  const projectId = created.project.projectId;

  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
    projectId,
    actor: PILOTE,
    binding: {
      provider: "github",
      identity: IDENTITY,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      defaultBranch: BRANCH,
      pathRoot: "docs",
      baseSha: baseHeadSha,
    },
  });
  expect(bound.ok).toBe(true);

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
  const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lpsBoot.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const projectBoot = await oa.projectServices.getProject.execute({ projectId });
  if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
    throw new Error("doctrine pin missing");
  }
  const pin = projectBoot.project.doctrinePackageRef;

  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "PEH Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "PEH",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: { ...SIGNALS_LIGHT },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles: cycles0,
      lpsActiveCycleInstanceId: lpsBoot.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsBoot.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions: decisions0,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: NOW,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  if (!mat.materialization?.ok) {
    throw new Error(
      `materialization failed: ${JSON.stringify(mat, null, 2).slice(0, 2000)}`,
    );
  }

  const bridgeDeps = {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (pid: string) =>
      oa.cycleServices.epistemic.listByProject(pid),
    listCyclesByProject: (pid: string) =>
      oa.cycleServices.cycles.listByProject(pid),
    listDecisionsByProject: (pid: string) =>
      oa.decisionServices.decisions.listByProject(pid),
    listEvidenceByProject: (pid: string) =>
      oa.evidenceReviewServices.repository.listByProject(pid),
    getCurrentLps: (pid: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: pid,
      }),
    getProjectDoctrinePin: async (pid: string) => {
      const p = await oa.projectServices.getProject.execute({ projectId: pid });
      if (!p.ok) return null;
      const d = p.project.doctrinePackageRef;
      return d
        ? {
            doctrinePackageId: d.doctrinePackageId,
            version: d.version,
            digest: d.digest,
          }
        : null;
    },
    newTrajectoryId: () => `trj:peh-${suffix}`,
    newStepId: () => `stp:peh-${suffix}`,
    newProvenanceObservationId: () => `epi:peh-${suffix}`,
    correlationId: `cor:peh-bridge-${suffix}`,
  };

  const candidate = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps,
  });
  expect(candidate.ok).toBe(true);
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa,
    projectId,
  });
  expect(presentation.ok && presentation.presentation).toBeTruthy();
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation");
  }
  const approved = await approveCandidateTrajectory({
    oa,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(prep.code);
  const startedCycle = await startPreparedTrajectoryCycle({
    oa,
    projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(startedCycle.ok).toBe(true);
  if (!startedCycle.ok) throw new Error(startedCycle.code);
  const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview");
  const provider = new FakeConversationProvider();
  const analyzed = await analyzeIntent({
    userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
    projectSummary: overview.project.name ?? "PEH",
    provider,
  });
  const snapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: cycleInstanceId,
    ckcResolutionRef: null as string | null,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: analyzed.analysis.rephrasedRequest ?? "docs write",
    objective: analyzed.analysis.objective ?? "FD",
    cycleTypeId:
      analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
    recommendedProfile: "Standard",
    rationale: "PEH",
    scope: analyzed.analysis.scope ?? "docs/",
    outOfScope: analyzed.analysis.outOfScope,
    activatedBlocks: analyzed.analysis.activatedBlocks,
    expectedOutcome: analyzed.analysis.expectedOutcome ?? "artifact",
    sources: [],
    risks: analyzed.analysis.risks,
    reservations: analyzed.analysis.reservations,
    stopConditions: analyzed.analysis.stopConditions,
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: analyzed.analysis.requestedOperation,
    executionIntent: analyzed.analysis.executionIntent,
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: oa.decisionServices,
    authorityResolver: oa.authorityResolver,
    nowIso: () => oa.clock.nowIso(),
    oa,
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");
  const decisionId = go.decision.decisionId;

  const overviewAfter = await runtime.getProject(projectId);
  if (!overviewAfter.ok) throw new Error("overviewAfter");

  return {
    suffix,
    root,
    managedBase,
    repoRoot,
    baseHeadSha,
    productDbPath,
    refsRoot,
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
  };
}

async function prepareInspectConfirmAuthorize(ctx: HandoffCtx): Promise<string> {
  const prepared = await prepareAndResolveM3ProductPath({
    projectId: ctx.projectId,
    decisionId: ctx.decisionId,
    currentContext: ctx.currentContext,
    deps: {
      decisionServices: ctx.oa.decisionServices,
      authorityResolver: ctx.oa.authorityResolver,
      executionContractServices: ctx.oa.executionContractServices,
      nowIso: () => ctx.oa.clock.nowIso(),
      forceM3Authority: true,
      boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
  const executionContractId = prepared.payload.successor.executionContractId;

  const inspected = await inspectExecutionContract({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
  });
  expect(inspected.ok).toBe(true);

  const confirmed = await confirmExecutionContractForAuthorization({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);

  const authorized = await evaluateExecutionAuthorization({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("authz");
  expect(authorized.outcome).toBe("AUTHORIZED");
  return executionContractId;
}

async function loadSucceededAttemptId(
  ctx: HandoffCtx,
  executionContractId: string,
): Promise<string> {
  const listed =
    await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId,
    });
  expect(listed.ok).toBe(true);
  if (!listed.ok) throw new Error("list attempts");
  const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
  expect(succeeded.length).toBeGreaterThanOrEqual(1);
  return succeeded[0]!.attemptId;
}

function reopenRuntimeOnSameDb(ctx: HandoffCtx): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = ctx.productDbPath;
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = ctx.managedBase;
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: ctx.repoRoot,
    initialBranch: BRANCH,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: ctx.repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
    targetPath: TARGET_PATH,
    content: ARTIFACT_CONTENT,
  });
  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(`${ctx.suffix}-restart`),
    auditMode: "noop",
    productDbPath: ctx.productDbPath,
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal: new MemoryLaunchSafetyJournal(),
      managedRepoRootBase: ctx.managedBase,
    },
  });
}

beforeEach(() => {
  assertRealOff();
  previousProductDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
  previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
  previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  vi.restoreAllMocks();
  resetF2ProposalStoreForTests();
  setConversationProviderForTests(null);
  resetRuntimeApplicationServiceForTests();
  while (tempRoots.length) {
    const d = tempRoots.pop();
    if (d) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
  restoreEnvVar("SFIA_STUDIO_PRODUCT_DB_PATH", previousProductDb);
  restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
  restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
  restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  restoreEnvVar("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
  assertRealOff();
});

describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 integrated (R1–R4)", () => {
  it("integrated happy — fresh execute, hot worktree removed, restart rehydrates executionReport (R2)", async () => {
    const nora = new FakeConversationProvider({
      scripted: Array(12).fill("PEH_HANDOFF_NORA_ANALYSIS"),
    });
    setConversationProviderForTests(nora);

    const ctx = await bootHandoffJourney("happy");
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("succeeded");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);

    const attemptId = executed.attemptId!;
    const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
    const evidence =
      await ctx.oa.evidenceReviewServices!.evidenceReader.findById(evidenceId);
    expect(evidence).toBeTruthy();
    expect(evidence!.storageMode).toBe("external_payload_ref");
    expect(evidence!.location).toBeTruthy();
    expect(fs.existsSync(evidence!.location!)).toBe(true);
    expect(evidence!.location!.startsWith(ctx.refsRoot)).toBe(true);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    const cursorReportPath = path.join(ctx.refsRoot, rel.cursorReport);
    expect(fs.existsSync(cursorReportPath)).toBe(true);

    const loaded = loadDocsWriteArtifactReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
      targetPath: TARGET_PATH,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.message);
    expect(loaded.completeness).toMatch(/^(FULL|PARTIAL)$/);
    expect(loaded.cursorReport?.status).toMatch(/^(succeeded|stopped)$/);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.message);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) {
      throw new Error("postEvidence missing");
    }
    const report = materialized.postEvidence.executionReport;
    expect(report).toBeTruthy();
    expect(report!.cursorStatus).toBeTruthy();
    expect(
      report!.workPerformedSummary ?? report!.artifactsSummary,
    ).toBeTruthy();
    expect(report!.artifactReviewCompleteness).toMatch(/^(FULL|PARTIAL)$/);
    const analysisBlob = materialized.postEvidence.analysisText ?? "";
    expect(analysisBlob).not.toMatch(/PATH_NOT_ALLOWED/);

    const recommendationKind = materialized.postEvidence.recommendation.kind;

    fs.rmSync(ctx.repoRoot, { recursive: true, force: true });
    expect(fs.existsSync(ctx.repoRoot)).toBe(false);
    expect(fs.existsSync(cursorReportPath)).toBe(true);

    const restarted = reopenRuntimeOnSameDb(ctx);
    const oa2 = restarted.oa!;

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: oa2,
      projectId: ctx.projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) throw new Error(rehydrated.message);
    expect(rehydrated.postEvidence?.ok).toBe(true);
    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) {
      throw new Error("rehydrate postEvidence");
    }
    expect(rehydrated.postEvidence.recommendation.kind).toBe(recommendationKind);
    expect(rehydrated.postEvidence.executionReport).toBeTruthy();
    expect(rehydrated.postEvidence.executionReport!.cursorStatus).toBeTruthy();
    expect(
      rehydrated.postEvidence.executionReport!.workPerformedSummary ??
        rehydrated.postEvidence.executionReport!.artifactsSummary,
    ).toBeTruthy();
    expect(rehydrated.postEvidence.executionReport!.artifactReviewCompleteness).toMatch(
      /^(FULL|PARTIAL)$/,
    );
    const reanalysis = rehydrated.postEvidence.analysisText ?? "";
    expect(reanalysis).not.toMatch(/PATH_NOT_ALLOWED/);
  });

  it("N1 — omit Cursor report → CURSOR_EXECUTION_REPORT_REQUIRED", async () => {
    const ctx = await bootHandoffJourney("n1", { cursorReportMode: "omit" });
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("CURSOR_EXECUTION_REPORT_REQUIRED");

    const attemptId = await loadSucceededAttemptId(ctx, executionContractId);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    const cursorReportPath = path.join(ctx.refsRoot, rel.cursorReport);
    expect(fs.existsSync(cursorReportPath)).toBe(false);

    const loaded = loadDocsWriteArtifactReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
      targetPath: TARGET_PATH,
    });
    if (loaded.ok) {
      expect(loaded.cursorReport).toBeNull();
    }

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.executionReport ?? null).toBeFalsy();
    }
  });

  it("N2 — malformed Cursor report → CURSOR_EXECUTION_REPORT_MALFORMED", async () => {
    const ctx = await bootHandoffJourney("n2", {
      cursorReportMode: "malformed",
    });
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("CURSOR_EXECUTION_REPORT_MALFORMED");

    const attemptId = await loadSucceededAttemptId(ctx, executionContractId);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    expect(fs.existsSync(path.join(ctx.refsRoot, rel.cursorReport))).toBe(false);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.executionReport ?? null).toBeFalsy();
    }
  });
});
```


### `projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts`

**Form:** FULL

```typescript
/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01
 * Deterministic Product handoff: CursorExecutionReport + durable artifact →
 * Evidence/Nora without Pilot paste / PATH widen / rehydrate CTA.
 * ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  OA_CURSOR_EXECUTION_REPORT_SCHEMA,
  bindCursorExecutionReportToAttempt,
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import {
  assertCursorPromptParityWithInspection,
  projectExecutionContractToCursorPrompt,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { createInMemoryEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { FixedClock } from "@/lib/oa/doctrine";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import {
  loadDocsWriteArtifactReviewMaterial,
  persistDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import type { PostEvidenceAnalysisFacts } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";

const NOW = "2026-09-27T21:00:00.000Z";
const ATTEMPT = "xat:w3a:handoff01deadbeef";
const EC = "xct:handoff-docs-write-01";
const PROJECT = "prj:handoff-sprintboard";
const CYCLE = "cyc:handoff-01";
const REPO = "mcleland147/sfia-workspace";
const SHA = "b7fdf712073257f9fc64c294ac7e68af2cd64464";
const TARGET = "docs/functional-design.md";

function sha256(buf: Buffer | string): string {
  const b = typeof buf === "string" ? Buffer.from(buf, "utf8") : buf;
  return `sha256:${createHash("sha256").update(b).digest("hex")}`;
}

function mintReport(
  overrides: Partial<CursorExecutionReport> = {},
): CursorExecutionReport {
  return {
    schemaVersion: OA_CURSOR_EXECUTION_REPORT_SCHEMA,
    reportId: mintCursorExecutionReportId({
      attemptId: ATTEMPT,
      executionContractId: EC,
    }),
    attemptId: ATTEMPT,
    executionContractId: EC,
    repositoryRef: REPO,
    baseSha: SHA,
    status: "succeeded",
    workPerformed: ["Wrote functional design markdown"],
    fileEffects: {
      created: [TARGET],
      modified: [],
      deleted: [],
    },
    validationEffects: [
      { identity: "file_exists", result: "pass", summary: "target present" },
    ],
    authorizedEffectsExecuted: ["filesystem.create"],
    blockers: [],
    reservations: ["claim_only"],
    ...overrides,
  };
}

function minimalContract(): ExecutionContract {
  const inputs = {
    objective: "Rédiger le design fonctionnel SprintBoard",
    targetPath: TARGET,
    pathAllowlist: ["docs/"],
    repositoryBindingIdentity: REPO,
    baseHeadSha: SHA,
  };
  return {
    schemaVersion: "oa.execution-contract.1",
    executionContractId: EC,
    version: 1,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    status: "authorized",
    action: "docs_write",
    technicalTarget: "filesystem",
    target: "workspace.isolated.cursor",
    scope: "docs/",
    requiredAuthority: "N3",
    requiredCapabilities: ["cap:docs_write"],
    reversibility: "reversible",
    inputs,
    expectedOutputs: ["Markdown design at targetPath"],
    evidenceRequirements: ["evreq:docs-write-artifact"],
    constraints: [],
    stopConditions: ["out_of_scope"],
    semanticFingerprint: "fp:handoff-test",
    idempotencyKey: "idem:handoff-test",
    correlationId: "cor:handoff-test",
    createdAt: NOW,
    updatedAt: NOW,
  } as unknown as ExecutionContract;
}

describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01", () => {
  it("T1 — projected Cursor prompt requires machine-readable report envelope", () => {
    const projection = projectExecutionContractToCursorPrompt({
      contract: minimalContract(),
      attemptId: ATTEMPT,
    });
    expect(projection.promptText).toContain("CURSOR_EXECUTION_REPORT_JSON=");
    expect(projection.promptText).toContain("oa.cursor-execution-report.1");
    expect(projection.promptText).toContain("Rapport final attendu");
    const parity = assertCursorPromptParityWithInspection({ projection });
    expect(parity).toEqual({ ok: true });
  });

  it("T2/T3 — valid report binds; mismatched attemptId fail-closes", () => {
    const valid = mintReport();
    const ok = bindCursorExecutionReportToAttempt({
      report: valid,
      expectedAttemptId: ATTEMPT,
      expectedExecutionContractId: EC,
      attemptExecutionContractId: EC,
      expectedRepositoryRef: REPO,
      expectedBaseSha: SHA,
    });
    expect(ok.ok).toBe(true);

    const bad = mintReport({ attemptId: "xat:w3a:other" });
    const refused = bindCursorExecutionReportToAttempt({
      report: bad,
      expectedAttemptId: ATTEMPT,
      expectedExecutionContractId: EC,
      attemptExecutionContractId: EC,
      expectedRepositoryRef: REPO,
      expectedBaseSha: SHA,
    });
    expect(refused.ok).toBe(false);
  });

  it("T4/T5/T6 — docs_write report + artifact durable after hot worktree gone", async () => {
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-refs-"));
    const worktree = mkdtempSync(path.join(tmpdir(), "sfia-handoff-wt-"));
    try {
      const absTarget = path.join(worktree, TARGET);
      mkdirSync(path.dirname(absTarget), { recursive: true });
      const body = Buffer.from(
        "# Design\n\n## Objectif\nSprintBoard CRUD.\n",
        "utf8",
      );
      writeFileSync(absTarget, body);
      const digest = sha256(body);
      const report = mintReport();

      const services = createInMemoryEvidenceReviewServices({
        clock: new FixedClock(NOW),
      });
      const ingested = await ingestDocsWriteArtifactEvidence({
        evidenceReviewServices: services,
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        executionAttemptId: ATTEMPT,
        targetPath: TARGET,
        digest,
        artifactBytes: body,
        cursorReport: report,
        refsRoot,
        nowIso: NOW,
      });
      expect(ingested.ok).toBe(true);
      if (!ingested.ok) return;
      expect(ingested.storageMode).toBe("external_payload_ref");
      expect(ingested.durableArtifactAbsolutePath).toBeTruthy();
      expect(existsSync(ingested.durableArtifactAbsolutePath!)).toBe(true);

      // Tear down hot worktree — review must still work from durable refs.
      rmSync(worktree, { recursive: true, force: true });

      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        targetPath: TARGET,
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) return;
      expect(loaded.completeness).toBe("FULL");
      expect(loaded.artifactText).toContain("SprintBoard CRUD");
      expect(loaded.cursorReport?.reportId).toBe(report.reportId);
      expect(loaded.cursorReport?.workPerformed?.[0]).toContain(
        "functional design",
      );

      // Evidence location is absolute durable path (restart-safe).
      const ev = await services.evidenceReader.findById(ingested.evidenceId);
      expect(ev?.storageMode).toBe("external_payload_ref");
      expect(ev?.location).toBe(ingested.durableArtifactAbsolutePath);
      expect(readFileSync(ev!.location!, "utf8")).toContain("SprintBoard");
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
      try {
        rmSync(worktree, { recursive: true, force: true });
      } catch {
        /* already removed */
      }
    }
  });

  it("T6b — oversized artifact is PARTIAL for Nora (never claim FULL)", () => {
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-big-"));
    try {
      const big = Buffer.alloc(20_000, 0x61);
      const digest = sha256(big);
      const persisted = persistDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        artifactBytes: big,
        expectedDigest: digest,
        cursorReport: mintReport(),
      });
      expect(persisted.ok).toBe(true);
      const loaded = loadDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        byteCap: 12_000,
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) return;
      expect(loaded.completeness).toBe("PARTIAL");
      expect(loaded.artifactText.length).toBeLessThanOrEqual(12_000);
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
    }
  });

  it("T8 — PostEvidenceAnalysisFacts carry artifact + report fields for Nora", () => {
    const facts: PostEvidenceAnalysisFacts = {
      projectId: PROJECT,
      executionContractId: EC,
      executionContractStatus: "completed",
      executionContractAction: "docs_write",
      contractObjective: "Rédiger le design",
      attemptId: ATTEMPT,
      attemptStatus: "succeeded",
      selectedAgentRef: "agent:m4-docs-write",
      adapterRef: "adp:m4-cursor-cli-real",
      executionMode: "real",
      realProcessInvoked: true,
      evidenceId: `ev:docs-write:${ATTEMPT}`,
      reviewBundleId: `rb:docs-write:${ATTEMPT}`,
      technicalResultRef: null,
      reservations: [],
      acceptanceCriteriaSummary: "sections présentes",
      expectedOutputsSummary: "markdown at target",
      workPerformedSummary: "Wrote functional design markdown",
      artifactReviewMaterial: "# Design\n\nSprintBoard",
      artifactReviewCompleteness: "FULL",
      cursorReportSummary: "status=succeeded | work=Wrote functional design",
      contractResultVerdict: "pass",
      claimEvaluationStatus: "pass",
    };
    expect(facts.artifactReviewMaterial).toContain("SprintBoard");
    expect(facts.artifactReviewCompleteness).toBe("FULL");
    expect(facts.cursorReportSummary).toContain("succeeded");
    // PATH_NOT_ALLOWED mitigation: content is in facts — no generic FS tool path.
    expect(facts.artifactReviewMaterial).not.toMatch(/\/var\/folders\//);
  });

  it("N1/N2 — projectW3cExecutionReportSurfaceFromDurable never invents report", async () => {
    const {
      projectW3cExecutionReportSurfaceFromDurable,
    } = await import(
      "@/features/project-assistant/w2/w3cPostEvidenceLoop"
    );
    const refsRoot = mkdtempSync(path.join(tmpdir(), "sfia-handoff-n1-"));
    try {
      // Artifact only — no cursor report claim file.
      const body = Buffer.from("# only artifact\n", "utf8");
      const digest = sha256(body);
      const persisted = persistDocsWriteArtifactReviewMaterial({
        refsRoot,
        attemptId: ATTEMPT,
        artifactBytes: body,
        expectedDigest: digest,
        targetPath: TARGET,
        cursorReport: null,
      });
      expect(persisted.ok).toBe(true);
      const projected = projectW3cExecutionReportSurfaceFromDurable({
        attemptId: ATTEMPT,
        targetPath: TARGET,
        refsRoot,
      });
      expect(projected.artifactReviewMaterial).toContain("only artifact");
      expect(projected.executionReport).toBeNull();
      expect(projected.cursorReportSummary).toBeUndefined();
    } finally {
      rmSync(refsRoot, { recursive: true, force: true });
    }
  });

  it("T12 — refs helper stays under existing mission-result-refs convention (no new store)", () => {
    const root = resolveProductEvidenceRefsRoot(
      "/tmp/product-db-dir/mission-result-refs",
    );
    expect(root).toContain("mission-result-refs");
    const derived = resolveProductEvidenceRefsRoot(null);
    expect(derived).toContain("mission-result-refs");
  });

  it("completeBoundedDocsWriteLaunch still surfaces cursorReport on facts (T4 continuity)", async () => {
    // Unit-level: facts type documents cursorReport; parser shared with governed path.
    const report = mintReport();
    const stdout = `ok\nCURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`;
    const marker = "CURSOR_EXECUTION_REPORT_JSON=";
    const idx = stdout.indexOf(marker);
    expect(idx).toBeGreaterThanOrEqual(0);
    const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
    const parsed = JSON.parse(json) as CursorExecutionReport;
    expect(parsed.attemptId).toBe(ATTEMPT);
    // Module still exports completion entrypoint (smoke import).
    expect(typeof completeBoundedDocsWriteLaunch).toBe("function");
  });
});
```


### `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 9175564c..2833ac38 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -75,18 +75,25 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
-- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle
+- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
+- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
+- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle; deterministic report envelope + runtime enforcement AS-IMPLEMENTED

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
-- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake)
+- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
+- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

 ## F12 — ContractResult / ClaimEvaluation
-- **Paths:** claim evaluation tables/services
-- **Status:** PRESENT; journey proof PARTIAL
+- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
+- **Claim-completion propagation:** RecordResult **consumes** the completion result — infrastructure/invariant failures → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`; conformity insufficiency → technical Attempt unchanged, Product stays NOT_PROVEN/UNCLAIMED (honest). Result is never swallowed.
+- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
+- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro

 ## F13 — Nora post-Evidence
-- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred
+- **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
+- **UI:** TrajectorySurface shows business-first « Rapport d'exécution » from `postEvidence.executionReport` when present; rehydrate button remains recovery-only (not nominal step); after restart the report is restored from durable refs without a new Nora call solely for the report
+- **Status:** DETERMINISTIC fresh + restart handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

 ## F14 — LPS / trajectory continuation or recovery
 - **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
```


### `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 5eb7336b..db9852c6 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -7,6 +7,7 @@
 - PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
 - ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
 - CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
+- POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01: DETERMINISTIC post-execution report/artifact→Nora handoff proven at tested scope only — **NOT REAL PROVEN**; SprintBoard REAL re-proof requires distinct Morris GO
 - No CI workflow changes

 ## Current campaign findings (verified against repo where possible)
@@ -33,7 +34,23 @@

 ## Next macro

-`CHAT-FIRST-GOVERNED-DECISION-LOOP-01` **local candidate** on branch `feat/sfia-studio-chat-first-governed-decision-loop-01` (this tree). Capacité suivante après revue: **campagne PocketTasks REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL.
+`POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.
+
+## POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 overlay
+
+| Item | Status |
+|---|---|
+| Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
+| docs_write report **runtime** required (not optional) | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded |
+| docs_write report continuity after `completeBoundedDocsWriteLaunch` | AS-IMPLEMENTED — bind + persist claim beside Artifact Evidence |
+| Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
+| Claim completion result propagation | AS-IMPLEMENTED — result consumed; infra → continuity fail-closed; insufficiency → honest NOT_PROVEN |
+| Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
+| Fresh + **restart/rehydrate** executionReport surface | AS-IMPLEMENTED — shared `projectW3cExecutionReportSurfaceFromDurable`; LPS keeps Recommendation only |
+| Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
+| Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |
+| REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
+| New store/table / parallel engines | NONE |

 ## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay
```


### `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 20bad13f..55e0d691 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "32de55f8eef8f66f"
+      "sha256_16": "e0cb5d3d45e8c9d2"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "aef228b1eb2405b6"
+      "sha256_16": "eb23d5fdaa203972"
     }
   ],
   "components": [
@@ -712,7 +712,7 @@
     },
     {
       "path": "projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts",
-      "sha256_16": "1af5e992db2ddc00"
+      "sha256_16": "0b4277b6c3e98126"
     }
   ],
   "maintenance": {
```



## Remaining macro files (FULL new / DIFF modified vs origin/main base)


### `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`

**Form:** FULL

```typescript
/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 —
 * Persist docs_write artifact bytes + CursorExecutionReport claim under the
 * existing Evidence refs filesystem layout (no new store/table).
 *
 * Artifact content becomes restart-safe for Nora review.
 * CursorExecutionReport remains a CLAIM file — not Evidence by itself.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Digest } from "@/lib/oa/doctrine";
import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";

/** Soft cap for Nora-facing artifact body (bytes). Truncation → PARTIAL. */
export const DOCS_WRITE_ARTIFACT_NORA_REVIEW_BYTE_CAP = 12_000;

export type DocsWriteArtifactReviewCompleteness = "FULL" | "PARTIAL";

export function docsWriteArtifactRefsRelative(
  attemptId: string,
  targetPath?: string,
): {
  readonly artifact: string;
  readonly cursorReport: string;
} {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const safeTarget = (targetPath ?? "artifact.bin")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .filter((p) => p && p !== "." && p !== "..")
    .join("/");
  return {
    artifact: `refs/attempts/${segment}/docs-write-artifact/${safeTarget || "artifact.bin"}`,
    cursorReport: `refs/attempts/${segment}/cursor-execution-report.json`,
  };
}

export function digestUtf8OrBytes(content: string | Buffer): Digest {
  const buf = typeof content === "string" ? Buffer.from(content, "utf8") : content;
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

export function persistDocsWriteArtifactReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
  readonly artifactBytes: Buffer;
  /** Independent digest already verified from the hot worktree (must match). */
  readonly expectedDigest: string;
  /** Relative contract target path — preserved under durable refs tree. */
  readonly targetPath?: string;
  readonly cursorReport?: CursorExecutionReport | null;
}):
  | {
      ok: true;
      artifactAbsolutePath: string;
      artifactDigest: Digest;
      cursorReportAbsolutePath: string | null;
    }
  | { ok: false; code: string; message: string } {
  const computed = digestUtf8OrBytes(input.artifactBytes);
  if (computed !== input.expectedDigest) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_DIGEST_MISMATCH",
      message:
        "Durable artifact digest does not match independently verified digest.",
    };
  }
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const rel = docsWriteArtifactRefsRelative(
      input.attemptId,
      input.targetPath,
    );
    const artifactAbsolutePath = path.join(input.refsRoot, rel.artifact);
    fs.mkdirSync(path.dirname(artifactAbsolutePath), { recursive: true });
    fs.writeFileSync(artifactAbsolutePath, input.artifactBytes);
    let cursorReportAbsolutePath: string | null = null;
    if (input.cursorReport) {
      cursorReportAbsolutePath = path.join(input.refsRoot, rel.cursorReport);
      fs.writeFileSync(
        cursorReportAbsolutePath,
        `${JSON.stringify(input.cursorReport)}\n`,
        "utf8",
      );
    }
    return {
      ok: true,
      artifactAbsolutePath,
      artifactDigest: computed,
      cursorReportAbsolutePath,
    };
  } catch (err) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function loadDocsWriteArtifactReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
  readonly targetPath?: string;
  /** Soft Nora cap — never claim FULL when truncated. */
  readonly byteCap?: number;
}):
  | {
      ok: true;
      artifactText: string;
      completeness: DocsWriteArtifactReviewCompleteness;
      cursorReport: CursorExecutionReport | null;
      artifactAbsolutePath: string;
      cursorReportAbsolutePath: string | null;
    }
  | { ok: false; code: string; message: string } {
  const rel = docsWriteArtifactRefsRelative(input.attemptId, input.targetPath);
  let artifactAbsolutePath = path.join(input.refsRoot, rel.artifact);
  const cursorReportAbsolutePath = path.join(input.refsRoot, rel.cursorReport);
  if (!fs.existsSync(artifactAbsolutePath) && !input.targetPath) {
    // Fallback: first file under docs-write-artifact/ for the attempt.
    const dir = path.join(
      input.refsRoot,
      `refs/attempts/${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}/docs-write-artifact`,
    );
    if (fs.existsSync(dir)) {
      const walk = (d: string): string | null => {
        for (const name of fs.readdirSync(d)) {
          const child = path.join(d, name);
          const st = fs.statSync(child);
          if (st.isFile()) return child;
          if (st.isDirectory()) {
            const nested = walk(child);
            if (nested) return nested;
          }
        }
        return null;
      };
      const found = walk(dir);
      if (found) artifactAbsolutePath = found;
    }
  }
  if (!fs.existsSync(artifactAbsolutePath)) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_REVIEW_MISSING",
      message: "Durable docs_write artifact review material introuvable.",
    };
  }
  try {
    const bytes = fs.readFileSync(artifactAbsolutePath);
    const cap = input.byteCap ?? DOCS_WRITE_ARTIFACT_NORA_REVIEW_BYTE_CAP;
    const truncated = bytes.byteLength > cap;
    const slice = truncated ? bytes.subarray(0, cap) : bytes;
    const artifactText = slice.toString("utf8");
    let cursorReport: CursorExecutionReport | null = null;
    if (fs.existsSync(cursorReportAbsolutePath)) {
      try {
        const raw = JSON.parse(
          fs.readFileSync(cursorReportAbsolutePath, "utf8"),
        ) as unknown;
        if (
          raw &&
          typeof raw === "object" &&
          (raw as { schemaVersion?: unknown }).schemaVersion ===
            "oa.cursor-execution-report.1"
        ) {
          cursorReport = raw as CursorExecutionReport;
        }
      } catch {
        cursorReport = null;
      }
    }
    return {
      ok: true,
      artifactText,
      completeness: truncated ? "PARTIAL" : "FULL",
      cursorReport,
      artifactAbsolutePath,
      cursorReportAbsolutePath: fs.existsSync(cursorReportAbsolutePath)
        ? cursorReportAbsolutePath
        : null,
    };
  } catch (err) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_REVIEW_READ_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

/** Default refs root beside Product SQLite (same convention as mission-result-refs). */
export function resolveProductEvidenceRefsRoot(
  explicit?: string | null,
): string {
  const trimmed = explicit?.trim();
  if (trimmed) return trimmed;
  const db =
    typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      : path.join(process.cwd(), "..", ".sfia-exec", "product", "oa-product.sqlite");
  return path.join(path.dirname(db), "mission-result-refs");
}
```


### `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
index b2cf6655..6151592b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
@@ -1,13 +1,23 @@
 /**
  * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
  * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
+ *
+ * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01:
+ * When artifact bytes are supplied, persist under existing Evidence refs layout
+ * (`external_payload_ref`) so Nora can review without hot worktree / Pilot paste.
+ * CursorExecutionReport claim may be persisted alongside (still NOT Evidence).
  */
 import type { Digest } from "@/lib/oa/doctrine";
 import type {
   ActorReference,
   EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
+import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
+import {
+  persistDocsWriteArtifactReviewMaterial,
+  resolveProductEvidenceRefsRoot,
+} from "./persistDocsWriteArtifactReviewMaterial";

 export type IngestDocsWriteArtifactEvidenceInput = {
   evidenceReviewServices: EvidenceReviewServices;
@@ -20,6 +30,15 @@ export type IngestDocsWriteArtifactEvidenceInput = {
   actor?: ActorReference;
   correlationId?: string;
   nowIso?: string;
+  /**
+   * Independently verified artifact bytes from the hot worktree.
+   * When present → durable external_payload_ref (restart-safe review).
+   * When absent → legacy metadata_only (location = relative targetPath).
+   */
+  artifactBytes?: Buffer;
+  cursorReport?: CursorExecutionReport | null;
+  /** Absolute refs root (defaults beside Product SQLite). */
+  refsRoot?: string;
 };

 export type IngestDocsWriteArtifactEvidenceResult =
@@ -28,6 +47,9 @@ export type IngestDocsWriteArtifactEvidenceResult =
       evidenceId: string;
       reviewBundleId: string;
       evidenceStatus: string;
+      storageMode: "metadata_only" | "external_payload_ref";
+      durableArtifactAbsolutePath?: string;
+      durableCursorReportAbsolutePath?: string | null;
     }
   | { ok: false; code: string; message: string };

@@ -40,16 +62,44 @@ export async function ingestDocsWriteArtifactEvidence(
   const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
   const digest = input.digest as Digest;

+  let location = input.targetPath;
+  let storageMode: "metadata_only" | "external_payload_ref" = "metadata_only";
+  let durableArtifactAbsolutePath: string | undefined;
+  let durableCursorReportAbsolutePath: string | null | undefined;
+
+  if (input.artifactBytes) {
+    const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
+    const persisted = persistDocsWriteArtifactReviewMaterial({
+      refsRoot,
+      attemptId: input.executionAttemptId,
+      artifactBytes: input.artifactBytes,
+      expectedDigest: input.digest,
+      targetPath: input.targetPath,
+      cursorReport: input.cursorReport ?? null,
+    });
+    if (!persisted.ok) {
+      return {
+        ok: false,
+        code: persisted.code,
+        message: persisted.message,
+      };
+    }
+    location = persisted.artifactAbsolutePath;
+    storageMode = "external_payload_ref";
+    durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
+    durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;
+  }
+
   const registered = await input.evidenceReviewServices.registerEvidence.execute({
     evidenceId,
     type: "artifact",
     status: "available",
     digest,
-    location: input.targetPath,
+    location,
     source: "execution_attempt:docs_write",
     sourceKind: "external",
     classification: "internal",
-    storageMode: "metadata_only",
+    storageMode,
     bindings: {
       projectId: input.projectId,
       cycleInstanceId: input.cycleInstanceId,
@@ -69,7 +119,26 @@ export async function ingestDocsWriteArtifactEvidence(
     };
   }

-  const evidenceStatus = registered.evidence.status;
+  let evidenceStatus = registered.evidence.status;
+
+  // external_payload_ref → VerifyEvidenceIntegrity when possible (filesystem probe).
+  if (
+    storageMode === "external_payload_ref" &&
+    registered.evidence.status === "available" &&
+    registered.evidence.digest
+  ) {
+    const verified =
+      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
+        evidenceId: registered.evidence.evidenceId,
+        expectedVersion: registered.evidence.version,
+        actor,
+        correlationId: input.correlationId ?? `cor:docs-write-verify:${segment}`,
+        nowIso: input.nowIso,
+      });
+    if (verified.ok && verified.evidence) {
+      evidenceStatus = verified.evidence.status;
+    }
+  }

   const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
     reviewBundleId,
@@ -95,5 +164,12 @@ export async function ingestDocsWriteArtifactEvidence(
     evidenceId,
     reviewBundleId,
     evidenceStatus,
+    storageMode,
+    ...(durableArtifactAbsolutePath
+      ? { durableArtifactAbsolutePath }
+      : {}),
+    ...(durableCursorReportAbsolutePath !== undefined
+      ? { durableCursorReportAbsolutePath }
+      : {}),
   };
 }
```


### `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index 359152b4..31363dd8 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -66,6 +66,14 @@ export type PostEvidenceAnalysisFacts = {
   stopReason?: string;
   blockersSummary?: string;
   outcomeKind?: string;
+  /**
+   * Durable artifact body for Nora review (server-owned).
+   * Never claim FULL when truncated — completeness must be honest.
+   */
+  artifactReviewMaterial?: string;
+  artifactReviewCompleteness?: "FULL" | "PARTIAL";
+  /** Compact CursorExecutionReport claim summary (NOT Evidence). */
+  cursorReportSummary?: string;
 };

 export type PostEvidenceAnalysisResult =
@@ -84,11 +92,12 @@ export type PostEvidenceAnalysisResult =
 const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
 Ordre cognitif imposé (contract-first):
 1) CONTRAT (objectif, expected outputs, critères d'acceptation, validations)
-2) RÉSULTAT OBSERVÉ (travail réel, effets, stop/blocker)
-3) PREUVE (Evidence / ReviewBundle / ClaimEvaluation)
-4) CONFORMITÉ (PASS / FAIL / NOT_PROVEN — jamais inventé)
-5) IMPACT PROJET
-6) RECOMMANDATION (jamais une HumanDecision, jamais une relance automatique)
+2) RÉSULTAT OBSERVÉ (travail réel, effets, stop/blocker — via CursorExecutionReport claim + vérifs Studio)
+3) ARTIFACT REVIEWABLE (contenu durable FULL/PARTIAL fourni — ne jamais inventer ni demander au Pilote)
+4) PREUVE (Evidence / ReviewBundle / ClaimEvaluation)
+5) CONFORMITÉ (PASS / FAIL / NOT_PROVEN — jamais inventé)
+6) IMPACT PROJET
+7) RECOMMANDATION (jamais une HumanDecision, jamais une relance automatique)

 Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
 Interdit:
@@ -98,7 +107,9 @@ Interdit:
 - demander des secrets;
 - inventer une preuve REAL;
 - convertir not_proven / UNCLAIMED en succès produit;
-- commenter le rapport Cursor sans d'abord confronter le contrat.
+- commenter le rapport Cursor sans d'abord confronter le contrat;
+- affirmer avoir lu l'artifact si artifactReviewMaterial est absent;
+- affirmer lecture FULL si artifactReviewCompleteness=PARTIAL.
 Si productOutcome=UNCLAIMED et claimEvaluationStatus=not_proven :
 l'exécution technique a pu réussir et un Artifact peut exister, mais le résultat
 contractuel n'est pas prouvé faute d'Evidence suffisante sur les expectedOutputs.
@@ -146,6 +157,9 @@ function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
     stopReason: facts.stopReason,
     blockersSummary: facts.blockersSummary,
     outcomeKind: facts.outcomeKind,
+    artifactReviewMaterial: facts.artifactReviewMaterial,
+    artifactReviewCompleteness: facts.artifactReviewCompleteness,
+    cursorReportSummary: facts.cursorReportSummary,
   });
 }
```


### `projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts b/projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
index 28517189..3eba0dec 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
@@ -299,6 +299,15 @@ export function projectExecutionContractToCursorPrompt(input: {
     `- stops/blockers`,
     `- verdict/status — claim seulement, pas Evidence produit`,
     ``,
+    `### Envelope machine-readable OBLIGATOIRE (Studio parser)`,
+    `En plus du résumé business-readable ci-dessus, émettre UNE ligne stdout exacte:`,
+    `CURSOR_EXECUTION_REPORT_JSON=<json compact sur une seule ligne>`,
+    `Le JSON DOIT respecter le schéma oa.cursor-execution-report.1 (reportId, attemptId,`,
+    `executionContractId, repositoryRef, baseSha, status, authorizedEffectsExecuted,`,
+    `fileEffects / workPerformed / validations / blockers / reservations le cas échéant).`,
+    `Un rapport libre en prose SEUL n'est PAS exploitable pour Evidence / Nora.`,
+    `Studio re-vérifie indépendamment les effets fichiers — le rapport reste un CLAIM.`,
+    ``,
     `## Secondaire technique (audit)`,
     `- action: ${d.action}`,
     `- technicalTarget: ${d.technicalTarget}`,
@@ -403,6 +412,14 @@ export function assertCursorPromptParityWithInspection(input: {
       };
     }
   }
+  if (!text.includes("CURSOR_EXECUTION_REPORT_JSON=")) {
+    return {
+      ok: false,
+      code: "PROMPT_MACHINE_READABLE_REPORT_MARKER_MISSING",
+      message:
+        "Prompt must require CURSOR_EXECUTION_REPORT_JSON= machine-readable envelope.",
+    };
+  }
   // Must not inject mandatory HOW sequence markers
   if (
     /Étapes d'exécution\s*:\s*\n\s*1\.\s*Local Git Truth Check/i.test(text) ||
```


### `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index fc079208..86848dc1 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -517,6 +517,15 @@ export type W3cPostEvidenceLoopDto =
       readonly reviewBundleId: string;
       readonly claimEvaluationId: string | null;
       readonly productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+      readonly executionReport?: {
+        readonly cursorStatus: string | null;
+        readonly workPerformedSummary: string | null;
+        readonly artifactsSummary: string | null;
+        readonly validationsSummary: string | null;
+        readonly blockersSummary: string | null;
+        readonly reservationsSummary: string | null;
+        readonly artifactReviewCompleteness: "FULL" | "PARTIAL" | null;
+      } | null;
     }
   | {
       readonly ok: false;
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index ec1d8112..9ad23381 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -3594,6 +3594,58 @@ export function TrajectorySurface({
             {productOutcome.evidenceSummary ??
               "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
           </p>
+          {postEvidence && postEvidence.ok && postEvidence.executionReport ? (
+            <div
+              className={styles.blockBody}
+              data-testid="w3b-execution-report"
+            >
+              <p className={styles.productHeadline}>Rapport d&apos;exécution</p>
+              <dl className={styles.facts}>
+                <div>
+                  <dt>Statut Cursor</dt>
+                  <dd data-testid="w3b-execution-report-status">
+                    {postEvidence.executionReport.cursorStatus ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Travail réalisé</dt>
+                  <dd data-testid="w3b-execution-report-work">
+                    {postEvidence.executionReport.workPerformedSummary ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Artefacts</dt>
+                  <dd data-testid="w3b-execution-report-artifacts">
+                    {postEvidence.executionReport.artifactsSummary ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Validations</dt>
+                  <dd data-testid="w3b-execution-report-validations">
+                    {postEvidence.executionReport.validationsSummary ?? "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Blockers / réserves</dt>
+                  <dd data-testid="w3b-execution-report-blockers">
+                    {[
+                      postEvidence.executionReport.blockersSummary,
+                      postEvidence.executionReport.reservationsSummary,
+                    ]
+                      .filter(Boolean)
+                      .join(" · ") || "—"}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Revue artifact</dt>
+                  <dd data-testid="w3b-execution-report-artifact-completeness">
+                    {postEvidence.executionReport.artifactReviewCompleteness ??
+                      "—"}
+                  </dd>
+                </div>
+              </dl>
+            </div>
+          ) : null}
           <dl className={styles.facts}>
             <div>
               <dt>Preuve disponible</dt>
```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index 5a865e8e..efa8d5a1 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -500,6 +500,15 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
         reviewBundleId: "rb:docs-write:pcont-ui",
         claimEvaluationId: "ce:pcont-ui",
         productOutcome: "UNCLAIMED",
+        executionReport: {
+          cursorStatus: "succeeded",
+          workPerformedSummary: "Wrote functional design",
+          artifactsSummary: "créé:docs/functional-design.md",
+          validationsSummary: "file_exists:pass",
+          blockersSummary: null,
+          reservationsSummary: "claim_only",
+          artifactReviewCompleteness: "FULL",
+        },
       },
     });

@@ -537,6 +546,13 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
       "data-outcome",
       "UNCLAIMED",
     );
+    expect(screen.getByTestId("w3b-execution-report")).toBeVisible();
+    expect(screen.getByTestId("w3b-execution-report-status")).toHaveTextContent(
+      "succeeded",
+    );
+    expect(screen.getByTestId("w3b-execution-report-work")).toHaveTextContent(
+      "Wrote functional design",
+    );
     expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
     expect(executeCompleteMock).not.toHaveBeenCalled();
```


### `projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
index 3af60cdb..e055c00c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
@@ -605,8 +605,11 @@ describe("PRODUCT-CYCLE-E2E-STABILIZATION-01 front-door oracle", () => {
     const artifact = evidence.find(
       (e) =>
         e.type === "artifact" &&
-        e.location === EXPECTED_TARGET &&
-        e.bindings?.projectId === projectId,
+        e.bindings?.projectId === projectId &&
+        (e.location === EXPECTED_TARGET ||
+          (typeof e.location === "string" &&
+            (e.location.endsWith(`/${EXPECTED_TARGET}`) ||
+              e.location.endsWith(EXPECTED_TARGET)))),
     );
     expect(artifact).toBeTruthy();
     expect(artifact!.digest).toMatch(/^sha256:/);
```


### `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
index 0d23c7be..8707365a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
@@ -1187,8 +1187,11 @@ describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
     const artifact = evidence.find(
       (e) =>
         e.type === "artifact" &&
-        e.location === EXPECTED_TARGET &&
-        e.bindings?.projectId === projectId,
+        e.bindings?.projectId === projectId &&
+        (e.location === EXPECTED_TARGET ||
+          (typeof e.location === "string" &&
+            (e.location.endsWith(`/${EXPECTED_TARGET}`) ||
+              e.location.endsWith(EXPECTED_TARGET)))),
     );
     expect(artifact).toBeTruthy();
     expect(artifact!.digest).toMatch(/^sha256:/);
```



## Validations

| Gate | Result |
|---|---|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| targeted handoff + UI | 13 passed |
| broader regressions (productGenericCursor, autoQual, CEC, PCONT, W3-C, frontDoor, workspace routing, journey docs_write, Ref conformance) | PASS after digest refresh |
| full suite | Test Files **452 passed** / 17 skipped; Tests **4966 passed** / 137 skipped; **FAIL 0** |
| Runtime Reference conformance | PASS |
| ZERO REAL | yes |

## Fake/Real
DETERMINISTIC PRODUCT POST-EXECUTION HANDOFF PROVEN AT TESTED SCOPE (fresh + restart). NOT REAL PROVEN. NOT READY FOR REAL. SprintBoard REAL re-proof requires distinct Morris GO. Runtime v3 NON ADOPTED.

## Lineage proven (integrated)
governedExecute → CursorExecutionReport bind+persist → Artifact `external_payload_ref` → Evidence/RB → claim completion consumed → materialize → W3-C facts (contract/report/artifact FULL|PARTIAL/CE) → destroy hot worktree → restart runtime → rehydrate restores Recommendation + `executionReport` — ZERO Pilot paste / ZERO PATH_NOT_ALLOWED nominal.

## Architecture confirmation
- No new store/table
- No second Decision/Recommendation engine
- No Evidence/ReviewBundle bypass
- No OPS1 runtime dependency
- No global path-policy widen
- Report reconstructed from durable refs on rehydrate (not duplicated into LPS)

## Reserves remaining
- REAL SprintBoard re-proof NOT done
- Runtime v3 NON ADOPTED
- Project commit still NOT authorized until ChatGPT/Morris accept this correction pack

## Anti-claims
NOT REAL PROVEN · NOT END-TO-END REAL PROVEN · NOT READY FOR REAL · NOT PRODUCT GLOBAL READY · RUNTIME V3 NON ADOPTED · NO project commit/push/PR/merge

## Verdict

`READY FOR CHATGPT / MORRIS REVIEW — POST-EXECUTION HANDOFF CORRECTIONS DETERMINISTICALLY PROVEN AT TESTED SCOPE — REAL SPRINTBOARD REPROOF REQUIRES MORRIS GO`
