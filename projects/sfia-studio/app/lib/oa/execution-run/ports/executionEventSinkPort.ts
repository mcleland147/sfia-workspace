import type { ProviderLane } from "../domain/types";

export type ExecutionEventType =
  | "run_transition"
  | "validation"
  | "human_gate"
  | "cancellation"
  | "timeout"
  | "late_result"
  | "completeness"
  | "source"
  | "usage_validated"
  | "provider_invocation";

export type ExecutionEvent = {
  readonly type: ExecutionEventType;
  readonly correlationId: string;
  readonly runId: string;
  readonly providerLane: ProviderLane;
  readonly occurredAt: string;
  /** Redacted, provider-independent detail — no secrets/prompts/raw payloads. */
  readonly detail: Readonly<Record<string, string | number | boolean | null>>;
};

export interface ExecutionEventSinkPort {
  emit(event: ExecutionEvent): void;
}
