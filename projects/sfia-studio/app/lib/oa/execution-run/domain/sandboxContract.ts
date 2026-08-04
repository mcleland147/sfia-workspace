/**
 * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
 * Deny-by-default. Does not claim the sandbox is secure.
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
        | "observed_missing";
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
  if (typeof input.path !== "string" || !input.path.trim()) {
    return { allowed: false, reason: "empty" };
  }
  const raw = input.path.trim().replace(/\\/g, "/");
  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
    return { allowed: false, reason: "absolute" };
  }
  const parts = raw.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return { allowed: false, reason: "traversal" };
  }
  const normalized = parts.filter((p) => p !== ".").join("/");
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
