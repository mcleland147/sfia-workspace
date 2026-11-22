# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)

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

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
(runtime actuellement servi : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **inchangé** par le freeze POST-UAT 01)

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
| Cutover | **NOT EXECUTED** |
| RECETTE actuelle | **préservée** `@98185598` / `1xEbvCdTAX6ht262w4oKF` — **non** branchée sur ce candidat |

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

## Mise à disposition future (NON EXÉCUTÉE)

1. GO Morris SHA-specific + BUILD_ID
2. Worktree/build détaché déjà produit
3. Remplacer le ProgramArguments LaunchAgent **sans** toucher la DB
4. Smoke HTTP BUILD_ID sur :3200
5. Conserver artefacts E07 + E08 `@98185598` pour rollback

## C. Cutover futur

**NOT EXECUTED** — gate Morris distinct rattaché au nouveau SHA/BUILD.

## Identités figées (cohérence)

| Identité | Valeur |
| --- | --- |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Association | BUILD produit depuis worktree détaché au SOURCE_SHA (pas depuis worktree DEV dirty) |

Un commit documentaire ultérieur peut enregistrer ces valeurs sans changer le SOURCE_SHA de cutover : le GO RECETTE futur doit cibler **exactement** ce SHA + BUILD_ID.

## Verdict section B

**CANDIDATE FROZEN — RECETTE GO REQUIRED**
