/**
 * Server-derived GitPrMergeLaunchSpec (GCEC bounded PR merge PREP).
 * Build for continuation PREP only — REAL merge is not executed in this lot.
 * Fail closed on missing PR / bad numbers / incomplete identity.
 */

import {
  assertCanonicalGithubRepositoryRef,
} from "./shellSafeArg";

export type GitPrMergeMethod = "merge" | "squash" | "rebase";

export type GitPrMergeLaunchSpec = {
  readonly repositoryRef: string;
  readonly prNumber: number;
  readonly expectedHeadSha: string;
  readonly expectedHeadBranch: string;
  readonly expectedBaseBranch: string;
  readonly mergeMethod: GitPrMergeMethod;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;
const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;

function assertSafeBranch(
  raw: string,
  reasonEmpty: string,
  reasonUnsafe: string,
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: reasonEmpty };
  }
  const base = raw.trim();
  if (
    BRANCH_FORBIDDEN_RE.test(base) ||
    base.includes("..") ||
    base.startsWith("-") ||
    base.includes(" ")
  ) {
    return { ok: false, reason: reasonUnsafe };
  }
  return { ok: true, ref: base };
}

/**
 * Build merge launch spec from server-owned PR identity + policy defaults.
 * Default mergeMethod is "merge" when server/policy omits it.
 * `expectedHeadBranch` is REQUIRED.
 */
export function buildGitPrMergeLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly prNumber: number;
  readonly expectedHeadSha: string;
  readonly expectedHeadBranch: string;
  readonly expectedBaseBranch: string;
  readonly mergeMethod?: GitPrMergeMethod;
}):
  | { ok: true; spec: GitPrMergeLaunchSpec }
  | { ok: false; reason: string } {
  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
  if (!repo.ok) {
    return {
      ok: false,
      reason:
        repo.reason === "repository_ref_missing"
          ? "git_pr_merge_repository_ref_missing"
          : "git_pr_merge_repository_ref_unsafe",
    };
  }
  if (
    !Number.isInteger(input.prNumber) ||
    input.prNumber < 1 ||
    !Number.isFinite(input.prNumber)
  ) {
    return { ok: false, reason: "git_pr_merge_pr_number_invalid" };
  }
  if (
    typeof input.expectedHeadSha !== "string" ||
    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
  ) {
    return { ok: false, reason: "git_pr_merge_expected_head_sha_invalid" };
  }
  const head = assertSafeBranch(
    input.expectedHeadBranch,
    "git_pr_merge_expected_head_branch_empty",
    "git_pr_merge_expected_head_branch_unsafe",
  );
  if (!head.ok) return head;
  const base = assertSafeBranch(
    input.expectedBaseBranch,
    "git_pr_merge_expected_base_empty",
    "git_pr_merge_expected_base_unsafe",
  );
  if (!base.ok) return base;
  const method = input.mergeMethod ?? "merge";
  if (method !== "merge" && method !== "squash" && method !== "rebase") {
    return { ok: false, reason: "git_pr_merge_method_invalid" };
  }
  return {
    ok: true,
    spec: {
      repositoryRef: repo.ref,
      prNumber: input.prNumber,
      expectedHeadSha: input.expectedHeadSha.trim().toLowerCase(),
      expectedHeadBranch: head.ref,
      expectedBaseBranch: base.ref,
      mergeMethod: method,
    },
  };
}

/** AuthorizedEffects MUST be exactly one unique effect: github.pr.merge. */
export function isBoundedGitPrMergeOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("github.pr.merge");
}
