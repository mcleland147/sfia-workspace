# SFIA Review Pack FULL — AKG-M5 / L3-S2 TECHNICAL CLOSURE PASS 03

## 1. Date / heure

- **Wall clock (UTC):** 2026-10-27T06:44:50Z
- **Cycle:** AKG-M5 / L3-S2 TECHNICAL CLOSURE PASS 03 (R-S2-04 + R-S2-05)

## 2. GO Morris exact et limites

**GO Morris:** 2026-10-27 — GO TECHNICAL CLOSURE R-S2-04/05.

**Autorisé:** Product ADAPT for R-S2-04; negative tests; EP matrix restoration in Review Pack (R-S2-05); DET validations; L3 handoff publish.

**Non autorisé:** S8 arbitration; Mission Evidence expansion; new architecture/persistence; new Option B feature; L4 / Nora Deep Review; REAL / OpenAI LIVE; OA-exclusive; PRR/Roadmap edits; project commit/push/PR/merge; v3 promotion.

## 3. Cycle 8 / CRITICAL / EVOL

| Field | Value |
|-------|-------|
| Project | SFIA Studio |
| Chantier | AKG-M5 — Product Transformation |
| Capacity | V3-F05 — Generic Execution |
| Milestone | L3-S2 — Option B closing lot |
| Trajectory | T-C ADOPTED |
| Cycle type | 8 — Delivery / implémentation |
| Profile | CRITICAL |
| Typologie | EVOL / CORRECTION |
| Process | SFIA v2.6 ChatGPT ↔ Cursor |
| CKC | Candidate guidance only |
| Review | FULL + Review Handoff REQUIRED |

## 4. Git Truth — initial / final

### Repository

- Remote: `https://github.com/mcleland147/sfia-workspace.git`
- Worktree: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`
- Branch: `feat/akg-m5-l3-s2-generic-proof-continuity`
- HEAD: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` (= origin/main; no project commits this cycle)
- Prior handoff tip (pre-publish): `b5935c8f46cfc411aa07c7ef0753281a0222a933`
- Prior handoff blob: `6d151073d014aff5bfe743957dbda2a958bedbc3`

### Working tree (expected dirty — Option B + CORR + R-S2-04)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts
```

No reset/stash/clean. No second worktree. No project Git mutation.

## 5. Sources exactes / Git refs

### Process / method (READ)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/2026-06-27-sfia-decision-engine.md`

### Convergence / Product (READ)

- Build Doctrine, Roadmap (RO), product-completion cadrage
- `05-m5-target-journey-and-trajectory-requalification.md`
- `sfia-studio-generic-execution-review-result-architecture.md`
- Doctrine v3 framing 33/34/35 (NON ADOPTED runtime)
- PRR README + volumes 02/03/07/08/09 (RO; R24 SYNC PENDING)

### Handoffs

| Role | Commit | Blob |
|------|--------|------|
| Qualification L3-S2 (EP originals §18) | `b712c600` | `e5123621…` (historical) |
| Delivery Option B Pass 01 | `cd09b2c6` | — |
| CORR-S2-01 | `2f26618b` | — |
| Consolidated Correction Pass 02 | `b5935c8f` | `6d151073` |
| This cycle | (publish) | (verify) |

Primary truth: local Product + DET tests.

## 6. Convergence Pre-check

| Item | Status |
|------|--------|
| T-C | ADOPTED |
| L3-S1 | INTEGRATED ON MAIN — DET |
| L3-S2 | OPTION B ADOPTED — Local Delivery candidate |
| CORR-S2-01 | ACCEPTED LOCAL DET — KEEP |
| CORR-S2-02 | ACCEPTED LOCAL DET at tested scope — KEEP |
| CORR-S2-03 | Truncation accepted — KEEP; missing-content closed by R-S2-04 |
| R-S2-04 | THIS CYCLE — ADAPT projection |
| R-S2-05 | THIS CYCLE — EP matrix restored in pack (no Product code) |
| S8 | DECISION REQUIRED |
| L3 GLOBAL | OPEN |
| L2 | PARTIAL / exclusive DEFAULT OFF |
| R24 | SYNC PENDING |
| G-REAL | NOT GRANTED |
| Runtime v3 | NON ADOPTED |

## 7. R23 — composants / invariants

| Asset | Class | Notes |
|-------|-------|-------|
| `projectW3cExecutionReportSurfaceFromDurable` | **ADAPT** | R-S2-04 |
| `readExecutionReviewItemBytes` / GERM persist | **KEEP** | Reader unchanged; try/catch guard at consumer |
| CORR-S2-01 matcher | **KEEP** | |
| CORR-S2-02 selector | **KEEP** | |
| Mission Evidence | **FREEZE** | hors scope |
| RB/CE | **KEEP** | |
| L4 / Nora Deep | N/A | |

### Invariants

1. Never PARTIAL→FULL.
2. Truncation of presented bytes ⇒ PARTIAL (CORR-S2-03).
3. Expected `contentRef` unreadable ⇒ PARTIAL + honest unavailability note (R-S2-04).
4. No contentRef required ⇒ do not invent artifact gap from missing material.
5. Never invent Cursor CLAIM / material.
6. Fresh projection and rehydrate share the same durable facts / function.
7. No fabricated cycleInstanceId / Mission Evidence for S8.

**R22:** N/A — no new cognitive need / provider change.

## 8. R-S2-04 — avant / après

### Avant (post CORR-S2-03)

Truncation ⇒ PARTIAL. But on `bytes.ok === false` (MISSING / REF_DENIED / throw):
comment kept manifest completeness → possible **FULL** with `artifactReviewMaterial=undefined`.

### Après

When selected item has `contentRef`:
- ok + FULL bytes ⇒ keep/manifest FULL if justified;
- ok + PARTIAL bytes ⇒ PARTIAL;
- !ok ⇒ **PARTIAL**, no invented material, append
  `Review item content unavailable (<code>)` to blockers/reservations surfaces;
- try/catch around reader → `EXECUTION_REVIEW_ITEM_READ_THREW` treated as unreadable.

`artifactReviewCompleteness` and `executionReport.artifactReviewCompleteness` stay aligned.

No new status model, no GERM schema change, no F19 rebuild.

## 9. Diffs utiles vs origin/main

### Diff — w3cPostEvidenceLoop.ts (Lot C + CORR-S2-03 + R-S2-04)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dd6e6672..9c18acd8 100644
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
@@ -77,8 +80,14 @@ export type W3cExecutionReportSurface = {

 /**
  * Rebuild business-first execution report from durable server-owned refs
- * (mission-result-refs). Shared by fresh W3-C and rehydrate — never invent
- * a Cursor report when the claim file is absent.
+ * (mission-result-refs / Generic Execution Review Material). Shared by fresh
+ * W3-C and rehydrate — never invent a Cursor report when the claim file is absent.
+ *
+ * Completeness honesty (CORR-S2-03 / R-S2-04):
+ * - never upgrade PARTIAL → FULL;
+ * - truncation of presented bytes ⇒ PARTIAL;
+ * - expected contentRef present but unreadable ⇒ PARTIAL (never FULL of missing content);
+ * - no contentRef required ⇒ keep manifest completeness (do not invent an artifact gap).
  */
 export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly attemptId: string;
@@ -93,15 +102,154 @@ export function projectW3cExecutionReportSurfaceFromDurable(input: {
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
+  // Start from durable manifest; never promote PARTIAL → FULL.
+  let completeness: "FULL" | "PARTIAL" =
+    manifest.completeness === "FULL" ? "FULL" : "PARTIAL";
+
+  let artifactReviewMaterial: string | undefined;
+  let contentUnavailableNote: string | undefined;
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
+    // Expected durable bytes — presentation completeness must reflect actual read.
+    let bytes: ReturnType<typeof readExecutionReviewItemBytes>;
+    try {
+      bytes = readExecutionReviewItemBytes({
+        refsRoot,
+        contentRef: preferredItem.contentRef,
+        byteCap: 12_000,
+      });
+    } catch (err) {
+      // Minimal guard: normal unavailability must not throw through the surface.
+      bytes = {
+        ok: false,
+        code: "EXECUTION_REVIEW_ITEM_READ_THREW",
+        message: err instanceof Error ? err.message : String(err),
+      };
+    }
+    if (bytes.ok) {
+      artifactReviewMaterial = bytes.text;
+      if (bytes.completeness === "PARTIAL") {
+        completeness = "PARTIAL";
+      }
+    } else {
+      // R-S2-04 — contentRef expected but unreadable: never claim FULL of presented content.
+      completeness = "PARTIAL";
+      contentUnavailableNote = `Review item content unavailable (${bytes.code})`;
+      // Do not invent material or Cursor CLAIM.
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
+  const baseBlockersSummary =
+    manifest.blockers.length > 0
+      ? manifest.blockers.join(" · ")
+      : cursorReport?.blockers?.length
+        ? cursorReport.blockers.join(" · ")
+        : undefined;
+
+  const blockersSummary = contentUnavailableNote
+    ? baseBlockersSummary
+      ? `${baseBlockersSummary} · ${contentUnavailableNote}`
+      : contentUnavailableNote
+    : baseBlockersSummary;
+
+  const baseReservationsSummary =
+    manifest.reservations.length > 0
+      ? manifest.reservations.join(" · ")
+      : cursorReport?.reservations?.length
+        ? cursorReport.reservations.join(" · ")
+        : null;
+
+  const reservationsSummary = contentUnavailableNote
+    ? baseReservationsSummary
+      ? `${baseReservationsSummary} · ${contentUnavailableNote}`
+      : contentUnavailableNote
+    : baseReservationsSummary;
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

```

### Diff — governedExecuteAuthorizedContract.ts

```diff
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
```

### Diff — resolvePreCommitWorkspaceContinuation.ts

```diff
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
```

### Diff — resolveVerifiedFilesystemMaterializationPriorAttempt.ts

```diff
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

### Diff — gcecCont01ContinuationResolver.d0.test.ts

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 2dae7536..e485e3a3 100644
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
@@ -1209,6 +1211,64 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
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
+  it("CORR-S2-01 prefix collision xdocs/… must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
+  it("CORR-S2-01 autres… prefix and .bak suffix must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/autres${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}.bak`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
   it("T11 irrelevant Attempt Evidence (wrong source / wrong attempt) → no supersession", () => {
     expect(
       isFsAnchorSupersededByVerifiedLocalCommit(
```

## 10. Tests négatifs lecture manquante (R-S2-04)

Suite: `akgM5L3S2.optionB.lotsAC.d0.test.ts` describe `R-S2-04`.

| ID | Assertion | Result |
|----|-----------|--------|
| T1 | FULL + short complete → FULL | PASS |
| T2 | FULL + >12k → PARTIAL | PASS |
| T3 | PARTIAL + short → PARTIAL | PASS |
| T4 | FULL + contentRef + deleted file → PARTIAL + MISSING note; never FULL | PASS |
| T5 | FULL + invalid contentRef (`../evil`) → PARTIAL + REF_DENIED | PASS |
| T6 | GERM absent → null report | PASS |
| T7 | CLAIM absent → executionReport null | PASS |
| T8 | blockers/reservations/workPerformed preserved | PASS |
| T9 | fresh == re-read equal durable facts | PASS |
| T10 | projection pure (no durable mutation) | PASS |

## 11. R-S2-05 — matrice EP originale restaurée

Source historique: handoff Qualification `b712c600` §18 (verbatim sense restored — not redefined to match available tests).

### Original definitions (Qualification §18)


```
## 18. Exit proofs candidats (EP-L3S2)

| ID | Candidate statement | Notes |
|----|---------------------|-------|
| EP-S2-01 | Mission/EC linked to Project/Attempt | Wire + assert |
| EP-S2-02 | SHE reused; no gratuitous second human gesture | Non-regression L3-S1 |
| EP-S2-03 | FS effects Studio-verified ≠ Cursor CLAIM | VCS observe |
| EP-S2-04 | Generic Evidence source with verifiable path→digest lineage (semantic as proven) | Gap A core |
| EP-S2-05 | Mission Evidence ingested & bound | Gap B |
| EP-S2-06 | RB/CE consume admissible proofs | materialize + evaluate |
| EP-S2-07 | Product Result honest (PASS only if proven; else NOT_PROVEN/UNCLAIMED) | KEEP honesty |
| EP-S2-08 | **Minimal** post-Evidence continuity + rehydrate | Bounded; ≠ L4 |
| EP-S2-09 | Fail-closed: wrong Project/Attempt/stale EC/SHA mismatch/missing verifier | Negatives |
| EP-S2-10 | No Product docs_write admission / no parallel engine | |
| EP-S2-11 | Non-regression L3-S1 + SHE authority | |
| EP-S2-12 | Fake/Real boundaries explicit; no false REAL | TestOnly ≠ REAL |

**None of these are PASS from this cadrage alone.**

EP-S2-08: **in scope as minimal**; if Morris rejects, Option A + debt — do not silently import full L4.
```

### Exact restored meanings (this pack)

| EP | Définition originale | Couverture locale | Verdict | Réserve / exit |
|----|----------------------|-------------------|---------|----------------|
| EP-S2-01 | Mission/EC linked to Project/Attempt | L3-S1 + mission chain non-reg; Option B uses existing W2 cycle-bound path | **PARTIAL** | Chat-first Generic PREPARE null-cycle **NOT PROVEN** (S8) |
| EP-S2-02 | SHE reused; no gratuitous second human gesture | L3-S1 EP08/SHE non-reg | **PASS** (DET non-reg) | REAL SHE not claimed |
| EP-S2-03 | FS effects Studio-verified ≠ Cursor CLAIM | Lot A VerifiedChangeSet + Cont01 allowlist | **PASS** (DET component) | Not full FS→Git→Review E2E |
| EP-S2-04 | Generic Evidence source with verifiable path→digest lineage | ingest + CORR-S2-01/02 + supersession stamp | **PASS** (DET) | Local candidate ≠ ON MAIN |
| EP-S2-05 | Mission Evidence ingested & bound | productMissionEvidenceChain E2E (existing W2 path) | **PARTIAL** | S8 chat-first Mission **NOT PROVEN**; KEEP Lot B only |
| EP-S2-06 | RB/CE consume admissible proofs | Mission E2E + L3-S1 RB/CE | **PASS** (DET non-reg on exercised paths) | Generic chat-first Mission→RB path under S8 |
| EP-S2-07 | Product Result honest (PASS only if proven; else NOT_PROVEN/UNCLAIMED) | L3-S1 / mission honesty outcomes | **PASS** (DET non-reg) | No new Generic Product Result oracle E2E |
| EP-S2-08 | Minimal post-Evidence continuity + rehydrate | GERM projection + T9 re-read; W3-C non-reg | **PARTIAL** | Projection/rehydrate DET proven; Nora/Pilote UX E2E **NOT PROVEN**; ≠ L4 |
| EP-S2-09 | Fail-closed: wrong Project/Attempt/stale EC/SHA/missing verifier | Path ambiguity + CORR-01 negatives + Cont01; L3-S1 negatives partial | **PARTIAL** | Multi-path AMBIGUOUS alone ≠ full EP-S2-09; Project/Attempt/SHA verifier matrix not fully re-proven here |
| EP-S2-10 | No Product docs_write admission / no parallel engine | Source token + allowlist historical-only docs_write | **PASS** (DET) | — |
| EP-S2-11 | Non-regression L3-S1 + SHE authority | akgM5L3S1 suite | **PASS** (DET) | — |
| EP-S2-12 | Fake/Real boundaries explicit; no false REAL | TestOnly / DET; REAL not run | **PASS** (qualification) | REAL NOT GRANTED |

**R-S2-05 closed when:** original definitions restored and honest qualification applied — **not** when all twelve become artificial PASS.

## 12. Correspondance EP ↔ preuves / corrections

| Correction / Lot | Maps to original EP(s) | Notes |
|------------------|------------------------|-------|
| Lot A materialization + digest + allowlist | EP-S2-03, EP-S2-04, EP-S2-10 | Component DET |
| Lot B Mission KEEP | EP-S2-01, EP-S2-05 | Residual S8 |
| Lot C GERM projection | EP-S2-08 (partial) | Not Nora UX complete |
| CORR-S2-01 path identity | EP-S2-04 lineage + EP-S2-09 segment of fail-closed | |
| CORR-S2-02 path dedupe | EP-S2-04 selection honesty | |
| CORR-S2-03 truncation | EP-S2-07 / EP-S2-08 honesty of presented completeness | |
| R-S2-04 missing content | EP-S2-07 / EP-S2-08 honesty | Never FULL of unread bytes |
| Cont01 / L3-S1 / Mission E2E / W3-C | EP-S2-02/06/11 + partial 01/05/09 | Non-regression layers |

## 13. Bilan cumulatif Option B

| Lot / Correction | Status |
|------------------|--------|
| Lot A Generic FS Evidence | LOCAL DET candidate |
| Lot B Mission Evidence W2 path | KEEP; S8 residual |
| Lot C GERM projection | LOCAL DET + R-S2-04 honesty |
| CORR-S2-01 | ACCEPTED LOCAL DET |
| CORR-S2-02 | ACCEPTED LOCAL DET |
| CORR-S2-03 | Truncation ACCEPTED |
| R-S2-04 | Corrected this cycle |
| R-S2-05 | Traceability restored this cycle |

**Explicit NON-CLAIMS:** Generic E2E COMPLETE; FS→Git→Review COMPLETE; Mission chat-first PROVEN; Nora/Pilote UX COMPLETE; L3 GLOBAL COMPLETE; REAL PROVEN.

## 14. Index fichiers locaux vs origin/main

| Path | Status | Role |
|------|--------|------|
| `…/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts` | UNTRACKED NEW | Lot A + CORR-S2-02 |
| `…/domain/fsAnchorArtifactMaterializationEvidenceSources.ts` | UNTRACKED NEW | Allowlist + CORR-S2-01 |
| `…/w2/governedExecuteAuthorizedContract.ts` | MODIFIED | Wire stamp |
| `…/w2/w3cPostEvidenceLoop.ts` | MODIFIED | Lot C + CORR-03 + **R-S2-04** |
| `…/domain/resolvePreCommitWorkspaceContinuation.ts` | MODIFIED | Allowlist |
| `…/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts` | MODIFIED | Allowlist |
| `…/gcecCont01ContinuationResolver.d0.test.ts` | MODIFIED | Cont non-reg |
| `…/akgM5L3S2.optionB.lotsAC.d0.test.ts` | UNTRACKED NEW | Lots + CORR + **R-S2-04 T1–T10** |
| `.tmp-sfia-review/chatgpt-review.md` | MODIFIED | This pack |

**SHA-256:**
- ingest: `56fc26c42d6e4f05b563e2cc8d597369f8e91e6cbca1ad11b3b55407a8fff0ec`
- fsAnchor: `85632997028436e75ee60ddccb74b214255d59a71468c3984d33b5cf3d945f79`
- lotsAC: `9b1823041bdd72ea5297ad36d37e7caf6cba1faa5d1214dc0060003e8ac0b851`

## 15. Contenu complet — fichiers untracked nécessaires

### NEW FILE — `projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts`

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
function normalizeGenericMaterializationLogicalPath(raw: string): string | null {
  const normalized = raw.replace(/\\/g, "/").replace(/^\/+/, "").trim();
  if (!normalized || normalized.includes("..") || normalized.includes("\0")) {
    return null;
  }
  if (normalized.includes("//") || normalized.endsWith("/")) {
    return null;
  }
  return normalized;
}

/**
 * Pick exactly one primary materialization path from VerifiedChangeSet entries.
 * CORR-S2-02 — count distinct logical paths (dedupe targetPath ∩ expectedOutputs).
 * Fail-closed on ambiguity across different files (no first-path heuristic).
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
        .map((p) => normalizeGenericMaterializationLogicalPath(p))
        .filter((p): p is string => Boolean(p)),
    ),
  ];
  if (observed.length === 0) {
    return {
      ok: false,
      code: "NONE",
      message: "No observed create/modify paths for generic materialization.",
    };
  }
  // Dedupe preferred identities (same path may appear in targetPath + expectedOutputs).
  const preferredDistinct = [
    ...new Set(
      (input.preferredPaths ?? [])
        .map((p) => normalizeGenericMaterializationLogicalPath(p))
        .filter((p): p is string => Boolean(p)),
    ),
  ];
  const hitDistinct = preferredDistinct.filter((p) => observed.includes(p));
  if (hitDistinct.length === 1) {
    return { ok: true, logicalPath: hitDistinct[0]! };
  }
  if (hitDistinct.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS",
      message: `Multiple preferred observed paths: ${hitDistinct.join(",")}`,
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

### NEW FILE — `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts`

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
 * (metadata_only / tests) or an absolute durable external_payload_ref path whose
 * logical suffix equals the required path (Product verify probe).
 *
 * CORR-S2-01 — segment-exact identity only:
 * - exact logical equality after normalization;
 * - durable refs under `/generic-materialization/` or `/docs-write-artifact/`:
 *   compare extracted logical path for exact equality;
 * - otherwise require a `/` segment boundary before the logical path
 *   (`…/docs/note.md`), never bare `endsWith(req)` which falsely matches
 *   `xdocs/note.md` / `autresdocs/note.md` against `docs/note.md`.
 */
export function evidenceLocationMatchesLogicalPath(
  location: string,
  logicalPath: string,
): boolean {
  const loc = location.replace(/\\/g, "/").trim();
  let req = logicalPath.replace(/\\/g, "/").trim();
  if (!loc || !req) return false;
  // Logical identity is repo-relative; strip accidental leading slashes.
  req = req.replace(/^\/+/, "");
  if (!req || req.includes("..") || req.includes("\0")) return false;
  // Refuse malformed logical paths that would collapse segment boundaries.
  if (req.endsWith("/") || req.includes("//")) {
    return false;
  }
  // Refuse traversal / null in Evidence.location (fail-closed, no guessing).
  if (loc.includes("..") || loc.includes("\0")) return false;

  if (loc === req) return true;

  const extracted = logicalPathFromDurableArtifactLocation(loc);
  if (extracted !== loc) {
    // Known durable materialization layout — exact logical equality only.
    if (extracted.includes("..") || extracted.includes("\0")) return false;
    return extracted === req;
  }

  // Non-marker locations: require an explicit path-segment boundary.
  // Do NOT use loc.endsWith(req) — prefix collisions (xdocs/note.md).
  return loc.endsWith(`/${req}`);
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

### NEW FILE — `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts`

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
import {
  genericExecutionReviewMaterialRefsRelative,
  persistGenericExecutionReviewMaterial,
} from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { isFsAnchorSupersededByVerifiedLocalCommit } from "@/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE,
  evidenceLocationMatchesLogicalPath,
} from "@/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources";
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

describe("AKG-M5 L3-S2 CORR-S2-01 — strict Evidence path matching", () => {
  const req = "docs/note.md";

  it("positives: exact logical + durable marker layouts", () => {
    expect(evidenceLocationMatchesLogicalPath(req, req)).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/docs-write-artifact/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(`/var/data/${req}`, req),
    ).toBe(true);
  });

  it("negatives: prefix/suffix segment collisions must not match", () => {
    expect(evidenceLocationMatchesLogicalPath("xdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("autresdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("docs/note.md.bak", req)).toBe(
      false,
    );
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${req}`,
        req,
      ),
    ).toBe(false);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}.bak`,
        req,
      ),
    ).toBe(false);
    expect(evidenceLocationMatchesLogicalPath("../docs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath(req, "../docs/note.md")).toBe(
      false,
    );
  });
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

describe("AKG-M5 L3-S2 CORR-S2-02 — distinct preferred path selection", () => {
  it("A: same path in targetPath + expectedOutputs → unique selection", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/note.md"],
        preferredPaths: ["docs/note.md", "docs/note.md"],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/note.md" });
  });

  it("B: two distinct preferred+observed paths → AMBIGUOUS", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: ["docs/a.md", "docs/b.md"],
      preferredPaths: ["docs/a.md", "docs/b.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("AMBIGUOUS");
  });

  it("C: no observed path → NONE", () => {
    const r = selectPrimaryGenericMaterializationPath({
      observedPaths: [],
      preferredPaths: ["docs/note.md"],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("NONE");
  });

  it("D: single observed without preferred → select that path", () => {
    expect(
      selectPrimaryGenericMaterializationPath({
        observedPaths: ["docs/solo.md"],
        preferredPaths: [],
      }),
    ).toEqual({ ok: true, logicalPath: "docs/solo.md" });
  });

  it("E: malformed preferred paths ignored; honest NONE/AMBIGUOUS", () => {
    const none = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md", "docs/ok.md"],
      preferredPaths: ["../evil.md"],
    });
    // malformed preferred dropped; single valid observed remains → select
    expect(none).toEqual({ ok: true, logicalPath: "docs/ok.md" });
    const badOnly = selectPrimaryGenericMaterializationPath({
      observedPaths: ["../evil.md"],
      preferredPaths: ["../evil.md"],
    });
    expect(badOnly.ok).toBe(false);
    if (!badOnly.ok) expect(badOnly.code).toBe("NONE");
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

describe("AKG-M5 L3-S2 CORR-S2-03 — FULL/PARTIAL honesty on truncated bytes", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-corr03",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  it("A: manifest FULL + content truncated by byteCap → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-trunc-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-trunc";
    const big = "X".repeat(13_000);
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "modified: docs/note.md",
          text: big,
          summary: "sha256:big",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.artifactReviewMaterial?.length).toBeLessThanOrEqual(12_000);
  });

  it("B: manifest PARTIAL + short content → stays PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-partial-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-partial";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("keep-blocker");
  });

  it("C: manifest FULL + short complete content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-full-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-full";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: {
        schemaVersion: "oa.cursor-review-end-of.1" as const,
        attemptId,
        executionContractId: "xct:l3s2",
        status: "approved" as const,
        summary: "ok",
      } as never,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "short-complete",
        },
      ],
      completeness: "FULL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("E: Cursor CLAIM absent → executionReport null (material may still be PARTIAL)", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-noclaim-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:l3s2-noclaim";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: "material-only",
        },
      ],
      completeness: "PARTIAL",
      blockers: ["no-claim"],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewMaterial).toContain("material-only");
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });
});

describe("AKG-M5 L3-S2 R-S2-04 — missing/unreadable expected content honesty", () => {
  const baseReport = (attemptId: string) => ({
    schemaVersion: "oa.cursor-execution-report.1" as const,
    reportId: "rpt:l3s2-rs204",
    attemptId,
    executionContractId: "xct:l3s2",
    repositoryRef: "repo:test",
    baseSha: "abc123",
    status: "succeeded" as const,
    workPerformed: ["edited docs/note.md"],
    authorizedEffectsExecuted: ["filesystem.modify" as const],
    blockers: ["keep-blocker"],
    reservations: ["keep-reservation"],
  });

  function persistFullWithItem(input: {
    refsRoot: string;
    attemptId: string;
    text: string;
  }) {
    return persistGenericExecutionReviewMaterial({
      refsRoot: input.refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId: input.attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(input.attemptId),
      reviewEndOf: null,
      verifiedChangeSet: {
        schemaVersion: "oa.studio-verified-changeset.1",
        worktreePath: "<disposed-or-ephemeral>",
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        all: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        created: [],
        modified: [
          {
            path: "docs/note.md",
            status: "modified",
            afterDigest: "sha256:abc",
          },
        ],
        deleted: [],
        renamed: [],
      } as never,
      verificationStatus: "OBSERVED",
      reviewItems: [
        {
          kind: "file",
          logicalPath: "docs/note.md",
          label: "file",
          text: input.text,
        },
      ],
      completeness: "FULL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
  }

  it("T1: manifest FULL + complete short content → FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t1-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t1";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "complete" }).ok).toBe(
      true,
    );
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBe("complete");
    expect(surface.artifactReviewCompleteness).toBe("FULL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("FULL");
  });

  it("T2: manifest FULL + content > 12_000 bytes → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t2-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t2";
    expect(
      persistFullWithItem({
        refsRoot,
        attemptId,
        text: "Y".repeat(13_000),
      }).ok,
    ).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T3: manifest PARTIAL + short content → PARTIAL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t3-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t3";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: baseReport(attemptId),
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "short" },
      ],
      completeness: "PARTIAL",
      blockers: ["keep-blocker"],
      reservations: ["keep-reservation"],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T4: manifest FULL + contentRef + missing file → never FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t4-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t4";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "will-delete" }).ok).toBe(
      true,
    );
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const itemPath = path.join(refsRoot, rel.itemsDir, "ri:001.bin");
    expect(fs.existsSync(itemPath)).toBe(true);
    fs.unlinkSync(itemPath);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_MISSING");
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.executionReport?.reservationsSummary).toContain(
      "EXECUTION_REVIEW_ITEM_MISSING",
    );
  });

  it("T5: manifest FULL + invalid contentRef → fail-closed never fictional FULL", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t5-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t5";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "ok" }).ok).toBe(true);
    const rel = genericExecutionReviewMaterialRefsRelative(attemptId);
    const manifestAbs = path.join(refsRoot, rel.manifest);
    const manifest = JSON.parse(fs.readFileSync(manifestAbs, "utf8")) as {
      reviewItems: Array<{ contentRef?: string }>;
      completeness: string;
    };
    expect(manifest.completeness).toBe("FULL");
    manifest.reviewItems[0]!.contentRef = "../evil.bin";
    fs.writeFileSync(manifestAbs, `${JSON.stringify(manifest)}\n`, "utf8");
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.artifactReviewMaterial).toBeUndefined();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.executionReport?.artifactReviewCompleteness).toBe("PARTIAL");
    expect(surface.blockersSummary).toContain("EXECUTION_REVIEW_ITEM_REF_DENIED");
  });

  it("T6: GERM absent → no invented report", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t6-"));
    tmpRoots.push(refsRoot);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: "xat:rs204-missing",
      refsRoot,
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBeUndefined();
    expect(surface.artifactReviewMaterial).toBeUndefined();
  });

  it("T7: Cursor CLAIM absent → executionReport null", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t7-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t7";
    const persisted = persistGenericExecutionReviewMaterial({
      refsRoot,
      projectId: "prj:l3s2",
      cycleInstanceId: "cyc:l3s2",
      executionContractId: "xct:l3s2",
      attemptId,
      repositoryRef: "repo:test",
      baseSha: "abc123",
      cursorReport: null,
      reviewEndOf: null,
      verifiedChangeSet: null,
      verificationStatus: "UNAVAILABLE",
      reviewItems: [
        { kind: "file", logicalPath: "docs/note.md", label: "file", text: "x" },
      ],
      completeness: "PARTIAL",
      blockers: [],
      reservations: [],
    });
    expect(persisted.ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.executionReport).toBeNull();
    expect(surface.artifactReviewCompleteness).toBe("PARTIAL");
  });

  it("T8: blockers / reservations / workPerformed preserved when present", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t8-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t8";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "body" }).ok).toBe(true);
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(surface.blockersSummary).toContain("keep-blocker");
    expect(surface.executionReport?.reservationsSummary).toContain(
      "keep-reservation",
    );
    expect(surface.workPerformedSummary).toContain("edited docs/note.md");
  });

  it("T9: fresh projection == re-read at equal durable facts", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t9-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t9";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "stable" }).ok).toBe(
      true,
    );
    const a = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const b = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    expect(b).toEqual(a);
  });

  it("T10: projection is pure — no HumanDecision / new execution side effects", () => {
    const refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "l3s2-rs204-t10-"));
    tmpRoots.push(refsRoot);
    const attemptId = "xat:rs204-t10";
    expect(persistFullWithItem({ refsRoot, attemptId, text: "pure" }).ok).toBe(true);
    const before = walkSnapshot(refsRoot);
    projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: "docs/note.md",
    });
    const after = walkSnapshot(refsRoot);
    expect(after).toEqual(before);
  });
});

function walkSnapshot(root: string): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(abs);
      else {
        const st = fs.statSync(abs);
        out.push(`${path.relative(root, abs)}:${st.size}:${st.mtimeMs}`);
      }
    }
  };
  walk(root);
  return out.sort();
}

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

## 16. Tests et validations consolidés

### Environment
- CWD: `projects/sfia-studio/app`
- vitest v3.2.7; DET / Fake / TestOnly
- No Cursor REAL; no OpenAI LIVE

### Results

| Command | Tests | Result |
|---------|-------|--------|
| `npx vitest run …/akgM5L3S2.optionB.lotsAC.d0.test.ts` | 27 | **PASS** |
| Cont01 + L3-S1 + Mission E2E + W3-C loop + W3-C correction (combined) | 78 | **PASS** |
| `npm run typecheck` | — | **PASS** |
| `npm run lint` | — | **PASS** (2 pre-existing unused-var warnings unrelated) |

**New regressions:** none.
**Proof level:** component + integrated DET; not Product E2E COMPLETE.

## 17. Fake / Real Matrix

| Area | Mode | Status |
|------|------|--------|
| Projection / GERM bytes | DET Fake FS | Exercised |
| Evidence / Cont01 / L3-S1 | TestOnly DET | Exercised |
| Cursor REAL | REAL | **NOT GRANTED / not run** |
| OpenAI LIVE | LIVE | **not run** |
| OA-exclusive | OFF | Unchanged |

DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 18. R24 impacts

**R24: SEMANTIC UPDATE REQUIRED — SYNC PENDING.**

| Topic | Old | New | Docs |
|-------|-----|-----|------|
| Presented completeness | Manifest FULL could remain with unread contentRef | Unreadable expected content ⇒ PARTIAL + note | PRR 03/07/08/09 |
| EP matrix | Pass 02 pack used remapped meanings | Original Qualification EP senses restored | Review Pack; PRR 08 when synced |
| Path/Evidence Option B | Local candidate | Still local (not CURRENT ON MAIN) | PRR 02/09 |

PRR/Roadmap **not** edited this cycle.

## 19. S8 non-résolu

**S8 DECISION REQUIRED** — chat-first Generic PREPARE without fabricating Mission Evidence / cycleInstanceId remains NOT PROVEN. Not arbitrated here.

## 20. Dettes / owner / exit

| Item | Owner | Exit |
|------|-------|------|
| ChatGPT Critical Technical Closure Review | ChatGPT | Verdict |
| Morris S8 decision | Morris | Explicit GO |
| EP-S2-01/05/08/09 residual proofs | Delivery / Morris | Separate scopes |
| R24 PRR sync | Docs | Separate GO |
| Project Git Integration | Morris | Separate GO — not implied |
| REAL grant | Morris | Explicit |

## 21. Risques et réserves

1. Local dirty candidate only — not ON MAIN.
2. EP-S2-08/09 PARTIAL — do not inflate from component tests.
3. S8 still blocks honest chat-first Mission claim.
4. R24 still pending.
5. No REAL / L4 / exclusive activation.
6. Reader GERM KEEP — only consumer try/catch added.

## 22. Git Review Index

| Ref | Value |
|-----|-------|
| Project branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| Project HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Project commits this cycle | **0** |
| Handoff branch | `sfia/review-handoff` |
| Canonical | `sfia-review-handoff/latest-chatgpt-review.md` |
| Prior tip/blob | `b5935c8f` / `6d151073` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` L3 |

## 23. Verdict unique

**L3-S2 OPTION B — TECHNICAL CLOSURE PASS LOCAL DET — READY FOR CHATGPT CRITICAL REVIEW — S8 DECISION REQUIRED — R24 SYNC PENDING**

Means: technical corrections consolidated at tested DET scope.
Does **not** mean: L3-S2 GLOBAL COMPLETE.
