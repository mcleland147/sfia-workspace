/**
 * NoOpExecutionAdapter — deterministic acknowledgement with no effect at all.
 * Acknowledging a launch never means anything was executed.
 */
import type {
  AdapterCall,
  CancelRequest,
  CancelResult,
  ExecutionAdapterPort,
  LaunchRequest,
  LaunchResult,
} from "../ports/executionAdapter";

export class NoOpExecutionAdapter implements ExecutionAdapterPort {
  readonly adapterId: string;
  readonly externalEffects = false as const;
  readonly calls: AdapterCall[] = [];

  private readonly launched = new Set<string>();
  private readonly cancelledAttempts = new Set<string>();

  constructor(options: { adapterId?: string } = {}) {
    this.adapterId = options.adapterId ?? "adp:noop";
  }

  async launch(request: LaunchRequest): Promise<LaunchResult> {
    const replayed = this.launched.has(request.attemptId);
    this.launched.add(request.attemptId);
    this.calls.push({ kind: "launch", attemptId: request.attemptId, replayed });
    return {
      outcome: "ack",
      adapterId: this.adapterId,
      attemptId: request.attemptId,
    };
  }

  async cancel(request: CancelRequest): Promise<CancelResult> {
    const replayed = this.cancelledAttempts.has(request.attemptId);
    this.cancelledAttempts.add(request.attemptId);
    this.calls.push({ kind: "cancel", attemptId: request.attemptId, replayed });
    return {
      outcome: "ack",
      adapterId: this.adapterId,
      attemptId: request.attemptId,
    };
  }
}
