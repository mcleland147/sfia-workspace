/**
 * FinOps T6-foundation — deterministic payload redaction / whitelist.
 * Prefer allow-list over deep copy of arbitrary objects.
 */

const MAX_STRING_LEN = 256;
const MAX_KEYS = 24;

const ALLOWED_KEYS = new Set([
  "eventId",
  "dedupKey",
  "code",
  "retryable",
  "projectId",
  "executionRunId",
  "correlationId",
  "provider",
  "status",
]);

const SECRET_KEY_PATTERN =
  /(password|passwd|secret|token|api[_-]?key|authorization|bearer|cookie|credential|connectionstring|database_url)/i;

function truncateString(value: string): string {
  if (value.length <= MAX_STRING_LEN) return value;
  return `${value.slice(0, MAX_STRING_LEN)}…`;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

/**
 * Returns a bounded, secret-free payload suitable for durable FinOps audit storage.
 */
export function redactFinOpsAuditPayload(
  detail: Readonly<Record<string, unknown>>,
): Readonly<Record<string, unknown>> {
  const out: Record<string, unknown> = {};
  let count = 0;
  for (const [key, raw] of Object.entries(detail)) {
    if (count >= MAX_KEYS) break;
    if (SECRET_KEY_PATTERN.test(key)) continue;
    if (!ALLOWED_KEYS.has(key)) continue;

    if (raw === null) {
      out[key] = null;
      count += 1;
      continue;
    }
    if (typeof raw === "boolean" || typeof raw === "number") {
      if (typeof raw === "number" && !Number.isFinite(raw)) continue;
      out[key] = raw;
      count += 1;
      continue;
    }
    if (typeof raw === "string") {
      out[key] = truncateString(raw);
      count += 1;
      continue;
    }
    // Nested objects / arrays / functions are dropped (minimization).
    if (isPlainObject(raw) || Array.isArray(raw)) continue;
  }
  return out;
}

export function assertRedactedPayloadHasNoSecrets(
  payload: Readonly<Record<string, unknown>>,
): void {
  const serialized = JSON.stringify(payload).toLowerCase();
  if (
    serialized.includes("password") ||
    serialized.includes("postgres://") ||
    serialized.includes("postgresql://") ||
    serialized.includes("api_key") ||
    serialized.includes("apikey") ||
    serialized.includes("bearer ")
  ) {
    throw new Error("Redacted FinOps audit payload must not contain secrets");
  }
  for (const key of Object.keys(payload)) {
    if (SECRET_KEY_PATTERN.test(key)) {
      throw new Error(`Redacted payload retains secret-like key: ${key}`);
    }
  }
}
