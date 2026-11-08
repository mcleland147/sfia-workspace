# SFIA Review Pack FULL — ML4 GitHub User OAuth REAL INTERACTIVE READ (PREFLIGHT)

**SFIA v2.6 / CRITICAL / DELIVERY — QUALIFICATION BORNÉE**
**Date (Europe/Paris):** 2026-11-08 ~22:53 CET
**Product version:** NO RELEASE / `0.0.0-dev`
**ENV-01:** DEV uniquement — RECETTE/STABLE non touchés

---

## 1. Date et GO Morris

GO MORRIS : CONFIGURATION OAUTH DEV + PREMIER PARCOURS UTILISATEUR REAL EN LECTURE SEULE.

Objectif : démontrer Paramètres → Intégrations → GitHub REAL → consentement → callback → CONNECTED D9 → lecture sandbox — **sans** mutation GitHub.

Handoff d'entrée : `41373d2e829bda9de713ed37df4e4958e6aa5ae9`.

## 2. Git Truth initial et final

| Champ | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD / origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Branche Product distante | ABSENTE |
| État | LOCAL DIRTY préservé — **aucun** commit/push Product |
| Handoff tip entrée | `41373d2e…` (parent `59d07663…`) |
| Migrations 009–012 | présentes localement ; schéma DEV contient lease + oauth session cols |

## 3. Sources / refs / SHA

Sources SFIA/gouvernance/conception + handoff `41373d2e` + docs GitHub user-to-server consultés.
Code LOCAL prioritaire (pas main historique).

| Fichier | SHA-256 |
|---|---|
| `authorization-service.ts` | `e978529a274f75297a59c8c31ba90307345b8ea708be5b36e64f05c951bf5421` |
| `github-app-user-oauth.ts` | `fe4251b2920fc6260893091a75956f79bcc64ae7c9079ee17647e02ba5d644a2` |
| `scripted-github-guard.ts` | `316cca42ad604f550109024dc52d5d3f1cb5b391c3869f78b4476dd8a9c5a93f` |
| `callback/route.ts` | `986b860ae5eb78dbaefe282ab8f182a4532796031ab8aee5889716bb9b4901cc` |
| `authorize/route.ts` | `15bc94b0caf16e47adc2f9e7641c43b785151c2d65cf883508c20dd0713eb830` |
| `IntegrationsPanel.tsx` | `a2529168ae739c2338642e60288d0d840bdef43308501da98ceebb4a1316d514` |

## 4. Configuration DEV non sensible

| Clé | État |
|---|---|
| `STUDIO_LANE` | `DEV` |
| `STUDIO_PORT` / Better Auth URL | `3100` / `http://127.0.0.1:3100` |
| `DATABASE_URL` | postgres `127.0.0.1:5433` / db `sfia_next_dev` (host port mapping ; server port interne 5432) |
| `GITHUB_APP_ID` | `5670639` |
| `GITHUB_APP_INSTALLATION_ID` | `179935689` |
| `GITHUB_APP_ALLOWED_REPO` | `mcleland147/chantiers360` |
| `GITHUB_APP_EXPECTED_OWNER` | `mcleland147` |
| `GITHUB_APP_PRIVATE_KEY_PATH` | PRESENT (mode `0600`, PEM non lu dans ce pack) |
| `GITHUB_APP_CLIENT_ID` | PRÉPARÉ localement (préfixe `Iv23li…`, len=20) — observé via JWT `GET /app` |
| `GITHUB_APP_CALLBACK_URL` | PRÉPARÉ `http://127.0.0.1:3100/api/integrations/github/callback` |
| `INTEGRATION_TOKEN_ENCRYPTION_KEY` | PRÉPARÉ (aléatoire 32 bytes base64, gitignoré) |
| `GITHUB_APP_CLIENT_SECRET` | **ABSENT** |
| `STUDIO_GITHUB_USER_OAUTH` | **ABSENT** dans runtime tests (commenté : à activer `=real` seulement pour session interactive) |
| `STUDIO_ALLOW_SCRIPTED_GITHUB` | ABSENT opérateur ; vitest force `1` pour DET uniquement |
| D1 `GITHUB_CLIENT_ID/SECRET` | PRESENT — **distinct** Better Auth (ne pas réutiliser pour D9) |

`.env.local` gitignoré (`web/.gitignore:50`) — `git status` ne le liste pas.

## 5. Secrets présents/absents (sans valeurs)

| Secret | Présent ? |
|---|---|
| GitHub App Client Secret (D9) | **NON** — bloque REAL |
| AES encryption key | OUI (local only) |
| App private key PEM | OUI (path only) |
| Better Auth secret / D1 OAuth secret | OUI (D1, hors D9 user-to-server) |
| Access/refresh tokens utilisateur | NON (pas de CONNECTED REAL) |

## 6. GitHub App et callback vérifiés

Preuve JWT App (installation credentials, READ meta) :

```json
{
  "httpStatus": 200,
  "appId": 5670639,
  "slug": "sfia-studio-next-dev",
  "name": "sfia-studio-next-dev",
  "clientId": "Iv23liYylkxJUzU2VXux",
  "callbackUrls": null
}
```

`callback_urls` null via API App — **la callback User authorization URL doit être vérifiée/configurée dans GitHub App Settings par Morris** :

**URL exacte attendue par Studio :**
`http://127.0.0.1:3100/api/integrations/github/callback`

Séparer de Better Auth D1 callback et de toute Setup URL.

## 7. Parcours utilisateur réalisé

**NON EXÉCUTÉ** — bloqué par absence de Client Secret (+ confirmation callback GitHub Settings).

Aucun consentement navigateur, aucun code OAuth, aucun CONNECTED REAL.

## 8. Différence D1 OAuth / D9 OAuth

| | D1 Better Auth | D9 GitHub App user-to-server |
|---|---|---|
| Variables | `GITHUB_CLIENT_ID/SECRET` | `GITHUB_APP_CLIENT_ID/SECRET` + `GITHUB_APP_CALLBACK_URL` |
| But | Identité Studio / session | Autorisation dépôt + tokens user App |
| Callback | Better Auth | `/api/integrations/github/callback` |
| Preuve ce cycle | credentials D1 présents | Client Secret D9 **ABSENT** |

Le code refuse explicitement de réutiliser Better Auth secrets (`readGitHubAppUserOauthConfig`).

## 9–14. Identité / installation / permissions / lecture REAL / DB / négatifs

**NOT APPLICABLE — REAL interactive non démarré.**

Preuves antérieures conservées :
- Installation REAL READ (PEM) — cycle antérieur
- R1-A/R1-B + R2 DET — handoff `41373d2e`
- Mutations REAL HARD-BLOCKED

Négatifs DET déjà couverts dans corpus PG (state replay, session binding, UNIQUE, etc.) — non rejoués comme preuve REAL.

## 15–16. Régressions D7/D8

Suites rejouées ce cycle :

| Suite | Résultat | Horodatage CET |
|---|---|---|
| tsc | PASS | ~22:51 |
| unit | **167 PASS** | 22:51:49 |
| integration | **211 PASS** | 22:51:48 |
| build | PASS | 22:52:11 |
| playwright | **13/13 PASS** | 22:52:27 (~1.2m) |

Option A / migrations 009–012 / lease fencing : préservés (aucun changement code Product ce cycle).

## 17. Screenshots

Aucun — parcours navigateur non atteint.

## 18. Git Review Index

### Modifiés ce cycle (docs + pack)
1. `.tmp-sfia-review/chatgpt-review.md` — ce pack
2. `construction/delivery-history.md` — entrée preflight
3. `construction/integration-git/matrice-acceptation.md` — §18

### Préparé hors Git (gitignoré)
4. `web/.env.local` — Client ID + Callback + AES key ; **pas** Client Secret ; pas de `STUDIO_GITHUB_USER_OAUTH=real` actif (commentaire d'instruction)

### Code Product
**Aucun correctif code** — qualification bloquée en configuration ; pas de pivot.

## 19. Créations

Aucun fichier Product créé.

## 20. Modifications — sections docs

### delivery-history entry
```markdown
## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-READ-PREFLIGHT

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:52 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server REAL OAuth DEV interactive READ qualification |
| Type | VALIDATION REAL bornée — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CONFIGURATION OAUTH DEV + premier parcours utilisateur REAL lecture seule |
| Handoff entrée | `41373d2e…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Préflight App | App `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / sandbox `mcleland147/chantiers360` — JWT GET `/app` confirme Client ID public |
| Config locale | Callback `http://127.0.0.1:3100/api/integrations/github/callback` + Client ID + AES key préparés dans `.env.local` gitignoré ; **Client Secret ABSENT** |
| REAL interactive | **NOT PROVEN** — CONFIGURATION REQUIRED (secret + callback GitHub App settings + consentement Morris) |
| Non-régression | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Mutations | HARD-BLOCKED inchangé |
| Verdict candidat | `ML4 GITHUB USER OAUTH — CONFIGURATION REQUIRED — REAL NOT PROVEN` |

```

### matrice §18
```markdown
## 18. Qualification REAL user OAuth READ (2026-11-08) — PREFLIGHT

GO Morris CRITICAL. Handoff entrée `41373d2e…`.
Plafond : REAL interactive READ — **pas** de publication.

| Item | Statut | Preuve |
|---|---|---|
| App ID / install / sandbox | CONFORME (meta) | JWT `/app` → App 5670639 `sfia-studio-next-dev` |
| Client ID local | PRÉPARÉ | `.env.local` gitignoré (valeur non secrète) |
| Callback URL local | PRÉPARÉ | `http://127.0.0.1:3100/api/integrations/github/callback` |
| Client Secret | **ABSENT** | bloque échange code→token |
| Callback GitHub App settings | **NON VÉRIFIÉ** | action admin Morris requise |
| Consentement navigateur | **NON EXÉCUTÉ** | dépend secret + callback |
| CONNECTED REAL | **NOT PROVEN** | — |
| Non-régression DET | PASS | 167 / 211 / 13 |

Verdict cycle : **CONFIGURATION REQUIRED — REAL NOT PROVEN**.

```

### Routes OAuth (référence — inchangées ce cycle)

#### authorize/route.ts
```typescript
import { NextResponse } from "next/server";
import { startGitHubAuthorization } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request) {
  try {
    const session = await requireStudioSession();
    const body = (await req.json().catch(() => ({}))) as { returnPath?: string };
    const host = req.headers.get("host");
    const result = await startGitHubAuthorization(
      session.pilotId,
      body.returnPath ?? "/settings/integrations",
      session.sessionId,
      { requestHost: host },
    );
    return NextResponse.json({
      ...result,
      // Reflect server-chosen flow — never trust client to pick SCRIPTED.
      providerMode: result.flow === "scripted" ? "SCRIPTED" : "REAL",
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

#### callback/route.ts
```typescript
import { NextResponse } from "next/server";
import {
  completeGitHubAuthorization,
  peekOauthState,
} from "@/domains/integrations/authorization-service";
import { mapOauthCallbackError, safeReturnPath } from "@/domains/integrations/oauth-return-path";
import { assertScriptedGithubAuthAllowed } from "@/domains/integrations/scripted-github-guard";
import { requireStudioSession } from "@/domains/identity/session";
import { isStudioError, studioErrorResponse } from "@/lib/http-errors";

/**
 * GitHub App user-to-server callback (D9) — distinct from Better Auth D1 callback.
 * Never echoes code/token. Never trusts installation_id or scripted=1 from query for flow choice.
 * Flow is taken from server-stored oauth state.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get("host");
  try {
    const session = await requireStudioSession();
    const state = url.searchParams.get("state");
    if (!state) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=invalid_state`, url.origin),
      );
    }

    const oauth = await peekOauthState(state);
    if (!oauth || oauth.pilotId !== session.pilotId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=access_denied`, url.origin),
      );
    }
    if (oauth.studioSessionId && oauth.studioSessionId !== session.sessionId) {
      return NextResponse.redirect(
        new URL(`/settings/integrations?connected=0&error=session_mismatch`, url.origin),
      );
    }

    const returnPath = safeReturnPath(oauth.returnPath);
    const storedFlow = oauth.flow === "github_app_user_oauth" ? "real" : "scripted";

    if (storedFlow === "scripted") {
      assertScriptedGithubAuthAllowed({ requestHost: host });
      await completeGitHubAuthorization({
        pilotId: session.pilotId,
        state,
        studioSessionId: session.sessionId,
        requestHost: host,
      });
      return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
    }

    // REAL flow — require code; ignore scripted=1 and installation_id from query.
    const code = url.searchParams.get("code") ?? undefined;
    if (!code) {
      const ghError = url.searchParams.get("error");
      const errCode = ghError === "access_denied" ? "access_denied" : "missing_code";
      return NextResponse.redirect(
        new URL(`${returnPath}?connected=0&error=${errCode}`, url.origin),
      );
    }

    await completeGitHubAuthorization({
      pilotId: session.pilotId,
      state,
      studioSessionId: session.sessionId,
      code,
      requestHost: host,
    });
    return NextResponse.redirect(new URL(`${returnPath}?connected=1`, url.origin));
  } catch (e) {
    if (isStudioError(e) && e.code === "NOT_CONFIGURED") {
      const mapped = studioErrorResponse(e);
      return NextResponse.json(mapped.body, { status: mapped.status });
    }
    const errCode = mapOauthCallbackError(e);
    return NextResponse.redirect(
      new URL(`/settings/integrations?connected=0&error=${errCode}`, url.origin),
    );
  }
}

```

#### scripted-github-guard.ts (flow REAL fail-closed)
```typescript
import { StudioError } from "@/lib/http-errors";
import { isApprovedLoopbackAuthority } from "@/domains/identity/session";
import { isGitHubAppUserOauthConfigured } from "./github-app-user-oauth";
import { isTokenEncryptionConfigured } from "@/lib/token-crypto";

/**
 * Central SCRIPTED GitHub auth gate (D9).
 * Client params (scripted=1, body, headers) never authorize alone.
 *
 * Allowed only when ALL hold:
 * - STUDIO_LANE=DEV
 * - explicit test/fixture activation (VITEST | STUDIO_E2E | STUDIO_ALLOW_SCRIPTED_GITHUB)
 * - provider not in REAL-user-oauth-required mode
 * - optional HTTP loopback when requestHost provided
 */
export function isScriptedGithubAuthContextAllowed(input?: {
  /** Host / authority from the HTTP request (callback / complete). */
  requestHost?: string | null;
}): boolean {
  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
  if (lane !== "DEV") return false;

  // Explicit fixture activation only — VITEST alone is insufficient (tests set ALLOW flag).
  const explicit =
    process.env.STUDIO_E2E === "1" || process.env.STUDIO_ALLOW_SCRIPTED_GITHUB === "1";
  if (!explicit) return false;

  // REAL user OAuth demanded → SCRIPTED forbidden (even in tests that flipped the flag).
  if (isRealUserOauthDemanded()) return false;

  if (input?.requestHost != null && input.requestHost !== "") {
    if (!isApprovedLoopbackAuthority(input.requestHost)) return false;
  }
  return true;
}

/** True when operator/env explicitly demands REAL user-to-server (never fall back to SCRIPTED). */
export function isRealUserOauthDemanded(): boolean {
  if ((process.env.STUDIO_GITHUB_USER_OAUTH ?? "").toLowerCase() === "real") return true;
  // Provider REAL alone does not demand user OAuth — installation read can be REAL without user tokens.
  // User OAuth REAL is only forced by STUDIO_GITHUB_USER_OAUTH=real.
  return false;
}

export function assertScriptedGithubAuthAllowed(input?: { requestHost?: string | null }): void {
  if (!isScriptedGithubAuthContextAllowed(input)) {
    throw new StudioError(
      "ACCESS_DENIED",
      "Parcours SCRIPTED GitHub inaccessible hors contexte de test DEV explicitement admis",
      { httpStatus: 403 },
    );
  }
}

export function assertRealUserOauthConfigured(): void {
  if (!isGitHubAppUserOauthConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "GITHUB_APP_CLIENT_ID / GITHUB_APP_CLIENT_SECRET / GITHUB_APP_CALLBACK_URL requis — pas de fallback SCRIPTED",
      { httpStatus: 503 },
    );
  }
  if (!isTokenEncryptionConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "INTEGRATION_TOKEN_ENCRYPTION_KEY requis — pas de fallback SCRIPTED",
      { httpStatus: 503 },
    );
  }
}

/**
 * Server-side flow selection. Never trusts client scripted/code flags alone.
 * - real demanded → real (or NOT_CONFIGURED)
 * - else if scripted context allowed → scripted
 * - else → NOT_CONFIGURED (cannot invent CONNECTED)
 */
export function resolveGithubUserAuthFlow(input?: {
  requestHost?: string | null;
}): "real" | "scripted" {
  if (isRealUserOauthDemanded()) {
    assertRealUserOauthConfigured();
    return "real";
  }
  if (isScriptedGithubAuthContextAllowed(input)) {
    return "scripted";
  }
  // Credentials present but REAL not demanded and SCRIPTED not allowed → still not auto-REAL.
  // Operator must set STUDIO_GITHUB_USER_OAUTH=real to activate interactive user OAuth.
  if (isGitHubAppUserOauthConfigured() && isTokenEncryptionConfigured()) {
    throw new StudioError(
      "NOT_CONFIGURED",
      "User-to-server REAL non activé (STUDIO_GITHUB_USER_OAUTH≠real) et SCRIPTED non admis",
      { httpStatus: 503 },
    );
  }
  throw new StudioError(
    "NOT_CONFIGURED",
    "Autorisation GitHub utilisateur indisponible — credentials absents et SCRIPTED non admis",
    { httpStatus: 503 },
  );
}

```

## 21. ENV-01 / versioning

DEV only. E2E non requis pour REAL interactif manquant. RECETTE/STABLE non touchés.
NO RELEASE / `0.0.0-dev`. Pas de PR/tag/merge Product.

## 22. Fake/Real Qualification

| Claim | État |
|---|---|
| SCRIPTED DET OAuth / R1 lifecycle | DETERMINISTIC PROVEN (cycles antérieurs + non-régression) |
| REAL installation READ | PROVEN antérieurement (PEM) |
| REAL user-to-server interactive READ | **NOT PROVEN** — CONFIGURATION REQUIRED |
| REAL Git mutations | HARD-BLOCKED |

## 23. KNOWN GAP / dette / exit

### CONFIGURATION REQUIRED — HUMAN ACTION (Morris)

1. **GitHub App Settings** (`sfia-studio-next-dev`, App ID 5670639) :
   - User authorization callback URL =
     `http://127.0.0.1:3100/api/integrations/github/callback`
   - Générer / copier **Client secret** (ne pas le coller dans le chat)

2. **Fichier local** `projects/sfia-studio-next/web/.env.local` (déjà gitignoré) :
   ```
   GITHUB_APP_CLIENT_SECRET=<coller localement>
   STUDIO_GITHUB_USER_OAUTH=real
   ```
   (Client ID, Callback, AES key déjà préparés)

3. Redémarrer le serveur DEV (`npm run dev` sur `127.0.0.1:3100`).

4. Rejouer le GO sous mandat : login D1 → Paramètres/Intégrations → Connect GitHub → consentement Morris → callback → CONNECTED → lecture `chantiers360` READ-only.

5. Après session interactive : retirer ou commenter `STUDIO_GITHUB_USER_OAUTH=real` pour ne pas casser les tests SCRIPTED locaux.

## 24. Gates Morris

1. Fournir Client Secret + confirmer callback GitHub Settings.
2. Relancer cycle qualification REAL interactive sous GO.
3. Puis seulement : Critical Review favorable → E2E publication documentaire REAL (GO distinct).

## 25. Verdict unique

**ML4 GITHUB USER OAUTH — CONFIGURATION REQUIRED — REAL NOT PROVEN.**

Ne pas déclarer : REAL GIT WRITES PROVEN / REAL DOCUMENT PUBLICATION PROVEN / RECETTE ACCEPTED / STABLE AVAILABLE / ML4 CLOSED / ADOPTED.

FIN REVIEW PACK FULL — L3 cible : `sfia-review-handoff/latest-chatgpt-review.md`
