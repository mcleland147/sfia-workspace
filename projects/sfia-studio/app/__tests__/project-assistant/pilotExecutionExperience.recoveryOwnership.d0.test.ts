/**
 * PILOT-EXEC RC-04 — structural post-terminal recovery owns instruct.
 * Pre-terminal Proposal subject still wins (CORR-PROOF-10). ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";

function structuralRecoveryOwnsNext(
  context: PostEvidenceRecoveryContext | null,
): boolean {
  return (
    context != null &&
    (context.recommendationKind === "replan" ||
      context.requiresHumanDecision === true)
  );
}

describe("RC-04 — structural recovery ownership gate", () => {
  const base: Omit<
    PostEvidenceRecoveryContext,
    "recommendationKind" | "requiresHumanDecision"
  > = {
    kind: "post_evidence_recovery",
    attemptId: "xat:rc04",
    attemptStatus: "failed",
    stopReason: "REAL_WORKSPACE_INVALID",
    executionContractId: "xct:rc04",
    evidenceId: "ev:rc04",
    reviewBundleId: "rb:rc04",
    productOutcome: "FAIL",
    headline: "Échec",
    rationale: "r",
    nextStep: "replan",
    realProcessInvoked: false,
    businessEffectProven: false,
    w3cEpistemicItemId: "epi:w3c-rec:rc04",
  };

  it("same-scope recover without HD → Relancer path (not options)", () => {
    expect(
      structuralRecoveryOwnsNext({
        ...base,
        recommendationKind: "recover",
        requiresHumanDecision: false,
      }),
    ).toBe(false);
  });

  it("replan → structural options ownership", () => {
    expect(
      structuralRecoveryOwnsNext({
        ...base,
        recommendationKind: "replan",
        requiresHumanDecision: true,
      }),
    ).toBe(true);
  });

  it("recover + requiresHumanDecision → structural options ownership", () => {
    expect(
      structuralRecoveryOwnsNext({
        ...base,
        recommendationKind: "recover",
        requiresHumanDecision: true,
      }),
    ).toBe(true);
  });

  it("null context → Proposal / generic path unchanged", () => {
    expect(structuralRecoveryOwnsNext(null)).toBe(false);
  });
});
