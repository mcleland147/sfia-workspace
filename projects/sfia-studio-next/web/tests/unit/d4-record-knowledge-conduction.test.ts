import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  extractKnowledgeProposals,
  summarizeKnowledgeProposals,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

function qualified(
  partial: Partial<NoraTurnQualification> & {
    intents: NoraTurnQualification["intents"];
  },
): NoraTurnQualification {
  return asNoraQualification({
    status: "QUALIFIED",
    goal: partial.goal ?? "consolider la mémoire du projet",
    intents: partial.intents,
    clarifications: partial.clarifications ?? [],
    replyDraft: partial.replyDraft ?? "Synthèse utile au Pilote.",
  });
}

describe("d4.record_knowledge conduction (selective capitalisation)", () => {
  it("LIVE instructions authorize spontaneous selective memory without pilot memorize command", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/conversation/nora-adapter.ts"),
      "utf8",
    );
    expect(src).toContain("MÉMOIRE DURABLE / CAPITALISATION SÉLECTIVE");
    expect(src).toContain("d4.record_knowledge");
    expect(src).toMatch(/sans attendre « mémorise/);
    expect(src).toContain("Conditions POSITIVES");
    expect(src).toContain("Conditions NÉGATIVES");
    expect(src).toContain("mode EXPLAIN/EXPLORE/PREPARE sur d4.record_knowledge");
    expect(src).toContain("GEL E05");
    expect(src).toContain("E05_VISUAL_COMPOSITION_FROZEN");
    expect(src).toContain("stripVisualCompositionForFrozenReplies");
    expect(src).toMatch(/knowledgeStatement = synthèse durable/);
    expect(src).toMatch(/vise ≤220/);
    // Document path remains explicit-mandate; knowledge path is bounded exception.
    expect(src).toContain("d4.create_document / d4.revise_document");
    expect(src).toContain("écriture documentaire D4");
    expect(src).not.toMatch(
      /hypothèse n'autorisent aucune écriture D4\."/,
    );
  });

  it("TEST A — significant REQUEST_EFFECT proposals extract for D4", () => {
    const q = qualified({
      intents: [
        {
          id: "i-subj",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sujet réservations",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Organisation des réservations multi-centres",
            subjectTitle: "Réservations multi-centres",
            epistemic: "established",
            continuityReason: "Thème structurant du cadrage",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-acq",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Acquis Lyon",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement:
              "Le centre de Lyon confirme des conflits de planning récurrents le lundi.",
            epistemic: "established",
            subjectTitle: "Réservations multi-centres",
            continuityReason: "Fait métier consolidé",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-op",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Question ouverte",
          parameters: {
            knowledgeKind: "OPEN_POINT",
            knowledgeStatement:
              "Qui arbitrera les priorités de salles entre centres en cas de conflit ?",
            epistemic: "limited",
            continuityReason: "Arbitrage encore ouvert",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-talk",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "Réponse visible",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(3);
    expect(summarizeKnowledgeProposals(proposals)).toEqual({
      proposal_present: true,
      proposal_count: 3,
      subject_count: 1,
      acquis_count: 1,
      open_point_count: 1,
    });
  });

  it("TEST B — banal converse-only turn yields zero knowledge proposals", () => {
    const q = qualified({
      goal: "merci",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "Avec plaisir",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("TEST D — EXPLAIN hypothesis does not capitalise; document REQUEST_EFFECT untouched", () => {
    const q = qualified({
      intents: [
        {
          id: "i-hyp",
          capabilityId: "d4.record_knowledge",
          mode: "EXPLAIN",
          summary: "piste",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "On pourrait peut-être mutualiser les outils sans preuve.",
            epistemic: "hypothesized",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-doc",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "Créer une note",
          parameters: { documentHint: "Note cadrage" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("TEST G — UNAVAILABLE qualification yields zero proposals", () => {
    const q = asNoraQualification({
      status: "UNAVAILABLE",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "should be ignored",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "Ne doit pas être capitalisé depuis UNAVAILABLE.",
            epistemic: "established",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: ["indisponible"],
      replyDraft: "Nora LIVE UNKNOWN placeholder",
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("thin statements under 12 chars are ignored", () => {
    const q = qualified({
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "x",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "trop court",
            epistemic: "hypothesized",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("preserves supersedesAcquisId / resolvesOpenPointId and statements up to 5000", () => {
    const long = `Synthèse durable ${"x".repeat(800)}`;
    const q = qualified({
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "correction",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: long,
            epistemic: "hypothesized",
            subjectId: "subj_existing",
            supersedesAcquisId: "acq_prior",
            resolvesOpenPointId: "opn_prior",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.statement.length).toBe(long.length);
    expect(proposals[0]?.supersedesAcquisId).toBe("acq_prior");
    expect(proposals[0]?.resolvesOpenPointId).toBe("opn_prior");
    expect(proposals[0]?.subjectId).toBe("subj_existing");
  });
});
