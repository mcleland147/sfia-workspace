/**
 * ManagedProjectRepositoryResolver — maps Project repository binding identity
 * to a local managed clone under managedRootBase (CR-GCEC-03).
 *
 * ZERO network. Does not clone, fetch, or fall back to process.cwd.
 * Path existence (`.git` present) is not identity fidelity. Protected Git
 * must use resolveIdentityMatchedLocalRepo, which accepts a candidate only
 * when origin matches the repository identity.
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { assertRemoteUrlMatchesRepositoryRef } from "../domain/assertLocalBranchRefMatchesExpectedSha";

export type ManagedRepoBindingIdentity = {
  readonly identity: string;
};

const GIT_CONFIG_READ_MAX_BYTES = 1_000_000;
const REMOTE_ORIGIN_HEADER = /^\[remote\s+["']origin["']\]$/i;
const SECTION_HEADER = /^\[[^\]]+\]$/;
const ORIGIN_URL_LINE = /^\s*url\s*=\s*(.*?)\s*$/;

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

export type IdentityMatchedLocalRepoFailure =
  | "managed_repo_absent"
  | "managed_repo_identity_mismatch";

export type IdentityMatchedLocalRepoResolution =
  | { readonly ok: true; readonly repoRoot: string }
  | { readonly ok: false; readonly reason: IdentityMatchedLocalRepoFailure };

/**
 * Read `origin` from checkout metadata without invoking git and without
 * network mutation.
 *
 * Directory `.git/config` is read directly. A `.git` gitfile (`gitdir:`) is
 * followed one hop, then `commondir` when the worktree gitdir has no origin
 * url (the usual linked-worktree layout).
 *
 * KNOWN GAP: this is not a worktree engine. It does not run git, follow
 * `core.worktree`, resolve submodules, or chase more than one commondir hop.
 * Unreadable or mismatched origin fails closed.
 */
export function readOriginRemoteUrlFromGitMetadata(
  checkoutRoot: string,
): string | null {
  const configPath = resolveGitConfigPath(checkoutRoot);
  if (!configPath) return null;
  const text = readTextIfSmall(configPath);
  if (text == null) return null;
  return parseOriginUrlFromGitConfig(text);
}

export function parseOriginUrlFromGitConfig(configText: string): string | null {
  let inOrigin = false;
  let url: string | null = null;
  for (const rawLine of configText.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || line.startsWith(";")) continue;
    if (SECTION_HEADER.test(line)) {
      inOrigin = REMOTE_ORIGIN_HEADER.test(line);
      continue;
    }
    if (!inOrigin) continue;
    const urlMatch = rawLine.match(ORIGIN_URL_LINE);
    if (!urlMatch) continue;
    const value = stripGitConfigValue(urlMatch[1] ?? "");
    if (value) url = value;
  }
  return url;
}

/**
 * Candidate under managedRootBase is accepted only when its origin remote
 * matches `identity` via assertRemoteUrlMatchesRepositoryRef.
 * Missing checkout, missing origin, or a mismatch → not ok. Never creates a repo.
 */
export function resolveIdentityMatchedLocalRepo(input: {
  readonly identity: string;
  readonly managedRootBase: string;
}): IdentityMatchedLocalRepoResolution {
  const resolver = new ManagedProjectRepositoryResolver();
  const candidate = resolver.resolveLocalRepoRoot(
    { identity: input.identity },
    input.managedRootBase,
  );
  if (!candidate) return { ok: false, reason: "managed_repo_absent" };
  const origin = readOriginRemoteUrlFromGitMetadata(candidate);
  if (!origin) return { ok: false, reason: "managed_repo_identity_mismatch" };
  const match = assertRemoteUrlMatchesRepositoryRef({
    remoteUrl: origin,
    repositoryRef: input.identity,
  });
  if (!match.ok) return { ok: false, reason: "managed_repo_identity_mismatch" };
  return { ok: true, repoRoot: candidate };
}

/**
 * Protected Git may use a managed checkout only when identity resolution
 * succeeded. A configured base whose checkout is absent or origin-mismatched
 * fails closed. Non-protected work does not fail when the checkout is unusable.
 */
export function guardedManagedRepoRootForProtectedGit(input: {
  readonly protectedGitPending: boolean;
  readonly checked: boolean;
  readonly resolution: IdentityMatchedLocalRepoResolution | null;
}):
  | {
      readonly ok: true;
      readonly managedRepoRoot?: string;
    }
  | {
      readonly ok: false;
      readonly code: "REAL_WORKSPACE_INVALID";
      readonly reason: IdentityMatchedLocalRepoFailure;
    } {
  if (!input.checked || input.resolution == null) return { ok: true };
  if (input.resolution.ok) {
    return { ok: true, managedRepoRoot: input.resolution.repoRoot };
  }
  if (input.protectedGitPending) {
    return {
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: input.resolution.reason,
    };
  }
  return { ok: true };
}

export class ManagedProjectRepositoryResolver {
  /**
   * Resolve `{managedRootBase}/{sanitizedIdentity}` when a `.git` directory
   * or gitfile exists. This existence check is NOT remote fidelity.
   * Returns null when missing / not a git directory or gitfile.
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

  /**
   * Protected-Git resolution: same candidate as resolveLocalRepoRoot, accepted
   * only when origin matches identity. Otherwise null.
   */
  resolveIdentityMatchedLocalRepoRoot(
    binding: ManagedRepoBindingIdentity,
    managedRootBase: string,
  ): string | null {
    const resolved = resolveIdentityMatchedLocalRepo({
      identity: binding.identity,
      managedRootBase,
    });
    return resolved.ok ? resolved.repoRoot : null;
  }
}

function resolveGitConfigPath(checkoutRoot: string): string | null {
  const gitPath = path.join(checkoutRoot, ".git");
  if (!existsSync(gitPath)) return null;
  let st;
  try {
    st = statSync(gitPath);
  } catch {
    return null;
  }
  if (st.isDirectory()) {
    const config = path.join(gitPath, "config");
    return existsSync(config) ? config : null;
  }
  if (!st.isFile()) return null;
  const gitfile = readTextIfSmall(gitPath);
  if (gitfile == null) return null;
  const match = gitfile.match(/^gitdir:\s*(.+)\s*$/m);
  const gitdirRaw = match?.[1]?.trim();
  if (!gitdirRaw) return null;
  const gitdir = path.resolve(checkoutRoot, gitdirRaw);
  return configPathFromGitDir(gitdir);
}

function configPathFromGitDir(gitdir: string): string | null {
  const direct = path.join(gitdir, "config");
  if (existsSync(direct)) {
    const text = readTextIfSmall(direct);
    if (text != null && parseOriginUrlFromGitConfig(text)) return direct;
  }
  const commonFile = path.join(gitdir, "commondir");
  if (!existsSync(commonFile)) return existsSync(direct) ? direct : null;
  const commonRel = readTextIfSmall(commonFile)?.trim();
  if (!commonRel) return existsSync(direct) ? direct : null;
  const commonConfig = path.join(path.resolve(gitdir, commonRel), "config");
  if (existsSync(commonConfig)) return commonConfig;
  return existsSync(direct) ? direct : null;
}

function readTextIfSmall(filePath: string): string | null {
  try {
    const st = statSync(filePath);
    if (!st.isFile() || st.size > GIT_CONFIG_READ_MAX_BYTES) return null;
    return readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function stripGitConfigValue(raw: string): string {
  const value = raw.trim();
  if (
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")))
  ) {
    return value.slice(1, -1).trim();
  }
  return value;
}
