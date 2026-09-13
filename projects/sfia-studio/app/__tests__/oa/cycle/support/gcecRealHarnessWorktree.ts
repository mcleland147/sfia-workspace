import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

export function pathsEqualAllowingRealpath(a: string, b: string): boolean {
  const resolvedA = path.resolve(a);
  const resolvedB = path.resolve(b);
  if (resolvedA === resolvedB) return true;
  try {
    return fs.realpathSync(resolvedA) === fs.realpathSync(resolvedB);
  } catch {
    return false;
  }
}

export function registeredGitWorktreePaths(repositoryRoot: string): string[] {
  const porcelain = execFileSync(
    "git",
    ["worktree", "list", "--porcelain"],
    {
      cwd: repositoryRoot,
      encoding: "utf8",
      shell: false,
    },
  );
  return porcelain
    .split("\n")
    .filter((line) => line.startsWith("worktree "))
    .map((line) => line.slice("worktree ".length).trim())
    .filter(Boolean);
}

/**
 * Harness-only preflight. Product workspace validation remains authoritative;
 * this closes the campaign before launch/resume when Git has lost registration.
 */
export function assertRegisteredGitWorktree(input: {
  repositoryRoot: string;
  worktreePath: string;
}): string {
  const registered = registeredGitWorktreePaths(input.repositoryRoot).find(
    (candidate) =>
      pathsEqualAllowingRealpath(candidate, input.worktreePath),
  );
  if (!registered) {
    throw new Error(
      `GCEC_REAL_HARNESS_WORKTREE_UNREGISTERED:${path.resolve(input.worktreePath)}`,
    );
  }
  return registered;
}
