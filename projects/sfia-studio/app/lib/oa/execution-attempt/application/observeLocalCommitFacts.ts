/**
 * CR-GCEC-GC-04 / CR-GCEC-AGENT-04 — READ-ONLY local Git observation for
 * verified local commit, bound to a governed Cont01 workspace identity.
 * Uses existing GitCommandRunner — no second Git subsystem, no mutations.
 */
import { createHash } from "node:crypto";
import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import type { GitCommandRunner } from "../infrastructure/studioGitWorktreeWorkspace";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { LocalCommitArtifactCheck } from "../domain/verifyLocalCommitFacts";
import type { PrepareWorkspaceRepositoryBinding } from "../ports/realExecutionWorkspacePort";
import { workspacePathForAttempt } from "../infrastructure/studioGitWorktreeWorkspace";

const MUTATION_FORBIDDEN = new Set([
  "add",
  "commit",
  "reset",
  "checkout",
  "switch",
  "restore",
  "clean",
  "push",
  "pull",
  "fetch",
  "rebase",
  "merge",
  "am",
  "cherry-pick",
  "tag",
  "branch",
  "config",
  "stash",
  "rm",
  "mv",
]);

export type LocalCommitObservedFacts = {
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly observedChangedPaths: readonly string[];
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  readonly commitsFromExpectedParent: number;
  readonly workspacePath: string;
  readonly observationSource: "studio:local_git_readonly";
  readonly priorAttemptId: string;
};

/**
 * Server-owned governed workspace descriptor (non-persistent, non-client DTO).
 * Produced from Cont01 resume / RealExecutionWorkspacePort — never free cwd.
 */
export type GovernedWorkspaceObservationContext = {
  readonly workspacePath: string;
  readonly execRoot: string;
  readonly priorAttemptId: string;
  readonly repositoryBinding: PrepareWorkspaceRepositoryBinding;
  /** Absolute path to the managed clone used for worktree registration checks. */
  readonly managedRepoRoot: string;
  /**
   * Optional common Git repository identity (dirname / pathRoot) when
   * deterministically available from Project binding.
   */
  readonly expectedCommonGitRoot?: string;
};

export type ObserveLocalCommitInput = {
  readonly gitRunner: GitCommandRunner;
  readonly governed: GovernedWorkspaceObservationContext;
  readonly spec: GitCommitLaunchSpec;
  /** Expected digests keyed by relative path (from VERIFIED Artifact Evidence). */
  readonly expectedArtifactDigests: Readonly<Record<string, string>>;
};

function assertReadOnlyArgv(argv: readonly string[]): void {
  if (argv.length === 0) throw new Error("local_git_observe_empty_argv");
  const cmd = argv[0]!;
  // Allow read-only `git remote get-url` (identity check). Forbid other remote ops.
  if (cmd === "remote") {
    if (argv[1] === "get-url") return;
    throw new Error(`local_git_observe_mutation_forbidden:remote`);
  }
  if (MUTATION_FORBIDDEN.has(cmd)) {
    throw new Error(`local_git_observe_mutation_forbidden:${cmd}`);
  }
}

async function runReadonly(
  runner: GitCommandRunner,
  cwd: string,
  argv: readonly string[],
): Promise<{ stdout: string; exitCode: number }> {
  assertReadOnlyArgv(argv);
  const r = await runner.run(argv, cwd);
  return { stdout: r.stdout, exitCode: r.exitCode };
}

function normalizeGitRemoteUrl(url: string): string {
  return url
    .trim()
    .replace(/\.git$/i, "")
    .replace(/^git@github\.com:/i, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
    .toLowerCase();
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

/**
 * Collect local commit facts from a governed Cont01 workspace.
 * Rejects free cwd / arbitrary Git repos / wrong remote / unregistered worktrees.
 *
 * Synthetic observation helpers are NOT exported from Product — tests use
 * `__tests__/oa/execution-attempt/support/localCommitTestFacts.ts`.
 */
export async function observeLocalCommitFacts(
  input: ObserveLocalCommitInput,
): Promise<
  | { ok: true; facts: LocalCommitObservedFacts }
  | { ok: false; reason: string }
> {
  // Hostile free-cwd channels.
  if (
    typeof (input as { freeCwd?: unknown }).freeCwd === "string" ||
    typeof (input as { cwd?: unknown }).cwd === "string" ||
    typeof (input as { workspacePath?: unknown }).workspacePath === "string"
  ) {
    return { ok: false, reason: "local_git_free_cwd_rejected" };
  }
  if (typeof (input as { cursorReportedPath?: unknown }).cursorReportedPath === "string") {
    return { ok: false, reason: "local_git_cursor_path_rejected" };
  }

  const gov = input.governed;
  if (!gov?.priorAttemptId?.trim()) {
    return { ok: false, reason: "local_git_prior_attempt_required" };
  }
  if (!gov.execRoot?.trim() || !gov.managedRepoRoot?.trim()) {
    return { ok: false, reason: "local_git_governed_roots_required" };
  }
  if (!gov.repositoryBinding?.identity?.trim() || !gov.repositoryBinding.remoteUrl?.trim()) {
    return { ok: false, reason: "local_git_repository_binding_required" };
  }

  const execRoot = path.resolve(gov.execRoot);
  const expectedPath = workspacePathForAttempt(execRoot, gov.priorAttemptId);
  let cwd = path.resolve(gov.workspacePath);
  let managedRoot = path.resolve(gov.managedRepoRoot);
  try {
    cwd = await realpath(cwd);
  } catch {
    return { ok: false, reason: "local_git_workspace_invalid" };
  }
  try {
    managedRoot = await realpath(managedRoot);
  } catch {
    return { ok: false, reason: "local_git_governed_roots_required" };
  }
  let expectedResolved = expectedPath;
  try {
    expectedResolved = await realpath(expectedPath);
  } catch {
    /* path may not exist yet — keep resolved form */
  }
  if (!cwd || cwd === "/" || gov.workspacePath.includes("\0")) {
    return { ok: false, reason: "local_git_workspace_invalid" };
  }
  if (cwd !== expectedResolved && cwd !== expectedPath) {
    return { ok: false, reason: "local_git_prior_attempt_path_mismatch" };
  }
  const execRootResolved = await realpath(execRoot).catch(() => execRoot);
  if (
    cwd !== execRootResolved &&
    !cwd.startsWith(execRootResolved + path.sep) &&
    cwd !== execRoot &&
    !cwd.startsWith(execRoot + path.sep)
  ) {
    return { ok: false, reason: "local_git_workspace_outside_exec_root" };
  }

  if (gov.expectedCommonGitRoot) {
    let expectedCommon = path.resolve(gov.expectedCommonGitRoot);
    try {
      expectedCommon = await realpath(expectedCommon);
    } catch {
      /* keep resolved */
    }
    if (managedRoot !== expectedCommon) {
      return { ok: false, reason: "local_git_common_root_mismatch" };
    }
  }

  // Repository identity BEFORE evaluating post-commit HEAD.
  const remote = await runReadonly(input.gitRunner, cwd, [
    "remote",
    "get-url",
    "origin",
  ]);
  if (remote.exitCode !== 0) {
    return { ok: false, reason: "local_git_origin_remote_missing" };
  }
  const actual = normalizeGitRemoteUrl(remote.stdout.trim());
  const expectedFromUrl = normalizeGitRemoteUrl(gov.repositoryBinding.remoteUrl);
  const expectedFromIdentity = normalizeGitRemoteUrl(
    `https://github.com/${gov.repositoryBinding.identity}.git`,
  );
  if (actual !== expectedFromUrl && actual !== expectedFromIdentity) {
    return { ok: false, reason: "local_git_origin_remote_mismatch" };
  }

  const list = await runReadonly(input.gitRunner, managedRoot, [
    "worktree",
    "list",
    "--porcelain",
  ]);
  if (list.exitCode !== 0) {
    return { ok: false, reason: "local_git_worktree_list_failed" };
  }
  const registered = porcelainWorktreePaths(list.stdout).some(
    (p) => path.resolve(p) === cwd || path.resolve(p) === path.resolve(gov.workspacePath),
  );
  if (!registered) {
    // macOS /var vs /private/var — compare realpaths when available.
    let matched = false;
    for (const p of porcelainWorktreePaths(list.stdout)) {
      try {
        if ((await realpath(p)) === cwd) {
          matched = true;
          break;
        }
      } catch {
        /* ignore */
      }
    }
    if (!matched) {
      return { ok: false, reason: "local_git_worktree_unregistered" };
    }
  }

  const inside = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "--is-inside-work-tree",
  ]);
  if (inside.exitCode !== 0 || inside.stdout.trim() !== "true") {
    return { ok: false, reason: "local_git_not_a_worktree" };
  }

  const toplevel = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "--show-toplevel",
  ]);
  if (toplevel.exitCode !== 0) {
    return { ok: false, reason: "local_git_toplevel_unreadable" };
  }
  if (path.resolve(toplevel.stdout.trim()) !== cwd) {
    try {
      if ((await realpath(toplevel.stdout.trim())) !== cwd) {
        return { ok: false, reason: "local_git_toplevel_mismatch" };
      }
    } catch {
      return { ok: false, reason: "local_git_toplevel_mismatch" };
    }
  }

  const headRes = await runReadonly(input.gitRunner, cwd, ["rev-parse", "HEAD"]);
  if (headRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_head_unreadable" };
  }
  const observedHeadSha = headRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedHeadSha)) {
    return { ok: false, reason: "local_git_head_invalid" };
  }

  const parentRes = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "HEAD^",
  ]);
  if (parentRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_parent_unreadable" };
  }
  const observedParentSha = parentRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedParentSha)) {
    return { ok: false, reason: "local_git_parent_invalid" };
  }

  const subjectRes = await runReadonly(input.gitRunner, cwd, [
    "log",
    "-1",
    "--format=%s",
    "HEAD",
  ]);
  if (subjectRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_subject_unreadable" };
  }
  const observedCommitMessage = subjectRes.stdout.replace(/\n$/, "");

  const namesRes = await runReadonly(input.gitRunner, cwd, [
    "diff-tree",
    "--no-commit-id",
    "--name-only",
    "-r",
    "HEAD",
  ]);
  if (namesRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_changed_paths_unreadable" };
  }
  const observedChangedPaths = namesRes.stdout
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const countRes = await runReadonly(input.gitRunner, cwd, [
    "rev-list",
    "--count",
    `${input.spec.expectedParentSha}..HEAD`,
  ]);
  if (countRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_lineage_unreadable" };
  }
  const commitsFromExpectedParent = Number.parseInt(countRes.stdout.trim(), 10);
  if (!Number.isFinite(commitsFromExpectedParent)) {
    return { ok: false, reason: "local_git_lineage_invalid" };
  }

  const statusRes = await runReadonly(input.gitRunner, cwd, [
    "status",
    "--porcelain",
    "-uall",
  ]);
  if (statusRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_status_unreadable" };
  }
  const worktreeDirty = statusRes.stdout.trim().length > 0;

  const artifactChecks: LocalCommitArtifactCheck[] = [];
  for (const rel of input.spec.exactPaths) {
    const expectedDigest = input.expectedArtifactDigests[rel];
    if (!expectedDigest) {
      return { ok: false, reason: "local_git_expected_digest_missing" };
    }
    const abs = path.resolve(cwd, ...rel.split("/"));
    if (!abs.startsWith(cwd + path.sep) && abs !== cwd) {
      return { ok: false, reason: "local_git_artifact_path_escape" };
    }
    let body: Buffer;
    try {
      body = await readFile(abs);
    } catch {
      return { ok: false, reason: "local_git_artifact_missing" };
    }
    const actualDigest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
    artifactChecks.push({
      path: rel,
      expectedDigest: expectedDigest.toLowerCase(),
      actualDigest,
    });
  }

  return {
    ok: true,
    facts: {
      observedHeadSha,
      observedParentSha,
      observedChangedPaths,
      observedCommitMessage,
      artifactChecks,
      worktreeDirty,
      commitsFromExpectedParent,
      workspacePath: cwd,
      priorAttemptId: gov.priorAttemptId,
      observationSource: "studio:local_git_readonly",
    },
  };
}
