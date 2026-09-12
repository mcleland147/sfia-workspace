/**
 * Server-derived GitPrCreateLaunchSpec (GCEC bounded PR create).
 * Fail closed on empty / unsafe refs / base mismatch / missing expectedHeadSha.
 */

import {
  assertCanonicalGithubRepositoryRef,
} from "./shellSafeArg";

export type GitPrCreateLaunchSpec = {
  readonly repositoryRef: string;
  readonly headBranch: string;
  readonly baseBranch: string;
  readonly title: string;
  readonly expectedHeadSha: string;
  readonly body?: string;
};

const BRANCH_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/;
const TITLE_FORBIDDEN_RE = /[\x00-\x1f\x7f$`\\;&|<>(){}[\]*?!\n\r]/;
const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

function assertSafeRef(
  raw: string,
  kind: "head" | "base",
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: `git_pr_create_${kind}_empty` };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: `git_pr_create_${kind}_whitespace` };
  }
  const ref = raw.trim();
  if (
    ref.includes("..") ||
    ref.startsWith("-") ||
    ref.includes(" ") ||
    BRANCH_FORBIDDEN_RE.test(ref)
  ) {
    return { ok: false, reason: `git_pr_create_${kind}_unsafe` };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(ref)) {
    return { ok: false, reason: `git_pr_create_${kind}_charset` };
  }
  return { ok: true, ref };
}

/**
 * Build PR-create launch spec from server-owned facts.
 * When `expectedBaseBranch` is provided, base MUST equal it.
 * `expectedHeadSha` is REQUIRED (full SHA) — client-claimed SHA override rejected.
 * Auto-merge / force fields on request are rejected when present.
 */
export function buildGitPrCreateLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly headBranch: string;
  readonly baseBranch: string;
  readonly title: string;
  readonly expectedHeadSha: string;
  readonly body?: string;
  readonly expectedBaseBranch?: string;
  /** Hostile — any truthy auto-merge channel is rejected. */
  readonly claimedAutoMerge?: unknown;
  /** Hostile — client-claimed head SHA must equal server expectedHeadSha when present. */
  readonly claimedHeadSha?: unknown;
}):
  | { ok: true; spec: GitPrCreateLaunchSpec }
  | { ok: false; reason: string } {
  if (input.claimedAutoMerge != null && input.claimedAutoMerge !== false) {
    return { ok: false, reason: "git_pr_create_auto_merge_rejected" };
  }
  const repo = assertCanonicalGithubRepositoryRef(input.repositoryRef);
  if (!repo.ok) {
    return {
      ok: false,
      reason:
        repo.reason === "repository_ref_missing"
          ? "git_pr_create_repository_ref_missing"
          : "git_pr_create_repository_ref_unsafe",
    };
  }
  if (
    typeof input.expectedHeadSha !== "string" ||
    !FULL_SHA_RE.test(input.expectedHeadSha.trim())
  ) {
    return { ok: false, reason: "git_pr_create_expected_head_sha_invalid" };
  }
  const expectedHeadSha = input.expectedHeadSha.trim().toLowerCase();
  if (
    input.claimedHeadSha != null &&
    String(input.claimedHeadSha).trim() &&
    String(input.claimedHeadSha).trim().toLowerCase() !== expectedHeadSha
  ) {
    return { ok: false, reason: "git_pr_create_claimed_head_sha_override_rejected" };
  }
  const head = assertSafeRef(input.headBranch, "head");
  if (!head.ok) return head;
  const base = assertSafeRef(input.baseBranch, "base");
  if (!base.ok) return base;
  if (head.ref === base.ref) {
    return { ok: false, reason: "git_pr_create_head_equals_base" };
  }
  if (
    input.expectedBaseBranch != null &&
    input.expectedBaseBranch.trim() &&
    input.expectedBaseBranch.trim() !== base.ref
  ) {
    return { ok: false, reason: "git_pr_create_base_mismatch" };
  }
  if (typeof input.title !== "string" || !input.title.trim()) {
    return { ok: false, reason: "git_pr_create_title_empty" };
  }
  if (input.title !== input.title.trim()) {
    return { ok: false, reason: "git_pr_create_title_whitespace" };
  }
  const title = input.title.trim();
  if (title.length > 200 || TITLE_FORBIDDEN_RE.test(title)) {
    return { ok: false, reason: "git_pr_create_title_unsafe" };
  }
  let body: string | undefined;
  if (input.body != null) {
    if (typeof input.body !== "string") {
      return { ok: false, reason: "git_pr_create_body_invalid" };
    }
    body = input.body.trim() || undefined;
    if (body && /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(body)) {
      return { ok: false, reason: "git_pr_create_body_unsafe" };
    }
  }
  return {
    ok: true,
    spec: {
      repositoryRef: repo.ref,
      headBranch: head.ref,
      baseBranch: base.ref,
      title,
      expectedHeadSha,
      ...(body ? { body } : {}),
    },
  };
}

/** AuthorizedEffects MUST be exactly one unique effect: github.pr.create. */
export function isBoundedGitPrCreateOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("github.pr.create");
}
