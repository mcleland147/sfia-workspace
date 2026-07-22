import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  parseProposalJsonText,
  validateRequestRoutingProposal,
} from "@/lib/d1/intake/validateProposal";
import { analyzeIntent } from "@/lib/d1/intake/analyzeIntent";
import {
  buildFakeProposalPayload,
  FakeIntakeConversationProvider,
} from "@/lib/d1/intake/fakeIntakeProvider";
import { setIntakeProviderForTests } from "@/lib/d1/intake/resolveProvider";
import { D1Error } from "@/lib/d1/errors";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "@/lib/d1/intake/types";

function validBase(over: Record<string, unknown> = {}) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: "rrp-1",
    rawIntent: "Je veux lancer une app contrats",
    normalizedIntent: "Créer un projet de suivi des contrats",
    subject: "Suivi des contrats",
    proposedObjective: "Cadrer le suivi des contrats",
    proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
    proposedCycleType: "FRAMING",
    proposedProfile: "Standard",
    proposedBlocks: ["cadrage"],
    constraints: [],
    assumptions: ["Aucun match contexte"],
    missingInformation: ["confirmation humaine"],
    clarificationQuestion: null,
    alternatives: [],
    confidence: 0.7,
    rationale: "Nouveau besoin produit",
    requiresHumanConfirmation: true,
    status: "PROPOSAL_READY",
    createdAt: "2026-07-22T18:00:00.000Z",
    proposedProjectId: null,
    proposedCycleId: null,
    ...over,
  };
}

describe("D1-C2 RequestRoutingProposal validation", () => {
  it("accepts a valid CREATE_PROJECT_CANDIDATE payload", () => {
    const p = validateRequestRoutingProposal(validBase());
    expect(p.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
    expect(p.requiresHumanConfirmation).toBe(true);
    expect(p.proposedProjectId).toBeNull();
  });

  it("rejects invented project ids", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({ proposedProjectId: "proj-x" }),
      ),
    ).toThrow(D1Error);
  });

  it("rejects confidence out of bounds", () => {
    expect(() =>
      validateRequestRoutingProposal(validBase({ confidence: 1.5 })),
    ).toThrow(D1Error);
  });

  it("rejects forbidden claims", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({ rationale: "This is V3-ADOPTED" }),
      ),
    ).toThrow(D1Error);
  });

  it("requires clarification question for NEED_CLARIFICATION", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({
          proposedOutcomeType: "NEED_CLARIFICATION",
          status: "CLARIFICATION_REQUIRED",
          clarificationQuestion: null,
          requiresHumanConfirmation: true,
        }),
      ),
    ).toThrow(D1Error);
  });

  it("parses fenced JSON", () => {
    const raw = parseProposalJsonText(
      "```json\n" + JSON.stringify(validBase()) + "\n```",
    );
    expect(validateRequestRoutingProposal(raw).proposalId).toBe("rrp-1");
  });
});

describe("D1-C2 fake heuristics", () => {
  it("maps analyze-only intent", () => {
    const p = buildFakeProposalPayload(
      "Analyse cette idée, mais ne crée rien.",
      [],
    );
    expect(p.proposedOutcomeType).toBe("ANALYZE_ONLY");
  });

  it("maps vague intent to clarification", () => {
    const p = buildFakeProposalPayload("J’ai un nouveau sujet.", []);
    expect(p.proposedOutcomeType).toBe("NEED_CLARIFICATION");
  });

  it("maps clear product intent to create candidate", () => {
    const p = buildFakeProposalPayload(
      "Je veux lancer une application de suivi des contrats.",
      [],
    );
    expect(p.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });
});

describe("D1-C2 analyzeIntent service", () => {
  beforeEach(() => {
    setIntakeProviderForTests(new FakeIntakeConversationProvider());
  });
  afterEach(() => {
    setIntakeProviderForTests(null);
  });

  it("produces a validated proposal without mutation side effects", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "s1",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.proposal.proposedOutcomeType).toBe(
      "CREATE_PROJECT_CANDIDATE",
    );
    expect(result.proposal.proposedProjectId).toBeNull();
    expect(result.providerMode).toBe("fake");
  });

  it("asks for clarification then accepts an answer", async () => {
    const first = await analyzeIntent({
      sessionLocalId: "s2",
      rawIntent: "J’ai un nouveau sujet.",
    });
    expect(first.proposal.status).toBe("CLARIFICATION_REQUIRED");
    const second = await analyzeIntent({
      sessionLocalId: "s2",
      rawIntent: "J’ai un nouveau sujet.",
      clarificationTurns: [
        {
          role: "assistant",
          content: first.proposal.clarificationQuestion ?? "",
        },
        {
          role: "user",
          content: "Je veux un module de suivi des contrats pour le legal.",
        },
      ],
    });
    expect(second.proposal.proposedOutcomeType).toBe(
      "CREATE_PROJECT_CANDIDATE",
    );
  });

  it("rejects oversized intent", async () => {
    await expect(
      analyzeIntent({
        sessionLocalId: "s3",
        rawIntent: "x".repeat(3000),
      }),
    ).rejects.toBeInstanceOf(D1Error);
  });

  it("maps provider error to D1Error PROVIDER", async () => {
    await expect(
      analyzeIntent({
        sessionLocalId: "s4",
        rawIntent: "__FORCE_PROVIDER_ERROR__ lancer une app",
      }),
    ).rejects.toMatchObject({ code: "PROVIDER" });
  });
});
