/**
 * Thin generic continuity from postExecutionProductContinuity.d0.test.ts.
 *
 * Axe C and CR-PCONT-02 only: FAIL / STOP / UNCLAIMED wording on trajectory
 * options. The deleted suite's docs_write EC completion, bounded agent, and
 * pre-exec continuity harness are not restored.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";

const UNCLAIMED_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "xat:pcont:unclaimed",
  attemptStatus: "succeeded",
  stopReason: null,
  executionContractId: "xct:pcont:1",
  evidenceId: "ev:mission-result:xatpcont",
  reviewBundleId: "rb:mission:xatpcont",
  productOutcome: "UNCLAIMED",
  recommendationKind: "recover",
  requiresHumanDecision: false,
  headline: "Exécution technique réussie — résultat produit non prouvé",
  rationale: "Attempt succeeded; ClaimEvaluation not_proven; Product UNCLAIMED.",
  nextStep: "recovery_diagnose_or_replan",
  realProcessInvoked: false,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c-rec:pcont",
};

const BASE_INPUTS = {
  cycleTypeId: "cyc:framing",
  recommendedProfile: "Critical" as const,
  criticalSignalsPresent: true,
  irreversible: false,
  reservations: [] as string[],
  ckcAttribution: null,
};

describe("generic post-execution continuity — FAIL / STOP / UNCLAIMED", () => {
  it("UNCLAIMED + succeeded is not presented as technical FAIL", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: UNCLAIMED_RECOVERY,
    });
    const blob = JSON.stringify(options);
    expect(blob).not.toMatch(/FAIL durable/i);
    expect(blob).not.toMatch(/Attempt failed/i);
    expect(blob).not.toMatch(/Conserver l'échec/i);
    expect(blob).toMatch(/technique réussie|non encore prouvé|non prouvé/i);
    expect(options[0]!.impacts.some((i) => /Attempt succeeded/i.test(i))).toBe(
      true,
    );
    const rec = deriveTrajectoryRecommendation({
      ...BASE_INPUTS,
      recoveryContext: UNCLAIMED_RECOVERY,
    });
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.rationale).toMatch(/non encore pleinement confirmé/i);
    expect(rec.rationale).not.toContain("UNCLAIMED");
    expect(rec.rationale).not.toContain("ProductOutcome");
    expect(rec.rationale).not.toMatch(/FAIL durable/);
  });

  it("FAIL keeps FAIL durable wording", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "failed",
        productOutcome: "FAIL",
        headline: "Échec technique — recovery requise",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/FAIL durable/);
    expect(blob).toMatch(/Conserver l'échec/);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
  });

  it("STOP never uses FAIL durable or Conserver l'échec", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "cancelled",
        productOutcome: "STOP",
        headline: "Arrêt gouverné",
        stopReason: "PILOT_STOP",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/STOP/);
    expect(blob).not.toMatch(/FAIL durable/);
    expect(blob).not.toMatch(/Conserver l'échec/);
    expect(blob).toMatch(/STOP \/ arrêt gouverné|arrêt gouverné \(STOP\)/);
  });
});
