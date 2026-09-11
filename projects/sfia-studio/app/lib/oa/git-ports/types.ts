/**
 * GCEC D-GCEC-08 / §16 — narrow Git effect ports (no broad execute).
 *
 * Authority notes (comments only):
 * - N2 Pilote: LocalGitCommitPort
 * - N3: GitRemotePushPort / GitPullRequestPort / GitMergePort
 * - Read ports: status/diff, CI, review, post-merge verify
 */

import type { Digest } from "@/lib/oa/doctrine";

/** Phase B — local status / diff read. */
export type LocalGitStatusDiffInput = {
  repoPath: string;
  /** Optional pathspec filter. */
  pathspecs?: string[];
};

export type LocalGitStatusDiffOutput = {
  branch: string | null;
  headSha: string | null;
  dirty: boolean;
  statusPorcelain: string;
  diffStat: string;
};

export type LocalGitStatusDiffPort = {
  statusDiff(input: LocalGitStatusDiffInput): Promise<LocalGitStatusDiffOutput>;
};

/** Phase C — local commit (N2). Never push. */
export type LocalGitCommitInput = {
  repoPath: string;
  message: string;
  /** Paths to stage; empty/omit = fail-closed (no `git add -A`). */
  paths: string[];
  authorName?: string;
  authorEmail?: string;
};

export type LocalGitCommitOutput = {
  commitSha: string;
  message: string;
};

export type LocalGitCommitPort = {
  commit(input: LocalGitCommitInput): Promise<LocalGitCommitOutput>;
};

/** Phase D — remote push (N3). Force push never. */
export type GitRemotePushInput = {
  repositoryRef: string;
  remote: string;
  refName: string;
  commitSha: string;
  /** Must never be true — fail-closed if set. */
  force?: boolean;
};

export type GitRemotePushOutput = {
  remote: string;
  refName: string;
  commitSha: string;
};

export type GitRemotePushPort = {
  push(input: GitRemotePushInput): Promise<GitRemotePushOutput>;
};

/** Phase E — open / update PR (N3). */
export type GitPullRequestInput = {
  repositoryRef: string;
  title: string;
  headRef: string;
  baseRef: string;
  body?: string;
};

export type GitPullRequestOutput = {
  prNumber: number;
  url: string;
  headSha: string;
  baseRef: string;
};

export type GitPullRequestPort = {
  openPullRequest(input: GitPullRequestInput): Promise<GitPullRequestOutput>;
};

/** Phase F — CI status read. */
export type GitCiStatusInput = {
  repositoryRef: string;
  commitSha: string;
};

export type GitCiStatusOutput = {
  conclusion: "success" | "failure" | "pending" | "neutral" | "cancelled";
  checkName?: string;
  url?: string;
};

export type GitCiStatusPort = {
  getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput>;
};

/** Phase F — review status read. */
export type GitReviewStatusInput = {
  repositoryRef: string;
  prNumber: number;
};

export type GitReviewStatusOutput = {
  state: "approved" | "changes_requested" | "commented" | "pending";
};

export type GitReviewStatusPort = {
  getReviewStatus(input: GitReviewStatusInput): Promise<GitReviewStatusOutput>;
};

/** Phase G — merge (N3). Never auto. */
export type GitMergeInput = {
  repositoryRef: string;
  prNumber: number;
  /** Explicit human/system merge confirmation token — required. */
  mergeConfirmationId: string;
};

export type GitMergeOutput = {
  mergeCommitSha: string;
  baseRef: string;
  prNumber: number;
};

export type GitMergePort = {
  mergePullRequest(input: GitMergeInput): Promise<GitMergeOutput>;
};

/** Phase H — post-merge verify (pure compare inputs). */
export type PostMergeVerifyInput = {
  expectedTargetSha: string;
  observedTargetSha: string;
  expectedArtifactDigest: Digest;
  observedArtifactDigest: Digest;
  artifactPath: string;
};

export type PostMergeVerifyOutput = {
  ok: boolean;
  reasons: string[];
};

export type PostMergeVerifyPort = {
  verify(input: PostMergeVerifyInput): PostMergeVerifyOutput;
};
