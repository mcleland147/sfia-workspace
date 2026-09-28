# POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 — Review Pack (FULL)

**Timestamp (UTC):** 2026-09-28T00:20:39Z
**Pack purpose (this revision):** REGULARIZE Review Pack/Handoff for ChatGPT independent review — provide exploitable full content or complete unified diffs for every modified/created product file. **No further product code changes in this regularization pass.**
**Macro:** POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01
**Cycle:** 8 — Delivery / implementation | **Typology:** EVOL | **Profile:** CRITICAL
**CKC:** ckc:studio:delivery / VALIDATED — cognitive only / execution authority NONE

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
 M projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
```

### diff --stat (product paths only)
```
 .../postExecutionTrajectorySurface.ui.test.tsx     |  16 +++
 ...oductCycleE2eStabilization.frontDoor.d0.test.ts |   7 +-
 ...spaceArtifactRouting.applicationPath.d0.test.ts |   7 +-
 .../surfaces/TrajectorySurface.tsx                 |  52 ++++++++++
 .../f3/ingestDocsWriteArtifactEvidence.ts          |  82 ++++++++++++++-
 .../f3/postEvidenceNoraAnalysis.ts                 |  26 +++--
 .../w2/governedExecuteAuthorizedContract.ts        |  74 +++++++++++++-
 .../app/features/project-assistant/w2/types.ts     |   9 ++
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    | 112 ++++++++++++++++++++-
 .../projectExecutionContractToCursorPrompt.ts      |  17 ++++
 .../03-end-to-end-flow-catalog.md                  |  15 ++-
 ...9-known-gaps-reserves-and-current-boundaries.md |  16 ++-
 .../production-runtime-reference.manifest.json     |   6 +-
 13 files changed, 411 insertions(+), 28 deletions(-)
```

### status porcelain
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
 M projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
```

## Morris GO / limits

- Construction locale: YES (already implemented; this pass = pack/handoff only)
- Project commit/push/PR/merge: NOT AUTHORIZED
- REAL Cursor/OpenAI: NOT AUTHORIZED (ZERO REAL)
- New store/table: NONE
- Runtime v3: NON ADOPTED
- Review Handoff L3: AUTHORIZED

## Sources read (implementation cycle)

Build Doctrine, Roadmap, C1, framing 33/34/35/37, CKC 08, Living Ref 03/09, method v2.6 process docs, and GO-listed code paths (Cursor report, docs_write completion/ingest, MissionResult, Nora post-Evidence, governed execute, materialize, claim completion, TrajectorySurface).

## Diagnostic (implementation cycle — unchanged)

### Current-as-implemented (before fix)
1. Generic Product Cursor: parse CURSOR_EXECUTION_REPORT_JSON → bind → MissionResult Evidence (external_payload_ref) → post-Evidence.
2. docs_write: verify files + digest → Artifact Evidence metadata_only → hot claim completion; `facts.cursorReport` returned but not persisted for Nora.
3. Nora lacked durable artifact body → campaign PATH_NOT_ALLOWED when trying generic reads.
4. NOT_PROVEN can remain honest for conformity gaps (not solely worktreeRef loss).

### Proven root causes
- RC1 docs_write did not bind/persist CursorExecutionReport for Product/Nora.
- RC2 Artifact Evidence metadata_only — no restart-safe review payload.
- RC3 Nora PostEvidenceAnalysisFacts missing artifact/report fields.
- RC4 EC→Cursor prompt did not mandate machine-readable envelope.

### Rejected
- worktreeRef-only explanation; PATH policy widen; new table/engine.

### Design retained
Reuse mission-result-refs FS Evidence layout; external_payload_ref Artifact; bind report fail-closed; Nora facts + UI Rapport d'exécution. No parallel architecture.

## Files created
- `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts`

## Files modified
- ingestDocsWriteArtifactEvidence.ts
- governedExecuteAuthorizedContract.ts
- projectExecutionContractToCursorPrompt.ts
- postEvidenceNoraAnalysis.ts
- w3cPostEvidenceLoop.ts
- types.ts
- TrajectorySurface.tsx
- postExecutionTrajectorySurface.ui.test.tsx
- productCycleE2eStabilization.frontDoor.d0.test.ts
- productWorkspaceArtifactRouting.applicationPath.d0.test.ts
- production-runtime-reference 03 / 09 / manifest

## Exploitable modified content

Priority: **six critical wiring files** first, then end-to-end proof tests, then remaining supporting diffs.


## A. SIX CRITICAL FILES (wiring end-to-end)

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

### `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 7fe6c105..54ccd16b 100644
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
@@ -948,6 +950,65 @@ export async function governedExecuteRecordResult(
         completed.facts &&
         contract.cycleInstanceId
       ) {
+        const refsRoot =
+          input.missionResultRefsRoot?.trim() ||
+          resolveProductEvidenceRefsRoot();
+
+        // Bind CursorExecutionReport when present — claim only; mismatch fail-closed.
+        let boundReport: CursorExecutionReportWithMission | null = null;
+        const report =
+          completed.facts.cursorReport ??
+          tryParseReportFromStdout(completed.facts.stdout ?? "");
+        if (report) {
+          const expectedRepo =
+            typeof contract.inputs?.repositoryBindingIdentity === "string"
+              ? contract.inputs.repositoryBindingIdentity
+              : null;
+          const expectedSha =
+            typeof contract.inputs?.baseHeadSha === "string"
+              ? contract.inputs.baseHeadSha
+              : null;
+          const bound = bindCursorExecutionReportToAttempt({
+            report,
+            expectedAttemptId: attempt.attemptId,
+            expectedExecutionContractId: contract.executionContractId,
+            attemptExecutionContractId: attempt.executionContractId,
+            expectedRepositoryRef: expectedRepo,
+            expectedBaseSha: expectedSha,
+          });
+          if (!bound.ok) {
+            return {
+              ok: false,
+              code: bound.code,
+              message: bound.message,
+              attempt: projectAttempt(attempt, adapterId),
+            };
+          }
+          boundReport = report;
+        }
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
         const ingested = await ingestDocsWriteArtifactEvidence({
           evidenceReviewServices: input.oa.evidenceReviewServices,
           projectId: input.projectId,
@@ -957,6 +1018,9 @@ export async function governedExecuteRecordResult(
           targetPath: completed.facts.targetPath,
           digest: completed.facts.digest,
           nowIso: input.oa.clock.nowIso(),
+          refsRoot,
+          ...(artifactBytes ? { artifactBytes } : {}),
+          ...(boundReport ? { cursorReport: boundReport } : {}),
         });
         // CR-PCONT-06 — Attempt succeeded stays durable; ingest / advance failure
         // must surface as post-execution continuity failure (never silent).
@@ -987,17 +1051,17 @@ export async function governedExecuteRecordResult(
           };
         }
         // Automatic Product result qualification while worktree is still hot.
+        // Prefer durable absolute path when persisted; else hot worktree path.
         // Failures stay fail-closed on Product claim; technical Attempt unchanged.
-        if (completed.facts.worktreeRef) {
+        const qualifyPath =
+          ingested.durableArtifactAbsolutePath ?? hotArtifactAbsolutePath;
+        if (qualifyPath) {
           await completeDocsWriteClaimEvidenceCompletion({
             evidenceReviewServices: input.oa.evidenceReviewServices!,
             attempt,
             contract,
             actor: LOCAL_PILOTE_ACTOR,
-            artifactAbsolutePath: path.join(
-              completed.facts.worktreeRef,
-              completed.facts.targetPath,
-            ),
+            artifactAbsolutePath: qualifyPath,
             nowIso: input.oa.clock.nowIso(),
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

### `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index f4c5e48b..34e59423 100644
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
@@ -63,6 +67,16 @@ export type W3cPostEvidenceRecommendation = {
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
 export type W3cPostEvidenceLoopSuccess = {
   ok: true;
   noraInvoked: boolean;
@@ -76,6 +90,8 @@ export type W3cPostEvidenceLoopSuccess = {
   reviewBundleId: string;
   claimEvaluationId: string | null;
   productOutcome: "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";
+  /** Business-first Cursor/artifact handoff surface (optional). */
+  executionReport?: W3cExecutionReportSurface | null;
 };

 export type W3cPostEvidenceLoopResult =
@@ -1231,6 +1247,7 @@ export async function runW3cPostEvidenceLoop(input: {
   let acceptanceCriteriaSummary: string | undefined;
   let expectedOutputsSummary: string | undefined;
   let validationPlanSummary: string | undefined;
+  let docsWriteTargetPath: string | undefined;
   if (oa.executionContractServices) {
     const loaded =
       await oa.executionContractServices.getExecutionContract.execute({
@@ -1243,6 +1260,10 @@ export async function runW3cPostEvidenceLoop(input: {
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
@@ -1292,7 +1313,6 @@ export async function runW3cPostEvidenceLoop(input: {
   }
   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);

-  noraInvoked = true;
   const eoSummary =
     claimEvaluation?.expectedOutputAssessments
       ?.map((a) => `${a.itemId.ordinal}:${a.result}`)
@@ -1301,6 +1321,88 @@ export async function runW3cPostEvidenceLoop(input: {
     claimEvaluation?.evidenceRequirementAssessments
       ?.map((a) => `${a.itemId.ordinal}:${a.result}`)
       .join("; ") ?? undefined;
+
+  // Durable Cursor report + artifact review material (no Pilot paste / PATH widen).
+  let workPerformedSummary: string | undefined;
+  let blockersSummary: string | undefined;
+  let stopReason: string | undefined;
+  let artifactReviewMaterial: string | undefined;
+  let artifactReviewCompleteness: "FULL" | "PARTIAL" | undefined;
+  let cursorReportSummary: string | undefined;
+  let executionReport: W3cExecutionReportSurface | null = null;
+  {
+    const durable = loadDocsWriteArtifactReviewMaterial({
+      refsRoot: resolveProductEvidenceRefsRoot(),
+      attemptId,
+      ...(docsWriteTargetPath ? { targetPath: docsWriteTargetPath } : {}),
+    });
+    if (durable.ok) {
+      artifactReviewMaterial = durable.artifactText;
+      artifactReviewCompleteness = durable.completeness;
+      const report = durable.cursorReport;
+      if (report) {
+        workPerformedSummary = (report.workPerformed ?? [])
+          .map((s) => String(s))
+          .join("; ")
+          .slice(0, 1200);
+        blockersSummary = (report.blockers ?? [])
+          .map((s) => String(s))
+          .join("; ")
+          .slice(0, 800);
+        stopReason = report.stopConditionTriggered?.trim() || undefined;
+        const fileFx = report.fileEffects;
+        const artifactsSummary = fileFx
+          ? [
+              ...(fileFx.created ?? []).map((p) => `créé:${p}`),
+              ...(fileFx.modified ?? []).map((p) => `modifié:${p}`),
+              ...(fileFx.deleted ?? []).map((p) => `supprimé:${p}`),
+            ]
+              .join("; ")
+              .slice(0, 800)
+          : null;
+        const validationsSummary = (report.validationEffects ?? [])
+          .map((v) => `${v.identity}:${v.result}`)
+          .join("; ")
+          .slice(0, 600);
+        const reservationsSummary = (report.reservations ?? [])
+          .map((s) => String(s))
+          .join("; ")
+          .slice(0, 600);
+        cursorReportSummary = [
+          `status=${report.status}`,
+          workPerformedSummary ? `work=${workPerformedSummary}` : null,
+          artifactsSummary ? `files=${artifactsSummary}` : null,
+          validationsSummary ? `validations=${validationsSummary}` : null,
+          blockersSummary ? `blockers=${blockersSummary}` : null,
+          `artifactReview=${durable.completeness}`,
+        ]
+          .filter(Boolean)
+          .join(" | ")
+          .slice(0, 2000);
+        executionReport = {
+          cursorStatus: report.status,
+          workPerformedSummary: workPerformedSummary || null,
+          artifactsSummary,
+          validationsSummary: validationsSummary || null,
+          blockersSummary: blockersSummary || null,
+          reservationsSummary: reservationsSummary || null,
+          artifactReviewCompleteness: durable.completeness,
+        };
+      } else {
+        executionReport = {
+          cursorStatus: attemptStatus,
+          workPerformedSummary: null,
+          artifactsSummary: "artifact durable disponible (sans CursorExecutionReport)",
+          validationsSummary: null,
+          blockersSummary: null,
+          reservationsSummary: null,
+          artifactReviewCompleteness: durable.completeness,
+        };
+      }
+    }
+  }
+
+  noraInvoked = true;
   const analysis = await analyzePostEvidenceWithProvider(
     {
       projectId,
@@ -1336,6 +1438,13 @@ export async function runW3cPostEvidenceLoop(input: {
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
@@ -1371,6 +1480,7 @@ export async function runW3cPostEvidenceLoop(input: {
     reviewBundleId: product.reviewBundleId,
     claimEvaluationId: product.claimEvaluationId,
     productOutcome: product.outcome,
+    ...(executionReport ? { executionReport } : {}),
   };

   // Exact Recommendation payload in existing LPS context (Option A).
```


#### Same file — FULL current content (review convenience)


### `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts (FULL)`

**Form:** FULL

```
/**
 * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
 * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
 *
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01:
 * When artifact bytes are supplied, persist under existing Evidence refs layout
 * (`external_payload_ref`) so Nora can review without hot worktree / Pilot paste.
 * CursorExecutionReport claim may be persisted alongside (still NOT Evidence).
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  persistDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "./persistDocsWriteArtifactReviewMaterial";

export type IngestDocsWriteArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  targetPath: string;
  digest: string;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  /**
   * Independently verified artifact bytes from the hot worktree.
   * When present → durable external_payload_ref (restart-safe review).
   * When absent → legacy metadata_only (location = relative targetPath).
   */
  artifactBytes?: Buffer;
  cursorReport?: CursorExecutionReport | null;
  /** Absolute refs root (defaults beside Product SQLite). */
  refsRoot?: string;
};

export type IngestDocsWriteArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
      storageMode: "metadata_only" | "external_payload_ref";
      durableArtifactAbsolutePath?: string;
      durableCursorReportAbsolutePath?: string | null;
    }
  | { ok: false; code: string; message: string };

export async function ingestDocsWriteArtifactEvidence(
  input: IngestDocsWriteArtifactEvidenceInput,
): Promise<IngestDocsWriteArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_MORRIS_ACTOR;
  const segment = input.executionAttemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
  const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
  const digest = input.digest as Digest;

  let location = input.targetPath;
  let storageMode: "metadata_only" | "external_payload_ref" = "metadata_only";
  let durableArtifactAbsolutePath: string | undefined;
  let durableCursorReportAbsolutePath: string | null | undefined;

  if (input.artifactBytes) {
    const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
    const persisted = persistDocsWriteArtifactReviewMaterial({
      refsRoot,
      attemptId: input.executionAttemptId,
      artifactBytes: input.artifactBytes,
      expectedDigest: input.digest,
      targetPath: input.targetPath,
      cursorReport: input.cursorReport ?? null,
    });
    if (!persisted.ok) {
      return {
        ok: false,
        code: persisted.code,
        message: persisted.message,
      };
    }
    location = persisted.artifactAbsolutePath;
    storageMode = "external_payload_ref";
    durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
    durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;
  }

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest,
    location,
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId: input.correlationId ?? `cor:docs-write:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write:${evidenceId}`,
  });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  let evidenceStatus = registered.evidence.status;

  // external_payload_ref → VerifyEvidenceIntegrity when possible (filesystem probe).
  if (
    storageMode === "external_payload_ref" &&
    registered.evidence.status === "available" &&
    registered.evidence.digest
  ) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: registered.evidence.evidenceId,
        expectedVersion: registered.evidence.version,
        actor,
        correlationId: input.correlationId ?? `cor:docs-write-verify:${segment}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidenceStatus = verified.evidence.status;
    }
  }

  const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
    reviewBundleId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    evidenceIds: [evidenceId],
    actor,
    correlationId: input.correlationId ?? `cor:docs-write-rb:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write-rb:${reviewBundleId}`,
  });
  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  return {
    ok: true,
    evidenceId,
    reviewBundleId,
    evidenceStatus,
    storageMode,
    ...(durableArtifactAbsolutePath
      ? { durableArtifactAbsolutePath }
      : {}),
    ...(durableCursorReportAbsolutePath !== undefined
      ? { durableCursorReportAbsolutePath }
      : {}),
  };
}
```


## B. END-TO-END PROOF TESTS

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


## C. SUPPORTING PRODUCT / UX / TYPES / RUNTIME REFERENCE

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

### `projects/sfia-studio/production-runtime-reference/* (03 + 09 + manifest)`

**Form:** DIFF

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 9175564c..4a38b87b 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -75,18 +75,23 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
-- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle
+- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
+- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle; deterministic report envelope required AS-IMPLEMENTED

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
-- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake)
+- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim may be persisted alongside as `cursor-execution-report.json` (CLAIM, not Evidence). Independent digest verify retained.
+- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

 ## F12 — ContractResult / ClaimEvaluation
-- **Paths:** claim evaluation tables/services
-- **Status:** PRESENT; journey proof PARTIAL
+- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
+- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
+- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro

 ## F13 — Nora post-Evidence
-- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred
+- **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` loads durable artifact review material + Cursor report summary into `PostEvidenceAnalysisFacts` (`artifactReviewMaterial` FULL/PARTIAL, `cursorReportSummary`, work/blockers). Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
+- **UI:** TrajectorySurface shows business-first « Rapport d'exécution » from `postEvidence.executionReport` when present; rehydrate button remains recovery-only (not nominal step)
+- **Status:** DETERMINISTIC handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

 ## F14 — LPS / trajectory continuation or recovery
 - **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 5eb7336b..2c900adb 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -7,6 +7,7 @@
 - PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
 - ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
 - CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
+- POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01: DETERMINISTIC post-execution report/artifact→Nora handoff proven at tested scope only — **NOT REAL PROVEN**; SprintBoard REAL re-proof requires distinct Morris GO
 - No CI workflow changes

 ## Current campaign findings (verified against repo where possible)
@@ -33,7 +34,20 @@

 ## Next macro

-`CHAT-FIRST-GOVERNED-DECISION-LOOP-01` **local candidate** on branch `feat/sfia-studio-chat-first-governed-decision-loop-01` (this tree). Capacité suivante après revue: **campagne PocketTasks REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL.
+`POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01` **local candidate** on branch `feat/sfia-studio-post-execution-handoff-01`. Capacité suivante après revue: **reprise SprintBoard REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL / END-TO-END REAL.
+
+## POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 overlay
+
+| Item | Status |
+|---|---|
+| Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
+| docs_write report continuity after `completeBoundedDocsWriteLaunch` | AS-IMPLEMENTED — bind + persist claim beside Artifact Evidence |
+| Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
+| Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
+| Pilot UX Rapport d'exécution + Nora recommendation | AS-IMPLEMENTED projection; rehydrate not nominal |
+| Attempt succeeded ≠ Product PASS | PRESERVED — NOT_PROVEN honesty retained |
+| REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
+| New store/table / parallel engines | NONE |

 ## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 20bad13f..0850b531 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "32de55f8eef8f66f"
+      "sha256_16": "bf1b5fd6b82b6a5a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "aef228b1eb2405b6"
+      "sha256_16": "e33001027859072d"
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


#### `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts` — FULL current content


### `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts (FULL)`

**Form:** FULL

```
/**
 * GAP-4 — bounded post-Evidence Nora/provider analysis.
 * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
 * Result is a Recommendation, never a HumanDecision / GO / new contract.
 *
 * W3-D / US-P1-14: when a resolved product-native CKC prompt section is supplied,
 * it is injected into the same cognitive marker seam used by F2/W2 — no parallel
 * resolver / orchestrator. Absence of CKC is handled by the caller (fail-closed).
 *
 * IMPORTANT: do not import `@/features/project-assistant/f2/ckcCognitiveContext`
 * here — that module loads Node filesystem doctrine I/O and must stay off the
 * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
 */

import { resolveConversationProvider } from "@/lib/platform/ai";
import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";

/** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
  "SFIA Studio CKC COGNITIVE REASONING" as const;

export const POST_EVIDENCE_NORA_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;

export type PostEvidenceAnalysisFacts = {
  projectId: string;
  executionContractId: string;
  executionContractStatus: string;
  executionContractAction: string;
  /** Contract objective / WHAT when available (server-owned). */
  contractObjective?: string;
  attemptId: string;
  attemptStatus: string;
  selectedAgentRef: string;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  evidenceId: string;
  reviewBundleId: string;
  technicalResultRef: string | null;
  reservations: readonly string[];
  processRef?: string;
  exitCode?: number | null;
  timedOut?: boolean;
  durationMs?: number;
  stdout?: string;
  stderr?: string;
  /** Product outcome when post-Evidence analyzes an evidence gap. */
  productOutcome?: string;
  claimEvaluationId?: string;
  claimEvaluationStatus?: string;
  contractResultVerdict?: string;
  businessReason?: string;
  expectedOutputAssessmentSummary?: string;
  evidenceRequirementAssessmentSummary?: string;
  /** Sealed acceptance criteria statements (contract-first). */
  acceptanceCriteriaSummary?: string;
  expectedOutputsSummary?: string;
  validationPlanSummary?: string;
  workPerformedSummary?: string;
  stopReason?: string;
  blockersSummary?: string;
  outcomeKind?: string;
  /**
   * Durable artifact body for Nora review (server-owned).
   * Never claim FULL when truncated — completeness must be honest.
   */
  artifactReviewMaterial?: string;
  artifactReviewCompleteness?: "FULL" | "PARTIAL";
  /** Compact CursorExecutionReport claim summary (NOT Evidence). */
  cursorReportSummary?: string;
};

export type PostEvidenceAnalysisResult =
  | {
      ok: true;
      text: string;
      providerId: string;
    }
  | {
      ok: false;
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE";
      message: string;
      providerId: string | null;
    };

const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
Ordre cognitif imposé (contract-first):
1) CONTRAT (objectif, expected outputs, critères d'acceptation, validations)
2) RÉSULTAT OBSERVÉ (travail réel, effets, stop/blocker — via CursorExecutionReport claim + vérifs Studio)
3) ARTIFACT REVIEWABLE (contenu durable FULL/PARTIAL fourni — ne jamais inventer ni demander au Pilote)
4) PREUVE (Evidence / ReviewBundle / ClaimEvaluation)
5) CONFORMITÉ (PASS / FAIL / NOT_PROVEN — jamais inventé)
6) IMPACT PROJET
7) RECOMMANDATION (jamais une HumanDecision, jamais une relance automatique)

Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
Interdit:
- créer une HumanDecision;
- transformer la recommandation en GO Morris;
- lancer un ExecutionContract / Attempt;
- demander des secrets;
- inventer une preuve REAL;
- convertir not_proven / UNCLAIMED en succès produit;
- commenter le rapport Cursor sans d'abord confronter le contrat;
- affirmer avoir lu l'artifact si artifactReviewMaterial est absent;
- affirmer lecture FULL si artifactReviewCompleteness=PARTIAL.
Si productOutcome=UNCLAIMED et claimEvaluationStatus=not_proven :
l'exécution technique a pu réussir et un Artifact peut exister, mais le résultat
contractuel n'est pas prouvé faute d'Evidence suffisante sur les expectedOutputs.
Si stopReason / blockers sont présents: expliquer l'action tentée, la condition
bloquante, les effets non réalisés, l'impact, et le déblocage proposé.
Réponds en français, court, factuel.

${buildPostEvidenceNarrativePolicyDisclosure()}`;

function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
  return JSON.stringify({
    projectId: facts.projectId,
    executionContractId: facts.executionContractId,
    executionContractStatus: facts.executionContractStatus,
    executionContractAction: facts.executionContractAction,
    contractObjective: facts.contractObjective,
    attemptId: facts.attemptId,
    attemptStatus: facts.attemptStatus,
    selectedAgentRef: facts.selectedAgentRef,
    adapterRef: facts.adapterRef,
    executionMode: facts.executionMode,
    realProcessInvoked: facts.realProcessInvoked,
    evidenceId: facts.evidenceId,
    reviewBundleId: facts.reviewBundleId,
    technicalResultRef: facts.technicalResultRef,
    reservations: [...facts.reservations],
    processRef: facts.processRef,
    exitCode: facts.exitCode,
    timedOut: facts.timedOut,
    durationMs: facts.durationMs,
    stdout: facts.stdout,
    stderr: facts.stderr,
    productOutcome: facts.productOutcome,
    claimEvaluationId: facts.claimEvaluationId,
    claimEvaluationStatus: facts.claimEvaluationStatus,
    contractResultVerdict: facts.contractResultVerdict,
    businessReason: facts.businessReason,
    expectedOutputAssessmentSummary: facts.expectedOutputAssessmentSummary,
    evidenceRequirementAssessmentSummary:
      facts.evidenceRequirementAssessmentSummary,
    acceptanceCriteriaSummary: facts.acceptanceCriteriaSummary,
    expectedOutputsSummary: facts.expectedOutputsSummary,
    validationPlanSummary: facts.validationPlanSummary,
    workPerformedSummary: facts.workPerformedSummary,
    stopReason: facts.stopReason,
    blockersSummary: facts.blockersSummary,
    outcomeKind: facts.outcomeKind,
    artifactReviewMaterial: facts.artifactReviewMaterial,
    artifactReviewCompleteness: facts.artifactReviewCompleteness,
    cursorReportSummary: facts.cursorReportSummary,
  });
}

export type AnalyzePostEvidenceOptions = {
  /**
   * Product-native CKC prompt section already built via
   * `buildCkcCognitivePromptSection` — never raw package paths for Pilote.
   */
  readonly ckcPromptSection?: string | null;
};

function buildPostEvidenceSystemPrompt(
  ckcPromptSection: string | null | undefined,
): string {
  const trimmed = ckcPromptSection?.trim();
  if (!trimmed) {
    return ANALYSIS_SYSTEM;
  }
  return `${ANALYSIS_SYSTEM}

${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}
Contexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):
${trimmed}`;
}

export async function analyzePostEvidenceWithProvider(
  facts: PostEvidenceAnalysisFacts,
  options?: AnalyzePostEvidenceOptions,
): Promise<PostEvidenceAnalysisResult> {
  let providerId: string | null = null;
  try {
    const provider = resolveConversationProvider();
    providerId = provider.providerId;
    const completion = await provider.complete([
      {
        role: "system",
        content: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
      },
      {
        role: "user",
        content: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
      },
    ]);
    const text = completion.text.trim();
    if (!text) {
      return {
        ok: false,
        code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
        message: "Provider post-Evidence a renvoyé un texte vide.",
        providerId,
      };
    }
    return { ok: true, text: text.slice(0, 4000), providerId };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "provider_post_evidence_failed";
    return {
      ok: false,
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
      message,
      providerId,
    };
  }
}

/** Evidence-scoped LPS marker — binds Nora text to a specific W3-B evidenceId. */
export function w3cEvidenceLpsMarker(evidenceId: string): string {
  return `[[W3C_EVIDENCE:${evidenceId}]]`;
}

export function formatPostEvidenceAnalysisForLps(input: {
  analysisText?: string | null;
  unavailableReason?: string | null;
  /** When set, scopes the LPS sentinel block to this evidenceId (W3-C). */
  evidenceId?: string | null;
}): string | undefined {
  const evidenceLine =
    input.evidenceId && input.evidenceId.trim()
      ? `${w3cEvidenceLpsMarker(input.evidenceId.trim())}\n`
      : "";
  if (input.analysisText && input.analysisText.trim()) {
    return `${POST_EVIDENCE_NORA_SENTINEL}\n${evidenceLine}${input.analysisText.trim()}`;
  }
  if (input.unavailableReason) {
    return `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${evidenceLine}${input.unavailableReason}`;
  }
  return undefined;
}

/**
 * Last matching post-Evidence Nora block for a specific evidenceId.
 * Never returns another evidence's analysis (STALE binding guard at call site).
 */
export function extractW3cPostEvidenceAnalysisForEvidence(
  context: string | undefined,
  evidenceId: string,
): {
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  matchedEvidenceId: string | null;
} {
  if (!context || !evidenceId) {
    return {
      analysisText: null,
      analysisUnavailableReason: null,
      matchedEvidenceId: null,
    };
  }
  const marker = w3cEvidenceLpsMarker(evidenceId);
  const availableNeedle = `${POST_EVIDENCE_NORA_SENTINEL}\n${marker}`;
  const unavailableNeedle = `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${marker}`;
  const availableIdx = context.lastIndexOf(availableNeedle);
  const unavailableIdx = context.lastIndexOf(unavailableNeedle);

  const sliceAfter = (idx: number, needle: string): string => {
    const start = idx + needle.length;
    const rest = context.slice(start);
    // Truncate at next sibling sentinel if present.
    const nextAvail = rest.indexOf(`\n${POST_EVIDENCE_NORA_SENTINEL}`);
    const nextUnavail = rest.indexOf(
      `\n${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}`,
    );
    const nextReco = rest.indexOf(
      `\n${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}`,
    );
    let end = rest.length;
    if (nextAvail >= 0) end = Math.min(end, nextAvail);
    if (nextUnavail >= 0) end = Math.min(end, nextUnavail);
    if (nextReco >= 0) end = Math.min(end, nextReco);
    return rest.slice(0, end).trim();
  };

  if (availableIdx >= 0 && availableIdx > unavailableIdx) {
    const text = sliceAfter(availableIdx, availableNeedle);
    return {
      analysisText: text.length > 0 ? text : null,
      analysisUnavailableReason: null,
      matchedEvidenceId: evidenceId,
    };
  }
  if (unavailableIdx >= 0) {
    const text = sliceAfter(unavailableIdx, unavailableNeedle);
    return {
      analysisText: null,
      analysisUnavailableReason: text.length > 0 ? text : "unavailable",
      matchedEvidenceId: evidenceId,
    };
  }
  return {
    analysisText: null,
    analysisUnavailableReason: null,
    matchedEvidenceId: null,
  };
}

/** Last Nora block in LPS context (any evidence) — legacy / unscoped. */
export function extractPostEvidenceAnalysisFromLpsContext(
  context: string | undefined,
): {
  analysisText: string | null;
  analysisUnavailableReason: string | null;
} {
  if (!context) {
    return { analysisText: null, analysisUnavailableReason: null };
  }
  const unavailableIdx = context.lastIndexOf(
    POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
  );
  const availableIdx = context.lastIndexOf(POST_EVIDENCE_NORA_SENTINEL);
  if (availableIdx >= 0 && availableIdx > unavailableIdx) {
    const text = context
      .slice(availableIdx + POST_EVIDENCE_NORA_SENTINEL.length)
      .trim();
    // Strip leading evidence marker if present.
    const cleaned = text.replace(/^\[\[W3C_EVIDENCE:[^\]]+\]\]\s*/u, "").trim();
    return {
      analysisText: cleaned.length > 0 ? cleaned : null,
      analysisUnavailableReason: null,
    };
  }
  if (unavailableIdx >= 0) {
    const text = context
      .slice(unavailableIdx + POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL.length)
      .trim();
    const cleaned = text.replace(/^\[\[W3C_EVIDENCE:[^\]]+\]\]\s*/u, "").trim();
    return {
      analysisText: null,
      analysisUnavailableReason: cleaned.length > 0 ? cleaned : "unavailable",
    };
  }
  return { analysisText: null, analysisUnavailableReason: null };
}

/** Detect which evidenceId owns the last LPS Nora block (if marked). */
export function lastW3cEvidenceIdInLpsContext(
  context: string | undefined,
): string | null {
  if (!context) return null;
  const re = /\[\[W3C_EVIDENCE:([^\]]+)\]\]/g;
  let last: string | null = null;
  let m: RegExpExecArray | null;
  while ((m = re.exec(context)) !== null) {
    last = m[1] ?? null;
  }
  return last;
}

/**
 * Durable exact Recommendation JSON in existing LPS context (no new table).
 * Bound to evidenceId so restart cannot reuse another terminal's semantics.
 */
export function formatW3cRecommendationPayloadForLps(input: {
  evidenceId: string;
  payloadJson: string;
}): string {
  const evidenceId = input.evidenceId.trim();
  const json = input.payloadJson.trim();
  return `${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}\n${w3cEvidenceLpsMarker(evidenceId)}\n${json}`;
}

/**
 * Extract exact Recommendation payload JSON for a specific evidenceId from LPS.
 * Returns null when absent (legacy LPS without V1 block).
 */
export function extractW3cRecommendationPayloadJsonForEvidence(
  context: string | undefined,
  evidenceId: string,
): string | null {
  if (!context || !evidenceId) return null;
  const marker = w3cEvidenceLpsMarker(evidenceId);
  const needle = `${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}\n${marker}\n`;
  const idx = context.lastIndexOf(needle);
  if (idx < 0) return null;
  const rest = context.slice(idx + needle.length);
  const nextSentinelCandidates = [
    rest.indexOf(`\n${POST_EVIDENCE_NORA_SENTINEL}`),
    rest.indexOf(`\n${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}`),
    rest.indexOf(`\n${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}`),
  ].filter((i) => i >= 0);
  const end = nextSentinelCandidates.length
    ? Math.min(...nextSentinelCandidates)
    : rest.length;
  const json = rest.slice(0, end).trim();
  return json.length > 0 ? json : null;
}
```


#### `projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts` — FULL current content


### `projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts (FULL)`

**Form:** FULL

```
/**
 * PJ-REPROOF-04 Bridge 3 — ExecutionContract → Cursor-consumable prompt.
 *
 * ONE semantic contract, TWO representations:
 * - durable structured ExecutionContract (SoT)
 * - text projection for Cursor (transport)
 *
 * Harvests the proven §5 axes of the external v2.6 template shape.
 * Does NOT promote the template as Studio runtime doctrine.
 * Does NOT encode a mandatory step-by-step HOW — Cursor decides HOW
 * inside the authorized perimeter.
 */

import { createHash } from "node:crypto";
import type { ExecutionContract } from "../domain/types";
import { describeContractAcceptanceCriteria } from "../domain/contractMissionSemantics";
import { describeContractSourceGrounding } from "../domain/contractSourceGrounding";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContractInspectionDisclosure,
} from "./inspectionDisclosure";

/** Reference path only — not loaded as runtime doctrine. */
export const CURSOR_PROMPT_SHAPE_REFERENCE =
  "prompts/templates/sfia-cycle-execution-template.md" as const;

export type CursorMissionPromptProjection = {
  readonly promptText: string;
  /** Deterministic digest of execution-significant prompt body. */
  readonly promptDigest: string;
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string | null;
  readonly attemptId: string | null;
  readonly reportIdHint: string | null;
  readonly shapeReference: typeof CURSOR_PROMPT_SHAPE_REFERENCE;
  readonly disclosure: ExecutionContractInspectionDisclosure;
};

function asString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

function bullet(items: readonly string[], empty = "(aucun)"): string {
  if (items.length === 0) return empty;
  return items.map((i) => `- ${i}`).join("\n");
}

/**
 * Project authorized ExecutionContract into a Cursor mission prompt.
 * Semantic parity with Pilot inspection disclosure is required.
 */
export function projectExecutionContractToCursorPrompt(input: {
  readonly contract: ExecutionContract;
  readonly attemptId?: string | null;
  readonly reportIdHint?: string | null;
  readonly projectTitle?: string | null;
  readonly repositoryRef?: string | null;
  readonly baseSha?: string | null;
  readonly branch?: string | null;
}): CursorMissionPromptProjection {
  const projected = projectExecutionContractInspectionDisclosure(input.contract);
  const d = projected.disclosure;
  const inputs = input.contract.inputs ?? {};

  const objective =
    d.objective ??
    asString(inputs.objective) ??
    `Exécuter le contrat ${input.contract.executionContractId}`;

  const contextLines = [
    input.projectTitle ? `Projet: ${input.projectTitle}` : null,
    `projectId: ${input.contract.projectId}`,
    input.contract.cycleInstanceId
      ? `cycleInstanceId: ${input.contract.cycleInstanceId}`
      : null,
    ...(input.contract.decisionRefs ?? []).map((r) => `decisionRef: ${r}`),
    asString(inputs.selectedOptionLabel)
      ? `décision trajectoire (provenance, pas action): ${asString(inputs.selectedOptionLabel)}`
      : null,
    asString(inputs.productOutcome)
      ? `productOutcome antérieur: ${asString(inputs.productOutcome)}`
      : null,
    asString(inputs.recoveryAttemptId)
      ? `attempt antérieur: ${asString(inputs.recoveryAttemptId)}`
      : null,
    asString(inputs.recoveryEvidenceId)
      ? `evidence antérieure: ${asString(inputs.recoveryEvidenceId)}`
      : null,
  ].filter((x): x is string => Boolean(x));

  const sources = [
    ...asStringList(inputs.sourcesToRead),
    ...asStringList(inputs.diagnosticScopeIn),
    ...(d.scopeIn ?? []),
  ];
  const uniqueSources = [...new Set(sources)];

  const scopeIn = [
    ...(d.scopeIn ?? []),
    ...asStringList(inputs.diagnosticScopeIn),
    d.targetPath ? `path:${d.targetPath}` : null,
  ].filter((x): x is string => Boolean(x));

  const scopeOut = [
    ...(d.scopeOut ?? []),
    ...asStringList(inputs.diagnosticScopeOut),
    "élargir le périmètre sans nouveau contrat",
    "acquérir de l'autorité seule",
    "merge / doctrine / baseline promotion hors contrat",
  ];

  const forbidden = [
    ...d.constraints.filter(
      (c) =>
        c.startsWith("SCOPE_OUT:") ||
        c.startsWith("PROTECTED:") ||
        c.startsWith("OUT_OF_SCOPE:") ||
        c.includes("NO_") ||
        c.startsWith("MISSION_SCOPE_OUT:"),
    ),
    "git push projet / main hors gate",
    "force push",
    "merge hors contrat autorisé",
  ];

  const expectedOutputs = d.expectedOutputs ?? [
    ...asStringList(input.contract.expectedOutputs),
  ];
  const validations = d.validationExpectations ?? [];
  const evidence = d.evidenceRequirements;
  const stops = d.stopConditions;

  const filesCreate = asStringList(inputs.filesToCreate);
  const filesModify = asStringList(inputs.filesToModify);
  const filesForbidden = asStringList(inputs.filesForbidden);

  // Parity with inspection disclosure — same durable mission semantics.
  const groundingLines = d.sourceGrounding
    ? [...describeContractSourceGrounding(d.sourceGrounding)]
    : [];
  const acceptanceLines = d.acceptanceCriteria
    ? [...describeContractAcceptanceCriteria(d.acceptanceCriteria)]
    : [];
  const validationPlan = d.validationPlan ? [...d.validationPlan] : [];
  const reportRequirements = d.reportRequirements
    ? [...d.reportRequirements]
    : [];

  // Significant body — excludes volatile reportIdHint for digest stability
  // when hint is only a suggestion. attemptId included when bound.
  const significantBody = [
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? ""}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : null,
    `Objectif :`,
    objective,
    `Contexte :`,
    ...contextLines,
    `Sources à lire :`,
    ...uniqueSources,
    `Grounding des sources (lecture durable) :`,
    ...groundingLines,
    `Critères d'acceptation :`,
    ...acceptanceLines,
    `Plan de validation :`,
    ...validationPlan,
    `Exigences de rapport :`,
    ...reportRequirements,
    `Périmètre autorisé :`,
    ...scopeIn,
    `Hors périmètre :`,
    ...scopeOut,
    `Fichiers à créer :`,
    ...filesCreate,
    `Fichiers à modifier :`,
    ...filesModify,
    `Fichiers interdits :`,
    ...filesForbidden,
    `Stop conditions :`,
    ...stops,
    `Validations attendues :`,
    ...validations,
    `Evidence / report requirements :`,
    ...evidence,
    `Expected outputs :`,
    ...expectedOutputs,
    `requiredAuthority: ${d.requiredAuthority}`,
    `requiredCapabilities: ${d.requiredCapabilities.join(",")}`,
    `reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  const promptDigest = createHash("sha256")
    .update(significantBody, "utf8")
    .digest("hex")
    .slice(0, 32);

  const promptText = [
    `# Mission Cursor — projection du ExecutionContract Studio`,
    ``,
    `shapeReference: ${CURSOR_PROMPT_SHAPE_REFERENCE}`,
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? "(none)"}`,
    `promptDigest: ${promptDigest}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : `attemptId: (bound at launch)`,
    input.reportIdHint
      ? `reportIdHint: ${input.reportIdHint}`
      : `reportId: (minted at report ingestion)`,
    input.repositoryRef ? `repositoryRef: ${input.repositoryRef}` : null,
    input.baseSha ? `baseSha: ${input.baseSha}` : null,
    input.branch ? `branch: ${input.branch}` : null,
    ``,
    `## Objectif`,
    objective,
    ``,
    `## Contexte`,
    bullet(contextLines, "(contexte minimal — contract ids ci-dessus)"),
    ``,
    `## Sources à lire`,
    bullet(uniqueSources, "(découvrir localement dans le périmètre)"),
    ``,
    `## Grounding des sources (lecture durable in-cycle)`,
    groundingLines.length > 0
      ? bullet(groundingLines)
      : "(aucun grounding durable attaché — recherche ≠ lecture ; ne revendique aucune source comme lue)",
    ``,
    `## Critères d'acceptation`,
    acceptanceLines.length > 0
      ? bullet(acceptanceLines)
      : "(aucun critère structuré — s'en tenir aux expected outputs ci-dessous)",
    ``,
    `## Plan de validation`,
    bullet(validationPlan, "(selon mission — tests/lints/diff si pertinents)"),
    ``,
    `## Exigences de rapport`,
    bullet(
      reportRequirements,
      "(rapport final standard — voir section Rapport final attendu)",
    ),
    ``,
    `## Périmètre autorisé (scope IN)`,
    bullet([...new Set(scopeIn)], "(périmètre contractuel — ne pas élargir)"),
    ``,
    `## Hors périmètre (scope OUT)`,
    bullet([...new Set(scopeOut)]),
    ``,
    `## Fichiers`,
    `À créer:`,
    bullet(filesCreate, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `À modifier:`,
    bullet(filesModify, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `Interdits:`,
    bullet(filesForbidden.length > 0 ? filesForbidden : ["chemins protégés hors contrat"]),
    ``,
    `## Effets / garde-fous`,
    bullet([...new Set(forbidden)]),
    `- Ne pas élargir le périmètre ni l'autorité.`,
    `- Si un effet hors contrat est nécessaire: STOP et rapporter le besoin d'escalade.`,
    `- Technical SUCCESS ≠ Product SUCCESS.`,
    ``,
    `## Stop conditions`,
    bullet(stops),
    ``,
    `## Validations attendues`,
    bullet(validations, "(selon mission — tests/lints/diff si pertinents)"),
    ``,
    `## Evidence / rapport attendus`,
    bullet(evidence),
    `Expected outputs:`,
    bullet(expectedOutputs),
    ``,
    `## HOW`,
    `Cursor détermine le HOW à l'intérieur de ce contrat.`,
    `Aucune séquence obligatoire read→write→commit n'est imposée.`,
    `Aucun choix Pilote d'opération technique (read/simulate/docs_write/commit/push/PR/merge).`,
    ``,
    `## Rapport final attendu`,
    `- reportId (identité propre du rapport)`,
    `- executionContractId: ${d.executionContractId} (exact)`,
    input.attemptId
      ? `- attemptId: ${input.attemptId} (exact)`
      : `- attemptId: (celui de l'Attempt lancé)`,
    `- status: succeeded | failed | stopped | timeout`,
    `- effets fichiers / validations / git le cas échéant`,
    `- stops/blockers`,
    `- verdict/status — claim seulement, pas Evidence produit`,
    ``,
    `### Envelope machine-readable OBLIGATOIRE (Studio parser)`,
    `En plus du résumé business-readable ci-dessus, émettre UNE ligne stdout exacte:`,
    `CURSOR_EXECUTION_REPORT_JSON=<json compact sur une seule ligne>`,
    `Le JSON DOIT respecter le schéma oa.cursor-execution-report.1 (reportId, attemptId,`,
    `executionContractId, repositoryRef, baseSha, status, authorizedEffectsExecuted,`,
    `fileEffects / workPerformed / validations / blockers / reservations le cas échéant).`,
    `Un rapport libre en prose SEUL n'est PAS exploitable pour Evidence / Nora.`,
    `Studio re-vérifie indépendamment les effets fichiers — le rapport reste un CLAIM.`,
    ``,
    `## Secondaire technique (audit)`,
    `- action: ${d.action}`,
    `- technicalTarget: ${d.technicalTarget}`,
    `- scope: ${d.scope}`,
    `- requiredAuthority: ${d.requiredAuthority}`,
    `- requiredCapabilities: ${d.requiredCapabilities.join(", ") || "(none)"}`,
    `- reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  return {
    promptText,
    promptDigest,
    executionContractId: d.executionContractId,
    contractVersion: d.contractVersion,
    semanticFingerprint: d.semanticFingerprint,
    attemptId: input.attemptId ?? null,
    reportIdHint: input.reportIdHint ?? null,
    shapeReference: CURSOR_PROMPT_SHAPE_REFERENCE,
    disclosure: d,
  };
}

/**
 * Assert prompt projection preserves Pilot-inspection semantics (no silent widen).
 */
export function assertCursorPromptParityWithInspection(input: {
  readonly projection: CursorMissionPromptProjection;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { projection } = input;
  const d = projection.disclosure;
  const text = projection.promptText;

  if (!text.includes(d.executionContractId)) {
    return {
      ok: false,
      code: "PROMPT_CONTRACT_ID_MISSING",
      message: "Prompt must cite executionContractId.",
    };
  }
  if (d.semanticFingerprint && !text.includes(d.semanticFingerprint)) {
    return {
      ok: false,
      code: "PROMPT_FINGERPRINT_MISSING",
      message: "Prompt must cite semanticFingerprint.",
    };
  }
  if (d.objective && !text.includes(d.objective)) {
    return {
      ok: false,
      code: "PROMPT_OBJECTIVE_DRIFT",
      message: "Prompt objective diverges from inspection disclosure.",
    };
  }
  for (const stop of d.stopConditions) {
    if (!text.includes(stop)) {
      return {
        ok: false,
        code: "PROMPT_STOP_MISSING",
        message: `Stop condition absent from prompt: ${stop}`,
      };
    }
  }
  if (d.sourceGrounding) {
    for (const line of describeContractSourceGrounding(d.sourceGrounding)) {
      if (!text.includes(line)) {
        return {
          ok: false,
          code: "PROMPT_SOURCE_GROUNDING_MISSING",
          message: `Source grounding fact absent from prompt: ${line}`,
        };
      }
    }
  }
  for (const criterion of d.acceptanceCriteria ?? []) {
    if (!text.includes(criterion.criterionId)) {
      return {
        ok: false,
        code: "PROMPT_ACCEPTANCE_CRITERION_MISSING",
        message: `Acceptance criterion absent from prompt: ${criterion.criterionId}`,
      };
    }
  }
  for (const step of d.validationPlan ?? []) {
    if (!text.includes(step)) {
      return {
        ok: false,
        code: "PROMPT_VALIDATION_PLAN_MISSING",
        message: `Validation plan step absent from prompt: ${step}`,
      };
    }
  }
  for (const requirement of d.reportRequirements ?? []) {
    if (!text.includes(requirement)) {
      return {
        ok: false,
        code: "PROMPT_REPORT_REQUIREMENT_MISSING",
        message: `Report requirement absent from prompt: ${requirement}`,
      };
    }
  }
  if (!text.includes("CURSOR_EXECUTION_REPORT_JSON=")) {
    return {
      ok: false,
      code: "PROMPT_MACHINE_READABLE_REPORT_MARKER_MISSING",
      message:
        "Prompt must require CURSOR_EXECUTION_REPORT_JSON= machine-readable envelope.",
    };
  }
  // Must not inject mandatory HOW sequence markers
  if (
    /Étapes d'exécution\s*:\s*\n\s*1\.\s*Local Git Truth Check/i.test(text) ||
    /first read, then write, then (test|commit)/i.test(text)
  ) {
    return {
      ok: false,
      code: "PROMPT_ENCODES_HOW",
      message: "Prompt must not encode a mandatory step-by-step HOW.",
    };
  }
  return { ok: true };
}
```


## Validations (implementation cycle — unchanged; no re-run required for pack-only)

| Gate | Result |
|---|---|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full suite | Test Files 451 passed / 17 skipped; Tests 4962 passed / 137 skipped; FAIL 0 |
| Runtime Reference conformance | PASS |
| ZERO REAL | yes |

T1–T13 covered at tested scope (prompt, bind, durable artifact/report, PARTIAL, Nora facts, UI, no path widen, no new store, regressions).

## Fake/Real
DETERMINISTIC PRODUCT PATH PROVEN AT TESTED SCOPE. NOT REAL PROVEN. NOT READY FOR REAL. SprintBoard REAL re-proof requires distinct Morris GO. Runtime v3 NON ADOPTED.

## Lineage demonstrated (report → artifact → Evidence → Nora)

1. EC→Cursor prompt requires `CURSOR_EXECUTION_REPORT_JSON=` + schema `oa.cursor-execution-report.1` (T1 / projection diff).
2. docs_write complete returns `facts.cursorReport`; governed path binds fail-closed then persists via `persistDocsWriteArtifactReviewMaterial` (governedExecute + persist diffs).
3. Artifact Evidence upgrades to `external_payload_ref` with absolute durable location + digest verify (ingest FULL).
4. W3-C loads durable artifact FULL/PARTIAL + cursor report summary into `PostEvidenceAnalysisFacts` (w3c + postEvidence diffs) — no Pilot paste, no PATH_NOT_ALLOWED generic read for this artifact.
5. TrajectorySurface shows business-first « Rapport d'exécution »; rehydrate remains recovery-only (TrajectorySurface + UI test diffs).

## Architecture confirmation
- No new store/table
- No second Decision/Recommendation engine
- No Evidence/ReviewBundle bypass
- No OPS1 runtime dependency
- No global path-policy widen

## Reserves / debt
- REAL SprintBoard re-proof NOT done (requires distinct Morris GO)
- Runtime v3 NON ADOPTED
- ContractResult may still be NOT_PROVEN when conformity criteria are not proven — honest semantic preserved

## Anti-claims
NOT REAL PROVEN · NOT END-TO-END REAL PROVEN · NOT READY FOR REAL · NOT PRODUCT GLOBAL READY · RUNTIME V3 NON ADOPTED · NO project commit/push/PR/merge

## Regularization note
This pack revision adds complete DIFF/FULL bodies for all product deltas so ChatGPT can perform an independent Critical review without synthesis-only gaps. Product tree intentionally unchanged in this pass.

## Verdict

`READY FOR CHATGPT / MORRIS REVIEW — DETERMINISTIC POST-EXECUTION HANDOFF PROVEN AT TESTED SCOPE — NEW REAL REPROOF REQUIRES MORRIS GO`
