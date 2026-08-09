# Cycle 9 Critical — T7 SHADOW Minimal Activation Operator — Targeted QA — Review Pack (full)

**Date/heure (CEST):** 2026-08-09 11:47:14 CEST
**Date/heure (UTC):** 2026-08-09 09:47:14 UTC
**Baseline:** SFIA v2.6
**Décision Morris:** GO TARGETED CYCLE 9 QA — T7 SHADOW MINIMAL ACTIVATION OPERATOR — NO REAL ACTIVATION — NO FULL REGRESSION UNLESS SIGNAL.

## 1. Git Truth

```text
main / origin/main = bb52624e4de6aa19a7d68205af053596bf599a1a
delivery branch    = delivery/sfia-studio-finops-t7-shadow-activation-operator
delivery HEAD      = bb52624e4de6aa19a7d68205af053596bf599a1a (UNCOMMITTED subject)
project commit/push/PR = NONE
```

## 2. Handoff entrant (rebased)

```text
branch : sfia/review-handoff
path   : sfia-review-handoff/latest-chatgpt-review.md
tip    : 14abfcfb4a6991d927f4ebc988e81081467c53f0
blob   : 702599212111f88caa915271f45236cbdd978240
cycle  : Cycle 8 Critical — T7 SHADOW Minimal Activation Operator
status : MATCHED — QA INPUT BASELINE OK
```

## 3. Exact 7-path subject

1. `projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts`
2. `projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts`
5. `projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md`
6. `projects/sfia-studio/app/package.json`
7. `projects/sfia-studio/app/package-lock.json`

Scope drift: NONE (only subject + allowed `.tmp-sfia-review/**`).

## 4. PRE/POST SHA256

### PRE
```text
4ad27590dc1fb8a67e1b1696213fcc01f0d768f84a0e40605d5f110691b0c62d  projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
f5902a822ba7b16363842e7016b298ffbd56bed9766fa925b249ac1a1847c62b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
a9f76623be45473718d7b323113e8529dfdf58378b51e9e7077cc4684d031f4e  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
49f7ff66f7b5de61e06b24a966ec111456dd170a2091d78a0025af39fd3c5c88  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
10520d6d1c6bdd25e173c9256f8a7275ed2435ba1639b1adfc0595dc2afe9294  projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md
f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb  projects/sfia-studio/app/package.json
5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75  projects/sfia-studio/app/package-lock.json
```

### POST
```text
4ad27590dc1fb8a67e1b1696213fcc01f0d768f84a0e40605d5f110691b0c62d  projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
f5902a822ba7b16363842e7016b298ffbd56bed9766fa925b249ac1a1847c62b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
a9f76623be45473718d7b323113e8529dfdf58378b51e9e7077cc4684d031f4e  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
49f7ff66f7b5de61e06b24a966ec111456dd170a2091d78a0025af39fd3c5c88  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
10520d6d1c6bdd25e173c9256f8a7275ed2435ba1639b1adfc0595dc2afe9294  projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md
f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb  projects/sfia-studio/app/package.json
5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75  projects/sfia-studio/app/package-lock.json
```

### Compare
```text
PRE_POST_IDENTICAL=True
count=7
OK 10520d6d1c6bdd25e173c9256f8a7275ed2435ba1639b1adfc0595dc2afe9294 projects/sfia-studio/160-assistant-sfia-native-openai-finops-t7-shadow-activation-operator-execution.md
OK 49f7ff66f7b5de61e06b24a966ec111456dd170a2091d78a0025af39fd3c5c88 projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts
OK a9f76623be45473718d7b323113e8529dfdf58378b51e9e7077cc4684d031f4e projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts
OK 4ad27590dc1fb8a67e1b1696213fcc01f0d768f84a0e40605d5f110691b0c62d projects/sfia-studio/app/lib/oa/finops/server/operateFinOpsT7ShadowRollout.ts
OK 5494ccd725b8e956c0328085c1a8b51c19e3003215e0dd2b3f9461f4af670f75 projects/sfia-studio/app/package-lock.json
OK f52e62bbe74458ae0df0bdae77b031d937bda7abbe97156a3e51c3df8c8306eb projects/sfia-studio/app/package.json
OK f5902a822ba7b16363842e7016b298ffbd56bed9766fa925b249ac1a1847c62b projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
```

## 5. Q01–Q18

| ID | Result | Proof |
|----|--------|-------|
| Q01 | PASS | CLI injects `T7_SHADOW_PILOT_PROJECT_ID` = `sfia-studio-ops1`; core rejects non-equal projectId |
| Q02 | PASS | write modes `OFF\|SHADOW` only via `OPERATOR_MODES` |
| Q03 | PASS | empty/missing expected-mode → `INVALID_EXPECTED_MODE`; CLI requires `--expected-mode` |
| Q04 | PASS | `effectiveMode(null)` → `OFF` |
| Q05 | PASS | mismatch → `EXPECTED_MODE_MISMATCH`; CLI G zero mutation (`OFF:2` unchanged) |
| Q06 | PASS | unit U07 `NOOP_REJECTED`, upserts=0 |
| Q07 | PASS | default `apply=false`; dry-run A count=0 |
| Q08 | PASS | apply path calls `rollout.upsertProjectRollout`; CLI uses `createPostgresFinOpsRolloutStore(pool)` |
| Q09 | PASS | no `INSERT`/`ON CONFLICT` in operator/CLI |
| Q10 | PASS | post-apply `readProjectRollout` + mode/revision check |
| Q11 | PASS | `absent→1` / `existing→previous+1` (`expectedAfterRevision`) |
| Q12 | PASS | `sanitizeStoreError` redacts postgres URLs / `DATABASE_URL(_DIRECT)` |
| Q13 | PASS | CLI `finally { await pool.end() }` |
| Q14 | PASS | connection string never logged; H SECRET_LEAK=NO |
| Q15 | PASS | no UI/API/route/migration in subject |
| Q16 | PASS | MONITOR/E1 → `INVALID_MODE` (CLI E/F exit 1) |
| Q17 | PASS | `tsx` in `devDependencies` only; `npm ls tsx` → `tsx@4.23.11`; not in `dependencies` |
| Q18 | PASS | no policy value / threshold / currency selection in subject |

## 6. Tests 17/17

### Unit 9/9
```text

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts (9 tests) 13ms

 Test Files  1 passed (1)
      Tests  9 passed (9)
   Start at  11:45:51
   Duration  1.18s (transform 87ms, setup 177ms, collect 63ms, tests 13ms, environment 0ms, prepare 207ms)

UNIT_EXIT=0
```

### PG 8/8
```text

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 80ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  11:45:54
   Duration  1.38s (transform 125ms, setup 119ms, collect 155ms, tests 80ms, environment 0ms, prepare 144ms)

PG_EXIT=0
```

## 7. CLI rehearsal (ephemeral localhost:55447 only)

| Step | Result |
|------|--------|
| A dry-run OFF→SHADOW | PASS `applied:false` count=0 |
| B apply OFF→SHADOW | PASS revision 1 |
| C rollback SHADOW→OFF | PASS revision 2 |
| D invalid project | PASS exit 1 `INVALID_PROJECT` |
| E MONITOR | PASS exit 1 `INVALID_MODE` |
| F E1_ENFORCED | PASS exit 1 `INVALID_MODE` |
| G expected mismatch | PASS exit 1; state remains `OFF:2` |
| H secret-redaction | PASS `SECRET_LEAK=NO` |

Container `sfia-t7-op-qa-pg` removed after proof.
No Neon / shared / production / real provider.

### Sample dry-run
```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target qa-cycle9-audit-label

{
  "ok": true,
  "targetLabel": "qa-cycle9-audit-label",
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
A_EXIT=0
```

### Sample apply
```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target qa-cycle9-audit-label --apply

{
  "ok": true,
  "targetLabel": "qa-cycle9-audit-label",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "SHADOW",
  "afterRevision": 1,
  "updatedAt": "2026-08-09T09:47:04.580Z",
  "applied": true,
  "result": "applied"
}
B_EXIT=0
```

### Sample rollback
```text

> sfia-studio@0.1.0 finops:t7:rollout
> tsx scripts/finops-t7-shadow-rollout.ts --project sfia-studio-ops1 --mode OFF --expected-mode SHADOW --target qa-cycle9-rollback --apply

{
  "ok": true,
  "targetLabel": "qa-cycle9-rollback",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "OFF",
  "expectedMode": "SHADOW",
  "beforeEffectiveMode": "SHADOW",
  "beforeRevision": 1,
  "afterMode": "OFF",
  "afterRevision": 2,
  "updatedAt": "2026-08-09T09:47:05.566Z",
  "applied": true,
  "result": "applied"
}
C_EXIT=0
```

## 8. Target-binding reserve

`--target` = audit label only (appears in JSON result; not used for DB routing).
`DATABASE_URL_DIRECT` = effective DB connection (never logged).

An arbitrary `--target` label is **not** proof of the DB identity actually targeted.

**R-T7-OP-TARGET-BINDING-01 = OPEN MINOR**

- No real activation in this QA.
- Mechanism remains technically bounded (pilot/mode/expected-mode/dry-run).
- Explicit target↔DB binding must be resolved or explicitly accepted before real activation.
- Not BLOCKING for pre-activation commit/PR readiness.

## 9. tsx / lock

```text
sfia-studio@0.1.0 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-activation-operator/projects/sfia-studio/app
└── tsx@4.23.11
tsx_dev=^4.20.5 (package.json)
tsx_prod=absent
lock resolves tsx@4.23.11 (dev:true)
```

## 10. typecheck / lint / build / diff-check

```text
typecheck PASS (TC_EXIT=0)
lint PASS (LINT_EXIT=0)
build PASS (BUILD_EXIT=0)
git diff --check PASS (DIFF_EXIT=0)
```

## 11. Full regression decision

FULL REGRESSION = NOT REQUIRED — NO SIGNAL.

(No unexpected product-surface change; tooling impact limited to locked `tsx` devDependency already exercised by targeted build/lint/typecheck.)

## 12. QA-G2 / QA-G3

- **QA-G2 = PASS** (scope exact; Q01–Q18 PASS; 17/17; CLI PASS; typecheck/lint/build/diff PASS; tsx dev-only PASS; secret redaction PASS; PRE/POST 7/7 identical)
- **QA-G3 = PASS WITH RESERVE** (`R-T7-OP-TARGET-BINDING-01` OPEN MINOR)

## 13. Reserves

- R-T7-OP-TARGET-BINDING-01 = OPEN MINOR (must resolve/accept before real activation)
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR (carried; out of operator QA scope)
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR (carried)
- POLICY VALUES = NOT SELECTED
- ACTIVATION TARGET = NOT SELECTED
- SHADOW = NOT ACTIVATED

## 14. Anti-claims

```text
SHADOW = NOT ACTIVATED
ACTIVATION TARGET = NOT SELECTED
POLICY VALUES = NOT SELECTED
NO PROJECT COMMIT
NO PROJECT PUSH
NO PR
NO MERGE
```

## 15. Next Morris gate

```text
GO LOCAL COMMIT + PR READINESS —
delivery/sfia-studio-finops-t7-shadow-activation-operator —
EXACT 7-PATH SUBJECT —
NO REAL ACTIVATION —
R-T7-OP-TARGET-BINDING-01 REMAINS OPEN MINOR UNTIL REAL ACTIVATION DECISION.
```

## 16. Verdict

```text
T7 SHADOW MINIMAL ACTIVATION OPERATOR TARGETED QA VALIDATED —
CYCLE 9 CRITICAL —
QA-G2 PASS —
QA-G3 PASS WITH RESERVE —
EXACT 7-PATH SUBJECT IMMUTABLE —
TARGETED TESTS 17/17 PASS —
CLI DRY-RUN/APPLY/ROLLBACK PASS —
PILOT/OFF|SHADOW/EXPECTED-MODE GUARDS PASS —
SECRET REDACTION PASS —
TSX DEV-ONLY / LOCK PASS —
TYPECHECK/LINT/BUILD/DIFF PASS —
NO FULL REGRESSION SIGNAL —
R-T7-OP-TARGET-BINDING-01 OPEN MINOR —
MUST BE RESOLVED OR EXPLICITLY ACCEPTED BEFORE REAL ACTIVATION —
POLICY VALUES NOT SELECTED —
SHADOW NOT ACTIVATED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR LOCAL COMMIT + PR READINESS —
HANDOFF REMOTE VERIFIED
```
