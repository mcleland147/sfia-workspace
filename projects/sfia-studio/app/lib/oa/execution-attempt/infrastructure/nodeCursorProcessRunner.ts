/**
 * NodeCursorProcessRunner — production Cursor process runner (M4 R1 + spawn-ACK).
 *
 * spawn(shell:false); executable separate from argv; 64 KiB stdout/stderr caps;
 * timeout → SIGTERM. invoke() RESOLVES on spawn confirmation (PID known), NOT
 * on process close. Completion is observed separately via observe/awaitCompletion.
 *
 * SpawnPrimitive is injectable for tests (no real Cursor).
 */
import { spawn as nodeSpawn, type ChildProcess } from "node:child_process";
import type {
  ProcessRunner,
  ProcessRunnerInvokeInput,
  ProcessRunnerInvokeResult,
  RealProcessObservation,
} from "../ports/realExecutionLaunchPort";
import { redactExactSecrets } from "./redactExactSecrets";

export const NODE_CURSOR_STDOUT_CAP_BYTES = 64 * 1024;
export const NODE_CURSOR_STDERR_CAP_BYTES = 64 * 1024;

export type SpawnPrimitive = (
  executable: string,
  argv: readonly string[],
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  },
) => ChildProcess;

export type NodeCursorProcessRunnerOptions = {
  readonly spawnPrimitive?: SpawnPrimitive;
};

type TrackedProcess = {
  readonly processRef: string;
  readonly worktreeRef: string;
  readonly started: number;
  stdout: string;
  stderr: string;
  exitCode: number | null;
  timedOut: boolean;
  completed: boolean;
  readonly redactExactValues: readonly string[];
  readonly completion: Promise<RealProcessObservation>;
  resolveCompletion: (obs: RealProcessObservation) => void;
};

function appendCapped(current: string, chunk: Buffer, cap: number): string {
  if (current.length >= cap) return current;
  const next = chunk.toString("utf8");
  const remaining = cap - current.length;
  return current + next.slice(0, remaining);
}

function snapshot(
  tracked: TrackedProcess,
  redactExactValues?: readonly string[],
): RealProcessObservation {
  return {
    processRef: tracked.processRef,
    exitCode: tracked.exitCode,
    timedOut: tracked.timedOut,
    stdout: redactExactSecrets(tracked.stdout, redactExactValues),
    stderr: redactExactSecrets(tracked.stderr, redactExactValues),
    durationMs: Date.now() - tracked.started,
    realProcessInvoked: true,
    worktreeRef: tracked.worktreeRef,
  };
}

export class NodeCursorProcessRunner implements ProcessRunner {
  private readonly spawnPrimitive: SpawnPrimitive;
  /** Single process-local observation registry — not Evidence, not durable. */
  private readonly processes = new Map<string, TrackedProcess>();

  constructor(options: NodeCursorProcessRunnerOptions = {}) {
    this.spawnPrimitive = options.spawnPrimitive ?? defaultSpawnPrimitive;
  }

  async invoke(
    input: ProcessRunnerInvokeInput,
  ): Promise<ProcessRunnerInvokeResult> {
    if (!input.executable || input.executable.trim() === "") {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout: "",
          stderr: "executable_missing",
          durationMs: 0,
          realProcessInvoked: false,
        },
      };
    }

    const started = Date.now();
    const redactExactValues = input.redactExactValues ?? [];
    const redactChunk = (chunk: Buffer, current: string, cap: number): string => {
      const appended = appendCapped(current, chunk, cap);
      return redactExactSecrets(appended, redactExactValues);
    };
    let child: ChildProcess;
    try {
      child = this.spawnPrimitive(input.executable, [...input.argv], {
        cwd: input.cwd,
        env: input.env,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout: "",
          stderr: "spawn_threw_before_start",
          durationMs: Date.now() - started,
          realProcessInvoked: false,
        },
      };
    }

    let stdout = "";
    let stderr = "";
    child.stdout?.on("data", (chunk: Buffer) => {
      stdout = redactChunk(chunk, stdout, NODE_CURSOR_STDOUT_CAP_BYTES);
      const tracked = this.lookupByChild(child, input.attemptId, started);
      if (tracked) tracked.stdout = stdout;
    });
    child.stderr?.on("data", (chunk: Buffer) => {
      stderr = redactChunk(chunk, stderr, NODE_CURSOR_STDERR_CAP_BYTES);
      const tracked = this.lookupByChild(child, input.attemptId, started);
      if (tracked) tracked.stderr = stderr;
    });

    const spawned = await waitForSpawnConfirmation(child);
    if (!spawned.ok) {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout: redactExactSecrets(stdout, redactExactValues),
          stderr: redactExactSecrets(stderr || spawned.reason, redactExactValues),
          durationMs: Date.now() - started,
          realProcessInvoked: false,
        },
      };
    }

    const processRef =
      typeof child.pid === "number" && child.pid > 0
        ? `pid:${child.pid}`
        : `proc:${input.attemptId}:${started}`;

    let resolveCompletion!: (obs: RealProcessObservation) => void;
    const completion = new Promise<RealProcessObservation>((resolve) => {
      resolveCompletion = resolve;
    });

    const tracked: TrackedProcess = {
      processRef,
      worktreeRef: input.cwd,
      started,
      stdout,
      stderr,
      exitCode: null,
      timedOut: false,
      completed: false,
      redactExactValues,
      completion,
      resolveCompletion,
    };
    this.processes.set(processRef, tracked);

    const finish = (partial: {
      exitCode: number | null;
      timedOut?: boolean;
    }) => {
      if (tracked.completed) return;
      tracked.completed = true;
      tracked.exitCode = partial.exitCode;
      if (partial.timedOut) tracked.timedOut = true;
      tracked.stdout = redactExactSecrets(stdout, redactExactValues);
      tracked.stderr = redactExactSecrets(stderr, redactExactValues);
      clearTimeout(timer);
      tracked.resolveCompletion(snapshot(tracked, redactExactValues));
    };

    const timer = setTimeout(() => {
      tracked.timedOut = true;
      try {
        child.kill("SIGTERM");
      } catch {
        /* ignore */
      }
    }, input.timeoutMs);

    child.on("error", () => {
      // Post-spawn error: historical invoke ACK remains invoked=true.
      finish({ exitCode: null, timedOut: tracked.timedOut });
    });
    child.on("close", (code: number | null) => {
      finish({ exitCode: code, timedOut: tracked.timedOut });
    });

    return {
      processRef,
      realProcessInvoked: true,
      observation: snapshot(tracked, redactExactValues),
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    const tracked = this.processes.get(processRef);
    return tracked ? snapshot(tracked, tracked.redactExactValues) : null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    const tracked = this.processes.get(processRef);
    if (!tracked) return null;
    return tracked.completion;
  }

  private lookupByChild(
    child: ChildProcess,
    attemptId: string,
    started: number,
  ): TrackedProcess | undefined {
    const byPid =
      typeof child.pid === "number" && child.pid > 0
        ? this.processes.get(`pid:${child.pid}`)
        : undefined;
    return byPid ?? this.processes.get(`proc:${attemptId}:${started}`);
  }
}

function defaultSpawnPrimitive(
  executable: string,
  argv: readonly string[],
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  },
): ChildProcess {
  return nodeSpawn(executable, [...argv], options);
}

function waitForSpawnConfirmation(
  child: ChildProcess,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  return new Promise((resolve) => {
    let settled = false;
    const done = (result: { ok: true } | { ok: false; reason: string }) => {
      if (settled) return;
      settled = true;
      child.off("spawn", onSpawn);
      child.off("error", onError);
      resolve(result);
    };
    const onSpawn = () => done({ ok: true });
    const onError = () =>
      done({ ok: false, reason: "spawn_error_before_start" });

    if (typeof child.pid === "number" && child.pid > 0) {
      done({ ok: true });
      return;
    }

    child.once("spawn", onSpawn);
    child.once("error", onError);

    queueMicrotask(() => {
      if (typeof child.pid === "number" && child.pid > 0) {
        done({ ok: true });
      }
    });
  });
}

/** Fail-closed runner kept in product surface — never spawns. */
export class DisabledRealProcessRunner implements ProcessRunner {
  async invoke(): Promise<ProcessRunnerInvokeResult> {
    throw new Error("m4_real_process_runner_disabled_for_real_off_cycle");
  }
}
