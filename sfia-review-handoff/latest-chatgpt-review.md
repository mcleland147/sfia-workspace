# SFIA Studio Next — Review Pack FULL
# ML4 GITHUB AUTH — CONCURRENCY SAFETY CLOSURE (C1 + C2)
# Cycle CRITICAL — mono-cycle reset

## 1. Date / GO Morris
2026-11-08 ~21:45 CET (validations UTC 20:41–20:45).
GO CORRECTION MORRIS EXPLICITE — CONCURRENCY SAFETY CLOSURE.
Handoff entrée : `b6c87a8c29ff9521a259c23d2b1d63e52b97381a`.
DEV + e2e. NO RELEASE / `0.0.0-dev`. Aucune mutation GitHub REAL.

## 2. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD | `c658f590…` = origin/main |
| Product remote | ABSENTE |
| Handoff tip entrée | `b6c87a8c…` (parent `6509b4bc…`) |
| État | LOCAL DIRTY préservé — **aucun commit/push Product** |
| Migrations 009–011 | préservées |
| Migration 012 | additive appliquée DEV+e2e après préflight 0 doublons CONNECTED |
| Option A D8 | non touchée |

## 3. Sources
Gouvernance/method lues à main `c658f590`. Code LOCAL confronté à handoff `b6c87a8c`.
GitHub App user refresh token rotation (ancien couple invalidé après usage) prise en compte.

## 4. Git Review Index

| Path | Rôle |
|---|---|
| `src/db/migrations/012_auth_concurrency_safety.sql` | NEW — lease columns + UNIQUE CONNECTED |
| `src/domains/integrations/oauth-concurrency-barrier.ts` | NEW — barrières DET |
| `src/domains/integrations/authorization-service.ts` | C1 lease+gen CAS ; C2 unique handling |
| `src/db/schema.ts` | colonnes lease + uniqueIndex + revision 012 |
| `scripts/db-migrate.sh` | apply 012 |
| `tests/integration/git-collaboration.pg.test.ts` | C1/C2 concurrent tests |
| `tests/unit/ml3-cki-intent.test.ts` | schemaRevision 012 |
| construction docs | AS-IMPLEMENTED |

## 5. C1 — Refresh concurrent (avant/après)

**Avant :** `markRequiresReauth(pilotId, authId)` sans génération → un loser GitHub `bad_refresh_token` pouvait effacer les tokens du winner.

**Après :**
- `claimRefreshLease` SQL (génération `refresh_ciphertext` + lease inactive/expirée).
- GitHub I/O hors transaction.
- Persist winner : CAS `refresh_ciphertext` + `refresh_lease_token`.
- `markRequiresReauth(pilotId, authId, expectedRefreshCiphertext)` — CAS génération ; loser → 0 rows.
- Reload si lease perdue ; jamais wipe d'une génération plus récente.
- Erreur ACCESS_DENIED / DEPENDENCY après claim → reauth **seulement** génération attendue.

## 6. C2 — Unicité CONNECTED (avant/après)

**Avant :** deux txn pouvaient chacune insert CONNECTED.

**Après :**
- UNIQUE partiel `(pilot_id, provider) WHERE status='CONNECTED'`.
- Préflight : 0 doublons DEV/e2e.
- Txn revoke+insert+seed inchangée ; unique violation → CONFLICT ou retour état CONNECTED concurrent gagnant.
- getIntegrationStatus : au plus un CONNECTED possible.

## 7. Schéma / préflight
012 ADDITIVE. RECETTE non touchée. Option A intacte. schemaRevision=`012_auth_concurrency_safety`.

## 8. Tests concurrentiels exécutés
- `C2: concurrent completeGitHubAuthorization → at most one CONNECTED` (+ UNIQUE insert reject)
- `C1: concurrent refresh — loser ACCESS_DENIED must not wipe winner tokens`
- `C1: markRequiresReauth only when generation matches`

## 9. Suites globales

| Suite | Résultat |
|---|---|
| tsc | PASS |
| unit | **167 PASS** |
| integration | **193 PASS** |
| build | PASS |
| Playwright | **13/13 PASS** |

Baseline entrée : 167 / 190 / 13 — non revendiquée.

## 10. Secret safety
Aucun PEM/Client Secret réel. Tokens fixtures test (`access-gen-2`) seulement. Pas de ciphertext dans réponses status.

## 11. Fake/Real
DET concurrency PROVEN. REAL interactive NOT PROVEN. REAL mutations HARD-BLOCKED. Installation READ preserved.

## 12. ENV-01 / versioning
DEV+e2e only. NO RELEASE `0.0.0-dev`. STABLE NOT AVAILABLE.

## 13. KNOWN GAP
Révocation OAuth GitHub distante (wipe local only). REAL user OAuth interactive. UX Figma 218–235.

## 14. Gates suivants
Critical Re-Review → config App OAuth DEV → essai interactif → publication REAL sous GO distinct.

## 15. Verdict

**ML4 GITHUB AUTH CONCURRENCY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY.**

---
## ANNEXE — Fichiers créés (contenu complet)
### `src/db/migrations/012_auth_concurrency_safety.sql`
```
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
### `src/domains/integrations/oauth-concurrency-barrier.ts`
```
/**
 * Deterministic barriers for D9 OAuth concurrency tests (SCRIPTED/DET only).
 * Not a general job/lock engine — test harness only.
 */
type Waiter = { resolve: () => void; promise: Promise<void> };

function makeWaiter(): Waiter {
  let resolve!: () => void;
  const promise = new Promise<void>((r) => {
    resolve = r;
  });
  return { resolve, promise };
}

export const OAuthConcurrencyBarrier = {
  enabled: false,
  gates: new Map<string, Waiter>(),

  clear() {
    this.enabled = false;
    for (const w of this.gates.values()) w.resolve();
    this.gates.clear();
  },

  arm(name: string) {
    this.enabled = true;
    this.gates.set(name, makeWaiter());
  },

  async before(name: string) {
    if (!this.enabled) return;
    const w = this.gates.get(name);
    if (w) await w.promise;
  },

  release(name: string) {
    const w = this.gates.get(name);
    if (w) {
      w.resolve();
      this.gates.delete(name);
    }
  },
};
```
## ANNEXE — authorization-service (sections C1/C2)
```
37:function isUniqueViolation(e: unknown): boolean {
558:    await OAuthConcurrencyBarrier.before("before:AUTH_INSERT");
606:    if (isUniqueViolation(e)) {
658:    const accessToken = await loadOrRefreshUserAccessToken(auth, opts?.fetchImpl);
716:async function claimRefreshLease(
777:export async function loadOrRefreshUserAccessToken(
782:    await markRequiresReauth(auth.pilotId, auth.id, auth.refreshCiphertext);
797:    await markRequiresReauth(auth.pilotId, auth.id, null);
807:  let leaseToken = await claimRefreshLease(auth, expectedRefreshCiphertext);
823:    leaseToken = await claimRefreshLease(fresh, expectedRefreshCiphertext);
855:      await markRequiresReauth(auth.pilotId, auth.id, expectedRefreshCiphertext);
909:export async function markRequiresReauth(
```
### completeGitHubAuthorization collision handling + claim/loadOrRefresh/markRequiresReauth
```
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

...
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
      // Concurrent CONNECTED insert lost — do not invent success for this attempt.
      const current = await getIntegrationStatus(input.pilotId);
      if (current.status === "CONNECTED" && current.authorizationId !== authId) {
        // Another authorization won — return that state (idempotent reconnect surface).
        return current;
      }
      throw new StudioError(
        "CONFLICT",
        "Collision CONNECTED — invariant PostgreSQL (au plus une autorisation active)",
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
...
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

/**
 * Claim exclusive refresh lease for one generation (refresh_ciphertext).
 * Cross-process via PostgreSQL — no long-held txn during GitHub I/O.
 */
async function claimRefreshLease(
  auth: typeof integrationAuthorizations.$inferSelect,
  expectedRefreshCiphertext: string,
): Promise<string | null> {
  const leaseToken = newId("rfl");
  const expiresAt = new Date(Date.now() + REFRESH_LEASE_MS);
  await OAuthConcurrencyBarrier.before("before:REFRESH_CLAIM");
  const updated = await db
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
        sql`(
          ${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL
          OR ${integrationAuthorizations.refreshLeaseExpiresAt} <= now()
        )`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  return updated[0] ? leaseToken : null;
}

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
 * Load user access token; refresh with durable lease + generation fencing if expired.
 * A stale refresh failure must never wipe a newer generation (C1).
 */
export async function loadOrRefreshUserAccessToken(
  auth: typeof integrationAuthorizations.$inferSelect,
  fetchImpl?: typeof fetch,
): Promise<string> {
  if (!auth.tokenCiphertext || !auth.tokenNonce || !auth.tokenKeyVersion) {
    await markRequiresReauth(auth.pilotId, auth.id, auth.refreshCiphertext);
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
    await markRequiresReauth(auth.pilotId, auth.id, null);
    throw new StudioError("ACCESS_DENIED", "Refresh token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError("NOT_CONFIGURED", "Credentials refresh absents", { httpStatus: 503 });
  }

  const expectedRefreshCiphertext = auth.refreshCiphertext;
  let leaseToken = await claimRefreshLease(auth, expectedRefreshCiphertext);
  if (!leaseToken) {
    // Another worker holds/held the lease — reload current generation.
    await new Promise((r) => setTimeout(r, 40));
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
    // Same generation still — try claim once more (lease may have expired).
    leaseToken = await claimRefreshLease(fresh, expectedRefreshCiphertext);
    if (!leaseToken) {
      const again = await reloadAuthorization(auth.id);
      const access = again ? openAccessIfPresent(again) : null;
      if (access && again && again.refreshCiphertext !== expectedRefreshCiphertext) return access;
      throw new StudioError("CONFLICT", "Refresh lease concurrent — réessayer");
    }
    // Re-read nonce/key for this generation under lease.
    auth = (await reloadAuthorization(auth.id))!;
  }

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
    // ACCESS_DENIED / ambiguous after network: only degrade THIS generation.
    if (
      e instanceof StudioError &&
      (e.code === "ACCESS_DENIED" || e.code === "DEPENDENCY_UNAVAILABLE")
    ) {
      await markRequiresReauth(auth.pilotId, auth.id, expectedRefreshCiphertext);
    } else {
      await clearRefreshLease(auth.id, leaseToken);
    }
    throw e;
  }

  const sealedAccess = sealSecret(tokens.accessToken);
  const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
  // Persist only if we still own the lease AND the expected generation.
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
      ),
    )
    .returning({ id: integrationAuthorizations.id });

  if (!updated[0]) {
    // Lost CAS — never wipe; reload whatever is current.
    await clearRefreshLease(auth.id, leaseToken);
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("CONFLICT", "Autorisation remplacée pendant refresh");
    }
    const access = openAccessIfPresent(fresh);
    if (access) return access;
    throw new StudioError("CONFLICT", "Rotation concurrente — token indisponible");
  }
  return tokens.accessToken;
}

/**
 * Generation-conditional REQUIRES_REAUTH.
 * Must match expected refresh ciphertext (or NULL) so a loser cannot wipe a winner.
 */
export async function markRequiresReauth(
  pilotId: string,
  authId: string,
  expectedRefreshCiphertext: string | null,
): Promise<boolean> {
  const now = new Date();
  const genPred =
    expectedRefreshCiphertext == null
      ? sql`${integrationAuthorizations.refreshCiphertext} IS NULL`
      : sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`;
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
```
### schema integrationAuthorizations (extrait)
```
/** D9 — GitHub App / integration authorization (pilot-scoped; not a D6 mandate). */
export const integrationAuthorizations = pgTable(
  "integration_authorizations",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
      .notNull()
      .references(() => pilots.id),
    provider: text("provider").notNull().default("github"),
    status: text("status").notNull(), // CONNECTED | PENDING_APPROVAL | ACCESS_REMOVED | REVOKED | DISCONNECTED | EXPIRED | REQUIRES_REAUTH
    installationId: text("installation_id"),
    accountLogin: text("account_login"),
    /** Stable GitHub user id (not mutable login). */
    githubUserId: text("github_user_id"),
    /** AES-GCM ciphertext of user access token — never plaintext. */
    tokenCiphertext: text("token_ciphertext"),
    tokenNonce: text("token_nonce"),
    tokenKeyVersion: text("token_key_version"),
    refreshCiphertext: text("refresh_ciphertext"),
    refreshNonce: text("refresh_nonce"),
    tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }),
    /** Short-lived lease for a single in-flight refresh of this authorization generation. */
    refreshLeaseToken: text("refresh_lease_token"),
    refreshLeaseExpiresAt: timestamp("refresh_lease_expires_at", { withTimezone: true }),
    scopesJson: text("scopes_json").notNull().default("[]"),
    lastValidatedAt: timestamp("last_validated_at", { withTimezone: true }),
    metadataJson: text("metadata_json").notNull().default("{}"),
    connectedAt: timestamp("connected_at", { withTimezone: true }),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("integration_authorizations_pilot_idx").on(t.pilotId),
    index("integration_authorizations_pilot_status_idx").on(t.pilotId, t.status),
    index("integration_authorizations_github_user_idx").on(t.githubUserId),
    // C2: at most one CONNECTED per Pilot × provider (cross-process).
    uniqueIndex("integration_authorizations_one_connected_uidx")
      .on(t.pilotId, t.provider)
      .where(sql`status = 'CONNECTED'`),
  ],
);

/** D9 — OAuth/state for GitHub App user-to-server connect (CSRF + PKCE). */
export const integrationOauthStates = pgTable(
  "integration_oauth_states",
  {
    id: text("id").primaryKey(),
    pilotId: text("pilot_id")
780:export const schemaRevision = "012_auth_concurrency_safety";
```
### Tests C1/C2 (extrait)
```
2165:  it("C2: concurrent completeGitHubAuthorization → at most one CONNECTED", async () => {
2166-    const { pilotId, sessionId } = await seedProject("git-c2-connected");
2167-    const s1 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
2168-    const s2 = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
2169-    OAuthConcurrencyBarrier.clear();
2170-    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");
2171-
2172-    const p1 = completeGitHubAuthorization({
2173-      pilotId,
2174-      state: s1.state,
2175-      studioSessionId: sessionId,
2176-    }).catch((e: unknown) => e);
2177-    const p2 = completeGitHubAuthorization({
2178-      pilotId,
2179-      state: s2.state,
2180-      studioSessionId: sessionId,
2181-    }).catch((e: unknown) => e);
2182-
2183-    await new Promise((r) => setTimeout(r, 30));
2184-    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
2185-    const [a, b] = await Promise.all([p1, p2]);
2186-    OAuthConcurrencyBarrier.clear();
2187-
2188-    const outcomes = [a, b];
2189-    const ok = outcomes.filter(
2190-      (o) => o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
2191-    );
2192-    expect(ok.length).toBeGreaterThanOrEqual(1);
2193-
2194-    const connected = await db
2195-      .select()
2196-      .from(integrationAuthorizations)
2197-      .where(
2198-        and(
2199-          eq(integrationAuthorizations.pilotId, pilotId),
2200-          eq(integrationAuthorizations.status, "CONNECTED"),
--
2219:  it("C1: concurrent refresh — loser ACCESS_DENIED must not wipe winner tokens", async () => {
2220-    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 3).toString("base64");
2221-    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
2222-    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
2223-    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
2224-
2225-    const { pilotId } = await seedProject("git-c1-refresh");
2226-    const oldRefresh = sealSecret("refresh-gen-1");
2227-    const oldAccess = sealSecret("access-gen-1");
2228-    const authId = newId("iauth");
2229-    await db.insert(integrationAuthorizations).values({
2230-      id: authId,
2231-      pilotId,
2232-      provider: "github",
2233-      status: "CONNECTED",
2234-      installationId: "scripted-install-1",
2235-      accountLogin: "scripted-user",
2236-      githubUserId: `gh-${pilotId}`,
2237-      tokenCiphertext: oldAccess.ciphertext,
2238-      tokenNonce: oldAccess.nonce,
2239-      tokenKeyVersion: oldAccess.keyVersion,
2240-      refreshCiphertext: oldRefresh.ciphertext,
2241-      refreshNonce: oldRefresh.nonce,
2242-      tokenExpiresAt: new Date(Date.now() - 60_000),
2243-      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
2244-      connectedAt: new Date(),
2245-      createdAt: new Date(),
2246-      updatedAt: new Date(),
2247-    });
2248-
2249-    let githubCalls = 0;
2250-    const fetchImpl = (async (input: RequestInfo | URL) => {
2251-      const url = String(input);
2252-      if (!url.includes("login/oauth/access_token")) {
2253-        return new Response("{}", { status: 500 });
2254-      }
--
2323:  it("C1: markRequiresReauth only when generation matches", async () => {
2324-    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 4).toString("base64");
2325-    const { pilotId } = await seedProject("git-c1-gen");
2326-    const genA = sealSecret("refresh-a");
2327-    const genB = sealSecret("refresh-b");
2328-    const access = sealSecret("access-b");
2329-    const authId = newId("iauth");
2330-    await db.insert(integrationAuthorizations).values({
2331-      id: authId,
2332-      pilotId,
2333-      provider: "github",
2334-      status: "CONNECTED",
2335-      tokenCiphertext: access.ciphertext,
2336-      tokenNonce: access.nonce,
2337-      tokenKeyVersion: access.keyVersion,
2338-      refreshCiphertext: genB.ciphertext,
2339-      refreshNonce: genB.nonce,
2340-      tokenExpiresAt: new Date(Date.now() + 3600_000),
2341-      metadataJson: "{}",
2342-      createdAt: new Date(),
2343-      updatedAt: new Date(),
2344-    });
2345-    expect(await markRequiresReauth(pilotId, authId, genA.ciphertext)).toBe(false);
2346-    const still = (
2347-      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
2348-    )[0]!;
2349-    expect(still.status).toBe("CONNECTED");
2350-    expect(await markRequiresReauth(pilotId, authId, genB.ciphertext)).toBe(true);
2351-    const gone = (
2352-      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
2353-    )[0]!;
2354-    expect(gone.status).toBe("REQUIRES_REAUTH");
2355-    expect(gone.tokenCiphertext).toBeNull();
2356-    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
2357-  });
2358-});
```
FIN REVIEW PACK FULL

## ANNEXE COMPLÉMENTAIRE — authorization-service.ts COMPLET
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
      // Concurrent CONNECTED insert lost — do not invent success for this attempt.
      const current = await getIntegrationStatus(input.pilotId);
      if (current.status === "CONNECTED" && current.authorizationId !== authId) {
        // Another authorization won — return that state (idempotent reconnect surface).
        return current;
      }
      throw new StudioError(
        "CONFLICT",
        "Collision CONNECTED — invariant PostgreSQL (au plus une autorisation active)",
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

/**
 * Claim exclusive refresh lease for one generation (refresh_ciphertext).
 * Cross-process via PostgreSQL — no long-held txn during GitHub I/O.
 */
async function claimRefreshLease(
  auth: typeof integrationAuthorizations.$inferSelect,
  expectedRefreshCiphertext: string,
): Promise<string | null> {
  const leaseToken = newId("rfl");
  const expiresAt = new Date(Date.now() + REFRESH_LEASE_MS);
  await OAuthConcurrencyBarrier.before("before:REFRESH_CLAIM");
  const updated = await db
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
        sql`(
          ${integrationAuthorizations.refreshLeaseExpiresAt} IS NULL
          OR ${integrationAuthorizations.refreshLeaseExpiresAt} <= now()
        )`,
      ),
    )
    .returning({ id: integrationAuthorizations.id });
  return updated[0] ? leaseToken : null;
}

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
 * Load user access token; refresh with durable lease + generation fencing if expired.
 * A stale refresh failure must never wipe a newer generation (C1).
 */
export async function loadOrRefreshUserAccessToken(
  auth: typeof integrationAuthorizations.$inferSelect,
  fetchImpl?: typeof fetch,
): Promise<string> {
  if (!auth.tokenCiphertext || !auth.tokenNonce || !auth.tokenKeyVersion) {
    await markRequiresReauth(auth.pilotId, auth.id, auth.refreshCiphertext);
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
    await markRequiresReauth(auth.pilotId, auth.id, null);
    throw new StudioError("ACCESS_DENIED", "Refresh token absent — REQUIRES_REAUTH", {
      httpStatus: 403,
    });
  }
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError("NOT_CONFIGURED", "Credentials refresh absents", { httpStatus: 503 });
  }

  const expectedRefreshCiphertext = auth.refreshCiphertext;
  let leaseToken = await claimRefreshLease(auth, expectedRefreshCiphertext);
  if (!leaseToken) {
    // Another worker holds/held the lease — reload current generation.
    await new Promise((r) => setTimeout(r, 40));
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
    // Same generation still — try claim once more (lease may have expired).
    leaseToken = await claimRefreshLease(fresh, expectedRefreshCiphertext);
    if (!leaseToken) {
      const again = await reloadAuthorization(auth.id);
      const access = again ? openAccessIfPresent(again) : null;
      if (access && again && again.refreshCiphertext !== expectedRefreshCiphertext) return access;
      throw new StudioError("CONFLICT", "Refresh lease concurrent — réessayer");
    }
    // Re-read nonce/key for this generation under lease.
    auth = (await reloadAuthorization(auth.id))!;
  }

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
    // ACCESS_DENIED / ambiguous after network: only degrade THIS generation.
    if (
      e instanceof StudioError &&
      (e.code === "ACCESS_DENIED" || e.code === "DEPENDENCY_UNAVAILABLE")
    ) {
      await markRequiresReauth(auth.pilotId, auth.id, expectedRefreshCiphertext);
    } else {
      await clearRefreshLease(auth.id, leaseToken);
    }
    throw e;
  }

  const sealedAccess = sealSecret(tokens.accessToken);
  const sealedRefresh = tokens.refreshToken ? sealSecret(tokens.refreshToken) : null;
  // Persist only if we still own the lease AND the expected generation.
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
      ),
    )
    .returning({ id: integrationAuthorizations.id });

  if (!updated[0]) {
    // Lost CAS — never wipe; reload whatever is current.
    await clearRefreshLease(auth.id, leaseToken);
    const fresh = await reloadAuthorization(auth.id);
    if (!fresh || fresh.status !== "CONNECTED") {
      throw new StudioError("CONFLICT", "Autorisation remplacée pendant refresh");
    }
    const access = openAccessIfPresent(fresh);
    if (access) return access;
    throw new StudioError("CONFLICT", "Rotation concurrente — token indisponible");
  }
  return tokens.accessToken;
}

/**
 * Generation-conditional REQUIRES_REAUTH.
 * Must match expected refresh ciphertext (or NULL) so a loser cannot wipe a winner.
 */
export async function markRequiresReauth(
  pilotId: string,
  authId: string,
  expectedRefreshCiphertext: string | null,
): Promise<boolean> {
  const now = new Date();
  const genPred =
    expectedRefreshCiphertext == null
      ? sql`${integrationAuthorizations.refreshCiphertext} IS NULL`
      : sql`${integrationAuthorizations.refreshCiphertext} = ${expectedRefreshCiphertext}`;
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
