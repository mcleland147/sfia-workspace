# Manifeste ENV-01 — Cutover RECETTE (journal)

## Cutover courant — E08 CORRECTIVE HARDENING (2026-11-22)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-22 ≈ 10:06 CET (UTC 09:06) |
| Classe | **NO RELEASE** |
| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **EXECUTED** — GO Morris triplet exact honoré |
| STABLE | NOT AVAILABLE / non modifié |
| E08 ADOPTED | **NON** |
| Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |

### GO Morris (borné)

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
| Rebuild | **NONE** — artefact figé réutilisé |
| Push/PR/merge projet | **NONE** |
| Mutation GitHub / merge PR#19 | **NONE** |

### Runtime AVANT

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
| Script | `…/ensemble08-gitaudit-build-79188f6c/start-recette-ensemble08-gitaudit-79188f6c.sh` |
| PID launchd / node | 61202 / 61228 |

### Runtime APRÈS — observé

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| Script | `…/ensemble08-corrective-build-7115e932/start-recette-ensemble08-corrective-7115e932.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
| PID launchd / node | 4957 / 4982 |
| HTTP BUILD | `<!--OwQrOGhC9rwk_Dtj31OcM-->` |
| Boot | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWLIST=mcleland147/chantiers360` |
| Listener :3200 | **1** |

### Backup / restore proof / rollback

| Élément | Valeur |
| --- | --- |
| Backup | `…/corrective-build-7115e932/.sfia-recette/backups/ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` (733K) |
| SHA256 | `a765928e95fd8cce52f0a655eee9ea6de96504f224cf2360556c9f276abffa0d` |
| Restore proof | DB temp `sfia_next_recette_restore_proof_corrective` → metrics match → DROP |
| Plist bak | `com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T090524Z.pre-corrective-cutover-79188f6c.bak` |
| Rollback script | `…/corrective-build-7115e932/ROLLBACK-TO-E08-79188f6c.sh` (**prêt**, non exercé) |
| Ancien build | worktree `gitaudit-build-79188f6c` / BUILD `hLsmHa3uFYP0PgRtj49Bh` disponible |

### Métriques DB (avant = après)

projects=26 · documents=117 · document_revisions=188 · messages=673 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4
Oracle D8 : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.

### Smokes

login/portfolio/integrations HTTP 200 + BUILD `OwQrOGhC9rwk_Dtj31OcM` · outils `read_git_commit` / `compare_git_refs` / `read_git_commit_status` présents dans `.next` · REAL READ gh PR#19 OPEN · aucune mutation · Nora LIVE **NOT PROVEN**.

---

## Historique — GLOBAL GITHUB CAPABILITY AUDIT (2026-11-22 ≈ 08:38 CET)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-22 ≈ 08:38 CET (UTC 07:38) |
| Classe | **NO RELEASE** |
| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **EXECUTED** — remplacé ensuite par cutover correctif ci-dessus |
| STABLE | NOT AVAILABLE / non modifié |
| E08 ADOPTED | **NON** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** (historique) |

### GO Morris (borné)

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
| Push/PR/merge projet | **NONE** |
| Mutation GitHub / merge PR#19 | **NONE** |

### Runtime AVANT

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `c67a6ba8bde5c4d818a23fe96d2822a22c050121` |
| BUILD_ID | `tEiDqhhGWNipSWO_86ZoG` |
| Script | `…/ensemble08-chain-build-c67a6ba8/start-recette-ensemble08-chain-c67a6ba8.sh` |
| PID launchd | 30393 |

### Runtime APRÈS — observé

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| Script | `…/ensemble08-gitaudit-build-79188f6c/start-recette-ensemble08-gitaudit-79188f6c.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-gitaudit-build-79188f6c` |
| PID launchd / node | 61202 / 61228 |
| HTTP BUILD | `<!--hLsmHa3uFYP0PgRtj49Bh-->` |
| Boot | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWLIST=mcleland147/chantiers360` |

### Backup / restore proof / rollback

| Élément | Valeur |
| --- | --- |
| Backup | `…/gitaudit-build-79188f6c/.sfia-recette/backups/ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` |
| SHA256 | `7aceda094b5ba195e531a3c5c3c17f6581bec24e8eb94bfaa3df3a8c9f0d98e1` |
| Restore proof | DB temp `sfia_next_recette_restore_proof_gitaudit` → metrics match → DROP |
| Plist bak | `com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T073809Z.pre-gitaudit-cutover-c67a6ba8.bak` |
| Rollback script | `…/gitaudit-build-79188f6c/ROLLBACK-TO-E08-c67a6ba8.sh` (non exercé) |
| Ancien build | worktree `chain-build-c67a6ba8` / BUILD `tEiDqhhGWNipSWO_86ZoG` disponible |

### Métriques DB (avant = après)

projects=26 · documents=117 · document_revisions=188 · messages=657 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4
Oracle D8 : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.

### Smokes

login/portfolio/integrations HTTP 200 · outils Nora présents dans `.next` · REAL READ gh PR#19 OPEN · aucune mutation.

---

# Historique — Cutover RECETTE E07 → E08 (exécuté 2026-11-21)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-21 ≈ 21:02 CET (UTC 20:02) |
| Classe | **NO RELEASE** |
| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **EXECUTED** — GO Morris SHA-specific honoré |
| STABLE | NOT AVAILABLE / non modifié |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## GO Morris (borné)

| Champ | Valeur |
| --- | --- |
| SHA autorisé | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Push/PR/merge projet | **NONE** |
| GitHub REAL WRITE/MERGE | **OFF** |

## Runtime AVANT (E07)

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Script | `start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| PID node | 75565 |

## Runtime APRÈS (E08) — observé

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| Script | `…/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| WorkingDirectory | `…/web` |
| PID launchd / node | 52210 / 52237 (`next-server` v15.5.29) |
| SOURCE_SHA (script) | `98185598de0d3f3b84af862aecea04b9099217ca` |
| BUILD_ID fichier + HTTP | `1xEbvCdTAX6ht262w4oKF` (`<!--1xEbvCdTAX6ht262w4oKF-->`) |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production · pas de hot reload |
| Login HTTP | 200 |

## Actions cutover (exactes)

1. Plist backup : `com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak`
2. `launchctl bootout` du service
3. ProgramArguments → `start-recette-ensemble08-98185598.sh` ; WorkingDirectory → E08 `web/`
4. `launchctl bootstrap` même label
5. Vérification HTTP BUILD_ID + CWD processus

## PostgreSQL / données

| Champ | Valeur |
| --- | --- |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` (`sfia-next-recette-pg`) |
| Isolation DEV | `sfia-next-dev-pg` :5433 distincte |
| Migrations E08 | **aucune** appliquée (invariant confirmé) |
| Inventaire AVANT | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
| Inventaire APRÈS smoke | projects=**26** · messages=**633** (+4 essais Playwright Nora) · sessions=**123** (logins test) · Equip'Campus `proj_a9ce5f43…` présent · conversations=1 · messages=14 |
| Perte anormale | **NON** |

## Backup / restauration / rollback

| Élément | Statut |
| --- | --- |
| Backup historique | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` — gzip OK |
| Backup immédiat pré-cutover | `ml4d-e07-pre-e08-cutover-immediate-20261121T200119Z-from-5ad8fa57.sql.gz` — gzip OK |
| Preuve restore isolée | CREATE `sfia_next_recette_restore_proof_e08` → restore → projects=26/messages=629 → DROP — RECETTE intacte |
| Rollback E07 code | Worktree + BUILD `BtZP6qDx5oAw8jwPQSEhc` + plist `.bak` conservés — **non exercé** (cutover OK) |

## Capacités observées

| Capacité | Observation | Niveau |
| --- | --- | --- |
| E07 surfaces (Pilot A test login) | `/projects/…` travail/projet/trajectoire/documents/git → HTTP 200 | Browser/API smoke |
| Equip'Campus (Morris) | Présent en DB (identité OAuth Morris non exercée ce cycle) | DB continuity |
| Intégrations | `providerMode=REAL`, `status=DISCONNECTED` pour Pilot A | REAL config, non connecté |
| Git sources/pubs API | 200, listes vides sans dépôt rattaché | DETERMINISTIC path |
| GitHub REAL WRITE | Mutations OFF (`STUDIO_GITHUB_ALLOW_MUTATIONS` vide) | NOT PROVEN / OFF |
| Nora | Clé OPENAI présente en RECETTE → LIVE possible | LIVE config ; E2E conduit NOT PROVEN |
| Playwright E08 SCRIPTED | **3/3 FAIL** sur RECETTE — attendu (fixture≠LIVE ; connect SCRIPTED≠OAuth REAL) | N/A as REAL proof |
| G5 | **NOT PROVEN** — Morris UAT | Différé |

## Fake / Real

| Frontière | Niveau |
| --- | --- |
| Runtime build servi | REAL BOUNDARY (artefact figé servi) |
| PostgreSQL RECETTE | REAL BOUNDARY (même DB) |
| GitHub provider mode | REAL configuré ; WRITE OFF ; connexion Pilot A absente |
| Nora | LIVE credentials présents ; parcours conduit NOT PROVEN |
| Playwright SCRIPTED | NOT applicable as RECETTE proof |

## Réserves / gates Morris

1. UAT visuelle page 11 (G5)
2. Parcours Git avec compte Morris + App autorisée
3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
4. GO éventuel sandbox WRITE/MERGE
5. Push/PR projet hors cycle

## Verdict manifeste (cutover historique)

**RECETTE AVAILABLE — MORRIS UAT REQUIRED** (cutover E07→E08 historique)
(runtime post-cutover E08 initial : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — remplacé ensuite par section C POST-UAT 01)

---

# B. Candidat E08 POST-UAT 01 — freeze local (préparé)

| Champ | Valeur |
| --- | --- |
| Date/heure freeze local | 2026-11-22 ≈ 04:33 CET (Europe/Paris) |
| GO Morris | Freeze local + build détaché **autorisés** ; cutover RECETTE **non** autorisé |
| Classe | **NO RELEASE** · CANDIDAT |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Parent commit | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| SOURCE_SHA (candidat runtime) | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Artefact | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web/.next` |
| Worktree build | détaché @ `9f346391` — hors DEV mutable / hors :3200 |
| Cutover (freeze) | préparé puis **exécuté** — voir section C |
| Artefact runtime | inchangé `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` |

## Contenu candidat

- Ensemble 08 initial + correctifs UX POST-UAT 01
- Publication document existant + réconciliation `objectRef`/`documentHint`
- Contrôle D4 document/révision ; D6/D7/D8/D9 ; restitution Nora
- Reprise/idempotence ; filtre branche S03 (fix useEffect)
- Preuves : unit + PG WRITE OFF / SCRIPTED contenu D4↔Git + terminalité COMPLETED + Playwright Nora/Git

## Fake / Real (candidat)

| Frontière | Niveau |
| --- | --- |
| Unit / PG / SCRIPTED | DETERMINISTIC PROVEN |
| Playwright DEV SCRIPTED | BROWSER + Git simulé |
| Nora LIVE | NOT PROVEN |
| GitHub REAL WRITE/MERGE | NOT PROVEN |
| G5 pixel / UAT Morris | NOT PROVEN |

## Migrations

Aucune migration DB additionnelle requise pour ce candidat (vérifiée — schéma RECETTE `sfia_next_recette_ml4` compatible).

## Identités figées (cohérence)

| Identité | Valeur |
| --- | --- |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Association | BUILD produit depuis worktree détaché au SOURCE_SHA (pas depuis worktree DEV dirty) |

HEAD documentaire `35906960…` **n’est pas** la source runtime.

## Verdict section B (freeze)

**CANDIDATE FROZEN** — cutover traité en section C.

---

# C. Mise à disposition RECETTE — POST-UAT 01 (exécutée)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-22 ≈ 04:50 CET (UTC 03:50) |
| GO Morris | SHA/TREE/BUILD indivisibles honorés |
| Classe | **NO RELEASE** |
| Lane | RECETTE existante `:3200` · `STUDIO_LANE=RECETTE` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| SOURCE_SHA servi | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID HTTP | `<!--F85QQBTLa8nq5zKYxMKKZ-->` |
| Script | `…/ensemble08-postuat-build-9f346391/start-recette-ensemble08-postuat-9f346391.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391` |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` — **aucune migration** |
| GitHub | `providerMode=REAL` · `STUDIO_GITHUB_ALLOW_MUTATIONS` vide (WRITE OFF) |
| Nora | LIVE credentials conservés · fixtures OFF · conduit NOT PROVEN |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## Runtime AVANT → APRÈS

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE_SHA | `98185598de0d3f3b84af862aecea04b9099217ca` | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` | `F85QQBTLa8nq5zKYxMKKZ` |
| Script | `start-recette-ensemble08-98185598.sh` | `start-recette-ensemble08-postuat-9f346391.sh` |

## Backup / restore proof

| Élément | Valeur |
| --- | --- |
| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` |
| Emplacement | `…/ensemble08-recette-build-98185598/.sfia-recette/backups/` |
| Bytes / SHA256 | 716129 / `80c5e8aef39197261aa086fb762e105656b5c6cbfa61bb9face811fc139b49b5` |
| Restore proof | DB temp `sfia_next_recette_restore_proof_e08_postuat` → projects=26 messages=639 → DROP |
| RECETTE active | intacte pendant/après proof |

## Inventaire données (identique avant/après cutover)

projects=26 · documents=117 · document_revisions=188 · conversations=205 · messages=639 · sessions=124 · users=4 · accounts=2 · project_git_links=15 · effect_attempts=4 · human_decisions=3 · observed_git_facts=0 · Equip'Campus `proj_a9ce5f43…` présent

## Rollback préparé (non exercé)

- Plist bak : `com.sfia.studio.next.recette.ml4d-ux004.plist.98185598.pre-postuat-cutover-20261122T035032Z.bak`
- Artefact E08 `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` conservé
- Script `ROLLBACK-TO-E08-98185598.sh` dans worktree postuat
- Artefact E07 `BtZP6qDx5oAw8jwPQSEhc` en réserve

## Smokes

| Contrôle | Résultat |
| --- | --- |
| HTTP login/portfolio/integrations | 200 + BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Process/CWD | next-server · worktree `…postuat-build-9f346391…/web` · TCP → `:5434` |
| Surfaces projet Pilot A | travail/projet/trajectoire/documents/git/publications HTTP 200 |
| Integrations API | `REAL` / `DISCONNECTED` (Pilot A) · repos=0 |
| Git sources/pubs Pilot A | 200 listes vides (pas d’OAuth Pilot A ; compte Morris non perturbé) |
| WRITE REAL | OFF — aucune mutation distante |
| Nora LIVE E2E | NOT PROVEN |
| G5 | NOT PROVEN |

## Verdict section C

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

---

# D. FINALISATION UX + REAL WRITE policy — cutover exécuté

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-22 ≈ 06:12 CET (UTC 05:12) |
| GO Morris | Macro-lot FINALISATION intégré · ENV-01 sur lane existante |
| Classe | **NO RELEASE** |
| Lane | RECETTE existante `:3200` · `STUDIO_LANE=RECETTE` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| SOURCE_SHA servi | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| BUILD_ID HTTP | `<!--zKGLfPHM1TMilec4qglJv-->` |
| Script | `…/ensemble08-final-build-f1907aad/start-recette-ensemble08-final-f1907aad.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-final-build-f1907aad` |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` — **aucune migration** |
| GitHub READ | REAL configuré (App RECETTE) |
| GitHub WRITE | **OFF** — `STUDIO_GITHUB_ALLOW_MUTATIONS=` · `GITHUB_APP_WRITE_ALLOWED_REPOS=` |
| REAL WRITE mutation | **NOT PROVEN** — sandbox/GO non nommé |
| Nora | LIVE credentials conservés · fixtures OFF · conduit NOT PROVEN |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## Runtime AVANT → APRÈS

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` | `zKGLfPHM1TMilec4qglJv` |
| Script | `start-recette-ensemble08-postuat-9f346391.sh` | `start-recette-ensemble08-final-f1907aad.sh` |

## Backup / restore proof

| Élément | Valeur |
| --- | --- |
| Backup | `ml4d-e08-pre-final-cutover-20261122T051131Z-from-9f346391.sql.gz` |
| Emplacement | `…/ensemble08-postuat-build-9f346391/.sfia-recette/backups/` |
| Bytes / SHA256 | 717905 / `ac2bb78fd59081e2a9677b0bd33c4cc0236109080ee1f74e623b3311acc34f58` |
| Restore proof | DB temp `sfia_next_recette_restore_proof_e08_final` → projects=26 messages=641 → DROP |
| RECETTE active | intacte pendant/après proof |

## Inventaire données (pré/post cutover)

projects=26 · documents=117 · document_revisions=188 · conversations=205 · messages=641 · sessions=125 · users=4 · accounts=2 · project_git_links=15 · effect_attempts=4 · human_decisions=3 · observed_git_facts=0 · Equip'Campus `proj_a9ce5f43…` présent

## Rollback préparé (non exercé)

- Plist bak : `com.sfia.studio.next.recette.ml4d-ux004.plist.9f346391.pre-final-cutover-20261122T051200Z.bak`
- Artefact `@9f346391` / BUILD `F85QQBTLa8nq5zKYxMKKZ` conservé
- Script `ROLLBACK-TO-E08-9f346391.sh` dans worktree final

## Smokes

| Contrôle | Résultat |
| --- | --- |
| HTTP login/portfolio/integrations | 200 + BUILD `zKGLfPHM1TMilec4qglJv` |
| Process/CWD | next-server · worktree `…final-build-f1907aad…/web` · 1 listener `:3200` |
| WRITE REAL | OFF — aucune mutation distante |
| Nora LIVE E2E | NOT PROVEN |
| G5 11.06 F2 | PROVEN en DEV ; UAT Morris distinct |

## Verdict section D

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
