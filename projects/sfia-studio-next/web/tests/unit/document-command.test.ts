import { describe, expect, it } from "vitest";
import { fitBudget } from "@/domains/conversation/history-tools-sdk";
import {
  admitDocumentCommand,
  canonicalizeDocumentProposal,
  contentSha256,
  encodeTitleB64,
  parseFenceMeta,
  payloadSha256,
  proposalFromStructured,
  serializeProposalFence,
} from "@/domains/conversation/document-command";
import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

const baseAdmit = {
  commandId: "tcmd-test-1",
  operationId: "op-test-1",
  userMessageId: "msg-user-1",
  qualifiedIntentId: "i-d4-create",
  preparationId: "prep-test-1",
  source: { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "tcmd-test-1" },
};

describe("document-command admission", () => {
  it("admit CREATE when title and body are valid", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "Spec ML4C",
      contentMarkdown: "# Spec ML4C\n\nCorps minimal.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.binding.action).toBe("CREATE");
      expect(r.binding.contentSha256).toBe(
        contentSha256("Spec ML4C", "# Spec ML4C\n\nCorps minimal.\n"),
      );
      expect(r.binding.correlationKey).toHaveLength(48);
    }
  });

  it("admit REVISE when targets are present", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "REVISE",
      documentId: "doc-1",
      baseRevisionId: "rev-1",
      title: "Spec",
      contentMarkdown: "# Spec\n\nRévisé.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.binding.documentId).toBe("doc-1");
  });

  it("rejects empty title or body", () => {
    expect(
      admitDocumentCommand({
        ...baseAdmit,
        action: "CREATE",
        title: "   ",
        contentMarkdown: "x",
      }).ok,
    ).toBe(false);
    const emptyBody = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "T",
      contentMarkdown: "  \n  ",
    });
    expect(emptyBody.ok).toBe(false);
    if (!emptyBody.ok) expect(emptyBody.reason).toBe("EMPTY_PROPOSAL");
  });

  it("rejects content over 100k chars", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "CREATE",
      title: "Large",
      contentMarkdown: "x".repeat(100_001),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.verdict).toBe("NOT_EXECUTED");
      expect(r.reason).toBe("CONTENT_TOO_LARGE");
    }
  });

  it("rejects REVISE without documentId / baseRevisionId", () => {
    const r = admitDocumentCommand({
      ...baseAdmit,
      action: "REVISE",
      title: "T",
      contentMarkdown: "body",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("REVISE_TARGET_INCOMPLETE");
  });
});

describe("document-command hashes", () => {
  it("contentSha256 is stable for the same inputs", () => {
    const a = contentSha256("Titre", "# Corps\n");
    const b = contentSha256("Titre", "# Corps\n");
    expect(a).toBe(b);
    expect(a).toHaveLength(64);
  });

  it("payloadSha256 changes when content hash changes", () => {
    const source = { kind: "SAME_TURN_SNAPSHOT" as const, commandId: "c1" };
    const p1 = payloadSha256({
      action: "CREATE",
      source,
      preparationId: "prep-1",
      documentId: null,
      baseRevisionId: null,
      title: "T",
      contentSha256: contentSha256("T", "v1"),
    });
    const p2 = payloadSha256({
      action: "CREATE",
      source,
      preparationId: "prep-1",
      documentId: null,
      baseRevisionId: null,
      title: "T",
      contentSha256: contentSha256("T", "v2"),
    });
    expect(p1).not.toBe(p2);
  });
});

describe("proposalFromStructured", () => {
  it("returns null for empty or oversized payloads", () => {
    expect(proposalFromStructured({ title: "  ", contentMarkdown: "x" })).toBeNull();
    expect(proposalFromStructured({ title: "T", contentMarkdown: "" })).toBeNull();
    expect(
      proposalFromStructured({ title: "T", contentMarkdown: "a".repeat(100_001) }),
    ).toBeNull();
  });

  it("returns exact proposal with contentSha256", () => {
    const p = proposalFromStructured({ title: "  Atlas  ", contentMarkdown: "# Atlas\n" });
    expect(p).toMatchObject({ title: "Atlas", contentMarkdown: "# Atlas\n" });
    expect(p?.contentSha256).toBe(contentSha256("Atlas", "# Atlas\n"));
  });
});

describe("canonicalizeDocumentProposal", () => {
  it("accepts when H1 matches title", () => {
    const r = canonicalizeDocumentProposal({
      title: "Atlas",
      contentMarkdown: "# Atlas\n\nCorps.\n",
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.proposal.title).toBe("Atlas");
  });

  it("rejects TITLE_H1_MISMATCH", () => {
    const r = canonicalizeDocumentProposal({
      title: "Atlas",
      contentMarkdown: "# Autre titre\n\nCorps.\n",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("TITLE_H1_MISMATCH");
  });
});

describe("parseFenceMeta — COMPAT case + structured", () => {
  const title = "Compat titre";
  const body = "# Compat titre\n\nCorps.\n";
  const digest = contentSha256(title, body);

  function wrapFence(tag: string, content: string) {
    return `\`\`\`${tag}\n${content}\n\`\`\`\n`;
  }

  it.each([
    ["COMPAT-01 SFIA-DOCUMENT", "SFIA-DOCUMENT"],
    ["COMPAT-02 Sfia-Document", "Sfia-Document"],
    ["COMPAT-03 sfia-document", "sfia-document"],
  ])("%s → LEGACY", (_label, tag) => {
    expect(parseFenceMeta(tag)).toEqual({ kind: "LEGACY" });
    const extracted = extractContractualDocumentProposal(wrapFence(tag, "# Doc\n\nBody.\n"));
    expect(extracted.ok).toBe(true);
  });

  it("COMPAT-04: mixed-case legacy tag preserves title and Markdown on extract", () => {
    const body = "# Document historique\n\nContenu conservé.\n";
    const fence = "```SFIA-DOCUMENT\n" + body + "```\n";
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe("Document historique");
      expect(extracted.content).toBe(body);
    }
  });

  it("COMPAT-05: mixed-case tag + partial meta → INVALID", () => {
    const info = `SFIA-DOCUMENT title-b64=${encodeTitleB64(title)}`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("COMPAT-06: mixed-case tag + unknown key → INVALID", () => {
    const info = `Sfia-Document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest} foo=bar`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("COMPAT-07: structured canonical → ACCEPT", () => {
    const triad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest}`;
    expect(parseFenceMeta(triad)).toMatchObject({ kind: "STRUCTURED", pairSha256: digest });
    const extracted = extractContractualDocumentProposal(wrapFence(triad, body));
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe(title);
      expect(extracted.content).toBe(body);
    }
  });

  it("COMPAT-08: incomplete structured triad → INVALID", () => {
    const partial = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length}`;
    expect(parseFenceMeta(partial).kind).toBe("INVALID");
  });

  it("COMPAT-09: two contractual fences → AMBIGUOUS", () => {
    const fenceA = wrapFence("sfia-document", "# A\n\nUn.\n");
    const fenceB = wrapFence("sfia-document", "# B\n\nDeux.\n");
    const raw = `Prologue.\n\n${fenceA}\nSuite.\n\n${fenceB}`;
    const extracted = extractContractualDocumentProposal(raw);
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_AMBIGUOUS");
  });

  it("COMPAT-10: historical message without structured meta → COMPLETE extract", () => {
    const raw =
      "Message assistant historique.\n\n```sfia-document\n# Historique compat\n\n## Section\n\nCorps lisible.\n```\n";
    const extracted = extractContractualDocumentProposal(raw);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe("Historique compat");
      expect(extracted.content).toContain("Corps lisible");
    }
  });
});

describe("parseFenceMeta — META (P0-A)", () => {
  const title = "Meta titre";
  const body = "# Meta titre\n\nCorps structuré.\n";
  const digest = contentSha256(title, body);
  const triad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest}`;

  function wrapFence(info: string, content: string) {
    return `\`\`\`${info}\n${content}\n\`\`\`\n`;
  }

  it("META-01: bare sfia-document → LEGACY fence accepts", () => {
    expect(parseFenceMeta("sfia-document")).toEqual({ kind: "LEGACY" });
    const legacy = wrapFence("sfia-document", "# Doc\n\nBody.\n");
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) expect(extracted.title).toBe("Doc");
  });

  it("META-02: three valid fields ACCEPT round-trip", () => {
    expect(parseFenceMeta(triad)).toMatchObject({
      kind: "STRUCTURED",
      chars: body.length,
      pairSha256: digest,
    });
    const extracted = extractContractualDocumentProposal(wrapFence(triad, body));
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.title).toBe(title);
      expect(extracted.content).toBe(body);
    }
  });

  it("META-03: title-b64 alone → INVALID (not LEGACY)", () => {
    const info = `sfia-document title-b64=${encodeTitleB64(title)}`;
    expect(parseFenceMeta(info)).toEqual({
      kind: "INVALID",
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
    });
    expect(extractContractualDocumentProposal(wrapFence(info, body)).ok).toBe(false);
  });

  it.each([
    ["META-04 chars alone", `sfia-document chars=${body.length}`],
    ["META-05 pair-sha alone", `sfia-document pair-sha256=${digest}`],
    [
      "META-06 missing pair-sha256",
      `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length}`,
    ],
  ])("%s → INVALID", (_label, info) => {
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("META-07: duplicate key → INVALID", () => {
    const dup = `${triad} title-b64=${encodeTitleB64("Autre")}`;
    expect(parseFenceMeta(dup).kind).toBe("INVALID");
  });

  it("META-08: unknown key → INVALID", () => {
    const bad = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=${digest} foo=bar`;
    expect(parseFenceMeta(bad).kind).toBe("INVALID");
  });

  it("META-09: empty value → INVALID", () => {
    expect(parseFenceMeta(`sfia-document chars=`).kind).toBe("INVALID");
  });

  it("META-10: chars=12abc → INVALID", () => {
    expect(parseFenceMeta(`sfia-document chars=12abc`).kind).toBe("INVALID");
  });

  it.each(["-1", "1.5", "1e3", "01"])("META-11: chars=%s → INVALID", (chars) => {
    expect(
      parseFenceMeta(
        `sfia-document title-b64=${encodeTitleB64(title)} chars=${chars} pair-sha256=${digest}`,
      ).kind,
    ).toBe("INVALID");
  });

  it("META-12: bad pair-sha256 → INVALID", () => {
    const badSha = `sfia-document title-b64=${encodeTitleB64(title)} chars=${body.length} pair-sha256=zz`;
    expect(parseFenceMeta(badSha).kind).toBe("INVALID");
  });

  it("META-14: title-b64 that does not round-trip UTF-8 → INVALID", () => {
    // Padding / non-canonical base64url encoding must be refused.
    const title = "Café";
    const padded = Buffer.from(title, "utf8").toString("base64url") + "==";
    const info = `sfia-document title-b64=${padded} chars=10 pair-sha256=${"a".repeat(64)}`;
    expect(parseFenceMeta(info).kind).toBe("INVALID");
  });

  it("META-13: bad base64url title-b64 → INVALID", () => {
    const badB64 = `sfia-document title-b64=titre+invalid chars=${body.length} pair-sha256=${digest}`;
    expect(parseFenceMeta(badB64).kind).toBe("INVALID");
  });

  it("META-15: wrong pair-sha256 → INTEGRITY_MISMATCH on extract", () => {
    const wrong = triad.replace(digest, "a".repeat(64));
    const extracted = extractContractualDocumentProposal(wrapFence(wrong, body));
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH");
  });

  it("META-16: H1 mismatch → TITLE_MISMATCH", () => {
    const wrongBody = "# Autre H1\n\nCorps.\n";
    const info = `sfia-document title-b64=${encodeTitleB64(title)} chars=${wrongBody.length} pair-sha256=${contentSha256(title, wrongBody)}`;
    const extracted = extractContractualDocumentProposal(wrapFence(info, wrongBody));
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_TITLE_MISMATCH");
  });
});

describe("serializeProposalFence — F02 round-trip", () => {
  function roundTrip(title: string, contentMarkdown: string) {
    const contentSha = contentSha256(title, contentMarkdown);
    const fence = serializeProposalFence({ title, contentMarkdown, contentSha256: contentSha });
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.title).toBe(title);
    expect(extracted.content).toBe(contentMarkdown);
    return fence;
  }

  it("META-17: preserves content without trailing newline", () => {
    roundTrip("Titre", "# Titre\n\nContenu sans NL finale");
  });

  it("preserves CRLF line endings", () => {
    roundTrip("CRLF", "# CRLF\r\n\r\nLigne\r\n");
  });

  it("META-18a: preserves Unicode title and body", () => {
    roundTrip("Café — été", "# Café — été\n\nÉlève naïve 中文.\n");
  });

  it("META-18b: handles internal markdown fences via longer backtick run", () => {
    const body = "# Nested\n\n````\ninner fence\n````\n\nFin.\n";
    const fence = roundTrip("Nested", body);
    expect(fence.startsWith("`````")).toBe(true);
  });

  it("rejects tampered pair-sha256 on extract", () => {
    const title = "Tamper";
    const contentMarkdown = "# Tamper\n\nIntègre.\n";
    const digest = contentSha256(title, contentMarkdown);
    let fence = serializeProposalFence({ title, contentMarkdown, contentSha256: digest });
    fence = fence.replace(digest, "f".repeat(64));
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(false);
    if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH");
  });

  it("canonicalize refuses >100_001 chars", () => {
    const r = canonicalizeDocumentProposal({ title: "Huge", contentMarkdown: "a".repeat(100_001) });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("CONTENT_TOO_LARGE");
  });

  it("canonicalize refuses empty title", () => {
    const r = canonicalizeDocumentProposal({ title: "  ", contentMarkdown: "# x\n\ny\n" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("EMPTY_TITLE");
  });

  it("structured meta encodes exact char count", () => {
    const title = "Meta";
    const contentMarkdown = "# Meta\n\nExact.\n";
    const fence = serializeProposalFence({
      title,
      contentMarkdown,
      contentSha256: contentSha256(title, contentMarkdown),
    });
    expect(fence).toContain(`title-b64=${encodeTitleB64(title)}`);
    expect(fence).toContain(`chars=${contentMarkdown.length}`);
  });
});

describe("history-tools-sdk fitBudget (F-P1)", () => {
  it("returns payload and decrements remainingChars when within budget", () => {
    const scope = {
      pilotId: "pilot-1",
      preparationId: "prep-1",
      budget: { remainingCalls: 5, remainingChars: 10_000 },
    };
    const payload = {
      coverage: "FULL" as const,
      items: [{ id: "m1", content: "hello" }],
      nextCursor: null,
    };
    const before = scope.budget.remainingChars;
    const out = fitBudget(scope, payload);
    expect("items" in out && out.items.length).toBe(1);
    expect(scope.budget.remainingChars).toBeLessThan(before);
    expect(scope.budget.remainingChars).toBe(before - JSON.stringify(payload).length);
  });

  it("returns PARTIAL HISTORY_TOOL_BUDGET_EXHAUSTED when over budget", () => {
    const scope = {
      pilotId: "pilot-1",
      preparationId: "prep-1",
      budget: { remainingCalls: 1, remainingChars: 10 },
    };
    const payload = {
      coverage: "FULL" as const,
      items: [{ id: "m1", content: "x".repeat(500) }],
    };
    const out = fitBudget(scope, payload);
    expect(out).toMatchObject({
      coverage: "PARTIAL",
      reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
      items: [],
    });
    expect(scope.budget.remainingChars).toBe(10);
  });
});

describe("validateNoraTurnQualification — documentProposal", () => {
  it("accepts documentProposal >12k while replyDraft stays ≤12k", () => {
    const longDoc = `# Synthèse\n\n${"paragraphe détaillé.\n".repeat(900)}`;
    expect(longDoc.length).toBeGreaterThan(12_000);
    expect(longDoc.length).toBeLessThanOrEqual(100_000);

    const v = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "rédiger un document",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create doc",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Voici le brouillon court pour l’utilisateur.",
      documentProposal: {
        title: "Document long",
        contentMarkdown: longDoc,
      },
    });
    expect(v.ok).toBe(true);
  });
});