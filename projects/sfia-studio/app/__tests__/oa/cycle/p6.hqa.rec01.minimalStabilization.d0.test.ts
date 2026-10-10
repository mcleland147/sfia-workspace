/**
 * P6-HQA-02 REC-01 — Minimal stabilization diagnostics.
 * Reproduce Coverage PARTIAL / Historical Replay / Currentness claims.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  planDurableWorkRecommendationRelation,
  qualifyProspectiveWorkRecommendationMaterialization,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import {
  deriveWorkRecommendationRelationApplicability,
  projectCycleWorkRecommendations,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import { STUDIO_COGNITIVE_CONTEXT_BUDGET } from "@/features/project-assistant/f2/studioCognitiveContext";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const CYCLE = "cycinst:qa-rec01-stab";
const RATIONALE =
  "Orientation de travail distincte nécessitant un suivi propre hors tour.";

function rec(
  statement: string,
  opts: Partial<
    Pick<
      NoraActiveCycleWorkItem,
      "relationKind" | "relatedRecommendationRef" | "trackingRationale"
    >
  > = {},
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
    trackingRationale: opts.trackingRationale ?? RATIONALE,
    relationKind: opts.relationKind ?? "NEW",
    relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
  };
}

function openFacts(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    epistemicItemId: `epi:acw:open-${i}`,
    statement: `Recommandation ouverte numéro ${i} sur le suivi.`,
  }));
}

describe("P6-HQA-02 REC-01 stabilization — Coverage PARTIAL", () => {
  it("budget maxOpenWorkRecommendations is 12", () => {
    expect(STUDIO_COGNITIVE_CONTEXT_BUDGET.maxOpenWorkRecommendations).toBe(12);
  });

  it("0/1/12 opens under COMPLETE may mint NEW", () => {
    for (const n of [0, 1, 12]) {
      const decision = qualifyProspectiveWorkRecommendationMaterialization({
        statement: "Documenter les responsabilités de livraison pour le jalon.",
        trackingRationale: RATIONALE,
        relationKind: "NEW",
        relatedRecommendationRef: null,
        cycleInstanceId: CYCLE,
        openWorkRecommendationsCoverage: "COMPLETE",
        openWorkRecommendationFacts: openFacts(n),
      });
      expect(decision, `n=${n}`).toEqual({
        materialize: true,
        reason: "justified_durable_work",
      });
    }
  });

  it("13+ opens with coverage=PARTIAL blocks NEW (Nora truncated view)", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de livraison pour le jalon.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      // Product facts may still be full — coverage is Nora projection authority.
      openWorkRecommendationFacts: openFacts(20),
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("PARTIAL still allows exact-duplicate suppress against full Product facts", () => {
    const facts = openFacts(20);
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: facts[15]!.statement,
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: facts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "exact_open_duplicate",
    });
  });

  it("PARTIAL still resolves ALREADY_COVERED against Product facts", () => {
    const openId = "epi:acw:open-15";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Autre formulation.",
      trackingRationale: RATIONALE,
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        ...openFacts(15),
        { epistemicItemId: openId, statement: "Prioriser le suivi." },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "already_covered",
    });
  });

  it("PARTIAL blocks CONTRADICTORY mint even with Product-resolved ref (current policy)", () => {
    const openId = "epi:acw:open-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale:
        "Contradiction candidate sur l'ordre de priorité suivi/planification.",
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        { epistemicItemId: openId, statement: "Prioriser le suivi avant la planification." },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("UNAVAILABLE / reader false fail-closed", () => {
    expect(
      qualifyProspectiveWorkRecommendationMaterialization({
        statement: "Documenter les responsabilités.",
        trackingRationale: RATIONALE,
        relationKind: "NEW",
        openRecommendationsContextAvailable: false,
        openWorkRecommendationFacts: openFacts(3),
      }).reason,
    ).toBe("open_context_unavailable");
  });

  it("filter under PARTIAL preserves non-Recommendation sourceIndexes", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Documenter les responsabilités de livraison."),
        {
          type: "Observation",
          statement: "Observation indépendante.",
          confidence: "medium",
          blocking: null,
          recommendedOptionRef: null,
        },
      ],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "PARTIAL",
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
  });
});

describe("P6-HQA-02 REC-01 stabilization — Currentness claims", () => {
  const targetId = "epi:acw:target-1";
  const sourceId = "epi:acw:source-1";
  const relation = {
    kind: "CONTRADICTORY" as const,
    targetEpistemicItemId: targetId,
    judgmentOrigin: "nora_structured_candidate" as const,
    authority: "none" as const,
  };

  function item(
    id: string,
    status: string,
    opts: { disposed?: boolean } = {},
  ) {
    return {
      type: "Recommendation",
      status,
      epistemicItemId: id,
      source: "active-cycle-work:nora",
      statement: `Statement ${id}`,
      createdAt: "2026-10-01T00:00:00.000Z",
      relatedObjects: [CYCLE],
      workRecommendationRelation: id === sourceId ? relation : null,
      // disposition simulated via DecisionRef when disposed
      ...(opts.disposed
        ? {}
        : {}),
    };
  }

  it("applicable only when source and target are open active WR", () => {
    const source = item(sourceId, "active");
    const all = [source, item(targetId, "active")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("applicable");
  });

  it("not_applicable when target superseded", () => {
    const source = item(sourceId, "active");
    const all = [source, item(targetId, "superseded")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("not_applicable");
  });

  it("unknown when context unavailable or target missing", () => {
    const source = item(sourceId, "active");
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: [source],
        cycleInstanceId: CYCLE,
        contextAvailable: false,
        sourceItem: source,
      }),
    ).toBe("unknown");
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: [source],
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("unknown");
  });

  it("not_applicable when source is superseded even if target remains open", () => {
    const source = item(sourceId, "superseded");
    const all = [source, item(targetId, "active")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("not_applicable");
  });

  it("projection cards expose relation without inventing CURRENT", () => {
    const cards = projectCycleWorkRecommendations({
      items: [
        {
          ...item(sourceId, "active"),
          workRecommendationRelation: relation,
        },
        item(targetId, "active"),
      ],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
    });
    const sourceCard = cards.find((c) => c.epistemicItemId === sourceId);
    expect(sourceCard?.workRecommendationRelation?.kind).toBe("CONTRADICTORY");
    expect(sourceCard?.workRecommendationRelation?.authority).toBe("none");
    expect(sourceCard?.workRecommendationRelation?.applicability).toBe(
      "applicable",
    );
  });
});

describe("P6-HQA-02 REC-01 stabilization — planDurable unchanged", () => {
  it("CONTRADICTORY plans envelope; DISTINCT_RELATED does not", () => {
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "CONTRADICTORY",
        relatedRecommendationRef: "epi:acw:t",
      }).persist,
    ).toBe(true);
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "DISTINCT_RELATED",
        relatedRecommendationRef: "epi:acw:t",
      }),
    ).toEqual({ persist: false, reason: "not_required" });
  });
});
