/**
 * Shared temp governed worktree builder for Evidence / observer Product tests.
 * CR-GCEC-AGENT-09 — real Git + read-only observer (no synthetic Product facts).
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import {
  workspacePathForAttempt,
  type GovernedWorkspaceObservationContext,
  type GitCommitLaunchSpec,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";

export type GovernedCommitFixture = {
  managed: string;
  execRoot: string;
  wt: string;
  H0: string;
  H1: string;
  digest: string;
  governed: GovernedWorkspaceObservationContext;
  runner: GitCommandRunner;
  spec: GitCommitLaunchSpec;
  cleanup: () => void;
};

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

export function createGovernedCommittedWorktree(input: {
  priorAttemptId: string;
  pathRel: string;
  body: string;
  commitMessage: string;
  identity?: string;
  remoteUrl?: string;
}): GovernedCommitFixture {
  const identity = input.identity ?? "acme/widget";
  const remoteUrl =
    input.remoteUrl ?? `https://github.com/${identity}.git`;
  const temps: string[] = [];
  const managed = mkdtempSync(path.join(os.tmpdir(), "gcec-evp-managed-"));
  const execRoot = mkdtempSync(path.join(os.tmpdir(), "gcec-evp-exec-"));
  temps.push(managed, execRoot);

  mkdirSync(managed, { recursive: true });
  git(managed, ["init"]);
  git(managed, ["config", "user.email", "evp@test"]);
  git(managed, ["config", "user.name", "evp"]);
  writeFileSync(path.join(managed, "README.md"), "base\n");
  git(managed, ["add", "README.md"]);
  git(managed, ["commit", "-m", "base"]);
  const H0 = git(managed, ["rev-parse", "HEAD"]);
  git(managed, ["remote", "add", "origin", remoteUrl]);

  const wt = workspacePathForAttempt(execRoot, input.priorAttemptId);
  mkdirSync(path.dirname(wt), { recursive: true });
  git(managed, ["worktree", "add", wt, "HEAD"]);
  mkdirSync(path.join(wt, path.dirname(input.pathRel)), { recursive: true });
  writeFileSync(path.join(wt, input.pathRel), input.body);
  git(wt, ["add", input.pathRel]);
  git(wt, ["commit", "-m", input.commitMessage]);
  const H1 = git(wt, ["rev-parse", "HEAD"]);
  const digest = `sha256:${createHash("sha256").update(input.body).digest("hex")}`;

  const runner: GitCommandRunner = {
    async run(argv, cwd) {
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
    priorAttemptId: input.priorAttemptId,
    managedRepoRoot: managed,
    repositoryBinding: {
      identity,
      remoteUrl,
      defaultBranch: "main",
    },
    expectedCommonGitRoot: managed,
  };

  const spec: GitCommitLaunchSpec = {
    repositoryRef: identity,
    expectedParentSha: H0,
    exactPaths: [input.pathRel],
    commitMessage: input.commitMessage,
  };

  return {
    managed,
    execRoot,
    wt,
    H0,
    H1,
    digest,
    governed,
    runner,
    spec,
    cleanup: () => {
      for (const t of temps) {
        try {
          rmSync(t, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    },
  };
}
