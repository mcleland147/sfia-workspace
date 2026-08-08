# Cycle 9 Critical — T7 SHADOW Dedicated Corrective QA — Review Pack (full)

Date/heure : 2026-08-08 20:18:05 CEST / 2026-08-08 18:18:05 UTC

## 1. GO Morris

`ok go` → **GO Cycle 9 — Dedicated Corrective QA**

Autorisé : inspection bab14ca · tests · probes · PG éphémère · typecheck/lint/build/test · pack · handoff L3.
Interdit : mutation projet · commit · push · PR update · merge · SHADOW activation.

## 2. Cycle / profil

- Cycle : **9 — QA / validation**
- Profil : **Critical**
- Subject : local commit `bab14ca480b60744f6a428d93070c876de171ee1`

## 3. Git Truth initial

```text
branch=delivery/sfia-studio-finops-t7-shadow-option-a
HEAD=bab14ca480b60744f6a428d93070c876de171ee1
origin/main=503369b10506515e173b5b58986c731ba1b313b8
origin_delivery=d99bbbdea2446af8b79488b7459924e6cf5a3e16
--- status ---
?? .tmp-sfia-review/
--- staged ---
--- tracked ---
--- log ---
bab14ca (HEAD -> delivery/sfia-studio-finops-t7-shadow-option-a) fix(sfia-studio): preserve OA isolation in T7 shadow pilot
d99bbbd (origin/delivery/sfia-studio-finops-t7-shadow-option-a) feat(sfia-studio): wire FinOps T7 shadow pilot
ahead_main=2
left_right=0	1
```

## 4. Subject commit / remote / PR

```text
commit bab14ca480b60744f6a428d93070c876de171ee1
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Aug 8 19:57:57 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Aug 8 19:57:57 2026 +0200

    fix(sfia-studio): preserve OA isolation in T7 shadow pilot

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
M	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
```

```json
{"baseRefName":"main","headRefName":"delivery/sfia-studio-finops-t7-shadow-option-a","headRefOid":"d99bbbdea2446af8b79488b7459924e6cf5a3e16","isDraft":false,"mergedAt":null,"number":321,"state":"OPEN","title":"feat(sfia-studio): wire FinOps T7 shadow pilot","url":"https://github.com/mcleland147/sfia-workspace/pull/321"}
```

- remote delivery / PR head remain `d99bbbdea2446af8b79488b7459924e6cf5a3e16`
- local ahead remote delivery = 1

## 5. Handoff entrant

- tip : `6fe8dd6f67c1318b371137a06e1bd7ca9695ed31`
- blob : `c4752b298f1cad91a91546db40a1abdb24d81129` (Cycle 8 corrective Delivery)

## 6. Sources

Template · routing · operating model · rules · checklist · CKC 04-qa · delivery-qa-test-standard · publisher · handoff corrective Delivery · 5 T7 files · ops1/types · boundary tests · T4/T6/T7/execution-run deps.

## 7. Hashes initiaux (5 fichiers)

```text
OK 3a6646af7ea1981160beac64894dd6ac58d70ce461f6973501f47dda4f5d8057  lines=106  projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
OK 1c87d4601e0d59cd88cb3348626124adc2eac0c9ef9e5c24141a10f3c5b9870a  lines=97  projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
OK e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a  lines=294  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
OK cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65  lines=72  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
OK d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0  lines=483  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
HASH_GATE=PASS
HEAD=bab14ca480b60744f6a428d93070c876de171ee1
```

## 8. Diff d99bbbd..bab14ca (2 MODIFY)

````diff
diff --git a/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
index 6365a30..6c6dd08 100644
--- a/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
+++ b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
@@ -15,6 +15,7 @@
 | Option A (pre-provider execution-run) selected by Morris | **TRUE** |
 | Thin adapter delivered | **TRUE** |
 | Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
+| Pilot identity declared as OA-local constant (no `lib/oa` → `lib/ops1` import) | **TRUE** |
 | Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
 | `coordinateExecutionRun` unmodified | **TRUE** |
 | `composeExecutionRunD2D3` unmodified | **TRUE** |
@@ -78,7 +79,19 @@ composeExecutionRunD2D3T7ShadowPilot

 ---

-## F. Next
+## F. Corrective Delivery (PR #321 CI)

-Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
-Then distinct GO for actual pilot activation if Morris authorizes.
+PR #321 CI identified OA→OPS1 boundary violation
+(`import { OPS1_PROJECT_KEY } from "@/lib/ops1/types"` in the pilot composer).
+
+Corrective Delivery removes the direct OA→OPS1 import while preserving the
+Morris-selected pilot value `sfia-studio-ops1` as an OA-local constant
+(`T7_SHADOW_PILOT_PROJECT_ID`). No shared identity abstraction; OPS1 unchanged.
+
+---
+
+## G. Next
+
+Cycle 9 — Dedicated Corrective QA (distinct GO) after this corrective commit.
+Then distinct GO for push of the corrective commit onto PR #321.
+Activation SHADOW remains a separate Morris decision.
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
index d05f00c..a8db16a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
@@ -8,11 +8,11 @@
  * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
  * - MONITOR / E1 not activated.
  * - No real provider / Neon / production threshold.
- * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
+ * - Pilot identity: Morris-selected `sfia-studio-ops1` (OA-local constant).
+ * - Does NOT import lib/ops1 (preserves OA / OPS1 isolation).
  */

 import type { Pool } from "pg";
-import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
 import {
   composeFinOpsT7ShadowExecutionDeps,
   type FinOpsT7ShadowDecisionDiagnostic,
@@ -28,10 +28,11 @@ import type { ExecutionRunProviderComposition } from "./composeExecutionRunProvi
 import { assertServerOnly } from "./serverOnly";

 /**
- * Morris-selected T7 SHADOW pilot identity — not global project identity.
- * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
+ * Morris-selected T7 SHADOW pilot identity.
+ * Locally declared in OA to preserve OA / OPS1 import isolation.
+ * This is pilot-scoped identity, not a global project identity authority.
  */
-export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;
+export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1";

 export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
   /** Caller-owned FinOps pool. Never closed here. */
````

## 9. Référentiel QA-C01…C15

| ID | Result |
|----|--------|
| QA-C01 subject exact | PASS |
| QA-C02 OA/OPS1 isolation | PASS |
| QA-C03 pilot identity | PASS |
| QA-C04 no identity expansion | PASS |
| QA-C05 OFF inert | PASS |
| QA-C06 non-pilot inert | PASS |
| QA-C07 signal_only | PASS |
| QA-C08 never block | PASS |
| QA-C09 hostile enforce | PASS |
| QA-C10 fail-open | PASS |
| QA-C11 MONITOR/E1 inert | PASS |
| QA-C12 capture gating | PASS |
| QA-C13 temporal semantics | REVALIDATED (drift OFF→SHADOW confirmed) |
| QA-C14 no real activation | PASS |
| QA-C15 regression | PASS with documented unrelated UI flake |

## 10. Static OA/OPS1 scan

```text
=== static imports ===
(none)
=== composer risk patterns ===
35:export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1";
87:    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
102:    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
```

```text
35:export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1";
```

ZERO static OA→OPS1 import. Composer has local `"sfia-studio-ops1"` only.

## 11. Boundary tests (prior CI failure local reproduction)

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 188ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 255ms

 Test Files  2 passed (2)
      Tests  8 passed (8)
   Start at  20:14:00
   Duration  2.31s (transform 134ms, setup 381ms, collect 112ms, tests 444ms, environment 1ms, prepare 569ms)
```

**2 files / 8 tests PASS** — LOCAL REPRODUCTION OF PRIOR CI FAILURE NOW PASSES (not “CI GITHUB GREEN”).

## 12. T7 unit / pilot identity

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t7.shadow-option-a.unit.test.ts (4 tests) 9ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  20:14:04
   Duration  2.68s (transform 754ms, setup 267ms, collect 1.07s, tests 9ms, environment 0ms, prepare 186ms)
```

**4/4 PASS** — T7-SW15 proves `T7_SHADOW_PILOT_PROJECT_ID == "sfia-studio-ops1" == OPS1_PROJECT_KEY` (OPS1 import in TEST only).

## 13. PostgreSQL environment

```text
ENV_TYPE=docker_ephemeral_postgres
HOST_CLASS=loopback:127.0.0.1
PORT=55443
DB_NAME=sfia_studio_finops_t1
CONTAINER=sfia-t7-corrective-qa-pg
NEON=no
PROVENANCE=SAFE_EPHEMERAL
PASSWORD_OR_URL_IN_THIS_FILE=no
```

```text
READY i=7
```

cleanup : container ABSENT

## 14. T7 integration

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (14 tests) 973ms

 Test Files  1 passed (1)
      Tests  14 passed (14)
   Start at  20:14:08
   Duration  3.20s (transform 643ms, setup 176ms, collect 900ms, tests 973ms, environment 0ms, prepare 120ms)
```

**14/14 PASS · required skip 0**

## 15–23. Probes A–G

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.shadow-corrective-qa.probes.TEMPORARY.test.ts (7 tests) 802ms
   ✓ TEMPORARY QA PROBES — T7 SHADOW corrective A–G > PROBE A — hostile effect=enforce neutralized → soft_signal · never block  324ms

 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  20:14:13
   Duration  4.28s (transform 1.25s, setup 220ms, collect 1.89s, tests 802ms, environment 0ms, prepare 240ms)
```

**7/7 PASS**

| Probe | Result |
|-------|--------|
| A hostile effect=enforce | soft_signal · provider · never block |
| B never-block E2E | shadow_block_forbidden → provider continues |
| C fail-open | policy/sink/rollout/capture · provider continues · no raw DB leak |
| D isolation | other SHADOW inert · policy not called · capture disabled |
| E MONITOR/E1 | inert · never block |
| F SHADOW→OFF | PRE=SHADOW POST=OFF CAPTURE=disabled |
| G OFF→SHADOW | **TEMPORAL MODE DRIFT OBSERVED** PRE=OFF POST=SHADOW CAPTURE=created/duplicate · not BLOCK |

### Contenu COMPLET probe temporaire (deleted from app)

````typescript
/**
 * @vitest-environment node
 *
 * TEMPORARY QA PROBE — Cycle 9 Critical Dedicated Corrective QA (OA/OPS1 boundary fix).
 * MUST be deleted before cycle end. NEVER staged / NEVER committed.
 * TEST ONLY — ephemeral Postgres — NOT product activation.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import { getFixture } from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3T7ShadowPilot,
  T7_SHADOW_PILOT_PROJECT_ID,
} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
import { composeExecutionRunProviders } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import {
  composeFinOpsT7ShadowExecutionDeps,
  ensureShadowNeverBlocks,
} from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";
import type { FinOpsEnforcementDecision } from "@/lib/oa/finops/application/types.enforcement";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const TEST_ONLY_THRESHOLD = "1.00000000";
const TEST_ONLY_ELIGIBLE = "9.99000000";
const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
const OTHER = "project:qa-corrective-other-TEST_ONLY";

async function upsertMode(
  pool: Pool,
  projectId: string,
  mode: FinOpsRolloutMode,
): Promise<void> {
  const store = createPostgresFinOpsRolloutStore(pool);
  await store.upsertProjectRollout({
    projectId,
    mode,
    updatedAt: "2026-08-08T18:00:00.000Z",
  });
}

async function seedProjection(
  pool: Pool,
  projectId: string,
  eligible: string,
): Promise<void> {
  await pool.query(
    `INSERT INTO finops_enforcement_projection (
       project_id, period_start, currency,
       blocking_eligible_amount, billed_amount, provider_observed_amount,
       eligible_cost_event_count, billed_event_count, provider_observed_event_count,
       rebuild_version, rebuilt_at
     ) VALUES ($1, '2026-08-01', 'USD', $2, $2, '0.00000000', 1, 1, 0, 1, NOW())
     ON CONFLICT (project_id, period_start, currency) DO UPDATE SET
       blocking_eligible_amount = EXCLUDED.blocking_eligible_amount,
       billed_amount = EXCLUDED.billed_amount,
       rebuild_version = finops_enforcement_projection.rebuild_version + 1,
       rebuilt_at = NOW()`,
    [projectId, eligible],
  );
}

function spyProviders(onComplete?: () => Promise<void>) {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async (req) => {
    if (onComplete) await onComplete();
    return FakeAiExecutionAdapter.prototype.complete.call(ai, req);
  });
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: [
        "o/r",
        "example/example",
        "mcleland147/sfia-workspace",
      ],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function coordinateInput(projectId: string, suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t7cqa:${suffix}`,
      correlationId: `corr:t7cqa:${suffix}`,
    },
    context: {
      ...fixture.context,
      projectId,
    },
    providerRequest: {
      correlationId: `corr:t7cqa:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describeDb("TEMPORARY QA PROBES — T7 SHADOW corrective A–G", () => {
  let pool: Pool;
  const clockIso = "2026-08-08T18:10:00.000Z";

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("PROBE A — hostile effect=enforce neutralized → soft_signal · never block", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const diagnostics: Array<{ decision: string }> = [];
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () =>
        ({
          thresholdCode: "TEST_ONLY_CQA_HOSTILE",
          currency: "USD",
          thresholdAmount: TEST_ONLY_THRESHOLD,
          effect: "enforce",
        }) as {
          thresholdCode: string;
          currency: string;
          thresholdAmount: string;
        },
      onShadowDecision: (d) => {
        diagnostics.push({ decision: d.decision });
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-a"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(diagnostics.some((d) => d.decision === "block")).toBe(false);
    expect(diagnostics.some((d) => d.decision === "soft_signal")).toBe(true);

    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async () =>
        ({
          thresholdCode: "TEST_ONLY_CQA_HOSTILE",
          currency: "USD",
          thresholdAmount: TEST_ONLY_THRESHOLD,
          effect: "enforce",
        }) as {
          thresholdCode: string;
          currency: string;
          thresholdAmount: string;
        },
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:cqa-a2",
      correlationId: "corr:cqa-a2",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("soft_signal");
  });

  it("PROBE B — ensureShadowNeverBlocks + coordinator never-block E2E", async () => {
    const unit = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(unit.decision).toBe("failed");
    expect(unit.reason).toBe("shadow_block_forbidden");

    const hostilePort = {
      evaluateBeforeProvider: async (): Promise<FinOpsEnforcementDecision> => ({
        decision: "block",
        reason: "hostile_injected_block",
      }),
    };
    const { providers: pBlock, completeSpy: spyBlock } = spyProviders();
    const blocked = await composeExecutionRunD2D3({
      providers: pBlock,
      clockIso,
      finopsEnforcement: hostilePort,
    }).coordinate(coordinateInput(PILOT, "probe-b-block"));
    expect(blocked.providerInvoked).toBe(false);
    expect(spyBlock).not.toHaveBeenCalled();

    const sanitizedPort = {
      evaluateBeforeProvider: async (): Promise<FinOpsEnforcementDecision> =>
        ensureShadowNeverBlocks(await hostilePort.evaluateBeforeProvider()),
    };
    const { providers: pSafe, completeSpy: spySafe } = spyProviders();
    const continued = await composeExecutionRunD2D3({
      providers: pSafe,
      clockIso,
      finopsEnforcement: sanitizedPort,
    }).coordinate(coordinateInput(PILOT, "probe-b-safe"));
    expect(continued.ok).toBe(true);
    expect(continued.providerInvoked).toBe(true);
    expect(spySafe).toHaveBeenCalled();
  });

  it("PROBE C — fail-open policy/sink/rollout/capture · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");

    {
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => {
          throw new Error("SECRET_DB_DSN=should_not_leak postgresql://x");
        },
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-c-policy"),
      );
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      expect(JSON.stringify(result)).not.toMatch(/SECRET_DB_DSN|postgresql:\/\//);
    }

    {
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => null,
        onShadowDecision: () => {
          throw new Error("sink boom");
        },
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-c-sink"),
      );
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
    }

    {
      const brokenPool = {
        query: async () => {
          throw new Error("rollout_db_down raw detail");
        },
        connect: async () => {
          throw new Error("rollout_db_down");
        },
        end: async () => undefined,
      } as unknown as Pool;
      const { providers, completeSpy } = spyProviders();
      const deps = composeFinOpsT7ShadowExecutionDeps({
        pool: brokenPool,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: async () => null,
      });
      const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
        projectId: PILOT,
        executionRunId: "run:cqa-c-rollout",
        correlationId: "corr:cqa-c-rollout",
        occurredAt: clockIso,
      });
      expect(decision.decision).not.toBe("block");
      expect(["allow", "failed"]).toContain(decision.decision);
      const result = await composeExecutionRunD2D3({
        providers,
        clockIso,
        finopsEnforcement: deps.finopsEnforcement,
      }).coordinate(coordinateInput(PILOT, "probe-c-rollout-coord"));
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
    }

    {
      await upsertMode(pool, PILOT, "SHADOW");
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: async () => null,
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, "probe-c-cap"),
      );
      expect(result.ok).toBe(true);
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      const broken = {
        query: async () => {
          throw new Error("capture_pg_detail_should_redact");
        },
      } as unknown as Pool;
      const capDeps = composeFinOpsT7ShadowExecutionDeps({
        pool: broken,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: async () => null,
      });
      const cap = await capDeps.capture.captureUsage({
        projectId: PILOT,
        executionRunId: "run:cqa-c-cap2",
        correlationId: "corr:cqa-c-cap2",
        provider: "fixture",
        occurredAt: clockIso,
        usage: { status: "validated", totalTokens: 1 },
      });
      expect(["disabled", "failed"]).toContain(cap.status);
      expect(JSON.stringify(cap)).not.toMatch(/capture_pg_detail_should_redact/);
    }
  });

  it("PROBE D — project isolation · other SHADOW TEST inert", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await upsertMode(pool, OTHER, "SHADOW");
    await seedProjection(pool, OTHER, TEST_ONLY_ELIGIBLE);
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_CQA",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: policy,
    });
    const result = await composition.coordinate(
      coordinateInput(OTHER, "probe-d"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("PROBE E — MONITOR / E1_ENFORCED TEST rows inert · never block", async () => {
    for (const mode of ["MONITOR", "E1_ENFORCED"] as const) {
      await upsertMode(pool, PILOT, mode);
      const policy = vi.fn(async () => ({
        thresholdCode: "TEST_ONLY_CQA",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      }));
      const { providers, completeSpy } = spyProviders();
      const composition = composeExecutionRunD2D3T7ShadowPilot({
        pool,
        clockIso,
        providers,
        resolveShadowPolicy: policy,
      });
      const result = await composition.coordinate(
        coordinateInput(PILOT, `probe-e-${mode}`),
      );
      expect(result.ok).toBe(true);
      expect(result.providerInvoked).toBe(true);
      expect(completeSpy).toHaveBeenCalled();
      expect(policy).not.toHaveBeenCalled();
      const deps = composeFinOpsT7ShadowExecutionDeps({
        pool,
        nowIso: () => clockIso,
        pilotProjectId: PILOT,
        resolveShadowPolicy: policy,
      });
      const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
        projectId: PILOT,
        executionRunId: `run:cqa-e-${mode}`,
        correlationId: `corr:cqa-e-${mode}`,
        occurredAt: clockIso,
      });
      expect(decision.decision).toBe("allow");
      expect(decision.reason).toBe("rollout_not_shadow_inert");
    }
  });

  it("PROBE F — mode drift SHADOW → OFF mid-provider · capture post inert", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const modes: string[] = [];
    const { providers, completeSpy } = spyProviders(async () => {
      await upsertMode(pool, PILOT, "OFF");
    });
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: (d) => {
        modes.push(`PRE_MODE=${d.mode}`);
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-f"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(modes[0]).toBe("PRE_MODE=SHADOW");
    const postMode = await composition.resolveProjectRollout(PILOT);
    expect(postMode.mode).toBe("OFF");
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("PROBE G — mode drift OFF → SHADOW mid-provider · characterize capture", async () => {
    await upsertMode(pool, PILOT, "OFF");
    await seedProjection(pool, PILOT, "0.10000000");
    const modes: string[] = [];
    const { providers, completeSpy } = spyProviders(async () => {
      await upsertMode(pool, PILOT, "SHADOW");
    });
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: (d) => {
        modes.push(`PRE_MODE=${d.mode}`);
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "probe-g"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(modes[0]).toBe("PRE_MODE=OFF");
    const postMode = await composition.resolveProjectRollout(PILOT);
    expect(postMode.mode).toBe("SHADOW");
    const cap = result.finopsCapture?.status;
    expect(["created", "duplicate", "recorded", "disabled", "failed"]).toContain(
      cap,
    );
    expect({
      PRE_MODE: "OFF",
      POST_MODE: "SHADOW",
      CAPTURE: cap,
      blocked: false,
      TEMPORAL_MODE_DRIFT_OBSERVED: true,
    }).toMatchObject({ TEMPORAL_MODE_DRIFT_OBSERVED: true, blocked: false });
  });
});
````

## 24. Temporal mode verdict

TEMPORAL MODE DRIFT OFF→SHADOW **RECONFIRMED** — observation integrity reserve OPEN · not block/enforce defect.

## 25–28. typecheck / lint / build / npm test

- typecheck EC=0
- lint EC=0
- build EC=0
- npm test first run : 2 failed / 1505 passed / 99 skipped — failures = `createProjectUi.test.tsx` **5000ms timeouts** (vertical-slice UI, unrelated to T7/OA/OPS1)
- dedicated re-run `createProjectUi.test.tsx` : **12/12 PASS**
- prior CI local repro (boundary+T7 unit) : **12/12 PASS**
- Classification : **NOT attributable to corrective commit bab14ca** · flake under full parallel suite load

## 29. Behavior invariants

pilot id unchanged · adapter/coordinator/T7 runtime unchanged · signal_only · never-block · MONITOR/E1 inert · policy NOT SELECTED · no real activation

## 30. Hashes finaux / subject immutability

```text
OK 3a6646af7ea1981160beac64894dd6ac58d70ce461f6973501f47dda4f5d8057  projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
OK 1c87d4601e0d59cd88cb3348626124adc2eac0c9ef9e5c24141a10f3c5b9870a  projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
OK e90b5da0c23023b3e0839cc729516fea7c127099a8e8e3099941f8365a4d3b6a  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
OK cb1cd4e40dadb057d9ebea964cff84ce6e76cfba3bccf740e948784d9ab3dd65  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
OK d57f4f1b98a6900bac92f90ba78bb1c5eb553441a062ea0c5ee6e80db2261dc0  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
HASH_AFTER_GATE=PASS
SUBJECT_UNCHANGED=yes
```

SUBJECT UNCHANGED DURING QA = yes

## 31. Reserves

- SHADOW PILOT POLICY SOURCE = NOT SELECTED
- TEMPORAL MODE DRIFT OFF→SHADOW = OPEN (revalidated)
- R-T4-T3-SYNC-01 = OPEN — BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration / T6-ext / Product IAM / T5 = unchanged
- Markdown hard-break exception 157 = ACCEPTED BY MORRIS
- OA→OPS1 boundary = **CLOSED BY CORRECTIVE COMMIT + QA** · NOT CLOSED ON MAIN
- npm full-suite UI timeout flake = documented non-attributable (re-run green)

## 32. Anti-claims

CI GITHUB GREEN=false · PR UPDATED=false · PR MERGE READY=false · SHADOW ACTIVATED=false · LIVE SHADOW=false · PRODUCTION READY=false · ZERO BUG=false · COMPLETE COVERAGE=false · POLICY SELECTED=false · THRESHOLD ADOPTED=false · MONITOR READY=false · E1 READY=false · T3 READY=false

## 33. Git final

```text
branch=delivery/sfia-studio-finops-t7-shadow-option-a
HEAD=bab14ca480b60744f6a428d93070c876de171ee1
origin_main=503369b10506515e173b5b58986c731ba1b313b8
origin_delivery=d99bbbdea2446af8b79488b7459924e6cf5a3e16
ahead_main=2
left_right=0	1
?? .tmp-sfia-review/
pr_head=d99bbbdea2446af8b79488b7459924e6cf5a3e16 state=OPEN draft=false
PROBE_ABSENT=yes
```

- Project push : **NO**
- PR update : **NO** (head still d99bbbd)
- Merge : **NO**
- SHADOW activation : **NO**
- Probe temporaire app : **ABSENT**

## 34. Next Morris gate

**GO PUSH CORRECTIVE COMMIT TO PR #321 + UPDATE PR BODY** (distinct).

Then observe GitHub CI · GO MERGE still distinct · policy/mode-drift before SHADOW activation.

Future PR body wording (not applied here):
`project-scoped pilot (\`sfia-studio-ops1\`, Morris-selected; OA-local constant preserving OA/OPS1 isolation)`

## 35. Verdict

```text
T7 SHADOW CORRECTIVE QA PASS WITH RESERVES —
CYCLE 9 CRITICAL —
CORRECTIVE COMMIT bab14ca480b60744f6a428d93070c876de171ee1 VALIDATED LOCALLY —
OA → OPS1 ISOLATION PROVEN —
PRIOR CI FAILURE LOCALLY REPRODUCED AS PASS —
PILOT sfia-studio-ops1 VERIFIED —
PILOT CONSISTENCY WITH OPS1_PROJECT_KEY VERIFIED IN TEST ONLY —
NO SHARED IDENTITY ABSTRACTION —
OFF INERT PROVEN —
NON-PILOT INERT PROVEN —
SIGNAL_ONLY FORCED PROVEN —
HOSTILE ENFORCE INPUT NEUTRALIZED —
SHADOW NEVER BLOCK PROVEN END-TO-END —
FAIL-OPEN PROVEN —
PROVIDER CONTINUITY PROVEN —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
PILOT CAPTURE GATING PROVEN —
TEMPORAL MODE SEMANTICS REVALIDATED —
SHADOW PILOT POLICY SOURCE NOT SELECTED —
NO REAL THRESHOLD —
NO REAL SHADOW ROW —
FULL REGRESSION PASS —
QA SUBJECT UNCHANGED DURING TEST —
PROJECT PUSH NOT PERFORMED —
PR #321 NOT UPDATED —
MERGE NOT PERFORMED —
SHADOW NOT ACTIVATED —
READY FOR MORRIS GO PUSH CORRECTIVE COMMIT / UPDATE PR —
NOT READY FOR SHADOW ACTIVATION —
HANDOFF REMOTE VERIFIED
```
