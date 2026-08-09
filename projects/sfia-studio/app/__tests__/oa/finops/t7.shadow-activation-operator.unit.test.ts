/**
 * @vitest-environment node
 *
 * FinOps T7 — SHADOW activation operator unit tests (guards + CAS apply path).
 */
import { describe, expect, it } from "vitest";
import type { FinOpsRolloutConfig } from "@/lib/oa/finops/application/types.rollout";
import type {
  CompareAndSwapProjectRolloutInput,
  FinOpsRolloutCasPort,
} from "@/lib/oa/finops/ports/finopsRolloutPort";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "@/lib/oa/finops/server/operateFinOpsT7ShadowRollout";

const PILOT = "sfia-studio-ops1";

function memoryCasRollout(
  initial: FinOpsRolloutConfig | null = null,
): FinOpsRolloutCasPort & {
  upserts: number;
  reads: number;
  casCalls: CompareAndSwapProjectRolloutInput[];
  casResultOverride: FinOpsRolloutConfig | null | undefined;
} {
  let row = initial;
  const port = {
    upserts: 0,
    reads: 0,
    casCalls: [] as CompareAndSwapProjectRolloutInput[],
    /** When set (including null), CAS returns this instead of computing. */
    casResultOverride: undefined as FinOpsRolloutConfig | null | undefined,
    async readProjectRollout(projectId: string) {
      port.reads += 1;
      if (!projectId.trim()) return null;
      return row && row.projectId === projectId ? { ...row } : null;
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
    async compareAndSwapProjectRollout(input: CompareAndSwapProjectRolloutInput) {
      port.casCalls.push(input);
      if (port.casResultOverride !== undefined) {
        return port.casResultOverride;
      }
      const current =
        row && row.projectId === input.projectId.trim() ? row : null;
      if (input.expectedRevision === null) {
        if (input.expectedMode !== "OFF" || current !== null) return null;
        row = {
          projectId: input.projectId.trim(),
          mode: input.mode,
          revision: 1,
          updatedAt: input.updatedAt,
        };
        return row;
      }
      if (
        !current ||
        current.mode !== input.expectedMode ||
        current.revision !== input.expectedRevision
      ) {
        return null;
      }
      row = {
        projectId: current.projectId,
        mode: input.mode,
        revision: current.revision + 1,
        updatedAt: input.updatedAt,
      };
      return row;
    },
  };
  return port;
}

describe("T7 SHADOW activation operator — unit", () => {
  it("U01 wrong project → reject", async () => {
    const port = memoryCasRollout();
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
    expect(port.casCalls).toHaveLength(0);
    expect(port.upserts).toBe(0);
  });

  it("U02 MONITOR → reject", async () => {
    const port = memoryCasRollout();
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
    expect(port.casCalls).toHaveLength(0);
  });

  it("U03 E1 → reject", async () => {
    const port = memoryCasRollout();
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
    expect(port.casCalls).toHaveLength(0);
  });

  it("U04 missing expected-mode → reject", async () => {
    const port = memoryCasRollout();
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
    expect(port.casCalls).toHaveLength(0);
  });

  it("U-CAS01 dry-run never calls CAS / zero mutation", async () => {
    const port = memoryCasRollout();
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
    expect(port.casCalls).toHaveLength(0);
    expect(port.upserts).toBe(0);
  });

  it("U-CAS02 apply absent OFF → CAS OFF/null/SHADOW", async () => {
    const port = memoryCasRollout();
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
      beforeRevision: null,
      afterMode: "SHADOW",
      afterRevision: 1,
    });
    expect(port.casCalls).toEqual([
      {
        projectId: PILOT,
        expectedMode: "OFF",
        expectedRevision: null,
        mode: "SHADOW",
        updatedAt: "2026-08-09T08:00:00.000Z",
      },
    ]);
    expect(port.upserts).toBe(0);
  });

  it("U-CAS03 existing OFF rev N → CAS receives revision N", async () => {
    const port = memoryCasRollout({
      projectId: PILOT,
      mode: "OFF",
      revision: 4,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result.afterRevision).toBe(5);
    expect(port.casCalls[0]).toMatchObject({
      expectedMode: "OFF",
      expectedRevision: 4,
      mode: "SHADOW",
    });
  });

  it("U-CAS04/05 CAS non-matched → EXPECTED_MODE_MISMATCH / not applied", async () => {
    const port = memoryCasRollout();
    port.casResultOverride = null;
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "EXPECTED_MODE_MISMATCH" });
    expect(port.casCalls).toHaveLength(1);
  });

  it("U-CAS06 CAS success → applied=true", async () => {
    const port = memoryCasRollout();
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "SHADOW",
      expectedMode: "OFF",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result.applied).toBe(true);
    expect(result.result).toBe("applied");
  });

  it("U-CAS07 CAS unexpected revision → POST_APPLY_MISMATCH", async () => {
    const port = memoryCasRollout();
    port.casResultOverride = {
      projectId: PILOT,
      mode: "SHADOW",
      revision: 99,
      updatedAt: "2026-08-09T08:00:00.000Z",
    };
    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "SHADOW",
        expectedMode: "OFF",
        targetLabel: "ephemeral-local",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "POST_APPLY_MISMATCH" });
  });

  it("U-CAS08 SHADOW→OFF passes exact expected state/revision", async () => {
    const port = memoryCasRollout({
      projectId: PILOT,
      mode: "SHADOW",
      revision: 1,
      updatedAt: "2026-08-09T07:00:00.000Z",
    });
    const result = await operateFinOpsT7ShadowRollout(port, {
      allowedProjectId: PILOT,
      projectId: PILOT,
      requestedMode: "OFF",
      expectedMode: "SHADOW",
      targetLabel: "ephemeral-local",
      apply: true,
      nowIso: () => "2026-08-09T08:00:00.000Z",
    });
    expect(result).toMatchObject({
      afterMode: "OFF",
      afterRevision: 2,
      applied: true,
    });
    expect(port.casCalls[0]).toMatchObject({
      expectedMode: "SHADOW",
      expectedRevision: 1,
      mode: "OFF",
    });
  });

  it("U-CAS09 early expected-mode mismatch never calls CAS", async () => {
    const port = memoryCasRollout({
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
    expect(port.casCalls).toHaveLength(0);
  });

  it("U-CAS10 no-op / missing target guards unchanged", async () => {
    const port = memoryCasRollout({
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
    expect(port.casCalls).toHaveLength(0);

    await expect(
      operateFinOpsT7ShadowRollout(port, {
        allowedProjectId: PILOT,
        projectId: PILOT,
        requestedMode: "OFF",
        expectedMode: "SHADOW",
        targetLabel: "   ",
        apply: true,
        nowIso: () => "2026-08-09T08:00:00.000Z",
      }),
    ).rejects.toMatchObject({ code: "INVALID_TARGET" });
  });

  it("U08 DB error → sanitized failure", async () => {
    const port: FinOpsRolloutCasPort = {
      async readProjectRollout() {
        throw new Error(
          "connect ECONNREFUSED postgres://sfia_ci:secret@127.0.0.1:5432/db DATABASE_URL_DIRECT",
        );
      },
      async upsertProjectRollout() {
        throw new Error("should not upsert");
      },
      async compareAndSwapProjectRollout() {
        throw new Error("should not cas");
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
});
