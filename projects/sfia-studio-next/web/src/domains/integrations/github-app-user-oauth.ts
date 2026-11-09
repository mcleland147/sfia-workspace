import { createHash, randomBytes } from "node:crypto";
import { StudioError } from "@/lib/http-errors";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  GITHUB_APP_EXPECTED_OWNER,
  GITHUB_APP_ALLOWED_FULL_NAME,
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
  return {
    clientId: requireEnv("GITHUB_APP_CLIENT_ID"),
    clientSecret: requireEnv("GITHUB_APP_CLIENT_SECRET"),
    callbackUrl: requireEnv("GITHUB_APP_CALLBACK_URL"),
    appId: process.env.GITHUB_APP_ID?.trim() || GITHUB_APP_EXPECTED_APP_ID,
    expectedInstallationId:
      process.env.GITHUB_APP_INSTALLATION_ID?.trim() || GITHUB_APP_EXPECTED_INSTALLATION_ID,
    expectedOwner: process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || GITHUB_APP_EXPECTED_OWNER,
    allowedFullName: process.env.GITHUB_APP_ALLOWED_REPO?.trim() || GITHUB_APP_ALLOWED_FULL_NAME,
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
