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

/** Studio UI bound — truncation happens here with an honest incompleteness flag (E08-S03). */
export const FETCH_MATCHING_REFS_UI_BOUND = 40;

export type FetchMatchingRefsResult = {
  refs: Array<{ name: string; sha: string }>;
  /** True when more matching refs were observed than returned after the UI bound. */
  incompleteCoverage: boolean;
  matchedCount: number;
};

/**
 * List matching git refs (branches by default). Never invents refs.
 * GitHub `GET .../git/matching-refs/{ref}` returns matching refs; Studio applies a UI bound
 * and signals incompleteness when matchedCount exceeds that bound.
 * @see GET /repos/{owner}/{repo}/git/matching-refs/{ref}
 */
export async function fetchMatchingRefs(
  installationToken: string,
  fullName: string,
  refPrefix: string | undefined,
  fetchImpl: GitHubFetch = fetch,
): Promise<FetchMatchingRefsResult> {
  const { owner, name } = parseFullName(fullName);
  const rawPrefix = (refPrefix ?? "heads/").replace(/^refs\//, "");
  const prefix = rawPrefix.startsWith("heads/") || rawPrefix.startsWith("tags/")
    ? rawPrefix
    : `heads/${rawPrefix}`;
  const raw = await ghJson<Array<{ ref?: string; object?: { sha?: string } }>>(
    fetchImpl,
    `/repos/${owner}/${name}/git/matching-refs/${prefix}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${installationToken}` },
    },
  );
  if (!Array.isArray(raw)) {
    throw new StudioError("AMBIGUOUS", "Liste de refs GitHub illisible", { httpStatus: 409 });
  }
  const mapped = raw
    .map((r) => {
      const refName = (r.ref ?? "").replace(/^refs\/heads\//, "").replace(/^refs\//, "");
      const sha = r.object?.sha ?? "";
      return { name: refName, sha };
    })
    .filter((r) => r.name && /^[0-9a-f]{40}$/i.test(r.sha));
  const matchedCount = mapped.length;
  const incompleteCoverage = matchedCount > FETCH_MATCHING_REFS_UI_BOUND;
  return {
    refs: mapped.slice(0, FETCH_MATCHING_REFS_UI_BOUND),
    incompleteCoverage,
    matchedCount,
  };
}

const MAX_DIRECTORY_ENTRIES = 200;

export type GitHubDirectoryEntry = {
  name: string;
  path: string;
  type: "file" | "dir";
  sha: string;
  size?: number;
};

type GitHubContentsItem = {
  name?: string;
  path?: string;
  sha?: string;
  size?: number;
  type?: string;
};

function contentsApiPath(fullName: string, path: string): string {
  const { owner, name } = parseFullName(fullName);
  const trimmed = path.replace(/^\/+/, "").replace(/\/+$/, "");
  const encoded = trimmed
    ? trimmed.split("/").filter(Boolean).map((seg) => encodeURIComponent(seg)).join("/")
    : "";
  const segment = encoded ? `/${encoded}` : "";
  return `/repos/${owner}/${name}/contents${segment}`;
}

/** List immediate children of a directory via GitHub Contents API (non-recursive). */
export async function fetchDirectoryListing(
  installationToken: string,
  fullName: string,
  path: string,
  ref: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<GitHubDirectoryEntry[]> {
  const q = new URLSearchParams({ ref });
  const raw = await ghJson<GitHubContentsItem | GitHubContentsItem[]>(
    fetchImpl,
    `${contentsApiPath(fullName, path)}?${q}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${installationToken}` },
    },
  );
  if (Array.isArray(raw)) {
    const entries: GitHubDirectoryEntry[] = [];
    for (const item of raw) {
      if (!item.name || !item.path || !item.sha) continue;
      if (item.type === "file") {
        entries.push({
          name: item.name,
          path: item.path,
          type: "file",
          sha: item.sha,
          size: typeof item.size === "number" ? item.size : undefined,
        });
      } else if (item.type === "dir") {
        entries.push({
          name: item.name,
          path: item.path,
          type: "dir",
          sha: item.sha,
        });
      }
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));
    if (entries.length > MAX_DIRECTORY_ENTRIES) {
      throw new StudioError(
        "AMBIGUOUS",
        `Répertoire trop volumineux (${entries.length} entrées, max ${MAX_DIRECTORY_ENTRIES})`,
        { httpStatus: 409 },
      );
    }
    return entries;
  }
  if (raw.type === "file") {
    throw new StudioError(
      "INVALID_REQUEST",
      `NOT_A_DIRECTORY: path=${raw.path ?? path} est un fichier, pas un répertoire`,
      { httpStatus: 400 },
    );
  }
  throw new StudioError("AMBIGUOUS", "Contenu GitHub non qualificable comme répertoire", {
    httpStatus: 409,
  });
}

export async function fetchFileContentUtf8(
  installationToken: string,
  fullName: string,
  path: string,
  ref: string,
  fetchImpl: GitHubFetch = fetch,
): Promise<{
  path: string;
  ref: string;
  sha: string;
  content: string;
  encoding: "utf-8" | "binary";
  contentKind: "markdown" | "text" | "binary" | "too_large";
}> {
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
  const buf = Buffer.from(raw.content.replace(/\n/g, ""), "base64");
  const MAX_READ_BYTES = 512 * 1024;
  if (buf.length > MAX_READ_BYTES) {
    return {
      path: raw.path ?? path,
      ref,
      sha: raw.sha,
      content: "",
      encoding: "binary" as const,
      contentKind: "too_large" as const,
    };
  }
  // NUL or high ratio of non-text bytes ⇒ binary — never decode as Markdown/UTF-8 prose.
  if (buf.includes(0)) {
    return {
      path: raw.path ?? path,
      ref,
      sha: raw.sha,
      content: "",
      encoding: "binary" as const,
      contentKind: "binary" as const,
    };
  }
  const sample = buf.subarray(0, Math.min(buf.length, 8192));
  let weird = 0;
  for (const b of sample) {
    if (b < 7 || (b > 13 && b < 32)) weird += 1;
  }
  if (sample.length > 0 && weird / sample.length > 0.3) {
    return {
      path: raw.path ?? path,
      ref,
      sha: raw.sha,
      content: "",
      encoding: "binary" as const,
      contentKind: "binary" as const,
    };
  }
  const content = buf.toString("utf8");
  const contentKind = /\.md$/i.test(raw.path ?? path) ? ("markdown" as const) : ("text" as const);
  return { path: raw.path ?? path, ref, sha: raw.sha, content, encoding: "utf-8" as const, contentKind };
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
  /** Optional — when omitted, lists repo PRs by state only (bounded). */
  head?: string;
  base?: string;
  state?: "open" | "closed" | "all";
  perPage?: number;
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
  const perPage = Math.max(1, Math.min(input.perPage ?? 10, 30));
  const q = new URLSearchParams({
    state: input.state ?? "open",
    per_page: String(perPage),
  });
  // GitHub expects head as owner:branch for cross-fork; same-repo uses owner:branch too.
  if (input.head?.trim()) {
    const headShort = input.head.replace(/^refs\/heads\//, "");
    q.set("head", `${owner}:${headShort}`);
  }
  if (input.base?.trim()) {
    const baseShort = input.base.replace(/^refs\/heads\//, "");
    q.set("base", baseShort);
  }
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
  const headFallback = input.head?.replace(/^refs\/heads\//, "") ?? "";
  const baseFallback = input.base?.replace(/^refs\/heads\//, "") ?? "";
  return (raw ?? []).map((p) => ({
    number: p.number,
    title: p.title,
    state: p.state,
    htmlUrl: p.html_url,
    headSha: p.head?.sha ?? "",
    baseSha: p.base?.sha ?? "",
    headRef: p.head?.ref ?? headFallback,
    baseRef: p.base?.ref ?? baseFallback,
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
  /** Observed merge commit SHA when GitHub reports one — never invent from head. */
  mergeCommitSha: string | null;
  mergeable: boolean | null;
  mergeableState: string | null;
  commits: number | null;
  changedFiles: number | null;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  const raw = await ghJson<{
    number: number;
    title: string;
    state: string;
    html_url: string;
    merged?: boolean;
    mergeable?: boolean | null;
    mergeable_state?: string | null;
    commits?: number;
    changed_files?: number;
    merge_commit_sha?: string | null;
    head?: { sha?: string; ref?: string };
    base?: { sha?: string; ref?: string };
  }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  const mergeCommitSha =
    typeof raw.merge_commit_sha === "string" && /^[0-9a-f]{40}$/i.test(raw.merge_commit_sha)
      ? raw.merge_commit_sha
      : null;
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
    mergeCommitSha,
    mergeable: typeof raw.mergeable === "boolean" ? raw.mergeable : null,
    mergeableState:
      typeof raw.mergeable_state === "string" && raw.mergeable_state.trim()
        ? raw.mergeable_state.trim()
        : null,
    commits: typeof raw.commits === "number" ? raw.commits : null,
    changedFiles: typeof raw.changed_files === "number" ? raw.changed_files : null,
  };
}

/** Bounded PR changed-files listing (READ). Never authorizes merge. */
export async function listPullRequestFilesRemote(input: {
  token: string;
  fullName: string;
  prNumber: number;
  /** Hard cap — incompleteCoverage when truncated. */
  bound?: number;
  fetchImpl?: GitHubFetch;
}): Promise<{
  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
  incompleteCoverage: boolean;
  matchedCount: number;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const bound = Math.max(1, Math.min(input.bound ?? 40, 100));
  const { owner, name } = parseFullName(input.fullName);
  const raw = await ghJson<
    Array<{
      filename?: string;
      status?: string;
      additions?: number;
      deletions?: number;
    }>
  >(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}/files?per_page=${bound + 1}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  const matchedCount = Array.isArray(raw) ? raw.length : 0;
  const slice = (Array.isArray(raw) ? raw : []).slice(0, bound);
  return {
    files: slice.map((f) => ({
      filename: f.filename ?? "",
      status: f.status ?? "unknown",
      additions: typeof f.additions === "number" ? f.additions : 0,
      deletions: typeof f.deletions === "number" ? f.deletions : 0,
    })),
    incompleteCoverage: matchedCount > bound,
    matchedCount,
  };
}

/** READ: single commit metadata + bounded file list. No list_commits crawl. */
export async function fetchCommitRemote(input: {
  token: string;
  fullName: string;
  /** Commit SHA (preferred) or resolvable ref. */
  ref: string;
  fileBound?: number;
  fetchImpl?: GitHubFetch;
}): Promise<{
  sha: string;
  message: string;
  authorName: string | null;
  authorEmail: string | null;
  authorDate: string | null;
  committerName: string | null;
  committerEmail: string | null;
  committerDate: string | null;
  parents: string[];
  htmlUrl: string;
  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
  incompleteCoverage: boolean;
  matchedFileCount: number;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const bound = Math.max(1, Math.min(input.fileBound ?? 40, 100));
  const { owner, name } = parseFullName(input.fullName);
  const ref = encodeURIComponent(input.ref.replace(/^refs\/heads\//, ""));
  const raw = await ghJson<{
    sha?: string;
    html_url?: string;
    commit?: {
      message?: string;
      author?: { name?: string; email?: string; date?: string };
      committer?: { name?: string; email?: string; date?: string };
    };
    parents?: Array<{ sha?: string }>;
    files?: Array<{
      filename?: string;
      status?: string;
      additions?: number;
      deletions?: number;
    }>;
  }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  const filesRaw = Array.isArray(raw.files) ? raw.files : [];
  const matchedFileCount = filesRaw.length;
  const files = filesRaw.slice(0, bound).map((f) => ({
    filename: f.filename ?? "",
    status: f.status ?? "unknown",
    additions: typeof f.additions === "number" ? f.additions : 0,
    deletions: typeof f.deletions === "number" ? f.deletions : 0,
  }));
  return {
    sha: (raw.sha ?? "").toLowerCase(),
    message: raw.commit?.message ?? "",
    authorName: raw.commit?.author?.name ?? null,
    authorEmail: raw.commit?.author?.email ?? null,
    authorDate: raw.commit?.author?.date ?? null,
    committerName: raw.commit?.committer?.name ?? null,
    committerEmail: raw.commit?.committer?.email ?? null,
    committerDate: raw.commit?.committer?.date ?? null,
    parents: (raw.parents ?? []).map((p) => (p.sha ?? "").toLowerCase()).filter(Boolean),
    htmlUrl: raw.html_url ?? "",
    files,
    incompleteCoverage: matchedFileCount > bound,
    matchedFileCount,
  };
}

/**
 * READ: bounded compare base...head (ahead/behind + file statuses).
 * No patch hunks — filenames/status only. Not a generic list_commits crawl.
 */
export async function compareCommitsRemote(input: {
  token: string;
  fullName: string;
  base: string;
  head: string;
  fileBound?: number;
  fetchImpl?: GitHubFetch;
}): Promise<{
  baseSha: string;
  headSha: string;
  status: string;
  aheadBy: number;
  behindBy: number;
  totalCommits: number;
  files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
  incompleteCoverage: boolean;
  matchedFileCount: number;
  htmlUrl: string;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const bound = Math.max(1, Math.min(input.fileBound ?? 40, 100));
  const { owner, name } = parseFullName(input.fullName);
  const base = encodeURIComponent(input.base.replace(/^refs\/heads\//, ""));
  const head = encodeURIComponent(input.head.replace(/^refs\/heads\//, ""));
  const raw = await ghJson<{
    status?: string;
    ahead_by?: number;
    behind_by?: number;
    total_commits?: number;
    html_url?: string;
    base_commit?: { sha?: string };
    merge_base_commit?: { sha?: string };
    commits?: Array<{ sha?: string }>;
    files?: Array<{
      filename?: string;
      status?: string;
      additions?: number;
      deletions?: number;
    }>;
  }>(fetchImpl, `/repos/${owner}/${name}/compare/${base}...${head}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${input.token}` },
  });
  const filesRaw = Array.isArray(raw.files) ? raw.files : [];
  const matchedFileCount = filesRaw.length;
  const commits = Array.isArray(raw.commits) ? raw.commits : [];
  const tip = commits.length > 0 ? commits[commits.length - 1]?.sha ?? "" : "";
  return {
    baseSha: (raw.base_commit?.sha ?? raw.merge_base_commit?.sha ?? "").toLowerCase(),
    headSha: tip.toLowerCase(),
    status: raw.status ?? "unknown",
    aheadBy: typeof raw.ahead_by === "number" ? raw.ahead_by : 0,
    behindBy: typeof raw.behind_by === "number" ? raw.behind_by : 0,
    totalCommits: typeof raw.total_commits === "number" ? raw.total_commits : 0,
    files: filesRaw.slice(0, bound).map((f) => ({
      filename: f.filename ?? "",
      status: f.status ?? "unknown",
      additions: typeof f.additions === "number" ? f.additions : 0,
      deletions: typeof f.deletions === "number" ? f.deletions : 0,
    })),
    incompleteCoverage: matchedFileCount > bound,
    matchedFileCount,
    htmlUrl: raw.html_url ?? "",
  };
}

/**
 * READ: combined commit status + bounded check-runs summary.
 * Never authorizes merge. Protection/ruleset details may be DENIED by permission.
 */
export async function fetchCommitStatusRemote(input: {
  token: string;
  fullName: string;
  ref: string;
  checkBound?: number;
  fetchImpl?: GitHubFetch;
}): Promise<{
  combinedState: string | null;
  combinedStatuses: Array<{ context: string; state: string; description: string | null }>;
  checkRuns: Array<{
    name: string;
    status: string;
    conclusion: string | null;
    htmlUrl: string | null;
  }>;
  incompleteCoverage: boolean;
  matchedCheckCount: number;
  statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE";
  statusNote: string;
}> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const bound = Math.max(1, Math.min(input.checkBound ?? 30, 60));
  const { owner, name } = parseFullName(input.fullName);
  const ref = encodeURIComponent(input.ref.replace(/^refs\/heads\//, ""));

  let combinedState: string | null = null;
  let combinedStatuses: Array<{ context: string; state: string; description: string | null }> = [];
  let statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE" = "COMPLETE";
  let statusNote = "Combined status + check-runs observés (bornés).";

  try {
    const status = await ghJson<{
      state?: string;
      statuses?: Array<{ context?: string; state?: string; description?: string | null }>;
    }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}/status`, {
      method: "GET",
      headers: { Authorization: `Bearer ${input.token}` },
    });
    combinedState = status.state ?? null;
    combinedStatuses = (status.statuses ?? []).slice(0, bound).map((s) => ({
      context: s.context ?? "",
      state: s.state ?? "unknown",
      description: s.description ?? null,
    }));
  } catch (e) {
    const err = e instanceof StudioError ? e : null;
    if (err?.code === "ACCESS_DENIED") {
      statusCoverage = "DENIED";
      statusNote = "Combined status inaccessible (permission) — ne pas inventer success.";
    } else if (err?.code === "NOT_FOUND") {
      statusCoverage = "PARTIAL";
      statusNote = "Combined status introuvable pour cette ref.";
    } else {
      statusCoverage = "UNAVAILABLE";
      statusNote = "Combined status temporairement indisponible.";
    }
  }

  let checkRuns: Array<{
    name: string;
    status: string;
    conclusion: string | null;
    htmlUrl: string | null;
  }> = [];
  let matchedCheckCount = 0;
  let incompleteCoverage = false;

  try {
    const checks = await ghJson<{
      total_count?: number;
      check_runs?: Array<{
        name?: string;
        status?: string;
        conclusion?: string | null;
        html_url?: string | null;
      }>;
    }>(fetchImpl, `/repos/${owner}/${name}/commits/${ref}/check-runs?per_page=${bound}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${input.token}`,
        Accept: "application/vnd.github+json",
      },
    });
    matchedCheckCount =
      typeof checks.total_count === "number" ? checks.total_count : (checks.check_runs ?? []).length;
    checkRuns = (checks.check_runs ?? []).slice(0, bound).map((c) => ({
      name: c.name ?? "",
      status: c.status ?? "unknown",
      conclusion: c.conclusion ?? null,
      htmlUrl: c.html_url ?? null,
    }));
    incompleteCoverage = matchedCheckCount > bound;
    if (statusCoverage === "COMPLETE" && incompleteCoverage) statusCoverage = "PARTIAL";
  } catch (e) {
    const err = e instanceof StudioError ? e : null;
    if (err?.code === "ACCESS_DENIED") {
      if (statusCoverage === "COMPLETE") statusCoverage = "PARTIAL";
      statusNote =
        (statusNote ? statusNote + " " : "") +
        "Check-runs inaccessibles (permission) — mergeability ≠ checks verts.";
    } else if (statusCoverage === "COMPLETE") {
      statusCoverage = "PARTIAL";
      statusNote =
        (statusNote ? statusNote + " " : "") + "Check-runs non disponibles pour cette ref.";
    }
  }

  return {
    combinedState,
    combinedStatuses,
    checkRuns,
    incompleteCoverage,
    matchedCheckCount,
    statusCoverage,
    statusNote,
  };
}

/**
 * Merge a pull request with GitHub SHA precondition.
 * Caller must enforce D6/D7 mandate and documentary path policy separately.
 * @see PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge
 */
export async function mergePullRequestRemote(input: {
  token: string;
  fullName: string;
  prNumber: number;
  expectedHeadSha: string;
  expectedBaseSha?: string | null;
  commitTitle?: string;
  mergeMethod?: "merge" | "squash" | "rebase";
  fetchImpl?: GitHubFetch;
}): Promise<{ merged: boolean; sha: string }> {
  const fetchImpl = input.fetchImpl ?? fetch;
  const { owner, name } = parseFullName(input.fullName);
  if (!/^[0-9a-f]{40}$/i.test(input.expectedHeadSha)) {
    throw new StudioError("INVALID_REQUEST", "expectedHeadSha invalide pour merge", {
      httpStatus: 400,
    });
  }
  // Re-read PR before merge — refuse drift / already merged / closed.
  const current = await fetchPullRequestRemote({
    token: input.token,
    fullName: input.fullName,
    prNumber: input.prNumber,
    fetchImpl,
  });
  if (current.merged) {
    // Idempotent already-merged path: never treat source HEAD as the merge commit SHA (P0-02).
    if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
      throw new StudioError("CONFLICT", "PR déjà mergée avec HEAD divergent", { httpStatus: 409 });
    }
    if (current.mergeCommitSha) {
      return { merged: true, sha: current.mergeCommitSha };
    }
    throw new StudioError(
      "AMBIGUOUS",
      "PR déjà mergée — commit de fusion non observé (merge_commit_sha absent)",
      { httpStatus: 409 },
    );
  }
  if (current.state !== "open") {
    throw new StudioError("CONFLICT", `PR non ouverte (state=${current.state})`, { httpStatus: 409 });
  }
  if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
    throw new StudioError("CONFLICT", "HEAD de PR périmé avant merge", { httpStatus: 409 });
  }
  if (
    input.expectedBaseSha &&
    current.baseSha &&
    current.baseSha.toLowerCase() !== input.expectedBaseSha.toLowerCase()
  ) {
    throw new StudioError("CONFLICT", "Base de PR périmée avant merge", { httpStatus: 409 });
  }

  const raw = await ghJson<{
    merged?: boolean;
    sha?: string;
    message?: string;
  }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}/merge`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${input.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sha: input.expectedHeadSha,
      merge_method: input.mergeMethod ?? "merge",
      ...(input.commitTitle ? { commit_title: input.commitTitle } : {}),
    }),
  });
  if (!raw.merged || !raw.sha || !/^[0-9a-f]{40}$/i.test(raw.sha)) {
    throw new StudioError(
      "AMBIGUOUS",
      raw.message ?? "Réponse merge GitHub non qualificable",
      { httpStatus: 409 },
    );
  }
  return { merged: true, sha: raw.sha };
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
  const allow = creds.allowedFullNames?.length
    ? creds.allowedFullNames
    : [creds.allowedFullName];
  const allowSet = new Set(allow.map((n) => n.toLowerCase()));
  const allowed = access.repositories.some((r) => allowSet.has(r.fullName.toLowerCase()));
  // GitHub may omit repositories array on some responses — verify via list endpoint next.
  if (access.repositories.length > 0 && !allowed) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Aucun dépôt allowlist (${allow.join(", ")}) absent du jeton restreint`,
      { httpStatus: 403 },
    );
  }

  return { app, installation, access };
}
