/**
 * Server-derived GitPushLaunchSpec (GCEC bounded remote push).
 * Canonical type — import/re-export; do not duplicate in ports.
 * Fail closed on force / delete / tags / empty / unsafe branch / wrong SHA.
 * Branch is server-derived only — reject client free branch authority.
 */

import { assertCanonicalGithubRepositoryRef } from "./shellSafeArg";

/** Canonical push launch contract (single source of truth). */
export type GitPushLaunchSpec = {
  readonly repositoryRef: string;
  readonly remoteName: string;
  readonly branchName: string;
  readonly expectedCommitSha: string;
  readonly force: false;
  readonly delete: false;
  readonly noTags: true;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]|\/\.(\.|$)/;

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && FULL_SHA_RE.test(v.trim());
}

function assertShellSafeBranchName(
  raw: string,
): { ok: true; branch: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: "git_push_branch_empty" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_push_branch_whitespace" };
  }
  const branch = raw.trim();
  if (branch.includes("..") || branch.startsWith("-") || branch.includes(" ")) {
    return { ok: false, reason: "git_push_branch_unsafe" };
  }
  if (BRANCH_FORBIDDEN_RE.test(branch)) {
    return { ok: false, reason: "git_push_branch_unsafe" };
  }
  // GCEC feature-branch push dest — refuse protected default branch names.
  if (branch === "main" || branch === "master") {
    return { ok: false, reason: "git_push_branch_protected_default" };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(branch)) {
    return { ok: false, reason: "git_push_branch_charset" };
  }
  return { ok: true, branch };
}

/**
 * Build push launch spec from server-owned facts.
 * `claimedClientBranch` when present MUST equal server branchName or fail closed.
 */
export function buildGitPushLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly remoteName?: string;
  readonly branchName: string;
  readonly expectedCommitSha: string;
  readonly force?: boolean;
  readonly delete?: boolean;
  readonly noTags?: boolean;
  /** Hostile / client free branch — reject when differs from server branch. */
  readonly claimedClientBranch?: string;
}):
  | { ok: true; spec: GitPushLaunchSpec }
  | { ok: false; reason: string } {
  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
  if (!repo.ok) {
    return {
      ok: false,
      reason:
        repo.reason === "repository_ref_missing"
          ? "git_push_repository_ref_missing"
          : "git_push_repository_ref_unsafe",
    };
  }
  const repositoryRef = repo.ref;
  if (!isFullSha(input.expectedCommitSha)) {
    return { ok: false, reason: "git_push_expected_commit_sha_invalid" };
  }
  if (input.force === true) {
    return { ok: false, reason: "git_push_force_rejected" };
  }
  if (input.delete === true) {
    return { ok: false, reason: "git_push_delete_rejected" };
  }
  if (input.noTags === false) {
    return { ok: false, reason: "git_push_tags_rejected" };
  }
  const remoteName = (input.remoteName ?? "origin").trim() || "origin";
  if (
    remoteName !== "origin" ||
    /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(remoteName)
  ) {
    // Bounded GCEC push: only origin; reject exotic remotes.
    if (remoteName !== "origin") {
      return { ok: false, reason: "git_push_remote_not_origin" };
    }
    return { ok: false, reason: "git_push_remote_unsafe" };
  }
  const branch = assertShellSafeBranchName(input.branchName);
  if (!branch.ok) return branch;

  if (
    input.claimedClientBranch != null &&
    String(input.claimedClientBranch).trim() &&
    String(input.claimedClientBranch).trim() !== branch.branch
  ) {
    return { ok: false, reason: "git_push_client_branch_override_rejected" };
  }

  return {
    ok: true,
    spec: {
      repositoryRef,
      remoteName: "origin",
      branchName: branch.branch,
      expectedCommitSha: input.expectedCommitSha.trim().toLowerCase(),
      force: false,
      delete: false,
      noTags: true,
    },
  };
}

/** AuthorizedEffects MUST be exactly one unique effect: git.push. */
export function isBoundedGitPushOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("git.push");
}

/**
 * Deterministic server branch when EC inputs lack workingBranch.
 * Prefer contract inputs.workingBranch when present (Start path).
 */
export function deriveDeterministicGcecPushBranch(executionContractId: string): string {
  const short = executionContractId
    .replace(/^xct:/, "")
    .replace(/[^A-Za-z0-9_-]/g, "")
    .slice(0, 24);
  return `gcec/lifecycle/${short || "ec"}`;
}
