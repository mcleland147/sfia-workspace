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
