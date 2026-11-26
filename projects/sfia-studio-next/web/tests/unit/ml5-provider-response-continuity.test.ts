import { describe, expect, it } from "vitest";
import {
  applyContinuityToResponsesBody,
  planProviderContinuity,
  resolveProviderContinuityMode,
} from "@/domains/conversation/provider-response-continuity";

describe("provider-response-continuity", () => {
  const studio = {
    workId: "work_1",
    acquisFingerprint: "acq_a",
    sourceVersions: ["blob:1", "doc:2"],
    checkpointId: "cp_1",
    budgets: {
      tokensConsumed: 100,
      tokensBudget: 2_000_000,
      restitutionsRemaining: 120,
    },
    rightsOk: true,
  };

  const chain = {
    previousResponseId: "resp_prev",
    boundWorkId: "work_1",
    boundLane: "DEV",
    boundAcquisFingerprint: "acq_a",
    boundSourceVersions: ["blob:1", "doc:2"],
    createdAtMs: Date.now(),
  };

  it("defaults off → studio rebuild", () => {
    expect(resolveProviderContinuityMode({} as NodeJS.ProcessEnv)).toBe("off");
    const plan = planProviderContinuity({
      mode: "off",
      studio,
      chain,
      lane: "DEV",
    });
    expect(plan.mode).toBe("studio_rebuild");
    expect(plan.preserveBudgets).toBe(true);
  });

  it("native compatible chain attaches previous_response_id without freeing prior tokens", () => {
    const plan = planProviderContinuity({
      mode: "native",
      studio,
      chain,
      lane: "DEV",
    });
    expect(plan).toMatchObject({
      mode: "native_previous_response",
      previousResponseId: "resp_prev",
      priorTokensStillBilled: true,
      preserveBudgets: true,
    });
    const body = applyContinuityToResponsesBody(
      { model: "gpt-x", input: [] },
      plan,
    );
    expect(body.previous_response_id).toBe("resp_prev");
  });

  it("falls back when rights or sources change — no provider chain", () => {
    const rights = planProviderContinuity({
      mode: "native",
      studio: { ...studio, rightsOk: false },
      chain,
      lane: "DEV",
    });
    expect(rights.reason).toBe("RIGHTS_CHANGED");

    const sources = planProviderContinuity({
      mode: "native",
      studio: { ...studio, sourceVersions: ["blob:9"] },
      chain,
      lane: "DEV",
    });
    expect(sources.reason).toBe("SOURCES_CHANGED");

    const stripped = applyContinuityToResponsesBody(
      { previous_response_id: "stale", model: "gpt-x" },
      sources,
    );
    expect(stripped.previous_response_id).toBeUndefined();
  });

  it("does not reset budgets semantics across plans", () => {
    for (const mode of ["off", "native"] as const) {
      const plan = planProviderContinuity({
        mode,
        studio,
        chain: mode === "native" ? chain : null,
        lane: "DEV",
      });
      expect(plan.preserveBudgets).toBe(true);
    }
  });
});
