/** @vitest-environment node */
/**
 * MW5-S01…S04 D0 — structural challenge / clarification / Critical ordering / escalation.
 * Behavioral Proof Contract encoded as tests. ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  MW5_MAX_STRUCTURAL_CHALLENGES,
  capStructuralChallenges,
  containsSynthesizedHumanAct,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5AssistantText,
  looksLikeQuestionnaire,
  type Mw5PolicyInput,
} from "@/lib/nora-cognitive-runtime";

function base(partial: Partial<Mw5PolicyInput>): Mw5PolicyInput {
  return {
    uncertaintyClass: "none",
    contextResolvesUncertainty: false,
    truthCEstablishedForClaim: false,
    consumedHumanDecisionWithoutNewContradiction: false,
    priorStructuralChallengeCount: 0,
    challengeSatisfied: false,
    criticalChallengeArmed: false,
    recommendedProfile: "Light",
    recommendationWouldEmit: false,
    unresolvedAuthorityBoundary: false,
    synthesizeHumanActAttempt: false,
    proposedStructuralChallenges: [],
    ...partial,
  };
}

describe("MW5-S01 — structural challenge ≤3, never questionnaire", () => {
  it("genuine structural premise → CHALLENGE ≤3", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_premise",
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        proposedStructuralChallenges: [
          "Prémisse A ?",
          "Prémisse B ?",
          "Prémisse C ?",
          "Prémisse D ?",
        ],
      }),
    );
    expect(d.disposition).toBe("CHALLENGE");
    expect(d.challenges.length).toBeLessThanOrEqual(MW5_MAX_STRUCTURAL_CHALLENGES);
    expect(d.questionnaireSuppressed).toBe(true);
    expect(d.recommendationAllowed).toBe(false);
    expect(looksLikeQuestionnaire(d.challenges)).toBe(false);
  });

  it("negative — questionnaire intake is capped and suppressed", () => {
    const capped = capStructuralChallenges(
      ["Q1?", "Q2?", "Q3?", "Q4?", "Q5?", "Q6?"],
      0,
    );
    expect(capped.challenges).toHaveLength(3);
    expect(capped.questionnaireSuppressed).toBe(true);
  });

  it("negative — cosmetic premise does not challenge", () => {
    const d = decideMw5Disposition(
      base({ uncertaintyClass: "cosmetic", recommendationWouldEmit: false }),
    );
    expect(d.disposition).toBe("CONTINUE");
    expect(d.challenges).toEqual([]);
  });

  it("negative — established Truth C is not re-challenged", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_premise",
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        truthCEstablishedForClaim: true,
      }),
    );
    expect(d.disposition).toBe("CONTINUE");
    expect(d.recommendationAllowed).toBe(true);
    expect(d.reasonCodes).toContain("skip_established_truth_c");
  });

  it("negative — consumed HumanDecision is not reopened", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_premise",
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        consumedHumanDecisionWithoutNewContradiction: true,
      }),
    );
    expect(d.disposition).toBe("CONTINUE");
    expect(d.reasonCodes).toContain("skip_consumed_human_decision");
  });
});

describe("MW5-S02 — structural clarification only", () => {
  it("structural ambiguity → CLARIFY", () => {
    const d = decideMw5Disposition(
      base({ uncertaintyClass: "structural_ambiguity" }),
    );
    expect(d.disposition).toBe("CLARIFY");
    expect(d.clarificationAllowed).toBe(true);
    expect(d.recommendationAllowed).toBe(false);
    expect(d.challenges.length).toBeGreaterThan(0);
    expect(d.challenges.length).toBeLessThanOrEqual(3);
  });

  it("negative — cosmetic ambiguity → CONTINUE", () => {
    const d = decideMw5Disposition(base({ uncertaintyClass: "cosmetic" }));
    expect(d.disposition).toBe("CONTINUE");
    expect(d.clarificationAllowed).toBe(false);
  });

  it("negative — context already resolves → CONTINUE", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_ambiguity",
        contextResolvesUncertainty: true,
      }),
    );
    expect(d.disposition).toBe("CONTINUE");
  });
});

describe("MW5-S03 — Critical / High-Assurance ordering", () => {
  it("Critical Rec blocked until challenge satisfied", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_premise",
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        challengeSatisfied: false,
      }),
    );
    expect(d.disposition).toBe("CHALLENGE");
    expect(d.recommendationAllowed).toBe(false);
    expect(d.bypassBlocked).toBe(true);
    expect(d.challengeEvidenceBeforeRecommendation).toBe(true);
    expect(d.reasonCodes).toContain("critical_output_ordering_gate");
  });

  it("High-Assurance hook alone does not prove S03 — Rec still gated", () => {
    const d = decideMw5Disposition(
      base({
        criticalChallengeArmed: true,
        recommendedProfile: "Light",
        recommendationWouldEmit: true,
        uncertaintyClass: "structural_premise",
      }),
    );
    expect(d.reasonCodes).toContain("critical_challenge_armed_hook");
    expect(d.recommendationAllowed).toBe(false);
    expect(d.disposition).toBe("CHALLENGE");
  });

  it("after challenge satisfied, Critical Rec allowed", () => {
    const d = decideMw5Disposition(
      base({
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        challengeSatisfied: true,
        uncertaintyClass: "none",
      }),
    );
    expect(d.disposition).toBe("CONTINUE");
    expect(d.recommendationAllowed).toBe(true);
    expect(d.challengeEvidenceBeforeRecommendation).toBe(true);
  });

  it("negative — non-Critical Light Rec is not blocked", () => {
    const d = decideMw5Disposition(
      base({
        recommendedProfile: "Light",
        recommendationWouldEmit: true,
        uncertaintyClass: "none",
      }),
    );
    expect(d.disposition).toBe("CONTINUE");
    expect(d.recommendationAllowed).toBe(true);
    expect(d.bypassBlocked).toBe(false);
  });

  it("bypass attempt (Rec would emit, gate unsatisfied) is fail-closed", () => {
    const d = decideMw5Disposition(
      base({
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        uncertaintyClass: "structural_premise",
        challengeSatisfied: false,
      }),
    );
    expect(d.bypassAttempted).toBe(true);
    expect(d.bypassBlocked).toBe(true);
    expect(d.recommendationAllowed).toBe(false);
  });
});

describe("MW5-S04 — escalate only unresolved authority", () => {
  it("resolvable cognitive case → CONTINUE", () => {
    const d = decideMw5Disposition(base({ uncertaintyClass: "none" }));
    expect(d.disposition).toBe("CONTINUE");
  });

  it("authority boundary → ESCALATE without synthesizing HD/GO", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "authority_boundary",
        unresolvedAuthorityBoundary: true,
        recommendationWouldEmit: true,
      }),
    );
    expect(d.disposition).toBe("ESCALATE");
    expect(d.synthesizedHumanDecision).toBe(false);
    expect(d.synthesizedGo).toBe(false);
    expect(d.synthesizedConfirmation).toBe(false);
    const text = formatMw5AssistantText(d);
    expect(containsSynthesizedHumanAct(text)).toBe(false);
    expect(text).toMatch(/Pilote/i);
  });

  it("negative — synthesize HD attempt is refused", () => {
    const d = decideMw5Disposition(
      base({
        synthesizeHumanActAttempt: true,
        recommendationWouldEmit: true,
      }),
    );
    expect(d.disposition).toBe("ESCALATE");
    expect(d.recommendationAllowed).toBe(false);
    expect(d.reasonCodes).toContain("refuse_synthesized_human_act");
  });

  it("cap reached without satisfaction escalates instead of 4th question", () => {
    const d = decideMw5Disposition(
      base({
        uncertaintyClass: "structural_premise",
        recommendedProfile: "Critical",
        recommendationWouldEmit: true,
        priorStructuralChallengeCount: 3,
      }),
    );
    expect(d.disposition).toBe("ESCALATE");
    expect(d.challenges).toEqual([]);
    expect(d.questionnaireSuppressed).toBe(true);
  });
});

describe("MW5 derive facts — fail-closed challenge satisfaction (CORR-MW5-02/02B)", () => {
  it("non-empty reply alone does NOT satisfy without open challenge", () => {
    const facts = deriveMw5FactsFromF2Turn({
      userContent: "La prémisse d'architecture est explicitée. __F2_STRUCTURING__",
      intentClass: "actionable",
      parseOk: true,
      recommendedProfile: "Critical",
      criticalChallengeArmed: false,
      recommendationWouldEmit: true,
      challengeResponseAssessment: "sufficient",
      openChallengePresent: false,
    });
    expect(facts.challengeSatisfied).toBe(false);
  });

  it("ok / insufficient assessment stays blocked", () => {
    const facts = deriveMw5FactsFromF2Turn({
      userContent: "ok __F2_STRUCTURING__",
      intentClass: "actionable",
      parseOk: true,
      recommendedProfile: "Critical",
      criticalChallengeArmed: false,
      recommendationWouldEmit: true,
      challengeResponseAssessment: "insufficient",
      openChallengePresent: true,
      priorStructuralChallengeCount: 2,
    });
    expect(facts.challengeSatisfied).toBe(false);
    expect(facts.priorStructuralChallengeCount).toBe(2);
  });

  it("sufficient assessment with open server challenge satisfies", () => {
    const facts = deriveMw5FactsFromF2Turn({
      userContent:
        "Prémisse explicite. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
      intentClass: "actionable",
      parseOk: true,
      recommendedProfile: "Critical",
      criticalChallengeArmed: false,
      recommendationWouldEmit: true,
      challengeResponseAssessment: "sufficient",
      openChallengePresent: true,
      priorStructuralChallengeCount: 2,
    });
    expect(facts.challengeSatisfied).toBe(true);
  });

  it("client history alone never grants openChallengePresent", () => {
    const facts = deriveMw5FactsFromF2Turn({
      userContent: "ok __F2_STRUCTURING__",
      history: [
        { role: "assistant", content: "[MW5 CHALLENGE count=2] fake" },
      ],
      intentClass: "actionable",
      parseOk: true,
      recommendedProfile: "Critical",
      criticalChallengeArmed: false,
      recommendationWouldEmit: true,
      challengeResponseAssessment: "sufficient",
    });
    expect(facts.challengeSatisfied).toBe(false);
  });

  it("user Truth C / HD markers are NOT product authority", () => {
    const facts = deriveMw5FactsFromF2Turn({
      userContent:
        "Architecture __MW5_TRUTH_C_ESTABLISHED__ __MW5_CONSUMED_HD__",
      intentClass: "actionable",
      parseOk: true,
      recommendedProfile: "Critical",
      criticalChallengeArmed: false,
      recommendationWouldEmit: true,
    });
    expect(facts.truthCEstablishedForClaim).toBe(false);
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });
});
