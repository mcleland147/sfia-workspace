/**
 * EVENT-B — D2-D event semantics mapped onto platform EventSink transport.
 * Platform catalogue is not the semantic authority.
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type {
  ExecutionEvent,
  ExecutionEventSinkPort,
} from "../../ports/executionEventSinkPort";
import { assertIsoOrFail } from "../../domain/providerBoundary";
import { redactEventDetailDeep } from "./redactEventDetail";

function mapType(
  type: ExecutionEvent["type"],
): "TOOL_STARTED" | "TOOL_SUCCEEDED" | "TOOL_FAILED" | "SOURCE_LOADED" | "STRUCTURED_OUTPUT_VALIDATED" {
  switch (type) {
    case "provider_invocation":
    case "run_transition":
      return "TOOL_STARTED";
    case "validation":
    case "usage_validated":
    case "completeness":
      return "STRUCTURED_OUTPUT_VALIDATED";
    case "source":
      return "SOURCE_LOADED";
    case "cancellation":
    case "timeout":
    case "late_result":
      return "TOOL_FAILED";
    default:
      return "TOOL_SUCCEEDED";
  }
}

function assertFlatDetail(detail: unknown): Record<string, string | number | boolean | null> {
  const redacted = redactEventDetailDeep(detail);
  if (!redacted.ok) {
    throw new Error(`EVENT_SENSITIVE_DETAIL_FORBIDDEN:${redacted.reason}`);
  }
  if (redacted.value === null || typeof redacted.value !== "object" || Array.isArray(redacted.value)) {
    throw new Error("EVENT_DETAIL_MUST_BE_OBJECT");
  }
  const out: Record<string, string | number | boolean | null> = {};
  for (const [k, v] of Object.entries(redacted.value as Record<string, unknown>)) {
    if (v !== null && typeof v === "object") {
      throw new Error("EVENT_NESTED_DETAIL_FORBIDDEN");
    }
    if (
      typeof v === "string" ||
      typeof v === "number" ||
      typeof v === "boolean" ||
      v === null
    ) {
      out[k] = v;
    } else {
      throw new Error("EVENT_DETAIL_TYPE_FORBIDDEN");
    }
  }
  return out;
}

export class PlatformExecutionEventSinkAdapter implements ExecutionEventSinkPort {
  constructor(private readonly sink: EventSink) {}

  emit(event: ExecutionEvent): void {
    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
    if (!ts.ok) {
      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
    }
    const safeDetail = assertFlatDetail({
      d2dEventType: event.type,
      runId: event.runId,
      providerLane: event.providerLane,
      occurredAt: event.occurredAt,
      ...event.detail,
    });
    this.sink.emit({
      type: mapType(event.type),
      correlationId: event.correlationId,
      detail: safeDetail,
    });
  }
}
