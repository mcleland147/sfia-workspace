/**
 * P6-HQA-02 REC-01 Option B — open Work Recommendations context coverage.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
  type StudioOpenWorkRecommendationProjection,
} from "@/features/project-assistant/f2/studioCognitiveContext";

function baseContext(
  wr: StudioCognitiveContext["workRecommendationsContext"],
): StudioCognitiveContext {
  return {
    projectTruth: {
      projectId: "proj:wr-ctx",
      name: "WR Ctx",
      objective: "obj",
      context: "ctx",
      constraints: [],
      criticality: "STANDARD",
      shortReference: null,
      lpsId: "lps:1",
      lpsVersion: 1,
      activeCycleInstanceId: "cycinst:wr",
      doctrineId: "pkg:x",
      doctrineVersion: "1",
      doctrineStatus: "resolved",
    },
    method: {
      orientation: {
        state: "UNRESOLVED" as const,
        candidateCycleTypeId: null,
      },
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    } as StudioCognitiveContext["method"],
    activeCycle: {
      cycleInstanceId: "cycinst:wr",
      cycleTypeId: "cyc:framing",
      cycleLabel: "Cadrage",
      profile: "Light",
      status: "active",
      workEligible: true,
      trajectoryId: null,
      trajectoryVersion: null,
      trajectoryStepId: null,
      ckcResolutionRef: null,
    },
    activeCycleWorkItems: { state: "NONE", items: [] },
    workRecommendationsContext: wr,
    trajectoryDecisionSupport: {
      state: "NONE",
      optionRefs: [],
      optionLabels: [],
      currentNoraRecommendedOptionRef: null,
      currentRecommendationSource: null,
    },
    decisions: { state: "NONE", items: [] },
    evidence: { state: "NONE", items: [] },
    review: { state: "NONE", items: [] },
    trajectory: { state: "ABSENT", current: null },
    lifecycleRecommendation: {
      state: "NONE",
      current: null,
      satisfiesPreCycleNextCycleTransition: false,
    },
    reservationCompactSection: null,
    reservationFocusSection: null,
    limits: {
      oaAvailable: true,
      truthOutranksConversation: true,
      composerDoesNotScoreMaturity: true,
      composerDoesNotSelectTrajectory: true,
    },
  };
}

describe("P6-HQA-02 REC-01 Option B workRecommendationsContext coverage", () => {
  it("COMPLETE renders ids and does not invent coverage", () => {
    const item: StudioOpenWorkRecommendationProjection = {
      epistemicItemId: "epi:acw:open-1",
      statement: "Prioriser le suivi avant la planification.",
      status: "active",
      cycleInstanceId: "cycinst:wr",
      dispositionDecisionId: null,
      family: "Work",
      workRecommendationRelation: null,
    };
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "COMPLETE", items: [item] }),
    ).join("\n");
    expect(text).toContain("coverage=COMPLETE");
    expect(text).toContain("id=epi:acw:open-1");
    expect(text).toContain("family=Work");
    expect(text).not.toContain("coverage=PARTIAL");
  });

  it("PARTIAL warns against NEW-by-absence", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({
        coverage: "PARTIAL",
        items: [
          {
            epistemicItemId: "epi:acw:open-2",
            statement: "Améliorer la visibilité.",
            status: "active",
            cycleInstanceId: "cycinst:wr",
            dispositionDecisionId: null,
            family: "Work",
            workRecommendationRelation: null,
          },
        ],
      }),
    ).join("\n");
    expect(text).toContain("coverage=PARTIAL");
    expect(text).toMatch(/ne pas conclure NEW/i);
  });

  it("UNAVAILABLE forbids invented ids", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "UNAVAILABLE", items: [] }),
    ).join("\n");
    expect(text).toContain("coverage=UNAVAILABLE");
    expect(text).toMatch(/ne pas inventer d'ids/i);
  });
});
