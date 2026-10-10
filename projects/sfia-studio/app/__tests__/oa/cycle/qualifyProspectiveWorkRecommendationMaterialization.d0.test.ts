/**
 * P6-HQA-02 / REC-01 — Bounded Cognitive Trust Completion.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import Ajv from "ajv";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  isExploitableTrackingRationale,
  planDurableWorkRecommendationRelation,
  qualifyProspectiveWorkRecommendationMaterialization,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { activeCycleWorkEpistemicItemId } from "@/features/project-assistant/materializeActiveCycleWork";
import {
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  isNoraActiveCycleWorkItem,
  type NoraActiveCycleWorkItem,
  type NoraWorkRecommendationRelationKind,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const CYCLE = "cycinst:qa-rec01-b";
const RATIONALE =
  "Orientation de travail distincte nécessitant un suivi propre hors tour.";

function rec(
  statement: string,
  opts: {
    recommendedOptionRef?: string | null;
    trackingRationale?: string;
    relationKind?: NoraWorkRecommendationRelationKind;
    relatedRecommendationRef?: string | null;
  } = {},
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: opts.recommendedOptionRef ?? null,
    trackingRationale: opts.trackingRationale ?? RATIONALE,
    relationKind: opts.relationKind ?? "NEW",
    relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
  };
}

function observation(statement: string): NoraActiveCycleWorkItem {
  return {
    type: "Observation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
  };
}

describe("P6-HQA-02 REC-01 Option B structured schema", () => {
  const ajv = new Ajv({ allErrors: true });
  const validateItem = ajv.compile(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);

  it("Recommendation with Option B fields is schema-valid", () => {
    const item = rec(
      "Prioriser l'analyse du suivi d'avancement avant la planification.",
    );
    expect(validateItem(item)).toBe(true);
    expect(isNoraActiveCycleWorkItem(item)).toBe(true);
  });

  it("Recommendation missing Option B fields is rejected", () => {
    const item = {
      type: "Recommendation",
      statement: "Prioriser le suivi.",
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
    };
    expect(validateItem(item)).toBe(false);
    expect(isNoraActiveCycleWorkItem(item)).toBe(false);
  });
});

describe("P6-HQA-02 bounded cognitive trust policy", () => {
  it("NEW + exploitable rationale without Product id citation may mint under COMPLETE", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je recommande de prioriser l'analyse du suivi d'avancement avant celle de la planification.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
    // Product id citation is not required (pseudo-proof removed).
    expect(RATIONALE.includes(CYCLE)).toBe(false);
  });

  it("NEW + empty / too-short rationale does not mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Je te propose d'examiner un exemple concret de retard.",
      trackingRationale: "Court.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_tracking_rationale",
    });
  });

  it("exact conversationGuidance match stays non-durable", () => {
    const statement =
      "Je te propose d'examiner un exemple concret de retard.";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement,
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      conversationGuidanceStatement: statement,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "conversational_channel_exact",
    });
  });

  it("trackingRationale echo of statement is not exploitable", () => {
    expect(
      isExploitableTrackingRationale(
        "Prioriser le suivi avant la planification.",
        "Prioriser le suivi avant la planification.",
      ),
    ).toBe(false);
  });

  it("documents residual risk: Nora mis-labeling conversational invite as NEW can mint when Product gates pass", () => {
    // Deterministic fixture only — not empirical Nora quality proof.
    // Residual cognitive risk: incorrect NEW classification with exploitable
    // rationale under COMPLETE still materializes (bounded trust).
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Souhaites-tu que je te propose un exemple concret de retard ?",
      trackingRationale:
        "Suivi durable demandé pour transformer cette invitation en orientation de travail.",
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });
});

describe("P6-HQA-02 coverage continuity", () => {
  it("PARTIAL blocks NEW even when statement differs from all opens", () => {
    const opens = Array.from({ length: 15 }, (_, i) => ({
      epistemicItemId: `epi:acw:open-${i}`,
      statement: `Recommandation ouverte numéro ${i} sur le suivi.`,
    }));
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement:
        "Documenter les responsabilités de livraison pour le prochain jalon.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: opens.slice(0, 12),
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("UNAVAILABLE blocks mint", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Structurer le cadrage autour des responsabilités.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "UNAVAILABLE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "open_context_unavailable",
    });
  });

  it("PARTIAL does not block non-Recommendation ACW items", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Documenter les responsabilités de livraison."),
        observation("Observation indépendante du cycle."),
      ],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "PARTIAL",
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
    expect(plan.suppressed[0]!.reason).toBe("insufficient_context_coverage");
  });

  it("ALREADY_COVERED still resolves against Product facts under PARTIAL", () => {
    const openId = "epi:acw:open-followup-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Commencer par analyser le suivi d'avancement.",
      trackingRationale: "Déjà couvert par l'orientation ouverte sur le suivi.",
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        {
          epistemicItemId: openId,
          statement: "Prioriser le suivi avant la planification.",
        },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "already_covered",
    });
  });

  it("fail-closed when open Recommendations context unavailable", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [rec("Documenter les responsabilités de livraison.")],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openRecommendationsContextAvailable: false,
    });
    expect(plan.items).toHaveLength(0);
    expect(plan.suppressed[0]!.reason).toBe("open_context_unavailable");
  });
});

describe("P6-HQA-02 relations (mint-time; typed continuity not durable)", () => {
  const openId = "epi:acw:open-priority-1";
  const openFacts = [
    {
      epistemicItemId: openId,
      statement: "Prioriser le suivi avant la planification.",
    },
  ];

  it("NEW without relatedRecommendationRef may mint under COMPLETE", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("DISTINCT_RELATED with valid ref + COMPLETE may mint coexisting WR", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de suivi en parallèle.",
      trackingRationale:
        "Orientation liée mais distincte — suivi propre requis en parallèle.",
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: true,
      reason: "justified_durable_work",
    });
  });

  it("CONTRADICTORY is never equivalence; may mint coexisting without disposing prior", () => {
    const existing = Object.freeze([
      Object.freeze({
        type: "Recommendation",
        status: "active",
        epistemicItemId: openId,
        source: "active-cycle-work:nora",
        statement: "Prioriser le suivi avant la planification.",
        createdAt: "2026-10-01T00:00:00.000Z",
        relatedObjects: Object.freeze([CYCLE]),
      }),
    ]);
    const before = JSON.stringify(existing);
    const filtered = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Prioriser la planification avant le suivi.", {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: openId,
          trackingRationale:
            "Contradiction candidate sur l'ordre de priorité suivi/planification.",
        }),
      ],
      existingItems: existing,
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(JSON.stringify(existing)).toBe(before);
    expect(existing[0]!.status).toBe("active");
    expect(existing[0]!.epistemicItemId).toBe(openId);
    expect(filtered.items).toHaveLength(1);
    expect(filtered.items[0]!.type).toBe("Recommendation");
    // Typed relationKind is mint-time only — not claimed reconstructible after materialize.
  });

  it("CONTRADICTORY under PARTIAL abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale:
        "Contradiction candidate sur l'ordre de priorité suivi/planification.",
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("stale related ref abstains without text similarity fallback", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale: RATIONALE,
      relationKind: "DISTINCT_RELATED",
      relatedRecommendationRef: "epi:acw:does-not-exist",
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "invalid_related_ref",
    });
  });

  it("UNCERTAIN abstains", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Peut-être prioriser le suivi.",
      trackingRationale: RATIONALE,
      relationKind: "UNCERTAIN",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: [],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "uncertain_relation",
    });
  });

  it("exact open duplicate blocks even under COMPLETE + NEW", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser le suivi avant la planification.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "COMPLETE",
      openWorkRecommendationFacts: openFacts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "exact_open_duplicate",
    });
  });
});

describe("P6-HQA-02 identity / sourceIndexes", () => {
  const projectId = "proj:qa-rec01-b";
  const turnCorrelationId = "turn:logical:rec01-option-b";

  it("suppressing Recommendation preserves Observation source index", () => {
    const items: NoraActiveCycleWorkItem[] = [
      rec(
        "Structurer le cadrage autour des responsabilités de suivi et des retards.",
      ),
      observation("Les retards reviennent souvent sur ce cycle."),
    ];

    const first = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(first.sourceIndexes).toEqual([0, 1]);

    const idObsFirst = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: first.sourceIndexes[1]!,
      type: "Observation",
      statement: first.items[1]!.statement,
    });
    const idRec = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: first.sourceIndexes[0]!,
      type: "Recommendation",
      statement: first.items[0]!.statement,
    });

    const replay = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items,
      existingItems: [
        {
          type: "Recommendation",
          status: "active",
          epistemicItemId: idRec,
          source: "active-cycle-work:nora",
          statement: items[0]!.statement,
          createdAt: "2026-10-10T00:00:00.000Z",
          relatedObjects: [CYCLE],
        },
      ],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    expect(replay.sourceIndexes).toEqual([1]);
    const idObsReplay = activeCycleWorkEpistemicItemId({
      projectId,
      cycleInstanceId: CYCLE,
      turnCorrelationId,
      index: replay.sourceIndexes[0]!,
      type: "Observation",
      statement: replay.items[0]!.statement,
    });
    expect(idObsReplay).toBe(idObsFirst);
  });
});


describe("P6-HQA-02 Option A planDurableWorkRecommendationRelation", () => {
  it("CONTRADICTORY with valid target plans durable envelope", () => {
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "CONTRADICTORY",
        relatedRecommendationRef: "epi:acw:open-1",
      }),
    ).toEqual({
      persist: true,
      relation: {
        kind: "CONTRADICTORY",
        targetEpistemicItemId: "epi:acw:open-1",
        judgmentOrigin: "nora_structured_candidate",
        authority: "none",
      },
    });
  });

  it("DISTINCT_RELATED does not systematically plan durable envelope", () => {
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "DISTINCT_RELATED",
        relatedRecommendationRef: "epi:acw:open-1",
      }),
    ).toEqual({ persist: false, reason: "not_required" });
  });

  it("CONTRADICTORY without target refuses plan", () => {
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "CONTRADICTORY",
        relatedRecommendationRef: null,
      }),
    ).toEqual({ persist: false, reason: "contradictory_target_missing" });
  });
});
