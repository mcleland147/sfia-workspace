import { describe, expect, it } from "vitest";
import {
  buildNoraFinalAnalysisBrief,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";

describe("ML5 G — D8 cursor qualification", () => {
  it("exposes nine rubrics and never claims PASS/ADOPTED without verified proofs", () => {
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
    expect(brief).toMatch(/BRIEF TECHNIQUE DÉTERMINISTE/);
    expect(brief).toMatch(/pas une HumanDecision/);
  });

  it("refuses lexical criterion-as-proof and flags git tip mismatch", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "abc",
      acceptanceCriteria: ["critere-alpha-unique"],
      expectedProofs: ["capture"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "# Rapport contenant critere-alpha-unique en texte",
      manifest: {
        filesCreated: ["a.ts"],
        testsDeclared: [],
        testsCaptured: [],
        git: { tipSha: "aaa" },
        sourcesConsulted: [],
      },
      gitFacts: [{ path: "a.ts", sha: "bbb" }],
      gitFactsVerified: false,
    });
    expect(q.verdict).toBe("NON_CONFORMING");
    expect(q.criteria[0]?.status).toBe("declared");
    expect(q.limits.some((l) => /présence textuelle ≠ satisfaction/.test(l))).toBe(true);
    expect(q.limits.some((l) => /D9/.test(l))).toBe(true);
    expect(q.limits.some((l) => /tipSha/.test(l))).toBe(true);
  });

  it("C21 — can prove conformity when criteria have verified evidence + captured tests", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "fp-ok",
      acceptanceCriteria: ["fonction add(a,b) retourne a+b"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "# Rapport\nFichiers et tests capturés.",
      manifest: {
        filesCreated: ["src/add.ts"],
        filesObserved: ["src/add.ts"],
        testsDeclared: ["add.test.ts"],
        testsExecuted: ["add.test.ts"],
        testsCaptured: ["add.test.ts:stdout"],
        sourcesConsulted: ["contract"],
        gaps: [],
      },
      criterionEvidence: {
        "fonction add(a,b) retourne a+b": {
          refs: ["src/add.ts", "add.test.ts:stdout"],
          verified: true,
        },
      },
      gitFactsVerified: true,
      terminalStatus: "finished",
    });
    expect(q.testsPass).toBe(true);
    expect(q.conformityProven).toBe(true);
    expect(q.verdict).toBe("CONFORMING");
    expect(q.adopted).toBe(false);
    expect(q.morrisAcceptance).toBe(false);
  });
});
