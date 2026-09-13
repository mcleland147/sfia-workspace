/**
 * Minimal shell-safe argument helpers for GCEC gateway instruction construction.
 * Fail closed on non-canonical GitHub repository refs and unsafe shell interpolation.
 */

const CANONICAL_GITHUB_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const REPO_METACHAR_RE = /[\s$`\\;&|<>(){}[\]"'!*?]|#/;

/**
 * POSIX embedded-apostrophe escape: end `'`, one literal `\'` outside quotes, reopen `'`.
 * Concatenation keeps ONE effective backslash (avoids template-literal escape miscounts).
 * Example: a'b → 'a'\''b'
 */
const POSIX_EMBEDDED_APOSTROPHE = "'" + "\\" + "'" + "'";

/**
 * Assert owner/repo canonical GitHub repositoryRef (no whitespace / metacharacters).
 */
export function assertCanonicalGithubRepositoryRef(
  ref: string,
): { ok: true; ref: string } | { ok: false; reason: string } {
  if (typeof ref !== "string" || !ref.trim()) {
    return { ok: false, reason: "repository_ref_missing" };
  }
  if (ref !== ref.trim()) {
    return { ok: false, reason: "repository_ref_whitespace" };
  }
  const trimmed = ref.trim();
  if (trimmed.startsWith("-")) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  if (
    REPO_METACHAR_RE.test(trimmed) ||
    trimmed.includes("..") ||
    trimmed.includes("$(") ||
    !CANONICAL_GITHUB_REPO_RE.test(trimmed)
  ) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  const parts = trimmed.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return { ok: false, reason: "repository_ref_unsafe" };
  }
  return { ok: true, ref: trimmed };
}

/**
 * POSIX single-quote wrap so the value is literal in a shell (including `$(...)`).
 * Escapes embedded `'` as `'\''` (one effective escape backslash).
 */
export function posixShellSingleQuote(value: string): string {
  return "'" + String(value).split("'").join(POSIX_EMBEDDED_APOSTROPHE) + "'";
}
