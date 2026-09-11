/**
 * GCEC git effect ports — narrow phase ports, no broad execute.
 */
export type {
  LocalGitStatusDiffInput,
  LocalGitStatusDiffOutput,
  LocalGitStatusDiffPort,
  LocalGitCommitInput,
  LocalGitCommitOutput,
  LocalGitCommitPort,
  GitRemotePushInput,
  GitRemotePushOutput,
  GitRemotePushPort,
  GitPullRequestInput,
  GitPullRequestOutput,
  GitPullRequestPort,
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  GitMergeInput,
  GitMergeOutput,
  GitMergePort,
  PostMergeVerifyInput,
  PostMergeVerifyOutput,
  PostMergeVerifyPort,
} from "./types";

export { FakeGitProviderPorts } from "./fakeGitProviderPorts";
export { NodeLocalGitCommitPort } from "./localGitCommitPort";
export { NodeLocalGitStatusDiffPort } from "./localGitStatusDiffPort";
export { GithubCliRemotePorts } from "./githubCliRemotePorts";
export type { GithubCliRemotePortsOptions } from "./githubCliRemotePorts";
export { verifyPostMerge, postMergeVerifyPort } from "./postMergeVerify";
export {
  commitArtifactEvidence,
  pushBranchEvidence,
  openPullRequestEvidence,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  mergePullRequestEvidence,
  verifyPostMergeEvidence,
} from "./application/gitEffectEvidenceActions";
export type {
  GitEffectActor,
  GitEffectBindings,
} from "./application/gitEffectEvidenceActions";
