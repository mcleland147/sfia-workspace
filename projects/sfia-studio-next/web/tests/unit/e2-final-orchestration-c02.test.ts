import { describe, expect, it } from "vitest";
import {
  crossCapOutcomeFromCapitalisations,
  dependencyPreconditionBlockReason,
  unknownPilotageEffectRecord,
} from "@/domains/conversation/pilotage-effect-aggregate";
import { extractDurablePilotageIntentIds } from "@/domains/conversation/service";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  normalizeKnowledgeRecordKind,
  extractKnowledgeProposals,
} from "@/domains/conversation/semantic-qualification";

describe("E2-FINAL-01 — crossCapOutcomeFromCapitalisations", () => {
  it("never attributes another intent's AVAILABLE", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-b",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("requires complete success for multi-op intent", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "FAILED" },
        ],
      }),
    ).toBe("PARTIAL");
  });

  it("APPLIED only when all related rows succeed", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("subject side-effect alone does not satisfy acquis primary", () => {
    // Auxiliary subject is ignored once acquis rows exist; acquis FAILED ⇒ FAILED.
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "FAILED" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("subject-only AVAILABLE is not APPLIED when proposalKind is ACQUIS", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        proposalKind: "ACQUIS",
        capitalisations: [{ intentId: "i-d4", kind: "subject", status: "AVAILABLE" }],
      }),
    ).toBe("FAILED");
  });

  it("acquis AVAILABLE satisfies even with auxiliary subject row", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        proposalKind: "ACQUIS",
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "AVAILABLE" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("PARTIAL does not satisfy D5 dependsOn", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4"],
        pilotageIntentIds: new Set(["i-d5"]),
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4", "PARTIAL"]]),
      }),
    ).toMatch(/n'est pas appliqué|PARTIAL/i);
  });
});

describe("E2-FINAL-01 — knowledgeKind alias normalization", () => {
  it("maps FACT → ACQUIS", () => {
    expect(normalizeKnowledgeRecordKind("FACT")).toBe("ACQUIS");
    expect(normalizeKnowledgeRecordKind("ACQUIS")).toBe("ACQUIS");
  });

  it("extractKnowledgeProposals accepts FACT alias", () => {
    const proposals = extractKnowledgeProposals({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "t",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "know",
          parameters: {
            knowledgeKind: "FACT" as never,
            knowledgeStatement: "x".repeat(20),
            epistemic: "recommended",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "",
    });
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("ACQUIS");
  });
});

describe("E2-FINAL-02 — durable intent recovery without pilotageEffects", () => {
  it("extracts REQUEST_EFFECT D5/D6 ids from semanticQualification stash", () => {
    const resultJson = JSON.stringify({
      status: "UNKNOWN",
      semanticQualification: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        intents: [
          {
            id: "i-open",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "open",
            parameters: { pilotageOperation: "OPEN_CYCLE" },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-d4",
            capabilityId: "d4.record_knowledge",
            mode: "REQUEST_EFFECT",
            summary: "know",
            parameters: { knowledgeKind: "FACT", knowledgeStatement: "x".repeat(20) },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-trans",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "trans",
            parameters: { pilotageOperation: "TRANSITION_CYCLE" },
            constraints: [],
            dependsOn: ["i-open"],
            sourceEvidence: [],
          },
        ],
      },
    });
    expect(extractDurablePilotageIntentIds({ resultJson })).toEqual([
      "i-open",
      "i-trans",
    ]);
  });

  it("unions pilotageEffects with qualification stash (partial projection)", () => {
    expect(
      extractDurablePilotageIntentIds({
        fromJsonEffects: [
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-a" },
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-b" },
        ],
        resultJson: JSON.stringify({
          semanticQualification: {
            intents: [
              {
                id: "i-other",
                capabilityId: "d5.pilotage_command",
                mode: "REQUEST_EFFECT",
              },
            ],
          },
        }),
      }),
    ).toEqual(["i-a", "i-b", "i-other"]);
  });

  it("unknownPilotageEffectRecord is explicit, not a fabricated success", () => {
    const r = unknownPilotageEffectRecord({ intentId: "i-x", operation: "OPEN_CYCLE" });
    expect(r.status).toBe("UNKNOWN");
    expect(r.attempted).toBe(false);
    expect(r.semanticIntentId).toBe("i-x");
  });
});
