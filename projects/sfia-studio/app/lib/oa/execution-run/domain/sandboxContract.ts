/**
 * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
 * Deny-by-default. Does not claim the sandbox is secure.
 *
 * Path comparisons use a shared canonical normalization that percent-decodes
 * once in a bounded way and rejects traversal / double-encoding / controls.
 */

export type SandboxPathDecision =
  | { readonly allowed: true; readonly normalized: string }
  | {
      readonly allowed: false;
      readonly reason:
        | "empty"
        | "absolute"
        | "traversal"
        | "protected"
        | "not_allowlisted"
        | "arbitrary_command"
        | "git_write"
        | "branch_mismatch"
        | "head_mismatch"
        | "observed_missing"
        | "invalid_encoding"
        | "control_or_null"
        | "double_encoding";
    };

export type CanonicalPathResult =
  | { readonly ok: true; readonly normalized: string }
  | {
      readonly ok: false;
      readonly reason:
        | "empty"
        | "absolute"
        | "traversal"
        | "invalid_encoding"
        | "control_or_null"
        | "double_encoding";
    };

const DEFAULT_PROTECTED = [
  ".git/",
  ".env",
  "method/",
  "prompts/",
  ".github/",
  ".sfia/",
  "node_modules/",
] as const;

const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;

function decodePercentOnce(raw: string): CanonicalPathResult {
  let out = "";
  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    if (ch !== "%") {
      const code = ch.charCodeAt(0);
      if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
        return { ok: false, reason: "control_or_null" };
      }
      out += ch;
      continue;
    }
    if (i + 2 >= raw.length) {
      return { ok: false, reason: "invalid_encoding" };
    }
    const hex = raw.slice(i + 1, i + 3);
    if (!/^[0-9A-Fa-f]{2}$/.test(hex)) {
      return { ok: false, reason: "invalid_encoding" };
    }
    const code = Number.parseInt(hex, 16);
    if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
      return { ok: false, reason: "control_or_null" };
    }
    out += String.fromCharCode(code);
    i += 2;
  }
  return { ok: true, normalized: out };
}

/**
 * Canonical path normalization shared by sandbox, provider boundary, and policy.
 * Never normalizes a traversal into an allowlisted path.
 */
export function normalizeCanonicalPath(path: unknown): CanonicalPathResult {
  if (typeof path !== "string" || !path.trim()) {
    return { ok: false, reason: "empty" };
  }
  const replaced = path.trim().replace(/\\/g, "/");
  const first = decodePercentOnce(replaced);
  if (!first.ok) return first;

  // Residual encoded path metacharacters imply double-encoding or incomplete decode.
  if (DANGEROUS_ENCODED.test(first.normalized) || /%25(?:2e|2f|5c|00)/i.test(replaced)) {
    return { ok: false, reason: "double_encoding" };
  }
  if (/%[0-9A-Fa-f]{2}/.test(first.normalized)) {
    // Any remaining percent-encoding after one decode is rejected (fail closed).
    return { ok: false, reason: "double_encoding" };
  }

  const raw = first.normalized;
  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
    return { ok: false, reason: "absolute" };
  }
  const parts = raw.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return { ok: false, reason: "traversal" };
  }
  const normalized = parts.filter((p) => p !== ".").join("/");
  if (!normalized) {
    return { ok: false, reason: "empty" };
  }
  return { ok: true, normalized };
}

/** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
export function pathMatchesAllowlistPrefix(
  normalized: string,
  prefixRaw: string,
): boolean {
  const prefix = prefixRaw.replace(/\\/g, "/").replace(/\/+$/, "");
  if (!prefix) return false;
  if (normalized === prefix) return true;
  return normalized.startsWith(prefix + "/");
}

export function evaluateSandboxPath(input: {
  path: unknown;
  allowlistRepos: readonly string[];
  protectedPaths?: readonly string[];
}): SandboxPathDecision {
  const canonical = normalizeCanonicalPath(input.path);
  if (!canonical.ok) {
    return { allowed: false, reason: canonical.reason };
  }
  const normalized = canonical.normalized;
  const protectedPaths = [
    ...DEFAULT_PROTECTED,
    ...(input.protectedPaths ?? []),
  ];
  for (const p of protectedPaths) {
    if (pathMatchesAllowlistPrefix(normalized, p)) {
      return { allowed: false, reason: "protected" };
    }
  }
  const allowed = input.allowlistRepos.some((prefix) =>
    pathMatchesAllowlistPrefix(normalized, prefix),
  );
  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
  return { allowed: true, normalized };
}

export function evaluateSandboxMutationGuards(input: {
  mutationRequested: boolean;
  arbitraryCommandRequested: boolean;
  gitWriteRequested: boolean;
  /** Observed values must be independent of expected — never copy expected into observed. */
  observedBranch?: string;
  expectedBranch?: string;
  observedHead?: string;
  expectedHead?: string;
}): SandboxPathDecision | { allowed: true } {
  if (input.arbitraryCommandRequested) {
    return { allowed: false, reason: "arbitrary_command" };
  }
  if (input.mutationRequested || input.gitWriteRequested) {
    return { allowed: false, reason: "git_write" };
  }
  if (input.expectedBranch !== undefined) {
    if (input.observedBranch === undefined || input.observedBranch === "") {
      return { allowed: false, reason: "observed_missing" };
    }
    if (input.observedBranch !== input.expectedBranch) {
      return { allowed: false, reason: "branch_mismatch" };
    }
  }
  if (input.expectedHead !== undefined) {
    if (input.observedHead === undefined || input.observedHead === "") {
      return { allowed: false, reason: "observed_missing" };
    }
    if (input.observedHead !== input.expectedHead) {
      return { allowed: false, reason: "head_mismatch" };
    }
  }
  return { allowed: true };
}
