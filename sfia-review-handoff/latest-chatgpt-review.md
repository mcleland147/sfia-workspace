# SFIA Review Pack FULL — Cycle 11 — RECETTE switch 8ba77730

- date_heure: 2026-11-09T18:30:54+01:00
- process: SFIA v2.6
- type: CYCLE 11 — DÉPLOIEMENT / RECETTE
- typologie: DELIVERY TECHNIQUE CONTRÔLÉ
- profil: CRITICAL
- product: SFIA Studio Next — R5 / ML4
- GO Morris: 2026-11-09 — préparation, build figé, bascule, smoke, rollback conditionnel, manifeste, handoff L3
- GO NON ACQUIS: push projet, PR, merge, restore DB, GitHub REAL write, STABLE, RELEASE, ADOPTED, exécution R06 utilisateur

## Verdict

**RECETTE BUILD UPDATED — SOURCE 8ba77730 VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN**

Non-annoncé: R06 PASS ; REC-08 CLOSED ; ML4 ACCEPTED ; LIVE BEHAVIOR PROVEN ; ADOPTED.

## 1. Git Truth Check

| Ref | SHA |
| --- | --- |
| Branche | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD | 8ba777300adebe3ba70ddbe3c386a3ad709034f6 |
| tree | 368159d7e8cdbc0bbb504f87d6deb12c04e6b129 |
| Parent a2c5e9f8 | ANCESTOR_OK |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| origin/feat | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| origin/sfia/review-handoff (pré-publish) | f56f0d78c8631bff3bf6e911d6ab7e1f0a5f24dc |
| docs registre | 9db2ae2a52b758ab77254c0f33eacd047803c380 (RO) |

Aucun push projet. Aucun rebase/reset.

## 2. ENV-01 avant bascule

- Listener :3200 PID 28141 cwd …-a2c5e9f8 ; BUILD 9yCs2GbSS5lDFX3LPiQTU ; HTML fingerprint OK
- SFIA_SOURCE_SHA env était a2c5e9f8…
- DB sfia_next_recette_ml4 :5434 ; schema 012
- STUDIO_LANE=RECETTE ; App 5677465/180092114 ; mutations UNSET/OFF ; OPENAI PRESENT ; TEST_BOUNDARY
- DEV :3100 idle ; PG 5433 up ; STABLE N/A
- LaunchAgents historiques g4/ml3/legacy présents mais non actifs sur :3200

## 3. Préservation D4

Cible:
- CampusFlow / doc_1e5d8c16… / drev_c07ca162… AVAILABLE
- md5 de4bd1a6e59f5dea12fd38ce265b5f43
- user v2 sur cible: NONE (1 révision)

Dataset élargi vs snapshot 1/1 antérieur: docs=17 revs=28 projects=3 messages=74 — croissance hors document cible (pas de v2 utilisateur sur D4 visé). Qualifié, non écrasé.

Post-bascule: mêmes IDs/md5/statut — DATA PRESERVED.

## 4. Backup

```json
{
  "created_at": "2026-11-09T18:28:01.244118+01:00",
  "db_name": "sfia_next_recette_ml4",
  "db_port": 5434,
  "format": "custom(-Fc)",
  "dump_sha256": "6e3d3b607b218e894885a7785b024561cd113984e78ff7c46cd9bfbcabaff9d7",
  "dump_bytes": 163962,
  "pg_restore_list_lines": 249,
  "purpose": "pre-switch backup before serving 8ba77730",
  "previous_source_sha": "a2c5e9f8819cbe547bf925b39f38f783fc8aa52b",
  "previous_build_id": "9yCs2GbSS5lDFX3LPiQTU",
  "candidate_source_sha": "8ba777300adebe3ba70ddbe3c386a3ad709034f6",
  "d4_target": {
    "documentId": "doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2",
    "v1": "drev_c07ca162-faa4-48f5-b705-018e41ae88d9",
    "status": "AVAILABLE",
    "md5": "de4bd1a6e59f5dea12fd38ce265b5f43",
    "user_v2": "NONE"
  },
  "dataset_counts_at_backup": {
    "documents": 17,
    "document_revisions": 28,
    "projects": 3,
    "messages": 74
  },
  "historical_backup_retained": "/Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8",
  "restore_note": "REQUIRES explicit Morris GO \u2014 docker exec pg_restore ... NOT run this cycle"
}
```

```markdown
# Rollback code — Cycle 11 switch to 8ba77730

## Current candidate
- worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730
- SHA: 8ba777300adebe3ba70ddbe3c386a3ad709034f6
- tree: 368159d7e8cdbc0bbb504f87d6deb12c04e6b129
- BUILD_ID: ygu4moVrYUNZPkvprgvB_
- LaunchAgent: com.sfia.studio.next.recette.ml4

## Previous (rollback target)
- worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8
- SHA: a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
- BUILD_ID: 9yCs2GbSS5lDFX3LPiQTU
- start: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8/start-recette.sh

## Code rollback (NO DB restore without Morris GO)
1. launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml4 || true
2. Ensure port 3200 free
3. Optionally set SFIA_SOURCE_SHA=a2c5e9f8… in recette .env.local
4. launchctl bootstrap ... OR run /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8/start-recette.sh via durable means
5. Verify BUILD_ID=9yCs2GbSS5lDFX3LPiQTU and HTML fingerprint
6. DB restore forbidden without GO
```

## 5. Build figé

- worktree détaché …-ml4-recette-build-8ba77730 @ 8ba77730 / tree 368159d7… (0 dirty)
- npm ci full (devDeps) PASS — 1ère tentative NODE_ENV=production corrigée
- unit document-act 32 + provenance 2 PASS
- tsc PASS ; next build PASS → **ygu4moVrYUNZPkvprgvB_**
- leadingSectionNumber présent ; migration delta a2c5→8ba777: 0
- version technique 0.0.0-dev ; NO RELEASE ; PATCH candidate

## 6. Launcher durable

Réserve opérationnelle traitée: LaunchAgent dédié RECETTE ML4 (pas le shell Cursor).

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=8ba777300adebe3ba70ddbe3c386a3ad709034f6
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.sfia.studio.next.recette.ml4</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/start-recette.sh</string>
  </array>
  <key>WorkingDirectory</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/projects/sfia-studio-next/web</string>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/launchd.out.log</string>
  <key>StandardErrorPath</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/launchd.err.log</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>
```

- PPID serveur = launchd (1)
- KeepAlive true
- Agents g4/ml3 non modifiés pour servir :3200

## 7. Bascule

1. Préconditions OK
2. Stop PID 28141 (a2c5)
3. Artefact a2c5 préservé
4. SFIA_SOURCE_SHA → 8ba77730 (backup env)
5. bootstrap/kickstart com.sfia.studio.next.recette.ml4
6. Listen PID 80657 cwd …-8ba77730
7. DEV/STABLE inchangés

## 8. Smoke

| Check | Résultat |
| --- | --- |
| :3200 | LISTEN cwd 8ba77730 |
| HTML BUILD | ygu4moVrYUNZPkvprgvB_ |
| GET / /login /portfolio /settings/integrations | 200 |
| APIs sans session | 401 |
| project CampusFlow route | 200 |
| D4 v1 md5 | inchangé |
| v2 spontanée cible | NONE |
| LaunchAgent state | running (PPID launchd) |
| R06 prompt | NOT RUN |
| GitHub REAL write | NONE |

## 9. Fichiers créés (contenu complet)

### A. env01-recette-manifest-ml4-8ba77730-2026-11-09.md

```markdown
# ENV-01 — Manifeste RECETTE ML4 — bascule 8ba77730 (Cycle 11)

lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
source_sha: 8ba777300adebe3ba70ddbe3c386a3ad709034f6
tree_sha: 368159d7e8cdbc0bbb504f87d6deb12c04e6b129
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
origin_feat_tip: 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
previous_source_sha: a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
previous_build_id: 9yCs2GbSS5lDFX3LPiQTU
current_build_id: ygu4moVrYUNZPkvprgvB_
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE)
release_tag: N/A
schema_revision: 012_auth_concurrency_safety
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730
hot_reload: OFF (`next start` production)

## Launcher (persistance)

- mechanism: LaunchAgent `com.sfia.studio.next.recette.ml4`
- plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
- program: …/sfia-workspace-next-ml4-recette-build-8ba77730/start-recette.sh
- KeepAlive: true ; RunAtLoad: true
- process owner: launchd (PPID 1) — indépendant du shell Cursor
- server_pid_observed: 80657 (next-server) ; wrapper 80628
- historical agents g4/ml3/legacy: non utilisés pour ce runtime ; non bootés sur :3200

## Dataset préservé

- db: sfia_next_recette_ml4 @ 127.0.0.1:5434
- target D4: doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2
- v1: drev_c07ca162-faa4-48f5-b705-018e41ae88d9 AVAILABLE md5 de4bd1a6e59f5dea12fd38ce265b5f43
- user v2 on target: NONE
- counts at switch: documents=17 revisions=28 projects=3 (CampusFlow + ml4-prov×2) messages=74
  note: growth vs earlier 1/1 snapshot = activité utilisateur/autre hors cible ; cible D4 inchangée
- project CampusFlow present; GitHub link retained historically

## Backup / rollback

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-182800-pre-8ba77730
- dump_sha256: 6e3d3b607b218e894885a7785b024561cd113984e78ff7c46cd9bfbcabaff9d7
- dump_bytes: 163962
- pg_restore -l lines: 249
- historical backup retained: …/ml4-20261109-173817-pre-a2c5e9f8
- previous artefact preserved: …-ml4-recette-build-a2c5e9f8 BUILD 9yCs2GbSS5lDFX3LPiQTU
- DB restore: FORBIDDEN without Morris GO
- rollback_state: NOT EXERCISED

## Nora / GitHub

- SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
- OPENAI_API_KEY: PRESENT (LIVE behavior NOT PROVEN this cycle)
- GitHub App: 5677465 / 180092114 ; allowed mcleland147/chantiers360
- STUDIO_GITHUB_PROVIDER: real
- mutations GitHub REAL: OFF
- REAL write this cycle: NONE
- USER R06: NOT RUN

## Build / smoke

- npm ci (full, incl. devDeps): PASS
- unit document-act 32 + provenance 2: PASS
- tsc --noEmit: PASS
- next build: PASS → ygu4moVrYUNZPkvprgvB_
- migration delta a2c5→8ba777: NONE
- HTTP: / /login /portfolio /settings/integrations → 200 ; APIs → 401 SESSION_INVALID
- HTML fingerprint: <!--ygu4moVrYUNZPkvprgvB_-->
- DEV :3100 idle ; STABLE N/A

## Verdict technique

RECETTE BUILD UPDATED — SOURCE 8ba77730 VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN

date: 2026-11-09T18:30:00+0100
```

### B. Hors dépôt

- backup + ROLLBACK_CODE + start-recette.sh + LaunchAgent plist (ci-dessus)
- worktree build artefact

## 10. Fichiers modifiés — diffs

### delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ea55774d..98a5ef07 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1162,3 +1162,25 @@ Append-only logical journal of Cursor product deliveries.
 | RECETTE | **inchangée** — SHA servi `a2c5e9f8` / BUILD `9yCs2GbSS5lDFX3LPiQTU` ; v1 md5 `de4bd1a6…` ; 0 v2 |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY` |
+
+## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-8BA77730
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~18:30 CET |
+| Macro-capacité | R5 / ML4 — Bascule RECETTE correctif R06 D4 (section numérotée + ACK) |
+| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
+| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule conditionnelle ; push Product / PR / merge / restore DB / REAL write **NON inclus** |
+| Source | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` tree `368159d7…` |
+| Build servi | `ygu4moVrYUNZPkvprgvB_` @ http://127.0.0.1:3200 |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730` |
+| Launcher | LaunchAgent `com.sfia.studio.next.recette.ml4` (KeepAlive, PPID launchd) |
+| Remplacé | `a2c5e9f8…` / BUILD `9yCs2GbSS5lDFX3LPiQTU` (artefact préservé) |
+| Migration | aucune — schema `012_auth_concurrency_safety` |
+| D4 cible | v1 `drev_c07ca162…` AVAILABLE md5 `de4bd1a6…` ; user v2 NONE |
+| Backup | `…/ml4-20261109-182800-pre-8ba77730` sha256 `6e3d3b60…` |
+| Validations redeploy | unit 34 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
+| USER R06 | **NOT RUN** |
+| Push Product | **AUCUN** |
+| Manifeste | `env01-recette-manifest-ml4-8ba77730-2026-11-09.md` |
+| Verdict | `RECETTE BUILD UPDATED — SOURCE 8ba77730 VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |
```

### Config hors dépôt

- ~/.config/sfia-studio-next/recette/.env.local : SFIA_SOURCE_SHA a2c5→8ba777 (backup horodaté)
- LaunchAgent ml4 créé/chargé (local machine)

## 11. Fake/Real & gates

- DETERMINISTIC proofs from prior construction cycle re-validated on deploy source (unit/tsc/build)
- Nora LIVE NOT PROVEN ; USER R06 NOT RUN
- Next: Critical Review ; Morris R06 LIVE one step at a time
- No ML4 ACCEPTED / REC-08 CLOSED

## 12. Review Handoff L3

- Mode: publish-in-cycle
- Branche: sfia/review-handoff
- Fichier: sfia-review-handoff/latest-chatgpt-review.md
- Publisher: scripts/sfia/publish-review-handoff.sh
- Verdict: HANDOFF UPDATED — REMOTE VERIFIED
- commit distant: 97f2a6af1215d8913dd0116c1a534e82f35b0cde
- blob distant: 7f4549623d6acc92f17b765e7b8b6cd828785028
- parent: f56f0d78c8631bff3bf6e911d6ab7e1f0a5f24dc
- relecture: titre Cycle 11 + verdict RECETTE BUILD UPDATED + SHA 8ba77730 + BUILD ygu4moVrYUNZPkvprgvB_ + USER R06 NOT RUN — OK
- push produit: AUCUN

FIN PACK — contenu modifié inclus.
