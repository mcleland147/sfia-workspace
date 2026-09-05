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
