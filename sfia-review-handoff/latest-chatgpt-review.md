# SFIA STUDIO NEXT — Review Pack FULL — ML4D Sas Nora RECETTE cutover

## GO Morris reçu

GO EXPLICITE MORRIS — 16 NOVEMBRE 2026 — Mise à disposition RECETTE du candidat
`bd8e16728f3c2a726a49be4c94565a2d85fc41a9` (C1–C4 + R1/R2). Critical Review ChatGPT PASS avec réserves non bloquantes.
Bascule d'environnement uniquement — pas de nouveau développement produit.

## Git Truth local (initial = final candidat)

| Champ | Valeur |
| --- | --- |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD candidat | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Parent | `6798219fdb37af1b463326dc7015901b43b04acd` |
| Tree web | `1abe4103eb16e4dc899a352206472753bbe9fb04` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672` @ `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Tree web worktree | `1abe4103eb16e4dc899a352206472753bbe9fb04` |
| Dirty produit | `.tmp-sfia-review/chatgpt-review.md` only (pack local) |
| Handoff précédent | `10e6c9784de4ba03bb132e9b88bbea32e6879a75` |

## ENV-01 isolation

| Lane | Port app | PostgreSQL | Conteneur / DB |
| --- | --- | --- | --- |
| DEV | 3102 (down at cutover) | 5433 | sfia-next-dev-pg |
| RECETTE | 3200 | 5434 | sfia-next-recette-pg / sfia_next_recette_ml4 |
| STABLE | NOT AVAILABLE | — | — |

Secrets hors Git : `~/.config/sfia-studio-next/recette/.env.local` (0600).
Documents : `~/.config/sfia-studio-next/recette/documents`.
Aucun accès croisé DEV/RECETTE constaté. LaunchAgent DEV non modifié.

## État RECETTE avant bascule

- SHA servi : `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e`
- BUILD : `67akzrr6bFEp4YOh7aHD7`
- Worktree : `.../sfia-workspace-next-ml4d-sas-nora-recette-build-ec7405f3`
- LaunchAgent : `com.sfia.studio.next.recette.ml4d-ux004`
- Inventaire DB : projects=21, preparations=189, conversations=189, messages=474
- Projet Morris : `Cockpit Réunions Projet — Test 16-11` présent
- Colonne `preparations.projection_json` présente (schéma 013)

## Sauvegarde et préservation

- Dossier : `/Users/morris/Projects/sfia-recette-backups/ml4d-sas-nora-20261116-180459-pre-bd8e1672`
- Dump custom `-Fc` : `sfia_next_recette_ml4_pre_bd8e1672.dump`
- DUMP_META.json :
```json
{
  "created_at": "2026-11-16T18:04:59.326708+01:00",
  "source_container": "sfia-next-recette-pg",
  "source_db": "sfia_next_recette_ml4",
  "source_port": 5434,
  "format": "custom(-Fc)",
  "bytes": 515542,
  "sha256": "e94b1b2905b804bf00db4c5862af7d7ff6fbfbcd7269d18c934fdf58354eeb7d",
  "candidate_pending": "bd8e16728f3c2a726a49be4c94565a2d85fc41a9",
  "previous_served_sha": "ec7405f323f86a0533dc507a1bfffc60ca1e5d0e",
  "previous_served_build": "67akzrr6bFEp4YOh7aHD7",
  "purpose": "pre-cutover RECETTE backup before Sas Nora bd8e1672",
  "inventory": {
    "projects": 21,
    "preparations": 189,
    "conversations": 189,
    "messages": 474,
    "projection_json_present": true,
    "cockpit_test_16_11_present": true
  }
}
```

Rollback code (sans reset DB) :
```markdown
# Rollback applicatif RECETTE — Sas Nora

## Cible de retour
- SHA: ec7405f323f86a0533dc507a1bfffc60ca1e5d0e
- Build: 67akzrr6bFEp4YOh7aHD7
- Worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-ec7405f3
- Start: start-recette-sas-nora-ec7405f3.sh

## Procédure (code only — pas de reset DB)
1. launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004
2. Restaurer le plist pointant vers le worktree ec7405f3
3. launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist
4. Vérifier http://127.0.0.1:3200/login → build 67akzrr6bFEp4YOh7aHD7

## DB
Le dump présent dans ce dossier est une sauvegarde de sécurité.
Ne pas restaurer automatiquement sans GO Morris (risque d'écrasement des données post-bascule).
```

## Construction candidat

- Worktree détaché au SHA exact `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
- `npm ci` puis `next build` (NODE production, STUDIO_E2E=0)
- BUILD_ID artefact : `bURdIMEzv8pRSJCzgsiDf`
- BUILD_ID servi observé : `bURdIMEzv8pRSJCzgsiDf`
- Identité build DEV historique `GIa-3DQDG_kcmC9uzzgbG` = référence de preuve, distincte du build RECETTE
- Aucune migration exécutée ; aucun patch code

## Bascule exécutée

1. Préchecks PASS (build prêt, ancien runtime identifié, backup OK)
2. `launchctl bootout gui/$UID/com.sfia.studio.next.recette.ml4d-ux004`
3. Port 3200 libéré
4. Plist mis à jour vers start script bd8e1672
5. `launchctl bootstrap` + health `/login` 200
6. Timestamp cutover : 2026-11-16T18:06:00+01:00
7. Un seul listener 3200 ; cwd = worktree bd8e1672

## Configuration de service (sans secrets)

### start-recette-sas-nora-bd8e1672.sh
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=bd8e16728f3c2a726a49be4c94565a2d85fc41a9
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
# Do not force Nora fixture — LIVE path for Morris séances
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
exec npx next start -H 127.0.0.1 -p 3200
```

### LaunchAgent plist (paths only)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>EnvironmentVariables</key>
	<dict>
		<key>PATH</key>
		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
	</dict>
	<key>KeepAlive</key>
	<true/>
	<key>Label</key>
	<string>com.sfia.studio.next.recette.ml4d-ux004</string>
	<key>ProgramArguments</key>
	<array>
		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
	<key>StandardErrorPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/launchd.err.log</string>
	<key>StandardOutPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/launchd.out.log</string>
	<key>WorkingDirectory</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/projects/sfia-studio-next/web</string>
</dict>
</plist>
```

## Santé runtime + identité servie

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| `/login` | 200 |
| BUILD_ID servi | `bURdIMEzv8pRSJCzgsiDf` |
| source_sha worktree | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| tree_web | `1abe4103eb16e4dc899a352206472753bbe9fb04` |
| Service | LaunchAgent com.sfia.studio.next.recette.ml4d-ux004 pid next-server |
| Package | 0.0.0-dev |

## Smoke tests (non destructifs)

| ID | Résultat | Notes |
| --- | --- | --- |
| S01 Runtime | PASS | port 3200, 1 listener, build attendu |
| S02 Version | PASS | SHA/tree exacts ; projection_json présent |
| S03 Identité | PASS | `/api/dev/login` Pilote A ; portfolio 200 |
| S04 Données | PASS | Cockpit Test 16-11 lisible ; 21 projets conservés |
| S05 Sas | PASS | aperçu + composer ; pas Ajuster/constitute/edit |
| S06 Continuité | PASS | projet existant 200 après reload |
| S07 Frontières | PASS | OPENAI configuré ; mutations Git désactivées ; ≠ preuve LIVE |

Effet collatéral smoke : +2 préparations API (189→191) ; **0 nouveau projet**.

## Non-régression données

- Projets : 21 (inchangé)
- Messages : 474 (inchangé)
- Cockpit Réunions Projet — Test 16-11 : présent
- Aucun DROP/TRUNCATE/reset/migration

## Rollback statut

- Rollback applicatif vers `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` : **DISPONIBLE** (worktree + start script + plist bak)
- Restauration dump DB : **NON exécutée** ; réservée à GO Morris (risque d'écrasement post-bascule)

## Manifeste RECETTE

```yaml
lane: RECETTE
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-sas-nora-convergence-20261116
source_sha: bd8e16728f3c2a726a49be4c94565a2d85fc41a9
tree_web: 1abe4103eb16e4dc899a352206472753bbe9fb04
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
build_id: bURdIMEzv8pRSJCzgsiDf
package_version: 0.0.0-dev
product_version: NOT AVAILABLE
schema_revision: 013
served_address: http://127.0.0.1:3200
previous_recette_sha: ec7405f323f86a0533dc507a1bfffc60ca1e5d0e
previous_recette_build: 67akzrr6bFEp4YOh7aHD7
candidate_status: DEPLOYED FOR MORRIS RECETTE
morris_ux: PENDING
nora_live_behavior: NOT PROVEN
stable: NOT AVAILABLE
release: NO RELEASE
```

## Réserves / gate suivant

- Morris UX conversation LIVE : PENDING
- Nora LIVE behavior : NOT PROVEN sur ce candidat
- Isolation cookies same-host DEV/RECETTE : réserve ENV-01 historique
- Gate C / ML5 / STABLE / merge : NON ENGAGÉS

## Verdict

**RECETTE DEPLOYED WITH RESERVES — MORRIS UX PENDING**

Generated: 2026-11-16T18:08:20.976024+01:00
