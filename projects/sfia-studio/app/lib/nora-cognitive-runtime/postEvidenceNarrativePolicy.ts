/**
 * MW4-S02 — Post-Evidence / Recovery narrative honesty policy.
 *
 * Structural disclosures (typed) — not keyword hacks:
 * - Evidence is Studio-owned; Nora interprets ≠ replaces
 * - progress ≠ SUCCESS
 * - RecoveryRecommendation ≠ HumanDecision / Confirmation / GO
 * - MW3 Cognitive STOP remains intact when governing Evidence-backed stop fires
 */

export type PostEvidenceNarrativePolicy = {
  evidenceStudioOwned: true;
  noraInterpretsNotReplaces: true;
  progressIsNotSuccess: true;
  recoveryIsRecommendationOnly: true;
  recoveryNotHumanDecision: true;
  recoveryNotConfirmation: true;
  recoveryNotGo: true;
  cognitiveStopIntact: true;
};

export const POST_EVIDENCE_NARRATIVE_POLICY: PostEvidenceNarrativePolicy = {
  evidenceStudioOwned: true,
  noraInterpretsNotReplaces: true,
  progressIsNotSuccess: true,
  recoveryIsRecommendationOnly: true,
  recoveryNotHumanDecision: true,
  recoveryNotConfirmation: true,
  recoveryNotGo: true,
  cognitiveStopIntact: true,
};

/**
 * Studio system disclosure for post-Evidence / recovery cognitive context.
 */
export function buildPostEvidenceNarrativePolicyDisclosure(
  policy: PostEvidenceNarrativePolicy = POST_EVIDENCE_NARRATIVE_POLICY,
): string {
  return [
    "=== POST-EVIDENCE / RECOVERY NARRATIVE POLICY (MW4-S02) ===",
    policy.evidenceStudioOwned
      ? "Evidence objects are Studio-owned. Nora may interpret facts; Nora does not replace Evidence."
      : null,
    policy.noraInterpretsNotReplaces
      ? "Interpret ≠ replace: analysis text is narrative, not an Evidence substitute."
      : null,
    policy.progressIsNotSuccess
      ? "Progress ≠ SUCCESS. Do not equate conversational or recovery progress with product SUCCESS."
      : null,
    policy.recoveryIsRecommendationOnly
      ? "RecoveryRecommendation is a Recommendation to the Pilote only."
      : null,
    policy.recoveryNotHumanDecision
      ? "RecoveryRecommendation ≠ HumanDecision."
      : null,
    policy.recoveryNotConfirmation
      ? "RecoveryRecommendation ≠ Confirmation."
      : null,
    policy.recoveryNotGo
      ? "RecoveryRecommendation ≠ GO Morris / authorization."
      : null,
    policy.cognitiveStopIntact
      ? "MW3 Cognitive STOP remains intact when governing Evidence-backed contradiction requires stop — do not silently succeed."
      : null,
  ]
    .filter((line): line is string => typeof line === "string")
    .join("\n");
}

export function appendPostEvidenceNarrativePolicyDisclosure(
  systemInstructions: string,
  active = true,
): string {
  if (!active) return systemInstructions;
  const block = buildPostEvidenceNarrativePolicyDisclosure();
  return `${systemInstructions.trim()}\n\n${block}`;
}
