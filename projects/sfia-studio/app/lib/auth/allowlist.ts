/**
 * Server-owned multi-user GitHub allowlist.
 * Canonical key = immutable GitHub numeric user id (opaque string).
 * Never match login / email / displayName.
 */

import { SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV } from "./constants";

export type AllowedGithubUserIdsParseResult =
  | { ok: true; ids: readonly string[] }
  | {
      ok: false;
      code:
        | "ALLOWLIST_MISSING"
        | "ALLOWLIST_EMPTY"
        | "ALLOWLIST_MALFORMED";
      message: string;
    };

/** Positive decimal GitHub id — no signs, floats, exponents. */
const GITHUB_ID_RE = /^[1-9][0-9]*$/;

export function isCanonicalGithubUserId(value: unknown): value is string {
  return typeof value === "string" && GITHUB_ID_RE.test(value);
}

/**
 * Normalize a raw GitHub profile id (number or string) to canonical string.
 * Rejects non-integers / unsafe numbers.
 */
export function canonicalizeGithubUserId(
  raw: unknown,
): string | null {
  if (typeof raw === "number") {
    if (!Number.isInteger(raw) || raw <= 0 || !Number.isSafeInteger(raw)) {
      return null;
    }
    return String(raw);
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!isCanonicalGithubUserId(trimmed)) return null;
    return trimmed;
  }
  return null;
}

export function parseAllowedGithubUserIds(
  raw: string | undefined | null,
): AllowedGithubUserIdsParseResult {
  if (raw === undefined || raw === null) {
    return {
      ok: false,
      code: "ALLOWLIST_MISSING",
      message: `${SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV} is not configured (fail-closed).`,
    };
  }
  const trimmedWhole = raw.trim();
  if (trimmedWhole.length === 0) {
    return {
      ok: false,
      code: "ALLOWLIST_EMPTY",
      message: `${SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV} is empty (fail-closed).`,
    };
  }

  const parts = trimmedWhole.split(",");
  const seen = new Set<string>();
  const ids: string[] = [];

  for (const part of parts) {
    const candidate = part.trim();
    if (candidate.length === 0) {
      return {
        ok: false,
        code: "ALLOWLIST_MALFORMED",
        message: `${SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV} contains an empty member (fail-closed).`,
      };
    }
    if (!isCanonicalGithubUserId(candidate)) {
      return {
        ok: false,
        code: "ALLOWLIST_MALFORMED",
        message: `${SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV} contains a malformed GitHub user id (fail-closed).`,
      };
    }
    if (seen.has(candidate)) continue;
    seen.add(candidate);
    ids.push(candidate);
  }

  if (ids.length === 0) {
    return {
      ok: false,
      code: "ALLOWLIST_EMPTY",
      message: `${SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV} yielded no ids (fail-closed).`,
    };
  }

  return { ok: true, ids };
}

export function parseAllowedGithubUserIdsFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): AllowedGithubUserIdsParseResult {
  return parseAllowedGithubUserIds(
    env[SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV],
  );
}

export function isGithubUserAllowed(
  githubUserId: string,
  allowed: readonly string[],
): boolean {
  if (!isCanonicalGithubUserId(githubUserId)) return false;
  return allowed.includes(githubUserId);
}

/**
 * Hostile client claims (login/email/displayName/role) never authorize.
 * This helper exists so tests can assert the invariant explicitly.
 */
export function authorizeByGithubLoginOrEmail(value: unknown): false {
  void value;
  return false;
}
