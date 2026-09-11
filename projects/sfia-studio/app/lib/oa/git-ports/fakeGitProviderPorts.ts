/**
 * FakeRepositoryReadPorts — in-memory READ-ONLY Git/GitHub observation for tests.
 * D-GCEC-09: NO commit / push / open PR / merge methods.
 *
 * Seeded state emulates external Cursor mutations observed by Studio.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  GitCiStatusInput,
  GitCiStatusOutput,
  GitCiStatusPort,
  GitReviewStatusInput,
  GitReviewStatusOutput,
  GitReviewStatusPort,
  RepositoryCommitSummary,
  RepositoryCompareResult,
  RepositoryFileContent,
  RepositoryMergeInfo,
  RepositoryPullRequestSummary,
  RepositoryReadPort,
  RepositoryReadRef,
} from "./types";

function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
}

export class FakeRepositoryReadPorts
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  readonly pullRequests = new Map<number, RepositoryPullRequestSummary>();
  readonly prFiles = new Map<number, string[]>();
  readonly prDiffs = new Map<number, string>();
  readonly commits = new Map<string, RepositoryCommitSummary>();
  readonly filesByRefPath = new Map<string, string>();
  readonly pathsByRef = new Map<string, string[]>();
  readonly branchHeads = new Map<string, string>();
  readonly compares = new Map<string, RepositoryCompareResult>();
  ciByCommit = new Map<string, GitCiStatusOutput>();
  reviewByPr = new Map<number, GitReviewStatusOutput>();
  mergeByPr = new Map<number, RepositoryMergeInfo>();

  seedPullRequest(pr: RepositoryPullRequestSummary): void {
    this.pullRequests.set(pr.number, pr);
  }

  seedCommit(commit: RepositoryCommitSummary): void {
    this.commits.set(commit.sha.toLowerCase(), {
      ...commit,
      sha: commit.sha.toLowerCase(),
    });
  }

  seedFileAtRef(ref: string, path: string, content: string): void {
    this.filesByRefPath.set(`${ref}:${path}`, content);
  }

  seedBranchHead(branch: string, sha: string): void {
    this.branchHeads.set(branch, sha.toLowerCase());
  }

  seedMergeInfo(info: RepositoryMergeInfo): void {
    this.mergeByPr.set(info.prNumber, info);
  }

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    void input.repositoryRef;
    const all = [...this.pullRequests.values()];
    const filtered =
      !input.state || input.state === "all"
        ? all
        : all.filter((p) => p.state === input.state);
    return filtered.slice(0, input.limit ?? 20);
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    void input.repositoryRef;
    return this.pullRequests.get(input.number) ?? null;
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    void input.repositoryRef;
    return this.prFiles.get(input.number) ?? [];
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    void input.repositoryRef;
    return this.prDiffs.get(input.number) ?? "";
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    void input.repositoryRef;
    const all = [...this.commits.values()];
    return all.slice(0, input.limit ?? 20);
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    void input.repositoryRef;
    return this.commits.get(input.sha.toLowerCase()) ?? null;
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    void input.repositoryRef;
    const content = this.filesByRefPath.get(`${input.ref}:${input.path}`);
    if (content == null) return null;
    return {
      path: input.path,
      ref: input.ref,
      content,
      digest: digestOf(content),
    };
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    void input.path;
    return this.pathsByRef.get(input.ref) ?? [];
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    void input.repositoryRef;
    const key = `${input.base}..${input.head}`;
    return (
      this.compares.get(key) ?? {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      }
    );
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    void input.repositoryRef;
    return this.branchHeads.get(input.branch) ?? null;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    return (
      this.ciByCommit.get(input.commitSha.toLowerCase()) ?? {
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

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    void input.repositoryRef;
    return this.mergeByPr.get(input.prNumber) ?? null;
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}

/** @deprecated Use FakeRepositoryReadPorts — mutation surface retired (D-GCEC-09). */
export const FakeGitProviderPorts = FakeRepositoryReadPorts;
