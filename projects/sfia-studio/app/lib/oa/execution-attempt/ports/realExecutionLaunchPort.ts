/**
 * RealExecutionLaunchPort — specialized REAL OA boundary (D-M4-01 Option B).
 *
 * Distinct from ExecutionAdapterPort (externalEffects:false forever).
 * Must NOT be accepted by InjectableExecutionAdapter.
 */

export type RealLaunchRequest = {
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly selectedAgentRef: string;
  readonly adapterRef: string;
  readonly correlationId: string;
  /**
   * Contract-bound full Git SHA (40 hex). Preferred name.
   * Alias `worktreeBaseHeadSha` accepted for older call sites.
   */
  readonly baseHeadSha: string;
  /** @deprecated Prefer baseHeadSha — kept as alias only. */
  readonly worktreeBaseHeadSha?: string;
  /** Structured contract fields for fixed argv — not free client argv. */
  readonly action?: string;
  readonly target?: string;
  readonly scope?: string;
};

export type RealLaunchAck = {
  readonly outcome: "ack";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly realProcessInvoked: true;
  readonly processRef: string;
  readonly worktreeRef?: string;
};

export type RealLaunchReject = {
  readonly outcome: "reject";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly realProcessInvoked: false;
  readonly detailCode?:
    | "REAL_BOUNDARY_DISABLED"
    | "CURSOR_UNAVAILABLE"
    | "REAL_WORKSPACE_INVALID"
    | "REAL_LAUNCH_FAILED"
    | "REAL_AGENT_PROFILE_INVALID";
};

export type RealLaunchFailure = {
  readonly outcome: "fail";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly realProcessInvoked: false | boolean;
  readonly detailCode?:
    | "REAL_BOUNDARY_DISABLED"
    | "CURSOR_UNAVAILABLE"
    | "REAL_WORKSPACE_INVALID"
    | "REAL_LAUNCH_FAILED";
};

export type RealLaunchResult =
  | RealLaunchAck
  | RealLaunchReject
  | RealLaunchFailure;

export type RealProcessObservation = {
  readonly processRef: string;
  readonly exitCode: number | null;
  readonly timedOut: boolean;
  readonly stdout: string;
  readonly stderr: string;
  readonly durationMs: number;
  readonly realProcessInvoked: boolean;
  readonly worktreeRef?: string;
};

export type ProcessRunnerInvokeInput = {
  readonly attemptId: string;
  /** Resolved Cursor binary — NEVER embedded as argv[0]. */
  readonly executable: string;
  readonly argv: readonly string[];
  readonly cwd: string;
  readonly timeoutMs: number;
  readonly env: NodeJS.ProcessEnv;
};

export type ProcessRunnerInvokeResult = {
  readonly processRef: string;
  readonly realProcessInvoked: boolean;
  readonly observation?: Partial<RealProcessObservation>;
};

/**
 * Injectable process runner. Production: NodeCursorProcessRunner (spawn shell:false).
 * Tests MUST inject a fake / FakeSpawnPrimitive — never spawn Cursor during REAL-OFF.
 *
 * invoke() MUST resolve on spawn confirmation (process invoked / PID known),
 * NOT on process close. observe / awaitCompletion are the completion path.
 */
export interface ProcessRunner {
  invoke(input: ProcessRunnerInvokeInput): Promise<ProcessRunnerInvokeResult>;
  observe?(processRef: string): Promise<RealProcessObservation | null>;
  awaitCompletion?(
    processRef: string,
  ): Promise<RealProcessObservation | null>;
}

/** @deprecated Prefer ProcessRunner. */
export type RealProcessRunnerPort = ProcessRunner;

export interface RealExecutionLaunchPort {
  readonly gatewayId: string;
  /**
   * Static marker — REAL boundary may declare external effects.
   * Fixture ExecutionAdapterPort must remain externalEffects:false.
   */
  readonly externalEffects: true;
  launch(request: RealLaunchRequest): Promise<RealLaunchResult>;
  observe?(processRef: string): Promise<RealProcessObservation | null>;
  awaitCompletion?(
    processRef: string,
  ): Promise<RealProcessObservation | null>;
}
