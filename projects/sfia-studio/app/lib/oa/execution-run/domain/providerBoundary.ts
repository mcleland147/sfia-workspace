/**
 * D2D2-07 — adversarial validation of untrusted provider-ish payloads
 * BEFORE any metadata field is trusted.
 */
import { normalizedFailure } from "./errors";
import type { NormalizedFailure, ProviderLane } from "./types";
import { isIsoTimestamp } from "./evidence";

const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];

const OPS_BY_LANE: Record<ProviderLane, readonly string[]> = {
  ai: ["complete"],
  git: ["read", "git_read"],
  cursor: ["fixture", "cursor_fixture"],
  none: ["event_emit"],
};

const COMMON_KEYS = new Set([
  "correlationId",
  "runId",
  "lane",
  "operation",
  "signal",
  "timeoutMs",
]);

const KEYS_BY_LANE: Record<ProviderLane, ReadonlySet<string>> = {
  ai: new Set([...COMMON_KEYS, "messages", "modelHint"]),
  git: new Set([...COMMON_KEYS, "owner", "repo", "ref", "path", "kind"]),
  cursor: new Set([
    ...COMMON_KEYS,
    "instructionSummary",
    "allowlistRepos",
    "protectedPaths",
    "expectedBranch",
    "expectedHead",
    "observedBranch",
    "observedHead",
  ]),
  none: new Set([...COMMON_KEYS, "detail"]),
};

const GIT_KINDS = new Set(["repository", "branch", "commit", "path_meta"]);

export type ProviderBoundaryOk = {
  readonly ok: true;
  readonly lane: ProviderLane;
  readonly correlationId: string;
  readonly operation: string;
};

export type ProviderBoundaryFail = {
  readonly ok: false;
  readonly failure: NormalizedFailure;
};

export function validateUntrustedProviderRequest(
  input: unknown,
  fallbackCorrelationId = "unknown",
): ProviderBoundaryOk | ProviderBoundaryFail {
  const fail = (userMessage: string): ProviderBoundaryFail => ({
    ok: false,
    failure: normalizedFailure({
      family: "validation",
      code: "VALIDATION_ERROR",
      userMessage,
      retryable: false,
      correlationId:
        typeof input === "object" &&
        input !== null &&
        typeof (input as { correlationId?: unknown }).correlationId === "string"
          ? ((input as { correlationId: string }).correlationId || fallbackCorrelationId)
          : fallbackCorrelationId,
    }),
  });

  if (input === null || input === undefined) {
    return fail("Provider request must be an object");
  }
  if (typeof input !== "object" || Array.isArray(input)) {
    return fail("Provider request must be a non-array object");
  }
  const obj = input as Record<string, unknown>;
  if (typeof obj.correlationId !== "string" || !obj.correlationId.trim()) {
    return fail("correlationId required");
  }
  if (typeof obj.lane !== "string" || !(ALLOWED_LANES as readonly string[]).includes(obj.lane)) {
    return fail("lane must be a valid ProviderLane");
  }
  const lane = obj.lane as ProviderLane;
  if (typeof obj.operation !== "string" || !obj.operation.trim()) {
    return fail("operation required");
  }
  if (!(OPS_BY_LANE[lane] as readonly string[]).includes(obj.operation)) {
    return fail(`operation not allowed for lane ${lane}`);
  }

  const allowedKeys = KEYS_BY_LANE[lane];
  for (const key of Object.keys(obj)) {
    if (!allowedKeys.has(key)) {
      return fail(`additional property forbidden: ${key}`);
    }
    if (/secret|password|token|api[_-]?key|authorization/i.test(key)) {
      return fail("forbidden sensitive field in provider request");
    }
  }

  if (obj.timeoutMs !== undefined) {
    if (typeof obj.timeoutMs !== "number" || !Number.isFinite(obj.timeoutMs) || obj.timeoutMs < 0) {
      return fail("timeoutMs must be a non-negative finite number");
    }
  }

  if (lane === "ai") {
    if (!Array.isArray(obj.messages)) return fail("messages required for ai complete");
    for (const m of obj.messages) {
      if (!m || typeof m !== "object" || Array.isArray(m)) return fail("invalid message entry");
      const msg = m as Record<string, unknown>;
      if (!["system", "user", "assistant"].includes(String(msg.role))) {
        return fail("invalid message role");
      }
      if (typeof msg.content !== "string") return fail("message content must be string");
      if (msg.content.length > 100_000) return fail("message content exceeds size limit");
    }
  }

  if (lane === "git") {
    if (typeof obj.owner !== "string" || !obj.owner.trim()) return fail("owner required");
    if (typeof obj.repo !== "string" || !obj.repo.trim()) return fail("repo required");
    if (typeof obj.kind !== "string" || !GIT_KINDS.has(obj.kind)) {
      return fail("kind must be repository|branch|commit|path_meta");
    }
    if (obj.path !== undefined) {
      if (typeof obj.path !== "string") return fail("path must be string");
      if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
        return fail("path traversal or absolute path forbidden");
      }
    }
  }

  if (lane === "cursor") {
    if (typeof obj.instructionSummary !== "string") return fail("instructionSummary required");
    if (!Array.isArray(obj.allowlistRepos)) return fail("allowlistRepos required");
    if (!Array.isArray(obj.protectedPaths)) return fail("protectedPaths required");
  }

  return {
    ok: true,
    lane,
    correlationId: obj.correlationId,
    operation: obj.operation,
  };
}

export function validateUntrustedProviderResult(
  input: unknown,
  correlationId: string,
): { ok: true } | { ok: false; failure: NormalizedFailure } {
  const fail = (userMessage: string) => ({
    ok: false as const,
    failure: normalizedFailure({
      family: "invalid_provider_result",
      code: "INVALID_PROVIDER_RESULT",
      userMessage,
      retryable: false,
      correlationId,
    }),
  });
  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
    return fail("provider result must be an object");
  }
  const obj = input as Record<string, unknown>;
  if (!["success", "failure", "cancelled", "timed_out"].includes(String(obj.kind))) {
    return fail("provider result kind invalid");
  }
  if (obj.kind === "success") {
    if (typeof obj.redactedSummary !== "string") return fail("redactedSummary required");
    if (/sk-|ghp_|@|password|BEGIN PRIVATE/i.test(obj.redactedSummary)) {
      return fail("redactedSummary appears to contain sensitive or user content");
    }
    if (obj.rawPresent === true) return fail("raw provider payload forbidden");
    if (obj.prompt !== undefined || obj.response !== undefined) {
      return fail("raw prompt/response fields forbidden");
    }
  }
  for (const key of Object.keys(obj)) {
    if (/secret|password|token|api[_-]?key/i.test(key)) {
      return fail("forbidden sensitive field in provider result");
    }
  }
  return { ok: true };
}

export function assertIsoOrFail(
  value: unknown,
  correlationId: string,
): { ok: true; iso: string } | { ok: false; failure: NormalizedFailure } {
  if (typeof value !== "string" || !isIsoTimestamp(value)) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "timestamp must be valid ISO-8601",
        retryable: false,
        correlationId,
      }),
    };
  }
  return { ok: true, iso: value };
}
