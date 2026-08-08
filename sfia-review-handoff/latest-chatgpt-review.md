# Cycle 8 — Delivery Critical — T7 SHADOW Option A + Thin Adapter — Review Pack (full)

Date/heure : 2026-08-08 18:16:57 CEST / 2026-08-08 16:16:57 UTC

## Cycle / profil / GO

- Cycle : **8 — Delivery / implémentation**
- Profil : **Critical**
- Justification Critical : frontière execution-run · pre-provider · FinOpsEnforcementPort · risk of BLOCK if miswired · pilot identity selected
- GO Morris exact : `GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`
- Ce GO N'AUTORISE PAS : row SHADOW réelle · activation pilote · MONITOR/E1 · T3 · seuils 15/20/25/30 · Neon · commit/push/PR projet

## Local Git Truth (avant)

- Repo : `mcleland147/sfia-workspace`
- origin/main = HEAD base = `503369b10506515e173b5b58986c731ba1b313b8`
- Worktree Delivery : `…/worktrees/finops-t7-shadow-option-a`
- Branche : `delivery/sfia-studio-finops-t7-shadow-option-a` (created from base)
- Tracked initial : clean · staged none

## Handoff entrant

- Tip : `a69c8c7a1640c9fbc4f889c1adb6d5c8e4b37f88`
- Blob : `2d70eaf9542f1af5008d1bd84dcfd0312e1c9aee`
- Cycle 6 Architecture · Option A recommended · pilot resolved by Morris to `sfia-studio-ops1`

## Sources consultées

Template · routing · operating model · rules · checklist · v2.5 cycles · CKC synthetic map · publisher · handoff Cycle 6 · doc 156 · T7/T4/T6/execution-run/OPS1 sources.

## Pre-code assertions A–G

| # | Assertion | Result |
|---|-----------|--------|
| A | ExecutionContext.projectId | CONFIRMED |
| B | coordinator passes context.projectId to evaluateBeforeProvider | CONFIRMED |
| C | soft_signal/allow/failed/throw CONTINUE ; only block stops | CONFIRMED |
| D | composeExecutionRunD2D3 accepts finops + finopsEnforcement | CONFIRMED |
| E | createFinOpsEnforcementPort needs projection + resolvePolicy ; no default policy | CONFIRMED |
| F | T7 SHADOW instruction fields | CONFIRMED |
| G | sfia-studio-ops1 = OPS1_PROJECT_KEY | CONFIRMED |

## Architecture réalisée

```
composeExecutionRunD2D3T7ShadowPilot
  → composeFinOpsT7ShadowExecutionDeps(pilot=OPS1_PROJECT_KEY)
       → composeFinOpsT7Runtime (reuse)
       → createFinOpsEnforcementPort (effect FORCED signal_only)
       → ensureShadowNeverBlocks (block→failed)
       → pilot-gated capture
  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // UNCHANGED source
```

## Files CREATE / MODIFY / DELETE

**CREATE (5):** listed below with full content.
**MODIFY:** none
**DELETE:** none
**Core unchanged:** coordinateExecutionRun / composeExecutionRunD2D3 / composeFinOpsT7Runtime / evaluateFinOpsEnforcement — empty diff vs `503369b`.

## Contenu COMPLET des fichiers créés

### `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`

```typescript
/**
 * FinOps T7 SHADOW — thin adapter: rollout instruction → execution-run deps.
 *
 * Option A wiring (Morris-selected):
 * - Reuses composeFinOpsT7Runtime + createFinOpsEnforcementPort.
 * - Forces effect=signal_only for SHADOW.
 * - Never returns decision=block (defense-in-depth).
 * - MONITOR / E1 paths stay inert (allow).
 * - Pilot-scoped capture/enforcement only.
 *
 * Anti-claims:
 * - Does NOT activate SHADOW (no durable row write).
 * - Does NOT select production thresholds (15/20/25/30 forbidden).
 * - Does NOT create pools, read env, or close caller-owned pool.
 * - Does NOT modify composeFinOpsT7Runtime / T4 / T6 / coordinator sources.
 */

import type { Pool } from "pg";
import { createFinOpsEnforcementPort } from "../application/evaluateFinOpsEnforcement";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import {
  composeFinOpsT7Runtime,
  type FinOpsT7RuntimeComposition,
} from "./composeFinOpsT7Runtime";

/**
 * Policy fields injectable for SHADOW evaluation.
 * Effect is intentionally omitted — the adapter always forces signal_only.
 */
export type FinOpsT7ShadowPolicyInput = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; TEST / injected only — not a product default. */
  readonly thresholdAmount: string;
};

export type FinOpsT7ShadowDecisionDiagnostic = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutInstruction["mode"] | "unresolved";
  readonly decision: FinOpsEnforcementDecision["decision"];
  readonly reason: string;
  readonly pilotProjectId: string;
};

export type ComposeFinOpsT7ShadowExecutionDepsInput = {
  /** Caller-owned pool. Never closed by this adapter. */
  readonly pool: Pool;
  readonly nowIso: () => string;
  /**
   * Morris-selected T7 SHADOW pilot identity — not global project identity.
   * Expected production pilot: sfia-studio-ops1 (injected by pilot composer).
   */
  readonly pilotProjectId: string;
  /**
   * Explicit policy injection. Returning null ⇒ T4 allow/not_configured.
   * Must NOT adopt historical 15/20/25/30 as product thresholds.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  /** Optional observe sink — errors ignored (fail-open). */
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type FinOpsT7ShadowExecutionDeps = {
  readonly capture: FinOpsCapturePort;
  readonly finopsEnforcement: FinOpsEnforcementPort;
  readonly resolveProjectRollout: FinOpsT7RuntimeComposition["resolveProjectRollout"];
  readonly flushAudit: FinOpsT7RuntimeComposition["flushAudit"];
  readonly pilotProjectId: string;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7ShadowExecutionDeps is server-only and must not run in a browser context.",
    );
  }
}

function allow(reason: string): FinOpsEnforcementDecision {
  return { decision: "allow", reason };
}

function failed(reason: string): FinOpsEnforcementDecision {
  return { decision: "failed", reason, finopsSideOnly: true };
}

/**
 * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
 * Exported for focused unit proof (T7-SW06).
 */
export function ensureShadowNeverBlocks(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementDecision {
  if (decision.decision === "block") {
    return failed("shadow_block_forbidden");
  }
  return decision;
}

async function emitShadowDecision(
  sink: ComposeFinOpsT7ShadowExecutionDepsInput["onShadowDecision"],
  diagnostic: FinOpsT7ShadowDecisionDiagnostic,
): Promise<void> {
  if (!sink) return;
  try {
    await sink(diagnostic);
  } catch {
    // Diagnostic sink failures must never affect provider path.
  }
}

/**
 * Compose pilot-aware FinOps deps for execution-run Option A SHADOW wiring.
 */
export function composeFinOpsT7ShadowExecutionDeps(
  input: ComposeFinOpsT7ShadowExecutionDepsInput,
): FinOpsT7ShadowExecutionDeps {
  assertServerOnly();

  const pilotProjectId = input.pilotProjectId.trim();
  if (!pilotProjectId) {
    throw new Error("pilotProjectId is required for T7 SHADOW execution deps");
  }

  const t7 = composeFinOpsT7Runtime({
    pool: input.pool,
    nowIso: input.nowIso,
  });
  const projection = createPostgresFinOpsEnforcementProjectionStore(input.pool);

  const finopsEnforcement: FinOpsEnforcementPort = {
    async evaluateBeforeProvider(evalInput) {
      let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
      try {
        const projectId =
          typeof evalInput.projectId === "string"
            ? evalInput.projectId.trim()
            : "";
        if (!projectId || projectId !== pilotProjectId) {
          const decision = allow("non_pilot_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId: projectId || "",
            mode: "OFF",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          const decision = failed("rollout_resolve_failed");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode: "unresolved",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        mode = instruction.mode;

        if (instruction.mode !== "SHADOW") {
          // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
          const decision = allow("rollout_not_shadow_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode,
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        const port = createFinOpsEnforcementPort({
          projection,
          resolvePolicy: async (policyInput) => {
            let base: FinOpsT7ShadowPolicyInput | null;
            try {
              base = await input.resolveShadowPolicy(policyInput);
            } catch {
              throw new Error("policy_resolver_failed");
            }
            if (!base) return null;
            return {
              thresholdCode: base.thresholdCode,
              currency: base.currency,
              thresholdAmount: base.thresholdAmount,
              effect: "signal_only",
            };
          },
        });

        const decision = ensureShadowNeverBlocks(
          await port.evaluateBeforeProvider(evalInput),
        );

        await emitShadowDecision(input.onShadowDecision, {
          projectId,
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      } catch {
        const decision = failed("shadow_adapter_failed");
        await emitShadowDecision(input.onShadowDecision, {
          projectId:
            typeof evalInput.projectId === "string"
              ? evalInput.projectId.trim()
              : "",
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      }
    },
  };

  const capture: FinOpsCapturePort = {
    async captureUsage(request) {
      try {
        const projectId =
          typeof request.projectId === "string" ? request.projectId.trim() : "";
        if (!projectId || projectId !== pilotProjectId) {
          return {
            status: "disabled",
            reason: "non_pilot_shadow_capture_inactive",
          };
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          return {
            status: "disabled",
            reason: "shadow_capture_rollout_failed_inert",
          };
        }

        if (instruction.mode !== "SHADOW") {
          return {
            status: "disabled",
            reason: "shadow_capture_inactive",
          };
        }

        return t7.capture.captureUsage(request);
      } catch {
        return {
          status: "failed",
          error: {
            code: "FINOPS_CAPTURE_FAILED",
            message: "shadow_capture_adapter_failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      }
    },
  };

  return {
    capture,
    finopsEnforcement,
    resolveProjectRollout: t7.resolveProjectRollout,
    flushAudit: t7.flushAudit,
    pilotProjectId,
  };
}
```
### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`

```typescript
/**
 * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
 *
 * Reuses composeExecutionRunD2D3 injection surface unchanged.
 * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
 * - MONITOR / E1 not activated.
 * - No real provider / Neon / production threshold.
 * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
 */

import type { Pool } from "pg";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
import {
  composeFinOpsT7ShadowExecutionDeps,
  type FinOpsT7ShadowDecisionDiagnostic,
  type FinOpsT7ShadowPolicyInput,
} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
import {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

/**
 * Morris-selected T7 SHADOW pilot identity — not global project identity.
 * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
 */
export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;

export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
  /** Caller-owned FinOps pool. Never closed here. */
  readonly pool: Pool;
  readonly nowIso?: () => string;
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  /**
   * Explicit SHADOW policy injection (TEST or future activation source).
   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type ExecutionRunD2D3T7ShadowPilotComposition =
  ExecutionRunD2D3Composition & {
    readonly pilotProjectId: string;
    readonly resolveProjectRollout: (
      projectId: string,
    ) => Promise<
      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
    >;
    readonly flushAudit: () => Promise<void>;
  };

/**
 * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
 * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
 */
export function composeExecutionRunD2D3T7ShadowPilot(
  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
): ExecutionRunD2D3T7ShadowPilotComposition {
  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");

  const nowIso =
    input.nowIso ??
    input.clock?.nowIso ??
    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");

  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
    pool: input.pool,
    nowIso,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveShadowPolicy: input.resolveShadowPolicy,
    onShadowDecision: input.onShadowDecision,
  });

  const base = composeExecutionRunD2D3({
    providers: input.providers,
    clock: input.clock,
    clockIso: input.clockIso,
    finops: shadowDeps.capture,
    finopsEnforcement: shadowDeps.finopsEnforcement,
  });

  return {
    ...base,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveProjectRollout: shadowDeps.resolveProjectRollout,
    flushAudit: shadowDeps.flushAudit,
  };
}
```
### `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — pure unit proofs (no DB).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ensureShadowNeverBlocks } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";

describe("T7 SHADOW Option A — unit", () => {
  it("T7-SW06 ensureShadowNeverBlocks converts block → failed shadow_block_forbidden", () => {
    const out = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(out.decision).toBe("failed");
    expect(out.reason).toBe("shadow_block_forbidden");
    expect(out.finopsSideOnly).toBe(true);
  });

  it("T7-SW06b soft_signal / allow / failed pass through unchanged", () => {
    expect(
      ensureShadowNeverBlocks({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }).decision,
    ).toBe("soft_signal");
    expect(
      ensureShadowNeverBlocks({ decision: "allow", reason: "below_threshold" })
        .decision,
    ).toBe("allow");
    expect(
      ensureShadowNeverBlocks({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }).decision,
    ).toBe("failed");
  });

  it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
  });

  it("T7-SW16 new composers expose no MONITOR/E1/enforce activation API", () => {
    const adapter = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
      ),
      "utf8",
    );
    const pilot = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts",
      ),
      "utf8",
    );
    expect(adapter).toMatch(/effect:\s*"signal_only"/);
    expect(adapter).toMatch(/shadow_block_forbidden/);
    expect(adapter).toMatch(/rollout_not_shadow_inert/);
    expect(pilot).not.toMatch(/E1_ENFORCED/);
    expect(pilot).not.toMatch(/effect:\s*"enforce"/);
    expect(adapter).not.toMatch(/upsertProjectRollout/);
  });
});
```
### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — wiring integration (T7-SW01..SW15).
 * Requires DATABASE_URL ephemeral Postgres — never Neon.
 * TEST ONLY rows/policies — NOT product activation / NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import { getFixture } from "@/lib/oa/execution-run";
import {
  composeExecutionRunD2D3T7ShadowPilot,
  T7_SHADOW_PILOT_PROJECT_ID,
} from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import {
  composeExecutionRunProviders,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** TEST ONLY fictitious threshold — NOT historical calibration. */
const TEST_ONLY_THRESHOLD = "1.00000000";
const TEST_ONLY_ELIGIBLE = "9.99000000";

const PILOT = T7_SHADOW_PILOT_PROJECT_ID;
const OTHER = "project:d2d1-fixture";

async function upsertMode(
  pool: Pool,
  projectId: string,
  mode: FinOpsRolloutMode,
): Promise<void> {
  const store = createPostgresFinOpsRolloutStore(pool);
  await store.upsertProjectRollout({
    projectId,
    mode,
    updatedAt: "2026-08-08T16:00:00.000Z",
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

function spyProviders() {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete");
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
      intentId: `intent:t7sw:${suffix}`,
      correlationId: `corr:t7sw:${suffix}`,
    },
    context: {
      ...fixture.context,
      projectId,
    },
    providerRequest: {
      correlationId: `corr:t7sw:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describeDb("T7 SHADOW Option A — wiring integration", () => {
  let pool: Pool;
  const clockIso = "2026-08-08T16:10:00.000Z";

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    await pool.query(`SELECT 1`);
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER, `${PILOT}-extra`]],
    );
    await pool.query(
      `DELETE FROM finops_enforcement_projection WHERE project_id = ANY($1::text[])`,
      [[PILOT, OTHER]],
    );
    await closeFinOpsPool(pool);
  });

  it("T7-SW01 pilot + OFF → no block · no shadow policy · capture inactive", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
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
      coordinateInput(PILOT, "sw01"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
    expect(result.finopsCapture?.status).toBe("disabled");
  });

  it("T7-SW02 pilot + missing row → default OFF inert", async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id = $1`,
      [PILOT],
    );
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw02",
      correlationId: "corr:sw02",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
    const instruction = await deps.resolveProjectRollout(PILOT);
    expect(instruction.mode).toBe("OFF");
    expect(instruction.resolution).toBe("default_off");
  });

  it("T7-SW03 rollout store failure → fail-open OFF inert · provider path safe", async () => {
    const brokenPool = {
      query: async () => {
        throw new Error("simulated rollout read failure");
      },
      connect: async () => {
        throw new Error("simulated connect failure");
      },
    } as unknown as Pool;
    const policy = vi.fn(async () => null);
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool: brokenPool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw03",
      correlationId: "corr:sw03",
      occurredAt: clockIso,
    });
    // resolveFinOpsRollout fail-opens to OFF → adapter stays inert (never block).
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("rollout_not_shadow_inert");
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW04 pilot + SHADOW → policy resolver called · effect forced signal_only", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.50000000");
    const seenEffects: string[] = [];
    const policy = vi.fn(async () => {
      seenEffects.push("caller_had_no_effect_field");
      return {
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      };
    });
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw04",
      correlationId: "corr:sw04",
      occurredAt: clockIso,
    });
    expect(policy).toHaveBeenCalled();
    expect(seenEffects).toEqual(["caller_had_no_effect_field"]);
    expect(decision.decision).not.toBe("block");
    expect(["allow", "soft_signal", "failed"]).toContain(decision.decision);
  });

  it("T7-SW05 SHADOW threshold crossed TEST policy → soft_signal · provider invoked · never blocked", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => ({
        thresholdCode: "TEST_ONLY_SW",
        currency: "USD",
        thresholdAmount: TEST_ONLY_THRESHOLD,
      }),
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw05"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(result.finopsCapture?.status).not.toBeUndefined();
  });

  it("T7-SW07 non-pilot projectId → pilot SHADOW path inactive", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await upsertMode(pool, OTHER, "SHADOW");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
      currency: "USD",
      thresholdAmount: TEST_ONLY_THRESHOLD,
    }));
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: policy,
    });
    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      occurredAt: clockIso,
    });
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("non_pilot_inert");
    expect(policy).not.toHaveBeenCalled();
    const capture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw07",
      correlationId: "corr:sw07",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(capture.status).toBe("disabled");
  });

  it("T7-SW08 MONITOR row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "MONITOR");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
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
      coordinateInput(PILOT, "sw08"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW09 E1 row TEST → adapter inert · provider continues", async () => {
    await upsertMode(pool, PILOT, "E1_ENFORCED");
    const policy = vi.fn(async () => ({
      thresholdCode: "TEST_ONLY_SW",
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
      coordinateInput(PILOT, "sw09"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    expect(policy).not.toHaveBeenCalled();
  });

  it("T7-SW10 policy absent → allow/not_configured · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw10"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW11 policy resolver throw → failed/fail-open · provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => {
        throw new Error("TEST_ONLY policy boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw11"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW12 shadow decision sink throw → provider continues", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers, completeSpy } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
      onShadowDecision: () => {
        throw new Error("TEST_ONLY sink boom");
      },
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw12"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("T7-SW13 SHADOW + successful AI → capture delegated for pilot", async () => {
    await upsertMode(pool, PILOT, "SHADOW");
    await seedProjection(pool, PILOT, "0.10000000");
    const { providers } = spyProviders();
    const composition = composeExecutionRunD2D3T7ShadowPilot({
      pool,
      clockIso,
      providers,
      resolveShadowPolicy: async () => null,
    });
    const result = await composition.coordinate(
      coordinateInput(PILOT, "sw13"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.finopsCapture).toBeDefined();
    expect(["created", "duplicate", "failed"]).toContain(
      result.finopsCapture!.status,
    );
  });

  it("T7-SW14 OFF / non-pilot → no SHADOW capture", async () => {
    await upsertMode(pool, PILOT, "OFF");
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async () => null,
    });
    const offCapture = await deps.capture.captureUsage({
      projectId: PILOT,
      executionRunId: "run:sw14a",
      correlationId: "corr:sw14a",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(offCapture.status).toBe("disabled");
    const otherCapture = await deps.capture.captureUsage({
      projectId: OTHER,
      executionRunId: "run:sw14b",
      correlationId: "corr:sw14b",
      provider: "fixture",
      occurredAt: clockIso,
      usage: { status: "validated", totalTokens: 1 },
    });
    expect(otherCapture.status).toBe("disabled");
  });

  it("T7-SW15 pilot scenario uses exact sfia-studio-ops1 for rollout/eval/capture", async () => {
    expect(PILOT).toBe("sfia-studio-ops1");
    await upsertMode(pool, PILOT, "SHADOW");
    const seen: string[] = [];
    const deps = composeFinOpsT7ShadowExecutionDeps({
      pool,
      nowIso: () => clockIso,
      pilotProjectId: PILOT,
      resolveShadowPolicy: async (input) => {
        seen.push(input.projectId);
        return null;
      },
    });
    await deps.finopsEnforcement.evaluateBeforeProvider({
      projectId: PILOT,
      executionRunId: "run:sw15",
      correlationId: "corr:sw15",
      occurredAt: clockIso,
    });
    expect(seen).toEqual(["sfia-studio-ops1"]);
    expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
  });
});
```
### `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`

```markdown
# 157 — FinOps T7 SHADOW Option A + Thin Adapter — Wiring Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option A (pre-provider execution-run) selected by Morris | **TRUE** |
| Thin adapter delivered | **TRUE** |
| Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
| Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
| `coordinateExecutionRun` unmodified | **TRUE** |
| `composeExecutionRunD2D3` unmodified | **TRUE** |
| T7/T4/T6 foundation sources unmodified | **TRUE** |
| signal_only forced for SHADOW | **TRUE** |
| SHADOW never BLOCK (defense-in-depth) | **TRUE** |
| MONITOR / E1 not activated by adapter | **TRUE** |
| No production threshold / 15/20/25/30 | **TRUE** |
| No durable SHADOW row on real env | **TRUE** |
| SHADOW activated | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
SHADOW WIRING DELIVERED LOCALLY —
READY FOR DEDICATED WIRING QA —
SHADOW NOT ACTIVATED
```

---

## B. GO Morris

**Utterance / decision:**
`GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`

**Consumed:** local CREATE wiring + tests + execution record.
**Not consumed:** real SHADOW activation · MONITOR · E1 · T3 · thresholds · Neon · commit/push/PR.

---

## C. Files CREATE

1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
5. This execution record (`157-…`)

**MODIFY / DELETE:** none (core files untouched).

---

## D. Architecture

```text
composeExecutionRunD2D3T7ShadowPilot
  → composeFinOpsT7ShadowExecutionDeps(pool, pilot=sfia-studio-ops1)
       → composeFinOpsT7Runtime (reuse)
       → createFinOpsEnforcementPort + effect forced signal_only
       → pilot-gated capture
  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // unchanged
```

---

## E. Rollback

1. Config: no product SHADOW row written by this Delivery.
2. Code: remove pilot composer injection / feature gate.
3. No migration.

---

## F. Next

Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
Then distinct GO for actual pilot activation if Morris authorizes.
```


## Comportements / preuves

- OFF / missing / fail_open_off : inert allow ; capture disabled
- SHADOW + pilot : policy injected ; effect forced signal_only ; provider continues
- Defense : `ensureShadowNeverBlocks` converts block → failed `shadow_block_forbidden`
- Pilot : `T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY` (`sfia-studio-ops1`)
- Non-pilot / MONITOR / E1 : inert
- Policy absent / throw / sink throw : fail-open
- Capture : only pilot+SHADOW delegates to T6
- No real threshold/default ; TEST_ONLY amounts in tests
- No durable SHADOW row on real env

## Observabilité

Optional `onShadowDecision` sink — errors swallowed. No T6-ext.

## Environnement PG test

docker ephemeral · loopback:55434 · SAFE_EPHEMERAL · Neon=no · URL not logged · container removed

## Commandes / résultats

```
migrate:up → complete
new tests → 18 passed
regression → 57 passed
tsc --noEmit → exit 0
```

Skipped required : **0**

## Réserves

- R-T4-PROJECTION-REFRESH-01 CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN
- R-T4-T3-SYNC-01 OPEN — BEFORE MONITOR
- R-PR-T2-API-01 OPEN MINOR
- Calibration réelle REQUIRED BEFORE MONITOR — NOT EXECUTED
- T6-ext NOT AUTHORIZED · Product IAM NOT_SELECTED · T5 OUT OF SCOPE
- **SHADOW PILOT POLICY SOURCE : NOT SELECTED — REQUIRED BEFORE MEANINGFUL PILOT ACTIVATION**

## Anti-claims

SHADOW NOT ACTIVATED · NO LIVE SHADOW · NO MONITOR/E1 · NO THRESHOLD ADOPTED · NO POLICY SELECTED · NO PROJECT COMMIT/PUSH/PR

## Git status final (Delivery WT)

```
?? 157-…-wiring-execution.md
?? t7.shadow-option-a.unit.test.ts
?? t7.shadow-option-a.wiring.integration.test.ts
?? composeExecutionRunD2D3T7ShadowPilot.ts
?? composeFinOpsT7ShadowExecutionDeps.ts
?? .tmp-sfia-review/
```

No project commit.

## Décisions Morris restantes

1. Dedicated T7 SHADOW Wiring QA (Cycle 9)
2. Sélection source policy pilote
3. GO activation pilote SHADOW (distinct)

## Prochaine étape

Cycle 9 — Dedicated T7 SHADOW Wiring QA — NOT STARTED

## Verdict unique

```
T7 SHADOW OPTION A WIRING DELIVERY COMPLETE WITH RESERVES —
CYCLE 8 CRITICAL —
OPTION A SELECTED BY MORRIS —
THIN ADAPTER DELIVERED —
PILOT PROJECT ID sfia-studio-ops1 SELECTED BY MORRIS —
EXECUTION-RUN EXISTING INJECTION SURFACE REUSED —
CORE COORDINATOR UNCHANGED —
T7 SHADOW GATED PROJECT-SCOPED —
SIGNAL_ONLY FORCED —
SHADOW NEVER BLOCK PROVEN —
FAIL-OPEN PROVEN —
OFF INERT PROVEN —
NON-PILOT INERT PROVEN —
MONITOR NOT ACTIVATED —
E1 NOT AUTHORIZED —
NO REAL THRESHOLD ADOPTED —
NO REAL SHADOW ROW WRITTEN —
SHADOW NOT ACTIVATED —
READY FOR DEDICATED SHADOW WIRING QA —
NO PROJECT COMMIT / PUSH / PR —
HANDOFF REMOTE VERIFIED
```

## Review Handoff Git (contenu destiné à publication)

- Mode : publish-in-cycle
- Source : `.tmp-sfia-review/chatgpt-review.md`
- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message prévu : `docs(review-handoff): publish T7 shadow option A delivery`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- Remote BEFORE : tip `a69c8c7a1640c9fbc4f889c1adb6d5c8e4b37f88` / blob `2d70eaf9542f1af5008d1bd84dcfd0312e1c9aee`
- Final remote tip/blob verified externally after publication; see Cursor final report and Git remote verification.
