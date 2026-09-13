/**
 * CR-04 — Fresh live PR preflight before merge Attempt E.
 * Pure domain gate; StartExecution is the authority (gateway prompt is defense-in-depth).
 */
import type { RepositoryPullRequestSummary } from "@/lib/oa/git-ports";

export type FreshPrMergePreflightExpected = {
  readonly headSha: string;
  readonly headBranch: string;
  readonly baseBranch: string;
};

export function assertFreshPrMergePreflight(input: {
  readonly live: RepositoryPullRequestSummary | null | undefined;
  readonly expected: FreshPrMergePreflightExpected;
}): { ok: true } | { ok: false; reason: string } {
  if (input.live == null) {
    return { ok: false, reason: "git_pr_merge_live_pr_missing" };
  }
  const live = input.live;
  if (live.state === "merged") {
    return { ok: false, reason: "git_pr_merge_live_pr_merged" };
  }
  if (live.state === "closed" || live.state !== "open") {
    return { ok: false, reason: "git_pr_merge_live_pr_closed" };
  }
  const liveHead = live.headSha.trim().toLowerCase();
  const expectedHead = input.expected.headSha.trim().toLowerCase();
  if (liveHead !== expectedHead) {
    return { ok: false, reason: "git_pr_merge_live_head_sha_drift" };
  }
  const liveHeadBranch = live.headBranch?.trim() ?? "";
  if (!liveHeadBranch || liveHeadBranch !== input.expected.headBranch.trim()) {
    return { ok: false, reason: "git_pr_merge_live_head_branch_mismatch" };
  }
  const liveBase = live.baseBranch.trim();
  if (!liveBase || liveBase !== input.expected.baseBranch.trim()) {
    return { ok: false, reason: "git_pr_merge_live_base_branch_mismatch" };
  }
  return { ok: true };
}
