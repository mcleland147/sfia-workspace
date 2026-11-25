/**
 * ML4C TEMP (DET) — O-02 cognitive confrontation is Nora-led; these tests guard
 * server-side restitution / projection rules without inventing D4 or D6 from EXPLAIN,
 * negation-shaped drafts, or retired lexical routers.
 */
import { describe, expect, it } from "vitest";
import { qualifyDocumentAct, explicitDocumentIntent } from "@/domains/conversation/document-act";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractKnowledgeProposals,
  extractPilotageBinding,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { proposalFromStructured } from "@/domains/conversation/document-command";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

function qualified(partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "intents">): NoraTurnQualification {
  return asNoraQualification({
    status: "QUALIFIED",
    goal: "test",
    clarifications: [],
    replyDraft: "Réponse courte.",
    ...partial,
  });
}

describe("ML4C TEMP — restitution fail-closed (DET)", () => {
  it("TEMP-01: qualifyDocumentAct / explicitDocumentIntent stay lexical-retired", () => {
    for (const utterance of [
      "Crée un document de recette.",
      "Ne crée pas de document, explique seulement.",
      "Et si on rédigeait une synthèse ?",
    ]) {
      expect(qualifyDocumentAct(utterance)).toEqual({
        kind: "NONE",
        reason: "SEMANTIC_ROUTER_REQUIRED",
      });
      expect(explicitDocumentIntent(utterance)).toBe(false);
    }
  });

  it("TEMP-02: EXPLAIN d4.create_document does not project D4 CREATE", () => {
    const q = qualified({
      intents: [
        {
          id: "i-explain-doc",
          capabilityId: "d4.create_document",
          mode: "EXPLAIN",
          summary: "explain drafting",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(projectStudioEffects(q).documentAct).toEqual({ kind: "NONE" });
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("TEMP-03: EXPLAIN d6.human_decision never binds pilotage / HumanDecision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-explain-d6",
          capabilityId: "d6.human_decision",
          mode: "EXPLAIN",
          summary: "reflect on prior decision",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            decisionId: "dec-prior",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["prior-turn-summary-only"],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    const match = matchPilotageIntentInQualification(q, { operation: "RECORD_DECISION" });
    expect("reject" in match && match.reject).toBe(true);
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("TEMP-04: REQUEST_EFFECT d4.create_document still projects CREATE when not follow-on gated", () => {
    const q = qualified({
      intents: [
        {
          id: "i-create",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(projectStudioEffects(q).documentAct).toEqual({
      kind: "CREATE",
      mode: "REQUEST_EFFECT",
      inspectionRequired: false,
      intentId: "i-create",
    });
    expect(deriveThreadTurnKind(q)).toBe("INTENTION_EFFET");
  });

  it("ML5: PREPARE create projects documentAct without widening effectIntents", () => {
    const q = qualified({
      intents: [
        {
          id: "i-prep-note",
          capabilityId: "d4.create_document",
          mode: "PREPARE",
          summary: "Préparer une note",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-pub",
          capabilityId: "d7.prepare_publication",
          mode: "PREPARE",
          summary: "should not project as publish effect",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const proj = projectStudioEffects(q);
    expect(proj.documentAct).toEqual({
      kind: "CREATE",
      mode: "PREPARE",
      inspectionRequired: false,
      intentId: "i-prep-note",
    });
    expect(proj.publication.wantsPublish).toBe(false);
    expect(effectIntents(q)).toHaveLength(0);
  });

  it("TEMP-05: hypothetical d4.record_knowledge EXPLAIN does not capitalise", () => {
    const q = qualified({
      intents: [
        {
          id: "i-hyp",
          capabilityId: "d4.record_knowledge",
          mode: "EXPLAIN",
          summary: "hypothesis only",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "L’architecture pourrait être event-driven.",
            epistemic: "hypothesized",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
    expect(projectStudioEffects(q).documentAct).toEqual({ kind: "NONE" });
  });

  it("TEMP-06: documentProposal >12k via proposalFromStructured stays admissible envelope", () => {
    const longDoc = `# Synthèse\n\n${"ligne de contenu détaillée.\n".repeat(850)}`;
    expect(longDoc.length).toBeGreaterThan(12_000);
    expect(longDoc.length).toBeLessThanOrEqual(100_000);
    const p = proposalFromStructured({ title: "Synthèse", contentMarkdown: longDoc });
    expect(p).not.toBeNull();
    expect(p!.contentMarkdown.length).toBeGreaterThan(12_000);
  });

  it("TEMP-07: conversation history in sourceEvidence alone does not add REQUEST_EFFECT", () => {
    const q = qualified({
      goal: "reprendre le fil",
      intents: [
        {
          id: "i-dialogue",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "continue thread",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["msg-1", "msg-2", "msg-3"],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("TEMP-09: documentSource schema accepts PRIOR_ASSISTANT_MESSAGE", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "reprise",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
      documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: "msg-hist-1" },
    });
    expect(v.ok).toBe(true);
  });

  it("TEMP-10: documentSource + documentProposal → DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "conflit",
      intents: [],
      clarifications: [],
      replyDraft: "ok",
      documentSource: { kind: "PRIOR_ASSISTANT_MESSAGE", assistantMessageId: "msg-hist-1" },
      documentProposal: { title: "T", contentMarkdown: "# T\n\nx\n" },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT");
  });

  it("TEMP-08: D2 follow-on chains defer immediate documentAct to mission pending", () => {
    const q = qualified({
      intents: [
        {
          id: "i-d2",
          capabilityId: "d2.create_project",
          mode: "REQUEST_EFFECT",
          summary: "create project",
          parameters: { projectName: "Atlas" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "follow-on doc",
          parameters: {},
          constraints: [],
          dependsOn: ["i-d2"],
          sourceEvidence: [],
        },
      ],
    });
    const proj = projectStudioEffects(q);
    expect(proj.wantsFollowOnDocument).toBe(true);
    expect(proj.documentAct).toEqual({ kind: "NONE" });
  });
});