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

/**
 * OA sandbox deny floor — Studio execution-run protected paths.
 * Exported read-only so Product local-write qualification can compose the same floor
 * without duplicating a second policy list in derive.
 */
export const SANDBOX_DEFAULT_PROTECTED_PATHS = [
  ".git/",
  ".env",
  "method/",
  "prompts/",
  ".github/",
  ".sfia/",
  "node_modules/",
] as const;

/**
 * MD-CP4-02 Option C — Morris-approved Studio governance protection set.
 * PREFIX: sfia-v3-framing/** ; EXACT: Build Doctrine / Roadmap / D-ER architecture / C1.
 * NOT a blanket deny of projects/sfia-studio/** or projects/sfia-studio/convergence/**.
 * Composition lives in this sandbox policy layer — not a second policy engine.
 */
export const STUDIO_GOVERNANCE_PROTECTED_PATHS = [
  "projects/sfia-studio/sfia-v3-framing/",
  "projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md",
  "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
  "projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md",
  "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
] as const;

/**
 * Effective Product write protection = sandbox floor ∪ Studio governance set.
 * Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` is intentionally NOT included.
 */
export const STUDIO_PRODUCT_PROTECTED_PATHS = [
  ...SANDBOX_DEFAULT_PROTECTED_PATHS,
  ...STUDIO_GOVERNANCE_PROTECTED_PATHS,
] as const;

/**
 * Classify a repository-relative path under Studio Product write protection.
 * Returns the matched protected entry, or null when ordinary (not protected).
 * Invalid / hostile paths return a synthetic "INVALID_PATH" hit (fail-closed).
 */
export function classifyStudioProductProtectedPath(
  repoRelativePath: unknown,
): string | null {
  const canonical = normalizeCanonicalPath(repoRelativePath);
  if (!canonical.ok) return "INVALID_PATH";
  const normalized = canonical.normalized;
  for (const prot of STUDIO_PRODUCT_PROTECTED_PATHS) {
    if (pathMatchesAllowlistPrefix(normalized, prot)) return prot;
  }
  return null;
}

/**
 * Studio Product write-path gate (protection only — no allowlist inventiveness).
 * Ordinary non-protected paths are allowed at this layer; mission scope / EC
 * still decide what may actually be written.
 */
export function evaluateStudioProductWritePath(input: {
  readonly path: unknown;
}):
  | { readonly allowed: true; readonly normalized: string }
  | {
      readonly allowed: false;
      readonly reason: Exclude<
        Extract<SandboxPathDecision, { allowed: false }>["reason"],
        "not_allowlisted" | "arbitrary_command" | "git_write" | "branch_mismatch" | "head_mismatch" | "observed_missing"
      >;
      readonly hit?: string;
    } {
  const canonical = normalizeCanonicalPath(input.path);
  if (!canonical.ok) {
    return { allowed: false, reason: canonical.reason };
  }
  const hit = classifyStudioProductProtectedPath(canonical.normalized);
  if (hit != null) {
    return { allowed: false, reason: "protected", hit };
  }
  return { allowed: true, normalized: canonical.normalized };
}

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
    ...SANDBOX_DEFAULT_PROTECTED_PATHS,
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
