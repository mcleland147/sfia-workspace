import { describe, expect, it } from "vitest";
import {
  explicitDocumentIntent,
  hasDocumentaryWriteSignal,
  qualifyDocumentAct,
  extractContractualDocumentProposal,
} from "@/domains/conversation/document-act";
import {
  contentSha256,
  encodeTitleB64,
  parseFenceMeta,
  serializeProposalFence,
} from "@/domains/conversation/document-command";

describe("document-act SEM-02 — lexical router retired", () => {
  it("qualifyDocumentAct is fail-closed stub", () => {
    expect(qualifyDocumentAct("Crée un document intitulé Compte rendu.").kind).toBe("NONE");
    expect(qualifyDocumentAct("Révise la section 2 du document.").kind).toBe("NONE");
    expect(hasDocumentaryWriteSignal("Crée un document.")).toBe(false);
    expect(explicitDocumentIntent("Crée un document.")).toBe(false);
  });

  it("technical sfia-document extract remains available", () => {
    const raw = [
      "Voici la proposition:",
      "```sfia-document",
      "# Titre",
      "Corps",
      "```",
    ].join("\n");
    const extracted = extractContractualDocumentProposal(raw);
    expect(extracted.ok).toBe(true);
    if (extracted.ok) {
      expect(extracted.content).toMatch(/# Titre/);
    }
  });

  describe("parseFenceMeta via extract (P0-A)", () => {
    it("partial title-b64 never degrades to LEGACY extract", () => {
      const info = `sfia-document title-b64=${encodeTitleB64("Seul")}`;
      expect(parseFenceMeta(info)).toEqual({
        kind: "INVALID",
        reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
      });
      const raw = `\`\`\`${info}\n# Seul\n\nCorps.\n\`\`\`\n`;
      const extracted = extractContractualDocumentProposal(raw);
      expect(extracted.ok).toBe(false);
      if (!extracted.ok) {
        expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_METADATA_INVALID");
      }
    });
  });

  describe("F02 contractual fence extract", () => {
    it("reads historical fence without structured metadata", () => {
      const raw =
        "Préambule.\n\n```sfia-document\n# Historique\n\n## Section\n\nCorps lisible sans meta structurée.\n```\n";
      const extracted = extractContractualDocumentProposal(raw);
      expect(extracted.ok).toBe(true);
      if (extracted.ok) {
        expect(extracted.title).toBe("Historique");
        expect(extracted.content).toContain("Corps lisible");
      }
    });

    it("refuses H1 mismatch against structured title meta", () => {
      const title = "Attendu";
      const wrongBody = "# Autre\n\nCorps.\n";
      const digest = contentSha256(title, wrongBody);
      const broken = [
        `\`\`\`sfia-document title-b64=${encodeTitleB64(title)} chars=${wrongBody.length} pair-sha256=${digest}`,
        wrongBody,
        "```",
        "",
      ].join("\n");
      const extracted = extractContractualDocumentProposal(broken);
      expect(extracted.ok).toBe(false);
      if (!extracted.ok) expect(extracted.reason).toBe("DOCUMENT_PROPOSAL_TITLE_MISMATCH");
    });

    it("round-trips via serializeProposalFence helper", () => {
      const title = "Acte";
      const content = "# Acte\n\n```\nBloc interne\n```\n";
      const fence = serializeProposalFence({
        title,
        contentMarkdown: content,
        contentSha256: contentSha256(title, content),
      });
      const extracted = extractContractualDocumentProposal(fence);
      expect(extracted.ok).toBe(true);
      if (extracted.ok) expect(extracted.content).toBe(content);
    });
  });
});
