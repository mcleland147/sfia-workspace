/**
 * Local git commit port — NodeGitCommandRunner style (spawn shell:false).
 * Authority: N2 Pilote (comment only). Never push. Force push never.
 */
import { spawn as nodeSpawn } from "node:child_process";
import type { LocalGitCommitInput, LocalGitCommitOutput, LocalGitCommitPort } from "./types";

type GitCommandResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
};

async function runGit(
  argv: readonly string[],
  cwd: string,
  env?: NodeJS.ProcessEnv,
): Promise<GitCommandResult> {
  return await new Promise((resolve) => {
    const child = nodeSpawn("git", [...argv], {
      cwd,
      shell: false,
      env: env ?? process.env,
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

function assertSafePaths(paths: readonly string[]): void {
  for (const p of paths) {
    if (!p || p.includes("\0") || p.startsWith("-")) {
      throw new Error("git_commit_path_invalid");
    }
    if (p.includes("..") || p.startsWith("/") || p.includes("\\")) {
      throw new Error("git_commit_path_escape");
    }
  }
}

export class NodeLocalGitCommitPort implements LocalGitCommitPort {
  async commit(input: LocalGitCommitInput): Promise<LocalGitCommitOutput> {
    const message = input.message.trim();
    if (!message) {
      throw new Error("git_commit_message_required");
    }
    if (!input.paths || input.paths.length === 0) {
      throw new Error("git_commit_paths_required");
    }
    assertSafePaths(input.paths);

    const add = await runGit(["add", "--", ...input.paths], input.repoPath);
    if (add.exitCode !== 0) {
      throw new Error(`git_add_failed:${add.stderr || add.stdout}`);
    }

    const env: NodeJS.ProcessEnv = {
      ...process.env,
      GIT_AUTHOR_NAME: input.authorName ?? "SFIA Studio",
      GIT_AUTHOR_EMAIL: input.authorEmail ?? "studio@local",
      GIT_COMMITTER_NAME: input.authorName ?? "SFIA Studio",
      GIT_COMMITTER_EMAIL: input.authorEmail ?? "studio@local",
    };

    const committed = await runGit(
      ["commit", "-m", message, "--", ...input.paths],
      input.repoPath,
      env,
    );
    if (committed.exitCode !== 0) {
      throw new Error(`git_commit_failed:${committed.stderr || committed.stdout}`);
    }

    const rev = await runGit(["rev-parse", "HEAD"], input.repoPath);
    if (rev.exitCode !== 0) {
      throw new Error("git_commit_sha_unreadable");
    }
    const commitSha = rev.stdout.trim().toLowerCase();
    if (!/^[0-9a-f]{40}$/.test(commitSha)) {
      throw new Error("git_commit_sha_invalid");
    }

    return { commitSha, message };
  }
}
