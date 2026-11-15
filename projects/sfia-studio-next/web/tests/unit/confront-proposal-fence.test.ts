import { describe, expect, it } from "vitest";
import {
  canonicalizeDocumentProposal,
  confrontProposalWithFence,
  contentSha256,
  encodeTitleB64,
  hasDocumentLevelH1,
  isLegacyUntitledSectionFence,
  isStructuralFenceSeparatorOnly,
  parseFenceMeta,
  serializeProposalFence,
} from "@/domains/conversation/document-command";
import {
  appendDocumentEffectAck,
  applyTargetedSectionRevision,
  assertSectionScope,
  extractContractualDocumentProposal,
  LEGACY_UNTITLED_DOCUMENT_TITLE,
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

describe("LIVE-03 section-scoped REVISE confront", () => {
  const docTitle = "Options de solution DEV LIVE";
  const sectionBody = "## Option B\n\nÀ préciser.\n\nREVISION-CANARI-GAMMA-91";
  const v1 = `# Options de solution DEV LIVE

## Option A

SOURCE-CANARI-BETA-73

## Option B

À préciser.
`;

  it("P01/R01/R12: LIVE-03 shapes — LEGACY untitled + structural LF → admit when sectionScoped", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const assistant = `Modification Option B.\n\n\`\`\`sfia-document\n${sectionBody}\n\`\`\`\n`;
    const extracted = extractContractualDocumentProposal(assistant);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(LEGACY_UNTITLED_DOCUMENT_TITLE);
    expect(extracted.titleProvenance).toBe("LEGACY_UNTITLED");
    expect(parseFenceMeta("sfia-document").kind).toBe("LEGACY");
    expect(hasDocumentLevelH1(extracted.content)).toBe(false);
    expect(isLegacyUntitledSectionFence(extracted)).toBe(true);
    expect(extracted.content).toBe(`${sectionBody}\n`);
    expect(confrontProposalWithFence(authority, extracted).ok).toBe(false);
    expect(
      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
    ).toEqual({ ok: true, materialize: false });
  });

  it("P05: STRUCTURED title-b64=Document Nora ≠ authority → REFUS via real parser", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const sentinel = LEGACY_UNTITLED_DOCUMENT_TITLE;
    const digest = contentSha256(sentinel, sectionBody);
    const info = `sfia-document title-b64=${encodeTitleB64(sentinel)} chars=${sectionBody.length} pair-sha256=${digest}`;
    expect(parseFenceMeta(info).kind).toBe("STRUCTURED");
    const fence = "```" + info + "\n" + sectionBody + "\n```\n";
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(sentinel);
    expect(extracted.titleProvenance).toBe("STRUCTURED");
    expect(hasDocumentLevelH1(extracted.content)).toBe(false);
    expect(isLegacyUntitledSectionFence(extracted)).toBe(false);
    expect(
      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("P06: STRUCTURED explicit other title → REFUS", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const other = "Titre concurrent";
    const digest = contentSha256(other, sectionBody);
    const info = `sfia-document title-b64=${encodeTitleB64(other)} chars=${sectionBody.length} pair-sha256=${digest}`;
    const extracted = extractContractualDocumentProposal(
      "```" + info + "\n" + sectionBody + "\n```\n",
    );
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.titleProvenance).toBe("STRUCTURED");
    expect(
      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("P04: STRUCTURED title matching authority admits on exact content", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const fence = serializeProposalFence(authority);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.titleProvenance).toBe("STRUCTURED");
    expect(
      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
    ).toEqual({ ok: true, materialize: false });
  });

  it("missing titleProvenance fails closed for sectionScoped exception", () => {
    const authority = authorityOf(docTitle, sectionBody);
    expect(
      isLegacyUntitledSectionFence({
        title: LEGACY_UNTITLED_DOCUMENT_TITLE,
        content: sectionBody,
      }),
    ).toBe(false);
    expect(
      confrontProposalWithFence(
        authority,
        {
          ok: true,
          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
          content: sectionBody,
        },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("R02–R05: section merge keeps Option A canari and emits Option B canari", () => {
    const merged = applyTargetedSectionRevision(v1, sectionBody, "Option B");
    expect(merged.ok).toBe(true);
    if (!merged.ok) throw new Error(merged.reason);
    expect(assertSectionScope(v1, merged.content, "Option B")).toEqual({ ok: true });
    expect(merged.content).toContain("SOURCE-CANARI-BETA-73");
    expect(merged.content).toContain("REVISION-CANARI-GAMMA-91");
    expect(merged.content).toMatch(/## Option A[\s\S]*SOURCE-CANARI-BETA-73/);
  });

  it("R09: different document title with claimed H1 still conflicts under sectionScoped", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const other = "# Autre document\n\n## Option B\n\nREVISION-CANARI-GAMMA-91\n";
    expect(
      confrontProposalWithFence(
        authority,
        { ok: true, title: "Autre document", content: other },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("R10: H1 that differs from authority title refuses even if body resembles section", () => {
    const authority = authorityOf(docTitle, `# ${docTitle}\n\n## Option B\n\nx\n`);
    expect(
      confrontProposalWithFence(
        authority,
        {
          ok: true,
          title: "Titre faux",
          content: "# Titre faux\n\n## Option B\n\nx\n",
        },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("R11: substantive body divergence → PROPOSAL_SOURCE_CONFLICT", () => {
    const authority = authorityOf(docTitle, sectionBody);
    expect(
      confrontProposalWithFence(
        authority,
        {
          ok: true,
          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
          content: "## Option B\n\nTexte divergent.\n",
        },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("R13: second trailing LF is not structural — refuse", () => {
    const authority = authorityOf(docTitle, sectionBody);
    expect(
      confrontProposalWithFence(
        authority,
        {
          ok: true,
          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
          content: `${sectionBody}\n\n`,
        },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("R14: significant internal whitespace difference refuses", () => {
    const authority = authorityOf(docTitle, "## Option B\n\nHello  world");
    expect(
      confrontProposalWithFence(
        authority,
        {
          ok: true,
          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
          content: "## Option B\n\nHello world\n",
        },
        { sectionScoped: true },
      ),
    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("CREATE path (no sectionScoped): LEGACY untitled still conflicts on title", () => {
    const authority = authorityOf(docTitle, sectionBody);
    const extracted = {
      ok: true as const,
      title: LEGACY_UNTITLED_DOCUMENT_TITLE,
      content: `${sectionBody}\n`,
    };
    expect(confrontProposalWithFence(authority, extracted)).toEqual({
      ok: false,
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
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
