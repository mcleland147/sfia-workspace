# SFIA Studio Next — Review Pack FULL
# ML4C / CP2 — ENV-B Fast-Track — Finalisation / PR / CI

**Date/heure :** 2026-11-11 18:04 CET
**Cycle :** 7 — Intégration / DevOps (PR readiness intégré)
**Profil :** Standard — INC sûreté tests PostgreSQL
**Macro-lot :** ML4C / CP2 ENV-B
**Versioning :** NO RELEASE
**Publisher :** Cursor
**Merge / auto-merge / ENV-C / ENV-D / ML4C S01–S07 :** NON AUTORISÉS

---

## 1. Git Truth Check

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | `sfia-workspace-ml4c-cp2-t2-diag-20261111` |
| Branche | `fix/next-env-b-vitest-pg-gate` |
| main distant | `42aa373947446a8c20694b06c559ee0da1cba580` (inchangé) |
| Merge-base | `42aa3739…` |
| Commit ENV-B initial | `b7166fd8ef99452af33413c2b77a67fc9ed20bac` (tree `7c17e56b…`) |
| CI migrate E2E | `25d6e2fbeaa5dbef036159e900b5ba545785be43` |
| CI Playwright retry | `871953ac790dcb3b96ae2e109363127bdfa6a3f1` |
| HEAD PR final | `051aaf36f02bc05114a4c4240353b62bd96a628c` |
| Tree final | `fc359ccb0aaa22e0e3a8aa2328eadc2fec677976` |
| Upstream | `origin/fix/next-env-b-vitest-pg-gate` (poussé) |
| Handoff ENV-B précédent | `a44251b5…` / blob `e863d961…` |
| Dirty hors pack | `.tmp-sfia-review/chatgpt-review.md` local only (non inclus PR) |

---

## 2. PR

| Champ | Valeur |
| --- | --- |
| Numéro | **#675** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/675 |
| Base | `main` @ `42aa3739…` |
| Head | `fix/next-env-b-vitest-pg-gate` @ `051aaf36f02bc05114a4c4240353b62bd96a628c` |
| État | OPEN — **merge NON effectué** |

---

## 3. Analyse raccord Vitest / migration / CI

1. ENV-B : setup Vitest + `db/client` forcent `sfia_next_e2e` avant toute écriture.
2. CI écrivait `.env.local` opérateur et ne migrait que `sfia_next_dev` → Vitest aurait ciblé e2e **sans schéma**.
3. Correctif : étape `SFIA_PG_DATABASE=sfia_next_e2e npm run db:migrate` avant Vitest integration.
4. Playwright `e2e-web-server.sh` remigre e2e après preflight ; migrations `IF NOT EXISTS` → double migrate sûr.
5. Séparation conservée : opérateur CI synthétique + e2e migrée ; `.env.local` CI reste opérateur (preflight Playwright).
6. Blocage observé hors ENV-B : `ubuntu-latest`→Ubuntu 26 casse apt DNS pour Playwright `--with-deps`. Mitigation bornée : retry + pin `ubuntu-24.04` sur le job validate uniquement.

---

## 4. Fichiers PR (stat `main...HEAD`)

```
 .github/workflows/sfia-studio-next-ci.yml          | 35 +++++++-
 .../construction/delivery-history.md               | 14 +++
 projects/sfia-studio-next/web/README.md            |  2 +
 projects/sfia-studio-next/web/src/db/client.ts     |  6 ++
 .../web/src/lib/e2e-pg-gate.ts                     | 99 +++++++++++++++++++++-
 .../intent-continuity-global.pg.test.ts            |  3 +-
 .../mission-continuity-accept01.pg.test.ts         |  3 +-
 .../web/tests/setup/vitest-pg-target.ts            | 20 +++++
 .../web/tests/unit/e2e-pg-gate.test.ts             | 50 +++++++++++
 projects/sfia-studio-next/web/vitest.config.ts     |  3 +
 10 files changed, 227 insertions(+), 8 deletions(-)
```

---

## 5. Diff ENV-B web (`42aa3739..b7166fd8`)

```diff
diff --git a/projects/sfia-studio-next/web/README.md b/projects/sfia-studio-next/web/README.md
index 8df6f4de..01098acf 100644
--- a/projects/sfia-studio-next/web/README.md
+++ b/projects/sfia-studio-next/web/README.md
@@ -55,6 +55,8 @@ npm run test:e2e

 `test:e2e` starts an **owned** server on `127.0.0.1:3101` against isolated DB `sfia_next_e2e` (same Postgres instance, separate database). Preflight (`scripts/e2e-preflight.ts`) validates operator `DATABASE_URL` (loopback `:5433` / `sfia_next_dev`) and Docker port mapping **before** any `CREATE DATABASE` or migrate. Nora fixture FAKE requires `STUDIO_LANE=DEV` + `STUDIO_E2E=1` (`OPENAI_API_KEY` neutralized). Cache dir: `.next-e2e` (operator DEV keeps `.next`). Does **not** reuse `:3100`. Operator data in `sfia_next_dev` (including project « Test 1 ») is untouched.

+**Vitest PostgreSQL (ENV-B):** mutative integration suites must target **`sfia_next_e2e` only**. Setup `tests/setup/vitest-pg-target.ts` + `assertApprovedVitestMutativeDatabaseUrl` refuse `sfia_next_dev` / RECETTE / ambiguous URLs **before** `@/db/client` opens a socket. If `.env.local` still points at the operator DB, Vitest rewrites the **process** URL in-memory to the sibling e2e database (same pattern as Playwright preflight) — do **not** hand-edit `.env.local` to flip lanes. Pure unit tests without `DATABASE_URL` remain unblocked.
+

 Historical local ML1 candidate evidence: 22 unit and 26 PostgreSQL integration tests PASS; 1 Playwright E2E PASS using DEV fake identity and Nora fixture. The legacy GitHub Required Gate for PR #649 was SUCCESS but **did not execute Next CI**; a dedicated Next workflow remains open (reserve B). These results must not be presented as remote Next CI proof.

diff --git a/projects/sfia-studio-next/web/src/db/client.ts b/projects/sfia-studio-next/web/src/db/client.ts
index 63ca37de..903d6569 100644
--- a/projects/sfia-studio-next/web/src/db/client.ts
+++ b/projects/sfia-studio-next/web/src/db/client.ts
@@ -1,12 +1,18 @@
 import { drizzle } from "drizzle-orm/postgres-js";
 import postgres from "postgres";
 import * as schema from "./schema";
+import { assertApprovedVitestMutativeDatabaseUrl } from "@/lib/e2e-pg-gate";

 const url = process.env.DATABASE_URL;
 if (!url) {
   throw new Error("DATABASE_URL missing — refuse to start without explicit lane DSN");
 }

+// Vitest sets VITEST=true. Refuse operator/RECETTE/ambiguous targets before first socket.
+if (process.env.VITEST === "true") {
+  assertApprovedVitestMutativeDatabaseUrl(url);
+}
+
 const globalForDb = globalThis as unknown as { __sfiaSql?: ReturnType<typeof postgres> };

 export const sql =
diff --git a/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts b/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
index 18fd8928..e5a480f6 100644
--- a/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
+++ b/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
@@ -1,6 +1,7 @@
 /**
- * Fail-closed gate for Playwright E2E Postgres targeting.
+ * Fail-closed gate for Playwright E2E and Vitest mutative Postgres targeting.
  * Pure validation — no CREATE DATABASE, no migrations, no network to OpenAI.
+ * Never logs credentials or full DSNs.
  */

 export const E2E_PG_EXPECTED = {
@@ -21,7 +22,9 @@ export type E2ePgGateErrorCode =
   | "E2E_PG_TARGET_FORBIDDEN"
   | "E2E_PG_TARGET_EQ_SOURCE"
   | "E2E_PG_USERINFO_AMBIGUOUS"
-  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN";
+  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN"
+  | "VITEST_PG_URL_MISSING"
+  | "VITEST_PG_TARGET_FORBIDDEN";

 export class E2ePgGateError extends Error {
   readonly code: E2ePgGateErrorCode;
@@ -157,3 +160,95 @@ export function assertContainerLoopbackPortMapping(
     );
   }
 }
+
+function parsePostgresUrl(raw: string | undefined | null): URL {
+  if (raw == null || String(raw).trim() === "") {
+    throw new E2ePgGateError("VITEST_PG_URL_MISSING", "DATABASE_URL missing");
+  }
+  let u: URL;
+  try {
+    u = new URL(String(raw).trim());
+  } catch {
+    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
+  }
+  if (u.protocol !== "postgres:" && u.protocol !== "postgresql:") {
+    throw new E2ePgGateError(
+      "E2E_PG_PROTOCOL_FORBIDDEN",
+      `protocol must be postgres/postgresql (got ${u.protocol})`,
+    );
+  }
+  return u;
+}
+
+function assertLoopbackDevPort(u: URL): void {
+  const host = u.hostname.toLowerCase();
+  if (!(E2E_PG_EXPECTED.hosts as readonly string[]).includes(host)) {
+    throw new E2ePgGateError(
+      "E2E_PG_HOST_FORBIDDEN",
+      "host must be exact loopback 127.0.0.1 or localhost",
+    );
+  }
+  const port = u.port === "" ? 5432 : Number(u.port);
+  if (port !== E2E_PG_EXPECTED.port) {
+    throw new E2ePgGateError(
+      "E2E_PG_PORT_FORBIDDEN",
+      `port must be ${E2E_PG_EXPECTED.port} (got ${port})`,
+    );
+  }
+}
+
+/**
+ * Fail-closed: Vitest mutative suites may only target sfia_next_e2e on DEV loopback :5433.
+ * Operator (`sfia_next_dev`), RECETTE, and other DB names are refused — no network I/O.
+ */
+export function assertApprovedVitestMutativeDatabaseUrl(
+  raw: string | undefined | null,
+): URL {
+  const u = parsePostgresUrl(raw);
+  assertLoopbackDevPort(u);
+  const db = databaseNameFromPathname(u.pathname);
+  if (!db) {
+    throw new E2ePgGateError("VITEST_PG_TARGET_FORBIDDEN", "database name missing");
+  }
+  if (db === E2E_PG_EXPECTED.operatorDatabase) {
+    throw new E2ePgGateError(
+      "VITEST_PG_TARGET_FORBIDDEN",
+      "Vitest mutative tests must not target operator database sfia_next_dev",
+    );
+  }
+  if (db !== E2E_PG_EXPECTED.e2eDatabase) {
+    throw new E2ePgGateError(
+      "VITEST_PG_TARGET_FORBIDDEN",
+      `Vitest mutative database must be ${E2E_PG_EXPECTED.e2eDatabase} (got ${db})`,
+    );
+  }
+  return u;
+}
+
+/**
+ * Prepare process DATABASE_URL for Vitest mutative PG without editing `.env.local`.
+ * - Already e2e → keep (after assert).
+ * - Approved operator URL → derive sibling e2e URL in-memory (Playwright preflight pattern).
+ * - Anything else → throw before any DB client is constructed.
+ */
+export function prepareVitestMutativeDatabaseUrl(raw: string | undefined | null): string {
+  if (raw == null || String(raw).trim() === "") {
+    throw new E2ePgGateError("VITEST_PG_URL_MISSING", "DATABASE_URL missing");
+  }
+  const trimmed = String(raw).trim();
+  let u: URL;
+  try {
+    u = new URL(trimmed);
+  } catch {
+    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
+  }
+  const db = databaseNameFromPathname(u.pathname);
+  if (db === E2E_PG_EXPECTED.e2eDatabase) {
+    assertApprovedVitestMutativeDatabaseUrl(trimmed);
+    return trimmed;
+  }
+  // Operator source → in-process rewrite to e2e (does not modify .env.local).
+  const built = buildE2eDatabaseUrl(trimmed);
+  assertApprovedVitestMutativeDatabaseUrl(built.e2eDatabaseUrl);
+  return built.e2eDatabaseUrl;
+}
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 34206692..6f174ced 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -109,7 +109,8 @@ async function seedProjectWithGit(label: string) {
 describe("Global Nora/Studio intent continuity (PG)", () => {
   beforeAll(() => {
     if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
-    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
+    // Mutative Vitest PG must target e2e only (see tests/setup/vitest-pg-target.ts).
+    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
     delete process.env.OPENAI_API_KEY;
     process.env.STUDIO_LANE = "DEV";
     process.env.STUDIO_E2E = "1";
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index c87e77e3..5c9138b0 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -70,7 +70,8 @@ async function seedProjectWithGit(label: string) {
 describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
   beforeAll(() => {
     if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
-    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
+    // Mutative Vitest PG must target e2e only (see tests/setup/vitest-pg-target.ts).
+    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
     delete process.env.OPENAI_API_KEY;
     process.env.STUDIO_LANE = "DEV";
     process.env.STUDIO_E2E = "1";
diff --git a/projects/sfia-studio-next/web/tests/setup/vitest-pg-target.ts b/projects/sfia-studio-next/web/tests/setup/vitest-pg-target.ts
new file mode 100644
index 00000000..741860d5
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/setup/vitest-pg-target.ts
@@ -0,0 +1,20 @@
+/**
+ * Vitest setup — fail-closed Postgres target for mutative suites.
+ * Runs before test files load so `@/db/client` never connects to operator DB.
+ *
+ * Policy:
+ * - If DATABASE_URL is unset: no-op (pure unit tests stay unblocked).
+ * - If set to approved operator URL: rewrite in-process to sfia_next_e2e (does not edit .env.local).
+ * - If set to sfia_next_e2e: keep after assert.
+ * - Otherwise: throw before any mutative import.
+ */
+import { config } from "dotenv";
+import path from "path";
+import { prepareVitestMutativeDatabaseUrl } from "@/lib/e2e-pg-gate";
+
+config({ path: path.resolve(__dirname, "../../.env.local") });
+
+const raw = process.env.DATABASE_URL;
+if (raw != null && String(raw).trim() !== "") {
+  process.env.DATABASE_URL = prepareVitestMutativeDatabaseUrl(raw);
+}
diff --git a/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts b/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
index 7d578652..265969e9 100644
--- a/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
@@ -1,13 +1,17 @@
 import { describe, expect, it } from "vitest";
 import {
   assertApprovedOperatorDatabaseUrl,
+  assertApprovedVitestMutativeDatabaseUrl,
   assertContainerLoopbackPortMapping,
   buildE2eDatabaseUrl,
+  prepareVitestMutativeDatabaseUrl,
   E2ePgGateError,
 } from "@/lib/e2e-pg-gate";

 const good =
   "postgres://sfia_next_dev:local-only@127.0.0.1:5433/sfia_next_dev";
+const e2eGood =
+  "postgres://sfia_next_dev:local-only@127.0.0.1:5433/sfia_next_e2e";

 function expectCode(fn: () => unknown, code: string) {
   try {
@@ -69,3 +73,49 @@ describe("E2E Postgres preflight gate (no writes)", () => {
     expectCode(() => assertContainerLoopbackPortMapping(""), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
   });
 });
+
+describe("Vitest mutative Postgres gate (no network / no writes)", () => {
+  it("A: refuses operator sfia_next_dev as mutative target", () => {
+    expectCode(
+      () => assertApprovedVitestMutativeDatabaseUrl(good),
+      "VITEST_PG_TARGET_FORBIDDEN",
+    );
+  });
+
+  it("B: refuses missing / invalid / ambiguous / wrong-port / non-e2e names", () => {
+    expectCode(() => assertApprovedVitestMutativeDatabaseUrl(undefined), "VITEST_PG_URL_MISSING");
+    expectCode(() => assertApprovedVitestMutativeDatabaseUrl(""), "VITEST_PG_URL_MISSING");
+    expectCode(() => assertApprovedVitestMutativeDatabaseUrl("not-a-url"), "E2E_PG_URL_INVALID");
+    expectCode(
+      () => assertApprovedVitestMutativeDatabaseUrl("postgres://u:p@127.0.0.1:5433/sfia_next_recette"),
+      "VITEST_PG_TARGET_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedVitestMutativeDatabaseUrl("postgres://u:p@127.0.0.1:5434/sfia_next_e2e"),
+      "E2E_PG_PORT_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedVitestMutativeDatabaseUrl("postgres://u:p@db.example.com:5433/sfia_next_e2e"),
+      "E2E_PG_HOST_FORBIDDEN",
+    );
+  });
+
+  it("C: accepts sfia_next_e2e on DEV loopback :5433", () => {
+    const u = assertApprovedVitestMutativeDatabaseUrl(e2eGood);
+    expect(u.pathname).toBe("/sfia_next_e2e");
+    expect(u.port).toBe("5433");
+  });
+
+  it("prepare: derives e2e URL from operator without accepting operator as final target", () => {
+    const prepared = prepareVitestMutativeDatabaseUrl(good);
+    expect(prepared).toContain("/sfia_next_e2e");
+    expect(prepared).not.toMatch(/\/sfia_next_dev(?:\?|$)/);
+    assertApprovedVitestMutativeDatabaseUrl(prepared);
+    expect(prepareVitestMutativeDatabaseUrl(e2eGood)).toContain("/sfia_next_e2e");
+    expectCode(() => prepareVitestMutativeDatabaseUrl(undefined), "VITEST_PG_URL_MISSING");
+    expectCode(
+      () => prepareVitestMutativeDatabaseUrl("postgres://u:p@127.0.0.1:5433/other_db"),
+      "E2E_PG_SOURCE_DB_FORBIDDEN",
+    );
+  });
+});
diff --git a/projects/sfia-studio-next/web/vitest.config.ts b/projects/sfia-studio-next/web/vitest.config.ts
index be8459d9..d352cbf9 100644
--- a/projects/sfia-studio-next/web/vitest.config.ts
+++ b/projects/sfia-studio-next/web/vitest.config.ts
@@ -10,8 +10,11 @@ export default defineConfig({
     include: ["tests/**/*.test.ts"],
     fileParallelism: false,
     sequence: { concurrent: false },
+    // Before any test file / db client import: resolve DATABASE_URL to sfia_next_e2e only.
+    setupFiles: [path.resolve(__dirname, "tests/setup/vitest-pg-target.ts")],
     env: {
       // DATABASE_URL must come from .env.local / process env — never hardcode credentials here.
+      // Mutative PG target is enforced by tests/setup/vitest-pg-target.ts + db/client.ts (VITEST).
       STUDIO_DEV_TEST_LOGIN: process.env.STUDIO_DEV_TEST_LOGIN ?? "1",
       STUDIO_LANE: process.env.STUDIO_LANE ?? "DEV",
       // Explicit SCRIPTED GitHub auth for unit/integration fixtures only.
```

---

## 6. Diff CI + delivery (`b7166fd8..051aaf36` / total CI file vs main)

```diff
diff --git a/.github/workflows/sfia-studio-next-ci.yml b/.github/workflows/sfia-studio-next-ci.yml
index cca2c8ef..3edc4650 100644
--- a/.github/workflows/sfia-studio-next-ci.yml
+++ b/.github/workflows/sfia-studio-next-ci.yml
@@ -16,7 +16,9 @@
 #
 # Node: 24. Postgres: 16-alpine ephemeral Docker matching DEV gate identities:
 #   container sfia-next-dev-pg, 127.0.0.1:5433→5432, DBs sfia_next_dev + sfia_next_e2e.
-# Migrations (ML2): 001→006 via scripts/db-migrate.sh.
+# Migrations: 001→012 via scripts/db-migrate.sh.
+# Vitest mutative (ENV-B): targets sfia_next_e2e only — migrate E2E schema before integration.
+# Playwright webServer still migrates E2E after preflight (migrations are IF NOT EXISTS / rejouable).
 # Nora: STUDIO_E2E=1 + OPENAI_API_KEY neutralized — FAKE only.
 #
 # Corrections vs Cycle-7 proposal artefact:
@@ -140,7 +142,8 @@ jobs:
         (github.event_name == 'pull_request' && needs.detect.outputs.next_changed == 'true') ||
         github.event_name == 'push'
       )
-    runs-on: ubuntu-latest
+    # Pin 24.04: ubuntu-latest→26 (resolute) currently breaks Playwright --with-deps apt DNS.
+    runs-on: ubuntu-24.04
     timeout-minutes: 45
     defaults:
       run:
@@ -282,7 +285,14 @@ jobs:
       - name: Vitest unit
         run: npm run test:unit

-      - name: Apply migrations 001→006 on operator DB
+      - name: Apply migrations 001→012 on operator DB
+        run: npm run db:migrate
+
+      # ENV-B: Vitest setup rewrites DATABASE_URL → sfia_next_e2e; schema must exist first.
+      # Keep operator migrate above (synthetic CI operator lane). Playwright re-migrates E2E later.
+      - name: Apply migrations 001→012 on E2E DB (Vitest mutative target)
+        env:
+          SFIA_PG_DATABASE: sfia_next_e2e
         run: npm run db:migrate

       - name: Vitest PostgreSQL integration
@@ -294,7 +304,24 @@ jobs:
           npm run test:integration

       - name: Install Playwright Chromium
-        run: npx playwright install --with-deps chromium
+        run: |
+          set -euo pipefail
+          # Retry bounded: GHA runners intermittently fail apt DNS for --with-deps
+          # (Temporary failure resolving security.ubuntu.com). Do not continue-on-error.
+          ok="false"
+          for i in 1 2 3; do
+            echo "Playwright Chromium install attempt ${i}/3…"
+            if npx playwright install --with-deps chromium; then
+              ok="true"
+              break
+            fi
+            echo "Playwright install attempt ${i} failed; waiting before retry…" >&2
+            sleep 20
+          done
+          if [ "${ok}" != "true" ]; then
+            echo "Playwright Chromium install failed after 3 attempts" >&2
+            exit 1
+          fi

       - name: Playwright BROWSER FAKE
         env:
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 55963580..b3b9d9df 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-11-ENV-B-VITEST-PG-GATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-11 (Europe/Paris) |
+| Macro-lot | ML4C / CP2 — ENV-B sécurisation tests PostgreSQL |
+| Type | INC — sûreté dispositif de test (NO RELEASE) |
+| Branch | `fix/next-env-b-vitest-pg-gate` |
+| Parent | main `42aa3739` |
+| Lane | DEV :5433; mutative Vitest → `sfia_next_e2e` only; RECETTE/STABLE untouched |
+| Changes | Fail-closed Vitest PG gate (`e2e-pg-gate` + setup + `db/client`); CI migrates `sfia_next_e2e` before Vitest integration |
+| Schema | unchanged (reuse migrations 001→012 on ephemeral CI E2E DB) |
+| Status | PR readiness — merge soumis à décision Morris — NO RELEASE |
+
 ## delivery_id: DELIV-2026-11-10-ML4-NORA-PR-READINESS-INTEGRATION

 | Field | Value |
```

---

## 7. Validations locales

### 7.1 Unit gate + document-act

```
◇ injected env (21) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111/projects/sfia-studio-next/web

stderr | tests/unit/document-act.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/document-act.test.ts (94 tests) 20ms
stderr | tests/unit/e2e-pg-gate.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e2e-pg-gate.test.ts (8 tests) 3ms

 Test Files  2 passed (2)
      Tests  102 passed (102)
   Start at  16:53:10
   Duration  483ms (transform 74ms, setup 30ms, collect 60ms, tests 22ms, environment 0ms, prepare 68ms)
```

### 7.2 Refuse opérateur (tsx, no network)

```
REFUSE_OPERATOR VITEST_PG_TARGET_FORBIDDEN
PREPARE e2e
```

### 7.3 A05 direct PG + oracle opérateur READ ONLY

```
◇ injected env (21) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111/projects/sfia-studio-next/web

stderr | tests/integration/create-project.pg.test.ts
◇ injected env (0) from .env.local

stderr | tests/integration/create-project.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/create-project.pg.test.ts (17 tests | 16 skipped) 51ms

 Test Files  1 passed (1)
      Tests  1 passed | 16 skipped (17)
   Start at  16:53:19
   Duration  567ms (transform 170ms, setup 14ms, collect 409ms, tests 51ms, environment 0ms, prepare 23ms)
```

Avant :

```
BEGIN
8850|2026-11-11 12:45:55.987538+00
COMMIT
```

Après :

```
BEGIN
8850|2026-11-11 12:45:55.987538+00
COMMIT
```

Identique **8850** / max `created_at` inchangé. tsc PASS ; lint PASS (warnings préexistants hors périmètre) ; build PASS.

---

## 8. CI réelle liée au HEAD final `051aaf36`

| Check | Résultat | Run |
| --- | --- | --- |
| Detect SFIA Studio Next changes | **PASS** | 43063114018 |
| Build and validate SFIA Studio Next | **PASS** (7m37s) | job 130670803034 |
| — Apply migrations E2E (Vitest) | **PASS** | step OK |
| — Vitest PostgreSQL integration | **PASS** | step OK |
| — Playwright BROWSER FAKE | **PASS** | step OK |
| SFIA Studio Next Required Gate | **PASS** | job 130675284749 |
| Detect/Required Gate legacy Studio | PASS / validate skipped (hors Next) | 43063114020 |

URL run Next : https://github.com/mcleland147/sfia-workspace/actions/runs/43063114018

Historique échecs antérieurs (même PR, SHA antérieurs) : Playwright install apt DNS sur Ubuntu 26 — **non lié** au gate ENV-B (E2E migrate + Vitest PG déjà PASS sur `25d6e2fb` / `871953ac`).

---

## 9. Non-régression / environnements

- DEV poste : opérateur non muté (oracle 8850).
- RECETTE / STABLE : non touchés.
- CI : Postgres Docker éphémère synthétique uniquement.
- Nora : FAKE only.
- Branche docs CP2 : non incluse.

---

## 10. Actions non effectuées

Merge ; auto-merge ; ENV-C cleanup ; ENV-D LIVE ; ML4C S01–S07 ; permissions PG ; release/promotion ; push main.

---

## 11. Réserves et décisions Morris

| Réserve | Exit |
| --- | --- |
| Merge PR #675 | **GO Morris explicite** après revue ChatGPT |
| Pin ubuntu-24.04 | conserver jusqu’à stabilisation apt Ubuntu 26 |
| ENV-C cleanup | GO distinct |
| Rôles PG e2e-only | GO ultérieur |
| ML4C build | GO global distinct |

---

## 12. Verdict

**ENV-B FAST-TRACK — PR READY FOR MORRIS MERGE REVIEW**

CI Next Required Gate PASS sur HEAD `051aaf36`. Merge NON autorisé dans ce cycle.

---

## 13. Instruction ChatGPT §9.1

Relire ce handoff canonique distant ; vérifier PR #675 et CI run `43063114018` liés au SHA `051aaf36f02bc05114a4c4240353b62bd96a628c` ; examiner diffs §5–§6 ; puis verdict indépendant. Fusion = GO Morris séparé.

---

## 14. Git Review Index

| Ref | SHA |
| --- | --- |
| main | 42aa373947446a8c20694b06c559ee0da1cba580 |
| ENV-B code | b7166fd8ef99452af33413c2b77a67fc9ed20bac |
| PR HEAD | 051aaf36f02bc05114a4c4240353b62bd96a628c |
| Tree | fc359ccb0aaa22e0e3a8aa2328eadc2fec677976 |
| CI run Next | 43063114018 |
| Handoff ENV-B review antérieur | a44251b5ab26e38b5db16b47536a658467e13ca8 |
