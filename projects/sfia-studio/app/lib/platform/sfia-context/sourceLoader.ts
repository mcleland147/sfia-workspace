/**
 * SFIA Canonical Source Loader — read-only, closed path allowlist.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  SFIA_CANONICAL_CORE_PATHS,
  SFIA_CORE_SOURCE_ROLES,
  SFIA_CURSOR_TEMPLATE_PATH,
  SFIA_PROJECT_CONTEXT_PATHS,
  type SfiaCanonicalSourceRole,
} from "./canonicalPaths";
import type { SfiaSourceDocumentRef } from "./types";

const MAX_SOURCE_BYTES = 400_000;
const EXCERPT_CHARS = 800;

const ALLOWED = new Set<string>([
  ...SFIA_CANONICAL_CORE_PATHS,
  ...SFIA_PROJECT_CONTEXT_PATHS,
]);

export class SfiaSourceLoadError extends Error {
  constructor(
    message: string,
    readonly code:
      | "PATH_NOT_ALLOWED"
      | "PATH_NOT_FOUND"
      | "TOO_LARGE"
      | "READ_FAILED",
  ) {
    super(message);
    this.name = "SfiaSourceLoadError";
  }
}

function digestContent(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

function gitBlobSha(
  workspaceRoot: string,
  relativePath: string,
): string | null {
  try {
    return execFileSync("git", ["rev-parse", `HEAD:${relativePath}`], {
      cwd: workspaceRoot,
      encoding: "utf8",
      timeout: 5000,
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch {
    // Untracked / working-tree-only file
    return null;
  }
}

function assertAllowed(relativePath: string): void {
  if (!ALLOWED.has(relativePath) && relativePath !== SFIA_CURSOR_TEMPLATE_PATH) {
    throw new SfiaSourceLoadError(
      `Source hors allowlist: ${relativePath}`,
      "PATH_NOT_ALLOWED",
    );
  }
}

export function loadCanonicalSource(
  workspaceRoot: string,
  relativePath: string,
  role?: SfiaCanonicalSourceRole | "project_doc" | "handoff",
): SfiaSourceDocumentRef {
  assertAllowed(relativePath);
  const abs = path.resolve(workspaceRoot, relativePath);
  const root = path.resolve(workspaceRoot);
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    throw new SfiaSourceLoadError(
      "Chemin hors repository.",
      "PATH_NOT_ALLOWED",
    );
  }
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    throw new SfiaSourceLoadError(
      `Source absente: ${relativePath}`,
      "PATH_NOT_FOUND",
    );
  }
  const buf = fs.readFileSync(abs);
  if (buf.length > MAX_SOURCE_BYTES) {
    throw new SfiaSourceLoadError(
      `Source trop volumineuse: ${relativePath}`,
      "TOO_LARGE",
    );
  }
  if (buf.includes(0)) {
    throw new SfiaSourceLoadError(
      `Source binaire refusée: ${relativePath}`,
      "READ_FAILED",
    );
  }
  const content = buf.toString("utf8");
  const resolvedRole =
    role ??
    SFIA_CORE_SOURCE_ROLES[
      relativePath as (typeof SFIA_CANONICAL_CORE_PATHS)[number]
    ] ??
    "project_doc";
  return {
    path: relativePath,
    digest: digestContent(content),
    blobSha: gitBlobSha(workspaceRoot, relativePath),
    role: resolvedRole,
    sizeBytes: buf.length,
    readAt: new Date().toISOString(),
    summaryExcerpt: content.slice(0, EXCERPT_CHARS).replace(/\s+/g, " ").trim(),
  };
}

export function loadCanonicalCoreSources(
  workspaceRoot: string,
): SfiaSourceDocumentRef[] {
  return SFIA_CANONICAL_CORE_PATHS.map((p) =>
    loadCanonicalSource(workspaceRoot, p),
  );
}

export function loadProjectContextSources(
  workspaceRoot: string,
): SfiaSourceDocumentRef[] {
  const out: SfiaSourceDocumentRef[] = [];
  for (const p of SFIA_PROJECT_CONTEXT_PATHS) {
    try {
      out.push(loadCanonicalSource(workspaceRoot, p, "project_doc"));
    } catch (error) {
      if (
        error instanceof SfiaSourceLoadError &&
        error.code === "PATH_NOT_FOUND"
      ) {
        continue;
      }
      throw error;
    }
  }
  return out;
}

export function loadCursorTemplateSource(
  workspaceRoot: string,
): SfiaSourceDocumentRef & { content: string } {
  const ref = loadCanonicalSource(
    workspaceRoot,
    SFIA_CURSOR_TEMPLATE_PATH,
    "execution_template",
  );
  const content = fs.readFileSync(
    path.join(workspaceRoot, SFIA_CURSOR_TEMPLATE_PATH),
    "utf8",
  );
  return { ...ref, content };
}

export function isCanonicalPathAllowed(relativePath: string): boolean {
  return ALLOWED.has(relativePath);
}
