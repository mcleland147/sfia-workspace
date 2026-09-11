/**
 * ManagedProjectRepositoryResolver — maps Project repository binding identity
 * to a local managed clone under managedRootBase (CR-GCEC-03).
 *
 * ZERO network. Fail-closed if path missing or not a git repo.
 */
import { existsSync } from "node:fs";
import path from "node:path";

export type ManagedRepoBindingIdentity = {
  readonly identity: string;
};

/**
 * Sanitize owner/repo → filesystem-safe segment (no traversal).
 */
export function sanitizeManagedRepoIdentity(identity: string): string {
  const trimmed = identity.trim();
  if (!trimmed || trimmed.includes("..") || trimmed.startsWith("/")) {
    throw new Error("managed_repo_identity_invalid");
  }
  return trimmed.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

export class ManagedProjectRepositoryResolver {
  /**
   * Resolve `{managedRootBase}/{sanitizedIdentity}` when it exists as a git repo.
   * Returns null when missing / not a git directory.
   */
  resolveLocalRepoRoot(
    binding: ManagedRepoBindingIdentity,
    managedRootBase: string,
  ): string | null {
    if (!managedRootBase || !managedRootBase.trim()) return null;
    let sanitized: string;
    try {
      sanitized = sanitizeManagedRepoIdentity(binding.identity);
    } catch {
      return null;
    }
    const candidate = path.resolve(managedRootBase, sanitized);
    const base = path.resolve(managedRootBase);
    if (candidate !== base && !candidate.startsWith(base + path.sep)) {
      return null;
    }
    if (!existsSync(candidate)) return null;
    if (
      !existsSync(path.join(candidate, ".git")) &&
      !existsSync(path.join(candidate, ".git", "HEAD"))
    ) {
      // Bare check: .git file (worktree) or directory
      const gitPath = path.join(candidate, ".git");
      if (!existsSync(gitPath)) return null;
    }
    return candidate;
  }
}
