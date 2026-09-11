/**
 * Shared gh CLI transport — fixed argv, shell:false (CR-GCEC-18).
 * Lowest shared layer for platform GhCliGithubReadAdapter and OA
 * GithubCliRepositoryReadAdapter. No Product mutation argv.
 */
import { spawn as nodeSpawn } from "node:child_process";

export type GhCliCmdResult = {
  stdout: string;
  stderr: string;
  exitCode: number;
};

export type RunGhFixedArgvOptions = {
  cwd?: string;
  timeoutMs?: number;
  maxStdoutBytes?: number;
  maxStderrBytes?: number;
  env?: NodeJS.ProcessEnv;
};

/**
 * Spawn executable with fixed argv (shell:false). Never interpolates a shell.
 * Injectable for tests — do not call real `gh` from unit tests.
 */
export async function runGhFixedArgv(
  executable: string,
  argv: readonly string[],
  cwdOrOptions?: string | RunGhFixedArgvOptions,
): Promise<GhCliCmdResult> {
  const options: RunGhFixedArgvOptions =
    typeof cwdOrOptions === "string"
      ? { cwd: cwdOrOptions }
      : (cwdOrOptions ?? {});
  const maxStdout = options.maxStdoutBytes ?? 256 * 1024;
  const maxStderr = options.maxStderrBytes ?? 64 * 1024;
  const timeoutMs = options.timeoutMs;

  return await new Promise((resolve) => {
    const child = nodeSpawn(executable, [...argv], {
      cwd: options.cwd,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
      env: options.env ?? process.env,
    });
    let stdout = "";
    let stderr = "";
    let settled = false;
    const finish = (exitCode: number) => {
      if (settled) return;
      settled = true;
      resolve({ stdout, stderr, exitCode });
    };
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (timeoutMs != null && timeoutMs > 0) {
      timer = setTimeout(() => {
        try {
          child.kill("SIGTERM");
        } catch {
          /* ignore */
        }
        finish(124);
      }, timeoutMs);
    }
    child.stdout?.on("data", (c: Buffer) => {
      if (stdout.length < maxStdout) stdout += c.toString("utf8");
    });
    child.stderr?.on("data", (c: Buffer) => {
      if (stderr.length < maxStderr) stderr += c.toString("utf8");
    });
    child.on("error", () => {
      if (timer) clearTimeout(timer);
      finish(1);
    });
    child.on("close", (code) => {
      if (timer) clearTimeout(timer);
      finish(code ?? 1);
    });
  });
}
