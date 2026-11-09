# SFIA Review Pack FULL — Cycle 11 — RECETTE deploy a2c5e9f8

- date_heure: 2026-11-09T17:45:37+01:00
- process: SFIA v2.6
- cycle: 11 — DÉPLOIEMENT / RECETTE
- profil: CRITICAL
- product: SFIA Studio Next — R5 / ML4
- GO Morris: 2026-11-09 — préparation + bascule RECETTE conditionnelle + contrôles + rollback technique si nécessaire
- GO NON ACQUIS: push projet, PR, merge, STABLE, release, ADOPTED, mutation GitHub REAL, restore DB destructive, exécution R06 utilisateur

## Verdict

**RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN**

Non-annoncé (interdit): R06 PASS ; REC-08 CLOSED ; ML4 ACCEPTED ; BEHAVIOR PROVEN ; GitHub REAL write PASS ; STABLE ; RELEASE ; ADOPTED.

## 1. Git Truth Check — initial / final

Repository: mcleland147/sfia-workspace
remote: origin https://github.com/mcleland147/sfia-workspace.git

| Ref | SHA |
| --- | --- |
| Branche active | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD candidat | a2c5e9f8819cbe547bf925b39f38f783fc8aa52b |
| tree | 5d245e8adf1d32a7ceec6b129857d94f6398a488 |
| Base macro | 974b0030a94469bef05496151792e8c35a9a83e9 (ancêtre: OUI) |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| origin/feat/next-git-collaboration-20261108 | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| origin/sfia/review-handoff (pré-publish) | 8a70808c39a33deeb478c94c8a031449561395d0 |
| handoff blob pré-publish | 5b8913a5eb435d55653591f41826fcc371a6eacd |

Actions Git Truth:
- git remote -v OK
- git fetch (main, feat, review-handoff) sans mutation projet
- git status --short avant handoff: Review Pack + manifestes/scripts locaux hors push produit
- Aucun rebase / cherry-pick / reset / stash destructif
- Aucun push de branche produit
- Candidat non reconstruit depuis main/feat

## 2. Sources consultées (Git)

- Processus SFIA v2.6 (cycle routing + execution template) — mandat appliqué
- Gouvernance Next: SEF, roadmap, environnements-recette-et-promotions, product-versioning, naming, décisions R4/ML4
- Contrats ML4 integration-git (acceptation, spec, matrice, recette e2e)
- delivery-history.md
- Dernier handoff sfia/review-handoff @ 8a70808c…
- Registre R01–R14 branche docs/next-ml4-recette-utilisateur-20261109 — LECTURE SEULE, non modifié

## 3. Préflight ENV-01

### Avant bascule
- Listener :3200 = PID 75778 next-server cwd …-ml4-recette-build-974b0030/…/web
- BUILD_ID fichier: RzpCuGMK6SnwfucphK7Qa
- SFIA_SOURCE_SHA env: 974b0030…
- DB: sfia_next_recette_ml4 @ 127.0.0.1:5434 container sfia-next-recette-pg
- DEV: PG 5433 up ; :3100 idle
- STABLE: NOT AVAILABLE
- Secrets: ~/.config/sfia-studio-next/recette/.env.local — clés présentes (valeurs non divulguées): STUDIO_LANE=RECETTE, OPENAI, GitHub App 5677465/180092114, BETTER_AUTH_URL :3200, STUDIO_GITHUB_PROVIDER=real, mutations UNSET
- LaunchAgent historique com.sfia.studio.next.recette pointe encore ml1-c3 — non utilisé pour ce runtime (démarrage manuel worktree)

### Migration / schéma
- schemaRevision 974b == a2c5 = 012_auth_concurrency_safety
- git diff migrations/drizzle 974b0030…a2c5e9f8 → 0 fichiers
- STOP migration non requis

## 4. Conservation D4 — preuve lecture seule

| Entité | ID / valeur |
| --- | --- |
| Pilot | pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c / mcleland147 |
| Project | proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d / CampusFlow |
| Document | doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2 |
| Title | Références externes — Enseignements de Chantiers360 |
| v1 | drev_c07ca162-faa4-48f5-b705-018e41ae88d9 AVAILABLE rev#1 |
| content_md5 | de4bd1a6e59f5dea12fd38ce265b5f43 (8586 bytes) |
| rev_total | 1 (pas de v2 spontanée) |
| messages | 16 conservés |
| git link | ATTACHED → mcleland147/chantiers360 |

Post-bascule: mêmes IDs / même md5 / mêmes compteurs — DATA PRESERVED.

## 5. Sauvegarde DB

```json
{
  "created_at": "2026-11-09T17:38:18.058832+01:00",
  "db_name": "sfia_next_recette_ml4",
  "db_port": 5434,
  "format": "custom(-Fc)",
  "dump_sha256": "7a9dde7b432383b54fdfbd9e27e0d649f4b9a2f3d2b7dc68312882f0ab685ad0",
  "dump_bytes": 132643,
  "purpose": "pre-switch backup before serving a2c5e9f8",
  "previous_source_sha": "974b0030a94469bef05496151792e8c35a9a83e9",
  "previous_build_id": "RzpCuGMK6SnwfucphK7Qa",
  "candidate_source_sha": "a2c5e9f8819cbe547bf925b39f38f783fc8aa52b",
  "restore_note": "docker exec -i sfia-next-recette-pg pg_restore -U sfia_next_recette_ml4 -d sfia_next_recette_ml4 --clean --if-exists <dump> \u2014 REQUIRES explicit Morris GO; not to be run during this cycle"
}
```

### Rollback code document

```markdown
# Rollback code procedure — Cycle 11 RECETTE switch

## Previous (restore target)
- worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030
- SHA: 974b0030a94469bef05496151792e8c35a9a83e9
- tree: 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357
- BUILD_ID: RzpCuGMK6SnwfucphK7Qa
- address: http://127.0.0.1:3200
- env: ~/.config/sfia-studio-next/recette/.env.local (SFIA_SOURCE_SHA was 974b0030...)

## New candidate
- worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8
- SHA: a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
- tree: 5d245e8adf1d32a7ceec6b129857d94f6398a488
- BUILD_ID: 9yCs2GbSS5lDFX3LPiQTU

## Code rollback steps (NO DB restore without Morris GO)
1. Identify PID on :3200 (lsof -nP -iTCP:3200 -sTCP:LISTEN)
2. Stop only that process (kill gracefully)
3. Ensure SFIA_SOURCE_SHA in recette .env.local points to 974b0030... (or export at start)
4. cd .../974b0030/projects/sfia-studio-next/web && source env && npx next start -H 127.0.0.1 -p 3200
5. Verify BUILD_ID=RzpCuGMK6SnwfucphK7Qa and HTTP smoke
6. DB restore is SEPARATE and FORBIDDEN without Morris GO

## DB backup
- path: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8/sfia_next_recette_ml4.dump
- sha256: 7a9dde7b432383b54fdfbd9e27e0d649f4b9a2f3d2b7dc68312882f0ab685ad0
```

Vérifications backup:
- pg_restore -l → 239 TOC entries — dump listable
- Aucune restauration exécutée sur la base active
- Rollback code documenté ; rollback DB = GO Morris séparé

## 6. Construction candidat immutable

- worktree détaché: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8
- HEAD figé a2c5e9f8… — 0 dirty lines source au moment du build
- npm ci depuis lockfile — PASS
- vitest tests/unit/document-act.test.ts — 25 PASS
- tsc --noEmit — PASS
- next build — PASS → BUILD_ID 9yCs2GbSS5lDFX3LPiQTU
- Classification versioning: PATCH candidate / NO RELEASE / technical 0.0.0-dev / productStableVersion NOT AVAILABLE
- Aucune modification du code source après gel du SHA servi

### start-recette.sh (nouveau worktree)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

### start-recette.sh (ancien — rollback)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=974b0030a94469bef05496151792e8c35a9a83e9
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

## 7. Bascule effectuée

1. Préconditions satisfaites (GO, SHA, build, backup, schéma, données, artefact ancien, Nora config, App RECETTE, mutations OFF)
2. Stop propre PID 75778 (974b worktree)
3. Artefact 974b préservé + script start rollback
4. SFIA_SOURCE_SHA mis à jour dans env RECETTE → a2c5e9f8… (backup .env.local.bak-pre-a2c5e9f8-*)
5. Symlink .env.local → config RECETTE (aligné ancien worktree ; gitignored)
6. Start next start -H 127.0.0.1 -p 3200 depuis worktree a2c5 (PID serveur observé 28141)
7. DEV non interrompu ; STABLE non touché
8. Incident démarrage: premiers nohup tués à la fin de session shell → runtime maintenu via shell foreground durable Cursor (PID wrapper 28091)

## 8. Smoke post-bascule

| Check | Résultat |
| --- | --- |
| Process listen :3200 | PID 28141 cwd a2c5 worktree |
| HTML BUILD fingerprint | <!--9yCs2GbSS5lDFX3LPiQTU--> |
| GET / | 200 |
| GET /login | 200 |
| GET /portfolio | 200 |
| GET /settings/integrations | 200 |
| GET /api/integrations/status | 401 SESSION_INVALID (attendu) |
| GET /api/portfolio | 401 SESSION_INVALID (attendu) |
| CampusFlow/D4/v1 | préservés (SQL) |
| v2 spontanée | NONE |
| DEV :3100 | idle |
| STABLE | no action |
| Nora LIVE call | NOT RUN |
| GitHub REAL write | NONE |
| PR #18 | not touched |
| R06 revise request | NOT RUN |

Limite: configuration LIVE présente ≠ preuve comportement LIVE. Smoke ≠ acceptation fonctionnelle R06.

## 9. Différences avant / après

| Item | Avant | Après |
| --- | --- | --- |
| source_sha | 974b0030… | a2c5e9f8… |
| tree | 6ca5d0ad… | 5d245e8a… |
| BUILD_ID | RzpCuGMK6SnwfucphK7Qa | 9yCs2GbSS5lDFX3LPiQTU |
| worktree | …-974b0030 | …-a2c5e9f8 |
| DB/dataset | CampusFlow D4 v1 | identique |
| schema | 012 | 012 |
| mutations | OFF | OFF |

## 10. Anomalies / réserves ouvertes

- USER R06 NOT RUN
- Nora LIVE behavior NOT PROVEN (TEST_BOUNDARY réserve OPEN)
- Cookie collision same-host ports (ENV-01 connue)
- LaunchAgent historique ml1-c3 non aligné sur worktree courant (runtime manuel)
- Persistence runtime dépend du shell agent foreground (documenté)
- Registre R01–R14 non modifié ce cycle
- Product branch locale ahead de origin/feat (4 commits correctifs) — non poussée

## 11. Fichiers créés (contenu complet)

### A. projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md

```markdown
# ENV-01 — Manifeste RECETTE ML4 — bascule a2c5e9f8 (Cycle 11)

lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
source_sha: a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
tree_sha: 5d245e8adf1d32a7ceec6b129857d94f6398a488
base_macro_sha: 974b0030a94469bef05496151792e8c35a9a83e9
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
origin_feat_tip: 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
build_id: 9yCs2GbSS5lDFX3LPiQTU
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE — pas de promotion STABLE)
release_tag: N/A
schema_revision: 012_auth_concurrency_safety
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8
server_pid_observed: 28141 (next-server v15.5.29)
hot_reload: OFF (`next start` production)

## Dataset préservé

- db: sfia_next_recette_ml4 @ 127.0.0.1:5434 (container sfia-next-recette-pg)
- pilot: pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c (mcleland147)
- project: proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d (CampusFlow)
- document D4: doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2
  title: Références externes — Enseignements de Chantiers360
- revision v1: drev_c07ca162-faa4-48f5-b705-018e41ae88d9 — status AVAILABLE — revision_number 1
  content_md5: de4bd1a6e59f5dea12fd38ce265b5f43 — content_len 8586
- counts post-bascule: projects=1 documents=1 revisions=1 conversations=3 messages=16
  project_git_links=1 authorized_repositories=1 (mcleland147/chantiers360 ACTIVE)
- spontaneous v2: NONE

## Backup / rollback

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8
- dump: sfia_next_recette_ml4.dump (custom -Fc)
- dump_sha256: 7a9dde7b432383b54fdfbd9e27e0d649f4b9a2f3d2b7dc68312882f0ab685ad0
- dump_bytes: 132643
- pg_restore -l TOC entries: 239 — integrity listable
- DB restore: **FORBIDDEN** without Morris GO (code rollback ≠ DB rollback)
- previous artefact preserved:
  /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030
  BUILD_ID RzpCuGMK6SnwfucphK7Qa — start-recette.sh present
- rollback_code_doc: BACKUP_MANIFEST.json + ROLLBACK_CODE.md in backup_dir
- rollback_state: NOT EXERCISED (new candidate serving)

## Nora

- SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY (réserve opérationnelle OPEN)
- OPENAI_API_KEY: PRESENT in RECETTE env (value not disclosed)
- LIVE behavior: **NOT PROVEN** this cycle (no R06 / no generative call)
- configuration: CONFIGURED — preuve comportementale LIVE = NOT RUN

## GitHub

- App: sfia-studio-next-recette — App ID 5677465 / Installation 180092114
- allowed_repo: mcleland147/chantiers360
- callback: http://127.0.0.1:3200/api/integrations/github/callback
- STUDIO_GITHUB_PROVIDER: real
- mutations GitHub REAL: OFF (STUDIO_GITHUB_ALLOW_MUTATIONS unset)
- provider SCRIPTED: not substituted for this lane config
- PR #18 chantiers360: NOT opened/modified this cycle
- GitHub REAL write this cycle: NONE

## ENV-01 frontiers

- DEV: port 3100 idle; PG 5433 up; not reconfigured
- STABLE: NOT AVAILABLE — no action
- cookie collision same-host ports: réserve connue — profil navigateur RECETTE dédié requis
- secrets: ~/.config/sfia-studio-next/recette/.env.local (symlink from worktree .env.local)
- no shared mutable artefact with DEV lane observed

## Build / tests

- npm ci: PASS (lockfile)
- vitest tests/unit/document-act.test.ts: 25 PASS
- tsc --noEmit: PASS
- next build: PASS → BUILD_ID 9yCs2GbSS5lDFX3LPiQTU
- HTTP smoke: `/` `/login` `/portfolio` `/settings/integrations` → 200
  `/api/integrations/status` `/api/portfolio` → 401 SESSION_INVALID (attendu sans session)
  HTML fingerprint `<!--9yCs2GbSS5lDFX3LPiQTU-->`
- migration delta 974b0030…a2c5e9f8: NONE (schemaRevision unchanged)

## User RECETTE

- USER RECETTE status: **NOT RUN**
- R06: NOT RUN (reserved for Morris)
- GO Morris: 2026-11-09 Cycle 11 CRITICAL — préparation + bascule conditionnelle + contrôles + rollback technique si nécessaire
- GO NON ACQUIS: product push / PR / merge / STABLE / release / ADOPTED / REAL mutation / DB restore

## Verdict technique

RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN

date: 2026-11-09T17:43:00+0100
```

### B. Artefacts hors dépôt (référencés, non secrets)

- Backup dir + dump + BACKUP_MANIFEST.json + ROLLBACK_CODE.md (ci-dessus)
- Worktree start scripts (ci-dessus)
- Server logs: …-a2c5e9f8/recette-server.out.log

## 12. Fichiers modifiés — diffs exploitables

### projects/sfia-studio-next/construction/delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 741d04c0..d138cc5b 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1121,3 +1121,27 @@ Append-only logical journal of Cursor product deliveries.
 | Push Product distant | **AUCUN** sans GO distinct |
 | USER E2E | NOT RUN |
 | Verdict candidat | `ML4 RECETTE ENVIRONMENT — STAGED AND VERIFIED — AWAITING MORRIS G4 SWITCH GO` (si build local OK) |
+
+## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-A2C5E9F8
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~17:43 CET |
+| Macro-capacité | R5 / ML4 — Mise à disposition RECETTE macro-correctif Chat First D4 + provenance Git |
+| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
+| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule RECETTE conditionnelle ; push Product / PR / merge / STABLE / REAL mutation **NON inclus** |
+| Source applicative | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` (branche `fix/next-ml4-chat-first-d4-provenance-20261109`) |
+| Tree | `5d245e8adf1d32a7ceec6b129857d94f6398a488` |
+| Build ID servi | `9yCs2GbSS5lDFX3LPiQTU` @ http://127.0.0.1:3200 |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8` |
+| Remplacé | `974b0030…` / BUILD `RzpCuGMK6SnwfucphK7Qa` (artefact préservé) |
+| Migration | **aucune** — `schemaRevision=012_auth_concurrency_safety` inchangé |
+| Données | CampusFlow + D4 v1 `doc_1e5d8c16…` / `drev_c07ca162…` AVAILABLE préservés (md5 `de4bd1a6…`) |
+| Backup | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8` sha256 `7a9dde7b…` — restore DB sans GO Morris **interdit** |
+| Validations | unit document-act 25 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
+| Nora | OPENAI PRESENT ; LIVE behavior **NOT PROVEN** ; profil `TEST_BOUNDARY` |
+| GitHub | App RECETTE 5677465/180092114 ; mutations OFF ; REAL write **NONE** |
+| USER RECETTE | **NOT RUN** — R06 réservé Morris |
+| Push Product / PR / merge | **AUCUN** |
+| Manifeste | `construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md` |
+| Verdict candidat | `RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |
```

### Config hors dépôt

- ~/.config/sfia-studio-next/recette/.env.local : seule clé SFIA_SOURCE_SHA remplacée 974b→a2c5 (backup horodaté). Valeurs secrètes non reproduites.

### Symlink worktree

- …-a2c5e9f8/…/web/.env.local → ~/.config/sfia-studio-next/recette/.env.local (gitignored)

## 13. Preuve absence push projet / PR / merge / mutation GitHub REAL

- Aucun git push de fix/next-ml4-chat-first-d4-provenance-20261109 ni feat/main
- Aucune PR produit créée
- Aucun merge
- Aucune écriture GitHub REAL / flag mutation non activé
- Seul push autorisé ce cycle: handoff L3 sfia/review-handoff (section suivante)

## 14. Statut RECETTE utilisateur & gates

- USER RECETTE = NOT RUN
- Prochaine action Morris (utilisateur, une à une):
  1. Ouvrir RECETTE sur build 9yCs2GbSS5lDFX3LPiQTU / SHA a2c5e9f8…
  2. Vérifier v1 Documents
  3. Demande de révision depuis Nora dans Travail (R06)
  4. Contrôler réponse LIVE et v2 D4
  5. Relecture v1 / section 2
  6. Contrôle R04 provenance Git branche candidate
- Gates encore attendus: Critical Review ChatGPT de cette bascule ; R06 utilisateur ; pas de clôture ML4

## 15. Review Handoff L3

- Mode: publish-in-cycle
- Branche: sfia/review-handoff
- Fichier: sfia-review-handoff/latest-chatgpt-review.md
- Publisher: scripts/sfia/publish-review-handoff.sh
- (détails commit/blob/relecture distante remplis après publication)

FIN PACK — contenu modifié inclus.
