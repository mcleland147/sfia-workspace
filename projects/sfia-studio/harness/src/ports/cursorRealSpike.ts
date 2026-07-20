/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 *
 * CursorExecutorPortRealSpike — local CLI candidate behind CursorExecutorPort.
 * Does NOT replace CursorExecutorPortFixture.
 * Disabled unless explicitly enabled (feature flag).
 * Does NOT invent an HTTP API; uses discovered `cursor agent` CLI argv only.
 */

import { spawn } from "node:child_process";
import { accessSync, constants } from "node:fs";
import path from "node:path";
import type { CursorInstruction, CursorResult } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { CursorExecutorPort } from "./cursorExecutor.js";

/** Spike-only result — does not widen stable CursorResult.realCursorClaimed literal. */
export interface CursorRealSpikeResult {
  ok: boolean;
  summary: string;
  artifacts: string[];
  errorCode?: string;
  durationMs: number;
  /** True only when a real CLI process was spawned for this spike. */
  realCursorProcessInvoked: boolean;
  /** Never claim production-proven Cursor; spike evidence only. */
  productionReadyClaimed: false;
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdoutRedacted: string;
  stderrRedacted: string;
  timedOut: boolean;
  argvRedacted: string[];
  mechanismBin: string;
}

export const CURSOR_REAL_SPIKE_FLAG = "SFIA_CURSOR_REAL_SPIKE";

export interface CursorRealSpikeOptions {
  /** Must be true AND env SFIA_CURSOR_REAL_SPIKE=1 for execution. */
  enabled?: boolean;
  /** Absolute path to cursor binary or cursor-agent. */
  cursorBin?: string;
  /** Hard timeout for child process. */
  timeoutMs?: number;
  /** Max captured stdout/stderr bytes. */
  maxOutputBytes?: number;
  /**
   * ask|plan = read-oriented CLI modes.
   * agent = default Cursor Agent (may write) — spike only, sandbox required.
   */
  agentMode?: "ask" | "plan" | "agent";
}

export interface CursorRealSpikeContract {
  spikeId: string;
  requestId: string;
  executionId: string;
  mechanismId: string;
  mechanismVersion: string;
  instruction: string;
  workingDirectory: string;
  allowedReadPaths: string[];
  allowedWritePaths: string[];
  deniedPaths: string[];
  timeoutMs: number;
  expectedOutputs: string[];
  gitEffect: "none";
  networkEffect: "unknown" | "required" | "none";
  cursorMode: "real-spike";
  contractHash: string;
  initiatedBy: string;
  initiatedAt: string;
}

export function isCursorRealSpikeEnabled(opts?: CursorRealSpikeOptions): boolean {
  return opts?.enabled === true && process.env[CURSOR_REAL_SPIKE_FLAG] === "1";
}

export function resolveCursorBin(explicit?: string): string {
  if (explicit) {
    accessSync(explicit, constants.X_OK);
    return explicit;
  }
  const candidates = [
    process.env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(process.env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* try next */
    }
  }
  throw new HarnessError("CURSOR_BIN_NOT_FOUND", "No executable Cursor CLI found for spike");
}

/** Build argv without shell concatenation. */
export function buildCursorAgentArgv(input: {
  bin: string;
  instruction: string;
  workspace: string;
  mode: "ask" | "plan" | "agent";
  useNestedAgentSubcommand: boolean;
}): { command: string; argv: string[] } {
  const prefix = input.useNestedAgentSubcommand ? ["agent"] : [];
  const modeArgs = input.mode === "agent" ? [] : ["--mode", input.mode];
  // --sandbox enabled when supported by CLI; do not pass --force/--yolo.
  const argv = [
    ...prefix,
    "--print",
    ...modeArgs,
    "--workspace",
    input.workspace,
    "--trust",
    "--sandbox",
    "enabled",
    input.instruction,
  ];
  return { command: input.bin, argv };
}

/** Allowed sandboxes: legacy cursor-real spike OR e2e proofs sandbox OR Increment D sandbox. */
export function isAllowedCursorSpikeSandbox(cwd: string): boolean {
  const resolved = path.resolve(cwd);
  return (
    resolved.includes(`${path.sep}spikes${path.sep}cursor-real${path.sep}sandbox`) ||
    resolved.includes(`${path.sep}proofs${path.sep}e2e-cursor-sandbox`) ||
    resolved.includes(`${path.sep}.sandbox${path.sep}increment-d`)
  );
}

export function assertSandboxPaths(contract: CursorRealSpikeContract): void {
  const cwd = path.resolve(contract.workingDirectory);
  if (!isAllowedCursorSpikeSandbox(cwd)) {
    throw new HarnessError(
      "SPIKE_CWD_DENIED",
      "workingDirectory must be cursor-real sandbox or proofs/e2e-cursor-sandbox",
      { cwd },
    );
  }
  for (const p of [...contract.allowedWritePaths, ...contract.allowedReadPaths]) {
    if (p.includes("..") || path.isAbsolute(p)) {
      throw new HarnessError("SPIKE_PATH_TRAVERSAL", "relative in-sandbox paths only", { p });
    }
    const resolved = path.resolve(cwd, p);
    if (!resolved.startsWith(cwd + path.sep) && resolved !== cwd) {
      throw new HarnessError("SPIKE_PATH_ESCAPE", "path escapes sandbox", { p, resolved });
    }
  }
  for (const d of contract.deniedPaths) {
    if (d.includes("app/") || d === "projects/sfia-studio/app") {
      /* documented deny — ok */
    }
  }
  if (contract.cursorMode !== "real-spike") {
    throw new HarnessError("SPIKE_MODE", "cursorMode must be real-spike");
  }
  if (contract.gitEffect !== "none") {
    throw new HarnessError("SPIKE_GIT_EFFECT", "gitEffect must be none");
  }
}

export function filterSpikeEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const allow = new Set([
    "PATH",
    "HOME",
    "USER",
    "LOGNAME",
    "TMPDIR",
    "LANG",
    "LC_ALL",
    "TERM",
    "NODE_ENV",
    CURSOR_REAL_SPIKE_FLAG,
    "SFIA_CURSOR_BIN",
  ]);
  const out: NodeJS.ProcessEnv = {};
  for (const [k, v] of Object.entries(env)) {
    if (!allow.has(k)) continue;
    if (!v) continue;
    // Never forward secrets even if somehow present under alternate names
    if (/token|secret|password|api[_-]?key|credential/i.test(k)) continue;
    out[k] = v;
  }
  // Explicitly strip Cursor API key from child even if in process env
  delete out.CURSOR_API_KEY;
  return out;
}

export async function spawnWithTimeout(input: {
  command: string;
  argv: string[];
  cwd: string;
  env: NodeJS.ProcessEnv;
  timeoutMs: number;
  maxOutputBytes: number;
  /** Optional AbortSignal for operator STOP (soft SIGTERM then SIGKILL). */
  abortSignal?: AbortSignal;
}): Promise<{
  exitCode: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  aborted: boolean;
  durationMs: number;
}> {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    let stdout = Buffer.alloc(0);
    let stderr = Buffer.alloc(0);
    let timedOut = false;
    let aborted = false;
    let settled = false;

    const child = spawn(input.command, input.argv, {
      cwd: input.cwd,
      env: input.env,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
    });

    const softThenHard = () => {
      child.kill("SIGTERM");
      setTimeout(() => {
        if (!settled) child.kill("SIGKILL");
      }, 2_000).unref();
    };

    const timer = setTimeout(() => {
      timedOut = true;
      softThenHard();
    }, input.timeoutMs);

    const onAbort = () => {
      aborted = true;
      softThenHard();
    };
    if (input.abortSignal?.aborted) {
      onAbort();
    } else {
      input.abortSignal?.addEventListener("abort", onAbort, { once: true });
    }

    const append = (whicht: "out" | "err", chunk: Buffer) => {
      const cur = whicht === "out" ? stdout : stderr;
      const next = Buffer.concat([cur, chunk]);
      if (next.length > input.maxOutputBytes) {
        const trimmed = next.subarray(0, input.maxOutputBytes);
        if (whicht === "out") stdout = trimmed;
        else stderr = trimmed;
        child.kill("SIGTERM");
        return;
      }
      if (whicht === "out") stdout = next;
      else stderr = next;
    };

    child.stdout?.on("data", (c: Buffer) => append("out", c));
    child.stderr?.on("data", (c: Buffer) => append("err", c));
    child.on("error", (err) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      input.abortSignal?.removeEventListener("abort", onAbort);
      reject(err);
    });
    child.on("close", (code, signal) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      input.abortSignal?.removeEventListener("abort", onAbort);
      resolve({
        exitCode: code,
        signal,
        stdout: stdout.toString("utf8"),
        stderr: stderr.toString("utf8"),
        timedOut,
        aborted,
        durationMs: Date.now() - started,
      });
    });
  });
}

/**
 * Experimental CursorExecutorPort implementation.
 * Only accepts instruction.mode === "fixture" never — real-spike uses executeSpikeContract.
 * The port.execute path remains fail-closed unless spike mode is wired via executeSpike.
 */
export class CursorExecutorPortRealSpike implements CursorExecutorPort {
  constructor(private readonly opts: CursorRealSpikeOptions = {}) {}

  async execute(_instruction: CursorInstruction): Promise<CursorResult> {
    throw new HarnessError(
      "CURSOR_REAL_SPIKE_NOT_VIA_STABLE_EXECUTE",
      "Use executeSpikeContract(); stable execute() must remain fixture-only",
    );
  }

  async executeSpikeContract(contract: CursorRealSpikeContract): Promise<CursorRealSpikeResult> {
    if (!isCursorRealSpikeEnabled(this.opts)) {
      throw new HarnessError(
        "CURSOR_REAL_SPIKE_DISABLED",
        `Spike disabled (set ${CURSOR_REAL_SPIKE_FLAG}=1 and enabled:true)`,
      );
    }
    assertSandboxPaths(contract);
    const timeoutMs = this.opts.timeoutMs ?? contract.timeoutMs;
    const maxOutputBytes = this.opts.maxOutputBytes ?? 256_000;
    const bin = resolveCursorBin(this.opts.cursorBin);
    const useNested = path.basename(bin) === "cursor";
    const mode = this.opts.agentMode ?? "agent";
    const { command, argv } = buildCursorAgentArgv({
      bin,
      instruction: contract.instruction,
      workspace: path.resolve(contract.workingDirectory),
      mode,
      useNestedAgentSubcommand: useNested,
    });

    const result = await spawnWithTimeout({
      command,
      argv,
      cwd: path.resolve(contract.workingDirectory),
      env: filterSpikeEnv(),
      timeoutMs,
      maxOutputBytes,
    });

    const redact = (s: string) =>
      s
        .replace(/cursor_[A-Za-z0-9_-]{8,}/g, "[REDACTED_KEY]")
        .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]");

    const ok = !result.timedOut && result.exitCode === 0;
    return {
      ok,
      summary: ok
        ? `real-spike exit 0 (${contract.mechanismId})`
        : `real-spike failed exit=${result.exitCode} timedOut=${result.timedOut}`,
      artifacts: [],
      errorCode: ok ? undefined : result.timedOut ? "CURSOR_SPIKE_TIMEOUT" : "CURSOR_SPIKE_FAILED",
      durationMs: result.durationMs,
      realCursorProcessInvoked: true,
      productionReadyClaimed: false,
      exitCode: result.exitCode,
      signal: result.signal,
      stdoutRedacted: redact(result.stdout).slice(0, 8_000),
      stderrRedacted: redact(result.stderr).slice(0, 8_000),
      timedOut: result.timedOut,
      argvRedacted: argv.map((a) => (a.length > 120 ? `${a.slice(0, 117)}...` : a)),
      mechanismBin: command,
    };
  }
}
