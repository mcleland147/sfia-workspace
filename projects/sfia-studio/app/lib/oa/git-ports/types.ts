/**
 * GCEC D-GCEC-09..14 — Studio repository READ ports only.
 *
 * Cursor / governed agent owns all Project repository mutations.
 * Studio MUST NOT expose commit / push / open PR / merge methods.
 */

import type { Digest } from "@/lib/oa/doctrine";

/** Local status / diff read. */
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

/** CI status read. */
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

/** Review status read. */
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

/** Post-merge verify (pure compare of independently observed facts). */
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

/**
 * Bounded Studio repository READ capability (D-GCEC-10).
 * All methods are read-only. No create/update/delete/merge/push/commit.
 */
export type RepositoryReadRef = {
  repositoryRef: string;
};

export type RepositoryPullRequestSummary = {
  number: number;
  title: string;
  state: "open" | "closed" | "merged";
  headSha: string;
  baseBranch: string;
  url: string;
};

export type RepositoryCommitSummary = {
  sha: string;
  message: string;
  parents: string[];
};

export type RepositoryFileContent = {
  path: string;
  ref: string;
  content: string;
  digest: Digest;
};

export type RepositoryCompareResult = {
  base: string;
  head: string;
  aheadBy: number;
  behindBy: number;
  files: string[];
};

export type RepositoryMergeInfo = {
  prNumber: number;
  state: "open" | "closed" | "merged";
  mergeSha: string | null;
  targetBranch: string;
  headSha: string;
};

export type RepositoryReadPort = {
  listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]>;
  getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null>;
  listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]>;
  getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string>;
  listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]>;
  getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null>;
  readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null>;
  listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]>;
  compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult>;
  getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null>;
  getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput>;
  getReviewStatus(input: GitReviewStatusInput): Promise<GitReviewStatusOutput>;
  getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null>;
  readArtifactDigestAtRef?(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null>;
};
