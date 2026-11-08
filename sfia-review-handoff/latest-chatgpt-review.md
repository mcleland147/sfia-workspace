# SFIA Review Pack FULL — ML4 GitHub User OAuth REAL INTERACTIVE READ PROVEN

**Cycle :** DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-INTERACTIVE-READ
**Handoff d'entrée :** `d8117ee6174cba8897be7d1d865dd7253f589d24`
**Profil :** Critical / VALIDATION REAL bornée (READ-only)
**Lane :** DEV construction — `NO RELEASE` / `0.0.0-dev`
**Product Git :** LOCAL DIRTY — **aucun** commit / push / PR Product
**Verdict candidat :** `REAL INTERACTIVE READ PROVEN`

---

## 1. Git Truth

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD (Product tip, non muté) | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Tracking | `origin/main` (ahead dirty local) |
| Dirty tracked / untracked | ~20 / ~29 (ML4 construction locale cumulative) |

Source : `.tmp-sfia-review/snippets/git-truth.txt`

---

## 2. Périmètre & STOP

### Autorisé (ce cycle)
- Reprise qualification OAuth REAL user-to-server (D9) après Callback URL App enregistrée/vérifiée
- Preuves UI CONNECTED host-aligned (`127.0.0.1`)
- Lectures API GitHub avec user token (GET only)
- Suites non-régression DET (tsc / unit / integration / build / Playwright)
- Review Pack FULL + handoff L3 `sfia/review-handoff` (≠ push Product)

### Interdit (respecté)
- Mutation GitHub REAL (écriture repo, install change, revoke remote, PR/merge)
- Push / commit Product
- Publication documentaire ML4
- Relâchement R1/R2 concurrency

### STOP restants (hors verdict READ)
- Publication / merge REAL non qualifiés
- Badge UI `SCRIPTED` = `providerMode` Git provider (orthogonal au flow D9 REAL)
- Disconnect local wipe tokens sans revoke remote (KNOWN GAP documenté)
- Cookie host : `localhost` ≠ `127.0.0.1` casse la session Studio sur callback

---

## 3. Preuves REAL interactive READ

### 3.1 Autorisation CONNECTED (DB)

| Champ | Valeur |
| --- | --- |
| authorizationId | `iauth_37cc71f1-3afb-45a3-a071-4d32a1e4e811` |
| pilotId | `pilot_cba50eb6-734f-4457-ada8-45a34e00c50d` |
| status | `CONNECTED` |
| accountLogin | `mcleland147` |
| githubUserId | `295557155` |
| installationId | `179935689` |
| App | `sfia-studio-next-dev` (App ID `5670639`) |
| Repo ACTIVE | `mcleland147/chantiers360` · `main` |
| Tokens | ciphertext + nonce présents (access + refresh) — jamais loggés |

### 3.2 UI host-aligned

- URL : `http://127.0.0.1:3100/settings/integrations` (aligné callback `GITHUB_APP_CALLBACK_URL`)
- Banner : « GitHub est connecté. Les dépôts ci-dessous sont ceux réellement autorisés côté serveur. »
- Accès : « Installation et autorisation utilisateur GitHub App vérifiées côté serveur. »
- Liste : `mcleland147/chantiers360 · main`
- Actions : Actualiser les dépôts / Déconnecter (pas de re-Configurer)
- Reload : persistance CONNECTED + repo
- `/api/integrations/status` : HTTP 200 ; `secretLeakInStatusJson=false`

### 3.3 User-token API READ (aucune mutation)

| Endpoint | HTTP | Observation |
| --- | --- | --- |
| `GET /user` | 200 | login `mcleland147` id `295557155` |
| `GET /user/installations` | 200 | install `179935689` app_slug `sfia-studio-next-dev` |
| `GET /repos/mcleland147/chantiers360` | 200 | default_branch `main` |
| `GET /repos/.../git/ref/heads/main` | 200 | sha `8c398c494dd918272aab5b2653777c6c21d2e76e` |

Artefact : `.tmp-sfia-review/real-oauth-proofs/real-read-proof.json`

### 3.4 Config / flux serveur

- `STUDIO_GITHUB_USER_OAUTH=real`
- Authorize POST → `flow=github_app_user_oauth` · `providerMode=REAL` · PKCE
- Callback : `http://127.0.0.1:3100/api/integrations/github/callback` (App settings vérifié Morris)
- Tentative Configurer depuis `localhost` → `connected=0&error=access_denied` (session/cookie host mismatch) — **non** une preuve de refus GitHub App

---

## 4. Non-régression DET

| Suite | Résultat | Note |
| --- | --- | --- |
| `npx tsc --noEmit` | PASS | |
| `npm run test:unit` | **167** PASS | |
| `npm run test:integration` | **211** PASS | `STUDIO_GITHUB_USER_OAUTH=` override pour ne pas forcer REAL depuis `.env.local` |
| `npm run build` | PASS | |
| `npx playwright test` | **13/13** PASS | E2E :3101 isolé |

Logs : `.tmp-sfia-review/suite-logs/`

Harness : `scripts/e2e-web-server.sh` exporte `STUDIO_GITHUB_USER_OAUTH=` pour garder E2E SCRIPTED quand l'opérateur a REAL dans `.env.local`.

---

## 5. Diffs docs (extraits pack)

- `.tmp-sfia-review/diff-delivery-history.md`
- `.tmp-sfia-review/diff-matrice-acceptation.md`
- `.tmp-sfia-review/diff-specification-technique.md`
- `.tmp-sfia-review/diff-e2e-web-server.md`

Matrice §19 + delivery `DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-INTERACTIVE-READ` ajoutés.

---

## 6. Fake / Real honesty

| Claim | Statut |
| --- | --- |
| OAuth user-to-server REAL (D9) | **PROVEN** (consent + CONNECTED + sealed tokens) |
| UI CONNECTED sur host callback | **PROVEN** (`127.0.0.1`) |
| User-token READ | **PROVEN** |
| Publication / merge REAL | **NOT PROVEN** / hors périmètre |
| providerMode badge SCRIPTED | **≠** preuve d'absence de REAL OAuth |
| SCRIPTED DET suites | **PASS** (orthogonales) |

---

## 7. Décision demandée

**À ChatGPT (Critical Review) :** confirmer ou contester `REAL INTERACTIVE READ PROVEN` sur les preuves ci-dessus.

**À Morris :** gates suivants seulement sur GO distinct — publication REAL, Git Product, RECETTE.

---

## 8. Anti-claims

- ≠ Product commit/push/PR
- ≠ Release / version bump
- ≠ REAL write / revoke remote
- ≠ Fermeture ML4 global
- ≠ providerMode REAL (Git provider peut rester SCRIPTED)
