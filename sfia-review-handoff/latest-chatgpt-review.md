# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 11 G4 — Préparation redéploiement RECETTE G1

**Date/heure :** 2026-11-10 07:57:02 +0100 (Europe/Paris)
**Mandat :** GO Morris préparation autorisée — bascule effective NON acquis
**Profil :** CRITICAL
**Verdict :** RECETTE DEPLOYMENT PREPARED — CONFIGURATION PREVIOUSLY DEPLOYED VERIFIED — G1 BUILD READY — AWAITING MORRIS GO TO SWITCH

---

## 1. Contrat / GO

- Autorisé : préparer artefact G1, vérifier config constante, rollback, plan de bascule, Review Pack / handoff L3
- NON autorisé / NON exécuté : bootout/bootstrap LaunchAgent, remplacement service, mutation DB, Nora LIVE, GitHub REAL, R12–R14, push Product
- Runtime actif doit rester 771844fd / SmL2kyWbd1Q3kIuwNw0mQ

---

## 2. Git Truth Check

| Champ | Valeur |
|---|---|
| branche Product | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD Product | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| tree | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| parent G1 | 771844fda083ce3c1858b77b0012e5bf2b801605 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| handoff G1 | 4c97b65c8c52667077b9f32a1690eb52fe2ef522 |
| handoff deploy historique | d7a6eb7b / blob ceefd168… |
| staged Product | vide |
| push Product | AUCUN |

Worktrees ML4 notables :
- actif RECETTE : `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd` @ 771844fd
- candidat préparé : `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a` @ d7f1507a
- Product : `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` @ d7f1507a

---

## 3. Sources lues

- Handoff déploiement d7a6eb7b §§4–18/21 (preuve historique 771844fd → SmL2ky…)
- Handoff G1 4c97b65c (10 fichiers, pas de migration, PATCH/NO RELEASE)
- Manifeste local env01-recette-manifest-ml4-771844fd-2026-11-09.md
- LaunchAgent / plist / start-recette.sh / .env.local keys / ports / DB lecture seule
- Delta git 771844fd..d7f1507a (10 fichiers code/docs/tests, 0 migration, 0 package.json)

---

## 4. Configuration locale vs historique

| Élément | Historique handoff | Local vérifié | Écart |
|---|---|---|---|
| URL | http://127.0.0.1:3200 | oui | aucun |
| LaunchAgent | com.sfia.studio.next.recette.ml4 | running pid 66958 | aucun |
| program | …-771844fd/start-recette.sh | identique | aucun |
| BUILD HTML | SmL2kyWbd1Q3kIuwNw0mQ | FOUND sur / et /login | aucun |
| SHA worktree | 771844fd / tree 030a9e87 | confirmé | aucun |
| DB | sfia_next_recette_ml4:5434 | oui | aucun |
| STUDIO_LANE | RECETTE | oui | aucun |
| GitHub provider/mutations | real / documentary | oui | aucun |
| COG profile | TEST_BOUNDARY | oui | aucun |
| env file | ~/.config/…/recette/.env.local | présent, non modifié | aucun |
| SFIA_SOURCE_SHA .env | 8ba77730 (cosmétique) | oui + override script 771844fd | dette connue inchangée |
| counts D4 | 102/165/12 historiques | **115/184/15** | attendu post-R12 ; ne pas restaurer anciens compteurs |

---

## 5. Comparaison anciens/nouveaux candidats

| | Actif | Préparé |
|---|---|---|
| SHA | 771844fd… | d7f1507a… |
| tree | 030a9e87… | 3e9e1086… |
| BUILD_ID | SmL2kyWbd1Q3kIuwNw0mQ | **8vZjme4-KnnPkAqm_QxMz** |
| worktree | …-771844fd | …-d7f1507a |
| start-recette SFIA_SOURCE_SHA | 771844fd… | d7f1507a… |
| LaunchAgent | ACTIF | NOT INSTALLED |
| migrations | — | NONE vs actif |
| deps npm | — | package.json/lock inchangés |

---

## 6. Build isolé — commandes et résultats

Worktree: `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a`

1. `git worktree add --detach …-d7f1507a d7f1507a` → HEAD/tree OK
2. `npm ci` → PASS
3. `npx tsc --noEmit` → PASS
4. `env -u NODE_ENV NODE_ENV=production npm run build` → PASS
5. BUILD_ID produit : `8vZjme4-KnnPkAqm_QxMz` (lu depuis `.next/BUILD_ID`, non inventé)

Aucun `.env.local` dans le worktree. Config reste via fichier externe RECETTE.

---

## 7. Données RECETTE (lecture seule)

- documents=115 ; revisions=184 ; projects=15
- CampusFlow doc_1e5d8c16… v1/v2 AVAILABLE md5 de4bd1a6… / a875d28e… conservés
- R12 doc_21a9e4ad… / drev_7d7c1c6d… AVAILABLE md5 c13a8325… conservé
- Aucune mutation DB / migrate / seed

---

## 8. Rollback PREPARED / NOT EXERCISED

Cible retour du futur déploiement : **771844fd / SmL2kyWbd1Q3kIuwNw0mQ** (pas 93da44be).

Backup: `/Users/morris/Projects/sfia-recette-backups/ml4-20261110-075452-pre-d7f1507a-PREPARED`

Contenu rollback-target.txt :

```
rollback_target_sha=771844fda083ce3c1858b77b0012e5bf2b801605
rollback_target_build=SmL2kyWbd1Q3kIuwNw0mQ
rollback_worktree=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd
rollback_program=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/start-recette.sh
prepared_candidate_sha=d7f1507a56e50660ea24903c2dc563c249ba9086
prepared_candidate_build=8vZjme4-KnnPkAqm_QxMz
prepared_candidate_worktree=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a
status=ROLLBACK PREPARED / NOT EXERCISED
note=Do NOT bootout/bootstrap without distinct Morris GO for switch

```

---

## 9. Plan de bascule — NOT EXECUTED

```
# Plan de bascule RECETTE — d7f1507a — NOT EXECUTED

GO requis distinct de Morris avant toute exécution des étapes 4–11.

## Constantes (vérifiées)

- LaunchAgent label: `com.sfia.studio.next.recette.ml4`
- plist actif: `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist`
- env: `~/.config/sfia-studio-next/recette/.env.local` (ne pas modifier)
- port: `127.0.0.1:3200`
- DB: `sfia_next_recette_ml4` @ `127.0.0.1:5434`
- actif: worktree `…-771844fd` / BUILD `SmL2kyWbd1Q3kIuwNw0mQ`
- candidat: worktree `…-d7f1507a` / BUILD `8vZjme4-KnnPkAqm_QxMz`
- rollback cible: 771844fd / SmL2kyWbd1Q3kIuwNw0mQ

## Étapes

1. État avant bascule — SHA/BUILD HTML, LaunchAgent program, counts D4 lecture seule.
2. Vérifier candidat `d7f1507a` / tree `3e9e1086…` / BUILD `8vZjme4-KnnPkAqm_QxMz` / `start-recette.sh` présent.
3. Confirmer backup `ml4-20261110-075452-pre-d7f1507a-PREPARED` intact.
4. **PLAN** Arrêt contrôlé: `launchctl bootout gui/$UID/com.sfia.studio.next.recette.ml4`
5. **PLAN** Installer plist candidat (ProgramArguments → `…-d7f1507a/start-recette.sh`) — ou remplacer ProgramArguments/WorkingDirectory/logs du plist existant.
6. **PLAN** `launchctl bootstrap gui/$UID ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist`
7. **PLAN** Vérifier port 3200, pid, HTML fingerprint `8vZjme4-KnnPkAqm_QxMz`, absence de `SmL2kyWbd1Q3kIuwNw0mQ`.
8. **PLAN** Smoke HTTP non mutatif: `/` 307 ; `/login` `/portfolio` `/settings/integrations` 200 ; API sans session 401.
9. **PLAN** Comparer counts D4 avant/après (lecture seule) — attendre conservation 115/184/15 (+ docs connus).
10. **PLAN** Contrôle config GitHub (provider/mutations) sans publication REAL ; pas Nora LIVE.
11. **PLAN** Si échec → rollback: restaurer plist 771844fd depuis ce backup, bootout+bootstrap, vérifier `SmL2kyWbd1Q3kIuwNw0mQ`.
12. Manifeste ENV-01 final post-bascule (seulement après succès).

## Interdits pendant bascule

- db:migrate / seed / restore dataset
- mutation GitHub REAL
- Nora LIVE / R12–R14
- push Product

```

---

## 10. Fichiers créés (contenus complets)

### 10.a Manifeste ENV-01 PREPARED

```markdown
# ENV-01 — Manifeste RECETTE ML4 — PRÉPARATION candidat d7f1507a (Cycle 11 / G4)

status: PREPARED / NOT DEPLOYED
lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
prepared_source_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
prepared_tree_sha: 3e9e1086aaf83e22d8e3350565f1c747bb31f556
parent_sha: 771844fda083ce3c1858b77b0012e5bf2b801605
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
prepared_build_id: 8vZjme4-KnnPkAqm_QxMz
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE)
release_tag: N/A
schema_revision: unchanged vs 771844fd (git delta migrations = NONE)
served_address_current: http://127.0.0.1:3200
served_sha_current: 771844fda083ce3c1858b77b0012e5bf2b801605
served_build_id_current: SmL2kyWbd1Q3kIuwNw0mQ
prepared_worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a
active_worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd
hot_reload: OFF (`next start` production) — inchangé
delivery_status_recette: ACTIVE UNCHANGED — G1 ARTEFACT PREPARED
user_result: UNKNOWN / R12–R14 NOT RUN this cycle

## Launcher (état actuel — non basculé)

- mechanism: LaunchAgent `com.sfia.studio.next.recette.ml4`
- plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
- program (ACTIVE): …/sfia-workspace-next-ml4-recette-build-771844fd/start-recette.sh
- KeepAlive: true ; RunAtLoad: true
- process observed: launchd job pid 66958 ; next-server listen pid 66978 on 127.0.0.1:3200
- candidate program (PREPARED, NOT INSTALLED): …/sfia-workspace-next-ml4-recette-build-d7f1507a/start-recette.sh

## Configuration constante vérifiée (expurgée)

- URL: http://127.0.0.1:3200
- DB: sfia_next_recette_ml4 @ 127.0.0.1:5434
- env file: ~/.config/sfia-studio-next/recette/.env.local (NON modifié)
- STUDIO_LANE=RECETTE
- STUDIO_GITHUB_PROVIDER=real
- STUDIO_GITHUB_ALLOW_MUTATIONS=documentary
- SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY
- SFIA_SOURCE_SHA in .env.local: 8ba77730… (dette cosmétique historique) — override runtime via start-recette.sh
- GITHUB_APP_ID / INSTALLATION: présents (valeurs non reproduites ici ; inchangés)
- Aucune nouvelle clé d'environnement requise par G1

## Dataset (lecture seule au moment de la préparation)

- documents: 115
- revisions: 184
- projects: 15
- CampusFlow doc_1e5d8c16… : v1 drev_c07ca162… AVAILABLE md5 de4bd1a6… ; v2 drev_31678175… AVAILABLE md5 a875d28e…
- R12 CREATE doc_21a9e4ad… : v1 drev_7d7c1c6d… AVAILABLE md5 c13a8325… (conservé)
- migration DB: AUCUNE appliquée ; delta code 771844fd..d7f1507a sans migrations

## Backup / rollback CODE-CONFIG (cible après future bascule)

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261110-075452-pre-d7f1507a-PREPARED
- contains: active plist (771844fd) + start-recette-771844fd.sh + rollback-target.txt + plist candidat NOT-INSTALLED
- rollback_target_sha: 771844fda083ce3c1858b77b0012e5bf2b801605
- rollback_target_build: SmL2kyWbd1Q3kIuwNw0mQ
- DB restore: FORBIDDEN without Morris GO (not required — no migration)
- rollback_code: PREPARED / NOT EXERCISED

## Build préparation

- worktree detached clean at d7f1507a / tree 3e9e1086…
- npm ci: PASS
- tsc --noEmit: PASS
- env -u NODE_ENV NODE_ENV=production npm run build: PASS → 8vZjme4-KnnPkAqm_QxMz
- package.json / lock: inchangés vs 771844fd
- migration delta: NONE

## Diff configuration attendu à la bascule future (NON exécuté)

- SHA applicatif / worktree / BUILD_ID / SFIA_SOURCE_SHA override / ProgramArguments LaunchAgent
- INCHANGÉ: .env.local, ports, DB, OAuth, GitHub App, cognitive profile, mechanism LaunchAgent

## Plan de bascule

Voir Review Pack / backup — étapes 4–11 PLAN ONLY sous GO distinct.

## known_gaps

R12/R13/R14 NON REJOUÉS ce cycle
MERGE REAL HARD-BLOCKED
cookies lane 127.0.0.1 (réserve ENV-01 connue)
SFIA_SOURCE_SHA cosmétique dans .env.local

## review_decision

AWAITING MORRIS GO TO SWITCH

## Verdict technique

RECETTE DEPLOYMENT PREPARED — CONFIGURATION PREVIOUSLY DEPLOYED VERIFIED — G1 BUILD READY — AWAITING MORRIS GO TO SWITCH

date: 2026-11-10T07:54:52+01:00

```

### 10.b start-recette.sh candidat (nouveau worktree)

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

### 10.c start-recette.sh actif (référence, inchangé)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=771844fda083ce3c1858b77b0012e5bf2b801605
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200

```

### 10.d plist candidat PREPARED — NOT INSTALLED

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

### 10.e plist actif (toujours servi)

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

## 11. Diff configuration (préparé vs actif)

Seul changement prévu à la bascule future :
- ProgramArguments / WorkingDirectory / logs LaunchAgent → worktree d7f1507a
- override SFIA_SOURCE_SHA=d7f1507a…
- BUILD HTML attendu 8vZjme4-KnnPkAqm_QxMz

INCHANGÉ : .env.local, ports, DB, secrets, OAuth, GitHub App, cognitive, mécanisme LaunchAgent.

---

## 12. Preuve runtime inchangé après préparation

- LaunchAgent program = …-771844fd/start-recette.sh
- HTML /login contient SmL2kyWbd1Q3kIuwNw0mQ
- listen 127.0.0.1:3200 pid node 66978
- PREPARED ≠ DEPLOYED

Incident mineur pendant rédaction du pack : un worktree accidentel `…-d7f1507a` (ellipsis unicode) a été créé puis retiré via `git worktree remove --force` ; l'artefact candidat légitime et le runtime actif n'ont pas été basculés.

---

## 13. Fake / REAL

- Préparation build : DETERMINISTIC local
- Smoke HTTP post-bascule : NOT RUN (bascule non exécutée)
- Nora LIVE / GitHub REAL : NOT RUN
- Dataset : lecture seule REAL DB RECETTE

---

## 14. Actions interdites respectées

Pas de bootout/bootstrap, pas de remplacement plist actif, pas de db:mutate, pas de push Product, pas R12–R14, pas Nora LIVE, pas GitHub write.

---

## 15. Gates suivants

1. Revue ChatGPT du handoff distant
2. GO Morris distinct de bascule
3. Exécution plan §§4–11 + smoke + manifeste final DEPLOYED
4. Puis seulement reprise R12/R13/R14

---

## 16. Git Review Index

| Ref | SHA |
|---|---|
| Product HEAD | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| Candidat préparé | d7f1507a56e50660ea24903c2dc563c249ba9086 |
| Tree candidat | 3e9e1086aaf83e22d8e3350565f1c747bb31f556 |
| RECETTE active | 771844fda083ce3c1858b77b0012e5bf2b801605 |
| BUILD actif | SmL2kyWbd1Q3kIuwNw0mQ |
| BUILD préparé | 8vZjme4-KnnPkAqm_QxMz |

---

## 17. Instruction ChatGPT

Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md.
Comparer SHA/BUILD préparés vs actifs, config constante, rollback, plan non exécuté.
Ne pas valider une bascule absente.

---

## 18. Verdict unique

**RECETTE DEPLOYMENT PREPARED — CONFIGURATION PREVIOUSLY DEPLOYED VERIFIED — G1 BUILD READY — AWAITING MORRIS GO TO SWITCH**
