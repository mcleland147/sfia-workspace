/**
 * E1 B.1 — selective capitalisation raccordement (injected proposals).
 * Distinguishes: zero proposals → no write; pilot vs Nora epistemic; no silent loss.
 */
import { describe, expect, it } from "vitest";
import {
  extractKnowledgeProposals,
  summarizeKnowledgeProposals,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function qualifiedRecord(
  intents: Array<Record<string, unknown>>,
): NoraTurnQualification {
  return {
    status: "QUALIFIED",
    intents,
  } as unknown as NoraTurnQualification;
}

describe("E1 B.1 — capitalisation selectivity (qualification → proposals)", () => {
  it("significant Pilot contribution → ACQUIS hypothesized proposal extracted", () => {
    const q = qualifiedRecord([
      {
        id: "p1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Fait Pilote",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "Le campus dispose de douze ordinateurs portables à Lille.",
          epistemic: "hypothesized",
          subjectTitle: "Parc informatique",
          continuityReason: "apport Pilote durable",
        },
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("ACQUIS");
    expect(proposals[0]?.epistemic).toBe("hypothesized");
    expect(summarizeKnowledgeProposals(proposals).acquis_count).toBe(1);
  });

  it("Nora investigation result → RECOMMENDATION epistemic retained", () => {
    const q = qualifiedRecord([
      {
        id: "n1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Conclusion Nora",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "Neuf portables restent mobilisables après le prêt incident.",
          epistemic: "recommended",
          subjectTitle: "Parc informatique",
          continuityReason: "résultat d'investigation Nora",
        },
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals[0]?.epistemic).toBe("recommended");
  });

  it("mixed contributions → multiple kinds counted", () => {
    const q = qualifiedRecord([
      {
        id: "s1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Sujet",
        parameters: {
          knowledgeKind: "SUBJECT",
          knowledgeStatement: "Synthèse du parc informatique campus Lille et maintenance.",
          epistemic: "established",
          subjectTitle: "Parc informatique",
        },
      },
      {
        id: "o1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Question",
        parameters: {
          knowledgeKind: "OPEN_POINT",
          knowledgeStatement: "Qui valide le prêt exceptionnel hors horaires ?",
          epistemic: "hypothesized",
          subjectTitle: "Parc informatique",
        },
      },
    ]);
    const summary = summarizeKnowledgeProposals(extractKnowledgeProposals(q));
    expect(summary.subject_count).toBe(1);
    expect(summary.open_point_count).toBe(1);
    expect(summary.proposal_present).toBe(true);
  });

  it("exchange without durable interest → zero proposals (no mutation)", () => {
    const q = qualifiedRecord([
      {
        id: "chat",
        capabilityId: "d3.conversational_reply",
        mode: "EXPLAIN",
        summary: "Éclaircissement ponctuel",
        parameters: {},
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(0);
    expect(summarizeKnowledgeProposals(proposals).proposal_present).toBe(false);
  });

  it("PREPARE / EXPLAIN record_knowledge ignored (REQUEST_EFFECT gate)", () => {
    const q = qualifiedRecord([
      {
        id: "prep",
        capabilityId: "d4.record_knowledge",
        mode: "PREPARE",
        summary: "Piste seulement",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement: "Une hypothèse encore trop fragile pour capitaliser durablement.",
          epistemic: "hypothesized",
        },
      },
    ]);
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("UNAVAILABLE qualification yields no proposals", () => {
    const q = {
      status: "UNAVAILABLE",
      intents: [],
    } as unknown as NoraTurnQualification;
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });
});
