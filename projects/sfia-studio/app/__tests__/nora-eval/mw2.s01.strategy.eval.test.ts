/** @vitest-environment node */
/**
 * MW2-S01 deterministic nora-eval binding.
 */
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observeMw2S01FromRuntime,
  runD0Scenario,
} from "@/lib/nora-eval";

describe("MW2-S01 nora-eval — strategy / effort decoupling", () => {
  it("catalog includes mw2.s01.strategy-effort-decoupling", () => {
    const s = getScenario("mw2.s01.strategy-effort-decoupling");
    expect(s).toBeDefined();
    expect(s?.storyIds).toContain("MW2-S01");
  });

  it("D0 scenario PASS via runtime-derived observation", async () => {
    const r = await runD0Scenario("mw2.s01.strategy-effort-decoupling");
    expect(r.passFail).toBe("PASS");
    expect(r.productObservation?.strategyDecoupledFromEffort).toBe(true);
    expect(r.productObservation?.routineElevatedEffort).toBe(true);
    expect(r.productObservation?.highAssuranceNotMax).toBe(true);
  });

  it("observeMw2S01FromRuntime derives facts from execution", async () => {
    const obs = await observeMw2S01FromRuntime();
    expect(obs.strategyDecoupledFromEffort).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.cwp.strategy_effort");
  });
});
