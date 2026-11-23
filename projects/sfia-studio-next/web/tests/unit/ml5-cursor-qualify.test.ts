import { describe, expect, it } from "vitest";
import {
  buildNoraFinalAnalysisBrief,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";

describe("ML5 G — D8 cursor qualification", () => {
  it("exposes nine rubrics and never claims PASS/ADOPTED", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "abc",
      handoffStatus: "RECEIVED",
      reportMarkdown: "# Rapport\n\nTravail scripted.",
      manifest: {
        filesCreated: ["a.ts"],
        testsDeclared: ["t1"],
        testsExecuted: ["t1"],
        testsCaptured: [],
        gaps: ["preuve test manquante"],
      },
      terminalStatus: "finished",
    });
    expect(q.rubrics).toHaveLength(9);
    expect(q.testsPass).toBe(false);
    expect(q.conformityProven).toBe(false);
    expect(q.morrisAcceptance).toBe(false);
    expect(q.adopted).toBe(false);
    expect(q.verdict).toBe("PARTIAL");
    expect(q.limits.some((l) => /Tests déclarés/.test(l))).toBe(true);
  });

  it("marks missing report as indeterminate", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "abc",
      handoffStatus: null,
      reportMarkdown: null,
      manifest: null,
    });
    expect(q.verdict).toBe("INDETERMINATE");
    const brief = buildNoraFinalAnalysisBrief(q);
    expect(brief).toMatch(/Analyse globale unique/);
    expect(brief).toMatch(/pas une HumanDecision/);
  });
});
