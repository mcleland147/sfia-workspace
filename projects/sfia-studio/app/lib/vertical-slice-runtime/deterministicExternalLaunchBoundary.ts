/**
 * TEST/E2E-ONLY deterministic Cursor external-boundary double.
 *
 * Substitutes NodeCursorProcessRunner / StudioCursorRealLaunchGateway /
 * subprocess Cursor CLI. It does NOT seed ExecutionAttempt, ExecutionContract,
 * Evidence, or ReviewBundle — those remain product orchestration outputs.
 *
 * Fail-closed. Mutually exclusive with SFIA_STUDIO_CURSOR_REAL=1.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG =
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY" as const;

export const DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE =
  "DETERMINISTIC AND REAL EXECUTION MODES NOT MUTUALLY EXCLUSIVE" as const;

const DETERMINISTIC_STDOUT =
  "DETERMINISTIC_TEST_BOUNDARY_CURSOR_COMPLETION\nZERO REAL\n";

export type DeterministicCursorBoundaryEnv = NodeJS.ProcessEnv;

export function isDeterministicCursorBoundaryEnabled(
  env: DeterministicCursorBoundaryEnv = process.env,
): boolean {
  if (env.NODE_ENV === "production") return false;
  if (env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] !== "1") {
    return false;
  }
  if (env.SFIA_STUDIO_E2E_QA_CONTROL !== "1") return false;
  if (env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (env.OPS1_CURSOR_REAL === "1") return false;
  return true;
}

export function assertDeterministicAndRealMutuallyExclusive(
  env: DeterministicCursorBoundaryEnv = process.env,
): void {
  if (
    env[SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG] === "1" &&
    (env.SFIA_STUDIO_CURSOR_REAL === "1" || env.OPS1_CURSOR_REAL === "1")
  ) {
    throw new Error(DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE);
  }
}

function pendingObserveLimitFromEnv(
  env: DeterministicCursorBoundaryEnv,
): number {
  const raw = env.SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES;
  if (!raw) return 2;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 2;
  return parsed;
}

export type TestOnlyDeterministicCursorLaunchPortOptions = {
  readonly gatewayId?: string;
  /** How many observe() calls stay pending before terminal. Default 2. */
  readonly pendingObserveLimit?: number;
  readonly completionStdout?: string;
  readonly completionExitCode?: number;
  readonly completionTimedOut?: boolean;
  readonly nowMs?: () => number;
};

/**
 * Simulated external Cursor ACK / observe / completion.
 * realProcessInvoked on the ACK is the launch-port contract (spawn ACK),
 * not a claim that an OS Cursor process exists.
 */
export class TestOnlyDeterministicCursorLaunchPort
  implements RealExecutionLaunchPort
{
  readonly gatewayId: string;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly simulatedTechnicalAckCount = { value: 0 };
  private readonly pendingObserveLimit: number;
  private readonly completionStdout: string;
  private readonly completionExitCode: number;
  private readonly completionTimedOut: boolean;
  private readonly nowMs: () => number;
  private observeCount = 0;
  private readonly observations = new Map<string, RealProcessObservation>();
  private readonly launchedAtMs = new Map<string, number>();
  private readonly timeoutMsByRef = new Map<string, number>();

  constructor(options: TestOnlyDeterministicCursorLaunchPortOptions = {}) {
    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
    this.pendingObserveLimit = options.pendingObserveLimit ?? 2;
    this.completionStdout = options.completionStdout ?? DETERMINISTIC_STDOUT;
    this.completionExitCode = options.completionExitCode ?? 0;
    this.completionTimedOut = options.completionTimedOut ?? false;
    this.nowMs = options.nowMs ?? Date.now;
  }

  get launchCallCount(): number {
    return this.calls.length;
  }

  get simulatedAckCount(): number {
    return this.simulatedTechnicalAckCount.value;
  }

  get observeCallCount(): number {
    return this.observeCount;
  }

  reset(): void {
    this.calls.length = 0;
    this.simulatedTechnicalAckCount.value = 0;
    this.observeCount = 0;
    this.observations.clear();
    this.launchedAtMs.clear();
    this.timeoutMsByRef.clear();
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(structuredClone(request));
    this.simulatedTechnicalAckCount.value += 1;
    const processRef = `proc:det:${request.attemptId}`;
    this.launchedAtMs.set(processRef, this.nowMs());
    this.timeoutMsByRef.set(processRef, request.timeoutMs);
    this.observations.set(processRef, {
      processRef,
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "",
      durationMs: 0,
      realProcessInvoked: true,
    });
    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    this.observeCount += 1;
    const launchedAt = this.launchedAtMs.get(processRef) ?? this.nowMs();
    const timeoutMs = this.timeoutMsByRef.get(processRef);
    const elapsed = this.nowMs() - launchedAt;
    const pastDeadline =
      typeof timeoutMs === "number" && Number.isFinite(timeoutMs)
        ? elapsed >= timeoutMs
        : false;
    if (this.completionTimedOut || pastDeadline) {
      const timedOut: RealProcessObservation = {
        processRef,
        exitCode: null,
        timedOut: true,
        stdout: "",
        stderr: "deterministic_timeout",
        durationMs: elapsed,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, timedOut);
      return timedOut;
    }
    if (this.observeCount <= this.pendingObserveLimit) {
      const pending: RealProcessObservation = {
        ...current,
        exitCode: null,
        timedOut: false,
        durationMs: elapsed,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, pending);
      return pending;
    }
    const done: RealProcessObservation = {
      processRef,
      exitCode: this.completionExitCode,
      timedOut: false,
      stdout: this.completionExitCode === 0 ? this.completionStdout : "",
      stderr: this.completionExitCode === 0 ? "" : "deterministic_failure",
      durationMs: Math.max(elapsed, 1),
      realProcessInvoked: true,
    };
    this.observations.set(processRef, done);
    return done;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    const current = this.observations.get(processRef);
    if (!current) return null;
    if (current.exitCode !== null || current.timedOut) return current;
    return this.observe(processRef);
  }
}

export function composeDeterministicCursorBoundary(
  env: DeterministicCursorBoundaryEnv = process.env,
): RealBoundaryWiring {
  const launchPort = new TestOnlyDeterministicCursorLaunchPort({
    pendingObserveLimit: pendingObserveLimitFromEnv(env),
  });
  return Object.freeze({
    launchPort,
    safetyJournal: new MemoryLaunchSafetyJournal(),
  });
}
