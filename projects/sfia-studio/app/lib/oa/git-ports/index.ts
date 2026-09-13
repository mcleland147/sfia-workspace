/**
 * GCEC git-ports — Studio READ / verify only (D-GCEC-09..11).
 * Cursor owns commit / push / PR / merge mutations.
 */
export type {
  LocalGitStatusDiffInput,
  LocalGitStatusDiffOutput,
  LocalGitStatusDiffPort,
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  PostMergeVerifyInput,
  PostMergeVerifyOutput,
  PostMergeVerifyPort,
  RepositoryReadPort,
  RepositoryReadRef,
  RepositoryPullRequestSummary,
  RepositoryCommitSummary,
  RepositoryFileContent,
  RepositoryCompareResult,
  RepositoryMergeInfo,
} from "./types";

export { FakeRepositoryReadPorts, FakeGitProviderPorts } from "./fakeGitProviderPorts";
export type {
  FakeCursorGitExternalStateView,
  FakeRepositoryReadPortsOptions,
} from "./fakeGitProviderPorts";
export { NodeLocalGitStatusDiffPort } from "./localGitStatusDiffPort";
export {
  GithubCliRepositoryReadAdapter,
  GithubCliRemotePorts,
  GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS,
} from "./githubCliRemotePorts";
export type {
  GithubCliRepositoryReadAdapterOptions,
  GithubCliRemotePortsOptions,
} from "./githubCliRemotePorts";
export { PlatformGithubReadBridge } from "./platformGithubReadBridge";
export { verifyPostMerge, postMergeVerifyPort } from "./postMergeVerify";
export {
  registerReportedGitClaimEvidence,
  verifyCommitClaim,
  verifyPushClaim,
  verifyPullRequestClaim,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  STUDIO_REPO_READ_VERIFIED_PREFIX,
} from "./application/gitEffectEvidenceActions";
export type {
  GitVerifyActor,
  GitVerifyBindings,
  GitEffectActor,
  GitEffectBindings,
} from "./application/gitEffectEvidenceActions";
