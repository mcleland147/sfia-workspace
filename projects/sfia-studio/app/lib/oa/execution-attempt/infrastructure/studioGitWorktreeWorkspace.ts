/**
 * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2).
 *
 * Injectable GitCommandRunner; production default spawn(shell:false).
 * Tests MUST inject FakeGitCommandRunner — never run real git worktree in REAL-OFF.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn as nodeSpawn } from "node:child_process";
import type {
  PrepareWorkspaceRequest,
  PrepareWorkspaceResult,
  RealExecutionWorkspacePort,
} from "../ports/realExecutionWorkspacePort";

export type GitCommandResult = {
  readonly stdout: string;
  readonly stderr: string;
  readonly exitCode: number;
};

export interface GitCommandRunner {
  run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult>;
}

export type StudioGitWorktreeWorkspaceOptions = {
  readonly repoRoot: string;
  readonly execRoot: string;
  readonly gitRunner: GitCommandRunner;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function isFullGitSha(value: unknown): value is string {
  return typeof value === "string" && FULL_SHA_RE.test(value);
}

export function workspacePathForAttempt(
  execRoot: string,
  attemptId: string,
): string {
  const digest = createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
  const safe = attemptId.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 48);
  return path.resolve(execRoot, `wt-${safe}-${digest}`);
}

export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
  private readonly repoRoot: string;
  private readonly execRoot: string;
  private readonly gitRunner: GitCommandRunner;

  constructor(options: StudioGitWorktreeWorkspaceOptions) {
    if (!options.repoRoot || options.repoRoot.trim() === "") {
      throw new Error("studio_git_worktree_repo_root_required");
    }
    if (!options.execRoot || options.execRoot.trim() === "") {
      throw new Error("studio_git_worktree_exec_root_required");
    }
    const repoRoot = path.resolve(options.repoRoot);
    const execRoot = path.resolve(options.execRoot);
    if (repoRoot === execRoot) {
      throw new Error("studio_git_worktree_repo_exec_roots_must_differ");
    }
    if (!options.gitRunner) {
      throw new Error("studio_git_worktree_git_runner_required");
    }
    this.repoRoot = repoRoot;
    this.execRoot = execRoot;
    this.gitRunner = options.gitRunner;
  }

  async prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult> {
    if (!isFullGitSha(request.baseHeadSha)) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_invalid");
    }
    const baseHeadSha = request.baseHeadSha.toLowerCase();
    const workspacePath = workspacePathForAttempt(
      this.execRoot,
      request.attemptId,
    );

    if (
      workspacePath !== this.execRoot &&
      !workspacePath.startsWith(this.execRoot + path.sep)
    ) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_outside_exec_root");
    }
    if (existsSync(workspacePath)) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_path_exists");
    }

    // a) verify commit exists
    const verify = await this.gitRunner.run(
      ["rev-parse", "--verify", `${baseHeadSha}^{commit}`],
      this.repoRoot,
    );
    if (verify.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_missing");
    }

    // b) worktree add --detach
    const add = await this.gitRunner.run(
      ["worktree", "add", "--detach", workspacePath, baseHeadSha],
      this.repoRoot,
    );
    if (add.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:worktree_add_failed");
    }

    // c) rev-parse HEAD must equal baseHeadSha exactly
    const head = await this.gitRunner.run(["rev-parse", "HEAD"], workspacePath);
    if (head.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:head_rev_parse_failed");
    }
    const verifiedHeadSha = head.stdout.trim().toLowerCase();
    if (verifiedHeadSha !== baseHeadSha) {
      throw new Error("REAL_WORKSPACE_INVALID:head_mismatch");
    }

    return { workspacePath, verifiedHeadSha };
  }
}

/**
 * Production GitCommandRunner — spawn(shell:false).
 * Tests MUST NOT use this; inject FakeGitCommandRunner instead.
 */
export class NodeGitCommandRunner implements GitCommandRunner {
  async run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult> {
    return await new Promise((resolve) => {
      const child = nodeSpawn("git", [...argv], {
        cwd,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stdout = "";
      let stderr = "";
      child.stdout?.on("data", (c: Buffer) => {
        if (stdout.length < 64 * 1024) stdout += c.toString("utf8");
      });
      child.stderr?.on("data", (c: Buffer) => {
        if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
      });
      child.on("error", () => {
        resolve({ stdout, stderr: stderr || "git_spawn_error", exitCode: 1 });
      });
      child.on("close", (code) => {
        resolve({ stdout, stderr, exitCode: code ?? 1 });
      });
    });
  }
}
