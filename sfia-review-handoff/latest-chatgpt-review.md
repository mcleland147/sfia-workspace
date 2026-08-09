# Cycle 9 Critical — FinOps T7 Expected-Mode CAS Remediation — Targeted QA — Review Pack

**Level:** FULL
**Date/time:** 2026-08-09 16:26:59 CEST / 2026-08-09 14:26:59 UTC
**Repo:** mcleland147/sfia-workspace
**Baseline:** SFIA v2.6 / 34b6a321a69e0315f410ac0876cd5e9734a77206
**Profile:** Critical
**Typologie:** EVOL / QA / CONCURRENCY SAFETY

---

## 1. Morris GO (exact)

GO TARGETED CYCLE 9 QA —
T7 EXPECTED-MODE CAS REMEDIATION —
EXACT DELIVERY SUBJECT —
PROVE STALE ACTOR ZERO MUTATION —
PROVE ABSENT + EXISTING CONCURRENCY CAS —
VERIFY ROLLBACK CAS —
REAL TARGET DRY-RUN ONLY —
NO SHADOW ACTIVATION.

---

## 2. Git Truth initial / final

Initial & final identical:
- branch = delivery/sfia-studio-finops-t7-expected-mode-cas-remediation
- HEAD = 34b6a321a69e0315f410ac0876cd5e9734a77206
- origin/main = 34b6a321a69e0315f410ac0876cd5e9734a77206
- remote CAS branch = ABSENT
- staged = NONE
- project commit/push/PR = ZERO
- versioned changes = exact 6 paths (5 M + 1 ?? 162)
- .tmp-sfia-review/** untracked only (QA harness)

---

## 3. Template / routing / checklist / CKC

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- method/.../04-cycle-to-ckc-routing-matrix.md
- method/.../pilots/04-qa-validation.md
- cycle 9 QA / validation · CKC candidate · no execution authority

---

## 4. Incoming handoff

- tip = 7ca8d4147c8cc4d4177471ffe27105a94927267e
- blob = f3a89925645a430c6d624f987406534ba548dd25
- Cycle 8 Critical · exact 6 paths · no project commit/push/PR
- FinOpsRolloutCasPort.compareAndSwapProjectRollout
- single CTE: conditional UPDATE + INSERT ON CONFLICT DO NOTHING
- pre-read diagnostic · CAS apply authority · RETURNING primary · no success post-read
- R-T7-OP-EXPECTED-MODE-CAS-01 = RESOLUTION CANDIDATE
- SHADOW NOT ACTIVATED · REAL APPLY ZERO
- MATCH subject = YES

---

## 5. Exact 6 paths + PRE hash lock 6/6

| Path | SHA256 |
|---|---|
| projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts | 97cee2f8bac5099ed67c470b458c96ce387f73a24bbc044852d2f6d5e8ca669d |
| projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts | f8b802481970176c6a6ed83df40d64418014c0b4cae13167ecd9699305b965af |
| projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts | 78d237d7127d894f78b39d48c43b909d29152a9c31b79745d3af39b2f62245c5 |
| projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts | c3d26627c6016863a464f20f62971953c5a3e6c87b6c4a9960f032af5c837b02 |
| projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts | 1c27b1c97521fecebd577f686c80f7fa2c9f20ba1a32a19d59d4a5e92b580e8d |
| projects/sfia-studio/162-assistant-sfia-native-openai-finops-t7-expected-mode-cas-remediation-execution.md | b038ac1c7c17eca751339a6919181a752974953e30fbd78de064a716d1bbd26f |

PRE_QA_HASH_LOCK = 6/6 MATCH (identical to Cycle 8 validated handoff hashes).
QA did not modify any Delivery path.

---

## 6. Static S01–S16

| ID | Result | Evidence |
|---|---|---|
| S01 | PASS | FinOpsRolloutPort read+upsert retained |
| S02 | PASS | CompareAndSwapProjectRolloutInput expectedMode+expectedRevision |
| S03 | PASS | createPostgresFinOpsRolloutStore → FinOpsRolloutCasPort |
| S04 | PASS | WHERE r.mode = e.expected_mode AND r.revision = e.expected_revision |
| S05 | PASS | INSERT only when expected_revision IS NULL AND expected_mode = OFF |
| S06 | PASS | ON CONFLICT DO NOTHING |
| S07 | PASS | first-write revision = 1 |
| S08 | PASS | existing success revision = durable + 1 |
| S09 | PASS | CAS mismatch returns null |
| S10 | PASS | operator apply calls compareAndSwapProjectRollout only |
| S11 | PASS | expectedRevision: beforeRevision |
| S12 | PASS | CAS null → EXPECTED_MODE_MISMATCH |
| S13 | PASS | RETURNING row mode/revision checked |
| S14 | PASS | no success-path re-read |
| S15 | PASS | dry-run returns before CAS |
| S16 | PASS | no migration / lock table / new dependency |

SCOPE_DISCIPLINE = PASS

---

## 7. SQL atomicity findings

ATOMIC_STATEMENT = YES
CHECK_AND_WRITE_COUPLED = YES
EXPECTED_MODE_IN_WRITE_PREDICATE = YES
EXPECTED_REVISION_IN_WRITE_PREDICATE = YES
ABSENT_FIRST_WRITER_UNIQUE_CONSTRAINT = YES
APPLICATION_PRE_READ_IS_FINAL_AUTHORITY = NO
POST_READ_IS_CAS_SUBSTITUTE = NO

---

## 8. Unit tests

t7.shadow-activation-operator.unit.test.ts — 14/14 PASS
U-CAS01..U-CAS10 covered (dry-run zero CAS; OFF/null; rev N; non-match; success; POST_APPLY; SHADOW→OFF; early mismatch no CAS; guards).

---

## 9. PG-CAS01–08

Versioned integration suite 19/19 PASS including PG-CAS01–08.

---

## 10–13. Independent harness concurrency (sanitized)

ABSENT_CONCURRENCY_ROUNDS = 20/20 PASS · SECOND_MUTATION_COUNT = 0
EXISTING_CONCURRENCY_ROUNDS = 20/20 PASS · N_PLUS_2_COUNT = 0
STALE_PRE_READ_SAFE = YES (capturedRev=1 → advance → CAS null → EXPECTED_MODE_MISMATCH → final OFF rev2, no SHADOW from stale)
Direct probes D01–D08 PASS (null + unchanged)
RETURNING proof: SUCCESS_PROOF=CAS_RETURNING · STRICT_SUCCESS_POST_READ=ABSENT
Rollback functional PASS · stale rollback ZERO · ROLLBACK_CONCURRENCY=10/10
Dry-run casOnDry=0

Harness summary:
```json
{
  "directProbes": {
    "D01_staleOldRev": {
      "cas": null,
      "unchanged": true
    },
    "D02_futureRev": {
      "cas": null,
      "unchanged": true
    },
    "D03_wrongMode": {
      "cas": null,
      "unchanged": true
    },
    "D04_existingNullRev": {
      "cas": null,
      "unchanged": true
    },
    "D05_absentShadowNull": {
      "cas": null,
      "row": null
    },
    "D07_nonPositive": {
      "cas": null,
      "unchanged": true
    },
    "D08_otherProjectAbsent": true
  },
  "stalePreRead": {
    "capturedRev": 1,
    "casInputRev": 1,
    "outcome": {
      "ok": false,
      "code": "EXPECTED_MODE_MISMATCH"
    },
    "final": {
      "projectId": "sfia-studio-ops1",
      "mode": "OFF",
      "revision": 2,
      "updatedAt": "2026-08-09T12:11:01.000Z"
    },
    "STALE_PRE_READ_SAFE": true
  },
  "returningProof": {
    "actorA_success": true,
    "actorB_later": true,
    "SUCCESS_PROOF": "CAS_RETURNING",
    "STRICT_SUCCESS_POST_READ": "ABSENT"
  },
  "absentConcurrency": {
    "ABSENT_CONCURRENCY_ROUNDS": "20/20",
    "SECOND_MUTATION_COUNT": 0
  },
  "absent_fail_rounds": [],
  "existingConcurrency": {
    "EXISTING_CONCURRENCY_ROUNDS": "20/20",
    "N_PLUS_2_COUNT": 0
  },
  "existing_fail_rounds": [],
  "rollback": {
    "functional": true,
    "staleNull": true,
    "final": {
      "projectId": "sfia-studio-ops1",
      "mode": "OFF",
      "revision": 2,
      "updatedAt": "2026-08-09T12:30:01.000Z"
    },
    "STALE_ROLLBACK_MUTATION": "ZERO"
  },
  "rollbackConcurrency": {
    "ROLLBACK_CONCURRENCY": "10/10"
  },
  "rollback_fail_rounds": [],
  "dryRun": {
    "dry": {
      "ok": true,
      "targetLabel": "dry",
      "projectId": "sfia-studio-ops1",
      "requestedMode": "SHADOW",
      "expectedMode": "OFF",
      "beforeEffectiveMode": "OFF",
      "beforeRevision": null,
      "afterMode": "OFF",
      "afterRevision": null,
      "updatedAt": null,
      "applied": false,
      "result": "dry_run"
    },
    "casOnDry": 0,
    "zeroCas": true,
    "row": null
  }
}
```

---

## 14. Local DB cleanup

LOCAL_QA_DB_DESTROYED = YES
LEFTOVER_CONTAINER = NO

---

## 15. Neon fingerprint / OFF / dry-run / zero mutation

Before:
```
{"fingerprintMatch":true,"actualFingerprint":"7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331","safeIdentity":"host=ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech\nport=5432\ndatabase=neondb","ROW_EXISTS":false,"MODE":null,"REVISION":null,"EFFECTIVE_MODE":"OFF","ROW_COUNT":0}
```

Dry-run (no --apply):
```
> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331

{
  "ok": true,
  "targetLabel": "neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "updatedAt": null,
  "applied": false,
  "result": "dry_run"
}
```

After:
```
{"fingerprintMatch":true,"actualFingerprint":"7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331","safeIdentity":"host=ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech\nport=5432\ndatabase=neondb","ROW_EXISTS":false,"MODE":null,"REVISION":null,"EFFECTIVE_MODE":"OFF","ROW_COUNT":0}
```

REAL_TARGET_MUTATION = ZERO · ROW_COUNT 0→0 · EFFECTIVE_MODE OFF

---

## 16. Bounds / non-regression / quality

Pilot-only / OFF|SHADOW / MONITOR+E1 reject / no-op / fingerprint / empty policy / signal-only / PRE∧POST — unchanged.
Related suites 75 PASS · typecheck PASS · lint PASS · build PASS

---

## 17. Q01–Q20

| ID | Verdict |
|---|---|
| Q01 PRE hash lock 6/6 | PASS |
| Q02 exact scope 6 | PASS |
| Q03 static CAS API | PASS |
| Q04 SQL expectedMode predicate | PASS |
| Q05 SQL expectedRevision predicate | PASS |
| Q06 absent first-writer | PASS |
| Q07 PG-CAS01–08 | PASS |
| Q08 absent concurrency single mutation | PASS |
| Q09 absent 20/20 | PASS |
| Q10 existing N+1 | PASS |
| Q11 existing 20/20 | PASS |
| Q12 stale pre-read zero mutation | PASS |
| Q13 stale direct store probes | PASS |
| Q14 rollback functional | PASS |
| Q15 rollback stale zero | PASS |
| Q16 rollback concurrency 10/10 | PASS |
| Q17 dry-run zero CAS | PASS |
| Q18 Neon OFF + dry-run zero | PASS |
| Q19 non-regression + quality | PASS |
| Q20 POST hash lock 6/6 | PASS |

---

## 18. POST hash lock 6/6

Identical to PRE / Cycle 8 validated hashes (listed §5).
POST_QA_HASH_LOCK = 6/6

---

## 19. Document 162 (complete; byte-identical to PRE lock)

```markdown
# 162 — FinOps T7 Expected-Mode CAS Remediation — Execution

**Date/time:** 2026-08-09 16:04:17 CEST / 2026-08-09 14:04:17 UTC
**Repo:** mcleland147/sfia-workspace
**Baseline:** 34b6a321a69e0315f410ac0876cd5e9734a77206 (SFIA v2.6)
**Branch (local only):** delivery/sfia-studio-finops-t7-expected-mode-cas-remediation
**Cycle:** 8 — Delivery / implémentation
**Profile:** Critical

## Morris decision (exact)

GO T7 EXPECTED-MODE CAS REMEDIATION —
sfia-studio-ops1 —
IMPLEMENT MINIMAL ATOMIC EXPECTED-MODE / REVISION COMPARE-AND-SWAP —
PRESERVE OFF|SHADOW PILOT BOUNDS —
NO REAL TARGET APPLY —
NO SHADOW ACTIVATION.

## Problem (Cycle 9 TOCTOU)

Cycle 9 Critical proved:

readProjectRollout → application expected-mode check → unconditional upsert → post-read.

Two concurrent actors both pre-read ABSENT/OFF, both wrote, durable revision became 2, both failed only via POST_APPLY_MISMATCH after mutation.

EXPECTED_MODE_CAS = NOT ATOMIC · TOCTOU = PRESENT · R-T7-OP-EXPECTED-MODE-CAS-01 OPEN BLOCKING.

## Architecture before

- FinOpsRolloutPort: read + unconditional upsert
- Operator apply authority = pre-read check + upsert
- Post-read used as mismatch detector (too late)

## Architecture after

- FinOpsRolloutPort unchanged for generic upsert/read consumers
- FinOpsRolloutCasPort extends FinOpsRolloutPort with compareAndSwapProjectRollout
- Operator apply authority = atomic CAS with (expectedMode, expectedRevision)
- Dry-run: zero CAS / zero upsert
- RETURNING row is primary success proof; no success-path post-read (avoids false POST_APPLY_MISMATCH when a later actor advances revision)

## CAS API

```
compareAndSwapProjectRollout({
  projectId,
  expectedMode,
  expectedRevision, // null = expect absent (effective OFF first-writer)
  mode,
  updatedAt,
}) -> FinOpsRolloutConfig | null
```

null = precondition not matched · zero mutation.

## Absent / OFF / null semantics

- expectedMode=OFF + expectedRevision=null → conditional INSERT revision=1 · ON CONFLICT DO NOTHING
- expectedRevision=null + expectedMode≠OFF → null (zero write)
- existing row + expectedRevision=null → null (ON CONFLICT DO NOTHING)

## Existing mode/revision semantics

- UPDATE WHERE project_id AND mode=expectedMode AND revision=expectedRevision
- success → mode=requested, revision=N+1
- mismatch mode or revision → null

## SQL atomicity contract

Single CTE statement: conditional UPDATE union conditional INSERT … ON CONFLICT DO NOTHING.
Unique(project_id) guarantees exactly one first-writer.
No migration. No advisory lock. No SERIALIZABLE required.

## Operator apply flow

1. Guards (pilot / mode / expected / target / no-op)
2. Pre-read diagnostic (beforeEffectiveMode / beforeRevision)
3. Early expected-mode mismatch → fail closed, no CAS
4. apply=false → dry_run
5. apply=true → compareAndSwap(expectedMode, beforeRevision, requestedMode)
6. CAS null → EXPECTED_MODE_MISMATCH (durable state changed)
7. CAS row mode/revision ≠ expectedAfter → POST_APPLY_MISMATCH
8. else applied=true

## Dry-run unchanged

result=dry_run · applied=false · afterMode=before · afterRevision=before · zero CAS

## Files (exact 6)

1. ports/finopsRolloutPort.ts (MODIFY)
2. postgresFinOpsRolloutStore.ts (MODIFY)
3. operateFinOpsT7ShadowRollout.ts (MODIFY)
4. t7.shadow-activation-operator.unit.test.ts (MODIFY)
5. t7.shadow-activation-operator.integration.test.ts (MODIFY)
6. this document 162 (CREATE)

## Evidence summary

- Units: U-CAS01..U-CAS10 + prior guards PASS (14)
- PG-CAS01..PG-CAS08 PASS
- Adversarial absent: 2 pre-reads ABSENT, 2 CAS attempts, exactly 1 success, loser EXPECTED_MODE_MISMATCH, final SHADOW rev=1
- Adversarial existing OFF rev1: exactly 1 success, final SHADOW rev=2 (not 3)
- Rollback: SHADOW→OFF rev2; stale SHADOW/rev1 → zero mutation
- Neon: fingerprint MATCH; effective OFF; dry-run PASS; mutation ZERO
- typecheck / lint / build PASS
- LOCAL_CAS_TEST_DB_DESTROYED=YES

## Secret hygiene

No connection strings. Keychain inject process-only. SECRET_LEAK=NO

## Reserves

- R-T7-OP-EXPECTED-MODE-CAS-01 = RESOLUTION CANDIDATE (not CLOSED)
- R-T7-OP-TARGET-BINDING-01 = VALIDATED RESOLUTION CANDIDATE (unchanged)
- R-T7-SHADOW-OBS-01 = OPEN MINOR (unchanged / out of scope)
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR

## Anti-claims

SHADOW NOT ACTIVATED · REAL NEON APPLY ZERO · POLICY VALUES NOT SELECTED · MONITOR/E1 not authorized · LOCAL CAS PASS ≠ QA PASS ≠ MAIN INTEGRATED ≠ ACTIVATION READY · CAS remediated locally ≠ reserve CLOSED

## Next gate

GO TARGETED CYCLE 9 QA —
T7 EXPECTED-MODE CAS REMEDIATION —
EXACT DELIVERY SUBJECT —
PROVE STALE ACTOR ZERO MUTATION —
PROVE ABSENT + EXISTING CONCURRENCY CAS —
VERIFY ROLLBACK CAS —
REAL TARGET DRY-RUN ONLY —
NO SHADOW ACTIVATION.

```

---

## 20. Complete git diff of 5 modified files (sanitized fixtures)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
index 414b8a6..5ccf6e6 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
@@ -1,7 +1,7 @@
 /**
  * @vitest-environment node
  *
- * FinOps T7 — minimal SHADOW activation operator PostgreSQL integration (PG01..PG07).
+ * FinOps T7 — SHADOW activation operator PostgreSQL integration + CAS proofs.
  * Ephemeral local Postgres only — never Neon / shared / production.
  */
 import { afterAll, beforeAll, describe, expect, it } from "vitest";
@@ -11,6 +11,7 @@ import {
   createFinOpsPool,
 } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
 import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
+import type { FinOpsRolloutCasPort } from "@/lib/oa/finops/ports/finopsRolloutPort";
 import {
   OperateFinOpsT7ShadowRolloutError,
   operateFinOpsT7ShadowRollout,
@@ -21,6 +22,49 @@ const describeDb = DATABASE_URL ? describe : describe.skip;

 const PILOT = "sfia-studio-ops1";

+function barrierCasPort(
+  inner: FinOpsRolloutCasPort,
+  barrierSize: number,
+): FinOpsRolloutCasPort & {
+  preReads: string[];
+  casAttempts: number;
+} {
+  let arrived = 0;
+  let release!: () => void;
+  const gate = new Promise<void>((resolve) => {
+    release = resolve;
+  });
+  let prePhase = true;
+  const preReads: string[] = [];
+  let casAttempts = 0;
+  return {
+    preReads,
+    get casAttempts() {
+      return casAttempts;
+    },
+    async readProjectRollout(projectId: string) {
+      const row = await inner.readProjectRollout(projectId);
+      if (prePhase) {
+        preReads.push(
+          row ? `mode=${row.mode};rev=${row.revision}` : "ABSENT=OFF",
+        );
+        arrived += 1;
+        if (arrived >= barrierSize) release();
+        await gate;
+      }
+      return row;
+    },
+    upsertProjectRollout(input) {
+      return inner.upsertProjectRollout(input);
+    },
+    async compareAndSwapProjectRollout(input) {
+      prePhase = false;
+      casAttempts += 1;
+      return inner.compareAndSwapProjectRollout(input);
+    },
+  };
+}
+
 describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
   let pool: Pool;
   let lockClient: PoolClient;
@@ -28,7 +72,7 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {

   beforeAll(async () => {
     // max includes lock client — serialize vs other T7 suites on finops_rollout_config.
-    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
+    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 8 });
     lockClient = await pool.connect();
     await lockClient.query(
       `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
@@ -92,7 +136,6 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
   });

   it("PG03 before/after read exact", async () => {
-    // Ensure known SHADOW revision 3 from OFF@2
     await operateFinOpsT7ShadowRollout(store(), {
       allowedProjectId: PILOT,
       projectId: PILOT,
@@ -165,7 +208,6 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
   });

   it("PG07 repeated store semantics remain compatible", async () => {
-    // Rollback OFF then SHADOW again — revisions continue monotonically.
     const off = await operateFinOpsT7ShadowRollout(store(), {
       allowedProjectId: PILOT,
       projectId: PILOT,
@@ -190,7 +232,6 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
     expect(shadow.afterMode).toBe("SHADOW");
     expect(shadow.afterRevision).toBe(5);

-    // Final rollback OFF for cleanup hygiene
     const finalOff = await operateFinOpsT7ShadowRollout(store(), {
       allowedProjectId: PILOT,
       projectId: PILOT,
@@ -204,6 +245,283 @@ describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
     expect(finalOff.afterRevision).toBe(6);
   });

+  it("PG-CAS01 absent + OFF/null → SHADOW rev1 SUCCESS", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: null,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:00:00.000Z",
+    });
+    expect(row).toEqual({
+      projectId: PILOT,
+      mode: "SHADOW",
+      revision: 1,
+      updatedAt: expect.any(String),
+    });
+  });
+
+  it("PG-CAS02 absent + SHADOW/null → NO MATCH / ZERO row", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "SHADOW",
+      expectedRevision: null,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:01:00.000Z",
+    });
+    expect(row).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toBeNull();
+  });
+
+  it("PG-CAS03 existing OFF rev1 + OFF/1 → SHADOW rev2", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:02:00.000Z",
+    });
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: 1,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:02:01.000Z",
+    });
+    expect(row).toMatchObject({ mode: "SHADOW", revision: 2 });
+  });
+
+  it("PG-CAS04 existing OFF rev1 + stale expected revision → ZERO mutation", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:03:00.000Z",
+    });
+    const before = await store().readProjectRollout(PILOT);
+    const staleZero = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: 0,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:03:01.000Z",
+    });
+    expect(staleZero).toBeNull();
+    const staleWrong = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: 99,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:03:02.000Z",
+    });
+    expect(staleWrong).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toEqual(before);
+  });
+
+  it("PG-CAS05 existing SHADOW rev1 + expected OFF/1 → ZERO mutation", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:04:00.000Z",
+    });
+    const before = await store().readProjectRollout(PILOT);
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: 1,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:04:01.000Z",
+    });
+    expect(row).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toEqual(before);
+  });
+
+  it("PG-CAS06 existing SHADOW rev1 + SHADOW/1 → OFF rev2", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:05:00.000Z",
+    });
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "SHADOW",
+      expectedRevision: 1,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:05:01.000Z",
+    });
+    expect(row).toMatchObject({ mode: "OFF", revision: 2 });
+  });
+
+  it("PG-CAS07 existing row + expectedRevision null → ZERO mutation", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:06:00.000Z",
+    });
+    const before = await store().readProjectRollout(PILOT);
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: null,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:06:01.000Z",
+    });
+    expect(row).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toEqual(before);
+  });
+
+  it("PG-CAS08 CAS failure leaves mode/revision/updated_at unchanged", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:07:00.000Z",
+    });
+    const before = await store().readProjectRollout(PILOT);
+    const row = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "SHADOW",
+      expectedRevision: 1,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:07:59.000Z",
+    });
+    expect(row).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toEqual(before);
+  });
+
+  it("adversarial absent concurrency — exactly one mutation / rev 1", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    const port = barrierCasPort(store(), 2);
+    const run = async (actor: string) => {
+      try {
+        const result = await operateFinOpsT7ShadowRollout(port, {
+          allowedProjectId: PILOT,
+          projectId: PILOT,
+          requestedMode: "SHADOW",
+          expectedMode: "OFF",
+          targetLabel: "local-cas-adversarial",
+          apply: true,
+          nowIso: () => new Date().toISOString(),
+        });
+        return { actor, ok: true as const, afterRevision: result.afterRevision };
+      } catch (e) {
+        const code =
+          e && typeof e === "object" && "code" in e
+            ? String((e as { code: unknown }).code)
+            : "UNKNOWN";
+        return { actor, ok: false as const, code };
+      }
+    };
+    const [a, b] = await Promise.all([run("A"), run("B")]);
+    const final = await store().readProjectRollout(PILOT);
+    const success = [a, b].filter((x) => x.ok);
+    const fail = [a, b].filter((x) => !x.ok);
+    expect(port.preReads).toEqual(["ABSENT=OFF", "ABSENT=OFF"]);
+    expect(port.casAttempts).toBe(2);
+    expect(success).toHaveLength(1);
+    expect(fail).toHaveLength(1);
+    expect(fail[0]).toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
+    expect(final).toMatchObject({ mode: "SHADOW", revision: 1 });
+  });
+
+  it("adversarial existing-row concurrency — exactly one mutation / N+1", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().upsertProjectRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:20:00.000Z",
+    });
+    const port = barrierCasPort(store(), 2);
+    const run = async (actor: string) => {
+      try {
+        const result = await operateFinOpsT7ShadowRollout(port, {
+          allowedProjectId: PILOT,
+          projectId: PILOT,
+          requestedMode: "SHADOW",
+          expectedMode: "OFF",
+          targetLabel: "local-cas-existing",
+          apply: true,
+          nowIso: () => new Date().toISOString(),
+        });
+        return { actor, ok: true as const, afterRevision: result.afterRevision };
+      } catch (e) {
+        const code =
+          e && typeof e === "object" && "code" in e
+            ? String((e as { code: unknown }).code)
+            : "UNKNOWN";
+        return { actor, ok: false as const, code };
+      }
+    };
+    const [a, b] = await Promise.all([run("A"), run("B")]);
+    const final = await store().readProjectRollout(PILOT);
+    expect(port.preReads.every((r) => r === "mode=OFF;rev=1")).toBe(true);
+    expect([a, b].filter((x) => x.ok)).toHaveLength(1);
+    expect([a, b].filter((x) => !x.ok)[0]).toMatchObject({
+      code: "EXPECTED_MODE_MISMATCH",
+    });
+    expect(final).toMatchObject({ mode: "SHADOW", revision: 2 });
+  });
+
+  it("rollback CAS — SHADOW→OFF then stale SHADOW/rev1 zero mutation", async () => {
+    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
+      PILOT,
+    ]);
+    await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "OFF",
+      expectedRevision: null,
+      mode: "SHADOW",
+      updatedAt: "2026-08-09T09:30:00.000Z",
+    });
+    const rollback = await operateFinOpsT7ShadowRollout(store(), {
+      allowedProjectId: PILOT,
+      projectId: PILOT,
+      requestedMode: "OFF",
+      expectedMode: "SHADOW",
+      targetLabel: "local-rollback",
+      apply: true,
+      nowIso: () => "2026-08-09T09:30:01.000Z",
+    });
+    expect(rollback).toMatchObject({ afterMode: "OFF", afterRevision: 2 });
+
+    const stale = await store().compareAndSwapProjectRollout({
+      projectId: PILOT,
+      expectedMode: "SHADOW",
+      expectedRevision: 1,
+      mode: "OFF",
+      updatedAt: "2026-08-09T09:30:02.000Z",
+    });
+    expect(stale).toBeNull();
+    expect(await store().readProjectRollout(PILOT)).toMatchObject({
+      mode: "OFF",
+      revision: 2,
+    });
+  });
+
   it("operator error type is exportable for CLI", () => {
     expect(OperateFinOpsT7ShadowRolloutError.name).toBe(
       "OperateFinOpsT7ShadowRolloutError",
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
index 1bf906c..dd46a1f 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
@@ -1,11 +1,14 @@
 /**
  * @vitest-environment node
  *
- * FinOps T7 — minimal SHADOW activation operator unit tests (U01..U08).
+ * FinOps T7 — SHADOW activation operator unit tests (guards + CAS apply path).
  */
 import { describe, expect, it } from "vitest";
 import type { FinOpsRolloutConfig } from "@/lib/oa/finops/application/types.rollout";
-import type { FinOpsRolloutPort } from "@/lib/oa/finops/ports/finopsRolloutPort";
+import type {
+  CompareAndSwapProjectRolloutInput,
+  FinOpsRolloutCasPort,
+} from "@/lib/oa/finops/ports/finopsRolloutPort";
 import {
   OperateFinOpsT7ShadowRolloutError,
   operateFinOpsT7ShadowRollout,
@@ -13,17 +16,25 @@ import {

 const PILOT = "sfia-studio-ops1";

-function memoryRollout(
+function memoryCasRollout(
   initial: FinOpsRolloutConfig | null = null,
-): FinOpsRolloutPort & { upserts: number; reads: number } {
+): FinOpsRolloutCasPort & {
+  upserts: number;
+  reads: number;
+  casCalls: CompareAndSwapProjectRolloutInput[];
+  casResultOverride: FinOpsRolloutConfig | null | undefined;
+} {
   let row = initial;
   const port = {
     upserts: 0,
     reads: 0,
+    casCalls: [] as CompareAndSwapProjectRolloutInput[],
+    /** When set (including null), CAS returns this instead of computing. */
+    casResultOverride: undefined as FinOpsRolloutConfig | null | undefined,
     async readProjectRollout(projectId: string) {
       port.reads += 1;
       if (!projectId.trim()) return null;
-      return row && row.projectId === projectId ? row : null;
+      return row && row.projectId === projectId ? { ...row } : null;
     },
     async upsertProjectRollout(input: {
       projectId: string;
@@ -40,13 +51,45 @@ function memoryRollout(
       };
       return row;
     },
+    async compareAndSwapProjectRollout(input: CompareAndSwapProjectRolloutInput) {
+      port.casCalls.push(input);
+      if (port.casResultOverride !== undefined) {
+        return port.casResultOverride;
+      }
+      const current =
+        row && row.projectId === input.projectId.trim() ? row : null;
+      if (input.expectedRevision === null) {
+        if (input.expectedMode !== "OFF" || current !== null) return null;
+        row = {
+          projectId: input.projectId.trim(),
+          mode: input.mode,
+          revision: 1,
+          updatedAt: input.updatedAt,
+        };
+        return row;
+      }
+      if (
+        !current ||
+        current.mode !== input.expectedMode ||
+        current.revision !== input.expectedRevision
+      ) {
+        return null;
+      }
+      row = {
+        projectId: current.projectId,
+        mode: input.mode,
+        revision: current.revision + 1,
+        updatedAt: input.updatedAt,
+      };
+      return row;
+    },
   };
   return port;
 }

 describe("T7 SHADOW activation operator — unit", () => {
   it("U01 wrong project → reject", async () => {
-    const port = memoryRollout();
+    const port = memoryCasRollout();
     await expect(
       operateFinOpsT7ShadowRollout(port, {
         allowedProjectId: PILOT,
@@ -58,11 +101,12 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "INVALID_PROJECT" });
+    expect(port.casCalls).toHaveLength(0);
     expect(port.upserts).toBe(0);
   });

   it("U02 MONITOR → reject", async () => {
-    const port = memoryRollout();
+    const port = memoryCasRollout();
     await expect(
       operateFinOpsT7ShadowRollout(port, {
         allowedProjectId: PILOT,
@@ -74,11 +118,11 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "INVALID_MODE" });
-    expect(port.upserts).toBe(0);
+    expect(port.casCalls).toHaveLength(0);
   });

   it("U03 E1 → reject", async () => {
-    const port = memoryRollout();
+    const port = memoryCasRollout();
     await expect(
       operateFinOpsT7ShadowRollout(port, {
         allowedProjectId: PILOT,
@@ -90,11 +134,11 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "INVALID_MODE" });
-    expect(port.upserts).toBe(0);
+    expect(port.casCalls).toHaveLength(0);
   });

   it("U04 missing expected-mode → reject", async () => {
-    const port = memoryRollout();
+    const port = memoryCasRollout();
     await expect(
       operateFinOpsT7ShadowRollout(port, {
         allowedProjectId: PILOT,
@@ -106,11 +150,11 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "INVALID_EXPECTED_MODE" });
-    expect(port.upserts).toBe(0);
+    expect(port.casCalls).toHaveLength(0);
   });

-  it("U05 dry-run → zero mutation", async () => {
-    const port = memoryRollout();
+  it("U-CAS01 dry-run never calls CAS / zero mutation", async () => {
+    const port = memoryCasRollout();
     const result = await operateFinOpsT7ShadowRollout(port, {
       allowedProjectId: PILOT,
       projectId: PILOT,
@@ -123,11 +167,147 @@ describe("T7 SHADOW activation operator — unit", () => {
     expect(result.result).toBe("dry_run");
     expect(result.applied).toBe(false);
     expect(result.afterMode).toBe("OFF");
+    expect(port.casCalls).toHaveLength(0);
+    expect(port.upserts).toBe(0);
+  });
+
+  it("U-CAS02 apply absent OFF → CAS OFF/null/SHADOW", async () => {
+    const port = memoryCasRollout();
+    const result = await operateFinOpsT7ShadowRollout(port, {
+      allowedProjectId: PILOT,
+      projectId: PILOT,
+      requestedMode: "SHADOW",
+      expectedMode: "OFF",
+      targetLabel: "ephemeral-local",
+      apply: true,
+      nowIso: () => "2026-08-09T08:00:00.000Z",
+    });
+    expect(result).toMatchObject({
+      applied: true,
+      result: "applied",
+      beforeRevision: null,
+      afterMode: "SHADOW",
+      afterRevision: 1,
+    });
+    expect(port.casCalls).toEqual([
+      {
+        projectId: PILOT,
+        expectedMode: "OFF",
+        expectedRevision: null,
+        mode: "SHADOW",
+        updatedAt: "2026-08-09T08:00:00.000Z",
+      },
+    ]);
     expect(port.upserts).toBe(0);
   });

-  it("U06 current != expected → reject", async () => {
-    const port = memoryRollout({
+  it("U-CAS03 existing OFF rev N → CAS receives revision N", async () => {
+    const port = memoryCasRollout({
+      projectId: PILOT,
+      mode: "OFF",
+      revision: 4,
+      updatedAt: "2026-08-09T07:00:00.000Z",
+    });
+    const result = await operateFinOpsT7ShadowRollout(port, {
+      allowedProjectId: PILOT,
+      projectId: PILOT,
+      requestedMode: "SHADOW",
+      expectedMode: "OFF",
+      targetLabel: "ephemeral-local",
+      apply: true,
+      nowIso: () => "2026-08-09T08:00:00.000Z",
+    });
+    expect(result.afterRevision).toBe(5);
+    expect(port.casCalls[0]).toMatchObject({
+      expectedMode: "OFF",
+      expectedRevision: 4,
+      mode: "SHADOW",
+    });
+  });
+
+  it("U-CAS04/05 CAS non-matched → EXPECTED_MODE_MISMATCH / not applied", async () => {
+    const port = memoryCasRollout();
+    port.casResultOverride = null;
+    await expect(
+      operateFinOpsT7ShadowRollout(port, {
+        allowedProjectId: PILOT,
+        projectId: PILOT,
+        requestedMode: "SHADOW",
+        expectedMode: "OFF",
+        targetLabel: "ephemeral-local",
+        apply: true,
+        nowIso: () => "2026-08-09T08:00:00.000Z",
+      }),
+    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
+    expect(port.casCalls).toHaveLength(1);
+  });
+
+  it("U-CAS06 CAS success → applied=true", async () => {
+    const port = memoryCasRollout();
+    const result = await operateFinOpsT7ShadowRollout(port, {
+      allowedProjectId: PILOT,
+      projectId: PILOT,
+      requestedMode: "SHADOW",
+      expectedMode: "OFF",
+      targetLabel: "ephemeral-local",
+      apply: true,
+      nowIso: () => "2026-08-09T08:00:00.000Z",
+    });
+    expect(result.applied).toBe(true);
+    expect(result.result).toBe("applied");
+  });
+
+  it("U-CAS07 CAS unexpected revision → POST_APPLY_MISMATCH", async () => {
+    const port = memoryCasRollout();
+    port.casResultOverride = {
+      projectId: PILOT,
+      mode: "SHADOW",
+      revision: 99,
+      updatedAt: "2026-08-09T08:00:00.000Z",
+    };
+    await expect(
+      operateFinOpsT7ShadowRollout(port, {
+        allowedProjectId: PILOT,
+        projectId: PILOT,
+        requestedMode: "SHADOW",
+        expectedMode: "OFF",
+        targetLabel: "ephemeral-local",
+        apply: true,
+        nowIso: () => "2026-08-09T08:00:00.000Z",
+      }),
+    ).rejects.toMatchObject({ code: "POST_APPLY_MISMATCH" });
+  });
+
+  it("U-CAS08 SHADOW→OFF passes exact expected state/revision", async () => {
+    const port = memoryCasRollout({
+      projectId: PILOT,
+      mode: "SHADOW",
+      revision: 1,
+      updatedAt: "2026-08-09T07:00:00.000Z",
+    });
+    const result = await operateFinOpsT7ShadowRollout(port, {
+      allowedProjectId: PILOT,
+      projectId: PILOT,
+      requestedMode: "OFF",
+      expectedMode: "SHADOW",
+      targetLabel: "ephemeral-local",
+      apply: true,
+      nowIso: () => "2026-08-09T08:00:00.000Z",
+    });
+    expect(result).toMatchObject({
+      afterMode: "OFF",
+      afterRevision: 2,
+      applied: true,
+    });
+    expect(port.casCalls[0]).toMatchObject({
+      expectedMode: "SHADOW",
+      expectedRevision: 1,
+      mode: "OFF",
+    });
+  });
+
+  it("U-CAS09 early expected-mode mismatch never calls CAS", async () => {
+    const port = memoryCasRollout({
       projectId: PILOT,
       mode: "SHADOW",
       revision: 1,
@@ -144,11 +324,11 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
-    expect(port.upserts).toBe(0);
+    expect(port.casCalls).toHaveLength(0);
   });

-  it("U07 current == requested target → reject/no revision bump", async () => {
-    const port = memoryRollout({
+  it("U-CAS10 no-op / missing target guards unchanged", async () => {
+    const port = memoryCasRollout({
       projectId: PILOT,
       mode: "SHADOW",
       revision: 2,
@@ -165,11 +345,23 @@ describe("T7 SHADOW activation operator — unit", () => {
         nowIso: () => "2026-08-09T08:00:00.000Z",
       }),
     ).rejects.toMatchObject({ code: "NOOP_REJECTED" });
-    expect(port.upserts).toBe(0);
+    expect(port.casCalls).toHaveLength(0);
+
+    await expect(
+      operateFinOpsT7ShadowRollout(port, {
+        allowedProjectId: PILOT,
+        projectId: PILOT,
+        requestedMode: "OFF",
+        expectedMode: "SHADOW",
+        targetLabel: "   ",
+        apply: true,
+        nowIso: () => "2026-08-09T08:00:00.000Z",
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_TARGET" });
   });

   it("U08 DB error → sanitized failure", async () => {
-    const port: FinOpsRolloutPort = {
+    const port: FinOpsRolloutCasPort = {
       async readProjectRollout() {
         throw new Error(
           "connect ECONNREFUSED postgres://[synthetic-unit-fixture-redacted] DATABASE_URL_DIRECT",
@@ -178,6 +370,9 @@ describe("T7 SHADOW activation operator — unit", () => {
       async upsertProjectRollout() {
         throw new Error("should not upsert");
       },
+      async compareAndSwapProjectRollout() {
+        throw new Error("should not cas");
+      },
     };
     try {
       await operateFinOpsT7ShadowRollout(port, {
@@ -199,26 +394,4 @@ describe("T7 SHADOW activation operator — unit", () => {
       expect(err.message).toMatch(/\[redacted\]/);
     }
   });
-
-  it("apply OFF→SHADOW succeeds with revision 1", async () => {
-    const port = memoryRollout();
-    const result = await operateFinOpsT7ShadowRollout(port, {
-      allowedProjectId: PILOT,
-      projectId: PILOT,
-      requestedMode: "SHADOW",
-      expectedMode: "OFF",
-      targetLabel: "ephemeral-local",
-      apply: true,
-      nowIso: () => "2026-08-09T08:00:00.000Z",
-    });
-    expect(result).toMatchObject({
-      applied: true,
-      result: "applied",
-      beforeEffectiveMode: "OFF",
-      beforeRevision: null,
-      afterMode: "SHADOW",
-      afterRevision: 1,
-    });
-    expect(port.upserts).toBe(1);
-  });
 });
diff --git a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts
index 4ef1d4b..6c5a8b5 100644
--- a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts
@@ -8,6 +8,11 @@
  * Upsert uses a single atomic PostgreSQL statement so concurrent first
  * writes on an absent projectId still assign exactly one revision per
  * accepted mutation (INSERT revision=1; ON CONFLICT revision = current + 1).
+ *
+ * Compare-and-swap uses one atomic CTE statement:
+ * - existing row: conditional UPDATE on (project_id, mode, revision)
+ * - absent row (expected OFF + null revision): conditional INSERT …
+ *   ON CONFLICT DO NOTHING (unique project_id → exactly one first-writer)
  */

 import type { Pool } from "pg";
@@ -17,7 +22,8 @@ import type {
 } from "../../application/types.rollout";
 import { isFinOpsRolloutMode } from "../../application/types.rollout";
 import type {
-  FinOpsRolloutPort,
+  CompareAndSwapProjectRolloutInput,
+  FinOpsRolloutCasPort,
   UpsertProjectRolloutInput,
 } from "../../ports/finopsRolloutPort";
 import { sanitizeDbError } from "./sanitizeDbError";
@@ -42,7 +48,43 @@ function rowToConfig(row: Record<string, unknown>): FinOpsRolloutConfig {
   };
 }

-export function createPostgresFinOpsRolloutStore(pool: Pool): FinOpsRolloutPort {
+function assertCasInputs(input: CompareAndSwapProjectRolloutInput): {
+  projectId: string;
+  expectedMode: FinOpsRolloutMode;
+  expectedRevision: number | null;
+  mode: FinOpsRolloutMode;
+  updatedAt: string;
+} {
+  const projectId = input.projectId.trim();
+  const updatedAt = input.updatedAt.trim();
+  if (!projectId) {
+    throw Object.assign(new Error("FinOps rollout rejected invalid projectId"), {
+      code: "FINOPS_VALIDATION_FAILED",
+      technicalDetailsRedacted: true,
+    });
+  }
+  if (!isFinOpsRolloutMode(input.expectedMode)) {
+    throw Object.assign(new Error("FinOps rollout rejected invalid expectedMode"), {
+      code: "FINOPS_VALIDATION_FAILED",
+      technicalDetailsRedacted: true,
+    });
+  }
+  if (!isFinOpsRolloutMode(input.mode)) {
+    throw Object.assign(new Error("FinOps rollout rejected invalid mode"), {
+      code: "FINOPS_VALIDATION_FAILED",
+      technicalDetailsRedacted: true,
+    });
+  }
+  return {
+    projectId,
+    expectedMode: input.expectedMode,
+    expectedRevision: input.expectedRevision,
+    mode: input.mode,
+    updatedAt,
+  };
+}
+
+export function createPostgresFinOpsRolloutStore(pool: Pool): FinOpsRolloutCasPort {
   return {
     async readProjectRollout(projectId: string): Promise<FinOpsRolloutConfig | null> {
       const trimmed = projectId.trim();
@@ -123,5 +165,92 @@ export function createPostgresFinOpsRolloutStore(pool: Pool): FinOpsRolloutPort
         );
       }
     },
+
+    async compareAndSwapProjectRollout(
+      input: CompareAndSwapProjectRolloutInput,
+    ): Promise<FinOpsRolloutConfig | null> {
+      const {
+        projectId,
+        expectedMode,
+        expectedRevision,
+        mode,
+        updatedAt,
+      } = assertCasInputs(input);
+
+      // Absent first-writer requires expected OFF + null revision.
+      // Any other null-revision expectation is a guaranteed non-match (zero write).
+      if (expectedRevision === null && expectedMode !== "OFF") {
+        return null;
+      }
+      // Non-positive / non-integer revision can never match durable revision >= 1.
+      if (
+        expectedRevision !== null &&
+        (!Number.isInteger(expectedRevision) || expectedRevision < 1)
+      ) {
+        return null;
+      }
+
+      try {
+        /**
+         * Single atomic CTE:
+         * - upd: mutate existing row only when mode+revision match
+         * - ins: first-writer INSERT only when expecting absent OFF/null;
+         *   ON CONFLICT DO NOTHING so a concurrent first-writer loses cleanly
+         */
+        const result = await pool.query<Record<string, unknown>>(
+          `WITH expected AS (
+             SELECT
+               $1::text AS project_id,
+               $2::text AS expected_mode,
+               $3::integer AS expected_revision,
+               $4::text AS new_mode,
+               $5::timestamptz AS updated_at
+           ),
+           upd AS (
+             UPDATE finops_rollout_config AS r
+             SET
+               mode = e.new_mode,
+               revision = r.revision + 1,
+               updated_at = e.updated_at
+             FROM expected AS e
+             WHERE r.project_id = e.project_id
+               AND e.expected_revision IS NOT NULL
+               AND r.mode = e.expected_mode
+               AND r.revision = e.expected_revision
+             RETURNING r.project_id, r.mode, r.revision, r.updated_at
+           ),
+           ins AS (
+             INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
+             SELECT e.project_id, e.new_mode, 1, e.updated_at
+             FROM expected AS e
+             WHERE e.expected_revision IS NULL
+               AND e.expected_mode = 'OFF'
+               AND NOT EXISTS (SELECT 1 FROM upd)
+             ON CONFLICT (project_id) DO NOTHING
+             RETURNING project_id, mode, revision, updated_at
+           )
+           SELECT project_id, mode, revision, updated_at FROM upd
+           UNION ALL
+           SELECT project_id, mode, revision, updated_at FROM ins`,
+          [projectId, expectedMode, expectedRevision, mode, updatedAt],
+        );
+        const row = result.rows[0];
+        if (!row) return null;
+        return rowToConfig(row);
+      } catch (error) {
+        if (
+          error &&
+          typeof error === "object" &&
+          "technicalDetailsRedacted" in error
+        ) {
+          throw error;
+        }
+        const sanitized = sanitizeDbError(error);
+        throw Object.assign(
+          new Error(sanitized.message),
+          { code: sanitized.code, technicalDetailsRedacted: true },
+        );
+      }
+    },
   };
 }
diff --git a/projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts b/projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts
index d40baf5..06ac025 100644
--- a/projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts
@@ -4,6 +4,10 @@
  * NOT a product activation endpoint.
  * NOT a privileged Morris mutation API.
  * Upsert exists for future distinct activation cycles / tests only.
+ *
+ * Compare-and-swap (CAS) is the authority for bounded T7 operator apply:
+ * mutation only when durable (mode, revision) still matches the expected
+ * precondition at write time (including absent row = OFF + null revision).
  */

 import type {
@@ -18,6 +22,20 @@ export type UpsertProjectRolloutInput = {
   readonly updatedAt: string;
 };

+export type CompareAndSwapProjectRolloutInput = {
+  readonly projectId: string;
+  /** Durable mode that must still match at write time. */
+  readonly expectedMode: FinOpsRolloutMode;
+  /**
+   * Durable revision that must still match at write time.
+   * `null` means the row must still be absent (effective OFF first-writer).
+   */
+  readonly expectedRevision: number | null;
+  readonly mode: FinOpsRolloutMode;
+  /** ISO-8601 timestamp; caller-supplied for deterministic tests. */
+  readonly updatedAt: string;
+};
+
 export type FinOpsRolloutPort = {
   /**
    * Read persisted rollout for a project.
@@ -30,8 +48,25 @@ export type FinOpsRolloutPort = {
   /**
    * Atomic upsert. First write revision=1; subsequent writes revision=previous+1.
    * Explicit mutation always increments revision (including same-mode rewrite).
+   * Not conditional on expected mode/revision — operator apply must use CAS.
    */
   readonly upsertProjectRollout: (
     input: UpsertProjectRolloutInput,
   ) => Promise<FinOpsRolloutConfig>;
 };
+
+/**
+ * Rollout port with atomic expected-mode + revision compare-and-swap.
+ * Keeps generic upsert for non-operator / test seed paths without forcing
+ * every FinOpsRolloutPort mock to implement CAS.
+ */
+export type FinOpsRolloutCasPort = FinOpsRolloutPort & {
+  /**
+   * Atomically mutate when durable state still equals
+   * (expectedMode, expectedRevision). Returns the new row on success,
+   * or null when the precondition does not match (zero mutation).
+   */
+  readonly compareAndSwapProjectRollout: (
+    input: CompareAndSwapProjectRolloutInput,
+  ) => Promise<FinOpsRolloutConfig | null>;
+};
diff --git a/projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts b/projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
index e50fd26..830fdaa 100644
--- a/projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
@@ -1,20 +1,21 @@
 /**
  * FinOps T7 SHADOW — bounded server operator for pilot rollout OFF|SHADOW.
  *
- * Reuses FinOpsRolloutPort upsert/read. Does NOT embed SQL.
+ * Reuses FinOpsRolloutCasPort read + atomic compare-and-swap. Does NOT embed SQL.
  * Does NOT expose product UI/API. Does NOT select policy values.
  * Does NOT activate SHADOW by its mere existence — mutation only when apply=true
- * and all fail-closed guards pass.
+ * and all fail-closed guards pass, including durable CAS at write time.
  *
  * Anti-claims:
  * - SHADOW NOT ACTIVATED until a distinct Morris GO + apply on an authorized target.
  * - MONITOR / E1_ENFORCED rejected.
  * - Non-pilot projectIds rejected.
- * - Dry-run (apply=false) never mutates.
+ * - Dry-run (apply=false) never mutates (zero CAS / zero upsert).
+ * - Pre-read expected-mode check is diagnostic only; apply authority is CAS.
  */

 import type { FinOpsRolloutConfig } from "../application/types.rollout";
-import type { FinOpsRolloutPort } from "../ports/finopsRolloutPort";
+import type { FinOpsRolloutCasPort } from "../ports/finopsRolloutPort";

 export type FinOpsT7OperatorShadowMode = "OFF" | "SHADOW";

@@ -106,10 +107,10 @@ function sanitizeStoreError(error: unknown): OperateFinOpsT7ShadowRolloutError {
 }

 /**
- * Bounded operator core. Injectable FinOpsRolloutPort for unit tests.
+ * Bounded operator core. Injectable FinOpsRolloutCasPort for unit tests.
  */
 export async function operateFinOpsT7ShadowRollout(
-  rollout: FinOpsRolloutPort,
+  rollout: FinOpsRolloutCasPort,
   input: OperateFinOpsT7ShadowRolloutInput,
 ): Promise<OperateFinOpsT7ShadowRolloutSuccess> {
   const allowed = input.allowedProjectId.trim();
@@ -201,10 +202,13 @@ export async function operateFinOpsT7ShadowRollout(
   const updatedAt = input.nowIso();
   const expectedAfterRevision = beforeRevision === null ? 1 : beforeRevision + 1;

-  let afterRow: FinOpsRolloutConfig;
+  let afterRow: FinOpsRolloutConfig | null;
   try {
-    afterRow = await rollout.upsertProjectRollout({
+    // Pre-read is diagnostic only. Durable authority is atomic CAS at write time.
+    afterRow = await rollout.compareAndSwapProjectRollout({
       projectId,
+      expectedMode,
+      expectedRevision: beforeRevision,
       mode: requestedMode,
       updatedAt,
     });
@@ -212,31 +216,22 @@ export async function operateFinOpsT7ShadowRollout(
     throw sanitizeStoreError(error);
   }

-  let verified: FinOpsRolloutConfig | null;
-  try {
-    verified = await rollout.readProjectRollout(projectId);
-  } catch (error) {
-    throw sanitizeStoreError(error);
-  }
-
-  if (
-    !verified ||
-    verified.mode !== requestedMode ||
-    verified.revision !== expectedAfterRevision
-  ) {
+  if (!afterRow) {
     throw new OperateFinOpsT7ShadowRolloutError(
-      "POST_APPLY_MISMATCH",
-      "FinOps T7 operator refused: post-apply read did not match requested mode/revision",
+      "EXPECTED_MODE_MISMATCH",
+      "FinOps T7 operator refused: durable rollout state changed before atomic mutation (CAS not matched)",
     );
   }

+  // RETURNING row is the primary success proof. Do not re-read: a concurrent
+  // legitimate later actor could advance revision and create a false mismatch.
   if (
     afterRow.mode !== requestedMode ||
     afterRow.revision !== expectedAfterRevision
   ) {
     throw new OperateFinOpsT7ShadowRolloutError(
       "POST_APPLY_MISMATCH",
-      "FinOps T7 operator refused: upsert return did not match requested mode/revision",
+      "FinOps T7 operator refused: CAS return did not match requested mode/revision",
     );
   }

@@ -248,9 +243,9 @@ export async function operateFinOpsT7ShadowRollout(
     expectedMode,
     beforeEffectiveMode,
     beforeRevision,
-    afterMode: verified.mode as FinOpsT7OperatorShadowMode,
-    afterRevision: verified.revision,
-    updatedAt: verified.updatedAt,
+    afterMode: afterRow.mode as FinOpsT7OperatorShadowMode,
+    afterRevision: afterRow.revision,
+    updatedAt: afterRow.updatedAt,
     applied: true,
     result: "applied",
   };

```

---

## 21. Secret scan

RAW_DATABASE_URL_PRESENT = NO
REAL_PASSWORD_VALUE_PRESENT = NO
SECRET_LEAK = NO
(synthetic unit redaction fixture scrubbed in pack only)

---

## 22. Reserves

R-T7-OP-EXPECTED-MODE-CAS-01 = VALIDATED RESOLUTION CANDIDATE —
TARGETED CYCLE 9 QA PASS —
ATOMIC MODE+REVISION CAS PROVEN —
ABSENT FIRST-WRITER CONCURRENCY = ONE MUTATION —
EXISTING ROW CONCURRENCY = N+1 ONLY —
STALE PRE-READ = ZERO MUTATION —
ROLLBACK CAS + CONCURRENCY VERIFIED —
REAL TARGET NOT APPLIED —
LOCAL DELIVERY NOT YET INTEGRATED —
PENDING COMMIT / PR / MAIN INTEGRATION.

R-T7-OP-TARGET-BINDING-01 = VALIDATED RESOLUTION CANDIDATE — TARGET + FINGERPRINT STABLE — PENDING MORRIS CLOSURE / ACTIVATION DECISION.
R-T7-SHADOW-OBS-01 = OPEN MINOR — UNCHANGED.
R-QA-T7-C08-SCENARIO-01 = OPEN MINOR.
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR.

---

## 23. Anti-claims

SHADOW = NOT ACTIVATED
REAL NEON APPLY = ZERO
POLICY VALUES = NOT SELECTED
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
QA PASS ≠ MAIN INTEGRATED
QA PASS ≠ CAS RESERVE CLOSED
QA PASS ≠ SHADOW ACTIVATION READY
QA PASS ≠ MORRIS GO ACTIVATION
LOCAL ROLLBACK TEST ≠ REAL ROLLBACK EXECUTED
TARGET-BINDING VALIDATED ≠ RESERVE CLOSED
OBSERVABILITY MINOR RESERVE = UNCHANGED

---

## 24. Project commit / push / PR

ZERO / ZERO / ZERO

---

## 25. Next Morris gate

GO LOCAL COMMIT + PR READINESS —
T7 EXPECTED-MODE CAS REMEDIATION —
EXACT 6-PATH SUBJECT —
TARGETED CYCLE 9 QA VALIDATED —
NO PUSH —
NO PR CREATION —
NO REAL TARGET APPLY —
NO SHADOW ACTIVATION.

---

## 26. Unique verdict

T7 EXPECTED-MODE CAS REMEDIATION QA PASS WITH RESERVES —
CYCLE 9 CRITICAL —
EXACT 6-PATH DELIVERY SUBJECT VERIFIED —
HASH LOCK PRE/POST 6/6 —
ATOMIC EXPECTED MODE+REVISION CAS PROVEN —
STALE PRE-READ ZERO MUTATION —
ABSENT CONCURRENCY 20/20 = EXACTLY ONE MUTATION / FINAL REV1 —
EXISTING CONCURRENCY 20/20 = EXACTLY ONE MUTATION / FINAL N+1 —
ROLLBACK CAS VERIFIED —
ROLLBACK CONCURRENCY 10/10 —
DRY-RUN ZERO CAS / ZERO MUTATION —
REAL NEON TARGET VERIFIED OFF —
REAL NEON DRY-RUN PASS / ZERO MUTATION —
NON-REGRESSION PASS —
R-T7-OP-EXPECTED-MODE-CAS-01 VALIDATED RESOLUTION CANDIDATE —
R-T7-SHADOW-OBS-01 OPEN MINOR UNCHANGED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
READY FOR MORRIS GO LOCAL COMMIT + PR READINESS —
HANDOFF REMOTE VERIFIED
