# SFIA Studio Next — Review Pack FULL

## R5 / ML4 — Bascule RECETTE candidat 771844fd (Cycle 11 / ENV-01)

**Verdict :** RECETTE DEPLOYED — CANDIDATE 771844FD VERIFIED — R12 LIVE USER RETEST NOT RUN

**Interdictions respectées :** pas de R12 PASS / CREATE LIVE PROVEN / GITHUB REAL COMMIT PROVEN / ML4 ACCEPTED / READY FOR MERGE / STABLE / RELEASED / ADOPTED.

---

## 1. Date et GO Morris

- GO Morris 09/11/2026 — bascule RECETTE du correctif A+D+E candidat `771844fd`.
- Cycle 11 — Déploiement / CRITICAL / FULL / Handoff L3.
- Exécution Cursor : 2026-11-09 ~23:58 CET.
- Portée : mise à disposition uniquement — **pas** de rejeu R12, **pas** de mutation GitHub, **pas** de push produit.

---

## 2. Git Truth Check

### Initial / final (branche produit — inchangée)

| Champ | Valeur |
| --- | --- |
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD | `771844fda083ce3c1858b77b0012e5bf2b801605` |
| Tree | `030a9e87064bade155ae3c585f9954d65d52687f` |
| Parent | `5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea` |
| origin/main | `6667a43858a5421e391b7441246536daad148bd6` |
| Handoff revue entrée | `d931b747…` / blob `9cf5f4f9…` |
| Push produit | **AUCUN** |

Worktree produit : seuls untracked préexistants + Review Pack local / manifeste ENV-01 (non poussés).

---

## 3. Sources consultées

- Handoff A+D+E CREATE_PLEASE `d931b747` / blob `9cf5f4f9`
- Manifeste historique `env01-recette-manifest-ml4-93da44be-2026-11-09.md`
- LaunchAgent `com.sfia.studio.next.recette.ml4`
- `start-recette.sh` artefact 93da44be
- gouvernance ENV-01 / product-versioning (politiques — non modifiées)
- migrations `012_auth_concurrency_safety.sql` présentes ; **aucun delta** 93da44be..771844fd

---

## 4. État RECETTE initial

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| SHA servi | `93da44beb7e7571c9406180027896769579b9815` |
| BUILD_ID | `sHkE8sHJBxD3U9AJdHWi7` |
| Worktree | `…-ml4-recette-build-93da44be` |
| LaunchAgent | running |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| STUDIO_LANE | RECETTE |
| GitHub | `real` / `documentary` |
| App | 5677465 / install 180092114 / `mcleland147/chantiers360` |

---

## 5. SHA/tree candidat vérifiés

- Commit : `771844fda083ce3c1858b77b0012e5bf2b801605`
- Tree : `030a9e87064bade155ae3c585f9954d65d52687f`
- Worktree détaché créé depuis object store partagé `sfia-workspace` :
  `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd`
- `git status` : clean detached HEAD exact

---

## 6. Stratégie de build isolé

1. `git worktree add --detach …-771844fd 771844fd`
2. `npm ci` dans `projects/sfia-studio-next/web` du worktree
3. `npx tsc --noEmit`
4. `env -u NODE_ENV NODE_ENV=production npm run build`
5. Aucun `.env.local` dans le worktree — config via `~/.config/sfia-studio-next/recette/.env.local`
6. Artefact 93da44be **conservé** intact

Blast radius code 93da44be..771844fd : conversation qualify/ACK/obs + tests + docs techniques uniquement — **pas** de schema/DB/Git publication.

---

## 7. Build command / result / BUILD_ID

```
npm ci → PASS
npx tsc --noEmit → PASS
NODE_ENV=production npm run build → PASS
BUILD_ID = SmL2kyWbd1Q3kIuwNw0mQ
```

---

## 8. Dépendances

`npm ci` : 497 packages ajoutés ; warnings deprecated préexistants. Pas de `npm audit fix` appliqué.

---

## 9. DB / schema avant/après

| Mesure | Avant | Après |
| --- | --- | --- |
| documents | 102 | 102 |
| revisions | 165 | 165 |
| projects | 12 | 12 |
| migrations appliquées ce cycle | 0 | 0 |
| schema tip fichiers | 012_auth_concurrency_safety | identique (pas de delta git) |

---

## 10. Documents D4 / empreintes

Cible `doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2` (Chantiers360) :

| Rev | ID | Status | md5 |
| --- | --- | --- | --- |
| v1 | `drev_c07ca162-…` | AVAILABLE | `de4bd1a6e59f5dea12fd38ce265b5f43` |
| v2 | `drev_31678175-…` | AVAILABLE | `a875d28e64e460cc1d9837e4d5c8bd36` |

Identiques avant/après. Aucune écriture D4.

---

## 11. Configuration Git avant/après (expurgée)

Inchangée :

- `STUDIO_GITHUB_PROVIDER=real`
- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`
- App ID `5677465` / Installation `180092114` / repo sandbox `mcleland147/chantiers360`
- `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY`

Seul override runtime via start script : `SFIA_SOURCE_SHA=771844fd…` (après `source` du `.env.local`).

---

## 12. Launcher / PID / port

### Avant
- program: `…-recette-build-93da44be/start-recette.sh`
- BUILD HTML: `sHkE8sHJBxD3U9AJdHWi7`

### Après
- program: `…-recette-build-771844fd/start-recette.sh`
- job pid: `66958` ; listen `node` pid `66978` sur `127.0.0.1:3200`
- BUILD HTML: `SmL2kyWbd1Q3kIuwNw0mQ`

### start-recette.sh (nouveau — contenu complet)

```
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

### start-recette.sh (ancien — conservé)

```
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=93da44beb7e7571c9406180027896769579b9815
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200

```

### plist actuel (contenu complet)

```
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

## 13. Diff configuration déploiement

- Plist `ProgramArguments` / `WorkingDirectory` / logs → chemins `…-771844fd`
- Nouveau `start-recette.sh` avec `SFIA_SOURCE_SHA=771844fd…`
- Aucune modification du fichier secrets `~/.config/…/recette/.env.local`

---

## 14. Procédure rollback CODE/CONFIG

Cible retour : `93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7`

Backup : `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-235813-pre-771844fd`

```
old_sha=93da44beb7e7571c9406180027896769579b9815
old_build=sHkE8sHJBxD3U9AJdHWi7
old_worktree=/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be
new_build=SmL2kyWbd1Q3kIuwNw0mQ

```

Étapes :
1. Restaurer le plist sauvegardé (program → `…-93da44be/start-recette.sh`)
2. `launchctl bootout gui/$UID/com.sfia.studio.next.recette.ml4`
3. `launchctl bootstrap gui/$UID …/com.sfia.studio.next.recette.ml4.plist`
4. Vérifier HTML `<!--sHkE8sHJBxD3U9AJdHWi7-->` et port 3200
5. Recontrôler D4 (lecture seule)

Aucune restauration DB requise (pas de migration).

---

## 15. État du rollback

**DOCUMENTED / NOT EXERCISED** — smoke PASS, pas de retour forcé.

---

## 16. Smoke non mutatif

| Check | Résultat |
| --- | --- |
| GET / | 307 |
| GET /login | 200 |
| GET /portfolio | 200 |
| GET /settings/integrations | 200 |
| /api/portfolio (no session) | 401 SESSION_INVALID |
| /api/integrations/status | 401 SESSION_INVALID |
| BUILD fingerprint | `SmL2kyWbd1Q3kIuwNw0mQ` FOUND |
| ancien BUILD | ABSENT |
| Listen | 127.0.0.1:3200 |
| DEV :3100 | unreachable/idle |
| Nora LIVE | NOT RUN |
| GitHub write | NOT RUN |

---

## 17. GitHub distant

| Témoin | Observé |
| --- | --- |
| main | `8c398c494dd918272aab5b2653777c6c21d2e76e` |
| PR #18 | OPEN / merged=false |

Aucun effet GitHub de ce cycle.

---

## 18. Manifeste ENV-01 (contenu complet)

Path local (untracked, comme les manifestes précédents) :
`projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-771844fd-2026-11-09.md`

```
# ENV-01 — Manifeste RECETTE ML4 — bascule 771844fd (Cycle 11)

lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
source_sha: 771844fda083ce3c1858b77b0012e5bf2b801605
tree_sha: 030a9e87064bade155ae3c585f9954d65d52687f
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
previous_source_sha: 93da44beb7e7571c9406180027896769579b9815
previous_build_id: sHkE8sHJBxD3U9AJdHWi7
current_build_id: SmL2kyWbd1Q3kIuwNw0mQ
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE)
release_tag: N/A
schema_revision: 012_auth_concurrency_safety (no migration delta 93da44be..771844fd)
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd
hot_reload: OFF (`next start` production)
delivery_status_recette: TECHNICAL SMOKE PASS
user_result: UNKNOWN / R12 LIVE NOT RUN

## Launcher

- mechanism: LaunchAgent `com.sfia.studio.next.recette.ml4`
- plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
- program: …/sfia-workspace-next-ml4-recette-build-771844fd/start-recette.sh
- KeepAlive: true ; RunAtLoad: true
- process: launchd job pid 66958 ; next-server listen pid 66978 on 127.0.0.1:3200
- previous artefact preserved: …-ml4-recette-build-93da44be BUILD sHkE8sHJBxD3U9AJdHWi7

## Dataset préservé

- db: sfia_next_recette_ml4 @ 127.0.0.1:5434
- target D4: doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2
- v1: drev_c07ca162-faa4-48f5-b705-018e41ae88d9 AVAILABLE md5 de4bd1a6e59f5dea12fd38ce265b5f43
- v2: drev_31678175-cb9a-4a1e-ab60-6ead8fe076fb AVAILABLE md5 a875d28e64e460cc1d9837e4d5c8bd36
- counts at switch: documents=102 revisions=165 projects=12 (unchanged before/after)
- schema: no migration applied this cycle

## Backup / rollback CODE-CONFIG

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-235813-pre-771844fd
- contains: previous plist + start-recette-93da44be.sh + rollback-target.txt
- DB restore: FORBIDDEN without Morris GO (not required — no migration)
- rollback_code: DOCUMENTED / NOT EXERCISED
- rollback steps:
  1. restore plist ProgramArguments to …-recette-build-93da44be/start-recette.sh
  2. launchctl bootout + bootstrap
  3. verify HTML fingerprint sHkE8sHJBxD3U9AJdHWi7 and SFIA_SOURCE_SHA override 93da44be

## Nora / GitHub

- SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
- OPENAI_API_KEY: PRESENT (LIVE NOT RUN)
- STUDIO_GITHUB_PROVIDER: real
- STUDIO_GITHUB_ALLOW_MUTATIONS: documentary
- GitHub App ID: 5677465 / Installation: 180092114 / repo: mcleland147/chantiers360
- mutations GitHub REAL: OFF / NONE this cycle
- main tip observed: 8c398c494dd918272aab5b2653777c6c21d2e76e
- PR #18: OPEN / not merged
- R12 LIVE: NOT RUN
- Nora LIVE: NOT RUN

## Build / smoke

- worktree detached clean at 771844fd / tree 030a9e87…
- npm ci: PASS
- tsc --noEmit: PASS
- env -u NODE_ENV NODE_ENV=production npm run build: PASS → SmL2kyWbd1Q3kIuwNw0mQ
- migration delta 93da44be..771844fd: NONE (conversation/obs/tests/docs only)
- HTTP: / → 307 ; /login /portfolio /settings/integrations → 200
- APIs sans session: /api/portfolio 401 SESSION_INVALID ; /api/integrations/status 401
- HTML fingerprint: SmL2kyWbd1Q3kIuwNw0mQ FOUND ; ancien sHkE8sHJ… ABSENT
- DEV :3100 unreachable/idle ; STABLE N/A

## Capabilities

openai: CONFIGURED / LIVE NOT RUN
github: REAL DOCUMENTARY CONFIGURED / WRITE NOT RUN
cursor: NOT APPLICABLE TO ML4 USER EFFECT

## known_gaps

R12 LIVE NON REJOUÉ
R13/R14 NON EXÉCUTÉS
MERGE REAL HARD-BLOCKED
RÉSERVES ML4 EXISTANTES (cookies lane 127.0.0.1)

## review_decision

GO MORRIS BASCULE RECETTE
ACCEPTATION UTILISATEUR R12 EN ATTENTE

## Verdict technique

RECETTE DEPLOYED — CANDIDATE 771844FD VERIFIED — R12 LIVE USER RETEST NOT RUN

date: 2026-11-09T23:58:30+01:00

```

---

## 19. Fake / Real Qualification

| Domaine | Niveau |
| --- | --- |
| Runtime RECETTE servi | REAL (build production `next start`) |
| Smoke HTTP | REAL |
| D4 lecture | REAL DB RECETTE |
| GitHub distant lecture | REAL |
| Correctif A+D+E comportement utilisateur | **NOT REPROVEN LIVE** (R12 NOT RUN) |
| Preuves correctif antérieures | DET/PG DEV (cycles précédents) |

---

## 20. Absence Nora LIVE / GitHub writes

Confirmé : aucun appel génération, aucune HumanDecision, aucun dispatch publication, aucune branche/commit/PR créés.

---

## 21. Réserves connues

1. Collision cookies lanes `127.0.0.1` (profils navigateur séparés requis).
2. R12 LIVE utilisateur **non rejoué**.
3. `.env.local` conserve encore une ancienne valeur `SFIA_SOURCE_SHA=8ba77730` ; **override** effectif par `start-recette.sh` (771844fd). Dette cosmétique non bloquante.
4. Rollback non exercé (documenté seulement).

---

## 22. Verdict technique

**RECETTE DEPLOYED — CANDIDATE 771844FD VERIFIED — R12 LIVE USER RETEST NOT RUN.**

---

## 23. Gate utilisateur R12

Prochaine étape Morris : reprise R12 **une action à la fois**, en commençant par CREATE D4 LIVE sur CampusFlow — **pas** déclenchée automatiquement.

---

## 24. Handoff distant

_(complété après publish L3)_

---

## Annexes — inventaire artefacts

| Artefact | Path |
| --- | --- |
| Nouveau worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd` |
| Ancien worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be` |
| Backup rollback | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-235813-pre-771844fd` |
| Manifeste | `…/env01-recette-manifest-ml4-771844fd-2026-11-09.md` |
