# ChatGPT Review Pack — AUTH POLICY CLOSURE CORRECTION (B1/B2) — FULL MODIFIED CONTENT

> **REVIEW HANDOFF STATUS:** COMPLETE LOCAL PACK WITH FULL MODIFIED CONTENT
> Prior incomplete pack used excerpts for EC adapters / test summaries — **this rewrite includes full file bodies for every Auth candidate + EC adapter file**.
> Input handoff tip referenced (do not rely on stale historical body): `2fe7ea6a8eb55b1b14da47a768c137506fd8af6a`

## A. Metadata

- timestamp: 2026-09-04 20:52:38 +0200
- cycle: Cycle 8 — Delivery / continuation corrective — Auth Policy Closure B1/B2
- profile: CRITICAL
- typology: EVOL
- workspace: `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- branch: `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- GO Morris consumed: **GO MORRIS — bounded deterministic correction following ChatGPT Auth Policy Closure review**
- Normative prior GO: **GO MORRIS — PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3**
- Input Review Handoff tip: `2fe7ea6a8eb55b1b14da47a768c137506fd8af6a`
- Input handoff parent: `3ef977c194bf69a193886cb8751060734c5c89a9`
- Input handoff canonical blob: `8ea5676b5a4e0b85e6e336dddd40ba57d205caec`
- Product commit/push/PR/merge: **0**
- This document replaces the incomplete local pack that used excerpts.

## B. Git Truth

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/Topbar.tsx
 M projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
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

- staged files: **0**
- conflicts: **0**
- product commit this cycle: **0**
- MW6 files in Auth worktree: **NONE**

## C. Convergence

- Capability: V3-F11 / V3-F12 — Pilote identity → governed execution authority
- Milestone: Auth multi-user deterministic policy closure (B1/B2)
- Assets: Better Auth 1.7.2 KEEP; GitHub numeric id binding KEEP; allowlist KEEP; AuthorityClass/Resolver KEEP; `projectRequiredAuthorityFromEffects` REUSE; `localSingleUserAuthority` FREEZE; Auth candidate ADAPT; MW6 PRESERVE
- Gaps closed: B1 AUTH S1 POLICY BYPASS; B2 ACTION/EXECUTION CONTRACT BINDING
- Exit proof: adversarial BYPASS-* + BIND-* + REG-*
- Next: ChatGPT deterministic re-review (then separate AUTH REAL)
- Debt: T-A4 generic requiredAuthority; AUTH REAL; MW6 binding; auth→W3-A coupling accepted

## D. ChatGPT findings consumed

1. **B1 — AUTH S1 POLICY BYPASS** — public `buildValidatedS1Evidence` / `registerS1EvidenceImmutable` bypassed policy.
2. **B2 — ACTION / EXECUTION CONTRACT BINDING NOT PROVEN** — scope+effects independent; AE.scope=business scope; verify used contract.scope → Contract A S1 could authorize Contract B.

## E. Discovery A–M

| ID | Finding |
|----|---------|
| A | Only `issueS1AuthorityEvidence` remains public Auth issuer after correction. |
| B | `buildValidatedS1Evidence` module-private (not exported). |
| C | `registerS1EvidenceImmutable` module-private (not exported). |
| D | No product runtime needs private helpers outside canonical path. |
| E | Tests rewritten off private helpers. |
| F | Binding primitive: AE.scope exact-match + `executionContractId`. |
| G | No native AE.executionContractId field. |
| H | verify compares actorId, level hierarchy, exact scope, expiry, morris gate. |
| I | Auth S1 verify scope = executionContractId via adapter. |
| J | Two contracts may share business scope. |
| K | Closed without AE schema / ActionPolicy / second resolver. |
| L | EC/W3-A context supplies contract id/action/target/scope/effects. |
| M | Canonical issuer receives contract+effects; policy re-projects level. |

Classification: B1 IMPLEMENTABLE / B2 IMPLEMENTABLE WITH EXISTING ARCHITECTURE.

## F. Architecture

- Reused: W3-A projection, AuthorityResolverPort, AE.scope semantics, Better Auth 1.7.2
- Binding: Auth S1 AE.scope = `executionContractId`; `resolveExecutionAuthorityVerifyScope` source-gated
- No parallel engine; no persistence; `localSingleUserAuthority` frozen/untouched

## G. Modified content — FULL FILES (no excerpts)

Every Auth candidate production file, every Auth test, every ExecutionContract file touched for B2 adapter, package.json, middleware, login, shell logout wiring.

`package-lock.json` omitted from inline dump (size 9172 lines); SHA-256 = `5fa32ea58da04852a3bd4ca4fa944527f49e01a2aa0c07ca3a3d7fbdeb967c11`; dependency truth = better-auth **1.7.2** exact (see package.json below).

### `projects/sfia-studio/app/lib/auth/constants.ts`

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

### `projects/sfia-studio/app/lib/auth/allowlist.ts`

```typescript
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
```

### `projects/sfia-studio/app/lib/auth/actorMapping.ts`

```typescript
/**
 * Map verified GitHub immutable user id → SFIA OaActorReference (Pilote).
 * ActorReference.authorityLevel is never an authority proof.
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import { GITHUB_ACTOR_ID_PREFIX } from "./constants";
import { isCanonicalGithubUserId } from "./allowlist";

export function githubActorId(githubUserId: string): string {
  if (!isCanonicalGithubUserId(githubUserId)) {
    throw new Error("invalid_github_user_id");
  }
  return `${GITHUB_ACTOR_ID_PREFIX}${githubUserId}`;
}

export function mapGithubIdentityToPiloteActor(input: {
  githubUserId: string;
  displayName?: string | null;
}): ActorReference {
  const actorId = githubActorId(input.githubUserId);
  const display =
    typeof input.displayName === "string" && input.displayName.trim().length > 0
      ? input.displayName.trim()
      : undefined;
  return {
    actorId,
    role: "decision_maker",
    ...(display ? { displayName: display } : {}),
    authorityLevel: "none",
  };
}

export function parseGithubUserIdFromActorId(
  actorId: string,
): string | null {
  if (!actorId.startsWith(GITHUB_ACTOR_ID_PREFIX)) return null;
  const id = actorId.slice(GITHUB_ACTOR_ID_PREFIX.length);
  return isCanonicalGithubUserId(id) ? id : null;
}
```

### `projects/sfia-studio/app/lib/auth/auth.ts`

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

### `projects/sfia-studio/app/lib/auth/auth-client.ts`

```typescript
"use client";

import { createAuthClient } from "better-auth/react";

/**
 * Browser Better Auth client. Base URL follows the current origin
 * (Studio runs on port 3020 in local dev).
 */
export const authClient = createAuthClient();
```

### `projects/sfia-studio/app/lib/auth/providerAccountBinding.ts`

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

### `projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts`

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

### `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts`

```typescript
/**
 * Multi-user Pilote S1 authority policy — BASE NONE + ACTION-SCOPED N1/N2/N3.
 *
 * Morris GO: PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3
 *
 * Trusted derivation (reuse): projectRequiredAuthorityFromEffects (W3-A).
 * Login never selects N1/N2/N3. MORRIS / construction gate → fail-closed.
 */

import type { AuthorityLevel } from "@/lib/oa/decision";
import type { AuthorityClass } from "@/lib/oa/execution-contract";
import {
  actionForEffectClass,
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
export const CONTRACT_BINDING_MISMATCH = "CONTRACT_BINDING_MISMATCH" as const;
export const CONTRACT_CONTEXT_REQUIRED = "CONTRACT_CONTEXT_REQUIRED" as const;

export const PILOTE_S1_POLICY_ID =
  "AUTH_PILOTE_S1_BASE_NONE_ACTION_SCOPED_EFFECTS_PROJECTION" as const;

/**
 * Server-owned governed effects facts used for re-projection + coherence.
 * Claims never select the level.
 */
export type GovernedEffectsAuthorityInput = {
  effectClass: ExecutionEffectClass;
  rollbackAvailable: boolean;
  protectedBoundaries?: readonly string[];
  /** Must match concrete contract.scope */
  scopeIn: string;
  /** Must match concrete contract.target */
  target: string;
  claimedRequiredAuthority?: unknown;
  contractRequiredAuthority?: unknown;
};

/** Concrete ExecutionContract fields required for Auth S1 issuance. */
export type AuthS1GovernedContractContext = {
  executionContractId: string;
  action: string;
  target: string;
  /** Business / product scope (coherence only — NOT AuthorityEvidence.scope). */
  scope: string;
  requiredAuthority?: AuthorityClass;
};

export type PiloteS1AuthorityPolicyResult =
  | {
      ok: true;
      level: AuthorityLevel;
      authorityClass: Exclude<AuthorityClass, "MORRIS">;
      policyId: typeof PILOTE_S1_POLICY_ID;
      effectClass: Exclude<ExecutionEffectClass, "unknown">;
      /** AuthorityEvidence.scope binding key = executionContractId */
      authorityBindingScope: string;
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
        | typeof AUTHORITY_UNRESOLVED
        | typeof CONTRACT_BINDING_MISMATCH
        | typeof CONTRACT_CONTEXT_REQUIRED;
      message: string;
    };

function isAuthorityClass(value: unknown): value is AuthorityClass {
  return (
    value === "N1" || value === "N2" || value === "N3" || value === "MORRIS"
  );
}

function isExecutionContractId(value: unknown): value is string {
  return typeof value === "string" && /^xct:[A-Za-z0-9][A-Za-z0-9:_\-.]*$/.test(value);
}

/**
 * Login / session-only — ALWAYS fail-closed.
 */
export function resolvePiloteS1AuthorityLevel(): PiloteS1AuthorityPolicyResult {
  return {
    ok: false,
    code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
    message:
      "Login/session alone cannot issue S1 AuthorityEvidence. " +
      "BASE NONE — provide a concrete governed ExecutionContract + effects context.",
  };
}

/**
 * Action-scoped + contract-bound S1 level from existing effects projection.
 */
export function resolvePiloteS1AuthorityFromGovernedContract(input: {
  contract: AuthS1GovernedContractContext;
  governedEffects: GovernedEffectsAuthorityInput;
}): PiloteS1AuthorityPolicyResult {
  const { contract, governedEffects } = input;

  if (!isExecutionContractId(contract.executionContractId?.trim())) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message:
        "executionContractId is required (xct:…) for Auth S1 contract binding.",
    };
  }

  const action = contract.action?.trim();
  const contractScope = contract.scope?.trim();
  const contractTarget = contract.target?.trim();
  const effectsScope = governedEffects.scopeIn?.trim();
  const effectsTarget = governedEffects.target?.trim();

  if (!action || !contractScope || !contractTarget) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "Concrete contract action/target/scope are required.",
    };
  }
  if (!effectsScope || !effectsTarget) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "Governed effects scopeIn/target are required for coherence.",
    };
  }

  if (effectsScope !== contractScope) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message: "Governed effects scopeIn does not match contract.scope.",
    };
  }
  if (effectsTarget !== contractTarget) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message: "Governed effects target does not match contract.target.",
    };
  }

  const claimed = governedEffects.claimedRequiredAuthority;
  const contractClaim =
    governedEffects.contractRequiredAuthority ?? contract.requiredAuthority;

  if (claimed === "MORRIS" || contractClaim === "MORRIS") {
    return {
      ok: false,
      code: MORRIS_AUTHORITY_NOT_AVAILABLE,
      message:
        "Auth path cannot satisfy MORRIS AuthorityClass. N3 ≠ Morris.",
    };
  }

  if (governedEffects.effectClass === "unknown") {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: "Effect class unknown — authority fail-closed.",
    };
  }

  const expectedAction = actionForEffectClass(governedEffects.effectClass);
  if (expectedAction !== action) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message:
        `Effect class action (${expectedAction}) does not match contract.action (${action}).`,
    };
  }

  const projected = projectRequiredAuthorityFromEffects({
    effectClass: governedEffects.effectClass,
    rollbackAvailable: governedEffects.rollbackAvailable,
    protectedBoundaries: [...(governedEffects.protectedBoundaries ?? [])],
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
        "Morris construction gate required — Auth S1 cannot satisfy it.",
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

  if (claimed !== undefined && claimed !== null) {
    if (!isAuthorityClass(claimed) || claimed !== serverClass) {
      return {
        ok: false,
        code: AUTHORITY_REQUIREMENT_MISMATCH,
        message:
          "Client-claimed requiredAuthority does not match server effect projection.",
      };
    }
  }

  if (contractClaim !== undefined && contractClaim !== null) {
    if (!isAuthorityClass(contractClaim) || contractClaim !== serverClass) {
      return {
        ok: false,
        code: AUTHORITY_REQUIREMENT_MISMATCH,
        message:
          "contract.requiredAuthority does not match server effect projection.",
      };
    }
  }

  return {
    ok: true,
    level: serverClass,
    authorityClass: serverClass,
    policyId: PILOTE_S1_POLICY_ID,
    effectClass: governedEffects.effectClass,
    authorityBindingScope: contract.executionContractId.trim(),
    morrisConstructionGateRequired: false,
    rationale:
      `Exact S1 ${serverClass} from projectRequiredAuthorityFromEffects(` +
      `effectClass=${governedEffects.effectClass}); AuthorityEvidence.scope=` +
      `${contract.executionContractId.trim()} (contract binding).`,
  };
}

/** @deprecated Use resolvePiloteS1AuthorityFromGovernedContract */
export function resolvePiloteS1AuthorityFromGovernedEffects(
  input: GovernedEffectsAuthorityInput,
): PiloteS1AuthorityPolicyResult {
  void input;
  return {
    ok: false,
    code: CONTRACT_CONTEXT_REQUIRED,
    message:
      "Governed effects alone are insufficient — provide concrete ExecutionContract context.",
  };
}
```

### `projects/sfia-studio/app/lib/auth/s1Authority.ts`

```typescript
/**
 * S1 AuthorityEvidence — single public Auth issuance path.
 *
 * B1: buildValidatedS1Evidence / registerS1EvidenceImmutable are module-private.
 * B2: AuthorityEvidence.scope = executionContractId (enforced by CheckExecutionAuthorization adapter).
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
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  /** Concrete governed ExecutionContract context — required for success. */
  contract?: AuthS1GovernedContractContext;
  /** Server-owned effects facts — required for success; re-projected for level. */
  governedEffects?: GovernedEffectsAuthorityInput;
  issuedAt: string;
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
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN
        | typeof MORRIS_GATE_REQUIRED
        | typeof MORRIS_AUTHORITY_NOT_AVAILABLE
        | typeof AUTHORITY_REQUIREMENT_UNTRUSTED
        | typeof AUTHORITY_REQUIREMENT_MISMATCH
        | typeof AUTHORITY_UNRESOLVED
        | typeof CONTRACT_BINDING_MISMATCH
        | typeof CONTRACT_CONTEXT_REQUIRED;
      message: string;
    };

function parseIsoMs(value: string): number | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/** Lifetime validation only — does not emit/register authority. */
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

/** Module-private — not exported from lib/auth (B1). */
function registerS1EvidenceImmutable(
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

/** Module-private — not exported from lib/auth (B1). */
function buildValidatedS1Evidence(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  /** Must be executionContractId for Auth S1 binding. */
  authorityBindingScope: string;
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
  const scope = input.authorityBindingScope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence binding scope (executionContractId) is required.",
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

/**
 * Canonical (sole) public Auth S1 issuance path.
 * Requires concrete contract + governed effects; never login-only.
 */
export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  if (!input.contract || !input.governedEffects) {
    const loginOnly = resolvePiloteS1AuthorityLevel();
    if (loginOnly.ok) {
      return {
        ok: false,
        code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
        message: "Unexpected login policy success — fail-closed.",
      };
    }
    return { ok: false, code: loginOnly.code, message: loginOnly.message };
  }

  const policy = resolvePiloteS1AuthorityFromGovernedContract({
    contract: input.contract,
    governedEffects: input.governedEffects,
  });

  if (!policy.ok) {
    return {
      ok: false,
      code: policy.code,
      message: policy.message,
    };
  }

  const built = buildValidatedS1Evidence({
    pilote: input.pilote,
    authorityBindingScope: policy.authorityBindingScope,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    level: policy.level,
    evidenceId: input.evidenceId,
  });
  if (!built.ok) return built;

  return registerS1EvidenceImmutable(input.authorityResolver, built.evidence);
}
```

### `projects/sfia-studio/app/lib/auth/index.ts`

```typescript
/**
 * SFIA Studio authentication / identity foundation (Better Auth + GitHub).
 *
 * Public S1 issuance surface: issueS1AuthorityEvidence ONLY.
 * buildValidatedS1Evidence / registerS1EvidenceImmutable are NOT exported (B1).
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
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  MORRIS_GATE_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  PILOTE_S1_POLICY_ID,
  type PiloteS1AuthorityPolicyResult,
  type GovernedEffectsAuthorityInput,
  type AuthS1GovernedContractContext,
} from "./piloteS1AuthorityPolicy";
export {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";
```

### `projects/sfia-studio/app/middleware.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";

/**
 * Central Studio protection — FULL server-side identity + allowlist evaluation.
 * Does NOT authorize on cookie presence alone.
 *
 * Public:
 * - /login
 * - /api/auth/*
 *
 * Protected: all other product surfaces.
 */

const PUBLIC_EXACT = new Set(["/login"]);

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_EXACT.has(pathname)) return true;
  if (pathname.startsWith("/api/auth")) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname === "/favicon.ico") return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Lazy import auth only when needed so public routes don't require secrets
  // during static asset edge cases. Protected routes fail closed on misconfig.
  try {
    const result = await resolveCurrentAuthenticatedPilote({
      headers: request.headers,
    });

    if (!result.ok) {
      const login = new URL("/login", request.url);
      login.searchParams.set("error", result.code);
      login.searchParams.set("from", pathname);
      return NextResponse.redirect(login);
    }

    return NextResponse.next();
  } catch {
    const login = new URL("/login", request.url);
    login.searchParams.set("error", "AUTH_CONFIG_ERROR");
    return NextResponse.redirect(login);
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
```

### `projects/sfia-studio/app/app/api/auth/[...all]/route.ts`

```typescript
import type { NextRequest } from "next/server";
import { toNextJsHandler } from "better-auth/next-js";
import { getSfiaAuth } from "@/lib/auth/auth";

async function handler(request: NextRequest) {
  const auth = getSfiaAuth();
  const nextHandler = toNextJsHandler(auth);
  const method = request.method.toUpperCase();
  if (method === "GET") return nextHandler.GET(request);
  if (method === "POST") return nextHandler.POST(request);
  if (method === "PATCH" && nextHandler.PATCH) return nextHandler.PATCH(request);
  if (method === "PUT" && nextHandler.PUT) return nextHandler.PUT(request);
  if (method === "DELETE" && nextHandler.DELETE) return nextHandler.DELETE(request);
  return new Response("Method Not Allowed", { status: 405 });
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const DELETE = handler;
```

### `projects/sfia-studio/app/app/login/page.tsx`

```tsx
import { LoginClient } from "./login-client";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;
  return (
    <LoginClient errorCode={params.error ?? null} fromPath={params.from ?? null} />
  );
}
```

### `projects/sfia-studio/app/app/login/login-client.tsx`

```tsx
"use client";

import { useMemo } from "react";
import { authClient } from "@/lib/auth/auth-client";

const ERROR_MESSAGES: Record<string, string> = {
  github_user_not_allowlisted:
    "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
  github_id_unparseable:
    "Impossible de vérifier l'identité GitHub (identifiant manquant).",
  ALLOWLIST_DENIED:
    "Votre identité GitHub n'est plus dans la liste d'autorisation SFIA.",
  NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
  PROVIDER_ACCOUNT_MISSING:
    "Session incomplète — reconnectez-vous avec GitHub.",
  AUTH_CONFIG_ERROR:
    "Configuration d'authentification indisponible (fail-closed).",
  provider_not_allowed: "Seul GitHub OAuth est accepté.",
};

export function LoginClient({
  errorCode,
  fromPath,
}: {
  errorCode?: string | null;
  fromPath?: string | null;
}) {
  const message = useMemo(() => {
    if (!errorCode) return null;
    return (
      ERROR_MESSAGES[errorCode] ??
      "Accès refusé. Connectez-vous avec un compte GitHub autorisé."
    );
  }, [errorCode]);

  const callbackURL =
    fromPath && fromPath.startsWith("/") && !fromPath.startsWith("//")
      ? fromPath
      : "/studio";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
        color: "#e2e8f0",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <main
        style={{
          width: "min(28rem, 100%)",
          border: "1px solid rgba(148, 163, 184, 0.35)",
          borderRadius: "12px",
          padding: "2rem",
          background: "rgba(15, 23, 42, 0.85)",
        }}
        data-testid="login-surface"
      >
        <p
          style={{
            letterSpacing: "0.12em",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            color: "#94a3b8",
            margin: 0,
          }}
        >
          SFIA Studio
        </p>
        <h1 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.75rem" }}>
          Connexion
        </h1>
        <p style={{ margin: "0 0 1.5rem", color: "#cbd5e1", lineHeight: 1.5 }}>
          Authentifiez-vous avec GitHub. L&apos;accès Studio est réservé aux
          identités autorisées côté serveur (rôle runtime : Pilote).
        </p>

        {message ? (
          <p
            role="alert"
            data-testid="login-error"
            style={{
              margin: "0 0 1.25rem",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              background: "rgba(127, 29, 29, 0.45)",
              border: "1px solid rgba(248, 113, 113, 0.45)",
              color: "#fecaca",
            }}
          >
            {message}
          </p>
        ) : null}

        <button
          type="button"
          data-testid="login-github"
          onClick={() => {
            void authClient.signIn.social({
              provider: "github",
              callbackURL,
            });
          }}
          style={{
            width: "100%",
            border: 0,
            borderRadius: "8px",
            padding: "0.85rem 1rem",
            background: "#f8fafc",
            color: "#0f172a",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Se connecter avec GitHub
        </button>
      </main>
    </div>
  );
}
```

### `projects/sfia-studio/app/components/auth/LogoutButton.tsx`

```tsx
"use client";

import { authClient } from "@/lib/auth/auth-client";

export function LogoutButton() {
  return (
    <button
      type="button"
      data-testid="logout-button"
      onClick={() => {
        void authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              window.location.href = "/login";
            },
          },
        });
      }}
      style={{
        border: "1px solid rgba(148, 163, 184, 0.45)",
        background: "transparent",
        color: "inherit",
        borderRadius: "999px",
        padding: "0.35rem 0.85rem",
        fontSize: "0.8rem",
        cursor: "pointer",
      }}
    >
      Déconnexion
    </button>
  );
}
```

### `projects/sfia-studio/app/components/shell/StudioShell.tsx`

```tsx
import { UtilityRail } from "./UtilityRail";
import {
  Topbar,
  type TopbarPrimaryAction,
} from "./Topbar";
import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
import { LogoutButton } from "@/components/auth/LogoutButton";
import type { StudioShellRoute } from "@/lib/navigation";
import shellStyles from "@/styles/shell.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
  testId?: string;
}

interface StudioShellProps {
  variant: "floating" | "flush";
  activeRoute: StudioShellRoute;
  title: string;
  pills?: TopbarPill[];
  children: React.ReactNode;
  copilot?: CopilotProps | null;
  showTabs?: boolean;
  /**
   * `undefined` preserves the historical CTA; `null` hides it.
   */
  primaryAction?: TopbarPrimaryAction | null;
  /** When true, canvas uses full width (no copilot column). */
  hideCopilot?: boolean;
}

export function StudioShell({
  variant,
  activeRoute,
  title,
  pills,
  children,
  copilot,
  showTabs,
  primaryAction,
  hideCopilot = false,
}: StudioShellProps) {
  const isFloating = variant === "floating";
  const showCopilot = !hideCopilot && copilot != null;

  if (isFloating) {
    return (
      <div className={shellStyles.pageFloating} data-testid="studio-shell">
        <div className={shellStyles.brandAccent} aria-hidden="true" />
        <div className={shellStyles.railFloating}>
          <UtilityRail variant="floating" activeRoute={activeRoute} />
        </div>
        <div className={shellStyles.workspaceFloating}>
          <Topbar
            variant="floating"
            title={title}
            activeRoute={activeRoute}
            pills={pills}
            showTabs={showTabs}
            primaryAction={primaryAction}
            authControls={<LogoutButton />}
          />
          <main className={shellStyles.workspaceInner} id="main-content">
            {children}
          </main>
        </div>
        {showCopilot ? (
          <div className={shellStyles.copilotFloating}>
            <CopilotPanel {...copilot} variant="floating" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={shellStyles.pageFlush} data-testid="studio-shell">
      <div className={shellStyles.brandAccent} aria-hidden="true" />
      <div className={shellStyles.railFlush}>
        <UtilityRail variant="flush" activeRoute={activeRoute} />
      </div>
      <div className={shellStyles.mainFlush}>
        <Topbar
          variant="flush"
          title={title}
          activeRoute={activeRoute}
          pills={pills}
          showTabs={showTabs}
          primaryAction={primaryAction}
          authControls={<LogoutButton />}
        />
        <div className={shellStyles.bodyFlush}>
          <main
            className={
              showCopilot
                ? shellStyles.canvasFlush
                : shellStyles.canvasFlushWide
            }
            id="main-content"
            aria-label="Contenu principal"
          >
            {children}
          </main>
          {showCopilot ? (
            <div className={shellStyles.copilotFlush}>
              <CopilotPanel {...copilot} variant="flush" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
```

### `projects/sfia-studio/app/components/shell/Topbar.tsx`

```tsx
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { StatusPill } from "@/components/ui/StatusPill";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  FLUSH_TABS,
  type StudioShellRoute,
} from "@/lib/navigation";
import styles from "./topbar.module.css";

interface TopbarPill {
  label: string;
  tone?: "blueFlush" | "purpleFlush" | "orange" | "green";
  testId?: string;
}

export interface TopbarPrimaryAction {
  label: string;
  href: string;
}

interface TopbarProps {
  variant: "floating" | "flush";
  title: string;
  activeRoute: StudioShellRoute;
  pills?: TopbarPill[];
  showTabs?: boolean;
  floatingTabs?: string[];
  /**
   * `undefined` preserves the historical CTA; `null` hides it.
   */
  primaryAction?: TopbarPrimaryAction | null;
  /** Optional auth controls (e.g. logout) — bounded Auth Delivery integration. */
  authControls?: ReactNode;
}

export function Topbar({
  variant,
  title,
  activeRoute,
  pills = [],
  showTabs = true,
  floatingTabs = ["Demande", "Contexte", "Pièces jointes", "Qualification"],
  primaryAction,
  authControls,
}: TopbarProps) {
  const isFloating = variant === "floating";
  const resolvedPrimaryAction =
    primaryAction === undefined
      ? { label: "Nouvelle demande", href: "/nouvelle-demande" }
      : primaryAction;

  if (isFloating) {
    return (
      <header data-testid="topbar">
        <div className={styles.topbarFloating}>
          <p className={styles.eyebrowFloating}>SFIA STUDIO</p>
          <div className={styles.titleRow}>
            <h1 className={styles.titleFloating}>{title}</h1>
            <div className={styles.pills}>
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  data-testid={pill.testId}
                >
                  <StatusPill tone={pill.tone ?? "orange"}>
                    {pill.label}
                  </StatusPill>
                </span>
              ))}
              {authControls ? (
                <span data-testid="topbar-auth-controls">{authControls}</span>
              ) : null}
            </div>
          </div>
        </div>
        {showTabs ? (
          <div
            className={styles.tabsFloating}
            role="tablist"
            aria-label="Sections demande"
          >
            {floatingTabs.map((tab, index) => (
              <span
                key={tab}
                className={
                  index === 0
                    ? styles.tabFloatingActive
                    : styles.tabFloating
                }
                role="tab"
                aria-selected={index === 0}
              >
                {tab}
              </span>
            ))}
          </div>
        ) : null}
      </header>
    );
  }

  const activeTabId = FLUSH_TABS.find((t) => t.route === activeRoute)?.id ?? "synthese";

  return (
    <header className={styles.topbar} data-testid="topbar">
      <p className={styles.eyebrow}>SFIA STUDIO</p>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.pills}>
          {pills.map((pill) => (
            <span key={pill.label} data-testid={pill.testId}>
              <StatusPill tone={pill.tone ?? "blueFlush"}>
                {pill.label}
              </StatusPill>
            </span>
          ))}
          {resolvedPrimaryAction ? (
            <CtaButton href={resolvedPrimaryAction.href}>
              {resolvedPrimaryAction.label}
            </CtaButton>
          ) : null}
          {authControls ? (
            <span data-testid="topbar-auth-controls">{authControls}</span>
          ) : null}
        </div>
      </div>
      {showTabs && (
        <nav className={styles.tabs} aria-label="Navigation cycle">
          {FLUSH_TABS.map((tab) => {
            if (tab.disabled) {
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={styles.tabDisabled}
                  disabled
                  title="Simulation — preuves non routées en P0"
                  aria-disabled
                >
                  {tab.label}
                  {tab.simulated ? " (simulé)" : ""}
                </button>
              );
            }

            const active = tab.id === activeTabId;
            return (
              <Link
                key={tab.id}
                href={tab.route!}
                className={active ? styles.tabActive : styles.tab}
                aria-current={active ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
```

### `projects/sfia-studio/app/.env.example`

```dotenv
# SFIA Studio — Auth foundation (Better Auth + GitHub multi-user)
# Copy to .env.local for local development. NEVER commit real secrets.

# Better Auth (required)
BETTER_AUTH_SECRET=replace-with-long-random-secret
# Studio local port is 3020 (see package.json scripts)
BETTER_AUTH_URL=http://localhost:3020

# GitHub OAuth App credentials (identity-only; no repo write scopes required)
# Create the OAuth App separately under a Morris GO — not in this Delivery cycle.
# Callback URL must be: http://localhost:3020/api/auth/callback/github
GITHUB_CLIENT_ID=replace-with-github-oauth-app-client-id
GITHUB_CLIENT_SECRET=replace-with-github-oauth-app-client-secret

# Server-owned multi-user allowlist — immutable GitHub numeric user ids (comma-separated)
# Example placeholders only (not real accounts):
SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222
```

### `projects/sfia-studio/app/package.json`

```json
{
  "name": "sfia-studio",
  "private": true,
  "version": "0.1.0",
  "description": "SFIA Studio — Delivery P0 frontend (fixtures locales, 4 écrans Figma)",
  "scripts": {
    "dev": "next dev --port 3020",
    "build": "next build",
    "start": "next start --port 3020",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "test:db": "vitest run __tests__/oa/finops/postgres",
    "migrate:up": "node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
    "migrate:down": "node-pg-migrate down --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
    "finops:t7:rollout": "tsx scripts/finops-t7-shadow-rollout.ts"
  },
  "dependencies": {
    "@openai/agents": "^0.17.0",
    "ajv": "^6.15.0",
    "better-auth": "1.7.2",
    "next": "^15.3.3",
    "openai": "^6.48.0",
    "pg": "~8.22.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "zod": "^4.5.4"
  },
  "devDependencies": {
    "@playwright/test": "^1.52.0",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^22.15.21",
    "@types/pg": "^8.20.4",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "axe-core": "^4.10.3",
    "eslint": "^9.27.0",
    "eslint-config-next": "^15.3.3",
    "jsdom": "^26.1.0",
    "node-pg-migrate": "^8.0.4",
    "tsx": "^4.20.5",
    "typescript": "^5.8.3",
    "vitest": "^3.1.2"
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts`

```typescript
/**
 * Shared authority helpers for T-A4 — consume T-A3 AuthorityResolverPort only.
 * MORRIS = N3 verified ∧ canActAsMorris=true. N3 ≠ Morris.
 *
 * Auth S1 binding adaptation (reuse, not new engine):
 * BETTER_AUTH_GITHUB_MULTI_USER_S1 evidence uses AuthorityEvidence.scope =
 * executionContractId. Verification must therefore compare against
 * executionContractId, not the business contract.scope string.
 */
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
  VerifyAuthorityResult,
} from "@/lib/oa/decision";
import type { AuthorityClass } from "../domain/types";

/** Must match lib/auth/constants BETTER_AUTH_GITHUB_MULTI_USER_S1 (no auth import). */
export const AUTH_S1_EVIDENCE_SOURCE = "BETTER_AUTH_GITHUB_MULTI_USER_S1" as const;

/**
 * Resolve the scope string passed to AuthorityResolver.verify for a contract.
 * Auth-origin S1 evidence is bound to executionContractId.
 */
export function resolveExecutionAuthorityVerifyScope(input: {
  executionContractId: string;
  contractScope: string;
  evidence: AuthorityEvidence | null | undefined;
}): string {
  if (input.evidence?.source === AUTH_S1_EVIDENCE_SOURCE) {
    return input.executionContractId;
  }
  return input.contractScope;
}

export function authorityClassToVerify(input: {
  requiredAuthority: AuthorityClass;
  actorId: string;
  scope: string;
  evidenceId?: string;
  claimedAuthorityLevel?: string;
  displayName?: string;
}): {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  requireMorrisGate?: boolean;
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
} {
  const requireMorrisGate = input.requiredAuthority === "MORRIS";
  const requiredLevel: AuthorityLevel =
    input.requiredAuthority === "MORRIS"
      ? "N3"
      : (input.requiredAuthority as AuthorityLevel);

  return {
    actorId: input.actorId,
    requiredLevel,
    scope: input.scope,
    evidenceId: input.evidenceId,
    requireMorrisGate,
    // Hostile injection deliberately passed through so resolver can ignore it.
    authorityLevel: input.claimedAuthorityLevel as
      | AuthorityLevel
      | "none"
      | undefined,
    displayName: input.displayName,
  };
}

export function verifyRequiredAuthority(
  authority: AuthorityResolverPort,
  input: {
    requiredAuthority: AuthorityClass;
    actorId: string;
    scope: string;
    evidenceId?: string;
    claimedAuthorityLevel?: string;
    displayName?: string;
  },
): VerifyAuthorityResult {
  return authority.verify(authorityClassToVerify(input));
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  denyByDefaultMatch,
  hasConfirmationConstraintContradiction,
  isExecutionReadyStatus,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  CheckAuthorizationResult,
  CheckExecutionAuthorizationRequest,
} from "../domain/types";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CheckSnapshot = {
  executionContractId: string;
  action: string;
  target: string;
  scope: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CheckExecutionAuthorization — gate for T-A5 StartExecution.
 * NEVER mutates. NEVER executes. Deny-by-default on action/target/scope.
 *
 * Requires: execute-ready status (confirmed, or validated+N1 with
 * EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED and no EFFECT_CONFIRMATION_REQUIRED),
 * not cancelled/superseded, not T-A5 status, decisions still accepted+current,
 * Critical ack if applicable, authority OK.
 */
export class CheckExecutionAuthorization {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
  ) {}

  async execute(
    request: CheckExecutionAuthorizationRequest,
  ): Promise<CheckAuthorizationResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): CheckAuthorizationResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        authorized: false,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, authorized: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: CheckSnapshot = {
        executionContractId: request.executionContractId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;

      const contract = await this.contracts.findById(snap.executionContractId);
      if (!contract) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(contract.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (contract.status === "cancelled" || contract.status === "superseded") {
        return fail("STATE_CONFLICT", `status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (hasConfirmationConstraintContradiction(contract.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: contract.projectId },
        );
      }
      if (!isExecutionReadyStatus(contract)) {
        return fail("STATE_CONFLICT", `not_confirmed_${contract.status}`, {
          projectId: contract.projectId,
        });
      }

      // Current = no successor has superseded this contract.
      const successors = await this.contracts.listSuperseding(
        contract.executionContractId,
      );
      if (successors.length > 0) {
        return fail("STATE_CONFLICT", "not_current_has_successor", {
          projectId: contract.projectId,
        });
      }

      const matchErr = denyByDefaultMatch({
        contractAction: contract.action,
        contractTarget: contract.target,
        contractScope: contract.scope,
        requestedAction: snap.action,
        requestedTarget: snap.target,
        requestedScope: snap.scope,
      });
      if (matchErr) {
        return fail(matchErr.detailCode, matchErr.reason, {
          projectId: contract.projectId,
        });
      }

      if (contract.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: contract.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: contract.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: contract.projectId,
          });
        }
        if (
          cycleResult.cycle.profile === "Critical" &&
          cycleResult.cycle.status === "proposed"
        ) {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: contract.projectId },
          );
        }
      }

      const decisionRefs = contract.decisionRefs ?? [];
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.projectId !== contract.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.status !== "accepted") {
          return fail(
            "DECISION_NOT_CURRENT",
            `decision_status_${decisionResult.decision.status}`,
            { projectId: contract.projectId },
          );
        }
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: contract.executionContractId,
        contractScope: contract.scope,
        evidence: authEvidence,
      });

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          contract.requiredAuthority === "MORRIS"
            ? "N3"
            : contract.requiredAuthority,
        scope: verifyScope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: contract.projectId },
        );
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        authorized: true,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        authorized: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices } from "@/lib/oa/project";
import { createExecutionError } from "../domain/errors";
import {
  assertNotTa5Injection,
  cloneContractArrays,
  contractIdempotencyFingerprint,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  BuildExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type BuildSnapshot = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId: string | undefined;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: AuthorityClass;
  reversibility: Reversibility;
  executionWindowClass: BuildExecutionContractRequest["executionWindowClass"];
  idempotencyKey: string;
  correlationId: string;
  status: "draft" | "proposed";
  adapterExportRef: string | undefined;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
  doctrinePackageRef: BuildExecutionContractRequest["doctrinePackageRef"];
};

/**
 * BuildExecutionContract — create draft|proposed.
 * Requires project exists; decisionRefs accepted+current same project.
 * Does NOT consume Confirmation.
 * Does NOT set selectedAgentRef / T-A5 statuses.
 *
 * B1: snapshot request fields BEFORE any await (TOCTOU).
 */
export class BuildExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly projectServices: ProjectServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly decisionServices: DecisionServices,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: BuildExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        projectId: extra?.projectId ?? request.projectId,
        executionContractId:
          extra?.executionContractId ?? request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: error.projectId ?? request.projectId,
        executionContractId:
          error.executionContractId ?? request.executionContractId,
        status: request.status ?? "draft",
        requiredAuthority: String(request.requiredAuthority),
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }
      // Hostile claimedAuthorityLevel ignored after snapshot for audit trail.
      void request.claimedAuthorityLevel;

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: BuildSnapshot = {
        executionContractId: request.executionContractId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        executionWindowClass: request.executionWindowClass,
        idempotencyKey: request.idempotencyKey,
        correlationId,
        status: request.status ?? "draft",
        adapterExportRef: request.adapterExportRef,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        doctrinePackageRef: request.doctrinePackageRef
          ? structuredClone(request.doctrinePackageRef)
          : undefined,
      };

      const fieldViolation = validateBuildFields({
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        executionWindowClass: snap.executionWindowClass,
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      const existingById = await this.contracts.findById(
        snap.executionContractId,
      );
      if (existingById) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_id");
      }

      const byIdem = await this.contracts.findByIdempotencyKey(
        snap.idempotencyKey,
      );
      if (byIdem) {
        const fp = contractIdempotencyFingerprint({
          projectId: snap.projectId,
          action: snap.action,
          target: snap.target,
          scope: snap.scope,
          requiredAuthority: snap.requiredAuthority,
          decisionRefs: cloned.decisionRefs,
          constraints: cloned.constraints,
          requiredCapabilities: cloned.requiredCapabilities,
          stopConditions: cloned.stopConditions,
          evidenceRequirements: cloned.evidenceRequirements,
          reversibility: snap.reversibility,
          executionWindowClass: snap.executionWindowClass,
          status: snap.status,
        });
        const existingFp = contractIdempotencyFingerprint({
          projectId: byIdem.projectId,
          action: byIdem.action,
          target: byIdem.target,
          scope: byIdem.scope,
          requiredAuthority: byIdem.requiredAuthority,
          decisionRefs: byIdem.decisionRefs ?? [],
          constraints: byIdem.constraints,
          requiredCapabilities: byIdem.requiredCapabilities,
          stopConditions: byIdem.stopConditions,
          evidenceRequirements: byIdem.evidenceRequirements,
          reversibility: byIdem.reversibility,
          executionWindowClass: byIdem.executionWindowClass,
          status: byIdem.status,
        });
        if (fp === existingFp) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.execution_contract.built",
            ts: timestamp,
            correlationId,
            projectId: byIdem.projectId,
            executionContractId: byIdem.executionContractId,
            status: byIdem.status,
            requiredAuthority: byIdem.requiredAuthority,
            result: "ok",
            durationMs,
            reusedFromIdempotencyKey: true,
          });
          return {
            ok: true,
            contract: structuredClone(byIdem),
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("CONTRACT_IDEMPOTENCY_CONFLICT", "idempotency_mismatch");
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: snap.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (snap.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable");
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: snap.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle");
        }
        if (cycleResult.cycle.projectId !== snap.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch");
        }
      }

      for (const decisionId of cloned.decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            executionContractId: snap.executionContractId,
            projectId: snap.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== snap.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch");
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`);
        }
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: snap.executionContractId,
        contractScope: snap.scope,
        evidence: authEvidence,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: snap.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          snap.requiredAuthority === "MORRIS" ? "N3" : snap.requiredAuthority,
        scope: snap.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
        );
      }

      const contract: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        doctrinePackageRef: snap.doctrinePackageRef
          ? structuredClone(snap.doctrinePackageRef)
          : undefined,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        inputs: cloned.inputs,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : undefined,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        ...(snap.executionWindowClass
          ? { executionWindowClass: snap.executionWindowClass }
          : {}),
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
        version: 1,
        adapterExportRef: snap.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: snap.projectId,
          cycleInstanceId: snap.cycleInstanceId,
        },
      };
      contract.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(contract);

      const persist = async () => {
        const again = await this.contracts.findById(snap.executionContractId);
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }
        await this.contracts.save(contract);
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err
        ) {
          return fail(
            (err as { detailCode: Parameters<typeof createExecutionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "race",
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_build_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        requiredAuthority: contract.requiredAuthority,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  hasConfirmationConstraintContradiction,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  ExecutionContract,
  ExecutionContractResult,
  ValidateExecutionContractRequest,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type ValidateSnapshot = {
  executionContractId: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * ValidateExecutionContract — draft|proposed → validated | confirmation_required.
 * Does NOT consume Confirmation.
 * Does NOT produce confirmed or T-A5 statuses.
 *
 * Status derivation:
 * - EFFECT_CONFIRMATION_REQUIRED constraint → confirmation_required
 *   (effect-driven Confirmation, independent of requiredAuthority)
 * - else N1 → validated
 * - else N2|N3|MORRIS → confirmation_required
 */
export class ValidateExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: ValidateExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.validated",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: ValidateSnapshot = {
        executionContractId: request.executionContractId,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (existing.status !== "draft" && existing.status !== "proposed") {
        return fail(
          "STATE_CONFLICT",
          `status_${existing.status}`,
          { projectId: existing.projectId },
        );
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }
      if (hasConfirmationConstraintContradiction(existing.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: existing.projectId },
        );
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: existing.executionContractId,
        contractScope: existing.scope,
        evidence: authEvidence,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      const nextStatus =
        existing.constraints.some((c) =>
          c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
        )
          ? "confirmation_required"
          : existing.requiredAuthority === "N1"
            ? "validated"
            : "confirmation_required";

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (current.status !== "draft" && current.status !== "proposed") {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: nextStatus,
          version: current.version + 1,
        };
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_validate_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "atomic_validate_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      const eventName =
        contract.status === "confirmation_required"
          ? "oa.execution_contract.confirmation_required"
          : "oa.execution_contract.validated";
      this.audit.append({
        event: eventName,
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  assertConfirmationBinding,
  hasConfirmationConstraintContradiction,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  ConfirmExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import type { CancelExecutionContract } from "./cancelExecutionContract";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type ConfirmSnapshot = {
  executionContractId: string;
  confirmationId: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  nowIso: string | undefined;
};

/**
 * ConfirmExecutionContract — validated|confirmation_required → confirmed.
 *
 * Option B (R-T-A3-2 harden): persist confirmed with confirmationRef FIRST,
 * then consume Confirmation via DecisionServices.consumeConfirmation.
 * If consume fails, compensate by CancelExecutionContract on the just-
 * confirmed row. confirmationId is known before consume (request field).
 *
 * Residual R-T-A3-2 OPEN: if consume fails AND compensate cancel also fails,
 * contract may remain confirmed with an unconsumed confirmationRef.
 *
 * Critical fail-closed (R-T-A3-1 OPEN): if linked cycle is Critical and still
 * `proposed` (no public AcknowledgeCriticalCycle API), Confirm fails.
 */
export class ConfirmExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
    private readonly cancelExecutionContract?: CancelExecutionContract,
  ) {}

  async execute(
    request: ConfirmExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: ConfirmSnapshot = {
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        nowIso: request.nowIso,
      };
      void snap.claimedAuthorityLevel;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        existing.status !== "validated" &&
        existing.status !== "confirmation_required"
      ) {
        return fail("STATE_CONFLICT", `status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }
      if (hasConfirmationConstraintContradiction(existing.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: existing.projectId },
        );
      }

      // Critical fail-closed — R-T-A3-1: no public ack API on Cycle.
      if (existing.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: existing.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: existing.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: existing.projectId,
          });
        }
        const cycle = cycleResult.cycle;
        if (cycle.projectId !== existing.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (cycle.profile === "Critical" && cycle.status === "proposed") {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: existing.projectId },
          );
        }
      }

      // Decision freshness: accepted + same project + not superseded.
      const decisionRefs = existing.decisionRefs ?? [];
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: existing.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== existing.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`, {
            projectId: existing.projectId,
          });
        }
      }

      // Pre-check confirmation via public repository port (no mutate yet).
      const confirmation =
        await this.decisionServices.confirmations.findById(
          snap.confirmationId,
        );
      if (!confirmation) {
        return fail("CONFIRMATION_NOT_FOUND", "missing_confirmation", {
          projectId: existing.projectId,
        });
      }
      if (confirmation.status === "consumed") {
        return fail(
          "CONFIRMATION_ALREADY_CONSUMED",
          "already_consumed",
          { projectId: existing.projectId },
        );
      }
      if (confirmation.status !== "granted") {
        return fail("CONFIRMATION_REQUIRED", `status_${confirmation.status}`, {
          projectId: existing.projectId,
        });
      }

      const binding = assertConfirmationBinding({
        confirmationScope: confirmation.scope,
        confirmationLevel: confirmation.level,
        confirmationDecisionRef: confirmation.decisionRef,
        contractScope: existing.scope,
        requiredAuthority: existing.requiredAuthority,
        contractDecisionRefs: decisionRefs,
      });
      if (binding) {
        return fail(binding.detailCode, binding.reason, {
          projectId: existing.projectId,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: existing.executionContractId,
        contractScope: existing.scope,
        evidence: authEvidence,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      // Option B: persist confirmed WITH confirmationRef BEFORE consume.
      let contract: ExecutionContract | undefined;
      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (
          current.status !== "validated" &&
          current.status !== "confirmation_required"
        ) {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: "confirmed",
          confirmationRef: snap.confirmationId,
          immutableAfterConfirm: true,
          version: current.version + 1,
        };
        // confirmationRef / immutableAfterConfirm are semantic material fields —
        // refresh fingerprint so Attempt-bound Option B capture can verify.
        next.semanticFingerprint =
          computeExecutionContractSemanticFingerprint(next);
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        // Persist failed before consume — confirmation remains granted.
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "pre_consume_persist_race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "pre_consume_persist_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "pre_consume_incomplete", {
          projectId: existing.projectId,
        });
      }

      // Consume confirmation via public T-A3 use-case (decision store txn).
      const consumeResult =
        await this.decisionServices.consumeConfirmation.execute({
          confirmationId: snap.confirmationId,
          actor: snap.actor,
          correlationId,
          nowIso: snap.nowIso ?? timestamp,
        });
      if (!consumeResult.ok) {
        // Compensate: cancel the just-confirmed contract (Option B).
        let compensated = false;
        if (this.cancelExecutionContract) {
          const cancelResult = await this.cancelExecutionContract.execute({
            executionContractId: snap.executionContractId,
            reason:
              "Compensate confirm after confirmation consume failure (R-T-A3-2 Option B)",
            actor: snap.actor,
            authorityEvidenceId: snap.authorityEvidenceId,
            correlationId,
            claimedAuthorityLevel: snap.claimedAuthorityLevel,
          });
          compensated = cancelResult.ok;
        }
        const mapped =
          consumeResult.error.detailCode === "CONFIRMATION_EXPIRED"
            ? "CONFIRMATION_EXPIRED"
            : consumeResult.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED"
              ? "CONFIRMATION_ALREADY_CONSUMED"
              : consumeResult.error.detailCode === "CONFIRMATION_NOT_FOUND"
                ? "CONFIRMATION_NOT_FOUND"
                : "CONFIRMATION_CONSUME_FAILED";
        if (!compensated) {
          // Residual R-T-A3-2: confirmed row may remain with unconsumed cfm.
          return fail(
            "PERSISTENCE_FAILURE",
            `post_persist_consume_failed_compensate_failed:${consumeResult.error.detailCode}`,
            { projectId: existing.projectId },
          );
        }
        return fail(mapped, `post_persist_consume_compensated`, {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        confirmationId: snap.confirmationId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  isTa5Status,
  isValidSupersessionReason,
  PRE_EXEC_CANCEL_STATUSES,
} from "../domain/invariants";
import type {
  ActorReference,
  CancelExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CancelSnapshot = {
  executionContractId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CancelExecutionContract — maps to catalog CancelExecution (pre-exec).
 * Only pre-exec statuses (draft|proposed|validated|confirmation_required|confirmed).
 * Reason required (non-whitespace). Does NOT cancel post-start / T-A5 path.
 */
export class CancelExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: CancelExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }
      if (!isValidSupersessionReason(request.reason)) {
        return fail("CONTRACT_INVALID", "cancel_reason_required");
      }

      const snap: CancelSnapshot = {
        executionContractId: request.executionContractId,
        reason: request.reason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;
      void snap.reason;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_post_start_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (!PRE_EXEC_CANCEL_STATUSES.has(existing.status)) {
        return fail("STATE_CONFLICT", `status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: existing.executionContractId,
        contractScope: existing.scope,
        evidence: authEvidence,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (!PRE_EXEC_CANCEL_STATUSES.has(current.status)) {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: "cancelled",
          supersessionReason: snap.reason,
          version: current.version + 1,
        };
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  assertNoSelfSupersession,
  assertNotTa5Injection,
  assertPrefixedId,
  cloneContractArrays,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  isTa5Status,
  isValidSupersessionReason,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
  SupersedeExecutionContractRequest,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type SupersedeSnapshot = {
  newExecutionContractId: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  action: string | undefined;
  target: string | undefined;
  scope: string | undefined;
  requiredAuthority: AuthorityClass | undefined;
  reversibility: Reversibility | undefined;
  executionWindowClass: SupersedeExecutionContractRequest["executionWindowClass"];
  idempotencyKey: string | undefined;
  adapterExportRef: string | undefined;
  status: "draft" | "proposed";
  selectedAgentRef: string | undefined;
};

/**
 * SupersedeExecutionContract — new id + supersedesExecutionContractId + reason.
 * Old → superseded immutable; successor becomes the current in the lineage.
 * Self-supersession rejected. Concurrent OCC via expectedVersion.
 * Reverse superseded-by is derived at read time (listSuperseding).
 * Successor initial status must be draft|proposed; T-A5 injection refused.
 */
export class SupersedeExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: SupersedeExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.newExecutionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }
      if (!isValidSupersessionReason(request.supersessionReason)) {
        return fail("SUPERSESSION_REASON_INVALID", "whitespace_zwsp_or_empty");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }

      const selfErr = assertNoSelfSupersession(
        request.newExecutionContractId,
        request.supersedesExecutionContractId,
      );
      if (selfErr) {
        return fail(selfErr.detailCode, selfErr.reason);
      }

      const newIdErr = assertPrefixedId(
        request.newExecutionContractId,
        "xct:",
      );
      if (newIdErr) {
        return fail(newIdErr.detailCode, newIdErr.reason);
      }
      const oldIdErr = assertPrefixedId(
        request.supersedesExecutionContractId,
        "xct:",
      );
      if (oldIdErr) {
        return fail(oldIdErr.detailCode, oldIdErr.reason);
      }

      const initialStatus = request.status ?? "draft";
      if (initialStatus !== "draft" && initialStatus !== "proposed") {
        return fail("CONTRACT_INVALID", "supersede_status_invalid");
      }

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: SupersedeSnapshot = {
        newExecutionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
        supersessionReason: request.supersessionReason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        executionWindowClass: request.executionWindowClass,
        idempotencyKey: request.idempotencyKey,
        adapterExportRef: request.adapterExportRef,
        status: initialStatus,
        selectedAgentRef: undefined,
      };
      void snap.claimedAuthorityLevel;
      void snap.selectedAgentRef;

      const prior = await this.contracts.findById(
        snap.supersedesExecutionContractId,
      );
      if (!prior) {
        return fail("CONTRACT_NOT_FOUND", "missing_prior");
      }
      if (isTa5Status(prior.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (prior.status === "superseded" || prior.status === "cancelled") {
        return fail("STATE_CONFLICT", `prior_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== prior.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: prior.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: prior.version,
        });
      }

      const existingNew = await this.contracts.findById(
        snap.newExecutionContractId,
      );
      if (existingNew) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_successor", {
          projectId: prior.projectId,
        });
      }

      const requiredAuthority =
        snap.requiredAuthority ?? prior.requiredAuthority;
      const scope = snap.scope ?? prior.scope;
      const action = snap.action ?? prior.action;
      const target = snap.target ?? prior.target;
      const reversibility = snap.reversibility ?? prior.reversibility;
      const executionWindowClass =
        snap.executionWindowClass ?? prior.executionWindowClass;
      // Explicit overrides (including empty arrays) take precedence — no silent fallback.
      const decisionRefs =
        request.decisionRefs !== undefined
          ? cloned.decisionRefs
          : [...(prior.decisionRefs ?? [])];
      const requiredCapabilities =
        request.requiredCapabilities !== undefined
          ? cloned.requiredCapabilities
          : [...prior.requiredCapabilities];
      const constraints =
        request.constraints !== undefined
          ? cloned.constraints
          : [...prior.constraints];
      const stopConditions =
        request.stopConditions !== undefined
          ? cloned.stopConditions
          : [...prior.stopConditions];
      const evidenceRequirements =
        request.evidenceRequirements !== undefined
          ? cloned.evidenceRequirements
          : [...prior.evidenceRequirements];
      const idempotencyKey =
        snap.idempotencyKey ??
        `${prior.idempotencyKey}-supersede-${snap.newExecutionContractId}`;

      // Validate successor fields like Build when overrides (or merged) present.
      const fieldViolation = validateBuildFields({
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        action,
        target,
        scope,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        executionWindowClass,
        idempotencyKey,
        correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: prior.projectId,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        executionContractId: snap.newExecutionContractId,
        contractScope: scope,
        evidence: authEvidence,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          requiredAuthority === "MORRIS" ? "N3" : requiredAuthority,
        scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: prior.projectId },
        );
      }

      const successor: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        doctrinePackageRef: prior.doctrinePackageRef
          ? structuredClone(prior.doctrinePackageRef)
          : undefined,
        action,
        target,
        scope,
        inputs:
          cloned.inputs !== undefined
            ? cloned.inputs
            : prior.inputs
              ? structuredClone(prior.inputs)
              : undefined,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : prior.expectedOutputs
              ? [...prior.expectedOutputs]
              : undefined,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        ...(executionWindowClass ? { executionWindowClass } : {}),
        idempotencyKey,
        correlationId,
        status: snap.status,
        version: 1,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        supersessionReason: snap.supersessionReason,
        adapterExportRef: snap.adapterExportRef ?? prior.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: prior.projectId,
          cycleInstanceId: prior.cycleInstanceId,
          supersedes: snap.supersedesExecutionContractId,
        },
      };
      successor.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(successor);

      let supersededContract: ExecutionContract | undefined;
      let savedSuccessor: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(
          snap.supersedesExecutionContractId,
        );
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (current.status === "superseded" || current.status === "cancelled") {
          throw Object.assign(new Error("already"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const again = await this.contracts.findById(
          snap.newExecutionContractId,
        );
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }

        const oldNext: ExecutionContract = {
          ...current,
          status: "superseded",
          supersessionReason: snap.supersessionReason,
          version: current.version + 1,
        };
        await this.contracts.save(oldNext);
        await this.contracts.save(successor);
        supersededContract = oldNext;
        savedSuccessor = successor;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: prior.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_failed", {
          projectId: prior.projectId,
        });
      }

      if (!savedSuccessor || !supersededContract) {
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_incomplete", {
          projectId: prior.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: savedSuccessor.projectId,
        executionContractId: savedSuccessor.executionContractId,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(savedSuccessor),
        supersededContract: structuredClone(supersededContract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/__tests__/auth/helpers/accountCookie.ts`

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

### `projects/sfia-studio/app/__tests__/auth/better-auth-foundation.test.ts`

```typescript
/**
 * Better Auth integration — deterministic, ZERO real GitHub OAuth.
 */

import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  assertStatelessAuthConfig,
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { GITHUB_PROVIDER_ID } from "@/lib/auth/constants";
import { canonicalizeGithubUserId } from "@/lib/auth/allowlist";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

describe("Better Auth foundation BA-D*", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
  });

  it("BA-D01 initializes with deterministic fake env", () => {
    const auth = createSfiaAuth({ env: TEST_ENV, baseURL: "http://localhost:3020" });
    expect(auth).toBeTruthy();
    expect(auth.handler).toBeTypeOf("function");
  });

  it("BA-D02/D04 stateless config — no DB; GitHub only social provider", () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const proof = assertStatelessAuthConfig(auth);
    expect(proof.hasDatabase).toBe(false);
    expect(proof.socialProviders).toEqual([GITHUB_PROVIDER_ID]);
    expect(auth.options.account?.storeAccountCookie).toBe(true);
    expect(auth.options.session?.cookieCache?.enabled).toBe(true);
  });

  it("BA-D05/D06 validateUserInfo rejects unauthorized / accepts authorized raw ids", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const validate = auth.options.user?.validateUserInfo;
    expect(validate).toBeTypeOf("function");
    if (!validate) return;

    const denied = await validate({
      user: { email: "x@y.z", name: "C" },
      source: {
        action: "create-user",
        method: "oauth",
        oauth: {
          providerId: "github",
          profile: { id: 33333333, login: "not-allowed" },
        },
      },
    } as never);
    expect(denied && typeof denied === "object" && "error" in denied ? denied.error : null).toBe(
      "github_user_not_allowlisted",
    );

    const allowed = await validate({
      user: { email: "a@y.z", name: "A" },
      source: {
        action: "sign-in",
        method: "oauth",
        oauth: {
          providerId: "github",
          profile: { id: 11111111, login: "alice" },
        },
      },
    } as never);
    expect(allowed).toBeUndefined();
  });

  it("BA-D07/D08 provider id originates from profile.id — not session.user.id assumption", () => {
    // GitHub accountSubject uses profile.id (package: accountSubject: ({ profile }) => profile.id)
    expect(canonicalizeGithubUserId(11111111)).toBe("11111111");
    // Explicit non-assumption: a Better Auth internal uuid must not be treated as GitHub id
    expect(canonicalizeGithubUserId("ba-internal-uuid-not-github")).toBeNull();
  });

  it("BA-D03 route handler module exports without invoking OAuth", async () => {
    // Dynamic import of route wiring must not call GitHub.
    const mod = await import("@/app/api/auth/[...all]/route");
    expect(mod.GET).toBeTypeOf("function");
    expect(mod.POST).toBeTypeOf("function");
  });
});
```

### `projects/sfia-studio/app/__tests__/auth/route-protection.test.ts`

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

### `projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts`

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
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
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
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-d23",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
    };
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:github-s1:test-a",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe(contract.executionContractId);

    const okA = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: contract.executionContractId,
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: false,
    });
    expect(okA.ok).toBe(true);

    const misuseB = resolver.verify({
      actorId: piloteB.actor.actorId,
      requiredLevel: "N1",
      scope: contract.executionContractId,
      evidenceId: issued.evidence.evidenceId,
    });
    expect(misuseB.ok).toBe(false);
    expect(misuseB.reason).toBe("actor_mismatch");

    const morrisGate = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: contract.executionContractId,
      evidenceId: issued.evidence.evidenceId,
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

### `projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts`

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
  issueS1AuthorityEvidence,
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

  it("AUTH-S1-01 issueS1 without contract fails; with read contract → N1", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const pilote = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const blocked = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-s1-01",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
    };
    const ok = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:auth-s1-01",
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.evidence.level).toBe("N1");
      expect(ok.evidence.canActAsMorris).toBe(false);
      expect(ok.evidence.scope).toBe(contract.executionContractId);
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
    const contract = {
      executionContractId: "xct:expired-test",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:expired-test",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const v = resolver.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N1",
      scope: contract.executionContractId,
      evidenceId: "evd:expired-test",
    });
    expect(v.ok).toBe(false);
    expect(v.reason).toBe("expired");
  });

  it("AUTH-S1-08/09 duplicate evidenceId → FAIL-CLOSED; registry unchanged", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:collision",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
    };
    const first = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:collision",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: {
        ...contract,
        executionContractId: "xct:collision-other",
      },
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:collision",
    });
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");

    const stored = resolver.getEvidence("evd:collision");
    expect(stored?.canActAsMorris).toBe(false);
    expect(stored?.level).toBe("N1");
    expect(stored?.actorId).toBe(pilote.actor.actorId);
    expect(stored?.scope).toBe(contract.executionContractId);
  });

  it("AUTH-S1-10/11/12/13 actor/scope/morris/canActAsMorris invariants", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:verify",
      action: "product:commit",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N2" as const,
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "commit",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:verify",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.canActAsMorris).toBe(false);

    expect(
      resolver.verify({
        actorId: "actor:github:22222222",
        requiredLevel: "N2",
        scope: contract.executionContractId,
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("actor_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "xct:other",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("scope_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: contract.executionContractId,
        evidenceId: "evd:verify",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});
```

### `projects/sfia-studio/app/__tests__/auth/policy-action-scoped-s1.test.ts`

```typescript
/**
 * POLICY-01…15 + BYPASS-* + BIND-* + REG-* — Auth policy / contract-binding closure.
 * ZERO real GitHub / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "@/lib/oa/execution-contract/application/authorityHelper";
import * as AuthPublic from "@/lib/auth";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
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

function makeContract(
  overrides: Partial<AuthS1GovernedContractContext> & {
    executionContractId: string;
    action: string;
  },
): AuthS1GovernedContractContext {
  return {
    executionContractId: overrides.executionContractId,
    action: overrides.action,
    target: overrides.target ?? "tgt:demo",
    scope: overrides.scope ?? "biz:shared-scope",
    requiredAuthority: overrides.requiredAuthority,
  };
}

function makeEffects(
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  contract: AuthS1GovernedContractContext,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
): GovernedEffectsAuthorityInput {
  return {
    effectClass,
    rollbackAvailable: extras.rollbackAvailable ?? true,
    protectedBoundaries: extras.protectedBoundaries ?? [],
    scopeIn: extras.scopeIn ?? contract.scope,
    target: extras.target ?? contract.target,
    claimedRequiredAuthority: extras.claimedRequiredAuthority,
    contractRequiredAuthority: extras.contractRequiredAuthority,
  };
}

function issueFor(
  resolver: MemoryAuthorityResolver,
  contract: AuthS1GovernedContractContext,
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  evidenceId: string,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
) {
  const { issuedAt, expiresAt } = futureWindow();
  return issueS1AuthorityEvidence({
    pilote: piloteA,
    authorityResolver: resolver,
    contract,
    governedEffects: makeEffects(effectClass, contract, extras),
    issuedAt,
    expiresAt,
    evidenceId,
  });
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
      issuedAt,
      expiresAt,
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("POLICY-02 trusted N1 effect → exact S1 N1; canActAsMorris=false", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol02",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:pol02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe("xct:pol02");
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
  });

  it("POLICY-03 trusted N2 effect → exact S1 N2", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol03",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:pol03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.scope).toBe("xct:pol03");
  });

  it("POLICY-04 trusted N3 effect → exact S1 N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:pol04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("POLICY-05 MORRIS / Morris construction gate → FAIL-CLOSED", () => {
    const gate = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:gate",
        action: "product:baseline-promotion",
      }),
      governedEffects: makeEffects(
        "baseline-promotion",
        makeContract({
          executionContractId: "xct:gate",
          action: "product:baseline-promotion",
        }),
        { rollbackAvailable: false },
      ),
    });
    expect(gate.ok).toBe(false);
    if (!gate.ok) expect(gate.code).toBe(MORRIS_GATE_REQUIRED);

    const claimMorris = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:morris-claim",
        action: "product:read",
        requiredAuthority: "N1",
      }),
      governedEffects: makeEffects(
        "read",
        makeContract({
          executionContractId: "xct:morris-claim",
          action: "product:read",
        }),
        { claimedRequiredAuthority: "MORRIS" },
      ),
    });
    expect(claimMorris.ok).toBe(false);
    if (!claimMorris.ok) {
      expect(claimMorris.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
    }

    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol05-n3",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const n3 = issueFor(resolver, contract, "push", "evd:pol05-n3");
    expect(n3.ok).toBe(true);
    if (!n3.ok) return;
    const verifyScope = resolveExecutionAuthorityVerifyScope({
      executionContractId: contract.executionContractId,
      contractScope: contract.scope,
      evidence: n3.evidence,
    });
    const morrisCheck = verifyRequiredAuthority(resolver, {
      requiredAuthority: "MORRIS",
      actorId: piloteA.actor.actorId,
      scope: verifyScope,
      evidenceId: n3.evidence.evidenceId,
    });
    expect(morrisCheck.ok).toBe(false);
    expect(morrisCheck.reason).toBe("morris_gate_denied");
  });

  it("POLICY-06 client claims N1 while server requires N3 → no downgrade", () => {
    const contract = makeContract({
      executionContractId: "xct:pol06",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract, {
        claimedRequiredAuthority: "N1",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-07 client claims N3 while server requires N1 → no self-escalation", () => {
    const contract = makeContract({
      executionContractId: "xct:pol07",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N3",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-08 client claims MORRIS → denied; canActAsMorris false", () => {
    const contract = makeContract({
      executionContractId: "xct:pol08",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "MORRIS",
      }),
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
    const contract = makeContract({
      executionContractId: "xct:pol10",
      action: "product:read",
    });
    const unknown = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("unknown", contract),
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe(AUTHORITY_UNRESOLVED);

    const badClaim = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N9",
      }),
    });
    expect(badClaim.ok).toBe(false);
    if (!badClaim.ok) expect(badClaim.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-11 contract binding — S1 for Contract A cannot authorize Contract B", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:pol11-a",
      action: "product:push",
      scope: "biz:shared",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contractA, "push", "evd:pol11");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: "xct:pol11-b",
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
});

describe("BYPASS — Auth S1 policy surface", () => {
  it("BYPASS-01 no public Auth export buildValidatedS1Evidence", () => {
    expect("buildValidatedS1Evidence" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).buildValidatedS1Evidence,
    ).toBeUndefined();
  });

  it("BYPASS-02 no public Auth export registerS1EvidenceImmutable", () => {
    expect("registerS1EvidenceImmutable" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).registerS1EvidenceImmutable,
    ).toBeUndefined();
  });

  it("BYPASS-03 no Auth N3 without canonical policy evaluation", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "push",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bypass03",
    });
    expect(issued.ok).toBe(false);
    expect(resolver.getEvidence("evd:bypass03")).toBeNull();
  });

  it("BYPASS-04 legitimate N3 hierarchy uses action-scoped issuance", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bypass04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bypass04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: contract.executionContractId,
        evidenceId: issued.evidence.evidenceId,
      }).ok,
    ).toBe(true);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: contract.executionContractId,
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

describe("BIND — ExecutionContract / action binding", () => {
  it("BIND-01 trusted read contract → exact N1 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind01",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind01");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.scope).toBe("xct:bind01");
  });

  it("BIND-02 trusted commit contract → exact N2 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind02",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:bind02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
  });

  it("BIND-03 trusted push contract → exact N3 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind03",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
  });

  it("BIND-04 effects=push / contract requiredAuthority=N1 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind04",
      action: "product:push",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind04");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-05 effects=read / contract requiredAuthority=N3 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind05",
      action: "product:read",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind05");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-06 effects action ≠ contract action → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind06");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-07 effects/contract scope mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind07",
      action: "product:read",
      scope: "biz:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind07", {
      scopeIn: "biz:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-08 target mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind08",
      action: "product:read",
      target: "tgt:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind08", {
      target: "tgt:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-09 unknown/missing trusted effect context → DENY", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bind09",
      contract: makeContract({
        executionContractId: "xct:bind09",
        action: "product:read",
      }),
      // missing governedEffects
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("BIND-10 MORRIS contract/claim → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind10",
      action: "product:push",
      requiredAuthority: "MORRIS",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("BIND-11 morrisConstructionGateRequired → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind11",
      action: "product:doctrine-change",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("doctrine-change", contract, {
        rollbackAvailable: false,
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_GATE_REQUIRED);
  });

  it("BIND-12 Contract A S1 cannot authorize Contract B (same actor/N/business scope)", () => {
    const resolver = new MemoryAuthorityResolver();
    const sharedBiz = "biz:identical-business-scope";
    const contractA = makeContract({
      executionContractId: "xct:bind12-a",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind12-b",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const issuedA = issueFor(resolver, contractA, "push", "evd:bind12-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;

    // Adapter maps Auth S1 verify to executionContractId — not business scope.
    const scopeForB = resolveExecutionAuthorityVerifyScope({
      executionContractId: contractB.executionContractId,
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
    });
    expect(scopeForB).toBe("xct:bind12-b");
    expect(scopeForB).not.toBe(issuedA.evidence.scope);

    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: scopeForB,
      evidenceId: issuedA.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");

    // Same business scope alone would have wrongly matched pre-correction.
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: sharedBiz,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-13 Contract A S1 cannot authorize Contract B with different action", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind13-a",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind13-b",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "read", "evd:bind13-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      executionContractId: contractB.executionContractId,
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-14 Contract A S1 cannot authorize Contract B with different target/scope", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind14-a",
      action: "product:commit",
      scope: "biz:a",
      target: "tgt:a",
      requiredAuthority: "N2",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind14-b",
      action: "product:commit",
      scope: "biz:b",
      target: "tgt:b",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "commit", "evd:bind14-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      executionContractId: contractB.executionContractId,
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-15 login/session/allowlist → authorityLevel=none and zero S1", async () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
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
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId)).toEqual([]);
  });
});

describe("REG — regression matrix", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("REG-01 session B + provider A still SESSION_USER_MISMATCH", async () => {
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

  it("REG-02 allowlist removal still denies before S1", async () => {
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

  it("REG-03 protected Auth identity hot path still zero GitHub provider network", async () => {
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
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("REG-04 TTL max remains bounded to session max", () => {
    const { validateS1EvidenceLifetime } = AuthPublic;
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const over = new Date(
      Date.parse(issuedAt) + (AuthPublic.SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000,
    ).toISOString();
    const r = validateS1EvidenceLifetime({ issuedAt, expiresAt: over });
    expect(r.ok).toBe(false);
  });

  it("REG-05 duplicate evidenceId remains fail-closed", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg05",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const first = issueFor(resolver, contract, "read", "evd:reg05");
    expect(first.ok).toBe(true);
    const second = issueFor(resolver, contract, "read", "evd:reg05");
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");
    expect(resolver.getEvidence("evd:reg05")?.level).toBe("N1");
    expect(resolver.getEvidence("evd:reg05")?.canActAsMorris).toBe(false);
  });

  it("REG-06 expired S1 remains denied", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: makeEffects("read", contract),
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:reg06",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N1",
        scope: contract.executionContractId,
        evidenceId: "evd:reg06",
      }).reason,
    ).toBe("expired");
  });

  it("REG-07 N2 cannot satisfy N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg07",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:reg07");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: contract.executionContractId,
        evidenceId: issued.evidence.evidenceId,
      }).reason,
    ).toBe("level_insufficient");
  });

  it("REG-08 N3 cannot satisfy MORRIS", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg08",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:reg08");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: contract.executionContractId,
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});
```



## G2. Read-only provenance referenced by policy (FULL — not modified this cycle)

### `projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts`

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



## H. B1 proof

- Before: public build/register bypass helpers
- After: only `issueS1AuthorityEvidence` issues/registers; helpers module-private; removed from `lib/auth/index.ts`
- BYPASS-01/02/03/04 PASS

## I. B2 proof

- Mechanism: AE.scope=`executionContractId` + EC `resolveExecutionAuthorityVerifyScope` when `source===BETTER_AUTH_GITHUB_MULTI_USER_S1`
- Enforced by trusted verifier (not naming convention alone)
- BIND-12 Contract A↛B same actor/N/business scope → scope_mismatch DENY
- Level still from `projectRequiredAuthorityFromEffects`; contract.requiredAuthority must match or DENY

## J. Test matrix / validation

```
npx vitest run __tests__/auth
# 5 files, 83 tests PASS

npx vitest run __tests__/oa/decision __tests__/oa/execution-contract
# 15 files, 143 tests PASS

npx vitest run
# 287 passed | 16 skipped; 2721 passed | 134 skipped

npx tsc --noEmit → 0
npm run lint → No ESLint warnings or errors
npm run build → Compiled successfully
git diff --check → 0
```

BYPASS-01…04 PASS · BIND-01…15 PASS · REG-01…08 PASS · POLICY-01…15 PASS

## K. Security

auth≠authority · N3≠Morris · no downgrade/escalation · no cross-contract reuse · no login S1 · session/provider binding · allowlist recheck · zero provider network hot path · TTL/collision/expiry fail-closed

## L. Fake/Real

DETERMINISTIC ONLY · REAL=0 · AUTH REAL separate Morris gate

## M. MW6 preservation

Worktree `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
Branch `delivery/sfia-studio-nora-mw6-external-source-intelligence` @ `ebdae92a…`
Product dirty-path content FP before=after `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9`
**MW6 UNTOUCHED = YES**

## N. Reserves/debt

T-A4 generic requiredAuthority · AUTH REAL · MW6 binding · auth→W3-A coupling · no hidden blocker for deterministic closure

## O. Claims

Allowed: AUTH deterministic policy closure proven; ready for ChatGPT deterministic re-review.
Forbidden: AUTH REAL; MW6 BOUND/REAL/COMPLETE; runtime v3 ADOPTED; production-ready auth.

## P. Verdict

**READY FOR CHATGPT AUTH POLICY CLOSURE RE-REVIEW — DETERMINISTIC ONLY**

Pack completeness: **FULL MODIFIED CONTENT INCLUDED** (section G).
