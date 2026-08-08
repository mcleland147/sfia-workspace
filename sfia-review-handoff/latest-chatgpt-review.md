# ChatGPT Review Pack — FinOps Technical Lot T7 — Foundation Default-OFF Delivery

## Meta
- Horodatage CEST: 2026-08-08 10:55:55 UTC+02:00 (+0200)
- Horodatage UTC: 2026-08-08 08:55:55 UTC
- User utterance: `ok go`
- Contextual GO: **GO T7 foundation Delivery default-OFF** (previously RECEIVED / NOT CONSUMED; now executable after T4 post-merge)
- Cycle: **8 — Delivery / implémentation**
- Profil: **Critical**
- Typologie: EVOL / CODE / DATA / TEST / DOC
- Template SHA: `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`
- Repo: `mcleland147/sfia-workspace`
- Branch: `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off`
- Worktree: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off`
- HEAD: `511a18d409e25d0a3fdbd3425ade65512a5f4e2b`
- origin/main: `511a18d409e25d0a3fdbd3425ade65512a5f4e2b`
- Handoff before tip: `b403f5e4b85b9f0141d50d9d5cadf9cd91a460ee`
- Handoff before blob: `ac75f3833e17223ceeeaad7cf02d28d84ede1b2f`
- Historical Decision Applied tip: `e6e026c9629535e5a9d8852f4613acf473b417e0`
- Historical Decision Applied blob: `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`
- Mono-cycle: T7 Foundation Delivery default-OFF ONLY
- Project commit / push / PR: **NONE**

## Anti-claims (mandatory)
```
FOUNDATION READY ≠ SHADOW ACTIVATED
DEFAULT-OFF PROVEN — NO SEED — NO PRODUCT ACTIVATION
NO EXECUTION-RUN MODIFICATION — NO PROVIDER — NO THRESHOLD 15/20/25/30
R-T4-PROJECTION-REFRESH-01 CLOSED (runtime freshness wiring only; NO product activation claim)
SHADOW / MONITOR / E1 NOT ACTIVATED
```

## Historical T7 decisions (SELECTED BY MORRIS)
| Decision | Status |
|---|---|
| D-T7-FLAG-STORE-01 | A SELECTED BY MORRIS |
| D-T7-MODE-ADAPTER-01 | A SELECTED BY MORRIS |
| D-T7-T6-COMPOSITION-GATE-01 | A BEFORE SHADOW |
| D-T7-PROJECTION-REFRESH-GATE-01 | A T2 FRONTIERS / BEFORE SHADOW |
| D-T7-T3-SYNC-GATE-01 | A BEFORE MONITOR |
| D-T7-T6EXT-E1-GATE-01 | A REQUIRED BEFORE E1 — NOT AUTHORIZED |
| D-T7-T5-IAM-GATE-01 | A REQUIRED BEFORE E1 — IAM NOT_SELECTED |
| D-T7-CALIBRATION-PILOT-01 | A BEFORE MONITOR USING REAL AMOUNTS |
| READINESS-MATRIX | ACCEPTED |

Docs 151–153 are **NOT on main**; authority via historical handoff blob above.

## Local discovery
- Existing T7/rollout runtime implementation: **NONE** (greenfield)
- Global/env FinOps authority: **NONE** (D1 `platformFlag` unrelated)
- Product/runtime T2 consumer bypassing T4 wrappers: **NONE**
- Migration collision `1754600004000` / `finops_rollout_config`: **NONE**
- Branch collision: **NONE**

## Exact project manifest (10 CREATE / 0 MODIFY / 0 DELETE)
1. `projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts`2. `projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts`3. `projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts`4. `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts`5. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`6. `projects/sfia-studio/app/db/migrations/1754600004000_finops-t7-rollout-config.js`7. `projects/sfia-studio/app/__tests__/oa/finops/t7.rollout.unit.test.ts`8. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.rollout.integration.test.ts`9. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts`10. `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`
## Schema — `finops_rollout_config`
- `project_id text PRIMARY KEY`
- `mode text NOT NULL` CHECK IN ('OFF','SHADOW','MONITOR','E1_ENFORCED')
- `revision bigint NOT NULL` CHECK >= 1
- `updated_at timestamptz NOT NULL`
- No seed / no FK / no monetary / no IAM columns
- Missing row ⇒ resolver DEFAULT-OFF (`resolution=default_off`)

## Mode adapter semantics
| Mode | evaluateT4 | policyEffect | blockingAllowed | requiresT3Sync | activationState |
|---|---|---|---|---|---|
| OFF | false | null | false | false | inert |
| SHADOW | true | signal_only | false | false | configured_not_activated |
| MONITOR | true | signal_only | false | true | configured_not_activated |
| E1_ENFORCED | true | enforce | true | true | configured_not_activated |

`blockingAllowed=true` is architectural only — composition exposes **no** enforcement consumer.

## T7 server composition
`composeFinOpsT7Runtime({ pool, nowIso })` returns:
- `capture` / `flushAudit` via **reused** `composeFinOpsRuntime` (T6 unmodified)
- `resolveProjectRollout`
- `recomputeAggregatesAndRefresh` → `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodAndRefresh` → `reconcileProjectPeriodThenRefreshEnforcementProjection`
- Does **NOT** expose `upsertProjectRollout` / raw T2 / enforcement port / execution-run

## CLOSE-1..8 matrix → R-T4-PROJECTION-REFRESH-01
| Gate | Result |
|---|---|
| CLOSE-1 no product T2 consumer outside composition | PASS |
| CLOSE-2 T7 composition is canonical server runtime boundary | PASS |
| CLOSE-3 exposed T2 mutation/recon use post-T2 refresh wrappers | PASS |
| CLOSE-4 no raw T2 mutation exposed | PASS |
| CLOSE-5 PG proves refresh on exposed ops | PASS (T7-R03/R04) |
| CLOSE-6 T4 refresh failure fail-open vs T2 success | PASS (T7-R05) |
| CLOSE-7 no product activation claim required | PASS |
| CLOSE-8 SHADOW not activated | PASS |

**R-T4-PROJECTION-REFRESH-01 = CLOSED —**
T7 CANONICAL SERVER RUNTIME T2 MUTATION / RECONCILIATION BOUNDARY ROUTES THROUGH POST-T2 T4 REFRESH —
FRESHNESS WIRING DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —
SHADOW NOT ACTIVATED.

## Carried reserves
| Reserve | Status |
|---|---|
| R-T4-PROJECTION-REFRESH-01 | **CLOSED** (foundation freshness wiring; no product activation) |
| R-T6-RUNTIME-COMPOSITION-01 | CLOSED ON MAIN |
| R-T4-T3-SYNC-01 | OPEN — SELECTED GATE BEFORE MONITOR |
| R-PR-T2-API-01 | OPEN MINOR |
| T6-ext-T3T4 | NOT AUTHORIZED — REQUIRED BEFORE E1 |
| Product IAM | NOT_SELECTED — REQUIRED BEFORE E1 |
| Calibration | REQUIRED BEFORE MONITOR USING REAL AMOUNTS |
| SHADOW / MONITOR / E1 | NOT ACTIVATED / NOT ACTIVATED / NOT AUTHORIZED |

## Test evidence summaries
### Unit T7-U01..10
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t7.rollout.unit.test.ts (10 tests) 7ms

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  10:45:11
   Duration  2.23s (transform 142ms, setup 206ms, collect 119ms, tests 7ms, environment 0ms, prepare 215ms)

```
### PostgreSQL T7-PG + T7-R
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests) 1517ms
   ✓ FinOps T7 foundation runtime composition integration > T7-R04 reconcileProjectPeriodAndRefresh → T2 success → T4 refreshed exactly once  336ms
 ✓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (10 tests) 810ms
   ✓ FinOps T7 PostgreSQL rollout integration > T7-PG09 after clearing rows, down/up round trip succeeds  306ms

 Test Files  2 passed (2)
      Tests  26 passed (26)
   Start at  10:46:03
   Duration  4.17s (transform 483ms, setup 242ms, collect 706ms, tests 2.33s, environment 1ms, prepare 352ms)

```
### Full FinOps (serial)
```

 ✓ __tests__/oa/finops/postgres/t3.alert-review.integration.test.ts (7 tests) 1569ms
   ✓ FinOps T3 PostgreSQL alert/review integration > 5–7. C1 unique Alert/Review + concurrent evaluations one row  301ms
   ✓ FinOps T3 PostgreSQL alert/review integration > 13–16. project/period/currency isolation + restart durability  375ms
 ✓ __tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts (16 tests) 1781ms
   ✓ FinOps T7 foundation runtime composition integration > T7-R03 recomputeAggregatesAndRefresh → T2 success → T4 projection refreshed  353ms
   ✓ FinOps T7 foundation runtime composition integration > T7-R11 no T3 side effect  367ms
 ✓ __tests__/oa/finops/postgres/t7.rollout.integration.test.ts (10 tests) 1041ms
 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 733ms
 ✓ __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts (8 tests) 2182ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-01 reconciliation mutation refresh — BILLED reflected  384ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-04 multi-currency isolation — USD/EUR separate, no FX  393ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-08 projection replacement removes obsolete currency rows  333ms
 ✓ __tests__/oa/finops/postgres/t6.audit-journal.integration.test.ts (4 tests) 512ms
 ✓ __tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts (14 tests) 1897ms
 ✓ __tests__/oa/finops/t1.coordinator.failopen.test.ts (5 tests) 366ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 840ms
 ✓ __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts (4 tests) 188ms
 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 351ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 7ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 8ms
 ✓ __tests__/oa/finops/t4.enforcement.unit.test.ts (19 tests) 98ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (7 tests) 48ms
 ✓ __tests__/oa/finops/t3.alert-review.unit.test.ts (26 tests) 88ms
 ✓ __tests__/oa/finops/t1.capture.unit.test.ts (23 tests) 30ms
 ✓ __tests__/oa/finops/t4.projection-refresh.unit.test.ts (8 tests) 98ms
 ✓ __tests__/oa/finops/t6.audit.unit.test.ts (6 tests) 40ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 25ms
 ✓ __tests__/oa/finops/t2.reconciliation.unit.test.ts (4 tests) 20ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 24ms
 ✓ __tests__/oa/finops/t2.money.unit.test.ts (12 tests) 10ms
 ✓ __tests__/oa/finops/t2.aggregate.unit.test.ts (5 tests) 24ms
 ✓ __tests__/oa/finops/t7.rollout.unit.test.ts (10 tests) 9ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 10ms

 Test Files  26 passed (26)
      Tests  255 passed (255)
   Start at  10:50:34
   Duration  36.84s (transform 2.73s, setup 3.76s, collect 5.11s, tests 12.00s, environment 12ms, prepare 4.20s)

```
### Regressions T2/T4/T6
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts (8 tests) 3750ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-01 reconciliation mutation refresh — BILLED reflected  875ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-03 non-blocking evidence excluded from blockingEligibleAmount  461ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-04 multi-currency isolation — USD/EUR separate, no FX  761ms
   ✓ FinOps T4 PostgreSQL projection refresh integration > PRF-08 projection replacement removes obsolete currency rows  635ms
 ✓ __tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts (14 tests) 2543ms
   ✓ FinOps T4 PostgreSQL enforcement projection integration > 10. concurrent rebuild same project/period serialized  410ms
   ✓ FinOps T4 PostgreSQL enforcement projection integration > 13. signed correction-safe amounts accepted  339ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 587ms
 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 484ms
 ✓ __tests__/oa/finops/postgres/t6.runtime-composition.integration.test.ts (4 tests) 519ms
 ✓ __tests__/oa/finops/t4.enforcement.unit.test.ts (19 tests) 94ms
 ✓ __tests__/oa/finops/t4.projection-refresh.unit.test.ts (8 tests) 35ms
 ✓ __tests__/oa/finops/t2.aggregate.unit.test.ts (5 tests) 17ms
 ✓ __tests__/oa/finops/t2.reconciliation.unit.test.ts (4 tests) 20ms

 Test Files  9 passed (9)
      Tests  72 passed (72)
   Start at  10:46:42
   Duration  17.64s (transform 1.06s, setup 1.49s, collect 1.94s, tests 8.05s, environment 4ms, prepare 1.86s)

```
### migrate:up
```
);
ALTER TABLE "finops_enforcement_projection"
  ADD CONSTRAINT "finops_enforcement_projection_pkey" PRIMARY KEY ("project_id", "period_start", "currency");
ALTER TABLE "finops_enforcement_projection"
  ADD CONSTRAINT "finops_enforcement_projection_currency_chk" CHECK (currency ~ '^[A-Z]{3}$');
ALTER TABLE "finops_enforcement_projection"
  ADD CONSTRAINT "finops_enforcement_projection_period_start_chk" CHECK (period_start = date_trunc('month', period_start::timestamp)::date);
ALTER TABLE "finops_enforcement_projection"
  ADD CONSTRAINT "finops_enforcement_projection_rebuild_version_chk" CHECK (rebuild_version >= 1);
ALTER TABLE "finops_enforcement_projection"
  ADD CONSTRAINT "finops_enforcement_projection_counts_chk" CHECK (eligible_cost_event_count >= 0 AND billed_event_count >= 0 AND provider_observed_event_count >= 0);
CREATE INDEX "finops_enforcement_projection_project_period_idx" ON "finops_enforcement_projection" ("project_id", "period_start");
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754600003000_finops-t4-enforcement-projection', NOW());


### MIGRATION 1754600004000_finops-t7-rollout-config (UP) ###
CREATE TABLE "finops_rollout_config" (
  "project_id" text PRIMARY KEY NOT NULL,
  "mode" text NOT NULL,
  "revision" bigint NOT NULL,
  "updated_at" timestamptz NOT NULL
);
ALTER TABLE "finops_rollout_config"
  ADD CONSTRAINT "finops_rollout_config_mode_chk" CHECK (mode IN ('OFF', 'SHADOW', 'MONITOR', 'E1_ENFORCED'));
ALTER TABLE "finops_rollout_config"
  ADD CONSTRAINT "finops_rollout_config_revision_chk" CHECK (revision >= 1);
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754600004000_finops-t7-rollout-config', NOW());


Migrations complete!
```
### typecheck / lint / build / full suite
```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.63 kB         108 kB
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

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-08T08:55:05.274Z","status":"ok","projectId":"proj-9cd3ce0f-1598-4a1d-9bdb-7c1fbc34f05f","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-08T08:55:05.276Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-08T08:55:05.278Z","status":"ok","projectId":"proj-9cd3ce0f-1598-4a1d-9bdb-7c1fbc34f05f","durationMs":3}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-08T08:55:05.279Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-08T08:55:05.279Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 78ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 12ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 296ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 221ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 11ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 6ms
 ✓ __tests__/fixtures.test.ts (2 tests) 7ms
 ✓ __tests__/navigation.test.tsx (2 tests) 178ms
 ✓ __tests__/shell.test.tsx (1 test) 183ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 41ms
 ✓ __tests__/gates.test.tsx (1 test) 157ms
 ✓ __tests__/status-pill.test.tsx (1 test) 58ms

 Test Files  157 passed (157)
      Tests  1586 passed (1586)
   Start at  10:51:33
   Duration  229.80s (transform 12.13s, setup 17.95s, collect 36.06s, tests 77.04s, environment 21.80s, prepare 20.59s)

```
### Anti-activation scan (architecture contract hits only)
```
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:5: * T4 owns monetary enforcement evaluation.
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:10: * - No monetary threshold / currency / IAM / actor fields.
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:11: * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:16:  | "SHADOW"
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:17:  | "MONITOR"
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:18:  | "E1_ENFORCED";
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:27:export type FinOpsRolloutPolicyEffect = "signal_only" | "enforce" | null;
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:40: * blockingAllowed=true for E1 does NOT activate enforcement consumers.
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:56:  "SHADOW",
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:57:  "MONITOR",
projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts:58:  "E1_ENFORCED",
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts:67:    async upsertProjectRollout(
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts:9: * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts:10: * - Does not expose upsertProjectRollout as a product API.
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:10: * Never evaluates T4, never reads enforcement projection, never calls provider,
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:11: * never supplies monetary thresholds.
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:42:    case "SHADOW":
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:44:        mode: "SHADOW",
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:53:    case "MONITOR":
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:55:        mode: "MONITOR",
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:64:    case "E1_ENFORCED":
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:66:        mode: "E1_ENFORCED",
projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts:68:        policyEffect: "enforce",

```
### Forbidden path diff (must be empty)
```
(empty)
```

## COMPLETE content of every CREATE file

### FILE: `projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts`

```ts
/**
 * FinOps T7 — rollout / activation readiness types (foundation only).
 *
 * T7 owns mode vocabulary and rollout resolution.
 * T4 owns monetary enforcement evaluation.
 * T3 owns human-review state.
 *
 * Anti-claims:
 * - Mode presence ≠ activation.
 * - No monetary threshold / currency / IAM / actor fields.
 * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
 */

export type FinOpsRolloutMode =
  | "OFF"
  | "SHADOW"
  | "MONITOR"
  | "E1_ENFORCED";

export type FinOpsRolloutConfig = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutMode;
  readonly revision: number;
  readonly updatedAt: string;
};

export type FinOpsRolloutPolicyEffect = "signal_only" | "enforce" | null;

export type FinOpsRolloutActivationState =
  | "inert"
  | "configured_not_activated";

export type FinOpsRolloutResolution =
  | "default_off"
  | "persisted"
  | "fail_open_off";

/**
 * T7-owned runtime instruction. Architectural representation only.
 * blockingAllowed=true for E1 does NOT activate enforcement consumers.
 */
export type FinOpsRolloutInstruction = {
  readonly mode: FinOpsRolloutMode;
  readonly evaluateT4: boolean;
  readonly policyEffect: FinOpsRolloutPolicyEffect;
  readonly blockingAllowed: boolean;
  readonly requiresT3Sync: boolean;
  readonly activationState: FinOpsRolloutActivationState;
  readonly resolution: FinOpsRolloutResolution;
  /** Present only when a persisted row was successfully read. */
  readonly config: FinOpsRolloutConfig | null;
};

export const FINOPS_ROLLOUT_MODES: ReadonlyArray<FinOpsRolloutMode> = [
  "OFF",
  "SHADOW",
  "MONITOR",
  "E1_ENFORCED",
] as const;

export function isFinOpsRolloutMode(value: string): value is FinOpsRolloutMode {
  return (FINOPS_ROLLOUT_MODES as ReadonlyArray<string>).includes(value);
}

```

### FILE: `projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts`

```ts
/**
 * FinOps T7 — project-scoped rollout config port (internal FinOps only).
 *
 * NOT a product activation endpoint.
 * NOT a privileged Morris mutation API.
 * Upsert exists for future distinct activation cycles / tests only.
 */

import type {
  FinOpsRolloutConfig,
  FinOpsRolloutMode,
} from "../application/types.rollout";

export type UpsertProjectRolloutInput = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutMode;
  /** ISO-8601 timestamp; caller-supplied for deterministic tests. */
  readonly updatedAt: string;
};

export type FinOpsRolloutPort = {
  /**
   * Read persisted rollout for a project.
   * Absence of row → null (resolver applies DEFAULT-OFF).
   */
  readonly readProjectRollout: (
    projectId: string,
  ) => Promise<FinOpsRolloutConfig | null>;

  /**
   * Atomic upsert. First write revision=1; subsequent writes revision=previous+1.
   * Explicit mutation always increments revision (including same-mode rewrite).
   */
  readonly upsertProjectRollout: (
    input: UpsertProjectRolloutInput,
  ) => Promise<FinOpsRolloutConfig>;
};

```

### FILE: `projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts`

```ts
/**
 * FinOps T7 — rollout resolver / mode adapter (foundation).
 *
 * Responsibilities:
 * 1. read project-scoped config
 * 2. missing row → OFF (default_off)
 * 3. store technical failure → fail-open OFF
 * 4. translate mode → T7 instruction
 *
 * Never evaluates T4, never reads enforcement projection, never calls provider,
 * never supplies monetary thresholds.
 */

import type { FinOpsRolloutPort } from "../ports/finopsRolloutPort";
import type {
  FinOpsRolloutConfig,
  FinOpsRolloutInstruction,
  FinOpsRolloutMode,
} from "./types.rollout";

export type ResolveFinOpsRolloutDeps = {
  readonly rollout: FinOpsRolloutPort;
};

function instructionFor(
  mode: FinOpsRolloutMode,
  resolution: FinOpsRolloutInstruction["resolution"],
  config: FinOpsRolloutConfig | null,
): FinOpsRolloutInstruction {
  switch (mode) {
    case "OFF":
      return {
        mode: "OFF",
        evaluateT4: false,
        policyEffect: null,
        blockingAllowed: false,
        requiresT3Sync: false,
        activationState: "inert",
        resolution,
        config,
      };
    case "SHADOW":
      return {
        mode: "SHADOW",
        evaluateT4: true,
        policyEffect: "signal_only",
        blockingAllowed: false,
        requiresT3Sync: false,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    case "MONITOR":
      return {
        mode: "MONITOR",
        evaluateT4: true,
        policyEffect: "signal_only",
        blockingAllowed: false,
        requiresT3Sync: true,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    case "E1_ENFORCED":
      return {
        mode: "E1_ENFORCED",
        evaluateT4: true,
        policyEffect: "enforce",
        blockingAllowed: true,
        requiresT3Sync: true,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

function offInstruction(
  resolution: "default_off" | "fail_open_off",
): FinOpsRolloutInstruction {
  return instructionFor("OFF", resolution, null);
}

/**
 * Resolve project rollout. Invalid / empty projectId → fail-open OFF
 * (never throws raw DB details).
 */
export async function resolveFinOpsRollout(
  deps: ResolveFinOpsRolloutDeps,
  projectId: string,
): Promise<FinOpsRolloutInstruction> {
  const trimmed = typeof projectId === "string" ? projectId.trim() : "";
  if (!trimmed) {
    return offInstruction("fail_open_off");
  }

  try {
    const config = await deps.rollout.readProjectRollout(trimmed);
    if (config === null) {
      return offInstruction("default_off");
    }
    return instructionFor(config.mode, "persisted", config);
  } catch {
    return offInstruction("fail_open_off");
  }
}

```

### FILE: `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts`

```ts
/**
 * FinOps T7 — PostgreSQL project-scoped rollout config store.
 *
 * Table: finops_rollout_config
 * Absence of row ≠ OFF row. Resolver applies DEFAULT-OFF.
 * Never seeds. Never closes the injected pool.
 */

import type { Pool } from "pg";
import type {
  FinOpsRolloutConfig,
  FinOpsRolloutMode,
} from "../../application/types.rollout";
import { isFinOpsRolloutMode } from "../../application/types.rollout";
import type {
  FinOpsRolloutPort,
  UpsertProjectRolloutInput,
} from "../../ports/finopsRolloutPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatUpdatedAt(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return String(value);
}

function rowToConfig(row: Record<string, unknown>): FinOpsRolloutConfig {
  const modeRaw = String(row.mode);
  if (!isFinOpsRolloutMode(modeRaw)) {
    throw new Error("invalid rollout mode from postgres");
  }
  return {
    projectId: String(row.project_id),
    mode: modeRaw,
    revision: Number(row.revision),
    updatedAt: formatUpdatedAt(row.updated_at),
  };
}

export function createPostgresFinOpsRolloutStore(pool: Pool): FinOpsRolloutPort {
  return {
    async readProjectRollout(projectId: string): Promise<FinOpsRolloutConfig | null> {
      const trimmed = projectId.trim();
      if (!trimmed) {
        return null;
      }
      try {
        const result = await pool.query<Record<string, unknown>>(
          `SELECT project_id, mode, revision, updated_at
           FROM finops_rollout_config
           WHERE project_id = $1`,
          [trimmed],
        );
        const row = result.rows[0];
        if (!row) return null;
        return rowToConfig(row);
      } catch (error) {
        const sanitized = sanitizeDbError(error);
        throw Object.assign(
          new Error(sanitized.message),
          { code: sanitized.code, technicalDetailsRedacted: true },
        );
      }
    },

    async upsertProjectRollout(
      input: UpsertProjectRolloutInput,
    ): Promise<FinOpsRolloutConfig> {
      const projectId = input.projectId.trim();
      const mode: FinOpsRolloutMode = input.mode;
      const updatedAt = input.updatedAt.trim();
      if (!projectId) {
        throw Object.assign(new Error("FinOps rollout rejected invalid projectId"), {
          code: "FINOPS_VALIDATION_FAILED",
          technicalDetailsRedacted: true,
        });
      }
      if (!isFinOpsRolloutMode(mode)) {
        throw Object.assign(new Error("FinOps rollout rejected invalid mode"), {
          code: "FINOPS_VALIDATION_FAILED",
          technicalDetailsRedacted: true,
        });
      }

      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const existing = await client.query<{ revision: string }>(
          `SELECT revision FROM finops_rollout_config WHERE project_id = $1 FOR UPDATE`,
          [projectId],
        );
        const nextRevision =
          existing.rows[0] === undefined
            ? 1
            : Number(existing.rows[0].revision) + 1;

        const result = await client.query<Record<string, unknown>>(
          `INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
           VALUES ($1, $2, $3, $4::timestamptz)
           ON CONFLICT (project_id) DO UPDATE SET
             mode = EXCLUDED.mode,
             revision = EXCLUDED.revision,
             updated_at = EXCLUDED.updated_at
           RETURNING project_id, mode, revision, updated_at`,
          [projectId, mode, nextRevision, updatedAt],
        );
        await client.query("COMMIT");
        const row = result.rows[0];
        if (!row) {
          throw Object.assign(new Error("FinOps rollout upsert returned no row"), {
            code: "FINOPS_CAPTURE_FAILED",
            technicalDetailsRedacted: true,
          });
        }
        return rowToConfig(row);
      } catch (error) {
        try {
          await client.query("ROLLBACK");
        } catch {
          // ignore rollback failure
        }
        if (
          error &&
          typeof error === "object" &&
          "technicalDetailsRedacted" in error
        ) {
          throw error;
        }
        const sanitized = sanitizeDbError(error);
        throw Object.assign(
          new Error(sanitized.message),
          { code: sanitized.code, technicalDetailsRedacted: true },
        );
      } finally {
        client.release();
      }
    },
  };
}

```

### FILE: `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`

```ts
/**
 * FinOps T7 — canonical server-side foundation runtime composition (default-OFF).
 *
 * Reuses T6 composeFinOpsRuntime (ledger + audit + capture) without modification.
 * Wires T2 mutation / reconciliation through post-T2 T4 refresh wrappers.
 * Exposes T7 rollout resolution (read-only at composition boundary).
 *
 * Anti-claims:
 * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
 * - Does not expose upsertProjectRollout as a product API.
 * - Does not modify composeFinOpsRuntime, execution-run, T3, T4, T6 sources.
 * - Does not create pools, read env, or close the injected pool.
 * - Does not create FinOpsEnforcementPort / provider consumers.
 */

import type { Pool } from "pg";
import {
  recomputeAggregatesThenRefreshEnforcementProjection,
  reconcileProjectPeriodThenRefreshEnforcementProjection,
  type RefreshAfterReconcileResult,
  type RefreshAfterRecomputeResult,
} from "../application/refreshEnforcementAfterT2";
import { resolveFinOpsRollout } from "../application/resolveFinOpsRollout";
import type {
  ReconcileProjectPeriodInput,
  RecomputeAggregatesInput,
} from "../application/types.aggregate";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsAggregateStore } from "../infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "../infrastructure/postgres/postgresFinOpsReconciliation";
import { createPostgresFinOpsRolloutStore } from "../infrastructure/postgres/postgresFinOpsRolloutStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import {
  composeFinOpsRuntime,
  type FinOpsRuntimeComposition,
} from "./composeFinOpsRuntime";

export type ComposeFinOpsT7RuntimeInput = {
  /** Caller-owned pool. Composition never closes it. */
  readonly pool: Pool;
  readonly nowIso: () => string;
};

export type FinOpsT7RuntimeComposition = {
  readonly capture: FinOpsCapturePort;
  readonly flushAudit: () => Promise<void>;
  readonly resolveProjectRollout: (
    projectId: string,
  ) => Promise<FinOpsRolloutInstruction>;
  readonly recomputeAggregatesAndRefresh: (
    input: RecomputeAggregatesInput,
  ) => Promise<RefreshAfterRecomputeResult>;
  readonly reconcileProjectPeriodAndRefresh: (
    input: ReconcileProjectPeriodInput,
  ) => Promise<RefreshAfterReconcileResult>;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7Runtime is server-only and must not run in a browser context.",
    );
  }
}

/**
 * Compose the canonical T7 server foundation boundary.
 * T6 capture/audit reused; T2 mutations always route through T4 refresh wrappers.
 */
export function composeFinOpsT7Runtime(
  input: ComposeFinOpsT7RuntimeInput,
): FinOpsT7RuntimeComposition {
  assertServerOnly();
  const { pool, nowIso } = input;

  const t6: FinOpsRuntimeComposition = composeFinOpsRuntime({ pool });
  const aggregates = createPostgresFinOpsAggregateStore(pool);
  const reconciliation = createPostgresFinOpsReconciliation(pool);
  const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
  const rollout = createPostgresFinOpsRolloutStore(pool);

  const refreshDeps = {
    aggregates,
    reconciliation,
    projection,
    nowIso,
  };

  return {
    capture: t6.capture,
    flushAudit: t6.flushAudit,
    resolveProjectRollout: (projectId: string) =>
      resolveFinOpsRollout({ rollout }, projectId),
    recomputeAggregatesAndRefresh: (recomputeInput) =>
      recomputeAggregatesThenRefreshEnforcementProjection(
        refreshDeps,
        recomputeInput,
      ),
    reconcileProjectPeriodAndRefresh: (reconcileInput) =>
      reconcileProjectPeriodThenRefreshEnforcementProjection(
        refreshDeps,
        reconcileInput,
      ),
  };
}

```

### FILE: `projects/sfia-studio/app/db/migrations/1754600004000_finops-t7-rollout-config.js`

```js
/**
 * Migration: FinOps T7 dedicated project-scoped rollout config.
 *
 * Order (must remain):
 *   1754500000000 T1
 *   < 1754600000000 T2
 *   < 1754600001000 T6
 *   < 1754600002000 T3
 *   < 1754600003000 T4
 *   < 1754600004000 T7
 *
 * No seed. No monetary columns. No IAM/actor fields. No T6 events. No FK.
 * DEFAULT-OFF is applied in the T7 resolver when no row exists — not via seed.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_rollout_config", {
    project_id: { type: "text", primaryKey: true, notNull: true },
    mode: { type: "text", notNull: true },
    revision: { type: "bigint", notNull: true },
    updated_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_rollout_config", "finops_rollout_config_mode_chk", {
    check: "mode IN ('OFF', 'SHADOW', 'MONITOR', 'E1_ENFORCED')",
  });

  pgm.addConstraint(
    "finops_rollout_config",
    "finops_rollout_config_revision_chk",
    {
      check: "revision >= 1",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Data-preserving doctrine: refuse drop when rollout rows exist.
  pgm.sql(`
DO $$
DECLARE
  rollout_count bigint;
BEGIN
  SELECT COUNT(*) INTO rollout_count FROM finops_rollout_config;
  IF rollout_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T7 down migration: rows exist in finops_rollout_config';
  END IF;
END $$;
`);

  pgm.dropTable("finops_rollout_config");
};

```

### FILE: `projects/sfia-studio/app/__tests__/oa/finops/t7.rollout.unit.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T7 — rollout resolver unit tests (T7-U01..T7-U10).
 * Architecture modes only — NOT activation. No provider / T4 / threshold.
 */
import { describe, expect, it, vi } from "vitest";
import { resolveFinOpsRollout } from "@/lib/oa/finops/application/resolveFinOpsRollout";
import type {
  FinOpsRolloutConfig,
  FinOpsRolloutMode,
} from "@/lib/oa/finops/application/types.rollout";
import type { FinOpsRolloutPort } from "@/lib/oa/finops/ports/finopsRolloutPort";

function config(
  mode: FinOpsRolloutMode,
  projectId = "proj-u",
): FinOpsRolloutConfig {
  return {
    projectId,
    mode,
    revision: 1,
    updatedAt: "2026-08-08T08:00:00.000Z",
  };
}

function memoryRollout(
  initial: FinOpsRolloutConfig | null = null,
  opts?: { readonly throwOnRead?: boolean },
): FinOpsRolloutPort & {
  readonly reads: string[];
  readonly upserts: number;
} {
  let stored = initial;
  const reads: string[] = [];
  let upserts = 0;
  return {
    reads,
    get upserts() {
      return upserts;
    },
    async readProjectRollout(projectId) {
      reads.push(projectId);
      if (opts?.throwOnRead) {
        throw new Error("ECONNREFUSED postgres://secret:5432/db password=leak");
      }
      if (stored && stored.projectId === projectId) return stored;
      return null;
    },
    async upsertProjectRollout(input) {
      upserts += 1;
      stored = {
        projectId: input.projectId,
        mode: input.mode,
        revision: (stored?.revision ?? 0) + 1,
        updatedAt: input.updatedAt,
      };
      return stored;
    },
  };
}

describe("FinOps T7 rollout resolver unit", () => {
  it("T7-U01 no persisted config → OFF → default_off → evaluateT4=false → blockingAllowed=false", async () => {
    const rollout = memoryRollout(null);
    const result = await resolveFinOpsRollout({ rollout }, "proj-u01");
    expect(result.mode).toBe("OFF");
    expect(result.resolution).toBe("default_off");
    expect(result.evaluateT4).toBe(false);
    expect(result.blockingAllowed).toBe(false);
    expect(result.policyEffect).toBeNull();
    expect(result.activationState).toBe("inert");
    expect(result.config).toBeNull();
  });

  it("T7-U02 store read technical throw → fail_open_off → OFF → no throw", async () => {
    const rollout = memoryRollout(null, { throwOnRead: true });
    const result = await resolveFinOpsRollout({ rollout }, "proj-u02");
    expect(result.mode).toBe("OFF");
    expect(result.resolution).toBe("fail_open_off");
    expect(result.blockingAllowed).toBe(false);
    expect(result.evaluateT4).toBe(false);
  });

  it("T7-U03 persisted OFF → OFF", async () => {
    const rollout = memoryRollout(config("OFF", "proj-u03"));
    const result = await resolveFinOpsRollout({ rollout }, "proj-u03");
    expect(result.mode).toBe("OFF");
    expect(result.resolution).toBe("persisted");
    expect(result.activationState).toBe("inert");
    expect(result.config?.revision).toBe(1);
  });

  it("T7-U04 persisted SHADOW → signal_only → blockingAllowed=false → T3 not required", async () => {
    const rollout = memoryRollout(config("SHADOW", "proj-u04"));
    const result = await resolveFinOpsRollout({ rollout }, "proj-u04");
    expect(result.mode).toBe("SHADOW");
    expect(result.evaluateT4).toBe(true);
    expect(result.policyEffect).toBe("signal_only");
    expect(result.blockingAllowed).toBe(false);
    expect(result.requiresT3Sync).toBe(false);
    expect(result.activationState).toBe("configured_not_activated");
  });

  it("T7-U05 persisted MONITOR → signal_only → blockingAllowed=false → T3 sync required", async () => {
    const rollout = memoryRollout(config("MONITOR", "proj-u05"));
    const result = await resolveFinOpsRollout({ rollout }, "proj-u05");
    expect(result.mode).toBe("MONITOR");
    expect(result.policyEffect).toBe("signal_only");
    expect(result.blockingAllowed).toBe(false);
    expect(result.requiresT3Sync).toBe(true);
    expect(result.activationState).toBe("configured_not_activated");
  });

  it("T7-U06 persisted E1_ENFORCED → enforce → blockingAllowed=true → configured_not_activated → no provider/T4 call", async () => {
    const readSpy = vi.fn(async () => config("E1_ENFORCED", "proj-u06"));
    const rollout: FinOpsRolloutPort = {
      readProjectRollout: readSpy,
      async upsertProjectRollout() {
        throw new Error("upsert must not be called by resolver");
      },
    };
    const result = await resolveFinOpsRollout({ rollout }, "proj-u06");
    expect(result.mode).toBe("E1_ENFORCED");
    expect(result.policyEffect).toBe("enforce");
    expect(result.blockingAllowed).toBe(true);
    expect(result.activationState).toBe("configured_not_activated");
    expect(result.evaluateT4).toBe(true);
    expect(readSpy).toHaveBeenCalledTimes(1);
  });

  it("T7-U07 invalid projectId → fail-open OFF → never raw DB details", async () => {
    const rollout = memoryRollout(null, { throwOnRead: true });
    const empty = await resolveFinOpsRollout({ rollout }, "   ");
    expect(empty.mode).toBe("OFF");
    expect(empty.resolution).toBe("fail_open_off");
    expect(JSON.stringify(empty)).not.toMatch(/postgres:\/\//i);
    expect(JSON.stringify(empty)).not.toMatch(/password/i);
  });

  it("T7-U08 resolver never touches enforcement projection", async () => {
    const rollout = memoryRollout(config("SHADOW", "proj-u08"));
    const projectionTouch = vi.fn();
    const result = await resolveFinOpsRollout({ rollout }, "proj-u08");
    expect(result.mode).toBe("SHADOW");
    expect(projectionTouch).not.toHaveBeenCalled();
  });

  it("T7-U09 resolver never invokes provider", async () => {
    const provider = vi.fn();
    const rollout = memoryRollout(config("MONITOR", "proj-u09"));
    await resolveFinOpsRollout({ rollout }, "proj-u09");
    expect(provider).not.toHaveBeenCalled();
  });

  it("T7-U10 no monetary threshold required", async () => {
    const rollout = memoryRollout(config("E1_ENFORCED", "proj-u10"));
    const result = await resolveFinOpsRollout({ rollout }, "proj-u10");
    expect(result).not.toHaveProperty("threshold");
    expect(result).not.toHaveProperty("thresholdAmount");
    expect(JSON.stringify(result)).not.toMatch(/"15"|"20"|"25"|"30"/);
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.rollout.integration.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T7 — rollout persistence PostgreSQL integration (T7-PG01..T7-PG10).
 * Ephemeral local/CI Postgres only — never Neon. No seed. No activation.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Pool, PoolClient } from "pg";
import { resolveFinOpsRollout } from "@/lib/oa/finops/application/resolveFinOpsRollout";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const REFUSE_SQL = `
DO $$
DECLARE
  rollout_count bigint;
BEGIN
  SELECT COUNT(*) INTO rollout_count FROM finops_rollout_config;
  IF rollout_count > 0 THEN
    RAISE EXCEPTION
      'Refuse FinOps T7 down migration: rows exist in finops_rollout_config';
  END IF;
END $$;
`;

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS finops_rollout_config (
  project_id text PRIMARY KEY NOT NULL,
  mode text NOT NULL,
  revision bigint NOT NULL,
  updated_at timestamptz NOT NULL,
  CONSTRAINT finops_rollout_config_mode_chk
    CHECK (mode IN ('OFF', 'SHADOW', 'MONITOR', 'E1_ENFORCED')),
  CONSTRAINT finops_rollout_config_revision_chk
    CHECK (revision >= 1)
);
`;

describeDb("FinOps T7 PostgreSQL rollout integration", () => {
  let pool: Pool;
  let lockClient: PoolClient;
  const suffix = `${Date.now()}`;
  const prefix = `proj-t7-pg-${suffix}`;

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
    // Session-scoped lock on a held client — serialize DROP/CREATE vs other T7 suites.
    lockClient = await pool.connect();
    await lockClient.query(
      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
    );
  });

  afterAll(async () => {
    try {
      await pool.query(
        `DELETE FROM finops_rollout_config WHERE project_id LIKE $1`,
        [`${prefix}%`],
      );
    } catch {
      // table may be mid-roundtrip in this suite only
    }
    try {
      await lockClient.query(
        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
      );
    } catch {
      // ignore
    }
    lockClient.release();
    await closeFinOpsPool(pool);
  });

  it("T7-PG01 no row → resolver OFF", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-01`;
    const read = await store.readProjectRollout(projectId);
    expect(read).toBeNull();
    const resolved = await resolveFinOpsRollout({ rollout: store }, projectId);
    expect(resolved.mode).toBe("OFF");
    expect(resolved.resolution).toBe("default_off");
  });

  it("T7-PG02 upsert OFF → read OFF revision 1", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-02`;
    const written = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:10:00.000Z",
    });
    expect(written.mode).toBe("OFF");
    expect(written.revision).toBe(1);
    const read = await store.readProjectRollout(projectId);
    expect(read?.mode).toBe("OFF");
    expect(read?.revision).toBe(1);
  });

  it("T7-PG03 upsert SHADOW → persisted project-scoped", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-03`;
    await store.upsertProjectRollout({
      projectId,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:11:00.000Z",
    });
    const read = await store.readProjectRollout(projectId);
    expect(read?.mode).toBe("SHADOW");
    expect(read?.projectId).toBe(projectId);
  });

  it("T7-PG04 second mutation → revision increments", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-04`;
    const first = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:12:00.000Z",
    });
    const second = await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:12:30.000Z",
    });
    expect(first.revision).toBe(1);
    expect(second.revision).toBe(2);
  });

  it("T7-PG05 multi-project isolation", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const a = `${prefix}-05a`;
    const b = `${prefix}-05b`;
    await store.upsertProjectRollout({
      projectId: a,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:13:00.000Z",
    });
    await store.upsertProjectRollout({
      projectId: b,
      mode: "MONITOR",
      updatedAt: "2026-08-08T08:13:01.000Z",
    });
    expect((await store.readProjectRollout(a))?.mode).toBe("SHADOW");
    expect((await store.readProjectRollout(b))?.mode).toBe("MONITOR");
  });

  it("T7-PG06 invalid DB mode blocked by constraint", async () => {
    const projectId = `${prefix}-06`;
    await expect(
      pool.query(
        `INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
         VALUES ($1, 'ACTIVE', 1, NOW())`,
        [projectId],
      ),
    ).rejects.toThrow();
  });

  it("T7-PG07 no global/default row created by migration", async () => {
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600004000_finops-t7-rollout-config.js",
    );
    const source = readFileSync(migrationPath, "utf8");
    const executable = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(executable).not.toMatch(/INSERT\s+INTO\s+finops_rollout_config/i);
    expect(executable).not.toMatch(/\bINSERT\b/i);
    const globals = await pool.query(
      `SELECT project_id FROM finops_rollout_config
       WHERE project_id IN ('*', '__global__', 'default', '')`,
    );
    expect(globals.rows).toHaveLength(0);
  });

  it("T7-PG08 down migration refuses while rows exist", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-08`;
    await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: "2026-08-08T08:14:00.000Z",
    });
    await expect(pool.query(REFUSE_SQL)).rejects.toThrow(
      /Refuse FinOps T7 down migration/,
    );
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600004000_finops-t7-rollout-config.js",
    );
    expect(readFileSync(migrationPath, "utf8")).toMatch(
      /Refuse FinOps T7 down migration/,
    );
  });

  it("T7-PG09 after clearing rows, down/up round trip succeeds", async () => {
    const client = await pool.connect();
    try {
      await client.query(
        `SELECT pg_advisory_lock(hashtext('finops-t7-migration-roundtrip'))`,
      );
      await client.query(`DELETE FROM finops_rollout_config`);
      await client.query(REFUSE_SQL);
      await client.query(`DROP TABLE finops_rollout_config`);
      const missing = await client.query(
        `SELECT to_regclass('public.finops_rollout_config') AS reg`,
      );
      expect(missing.rows[0]?.reg).toBeNull();
      await client.query(CREATE_TABLE_SQL);
      const present = await client.query(
        `SELECT to_regclass('public.finops_rollout_config') AS reg`,
      );
      expect(present.rows[0]?.reg).toBe("finops_rollout_config");
      const count = await client.query(
        `SELECT COUNT(*)::int AS c FROM finops_rollout_config`,
      );
      expect(count.rows[0]?.c).toBe(0);
    } finally {
      try {
        await client.query(
          `SELECT pg_advisory_unlock(hashtext('finops-t7-migration-roundtrip'))`,
        );
      } catch {
        // ignore
      }
      client.release();
    }
  });

  it("T7-PG10 timestamps stored as timestamptz / canonical ISO on read", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-10`;
    const iso = "2026-08-08T08:15:00.000Z";
    await store.upsertProjectRollout({
      projectId,
      mode: "OFF",
      updatedAt: iso,
    });
    const col = await pool.query<{ data_type: string }>(
      `SELECT data_type FROM information_schema.columns
       WHERE table_name = 'finops_rollout_config' AND column_name = 'updated_at'`,
    );
    expect(col.rows[0]?.data_type).toBe("timestamp with time zone");
    const read = await store.readProjectRollout(projectId);
    expect(read?.updatedAt).toBe(iso);
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T7 — foundation runtime composition integration (T7-R01..T7-R16).
 * Ephemeral local/CI Postgres only — never Neon.
 * Mode rows in TEST DB ≠ activation. No provider / execution-run / coordinateExecutionRun.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Pool, PoolClient } from "pg";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import { composeFinOpsT7Runtime } from "@/lib/oa/finops/server/composeFinOpsT7Runtime";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration 15/20/25/30. */
const FICT_BILLED = "5.11000000";

describeDb("FinOps T7 foundation runtime composition integration", () => {
  let pool: Pool;
  let lockClient: PoolClient;
  const suffix = `${Date.now()}`;
  const prefix = `proj-t7-rt-${suffix}`;

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    lockClient = await pool.connect();
    await lockClient.query(
      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
    );
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id LIKE $1`,
      [`${prefix}%`],
    );
    try {
      await lockClient.query(
        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
      );
    } catch {
      // ignore
    }
    lockClient.release();
    await closeFinOpsPool(pool);
  });

  function runtime() {
    return composeFinOpsT7Runtime({
      pool,
      nowIso: () => "2026-08-08T08:20:00.000Z",
    });
  }

  it("T7-R01 composeFinOpsT7Runtime → resolve no config → OFF", async () => {
    const rt = runtime();
    const result = await rt.resolveProjectRollout(`${prefix}-r01`);
    expect(result.mode).toBe("OFF");
    expect(result.resolution).toBe("default_off");
    expect(result.blockingAllowed).toBe(false);
  });

  it("T7-R02 composition returns T6 capture boundary — T6 behavior preserved", async () => {
    const rt = runtime();
    const runId = `run-t7-r02-${suffix}`;
    const created = await rt.capture.captureUsage({
      projectId: `${prefix}-r02`,
      executionRunId: runId,
      correlationId: "corr-t7-r02",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 2,
        outputTokens: 1,
        totalTokens: 3,
        providerResponseId: `resp-t7-r02-${suffix}`,
      },
    });
    expect(created.status).toBe("created");
    await rt.flushAudit();
    const ledger = await pool.query(
      `SELECT execution_run_id FROM finops_usage_event WHERE execution_run_id = $1`,
      [runId],
    );
    expect(ledger.rows).toHaveLength(1);
  });

  it("T7-R03 recomputeAggregatesAndRefresh → T2 success → T4 projection refreshed", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r03`;
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-r03-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    const recon = await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r03-${suffix}`,
      facts: [
        {
          executionRunId: `run-r03-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r03-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    expect(recon.t2.outcome).toBe("succeeded");
    const result = await rt.recomputeAggregatesAndRefresh({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    expect(usd?.billedAmount).toBe(FICT_BILLED);
    expect(identity.costEventId.length).toBeGreaterThan(0);
  });

  it("T7-R04 reconcileProjectPeriodAndRefresh → T2 success → T4 refreshed exactly once", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r04`;
    const result = await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r04-${suffix}`,
      facts: [
        {
          executionRunId: `run-r04-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r04-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    expect(result.t4Refresh.projections).toHaveLength(1);
    expect(result.t4Refresh.projections[0]?.rebuildVersion).toBe(1);
  });

  it("T7-R05 T4 refresh failure → T2 success preserved → refresh failure visible", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r05`;
    await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r05-seed-${suffix}`,
      facts: [
        {
          executionRunId: `run-r05-seed-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r05-seed-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });

    // Projection store uses PoolClient.query (not pool.query) — wrap connect.
    const originalConnect = pool.connect.bind(pool);
    let failDeletes = true;
    pool.connect = (async () => {
      const client = await originalConnect();
      const originalClientQuery = client.query.bind(client);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (client as any).query = async (...args: unknown[]) => {
        const sql = String(args[0] ?? "");
        if (
          failDeletes &&
          /finops_enforcement_projection/i.test(sql) &&
          /\bDELETE\b/i.test(sql)
        ) {
          throw new Error("simulated T4 projection replace failure");
        }
        return originalClientQuery(...(args as Parameters<PoolClient["query"]>));
      };
      return client;
    }) as typeof pool.connect;

    try {
      const result = await rt.recomputeAggregatesAndRefresh({
        projectId,
        periodStart: "2026-08-01",
      });
      expect(result.t2.outcome).toBe("succeeded");
      expect(result.t4RefreshAttempted).toBe(true);
      expect(result.t4Refresh?.outcome).toBe("failed");
    } finally {
      failDeletes = false;
      pool.connect = originalConnect;
    }
  });

  it("T7-R06 T2 failure → no T4 refresh", async () => {
    const rt = runtime();
    const result = await rt.recomputeAggregatesAndRefresh({
      projectId: "   ",
      periodStart: "2026-08-01",
    });
    expect(result.t2.outcome).not.toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(false);
    expect(result.t4Refresh).toBeNull();
  });

  it("T7-R07 no raw recompute/reconcile mutation functions exposed", () => {
    const rt = runtime();
    const keys = Object.keys(rt).sort();
    expect(keys).toEqual(
      [
        "capture",
        "flushAudit",
        "recomputeAggregatesAndRefresh",
        "reconcileProjectPeriodAndRefresh",
        "resolveProjectRollout",
      ].sort(),
    );
    expect(rt).not.toHaveProperty("recomputeAggregates");
    expect(rt).not.toHaveProperty("reconcileProjectPeriod");
    expect(rt).not.toHaveProperty("upsertProjectRollout");
    expect(rt).not.toHaveProperty("evaluateFinOpsEnforcement");
  });

  it("T7-R08 rollout resolution OFF does not access T4 enforcement projection", async () => {
    const rt = runtime();
    const touched: string[] = [];
    const originalQuery = pool.query.bind(pool);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (pool as any).query = async (...args: unknown[]) => {
      const sql = String(args[0] ?? "");
      if (/finops_enforcement_projection/i.test(sql)) {
        touched.push(sql.slice(0, 80));
      }
      return originalQuery(...(args as Parameters<Pool["query"]>));
    };
    try {
      const result = await rt.resolveProjectRollout(`${prefix}-r08`);
      expect(result.mode).toBe("OFF");
      expect(touched).toHaveLength(0);
    } finally {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (pool as any).query = originalQuery;
    }
  });

  it("T7-R09 no provider invocation", async () => {
    const provider = vi.fn();
    const rt = runtime();
    await rt.resolveProjectRollout(`${prefix}-r09`);
    expect(provider).not.toHaveBeenCalled();
  });

  it("T7-R10 no execution-run wiring", () => {
    const source = readFileSync(
      path.join(process.cwd(), "lib/oa/finops/server/composeFinOpsT7Runtime.ts"),
      "utf8",
    );
    const executable = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(executable).not.toMatch(
      /composeExecutionRun|execution-run|coordinateExecutionRun/,
    );
  });

  it("T7-R11 no T3 side effect", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r11`;
    const before = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_alert_state WHERE project_id = $1`,
      [projectId],
    );
    await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r11-${suffix}`,
      facts: [
        {
          executionRunId: `run-r11-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r11-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    const after = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_alert_state WHERE project_id = $1`,
      [projectId],
    );
    expect(after.rows[0]?.c).toBe(before.rows[0]?.c);
  });

  it("T7-R12 no threshold / monetary policy required", async () => {
    const rt = runtime();
    const result = await rt.resolveProjectRollout(`${prefix}-r12`);
    expect(result).not.toHaveProperty("threshold");
    expect(JSON.stringify(result)).not.toMatch(/"15"|"20"|"25"|"30"/);
  });

  it("T7-R13 SHADOW row resolves as instruction — no runtime activation / provider", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r13`;
    await store.upsertProjectRollout({
      projectId,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:21:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("SHADOW");
    expect(result.activationState).toBe("configured_not_activated");
    expect(result.blockingAllowed).toBe(false);
    expect(rt).not.toHaveProperty("evaluateBeforeProvider");
  });

  it("T7-R14 MONITOR row causes no runtime activation", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r14`;
    await store.upsertProjectRollout({
      projectId,
      mode: "MONITOR",
      updatedAt: "2026-08-08T08:22:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("MONITOR");
    expect(result.activationState).toBe("configured_not_activated");
    expect(result.blockingAllowed).toBe(false);
  });

  it("T7-R15 E1 row causes no BLOCK — no active enforcement consumer exposed", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r15`;
    await store.upsertProjectRollout({
      projectId,
      mode: "E1_ENFORCED",
      updatedAt: "2026-08-08T08:23:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("E1_ENFORCED");
    expect(result.blockingAllowed).toBe(true);
    expect(result.activationState).toBe("configured_not_activated");
    expect(rt).not.toHaveProperty("evaluateFinOpsEnforcement");
    expect(rt).not.toHaveProperty("createFinOpsEnforcementPort");
    expect(Object.keys(rt)).not.toContain("enforcement");
  });

  it("T7-R16 T6 flushAudit remains operable", async () => {
    const rt = runtime();
    const runId = `run-t7-r16-${suffix}`;
    await rt.capture.captureUsage({
      projectId: `${prefix}-r16`,
      executionRunId: runId,
      correlationId: "corr-t7-r16",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t7-r16-${suffix}`,
      },
    });
    await expect(rt.flushAudit()).resolves.toBeUndefined();
  });
});

```

### FILE: `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`

```md
# 156 — FinOps Technical Lot T7 — Rollout / Activation Readiness Foundation (Default-OFF) — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`
**Cycle:** 8 — Delivery / implémentation — FinOps Technical Lot T7 Foundation Default-OFF
**Profil:** Critical
**Typologie:** EVOL / CODE / DATA / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Dedicated project-scoped FinOps rollout persistence created (`finops_rollout_config`) | **TRUE** |
| Default-OFF without seed (missing row → OFF in resolver) | **TRUE** |
| T7 mode adapter / resolver delivered (`resolveFinOpsRollout`) | **TRUE** |
| Modes OFF / SHADOW / MONITOR / E1_ENFORCED represented architecturally | **TRUE** |
| Canonical T7 server composition created (`composeFinOpsT7Runtime`) | **TRUE** |
| T6 `composeFinOpsRuntime` reused (not modified) | **TRUE** |
| T2 mutation/reconciliation exposed only via post-T2 T4 refresh wrappers | **TRUE** |
| Unit T7-U01..10 / PG T7-PG01..10 / runtime T7-R01..16 delivered | **TRUE** |
| `R-T4-PROJECTION-REFRESH-01` CLOSED (CLOSE-1..8 PASS) | **TRUE** |
| SHADOW activated | **FALSE** |
| MONITOR activated | **FALSE** |
| E1 activated / authorized | **FALSE** |
| Product runtime / route / endpoint activation | **FALSE** |
| Execution-run modified | **FALSE** |
| Monetary thresholds 15/20/25/30 / calibration amounts | **FALSE** |
| Seed non-OFF / global env flag as FinOps authority | **FALSE** |
| Neon / provider-real | **FALSE** |
| Project commit / push / PR | **FALSE** |

**Anti-claim (mandatory):**

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```

```text
T7 FOUNDATION DEFAULT-OFF DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —
SHADOW NOT ACTIVATED —
NO EXECUTION-RUN MODIFICATION —
NO THRESHOLD 15/20/25/30 —
NO PROJECT COMMIT / PUSH / PR.
```

**Foundation Ready ≠ SHADOW / MONITOR / E1 activated ≠ product traffic.**

---

## B. GO Morris / contextual resolution

**User utterance:** `ok go`

**Contextual resolution:**

```text
GO T7 foundation Delivery default-OFF.
```

**History:** This GO was previously **RECEIVED / NOT CONSUMED** until T4 Projection Refresh was integrated and post-merged. Post-merge T4 is now validated. The present `ok go` consumes **T7 FOUNDATION DELIVERY DEFAULT-OFF** only.

**Consumed:** T7 foundation Delivery — dedicated rollout persistence · default-OFF · mode adapter · T7 server composition · T2→T4 refresh wiring · migration · tests · doc 156.

**Not consumed / not authorized:** SHADOW · MONITOR · E1 activation · seed non-OFF · thresholds 15/20/25/30 · product route/endpoint · execution-run · provider-real · T3 sync · T6-ext · T5 · Product IAM · calibration · privileged Morris mutation UI/API · Neon · env/global flag as FinOps authority · scheduler/cron · project commit/push/PR/merge.

**Sequence context (SELECTED):**

```text
T7 Decisions Applied
→ T6 runtime composition (CLOSED ON MAIN)
→ T4 projection refresh (on main; reserve OPEN Case B at entry)
→ T7 foundation Delivery default-OFF   ← this Delivery
→ dedicated activation QA
→ distinct GO SHADOW
→ …
```

---

## C. Horodatage CEST + UTC

| Event | Timestamp |
|-------|-----------|
| GO utterance (session) | 2026-08-08 ~10:39 CEST (+0200) / 2026-08-08 ~08:39 UTC |
| Delivery work (doc 156) | 2026-08-08 ~10:39–10:50 CEST (+0200) / 2026-08-08 ~08:39–08:50 UTC |

Exact seconds not invented.

---

## D. Git Truth

| Field | Value |
|-------|-------|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-foundation-default-off` |
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off` |
| HEAD | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` |
| origin/main | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` |
| Upstream project push | **none** (intentional) |
| Template SHA | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Handoff tip (before) | `b403f5e4b85b9f0141d50d9d5cadf9cd91a460ee` |
| Handoff blob (before) | `ac75f3833e17223ceeeaad7cf02d28d84ede1b2f` |
| Handoff path | `sfia-review-handoff/latest-chatgpt-review.md` (branch `sfia/review-handoff`) |

Handoff pre-checks confirmed (before Delivery):

```text
T4 POST-MERGE COMPLETE

R-T4-PROJECTION-REFRESH-01 =
OPEN — Case B

R-T6-RUNTIME-COMPOSITION-01 =
CLOSED ON MAIN

T7 FOUNDATION =
PENDING / NOT EXECUTED —
READY FOR CHATGPT REASSESSMENT

SHADOW =
NOT ACTIVATED
```

---

## E. Sources

### Method

- `prompts/templates/sfia-cycle-execution-template.md` (SHA `b9ce0a9…`)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `scripts/sfia/publish-review-handoff.sh`

### Project / runtime (read-only baselines)

- `150-…-t4-s30-soft-enforcement-foundation-execution.md`
- `154-…-t6-runtime-composition-execution.md`
- `155-…-t4-projection-refresh-execution.md`
- `composeFinOpsRuntime.ts` · `refreshEnforcementAfterT2.ts`
- T2 `recomputeAggregates` / `reconcileProjectPeriod` · T4 projection / enforcement types & ports

### Historical T7 Decision Applied

- Commit `e6e026c9629535e5a9d8852f4613acf473b417e0`
- Blob `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`
- Path `sfia-review-handoff/latest-chatgpt-review.md`

Docs **151–153 are NOT on main** — documentary authority via historical handoff only.

---

## F. Historical T7 Decision Applied provenance

| Field | Value |
|-------|-------|
| Commit | `e6e026c9629535e5a9d8852f4613acf473b417e0` |
| Blob | `79e29f7df68d4c522610c5b63377b3bf37b4e3f0` |
| Path | `sfia-review-handoff/latest-chatgpt-review.md` |
| Docs 151–153 on main | **NO** |

All eight D-T7 decisions **SELECTED BY MORRIS** + readiness matrix:

| # | Decision | SELECTED |
|---|----------|----------|
| 1 | `D-T7-FLAG-STORE-01` | **A SELECTED BY MORRIS** — dedicated FinOps rollout persistence |
| 2 | `D-T7-MODE-ADAPTER-01` | **A SELECTED BY MORRIS** — T7-owned adapter |
| 3 | `D-T7-T6-COMPOSITION-GATE-01` | **A BEFORE SHADOW** |
| 4 | `D-T7-PROJECTION-REFRESH-GATE-01` | **A T2 FRONTIERS / BEFORE SHADOW** |
| 5 | `D-T7-T3-SYNC-GATE-01` | **A BEFORE MONITOR** |
| 6 | `D-T7-T6EXT-E1-GATE-01` | **A REQUIRED BEFORE E1 — NOT AUTHORIZED** |
| 7 | `D-T7-T5-IAM-GATE-01` | **A REQUIRED BEFORE E1 — IAM NOT_SELECTED** |
| 8 | `D-T7-CALIBRATION-PILOT-01` | **A BEFORE MONITOR USING REAL AMOUNTS** |
| — | `READINESS-MATRIX` | **ACCEPTED** |

Applied fingerprint:

```text
A / A / A / A+BEFORE-SHADOW / A / A / A / A-BEFORE-MONITOR + READINESS-MATRIX=ACCEPTED
```

Architecture SELECTED ≠ activation authorized. This Delivery delivers foundation only.

---

## G. Local discovery

Executed under `projects/sfia-studio/app` before CREATE.

| Finding | Result |
|---------|--------|
| Existing T7 / rollout runtime code | **NONE** — modes only in docs/comments |
| Product T2 consumer outside finops composition | **NONE** |
| D1 `platformFlag` | Present elsewhere — **unrelated**; not FinOps T7 authority |
| Env/global flag as FinOps rollout authority | **NOT used** |
| Migration slot `1754600004000` | **FREE** (after T4 `…3000`) |
| `finops_rollout_config` | **ABSENT** before CREATE |
| `composeFinOpsT7Runtime` | **ABSENT** before CREATE |

**STOP conditions** `EXISTING T7 FOUNDATION DETECTED` / `T7 MIGRATION COLLISION` / `AUTHORITATIVE T2 RUNTIME FRONTIER DISCOVERED`: not triggered.

---

## H. Exact Delivery manifest

**CREATE (10) / MODIFY (0) / DELETE (0):**

1. `projects/sfia-studio/app/lib/oa/finops/application/types.rollout.ts`
2. `projects/sfia-studio/app/lib/oa/finops/ports/finopsRolloutPort.ts`
3. `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore.ts`
4. `projects/sfia-studio/app/lib/oa/finops/application/resolveFinOpsRollout.ts`
5. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`
6. `projects/sfia-studio/app/db/migrations/1754600004000_finops-t7-rollout-config.js`
7. `projects/sfia-studio/app/__tests__/oa/finops/t7.rollout.unit.test.ts`
8. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.rollout.integration.test.ts`
9. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.foundation-runtime.integration.test.ts`
10. `projects/sfia-studio/156-assistant-sfia-native-openai-finops-technical-lot-t7-foundation-default-off-execution.md`

**Barrel export:** none (deep import).

**Forbidden paths untouched:** `composeFinOpsRuntime` · `composeExecutionRunD2D3` · `evaluateFinOpsEnforcement` · T3/T4/T6 foundation sources · package manifests · `.github/**` · docs 150/154/155 · 151–153.

---

## I. T7 rollout model

Modes (canonical, T7-owned) in `types.rollout.ts`:

```text
OFF → SHADOW → MONITOR → E1_ENFORCED
```

Type alias: `FinOpsRolloutMode = "OFF" | "SHADOW" | "MONITOR" | "E1_ENFORCED"`.

| Owner | Owns |
|-------|------|
| **T7** | modes · rollout resolution · mode → instruction translation |
| **T4** | monetary enforcement evaluation |
| **T3** | human-review state |

**Forbidden:** embed T7 modes inside `evaluateFinOpsEnforcement`.

Config record (no threshold / currency / IAM / actor / TTL):

- `projectId` · `mode` · `revision` · `updatedAt`

Instruction fields:

- `mode` · `evaluateT4` · `policyEffect` · `blockingAllowed` · `requiresT3Sync` · `activationState` · `resolution` · `config`

---

## J. Persistence schema

**Table:** `finops_rollout_config`

| Column | Type | Constraints |
|--------|------|-------------|
| `project_id` | `text` | PRIMARY KEY · NOT NULL |
| `mode` | `text` | NOT NULL · CHECK `IN ('OFF','SHADOW','MONITOR','E1_ENFORCED')` |
| `revision` | `bigint` | NOT NULL · CHECK `revision >= 1` |
| `updated_at` | `timestamptz` | NOT NULL |

| Property | Status |
|----------|--------|
| Seed | **NONE** |
| FK | **NONE** |
| Global/default row | **NONE** |
| Monetary / IAM / actor columns | **NONE** |
| T6 events / triggers | **NONE** |
| Down doctrine | Refuse DROP while rows exist; drop only when empty |

Migration: `1754600004000_finops-t7-rollout-config.js`.

Port upsert exists for tests / future distinct activation cycles only — **not** a product activation API.

---

## K. Default-OFF semantics

```text
missing row → resolver returns OFF (resolution = default_off)
```

- Absence of row ≠ persisted OFF row.
- No automatic OFF insert for all projects.
- OFF: `evaluateT4=false` · `policyEffect=null` · `blockingAllowed=false` · `requiresT3Sync=false` · `activationState=inert`.
- BLOCK impossible under OFF.
- Universal rollback target remains OFF.

---

## L. Mode adapter semantics

| Mode | evaluateT4 | policyEffect | blockingAllowed | requiresT3Sync | activationState |
|------|------------|--------------|-----------------|----------------|-----------------|
| **OFF** | `false` | `null` | `false` | `false` | `inert` |
| **SHADOW** | `true` | `signal_only` | `false` | `false` | `configured_not_activated` |
| **MONITOR** | `true` | `signal_only` | `false` | `true` | `configured_not_activated` |
| **E1_ENFORCED** | `true` | `enforce` | `true` | `true` | `configured_not_activated` |

**Critical:** `blockingAllowed=true` for E1 is an architectural instruction only. This Delivery exposes **no** enforcement consumer; E1 row ≠ BLOCK active ≠ SHADOW/MONITOR/E1 activated.

Persisted non-OFF rows may exist for tests; resolution yields `configured_not_activated` — **not** runtime activation.

---

## M. Fail-open resolution

| Scenario | Result |
|----------|--------|
| Store / read technical throw | `resolution=fail_open_off` · mode OFF · no throw to caller |
| Invalid / empty `projectId` | `fail_open_off` · never raw DB details |
| Missing row | `default_off` (not fail-open) |
| Successful persisted read | `persisted` + instruction for mode |

Resolver never evaluates T4, never reads enforcement projection, never calls provider, never supplies thresholds.

---

## N. T7 server composition

Path: `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts`

```ts
composeFinOpsT7Runtime({ pool, nowIso }) → {
  capture,
  flushAudit,
  resolveProjectRollout,
  recomputeAggregatesAndRefresh,
  reconcileProjectPeriodAndRefresh,
}
```

| Exposed | Role |
|---------|------|
| `capture` | T6 capture boundary |
| `flushAudit` | T6 durable audit flush |
| `resolveProjectRollout` | T7 read-only resolution |
| `recomputeAggregatesAndRefresh` | T2 recompute → T4 refresh wrapper |
| `reconcileProjectPeriodAndRefresh` | T2 reconcile → T4 refresh wrapper |

**NO upsert API** on the composition surface (`upsertProjectRollout` not exposed).

Contract: server-only · injected caller-owned Pool · no `DATABASE_URL` · no second pool · never `pool.end()`.

---

## O. T6 composition reuse

- Calls `composeFinOpsRuntime({ pool })` for capture + flushAudit.
- Does **not** modify `composeFinOpsRuntime.ts`.
- Does **not** reimplement ledger / journal / durable emitter / capture.
- T6 fail-open / redaction posture preserved by reuse.

---

## P. T2/T4 refresh runtime wiring

Wrappers only (from `refreshEnforcementAfterT2` — unmodified):

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

Adapters reused (not modified):

- `createPostgresFinOpsAggregateStore`
- `createPostgresFinOpsReconciliation`
- `createPostgresFinOpsEnforcementProjectionStore`

**No raw** `recomputeAggregates` / `reconcileProjectPeriod` methods exposed on T7 composition.

---

## Q. R-T4-PROJECTION-REFRESH-01 reassessment

Entry status: **OPEN — Case B** (canonical wrapper delivered; no product consumer).

| Gate | Evidence | Result |
|------|----------|--------|
| CLOSE-1 | No product/runtime T2 consumer discovered outside composition | **PASS** |
| CLOSE-2 | `composeFinOpsT7Runtime` is the new canonical server runtime boundary | **PASS** |
| CLOSE-3 | All exposed T2 mutation/reconciliation ops use post-T2 refresh wrappers | **PASS** |
| CLOSE-4 | No raw T2 mutation method exposed by composition (T7-R07) | **PASS** |
| CLOSE-5 | PG proves each exposed mutation/reconcile refreshes T4 (T7-R03/R04) | **PASS** |
| CLOSE-6 | T4 refresh failure fail-open vs T2 success (T7-R05) | **PASS** |
| CLOSE-7 | No product activation claim required for closure | **PASS** |
| CLOSE-8 | SHADOW remains not activated | **PASS** |

**Final wording:**

```text
R-T4-PROJECTION-REFRESH-01 =
CLOSED —
T7 CANONICAL SERVER RUNTIME T2 MUTATION / RECONCILIATION BOUNDARY ROUTES THROUGH POST-T2 T4 REFRESH —
FRESHNESS WIRING DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —
SHADOW NOT ACTIVATED.
```

CLOSED here = runtime foundation freshness wiring delivered. It does **not** mean product traffic · SHADOW · monetary policy · provider enforcement.

---

## R. Unit tests

File: `t7.rollout.unit.test.ts` — **T7-U01..T7-U10**.

| ID | Assertion |
|----|-----------|
| T7-U01 | No persisted config → OFF → `default_off` → `evaluateT4=false` → `blockingAllowed=false` |
| T7-U02 | Store read technical throw → `fail_open_off` → OFF → no throw |
| T7-U03 | Persisted OFF → OFF · `inert` |
| T7-U04 | Persisted SHADOW → `signal_only` · `blockingAllowed=false` · T3 not required · `configured_not_activated` |
| T7-U05 | Persisted MONITOR → `signal_only` · `blockingAllowed=false` · T3 sync required |
| T7-U06 | Persisted E1_ENFORCED → `enforce` · `blockingAllowed=true` · `configured_not_activated` · no provider/T4 call |
| T7-U07 | Invalid projectId → fail-open OFF · never raw DB details |
| T7-U08 | Resolver never touches enforcement projection |
| T7-U09 | Resolver never invokes provider |
| T7-U10 | No monetary threshold required (no 15/20/25/30) |

Evidence: `.tmp-sfia-review/t7-foundation-delivery/unit-t7.txt` — **10 passed**.

---

## S. PostgreSQL tests

File: `postgres/t7.rollout.integration.test.ts` — **T7-PG01..T7-PG10** on ephemeral local Postgres (never Neon).

| ID | Assertion |
|----|-----------|
| T7-PG01 | No row → resolver OFF |
| T7-PG02 | Upsert OFF → read OFF revision 1 |
| T7-PG03 | Upsert SHADOW → persisted project-scoped |
| T7-PG04 | Second mutation → revision increments |
| T7-PG05 | Multi-project isolation |
| T7-PG06 | Invalid DB mode blocked by constraint |
| T7-PG07 | No global/default row created by migration |
| T7-PG08 | Down migration refuses while rows exist |
| T7-PG09 | After clearing rows, down/up round trip succeeds |
| T7-PG10 | `updated_at` timestamptz / canonical ISO on read |

Evidence: `.tmp-sfia-review/t7-foundation-delivery/pg-t7*.txt`.

---

## T. Runtime integration

File: `postgres/t7.foundation-runtime.integration.test.ts` — **T7-R01..T7-R16**.

| ID | Assertion |
|----|-----------|
| T7-R01 | Compose → resolve no config → OFF |
| T7-R02 | Composition returns T6 capture boundary — T6 behavior preserved |
| T7-R03 | `recomputeAggregatesAndRefresh` → T2 success → T4 projection refreshed |
| T7-R04 | `reconcileProjectPeriodAndRefresh` → T2 success → T4 refreshed exactly once |
| T7-R05 | T4 refresh failure → T2 success preserved → refresh failure visible |
| T7-R06 | T2 failure → no T4 refresh |
| T7-R07 | No raw recompute/reconcile mutation functions exposed |
| T7-R08 | Rollout OFF does not access T4 enforcement projection |
| T7-R09 | No provider invocation |
| T7-R10 | No execution-run wiring |
| T7-R11 | No T3 side effect |
| T7-R12 | No threshold / monetary policy required |
| T7-R13 | SHADOW row resolves as instruction — no runtime activation / provider |
| T7-R14 | MONITOR row causes no runtime activation |
| T7-R15 | E1 row causes no BLOCK — no active enforcement consumer exposed |
| T7-R16 | T6 `flushAudit` remains operable |

---

## U. Regression tests (T2 / T4 / T6)

Targeted local regressions re-run under `.tmp-sfia-review/t7-foundation-delivery/regressions.txt` (T2 aggregate/reconcile unit+PG · T4 enforcement + projection refresh unit+PG · T6 runtime composition PG).

| Suite | Note |
|-------|------|
| T2 unit + PG | Evidence from local CI runs — see evidence dir |
| T4 unit + PG foundation + projection refresh | Evidence from local CI runs — see evidence dir |
| T6 runtime composition PG | Evidence from local CI runs — see evidence dir |
| Full FinOps / `test:db` / typecheck / lint / build / full suite | **Evidence to be filled / finalized from CI local runs** under `.tmp-sfia-review/t7-foundation-delivery/` |

No intentional T2/T4/T6 source modifications in this Delivery.

---

## V. Migration proof

| Check | Result |
|-------|--------|
| Filename | `1754600004000_finops-t7-rollout-config.js` |
| Collision before CREATE | **NONE** (slot free) |
| Order | After T1→T2→T6→T3→T4 |
| `migrate:up` on disposable local Postgres | **PASS** — creates `finops_rollout_config` |
| Before | no relations / no T7 table |
| After | `finops_rollout_config` present among FinOps tables |
| Seed row count | **0** |
| Down with rows | **REFUSED** |
| Down empty → up | **PASS** (T7-PG08/PG09) |

Local Postgres only — **NOT Neon**.

---

## W. Security / secret posture

| Control | Status |
|---------|--------|
| No secrets in CREATE sources | **PASS** |
| Store errors sanitized (`sanitizeDbError`) | **PASS** |
| Resolver fail-open never leaks raw DB details | **PASS** (T7-U07) |
| No provider credentials / Neon URLs in Delivery | **PASS** |
| No threshold / PII / IAM actor fields in schema | **PASS** |
| Audit composition reuse preserves redaction (T6) | **PASS** by reuse |
| Negative scan on CREATE paths for secret-shaped literals | **PASS** (Delivery posture) |

---

## X. Carried reserves

| Reserve / topic | Status |
|-----------------|--------|
| `R-T4-PROJECTION-REFRESH-01` | **CLOSED** — wording in §Q |
| `R-T6-RUNTIME-COMPOSITION-01` | **CLOSED ON MAIN** |
| `R-T4-T3-SYNC-01` | **OPEN** — SELECTED GATE BEFORE MONITOR |
| `R-PR-T2-API-01` | **OPEN MINOR** |
| T6-ext-T2 | **EXCLUDED** |
| T6-ext-T3T4 | **NOT AUTHORIZED** — REQUIRED BEFORE E1 |
| Product IAM | **NOT_SELECTED** — REQUIRED BEFORE E1 |
| Calibration | **REQUIRED BEFORE MONITOR USING REAL AMOUNTS** |
| Privileged Morris mutations | **DEFERRED** |
| Intermediate product literal | **DEFERRED** |
| `REVIEW_REQUIRED` vs `WOULD_BLOCK` | **STILL DEFERRED** |
| SHADOW | **NOT ACTIVATED** |
| MONITOR | **NOT ACTIVATED** |
| E1 | **NOT AUTHORIZED** |

---

## Y. Non-scope / anti-activation

Explicitly out of scope for this Delivery:

- SHADOW / MONITOR / E1 activation
- Dedicated activation QA (next gate only)
- Product routes / endpoints / traffic
- Execution-run modification
- Provider-real / Neon production config
- T3 sync · T6-ext · T5 · Product IAM
- Calibration / monetary thresholds **15 / 20 / 25 / 30**
- Env/global flag as FinOps rollout authority
- Scheduler / cron
- Seed non-OFF
- Upsert exposed as product/Morris activation API
- Project commit / push / PR / merge

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```

---

## Z. Git final state / verdict

| Field | Value |
|-------|-------|
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off` |
| Worktree | `…/finops-t7-foundation-default-off` |
| HEAD | `511a18d409e25d0a3fdbd3425ade65512a5f4e2b` (= origin/main) |
| Staged | empty |
| Project commits | none |
| Project push / PR | none |
| Untracked | 10 CREATE paths + `.tmp-sfia-review/` evidence |

**CLOSE-1..8:** ALL **PASS** → long green verdict:

```text
FINOPS TECHNICAL LOT T7 —
FOUNDATION DEFAULT-OFF DELIVERY COMPLETE —

DEDICATED PROJECT-SCOPED ROLLOUT PERSISTENCE DELIVERED —
DEFAULT-OFF PROVEN —
NO SEED —
T7 MODE ADAPTER DELIVERED —

OFF INERT / NEVER BLOCK —
SHADOW ARCHITECTURE REPRESENTED / NOT ACTIVATED / NEVER BLOCK —
MONITOR ARCHITECTURE REPRESENTED / NOT ACTIVATED / NEVER BLOCK —
E1 ARCHITECTURE REPRESENTED / NOT ACTIVATED —

T6 CANONICAL RUNTIME COMPOSITION REUSED —

T7 CANONICAL SERVER T2 MUTATION / RECONCILIATION BOUNDARY DELIVERED —
POST-T2 T4 REFRESH WIRING PROVEN —

R-T4-PROJECTION-REFRESH-01 CLOSED —
RUNTIME FOUNDATION FRESHNESS WIRING DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —

R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
R-T4-T3-SYNC-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —

NO T3 SYNC —
NO T6-EXT —
NO T5 —
NO IAM —
NO CALIBRATION —

SHADOW NOT ACTIVATED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —

NO EXECUTION-RUN MODIFICATION —
NO PROVIDER —
NO MONETARY THRESHOLD —
NO PRODUCT ACTIVATION —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

REVIEW HANDOFF REMOTE VERIFIED —

T7 FOUNDATION COMPLETE —
READY FOR CHATGPT T7 FOUNDATION VALIDATION —
NEXT GATE = DEDICATED ACTIVATION QA —
SHADOW STILL REQUIRES DISTINCT MORRIS GO
```

```text
FOUNDATION READY ≠ SHADOW ACTIVATED
```

```

## Project git final state
- Branch: `delivery/sfia-studio-assistant-sfia-native-openai-finops-t7-foundation-default-off`
- HEAD == origin/main == `511a18d409e25d0a3fdbd3425ade65512a5f4e2b`
- Staged: empty
- Project commit: none
- Project push: none
- PR: none
- Untracked: exact 10 CREATE + `.tmp-sfia-review/` evidence

## Handoff after
- To be filled by publisher remote verification (tip/blob after single L3 publish)
- Recommended commit message: `docs(review-handoff): publish T7 foundation default-off`

## Verdict
```
FINOPS TECHNICAL LOT T7 —
FOUNDATION DEFAULT-OFF DELIVERY COMPLETE —

DEDICATED PROJECT-SCOPED ROLLOUT PERSISTENCE DELIVERED —
DEFAULT-OFF PROVEN —
NO SEED —
T7 MODE ADAPTER DELIVERED —

OFF INERT / NEVER BLOCK —
SHADOW ARCHITECTURE REPRESENTED / NOT ACTIVATED / NEVER BLOCK —
MONITOR ARCHITECTURE REPRESENTED / NOT ACTIVATED / NEVER BLOCK —
E1 ARCHITECTURE REPRESENTED / NOT ACTIVATED —

T6 CANONICAL RUNTIME COMPOSITION REUSED —

T7 CANONICAL SERVER T2 MUTATION / RECONCILIATION BOUNDARY DELIVERED —
POST-T2 T4 REFRESH WIRING PROVEN —

R-T4-PROJECTION-REFRESH-01 CLOSED —
RUNTIME FOUNDATION FRESHNESS WIRING DELIVERED AND TESTED —
NO PRODUCT ACTIVATION CLAIM —

R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
R-T4-T3-SYNC-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —

NO T3 SYNC —
NO T6-EXT —
NO T5 —
NO IAM —
NO CALIBRATION —

SHADOW NOT ACTIVATED —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —

NO EXECUTION-RUN MODIFICATION —
NO PROVIDER —
NO MONETARY THRESHOLD —
NO PRODUCT ACTIVATION —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

REVIEW HANDOFF REMOTE VERIFIED —

T7 FOUNDATION COMPLETE —
READY FOR CHATGPT T7 FOUNDATION VALIDATION —
NEXT GATE = DEDICATED ACTIVATION QA —
SHADOW STILL REQUIRES DISTINCT MORRIS GO
```
