# SFIA Review Pack FULL — AKG-M5 / L3-S2 CONSOLIDATED CORRECTION PASS 02

## 1. Date / GO Morris

- **Wall clock (UTC):** 2026-10-27T06:30:57Z
- **GO Morris:** 2026-10-27 — GO CONSOLIDATED CORRECTION PASS
- **Intention:** Correct CORR-S2-02 + CORR-S2-03 in one consolidated cycle; preserve CORR-S2-01; produce one FULL Review Pack + L3 handoff.
- **Not authorized:** S8 arbitration; Mission Evidence architecture; L4; Cursor REAL / OpenAI LIVE; OA-exclusive activation; PRR/Roadmap edits; project commit/push/PR/merge; doctrine/runtime v3 promotion.

## 2. Cycle / profil / typologie

| Field | Value |
|-------|-------|
| Project | SFIA Studio |
| Chantier | AKG-M5 — Product Transformation |
| Milestone | L3-S2 — Generic Execution Option B |
| Capacity | V3-F05 — Generic Execution |
| Cycle | 8 — Delivery / implémentation |
| Profile | CRITICAL |
| Typologie | EVOL / CORRECTION |
| Process | SFIA v2.6 ChatGPT ↔ Cursor |
| CKC | Candidate / guidance only |
| Scope | CORR-S2-02 (path selection dedupe) + CORR-S2-03 (FULL/PARTIAL honesty) |

## 3. Git Truth — initial / final

### Repository

- Remote: `https://github.com/mcleland147/sfia-workspace.git`
- Worktree: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity`
- Branch: `feat/akg-m5-l3-s2-generic-proof-continuity`
- HEAD: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862`
- origin/main: `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` (equal — no project commits this cycle)
- Prior handoff tip (pre-publish this cycle): `2f26618b2de642df52e563baa6d2ffc58ba9410e` / blob `3ca668d6c4fd2ae8a22eb590fb8c4ce0c4464dab`

### Working tree (Product candidate — intentionally dirty)

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

**Note:** Dirty worktree is EXPECTED (Option B Delivery + CORR-S2-01/02/03 local DET). No reset/stash/clean. No second worktree. No project Git mutation.

### Worktree list (relevant)

- Delivery: `…-feat-akg-m5-l3-s2-generic-proof-continuity` @ `6e957ecb` [`feat/akg-m5-l3-s2-generic-proof-continuity`]
- Handoff: `…/sfia-review-handoff-m5a-gi-20261023` @ `2f26618b` [`sfia/review-handoff`] (pre-publish)

## 4. Sources Git + refs

### Method (READ)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`

### Convergence / Product (READ)

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (READ-ONLY this cycle)
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md`
- `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md`
- Doctrine v3 framing 33/34/35 (paths on Git; NON ADOPTED runtime)
- PRR README + volumes 02/03/07/08/09 (READ-ONLY; R24 SYNC PENDING)

### Prior handoffs (historical)

- L3-S2 Qualification Option B; Delivery Pass 01; CORR-S2-01 — used for context only.
- Primary truth: local Product files + DET tests in this worktree.

## 5. Convergence Pre-check

| Item | Status |
|------|--------|
| T-C | ADOPTED |
| L3-S1 | INTEGRATED ON MAIN — DET |
| L3-S2 | OPTION B ADOPTED for construction — Local Delivery candidate |
| CORR-S2-01 | ACCEPTED LOCAL DET — preserved this cycle |
| CORR-S2-02 | Corrected this cycle (LOCAL DET) |
| CORR-S2-03 | Corrected this cycle (LOCAL DET) |
| S8 | DECISION REQUIRED (unchanged) |
| R24 | SYNC PENDING (dossier prepared; PRR/Roadmap untouched) |
| L3 GLOBAL | OPEN |
| L2 | PARTIAL, exclusive DEFAULT OFF |
| REAL | NOT GRANTED |
| Runtime v3 | NON ADOPTED |

Build Doctrine R2/R3/R6/R8/R18 respected: coherent capacity closure candidate; reuse existing GERM/W3-C/FS-anchor; no parallel engine; no free POC; no L4 extension.

## 6. R23 — Architecture / invariants

### Classification (this cycle)

| Asset | Class | Role |
|-------|-------|------|
| `selectPrimaryGenericMaterializationPath` | ADAPT | CORR-S2-02 — dedupe preferred paths |
| `projectW3cExecutionReportSurfaceFromDurable` | ADAPT | CORR-S2-03 — honor byteCap PARTIAL |
| `evidenceLocationMatchesLogicalPath` | KEEP | CORR-S2-01 — unchanged |
| `ingestGenericFilesystemMaterializationArtifactEvidence` | KEEP | generic_materialization producer |
| `fsAnchorArtifactMaterializationEvidenceSources` | KEEP | allowlist + matcher |
| GERM persist/load / `readExecutionReviewItemBytes` | KEEP | reused |
| Mission Evidence / F19 / Nora Deep Review | FREEZE | out of scope |

### Invariants preserved

1. Fail-closed ambiguity (distinct files) — never first-path heuristic.
2. Evidence.location absolute durable path; logical identity via segment-exact matcher (CORR-S2-01).
3. Source stamp `execution_attempt:generic_materialization` (not docs_write Product admission).
4. FULL requires demonstrated completeness of **presented** content (CORR-S2-03).
5. Never invent Cursor CLAIM / executionReport when claim file absent.
6. Never promote PARTIAL → FULL.
7. No fabricated cycleInstanceId / Mission Evidence for fake E2E.

### Consumers

- Path selector → ingest stamp → FS-anchor supersession resolvers.
- Projection → W3-C fresh + rehydrate surfaces (same function).

## 7. CORR-S2-01 — statut préservé

**Status:** ACCEPTED LOCAL DET — **not modified** this cycle.

- Matcher: `evidenceLocationMatchesLogicalPath` in `fsAnchorArtifactMaterializationEvidenceSources.ts`
- Rule: exact logical equality OR durable marker extract OR `endsWith("/"+req)` — never bare `endsWith(req)`.
- Tests in `akgM5L3S2.optionB.lotsAC.d0.test.ts` (CORR-S2-01 describe) still PASS.

## 8. CORR-S2-02 — before / after

### Before

`preferred.filter(p => observed.includes(p))` without Set-dedupe of preferred.

Example defect:
- observed: `["docs/note.md"]`
- preferred: `["docs/note.md", "docs/note.md"]` (targetPath ∩ expectedOutputs)
- hit.length === 2 → false **AMBIGUOUS**

### After

1. Normalize via `normalizeGenericMaterializationLogicalPath` (reject `..`, `//`, trailing `/`, NUL).
2. Dedupe observed and preferred with `Set`.
3. Count **distinct** preferred∩observed hits.
4. Unique → select; >1 distinct → AMBIGUOUS; 0 preferred hits + 1 observed → select; else AMBIGUOUS/NONE.

### Tests A–E

All PASS in `CORR-S2-02` describe block (see §13).

## 9. CORR-S2-03 — before / after

### Before

`completeness = manifest.completeness` only — ignored `readExecutionReviewItemBytes(...).completeness`.

Manifest FULL + byteCap 12_000 truncation → surface still claimed **FULL**.

### After

```
let completeness = manifest.completeness === "FULL" ? "FULL" : "PARTIAL";
// after successful read:
if (bytes.completeness === "PARTIAL") completeness = "PARTIAL";
```

- Never promote PARTIAL→FULL.
- Truncation of presented bytes forces PARTIAL on both `artifactReviewCompleteness` and `executionReport.artifactReviewCompleteness`.
- Missing GERM → null report; missing CLAIM → executionReport null; blockers/reservations preserved from manifest/claim.

### Tests A/B/C/E (+ existing D missing GERM)

All PASS (see §13).

## 10. Diffs utiles (modified vs origin/main)


### Diff — w3cPostEvidenceLoop.ts (Lot C + CORR-S2-03)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dd6e6672..56d2d0f1 100644
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
@@ -93,15 +97,126 @@ export function projectW3cExecutionReportSurfaceFromDurable(input: {
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
+  // CORR-S2-03 — never promote PARTIAL→FULL; truncate of presented bytes ⇒ PARTIAL.
+  let completeness: "FULL" | "PARTIAL" =
+    manifest.completeness === "FULL" ? "FULL" : "PARTIAL";
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
+      if (bytes.completeness === "PARTIAL") {
+        completeness = "PARTIAL";
+      }
+    }
+    // Read failure: keep manifest completeness; do not invent material or upgrade FULL.
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

```

### Diff — governedExecuteAuthorizedContract.ts (Lot A wire)

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

## 11. Index cumulatif — TOUS changements locaux Option B vs origin/main

| Path | Status vs main | Role |
|------|----------------|------|
| `…/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts` | **UNTRACKED NEW** | Lot A producer + CORR-S2-02 selector |
| `…/domain/fsAnchorArtifactMaterializationEvidenceSources.ts` | **UNTRACKED NEW** | Allowlist + CORR-S2-01 matcher |
| `…/w2/governedExecuteAuthorizedContract.ts` | MODIFIED | Wire generic stamp |
| `…/w2/w3cPostEvidenceLoop.ts` | MODIFIED | GERM projection + CORR-S2-03 |
| `…/domain/resolvePreCommitWorkspaceContinuation.ts` | MODIFIED | Allowlist consume |
| `…/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts` | MODIFIED | Allowlist consume |
| `…/__tests__/oa/…/gcecCont01ContinuationResolver.d0.test.ts` | MODIFIED | Continuation non-reg |
| `…/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts` | **UNTRACKED NEW** | Lots A/C + CORR-01/02/03 |
| `.tmp-sfia-review/chatgpt-review.md` | MODIFIED | This Review Pack (local only) |

**SHA-256 of new Product/test files:**

- ingest…ts: `56fc26c42d6e4f05b563e2cc8d597369f8e91e6cbca1ad11b3b55407a8fff0ec`
- fsAnchor…ts: `85632997028436e75ee60ddccb74b214255d59a71468c3984d33b5cf3d945f79`
- lotsAC.d0.test.ts: `00155248f9eadfd34b957e6b9588632b61a0c952bc908ae6d10f6be492e9b61e`

## 12. Contenu des nouveaux fichiers non versionnés


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
import { persistGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
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

## 13. Preuves et tests consolidés

### Environment

- CWD: `projects/sfia-studio/app`
- Package: `sfia-studio@0.1.0`
- Runner: vitest v3.2.7
- Mode: DET / Fake (TestOnlyRealExecutionLaunchPort) — **no Cursor REAL, no OpenAI LIVE**

### Results (exact)

| Command | Scope | Tests | Result |
|---------|-------|-------|--------|
| `npx vitest run __tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts` | CORR-01/02/03 + Lots A/C | 17 | **PASS** |
| `npx vitest run __tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts` | Continuation / FS-anchor | 34 | **PASS** (41 total with L3-S1 below in combo run; Cont01 alone with L3-S1 = 41) |
| `npx vitest run …/gcecCont01… + …/akgM5L3S1…` | Cont01 + L3-S1 | 41 | **PASS** |
| `npx vitest run …/akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | L3-S1 non-reg | 7 | **PASS** |
| `npx vitest run …/productMissionEvidenceChain.e2e.d0.test.ts` | Mission Evidence chain | 7 | **PASS** |
| `npx vitest run …/w3cPostEvidenceLoop.test.ts + …/w3cPostEvidenceCorrection.test.ts` | W3-C | 30 | **PASS** |
| `npm run typecheck` | `tsc --noEmit` | — | **PASS** (exit 0) |
| `npm run lint` | `next lint` | — | **PASS** (exit 0; 2 pre-existing unused-var warnings in unrelated OA files) |

**New regressions:** none observed.
**Pre-existing lint warnings (unchanged):** `pilotLifecycleTransitions.ts` unused `projectResult`; `startExecution.ts` unused `asStringList`.

### Proof class

| Area | Class |
|------|-------|
| CORR-S2-01/02/03 unit + ingest stamp | Unit / integrated DET |
| GERM projection FULL/PARTIAL | Unit DET |
| FS-anchor / Cont01 | Non-regression DET |
| L3-S1 / Mission E2E / W3-C | Non-regression DET |
| S8 chat-first Generic PREPARE Mission | **NOT PROVEN** |
| FS→Git→Review Product E2E | **NON-CLAIM** (no integrated oracle) |
| Nora/Pilote continuity beyond GERM rehydrate | **NOT PROVEN** as product UI continuity |

## 14. EP-S2-01…12 qualificés

| EP | Portée | Test primaire | Observé | Verdict | Réserve / exit |
|----|--------|---------------|---------|---------|----------------|
| EP-S2-01 | Generic materialization Evidence stamp | lotsAC ingest | VERIFIED artifact + source token | **PASS** (DET) | Not ON MAIN |
| EP-S2-02 | Digest/bytes independent | ingest digest mismatch path | Mismatch fail-closed | **PASS** | — |
| EP-S2-03 | FS→SHA supersession allowlist | Cont01 + lotsAC | generic_materialization allowlisted | **PASS** | Historical docs_write read-only |
| EP-S2-04 | Primary path selection | CORR-S2-02 A–E | Unique distinct path; false AMBIGUOUS fixed | **PASS** | — |
| EP-S2-05 | Path identity CORR-S2-01 | CORR-S2-01 tests | Segment-exact; no xdocs collision | **PASS** | — |
| EP-S2-06 | Source allowlist exclusivity | EP-S2-10 token test | Not docs_write Product | **PASS** | — |
| EP-S2-07 | GERM persist/load | lotsAC Lot C | Persist + project surface | **PASS** | — |
| EP-S2-08 | W3-C report projection | Lot C + CORR-S2-03 | Projection + truncation honesty | **PASS** (projection/rehydrate fn) | Nora/Pilote UI continuity **NOT PROVEN** |
| EP-S2-09 | Ambiguity fail-closed | path selection B/E | Distinct multi → AMBIGUOUS | **PASS** | — |
| EP-S2-10 | Source naming | token assert | `execution_attempt:generic_materialization` | **PASS** | — |
| EP-S2-11 | Mission Evidence existing chain | productMissionEvidenceChain | Non-reg PASS | **PASS** (non-reg) | S8 null-cycle PREPARE still STOP |
| EP-S2-12 | SHE / L3-S1 / RB / CE honest | L3-S1 + mission | Non-reg PASS | **PASS** (non-reg) | Chat-first Generic PREPARE **NOT PROVEN** |

**Interdiction respectée:** no summing of separate component tests into a single Product E2E COMPLETE claim.

## 15. Fake / Real Matrix

| Capability | Mode | Status |
|------------|------|--------|
| Unit path/matcher/completeness | Fake/DET | Exercised |
| Product OA boot + Evidence services | Fake/DET | Exercised |
| Cursor adapter launch | TestOnly / DET | Exercised in L3-S1/W3-C |
| Cursor REAL CLI | REAL | **NOT GRANTED / not run** |
| OpenAI LIVE | LIVE | **NOT run** |
| Exclusive OA | DEFAULT OFF | Unchanged |

## 16. R24 — Documentation impacts (SYNC PENDING)

**R24: SEMANTIC UPDATE REQUIRED** — Product behaviors changed; PRR/Roadmap **not** edited this cycle.

### Sync dossier (for future gate)

1. **PRR 02** — object catalog: `execution_attempt:generic_materialization` Evidence source; durable `/generic-materialization/` layout.
2. **PRR 03** — E2E flow: FS materialization → Evidence stamp → FS-anchor supersession; W3-C GERM projection.
3. **PRR 08** — test/proof map: lotsAC + Cont01 + CORR-01/02/03 DET proofs.
4. **PRR 09** — gaps: S8 OPEN; FS→Git→Review NON-CLAIM; REAL NOT GRANTED; local candidate ≠ CURRENT ON MAIN.
5. **CORR-S2-01** path identity segment-exact rule.
6. **CORR-S2-02** distinct preferred path selection.
7. **CORR-S2-03** FULL requires presented-bytes completeness.
8. Manifest/digest needs: no new digest schema discovered this cycle.
9. After Git Integration only: announce CURRENT change.

**R24 SYNC PENDING** until verified document sync under separate GO.

## 17. S8 et autres réserves

1. **S8 DECISION REQUIRED** — chat-first Generic PREPARE without fabricating Mission Evidence remains blocked / NOT PROVEN.
2. **FS→Git→Review** complete Product filiation — NON-CLAIM.
3. **REAL** — NOT GRANTED.
4. **L3 GLOBAL** — OPEN.
5. **R24** — SYNC PENDING.
6. Local Option B candidate — **not** CURRENT ON MAIN; no project commit this cycle.
7. EP-S2-08 Nora/Pilote continuity beyond shared projection function — NOT PROVEN as UI continuity.
8. No Binding / docs_write Product restore.

## 18. Dette / owner / exit

| Item | Owner | Exit |
|------|-------|------|
| ChatGPT Critical Consolidated Review of this pack | ChatGPT | Review verdict |
| Morris S8 arbitration | Morris | Explicit GO |
| R24 PRR/Roadmap sync | Docs cycle | Separate GO after GI decision |
| Project Git Integration of Option B | Morris | Separate GO — not implied |
| REAL grant | Morris | Explicit |
| L3 close | Morris | After S8 + docs + proofs |

## 19. Git Review Index

| Ref | Value |
|-----|-------|
| Project branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| Project HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| origin/main | same |
| Project commits this cycle | **0** |
| Handoff branch | `sfia/review-handoff` |
| Handoff canonical file | `sfia-review-handoff/latest-chatgpt-review.md` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` (L3 borné) |
| Prior handoff tip | `2f26618b` / blob `3ca668d6` |

*(Post-publish tip/blob filled by publisher verification — see appendix if present.)*

## 20. Verdict unique

**L3-S2 OPTION B — CONSOLIDATED LOCAL DET CORRECTIONS PASS — READY FOR CHATGPT CRITICAL REVIEW — S8 DECISION REQUIRED — R24 SYNC PENDING**

Explicit non-claims:
- NOT L3-S2 E2E COMPLETE
- NOT FS→Git→Review REAL
- NOT L3 global CLOSED
- NOT runtime v3 ADOPTED
- NOT Git Integration authorized

---

## Appendix A — CORR-S2-02 / CORR-S2-03 code excerpts (already in §10 / §12)

Primary selectors/projection included in full new files and w3c diff above.

## Appendix B — R22 OpenAI-native-first

**N/A motivated:** no new cognitive need; no provider change in this correction lot.
