/**
 * E1 B.7 cognitive reuse + B.8 projection helpers — deterministic unit proofs (no PG).
 */
import { describe, expect, it } from "vitest";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";
import {
  extractKnowledgeSelectionHints,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { mergeLexicalAndDerived } from "@/domains/knowledge/hybrid-knowledge-search";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

describe("E1 B.7 — cognitive reuse (non-trim proofs)", () => {
  it("knowledge hints bind acquis/open points/subjects for PREFERRED selection", () => {
    const q = asNoraQualification({
      status: "QUALIFIED",
      goal: "reuse",
      intents: [
        {
          id: "i-sel",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Reprendre le fil Git",
          parameters: {
            relevantAcquisIds: ["acq-git"],
            relevantOpenPointIds: ["op-branch"],
            relevantSubjectIds: ["subj-plan"],
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    const hints = extractKnowledgeSelectionHints(q);
    expect(hints).toEqual({
      acquisIds: ["acq-git"],
      openPointIds: ["op-branch"],
      subjectIds: ["subj-plan"],
    });
  });

  it("continuation omits bulk journal but retains PREFERRED + tool-access marker", () => {
    const base = [
      "ACQUIS[FACT/target/PREFERRED] subject=∅: conserver ce fil",
      "ACQUIS[FACT/noise/AVAILABLE] subject=∅: bruit historique",
      "POINT_OUVERT[op-x/AVAILABLE] subject=∅: autre point",
    ];
    const out = resolveContinuationKnowledgeSnippets(base, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(out[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(out.some((s) => s.includes("target") && s.includes("PREFERRED"))).toBe(true);
    expect(out.some((s) => s.includes("noise"))).toBe(false);
    expect(out.some((s) => s.includes("op-x"))).toBe(false);
  });

  it("fresh segment after interrupt path re-qualifies hints (schema stable)", () => {
    const resumed = asNoraQualification({
      status: "QUALIFIED",
      goal: "resume",
      intents: [
        {
          id: "resume",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Poursuivre",
          parameters: { relevantAcquisIds: ["acq-1"] },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Je reprends.",
    });
    expect(extractKnowledgeSelectionHints(resumed).acquisIds).toEqual(["acq-1"]);
  });

  it("derivedUsed=false (flag off) does not block lexical B.7 listing", () => {
    const prev = process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    const merged = mergeLexicalAndDerived({
      projectId: "proj_b7",
      lexical: [
        {
          sourceId: "acq-1",
          snippet: "GitHub obligatoire pour le dépôt",
          matchKind: "acquis",
          channel: "lexical",
        },
      ],
      queryVector: [1, 0, 0],
    });
    expect(merged.derivedUsed).toBe(false);
    expect(merged.derivedSkippedReason).toBe("FLAG_OFF");
    expect(merged.hits).toHaveLength(1);
    if (prev === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    else process.env.SFIA_DERIVED_EMBEDDING_SEARCH = prev;
  });
});