/**
 * Resolve sealed repo-relative docsWrite paths under a prepared worktree root.
 * Canonical EC/docsWriteSpec paths stay repo-relative; absolute forms are for
 * Cursor external instruction only (and fail-closed confinement checks).
 */
import path from "node:path";

export type ResolveSealedDocsWriteWorktreePathsResult =
  | {
      ok: true;
      sealedTargetPath: string;
      absoluteTargetPath: string;
      sealedPathAllowlist: readonly string[];
      absolutePathAllowlist: readonly string[];
    }
  | { ok: false; reason: string };

function normalizeSealedRel(p: string): string | null {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "").trim();
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    return null;
  }
  return n;
}

function resolveUnderWorktree(
  worktreeRoot: string,
  sealedRel: string,
): { abs: string; root: string } | null {
  const root = path.resolve(worktreeRoot);
  const abs = path.resolve(root, ...sealedRel.split("/"));
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return null;
  }
  return { abs, root };
}

/**
 * Derive absolute Cursor instruction paths from sealed repo-relative target +
 * allowlist under the prepared worktree. Does not rewrite sealed EC inputs.
 */
export function resolveSealedDocsWriteWorktreePaths(input: {
  worktreeRoot: string;
  targetPath: string;
  pathAllowlist: readonly string[];
}): ResolveSealedDocsWriteWorktreePathsResult {
  const sealedTargetPath = normalizeSealedRel(input.targetPath);
  if (!sealedTargetPath) {
    return { ok: false, reason: "target_path_invalid" };
  }

  const targetResolved = resolveUnderWorktree(
    input.worktreeRoot,
    sealedTargetPath,
  );
  if (!targetResolved) {
    return { ok: false, reason: "target_path_escape" };
  }

  if (!input.pathAllowlist.length) {
    return { ok: false, reason: "path_allowlist_empty" };
  }

  const sealedPathAllowlist: string[] = [];
  const absolutePathAllowlist: string[] = [];
  for (const entry of input.pathAllowlist) {
    const sealed = normalizeSealedRel(entry);
    if (!sealed) {
      return { ok: false, reason: "path_allowlist_invalid" };
    }
    const allowResolved = resolveUnderWorktree(input.worktreeRoot, sealed);
    if (!allowResolved) {
      return { ok: false, reason: "path_allowlist_escape" };
    }
    sealedPathAllowlist.push(sealed);
    absolutePathAllowlist.push(allowResolved.abs);
  }

  const underAllowlist = sealedPathAllowlist.some(
    (root) =>
      sealedTargetPath === root || sealedTargetPath.startsWith(`${root}/`),
  );
  if (!underAllowlist) {
    return { ok: false, reason: "target_outside_allowlist" };
  }

  return {
    ok: true,
    sealedTargetPath,
    absoluteTargetPath: targetResolved.abs,
    sealedPathAllowlist,
    absolutePathAllowlist,
  };
}
