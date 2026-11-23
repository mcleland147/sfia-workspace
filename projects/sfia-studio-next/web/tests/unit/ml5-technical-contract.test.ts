import { describe, expect, it } from "vitest";
import {
  instructionFingerprint,
  isMaterialContractChange,
  technicalContractFingerprint,
} from "@/domains/execution/technical-contract-fingerprint";
import type { TechnicalContractBody } from "@/domains/execution/types";

function sampleBody(instruction: string): TechnicalContractBody {
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
    instructionText: instruction,
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

describe("ML5 D — technical contract fingerprint", () => {
  it("keeps full instruction in fingerprint (no replyDraft truncation)", () => {
    const long = "X".repeat(50_000);
    const fp = technicalContractFingerprint(sampleBody(long));
    expect(fp).toHaveLength(64);
    expect(instructionFingerprint(long)).toHaveLength(64);
    expect(instructionFingerprint(long)).not.toBe(instructionFingerprint(long.slice(0, 1000)));
  });

  it("detects material instruction change", () => {
    const a = technicalContractFingerprint(sampleBody("v1 exact"));
    const b = technicalContractFingerprint(sampleBody("v2 exact"));
    expect(isMaterialContractChange(a, b)).toBe(true);
    expect(isMaterialContractChange(a, a)).toBe(false);
  });
});
