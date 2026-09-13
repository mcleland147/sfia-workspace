/**
 * Harness-only worktree registration preflight proofs. REAL flags stay unset.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertRegisteredGitWorktree,
  pathsEqualAllowingRealpath,
} from "./support/gcecRealHarnessWorktree";

const REAL_FLAGS = [
  "SFIA_STUDIO_CURSOR_REAL",
  "SFIA_GCEC_CURSOR_REAL_PROOF",
  "SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF",
  "SFIA_GCEC_CURSOR_REAL_PUSH_PROOF",
  "SFIA_GCEC_CURSOR_REAL_PR_PROOF",
] as const;

const roots: string[] = [];

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

function createRepoWithWorktree(): {
  root: string;
  repositoryRoot: string;
  worktreePath: string;
} {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "gcec-ad-wt-"));
  roots.push(root);
  const repositoryRoot = path.join(root, "repository");
  const worktreePath = path.join(root, "registered-worktree");
  fs.mkdirSync(repositoryRoot);
  git(repositoryRoot, ["init"]);
  fs.writeFileSync(path.join(repositoryRoot, "README.md"), "# fixture\n", "utf8");
  git(repositoryRoot, ["add", "README.md"]);
  git(repositoryRoot, [
    "-c",
    "user.name=GCEC Harness",
    "-c",
    "user.email=gcec-harness@example.invalid",
    "commit",
    "-m",
    "test: seed worktree fixture",
  ]);
  git(repositoryRoot, ["worktree", "add", "--detach", worktreePath, "HEAD"]);
  return { root, repositoryRoot, worktreePath };
}

describe("GCEC A→D harness worktree registration preflight (REAL OFF)", () => {
  beforeEach(() => {
    for (const flag of REAL_FLAGS) {
      expect(process.env[flag], `${flag} must remain unset`).not.toBe("1");
    }
  });

  afterEach(() => {
    for (const root of roots.splice(0)) {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("accepts a registered worktree from a temporary Git repository", () => {
    const { repositoryRoot, worktreePath } = createRepoWithWorktree();
    const registered = assertRegisteredGitWorktree({
      repositoryRoot,
      worktreePath,
    });
    expect(pathsEqualAllowingRealpath(registered, worktreePath)).toBe(true);
  });

  it("accepts a realpath-equivalent alias of a registered worktree", () => {
    const { root, repositoryRoot, worktreePath } = createRepoWithWorktree();
    const alias = path.join(root, "worktree-alias");
    fs.symlinkSync(worktreePath, alias);
    const registered = assertRegisteredGitWorktree({
      repositoryRoot,
      worktreePath: alias,
    });
    expect(pathsEqualAllowingRealpath(registered, alias)).toBe(true);
  });

  it("rejects a plain directory that Git has not registered", () => {
    const { root, repositoryRoot } = createRepoWithWorktree();
    const plainDirectory = path.join(root, "plain-directory");
    fs.mkdirSync(plainDirectory);
    expect(() =>
      assertRegisteredGitWorktree({
        repositoryRoot,
        worktreePath: plainDirectory,
      }),
    ).toThrow(/GCEC_REAL_HARNESS_WORKTREE_UNREGISTERED/);
  });
});
