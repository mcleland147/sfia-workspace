# SFIA Studio Next — Review Pack FULL — E08 CUTOVER GLOBAL GITHUB CAPABILITY AUDIT

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 08:40 CET (Europe/Paris) |
| Contrat | CRITICAL · MISE À DISPOSITION RECETTE · ENV-01 |
| GO Morris | SOURCE `79188f6c…` · TREE `a550283d…` · BUILD `hLsmHa3uFYP0PgRtj49Bh` |
| Push projet / PR / merge | **NONE** |
| Product versioning | **NO RELEASE** · STABLE NOT AVAILABLE |
| E08 ADOPTED | **NON** |

## 1. Git Truth

| Élément | Valeur |
| --- | --- |
| Branche projet | `feat/next-ensemble08-git-publications-nora` |
| Candidat servi | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble08-gitaudit-build-79188f6c` |
| Docs post-cutover (local) | commit docs-only après cutover — **runtime inchangé** |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Handoff source pre-cutover | `sfia/review-handoff@01ec2e01` |

## 2. GO et périmètre

GO explicite cutover uniquement. Aucun nouveau diagnostic/développement/candidat/build.
Autorisé : backup, restore proof, rollback, swap service, smokes non mutatifs, docs, L3.
Interdit : mutation GitHub, merge PR#19, push projet, STABLE.

## 3. Avant → Après

| | Avant | Après |
| --- | --- | --- |
| SOURCE | `c67a6ba8…` | `79188f6c…` |
| BUILD | `tEiDqhhGWNipSWO_86ZoG` | `hLsmHa3uFYP0PgRtj49Bh` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` | **identique** |
| Port | 3200 | **identique** |
| DB | `sfia_next_recette_ml4:5434` | **identique** |
| GitHub | real + documentary + chantiers360 | **identique** |
| PID | 30393 | 61202 (node 61228) |

HTTP après : `<!--hLsmHa3uFYP0PgRtj49Bh-->` · login 200.

## 4. Backup / restore / rollback

| Élément | Résultat |
| --- | --- |
| Backup | `ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` (717K) |
| SHA256 | `7aceda094b5ba195e531a3c5c3c17f6581bec24e8eb94bfaa3df3a8c9f0d98e1` |
| Restore proof | temp DB → metrics match → DROP only temp |
| Plist bak | `…plist.20261122T073809Z.pre-gitaudit-cutover-c67a6ba8.bak` |
| Rollback | script `ROLLBACK-TO-E08-c67a6ba8.sh` + ancien worktree — **non exercé** |

## 5. Métriques DB (avant = après)

projects=26 · documents=117 · document_revisions=188 · messages=657 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4

Oracle : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.

## 6. Configuration GitHub (sans secrets)

- `STUDIO_GITHUB_PROVIDER=real`
- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`
- `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360`
- fixtures / simulated provider : OFF
- Boot log confirme flags

## 7. Smokes

| Check | Résultat |
| --- | --- |
| Identité SHA/TREE/BUILD HTTP | PASS |
| Service unique :3200 | PASS (1 listener) |
| Données stables | PASS |
| /login /portfolio /settings/integrations | 200 |
| Outils dans `.next` | `read_git_pull_request` · `list_git_pull_requests` · `list_git_pull_request_files` · `list_project_git_sources` |
| REAL READ PR#19 (gh) | OPEN · merged=false · head `16f9961e…` · 1 fichier |
| Mutation GitHub | **NONE** |
| Nora LIVE E2E | **NOT PROVEN** (smoke ≠ LIVE) |

## 8. Diffs documentation (post-cutover)

### Stat
```
 .tmp-sfia-review/chatgpt-review.md                 | 1404 ++++++++++++++++++--
 .../construction/delivery-history.md               |   19 +-
 .../ensemble-08-git-et-publications/as-built.md    |    8 +
 .../manifeste-cutover-recette-e07-plus-e08.md      |   69 +-
 4 files changed, 1361 insertions(+), 139 deletions(-)

```

### Diff
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index acaead3f..f263d7bb 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,23 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-AUDIT-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 08:38 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — cutover RECETTE audit capacités GitHub |
+| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
+| TREE | `a550283d37ff461323ea02757350de24b772133e` |
+| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
+| Avant | `@c67a6ba8` / `tEiDqhhGWNipSWO_86ZoG` |
+| Après | HTTP `<!--hLsmHa3uFYP0PgRtj49Bh-->` · ml4d-ux004 |
+| Backup | `ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` + restore PASS |
+| DB | préservée · métriques stables · PR#19 intact |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CAPABILITY-AUDIT
 
 | Field | Value |
@@ -14,7 +31,7 @@ Append-only logical journal of Cursor product deliveries.
 | Fix | `list_git_pull_requests` · `list_git_pull_request_files` · permissions · `withReadToken` |
 | Preuves | unit policy/tools/scripted · gh REAL READ PR#19 · matrice A–G |
 | REAL WRITE / merge | **NOT** (gates ouverts) |
-| Cutover | **NOT EXECUTED** — CANDIDATE FROZEN · RECETTE GO REQUIRED |
+| Cutover | **EXECUTED** — voir DELIV-…-GIT-AUDIT-CUTOVER |
 | Push projet | **NONE** |
 
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UAT-PR-READ
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 9b01ef48..8a7f6213 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -98,6 +98,14 @@
 - **Oracle RR** : PR #19 toujours OPEN / non merged / HEAD `16f9961e…` / 1 fichier (gh api) — corrélation D8 RECETTE inchangée ; aucune nouvelle mutation Cursor.
 - **Cutover** : freeze candidat ce lot ; GO Morris sur nouveau triplet requis avant :3200.
 
+### Cutover RECETTE — audit capacités Git (2026-11-22 ≈ 08:38 CET)
+- **GO Morris** honoré : SOURCE `79188f6c…` · TREE `a550283d…` · BUILD `hLsmHa3uFYP0PgRtj49Bh`.
+- **AVANT** : `c67a6ba8…` / `tEiDqhhGWNipSWO_86ZoG` · service `ml4d-ux004`.
+- **APRÈS** : même service/port/DB · worktree `…/gitaudit-build-79188f6c` · HTTP `<!--hLsmHa3uFYP0PgRtj49Bh-->`.
+- Backup + restore proof PASS · métriques DB stables · PR#19 D8 intact · REAL+documentary conservés · **zéro** mutation GitHub.
+- Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
+- **UAT Morris** : GIT-UAT-01..07 · GIT-UAT-08 hors mandat · Nora LIVE E2E **NOT PROVEN** par smoke.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index 3f11c42c..cc2be00f 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -1,4 +1,71 @@
-# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)
+# Manifeste ENV-01 — Cutover RECETTE (journal)
+
+## Cutover courant — GLOBAL GITHUB CAPABILITY AUDIT (2026-11-22)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure cutover | 2026-11-22 ≈ 08:38 CET (UTC 07:38) |
+| Classe | **NO RELEASE** |
+| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
+| Cutover | **EXECUTED** — GO Morris triplet exact honoré |
+| STABLE | NOT AVAILABLE / non modifié |
+| E08 ADOPTED | **NON** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
+### GO Morris (borné)
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
+| TREE | `a550283d37ff461323ea02757350de24b772133e` |
+| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
+| Push/PR/merge projet | **NONE** |
+| Mutation GitHub / merge PR#19 | **NONE** |
+
+### Runtime AVANT
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `c67a6ba8bde5c4d818a23fe96d2822a22c050121` |
+| BUILD_ID | `tEiDqhhGWNipSWO_86ZoG` |
+| Script | `…/ensemble08-chain-build-c67a6ba8/start-recette-ensemble08-chain-c67a6ba8.sh` |
+| PID launchd | 30393 |
+
+### Runtime APRÈS — observé
+
+| Champ | Valeur |
+| --- | --- |
+| URL | http://127.0.0.1:3200 |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| Script | `…/ensemble08-gitaudit-build-79188f6c/start-recette-ensemble08-gitaudit-79188f6c.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-gitaudit-build-79188f6c` |
+| PID launchd / node | 61202 / 61228 |
+| HTTP BUILD | `<!--hLsmHa3uFYP0PgRtj49Bh-->` |
+| Boot | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWLIST=mcleland147/chantiers360` |
+
+### Backup / restore proof / rollback
+
+| Élément | Valeur |
+| --- | --- |
+| Backup | `…/gitaudit-build-79188f6c/.sfia-recette/backups/ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` |
+| SHA256 | `7aceda094b5ba195e531a3c5c3c17f6581bec24e8eb94bfaa3df3a8c9f0d98e1` |
+| Restore proof | DB temp `sfia_next_recette_restore_proof_gitaudit` → metrics match → DROP |
+| Plist bak | `com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T073809Z.pre-gitaudit-cutover-c67a6ba8.bak` |
+| Rollback script | `…/gitaudit-build-79188f6c/ROLLBACK-TO-E08-c67a6ba8.sh` (non exercé) |
+| Ancien build | worktree `chain-build-c67a6ba8` / BUILD `tEiDqhhGWNipSWO_86ZoG` disponible |
+
+### Métriques DB (avant = après)
+
+projects=26 · documents=117 · document_revisions=188 · messages=657 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4  
+Oracle D8 : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.
+
+### Smokes
+
+login/portfolio/integrations HTTP 200 · outils Nora présents dans `.next` · REAL READ gh PR#19 OPEN · aucune mutation.
+
+---
+
+# Historique — Cutover RECETTE E07 → E08 (exécuté 2026-11-21)
 
 | Champ | Valeur |
 | --- | --- |

```

## 9. Limitations / UAT

- GIT-UAT-01..07 à rejouer par Morris sur ce runtime
- GIT-UAT-08 merge : HORS MANDAT
- Pas E08 ADOPTED / MERGED / STABLE

## 10. Verdict

**RECETTE AVAILABLE — MORRIS UAT REQUIRED**

Runtime servi : SOURCE `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` · TREE `a550283d37ff461323ea02757350de24b772133e` · BUILD `hLsmHa3uFYP0PgRtj49Bh` · http://127.0.0.1:3200
