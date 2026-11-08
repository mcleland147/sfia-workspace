# SFIA Review Pack FULL — ML4 GitHub Auth REFRESH LIFECYCLE CLOSURE (R1-A / R1-B)

**SFIA v2.6 / CRITICAL / DELIVERY — INC CORRECTIF**
**Date (Europe/Paris):** 2026-11-08 ~22:36 CET
**Product version:** NO RELEASE / `0.0.0-dev`
**ENV-01:** DEV + E2E isolé — RECETTE/STABLE non touchés

---

## 1. Mandat Morris / date

GO EXPLICITE MORRIS — CORRECTION R1 sur handoff `59d07663b41fe3ac5fe8795456369a6c57104a83` :

- **R1-A — AMBIGUOUS NETWORK REFRESH** : après refresh distant engagé, ne jamais libérer la génération pour un second refresh aveugle sur l'ancien token.
- **R1-B — EXPIRED LEASE TERMINAL CAS** : propriétaire expiré ne peut confirmer génération, effacer tokens, REQUIRES_REAUTH, ni libérer un bail périmé pour rouvrir une rotation dangereuse.

**R2 CALLBACK : DÉJÀ ACCEPTÉ — NON ROUVERT.**

## 2. Git Truth initial et final

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` (`https://github.com/mcleland147/sfia-workspace.git`) |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche Product | `feat/next-git-collaboration-20261108` |
| HEAD / origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` (identique) |
| Branche Product distante | ABSENTE |
| État | LOCAL DIRTY préservé — **aucun** commit/push Product |
| Handoff entrée | `59d07663b41fe3ac5fe8795456369a6c57104a83` |
| Parent | `2a9eb05a0ff2a160dc2966a501b006c4c496042d` |
| Migrations 009–012 | présentes ; **aucune nouvelle** |

Fetch non destructif OK. Aucun reset/stash.

## 3. Sources Git et SHA

| Artefact | SHA-256 |
|---|---|
| `authorization-service.ts` | `e978529a274f75297a59c8c31ba90307345b8ea708be5b36e64f05c951bf5421` |
| `git-collaboration.pg.test.ts` | `3cdc333b9724114204f6e6bc96a4194deca61f73686dd8f4b7b556de7316e6ba` |
| `012_auth_concurrency_safety.sql` (inchangé) | `83ac3a3dd5168da27360176bb2db93733b3b21cc0060f0fb41fa7da93efd9203` |
| `oauth-concurrency-barrier.ts` (inchangé) | `7d739940b2489eb56fc349b047f8e43367cee18e9e1bea888ae126a238264bb1` |

Sources SFIA/gouvernance/conception lues ; code LOCAL prioritaire.

## 4. Git Review Index exhaustif (ce cycle)

1. `projects/sfia-studio-next/web/src/domains/integrations/authorization-service.ts` — R1-A/R1-B
2. `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts` — TA–TF + T04
3. `projects/sfia-studio-next/construction/delivery-history.md`
4. `projects/sfia-studio-next/construction/integration-git/specification-technique.md`
5. `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`
6. `.tmp-sfia-review/chatgpt-review.md` — ce pack

Non touchés : migrations, schema, barrier, governance/, R2 callback path (hors régression TF), D7/D8 Option A.

## 5. Analyse du cycle de vie du bail

```
virgin (token NULL, expires NULL)
  → clean claim → active lease (token=L, expires=now+TTL)
      → GitHub refresh engagé
          → SUCCESS + CAS actif → persist G2, clear lease → virgin
          → ACCESS_DENIED + lease actif → markRequiresReauth (wipe)
          → AMBIGU (DEPENDENCY_UNAVAILABLE) → KEEP lease (R1-A)
          → SUCCESS/DENY après expiry → CAS/mark = 0 row (R1-B) ; lease expires remains
  → concurrent pendant active → CONFLICT (0 GitHub)
  → après expiry → reclaim (new L') → priorLeaseExpired → markRequiresReauth fail-closed (0 GitHub)
```

## 6. R1-A avant / après

### Avant
`catch` non-ACCESS_DENIED appelait `clearRefreshLease()` → slot virgin → second worker pouvait clean-claim et re-appeler GitHub avec G1 ambigu.

### Après
- Ambigu après remote engagé : **aucun** `clearRefreshLease`.
- Bail L1 + expires conservés.
- Concurrent : CONFLICT borné.
- Après expiry : reclaim fail-closed existant → REQUIRES_REAUTH, githubCalls inchangé.

## 7. R1-B avant / après

### Avant
CAS persist / markRequiresReauth / clearRefreshLease : id + pilot + CONNECTED + gen + leaseToken — **sans** `expires_at > now()`.

### Après
Tous les chemins propriétaire exigent `refresh_lease_expires_at > now()` (temps PostgreSQL).
Virgin paths (`expectedLeaseToken == null`) exigent token **et** expires IS NULL.
Lost CAS same-G1 : ne restitue plus l'access expiré (CONFLICT).

## 8. CAS SQL exacts

### Persist rotation
```
UPDATE … SET new tokens, lease NULL
WHERE id AND pilot_id AND status='CONNECTED'
  AND refresh_ciphertext = expectedGen
  AND refresh_lease_token = leaseToken
  AND refresh_lease_expires_at > now()
```

### markRequiresReauth (owner)
```
UPDATE … SET REQUIRES_REAUTH, wipe
WHERE id AND pilot_id AND status='CONNECTED'
  AND refresh_ciphertext = expectedGen
  AND refresh_lease_token = expectedLease
  AND refresh_lease_expires_at > now()
```

### markRequiresReauth (virgin / missing token)
```
… AND refresh_lease_token IS NULL AND refresh_lease_expires_at IS NULL
```

### clearRefreshLease
```
UPDATE … SET lease NULL
WHERE id AND refresh_lease_token = leaseToken
  AND refresh_lease_expires_at > now()
```

## 9. Chemins erreur et reprise

| Chemin | Comportement |
|---|---|
| ACCESS_DENIED + lease actif | markRequiresReauth |
| ACCESS_DENIED + lease expiré | mark no-op ; CONNECTED+G1+expired lease remain ; reclaim later fail-closed |
| DEPENDENCY_UNAVAILABLE | keep lease ; no revoke |
| Late positive + expired | CAS 0 ; CONFLICT ; no G1 hand-back |
| Reclaim expired | priorLeaseExpired → REQUIRES_REAUTH ; 0 GitHub |
| Disconnect pendant refresh | status≠CONNECTED → CONFLICT |

## 10. Tests TA–TE (+ TF) complets

Voir section 14 pour le code source intégral du describe.

| ID | Preuve |
|---|---|
| TA | ambigu → lease retained → B CONFLICT githubCalls=1 → expire → C REQUIRES_REAUTH githubCalls=1 |
| TB | late positive after expiry → CONFLICT ; G1 intact ; mark expired owner false |
| TC | late ACCESS_DENIED after expiry → CONNECTED ; mark false |
| TD | B owner preserved against late A |
| TE | lease never virgin after ambigu |
| TF | R2 loser CONFLICT |
| T04 | mis à jour : lease non NULL |

## 11. Preuves PostgreSQL

Filtres lifecycle : PASS.
Suite integration : **211 PASS** / 12 files — Start 22:35:01 CET — 20.15s.

## 12. Régression R2/D7/D8

- TF + C2 : callback CONFLICT
- UNIQUE CONNECTED
- D7/D8 tests rejoués dans le même corpus
- Option A non touchée
- SCRIPTED guard / AES-GCM / session-bound : préservés

## 13. Contenu fichiers créés

AUCUN fichier créé.

## 14. Sections complètes / contenu modifié

### 14.A `authorization-service.ts` — région refresh lifecycle complète

```typescript
type RefreshLeaseClaim = {
  leaseToken: string;
  /** True when reclaiming an expired lease — prior GitHub call may have had effect. */
  priorLeaseExpired: boolean;
};

/**
 * Claim exclusive refresh lease for one generation (refresh_ciphertext).
 * Cross-process via PostgreSQL — no long-held txn during GitHub I/O.
 * Prefers a clean claim (lease NULL); reclaim of expired lease is flagged fail-closed.
 */
async function claimRefreshLease(
  auth: typeof integrationAuthorizations.$inferSelect,
  expectedRefreshCiphertext: string,
): Promise<RefreshLeaseClaim | null> {
  const leaseToken = newId("rfl");
  const expiresAt = new Date(Date.now() + REFRESH_LEASE_MS);
  await OAuthConcurrencyBarrier.before("before:REFRESH_CLAIM");

  // Prefer virgin lease slot — safe to call GitHub with this generation.
  const clean = await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: leaseToken,
      refreshLeaseExpiresAt: expiresAt,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`,
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  if (clean[0]) return { leaseToken, priorLeaseExpired: false };

  // Expired lease present: take ownership only to fail-closed — do NOT blind-refresh.
  const reclaimed = await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: leaseToken,
      refreshLeaseExpiresAt: expiresAt,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} <= now()`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  if (reclaimed[0]) return { leaseToken, priorLeaseExpired: true };
  return null;
}

/**
 * Clear lease only while ownership is still active (R1-B).
 * Never opens a virgin slot after expiry or after an ambiguous remote attempt (R1-A).
 */
async function clearRefreshLease(authId: string, leaseToken: string) {
  await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, authId),
        eq(integrationAuthorizations.refreshLeaseToken, leaseToken),
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
      ),
    );
}

function openAccessIfPresent(
  row: typeof integrationAuthorizations.$inferSelect,
): string | null {
  if (!row.tokenCiphertext || !row.tokenNonce || !row.tokenKeyVersion) return null;
  return openSecret({
    ciphertext: row.tokenCiphertext,
    nonce: row.tokenNonce,
    keyVersion: row.tokenKeyVersion,
  });
}

/**
 * Load user access token; refresh with durable lease + generation+lease fencing.
 * A stale/expired lease owner must never wipe a current owner's tokens (R1).
 */
export async function loadOrRefreshUserAccessToken(
  auth: typeof integrationAuthorizations.$inferSelect,
  fetchImpl?: typeof fetch,
): Promise<string> {
  if (!auth.tokenCiphertext || !auth.tokenNonce || !auth.tokenKeyVersion) {
    await markRequiresReauth(auth.pilotId, auth.id, auth.refreshCiphertext, null);
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
  if (!auth.refreshCiphertext || !auth.refreshNonce) {
    await markRequiresReauth(auth.pilotId, auth.id, null, null);
    throw new StudioError("ACCESS_DENIED", "Refresh token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError("NOT_CONFIGURED", "Credentials refresh absents", { httpStatus: 503 });
  }

  const expectedRefreshCiphertext = auth.refreshCiphertext;
  const claim = await claimRefreshLease(auth, expectedRefreshCiphertext);
  if (!claim) {
    // Another worker holds an active lease — reload; do not steal.
    await OAuthConcurrencyBarrier.before("before:REFRESH_WAIT_ACTIVE");
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("ACCESS_DENIED", "Autorisation plus CONNECTED pendant refresh", {
        httpStatus: 403,
      });
    }
    if (fresh.refreshCiphertext !== expectedRefreshCiphertext) {
      const access = openAccessIfPresent(fresh);
      if (access) return access;
      throw new StudioError("CONFLICT", "Génération refresh avancée — token inaccessible");
    }
    // Same generation, active lease held by other — bounded conflict (no blind second remote).
    throw new StudioError("CONFLICT", "Refresh lease concurrent — réessayer");
  }

  // Expired-lease reclaim: prior GitHub call may have rotated — fail-closed, no second remote.
  if (claim.priorLeaseExpired) {
    await markRequiresReauth(
      auth.pilotId,
      auth.id,
      expectedRefreshCiphertext,
      claim.leaseToken,
    );
    throw new StudioError(
      "ACCESS_DENIED",
      "Refresh ambigu après lease expiré — REQUIRES_REAUTH",
      { httpStatus: 403 },
    );
  }

  auth = (await reloadAuthorization(auth.id)) ?? auth;
  const leaseToken = claim.leaseToken;

  const refreshPlain = openSecret({
    ciphertext: expectedRefreshCiphertext,
    nonce: auth.refreshNonce!,
    keyVersion: auth.tokenKeyVersion!,
  });
  const config = readGitHubAppUserOauthConfig();

  let tokens;
  try {
    await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
    tokens = await refreshUserAccessToken({
      config,
      refreshToken: refreshPlain,
      fetchImpl,
    });
  } catch (e) {
    if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      // Proven invalid credentials for THIS active lease owner + generation only (R1-B).
      await markRequiresReauth(
        auth.pilotId,
        auth.id,
        expectedRefreshCiphertext,
        leaseToken,
      );
    }
    // R1-A: ambiguous network/timeout after remote engaged — do NOT clearRefreshLease.
    // Keep lease token+expiry so concurrent workers cannot blind-refresh G1; after expiry,
    // reclaim fail-closed forces REQUIRES_REAUTH without a second GitHub rotation.
    throw e;
  }

  const sealedAccess = sealSecret(tokens.accessToken);
  const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
  // Persist only if we still own an *active* lease AND the expected generation (R1-B).
  const updated = await db
    .update(integrationAuthorizations)
    .set({
      tokenCiphertext: sealedAccess.ciphertext,
      tokenNonce: sealedAccess.nonce,
      tokenKeyVersion: sealedAccess.keyVersion,
      refreshCiphertext: sealedRefresh?.ciphertext ?? null,
      refreshNonce: sealedRefresh?.nonce ?? null,
      tokenExpiresAt: tokens.expiresAt,
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
      lastValidatedAt: new Date(),
      updatedAt: new Date(),
      scopesJson: JSON.stringify(tokens.scopes),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        eq(integrationAuthorizations.refreshLeaseToken, leaseToken),
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });

  if (!updated[0]) {
    // Lost CAS (lease expired/stolen or generation moved) — never wipe current owner.
    // clearRefreshLease is no-op if expired (R1-A/B): leave durable ambiguous/expired trace.
    await clearRefreshLease(auth.id, leaseToken);
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("CONFLICT", "Autorisation remplacée pendant refresh");
    }
    // Only accept another owner's successful rotation (generation advanced).
    // Same G1 after our failed persist must NOT return the pre-refresh expired access (R1-B).
    if (fresh.refreshCiphertext !== expectedRefreshCiphertext) {
      const access = openAccessIfPresent(fresh);
      if (access) return access;
    }
    throw new StudioError("CONFLICT", "Rotation concurrente — token indisponible");
  }
  return tokens.accessToken;
}

/**
 * REQUIRES_REAUTH only when generation AND lease ownership match (R1 fencing).
 * expectedLeaseToken null = virgin lease slot only (missing-token paths).
 * Non-null owner must still hold an *active* lease at DB time (R1-B).
 */
export async function markRequiresReauth(
  pilotId: string,
  authId: string,
  expectedRefreshCiphertext: string | null,
  expectedLeaseToken: string | null,
): Promise<boolean> {
  const now = new Date();
  const genPred =
    expectedRefreshCiphertext == null
      ? sql`${integrationAuthorizations.refreshCiphertext} IS NULL`
      : sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`;
  const leasePred =
    expectedLeaseToken == null
      ? and(
          sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`,
          sql`${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL`,
        )
      : and(
          eq(integrationAuthorizations.refreshLeaseToken, expectedLeaseToken),
          sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
        );
  const updated = await db
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
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
    })
    .where(
      and(
        eq(integrationAuthorizations.id, authId),
        eq(integrationAuthorizations.pilotId, pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        genPred,
        leasePred,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  return Boolean(updated[0]);
}


```

### 14.B Fichier `authorization-service.ts` intégral (SHA-256 `e978529a274f75297a59c8c31ba90307345b8ea708be5b36e64f05c951bf5421`)

```typescript
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
import { OAuthConcurrencyBarrier } from "./oauth-concurrency-barrier";
import type { IntegrationStatus } from "./types";

const STATE_TTL_MS = 15 * 60 * 1000;
const REFRESH_LEASE_MS = 20_000;

function isUniqueViolation(e: unknown): boolean {
  if (!e || typeof e !== "object") return false;
  const code = "code" in e ? String((e as { code: unknown }).code) : "";
  if (code === "23505") return true;
  const cause = "cause" in e ? (e as { cause: unknown }).cause : null;
  if (cause && typeof cause === "object" && "code" in cause) {
    return String((cause as { code: unknown }).code) === "23505";
  }
  // drizzle/postgres may wrap message
  const msg = e instanceof Error ? e.message : String(e);
  return /duplicate key|unique constraint|one_connected/i.test(msg);
}

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
  // C2: partial UNIQUE (pilot_id, provider) WHERE CONNECTED enforces cross-process exclusivity.
  try {
    await OAuthConcurrencyBarrier.before("before:AUTH_INSERT");
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
          refreshLeaseToken: null,
          refreshLeaseExpiresAt: null,
        })
        .where(
          and(
            eq(integrationAuthorizations.pilotId, input.pilotId),
            eq(integrationAuthorizations.provider, "github"),
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
  } catch (e) {
    if (isUniqueViolation(e)) {
      // R2: losing callback must NOT present another callback's CONNECTED as own success.
      // UI may reload status separately; this attempt returns CONFLICT only.
      throw new StudioError(
        "CONFLICT",
        "Collision CONNECTED — cette tentative n'a pas créé l'autorisation",
      );
    }
    throw e;
  }

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

async function reloadAuthorization(authId: string) {
  return (
    await db
      .select()
      .from(integrationAuthorizations)
      .where(eq(integrationAuthorizations.id, authId))
      .limit(1)
  )[0];
}

type RefreshLeaseClaim = {
  leaseToken: string;
  /** True when reclaiming an expired lease — prior GitHub call may have had effect. */
  priorLeaseExpired: boolean;
};

/**
 * Claim exclusive refresh lease for one generation (refresh_ciphertext).
 * Cross-process via PostgreSQL — no long-held txn during GitHub I/O.
 * Prefers a clean claim (lease NULL); reclaim of expired lease is flagged fail-closed.
 */
async function claimRefreshLease(
  auth: typeof integrationAuthorizations.$inferSelect,
  expectedRefreshCiphertext: string,
): Promise<RefreshLeaseClaim | null> {
  const leaseToken = newId("rfl");
  const expiresAt = new Date(Date.now() + REFRESH_LEASE_MS);
  await OAuthConcurrencyBarrier.before("before:REFRESH_CLAIM");

  // Prefer virgin lease slot — safe to call GitHub with this generation.
  const clean = await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: leaseToken,
      refreshLeaseExpiresAt: expiresAt,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`,
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  if (clean[0]) return { leaseToken, priorLeaseExpired: false };

  // Expired lease present: take ownership only to fail-closed — do NOT blind-refresh.
  const reclaimed = await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: leaseToken,
      refreshLeaseExpiresAt: expiresAt,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} <= now()`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  if (reclaimed[0]) return { leaseToken, priorLeaseExpired: true };
  return null;
}

/**
 * Clear lease only while ownership is still active (R1-B).
 * Never opens a virgin slot after expiry or after an ambiguous remote attempt (R1-A).
 */
async function clearRefreshLease(authId: string, leaseToken: string) {
  await db
    .update(integrationAuthorizations)
    .set({
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, authId),
        eq(integrationAuthorizations.refreshLeaseToken, leaseToken),
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
      ),
    );
}

function openAccessIfPresent(
  row: typeof integrationAuthorizations.$inferSelect,
): string | null {
  if (!row.tokenCiphertext || !row.tokenNonce || !row.tokenKeyVersion) return null;
  return openSecret({
    ciphertext: row.tokenCiphertext,
    nonce: row.tokenNonce,
    keyVersion: row.tokenKeyVersion,
  });
}

/**
 * Load user access token; refresh with durable lease + generation+lease fencing.
 * A stale/expired lease owner must never wipe a current owner's tokens (R1).
 */
export async function loadOrRefreshUserAccessToken(
  auth: typeof integrationAuthorizations.$inferSelect,
  fetchImpl?: typeof fetch,
): Promise<string> {
  if (!auth.tokenCiphertext || !auth.tokenNonce || !auth.tokenKeyVersion) {
    await markRequiresReauth(auth.pilotId, auth.id, auth.refreshCiphertext, null);
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
  if (!auth.refreshCiphertext || !auth.refreshNonce) {
    await markRequiresReauth(auth.pilotId, auth.id, null, null);
    throw new StudioError("ACCESS_DENIED", "Refresh token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError("NOT_CONFIGURED", "Credentials refresh absents", { httpStatus: 503 });
  }

  const expectedRefreshCiphertext = auth.refreshCiphertext;
  const claim = await claimRefreshLease(auth, expectedRefreshCiphertext);
  if (!claim) {
    // Another worker holds an active lease — reload; do not steal.
    await OAuthConcurrencyBarrier.before("before:REFRESH_WAIT_ACTIVE");
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("ACCESS_DENIED", "Autorisation plus CONNECTED pendant refresh", {
        httpStatus: 403,
      });
    }
    if (fresh.refreshCiphertext !== expectedRefreshCiphertext) {
      const access = openAccessIfPresent(fresh);
      if (access) return access;
      throw new StudioError("CONFLICT", "Génération refresh avancée — token inaccessible");
    }
    // Same generation, active lease held by other — bounded conflict (no blind second remote).
    throw new StudioError("CONFLICT", "Refresh lease concurrent — réessayer");
  }

  // Expired-lease reclaim: prior GitHub call may have rotated — fail-closed, no second remote.
  if (claim.priorLeaseExpired) {
    await markRequiresReauth(
      auth.pilotId,
      auth.id,
      expectedRefreshCiphertext,
      claim.leaseToken,
    );
    throw new StudioError(
      "ACCESS_DENIED",
      "Refresh ambigu après lease expiré — REQUIRES_REAUTH",
      { httpStatus: 403 },
    );
  }

  auth = (await reloadAuthorization(auth.id)) ?? auth;
  const leaseToken = claim.leaseToken;

  const refreshPlain = openSecret({
    ciphertext: expectedRefreshCiphertext,
    nonce: auth.refreshNonce!,
    keyVersion: auth.tokenKeyVersion!,
  });
  const config = readGitHubAppUserOauthConfig();

  let tokens;
  try {
    await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
    tokens = await refreshUserAccessToken({
      config,
      refreshToken: refreshPlain,
      fetchImpl,
    });
  } catch (e) {
    if (e instanceof StudioError && e.code === "ACCESS_DENIED") {
      // Proven invalid credentials for THIS active lease owner + generation only (R1-B).
      await markRequiresReauth(
        auth.pilotId,
        auth.id,
        expectedRefreshCiphertext,
        leaseToken,
      );
    }
    // R1-A: ambiguous network/timeout after remote engaged — do NOT clearRefreshLease.
    // Keep lease token+expiry so concurrent workers cannot blind-refresh G1; after expiry,
    // reclaim fail-closed forces REQUIRES_REAUTH without a second GitHub rotation.
    throw e;
  }

  const sealedAccess = sealSecret(tokens.accessToken);
  const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
  // Persist only if we still own an *active* lease AND the expected generation (R1-B).
  const updated = await db
    .update(integrationAuthorizations)
    .set({
      tokenCiphertext: sealedAccess.ciphertext,
      tokenNonce: sealedAccess.nonce,
      tokenKeyVersion: sealedAccess.keyVersion,
      refreshCiphertext: sealedRefresh?.ciphertext ?? null,
      refreshNonce: sealedRefresh?.nonce ?? null,
      tokenExpiresAt: tokens.expiresAt,
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
      lastValidatedAt: new Date(),
      updatedAt: new Date(),
      scopesJson: JSON.stringify(tokens.scopes),
    })
    .where(
      and(
        eq(integrationAuthorizations.id, auth.id),
        eq(integrationAuthorizations.pilotId, auth.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`,
        eq(integrationAuthorizations.refreshLeaseToken, leaseToken),
        sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });

  if (!updated[0]) {
    // Lost CAS (lease expired/stolen or generation moved) — never wipe current owner.
    // clearRefreshLease is no-op if expired (R1-A/B): leave durable ambiguous/expired trace.
    await clearRefreshLease(auth.id, leaseToken);
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("CONFLICT", "Autorisation remplacée pendant refresh");
    }
    // Only accept another owner's successful rotation (generation advanced).
    // Same G1 after our failed persist must NOT return the pre-refresh expired access (R1-B).
    if (fresh.refreshCiphertext !== expectedRefreshCiphertext) {
      const access = openAccessIfPresent(fresh);
      if (access) return access;
    }
    throw new StudioError("CONFLICT", "Rotation concurrente — token indisponible");
  }
  return tokens.accessToken;
}

/**
 * REQUIRES_REAUTH only when generation AND lease ownership match (R1 fencing).
 * expectedLeaseToken null = virgin lease slot only (missing-token paths).
 * Non-null owner must still hold an *active* lease at DB time (R1-B).
 */
export async function markRequiresReauth(
  pilotId: string,
  authId: string,
  expectedRefreshCiphertext: string | null,
  expectedLeaseToken: string | null,
): Promise<boolean> {
  const now = new Date();
  const genPred =
    expectedRefreshCiphertext == null
      ? sql`${integrationAuthorizations.refreshCiphertext} IS NULL`
      : sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`;
  const leasePred =
    expectedLeaseToken == null
      ? and(
          sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`,
          sql`${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL`,
        )
      : and(
          eq(integrationAuthorizations.refreshLeaseToken, expectedLeaseToken),
          sql`${integrationAuthorizations.refreshLeaseExpiresAt} > now()`,
        );
  const updated = await db
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
      refreshLeaseToken: null,
      refreshLeaseExpiresAt: null,
    })
    .where(
      and(
        eq(integrationAuthorizations.id, authId),
        eq(integrationAuthorizations.pilotId, pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
        genPred,
        leasePred,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  return Boolean(updated[0]);
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
        refreshLeaseToken: null,
        refreshLeaseExpiresAt: null,
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

### 14.C T04 mis à jour

```typescript
// T04 — DEPENDENCY_UNAVAILABLE: no inferred revocation; lease retained (R1-A)
  it("T04: DEPENDENCY_UNAVAILABLE does not revoke without proof", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t04");
    const err = await loadOrRefreshUserAccessToken(row, (async () => {
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub user OAuth TIMEOUT/échec", {
        httpStatus: 503,
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("DEPENDENCY_UNAVAILABLE");
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    // R1-A: ambiguous remote must leave durable lease — not a virgin slot.
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt).toBeTruthy();
    expect(still.refreshLeaseExpiresAt!.getTime()).toBeGreaterThan(Date.now());
    clearOauthEnv();
  });

  
```

### 14.D Describe TA–TF intégral

```typescript
describe("ML4 refresh lifecycle R1-A/R1-B (SCRIPTED/DET)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  function armOauthEnv() {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 11).toString("base64");
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
  }
  function clearOauthEnv() {
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
  }

  async function seedExpiredAuth(label: string) {
    const { pilotId } = await seedProject(label);
    const refresh = sealSecret("refresh-gen-1");
    const access = sealSecret("access-gen-1");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: "scripted-install-1",
      accountLogin: "scripted-user",
      githubUserId: `gh-${pilotId}`,
      tokenCiphertext: access.ciphertext,
      tokenNonce: access.nonce,
      tokenKeyVersion: access.keyVersion,
      refreshCiphertext: refresh.ciphertext,
      refreshNonce: refresh.nonce,
      tokenExpiresAt: new Date(Date.now() - 60_000),
      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
      connectedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const row = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    return { pilotId, authId, row, refresh, access };
  }

  // TA — ambiguous timeout: lease retained; no second GitHub refresh on G1
  it("TA: ambiguous DEPENDENCY_UNAVAILABLE retains lease; no second remote on G1", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-ta");
    let githubCalls = 0;
    const errA = await loadOrRefreshUserAccessToken(row, (async () => {
      githubCalls += 1;
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub user OAuth TIMEOUT/échec", {
        httpStatus: 503,
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect((errA as StudioError).code).toBe("DEPENDENCY_UNAVAILABLE");
    expect(githubCalls).toBe(1);
    const afterA = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(afterA.status).toBe("CONNECTED");
    expect(afterA.refreshCiphertext).toBe(refresh.ciphertext);
    expect(afterA.refreshLeaseToken).toBeTruthy();
    const leaseL1 = afterA.refreshLeaseToken!;
    expect(afterA.refreshLeaseExpiresAt!.getTime()).toBeGreaterThan(Date.now());

    // B tries immediately — active lease → CONFLICT, 0 extra GitHub.
    const errB = await loadOrRefreshUserAccessToken(afterA, (async () => {
      githubCalls += 1;
      return new Response("{}", { status: 500 });
    }) as unknown as typeof fetch).catch((e: unknown) => e);
    expect((errB as StudioError).code).toBe("CONFLICT");
    expect(githubCalls).toBe(1);

    // Expire L1 controlled; C reclaim → fail-closed REQUIRES_REAUTH, still 0 second remote.
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    const afterExpire = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(afterExpire.refreshLeaseToken).toBe(leaseL1);

    const errC = await loadOrRefreshUserAccessToken(afterExpire, (async () => {
      githubCalls += 1;
      return new Response(
        JSON.stringify({ access_token: "x", refresh_token: "y", expires_in: 3600 }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);
    expect((errC as StudioError).code).toBe("ACCESS_DENIED");
    expect(githubCalls).toBe(1);
    const final = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(final.status).toBe("REQUIRES_REAUTH");
    expect(final.tokenCiphertext).toBeNull();
    expect(final.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // TB — late positive after lease expiry: CAS 0 rows; G1 not overwritten
  it("TB: late positive response after lease expiry cannot CAS", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-tb");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-late",
          refresh_token: "refresh-late",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const mid = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(mid.refreshLeaseToken).toBeTruthy();
    // Expire L1; no other worker reclaim.
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const result = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(result).toBeInstanceOf(StudioError);
    expect((result as StudioError).code).toBe("CONFLICT");

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    // Lease not cleared to virgin (expired ownership cannot clear).
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt!.getTime()).toBeLessThanOrEqual(Date.now());

    // Expired owner cannot mark REQUIRES_REAUTH as if active.
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, still.refreshLeaseToken)).toBe(false);
    expect(
      (
        await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
      )[0]!.status,
    ).toBe("CONNECTED");
    clearOauthEnv();
  });

  // TC — late ACCESS_DENIED after expiry: cannot mark REQUIRES_REAUTH as active owner
  it("TC: late ACCESS_DENIED after lease expiry cannot mark REQUIRES_REAUTH", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-tc");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(JSON.stringify({ error: "bad_refresh_token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const mid = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    const leaseL1 = mid.refreshLeaseToken!;
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseExpiresAt: new Date(Date.now() - 1_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect((err as StudioError).code).toBe("ACCESS_DENIED");

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshLeaseToken).toBe(leaseL1);
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, leaseL1)).toBe(false);
    clearOauthEnv();
  });

  // TD — concurrent reclaim: late A cannot affect B
  it("TD: late responses from A cannot mutate B owner after reclaim", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-td");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-stale-A",
          refresh_token: "refresh-stale-A",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    const ownerBAccess = sealSecret("access-owner-B");
    const ownerBRefresh = sealSecret("refresh-owner-B");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        tokenCiphertext: ownerBAccess.ciphertext,
        tokenNonce: ownerBAccess.nonce,
        tokenKeyVersion: ownerBAccess.keyVersion,
        refreshCiphertext: ownerBRefresh.ciphertext,
        refreshNonce: ownerBRefresh.nonce,
        tokenExpiresAt: new Date(Date.now() + 3600_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    await pA;
    OAuthConcurrencyBarrier.clear();

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.refreshCiphertext).toBe(ownerBRefresh.ciphertext);
    expect(still.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    clearOauthEnv();
  });

  // TE — ambiguous timeout must not virginize lease slot
  it("TE: ambiguous timeout never returns lease slot to virgin", async () => {
    armOauthEnv();
    const { authId, row } = await seedExpiredAuth("r1-te");
    await loadOrRefreshUserAccessToken(row, (async () => {
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "timeout", { httpStatus: 503 });
    }) as unknown as typeof fetch).catch(() => undefined);

    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.refreshLeaseToken).not.toBeNull();
    expect(still.refreshLeaseExpiresAt).not.toBeNull();
    // Virgin claim predicate requires both NULL — prove not reclaimable as clean.
    expect(still.refreshLeaseToken).toBeTruthy();
    expect(still.refreshLeaseExpiresAt).toBeTruthy();
    clearOauthEnv();
  });

  // TF — R2 callback CONFLICT regression (non-régression)
  it("TF: R2 losing callback still returns CONFLICT not CONNECTED", async () => {
    const { pilotId, sessionId } = await seedProject("r1-tf-r2");
    const s1 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const s2 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");
    const p1 = completeGitHubAuthorization({
      pilotId,
      state: s1.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    const p2 = completeGitHubAuthorization({
      pilotId,
      state: s2.state,
      studioSessionId: sessionId,
    }).catch((e: unknown) => e);
    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [a, b] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();
    const ok = [a, b].filter(
      (o) => o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = [a, b].filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(ok).toHaveLength(1);
    expect(conflicts).toHaveLength(1);
  });
});


```

### 14.E Migration 012 (référence inchangée)

```sql
-- ML4 D9 concurrency safety (C1 refresh lease + C2 one CONNECTED).
-- ADDITIVE / non-destructive. DEV + e2e only.
-- Preflight required: zero duplicate (pilot_id, provider) CONNECTED rows.

ALTER TABLE integration_authorizations
  ADD COLUMN IF NOT EXISTS refresh_lease_token text,
  ADD COLUMN IF NOT EXISTS refresh_lease_expires_at timestamptz;

-- At most one CONNECTED authorization per Pilot × provider (cross-process).
CREATE UNIQUE INDEX IF NOT EXISTS integration_authorizations_one_connected_uidx
  ON integration_authorizations (pilot_id, provider)
  WHERE status = 'CONNECTED';

```

### 14.F Docs AS-IMPLEMENTED

#### specification-technique bandeau
```markdown
# R5 — Spécification technique candidate : collaboration Git et intégrations

> **AS-IMPLEMENTED LOCAL + REFRESH LIFECYCLE CLOSURE R1-A/R1-B (2026-11-08)** — `feat/next-git-collaboration-20261108` / baseline `c658f590`.
> Domaines : D9/D7/D8 ; migrations `008`–`012` inchangées (aucune migration nouvelle).
> **R1-A** : après refresh distant engagé, `DEPENDENCY_UNAVAILABLE` **conserve** le bail (pas de virgin slot) ; concurrent → CONFLICT ; après expiry → reclaim fail-closed sans 2e GitHub.
> **R1-B** : CAS persist / `markRequiresReauth` / `clearRefreshLease` exigent `refresh_lease_expires_at > now()` pour tout propriétaire ; réponse positive tardive ne restitue pas G1 expiré.
> **R2** : CONFLICT callback (déjà accepté) — non rouvert.
> REAL user interactive **NOT PROVEN**. Mutations REAL **HARD-BLOCKED**. DET scope only.


**Statut :** `DOCUMENTED — DRAFT ARCHITECTURE / NOT VALIDATED SPEC / NOT IMPLEMENTED`
**Nature :** préparation technique de ML4 sous la source de contrat de macro-lot R5 existante ; **ne remplace pas** les R2/ADR validés, la phase Figma ou le prompt Cursor SFIA v2.6.
```

#### matrice §17
```markdown
## 17. Requalification REFRESH LIFECYCLE R1-A/R1-B (2026-11-08)

GO Morris CRITICAL. Handoff entrée `59d07663…`.
Plafond : **DETERMINISTIC SCOPE ONLY**. Aucune migration. R2 non rouvert.

| Item | Statut | Preuve |
|---|---|---|
| R1-A lease retained on ambiguous | RESOLVED (DET) | T04/TA/TE — lease non NULL après DEPENDENCY_UNAVAILABLE |
| R1-A no second remote on G1 | RESOLVED (DET) | TA — githubCalls=1 jusqu'à reclaim fail-closed |
| R1-B CAS requires expires_at > now() | RESOLVED (DET) | TB/TC — late positive/deny → 0 row / no reauth |
| R1-B no expired G1 hand-back | RESOLVED (DET) | TB CONFLICT, pas access-gen-1 |
| TD concurrent B preserved | RESOLVED (DET) | late A ne mute pas L2/G2 |
| TF R2 regression | RESOLVED (DET) | loser CONFLICT |
| Option A / 009–012 | PRESERVED | schéma inchangé |

Commandes (web/, ~22:34–22:36 CET) :
- tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13**

```

#### delivery-history
```markdown
## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-REFRESH-LIFECYCLE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:36 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth REFRESH LIFECYCLE CLOSURE (R1-A + R1-B) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO EXPLICITE CRITICAL — CORRECTION R1 |
| Handoff entrée | `59d07663…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1-A | Timeout/ambigu après refresh engagé : **ne plus** `clearRefreshLease` ; bail durable ; concurrent CONFLICT ; expiry → reclaim fail-closed sans 2e remote |
| R1-B | Persist / markRequiresReauth / clearRefreshLease : `refresh_lease_expires_at > now()` ; late positive ne restitue pas G1 expiré |
| R2 | Non rouvert (CONFLICT accepté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Fake/Real | R1 LIFECYCLE DETERMINISTIC PROVEN ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH REFRESH LIFECYCLE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

```

## 15. ENV-01 / versioning

DEV + E2E isolé. RECETTE non touchée. STABLE NOT AVAILABLE.
NO RELEASE / `0.0.0-dev`. Aucun tag/candidat RECETTE. Aucun commit Product.

## 16. Fake/Real Qualification

| Claim | État |
|---|---|
| R1 lifecycle DET (TA–TE) | **R1 LIFECYCLE DETERMINISTIC PROVEN** |
| R2 callback CONFLICT | DETERMINISTIC PROVEN (non rouvert) |
| REAL user interactive | NOT PROVEN |
| REAL Git mutations | HARD-BLOCKED |

## 17. Sécurité / secrets

Aucun token, ciphertext, Client Secret, PEM dans ce pack.
Pas de log de secrets dans le code modifié.

## 18. KNOWN GAP / dette / exit

1. REAL user OAuth interactive — GO Morris distinct.
2. Révocation OAuth distante au disconnect — wipe local only.
3. Après ambigu+expiry : Pilote doit se réautoriser (fail-closed volontaire).

## 19. Gates Morris

1. Critical Re-Review ChatGPT (ce pack / L3).
2. Config OAuth DEV + qualification interactive sous GO distinct.

## 20. Verdict unique

**ML4 GITHUB AUTH REFRESH LIFECYCLE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY.**

Ne pas déclarer : REAL USER OAUTH PROVEN / REAL GIT WRITES READY / RECETTE ACCEPTED / STABLE AVAILABLE / ADOPTED.

### Suites (horodatages CET)

| Suite | Résultat | Horodatage |
|---|---|---|
| tsc --noEmit | PASS | ~22:34 |
| test:unit | **167 PASS** | 22:34:18 |
| test:integration | **211 PASS** | 22:35:01 |
| build | PASS | 22:35:25 |
| playwright | **13/13 PASS** | 22:35:46 (~1.3m) |

FIN REVIEW PACK FULL — L3 cible : `sfia-review-handoff/latest-chatgpt-review.md`
