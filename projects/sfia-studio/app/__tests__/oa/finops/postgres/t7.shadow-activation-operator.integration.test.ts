/**
 * @vitest-environment node
 *
 * FinOps T7 — SHADOW activation operator PostgreSQL integration + CAS proofs.
 * Ephemeral local Postgres only — never Neon / shared / production.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool, PoolClient } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import type { FinOpsRolloutCasPort } from "@/lib/oa/finops/ports/finopsRolloutPort";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const PILOT = "sfia-studio-ops1";

function barrierCasPort(
  inner: FinOpsRolloutCasPort,
  barrierSize: number,
): FinOpsRolloutCasPort & {
  preReads: string[];
  casAttempts: number;
} {
  let arrived = 0;
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  let prePhase = true;
  const preReads: string[] = [];
  let casAttempts = 0;
  return {
    preReads,
    get casAttempts() {
      return casAttempts;
    },
    async readProjectRollout(projectId: string) {
      const row = await inner.readProjectRollout(projectId);
      if (prePhase) {
        preReads.push(
          row ? `mode=${row.mode};rev=${row.revision}` : "ABSENT=OFF",
        );
        arrived += 1;
        if (arrived >= barrierSize) release();
        await gate;
      }
      return row;
    },
    upsertProjectRollout(input) {
      return inner.upsertProjectRollout(input);
    },
    async compareAndSwapProjectRollout(input) {
      prePhase = false;
      casAttempts += 1;
      return inner.compareAndSwapProjectRollout(input);
    },
  };
}

describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
  let pool: Pool;
  let lockClient: PoolClient;
  const store = () => createPostgresFinOpsRolloutStore(pool);

  beforeAll(async () => {
    // max includes lock client — serialize vs other T7 suites on finops_rollout_config.
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 8 });
    lockClient = await pool.connect();
    await lockClient.query(
      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
    );
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
  });

  afterAll(async () => {
    try {
      await pool.query(
        `DELETE FROM finops_rollout_config WHERE project_id = $1`,
        [PILOT],
      );
    } catch {
      // ignore
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

  it("PG01 absent/effective OFF → SHADOW → revision 1", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:10:00.000Z",
    });
    expect(result.afterMode).toBe("SHADOW");
    expect(result.afterRevision).toBe(1);
    expect(result.beforeRevision).toBeNull();
  });

  it("PG02 SHADOW → OFF → revision 2", async () => {
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:11:00.000Z",
    });
    expect(result.afterMode).toBe("OFF");
    expect(result.afterRevision).toBe(2);
    expect(result.beforeRevision).toBe(1);
  });

  it("PG03 before/after read exact", async () => {
    await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:12:00.000Z",
    });
    const row = await store().readProjectRollout(PILOT);
    expect(row).toEqual({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 3,
      updatedAt: expect.any(String),
    });
  });

  it("PG04 wrong expected mode → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    await expect(
      operateFinOpsT7ShadowRollout(store(), {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "OFF",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:13:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
  });

  it("PG05 non-pilot → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    await expect(
      operateFinOpsT7ShadowRollout(store(), {
        allowedProjectId: PILOT,
        projectId: "not-the-pilot",
        requestedMode: "OFF",
        expectedMode: "SHADOW",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:14:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_PROJECT" });
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
    const stray = await store().readProjectRollout("not-the-pilot");
    expect(stray).toBeNull();
  });

  it("PG06 dry-run → zero mutation", async () => {
    const before = await store().readProjectRollout(PILOT);
    const result = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: false,
      nowIso: () => "2026-08-09T08:15:00.000Z",
    });
    expect(result.applied).toBe(false);
    expect(result.result).toBe("dry_run");
    const after = await store().readProjectRollout(PILOT);
    expect(after).toEqual(before);
  });

  it("PG07 repeated store semantics remain compatible", async () => {
    const off = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:16:00.000Z",
    });
    expect(off.afterMode).toBe("OFF");
    expect(off.afterRevision).toBe(4);

    const shadow = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:17:00.000Z",
    });
    expect(shadow.afterMode).toBe("SHADOW");
    expect(shadow.afterRevision).toBe(5);

    const finalOff = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:18:00.000Z",
    });
    expect(finalOff.afterMode).toBe("OFF");
    expect(finalOff.afterRevision).toBe(6);
  });

  it("PG-CAS01 absent + OFF/null → SHADOW rev1 SUCCESS", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: null,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:00:00.000Z",
    });
    expect(row).toEqual({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 1,
      updatedAt: expect.any(String),
    });
  });

  it("PG-CAS02 absent + SHADOW/null → NO MATCH / ZERO row", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "SHADOW",
      expectedRevision: null,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:01:00.000Z",
    });
    expect(row).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toBeNull();
  });

  it("PG-CAS03 existing OFF rev1 + OFF/1 → SHADOW rev2", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "OFF",
      updatedAt: "2026-08-09T09:02:00.000Z",
    });
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: 1,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:02:01.000Z",
    });
    expect(row).toMatchObject({ mode: "SHADOW", revision: 2 });
  });

  it("PG-CAS04 existing OFF rev1 + stale expected revision → ZERO mutation", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "OFF",
      updatedAt: "2026-08-09T09:03:00.000Z",
    });
    const before = await store().readProjectRollout(PILOT);
    const staleZero = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: 0,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:03:01.000Z",
    });
    expect(staleZero).toBeNull();
    const staleWrong = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: 99,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:03:02.000Z",
    });
    expect(staleWrong).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toEqual(before);
  });

  it("PG-CAS05 existing SHADOW rev1 + expected OFF/1 → ZERO mutation", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:04:00.000Z",
    });
    const before = await store().readProjectRollout(PILOT);
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: 1,
      mode: "OFF",
      updatedAt: "2026-08-09T09:04:01.000Z",
    });
    expect(row).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toEqual(before);
  });

  it("PG-CAS06 existing SHADOW rev1 + SHADOW/1 → OFF rev2", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:05:00.000Z",
    });
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "SHADOW",
      expectedRevision: 1,
      mode: "OFF",
      updatedAt: "2026-08-09T09:05:01.000Z",
    });
    expect(row).toMatchObject({ mode: "OFF", revision: 2 });
  });

  it("PG-CAS07 existing row + expectedRevision null → ZERO mutation", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "OFF",
      updatedAt: "2026-08-09T09:06:00.000Z",
    });
    const before = await store().readProjectRollout(PILOT);
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: null,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:06:01.000Z",
    });
    expect(row).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toEqual(before);
  });

  it("PG-CAS08 CAS failure leaves mode/revision/updated_at unchanged", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "OFF",
      updatedAt: "2026-08-09T09:07:00.000Z",
    });
    const before = await store().readProjectRollout(PILOT);
    const row = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "SHADOW",
      expectedRevision: 1,
      mode: "OFF",
      updatedAt: "2026-08-09T09:07:59.000Z",
    });
    expect(row).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toEqual(before);
  });

  it("adversarial absent concurrency — exactly one mutation / rev 1", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    const port = barrierCasPort(store(), 2);
    const run = async (actor: string) => {
      try {
        const result = await operateFinOpsT7ShadowRollout(port, {
          allowedProjectId: PILOT,
          projectId: PILOT,
          requestedMode: "SHADOW",
          expectedMode: "OFF",
          targetLabel: "local-cas-adversarial",
          apply: true,
          nowIso: () => new Date().toISOString(),
        });
        return { actor, ok: true as const, afterRevision: result.afterRevision };
      } catch (e) {
        const code =
          e && typeof e === "object" && "code" in e
            ? String((e as { code: unknown }).code)
            : "UNKNOWN";
        return { actor, ok: false as const, code };
      }
    };
    const [a, b] = await Promise.all([run("A"), run("B")]);
    const final = await store().readProjectRollout(PILOT);
    const success = [a, b].filter((x) => x.ok);
    const fail = [a, b].filter((x) => !x.ok);
    expect(port.preReads).toEqual(["ABSENT=OFF", "ABSENT=OFF"]);
    expect(port.casAttempts).toBe(2);
    expect(success).toHaveLength(1);
    expect(fail).toHaveLength(1);
    expect(fail[0]).toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    expect(final).toMatchObject({ mode: "SHADOW", revision: 1 });
  });

  it("adversarial existing-row concurrency — exactly one mutation / N+1", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().upsertProjectRollout({
      projectId: PILOT,
      mode: "OFF",
      updatedAt: "2026-08-09T09:20:00.000Z",
    });
    const port = barrierCasPort(store(), 2);
    const run = async (actor: string) => {
      try {
        const result = await operateFinOpsT7ShadowRollout(port, {
          allowedProjectId: PILOT,
          projectId: PILOT,
          requestedMode: "SHADOW",
          expectedMode: "OFF",
          targetLabel: "local-cas-existing",
          apply: true,
          nowIso: () => new Date().toISOString(),
        });
        return { actor, ok: true as const, afterRevision: result.afterRevision };
      } catch (e) {
        const code =
          e && typeof e === "object" && "code" in e
            ? String((e as { code: unknown }).code)
            : "UNKNOWN";
        return { actor, ok: false as const, code };
      }
    };
    const [a, b] = await Promise.all([run("A"), run("B")]);
    const final = await store().readProjectRollout(PILOT);
    expect(port.preReads.every((r) => r === "mode=OFF;rev=1")).toBe(true);
    expect([a, b].filter((x) => x.ok)).toHaveLength(1);
    expect([a, b].filter((x) => !x.ok)[0]).toMatchObject({
      code: "EXPECTED_MODE_MISMATCH",
    });
    expect(final).toMatchObject({ mode: "SHADOW", revision: 2 });
  });

  it("rollback CAS — SHADOW→OFF then stale SHADOW/rev1 zero mutation", async () => {
    await pool.query(`DELETE FROM finops_rollout_config WHERE project_id = $1`, [
      PILOT,
    ]);
    await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "OFF",
      expectedRevision: null,
      mode: "SHADOW",
      updatedAt: "2026-08-09T09:30:00.000Z",
    });
    const rollback = await operateFinOpsT7ShadowRollout(store(), {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "local-rollback",
      apply: true,
      nowIso: () => "2026-08-09T09:30:01.000Z",
    });
    expect(rollback).toMatchObject({ afterMode: "OFF", afterRevision: 2 });

    const stale = await store().compareAndSwapProjectRollout({
      projectId: PILOT,
      expectedMode: "SHADOW",
      expectedRevision: 1,
      mode: "OFF",
      updatedAt: "2026-08-09T09:30:02.000Z",
    });
    expect(stale).toBeNull();
    expect(await store().readProjectRollout(PILOT)).toMatchObject({
      mode: "OFF",
      revision: 2,
    });
  });

  it("operator error type is exportable for CLI", () => {
    expect(OperateFinOpsT7ShadowRolloutError.name).toBe(
      "OperateFinOpsT7ShadowRolloutError",
    );
  });
});
