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
