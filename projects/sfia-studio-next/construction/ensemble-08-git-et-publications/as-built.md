# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-21 (finalisation technique / préflight RECETTE) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery finalisation · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |
| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839facb7fbc799980c585ce8bfba51cdb5d6` · BUILD `1xEbvCdTAX6ht262w4oKF` |

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
- Candidate Git figée / build RECETTE : **NOT AVAILABLE**
- RECETTE déploiement : hors cycle (préflight only)

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
