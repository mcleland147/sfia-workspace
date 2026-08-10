/**
 * In-memory EventSink for F1 — mirrors D1 pattern; no OPS1/DB dependency.
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { redactSecrets } from "@/lib/platform/security/redaction";

function redactDetail(
  detail: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(detail)) {
    if (typeof v === "string") {
      out[k] = redactSecrets(v);
    } else if (v && typeof v === "object" && !Array.isArray(v)) {
      out[k] = redactDetail(v as Record<string, unknown>);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export class ProjectAssistantMemoryEventSink implements EventSink {
  readonly events: TechnicalEvent[] = [];

  emit(event: TechnicalEvent): void {
    this.events.push({
      type: event.type,
      correlationId: event.correlationId,
      detail: redactDetail(event.detail ?? {}),
    });
  }
}
