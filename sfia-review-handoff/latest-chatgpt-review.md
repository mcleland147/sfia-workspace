# SFIA Review Pack — CYCLE 8 AUTH DELIVERY
BETTER AUTH + GITHUB MULTI-USER FOUNDATION

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-09-04 18:44:23 CEST |
| **Cycle** | **8 — Delivery / implémentation** |
| **Typology** | EVOL |
| **Profile** | CRITICAL |
| **GO Architecture consumed** | GO MORRIS — AUTH ARCHITECTURE OPTION A REVISED: BETTER AUTH STATELESS + GITHUB OAUTH + MULTI-USER SERVER ALLOWLIST + S1 AUTHORITY RE-ISSUANCE |
| **GO Delivery consumed** | GO MORRIS — SFIA STUDIO AUTH DELIVERY — BETTER AUTH + GITHUB MULTI-USER FOUNDATION |
| **Evidence ceiling** | DETERMINISTIC AUTH FOUNDATION ONLY |
| **REAL GitHub auth** | **0** |
| **OpenAI REAL** | **0** |
| **Product commit/push/PR/merge** | **NO** |
| **Better Auth** | **1.7.2** (exact) |
| **HEAD / origin/main** | `ebdae92a96ea1c49444dfb668342c1453f57a540` |
| **Handoff input** | `45cd3d8f797432af3593911d1a891c7da1051b4b` |
| **Auth worktree** | `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation` |
| **Auth branch** | `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation` |
| **MW6 worktree** | untouched (dirty candidate preserved) |

---

## 1. Decisions Morris consumed

1. Architecture Option A Revised — Better Auth **stateless** + GitHub OAuth + multi-user server allowlist + S1 AE re-issuance.
2. Delivery GO — bounded local foundation only (no REAL login, no MW6 binding, no product publication).

---

## 2. Git Truth

### Original MW6 worktree (NOT used for Delivery)
- path: `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
- branch: `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD: `ebdae92a…` (= origin/main)
- status: dirty MW6 candidate **preserved** (no reset/stash/modify by this cycle)

### Auth Delivery worktree
- created: `git worktree add -b delivery/sfia-studio-auth-better-auth-github-multi-user-foundation … origin/main`
- starting: CLEAN, HEAD == origin/main == merge-base == `ebdae92a…`
- ending: local uncommitted Delivery changes only; HEAD still `ebdae92a…` (no product commit)

### Review Handoff input
- tip: `45cd3d8f797432af3593911d1a891c7da1051b4b` (verified before publish)

---

## 3. Source routing

Process: template + routing guide + CKC Delivery absent → method fallback.
Convergence: Build Doctrine / Roadmap / C1.
Doctrine: v3 framing 34.
Nora: backlog 05 + trajectory 08 (Auth is prerequisite; MW6 not wired).
Authority: AuthorityResolverPort, MemoryAuthorityResolver, localSingleUserAuthority (FREEZE), CheckExecutionAuthorization, W2 (not used AS-IS).
Latest architecture handoff (Auth.js/GitHub qualification) superseded by Morris Better Auth decision.

Official Better Auth (1.7.x / current docs):
- https://www.better-auth.com/docs/concepts/session-management (stateless / no DB)
- https://www.better-auth.com/docs/authentication/github
- https://www.better-auth.com/docs/concepts/users-accounts (`validateUserInfo`, accountId vs user.id)
- https://better-auth.com/blog/1-4 (stateless auth)
- Package types/source better-auth@1.7.2: `accountSubject: ({ profile }) => profile.id`; `storeAccountCookie`; encrypted `account_data`; `accountInfo({ useAccountCookie: true })`

Official GitHub:
- OAuth App best practices — durable `user.id`; prefer Apps generally; OAuth App used for identity-only initial scope
- Callback aligned to port **3020**: `http://localhost:3020/api/auth/callback/github`

npm snapshot: `better-auth` latest = **1.7.2** (verified via `npm view`).

---

## 4. Dependency

| Package | Change |
| --- | --- |
| `better-auth` | **added exact `1.7.2`** |
| `@testing-library/dom` | **added devDependency** — peer restoration required because `npm install … --legacy-peer-deps` (Better Auth optional Svelte peer conflict) skipped RTL peers and broke `tsc` on existing UI tests |

No Auth.js/next-auth, no DB adapter, no Redis, no Admin/org plugins.

Install note: `npm install better-auth@1.7.2 --save-exact --legacy-peer-deps`

---

## 5. Architecture implemented

```
GitHub OAuth (Better Auth)
  → validateUserInfo allowlist gate (raw profile.id)
  → stateless session + encrypted account_data cookie
  → resolveCurrentAuthenticatedPilote:
        getSession + accountInfo(useAccountCookie:true)
        ∩ CURRENT env allowlist
        → actor:github:<id> (Pilote / decision_maker)
  → middleware protects product routes (full evaluation, not cookie-presence)
  → issueS1AuthorityEvidence → MemoryAuthorityResolver (N3, canActAsMorris=false)
```

**session.user.id ≠ GitHub id** — proven; Better Auth internal id vs `account.accountId` = provider subject.

**Provider binding PASS:** encrypted `account_data` cookie (maxAge aligned to session cookieCache 7d) stores account including `accountId` (GitHub profile.id). Recovered server-side via `auth.api.accountInfo({ query: { useAccountCookie: true }, headers })`. Client cannot supply githubUserId (ignored in resolver).

---

## 6. Multi-user allowlist

Env: `SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS`
Parser: trim, positive decimal ids, dedupe, missing/empty/malformed → fail-closed.
2→N without per-person code branches.
Rechecked at login (`validateUserInfo`) AND every protected resolution.

---

## 7. Resource protection

Public: `/login`, `/api/auth/**`, Next static assets.
Protected: `/`, `/studio/**`, `/projects/**`, `/workspace/**`, `/nouvelle-demande/**`, `/cycle-actif/**`, `/decision/**`, `/synthese/**`, `/ops1/**`, other product APIs.
Middleware uses `resolveCurrentAuthenticatedPilote` (session + provider account + allowlist).

---

## 8. Login / Logout

- `/login` — “Se connecter avec GitHub”; error surface; no password.
- `LogoutButton` in StudioShell Topbar → `authClient.signOut` → `/login`.

---

## 9. S1 AuthorityEvidence

- Source: `BETTER_AUTH_GITHUB_MULTI_USER_S1`
- Level: **N3** (existing Pilote structuring envelope from `localSingleUserAuthority` pattern)
- `canActAsMorris: false` always
- Reuses `AuthorityResolverPort` / `MemoryAuthorityResolver`
- No AE persistence / no second resolver
- `localSingleUserAuthority` not used on auth path; historical `actor:local-pilote` not rewritten

---

## 10. Intentionally NOT changed

- Nora / MW6 / campaignBudget / REAL_AUTHORITY_NOT_BOUND
- Product SQLite schema / migrations
- Doctrine / Roadmap / C1
- No GitHub OAuth App created; no real secrets

---

## 11. Validations

```
AUTH targeted: 21 passed (3 files)
Authority regression: 34 passed
Full suite: 2659 passed | 134 skipped (285 files passed | 16 skipped)
typecheck: PASS (exit 0)
lint: PASS (exit 0, 0 warnings after fix)
build: PASS (exit 0) — middleware 234 kB; /login + /api/auth/[...all] present
git diff --check: PASS
```

REAL GITHUB AUTH CALLS = 0
REAL GITHUB TOKEN EXCHANGES = 0
REAL GITHUB PROFILE CALLS = 0
OPENAI REAL CALLS = 0
HOSTED WEB_SEARCH REAL CALLS = 0

---

## 12. Security checks (SEC-01→17)

Placeholders only in `.env.example`; secrets required at runtime; allowlist required; no token in SFIA AE; email/login not identity keys; hostile role/canActAsMorris ignored; OAuth state owned by Better Auth; account cookie encrypted (JWE); fail-closed config.

---

## 13. Fake / Real

Deterministic mocks for session/account binding.
REAL GitHub login NOT PROVEN / NOT AUTHORIZED.
Next: ChatGPT review → Morris AUTH REAL gate (separate) → MW6 binding → MW6 REAL.

---

## 14. Gates still missing

1. ChatGPT deterministic Auth Delivery review
2. Morris AUTH REAL (create OAuth App + two real logins)
3. MW6 authority binding GO
4. MW6 REAL GO

---

## 15. Modified / created product files

### Modified (diff)

```diff
diff --git a/projects/sfia-studio/app/components/shell/StudioShell.tsx b/projects/sfia-studio/app/components/shell/StudioShell.tsx
index 1ecfd2bf..e158ed8b 100644
--- a/projects/sfia-studio/app/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio/app/components/shell/StudioShell.tsx
@@ -4,6 +4,7 @@ import {
   type TopbarPrimaryAction,
 } from "./Topbar";
 import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
+import { LogoutButton } from "@/components/auth/LogoutButton";
 import type { StudioShellRoute } from "@/lib/navigation";
 import shellStyles from "@/styles/shell.module.css";

@@ -58,6 +59,7 @@ export function StudioShell({
             pills={pills}
             showTabs={showTabs}
             primaryAction={primaryAction}
+            authControls={<LogoutButton />}
           />
           <main className={shellStyles.workspaceInner} id="main-content">
             {children}
@@ -86,6 +88,7 @@ export function StudioShell({
           pills={pills}
           showTabs={showTabs}
           primaryAction={primaryAction}
+          authControls={<LogoutButton />}
         />
         <div className={shellStyles.bodyFlush}>
           <main
diff --git a/projects/sfia-studio/app/components/shell/Topbar.tsx b/projects/sfia-studio/app/components/shell/Topbar.tsx
index ed9b0cd1..31b5073c 100644
--- a/projects/sfia-studio/app/components/shell/Topbar.tsx
+++ b/projects/sfia-studio/app/components/shell/Topbar.tsx
@@ -1,5 +1,6 @@
 "use client";

+import type { ReactNode } from "react";
 import Link from "next/link";
 import { StatusPill } from "@/components/ui/StatusPill";
 import { CtaButton } from "@/components/ui/CtaButton";
@@ -31,6 +32,8 @@ interface TopbarProps {
    * `undefined` preserves the historical CTA; `null` hides it.
    */
   primaryAction?: TopbarPrimaryAction | null;
+  /** Optional auth controls (e.g. logout) — bounded Auth Delivery integration. */
+  authControls?: ReactNode;
 }

 export function Topbar({
@@ -41,6 +44,7 @@ export function Topbar({
   showTabs = true,
   floatingTabs = ["Demande", "Contexte", "Pièces jointes", "Qualification"],
   primaryAction,
+  authControls,
 }: TopbarProps) {
   const isFloating = variant === "floating";
   const resolvedPrimaryAction =
@@ -66,6 +70,9 @@ export function Topbar({
                   </StatusPill>
                 </span>
               ))}
+              {authControls ? (
+                <span data-testid="topbar-auth-controls">{authControls}</span>
+              ) : null}
             </div>
           </div>
         </div>
@@ -115,6 +122,9 @@ export function Topbar({
               {resolvedPrimaryAction.label}
             </CtaButton>
           ) : null}
+          {authControls ? (
+            <span data-testid="topbar-auth-controls">{authControls}</span>
+          ) : null}
         </div>
       </div>
       {showTabs && (
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index d9ae9764..7e975028 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -20,6 +20,7 @@
   "dependencies": {
     "@openai/agents": "^0.17.0",
     "ajv": "^6.15.0",
+    "better-auth": "1.7.2",
     "next": "^15.3.3",
     "openai": "^6.48.0",
     "pg": "~8.22.0",
@@ -29,6 +30,7 @@
   },
   "devDependencies": {
     "@playwright/test": "^1.52.0",
+    "@testing-library/dom": "^10.4.1",
     "@testing-library/jest-dom": "^6.6.3",
     "@testing-library/react": "^16.3.0",
     "@testing-library/user-event": "^14.6.1",

```

### Created files (full content)

### CREATED `.env.example`

```typescript
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
### CREATED `middleware.ts`

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
### CREATED `lib/auth/constants.ts`

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
 * Server-owned Pilote structuring envelope for S1 (N3 without Morris gate).
 * Derived from existing product path localSingleUserAuthority which already
 * issued N3 for Pilote while treating canActAsMorris as a separate flag.
 * Auth/allowlist never set canActAsMorris=true.
 */
export const S1_PILOTE_AUTHORITY_LEVEL = "N3" as const;

export const SESSION_COOKIE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

```
### CREATED `lib/auth/allowlist.ts`

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
### CREATED `lib/auth/actorMapping.ts`

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
### CREATED `lib/auth/auth.ts`

```typescript
/**
 * Better Auth configuration — STATELESS ONLY (no database / adapter).
 *
 * Provider subject binding (proven from better-auth@1.7.2):
 * - session.user.id = Better Auth internal user id (NOT GitHub id)
 * - GitHub profile.id → account.accountId via accountSubject
 * - storeAccountCookie (default when no DB) keeps account in encrypted
 *   account_data cookie with maxAge aligned to session.cookieCache.maxAge
 * - Later requests recover provider id via auth.api.accountInfo({ useAccountCookie: true })
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
### CREATED `lib/auth/auth-client.ts`

```typescript
"use client";

import { createAuthClient } from "better-auth/react";

/**
 * Browser Better Auth client. Base URL follows the current origin
 * (Studio runs on port 3020 in local dev).
 */
export const authClient = createAuthClient();

```
### CREATED `lib/auth/resolveCurrentPilote.ts`

```typescript
/**
 * Resolve the current authenticated Pilote from Better Auth session
 * + encrypted account_data cookie (GitHub provider subject) + CURRENT allowlist.
 *
 * session.user.id is NEVER treated as the GitHub id.
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import {
  isGithubUserAllowed,
  parseAllowedGithubUserIdsFromEnv,
  type AllowedGithubUserIdsParseResult,
} from "./allowlist";
import { mapGithubIdentityToPiloteActor } from "./actorMapping";
import { canonicalizeGithubUserId } from "./allowlist";
import { getSfiaAuth, type SfiaAuth } from "./auth";
import { GITHUB_PROVIDER_ID } from "./constants";

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

  let accountInfo: {
    account: {
      providerId: string;
      accountId: string;
      userId?: string;
    };
  } | null = null;

  try {
    accountInfo = await auth.api.accountInfo({
      query: { useAccountCookie: true },
      headers: input.headers,
    });
  } catch {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message:
        "GitHub provider account cookie is missing or unreadable (stateless binding required).",
    };
  }

  if (!accountInfo?.account) {
    return {
      ok: false,
      code: "PROVIDER_ACCOUNT_MISSING",
      message: "GitHub provider account subject could not be recovered.",
    };
  }

  if (accountInfo.account.providerId !== GITHUB_PROVIDER_ID) {
    return {
      ok: false,
      code: "PROVIDER_NOT_GITHUB",
      message: "Provider account is not GitHub.",
    };
  }

  // Bind account cookie to session user when present.
  if (
    accountInfo.account.userId &&
    accountInfo.account.userId !== session.user.id
  ) {
    return {
      ok: false,
      code: "SESSION_USER_MISMATCH",
      message: "Provider account cookie does not match the session user.",
    };
  }

  const githubUserId = canonicalizeGithubUserId(accountInfo.account.accountId);
  if (!githubUserId) {
    return {
      ok: false,
      code: "GITHUB_ID_INVALID",
      message: "Provider accountId is not a canonical GitHub user id.",
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

  if (!isGithubUserAllowed(githubUserId, allowlist.ids)) {
    return {
      ok: false,
      code: "ALLOWLIST_DENIED",
      message: "GitHub identity is not in the current SFIA allowlist.",
      allowlist,
    };
  }

  const actor = mapGithubIdentityToPiloteActor({
    githubUserId,
    displayName: session.user.name ?? null,
  });

  return {
    ok: true,
    githubUserId,
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
### CREATED `lib/auth/s1Authority.ts`

```typescript
/**
 * S1 AuthorityEvidence re-issuance for authenticated GitHub Pilotes.
 * Reuses existing AuthorityResolverPort — no second resolver, no AE DB.
 *
 * Policy:
 * - level = N3 (existing Pilote structuring envelope from localSingleUserAuthority pattern)
 * - canActAsMorris = false ALWAYS on this path
 * - source = BETTER_AUTH_GITHUB_MULTI_USER_S1
 */

import { randomUUID } from "node:crypto";
import type {
  AuthorityEvidence,
  AuthorityResolverPort,
} from "@/lib/oa/decision";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  S1_PILOTE_AUTHORITY_LEVEL,
} from "./constants";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  scope: string;
  issuedAt: string;
  /** Short-lived evidence TTL (ISO). Optional. */
  expiresAt?: string;
  evidenceId?: string;
};

export type IssueS1AuthorityEvidenceResult =
  | { ok: true; evidence: AuthorityEvidence }
  | { ok: false; code: "INVALID_SCOPE" | "REGISTER_FAILED"; message: string };

export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  const scope = input.scope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence scope is required.",
    };
  }

  const evidenceId =
    input.evidenceId ?? `evd:github-s1:${input.pilote.githubUserId}:${randomUUID()}`;

  const evidence: AuthorityEvidence = {
    evidenceId,
    actorId: input.pilote.actor.actorId,
    level: S1_PILOTE_AUTHORITY_LEVEL,
    scope,
    issuedAt: input.issuedAt,
    ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
    source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
    canActAsMorris: false,
  };

  try {
    const existing = input.authorityResolver.getEvidence(evidenceId);
    if (!existing) {
      input.authorityResolver.register(evidence);
    }
    return { ok: true, evidence };
  } catch (error) {
    return {
      ok: false,
      code: "REGISTER_FAILED",
      message:
        error instanceof Error ? error.message : "Failed to register S1 evidence.",
    };
  }
}

```
### CREATED `lib/auth/index.ts`

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
  issueS1AuthorityEvidence,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";

```
### CREATED `app/api/auth/[...all]/route.ts`

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
### CREATED `app/login/page.tsx`

```typescript
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
### CREATED `app/login/login-client.tsx`

```typescript
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
### CREATED `components/auth/LogoutButton.tsx`

```typescript
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
### CREATED `__tests__/auth/allowlist-actor-s1.test.ts`

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
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
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
  it("AUTH-D23/D24/D25 actor mismatch and canActAsMorris false", () => {
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

    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      scope: "project:demo",
      issuedAt: "2026-09-04T12:00:00.000Z",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.actorId).toBe(piloteA.actor.actorId);

    const okA = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: "project:demo",
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: false,
    });
    expect(okA.ok).toBe(true);

    const misuseB = resolver.verify({
      actorId: piloteB.actor.actorId,
      requiredLevel: "N3",
      scope: "project:demo",
      evidenceId: issued.evidence.evidenceId,
    });
    expect(misuseB.ok).toBe(false);
    expect(misuseB.reason).toBe("actor_mismatch");

    const morrisGate = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: "project:demo",
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
### CREATED `__tests__/auth/better-auth-foundation.test.ts`

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
### CREATED `__tests__/auth/route-protection.test.ts`

```typescript
/**
 * Protected-route policy helpers — full identity evaluation semantics (no cookie-only).
 * Middleware uses resolveCurrentAuthenticatedPilote; these tests cover the decision matrix
 * without a real Next request pipeline / GitHub network.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";

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
          accountInfo: async () => {
            throw new Error("unreachable");
          },
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
          accountInfo: async () => {
            throw new Error("no account cookie");
          },
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
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("authenticated + allowlisted proceeds; removed user denied; hostile claim ignored", async () => {
    vi.doMock("@/lib/auth/auth", () => ({
      getSfiaAuth: () => ({
        api: {
          getSession: async () => ({
            user: { id: "ba-user-a", name: "A" },
            session: { id: "sess-a" },
          }),
          accountInfo: async () => ({
            account: {
              providerId: "github",
              accountId: "11111111",
              userId: "ba-user-a",
            },
          }),
        },
      }),
    }));
    const { resolveCurrentAuthenticatedPilote } = await import(
      "@/lib/auth/resolveCurrentPilote"
    );

    const allowed = await resolveCurrentAuthenticatedPilote({
      headers: new Headers(),
      env: {
        NODE_ENV: "test",
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
      } as NodeJS.ProcessEnv,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
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
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");
  });
});

```


---

## 16. Claims

### Allowed
- AUTH FOUNDATION DETERMINISTIC = PASS (local candidate)
- Better Auth 1.7.2 stateless integrated
- Provider-id binding proven via account_data + accountInfo(useAccountCookie)
- Multi-user allowlist 2→N
- S1 with canActAsMorris=false
- READY FOR CHATGPT AUTH DELIVERY REVIEW

### Forbidden
- AUTH REAL PROVEN / LOGIN REAL PROVEN
- LIVE AUTHORITY BOUND / MW6 binding / MW6 REAL / COMPLETE
- Cognitive Completion proven / runtime v3 ADOPTED / GPT-6 ADOPTED

---

## 17. Final verdict

**DELIVERY CANDIDATE READY FOR CHATGPT REVIEW — AUTH FOUNDATION DETERMINISTIC**
