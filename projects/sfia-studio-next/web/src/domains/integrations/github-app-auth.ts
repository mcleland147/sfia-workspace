import { createPrivateKey } from "node:crypto";
import { SignJWT, importPKCS8 } from "jose";
import { StudioError } from "@/lib/http-errors";
import {
  type GitHubAppLoadedCredentials,
  parseFullName,
} from "./github-app-config";

export type GitHubAppIdentity = {
  id: number;
  slug: string | null;
  name: string | null;
  ownerLogin: string | null;
};

export type GitHubInstallationIdentity = {
  id: number;
  accountLogin: string | null;
  accountType: string | null;
  repositorySelection: string | null;
  permissions: Record<string, string>;
  suspendedAt: string | null;
};

export type InstallationAccessToken = {
  /** Ephemeral — never log or persist. */
  token: string;
  expiresAt: string;
  permissions: Record<string, string>;
  repositorySelection: string | null;
  repositories: Array<{ id: number; fullName: string; private: boolean }>;
};

export type GitHubFetch = typeof fetch;

const API = "https://api.github.com";

function mapGitHubHttpError(status: number, bodyText: string): StudioError {
  const snippet = bodyText.slice(0, 180).replace(/\s+/g, " ");
  if (status === 401 || status === 403) {
    return new StudioError("ACCESS_DENIED", `GitHub FORBIDDEN/UNAUTHORIZED (${status})`, {
      httpStatus: status === 401 ? 401 : 403,
    });
  }
  if (status === 404) {
    return new StudioError("NOT_FOUND", `GitHub ressource introuvable (${status})`, {
      httpStatus: 404,
    });
  }
  if (status === 408 || status >= 500) {
    return new StudioError(
      "DEPENDENCY_UNAVAILABLE",
      `GitHub TIMEOUT/UNAVAILABLE (${status}) ${snippet ? "— " + snippet : ""}`.trim(),
      { httpStatus: 503 },
    );
  }
  return new StudioError(
    "AMBIGUOUS",
    `GitHub réponse non qualificable (${status})`,
    { httpStatus: 409 },
  );
}

async function ghJson<T>(
  fetchImpl: GitHubFetch,
  path: string,
  init: RequestInit & { timeoutMs?: number },
): Promise<T> {
  const timeoutMs = init.timeoutMs ?? 15_000;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetchImpl(`${API}${path}`, {
      ...init,
      signal: ctrl.signal,
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "sfia-studio-next-dev-d9",
        ...(init.headers ?? {}),
      },
    });
    const text = await res.text();
    if (!res.ok) throw mapGitHubHttpError(res.status, text);
    if (!text) return {} as T;
    try {
      return JSON.parse(text) as T;
    } catch {
      throw new StudioError("AMBIGUOUS", "GitHub réponse JSON illisible", { httpStatus: 409 });
    }
  } catch (e) {
    if (e instanceof StudioError) throw e;
    const msg = e instanceof Error ? e.message : String(e);
    if (/abort|timeout|ETIMEDOUT|ECONNRESET|ENOTFOUND/i.test(msg)) {
      throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub TIMEOUT", { httpStatus: 503, cause: e });
    }
    throw new StudioError("DEPENDENCY_UNAVAILABLE", "GitHub appel échoué", {
      httpStatus: 503,
      cause: e,
    });
  } finally {
    clearTimeout(t);
  }
}

/** Convert PEM to PKCS8 for jose when needed. */
async function importAppPrivateKey(pem: string) {
  try {
    return await importPKCS8(pem, "RS256");
  } catch {
    // Some GitHub PEMs are PKCS#1 — convert via node crypto.
    try {
      const keyObject = createPrivateKey(pem);
      const pkcs8 = keyObject.export({ type: "pkcs8", format: "pem" }).toString();
      return await importPKCS8(pkcs8, "RS256");
    } catch (e) {
      throw new StudioError("INVALID_REQUEST", "Clé privée GitHub App invalide (import)", {
        httpStatus: 400,
        cause: e,
      });
    }
  }
}

/** Create a short-lived App JWT. Never log the result. */
export async function createGitHubAppJwt(
  appId: string,
  privateKeyPem: string,
  nowSec = Math.floor(Date.now() / 1000),
): Promise<string> {
  const key = await importAppPrivateKey(privateKeyPem);
  // GitHub allows max 10 minutes; clock skew buffer on iat.
  const iat = nowSec - 60;
  const exp = nowSec + 9 * 60;
  return new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .setIssuer(appId)
    .sign(key);
}

export async function fetchGitHubAppIdentity(
  jwt: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<GitHubAppIdentity> {
  const raw = await ghJson<{
    id: number;
    slug?: string;
    name?: string;
    owner?: { login?: string };
  }>(fetchImpl, "/app", {
    method: "GET",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return {
    id: raw.id,
    slug: raw.slug ?? null,
    name: raw.name ?? null,
    ownerLogin: raw.owner?.login ?? null,
  };
}

export async function fetchGitHubInstallationIdentity(
  jwt: string,
  installationId: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<GitHubInstallationIdentity> {
  const raw = await ghJson<{
    id: number;
    account?: { login?: string; type?: string };
    repository_selection?: string;
    permissions?: Record<string, string>;
    suspended_at?: string | null;
  }>(fetchImpl, `/app/installations/${installationId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return {
    id: raw.id,
    accountLogin: raw.account?.login ?? null,
    accountType: raw.account?.type ?? null,
    repositorySelection: raw.repository_selection ?? null,
    permissions: raw.permissions ?? {},
    suspendedAt: raw.suspended_at ?? null,
  };
}

/**
 * Mint an ephemeral installation token restricted to the sandbox repository
 * and read-only permission subset.
 */
export async function createInstallationAccessToken(
  creds: GitHubAppLoadedCredentials,
  jwt: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<InstallationAccessToken> {
  const { name } = parseFullName(creds.allowedFullName);
  const raw = await ghJson<{
    token: string;
    expires_at: string;
    permissions?: Record<string, string>;
    repository_selection?: string;
    repositories?: Array<{ id: number; full_name: string; private: boolean }>;
  }>(fetchImpl, `/app/installations/${creds.installationId}/access_tokens`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      repositories: [name],
      permissions: {
        contents: "read",
        metadata: "read",
        pull_requests: "read",
      },
    }),
  });

  if (!raw.token || !raw.expires_at) {
    throw new StudioError("AMBIGUOUS", "Jeton d'installation GitHub incomplet", { httpStatus: 409 });
  }

  const permissions = raw.permissions ?? {};
  for (const [k, v] of Object.entries(permissions)) {
    if (v === "write" || v === "admin") {
      throw new StudioError(
        "ACCESS_DENIED",
        `Jeton d'installation non restreint en lecture (${k}=${v})`,
        { httpStatus: 403 },
      );
    }
  }

  return {
    token: raw.token,
    expiresAt: raw.expires_at,
    permissions,
    repositorySelection: raw.repository_selection ?? null,
    repositories: (raw.repositories ?? []).map((r) => ({
      id: r.id,
      fullName: r.full_name,
      private: Boolean(r.private),
    })),
  };
}

export async function listInstallationRepositories(
  installationToken: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<Array<{ id: number; fullName: string; defaultBranch: string; private: boolean }>> {
  const raw = await ghJson<{
    repositories: Array<{
      id: number;
      full_name: string;
      default_branch: string;
      private: boolean;
    }>;
  }>(fetchImpl, "/installation/repositories?per_page=100", {
    method: "GET",
    headers: { Authorization: `Bearer ${installationToken}` },
  });
  return (raw.repositories ?? []).map((r) => ({
    id: r.id,
    fullName: r.full_name,
    defaultBranch: r.default_branch,
    private: Boolean(r.private),
  }));
}

export async function fetchRepositoryMetadata(
  installationToken: string,
  fullName: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<{ id: number; fullName: string; defaultBranch: string; private: boolean }> {
  const { owner, name } = parseFullName(fullName);
  const raw = await ghJson<{
    id: number;
    full_name: string;
    default_branch: string;
    private: boolean;
  }>(fetchImpl, `/repos/${owner}/${name}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${installationToken}` },
  });
  return {
    id: raw.id,
    fullName: raw.full_name,
    defaultBranch: raw.default_branch,
    private: Boolean(raw.private),
  };
}

export async function fetchRefSha(
  installationToken: string,
  fullName: string,
  ref: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<string> {
  const { owner, name } = parseFullName(fullName);
  const refPath = ref.startsWith("heads/") || ref.startsWith("tags/") ? ref : `heads/${ref}`;
  const raw = await ghJson<{ object?: { sha?: string }; sha?: string }>(
    fetchImpl,
    `/repos/${owner}/${name}/git/ref/${refPath}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${installationToken}` },
    },
  );
  const sha = raw.object?.sha ?? raw.sha;
  if (!sha || !/^[0-9a-f]{40}$/i.test(sha)) {
    throw new StudioError("AMBIGUOUS", "SHA de ref GitHub illisible", { httpStatus: 409 });
  }
  return sha;
}

export async function fetchFileContentUtf8(
  installationToken: string,
  fullName: string,
  path: string,
  ref: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<{ path: string; ref: string; sha: string; content: string }> {
  const { owner, name } = parseFullName(fullName);
  const q = new URLSearchParams({ ref });
  const raw = await ghJson<{
    type?: string;
    encoding?: string;
    content?: string;
    sha?: string;
    path?: string;
  }>(fetchImpl, `/repos/${owner}/${name}/contents/${path.replace(/^\/+/, "")}?${q}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${installationToken}` },
  });
  if (raw.type !== "file" || raw.encoding !== "base64" || !raw.content || !raw.sha) {
    throw new StudioError("AMBIGUOUS", "Contenu fichier GitHub non qualificable", { httpStatus: 409 });
  }
  const content = Buffer.from(raw.content.replace(/\n/g, ""), "base64").toString("utf8");
  return { path: raw.path ?? path, ref, sha: raw.sha, content };
}

/** Create a git ref (branch). Caller must ensure branch ≠ protected base. */
export async function createGitRef(input: {
  token: string;
  fullName: string;
  branch: string;
  fromSha: string;
  fetchImpl?: GitHubFetch;
}): Promise<{ ref: string; sha: string }> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const branch = input.branch.replace(/^refs\/heads\//, "");
  if (!branch || branch === "main" || branch === "master") {
    throw new StudioError("ACCESS_DENIED", "Création de branche interdite sur main/master", {
      httpStatus: 403,
    });
  }
  if (!/^[0-9a-f]{40}$/i.test(input.fromSha)) {
    throw new StudioError("INVALID_REQUEST", "fromSha invalide", { httpStatus: 400 });
  }
  const raw = await ghJson<{ ref?: string; object?: { sha?: string } }>(
    fetchImpl,
    `/repos/${owner}/${name}/git/refs`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${input.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ref: `refs/heads/${branch}`,
        sha: input.fromSha,
      }),
    },
  );
  const sha = raw.object?.sha ?? input.fromSha;
  return { ref: raw.ref ?? `refs/heads/${branch}`, sha };
}

/**
 * Create a new file on a branch (fail if path already exists).
 * Does not update existing files — no overwrite.
 */
export async function createFileContents(input: {
  token: string;
  fullName: string;
  path: string;
  branch: string;
  message: string;
  contentUtf8: string;
  fetchImpl?: GitHubFetch;
}): Promise<{ commitSha: string; contentSha: string }> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const branch = input.branch.replace(/^refs\/heads\//, "");
  if (!branch || branch === "main" || branch === "master") {
    throw new StudioError("ACCESS_DENIED", "Écriture directe sur main/master interdite", {
      httpStatus: 403,
    });
  }
  const path = input.path.replace(/^\/+/, "");
  // Preflight: path must not exist on branch.
  const q = new URLSearchParams({ ref: branch });
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15_000);
  try {
    const probe = await fetchImpl(
      `${API}/repos/${owner}/${name}/contents/${path}?${q}`,
      {
        method: "GET",
        signal: ctrl.signal,
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "sfia-studio-next-dev-d9",
          Authorization: `Bearer ${input.token}`,
        },
      },
    );
    if (probe.status === 200) {
      throw new StudioError(
        "CONFLICT",
        `Fichier cible déjà présent — overwrite interdit (${path})`,
        { httpStatus: 409 },
      );
    }
    if (probe.status !== 404) {
      const text = await probe.text();
      throw mapGitHubHttpError(probe.status, text);
    }
  } finally {
    clearTimeout(t);
  }

  const raw = await ghJson<{
    content?: { sha?: string };
    commit?: { sha?: string };
  }>(fetchImpl, `/repos/${owner}/${name}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${input.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: input.message,
      content: Buffer.from(input.contentUtf8, "utf8").toString("base64"),
      branch,
    }),
  });
  const commitSha = raw.commit?.sha;
  const contentSha = raw.content?.sha;
  if (!commitSha || !/^[0-9a-f]{40}$/i.test(commitSha)) {
    throw new StudioError("AMBIGUOUS", "Commit SHA GitHub illisible après put contents", {
      httpStatus: 409,
    });
  }
  return { commitSha, contentSha: contentSha ?? commitSha };
}

export async function createPullRequestRemote(input: {
  token: string;
  fullName: string;
  title: string;
  head: string;
  base: string;
  body?: string;
  fetchImpl?: GitHubFetch;
}): Promise<{
  number: number;
  title: string;
  state: string;
  htmlUrl: string;
  headSha: string;
  baseSha: string;
  headRef: string;
  baseRef: string;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const head = input.head.replace(/^refs\/heads\//, "");
  const base = input.base.replace(/^refs\/heads\//, "");
  if (!head || head === "main" || head === "master") {
    throw new StudioError("ACCESS_DENIED", "PR head ne peut pas être main/master", {
      httpStatus: 403,
    });
  }
  const raw = await ghJson<{
    number: number;
    title: string;
    state: string;
    html_url: string;
    head?: { sha?: string; ref?: string };
    base?: { sha?: string; ref?: string };
  }>(fetchImpl, `/repos/${owner}/${name}/pulls`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${input.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: input.title,
      head,
      base,
      body: input.body ?? "",
    }),
  });
  return {
    number: raw.number,
    title: raw.title,
    state: raw.state,
    htmlUrl: raw.html_url,
    headSha: raw.head?.sha ?? "",
    baseSha: raw.base?.sha ?? "",
    headRef: raw.head?.ref ?? head,
    baseRef: raw.base?.ref ?? base,
  };
}

export async function listPullRequestsRemote(input: {
  token: string;
  fullName: string;
  head: string;
  base: string;
  state?: "open" | "closed" | "all";
  fetchImpl?: GitHubFetch;
}): Promise<
  Array<{
    number: number;
    title: string;
    state: string;
    htmlUrl: string;
    headSha: string;
    baseSha: string;
    headRef: string;
    baseRef: string;
    body: string;
  }>
> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const headShort = input.head.replace(/^refs\/heads\//, "");
  const baseShort = input.base.replace(/^refs\/heads\//, "");
  // GitHub expects head as owner:branch for cross-fork; same-repo uses owner:branch too.
  const q = new URLSearchParams({
    state: input.state ?? "open",
    head: `${owner}:${headShort}`,
    base: baseShort,
    per_page: "10",
  });
  const raw = await ghJson<
    Array<{
      number: number;
      title: string;
      state: string;
      html_url: string;
      body?: string | null;
      head?: { sha?: string; ref?: string };
      base?: { sha?: string; ref?: string };
    }>
  >(fetchImpl, `/repos/${owner}/${name}/pulls?${q}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  return (raw ?? []).map((p) => ({
    number: p.number,
    title: p.title,
    state: p.state,
    htmlUrl: p.html_url,
    headSha: p.head?.sha ?? "",
    baseSha: p.base?.sha ?? "",
    headRef: p.head?.ref ?? headShort,
    baseRef: p.base?.ref ?? baseShort,
    body: p.body ?? "",
  }));
}

export async function fetchPullRequestRemote(input: {
  token: string;
  fullName: string;
  prNumber: number;
  fetchImpl?: GitHubFetch;
}): Promise<{
  number: number;
  title: string;
  state: string;
  htmlUrl: string;
  headSha: string;
  baseSha: string;
  headRef: string;
  baseRef: string;
  merged: boolean;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const raw = await ghJson<{
    number: number;
    title: string;
    state: string;
    html_url: string;
    merged?: boolean;
    head?: { sha?: string; ref?: string };
    base?: { sha?: string; ref?: string };
  }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  return {
    number: raw.number,
    title: raw.title,
    state: raw.state,
    htmlUrl: raw.html_url,
    headSha: raw.head?.sha ?? "",
    baseSha: raw.base?.sha ?? "",
    headRef: raw.head?.ref ?? "",
    baseRef: raw.base?.ref ?? "",
    merged: Boolean(raw.merged),
  };
}

/** Orchestrate App JWT → identity → installation → restricted token (no mutations). */
export async function authenticateInstallationReadOnly(
  creds: GitHubAppLoadedCredentials,
  fetchImpl: GitHubFetch = fetch,
): Promise<{
  app: GitHubAppIdentity;
  installation: GitHubInstallationIdentity;
  access: InstallationAccessToken;
}> {
  const jwt = await createGitHubAppJwt(creds.appId, creds.privateKeyPem);
  const app = await fetchGitHubAppIdentity(jwt, fetchImpl);
  if (String(app.id) !== creds.appId) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Identité App distante divergente (attendu ${creds.appId})`,
      { httpStatus: 403 },
    );
  }

  const installation = await fetchGitHubInstallationIdentity(
    jwt,
    creds.installationId,
    fetchImpl,
  );
  if (String(installation.id) !== creds.installationId) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Installation distante divergente (attendu ${creds.installationId})`,
      { httpStatus: 403 },
    );
  }
  if (installation.suspendedAt) {
    throw new StudioError("ACCESS_DENIED", "Installation GitHub App suspendue", { httpStatus: 403 });
  }
  if (
    installation.accountLogin &&
    installation.accountLogin.toLowerCase() !== creds.expectedOwner.toLowerCase()
  ) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Owner d'installation inattendu (attendu ${creds.expectedOwner})`,
      { httpStatus: 403 },
    );
  }

  const access = await createInstallationAccessToken(creds, jwt, fetchImpl);
  const allowed = access.repositories.some(
    (r) => r.fullName.toLowerCase() === creds.allowedFullName.toLowerCase(),
  );
  // GitHub may omit repositories array on some responses — verify via list endpoint next.
  if (access.repositories.length > 0 && !allowed) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Dépôt ${creds.allowedFullName} absent du jeton restreint`,
      { httpStatus: 403 },
    );
  }

  return { app, installation, access };
}
