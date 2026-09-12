/**
 * FakeRepositoryReadPorts — in-memory READ-ONLY Git/GitHub observation for tests.
 * D-GCEC-09: NO commit / push / open PR / merge methods.
 *
 * Seeded state emulates external Cursor mutations observed by Studio.
 * D-GCEC-15: optional shared FakeCursorGitExternalState (same instance Fake Cursor
 * mutates) — structural type only so git-ports does not import execution-attempt.
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

/**
 * Structural view of FakeCursorGitExternalState — keep git-ports free of
 * execution-attempt imports (boundary).
 */
export type FakeCursorGitExternalStateView = {
  readonly commits: ReadonlyArray<{
    sha: string;
    message: string;
    parent?: string;
  }>;
  readonly branchHeads: Map<string, string>;
  readonly prs: Map<
    number,
    {
      number: number;
      headSha: string;
      base: string;
      state: "open" | "closed" | "merged";
      mergeSha?: string;
      headBranch?: string;
    }
  >;
  readonly ci: Map<
    string,
    "success" | "failure" | "pending" | "neutral" | "cancelled"
  >;
  readonly reviews: Map<
    number,
    "approved" | "changes_requested" | "commented" | "pending"
  >;
  readonly filesByShaPath?: Map<string, Map<string, string>>;
  readonly worktreeRoot?: string;
};

export type FakeRepositoryReadPortsOptions = {
  /** Shared Fake Cursor Git world (same instance FakeDocsWriteLaunchPort mutates). */
  gitState?: FakeCursorGitExternalStateView;
};

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
  private gitState?: FakeCursorGitExternalStateView;

  constructor(options?: FakeRepositoryReadPortsOptions) {
    this.gitState = options?.gitState;
  }

  /** Bind / replace shared external state after construction. */
  bindGitState(gitState: FakeCursorGitExternalStateView): void {
    this.gitState = gitState;
  }

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
    const fromState = this.gitState
      ? [...this.gitState.prs.values()].map((p) => ({
          number: p.number,
          title: `PR #${p.number}`,
          state: p.state,
          headSha: p.headSha,
          headBranch: p.headBranch ?? "",
          baseBranch: p.base,
          url: `https://github.com/fake/repo/pull/${p.number}`,
        }))
      : [];
    const seeded = [...this.pullRequests.values()];
    const byNumber = new Map<number, RepositoryPullRequestSummary>();
    for (const p of fromState) byNumber.set(p.number, p);
    for (const p of seeded) byNumber.set(p.number, p);
    const all = [...byNumber.values()];
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
    if (this.pullRequests.has(input.number)) {
      return this.pullRequests.get(input.number) ?? null;
    }
    const p = this.gitState?.prs.get(input.number);
    if (!p) return null;
    return {
      number: p.number,
      title: `PR #${p.number}`,
      state: p.state,
      headSha: p.headSha,
      headBranch: p.headBranch ?? "",
      baseBranch: p.base,
      url: `https://github.com/fake/repo/pull/${p.number}`,
    };
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
    const fromState = (this.gitState?.commits ?? []).map((c) => ({
      sha: c.sha.toLowerCase(),
      message: c.message,
      parents: c.parent ? [c.parent.toLowerCase()] : [],
    }));
    const seeded = [...this.commits.values()];
    const bySha = new Map<string, RepositoryCommitSummary>();
    for (const c of fromState) bySha.set(c.sha, c);
    for (const c of seeded) bySha.set(c.sha.toLowerCase(), c);
    return [...bySha.values()].slice(0, input.limit ?? 20);
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    void input.repositoryRef;
    const key = input.sha.toLowerCase();
    if (this.commits.has(key)) return this.commits.get(key) ?? null;
    const c = this.gitState?.commits.find((x) => x.sha.toLowerCase() === key);
    if (!c) return null;
    return {
      sha: c.sha.toLowerCase(),
      message: c.message,
      parents: c.parent ? [c.parent.toLowerCase()] : [],
    };
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    void input.repositoryRef;
    const seeded = this.filesByRefPath.get(`${input.ref}:${input.path}`);
    if (seeded != null) {
      return {
        path: input.path,
        ref: input.ref,
        content: seeded,
        digest: digestOf(seeded),
      };
    }
    if (this.gitState?.filesByShaPath) {
      const sha =
        this.gitState.branchHeads.get(input.ref)?.toLowerCase() ??
        input.ref.toLowerCase();
      const content = this.gitState.filesByShaPath.get(sha)?.get(input.path);
      if (content != null) {
        return {
          path: input.path,
          ref: input.ref,
          content,
          digest: digestOf(content),
        };
      }
    }
    return null;
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
    if (this.compares.has(key)) {
      return this.compares.get(key)!;
    }
    const baseSha =
      this.gitState?.branchHeads.get(input.base) ??
      this.branchHeads.get(input.base) ??
      input.base;
    const headSha =
      this.gitState?.branchHeads.get(input.head) ??
      this.branchHeads.get(input.head) ??
      input.head;
    const files: string[] = [];
    if (this.gitState?.filesByShaPath) {
      const headFiles = this.gitState.filesByShaPath.get(headSha.toLowerCase());
      if (headFiles) files.push(...headFiles.keys());
    }
    return {
      base: input.base,
      head: input.head,
      aheadBy: baseSha === headSha ? 0 : 1,
      behindBy: 0,
      files,
    };
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    void input.repositoryRef;
    if (this.branchHeads.has(input.branch)) {
      return this.branchHeads.get(input.branch) ?? null;
    }
    return this.gitState?.branchHeads.get(input.branch) ?? null;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    const key = input.commitSha.toLowerCase();
    if (this.ciByCommit.has(key)) {
      return this.ciByCommit.get(key)!;
    }
    const conclusion = this.gitState?.ci.get(key);
    if (conclusion) {
      return { conclusion, checkName: "fake-ci" };
    }
    return { conclusion: "pending", checkName: "fake-ci" };
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    if (this.reviewByPr.has(input.prNumber)) {
      return this.reviewByPr.get(input.prNumber)!;
    }
    const state = this.gitState?.reviews.get(input.prNumber);
    return { state: state ?? "pending" };
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    void input.repositoryRef;
    if (this.mergeByPr.has(input.prNumber)) {
      return this.mergeByPr.get(input.prNumber) ?? null;
    }
    const p = this.gitState?.prs.get(input.prNumber);
    if (!p) return null;
    return {
      prNumber: p.number,
      state: p.state,
      mergeSha: p.mergeSha?.toLowerCase() ?? null,
      targetBranch: p.base,
      headSha: p.headSha,
    };
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
