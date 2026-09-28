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
