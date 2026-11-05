# SFIA Studio Next — Review Pack FULL
## Cycle 7 — Intégration / DevOps — Installation locale CI Next

- Date/heure (Europe/Paris): 2026-11-05 06:34:54 CET
- Produit: `projects/sfia-studio-next/` exclusively
- Typologie: EVOL — installation workflow CI sur branche construction ML2
- Review Pack: FULL, mono-cycle (réinitialisé; aucun append)
- Livraison: NO RELEASE / **pas de push branche projet** / pas de PR / pas de merge / pas de ruleset GitHub
- Handoff distant avant cycle: `0bd3b0d2d894c8c345d442072795f54609e5666c`

## 1. Git Truth Check

### Initial
- remote: `origin https://github.com/mcleland147/sfia-workspace.git`
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD initial: `f937477026d25812db000af4d16ab48bd22e9e47`
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed` (merge-base = origin/main)
- Workflow cible **ABSENT** avant cycle (`sfia-studio-next-ci.yml`)
- Six commits attendus présents et linéaires jusqu'à `f9374770`
- staged vide; SVG untracked préservés; `.tmp-sfia-review/` présent

### Final
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD final: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe`
- Commit installation: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe`
- Chaîne origin/main..HEAD:
```
1dc120b0 ci(next): install SFIA Studio Next CI workflow on ML2 branch
f9374770 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts
```
- Parents:
```
1dc120b0 f9374770 ci(next): install SFIA Studio Next CI workflow on ML2 branch
f9374770 1967b2c5 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 5c7dd752 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 a9a468e9 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 733eddf0 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 d867365f feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f 6e4406c6 feat(next-ml2): D4 knowledge registry and document revision contracts
```
- Branche projet distante: **NON PUBLIÉE**
- Worktree hors pack: `.tmp-sfia-review/*` + 5 SVG untracked (EXCLUDE)

## 2. Contrat de cycle / sources

- GO Morris: installation locale CI Next uniquement; L3 handoff autorisé
- Proposition source: handoff `0bd3b0d2` §7 + artefact `.tmp-sfia-review/ci-next-workflow-proposal.yml`
- Workflows historiques lus et **non modifiés**
- `db-migrate.sh` branche: apply 001→004 confirmé
- Protection main actuelle exige encore seulement `SFIA Studio Required Gate` — **non modifiée**

## 3. Fichiers créés / modifiés

```
commit 1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 06:34:14 2026 +0100

    ci(next): install SFIA Studio Next CI workflow on ML2 branch

    Add sfia-studio-next-ci.yml with detect/validate/required_gate and
    ephemeral Postgres matching DEV e2e gates. Historical Studio and
    Interv360 workflows unchanged. No project push — first Actions run
    requires a distinct Morris GO.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .github/workflows/sfia-studio-next-ci.yml          | 342 +++++++++++++++++++++
 .../construction/delivery-history.md               |  20 ++
 2 files changed, 362 insertions(+)
```

| Fichier | Action |
| --- | --- |
| `.github/workflows/sfia-studio-next-ci.yml` | **CRÉÉ** |
| `construction/delivery-history.md` | append DELIV-…-CI-NEXT-INSTALL-05 |
| `.github/workflows/sfia-studio-ci.yml` | inchangé (hash = origin/main) |
| `.github/workflows/interv360-ci.yml` | inchangé (hash = origin/main) |
| `web/public/*.svg` | EXCLUDE — non stagés |

## 4. Contenu intégral du workflow créé

```yaml
# SFIA Studio Next CI — installed on branch sfia/next-ml2-production-capitalisation
# Product: projects/sfia-studio-next/web
# Does NOT validate projects/sfia-studio (legacy) or interv360.
# Does NOT claim LIVE Nora / COG / RECETTE / STABLE / remote Actions PASS until a real run.
#
# Design notes (path filters + required checks):
# - pull_request to main has NO top-level paths: filter — workflow always runs
#   so a future required check is never "absent" on unrelated PRs.
# - Job `detect` decides whether heavy Next validation is required.
# - Job `required_gate` stable check name for future branch protection:
#     "SFIA Studio Next Required Gate"
# - Out-of-scope PRs: detect=success, validate=skipped, required_gate=PASS
#   with explicit message that Next was NOT executed (not a fake green).
# - push to main uses paths: so merges that only touch Next (or this workflow)
#   re-validate; unrelated pushes do not burn CI minutes.
#
# Node: 24. Postgres: 16-alpine ephemeral Docker matching DEV gate identities:
#   container sfia-next-dev-pg, 127.0.0.1:5433→5432, DBs sfia_next_dev + sfia_next_e2e.
# Migrations (ML2): 001→004 via scripts/db-migrate.sh.
# Nora: STUDIO_E2E=1 + OPENAI_API_KEY neutralized — FAKE only.
#
# Corrections vs Cycle-7 proposal artefact:
# - Header marked installed (no longer "PROPOSAL ONLY").
# - E2E database creation uses psql -tAc identity check (same as e2e-web-server.sh).
# - required_gate explicitly fails when Next is in-scope and validate is skipped/cancelled.

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

      - name: Neutralize LIVE Nora / OAuth env
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          # Do not inject OPENAI_API_KEY, GITHUB_CLIENT_ID, or GITHUB_CLIENT_SECRET.
          unset OPENAI_API_KEY GITHUB_CLIENT_ID GITHUB_CLIENT_SECRET || true
          echo "OPENAI_API_KEY is unset for this job (Nora FAKE only)."

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
          # Sibling E2E database — same identity check as scripts/e2e-web-server.sh
          exists="$(docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -tAc \
            "SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'" | tr -d '[:space:]')"
          if [ "${exists}" != "1" ]; then
            docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -v ON_ERROR_STOP=1 \
              -c "CREATE DATABASE sfia_next_e2e OWNER sfia_next_dev;"
          fi
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
          # Never print .env.local or DATABASE_URL.

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
          STUDIO_E2E: "1"
        run: |
          set -euo pipefail
          unset OPENAI_API_KEY || true
          npm run test:integration

      - name: Install Playwright Chromium
        run: npx playwright install --with-deps chromium

      - name: Playwright BROWSER FAKE
        env:
          STUDIO_E2E: "1"
          STUDIO_FORCE_NORA_FIXTURE: "1"
        run: |
          set -euo pipefail
          unset OPENAI_API_KEY || true
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

          # Next in scope: validate must succeed. skipped/cancelled/failure → FAIL (no faux PASS).
          if [ "${validate_result}" != "success" ]; then
            echo "Required gate FAIL: Next validation required but result=${validate_result}." >&2
            exit 1
          fi

          echo "Required gate PASS: Next validation succeeded."
```

## 5. Corrections vs proposition Cycle 7

| Point | Proposition | Installé |
| --- | --- | --- |
| Header | PROPOSAL ONLY | Marqué installé sur branche ML2 |
| Création DB E2E | `grep -q 1` fragile | `psql -tAc` + compare `1` (aligné e2e-web-server) |
| OPENAI_API_KEY job env | `OPENAI_API_KEY: ""` | unset explicite; pas d'injection clé |
| required_gate | FAIL si validate≠success | + commentaire explicite skipped/cancelled → FAIL si Next in-scope |
| Step neutralize | absent | step dédié unset LIVE/OAuth |

## 6. Revue GitHub Actions (statique)

### A. Syntaxe
- actionlint v1.7.7 (binaire /tmp, pas de mutation dépôt): **no findings**
- Structure jobs detect/validate/required_gate: PASS
- permissions: `contents: read` only; pas de `pull_request_target`; pas de `contents: write`

### B. Déclenchements
| Scénario | Comportement attendu |
| --- | --- |
| PR Next | detect next_changed=true → validate runs → gate exige success |
| PR hors Next | detect false → validate skipped → gate PASS explicite « NOT executed » |
| push main paths Next/workflow | validate runs (fail-closed in-scope) |
| Modification du workflow lui-même | path push + detect path include |
| Check absent | évité: PR sans path filter top-level |

### C. Agrégation required_gate
| Cas | Verdict gate |
| --- | --- |
| detect échoue | FAIL |
| next_changed unknown | FAIL |
| hors Next + detect OK | PASS (Next NOT executed) |
| Next + validate success | PASS |
| Next + validate failure/skipped/cancelled | FAIL |

### D. Sécurité
- Secrets synthétiques DEV only; pas de secrets Morris/OAuth/OpenAI
- Postgres détruit `if: always()`
- Pas de log de DATABASE_URL / .env.local
- Pas de déploiement

### E. Reproductibilité
- npm ci + lockfile path; Node 24; Postgres 16; migrate avant PG tests; Playwright chromium+deps
- Timeouts: detect 5m, validate 45m, gate 5m

### F. Nommage
- Workflow: `SFIA Studio Next CI`
- Gate: **`SFIA Studio Next Required Gate`** (distinct de `SFIA Studio Required Gate`)

**GITHUB ACTIONS PASS distant: NOT CLAIMED / NOT RUN**

## 7. Validations locales rejouées

| Contrôle | Résultat | vs historique |
| --- | --- | --- |
| tsc --noEmit | PASS | aligné |
| lint | PASS | aligné |
| build | PASS | aligné |
| unit | **34 PASS** | = 34 |
| PG integration | **50 PASS** | = 50 |
| Playwright FAKE | **3 PASS** | = 3 |
| actionlint | PASS (0 findings) | nouveau |
| git diff --check workflow | PASS | |
| CI Actions remote | **NOT RUN** | attendu |

<details><summary>unit/pg/e2e tails</summary>

```
tests) 4ms
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
   Start at  06:33:07
   Duration  1.53s (transform 71ms, setup 0ms, collect 733ms, tests 16ms, environment 0ms, prepare 172ms)


---
ests/integration/ml2-knowledge-documents.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml2-knowledge-documents.pg.test.ts (6 tests) 219ms
stderr | tests/integration/identity-session.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/identity-session.pg.test.ts (6 tests) 66ms

 Test Files  5 passed (5)
      Tests  50 passed (50)
   Start at  06:33:26
   Duration  5.53s (transform 83ms, setup 0ms, collect 2.30s, tests 2.78s, environment 0ms, prepare 102ms)


---
lready exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping

Running 3 tests using 1 worker

(node:98930) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml1-smoke.spec.ts:4:5 › DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId (11.6s)
  ✓  2 tests/e2e/ml2-c3-stable-key.spec.ts:7:5 › ML2 C3-B: stable creation key across double-save retry (1.7s)
  ✓  3 tests/e2e/ml2-smoke.spec.ts:4:5 › ML2 DEV: fil continu, document explicite, journal sujets, reprise projet (4.5s)

  3 passed (21.5s)

```
</details>

## 8. PostgreSQL / E2E / isolation

- Identités CI: container `sfia-next-dev-pg`, `127.0.0.1:5433`, DB `sfia_next_dev` + `sfia_next_e2e`
- Aligné `e2e-preflight.ts` / `e2e-pg-gate.ts` / `e2e-web-server.sh` / `db-migrate.sh` 001→004
- Runner crée ses ressources; cleanup always; lane DEV + Nora FAKE
- Preuves locales PG/BROWSER utilisent le DEV operator existant (hors Actions) — **distinct** du futur runner éphémère

## 9. ENV-01 / versioning

- DEV only; RECETTE non autorisée; STABLE NOT AVAILABLE; NO RELEASE
- Classification prospective ML2: MINOR compatible, numéro officiel NOT AVAILABLE

## 10. Réserves ouvertes (inchangées)

- ML2-S1 / S2 / S3; COG-01..07; C3 reprise intention cross-refresh; ML1-A cookies
- **CI Next remote NOT RUN** jusqu'à publication candidat + exécution Actions
- Ruleset: Next Required Gate **pas encore** exigé sur main

## 11. Diff documentaire

```diff
commit 1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 06:34:14 2026 +0100

    ci(next): install SFIA Studio Next CI workflow on ML2 branch

    Add sfia-studio-next-ci.yml with detect/validate/required_gate and
    ephemeral Postgres matching DEV e2e gates. Historical Studio and
    Interv360 workflows unchanged. No project push — first Actions run
    requires a distinct Morris GO.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 0b0c76be..f6269e72 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -223,3 +223,23 @@ Append-only logical journal of Cursor product deliveries.
 | SVG residuals | 5× `web/public/*.svg` create-next-app defaults, untracked, unused → **EXCLUDE** (do not commit) |
 | Status | LOCAL INTEGRATION PREP — no project push/PR/merge ; Review Handoff L3 only |
 | Verdict candidate | `READY WITH RESERVES` (intégration Git bloquée tant que CI Next absente / non exécutée) |
+
+## delivery_id: DELIV-2026-11-05-ML2-CI-NEXT-INSTALL-05
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-05 (Europe/Paris) |
+| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (installation CI Next locale) |
+| Type | EVOL / workflow CI versionné sur branche construction |
+| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
+| Parent HEAD | `f937477026d25812db000af4d16ab48bd22e9e47` |
+| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
+| Created | `.github/workflows/sfia-studio-next-ci.yml` |
+| Historical workflows | `sfia-studio-ci.yml` / `interv360-ci.yml` **unchanged** (hashes match origin/main) |
+| Gate name | `SFIA Studio Next Required Gate` (not yet added to GitHub branch protection) |
+| CI Next remote | **NOT RUN** — requires Morris GO to push branch / open PR for first Actions execution |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS ; actionlint PASS (no findings) |
+| SVG residuals | still EXCLUDE (untracked, not staged) |
+| Status | LOCAL CI INSTALL — no project push/PR/merge ; Review Handoff L3 only |
+| Verdict candidate | `READY FOR MORRIS REVIEW` (publication Git projet + premier run Actions = gates suivants) |

```

## 12. Décisions Morris / gates suivants

1. Accepter l'installation locale du workflow.
2. GO: push branche projet (inclut workflow + ML2).
3. GO: ouvrir PR → **première exécution** `SFIA Studio Next CI`.
4. Après run distant SUCCESS: GO distinct pour ajouter le check au ruleset main.
5. GO merge / RECETTE / ML3: ultérieurs.

## 13. Instructions ChatGPT

Avant réponse à Morris, lire distant:
- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Vérifier SHA/blob, workflow intégral, corrections, tests, sécurité, gates, verdict.

## 14. Verdict unique

**READY FOR MORRIS REVIEW**

Workflow CI Next installé et versionné localement sur la branche ML2, contrôlé (actionlint + structure + non-régression workflows historiques), validations applicatives locales reconfirmées. Pas de PR READY, pas de CI NEXT PASS distant, pas de merge/RECETTE/STABLE/RELEASE/ADOPTED.
