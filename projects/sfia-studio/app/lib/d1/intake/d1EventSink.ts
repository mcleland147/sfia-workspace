/**
 * Minimal D1 EventSink — in-memory collector for intake telemetry.
 * No Project DB writes. Secrets must be redacted before emit when needed.
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

export class D1MemoryEventSink implements EventSink {
  readonly events: TechnicalEvent[] = [];

  emit(event: TechnicalEvent): void {
    this.events.push({
      type: event.type,
      correlationId: event.correlationId,
      detail: redactDetail(event.detail ?? {}),
    });
  }
}

export type D1ToolTelemetry = {
  name: string;
  status: "OK" | "DENIED" | "FAILED" | "UNKNOWN";
};

export type D1SourceTelemetry = {
  path: string;
  digestPrefix: string;
  role?: string;
};

export function summarizeD1Telemetry(events: TechnicalEvent[]): {
  tools: D1ToolTelemetry[];
  sources: D1SourceTelemetry[];
  errors: Array<{ type: string; code?: string }>;
} {
  const tools: D1ToolTelemetry[] = [];
  const sources: D1SourceTelemetry[] = [];
  const errors: Array<{ type: string; code?: string }> = [];

  for (const e of events) {
    if (e.type === "SOURCE_LOADED") {
      sources.push({
        path: String(e.detail.path ?? ""),
        digestPrefix: String(e.detail.digestPrefix ?? e.detail.digest ?? ""),
        role: e.detail.role ? String(e.detail.role) : undefined,
      });
    }
    if (e.type === "TOOL_SUCCEEDED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "OK",
      });
    }
    if (e.type === "TOOL_DENIED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "DENIED",
      });
    }
    if (e.type === "TOOL_FAILED") {
      tools.push({
        name: String(e.detail.toolName ?? e.detail.name ?? e.detail.tool ?? "unknown"),
        status: "FAILED",
      });
    }
    if (e.type === "AI_FAILED" || e.type === "SOURCE_REJECTED") {
      errors.push({
        type: e.type,
        code: e.detail.code ? String(e.detail.code) : undefined,
      });
    }
  }

  return { tools, sources, errors };
}
