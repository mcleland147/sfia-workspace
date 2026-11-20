# Manifeste RECETTE — Ensemble 06 Journal V4 (non secret)

| Champ | Valeur |
|---|---|
| Date / heure (Europe/Paris) | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 |
| Type | Cycle 8 Delivery / Intégration QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Product Versioning | **NOT AVAILABLE** / `NO RELEASE` / `0.0.0-dev` |
| Dernière STABLE | NOT AVAILABLE |
| Gate Morris UAT | **OUVERT** — campagne utilisateur Morris après mise à disposition |

## Identité Git candidat

| Champ | Valeur |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Branche locale | `sfia/next-journal-delivery-20261119` |
| Base `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Candidate SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Candidate tree | `f5c05cb94f5137d06a26107b7003ab1bf073f923` |
| Ascendance E05 UAT | `5c94c86737f0965c71a7e058e3f1e45ff4415024` **est ancêtre** de HEAD |
| BUILD_ID candidat servi | `PV12SV9VToVGK-ReSxTqk` |
| Push produit / PR / merge | **AUCUN** |

## RECETTE — identité avant cutover

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` |
| SOURCE_SHA | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| BUILD_ID | `IEINNuPl0bHWJOWkh0ZhG` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ PostgreSQL Docker `sfia-next-recette-pg` |
| Schéma Journal 014 | **ABSENT** (tables D4 revisions absentes) |
| Compteurs | projects=23 · messages=560 |

## RECETTE — identité après cutover (servie)

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` (inchangé) |
| SOURCE_SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| BUILD_ID | `PV12SV9VToVGK-ReSxTqk` (HTML `/login` + `.next/BUILD_ID`) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-d5bf7eb7` |
| Script démarrage | `start-recette-ensemble06-d5bf7eb7.sh` |
| Service / LaunchAgent | **même** `com.sfia.studio.next.recette.ml4d-ux004` |
| Config non secrète | `~/.config/sfia-studio-next/recette/.env.local` · `STUDIO_LANE=RECETTE` · `STUDIO_DEV_TEST_LOGIN=1` |
| DB | **même** `sfia_next_recette_ml4` (aucun reset) |
| Schéma Journal 014 | **PRÉSENT** — tables `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events` |
| Compteurs après | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 · summary_revisions=0 |

## Migration 014

| Contrôle | Résultat |
|---|---|
| Fichier | `web/src/db/migrations/014_journal_d4_revisions.sql` |
| Nature | Additive `CREATE TABLE IF NOT EXISTS` + index — **non destructive** |
| Nécessité | Oui (objets absents avant cutover) |
| Application | Une fois, sur RECETTE uniquement, après backup |
| Effet données E05 | Aucune perte constatée (compteurs identiques) |
| DROP/TRUNCATE/reset | **Non exécutés** |

## Sauvegarde et rollback

| Élément | Emplacement |
|---|---|
| Dump PostgreSQL pré-cutover | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Compteurs avant | `…/counts-before.txt` (23 / 560) |
| Build précédent intact | worktree `…ensemble05-recette-build-5c94c867` + BUILD `IEINNuPl0bHWJOWkh0ZhG` |
| Script rollback build | `…ensemble06…/ROLLBACK-TO-5c94c867.sh` (repointe LaunchAgent sur E05) |
| Compatibilité schéma | Retour code E05 **compatible** avec schéma 014 (tables additives non lues par E05) — rollback données **non** automatique |

## Smoke technique RECETTE (non destructif)

| Contrôle | Résultat |
|---|---|
| HTTP `/login` | 200 |
| Login Pilote A (DEV) → portfolio | OK |
| Ouverture projet existant | `proj_4f0e3d47-…` · load-state `ready` |
| Nav Projet / Travail / Journal | Présents (rail) |
| Surface Journal | `project-journal` · onglets Sujets/Décisions · recherche |
| Surface Travail / Nora | `nora-workspace` · 8 messages historiques |
| API `GET …/journal` authentifiée | 200 · clés knowledge/decisions/restrictions/… |
| API journal non authentifiée | 401 `SESSION_INVALID` |
| Fixtures E2E (`journal-fixture`, `s05-fixture`) | **403** `E2E_FIXTURE_FORBIDDEN` / `NODE_ENV_PRODUCTION` |
| Injection données / seeds RECETTE | **Aucune** |

Preuves locales (non commit) : `projects/sfia-studio-next/.tmp-sfia-review/recette-smoke-20261119/`

## Non-régression Ensemble 05 (technique)

| Capacité | Observation smoke |
|---|---|
| Portfolio + projet historique | Accessible |
| Travail / conversation | Consultable (messages présents) |
| Navigation surfaces | Continuum Projet/Travail/Journal |
| Visionneuse / composition E05 | Non rejouée en campagne UAT — **préservée par ascendance Git + absence de régression smoke navigation** |
| Campagne UAT Morris E05 | **Non rejouée** ce cycle (hors mandat) |

## Qualification DEV (candidat `d5bf7eb7`)

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | PASS (rejoué cutover) |
| Journal unit + fixture-gate | 14/14 PASS (rejoué) |
| Cycles delivery antérieurs (même SHA) | lint/build/PG journal-d4 / Playwright journal-v4 / ML3 PG — PASS documentés |
| Full unit suite (env lane) | 3 FAIL préexistants hors Journal (`cognitive-policy`, `github-app-user-oauth`) — **non bloquants Journal / non introduits** |
| ML2 / ML4C / E05 Playwright complets | **NOT RUN** ce cycle — réserve non bloquante (ascendance E05 + smoke surfaces) |
| LIVE Nora 20 tours | **PARTIAL** (E01 seul, arrêt Morris cycle 4) — hors smoke RECETTE |

## Capacités mises à disposition

| Capacité | État |
|---|---|
| Journal V4 shell (Sujets / Décisions) | Disponible en RECETTE |
| Persistance D4 révisions (014) | Schéma disponible |
| Ensemble 05 Travail Nora | Toujours accessible |
| Recette utilisateur / esthétique | **À faire par Morris** — non exécutée ici |
| STABLE / Gate C / ADOPTED | **Non** |

## Réserves

1. UAT fonctionnelle/visuelle Morris **non démarrée**.
2. Suites Playwright ML2/ML4C/E05 exhaustives **non rejouées** sur ce cutover.
3. LIVE Nora CampusFlow **non** rejouée en RECETTE (interdit par mandat).
4. Isolation cookies multi-ports 127.0.0.1 : profil navigateur distinct recommandé (ENV-01).
5. Rollback build ≠ rollback données ; dump disponible si mandat explicite.
6. Code candidat **local non poussé** sur GitHub produit.

## Verdict disponibilité

**RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE**

Avec réserves techniques listées (UAT Morris ouverte ; pas d’acceptation utilisateur déclarée).
