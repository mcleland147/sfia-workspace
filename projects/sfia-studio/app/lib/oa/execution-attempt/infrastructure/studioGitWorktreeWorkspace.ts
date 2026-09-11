/**
 * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2)
 * + D-GCEC-CONT-01 prior-Attempt resume/attach/verify (pre-commit window).
 *
 * Injectable GitCommandRunner; production default spawn(shell:false).
 * Tests MUST inject FakeGitCommandRunner — never run real git worktree in REAL-OFF.
 *
 * Resume NEVER: worktree add, checkout, reset, copy, stage, or commit.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { spawn as nodeSpawn } from "node:child_process";
import type {
  PrepareWorkspaceRequest,
  PrepareWorkspaceResult,
  RealExecutionWorkspacePort,
  ResumeVerifiedWorkspaceRequest,
  ResumeVerifiedWorkspaceResult,
} from "../ports/realExecutionWorkspacePort";
import { assertCursorTrustMarkerPathCompatible } from "./cursorTrustMarkerPathCompatibility";

export {
  CURSOR_TRUST_MARKER_NAME_MAX_BYTES,
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  assertCursorTrustMarkerPathCompatible,
  cursorTrustMarkerProjectComponent,
  cursorTrustMarkerProjectComponentByteLength,
  isCursorTrustMarkerPathCompatible,
} from "./cursorTrustMarkerPathCompatibility";

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

/** Physical leaf only — `wt-` + sha256(attemptId) hex prefix (24). */
export function physicalWorktreeLeafForAttempt(attemptId: string): string {
  const digest = createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
  return `wt-${digest}`;
}

export function workspacePathForAttempt(
  execRoot: string,
  attemptId: string,
): string {
  return path.resolve(execRoot, physicalWorktreeLeafForAttempt(attemptId));
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

    // CR-GCEC-03 — managedRepoRoot overrides ambient constructor repoRoot for this prepare.
    const repoRoot = request.managedRepoRoot
      ? path.resolve(request.managedRepoRoot)
      : this.repoRoot;

    if (request.repositoryBinding) {
      const remote = await this.gitRunner.run(
        ["remote", "get-url", "origin"],
        repoRoot,
      );
      if (remote.exitCode !== 0) {
        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_missing");
      }
      const actual = normalizeGitRemoteUrl(remote.stdout.trim());
      const expectedFromUrl = normalizeGitRemoteUrl(
        request.repositoryBinding.remoteUrl,
      );
      const expectedFromIdentity = normalizeGitRemoteUrl(
        `https://github.com/${request.repositoryBinding.identity}.git`,
      );
      if (actual !== expectedFromUrl && actual !== expectedFromIdentity) {
        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_mismatch");
      }
      // pathRoot noted for write-layer enforcement (docsWriteSpec pathAllowlist).
      void request.repositoryBinding.pathRoot;
    }

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
    assertCursorTrustMarkerPathCompatible(workspacePath);

    // a) verify commit exists
    const verify = await this.gitRunner.run(
      ["rev-parse", "--verify", `${baseHeadSha}^{commit}`],
      repoRoot,
    );
    if (verify.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_missing");
    }

    // b) worktree add --detach
    const add = await this.gitRunner.run(
      ["worktree", "add", "--detach", workspacePath, baseHeadSha],
      repoRoot,
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

  /**
   * D-GCEC-CONT-01 — derive path from priorAttemptId + execRoot; verify only.
   */
  async resumeVerifiedWorkspace(
    request: ResumeVerifiedWorkspaceRequest,
  ): Promise<ResumeVerifiedWorkspaceResult> {
    if (!request.priorAttemptId?.trim()) {
      throw new Error("REAL_WORKSPACE_INVALID:prior_attempt_id_required");
    }
    if (!isFullGitSha(request.expectedHeadSha)) {
      throw new Error("REAL_WORKSPACE_INVALID:expected_head_sha_invalid");
    }
    const expectedHeadSha = request.expectedHeadSha.toLowerCase();

    const repoRoot = request.managedRepoRoot
      ? path.resolve(request.managedRepoRoot)
      : this.repoRoot;

    const workspacePath = workspacePathForAttempt(
      this.execRoot,
      request.priorAttemptId,
    );
    if (
      workspacePath !== this.execRoot &&
      !workspacePath.startsWith(this.execRoot + path.sep)
    ) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_outside_exec_root");
    }
    if (!existsSync(workspacePath)) {
      throw new Error("REAL_WORKSPACE_INVALID:resume_workspace_missing");
    }
    assertCursorTrustMarkerPathCompatible(workspacePath);

    // Registered worktree of expected managed repository (not basename trust).
    const list = await this.gitRunner.run(
      ["worktree", "list", "--porcelain"],
      repoRoot,
    );
    if (list.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:worktree_list_failed");
    }
    const registered = porcelainWorktreePaths(list.stdout).some(
      (p) => path.resolve(p) === workspacePath,
    );
    if (!registered) {
      throw new Error("REAL_WORKSPACE_INVALID:worktree_unregistered");
    }

    const toplevel = await this.gitRunner.run(
      ["rev-parse", "--show-toplevel"],
      workspacePath,
    );
    if (toplevel.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:toplevel_missing");
    }
    const top = path.resolve(toplevel.stdout.trim());
    if (top !== workspacePath) {
      throw new Error("REAL_WORKSPACE_INVALID:toplevel_mismatch");
    }

    if (request.repositoryBinding) {
      const remote = await this.gitRunner.run(
        ["remote", "get-url", "origin"],
        workspacePath,
      );
      if (remote.exitCode !== 0) {
        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_missing");
      }
      const actual = normalizeGitRemoteUrl(remote.stdout.trim());
      const expectedFromUrl = normalizeGitRemoteUrl(
        request.repositoryBinding.remoteUrl,
      );
      const expectedFromIdentity = normalizeGitRemoteUrl(
        `https://github.com/${request.repositoryBinding.identity}.git`,
      );
      if (actual !== expectedFromUrl && actual !== expectedFromIdentity) {
        throw new Error("REAL_WORKSPACE_INVALID:origin_remote_mismatch");
      }
    }

    const head = await this.gitRunner.run(["rev-parse", "HEAD"], workspacePath);
    if (head.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:head_rev_parse_failed");
    }
    const verifiedHeadSha = head.stdout.trim().toLowerCase();
    if (verifiedHeadSha !== expectedHeadSha) {
      throw new Error("REAL_WORKSPACE_INVALID:head_mismatch");
    }

    for (const file of request.expectedVerifiedFiles) {
      const rel = file.path.replace(/\\/g, "/").replace(/^\.\//, "").trim();
      if (!rel || rel.includes("..") || path.isAbsolute(rel)) {
        throw new Error("REAL_WORKSPACE_INVALID:expected_file_path_invalid");
      }
      const abs = path.join(workspacePath, rel);
      if (!abs.startsWith(workspacePath + path.sep) && abs !== workspacePath) {
        throw new Error("REAL_WORKSPACE_INVALID:expected_file_outside_workspace");
      }
      if (!existsSync(abs)) {
        throw new Error("REAL_WORKSPACE_INVALID:expected_file_missing");
      }
      const expectedDigest = file.digest.trim().toLowerCase();
      if (!expectedDigest.startsWith("sha256:")) {
        throw new Error("REAL_WORKSPACE_INVALID:expected_digest_invalid");
      }
      const buf = readFileSync(abs);
      const actualDigest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;
      if (actualDigest !== expectedDigest) {
        throw new Error("REAL_WORKSPACE_INVALID:expected_digest_mismatch");
      }
    }

    return {
      workspacePath,
      verifiedHeadSha,
      priorAttemptId: request.priorAttemptId,
    };
  }
}

function porcelainWorktreePaths(porcelain: string): string[] {
  const out: string[] = [];
  for (const line of porcelain.split("\n")) {
    if (line.startsWith("worktree ")) {
      out.push(line.slice("worktree ".length).trim());
    }
  }
  return out;
}

function normalizeGitRemoteUrl(url: string): string {
  return url
    .trim()
    .replace(/\.git$/i, "")
    .replace(/^git@github\.com:/i, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
    .toLowerCase();
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
