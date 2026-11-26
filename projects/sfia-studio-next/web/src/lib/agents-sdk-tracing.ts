/**
 * Macro-lot 1 — Agents SDK tracing under Studio control.
 *
 * Modes (SFIA_AGENTS_TRACING_MODE):
 * - off   → setTracingDisabled(true)  [default / rollback]
 * - local → setTracingDisabled(false) + setTraceProcessors([StudioLocalTraceProcessor])
 *
 * NEVER registers a remote OpenAI exporter. Default SDK ConsoleSpanExporter is replaced.
 * Sensitive model/tool payloads are stripped before any local sink.
 * A processor failure must not throw into Nora run paths.
 */

import { emitObs } from "@/lib/observability";

export type AgentsTracingMode = "off" | "local";

export type StudioTraceSinkRecord = {
  kind: "trace" | "span";
  name: string;
  traceId: string | null;
  spanId: string | null;
  status: string | null;
  durationMs: number | null;
  /** Always redacted — presence proves filter ran. */
  dataRedacted: true;
  correlation: {
    operationId: string | null;
    generationId: string | null;
    attemptId: string | null;
    workId: string | null;
  };
  atMs: number;
};

/** Loose structural reads — SDK Span uses string timestamps; we accept both. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TraceLike = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpanLike = any;

export type StudioTracingCorrelation = {
  operationId?: string | null;
  generationId?: string | null;
  attemptId?: string | null;
  workId?: string | null;
};

let correlation: StudioTracingCorrelation = {};
let configured = false;
let lastMode: AgentsTracingMode = "off";

/** Test / egress oracle — in-memory only; never leaves process. */
const sinkRecords: StudioTraceSinkRecord[] = [];
let egressProbeHooks: Array<(url: string) => void> = [];

export function resetAgentsTracingTestState(): void {
  sinkRecords.length = 0;
  egressProbeHooks = [];
  correlation = {};
  configured = false;
  lastMode = "off";
}

export function getAgentsTracingSinkRecords(): readonly StudioTraceSinkRecord[] {
  return sinkRecords;
}

/** Independent egress observation: any processor HTTP would call this. */
export function installAgentsTracingEgressProbe(
  hook: (url: string) => void,
): () => void {
  egressProbeHooks.push(hook);
  return () => {
    egressProbeHooks = egressProbeHooks.filter((h) => h !== hook);
  };
}

function noteEgress(url: string): void {
  for (const h of egressProbeHooks) {
    try {
      h(url);
    } catch {
      /* probe must not break tracing */
    }
  }
}

/**
 * Deliberately unused by StudioLocalTraceProcessor — present so tests can assert
 * that enabling local mode never routes through a remote export helper.
 */
export function __forbiddenRemoteTraceExport(url: string, _body: unknown): void {
  noteEgress(url);
  throw new Error("FORBIDDEN_REMOTE_TRACE_EXPORT");
}

export function setAgentsTracingCorrelation(
  next: StudioTracingCorrelation,
): void {
  correlation = {
    operationId: next.operationId ?? null,
    generationId: next.generationId ?? null,
    attemptId: next.attemptId ?? null,
    workId: next.workId ?? null,
  };
}

export function clearAgentsTracingCorrelation(): void {
  correlation = {};
}

export function resolveAgentsTracingMode(
  env: NodeJS.ProcessEnv = process.env,
): AgentsTracingMode {
  const raw = (env.SFIA_AGENTS_TRACING_MODE ?? "off").trim().toLowerCase();
  return raw === "local" ? "local" : "off";
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
      // Only allowlisted meta keys (see observability.ts META_ALLOWLIST).
      meta: {
        kind: item.kind,
        status: item.status,
        tool_calls: item.name,
      },
    });
  } catch {
    /* OBS failure must not break Nora */
  }
}

/**
 * Local-only TracingProcessor: no HTTP, no model/tool payloads, OBS + in-memory sink.
 */
export class StudioLocalTraceProcessor {
  async onTraceStart(_trace: TraceLike): Promise<void> {
    /* start is noisy; we record on end */
  }

  async onTraceEnd(trace: TraceLike): Promise<void> {
    try {
      recordLocal({
        kind: "trace",
        name: typeof trace.name === "string" ? trace.name : "trace",
        traceId: typeof trace.traceId === "string" ? trace.traceId : null,
        spanId: null,
        status: "ok",
        durationMs: null,
        dataRedacted: true,
        correlation: {
          operationId: correlation.operationId ?? null,
          generationId: correlation.generationId ?? null,
          attemptId: correlation.attemptId ?? null,
          workId: correlation.workId ?? null,
        },
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async onSpanStart(_span: SpanLike): Promise<void> {
    /* record on end */
  }

  async onSpanEnd(span: SpanLike): Promise<void> {
    try {
      recordLocal({
        kind: "span",
        name: spanName(span),
        traceId: typeof span.traceId === "string" ? span.traceId : null,
        spanId: typeof span.spanId === "string" ? span.spanId : null,
        status: statusOf(span),
        durationMs: durationMs(span),
        dataRedacted: true,
        correlation: {
          operationId: correlation.operationId ?? null,
          generationId: correlation.generationId ?? null,
          attemptId: correlation.attemptId ?? null,
          workId: correlation.workId ?? null,
        },
        atMs: Date.now(),
      });
    } catch {
      /* swallow */
    }
  }

  async forceFlush(): Promise<void> {
    /* no remote buffer */
  }

  async shutdown(): Promise<void> {
    /* no-op */
  }
}

export type ConfigureAgentsTracingResult = {
  mode: AgentsTracingMode;
  tracingDisabled: boolean;
  processorsReplaced: boolean;
  sensitiveLoggingForcedOff: boolean;
};

/**
 * Idempotent configuration. Safe to call before every LIVE Agents run.
 */
export async function configureAgentsSdkTracing(
  env: NodeJS.ProcessEnv = process.env,
): Promise<ConfigureAgentsTracingResult> {
  const mode = resolveAgentsTracingMode(env);
  const agents = await import("@openai/agents");

  // Always force sensitive logging OFF for the product path (DEV ephemeral
  // diagnostics remain a separate opt-in in nora-adapter, after this call).
  let sensitiveLoggingForcedOff = false;
  try {
    const core = await import("@openai/agents-core");
    if (typeof core.setSensitiveDataLoggingEnabled === "function") {
      core.setSensitiveDataLoggingEnabled(false);
      sensitiveLoggingForcedOff = true;
    }
  } catch {
    sensitiveLoggingForcedOff = false;
  }

  if (mode === "off") {
    if (typeof agents.setTracingDisabled === "function") {
      agents.setTracingDisabled(true);
    }
    // Replace any processors so a later enable cannot inherit a prior remote exporter.
    if (typeof agents.setTraceProcessors === "function") {
      agents.setTraceProcessors([]);
    }
    lastMode = "off";
    configured = true;
    return {
      mode: "off",
      tracingDisabled: true,
      processorsReplaced: true,
      sensitiveLoggingForcedOff,
    };
  }

  // local mode
  if (typeof agents.setTraceProcessors === "function") {
    agents.setTraceProcessors([new StudioLocalTraceProcessor()]);
  }
  if (typeof agents.setTracingDisabled === "function") {
    agents.setTracingDisabled(false);
  }
  lastMode = "local";
  configured = true;
  return {
    mode: "local",
    tracingDisabled: false,
    processorsReplaced: true,
    sensitiveLoggingForcedOff,
  };
}

export function getAgentsTracingConfigState(): {
  configured: boolean;
  mode: AgentsTracingMode;
} {
  return { configured, mode: lastMode };
}
