/**
 * @vitest-environment node
 *
 * FinOps T7 — minimal SHADOW activation operator PostgreSQL integration (PG01..PG07).
 * Ephemeral local Postgres only — never Neon / shared / production.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const PILOT = "sfia-studio-ops1";

describeDb("T7 SHADOW activation operator — PostgreSQL", () => {
  let pool: Pool;
  const store = () => createPostgresFinOpsRolloutStore(pool);

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
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
    // Ensure known SHADOW revision 3 from OFF@2
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
    // Rollback OFF then SHADOW again — revisions continue monotonically.
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

    // Final rollback OFF for cleanup hygiene
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

  it("operator error type is exportable for CLI", () => {
    expect(OperateFinOpsT7ShadowRolloutError.name).toBe(
      "OperateFinOpsT7ShadowRolloutError",
    );
  });
});
