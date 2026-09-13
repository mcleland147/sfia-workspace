/**
 * Local git status / diff read port — NodeGitCommandRunner style.
 */
import { spawn as nodeSpawn } from "node:child_process";
import type {
  LocalGitStatusDiffInput,
  LocalGitStatusDiffOutput,
  LocalGitStatusDiffPort,
} from "./types";

type GitCommandResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
};

async function runGit(
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
      if (stdout.length < 256 * 1024) stdout += c.toString("utf8");
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

export class NodeLocalGitStatusDiffPort implements LocalGitStatusDiffPort {
  async statusDiff(
    input: LocalGitStatusDiffInput,
  ): Promise<LocalGitStatusDiffOutput> {
    const pathspecs = input.pathspecs ?? [];
    for (const p of pathspecs) {
      if (!p || p.includes("\0") || p.startsWith("-") || p.includes("..")) {
        throw new Error("git_status_pathspec_invalid");
      }
    }

    const branchRes = await runGit(
      ["rev-parse", "--abbrev-ref", "HEAD"],
      input.repoPath,
    );
    const headRes = await runGit(["rev-parse", "HEAD"], input.repoPath);
    const statusArgs = ["status", "--porcelain", "-uall"];
    if (pathspecs.length > 0) statusArgs.push("--", ...pathspecs);
    const statusRes = await runGit(statusArgs, input.repoPath);

    const diffArgs = ["diff", "--stat"];
    if (pathspecs.length > 0) diffArgs.push("--", ...pathspecs);
    const diffRes = await runGit(diffArgs, input.repoPath);

    const branch =
      branchRes.exitCode === 0 ? branchRes.stdout.trim() || null : null;
    const headSha =
      headRes.exitCode === 0
        ? headRes.stdout.trim().toLowerCase() || null
        : null;
    const statusPorcelain =
      statusRes.exitCode === 0 ? statusRes.stdout : statusRes.stderr;
    const dirty = statusPorcelain.trim().length > 0;

    return {
      branch,
      headSha: headSha && /^[0-9a-f]{40}$/.test(headSha) ? headSha : null,
      dirty,
      statusPorcelain,
      diffStat: diffRes.exitCode === 0 ? diffRes.stdout : "",
    };
  }
}
