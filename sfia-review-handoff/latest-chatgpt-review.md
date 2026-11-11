# SFIA Studio Next — Review Pack FULL
# ML4C / CP2 — ENV-B — Sécurisation des tests PostgreSQL
# Régularisation handoff : contenu modifié + preuves détaillées

**Date/heure :** 2026-11-11 16:42 CET
**Cycle :** 7 — Intégration / DevOps
**Profil :** Standard — sécurisation dispositif de test
**Macro-lot :** ML4C / CP2 ENV-B
**Versioning :** NO RELEASE
**Publisher :** Cursor
**ENV-C cleanup / ENV-D LIVE / ML4C build :** NON AUTORISÉS
**Push projet / PR / merge :** NON

---

## 1. Git Truth Check

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | `sfia-workspace-ml4c-cp2-t2-diag-20261111` |
| Baseline main | `42aa373947446a8c20694b06c559ee0da1cba580` |
| Branche corrective locale | `fix/next-env-b-vitest-pg-gate` |
| HEAD correctif (local only) | `b7166fd8ef99452af33413c2b77a67fc9ed20bac` |
| Tree | `7c17e56bdfdb1d35ca77adadf4ede21fdcbd5765` |
| Upstream branche | **aucun** — correctif non poussé sur le remote projet |
| Docs CP2 (non modifiée) | `ab0c2ba3affc1556d2e5a57d863af20685509de1` |
| Handoff ENV-01 | `795a6ded899e23e9c6505deaa3725dd8ebf5c388` |
| Handoff ENV-B précédent (incomplet) | `abf6bdf69fd73dbd35a681c005aebade23554723` |
| Ce handoff | régularisation mono-fichier L3 uniquement |

Note ChatGPT : le commit `b7166fd8` n’est **pas** sur GitHub projet. Les diffs complets sont donc **inclus ci-dessous** pour revue indépendante.

---

## 2. Constat corrigé

- Vitest chargeait `.env.local` (souvent `sfia_next_dev`) sans gate mutatif.
- `e2e-pg-gate.ts` protégeait Playwright, pas Vitest.
- Suites continuity acceptaient à tort `/5433|sfia_next_dev/`.

---

## 3. Conception (contrôle centralisé, fail-closed)

1. `vitest.config.ts` → `setupFiles: tests/setup/vitest-pg-target.ts` **avant** collect des tests.
2. Setup : si `DATABASE_URL` absente → no-op (unit) ; si opérateur approuvé → rewrite **process** vers `sfia_next_e2e` (pas d’édition `.env.local`) ; sinon throw.
3. `db/client.ts` : si `VITEST===true`, `assertApprovedVitestMutativeDatabaseUrl` **avant** `postgres()`.
4. Playwright : `assertApprovedOperatorDatabaseUrl` / preflight inchangés.
5. Une seule source de vérité : `e2e-pg-gate.ts` (pas de protections contradictoires).

Complément non modifié ce cycle : droits PostgreSQL (rôle peut encore joindre opérateur et e2e).

---

## 4. Fichiers modifiés (stat)

```
projects/sfia-studio-next/web/README.md                                      |  2 +
projects/sfia-studio-next/web/src/db/client.ts                               |  6 ++
projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts                         | 99 +++++++++++++++++++++-
projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts |  3 +-
projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts |  3 +-
projects/sfia-studio-next/web/tests/setup/vitest-pg-target.ts                | 20 +++++  (NEW)
projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts                 | 50 +++++++++++
projects/sfia-studio-next/web/vitest.config.ts                               |  3 +
8 files changed, 182 insertions(+), 4 deletions(-)
```

---

## 5. Diff complet (exploitable) — `42aa3739..b7166fd8`

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

## 6. Preuves A–G (détail)

### 6.1 Preuves A/B/C — unit gate (pas de réseau, pas d’écriture)

Commande : `npx vitest run tests/unit/e2e-pg-gate.test.ts tests/unit/document-act.test.ts`

Transcript (cycle initial) :

```
◇ injected env (21) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111/projects/sfia-studio-next/web

stderr | tests/unit/document-act.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/document-act.test.ts (94 tests) 18ms
stderr | tests/unit/e2e-pg-gate.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e2e-pg-gate.test.ts (8 tests) 2ms

 Test Files  2 passed (2)
      Tests  102 passed (102)
   Start at  16:36:55
   Duration  361ms (transform 54ms, setup 20ms, collect 44ms, tests 19ms, environment 0ms, prepare 51ms)
```

Re-capture régularisation (mêmes suites) :

```
◇ injected env (21) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111/projects/sfia-studio-next/web

stderr | tests/unit/document-act.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/document-act.test.ts (94 tests) 21ms
stderr | tests/unit/e2e-pg-gate.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e2e-pg-gate.test.ts (8 tests) 2ms

 Test Files  2 passed (2)
      Tests  102 passed (102)
   Start at  16:41:30
   Duration  364ms (transform 52ms, setup 20ms, collect 44ms, tests 23ms, environment 0ms, prepare 49ms)
```

Couverture tests ajoutés dans `e2e-pg-gate.test.ts` :
- A : `assertApprovedVitestMutativeDatabaseUrl(operator)` → `VITEST_PG_TARGET_FORBIDDEN`
- B : missing / invalid / recette name / port 5434 / host non-loopback → refus
- C : `…/sfia_next_e2e` sur `:5433` accepté
- prepare : operator → e2e in-memory ; `other_db` → `E2E_PG_SOURCE_DB_FORBIDDEN`
- F : tests Playwright gate existants toujours dans le même fichier (8 tests total fichier) → PASS

### 6.2 Refuse opérateur hors Vitest (node/tsx, aucune connexion)

```
REFUSE_OPERATOR VITEST_PG_TARGET_FORBIDDEN
REFUSE_MISSING VITEST_PG_URL_MISSING
PREPARE_RESULT_DB sfia_next_e2e
```

### 6.3 Preuve D+C — lancement direct suite PG mutative (A05)

Commande : `npx vitest run tests/integration/create-project.pg.test.ts -t A05`

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
   Start at  16:37:07
   Duration  684ms (transform 174ms, setup 15ms, collect 419ms, tests 51ms, environment 0ms, prepare 28ms)
```

Setup Vitest a réécrit la cible process vers e2e ; 1 test PASS / 16 skipped.

### 6.4 Preuve E — unit sans dépendance PG bloquante

`document-act.test.ts` : 94 PASS dans le même run unit (102 total avec gate).

### 6.5 Preuve G — aucune écriture opérateur (lecture seule)

Oracle READ ONLY sur `sfia_next_dev` : `SELECT count(*), max(created_at) FROM pilots` (transaction BEGIN/COMMIT lecture).

Avant A05 :

```
BEGIN
8850
2026-11-11 12:45:55.987538+00
COMMIT
```

Après A05 :

```
BEGIN
8850
2026-11-11 12:45:55.987538+00
COMMIT
```

Identique : **8850** pilots ; max `created_at` = `2026-11-11 12:45:55.987538+00` inchangé.
A05 a créé sur e2e (observation cycle : +1 création récente sur `sfia_next_e2e`, non sur opérateur).
Aucune écriture de contrôle volontaire sur `sfia_next_dev`.

### 6.6 Preuve F — Playwright

Aucun changement de contrat Playwright ; unit tests `assertApprovedOperatorDatabaseUrl` / `buildE2eDatabaseUrl` / container mapping : PASS dans `e2e-pg-gate.test.ts`.
Pas de campagne E2E LIVE ce cycle (ENV-D non autorisé).

---

## 7. Non-régression / environnements

- DEV PG `:5433` observé ; RECETTE `:5434` / STABLE non mutés.
- `.env.local` non réécrit pour basculer les lanes.
- Branche locale seulement ; main / docs CP2 non poussés.

---

## 8. Réserves et décisions Morris

| Réserve | Exit |
| --- | --- |
| Correctif non sur GitHub projet | GO push/PR distinct si certification nécessite clone distant du code |
| ENV-C cleanup 25 pilots | GO CLEANUP distinct |
| Séparation rôles PG | GO ultérieur |
| ENV-D LIVE | non autorisé |
| ML4C build global | non autorisé |

---

## 9. Actions non exécutées

Cleanup ; LIVE Nora ; mutation RECETTE/STABLE ; permissions PG ; push/PR/merge projet ; redéveloppement.

---

## 10. Verdict Cursor

**ENV-B IMPLEMENTED — SAFETY VERIFIED** (comportement démontré localement + diffs/preuves inclus dans ce handoff pour revue indépendante).

Verdict ChatGPT antérieur sur handoff incomplet : `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` — adressé par cette régularisation.

---

## 11. Instruction ChatGPT §9.1

Avant revue : lire à distance `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier :
1. présence du **diff complet** §5 (`42aa3739..b7166fd8`) ;
2. transcripts preuves §6 (unit 102, refuse `VITEST_PG_TARGET_FORBIDDEN`, A05 PG, oracle 8850) ;
3. absence de push projet ;
4. réserves §8.
Puis statuer ENV-B (certification indépendante) et préparer éventuellement la reprise ML4C.

---

## 12. Git Review Index

| Ref | SHA |
| --- | --- |
| main baseline | 42aa373947446a8c20694b06c559ee0da1cba580 |
| Correctif local HEAD | b7166fd8ef99452af33413c2b77a67fc9ed20bac |
| Tree | 7c17e56bdfdb1d35ca77adadf4ede21fdcbd5765 |
| ENV-01 handoff | 795a6ded899e23e9c6505deaa3725dd8ebf5c388 |
| Docs CP2 | ab0c2ba3affc1556d2e5a57d863af20685509de1 |
| Handoff ENV-B incomplet (précédent) | abf6bdf69fd73dbd35a681c005aebade23554723 |
