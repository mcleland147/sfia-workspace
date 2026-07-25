/**
 * TestExecutionAdapter — scripted, deterministic, memory-only fixture.
 *
 * No shell, no network, no MCP, no Cursor, no child process, no configurable
 * command, no secret/endpoint/token. It records a call journal and replays a
 * memoized outcome per attemptId so `launch` and `cancel` are idempotent.
 */
import type {
  AdapterCall,
  CancelRequest,
  CancelResult,
  ExecutionAdapterPort,
  LaunchRequest,
  LaunchResult,
} from "../ports/executionAdapter";

export type ScriptedLaunchOutcome =
  | { outcome: "ack" }
  | { outcome: "reject"; reason: string }
  | { outcome: "fail"; reason: string }
  | { outcome: "throw"; reason: string };

export type ScriptedCancelOutcome =
  | { outcome: "ack" }
  | { outcome: "fail"; reason: string; irreversibleEffectsPossible?: boolean }
  | { outcome: "throw"; reason: string };

export type TestExecutionAdapterOptions = {
  adapterId?: string;
  /** Per-attempt scripted outcomes; falls back to the default outcome. */
  launchFixtures?: Record<string, ScriptedLaunchOutcome>;
  cancelFixtures?: Record<string, ScriptedCancelOutcome>;
  defaultLaunch?: ScriptedLaunchOutcome;
  defaultCancel?: ScriptedCancelOutcome;
  /**
   * Adversarial QA hook: override the adapterId returned in LaunchAck while
   * keeping the real `this.adapterId` identity. Used to prove Start fails
   * closed on adapter identity binding mismatch.
   */
  spoofAdapterIdOnAck?: string;
};

export class TestExecutionAdapter implements ExecutionAdapterPort {
  readonly adapterId: string;
  readonly externalEffects = false as const;
  readonly calls: AdapterCall[] = [];

  private readonly launchFixtures: Record<string, ScriptedLaunchOutcome>;
  private readonly cancelFixtures: Record<string, ScriptedCancelOutcome>;
  private readonly defaultLaunch: ScriptedLaunchOutcome;
  private readonly defaultCancel: ScriptedCancelOutcome;
  private readonly spoofAdapterIdOnAck: string | undefined;
  private readonly launched = new Map<string, LaunchResult>();
  private readonly cancelled = new Map<string, CancelResult>();

  constructor(options: TestExecutionAdapterOptions = {}) {
    this.adapterId = options.adapterId ?? "adp:test-fixture";
    this.launchFixtures = { ...(options.launchFixtures ?? {}) };
    this.cancelFixtures = { ...(options.cancelFixtures ?? {}) };
    this.defaultLaunch = options.defaultLaunch ?? { outcome: "ack" };
    this.defaultCancel = options.defaultCancel ?? { outcome: "ack" };
    this.spoofAdapterIdOnAck = options.spoofAdapterIdOnAck;
  }

  get launchCallCount(): number {
    return this.calls.filter((call) => call.kind === "launch").length;
  }

  get cancelCallCount(): number {
    return this.calls.filter((call) => call.kind === "cancel").length;
  }

  async launch(request: LaunchRequest): Promise<LaunchResult> {
    const memoized = this.launched.get(request.attemptId);
    if (memoized) {
      this.calls.push({
        kind: "launch",
        attemptId: request.attemptId,
        replayed: true,
      });
      return structuredClone(memoized);
    }
    this.calls.push({
      kind: "launch",
      attemptId: request.attemptId,
      replayed: false,
    });
    const scripted =
      this.launchFixtures[request.attemptId] ?? this.defaultLaunch;
    if (scripted.outcome === "throw") {
      throw new Error(`test_adapter_launch_threw:${scripted.reason}`);
    }
    const ackAdapterId = this.spoofAdapterIdOnAck ?? this.adapterId;
    const result: LaunchResult =
      scripted.outcome === "ack"
        ? {
            outcome: "ack",
            adapterId: ackAdapterId,
            attemptId: request.attemptId,
          }
        : {
            outcome: scripted.outcome,
            adapterId: this.adapterId,
            attemptId: request.attemptId,
            reason: scripted.reason,
          };
    this.launched.set(request.attemptId, result);
    return structuredClone(result);
  }

  async cancel(request: CancelRequest): Promise<CancelResult> {
    const memoized = this.cancelled.get(request.attemptId);
    if (memoized) {
      this.calls.push({
        kind: "cancel",
        attemptId: request.attemptId,
        replayed: true,
      });
      return structuredClone(memoized);
    }
    this.calls.push({
      kind: "cancel",
      attemptId: request.attemptId,
      replayed: false,
    });
    const scripted =
      this.cancelFixtures[request.attemptId] ?? this.defaultCancel;
    if (scripted.outcome === "throw") {
      throw new Error(`test_adapter_cancel_threw:${scripted.reason}`);
    }
    const result: CancelResult =
      scripted.outcome === "ack"
        ? {
            outcome: "ack",
            adapterId: this.adapterId,
            attemptId: request.attemptId,
          }
        : {
            outcome: "fail",
            adapterId: this.adapterId,
            attemptId: request.attemptId,
            reason: scripted.reason,
            irreversibleEffectsPossible: scripted.irreversibleEffectsPossible,
          };
    this.cancelled.set(request.attemptId, result);
    return structuredClone(result);
  }
}
