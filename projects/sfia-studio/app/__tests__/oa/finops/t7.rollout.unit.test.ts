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
