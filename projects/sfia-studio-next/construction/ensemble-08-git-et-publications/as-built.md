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
| RECETTE | voir manifeste cutover section D (ce lot) |

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
