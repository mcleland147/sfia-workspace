/**
 * Recursive redaction for D2-D events — no secrets/prompts/raw payloads at any depth.
 * Pure helpers; used by infrastructure event sinks only.
 */

const FORBIDDEN_KEY =
  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;

const FORBIDDEN_VALUE = /sk-[a-zA-Z0-9]{10,}|ghp_[A-Za-z0-9]{10,}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|xox[baprs]-/i;

const MAX_DEPTH = 8;
const MAX_KEYS = 64;

export type RedactionOutcome =
  | { readonly ok: true; readonly value: unknown }
  | { readonly ok: false; readonly reason: string };

export function redactEventDetailDeep(
  input: unknown,
  depth = 0,
): RedactionOutcome {
  if (depth > MAX_DEPTH) {
    return { ok: false, reason: "detail_depth_exceeded" };
  }
  if (input === null || typeof input === "boolean" || typeof input === "number") {
    return { ok: true, value: input };
  }
  if (typeof input === "string") {
    if (FORBIDDEN_VALUE.test(input)) {
      return { ok: false, reason: "sensitive_value" };
    }
    return { ok: true, value: input };
  }
  if (Array.isArray(input)) {
    if (input.length > MAX_KEYS) {
      return { ok: false, reason: "detail_array_too_large" };
    }
    const out: unknown[] = [];
    for (const item of input) {
      const r = redactEventDetailDeep(item, depth + 1);
      if (!r.ok) return r;
      out.push(r.value);
    }
    return { ok: true, value: out };
  }
  if (typeof input === "object") {
    const entries = Object.entries(input as Record<string, unknown>);
    if (entries.length > MAX_KEYS) {
      return { ok: false, reason: "detail_object_too_large" };
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of entries) {
      if (FORBIDDEN_KEY.test(k)) {
        return { ok: false, reason: `forbidden_key:${k}` };
      }
      const r = redactEventDetailDeep(v, depth + 1);
      if (!r.ok) return r;
      out[k] = r.value;
    }
    return { ok: true, value: out };
  }
  return { ok: false, reason: "unsupported_detail_type" };
}

/** Safe AI/Git summary: metadata only — never embed user or provider content. */
export function safeProviderRedactedSummary(parts: {
  readonly adapter: string;
  readonly operation: string;
  readonly status: string;
  readonly callIndex?: number;
  readonly providerId?: string;
  readonly transport?: string;
  readonly kind?: string;
}): string {
  const bits = [
    `[${parts.adapter}]`,
    `op=${parts.operation}`,
    `status=${parts.status}`,
  ];
  if (parts.callIndex != null) bits.push(`calls=${parts.callIndex}`);
  if (parts.providerId) bits.push(`provider=${parts.providerId}`);
  if (parts.transport) bits.push(`transport=${parts.transport}`);
  if (parts.kind) bits.push(`kind=${parts.kind}`);
  return bits.join(" ");
}
