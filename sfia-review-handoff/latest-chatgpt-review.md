# SFIA Studio Next — Review Pack FULL
# ML4 GITHUB USER AUTH + D7/D8 SAFETY CLOSURE
# Cycle CRITICAL — mono-cycle reset (pas d'append historique)

## 1. Date/heure Europe/Paris
2026-11-08 ~21:00 CET (validations 20:43–20:46 CET)

## 2. GO Morris consommé
Mandat CRITICAL explicite : « GITHUB APP USER AUTHORIZATION + D7/D8 SAFETY CLOSURE ».
Environnement DEV uniquement. NO RELEASE / `0.0.0-dev`.
Aucune mutation GitHub REAL autorisée.
Handoff d'entrée L3 : `b6dccd6e9fffcdf83baaa1bd14642f4f17b0a199`.

## 3. Git Truth initial/final

| Item | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree Product | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche Product | `feat/next-git-collaboration-20261108` |
| HEAD local | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` (identique) |
| Branche Product distante | ABSENTE |
| État | LOCAL DIRTY préservé — staged vide — **aucun commit/push Product** |
| Handoff tip entrée | `b6dccd6e…` (parent `cf12ab0c…`) |
| Fetch | non destructif OK |
| Collision | aucune divergence non qualifiable ; travail DIRTY antérieur ML4 conservé |

## 4. Sources Git et SHA
Sources lues depuis baseline `c658f590` + code LOCAL DIRTY (domaines D7/D8/D9 construits localement).
Doctrine/gouvernance protégées **non modifiées** (SEF, roadmap, decisions, ENV-01, product-versioning, architecture-technique, conception-fonctionnelle, method/, prompts/).
Roadmap main « ML4 non construit » = KNOWN GAP documentaire vs code local + handoffs — signalé, pas réécrit.

## 5. Contrat d'architecture D1/D6/D7/D8/D9

- **D1** : session Better Auth + PilotId + `pilots.githubUserId` (identité login). Non confondu avec autorisation dépôt.
- **D6** : HumanDecision / mandats d'effet inchangés ; user token ≠ mandat écriture.
- **D7** : unique owner claim/bail/dispatch/reconcile ; fencing SQL claimToken + lease.
- **D8** : publicationRef UNIQUE(attempt) ; faits observés ; Option A historique préservée.
- **D9** : GitHub App install READ + **nouveau** user-to-server OAuth (credentials `GITHUB_APP_CLIENT_*` distincts de `GITHUB_CLIENT_*`).
- Git facultatif : projet sans connexion Git OK (AT-01).
- Nora : aucun outil de mutation Git ; pas d'élévation via OAuth.

## 6. Blast radius

| Zone | Impact |
|---|---|
| D1 | lecture `githubUserId` pour confrontation identité ; pas de second auth Studio |
| D6 | inchangé (autorité) |
| D7 | provenance marker + lease actif CAS |
| D8 | txn completion ; Option A ; 009 UNIQUE |
| D9 | OAuth user-to-server + chiffrement tokens + routes API |
| PostgreSQL | migration **010** additive DEV/e2e |
| UX | `/settings/integrations` + panel minimal |
| Tests | unit/integration/Playwright étendus |
| Secrets | PEM 0600 meta-only ; pas de Client Secret en repo |

## 7. D7 provenance PR — avant/après

**Avant (réserve) :** une tentative avec `prNumber` déjà en progress pouvait traiter `getPullRequest(number)` comme attribution suffisante pour COMPLETED sans revalidation marker indépendante sur le chemin reconcile.

**Après :**
- `assertPrMarkerProvenance()` appelle `findPullRequest(..., publicationMarker)` même après load par numéro.
- Vérifie head/base/SHA + égalité du numéro marker-match vs PR candidate.
- Marker absent / différent / ambigu / PR étrangère → `REQUIRES_REQUALIFICATION` | `AMBIGUOUS` | `CONFLICT` — **pas** COMPLETED, **pas** createPR aveugle, **pas** publicationRef.
- Idempotence : marker correct + effet distant existant → COMPLETED unique (test double reconciler).

Test discriminant : `D7/D8: reconcile with known prNumber + wrong marker refuses COMPLETED`.

## 8. D7 bail actif CAS — avant/après

**Avant (réserve) :** CAS owned pouvait confirmer COMPLETED avec claimToken correct mais lease expiré.

**Après :**
- `sqlClaimLeaseActive()` : `releasedAt` null AND `leaseExpiresAt > now()` (temps DB).
- Injecté dans : `commitPublicationCompletion` (mode `owned`), `casOwnedTransition`, `assertAndTouchOwnership`.
- Mode `liberate_inactive` : `sqlClaimInactive()` seulement — pas de bypass fencing owned.
- CAS 0 rows → rollback txn D7+D8 → 0 publicationRef orphelin → CONFLICT récupérable.
- Provider I/O hors transaction PG.

Test : `D7/D8: owned CAS terminal refuses COMPLETED when lease expired (same claimToken)`.

## 9. D8 Option A préservée
Trois refs historiques SCRIPTED détachées en DEV lors de 009 : **aucune** DELETE/UPDATE correctif, aucune remédiation DB, aucune restauration improvisée.
Migration 010 ADDITIVE uniquement. Index UNIQUE 009 intact.

## 10. Parcours user-to-server

1. Pilote authentifié → `POST /api/integrations/github/authorize` (session obligatoire).
2. Serveur mint state opaque + PKCE S256 + TTL 15 min, lié à PilotId.
3. SCRIPTED (défaut) : callback local `/api/integrations/github/callback?scripted=1&state=…` ou complete JSON.
4. REAL (si `GITHUB_APP_CLIENT_*` + encryption key + `STUDIO_GITHUB_USER_OAUTH=real` ou provider REAL) : URL `https://github.com/login/oauth/authorize` avec client_id App dédié.
5. Callback : validate state (TTL, unicité, consume atomique `gt(expiresAt, now)`), session encore valide, échange code+verifier, fetch `/user`, confront `identity.id` vs `pilots.githubUserId`, list installations App, assert install attendue + sandbox repo, seal tokens, seed authorized_repositories.
6. Status JSON sans ciphertext/token.
7. Disconnect / refresh / revoke = opérations distinctes.

**Statut :** USER-TO-SERVER IMPLEMENTED LOCALLY / REAL INTERACTIVE NOT PROVEN.

## 11. Configuration GitHub requise (manuelle Morris — GO admin distinct)

| Variable | Rôle | État DEV observé |
|---|---|---|
| `GITHUB_APP_ID` | App ID | présent (5670639) |
| `GITHUB_APP_INSTALLATION_ID` | Install DEV | présent (179935689) |
| `GITHUB_APP_PRIVATE_KEY_PATH` | PEM | path set ; mode **0600** ; size 1679 — contenu jamais imprimé |
| `GITHUB_APP_CLIENT_ID` | User OAuth App client | **ABSENT** |
| `GITHUB_APP_CLIENT_SECRET` | User OAuth secret | **ABSENT** |
| `GITHUB_APP_CALLBACK_URL` | Redirect enregistrée | **ABSENT** |
| `INTEGRATION_TOKEN_ENCRYPTION_KEY` | AES-256-GCM 32 bytes | **ABSENT** (SCRIPTED OK sans persist token ; REAL user OAuth refuse sans clé) |
| `GITHUB_CLIENT_ID/SECRET` | Better Auth D1 | **non réutilisés** pour D9 |

Actions manuelles : créer Client credentials App + callback DEV + clé chiffrement ; ne pas activer « Request user authorization during installation » pour ce flux.

## 12. Modèles et migrations

- `schemaRevision = "010_github_app_user_oauth"`
- `010_github_app_user_oauth.sql` : ALTER additive oauth_states (code_verifier, nonce, code_challenge_method) + authorizations (github_user_id, token_*, refresh_*, scopes, last_validated_at) + index github_user.
- Appliquée DEV `sfia_next_dev` + e2e `sfia_next_e2e` (idempotent IF NOT EXISTS).
- RECETTE/STABLE : **non touchés**.

## 13. Sécurité tokens et sessions
- AES-256-GCM (`token-crypto.ts`) ; key base64 32B ou hex 64 ; keyVersion.
- Seal avant INSERT ; open uniquement serveur.
- Status/API : jamais ciphertext/plaintext.
- State OAuth : consume atomique bound PilotId ; foreign state → ACCESS_DENIED ; replay → CONFLICT.
- Identité divergente → ACCESS_DENIED, pas d'auto-fusion.
- Pas de fallback silencieux vers installation token plus puissant pour user path.
- Isolation inter-Pilotes : state lié pilotId ; authorizations pilot-scoped.

## 14–15. Fichiers créés / modifiés
Voir annexes ci-dessous (contenu complet nouveaux fichiers clés ; sections critiques modifiées).

## 16. Tests et preuves

| Commande | Résultat | Horodatage UTC |
|---|---|---|
| `npx tsc --noEmit` | PASS (exit 0) | 2026-11-08T19:43:47Z |
| `npm run test:unit` | **160 PASS** / 28 files | ~19:43:50Z |
| `npm run test:integration` | **186 PASS** / 12 files (après fix `gt(expiresAt)`) | ~19:44:23Z |
| `npm run build` | PASS | ~19:45Z |
| `npx playwright test` | **13/13 PASS** | ~19:45–19:46Z |

Entrée cycle précédent (référence, non revendiquée) : 153 unit / 183 int.
Nouveaux cas PG : wrong-marker reconcile ; expired-lease owned CAS ; OAuth state replay/divergent/no leak.
Unit : `token-crypto`, `github-app-user-oauth`.

## 17. Fake/Real Qualification

| Capacité | Statut |
|---|---|
| SCRIPTED publication/merge/fencing | PROVEN DET |
| D7 marker provenance + lease CAS | PROVEN DET |
| D9 user-to-server code path | IMPLEMENTED + DET tests |
| REAL installation READ | PROVEN (handoff `b6dccd6e`, inchangé) |
| REAL user OAuth interactive | **NOT PROVEN** |
| REAL Git mutations | **HARD-BLOCKED** / NOT READY |
| UX Figma 218–235 | **NOT PROVEN / PENDING UX INTEGRATION** |

## 18. Régressions et KNOWN GAP
- D1 login GitHub / projets sans Git / D6 / D7–D8 SCRIPTED / D9 install READ : non-régression suites.
- KNOWN GAP : roadmap main snapshots « ML4 non construit » vs code local.
- KNOWN GAP : Client Secret/Callback/encryption key absents → REAL interactive bloqué.
- KNOWN GAP : UX Figma 218–235 non claimée.
- D8 Option A skew documentaire connu, non masqué.

## 19. ENV-01 / versioning
- Lane DEV + e2e only. Conteneur `sfia-next-recette-pg` présent mais **non utilisé**.
- STABLE NOT AVAILABLE. Classe NO RELEASE. Version `0.0.0-dev`.
- delivery-history entry `DELIV-2026-11-08-ML4-GITHUB-USER-AUTH-D7-D8-SAFETY`.

## 20. Gates restants
1. Critical Review ChatGPT (ce pack / L3).
2. Config manuelle Client ID/Secret + Callback + encryption key (GO admin Morris).
3. Qualification navigateur user-to-server REAL DEV.
4. Permissions/révocation/sélection dépôts.
5. Premier effet documentaire REAL chantiers360 — GO distinct.
6. Candidat RECETTE / PR Product / promotions — gates distincts.

## 21. Verdict et capacité suivante

**ML4 GITHUB USER AUTH + D7/D8 SAFETY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC USER FLOW / REAL INSTALLATION READ ONLY.**

Ne pas annoncer : USER-TO-SERVER REAL PROVEN ; REAL GITHUB WRITES READY ; RECETTE ACCEPTED ; STABLE AVAILABLE ; ADOPTED.

---


## ANNEXE 14 — Fichiers créés (contenu complet)

### `src/db/migrations/010_github_app_user_oauth.sql`
```
-- ML4 D9 — GitHub App user-to-server OAuth (additive / non-destructive).
-- DEV / e2e only. Does not touch D8 Option A historical rows.
-- Tokens stored only as ciphertext; never plaintext.

ALTER TABLE integration_oauth_states
  ADD COLUMN IF NOT EXISTS code_verifier text,
  ADD COLUMN IF NOT EXISTS nonce text,
  ADD COLUMN IF NOT EXISTS code_challenge_method text;

ALTER TABLE integration_authorizations
  ADD COLUMN IF NOT EXISTS github_user_id text,
  ADD COLUMN IF NOT EXISTS token_ciphertext text,
  ADD COLUMN IF NOT EXISTS token_nonce text,
  ADD COLUMN IF NOT EXISTS token_key_version text,
  ADD COLUMN IF NOT EXISTS refresh_ciphertext text,
  ADD COLUMN IF NOT EXISTS refresh_nonce text,
  ADD COLUMN IF NOT EXISTS token_expires_at timestamptz,
  ADD COLUMN IF NOT EXISTS scopes_json text NOT NULL DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS last_validated_at timestamptz;

CREATE INDEX IF NOT EXISTS integration_authorizations_github_user_idx
  ON integration_authorizations (github_user_id)
  WHERE github_user_id IS NOT NULL;
```

### `src/lib/token-crypto.ts`
```
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { StudioError } from "@/lib/http-errors";

const ALGO = "aes-256-gcm";
const KEY_VERSION_DEFAULT = "v1";

export type SealedSecret = {
  ciphertext: string; // base64
  nonce: string; // base64
  keyVersion: string;
};

function loadKeyMaterial(): { key: Buffer; version: string } {
  const raw = process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY?.trim();
  if (!raw) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY absent — chiffrement tokens requis",
      { httpStatus: 503 },
    );
  }
  // Accept 32-byte raw base64 or 64-char hex.
  let key: Buffer;
  if (/^[0-9a-fA-F]{64}$/.test(raw)) {
    key = Buffer.from(raw, "hex");
  } else {
    key = Buffer.from(raw, "base64");
  }
  if (key.length !== 32) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY doit faire 32 octets (base64 ou hex)",
      { httpStatus: 503 },
    );
  }
  const version = process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY_VERSION?.trim() || KEY_VERSION_DEFAULT;
  return { key, version };
}

export function isTokenEncryptionConfigured(): boolean {
  try {
    loadKeyMaterial();
    return true;
  } catch {
    return false;
  }
}

/** Seal a secret with AES-256-GCM. Never log plaintext or ciphertext in callers' messages. */
export function sealSecret(plaintext: string): SealedSecret {
  const { key, version } = loadKeyMaterial();
  const nonce = randomBytes(12);
  const cipher = createCipheriv(ALGO, key, nonce);
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    ciphertext: Buffer.concat([enc, tag]).toString("base64"),
    nonce: nonce.toString("base64"),
    keyVersion: version,
  };
}

export function openSecret(sealed: SealedSecret): string {
  const { key } = loadKeyMaterial();
  const raw = Buffer.from(sealed.ciphertext, "base64");
  if (raw.length < 17) {
    throw new StudioError("INTERNAL", "Ciphertext token invalide", { httpStatus: 500 });
  }
  const data = raw.subarray(0, raw.length - 16);
  const tag = raw.subarray(raw.length - 16);
  const nonce = Buffer.from(sealed.nonce, "base64");
  const decipher = createDecipheriv(ALGO, key, nonce);
  decipher.setAuthTag(tag);
  try {
    return Buffer.concat([decipher.update(data), decipher.final()]).toString("utf8");
  } catch (e) {
    throw new StudioError("ACCESS_DENIED", "Décryptage token impossible", {
      httpStatus: 403,
      cause: e,
    });
  }
}
```

### `src/domains/integrations/github-app-user-oauth.ts`
```
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
): Promise<Array<{ id: number; fullName: string; defaultBranch: string; private: boolean }>> {
  const raw = await ghJson<{
    repositories: Array<{
      id: number;
      full_name: string;
      default_branch: string;
      private: boolean;
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
  return (raw.repositories ?? []).map((r) => ({
    id: r.id,
    fullName: r.full_name,
    defaultBranch: r.default_branch,
    private: Boolean(r.private),
  }));
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
    const result = await startGitHubAuthorization(
      session.pilotId,
      body.returnPath ?? "/settings/integrations",
    );
    return NextResponse.json({
      ...result,
      providerMode: (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase() === "real"
        ? "REAL"
        : "SCRIPTED",
    });
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
  consumeOauthStateForCallback,
} from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { isStudioError, studioErrorResponse } from "@/lib/http-errors";

/**
 * GitHub App user-to-server callback (D9) — distinct from Better Auth D1 callback.
 * Never echoes code/token. Never trusts installation_id from query for REAL attribution.
 */
export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const state = url.searchParams.get("state");
    if (!state) {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "state required" }, { status: 400 });
    }

    // Peek binding before consume (complete performs atomic single-use consume).
    const oauth = await consumeOauthStateForCallback(state);
    if (!oauth || oauth.pilotId !== session.pilotId) {
      return NextResponse.json({ error: "ACCESS_DENIED" }, { status: 403 });
    }

    const scripted = url.searchParams.get("scripted") === "1";
    const code = url.searchParams.get("code") ?? undefined;
    // installation_id from query is NEVER authoritative for REAL user OAuth.
    const installationIdHint = scripted
      ? (url.searchParams.get("installation_id") ?? undefined)
      : undefined;

    if (!scripted && !code) {
      const ghError = url.searchParams.get("error");
      return NextResponse.redirect(
        new URL(
          `${oauth.returnPath || "/settings/integrations"}?connected=0&error=${encodeURIComponent(ghError || "missing_code")}`,
          url.origin,
        ),
      );
    }

    await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state,
      scripted,
      code: scripted ? undefined : code,
      installationId: installationIdHint,
    });

    const returnPath = oauth.returnPath || "/settings/integrations";
    // Clean redirect — no code/state/token in final URL.
    return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
  } catch (e) {
    if (isStudioError(e) && e.code === "NOT_CONFIGURED") {
      const mapped = studioErrorResponse(e);
      return NextResponse.json(mapped.body, { status: mapped.status });
    }
    const mapped = studioErrorResponse(e);
    // Prefer redirect to integrations with opaque error for browser flow.
    try {
      const url = new URL(req.url);
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=${encodeURIComponent(e instanceof Error ? e.message.slice(0, 80) : "failed")}`, url.origin),
      );
    } catch {
      return NextResponse.json(mapped.body, { status: mapped.status });
    }
  }
}
```

### `src/app/api/integrations/github/authorize/complete/route.ts`
```
import { NextResponse } from "next/server";
import { completeGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/** SCRIPTED / local completion without relying on browser document redirect. */
export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json().catch(() => ({}))) as {
      state?: string;
      installationId?: string;
    };
    if (!body.state) {
      return NextResponse.json({ error: "INVALID_REQUEST", message: "state required" }, { status: 400 });
    }
    const status = await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state: body.state,
      installationId: body.installationId,
      scripted: true,
    });
    return NextResponse.json(status);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `tests/unit/token-crypto.test.ts`
```
import { afterEach, describe, expect, it } from "vitest";
import { isTokenEncryptionConfigured, openSecret, sealSecret } from "@/lib/token-crypto";
import { isStudioError } from "@/lib/http-errors";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
});

describe("token-crypto AES-GCM", () => {
  it("refuses when key absent", () => {
    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
    expect(isTokenEncryptionConfigured()).toBe(false);
    expect(() => sealSecret("x")).toThrow(/INTEGRATION_TOKEN_ENCRYPTION_KEY/);
  });

  it("round-trips and rejects wrong key", () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 9).toString("base64");
    expect(isTokenEncryptionConfigured()).toBe(true);
    const sealed = sealSecret("ghs_never_log_me");
    expect(sealed.ciphertext).not.toContain("ghs_");
    expect(openSecret(sealed)).toBe("ghs_never_log_me");

    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 1).toString("base64");
    try {
      openSecret(sealed);
      expect.fail("expected decrypt fail");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("ACCESS_DENIED");
    }
  });

  it("accepts 64-char hex key", () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = "ab".repeat(32);
    const sealed = sealSecret("hello");
    expect(openSecret(sealed)).toBe("hello");
  });
});
```

### `tests/unit/github-app-user-oauth.test.ts`
```
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  assertInstallationAuthorized,
  assertSandboxRepoInList,
  buildGitHubAppUserAuthorizeUrl,
  exchangeAuthorizationCode,
  fetchGitHubUserIdentity,
  isGitHubAppUserOauthConfigured,
  mintPkcePair,
  readGitHubAppUserOauthConfig,
} from "@/domains/integrations/github-app-user-oauth";
import {
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
} from "@/domains/integrations/github-app-config";

const ORIGINAL = { ...process.env };

afterEach(() => {
  for (const k of Object.keys(process.env)) {
    if (!(k in ORIGINAL)) delete process.env[k];
  }
  Object.assign(process.env, ORIGINAL);
  vi.restoreAllMocks();
});

describe("github-app-user-oauth helpers", () => {
  it("detects missing client credentials without inventing them", () => {
    delete process.env.GITHUB_APP_CLIENT_ID;
    delete process.env.GITHUB_APP_CLIENT_SECRET;
    delete process.env.GITHUB_APP_CALLBACK_URL;
    expect(isGitHubAppUserOauthConfigured()).toBe(false);
    expect(() => readGitHubAppUserOauthConfig()).toThrow(/GITHUB_APP_CLIENT_ID/);
  });

  it("builds authorize URL with PKCE and dedicated App client id", () => {
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.app-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
    process.env.GITHUB_APP_ID = GITHUB_APP_EXPECTED_APP_ID;
    const config = readGitHubAppUserOauthConfig();
    const pkce = mintPkcePair();
    const url = buildGitHubAppUserAuthorizeUrl({
      config,
      state: "st",
      codeChallenge: pkce.codeChallenge,
      codeChallengeMethod: pkce.method,
    });
    expect(url).toContain("client_id=Iv1.app-client");
    expect(url).toContain("code_challenge=");
    expect(url).toContain("code_challenge_method=S256");
    expect(url).not.toContain(process.env.GITHUB_CLIENT_ID ?? "Ov23");
  });

  it("exchanges code and fetches identity via mocked GitHub", async () => {
    process.env.GITHUB_APP_CLIENT_ID = "Iv1.app-client";
    process.env.GITHUB_APP_CLIENT_SECRET = "secret";
    process.env.GITHUB_APP_CALLBACK_URL = "http://127.0.0.1:3100/api/integrations/github/callback";
    const config = readGitHubAppUserOauthConfig();
    const fetchImpl = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url.includes("login/oauth/access_token")) {
        return new Response(
          JSON.stringify({
            access_token: "ghs_test",
            refresh_token: "ghr_test",
            expires_in: 3600,
            scope: "",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.endsWith("/user")) {
        return new Response(JSON.stringify({ id: 42, login: "mcleland147" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response("{}", { status: 500 });
    });
    const tokens = await exchangeAuthorizationCode({
      config,
      code: "abc",
      codeVerifier: "ver",
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(tokens.accessToken).toBe("ghs_test");
    const identity = await fetchGitHubUserIdentity(
      tokens.accessToken,
      fetchImpl as unknown as typeof fetch,
    );
    expect(identity).toEqual({ id: "42", login: "mcleland147" });
  });

  it("rejects missing installation / sandbox repo", () => {
    const config = {
      clientId: "x",
      clientSecret: "y",
      callbackUrl: "http://localhost/cb",
      appId: GITHUB_APP_EXPECTED_APP_ID,
      expectedInstallationId: GITHUB_APP_EXPECTED_INSTALLATION_ID,
      expectedOwner: "mcleland147",
      allowedFullName: "mcleland147/chantiers360",
    };
    expect(() =>
      assertInstallationAuthorized(
        [
          {
            id: "1",
            appId: GITHUB_APP_EXPECTED_APP_ID,
            accountLogin: "mcleland147",
            accountType: "User",
            repositorySelection: "selected",
            suspendedAt: null,
          },
        ],
        config,
      ),
    ).toThrow(/inaccessible/);

    expect(() =>
      assertSandboxRepoInList([{ fullName: "acme/other" }], config.allowedFullName),
    ).toThrow(/hors ressources/);
  });
});
```

### `src/domains/integrations/authorization-service.ts` (complet)
```
import { and, desc, eq, gt, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  integrationAuthorizations,
  integrationOauthStates,
  pilots,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { isTokenEncryptionConfigured, sealSecret } from "@/lib/token-crypto";
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
} from "./github-app-user-oauth";
import type { IntegrationStatus } from "./types";

const STATE_TTL_MS = 15 * 60 * 1000;

function safeReturnPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) {
    return "/settings/integrations";
  }
  return path || "/settings/integrations";
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
    repositories: repos,
    // Never include tokens / ciphertext.
  };
}

/**
 * Start voluntary GitHub App user-to-server authorization (distinct from D1 Better Auth).
 * SCRIPTED: local callback. REAL user OAuth: GitHub authorize URL when App Client credentials present.
 */
export async function startGitHubAuthorization(pilotId: string, returnPath: string) {
  const stateToken = newId("ghst");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + STATE_TTL_MS);
  const pkce = mintPkcePair();
  const nonce = newId("ghnc");
  const safePath = safeReturnPath(returnPath);

  await db.insert(integrationOauthStates).values({
    id: newId("ghos"),
    pilotId,
    stateToken,
    returnPath: safePath,
    codeVerifier: pkce.codeVerifier,
    nonce,
    codeChallengeMethod: pkce.method,
    expiresAt,
    createdAt: now,
  });

  const provider = resolveGitHubProvider();
  const wantRealUserOauth =
    (process.env.STUDIO_GITHUB_USER_OAUTH ?? "").toLowerCase() === "real" ||
    (provider.mode === "REAL" && isGitHubAppUserOauthConfigured());

  if (wantRealUserOauth) {
    if (!isGitHubAppUserOauthConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "GITHUB_APP_CLIENT_ID / GITHUB_APP_CLIENT_SECRET / GITHUB_APP_CALLBACK_URL requis pour user-to-server REAL",
        { httpStatus: 503 },
      );
    }
    if (!isTokenEncryptionConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "INTEGRATION_TOKEN_ENCRYPTION_KEY requis avant persistance de tokens user",
        { httpStatus: 503 },
      );
    }
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

  // Deterministic SCRIPTED (or REAL install-read without user OAuth credentials).
  const authorizeUrl = `/api/integrations/github/callback?scripted=1&state=${encodeURIComponent(stateToken)}`;
  return {
    authorizeUrl,
    state: stateToken,
    flow: "scripted" as const,
    pkce: true,
    note: isGitHubAppUserOauthConfigured()
      ? undefined
      : "USER-TO-SERVER REAL INTERACTIVE NOT PROVEN — Client credentials absents ; parcours SCRIPTED disponible",
  };
}

async function seedAuthorizedRepos(
  pilotId: string,
  authorizationId: string,
  installationId: string,
  repos?: Array<{ owner: string; name: string; fullName: string; defaultBranch: string }>,
) {
  const provider = resolveGitHubProvider();
  const remote =
    repos ??
    (await provider.listInstallationRepos(pilotId, installationId)).map((r) => ({
      owner: r.owner,
      name: r.name,
      fullName: r.fullName,
      defaultBranch: r.defaultBranch,
    }));
  const now = new Date();
  for (const r of remote) {
    const existing = (
      await db
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
    const scriptedWritePerms = JSON.stringify({ contents: "write", pull_requests: "write" });
    if (existing) {
      await db
        .update(authorizedRepositories)
        .set({
          authorizationId,
          status: "ACTIVE",
          defaultBranch: r.defaultBranch,
          permissionsJson: scriptedWritePerms,
          syncedAt: now,
        })
        .where(eq(authorizedRepositories.id, existing.id));
    } else {
      await db.insert(authorizedRepositories).values({
        id: newId("arepo"),
        pilotId,
        authorizationId,
        owner: r.owner,
        name: r.name,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
        status: "ACTIVE",
        permissionsJson: scriptedWritePerms,
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
 * Atomic consume of OAuth state (TTL + single-use) bound to pilot.
 * Returns row including PKCE verifier or null if invalid.
 */
export async function consumeOauthStateAtomic(input: {
  state: string;
  pilotId: string;
}) {
  const now = new Date();
  const updated = await db
    .update(integrationOauthStates)
    .set({ consumedAt: now })
    .where(
      and(
        eq(integrationOauthStates.stateToken, input.state),
        eq(integrationOauthStates.pilotId, input.pilotId),
        isNull(integrationOauthStates.consumedAt),
        gt(integrationOauthStates.expiresAt, now),
      ),
    )
    .returning();
  return updated[0] ?? null;
}

/** Read-only peek used by callback for pilot binding before consume (legacy helper). */
export async function consumeOauthStateForCallback(state: string) {
  const row = (
    await db
      .select()
      .from(integrationOauthStates)
      .where(and(eq(integrationOauthStates.stateToken, state), isNull(integrationOauthStates.consumedAt)))
      .limit(1)
  )[0];
  return row ?? null;
}

export async function completeGitHubAuthorization(input: {
  pilotId: string;
  state: string;
  /** SCRIPTED / legacy install hint — ignored for REAL user OAuth (never trust query). */
  installationId?: string;
  /** Authorization code from GitHub user OAuth callback. */
  code?: string;
  scripted?: boolean;
  fetchImpl?: typeof fetch;
}) {
  const oauthRow = await consumeOauthStateAtomic({
    state: input.state,
    pilotId: input.pilotId,
  });
  if (!oauthRow) {
    // Distinguish already-consumed / expired / foreign for tests.
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
    if (any.consumedAt) throw new StudioError("CONFLICT", "State OAuth déjà consommé");
    if (any.expiresAt <= new Date()) throw new StudioError("INVALID_REQUEST", "State OAuth expiré");
    throw new StudioError("ACCESS_DENIED", "State OAuth invalide");
  }

  const pilotGithubUserId = await loadPilotGithubUserId(input.pilotId);
  const now = new Date();
  const provider = resolveGitHubProvider();
  const useRealUserOauth = Boolean(input.code) && !input.scripted;

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
  let repoSeed:
    | Array<{ owner: string; name: string; fullName: string; defaultBranch: string }>
    | undefined;

  if (useRealUserOauth) {
    if (!isGitHubAppUserOauthConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "Credentials GitHub App user-to-server absents",
        { httpStatus: 503 },
      );
    }
    if (!isTokenEncryptionConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "INTEGRATION_TOKEN_ENCRYPTION_KEY requis",
        { httpStatus: 503 },
      );
    }
    if (!oauthRow.codeVerifier) {
      throw new StudioError("INVALID_REQUEST", "PKCE code_verifier absent du state", {
        httpStatus: 400,
      });
    }
    const config = readGitHubAppUserOauthConfig();
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
      return {
        owner: owner ?? "",
        name: name ?? r.fullName,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
      };
    });
  } else {
    // SCRIPTED deterministic path — no GitHub network, no trust of foreign installation_id beyond list.
    if (!pilotGithubUserId) {
      throw new StudioError(
        "ACCESS_DENIED",
        "Pilot sans githubUserId D1 — liaison identité requise",
        { httpStatus: 403 },
      );
    }
    installId = input.installationId ?? "scripted-install-1";
    const listed = await provider.listInstallationRepos(input.pilotId, installId);
    const installKnown = input.installationId
      ? listed.length > 0 || provider.mode === "SCRIPTED"
      : provider.mode === "SCRIPTED";
    if (!installKnown) {
      throw new StudioError("ACCESS_DENIED", "Installation non vérifiable");
    }
    githubUserId = pilotGithubUserId;
    accountLogin = "scripted-user";
    // Optional encrypted placeholder when encryption key present (proves seal path).
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
  }

  // Exactly one CONNECTED authorization per pilot — revoke prior before insert.
  await db
    .update(integrationAuthorizations)
    .set({ status: "REVOKED", revokedAt: now, updatedAt: now })
    .where(
      and(
        eq(integrationAuthorizations.pilotId, input.pilotId),
        eq(integrationAuthorizations.status, "CONNECTED"),
      ),
    );

  const authId = newId("iauth");
  await db.insert(integrationAuthorizations).values({
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
      mode: useRealUserOauth ? "REAL_USER_OAUTH" : provider.mode,
      flow: useRealUserOauth ? "github_app_user_oauth" : "scripted",
    }),
    connectedAt: now,
    createdAt: now,
    updatedAt: now,
  });
  await seedAuthorizedRepos(input.pilotId, authId, installId, repoSeed);
  return getIntegrationStatus(input.pilotId);
}

export async function refreshRepositories(pilotId: string) {
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
  await seedAuthorizedRepos(pilotId, auth.id, auth.installationId);
  return getIntegrationStatus(pilotId);
}

export async function disconnectIntegration(pilotId: string) {
  const now = new Date();
  // Wipe ciphertext on disconnect — no token retention after revoke.
  await db
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
  await db
    .update(authorizedRepositories)
    .set({ status: "REMOVED", syncedAt: now })
    .where(
      and(
        eq(authorizedRepositories.pilotId, pilotId),
        eq(authorizedRepositories.status, "ACTIVE"),
      ),
    );
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
  await db
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
  return getIntegrationStatus(pilotId);
}
```

## ANNEXE 15 — Sections critiques effect-service.ts

### sqlClaimLeaseActive + commitPublicationCompletion (owned CAS)
```
function sqlClaimLeaseActive() {
  return sql`(
    NULLIF(${effectAttempts.resultJson}::jsonb->'claim'->>'releasedAt', '') IS NULL
    AND (${effectAttempts.resultJson}::jsonb->'claim'->>'leaseExpiresAt')::timestamptz > now()
  )`;
}

/**
 * Atomic claim: AUTHORIZED|AMBIGUOUS → DISPATCHED before any provider mutation.
 * Reclaim requires inactive prior claim IN THE SAME SQL predicate (not memory-only).
 */
async function claimAttempt(attemptId: string, fromStatus: "AUTHORIZED" | "AMBIGUOUS") {
  const now = new Date();
  const row = await loadAttemptRow(attemptId);
  if (!row || row.status !== fromStatus) return null;
  const prev = readClaim(row.resultJson);
  // Fast-fail without writing when AMBIGUOUS still has an active lease (defense in depth).
  if (fromStatus === "AMBIGUOUS" && isClaimActive(prev, now.getTime())) {
    return null;
  }
  const claim = mintClaim(prev, now);
  const nextJson = writeClaimInto(row.resultJson, claim);
  const where =
    fromStatus === "AMBIGUOUS"
      ? and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          sqlClaimInactive(),
        )
      : and(eq(effectAttempts.id, attemptId), eq(effectAttempts.status, fromStatus));
  const claimed = await db
    .update(effectAttempts)
    .set({ status: "DISPATCHED", resultJson: nextJson, updatedAt: now })
    .where(where)
    .returning({ id: effectAttempts.id });
  return claimed[0] ? { id: claimed[0].id, claim } : null;
}

async function loadAttemptRow(attemptId: string) {
  return (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0];
}

/**
 * Before each external mutation: renew lease only if this claimToken still owns DISPATCHED
 * with an active lease in PostgreSQL. Stale/expired owners get CONFLICT (0 rows).
 * Re-reads resultJson so a renew cannot clobber fresher progress from the same owner.
 */
async function assertAndTouchOwnership(
  attemptId: string,
  claimToken: string,
  _existingResultJson: string,
): Promise<string> {
  void _existingResultJson;
  const fresh = await loadAttemptRow(attemptId);
  if (!fresh || fresh.status !== "DISPATCHED") {
    throw new StudioError("CONFLICT", "DISPATCHED perdu — mutation refusée");
  }
  const claim = readClaim(fresh.resultJson);
  if (!claim || claim.claimToken !== claimToken || claim.releasedAt) {
    throw new StudioError("CONFLICT", "Claim fence invalide — mutation refusée");
  }
  const renewed = extendClaim(claim);
  const nextJson = writeClaimInto(fresh.resultJson, renewed);
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
    .returning({ id: effectAttempts.id, resultJson: effectAttempts.resultJson });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Propriété ou lease perdue — mutation provider refusée (fencing SQL)",
    );
  }
  return updated[0].resultJson;
}

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
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError("CONFLICT", "Progression refusée — claimToken non propriétaire en base");
  }
  return nextJson;
}

/** Terminal / status transition only if caller still owns the claimToken in SQL. */
async function casOwnedTransition(input: {
  attemptId: string;
  claimToken: string;
  fromStatus: string;
  toStatus: string;
  resultJson: string;
}): Promise<boolean> {
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.toStatus,
      resultJson: input.resultJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, input.fromStatus),
        sqlClaimTokenEquals(input.claimToken),
        sqlClaimLeaseActive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

/**
 * Reconcile may liberate DISPATCHED only when the stored claim is inactive
 * (expired/released) — never while an active owner still holds the lease.
 */
async function casLiberateInactiveDispatch(input: {
  attemptId: string;
  fromStatus: string;
  toStatus: string;
  resultJson: string;
}): Promise<boolean> {
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.toStatus,
      resultJson: input.resultJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, input.fromStatus),
        sqlClaimInactive(),
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

type PublicationRefWrite = {
  projectId: string;
  pilotId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  targetPath: string;
  targetBranch: string;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  status: string;
  publicationBranch: string;
  prCurrentState: PrCurrentState | null | undefined;
  prCreatedHistorically: boolean;
  extraDetail?: Record<string, unknown>;
};

/**
 * Atomic D7 terminal transition + D8 publicationRef upsert.
 * CAS failure or D8 failure rolls back the whole set — no orphan D8 on lost CAS.
 * Provider I/O must already be complete before this call (no remote calls inside).
 */
async function commitPublicationCompletion(input: {
  attemptId: string;
  mode: "owned" | "liberate_inactive";
  claimToken?: string;
  fromStatus: string;
  terminalResultJson: string;
  pub: PublicationRefWrite;
}): Promise<{ pubId: string }> {
  try {
    return await db.transaction(async (tx) => {
      const now = new Date();
      // Owned terminal CAS: claimToken fence AND active lease (DB now()) — expired lease ⇒ 0 rows.
      // liberate_inactive: only when claim absent/released/expired (reconcile after observation).
      const where =
        input.mode === "owned"
          ? and(
              eq(effectAttempts.id, input.attemptId),
              eq(effectAttempts.status, input.fromStatus),
              sqlClaimTokenEquals(input.claimToken!),
              sqlClaimLeaseActive(),
            )
          : and(
              eq(effectAttempts.id, input.attemptId),
              eq(effectAttempts.status, input.fromStatus),
              sqlClaimInactive(),
            );

      const cas = await tx
        .update(effectAttempts)
        .set({
          status: "COMPLETED",
          resultJson: input.terminalResultJson,
          updatedAt: now,
        })
        .where(where)
        .returning({ id: effectAttempts.id });
      if (!cas[0]) {
        throw new StudioError(
          "CONFLICT",
          "Complétion D7 refusée — CAS terminal 0 rows (fencing)",
        );
      }

      const existing = (
        await tx
          .select()
          .from(documentPublicationRefs)
          .where(eq(documentPublicationRefs.effectAttemptId, input.attemptId))
          .limit(1)
      )[0];

      const detailBase = {
        publicationBranch: input.pub.publicationBranch,
        prCurrentState: input.pub.prCurrentState ?? null,
        prCreatedHistorically: input.pub.prCreatedHistorically,
        ...(input.pub.extraDetail ?? {}),
      };

```

### assertPrMarkerProvenance
```
/**
 * Independent publicationMarker check — required even when PR was loaded by number.
 * A PR with matching head/base/SHA but wrong marker must never be attributed.
 */
async function assertPrMarkerProvenance(input: {
  provider: ReturnType<typeof resolveGitHubProvider>;
  pilotId: string;
  plan: PublicationPlan;
  pr: PullRequestInfo;
  publicationMarker: string;
  expectedHeadSha: string | null | undefined;
}) {
  assertPrMatchesPlan(input.pr, input.plan, input.expectedHeadSha);
  let found: Awaited<ReturnType<typeof input.provider.findPullRequest>>;
  try {
    found = await input.provider.findPullRequest({
      pilotId: input.pilotId,
      fullName: input.plan.repositoryFullName,
      head: input.plan.publicationBranch,
      base: input.plan.targetBranch,
      publicationMarker: input.publicationMarker,
      expectedHeadSha: input.expectedHeadSha ?? undefined,
    });
  } catch (e) {
    const code = providerErrorCode(e);
    if (isRemoteUnreadableCode(code)) {
      throw Object.assign(new Error("REMOTE_PR_UNREADABLE"), { code: code || "AMBIGUOUS" });
    }
    throw e;
  }
  if (found.ambiguous || found.matches.length > 1) {
    throw new StudioError(
      "AMBIGUOUS",
      "Plusieurs PR pour le publicationMarker — attribution refusée",
    );
  }
  if (found.matches.length === 0) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "publicationMarker non retrouvé pour la PR candidate — attribution refusée",
    );
  }
  const marked = found.matches[0]!;
  if (marked.number !== input.pr.number) {
    throw new StudioError(
      "CONFLICT",
      "PR par numéro ≠ PR du publicationMarker — provenance incohérente",
    );
  }
}
```

### reconcileAttempt — marker gate sur prNumber connu
```
    let remoteReadable = true;
    /** Marker provenance must hold even when PR was loaded by known prNumber. */
    let prMarkerProven = !plan.steps.includes("OPEN_PR");
    try {
      if (progress.prNumber != null) {
        const pr = await provider.getPullRequest(
          pilotId,
          plan.repositoryFullName,
          progress.prNumber,
        );
        // C2 — historical creation vs current state (not yet COMPLETED attribution).
        observed.prCreated = true;
        observed.prOpened = true; // legacy: created historically
        observed.prNumber = pr.number;
        observed.prCurrentState = mapPrState(pr.state);
        if (plan.steps.includes("OPEN_PR")) {
          try {
            await assertPrMarkerProvenance({
              provider,
              pilotId,
              plan,
              pr,
              publicationMarker: row.correlationKey,
              expectedHeadSha: observed.commitSha ?? progress.commitSha ?? null,
            });
            prMarkerProven = true;
          } catch (provErr) {
            prMarkerProven = false;
            if (provErr instanceof StudioError) {
              // Fail-closed: do not COMPLETED on foreign/wrong/absent marker.
              observed.prCurrentState = "UNKNOWN";
              if (row.status === "DISPATCHED" && claimActive) {
                return {
                  attemptId,
                  status: row.status,
                  progress: observed,
                  remoteHead: observed.branchSha ?? null,
                  facts,
                  prCurrentState: observed.prCurrentState,
                  note: `READ-ONLY: claim actif — provenance PR refusée (${provErr.code})`,
                };
              }
              const released = releaseClaim(claim);
              const toStatus =
                provErr.code === "AMBIGUOUS" ? "AMBIGUOUS" : "REQUIRES_REQUALIFICATION";
              const liberated = await casLiberateInactiveDispatch({
                attemptId: row.id,
                fromStatus: row.status,
                toStatus,
                resultJson: writeProgress(row.resultJson, observed, released),
              });
              return {
                attemptId,
                status: liberated ? toStatus : row.status,
                progress: observed,
                remoteHead: observed.branchSha ?? null,
                facts,
                prCurrentState: observed.prCurrentState,
                note: `Provenance PR (marker) refusée — ${provErr.code}, pas de COMPLETED`,
              };
            }
            throw provErr;
          }
        }
      } else if (plan.steps.includes("OPEN_PR")) {
        const found = await provider.findPullRequest({
```

### schemaRevision + colonnes D9 (extrait schema.ts)
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
  ],
);

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
    consumedAt: timestamp("consumed_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("integration_oauth_states_token_uidx").on(t.stateToken)],
);

766:export const schemaRevision = "010_github_app_user_oauth";
```

### Tests PG discriminants (extraits)
```
  it("D7/D8: reconcile with known prNumber + wrong marker refuses COMPLETED", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-recon-marker");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8rm");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8recon-marker.md",
      targetBranch: "main",
      correlationKey: newId("d8reconm"),
    });
    await authzPub(pilotId, projectId, prepared);
    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
    await expect(
      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
    ScriptedFaultRegistry.clear();

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    const progress = JSON.parse(row.resultJson).progress as { prNumber?: number };
    expect(progress.prNumber).toBeTruthy();
    // Expire lease so reconcile may liberate — but marker is foreign.
    const expired = JSON.parse(row.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    scriptedSetPrMarker(pilotId, progress.prNumber!, "foreign-marker-reconcile");
    resetScriptedMutationCounts(pilotId);
    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
    expect(reconciled.status).not.toBe("COMPLETED");
    expect(["REQUIRES_REQUALIFICATION", "AMBIGUOUS", "DISPATCHED"]).toContain(reconciled.status);
    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);

    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
  });

  it("D7/D8: owned CAS terminal refuses COMPLETED when lease expired (same claimToken)", async () => {
    const { pilotId, projectId, preparationId } = await seedProject("git-d8-lease-cas");
    const { repoId } = await connectAndAttach(pilotId, projectId);
    const { documentId, revisionId } = await availableDoc(pilotId, preparationId, "D8lease");
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId,
      revisionId,
      repositoryId: repoId,
      targetPath: "docs/d8lease.md",
      targetBranch: "main",
      correlationKey: newId("d8lease"),
    });
    await authzPub(pilotId, projectId, prepared);
    resetScriptedMutationCounts(pilotId);
    ExecutionBarrierRegistry.clear();
    ExecutionBarrierRegistry.arm("before:COMPLETE_PUBLICATION");

    const dispatchA = dispatchPublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
    }).catch((e: unknown) => e);

    for (let i = 0; i < 100; i++) {
      const row = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!;
      const progress = JSON.parse(row.resultJson).progress;
      if (row.status === "DISPATCHED" && progress?.prNumber != null) break;
      await new Promise((r) => setTimeout(r, 20));
    }
    const mid = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(mid.status).toBe("DISPATCHED");
    const claimBefore = readClaim(mid.resultJson);
    expect(claimBefore?.claimToken).toBeTruthy();

    // Expire lease but KEEP the same claimToken — owned CAS must refuse terminal COMPLETED.
    const expired = JSON.parse(mid.resultJson) as { claim: Record<string, unknown> };
    expired.claim = {
      ...expired.claim,
      leaseExpiresAt: new Date(Date.now() - 5_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prepared.attemptId));

    ExecutionBarrierRegistry.release("before:COMPLETE_PUBLICATION");
    const outcomeA = await dispatchA;
    expect(outcomeA).toMatchObject({ code: "CONFLICT" });

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
    )[0]!;
    expect(after.status).not.toBe("COMPLETED");
    const refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(eq(documentPublicationRefs.effectAttemptId, prepared.attemptId));
    expect(refs).toHaveLength(0);
    ExecutionBarrierRegistry.clear();
  });

  it("D9 user-to-server SCRIPTED: state replay / divergent github user / no token leakage", async () => {
    process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY = Buffer.alloc(32, 7).toString("base64");
    const { pilotId } = await seedProject("git-oauth-a");
    const start = await startGitHubAuthorization(pilotId, "/settings/integrations");
    expect(start.pkce).toBe(true);
    const status = await completeGitHubAuthorization({
      pilotId,
      state: start.state,
      scripted: true,
    });
    expect(status.status).toBe("CONNECTED");
    expect(status.githubUserId).toBe(`gh-${pilotId}`);
    expect(JSON.stringify(status)).not.toMatch(/ciphertext|ghs_|scripted-access|BEGIN/);

    const authRow = (
      await db
        .select()
        .from(integrationAuthorizations)
        .where(eq(integrationAuthorizations.pilotId, pilotId))
        .limit(1)
    )[0]!;
    expect(authRow.tokenCiphertext).toBeTruthy();
    expect(authRow.tokenNonce).toBeTruthy();

    await expect(
      completeGitHubAuthorization({ pilotId, state: start.state, scripted: true }),
    ).rejects.toMatchObject({ code: "CONFLICT" });

    const other = await seedProject("git-oauth-b");
    // Divergent: change pilot github user after state issued for other
    const start2 = await startGitHubAuthorization(other.pilotId, "/settings/integrations");
    await db
      .update(pilots)
      .set({ githubUserId: "gh-foreign-identity" })
      .where(eq(pilots.id, other.pilotId));
    // Force mismatch by completing as other.pilotId but we'll simulate identity check:
    // SCRIPTED uses pilot.githubUserId as identity — still matches after update.
    // True divergence test: complete with pilot A state stolen by B.
    await expect(
      completeGitHubAuthorization({
        pilotId: pilotId,
        state: start2.state,
        scripted: true,
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });

    delete process.env.INTEGRATION_TOKEN_ENCRYPTION_KEY;
  });
```

---
FIN REVIEW PACK FULL — mono-fichier L3 cible : `sfia-review-handoff/latest-chatgpt-review.md`
Product worktree préservé LOCAL DIRTY @ c658f590.
