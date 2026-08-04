/**
 * Pure application helper for untrusted execution payloads.
 * No Node, infrastructure, or provider imports.
 * Rejects accessors, non-plain prototypes, functions, symbols, and cycles.
 */

const DEFAULT_MAX_DEPTH = 8;
const DEFAULT_MAX_KEYS = 64;
const DEFAULT_MAX_ARRAY = 64;
const DEFAULT_MAX_STRING = 4096;

const FORBIDDEN_KEY =
  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;

/**
 * Canonical D2-D3 late-evidence / display redaction detectors.
 * Single aggregation point: containsSensitiveLateContent → sanitizeLateEvidenceSummary.
 * Fail-closed: any hit means the whole late summary becomes late_result_redacted.
 */

/** Assignments, headers, query params, and known secret prefixes. */
const FORBIDDEN_ASSIGNMENT_OR_PREFIX =
  /sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:access_|refresh_|client_)?token\s*[:=]|api[_-]?key\s*[:=]|authorization\s*[:=]|authorization\s*:\s*bearer\b|\bbearer\s+[^\s]+|cookie\s*[:=]|session\s*[:=]|[?&](?:access_|refresh_|client_)?token=/i;

/**
 * JSON-like structured sensitive keys (exact key names inside quotes).
 * Matches "token": / 'token': / with optional whitespace around ':'.
 * Does NOT match longer keys such as tokenCount, authorizationStatus, apiVersion.
 */
const STRUCTURED_SENSITIVE_KEY =
  /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:/i;

/** Local D2-D3 late-evidence sensitive content detector (canonical). */
export function containsSensitiveLateContent(value: string): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  if (STRUCTURED_SENSITIVE_KEY.test(value)) return true;
  if (FORBIDDEN_ASSIGNMENT_OR_PREFIX.test(value)) return true;
  return false;
}

export type UntrustedReadOk = {
  readonly ok: true;
  readonly value: unknown;
};

export type UntrustedReadFail = {
  readonly ok: false;
  readonly reason: string;
};

export type UntrustedReadResult = UntrustedReadOk | UntrustedReadFail;

export type UntrustedReadOptions = {
  readonly maxDepth?: number;
  readonly maxKeys?: number;
  readonly maxArrayLength?: number;
  readonly maxStringLength?: number;
  readonly redact?: boolean;
};

function isPlainObject(value: object): boolean {
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function ownDataKeys(obj: object): string[] | null {
  const names = Object.getOwnPropertyNames(obj);
  const symbols = Object.getOwnPropertySymbols(obj);
  if (symbols.length > 0) return null;
  for (const name of names) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    if (!desc) return null;
    if (desc.get !== undefined || desc.set !== undefined) return null;
    if (typeof desc.value === "function" || typeof desc.value === "symbol") {
      return null;
    }
  }
  return names;
}

function redactString(value: string, maxLength: number): string {
  const cleaned = value
    .replace(STRUCTURED_SENSITIVE_KEY, '"[REDACTED_KEY]":')
    .replace(FORBIDDEN_ASSIGNMENT_OR_PREFIX, "[REDACTED]");
  return cleaned.slice(0, maxLength);
}

function readInner(
  input: unknown,
  depth: number,
  ancestors: WeakSet<object>,
  options: Required<UntrustedReadOptions>,
): UntrustedReadResult {
  if (depth > options.maxDepth) {
    return { ok: false, reason: "depth_exceeded" };
  }
  if (input === null || typeof input === "boolean") {
    return { ok: true, value: input };
  }
  if (input === undefined) {
    return { ok: true, value: undefined };
  }
  if (typeof input === "number") {
    if (!Number.isFinite(input)) {
      return { ok: false, reason: "non_finite_number" };
    }
    return { ok: true, value: input };
  }
  if (typeof input === "string") {
    if (input.length > options.maxStringLength) {
      return { ok: false, reason: "string_too_long" };
    }
    if (options.redact && containsSensitiveLateContent(input)) {
      return { ok: true, value: redactString(input, options.maxStringLength) };
    }
    if (options.redact) {
      return { ok: true, value: input.slice(0, options.maxStringLength) };
    }
    return { ok: true, value: input };
  }
  if (typeof input === "function" || typeof input === "symbol") {
    return { ok: false, reason: "forbidden_type" };
  }
  if (typeof input !== "object") {
    return { ok: false, reason: "unsupported_type" };
  }
  if (ancestors.has(input)) {
    return { ok: false, reason: "cycle" };
  }
  ancestors.add(input);

  if (Array.isArray(input)) {
    if (input.length > options.maxArrayLength) {
      ancestors.delete(input);
      return { ok: false, reason: "array_too_large" };
    }
    const out: unknown[] = [];
    for (let i = 0; i < input.length; i += 1) {
      const desc = Object.getOwnPropertyDescriptor(input, i);
      if (!desc || desc.get !== undefined || desc.set !== undefined) {
        ancestors.delete(input);
        return { ok: false, reason: "array_accessor" };
      }
      const nested = readInner(desc.value, depth + 1, ancestors, options);
      if (!nested.ok) {
        ancestors.delete(input);
        return nested;
      }
      out.push(nested.value);
    }
    ancestors.delete(input);
    return { ok: true, value: out };
  }

  if (!isPlainObject(input)) {
    ancestors.delete(input);
    return { ok: false, reason: "non_plain_object" };
  }
  const keys = ownDataKeys(input);
  if (keys === null) {
    ancestors.delete(input);
    return { ok: false, reason: "accessors_or_symbols" };
  }
  if (keys.length > options.maxKeys) {
    ancestors.delete(input);
    return { ok: false, reason: "too_many_keys" };
  }
  const out: Record<string, unknown> = {};
  for (const key of keys) {
    if (options.redact && FORBIDDEN_KEY.test(key)) {
      ancestors.delete(input);
      return { ok: false, reason: `forbidden_key:${key}` };
    }
    const desc = Object.getOwnPropertyDescriptor(input, key);
    if (!desc || desc.get !== undefined || desc.set !== undefined) {
      ancestors.delete(input);
      return { ok: false, reason: "accessor" };
    }
    const nested = readInner(desc.value, depth + 1, ancestors, options);
    if (!nested.ok) {
      ancestors.delete(input);
      return nested;
    }
    out[key] = nested.value;
  }
  ancestors.delete(input);
  return { ok: true, value: out };
}

/**
 * Inspect descriptors without invoking getters. Produce a detached plain copy
 * or a structured rejection reason.
 */
export function readUntrustedPlainData(
  input: unknown,
  options?: UntrustedReadOptions,
): UntrustedReadResult {
  const resolved: Required<UntrustedReadOptions> = {
    maxDepth: options?.maxDepth ?? DEFAULT_MAX_DEPTH,
    maxKeys: options?.maxKeys ?? DEFAULT_MAX_KEYS,
    maxArrayLength: options?.maxArrayLength ?? DEFAULT_MAX_ARRAY,
    maxStringLength: options?.maxStringLength ?? DEFAULT_MAX_STRING,
    redact: options?.redact ?? false,
  };
  return readInner(input, 0, new WeakSet<object>(), resolved);
}

export function redactBoundedText(
  value: unknown,
  maxLength = 240,
): string | null {
  if (typeof value !== "string") return null;
  return redactString(value, maxLength);
}

export function sanitizeLateEvidenceSummary(input: unknown): string {
  // Official late evidence: non-string / hostile shapes never become caller content.
  if (typeof input !== "string") {
    return "late_result_redacted";
  }
  // Detect on the original before any truncation.
  if (containsSensitiveLateContent(input)) {
    return "late_result_redacted";
  }
  const bounded = input.slice(0, 240).trim();
  if (!bounded) {
    return "late_result_redacted";
  }
  // Re-check after normalization/bounding (fail closed on ambiguity).
  if (containsSensitiveLateContent(bounded)) {
    return "late_result_redacted";
  }
  return bounded;
}
