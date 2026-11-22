# SFIA Studio Next — Review Pack FULL — E08 CUTOVER CORRECTIVE BUILD

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 10:06 CET (Europe/Paris) |
| Contrat | CRITICAL · MISE À DISPOSITION RECETTE · ENV-01 |
| GO Morris | SOURCE `7115e932…` · TREE `bdfd5648…` · BUILD `OwQrOGhC9rwk_Dtj31OcM` |
| Push projet / PR / merge | **NONE** |
| Product versioning | **NO RELEASE** · STABLE NOT AVAILABLE |
| E08 ADOPTED | **NON** |
| Rebuild candidat | **NONE** — artefact figé réutilisé |

## 1. Git Truth

| Élément | Valeur |
| --- | --- |
| Branche projet | `feat/next-ensemble08-git-publications-nora` |
| Runtime servi (SOURCE) | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE runtime | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
| Worktree runtime | `…/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
| Docs post-cutover (local) | `5d4b5c49…` — **runtime inchangé** |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Handoff source pre-cutover | `sfia/review-handoff@04000a53` |
| Référence procédure | handoff cutover `7a22aabd` + manifeste E08 |

## 2. GO et périmètre

GO explicite cutover uniquement sur triplet exact. Aucun nouveau développement / rebuild.
Autorisé : backup, restore proof, rollback, swap service, smokes non mutatifs, docs, L3.
Interdit : mutation GitHub, merge PR#19, push projet, STABLE, GIT-UAT-08.

## 3. Avant → Après

| | Avant | Après |
| --- | --- | --- |
| SOURCE | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD | `hLsmHa3uFYP0PgRtj49Bh` | `OwQrOGhC9rwk_Dtj31OcM` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` | **identique** |
| Port | 3200 | **identique** |
| DB | `sfia_next_recette_ml4:5434` | **identique** |
| GitHub | real + documentary + chantiers360 | **identique** |
| PID launchd / node | 61202 / 61228 | 4957 / 4982 |

HTTP après : `<!--OwQrOGhC9rwk_Dtj31OcM-->` · login/portfolio/integrations 200.

## 4. Backup / restore / rollback

| Élément | Résultat |
| --- | --- |
| Backup | `ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` (733K) |
| SHA256 | `a765928e95fd8cce52f0a655eee9ea6de96504f224cf2360556c9f276abffa0d` |
| Restore proof | temp DB `sfia_next_recette_restore_proof_corrective` → metrics match → DROP only temp |
| Plist bak | `…plist.20261122T090524Z.pre-corrective-cutover-79188f6c.bak` |
| Rollback | script `ROLLBACK-TO-E08-79188f6c.sh` + ancien worktree gitaudit — **prêt, non exercé** |

## 5. Métriques DB (avant = après)

projects=26 · documents=117 · document_revisions=188 · messages=673 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4

Oracle : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.

## 6. Configuration GitHub (sans secrets)

- `STUDIO_GITHUB_PROVIDER=real`
- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`
- `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360`
- Boot log confirme flags (`2026-11-22T09:05:57Z`)
- fixtures / simulated provider : OFF

## 7. Smokes

| Check | Résultat |
| --- | --- |
| Identité SHA/TREE/BUILD HTTP | PASS `<!--OwQrOGhC9rwk_Dtj31OcM-->` |
| Service unique :3200 | PASS (1 listener) |
| Données stables | PASS |
| /login /portfolio /settings/integrations | 200 |
| Outils dans `.next` | `read_git_commit` · `compare_git_refs` · `read_git_commit_status` · `read_git_pull_request` · `list_git_pull_requests` |
| REAL READ PR#19 (gh) | OPEN · merged=false · head `16f9961e…` |
| Mutation GitHub | **NONE** |
| Nora LIVE E2E | **NOT PROVEN** (smoke ≠ LIVE) |

## 8. Diffs documentation (post-cutover)

### Stat
```
commit 5d4b5c49aa5fd86f226600e0edc3ee7a2021325a
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 10:07:18 2026 +0100

    docs(next): record E08 corrective RECETTE cutover

    Document ENV-01 swap to frozen SOURCE 7115e932 / BUILD OwQrOGhC9rwk_Dtj31OcM without project push or rebuild.

 .../construction/delivery-history.md               | 24 ++++++-
 .../ensemble-08-git-et-publications/as-built.md    | 12 +++-
 .../manifeste-cutover-recette-e07-plus-e08.md      | 77 ++++++++++++++++++++--
 3 files changed, 104 insertions(+), 9 deletions(-)
```

### Diff
```diff
commit 5d4b5c49aa5fd86f226600e0edc3ee7a2021325a
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 10:07:18 2026 +0100

    docs(next): record E08 corrective RECETTE cutover

    Document ENV-01 swap to frozen SOURCE 7115e932 / BUILD OwQrOGhC9rwk_Dtj31OcM without project push or rebuild.

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 936694d9..a042b97f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CORRECTIVE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 10:06 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — cutover RECETTE build correctif Git READ |
+| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
+| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
+| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
+| Avant | `@79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
+| Après | HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->` · ml4d-ux004 |
+| Backup | `ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` + restore PASS |
+| DB | préservée · métriques stables · PR#19 intact |
+| Rebuild | **NONE** |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING-CORRECTIVE

 | Field | Value |
@@ -13,9 +31,9 @@ Append-only logical journal of Cursor product deliveries.
 | Écart A | Budget partagé : un objet `createSharedToolBudget` (D4+history calls · Git calls · chars) |
 | Écart B | `compareCommitsRemote` : SHA head vérifié si `commits[]` vide |
 | Écart C | `fetchCommitStatusRemote` : dual 403 → ACCESS_DENIED pour `withReadToken` |
-| Preuves | unit **833/833** · corrective **16/16** · PG accept01 **11/11** · tsc PASS |
-| RECETTE | **INCHANGÉE** `79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
-| Cutover | **NONE** — candidat local à figer ; GO cutover Morris distinct |
+| Preuves | unit **840/840** · corrective **16/16** · PG accept01 **11/11** · tsc PASS |
+| RECETTE | cutover **EXECUTED** — voir DELIV-…-CORRECTIVE-CUTOVER |
+| Cutover | **EXECUTED** |
 | Push projet | **NONE** |
 | STABLE | NOT AVAILABLE |

diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index c4ee6823..3e93cbab 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -117,8 +117,16 @@
 - **Écart A (budget)** : le lot précédent passait trois objets budget clonés → D4/history/Git ne partageaient plus mutations. **Fix** : `createSharedToolBudget()` + **une** référence mutable dans `runLiveWithTools` (D4+history = `remainingCalls` ; Git = `remainingGitCalls` ; chars = `remainingChars` partagés).
 - **Écart B (compare)** : `commits[]` vide (`identical` / behind-only) → `headSha=""`. **Fix** : résolution READ via `fetchCommitRemote` si SHA tip absent ; refuse AMBIGUOUS si non vérifiable.
 - **Écart C (checks)** : catch soft des 403 empêchait `withReadToken` (install→user). **Fix** : throw `ACCESS_DENIED` si **les deux** endpoints refusent ; soft PARTIAL/DENIED si un seul accessible ; statuses tronqués → `incompleteCoverage` + PARTIAL.
-- RECETTE **INCHANGÉE** (`79188f6c` / `hLsmHa3uFYP0PgRtj49Bh`) — pas de cutover.
-- Preuves : unit corrective + suite unit **833** PASS · PG accept01 **11** PASS · tsc PASS · REAL WRITE / Nora LIVE **NOT PROVEN**.
+- Preuves : unit corrective + suite unit **840** PASS · PG accept01 **11** PASS · tsc PASS · REAL WRITE / Nora LIVE **NOT PROVEN**.
+
+### Cutover RECETTE — build correctif (2026-11-22 ≈ 10:06 CET)
+- **GO Morris** honoré : SOURCE `7115e932…` · TREE `bdfd5648…` · BUILD `OwQrOGhC9rwk_Dtj31OcM` (sans rebuild).
+- **AVANT** : `79188f6c…` / `hLsmHa3uFYP0PgRtj49Bh` · service `ml4d-ux004`.
+- **APRÈS** : même service/port/DB · worktree `…/corrective-build-7115e932` · HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->`.
+- Backup + restore proof PASS · métriques DB stables · PR#19 D8 intact · REAL+documentary conservés · **zéro** mutation GitHub.
+- Rollback prêt vers `hLsmHa3uFYP0PgRtj49Bh` (non exercé).
+- Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
+- **UAT Morris** : reprise ciblée GIT-UAT-03 / GIT-UAT-04 · GIT-UAT-08 hors mandat · Nora LIVE E2E **NOT PROVEN** par smoke.

 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index cc2be00f..efca7277 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -1,16 +1,85 @@
 # Manifeste ENV-01 — Cutover RECETTE (journal)

-## Cutover courant — GLOBAL GITHUB CAPABILITY AUDIT (2026-11-22)
+## Cutover courant — E08 CORRECTIVE HARDENING (2026-11-22)

 | Champ | Valeur |
 | --- | --- |
-| Date/heure cutover | 2026-11-22 ≈ 08:38 CET (UTC 07:38) |
+| Date/heure cutover | 2026-11-22 ≈ 10:06 CET (UTC 09:06) |
 | Classe | **NO RELEASE** |
 | Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
 | Cutover | **EXECUTED** — GO Morris triplet exact honoré |
 | STABLE | NOT AVAILABLE / non modifié |
 | E08 ADOPTED | **NON** |
-| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+| Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |
+
+### GO Morris (borné)
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
+| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
+| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
+| Rebuild | **NONE** — artefact figé réutilisé |
+| Push/PR/merge projet | **NONE** |
+| Mutation GitHub / merge PR#19 | **NONE** |
+
+### Runtime AVANT
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
+| TREE | `a550283d37ff461323ea02757350de24b772133e` |
+| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
+| Script | `…/ensemble08-gitaudit-build-79188f6c/start-recette-ensemble08-gitaudit-79188f6c.sh` |
+| PID launchd / node | 61202 / 61228 |
+
+### Runtime APRÈS — observé
+
+| Champ | Valeur |
+| --- | --- |
+| URL | http://127.0.0.1:3200 |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| Script | `…/ensemble08-corrective-build-7115e932/start-recette-ensemble08-corrective-7115e932.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
+| PID launchd / node | 4957 / 4982 |
+| HTTP BUILD | `<!--OwQrOGhC9rwk_Dtj31OcM-->` |
+| Boot | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWLIST=mcleland147/chantiers360` |
+| Listener :3200 | **1** |
+
+### Backup / restore proof / rollback
+
+| Élément | Valeur |
+| --- | --- |
+| Backup | `…/corrective-build-7115e932/.sfia-recette/backups/ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` (733K) |
+| SHA256 | `a765928e95fd8cce52f0a655eee9ea6de96504f224cf2360556c9f276abffa0d` |
+| Restore proof | DB temp `sfia_next_recette_restore_proof_corrective` → metrics match → DROP |
+| Plist bak | `com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T090524Z.pre-corrective-cutover-79188f6c.bak` |
+| Rollback script | `…/corrective-build-7115e932/ROLLBACK-TO-E08-79188f6c.sh` (**prêt**, non exercé) |
+| Ancien build | worktree `gitaudit-build-79188f6c` / BUILD `hLsmHa3uFYP0PgRtj49Bh` disponible |
+
+### Métriques DB (avant = après)
+
+projects=26 · documents=117 · document_revisions=188 · messages=673 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4
+Oracle D8 : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.
+
+### Smokes
+
+login/portfolio/integrations HTTP 200 + BUILD `OwQrOGhC9rwk_Dtj31OcM` · outils `read_git_commit` / `compare_git_refs` / `read_git_commit_status` présents dans `.next` · REAL READ gh PR#19 OPEN · aucune mutation · Nora LIVE **NOT PROVEN**.
+
+---
+
+## Historique — GLOBAL GITHUB CAPABILITY AUDIT (2026-11-22 ≈ 08:38 CET)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure cutover | 2026-11-22 ≈ 08:38 CET (UTC 07:38) |
+| Classe | **NO RELEASE** |
+| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
+| Cutover | **EXECUTED** — remplacé ensuite par cutover correctif ci-dessus |
+| STABLE | NOT AVAILABLE / non modifié |
+| E08 ADOPTED | **NON** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** (historique) |

 ### GO Morris (borné)

@@ -56,7 +125,7 @@

 ### Métriques DB (avant = après)

-projects=26 · documents=117 · document_revisions=188 · messages=657 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4
+projects=26 · documents=117 · document_revisions=188 · messages=657 · conversations=205 · effect_attempts=5 · document_publication_refs=1 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=4
 Oracle D8 : `efx_cf6763da…` COMPLETED · `dpr_7f10c5e4…` PR#19 PR_OPEN.

 ### Smokes
```

## 9. Fake / Real

| Capacité | Niveau |
| --- | --- |
| Runtime build servi | REAL BOUNDARY PROVEN (HTTP BUILD) |
| PostgreSQL continuité | REAL BOUNDARY PROVEN |
| GitHub config | REAL BOUNDARY (flags boot) |
| gh PR#19 READ | REAL BOUNDARY PROVEN |
| Nora LIVE outils commit/compare/status | **NOT PROVEN** — UAT Morris |
| WRITE / merge | **NOT** |

## 10. Gates Morris restants

1. Reprise ciblée **GIT-UAT-03** et **GIT-UAT-04** sur le build servi.
2. GIT-UAT-08 hors mandat.
3. Nora LIVE E2E NOT PROVEN.
4. Protections/rulesets toujours réservés (DENIED).
5. Pas de STABLE / ADOPTED / RELEASE.

## Verdict

**RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED**

**Instruction ChatGPT :** relire depuis Git `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, vérifier le triplet HTTP servi, les smokes et les preuves, puis préparer la reprise ciblée de GIT-UAT-03 et GIT-UAT-04.
