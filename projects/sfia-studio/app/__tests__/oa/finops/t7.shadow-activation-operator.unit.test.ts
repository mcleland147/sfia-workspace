/**
 * @vitest-environment node
 *
 * FinOps T7 — minimal SHADOW activation operator unit tests (U01..U08).
 */
import { describe, expect, it } from "vitest";
import type { FinOpsRolloutConfig } from "@/lib/oa/finops/application/types.rollout";
import type { FinOpsRolloutPort } from "@/lib/oa/finops/ports/finopsRolloutPort";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const PILOT = "sfia-studio-ops1";

function memoryRollout(
  initial: FinOpsRolloutConfig | null = null,
): FinOpsRolloutPort & { upserts: number; reads: number } {
  let row = initial;
  const port = {
    upserts: 0,
    reads: 0,
    async readProjectRollout(projectId: string) {
      port.reads += 1;
      if (!projectId.trim()) return null;
      return row && row.projectId === projectId ? row : null;
    },
    async upsertProjectRollout(input: {
      projectId: string;
      mode: FinOpsRolloutConfig["mode"];
      updatedAt: string;
    }) {
      port.upserts += 1;
      const revision = row ? row.revision + 1 : 1;
      row = {
        projectId: input.projectId,
        mode: input.mode,
        revision,
        updatedAt: input.updatedAt,
      };
      return row;
    },
  };
  return port;
}

describe("T7 SHADOW activation operator — unit", () => {
  it("U01 wrong project → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: "other-project",
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_PROJECT" });
    expect(port.upserts).toBe(0);
  });

  it("U02 MONITOR → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "MONITOR",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U03 E1 → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "E1_ENFORCED",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U04 missing expected-mode → reject", async () => {
    const port = memoryRollout();
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "   ",
        targetLabel: "ephemeral-local",
        apply: false,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_EXPECTED_MODE" });
    expect(port.upserts).toBe(0);
  });

  it("U05 dry-run → zero mutation", async () => {
    const port = memoryRollout();
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: false,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result.result).toBe("dry_run");
    expect(result.applied).toBe(false);
    expect(result.afterMode).toBe("OFF");
    expect(port.upserts).toBe(0);
  });

  it("U06 current != expected → reject", async () => {
    const port = memoryRollout({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 1,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "OFF",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    expect(port.upserts).toBe(0);
  });

  it("U07 current == requested target → reject/no revision bump", async () => {
    const port = memoryRollout({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 2,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "SHADOW",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "NOOP_REJECTED" });
    expect(port.upserts).toBe(0);
  });

  it("U08 DB error → sanitized failure", async () => {
    const port: FinOpsRolloutPort = {
      async readProjectRollout() {
        throw new Error(
          "connect ECONNREFUSED postgres://sfia_ci:secret@127.0.0.1:5432/db DATABASE_URL_DIRECT",
        );
      },
      async upsertProjectRollout() {
        throw new Error("should not upsert");
      },
    };
    try {
      await operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: false,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      });
      expect.unreachable("expected throw");
    } catch (error) {
      expect(error).toBeInstanceOf(OperateFinOpsT7ShadowRolloutError);
      const err = error as OperateFinOpsT7ShadowRolloutError;
      expect(err.code).toBe("STORE_FAILED");
      expect(err.message).not.toMatch(/secret/);
      expect(err.message).not.toMatch(/postgres:\/\/sfia_ci/);
      expect(err.message).toMatch(/\[redacted\]/);
    }
  });

  it("apply OFF→SHADOW succeeds with revision 1", async () => {
    const port = memoryRollout();
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result).toMatchObject({
      applied: true,
      result: "applied",
      beforeEffectiveMode: "OFF",
      beforeRevision: null,
      afterMode: "SHADOW",
      afterRevision: 1,
    });
    expect(port.upserts).toBe(1);
  });
});
