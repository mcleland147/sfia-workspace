/** Map technical errors to safe categories — never leak provider/raw text. */
export function categorizeProviderError(err: unknown): {
  category: string;
  interrupted: boolean;
  preContactLikely: boolean;
} {
  const msg = err instanceof Error ? err.message : String(err);
  // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
  const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
  // Only treat as pre-contact when clearly local/config before network.
  const preContactLikely =
    /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
      msg,
    ) && !/fetch|network|ECONN|socket|HTTP|429|500|502|503/i.test(msg);
  let category = "PROVIDER_ERROR";
  if (interrupted) category = "PROVIDER_INTERRUPTED";
  else if (
    // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
    /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
      msg,
    )
  ) {
    category = "PROVIDER_SCHEMA_OR_OUTPUT";
  } else if (
    /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
      msg,
    )
  ) {
    category = "PROVIDER_MODEL_OR_ENTITLEMENT";
  } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
  return { category, interrupted, preContactLikely };
}

const SAFE_ERROR_NAME = /^[A-Za-z][A-Za-z0-9_.]{0,80}$/;
const SAFE_ERROR_CODE = /^[A-Za-z0-9_.-]{1,64}$/;
const SAFE_ZOD_PATH = /^[A-Za-z0-9_.\[\]()-]{1,160}$/;
const SENSITIVE_IN_CODE =
  /sk-|ghp_|github_pat_|api[_-]?key|bearer|authorization|password|secret/i;

/** Agents SDK 0.21 emits this shape from formatFinalOutputTypeError. */
const INVALID_OUTPUT_PATH_RE =
  /Invalid output type:\s*final assistant output failed schema validation at "([^"]+)"(?:\s*\(([^)]*)\))?/i;

/**
 * Stable semantic kind surviving production minify (`new.target.name` → `"h"`).
 * Derived from message patterns + non-minified names only — never raw bodies.
 */
export function classifyProviderErrorKind(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  const name = err instanceof Error ? err.name : "";
  if (/abort|AbortError/i.test(msg) || name === "AbortError") return "aborted";
  if (/timeout|timed\s*out|ETIMEDOUT/i.test(msg) || name === "ModelTimeoutError") return "timeout";
  if (INVALID_OUTPUT_PATH_RE.test(msg) || /failed schema validation/i.test(msg)) {
    return "structured_output_schema_validation";
  }
  if (/Invalid output type/i.test(msg)) return "structured_output_invalid_type";
  if (/structured output type|no final output/i.test(msg)) return "structured_output_missing";
  if (/ZodError/i.test(name) || /ZodError/i.test(msg)) return "zod_validation";
  if (/MaxTurnsExceeded/i.test(name) || /max(?:imum)? turns/i.test(msg)) return "max_turns";
  if (/ModelRefusal/i.test(name) || /refused to produce/i.test(msg)) return "model_refusal";
  if (/ModelBehaviorError/i.test(name)) return "model_behavior";
  if (/ECONNRESET|ENOTFOUND|ECONNREFUSED|fetch failed|socket/i.test(msg)) return "network_transport";
  if (/\b429\b|rate[_ ]?limit/i.test(msg)) return "rate_limit";
  if (/\b5\d\d\b/.test(msg)) return "http_5xx";
  if (SAFE_ERROR_NAME.test(name) && name.length > 2 && !SENSITIVE_IN_CODE.test(name)) {
    return `named_${name}`;
  }
  return "unclassified";
}

/** Parse Zod/Agents schema path from known safe SDK messages only. */
export function extractSchemaValidationPath(err: unknown): {
  zod_issue_path: string | null;
  validation_rule_hint: string | null;
} {
  const msg = err instanceof Error ? err.message : String(err);
  const m = INVALID_OUTPUT_PATH_RE.exec(msg);
  if (!m) return { zod_issue_path: null, validation_rule_hint: null };
  const path = m[1]?.trim() ?? "";
  const detail = (m[2] ?? "").trim();
  const zod_issue_path = path && SAFE_ZOD_PATH.test(path) ? path : null;
  let validation_rule_hint: string | null = null;
  if (/Too big|at most \d+ character|<=\s*\d+\s*character/i.test(detail)) {
    validation_rule_hint = "max_length";
  } else if (/Too small|at least \d+/i.test(detail)) {
    validation_rule_hint = "min_length_or_count";
  } else if (/Required|required/i.test(detail)) validation_rule_hint = "required";
  else if (/Invalid enum|invalid_enum/i.test(detail)) validation_rule_hint = "enum";
  else if (/Expected|Invalid/i.test(detail)) validation_rule_hint = "type_or_format";
  else if (detail) validation_rule_hint = "other";
  return { zod_issue_path, validation_rule_hint };
}

/**
 * Bounded fingerprint of error message shape — never stores raw message.
 * Collapses digits and long quotes; SHA-256 truncated.
 */
export function providerErrorMessageFingerprint(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  const normalized = msg
    .replace(SENSITIVE_IN_CODE, "[REDACTED]")
    .replace(/"[^"]{24,}"/g, '"…"')
    .replace(/\d+/g, "N")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
  return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
}

/**
 * DEV forensic only (`STUDIO_NORA_DIAG_EPHEMERAL=1`). Writes under `.tmp-sfia-nora-diag/`.
 * Never enabled on RECETTE/STABLE. Not published to handoff.
 */
function writeEphemeralNoraDiag(input: {
  generationId: string;
  attemptId: string;
  phase: string;
  category: string;
  diag: ReturnType<typeof extractProviderErrorDiagnostics>;
  err: unknown;
}): void {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  if (process.env.STUDIO_NORA_DIAG_EPHEMERAL !== "1") return;
  if (lane !== "DEV") return;
  try {
    const dir = join(process.cwd(), ".tmp-sfia-nora-diag");
    mkdirSync(dir, { recursive: true });
    const err = input.err;
    const rawName = err instanceof Error ? err.name : typeof err;
    const rawMsg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? (err.stack ?? "").split("\n").slice(0, 12) : [];
    const cause =
      err instanceof Error && err.cause instanceof Error
        ? { name: err.cause.name, message: err.cause.message.slice(0, 500) }
        : null;
    const payload = {
      ts_utc: new Date().toISOString(),
      lane,
      generationId: input.generationId,
      attemptId: input.attemptId,
      phase: input.phase,
      category: input.category,
      diag: input.diag,
      raw: {
        name: rawName,
        message: rawMsg.slice(0, 2000).replace(SENSITIVE_IN_CODE, "[REDACTED]"),
        stack,
        cause,
      },
      notice: "EPHEMERAL LOCAL DIAG — do not publish to handoff / do not copy to RECETTE",
    };
    const file = join(dir, `${input.generationId}-${input.attemptId}.json`);
    writeFileSync(file, JSON.stringify(payload, null, 2), { mode: 0o600 });
  } catch {
    // Forensic best-effort — never fail the turn path.
  }
}

/**
 * R05 / UAT-03 — bounded extraction of provider/SDK diagnostics for OBS allowlist only.
 * Walks nested `cause` up to depth 4. Survives minified Error.name. Never returns raw bodies.
 */
export function extractProviderErrorDiagnostics(
  err: unknown,
  opts?: { phase?: string; streamingDelivered?: boolean; toolCallsObserved?: number },
): {
  error_name: string;
  error_name_stable: string;
  error_kind: string;
  error_code: string | null;
  http_status: number | null;
  transport_kind: string | null;
  error_phase: string;
  streaming_delivered: boolean;
  cause_depth: number;
  tool_calls_observed: number | null;
  zod_issue_path: string | null;
  validation_rule_hint: string | null;
  msg_fingerprint: string;
} {
  let errorName = "Error";
  let errorCode: string | null = null;
  let httpStatus: number | null = null;
  let transportKind: string | null = null;
  let depth = 0;
  let cur: unknown = err;
  let bestNamed: string | null = null;

  while (cur != null && depth < 4) {
    if (cur instanceof Error) {
      if (SAFE_ERROR_NAME.test(cur.name) && !SENSITIVE_IN_CODE.test(cur.name)) {
        errorName = cur.name;
        // Prefer non-minified names (len>2) when walking the cause chain.
        if (cur.name.length > 2) bestNamed = cur.name;
      }
      const anyErr = cur as Error & {
        code?: unknown;
        status?: unknown;
        statusCode?: unknown;
        requestID?: unknown;
        request_id?: unknown;
      };
      const codeRaw =
        typeof anyErr.code === "string"
          ? anyErr.code
          : typeof anyErr.code === "number"
            ? String(anyErr.code)
            : null;
      if (codeRaw && SAFE_ERROR_CODE.test(codeRaw) && !SENSITIVE_IN_CODE.test(codeRaw)) {
        errorCode = codeRaw;
      }
      const st =
        typeof anyErr.status === "number"
          ? anyErr.status
          : typeof anyErr.statusCode === "number"
            ? anyErr.statusCode
            : null;
      if (st != null && st >= 100 && st <= 599) httpStatus = st;

      const msg = cur.message || "";
      if (/ECONNRESET|ENOTFOUND|ECONNREFUSED|ETIMEDOUT|socket|fetch failed/i.test(msg)) {
        transportKind = "network_transport";
      } else if (/abort|AbortError/i.test(msg) || cur.name === "AbortError") {
        transportKind = "aborted";
      } else if (/timeout|timed\s*out/i.test(msg)) {
        transportKind = "timeout";
      } else if (httpStatus != null) {
        transportKind = "http";
      }

      cur = (cur as Error & { cause?: unknown }).cause;
      depth += 1;
      continue;
    }
    if (typeof cur === "object" && cur !== null && "cause" in cur) {
      cur = (cur as { cause?: unknown }).cause;
      depth += 1;
      continue;
    }
    break;
  }

  const phase =
    opts?.phase && SAFE_ERROR_CODE.test(opts.phase) ? opts.phase : "provider_stream";
  const error_kind = classifyProviderErrorKind(err);
  const schemaBits = extractSchemaValidationPath(err);
  const error_name_stable =
    bestNamed ??
    (error_kind.startsWith("named_")
      ? error_kind.slice("named_".length)
      : error_kind === "structured_output_schema_validation" ||
          error_kind === "structured_output_invalid_type" ||
          error_kind === "structured_output_missing"
        ? "ModelBehaviorError"
        : error_kind === "timeout"
          ? "ModelTimeoutError"
          : error_kind === "zod_validation"
            ? "ZodError"
            : errorName.length > 2
              ? errorName
              : "Error");

  return {
    error_name: errorName,
    error_name_stable,
    error_kind,
    error_code: errorCode,
    http_status: httpStatus,
    transport_kind: transportKind,
    error_phase: phase,
    streaming_delivered: Boolean(opts?.streamingDelivered),
    cause_depth: depth,
    tool_calls_observed:
      typeof opts?.toolCallsObserved === "number" ? opts.toolCallsObserved : null,
    zod_issue_path: schemaBits.zod_issue_path,
    validation_rule_hint: schemaBits.validation_rule_hint,
    msg_fingerprint: providerErrorMessageFingerprint(err),
  };
}

