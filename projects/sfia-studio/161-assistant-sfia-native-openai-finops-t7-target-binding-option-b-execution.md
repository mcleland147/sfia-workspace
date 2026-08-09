# 161 — FinOps T7 Target-Binding Option B — Thin Fail-Closed Identity Check — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profile:** Standard
**Typology:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-09 13:28:58 CEST
**Date (UTC):** 2026-08-09 11:28:58 UTC

---

## Décision Morris

```text
GO TARGET-BINDING OPTION B —
T7 SHADOW OPERATOR —
IMPLEMENT THIN FAIL-CLOSED ENVIRONMENT IDENTITY CHECK —
NO SHADOW ACTIVATION.
```

Authorized: local Option B implementation + local validation only.
Not authorized: real target selection, Neon/shared provisioning, SHADOW activation,
real `--apply`, policy values, MONITOR, E1, project commit/push/PR/merge.

---

## Problème initial

`--target` was an audit label only. `DATABASE_URL_DIRECT` selected the effective database.
There was no intrinsic proof that `--target pilot-A` matched the DB behind `DATABASE_URL_DIRECT`.

Current binding before this delivery: **AUDIT LABEL ONLY**.

---

## Option B retenue

Thin fail-closed binding at the CLI entrypoint:

`DATABASE_URL_DIRECT` → safe PostgreSQL identity → SHA-256 fingerprint → compare to
`--expected-target-fingerprint` → Pool only on MATCH.

No registry, no migration, no global mapping, no hardcoded target, no Neon/Vercel dependency,
no new npm dependency, core operator unchanged.

---

## Architecture exacte

| Path | Role |
|------|------|
| `app/lib/oa/finops/server/finOpsT7TargetIdentity.ts` | Pure helper (URL + crypto SHA-256) |
| `app/scripts/finops-t7-shadow-rollout.ts` | CLI: fingerprint check before Pool |
| `app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts` | TB01–TB18 |
| `161-…-option-b-execution.md` | This execution record |

**Unchanged:** `operateFinOpsT7ShadowRollout.ts`, store, pool factory, migrations, package.json, workflows.

---

## Canonical identity

Exactly three LF-separated lines, no trailing blank line:

```text
host=<hostname>
port=<port>
database=<database>
```

Rules:

- protocol: `postgres:` or `postgresql:` only
- hostname: trim + lowercase
- port: explicit URL port, else `5432`
- database: pathname without leading slash, `decodeURIComponent`, non-empty
- excluded: username, password, query, fragment, SSL credentials, raw URL

---

## Fingerprint contract

- Algorithm: SHA-256 over canonical UTF-8
- Encoding: lowercase hex
- Length: 64
- Expected fingerprint: valid 64-hex, normalized to lowercase
- Match: exact string equality after normalization

Error codes:

- `INVALID_TARGET_CONNECTION_IDENTITY`
- `INVALID_EXPECTED_TARGET_FINGERPRINT`
- `TARGET_FINGERPRINT_MISMATCH`

Errors never include connection string, username, or password. Fingerprints may appear.

---

## CLI contract

```text
npm run finops:t7:rollout -- \
  --project sfia-studio-ops1 \
  --mode SHADOW|OFF \
  --expected-mode OFF|SHADOW \
  --target <explicit-label> \
  --expected-target-fingerprint <64-hex-sha256> \
  [--apply]
```

`--expected-target-fingerprint` is **mandatory** for dry-run and apply.

Future Morris target selection GO must carry:

```text
TARGET <label>
FINGERPRINT <sha256>
```

---

## Ordre fail-closed

1. parse args
2. require mandatory args (including expected fingerprint)
3. read `DATABASE_URL_DIRECT`
4. derive safe identity + actual fingerprint
5. validate expected fingerprint
6. assert actual == expected
7. **only after MATCH:** create Pool
8. create rollout store
9. call `operateFinOpsT7ShadowRollout`
10. close Pool

`TARGET_FINGERPRINT_MISMATCH` → no Pool, no DB query, no upsert, no apply.

---

## Preuves tests

(Filled after local validation.)

### Unit TB01–TB18

18/18 PASS (TB01–TB18)
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app
 ✓ __tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts (18 tests) 3ms
 Test Files  1 passed (1)
      Tests  18 passed (18)
   Start at  13:27:07
   Duration  267ms (transform 27ms, setup 57ms, collect 18ms, tests 3ms, environment 0ms, prepare 41ms)

### Existing T7 activation operator units

9/9 PASS
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app
 ✓ __tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts (9 tests) 3ms
 Test Files  1 passed (1)
      Tests  9 passed (9)
   Start at  13:27:12
   Duration  237ms (transform 22ms, setup 43ms, collect 15ms, tests 3ms, environment 0ms, prepare 36ms)

### test:db

12 files / 116 tests PASS
   ✓ FinOps T7 foundation runtime composition integration > T7-R01 composeFinOpsT7Runtime → resolve no config → OFF  2110ms
   ✓ FinOps T7 foundation runtime composition integration > T7-R04 reconcileProjectPeriodAndRefresh → T2 success → T4 refreshed exactly once  331ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 3174ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 2750ms
 Test Files  12 passed (12)
      Tests  116 passed (116)
   Start at  13:27:46
   Duration  7.52s (transform 5.20s, setup 4.98s, collect 9.61s, tests 27.92s, environment 9ms, prepare 3.72s)

### typecheck / lint / build

typecheck EXIT=0; lint EXIT=0 (No ESLint warnings); build EXIT=0

### CLI mismatch pre-connection probe

MISMATCH_EXIT=1
---stderr---
npm warn exec The following package was not found and will be installed: tsx@4.23.11
{
  "ok": false,
  "code": "TARGET_FINGERPRINT_MISMATCH",
  "message": "FinOps T7 target identity refused: fingerprint mismatch (actual=b438bea6f57d496822f68ef08b4f76fdd0ddf1fd72a9b0f5caa7ff42d6e93b1d expected=0000000000000000000000000000000000000000000000000000000000000000)"
}
secret leak of fake credentials = NO; ECONNREFUSED = absent; exit=1

### Positive dry-run (ephemeral local)

DRY_EXIT=0
{
  "ok": true,
  "targetLabel": "ephemeral-option-b-validation",
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
rollout row count after dry-run = 0; applied=false; result=dry_run
EPHEMERAL_FP=7bd319b9f6b2da1033679f2e9b9f3f732e693d76e8fab9278b12206cdda1c94d
safe identity: host=127.0.0.1 port=55449 database=sfia_studio_finops_t7_optb (destroyed after test)

### Secret leak check

No real connection strings in helper/CLI/doc. Unit fixtures use synthetic example.com credentials for TB06/TB17 only.

### git diff --check

PASS (no whitespace errors)

### SHA256 of exact 4 paths

Captured in review pack after freeze (avoid self-hash recursion in this record).
Code/test/CLI SHAs at write time:

aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts

---

## Réserves

```text
R-T7-OP-TARGET-BINDING-01 =
OPEN —
OPTION B IMPLEMENTED LOCALLY —
REAL TARGET NOT SELECTED —
REMOTE/MERGE VALIDATION PENDING.

R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
```

---

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
REAL DATABASE TARGET = NONE
REAL DB WRITES = ZERO
REAL --apply = ZERO
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
OPTION B LOCAL IMPLEMENTATION ≠ TARGET SELECTED
OPTION B LOCAL IMPLEMENTATION ≠ SHADOW ACTIVATION READY
DELIVERY PASS ≠ QA PASS
DELIVERY PASS ≠ PR READY
migration = NONE
registry = NONE
```

---

## Prochaine étape

```text
GO TARGETED CYCLE 9 QA —
T7 TARGET-BINDING OPTION B —
EXACT 4-PATH SUBJECT —
FAIL-CLOSED FINGERPRINT CHECK —
NO REAL TARGET —
NO SHADOW ACTIVATION.
```
