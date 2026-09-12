/**
 * platformGithubReadBridge — thin OA adapter over platform GithubReadPort (CR-GCEC-18).
 * Maps Nora/platform GitHub READ into OA RepositoryReadPort shape.
 * Prefer FakeRepositoryReadPorts for deterministic GCEC tests.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
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

function splitRepo(repositoryRef: string): { owner: string; name: string } {
  const [owner, name] = repositoryRef.split("/");
  if (!owner || !name) {
    throw new Error(`invalid_repository_ref:${repositoryRef}`);
  }
  return { owner, name };
}

function mapPrState(state: string): "open" | "closed" | "merged" {
  const s = state.toLowerCase();
  if (s === "merged") return "merged";
  if (s === "closed") return "closed";
  return "open";
}

/**
 * OA RepositoryReadPort façade over platform GithubReadPort.
 * Does not invent a second gh CLI stack — delegates to the injected port.
 */
export class PlatformGithubReadBridge
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  constructor(private readonly github: GithubReadPort) {}

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    if (!this.github.listPullRequests) return [];
    const { owner, name } = splitRepo(input.repositoryRef);
    const rows = await this.github.listPullRequests(owner, name, {
      limit: input.limit,
      state: input.state,
    });
    const out: RepositoryPullRequestSummary[] = [];
    for (const r of rows) {
      let headSha = r.headRef;
      try {
        const branch = await this.github.getBranch(owner, name, r.headRef);
        headSha = branch.sha;
      } catch {
        /* keep ref name if tip unavailable */
      }
      out.push({
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha,
        headBranch: r.headRef,
        baseBranch: r.baseRef,
        url: r.url,
      });
    }
    return out;
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const r = await this.github.getPullRequest(owner, name, input.number);
      let headSha = r.headRef;
      try {
        const branch = await this.github.getBranch(owner, name, r.headRef);
        headSha = branch.sha;
      } catch {
        /* keep */
      }
      return {
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha,
        headBranch: r.headRef,
        baseBranch: r.baseRef,
        url: r.url,
      };
    } catch {
      return null;
    }
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    if (!this.github.listPullRequestFiles) return [];
    const { owner, name } = splitRepo(input.repositoryRef);
    return this.github.listPullRequestFiles(owner, name, input.number);
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    if (!this.github.getPullRequestDiff) return "";
    const { owner, name } = splitRepo(input.repositoryRef);
    return this.github.getPullRequestDiff(owner, name, input.number);
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    void input.limit;
    // Platform GithubReadPort has no listCommits — best-effort single tip.
    if (!input.ref) return [];
    const one = await this.getCommit({
      repositoryRef: input.repositoryRef,
      sha: input.ref,
    });
    return one ? [one] : [];
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const c = await this.github.getCommit(owner, name, input.sha);
      return { sha: c.sha.toLowerCase(), message: c.message, parents: [] };
    } catch {
      return null;
    }
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    if (!this.github.readFileAtRef) return null;
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const file = await this.github.readFileAtRef(
        owner,
        name,
        input.path,
        input.ref,
      );
      if (!file) return null;
      return {
        path: file.path,
        ref: file.ref,
        content: file.content,
        digest: digestOf(file.content),
      };
    } catch {
      return null;
    }
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    void input;
    return [];
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    if (!this.github.compareRefs) {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      return await this.github.compareRefs(
        owner,
        name,
        input.base,
        input.head,
      );
    } catch {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
  }

  async getBranchHead(
    input: RepositoryReadRef & { branch: string },
  ): Promise<string | null> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const b = await this.github.getBranch(owner, name, input.branch);
      return b.sha.toLowerCase();
    } catch {
      return null;
    }
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    const { owner, name } = splitRepo(input.repositoryRef);
    try {
      const checks = await this.github.listChecks(
        owner,
        name,
        input.commitSha,
      );
      if (checks.some((c) => c.conclusion === "failure")) {
        return { conclusion: "failure", checkName: checks[0]?.name };
      }
      if (
        checks.length > 0 &&
        checks.every(
          (c) => c.conclusion === "success" || c.status === "completed",
        )
      ) {
        return { conclusion: "success", checkName: checks[0]?.name };
      }
      return { conclusion: "pending", checkName: checks[0]?.name };
    } catch {
      return { conclusion: "pending", checkName: "github-checks" };
    }
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    void input;
    // Platform port has no dedicated reviewDecision — pending until extended.
    return { state: "pending" };
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    const pr = await this.getPullRequest({
      repositoryRef: input.repositoryRef,
      number: input.prNumber,
    });
    if (!pr) return null;
    return {
      prNumber: pr.number,
      state: pr.state,
      mergeSha: pr.state === "merged" ? pr.headSha : null,
      targetBranch: pr.baseBranch,
      headSha: pr.headSha,
    };
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}
