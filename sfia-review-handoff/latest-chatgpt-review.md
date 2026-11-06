# SFIA Studio Next — R5 / ML3 — Mise à disposition RECETTE corrective d646d42a
## Review Pack FULL — Cycle Déploiement / CRITICAL

**Date UTC:** 2026-11-06T21:34:16Z
**GO Morris:** AUTORISÉ — NOUVEAU CANDIDAT RECETTE (cycle 11)
**Profil:** CRITICAL
**Nature:** Qualification + mise à disposition d'un candidat correctif déjà publié — aucune nouvelle correction fonctionnelle
**Macro-lot:** ML3 — corrections RCT-02 / C01–C08

**Verdict:** RECETTE CANDIDATE DEPLOYED — READY FOR MORRIS TARGETED LIVE TEST

Ne signifie PAS: RECETTE ACCEPTED · ML3 CLOSED · MERGED · STABLE · RELEASED · ADOPTED · PR · LIVE campaign executed.

---

## 1. GO et périmètre

Autorisé: build immuable depuis `d646d42a`, bascule RECETTE :3200, préservation ba831b25, sauvegarde DB, smoke technique, manifeste, protocole retests, Review Pack Full + handoff L3.

Non autorisé: nouvelle correction code, commit/push projet, PR, merge, migration destructive, STABLE, release, campagne LIVE auto OpenAI.

---

## 2. Git Truth Check

| Ref | Valeur |
|-----|--------|
| Workspace contrat | `/Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs` |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| HEAD projet | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| origin/correctifs | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| origin/main | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Worktree build | `/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a` |
| WT HEAD | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| WT tree | `e506cc6de78a16718a5cd4201b891ba5dbaa643b` |
| Ancien WT | `/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25` @ ba831b25 PRESERVED |

Porcelain projet (hors artefacts RECETTE hors repo):

```
 M .tmp-sfia-review/chatgpt-review.md
```

Candidat remote = `d646d42a` : OK. Ascendance `b9047a48` : OK. Aucun commit projet ce cycle.

### Handoffs de référence

- Full correctif accepté: `51891368` / blob `899e5830`
- Light publication: `8a37154c` / blob `1b49578d`

---

## 3. Sources consultées

- ENV-01 `environnements-recette-et-promotions.md`
- `specification-technique.md`, `tracabilite-r2-r3-r4.md`, `recette-ml3-rct02-anomalies.md`, `delivery-history.md`
- Manifestes / scripts ba831b25 (`artifacts/ops`, LaunchAgent)
- SEF/roadmap/product-versioning (gouvernance applicable, pas de nouvelle décision)
- Routing SFIA v2.6 + publisher handoff

---

## 4. Inventaire ENV-01 avant bascule

### RECETTE précédente (observée)

- Processus: PID 4126 puis respawn LaunchAgent `com.sfia.studio.next.recette.ml3`
- Port: `127.0.0.1:3200`
- CWD: `/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25/projects/sfia-studio-next/web`
- SHA servi: `ba831b25`
- DB: `127.0.0.1:5434/sfia_next_recette_ml3` (role `sfia_next_recette`)
- OAuth GitHub: CONFIGURED ; Nora OPENAI key SET ; profile TEST_BOUNDARY
- DEV test login: `STUDIO_DEV_TEST_LOGIN=0`

### Autres lanes

- DEV PG: `sfia-next-dev-pg` :5433
- RECETTE PG: `sfia-next-recette-pg` :5434
- STABLE: NOT AVAILABLE / NOT STARTED

---

## 5. Préservation ancien candidat

- Worktree ba831b25 **conservé** (non détruit)
- LaunchAgent plist sauvegardé: `artifacts/ops/com.sfia.studio.next.recette.ml3.plist.ba831b25.bak`
- Backup DB avant bascule:

```
RECETTE DB backup before switch to d646d42a
timestamp_utc=20261106T213019Z
database=sfia_next_recette_ml3
role=sfia_next_recette
host_port=127.0.0.1:5434
dump_file=sfia_next_recette_ml3_20261106T213019Z.dump
bytes=121346
previous_candidate=ba831b25
new_candidate=d646d42a
restore: docker exec -e PGPASSWORD=... sfia-next-recette-pg pg_restore -U sfia_next_recette -d sfia_next_recette_ml3 --clean --if-exists /tmp/sfia_next_recette_ml3_20261106T213019Z.dump
(after docker cp dump into container)
NO migration executed in this cycle.

```

- Procédure rollback:

```
Rollback to previous RECETTE candidate ba831b25:
1. launchctl bootout gui/$(id -u)/com.sfia.studio.next.recette.ml3
2. Restore plist from:
   /Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/ops/com.sfia.studio.next.recette.ml3.plist.ba831b25.bak
   -> /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml3.plist
3. launchctl bootstrap gui/$(id -u) /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml3.plist
4. Verify cwd is .../ml3-recette-build-ba831b25/.../web and http://127.0.0.1:3200/login
5. Optional DB restore only under Morris GO:
   artifacts/db-backups/sfia_next_recette_ml3_20261106T213019Z.dump
Old worktree PRESERVED. No force-delete.

```

Données historiques « Fil de projet » / décisions: **non migrées, non écrasées** (mêmes DB réutilisée après backup).

---

## 6. Build immuable d646d42a

1. `git worktree add --detach` → `/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a` @ `d646d42a`
2. Copie `.env.local` RECETTE (hors Git) + `SFIA_SOURCE_SHA=d646d42a`
3. `npm ci` (lockfile)
4. Preuves:

### Unit (47 PASS)

```
◇ injected env (12) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/projects/sfia-studio-next/web

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T21:30:47.042Z","lane":"DEV","source_sha":"d646d42addb5a4c4a3cab441e9e39018d85fae70","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_5404bd0d-17bf-4764-a4d1-034fd26eac39","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T21:30:47.043Z","lane":"DEV","source_sha":"d646d42addb5a4c4a3cab441e9e39018d85fae70","build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_5404bd0d-17bf-4764-a4d1-034fd26eac39","attempt_id":"att_063a882b-92fd-4e56-ad06-80dbb39d7ac4","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/ml3-b13-divergence.test.ts (24 tests) 7ms
 ✓ tests/unit/ml3-cki-intent.test.ts (10 tests) 10ms
 ✓ tests/unit/ml3-rct02-intent.test.ts (13 tests) 10ms

 Test Files  3 passed (3)
      Tests  47 passed (47)
   Start at  22:30:46
   Duration  751ms (transform 96ms, setup 0ms, collect 456ms, tests 26ms, environment 0ms, prepare 67ms)

```

### Lint

```
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

### Build (extrait)

```
├ ƒ /api/preparations/[preparationId]/create-project                         166 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents                              166 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents/[documentId]                 166 B         103 kB
├ ƒ /api/preparations/[preparationId]/knowledge                              166 B         103 kB
├ ƒ /api/preparations/[preparationId]/messages                               166 B         103 kB
├ ƒ /api/preparations/[preparationId]/reconcile                              166 B         103 kB
├ ƒ /api/projects/[projectId]                                                166 B         103 kB
├ ƒ /api/projects/[projectId]/decisions                                      166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage                                       166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands                              166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/[commandId]                  166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]    166 B         103 kB
├ ○ /login                                                                 1.22 kB         104 kB
├ ○ /portfolio                                                             1.08 kB         104 kB
├ ƒ /preparations/[preparationId]                                          6.47 kB         109 kB
└ ƒ /projects/[projectId]                                                  10.1 kB         113 kB
+ First Load JS shared by all                                               103 kB
  ├ chunks/493-d3099f0aa7768a9d.js                                         46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js                                    54.2 kB
  └ other shared chunks (total)                                            1.92 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

```

- `tsc --noEmit`: PASS
- `BUILD_ID` Next: `R7JhVsbMaJdiUuuljApyn`
- PG suite: **non rejouée contre DB RECETTE** (évite mutation) — déjà 44/44 au publish sur DEV ; schéma RECETTE vérifié (`project_cycles`/`human_decisions`/`governance_restrictions` présents ; counts 15/4/2)

### CI GitHub

`check-runs total=0` → **PENDING / NOT RUN** (pas de PASS inventé). Réserve explicite.

---

## 7. Bascule opérationnelle

1. Backup DB OK
2. `launchctl bootout` agent ML3 (KeepAlive respawnait ba831b25)
3. Plist pointé vers run-script d646d42a
4. `launchctl bootstrap` → next start production
5. Vérifications:
   - CWD process = WT d646d42a
   - `/login` HTTP 200 ; HTML contient `<!--R7JhVsbMaJdiUuuljApyn-->`
   - `/api/auth/status` → CONFIGURED
   - `/api/portfolio` → 401 sans session (frontière auth)

### Script de démarrage (contenu complet)

```bash
#!/usr/bin/env bash
set -euo pipefail
WEB="/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/projects/sfia-studio-next/web"
OPS="/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/ops"
LOG="$OPS/recette-ml3-next.log"
cd "$WEB"
set -a
# shellcheck disable=SC1091
source "$WEB/.env.local"
set +a
export NODE_ENV=production
echo "$(date '+%Y-%m-%dT%H:%M:%S%z') START next-server SHA=d646d42a lane=${STUDIO_LANE:-?} cog=${SFIA_COG_PROFILE_TYPE:-?} oauth_id_set=${GITHUB_CLIENT_ID:+yes} openai_set=${OPENAI_API_KEY:+yes}" >>"$OPS/recette-wrapper.log"
exec ./node_modules/.bin/next start -H 127.0.0.1 -p 3200 >>"$LOG" 2>&1

```

### LaunchAgent plist servi (contenu complet)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.sfia.studio.next.recette.ml3</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/ops/run-recette-ml3-next.sh</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/projects/sfia-studio-next/web</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/ops/launchd.out.log</string>
  <key>StandardErrorPath</key>
  <string>/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/ops/launchd.err.log</string>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
  </dict>
</dict>
</plist>

```

---

## 8. Manifeste servi (contenu complet)

```json
{
  "lane": "RECETTE",
  "state": "SERVED",
  "source_repository": "mcleland147/sfia-workspace",
  "source_branch": "sfia/next-ml3-rct02-correctifs",
  "base_main_sha": "7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480",
  "candidate_sha": "d646d42addb5a4c4a3cab441e9e39018d85fae70",
  "tree_sha": "e506cc6de78a16718a5cd4201b891ba5dbaa643b",
  "build_identifier": "ml3-recette-served-d646d42a-20261106T213312Z",
  "build_id_next": "R7JhVsbMaJdiUuuljApyn",
  "deployment_timestamp_utc": "2026-11-06T21:33:12Z",
  "package_version": "0.0.0-dev",
  "technical_version": "0.0.0-dev",
  "product_version": "NOT AVAILABLE",
  "candidate_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "release_tag": "N/A",
  "served_address": "http://127.0.0.1:3200",
  "runtime_process": "com.sfia.studio.next.recette.ml3 / next start",
  "runtime_pid": "84785",
  "runtime_source_path": "/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/projects/sfia-studio-next/web",
  "schema_revision": "007_ml3_pilotage_decisions",
  "test_data_revision": "existing sfia_next_recette_ml3 preserved (15 human_decisions / 4 project_cycles / 2 governance_restrictions at switch)",
  "database": {
    "host_port": "127.0.0.1:5434",
    "database": "sfia_next_recette_ml3",
    "role": "sfia_next_recette"
  },
  "dependency_lock_hash": "31c751c8ef58097ea0ebef72a6e84107cc2f8ea8cf5415a651785511f4f53f84",
  "node_version": "v24.16.0",
  "authentication_mode": {
    "oauth_github": "CONFIGURED (client id present) \u2014 callback LIVE Morris-owned",
    "dev_test_adapter": "DISABLED (STUDIO_DEV_TEST_LOGIN=0)",
    "better_auth_url": "http://127.0.0.1:3200"
  },
  "nora": {
    "openai_key": "SET",
    "profile_type": "TEST_BOUNDARY",
    "live_campaign_this_cycle": "NOT EXECUTED (Morris-owned after qualification)"
  },
  "capabilities": {
    "openai": "configured / LIVE not auto-executed",
    "github_oauth": "configured",
    "cursor_external_mutation": "not authorized"
  },
  "quality_evidence": [
    "unit 47 PASS on immutable WT",
    "lint PASS",
    "tsc PASS",
    "next build PASS build_id=R7JhVsbMaJdiUuuljApyn",
    "PG suite 44 PASS at publish SHA (DEV) \u2014 not re-run against RECETTE DB",
    "schema tables project_cycles/human_decisions/governance_restrictions PRESENT",
    "HTTP /login 200 with BUILD_ID in HTML",
    "HTTP /api/portfolio 401 unauthenticated"
  ],
  "known_gaps": [
    "CI GitHub check-runs total=0 PENDING/NOT RUN at SHA",
    "R-UX-01 CARRIED",
    "ENV-01 cookie host Reserve A",
    "C03 LIVE silent CKI NOT PROVEN this cycle",
    "C05 representative formulation vs exact transcript",
    "NLP FR NOT UNIVERSAL",
    "historical polluted RECETTE decisions not migrated"
  ],
  "previous_candidate": {
    "sha": "ba831b25bc182f755be749243f256dbf7d5a1ca1",
    "worktree": "/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25",
    "preserved": true
  },
  "rollback_reference": "/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/rollback-to-ba831b25.txt",
  "db_backup": "artifacts/db-backups/sfia_next_recette_ml3_20261106T213019Z.dump",
  "review_decision": "PENDING MORRIS",
  "morris_recette_acceptance": "PENDING"
}
```

---

## 9. Smoke technique

| Contrôle | Résultat |
|----------|----------|
| `/login` | 200 |
| BUILD_ID dans HTML | `R7JhVsbMaJdiUuuljApyn` |
| `/api/auth/status` | `{"provider":"github-oauth-studio-identity-only","configured":true,"status":"CONFIGURED — LIVE proof still requires successful callback","note":"Login grants Studio identity only — never repository rights."}` |
| `/api/portfolio` unauth | 401 |
| OAuth | CONFIGURED — callback LIVE Morris-owned |
| DEV test login env | DISABLED (=0) ; UI boutons DEV encore visibles (réserve UX, API fail-closed attendue) |
| Nora LIVE campagne | NOT EXECUTED |
| Capture login | `artifacts/smoke/login-3200.png` |

Login HTML head:

```
<!DOCTYPE html><!--R7JhVsbMaJdiUuuljApyn--><html lang="fr"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/
```

---

## 10. Protocole retests utilisateur (contenu complet)

```markdown
# Protocole de retests LIVE ciblés — ML3 RCT-02 (C01–C08)

**Candidat servi :** `d646d42a` @ http://127.0.0.1:3200
**Source anomalies :** `construction/pilotage-et-decisions/recette-ml3-rct02-anomalies.md`
**Exécution :** Morris (+ supervision ChatGPT). Cursor n’exécute PAS la campagne LIVE ici.

Préférer un **nouveau projet de test isolé** pour les mutations. Ne pas altérer « Fil de projet » historique pour le smoke.

## Parcours A — Décisions naturelles

### A1 — C01/C02 Ouverture développée
- **Prérequis :** projet sans cycle ACTIVE
- **Message :** « Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier. »
- **Attendu :** `OPEN_CYCLE` APPLIED, CADRAGE ACTIVE, objectif ≠ `.`, une HumanDecision
- **Preuve :** Pilotage + Journal

### A2 — C04 RECORD sans contamination Nora
- **Message T04-like :** décision métier + « Nora, … aide-moi… »
- **Attendu :** `RECORD_DECISION` APPLICABLE ; énoncé **sans** la consigne Nora
- **Preuve :** Journal / formulaire révision

### A3 — C05 REVISE conversationnelle
- **Message (formulation représentative T05) :** « Je révise la décision que j’ai prise sur l’orientation du cadrage. Cette nouvelle orientation remplace… »
- **Note :** transcript original intégral non établi comme unique source
- **Attendu :** ancienne `REVISED`, nouvelle `APPLICABLE`, énoncé propre
- **Preuve :** Journal D6

## Parcours B — Autorité et restrictions

### B1 — C06 Levée conversationnelle
- **Prérequis :** restriction `CYCLE_MUTATION` ACTIVE (via cockpit si besoin)
- **Message :** « Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle. »
- **Attendu :** restriction levée, cycle reste ACTIVE
- **Contre-tests :** « Je refuse de lever… », « je ne t’autorise pas à lever… » → **aucune** mutation

### B2 — C07 État effectif
- Après B1, demander à Nora l’état des restrictions
- **Attendu :** confirmation honnête qu’aucune restriction active (ou état réel)

### B3 — C08 Clôture développée
- **Message T13-like :** « … je décide de clôturer maintenant le cycle CADRAGE … Ne démarre aucun nouveau cycle automatiquement. »
- **Attendu :** CLOSE APPLIED, pas d’OPEN automatique
- **Contre-tests :** « Ne fais pas ceci : Nora, clôture… », « Un ancien message disait : Nora, clôture… » → **aucune** clôture

## Parcours C — Cognition et non-régression

### C1 — C03 CKI silencieux
- Questions naturelles CADRAGE / CONCEPTION_FONCTIONNELLE
- **Attendu :** expertise sans citation spontanée CKI/id/version

### C2 — Faux GO
- Citation OPEN, négation LIFT, exemple CLOSE → zéro mutation D5/D6

### C3 — Persistance
- Rechargement navigateur → cycle/décisions/historique conservés

### C4 — Cockpit
- Boutons Pilotage (ouvrir/clôturer/lever/réviser) toujours fonctionnels

## Règles
- Ne pas refaire les 16 tests RCT-02 par défaut
- Consigner pour chaque cas : prérequis, message, résultat, état D6, preuve, réserve

```

---

## 11. Réserves

- CI GitHub NOT RUN au SHA
- R-UX-01 CARRIED
- Cookie host DEV/RECETTE Reserve A
- C03 LIVE silent CKI NOT PROVEN
- C05 formulation représentative ≠ transcript intégral établi
- NLP FR non universel
- Données historiques polluées non migrées
- UI DEV test login encore affichée malgré env=0
- Campaign LIVE OpenAI: à conduire avec Morris

---

## 12. Diff Git / état final

- **Aucun commit projet** ce cycle
- Worktree projet: HEAD `d646d42a` synchrone remote
- Artefacts RECETTE hors Git sous `/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a/artifacts/`
- `.tmp-sfia-review/chatgpt-review.md` régénéré pour ce pack

---

## 13. Verdict et gates suivants

**RECETTE CANDIDATE DEPLOYED — READY FOR MORRIS TARGETED LIVE TEST**

### À fournir à Morris

- URL: http://127.0.0.1:3200
- SHA servi: `d646d42a`
- Build ID: `R7JhVsbMaJdiUuuljApyn`
- Schema: 007_ml3_pilotage_decisions / DB sfia_next_recette_ml3
- OAuth: CONFIGURED ; Nora key SET ; LIVE campaign pending Morris
- Smoke: PASS borné
- CI: PENDING/NOT RUN
- Rollback: artifacts/rollback-to-ba831b25.txt + DB dump
- Retests: parcours A/B/C du protocole (C01–C08 ciblés)

### Gates NON acquis

PR · merge · main · STABLE · RELEASE · ADOPTED · ML3 CLOSED · RECETTE ACCEPTED

Capacité suivante: ChatGPT vérifie handoff/manifeste, puis micro-recette LIVE avec Morris.
