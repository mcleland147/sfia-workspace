/**
 * TEST-ONLY spawn / git doubles — no OS process, no real git.
 */
import { EventEmitter } from "node:events";
import type { ChildProcess } from "node:child_process";
import type {
  GitCommandResult,
  GitCommandRunner,
  SpawnPrimitive,
} from "@/lib/oa/execution-attempt";

export type FakeSpawnCall = {
  executable: string;
  argv: readonly string[];
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  };
};

export type FakeChildBehavior = {
  /** If true, spawn throws before child exists. */
  throwBeforeSpawn?: boolean;
  /** If true, emit error before spawn (realProcessInvoked=false). */
  errorBeforeSpawn?: boolean;
  pid?: number;
  exitCode?: number | null;
  stdoutChunks?: string[];
  stderrChunks?: string[];
  /** Delay close so timeout can fire. */
  hangMs?: number;
  /** Do not auto-close after spawn — tests drive close/error explicitly. */
  holdOpen?: boolean;
};

export type FakeChildHandle = {
  readonly child: ChildProcess;
  lastSignal?: string;
  killed: boolean;
  assignPid(pid: number): void;
  emitSpawn(): void;
  emitError(message?: string): void;
  emitStdout(chunk: string): void;
  emitStderr(chunk: string): void;
  emitClose(code: number | null): void;
};

export class FakeSpawnPrimitive {
  readonly calls: FakeSpawnCall[] = [];
  lastHandle: FakeChildHandle | null = null;
  private behavior: FakeChildBehavior;

  constructor(behavior: FakeChildBehavior = {}) {
    this.behavior = behavior;
  }

  setBehavior(behavior: FakeChildBehavior): void {
    this.behavior = behavior;
  }

  asSpawnPrimitive(): SpawnPrimitive {
    return (executable, argv, options) => {
      this.calls.push({ executable, argv, options });
      if (this.behavior.throwBeforeSpawn) {
        throw new Error("fake_spawn_threw_before_start");
      }
      const handle = createFakeChild(this.behavior);
      this.lastHandle = handle;
      return handle.child;
    };
  }
}

function createFakeChild(behavior: FakeChildBehavior): FakeChildHandle {
  const ee = new EventEmitter() as ChildProcess & EventEmitter;
  const stdout = new EventEmitter();
  const stderr = new EventEmitter();
  (ee as { stdout: EventEmitter }).stdout = stdout;
  (ee as { stderr: EventEmitter }).stderr = stderr;
  (ee as { killed: boolean }).killed = false;
  let pid: number | undefined = behavior.errorBeforeSpawn
    ? undefined
    : behavior.holdOpen
      ? undefined
      : (behavior.pid ?? 4242);
  Object.defineProperty(ee, "pid", {
    get: () => pid,
    configurable: true,
  });

  const handle: FakeChildHandle = {
    child: ee,
    killed: false,
    assignPid(nextPid: number) {
      pid = nextPid;
    },
    emitSpawn() {
      ee.emit("spawn");
    },
    emitError(message?: string) {
      ee.emit("error", new Error(message ?? "fake_child_error"));
    },
    emitStdout(chunk: string) {
      stdout.emit("data", Buffer.from(chunk));
    },
    emitStderr(chunk: string) {
      stderr.emit("data", Buffer.from(chunk));
    },
    emitClose(code: number | null) {
      ee.emit("close", code);
    },
  };

  (ee as { kill: (signal?: string) => boolean }).kill = (
    signal?: string,
  ) => {
    handle.killed = true;
    handle.lastSignal = signal;
    (ee as { killed: boolean; lastSignal?: string }).killed = true;
    (ee as { lastSignal?: string }).lastSignal = signal;
    queueMicrotask(() => ee.emit("close", behavior.exitCode ?? null));
    return true;
  };

  queueMicrotask(() => {
    if (behavior.errorBeforeSpawn) {
      ee.emit("error", new Error("fake_spawn_error_before_start"));
      return;
    }
    if (behavior.holdOpen) {
      if (behavior.pid && behavior.pid > 0) {
        pid = behavior.pid;
      }
      ee.emit("spawn");
      return;
    }
    ee.emit("spawn");
    for (const chunk of behavior.stdoutChunks ?? []) {
      stdout.emit("data", Buffer.from(chunk));
    }
    for (const chunk of behavior.stderrChunks ?? []) {
      stderr.emit("data", Buffer.from(chunk));
    }
    if (behavior.hangMs && behavior.hangMs > 0) {
      setTimeout(() => {
        /* wait for kill from timeout */
      }, behavior.hangMs);
      return;
    }
    queueMicrotask(() => ee.emit("close", behavior.exitCode ?? 0));
  });

  return handle;
}

export class FakeGitCommandRunner implements GitCommandRunner {
  readonly calls: Array<{ argv: readonly string[]; cwd: string }> = [];
  private readonly scripted: GitCommandResult[];
  private headOverride: string | null = null;
  private repoRootOverride: string | null = null;
  private failOn?: (argv: readonly string[]) => GitCommandResult | null;

  constructor(
    options: {
      baseHeadSha?: string;
      repoRoot?: string;
      results?: GitCommandResult[];
      failOn?: (argv: readonly string[]) => GitCommandResult | null;
    } = {},
  ) {
    this.scripted = options.results ?? [];
    this.headOverride = options.baseHeadSha ?? null;
    this.repoRootOverride = options.repoRoot ?? null;
    this.failOn = options.failOn;
  }

  setHeadSha(sha: string): void {
    this.headOverride = sha;
  }

  async run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult> {
    this.calls.push({ argv: [...argv], cwd });
    if (this.failOn) {
      const forced = this.failOn(argv);
      if (forced) return forced;
    }
    if (this.scripted.length > 0) {
      return this.scripted.shift()!;
    }
    // Default happy path: verify / worktree add / rev-parse HEAD
    if (argv[0] === "rev-parse" && argv[1] === "--verify") {
      return { stdout: "commit\n", stderr: "", exitCode: 0 };
    }
    if (argv[0] === "worktree" && argv[1] === "add") {
      return { stdout: "", stderr: "", exitCode: 0 };
    }
    if (argv[0] === "rev-parse" && argv[1] === "--show-toplevel") {
      return {
        stdout: `${this.repoRootOverride ?? cwd}\n`,
        stderr: "",
        exitCode: 0,
      };
    }
    if (argv[0] === "rev-parse" && argv[1] === "HEAD") {
      return {
        stdout: `${this.headOverride ?? "0".repeat(40)}\n`,
        stderr: "",
        exitCode: 0,
      };
    }
    return { stdout: "", stderr: "unexpected_fake_git_argv", exitCode: 1 };
  }
}

/** TEST-ONLY workspace port that records prepare calls. */
export class FakeRealExecutionWorkspacePort {
  readonly prepares: Array<{ attemptId: string; baseHeadSha: string }> = [];
  private fail = false;
  private workspacePath = "/tmp/fake-exec-root/wt-test";

  constructor(
    options: { workspacePath?: string; fail?: boolean } = {},
  ) {
    if (options.workspacePath) this.workspacePath = options.workspacePath;
    this.fail = options.fail ?? false;
  }

  setFail(fail: boolean): void {
    this.fail = fail;
  }

  async prepareWorkspace(request: {
    attemptId: string;
    baseHeadSha: string;
  }): Promise<{ workspacePath: string; verifiedHeadSha: string }> {
    this.prepares.push({ ...request });
    if (this.fail) {
      throw new Error("REAL_WORKSPACE_INVALID:fake_prepare_failed");
    }
    return {
      workspacePath: this.workspacePath,
      verifiedHeadSha: request.baseHeadSha.toLowerCase(),
    };
  }
}
