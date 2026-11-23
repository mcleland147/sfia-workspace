import { describe, expect, it } from "vitest";
import {
  assertContractBodyComplete,
  evaluateContractReadiness,
} from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import {
  buildNoraFinalAnalysisBrief,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";

function sampleBody(): TechnicalContractBody {
  return {
    title: "Mission test",
    engagements: {
      willDo: "Modifier README",
      willNotDo: "Pas de merge",
      expectedResult: "README mis à jour",
      pilotControl: "HumanDecision Exécuter",
    },
    volets: {
      mission: "doc",
      perimeter: "README.md",
      capabilitiesAuthority: "Cursor SDK local",
      stopConditions: "STOP demandé",
      proofsSources: "diff + handoff",
      integrity: "fingerprint",
    },
    instructionText: "éditer README",
    risks: ["faible"],
    exclusions: ["PR"],
    acceptance: { criteria: ["diff"], expectedProofs: ["handoff"] },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["edit"],
      permissionsNeeded: ["workspace"],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["pas de rollback auto"],
    gitScope: null,
  };
}

describe("ML5 P1 — contract readiness + Nora brief distinction", () => {
  it("document complete ≠ READY when unknown restrictions", () => {
    const body = sampleBody();
    assertContractBodyComplete(body);
    const r = evaluateContractReadiness({
      body,
      unknownRestrictions: ["scope.git.unknown"],
    });
    expect(r.documentComplete).toBe(true);
    expect(r.ready).toBe(false);
    expect(r.blockedReasons.some((b) => b.includes("UNKNOWN_RESTRICTIONS"))).toBe(true);
  });

  it("ready only when document complete and no unknowns", () => {
    const r = evaluateContractReadiness({ body: sampleBody(), sourcesSufficient: true });
    expect(r.ready).toBe(true);
  });

  it("attached payload is technical brief, not Nora cognitive", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "abc",
      handoffStatus: null,
      reportMarkdown: null,
      manifest: null,
    });
    const brief = buildNoraFinalAnalysisBrief(q);
    expect(classifyAttachedNoraPayload(brief)).toBe("TECHNICAL_BRIEF");
    expect(brief).toMatch(/pas un avis Nora/);
  });
});
