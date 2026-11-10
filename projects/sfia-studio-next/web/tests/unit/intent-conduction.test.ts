import { describe, expect, it } from "vitest";
import {
  CAPABILITY_CONTRACTS,
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
  emptyMission,
  mergeMissionSteps,
  qualifyStudioIntent,
} from "@/domains/conversation/intent-conduction";

describe("intent-conduction (domain-agnostic D3)", () => {
  it("A: simple dialogue — no project/doc/publish", () => {
    const q = qualifyStudioIntent("Quelle est la différence entre blob et commit ?");
    expect(q.simpleDialogue).toBe(true);
    expect(q.wantsProjectCreate).toBe(false);
    expect(q.documentAct.kind).toBe("NONE");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("B: project create intent without inventing D2 execution", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Continuity Global pour la suite documentaire",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toMatch(/Continuity Global/i);
  });

  it("P1-E: GitHub mention alone is not publish", () => {
    const q = qualifyStudioIntent("Explique GitHub Actions dans Studio");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("Scenario K: capability contracts declared without parallel engine", () => {
    expect(CAPABILITY_CONTRACTS.some((c) => c.capabilityId === "d2.create_project")).toBe(true);
    expect(CAPABILITY_CONTRACTS.some((c) => c.capabilityId === "future.example_capability")).toBe(
      true,
    );
    for (const c of CAPABILITY_CONTRACTS) {
      expect(c.invokeOwner.length).toBeGreaterThan(3);
      expect(c.rightsBoundary.length).toBeGreaterThan(3);
      expect(c.continuationHook).toBeTruthy();
    }
  });

  it("advances D2 waiting step after Pilot creates project", () => {
    let m = emptyMission("k1", "projet");
    m = mergeMissionSteps(m, [buildD2AwaitingStep("P")], "AWAITING_PILOT_ACT");
    const next = advanceMissionAfterProjectCreated(m, "prj_1");
    expect(next.steps[0]?.status).toBe("DONE");
    expect(next.steps[0]?.reason).toMatch(/prj_1/);
  });
});
