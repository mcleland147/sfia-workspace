# SFIA Studio Next — Review Pack FULL
# ML4 GITHUB USER AUTH — SECURITY CORRECTIVE CLOSURE
# Cycle CRITICAL — mono-cycle reset (pas d'append)

## 1. Date/heure Europe/Paris
2026-11-08 ~21:15 CET (validations 21:12–21:15 CET / UTC 20:12–20:15)

## 2. Mandat Morris
GO CORRECTION EXPLICITE — SECURITY CORRECTIVE CLOSURE.
Handoff d'entrée : `6509b4bc8215aa5c887bd19818ed6320a00cc80c` — verdict NOT READY FOR REAL USER FLOW.
DEV only. NO RELEASE / `0.0.0-dev`. Aucune mutation GitHub REAL.

## 3. Git Truth initial/final

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD | `c658f59023d44a0e22448c7ee034e3c1dda292a2` = origin/main |
| Branche Product distante | ABSENTE |
| Handoff tip entrée | `6509b4bc…` (parent `b6dccd6e…`) |
| État | LOCAL DIRTY préservé — **aucun commit/push Product** |
| Migrations | 009+010 préservées ; **011** additive appliquée DEV+e2e |
| Option A | non touchée |

## 4. Sources Git / blobs
Sources method/governance lues à main `c658f590` (blobs cités dans le mandat).
Code LOCAL DIRTY confronté au handoff `6509b4bc`.
Doctrine protégée non modifiée — KNOWN GAP roadmap « ML4 non construit » signalé.

## 5. État fichiers DIRTY (périmètre pertinent)
Untracked/modifiés sous `web/src/domains/integrations|execution`, `web/src/app/api/integrations`, `web/src/lib/token-crypto`, migrations 008–011, tests, construction docs.
Aucune gouvernance / method / UX normative modifiée.

## 6. Mapping des six écarts de revue → corrections

| # | Écart | Correction |
|---|---|---|
| 1 | SCRIPTED → CONNECTED sans consentement | `scripted-github-guard` ; flow stocké serveur ; complete/callback refusent hors DEV+ALLOW/E2E+loopback ; REAL demandé sans credentials → NOT_CONFIGURED (pas de fallback) |
| 2 | permissions write hardcodées | `RepoPermissionSnapshot` avec `source` ; SCRIPTED = `scripted_fixture` ; REAL = observed/unknown ; refresh sans élévation ; user token pour inventaire REAL |
| 3 | returnPath / erreurs brutes | `oauth-return-path.ts` allowlist + opaque error codes |
| 4 | state ≠ session | migration 011 `studio_session_id` + `flow` ; consume atomique lie PilotId+session |
| 5 | expiry/refresh/révocation | `refreshUserAccessToken` + CAS refresh ciphertext ; REQUIRES_REAUTH ; disconnect wipe ; KNOWN GAP révocation distante |
| 6 | persist D9 non atomique | txn PG revoke+insert+seed |
| + | D7 persistOwnedProgress | `sqlClaimLeaseActive()` dans WHERE |

## 7. Fencing D7
`persistOwnedProgress`, `assertAndTouchOwnership`, `casOwnedTransition`, `commitPublicationCompletion(owned)` exigent claimToken + lease actif (DB `now()`).
Test : lease expiré avant CREATE_BRANCH → CONFLICT ; pas COMPLETED ; 0 publicationRef.

## 8. Blast radius
D1 (sessionId binding) ; D9 (auth/routes/permissions/tokens) ; D7 (progress lease) ; D8 inchangé fonctionnellement ; PG 011 additive ; UX panel minimal ; tests.

## 9. Migrations / preflight
011 ADDITIVE sur `sfia_next_dev` + `sfia_next_e2e`. RECETTE non touchée. Option A intacte. schemaRevision=`011_oauth_session_binding`.

## 10. Sécurité / secrets
PEM meta-only (0600). Pas de Client Secret inventé. Tokens jamais en JSON/logs/pack (fixtures `ghs_test` unitaires seulement). Callback sans code/token en URL finale.

## 11. Suites (réelles, ce cycle)

| Suite | Résultat |
|---|---|
| tsc | PASS |
| unit | **167 PASS** / 30 files |
| integration | **190 PASS** / 12 files |
| build | PASS |
| Playwright | **13/13 PASS** (SCRIPTED E2E isolé ; ≠ consentement GitHub REAL) |

Entrée cycle : 160 / 186 / 13 — non revendiquée comme résultat courant.

## 12. Fake/Real Qualification

| Capacité | Statut |
|---|---|
| SCRIPTED auth gated | PROVEN DET |
| REAL user OAuth interactive | NOT PROVEN / NOT_CONFIGURED sans secrets |
| REAL installation READ | PRESERVED (prior) |
| REAL Git writes | HARD-BLOCKED |
| Remote OAuth revoke | KNOWN GAP |

## 13. Invariants préservés
D1≠D9 ; user token≠D6 ; D7 unique moteur ; Option A ; 009 UNIQUE ; marker provenance ; CAS terminal lease ; mutations REAL blocked.

## 14. KNOWN GAP / dette
- Client ID/Secret/Callback/encryption key absents → pas d'essai interactif.
- Révocation OAuth GitHub distante non implémentée (wipe local only).
- UX Figma 218–235 PENDING.
- Roadmap main snapshots historiques.

## 15. Gates Morris suivants
1. Critical Re-Review ChatGPT
2. Config manuelle App OAuth + encryption key
3. Essai user-to-server REAL DEV (mandat distinct)
4. Première publication REAL chantiers360 (GO distinct)

## 16. Verdict

**ML4 GITHUB USER AUTH SECURITY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY.**

Interdits non déclarés : REAL USER OAUTH PROVEN ; READY FOR REAL GIT WRITES ; RECETTE ACCEPTED ; STABLE ; ADOPTED.

---

## GIT REVIEW INDEX

| Path | Rôle |
|---|---|
| src/domains/integrations/scripted-github-guard.ts | NEW — garde SCRIPTED |
| src/domains/integrations/oauth-return-path.ts | NEW — returnPath + erreurs opaques |
| src/domains/integrations/authorization-service.ts | REWRITE — session bind, txn, perms, refresh |
| src/domains/integrations/github-app-user-oauth.ts | refreshUserAccessToken + perms repos |
| src/app/api/integrations/github/authorize/route.ts | sessionId + host |
| src/app/api/integrations/github/authorize/complete/route.ts | garde SCRIPTED |
| src/app/api/integrations/github/callback/route.ts | flow serveur + erreurs opaques |
| src/domains/execution/effect-service.ts | persistOwnedProgress + lease |
| src/db/migrations/011_oauth_session_binding.sql | NEW additive |
| src/db/schema.ts | studioSessionId, flow, schemaRevision 011 |
| vitest.config.ts / e2e-web-server.sh | STUDIO_ALLOW_SCRIPTED_GITHUB |
| tests/unit/scripted-github-guard.test.ts | NEW |
| tests/unit/oauth-return-path.test.ts | NEW |
| tests/integration/git-collaboration.pg.test.ts | security + lease progress |

## ANNEXE — Fichiers créés (contenu complet)

### `src/db/migrations/011_oauth_session_binding.sql`
```
-- ML4 D9 security corrective — additive only (DEV/e2e).
-- Bind OAuth state to Studio session; record intended flow server-side.
-- Does not touch D8 Option A historical rows.

ALTER TABLE integration_oauth_states
  ADD COLUMN IF NOT EXISTS studio_session_id text,
  ADD COLUMN IF NOT EXISTS flow text;

CREATE INDEX IF NOT EXISTS integration_oauth_states_session_idx
  ON integration_oauth_states (studio_session_id)
  WHERE studio_session_id IS NOT NULL;
```

### `src/domains/integrations/scripted-github-guard.ts`
```
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
```

### `src/domains/integrations/oauth-return-path.ts`
```
/**
 * Safe internal returnPath for GitHub App user OAuth redirects.
 * Allowlist + canonicalization — never open redirect.
 */

const DEFAULT = "/settings/integrations";

const ALLOWED_EXACT = new Set([
  "/settings/integrations",
  "/portfolio",
]);

/** /projects/<id> where id is a conservative token (no path traversal). */
const PROJECT_PATH = /^\/projects\/[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;

function hasControlChars(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c <= 0x1f || c === 0x7f) return true;
  }
  return false;
}

/**
 * Normalize and validate a candidate return path.
 * Returns DEFAULT when unsafe — never throws with attacker-controlled detail.
 */
export function safeReturnPath(raw: string | null | undefined): string {
  if (raw == null || typeof raw !== "string") return DEFAULT;
  let path = raw.trim();
  if (!path) return DEFAULT;
  if (hasControlChars(path)) return DEFAULT;

  // Reject schemes / protocol-relative / backslash / encoded tricks before decode.
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/i.test(path)) return DEFAULT;
  if (path.includes("\\")) return DEFAULT;
  if (path.includes("//")) return DEFAULT;
  if (/%00/i.test(path)) return DEFAULT;

  // Decode once; reject if decode changes structure dangerously or fails.
  let decoded = path;
  try {
    decoded = decodeURIComponent(path);
  } catch {
    return DEFAULT;
  }
  if (decoded !== path) {
    // Re-check after decode.
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/i.test(decoded)) return DEFAULT;
    if (decoded.includes("\\") || decoded.includes("//")) return DEFAULT;
    if (hasControlChars(decoded)) return DEFAULT;
    path = decoded;
  }

  if (!path.startsWith("/")) return DEFAULT;
  if (path.startsWith("//")) return DEFAULT;
  if (path.includes("://")) return DEFAULT;
  if (path.includes("..")) return DEFAULT;
  // Strip query/hash — only path segment is allowed to be stored.
  const q = path.indexOf("?");
  if (q >= 0) path = path.slice(0, q);
  const h = path.indexOf("#");
  if (h >= 0) path = path.slice(0, h);
  // Collapse trailing slash except root.
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  if (ALLOWED_EXACT.has(path)) return path;
  if (PROJECT_PATH.test(path)) return path;
  return DEFAULT;
}

/** Opaque callback error codes — never raw exception messages. */
export type OauthCallbackErrorCode =
  | "missing_code"
  | "access_denied"
  | "invalid_state"
  | "session_mismatch"
  | "not_configured"
  | "conflict"
  | "failed";

export function mapOauthCallbackError(e: unknown): OauthCallbackErrorCode {
  if (e && typeof e === "object" && "code" in e) {
    const code = String((e as { code: string }).code);
    if (code === "NOT_CONFIGURED") return "not_configured";
    if (code === "ACCESS_DENIED" || code === "SESSION_INVALID") return "access_denied";
    if (code === "CONFLICT") return "conflict";
    if (code === "INVALID_REQUEST") return "invalid_state";
  }
  return "failed";
}
```

### `src/app/api/integrations/github/authorize/route.ts`
```
import { NextResponse } from "next/server";
import { startGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json().catch(() => ({}))) as { returnPath?: string };
    const host = req.headers.get("host");
    const result = await startGitHubAuthorization(
      session.pilotId,
      body.returnPath ?? "/settings/integrations",
      session.sessionId,
      { requestHost: host },
    );
    return NextResponse.json({
      ...result,
      // Reflect server-chosen flow — never trust client to pick SCRIPTED.
      providerMode: result.flow === "scripted" ? "SCRIPTED" : "REAL",
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/integrations/github/authorize/complete/route.ts`
```
import { NextResponse } from "next/server";
import { completeGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { assertScriptedGithubAuthAllowed } from "@/domains/integrations/scripted-github-guard";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * SCRIPTED completion only — gated by central SCRIPTED guard.
 * Never creates REAL CONNECTED. Client cannot force scripted=true for REAL.
 */
export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const host = req.headers.get("host");
    assertScriptedGithubAuthAllowed({ requestHost: host });

    const body = (await req.json().catch(() => ({}))) as {
      state?: string;
      installationId?: string;
    };
    if (!body.state) {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "state required" }, { status: 400 });
    }
    // installationId from body is rejected inside complete unless it matches fixture.
    const status = await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state: body.state,
      studioSessionId: session.sessionId,
      installationId: body.installationId,
      requestHost: host,
    });
    return NextResponse.json(status);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/integrations/github/callback/route.ts`
```
import { NextResponse } from "next/server";
import {
  completeGitHubAuthorization,
  peekOauthState,
} from "@/domains/integrations/authorization-service";
import { mapOauthCallbackError, safeReturnPath } from "@/domains/integrations/oauth-return-path";
import { assertScriptedGithubAuthAllowed } from "@/domains/integrations/scripted-github-guard";
import { requireStudioSession } from "@/domains/identity/session";
import { isStudioError, studioErrorResponse } from "@/lib/http-errors";

/**
 * GitHub App user-to-server callback (D9) — distinct from Better Auth D1 callback.
 * Never echoes code/token. Never trusts installation_id or scripted=1 from query for flow choice.
 * Flow is taken from server-stored oauth state.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get("host");
  try {
    const session = await requireStudioSession();
    const state = url.searchParams.get("state");
    if (!state) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=invalid_state`, url.origin),
      );
    }

    const oauth = await peekOauthState(state);
    if (!oauth || oauth.pilotId !== session.pilotId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=access_denied`, url.origin),
      );
    }
    if (oauth.studioSessionId && oauth.studioSessionId !== session.sessionId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=session_mismatch`, url.origin),
      );
    }

    const returnPath = safeReturnPath(oauth.returnPath);
    const storedFlow = oauth.flow === "github_app_user_oauth" ? "real" : "scripted";

    if (storedFlow === "scripted") {
      assertScriptedGithubAuthAllowed({ requestHost: host });
      await completeGitHubAuthorization({
        pilotId: session.pilotId,
        state,
        studioSessionId: session.sessionId,
        requestHost: host,
      });
      return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
    }

    // REAL flow — require code; ignore scripted=1 and installation_id from query.
    const code = url.searchParams.get("code") ?? undefined;
    if (!code) {
      const ghError = url.searchParams.get("error");
      const errCode = ghError === "access_denied" ? "access_denied" : "missing_code";
      return NextResponse.redirect(
        new URL(`${returnPath}?connected=0&error=${errCode}`, url.origin),
      );
    }

    await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state,
      studioSessionId: session.sessionId,
      code,
      requestHost: host,
    });
    return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
  } catch (e) {
    if (isStudioError(e) && e.code === "NOT_CONFIGURED") {
      const mapped = studioErrorResponse(e);
      return NextResponse.json(mapped.body, { status: mapped.status });
    }
    const errCode = mapOauthCallbackError(e);
    return NextResponse.redirect(
      new URL(`/settings/integrations?connected=0&error=${errCode}`, url.origin),
    );
  }
}
```

### `tests/unit/scripted-github-guard.test.ts`
```
import { afterEach, describe, expect, it } from "vitest";
import {
  isRealUserOauthDemanded,
  isScriptedGithubAuthContextAllowed,
  resolveGithubUserAuthFlow,
} from "@/domains/integrations/scripted-github-guard";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("scripted-github-guard", () => {
  it("allows SCRIPTED only in DEV with explicit activation + loopback", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    delete process.env.STUDIO_GITHUB_USER_OAUTH;
    expect(isScriptedGithubAuthContextAllowed({ requestHost: "127.0.0.1:3100" })).toBe(true);
    expect(isScriptedGithubAuthContextAllowed({ requestHost: "evil.example" })).toBe(false);
  });

  it("refuses SCRIPTED outside DEV", () => {
    process.env.STUDIO_LANE = "RECETTE";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
  });

  it("refuses SCRIPTED without explicit activation", () => {
    process.env.STUDIO_LANE = "DEV";
    delete process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
    delete process.env.STUDIO_E2E;
    delete process.env.VITEST;
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
  });

  it("REAL demanded never falls back to SCRIPTED", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
    process.env.STUDIO_GITHUB_USER_OAUTH = "real";
    expect(isRealUserOauthDemanded()).toBe(true);
    expect(isScriptedGithubAuthContextAllowed()).toBe(false);
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
    try {
      resolveGithubUserAuthFlow();
      expect.fail("expected NOT_CONFIGURED");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("NOT_CONFIGURED");
    }
  });
});
```

### `tests/unit/oauth-return-path.test.ts`
```
import { describe, expect, it } from "vitest";
import { mapOauthCallbackError, safeReturnPath } from "@/domains/integrations/oauth-return-path";

describe("safeReturnPath", () => {
  it("allows exact allowlist and project paths", () => {
    expect(safeReturnPath("/settings/integrations")).toBe("/settings/integrations");
    expect(safeReturnPath("/portfolio")).toBe("/portfolio");
    expect(safeReturnPath("/projects/proj_abc-1")).toBe("/projects/proj_abc-1");
  });

  it("rejects open redirects and hostile forms", () => {
    expect(safeReturnPath("https://evil.example/x")).toBe("/settings/integrations");
    expect(safeReturnPath("//evil.example")).toBe("/settings/integrations");
    expect(safeReturnPath("/\\evil")).toBe("/settings/integrations");
    expect(safeReturnPath("/settings/integrations/../../etc/passwd")).toBe(
      "/settings/integrations",
    );
    expect(safeReturnPath("/settings/integrations?next=https://evil")).toBe(
      "/settings/integrations",
    );
    expect(safeReturnPath("javascript:alert(1)")).toBe("/settings/integrations");
    expect(safeReturnPath("/not-allowed")).toBe("/settings/integrations");
    expect(safeReturnPath("/%2e%2e/secret")).toBe("/settings/integrations");
  });

  it("maps callback errors to opaque codes", () => {
    expect(mapOauthCallbackError({ code: "ACCESS_DENIED" })).toBe("access_denied");
    expect(mapOauthCallbackError({ code: "NOT_CONFIGURED" })).toBe("not_configured");
    expect(mapOauthCallbackError(new Error("secret stack"))).toBe("failed");
  });
});
```

### `src/domains/integrations/authorization-service.ts` (complet)
```
import { and, desc, eq, gt, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  integrationAuthorizations,
  integrationOauthStates,
  pilots,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { isTokenEncryptionConfigured, openSecret, sealSecret } from "@/lib/token-crypto";
import { resolveGitHubProvider } from "./github-provider";
import {
  assertInstallationAuthorized,
  assertSandboxRepoInList,
  buildGitHubAppUserAuthorizeUrl,
  exchangeAuthorizationCode,
  fetchGitHubUserIdentity,
  isGitHubAppUserOauthConfigured,
  listUserInstallationRepos,
  listUserInstallationsForApp,
  mintPkcePair,
  readGitHubAppUserOauthConfig,
  refreshUserAccessToken,
} from "./github-app-user-oauth";
import { safeReturnPath } from "./oauth-return-path";
import {
  assertScriptedGithubAuthAllowed,
  resolveGithubUserAuthFlow,
} from "./scripted-github-guard";
import type { IntegrationStatus } from "./types";

const STATE_TTL_MS = 15 * 60 * 1000;

export type RepoPermissionSnapshot = {
  source: "scripted_fixture" | "user_token_observed" | "unknown";
  contents: "read" | "write" | "admin" | "unknown" | "none";
  pull_requests: "read" | "write" | "admin" | "unknown" | "none";
};

function scriptedFixturePermissions(): RepoPermissionSnapshot {
  // Fixture only — tagged so REAL paths never inherit these levels.
  return {
    source: "scripted_fixture",
    contents: "write",
    pull_requests: "write",
  };
}

function unknownPermissions(): RepoPermissionSnapshot {
  return { source: "unknown", contents: "unknown", pull_requests: "unknown" };
}

function normalizeObservedLevel(raw: unknown): RepoPermissionSnapshot["contents"] {
  const v = String(raw ?? "")
    .trim()
    .toLowerCase();
  if (v === "read" || v === "pull") return "read";
  if (v === "write" || v === "push") return "write";
  if (v === "admin") return "admin";
  if (v === "none") return "none";
  return "unknown";
}

function permissionsFromObserved(input?: {
  contents?: unknown;
  pull_requests?: unknown;
}): RepoPermissionSnapshot {
  if (!input) return unknownPermissions();
  return {
    source: "user_token_observed",
    contents: normalizeObservedLevel(input.contents),
    pull_requests: normalizeObservedLevel(input.pull_requests),
  };
}

export async function getIntegrationStatus(pilotId: string) {
  const provider = resolveGitHubProvider();
  const connected = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      )
      .orderBy(desc(integrationAuthorizations.createdAt))
      .limit(1)
  )[0];
  const latest = connected
    ? connected
    : (
        await db
          .select()
          .from(integrationAuthorizations)
          .where(eq(integrationAuthorizations.pilotId, pilotId))
          .orderBy(desc(integrationAuthorizations.updatedAt))
          .limit(1)
      )[0];

  const status = (latest?.status ?? "DISCONNECTED") as IntegrationStatus;
  const repos =
    status === "CONNECTED"
      ? await db
          .select({
            id: authorizedRepositories.id,
            fullName: authorizedRepositories.fullName,
            defaultBranch: authorizedRepositories.defaultBranch,
            status: authorizedRepositories.status,
            permissionsJson: authorizedRepositories.permissionsJson,
          })
          .from(authorizedRepositories)
          .where(
            and(
              eq(authorizedRepositories.pilotId, pilotId),
              eq(authorizedRepositories.status, "ACTIVE"),
            ),
          )
      : [];

  return {
    provider: "github" as const,
    providerMode: provider.mode,
    status,
    authorizationId: latest?.id ?? null,
    installationId: latest?.installationId ?? null,
    githubUserId: latest?.githubUserId ?? null,
    accountLogin: latest?.accountLogin ?? null,
    tokenExpiresAt: latest?.tokenExpiresAt?.toISOString() ?? null,
    lastValidatedAt: latest?.lastValidatedAt?.toISOString() ?? null,
    userOauthConfigured: isGitHubAppUserOauthConfigured(),
    repositories: repos.map((r) => ({
      id: r.id,
      fullName: r.fullName,
      defaultBranch: r.defaultBranch,
      status: r.status,
      // Expose only non-secret permission snapshot (never tokens).
      permissions: (() => {
        try {
          return JSON.parse(r.permissionsJson || "{}") as RepoPermissionSnapshot;
        } catch {
          return unknownPermissions();
        }
      })(),
    })),
  };
}

/**
 * Start voluntary GitHub App user-to-server authorization (distinct from D1 Better Auth).
 * Flow is chosen server-side — never from client scripted/code flags.
 */
export async function startGitHubAuthorization(
  pilotId: string,
  returnPath: string,
  studioSessionId: string,
  opts?: { requestHost?: string | null },
) {
  if (!studioSessionId) {
    throw new StudioError("ACCESS_DENIED", "Session Studio requise pour démarrer OAuth", {
      httpStatus: 401,
    });
  }
  const flow = resolveGithubUserAuthFlow({ requestHost: opts?.requestHost });
  const stateToken = newId("ghst");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + STATE_TTL_MS);
  const pkce = mintPkcePair();
  const nonce = newId("ghnc");
  const safePath = safeReturnPath(returnPath);
  const storedFlow = flow === "real" ? "github_app_user_oauth" : "scripted";

  await db.insert(integrationOauthStates).values({
    id: newId("ghos"),
    pilotId,
    stateToken,
    returnPath: safePath,
    codeVerifier: pkce.codeVerifier,
    nonce,
    codeChallengeMethod: pkce.method,
    studioSessionId,
    flow: storedFlow,
    expiresAt,
    createdAt: now,
  });

  if (flow === "real") {
    const config = readGitHubAppUserOauthConfig();
    const authorizeUrl = buildGitHubAppUserAuthorizeUrl({
      config,
      state: stateToken,
      codeChallenge: pkce.codeChallenge,
      codeChallengeMethod: pkce.method,
    });
    return {
      authorizeUrl,
      state: stateToken,
      flow: "github_app_user_oauth" as const,
      pkce: true,
    };
  }

  assertScriptedGithubAuthAllowed({ requestHost: opts?.requestHost });
  // SCRIPTED complete uses JSON API — authorizeUrl is informational only.
  const authorizeUrl = `/api/integrations/github/authorize/complete`;
  return {
    authorizeUrl,
    state: stateToken,
    flow: "scripted" as const,
    pkce: true,
  };
}

type SeedRepo = {
  owner: string;
  name: string;
  fullName: string;
  defaultBranch: string;
  permissions: RepoPermissionSnapshot;
};

async function seedAuthorizedReposInTx(
  tx: Parameters<Parameters<typeof db.transaction>[0]>[0],
  pilotId: string,
  authorizationId: string,
  repos: SeedRepo[],
) {
  const now = new Date();
  const activeNames = new Set(repos.map((r) => r.fullName.toLowerCase()));

  // Mark repos no longer present as REMOVED (no elevation on refresh).
  const existingActive = await tx
    .select()
    .from(authorizedRepositories)
    .where(
      and(
        eq(authorizedRepositories.pilotId, pilotId),
        eq(authorizedRepositories.status, "ACTIVE"),
      ),
    );
  for (const row of existingActive) {
    if (!activeNames.has(row.fullName.toLowerCase())) {
      await tx
        .update(authorizedRepositories)
        .set({ status: "REMOVED", syncedAt: now })
        .where(eq(authorizedRepositories.id, row.id));
    }
  }

  for (const r of repos) {
    const existing = (
      await tx
        .select({ id: authorizedRepositories.id })
        .from(authorizedRepositories)
        .where(
          and(
            eq(authorizedRepositories.pilotId, pilotId),
            eq(authorizedRepositories.fullName, r.fullName),
          ),
        )
        .limit(1)
    )[0];
    const permissionsJson = JSON.stringify(r.permissions);
    if (existing) {
      await tx
        .update(authorizedRepositories)
        .set({
          authorizationId,
          status: "ACTIVE",
          defaultBranch: r.defaultBranch,
          permissionsJson,
          syncedAt: now,
        })
        .where(eq(authorizedRepositories.id, existing.id));
    } else {
      await tx.insert(authorizedRepositories).values({
        id: newId("arepo"),
        pilotId,
        authorizationId,
        owner: r.owner,
        name: r.name,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
        status: "ACTIVE",
        permissionsJson,
        syncedAt: now,
        createdAt: now,
      });
    }
  }
}

async function loadPilotGithubUserId(pilotId: string): Promise<string | null> {
  const row = (
    await db
      .select({ githubUserId: pilots.githubUserId })
      .from(pilots)
      .where(eq(pilots.id, pilotId))
      .limit(1)
  )[0];
  return row?.githubUserId ?? null;
}

/**
 * Atomic consume of OAuth state (TTL + single-use) bound to pilot AND studio session.
 */
export async function consumeOauthStateAtomic(input: {
  state: string;
  pilotId: string;
  studioSessionId: string;
}) {
  const now = new Date();
  const updated = await db
    .update(integrationOauthStates)
    .set({ consumedAt: now })
    .where(
      and(
        eq(integrationOauthStates.stateToken, input.state),
        eq(integrationOauthStates.pilotId, input.pilotId),
        eq(integrationOauthStates.studioSessionId, input.studioSessionId),
        isNull(integrationOauthStates.consumedAt),
        gt(integrationOauthStates.expiresAt, now),
      ),
    )
    .returning();
  return updated[0] ?? null;
}

/** Read-only peek used by callback for pilot binding before consume. */
export async function peekOauthState(state: string) {
  const row = (
    await db
      .select()
      .from(integrationOauthStates)
      .where(and(eq(integrationOauthStates.stateToken, state), isNull(integrationOauthStates.consumedAt)))
      .limit(1)
  )[0];
  return row ?? null;
}

/** @deprecated alias — prefer peekOauthState */
export const consumeOauthStateForCallback = peekOauthState;

export async function completeGitHubAuthorization(input: {
  pilotId: string;
  state: string;
  studioSessionId: string;
  /** Authorization code from GitHub user OAuth callback — REAL flow only. */
  code?: string;
  /** SCRIPTED install hint — ignored unless server-stored flow is scripted AND guard allows. */
  installationId?: string;
  fetchImpl?: typeof fetch;
  requestHost?: string | null;
}) {
  if (!input.studioSessionId) {
    throw new StudioError("ACCESS_DENIED", "Session Studio requise", { httpStatus: 401 });
  }

  const oauthRow = await consumeOauthStateAtomic({
    state: input.state,
    pilotId: input.pilotId,
    studioSessionId: input.studioSessionId,
  });
  if (!oauthRow) {
    const any = (
      await db
        .select()
        .from(integrationOauthStates)
        .where(eq(integrationOauthStates.stateToken, input.state))
        .limit(1)
    )[0];
    if (!any) throw new StudioError("ACCESS_DENIED", "State OAuth invalide");
    if (any.pilotId !== input.pilotId) {
      throw new StudioError("ACCESS_DENIED", "State OAuth non lié à la session");
    }
    if (any.studioSessionId && any.studioSessionId !== input.studioSessionId) {
      throw new StudioError("ACCESS_DENIED", "State OAuth non lié à la session Studio courante");
    }
    if (any.consumedAt) throw new StudioError("CONFLICT", "State OAuth déjà consommé");
    if (any.expiresAt <= new Date()) throw new StudioError("INVALID_REQUEST", "State OAuth expiré");
    throw new StudioError("ACCESS_DENIED", "State OAuth invalide");
  }

  const storedFlow = oauthRow.flow === "github_app_user_oauth" ? "real" : "scripted";
  // Client cannot override server-stored flow.
  if (storedFlow === "scripted") {
    assertScriptedGithubAuthAllowed({ requestHost: input.requestHost });
  } else if (!input.code) {
    throw new StudioError("INVALID_REQUEST", "Code OAuth requis pour le flux REAL", {
      httpStatus: 400,
    });
  }

  const pilotGithubUserId = await loadPilotGithubUserId(input.pilotId);
  const now = new Date();
  const provider = resolveGitHubProvider();

  let githubUserId: string;
  let accountLogin: string;
  let installId: string;
  let tokenFields: {
    tokenCiphertext: string | null;
    tokenNonce: string | null;
    tokenKeyVersion: string | null;
    refreshCiphertext: string | null;
    refreshNonce: string | null;
    tokenExpiresAt: Date | null;
    scopesJson: string;
  } = {
    tokenCiphertext: null,
    tokenNonce: null,
    tokenKeyVersion: null,
    refreshCiphertext: null,
    refreshNonce: null,
    tokenExpiresAt: null,
    scopesJson: "[]",
  };
  let repoSeed: SeedRepo[] = [];

  if (storedFlow === "real") {
    if (!isGitHubAppUserOauthConfigured() || !isTokenEncryptionConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "Credentials user-to-server absents — pas de CONNECTED fictif",
        { httpStatus: 503 },
      );
    }
    if (!oauthRow.codeVerifier) {
      throw new StudioError("INVALID_REQUEST", "PKCE code_verifier absent du state", {
        httpStatus: 400,
      });
    }
    const config = readGitHubAppUserOauthConfig();
    // GitHub I/O OUTSIDE the DB transaction.
    const tokens = await exchangeAuthorizationCode({
      config,
      code: input.code!,
      codeVerifier: oauthRow.codeVerifier,
      fetchImpl: input.fetchImpl,
    });
    const identity = await fetchGitHubUserIdentity(tokens.accessToken, input.fetchImpl);
    if (!pilotGithubUserId) {
      throw new StudioError(
        "ACCESS_DENIED",
        "Pilot sans githubUserId D1 — liaison identité requise, pas d'auto-fusion",
        { httpStatus: 403 },
      );
    }
    if (identity.id !== pilotGithubUserId) {
      throw new StudioError(
        "ACCESS_DENIED",
        "GitHub user ID divergent de l'identité Studio D1",
        { httpStatus: 403 },
      );
    }
    const installations = await listUserInstallationsForApp(
      tokens.accessToken,
      config.appId,
      input.fetchImpl,
    );
    const install = assertInstallationAuthorized(installations, config);
    const repos = await listUserInstallationRepos(
      tokens.accessToken,
      install.id,
      input.fetchImpl,
    );
    assertSandboxRepoInList(repos, config.allowedFullName);

    const sealedAccess = sealSecret(tokens.accessToken);
    const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
    githubUserId = identity.id;
    accountLogin = identity.login;
    installId = install.id;
    tokenFields = {
      tokenCiphertext: sealedAccess.ciphertext,
      tokenNonce: sealedAccess.nonce,
      tokenKeyVersion: sealedAccess.keyVersion,
      refreshCiphertext: sealedRefresh?.ciphertext ?? null,
      refreshNonce: sealedRefresh?.nonce ?? null,
      tokenExpiresAt: tokens.expiresAt,
      scopesJson: JSON.stringify(tokens.scopes),
    };
    repoSeed = repos.map((r) => {
      const [owner, name] = r.fullName.split("/");
      const perms = (r as { permissions?: { contents?: string; pull_requests?: string } })
        .permissions;
      return {
        owner: owner ?? "",
        name: name ?? r.fullName,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
        permissions: permissionsFromObserved(perms),
      };
    });
  } else {
    // SCRIPTED deterministic — guard already asserted.
    if (!pilotGithubUserId) {
      throw new StudioError(
        "ACCESS_DENIED",
        "Pilot sans githubUserId D1 — liaison identité requise",
        { httpStatus: 403 },
      );
    }
    // Never trust client installation_id for REAL; SCRIPTED uses fixed fixture id.
    installId = "scripted-install-1";
    if (input.installationId && input.installationId !== installId) {
      // Foreign installation_id cannot authorize a different install in SCRIPTED.
      throw new StudioError("ACCESS_DENIED", "installation_id SCRIPTED non autorisé", {
        httpStatus: 403,
      });
    }
    const listed = await provider.listInstallationRepos(input.pilotId, installId);
    githubUserId = pilotGithubUserId;
    accountLogin = "scripted-user";
    if (isTokenEncryptionConfigured()) {
      const sealed = sealSecret(`scripted-access:${input.pilotId}`);
      tokenFields = {
        tokenCiphertext: sealed.ciphertext,
        tokenNonce: sealed.nonce,
        tokenKeyVersion: sealed.keyVersion,
        refreshCiphertext: null,
        refreshNonce: null,
        tokenExpiresAt: new Date(now.getTime() + 3600_000),
        scopesJson: JSON.stringify([]),
      };
    }
    const fixturePerms = scriptedFixturePermissions();
    repoSeed = listed.map((r) => ({
      owner: r.owner,
      name: r.name,
      fullName: r.fullName,
      defaultBranch: r.defaultBranch,
      permissions: fixturePerms,
    }));
  }

  const authId = newId("iauth");
  // Short PG transaction: revoke prior CONNECTED + insert + seed — no GitHub I/O inside.
  await db.transaction(async (tx) => {
    await tx
      .update(integrationAuthorizations)
      .set({
        status: "REVOKED",
        revokedAt: now,
        updatedAt: now,
        tokenCiphertext: null,
        tokenNonce: null,
        tokenKeyVersion: null,
        refreshCiphertext: null,
        refreshNonce: null,
        tokenExpiresAt: null,
      })
      .where(
        and(
          eq(integrationAuthorizations.pilotId, input.pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );

    await tx.insert(integrationAuthorizations).values({
      id: authId,
      pilotId: input.pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: installId,
      accountLogin,
      githubUserId,
      ...tokenFields,
      lastValidatedAt: now,
      metadataJson: JSON.stringify({
        mode: storedFlow === "real" ? "REAL_USER_OAUTH" : "SCRIPTED_FIXTURE",
        flow: storedFlow === "real" ? "github_app_user_oauth" : "scripted",
        // SCRIPTED fixtures are not GitHub consent proof.
        consentProven: storedFlow === "real",
      }),
      connectedAt: now,
      createdAt: now,
      updatedAt: now,
    });
    await seedAuthorizedReposInTx(tx, input.pilotId, authId, repoSeed);
  });

  return getIntegrationStatus(input.pilotId);
}

/**
 * Refresh repository inventory without elevating permissions.
 * REAL_USER_OAUTH: uses sealed user token (refresh if expired) — never installation token substitute.
 * SCRIPTED_FIXTURE: re-lists scripted provider under guard.
 */
export async function refreshRepositories(
  pilotId: string,
  opts?: { fetchImpl?: typeof fetch; requestHost?: string | null },
) {
  const auth = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      )
      .orderBy(desc(integrationAuthorizations.createdAt))
      .limit(1)
  )[0];
  if (!auth?.installationId) throw new StudioError("NOT_FOUND", "Intégration non connectée");

  let meta: { mode?: string; flow?: string } = {};
  try {
    meta = JSON.parse(auth.metadataJson || "{}") as { mode?: string; flow?: string };
  } catch {
    meta = {};
  }

  let repoSeed: SeedRepo[] = [];

  if (meta.mode === "REAL_USER_OAUTH" || meta.flow === "github_app_user_oauth") {
    const accessToken = await loadOrRefreshUserAccessToken(auth, opts?.fetchImpl);
    const config = readGitHubAppUserOauthConfig();
    const repos = await listUserInstallationRepos(
      accessToken,
      auth.installationId,
      opts?.fetchImpl,
    );
    assertSandboxRepoInList(repos, config.allowedFullName);
    repoSeed = repos.map((r) => {
      const [owner, name] = r.fullName.split("/");
      const perms = (r as { permissions?: { contents?: string; pull_requests?: string } })
        .permissions;
      return {
        owner: owner ?? "",
        name: name ?? r.fullName,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
        permissions: permissionsFromObserved(perms),
      };
    });
  } else {
    assertScriptedGithubAuthAllowed({ requestHost: opts?.requestHost });
    const provider = resolveGitHubProvider();
    const listed = await provider.listInstallationRepos(pilotId, auth.installationId);
    const fixturePerms = scriptedFixturePermissions();
    repoSeed = listed.map((r) => ({
      owner: r.owner,
      name: r.name,
      fullName: r.fullName,
      defaultBranch: r.defaultBranch,
      permissions: fixturePerms,
    }));
  }

  await db.transaction(async (tx) => {
    await seedAuthorizedReposInTx(tx, pilotId, auth.id, repoSeed);
    await tx
      .update(integrationAuthorizations)
      .set({ lastValidatedAt: new Date(), updatedAt: new Date() })
      .where(eq(integrationAuthorizations.id, auth.id));
  });
  return getIntegrationStatus(pilotId);
}

/**
 * Load user access token; refresh with fencing if expired.
 * Concurrent refresh: CAS on refresh ciphertext so a rotated token is not reused twice.
 */
async function loadOrRefreshUserAccessToken(
  auth: typeof integrationAuthorizations.$inferSelect,
  fetchImpl?: typeof fetch,
): Promise<string> {
  if (!auth.tokenCiphertext || !auth.tokenNonce || !auth.tokenKeyVersion) {
    await markRequiresReauth(auth.pilotId, auth.id);
    throw new StudioError("ACCESS_DENIED", "User token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  const now = Date.now();
  const expiresAt = auth.tokenExpiresAt?.getTime() ?? null;
  if (expiresAt == null || expiresAt > now + 30_000) {
    return openSecret({
      ciphertext: auth.tokenCiphertext,
      nonce: auth.tokenNonce,
      keyVersion: auth.tokenKeyVersion,
    });
  }
  // Expired — need refresh.
  if (!auth.refreshCiphertext || !auth.refreshNonce) {
    await markRequiresReauth(auth.pilotId, auth.id);
    throw new StudioError("ACCESS_DENIED", "Refresh token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError("NOT_CONFIGURED", "Credentials refresh absents", { httpStatus: 503 });
  }
  const refreshPlain = openSecret({
    ciphertext: auth.refreshCiphertext,
    nonce: auth.refreshNonce,
    keyVersion: auth.tokenKeyVersion,
  });
  const config = readGitHubAppUserOauthConfig();
  let tokens;
  try {
    tokens = await refreshUserAccessToken({
      config,
      refreshToken: refreshPlain,
      fetchImpl,
    });
  } catch (e) {
    // Network vs revoke: ACCESS_DENIED → reauth; dependency → keep credentials.
    if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      await markRequiresReauth(auth.pilotId, auth.id);
    }
    throw e;
  }
  const sealedAccess = sealSecret(tokens.accessToken);
  const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
  // Fence: only the owner of the previous refresh ciphertext may rotate.
  const updated = await db
    .update(integrationAuthorizations)
    .set({
      tokenCiphertext: sealedAccess.ciphertext,
      tokenNonce: sealedAccess.nonce,
      tokenKeyVersion: sealedAccess.keyVersion,
      refreshCiphertext: sealedRefresh?.ciphertext ?? null,
      refreshNonce: sealedRefresh?.nonce ?? null,
      tokenExpiresAt: tokens.expiresAt,
      lastValidatedAt: new Date(),
      updatedAt: new Date(),
      scopesJson: JSON.stringify(tokens.scopes),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${auth.refreshCiphertext}`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  if (!updated[0]) {
    // Concurrent rotation won — re-read.
    const fresh = (
      await db
        .select()
        .from(integrationAuthorizations)
        .where(eq(integrationAuthorizations.id, auth.id))
        .limit(1)
    )[0];
    if (!fresh?.tokenCiphertext || !fresh.tokenNonce || !fresh.tokenKeyVersion) {
      throw new StudioError("CONFLICT", "Rotation concurrente — token indisponible");
    }
    return openSecret({
      ciphertext: fresh.tokenCiphertext,
      nonce: fresh.tokenNonce,
      keyVersion: fresh.tokenKeyVersion,
    });
  }
  return tokens.accessToken;
}

async function markRequiresReauth(pilotId: string, authId: string) {
  const now = new Date();
  await db
    .update(integrationAuthorizations)
    .set({
      status: "REQUIRES_REAUTH",
      updatedAt: now,
      tokenCiphertext: null,
      tokenNonce: null,
      tokenKeyVersion: null,
      refreshCiphertext: null,
      refreshNonce: null,
      tokenExpiresAt: null,
    })
    .where(
      and(
        eq(integrationAuthorizations.id, authId),
        eq(integrationAuthorizations.pilotId, pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
      ),
    );
}

export async function disconnectIntegration(pilotId: string) {
  const now = new Date();
  // Local wipe only — KNOWN GAP: no remote GitHub OAuth revocation without dedicated API call.
  await db.transaction(async (tx) => {
    await tx
      .update(integrationAuthorizations)
      .set({
        status: "REVOKED",
        revokedAt: now,
        updatedAt: now,
        tokenCiphertext: null,
        tokenNonce: null,
        tokenKeyVersion: null,
        refreshCiphertext: null,
        refreshNonce: null,
        tokenExpiresAt: null,
      })
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    await tx
      .update(authorizedRepositories)
      .set({ status: "REMOVED", syncedAt: now })
      .where(
        and(
          eq(authorizedRepositories.pilotId, pilotId),
          eq(authorizedRepositories.status, "ACTIVE"),
        ),
      );
  });
  return getIntegrationStatus(pilotId);
}

export async function setPendingApproval(pilotId: string) {
  const auth = (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(eq(integrationAuthorizations.pilotId, pilotId))
      .orderBy(desc(integrationAuthorizations.createdAt))
      .limit(1)
  )[0];
  const now = new Date();
  if (auth) {
    await db
      .update(integrationAuthorizations)
      .set({ status: "PENDING_APPROVAL", updatedAt: now })
      .where(eq(integrationAuthorizations.id, auth.id));
  } else {
    await db.insert(integrationAuthorizations).values({
      id: newId("iauth"),
      pilotId,
      provider: "github",
      status: "PENDING_APPROVAL",
      metadataJson: "{}",
      createdAt: now,
      updatedAt: now,
    });
  }
  return getIntegrationStatus(pilotId);
}

export async function markAccessRemoved(pilotId: string) {
  const now = new Date();
  await db.transaction(async (tx) => {
    await tx
      .update(integrationAuthorizations)
      .set({
        status: "ACCESS_REMOVED",
        updatedAt: now,
        tokenCiphertext: null,
        tokenNonce: null,
        refreshCiphertext: null,
        refreshNonce: null,
      })
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    await tx
      .update(authorizedRepositories)
      .set({ status: "REMOVED", syncedAt: now })
      .where(
        and(
          eq(authorizedRepositories.pilotId, pilotId),
          eq(authorizedRepositories.status, "ACTIVE"),
        ),
      );
  });
  return getIntegrationStatus(pilotId);
}
```

## ANNEXE — Sections modifiées déterminantes

### persistOwnedProgress (lease actif)
```
/**
 * Persist progress under ownership. CAS predicate includes claimToken in SQL —
 * never trust a post-UPDATE readback of a token this UPDATE just wrote.
 */
async function persistOwnedProgress(
  attemptId: string,
  claimToken: string,
  existingResultJson: string,
  progress: PublicationProgress,
) {
  const claim = readClaim(existingResultJson);
  if (!claim || claim.claimToken !== claimToken) {
    throw new StudioError("CONFLICT", "Claim fence invalide — progression non écrite");
  }
  const nextJson = writeProgress(existingResultJson, progress, claim);
  const updated = await db
    .update(effectAttempts)
    .set({ resultJson: nextJson, updatedAt: new Date() })
    .where(
      and(
        eq(effectAttempts.id, attemptId),
        eq(effectAttempts.status, "DISPATCHED"),
        sqlClaimTokenEquals(claimToken),
        sqlClaimLeaseActive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Progression refusée — claimToken non propriétaire ou bail inactif (fencing SQL)",
    );
  }
```

### refreshUserAccessToken
```
/** Refresh a GitHub App user access token (expiring user-to-server). Server-only. */
export async function refreshUserAccessToken(input: {
  config: UserOauthConfig;
  refreshToken: string;
  fetchImpl?: typeof fetch;
}): Promise<UserTokenBundle> {
  const raw = await ghJson<{
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    scope?: string;
    error?: string;
  }>(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: input.config.clientId,
        client_secret: input.config.clientSecret,
        grant_type: "refresh_token",
        refresh_token: input.refreshToken,
      }),
    },
    input.fetchImpl,
  );
  if (!raw.access_token) {
    throw new StudioError("ACCESS_DENIED", "Refresh user token refusé ou révoqué", {
      httpStatus: 403,
    });
  }
  const expiresAt =
    typeof raw.expires_in === "number"
      ? new Date(Date.now() + raw.expires_in * 1000)
      : null;
  const scopes = (raw.scope ?? "")
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return {
    accessToken: raw.access_token,
    // GitHub rotates refresh tokens — old one is invalid after success.
    refreshToken: raw.refresh_token ?? null,
    expiresAt,
    scopes,
  };
}

export async function exchangeAuthorizationCode(input: {
  config: UserOauthConfig;
  code: string;
```

### schema oauth states + revision
```
/** D9 — OAuth/state for GitHub App user-to-server connect (CSRF + PKCE). */
export const integrationOauthStates = pgTable(
  "integration_oauth_states",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    stateToken: text("state_token").notNull(),
    returnPath: text("return_path").notNull().default("/settings/integrations"),
    codeVerifier: text("code_verifier"),
    nonce: text("nonce"),
    codeChallengeMethod: text("code_challenge_method"),
    /** Better Auth / DEV adapter session id — binds state to effective Studio session. */
    studioSessionId: text("studio_session_id"),
    /** Server-chosen flow at start: scripted | github_app_user_oauth — never client-chosen. */
    flow: text("flow"),
    consumedAt: timestamp("consumed_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("integration_oauth_states_token_uidx").on(t.stateToken),
    index("integration_oauth_states_session_idx").on(t.studioSessionId),
  ],
);

/** D9 — repos authorized for the installation (server-truth snapshot). */
export const authorizedRepositories = pgTable(
  "authorized_repositories",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")

773:export const schemaRevision = "011_oauth_session_binding";
```

### Tests PG sécurité (extraits)
```
1948:  it("D9 user-to-server SCRIPTED: state replay / session bind / no token leakage", async () => {
1949-    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64");
1950-    const { pilotId, sessionId } = await seedProject("git-oauth-a");
1951-    const start = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
1952-    expect(start.pkce).toBe(true);
1953-    expect(start.flow).toBe("scripted");
1954-    const status = await completeGitHubAuthorization({
1955-      pilotId,
1956-      state: start.state,
1957-      studioSessionId: sessionId,
1958-    });
1959-    expect(status.status).toBe("CONNECTED");
1960-    expect(status.githubUserId).toBe(`gh-${pilotId}`);
1961-    expect(JSON.stringify(status)).not.toMatch(/ciphertext|ghs_|scripted-access|BEGIN/);
1962-    expect(status.repositories[0]?.permissions?.source).toBe("scripted_fixture");
1963-
1964-    const authRow = (
1965-      await db
1966-        .select()
1967-        .from(integrationAuthorizations)
1968-        .where(eq(integrationAuthorizations.pilotId, pilotId))
1969-        .limit(1)
1970-    )[0]!;
1971-    expect(authRow.tokenCiphertext).toBeTruthy();
1972-    expect(authRow.tokenNonce).toBeTruthy();
1973-
--
2010:  it("D9 security: REAL demanded without credentials → NOT_CONFIGURED (no SCRIPTED fallback)", async () => {
2011-    const prev = process.env.STUDIO_GITHUB_USER_OAUTH;
2012-    const prevAllow = process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
2013-    process.env.STUDIO_GITHUB_USER_OAUTH = "real";
2014-    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
2015-    delete process.env.GITHUB_APP_CLIENT_ID;
2016-    delete process.env.GITHUB_APP_CLIENT_SECRET;
2017-    delete process.env.GITHUB_APP_CALLBACK_URL;
2018-    const { pilotId, sessionId } = await seedProject("git-oauth-nofallback");
2019-    await expect(
2020-      startGitHubAuthorization(pilotId, "/settings/integrations", sessionId),
2021-    ).rejects.toMatchObject({ code: "NOT_CONFIGURED" });
2022-    if (prev === undefined) delete process.env.STUDIO_GITHUB_USER_OAUTH;
2023-    else process.env.STUDIO_GITHUB_USER_OAUTH = prev;
2024-    if (prevAllow === undefined) delete process.env.STUDIO_ALLOW_SCRIPTED_GITHUB;
2025-    else process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = prevAllow;
2026-  });
2027-
2028:  it("D9 security: foreign installation_id cannot authorize SCRIPTED CONNECTED", async () => {
2029-    const { pilotId, sessionId } = await seedProject("git-oauth-inst");
2030-    const start = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
2031-    await expect(
2032-      completeGitHubAuthorization({
2033-        pilotId,
2034-        state: start.state,
2035-        studioSessionId: sessionId,
2036-        installationId: "179935689",
2037-      }),
2038-    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
2039-  });
2040-
2041:  it("D9 security: permissions snapshot is scripted_fixture not silent REAL write", async () => {
2042-    const { pilotId, projectId, sessionId } = await seedProject("git-oauth-perms");
2043-    const { status } = await connectAndAttach(pilotId, projectId, sessionId);
2044-    expect(status.repositories[0]!.permissions).toMatchObject({
2045-      source: "scripted_fixture",
2046-      contents: "write",
2047-      pull_requests: "write",
2048-    });
2049-    const row = (
2050-      await db
2051-        .select()
2052-        .from(authorizedRepositories)
2053-        .where(eq(authorizedRepositories.id, status.repositories[0]!.id))
2054-        .limit(1)
2055-    )[0]!;
2056-    const parsed = JSON.parse(row.permissionsJson);
2057-    expect(parsed.source).toBe("scripted_fixture");
2058-  });
2059-
2060:  it("D7: persistOwnedProgress refuses when lease expired (same claimToken)", async () => {
2061-    const { pilotId, projectId, preparationId } = await seedProject("git-d7-prog-lease");
2062-    const { repoId } = await connectAndAttach(pilotId, projectId);
2063-    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D7pl");
2064-    const prepared = await preparePublication({
2065-      pilotId,
2066-      projectId,
2067-      documentId,
2068-      revisionId,
2069-      repositoryId: repoId,
2070-      targetPath: "docs/d7prog-lease.md",
2071-      targetBranch: "main",
2072-      correlationKey: newId("d7pl"),
2073-    });
2074-    await authzPub(pilotId, projectId, prepared);
2075-    ExecutionBarrierRegistry.clear();
2076-    ExecutionBarrierRegistry.arm("before:CREATE_BRANCH");
2077-
2078-    const dispatchA = dispatchPublication({
2079-      pilotId,
2080-      projectId,
2081-      attemptId: prepared.attemptId,
2082-    }).catch((e: unknown) => e);
2083-
2084-    for (let i = 0; i < 100; i++) {
2085-      const row = (
```

---
FIN REVIEW PACK FULL
