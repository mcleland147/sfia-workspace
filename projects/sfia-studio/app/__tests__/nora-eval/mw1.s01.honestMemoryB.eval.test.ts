/** @vitest-environment node */
/**
 * MW1-S01 / CE-03 / NCC-BAR-07 — causal nora-eval binding
 * (closes BLK-MW1-S01-EVAL-RUNTIME-BINDING-01).
 *
 * Observation facts are produced by observeMw1S01FromRuntime() /
 * runD0Scenario async path — not hardcoded constants.
 */
import { describe, expect, it } from "vitest";
import {
  failClosedMissingObservable,
  getBarBinding,
  getScenario,
  observationFromMw1S01Facts,
  observeMw1S01FromRuntime,
  runD0Scenario,
  runFullD0Suite,
  scoreScenarioD0,
} from "@/lib/nora-eval";

describe("MW1-S01 nora-eval — NCC-BAR-07 / CE-03 causal binding", () => {
  it("NCC-BAR-07 CURRENT binding is honest Memory B continuity", () => {
    const binding = getBarBinding("NCC-BAR-07");
    expect(binding?.observableId).toBe("obs.memory.honest_continuity");
    expect(binding?.evidenceSemantics).toMatch(/Memory B/i);
    expect(binding?.observableId).not.toBe("obs.tool.boundary");
  });

  it("catalog includes mw1.s01.honest-memory-b-availability", () => {
    const s = getScenario("mw1.s01.honest-memory-b-availability");
    expect(s).toBeDefined();
    expect(s?.storyIds).toContain("MW1-S01");
    expect(s?.barIds).toContain("NCC-BAR-07");
    expect(s?.kind).toBe("memory_continuity");
  });

  it("D0 scenario PASS via runtime-derived observation (causal)", async () => {
    const r = await runD0Scenario("mw1.s01.honest-memory-b-availability");
    expect(r.passFail).toBe("PASS");
    expect(r.productObservation).toBeDefined();
    const states = r.productObservation?.memoryBAvailabilityStates as
      | string[]
      | undefined;
    expect(new Set(states ?? [])).toEqual(
      new Set([
        "available_with_history",
        "available_empty",
        "unavailable",
      ]),
    );
    expect(r.productObservation?.unavailableNeqEmpty).toBe(true);
    expect(r.productObservation?.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
    expect(
      r.scorers.some(
        (s) =>
          s.passFail === "PASS" &&
          (s.observableId === "obs.memory.honest_continuity" ||
            s.scorerId === "memory.ce03_observable" ||
            s.scorerId.startsWith("hard.memory_b")),
      ),
    ).toBe(true);
  });

  it("observeMw1S01FromRuntime derives states from execution (not constants)", async () => {
    const obs = await observeMw1S01FromRuntime();
    expect(obs.memoryBAvailabilityStates).toBeDefined();
    expect(new Set(obs.memoryBAvailabilityStates)).toEqual(
      new Set([
        "available_with_history",
        "available_empty",
        "unavailable",
      ]),
    );
    expect(obs.unavailableNeqEmpty).toBe(true);
    expect(obs.sessionNeqTruthC).toBe(true);
    expect(obs.noInventedTranscript).toBe(true);
    expect(obs.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
  });

  it("NEGATIVE — incomplete runtime facts fail-closed (no observable credit)", () => {
    const scenario = getScenario("mw1.s01.honest-memory-b-availability")!;
    const incomplete = observationFromMw1S01Facts({
      memoryBAvailabilityStates: ["available_empty"],
      unavailableNeqEmpty: false,
      sessionNeqTruthC: true,
      noInventedTranscript: true,
      truthCReachedCognition: false,
      agentsRuntimeUsed: true,
      sessionIdNullWhenUnavailable: false,
      piloteDisclosureHonest: false,
    });
    expect(incomplete.observedObservableIds).toEqual([]);
    const scored = scoreScenarioD0(scenario, incomplete);
    expect(scored.passFail).toBe("FAIL");
    expect(
      scored.scorers.some(
        (s) =>
          s.passFail === "FAIL" &&
          (s.scorerId === "memory.ce03_observable" ||
            s.missingEvidenceClass === "MISSING_OBSERVABLE" ||
            s.scorerId.startsWith("hard.memory_b")),
      ),
    ).toBe(true);
  });

  it("NEGATIVE — unavailable conflated with empty fails hard invariant", () => {
    const scenario = getScenario("mw1.s01.honest-memory-b-availability")!;
    const conflated = {
      productPath: "agents" as const,
      memoryBAvailabilityStates: [
        "available_with_history",
        "available_empty",
        // missing unavailable — or pretend unavailable==empty
      ],
      unavailableNeqEmpty: false,
      sessionNeqTruthC: true,
      noInventedTranscript: true,
      observedObservableIds: ["obs.memory.honest_continuity"],
    };
    const scored = scoreScenarioD0(scenario, conflated);
    expect(scored.passFail).toBe("FAIL");
    expect(
      scored.scorers.some(
        (s) => s.scorerId === "hard.memory_b_states" && s.passFail === "FAIL",
      ),
    ).toBe(true);
  });

  it("fail-closed when CE-03 observable missing", () => {
    const missing = failClosedMissingObservable({
      barId: "NCC-BAR-07",
      observedObservableIds: ["obs.tool.boundary"],
    });
    expect(missing.ok).toBe(false);
    expect(missing.missingObservableId).toBe("obs.memory.honest_continuity");
  });

  it("full D0 suite PASS after causal S01 wiring", async () => {
    const suite = await runFullD0Suite();
    expect(suite.barsOk).toBe(true);
    expect(suite.catalogOk).toBe(true);
    expect(suite.failed).toEqual([]);
    expect(suite.ok).toBe(true);
  });
});
