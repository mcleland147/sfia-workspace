/**
 * Transverse diagnostic — structured JSON events, lane-isolated file sink.
 * Events are observation only — never authority for D3/D4 state.
 */
import { appendFileSync, mkdirSync, existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash, randomUUID } from "node:crypto";

export const OBS_EVENT_VERSION = 1 as const;

export type ObsOutcome =
  | "SUCCESS"
  | "FAILED"
  | "UNKNOWN"
  | "INTERRUPTED"
  | "DENIED"
  | "CONFLICT"
  | "PARTIAL"
  | "DIAGNOSTIC_INCOMPLETE";

export type ObsEvent = {
  event_version: typeof OBS_EVENT_VERSION;
  event_name: string;
  ts_utc: string;
  component: string;
  lane: string;
  source_sha: string | null;
  build_id: string | null;
  request_id?: string;
  operation_id?: string;
  generation_id?: string;
  attempt_id?: string;
  provider_request_id?: string | null;
  resource_ref?: string;
  source_version?: string;
  outcome?: ObsOutcome;
  error_category?: string;
  duration_ms?: number;
  usage?: { input_tokens?: number; output_tokens?: number; UNAVAILABLE?: true };
  policy_version?: string;
  profile_type?: "TEST_BOUNDARY" | "OPERATIONAL";
  meta?: Record<string, string | number | boolean | null>;
};

const REDACT_KEYS =
  /password|secret|token|authorization|cookie|api[_-]?key|openai|bearer|contentmarkdown|prompt|sql/i;

function lane(): string {
  return process.env.STUDIO_LANE?.trim() || "UNKNOWN";
}

function sourceSha(): string | null {
  return process.env.SFIA_SOURCE_SHA?.trim() || process.env.GITHUB_SHA?.trim() || null;
}

function buildId(): string | null {
  return process.env.SFIA_BUILD_ID?.trim() || null;
}

export function newRequestId(): string {
  return `req_${randomUUID()}`;
}

export function newOperationId(): string {
  return `op_${randomUUID()}`;
}

export function newAttemptId(): string {
  return `att_${randomUUID()}`;
}

/** Expunge sensitive-looking fields recursively (values only). */
export function redactDeep(value: unknown, depth = 0): unknown {
  if (depth > 6) return "[truncated]";
  if (value == null) return value;
  if (typeof value === "string") {
    if (value.length > 240) return `${value.slice(0, 80)}…[len=${value.length}]`;
    if (/sk-[a-zA-Z0-9]{10,}|ghp_|github_pat_/i.test(value)) return "[REDACTED_SECRET]";
    return value;
  }
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) return value.slice(0, 20).map((v) => redactDeep(v, depth + 1));
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (REDACT_KEYS.test(k)) {
      out[k] = "[REDACTED]";
      continue;
    }
    out[k] = redactDeep(v, depth + 1);
  }
  return out;
}

function obsRoot(): string {
  const explicit = process.env.SFIA_OBS_DIR?.trim();
  if (explicit) return explicit;
  // Default under web/.obs/<lane> — outside DB métier, local DEV only.
  return join(process.cwd(), ".obs", lane().toLowerCase());
}

function ensureSink(): { ok: true; dir: string } | { ok: false; reason: string } {
  try {
    const dir = obsRoot();
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true, mode: 0o700 });
    return { ok: true, dir };
  } catch (e) {
    return {
      ok: false,
      reason: e instanceof Error ? e.message : "OBS_SINK_UNAVAILABLE",
    };
  }
}

/**
 * Emit one structured event. Failures → DIAGNOSTIC_INCOMPLETE (never mutate métier).
 */
export function emitObs(partial: Omit<ObsEvent, "event_version" | "ts_utc" | "lane" | "source_sha" | "build_id"> & {
  event_name: string;
  component: string;
}): { emitted: boolean; diagnosticIncomplete?: boolean } {
  const event: ObsEvent = {
    event_version: OBS_EVENT_VERSION,
    ts_utc: new Date().toISOString(),
    lane: lane(),
    source_sha: sourceSha(),
    build_id: buildId(),
    ...partial,
    meta: partial.meta
      ? (redactDeep(partial.meta) as Record<string, string | number | boolean | null>)
      : undefined,
  };

  const line = JSON.stringify(redactDeep(event));
  // Always mirror to stdout for launcher capture (no secrets by construction).
  try {
    process.stdout.write(`SFIA_OBS ${line}\n`);
  } catch {
    // ignore stdout failure
  }

  const sink = ensureSink();
  if (!sink.ok) {
    try {
      process.stderr.write(
        `SFIA_OBS_DIAGNOSTIC_INCOMPLETE ${JSON.stringify({ reason: sink.reason, operation_id: event.operation_id ?? null })}\n`,
      );
    } catch {
      /* ignore */
    }
    return { emitted: false, diagnosticIncomplete: true };
  }

  try {
    const day = event.ts_utc.slice(0, 10);
    const file = join(sink.dir, `events-${day}.jsonl`);
    appendFileSync(file, `${line}\n`, { mode: 0o600 });
    return { emitted: true };
  } catch (e) {
    try {
      process.stderr.write(
        `SFIA_OBS_DIAGNOSTIC_INCOMPLETE ${JSON.stringify({
          reason: e instanceof Error ? e.message : "WRITE_FAILED",
          operation_id: event.operation_id ?? null,
        })}\n`,
      );
    } catch {
      /* ignore */
    }
    return { emitted: false, diagnosticIncomplete: true };
  }
}

export function fingerprintRequest(parts: string[]): string {
  return createHash("sha256").update(parts.join("\0")).digest("hex");
}

/** Read-only query by operation_id across lane sink files. */
export function queryObsByOperationId(operationId: string): {
  status: "AVAILABLE" | "NOT_FOUND" | "SINK_UNAVAILABLE";
  events: ObsEvent[];
  sinkDir: string | null;
} {
  const sink = ensureSink();
  if (!sink.ok) {
    return { status: "SINK_UNAVAILABLE", events: [], sinkDir: null };
  }
  const files = readdirSync(sink.dir)
    .filter((f) => f.startsWith("events-") && f.endsWith(".jsonl"))
    .sort();
  const events: ObsEvent[] = [];
  for (const f of files) {
    const raw = readFileSync(join(sink.dir, f), "utf8");
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      try {
        const ev = JSON.parse(line) as ObsEvent;
        if (ev.operation_id === operationId) events.push(ev);
      } catch {
        // skip corrupt line
      }
    }
  }
  return {
    status: events.length ? "AVAILABLE" : "NOT_FOUND",
    events,
    sinkDir: sink.dir,
  };
}

/** Synthetic secret probe value — must never appear in sinks. */
export const OBS_SYNTHETIC_SECRET_PROBE = "SYNTH_SECRET_PROBE_DO_NOT_LOG_9f3a";
