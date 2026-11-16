# Review Pack Full — SFIA Studio Next — ML4D Ensemble 04 RECETTE CUTOVER

Date/heure: 2026-11-16 22:09 CET
Contrat: MISE À DISPOSITION SUR LA RECETTE EXISTANTE — GO Morris explicite
Typologie: RUN / mise à disposition contrôlée · Review Pack Full · Handoff publish-in-cycle

## 1. Verdict

**RECETTE ENSEMBLE 04 — DEPLOYED AND SMOKE VERIFIED**

**READY FOR MORRIS VISUAL RECETTE**

URL: http://127.0.0.1:3200

SHA servi: `20fb41baa534b5a802a275b6944fc267ccaa2192`
BUILD_ID servi: `Bdn6zx0xBoavYTjWmiO4x`
LaunchAgent: `com.sfia.studio.next.recette.ml4d-ux004` (running)

Ancien SHA/build conservé pour rollback:
`bd8e16728f3c2a726a49be4c94565a2d85fc41a9` / `bURdIMEzv8pRSJCzgsiDf`

**VISUAL ACCEPTED: NON** (exclusivement Morris)
**NO PROJECT PUSH / NO PR / NO MERGE / NO STABLE**
**GATE C OPEN / ML5 NOT STARTED / AUCUN ADOPTED**

## 2. Autorisation

Morris GO RECETTE explicite du 16 nov 2026 — bascule sur RECETTE existante :3200 uniquement.
Candidat autorisé figé: `20fb41baa534b5a802a275b6944fc267ccaa2192` (local, non poussé).
Aucun amend / rebase / correctif produit pendant le cutover.

## 3. Git Truth Check

### Initial / Final (branche produit inchangée)
- Branch: `feat/next-ml4d-project-space-20261116`
- HEAD: `20fb41baa534b5a802a275b6944fc267ccaa2192` (= candidat autorisé)
- Parent consolidation: `660ff4243fafb586bfa0dd9b377382952e831ca9`
- UX-005 ancestor: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` OK
- origin/main: `997d4c4e8204993de7107552898c8cc08cd3b0ed`
- Status produit: seul `.tmp-sfia-review/chatgpt-review.md` (pack local)
- Aucun commit produit pendant ce cycle

### Worktree RECETTE créé
- Path: `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba`
- Detached HEAD: `20fb41baa534b5a802a275b6944fc267ccaa2192`
- Dirty: 0 au démarrage build

## 4. Préconditions RECETTE (avant bascule)

| Contrôle | Résultat |
| --- | --- |
| URL :3200 | HTTP 200 |
| LaunchAgent | com.sfia.studio.next.recette.ml4d-ux004 |
| SHA servi avant | bd8e1672 |
| BUILD avant | bURdIMEzv8pRSJCzgsiDf |
| DB logique | 127.0.0.1:5434 / sfia_next_recette_ml4 (≠ DEV 5433) |
| Migrations candidat vs UX-005 | aucune |
| Tables public | 33 |

## 5. Sauvegarde (hors Git, secrets non exposés)

Emplacement: `/Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261116-pre-20fb41ba` (hors dépôt)

| Artefact | Preuve |
| --- | --- |
| Dump custom | `sfia_next_recette_ml4_pre_20fb41ba.dump` |
| SHA-256 | `05887189e1b5e5dab3dcaf12c12accc7273c8472852c69c652ec657a40750bcb` |
| TOC | `dump-toc.txt` (250 lignes) |
| Tables | `public-tables.txt` |
| Plist pré-bascule | `com.sfia.studio.next.recette.ml4d-ux004.plist.pre-20fb41ba` |
| Script ancien | `start-recette-sas-nora-bd8e1672.sh` |
| Rollback doc | `ROLLBACK_CODE.md` |

Aucune restauration DB effectuée. Rollback = code/LaunchAgent uniquement.

## 6. Build immutable

Commandes:
```
git worktree add --detach <NEW_WT> 20fb41baa534b5a802a275b6944fc267ccaa2192
cd <NEW_WT>/projects/sfia-studio-next/web
npm ci   # exit 0
# source ~/.config/sfia-studio-next/recette/.env.local (non imprimé)
export SFIA_SOURCE_SHA=20fb41baa534b5a802a275b6944fc267ccaa2192 NODE_ENV=production
npx next build  # exit 0
```

BUILD_ID produit: `Bdn6zx0xBoavYTjWmiO4x`
Lane env: RECETTE · PORT 3200 · DB host/db confirmés non-DEV.

## 7. Cutover réel

Chrono:
```
2026-11-16T22:05:11+01:00 PRECHECK old build still served
before_build bURdIMEzv8pRSJCzgsiDf
2026-11-16T22:05:11+01:00 bootout com.sfia.studio.next.recette.ml4d-ux004
2026-11-16T22:05:14+01:00 port3200=0
2026-11-16T22:05:14+01:00 bootstrap new plist
2026-11-16T22:05:14+01:00 kickstart
2026-11-16T22:05:25+01:00 listen_ok attempt=2
2026-11-16T22:05:27+01:00 listen_pid=59060
node    59060 morris  cwd      DIR               1,16       704           128276590 /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/projects/sfia-studio-next/web
next-server (v15.5.29)

2026-11-16T22:05:27+01:00 login_http=200
after_build Bdn6zx0xBoavYTjWmiO4x
2026-11-16T22:05:27+01:00 listeners=2

```

Procédure:
1. bootout LaunchAgent
2. port 3200 libre
3. plist ProgramArguments → nouveau start script
4. bootstrap + kickstart
5. listen next-server 15.5.29 · cwd nouveau worktree
6. login HTTP 200 · HTML BUILD_ID = Bdn6zx0xBoavYTjWmiO4x

### Start script créé
```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=20fb41baa534b5a802a275b6944fc267ccaa2192
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
# Do not force Nora fixture — LIVE path for Morris séances
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
exec npx next start -H 127.0.0.1 -p 3200

```

### Diff plist
```diff
--- plist.pre-20fb41ba
+++ plist.active
@@ -2,26 +2,26 @@
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
 <dict>
-	<key>EnvironmentVariables</key>
-	<dict>
-		<key>PATH</key>
-		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
-	</dict>
-	<key>KeepAlive</key>
-	<true/>
-	<key>Label</key>
-	<string>com.sfia.studio.next.recette.ml4d-ux004</string>
-	<key>ProgramArguments</key>
-	<array>
-		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh</string>
-	</array>
-	<key>RunAtLoad</key>
-	<true/>
-	<key>StandardErrorPath</key>
-	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/launchd.err.log</string>
-	<key>StandardOutPath</key>
-	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/launchd.out.log</string>
-	<key>WorkingDirectory</key>
-	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/projects/sfia-studio-next/web</string>
+  <key>Label</key>
+  <string>com.sfia.studio.next.recette.ml4d-ux004</string>
+  <key>ProgramArguments</key>
+  <array>
+    <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/start-recette-ensemble04-20fb41ba.sh</string>
+  </array>
+  <key>WorkingDirectory</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/projects/sfia-studio-next/web</string>
+  <key>RunAtLoad</key>
+  <true/>
+  <key>KeepAlive</key>
+  <true/>
+  <key>StandardOutPath</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/launchd.out.log</string>
+  <key>StandardErrorPath</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba/launchd.err.log</string>
+  <key>EnvironmentVariables</key>
+  <dict>
+    <key>PATH</key>
+    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
+  </dict>
 </dict>
 </plist>

```

## 8. Smoke tests

```
SC01 PASS login + build id Bdn6zx0xBoavYTjWmiO4x
SC02 PASS portfolio under DEV test login
SC03 SKIP — no preparations for DEV test pilot (data owned by OAuth pilot mcleland147)
SC04-SC07/SC09 SKIP under DEV test identity — same ownership reason
SC08 PASS unavailable not_found
SC10 PASS build served
SC11 PASS portfolio reachable; public tables=33; projects=22 preserved
SC12 PASS
NOTE: Morris visual recette of project surfaces must use GitHub OAuth identity that owns RECETTE data.

```

Log (extrait):
```

Running 1 test using 1 worker

(node:61548) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/1] tests/e2e/_recette-ensemble04-smoke.local.spec.ts:8:5 › RECETTE Ensemble 04 smoke SC01-SC12
tests/e2e/_recette-ensemble04-smoke.local.spec.ts:8:5 › RECETTE Ensemble 04 smoke SC01-SC12
SMOKE_JSON {"SC01":"PASS","SC02":"PASS","SC03":"SKIP_no_preparation_visible","SC04":"SKIP_no_project_visible","SC05":"SKIP","SC06":"SKIP","SC07":"SKIP","SC09":"SKIP","SC08":"PASS","SC10":"PASS build=Bdn6zx0xBoavYTjWmiO4x","SC11":"PASS","SC12":"PASS"}

  1 passed (1.0s)
```

Limites:
- Smoke sous identité **DEV test login** (autorisée RECETTE).
- Données projets/préparations RECETTE appartiennent surtout au pilot OAuth `mcleland147`.
- SC03–SC07/SC09: SKIP sous cette identité — **pas un échec runtime**.
- Revue visuelle projet: Morris via **GitHub OAuth**.
- Aucun message Nora LIVE envoyé.
- Aucune mutation Git.

Préservation données après bascule: projects=22, preparations=192, tables=33.

## 9. Manifeste ENV-01

```yaml
environment: RECETTE
served_address: http://127.0.0.1:3200
source_repository: mcleland147/sfia-workspace
source_branch: feat/next-ml4d-project-space-20261116 (local, not pushed)
source_sha: 20fb41baa534b5a802a275b6944fc267ccaa2192
base_main_sha: 997d4c4e8204993de7107552898c8cc08cd3b0ed
build_id: Bdn6zx0xBoavYTjWmiO4x
product_version: 0.0.0-dev
candidate_version: null
schema_revision: unchanged (public tables=33)
test_data_revision: preserved (projects=22, preparations=192)
capabilities:
  - Ensemble 01-03 UX shells
  - Ensemble 04 project space shell
  - Sas Nora path (LIVE config)
quality_evidence:
  - next build PASS in immutable worktree
  - Playwright smoke SC01/02/08/10/11/12 PASS
  - SC03-07/09 SKIP under DEV test pilot (OAuth-owned data)
known_gaps:
  - R01 tsc workspace FAIL documented (32 fixtures)
  - R02 Résultats et preuves → publication
  - R03-R04 Ensembles 05-07
  - R05 cookie isolation on 127.0.0.1
  - R06 LIVE/REAL not claimed by smoke
review_decision: DEPLOYED — visual acceptance PENDING Morris
rollback_source_sha: bd8e16728f3c2a726a49be4c94565a2d85fc41a9
rollback_build_id: bURdIMEzv8pRSJCzgsiDf
launch_agent: com.sfia.studio.next.recette.ml4d-ux004
worktree: /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba
backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4d-e04-20261116-pre-20fb41ba
cutover_at: 2026-11-16T22:05:27+01:00
status: DEPLOYED_AND_SMOKE_VERIFIED

```

## 10. Rollback disponible (non exécuté)

```
# Rollback code-only (no DB restore)

1. launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004
2. Restore this backup plist OR point ProgramArguments to:
   /Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/start-recette-sas-nora-bd8e1672.sh
3. WorkingDirectory:
   /Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672/projects/sfia-studio-next/web
4. launchctl bootstrap gui/$(id -u) <plist> && launchctl kickstart -k gui/$(id -u)/com.sfia.studio.next.recette.ml4d-ux004
5. Verify HTML BUILD_ID == bURdIMEzv8pRSJCzgsiDf and source SHA bd8e1672

```

Ancien worktree `…-bd8e1672` et BUILD `bURdIMEzv8pRSJCzgsiDf` intacts.

## 11. Réserves conservées

R01 tsc workspace FAIL (32 fixtures antérieures) · R02 Résultats/preuves→publication · R03 Ens.05 · R04 Ens.06/07 · R05 cookies 127.0.0.1 · R06 LIVE≠smoke FAKE

## 12. Fichiers créés / modifiés (runtime ops — hors branche produit)

Créés:
- worktree RECETTE `…-ensemble04-recette-build-20fb41ba`
- `start-recette-ensemble04-20fb41ba.sh`
- backup dir artefacts
- smoke scripts sous backup/smoke/

Modifiés:
- `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist` (service existant)

Branche produit `feat/next-ml4d-project-space-20261116`: **aucun fichier applicatif modifié** ; HEAD reste `20fb41ba`.

## 13. Décisions Morris

1. Revue visuelle Figma↔runtime sur http://127.0.0.1:3200 (identité OAuth propriétaire des données).
2. Acceptation / réserves Ensemble 04.
3. Arbitrage « Résultats et preuves ».

## 14. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Ne pas substituer la revue visuelle Morris.
