# SFIA Review Pack FULL — Ensemble 07 · Mise à disposition RECETTE `c500df9c`

> Mono-cycle déploiement. Handoff gel local : `2a6e768c` / blob `0c0eb890`.

## 1. GO Morris

| | |
|---|---|
| Date | 2026-11-21 |
| GO | Mise à disposition RECETTE du candidat local figé |
| SHA autorisé | `c500df9ce58575783bcb842bf83658e1837990a3` |
| Tree | `3794e3443906e144460e3f00ba1e82bb3504fdd3` |
| Interdit | push projet · PR · merge · Nora LIVE · UAT acceptation · STABLE · release |
| Versioning | NO RELEASE · Gate C OPEN |

## 2. Pré-check Git local

| Contrôle | Résultat |
|---|---|
| Worktree candidat | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `c500df9c…` **OK** |
| Tree | `3794e344…` **OK** |
| Parent | `6ecdb987…` **OK** |
| Fichiers commit | 19 **OK** |
| Index staged | vide |
| Untracked | preuves/scripts exclus du build (worktree détaché propre) |
| Nouveau commit produit | **NONE** |

## 3. Sources

- Handoff gel `2a6e768c` / blob `0c0eb890`
- ENV-01 `environnements-recette-et-promotions.md`
- Manifeste historique E07 `…-recette-build-6ecdb987/.sfia-recette/RECETTE-MANIFEST.md`
- Procédure LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`

## 4. RECETTE initiale (avant bascule)

```
captured_at_utc=20261121T073307Z
old_worktree=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987
old_sha=6ecdb987ee867a04ff816b699eb8870ac200db0a
old_tree=d0ad47ff515676f1c033a39030e886859f7272f7
old_build_id=armX_D1HJzN6q-4MuDpYv
old_start=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh
service=com.sfia.studio.next.recette.ml4d-ux004
port=3200
db=sfia_next_recette_ml4@127.0.0.1:5434
listener_pid=6819

```

| | |
|---|---|
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` running |
| Program | `…/ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh` |
| BUILD_ID HTML | `armX_D1HJzN6q-4MuDpYv` |
| DB | `sfia_next_recette_ml4` @ `:5434` container `sfia-next-recette-pg` |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (secrets non publiés) |
| FORCE fixture in env | **absent** (OPENAI_API_KEY SET ; fournisseur configuré, non testé LIVE) |

## 5. Préflight ENV-01

- Port 3200 = LaunchAgent ml4d-ux004 uniquement
- DSN host/port/db = 127.0.0.1:5434 / sfia_next_recette_ml4
- Documents root = `~/.config/sfia-studio-next/recette/documents`
- Cookie scope RECETTE
- Aucune activité utilisateur détectée à interrompre (HTTP login 200, pas de session Morris ouverte par Cursor)

## 6. Sauvegarde / reprise

| Artefact | Chemin |
|---|---|
| Dump CUSTOM | `/Users/morris/Projects/sfia-recette-backups/ml4d-e07-20261121-pre-c500df9c/sfia_next_recette_ml4_pre_c500df9c.dump` |
| TOC | 276 entrées — `pg_restore -l` OK |
| Plist bak | `…plist.6ecdb987.pre-c500df9c.bak` + backup dir |
| Ancien WT | `…-recette-build-6ecdb987` **préservé** (BUILD `armX_D1HJzN6q-4MuDpYv`) |
| Script rollback | `ROLLBACK-TO-6ecdb987.sh` (bootout → restore plist → bootstrap → verify) |

**Note :** rollback code ≠ restauration données automatique. Dump disponible si besoin distinct.

## 7. Nouvel artefact

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c` |
| Checkout | detached `c500df9c` / tree `3794e344` |
| npm | `npm ci` (devDeps inclus pour build) |
| Build | `next build` production avec DSN RECETTE ; `STUDIO_FORCE_NORA_FIXTURE` forcé vide |

```json
{
  "sourceSha": "c500df9ce58575783bcb842bf83658e1837990a3",
  "tree": "3794e3443906e144460e3f00ba1e82bb3504fdd3",
  "parent": "6ecdb987ee867a04ff816b699eb8870ac200db0a",
  "nextBuildId": "Ispeg3--Q3_t1Qf1JJWDZ",
  "builtAtUtc": "2026-11-21T07:34:42Z",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c"
}

```

## 8. BUILD_ID

**`Ispeg3--Q3_t1Qf1JJWDZ`** — présent dans HTML `/login` après bascule ; ancien BUILD absent.

## 9. Configuration expurgée

| Clé | Valeur non secrète |
|---|---|
| STUDIO_LANE | RECETTE |
| STUDIO_PORT | 3200 |
| SFIA_SOURCE_SHA (start script) | c500df9ce58575783bcb842bf83658e1837990a3 |
| STUDIO_FORCE_NORA_FIXTURE | unset/empty (contrat) |
| STUDIO_GITHUB_ALLOW_MUTATIONS | empty |
| DATABASE_URL | 127.0.0.1:5434 / sfia_next_recette_ml4 |
| OPENAI_API_KEY | SET (configuré) — **LIVE NOT RUN** |
| SFIA_COG_PROFILE_TYPE | TEST_BOUNDARY |

## 10. Schéma / DB

- Migrations fichiers identiques parent↔candidat (001–016) — **aucune migration exécutée**
- Objets 015/016 déjà présents (`trajectory_qualification_operations`, `forecast_json`, `initial_qualification_expected`)
- Counts post-smoke :
```
projects|26
messages|627
documents|117
conversations|203

```

## 11. Bascule

1. Backup dump + plist
2. Build artefact nouveau
3. Écriture start script + rollback + plist
4. `launchctl bootout` label ml4d-ux004
5. Vérif port 3200 libre
6. `bootstrap` + `kickstart`
7. Ready en ~2 s — Next 15.5.29 Ready 321ms

## 12. Contrôles RCT-01…14

| ID | Résultat |
|---|---|
| RCT-01 | PASS — node cwd = nouveau WT ; LaunchAgent program = start-c500df9c |
| RCT-02 | PASS — start script exporte `SFIA_SOURCE_SHA=c500df9c…` ; chaîne LaunchAgent vérifiée |
| RCT-03 | PASS — HTML BUILD_ID = `Ispeg3--Q3_t1Qf1JJWDZ` |
| RCT-04 | PASS — DB accessible ; schéma 015/016 OK ; counts stables (projets/docs) |
| RCT-05 | PASS — login Pilote A + portfolio |
| RCT-06 | PASS — `nav-new-prep` → préparation ouverte (voir anomalie) |
| RCT-07 | PASS — projet smoke E07 Travail accessible |
| RCT-08 | PASS — Projet/Trajectoire/Journal/Documents chargent (projet smoke) ; Equip'Campus réservé identité Morris |
| RCT-09 | PASS — Journal + Documents surfaces OK |
| RCT-10 | PASS — navigation rail sans erreur technique |
| RCT-11 | PASS — cookie `sfia_studio_session__RECETTE` ; Equip'Campus API 404 pour Pilot A |
| RCT-12 | PASS — launchd.err vide ; out = Ready |
| RCT-13 | PASS — ancien WT + dump + rollback script |
| RCT-14 | PASS — manifeste aligné runtime |

### Preuve browser (JSON)

```json
[
  {
    "id": "RCT-03",
    "ok": true,
    "detail": "BUILD_ID in login HTML"
  },
  {
    "id": "RCT-05",
    "ok": true,
    "detail": "portfolio loaded content"
  },
  {
    "id": "RCT-06",
    "ok": true,
    "detail": "nav-new-prep present"
  },
  {
    "id": "RCT-06b",
    "ok": true,
    "detail": "navigated to http://127.0.0.1:3200/preparations/prep_fef253ff-03ce-458c-86e7-b84b2d4c8260"
  },
  {
    "id": "RCT-0travail",
    "ok": true,
    "detail": "status=200 len=1481"
  },
  {
    "id": "RCT-0projet",
    "ok": true,
    "detail": "status=200 len=934"
  },
  {
    "id": "RCT-0pilotage",
    "ok": true,
    "detail": "status=200 len=746"
  },
  {
    "id": "RCT-0journal",
    "ok": true,
    "detail": "status=200 len=660"
  },
  {
    "id": "RCT-0document",
    "ok": true,
    "detail": "status=200 len=760"
  },
  {
    "id": "RCT-10",
    "ok": true,
    "detail": "rail navigation without technical error"
  },
  {
    "id": "RCT-11",
    "ok": true,
    "detail": "sfia_studio_session__RECETTE"
  }
]
```

## 13. Captures

Répertoire preuves : `.tmp-sfia-review/ensemble07-recette-deploy-c500df9c/`
(PNG portfolio, surfaces smoke, API JSON — hors commit produit)

## 14. Manifeste non secret

```markdown
# ENV-01 — Manifeste mise à disposition RECETTE Ensemble 07 (correctif)

**Date UTC :** 2026-11-21T07:40:00Z (approx.)
**Gate :** GO RECETTE Morris 21/11/2026
**Versioning :** NO RELEASE · Gate C OPEN · STABLE NOT AVAILABLE
**user_acceptance :** PENDING

## Identité

| Champ | Valeur |
|---|---|
| environment | RECETTE |
| repository | mcleland147/sfia-workspace |
| source_branch | sfia/next-ensemble07-projet-trajectoire-delivery |
| source_sha / candidate_sha | `c500df9ce58575783bcb842bf83658e1837990a3` |
| source_tree | `3794e3443906e144460e3f00ba1e82bb3504fdd3` |
| parent_sha | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| base_main_sha (observé) | `542da1de917867b6bbda8b2b57d100552711c9aa` |
| merge_base construction | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| build_id | `Ispeg3--Q3_t1Qf1JJWDZ` |
| served_address | http://127.0.0.1:3200 |
| product_version | NOT AVAILABLE |
| candidate_version | NOT AVAILABLE |
| release_status | NO RELEASE |
| service | com.sfia.studio.next.recette.ml4d-ux004 |
| runtime_worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c` |
| start_script | start-recette-ensemble07-c500df9c.sh |

## Schéma / données

| Champ | Valeur |
|---|---|
| schema_revision | 001–016 présents (objets 015/016 vérifiés) — **aucune migration** ce cycle |
| dataset_revision | DB `sfia_next_recette_ml4` @ 127.0.0.1:5434 conservée |
| counts_post_smoke | projects=26 · messages=627 · documents=117 · conversations=203 |
| Equip'Campus | présent (owner pilot_98a7a89e / mcleland147) — non ouvert en smoke Pilot A |

## Rollback

| Champ | Valeur |
|---|---|
| rollback_reference | SHA `6ecdb987ee867a04ff816b699eb8870ac200db0a` · BUILD `armX_D1HJzN6q-4MuDpYv` · WT `…-recette-build-6ecdb987` |
| backup_dir | `/Users/morris/Projects/sfia-recette-backups/ml4d-e07-20261121-pre-c500df9c` |
| dump | sfia_next_recette_ml4_pre_c500df9c.dump (TOC 276, lisible) |
| rollback_script | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/ROLLBACK-TO-6ecdb987.sh` |
| plist_bak | `~/Library/LaunchAgents/…plist.6ecdb987.pre-c500df9c.bak` |

## Capacités

| Testées (smoke technique) | Non testées / réservées |
|---|---|
| Login DEV test + portfolio Pilot A | Nora LIVE |
| Surfaces Travail/Projet/Trajectoire/Journal/Documents sur projet smoke E07 | Parcours Equip'Campus sous identité Morris |
| Cookie `sfia_studio_session__RECETTE` | GO métier D5/D6 |
| Isolation droits (Equip'Campus 404 pour Pilot A) | GitHub REAL mutations |
| BUILD_ID servi = candidat | UAT utilisateur |

## quality_evidence

- DEV gel : tsc/unit 706/PG 525/browser 7/parcours 7+2/build PASS (handoff `2a6e768c`)
- RECETTE smoke RCT-01…14 : voir Review Pack

## known_gaps

- LIVE Nora NOT RUN
- Equip'Campus UAT PENDING (identité Morris)
- CONFLICT/UNKNOWN browser NOT RUN
- Click `nav-new-prep` a ouvert/créé une préparation (conversations 202→203) — pas de commande D5/D6

```

## 15. Anomalies / interventions

1. `npm ci` initial sous `NODE_ENV=production` omettait typescript → réinstall avec devDeps (pas de changement lockfile Git).
2. Build exige `DATABASE_URL` RECETTE pour collect page data — DSN isolé `:5434` vérifié.
3. Click smoke `nav-new-prep` a ouvert une préparation (conversations 202→203). **Pas** de D5/D6/Nora LIVE.
4. Equip'Campus non accessible via Pilote A (attendu — owner `mcleland147`) ; UAT Morris requise.
5. `ps eww` macOS n'expose pas l'env LaunchAgent ; preuve SHA via script de démarrage + BUILD_ID HTML + cwd.

## 16. Fichiers créés (runtime, hors commit produit)

### start-recette-ensemble07-c500df9c.sh

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=c500df9ce58575783bcb842bf83658e1837990a3
export STUDIO_LANE=RECETTE
export STUDIO_PORT=3200
export NODE_ENV=production
# Do not activate DEV fixture in RECETTE (GO 2026-11-21).
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset STUDIO_NORA_SIMULATED_PROVIDER || true
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
unset NODE_PATH || true
exec npx next start -H 127.0.0.1 -p 3200

```

### ROLLBACK-TO-6ecdb987.sh

```bash
#!/bin/bash
set -euo pipefail
LABEL=gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004
PLIST="$HOME/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist"
BAK="/Users/morris/Projects/sfia-recette-backups/ml4d-e07-20261121-pre-c500df9c/com.sfia.studio.next.recette.ml4d-ux004.plist.pre-c500df9c.bak"
OLD_START="/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh"
echo "Rolling back RECETTE to 6ecdb987 / armX_D1HJzN6q-4MuDpYv"
launchctl bootout "$LABEL" 2>/dev/null || true
sleep 1
cp "$BAK" "$PLIST"
# Ensure old start still exists
test -x "$OLD_START"
test -f "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987/projects/sfia-studio-next/web/.next/BUILD_ID"
launchctl bootstrap "gui/$(id -u)" "$PLIST"
launchctl kickstart -k "$LABEL"
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3200/login || echo 0)
  if [ "$code" = "200" ]; then echo "login_ok"; break; fi
  sleep 1
done
echo "BUILD_ID_FILE=$(cat /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-6ecdb987/projects/sfia-studio-next/web/.next/BUILD_ID)"
curl -s http://127.0.0.1:3200/login | rg -o 'armX_D1HJzN6q-4MuDpYv|Ispeg3--Q3_t1Qf1JJWDZ|6ecdb987|c500df9' | head -10 || true
echo "Rollback complete — verify SHA/BUILD manually before UAT"

```

### LaunchAgent actif

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
		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/start-recette-ensemble07-c500df9c.sh</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
	<key>StandardErrorPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/launchd.err.log</string>
	<key>StandardOutPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/launchd.out.log</string>
	<key>WorkingDirectory</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-c500df9c/projects/sfia-studio-next/web</string>
</dict>
</plist>

```

## 17. Ancien runtime préservé

- WT `…-recette-build-6ecdb987` intact
- BUILD `armX_D1HJzN6q-4MuDpYv` intact
- Script start historique intact
- Rollback script prêt

## 18. Absence de push projet

- Candidat HEAD toujours `c500df9c` local
- Aucun `git push` branche produit
- Seul push autorisé ensuite : handoff L3

## 19. LIVE / REAL

| Capacité | Niveau |
|---|---|
| Nora fournisseur configuré | OUI (clé présente) |
| Nora accessible | NON TESTÉ |
| Nora LIVE prouvé | **NOT RUN** |
| GitHub REAL mutations | OFF (`ALLOW_MUTATIONS` empty) |

## 20. Réserves

1. UAT Equip'Campus / Morris **PENDING**
2. Nora LIVE **NOT RUN**
3. Side-effect mineur préparation smoke
4. FIX-03 autonomie / CONFLICT-UNKNOWN browser inchangés

## 21. Verdict

**ENSEMBLE 07 — RECETTE CANDIDATE DEPLOYED — TECHNICAL SMOKE PASS — MORRIS UAT REQUIRED**

## 22. Gate Morris suivant

Recette utilisateur Equip'Campus sur http://127.0.0.1:3200 — identité Morris — tests Nora LIVE sous gate distinct si requis.

Le candidat Ensemble 07 est disponible en RECETTE sur http://127.0.0.1:3200. Son SHA et son BUILD_ID ont été vérifiés. La recette utilisateur Morris et les tests Nora LIVE restent à effectuer.
