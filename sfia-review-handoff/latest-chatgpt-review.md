# SFIA Studio Next — Review Pack FULL
## Cycle 7 — Correctif PostgreSQL CI — PR #655

- Date/heure (Europe/Paris): 2026-11-05 09:40:46 CET
- Mandat: correctif CI borné (workflow only) + push unique + observation run + handoff L3
- **NON fait:** merge, ruleset, second push, modification tests/produit, RECETTE

## 1. Git Truth

### Initial
- branch: `sfia/next-ml2-production-capitalisation`
- HEAD local/distant: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe`
- origin/main: `6e4406c63639330c7826423cdcf08f06ff019eed`
- PR #655 OPEN/DRAFT
- Run échec Postgres: 41993772561

### Final
- HEAD: `23e55da80ac774511b467bc53ab7eaa5d60ac969`
- Parent: `1dc120b0ec12f5c8c15eb4eb466a4cf9e57c0dbe` (= 1dc120b0)
- Remote branch SHA = HEAD
- PR #655 headOid mis à jour; reste **DRAFT**
- Commits origin/main..HEAD:
```
23e55da8 fix(ci-next): wait for PostgreSQL TCP readiness before E2E database setup
1dc120b0 ci(next): install SFIA Studio Next CI workflow on ML2 branch
f9374770 docs(next-ml2): record Cycle 7 integration-prep and CI proposal status
1967b2c5 fix(next-ml2): close C3 fingerprint/UI key, C4 diff budget, C1 journal proofs
5c7dd752 fix(next-ml2): harden D4 integrity, document concurrency and capitalisation
a9a468e9 test(next-ml2): PG/BROWSER proofs and As-Built delivery notes
733eddf0 feat(next-ml2): UX surfaces and APIs for documents, journal, markdown
d867365f feat(next-ml2): D4 knowledge registry and document revision contracts
```

## 2. Incident initial + diagnostic

- Step: Start ephemeral Postgres…
- Symptôme: `postgres ready` via pg_isready puis `FATAL: terminating connection due to administrator command`
- Hypothèse: readiness socket-local trop tôt pendant restart post-init de l'image officielle

## 3. Correctif appliqué (fichier unique)

- Fichier: `.github/workflows/sfia-studio-next-ci.yml`
- Commit: `23e55da80ac774511b467bc53ab7eaa5d60ac969`
- Message: `fix(ci-next): wait for PostgreSQL TCP readiness before E2E database setup`
- Mécanisme: `psql -h 127.0.0.1 -p 5432` SELECT 1 retries (60×1s) ; création E2E idempotente retries (30×1s) ; preuve finale SQL operator+E2E
- Conteneur/ports/DB/credentials: inchangés

### Diff complet

```diff
commit 23e55da80ac774511b467bc53ab7eaa5d60ac969
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Thu Nov 5 09:34:42 2026 +0100

    fix(ci-next): wait for PostgreSQL TCP readiness before E2E database setup

    Replace socket-local pg_isready with bounded TCP SQL SELECT 1 retries
    and idempotent E2E database creation to survive official image init restart.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/.github/workflows/sfia-studio-next-ci.yml b/.github/workflows/sfia-studio-next-ci.yml
index 8803168a..614b3c53 100644
--- a/.github/workflows/sfia-studio-next-ci.yml
+++ b/.github/workflows/sfia-studio-next-ci.yml
@@ -184,6 +184,9 @@ jobs:
         working-directory: ${{ github.workspace }}
         run: |
           set -euo pipefail
+          # Readiness must prove the final TCP server accepts SQL.
+          # Do NOT treat socket-local pg_isready alone as definitive (official image
+          # may restart after init and terminate early connections).
           docker rm -f sfia-next-dev-pg >/dev/null 2>&1 || true
           docker run -d --name sfia-next-dev-pg \
             -e POSTGRES_USER=sfia_next_dev \
@@ -191,25 +194,64 @@ jobs:
             -e POSTGRES_DB=sfia_next_dev \
             -p 127.0.0.1:5433:5432 \
             postgres:16-alpine
+
+          psql_tcp() {
+            # TCP inside the container (not host socket). Failures return non-zero.
+            docker exec sfia-next-dev-pg \
+              psql -h 127.0.0.1 -p 5432 -U sfia_next_dev -d "$1" -v ON_ERROR_STOP=1 -tAc "$2"
+          }
+
+          echo "Waiting for PostgreSQL TCP SQL readiness (SELECT 1)…"
+          ready="false"
           for i in $(seq 1 60); do
-            if docker exec sfia-next-dev-pg pg_isready -U sfia_next_dev -d sfia_next_dev >/dev/null 2>&1; then
-              echo "postgres ready"
+            if out="$(psql_tcp sfia_next_dev 'SELECT 1' 2>/dev/null | tr -d '[:space:]')" && [ "${out}" = "1" ]; then
+              echo "postgres TCP SQL ready (attempt ${i}/60)"
+              ready="true"
               break
             fi
             sleep 1
-            if [ "$i" = "60" ]; then
-              echo "Postgres failed to become ready" >&2
-              docker logs sfia-next-dev-pg >&2 || true
-              exit 1
+          done
+          if [ "${ready}" != "true" ]; then
+            echo "Postgres TCP SQL readiness failed after 60s" >&2
+            docker logs sfia-next-dev-pg >&2 || true
+            exit 1
+          fi
+
+          # Sibling E2E database — create only if absent; retry transient connection drops.
+          echo "Ensuring E2E database sfia_next_e2e…"
+          e2e_ok="false"
+          for i in $(seq 1 30); do
+            exists=""
+            if exists="$(psql_tcp postgres "SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'" 2>/dev/null | tr -d '[:space:]')"; then
+              if [ "${exists}" = "1" ]; then
+                e2e_ok="true"
+                break
+              fi
+              # Not present yet — attempt CREATE; ignore duplicate race, re-lookup next loop.
+              if psql_tcp postgres "CREATE DATABASE sfia_next_e2e OWNER sfia_next_dev;" >/dev/null 2>&1; then
+                :
+              fi
+              if exists="$(psql_tcp postgres "SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'" 2>/dev/null | tr -d '[:space:]')" && [ "${exists}" = "1" ]; then
+                e2e_ok="true"
+                break
+              fi
             fi
+            sleep 1
           done
-          # Sibling E2E database — same identity check as scripts/e2e-web-server.sh
-          exists="$(docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -tAc \
-            "SELECT 1 FROM pg_database WHERE datname='sfia_next_e2e'" | tr -d '[:space:]')"
-          if [ "${exists}" != "1" ]; then
-            docker exec sfia-next-dev-pg psql -U sfia_next_dev -d postgres -v ON_ERROR_STOP=1 \
-              -c "CREATE DATABASE sfia_next_e2e OWNER sfia_next_dev;"
+          if [ "${e2e_ok}" != "true" ]; then
+            echo "Failed to ensure E2E database sfia_next_e2e after retries" >&2
+            docker logs sfia-next-dev-pg >&2 || true
+            exit 1
+          fi
+
+          # Final proof: real SQL on both operator and E2E databases over TCP.
+          op="$(psql_tcp sfia_next_dev 'SELECT 1' | tr -d '[:space:]')"
+          e2e="$(psql_tcp sfia_next_e2e 'SELECT 1' | tr -d '[:space:]')"
+          if [ "${op}" != "1" ] || [ "${e2e}" != "1" ]; then
+            echo "Final TCP SQL proof failed (operator=${op:-empty} e2e=${e2e:-empty})" >&2
+            exit 1
           fi
+          echo "PostgreSQL operator + E2E databases accept TCP SQL"
           docker port sfia-next-dev-pg 5432

       - name: Write CI .env.local (synthetic, non-secret lane)

```

## 4. Validations locales

| Contrôle | Résultat |
| --- | --- |
| actionlint | PASS (0 findings) |
| git diff --check | PASS |
| secret scan diff | clean |
| Probe Docker isolé `sfia-next-ci-probe-pg` (port 55433) | PASS cold-start TCP + E2E create + idempotent |
| Conteneur DEV Morris `sfia-next-dev-pg` | non perturbé (Up 17h) |
| Suites unit/PG/e2e produit | non rejouées (changement workflow-only) — baseline locale antérieure 34/50/3 |

## 5. Nouveau run GitHub Actions (SHA correctif)

| Champ | Valeur |
| --- | --- |
| Run Next CI | **41995565584** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/41995565584 |
| SHA | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Conclusion workflow | **failure** |
| Studio CI historique | 41995565784 **success** (Required Gate pass; validate skip) |

### Jobs Next

| Job | Conclusion |
| --- | --- |
| Detect SFIA Studio Next changes | **success** |
| Build and validate SFIA Studio Next | **failure** |
| SFIA Studio Next Required Gate | **failure** (agrège correctement) |

### Steps validate (preuve Postgres corrigée)

| Step | Conclusion |
| --- | --- |
| Start ephemeral Postgres… | **success** ← incident initial LEVÉ |
| Write .env.local | success |
| npm ci | success |
| TypeScript | success |
| ESLint | success |
| Build Next | success |
| Vitest unit | success |
| Apply migrations 001→004 | success |
| Vitest PostgreSQL integration | success |
| Install Playwright Chromium | success |
| Playwright BROWSER FAKE | **failure** ← NOUVEL échec |
| Secret scan / diff --check | skipped (après fail) |
| Stop ephemeral Postgres | success |

### Nouveau diagnostic Playwright

- Test: `tests/e2e/ml2-c3-stable-key.spec.ts` — ML2 C3-B stable creation key
- Résultat suite: **2 passed / 1 failed** (ml1-smoke + ml2-smoke OK)
- Erreur: timeout 90s sur `getByTestId('create-intent-key').innerText()` après simulation ACK perdu (route fulfill 502)
- Preflight E2E: `e2e-preflight OK` (operator→e2e, container, port 5433)
- Interprétation: correctif Postgres **prouvé SUCCESS** ; flaky/CI-specific du scénario route-intercept C3-B (hors périmètre du GO Postgres-only)
- **Aucun second push** (GO consommé pour un seul commit correctif CI Postgres)

## 6. Fake/Real + ENV/Versioning

- CI = PG réel éphémère + Playwright réel + Nora FAKE + identité DEV FAKE
- LIVE/COG/OAuth/RECETTE/STABLE: NOT RUN / NOT AVAILABLE
- NO RELEASE ; ENV ROUTING COMPLETE (DEV/CI only)

## 7. Réserves / gates

- Réserves produit inchangées (S1/S2/S3, COG, C3 refresh, ML1-A)
- Gate suivant: GO distinct pour diagnostic/correctif **Playwright C3-B** (test ou harness), pas un nouveau chantier Postgres
- Merge #655 toujours interdit

## 8. Décisions Morris

1. Constater levée de l'incident Postgres CI.
2. Autoriser ou non un correctif borné du test/harness `ml2-c3-stable-key` (nouveau GO).
3. Ne pas merger tant que Next Required Gate ≠ SUCCESS.

## 9. Verdict unique

**CI NEXT FAILED — NEW DIAGNOSTIC REQUIRED**

Le correctif PostgreSQL TCP readiness est prouvé sur le run distant 41995565584 (Postgres + migrations + unit + PG integration SUCCESS). L'échec restant est Playwright `ml2-c3-stable-key` (1/3). PR #655 reste DRAFT. Pas de merge.
