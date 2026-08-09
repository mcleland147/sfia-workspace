# Cycle 8 Standard — T7 PostgreSQL Test Isolation CI Remediation — Review Pack (Light)

**Date/heure (CEST):** 2026-08-09 12:27:48 CEST
**Date/heure (UTC):** 2026-08-09 10:27:48 UTC
**Baseline:** SFIA v2.6

## Décision Morris

```text
GO CI REMEDIATION — T7 POSTGRES TEST ISOLATION — SHARED ADVISORY LOCK FOR FINOPS_ROLLOUT_CONFIG SUITES — TEST-ONLY — NO OPERATOR RUNTIME CHANGE — NO REAL ACTIVATION.
```

## Git Truth

```text
branch = delivery/sfia-studio-finops-t7-shadow-activation-operator
HEAD / remote branch = 12d3e10c4a9f57b6548779a030131af89b75066a
origin/main = bb52624e4de6aa19a7d68205af053596bf599a1a
local uncommitted TEST-ONLY diffs = 2 files
project commit/push/PR update/merge = NO
```

## Handoff entrant

```text
tip  = a95fdae522ec630a1ef17aa824dcc8ecdf18d060
blob = 0a0d3bfabe23ded22bba82ce19a129c950bf6d08
status = MATCHED
```

## Diagnostic CI (run 31307867952)

- typecheck/lint/build/unit PASS
- FinOps T1 migrate up PASS
- failure in `npm run test:db` concurrent T7 suites on `finops_rollout_config`
- symptoms: relation missing / revision reset / expected-mode mismatch / C08 contamination
- cause: activation-operator + option-a wiring suites lacked shared advisory lock held by rollout + foundation-runtime

## Sources

- t7.rollout.integration.test.ts — lock present (reference)
- t7.foundation-runtime.integration.test.ts — lock present (reference)
- t7.shadow-activation-operator.integration.test.ts — lock absent → FIXED
- t7.shadow-option-a.wiring.integration.test.ts — lock absent → FIXED

## Exact 2-path subject

1. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`
2. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

## Diff utile complet

### activation-operator

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
index 1733750..414b8a6 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
@@ -5,7 +5,7 @@
  * Ephemeral local Postgres only — never Neon / shared / production.
  */
 import { afterAll, beforeAll, describe, expect, it } from "vitest";
-import type { Pool } from "pg";
+import type { Pool, PoolClient } from "pg";
 import {
   closeFinOpsPool,
   createFinOpsPool,
@@ -23,10 +23,16 @@ const PILOT = "sfia-studio-ops1";

 describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
   let pool: Pool;
+  let lockClient: PoolClient;
   const store = () => createPostgresFinOpsRolloutStore(pool);

   beforeAll(async () => {
+    // max includes lock client — serialize vs other T7 suites on finops_rollout_config.
     pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
+    lockClient = await pool.connect();
+    await lockClient.query(
+      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
+    );
     await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
       PILOT,
     ]);
@@ -41,6 +47,14 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
     } catch {
       // ignore
     }
+    try {
+      await lockClient.query(
+        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
+      );
+    } catch {
+      // ignore
+    }
+    lockClient.release();
     await closeFinOpsPool(pool);
   });
```

### wiring

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
index 57bb0e5..1beb631 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
@@ -6,7 +6,7 @@
  * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
  */
 import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
-import type { Pool } from "pg";
+import type { Pool, PoolClient } from "pg";
 import { getFixture } from "@/lib/oa/execution-run";
 import {
   composeExecutionRunD2D3T7ShadowPilot,
@@ -123,10 +123,16 @@ function coordinateInput(projectId: string, suffix: string) {

 describeDb("T7 SHADOW Option A — wiring integration", () => {
   let pool: Pool;
+  let lockClient: PoolClient;
   const clockIso = "2026-08-08T16:10:00.000Z";

   beforeAll(async () => {
+    // Session-scoped lock — serialize finops_rollout_config vs other T7 suites.
     pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
+    lockClient = await pool.connect();
+    await lockClient.query(
+      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
+    );
     await pool.query(`SELECT 1`);
   });

@@ -139,6 +145,14 @@ describeDb("T7 SHADOW Option A — wiring integration", () => {
       `DELETE FROM finops_enforcement_projection WHERE project_id = ANY($1::text[])`,
       [[PILOT, OTHER]],
     );
+    try {
+      await lockClient.query(
+        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
+      );
+    } catch {
+      // ignore
+    }
+    lockClient.release();
     await closeFinOpsPool(pool);
   });
```

## Shared advisory lock

```text
key = hashtext('finops-t7-rollout-table')
acquire = SELECT pg_advisory_lock(...) on dedicated PoolClient in beforeAll
hold = entire suite
cleanup under lock = YES
unlock = SELECT pg_advisory_unlock(...) then release then closeFinOpsPool
```

## SHA256 PRE/POST

### PRE
```text
49f7ff66f7b5de61e06b24a966ec111456dd170a2091d78a0025af39fd3c5c88  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
10fd61280c98c62c85ef355d40c05c73131151593e91b9808c3f57f04065b7d6  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
```

### POST
```text
0e45dc91f174c5b4b429fe5fb5092d6b04fd38a37025e4e4e8a58d6ce46f619b  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
35c3ef229bd709f0382ee6dacafaf7a1e5f0bb5b166946748200b2fa06f19c34  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
```

## Tests

### Four-suite run #1
```text
 ✓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (12 tests) 81ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 98ms
 ✓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests) 83ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 155ms
 Test Files  4 passed (4)
      Tests  59 passed (59)
   Duration  628ms (transform 267ms, setup 232ms, collect 478ms, tests 418ms, environment 0ms, prepare 157ms)
FOUR1_EXIT=0
FOUR1_EXIT from log: see file
```

### Four-suite run #2
```text
 ✓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (12 tests) 84ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 99ms
 ✓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests) 93ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 170ms
 Test Files  4 passed (4)
      Tests  59 passed (59)
   Duration  539ms (transform 245ms, setup 117ms, collect 430ms, tests 445ms, environment 0ms, prepare 130ms)
FOUR2_EXIT=0
```

### npm run test:db
```text
 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 98ms
 ✓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (12 tests) 134ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 106ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 164ms
 ✓ __tests__/oa/finops/postgres/t3.alert-review.integration.test.ts (7 tests) 167ms
 ✓ __tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts (14 tests) 169ms
 ✓ __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts (8 tests) 216ms
 ✓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests) 251ms
 ✓ __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts (4 tests) 39ms
 ✓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests) 44ms
 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 51ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 214ms
 Test Files  12 passed (12)
      Tests  116 passed (116)
   Duration  900ms (transform 648ms, setup 562ms, collect 1.47s, tests 1.65s, environment 5ms, prepare 599ms)
TESTDB_EXIT=0
```

### typecheck / lint / diff-check
```text
typecheck PASS
lint PASS
git diff --check PASS
```

## Decisions

```text
FULL REGRESSION = NOT REQUIRED — NO SIGNAL
BUILD = NOT REQUIRED — TEST-ONLY / PREVIOUS CI BUILD PASS
```

## Garde-fous

```text
runtime bytes changed = NO
migration changed = NO
CI workflow changed = NO
assertions métier unchanged = YES
project commit/push/PR update/merge = NO
```

## Reserves

- R-T7-OP-TARGET-BINDING-01 = OPEN MINOR
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR (carried)
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
```

## Next Morris gate

```text
GO LOCAL COMMIT + PUSH CI REMEDIATION TO PR #324 —
EXACT 2-FILE TEST-ONLY FIX —
NO REAL ACTIVATION.
```

## Verdict

```text
T7 POSTGRES TEST ISOLATION CI REMEDIATION VALIDATED —
CYCLE 8 STANDARD —
EXACT 2-PATH TEST-ONLY FIX —
SHARED FINOPS_ROLLOUT_CONFIG ADVISORY LOCK APPLIED —
RUNTIME BYTES UNCHANGED —
MIGRATION UNCHANGED —
CI WORKFLOW UNCHANGED —
TARGETED T7 CONCURRENT SUITES PASS —
NPM RUN TEST:DB PASS —
TYPECHECK/LINT PASS —
NO FULL REGRESSION SIGNAL —
R-T7-OP-TARGET-BINDING-01 OPEN MINOR —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
ACTIVATION TARGET NOT SELECTED —
NO PROJECT COMMIT/PUSH/PR UPDATE/MERGE —
READY FOR MORRIS GO LOCAL COMMIT + PUSH CI REMEDIATION TO PR #324 —
HANDOFF REMOTE VERIFIED
```
