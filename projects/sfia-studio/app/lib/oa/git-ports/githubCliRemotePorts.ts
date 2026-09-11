/**
 * CR-GCEC-06 — GitHub CLI remote ports (gh fixed argv, shell:false).
 * NEVER invoke in unit tests — inject FakeGitProviderPorts instead.
 */
import { spawn as nodeSpawn } from "node:child_process";
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

type CmdResult = { stdout: string; stderr: string; exitCode: number };

async function runFixedArgv(
  executable: string,
  argv: readonly string[],
  cwd?: string,
): Promise<CmdResult> {
  return await new Promise((resolve) => {
    const child = nodeSpawn(executable, [...argv], {
      cwd,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (c: Buffer) => {
      if (stdout.length < 256 * 1024) stdout += c.toString("utf8");
    });
    child.stderr?.on("data", (c: Buffer) => {
      if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
    });
    child.on("error", () => {
      resolve({ stdout, stderr: stderr || "spawn_error", exitCode: 1 });
    });
    child.on("close", (code) => {
      resolve({ stdout, stderr, exitCode: code ?? 1 });
    });
  });
}

export type GithubCliRemotePortsOptions = {
  /** Injectable runner — tests MUST inject a fake; never call real `gh` in tests. */
  run?: (
    executable: string,
    argv: readonly string[],
    cwd?: string,
  ) => Promise<CmdResult>;
  cwd?: string;
};

export class GithubCliRemotePorts
  implements
    GitRemotePushPort,
    GitPullRequestPort,
    GitCiStatusPort,
    GitReviewStatusPort,
    GitMergePort
{
  private readonly run: NonNullable<GithubCliRemotePortsOptions["run"]>;
  private readonly cwd?: string;

  constructor(options: GithubCliRemotePortsOptions = {}) {
    this.run = options.run ?? runFixedArgv;
    this.cwd = options.cwd;
  }

  async push(input: GitRemotePushInput): Promise<GitRemotePushOutput> {
    if (input.force === true) {
      throw new Error("git_force_push_forbidden");
    }
    const result = await this.run(
      "gh",
      [
        "api",
        "-X",
        "POST",
        `repos/${input.repositoryRef}/git/refs`,
        "-f",
        `ref=refs/heads/${input.refName}`,
        "-f",
        `sha=${input.commitSha}`,
      ],
      this.cwd,
    );
    // Prefer git push via gh when ref exists — fall back to git push argv.
    if (result.exitCode !== 0) {
      const push = await this.run(
        "git",
        ["push", input.remote, `${input.commitSha}:refs/heads/${input.refName}`],
        this.cwd,
      );
      if (push.exitCode !== 0) {
        throw new Error(`github_cli_push_failed:${push.stderr || push.stdout}`);
      }
    }
    return {
      remote: input.remote,
      refName: input.refName,
      commitSha: input.commitSha,
    };
  }

  async openPullRequest(
    input: GitPullRequestInput,
  ): Promise<GitPullRequestOutput> {
    const argv = [
      "pr",
      "create",
      "--repo",
      input.repositoryRef,
      "--title",
      input.title,
      "--head",
      input.headRef,
      "--base",
      input.baseRef,
      "--body",
      input.body ?? "",
      "--json",
      "number,url,headRefOid,baseRefName",
    ];
    const result = await this.run("gh", argv, this.cwd);
    if (result.exitCode !== 0) {
      throw new Error(`github_cli_pr_failed:${result.stderr || result.stdout}`);
    }
    const parsed = JSON.parse(result.stdout) as {
      number: number;
      url: string;
      headRefOid: string;
      baseRefName: string;
    };
    return {
      prNumber: parsed.number,
      url: parsed.url,
      headSha: parsed.headRefOid,
      baseRef: parsed.baseRefName,
    };
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
    if (result.exitCode !== 0) {
      return { state: "pending" };
    }
    const parsed = JSON.parse(result.stdout) as { reviewDecision?: string };
    const d = (parsed.reviewDecision ?? "").toUpperCase();
    if (d === "APPROVED") return { state: "approved" };
    if (d === "CHANGES_REQUESTED") return { state: "changes_requested" };
    if (d === "COMMENTED") return { state: "commented" };
    return { state: "pending" };
  }

  async mergePullRequest(input: GitMergeInput): Promise<GitMergeOutput> {
    if (!input.mergeConfirmationId.trim()) {
      throw new Error("git_merge_confirmation_required");
    }
    const result = await this.run(
      "gh",
      [
        "pr",
        "merge",
        String(input.prNumber),
        "--repo",
        input.repositoryRef,
        "--merge",
        "--json",
        "mergeCommit",
      ],
      this.cwd,
    );
    if (result.exitCode !== 0) {
      throw new Error(
        `github_cli_merge_failed:${result.stderr || result.stdout}`,
      );
    }
    let mergeCommitSha = "";
    try {
      const parsed = JSON.parse(result.stdout) as {
        mergeCommit?: { oid?: string };
      };
      mergeCommitSha = parsed.mergeCommit?.oid ?? "";
    } catch {
      mergeCommitSha = "";
    }
    if (!/^[0-9a-f]{40}$/i.test(mergeCommitSha)) {
      throw new Error("github_cli_merge_sha_missing");
    }
    return {
      mergeCommitSha: mergeCommitSha.toLowerCase(),
      baseRef: "main",
      prNumber: input.prNumber,
    };
  }
}
