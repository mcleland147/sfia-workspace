/**
 * Agents SDK tracing under Studio control (corrective).
 *
 * - Correlation via AsyncLocalStorage (no mutable global for concurrent works).
 * - setTraceProcessors([...]) replaces defaults; failure ⇒ tracing OFF.
 * - StudioLocalTraceProcessor: redacted OBS + in-memory sink; no HTTP.
 * - Independent network oracle: wrap fetch around real SDK runs.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { emitObs } from "@/lib/observability";

export type AgentsTracingMode = "off" | "local";

export type StudioTracingCorrelation = {
  operationId: string | null;
  generationId: string | null;
  attemptId: string | null;
  workId: string | null;
};

export type StudioTraceSinkRecord = {
  kind: "trace" | "span";
  name: string;
  traceId: string | null;
  spanId: string | null;
  status: string | null;
  durationMs: number | null;
  dataRedacted: true;
  correlation: StudioTracingCorrelation;
  atMs: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TraceLike = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpanLike = any;

const correlationAls = new AsyncLocalStorage<StudioTracingCorrelation>();

let configured = false;
let lastMode: AgentsTracingMode = "off";
let processorsActuallyReplaced = false;

const sinkRecords: StudioTraceSinkRecord[] = [];
const networkHits: string[] = [];

export function resetAgentsTracingTestState(): void {
  sinkRecords.length = 0;
  networkHits.length = 0;
  configured = false;
  lastMode = "off";
  processorsActuallyReplaced = false;
}

export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
  return sinkRecords;
}

export function getAgentsTracingNetworkHits(): readonly string[] {
  return networkHits;
}

export function resolveAgentsTracingMode(
  env: NodeJS.ProcessEnv = process.env,
): AgentsTracingMode {
  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
  return raw === "local" ? "local" : "off";
}

export async function runWithAgentsTracingCorrelation<T>(
  corr: StudioTracingCorrelation,
  fn: () => Promise<T>,
): Promise<T> {
  return correlationAls.run(
    {
      operationId: corr.operationId ?? null,
      generationId: corr.generationId ?? null,
      attemptId: corr.attemptId ?? null,
      workId: corr.workId ?? null,
    },
    fn,
  );
}

export function getAgentsTracingCorrelation(): StudioTracingCorrelation {
  return (
    correlationAls.getStore() ?? {
      operationId: null,
      generationId: null,
      attemptId: null,
      workId: null,
    }
  );
}

/** @deprecated mutable global — kept as no-op wrapper for callers; use ALS. */
export function setAgentsTracingCorrelation(
  next: Partial<StudioTracingCorrelation>,
): void {
  const cur = correlationAls.getStore();
  if (!cur) return;
  cur.operationId = next.operationId ?? cur.operationId;
  cur.generationId = next.generationId ?? cur.generationId;
  cur.attemptId = next.attemptId ?? cur.attemptId;
  cur.workId = next.workId ?? cur.workId;
}

export function clearAgentsTracingCorrelation(): void {
  /* ALS exits clear scope; no global to clear */
}

function spanName(span: SpanLike): string {
  const data = span?.spanData ?? span?.data;
  if (data && typeof data === "object") {
    const t = typeof data.type === "string" ? data.type : null;
    const n = typeof data.name === "string" ? data.name : null;
    if (t && n) return `${t}:${n}`;
    if (t) return t;
    if (n) return n;
  }
  return "span";
}

function asEpochMs(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim()) {
    const t = Date.parse(v);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

function durationMs(span: SpanLike): number | null {
  const start = asEpochMs(span?.startedAt);
  const end = asEpochMs(span?.endedAt);
  if (start == null || end == null) return null;
  return Math.max(0, Math.floor(end - start));
}

function statusOf(span: SpanLike): string | null {
  if (span?.error != null) return "error";
  if (span?.endedAt != null) return "ok";
  return null;
}

function recordLocal(item: StudioTraceSinkRecord): void {
  sinkRecords.push(item);
  if (sinkRecords.length > 500) sinkRecords.shift();
  try {
    emitObs({
      event_name: "provider.agents_trace.local",
      component: "agents_sdk_tracing",
      outcome: item.status === "error" ? "FAILED" : "SUCCESS",
      operation_id: item.correlation.operationId ?? undefined,
      generation_id: item.correlation.generationId ?? undefined,
      attempt_id: item.correlation.attemptId ?? undefined,
      duration_ms: item.durationMs ?? undefined,
      meta: {
        kind: item.kind,
        status: item.status,
        tool_calls: item.name,
      },
    });
  } catch {
    /* never break Nora */
  }
}

export class StudioLocalTraceProcessor {
  async onTraceStart(_trace: TraceLike): Promise<void> {}

  async onTraceEnd(trace: TraceLike): Promise<void> {
    try {
      recordLocal({
        kind: "trace",
        name: typeof trace?.name === "string" ? trace.name : "trace",
        traceId: typeof trace?.traceId === "string" ? trace.traceId : null,
        spanId: null,
        status: "ok",
        durationMs: null,
        dataRedacted: true,
        correlation: getAgentsTracingCorrelation(),
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async onSpanStart(_span: SpanLike): Promise<void> {}

  async onSpanEnd(span: SpanLike): Promise<void> {
    try {
      recordLocal({
        kind: "span",
        name: spanName(span),
        traceId: typeof span?.traceId === "string" ? span.traceId : null,
        spanId: typeof span?.spanId === "string" ? span.spanId : null,
        status: statusOf(span),
        durationMs: durationMs(span),
        dataRedacted: true,
        correlation: getAgentsTracingCorrelation(),
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async forceFlush(): Promise<void> {}
  async shutdown(): Promise<void> {}
}

function urlOf(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.toString();
  try {
    return String((input as Request).url ?? "");
  } catch {
    return "";
  }
}

function isTraceExportUrl(url: string): boolean {
  const u = url.toLowerCase();
  return (
    u.includes("/traces") ||
    u.includes("traces.ingest") ||
    u.includes("api.openai.com/v1/traces")
  );
}

/**
 * Independent network oracle: wrap global fetch for the duration of fn.
 * Records any URL that looks like a traces export endpoint.
 */
export async function withAgentsTracingNetworkOracle<T>(
  fn: () => Promise<T>,
): Promise<{ result: T; traceExportUrls: string[] }> {
  const hits: string[] = [];
  const prev = globalThis.fetch;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = urlOf(input);
    if (isTraceExportUrl(url)) {
      hits.push(url);
      networkHits.push(url);
      return new Response(JSON.stringify({ refused: "TRACE_EXPORT_BLOCKED" }), {
        status: 599,
        headers: { "content-type": "application/json" },
      });
    }
    return prev(input, init);
  }) as typeof fetch;
  try {
    const result = await fn();
    return { result, traceExportUrls: hits };
  } finally {
    globalThis.fetch = prev;
  }
}

export type ConfigureAgentsTracingResult = {
  mode: AgentsTracingMode;
  tracingDisabled: boolean;
  processorsReplaced: boolean;
  sensitiveLoggingForcedOff: boolean;
};

export async function configureAgentsSdkTracing(
  env: NodeJS.ProcessEnv = process.env,
): Promise<ConfigureAgentsTracingResult> {
  const mode = resolveAgentsTracingMode(env);
  let sensitiveLoggingForcedOff = false;
  let processorsReplaced = false;

  try {
    const core = await import("@openai/agents-core");
    if (typeof core.setSensitiveDataLoggingEnabled === "function") {
      core.setSensitiveDataLoggingEnabled(false);
      sensitiveLoggingForcedOff = true;
    }
  } catch {
    sensitiveLoggingForcedOff = false;
  }

  try {
    const agents = await import("@openai/agents");
    if (mode === "off") {
      if (typeof agents.setTraceProcessors === "function") {
        agents.setTraceProcessors([]);
        processorsReplaced = true;
      }
      if (typeof agents.setTracingDisabled === "function") {
        agents.setTracingDisabled(true);
      }
      lastMode = "off";
      configured = true;
      processorsActuallyReplaced = processorsReplaced;
      return {
        mode: "off",
        tracingDisabled: true,
        processorsReplaced,
        sensitiveLoggingForcedOff,
      };
    }

    if (typeof agents.setTraceProcessors !== "function") {
      // Cannot prove replacement — fail closed to OFF.
      if (typeof agents.setTracingDisabled === "function") {
        agents.setTracingDisabled(true);
      }
      lastMode = "off";
      configured = true;
      processorsActuallyReplaced = false;
      return {
        mode: "off",
        tracingDisabled: true,
        processorsReplaced: false,
        sensitiveLoggingForcedOff,
      };
    }

    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
    processorsReplaced = true;
    if (typeof agents.setTracingDisabled === "function") {
      agents.setTracingDisabled(false);
    }
    lastMode = "local";
    configured = true;
    processorsActuallyReplaced = true;
    return {
      mode: "local",
      tracingDisabled: false,
      processorsReplaced: true,
      sensitiveLoggingForcedOff,
    };
  } catch {
    // Configuration failure ⇒ OFF
    lastMode = "off";
    configured = true;
    processorsActuallyReplaced = false;
    return {
      mode: "off",
      tracingDisabled: true,
      processorsReplaced: false,
      sensitiveLoggingForcedOff,
    };
  }
}

export function getAgentsTracingConfigState(): {
  configured: boolean;
  mode: AgentsTracingMode;
  processorsReplaced: boolean;
} {
  return {
    configured,
    mode: lastMode,
    processorsReplaced: processorsActuallyReplaced,
  };
}
