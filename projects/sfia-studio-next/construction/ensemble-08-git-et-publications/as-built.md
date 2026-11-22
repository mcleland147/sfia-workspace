# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 (POST-UAT 01 clôture publication Nora — as-built mis à jour) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |
| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |

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
- Gate WRITE REAL avant préparation : `publicationWriteGate` → refus explicite si `STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary`
- Restitution Nora post-Studio : `composePublicationEffectRestitution` — **un** état métier cohérent ; intention sans effet → `NOT_ATTEMPTED` (jamais « Je publie » / succès inventé)
- Reprise mission post-authorize COMPLETED : restitution métier (pas de dump technique masqué)
- Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
- Preuves PG : WRITE OFF zéro mutation ; SCRIPTED D6/D7/D8 + Nora ; Playwright Nora discriminant (DEV :3101)

### Capacité UX (POST-UAT 01 + convergence)
- Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
- Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
- Infos : popover ancré `GitFileInfoPopover` — `aria-controls` = `panelId` ; Escape / Fermer restaurent le focus ; fermeture sur changement fichier/ref
- Intégrations 11.06 : panneau GitHub + repos autorisés + Actualiser/Déconnecter ; colonne « Une connexion à la carte » ; pas de cartes pédagogiques héritées à gauche ; confirmation 11.07 inchangée fonctionnellement
- G5 pixel Figma : **NOT PROVEN** (Morris UAT)

### REAL multi-dépôts
- Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)

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
- Figma G5 runtime : **NOT PROVEN** — **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT**
- END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
- GitHub REAL READ : **NOT PROVEN** ce cycle
- Nora LIVE E2E : **NOT PROVEN**
- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
- G5 visuelle : **NOT PROVEN** — UAT Morris

## Preuves exécutées (finalisation)
- `tsc --noEmit` PASS
- `git-refs-coverage-s03` **19/19** PASS
- unit ciblés E08 (refs/provenance/…) — voir Review Pack
- Matrice 41 scénarios qualifiée (statuts honnêtes)
- G5 **NOT PROVEN** (non relancé — différé)

## Fake/Real
| Capacité | Niveau |
|---|---|
| Refs bound / incompleteCoverage (S03) | DETERMINISTIC PROVEN (mock REAL-shaped + SCRIPTED) |
| Listing / paths / pubs projection | DETERMINISTIC PROVEN |
| Mandat merge sémantique + contradiction | DETERMINISTIC PROVEN (unit/PG hist.) |
| UX 11.04/11.05/11.07 code | DETERMINISTIC PROVEN (code + L2 Figma hist.) |
| GitHub REAL READ/WRITE | NOT PROVEN |
| Nora LIVE E2E | NOT PROVEN |
| Figma G5 | NOT PROVEN |
