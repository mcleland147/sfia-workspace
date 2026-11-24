# SFIA Studio Next — ML5 Review Pack FULL

## Consolidation C1–C24 + mise à disposition RECETTE (Cycle 11 — RUN)

**Cycle:** Cycle 11 — Déploiement / release · NO RELEASE · Critical  
**Branche produit:** `sfia/next-ml5-integrated-delivery-20261123`  
**HEAD pré-consolidation:** `6cf33e9923796974b9ee540a9c6ff27110342950`  
**Candidat servi RECETTE:** `8410906d3236b3c0db31b12caa9b104c58079f05`  
**Tree servi:** `a6130f3240290f1e2fbef05d4b2e55d946ca2715`  
**Feat consolidation:** `d4b89c906411e554f467a9eebe8f8c8e891c8e08`  
**HEAD DEV post-docs (non servi):** `807713cb89163b711db33f1f0e28bd9b99dbbc4d`  
**merge-base / origin/main:** `997897fd7cf914771e7d08e8030dc7123fab7d25`  
**Build RECETTE:** `e0XwSWvjujz-xaHfXsrQK`  
**contentDigest:** `a219cff93b7dfecff44abe85211e0db53a4608ea4f28ea6f44b260376df8c111`  
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE  
**Handoff antérieur:** `0ea7e6cff6e2e0d9f705c7c4f4908a1f1dc40c4d`  
**Horodatage:** 2026-11-24T17:45:25.742738+00:00

---

## 0. Git Truth

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
```

Commits locaux depuis 6cf33e99 :

```
807713cb docs(next): record ML5 RECETTE cutover build identity
8410906d docs(next): point RECETTE candidate identity to consolidated HEAD
010d59dd docs(next): record ML5 consolidated candidate SHA for RECETTE
d4b89c90 feat(next): consolidate ML5 governed technical realization
```

**Push produit :** NONE  
**Branche ML5 distante :** absente (attendu)

---

## 1. Sources lues

- SFIA v2.6 routing + template (ENV-01, §6.9, handoff, §9.1) depuis `main@997897fd`
- ENV-01 blob `14b61f0d…` · Product Versioning blob `8bc93e0f…`
- SEF, roadmap, naming, ADR R4 (+DATA-01), ADR R5 trajectoire
- delivery-history, PV ensemble-07, journal ML4C
- Branches conformité/conception (références, non mergées)
- Handoff `0ea7e6cf` · scripts `sfia-recette-ops-ml1-c3` · LaunchAgent `ml4d-ux004`
- Code local C1–C24 consolidé

---

## 2. Comparaison DEV / ancienne RECETTE

| Dimension | DEV (qualify :3100) | Ancienne RECETTE | Nouvelle RECETTE ML5 |
| --- | --- | --- | --- |
| Source | dirty→`8410906d` worktree | `10128bdb` | **`8410906d` figé** |
| Build | `aXcIQCDMIigpelfT-Jvr5` (pré-cutover) | `2uHrYBsQUvf6aii40hMpj` | **`e0XwSWvjujz-xaHfXsrQK`** |
| Port | 3100 | 3200 | 3200 |
| DB | DEV distincte | `sfia_next_recette_ml4` @5434 | **même DB préservée** + migrations 017–021 |
| Auth | auto-session DEV | GitHub OAuth | GitHub OAuth · auto-session **403** |
| Nora profile | `OPERATIONAL_PROVISIONAL` | `TEST_BOUNDARY` | `TEST_BOUNDARY` (policy: OPERATIONAL interdit hors DEV) |
| Cursor | LIVE possible DEV | absent ML1–ML4 | SDK présent · **FAKE default** · pas de dispatch LIVE |
| Surfaces ML5 | présentes | absentes | **présentes** |

### Diagnostic trajectoire (Pilotage 360 DEV)

Projet : `proj_f89ee486-dd24-4def-a744-019e9e32828f` (*Pilotage 360*).

Conclusion : **CONFIGURATION GAP IDENTIFIED** (profil cognitif DEV≠RECETTE, policy-enforced) **+ HISTORICAL GAP CONFIRMED** (E07 ouverture cycle déjà réservée) — **ROOT CAUSE NOT FULLY ESTABLISHED** pour UAT-07/10. Pas de refonte cognitive dans ce cycle.

---

## 3. UAT capitalisées (ouvertes)

Voir registre §9 : UAT-01…UAT-10 OUVERTES ; UAT-03 accepté DEV / à confiner RECETTE. Acquis sas/travail conservés. Non déclarées résolues.

---

## 4. Inventaire commit consolidé

### `d4b89c90` — feat(next): consolidate ML5 governed technical realization

```
d4b89c90 feat(next): consolidate ML5 governed technical realization
 .../conducteur-cognitif-et-production-nora.md      |  228 +++
 ...ceptation-cognition-et-realisation-gouvernee.md |  171 ++
 .../construction/delivery-history.md               |  434 +++++
 .../ml5-as-built-cursor-realization.md             |  170 +-
 .../ml5-candidat-git-inventaire-c13.md             |   79 +
 .../construction/ml5-figma-page12-l0-inventory.md  |  106 +-
 ...5-registre-couverture-et-revue-developpement.md |  287 +++-
 projects/sfia-studio-next/web/.gitignore           |    3 +
 projects/sfia-studio-next/web/next.config.ts       |    6 +
 projects/sfia-studio-next/web/package.json         |    6 +
 .../web/playwright.page12-visual.config.ts         |   23 +
 .../web/playwright.qualify.config.ts               |   27 +
 .../web/scripts/c17-functional-campaign.mjs        |  274 ++++
 .../web/scripts/c18-functional-campaign.mjs        |  355 ++++
 .../sfia-studio-next/web/scripts/c21-campaign.mjs  |   89 +
 .../web/scripts/c22-query-live.mts                 |   49 +
 .../sfia-studio-next/web/scripts/c24-m2-retry.mts  |   83 +
 .../web/scripts/c24-mission-smoke.mts              |  150 ++
 .../web/scripts/c24-operational-missions.mts       |  410 +++++
 .../web/scripts/c24-probe-director-db.mts          |   79 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    5 +-
 .../web/scripts/ml5-c10-e2e-journey.mts            |  446 +++++
 .../web/scripts/ml5-c10-seed-scenario.mts          |  200 +++
 .../web/scripts/ml5-c11-live-journey.mts           |  617 +++++++
 .../web/scripts/ml5-c11-seed-project.mts           |  153 ++
 .../web/scripts/ml5-c12-ack-drop-incident.mts      |  171 ++
 .../web/scripts/ml5-c12-seed-and-live.mts          |  391 +++++
 .../web/scripts/ml5-c13-long-run-supervisor.mts    |  260 +++
 .../web/scripts/ml5-c13-probe-mode.mts             |   42 +
 .../web/scripts/ml5-c13-stop-live.mts              |  320 ++++
 .../web/scripts/ml5-c14-cognitive-live.mts         |  234 +++
 .../web/scripts/ml5-c14-s2-s5-live.mts             |  139 ++
 .../web/scripts/ml5-c14-web-frontier-debug.mts     |   66 +
 .../web/scripts/ml5-c14-web-live-probe.mts         |   68 +
 .../web/scripts/ml5-c14-web-raw-debug.mts          |   46 +
 .../web/scripts/ml5-c9-e2e-journey.mts             |  538 +++++++
 .../web/scripts/ml5-c9-seed-scenario.mts           |  200 +++
 .../sfia-studio-next/web/scripts/qualify-check.mts |  211 +++
 .../sfia-studio-next/web/scripts/qualify-dev.sh    |  319 ++++
 .../web/src/app/api/dev/auto-session/route.ts      |  166 ++
 .../preparations/[preparationId]/messages/route.ts |    4 +
 .../turns/by-key/[clientTurnKey]/route.ts          |    1 +
 .../attempts/[attemptId]/authorize/route.ts        |   55 +-
 .../attempts/[attemptId]/captures/route.ts         |   80 +
 .../attempts/[attemptId]/handoff/route.ts          |   31 +-
 .../attempts/[attemptId]/qualification/route.ts    |  465 +++++-
 .../contracts/[contractId]/ready/route.ts          |   22 +-
 .../[projectId]/realization/contracts/route.ts     |   31 +-
 .../src/app/dev/ml5-page12-visual/[state]/page.tsx |  200 +++
 .../sfia-studio-next/web/src/app/login/page.tsx    |   11 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  529 +++++-
 .../web/src/components/figma/ContractViewer.tsx    |  242 +--
 .../components/figma/CursorRealizationSurface.tsx  | 1085 ++++++++++---
 .../web/src/components/figma/D6ConfirmLaunch.tsx   |   80 +
 .../web/src/components/figma/NoraConversation.tsx  |   87 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   29 +-
 .../web/src/components/figma/RealizationBilan.tsx  |  485 +++++-
 .../components/figma/ml5-page12-visual-fixtures.ts |  426 +++++
 .../web/src/components/figma/tokens.css            |  914 +++++++++++
 .../web/src/components/shell/StudioShell.tsx       |   43 +-
 .../web/src/components/shell/studio-rail.ts        |   14 +-
 .../migrations/019_ml5_qualification_history.sql   |    5 +
 .../web/src/db/migrations/020_c
```

167 fichiers · +30786 / −867. Migrations 019–021 incluses. Secrets / `.env` / evidence / `.tmp-sfia-review` **exclus**.

Docs commits locaux ultérieurs (identité cutover) : `010d59dd`, `8410906d` (servi), `807713cb` (DEV only post-cutover notes).

---

## 5. Validations

| Contrôle | Résultat |
| --- | --- |
| Vitest unit | **1043/1043 PASS** |
| Next build candidat | PASS · BUILD `e0XwSWvjujz-xaHfXsrQK` |
| Migrations 017–021 RECETTE | PASS (IF NOT EXISTS) |
| Secret scan staged | PASS (fixtures test only) |
| git diff --cached --check | whitespace mineur docs (non bloquant) |
| Auto-session RECETTE | **403** |
| Auth status | GitHub configured · testLogin false · autoSession false |
| Nora LIVE smoke | **PASS** `openai-agents-sdk-live` COMPLETE |
| Projects préservés | count=26 |
| HTTP /login | 200 |

---

## 6. Sauvegarde & retour arrière

- Dump : `/Users/morris/Projects/sfia-recette-backups/ml5-20261124T174034Z-pre-8410906d3236`  
- SHA256 : `fe1b19d8dc36705e9fc658ccc85ee6ed20e7f88d6ac7d2e9ec5e02b3b2779e14`  
- Manifeste antérieur + plist bak conservés  
- Worktree antérieur **non détruit** : `…/ensemble08-merge-build-10128bdb`  
- Rollback : restaurer plist bak → start-recette ensemble08 ; dump si besoin schéma (rollback code ≠ data auto)

---

## 7. Manifeste RECETTE

```json
{
  "lane": "RECETTE",
  "source_repository": "mcleland147/sfia-workspace",
  "source_branch": "sfia/next-ml5-integrated-delivery-20261123",
  "base_main_sha": "997897fd7cf914771e7d08e8030dc7123fab7d25",
  "candidate_sha": "8410906d3236b3c0db31b12caa9b104c58079f05",
  "candidate_tree": "a6130f3240290f1e2fbef05d4b2e55d946ca2715",
  "consolidation_feat_sha": "d4b89c906411e554f467a9eebe8f8c8e891c8e08",
  "build_identifier": "e0XwSWvjujz-xaHfXsrQK",
  "contentDigest": "a219cff93b7dfecff44abe85211e0db53a4608ea4f28ea6f44b260376df8c111",
  "product_version": "NOT AVAILABLE",
  "candidate_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "served_address": "http://127.0.0.1:3200",
  "listen_bind": "127.0.0.1:3200",
  "schema_revision": "001\u2192021 (ML5 additive 017\u2013021 applied 2026-11-24)",
  "test_data_revision": "preserved-recette-ml4-db-pre-cutover",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-8410906d3236",
  "postgresql": {
    "container": "sfia-next-recette-pg",
    "port": 5434,
    "database": "sfia_next_recette_ml4"
  },
  "previous_recette": {
    "SOURCE": "10128bdb6bb1020a0fd8d4976b91879bff26c3b3",
    "TREE": "be778f1bf461f15acf94bfed6879d43fa6256a0d",
    "BUILD_ID": "2uHrYBsQUvf6aii40hMpj",
    "worktree": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb"
  },
  "backup": {
    "path": "/Users/morris/Projects/sfia-recette-backups/ml5-20261124T174034Z-pre-8410906d3236",
    "dump_sha256": "fe1b19d8dc36705e9fc658ccc85ee6ed20e7f88d6ac7d2e9ec5e02b3b2779e14"
  },
  "capabilities": {
    "github_oauth": "CONFIGURED \u2014 LIVE callback requires Morris browser authorize",
    "studio_dev_test_login": "DISABLED",
    "studio_dev_auto_session": "DISABLED (403 proven)",
    "openai_nora": "LIVE smoke PASS openai-agents-sdk-live COMPLETE",
    "git": "documentary mutations allowlist preserved",
    "web": "public safe capabilities as qualified \u2014 confinement limits visible",
    "cursor_sdk": "AVAILABLE FAKE default \u2014 LIVE dispatch NOT authorized this cycle",
    "d8_os_isolation": "NOT DEMONSTRATED \u2014 independent verify remains limited",
    "cognitive_profile": "TEST_BOUNDARY (policy: OPERATIONAL_PROVISIONAL interdit hors DEV)"
  },
  "quality_evidence": [
    "git consolidate d4b89c90 + docs 8410906d",
    "vitest unit 1043/1043",
    "next build BUILD_ID e0XwSWvjujz-xaHfXsrQK",
    "migrations 017\u2013021 applied",
    "HTTP /login 200; /api/portfolio 401; auto-session 403",
    "Nora LIVE smoke COMPLETE",
    "projects count preserved=26"
  ],
  "reserves": [
    "UAT-01\u2026UAT-10 open (DEV observations)",
    "F2 page 12 PARTIAL",
    "R2 LIVE complete not proven",
    "D8 OS isolation pending",
    "Cookie isolation same-host residual (ENV-01 A)",
    "Trajectory opening: BEHAVIOR DIFFERENCE \u2014 ROOT CAUSE NOT ESTABLISHED (E07 historical + possible CONFIGURATION GAP)",
    "CONFIGURATION GAP IDENTIFIED: DEV=OPERATIONAL_PROVISIONAL vs RECETTE=TEST_BOUNDARY (policy-enforced; not a silent misconfig)"
  ],
  "rollback": {
    "plist_bak": "/Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.20261124T174212Z.pre-ml5-cutover-8410906d3236b3c0db31b12caa9b104c58079f05.bak",
    "previous_start": "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-merge-build-10128bdb/start-recette-ensemble08-merge-10128bdb.sh",
    "note": "rollback code \u2260 automatic data rollback; restore dump if schema reverse required"
  },
  "decision": "RECETTE AVAILABLE \u2014 MORRIS UAT REQUIRED",
  "stable": "NOT AVAILABLE",
  "built_at_utc": "2026-11-24T17:43:32Z",
  "trajectory_diagnosis": "CONFIGURATION GAP IDENTIFIED + HISTORICAL GAP CONFIRMED (E07) \u2014 ROOT CAUSE NOT FULLY ESTABLISHED for UAT-07/10"
}
```

Chemin : `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-8410906d3236/.sfia-recette/manifeste-recette-ml5-8410906d.json`

---

## 8. Accès Morris

1. Navigateur **profil séparé** (cookies 3100/3200).  
2. Ouvrir http://127.0.0.1:3200/login  
3. Authentification GitHub OAuth normale (pas de session auto).  
4. Vérifier build HTML `<!--e0XwSWvjujz_…-->` / identité manifeste.  
5. Poursuivre UAT ; anomalies → correctif DEV ultérieur.  
6. **Aucun dispatch Cursor LIVE** sans mandat explicite.

Screenshot login : `…/web/.sfia-evidence/recette-ml5-cutover/login.png` (worktree RECETTE).

---

## 9. Capacités

| Capacité | État |
| --- | --- |
| Nora OpenAI Agents SDK | LIVE smoke PASS |
| GitHub OAuth | CONFIGURED — callback Morris requis |
| Git documentary | allowlist préservée |
| WEB | limites de confinement |
| Cursor SDK | disponible FAKE · LIVE non autorisé ici |
| D8 isolation OS | NON DÉMONTRÉE |
| UX page 12 | livrée · F2 PARTIAL |
| R2 LIVE complet | non démontré |

---

## 10. Gate §9.1 Critical

| A Comparaison | Documentée |
| B Trajectoire | CONFIGURATION GAP + HISTORICAL GAP — cause non pleinement établie |
| C SHA/tree | `8410906d3236b3c0db31b12caa9b104c58079f05` / `a6130f3240290f1e2fbef05d4b2e55d946ca2715` |
| D Build servi | `e0XwSWvjujz-xaHfXsrQK` sur :3200 |
| E Données/migrations | préservées + 017–021 |
| F Capacités | ci-dessus |
| G Réserves | UAT ouvertes · F2 · R2 · D8 · cookies |
| H Accès | :3200 OAuth |
| I Rollback | dump + plist + worktree antérieur |

### Verdict mise à disposition

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

### Statut

**READY FOR REVIEW**

ML5 reste ouvert. Aucun CLOSED / ADOPTED / STABLE / GO RECETTE fonctionnelle anticipée. Aucun push produit.

---

## 11. Anti-stub

- Pack mono-cycle réécrit (pas de concaténation).  
- Manifeste JSON intégral inclus.  
- SHA/build/dump réellement observés.  
- Handoff distant à vérifier après publication `docs(review-handoff): publish Next ML5 RECETTE candidate readiness`.
