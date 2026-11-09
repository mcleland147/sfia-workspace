import { StudioError } from "@/lib/http-errors";
import { isApprovedLoopbackAuthority } from "@/domains/identity/session";
import { isGitHubAppUserOauthConfigured } from "./github-app-user-oauth";
import { isTokenEncryptionConfigured } from "@/lib/token-crypto";

/**
 * Central SCRIPTED GitHub auth gate (D9).
 * Client params (scripted=1, body, headers) never authorize alone.
 *
 * Allowed only when ALL hold:
 * - STUDIO_LANE=DEV
 * - explicit test/fixture activation (VITEST | STUDIO_E2E | STUDIO_ALLOW_SCRIPTED_GITHUB)
 * - provider not in REAL-user-oauth-required mode
 * - optional HTTP loopback when requestHost provided
 */
export function isScriptedGithubAuthContextAllowed(input?: {
  /** Host / authority from the HTTP request (callback / complete). */
  requestHost?: string | null;
}): boolean {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  if (lane !== "DEV") return false;

  // Explicit fixture activation only — VITEST alone is insufficient (tests set ALLOW flag).
  const explicit =
    process.env.STUDIO_E2E === "1" || process.env.STUDIO_ALLOW_SCRIPTED_GITHUB === "1";
  if (!explicit) return false;

  // REAL user OAuth demanded → SCRIPTED forbidden (even in tests that flipped the flag).
  if (isRealUserOauthDemanded()) return false;

  if (input?.requestHost != null && input.requestHost !== "") {
    if (!isApprovedLoopbackAuthority(input.requestHost)) return false;
  }
  return true;
}

/** True when operator/env explicitly demands REAL user-to-server (never fall back to SCRIPTED). */
export function isRealUserOauthDemanded(): boolean {
  if ((process.env.STUDIO_GITHUB_USER_OAUTH ?? "").toLowerCase() === "real") return true;
  // Provider REAL alone does not demand user OAuth — installation read can be REAL without user tokens.
  // User OAuth REAL is only forced by STUDIO_GITHUB_USER_OAUTH=real.
  return false;
}

export function assertScriptedGithubAuthAllowed(input?: { requestHost?: string | null }): void {
  if (!isScriptedGithubAuthContextAllowed(input)) {
    throw new StudioError(
      "ACCESS_DENIED",
      "Parcours SCRIPTED GitHub inaccessible hors contexte de test DEV explicitement admis",
      { httpStatus: 403 },
    );
  }
}

export function assertRealUserOauthConfigured(): void {
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "GITHUB_APP_CLIENT_ID / GITHUB_APP_CLIENT_SECRET / GITHUB_APP_CALLBACK_URL requis — pas de fallback SCRIPTED",
      { httpStatus: 503 },
    );
  }
  if (!isTokenEncryptionConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY requis — pas de fallback SCRIPTED",
      { httpStatus: 503 },
    );
  }
}

/**
 * Server-side flow selection. Never trusts client scripted/code flags alone.
 * - real demanded → real (or NOT_CONFIGURED)
 * - else if scripted context allowed → scripted
 * - else → NOT_CONFIGURED (cannot invent CONNECTED)
 */
export function resolveGithubUserAuthFlow(input?: {
  requestHost?: string | null;
}): "real" | "scripted" {
  if (isRealUserOauthDemanded()) {
    assertRealUserOauthConfigured();
    return "real";
  }
  if (isScriptedGithubAuthContextAllowed(input)) {
    return "scripted";
  }
  // Credentials present but REAL not demanded and SCRIPTED not allowed → still not auto-REAL.
  // Operator must set STUDIO_GITHUB_USER_OAUTH=real to activate interactive user OAuth.
  if (isGitHubAppUserOauthConfigured() && isTokenEncryptionConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "User-to-server REAL non activé (STUDIO_GITHUB_USER_OAUTH≠real) et SCRIPTED non admis",
      { httpStatus: 503 },
    );
  }
  throw new StudioError(
    "NOT_CONFIGURED",
    "Autorisation GitHub utilisateur indisponible — credentials absents et SCRIPTED non admis",
    { httpStatus: 503 },
  );
}
