/** @vitest-environment node */
/**
 * MW1-S02 / CORR-01 — causal nora-eval binding + fail-closed negatives.
 */
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observationFromMw1S02Facts,
  observeMw1S02FromRuntime,
  runD0Scenario,
  runFullD0Suite,
  scoreScenarioD0,
} from "@/lib/nora-eval";
import type { Mw1S02RuntimeFacts } from "@/lib/nora-eval/mw1S02Observe";

const PASS_FACTS: Mw1S02RuntimeFacts = {
  compactionTriggered: true,
  replayFootprintReduced: true,
  compactionProvenancePresent: true,
  lossSignaledCorrectly: true,
  noFalseExhaustiveClaim: true,
  governingContextSafe: true,
  truthCRevisionRecorded: true,
  staleDetected: true,
  staleReplayPrevented: true,
  sessionNeqTruthC: true,
  agentsRuntimeUsed: true,
  partitionComplete: true,
  noOrphanedRemovedItems: true,
  provenanceCoverageComplete: true,
  recompactionLineagePreserved: true,
  lossHonestForOmission: true,
  lossMonotonic: true,
  staleDisclosureMatchesReplay: true,
  staleSemanticLineageNotResurrected: true,
  staleGoverningLineageNotResurrected: true,
  crossRevisionRecompactionUsesCurrentTruthC: true,
  currentRawProvenanceCoverageIndependent: true,
  stalePriorInvalidationSignaled: true,
};

function failWith(
  overrides: Partial<Mw1S02RuntimeFacts>,
): Mw1S02RuntimeFacts {
  return { ...PASS_FACTS, ...overrides };
}

describe("MW1-S02 nora-eval — compaction provenance / loss", () => {
  it("catalog includes mw1.s02.compaction-provenance-loss", () => {
    const s = getScenario("mw1.s02.compaction-provenance-loss");
    expect(s?.storyIds).toContain("MW1-S02");
    expect(s?.barIds).toContain("NCC-BAR-07");
    expect(s?.hardInvariants).toContain("compaction_partition_complete");
    expect(s?.hardInvariants).toContain("compaction_recompaction_lineage");
    expect(s?.hardInvariants).toContain("compaction_stale_disclosure_match");
  });

  it("D0 S02 scenario PASS via runtime-derived observation", async () => {
    const r = await runD0Scenario("mw1.s02.compaction-provenance-loss");
    expect(r.passFail).toBe("PASS");
    expect(r.productObservation?.compactionTriggered).toBe(true);
    expect(r.productObservation?.partitionComplete).toBe(true);
    expect(r.productObservation?.recompactionLineagePreserved).toBe(true);
    expect(r.productObservation?.staleDisclosureMatchesReplay).toBe(true);
    expect(r.productObservation?.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
  });

  it("observeMw1S02FromRuntime derives CORR-01 facts from execution", async () => {
    const obs = await observeMw1S02FromRuntime();
    expect(obs.compactionTriggered).toBe(true);
    expect(obs.compactionProvenancePresent).toBe(true);
    expect(obs.replayFootprintReduced).toBe(true);
    expect(obs.staleDetected).toBe(true);
    expect(obs.partitionComplete).toBe(true);
    expect(obs.noOrphanedRemovedItems).toBe(true);
    expect(obs.provenanceCoverageComplete).toBe(true);
    expect(obs.recompactionLineagePreserved).toBe(true);
    expect(obs.lossMonotonic).toBe(true);
    expect(obs.lossHonestForOmission).toBe(true);
    expect(obs.staleDisclosureMatchesReplay).toBe(true);
    expect(obs.staleSemanticLineageNotResurrected).toBe(true);
    expect(obs.staleGoverningLineageNotResurrected).toBe(true);
    expect(obs.crossRevisionRecompactionUsesCurrentTruthC).toBe(true);
    expect(obs.currentRawProvenanceCoverageIndependent).toBe(true);
    expect(obs.stalePriorInvalidationSignaled).toBe(true);
    expect(obs.observedObservableIds).toEqual([
      "obs.memory.honest_continuity",
    ]);
  });

  it("NEG-S02-01 — missing provenance FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ compactionProvenancePresent: false }),
    );
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-02 — dropped content but loss=false FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ lossSignaledCorrectly: false, lossHonestForOmission: false }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-03 — stale replay not prevented FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ staleReplayPrevented: false }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-04 — governing unsafe FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ governingContextSafe: false }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-05 — false exhaustive claim FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ noFalseExhaustiveClaim: false }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-06 — orphaned removed source FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({
        noOrphanedRemovedItems: false,
        provenanceCoverageComplete: false,
      }),
    );
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-07 — prior compaction lineage dropped FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ recompactionLineagePreserved: false }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-08 — truncated content but loss=false FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({
        lossSignaledCorrectly: false,
        lossHonestForOmission: false,
      }),
    );
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-09 — stale recent B replayed while disclosure claims Truth C only FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ staleDisclosureMatchesReplay: false }),
    );
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-10 — stale semantic summary inherited across Truth C revision FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ staleSemanticLineageNotResurrected: false }),
    );
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("NEG-S02-11 — stale governing context credited as current FAIL", () => {
    const scenario = getScenario("mw1.s02.compaction-provenance-loss")!;
    const obs = observationFromMw1S02Facts(
      failWith({ staleGoverningLineageNotResurrected: false }),
    );
    expect(obs.observedObservableIds).toEqual([]);
    expect(scoreScenarioD0(scenario, obs).passFail).toBe("FAIL");
  });

  it("full D0 suite PASS including S01 + S02", async () => {
    const suite = await runFullD0Suite();
    expect(suite.ok).toBe(true);
    expect(suite.failed).toEqual([]);
  });
});
