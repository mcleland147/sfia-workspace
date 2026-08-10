import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { AssistantSourceDto, AssistantToolEventDto } from "./types";

function asString(v: unknown): string | null {
  return typeof v === "string" && v.length > 0 ? v : null;
}

function mapStatus(
  raw: unknown,
  eventType: string,
): AssistantToolEventDto["status"] {
  if (raw === "succeeded" || raw === "denied" || raw === "failed") {
    return raw;
  }
  if (eventType === "TOOL_SUCCEEDED") return "succeeded";
  if (eventType === "TOOL_DENIED") return "denied";
  if (eventType === "TOOL_FAILED") return "failed";
  if (eventType === "TOOL_STARTED") return "started";
  return "requested";
}

/**
 * Collect tool events + source refs from platform EventSink emissions.
 */
export function collectToolTelemetry(events: TechnicalEvent[]): {
  toolEvents: AssistantToolEventDto[];
  sources: AssistantSourceDto[];
} {
  const toolEvents: AssistantToolEventDto[] = [];
  const sources: AssistantSourceDto[] = [];
  const seenSources = new Set<string>();

  for (const event of events) {
    if (
      event.type !== "TOOL_SUCCEEDED" &&
      event.type !== "TOOL_DENIED" &&
      event.type !== "TOOL_FAILED"
    ) {
      continue;
    }

    const detail = event.detail;
    const toolName = asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
    const status = mapStatus(detail.status, event.type);
    const source = detail.source as
      | { kind?: string; label?: string; pathOrRef?: string | null }
      | undefined;
    const pathOrRef =
      asString(source?.pathOrRef) ??
      asString(detail.path) ??
      asString(detail.pathOrRef);
    const summary = asString(detail.summary) ?? asString(detail.message);
    const errorCode = asString(detail.errorCode);

    toolEvents.push({
      toolName,
      status,
      pathOrRef,
      summary,
      errorCode,
      readOnly: true,
    });

    if (
      event.type === "TOOL_SUCCEEDED" &&
      source &&
      (source.kind === "git_local" || source.kind === "github")
    ) {
      const label = asString(source.label) ?? toolName;
      const key = `${source.kind}:${label}:${pathOrRef ?? ""}`;
      if (!seenSources.has(key)) {
        seenSources.add(key);
        sources.push({
          kind: source.kind,
          label,
          pathOrRef,
        });
      }
    }
  }

  return { toolEvents, sources };
}
