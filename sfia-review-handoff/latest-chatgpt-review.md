# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 11 — Bascule RECETTE d7f1507a

**Date/heure :** 2026-11-10 08:07:06 +0100 (Europe/Paris)
**GO Morris :** BASCULE RECETTE d7f1507a — CONFIGURATION CONSTANTE — SMOKE & ROLLBACK (2026-11-10)
**Profil :** CRITICAL
**Verdict :** RECETTE DEPLOYED — CANDIDATE d7f1507a VERIFIED — CONFIGURATION CONSTANT — TECHNICAL SMOKE PASS — DATA PRESERVED — R12/R13/R14 NOT RUN

---

## 1. Mandat

Bascule effective autorisée. Pas de R12/R13/R14, Nora LIVE, GitHub REAL mutatif, push Product, migration DB, correctif code.

---

## 2. Git Truth Check

### Initial / final Product
| Champ | Valeur |
|---|---|
| branche | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| tree | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| push Product | AUCUN |
| staged | vide |

### Worktrees
- actif après bascule : `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a` @ d7f1507a
- rollback : `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd` @ 771844fd (conservé)

---

## 3. Sources

- handoff PREPARED ee5f4c1d / blob b5a28fdd…
- handoff historique deploy d7a6eb7b / blob ceefd168…
- handoff G1 4c97b65c
- installation locale : LaunchAgent, plist, start-recette, .env.local keys, DB lecture seule

---

## 4. État avant bascule

- LaunchAgent program : …-771844fd/start-recette.sh
- job pid 66958 ; node listen 66978
- BUILD HTML : SmL2kyWbd1Q3kIuwNw0mQ
- DB counts : documents=115 revisions=184 projects=15
- témoins CampusFlow + R12 md5 inchangés (voir §8)

---

## 5. Configuration constante vérifiée

INCHANGÉ : .env.local, STUDIO_LANE=RECETTE, provider=real, mutations=documentary, COG=TEST_BOUNDARY, DB sfia_next_recette_ml4:5434, port 3200, secrets, OAuth, GitHub App.

CHANGÉ uniquement : ProgramArguments / WorkingDirectory / logs → worktree d7f1507a ; SFIA_SOURCE_SHA override script = d7f1507a…

---

## 6. Actions LaunchAgent exécutées

1. `launchctl bootout gui/$UID/com.sfia.studio.next.recette.ml4` → port 3200 libre
2. Installation plist candidat préparé → `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist`
3. `launchctl bootstrap gui/$UID …/com.sfia.studio.next.recette.ml4.plist`
4. job pid **77420** ; next-server listen pid **77438** sur 127.0.0.1:3200
5. logs : Next.js 15.5.29 Ready in 403ms

---

## 7. Runtime servi

| Champ | Valeur |
|---|---|
| SHA | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| tree | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| BUILD_ID | 8vZjme4-KnnPkAqm_QxMz |
| ancien BUILD | ABSENT des pages /login /portfolio /settings/integrations |
| hot reload | OFF |

---

## 8. Smoke HTTP

| Requête | Résultat |
|---|---|
| GET / | 307 |
| GET /login | 200 + fingerprint 8vZjme4-KnnPkAqm_QxMz |
| GET /portfolio | 200 + fingerprint 8vZjme4… |
| GET /settings/integrations | 200 + fingerprint 8vZjme4… |
| GET /api/portfolio (no session) | 401 SESSION_INVALID |
| GET /api/integrations/status (no session) | 401 SESSION_INVALID |

---

## 9. Données D4 avant/après

| Métrique | Avant | Après |
|---|---|---|
| documents | 115 | 115 |
| revisions | 184 | 184 |
| projects | 15 | 15 |

Témoins (id|rev|n|status|md5) identiques avant/après :
- doc_1e5d8c16…|drev_c07ca162…|1|AVAILABLE|de4bd1a6e59f5dea12fd38ce265b5f43
- doc_1e5d8c16…|drev_31678175…|2|AVAILABLE|a875d28e64e460cc1d9837e4d5c8bd36
- doc_21a9e4ad…|drev_7d7c1c6d…|1|AVAILABLE|c13a8325e28286ceb3edda238577504b

Aucune migration / seed / écriture D4.

---

## 10. Rollback

AVAILABLE / NOT EXERCISED
Cible : 771844fd / SmL2kyWbd1Q3kIuwNw0mQ
Backup : `/Users/morris/Projects/sfia-recette-backups/ml4-20261110-075452-pre-d7f1507a-PREPARED`

```
rollback_target_sha=771844fda083ce3c1858b77b0012e5bf2b801605
rollback_target_build=SmL2kyWbd1Q3kIuwNw0mQ
rollback_worktree=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd
rollback_program=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/start-recette.sh
deployed_candidate_sha=d7f1507a56e50660ea24903c2dc563c249ba9086
deployed_candidate_build=8vZjme4-KnnPkAqm_QxMz
deployed_candidate_worktree=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a
status=ROLLBACK AVAILABLE / NOT EXERCISED
switch_result=SUCCESS 2026-11-10T08:06:11+01:00

```

---

## 11. Fichiers créés / contenus

### 11.a Manifeste ENV-01 DEPLOYED (complet)

```markdown
# ENV-01 — Manifeste RECETTE ML4 — BASCULE d7f1507a (Cycle 11 / DEPLOYED)

status: DEPLOYED
lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
source_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
tree_sha: 3e9e1086aaf83e22d8e3350565f1c747bb31f556
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
previous_source_sha: 771844fda083ce3c1858b77b0012e5bf2b801605
previous_build_id: SmL2kyWbd1Q3kIuwNw0mQ
current_build_id: 8vZjme4-KnnPkAqm_QxMz
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE)
release_tag: N/A
schema_revision: unchanged (no migration this cycle)
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a
hot_reload: OFF (`next start` production)
delivery_status_recette: TECHNICAL SMOKE PASS
user_result: UNKNOWN / R12 R13 R14 NOT RUN

## Launcher

- mechanism: LaunchAgent `com.sfia.studio.next.recette.ml4`
- plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
- program: …/sfia-workspace-next-ml4-recette-build-d7f1507a/start-recette.sh
- KeepAlive: true ; RunAtLoad: true
- process: launchd job pid 77420 ; next-server listen pid 77438 on 127.0.0.1:3200
- previous artefact preserved: …-ml4-recette-build-771844fd BUILD SmL2kyWbd1Q3kIuwNw0mQ

## Dataset préservé (avant = après)

- db: sfia_next_recette_ml4 @ 127.0.0.1:5434
- documents=115 revisions=184 projects=15
- CampusFlow doc_1e5d8c16… : v1 drev_c07ca162… AVAILABLE md5 de4bd1a6… ; v2 drev_31678175… AVAILABLE md5 a875d28e…
- R12 doc_21a9e4ad… : v1 drev_7d7c1c6d… AVAILABLE md5 c13a8325…
- schema: no migration applied this cycle

## Backup / rollback CODE-CONFIG

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261110-075452-pre-d7f1507a-PREPARED
- contains: previous plist + start-recette-771844fd.sh + rollback-target.txt + prepared plist archive
- DB restore: FORBIDDEN without Morris GO (not required — no migration)
- rollback_code: AVAILABLE / NOT EXERCISED
- rollback target: 771844fd / SmL2kyWbd1Q3kIuwNw0mQ

## Nora / GitHub

- SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
- OPENAI_API_KEY: PRESENT (LIVE NOT RUN)
- STUDIO_GITHUB_PROVIDER: real
- STUDIO_GITHUB_ALLOW_MUTATIONS: documentary
- mutations GitHub REAL: OFF / NONE this cycle
- R12/R13/R14 LIVE: NOT RUN
- Nora LIVE: NOT RUN

## Build / smoke

- worktree detached at d7f1507a / tree 3e9e1086…
- HTTP: / → 307 ; /login /portfolio /settings/integrations → 200
- APIs sans session: /api/portfolio 401 SESSION_INVALID ; /api/integrations/status 401 SESSION_INVALID
- HTML fingerprint: 8vZjme4-KnnPkAqm_QxMz FOUND ; ancien SmL2ky… ABSENT
- DEV :3100 idle/none ; STABLE N/A

## Configuration constante

- .env.local: NON modifié
- ports/DB/OAuth/GitHub App/cognitive: inchangés
- seul diff: LaunchAgent program/workdir/logs + SFIA_SOURCE_SHA override script = d7f1507a…

## known_gaps

R12/R13/R14 NON EXÉCUTÉS
MERGE REAL HARD-BLOCKED
SFIA_SOURCE_SHA cosmétique dans .env.local (override script actif)
cookies lane 127.0.0.1

## review_decision

GO MORRIS BASCULE RECETTE EXÉCUTÉ
ACCEPTATION UTILISATEUR R12+ EN ATTENTE

## Verdict technique

RECETTE DEPLOYED — CANDIDATE d7f1507a VERIFIED — CONFIGURATION CONSTANT — TECHNICAL SMOKE PASS — DATA PRESERVED — R12/R13/R14 NOT RUN

date: 2026-11-10T08:06:11+01:00

```

### 11.b start-recette.sh candidat (actif)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=d7f1507a56e50660ea24903c2dc563c249ba9086
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200

```

### 11.c plist actif après bascule

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.sfia.studio.next.recette.ml4</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/start-recette.sh</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/projects/sfia-studio-next/web</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/launchd.out.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/launchd.err.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
    </dict>
</dict>
</plist>

```

### 11.d plist précédent (backup, non actif)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.sfia.studio.next.recette.ml4</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/start-recette.sh</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/projects/sfia-studio-next/web</string>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
  </dict>
  <key>StandardOutPath</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/launchd.out.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/launchd.err.log</string>
</dict>
</plist>

```

---

## 12. Diff Git Product

Aucun commit Product ce cycle. HEAD reste d7f1507a.
Fichier local ajouté (untracked) : manifeste DEPLOYED.
`.tmp-sfia-review/chatgpt-review.md` écrasé (hors Git Product).

---

## 13. Fake / Real Qualification

- REAL LOCAL DEPLOYMENT / TECHNICAL SMOKE VERIFIED
- Nora LIVE / GitHub REAL mutatif / R12–R14 : NOT RUN
- Preuves G1 DET/PG ≠ preuves LIVE utilisateur

---

## 14. Actions interdites respectées

Pas de Nora LIVE, pas de mutation GitHub, pas R12–R14, pas push Product, pas migration DB, pas correctif code, pas STABLE/RELEASE.

---

## 15. Décisions restantes Morris

1. Revue ChatGPT des preuves de déploiement
2. Cadrage rejeu utilisateur R12 (FILE_ABSENT/préparation) puis R13/R14
3. Merge REAL sous gate distinct

---

## 16. Git Review Index

| Ref | SHA / valeur |
|---|---|
| Product HEAD | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| RECETTE servie | d7f1507a / BUILD 8vZjme4-KnnPkAqm_QxMz |
| Rollback | 771844fd / SmL2kyWbd1Q3kIuwNw0mQ |
| job/listen PID | 77420 / 77438 |

---

## 17. Instruction ChatGPT

Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md.
Vérifier SHA/BUILD servis, smoke, DB, rollback AVAILABLE, verdict.

---

## 18. Verdict unique

**RECETTE DEPLOYED — CANDIDATE d7f1507a VERIFIED — CONFIGURATION CONSTANT — TECHNICAL SMOKE PASS — DATA PRESERVED — R12/R13/R14 NOT RUN**
