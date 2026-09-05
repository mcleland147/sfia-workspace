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
