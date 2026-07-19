import { spawn } from "node:child_process";
import type { GitCommandResult, GitOp } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { GitReaderPort } from "./gitReader.js";
import type { PolicyEngine } from "../policy/policyEngine.js";
import type { ExecutionContract } from "../types/contracts.js";

const MAX_OUTPUT = 256_000;

export class GitReaderImpl implements GitReaderPort {
  constructor(
    private readonly contract: ExecutionContract,
    private readonly policy: PolicyEngine,
    private readonly timeoutMs = contract.timeoutMs,
  ) {}

  async run(op: GitOp): Promise<GitCommandResult> {
    this.policy.assertGitOp(this.contract, op);
    const argv = toArgv(op);
    // Never shell
    return this.execGit(argv);
  }

  private execGit(argv: string[]): Promise<GitCommandResult> {
    const started = Date.now();
    return new Promise((resolve, reject) => {
      const child = spawn("git", argv, {
        cwd: this.contract.repositoryRoot,
        shell: false,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
      });
      let stdout = "";
      let stderr = "";
      let killed = false;
      const timer = setTimeout(() => {
        killed = true;
        child.kill("SIGTERM");
      }, this.timeoutMs);

      child.stdout.on("data", (buf: Buffer) => {
        stdout += buf.toString("utf8");
        if (stdout.length > MAX_OUTPUT) {
          killed = true;
          child.kill("SIGTERM");
        }
      });
      child.stderr.on("data", (buf: Buffer) => {
        stderr += buf.toString("utf8");
        if (stderr.length > MAX_OUTPUT) {
          killed = true;
          child.kill("SIGTERM");
        }
      });
      child.on("error", (err) => {
        clearTimeout(timer);
        reject(new HarnessError("GIT_SPAWN_ERROR", err.message));
      });
      child.on("close", (code) => {
        clearTimeout(timer);
        if (killed && (stdout.length > MAX_OUTPUT || stderr.length > MAX_OUTPUT)) {
          reject(new HarnessError("GIT_OUTPUT_LIMIT", "git output exceeded limit"));
          return;
        }
        if (killed) {
          reject(new HarnessError("GIT_TIMEOUT", "git command timed out"));
          return;
        }
        resolve({
          argv: ["git", ...argv],
          stdout: stdout.slice(0, MAX_OUTPUT),
          stderr: stderr.slice(0, MAX_OUTPUT),
          exitCode: code ?? 1,
          durationMs: Date.now() - started,
        });
      });
    });
  }
}

export function toArgv(op: GitOp): string[] {
  switch (op.op) {
    case "branch-show-current":
      return ["branch", "--show-current"];
    case "rev-parse":
      return ["rev-parse", op.ref];
    case "merge-base":
      return ["merge-base", op.a, op.b];
    case "status-short":
      return ["status", "--short"];
    case "diff-check":
      return ["diff", "--check"];
    case "diff-stat":
      return ["diff", "--stat"];
    case "diff-name-status":
      return ["diff", "--name-status"];
    case "log":
      return ["log", "--oneline", `-n${op.maxCount}`];
    case "show":
      return ["show", "--no-patch", "--format=%H %s", op.revPath];
    case "ls-remote":
      return ["ls-remote", "--heads", op.remote ?? "origin"];
    default: {
      const _exhaustive: never = op;
      throw new HarnessError("GIT_OP_UNKNOWN", String(_exhaustive));
    }
  }
}

/** Typed denial helper for tests — never executes. */
export function denyWriteOp(name: string): never {
  throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied Git write: ${name}`);
}
