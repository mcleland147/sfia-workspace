/**
 * TEST-ONLY — shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15).
 * Mutations emulate Cursor-owned effects. Studio read adapters observe the same
 * instance via FakeRepositoryReadPorts — ZERO real remote GitHub.
 */
import { createHash, randomBytes } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile } from "node:fs/promises";
import path from "node:path";

const execFileAsync = promisify(execFile);

export type FakeCursorCommitRecord = {
  sha: string;
  message: string;
  parent?: string;
};

export type FakeCursorPrRecord = {
  number: number;
  headSha: string;
  base: string;
  state: "open" | "closed" | "merged";
  mergeSha?: string;
  headBranch?: string;
};

export type FakeCursorCiConclusion =
  | "success"
  | "failure"
  | "pending"
  | "neutral"
  | "cancelled";

export type FakeCursorReviewState =
  | "approved"
  | "changes_requested"
  | "commented"
  | "pending";

function fakeSha(seed: string): string {
  return createHash("sha1").update(seed).digest("hex");
}

async function runGit(
  worktreeRoot: string,
  argv: readonly string[],
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  try {
    const { stdout, stderr } = await execFileAsync("git", [...argv], {
      cwd: worktreeRoot,
      encoding: "utf8",
      maxBuffer: 4 * 1024 * 1024,
      // shell defaults false for execFile
    });
    return {
      stdout: typeof stdout === "string" ? stdout : String(stdout),
      stderr: typeof stderr === "string" ? stderr : String(stderr),
      exitCode: 0,
    };
  } catch (err) {
    const e = err as {
      stdout?: string;
      stderr?: string;
      code?: number | string;
    };
    return {
      stdout: e.stdout ?? "",
      stderr: e.stderr ?? (err instanceof Error ? err.message : "git_error"),
      exitCode: typeof e.code === "number" ? e.code : 1,
    };
  }
}

/**
 * Shared Fake Cursor Git world. Prefer real disposable git via fixed argv when
 * worktreeRoot is a git repo; otherwise keep in-memory commits/refs.
 */
export class FakeCursorGitExternalState {
  worktreeRoot: string;
  commits: FakeCursorCommitRecord[] = [];
  branchHeads = new Map<string, string>();
  prs = new Map<number, FakeCursorPrRecord>();
  ci = new Map<string, FakeCursorCiConclusion>();
  reviews = new Map<number, FakeCursorReviewState>();
  /** path → content snapshots keyed by commit sha (for RepositoryReadPort). */
  filesByShaPath = new Map<string, Map<string, string>>();
  private nextPrNumber = 1;
  currentBranch: string;

  constructor(options: {
    worktreeRoot: string;
    initialBranch?: string;
    initialSha?: string;
  }) {
    this.worktreeRoot = options.worktreeRoot;
    this.currentBranch = options.initialBranch ?? "main";
    if (options.initialSha) {
      this.branchHeads.set(
        this.currentBranch,
        options.initialSha.toLowerCase(),
      );
    }
  }

  async isGitRepo(): Promise<boolean> {
    const r = await runGit(this.worktreeRoot, [
      "rev-parse",
      "--is-inside-work-tree",
    ]);
    return r.exitCode === 0 && r.stdout.trim() === "true";
  }

  /**
   * Stage paths and commit. Prefers real git add+commit when worktree is a repo.
   */
  async commit(
    paths: readonly string[],
    message: string,
  ): Promise<FakeCursorCommitRecord> {
    const parent =
      this.branchHeads.get(this.currentBranch) ??
      this.commits[this.commits.length - 1]?.sha;

    if (await this.isGitRepo()) {
      if (paths.length > 0) {
        const add = await runGit(this.worktreeRoot, ["add", "--", ...paths]);
        if (add.exitCode !== 0) {
          throw new Error(`fake_git_add_failed:${add.stderr || add.stdout}`);
        }
      }
      const committed = await runGit(this.worktreeRoot, [
        "commit",
        "-m",
        message,
        "--allow-empty",
      ]);
      if (committed.exitCode !== 0) {
        throw new Error(
          `fake_git_commit_failed:${committed.stderr || committed.stdout}`,
        );
      }
      const rev = await runGit(this.worktreeRoot, ["rev-parse", "HEAD"]);
      if (rev.exitCode !== 0) {
        throw new Error("fake_git_rev_parse_failed");
      }
      const sha = rev.stdout.trim().toLowerCase();
      const record: FakeCursorCommitRecord = {
        sha,
        message,
        ...(parent ? { parent } : {}),
      };
      this.commits.push(record);
      this.branchHeads.set(this.currentBranch, sha);
      await this.snapshotPaths(sha, paths);
      return record;
    }

    const sha = fakeSha(
      `${parent ?? "root"}:${message}:${paths.join(",")}:${randomBytes(4).toString("hex")}`,
    );
    const record: FakeCursorCommitRecord = {
      sha,
      message,
      ...(parent ? { parent } : {}),
    };
    this.commits.push(record);
    this.branchHeads.set(this.currentBranch, sha);
    await this.snapshotPaths(sha, paths);
    return record;
  }

  /** Fake remote: advance branch head to current local tip. */
  push(branch: string): { ref: string; sha: string } {
    const sha =
      this.branchHeads.get(branch) ??
      this.branchHeads.get(this.currentBranch) ??
      this.commits[this.commits.length - 1]?.sha;
    if (!sha) {
      throw new Error("fake_git_push_no_sha");
    }
    this.branchHeads.set(branch, sha.toLowerCase());
    this.currentBranch = branch;
    return { ref: branch, sha: sha.toLowerCase() };
  }

  openPr(base: string, head: string): FakeCursorPrRecord {
    const headSha =
      this.branchHeads.get(head) ??
      this.commits[this.commits.length - 1]?.sha;
    if (!headSha) {
      throw new Error("fake_pr_create_no_head_sha");
    }
    const number = this.nextPrNumber++;
    const pr: FakeCursorPrRecord = {
      number,
      headSha: headSha.toLowerCase(),
      base,
      state: "open",
      headBranch: head,
    };
    this.prs.set(number, pr);
    return pr;
  }

  setCi(sha: string, conclusion: FakeCursorCiConclusion): void {
    this.ci.set(sha.toLowerCase(), conclusion);
  }

  setReview(pr: number, state: FakeCursorReviewState): void {
    this.reviews.set(pr, state);
  }

  mergePr(pr: number): FakeCursorPrRecord {
    const existing = this.prs.get(pr);
    if (!existing) {
      throw new Error(`fake_pr_merge_missing:${pr}`);
    }
    const mergeSha = fakeSha(
      `merge:${pr}:${existing.headSha}:${existing.base}:${randomBytes(4).toString("hex")}`,
    );
    const merged: FakeCursorPrRecord = {
      ...existing,
      state: "merged",
      mergeSha,
    };
    this.prs.set(pr, merged);
    this.branchHeads.set(existing.base, mergeSha);
    this.commits.push({
      sha: mergeSha,
      message: `Merge PR #${pr}`,
      parent: existing.headSha,
    });
    // Carry head file snapshots onto merge SHA so RepositoryRead can observe
    // post-merge artifact digests (Studio verify).
    const headFiles = this.filesByShaPath.get(existing.headSha.toLowerCase());
    if (headFiles) {
      this.filesByShaPath.set(mergeSha, new Map(headFiles));
    }
    return merged;
  }

  private async snapshotPaths(
    sha: string,
    paths: readonly string[],
  ): Promise<void> {
    const map = this.filesByShaPath.get(sha) ?? new Map<string, string>();
    for (const rel of paths) {
      const abs = path.resolve(this.worktreeRoot, rel);
      try {
        const content = await readFile(abs, "utf8");
        map.set(rel.replace(/\\/g, "/"), content);
      } catch {
        // path may be missing in pure in-memory mode
      }
    }
    this.filesByShaPath.set(sha, map);
  }
}
