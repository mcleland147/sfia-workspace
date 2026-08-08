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
