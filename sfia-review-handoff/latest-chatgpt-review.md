# Cycle 9 Standard — FinOps T7 Target-Binding Option B — Targeted QA — Review Pack

**Date/heure (CEST):** 2026-08-09 13:42:16 CEST
**Date/heure (UTC):** 2026-08-09 11:42:16 UTC
**Baseline:** SFIA v2.6

## Décision Morris

```text
GO TARGETED CYCLE 9 QA —
T7 TARGET-BINDING OPTION B —
EXACT 4-PATH SUBJECT —
FAIL-CLOSED FINGERPRINT CHECK —
NO REAL TARGET —
NO SHADOW ACTIVATION.
```

## Git Truth

```text
branch = delivery/sfia-studio-finops-t7-target-binding-option-b
HEAD = origin/main = 7421fa86b1f22c0184e9fdc8b20657b9a3e0205b
remote homonym = ABSENT
project paths = exact 4 (3 CREATE + 1 MODIFY)
.tmp-sfia-review/** = untracked only
staged = none
project commit/push/PR = NO
```

## Handoff entrant

```text
tip  = 3c1177dd9bced4ad5c9b07a2e2f77b2d6c4e4bfd
blob = cfc4dfe319b87cb642497b893a983d8ba50cb74f
Cycle 8 Option B delivery confirmed = YES
```

## CKC / Validation Checklist

```text
CKC path = method/.../pilots/04-qa-validation.md
CKC status = candidate (experimental cognitive guidance; no execution authority)
Validation Checklist = method/.../sfia-validation-checklist.md (consulted)
Routing matrix = method/.../04-cycle-to-ckc-routing-matrix.md (consulted)
```

## Exact 4 paths

```text
CREATE  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
CREATE  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
CREATE  projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md
MODIFY  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
```

## Hashes PRE / POST

```text
MATCH PRE=aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f POST=aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
MATCH PRE=db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425 POST=db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
MATCH PRE=619c73099fa5ae6e29043b108ca79876f408b935312f0f7016c03e4c5659d0f6 POST=619c73099fa5ae6e29043b108ca79876f408b935312f0f7016c03e4c5659d0f6  projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md
MATCH PRE=78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b POST=78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
PRE_POST_4_4=YES
```

## Static Q01–Q18

```text
# Static Q01-Q18
Q01=PASS
Q02=PASS creates=3 mods=1
Q03=PASS
Q04=PASS
Q05=PASS
Q06=PASS
Q07=PASS
Q08=PASS
Q09=PASS
Q10=PASS
Q11=FAIL ['postgres://u:p@Example.COM:5432/sfia', 'postgres://u:p@Example.COM:5432/sfia?sslmode=require', 'postgres://[redacted]']
Q12=PASS
Q13=PASS
Q14=PASS
Q15=PASS
Q16=PASS
Q17=PASS
Q18=PASS
Q11=PASS synthetic fixtures only (example.com / Example.COM / [redacted] in doc); REAL_SECRET_LEAK=NO
```

Q11 note: only synthetic example.com / Example.COM fixtures and doc `[redacted]` placeholders; REAL_SECRET_LEAK=NO.

## TB01–TB18

```text
18/18 PASS via ./node_modules/.bin/vitest (local)
```

## Operator units

```text
9/9 PASS t7.shadow-activation-operator.unit.test.ts
```

## Dependency / tsx local / no implicit install

```text
package.json devDependency tsx = ^4.20.5
npm ci = EXIT 0
tsx bin executable = YES
npm ls tsx --depth=0 =>
sfia-studio@0.1.0 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app
└── tsx@4.23.11
package.json / package-lock.json diff after npm ci = EMPTY
CLI probes used: npm_config_offline=true npm run finops:t7:rollout --
NO npx / NO npm exec / NO npm x
npm warn exec = ABSENT in probes
will be installed = ABSENT in probes
```

## Mismatch probe

Independent oracle for synthetic identity host=127.0.0.1 port=1 database=sfia_optb_qa_unreachable:
ORACLE_SYNTH=2d319b48c40b7b36959e3b93b30a162b64c764ed022c5a3367d104458106d2f9

Wrong fingerprint supplied; --apply present; unreachable URL.

```text
MISMATCH_EXIT=1
{
  "ok": false,
  "code": "TARGET_FINGERPRINT_MISMATCH",
  "message": "FinOps T7 target identity refused: fingerprint mismatch (actual=2d319b48c40b7b36959e3b93b30a162b64c764ed022c5a3367d104458106d2f9 expected=0000000000000000000000000000000000000000000000000000000000000000)"
}
```

Checks: TARGET_FINGERPRINT_MISMATCH=YES; ECONNREFUSED=ABSENT; npm warn exec=ABSENT; fake credentials=ABSENT; DB access=ZERO.

Oracle actual fingerprint in error matches independent oracle = YES (2d319b48…).

## Malformed fingerprint probe

```text
MALFORMED_EXIT=1
{
  "ok": false,
  "code": "INVALID_EXPECTED_TARGET_FINGERPRINT",
  "message": "FinOps T7 target identity refused: expected fingerprint must be 64 hex characters"
}
```

INVALID_EXPECTED_TARGET_FINGERPRINT; ECONNREFUSED=ABSENT; secrets=ABSENT.

## Positive dry-run (ephemeral QA only)

Container: sfia-finops-t7-option-b-qa
QA_PORT=59466
Database: sfia_studio_finops_t7_optb_qa
Independent oracle (node:crypto, not helper):
ORACLE_EPHEMERAL=85b6eacc73048bfb6060147d1f49ea150c06081043c499d076b05415bc96e74b
CANONICAL=host=127.0.0.1 port=59466 database=sfia_studio_finops_t7_optb_qa

Result JSON:
```json
{
  "ok": true,
  "targetLabel": "ephemeral-option-b-qa",
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

Row counts:
```text
ROW_BEFORE=0
ROW_AFTER=0
```

Dry-run rollout mutation = ZERO.
Container destroyed:
```text
sfia-finops-t7-option-b-qa
DESTROYED=YES
sfia-finops-t7-option-b-qa-testdb
```

## PostgreSQL regression

```text
npm run test:db = 12 files / 116 tests PASS
including t7.shadow-option-a.wiring + t7.shadow-activation-operator integration
dedicated ephemeral testdb destroyed = YES
```

## typecheck / lint / build / diff-check

```text
typecheck PASS
lint PASS
build PASS
git diff --check PASS
FULL npm test = NOT REQUIRED (no regression signal)
```

## Secret scan

```text
REAL_SECRET_LEAK = NO
subject files contain only synthetic test fixtures
```

## Label / fingerprint semantics

```text
TECHNICAL DB FINGERPRINT BINDING = VERIFIED UNDER QA
LABEL-TO-FINGERPRINT AUTHORITY = HUMAN / MORRIS GATE (non-automated)
TARGET REGISTRY = NONE
TARGET LABEL TECHNICALLY BOUND = FALSE
--target remains audit/human label
control = DATABASE_URL_DIRECT fingerprint == --expected-target-fingerprint
```

## Réserves

```text
R-T7-OP-TARGET-BINDING-01 =
OPEN — OPTION B QA PASS — LOCAL SUBJECT VALIDATED — REAL TARGET NOT SELECTED — MERGE/REMOTE INTEGRATION PENDING.

Severity: OPEN (not closed; future Morris TARGET+FINGERPRINT selection + merge still required)

R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
```

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
REAL DATABASE TARGET = NONE
REAL DB WRITES = ZERO
REAL ACTIVATION APPLY = ZERO
TARGET REGISTRY = NONE
TARGET LABEL TECHNICALLY BOUND = FALSE
OPTION B QA PASS ≠ TARGET SELECTED
OPTION B QA PASS ≠ SHADOW ACTIVATED
OPTION B QA PASS ≠ READY FOR REAL APPLY
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
PROJECT COMMIT = NO
PROJECT PUSH = NO
PR = NO
```

## Next Morris gate

```text
GO LOCAL COMMIT + PR READINESS —
T7 TARGET-BINDING OPTION B —
EXACT 4-PATH SUBJECT —
QA VALIDATED —
NO PUSH —
NO PR CREATION —
NO REAL TARGET —
NO SHADOW ACTIVATION.
```

## Verdict

```text
T7 TARGET-BINDING OPTION B QA PASS WITH RESERVE —
CYCLE 9 STANDARD —
EXACT 4-PATH SUBJECT —
DELIVERY BYTES MATCH 4/4 —
SAFE TARGET IDENTITY CONTRACT VERIFIED —
SHA-256 FINGERPRINT VERIFIED —
EXPECTED FINGERPRINT REQUIRED —
FINGERPRINT MISMATCH FAILS BEFORE POOL —
MALFORMED FINGERPRINT FAILS BEFORE POOL —
CANONICAL NPM SCRIPT VERIFIED —
LOCAL TSX DEPENDENCY VERIFIED —
NO NPX / NO NPM EXEC / NO IMPLICIT PACKAGE DOWNLOAD IN CLI PROBES —
POSITIVE EPHEMERAL DRY-RUN PASS —
DRY-RUN ZERO ROLLOUT MUTATION —
OPERATOR UNITS PASS —
POSTGRES REGRESSION PASS —
TYPECHECK/LINT/BUILD PASS —
NO SECRET LEAK —
TARGET LABEL REMAINS AUDIT-ONLY —
LABEL/FINGERPRINT AUTHORITY REMAINS MORRIS GATE —
R-T7-OP-TARGET-BINDING-01 OPEN —
REAL TARGET NOT SELECTED —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR MORRIS LOCAL COMMIT + PR READINESS GATE —
HANDOFF REMOTE VERIFIED
```
