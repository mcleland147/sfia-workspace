/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — undisposed Recommendation derivation
 * and its finalization blocker.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessFinalizationObligations,
  deriveUndisposedRecommendations,
} from "@/lib/oa/cycle";
import type { CycleInstance } from "@/lib/oa/cycle/domain/types";

const OPTION_SET = "optset:w2-abc";

function recommendation(overrides?: Partial<{
  epistemicItemId: string;
  status: string;
  source: string;
  relatedObjects: readonly string[];
}>) {
  return {
    epistemicItemId: "epi:rec-1",
    type: "Recommendation",
    status: "active",
    source: OPTION_SET,
    statement: "RECOMMANDATION — poursuivre le sujet.",
    relatedObjects: ["prj:x", OPTION_SET, "cycinst:1"],
    ...overrides,
  };
}

const CYCLE_ID = "cycinst:1";

function decisionRef(optionSetRef = OPTION_SET) {
  return {
    epistemicItemId: "epi:decref-1",
    type: "DecisionRef",
    status: "active",
    source: "dec:w2-prop:1",
    statement: "Décision humaine enregistrée.",
    relatedObjects: ["prj:x", "dec:w2-prop:1", optionSetRef, "prop:f2:1"],
  };
}

describe("deriveUndisposedRecommendations", () => {
  it("reports an active OptionSet Recommendation with no closing DecisionRef", () => {
    const out = deriveUndisposedRecommendations([recommendation()], CYCLE_ID);
    expect(out).toHaveLength(1);
    expect(out[0]!.optionSetRef).toBe(OPTION_SET);
    expect(out[0]!.cycleInstanceId).toBe(CYCLE_ID);
  });

  it("stops reporting once a DecisionRef closes the same OptionSet", () => {
    expect(
      deriveUndisposedRecommendations(
        [recommendation(), decisionRef()],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("ignores resolved / rejected / superseded Recommendations", () => {
    for (const status of ["resolved", "rejected", "superseded"]) {
      expect(
        deriveUndisposedRecommendations(
          [recommendation({ status })],
          CYCLE_ID,
        ),
      ).toHaveLength(0);
    }
  });

  it("never treats lifecycle Recommendations as undisposed work blockers", () => {
    expect(
      deriveUndisposedRecommendations(
        [
          recommendation({ source: "lifecycle-recommendation:nora" }),
          {
            epistemicItemId: "epi:lr-next",
            type: "Recommendation",
            status: "active",
            source: "lifecycle-recommendation:nora",
            statement: "NEXT_CYCLE advisory",
            lifecycleRecommendation: {
              intent: "NEXT_CYCLE",
              basisFingerprint: "fp",
            },
            relatedObjects: ["prj:x", "cycinst:1"],
          },
        ],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("scopes work Recommendations to the cycle under finalization", () => {
    expect(
      deriveUndisposedRecommendations(
        [
          recommendation({
            relatedObjects: ["prj:x", OPTION_SET, "cycinst:other"],
          }),
        ],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("does not let a DecisionRef on another OptionSet dispose this one", () => {
    expect(
      deriveUndisposedRecommendations(
        [recommendation(), decisionRef("optset:w2-other")],
        CYCLE_ID,
      ),
    ).toHaveLength(1);
  });
});

const CYCLE: CycleInstance = {
  schemaVersion: "0.1.0-oa",
  cycleInstanceId: "cycinst:1",
  cycleTypeId: "cyc:functional-design",
  projectId: "prj:x",
  profile: "Standard",
  status: "active",
  createdAt: "2026-09-27T10:00:00.000Z",
  createdBy: {
    actorId: "actor:morris",
    role: "project_owner",
    displayName: "Morris",
    authorityLevel: "N3",
  },
} as unknown as CycleInstance;

function assess(undisposedRecommendationRefs: readonly string[]) {
  return assessFinalizationObligations({
    cycle: CYCLE,
    projectId: "prj:x",
    assessedAt: "2026-09-27T12:00:00.000Z",
    decisions: [],
    evidence: [],
    reviewBundles: [],
    trajectory: null,
    undisposedRecommendationRefs,
  });
}

describe("assessFinalizationObligations — undisposed_recommendations", () => {
  it("blocks finalization while a Recommendation awaits a Pilot disposition", () => {
    const assessment = assess(["epi:rec-1"]);
    expect(assessment.blockers).toContain("undisposed_recommendations");
    expect(assessment.canComplete).toBe(false);
    const blockersFamily = assessment.obligations.find(
      (o) => o.family === "blockers",
    );
    expect(blockersFamily?.status).toBe("BLOCKING");
    expect(blockersFamily?.detail).toContain("undisposed_recommendations");
  });

  it("does not block when nothing is left to dispose", () => {
    expect(assess([]).blockers).not.toContain("undisposed_recommendations");
  });
});
