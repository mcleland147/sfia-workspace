/**
 * SFIA Studio Better Auth + GitHub multi-user foundation constants.
 * Authentication proves identity; SFIA owns Studio admission and authority.
 */

export const SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS_ENV =
  "SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS" as const;

export const BETTER_AUTH_GITHUB_MULTI_USER_S1 =
  "BETTER_AUTH_GITHUB_MULTI_USER_S1" as const;

/** Canonical actor id prefix for GitHub-authenticated Pilotes. */
export const GITHUB_ACTOR_ID_PREFIX = "actor:github:" as const;

export const GITHUB_PROVIDER_ID = "github" as const;

/**
 * Session / cookie cache max age. S1 evidence TTL must never exceed this.
 * No stricter multi-user S1 TTL policy exists in Git for this path.
 */
export const SESSION_COOKIE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

/** Max S1 AuthorityEvidence lifetime on the Auth path (= session cookie bound). */
export const S1_MAX_TTL_SECONDS = SESSION_COOKIE_MAX_AGE_SECONDS;

/**
 * @deprecated Do not use — authenticated Pilote ≠ automatic N3.
 * Kept only so accidental imports fail review; S1 level requires
 * resolvePiloteS1AuthorityLevel() which is currently NOT PROVEN.
 */
export const S1_PILOTE_AUTHORITY_LEVEL_REMOVED =
  "PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN" as const;
