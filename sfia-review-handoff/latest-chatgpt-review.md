# SFIA Studio Next — Review Pack FULL
## Cycle 7 — Intégration / DevOps — préparation intégration Git ML2 + instruction CI Next

- Date/heure (Europe/Paris): 2026-11-05 04:54:59 CET
- Produit: `projects/sfia-studio-next/` exclusively
- Typologie: EVOL / intégration de capacité existante
- Review Pack: FULL, nouveau mono-cycle (réinitialisé; aucun append)
- Livraison: NO RELEASE / pas de push branche projet / pas de PR / pas d'écriture `.github/workflows`
- Handoff précédent tip: `64daed7fdf88c7a3da314ba77ba45896466b5e64`

## 1. Git Truth Check

### Initial / Final (même tip produit + commit docs cycle 7)
- remote: `origin https://github.com/mcleland147/sfia-workspace.git`
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD produit ML2 (code+correctifs): `1967b2c56e59c2cfdf0ba17f2d50dbc9eadf5a01`
- HEAD final cycle 7 (docs delivery-history): `f937477026d25812db000af4d16ab48bd22e9e47`
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed` (inchangé; merge-base = origin/main)
- staged: vide
- worktrees autres lots: présents; aucune écriture concurrente sur la branche ML2 observée
- Continuité parents (linéaire):
```
f9374770 1967b2c5 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 5c7dd752 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 a9a468e9 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 733eddf0 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 d867365f feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f 6e4406c6 feat(next-ml2): D4 knowledge registry and document revision contracts
```
- Commits origin/main..HEAD:
```
f9374770 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts
```
- Cinq commits produit attendus **présents et continus**: `d867365f` → `733eddf0` → `a9a468e9` → `5c7dd752` → `1967b2c5`
- Commit docs cycle 7 ajouté: `f9374770` (delivery-history uniquement)
- Branche projet distante: **NON PUBLIÉE**

## 2. Baseline / sources

- Méthode SFIA v2.6 + gouvernance Next + ML2 VALIDATED SPEC v0.6 + delivery-history lus
- Workflows distants existants: `sfia-studio-ci.yml` (ancien Studio), `interv360-ci.yml` — **aucun ne valide** `projects/sfia-studio-next/web/`
- Contrat D3/D4: inchangé en autorité; pas de multi-chat; pas de HumanDecision implicite
- `db-migrate.sh` sur main: 001→002 seulement; sur branche ML2: **001→004** (adaptation déjà dans le candidat)

## 3. Inventaire Git Review Index

```
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/contrat-visuel-figma-ml2.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/globals.css
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/SafeMarkdown.tsx
A	projects/sfia-studio-next/web/src/db/migrations/003_ml2_knowledge_documents.sql
A	projects/sfia-studio-next/web/src/db/migrations/004_ml2_integrity_corrective.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/document/service.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-cognition-fixture.test.ts
A	projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
```

### Diffstat
```
.../construction/delivery-history.md               |  72 ++
 .../contrat-visuel-figma-ml2.md                    |  28 +
 .../matrice-tracabilite.md                         |  45 ++
 .../specification-technique.md                     |  98 +++
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   4 +-
 .../documents/[documentId]/route.ts                |  86 +++
 .../[preparationId]/documents/route.ts             |  12 +-
 .../[preparationId]/knowledge/route.ts             |  65 ++
 .../preparations/[preparationId]/messages/route.ts |  11 +-
 .../app/api/preparations/[preparationId]/route.ts  |   4 +-
 .../web/src/app/api/projects/[projectId]/route.ts  |   1 +
 projects/sfia-studio-next/web/src/app/globals.css  |  62 +-
 .../src/app/preparations/[preparationId]/page.tsx  | 716 +++++++++++++++++--
 .../web/src/app/projects/[projectId]/page.tsx      | 239 ++++++-
 .../web/src/components/SafeMarkdown.tsx            | 149 ++++
 .../db/migrations/003_ml2_knowledge_documents.sql  |  75 ++
 .../db/migrations/004_ml2_integrity_corrective.sql |  15 +
 projects/sfia-studio-next/web/src/db/schema.ts     |  93 ++-
 .../web/src/domains/conversation/nora-adapter.ts   | 227 ++++--
 .../web/src/domains/conversation/service.ts        | 117 ++-
 .../web/src/domains/document/service.ts            | 740 +++++++++++++++++--
 .../web/src/domains/knowledge/service.ts           | 792 +++++++++++++++++++++
 .../web/src/domains/preparation/project-context.ts |   3 +
 .../web/tests/e2e/ml1-smoke.spec.ts                |  11 +-
 .../web/tests/e2e/ml2-c3-stable-key.spec.ts        |  71 ++
 .../web/tests/e2e/ml2-smoke.spec.ts                |  78 ++
 .../tests/integration/create-project.pg.test.ts    |   2 +-
 .../tests/integration/migrations-fresh.pg.test.ts  |  33 +-
 .../ml2-corrective-integrity.pg.test.ts            | 614 ++++++++++++++++
 .../integration/ml2-knowledge-documents.pg.test.ts | 217 ++++++
 .../web/tests/unit/diff-ordered.test.ts            |  77 ++
 .../web/tests/unit/ml2-cognition-fixture.test.ts   |  40 ++
 .../web/tests/unit/safe-markdown.test.ts           |  21 +
 33 files changed, 4574 insertions(+), 244 deletions(-)
```

### Matrice fichier → responsabilité → changement → test → risque → verdict

| Fichier / zone | Responsabilité | Changement | Test | Risque | Verdict |
| --- | --- | --- | --- | --- | --- |
| `domains/knowledge/service.ts` | D4 Sujets/Acquis | Nouveau registre + TX/FOR UPDATE | PG C1 | Concurrence | INCLUDE |
| `domains/document/service.ts` | D4 documents | Création/révision/diff/idempotence | PG C2–C4 + UNIT | Intégrité | INCLUDE |
| `domains/conversation/*` | D3 Nora | Adapter + capitalisation prudente | UNIT+PG C5 + BROWSER | Fixture vs LIVE | INCLUDE |
| `app/preparations/.../page.tsx` | UX sas | Surfaces + clé UI stable | BROWSER | UX minimale | INCLUDE |
| `app/projects/.../page.tsx` | UX projet | Reprise fil/journal | BROWSER ML2 | Continuity | INCLUDE |
| APIs documents/knowledge/messages | HTTP | Routes ML2 | PG+BROWSER | Auth owner | INCLUDE |
| `SafeMarkdown.tsx` | Rendu | Markdown sûr | UNIT | XSS | INCLUDE |
| migrations `003`/`004` | Schéma | Additif knowledge/docs + corr | migrations-fresh PG | Compat ML1 | INCLUDE |
| `scripts/db-migrate.sh` | Ops | 001→004 | migrate local | Main n'avait que 001–002 | INCLUDE |
| tests unit/PG/e2e | QA | Suites ML2 + corrective | self | — | INCLUDE |
| construction As-Built/* | Docs | Spec/matrice/delivery | revue | — | INCLUDE |
| `contrat-visuel-figma-ml2.md` | Docs UX | Contrat visuel | doc | Fidelity NOT PROVEN | INCLUDE doc |
| `.github/workflows/**` | CI | **aucun changement candidat** | — | — | OUT OF SCOPE cycle |
| `web/public/*.svg` (5) | Résidus | create-next-app defaults, untracked, **0 refs app** | — | Bruit PR | **EXCLUDE — ne pas committer** |
| `.tmp-sfia-review/` | Artefacts revue | Pack + CI proposal | — | Non produit | EXCLUDE du candidat Git |
| `method/**` `prompts/**` ancien Studio | Protégé | non touché | — | — | CLEAN |

### Résidus SVG — qualification

| Fichier | Taille | SHA256 (16) | Origine | Usage app | Statut |
| --- | --- | --- | --- | --- | --- |
| file.svg | 391 | 2b67812c325c199a | create-next-app default | aucune ref | untracked → EXCLUDE |
| globe.svg | 1035 | b614b9bf18392595 | idem | aucune ref | EXCLUDE |
| next.svg | 1375 | 55995dfad6ecb494 | idem | aucune ref | EXCLUDE |
| vercel.svg | 128 | f081337b2fee635b | idem | aucune ref | EXCLUDE |
| window.svg | 385 | 644768c4aaeb4767 | idem | aucune ref | EXCLUDE |

Décision technique Cursor: **ne pas ajouter** au candidat; signaler à Morris; ne pas supprimer sans GO (préservés sur disque).

## 4. Compatibilité main / ML1

- `git merge-tree` prospective main←HEAD: **aucun marqueur de conflit**
- main n'a pas avancé depuis la base `6e4406c6` (blast radius retest: N/A)
- Socle ML1 conservé (auth, préparation, create-project, fil unique)
- Migrations additive 003/004; `migrations-fresh.pg` PASS
- Aucun chemin `projects/sfia-studio/` dans le diff
- Secret scan borné sur diff Next: **clean**
- `git diff --check origin/main...HEAD`: clean (cycle précédent + docs)
- package.json version technique: `0.0.0-dev`; engines node `>=20`; local Node **v24.16.0**
- package-lock: **non modifié** dans ce diff ML2 vs main (dépendances déjà sur main snapshot Next)

## 5. Validations locales rejouées (ce cycle)

| Contrôle | Résultat | Niveau |
| --- | --- | --- |
| `npx tsc --noEmit` | PASS | DETERMINISTIC |
| `npm run lint` | PASS | DETERMINISTIC |
| `npm run build` | PASS | DETERMINISTIC |
| `npm run test:unit` | **34 PASS** | DETERMINISTIC |
| `npm run test:integration` | **50 PASS** | PG INTEGRATION |
| `npm run test:e2e` | **3 PASS** | BROWSER FAKE |
| CI GitHub Actions Next | **NOT RUN** | CI PROPOSAL only |
| Nora LIVE / COG | NOT RUN | hors portée |

### Extraots logs
<details><summary>unit tail</summary>

```
.0.0-dev test:unit
> vitest run tests/unit

◇ injected env (1) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

 ✓ tests/unit/diff-ordered.test.ts (8 tests) 4ms
 ✓ tests/unit/next-dist-dir.test.ts (2 tests) 3ms
 ✓ tests/unit/e2e-pg-gate.test.ts (4 tests) 2ms
 ✓ tests/unit/nora-e2e-fixture.test.ts (7 tests) 2ms
 ✓ tests/unit/dev-login-host.test.ts (6 tests) 1ms
 ✓ tests/unit/ml2-cognition-fixture.test.ts (2 tests) 1ms
 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
 ✓ tests/unit/safe-markdown.test.ts (2 tests) 1ms
 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  9 passed (9)
      Tests  34 passed (34)
   Start at  04:52:26
   Duration  1.54s (transform 73ms, setup 0ms, collect 769ms, tests 16ms, environment 0ms, prepare 184ms)


```
</details>

<details><summary>PG tail</summary>

```
ctive-integrity.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml2-corrective-integrity.pg.test.ts (18 tests) 366ms
stderr | tests/integration/create-project.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/create-project.pg.test.ts (17 tests) 266ms
stderr | tests/integration/ml2-knowledge-documents.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml2-knowledge-documents.pg.test.ts (6 tests) 218ms
stderr | tests/integration/identity-session.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/identity-session.pg.test.ts (6 tests) 68ms

 Test Files  5 passed (5)
      Tests  50 passed (50)
   Start at  04:52:45
   Duration  5.62s (transform 83ms, setup 0ms, collect 2.38s, tests 2.76s, environment 0ms, prepare 102ms)


```
</details>

<details><summary>e2e tail</summary>

```
ct_idx" already exists, skipping
[WebServer] NOTICE:  column "creation_correlation_key" of relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_owner_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping

Running 3 tests using 1 worker

(node:8815) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml1-smoke.spec.ts:4:5 › DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId (11.7s)
  ✓  2 tests/e2e/ml2-c3-stable-key.spec.ts:7:5 › ML2 C3-B: stable creation key across double-save retry (1.7s)
  ✓  3 tests/e2e/ml2-smoke.spec.ts:4:5 › ML2 DEV: fil continu, document explicite, journal sujets, reprise projet (5.0s)

  3 passed (22.1s)

```
</details>

## 6. Contrôle réserves d'intégrité C1–C6

| Id | Statut preuve locale | Notes |
| --- | --- | --- |
| C1 rollback journal | PASS PG | 0 MERGED/SPLIT résiduel |
| C1 même Acquis concurrent | PASS PG | 1 AVAILABLE + 1 refuse; 1 SPLIT event |
| C1 split+merge overlap | PASS PG | sérialisé / double succès cohérent |
| C2 revise concurrent | PASS PG | AVAILABLE+CONFLICT; no dup rev# |
| C3 same key same payload (+ concurrent) | PASS PG | 1 document |
| C3 same key different payload | PASS PG | CONFLICT mismatch |
| C3 ACK perdu + retry | PASS PG + BROWSER | clé UI stable |
| C3 isolation inter-pilot/prep | PASS PG | NOT_FOUND cross-prep |
| C4 ordered + MAX_DIFF_CELLS + DEGRADED | PASS UNIT | jamais faux exhaustif |
| C5 epistemic / no HumanDecision | PASS UNIT+PG | |
| C6 états BROWSER minimal | PASS BROWSER FAKE | pas de validation visuelle forte |

### Reprises C3 encore **non couvertes** comme preuves (réserves bornées — ne pas inventer PASS)

1. Rechargement / fermeture navigateur avant réconciliation d'intention (perte du state React / refs) — **NOT PROVEN** (clé en mémoire seulement).
2. Panne process entre insert `documents` et première `document_revisions` hors chemins wait/UNKNOWN déjà testés en concurrence courte — **PARTIEL** (`UNKNOWN/CREATION_IN_FLIGHT` borné; pas de chaos injecté durable).
3. Persistance d'intention UI cross-refresh (sessionStorage/server command) — **NOT IMPLEMENTED** (choix minimal accepté; réserve reprise).

Aucun nouveau hardening général dans ce cycle.

## 7. Proposition CI Next (intégrale)

- Chemin cible (GO distinct requis pour écrire): `.github/workflows/sfia-studio-next-ci.yml`
- Artefact cycle: `.tmp-sfia-review/ci-next-workflow-proposal.yml`
- Check name stable pour future protection: **`SFIA Studio Next Required Gate`**
- Indépendant de `SFIA Studio Required Gate` (ancien Studio)
- PR sans path filter top-level → check jamais « absent »; hors périmètre → PASS explicite « Next NOT executed »
- Effets sur workflows existants: **aucun** (fichier nouveau proposé)

### Chemins qui devront être autorisés (GO Morris)

1. Création `.github/workflows/sfia-studio-next-ci.yml` (copie du YAML ci-dessous)
2. (Optionnel ultérieur) protection de branche `main` exigeant le check `SFIA Studio Next Required Gate` — **GO séparé**
3. Publication branche projet / PR — **GO séparés**; CI remote SUCCESS seulement après (1)+run réel

### YAML candidat complet

```yaml
# PROPOSAL ONLY — NOT INSTALLED
# Target path (requires distinct Morris GO to write):
#   .github/workflows/sfia-studio-next-ci.yml
#
# Product responsibility: SFIA Studio Next (projects/sfia-studio-next/web)
# Does NOT validate projects/sfia-studio (legacy) or interv360.
# Does NOT claim LIVE Nora / COG / RECETTE / STABLE.
#
# Design notes (path filters + required checks):
# - pull_request to main has NO top-level paths: filter — workflow always runs
#   so a future required check is never "absent" on unrelated PRs.
# - Job `detect` decides whether heavy Next validation is required.
# - Job `required_gate` is the stable check name for branch protection:
#     "SFIA Studio Next Required Gate"
# - Out-of-scope PRs: detect=success, validate=skipped, required_gate=PASS
#   with explicit message that Next was NOT executed (not a fake green).
# - push to main uses paths: so merges that only touch Next (or this workflow)
#   re-validate; unrelated pushes do not burn CI minutes.
#
# Node: 24 (matches local operator Node v24.x and legacy Studio CI).
# Postgres: 16-alpine ephemeral Docker container matching DEV gate identities:
#   container sfia-next-dev-pg, 127.0.0.1:5433→5432, DBs sfia_next_dev + sfia_next_e2e.
# Migrations on ML2 branch: 001→004 via scripts/db-migrate.sh (branch version).
# Nora: STUDIO_E2E=1 + OPENAI_API_KEY neutralized — FAKE only.

name: SFIA Studio Next CI

on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main
    paths:
      - "projects/sfia-studio-next/**"
      - ".github/workflows/sfia-studio-next-ci.yml"

permissions:
  contents: read

concurrency:
  group: sfia-studio-next-ci-${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  detect:
    name: Detect SFIA Studio Next changes
    runs-on: ubuntu-latest
    timeout-minutes: 5
    outputs:
      next_changed: ${{ steps.detect.outputs.next_changed }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect Next scope
        id: detect
        shell: bash
        run: |
          set -euo pipefail

          next_changed="false"
          event_name="${{ github.event_name }}"

          is_next_path() {
            case "$1" in
              projects/sfia-studio-next/*|.github/workflows/sfia-studio-next-ci.yml)
                return 0
                ;;
              *)
                return 1
                ;;
            esac
          }

          scan_range() {
            local base_sha="$1"
            local head_sha="$2"
            local file=""
            local found="false"

            git rev-parse --verify "${base_sha}^{commit}" >/dev/null
            git rev-parse --verify "${head_sha}^{commit}" >/dev/null

            while IFS= read -r -d '' file; do
              if is_next_path "${file}"; then
                found="true"
                break
              fi
            done < <(git diff -z --name-only "${base_sha}...${head_sha}")

            printf '%s' "${found}"
          }

          if [ "${event_name}" = "pull_request" ]; then
            base_sha="${{ github.event.pull_request.base.sha }}"
            head_sha="${{ github.event.pull_request.head.sha }}"
            if [ -z "${base_sha}" ] || [ -z "${head_sha}" ]; then
              echo "Missing pull_request base/head SHA; fail-closed." >&2
              exit 1
            fi
            next_changed="$(scan_range "${base_sha}" "${head_sha}")"
          elif [ "${event_name}" = "push" ]; then
            # Path filters already constrain push; treat as in-scope fail-closed.
            next_changed="true"
            before_sha="${{ github.event.before }}"
            head_sha="${{ github.sha }}"
            if [ -n "${before_sha}" ] && [ "${before_sha}" != "0000000000000000000000000000000000000000" ]; then
              if ! git rev-parse --verify "${before_sha}^{commit}" >/dev/null 2>&1; then
                echo "Cannot resolve github.event.before; fail-closed." >&2
                exit 1
              fi
              corroborate="$(scan_range "${before_sha}" "${head_sha}")"
              echo "push corroborate next_changed=${corroborate}"
            fi
          else
            echo "Unsupported event_name=${event_name}; fail-closed." >&2
            exit 1
          fi

          if [ "${next_changed}" != "true" ] && [ "${next_changed}" != "false" ]; then
            echo "Invalid next_changed value; fail-closed." >&2
            exit 1
          fi

          echo "event_name=${event_name}"
          echo "next_changed=${next_changed}"
          echo "next_changed=${next_changed}" >> "${GITHUB_OUTPUT}"

  validate:
    name: Build and validate SFIA Studio Next
    needs: detect
    if: >
      needs.detect.result == 'success' &&
      (
        (github.event_name == 'pull_request' && needs.detect.outputs.next_changed == 'true') ||
        github.event_name == 'push'
      )
    runs-on: ubuntu-latest
    timeout-minutes: 45
    defaults:
      run:
        shell: bash
        working-directory: projects/sfia-studio-next/web
    env:
      STUDIO_LANE: DEV
      STUDIO_DEV_TEST_LOGIN: "1"
      STUDIO_E2E: "1"
      STUDIO_FORCE_NORA_FIXTURE: "1"
      # Synthetic CI-only values — never Morris workstation secrets, never LIVE OAuth/OpenAI.
      BETTER_AUTH_SECRET: "ci-only-better-auth-secret-not-for-prod-32b"
      BETTER_AUTH_URL: "http://127.0.0.1:3101"
      DATABASE_URL: "postgres://sfia_next_dev:ci-only-local@127.0.0.1:5433/sfia_next_dev"
      SFIA_PG_CONTAINER: sfia-next-dev-pg
      SFIA_PG_USER: sfia_next_dev
      SFIA_PG_DATABASE: sfia_next_dev
      SFIA_E2E_DATABASE: sfia_next_e2e
      # Force FAKE Nora — empty key; do not inject OPENAI_API_KEY / GitHub OAuth.
      OPENAI_API_KEY: ""
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: npm
          cache-dependency-path: projects/sfia-studio-next/web/package-lock.json

      - name: Start ephemeral Postgres matching DEV gate identities
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          docker rm -f sfia-next-dev-pg >/dev/null 2>&1 || true
          docker run -d --name sfia-next-dev-pg \
            -e POSTGRES_USER=sfia_next_dev \
            -e POSTGRES_PASSWORD=ci-only-local \
            -e POSTGRES_DB=sfia_next_dev \
            -p 127.0.0.1:5433:5432 \
            postgres:16-alpine
          for i in $(seq 1 60); do
            if docker exec sfia-next-dev-pg pg_isready -U sfia_next_dev -d sfia_next_dev >/dev/null 2>&1; then
              echo "postgres ready"
              break
            fi
            sleep 1
            if [ "$i" = "60" ]; then
              echo "Postgres failed to become ready" >&2
              docker logs sfia-next-dev-pg >&2 || true
              exit 1
            fi
          done
          # Sibling E2E database (created empty; migrate applied by e2e-web-server / migrate step)
          docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -v ON_ERROR_STOP=1 \
            -c "SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'" | grep -q 1 \
            || docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -v ON_ERROR_STOP=1 \
              -c "CREATE DATABASE sfia_next_e2e OWNER sfia_next_dev;"
          docker port sfia-next-dev-pg 5432

      - name: Write CI .env.local (synthetic, non-secret lane)
        run: |
          set -euo pipefail
          printf '%s\n' \
            'DATABASE_URL=postgres://sfia_next_dev:ci-only-local@127.0.0.1:5433/sfia_next_dev' \
            'STUDIO_LANE=DEV' \
            'STUDIO_DEV_TEST_LOGIN=1' \
            'BETTER_AUTH_SECRET=ci-only-better-auth-secret-not-for-prod-32b' \
            'BETTER_AUTH_URL=http://127.0.0.1:3101' \
            > .env.local
          # Explicitly omit OPENAI_API_KEY, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET

      - name: Install dependencies (lockfile exact)
        run: npm ci

      - name: TypeScript
        run: npx tsc --noEmit

      - name: ESLint (next lint — version from lockfile)
        run: npm run lint

      - name: Build Next
        run: npm run build

      - name: Vitest unit
        run: npm run test:unit

      - name: Apply migrations 001→004 on operator DB
        run: npm run db:migrate

      - name: Vitest PostgreSQL integration
        env:
          # Integration tests read DATABASE_URL from .env.local / env; force FAKE Nora.
          STUDIO_E2E: "1"
          OPENAI_API_KEY: ""
        run: |
          set -euo pipefail
          unset OPENAI_API_KEY || true
          export OPENAI_API_KEY=
          npm run test:integration

      - name: Install Playwright Chromium
        run: npx playwright install --with-deps chromium

      - name: Playwright BROWSER FAKE
        env:
          STUDIO_E2E: "1"
          STUDIO_FORCE_NORA_FIXTURE: "1"
          OPENAI_API_KEY: ""
        run: |
          set -euo pipefail
          unset OPENAI_API_KEY || true
          export OPENAI_API_KEY=
          npm run test:e2e

      - name: Secret pattern scan (Next paths, targeted)
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          matches="$(git grep -nE 'BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16}' -- 'projects/sfia-studio-next' || true)"
          if [ -n "${matches}" ]; then
            echo "Potential secret material detected under projects/sfia-studio-next:" >&2
            printf '%s\n' "${matches}" >&2
            exit 1
          fi
          echo "Secret pattern scan passed"

      - name: Trailing whitespace / conflict marker check
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          if [ "${{ github.event_name }}" = "pull_request" ]; then
            BASE_SHA="${{ github.event.pull_request.base.sha }}"
            git diff --check "${BASE_SHA}...HEAD"
          else
            BEFORE="${{ github.event.before }}"
            if [ -n "${BEFORE}" ] && [ "${BEFORE}" != "0000000000000000000000000000000000000000" ]; then
              git diff --check "${BEFORE}...HEAD"
            else
              echo "No previous SHA available; skipping whitespace range check"
            fi
          fi

      - name: Stop ephemeral Postgres
        if: always()
        working-directory: ${{ github.workspace }}
        run: docker rm -f sfia-next-dev-pg >/dev/null 2>&1 || true

  required_gate:
    name: SFIA Studio Next Required Gate
    needs:
      - detect
      - validate
    if: always()
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: Aggregate required gate
        shell: bash
        run: |
          set -euo pipefail

          detect_result="${{ needs.detect.result }}"
          validate_result="${{ needs.validate.result }}"
          next_changed="${{ needs.detect.outputs.next_changed }}"

          echo "detect_result=${detect_result}"
          echo "validate_result=${validate_result}"
          echo "next_changed=${next_changed}"

          if [ "${detect_result}" != "success" ]; then
            echo "Required gate FAIL: detection did not succeed (result=${detect_result})." >&2
            exit 1
          fi

          if [ "${next_changed}" != "true" ] && [ "${next_changed}" != "false" ]; then
            echo "Required gate FAIL: unknown next_changed value." >&2
            exit 1
          fi

          if [ "${next_changed}" = "false" ]; then
            echo "Required gate PASS: non-Next pull request; Next validation was NOT executed (not claimed)."
            exit 0
          fi

          if [ "${validate_result}" != "success" ]; then
            echo "Required gate FAIL: Next validation required but result=${validate_result}." >&2
            exit 1
          fi

          echo "Required gate PASS: Next validation succeeded."
```

### Matrice jobs

| Job | Condition | Rôle |
| --- | --- | --- |
| detect | toujours (PR/push in-scope) | `next_changed` true/false |
| validate | next_changed ou push | npm ci, tsc, lint, build, unit, migrate 001–004, PG, Playwright FAKE, secret scan, diff --check, Postgres Docker éphémère |
| required_gate | always() | Agrège; hors Next PASS sans prétendre tester; Next FAIL si validate≠success |

### Reproductibilité locale des commandes CI (DEV lane)

```bash
cd projects/sfia-studio-next/web
npm ci
npx tsc --noEmit
npm run lint
npm run build
npm run test:unit
npm run db:migrate          # container sfia-next-dev-pg, 001→004
npm run test:integration    # OPENAI_API_KEY unset / STUDIO_E2E=1
npm run test:e2e            # FAKE via e2e-web-server.sh
```

Exécutées ce cycle sur HEAD produit `1967b2c5` (+ docs `f9374770` n'affecte pas web): **PASS**.

### Limites de preuve

- Ce YAML **n'est pas** une preuve CI GitHub exécutée.
- Pas de run Actions, pas de badge, pas de Required Gate distant actif.
- Interv360 path-filter pattern **évité** volontairement (risque check skipped/missing).
- Secrets CI = synthétiques; aucun secret Morris/OAuth/OpenAI injecté.

## 8. ENV-01 / versioning

- Lane: DEV only
- RECETTE: aucune mutation
- STABLE: NOT AVAILABLE
- Candidat RECETTE: NOT AVAILABLE (SHA non publié/figé pour recette)
- Version produit: NO RELEASE; classification prospective MINOR compatible ML2; package `0.0.0-dev`
- Réserve ML1-A cookies same-host multi-ports: **non corrigée** (héritée)

## 9. Readiness unique / gates restants (ordre)

1. Morris accepte le dossier d'intégration + proposition CI (cette revue).
2. GO: écrire `.github/workflows/sfia-studio-next-ci.yml` (+ éventuellement commit sur branche publiée).
3. GO: push branche projet `sfia/next-ml2-production-capitalisation`.
4. GO: ouvrir PR vers main.
5. CI Next remote SUCCESS sur SHA identifié (Required Gate).
6. GO: merge.
7. Smoke post-merge / éventuelle RECETTE — gates distincts.
8. ML3 — seulement après réception effective ML2.

**Pas de PR READY** tant que l'étape 2–5 n'est pas réelle.

## 10. Réserves / exits

- ML2-S1 streaming UI/LIVE
- ML2-S2 composition séparation UX
- ML2-S3 Figma fidelity globale NOT PROVEN
- CI Next: absente jusqu'à GO+run
- COG-01..07 LIVE NOT RUN
- C3 reprises refresh/intention durable: réserves bornées (§6)
- SVG résidus: EXCLUDE

## 11. Diff cycle 7 (docs only)

```diff
commit f937477026d25812db000af4d16ab48bd22e9e47
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 04:53:54 2026 +0100

    docs(next-ml2): record Cycle 7 integration-prep and CI proposal status

    Document local readiness for Git integration and the CI Next proposal
    held only under .tmp — no workflow install, no project push.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 6c755124..0b0c76be 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -205,3 +205,21 @@ Append-only logical journal of Cursor product deliveries.
 | Evidence limits | LIVE Nora / COG panel / Figma ML2-S3 / CI Next = NOT PROVEN or ABSENT |
 | Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `READY FOR MORRIS REVIEW` |
+
+## delivery_id: DELIV-2026-11-05-ML2-INTEGRATION-PREP-04
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) |
+| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (préparation) |
+| Type | EVOL / préparation intégration Git + instruction CI |
+| Branch | `sfia/next-ml2-production-capitalisation` @ `1967b2c5` (local only — **not published**) |
+| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
+| Périmètre | Git Truth, inventaire candidat, revalidation locale, proposition CI Next (artefact `.tmp` uniquement) |
+| CI Next workflow path | **PROPOSED** `.github/workflows/sfia-studio-next-ci.yml` — contenu dans `.tmp-sfia-review/ci-next-workflow-proposal.yml` ; **NOT WRITTEN** under `.github/` |
+| CI Next remote | **NOT RUN** — requires distinct Morris GO to install workflow + publish SHA |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS |
+| SVG residuals | 5× `web/public/*.svg` create-next-app defaults, untracked, unused → **EXCLUDE** (do not commit) |
+| Status | LOCAL INTEGRATION PREP — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `READY WITH RESERVES` (intégration Git bloquée tant que CI Next absente / non exécutée) |

```

## 12. Décisions Morris indispensables

1. Accepter/refuser le readiness d'intégration locale ML2.
2. GO distinct: installer le workflow CI Next proposé.
3. GO distinct: push branche + PR (après ou avec CI).
4. Décision sur SVG: confirmer EXCLUDE (recommandé).
5. Ne pas ouvrir ML3 / RECETTE / STABLE / RELEASE sans gates ci-dessus.

## 13. Verdict unique

**READY WITH RESERVES**

Candidat ML2 local cohérent, mergeable prospectivement avec main, preuves locales C1–C6 reconfirmées, proposition CI Next complète et techniquement applicable. Intégration Git / PR **non ready** tant que CI Next n'est pas installée et exécutée. Pas de ML2 CLOSED, PR READY, RECETTE, STABLE, RELEASE, ADOPTED.
