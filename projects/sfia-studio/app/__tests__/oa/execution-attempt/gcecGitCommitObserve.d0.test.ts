/**
 * OBS — governed workspace READ-ONLY Git observation (CR-GCEC-AGENT-04).
 * ZERO mutation commands. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  observeLocalCommitFacts,
  workspacePathForAttempt,
  type GitCommitLaunchSpec,
  type GovernedWorkspaceObservationContext,
} from "@/lib/oa/execution-attempt";

const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const BODY = "# observed\n";
const PRIOR = "xat:obs-a";
const IDENTITY = "acme/widget";
const REMOTE = "https://github.com/acme/widget.git";

const temps: string[] = [];
afterEach(() => {
  for (const t of temps.splice(0)) {
    try {
      rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

function setupGovernedCommittedWorktree(): {
  managed: string;
  execRoot: string;
  wt: string;
  H0: string;
  H1: string;
  digest: string;
  governed: GovernedWorkspaceObservationContext;
  runner: {
    run: (
      argv: readonly string[],
      cwd: string,
    ) => Promise<{ stdout: string; stderr: string; exitCode: number }>;
  };
  commands: string[][];
} {
  const managed = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-managed-"));
  const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-exec-"));
  temps.push(managed, execRoot);
  git(managed, ["init", "--bare"]);
  // Seed via temp clone then push isn't needed — use non-bare seed then add worktree.
  const seed = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-seed-"));
  temps.push(seed);
  git(seed, ["init"]);
  git(seed, ["config", "user.email", "obs@test"]);
  git(seed, ["config", "user.name", "obs"]);
  writeFileSync(path.join(seed, "README.md"), "base\n");
  git(seed, ["add", "README.md"]);
  git(seed, ["commit", "-m", "base"]);
  const H0 = git(seed, ["rev-parse", "HEAD"]);
  git(seed, ["remote", "add", "origin", REMOTE]);
  // Convert seed into managed main worktree by cloning into managed as normal repo
  rmSync(managed, { recursive: true, force: true });
  // Re-init managed as normal repo with remote + worktree registration
  mkdirSync(managed, { recursive: true });
  git(managed, ["init"]);
  git(managed, ["config", "user.email", "obs@test"]);
  git(managed, ["config", "user.name", "obs"]);
  writeFileSync(path.join(managed, "README.md"), "base\n");
  git(managed, ["add", "README.md"]);
  git(managed, ["commit", "-m", "base"]);
  const H0m = git(managed, ["rev-parse", "HEAD"]);
  git(managed, ["remote", "add", "origin", REMOTE]);

  const wt = workspacePathForAttempt(execRoot, PRIOR);
  mkdirSync(path.dirname(wt), { recursive: true });
  git(managed, ["worktree", "add", wt, "HEAD"]);
  mkdirSync(path.join(wt, "docs"), { recursive: true });
  writeFileSync(path.join(wt, PATH), BODY);
  git(wt, ["add", PATH]);
  git(wt, ["commit", "-m", MSG]);
  const H1 = git(wt, ["rev-parse", "HEAD"]);
  const digest = `sha256:${createHash("sha256").update(BODY).digest("hex")}`;

  const commands: string[][] = [];
  const runner = {
    async run(argv: readonly string[], cwd: string) {
      commands.push([...argv]);
      try {
        const stdout = execFileSync("git", [...argv], {
          cwd,
          encoding: "utf8",
        });
        return { stdout, stderr: "", exitCode: 0 };
      } catch (err) {
        const e = err as { stdout?: string; stderr?: string; status?: number };
        return {
          stdout: e.stdout ?? "",
          stderr: e.stderr ?? String(err),
          exitCode: typeof e.status === "number" ? e.status : 1,
        };
      }
    },
  };

  const governed: GovernedWorkspaceObservationContext = {
    workspacePath: wt,
    execRoot,
    priorAttemptId: PRIOR,
    managedRepoRoot: managed,
    repositoryBinding: {
      identity: IDENTITY,
      remoteUrl: REMOTE,
      defaultBranch: "main",
    },
    expectedCommonGitRoot: managed,
  };

  return {
    managed,
    execRoot,
    wt,
    H0: H0m,
    H1,
    digest,
    governed,
    runner,
    commands,
  };
}

describe("GCEC local Git READ-ONLY observer OBS (governed)", () => {
  it("OBS-01..07 / OBS-18 governed workspace derives commit facts", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const spec: GitCommitLaunchSpec = {
      repositoryRef: IDENTITY,
      expectedParentSha: ctx.H0,
      exactPaths: [PATH],
      commitMessage: MSG,
    };
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: ctx.governed,
      spec,
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    if (!r.ok) throw new Error(r.reason);
    expect(r.ok).toBe(true);
    expect(r.facts.observedHeadSha).toBe(ctx.H1.toLowerCase());
    expect(r.facts.observedParentSha).toBe(ctx.H0.toLowerCase());
    expect(r.facts.observedChangedPaths).toEqual([PATH]);
    expect(r.facts.observedCommitMessage).toBe(MSG);
    expect(r.facts.commitsFromExpectedParent).toBe(1);
    expect(r.facts.worktreeDirty).toBe(false);
    expect(r.facts.priorAttemptId).toBe(PRIOR);
    expect(r.facts.observationSource).toBe("studio:local_git_readonly");

    for (const argv of ctx.commands) {
      expect([
        "add",
        "commit",
        "push",
        "reset",
        "checkout",
        "clean",
      ]).not.toContain(argv[0]);
    }
  });

  it("OBS-09 / OBS-17 free cwd and Cursor path authority rejected", async () => {
    const runner = {
      async run() {
        return { stdout: "", stderr: "", exitCode: 1 };
      },
    };
    const base = {
      gitRunner: runner,
      governed: {
        workspacePath: "/tmp/governed",
        execRoot: "/tmp/exec",
        priorAttemptId: PRIOR,
        managedRepoRoot: "/tmp/managed",
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: {},
    };
    const free = await observeLocalCommitFacts({
      ...base,
      freeCwd: "/evil",
    } as never);
    expect(free.ok).toBe(false);
    if (!free.ok) expect(free.reason).toMatch(/free_cwd/);

    const cursor = await observeLocalCommitFacts({
      ...base,
      cursorReportedPath: "/other",
    } as never);
    expect(cursor.ok).toBe(false);
    if (!cursor.ok) expect(cursor.reason).toMatch(/cursor_path/);
  });

  it("OBS-11 arbitrary valid Git repo path rejected (not governed)", async () => {
    const arbitrary = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-arb-"));
    temps.push(arbitrary);
    git(arbitrary, ["init"]);
    git(arbitrary, ["config", "user.email", "a@t"]);
    git(arbitrary, ["config", "user.name", "a"]);
    writeFileSync(path.join(arbitrary, "README.md"), "x\n");
    git(arbitrary, ["add", "README.md"]);
    git(arbitrary, ["commit", "-m", "x"]);
    git(arbitrary, ["remote", "add", "origin", REMOTE]);

    const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-exec2-"));
    temps.push(execRoot);
    const expected = workspacePathForAttempt(execRoot, PRIOR);
    const runner = {
      async run(argv: readonly string[], cwd: string) {
        const stdout = execFileSync("git", [...argv], { cwd, encoding: "utf8" });
        return { stdout, stderr: "", exitCode: 0 };
      },
    };
    const r = await observeLocalCommitFacts({
      gitRunner: runner,
      governed: {
        workspacePath: arbitrary, // not prior-derived path
        execRoot,
        priorAttemptId: PRIOR,
        managedRepoRoot: arbitrary,
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: "sha256:" + "ab".repeat(32) },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
    expect(arbitrary).not.toBe(expected);
  });

  it("OBS-12 wrong repository remote → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        repositoryBinding: {
          identity: "other/repo",
          remoteUrl: "https://github.com/other/repo.git",
          defaultBranch: "main",
        },
      },
      spec: {
        repositoryRef: "other/repo",
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/origin_remote_mismatch/);
  });

  it("OBS-13 unregistered worktree → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    // Remove worktree registration but keep directory
    git(ctx.managed, ["worktree", "remove", "--force", ctx.wt]);
    mkdirSync(ctx.wt, { recursive: true });
    writeFileSync(path.join(ctx.wt, "README.md"), "orphan\n");
    // orphan dir is not a registered worktree of managed
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: ctx.governed,
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(
        /unregistered|not_a_worktree|toplevel|origin_remote_missing/,
      );
    }
  });

  it("OBS-14 worktree outside execRoot → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        execRoot: path.join(ctx.execRoot, "nested-other"),
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.reason).toMatch(
        /prior_attempt_path_mismatch|outside_exec_root/,
      );
    }
  });

  it("OBS-15 wrong priorAttempt-derived path → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        priorAttemptId: "xat:other-prior",
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/prior_attempt_path_mismatch/);
  });

  it("OBS-16 wrong managed/common Git root → FAIL", async () => {
    const ctx = setupGovernedCommittedWorktree();
    const r = await observeLocalCommitFacts({
      gitRunner: ctx.runner,
      governed: {
        ...ctx.governed,
        expectedCommonGitRoot: path.join(ctx.managed, "not-here"),
      },
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: ctx.H0,
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [PATH]: ctx.digest },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/common_root_mismatch/);
  });
});
