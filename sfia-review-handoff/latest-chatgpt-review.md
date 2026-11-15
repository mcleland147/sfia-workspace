# SFIA Studio Next — R5 / ML4C — Review Pack FULL

**Cycle:** 11 — Déploiement / Release
**Profil:** CRITICAL
**Type:** RUN — Bascule RECETTE locale sur candidat immutable
**GO Morris:** 15 novembre 2026
**Verdict:** ML4C RECETTE DEPLOYED — IMMUTABLE CANDIDATE VERIFIED — TECHNICAL SMOKE PASS
**deployment_status:** DEPLOYED_TECHNICAL
**user_acceptance:** PENDING

---

## A. GO et cadre SFIA

Bascule autorisée du runtime RECETTE `:3200` depuis `d936da81` vers le candidat immutable `11f7077e`, sans reconstruction d’infrastructure, sans migration PostgreSQL, sans UAT utilisateur, sans LIVE Nora, sans REAL GitHub documentaire, sans acceptation ML4C / Gate C / STABLE.

Cadre lu (refs Git applicables) :

- SFIA v2.6 cycle routing / execution template / rules / validation checklist / engineering principles
- Next SEF, roadmap, décision R5 2026-11-11, environnements-recette-et-promotions (ENV-01 VALIDATED / ON MAIN blob `14b61f0d…`), product-versioning (VALIDATED / ON MAIN blob `8bc93e0f…`), cadrage-r4, delivery-history, contrat-convergence-fonctionnelle-integree
- Dernier handoff différentiel `sfia/review-handoff@042a264ba4fd3598b3ffffe63b090dbbfd3fd30b` (blob `0f3b3196…`)

## B. Git Truth initial / final

Repository worktree produit : `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112`
Branche : `fix/next-semantic-intent-convergence-20261112`

| Check | Attendu | Observé | Statut |
|---|---|---|---|
| HEAD | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` | identique (init + final) | PASS |
| tree | `71e052cf53232c70153a6056d948b97fb401b175` | identique | PASS |
| parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` | identique | PASS |
| status produit | pack local seulement | `M .tmp-sfia-review/chatgpt-review.md` | PASS |
| diff produit code | aucun | aucun | PASS |

Aucun commit produit. Aucun push produit. PR #676 non touchée (OPEN / NOT MERGED ; head distant observé `67bf6b0b…`).

## C. Sources et refs Git

- Candidat runtime worktree : `git worktree add --detach …-ml4c-recette-build-11f7077e 11f7077e` depuis `/Users/morris/Projects/sfia-workspace`
- Worktree HEAD/tree vérifiés = candidat exact
- package-lock.json blob identique d936 ↔ 11f7077e : `d7075a4b770d06ee2c6e917369cdf491c563ebb2`
- Migrations `projects/sfia-studio-next/web/src/db/migrations/` : IDENTIQUES (A11)
- `schema.ts` / `package.json` : aucun delta migration-pertinent (A11)

## D. Baseline RECETTE (pré-bascule, revalidée)

| Élément | Valeur observée |
|---|---|
| Source SHA | `d936da81ebf7d17eb78cc11da0538df000281a4a` |
| Tree | `276679be1ea139525b2267cde9245b8fb88e9a76` |
| BUILD_ID | `n-7E8DgbcVu4g_RJWZoiK` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81` |
| Serveur | `127.0.0.1:3200` — `next-server (v15.5.29)` pid 41282 |
| LaunchAgent | `com.sfia.studio.next.recette.ml4` state=running ; program=`…/d936da81/start-recette.sh` |
| PostgreSQL | `sfia_next_recette_ml4` @ `127.0.0.1:5434` ; user `sfia_next_recette` ; 33 tables public |
| Schema | `012_auth_concurrency_safety` (conservé ; aucune migration) |
| Config | `~/.config/sfia-studio-next/recette/.env.local` — `STUDIO_LANE=RECETTE`, port 3200 |
| `STUDIO_DEV_TEST_LOGIN` | ABSENT |
| GitHub RECETTE | App ID `5677465` ; Installation `180092114` ; repo `mcleland147/chantiers360` |

## E. Préflight et gates

| Gate | Résultat |
|---|---|
| A — état initial / compatibilité | PASS |
| B — worktree immuable + build prod | PASS — BUILD_ID `0mTcR_VTrO_j6sIlW9Wdb` |
| C — sauvegarde / protection | PASS |
| D — bascule LaunchAgent | PASS |
| E — smoke technique non mutatif | PASS |

STOP conditions non déclenchées. Rollback applicatif préparé, non exécuté.

## F. Ancien LaunchAgent / process / build

Plist actif pré-bascule (extrait) :

```xml
<key>ProgramArguments</key>
<array>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/start-recette.sh</string>
</array>
<key>WorkingDirectory</key>
<string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/projects/sfia-studio-next/web</string>
```

`start-recette.sh` ancien (conservé intact) :

```bash
export SFIA_SOURCE_SHA=d936da81ebf7d17eb78cc11da0538df000281a4a
# … unset STUDIO_GITHUB_ALLOW_MUTATIONS ; NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

BUILD_ID ancien toujours présent sur disque : `n-7E8DgbcVu4g_RJWZoiK`.

## G. Nouveau worktree et SHA/tree

- Path : `/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e`
- HEAD : `11f7077edd08f1a0c680b6b920f20dbaf76c7bed`
- tree : `71e052cf53232c70153a6056d948b97fb401b175`
- Mode : detached HEAD immuable
- Node : `v24.16.0` ; Next : `15.5.29` ; package : `0.0.0-dev`

## H. Build, logs expurgés, BUILD_ID

- `npm ci` (full, worktree isolé) : PASS — 497 packages
- `env -u NODE_ENV npm run build` avec `STUDIO_LANE=RECETTE` + `SFIA_SOURCE_SHA=11f7077e…` : PASS (exit 0)
- BUILD_ID **lu depuis** `projects/sfia-studio-next/web/.next/BUILD_ID` : **`0mTcR_VTrO_j6sIlW9Wdb`**
- Distinct de l’ancien `n-7E8DgbcVu4g_RJWZoiK` ; ancien artefact non contaminé
- BUILD_ID également observé dans HTML 404 Next : `<!--0mTcR_VTrO_j6sIlW9Wdb-->`

## I. Sauvegarde et vérification

Backup dir : `/Users/morris/Projects/sfia-recette-backups/ml4c-20261115-071511-pre-11f7077e` (chmod 700)

| Artefact | Preuve |
|---|---|
| `sfia_next_recette_ml4.dump` | 445820 bytes ; mode 600 |
| sha256 | `b24122ec0bc15e35f46733dfa58a2c7b0e2826838a548117c7061a8557dbfb3d` |
| `pg_restore -l` TOC | 249 lignes — OK |
| Fingerprint avant | `db=sfia_next_recette_ml4` ; `tables=33` |
| Fingerprint après | `db=sfia_next_recette_ml4` ; `tables=33` |
| Plist pré-bascule | `com.sfia.studio.next.recette.ml4.plist.pre-switch` |
| start ancien | `start-recette-d936da81.sh` |
| identité runtime | `old-recette-identity.txt` |

Aucune restauration DB. Aucun reset. Contenu dump non publié dans Git.

## J. Changements opérationnels exacts

1. Nouveau `start-recette.sh` (worktree 11f7077e uniquement) :

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=11f7077edd08f1a0c680b6b920f20dbaf76c7bed
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

2. Nouveau plist worktree + copie vers `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist` — ProgramArguments / WorkingDirectory / logs pointent vers `…-11f7077e…`.

3. `rollback-to-d936da81.sh` créé dans le nouveau worktree (bootout → restore plist d936 → bootstrap/kickstart). **Non exécuté.**

4. Ancien worktree `…-d936da81` **non modifié** (start script SHA d936 intact).

5. `.env.local` RECETTE **non modifié** (DATABASE_URL toujours `sfia_next_recette_ml4@127.0.0.1:5434` ; `STUDIO_DEV_TEST_LOGIN` absent).

Aucun code produit modifié.

## K. Chronologie de la bascule

| Horodatage (local) | Action |
|---|---|
| 2026-11-15T07:15:11+01:00 | Backup dir créé ; dump PG + empreintes |
| 2026-11-15T07:15:27+01:00 | `launchctl bootout` ancien service |
| 2026-11-15T07:15:29+01:00 | Port 3200 libre ; plist basculé ; bootstrap + kickstart |
| 2026-11-15T07:15:42+01:00 | Listen pid 99811 ; cwd = worktree 11f7077e ; GATE_D_PASS |
| ~07:16–07:17 | Smoke E01–E18 ; manifeste runtime écrit |

## L. Process / port / launcher après démarrage

- LaunchAgent `com.sfia.studio.next.recette.ml4` : **running**
- program : `…/ml4c-recette-build-11f7077e/start-recette.sh`
- cwd process : `…/11f7077e/projects/sfia-studio-next/web`
- pid listen 3200 : `99811` — `next-server (v15.5.29)`
- Un seul listener sur 3200
- Logs start (expurgés) :

```
▲ Next.js 15.5.29
- Local: http://127.0.0.1:3200
✓ Starting...
✓ Ready in 326ms
```

Aucune erreur critique dans `launchd.err.log`.

## M. Contrôles PostgreSQL et conservation

- Même DB : `sfia_next_recette_ml4` @ 5434
- Même rôle : `sfia_next_recette`
- Tables public : 33 avant = 33 après
- `database_migration: NONE`
- Document root path conservé : `~/.config/sfia-studio-next/recette/documents`
- Dump pré-bascule conservé hors Git

## N. Smoke HTTP (non mutatif)

| ID | Contrôle | Résultat |
|---|---|---|
| E01 | Port 3200 | LISTEN |
| E02 | Next production | v15.5.29 Ready |
| E03 | LaunchAgent | running |
| E04–E06 | SHA/tree/BUILD_ID | 11f7077e / 71e052cf / **0mTcR_VTrO_j6sIlW9Wdb** (fichier + HTML) |
| E07 | GET `/login` | **200** |
| E08 | GET `/api/auth/status` | **200** — provider github-oauth-studio-identity-only ; `configured:true` |
| E09 | GET `/api/portfolio` sans session | **401** `SESSION_INVALID` |
| E09b | GET `/api/projects/<uuid>` | **401** |
| E10 | Connexion DEV | non créée ; flag ABSENT |
| E11–E12 | DB/schéma/compteurs | conservés |
| E13–E15 | Lane/port/GitHub App/isolation DEV | conformes |
| E16 | Ancien artefact + backup | préservés |
| E17 | HEAD produit | inchangé 11f7077e |
| E18 | Logs | Ready ; pas d’erreur critique |

Non exécuté (hors mandat) : création projet, OAuth interactif, Nora LIVE, écriture GitHub, E2E mutatifs, migration.

## O. Comparaison ancien / nouveau runtime

| | Ancien | Nouveau |
|---|---|---|
| SHA | d936da81… | **11f7077e…** |
| Tree | 276679be… | **71e052cf…** |
| BUILD_ID | n-7E8DgbcVu4g_RJWZoiK | **0mTcR_VTrO_j6sIlW9Wdb** |
| Worktree | …-d936da81 | …-11f7077e |
| Port / DB / schema | 3200 / ml4@5434 / 012 | **identique** |
| Next | 15.5.29 | 15.5.29 |
| Migrations | — | **NONE** |

## P. Rollback

- Préparé : `…-11f7077e/rollback-to-d936da81.sh` + plist pré-bascule sauvegardé
- Artefact d936da81 intact
- **Exécuté : NON** (smoke PASS)
- Rollback DB : **NON autorisé / NON exécuté**

## Q. Réserves historiques (conservées OPEN)

| ID | Statut | Contenu |
|---|---|---|
| R1 | OPEN | Better Auth cookies sur 127.0.0.1 — isolation navigateur NON PROUVÉE |
| R2 | OPEN | ML4C-A-004 — boutons DEV visibles ; API off tant que `STUDIO_DEV_TEST_LOGIN` absent (**non activé**) |
| R3 | OPEN | CI distante sur 11f7077e : **NOT RUN** |
| R4 | OPEN | Nora LIVE nouveau SHA : **NOT RUN** |
| R5 | OPEN | REAL GitHub documentaire : **aucun GO** |
| R6 | OPEN | ML4C UAT : **NOT RUN** |

## R. Fake / Real Qualification

**Preuves d’entrée (cycles précédents, @11f7077e) :** UNIT 363 PASS ; PG 471 PASS ; BUILD PASS ; E2E ciblés 11 PASS — rapportées/revues antérieurement.

**Ce cycle :**

| Qualification | Statut |
|---|---|
| BUILD PROVEN | **YES** — build local prod @11f7077e → BUILD_ID `0mTcR_VTrO_j6sIlW9Wdb` |
| DEPLOYMENT PROVEN | **YES** — LaunchAgent sert worktree 11f7077e sur :3200 |
| HTTP SMOKE PROVEN | **YES** — login 200 / auth status 200 / portfolio 401 / BUILD_ID HTML |
| LIVE | **NOT RUN** |
| REAL GIT | **NOT RUN** |
| USER UAT | **NOT RUN** |

## S. Manifeste runtime

Fichier opérationnel (hors Git produit) :

`/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e/ops/recette-manifest-ml4c-11f7077e.yaml`
Copie backup : `…/ml4c-20261115-071511-pre-11f7077e/recette-manifest-ml4c-11f7077e.yaml`

Champs clés observés :

```yaml
lane: RECETTE
deployment_status: DEPLOYED_TECHNICAL
user_acceptance: PENDING
source_sha: 11f7077edd08f1a0c680b6b920f20dbaf76c7bed
source_tree: 71e052cf53232c70153a6056d948b97fb401b175
previous_sha: d936da81ebf7d17eb78cc11da0538df000281a4a
build_id: 0mTcR_VTrO_j6sIlW9Wdb
served_address: http://127.0.0.1:3200
launcher: com.sfia.studio.next.recette.ml4
schema_revision: 012_auth_concurrency_safety
database_migration: NONE
product_version: NOT AVAILABLE
package_version: 0.0.0-dev
release_tag: N/A
stable: NOT AVAILABLE
user_recette: NOT RUN
git_remote_ci: NOT_RUN_ON_CANDIDATE
rollback_executed: false
```

## T. Git Review Index

| Ref | Rôle |
|---|---|
| `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` | Candidat / runtime servi |
| `71e052cf53232c70153a6056d948b97fb401b175` | Tree candidat |
| `d936da81ebf7d17eb78cc11da0538df000281a4a` | Runtime précédent (rollback) |
| `042a264ba4fd3598b3ffffe63b090dbbfd3fd30b` | Handoff précédent (pré-publication) |
| PR #676 | OPEN / NOT MERGED — non modifié |
| main distant observé | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` — non modifié |

## U. Verdict technique

**ML4C RECETTE DEPLOYED — IMMUTABLE CANDIDATE VERIFIED — TECHNICAL SMOKE PASS**

- Ancien SHA/build : `d936da81` / `n-7E8DgbcVu4g_RJWZoiK`
- Servi en fin de cycle : `11f7077e` / `0mTcR_VTrO_j6sIlW9Wdb`
- LaunchAgent : running → worktree 11f7077e
- DB : `sfia_next_recette_ml4@5434` ; schema 012 ; migration NONE
- Backup : PASS (dump + sha256 + TOC)
- Smoke : PASS
- Rollback : préparé / non exécuté
- Git produit : HEAD inchangé ; dirty = pack local seulement
- Réserves R1–R6 : OPEN
- Ne pas déclarer : RECETTE USER PASS / ML4C ACCEPTED / GATE C CLOSED / STABLE / RELEASED / ADOPTED

## V. Prochain gate Morris

1. ChatGPT relit le handoff distant et les preuves.
2. Morris conduit la **RECETTE utilisateur ML4C** (cahier S01–S07 / 53 scénarios) sur `http://127.0.0.1:3200` avec SHA `11f7077e` / BUILD_ID `0mTcR_VTrO_j6sIlW9Wdb`.
3. LIVE Nora / REAL GitHub documentaire restent **hors** de cette bascule tant que GO adapté non donné.
4. Rollback applicatif disponible via `rollback-to-d936da81.sh` sans toucher PostgreSQL.

---

*Fin Review Pack FULL — cycle bascule RECETTE 11f7077e — 2026-11-15.*
