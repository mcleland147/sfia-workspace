# SFIA Review Pack FULL — Ensemble 08 CUTOVER RECETTE WRITE MANDATE CORRECTIVE

## 1. Date, fuseau et mandat Morris

| Champ | Valeur |
| --- | --- |
| Date/heure | 2026-11-22 ≈ 11:32–11:35 CET (Europe/Paris) / UTC 10:32–10:35 |
| Mandat | GO Morris — cutover ENV-01 RECETTE existante du candidat WRITE mandat branche |
| Triplet autorisé | SOURCE `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` · TREE `ece43cdb8c008b855c381d50f112f8b86e5a2207` · BUILD `qCQGWLYYGb0ZCA4BLfzBi` |
| Classe | **NO RELEASE** · STABLE **NOT AVAILABLE** · E08 **NON ADOPTED** |
| Profil | CRITICAL |
| Cycle | 11 — Déploiement / release (mise à disposition RECETTE uniquement) |
| Rebuild | **NONE** |
| Push projet / PR / merge | **NONE** |
| Mutation GitHub | **NONE** |
| Review Handoff | required / publish-in-cycle (L3) |

## 2. Git Truth initial / final

### Initial (préflight)

| Champ | Observé |
| --- | --- |
| Dépôt | `mcleland147/sfia-workspace` |
| Branche active | `feat/next-ensemble08-git-publications-nora` |
| HEAD | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| `origin/main` (après fetch) | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Worktree candidat | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-mandate-build-24a8fa9e` |
| BUILD_ID fichier | `qCQGWLYYGb0ZCA4BLfzBi` (mtime 2026-11-22 11:26:32) |
| Worktree ancien | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-corrective-build-7115e932` |
| Staged/untracked runtime | aucun sur artefact figé |

### Final (post-docs locaux)

| Champ | Observé |
| --- | --- |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD docs | `a7e67b97693a8f5b02cdeb77d6d73ba35666b63c` |
| Runtime servi | toujours artefact figé `24a8fa9e…` / `qCQGWLYYGb0ZCA4BLfzBi` (commit docs n’altère pas le worktree servi) |
| Push projet | **NONE** |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` (inchangé) |

## 3. Sources Git et versions

Relues / applicables :

- Gouvernance Next : SEF, roadmap, environnements-recette-et-promotions, product-versioning, décisions qualification, product-naming-conventions
- SFIA v2.6 : `sfia-cycle-routing-guide.md`, `sfia-cycle-execution-template.md`
- Conception E08 : contrats fonctionnel + architecture (branche `docs/next-ensemble08-contrat-fonctionnel-20261121`)
- Handoff correctif validé : `sfia/review-handoff@bbb9303f3a705023a6e8131c88a5219c91269959`
- Procédure cutover réemployée : handoffs `dea616f1…` / `7a22aabd…` + manifeste / delivery-history / as-built

## 4. Identité du candidat figé

| Champ | Valeur |
| --- | --- |
| SOURCE | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD_ID | `qCQGWLYYGb0ZCA4BLfzBi` |
| Artefact | `…/mandate-build-24a8fa9e/projects/sfia-studio-next/web/.next/BUILD_ID` |
| Conformité triplet | **PASS** — exact match GO Morris |
| Post-build alteration | **NONE** observée (mtime BUILD_ID antérieur au cutover)

## 5. Préflight RECETTE

| Contrôle | Résultat |
| --- | --- |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` running |
| HTTP BUILD servi | `<!--OwQrOGhC9rwk_Dtj31OcM-->` sur `/login` `/portfolio` `/settings/integrations` (HTTP 200) |
| Listener :3200 | **1** (node PID 4982 pré-swap) |
| PostgreSQL | `sfia_next_recette_ml4` @ docker `sfia-next-recette-pg` port **5434** |
| GitHub config | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWED_REPOS=mcleland147/chantiers360` |
| D8 Studio PR#19/#20 | présentes `PR_OPEN` (`dpr_7f10c5e4…` / `dpr_1069f349…`) |
| Candidat figé dispo | **PASS** |
| Isolation | même service/port/DB ; pas de nouveau service/DB |

## 6. Avant / après runtime

| | AVANT | APRÈS |
| --- | --- | --- |
| SOURCE | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD | `OwQrOGhC9rwk_Dtj31OcM` | `qCQGWLYYGb0ZCA4BLfzBi` |
| Worktree | `…/corrective-build-7115e932` | `…/mandate-build-24a8fa9e` |
| Script | `start-recette-ensemble08-corrective-7115e932.sh` | `start-recette-ensemble08-mandate-24a8fa9e.sh` |
| PID launchd / node | 4957 / 4982 | 44626 / 44643 |
| Port | 3200 | 3200 (inchangé) |
| DB | `sfia_next_recette_ml4` :5434 | même |
| Boot log | — | `2026-11-22T10:32:48Z SHA=24a8fa9e… BUILD=qCQGWLYYGb0ZCA4BLfzBi LANE=RECETTE PROVIDER=real ALLOW_MUTATIONS=documentary WRITE_ALLOWLIST=mcleland147/chantiers360` |

## 7. Backup et SHA-256

| Champ | Valeur |
| --- | --- |
| Fichier | `…/mandate-build-24a8fa9e/.sfia-recette/backups/ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` |
| Taille | 765K |
| SHA-256 | `277ccba0991b43416736fedd038980d451cab9693fd509658dc122eeafba7837` |
| Intégrité | `gzip -t` PASS |

## 8. Restauration de preuve

| Champ | Valeur |
| --- | --- |
| DB temp | `sfia_next_recette_restore_proof_mandate` |
| Résultat | metrics **MATCH** vs source → DROP |
| Verdict | **RESTORE_PROOF_PASS** |

## 9. Rollback prêt

| Champ | Valeur |
| --- | --- |
| Script | `…/mandate-build-24a8fa9e/ROLLBACK-TO-E08-7115e932.sh` |
| Cible | `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` (**pas** `79188f6c`) |
| Plist bak | `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T103212Z.pre-mandate-cutover-7115e932.bak` |
| Ancien worktree | conservé + BUILD_ID `OwQrOGhC9rwk_Dtj31OcM` vérifié |
| Exercice sur RECETTE saine | **NON** (prêt uniquement) |

## 10. Métriques PostgreSQL avant / après

```
projects=26
documents=117
document_revisions=188
messages=691
conversations=205
effect_attempts=6
document_publication_refs=2
project_git_links=15
authorized_repositories=27
sessions=125
human_decisions=5
```

**METRICS_STABLE** (avant = après). Compteurs WRITE-campagne (messages/effect_attempts/refs/human_decisions) distincts des métriques historiques pré-campagne — stabilité post-cutover confirmée sans exiger retour aux anciens compteurs.

Oracle D8 préservé : PR#19 + PR#20 `PR_OPEN`.

## 11. Configuration GitHub (sans secrets)

| Variable | Valeur |
| --- | --- |
| `STUDIO_GITHUB_PROVIDER` | `real` |
| `STUDIO_GITHUB_ALLOW_MUTATIONS` | `documentary` |
| `GITHUB_APP_WRITE_ALLOWED_REPOS` | `mcleland147/chantiers360` |

Boot post-cutover confirme les mêmes valeurs. REAL **non** désactivé.

## 12. Smokes HTTP et service

| Path | HTTP | BUILD |
| --- | --- | --- |
| `/login` | 200 | `<!--qCQGWLYYGb0ZCA4BLfzBi-->` |
| `/portfolio` | 200 | `<!--qCQGWLYYGb0ZCA4BLfzBi-->` |
| `/settings/integrations` | 200 | `<!--qCQGWLYYGb0ZCA4BLfzBi-->` |

| Contrôle | Résultat |
| --- | --- |
| Listeners :3200 | **1** |
| Process | `next-server (v15.5.29)` PID 44643 |
| Launchd | running · program = start-recette-ensemble08-mandate-24a8fa9e.sh |
| PostgreSQL | opérationnel · métriques stables |
| Secrets dans logs/rapport | **NONE** exposés |

## 13. Résultats GitHub READ (non mutatif)

| Élément | État observé |
| --- | --- |
| PR#19 | OPEN · non draft · mergedAt=null · head `sfia/pub-3ab1e0c2eb6b7499` · https://github.com/mcleland147/chantiers360/pull/19 |
| PR#20 | OPEN · non draft · mergedAt=null · head `sfia/pub-91996c24991c351b` · https://github.com/mcleland147/chantiers360/pull/20 |
| Top PRs récentes | #20 (10:03Z) · #19 (06:22Z) · #18 (nov 8) — **aucune** PR créée par ce cutover |
| Branches/commits créés par cutover | **NONE** |

## 14. Fichiers documentaires modifiés et diffs

Commit local (sans push) : `a7e67b97693a8f5b02cdeb77d6d73ba35666b63c`

Fichiers :

1. `projects/sfia-studio-next/construction/delivery-history.md`
2. `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`
3. `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md`

Diff résumé (3 files, +106/-5). Entrées clés : delivery WRITE-MANDATE-CUTOVER ; as-built section cutover 11:32 CET ; manifeste section courante remplacée + historique corrective.

PV `docs/next-git-recette-20261122` : **NON modifié**.

Diff delivery-history + as-built (extrait observé) :

```
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-CUTOVER
+ SOURCE_SHA 24a8fa9e… / TREE ece43cdb… / BUILD qCQGWLYYGb0ZCA4BLfzBi
+ Avant @7115e932 / OwQrOGhC9rwk_Dtj31OcM
+ Verdict RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED
+### Cutover RECETTE — mandat WRITE branche (2026-11-22 ≈ 11:32 CET)
```

Diff manifeste : section courante WRITE MANDATE + backup SHA `277ccba0…` + rollback `ROLLBACK-TO-E08-7115e932.sh` — commit `a7e67b97` mono-lot docs.

## 15. Distinction DETERMINISTIC / BROWSER / LIVE / REAL

| Classe | Statut ce cycle |
| --- | --- |
| DETERMINISTIC | N/A (pas de rebuild/tests unit ce cycle cutover) |
| BROWSER / HTTP smoke | **PROVEN** — login/portfolio/integrations 200 + BUILD marker |
| LIVE Nora conversationnel | **NOT PROVEN** |
| REAL GitHub READ | **PROVEN** — PR#19/#20 OPEN |
| REAL GitHub WRITE / mutation | **NONE** déclenchée |
| SCRIPTED | N/A |

## 16. Réserves et gates restants

1. **GIT-WRITE-UAT-04** requis (Morris) — nouveau document/révision + branche explicitement nommée.
2. Conformité USER → D6 → D7 → GitHub → D8 à retester ; PR#20 **non** corrigée rétroactivement.
3. Nora LIVE E2E **NOT PROVEN** par smokes HTTP.
4. STABLE / release / ADOPTED : **NOT AVAILABLE** / **NON**.
5. Commit docs locaux `a7e67b97` non poussé (interdit).
6. Rollback prêt non exercé sur RECETTE saine.

## 17. Verdict final

**RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED**

| Élément | Valeur |
| --- | --- |
| SOURCE | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD | `qCQGWLYYGb0ZCA4BLfzBi` (HTTP `<!--qCQGWLYYGb0ZCA4BLfzBi-->`) |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` · running · :3200 |
| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` · SHA-256 `277ccba0991b43416736fedd038980d451cab9693fd509658dc122eeafba7837` |
| Restore proof | PASS |
| PostgreSQL | métriques stables (voir §10) |
| GitHub | real / documentary / allowlist chantiers360 · PR#19/#20 OPEN |
| Projet Git | branche feat · docs commit local `a7e67b97` · **no push** |
| Handoff | voir publication L3 |

### Diff complet commit a7e67b97

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4a9e4d5c..dee36e98 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,25 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 11:32 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — cutover RECETTE correctif mandat WRITE (branche explicite) |
+| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| SOURCE_SHA | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
+| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
+| BUILD_ID | `qCQGWLYYGb0ZCA4BLfzBi` |
+| Avant | `@7115e932` / `OwQrOGhC9rwk_Dtj31OcM` |
+| Après | HTTP `<!--qCQGWLYYGb0ZCA4BLfzBi-->` · ml4d-ux004 |
+| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` + restore PASS |
+| Rollback | prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` (non exercé) |
+| DB | préservée · métriques stables · PR#19/#20 intactes |
+| Rebuild | **NONE** |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-BRANCH
 
 | Field | Value |
@@ -14,8 +33,8 @@ Append-only logical journal of Cursor product deliveries.
 | Fix | `resolvePublicationBranchName` + wiring mission/D6 guards |
 | Incident | CampusFlow R12 · `efx_d8f8e550…` · PR#20 (historique inchangé) |
 | Preuves | unit **848/848** · PG accept01 **11/11** · tsc PASS |
-| RECETTE | **INCHANGÉE** `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` |
-| Cutover | **NONE** — GO cutover Morris distinct requis |
+| RECETTE | cutover **EXECUTED** — voir DELIV-…-WRITE-MANDATE-CUTOVER |
+| Cutover | **EXECUTED** |
 | Push projet / mutation GitHub | **NONE** |
 | STABLE | NOT AVAILABLE |
 
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index c73a1903..5341346a 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -133,9 +133,17 @@
 - **Cause prouvée** : (1) `preparePublication` forçait toujours `publicationBranchFromCorrelationKey` — **premier point de divergence** au prepare D7 ; (2) extraction « Branche à créer : \`…\` » manquante → garde D6 `assertPublicationMandateCoversPlan` ne déclenchait pas `PLAN_DRIFT`.
 - **Correction** : `resolvePublicationBranchName` (explicite > hash) ; `preparePublication({ publicationBranch })` ; wiring mission/service ; regex labeled ; `extractExplicitPublicationBranch`.
 - Auto-génération **conservée** si aucune tête explicite.
-- RECETTE runtime **INCHANGÉ** (`7115e932` / `OwQrOGhC9rwk_Dtj31OcM`) — pas de cutover ce cycle ; PR#19/#20 **non mutées**.
 - Preuves : unit **848** PASS · PG accept01 **11** PASS · tsc PASS · GitHub REAL mutation **NONE**.
 
+### Cutover RECETTE — mandat WRITE branche (2026-11-22 ≈ 11:32 CET)
+- **GO Morris** honoré : SOURCE `24a8fa9e…` · TREE `ece43cdb…` · BUILD `qCQGWLYYGb0ZCA4BLfzBi` (sans rebuild).
+- **AVANT** : `7115e932…` / `OwQrOGhC9rwk_Dtj31OcM` · service `ml4d-ux004`.
+- **APRÈS** : même service/port/DB · worktree `…/mandate-build-24a8fa9e` · HTTP `<!--qCQGWLYYGb0ZCA4BLfzBi-->`.
+- Backup + restore proof PASS · métriques DB stables · PR#19/#20 D8 intactes · REAL+documentary conservés · **zéro** mutation GitHub.
+- Rollback prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` (non exercé).
+- Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
+- **UAT Morris** : GIT-WRITE-UAT-04 (nouveau doc/rév. + branche explicite) · PR#20 non corrigée rétroactivement · Nora LIVE E2E **NOT PROVEN** par smoke.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index efca7277..73e310cd 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -1,15 +1,89 @@
 # Manifeste ENV-01 — Cutover RECETTE (journal)
 
-## Cutover courant — E08 CORRECTIVE HARDENING (2026-11-22)
+## Cutover courant — E08 WRITE MANDATE BRANCH CORRECTIVE (2026-11-22)
 
 | Champ | Valeur |
 | --- | --- |
-| Date/heure cutover | 2026-11-22 ≈ 10:06 CET (UTC 09:06) |
+| Date/heure cutover | 2026-11-22 ≈ 11:32 CET (UTC 10:32) |
 | Classe | **NO RELEASE** |
 | Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
 | Cutover | **EXECUTED** — GO Morris triplet exact honoré |
 | STABLE | NOT AVAILABLE / non modifié |
 | E08 ADOPTED | **NON** |
+| Verdict | **RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED** |
+
+### GO Morris (borné)
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
+| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
+| BUILD_ID | `qCQGWLYYGb0ZCA4BLfzBi` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-mandate-build-24a8fa9e` |
+| Rebuild | **NONE** — artefact figé réutilisé (mtime BUILD_ID 2026-11-22 11:26:32) |
+| Push/PR/merge projet | **NONE** |
+| Mutation GitHub / merge PR#19/#20 | **NONE** |
+
+### Runtime AVANT
+
+| Champ | Valeur |
+| --- | --- |
+| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
+| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
+| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
+| Script | `…/ensemble08-corrective-build-7115e932/start-recette-ensemble08-corrective-7115e932.sh` |
+| PID launchd / node | 4957 / 4982 |
+
+### Runtime APRÈS — observé
+
+| Champ | Valeur |
+| --- | --- |
+| URL | http://127.0.0.1:3200 |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| Script | `…/ensemble08-mandate-build-24a8fa9e/start-recette-ensemble08-mandate-24a8fa9e.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-mandate-build-24a8fa9e` |
+| PID launchd / node | 44626 / 44643 |
+| HTTP BUILD | `<!--qCQGWLYYGb0ZCA4BLfzBi-->` |
+| Boot | `PROVIDER=real` · `ALLOW_MUTATIONS=documentary` · `WRITE_ALLOWLIST=mcleland147/chantiers360` |
+| Listener :3200 | **1** |
+
+### Backup / restore proof / rollback
+
+| Élément | Valeur |
+| --- | --- |
+| Backup | `…/mandate-build-24a8fa9e/.sfia-recette/backups/ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` (765K) |
+| SHA256 | `277ccba0991b43416736fedd038980d451cab9693fd509658dc122eeafba7837` |
+| Restore proof | DB temp `sfia_next_recette_restore_proof_mandate` → metrics match → DROP |
+| Plist bak | `com.sfia.studio.next.recette.ml4d-ux004.plist.20261122T103212Z.pre-mandate-cutover-7115e932.bak` |
+| Rollback script | `…/mandate-build-24a8fa9e/ROLLBACK-TO-E08-7115e932.sh` (**prêt**, non exercé ; cible `7115e932` / `OwQrOGhC9rwk_Dtj31OcM`) |
+| Ancien build | worktree `corrective-build-7115e932` / BUILD `OwQrOGhC9rwk_Dtj31OcM` disponible |
+
+### Métriques DB (avant = après)
+
+projects=26 · documents=117 · document_revisions=188 · messages=691 · conversations=205 · effect_attempts=6 · document_publication_refs=2 · project_git_links=15 · authorized_repositories=27 · sessions=125 · human_decisions=5
+
+Oracle D8 : `dpr_7f10c5e4…` PR#19 PR_OPEN · `dpr_1069f349…` PR#20 PR_OPEN.
+
+### Smokes
+
+login/portfolio/integrations HTTP 200 + BUILD `qCQGWLYYGb0ZCA4BLfzBi` · REAL READ gh PR#19/#20 OPEN non fusionnées · aucune mutation · Nora LIVE **NOT PROVEN**.
+
+### Prochaine UAT
+
+GIT-WRITE-UAT-04 sur nouveau document/révision + branche explicitement nommée · conformité USER → D6 → D7 → GitHub → D8 · PR#20 **non** corrigée rétroactivement.
+
+---
+
+## Historique — E08 CORRECTIVE HARDENING (2026-11-22 ≈ 10:06 CET)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure cutover | 2026-11-22 ≈ 10:06 CET (UTC 09:06) |
+| Classe | **NO RELEASE** |
+| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
+| Cutover | **EXECUTED** — remplacé ensuite par cutover mandat WRITE ci-dessus |
+| STABLE | NOT AVAILABLE / non modifié |
+| E08 ADOPTED | **NON** |
 | Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |
 
 ### GO Morris (borné)
```
