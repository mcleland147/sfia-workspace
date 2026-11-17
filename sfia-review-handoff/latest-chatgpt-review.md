# SFIA Review Pack — Full
## ML4D Ensemble 05 — Option A RECETTE deploy Nora LIVE schema fix

**Date :** 2026-11-17 (~19:25 CET / cutover ~18:20Z)
**GO Morris :** OPTION A / DEPLOY RECETTE ONLY — Critical
**Cycle :** 11 — Déploiement / release (RECETTE mise à disposition uniquement)
**Macro-lot :** ML4D Ensemble 05 — Travail avec Nora
**Exécutant :** Cursor · **Revue :** ChatGPT · **Autorité :** Morris
**GO REAL :** NON ACCORDÉ (aucun appel OpenAI LIVE)

---

## 1. Verdict unique

### `NORA E05 RECETTE DEPLOYED — REAL SMOKE GO REQUIRED`

Sous-statut Nora : **`LIVE NOT RE-PROVEN`**

Runtime RECETTE sert `208aaa40` / BUILD `_xkrsw46qX4QKUC0bBU8i`. Données préservées. Rollback vers `34a5e102` / `xKkQienCXTPYIqkFElAuE` disponible. Aucun appel OpenAI. E05 non réceptionné.

---

## 2. Git Truth Check

| Contrôle | Résultat |
| --- | --- |
| Workspace DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD / candidat | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Parent | `3f7863ba640b6520ace247dec125e5736508ca75` |
| Tree repo | `d5db1314b264870b93270a69582106b7d8810050` |
| Tree web | `14bbc5e980c136ac1101ecb201db4d41ab948fca` |
| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Dirty DEV | uniquement `.tmp-sfia-review/chatgpt-review.md` (pack) |
| Push produit | AUCUN |
| Prior handoff audit | `sfia/review-handoff@b052d51c` blob `a5ae2cc8…` |

---

## 3. Décision Option A (consommée)

- Conserver Structured Outputs **`strict: false`** émis par Agents SDK.
- Pas de hardening strict D3.
- Conserver correctif suppression `visualComposition: {}`.
- Déployer tip local exact `208aaa40`.
- GO REAL non accordé.

---

## 4. État RECETTE initial (vérifié)

| Objet | Valeur |
| --- | --- |
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA servi | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| BUILD_ID | `xKkQienCXTPYIqkFElAuE` |
| Worktree | `…/ensemble05-recette-build-34a5e102` |
| PID | `68332` (next-server) / PPID `68310` LaunchAgent |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `127.0.0.1:5434` / `sfia_next_recette_ml4` (docker `sfia-next-recette-pg`) |
| Document root | `/Users/morris/.config/sfia-studio-next/recette/documents` |
| Env lane | `STUDIO_LANE=RECETTE` via `$HOME/.config/sfia-studio-next/recette/.env.local` |
| Fixture | unset au start |
| Git mutations | unset / vide |
| STABLE | NOT AVAILABLE |

### Compteurs avant

`documents=117 projects=22 messages=506 preparations=193 conversations=193`

---

## 5. Sauvegarde et rollback

Backup dir : `/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-208aaa40/`

Contient : plist LaunchAgent pré-bascule (pointe encore vers start `34a5e102`), manifeste et start script antérieurs, counts before.

Ancien worktree **intact** :
- HEAD `34a5e102…`
- BUILD `xKkQienCXTPYIqkFElAuE`

Script rollback : `…/ensemble05-recette-build-208aaa40/ROLLBACK-TO-34a5e102.sh` (restore plist ; **aucune** destruction DB).

Migration : **NONE**. Reset/seed : **NONE**.

---

## 6. Build isolé

| Item | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40` |
| Checkout | detached `208aaa40` |
| Install | `npm ci --include=dev` (lockfile candidat) |
| Build | `npm run build` avec env RECETTE sourcé (DSN requis à la collecte de pages) |
| BUILD_ID produit | `_xkrsw46qX4QKUC0bBU8i` |
| Empreinte critique | sha256 `c3585ce95757f86da6f5f20ddd3db321c583d655e9bb3b99aeb1400f39cecaaa` (BUILD_ID + manifests) |
| Note | Next a brièvement pin `typescript` 5.8.2 dans package.json pendant un build échoué ; **restauré** via `git checkout -- package.json package-lock.json` avant bascule. Sources trackées = tip figé. |
| Build local historique | `n6nJl-Rx4-9s9yxwslhIJ` **non** réutilisé |

### Qualité pré-bascule

| Gate | Résultat |
| --- | --- |
| Focused unit (schema/E05/sem/adapter/OBS) | **66 PASS** (DSN DEV/e2e 5433 ; gate refuse 5434) |
| tsc global | non requalifié PASS ; 32 erreurs préexistantes / 0 surfaces correctif (handoff audit) |
| Next build isolé | PASS |
| PG integration | non rejoué ce cycle (484 PASS handoff audit ; gate protège RECETTE) |

---

## 7. Bascule

1. Plist LaunchAgent mis à jour → `start-recette-ensemble05-208aaa40.sh`
2. `launchctl bootout` ancien job
3. Port 3200 libéré
4. `launchctl bootstrap` nouveau job
5. Listen OK ~2s

### Preuve identité servie

| Preuve | Valeur |
| --- | --- |
| PID | `48321` next-server v15.5.29 |
| PPID / LaunchAgent | `48296` / `com.sfia.studio.next.recette.ml4d-ux004` |
| CWD | `…/ensemble05-recette-build-208aaa40/projects/sfia-studio-next/web` |
| HTML comment BUILD | `_xkrsw46qX4QKUC0bBU8i` |
| Worktree HEAD | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Start script `SFIA_SOURCE_SHA` | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Program LaunchAgent | `…/start-recette-ensemble05-208aaa40.sh` |
| Ancien BUILD absent du HTML | `xKkQienCXTPYIqkFElAuE` count=0 |

---

## 8. Smoke non-LIVE (aucun OpenAI)

| Contrôle | Résultat |
| --- | --- |
| `/login` | 200 |
| `POST /api/dev/login` | PASS (Pilot A) |
| `/api/portfolio` | 200 · 2 projets Pilot A |
| Projet smoke + messages | 200 · 4 messages persistés (UNKNOWN historiques visibles) |
| Surface Travail (browser) | PASS · composer présent · **aucun envoi** |
| Surface Documents Nora | PASS · bibliothèque vide sur projet smoke |
| `/settings/integrations` | 200 |
| Isolation projet inconnu | 404 |
| Fixture forcée | ABSENT |
| Mutations Git | unset |

### Compteurs après

`documents=117 projects=22 messages=506 preparations=193 conversations=193`

**Delta : 0 / 0 / 0 / 0 / 0**

---

## 9. Fake / Real Qualification

| Frontière | État |
| --- | --- |
| Correctif `{}` vide | DETERMINISTIC VERIFIED |
| SDK non-strict | DETERMINISTIC OBSERVED / Option A accepted |
| Strict SO complet | GAP CONFIRMED (non traité) |
| RUNTIME RECETTE `208aaa40` | **VERIFIED** |
| OpenAI REAL / Nora LIVE COMPLETE | **NOT PROVEN** / NOT EXECUTED |
| Composition graphique LIVE | NOT PROVEN |
| R01–R08 / E05 closure / STABLE / ADOPTED | HORS PORTÉE |

---

## 10. Versioning

- Classe : PATCH CANDIDATE
- STABLE : NOT AVAILABLE
- Tag / PR / merge / push produit : **AUCUN**
- Journal Git produit : **non modifié** (STOP évité — identité runtime dans manifeste + pack)

---

## 11. Artefacts runtime créés (hors commit produit)

### `start-recette-ensemble05-208aaa40.sh`

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=208aaa40672433e7dd0bd989f96d26e4e24f7798
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
# Do not force Nora fixture — LIVE path for Morris séances (REAL not in this cycle)
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
unset STUDIO_E2E || true
unset NODE_PATH || true
exec npx next start -H 127.0.0.1 -p 3200

```

### `ROLLBACK-TO-34a5e102.sh`

```bash
#!/bin/bash
set -euo pipefail
# Restore previous RECETTE runtime without touching DB data.
UID_NUM=$(id -u)
launchctl bootout gui/$UID_NUM/com.sfia.studio.next.recette.ml4d-ux004 2>/dev/null || true
sleep 1
cp "/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-208aaa40/com.sfia.studio.next.recette.ml4d-ux004.plist.bak" \
  "$HOME/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist"
launchctl bootstrap gui/$UID_NUM "$HOME/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist"
sleep 2
curl -s -o /dev/null -w "HTTP=%{http_code}\n" http://127.0.0.1:3200/login
echo "Expected SOURCE_SHA=34a5e102 BUILD_ID=xKkQienCXTPYIqkFElAuE worktree=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102"

```

### `DEPLOY-MANIFEST-E05-208aaa40.md`

```markdown
# DEPLOY MANIFEST — Ensemble 05 Nora LIVE schema fix RECETTE

Non-secret. Runtime traces only. Does not modify frozen SOURCE_SHA.

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-17T18:20Z cutover · smoke non-LIVE 18:20–18:22Z |
| Gate Morris | **OPTION A / DEPLOY RECETTE ONLY** (NO REAL) |
| Lane | `STUDIO_LANE=RECETTE` |
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Tree (repo tip) | `d5db1314b264870b93270a69582106b7d8810050` |
| Tree `projects/sfia-studio-next/web` | `14bbc5e980c136ac1101ecb201db4d41ab948fca` |
| Branch source | `feat/next-ml4d-project-space-20261116` |
| PID | `48321` (`next-server` v15.5.29) |
| PPID / LaunchAgent pid | `48296` |
| CWD | `…/ensemble05-recette-build-208aaa40/projects/sfia-studio-next/web` |
| BUILD_ID servi | `_xkrsw46qX4QKUC0bBU8i` |
| Runtime worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` → `start-recette-ensemble05-208aaa40.sh` |
| DB | host `127.0.0.1:5434` · name/role `sfia_next_recette_ml4` |
| Schema revision (code) | `013_preparation_projection` (files present; no migrate this cycle) |
| Migration during deploy | NONE |
| `OPENAI_API_KEY` | SET (value not recorded) |
| `STUDIO_FORCE_NORA_FIXTURE` | ABSENT / explicitly unset at start |
| `SFIA_COG_PROFILE_TYPE` | `TEST_BOUNDARY` |
| Ancien SOURCE_SHA | `34a5e102b7e440f0b8bd2586a1689edac196dcb7` |
| Ancien BUILD_ID | `xKkQienCXTPYIqkFElAuE` |
| Ancien worktree (intact) | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102` |
| Backup / rollback | `/Users/morris/Projects/sfia-recette-backups/ml4d-e05-20261117-pre-208aaa40` · script `ROLLBACK-TO-34a5e102.sh` |
| STABLE / version officielle | NOT AVAILABLE |
| Tag | NONE |
| Classe d’évolution | PATCH CANDIDATE, non promue |
| Decision Option A | Keep Agents SDK `strict:false` path; no D3 strict hardening |

## Preflight counts (before)

| Metric | Value |
|---|---|
| documents | 117 |
| projects | 22 |
| messages | 506 |
| preparations | 193 |
| conversations | 193 |

## Rollback

```bash
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/ROLLBACK-TO-34a5e102.sh
```

Restores prior LaunchAgent plist; does not wipe PostgreSQL.


## Smoke non-LIVE summary

| Area | Result |
|---|---|
| HTTP /login | PASS 200 · BUILD `_xkrsw46qX4QKUC0bBU8i` |
| Dev test login | PASS |
| Portfolio | PASS (2 projects for Pilot A) |
| Project open + messages | PASS (4 persisted messages) |
| Documents surface on smoke project | PASS (empty library; global docs 117 preserved) |
| Integrations page | PASS 200 |
| Isolation unknown project | PASS 404 |
| Data counts before→after | docs 117/117 · projects 22/22 · messages 506/506 · prep 193/193 · conv 193/193 |
| Nora LIVE | **NOT EXECUTED** (GO REAL non accordé) |
| Fixture forced | ABSENT |


```

### LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004.plist` (actif)

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
		<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/start-recette-ensemble05-208aaa40.sh</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
	<key>StandardErrorPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/launchd.err.log</string>
	<key>StandardOutPath</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/launchd.out.log</string>
	<key>WorkingDirectory</key>
	<string>/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40/projects/sfia-studio-next/web</string>
</dict>
</plist>

```

---

## 12. État final lanes

| Lane | État |
| --- | --- |
| RECETTE `:3200` | **SERVED** `208aaa40` / `_xkrsw46qX4QKUC0bBU8i` |
| Rollback target | `34a5e102` / `xKkQienCXTPYIqkFElAuE` worktree intact |
| DEV tip | `208aaa40` (inchangé ; pas de push) |
| STABLE | NOT AVAILABLE |

---

## 13. Blast radius / réserves

- Blast radius : runtime RECETTE uniquement ; DB intacte.
- Réserve Option A : non-strict conservé ; hardening strict éventuel réexaminable.
- LIVE UNKNOWN historiques restent visibles jusqu'à smoke REAL autorisé.
- `SFIA_SOURCE_SHA` dans fichier env RECETTE partagé reste une valeur historique stale (`a77a3a2…`) — **overridé** au start script (comme déploiements antérieurs).

---

## 14. Prochain gate Morris

1. Autoriser **smoke LIVE borné** (≤2) sur RECETTE `208aaa40`.
2. Puis reprise UAT R01–R08.
3. Ne pas clôturer E05 / ne pas promouvoir STABLE sans GO distinct.

**Ne pas appeler OpenAI dans ce pack. Ne pas modifier D3. Ne pas rouvrir la grammaire visuelle.**
