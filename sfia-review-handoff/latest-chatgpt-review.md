# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-07 05:09:49 UTC+02:00 (+0200) / 2026-08-07 03:09:49 UTC |
| **Niveau** | FULL |
| **Cycle** | QA / validation — correction bornée de Delivery |
| **Profil** | Critical |
| **Finding** | T1-VAL-06 — BLOCKING — CI DATABASE ORDERING |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| **Branche Delivery** | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a` |
| **HEAD** | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| **origin/main** | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| **Upstream projet** | NONE |
| **Handoff entrant tip** | `4ac38dfcdf8c3406bb6e20331390004f3fa56658` |
| **Handoff entrant blob** | `2837d2f5d4ede34cd6d7e295d6eb7d466c527f78` |
| **Template** | `prompts/templates/sfia-cycle-execution-template.md` blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| **Blocs** | QA · DevOps/CI · PostgreSQL · FinOps · gouvernance · Review Pack · Review Handoff |
| **Publication projet** | **NOT AUTHORIZED** — aucun commit/push/PR projet |

## Verdict

FINOPS TECHNICAL LOT T1 CI-A ORDERING CORRECTED —
T1-VAL-06 CLOSED —
UNIT SUITE RUNS WITHOUT DATABASE ENVIRONMENT —
POSTGRES TESTS SKIPPED DURING GENERIC UNIT STEP —
MIGRATION RUNS BEFORE DATABASE INTEGRATION TESTS —
DATABASE TESTS RUN ONLY AFTER MIGRATION —
POSTGRES INTEGRATION TESTS PASSED —
TYPECHECK PASSED —
LINT PASSED —
BUILD PASSED —
GOVERNANCE PASSED —
T1-VAL-01 TO T1-VAL-05 REMAIN CLOSED —
DOCUMENT 135 PRESERVED BYTE-IDENTICAL —
DOCUMENT 136 PRESERVED BYTE-IDENTICAL —
DOCUMENT 137 UPDATED —
NO MONEY —
NO NEON —
NO OPENAI PROVIDER-REAL —
NO REAL CREDENTIAL —
NO PROJECT COMMIT OR PUSH —
NO PR —
REVIEW HANDOFF COMPLETE —
READY FOR FINAL CHATGPT DELIVERY REVALIDATION —
NOT AUTHORIZED FOR PUBLICATION

## Local Git Truth — initiale

```
date_cest=2026-08-07 05:01:45 CEST (+0200)
date_utc=2026-08-07 03:01:45 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a'
=== status short ===
 M .github/workflows/sfia-studio-ci.yml
 M projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
 M projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
?? projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
?? projects/sfia-studio/app/db/
?? projects/sfia-studio/app/lib/oa/finops/application/
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
?? projects/sfia-studio/app/lib/oa/finops/ports/
=== diff names ===
.github/workflows/sfia-studio-ci.yml
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
=== cached ===
=== ls-remote ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
4ac38dfcdf8c3406bb6e20331390004f3fa56658	refs/heads/sfia/review-handoff
```

## Local Git Truth — finale

```
date_cest=2026-08-07 05:09:03 CEST (+0200)
date_utc=2026-08-07 03:09:03 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a'
=== status short (scoped) ===
 M .github/workflows/sfia-studio-ci.yml
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
?? projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
=== origin/main ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a
=== handoff tip ===
4ac38dfcdf8c3406bb6e20331390004f3fa56658
=== handoff blob ===
2837d2f5d4ede34cd6d7e295d6eb7d466c527f78
```

## Finding T1-VAL-06

**État avant :** service PostgreSQL au niveau job ; `DATABASE_URL` + `DATABASE_URL_DIRECT` au niveau job ; `npm test` avant `migrate:up` héritait de l’env DB → les 10 tests PG devenaient actifs avant migration.

**Correction :** retirer les deux variables de l’env job ; les injecter uniquement sur les étapes migrate (`DATABASE_URL_DIRECT`) et `test:db` (`DATABASE_URL` + DIRECT). Conserver le service Postgres job-level. Ne pas affaiblir les gates suivantes.

**Périmètre :** `.github/workflows/sfia-studio-ci.yml` + document 137 uniquement (code T1 inchangé).

## Diff workflow borné T1-VAL-06

```diff
diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
--- a/.github/workflows/sfia-studio-ci.yml  (Delivery T1 locale avant T1-VAL-06)
+++ b/.github/workflows/sfia-studio-ci.yml  (après T1-VAL-06)
@@
-    env:
-      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
-      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
-      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
     steps:
@@
       - name: Unit tests (Vitest)
+        # DB connection env intentionally absent at this step:
+        # PostgreSQL integration tests must stay skipped until after migrate.
         run: npm test

       - name: FinOps T1 migrate up (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
         run: npm run migrate:up

       - name: FinOps T1 PostgreSQL integration tests (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
         run: npm run test:db
```

## Extrait workflow `validate` après correction

```yaml
  validate:
    name: Build and validate SFIA Studio
    needs: detect
    if: >
      needs.detect.result == 'success' &&
      (
        (github.event_name == 'pull_request' && needs.detect.outputs.studio_changed == 'true') ||
        github.event_name == 'push'
      )
    runs-on: ubuntu-latest
    timeout-minutes: 30
    defaults:
      run:
        shell: bash
        working-directory: projects/sfia-studio/app
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: sfia_ci
          POSTGRES_PASSWORD: sfia_ci_local_only
          POSTGRES_DB: sfia_studio_finops_t1
        ports:
          - 5432:5432
        options: >-
          --health-cmd "pg_isready -U sfia_ci -d sfia_studio_finops_t1"
          --health-interval 5s
          --health-timeout 5s
          --health-retries 10
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
          cache-dependency-path: projects/sfia-studio/app/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Typecheck
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Unit tests (Vitest)
        # DB connection env intentionally absent at this step:
        # PostgreSQL integration tests must stay skipped until after migrate.
        run: npm test

      - name: FinOps T1 migrate up (CI-A)
        env:
          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
        run: npm run migrate:up

      - name: FinOps T1 PostgreSQL integration tests (CI-A)
        env:
          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
          DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
        run: npm run test:db

      - name: Modeled governance tests
        working-directory: projects/sfia-studio
        run: |
          node --test \
            sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs

      - name: Secret pattern scan (targeted)
```

## Document 137 — section T1-VAL-06 complète

## 29. T1-VAL-06 — CI-A Database Ordering Correction

| Champ | Valeur |
|---|---|
| **Finding** | T1-VAL-06 — BLOCKING |
| **Statut** | **CLOSED** |
| **Horodatage Cursor** | 2026-08-07 05:01–05:10 CEST (+0200) / 2026-08-07 03:01–03:10 UTC |
| **Fichier unique workflow** | `.github/workflows/sfia-studio-ci.yml` |
| **Doc exécution** | ce document 137 (section ajoutée) |
| **Docs 135 / 136** | **préservés byte-identical** (`fcdea54f…` / `b2c4c258…`) |

### Cause

Le job `validate` exposait `DATABASE_URL` et `DATABASE_URL_DIRECT` au niveau **job**. L’étape `npm test` héritait donc de ces variables **avant** `migrate:up`. Les 10 tests d’intégration PostgreSQL détectaient `DATABASE_URL`, devenaient actifs, et pouvaient exercer le schéma **avant migration**.

### Workflow avant (Delivery T1 locale — ordre incorrect)

- `services.postgres` au niveau job (conservé)
- `env` job : `DATABASE_URL` + `DATABASE_URL_DIRECT` (jetables CI-A)
- Séquence : … → `npm test` (**avec** env DB) → `migrate:up` → `test:db`

### Workflow après (correction T1-VAL-06)

- `services.postgres` conservé au niveau job
- **Aucun** `DATABASE_URL` / `DATABASE_URL_DIRECT` au niveau job
- Étape `Unit tests (Vitest)` : **sans** env DB
- Étape `FinOps T1 migrate up (CI-A)` : `DATABASE_URL_DIRECT` uniquement
- Étape `FinOps T1 PostgreSQL integration tests (CI-A)` : `DATABASE_URL` (+ `DATABASE_URL_DIRECT`)
- Gates suivantes inchangées (governance, secret scan, whitespace, Required Gate)

### Diff borné T1-VAL-06 (env job → env steps)

```diff
--- a/.github/workflows/sfia-studio-ci.yml
+++ b/.github/workflows/sfia-studio-ci.yml
@@
-    env:
-      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
-      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
-      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
     steps:
@@
       - name: Unit tests (Vitest)
+        # DB connection env intentionally absent at this step:
+        # PostgreSQL integration tests must stay skipped until after migrate.
         run: npm test

       - name: FinOps T1 migrate up (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
         run: npm run migrate:up

       - name: FinOps T1 PostgreSQL integration tests (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
         run: npm run test:db
```

### Séparation env unit / migration / DB tests

| Étape | `DATABASE_URL` | `DATABASE_URL_DIRECT` | Attendu |
|---|---|---|---|
| `npm test` | absent | absent | suite unitaire ; PG **skipped** |
| `migrate:up` | absent | présent (CI jetable) | migration OK |
| `test:db` | présent | présent | **10** tests PG passed sur schéma migré |

### Résultats exacts (Postgres Docker local jetable — port 55432 — non Neon)

| Contrôle | Commande / condition | Résultat |
|---|---|---|
| A — unit sans DB env | `unset DATABASE_URL DATABASE_URL_DIRECT` ; `npm test` | **138 passed / 1 skipped** · **1398 passed / 10 skipped** · fichier PG `10 skipped` |
| B — migrate | `DATABASE_URL_DIRECT` seule (URL locale jetable) ; `npm run migrate:up` | **Migrations complete!** exit 0 |
| C — DB tests | `DATABASE_URL` (+ DIRECT) ; `npm run test:db` | **10 passed** |
| D — typecheck | `npm run typecheck` | exit 0 |
| D — lint | `npm run lint` | exit 0 |
| D — build | `npm run build` | exit 0 |
| D — governance | modeled node --test (73) | exit 0 |
| D — `git diff --check` | workflow + 137 | clean |
| D — secret / Neon / OpenAI | scan workflow + 137 | aucun Neon / OpenAI key / credential réel |

### Absence de changement fonctionnel

Aucun fichier code FinOps / migration / package modifié dans ce cycle. Correction **uniquement** d’ordonnancement CI-A + documentation 137.

### Anti-claims

- NO NEON
- NO OPENAI PROVIDER-REAL
- NO REAL CREDENTIAL
- NO MONEY
- NO PROJECT COMMIT OR PUSH
- NO PR
- NO T2–T7
- DOCUMENT 135 / 136 BYTE-IDENTICAL PRESERVED
- T1-VAL-01 … T1-VAL-05 REMAIN CLOSED

### Verdict section

T1-VAL-06 CLOSED —
UNIT SUITE RUNS WITHOUT DATABASE ENVIRONMENT —
POSTGRES TESTS SKIPPED DURING GENERIC UNIT STEP —
MIGRATION RUNS BEFORE DATABASE INTEGRATION TESTS —
DATABASE TESTS RUN ONLY AFTER MIGRATION —
READY FOR FINAL CHATGPT DELIVERY REVALIDATION —
NOT AUTHORIZED FOR PUBLICATION

## Commandes exactes de validation locale

Postgres Docker éphémère local (non Neon) :

`postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:55432/sfia_studio_finops_t1`

### A — `npm test` sans env DB

```bash
unset DATABASE_URL DATABASE_URL_DIRECT
cd projects/sfia-studio/app
npm test
```

### B — migrate with DIRECT only

```bash
unset DATABASE_URL
export DATABASE_URL_DIRECT='postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:55432/sfia_studio_finops_t1'
npm run migrate:up
```

### C — test:db with DATABASE_URL

```bash
export DATABASE_URL='postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:55432/sfia_studio_finops_t1'
export DATABASE_URL_DIRECT="$DATABASE_URL"
npm run test:db
```

### D — gates

```bash
unset DATABASE_URL DATABASE_URL_DIRECT
npm run typecheck
npm run lint
npm run build
# modeled governance (73 tests)
git diff --check -- .github/workflows/sfia-studio-ci.yml projects/sfia-studio/137-...
```

## Résultat A — npm test sans DATABASE_URL

Lignes clés :

```
 ↓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests | 10 skipped)
 Test Files  138 passed | 1 skipped (139)
      Tests  1398 passed | 10 skipped (1408)
```

Queue :

```
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-07T03:04:20.655Z","status":"ok","projectId":"proj-60739e89-8679-47e6-91ec-a8b1aa79627e","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-07T03:04:20.655Z","status":"idempotent","projectId":"proj-60739e89-8679-47e6-91ec-a8b1aa79627e","durationMs":0}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-07T03:04:20.667Z","status":"ok","projectId":"proj-6d6347c1-2377-4b30-bcb5-0343f43e7ce5","durationMs":2}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-07T03:04:20.668Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-07T03:04:20.669Z","status":"ok","projectId":"proj-6d6347c1-2377-4b30-bcb5-0343f43e7ce5","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-07T03:04:20.669Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-07T03:04:20.670Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 78ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 32ms
 ✓ __tests__/status-pill.test.tsx (1 test) 64ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 18ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 11ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 8ms
 ✓ __tests__/fixtures.test.ts (2 tests) 18ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 5ms

 Test Files  138 passed | 1 skipped (139)
      Tests  1398 passed | 10 skipped (1408)
   Start at  05:02:18
   Duration  135.21s (transform 8.03s, setup 10.30s, collect 26.14s, tests 40.15s, environment 19.68s, prepare 9.24s)
```

## Résultat B — migrate:up

```

> sfia-studio@0.1.0 migrate:up
> node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT

> Migrating files:
> - 1754500000000_finops-t1-usage-ledger
### MIGRATION 1754500000000_finops-t1-usage-ledger (UP) ###
CREATE TABLE "finops_usage_event" (
  "event_id" text PRIMARY KEY NOT NULL,
  "dedup_key" text NOT NULL,
  "project_id" text NOT NULL,
  "execution_run_id" text NOT NULL,
  "correlation_id" text,
  "provider" text NOT NULL,
  "model" text,
  "occurred_at" timestamptz NOT NULL,
  "period_start" date NOT NULL,
  "source_of_truth" text NOT NULL,
  "evidence_class" text NOT NULL,
  "input_tokens" bigint,
  "output_tokens" bigint,
  "total_tokens" bigint,
  "provider_request_id" text,
  "correction_ref" text,
  "usage_status" text NOT NULL,
  "created_at" timestamptz DEFAULT NOW() NOT NULL
);
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_dedup_key_key" UNIQUE ("dedup_key");
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_tokens_nonneg" CHECK ((input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_tokens_safe_int" CHECK ((input_tokens IS NULL OR input_tokens <= 9007199254740991) AND (output_tokens IS NULL OR output_tokens <= 9007199254740991) AND (total_tokens IS NULL OR total_tokens <= 9007199254740991));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_usage_status_chk" CHECK (usage_status IN ('validated', 'unavailable', 'invalid'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_source_of_truth_chk" CHECK (source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_evidence_class_chk" CHECK (evidence_class IN ('estimated', 'observed', 'billed', 'unknown'));
ALTER TABLE "finops_usage_event"
  ADD CONSTRAINT "finops_usage_event_period_start_chk" CHECK (period_start = date_trunc('month', period_start::timestamp)::date);

CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_usage_event is append-only';
END;
$$;
;

CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;

CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754500000000_finops-t1-usage-ledger', NOW());


Migrations complete!
```

## Résultat C — test:db

```

> sfia-studio@0.1.0 test:db
> vitest run __tests__/oa/finops/postgres


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 991ms

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  05:05:04
   Duration  3.14s (transform 330ms, setup 204ms, collect 482ms, tests 991ms, environment 0ms, prepare 301ms)
```

## Résultats D — typecheck / lint / build / governance

### typecheck

```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit
TYPECHECK=0
```

### lint

```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
LINT=0
```

### build (tail)

```
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         121 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.65 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.14 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
BUILD=0
```

### governance (tail)

```
✔ supersessionReason required with supersedesExecutionContractId (103.853708ms)
✔ status=superseded requires supersessionReason (33.158ms)
✔ self-supersession is schema-accepted; runtime must reject (documented) (23.985625ms)
✔ catalog documents ConfirmExecutionContract and SupersedeExecutionContract (0.661125ms)
✔ adversarial: authority casing morris/Morris/n3 rejected (23.227583ms)
✔ adversarial: whitespace-only supersessionReason rejected (21.737667ms)
✔ adversarial: unicode supersessionReason with real content accepted (19.593459ms)
✔ adversarial: confirmed without confirmationRef/decisionRefs rejected (24.786416ms)
✔ adversarial: bad schemaVersion rejected (17.680666ms)
✔ adversarial: additionalProperties rejected (17.205625ms)
✔ adversarial: supersedes without xct: prefix rejected (21.094875ms)
✔ catalog CancelExecution dual-context ownership is explicit (1.543709ms)
ℹ tests 73
ℹ suites 0
ℹ pass 73
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1202.068208
GOV=0
```

### git diff --check

clean (exit 0)

### Secret / anti-claims scan

- `neon.tech` : absent du workflow
- `OPENAI_API_KEY` : absent
- Identifiants CI : `sfia_ci` / `sfia_ci_local_only` jetables locaux uniquement
- Pattern `AKIA…` présent uniquement dans la regex du step « Secret pattern scan » existant (pas une clé)
- Documents 135/136 SHA256 :
  - 135 = `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` (attendu `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe`)
  - 136 = `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` (attendu `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61`)

## Absence Money / Neon / OpenAI / credentials / commit projet

- NO MONEY
- NO NEON
- NO OPENAI PROVIDER-REAL
- NO REAL CREDENTIAL
- NO PROJECT COMMIT OR PUSH
- NO PR
- Handoff L3 uniquement (`sfia/review-handoff`) — commit message attendu :
  `docs(review-handoff): publish Assistant SFIA FinOps T1 CI-A ordering correction`

## Review Handoff

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Branche | `sfia/review-handoff` |
| Tip entrant | `4ac38dfcdf8c3406bb6e20331390004f3fa56658` |
| Blob entrant | `2837d2f5d4ede34cd6d7e295d6eb7d466c527f78` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Commit | mono-fichier · fast-forward uniquement |

## Instruction ChatGPT finale

Relire le handoff distant `sfia/review-handoff` tip post-publication et revalider Delivery T1 CI-A ordering (T1-VAL-06 CLOSED). Aucune autorisation de publication projet.
