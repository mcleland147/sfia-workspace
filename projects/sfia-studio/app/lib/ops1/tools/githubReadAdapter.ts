/**
 * TEMP_OPS1_PLATFORM_WRAPPER — re-export from shared platform.
 * Remove when no OPS1 consumer imports this path (Phase 6 cleanup gate).
 * Do not add generic logic here. Do not import from D1.
 */

export {
  defaultGithubOwnerRepo,
  resolveGithubReadTransport,
  summarizeGithubPayload,
  probeGhAuth,
} from "@/lib/platform/repository/githubReadAdapter";
export type {
  GithubReadPort,
  GithubRepositoryView,
  GithubBranchView,
  GithubCommitView,
  GithubPullRequestView,
  GithubCheckView,
  GithubCommentView,
} from "@/lib/platform/repository/githubReadAdapter";
