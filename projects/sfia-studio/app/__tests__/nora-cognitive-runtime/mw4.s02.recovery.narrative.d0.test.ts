/** @vitest-environment node */
/**
 * MW4-S02 — Post-Evidence / Recovery narrative honesty D0.
 * Fake only — ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  POST_EVIDENCE_NARRATIVE_POLICY,
  buildPostEvidenceNarrativePolicyDisclosure,
  decideCognitiveStop,
  disposeContradiction,
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import { MW4_POST_EVIDENCE_NARRATIVE_LABELS } from "@/features/project-assistant/presentationLabels";

describe("MW4-S02 — recovery narrative honesty D0", () => {
  it("policy disclosure states Evidence Studio-owned + interpret≠replace", () => {
    const disclosure = buildPostEvidenceNarrativePolicyDisclosure();
    expect(disclosure).toMatch(/Evidence objects are Studio-owned/);
    expect(disclosure).toMatch(/Interpret ≠ replace/);
    expect(disclosure).toMatch(/Progress ≠ SUCCESS/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ HumanDecision/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ Confirmation/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ GO Morris/);
    expect(disclosure).toMatch(/Cognitive STOP remains intact/);
    expect(POST_EVIDENCE_NARRATIVE_POLICY.recoveryIsRecommendationOnly).toBe(
      true,
    );
  });

  it("presentation labels stay non-authoritative", () => {
    expect(MW4_POST_EVIDENCE_NARRATIVE_LABELS.notHumanDecision).toMatch(
      /HumanDecision/,
    );
    expect(MW4_POST_EVIDENCE_NARRATIVE_LABELS.progressNotSuccess).toMatch(
      /SUCCESS/,
    );
  });

  it("cognitive turn accepts post-evidence narrative policy flag", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] post-evidence." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s02-policy",
      projectId: "prj:mw4-s02",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Post-evidence recovery narrative." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      postEvidenceNarrativePolicy: true,
    });
    expect(turn.text).toMatch(/TEST\/FAKE/);
    expect(POST_EVIDENCE_NARRATIVE_POLICY.progressIsNotSuccess).toBe(true);
  });

  it("MW3 Cognitive STOP remains intact alongside MW4-S02 policy", () => {
    const disposition = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        {
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
        {
          evidenceId: "ev:2",
          sourceId: "src:b",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
      ],
      trustedSfiaProfile: null,
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Must remain FinOps-frozen",
    });
    expect(stop.cognitiveStop).toBe(true);
    expect(stop.allowsSilentSuccess).toBe(false);
    expect(stop.outcome).toBe("COGNITIVE_STOP");
  });
});
