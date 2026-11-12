import { describe, expect, it } from "vitest";
import {
  explicitDocumentIntent,
  hasDocumentaryWriteSignal,
  qualifyDocumentAct,
  extractContractualDocumentProposal,
} from "@/domains/conversation/document-act";

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
});
