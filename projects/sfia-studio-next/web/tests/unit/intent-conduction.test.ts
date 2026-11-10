import { describe, expect, it } from "vitest";
import {
  CAPABILITY_CONTRACTS,
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
  emptyMission,
  extractProposedProjectName,
  mergeMissionSteps,
  mobilizeCapability,
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

  it("GAP-05: project name stops before follow-on clause", () => {
    expect(
      extractProposedProjectName(
        "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.",
      ),
    ).toBe("Continuity Global B");
    expect(
      extractProposedProjectName(
        "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage.",
      ),
    ).toBe("Atlas");
  });

  it("B: project create intent without inventing D2 execution", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Continuity Global pour la suite documentaire",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toBe("Continuity Global");
  });

  it("Atlas compound: D2 + follow-on document in ONE intention", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toBe("Atlas");
    expect(q.wantsFollowOnDocument).toBe(true);
    expect(q.pendingDocumentBrief).toMatch(/document de cadrage/i);
  });

  it("P1-E: GitHub mention alone is not publish", () => {
    const q = qualifyStudioIntent("Explique GitHub Actions dans Studio");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("Scenario K: mobilizeCapability invokes owner adapter (not metadata-only)", async () => {
    const contract = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    expect(contract.invokeOwnerRef).toContain("testBoundaryDouble");
    let invoked = false;
    const out = await mobilizeCapability(
      contract,
      {
        capabilityId: "future.example_capability",
        invoke: async () => {
          invoked = true;
          return { status: "DONE", result: { status: "DONE", id: "x1" } };
        },
      },
      { pilotId: "pilot_test" },
    );
    expect(invoked).toBe(true);
    expect(out.result.id).toBe("x1");
  });

  it("advances D2 waiting step after Pilot creates project", () => {
    let m = emptyMission("k1", "projet");
    m = mergeMissionSteps(m, [buildD2AwaitingStep("P")], "AWAITING_PILOT_ACT");
    const next = advanceMissionAfterProjectCreated(m, "prj_1");
    expect(next.steps[0]?.status).toBe("DONE");
    expect(next.steps[0]?.reason).toMatch(/prj_1/);
  });
});
