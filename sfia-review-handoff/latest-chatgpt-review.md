# SFIA Studio Next — Review Pack FULL
## Cycle 13 — PR readiness / publication contrôlée ML2

- Date/heure (Europe/Paris): 2026-11-05 09:23:09 CET
- Produit: SFIA Studio Next exclusively
- Typologie: EVOL — publication Git + Draft PR + observation CI
- Review Pack: FULL mono-cycle (réinitialisé)
- Mandat: push branche + Draft PR + observe Actions + handoff L3
- **NON autorisé / non fait:** merge, ready-for-merge, ruleset, second push correctif, RECETTE, RELEASE

## 1. Git Truth Check

### Avant push
- remote: `origin https://github.com/mcleland147/sfia-workspace.git`
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` (**match exact mandat**)
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed` (inchangé)
- merge-base = origin/main
- branche distante: **ABSENTE** avant push
- PR préexistante: aucune
- staged: vide; untracked: `.tmp-sfia-review/` + 5 SVG (non poussés)
- 7 commits linéaires attendus présents

### Après publication
- HEAD local final: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` (inchangé — aucun commit produit supplémentaire)
- remote branch SHA: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` (**MATCH**)
- workflow blob distant: `8803168a74ed508226f4d171c8b52cd988b06bd8`
- SVG absents du remote tree ML2 diff / non trackés sur branche
- Note: `.tmp-sfia-review/chatgpt-review.md` existe déjà sur **main** (historique Studio) — hors diff ML2

## 2. Chaîne des commits publiés

```
1dc120b0 ci(next): install SFIA Studio Next CI workflow on ML2 branch
f9374770 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts
```

## 3. Inventaire fichiers (allowlist)

Allowlist: `projects/sfia-studio-next/**` + `.github/workflows/sfia-studio-next-ci.yml` — **34 fichiers**, SCOPE OK.
Workflows historiques absents du diff. `git diff --check` PASS. Secret scan borné: clean. merge-tree: 0 conflits.

```
.github/workflows/sfia-studio-next-ci.yml
projects/sfia-studio-next/construction/delivery-history.md
projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/contrat-visuel-figma-ml2.md
projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
projects/sfia-studio-next/web/scripts/db-migrate.sh
projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
projects/sfia-studio-next/web/src/app/globals.css
projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
projects/sfia-studio-next/web/src/components/SafeMarkdown.tsx
projects/sfia-studio-next/web/src/db/migrations/003_ml2_knowledge_documents.sql
projects/sfia-studio-next/web/src/db/migrations/004_ml2_integrity_corrective.sql
projects/sfia-studio-next/web/src/db/schema.ts
projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
projects/sfia-studio-next/web/src/domains/conversation/service.ts
projects/sfia-studio-next/web/src/domains/document/service.ts
projects/sfia-studio-next/web/src/domains/knowledge/service.ts
projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
projects/sfia-studio-next/web/tests/unit/ml2-cognition-fixture.test.ts
projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
```

## 4. Push + Draft PR

| Champ | Valeur |
| --- | --- |
| Push | `refs/heads/sfia/next-ml2-production-capitalisation` → origin (no force) |
| SHA publié | `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` |
| PR | **#655** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/655 |
| Draft | **true** |
| Base / Head | main ← sfia/next-ml2-production-capitalisation |
| headOid | 1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe |
| mergeable (GitHub) | MERGEABLE (observation API — **≠ autorisation merge**) |

## 5. Preuves locales réconciliées (HEAD produit = publié)

Portent sur l'arbre `1dc120b0` (dernier cycle install CI + packs antérieurs). Aucune modification produit depuis.

| Niveau | Résultat |
| --- | --- |
| DETERMINISTIC | tsc/lint/build/actionlint PASS ; unit **34 PASS** |
| PG INTEGRATION | **50 PASS** |
| BROWSER FAKE | **3 PASS** |
| GitHub Actions remote | **FAILED** (voir §6) |
| Nora LIVE / COG | NOT RUN |

## 6. GitHub Actions — observation réelle

### Runs sur SHA `1dc120b0`

| Workflow | Run ID | Conclusion | URL |
| --- | --- | --- | --- |
| SFIA Studio CI (historique) | 41993772431 | **success** | https://github.com/mcleland147/sfia-workspace/actions/runs/41993772431 |
| SFIA Studio Next CI | 41993772561 | **failure** | https://github.com/mcleland147/sfia-workspace/actions/runs/41993772561 |

### Checks

| Check | Conclusion | Notes |
| --- | --- | --- |
| Detect SFIA Studio changes | pass | hors Studio → validate skip |
| Build and validate SFIA Studio | skipping | attendu |
| **SFIA Studio Required Gate** | **pass** | ruleset historique OK ; distinct du Next |
| Detect SFIA Studio Next changes | pass | next_changed=true |
| Build and validate SFIA Studio Next | **fail** | step Postgres éphémère |
| **SFIA Studio Next Required Gate** | **fail** | agrège failure validate (comportement correct) |

### Cause racine (logs run 41993772561)

Étape: `Start ephemeral Postgres matching DEV gate identities`

1. Image `postgres:16-alpine` pull OK
2. Conteneur démarre ; `pg_isready` → **`postgres ready`**
3. Immédiatement après, `psql … SELECT/CREATE sfia_next_e2e` échoue:
   - `FATAL: terminating connection due to administrator command`
   - `server closed the connection unexpectedly`
4. Exit code 2 → validate failure → Required Gate FAIL (next_changed=true)

Interprétation: course au **premier démarrage Postgres** (restart post-init après un `pg_isready` précoce). Pas une régression applicative ML2 ; les suites locales restent vertes.

### Correctif borné proposé (NON APPLIQUÉ — hors GO ; pas de second push)

Dans `.github/workflows/sfia-studio-next-ci.yml`, après `postgres ready`, remplacer le CREATE one-shot par une boucle de retry (~30–60s) sur:
- `SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'`
- `CREATE DATABASE …` si absent
- éventuel `sleep` court post-ready

Gate requis pour appliquer: **nouveau GO Morris** (modification workflow + push correctif distinct — le présent GO de publication est consommé).

## 7. Fake / Real Qualification

- Cible CI: DETERMINISTIC + PG éphémère + BROWSER FAKE
- Échec observé **avant** npm/tests (infra runner Postgres)
- LIVE Nora / OAuth / COG / RECETTE: hors portée, non revendiqués
- DETERMINISTIC local PROVEN ≠ CI remote SUCCESS ≠ READY FOR REAL

## 8. ENV-01 / versioning

- ENV ROUTING COMPLETE: DEV lecture/push/PR/observe ; RECETTE/STABLE non touchés
- Version: NO RELEASE ; package `0.0.0-dev` ; STABLE NOT AVAILABLE
- Candidat RECETTE: NOT AVAILABLE

## 9. Réserves inchangées

ML2-S1/S2/S3 ; COG LIVE ; C3 cross-refresh ; ML1-A cookies ; plus **CI Next remote FAILED** (Postgres race) jusqu'à correctif autorisé.

## 10. Décisions Morris restantes

1. Accepter le diagnostic CI (race Postgres) et autoriser un **cycle correctif CI borné** (workflow only + re-push/PR update).
2. Ne pas merger #655 tant que Next Required Gate ≠ SUCCESS.
3. Ne pas ajouter Next Required Gate au ruleset main avant SUCCESS distant.
4. RECETTE / ML3 / RELEASE: ultérieurs.

## 11. Git Review Index

| Artefact | Réf |
| --- | --- |
| Branche distante | `origin/sfia/next-ml2-production-capitalisation@1dc120b0` |
| Draft PR | #655 |
| Next CI run | 41993772561 FAILURE |
| Studio CI run | 41993772431 SUCCESS |
| Workflow path | `.github/workflows/sfia-studio-next-ci.yml` blob `8803168a…` |

## 12. Verdict unique

**PR PUBLISHED — CI NEXT FAILED — CORRECTION REQUIRED**

Branche et Draft PR #655 publiées sur SHA exact `1dc120b0`. CI Next a bien démarré (in-scope) mais a échoué à la création Postgres éphémère (race post-init). Required Gate Next a correctement échoué. Aucun merge. Aucun second push. Correctif workflow documenté, non appliqué.
