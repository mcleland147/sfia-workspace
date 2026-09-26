/**
 * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — deterministic Product regression.
 * Isolated Product/Session seams only — does NOT mutate real StudyFlow.
 */
import { describe, expect, it } from "vitest";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  selectCurrentNoraTrajectoryRecommendationItems,
  resolveCurrentNoraTrajectoryRecommendation,
} from "@/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  extractAcwRecommendedOptionRef,
  validateActiveCycleRecommendationAgainstDecisionSupport,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  isNoraActiveCycleWorkItem,
  normalizeActiveCycleRecommendedOptionRef,
  composePilotFacingAssistantText,
  type NoraActiveCycleWorkItem,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { assertRecommendedOptionInPresentedSet } from "@/features/project-assistant/w2/recommendationDecisionIntegrity";
import { computeOptionSetDigest } from "@/features/project-assistant/w2/presentedOptionSet";
import { pilotTrajectoryOptionLabel } from "@/features/project-assistant/presentationLabels";
import type { EpistemicItem } from "@/lib/oa/cycle";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";

const PROJECT_ID = "prj:semantic-continuity-test";
const CYCLE_ID = "cyc:semantic-continuity-test";

function recoveryContext(): PostEvidenceRecoveryContext {
  return {
    kind: "post_evidence_recovery",
    attemptId: "xat:test:fail",
    attemptStatus: "failed",
    stopReason: "REAL_WORKSPACE_INVALID:base_head_sha_missing",
    executionContractId: "xct:test",
    evidenceId: "ev:test",
    reviewBundleId: "rb:test",
    productOutcome: "FAIL",
    recommendationKind: "recover",
    requiresHumanDecision: true,
    headline: "Diagnostiquer ou replanifier après échec",
    rationale: "Échec technique durable",
    nextStep: "recovery_diagnose_or_replan",
    realProcessInvoked: true,
    businessEffectProven: false,
    w3cEpistemicItemId: "epi:w3c-rec:test",
  };
}

function optionInputs() {
  return {
    cycleTypeId: "cyc:framing",
    recommendedProfile: "Light",
    criticalSignalsPresent: false,
    irreversible: false,
    reservations: [] as string[],
    ckcAttribution: null,
    recoveryContext: recoveryContext(),
  };
}

function acwRecommendationItem(input: {
  id: string;
  ref: string;
  statement: string;
  createdAt: string;
}): EpistemicItem {
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.id,
    type: "Recommendation",
    statement: input.statement,
    status: "active",
    source: ACTIVE_CYCLE_WORK_SOURCE,
    createdBy: {
      actorId: "actor:nora",
      role: "agent",
      displayName: "Nora",
      authorityLevel: "N1",
    },
    createdAt: input.createdAt,
    relatedObjects: [PROJECT_ID, CYCLE_ID, input.ref],
  };
}

describe("PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01", () => {
  it("schema accepts Recommendation with structured recommendedOptionRef", () => {
    const item: NoraActiveCycleWorkItem = {
      type: "Recommendation",
      statement: "Nouvelle tentative gouvernée après diagnostic clarifié.",
      confidence: "high",
      blocking: null,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    };
    expect(isNoraActiveCycleWorkItem(item)).toBe(true);
    expect(normalizeActiveCycleRecommendedOptionRef(item.recommendedOptionRef)).toBe(
      GOVERNED_OPTION_REF,
    );
  });

  it("rejects invented recommendedOptionRef shape", () => {
    expect(
      isNoraActiveCycleWorkItem({
        type: "Recommendation",
        statement: "x",
        confidence: null,
        blocking: null,
        recommendedOptionRef: "not-an-option",
      }),
    ).toBe(false);
    expect(normalizeActiveCycleRecommendedOptionRef("Préparer…")).toBe(null);
  });

  it("deterministic fallback remains clarify-first when no Nora Recommendation", () => {
    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    const fallback = deriveTrajectoryRecommendation(inputs);
    expect(fallback.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);

    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(true);
    if (selected.ok) expect(selected.item).toBeNull();
  });

  it("STATE1 → Nora governed-gated becomes CURRENT recommendedOptionRef (not clarify-first)", () => {
    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    const noraItem = acwRecommendationItem({
      id: "epi:acw:gov1",
      ref: GOVERNED_OPTION_REF,
      statement: "Diagnostic clarifié — tenter une nouvelle exécution gouvernée.",
      createdAt: "2026-09-26T01:00:00.000Z",
    });
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [noraItem],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok || !selected.item) throw new Error("expected nora item");
    expect(selected.recommendedOptionRef).toBe(GOVERNED_OPTION_REF);

    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: selected.recommendedOptionRef,
    });
    expect(integrity.ok).toBe(true);

    // Clarify still exists as Option, not CURRENT recommendation.
    expect(options.some((o) => o.optionRef === CLARIFY_OPTION_REF)).toBe(true);
    expect(selected.recommendedOptionRef).not.toBe(CLARIFY_OPTION_REF);

    const chat = composePilotFacingAssistantText(
      "Le FAIL reste FAIL. Deux voies de recovery.",
      null,
      {
        recommendedOptionRef: GOVERNED_OPTION_REF,
        optionLabel: pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF),
      },
    );
    expect(chat).toContain(pilotTrajectoryOptionLabel(GOVERNED_OPTION_REF));
    expect(chat).toContain("pas une décision");
  });

  it("A — Nora option ref not in OptionSet → fail-closed", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:invented",
          ref: "opt:trajectory:invented-not-presented",
          statement: "Invented",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("NORA_RECOMMENDATION_NOT_IN_OPTION_SET");
    }
  });

  it("C1 — mixed valid + invented concurrent current refs → fail-closed", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:valid",
          ref: GOVERNED_OPTION_REF,
          statement: "Valid",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
        acwRecommendationItem({
          id: "epi:acw:invented",
          ref: "opt:trajectory:invented-mixed",
          statement: "Invented concurrent",
          createdAt: "2026-09-26T01:01:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("NORA_RECOMMENDATION_NOT_IN_OPTION_SET");
    }
  });

  it("C2 — invented structured ref rejected by decision-support validator", () => {
    const ok = validateActiveCycleRecommendationAgainstDecisionSupport({
      items: [
        {
          type: "Recommendation",
          recommendedOptionRef: "opt:trajectory:invented",
        },
      ],
      decisionSupportState: "PRESENT",
      optionRefs: [GOVERNED_OPTION_REF, BOUNDED_OPTION_REF, CLARIFY_OPTION_REF],
    });
    expect(ok.ok).toBe(false);
    if (!ok.ok) {
      expect(ok.code).toBe("ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID");
    }
    const noTds = validateActiveCycleRecommendationAgainstDecisionSupport({
      items: [
        {
          type: "Recommendation",
          recommendedOptionRef: GOVERNED_OPTION_REF,
        },
      ],
      decisionSupportState: "UNAVAILABLE",
      optionRefs: [],
    });
    expect(noTds.ok).toBe(false);
  });

  it("B — ambiguous Nora Recommendations → no silent selection", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:a",
          ref: GOVERNED_OPTION_REF,
          statement: "A",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
        acwRecommendationItem({
          id: "epi:acw:b",
          ref: CLARIFY_OPTION_REF,
          statement: "B",
          createdAt: "2026-09-26T01:01:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
    });
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("AMBIGUOUS_NORA_RECOMMENDATION");
    }
  });

  it("E — HumanDecision may choose non-recommended presented Option", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    });
    expect(integrity.ok).toBe(true);
    // Selecting clarify while governed is recommended remains valid presentation membership.
    expect(options.some((o) => o.optionRef === CLARIFY_OPTION_REF)).toBe(true);
  });

  it("F — option not presented fails integrity", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: "opt:trajectory:not-presented",
    });
    expect(integrity.ok).toBe(false);
  });

  it("I — Nora Recommendation older than accepted HD cutoff is ignored", () => {
    const options = deriveTrajectoryOptions(optionInputs());
    const selected = selectCurrentNoraTrajectoryRecommendationItems({
      items: [
        acwRecommendationItem({
          id: "epi:acw:old",
          ref: CLARIFY_OPTION_REF,
          statement: "Old clarify",
          createdAt: "2026-09-26T01:00:00.000Z",
        }),
      ],
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      ignoreCreatedAtOnOrBefore: "2026-09-26T02:00:00.000Z",
    });
    expect(selected.ok).toBe(true);
    if (selected.ok) expect(selected.item).toBeNull();
  });

  it("recommendation basis digests differ between Nora and fallback", async () => {
    const emptyDecisions = {
      decisionServices: {
        decisions: { listByProject: async () => [] },
      },
    };
    const oa = {
      cycleServices: {
        epistemic: {
          listByProject: async () => [
            acwRecommendationItem({
              id: "epi:acw:gov",
              ref: GOVERNED_OPTION_REF,
              statement: "Governed",
              createdAt: "2026-09-26T03:00:00.000Z",
            }),
          ],
        },
      },
      ...emptyDecisions,
    } as never;

    const inputs = optionInputs();
    const options = deriveTrajectoryOptions(inputs);
    const withNora = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: inputs,
    });
    expect(withNora.ok).toBe(true);
    if (!withNora.ok) throw new Error("expected ok");
    expect(withNora.resolved.recommendationSource).toBe("nora_active_cycle");
    expect(withNora.resolved.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );

    const withoutNora = await resolveCurrentNoraTrajectoryRecommendation({
      oa: {
        cycleServices: {
          epistemic: { listByProject: async () => [] },
        },
        ...emptyDecisions,
      } as never,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: inputs,
    });
    expect(withoutNora.ok).toBe(true);
    if (!withoutNora.ok) throw new Error("expected ok");
    expect(withoutNora.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );
    expect(withoutNora.resolved.recommendation.recommendedOptionRef).toBe(
      CLARIFY_OPTION_REF,
    );
    expect(withNora.resolved.recommendationBasisDigest).not.toBe(
      withoutNora.resolved.recommendationBasisDigest,
    );

    // PresentedOptionSet digests differ when recommendedOptionRef differs.
    const digestNora = computeOptionSetDigest({
      cycleTypeId: inputs.cycleTypeId,
      recommendedProfile: inputs.recommendedProfile,
      criticalSignalsPresent: inputs.criticalSignalsPresent,
      irreversible: inputs.irreversible,
      reservations: inputs.reservations,
      options,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    });
    const digestFallback = computeOptionSetDigest({
      cycleTypeId: inputs.cycleTypeId,
      recommendedProfile: inputs.recommendedProfile,
      criticalSignalsPresent: inputs.criticalSignalsPresent,
      irreversible: inputs.irreversible,
      reservations: inputs.reservations,
      options,
      recommendedOptionRef: CLARIFY_OPTION_REF,
    });
    expect(digestNora).not.toBe(digestFallback);
  });

  it("C4 — epistemic unavailable → resolve fails (not silent fallback)", async () => {
    const result = await resolveCurrentNoraTrajectoryRecommendation({
      oa: {
        cycleServices: {
          epistemic: {
            listByProject: async () => {
              throw new Error("db down");
            },
          },
        },
        decisionServices: {
          decisions: { listByProject: async () => [] },
        },
      } as never,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      optionRefs: [GOVERNED_OPTION_REF],
      optionInputs: optionInputs(),
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("EPISTEMIC_UNAVAILABLE");
  });

  it("extractAcwRecommendedOptionRef prefers trajectory option refs", () => {
    expect(
      extractAcwRecommendedOptionRef([
        PROJECT_ID,
        CYCLE_ID,
        GOVERNED_OPTION_REF,
      ]),
    ).toBe(GOVERNED_OPTION_REF);
  });

  it("G — Recommendation alone never promotes (structural denials)", () => {
    const rec = deriveTrajectoryRecommendation(optionInputs());
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.promotesTrajectory).toBe(false);
  });
});
