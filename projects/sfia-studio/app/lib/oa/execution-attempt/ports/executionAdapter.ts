/**
 * ExecutionAdapterPort (RTA5-03).
 *
 * Surface is closed to `launch` and `cancel`. There is no prepare/getStatus/
 * recordResult on the port: results are recorded by application use-cases so
 * an adapter can never mutate a contract or claim authority.
 *
 * Forbidden in this foundation and in every implementation shipped with it:
 * shell, network, MCP, Cursor, child processes, arbitrary commands,
 * configurable generic adapters, secrets, endpoints, tokens, external effects.
 */

export type LaunchRequest = {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
  adapterRef: string;
  correlationId: string;
};

export type LaunchAck = {
  outcome: "ack";
  adapterId: string;
  attemptId: string;
};

export type LaunchReject = {
  outcome: "reject";
  adapterId: string;
  attemptId: string;
  reason: string;
};

export type LaunchFailure = {
  outcome: "fail";
  adapterId: string;
  attemptId: string;
  reason: string;
};

export type LaunchResult = LaunchAck | LaunchReject | LaunchFailure;

export type CancelRequest = {
  attemptId: string;
  executionContractId: string;
  selectedAgentRef: string;
  adapterRef: string;
  correlationId: string;
  reason: string;
};

export type CancelAck = {
  outcome: "ack";
  adapterId: string;
  attemptId: string;
};

export type CancelFailure = {
  outcome: "fail";
  adapterId: string;
  attemptId: string;
  reason: string;
  /** Effects may already exist and cannot be undone (D07). */
  irreversibleEffectsPossible?: boolean;
};

export type CancelResult = CancelAck | CancelFailure;

export type AdapterCall =
  | { kind: "launch"; attemptId: string; replayed: boolean }
  | { kind: "cancel"; attemptId: string; replayed: boolean };

export interface ExecutionAdapterPort {
  readonly adapterId: string;
  /** Static marker — no shipped adapter may declare external effects. */
  readonly externalEffects: false;
  /** Idempotent per attemptId. */
  launch(request: LaunchRequest): Promise<LaunchResult>;
  cancel(request: CancelRequest): Promise<CancelResult>;
}
