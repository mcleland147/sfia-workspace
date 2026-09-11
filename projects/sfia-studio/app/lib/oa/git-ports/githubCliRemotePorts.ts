/**
 * GithubCliRepositoryReadAdapter — READ-ONLY GitHub CLI / git observation.
 * D-GCEC-09/10: fixed argv, shell:false. NO push / create PR / merge / commit.
 *
 * CR-GCEC-18: uses shared platform `runGhFixedArgv` (no duplicate spawn stack).
 * Prefer FakeRepositoryReadPorts for deterministic GCEC tests.
 * ZERO REAL invocation during GCEC deterministic correction — inject `run`.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import {
  runGhFixedArgv,
  type GhCliCmdResult,
} from "@/lib/platform/repository/ghCliTransport";
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

export type GithubCliRepositoryReadAdapterOptions = {
  /** Injectable runner — tests MUST inject a fake; never call real `gh` in unit tests. */
  run?: (
    executable: string,
    argv: readonly string[],
    cwd?: string,
  ) => Promise<GhCliCmdResult>;
  cwd?: string;
};

function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}` as Digest;
}

/**
 * Forbidden mutation argv patterns — used by architecture tests.
 * Adapter methods must never compose these.
 */
export const GITHUB_CLI_READ_FORBIDDEN_ARGV_TOKENS = [
  "push",
  "commit",
  "pr create",
  "pr merge",
  "-X POST",
  "-X PUT",
  "-X PATCH",
  "-X DELETE",
] as const;

export class GithubCliRepositoryReadAdapter
  implements RepositoryReadPort, GitCiStatusPort, GitReviewStatusPort
{
  private readonly run: NonNullable<GithubCliRepositoryReadAdapterOptions["run"]>;
  private readonly cwd?: string;

  constructor(options: GithubCliRepositoryReadAdapterOptions = {}) {
    this.run =
      options.run ??
      ((executable, argv, cwd) => runGhFixedArgv(executable, argv, cwd));
    this.cwd = options.cwd;
  }

  async listPullRequests(
    input: RepositoryReadRef & {
      limit?: number;
      state?: "open" | "closed" | "all";
    },
  ): Promise<RepositoryPullRequestSummary[]> {
    const state = input.state ?? "open";
    const result = await this.run(
      "gh",
      [
        "pr",
        "list",
        "--repo",
        input.repositoryRef,
        "--limit",
        String(input.limit ?? 5),
        "--state",
        state,
        "--json",
        "number,title,state,headRefOid,baseRefName,url",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const rows = JSON.parse(result.stdout) as Array<{
        number: number;
        title: string;
        state: string;
        headRefOid: string;
        baseRefName: string;
        url: string;
      }>;
      return rows.map((r) => ({
        number: r.number,
        title: r.title,
        state: mapPrState(r.state),
        headSha: r.headRefOid,
        baseBranch: r.baseRefName,
        url: r.url,
      }));
    } catch {
      return [];
    }
  }

  async getPullRequest(
    input: RepositoryReadRef & { number: number },
  ): Promise<RepositoryPullRequestSummary | null> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.number),
        "--repo",
        input.repositoryRef,
        "--json",
        "number,title,state,headRefOid,baseRefName,url,mergedAt",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        number: number;
        title: string;
        state: string;
        headRefOid: string;
        baseRefName: string;
        url: string;
        mergedAt?: string | null;
      };
      return {
        number: r.number,
        title: r.title,
        state: r.mergedAt ? "merged" : mapPrState(r.state),
        headSha: r.headRefOid,
        baseBranch: r.baseRefName,
        url: r.url,
      };
    } catch {
      return null;
    }
  }

  async listPullRequestFiles(
    input: RepositoryReadRef & { number: number },
  ): Promise<string[]> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.number),
        "--repo",
        input.repositoryRef,
        "--json",
        "files",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const parsed = JSON.parse(result.stdout) as {
        files?: Array<{ path: string }>;
      };
      return (parsed.files ?? []).map((f) => f.path);
    } catch {
      return [];
    }
  }

  async getPullRequestDiff(
    input: RepositoryReadRef & { number: number },
  ): Promise<string> {
    const result = await this.run(
      "gh",
      ["pr", "diff", String(input.number), "--repo", input.repositoryRef],
      this.cwd,
    );
    return result.exitCode === 0 ? result.stdout : "";
  }

  async listCommits(
    input: RepositoryReadRef & { ref?: string; limit?: number },
  ): Promise<RepositoryCommitSummary[]> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/commits?sha=${encodeURIComponent(input.ref ?? "HEAD")}&per_page=${input.limit ?? 20}`,
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    try {
      const rows = JSON.parse(result.stdout) as Array<{
        sha: string;
        commit?: { message?: string };
        parents?: Array<{ sha: string }>;
      }>;
      return rows.map((r) => ({
        sha: r.sha,
        message: r.commit?.message ?? "",
        parents: (r.parents ?? []).map((p) => p.sha),
      }));
    } catch {
      return [];
    }
  }

  async getCommit(
    input: RepositoryReadRef & { sha: string },
  ): Promise<RepositoryCommitSummary | null> {
    const result = await this.run(
      "gh",
      ["api", `repos/${input.repositoryRef}/commits/${input.sha}`],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        sha: string;
        commit?: { message?: string };
        parents?: Array<{ sha: string }>;
      };
      return {
        sha: r.sha,
        message: r.commit?.message ?? "",
        parents: (r.parents ?? []).map((p) => p.sha),
      };
    } catch {
      return null;
    }
  }

  async readFileAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<RepositoryFileContent | null> {
    // Prefer git show when local cwd is available; else GitHub Contents API GET.
    if (this.cwd) {
      const local = await this.run(
        "git",
        ["show", `${input.ref}:${input.path}`],
        this.cwd,
      );
      if (local.exitCode === 0) {
        return {
          path: input.path,
          ref: input.ref,
          content: local.stdout,
          digest: digestOf(local.stdout),
        };
      }
    }
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/contents/${encodeURIComponent(input.path)}?ref=${encodeURIComponent(input.ref)}`,
        "--jq",
        ".content",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0 || !result.stdout.trim()) return null;
    try {
      const b64 = result.stdout.trim().replace(/\s+/g, "");
      const content = Buffer.from(b64, "base64").toString("utf8");
      return {
        path: input.path,
        ref: input.ref,
        content,
        digest: digestOf(content),
      };
    } catch {
      return null;
    }
  }

  async listPathAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<string[]> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/contents/${encodeURIComponent(input.path)}?ref=${encodeURIComponent(input.ref)}`,
        "--jq",
        ".[].path",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return [];
    return result.stdout
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  async compareRefs(
    input: RepositoryReadRef & { base: string; head: string },
  ): Promise<RepositoryCompareResult> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/compare/${encodeURIComponent(input.base)}...${encodeURIComponent(input.head)}`,
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      return {
        base: input.base,
        head: input.head,
        aheadBy: 0,
        behindBy: 0,
        files: [],
      };
    }
    try {
      const parsed = JSON.parse(result.stdout) as {
        ahead_by?: number;
        behind_by?: number;
        files?: Array<{ filename: string }>;
      };
      return {
        base: input.base,
        head: input.head,
        aheadBy: parsed.ahead_by ?? 0,
        behindBy: parsed.behind_by ?? 0,
        files: (parsed.files ?? []).map((f) => f.filename),
      };
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
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/git/ref/heads/${encodeURIComponent(input.branch)}`,
        "--jq",
        ".object.sha",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    const sha = result.stdout.trim().toLowerCase();
    return /^[0-9a-f]{40}$/.test(sha) ? sha : null;
  }

  async getCiStatus(input: GitCiStatusInput): Promise<GitCiStatusOutput> {
    const result = await this.run(
      "gh",
      [
        "api",
        `repos/${input.repositoryRef}/commits/${input.commitSha}/status`,
        "--jq",
        ".state",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      return { conclusion: "pending", checkName: "github-status" };
    }
    const state = result.stdout.trim().toLowerCase();
    const conclusion =
      state === "success"
        ? "success"
        : state === "failure" || state === "error"
          ? "failure"
          : "pending";
    return { conclusion, checkName: "github-status" };
  }

  async getReviewStatus(
    input: GitReviewStatusInput,
  ): Promise<GitReviewStatusOutput> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--json",
        "reviewDecision",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return { state: "pending" };
    try {
      const parsed = JSON.parse(result.stdout) as { reviewDecision?: string };
      const d = (parsed.reviewDecision ?? "").toUpperCase();
      if (d === "APPROVED") return { state: "approved" };
      if (d === "CHANGES_REQUESTED") return { state: "changes_requested" };
      if (d === "COMMENTED") return { state: "commented" };
      return { state: "pending" };
    } catch {
      return { state: "pending" };
    }
  }

  async getMergeInfo(
    input: RepositoryReadRef & { prNumber: number },
  ): Promise<RepositoryMergeInfo | null> {
    const result = await this.run(
      "gh",
      [
        "pr",
        "view",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--json",
        "number,state,mergeCommit,baseRefName,headRefOid,mergedAt",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) return null;
    try {
      const r = JSON.parse(result.stdout) as {
        number: number;
        state: string;
        mergeCommit?: { oid?: string } | null;
        baseRefName: string;
        headRefOid: string;
        mergedAt?: string | null;
      };
      return {
        prNumber: r.number,
        state: r.mergedAt ? "merged" : mapPrState(r.state),
        mergeSha: r.mergeCommit?.oid?.toLowerCase() ?? null,
        targetBranch: r.baseRefName,
        headSha: r.headRefOid,
      };
    } catch {
      return null;
    }
  }

  async readArtifactDigestAtRef(
    input: RepositoryReadRef & { path: string; ref: string },
  ): Promise<Digest | null> {
    const file = await this.readFileAtRef(input);
    return file?.digest ?? null;
  }
}

function mapPrState(state: string): "open" | "closed" | "merged" {
  const s = state.toLowerCase();
  if (s === "merged") return "merged";
  if (s === "closed") return "closed";
  return "open";
}

/** @deprecated Prefer GithubCliRepositoryReadAdapter (D-GCEC-09 read-only). */
export const GithubCliRemotePorts = GithubCliRepositoryReadAdapter;
export type GithubCliRemotePortsOptions = GithubCliRepositoryReadAdapterOptions;
