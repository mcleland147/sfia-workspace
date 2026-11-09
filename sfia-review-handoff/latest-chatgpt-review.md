# SFIA STUDIO NEXT — ML4
# REVIEW PACK FULL — CYCLE 11 ENVIRONMENT DELIVERY

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 09:18 CET |
| Processus | SFIA v2.6 |
| Cycle | 11 — DÉPLOIEMENT / RELEASE |
| Profil | CRITICAL |
| Type | ENVIRONMENT DELIVERY / ML4 |
| Version | 0.0.0-dev / NO RELEASE |
| GO Morris | Finaliser préparation technique RECETTE ML4 (pas USER RECETTE) |

## 2. Git Truth — avant

| Item | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree DEV ML4 | /Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration |
| Branche | feat/next-git-collaboration-20261108 |
| HEAD distant entrée | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| Tree entrée | cdbd7e3763b835db5a58458191d4fb648d184fa0 |
| main | c658f59023d44a0e22448c7ee034e3c1dda292a2 |
| L3 parent entrée | b4ba06b7d0c29054447ade20d7883b823ccb0ea6 |
| Port 3200 | OCCUPÉ G4 next-server pid 74165 / worktree …-g4-recette-build-29535d07 / BUILD_ID U2HrgAwriuzf6f1YI0rRK |
| Worktree ML4 RECETTE | ABSENT au départ |

Dirty non Product exclus du commit : .tmp-sfia-review ; script qualify untracked.

## 3. Git Truth — après

| Item | Valeur |
|---|---|
| Commit Product LOCAL | 974b0030a94469bef05496151792e8c35a9a83e9 |
| Tree | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 |
| Parent | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| Remote Product tip | INCHANGÉ 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b (aucun push Product) |
| Worktree RECETTE | /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030 @ 974b0030a94469bef05496151792e8c35a9a83e9 |
| Build ID | RzpCuGMK6SnwfucphK7Qa |

## 4. Sources Git lues

Repo-root : method/sfia-fast-track/core/sfia-cycle-routing-guide.md ; prompts/templates/sfia-cycle-execution-template.md

Sous projects/sfia-studio-next/ :
- governance/SEF.md, roadmap.md, environnements-recette-et-promotions.md, product-versioning.md, product-naming-conventions.md
- governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md
- architecture-technique/cadrage-r4.md
- construction/integration-git/contrat-acceptation.md, specification-technique.md, matrice-acceptation.md
- construction/delivery-history.md
- sources techniques ML4 : github-app-config.ts, github-app-user-oauth.ts, github-provider.ts, scripted-github-guard.ts, real-github-provider.ts, github-app-auth.ts, migrations 001–012, scripts/db-migrate.sh

## 5. Git Review Index

| Path | Action |
|---|---|
| web/src/domains/integrations/github-app-config.ts | MODIFIED — lane profiles DEV/RECETTE fail-closed |
| web/src/domains/integrations/github-app-user-oauth.ts | MODIFIED — callback/App ID bornés par lane |
| web/tests/unit/github-app-config.test.ts | MODIFIED — DEV/RECETTE + cross-lane refus |
| web/tests/unit/github-app-user-oauth.test.ts | MODIFIED — RECETTE callback accept/reject |
| web/tests/unit/github-app-auth-real-provider.test.ts | MODIFIED — meta.lane |
| construction/integration-git/specification-technique.md | MODIFIED — bandeau AS-IMPLEMENTED lane App |
| construction/integration-git/matrice-acceptation.md | MODIFIED — §24 |
| construction/delivery-history.md | MODIFIED — DELIV-2026-11-09-ML4-RECETTE-ENV-LANE-APP |
| construction/integration-git/env01-recette-manifest-ml4-974b0030-2026-11-09.md | NEW local (ENV-01) |

Hors Git : ~/.config/sfia-studio-next/recette/.env.local (0600) — non publié.

## 6. Contenu complet — github-app-config.ts

```typescript
import { accessSync, constants, readFileSync, statSync } from "node:fs";
import { StudioError } from "@/lib/http-errors";

/** Lanes that may bind a GitHub App identity (fail-closed otherwise). */
export type StudioGithubAppLane = "DEV" | "RECETTE";

export type GitHubAppLaneProfile = {
  appId: string;
  installationId: string;
  owner: string;
  allowedFullName: string;
  callbackUrl: string;
};

/**
 * Explicit lane → App identity map. No silent DEV↔RECETTE fallback.
 * Shared sandbox allowlist remains mono-repo `chantiers360`.
 */
export const GITHUB_APP_LANE_PROFILES: Record<StudioGithubAppLane, GitHubAppLaneProfile> = {
  DEV: {
    appId: "5670639",
    installationId: "179935689",
    owner: "mcleland147",
    allowedFullName: "mcleland147/chantiers360",
    callbackUrl: "http://127.0.0.1:3100/api/integrations/github/callback",
  },
  RECETTE: {
    appId: "5677465",
    installationId: "180092114",
    owner: "mcleland147",
    allowedFullName: "mcleland147/chantiers360",
    callbackUrl: "http://127.0.0.1:3200/api/integrations/github/callback",
  },
};

/** Canonical sandbox repository (shared across lanes; still mono-repo). */
export const GITHUB_APP_ALLOWED_FULL_NAME = GITHUB_APP_LANE_PROFILES.DEV.allowedFullName;
export const GITHUB_APP_EXPECTED_OWNER = GITHUB_APP_LANE_PROFILES.DEV.owner;

/**
 * DEV aliases preserved for existing unit fixtures.
 * Runtime checks must use {@link resolveExpectedGitHubAppProfile}.
 */
export const GITHUB_APP_EXPECTED_APP_ID = GITHUB_APP_LANE_PROFILES.DEV.appId;
export const GITHUB_APP_EXPECTED_INSTALLATION_ID = GITHUB_APP_LANE_PROFILES.DEV.installationId;

export type GitHubAppCredentialMeta = {
  appId: string;
  installationId: string;
  privateKeyPath: string;
  pathExists: boolean;
  pathIsFile: boolean;
  pathMode: string | null;
  pathSizeBytes: number | null;
  allowedFullName: string;
  expectedOwner: string;
  lane: StudioGithubAppLane;
};

export type GitHubAppLoadedCredentials = {
  appId: string;
  installationId: string;
  /** PKCS#8 / PEM private key material — never log. */
  privateKeyPem: string;
  allowedFullName: string;
  expectedOwner: string;
  lane: StudioGithubAppLane;
  meta: GitHubAppCredentialMeta;
};

function requireEnv(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) {
    throw new StudioError(
      "NOT_CONFIGURED",
      `LOCAL CREDENTIAL INPUT REQUIRED — ${name} absent`,
      { httpStatus: 503 },
    );
  }
  return v;
}

/** Resolve STUDIO_LANE for GitHub App binding — fail-closed. */
export function resolveStudioGithubAppLane(
  rawLane: string | undefined = process.env.STUDIO_LANE,
): StudioGithubAppLane {
  const lane = (rawLane ?? "").trim().toUpperCase();
  if (lane === "DEV" || lane === "RECETTE") return lane;
  throw new StudioError(
    "NOT_CONFIGURED",
    `STUDIO_LANE invalide ou absente pour GitHub App (reçu=${lane || "∅"})`,
    { httpStatus: 503 },
  );
}

export function resolveExpectedGitHubAppProfile(
  lane: StudioGithubAppLane = resolveStudioGithubAppLane(),
): GitHubAppLaneProfile {
  return GITHUB_APP_LANE_PROFILES[lane];
}

/**
 * Assert env App identity matches the active lane profile.
 * Rejects cross-lane App IDs and arbitrary overrides.
 */
export function assertGitHubAppEnvMatchesLane(input: {
  lane?: StudioGithubAppLane;
  appId: string;
  installationId: string;
  owner?: string;
  allowedFullName?: string;
  callbackUrl?: string;
}): GitHubAppLaneProfile {
  const lane = input.lane ?? resolveStudioGithubAppLane();
  const profile = resolveExpectedGitHubAppProfile(lane);

  if (input.appId !== profile.appId) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ID inattendu pour lane ${lane} (attendu ${profile.appId})`,
      { httpStatus: 400 },
    );
  }
  if (input.installationId !== profile.installationId) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_INSTALLATION_ID inattendu pour lane ${lane} (attendu ${profile.installationId})`,
      { httpStatus: 400 },
    );
  }
  if (input.owner != null && input.owner.toLowerCase() !== profile.owner.toLowerCase()) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_EXPECTED_OWNER inattendu pour lane ${lane} (attendu ${profile.owner})`,
      { httpStatus: 400 },
    );
  }
  if (
    input.allowedFullName != null &&
    input.allowedFullName.toLowerCase() !== profile.allowedFullName.toLowerCase()
  ) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ALLOWED_REPO inattendu pour lane ${lane} (attendu ${profile.allowedFullName})`,
      { httpStatus: 400 },
    );
  }
  if (input.callbackUrl != null && input.callbackUrl !== profile.callbackUrl) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_CALLBACK_URL inattendu pour lane ${lane}`,
      { httpStatus: 400 },
    );
  }
  return profile;
}

/** Inspect credential path metadata without returning PEM content. */
export function inspectGitHubAppCredentialPath(path: string): {
  exists: boolean;
  isFile: boolean;
  mode: string | null;
  sizeBytes: number | null;
  readable: boolean;
} {
  try {
    const st = statSync(path);
    let readable = false;
    try {
      accessSync(path, constants.R_OK);
      readable = true;
    } catch {
      readable = false;
    }
    return {
      exists: true,
      isFile: st.isFile(),
      mode: `0${(st.mode & 0o777).toString(8)}`,
      sizeBytes: st.isFile() ? st.size : null,
      readable,
    };
  } catch {
    return { exists: false, isFile: false, mode: null, sizeBytes: null, readable: false };
  }
}

export function readGitHubAppCredentialMetaFromEnv(): GitHubAppCredentialMeta {
  const lane = resolveStudioGithubAppLane();
  const profile = resolveExpectedGitHubAppProfile(lane);
  const appId = requireEnv("GITHUB_APP_ID");
  const installationId = requireEnv("GITHUB_APP_INSTALLATION_ID");
  const privateKeyPath = requireEnv("GITHUB_APP_PRIVATE_KEY_PATH");
  const allowedFullName =
    process.env.GITHUB_APP_ALLOWED_REPO?.trim() || profile.allowedFullName;
  const expectedOwner =
    process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || profile.owner;
  assertGitHubAppEnvMatchesLane({
    lane,
    appId,
    installationId,
    owner: expectedOwner,
    allowedFullName,
  });
  const insp = inspectGitHubAppCredentialPath(privateKeyPath);
  return {
    appId,
    installationId,
    privateKeyPath,
    pathExists: insp.exists,
    pathIsFile: insp.isFile,
    pathMode: insp.mode,
    pathSizeBytes: insp.sizeBytes,
    allowedFullName,
    expectedOwner,
    lane,
  };
}

/**
 * Load App credentials for D9 REAL installation-to-server reads.
 * Never uses Better Auth GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET.
 * Never returns or logs path content in thrown messages beyond existence.
 */
export function loadGitHubAppCredentialsFromEnv(): GitHubAppLoadedCredentials {
  const meta = readGitHubAppCredentialMetaFromEnv();

  if (!meta.pathExists || !meta.pathIsFile) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — GITHUB_APP_PRIVATE_KEY_PATH fichier absent",
      { httpStatus: 503 },
    );
  }

  const insp = inspectGitHubAppCredentialPath(meta.privateKeyPath);
  if (!insp.readable) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — clé privée non lisible",
      { httpStatus: 503 },
    );
  }

  let privateKeyPem: string;
  try {
    privateKeyPem = readFileSync(meta.privateKeyPath, "utf8");
  } catch {
    throw new StudioError(
      "NOT_CONFIGURED",
      "LOCAL CREDENTIAL INPUT REQUIRED — échec de lecture du chemin clé",
      { httpStatus: 503 },
    );
  }

  if (!/BEGIN (?:RSA )?PRIVATE KEY/.test(privateKeyPem)) {
    throw new StudioError(
      "INVALID_REQUEST",
      "Clé privée GitHub App invalide (PEM attendu)",
      { httpStatus: 400 },
    );
  }

  return {
    appId: meta.appId,
    installationId: meta.installationId,
    privateKeyPem,
    allowedFullName: meta.allowedFullName,
    expectedOwner: meta.expectedOwner,
    lane: meta.lane,
    meta,
  };
}

/** True when REAL App read credentials are present (path exists). Does not validate PEM crypto. */
export function isGitHubAppReadConfigured(): boolean {
  try {
    const meta = readGitHubAppCredentialMetaFromEnv();
    return meta.pathExists && meta.pathIsFile && Boolean(meta.appId) && Boolean(meta.installationId);
  } catch {
    return false;
  }
}

export function parseFullName(fullName: string): { owner: string; name: string } {
  const parts = fullName.split("/");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    throw new StudioError("INVALID_REQUEST", `fullName invalide: ${fullName}`, { httpStatus: 400 });
  }
  return { owner: parts[0], name: parts[1] };
}
```

## 7. Contenu complet — github-app-user-oauth.ts

```typescript
import { createHash, randomBytes } from "node:crypto";
import { StudioError } from "@/lib/http-errors";
import {
  assertGitHubAppEnvMatchesLane,
  resolveExpectedGitHubAppProfile,
  resolveStudioGithubAppLane,
} from "./github-app-config";

export type UserOauthConfig = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  appId: string;
  expectedInstallationId: string;
  expectedOwner: string;
  allowedFullName: string;
};

export type GitHubUserIdentity = {
  id: string; // stable numeric id as string
  login: string;
};

export type UserTokenBundle = {
  accessToken: string;
  refreshToken: string | null;
  expiresAt: Date | null;
  scopes: string[];
};

export type UserInstallation = {
  id: string;
  appId: string;
  accountLogin: string;
  accountType: string;
  repositorySelection: string | null;
  suspendedAt: string | null;
};

function requireEnv(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) {
    throw new StudioError(
      "NOT_CONFIGURED",
      `${name} absent — configuration GitHub App user-to-server requise`,
      { httpStatus: 503 },
    );
  }
  return v;
}

/** True when Client ID + Secret + Callback are present (not Better Auth GITHUB_CLIENT_*). */
export function isGitHubAppUserOauthConfigured(): boolean {
  return Boolean(
    process.env.GITHUB_APP_CLIENT_ID?.trim() &&
      process.env.GITHUB_APP_CLIENT_SECRET?.trim() &&
      process.env.GITHUB_APP_CALLBACK_URL?.trim(),
  );
}

export function readGitHubAppUserOauthConfig(): UserOauthConfig {
  // Never reuse Better Auth GITHUB_CLIENT_ID/SECRET.
  // Lane profile is authoritative — env may omit IDs only when they match the active lane.
  const lane = resolveStudioGithubAppLane();
  const profile = resolveExpectedGitHubAppProfile(lane);
  const appId = process.env.GITHUB_APP_ID?.trim() || profile.appId;
  const expectedInstallationId =
    process.env.GITHUB_APP_INSTALLATION_ID?.trim() || profile.installationId;
  const expectedOwner = process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || profile.owner;
  const allowedFullName = process.env.GITHUB_APP_ALLOWED_REPO?.trim() || profile.allowedFullName;
  const callbackUrl = requireEnv("GITHUB_APP_CALLBACK_URL");
  assertGitHubAppEnvMatchesLane({
    lane,
    appId,
    installationId: expectedInstallationId,
    owner: expectedOwner,
    allowedFullName,
    callbackUrl,
  });
  return {
    clientId: requireEnv("GITHUB_APP_CLIENT_ID"),
    clientSecret: requireEnv("GITHUB_APP_CLIENT_SECRET"),
    callbackUrl,
    appId,
    expectedInstallationId,
    expectedOwner,
    allowedFullName,
  };
}

export function mintPkcePair(): { codeVerifier: string; codeChallenge: string; method: "S256" } {
  const codeVerifier = randomBytes(32).toString("base64url");
  const codeChallenge = createHash("sha256").update(codeVerifier).digest("base64url");
  return { codeVerifier, codeChallenge, method: "S256" };
}

export function buildGitHubAppUserAuthorizeUrl(input: {
  config: UserOauthConfig;
  state: string;
  codeChallenge: string;
  codeChallengeMethod: string;
}): string {
  const u = new URL("https://github.com/login/oauth/authorize");
  u.searchParams.set("client_id", input.config.clientId);
  u.searchParams.set("redirect_uri", input.config.callbackUrl);
  u.searchParams.set("state", input.state);
  u.searchParams.set("code_challenge", input.codeChallenge);
  u.searchParams.set("code_challenge_method", input.codeChallengeMethod);
  // User-to-server: request only what is needed for installation visibility + identity.
  // Repo mutations remain gated by D6/D7 and REAL mutation hard-blocks.
  u.searchParams.set("scope", "");
  return u.toString();
}

async function ghJson<T>(
  url: string,
  init: RequestInit,
  fetchImpl: typeof fetch = fetch,
): Promise<T> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15_000);
  try {
    const res = await fetchImpl(url, {
      ...init,
      signal: ctrl.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "sfia-studio-next-dev-d9-user-oauth",
        ...(init.headers ?? {}),
      },
    });
    const text = await res.text();
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new StudioError("ACCESS_DENIED", `GitHub user OAuth FORBIDDEN (${res.status})`, {
          httpStatus: res.status === 401 ? 401 : 403,
        });
      }
      if (res.status >= 500) {
        throw new StudioError("DEPENDENCY_UNAVAILABLE", `GitHub user OAuth UNAVAILABLE (${res.status})`, {
          httpStatus: 503,
        });
      }
      throw new StudioError("INVALID_REQUEST", `GitHub user OAuth échec (${res.status})`, {
        httpStatus: 400,
      });
    }
    return text ? (JSON.parse(text) as T) : ({} as T);
  } catch (e) {
    if (e instanceof StudioError) throw e;
    throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub user OAuth TIMEOUT/échec", {
      httpStatus: 503,
      cause: e,
    });
  } finally {
    clearTimeout(t);
  }
}

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
  codeVerifier: string;
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
        code: input.code,
        redirect_uri: input.config.callbackUrl,
        code_verifier: input.codeVerifier,
      }),
    },
    input.fetchImpl,
  );
  if (!raw.access_token) {
    throw new StudioError("ACCESS_DENIED", "Échange code OAuth sans access_token", {
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
    refreshToken: raw.refresh_token ?? null,
    expiresAt,
    scopes,
  };
}

export async function fetchGitHubUserIdentity(
  accessToken: string,
  fetchImpl: typeof fetch = fetch,
): Promise<GitHubUserIdentity> {
  const raw = await ghJson<{ id: number; login: string }>(
    "https://api.github.com/user",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
    fetchImpl,
  );
  if (!raw.id || !raw.login) {
    throw new StudioError("AMBIGUOUS", "Identité GitHub user illisible", { httpStatus: 409 });
  }
  return { id: String(raw.id), login: raw.login };
}

export async function listUserInstallationsForApp(
  accessToken: string,
  expectedAppId: string,
  fetchImpl: typeof fetch = fetch,
): Promise<UserInstallation[]> {
  const raw = await ghJson<{
    installations: Array<{
      id: number;
      app_id: number;
      account?: { login?: string; type?: string };
      repository_selection?: string;
      suspended_at?: string | null;
    }>;
  }>(
    "https://api.github.com/user/installations",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
    fetchImpl,
  );
  return (raw.installations ?? [])
    .filter((i) => String(i.app_id) === expectedAppId)
    .map((i) => ({
      id: String(i.id),
      appId: String(i.app_id),
      accountLogin: i.account?.login ?? "",
      accountType: i.account?.type ?? "",
      repositorySelection: i.repository_selection ?? null,
      suspendedAt: i.suspended_at ?? null,
    }));
}

export async function listUserInstallationRepos(
  accessToken: string,
  installationId: string,
  fetchImpl: typeof fetch = fetch,
): Promise<
  Array<{
    id: number;
    fullName: string;
    defaultBranch: string;
    private: boolean;
    permissions?: { contents?: string; pull_requests?: string };
  }>
> {
  const raw = await ghJson<{
    repositories: Array<{
      id: number;
      full_name: string;
      default_branch: string;
      private: boolean;
      /** Installation list often returns boolean push/pull/admin — not contents strings. */
      permissions?: {
        contents?: string;
        pull_requests?: string;
        admin?: boolean;
        maintain?: boolean;
        push?: boolean;
        triage?: boolean;
        pull?: boolean;
      };
    }>;
  }>(
    `https://api.github.com/user/installations/${installationId}/repositories?per_page=100`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
    fetchImpl,
  );
  return (raw.repositories ?? []).map((r) => {
    const p = r.permissions;
    let contents: string | undefined = p?.contents;
    let pull_requests: string | undefined = p?.pull_requests;
    // Map classic collaborator booleans → contents / pull_requests levels.
    if (!contents && p) {
      if (p.admin) contents = "admin";
      else if (p.maintain || p.push) contents = "write";
      else if (p.pull) contents = "read";
    }
    if (!pull_requests && p) {
      // PR write typically accompanies push; PR read accompanies pull.
      if (p.admin || p.maintain || p.push) pull_requests = "write";
      else if (p.pull) pull_requests = "read";
    }
    return {
      id: r.id,
      fullName: r.full_name,
      defaultBranch: r.default_branch,
      private: Boolean(r.private),
      permissions:
        contents || pull_requests
          ? { contents, pull_requests }
          : undefined,
    };
  });
}

export function assertInstallationAuthorized(
  installations: UserInstallation[],
  config: UserOauthConfig,
): UserInstallation {
  const match = installations.find((i) => i.id === config.expectedInstallationId);
  if (!match) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Installation ${config.expectedInstallationId} inaccessible au user token`,
      { httpStatus: 403 },
    );
  }
  if (match.suspendedAt) {
    throw new StudioError("ACCESS_DENIED", "Installation GitHub App suspendue", { httpStatus: 403 });
  }
  if (
    match.accountLogin &&
    match.accountLogin.toLowerCase() !== config.expectedOwner.toLowerCase()
  ) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Owner installation inattendu (attendu ${config.expectedOwner})`,
      { httpStatus: 403 },
    );
  }
  if (match.appId !== config.appId) {
    throw new StudioError("ACCESS_DENIED", "App ID d'installation divergent", { httpStatus: 403 });
  }
  return match;
}

export function assertSandboxRepoInList(
  repos: Array<{ fullName: string }>,
  allowedFullName: string,
): void {
  if (!repos.some((r) => r.fullName.toLowerCase() === allowedFullName.toLowerCase())) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Dépôt ${allowedFullName} hors ressources user/installation`,
      { httpStatus: 403 },
    );
  }
}
```

## 8. Configuration non secrète par lane

| Variable / identité | DEV | RECETTE |
|---|---|---|
| STUDIO_LANE | DEV | RECETTE |
| App | sfia-studio-next-dev / 5670639 | sfia-studio-next-recette / 5677465 |
| Installation | 179935689 | 180092114 |
| Owner / repo | mcleland147 / chantiers360 | idem |
| Callback | http://127.0.0.1:3100/api/integrations/github/callback | http://127.0.0.1:3200/api/integrations/github/callback |
| Provider mode (cible) | selon env DEV | STUDIO_GITHUB_PROVIDER=real |
| User OAuth | SCRIPTED possible en test | STUDIO_GITHUB_USER_OAUTH=real |
| Mutations | gate documentary | unset (bloqué) |
| DB | 5433/sfia_next_dev | 5434/sfia_next_recette_ml4 |
| Port app | 3100 | 3200 (cible) |

Secrets RECETTE présents (noms seulement) : GITHUB_APP_CLIENT_ID, GITHUB_APP_CLIENT_SECRET, GITHUB_APP_PRIVATE_KEY_PATH, BETTER_AUTH_SECRET, DATABASE_URL, INTEGRATION_TOKEN_ENCRYPTION_KEY. Aucune valeur dans ce pack.

## 9. Preuves App RECETTE

| Check | Résultat |
|---|---|
| Lane load credentials | PASS lane=RECETTE |
| JWT/installation READ-ONLY | PASS appId=5677465 install=180092114 |
| Sandbox repo | PASS chantiers360 (1 repo) |
| PEM mode | 0600 |
| Cross-lane refus (tests) | PASS |
| User OAuth navigateur | NOT RUN |

## 10. Port 3200 / préservation G4

| Item | État |
|---|---|
| Listener | pid 74165 next-server v15.5.29 |
| Worktree | /Users/morris/Projects/sfia-workspace-next-g4-recette-build-29535d07 @ 29535d07 |
| BUILD_ID G4 | U2HrgAwriuzf6f1YI0rRK |
| DB G4 | sfia_next_recette_g4 préservée (26 tables ; pas de tables ML4 effect_attempts) |
| Action ce cycle | AUCUN kill / remplacement |
| Plan bascule | manifeste recovery_procedure — GO Morris dédié requis |

## 11. Bases et migrations

| DB | Action |
|---|---|
| sfia_next_dev | NON TOUCHÉE |
| sfia_next_recette_g4 / ml2 / ml3 / postmerge_g4 | NON TOUCHÉES (données) ; CONNECT PUBLIC révoqué + grants owner |
| sfia_next_recette_ml4 | CRÉÉE ; rôle sfia_next_recette_ml4 NOSUPERUSER ; migrations 001→012 ; 33 tables |
| Isolation | ml4 refuse CONNECT sur g4/ml3 (prouvé) |

## 12. Build et qualité

| Contrôle | Résultat |
|---|---|
| tsc --noEmit | PASS |
| vitest unit | 207 PASS |
| next build (production) | PASS BUILD_ID=RzpCuGMK6SnwfucphK7Qa |
| Turbopack / hot reload | NON utilisés pour artefact RECETTE |
| Push Product | NON FAIT |

## 13. Fake/Real Qualification §6.16

| Capacité | Qualification |
|---|---|
| Lane App identity code | REAL code change LOCAL |
| App installation READ | REAL READ-ONLY PROVEN (RECETTE App) |
| User OAuth consent | NOT RUN |
| Git mutations REAL | BLOCKED / NOT RUN |
| Instance served :3200 | NOT SERVING (G4 holds port) |
| USER RECETTE | NOT RUN |
| STABLE / ADOPTED | NOT CLAIMED |

## 14. Blockers / réserves / gates

1. GATE : GO Morris bascule G4→ML4 sur 3200 (stop G4 process only ; preserve artefacts).
2. Réserve ENV-01 A cookies host.
3. OPENAI placeholder — Nora LIVE incomplete.
4. Product remote tip still 51b0c3b6 — push Product = GO distinct.
5. Multi-repo / merge REAL / listGitRefs élargi = hors mandat.
6. Shell contamination risk : STUDIO_GITHUB_ALLOW_MUTATIONS héritée du shell DEV — strip at start.

## 15. Verdict unique

**ML4 RECETTE ENVIRONMENT — STAGED AND VERIFIED — AWAITING MORRIS G4 SWITCH GO.**

## 16. ML4 — USER RECETTE HANDOVER (factuel)

### Vision produit ML1–ML4
- ML1 : socle Studio Next (auth, projets, conversation, documents).
- ML2 : knowledge / intégrité documentaire.
- ML3 : pilotage et décisions humaines.
- ML4 : collaboration Git gouvernée (D9/D7/D8) — connecter GitHub App, lire sandbox, préparer/publier documentaire sous mandat, preuve COMPLETED fail-closed.

### Capacité utilisateur ML4 attendue (après bascule + USER RECETTE)
Connexion App RECETTE distincte de DEV ; lecture chantiers360 ; parcours publication selon GO ; merge REAL hard-blocked ; cookies via profil navigateur dédié.

### SHA/tree/build préparés
- source_sha: 974b0030a94469bef05496151792e8c35a9a83e9
- tree: 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357
- build_id: RzpCuGMK6SnwfucphK7Qa
- worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030

### URL / environnement effectivement servis
- Non servi sur 3200. Cible http://127.0.0.1:3200. Actuellement G4 U2HrgAwriuzf6f1YI0rRK / 29535d07.

### Identité GitHub RECETTE (sans secrets)
- App sfia-studio-next-recette ID 5677465 / install 180092114 / mcleland147/chantiers360 / callback :3200/.../callback

### Statut DEV / G4 / RECETTE ML4
- DEV : worktree ML4 + tip remote 51b0c3b6 ; local +1 commit 974b0030
- G4 : servi 3200 — à préserver jusqu'au GO
- RECETTE ML4 : STAGED (DB+build+env+App READ OK)

### DB
- 5434/sfia_next_recette_ml4 schema 001→012 ; données vides fraîches

### Limites REAL / fake
- Installation READ REAL PROVEN
- User OAuth NOT RUN
- Mutations unset / merge blocked
- SCRIPTED interdit hors DEV tests

### Matrice ML4-AT
Voir matrice-acceptation.md §19–§24 ; publication integrity + REC-01 + lane App.

### Scénarios Morris (nouveau chat, après bascule)
1. Login Studio RECETTE (profil navigateur dédié)
2. Paramètres → Intégrations → OAuth App RECETTE
3. Lecture repo sandbox
4. Parcours publication selon flags autorisés
5. STOP si App DEV apparaît, mauvais SHA/build, ou mutation hors GO

### Réserves / STOP
- Mauvais App ID ; port/G4 collision ; cookie mix ; mutations flag hérité ; OpenAI absent pour Nora LIVE

### Gates ouverts
- G4 switch GO ; push Product GO ; USER RECETTE ; PR/merge ; STABLE ; ML5

### Prochaine capacité ML5
Exécution Cursor gouvernée (après sortie ML4) — hors scope.

## 17. Handoff L3

Branche sfia/review-handoff ; path sfia-review-handoff/latest-chatgpt-review.md ; parent attendu b4ba06b7d0c29054447ade20d7883b823ccb0ea6 ; publish-in-cycle.
