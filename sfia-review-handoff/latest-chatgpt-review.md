# SFIA Review Pack FULL — ML4 GitHub Auth FINAL CONCURRENCY SAFETY CLOSURE (R1/R2)

**SFIA v2.6 / CRITICAL / CYCLE 8 — DELIVERY / IMPLÉMENTATION / INC CORRECTIF CIBLÉ**
**Date (Europe/Paris):** 2026-11-08 ~21:59 CET
**Product version:** NO RELEASE / `0.0.0-dev`
**ENV-01:** DEV + E2E isolé uniquement — RECETTE/STABLE non touchés

---

## 1. Date Europe/Paris

2026-11-08 (dimanche) — validations ~21:57–21:59 CET ; pack finalisé ~22:00 CET.

## 2. Mandat Morris exact

GO CORRECTION EXPLICITE MORRIS — **FINAL CONCURRENCY SAFETY CLOSURE** sur les deux réserves résiduelles du handoff ML4 `2a9eb05a0ff2a160dc2966a501b006c4c496042d` :

- **R1 — STALE REFRESH LEASE** : un worker ayant perdu/dépassé son bail ne doit plus effacer les tokens du propriétaire actuel, déclarer REQUIRES_REAUTH à sa place, libérer le bail du nouveau propriétaire, valider une rotation obsolète, ni déclencher un deuxième refresh distant dangereux sur génération ambiguë.
- **R2 — CALLBACK CONCURRENT** : un callback OAuth perdant une collision PostgreSQL ne doit pas recevoir le CONNECTED d'un autre callback comme succès propre.

Interdits : rouvrir ML4, nouvelle capacité, moteur généraliste, migration sauf gate Morris, commit/push Product, PR/merge, REAL mutations, secrets.

## 3. Git Truth initial et final

repo=https://github.com/mcleland147/sfia-workspace.git
branch=feat/next-git-collaboration-20261108
HEAD=c658f59023d44a0e22448c7ee034e3c1dda292a2
origin/main=c658f59023d44a0e22448c7ee034e3c1dda292a2
handoff=2a9eb05a0ff2a160dc2966a501b006c4c496042d
handoff_parent=b6c87a8c29ff9521a259c23d2b1d63e52b97381a
auth_sha256=6a469a66d6785b7038e5e580df2aba48330ccb2b3eeeb248ad54daf2f680261d
test_sha256=714f6ff8c51cd43bb1de672bd041813bb2033c0e2ea5e8a581187ccd1f7c30fb
mig012_sha256=83ac3a3dd5168da27360176bb2db93733b3b21cc0060f0fb41fa7da93efd9203

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche Product | `feat/next-git-collaboration-20261108` |
| HEAD local | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` (identique) |
| Branche Product distante | ABSENTE (pré-check) |
| État Product | LOCAL DIRTY préservé — **aucun** commit/push Product |
| Handoff L3 entrée | `2a9eb05a0ff2a160dc2966a501b006c4c496042d` |
| Parent handoff | `b6c87a8c29ff9521a259c23d2b1d63e52b97381a` |
| Migrations 009–012 | présentes localement (008–012 untracked ML4) — **aucune nouvelle migration** |

Fetch non destructif effectué. Aucun reset/stash destructif.

## 4. Sources Git, refs et blobs

Sources obligatoires lues (méthode / gouvernance / architecture / conception / contrat / matrice / preuve d'entrée handoff). Code LOCAL prioritaire (pas snapshots main) :

| Fichier | SHA-256 | Statut |
|---|---|---|
| `authorization-service.ts` | `6a469a66d6785b7038e5e580df2aba48330ccb2b3eeeb248ad54daf2f680261d` | modifié R1/R2 (untracked ML4 tree) |
| `git-collaboration.pg.test.ts` | `714f6ff8c51cd43bb1de672bd041813bb2033c0e2ea5e8a581187ccd1f7c30fb` | tests T01–T14 + C1/C2 |
| `012_auth_concurrency_safety.sql` | `83ac3a3dd5168da27360176bb2db93733b3b21cc0060f0fb41fa7da93efd9203` | inchangé (référence) |
| `oauth-concurrency-barrier.ts` | `7d739940b2489eb56fc349b047f8e43367cee18e9e1bea888ae126a238264bb1` | inchangé |

Handoff tip d'entrée (objet distant) : `origin/sfia/review-handoff` @ `2a9eb05a…`.

## 5. Git Review Index exhaustif (fichiers touchés ce cycle)

### Primaire correctif
1. `projects/sfia-studio-next/web/src/domains/integrations/authorization-service.ts` — R1 fencing + R2 CONFLICT
2. `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts` — T01–T14 + C1/C2 renforcés

### AS-IMPLEMENTED (autorisé)
3. `projects/sfia-studio-next/construction/delivery-history.md` — DELIV FINAL SAFETY
4. `projects/sfia-studio-next/construction/integration-git/specification-technique.md` — bandeau R1/R2
5. `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md` — §16

### Preuve
6. `.tmp-sfia-review/chatgpt-review.md` — ce pack (réinitialisé mono-cycle)

### Non modifiés (préservés)
- migrations 009–012 / schema revision `012_auth_concurrency_safety`
- `oauth-concurrency-barrier.ts`
- governance / architecture-technique / conception-fonctionnelle / method / prompts / `.sfia/` / `projects/sfia-studio/`
- D1/D6 / D8 Option A three historical SCRIPTED refs

## 6–8. Diff / contenu complet des fichiers créés ou sections modifiées

Les fichiers ML4 `authorization-service.ts` et le corpus de tests sont **untracked** sur la branche Product (construction locale). Contenu intégral ci-dessous = vérité locale du cycle.

### 6.A `authorization-service.ts` — fichier complet (SHA-256 `6a469a66d6785b7038e5e580df2aba48330ccb2b3eeeb248ad54daf2f680261d`)

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
      // Proven invalid credentials for THIS lease owner + generation only.
      await markRequiresReauth(
        auth.pilotId,
        auth.id,
        expectedRefreshCiphertext,
        leaseToken,
      );
    } else {
      // Network/ambiguous: do NOT infer revocation — release only if we still own the lease.
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
    // Lost CAS (lease expired/stolen or generation moved) — never wipe current owner.
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
 * REQUIRES_REAUTH only when generation AND lease ownership match (R1 fencing).
 * expectedLeaseToken null = only allowed when no lease is held (missing-token paths).
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
      ? sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`
      : eq(integrationAuthorizations.refreshLeaseToken, expectedLeaseToken);
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

### 6.B Sections R1/R2 (extrait ciblé — aussi présentes dans le fichier complet)

#### R2 — catch unique → CONFLICT only

```typescript
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

```

#### R1 — claim / loadOrRefresh / markRequiresReauth

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
      // Proven invalid credentials for THIS lease owner + generation only.
      await markRequiresReauth(
        auth.pilotId,
        auth.id,
        expectedRefreshCiphertext,
        leaseToken,
      );
    } else {
      // Network/ambiguous: do NOT infer revocation — release only if we still own the lease.
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
    // Lost CAS (lease expired/stolen or generation moved) — never wipe current owner.
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
 * REQUIRES_REAUTH only when generation AND lease ownership match (R1 fencing).
 * expectedLeaseToken null = only allowed when no lease is held (missing-token paths).
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
      ? sql`${integrationAuthorizations.refreshLeaseToken} IS NULL`
      : eq(integrationAuthorizations.refreshLeaseToken, expectedLeaseToken);
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

```

### 6.C Tests — C1/C2 mis à jour + suite R1/R2 T01–T14

#### C1/C2 (assertions CONFLICT strict)

```typescript
  it("C2: concurrent completeGitHubAuthorization → at most one CONNECTED", async () => {
    const { pilotId, sessionId } = await seedProject("git-c2-connected");
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

    const outcomes = [a, b];
    const ok = outcomes.filter(
      (o) => o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = outcomes.filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(ok.length).toBe(1);
    expect(conflicts.length).toBe(1);

    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(1);

    // Direct UNIQUE proof: second CONNECTED insert must fail.
    await expect(
      db.insert(integrationAuthorizations).values({
        id: newId("iauth"),
        pilotId,
        provider: "github",
        status: "CONNECTED",
        metadataJson: "{}",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).rejects.toThrow();
  });

  it("C1: concurrent refresh — loser ACCESS_DENIED must not wipe winner tokens", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 3).toString("base64");
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.test-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "test-secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";

    const { pilotId } = await seedProject("git-c1-refresh");
    const oldRefresh = sealSecret("refresh-gen-1");
    const oldAccess = sealSecret("access-gen-1");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      installationId: "scripted-install-1",
      accountLogin: "scripted-user",
      githubUserId: `gh-${pilotId}`,
      tokenCiphertext: oldAccess.ciphertext,
      tokenNonce: oldAccess.nonce,
      tokenKeyVersion: oldAccess.keyVersion,
      refreshCiphertext: oldRefresh.ciphertext,
      refreshNonce: oldRefresh.nonce,
      tokenExpiresAt: new Date(Date.now() - 60_000),
      metadataJson: JSON.stringify({ mode: "REAL_USER_OAUTH", flow: "github_app_user_oauth" }),
      connectedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    let githubCalls = 0;
    const fetchImpl = (async (input: RequestInfo | URL) => {
      const url = String(input);
      if (!url.includes("login/oauth/access_token")) {
        return new Response("{}", { status: 500 });
      }
      githubCalls += 1;
      if (githubCalls === 1) {
        return new Response(
          JSON.stringify({
            access_token: "access-gen-2",
            refresh_token: "refresh-gen-2",
            expires_in: 3600,
            scope: "",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response(JSON.stringify({ error: "bad_refresh_token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as unknown as typeof fetch;

    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_CLAIM");

    const row = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;

    const p1 = loadOrRefreshUserAccessToken(row, fetchImpl).catch((e: unknown) => e);
    const p2 = loadOrRefreshUserAccessToken({ ...row }, fetchImpl).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:REFRESH_CLAIM");

    const [r1, r2] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    const winners = [r1, r2].filter((x) => typeof x === "string");
    const losers = [r1, r2].filter((x) => x instanceof StudioError && x.code === "CONFLICT");
    expect(winners).toEqual(["access-gen-2"]);
    expect(losers).toHaveLength(1);
    expect(githubCalls).toBe(1);

    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("CONNECTED");
    expect(after.refreshCiphertext).not.toBe(oldRefresh.ciphertext);
    expect(after.tokenCiphertext).toBeTruthy();

    const wiped = await markRequiresReauth(pilotId, authId, oldRefresh.ciphertext, null);
    expect(wiped).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.tokenCiphertext).toBeTruthy();

    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
  });

  it("C1: markRequiresReauth only when generation matches", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 4).toString("base64");
    const { pilotId } = await seedProject("git-c1-gen");
    const genA = sealSecret("refresh-a");
    const genB = sealSecret("refresh-b");
    const access = sealSecret("access-b");
    const authId = newId("iauth");
    await db.insert(integrationAuthorizations).values({
      id: authId,
      pilotId,
      provider: "github",
      status: "CONNECTED",
      tokenCiphertext: access.ciphertext,
      tokenNonce: access.nonce,
      tokenKeyVersion: access.keyVersion,
      refreshCiphertext: genB.ciphertext,
      refreshNonce: genB.nonce,
      tokenExpiresAt: new Date(Date.now() + 3600_000),
      metadataJson: "{}",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(await markRequiresReauth(pilotId, authId, genA.ciphertext, null)).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(await markRequiresReauth(pilotId, authId, genB.ciphertext, null)).toBe(true);
    const gone = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(gone.status).toBe("REQUIRES_REAUTH");
    expect(gone.tokenCiphertext).toBeNull();
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
  });
});

describe("ML4 R1/R2 final concurrency safety closure (SCRIPTED/DET)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";

```

#### Describe `ML4 R1/R2 final concurrency safety closure`

```typescript
describe("ML4 R1/R2 final concurrency safety closure (SCRIPTED/DET)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  function armOauthEnv() {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 9).toString("base64");
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

  async function seedExpiredAuth(label: string, refreshPlain = "refresh-gen-1") {
    const { pilotId } = await seedProject(label);
    const refresh = sealSecret(refreshPlain);
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

  // T01 — valid owner + active lease → rotation persists
  it("T01: owner with active lease rotates and persists", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t01");
    const fetchImpl = (async () =>
      new Response(
        JSON.stringify({
          access_token: "access-gen-2",
          refresh_token: "refresh-gen-2",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )) as unknown as typeof fetch;

    const token = await loadOrRefreshUserAccessToken(row, fetchImpl);
    expect(token).toBe("access-gen-2");
    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("CONNECTED");
    expect(after.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(after.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // T02 — A lost lease to B: A cannot mark REQUIRES_REAUTH
  it("T02: stale lease owner cannot mark REQUIRES_REAUTH", async () => {
    armOauthEnv();
    const { pilotId, authId, refresh } = await seedExpiredAuth("r1-t02");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    clearOauthEnv();
  });

  // T03 — A ACCESS_DENIED after lease loss: B tokens+lease preserved
  it("T03: ACCESS_DENIED after lease loss preserves B owner", async () => {
    armOauthEnv();
    const { pilotId, authId, row, refresh } = await seedExpiredAuth("r1-t03");
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
    // Steal lease while A is in-flight (simulates B reclaim after A expiry).
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_owner_B",
        refreshLeaseExpiresAt: new Date(Date.now() + 60_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("ACCESS_DENIED");

    // Explicit stale mark (generation match, wrong lease) must not wipe B.
    expect(await markRequiresReauth(pilotId, authId, refresh.ciphertext, "rfl_stale_A")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    expect(still.tokenCiphertext).toBeTruthy();
    expect(still.refreshCiphertext).toBe(refresh.ciphertext);
    clearOauthEnv();
  });

  // T04 — DEPENDENCY_UNAVAILABLE: no inferred revocation
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
    expect(still.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // T05 — positive response after lease replaced: no CAS by A
  it("T05: stale owner positive refresh cannot CAS after lease replace", async () => {
    armOauthEnv();
    const { authId, row, refresh } = await seedExpiredAuth("r1-t05");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-stale",
          refresh_token: "refresh-stale",
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
    const result = await pA;
    OAuthConcurrencyBarrier.clear();

    // Generation moved — openAccessIfPresent returns B's access OR CONFLICT.
    if (typeof result === "string") {
      expect(result).toBe("access-owner-B");
    } else {
      expect(result).toBeInstanceOf(StudioError);
      expect((result as StudioError).code).toBe("CONFLICT");
    }
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(ownerBRefresh.ciphertext);
    expect(still.refreshCiphertext).not.toBe(refresh.ciphertext);
    expect(still.refreshLeaseToken).toBe("rfl_owner_B");
    clearOauthEnv();
  });

  // T06 — G2 persisted: G1 error cannot wipe G2
  it("T06: G1 error cannot wipe persisted G2", async () => {
    armOauthEnv();
    const { pilotId, authId } = await seedExpiredAuth("r1-t06");
    const g2 = sealSecret("refresh-gen-2");
    const a2 = sealSecret("access-gen-2");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshCiphertext: g2.ciphertext,
        refreshNonce: g2.nonce,
        tokenCiphertext: a2.ciphertext,
        tokenNonce: a2.nonce,
        tokenKeyVersion: a2.keyVersion,
        tokenExpiresAt: new Date(Date.now() + 3600_000),
        refreshLeaseToken: null,
        refreshLeaseExpiresAt: null,
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    const g1 = sealSecret("refresh-gen-1");
    expect(await markRequiresReauth(pilotId, authId, g1.ciphertext, null)).toBe(false);
    expect(await markRequiresReauth(pilotId, authId, g1.ciphertext, "rfl_any")).toBe(false);
    const still = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(still.status).toBe("CONNECTED");
    expect(still.refreshCiphertext).toBe(g2.ciphertext);
    expect(still.tokenCiphertext).toBeTruthy();
    clearOauthEnv();
  });

  // T07 — disconnect during refresh: no resurrection
  it("T07: disconnect during refresh prevents resurrection", async () => {
    armOauthEnv();
    const { pilotId, authId, row } = await seedExpiredAuth("r1-t07");
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:REFRESH_GITHUB");

    const pA = loadOrRefreshUserAccessToken(row, (async () => {
      await OAuthConcurrencyBarrier.before("before:REFRESH_GITHUB");
      return new Response(
        JSON.stringify({
          access_token: "access-zombie",
          refresh_token: "refresh-zombie",
          expires_in: 3600,
          scope: "",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    await new Promise((r) => setTimeout(r, 40));
    await disconnectIntegration(pilotId);
    OAuthConcurrencyBarrier.release("before:REFRESH_GITHUB");
    const err = await pA;
    OAuthConcurrencyBarrier.clear();
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("CONFLICT");

    const rows = await db
      .select()
      .from(integrationAuthorizations)
      .where(eq(integrationAuthorizations.id, authId));
    expect(rows[0]!.status).toBe("REVOKED");
    expect(rows[0]!.tokenCiphertext).toBeNull();
    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(0);
    clearOauthEnv();
  });

  // T08 — expired lease without certain network result: fail-closed, no second remote
  it("T08: expired lease reclaim is fail-closed without second GitHub refresh", async () => {
    armOauthEnv();
    const { authId, row } = await seedExpiredAuth("r1-t08");
    await db
      .update(integrationAuthorizations)
      .set({
        refreshLeaseToken: "rfl_expired_prior",
        refreshLeaseExpiresAt: new Date(Date.now() - 5_000),
        updatedAt: new Date(),
      })
      .where(eq(integrationAuthorizations.id, authId));

    let githubCalls = 0;
    const err = await loadOrRefreshUserAccessToken(row, (async () => {
      githubCalls += 1;
      return new Response(
        JSON.stringify({ access_token: "should-not", refresh_token: "x", expires_in: 3600 }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }) as unknown as typeof fetch).catch((e: unknown) => e);

    expect(githubCalls).toBe(0);
    expect(err).toBeInstanceOf(StudioError);
    expect((err as StudioError).code).toBe("ACCESS_DENIED");
    const after = (
      await db.select().from(integrationAuthorizations).where(eq(integrationAuthorizations.id, authId)).limit(1)
    )[0]!;
    expect(after.status).toBe("REQUIRES_REAUTH");
    expect(after.tokenCiphertext).toBeNull();
    expect(after.refreshLeaseToken).toBeNull();
    clearOauthEnv();
  });

  // T09–T11 — concurrent independent callbacks
  it("T09-T11: concurrent callbacks — one CONNECTED, loser CONFLICT, winner exact", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t09");
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

    const connectedOutcomes = [a, b].filter(
      (o): o is Awaited<ReturnType<typeof getIntegrationStatus>> =>
        !!o && typeof o === "object" && "status" in o && (o as { status: string }).status === "CONNECTED",
    );
    const conflicts = [a, b].filter((o) => o instanceof StudioError && o.code === "CONFLICT");
    expect(connectedOutcomes).toHaveLength(1);
    expect(conflicts).toHaveLength(1);

    const dbConnected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(dbConnected).toHaveLength(1);
    expect(connectedOutcomes[0]!.authorizationId).toBe(dbConnected[0]!.id);
    expect(connectedOutcomes[0]!.status).toBe("CONNECTED");

    // Loser must not look like CONNECTED success.
    const loser = conflicts[0] as StudioError;
    expect(loser.message).toMatch(/Collision CONNECTED/);
  });

  // T12 — same state replay: no second authorization
  it("T12: replaying same OAuth state does not create second authorization", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t12");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const first = await completeGitHubAuthorization({
      pilotId,
      state,
      studioSessionId: sessionId,
    });
    expect(first.status).toBe("CONNECTED");
    const authId = first.authorizationId;

    await expect(
      completeGitHubAuthorization({
        pilotId,
        state,
        studioSessionId: sessionId,
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const connected = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(connected).toHaveLength(1);
    expect(connected[0]!.id).toBe(authId);
  });

  // T13 — different pilots: isolation
  it("T13: different pilots remain isolated under concurrent callbacks", async () => {
    const a = await seedProject("r2-t13-a");
    const b = await seedProject("r2-t13-b");
    const sa = await startGitHubAuthorization(a.pilotId, "/settings/integrations", a.sessionId);
    const sb = await startGitHubAuthorization(b.pilotId, "/settings/integrations", b.sessionId);
    OAuthConcurrencyBarrier.clear();
    OAuthConcurrencyBarrier.arm("before:AUTH_INSERT");

    const p1 = completeGitHubAuthorization({
      pilotId: a.pilotId,
      state: sa.state,
      studioSessionId: a.sessionId,
    });
    const p2 = completeGitHubAuthorization({
      pilotId: b.pilotId,
      state: sb.state,
      studioSessionId: b.sessionId,
    });
    await new Promise((r) => setTimeout(r, 30));
    OAuthConcurrencyBarrier.release("before:AUTH_INSERT");
    const [ra, rb] = await Promise.all([p1, p2]);
    OAuthConcurrencyBarrier.clear();

    expect(ra.status).toBe("CONNECTED");
    expect(rb.status).toBe("CONNECTED");
    expect(ra.authorizationId).not.toBe(rb.authorizationId);

    const aRows = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, a.pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    const bRows = await db
      .select()
      .from(integrationAuthorizations)
      .where(
        and(
          eq(integrationAuthorizations.pilotId, b.pilotId),
          eq(integrationAuthorizations.status, "CONNECTED"),
        ),
      );
    expect(aRows).toHaveLength(1);
    expect(bRows).toHaveLength(1);
  });

  // T14 — UNIQUE constraint still effective
  it("T14: PostgreSQL UNIQUE CONNECTED constraint remains effective", async () => {
    const { pilotId, sessionId } = await seedProject("r2-t14");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    await completeGitHubAuthorization({ pilotId, state, studioSessionId: sessionId });
    await expect(
      db.insert(integrationAuthorizations).values({
        id: newId("iauth"),
        pilotId,
        provider: "github",
        status: "CONNECTED",
        metadataJson: "{}",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ).rejects.toThrow();
  });
});


```

### 6.D Migration 012 (inchangée — référence)

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

### 6.E Barrier (inchangé)

```typescript
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

### 6.F Docs AS-IMPLEMENTED

#### specification-technique.md (bandeau)

```markdown
# R5 — Spécification technique candidate : collaboration Git et intégrations

> **AS-IMPLEMENTED LOCAL + FINAL CONCURRENCY SAFETY CLOSURE R1/R2 (2026-11-08)** — `feat/next-git-collaboration-20261108` / baseline `c658f590`.
> Domaines : D9/D7/D8 ; migrations `008`–`012` inchangées (aucune migration nouvelle).
> **R1 refresh fencing** : `markRequiresReauth(authId, gen, leaseToken)` — CAS atomique génération **et** propriété du bail ; reclaim de lease expiré → fail-closed REQUIRES_REAUTH **sans** 2e refresh distant ; `DEPENDENCY_UNAVAILABLE` ne révoque pas.
> **R2 callback** : collision UNIQUE → `CONFLICT` strict (jamais le CONNECTED d'un autre callback comme succès propre).
> SCRIPTED guard / permissions fail-closed / session-bound state / D7 lease / Option A : préservés.
> REAL user interactive **NOT PROVEN**. Mutations REAL **HARD-BLOCKED**. DET scope only.


**Statut :** `DOCUMENTED — DRAFT ARCHITECTURE / NOT VALIDATED SPEC / NOT IMPLEMENTED`
**Nature :** préparation technique de ML4 sous la source de contrat de macro-lot R5 existante ; **ne remplace pas** les R2/ADR validés, la phase Figma ou le prompt Cursor SFIA v2.6.
```

#### matrice-acceptation.md §16

```markdown
## 16. Requalification FINAL SAFETY R1/R2 (2026-11-08)

GO Morris CRITICAL. Handoff entrée `2a9eb05a…`.
Plafond : **DETERMINISTIC SCOPE ONLY**. Aucune migration.

| Item | Statut | Preuve |
|---|---|---|
| R1 lease+gen fencing | RESOLVED (DET) | `markRequiresReauth(..., expectedLeaseToken)` ; T02/T03/T06 |
| R1 ambiguous expiry | RESOLVED (DET) | reclaim expiré → REQUIRES_REAUTH sans GitHub ; T08 |
| R1 DEPENDENCY_UNAVAILABLE | RESOLVED (DET) | clear lease only ; CONNECTED conservé ; T04 |
| R1 stale positive CAS | RESOLVED (DET) | T05 ; disconnect T07 |
| R2 callback CONFLICT | RESOLVED (DET) | unique catch → CONFLICT only ; T09–T11 |
| R2 replay / isolation / UNIQUE | RESOLVED (DET) | T12–T14 |
| Option A / 009–012 | PRESERVED | schéma inchangé |

Commandes (web/, ~21:57–21:59 CET) :
- tsc PASS ; unit **167** ; integration **205** ; build PASS ; Playwright **13/13**

```

#### delivery-history entry

```markdown
## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-FINAL-SAFETY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:59 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth FINAL CONCURRENCY SAFETY CLOSURE (R1+R2) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `2a9eb05a…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1 | Fencing refresh : CAS génération **+** `refreshLeaseToken` ; reclaim lease expiré fail-closed sans 2e refresh distant ; ACCESS_DENIED seulement avec propriété du bail ; DEPENDENCY_UNAVAILABLE → clear lease only |
| R2 | Callback concurrent : unique violation → CONFLICT strict (pas de CONNECTED emprunté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **205** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH FINAL SAFETY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

```

## 9. R1 avant / après — CAS SQL exact

### Avant (réserve handoff `2a9eb05a`)
- `markRequiresReauth(pilotId, authId, expectedRefreshCiphertext)` comparait **uniquement** la génération.
- Un propriétaire de bail périmé (L1) recevant ACCESS_DENIED pouvait donc passer en REQUIRES_REAUTH tant que G1 était encore persisté, **même si B détenait L2**.
- Reclaim de lease expiré autorisait un **deuxième** refresh distant sur la même génération ambiguë.

### Après
- `markRequiresReauth(pilotId, authId, expectedRefreshCiphertext, expectedLeaseToken)` :
  - prédicat génération + prédicat lease (`IS NULL` si token null, sinon `refresh_lease_token = expected`)
  - + `id` + `pilot_id` + `status='CONNECTED'`
- Mutations post-refresh (ACCESS_DENIED → reauth ; persist rotation) **toutes** fencées par lease ownership.
- `claimRefreshLease` : (1) claim propre `lease IS NULL AND expires IS NULL` → `priorLeaseExpired=false` ; (2) reclaim `expires_at <= now()` → `priorLeaseExpired=true` → **fail-closed REQUIRES_REAUTH sans appel GitHub**.
- Lease actif détenu par autrui → `CONFLICT` borné (pas de vol).

### CAS persist rotation (inchangé dans l'esprit, désormais derrière claim non-expiré)

```
UPDATE … SET tokens…, refresh_lease_*=NULL
WHERE id AND pilot_id AND status=CONNECTED
  AND refresh_ciphertext = expectedGen
  AND refresh_lease_token = leaseToken
```

### CAS markRequiresReauth

```
UPDATE … SET status=REQUIRES_REAUTH, wipe tokens/lease
WHERE id AND pilot_id AND status=CONNECTED
  AND refresh_ciphertext = expectedGen   -- ou IS NULL
  AND refresh_lease_token = expectedLease -- ou IS NULL
```

## 10. R1 timeout / ambiguïté / expiry

| Cas | Comportement |
|---|---|
| A. Invalidation prouvée (`ACCESS_DENIED`) | `markRequiresReauth(gen, lease)` — seulement si bail encore détenu |
| B. Réseau / `DEPENDENCY_UNAVAILABLE` | `clearRefreshLease(own lease)` uniquement — **pas** de révocation déduite |
| C. Génération remplacée par winner | CAS persist échoue ; reload ; éventuel openAccess |
| D. Bail expiré sans résultat fiable | reclaim → fail-closed REQUIRES_REAUTH, **0** appel GitHub |
| E. Déconnexion locale pendant refresh | CAS échoue (status≠CONNECTED) → CONFLICT ; pas de résurrection |

Aucune txn SQL pendant I/O réseau. Aucun log de token/ciphertext. Boucle refresh bornée (un claim propre max ; sinon CONFLICT).

## 11. R2 avant / après — résultat callback

### Avant
`catch(isUniqueViolation)` pouvait `return getIntegrationStatus()` du gagnant → CONNECTED trompeur pour le callback perdant.

### Après
```
catch unique → throw StudioError CONFLICT
  "Collision CONNECTED — cette tentative n'a pas créé l'autorisation"
```
UI peut recharger le status séparément. UNIQUE partiel + txn revoke/insert/seed **conservés**. Pas de 2e table. Pas d'idempotence sans identité d'opération stable (rejeu state → CONFLICT « déjà consommé »).

## 12. Tests concurrentiels (setup / barrières / assertions)

Corpus : `git-collaboration.pg.test.ts` — PostgreSQL réel DEV ; `OAuthConcurrencyBarrier` ; pas d'OAuth GitHub réel.

| ID | Assertion discriminante |
|---|---|
| T01 | owner lease actif → rotation persistée |
| T02 | lease B actif → mark(A) false ; tokens B préservés |
| T03 | A ACCESS_DENIED après vol de lease → B préservé |
| T04 | DEPENDENCY_UNAVAILABLE → CONNECTED + tokens ; lease cleared |
| T05 | réponse positive A après replace lease/gen → pas de CAS A |
| T06 | G2 persisté → erreur G1 ne wipe pas |
| T07 | disconnect pendant refresh → CONFLICT ; pas CONNECTED |
| T08 | lease expiré → REQUIRES_REAUTH ; githubCalls=0 |
| T09–T11 | 1 CONNECTED + 1 CONFLICT ; authorizationId exact |
| T12 | rejeu state → CONFLICT ; 1 CONNECTED |
| T13 | pilotes distincts isolés |
| T14 | UNIQUE insert 2e CONNECTED rejected |
| C1/C2 | non-régression renforcée (CONFLICT strict, 1 GitHub call) |

## 13. Résultats PostgreSQL réels

Filtres discriminants R1/R2|C1|C2 : **PASS** (25 tests ciblés dont suite R1/R2).
Suite integration complète : **205 PASS** / 12 files — Start at 21:57:31 CET — Duration 17.20s.

Preuves explicites observées :
- propriétaire périmé incapable de modifier tokens (T02/T03/T05/T06)
- propriétaire courant préservé
- aucun refresh distant doublé sur génération ambiguë (T08 githubCalls=0 ; C1 githubCalls=1)
- au plus un CONNECTED (T09/T14/C2)
- callback perdant ≠ succès (T10 CONFLICT)
- D7/D8 non-régression dans le même fichier (tests antérieurs rejoués)

## 14. Suites globales et horodatages

| Suite | Résultat | Horodatage CET |
|---|---|---|
| `npx tsc --noEmit` | PASS | ~21:57 |
| `npm run test:unit` | **167 PASS** / 30 files | 21:57:30 (5.43s) |
| `npm run test:integration` | **205 PASS** / 12 files | 21:57:31 (17.20s) |
| `npm run build` | PASS (Next 15.5.29) | 21:58:06 |
| `npx playwright test` | **13/13 PASS** | 21:58:25 (~1.1m) |

Baseline d'entrée (167/193/13) **non réutilisée** comme preuve — rejouée. Integration : 193→**205** (+T01–T14).

## 15. Sécurité et absence de secrets

- Aucun token / ciphertext / Client Secret / PEM dans ce pack.
- Env keys cités sans valeurs : `GITHUB_APP_*`, `INTEGRATION_TOKEN_ENCRYPTION_KEY`, `DATABASE_URL` (DSN local non recopié).
- SCRIPTED strictement borné DEV/test (`STUDIO_LANE=DEV` + `STUDIO_ALLOW_SCRIPTED_GITHUB`).
- AES-256-GCM inchangé ; PKCE S256 / state one-shot / returnPath allowlist / permissions fail-closed préservés.
- App DEV ids publics seulement : App `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / sandbox `mcleland147/chantiers360` — **pas** de preuve REAL user OAuth interactive.

## 16. Invariants D7/D8 et Option A

- D8 Option A : trois refs historiques SCRIPTED détachées **conservées** (aucune remédiation DB).
- Claim/lease actif D7 + CAS terminal : non touchés ce cycle ; rejoués via suite integration.
- Provenance PR D7 : préservée.
- Mutations REAL : HARD-BLOCKED.
- Installation GitHub REAL READ : claim antérieur inchangé (pas d'extension).

## 17. ENV-01 / versioning

- Source : `environnements-recette-et-promotions.md` — DEV autorisé ; E2E isolé autorisé ; RECETTE aucune modif ; STABLE NOT AVAILABLE.
- Versioning : `product-versioning.md` — classe **NO RELEASE** ; technique `0.0.0-dev` ; pas de candidat RECETTE ; pas de publication produit.
- Correctif tracé dans `construction/delivery-history.md`.

## 18. Fake/Real Qualification

| Claim | État |
|---|---|
| SCRIPTED OAuth DET (R1/R2) | **DETERMINISTIC PROVEN** (ce cycle) |
| REAL installation READ | PROVEN précédemment (non étendu) |
| REAL user-to-server interactive | **NOT PROVEN** |
| REAL Git mutations | **HARD-BLOCKED** |

Ne pas utiliser le connecteur GitHub Cursor comme preuve App utilisateur.

## 19. KNOWN GAP et dette / exit

1. REAL user OAuth interactive : Client Secret + Callback + encryption key + parcours navigateur — **GO Morris distinct**.
2. Révocation OAuth distante GitHub au disconnect : wipe local only (KNOWN GAP inchangé).
3. Branche Product distante absente : construction locale dirty uniquement.
4. Idempotence callback : uniquement via state one-shot ; pas d'identity d'opération additionnelle (conforme mandat).

## 20. Gates Morris restants

1. Critical Re-Review ChatGPT sur ce pack / handoff L3.
2. Config GitHub App OAuth DEV (Client Secret, Callback, encryption) sous GO distinct.
3. Qualification interactive user-to-server.
4. Éventuels effets documentaires REAL — GO distinct ; pas avant re-review favorable R1/R2.

## 21. Verdict unique

**ML4 GITHUB AUTH FINAL SAFETY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY.**

Ne pas déclarer : REAL USER OAUTH PROVEN / READY FOR REAL GIT WRITES / RECETTE ACCEPTED / STABLE AVAILABLE / ADOPTED.

FIN REVIEW PACK FULL — mono-fichier L3 cible : `sfia-review-handoff/latest-chatgpt-review.md`
