import type { TechnicalEvent } from "@/lib/platform/observability/types";
import {
  aggregateReadCoverage,
  deriveReadCoverageFromToolEvent,
  type ReadCoverageAggregate,
  type ReadCoverageFact,
} from "@/lib/nora-cognitive-runtime";
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
 * MW4-S03 / CORR-01A — derives read coverage from REAL EventSink shape
 * (toolName, status, summary, source.pathOrRef) only.
 */
export function collectToolTelemetry(events: TechnicalEvent[]): {
  toolEvents: AssistantToolEventDto[];
  sources: AssistantSourceDto[];
  readCoverage: ReadCoverageAggregate;
} {
  const toolEvents: AssistantToolEventDto[] = [];
  const sources: AssistantSourceDto[] = [];
  const seenSources = new Set<string>();
  const coverageByPath = new Map<string, ReadCoverageFact>();

  for (const event of events) {
    if (
      event.type !== "TOOL_SUCCEEDED" &&
      event.type !== "TOOL_DENIED" &&
      event.type !== "TOOL_FAILED"
    ) {
      continue;
    }

    const detail = event.detail;
    const toolName =
      asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
    const status = mapStatus(detail.status, event.type);
    const source = detail.source as
      | { kind?: string; label?: string; pathOrRef?: string | null }
      | undefined;
    const pathOrRef =
      asString(source?.pathOrRef) ??
      asString(detail.pathOrRef) ??
      asString(detail.path);
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

    // CORR-01A — do not invent EventSink fields the product does not emit.
    // Pass only the real contract into coverage derivation.
    const fact = deriveReadCoverageFromToolEvent({
      toolName,
      status,
      pathOrRef,
      summary,
    });
    if (fact) {
      const key = (fact.documentPath ?? fact.pathOrRef).trim();
      const prior = coverageByPath.get(key);
      const rank: Record<ReadCoverageFact["coverage"], number> = {
        full: 0,
        partial: 1,
        denied: 2,
        failed: 3,
        absent: 4,
      };
      if (!prior || rank[fact.coverage] >= rank[prior.coverage]) {
        coverageByPath.set(key, fact);
      }
    }

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

  const coverageFacts = [...coverageByPath.values()];
  return {
    toolEvents,
    sources,
    readCoverage: aggregateReadCoverage(coverageFacts),
  };
}
