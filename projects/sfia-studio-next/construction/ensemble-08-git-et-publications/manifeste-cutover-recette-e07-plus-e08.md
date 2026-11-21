# Manifeste ENV-01 — Cutover RECETTE E07 + E08 (préparé, non exécuté)

| Champ | Valeur |
| --- | --- |
| Date préparation | 2026-11-21 (Europe/Paris) |
| Classe | **NO RELEASE** |
| Lane cible | **RECETTE existante E07** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **NOT EXECUTED** — GO Morris SHA-specific requis |
| STABLE | NOT AVAILABLE / non modifié |

## Runtime actuellement servi (avant cutover) — observé

| Champ | Valeur observée |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| PID node | 75565 (`next-server` v15.5.29) |
| Script | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` (HTTP `<!--BtZP6qDx5oAw8jwPQSEhc-->` + fichier `.next/BUILD_ID`) |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · `NODE_ENV=production` · pas de hot reload |
| GitHub mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS` unset/vide |
| Nora fixture force | unset (LIVE possible selon secrets lane — non requalifié ici) |

## PostgreSQL RECETTE (observé, non muté)

| Champ | Valeur |
| --- | --- |
| Container | `sfia-next-recette-pg` Up · `127.0.0.1:5434→5432` |
| DB / rôle | `sfia_next_recette_ml4` |
| Isolation | DEV PG distinct `sfia-next-dev-pg` :5433 |
| Inventaire non sensible | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
| Schéma drizzle migrations table | **non observée** dans cette DB (pas de `drizzle.__drizzle_migrations`) |
| Restauration auto | **INTERDITE** — ne pas recréer DB vide ni restaurer dump en écrasement |

## Candidat E08 (à renseigner après freeze + build)

| Champ | Valeur |
| --- | --- |
| Branche source | `feat/next-ensemble08-git-publications-nora` |
| Base main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| SHA candidat | *à compléter après commit freeze* |
| TREE candidat | *à compléter* |
| BUILD_ID candidat | *à compléter après build détaché* |
| Worktree build | *à compléter* |
| Script démarrage préparé | *à compléter* |

## Capacités réellement disponibles après cutover (prévision)

| Capacité | Mode attendu |
| --- | --- |
| E01–E07 | Conservées (même DB + nouveau code) |
| Consultation Git multi-dépôts | Code E08 ; provider selon config RECETTE |
| Nora conduite documentaire | Selon secrets lane ; SCRIPTED ≠ LIVE |
| GitHub REAL WRITE/MERGE | **OFF** sauf GO sandbox explicite |
| G5 visuelle | **NOT PROVEN** — Morris UAT |

## Backup / rollback (préparation)

| Élément | Statut |
| --- | --- |
| Ancien worktree E07 | Disponible `@5ad8fa57` |
| Ancien BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Script rollback | Relancer plist/script E07 `start-recette-ensemble07-5ad8fa57.sh` |
| Backup PG frais | *à produire avant cutover* |
| Rollback DB | Code rollback ≠ DB rollback ; pas de drop/truncate |

## Procédure cutover (exécutable seulement après GO)

1. Confirmer SHA/BUILD_ID cibles = GO Morris.
2. Confirmer backup PG lisible.
3. Arrêter `com.sfia.studio.next.recette.ml4d-ux004`.
4. Appliquer migrations **seulement si nécessaires et non destructives**.
5. Pointer LaunchAgent vers worktree/build E08 figé (même label/port/DB).
6. Relancer service ; vérifier health + identité HTTP BUILD_ID.
7. Vérifier inventaire données ≈ avant.
8. Smoke E07 + E08 ; consigner manifeste final.

## Gate

**GO SHA-SPECIFIC REQUIRED.** Sans GO : **STOP BEFORE MUTATION RECETTE.**
