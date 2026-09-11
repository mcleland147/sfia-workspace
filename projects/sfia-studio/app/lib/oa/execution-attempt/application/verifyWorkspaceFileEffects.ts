/**
 * Independent workspace file-effect verification (D-GCEC-11/12).
 * Studio READS the managed worktree — does not trust Cursor stdout for touched files.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import type { CursorExecutionReport } from "../domain/cursorExecutionReport";

export type WorkspaceFileVerificationResult =
  | {
      ok: true;
      touchedFiles: string[];
      targetPath: string;
      digest: string;
      unexpectedFiles: string[];
    }
  | {
      ok: false;
      reason: string;
      touchedFiles: string[];
      unexpectedFiles: string[];
    };

function normalizeRel(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function parseNameStatus(porcelainOrNameStatus: string): {
  path: string;
  status: string;
}[] {
  const out: { path: string; status: string }[] = [];
  for (const line of porcelainOrNameStatus.split("\n")) {
    const t = line.trimEnd();
    if (!t) continue;
    // porcelain: XY path  OR name-status: A\tpath
    if (t.includes("\t")) {
      const [st, p] = t.split("\t");
      if (p) out.push({ path: normalizeRel(p), status: (st ?? "?").trim() });
      continue;
    }
    if (t.length >= 3) {
      const st = t.slice(0, 2).trim();
      const p = t.slice(3).trim();
      if (p) out.push({ path: normalizeRel(p), status: st || "?" });
    }
  }
  return out;
}

/**
 * Verify docs-write workspace independently of Cursor report claims.
 */
export async function verifyWorkspaceFileEffects(input: {
  worktreePath: string;
  pathAllowlist: readonly string[];
  targetPath: string;
  /** Optional Cursor claim — compared, never trusted alone. */
  report?: CursorExecutionReport | null;
  statusDiffPort?: LocalGitStatusDiffPort;
  /** Injectable name-status text for tests without git. */
  nameStatusText?: string;
}): Promise<WorkspaceFileVerificationResult> {
  const allow = new Set(input.pathAllowlist.map(normalizeRel));
  const targetPath = normalizeRel(input.targetPath);

  let nameStatus = input.nameStatusText ?? "";
  if (!nameStatus && input.statusDiffPort) {
    const diff = await input.statusDiffPort.statusDiff({
      repoPath: input.worktreePath,
      pathspecs: [...allow],
    });
    nameStatus = diff.statusPorcelain || diff.diffStat;
  }

  const changed = parseNameStatus(nameStatus);
  const touchedFiles = changed.map((c) => c.path);
  const unexpectedFiles = touchedFiles.filter((p) => {
    if (allow.has(p)) return false;
    // allow prefix match under allowlisted directories
    return ![...allow].some(
      (a) => p === a || p.startsWith(a.endsWith("/") ? a : `${a}/`),
    );
  });

  if (unexpectedFiles.length > 0) {
    return {
      ok: false,
      reason: "unexpected_files_outside_allowlist",
      touchedFiles,
      unexpectedFiles,
    };
  }

  // Deletes forbidden for docs-write vertical
  const deletes = changed.filter((c) => /D/i.test(c.status));
  if (deletes.length > 0) {
    return {
      ok: false,
      reason: "delete_forbidden",
      touchedFiles,
      unexpectedFiles: deletes.map((d) => d.path),
    };
  }

  const absTarget = path.resolve(input.worktreePath, ...targetPath.split("/"));
  const root = path.resolve(input.worktreePath);
  if (absTarget !== root && !absTarget.startsWith(root + path.sep)) {
    return {
      ok: false,
      reason: "target_path_escape",
      touchedFiles,
      unexpectedFiles: [targetPath],
    };
  }
  if (!existsSync(absTarget)) {
    return {
      ok: false,
      reason: "target_path_missing",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  const buf = await readFile(absTarget);
  const digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;

  // If Cursor claimed digests, mismatch → fail (claim vs observation)
  const claimed = input.report?.fileEffects?.digests?.[targetPath];
  if (claimed && claimed !== digest) {
    return {
      ok: false,
      reason: "claimed_digest_mismatch",
      touchedFiles,
      unexpectedFiles: [],
    };
  }

  return {
    ok: true,
    touchedFiles: touchedFiles.length > 0 ? touchedFiles : [targetPath],
    targetPath,
    digest,
    unexpectedFiles: [],
  };
}
