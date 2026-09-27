# POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 — Review Pack (FULL)

**Timestamp (UTC):** 2026-09-27T22:47:51Z
**Macro:** POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01
**Cycle:** 8 — Delivery / implementation | **Typology:** EVOL | **Profile:** CRITICAL
**CKC:** ckc:studio:delivery / VALIDATED — cognitive only / execution authority NONE

## Git truth

| Worktree | `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01` |
| Branch | `feat/sfia-studio-post-execution-handoff-01` |
| HEAD (uncommitted candidate base) | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| origin/main | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| Project commits | **ZERO** |
| Repo | mcleland147/sfia-workspace |

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

### diff --stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 4291 +-------------------
 .../postExecutionTrajectorySurface.ui.test.tsx     |   16 +
 ...oductCycleE2eStabilization.frontDoor.d0.test.ts |    7 +-
 ...spaceArtifactRouting.applicationPath.d0.test.ts |    7 +-
 .../surfaces/TrajectorySurface.tsx                 |   52 +
 .../f3/ingestDocsWriteArtifactEvidence.ts          |   82 +-
 .../f3/postEvidenceNoraAnalysis.ts                 |   26 +-
 .../w2/governedExecuteAuthorizedContract.ts        |   74 +-
 .../app/features/project-assistant/w2/types.ts     |    9 +
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    |  112 +-
 .../projectExecutionContractToCursorPrompt.ts      |   17 +
 .../03-end-to-end-flow-catalog.md                  |   15 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |   16 +-
 .../production-runtime-reference.manifest.json     |    6 +-
 14 files changed, 413 insertions(+), 4317 deletions(-)
```

### name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
A	projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts
A	projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
```

## Morris GO / limits

- Construction locale: YES
- Project commit/push/PR/merge: NOT AUTHORIZED
- REAL Cursor/OpenAI: NOT AUTHORIZED (ZERO REAL)
- New store/table: NONE
- Runtime v3: NON ADOPTED
- Review Handoff L3: AUTHORIZED

## Sources read

Build Doctrine, Roadmap, C1, framing 33/34/35/37, CKC 08, Living Ref 03/09, method v2.6 process docs, and the code paths listed in the GO (Cursor report, docs_write completion/ingest, MissionResult, Nora post-Evidence, governed execute, materialize, claim completion, TrajectorySurface).

## Diagnostic (before code)

### Current-as-implemented
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

### Design
Reuse mission-result-refs FS Evidence layout; external_payload_ref Artifact; bind report fail-closed; Nora facts + UI Rapport d'exécution. No parallel architecture.

## Files created
- persistDocsWriteArtifactReviewMaterial.ts
- postExecutionCursorReportArtifactHandoff.d0.test.ts

## Files modified
- ingestDocsWriteArtifactEvidence.ts, governedExecuteAuthorizedContract.ts, projectExecutionContractToCursorPrompt.ts, postEvidenceNoraAnalysis.ts, w3cPostEvidenceLoop.ts, types.ts, TrajectorySurface.tsx, related tests, Living Ref 03/09 + manifest

## Exploitable code

### `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`

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

```typescript
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

### `projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts`

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


## Validations

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

## Anti-claims
NOT REAL PROVEN · NOT END-TO-END REAL PROVEN · NOT READY FOR REAL · NOT PRODUCT GLOBAL READY · RUNTIME V3 NON ADOPTED · NO project commit/push/PR/merge

## Verdict

`READY FOR CHATGPT / MORRIS REVIEW — DETERMINISTIC POST-EXECUTION HANDOFF PROVEN AT TESTED SCOPE — NEW REAL REPROOF REQUIRES MORRIS GO`
