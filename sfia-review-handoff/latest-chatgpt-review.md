# SFIA Studio Next — Review Pack FULL
# ML4C — Reprise et bascule conservatrice RECETTE existante

**Date/heure :** 2026-11-11 21:56 CET (2026-11-11 20:56 UTC)
**Cycle :** 11 — Déploiement / release (RUN)
**Typologie :** RUN — mise à disposition contrôlée
**Profil :** Critical
**Macro-lot :** R5 / ML4C
**Niveau review pack :** **full** (SFIA v2.6 §7.3)
**PR produit :** https://github.com/mcleland147/sfia-workspace/pull/676 — **inchangée**
**Merge / STABLE / release :** **NON AUTORISÉS**
**Version :** NO RELEASE / `0.0.0-dev`

---

## 0. Review pack content coverage (§7.5)

| Champ | Valeur |
| --- | --- |
| review pack réinitialisé au démarrage | oui |
| review pack complété avant rapport | oui |
| niveau appliqué | **full** |
| absence de stub final | confirmé |
| created files full content | **yes** (manifeste, start script, plist, switch-plan, inventaire, fingerprints, rollback-target) |
| modified sections complete | **not applicable** (aucun fichier produit PR #676 modifié) |
| useful diff included | **not applicable** (pas de diff produit) |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## 1. Local Git Truth Check

| Contrôle | Attendu | Observé |
| --- | --- | --- |
| Remote | `mcleland147/sfia-workspace` | PASS |
| Branche candidat | `build/next-ml4c-functional-convergence` | PASS |
| HEAD | `2416e2ee25662821b015407346c64ec204f67488` | PASS |
| Tree | `88c05766afa04355f5fbb63dcda603686a3f11a6` | PASS |
| `origin/main` / merge-base | `6d237452…` | PASS |
| Dirty produit | pack/artifacts locaux seulement | PASS |
| Push produit | aucun | PASS |
| Handoff tip (avant ce cycle) | `594134c6` / blob `5ab9f626` | observé |

**Verdict Git Truth :** PASS.

---

## 2. Git Review Index (§7.4)

```text
Git Review Index
- base branch : main @ 6d237452680640324eeadbb18f4601fd7de99850
- HEAD avant : 2416e2ee25662821b015407346c64ec204f67488
- HEAD après : 2416e2ee25662821b015407346c64ec204f67488 (produit inchangé)
- fichiers modifiés (produit) : aucun
- fichiers créés (ops locaux, hors PR) :
  - worktree /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee
  - start-recette.sh / LaunchAgent plist / ops/recette-served-manifest.yaml
  - backup ml4c-*-pre-2416e2ee
- commits créés (produit) : aucun
- tests / validations : smoke technique RECETTE ; CI référence 43093786931 (déjà PASS)
- diff stat produit : (vide)
- diff name-status produit : (vide)
- décisions Morris requises : revue bornée ; GO distinct pour LIVE / Git REAL / merge
- review pack : full
- Fake/Real applicable : oui
- niveau de preuve déclaré : technique RECETTE serve ; Nora LIVE NOT RUN ; Git REAL NOT RUN
- realism gaps : parcours S01–S07 utilisateur NOT RUN ; LIVE/REAL non exercés
- réserves : cookie same-host ; S04 incomplete ; S07 partial ; sessions restart
```

---

## 3. Objectif et périmètre

Mettre à disposition le candidat ML4C `2416e2ee` dans l'**environnement RECETTE EXISTANT**
(URL :3200, DB `sfia_next_recette_ml4`, LaunchAgent ML4, config/secrets existants).

**Interdit respecté :** nouvel env / DB / OAuth / GitHub App / secrets ; merge ; STABLE ;
développement produit ; Nora LIVE volontaire ; Git REAL écriture.

---

## 4. Sources consultées (références — pas de copie intégrale)

| Source | Rôle |
| --- | --- |
| ENV-01 `environnements-recette-et-promotions.md` | lanes, manifeste §6, isolation |
| `product-versioning.md` | NO RELEASE / 0.0.0-dev |
| Template SFIA v2.6 §7 / §7.10 | Review Pack FULL + handoff |
| Historique ML4 recette docs | références historiques (non preuve runtime) |
| Worktree / LaunchAgent / config / DB runtime | vérité locale observée |

---

## 5. Phase A — Inventaire (table)

# Phase A — Inventaire RECETTE (read-only)

| Ressource | EXISTANT | CONFORME | ÉCART | RISQUE | ACTION |
| --- | --- | --- | --- | --- | --- |
| URL :3200 | oui (HTTP 200) | oui | — | faible | conserver |
| Process listener | node next-server PID observé | oui | — | faible | bascule LaunchAgent |
| LaunchAgent `com.sfia.studio.next.recette.ml4` | oui, running | oui | — | moyen si mauvais path | réutiliser label |
| Worktree servi (avant) | `...-d7f1507a` | historique | SHA ≠ candidat | moyen | préserver + basculer |
| BUILD_ID (avant) | `8vZjme4-KnnPkAqm_QxMz` | historique | ≠ nouveau | — | documenter |
| Config `~/.config/.../recette/.env.local` | oui mode 600 | oui | SFIA_SOURCE_SHA fichier stale (8ba77730) ; start script override | faible | ne pas réécrire secrets |
| DB :5434/`sfia_next_recette_ml4` | oui | oui | pas de table `schema_migrations` (historique) | faible | ne pas migrer |
| schemaRevision code | `012_auth_concurrency_safety` | oui | — | — | ne pas relancer migrations |
| Données (pilots/projects/docs) | 168/15/116… | conservées | — | critique si wipe | backup + no DROP |
| Document root | présent | oui | 0 fichiers (contenu DB) | faible | préserver |
| GitHub App 5677465 / inst 180092114 | config PRESENT | oui | — | — | ne pas recréer |
| OAuth callbacks :3200 | PRESENT | oui | — | — | ne pas changer |
| OpenAI key | PRESENT | oui | — | — | aucun appel LIVE |
| Flags Git `real`/`documentary` | PRESENT | observé | mutations possibles si mal utilisées | élevé si écriture | aucun Git REAL ce cycle |
| Backups historiques | oui sous `sfia-recette-backups` | oui | — | — | nouveau backup pré-bascule |
| DEV :3100 / DB :5433 | isolés | oui | DEV non listener | — | ne pas toucher |
| STABLE | NOT AVAILABLE | — | — | — | aucun |

---

## 6. Artefacts créés — contenu complet (§7.2.1)

### 6.1 Manifeste non secret (`ops/recette-served-manifest.yaml`)

```yaml
# ENV-01 §6 — manifeste non secret de mise à disposition RECETTE
# Secrets: NEVER included. Statuses only.

lane: RECETTE
version_policy: NO_RELEASE
package_version: 0.0.0-dev
candidate_sha: 2416e2ee25662821b015407346c64ec204f67488
tree: 88c05766afa04355f5fbb63dcda603686a3f11a6
build_identifier: qB8JvXfdL7FMOFYMf31kL
previous_candidate_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
previous_build_identifier: 8vZjme4-KnnPkAqm_QxMz
served_address: 'http://127.0.0.1:3200'
served_worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee
service_label: com.sfia.studio.next.recette.ml4
service_launcher: LaunchAgent macOS (existing label reused)
start_script: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/start-recette.sh
database:
  host: 127.0.0.1
  port: 5434
  name: sfia_next_recette_ml4
  role: sfia_next_recette_ml4
  container: sfia-next-recette-pg
schemaRevision: 012_auth_concurrency_safety
migrations_applied_this_cycle: false
migrations_reason: identical 001→012 vs previous served build; no schema write
dataset_preserved: true
document_root: /Users/morris/.config/sfia-studio-next/recette/documents
document_root_files: 0
configuration_file: ~/.config/sfia-studio-next/recette/.env.local
configuration_statuses:
  STUDIO_LANE: RECETTE
  STUDIO_PORT: 3200
  STUDIO_GITHUB_PROVIDER: real
  STUDIO_GITHUB_ALLOW_MUTATIONS: documentary
  STUDIO_GITHUB_USER_OAUTH: real
  SFIA_COG_PROFILE_TYPE: TEST_BOUNDARY
  OPENAI_API_KEY: PRESENT
  GITHUB_APP_ID: '5677465'
  GITHUB_APP_INSTALLATION_ID: '180092114'
  GITHUB_APP_EXPECTED_OWNER: mcleland147
  GITHUB_APP_ALLOWED_REPO: mcleland147/chantiers360
  GITHUB_APP_CALLBACK_URL: http://127.0.0.1:3200/api/integrations/github/callback
  BETTER_AUTH_URL: http://127.0.0.1:3200
  GITHUB_APP_PRIVATE_KEY_PATH_FILE: PRESENT
identity_callbacks: PRESERVED
github_app: sfia-studio-next-recette / App ID 5677465 / Installation 180092114
functions_available:
  - HTTP login page
  - GitHub OAuth studio identity endpoint CONFIGURED
  - existing RECETTE dataset read path
functions_blocked_this_cycle:
  - Nora LIVE voluntary calls (NOT RUN — separate GO required)
  - Git REAL write mutations (NOT RUN — documentary flag preserved, no write)
  - STABLE promotion
  - merge PR #676
backup_path: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee
rollback_strategy: restore LaunchAgent plist from backup and bootstrap previous start-recette.sh; DB dump conservative only — no DROP/TRUNCATE
ci_reference: '43093786931 SUCCESS on candidate SHA (not a LIVE user-recette proof)'
pr: 'https://github.com/mcleland147/sfia-workspace/pull/676'
smoke:
  http_login: 200
  build_id_served: qB8JvXfdL7FMOFYMf31kL
  cwd_match_new_worktree: true
  db_counts_stable: true
  dev_3100_untouched: true
  single_listener_3200: true
ml4c_scenarios_prepared:
  S01: NOT_RUN
  S02: NOT_RUN
  S03: NOT_RUN
  S04: NOT_RUN
  S05: NOT_RUN
  S06: NOT_RUN
  S07: NOT_RUN
reserves:
  - cookie isolation same-host 3100/3200 (ENV-01 réserve A) carried
  - S04 DOCUMENTED/INCOMPLETE
  - S07 PARTIAL until global proof
  - Nora LIVE / Git REAL require distinct GO
  - 6 sessions unexpired at switch (brief restart; no data wipe)
```

### 6.2 `start-recette.sh` (nouveau build)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/projects/sfia-studio-next/web
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=2416e2ee25662821b015407346c64ec204f67488
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

### 6.3 LaunchAgent plist (label existant réutilisé)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.sfia.studio.next.recette.ml4</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/start-recette.sh</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/projects/sfia-studio-next/web</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/launchd.out.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee/launchd.err.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
    </dict>
</dict>
</plist>
```

### 6.4 `switch-plan.md`

```markdown
# ML4C RECETTE switch plan — executed

- candidate_sha: 2416e2ee25662821b015407346c64ec204f67488
- tree: 88c05766afa04355f5fbb63dcda603686a3f11a6
- build_id: qB8JvXfdL7FMOFYMf31kL
- previous_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
- previous_build_id: 8vZjme4-KnnPkAqm_QxMz
- backup: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee
- migrations: identical 001→012 — NOT RUN
- secrets: reused ~/.config/sfia-studio-next/recette/.env.local (not copied into Git)
- DB: unchanged sfia_next_recette_ml4 @ 127.0.0.1:5434
```

### 6.5 Fingerprint avant

```json
{
  "captured_at": "2026-11-11T20:52:35Z",
  "served_build_id_html": "8vZjme4-KnnPkAqm_QxMz",
  "served_worktree": "/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a",
  "served_sha": "d7f1507a56e50660ea24903c2dc563c249ba9086",
  "db": {"host":"127.0.0.1","port":5434,"database":"sfia_next_recette_ml4","role":"sfia_next_recette_ml4"},
  "schemaRevision_code": "012_auth_concurrency_safety",
  "counts": {"pilots":168,"projects":15,"preparations":169,"documents":116,"document_revisions":186,"messages":370,"sessions_total":6,"sessions_unexpired":6},
  "document_root": "/Users/morris/.config/sfia-studio-next/recette/documents",
  "document_root_file_count": 0
}
```

### 6.6 Fingerprint après

```json
{
  "captured_at": "2026-11-11T20:55:42Z",
  "served_build_id_html": "qB8JvXfdL7FMOFYMf31kL",
  "served_worktree": "/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee",
  "served_sha": "2416e2ee25662821b015407346c64ec204f67488",
  "db": {"host":"127.0.0.1","port":5434,"database":"sfia_next_recette_ml4","role":"sfia_next_recette_ml4"},
  "schemaRevision_code": "012_auth_concurrency_safety",
  "counts": {"pilots":168,"projects":15,"preparations":169,"documents":116,"document_revisions":186,"messages":370,"sessions_total":6,"sessions_unexpired":6},
  "counts_match_before": true
}
```

### 6.7 Rollback target

```text
rollback_lane: RECETTE
previous_label: com.sfia.studio.next.recette.ml4
previous_worktree: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a
previous_start: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a/start-recette.sh
previous_sha: d7f1507a56e50660ea24903c2dc563c249ba9086
previous_build_id: 8vZjme4-KnnPkAqm_QxMz
plist_backup: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee/com.sfia.studio.next.recette.ml4.plist.pre-switch
db_dump: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee/sfia_next_recette_ml4.dump
env_preserve: /Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee/.env.local.preserves-secrets
note: restore by reinstalling previous LaunchAgent plist and bootstrapping; do NOT drop DB; dump is conservative only
```

**Backup path :** `/Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee`
Contient également : plist pré-bascule, start script d7f1507a, `.env.local` préservé (secret — **non reproduit ici**), `sfia_next_recette_ml4.dump` (330643 bytes, mode 600).

---

## 7. Phases B/C/D — décisions et preuves

### B — Préservation
- Backup conservatoire DB via `docker exec sfia-next-recette-pg pg_dump -Fc` (pas de DROP/TRUNCATE/DELETE).
- Env secrets copiés localement en mode 600 ; **non** commités ; **non** publiés.
- Ancien worktree `...-d7f1507a` **conservé**.
- Migrations 001→012 **identiques** old vs candidate → **migrations NOT RUN**.

### C — Nouveau build distinct
- Worktree détaché : `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee` @ exact SHA/tree.
- `npm ci` (lockfile exact) + `npm run build` production.
- BUILD_ID produit : `qB8JvXfdL7FMOFYMf31kL`.
- Runtime RECETTE précédent maintenu jusqu'à bascule.

### D — Bascule
- Label LaunchAgent **inchangé** : `com.sfia.studio.next.recette.ml4`.
- bootout → install plist → bootstrap/kickstart.
- Un seul listener :3200 après bascule.
- CWD process = nouveau worktree.
- HTML login sert `<!--qB8JvXfdL7FMOFYMf31kL-->`.

### Frontières
- `STUDIO_GITHUB_PROVIDER=real` / `ALLOW_MUTATIONS=documentary` **préservés, non modifiés**.
- Aucun appel Nora LIVE ; aucun write Git REAL.
- OpenAI / OAuth / GitHub App : **PRESENT** (statuts seulement).

---

## 8. Smoke technique

| Contrôle | Résultat |
| --- | --- |
| HTTP `http://127.0.0.1:3200/login` | 200 |
| BUILD_ID servi | `qB8JvXfdL7FMOFYMf31kL` |
| Worktree servi | `...-2416e2ee/.../web` |
| DB name/role | `sfia_next_recette_ml4` / `sfia_next_recette_ml4` |
| Counts métier | stables (168/15/169/116/186/370) |
| DEV :3100 | non listener ; DB :5433 intacte |
| `/api/auth/status` | CONFIGURED (LIVE proof still requires callback) |
| `/api/integrations/status` | SESSION_INVALID sans session (attendu smoke anonyme) |
| Nora LIVE | **NOT RUN** |
| Git REAL | **NOT RUN** |
| Scénarios S01–S07 utilisateur | **NOT RUN** (préparés dans manifeste) |

---

## 9. Fake / Real Qualification

| Capacité | Mode | Statut cycle |
| --- | --- | --- |
| Serveur RECETTE | production next start | RUN |
| Nora | LIVE possible (clé PRESENT) | **NOT RUN** (volontairement) |
| Git provider | real + documentary | config préservée ; **aucune écriture** |
| OAuth GitHub | real identity | CONFIGURED ; callback non rejoué |
| PG RECETTE | réel | RUN read/fingerprint + dump |

---

## 10. Risques / réserves / gates

- Isolation cookies same-host DEV/RECETTE (réserve ENV-01 A) — portée.
- 6 sessions non expirées au moment du switch — redémarrage bref ; pas de wipe.
- Parcours utilisateur ML4C S01–S07 **NOT RUN** — ce cycle est mise à disposition technique.
- CI `43093786931` prouve le SHA, **pas** la recette utilisateur LIVE.
- Aucun GO merge/STABLE induit.

---

## 11. Décisions Morris requises

1. Revue bornée de la mise à disposition RECETTE (`2416e2ee` / build `qB8JvXfdL7FMOFYMf31kL`).
2. GO distinct pour toute campagne LIVE Nora / Git REAL / scénarios S01–S07.
3. GO distinct pour merge PR #676 ou promotion.

---

## 12. Verdict

**ML4C EXISTING RECETTE REUSED
CANDIDATE 2416e2ee SERVED
READY FOR BOUNDED MORRIS REVIEW**

- Served : `http://127.0.0.1:3200`
- SHA : `2416e2ee25662821b015407346c64ec204f67488`
- BUILD_ID : `qB8JvXfdL7FMOFYMf31kL`
- Service : `com.sfia.studio.next.recette.ml4`
- DB : `sfia_next_recette_ml4` @ `127.0.0.1:5434` — données préservées
- Backup : `/Users/morris/Projects/sfia-recette-backups/ml4c-20261111-215235-pre-2416e2ee`
- Produit/PR : inchangés
