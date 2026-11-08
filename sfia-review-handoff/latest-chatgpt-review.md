# SFIA Studio Next — Review Pack FULL
# ML4 GITHUB APP INSTALLATION READ-ONLY (D9)
# Cycle CRITICAL — mono-cycle reset

## 1. Date/heure Europe/Paris
2026-11-08 19:46 CET

## 2. GO Morris consommé
« OK GO » — GitHub App REAL installation READ-ONLY.
App `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / sandbox `mcleland147/chantiers360`.
Option A D8 DEV remediation : VALIDÉE (aucune écriture DB ce cycle).

## 3. Sources Git, refs et SHA
| Item | Valeur |
|---|---|
| Product branch | `feat/next-git-collaboration-20261108` |
| Product HEAD / origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Handoff entrée | `8325a5e887fa10a3c19a9307d8847f83e8ec95db` |
| Worktree Product | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |

## 4. Git Truth initial/final
Initial: LOCAL DIRTY attendu, staged vide, HEAD=c658f590, handoff tip 8325a5e8.
Final: HEAD Product inchangé ; aucun commit/push Product ; dirty préservé ; handoff L3 mono-fichier.

## 5. Architecture de raccordement D9
Trois mécanismes distincts conservés :
- **A. OAuth D1** Better Auth (`GITHUB_CLIENT_ID/SECRET`) — inchangé, non réutilisé comme preuve App.
- **B. Installation GitHub App (ce cycle)** — JWT App + jeton d'installation éphémère READ, restreint au dépôt sandbox.
- **C. User-to-server** — non activé.

Fichiers D9 :
- `github-app-config.ts` — env + méta chemin (sans logger PEM)
- `github-app-auth.ts` — JWT (`jose`) + API GitHub officielle (fetch)
- `real-github-provider.ts` — `GitHubProvider` REAL READ-ONLY ; mutations → `ACCESS_DENIED`
- `github-provider.ts` — défaut SCRIPTED ; REAL seulement si `STUDIO_GITHUB_PROVIDER=real` + credentials App path
- `scripts/github-app-installation-read-qualify.ts` — preuve DEV sans secrets

## 6. Identité / installation / dépôt / permissions
**Attendus (config) :** App 5670639, install 179935689, repo `mcleland147/chantiers360`, owner `mcleland147`.
**Observés réseau :** **NON PROUVÉ** — gate credential.

## 7. Credential gate
`.env.local` (gitignored) reçoit App ID / Installation ID / allowed repo.
`GITHUB_APP_PRIVATE_KEY_PATH` **absent** (commentaire placeholder uniquement).
Qualification :
```
code=LOCAL_CREDENTIAL_INPUT_REQUIRED
verdict=ML4 GITHUB APP INSTALLATION READ — NOT PROVEN / BLOCKED
exit=2
```
Aucune recherche système de `.pem`. Aucun PEM/JWT/token affiché.

## 8. Mutations GitHub
REAL provider : `createBranch` / `putFileContents` / `createPullRequest` / `mergePullRequest` hard-blocked.
Preuve DET unitaire : mutations refusées + compteurs.
Aucune mutation réseau GitHub effectuée.

## 9. Tests
| Commande | Résultat | Horodatage |
|---|---|---|
| `npx tsc --noEmit` | PASS | 2026-11-08 ~19:45 CET |
| unit App/REAL DET (13) | PASS | 19:45 |
| `npm run test:unit` | **153 PASS** | 19:44–19:45 |
| `npm run test:integration` | **183 PASS** | 19:45 |
| `npm run build` | PASS | 19:45 |
| Playwright | **N/A** — pas d'activation parcours UI/API REAL Product |
| qualify script | **BLOCKED** exit 2 credential path | 19:45 |

Négatifs DET : clé absente, mauvais App ID, mauvaise installation, PEM invalide, token write refusé, owner divergent, repo hors périmètre, 403/502 mapping, REAL non configuré via resolveGitHubProvider.

## 10. ENV-01 / versioning
DEV local only. NO RELEASE / 0.0.0-dev. RECETTE/STABLE non touchés. Pas de migration DB.

## 11. Fake/Real Qualification
- SCRIPTED : non-régression préservée (défaut).
- REAL installation auth / repo read : **NOT PROVEN** (path).
- REAL mutation / user-to-server / READY FOR REAL WRITES : **NON**.

## 12. Dette D7/D8
Option A conservée. Réserves ouvertes (hors cycle) : provenance PR reconcileAttempt ; lease active au CAS terminal. À fermer avant mutations REAL produit.

## 13. Suite préparée
1. Morris fournit `GITHUB_APP_PRIVATE_KEY_PATH` local.
2. Rejouer `npx tsx scripts/github-app-installation-read-qualify.ts`.
3. Puis cycles distincts : user-to-server, callback App, permissions Pilote, fermeture D7/D8, première publication REAL gouvernée.

## 14. Secrets
Aucun secret dans ce pack. Pas de PEM, JWT, token, DSN password.

## 15. Verdict
**ML4 GITHUB APP INSTALLATION READ — NOT PROVEN / BLOCKED**

Gate : `STOP — LOCAL CREDENTIAL INPUT REQUIRED` (chemin `.pem` uniquement).

## Git Review Index

| `projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts` | CREATED LOCAL | worktree | `d14628b83a97948a051afcc2868ee9f14657565c704cb4bd49457c8e0301b1d4` | § full |
| `projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts` | CREATED LOCAL | worktree | `85c99611f018724c2cddffb52849932173386f8f8ce3431cebf037f196218e16` | § full |
| `projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts` | CREATED LOCAL | worktree | `c3cc28575cbf4403f295e085d80b1059154e0e95814d77763c9e77da595c6117` | § full |
| `projects/sfia-studio-next/web/scripts/github-app-installation-read-qualify.ts` | CREATED LOCAL | worktree | `535448a487fb5f81d50176fbec97bf6a61877672c1f02d494969dbb5b576d20b` | § full |
| `projects/sfia-studio-next/web/tests/unit/github-app-config.test.ts` | CREATED LOCAL | worktree | `f42c785f8fc0dc38894f633b6d9e357aca087da94218d56d392e0a724c0c3c40` | § full |
| `projects/sfia-studio-next/web/tests/unit/github-app-auth-real-provider.test.ts` | CREATED LOCAL | worktree | `a55867fe986421fd4c318681e81c8414ece54a83da105a4b16c9e9eda3087e14` | § full |
| `projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts` | MODIFIED LOCAL | worktree/diff | `aacc638f96f664444c50dada7b074185d2d55810c7293c67bb771b0faf68ce01` | § diff/full |
| `projects/sfia-studio-next/construction/delivery-history.md` | MODIFIED LOCAL | worktree/diff | `d5860e1774502e5e9182a6de4c30dbb9e9f343fc03f149020a2520580c42c879` | § diff/full |
| `projects/sfia-studio-next/construction/integration-git/specification-technique.md` | MODIFIED LOCAL | worktree/diff | `dd305e954c5b92926d849f93969a5948a667765565b9390b0d5be69b58b888c0` | § diff/full |

## Contenu fichiers créés


### FILE `projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts`
sha256=`d14628b83a97948a051afcc2868ee9f14657565c704cb4bd49457c8e0301b1d4`
```ts
import { accessSync, constants, readFileSync, statSync } from "node:fs";
import { StudioError } from "@/lib/http-errors";

/** Canonical DEV sandbox repository for ML4 GitHub App installation reads. */
export const GITHUB_APP_ALLOWED_FULL_NAME = "mcleland147/chantiers360";
export const GITHUB_APP_EXPECTED_APP_ID = "5670639";
export const GITHUB_APP_EXPECTED_INSTALLATION_ID = "179935689";
export const GITHUB_APP_EXPECTED_OWNER = "mcleland147";

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
};

export type GitHubAppLoadedCredentials = {
  appId: string;
  installationId: string;
  /** PKCS#8 / PEM private key material — never log. */
  privateKeyPem: string;
  allowedFullName: string;
  expectedOwner: string;
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
  const appId = requireEnv("GITHUB_APP_ID");
  const installationId = requireEnv("GITHUB_APP_INSTALLATION_ID");
  const privateKeyPath = requireEnv("GITHUB_APP_PRIVATE_KEY_PATH");
  const allowedFullName =
    process.env.GITHUB_APP_ALLOWED_REPO?.trim() || GITHUB_APP_ALLOWED_FULL_NAME;
  const expectedOwner =
    process.env.GITHUB_APP_EXPECTED_OWNER?.trim() || GITHUB_APP_EXPECTED_OWNER;
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
  };
}

/**
 * Load App credentials for D9 REAL installation-to-server reads.
 * Never uses Better Auth GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET.
 * Never returns or logs path content in thrown messages beyond existence.
 */
export function loadGitHubAppCredentialsFromEnv(): GitHubAppLoadedCredentials {
  const meta = readGitHubAppCredentialMetaFromEnv();

  if (meta.appId !== GITHUB_APP_EXPECTED_APP_ID) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_ID inattendu (attendu ${GITHUB_APP_EXPECTED_APP_ID})`,
      { httpStatus: 400 },
    );
  }
  if (meta.installationId !== GITHUB_APP_EXPECTED_INSTALLATION_ID) {
    throw new StudioError(
      "INVALID_REQUEST",
      `GITHUB_APP_INSTALLATION_ID inattendu (attendu ${GITHUB_APP_EXPECTED_INSTALLATION_ID})`,
      { httpStatus: 400 },
    );
  }

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


### FILE `projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts`
sha256=`85c99611f018724c2cddffb52849932173386f8f8ce3431cebf037f196218e16`
```ts
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

```


### FILE `projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts`
sha256=`c3cc28575cbf4403f295e085d80b1059154e0e95814d77763c9e77da595c6117`
```ts
import { StudioError } from "@/lib/http-errors";
import {
  authenticateInstallationReadOnly,
  fetchFileContentUtf8,
  fetchRefSha,
  fetchRepositoryMetadata,
  listInstallationRepositories,
  type GitHubFetch,
  type InstallationAccessToken,
} from "./github-app-auth";
import {
  loadGitHubAppCredentialsFromEnv,
  type GitHubAppLoadedCredentials,
  parseFullName,
} from "./github-app-config";
import type {
  FileContentResult,
  GitHubProvider,
  InstallationRepo,
  PullRequestInfo,
} from "./github-provider";

function mutationBlocked(op: string): never {
  throw new StudioError(
    "ACCESS_DENIED",
    `Mutation GitHub REAL interdite dans ce cycle (${op})`,
    { httpStatus: 403 },
  );
}

function assertAllowedRepo(creds: GitHubAppLoadedCredentials, fullName: string) {
  if (fullName.toLowerCase() !== creds.allowedFullName.toLowerCase()) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Dépôt hors périmètre REAL READ (${fullName})`,
      { httpStatus: 403 },
    );
  }
}

type TokenCache = {
  access: InstallationAccessToken;
  fetchedAtMs: number;
};

/**
 * D9 GitHub provider — REAL installation-to-server, READ-ONLY.
 * Mutations are hard-blocked. Not a second Git engine: same GitHubProvider contract.
 */
export class RealGitHubReadProvider implements GitHubProvider {
  readonly mode = "REAL" as const;
  private readonly creds: GitHubAppLoadedCredentials;
  private readonly fetchImpl: GitHubFetch;
  private tokenCache: TokenCache | null = null;
  private mutationAttempts = {
    createBranch: 0,
    putFileContents: 0,
    createPR: 0,
    mergePR: 0,
  };

  constructor(creds: GitHubAppLoadedCredentials, fetchImpl: GitHubFetch = fetch) {
    this.creds = creds;
    this.fetchImpl = fetchImpl;
  }

  getMutationCounts() {
    return { ...this.mutationAttempts };
  }

  resetMutationCounts() {
    this.mutationAttempts = {
      createBranch: 0,
      putFileContents: 0,
      createPR: 0,
      mergePR: 0,
    };
  }

  private async installationToken(): Promise<string> {
    const now = Date.now();
    if (this.tokenCache) {
      const expires = Date.parse(this.tokenCache.access.expiresAt);
      // Refresh 60s before expiry.
      if (Number.isFinite(expires) && expires - now > 60_000) {
        return this.tokenCache.access.token;
      }
    }
    const { access } = await authenticateInstallationReadOnly(this.creds, this.fetchImpl);
    this.tokenCache = { access, fetchedAtMs: now };
    return access.token;
  }

  async listInstallationRepos(
    _pilotId: string,
    installationId: string,
  ): Promise<InstallationRepo[]> {
    if (installationId !== this.creds.installationId) {
      throw new StudioError("ACCESS_DENIED", "Installation ID hors mandat REAL READ", {
        httpStatus: 403,
      });
    }
    const token = await this.installationToken();
    const repos = await listInstallationRepositories(token, this.fetchImpl);
    const allowed = repos.filter(
      (r) => r.fullName.toLowerCase() === this.creds.allowedFullName.toLowerCase(),
    );
    if (allowed.length === 0) {
      throw new StudioError(
        "ACCESS_DENIED",
        `Dépôt ${this.creds.allowedFullName} non inclus dans l'installation`,
        { httpStatus: 403 },
      );
    }
    return allowed.map((r) => {
      const { owner, name } = parseFullName(r.fullName);
      return {
        id: String(r.id),
        owner,
        name,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
      };
    });
  }

  async getRefSha(pilotId: string, fullName: string, ref: string): Promise<string> {
    void pilotId;
    assertAllowedRepo(this.creds, fullName);
    const token = await this.installationToken();
    return fetchRefSha(token, fullName, ref, this.fetchImpl);
  }

  async getFileContent(
    pilotId: string,
    fullName: string,
    path: string,
    ref: string,
  ): Promise<FileContentResult> {
    void pilotId;
    assertAllowedRepo(this.creds, fullName);
    const token = await this.installationToken();
    const file = await fetchFileContentUtf8(token, fullName, path, ref, this.fetchImpl);
    return {
      path: file.path,
      ref: file.ref,
      sha: file.sha,
      content: file.content,
      encoding: "utf-8",
    };
  }

  async createBranch(
    _pilotId: string,
    _fullName: string,
    _branch: string,
    _fromSha: string,
  ): Promise<{ ref: string; sha: string }> {
    this.mutationAttempts.createBranch += 1;
    return mutationBlocked("createBranch");
  }

  async putFileContents(_input: {
    pilotId: string;
    fullName: string;
    path: string;
    branch: string;
    message: string;
    content: string;
    expectedHeadSha?: string;
  }): Promise<{ commitSha: string; headSha: string }> {
    this.mutationAttempts.putFileContents += 1;
    return mutationBlocked("putFileContents");
  }

  async createPullRequest(_input: {
    pilotId: string;
    fullName: string;
    title: string;
    head: string;
    base: string;
    body?: string;
    publicationMarker?: string;
  }): Promise<PullRequestInfo> {
    this.mutationAttempts.createPR += 1;
    return mutationBlocked("createPullRequest");
  }

  async findPullRequest(_input: {
    pilotId: string;
    fullName: string;
    head: string;
    base: string;
    publicationMarker?: string;
    expectedHeadSha?: string;
  }): Promise<{ matches: PullRequestInfo[]; ambiguous: boolean }> {
    // Read path reserved for a later cycle with marker provenance; fail-closed for now.
    throw new StudioError(
      "NOT_CONFIGURED",
      "findPullRequest REAL non activé dans le cycle READ-ONLY",
      { httpStatus: 503 },
    );
  }

  async mergePullRequest(_input: {
    pilotId: string;
    fullName: string;
    prNumber: number;
    expectedHeadSha: string;
    expectedBaseSha?: string | null;
  }): Promise<{ merged: boolean; sha: string }> {
    this.mutationAttempts.mergePR += 1;
    return mutationBlocked("mergePullRequest");
  }

  async getPullRequest(
    _pilotId: string,
    _fullName: string,
    _prNumber: number,
  ): Promise<PullRequestInfo> {
    throw new StudioError(
      "NOT_CONFIGURED",
      "getPullRequest REAL non activé dans le cycle READ-ONLY",
      { httpStatus: 503 },
    );
  }

  /** Qualification helper: repo metadata + default branch HEAD (no secrets). */
  async observeAllowedRepository(): Promise<{
    repositoryId: number;
    fullName: string;
    defaultBranch: string;
    headSha: string;
    private: boolean;
    installationRepos: string[];
    tokenPermissions: Record<string, string>;
    tokenExpiresAt: string;
  }> {
    const { access } = await authenticateInstallationReadOnly(this.creds, this.fetchImpl);
    this.tokenCache = { access, fetchedAtMs: Date.now() };
    const listed = await listInstallationRepositories(access.token, this.fetchImpl);
    const names = listed.map((r) => r.fullName);
    if (!names.some((n) => n.toLowerCase() === this.creds.allowedFullName.toLowerCase())) {
      throw new StudioError(
        "ACCESS_DENIED",
        `Dépôt ${this.creds.allowedFullName} absent de l'installation`,
        { httpStatus: 403 },
      );
    }
    const meta = await fetchRepositoryMetadata(
      access.token,
      this.creds.allowedFullName,
      this.fetchImpl,
    );
    const headSha = await fetchRefSha(
      access.token,
      this.creds.allowedFullName,
      meta.defaultBranch,
      this.fetchImpl,
    );
    return {
      repositoryId: meta.id,
      fullName: meta.fullName,
      defaultBranch: meta.defaultBranch,
      headSha,
      private: meta.private,
      installationRepos: names,
      tokenPermissions: access.permissions,
      tokenExpiresAt: access.expiresAt,
    };
  }
}

export function createRealGitHubReadProviderFromEnv(
  fetchImpl: GitHubFetch = fetch,
): RealGitHubReadProvider {
  const creds = loadGitHubAppCredentialsFromEnv();
  return new RealGitHubReadProvider(creds, fetchImpl);
}

```


### FILE `projects/sfia-studio-next/web/scripts/github-app-installation-read-qualify.ts`
sha256=`535448a487fb5f81d50176fbec97bf6a61877672c1f02d494969dbb5b576d20b`
```ts
/**
 * DEV qualification — GitHub App installation READ-ONLY proof (D9).
 *
 * Required env (local, never commit secrets):
 *   GITHUB_APP_ID=5670639
 *   GITHUB_APP_INSTALLATION_ID=179935689
 *   GITHUB_APP_PRIVATE_KEY_PATH=/secure/local/path/to/key.pem
 *
 * Optional:
 *   GITHUB_APP_ALLOWED_REPO=mcleland147/chantiers360
 *
 * Never prints PEM, JWT, or access tokens.
 * Never performs Git mutations.
 *
 * Usage (from web/):
 *   npx tsx scripts/github-app-installation-read-qualify.ts
 */
import { config as loadDotenv } from "dotenv";
import { resolve } from "node:path";
import {
  authenticateInstallationReadOnly,
} from "../src/domains/integrations/github-app-auth";
import {
  GITHUB_APP_ALLOWED_FULL_NAME,
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  inspectGitHubAppCredentialPath,
  loadGitHubAppCredentialsFromEnv,
} from "../src/domains/integrations/github-app-config";
import { RealGitHubReadProvider } from "../src/domains/integrations/real-github-provider";
import { isStudioError } from "../src/lib/http-errors";

loadDotenv({ path: resolve(process.cwd(), ".env.local") });

function fail(code: string, message: string): never {
  console.error(
    JSON.stringify(
      {
        ok: false,
        code,
        message,
        verdict: "ML4 GITHUB APP INSTALLATION READ — NOT PROVEN / BLOCKED",
      },
      null,
      2,
    ),
  );
  process.exit(2);
}

async function main() {
  const pathEnv = process.env.GITHUB_APP_PRIVATE_KEY_PATH?.trim();
  if (!pathEnv) {
    fail(
      "LOCAL_CREDENTIAL_INPUT_REQUIRED",
      "GITHUB_APP_PRIVATE_KEY_PATH absent — fournir le chemin local sécurisé du .pem (ne pas coller le PEM)",
    );
  }

  const pathMeta = inspectGitHubAppCredentialPath(pathEnv);
  if (!pathMeta.exists || !pathMeta.isFile || !pathMeta.readable) {
    fail(
      "LOCAL_CREDENTIAL_INPUT_REQUIRED",
      `GITHUB_APP_PRIVATE_KEY_PATH non utilisable (exists=${pathMeta.exists} isFile=${pathMeta.isFile} readable=${pathMeta.readable} mode=${pathMeta.mode})`,
    );
  }

  if (!process.env.GITHUB_APP_ID) process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
  if (!process.env.GITHUB_APP_INSTALLATION_ID) {
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
  }
  if (!process.env.GITHUB_APP_ALLOWED_REPO) {
    process.env.GITHUB_APP_ALLOWED_REPO = GITHUB_APP_ALLOWED_FULL_NAME;
  }

  let creds;
  try {
    creds = loadGitHubAppCredentialsFromEnv();
  } catch (e) {
    const msg = isStudioError(e) ? e.message : "credential load failed";
    const code = isStudioError(e) ? e.code : "NOT_CONFIGURED";
    fail(code, msg);
  }

  const provider = new RealGitHubReadProvider(creds);
  const auth = await authenticateInstallationReadOnly(creds);
  const observed = await provider.observeAllowedRepository();

  // Negative: mutations must remain blocked
  let mutationBlocked = false;
  try {
    await provider.createBranch("pilot", creds.allowedFullName, "sfia/forbidden", observed.headSha);
  } catch (e) {
    mutationBlocked = isStudioError(e) && e.code === "ACCESS_DENIED";
  }
  if (!mutationBlocked) {
    fail("MUTATION_GUARD_FAILED", "createBranch REAL n'a pas été bloqué");
  }

  const counts = provider.getMutationCounts();
  if (counts.createBranch !== 1 || counts.createPR !== 0 || counts.mergePR !== 0) {
    fail("MUTATION_COUNTER_UNEXPECTED", "compteurs de mutation REAL inattendus");
  }

  // Proof payload — no secrets
  const proof = {
    ok: true,
    at: new Date().toISOString(),
    lane: "DEV",
    providerMode: "REAL",
    credentialPathMeta: {
      configured: true,
      exists: pathMeta.exists,
      isFile: pathMeta.isFile,
      mode: pathMeta.mode,
      sizeBytes: pathMeta.sizeBytes,
      // path string intentionally omitted from stdout to reduce accidental leakage in logs
    },
    app: {
      id: auth.app.id,
      slug: auth.app.slug,
      name: auth.app.name,
      ownerLogin: auth.app.ownerLogin,
      matchesExpected: String(auth.app.id) === GITHUB_APP_EXPECTED_APP_ID,
    },
    installation: {
      id: auth.installation.id,
      accountLogin: auth.installation.accountLogin,
      accountType: auth.installation.accountType,
      repositorySelection: auth.installation.repositorySelection,
      permissionsGrantedOnInstallation: auth.installation.permissions,
      suspendedAt: auth.installation.suspendedAt,
      matchesExpected: String(auth.installation.id) === GITHUB_APP_EXPECTED_INSTALLATION_ID,
    },
    token: {
      expiresAt: auth.access.expiresAt,
      permissions: auth.access.permissions,
      repositorySelection: auth.access.repositorySelection,
      repositoriesInToken: auth.access.repositories.map((r) => r.fullName),
      // token value NEVER included
    },
    repository: {
      id: observed.repositoryId,
      fullName: observed.fullName,
      private: observed.private,
      defaultBranch: observed.defaultBranch,
      headSha: observed.headSha,
      installationReposObserved: observed.installationRepos,
      matchesSandbox: observed.fullName.toLowerCase() === GITHUB_APP_ALLOWED_FULL_NAME.toLowerCase(),
    },
    mutationGuard: {
      createBranchBlocked: true,
      mutationCounts: counts,
    },
    limits: [
      "installation-to-server read only",
      "no user-to-server",
      "no Git mutations",
      "no Product user-path activation",
      "D7/D8 reserves still open before REAL writes",
    ],
    verdict:
      "REAL INSTALLATION AUTH PROVEN + REAL REPOSITORY READ PROVEN — READ-ONLY SCOPE ONLY",
  };

  console.log(JSON.stringify(proof, null, 2));
}

main().catch((e) => {
  const msg = isStudioError(e) ? `${e.code}: ${e.message}` : e instanceof Error ? e.message : String(e);
  fail("QUALIFY_FAILED", msg);
});

```


### FILE `projects/sfia-studio-next/web/tests/unit/github-app-config.test.ts`
sha256=`f42c785f8fc0dc38894f633b6d9e357aca087da94218d56d392e0a724c0c3c40`
```ts
import { mkdtempSync, writeFileSync, chmodSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  inspectGitHubAppCredentialPath,
  loadGitHubAppCredentialsFromEnv,
  readGitHubAppCredentialMetaFromEnv,
} from "@/domains/integrations/github-app-config";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("github-app-config", () => {
  it("STOP when PRIVATE_KEY_PATH absent", () => {
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
    delete process.env.GITHUB_APP_PRIVATE_KEY_PATH;
    expect(() => readGitHubAppCredentialMetaFromEnv()).toThrow(/LOCAL CREDENTIAL INPUT REQUIRED/);
  });

  it("rejects wrong App ID", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    try {
      process.env.GITHUB_APP_ID = "9999999";
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/GITHUB_APP_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects wrong installation ID", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    try {
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = "1";
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/INSTALLATION_ID inattendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects missing key file", () => {
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
    process.env.GITHUB_APP_PRIVATE_KEY_PATH = "/tmp/sfia-does-not-exist-github-app.pem";
    try {
      loadGitHubAppCredentialsFromEnv();
      expect.fail("expected throw");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect(String((e as Error).message)).toMatch(/fichier absent/);
    }
  });

  it("inspects path metadata without needing valid crypto key material shape beyond PEM header", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(
      pemPath,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0\n-----END PRIVATE KEY-----\n",
    );
    chmodSync(pemPath, 0o600);
    try {
      const meta = inspectGitHubAppCredentialPath(pemPath);
      expect(meta.exists).toBe(true);
      expect(meta.isFile).toBe(true);
      expect(meta.readable).toBe(true);
      expect(meta.mode).toBe("0600");
      expect(meta.sizeBytes).toBeGreaterThan(20);

      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      const loaded = loadGitHubAppCredentialsFromEnv();
      expect(loaded.appId).toBe(GITHUB_APP_EXPECTED_APP_ID);
      expect(loaded.privateKeyPem.includes("BEGIN")).toBe(true);
      expect(loaded.meta.pathMode).toBe("0600");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects non-PEM content", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-gh-app-"));
    const pemPath = join(dir, "key.pem");
    writeFileSync(pemPath, "not-a-key");
    try {
      process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
      process.env.GITHUB_APP_INSTALLATION_ID = GITHUB_APP_EXPECTED_INSTALLATION_ID;
      process.env.GITHUB_APP_PRIVATE_KEY_PATH = pemPath;
      expect(() => loadGitHubAppCredentialsFromEnv()).toThrow(/PEM attendu/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

```


### FILE `projects/sfia-studio-next/web/tests/unit/github-app-auth-real-provider.test.ts`
sha256=`a55867fe986421fd4c318681e81c8414ece54a83da105a4b16c9e9eda3087e14`
```ts
import { generateKeyPairSync } from "node:crypto";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  authenticateInstallationReadOnly,
  createGitHubAppJwt,
  createInstallationAccessToken,
} from "@/domains/integrations/github-app-auth";
import type { GitHubAppLoadedCredentials } from "@/domains/integrations/github-app-config";
import {
  GITHUB_APP_ALLOWED_FULL_NAME,
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  GITHUB_APP_EXPECTED_OWNER,
} from "@/domains/integrations/github-app-config";
import { resolveGitHubProvider } from "@/domains/integrations/github-provider";
import { RealGitHubReadProvider } from "@/domains/integrations/real-github-provider";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

function testPem(): string {
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  return privateKey.export({ type: "pkcs8", format: "pem" }).toString();
}

function creds(overrides?: Partial<GitHubAppLoadedCredentials>): GitHubAppLoadedCredentials {
  const pem = testPem();
  return {
    appId: GITHUB_APP_EXPECTED_APP_ID,
    installationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
    privateKeyPem: pem,
    allowedFullName: GITHUB_APP_ALLOWED_FULL_NAME,
    expectedOwner: GITHUB_APP_EXPECTED_OWNER,
    meta: {
      appId: GITHUB_APP_EXPECTED_APP_ID,
      installationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
      privateKeyPath: "/tmp/test.pem",
      pathExists: true,
      pathIsFile: true,
      pathMode: "0600",
      pathSizeBytes: 100,
      allowedFullName: GITHUB_APP_ALLOWED_FULL_NAME,
      expectedOwner: GITHUB_APP_EXPECTED_OWNER,
    },
    ...overrides,
  };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
  vi.restoreAllMocks();
});

describe("github-app-auth + REAL provider (DET)", () => {
  it("creates a JWT without exposing it in errors", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);
    expect(jwt.split(".")).toHaveLength(3);
    expect(jwt.length).toBeGreaterThan(40);
  });

  it("authenticates installation and restricts token to read + sandbox repo", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          name: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes(`/app/installations/${GITHUB_APP_EXPECTED_INSTALLATION_ID}`) && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "mcleland147", type: "User" },
          repository_selection: "selected",
          permissions: { contents: "write", metadata: "read", pull_requests: "write" },
          suspended_at: null,
        });
      }
      if (url.endsWith("/access_tokens") && method === "POST") {
        const body = JSON.parse(String(init?.body ?? "{}"));
        expect(body.repositories).toEqual(["chantiers360"]);
        expect(body.permissions).toEqual({
          contents: "read",
          metadata: "read",
          pull_requests: "read",
        });
        return jsonResponse(201, {
          token: "ghs_test_token_never_log",
          expires_at: new Date(Date.now() + 3600_000).toISOString(),
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          repository_selection: "selected",
          repositories: [
            { id: 1, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true },
          ],
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const result = await authenticateInstallationReadOnly(c, fetchImpl as unknown as typeof fetch);
    expect(result.app.id).toBe(Number(GITHUB_APP_EXPECTED_APP_ID));
    expect(result.installation.id).toBe(Number(GITHUB_APP_EXPECTED_INSTALLATION_ID));
    expect(result.access.permissions.contents).toBe("read");
    expect(result.access.repositories[0]?.fullName).toBe(GITHUB_APP_ALLOWED_FULL_NAME);
  });

  it("rejects installation token that still has write permissions", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);
    const fetchImpl = vi.fn(async () =>
      jsonResponse(201, {
        token: "ghs_x",
        expires_at: new Date(Date.now() + 3600_000).toISOString(),
        permissions: { contents: "write", metadata: "read" },
        repositories: [{ id: 1, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true }],
      }),
    );
    await expect(
      createInstallationAccessToken(c, jwt, fetchImpl as unknown as typeof fetch),
    ).rejects.toThrow(/non restreint en lecture/);
  });

  it("maps 403 to ACCESS_DENIED and 503-ish to DEPENDENCY_UNAVAILABLE", async () => {
    const c = creds();
    const jwt = await createGitHubAppJwt(c.appId, c.privateKeyPem);

    const forbidden = vi.fn(async () => jsonResponse(403, { message: "nope" }));
    await expect(
      createInstallationAccessToken(c, jwt, forbidden as unknown as typeof fetch),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");

    const boom = vi.fn(async () => jsonResponse(502, { message: "bad gateway" }));
    await expect(
      createInstallationAccessToken(c, jwt, boom as unknown as typeof fetch),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "DEPENDENCY_UNAVAILABLE");
  });

  it("REAL provider hard-blocks mutations and refuses out-of-scope repos", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes("/app/installations/") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "mcleland147", type: "User" },
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          suspended_at: null,
        });
      }
      if (url.endsWith("/access_tokens") && method === "POST") {
        return jsonResponse(201, {
          token: "ghs_test",
          expires_at: new Date(Date.now() + 3600_000).toISOString(),
          permissions: { contents: "read", metadata: "read", pull_requests: "read" },
          repositories: [{ id: 42, full_name: GITHUB_APP_ALLOWED_FULL_NAME, private: true }],
        });
      }
      if (url.includes("/installation/repositories")) {
        return jsonResponse(200, {
          repositories: [
            {
              id: 42,
              full_name: GITHUB_APP_ALLOWED_FULL_NAME,
              default_branch: "main",
              private: true,
            },
          ],
        });
      }
      if (url.includes("/repos/mcleland147/chantiers360/git/ref/")) {
        return jsonResponse(200, {
          object: { sha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
        });
      }
      if (url.includes("/repos/mcleland147/chantiers360") && method === "GET") {
        return jsonResponse(200, {
          id: 42,
          full_name: GITHUB_APP_ALLOWED_FULL_NAME,
          default_branch: "main",
          private: true,
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const provider = new RealGitHubReadProvider(c, fetchImpl as unknown as typeof fetch);

    await expect(
      provider.getRefSha("pilot", "mcleland147/sfia-workspace", "main"),
    ).rejects.toThrow(/hors périmètre/);

    await expect(
      provider.createBranch("pilot", GITHUB_APP_ALLOWED_FULL_NAME, "x", "a".repeat(40)),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "ACCESS_DENIED");

    await expect(
      provider.putFileContents({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        path: "docs/a.md",
        branch: "main",
        message: "nope",
        content: "x",
      }),
    ).rejects.toThrow(/Mutation GitHub REAL interdite/);

    await expect(
      provider.createPullRequest({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        title: "nope",
        head: "x",
        base: "main",
      }),
    ).rejects.toThrow(/Mutation/);

    await expect(
      provider.mergePullRequest({
        pilotId: "p",
        fullName: GITHUB_APP_ALLOWED_FULL_NAME,
        prNumber: 1,
        expectedHeadSha: "a".repeat(40),
      }),
    ).rejects.toThrow(/Mutation/);

    const observed = await provider.observeAllowedRepository();
    expect(observed.fullName).toBe(GITHUB_APP_ALLOWED_FULL_NAME);
    expect(observed.headSha).toBe("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    expect(provider.getMutationCounts().createBranch).toBe(1);
    expect(provider.getMutationCounts().createPR).toBe(1);
    expect(provider.getMutationCounts().mergePR).toBe(1);
  });

  it("resolveGitHubProvider stays SCRIPTED by default and refuses REAL without credentials", () => {
    delete process.env.STUDIO_GITHUB_PROVIDER;
    delete process.env.GITHUB_APP_PRIVATE_KEY_PATH;
    expect(resolveGitHubProvider().mode).toBe("SCRIPTED");

    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.GITHUB_APP_ID;
    expect(() => resolveGitHubProvider()).toThrow(/non configuré/);
  });

  it("rejects wrong owner on installation account", async () => {
    const c = creds();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.endsWith("/app")) {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_APP_ID),
          slug: "sfia-studio-next-dev",
          owner: { login: "mcleland147" },
        });
      }
      if (url.includes("/app/installations/") && method === "GET") {
        return jsonResponse(200, {
          id: Number(GITHUB_APP_EXPECTED_INSTALLATION_ID),
          account: { login: "someone-else", type: "User" },
          permissions: { contents: "read", metadata: "read" },
          suspended_at: null,
        });
      }
      return jsonResponse(500, { message: "no" });
    });
    await expect(
      authenticateInstallationReadOnly(c, fetchImpl as unknown as typeof fetch),
    ).rejects.toThrow(/Owner d'installation inattendu/);
  });
});

```


## Diff / sections modifiées


### MOD `github-provider.ts`
```diff

```


### DOC delivery-history (diff vs origin/main)
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a90dbc44..20905247 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -741,3 +741,151 @@ Append-only logical journal of Cursor product deliveries.
 | Preuves locales | tsc OK ; unit 123 PASS (STUDIO_LANE=DEV) ; PG 144 PASS ; e2e full 12/12 ×2 PASS |
 | DEV 500 | Cause = `next dev --turbopack` font flake sur WT construction ; restore non destructive `next dev` sans turbopack → `/login` 200 ; RECETTE `:3200` inchangée 200 |
 | Verdict attendu | PR/merge conditionnel puis post-merge CI GREEN ; STABLE/ML4 NOT STARTED |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-LOCAL-01
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — Collaborer et publier avec Git |
+| Type | EVOL / FEATURE DELIVERY — construction locale intégrée |
+| Autorité / GO | Morris GO R5/ML4 INTEGRATED LOCAL DELIVERY (2026-11-08) — DEV only |
+| Branche / worktree | `feat/next-git-collaboration-20261108` @ `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
+| Base Git | `origin/main@c658f59023d44a0e22448c7ee034e3c1dda292a2` (PR #670 merged) |
+| État Git Product | **LOCAL DIRTY / NO PROJECT COMMIT / NO PUSH / NO PR** |
+| Architecture | D6→D7→D9→D8 ; domaines `integrations` (D9), `execution` (D7), `proofs` (D8) ; D4 `document_publication_refs` ; Nora lecture Git only |
+| Migration | `008_git_collaboration` additive (DEV/`sfia_next_e2e`) — jamais RECETTE/STABLE |
+| Provider | `STUDIO_GITHUB_PROVIDER=scripted` par défaut ; REAL → `NOT_CONFIGURED` |
+| UX | Paramètres→Intégrations (218–224) ; surface projet git/publication (227–231) ; badge SCRIPTED ; shell G4 réutilisé |
+| Figma | Contrat extrait `.tmp-sfia-review/figma-visual-contract-ml4.md` + captures 218/219/225/227/229/231/233 |
+| Validations locales | unit 131 PASS ; integration PG 154 PASS (dont git-collaboration 10) ; `tsc --noEmit` PASS ; `next build` PASS ; e2e `git-collaboration.spec.ts` **1/1 PASS (15.6s)** SCRIPTED |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Limites Fake/Real | Aucune installation App REAL ; aucun commit/PR/merge GitHub REAL ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT ; GO Git Product ; GO RECETTE + effets REAL ; acceptation Morris ML4 |
+| Verdict candidat | `ML4 INTEGRATED LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-CORRECTIVE-B1-B9
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — correctif Critical B1–B9 |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris GO ML4 CORRECTIVE LOCAL DELIVERY (2026-11-08) |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (même worktree dirty) |
+| Base Git | `origin/main@c658f590…` inchangée ; handoff précédent `877b502a` |
+| Corrections | B1 autorité courante ; B2 claim atomique ; B3 merge lié publication ; B4 reconcile/lost ACK ; B5 path-policy ; B6 diff inspectable ; B7 provenance fingerprint ; B8 matrice ; B9 Review Pack + package-lock |
+| Migration | aucune 009 — progress/claim via colonnes 008 existantes |
+| Validations | unit 132 PASS ; git-collaboration PG 15 PASS ; e2e git corrective PASS ; Playwright **13/13 PASS** (ML1–ML3/G4 + ML4) ; tsc PASS |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-GIT-FINAL-CORRECTIVE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — FINAL CORRECTIVE LOCAL (B1/B2/B3/B4/B6/B7/B8) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK, GO CORRECTION » (2026-11-08) |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée ; handoff correctif B1–B9 `253f6bed` |
+| Corrections | B1 niveaux permission read≠write ; B2 exclusivité DISPATCHED + claim ; B3 base/head/refs merge ; B4 lost ACK post-PR + findPullRequest ; B6 taxonomie lecture distante ; B7 acteur/provenance courants ; B8 requal AT + preuves ; B5/B9 préservés |
+| Migration | aucune 009 — claimToken dans `resultJson` (008) |
+| Validations | unit **136 PASS** ; git-collaboration PG **24 PASS** ; `tsc` PASS ; `next build` PASS ; Playwright **13/13 PASS** ; integration globale 167/168 (1 flaky préexistant `portfolio-a1` hors ML4) |
+| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris ; GO RECETTE + effets REAL |
+| Verdict candidat | `ML4 FINAL CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-EXECUTION-INVARIANTS
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — STABILISATION FINALE DES INVARIANTS GIT (C1/C2/C3/B2/Q1) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » (2026-11-08) ; Critical Review entrée `f15a8e99…` NOT READY |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée |
+| Corrections | C1 `assertStepAuthority` inter-mutations ; B2 claim lease/fencing + reconcile READ-ONLY ; C2 PR historique vs courant ; C3 SCRIPTED `PilotId+fullName` ; Q1 keyset portfolio µs |
+| Migration | aucune 009 — lease dans `resultJson` (008) |
+| Validations | unit **140 PASS** ; git PG **28 PASS** ; integration **172 PASS** ; `tsc` PASS ; `build` PASS ; Playwright **13/13 PASS** |
+| Handoff L3 | `sfia/review-handoff@4bcc8e4e4171bf886beab06c52b488e88ff2f308` (parent `f15a8e99…`) — mono-fichier |
+| Q1 | Flake préexistant prouvé (code = main) ; cause truncation JS Date ms ; fix tuple keyset + cursor µs ; stress 25/25 PASS |
+| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
+| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
+| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris |
+| Verdict candidat | `ML4 EXECUTION-INVARIANTS STABILIZATION — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-FENCING-RECONCILIATION-CLOSURE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — EXECUTION SAFETY FINAL BOUNDED CLOSURE (B2/B4/B9) |
+| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » ; Critical Review entrée `4bcc8e4e…` NOT READY + pack incomplete |
+| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
+| Base Git | `origin/main@c658f590…` inchangée |
+| Corrections | B2 claimToken dans WHERE SQL + touch lease + old-worker CONFLICT ; B4/C2 `prRemoteProven` fail-closed ; B9 diffs docs dans Review Pack |
+| Migration | aucune 009 |
+| Validations | unit **140** ; git PG **32** ; integration **176** ; tsc/build PASS ; Playwright **13/13 PASS** |
+| Handoff L3 | `sfia/review-handoff@c67ec07ff4d292c09f57015529515ba1deaf4c69` (parent `4bcc8e4e…`) — mono-fichier + diffs B9 |
+| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
+| Versioning | **NO RELEASE** ; `0.0.0-dev` |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 FENCING & RECONCILIATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-PR-RESUME-VERIFICATION
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — B4/C2 PR resume verification after lost ACK |
+| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » ; Critical Review `c67ec07f…` NOT READY |
+| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
+| Base Git | `origin/main@c658f590…` |
+| Correction | `prHistoricallyCreated` force relecture distante ; gate `prRemoteVerified` ; upsert publicationRef ; tests resume/unread/nomatch/CLOSED |
+| Validations | unit **140** ; git PG **36** ; integration **180** ; tsc/build PASS ; Playwright **13/13 PASS** |
+| Handoff L3 | `sfia/review-handoff@66134ea4ec6d9bf8aea92b6a8ad05aae8b3b0a3c` (parent `c67ec07f…`) |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 PR RESUME VERIFICATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-D7-D8-INTEGRITY
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — D7–D8 publication integrity (UNIQUE + atomicité + marker) |
+| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
+| Autorité / GO | Morris « OK GO » ; Critical Review `66134ea4…` NOT READY |
+| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
+| Base Git | `origin/main@c658f590…` |
+| Migration | **009** additive UNIQUE `document_publication_refs(effect_attempt_id) WHERE NOT NULL` ; preflight DEV : 3 doublons test détachés explicitement |
+| Corrections | `commitPublicationCompletion` txn ; `assertPrMarkerProvenance` ; schemaRevision 009 |
+| Validations | unit / git PG **39** / integration / build / Playwright → Review Pack |
+| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
+| Verdict candidat | `ML4 D7-D8 PUBLICATION INTEGRITY CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |
+
+## delivery_id: DELIV-2026-11-08-ML4-GITHUB-APP-INSTALLATION-READ
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-08 |
+| Macro-capacité | R5 / ML4 — GitHub App REAL installation READ-ONLY (D9) |
+| Type | INC / DELIVERY LOCAL — `NO RELEASE` / `0.0.0-dev` |
+| Autorité / GO | Morris « OK GO » ; App `sfia-studio-next-dev` (5670639) / install 179935689 / sandbox `mcleland147/chantiers360` |
+| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
+| Base Git | `origin/main@c658f590…` |
+| Implémentation | `github-app-config` + `github-app-auth` + `RealGitHubReadProvider` ; mutations REAL hard-blocked ; SCRIPTED défaut |
+| Qualification réseau | **BLOCKED** — `GITHUB_APP_PRIVATE_KEY_PATH` absent (`LOCAL CREDENTIAL INPUT REQUIRED`) |
+| Validations | unit **153 PASS** (dont 13 App/REAL DET) ; integration **183 PASS** ; tsc/build PASS ; Playwright **N/A** (pas d'activation UI/API REAL) |
+| Fake/Real | SCRIPTED non-régression ; REAL read **NOT PROVEN** (credential path) |
+| Dette D7/D8 | Option A conservée ; réserves provenance PR + lease CAS **ouvertes** (hors cycle) |
+| Verdict candidat | `ML4 GITHUB APP INSTALLATION READ — NOT PROVEN / BLOCKED` |
+| Gate | Morris doit fournir uniquement le **chemin local** du `.pem` (pas le contenu) dans `.env.local` |
+| Interdits | REAL mutation ; Product Git ; RECETTE/STABLE ; user-to-server |

```


### DOC specification-technique (diff vs origin/main)
```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 38aafd63..09716776 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -1,5 +1,14 @@
 # R5 — Spécification technique candidate : collaboration Git et intégrations
 
+> **AS-IMPLEMENTED LOCAL + D7–D8 PUBLICATION INTEGRITY (2026-11-08)** — `feat/next-git-collaboration-20261108` / baseline `c658f590`.
+> Domaines : `integrations` (D9), `execution` (D7), `proofs` (D8) ; migrations `008` + **`009_publication_ref_attempt_unique`** (UNIQUE partiel `effect_attempt_id`).
+> D8 : au plus une `document_publication_refs` par tentative (garantie PostgreSQL).
+> D7/D8 : `commitPublicationCompletion` — transaction courte locale : CAS terminal puis upsert D8 ; échec CAS ⇒ rollback D8 (pas d'orphelin).
+> Provenance PR : `assertPrMarkerProvenance` (marker indépendant même si relecture par `prNumber`).
+> B2 fencing / B4 resume / C1–C3 préservés. Limite : PG ≠ exactly-once GitHub.
+> Provider **SCRIPTED** (défaut). REAL installation-to-server **READ-ONLY** branché (`RealGitHubReadProvider`) ; activation uniquement si `STUDIO_GITHUB_PROVIDER=real` + `GITHUB_APP_ID`/`INSTALLATION_ID`/`PRIVATE_KEY_PATH`. Mutations REAL hard-blocked. Preuve réseau : **NOT PROVEN** tant que `PRIVATE_KEY_PATH` absent. **≠ READY FOR REAL WRITES.**
+
+
 **Statut :** `DOCUMENTED — DRAFT ARCHITECTURE / NOT VALIDATED SPEC / NOT IMPLEMENTED`
 **Nature :** préparation technique de ML4 sous la source de contrat de macro-lot R5 existante ; **ne remplace pas** les R2/ADR validés, la phase Figma ou le prompt Cursor SFIA v2.6.
 **Baseline :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`, repo `mcleland147/sfia-workspace`.

```


---
FIN REVIEW PACK FULL — NO SECRETS — NO PRODUCT COMMIT
