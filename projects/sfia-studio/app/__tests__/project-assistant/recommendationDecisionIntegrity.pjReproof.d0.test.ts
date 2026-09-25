/**
 * PJ-REPROOF-01/02 — Recommendation ↔ OptionSet integrity + Pilote projection.
 */

import { describe, expect, it } from "vitest";
import {
  assertRecommendedOptionInPresentedSet,
  buildConstrainedRecommendationCognitionAsk,
  looksLikeInventedOptionPack,
  partitionOptionImpactsForPilote,
  projectPiloteRecommendationRationale,
  scrubPiloteRecommendationProse,
} from "@/features/project-assistant/w2/recommendationDecisionIntegrity";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  deriveCkcAttributedRecommendation,
  projectCkcAttributedRecommendation,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  formatNoraAssistantDisplayText,
  pilotPresentedOptionLabel,
  pilotTrajectoryOptionLabel,
} from "@/features/project-assistant/presentationLabels";
import type { TrajectoryOptionDto } from "@/features/project-assistant/w2/types";

function stubOption(
  optionRef: string,
  label: string,
): TrajectoryOptionDto {
  return {
    kind: "OPTION",
    optionRef,
    label,
    intent: "intent",
    impacts: ["Aucun succès métier revendiqué"],
    reservations: [],
    steps: [],
  };
}

const CLARIFY_LABEL = "Diagnostiquer / clarifier avant nouvelle tentative";

describe("PJ-REPROOF integrity + Pilote projection", () => {
  it("T1 — recommendedOptionRef binds to exactly one Option", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        kind: "post_evidence_recovery",
        productOutcome: "UNCLAIMED",
        attemptStatus: "succeeded",
        attemptId: "att:demo",
        evidenceId: "evi:demo",
        reviewBundleId: "rb:demo",
        executionContractId: "ec:demo",
        recommendationKind: "recover",
        requiresHumanDecision: false,
        realProcessInvoked: true,
        headline: "Succès technique, résultat à confirmer",
        rationale: "rationale",
        nextStep: "clarifier",
        stopReason: null,
        businessEffectProven: false,
        w3cEpistemicItemId: "epi:w3c-demo",
      },
    });
    const reco = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        kind: "post_evidence_recovery",
        productOutcome: "UNCLAIMED",
        attemptStatus: "succeeded",
        attemptId: "att:demo",
        evidenceId: "evi:demo",
        reviewBundleId: "rb:demo",
        executionContractId: "ec:demo",
        recommendationKind: "recover",
        requiresHumanDecision: false,
        realProcessInvoked: true,
        headline: "Succès technique, résultat à confirmer",
        rationale: "rationale",
        nextStep: "clarifier",
        stopReason: null,
        businessEffectProven: false,
        w3cEpistemicItemId: "epi:w3c-demo",
      },
    });
    expect(reco.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: reco.recommendedOptionRef,
    });
    expect(integrity.ok).toBe(true);
    if (!integrity.ok) return;
    expect(integrity.option.label).toMatch(/Diagnostiquer|clarifier/i);
  });

  it("T2 — unknown recommendedOptionRef fail-closed", () => {
    const options = [
      stubOption(GOVERNED_OPTION_REF, "A"),
      stubOption(CLARIFY_OPTION_REF, "B"),
    ];
    const integrity = assertRecommendedOptionInPresentedSet({
      options,
      recommendedOptionRef: "opt:trajectory:unknown",
    });
    expect(integrity.ok).toBe(false);
    if (integrity.ok) return;
    expect(integrity.code).toBe("RECOMMENDATION_OPTION_REF_MISMATCH");
  });

  it("T3 — invented O1/O2/O3 cognitive prose does not become decision Options", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: ["r1"],
      ckcAttribution: null,
    });
    const base = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: ["r1"],
      ckcAttribution: null,
    });
    const invented =
      "O1 Compléter la qualification Evidence\nO2 Remédiation ciblée de l'Artifact\nO3 Maintenir le résultat\nO4 Déduire le succès technique";
    expect(looksLikeInventedOptionPack(invented)).toBe(true);
    const projected = projectPiloteRecommendationRationale({
      baseRationale: base.rationale,
      cognitiveRecommendation: invented,
      guidanceText: "Clarifier avant d'engager.",
    });
    expect(projected.fellBackToBase).toBe(true);
    expect(projected.cognitiveAnalysis).toBeNull();
    expect(projected.rationale).not.toMatch(/\bO1\b/);
    expect(projected.rationale).not.toMatch(/Remédiation ciblée/);
    expect(projected.rationale).toMatch(/clarifier|Clarifier/i);
    // Canonical OptionSet labels unchanged.
    expect(options.map((o) => o.label).join("|")).toMatch(/Clarifier/);
    expect(options.some((o) => /Remédiation ciblée/i.test(o.label))).toBe(
      false,
    );
    const attributed = deriveCkcAttributedRecommendation({
      baseRationale: base.rationale,
      content: null,
      cognitiveRecommendation: invented,
    });
    expect(attributed).not.toMatch(/\bO1\b/);
    expect(attributed).toMatch(/clarifier|Clarifier|Réserves/i);
  });

  it("T15 — contradictory non-numbered provider prose cannot own primary Recommendation", () => {
    const base = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        kind: "post_evidence_recovery",
        productOutcome: "UNCLAIMED",
        attemptStatus: "succeeded",
        attemptId: "att:demo",
        evidenceId: "evi:demo",
        reviewBundleId: "rb:demo",
        executionContractId: "ec:demo",
        recommendationKind: "recover",
        requiresHumanDecision: false,
        realProcessInvoked: true,
        headline: "Succès technique, résultat à confirmer",
        rationale: "rationale",
        nextStep: "clarifier",
        stopReason: null,
        businessEffectProven: false,
        w3cEpistemicItemId: "epi:w3c-demo",
      },
    });
    expect(base.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(base.rationale).toMatch(/diagnostiquer|clarifier/i);

    const hostile =
      "Je conseille finalement de préparer directement une nouvelle tentative.";
    expect(looksLikeInventedOptionPack(hostile)).toBe(false);

    const projected = projectCkcAttributedRecommendation({
      baseRationale: base.rationale,
      content: null,
      cognitiveRecommendation: hostile,
    });

    // Primary WHAT remains canonical clarify/diagnose — never the hostile retry advice.
    expect(projected.rationale).toMatch(/diagnostiquer|clarifier/i);
    expect(projected.rationale).not.toMatch(
      /Je conseille finalement de préparer directement/i,
    );
    expect(projected.rationale).not.toMatch(
      /préparer directement une nouvelle tentative/i,
    );

    // Hostile prose may be retained only as secondary analysis (or dropped);
    // it must never replace primary.
    if (projected.cognitiveAnalysis) {
      expect(projected.cognitiveAnalysis).toMatch(/nouvelle tentative/i);
    }
    expect(projected.rationale).not.toBe(projected.cognitiveAnalysis);

    // Structural binding unchanged.
    expect(base.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(pilotTrajectoryOptionLabel(base.recommendedOptionRef)).toBe(
      CLARIFY_LABEL,
    );
  });

  it("T4/T5 — primary Recommendation scrub removes Markdown and internal IDs", () => {
    const raw =
      "## Diagnostic\n**Important** : Attempt `att:abc` Evidence `evi:xyz` opt:trajectory:clarify-first et ContractResult.";
    const scrubbed = scrubPiloteRecommendationProse(raw);
    expect(scrubbed).not.toMatch(/^##/m);
    expect(scrubbed).not.toContain("**");
    expect(scrubbed).not.toContain("`");
    expect(scrubbed).not.toMatch(/\batt:abc\b/);
    expect(scrubbed).not.toMatch(/\bevi:xyz\b/);
    expect(scrubbed).not.toMatch(/\bopt:trajectory:clarify-first\b/);
    expect(scrubbed).not.toContain("ContractResult");
    const formatted = formatNoraAssistantDisplayText(raw);
    expect(formatted).not.toMatch(/^##/m);
    expect(formatted).not.toContain("**");
  });

  it("T6 — technical impacts partitioned to secondary", () => {
    const parts = partitionOptionImpactsForPilote([
      "Aucun succès métier revendiqué",
      "Attempt succeeded: att:demo",
      "Evidence: evi:demo",
      "Nouvelle décision humaine requise après clarification",
      "productOutcome: UNCLAIMED",
    ]);
    expect(parts.primary).toEqual([
      "Aucun succès métier revendiqué",
      "Nouvelle décision humaine requise après clarification",
    ]);
    expect(parts.technical.join("|")).toMatch(/Attempt/);
    expect(parts.technical.join("|")).toMatch(/Evidence/);
    expect(parts.technical.join("|")).toMatch(/productOutcome/);
  });

  it("T7 — recommended badge mapping stays optionRef equality (derive)", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
    });
    const reco = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
    });
    const recommended = options.filter(
      (o) => o.optionRef === reco.recommendedOptionRef,
    );
    expect(recommended).toHaveLength(1);
    expect(reco.recommendedOptionRef).toBe(GOVERNED_OPTION_REF);
  });

  it("T9 — HumanDecision primary display uses option LABEL", () => {
    expect(
      pilotPresentedOptionLabel({
        optionRef: CLARIFY_OPTION_REF,
        options: [stubOption(CLARIFY_OPTION_REF, CLARIFY_LABEL)],
      }),
    ).toBe(CLARIFY_LABEL);
    expect(pilotTrajectoryOptionLabel(CLARIFY_OPTION_REF)).toMatch(
      /Diagnostiquer|clarifier/i,
    );
  });

  it("T10 — Recommendation structural denials remain false", () => {
    const reco = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
    });
    expect(reco.isHumanDecision).toBe(false);
    expect(reco.promotesTrajectory).toBe(false);
  });

  it("primary recovery rationale is Pilote-first (no SFIA ontology dump)", () => {
    const reco = deriveTrajectoryRecommendation({
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: {
        kind: "post_evidence_recovery",
        productOutcome: "UNCLAIMED",
        attemptStatus: "succeeded",
        attemptId: "att:demo",
        evidenceId: "evi:demo",
        reviewBundleId: "rb:demo",
        executionContractId: "ec:demo",
        recommendationKind: "recover",
        requiresHumanDecision: false,
        realProcessInvoked: true,
        headline: "Succès technique, résultat à confirmer",
        rationale: "rationale",
        nextStep: "clarifier",
        stopReason: null,
        businessEffectProven: false,
        w3cEpistemicItemId: "epi:w3c-demo",
      },
    });
    expect(reco.rationale).toMatch(/diagnostiquer|clarifier/i);
    expect(reco.rationale).toMatch(/ne lance aucune action automatiquement/i);
    expect(reco.rationale).not.toMatch(/Recommendation\s*≠\s*HumanDecision/i);
    expect(reco.rationale).not.toContain("HumanDecision");
    expect(reco.rationale).not.toContain("ProductOutcome");
    expect(reco.rationale).not.toContain("ContractResult");
    expect(reco.rationale).not.toContain("optionRef");
  });

  it("constrained cognition ask forbids invented option packs", () => {
    const ask = buildConstrainedRecommendationCognitionAsk({
      recommendedOptionLabel: "Diagnostiquer / clarifier",
      recommendedOptionRef: CLARIFY_OPTION_REF,
      subjectLine: "Expliquer la recommandation canonique.",
    });
    expect(ask).toMatch(/O1\/O2\/O3/);
    expect(ask).toMatch(/Markdown/);
    expect(ask).toContain("Diagnostiquer / clarifier");
    expect(ask).toContain(CLARIFY_OPTION_REF);
    expect(ask).not.toMatch(/Recommendation\s*≠\s*HumanDecision/);
  });
});
