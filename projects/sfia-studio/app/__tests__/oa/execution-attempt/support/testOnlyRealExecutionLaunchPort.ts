/**
 * TEST-ONLY RealExecutionLaunchPort — simulated ACK for positive StartExecution paths.
 * NEVER enables production StudioCursorRealLaunchGateway / SFIA_STUDIO_CURSOR_REAL.
 * SIMULATED TECHNICAL ACK only — not a REAL Cursor invocation.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export type TestOnlyRealExecutionLaunchPortOptions = {
  readonly gatewayId?: string;
  /**
   * When true (default for ack), awaitCompletion stays pending until
   * resolveSimulatedCompletion() — models spawn ACK ≠ process completion.
   */
  readonly holdCompletion?: boolean;
  readonly behavior?:
    | { outcome: "ack"; processRef?: string }
    | {
        outcome: "reject";
        reason: string;
        detailCode?: NonNullable<
          Extract<RealLaunchResult, { outcome: "reject" }>["detailCode"]
        >;
      }
    | {
        outcome: "fail";
        reason: string;
        detailCode?: NonNullable<
          Extract<RealLaunchResult, { outcome: "fail" }>["detailCode"]
        >;
      }
    | { outcome: "throw"; reason: string };
};

/**
 * Test-only launch port. Returns SIMULATED TECHNICAL ACK.
 * Must never be confused with production gateway enablement.
 */
export class TestOnlyRealExecutionLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId: string;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  /** Explicit label for review claims — not a real Cursor process count. */
  readonly simulatedTechnicalAckCount = { value: 0 };
  private behavior: NonNullable<
    TestOnlyRealExecutionLaunchPortOptions["behavior"]
  >;
  private readonly holdCompletion: boolean;
  private readonly observations = new Map<string, RealProcessObservation>();
  private readonly completionResolvers = new Map<
    string,
    (obs: RealProcessObservation) => void
  >();
  private readonly completionPromises = new Map<
    string,
    Promise<RealProcessObservation>
  >();
  readonly completionPending = { value: false };

  constructor(options: TestOnlyRealExecutionLaunchPortOptions = {}) {
    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
    this.behavior = options.behavior ?? { outcome: "ack" };
    this.holdCompletion = options.holdCompletion ?? true;
  }

  setBehavior(
    behavior: NonNullable<TestOnlyRealExecutionLaunchPortOptions["behavior"]>,
  ): void {
    this.behavior = behavior;
  }

  get launchCallCount(): number {
    return this.calls.length;
  }

  get simulatedAckCount(): number {
    return this.simulatedTechnicalAckCount.value;
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(structuredClone(request));
    const b = this.behavior;
    if (b.outcome === "throw") {
      throw new Error(`test_only_real_launch_threw:${b.reason}`);
    }
    if (b.outcome === "reject") {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: b.reason,
        realProcessInvoked: false,
        detailCode: b.detailCode,
      };
    }
    if (b.outcome === "fail") {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: b.reason,
        realProcessInvoked: false,
        detailCode: b.detailCode,
      };
    }
    this.simulatedTechnicalAckCount.value += 1;
    const processRef = b.processRef ?? `proc:sim:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "",
      durationMs: 0,
      realProcessInvoked: true,
    });
    if (this.holdCompletion) {
      this.completionPending.value = true;
      const completion = new Promise<RealProcessObservation>((resolve) => {
        this.completionResolvers.set(processRef, resolve);
      });
      this.completionPromises.set(processRef, completion);
    } else {
      const done: RealProcessObservation = {
        processRef,
        exitCode: 0,
        timedOut: false,
        stdout: "",
        stderr: "",
        durationMs: 0,
        realProcessInvoked: true,
      };
      this.observations.set(processRef, done);
      this.completionPromises.set(processRef, Promise.resolve(done));
    }
    // SIMULATED TECHNICAL ACK — production gateway flag was never enabled.
    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
    };
  }

  resolveSimulatedCompletion(
    processRef: string,
    observation?: Partial<RealProcessObservation>,
  ): void {
    const current = this.observations.get(processRef);
    const next: RealProcessObservation = {
      processRef,
      exitCode: observation?.exitCode ?? 0,
      timedOut: observation?.timedOut ?? false,
      stdout: observation?.stdout ?? current?.stdout ?? "",
      stderr: observation?.stderr ?? current?.stderr ?? "",
      durationMs: observation?.durationMs ?? 1,
      realProcessInvoked: true,
      worktreeRef: observation?.worktreeRef,
    };
    this.observations.set(processRef, next);
    this.completionPending.value = false;
    this.completionResolvers.get(processRef)?.(next);
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    return this.completionPromises.get(processRef) ?? null;
  }
}

/** Alias kept for relocated FakeRealExecutionLaunchGateway. */
export {
  TestOnlyRealExecutionLaunchPort as FakeRealExecutionLaunchGateway,
};
