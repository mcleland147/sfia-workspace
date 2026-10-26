# SFIA Review Pack — FULL
# AKG-M5 / L3-S2 OPTION B — LOCAL DET DELIVERY PASS 01

## 1. Date et heure

2026-10-26T22:57:13Z (UTC)

## 2. GO Morris

**2026-10-26 — GO OPTION B, ON AVANCE.**

OPTION B ADOPTED as L3-S2 construction perimeter.
Delivery: LOCAL / DETERMINISTIC / BOUNDED.

NOT authorized: project commit/push · PR/merge · protected paths · REAL · OA-exclusive · architecture pivot · L4 · runtime v3 promotion.

## 3. Cycle / profil

- Cycle: **6 — Delivery projet**
- Profil: **CRITICAL**
- Typologie: **EVOL**
- Processus: SFIA v2.6
- Mono-cycle: AKG-M5 / L3-S2 OPTION B — LOCAL DET DELIVERY PASS 01

## 4. Git Truth

| Check | Observed |
|-------|----------|
| Investigation/start WT | feat L3-S1 @ `de1fa7ae` (not used for Delivery) |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity` |
| Branch | `feat/akg-m5-l3-s2-generic-proof-continuity` (created from main) |
| HEAD base | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` (= origin/main) |
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| #622 CI | `40394299727` SUCCESS |
| Qualification handoff tip | `b712c600…` / blob `e5123621…` |
| Project commit/push | **NONE** (local dirty only) |
| Staged | empty |

## 5. Source refs

Qualification handoff: `sfia/review-handoff` @ `b712c6001c9f1c8f5a483cbced341b52f21d85a2`.
Code/tests/PRR/Decision Pack 05/Generic arch read from main tip above.

## 6. Convergence Pre-check

T-C ADOPTED · L3-S1 integrated · L3-S2 Option B construction · L3 GLOBAL OPEN · exclusive DEFAULT OFF · REAL NOT GRANTED · runtime v3 NON ADOPTED · EP10 L3-S1 NON-CLAIM historical preserved.

## 7. R23 — composants / flux / invariants

| Component | Disposition | Proof |
|-----------|-------------|-------|
| Shared FS allowlist module | **COMPLETE** (new) | DET continuation + Lot A tests |
| `resolvePreCommitWorkspaceContinuation` / prior-A resolver | **ADAPT** | location suffix match + shared allowlist |
| `ingestGenericFilesystemMaterializationArtifactEvidence` | **COMPLETE** (new) | DET ingest+verify+supersession |
| `governedExecuteAuthorizedContract` post-success | **ADAPT** | stamp generic materialization after OBSERVED VCS |
| Mission Evidence F3/OA / W2 prepare | **KEEP** | productMissionEvidenceChain E2E PASS (non-regression) |
| chat-first Generic PREPARE + Mission | **FREEZE / residual S8** | cannot stamp without fabricating cycle/mission |
| `projectW3cExecutionReportSurfaceFromDurable` | **COMPLETE** (stub → GERM projection) | Lot C DET |
| docs_write Product admission | **RETIRE** (unchanged) | EP-S2-10 |
| Parallel Evidence engine | **REJECT** | |

**Flux Lot A (cycle-bound mission+local-write path):**
observe VCS → finalize GERM → verification Evidence → **generic_materialization artifact Evidence** → (existing) Mission Evidence → W3-B.

**Digest content ≠ Git commit SHA** — commit Evidence remains separate typed Git path.

## 8. Description des changements

1. **Lot A:** New Evidence source `execution_attempt:generic_materialization`; shared allowlist; ingest+verify; wire after OBSERVED finalize; absolute durable location with logical-path supersession match.
2. **Lot B:** No fabrication of `cycleInstanceId` / `PRODUCT_MISSION_FROM_DURABLE_CONTEXT`. Mission stack kept; residual **S8** for chat-first Generic PREPARE Mission Evidence.
3. **Lot C:** Replaced stub with GERM-based PARTIAL/FULL-mirroring projection; never invents Cursor report when absent.

## 9. Fichiers créés / modifiés

Modified:
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts`

Created:
- `…/fsAnchorArtifactMaterializationEvidenceSources.ts`
- `…/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts`
- `…/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts`

## 10. Diffs utiles + nouveaux fichiers complets

### Diff stat

```
 .../gcecCont01ContinuationResolver.d0.test.ts      |  30 +++++
 .../w2/governedExecuteAuthorizedContract.ts        |  72 +++++++++++
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    | 131 +++++++++++++++++++--
 .../resolvePreCommitWorkspaceContinuation.ts       |  53 ++++-----
 ...erifiedFilesystemMaterializationPriorAttempt.ts |  45 ++++---
 5 files changed, 266 insertions(+), 65 deletions(-)

```

### Unified diff (modified files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 2dae7536..9cf4b5b6 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -1145,6 +1145,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
   function lineageSupersession(input: {
     artifactSource: string;
     artifactAttemptId?: string;
+    artifactLocation?: string;
     extraArtifacts?: Evidence[];
   }) {
     const artifactAttemptId = input.artifactAttemptId ?? "xat:a";
@@ -1170,6 +1171,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
         evidence({
           evidenceId: "ev:a",
           source: input.artifactSource,
+          location: input.artifactLocation ?? PATH,
           bindings: {
             projectId: PROJECT,
             cycleInstanceId: CYCLE,
@@ -1209,6 +1211,34 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     ).toBe(true);
   });

+  it("L3-S2 generic_materialization (+ dotted suffix) supersedes FS anchor", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+        }),
+      ),
+    ).toBe(true);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization.v1",
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("L3-S2 absolute durable generic_materialization location matches logical requiredPath", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}`,
+        }),
+      ),
+    ).toBe(true);
+  });
+
   it("T11 irrelevant Attempt Evidence (wrong source / wrong attempt) → no supersession", () => {
     expect(
       isFsAnchorSupersededByVerifiedLocalCommit(
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 5864cc82..26e3fa73 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -44,6 +44,10 @@ import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/c
 import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
 import { ingestExecutionReviewVerificationEvidence } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
+import {
+  ingestGenericFilesystemMaterializationArtifactEvidence,
+  selectPrimaryGenericMaterializationPath,
+} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
 import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
@@ -1379,6 +1383,74 @@ export async function governedExecuteRecordResult(
               attempt: projectAttempt(attempt, adapterId),
             };
           }
+
+          // L3-S2 Lot A — generic FS materialization Evidence (FS→SHA source).
+          // Fail-closed skip on ambiguous multi-path (no invented primary).
+          // Digest of content ≠ Git commit SHA — commit Evidence stays separate.
+          if (
+            finalized.verificationStatus === "OBSERVED" &&
+            finalized.verifiedChangeSet
+          ) {
+            const observed = finalized.verifiedChangeSet.all
+              .filter((e) => e.status === "created" || e.status === "modified")
+              .map((e) => e.path);
+            const preferred: string[] = [];
+            const targetPath =
+              typeof contract.inputs?.targetPath === "string"
+                ? contract.inputs.targetPath.trim()
+                : "";
+            if (targetPath) preferred.push(targetPath);
+            if (Array.isArray(contract.expectedOutputs)) {
+              for (const o of contract.expectedOutputs) {
+                const s = String(o).trim();
+                if (s && s.includes("/") && !s.includes(":")) preferred.push(s);
+              }
+            }
+            const selected = selectPrimaryGenericMaterializationPath({
+              observedPaths: observed,
+              preferredPaths: preferred,
+            });
+            if (selected.ok) {
+              const entry = finalized.verifiedChangeSet.all.find(
+                (e) => e.path === selected.logicalPath,
+              );
+              const digest = entry?.afterDigest?.trim() ?? "";
+              let bytes: Buffer | null = null;
+              if (entry?.contentAbsolutePath) {
+                try {
+                  if (fs.existsSync(entry.contentAbsolutePath)) {
+                    bytes = fs.readFileSync(entry.contentAbsolutePath);
+                  }
+                } catch {
+                  bytes = null;
+                }
+              }
+              if (bytes && digest.startsWith("sha256:")) {
+                const stamped =
+                  await ingestGenericFilesystemMaterializationArtifactEvidence({
+                    evidenceReviewServices: input.oa.evidenceReviewServices,
+                    projectId: input.projectId,
+                    cycleInstanceId: contract.cycleInstanceId,
+                    executionContractId: contract.executionContractId,
+                    executionAttemptId: attempt.attemptId,
+                    logicalPath: selected.logicalPath,
+                    artifactBytes: bytes,
+                    digest,
+                    refsRoot,
+                  });
+                if (!stamped.ok) {
+                  return {
+                    ok: false,
+                    code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
+                    message: `Attempt succeeded durable — Generic materialization Evidence échoué (${stamped.code}): ${stamped.message}`,
+                    attempt: projectAttempt(attempt, adapterId),
+                  };
+                }
+              }
+              // Missing bytes/digest → honest skip (verification Evidence still holds FACTS).
+            }
+            // AMBIGUOUS / NONE → honest skip (no invented primary path).
+          }
         }

         const built = report
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dd6e6672..8450afc7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -27,7 +27,10 @@ import {
   lastW3cEvidenceIdInLpsContext,
 } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
 import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
-import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
+import {
+  loadGenericExecutionReviewMaterial,
+  readExecutionReviewItemBytes,
+} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import {
   buildCkcCognitivePromptSection,
   loadProductCkcCognitiveContent,
@@ -77,8 +80,9 @@ export type W3cExecutionReportSurface = {

 /**
  * Rebuild business-first execution report from durable server-owned refs
- * (mission-result-refs). Shared by fresh W3-C and rehydrate — never invent
- * a Cursor report when the claim file is absent.
+ * (mission-result-refs / Generic Execution Review Material). Shared by fresh
+ * W3-C and rehydrate — never invent a Cursor report when the claim file is absent.
+ * Completeness mirrors the durable manifest (never upgrades PARTIAL → FULL).
  */
 export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly attemptId: string;
@@ -93,15 +97,120 @@ export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly stopReason: string | undefined;
   readonly cursorReportSummary: string | undefined;
 } {
-  void input;
+  const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
+  const loaded = loadGenericExecutionReviewMaterial({
+    refsRoot,
+    attemptId: input.attemptId,
+  });
+  if (!loaded.ok) {
+    // No durable GERM — honest empty surface (do not invent Cursor report).
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
+
+  const { manifest, cursorReport, verifiedChangeSet } = loaded;
+  const completeness = manifest.completeness;
+
+  let artifactReviewMaterial: string | undefined;
+  const preferred =
+    typeof input.targetPath === "string" && input.targetPath.trim()
+      ? input.targetPath.trim()
+      : null;
+  const itemCandidates = manifest.reviewItems.filter(
+    (i) => i.kind === "artifact" || i.kind === "file",
+  );
+  const preferredItem =
+    (preferred
+      ? itemCandidates.find((i) => i.logicalPath === preferred)
+      : undefined) ?? itemCandidates[0];
+  if (preferredItem?.contentRef) {
+    const bytes = readExecutionReviewItemBytes({
+      refsRoot,
+      contentRef: preferredItem.contentRef,
+      byteCap: 12_000,
+    });
+    if (bytes.ok) {
+      artifactReviewMaterial = bytes.text;
+    }
+  }
+
+  const pathSummary =
+    verifiedChangeSet &&
+    manifest.verifiedEffects.verificationStatus === "OBSERVED"
+      ? verifiedChangeSet.all
+          .map((e) => `${e.status}:${e.path}`)
+          .slice(0, 12)
+          .join("; ")
+      : null;
+
+  const workPerformedSummary =
+    (cursorReport?.workPerformed?.length
+      ? cursorReport.workPerformed.join("; ")
+      : undefined) ||
+    (pathSummary ? `Studio observed: ${pathSummary}` : undefined);
+
+  const blockersSummary =
+    manifest.blockers.length > 0
+      ? manifest.blockers.join(" · ")
+      : cursorReport?.blockers?.length
+        ? cursorReport.blockers.join(" · ")
+        : undefined;
+
+  const reservationsSummary =
+    manifest.reservations.length > 0
+      ? manifest.reservations.join(" · ")
+      : cursorReport?.reservations?.length
+        ? cursorReport.reservations.join(" · ")
+        : null;
+
+  const stopReason =
+    (typeof cursorReport?.stopConditionTriggered === "string" &&
+    cursorReport.stopConditionTriggered.trim()
+      ? cursorReport.stopConditionTriggered.trim()
+      : undefined) || undefined;
+
+  const cursorReportSummary = cursorReport
+    ? [
+        cursorReport.status ? `status=${cursorReport.status}` : null,
+        workPerformedSummary ? `work=${workPerformedSummary.slice(0, 240)}` : null,
+        blockersSummary ? `blockers=${blockersSummary.slice(0, 160)}` : null,
+      ]
+        .filter(Boolean)
+        .join(" · ") || undefined
+    : undefined;
+
+  // CLAIM absent → executionReport null (may still expose PARTIAL material).
+  const executionReport: W3cExecutionReportSurface | null = cursorReport
+    ? {
+        cursorStatus: cursorReport.status ?? null,
+        workPerformedSummary: workPerformedSummary ?? null,
+        artifactsSummary: pathSummary,
+        validationsSummary:
+          cursorReport.validationEffects
+            ?.map((v) => `${v.identity}:${v.result}`)
+            .slice(0, 8)
+            .join("; ") ?? null,
+        blockersSummary: blockersSummary ?? null,
+        reservationsSummary,
+        artifactReviewCompleteness: completeness,
+      }
+    : null;
+
   return {
-    executionReport: null,
-    artifactReviewMaterial: undefined,
-    artifactReviewCompleteness: undefined,
-    workPerformedSummary: undefined,
-    blockersSummary: undefined,
-    stopReason: undefined,
-    cursorReportSummary: undefined,
+    executionReport,
+    artifactReviewMaterial,
+    artifactReviewCompleteness: completeness,
+    workPerformedSummary,
+    blockersSummary,
+    stopReason,
+    cursorReportSummary,
   };
 }

diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index cbe42113..c2a18b59 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -14,6 +14,18 @@ import {
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "./realLaunchSafety";
+import {
+  evidenceLocationMatchesLogicalPath,
+  isAllowlistedArtifactMaterializationSource,
+  logicalPathFromDurableArtifactLocation,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";
+
+export {
+  FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES,
+  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
+  isAllowlistedArtifactMaterializationSource,
+  type FsAnchorArtifactMaterializationEvidenceSource,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";

 const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "filesystem.create",
@@ -28,28 +40,6 @@ const PROTECTED_GIT_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "github.pr.merge",
 ]);

-/**
- * Artifact-materialization Evidence sources that may supersede an FS anchor.
- *
- * HISTORICAL durable reading only — not Product admission of docs_write.
- * Origin/main stamped file artifacts as `execution_attempt:docs_write`
- * (retired `DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE`), including dotted suffixes
- * such as `execution_attempt:docs_write.v2`. That producer is gone.
- *
- * Product generalist materialization does not stamp a replacement
- * `execution_attempt:*` artifact source. `IngestExecutionAttemptEvidence`
- * writes a prose source (`execution attempt <id> (succeeded)`), which is a
- * terminal-attempt label shared with non-artifact rows and is excluded.
- * `execution_attempt:mission_result` and every other non-allowlisted source
- * cannot supersede (false / NOT_PROVEN).
- */
-export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
-  "execution_attempt:docs_write",
-] as const;
-
-export type FsAnchorArtifactMaterializationEvidenceSource =
-  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];
-
 /**
  * HISTORICAL Attempt agent recorded by the retired bounded docs-write executor.
  * Durable reading only — not Product admission of a docs_write launch path.
@@ -67,13 +57,6 @@ function isDurableArtifactMaterializationAttemptAgent(
   );
 }

-function isAllowlistedArtifactMaterializationSource(source: string): boolean {
-  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
-    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
-  }
-  return false;
-}
-
 export type WorkspaceContinuationDescriptor = {
   readonly priorAttemptId: string;
   readonly expectedHeadSha: string;
@@ -218,7 +201,12 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
       return false;
     }
     const loc = String(ev.location ?? "").trim();
-    if (!loc || !requiredPaths.includes(loc)) return false;
+    if (
+      !loc ||
+      !requiredPaths.some((p) => evidenceLocationMatchesLogicalPath(loc, p))
+    ) {
+      return false;
+    }
     const digest = String(ev.digest ?? "").trim().toLowerCase();
     if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
       return false;
@@ -348,10 +336,13 @@ function resolvePriorArtifactMaterializationAttempt(input: {
       };
     }
     const ev = matching[0]!;
+    const artifactPath = logicalPathFromDurableArtifactLocation(
+      String(ev.location ?? ""),
+    );
     candidates.push({
       priorAttemptId: attempt.attemptId,
       evidenceId: ev.evidenceId,
-      artifactPath: String(ev.location).trim(),
+      artifactPath,
       artifactDigest: String(ev.digest).trim().toLowerCase(),
     });
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
index 3705caa3..30740124 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
@@ -4,10 +4,10 @@
  * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
  * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
  *
- * HISTORICAL durable reading: Evidence source `execution_attempt:docs_write`
- * and agent `agt:m4.cursor.bounded_docs_write` remain recognizable. That is not
- * Product admission of a docs_write launch path. Current materialization
- * Attempts use the Studio Cursor generalist agent id.
+ * Allowlist: {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}
+ * (historical docs_write + CURRENT generic_materialization). Not Product
+ * admission of docs_write. Current materialization Attempts use the Studio
+ * Cursor generalist agent id.
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
@@ -17,15 +17,12 @@ import {
   expectedEvidenceIdentity,
 } from "./qualifyExecutionContractCompletion";
 import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "./realLaunchSafety";
-
-/**
- * HISTORICAL durable Evidence source allowlist — not Product admission of
- * docs_write. Must stay aligned with
- * {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}.
- */
-const FS_MATERIALIZATION_EVIDENCE_SOURCES = [
-  "execution_attempt:docs_write",
-] as const;
+import {
+  evidenceLocationMatchesLogicalPath,
+  isAllowlistedArtifactMaterializationSource,
+  logicalPathFromDurableArtifactLocation,
+  resolveLogicalPathFromEvidenceLocation,
+} from "./fsAnchorArtifactMaterializationEvidenceSources";

 /** Historical Attempt agent — durable Evidence reading only. */
 const HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID =
@@ -93,13 +90,6 @@ function expectedArtifactPaths(
   return [...paths];
 }

-function isAllowlistedFsMaterializationSource(source: string): boolean {
-  for (const allowed of FS_MATERIALIZATION_EVIDENCE_SOURCES) {
-    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
-  }
-  return false;
-}
-
 function isDurableFsMaterializationAttemptAgent(
   selectedAgentRef: string | undefined,
 ): boolean {
@@ -123,12 +113,17 @@ function isEligibleArtifact(
   if (ev.type !== "artifact") return false;
   if (!evidenceMatchesContractLineage(ev, expected)) return false;
   if (ev.bindings.executionAttemptId !== attemptId) return false;
-  if (!isAllowlistedFsMaterializationSource(String(ev.source ?? ""))) {
+  if (!isAllowlistedArtifactMaterializationSource(String(ev.source ?? ""))) {
     return false;
   }
   const loc = String(ev.location ?? "").trim();
   if (!loc) return false;
-  if (allowedPaths.length > 0 && !allowedPaths.includes(loc)) return false;
+  if (
+    allowedPaths.length > 0 &&
+    !allowedPaths.some((p) => evidenceLocationMatchesLogicalPath(loc, p))
+  ) {
+    return false;
+  }
   const digest = String(ev.digest ?? "").trim().toLowerCase();
   if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
     return false;
@@ -176,10 +171,14 @@ export function resolveVerifiedFilesystemMaterializationPriorAttempt(
       };
     }
     const ev = matching[0]!;
+    const rawLoc = String(ev.location).trim();
+    const logical =
+      resolveLogicalPathFromEvidenceLocation(rawLoc, allowedPaths) ??
+      logicalPathFromDurableArtifactLocation(rawLoc);
     candidates.push({
       priorAttemptId: attempt.attemptId,
       evidenceId: ev.evidenceId,
-      artifactPath: String(ev.location).trim(),
+      artifactPath: logical,
       artifactDigest: String(ev.digest).trim().toLowerCase(),
     });
   }

```

### NEW `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts`

```typescript
/**
 * Artifact-materialization Evidence sources that may supersede an FS anchor
 * (FS→SHA continuation). Shared by pre-commit and progressive Attempt-A resolvers.
 *
 * - `execution_attempt:docs_write` (+ dotted suffixes): HISTORICAL durable reading
 *   only — not Product admission of docs_write (#618 retired admission).
 * - `execution_attempt:generic_materialization` (+ dotted suffixes): CURRENT
 *   Product generalist materialization Evidence source (L3-S2 Option B).
 *
 * `IngestExecutionAttemptEvidence` prose sources and `execution_attempt:mission_result`
 * cannot supersede.
 */
export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
  "execution_attempt:docs_write",
  "execution_attempt:generic_materialization",
] as const;

export type FsAnchorArtifactMaterializationEvidenceSource =
  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];

/** Canonical Product source stamp for generic Studio-observed file materialization. */
export const GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE =
  "execution_attempt:generic_materialization" as const;

export function isAllowlistedArtifactMaterializationSource(
  source: string,
): boolean {
  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
  }
  return false;
}

/**
 * Supersession / prior-A matching: Evidence.location may be the logical repo path
 * (metadata_only / tests) or an absolute durable external_payload_ref path ending
 * with that logical path (Product verify probe).
 */
export function evidenceLocationMatchesLogicalPath(
  location: string,
  logicalPath: string,
): boolean {
  const loc = location.replace(/\\/g, "/").trim();
  const req = logicalPath.replace(/\\/g, "/").trim();
  if (!loc || !req) return false;
  if (loc === req) return true;
  return loc.endsWith(`/${req}`) || loc.endsWith(req);
}

export function resolveLogicalPathFromEvidenceLocation(
  location: string,
  candidateLogicalPaths: readonly string[],
): string | null {
  const loc = location.replace(/\\/g, "/").trim();
  if (!loc) return null;
  for (const candidate of candidateLogicalPaths) {
    if (evidenceLocationMatchesLogicalPath(loc, candidate)) {
      return candidate.replace(/\\/g, "/").trim();
    }
  }
  return null;
}

/** Map durable absolute refs → logical repo path; leave logical locations unchanged. */
export function logicalPathFromDurableArtifactLocation(location: string): string {
  const loc = location.replace(/\\/g, "/").trim();
  const markers = [
    "/generic-materialization/",
    "/docs-write-artifact/",
  ] as const;
  for (const marker of markers) {
    const idx = loc.indexOf(marker);
    if (idx >= 0) {
      return loc.slice(idx + marker.length);
    }
  }
  return loc;
}

```

### NEW `projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts`

```typescript
/**
 * L3-S2 Option B — stamp VERIFIED artifact Evidence for Studio-observed
 * filesystem materialization (generic Product path).
 *
 * Replaces the retired docs_write Evidence producer for FS→SHA supersession
 * without re-admitting Product docs_write. Does NOT create a ReviewBundle —
 * W3-B materialize owns frozen RB / CE.
 *
 * Evidence.location is the absolute durable payload path (integrity probe).
 * Logical repo path is recoverable via `/generic-materialization/<logicalPath>`
 * for FS-anchor matching (see fsAnchorArtifactMaterializationEvidenceSources).
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE } from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";

export const GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT =
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE;

export function genericMaterializationEvidenceIdForAttempt(
  attemptId: string,
): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `ev:generic-materialization:${segment}`.slice(0, 128);
}

export function genericMaterializationRelativeArtifactPath(input: {
  readonly attemptId: string;
  readonly logicalPath: string;
}): string {
  const segment = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const logical = input.logicalPath.replace(/\\/g, "/").replace(/^\/+/, "");
  return path.posix.join(
    "refs",
    "attempts",
    segment,
    "generic-materialization",
    logical,
  );
}

export type IngestGenericFilesystemMaterializationArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  /** Repo-relative logical path (e.g. docs/note.md). */
  logicalPath: string;
  /** Independently observed file bytes (Studio worktree / review item). */
  artifactBytes: Buffer;
  /** Expected digest `sha256:…` — must match independent hash of bytes. */
  digest: string;
  refsRoot: string;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestGenericFilesystemMaterializationArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      evidenceStatus: string;
      logicalPath: string;
      location: string;
      digest: string;
      storageMode: "external_payload_ref";
    }
  | { ok: false; code: string; message: string };

export async function ingestGenericFilesystemMaterializationArtifactEvidence(
  input: IngestGenericFilesystemMaterializationArtifactEvidenceInput,
): Promise<IngestGenericFilesystemMaterializationArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const logicalPath = input.logicalPath.replace(/\\/g, "/").replace(/^\/+/, "").trim();
  if (!logicalPath || logicalPath.includes("..")) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_PATH_INVALID",
      message: "logicalPath must be a non-empty relative path without ..",
    };
  }

  const observedDigest: Digest = `sha256:${createHash("sha256")
    .update(input.artifactBytes)
    .digest("hex")}`;
  const expected = String(input.digest ?? "").trim().toLowerCase();
  if (observedDigest !== expected) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_DIGEST_MISMATCH",
      message: `Independent byte digest ${observedDigest} !== claimed ${expected}`,
    };
  }

  const relative = genericMaterializationRelativeArtifactPath({
    attemptId: input.executionAttemptId,
    logicalPath,
  });
  const absolutePath = path.join(input.refsRoot, relative);
  try {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, input.artifactBytes);
  } catch (err) {
    return {
      ok: false,
      code: "GENERIC_MATERIALIZATION_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }

  const evidenceId = genericMaterializationEvidenceIdForAttempt(
    input.executionAttemptId,
  );

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest: observedDigest,
    location: absolutePath,
    source: GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
    sourceKind: "external",
    classification: "internal",
    storageMode: "external_payload_ref",
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId:
      input.correlationId ?? `cor:generic-materialization:${evidenceId}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:generic-materialization:${evidenceId}`,
  });
  if (!registered.ok || !registered.evidence) {
    return {
      ok: false,
      code: registered.ok
        ? "GENERIC_MATERIALIZATION_EVIDENCE_MISSING"
        : registered.error.detailCode,
      message: registered.ok
        ? "registerEvidence returned no evidence."
        : registered.error.message,
    };
  }

  let evidenceStatus = registered.evidence.status;
  if (registered.evidence.status === "available" && registered.evidence.digest) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: registered.evidence.evidenceId,
        expectedVersion: registered.evidence.version,
        actor,
        correlationId:
          input.correlationId ??
          `cor:generic-materialization-verify:${evidenceId}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidenceStatus = verified.evidence.status;
    }
  }

  return {
    ok: true,
    evidenceId,
    evidenceStatus,
    logicalPath,
    location: absolutePath,
    digest: observedDigest,
    storageMode: "external_payload_ref",
  };
}

/**
 * Pick exactly one primary materialization path from VerifiedChangeSet entries.
 * Fail-closed on ambiguity (multi-file without single targetPath intersection).
 */
export function selectPrimaryGenericMaterializationPath(input: {
  readonly observedPaths: readonly string[];
  readonly preferredPaths?: readonly string[];
}):
  | { ok: true; logicalPath: string }
  | { ok: false; code: "NONE" | "AMBIGUOUS"; message: string } {
  const observed = [
    ...new Set(
      input.observedPaths
        .map((p) => p.replace(/\\/g, "/").replace(/^\/+/, "").trim())
        .filter(Boolean),
    ),
  ];
  if (observed.length === 0) {
    return {
      ok: false,
      code: "NONE",
      message: "No observed create/modify paths for generic materialization.",
    };
  }
  const preferred = (input.preferredPaths ?? [])
    .map((p) => p.replace(/\\/g, "/").replace(/^\/+/, "").trim())
    .filter(Boolean);
  const hit = preferred.filter((p) => observed.includes(p));
  if (hit.length === 1) {
    return { ok: true, logicalPath: hit[0]! };
  }
  if (hit.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS",
      message: `Multiple preferred observed paths: ${hit.join(",")}`,
    };
  }
  if (observed.length === 1) {
    return { ok: true, logicalPath: observed[0]! };
  }
  return {
    ok: false,
    code: "AMBIGUOUS",
    message: `Multiple observed paths without unique preferred: ${observed.join(",")}`,
  };
}

```

### NEW `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts`

```typescript
/**
 * AKG-M5 L3-S2 Option B — Lot A (generic FS materialization) + Lot C (report surface)
 * DET proofs at tested scope.
 *
 * NON-CLAIMS:
 * - chat-first Generic PREPARE null-cycle Mission Evidence (S8 residual)
 * - FS→Git→Review COMPLETE E2E
 * - REAL Cursor / OpenAI LIVE / F19 COMPLETE
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ingestGenericFilesystemMaterializationArtifactEvidence,
  selectPrimaryGenericMaterializationPath,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
import { persistGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { isFsAnchorSupersededByVerifiedLocalCommit } from "@/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation";
import { GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE } from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import { M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID } from "@/lib/oa/execution-attempt/domain/realLaunchSafety";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const tmpRoots: string[] = [];

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
});

afterEach(() => {
  cleanupW2TempDirs();
  for (const root of tmpRoots.splice(0)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

describe("AKG-M5 L3-S2 Option B — Lot A path selection", () => {
  it("EP-S2-04 selectPrimary prefers unique preferred path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/a.md", "docs/b.md"],
        preferredPaths: ["docs/b.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/b.md" });
  });

  it("EP-S2-09 ambiguous multi-path without preferred → fail-closed", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: [],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("EP-S2-10 source token is generic_materialization (not docs_write)", () => {
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE).toBe(
      "execution_attempt:generic_materialization",
    );
    expect(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE.includes("docs_write")).toBe(
      false,
    );
  });
});

describe("AKG-M5 L3-S2 Option B — Lot C durable report surface", () => {
  it("EP-S2-08 projects PARTIAL surface from GERM without inventing Cursor report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-germ-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-surface";
    const report = {
      schemaVersion: "oa.cursor-execution-report.1" as const,
      reportId: "rpt:l3s2",
      attemptId,
      executionContractId: "xct:l3s2",
      repositoryRef: "repo:test",
      baseSha: "abc123",
      status: "succeeded" as const,
      workPerformed: ["edited docs/note.md"],
      authorizedEffectsExecuted: ["filesystem.modify" as const],
      blockers: ["example-blocker"],
      reservations: ["example-reservation"],
    };
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: report,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: "# note\n",
          summary: "sha256:deadbeef",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["VERIFICATION_UNAVAILABLE — worktree observation not performed"],
      reservations: ["Studio VerifiedChangeSet not available — FACTS incomplete"],
    });
    expect(persisted.ok).toBe(true);

    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).not.toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("VERIFICATION_UNAVAILABLE");
    expect(surface.artifactReviewMaterial).toContain("# note");
  });

  it("EP-S2-08 missing GERM → null report (no invented Cursor claim)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-empty-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
  });
});

describe("AKG-M5 L3-S2 Option B — Lot A ingest + FS→SHA supersession", () => {
  it("EP-S2-03/04 stamps verified generic_materialization Evidence for supersession", async () => {
    const db = tempProductDbPath("l3s2-mat.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "l3s2m",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "mat" });
    const oa = runtime.oa!;
    expect(oa.evidenceReviewServices).toBeTruthy();
    const refsRoot = path.join(path.dirname(db), "mission-result-refs");
    fs.mkdirSync(refsRoot, { recursive: true });

    const bytes = Buffer.from("# hello\n", "utf8");
    const digest = `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
    const stamped = await ingestGenericFilesystemMaterializationArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: "xct:l3s2-mat",
      executionAttemptId: "xat:a",
      logicalPath: "docs/note.md",
      artifactBytes: bytes,
      digest,
      refsRoot,
    });
    expect(stamped.ok).toBe(true);
    if (!stamped.ok) return;
    expect(stamped.evidenceStatus).toBe("verified");

    const loaded = await oa.evidenceReviewServices!.evidenceReader.findById(
      stamped.evidenceId,
    );
    expect(loaded).toBeTruthy();
    expect(loaded!.source).toBe(GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE);
    expect(loaded!.status).toBe("verified");
    expect(loaded!.type).toBe("artifact");

    const now = "2026-10-26T00:00:00.000Z";
    const attempts: ExecutionAttempt[] = [
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:a",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:a",
        correlationId: "cor:a",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:a",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:a",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:a",
        },
      },
      {
        schemaVersion: "0.2.0-oa",
        attemptId: "xat:b",
        executionContractId: "xct:l3s2-mat",
        executionContractVersion: 1,
        selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        status: "succeeded",
        idempotencyKey: "idem:b",
        correlationId: "cor:b",
        version: 1,
        createdAt: now,
        launchedAt: now,
        startedAt: now,
        completedAt: now,
        resultRef: "res:b",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:b",
          actor: { actorId: "actor:test", role: "system" },
          source: "system",
          timestamp: now,
          correlationId: "cor:b",
        },
      },
    ];
    const commitEv = {
      ...loaded!,
      evidenceId: "ev:commit",
      type: "other" as const,
      source: "git:local_commit",
      location: `git:local_commit?repo=${encodeURIComponent("repo:test")}&commitSha=deadbeef&parentSha=base001&path=${encodeURIComponent("docs/note.md")}`,
      bindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        executionAttemptId: "xat:b",
      },
    } as Evidence;

    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: "xct:l3s2-mat",
        priorAttemptId: "xat:a",
        expectedParentSha: "base001",
        repositoryRef: "repo:test",
        requiredPaths: ["docs/note.md"],
        attempts,
        evidence: [loaded!, commitEv],
      }),
    ).toBe(true);
  });
});

```


## 11. Gaps A/B/C

| Gap | Status this Pass |
|-----|------------------|
| A FS→SHA generic source | **CLOSED at DET tested scope** (allowlist+ingest+supersession); full E2E FS→Git→Review still OPEN |
| B Mission Evidence wiring | **KEEP** on W2 cycle-bound path; **S8 residual** for chat-first Generic PREPARE |
| C Post-Evidence surface | **CLOSED minimal** (GERM projection); F19 COMPLETE still OPEN |

## 12. EP-S2-01…12

| EP | Result | Evidence |
|----|--------|----------|
| EP-S2-01 Mission/EC/Project/Attempt link | **PASS** (existing W2 mission path non-reg) / **NOT PROVEN** on chat-first PREPARE | productMissionEvidenceChain |
| EP-S2-02 SHE preserved | **PASS** (L3-S1 non-reg) | akgM5L3S1 |
| EP-S2-03 Studio FS verify ≠ CLAIM | **PASS** DET | Lot A ingest uses observed bytes/digest |
| EP-S2-04 Generic Evidence filiation | **PASS** DET at tested scope | ingest+supersession tests |
| EP-S2-05 Mission Evidence | **PASS** existing path / **PARTIAL** Option B chat-first | S8 residual |
| EP-S2-06 RB/CE | **PASS** existing (mission E2E + L3-S1) | no semantic change to evaluate |
| EP-S2-07 Honest PASS | **PASS** | no artificial PASS introduced |
| EP-S2-08 Minimal continuity surface | **PASS** DET PARTIAL projection | Lot C tests |
| EP-S2-09 Fail-closed ambiguity | **PASS** | selectPrimary AMBIGUOUS |
| EP-S2-10 No docs_write re-admission | **PASS** | new source only |
| EP-S2-11 L3-S1 / SHE non-reg | **PASS** | 7/7 L3-S1 |
| EP-S2-12 Fake/Real honesty | **PASS** | DET only; TestOnly; no REAL claims |

## 13. Tests et validations

Commands (cwd `projects/sfia-studio/app`):

```
npm run typecheck   → PASS
npm run lint        → PASS (pre-existing unused-var warnings unrelated)
npm test -- gcecCont01ContinuationResolver.d0.test.ts akgM5L3S2.optionB.lotsAC.d0.test.ts akgM5L3S1.genericExecutionIntegrated.d0.test.ts
  → 45/45 PASS
npm test -- productMissionEvidenceChain.e2e.d0.test.ts
  → 7/7 PASS
```

Environment: local Node / Vitest 3.2.7 / Fake conversation provider / TestOnly Cursor launch port.

## 14. Fake / Real Matrix

| Boundary | This Pass |
|----------|-----------|
| Cursor | Fake / TestOnly — not REAL |
| FS | Isolated tmp + observed bytes in DET |
| Git commit Evidence | Synthetic typed location in supersession unit (≠ remote Git mutation) |
| Nora | Not LIVE; surface projection only |
| Level | **DETERMINISTIC INTEGRATED AT TESTED SCOPE** (Lots A/C + retained Mission path) |

G-REAL NOT GRANTED. REAL-shaped ≠ REAL.

## 15. R24 — documentary impact (NOT applied — protected)

UPDATE REQUIRED for future DOC GI (not this cycle):

| Section | Change needed |
|---------|---------------|
| PRR 02/03/09 FS→SHA | Document `execution_attempt:generic_materialization` as CURRENT generic materialization source; docs_write remains historical allowlist only |
| PRR 03 F13 / post-execution report | Stub → AS-IMPLEMENTED GERM projection (PARTIAL honesty) |
| PRR 08 test map | Add L3-S2 Lot A/C DET oracles |
| Roadmap CURRENT tip | After GI: L3-S2 Option B local DET candidate facts (no L3 COMPLETE) |
| Generic arch LOCAL CANDIDATE lag | Separate DOC GI (#620 already merged Decision Pack) |

**Gate:** R24 SYNC PENDING before READY FOR GIT INTEGRATION.

## 16. Dette / owner / exit

| Debt | Owner | Exit |
|------|-------|------|
| S8 chat-first PREPARE Mission Evidence | Morris decision | Policy: require cycle before Mission CE / project-scoped bindings / out-of-scope |
| Full FS→Git→Review E2E | Later Delivery | Commit Attempt + Review after materialization |
| F19 COMPLETE | L4 / later | Restart/rehydrate surface DET |
| Deep Nora tools | L4 | D-ER-09 |
| PRR/Roadmap sync | DOC GI GO | R24 |

## 17. Risques / réserves

- Option B **not fully closed** on chat-first Generic PREPARE Mission path (S8).
- Generic materialization stamp runs only inside existing mission+cycle post-success gate (same as verification/mission) — S8 null-cycle Generic PREPARE still skips.
- Absolute Evidence.location + logical-path suffix matching — intentional; digest prove via filesystem probe.
- No single new integrated Generic PREPARE→…→Nora E2E oracle spanning all gaps (would require S8 or dishonest stamps).

## 18. Gates restants

1. ChatGPT Critical Local Delivery Review
2. Morris: S8 Mission Context decision (if chat-first Mission required)
3. R24 / PRR sync DOC GI
4. Distinct project Git Integration GO
5. REAL / G-REAL / L4 — NOT this track

## 19. Git Review Index

| Ref | Value |
|-----|-------|
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Delivery branch (local only) | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| Project commits | **0** |
| Qualification handoff | `b712c600…` / `e5123621…` |
| This cycle handoff | `9d313bac69f9ce001da0d9dde4b981ff5732360b` / blob `def6d044977f7ffc1c9a7b0422cef5d5cea16856` |

## 20. Verdict

**LOCAL DET DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW — R24 SYNC PENDING**

Handoff Git **REMOTE VERIFIED**: `9d313bac…` / `def6d044…`.

with explicit residual:

**S8 MISSION CONTEXT DECISION REQUIRED** for chat-first Generic PREPARE → Mission Evidence (not fabricated this cycle).

Lot A (generic FS Evidence) + Lot C (minimal report surface) delivered DET.
Lot B Mission stack preserved on W2 cycle-bound path; not dishonestly widened to S8 null-cycle PREPARE.

### NON-GO

No project commit/push/PR/merge · No REAL · No L4 · No runtime v3 · No protected-path edits.

---

END OF REVIEW PACK — L3-S2 Option B Local DET Delivery Pass 01
