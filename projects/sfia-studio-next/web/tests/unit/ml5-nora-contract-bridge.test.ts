import { describe, expect, it } from "vitest";
import {
  detectsTechnicalContractIntent,
  draftBodyFromInvestigation,
  semanticWantsCorrectiveDraft,
  semanticWantsCursorContractPrepare,
} from "@/domains/conversation/nora-contract-bridge";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import {
  buildNoraCognitiveAnalysis,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";
import { BILAN_TAB_LABELS } from "@/components/figma/RealizationBilan";

describe("ML5 CA-01 Nora contract bridge helpers", () => {
  it("C14: lexical detectors are inert (fail-closed)", () => {
    expect(
      detectsTechnicalContractIntent("Prépare un contrat technique pour Cursor"),
    ).toBe(false);
  });

  it("C14: semantic prepare / corrective from qualification", () => {
    const base: NoraTurnQualification = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "préparer mandat",
      projectIntention: "",
      desiredOutcome: "module",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "p1",
          capabilityId: "d7.prepare_cursor_contract",
          mode: "PREPARE",
          parameters: { correctiveDraft: "true" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      continueChoices: [],
      resourceReferences: [],
      replyDraft: "ok",
      preparationAssessment: "PROPOSAL",
      preparationAssessmentExplanation: "",
    };
    expect(semanticWantsCursorContractPrepare(base)).toBe(true);
    expect(semanticWantsCorrectiveDraft(base)).toBe(true);
  });

  it("refuses READY on empty investigation (C15 positive sufficiency)", () => {
    const inv = evaluateContractReadiness(createEmptyInvestigation("mission cursor"));
    expect(inv.contractReady).toBe(false);
    expect(inv.sources.some((s) => s.coverage === "CONSULTED")).toBe(false);
  });

  it("drafts a contract body from investigation with sources + business criteria", () => {
    const base = createEmptyInvestigation("réalisation cursor du module X");
    const inv = evaluateContractReadiness({
      ...base,
      desiredOutcome: "module X livré avec calcul correct",
      remainingWork: ["cas limite TVA 0%", "arrondi centimes"],
      sources: [
        { kind: "GIT", ref: "repo/README.md", coverage: "CONSULTED" },
        { kind: "D4", ref: "doc:spec", coverage: "VERIFIED" },
      ],
      exclusions: ["push GitHub"],
    });
    const body = draftBodyFromInvestigation(inv, {
      instructionFromNora: "Détail technique long de Nora pour le mandat.",
    });
    expect(body.instructionText).toMatch(/Sources consultées/);
    expect(body.instructionText).toMatch(/Détail technique long/);
    expect(body.acceptance.criteria).toContain("cas limite TVA 0%");
    expect(body.exclusions).toContain("push GitHub");
    expect(body.executor.kind).toBe("CURSOR_SDK_LOCAL");
  });
});

describe("ML5 CA-08 synthesis vs Nora cognitive classification", () => {
  it("classifies deterministic synthesis distinctly from NORA_COGNITIVE", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "fp",
      acceptanceCriteria: ["handoff RECEIVED"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "# Rapport\nhandoff RECEIVED ok",
      manifest: { filesCreated: ["a.ts"], gaps: ["preuve tardive"] },
      terminalStatus: "finished",
    });
    const syn = buildNoraCognitiveAnalysis({
      qualification: q,
      attemptId: "att-1",
      contractTitle: "Module X",
      dossierIncomplete: true,
    });
    expect(classifyAttachedNoraPayload(syn)).toBe("DETERMINISTIC_SYNTHESIS");
    expect(syn).toMatch(/SYNTHÈSE DÉTERMINISTE CONSULTATIVE/);
    expect(syn).not.toMatch(/BRIEF TECHNIQUE DÉTERMINISTE/);
    expect(
      classifyAttachedNoraPayload(
        "[ANALYSE COGNITIVE NORA (D3)]\nAvis sourcé après run D3.",
      ),
    ).toBe("NORA_COGNITIVE");
  });
});

describe("ML5 CA-09 Figma D8 tab labels", () => {
  it("exposes the four Figma tab labels", () => {
    expect(Object.values(BILAN_TAB_LABELS)).toEqual([
      "SYNTHÈSE",
      "LIVRABLES ET TESTS",
      "GIT & PIÈCES",
      "ÉCARTS",
    ]);
  });
});
