import type {
  ExecutionEvent,
  ExecutionEventSinkPort,
} from "../../ports/executionEventSinkPort";
import { assertIsoOrFail } from "../../domain/providerBoundary";
import { redactEventDetailDeep } from "./redactEventDetail";

export class RecordingExecutionEventSink implements ExecutionEventSinkPort {
  readonly events: ExecutionEvent[] = [];

  emit(event: ExecutionEvent): void {
    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
    if (!ts.ok) {
      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
    }
    const redacted = redactEventDetailDeep(event.detail);
    if (!redacted.ok) {
      throw new Error(`EVENT_SENSITIVE_DETAIL_FORBIDDEN:${redacted.reason}`);
    }
    // Port type is flat primitives; reject nested objects at runtime.
    const detail = redacted.value;
    if (detail !== null && typeof detail === "object") {
      for (const [, v] of Object.entries(detail as Record<string, unknown>)) {
        if (v !== null && typeof v === "object") {
          throw new Error("EVENT_NESTED_DETAIL_FORBIDDEN");
        }
      }
    }
    this.events.push({
      ...event,
      detail: detail as ExecutionEvent["detail"],
    });
  }
}
