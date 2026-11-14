import { describe, expect, it } from "vitest";
import {
  canonicalizeDocumentProposal,
  confrontProposalWithFence,
  contentSha256,
  isStructuralFenceSeparatorOnly,
  serializeProposalFence,
} from "@/domains/conversation/document-command";
import {
  appendDocumentEffectAck,
  extractContractualDocumentProposal,
} from "@/domains/conversation/document-act";

function authorityOf(title: string, contentMarkdown: string) {
  const c = canonicalizeDocumentProposal({ title, contentMarkdown });
  if (!c.ok) throw new Error(c.reason);
  return c.proposal;
}

describe("P1 confrontProposalWithFence — structural LF", () => {
  it("QA-02: accepts exact match", () => {
    const authority = authorityOf("Doc", "# Doc\n\nCorps.\n");
    const fence = serializeProposalFence(authority);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    const r = confrontProposalWithFence(authority, extracted);
    expect(r).toEqual({ ok: true, materialize: false });
  });

  it("QA-02: accepts sole structural LF separator (legacy fence body)", () => {
    const body = "# Doc\n\nCorps sans NL finale";
    const authority = authorityOf("Doc", body);
    expect(authority.contentMarkdown.endsWith("\n")).toBe(false);
    // Legacy fence: body includes serializer structural NL, no structured meta.
    const legacy = "```sfia-document\n" + body + "\n```\n";
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.content).toBe(body + "\n");
    expect(
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
      }),
    ).toBe(true);
    const r = confrontProposalWithFence(authority, extracted);
    expect(r.ok).toBe(true);
  });

  it("QA-02: round-trip serialize then extract equals canonical", () => {
    const authority = authorityOf("Doc", "# Doc\n\nSans fin");
    const fence = serializeProposalFence(authority);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.content).toBe(authority.contentMarkdown);
    expect(contentSha256(extracted.title, extracted.content)).toBe(authority.contentSha256);
  });

  it("QA-03: refuses different title", () => {
    const authority = authorityOf("A", "# A\n\nBody\n");
    const other = authorityOf("B", "# B\n\nBody\n");
    const fence = serializeProposalFence(other);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    const r = confrontProposalWithFence(authority, {
      ok: true,
      title: extracted.title,
      content: extracted.content,
    });
    expect(r).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("QA-03: refuses different body", () => {
    const authority = authorityOf("Doc", "# Doc\n\nAlpha\n");
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: "# Doc\n\nBeta\n",
    };
    expect(confrontProposalWithFence(authority, extracted)).toEqual({
      ok: false,
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
  });

  it("QA-03: refuses true extra terminal LF when authority already ends with LF", () => {
    const authority = authorityOf("Doc", "# Doc\n\nWith NL\n");
    expect(authority.contentMarkdown.endsWith("\n")).toBe(true);
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: authority.contentMarkdown + "\n",
    };
    expect(
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
      }),
    ).toBe(false);
    expect(confrontProposalWithFence(authority, extracted)).toEqual({
      ok: false,
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
  });

  it("QA-03: refuses internal whitespace difference", () => {
    const authority = authorityOf("Doc", "# Doc\n\nHello  world\n");
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: "# Doc\n\nHello world\n",
    };
    expect(confrontProposalWithFence(authority, extracted).ok).toBe(false);
  });

  it("QA-04: missing fence → materialize", () => {
    const authority = authorityOf("Doc", "# Doc\n\nX\n");
    const r = confrontProposalWithFence(authority, {
      ok: false,
      reason: "DOCUMENT_PROPOSAL_MISSING",
    });
    expect(r).toEqual({ ok: true, materialize: true });
  });

  it("QA-04: invalid fence reason propagates", () => {
    const authority = authorityOf("Doc", "# Doc\n\nX\n");
    const r = confrontProposalWithFence(authority, {
      ok: false,
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
    });
    expect(r).toEqual({ ok: false, reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" });
  });

  it("QA-05: Unicode body preserved under structural separator", () => {
    const body = "# Café\n\nÉlève 中文";
    const authority = authorityOf("Café", body);
    const legacy = "```sfia-document\n" + body + "\n```\n";
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(confrontProposalWithFence(authority, extracted).ok).toBe(true);
  });
});

describe("P3 ACK + fence integrity", () => {
  it("QA-06: fence remains extractable after ACK", () => {
    const authority = authorityOf("AckDoc", "# AckDoc\n\nParagraphe un.\n\nParagraphe deux.\n");
    const fence = serializeProposalFence(authority);
    const assistant = `Voici la proposition.\n\n${fence}`;
    const composed = appendDocumentEffectAck(assistant, {
      act: "CREATE",
      status: "NOT_EXECUTED",
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
    expect(composed).not.toMatch(/Studio a exécuté l'acte documentaire/);
    expect(composed).toMatch(/NOT_EXECUTED/);
    const again = extractContractualDocumentProposal(composed);
    expect(again.ok).toBe(true);
    if (!again.ok) throw new Error(again.reason);
    expect(again.title).toBe(authority.title);
    expect(again.content).toBe(authority.contentMarkdown);
  });

  it("QA-16: AVAILABLE ACK still allows fence extract", () => {
    const authority = authorityOf("Ok", "# Ok\n\nBody\n");
    const fence = serializeProposalFence(authority);
    const composed = appendDocumentEffectAck(`Intro\n\n${fence}`, {
      act: "CREATE",
      status: "AVAILABLE",
      documentId: "doc_1",
      revisionId: "rev_1",
      revisionNumber: 1,
    });
    const again = extractContractualDocumentProposal(composed);
    expect(again.ok).toBe(true);
    if (!again.ok) throw new Error(again.reason);
    expect(again.content).toBe(authority.contentMarkdown);
  });
});
