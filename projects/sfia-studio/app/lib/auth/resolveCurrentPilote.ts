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
