# Plan de mise à disposition RECETTE — Ensemble 04 (NON EXÉCUTÉ)

Date: 2026-11-16
Statut: **PRÉPARÉ — EN ATTENTE GO MORRIS**
Lane cible: RECETTE existante `http://127.0.0.1:3200`
Aucune exécution dans le cycle de consolidation.

## A. État actuel (observé read-only)

| Champ | Valeur observée |
| --- | --- |
| URL | `http://127.0.0.1:3200` (login HTTP 200) |
| Processus | `node` PID observé (next-server 15.5.29) écoute localhost:3200 |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` (KeepAlive, RunAtLoad) |
| Script | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh` |
| Worktree servi | `…/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672` |
| `SFIA_SOURCE_SHA` | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| BUILD_ID | `bURdIMEzv8pRSJCzgsiDf` (HTML + `.next/BUILD_ID`) |
| Mode | `NODE_ENV=production` ; Nora fixture **non** forcée (LIVE path) |
| Env file | `$HOME/.config/sfia-studio-next/recette/.env.local` (secrets non lus/non reportés) |
| Capacités présentes | Ensembles 01–03 + Sas Nora R1/R2 sur SHA UX-005 |
| Isolation cookies | Ports 310x/3200 partagent `127.0.0.1` — **pas** d’isolation session automatique |

Non observé dans ce cycle (sans ouverture secrets): détail rôle PG, dump DB, volumes uploads exacts, comptes OAuth.

## B. Nouveau candidat (à figer après revue)

| Champ | Valeur |
| --- | --- |
| Branche locale | `feat/next-ml4d-project-space-20261116` |
| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| SHA candidat (après consolidation) | *à reporter du HEAD final du cycle* |
| Migrations | aucune attendue |
| Compat 01–03 | shell projet seulement ; Portefeuille/Sas non redesignés |
| Tests | Ensemble04 + nav-intent + UX-003/004 + T13/T16 |

## C. Préservation

1. Dump logique DB RECETTE (outil habituel d’ops) **avant** bascule.
2. Conserver le worktree `…-bd8e1672` et le LaunchAgent `.bak` actuel.
3. Ne pas toucher DEV (:3102) ni STABLE.
4. Ne pas `drop` / migrate / truncate RECETTE.
5. Conserver volumes/documents/uploads.

## D. Bascule future (après GO)

1. `git fetch` / archive du SHA candidat figé.
2. Worktree dédié `…-recette-build-<sha12>` (pas hot reload).
3. `npm ci` + `next build` dans ce worktree avec env RECETTE.
4. Vérifier BUILD_ID produit.
5. Arrêt contrôlé LaunchAgent actuel.
6. Remplacer ProgramArguments/WorkingDirectory vers le nouveau start script (port **3200** inchangé).
7. `launchctl load` / kickstart.
8. Vérifier HTML build id + `SFIA_SOURCE_SHA` + smoke.

## E. Smoke post-bascule

Connexion · Portefeuille · Sas reprise · Travail · Projet · Journal · Trajectoire (`pilotage`) · indisponible · changement de projet sans fuite.

## F. Retour arrière

1. Relancer LaunchAgent / script `bd8e1672` + BUILD_ID `bURdIMEzv8pRSJCzgsiDf`.
2. Vérifier login 200 et SHA source.
3. Déclenchement: smoke critique rouge, perte de continuité, ou GO Morris rollback.

## G. Manifeste ENV-01 (brouillon)

| Clé | Valeur |
| --- | --- |
| source_sha | *(SHA candidat final)* |
| base_main_sha | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| build_id | *(après build RECETTE)* |
| environment | RECETTE |
| schema_revision | inchangé (à confirmer au build) |
| test_data_revision | données RECETTE conservées |
| quality_evidence | Review Pack + Playwright DEV/E2E |
| capabilities | Ensemble 04 shell projet |
| known_gaps | mapping « Résultats et preuves » ; Ens. 05–07 ; Nora LIVE ≠ FAKE |
| decision | PENDING Morris GO |
| product_version | `0.0.0-dev` / NO RELEASE |

**Ce plan n’autorise aucune bascule.**
