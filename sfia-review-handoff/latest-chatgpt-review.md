# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 11 — Bascule RECETTE contrôlée → 93da44be

- Date/heure : 2026-11-09 20:57 CET (2026-11-09T19:57:34Z)
- GO Morris : 2026-11-09
- Profil : CRITICAL
- Typologie : RUN / MISE À DISPOSITION DE CANDIDAT
- Review Handoff : REQUIRED / PUBLISH-IN-CYCLE
- Verdict technique :
  **RECETTE BUILD UPDATED — SOURCE 93da44be VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN**

---

## 1. Git Truth Check — initial / final (produit)

| Item | Valeur | Statut |
|---|---|---|
| Repo | mcleland147/sfia-workspace | OK |
| Branche | fix/next-ml4-chat-first-d4-provenance-20261109 | OK |
| HEAD candidat | `93da44beb7e7571c9406180027896769579b9815` | OK |
| Tree candidat | `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8` | OK |
| Parent | `0b02de41cd7e3d08101419b49d6534d12edf70cf` | OK |
| Base macro | `974b0030…` ancêtre | OK |
| Ancien servi | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` | OK |
| origin/main | `6667a438…` | OK fetch |
| origin/feat | `51b0c3b6…` | OK |
| origin/handoff (pré) | `ff2b1549…` blob `1a2fd5ff…` | OK |
| Candidat local non poussé | OUI — aucune substitution par origin | OK |
| Commit produit nouveau ce cycle | **AUCUN** | OK |

État final branche produit (hors artefacts locaux) :
```
## fix/next-ml4-chat-first-d4-provenance-20261109
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-8ba77730-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-93da44be-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-974b0030-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md
?? projects/sfia-studio-next/web/scripts/github-app-installation-read-qualify.ts
```
HEAD final inchangé : `93da44beb7e7571c9406180027896769579b9815` / tree `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8`

---

## 2. Sources consultées

- SFIA v2.6 cycle routing / execution (cadre Critical / ENV-01 / Handoff)
- governance ENV-01 + product-versioning (réf main)
- construction integration-git (contrat/spec/matrice/delivery-history)
- Handoff correctif `ff2b1549` / blob `1a2fd5ff…`
- Handoff bascule précédente `5876ff0a` (launcher/backup/rollback patterns)
- Manifeste précédent `env01-recette-manifest-ml4-8ba77730-2026-11-09.md`

---

## 3. Ancien runtime identifié (avant bascule)

| Item | Valeur |
|---|---|
| SHA | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` |
| BUILD_ID | `ygu4moVrYUNZPkvprgvB_` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4` |
| PID next-server | 80657 (PPID 80628 → PPID 1 launchd) |
| Port | 127.0.0.1:3200 |
| start script | …/8ba77730/start-recette.sh `SFIA_SOURCE_SHA=8ba77730…` |
| Artefact après switch | **PRÉSERVÉ** (BUILD_ID inchangé sur disque) |

---

## 4. Préflight D4 (READ ONLY)

| Item | Avant | Après |
|---|---|---|
| documentId | doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2 | idem |
| revisionId v1 | drev_c07ca162-faa4-48f5-b705-018e41ae88d9 | idem |
| status | AVAILABLE | AVAILABLE |
| md5 | de4bd1a6e59f5dea12fd38ce265b5f43 | idem |
| rev_count cible | 1 | 1 |
| v2 utilisateur | NONE | NONE |
| counts globaux | 56 docs / 94 revs / 8 projects | 56 / 94 / 8 |
| schema | 012_auth_concurrency_safety | inchangé ; delta migration 8ba→93da = NONE |

Note : snapshot historique 17/28/3 ≠ condition d'égalité ; croissance hors cible acceptée ; **cible D4 sans drift**.

---

## 5. Sauvegarde avant bascule

| Champ | Valeur |
|---|---|
| dir | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-205232-pre-93da44be` |
| format | `pg_dump -Fc` via docker exec |
| dump | `sfia_next_recette_ml4.dump` |
| bytes | 214003 |
| sha256 | `26dc12300c40ac6d1d0684e82f86b97c751153f1813ccd81a49eac8c8512901f` |
| pg_restore -l | 249 lignes |
| antérieurs préservés | ml4-20261109-182800-pre-8ba77730 ; ml4-20261109-173817-pre-a2c5e9f8 |
| restore DB | **AUCUNE** |

---

## 6. Build figé (GATE D)

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be` |
| Mode | detached HEAD clean |
| SHA/tree | exact match mandat |
| npm ci | PASS |
| vitest document-act | 77 PASS |
| vitest git-file-provenance | 2 PASS |
| tsc --noEmit | PASS |
| npm run lint | exit 0 (warnings préexistants) |
| `env -u NODE_ENV npm run build` | PASS |
| BUILD_ID nouveau | **`sHkE8sHJBxD3U9AJdHWi7`** |
| migration delta | NONE |

Warnings lint (non bloquants, hors scope) :
- preparations page : SafeMarkdown / reviseIntent unused
- projects page : unused eslint-disable
- real-github-provider : _input unused

---

## 7. Switch LaunchAgent (GATE E)

Mécanisme unique conservé : `com.sfia.studio.next.recette.ml4` (pas de 2e agent).

Avant → Après PID :
- avant : next-server 80657 / npm 80628
- après : next-server **23324** / npm **23306** (PPID 1 = launchd)

Diff plist (expurgé, non secret) :

```diff
--- /Users/morris/Projects/sfia-recette-backups/ml4-20261109-205232-pre-93da44be/com.sfia.studio.next.recette.ml4.plist.pre-93da44be	2026-11-09 20:55:36
+++ /Users/morris/Projects/sfia-recette-backups/ml4-20261109-205232-pre-93da44be/com.sfia.studio.next.recette.ml4.plist.post-93da44be	2026-11-09 20:56:53
@@ -5,17 +5,20 @@
   <key>Label</key><string>com.sfia.studio.next.recette.ml4</string>
   <key>ProgramArguments</key>
   <array>
-    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/start-recette.sh</string>
+    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be/start-recette.sh</string>
   </array>
-  <key>WorkingDirectory</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/projects/sfia-studio-next/web</string>
+  <key>WorkingDirectory</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be/projects/sfia-studio-next/web</string>
   <key>RunAtLoad</key><true/>
   <key>KeepAlive</key><true/>
-  <key>StandardOutPath</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/launchd.out.log</string>
-  <key>StandardErrorPath</key><string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730/launchd.err.log</string>
   <key>EnvironmentVariables</key>
   <dict>
     <key>PATH</key>
     <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
   </dict>
+  <key>StandardOutPath</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be/launchd.out.log</string>
+  <key>StandardErrorPath</key>
+  <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be/launchd.err.log</string>
 </dict>
 </plist>

```

start-recette.sh nouveau (complet) :

```bash
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

Rollback CODE documenté dans backup `ROLLBACK_CODE.md` — **NOT EXERCISED**.

---

## 8. Smoke technique non mutatif (GATE F)

| Check | Résultat |
|---|---|
| GET / | 307 |
| GET /login | 200 |
| GET /portfolio | 200 |
| GET /settings/integrations | 200 |
| GET /api/portfolio | 401 SESSION_INVALID |
| GET /api/integrations/status | 401 SESSION_INVALID |
| HTML fingerprint `sHkE8sHJBxD3U9AJdHWi7` | FOUND |
| ancien fingerprint `ygu4mo…` | absent |
| hot reload | OFF (`next start`) |
| launcher durable | OUI (PPID 1) |
| DB/doc après | inchangés |
| Nora message / revise / v2 | **NOT RUN** |
| GitHub REAL write | **NONE** |
| secrets dans logs/HTML | NONE |

---

## 9. Fake / Real Qualification

| Capacité | Qualif |
|---|---|
| Runtime RECETTE servi 93da44be | **REAL** (process/port/fingerprint) |
| Persistance LaunchAgent | **REAL** |
| Conservation D4 v1 | **REAL** (lecture SQL) |
| Backup archive lisible | **REAL** (sha256 + pg_restore -l) |
| Unit tests artefact | **DET** rejoués sur worktree figé |
| Nora LIVE R06 | **NOT PROVEN / NOT RUN** |
| GitHub REAL mutation | **OFF** |
| USER R06 | **NOT RUN** |

Preuves DET antérieures (cycle correctif) : 77 / 14 / 13 — ici document-act+provenance **rejoués** sur artefact ; PG Chat First DEV **non** rejoué ce cycle (non requis pour smoke RECETTE).

---

## 10. Product Versioning

- Classe : PATCH candidate
- Statut : **NO RELEASE**
- Version technique : `0.0.0-dev`
- Candidate version : NOT AVAILABLE
- STABLE : NOT AVAILABLE
- BUILD_ID ≠ promotion

---

## 11. Fichiers créés (contenu exploitable)

### A. Manifeste RECETTE (non secret)

Path : `projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-93da44be-2026-11-09.md`

```markdown
# ENV-01 — Manifeste RECETTE ML4 — bascule 93da44be (Cycle 11)

lane: RECETTE
repository: mcleland147/sfia-workspace
source_branch: fix/next-ml4-chat-first-d4-provenance-20261109
source_sha: 93da44beb7e7571c9406180027896769579b9815
tree_sha: 8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8
base_main_sha: 6667a43858a5421e391b7441246536daad148bd6
origin_feat_tip: 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b
previous_source_sha: 8ba777300adebe3ba70ddbe3c386a3ad709034f6
previous_build_id: ygu4moVrYUNZPkvprgvB_
current_build_id: sHkE8sHJBxD3U9AJdHWi7
product_version_technical: 0.0.0-dev
candidate_version: NOT AVAILABLE (PATCH candidate / NO RELEASE)
release_tag: N/A
schema_revision: 012_auth_concurrency_safety
served_address: http://127.0.0.1:3200
worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be
hot_reload: OFF (`next start` production)
delivery_status_recette: TECHNICAL SMOKE PASS
user_result: UNKNOWN / USER R06 NOT RUN

## Launcher (persistance)

- mechanism: LaunchAgent `com.sfia.studio.next.recette.ml4`
- plist: ~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
- program: …/sfia-workspace-next-ml4-recette-build-93da44be/start-recette.sh
- KeepAlive: true ; RunAtLoad: true
- process owner: launchd (PPID 1) — indépendant du shell Cursor
- server_pid_observed: 23324 (next-server) ; wrapper 23306
- historical agents g4/ml3/legacy: non utilisés pour ce runtime ; non bootés sur :3200
- previous artefact preserved: …-ml4-recette-build-8ba77730 BUILD ygu4moVrYUNZPkvprgvB_

## Dataset préservé

- db: sfia_next_recette_ml4 @ 127.0.0.1:5434
- target D4: doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2
- v1: drev_c07ca162-faa4-48f5-b705-018e41ae88d9 AVAILABLE md5 de4bd1a6e59f5dea12fd38ce265b5f43
- user v2 on target: NONE
- counts at switch: documents=56 revisions=94 projects=8
  note: growth vs earlier 17/28/3 snapshot = activité hors cible ; cible D4 inchangée avant/après
- schema: 012_auth_concurrency_safety (no migration delta 8ba77730..93da44be)

## Backup / rollback

- backup_dir: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-205232-pre-93da44be
- dump_sha256: 26dc12300c40ac6d1d0684e82f86b97c751153f1813ccd81a49eac8c8512901f
- dump_bytes: 214003
- pg_restore -l lines: 249
- historical backups retained: …/ml4-20261109-182800-pre-8ba77730 ; …/ml4-20261109-173817-pre-a2c5e9f8
- DB restore: FORBIDDEN without Morris GO
- rollback_code: DOCUMENTED / NOT EXERCISED (target 8ba77730 / ygu4moVrYUNZPkvprgvB_)

## Nora / GitHub

- SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
- OPENAI_API_KEY: PRESENT (LIVE behavior NOT PROVEN this cycle)
- STUDIO_GITHUB_PROVIDER: real
- mutations GitHub REAL: OFF / NONE this cycle
- USER R06: NOT RUN
- Nora LIVE: NOT RUN

## Build / smoke

- worktree clean at 93da44be / tree 8b1b8a3e…
- npm ci: PASS
- unit document-act 77 + provenance 2: PASS (rejoués sur artefact figé)
- tsc --noEmit: PASS
- lint: exit 0 (warnings préexistants hors scope)
- env -u NODE_ENV npm run build: PASS → sHkE8sHJBxD3U9AJdHWi7
- migration delta 8ba77730..93da44be: NONE
- HTTP: / → 307 ; /login /portfolio /settings/integrations → 200
- APIs sans session: /api/portfolio 401 SESSION_INVALID ; /api/integrations/status 401
- HTML fingerprint: sHkE8sHJBxD3U9AJdHWi7 FOUND ; ancien ygu4mo… absent
- DEV :3100 idle ; STABLE N/A

## Verdict technique

RECETTE BUILD UPDATED — SOURCE 93da44be VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN

date: 2026-11-09T20:56:53+01:00

```

### B. start-recette.sh — voir §7

### C. Backup artefacts hors dépôt

- `sfia_next_recette_ml4.dump` (binaire — exception confidentialité/taille ; sha256 + listing fournis)
- `BACKUP_MANIFEST.json`, `ROLLBACK_CODE.md`, plist pre/post, `plist.diff`
- copie manifeste

### D. Aucune modification code source produit

---

## 12. Réserves

- Smoke technique ≠ preuve Nora LIVE / R06 utilisateur.
- OPENAI_API_KEY PRESENT mais LIVE NOT RUN.
- Dataset global a grandi hors cible depuis snapshots antérieurs ; cible D4 stable.
- Manifeste local non commité sur branche produit (autorisé ; hors push produit).

---

## 13. Verdict

**RECETTE BUILD UPDATED — SOURCE 93da44be VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN.**

### Gate Morris suivant

Retest utilisateur R06 sur document CampusFlow **existant** (`doc_1e5d8c16-…` v1), une étape à la fois. Registre utilisateur / ML4-REC-08 restent OPEN jusqu'à preuve LIVE concluante. Aucune création de v1 de remplacement.

Ne pas annoncer : R06 PASS / ML4-REC-08 CLOSED / LIVE NORA PROVEN / ML4 ACCEPTED / READY FOR MERGE / STABLE / ADOPTED.
