/**
 * In-memory fake remote Git ports for deterministic tests.
 * Does not touch network or real git remotes.
 */
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitMergeInput,
  GitMergeOutput,
  GitMergePort,
  GitPullRequestInput,
  GitPullRequestOutput,
  GitPullRequestPort,
  GitRemotePushInput,
  GitRemotePushOutput,
  GitRemotePushPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
} from "./types";

function fakeSha(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(8, "0").repeat(5).slice(0, 40);
}

export class FakeGitProviderPorts
  implements
    GitRemotePushPort,
    GitPullRequestPort,
    GitCiStatusPort,
    GitReviewStatusPort,
    GitMergePort
{
  readonly pushes: GitRemotePushOutput[] = [];
  readonly pullRequests: GitPullRequestOutput[] = [];
  readonly merges: GitMergeOutput[] = [];
  ciByCommit = new Map<string, GitCiStatusOutput>();
  reviewByPr = new Map<number, GitReviewStatusOutput>();
  private nextPr = 1;

  async push(input: GitRemotePushInput): Promise<GitRemotePushOutput> {
    if (input.force === true) {
      throw new Error("git_force_push_forbidden");
    }
    const out: GitRemotePushOutput = {
      remote: input.remote,
      refName: input.refName,
      commitSha: input.commitSha,
    };
    this.pushes.push(out);
    return out;
  }

  async openPullRequest(
    input: GitPullRequestInput,
  ): Promise<GitPullRequestOutput> {
    const prNumber = this.nextPr;
    this.nextPr += 1;
    const out: GitPullRequestOutput = {
      prNumber,
      url: `https://github.com/${input.repositoryRef}/pull/${prNumber}`,
      headSha: fakeSha(`${input.repositoryRef}:${input.headRef}:${prNumber}`),
      baseRef: input.baseRef,
    };
    this.pullRequests.push(out);
    this.reviewByPr.set(prNumber, { state: "pending" });
    return out;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    return (
      this.ciByCommit.get(input.commitSha) ?? {
        conclusion: "pending",
        checkName: "fake-ci",
      }
    );
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    return this.reviewByPr.get(input.prNumber) ?? { state: "pending" };
  }

  async mergePullRequest(input: GitMergeInput): Promise<GitMergeOutput> {
    if (!input.mergeConfirmationId.trim()) {
      throw new Error("git_merge_confirmation_required");
    }
    const out: GitMergeOutput = {
      mergeCommitSha: fakeSha(
        `merge:${input.repositoryRef}:${input.prNumber}:${input.mergeConfirmationId}`,
      ),
      baseRef: "main",
      prNumber: input.prNumber,
    };
    this.merges.push(out);
    return out;
  }
}
