# SFIA Review Pack — E08 Existing Recette Cutover

- status: COMPLETE — FULL mono-cycle
- cycle: Ensemble 08 — cutover RECETTE existante E07
- profile: CRITICAL · Delivery · NO RELEASE
- date_local: 2026-11-21 21:06:57 CET
- date_utc: 2026-11-21T20:06:57Z
- prior_handoff: ab403ecc1b80d5633b05b9e8c51d89ce327fce86
- go_morris: SHA 98185598 + BUILD 1xEbvCdTAX6ht262w4oKF — HONORÉ
- verdict: **RECETTE AVAILABLE — MORRIS UAT REQUIRED**

---

## 1. GO Morris

Autorisation explicite cutover sur:

- SHA `98185598de0d3f3b84af862aecea04b9099217ca`
- TREE `1c70839facb7fbc799980c585ce8bfba51cdb5d6`
- BUILD_ID `1xEbvCdTAX6ht262w4oKF`
- Lane RECETTE E07 existante :3200 / DB `sfia_next_recette_ml4`
- Interdits respectés: pas de push/PR/merge projet, pas de WRITE REAL, pas de migration DB, pas de STABLE

---

## 2. Git Truth

| Field | Value |
| --- | --- |
| Branch E08 | `feat/next-ensemble08-git-publications-nora` |
| Tip docs | `29066442a7fa51b106d9fe45b5c1b05da7f13004` (+ docs locales post-cutover non poussées) |
| Freeze SHA (immutable) | `98185598…` MATCH |
| Build WT HEAD/TREE/BUILD_ID | MATCH obligatoires |
| Project push | NONE |

---

## 3. Runtime avant / après

### Avant E07
SOURCE `5ad8fa57` · BUILD `BtZP6qDx5oAw8jwPQSEhc` · script E07 · PID 75565

### Après E08 (observé)
- Service: `com.sfia.studio.next.recette.ml4d-ux004`
- Script: `start-recette-ensemble08-98185598.sh`
- CWD: E08 `…/web`
- PID: 52210/52237
- HTTP BUILD: `<!--1xEbvCdTAX6ht262w4oKF-->`
- Login/portfolio/integrations: HTTP 200

---

## 4. Diff LaunchAgent (sans secrets)

```diff
--- /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak	2026-11-21 11:36:23
+++ /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist	2026-11-21 21:02:00
@@ -2,26 +2,26 @@
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
 <dict>
-  <key=***
-  <string>com.sfia.studio.next.recette.ml4d-ux004</string>
-  <key=***
-  <array>
-    <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/start-recette-ensemble07-5ad8fa57.sh</string>
-  </array>
-  <key=***
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/projects/sfia-studio-next/web</string>
-  <key=***
-  <true/>
-  <key=***
-  <true/>
-  <key=***
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/launchd.out.log</string>
-  <key=***
-  <string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/launchd.err.log</string>
-  <key=***
-  <dict>
-    <key=***
-    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
-  </dict>
+	<key=***
+	<dict>
+		<key=***
+		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
+	</dict>
+	<key=***
+	<true/>
+	<key=***
+	<string>com.sfia.studio.next.recette.ml4d-ux004</string>
+	<key=***
+	<array>
+		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh</string>
+	</array>
+	<key=***
+	<true/>
+	<key=***
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/launchd.err.log</string>
+	<key=***
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/launchd.out.log</string>
+	<key=***
+	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/projects/sfia-studio-next/web</string>
 </dict>
 </plist>
```

## 5. Script démarrage E08 (complet)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=98185598de0d3f3b84af862aecea04b9099217ca
export STUDIO_LANE=RECETTE
export STUDIO_PORT=3200
export NODE_ENV=production
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset STUDIO_NORA_SIMULATED_PROVIDER || true
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
unset STUDIO_DEV_HOLD_INITIAL_QUALIFICATION || true
unset NODE_PATH || true
exec npx next start -H 127.0.0.1 -p 3200
```

---

## 6. ENV-01 isolation

| Check | Result |
| --- | --- |
| RECETTE DSN host:port | 127.0.0.1:5434 |
| DEV DSN host:port | 127.0.0.1:5433 |
| Build WT `.env.local` | absent |
| 5433 in `.next` | e2e config hosts only — **pas** DATABASE_URL literal |
| Runtime DATABASE_URL | `process.env` via recette `.env.local` |
| STUDIO_GITHUB_ALLOW_MUTATIONS | vide / OFF |
| STUDIO_GITHUB_PROVIDER | real |
| OPENAI key | présente (LIVE possible) |
| Lane cookie | `sfia_studio_session__RECETTE` |

---

## 7. Backup / restore proof

- Historique + immédiat gzip OK
- Restore isolée temp DB → counts match → DROP — RECETTE intacte
- Aucune restauration destructive sur DB RECETTE

---

## 8. Inventaire DB

| Metric | Avant | Après smoke |
| --- | --- | --- |
| projects | 26 | 26 |
| documents | 117 | (inchangé attendu) |
| messages | 629 | 633 (+4 essais PW) |
| sessions | 118 | 123 (logins test) |
| EquipCampus | présent | présent (1 conv / 14 msg) |

Mutations volontaires: DEV test login Pilot A + Playwright attempts (documentées).

---

## 9. Tests / smoke

| Test | Result |
| --- | --- |
| Identity BUILD/SHA servi | PASS |
| HTTP login/portfolio/settings | 200 |
| Project surfaces Pilot A (travail/projet/trajectoire/git/documents) | 200 |
| API git/sources + publications | 200 empty (pas de lien) |
| API integrations/status | REAL / DISCONNECTED |
| Playwright E08 SCRIPTED @3200 | **3 FAIL** — Nora LIVE≠fixture ; GitHub OAuth REAL≠SCRIPTED connect — **non bloquant cutover** |
| G5 | NOT PROVEN — Morris UAT |
| Rollback | Préparé, non exercé |

---

## 10. Manifeste final (complet)

# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)

| Champ | Valeur |
| --- | --- |
| Date/heure cutover | 2026-11-21 ≈ 21:02 CET (UTC 20:02) |
| Classe | **NO RELEASE** |
| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
| Cutover | **EXECUTED** — GO Morris SHA-specific honoré |
| STABLE | NOT AVAILABLE / non modifié |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## GO Morris (borné)

| Champ | Valeur |
| --- | --- |
| SHA autorisé | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Push/PR/merge projet | **NONE** |
| GitHub REAL WRITE/MERGE | **OFF** |

## Runtime AVANT (E07)

| Champ | Valeur |
| --- | --- |
| SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
| TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
| Script | `start-recette-ensemble07-5ad8fa57.sh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
| PID node | 75565 |

## Runtime APRÈS (E08) — observé

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
| Script | `…/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| WorkingDirectory | `…/web` |
| PID launchd / node | 52210 / 52237 (`next-server` v15.5.29) |
| SOURCE_SHA (script) | `98185598de0d3f3b84af862aecea04b9099217ca` |
| BUILD_ID fichier + HTTP | `1xEbvCdTAX6ht262w4oKF` (`<!--1xEbvCdTAX6ht262w4oKF-->`) |
| Mode | `npx next start -H 127.0.0.1 -p 3200` · production · pas de hot reload |
| Login HTTP | 200 |

## Actions cutover (exactes)

1. Plist backup : `com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak`
2. `launchctl bootout` du service
3. ProgramArguments → `start-recette-ensemble08-98185598.sh` ; WorkingDirectory → E08 `web/`
4. `launchctl bootstrap` même label
5. Vérification HTTP BUILD_ID + CWD processus

## PostgreSQL / données

| Champ | Valeur |
| --- | --- |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` (`sfia-next-recette-pg`) |
| Isolation DEV | `sfia-next-dev-pg` :5433 distincte |
| Migrations E08 | **aucune** appliquée (invariant confirmé) |
| Inventaire AVANT | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
| Inventaire APRÈS smoke | projects=**26** · messages=**633** (+4 essais Playwright Nora) · sessions=**123** (logins test) · Equip'Campus `proj_a9ce5f43…` présent · conversations=1 · messages=14 |
| Perte anormale | **NON** |

## Backup / restauration / rollback

| Élément | Statut |
| --- | --- |
| Backup historique | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` — gzip OK |
| Backup immédiat pré-cutover | `ml4d-e07-pre-e08-cutover-immediate-20261121T200119Z-from-5ad8fa57.sql.gz` — gzip OK |
| Preuve restore isolée | CREATE `sfia_next_recette_restore_proof_e08` → restore → projects=26/messages=629 → DROP — RECETTE intacte |
| Rollback E07 code | Worktree + BUILD `BtZP6qDx5oAw8jwPQSEhc` + plist `.bak` conservés — **non exercé** (cutover OK) |

## Capacités observées

| Capacité | Observation | Niveau |
| --- | --- | --- |
| E07 surfaces (Pilot A test login) | `/projects/…` travail/projet/trajectoire/documents/git → HTTP 200 | Browser/API smoke |
| Equip'Campus (Morris) | Présent en DB (identité OAuth Morris non exercée ce cycle) | DB continuity |
| Intégrations | `providerMode=REAL`, `status=DISCONNECTED` pour Pilot A | REAL config, non connecté |
| Git sources/pubs API | 200, listes vides sans dépôt rattaché | DETERMINISTIC path |
| GitHub REAL WRITE | Mutations OFF (`STUDIO_GITHUB_ALLOW_MUTATIONS` vide) | NOT PROVEN / OFF |
| Nora | Clé OPENAI présente en RECETTE → LIVE possible | LIVE config ; E2E conduit NOT PROVEN |
| Playwright E08 SCRIPTED | **3/3 FAIL** sur RECETTE — attendu (fixture≠LIVE ; connect SCRIPTED≠OAuth REAL) | N/A as REAL proof |
| G5 | **NOT PROVEN** — Morris UAT | Différé |

## Fake / Real

| Frontière | Niveau |
| --- | --- |
| Runtime build servi | REAL BOUNDARY (artefact figé servi) |
| PostgreSQL RECETTE | REAL BOUNDARY (même DB) |
| GitHub provider mode | REAL configuré ; WRITE OFF ; connexion Pilot A absente |
| Nora | LIVE credentials présents ; parcours conduit NOT PROVEN |
| Playwright SCRIPTED | NOT applicable as RECETTE proof |

## Réserves / gates Morris

1. UAT visuelle page 11 (G5)
2. Parcours Git avec compte Morris + App autorisée
3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
4. GO éventuel sandbox WRITE/MERGE
5. Push/PR projet hors cycle

## Verdict manifeste

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

---

## 11. Delivery history (extrait)

# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-21 ≈ 21:02 CET |
| Macro-lot | Ensemble 08 — cutover RECETTE existante E07 |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `98185598` · BUILD `1xEbvCdTAX6ht262w4oKF` |
| Avant | E07 `@5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` |
| Après | E08 servi HTTP `<!--1xEbvCdTAX6ht262w4oKF-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · projects 26 inchangé · +sessions/messages smoke |
| Backup | immédiat + restore proof isolée PASS |
| Playwright SCRIPTED on RECETTE | 3 FAIL (attendu LIVE/REAL) |
| Smoke API/surfaces | PASS (Pilot A test login) |
| G5 | NOT PROVEN — Morris UAT |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CANDIDATE-FREEZE-RECETTE-PREP

| Field | Value |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Macro-lot | Ensemble 08 — freeze candidat + préparation évolution RECETTE E07 |
| Type | EVOL / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `19bd0099` |
| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Build worktree | `sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| RECETTE runtime observé | E07 `@5ad8fa57` · BUILD `BtZP6qDx5oAw8jwPQSEhc` · port 3200 · DB `sfia_next_recette_ml4` préservée |
| Backup PG | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` |
| Cutover | **NOT EXECUTED** — GO SHA-specific requis |
| Matrice A/B/S | Totaux corrigés 12 / 17 / 10 / 2 (=41) |
| Push projet | **NONE** |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-TECHNICAL-EXIT-RECETTE-PREFLIGHT

---

## 12. Fake/Real

- Artefact + DB RECETTE: REAL BOUNDARY
- GitHub WRITE: OFF / NOT PROVEN
- Nora LIVE credentials: présents ; conduite E2E NOT PROVEN
- SCRIPTED Playwright: not a REAL proof

---

## 13. Gates restants

1. Morris UAT visuelle (G5)
2. Git parcours compte Morris + App
3. Nora LIVE documentaire bornée
4. GO WRITE sandbox si besoin
5. Intégration Git projet (push/PR) hors cycle

---

## 14. Verdict

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

---

## 15. Instruction ChatGPT

Relire handoff distant `sfia/review-handoff`. Comparer GO, SHA/build servi, avant/après, backup, DB, smokes, FAIL Playwright motivé, G5 différé.
