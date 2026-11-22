# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 (FINALISATION UX 11.06 + GitHub REAL WRITE policy + cutover) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery cutover finalisation · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |
| Runtime RECETTE (pré-cutover ce lot) | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Runtime précédent (rollback immédiat) | `9f346391…` / `F85QQBTLa8nq5zKYxMKKZ` (conservé) |
| Runtime RECETTE servi | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` · TREE `1e93363b…` · BUILD `zKGLfPHM1TMilec4qglJv` |
| RECETTE | **AVAILABLE** — cutover FINALISATION exécuté · DB préservée · UAT Morris requis |

## Livré (y compris finalisation technique)

### Capacité A — Consultation Git
- Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
- `normalizeGitReadPath` : rejet `..`, absolu, encodé, backslash ; racine vide autorisée
- Dépassement >200 entrées → `AMBIGUOUS` — pas de truncation silencieuse
- **E08-S03 (fermé ce cycle)** : `ListRefsResult` / `FetchMatchingRefsResult` avec `incompleteCoverage` + `matchedCount` **avant** troncature UI (bound 40) — REAL et SCRIPTED alignés ; `listGitRefs` ne déduit plus `complete` d’une liste déjà tronquée ; résolution exacte `getRefSha` conservée
- Fichiers binaires / trop volumineux : non rendus comme Markdown
- Projection publications : faits MERGE corrélés via `publicationAttemptId` de la tentative GIT_MERGE
- Surface UI : publications 30/70 (11.04), détails agrandis (11.05), confirmation déconnexion (11.07) ; indicateur couverture refs incomplète

### Capacité B — Nora
- Qualification durable `d7.merge_publication` (schema + projection `merge.wantsMerge`)
- `wantsMergeFromQual` **jamais** forcé à `true` depuis le seul mot « merge »
- Cible exacte dépôt + PR ; contradiction same-PR → zéro effet
- `admitConversationalMergeMandate` + provenance USER D6
- Merge SHA : `merge_commit_sha` observé uniquement
- **POST-UAT 01** : publication d’un document **existant** (sans D4 AVAILABLE same-turn) via `resolvePublicationDocumentTarget`
- **Convergence** : référence **explicite** (hint/`doc_*`/rév.) **prévaut** sur focus UI et same-turn contradictoires ; `confirmPublicationDocumentWithD4` avant tout prepare D7
- **Clôture** : `objectRef` et `documentHint` **réconciliés** (pas de `\|\|` silencieux) — conflit → AMBIGUOUS / REVISION_MISMATCH, zéro D7
- Gate WRITE REAL avant préparation : `publicationWriteGate` → exige `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` **et** `GITHUB_APP_WRITE_ALLOWED_REPOS` non vide (READ ≠ WRITE)
- Restitution Nora post-Studio : `composePublicationEffectRestitution` — **un** état métier cohérent ; intention sans effet → `NOT_ATTEMPTED` (jamais « Je publie » / succès inventé)
- Reprise mission post-authorize COMPLETED : restitution métier (pas de dump technique masqué)
- Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
- Preuves PG : WRITE OFF zéro mutation ; SCRIPTED D6/D7/D8 + Nora ; Playwright Nora discriminant (DEV :3101)

### Capacité UX (POST-UAT 01 + convergence + POST-UAT 02)
- Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
- Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
- Infos : popover ancré `GitFileInfoPopover` — `aria-controls` = `panelId` ; Escape / Fermer restaurent le focus ; fermeture sur changement fichier/ref
- **POST-UAT 02 / Figma 11.06** : composition 858/482, bandeau `--fig-ok-bg`, boutons secondaires « Actualiser les accès » / « Déconnecter GitHub », microcopy Figma (connexion / projets / Publier avec Nora), nav rail `is-active`, dépôts = provider réel (pas d’invention)
- **FINALISATION G5** : panneaux `min-height: 610px`, banner h=44, header gap→y≈293 ; F2 ≤2 — `figma-evidence/finalisation-11.06-g5-matrix.md`
- Confirmation déconnexion 11.07 : comportement inchangé (cancel sans effet)
- G5 11.06 rectangles stables 1680×970 : **PROVEN** (F2 ≤2 CSS px)

### REAL multi-dépôts / WRITE gouverné
- Allowlist READ : `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)
- Allowlist WRITE distincte : `allowedWriteFullNames` + env `GITHUB_APP_WRITE_ALLOWED_REPOS` (⊂ READ, jamais inférée)
- Mutations provider : `assertWritableRepo` après gate `documentary`
- RECETTE : WRITE OFF tant que WRITE allowlist vide / flag ≠ documentary — sandbox GO Morris requis pour mutation externe
- REAL WRITE / MERGE mutations : **NOT PROVEN** ce lot (pas de GO sandbox nommé)

### Preuves / docs construction
- Matrice A/B/S 41/41 : `matrice-couverture-acceptation-a-b-s.md`
- Préflight ENV-01 : `env01-recette-preflight.md`
- Tests S03 : `web/tests/unit/git-refs-coverage-s03.test.ts` (REAL-shaped + SCRIPTED)

## Exit qualification antérieure (conservée)
- E08-S01 conditions ouvertes → CONDITION_OPEN
- E08-S02 qual durable sans gate verb-list
- E08-S03 (préalable) recherche branche refPrefix + exact resolve — **complété** par honnêteté couverture fournisseur
- E08-S04 prStatusKind / label historique
- Playwright E08 surface historique ; G5 F2 : **NOT PROVEN** (différé Morris UAT)



### UAT-GIT-PUB-01 (2026-11-22)
- **Cause prouvée (DB RECETTE)** : tour clarifiant (`à la racine` / `ok go`) bloqué par S05 contre la mission `AWAITING_CLARIFICATION` (chemin) → `pendingEffectBlocked` → restitution `NOT_ATTEMPTED` ; **zéro** `effect_attempts`.
- **Correction** : reprise clarification publication (pas de S05 self-block) + chemin racine documentaire (`DOCUMENTARY_ROOT`) + mandat D6 avec `missionClientIntentKey` distinct du turn key.
- Preuve PG : `mission-continuity-accept01` UAT-GIT-PUB-01 PASS (SCRIPTED). REAL E2E : à revalider UAT Morris.

### Chaîne Git restitution / vérif (2026-11-22)
- **Oracle REAL READ** : PR #19 `mcleland147/chantiers360` · mission `pub:mission:turn-67d643cc-…` · attempt `efx_cf6763da-…` COMPLETED · D8 `dpr_7f10c5e4-…` PR_OPEN · commit `16f9961e…` · blob `7518405f…` · fichier **présent** sur branche pub · **404** sur `main` · PR OPEN non merged.
- **Cause restitution sparse** : `publicationEffectView` same-turn non hydraté depuis `planJson`/`resultJson`/D8 ; `terminalFacts` COMPLETED sans path/SHA/PR/liens ; follow-up sans snippets owner.
- **Correction** : `publication-effect-view.ts` (`buildPublicationEffectViewFromAttempt`) · restitution COMPLETED enrichie · snippets `listProjectPublications` avant Nora · `toolScope` sur `cognitiveContinueFromFacts` resume.
- Matrice : `matrice-capacites-git-chaine-2026-11-22.md`
- PUBLISH ≠ MERGE conservé (`mergeObserved` uniquement sur fait MERGE).

### GIT-UAT-01 PR READ + bandeau tour (2026-11-22)
- **Incident A** : `getPullRequest` existait en D9 (REAL+SCRIPTED) mais **non exposé** à Nora (`TOOL_NOT_EXPOSED`). Tour LIVE `tcmd_be190f5c…` : 2 toolCalls (branches) ; qualification `UNAVAILABLE` → status `UNKNOWN` ; Nora affirme à tort l’absence d’outil PR.
- **Correction A** : `readGitPullRequest` (resource-service) + outil `read_git_pull_request` + allowlist cognitive + consigne adapter ; enrichissement live mergeable/commits/changedFiles.
- **Incident B** : bandeau `nora-activity-error` dès `j.status === UNKNOWN` — copy « dernière tentative / réconciliez » inadaptée à un tour READ informationnel (assistant livré, zéro effet).
- **Correction B** : copy UI distinguant consolidation cognitive vs mutation ; conserve l’alerte sans masquer l’anomalie.
- **Cutover** : **NON** ce contrat — candidat local figé ; GO Morris requis pour RECETTE.

### Audit exhaustif capacités Git + fiabilisation (2026-11-22)
- **Périmètre** : matrice A–G complète (`matrice-capacites-git-chaine-2026-11-22.md`) ; frontières D3–D9 conservées ; pas de nouveau moteur.
- **Gaps P0 corrigés** :
  1. `list_git_pull_requests` / `listGitPullRequests` / provider `listPullRequests` (filtres head/base optionnels ; `listPullRequestsRemote` assoupli).
  2. `list_git_pull_request_files` / `listGitPullRequestFiles` / provider `listPullRequestFiles` (raccord `listPullRequestFilesRemote`).
  3. `listProjectGitSources` expose `permissions` sanitizées (pas de secrets).
  4. REAL READ PR : `withReadToken` — installation d’abord, fallback user OAuth sur 401/403 (mutations restent user-only).
- **OUT** : historique commits générique, diff hunks, merge REAL (GIT-UAT-08).
- **Oracle RR** : PR #19 toujours OPEN / non merged / HEAD `16f9961e…` / 1 fichier (gh api) — corrélation D8 RECETTE inchangée ; aucune nouvelle mutation Cursor.
- **Cutover** : freeze candidat ce lot ; GO Morris sur nouveau triplet requis avant :3200.

### Cutover RECETTE — audit capacités Git (2026-11-22 ≈ 08:38 CET)
- **GO Morris** honoré : SOURCE `79188f6c…` · TREE `a550283d…` · BUILD `hLsmHa3uFYP0PgRtj49Bh`.
- **AVANT** : `c67a6ba8…` / `tEiDqhhGWNipSWO_86ZoG` · service `ml4d-ux004`.
- **APRÈS** : même service/port/DB · worktree `…/gitaudit-build-79188f6c` · HTTP `<!--hLsmHa3uFYP0PgRtj49Bh-->`.
- Backup + restore proof PASS · métriques DB stables · PR#19 D8 intact · REAL+documentary conservés · **zéro** mutation GitHub.
- Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
- **UAT Morris** : GIT-UAT-01..07 · GIT-UAT-08 hors mandat · Nora LIVE E2E **NOT PROVEN** par smoke.

### Fiabilisation Git READ — réserves UAT (2026-11-22)
- **R-READ-03 (budget)** : cause prouvée — RECETTE force `TEST_BOUNDARY` ; budget d’appels **partagé** D4+Git (analyse=4) insuffisant pour un parcours PR+commit+compare. **Correction** : `maxGitToolCalls` séparé ; Git consomme `remainingGitCalls` ; D4/history gardent `maxD4ToolCalls` (stress). TEST_BOUNDARY analyse : Git=12 / D4=4.
- **R-READ-02 (historique/date/compare)** : **Correction** outils `read_git_commit` + `compare_git_refs` (ahead/behind + fichiers bornés, **pas** list_commits ni hunks).
- **R-READ-01 (checks)** : **Correction partielle** `read_git_commit_status` (combined status + check-runs). Protections/rulesets : **DENIED** explicite (souvent admin) — marge avant GIT-UAT-08.
- RECETTE servi **inchangé** (`79188f6c` / `hLsmHa3uFYP0PgRtj49Bh`) — aucun cutover ce cycle.
- Preuves : unit 824 PASS · PG mission-continuity 11 PASS · Nora LIVE / REAL WRITE **NOT PROVEN**.

## Non livré / réserves
- Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
- END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
- Policy WRITE gouvernée (séparation READ/WRITE) : **DETERMINISTIC PROVEN** ; activation RECETTE WRITE : **OFF**
- GitHub REAL READ : à requalifier en RECETTE post-cutover (smoke non mutatif)
- Nora LIVE E2E : **NOT PROVEN**
- Candidate finalisation : SHA/TREE/BUILD — manifeste section D
- Rollback immédiat post-cutover : artefact `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ`

## Preuves exécutées (finalisation)
- `tsc --noEmit` PASS · lint warnings préexistants uniquement
- unit `tests/unit` **806/806** PASS
- PG `tests/integration` **538/538** PASS
- Playwright 11.06 **3/3** PASS (G5 h=610 · y Δ0.22)
- REAL WRITE mutation externe : **NOT PROVEN** (STOP frontière sandbox)

## Fake/Real
| Capacité | Niveau |
|---|---|
| Refs bound / incompleteCoverage (S03) | DETERMINISTIC PROVEN (mock REAL-shaped + SCRIPTED) |
| Listing / paths / pubs projection | DETERMINISTIC PROVEN |
| Mandat merge sémantique + contradiction | DETERMINISTIC PROVEN (unit/PG hist.) |
| UX 11.04/11.05/11.07 code | DETERMINISTIC PROVEN |
| UX 11.06 G5 F2 | DETERMINISTIC PROVEN (runtime measures) |
| WRITE allowlist ≠ READ | DETERMINISTIC PROVEN |
| GitHub REAL READ (RECETTE) | BOUNDARY — smoke post-cutover |
| GitHub REAL WRITE / MERGE | NOT PROVEN |
| Nora LIVE E2E | NOT PROVEN |
