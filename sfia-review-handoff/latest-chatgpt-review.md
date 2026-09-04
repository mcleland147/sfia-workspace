# SFIA Review Pack — CYCLE 8 AUTH DETERMINISTIC CORRECTION
BETTER AUTH + GITHUB MULTI-USER FOUNDATION

## A. Metadata
- timestamp: 2026-09-04 19:41:56 +0200
- Cycle: 8 — Delivery / Auth deterministic correction
- Profile: Critical
- Typology: EVOL
- branch: delivery/sfia-studio-auth-better-auth-github-multi-user-foundation
- HEAD: ebdae92a96ea1c49444dfb668342c1453f57a540
- origin/main: ebdae92a96ea1c49444dfb668342c1453f57a540
- handoff source tip: 3ef977c194bf69a193886cb8751060734c5c89a9
- handoff blob: 943f62541534f1bd6d1b16782dc3efe5628316d2
- GO Morris consumed: GO MORRIS — AUTH DETERMINISTIC CORRECTION
  (+ prior Option A Revised + Cycle 8 Delivery GO)
- REVIEW HANDOFF PUBLICATION = NOT PERFORMED — NO MORRIS PUSH GO

## B. Convergence
- Capability: Auth foundation prerequisite for MW6 / V3-F07 / F11 / F12
- Milestone: AUTH DETERMINISTIC CORRECTION (post ChatGPT Delivery PARTIAL)
- Before: Delivery candidate with ChatGPT findings PARTIAL (binding/network/policy/S1/package)
- After: binding+network+S1 lifetime/collision+package closed; S1 N-level policy fail-closed
- Next: Morris decision on multi-user Pilote AuthorityEvidence level envelope
- Then: ChatGPT review of correction → AUTH REAL gate (separate) → MW6 binding (separate)
- Exit proof: STOP — MORRIS DECISION REQUIRED (policy)
- Debt: S1 issuance blocked until policy; AUTH REAL not started; MW6 unbound

## C. Sources (Git + package)
### Process
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (present in Git)

### Convergence / doctrine (read)
- sfia-studio-convergence-build-doctrine.md / roadmap.md
- product-completion/01-product-completion-cadrage.md
- sfia-v3-framing 02,03,07,08,34
- oa/decision domain types, invariants, AuthorityResolverPort, MemoryAuthorityResolver, localSingleUserAuthority

### Better Auth 1.7.2 package files read
- node_modules/better-auth/package.json → version 1.7.2
- dist/api/routes/account.mjs (accountInfo, resolveUserAccount, getValidAccessToken, matchesAccountSelection)
- dist/context/store-capabilities.mjs (shouldBindAccountCookieToSessionUser)
- dist/cookies/index.mjs + session-store.mjs (getAccountCookie / setAccountCookie)
- @better-auth/core dist/db/schema/account.d.mts (Account includes userId)
- @better-auth/core dist/social-providers/github.mjs (accountSubject: profile.id; getUserInfo → api.github.com/user)

### Contract excerpts (verified)
1. shouldBindAccountCookieToSessionUser = !!database → FALSE in no-DB mode
2. matchesAccountSelection skips userId check when shouldBind is false
3. accountInfo OpenAPI account shape: id, providerId, issuer, accountId ONLY (no userId)
4. accountInfo handler calls getValidAccessToken then provider.getUserInfo (NETWORK)
5. getAccountCookie typed return INCLUDES userId + accountId + providerId
6. GitHub accountSubject = profile.id

## D. Diagnostic — ChatGPT findings → after
| Finding | Before | After |
|---|---|---|
| STATELESS PROVIDER ID BINDING GAP | CONFIRMED — accountInfo path; no session bind in no-DB; mocks invented userId on public shape | CLOSED — getAccountCookie + SFIA enforce account.userId===session.user.id; AUTH-BIND-02 deny |
| Hot-path GitHub network | CONFIRMED — accountInfo→getUserInfo | CLOSED — no accountInfo on resolve path; fetch sentinel AUTH-BIND-11 |
| PILOTE AUTHORITY POLICY GAP | CONFIRMED — hardcoded N3 from localSingleUserAuthority pattern | REMAINING / FAIL-CLOSED — resolvePiloteS1AuthorityLevel → PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN; issueS1 refuses |
| S1 lifetime/collision | NOT PROVEN | CLOSED — validateS1EvidenceLifetime; registerS1EvidenceImmutable fail-closed |
| package/lock clean install | INCOMPLETE | CLOSED — npm ci --legacy-peer-deps; better-auth@1.7.2 exact; @testing-library/dom@10.4.1 |

## E. Git Truth
- Auth worktree Truth Check at start: PASS (branch/HEAD/main/handoff)
- Mid-cycle anomaly: Auth worktree HEAD briefly pointed at MW6 branch name; MW6 became detached; MW6 index became staged. Cause not initiated by explicit checkout in correction commands; recovered by same-commit branch reclaim + `git restore --staged` on MW6 only. Content fingerprint unchanged. Product files not rewritten.
- Final Auth branch: delivery/sfia-studio-auth-better-auth-github-multi-user-foundation @ ebdae92a
- Final MW6 branch: delivery/sfia-studio-nora-mw6-external-source-intelligence @ ebdae92a; dirty set restored to M/?? shape; STAGED=0
- Product commit: 0

### git status --short (Auth)
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/Topbar.tsx
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? projects/sfia-studio/app/.env.example
?? projects/sfia-studio/app/__tests__/auth/
?? projects/sfia-studio/app/app/api/auth/
?? projects/sfia-studio/app/app/login/
?? projects/sfia-studio/app/components/auth/
?? projects/sfia-studio/app/lib/auth/
?? projects/sfia-studio/app/middleware.ts

```

### git diff --stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 1874 +++++++++++++++++---
 .../app/components/shell/StudioShell.tsx           |    3 +
 .../sfia-studio/app/components/shell/Topbar.tsx    |   10 +
 projects/sfia-studio/app/package-lock.json         |  367 +++-
 projects/sfia-studio/app/package.json              |    2 +
 5 files changed, 1984 insertions(+), 272 deletions(-)

```

## F. Better Auth contract proof
See section C. Conclusion:
- Durable GitHub id = account.accountId (= profile.id)
- session.user.id ≠ GitHub id
- Public accountInfo MUST NOT be used for SFIA binding (missing userId + network)
- Cookie account_data IS the supported encrypted store containing userId for SFIA bind
- SFIA binding enforcement is required because BA disables bind without DB

## G. Modifications — full file contents (created/core corrected)


### FILE: projects/sfia-studio/app/lib/auth/providerAccountBinding.ts
```typescript
/**
 * Recover the GitHub provider subject from Better Auth's encrypted account_data
 * cookie and bind it to the CURRENT verified session user.
 *
 * Why not auth.api.accountInfo({ useAccountCookie: true })?
 * better-auth@1.7.2 accountInfo ALWAYS calls getValidAccessToken + provider.getUserInfo
 * (GitHub network). Public accountInfo.account shape is ONLY
 * { id, providerId, issuer, accountId } — no userId.
 *
 * In no-database mode, shouldBindAccountCookieToSessionUser() === false, so
 * Better Auth itself does NOT enforce account.userId === session.user.id.
 * SFIA therefore enforces that bind fail-closed when reading the cookie payload
 * (which DOES include userId per getAccountCookie's typed return).
 */

import { getAccountCookie, getCookies } from "better-auth/cookies";
import { canonicalizeGithubUserId } from "./allowlist";
import type { SfiaAuth } from "./auth";
import { GITHUB_PROVIDER_ID } from "./constants";

/** Minimal context shape accepted by better-auth getAccountCookie. */
type AccountCookieEndpointContext = {
  headers: Headers;
  context: Awaited<SfiaAuth["$context"]>;
  getCookie: (name: string) => string | undefined;
};

export type BoundGithubProviderAccount = {
  /** Better Auth internal user id (session.user.id) — NOT the GitHub id. */
  betterAuthUserId: string;
  /** Canonical GitHub numeric id string (= account.accountId for GitHub). */
  githubUserId: string;
  providerId: typeof GITHUB_PROVIDER_ID;
  /** Better Auth account row id (internal). */
  accountRowId: string;
  issuer: string;
};

export type ReadBoundGithubAccountResult =
  | { ok: true; account: BoundGithubProviderAccount }
  | {
      ok: false;
      code:
        | "PROVIDER_ACCOUNT_MISSING"
        | "ACCOUNT_USER_ID_MISSING"
        | "SESSION_USER_MISMATCH"
        | "PROVIDER_NOT_GITHUB"
        | "GITHUB_ID_INVALID";
      message: string;
    };

function cookieValueFromHeader(
  headers: Headers,
  cookieName: string,
): string | undefined {
  const raw = headers.get("cookie");
  if (!raw) return undefined;
  for (const part of raw.split(";")) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const name = trimmed.slice(0, eq);
    if (name === cookieName || name.startsWith(`${cookieName}.`)) {
      return trimmed.slice(eq + 1);
    }
  }
  return undefined;
}

/**
 * Build the minimal Better Auth endpoint context required by getAccountCookie.
 * No provider network; decrypts the existing httpOnly account_data cookie only.
 */
async function buildAccountCookieContext(
  auth: SfiaAuth,
  headers: Headers,
): Promise<AccountCookieEndpointContext> {
  const authContext = await auth.$context;
  // Ensure cookie name helpers stay aligned with configured auth options.
  void getCookies(auth.options);
  return {
    headers,
    context: authContext,
    getCookie: (name: string) => cookieValueFromHeader(headers, name),
  };
}

/**
 * Read Better Auth account_data and require session.user.id === account.userId.
 */
export async function readSessionBoundGithubProviderAccount(input: {
  auth: SfiaAuth;
  headers: Headers;
  sessionUserId: string;
}): Promise<ReadBoundGithubAccountResult> {
  const sessionUserId = input.sessionUserId?.trim();
  if (!sessionUserId) {
    return {
      ok: false,
      code: "SESSION_USER_MISMATCH",
      message: "Session user id is required for provider binding.",
    };
  }

  let rawAccount: Awaited<ReturnType<typeof getAccountCookie>> = null;
  try {
    const endpointCtx = await buildAccountCookieContext(
      input.auth,
      input.headers,
    );
    // better-auth types GenericEndpointContext; runtime only needs headers+context.
    rawAccount = await getAccountCookie(
      endpointCtx as Parameters<typeof getAccountCookie>[0],
    );
  } catch {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message: "GitHub provider account cookie is missing or unreadable.",
    };
  }

  if (!rawAccount) {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message: "GitHub provider account cookie is missing or unreadable.",
    };
  }

  const accountUserId =
    typeof rawAccount.userId === "string" ? rawAccount.userId.trim() : "";
  if (!accountUserId) {
    return {
      ok: false,
      code: "ACCOUNT_USER_ID_MISSING",
      message:
        "Account cookie lacks userId — cannot bind provider subject to session.",
    };
  }

  if (accountUserId !== sessionUserId) {
    return {
      ok: false,
      code: "SESSION_USER_MISMATCH",
      message:
        "Provider account cookie userId does not match the current session user.",
    };
  }

  if (rawAccount.providerId !== GITHUB_PROVIDER_ID) {
    return {
      ok: false,
      code: "PROVIDER_NOT_GITHUB",
      message: "Provider account is not GitHub.",
    };
  }

  const githubUserId = canonicalizeGithubUserId(rawAccount.accountId);
  if (!githubUserId) {
    return {
      ok: false,
      code: "GITHUB_ID_INVALID",
      message: "Provider accountId is not a canonical GitHub user id.",
    };
  }

  return {
    ok: true,
    account: {
      betterAuthUserId: accountUserId,
      githubUserId,
      providerId: GITHUB_PROVIDER_ID,
      accountRowId: String(rawAccount.id),
      issuer: String(rawAccount.issuer ?? ""),
    },
  };
}

```


### FILE: projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
```typescript
/**
 * Server-owned policy gate for S1 AuthorityEvidence level (N1/N2/N3).
 *
 * Authentication + allowlist prove identity / Studio admission only.
 * They do NOT select an AuthorityEvidence level.
 *
 * Git / doctrine findings for this correction cycle:
 * - Framing 34 maps N1–N3 to *action effect / confirmation* classes, not to
 *   “authenticated Pilote ⇒ N3 envelope”.
 * - localSingleUserAuthority issues N3 with canActAsMorris=true under
 *   LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT — FREEZE for multi-user
 *   Auth/REAL; not reusable as multi-user policy (and would violate
 *   canActAsMorris=false on the Auth path).
 * - No other server-owned multi-user Pilote authority envelope is present in
 *   the current Auth-scoped product code.
 *
 * Therefore S1 level issuance is fail-closed until Morris decides an explicit
 * multi-user policy.
 */

import type { AuthorityLevel } from "@/lib/oa/decision";

export const PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN =
  "PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN" as const;

export type PiloteS1AuthorityPolicyResult =
  | {
      ok: true;
      level: AuthorityLevel;
      policyId: string;
      rationale: string;
    }
  | {
      ok: false;
      code: typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN;
      message: string;
    };

/**
 * Resolve the SFIA server-owned AuthorityEvidence level for an authenticated
 * multi-user GitHub Pilote. Currently NOT PROVEN → fail-closed.
 */
export function resolvePiloteS1AuthorityLevel(): PiloteS1AuthorityPolicyResult {
  return {
    ok: false,
    code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
    message:
      "No Git-proven multi-user Pilote AuthorityEvidence level policy exists. " +
      "Authenticated allowlisted GitHub identity must not imply N1/N2/N3. " +
      "localSingleUserAuthority is FREEZE FOR REAL and is not an Auth-path policy source.",
  };
}

```


### FILE: projects/sfia-studio/app/lib/auth/s1Authority.ts
```typescript
/**
 * S1 AuthorityEvidence re-issuance for authenticated GitHub Pilotes.
 * Reuses existing AuthorityResolverPort — no second resolver, no AE DB.
 *
 * Fail-closed rules:
 * - level only from resolvePiloteS1AuthorityLevel() (currently NOT PROVEN)
 * - canActAsMorris = false ALWAYS
 * - scope / issuedAt / expiresAt required and validated
 * - TTL must not exceed SESSION_COOKIE_MAX_AGE_SECONDS
 * - evidenceId collision → FAIL (immutable registry; no silent skip)
 */

import { randomUUID } from "node:crypto";
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
} from "@/lib/oa/decision";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  S1_MAX_TTL_SECONDS,
  SESSION_COOKIE_MAX_AGE_SECONDS,
} from "./constants";
import {
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityLevel,
} from "./piloteS1AuthorityPolicy";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  scope: string;
  issuedAt: string;
  /** Required ISO expiry — must be > issuedAt and within max TTL. */
  expiresAt: string;
  evidenceId?: string;
};

export type IssueS1AuthorityEvidenceResult =
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME"
        | "EVIDENCE_ID_COLLISION"
        | "REGISTER_FAILED"
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN;
      message: string;
    };

function parseIsoMs(value: string): number | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/**
 * Lifetime validation for Auth-path S1 evidence (pure; no registry).
 * Max TTL = SESSION_COOKIE_MAX_AGE_SECONDS (no stricter Git policy found).
 */
export function validateS1EvidenceLifetime(input: {
  issuedAt: string;
  expiresAt: string;
  maxTtlSeconds?: number;
}):
  | { ok: true; issuedAtMs: number; expiresAtMs: number; ttlSeconds: number }
  | {
      ok: false;
      code: "INVALID_ISSUED_AT" | "INVALID_EXPIRES_AT" | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const maxTtl = input.maxTtlSeconds ?? S1_MAX_TTL_SECONDS;
  if (maxTtl > SESSION_COOKIE_MAX_AGE_SECONDS) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "Configured max TTL exceeds session cookie max age.",
    };
  }

  const issuedAtMs = parseIsoMs(input.issuedAt);
  if (issuedAtMs === null) {
    return {
      ok: false,
      code: "INVALID_ISSUED_AT",
      message: "issuedAt must be a parseable ISO timestamp.",
    };
  }

  const expiresAtMs = parseIsoMs(input.expiresAt);
  if (expiresAtMs === null) {
    return {
      ok: false,
      code: "INVALID_EXPIRES_AT",
      message: "expiresAt is required and must be a parseable ISO timestamp.",
    };
  }

  if (expiresAtMs <= issuedAtMs) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "expiresAt must be strictly greater than issuedAt.",
    };
  }

  const ttlSeconds = (expiresAtMs - issuedAtMs) / 1000;
  if (ttlSeconds > maxTtl) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: `S1 TTL exceeds max allowed (${maxTtl}s / session cookie bound).`,
    };
  }

  return { ok: true, issuedAtMs, expiresAtMs, ttlSeconds };
}

/**
 * Register S1 evidence immutably. Collision of evidenceId → FAIL-CLOSED.
 * Does not invent idempotent “same payload succeeds” semantics.
 */
export function registerS1EvidenceImmutable(
  authorityResolver: AuthorityResolverPort,
  evidence: AuthorityEvidence,
):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code: "EVIDENCE_ID_COLLISION" | "REGISTER_FAILED";
      message: string;
    } {
  try {
    const existing = authorityResolver.getEvidence(evidence.evidenceId);
    if (existing) {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    authorityResolver.register(evidence);
    const stored = authorityResolver.getEvidence(evidence.evidenceId);
    if (!stored) {
      return {
        ok: false,
        code: "REGISTER_FAILED",
        message: "Evidence register did not persist the record.",
      };
    }
    return { ok: true, evidence: stored };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register S1 evidence.";
    if (message === "evidence_immutable") {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    return { ok: false, code: "REGISTER_FAILED", message };
  }
}

/**
 * Build a validated S1 evidence object when a server policy has proven a level.
 * Used by issueS1AuthorityEvidence and by deterministic tests of lifetime/collision
 * without inventing a production Pilote N-level policy.
 */
export function buildValidatedS1Evidence(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  scope: string;
  issuedAt: string;
  expiresAt: string;
  level: AuthorityLevel;
  evidenceId?: string;
}):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const scope = input.scope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence scope is required.",
    };
  }

  const lifetime = validateS1EvidenceLifetime({
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
  });
  if (!lifetime.ok) return lifetime;

  const evidenceId =
    input.evidenceId ??
    `evd:github-s1:${input.pilote.githubUserId}:${randomUUID()}`;

  return {
    ok: true,
    evidence: {
      evidenceId,
      actorId: input.pilote.actor.actorId,
      level: input.level,
      scope,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
      canActAsMorris: false,
    },
  };
}

export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  const policy = resolvePiloteS1AuthorityLevel();
  if (!policy.ok) {
    return {
      ok: false,
      code: policy.code,
      message: policy.message,
    };
  }

  const built = buildValidatedS1Evidence({
    pilote: input.pilote,
    scope: input.scope,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    level: policy.level,
    evidenceId: input.evidenceId,
  });
  if (!built.ok) return built;

  return registerS1EvidenceImmutable(input.authorityResolver, built.evidence);
}

```


### FILE: projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts
```typescript
/**
 * Resolve the current authenticated Pilote from:
 *   Better Auth session (verified)
 * ∩ encrypted account_data cookie bound by account.userId === session.user.id
 * ∩ CURRENT server allowlist
 *
 * session.user.id is NEVER treated as the GitHub id.
 * auth.api.accountInfo is NOT used on this hot path (would call GitHub getUserInfo).
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import {
  isGithubUserAllowed,
  parseAllowedGithubUserIdsFromEnv,
  type AllowedGithubUserIdsParseResult,
} from "./allowlist";
import { mapGithubIdentityToPiloteActor } from "./actorMapping";
import { getSfiaAuth, type SfiaAuth } from "./auth";
import {
  readSessionBoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";

export type ResolveCurrentPiloteResult =
  | {
      ok: true;
      githubUserId: string;
      betterAuthUserId: string;
      actor: ActorReference;
    }
  | {
      ok: false;
      code:
        | "NO_SESSION"
        | "PROVIDER_ACCOUNT_MISSING"
        | "ACCOUNT_USER_ID_MISSING"
        | "PROVIDER_NOT_GITHUB"
        | "GITHUB_ID_INVALID"
        | "ALLOWLIST_DENIED"
        | "ALLOWLIST_CONFIG_ERROR"
        | "SESSION_USER_MISMATCH";
      message: string;
      allowlist?: AllowedGithubUserIdsParseResult;
    };

export type ResolveCurrentPiloteInput = {
  headers: Headers;
  auth?: SfiaAuth;
  env?: NodeJS.ProcessEnv;
  /**
   * Hostile injection — IGNORED. Client cannot select GitHub id.
   */
  claimedGithubUserId?: unknown;
  claimedRole?: unknown;
  claimedCanActAsMorris?: unknown;
  /**
   * TEST-ONLY dependency injection. Production uses cookie binding.
   * Must still return the real binding contract (userId-bound account).
   */
  readBoundGithubAccount?: (input: {
    auth: SfiaAuth;
    headers: Headers;
    sessionUserId: string;
  }) => Promise<ReadBoundGithubAccountResult>;
};

export async function resolveCurrentAuthenticatedPilote(
  input: ResolveCurrentPiloteInput,
): Promise<ResolveCurrentPiloteResult> {
  // Hostile client fields are deliberately ignored.
  void input.claimedGithubUserId;
  void input.claimedRole;
  void input.claimedCanActAsMorris;

  const auth = input.auth ?? getSfiaAuth();
  const env = input.env ?? process.env;

  const session = await auth.api.getSession({ headers: input.headers });
  if (!session?.user?.id || !session.session) {
    return {
      ok: false,
      code: "NO_SESSION",
      message: "No valid Better Auth session.",
    };
  }

  const readBound =
    input.readBoundGithubAccount ?? readSessionBoundGithubProviderAccount;
  const bound = await readBound({
    auth,
    headers: input.headers,
    sessionUserId: session.user.id,
  });

  if (!bound.ok) {
    return {
      ok: false,
      code: bound.code,
      message: bound.message,
    };
  }

  const allowlist = parseAllowedGithubUserIdsFromEnv(env);
  if (!allowlist.ok) {
    return {
      ok: false,
      code: "ALLOWLIST_CONFIG_ERROR",
      message: "SFIA allowlist configuration is fail-closed.",
      allowlist,
    };
  }

  if (!isGithubUserAllowed(bound.account.githubUserId, allowlist.ids)) {
    return {
      ok: false,
      code: "ALLOWLIST_DENIED",
      message: "GitHub identity is not in the current SFIA allowlist.",
      allowlist,
    };
  }

  const actor = mapGithubIdentityToPiloteActor({
    githubUserId: bound.account.githubUserId,
    displayName: session.user.name ?? null,
  });

  return {
    ok: true,
    githubUserId: bound.account.githubUserId,
    betterAuthUserId: session.user.id,
    actor,
  };
}

export async function requireCurrentPilote(
  input: ResolveCurrentPiloteInput,
): Promise<Extract<ResolveCurrentPiloteResult, { ok: true }>> {
  const result = await resolveCurrentAuthenticatedPilote(input);
  if (!result.ok) {
    throw new Error(`PILOTE_REQUIRED:${result.code}`);
  }
  return result;
}

```


### FILE: projects/sfia-studio/app/lib/auth/constants.ts
```typescript
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

```


### FILE: projects/sfia-studio/app/lib/auth/index.ts
```typescript
/**
 * SFIA Studio authentication / identity foundation (Better Auth + GitHub).
 */

export * from "./constants";
export * from "./allowlist";
export * from "./actorMapping";
export {
  createSfiaAuth,
  getSfiaAuth,
  resetSfiaAuthSingletonForTests,
  assertStatelessAuthConfig,
  type CreateSfiaAuthOptions,
  type SfiaAuth,
} from "./auth";
export {
  resolveCurrentAuthenticatedPilote,
  requireCurrentPilote,
  type ResolveCurrentPiloteInput,
  type ResolveCurrentPiloteResult,
} from "./resolveCurrentPilote";
export {
  readSessionBoundGithubProviderAccount,
  type BoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";
export {
  resolvePiloteS1AuthorityLevel,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  type PiloteS1AuthorityPolicyResult,
} from "./piloteS1AuthorityPolicy";
export {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
  registerS1EvidenceImmutable,
  buildValidatedS1Evidence,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";

```


### FILE: projects/sfia-studio/app/lib/auth/auth.ts
```typescript
/**
 * Better Auth configuration — STATELESS ONLY (no database / adapter).
 *
 * Provider subject binding (proven from better-auth@1.7.2):
 * - session.user.id = Better Auth internal user id (NOT GitHub id)
 * - GitHub profile.id → account.accountId via accountSubject
 * - storeAccountCookie (default when no DB) keeps account in encrypted
 *   account_data cookie (payload includes userId + accountId + tokens)
 * - Protected-path recovery uses getAccountCookie + SFIA-enforced
 *   account.userId === session.user.id (BA shouldBind is false without DB)
 * - Do NOT use auth.api.accountInfo on the hot path: it calls getUserInfo (network)
 *   and its public account shape omits userId.
 */

import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import {
  canonicalizeGithubUserId,
  isGithubUserAllowed,
  parseAllowedGithubUserIdsFromEnv,
} from "./allowlist";
import {
  GITHUB_PROVIDER_ID,
  SESSION_COOKIE_MAX_AGE_SECONDS,
} from "./constants";

function requireEnv(name: string, env: NodeJS.ProcessEnv): string {
  const value = env[name];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${name} is required (fail-closed).`);
  }
  return value.trim();
}

export type CreateSfiaAuthOptions = {
  env?: NodeJS.ProcessEnv;
  /** Override base URL (tests). Default BETTER_AUTH_URL or http://localhost:3020 */
  baseURL?: string;
};

/**
 * Build the Studio Better Auth instance.
 * Callers must supply secrets via env (or test overrides in env).
 */
export function createSfiaAuth(options: CreateSfiaAuthOptions = {}) {
  const env = options.env ?? process.env;
  const secret = requireEnv("BETTER_AUTH_SECRET", env);
  const baseURL =
    options.baseURL ??
    (typeof env.BETTER_AUTH_URL === "string" && env.BETTER_AUTH_URL.trim()
      ? env.BETTER_AUTH_URL.trim()
      : "http://localhost:3020");
  const githubClientId = requireEnv("GITHUB_CLIENT_ID", env);
  const githubClientSecret = requireEnv("GITHUB_CLIENT_SECRET", env);

  return betterAuth({
    baseURL,
    secret,
    // Explicit: no database → Better Auth enables storeAccountCookie by default.
    // We still set account/session options so reviewers can see the contract.
    session: {
      expiresIn: SESSION_COOKIE_MAX_AGE_SECONDS,
      cookieCache: {
        enabled: true,
        maxAge: SESSION_COOKIE_MAX_AGE_SECONDS,
        strategy: "jwe",
        refreshCache: true,
      },
    },
    account: {
      storeStateStrategy: "cookie",
      storeAccountCookie: true,
    },
    socialProviders: {
      github: {
        clientId: githubClientId,
        clientSecret: githubClientSecret,
        // Better Auth GitHub docs require user:email for provider plumbing.
        // Email is NEVER the SFIA durable identity key.
      },
    },
    user: {
      validateUserInfo: async (data) => {
        const source = data.source;
        if (source.method !== "oauth") {
          return {
            error: "provider_not_allowed",
            errorDescription: "Only GitHub OAuth is permitted.",
          };
        }
        if (source.oauth?.providerId !== GITHUB_PROVIDER_ID) {
          return {
            error: "provider_not_allowed",
            errorDescription: "Only GitHub OAuth is permitted.",
          };
        }
        const rawId = source.oauth.profile?.id;
        const githubUserId = canonicalizeGithubUserId(rawId);
        if (!githubUserId) {
          return {
            error: "github_id_unparseable",
            errorDescription: "GitHub provider profile id is missing or invalid.",
          };
        }
        const allowlist = parseAllowedGithubUserIdsFromEnv(env);
        if (!allowlist.ok) {
          return {
            error: allowlist.code.toLowerCase(),
            errorDescription: "SFIA Studio allowlist is not usable (fail-closed).",
          };
        }
        if (!isGithubUserAllowed(githubUserId, allowlist.ids)) {
          return {
            error: "github_user_not_allowlisted",
            errorDescription: "Authenticated GitHub identity is not authorized for Studio.",
          };
        }
        return;
      },
    },
    plugins: [nextCookies()],
  });
}

export type SfiaAuth = ReturnType<typeof createSfiaAuth>;

/** Lazy singleton for the Next.js app (env from process). */
let _auth: SfiaAuth | null = null;

export function getSfiaAuth(): SfiaAuth {
  if (!_auth) {
    _auth = createSfiaAuth();
  }
  return _auth;
}

/** Test-only: reset singleton between tests. */
export function resetSfiaAuthSingletonForTests(): void {
  _auth = null;
}

/**
 * Structural proof helpers for tests / review — no DB adapter present.
 */
export function assertStatelessAuthConfig(auth: SfiaAuth): {
  hasDatabase: boolean;
  socialProviders: string[];
} {
  const options = auth.options as {
    database?: unknown;
    socialProviders?: Record<string, unknown>;
    account?: { storeAccountCookie?: boolean };
  };
  const hasDatabase = options.database !== undefined && options.database !== null;
  const socialProviders = Object.keys(options.socialProviders ?? {});
  return { hasDatabase, socialProviders };
}

```


### FILE: projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts
```typescript
/**
 * AUTH-BIND / AUTH-S1 / AUTH-POLICY — adversarial deterministic correction suite.
 * ZERO real GitHub OAuth / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { readSessionBoundGithubProviderAccount } from "@/lib/auth/providerAccountBinding";
import {
  buildValidatedS1Evidence,
  issueS1AuthorityEvidence,
  registerS1EvidenceImmutable,
  validateS1EvidenceLifetime,
} from "@/lib/auth/s1Authority";
import {
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityLevel,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { SESSION_COOKIE_MAX_AGE_SECONDS } from "@/lib/auth/constants";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

function installNetworkSentinel() {
  const hits: string[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    hits.push(url);
    throw new Error(`NETWORK_SENTINEL_BLOCKED:${url}`);
  }) as typeof fetch;
  return {
    hits,
    restore: () => {
      globalThis.fetch = originalFetch;
    },
  };
}

describe("AUTH-BIND session↔provider (better-auth@1.7.2 account_data)", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("AUTH-BIND-01 A session + A provider subject → PASS", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const sentinel = installNetworkSentinel();
    try {
      vi.spyOn(auth.api, "getSession").mockResolvedValue({
        user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
        session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
      } as never);

      const r = await resolveCurrentAuthenticatedPilote({
        auth,
        headers,
        env: TEST_ENV,
      });
      expect(r.ok).toBe(true);
      if (r.ok) {
        expect(r.githubUserId).toBe("11111111");
        expect(r.betterAuthUserId).toBe("ba-user-a");
        expect(r.betterAuthUserId).not.toBe(r.githubUserId);
      }
      expect(sentinel.hits.filter((u) => u.includes("api.github.com"))).toEqual(
        [],
      );
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-02 B session + A provider/account state → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-b", name: "B", email: "b@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-b", userId: "ba-user-b", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("AUTH-BIND-03 session valid + provider state missing → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers: new Headers(),
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("AUTH-BIND-04 provider != GitHub → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      providerId: "google",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_NOT_GITHUB");
  });

  it("AUTH-BIND-05 GitHub accountId malformed → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "not-a-github-id",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GITHUB_ID_INVALID");
  });

  it("AUTH-BIND-06/07/08 hostile claims ignored", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.githubUserId).toBe("11111111");
      expect(r.actor.role).toBe("decision_maker");
    }
  });

  it("AUTH-BIND-09 allowlist removal after session → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const removed = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");
  });

  it("AUTH-BIND-10 two allowlisted users → distinct actor IDs", () => {
    const a = mapGithubIdentityToPiloteActor({ githubUserId: "11111111" });
    const b = mapGithubIdentityToPiloteActor({ githubUserId: "22222222" });
    expect(a.actorId).not.toBe(b.actorId);
  });

  it("AUTH-BIND-11 protected identity resolution → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);
    const spyAccountInfo = vi.spyOn(auth.api, "accountInfo");
    const sentinel = installNetworkSentinel();
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(spyAccountInfo).not.toHaveBeenCalled();
      expect(sentinel.hits).toEqual([]);
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-12 cookie payload includes userId; public accountInfo shape does not invent binding", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const bound = await readSessionBoundGithubProviderAccount({
      auth,
      headers,
      sessionUserId: "ba-user-a",
    });
    expect(bound.ok).toBe(true);
    if (bound.ok) {
      expect(bound.account.betterAuthUserId).toBe("ba-user-a");
      expect(bound.account.githubUserId).toBe("11111111");
    }

    // Missing userId in cookie → deny (cannot bind)
    const headersNoUser = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      omitUserId: true,
    });
    const missing = await readSessionBoundGithubProviderAccount({
      auth,
      headers: headersNoUser,
      sessionUserId: "ba-user-a",
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("ACCOUNT_USER_ID_MISSING");
  });
});

describe("AUTH-POLICY S1 level", () => {
  it("AUTH-POLICY-01 authenticated Pilote does not imply N3 — policy NOT PROVEN", () => {
    const policy = resolvePiloteS1AuthorityLevel();
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("AUTH-S1-01 issueS1 fails closed without proven policy (no N3 auto-grant)", () => {
    const resolver = new MemoryAuthorityResolver();
    const issued = issueS1AuthorityEvidence({
      pilote: {
        ok: true,
        githubUserId: "11111111",
        betterAuthUserId: "ba-user-a",
        actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
      },
      authorityResolver: resolver,
      scope: "project:demo",
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "2026-09-04T13:00:00.000Z",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
    expect(resolver.getEvidence("anything")).toBeNull();
  });
});

describe("AUTH-S1 lifetime + collision integrity", () => {
  const pilote = {
    ok: true as const,
    githubUserId: "11111111",
    betterAuthUserId: "ba-user-a",
    actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
  };

  it("AUTH-S1-02 missing/empty expiresAt → FAIL", () => {
    expect(
      validateS1EvidenceLifetime({
        issuedAt: "2026-09-04T12:00:00.000Z",
        expiresAt: "",
      }).ok,
    ).toBe(false);
  });

  it("AUTH-S1-03 invalid issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "not-a-date",
      expiresAt: "2026-09-04T13:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_ISSUED_AT");
  });

  it("AUTH-S1-04 invalid expiresAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "nope",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EXPIRES_AT");
  });

  it("AUTH-S1-05 expiresAt <= issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "2026-09-04T12:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-06 TTL over session max → FAIL", () => {
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const overMs =
      Date.parse(issuedAt) + (SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000;
    const r = validateS1EvidenceLifetime({
      issuedAt,
      expiresAt: new Date(overMs).toISOString(),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-07 evidence expired → resolver refuses", () => {
    const resolver = new MemoryAuthorityResolver();
    const built = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      level: "N1",
      evidenceId: "evd:expired-test",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    registerS1EvidenceImmutable(resolver, built.evidence);
    const v = resolver.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N1",
      scope: "project:demo",
      evidenceId: "evd:expired-test",
    });
    expect(v.ok).toBe(false);
    expect(v.reason).toBe("expired");
  });

  it("AUTH-S1-08/09 duplicate evidenceId → FAIL-CLOSED; registry unchanged", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const first = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      level: "N1",
      evidenceId: "evd:collision",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(registerS1EvidenceImmutable(resolver, first.evidence).ok).toBe(true);

    const escalate = {
      ...first.evidence,
      canActAsMorris: true,
      level: "N3" as const,
      actorId: "actor:github:22222222",
      scope: "project:other",
    };
    const second = registerS1EvidenceImmutable(resolver, escalate);
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");

    const stored = resolver.getEvidence("evd:collision");
    expect(stored?.canActAsMorris).toBe(false);
    expect(stored?.level).toBe("N1");
    expect(stored?.actorId).toBe(pilote.actor.actorId);
    expect(stored?.scope).toBe("project:demo");
  });

  it("AUTH-S1-10/11/12/13 actor/scope/morris/canActAsMorris invariants", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const built = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      level: "N2",
      evidenceId: "evd:verify",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.canActAsMorris).toBe(false);
    registerS1EvidenceImmutable(resolver, built.evidence);

    expect(
      resolver.verify({
        actorId: "actor:github:22222222",
        requiredLevel: "N2",
        scope: "project:demo",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("actor_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "project:other",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("scope_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "project:demo",
        evidenceId: "evd:verify",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

```


### FILE: projects/sfia-studio/app/__tests__/auth/helpers/accountCookie.ts
```typescript
/**
 * TEST-ONLY helpers — build real better-auth@1.7.2 account_data cookies.
 * Shape matches getAccountCookie return (includes userId). Never invents
 * accountInfo public fields as the binding source.
 */

import { getCookies } from "better-auth/cookies";
import { symmetricEncodeJWT } from "better-auth/crypto";
import type { SfiaAuth } from "@/lib/auth/auth";

export type FakeAccountCookieInput = {
  auth: SfiaAuth;
  userId: string;
  accountId: string;
  providerId?: string;
  accountRowId?: string;
  issuer?: string;
  /** Omit userId from payload to simulate malformed cookie. */
  omitUserId?: boolean;
};

export async function encodeAccountDataCookieValue(
  input: FakeAccountCookieInput,
): Promise<string> {
  const ctx = await input.auth.$context;
  const payload: Record<string, unknown> = {
    id: input.accountRowId ?? `acc-${input.accountId}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    providerId: input.providerId ?? "github",
    issuer: input.issuer ?? "local:oauth:github",
    accountId: input.accountId,
  };
  if (!input.omitUserId) {
    payload.userId = input.userId;
  }
  return symmetricEncodeJWT(
    payload,
    ctx.secretConfig,
    "better-auth-account",
    60 * 60,
  );
}

export async function headersWithAccountCookie(
  input: FakeAccountCookieInput,
  extraHeaders?: HeadersInit,
): Promise<Headers> {
  const names = getCookies(input.auth.options);
  const token = await encodeAccountDataCookieValue(input);
  const headers = new Headers(extraHeaders);
  const existing = headers.get("cookie");
  const accountCookie = `${names.accountData.name}=${token}`;
  headers.set(
    "cookie",
    existing ? `${existing}; ${accountCookie}` : accountCookie,
  );
  return headers;
}

```


### FILE: projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts
```typescript
/**
 * AUTH-D01→D26 — allowlist, actor mapping, S1 authority, hostile input.
 * ZERO real GitHub OAuth.
 */

import { describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  authorizeByGithubLoginOrEmail,
  canonicalizeGithubUserId,
  isGithubUserAllowed,
  parseAllowedGithubUserIds,
} from "@/lib/auth/allowlist";
import {
  githubActorId,
  mapGithubIdentityToPiloteActor,
} from "@/lib/auth/actorMapping";
import {
  buildValidatedS1Evidence,
  issueS1AuthorityEvidence,
  registerS1EvidenceImmutable,
} from "@/lib/auth/s1Authority";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
} from "@/lib/auth";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

describe("AUTH allowlist multi-user", () => {
  it("AUTH-D01 parses two valid users", () => {
    const r = parseAllowedGithubUserIds("11111111,22222222");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["11111111", "22222222"]);
  });

  it("AUTH-D02 parses N users", () => {
    const r = parseAllowedGithubUserIds("1,2,3,4,5");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toHaveLength(5);
  });

  it("AUTH-D03 deduplicates", () => {
    const r = parseAllowedGithubUserIds("10,10, 11 ,10");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["10", "11"]);
  });

  it("AUTH-D04 missing config fails closed", () => {
    const r = parseAllowedGithubUserIds(undefined);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_MISSING");
  });

  it("AUTH-D05 empty config fails closed", () => {
    const r = parseAllowedGithubUserIds("   ");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_EMPTY");
  });

  it("AUTH-D06 malformed member fails closed", () => {
    expect(parseAllowedGithubUserIds("12,abc").ok).toBe(false);
    expect(parseAllowedGithubUserIds("12,").ok).toBe(false);
    expect(parseAllowedGithubUserIds("0").ok).toBe(false);
    expect(parseAllowedGithubUserIds("-1").ok).toBe(false);
    expect(parseAllowedGithubUserIds("1.5").ok).toBe(false);
  });

  it("AUTH-D07 login/email/displayName cannot authorize", () => {
    expect(authorizeByGithubLoginOrEmail("morris")).toBe(false);
    expect(authorizeByGithubLoginOrEmail("a@b.co")).toBe(false);
    const ids = ["11111111"];
    expect(isGithubUserAllowed("morris", ids)).toBe(false);
  });

  it("AUTH-D08/D09/D10 allow A+B deny C", () => {
    const ids = ["11111111", "22222222"];
    expect(isGithubUserAllowed("11111111", ids)).toBe(true);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
    expect(isGithubUserAllowed("33333333", ids)).toBe(false);
  });

  it("AUTH-D14/D15 removal A blocks A not B", () => {
    let ids = ["11111111", "22222222"];
    ids = ids.filter((id) => id !== "11111111");
    expect(isGithubUserAllowed("11111111", ids)).toBe(false);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
  });
});

describe("AUTH actor mapping", () => {
  it("AUTH-D11/D12/D13/D22 distinct Pilote actors", () => {
    const a = mapGithubIdentityToPiloteActor({
      githubUserId: "11111111",
      displayName: "Alice",
    });
    const b = mapGithubIdentityToPiloteActor({
      githubUserId: "22222222",
      displayName: "Bob",
    });
    expect(a.actorId).toBe("actor:github:11111111");
    expect(b.actorId).toBe("actor:github:22222222");
    expect(a.actorId).not.toBe(b.actorId);
    expect(a.role).toBe("decision_maker");
    expect(b.role).toBe("decision_maker");
    expect(a.authorityLevel).toBe("none");
    expect(b.authorityLevel).toBe("none");
  });

  it("AUTH-D26 historical local-pilote id remains distinct", () => {
    expect(LOCAL_PILOTE_ACTOR.actorId).toBe("actor:local-pilote");
    expect(githubActorId("11111111")).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
  });
});

describe("AUTH S1 AuthorityEvidence", () => {
  it("AUTH-D23/D24/D25 no auto-N3; collision-safe register; canActAsMorris false", () => {
    const resolver = new MemoryAuthorityResolver();
    const piloteA = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const piloteB = {
      ok: true as const,
      githubUserId: "22222222",
      betterAuthUserId: "ba-user-b",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "22222222" }),
    };

    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    const blocked = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "project:demo",
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    // Lifetime/collision path uses an explicitly supplied test level only after
    // buildValidatedS1Evidence — not production issueS1 (policy not proven).
    const built = buildValidatedS1Evidence({
      pilote: piloteA,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      level: "N1",
      evidenceId: "evd:github-s1:test-a",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(built.evidence.canActAsMorris).toBe(false);
    expect(registerS1EvidenceImmutable(resolver, built.evidence).ok).toBe(true);

    const okA = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: "project:demo",
      evidenceId: built.evidence.evidenceId,
      requireMorrisGate: false,
    });
    expect(okA.ok).toBe(true);

    const misuseB = resolver.verify({
      actorId: piloteB.actor.actorId,
      requiredLevel: "N1",
      scope: "project:demo",
      evidenceId: built.evidence.evidenceId,
    });
    expect(misuseB.ok).toBe(false);
    expect(misuseB.reason).toBe("actor_mismatch");

    const morrisGate = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: "project:demo",
      evidenceId: built.evidence.evidenceId,
      requireMorrisGate: true,
    });
    expect(morrisGate.ok).toBe(false);
    expect(morrisGate.reason).toBe("morris_gate_denied");
  });

  it("AUTH-D16/D17/D18 canonicalize ignores hostile non-id shapes", () => {
    expect(canonicalizeGithubUserId("11111111")).toBe("11111111");
    expect(canonicalizeGithubUserId(11111111)).toBe("11111111");
    expect(canonicalizeGithubUserId("Pilote")).toBeNull();
    expect(canonicalizeGithubUserId({ canActAsMorris: true })).toBeNull();
    expect(canonicalizeGithubUserId(true)).toBeNull();
  });
});

```


### FILE: projects/sfia-studio/app/__tests__/auth/route-protection.test.ts
```typescript
/**
 * Protected-route policy helpers — full identity evaluation semantics (no cookie-only).
 * Middleware uses resolveCurrentAuthenticatedPilote; these tests cover the decision matrix
 * without a real Next request pipeline / GitHub network.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import type { ReadBoundGithubAccountResult } from "@/lib/auth/providerAccountBinding";

describe("AUTH route protection decision matrix", () => {
  beforeEach(() => {
    vi.resetModules();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("AUTH-D19 no session → deny", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => null,
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );
    const r = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("NO_SESSION");
  });

  it("AUTH-D20 invalid/missing provider binding → deny even with session", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => ({
            user: { id: "ba-user-a", name: "A" },
            session: { id: "sess-a" },
          }),
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );
    const r = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () =>
        ({
          ok: false,
          code: "PROVIDER_ACCOUNT_MISSING",
          message: "missing",
        }) satisfies ReadBoundGithubAccountResult,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("authenticated + allowlisted proceeds; removed user denied; hostile claim ignored; cross-user mix denied", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => ({
            user: { id: "ba-user-a", name: "A" },
            session: { id: "sess-a" },
          }),
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );

    const boundOk: ReadBoundGithubAccountResult = {
      ok: true,
      account: {
        betterAuthUserId: "ba-user-a",
        githubUserId: "11111111",
        providerId: "github",
        accountRowId: "acc-1",
        issuer: "local:oauth:github",
      },
    };

    const allowed = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
      readBoundGithubAccount: async () => boundOk,
    });
    expect(allowed.ok).toBe(true);
    if (allowed.ok) {
      expect(allowed.githubUserId).toBe("11111111");
      expect(allowed.actor).toEqual(
        mapGithubIdentityToPiloteActor({
          githubUserId: "11111111",
          displayName: "A",
        }),
      );
      expect(allowed.betterAuthUserId).not.toBe(allowed.githubUserId);
    }

    const removed = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () => boundOk,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");

    const crossUser = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
      readBoundGithubAccount: async () => ({
        ok: false,
        code: "SESSION_USER_MISMATCH",
        message: "B session + A account",
      }),
    });
    expect(crossUser.ok).toBe(false);
    if (!crossUser.ok) expect(crossUser.code).toBe("SESSION_USER_MISMATCH");
  });
});

```


## H. Tests
- Auth targeted: 41 passed (4 files)
- Authority decision suite: 59 passed
- Full vitest: 2679 passed / 134 skipped
- Network sentinel: AUTH-BIND-11 zero fetch hits; accountInfo not called
- REAL GitHub / OpenAI / web_search = 0

## I. Dependency proof
- package.json better-auth: "1.7.2" (exact)
- package-lock better-auth: 1.7.2
- @testing-library/dom kept as peer restore for existing RTL tests
- npm ci --legacy-peer-deps (temp dir): PASS; npm ls: better-auth@1.7.2, @testing-library/dom@10.4.1
- No Auth.js / Redis / ORM / DB adapter added

## J. Réserves
### Blocking
- PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN — Morris must decide multi-user S1 AuthorityEvidence level policy (or confirm deferral of S1 issuance)

### Non-blocking
- AUTH REAL not executed (expected)
- account_data still holds provider tokens (Better Auth owned); SFIA does not copy tokens into AE
- Mid-cycle worktree branch pointer anomaly recovered (documented)

### Debt
- localSingleUserAuthority remains historical FREEZE — not used on Auth path
- MW6 still REAL_AUTHORITY_NOT_BOUND

### Gate Morris
1. Multi-user Pilote S1 level policy (N1/N2/N3/none/defer)
2. Separate later: AUTH REAL GO
3. Separate later: MW6 binding GO

## K. Décisions Morris requises
**Décision ciblée:** Quel niveau d'AuthorityEvidence (si aucun / N1 / N2 / N3 / matrice par action) pour un Pilote GitHub allowlisté multi-user sur source BETTER_AUTH_GITHUB_MULTI_USER_S1, avec canActAsMorris=false obligatoire ?

Faits repo:
- Framing 34: N levels = confirmation/effet d'action, pas enveloppe login
- localSingleUserAuthority: N3 + canActAsMorris=true TEMPORARY — non réutilisable
- issueS1 actuellement fail-closed

RECOMMANDATION Cursor (non décision): conserver fail-closed jusqu'à policy explicite; ne pas réintroduire N3 automatique.

## L. Claims
### Autorisés
- Deterministic binding session↔provider proven with BA 1.7.2 cookie contract
- Hot-path zero GitHub network for identity resolution
- S1 lifetime/collision fail-closed proven
- package/lock clean install proven for better-auth 1.7.2
- canActAsMorris false on Auth path
- MW6 product sources not edited in this cycle

### Interdits
- AUTH REAL PROVEN / LOGIN REAL PROVEN
- LIVE AUTHORITY BOUND / MW6 BOUND / MW6 REAL / MW6 COMPLETE
- runtime v3 ADOPTED
- S1 N-level policy proven

## M. Anti-architecture checklist
- Better Auth 1.7.2? OUI
- no Auth DB? OUI
- no Redis? OUI
- no ORM Auth? OUI
- no Auth.js? OUI
- GitHub-only? OUI
- no second SFIA identity source? OUI (BA account_data + session only)
- no custom identity cookie/JWT? OUI
- no new AuthorityResolver? OUI
- no Admin/RBAC? OUI
- canActAsMorris from GitHub? NON
- localSingleUserAuthority on multi-user path? NON
- MW6 untouched (content)? OUI (fingerprint)
- REAL_AUTHORITY_NOT_BOUND unchanged? OUI (not in Auth wt edits)
- doctrine/roadmap/C1 unchanged? OUI

## N. Verdict
**STOP — MORRIS DECISION REQUIRED**

Raison: binding/network/S1 integrity/package fermés; émission S1 N-level bloque sur PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN.

READY FOR CHATGPT AUTH CORRECTION REVIEW n'est PAS revendiqué tant que la décision Morris policy n'est pas consommée (ou que Morris confirme explicitement le deferral S1 comme état accepté pour revue).

Si Morris confirme que le fail-closed S1 (sans issuance) EST l'état voulu pour revue ChatGPT de la correction binding: un GO de re-qualification peut alors autoriser READY.

---



---

---

# CYCLE 8 CONTINUATION — AUTH MULTI-USER AUTHORITY POLICY CLOSURE

## A. Metadata (continuation)
- timestamp: 2026-09-04 20:04:36 +0200
- Cycle 8 continuation — Auth multi-user authority policy implementation
- Profile: CRITICAL / EVOL
- branch: delivery/sfia-studio-auth-better-auth-github-multi-user-foundation
- HEAD / origin/main: ebdae92a96ea1c49444dfb668342c1453f57a540
- remote handoff historical: 3ef977c194bf69a193886cb8751060734c5c89a9 (latest correction remains local — no Morris push GO)
- Morris GO consumed: GO MORRIS — PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3
- REVIEW HANDOFF PUBLICATION = NOT PERFORMED — NO MORRIS PUSH GO

## B. Git Truth
- Local dirty Auth candidate preserved; staged=0; product commit=0
- Prior correction evidence retained above

## C. Convergence
- Closes PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN as login→N3 envelope
- Implements BASE NONE + action-scoped exact N1/N2/N3 via existing effects projection
- Next: ChatGPT policy-closure review → AUTH REAL → MW6 binding (distinct GOs)
- Debt: generic BuildExecutionContractRequest.requiredAuthority still caller-input at T-A4; Auth S1 refuses without effect re-projection

## D. Morris decision (verbatim)

GO MORRIS — PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3

1. GitHub auth + allowlist = IDENTITY ONLY
2. actor authorityLevel=none; canActAsMorris=false
3. Login MUST NOT issue N1/N2/N3 S1
4. S1 only for concrete governed action context
5. Level = EXACT server-owned N1/N2/N3 for that action
6. Missing/ambiguous/untrusted ⇒ FAIL-CLOSED
7. N3 ≠ Morris
8. Auth S1 NEVER satisfies MORRIS / Morris construction gate
9. S1 scope/TTL/immutability/collision remain mandatory
10. No client/login/GitHub claim may widen or downgrade authority

## E. Authority provenance
A. Chooser: W3-A uses projectRequiredAuthorityFromEffects; generic Build trusts request field; F3/tests may hardcode.
B. Client influence: possible at generic Build API; blocked on Auth S1 path.
C/D. Downgrade/escalation via Auth S1: impossible (mismatch fail-closed).
E. Server resolver: projectRequiredAuthorityFromEffects — PROVEN / REUSED.
F. EC.requiredAuthority alone: NOT sufficient; must match re-projection.
G. Narrowest S1 boundary: resolvePiloteS1AuthorityFromGovernedEffects.

## F. Reuse table
AuthorityClass KEEP; projectRequiredAuthorityFromEffects REUSE; AuthorityResolver KEEP; localSingleUserAuthority FREEZE; EC.requiredAuthority consume only with match.

## G. Modified content

### piloteS1AuthorityPolicy.ts
```typescript
/**
 * Multi-user Pilote S1 authority policy — BASE NONE + ACTION-SCOPED N1/N2/N3.
 *
 * Morris GO consumed:
 * GO MORRIS — PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3
 *
 * Trusted derivation (reuse, not a new ActionPolicy engine):
 *   projectRequiredAuthorityFromEffects (W3-A / Product Completion)
 *
 * Login / allowlist / actor role NEVER select N1/N2/N3.
 * MORRIS AuthorityClass and morrisConstructionGateRequired → fail-closed from Auth.
 */

import type { AuthorityLevel } from "@/lib/oa/decision";
import type { AuthorityClass } from "@/lib/oa/execution-contract";
import {
  projectRequiredAuthorityFromEffects,
  type ExecutionEffectClass,
} from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";

export const PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN =
  "PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN" as const;

export const MORRIS_GATE_REQUIRED = "MORRIS_GATE_REQUIRED" as const;
export const MORRIS_AUTHORITY_NOT_AVAILABLE =
  "MORRIS_AUTHORITY_NOT_AVAILABLE" as const;
export const AUTHORITY_REQUIREMENT_UNTRUSTED =
  "AUTHORITY_REQUIREMENT_UNTRUSTED" as const;
export const AUTHORITY_REQUIREMENT_MISMATCH =
  "AUTHORITY_REQUIREMENT_MISMATCH" as const;
export const AUTHORITY_UNRESOLVED = "AUTHORITY_UNRESOLVED" as const;

export const PILOTE_S1_POLICY_ID =
  "AUTH_PILOTE_S1_BASE_NONE_ACTION_SCOPED_EFFECTS_PROJECTION" as const;

export type GovernedEffectsAuthorityInput = {
  /** Concrete Product Completion effect class — never login state. */
  effectClass: ExecutionEffectClass;
  rollbackAvailable: boolean;
  protectedBoundaries?: readonly string[];
  /**
   * Hostile / client-claimed requiredAuthority — NEVER used to select level.
   * If present and unequal to server projection → fail-closed (no downgrade/escalation).
   */
  claimedRequiredAuthority?: unknown;
  /**
   * Optional stored contract.requiredAuthority. Must equal server projection
   * when provided; otherwise fail-closed (prevents trusting a tampered build input).
   */
  contractRequiredAuthority?: unknown;
};

export type PiloteS1AuthorityPolicyResult =
  | {
      ok: true;
      level: AuthorityLevel;
      authorityClass: Exclude<AuthorityClass, "MORRIS">;
      policyId: typeof PILOTE_S1_POLICY_ID;
      effectClass: Exclude<ExecutionEffectClass, "unknown">;
      rationale: string;
      morrisConstructionGateRequired: false;
    }
  | {
      ok: false;
      code:
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN
        | typeof MORRIS_GATE_REQUIRED
        | typeof MORRIS_AUTHORITY_NOT_AVAILABLE
        | typeof AUTHORITY_REQUIREMENT_UNTRUSTED
        | typeof AUTHORITY_REQUIREMENT_MISMATCH
        | typeof AUTHORITY_UNRESOLVED;
      message: string;
    };

function isAuthorityClass(value: unknown): value is AuthorityClass {
  return (
    value === "N1" || value === "N2" || value === "N3" || value === "MORRIS"
  );
}

/**
 * Login / session-only resolution — ALWAYS fail-closed.
 * Authentication proves identity; it does not select an AuthorityEvidence level.
 */
export function resolvePiloteS1AuthorityLevel(): PiloteS1AuthorityPolicyResult {
  return {
    ok: false,
    code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
    message:
      "Login/session alone cannot issue S1 AuthorityEvidence. " +
      "BASE NONE — provide a concrete governed effect projection context.",
  };
}

/**
 * Action-scoped S1 level from existing server-owned effects → AuthorityClass projection.
 */
export function resolvePiloteS1AuthorityFromGovernedEffects(
  input: GovernedEffectsAuthorityInput,
): PiloteS1AuthorityPolicyResult {
  // Hostile claimed/contract values are inspected only for mismatch — never trusted.
  const claimed = input.claimedRequiredAuthority;
  const contractClaim = input.contractRequiredAuthority;

  if (claimed === "MORRIS" || contractClaim === "MORRIS") {
    return {
      ok: false,
      code: MORRIS_AUTHORITY_NOT_AVAILABLE,
      message:
        "Auth path cannot satisfy MORRIS AuthorityClass. " +
        "N3 ≠ Morris; canActAsMorris remains false.",
    };
  }

  const projected = projectRequiredAuthorityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
    protectedBoundaries: [...(input.protectedBoundaries ?? [])],
  });

  if (!projected.ok) {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: projected.message,
    };
  }

  if (projected.morrisConstructionGateRequired) {
    return {
      ok: false,
      code: MORRIS_GATE_REQUIRED,
      message:
        "Morris construction gate required for this effect — Auth S1 cannot satisfy it.",
    };
  }

  if (projected.requiredAuthority === "MORRIS") {
    return {
      ok: false,
      code: MORRIS_AUTHORITY_NOT_AVAILABLE,
      message: "Auth path cannot issue evidence for MORRIS AuthorityClass.",
    };
  }

  const serverClass = projected.requiredAuthority;
  if (serverClass !== "N1" && serverClass !== "N2" && serverClass !== "N3") {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: `Untrusted AuthorityClass from projection: ${String(serverClass)}`,
    };
  }

  // Client claim present but unequal → refuse (no downgrade, no self-escalation).
  if (claimed !== undefined && claimed !== null) {
    if (!isAuthorityClass(claimed) || claimed !== serverClass) {
      return {
        ok: false,
        code: AUTHORITY_REQUIREMENT_MISMATCH,
        message:
          "Client-claimed requiredAuthority does not match server effect projection " +
          `(server=${serverClass}). Hostile downgrade/escalation refused.`,
      };
    }
  }

  if (contractClaim !== undefined && contractClaim !== null) {
    if (!isAuthorityClass(contractClaim) || contractClaim !== serverClass) {
      return {
        ok: false,
        code: AUTHORITY_REQUIREMENT_MISMATCH,
        message:
          "Stored/contract requiredAuthority does not match server effect projection " +
          `(server=${serverClass}). Untrusted contract authority refused.`,
      };
    }
  }

  if (input.effectClass === "unknown") {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: "Effect class unknown — authority fail-closed.",
    };
  }

  return {
    ok: true,
    level: serverClass,
    authorityClass: serverClass,
    policyId: PILOTE_S1_POLICY_ID,
    effectClass: input.effectClass,
    morrisConstructionGateRequired: false,
    rationale:
      `Exact S1 level ${serverClass} derived from server-owned ` +
      `projectRequiredAuthorityFromEffects(effectClass=${input.effectClass}). ` +
      `canActAsMorris=false. Login base authority remains none.`,
  };
}

```

### s1Authority.ts
```typescript
/**
 * S1 AuthorityEvidence re-issuance for authenticated GitHub Pilotes.
 * Reuses existing AuthorityResolverPort — no second resolver, no AE DB.
 *
 * Policy (Morris GO — BASE NONE + ACTION-SCOPED):
 * - Login alone → no S1
 * - Level = exact N1|N2|N3 from projectRequiredAuthorityFromEffects
 * - MORRIS / Morris construction gate → fail-closed
 * - canActAsMorris = false ALWAYS
 * - scope / issuedAt / expiresAt required and validated
 * - TTL must not exceed SESSION_COOKIE_MAX_AGE_SECONDS
 * - evidenceId collision → FAIL (immutable registry)
 */

import { randomUUID } from "node:crypto";
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
} from "@/lib/oa/decision";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  S1_MAX_TTL_SECONDS,
  SESSION_COOKIE_MAX_AGE_SECONDS,
} from "./constants";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_UNRESOLVED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedEffects,
  resolvePiloteS1AuthorityLevel,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  scope: string;
  issuedAt: string;
  /** Required ISO expiry — must be > issuedAt and within max TTL. */
  expiresAt: string;
  evidenceId?: string;
  /**
   * Concrete governed effects context (required for successful issuance).
   * Absent → PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN (login-only forbidden).
   */
  governedEffects?: GovernedEffectsAuthorityInput;
};

export type IssueS1AuthorityEvidenceResult =
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME"
        | "EVIDENCE_ID_COLLISION"
        | "REGISTER_FAILED"
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN
        | typeof MORRIS_GATE_REQUIRED
        | typeof MORRIS_AUTHORITY_NOT_AVAILABLE
        | typeof AUTHORITY_REQUIREMENT_UNTRUSTED
        | typeof AUTHORITY_REQUIREMENT_MISMATCH
        | typeof AUTHORITY_UNRESOLVED;
      message: string;
    };

function parseIsoMs(value: string): number | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/**
 * Lifetime validation for Auth-path S1 evidence (pure; no registry).
 * Max TTL = SESSION_COOKIE_MAX_AGE_SECONDS (no stricter Git policy found).
 */
export function validateS1EvidenceLifetime(input: {
  issuedAt: string;
  expiresAt: string;
  maxTtlSeconds?: number;
}):
  | { ok: true; issuedAtMs: number; expiresAtMs: number; ttlSeconds: number }
  | {
      ok: false;
      code: "INVALID_ISSUED_AT" | "INVALID_EXPIRES_AT" | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const maxTtl = input.maxTtlSeconds ?? S1_MAX_TTL_SECONDS;
  if (maxTtl > SESSION_COOKIE_MAX_AGE_SECONDS) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "Configured max TTL exceeds session cookie max age.",
    };
  }

  const issuedAtMs = parseIsoMs(input.issuedAt);
  if (issuedAtMs === null) {
    return {
      ok: false,
      code: "INVALID_ISSUED_AT",
      message: "issuedAt must be a parseable ISO timestamp.",
    };
  }

  const expiresAtMs = parseIsoMs(input.expiresAt);
  if (expiresAtMs === null) {
    return {
      ok: false,
      code: "INVALID_EXPIRES_AT",
      message: "expiresAt is required and must be a parseable ISO timestamp.",
    };
  }

  if (expiresAtMs <= issuedAtMs) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "expiresAt must be strictly greater than issuedAt.",
    };
  }

  const ttlSeconds = (expiresAtMs - issuedAtMs) / 1000;
  if (ttlSeconds > maxTtl) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: `S1 TTL exceeds max allowed (${maxTtl}s / session cookie bound).`,
    };
  }

  return { ok: true, issuedAtMs, expiresAtMs, ttlSeconds };
}

/**
 * Register S1 evidence immutably. Collision of evidenceId → FAIL-CLOSED.
 */
export function registerS1EvidenceImmutable(
  authorityResolver: AuthorityResolverPort,
  evidence: AuthorityEvidence,
):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code: "EVIDENCE_ID_COLLISION" | "REGISTER_FAILED";
      message: string;
    } {
  try {
    const existing = authorityResolver.getEvidence(evidence.evidenceId);
    if (existing) {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    authorityResolver.register(evidence);
    const stored = authorityResolver.getEvidence(evidence.evidenceId);
    if (!stored) {
      return {
        ok: false,
        code: "REGISTER_FAILED",
        message: "Evidence register did not persist the record.",
      };
    }
    return { ok: true, evidence: stored };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register S1 evidence.";
    if (message === "evidence_immutable") {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    return { ok: false, code: "REGISTER_FAILED", message };
  }
}

/**
 * Build a validated S1 evidence object when a server policy has proven a level.
 */
export function buildValidatedS1Evidence(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  scope: string;
  issuedAt: string;
  expiresAt: string;
  level: AuthorityLevel;
  evidenceId?: string;
}):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const scope = input.scope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence scope is required.",
    };
  }

  const lifetime = validateS1EvidenceLifetime({
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
  });
  if (!lifetime.ok) return lifetime;

  const evidenceId =
    input.evidenceId ??
    `evd:github-s1:${input.pilote.githubUserId}:${randomUUID()}`;

  return {
    ok: true,
    evidence: {
      evidenceId,
      actorId: input.pilote.actor.actorId,
      level: input.level,
      scope,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
      canActAsMorris: false,
    },
  };
}

export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  const policy = input.governedEffects
    ? resolvePiloteS1AuthorityFromGovernedEffects(input.governedEffects)
    : resolvePiloteS1AuthorityLevel();

  if (!policy.ok) {
    return {
      ok: false,
      code: policy.code,
      message: policy.message,
    };
  }

  const built = buildValidatedS1Evidence({
    pilote: input.pilote,
    scope: input.scope,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    level: policy.level,
    evidenceId: input.evidenceId,
  });
  if (!built.ok) return built;

  return registerS1EvidenceImmutable(input.authorityResolver, built.evidence);
}

```

### index.ts
```typescript
/**
 * SFIA Studio authentication / identity foundation (Better Auth + GitHub).
 */

export * from "./constants";
export * from "./allowlist";
export * from "./actorMapping";
export {
  createSfiaAuth,
  getSfiaAuth,
  resetSfiaAuthSingletonForTests,
  assertStatelessAuthConfig,
  type CreateSfiaAuthOptions,
  type SfiaAuth,
} from "./auth";
export {
  resolveCurrentAuthenticatedPilote,
  requireCurrentPilote,
  type ResolveCurrentPiloteInput,
  type ResolveCurrentPiloteResult,
} from "./resolveCurrentPilote";
export {
  readSessionBoundGithubProviderAccount,
  type BoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";
export {
  resolvePiloteS1AuthorityLevel,
  resolvePiloteS1AuthorityFromGovernedEffects,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  MORRIS_GATE_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  PILOTE_S1_POLICY_ID,
  type PiloteS1AuthorityPolicyResult,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
export {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
  registerS1EvidenceImmutable,
  buildValidatedS1Evidence,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";

```

### policy-action-scoped-s1.test.ts
```typescript
/**
 * POLICY-01…15 — Morris multi-user authority policy (BASE NONE + ACTION-SCOPED).
 * ZERO real GitHub / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import { verifyRequiredAuthority } from "@/lib/oa/execution-contract/application/authorityHelper";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import {
  issueS1AuthorityEvidence,
  buildValidatedS1Evidence,
  registerS1EvidenceImmutable,
} from "@/lib/auth/s1Authority";
import {
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  resolvePiloteS1AuthorityFromGovernedEffects,
  resolvePiloteS1AuthorityLevel,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  const issuedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

describe("AUTH POLICY Morris BASE NONE + ACTION-SCOPED", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("POLICY-01 login only → actor authority none; no S1", () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
    expect(resolvePiloteS1AuthorityLevel().ok).toBe(false);
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "scope:login",
      issuedAt,
      expiresAt,
      // no governedEffects
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("POLICY-02 trusted N1 effect → exact S1 N1; canActAsMorris=false", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "scope:read-a",
      issuedAt,
      expiresAt,
      evidenceId: "evd:pol02",
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
      },
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("POLICY-03 trusted N2 effect → exact S1 N2", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "scope:commit",
      issuedAt,
      expiresAt,
      evidenceId: "evd:pol03",
      governedEffects: {
        effectClass: "commit",
        rollbackAvailable: true,
        protectedBoundaries: [],
      },
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
  });

  it("POLICY-04 trusted N3 effect → exact S1 N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "scope:push",
      issuedAt,
      expiresAt,
      evidenceId: "evd:pol04",
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
        protectedBoundaries: [],
      },
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("POLICY-05 MORRIS / Morris construction gate → FAIL-CLOSED", () => {
    const gate = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "baseline-promotion",
      rollbackAvailable: false,
      protectedBoundaries: [],
    });
    expect(gate.ok).toBe(false);
    if (!gate.ok) expect(gate.code).toBe(MORRIS_GATE_REQUIRED);

    const claimMorris = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      claimedRequiredAuthority: "MORRIS",
    });
    expect(claimMorris.ok).toBe(false);
    if (!claimMorris.ok) {
      expect(claimMorris.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    // Even a valid N3 S1 cannot satisfy MORRIS verify
    const n3 = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "scope:push",
      issuedAt,
      expiresAt,
      evidenceId: "evd:pol05-n3",
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
      },
    });
    expect(n3.ok).toBe(true);
    if (!n3.ok) return;
    const morrisCheck = verifyRequiredAuthority(resolver, {
      requiredAuthority: "MORRIS",
      actorId: piloteA.actor.actorId,
      scope: "scope:push",
      evidenceId: n3.evidence.evidenceId,
    });
    expect(morrisCheck.ok).toBe(false);
    expect(morrisCheck.reason).toBe("morris_gate_denied");
  });

  it("POLICY-06 client claims N1 while server requires N3 → no downgrade", () => {
    const r = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "push",
      rollbackAvailable: true,
      claimedRequiredAuthority: "N1",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-07 client claims N3 while server requires N1 → no self-escalation", () => {
    const r = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      claimedRequiredAuthority: "N3",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-08 client claims MORRIS → denied; canActAsMorris false", () => {
    const r = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "commit",
      rollbackAvailable: true,
      claimedRequiredAuthority: "MORRIS",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("POLICY-09 no trusted requirement → PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN", () => {
    const r = resolvePiloteS1AuthorityLevel();
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
  });

  it("POLICY-10 malformed/unknown authority → fail closed", () => {
    const unknown = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "unknown",
      rollbackAvailable: true,
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe(AUTHORITY_UNRESOLVED);

    const badClaim = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      claimedRequiredAuthority: "N9",
    });
    expect(badClaim.ok).toBe(false);
    if (!badClaim.ok) expect(badClaim.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-11 scope binding — S1 for scope A cannot authorize scope B", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "contract:A",
      issuedAt,
      expiresAt,
      evidenceId: "evd:pol11",
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
      },
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: "contract:B",
      evidenceId: issued.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");
  });

  it("POLICY-12 middleware/session resolution does not issue S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);

    const resolver = new MemoryAuthorityResolver();
    const before = resolver.listByActor(piloteA.actor.actorId).length;
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId).length).toBe(before);
  });

  it("POLICY-13 cross-user session B + provider A → SESSION_USER_MISMATCH", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-b",
        name: "B",
        email: "b@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-b",
        userId: "ba-user-b",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("POLICY-14 protected hot path → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const hits: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      hits.push(String(input));
      throw new Error("NETWORK");
    }) as typeof fetch;
    try {
      expect(vi.spyOn(auth.api, "accountInfo")).not.toHaveBeenCalled();
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("POLICY-15 allowlist removal → deny before S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const denied = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.code).toBe("ALLOWLIST_DENIED");
  });

  it("N3 S1 hierarchical: satisfies N2 when AuthorityResolver levelSatisfies applies; not MORRIS", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const built = buildValidatedS1Evidence({
      pilote: piloteA,
      scope: "scope:hier",
      issuedAt,
      expiresAt,
      level: "N3",
      evidenceId: "evd:hier",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    registerS1EvidenceImmutable(resolver, built.evidence);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: "scope:hier",
        evidenceId: "evd:hier",
      }).ok,
    ).toBe(true);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: "scope:hier",
        evidenceId: "evd:hier",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });

  it("S1 N2 cannot authorize N3 action", () => {
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const built = buildValidatedS1Evidence({
      pilote: piloteA,
      scope: "scope:n2",
      issuedAt,
      expiresAt,
      level: "N2",
      evidenceId: "evd:n2",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    registerS1EvidenceImmutable(resolver, built.evidence);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: "scope:n2",
        evidenceId: "evd:n2",
      }).reason,
    ).toBe("level_insufficient");
  });
});

```

DEPENDENCY CHANGE = NONE

## H. Tests
POLICY-01..15 PASS; Auth 58; decision+EC 143; full 2696/134 skipped; REAL=0

## I. Security
auth≠authority; N3≠Morris; no downgrade/escalation; no login S1; scope bound; canActAsMorris=false

## J. MW6
FP unchanged 7f83e1e114fa8f81284f264a71f1a3f52a1735c3e1ce7984c275283591a7e5f6 — UNTOUCHED YES

## K. Reserves
Blocking: none for deterministic policy closure.
Debt: T-A4 generic requiredAuthority input; AUTH REAL; MW6 binding; lib/auth→W3-A import coupling.

## L. Claims
Allowed: deterministic policy closure ready for ChatGPT review.
Forbidden: AUTH REAL, MW6 BOUND/REAL/COMPLETE, runtime v3 ADOPTED, commit/push/PR/merge.

## M. Verdict

**READY FOR CHATGPT AUTH POLICY CLOSURE REVIEW — DETERMINISTIC ONLY**

---

# APPENDIX — COMPLETE EXPLOITABLE MODIFIED CONTENT FOR CHATGPT INDEPENDENT REVIEW

## Purpose
Provide ChatGPT with full exploitable local candidate content that is NOT on remote handoff tip 3ef977c1.
Timestamp append: 2026-09-04 20:11:52 +0200
Product commit/push still NOT performed for product branch.
This appendix enables independent CRITICAL review of Auth policy closure.

## Provenance source — FULL FILE (trusted server-owned authority derivation)

### FILE: projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts
```typescript
/**
 * W3-A — non-durable Qualified Execution Effects (Morris B2/B3).
 *
 * Application-level envelope ONLY. Not an aggregate, store, repository, or SoT.
 * FC-08 materializes ExecutionContract as the first durable SoT.
 *
 * Trajectory option governed/bounded = governance context / provenance only.
 * Cycle profile / CKC never alone determine authority.
 */

import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";

/** Bounded Product Completion effect taxonomy (governance, not a product catalog). */
export type ExecutionEffectClass =
  | "read"
  | "simulate"
  | "generate-temporary-artifact"
  | "local-write"
  | "commit"
  | "push"
  | "pull-request"
  | "merge"
  | "critical-delete"
  | "doctrine-change"
  | "baseline-promotion"
  | "unknown";

/** Executable action strings derived from effect class — never trajectory-governed/bounded. */
export type ProductExecutionAction =
  | "product:read"
  | "product:simulate"
  | "product:generate-temporary-artifact"
  | "product:local-write"
  | "product:commit"
  | "product:push"
  | "product:pull-request"
  | "product:merge"
  | "product:critical-delete"
  | "product:doctrine-change"
  | "product:baseline-promotion";

export type ProductExecutionCapability =
  | "cap:product-read"
  | "cap:product-simulate"
  | "cap:product-temp-artifact"
  | "cap:product-local-write"
  | "cap:product-commit"
  | "cap:product-git-push"
  | "cap:product-pull-request"
  | "cap:product-merge"
  | "cap:product-critical-delete"
  | "cap:product-doctrine-change"
  | "cap:product-baseline-promotion";

export type QualifiedExecutionEffects = {
  readonly effectClass: ExecutionEffectClass;
  readonly action: ProductExecutionAction;
  readonly target: string;
  readonly scopeIn: string;
  readonly scopeOut: readonly string[];
  readonly protectedBoundaries: readonly string[];
  /** True when a credible rollback/cleanup path exists for the effects. */
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription: string | null;
  readonly requiredCapabilities: readonly ProductExecutionCapability[];
  readonly evidenceRequirements: readonly string[];
  readonly morrisConstructionGateRequired: boolean;
  readonly provenance: {
    readonly trajectoryOptionRef: string | null;
    readonly qualificationSource: string;
    readonly notes: readonly string[];
  };
};

export type EffectQualificationFailure = {
  readonly ok: false;
  readonly code:
    | "EFFECTS_UNRESOLVED"
    | "REVERSIBILITY_UNRESOLVED"
    | "AUTHORITY_UNRESOLVED"
    | "PREPARATION_BLOCKED"
    | "SCOPE_UNRESOLVED"
    | "TRAJECTORY_NOT_EXECUTABLE";
  readonly message: string;
};

const EFFECT_TO_ACTION: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionAction
> = {
  read: "product:read",
  simulate: "product:simulate",
  "generate-temporary-artifact": "product:generate-temporary-artifact",
  "local-write": "product:local-write",
  commit: "product:commit",
  push: "product:push",
  "pull-request": "product:pull-request",
  merge: "product:merge",
  "critical-delete": "product:critical-delete",
  "doctrine-change": "product:doctrine-change",
  "baseline-promotion": "product:baseline-promotion",
};

const EFFECT_TO_CAPABILITY: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionCapability
> = {
  read: "cap:product-read",
  simulate: "cap:product-simulate",
  "generate-temporary-artifact": "cap:product-temp-artifact",
  "local-write": "cap:product-local-write",
  commit: "cap:product-commit",
  push: "cap:product-git-push",
  "pull-request": "cap:product-pull-request",
  merge: "cap:product-merge",
  "critical-delete": "cap:product-critical-delete",
  "doctrine-change": "cap:product-doctrine-change",
  "baseline-promotion": "cap:product-baseline-promotion",
};

/**
 * Morris Product Completion runtime projection: effects → requiredAuthority.
 * Pure function — not an AuthorityCatalog, not framing-34 global engine.
 */
export function projectRequiredAuthorityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
  readonly protectedBoundaries: readonly string[];
}):
  | {
      readonly ok: true;
      readonly requiredAuthority: AuthorityClass;
      readonly morrisConstructionGateRequired: boolean;
    }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable, protectedBoundaries } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "AUTHORITY_UNRESOLVED",
      message:
        "Effets d'exécution non qualifiés — requiredAuthority fail-closed.",
    };
  }

  if (
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: true,
    };
  }

  if (
    effectClass === "push" ||
    effectClass === "pull-request" ||
    effectClass === "merge" ||
    effectClass === "critical-delete"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (!rollbackAvailable && effectClass !== "read" && effectClass !== "simulate") {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (effectClass === "local-write" || effectClass === "commit") {
    const protectedHit = protectedBoundaries.length > 0;
    return {
      ok: true,
      requiredAuthority: protectedHit ? "N2" : "N2",
      morrisConstructionGateRequired: false,
    };
  }

  if (
    effectClass === "read" ||
    effectClass === "simulate" ||
    effectClass === "generate-temporary-artifact"
  ) {
    if (protectedBoundaries.length > 0) {
      return {
        ok: true,
        requiredAuthority: "N2",
        morrisConstructionGateRequired: false,
      };
    }
    return {
      ok: true,
      requiredAuthority: "N1",
      morrisConstructionGateRequired: false,
    };
  }

  return {
    ok: false,
    code: "AUTHORITY_UNRESOLVED",
    message: `Classe d'effet non projetable: ${effectClass}`,
  };
}

/**
 * Reversibility from effects + rollback facts — NEVER HumanDecision.reversible.
 */
export function deriveReversibilityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
}):
  | { readonly ok: true; readonly reversibility: Reversibility }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "REVERSIBILITY_UNRESOLVED",
      message:
        "Réversibilité d'exécution non établie — préparation bloquée.",
    };
  }

  if (effectClass === "read") {
    // No mutation — model as reversible (no durable side-effect).
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "simulate") {
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "generate-temporary-artifact") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Artefact temporaire sans rollback/cleanup crédible — préparation bloquée.",
      };
    }
    return { ok: true, reversibility: "reversible" };
  }

  if (
    effectClass === "push" ||
    effectClass === "merge" ||
    effectClass === "critical-delete" ||
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    if (!rollbackAvailable) {
      return { ok: true, reversibility: "irreversible" };
    }
    return { ok: true, reversibility: "partially_reversible" };
  }

  if (effectClass === "local-write" || effectClass === "commit" || effectClass === "pull-request") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Écriture/commit sans fait de rollback crédible — préparation bloquée.",
      };
    }
    return {
      ok: true,
      reversibility:
        effectClass === "commit" ? "partially_reversible" : "reversible",
    };
  }

  return {
    ok: false,
    code: "REVERSIBILITY_UNRESOLVED",
    message: `Réversibilité non dérivable pour ${effectClass}`,
  };
}

export function actionForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionAction {
  return EFFECT_TO_ACTION[effectClass];
}

export function capabilityForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionCapability {
  return EFFECT_TO_CAPABILITY[effectClass];
}

export function buildQualifiedExecutionEffects(input: {
  readonly effectClass: Exclude<ExecutionEffectClass, "unknown">;
  readonly projectId: string;
  readonly scopeIn: string;
  readonly scopeOut?: readonly string[];
  readonly protectedBoundaries?: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription?: string | null;
  readonly trajectoryOptionRef?: string | null;
  readonly qualificationSource: string;
  readonly notes?: readonly string[];
  /** Actual execution target — never fixture-shaped. */
  readonly target?: string;
}):
  | { readonly ok: true; readonly effects: QualifiedExecutionEffects }
  | EffectQualificationFailure {
  if (!input.scopeIn.trim()) {
    return {
      ok: false,
      code: "SCOPE_UNRESOLVED",
      message: "Scope IN manquant — effets non qualifiables.",
    };
  }

  const target = (input.target ?? "").trim();
  if (!target) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Target d'exécution manquant — effets non qualifiables.",
    };
  }

  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
  const authority = projectRequiredAuthorityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
    protectedBoundaries,
  });
  if (!authority.ok) return authority;

  const reversibility = deriveReversibilityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
  });
  if (!reversibility.ok) return reversibility;

  const action = actionForEffectClass(input.effectClass);
  const capability = capabilityForEffectClass(input.effectClass);

  return {
    ok: true,
    effects: {
      effectClass: input.effectClass,
      action,
      target,
      scopeIn: input.scopeIn.trim(),
      scopeOut: [...(input.scopeOut ?? [])],
      protectedBoundaries,
      rollbackAvailable: input.rollbackAvailable,
      rollbackDescription: input.rollbackDescription ?? null,
      requiredCapabilities: [capability],
      evidenceRequirements: [`evreq:${input.effectClass}`],
      morrisConstructionGateRequired: authority.morrisConstructionGateRequired,
      provenance: {
        trajectoryOptionRef: input.trajectoryOptionRef ?? null,
        qualificationSource: input.qualificationSource,
        notes: [...(input.notes ?? [])],
      },
    },
  };
}

/**
 * @deprecated Do not call as W2-decide fallback.
 * Temporary-artifact work must come from ActualExecutionWork qualification.
 * Kept only for explicit negative/migration tests that assert its removal
 * from the product prepare path.
 */
export function qualifyDefaultW3ATemporaryArtifactEffects(_input: {
  readonly projectId: string;
  readonly scopeIn: string;
  readonly trajectoryOptionRef: string;
  readonly scopeOut?: readonly string[];
}): EffectQualificationFailure {
  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Fallback W2-decide→temporary-artifact interdit — qualifier ActualExecutionWork explicitement.",
  };
}

```

## Auth policy / S1 / binding — FULL FILES (current local candidate)

### FILE: projects/sfia-studio/app/lib/auth/providerAccountBinding.ts
```typescript
/**
 * Recover the GitHub provider subject from Better Auth's encrypted account_data
 * cookie and bind it to the CURRENT verified session user.
 *
 * Why not auth.api.accountInfo({ useAccountCookie: true })?
 * better-auth@1.7.2 accountInfo ALWAYS calls getValidAccessToken + provider.getUserInfo
 * (GitHub network). Public accountInfo.account shape is ONLY
 * { id, providerId, issuer, accountId } — no userId.
 *
 * In no-database mode, shouldBindAccountCookieToSessionUser() === false, so
 * Better Auth itself does NOT enforce account.userId === session.user.id.
 * SFIA therefore enforces that bind fail-closed when reading the cookie payload
 * (which DOES include userId per getAccountCookie's typed return).
 */

import { getAccountCookie, getCookies } from "better-auth/cookies";
import { canonicalizeGithubUserId } from "./allowlist";
import type { SfiaAuth } from "./auth";
import { GITHUB_PROVIDER_ID } from "./constants";

/** Minimal context shape accepted by better-auth getAccountCookie. */
type AccountCookieEndpointContext = {
  headers: Headers;
  context: Awaited<SfiaAuth["$context"]>;
  getCookie: (name: string) => string | undefined;
};

export type BoundGithubProviderAccount = {
  /** Better Auth internal user id (session.user.id) — NOT the GitHub id. */
  betterAuthUserId: string;
  /** Canonical GitHub numeric id string (= account.accountId for GitHub). */
  githubUserId: string;
  providerId: typeof GITHUB_PROVIDER_ID;
  /** Better Auth account row id (internal). */
  accountRowId: string;
  issuer: string;
};

export type ReadBoundGithubAccountResult =
  | { ok: true; account: BoundGithubProviderAccount }
  | {
      ok: false;
      code:
        | "PROVIDER_ACCOUNT_MISSING"
        | "ACCOUNT_USER_ID_MISSING"
        | "SESSION_USER_MISMATCH"
        | "PROVIDER_NOT_GITHUB"
        | "GITHUB_ID_INVALID";
      message: string;
    };

function cookieValueFromHeader(
  headers: Headers,
  cookieName: string,
): string | undefined {
  const raw = headers.get("cookie");
  if (!raw) return undefined;
  for (const part of raw.split(";")) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const name = trimmed.slice(0, eq);
    if (name === cookieName || name.startsWith(`${cookieName}.`)) {
      return trimmed.slice(eq + 1);
    }
  }
  return undefined;
}

/**
 * Build the minimal Better Auth endpoint context required by getAccountCookie.
 * No provider network; decrypts the existing httpOnly account_data cookie only.
 */
async function buildAccountCookieContext(
  auth: SfiaAuth,
  headers: Headers,
): Promise<AccountCookieEndpointContext> {
  const authContext = await auth.$context;
  // Ensure cookie name helpers stay aligned with configured auth options.
  void getCookies(auth.options);
  return {
    headers,
    context: authContext,
    getCookie: (name: string) => cookieValueFromHeader(headers, name),
  };
}

/**
 * Read Better Auth account_data and require session.user.id === account.userId.
 */
export async function readSessionBoundGithubProviderAccount(input: {
  auth: SfiaAuth;
  headers: Headers;
  sessionUserId: string;
}): Promise<ReadBoundGithubAccountResult> {
  const sessionUserId = input.sessionUserId?.trim();
  if (!sessionUserId) {
    return {
      ok: false,
      code: "SESSION_USER_MISMATCH",
      message: "Session user id is required for provider binding.",
    };
  }

  let rawAccount: Awaited<ReturnType<typeof getAccountCookie>> = null;
  try {
    const endpointCtx = await buildAccountCookieContext(
      input.auth,
      input.headers,
    );
    // better-auth types GenericEndpointContext; runtime only needs headers+context.
    rawAccount = await getAccountCookie(
      endpointCtx as Parameters<typeof getAccountCookie>[0],
    );
  } catch {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message: "GitHub provider account cookie is missing or unreadable.",
    };
  }

  if (!rawAccount) {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message: "GitHub provider account cookie is missing or unreadable.",
    };
  }

  const accountUserId =
    typeof rawAccount.userId === "string" ? rawAccount.userId.trim() : "";
  if (!accountUserId) {
    return {
      ok: false,
      code: "ACCOUNT_USER_ID_MISSING",
      message:
        "Account cookie lacks userId — cannot bind provider subject to session.",
    };
  }

  if (accountUserId !== sessionUserId) {
    return {
      ok: false,
      code: "SESSION_USER_MISMATCH",
      message:
        "Provider account cookie userId does not match the current session user.",
    };
  }

  if (rawAccount.providerId !== GITHUB_PROVIDER_ID) {
    return {
      ok: false,
      code: "PROVIDER_NOT_GITHUB",
      message: "Provider account is not GitHub.",
    };
  }

  const githubUserId = canonicalizeGithubUserId(rawAccount.accountId);
  if (!githubUserId) {
    return {
      ok: false,
      code: "GITHUB_ID_INVALID",
      message: "Provider accountId is not a canonical GitHub user id.",
    };
  }

  return {
    ok: true,
    account: {
      betterAuthUserId: accountUserId,
      githubUserId,
      providerId: GITHUB_PROVIDER_ID,
      accountRowId: String(rawAccount.id),
      issuer: String(rawAccount.issuer ?? ""),
    },
  };
}

```

### FILE: projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts
```typescript
/**
 * Resolve the current authenticated Pilote from:
 *   Better Auth session (verified)
 * ∩ encrypted account_data cookie bound by account.userId === session.user.id
 * ∩ CURRENT server allowlist
 *
 * session.user.id is NEVER treated as the GitHub id.
 * auth.api.accountInfo is NOT used on this hot path (would call GitHub getUserInfo).
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import {
  isGithubUserAllowed,
  parseAllowedGithubUserIdsFromEnv,
  type AllowedGithubUserIdsParseResult,
} from "./allowlist";
import { mapGithubIdentityToPiloteActor } from "./actorMapping";
import { getSfiaAuth, type SfiaAuth } from "./auth";
import {
  readSessionBoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";

export type ResolveCurrentPiloteResult =
  | {
      ok: true;
      githubUserId: string;
      betterAuthUserId: string;
      actor: ActorReference;
    }
  | {
      ok: false;
      code:
        | "NO_SESSION"
        | "PROVIDER_ACCOUNT_MISSING"
        | "ACCOUNT_USER_ID_MISSING"
        | "PROVIDER_NOT_GITHUB"
        | "GITHUB_ID_INVALID"
        | "ALLOWLIST_DENIED"
        | "ALLOWLIST_CONFIG_ERROR"
        | "SESSION_USER_MISMATCH";
      message: string;
      allowlist?: AllowedGithubUserIdsParseResult;
    };

export type ResolveCurrentPiloteInput = {
  headers: Headers;
  auth?: SfiaAuth;
  env?: NodeJS.ProcessEnv;
  /**
   * Hostile injection — IGNORED. Client cannot select GitHub id.
   */
  claimedGithubUserId?: unknown;
  claimedRole?: unknown;
  claimedCanActAsMorris?: unknown;
  /**
   * TEST-ONLY dependency injection. Production uses cookie binding.
   * Must still return the real binding contract (userId-bound account).
   */
  readBoundGithubAccount?: (input: {
    auth: SfiaAuth;
    headers: Headers;
    sessionUserId: string;
  }) => Promise<ReadBoundGithubAccountResult>;
};

export async function resolveCurrentAuthenticatedPilote(
  input: ResolveCurrentPiloteInput,
): Promise<ResolveCurrentPiloteResult> {
  // Hostile client fields are deliberately ignored.
  void input.claimedGithubUserId;
  void input.claimedRole;
  void input.claimedCanActAsMorris;

  const auth = input.auth ?? getSfiaAuth();
  const env = input.env ?? process.env;

  const session = await auth.api.getSession({ headers: input.headers });
  if (!session?.user?.id || !session.session) {
    return {
      ok: false,
      code: "NO_SESSION",
      message: "No valid Better Auth session.",
    };
  }

  const readBound =
    input.readBoundGithubAccount ?? readSessionBoundGithubProviderAccount;
  const bound = await readBound({
    auth,
    headers: input.headers,
    sessionUserId: session.user.id,
  });

  if (!bound.ok) {
    return {
      ok: false,
      code: bound.code,
      message: bound.message,
    };
  }

  const allowlist = parseAllowedGithubUserIdsFromEnv(env);
  if (!allowlist.ok) {
    return {
      ok: false,
      code: "ALLOWLIST_CONFIG_ERROR",
      message: "SFIA allowlist configuration is fail-closed.",
      allowlist,
    };
  }

  if (!isGithubUserAllowed(bound.account.githubUserId, allowlist.ids)) {
    return {
      ok: false,
      code: "ALLOWLIST_DENIED",
      message: "GitHub identity is not in the current SFIA allowlist.",
      allowlist,
    };
  }

  const actor = mapGithubIdentityToPiloteActor({
    githubUserId: bound.account.githubUserId,
    displayName: session.user.name ?? null,
  });

  return {
    ok: true,
    githubUserId: bound.account.githubUserId,
    betterAuthUserId: session.user.id,
    actor,
  };
}

export async function requireCurrentPilote(
  input: ResolveCurrentPiloteInput,
): Promise<Extract<ResolveCurrentPiloteResult, { ok: true }>> {
  const result = await resolveCurrentAuthenticatedPilote(input);
  if (!result.ok) {
    throw new Error(`PILOTE_REQUIRED:${result.code}`);
  }
  return result;
}

```

### FILE: projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts
```typescript
/**
 * AUTH-BIND / AUTH-S1 / AUTH-POLICY — adversarial deterministic correction suite.
 * ZERO real GitHub OAuth / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { readSessionBoundGithubProviderAccount } from "@/lib/auth/providerAccountBinding";
import {
  buildValidatedS1Evidence,
  issueS1AuthorityEvidence,
  registerS1EvidenceImmutable,
  validateS1EvidenceLifetime,
} from "@/lib/auth/s1Authority";
import {
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityLevel,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { SESSION_COOKIE_MAX_AGE_SECONDS } from "@/lib/auth/constants";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

function installNetworkSentinel() {
  const hits: string[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    hits.push(url);
    throw new Error(`NETWORK_SENTINEL_BLOCKED:${url}`);
  }) as typeof fetch;
  return {
    hits,
    restore: () => {
      globalThis.fetch = originalFetch;
    },
  };
}

describe("AUTH-BIND session↔provider (better-auth@1.7.2 account_data)", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("AUTH-BIND-01 A session + A provider subject → PASS", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const sentinel = installNetworkSentinel();
    try {
      vi.spyOn(auth.api, "getSession").mockResolvedValue({
        user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
        session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
      } as never);

      const r = await resolveCurrentAuthenticatedPilote({
        auth,
        headers,
        env: TEST_ENV,
      });
      expect(r.ok).toBe(true);
      if (r.ok) {
        expect(r.githubUserId).toBe("11111111");
        expect(r.betterAuthUserId).toBe("ba-user-a");
        expect(r.betterAuthUserId).not.toBe(r.githubUserId);
      }
      expect(sentinel.hits.filter((u) => u.includes("api.github.com"))).toEqual(
        [],
      );
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-02 B session + A provider/account state → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-b", name: "B", email: "b@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-b", userId: "ba-user-b", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("AUTH-BIND-03 session valid + provider state missing → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers: new Headers(),
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("AUTH-BIND-04 provider != GitHub → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      providerId: "google",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_NOT_GITHUB");
  });

  it("AUTH-BIND-05 GitHub accountId malformed → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "not-a-github-id",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GITHUB_ID_INVALID");
  });

  it("AUTH-BIND-06/07/08 hostile claims ignored", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.githubUserId).toBe("11111111");
      expect(r.actor.role).toBe("decision_maker");
    }
  });

  it("AUTH-BIND-09 allowlist removal after session → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const removed = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");
  });

  it("AUTH-BIND-10 two allowlisted users → distinct actor IDs", () => {
    const a = mapGithubIdentityToPiloteActor({ githubUserId: "11111111" });
    const b = mapGithubIdentityToPiloteActor({ githubUserId: "22222222" });
    expect(a.actorId).not.toBe(b.actorId);
  });

  it("AUTH-BIND-11 protected identity resolution → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);
    const spyAccountInfo = vi.spyOn(auth.api, "accountInfo");
    const sentinel = installNetworkSentinel();
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(spyAccountInfo).not.toHaveBeenCalled();
      expect(sentinel.hits).toEqual([]);
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-12 cookie payload includes userId; public accountInfo shape does not invent binding", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const bound = await readSessionBoundGithubProviderAccount({
      auth,
      headers,
      sessionUserId: "ba-user-a",
    });
    expect(bound.ok).toBe(true);
    if (bound.ok) {
      expect(bound.account.betterAuthUserId).toBe("ba-user-a");
      expect(bound.account.githubUserId).toBe("11111111");
    }

    // Missing userId in cookie → deny (cannot bind)
    const headersNoUser = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      omitUserId: true,
    });
    const missing = await readSessionBoundGithubProviderAccount({
      auth,
      headers: headersNoUser,
      sessionUserId: "ba-user-a",
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("ACCOUNT_USER_ID_MISSING");
  });
});

describe("AUTH-POLICY S1 level", () => {
  it("AUTH-POLICY-01 login alone does not imply N3 — NOT PROVEN without governed effects", () => {
    const policy = resolvePiloteS1AuthorityLevel();
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("AUTH-S1-01 issueS1 without governedEffects fails; with read effect → N1", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const blocked = issueS1AuthorityEvidence({
      pilote: {
        ok: true,
        githubUserId: "11111111",
        betterAuthUserId: "ba-user-a",
        actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
      },
      authorityResolver: resolver,
      scope: "project:demo",
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const ok = issueS1AuthorityEvidence({
      pilote: {
        ok: true,
        githubUserId: "11111111",
        betterAuthUserId: "ba-user-a",
        actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
      },
      authorityResolver: resolver,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      evidenceId: "evd:auth-s1-01",
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
      },
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.evidence.level).toBe("N1");
      expect(ok.evidence.canActAsMorris).toBe(false);
    }
  });
});

describe("AUTH-S1 lifetime + collision integrity", () => {
  const pilote = {
    ok: true as const,
    githubUserId: "11111111",
    betterAuthUserId: "ba-user-a",
    actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
  };

  it("AUTH-S1-02 missing/empty expiresAt → FAIL", () => {
    expect(
      validateS1EvidenceLifetime({
        issuedAt: "2026-09-04T12:00:00.000Z",
        expiresAt: "",
      }).ok,
    ).toBe(false);
  });

  it("AUTH-S1-03 invalid issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "not-a-date",
      expiresAt: "2026-09-04T13:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_ISSUED_AT");
  });

  it("AUTH-S1-04 invalid expiresAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "nope",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EXPIRES_AT");
  });

  it("AUTH-S1-05 expiresAt <= issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "2026-09-04T12:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-06 TTL over session max → FAIL", () => {
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const overMs =
      Date.parse(issuedAt) + (SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000;
    const r = validateS1EvidenceLifetime({
      issuedAt,
      expiresAt: new Date(overMs).toISOString(),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-07 evidence expired → resolver refuses", () => {
    const resolver = new MemoryAuthorityResolver();
    const built = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      level: "N1",
      evidenceId: "evd:expired-test",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    registerS1EvidenceImmutable(resolver, built.evidence);
    const v = resolver.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N1",
      scope: "project:demo",
      evidenceId: "evd:expired-test",
    });
    expect(v.ok).toBe(false);
    expect(v.reason).toBe("expired");
  });

  it("AUTH-S1-08/09 duplicate evidenceId → FAIL-CLOSED; registry unchanged", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const first = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      level: "N1",
      evidenceId: "evd:collision",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(registerS1EvidenceImmutable(resolver, first.evidence).ok).toBe(true);

    const escalate = {
      ...first.evidence,
      canActAsMorris: true,
      level: "N3" as const,
      actorId: "actor:github:22222222",
      scope: "project:other",
    };
    const second = registerS1EvidenceImmutable(resolver, escalate);
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");

    const stored = resolver.getEvidence("evd:collision");
    expect(stored?.canActAsMorris).toBe(false);
    expect(stored?.level).toBe("N1");
    expect(stored?.actorId).toBe(pilote.actor.actorId);
    expect(stored?.scope).toBe("project:demo");
  });

  it("AUTH-S1-10/11/12/13 actor/scope/morris/canActAsMorris invariants", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const built = buildValidatedS1Evidence({
      pilote,
      scope: "project:demo",
      issuedAt,
      expiresAt,
      level: "N2",
      evidenceId: "evd:verify",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.canActAsMorris).toBe(false);
    registerS1EvidenceImmutable(resolver, built.evidence);

    expect(
      resolver.verify({
        actorId: "actor:github:22222222",
        requiredLevel: "N2",
        scope: "project:demo",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("actor_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "project:other",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("scope_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "project:demo",
        evidenceId: "evd:verify",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

```

## Note on prior sections
The continuation section above already embeds full `piloteS1AuthorityPolicy.ts`, `s1Authority.ts`, `index.ts`, and `policy-action-scoped-s1.test.ts`.
This appendix adds the missing effects-projection definition ChatGPT required plus binding/adversarial sources for end-to-end provenance review:

effects → AuthorityClass → Auth S1

## Transmission
Published to sfia/review-handoff for ChatGPT access.
Product working tree remains uncommitted.
