/**
 * Transverse diagnostic — structured JSON events, lane-isolated file sink.
 * Events are observation only — never authority for D3/D4 state.
 * Critical: allowlisted fields, read-only query, lane isolation, DATA-01 retention.
 */
import {
  appendFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  lstatSync,
  chmodSync,
  realpathSync,
} from "node:fs";
import { join, resolve, sep } from "node:path";
import { createHash, randomUUID } from "node:crypto";

export const OBS_EVENT_VERSION = 1 as const;
export const OBS_RETENTION_DAYS = 14 as const;

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

/** Exact key names (not substrings) — avoids redacting allowlisted keys like max_turns_note. */
const REDACT_KEYS =
  /^(password|secret|token|authorization|cookie|api[_-]?key|openai|bearer|contentmarkdown|prompt|sql|note|message|reason|content|cause|notes|streamingnotes)$/i;

/** Meta keys permitted in sinks — everything else dropped. */
const META_ALLOWLIST = new Set([
  "matched",
  "returned",
  "query_len",
  "chars_returned",
  "chars_charged",
  "coverage",
  "revision_status",
  "profile",
  "tool_calls",
  "attempts",
  "kind",
  "maxTurns",
  "model",
  "model_requested",
  "max_turns_note",
  "client_turn_key_fp",
  "status",
  "prior_attempt",
  "effort",
  "tools",
  "has_more",
  "scan_capped",
  "turn_status",
  "cas_applied",
  "reconciled",
  "profile_type_detail",
  "probe",
  "purged",
  "retention_days",
  // Document proposal diagnostics (A+B+D) — codes/sizes/digests only, never bodies.
  "act",
  "extract_path",
  "proposal_present",
  "fence_count",
  "section_count",
  "proposal_chars",
  "proposal_digest16",
  "body_ends_with_nl",
  "scope_verdict",
  "refuse_code",
  "d4_attempted",
  "d4_effect",
  // Document act qualification (A+D+E) — kinds/reasons codes only, never prompts/bodies.
  "qualification_kind",
  "qualification_reason",
  "documentary_intent_signal",
]);

const SECRET_VALUE =
  /sk-[a-zA-Z0-9]{10,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]+|SYNTH_SECRET_PROBE_DO_NOT_LOG_\w+/i;

function lane(): string {
  return process.env.STUDIO_LANE?.trim() || "UNKNOWN";
}

function sourceSha(): string | null {
  const v = process.env.SFIA_SOURCE_SHA?.trim() || process.env.GITHUB_SHA?.trim() || "";
  return v || null;
}

function buildId(): string | null {
  const v = process.env.SFIA_BUILD_ID?.trim() || "";
  return v || null;
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

function scrubString(value: string): string {
  if (SECRET_VALUE.test(value)) return "[REDACTED_SECRET]";
  if (value.length > 240) return `${value.slice(0, 80)}…[len=${value.length}]`;
  return value;
}

/** Expunge sensitive-looking fields recursively (values only). */
export function redactDeep(value: unknown, depth = 0): unknown {
  if (depth > 6) return "[truncated]";
  if (value == null) return value;
  if (typeof value === "string") return scrubString(value);
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

function allowlistMeta(
  meta: Record<string, string | number | boolean | null> | undefined,
): Record<string, string | number | boolean | null> | undefined {
  if (!meta) return undefined;
  const out: Record<string, string | number | boolean | null> = {};
  for (const [k, v] of Object.entries(meta)) {
    if (!META_ALLOWLIST.has(k)) continue;
    if (typeof v === "string") out[k] = scrubString(v);
    else out[k] = v;
  }
  return out;
}

/** Approved base for obs sinks — never arbitrary filesystem. */
export function obsApprovedBase(): string {
  const explicitBase = process.env.SFIA_OBS_BASE?.trim();
  if (explicitBase) return resolve(explicitBase);
  return resolve(join(process.cwd(), ".obs"));
}

/**
 * Resolve lane-isolated sink directory.
 * Even when SFIA_OBS_DIR is set, events go under <root>/<lane> — never a shared flat sink.
 */
export function resolveObsDir(): string {
  const laneName = lane().toLowerCase().replace(/[^a-z0-9_-]/gi, "_") || "unknown";
  const explicit = process.env.SFIA_OBS_DIR?.trim();
  const root = explicit ? resolve(explicit) : obsApprovedBase();
  return join(root, laneName);
}

function assertUnderApproved(dir: string): { ok: true; dir: string } | { ok: false; reason: string } {
  try {
    const approved = obsApprovedBase();
    const explicit = process.env.SFIA_OBS_DIR?.trim();
    const allowedRoot = explicit ? resolve(explicit) : approved;
    const target = resolve(dir);
    const rootWithSep = allowedRoot.endsWith(sep) ? allowedRoot : allowedRoot + sep;
    if (target !== allowedRoot && !target.startsWith(rootWithSep)) {
      return { ok: false, reason: "OBS_PATH_OUTSIDE_APPROVED_ROOT" };
    }
    if (existsSync(target)) {
      const st = lstatSync(target);
      if (st.isSymbolicLink()) {
        return { ok: false, reason: "OBS_SYMLINK_REFUSED" };
      }
      try {
        const real = realpathSync(target);
        const allowedReal = realpathSync(allowedRoot);
        const allowedRealSep = allowedReal.endsWith(sep) ? allowedReal : allowedReal + sep;
        if (real !== allowedReal && !real.startsWith(allowedRealSep)) {
          return { ok: false, reason: "OBS_REALPATH_ESCAPE" };
        }
      } catch {
        return { ok: false, reason: "OBS_REALPATH_UNAVAILABLE" };
      }
    }
    return { ok: true, dir: target };
  } catch (e) {
    return {
      ok: false,
      reason: e instanceof Error ? scrubString(e.message) : "OBS_PATH_CHECK_FAILED",
    };
  }
}

function ensureSink(): { ok: true; dir: string } | { ok: false; reason: string } {
  try {
    const dir = resolveObsDir();
    const check = assertUnderApproved(dir);
    if (!check.ok) return check;
    if (!existsSync(check.dir)) {
      mkdirSync(check.dir, { recursive: true, mode: 0o700 });
    } else {
      try {
        chmodSync(check.dir, 0o700);
      } catch {
        /* best-effort on existing dir */
      }
    }
    return { ok: true, dir: check.dir };
  } catch (e) {
    return {
      ok: false,
      reason: e instanceof Error ? scrubString(e.message) : "OBS_SINK_UNAVAILABLE",
    };
  }
}

/** Read-only open — never creates directories or files. */
export function openObsSinkReadOnly(): {
  ok: true;
  dir: string;
} | {
  ok: false;
  reason: string;
} {
  try {
    const dir = resolveObsDir();
    const check = assertUnderApproved(dir);
    if (!check.ok) return check;
    if (!existsSync(check.dir)) {
      return { ok: false, reason: "OBS_SINK_MISSING" };
    }
    const st = lstatSync(check.dir);
    if (st.isSymbolicLink()) {
      return { ok: false, reason: "OBS_SYMLINK_REFUSED" };
    }
    return { ok: true, dir: check.dir };
  } catch (e) {
    return {
      ok: false,
      reason: e instanceof Error ? scrubString(e.message) : "OBS_SINK_UNAVAILABLE",
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
    source_sha: sourceSha() ?? null,
    build_id: buildId() ?? null,
    ...partial,
    error_category: partial.error_category
      ? scrubString(String(partial.error_category)).slice(0, 120)
      : undefined,
    meta: allowlistMeta(partial.meta),
  };

  const line = JSON.stringify(redactDeep(event));
  try {
    process.stdout.write(`SFIA_OBS ${line}\n`);
  } catch {
    // ignore stdout failure
  }

  const sink = ensureSink();
  if (!sink.ok) {
    try {
      process.stderr.write(
        `SFIA_OBS_DIAGNOSTIC_INCOMPLETE ${JSON.stringify({
          reason: scrubString(sink.reason),
          operation_id: event.operation_id ?? null,
        })}\n`,
      );
    } catch {
      /* ignore */
    }
    return { emitted: false, diagnosticIncomplete: true };
  }

  try {
    const day = event.ts_utc.slice(0, 10);
    const file = join(sink.dir, `events-${day}.jsonl`);
    const created = !existsSync(file);
    appendFileSync(file, `${line}\n`, { mode: 0o600 });
    if (!created) {
      try {
        chmodSync(file, 0o600);
      } catch {
        /* best-effort */
      }
    }
    return { emitted: true };
  } catch (e) {
    try {
      process.stderr.write(
        `SFIA_OBS_DIAGNOSTIC_INCOMPLETE ${JSON.stringify({
          reason: scrubString(e instanceof Error ? e.message : "WRITE_FAILED"),
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

/** Read-only query by operation_id — never creates sink paths. */
export function queryObsByOperationId(operationId: string): {
  status: "AVAILABLE" | "NOT_FOUND" | "SINK_UNAVAILABLE";
  events: ObsEvent[];
  sinkDir: string | null;
} {
  const sink = openObsSinkReadOnly();
  if (!sink.ok) {
    return { status: "SINK_UNAVAILABLE", events: [], sinkDir: null };
  }
  let files: string[];
  try {
    files = readdirSync(sink.dir)
      .filter((f) => f.startsWith("events-") && f.endsWith(".jsonl"))
      .sort();
  } catch {
    return { status: "SINK_UNAVAILABLE", events: [], sinkDir: sink.dir };
  }
  const events: ObsEvent[] = [];
  for (const f of files) {
    let raw: string;
    try {
      raw = readFileSync(join(sink.dir, f), "utf8");
    } catch {
      continue;
    }
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

/**
 * DATA-01 retention: purge technical JSONL older than retentionDays under the lane sink only.
 * Never deletes outside resolved obs dir; never touches métier DB.
 */
export function purgeObsOlderThan(
  retentionDays = OBS_RETENTION_DAYS,
  now = new Date(),
): {
  status: "PURGED" | "NOTHING" | "SINK_UNAVAILABLE" | "REFUSED";
  purged: number;
  sinkDir: string | null;
} {
  if (retentionDays < 1 || retentionDays > 365) {
    return { status: "REFUSED", purged: 0, sinkDir: null };
  }
  const sink = openObsSinkReadOnly();
  if (!sink.ok) {
    // For purge we may need the dir to exist; do not create it just to purge.
    return { status: "SINK_UNAVAILABLE", purged: 0, sinkDir: null };
  }
  const cutoff = new Date(now.getTime() - retentionDays * 24 * 60 * 60 * 1000);
  const cutoffDay = cutoff.toISOString().slice(0, 10);
  let purged = 0;
  try {
    const files = readdirSync(sink.dir).filter(
      (f) => /^events-\d{4}-\d{2}-\d{2}\.jsonl$/.test(f),
    );
    for (const f of files) {
      const day = f.slice("events-".length, "events-".length + 10);
      if (day < cutoffDay) {
        const full = join(sink.dir, f);
        const st = lstatSync(full);
        if (st.isSymbolicLink() || !st.isFile()) continue;
        unlinkSync(full);
        purged += 1;
      }
    }
  } catch {
    return { status: "SINK_UNAVAILABLE", purged: 0, sinkDir: sink.dir };
  }
  return {
    status: purged > 0 ? "PURGED" : "NOTHING",
    purged,
    sinkDir: sink.dir,
  };
}

/** Synthetic secret probe value — must never appear in sinks. */
export const OBS_SYNTHETIC_SECRET_PROBE = "SYNTH_SECRET_PROBE_DO_NOT_LOG_9f3a";
