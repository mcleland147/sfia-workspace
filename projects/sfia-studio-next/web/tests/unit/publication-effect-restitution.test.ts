import { describe, expect, it, afterEach } from "vitest";
import {
  composePublicationEffectRestitution,
  publicationWriteGate,
  stripPublicationPreEffectHedges,
} from "@/domains/conversation/publication-effect-restitution";
import {
  parseRevisionNumberHint,
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";

const docs = [
  {
    document: { id: "doc_a", title: "Références externes — Enseignements de Chantiers360" },
    latestRevision: {
      id: "drev_a3",
      revisionNumber: 3,
      status: "AVAILABLE",
      contentMarkdown: "# v3",
    },
  },
  {
    document: { id: "doc_b", title: "Synthèse CampusFlow" },
    latestRevision: {
      id: "drev_b1",
      revisionNumber: 1,
      status: "AVAILABLE",
      contentMarkdown: "# b",
    },
  },
] as never;

describe("publication-effect-restitution", () => {
  const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
  const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

  afterEach(() => {
    if (prevProvider === undefined) delete process.env.STUDIO_GITHUB_PROVIDER;
    else process.env.STUDIO_GITHUB_PROVIDER = prevProvider;
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;
  });

  it("strips pre-effect Studio confirmation hedge", () => {
    const raw =
      "Je publie le document tel quel. La publication reste à confirmer par Studio.";
    expect(stripPublicationPreEffectHedges(raw)).not.toMatch(/reste à confirmer/i);
  });

  it("WRITE-off restitution is coherent — no premature success retained", () => {
    const out = composePublicationEffectRestitution({
      priorContent:
        "Je publie le document sur GitHub. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "REFUSED_WRITE_DISABLED",
        reason: "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary",
      },
    });
    expect(out).toMatch(/n'a pas été effectuée/i);
    expect(out).not.toMatch(/reste à confirmer/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).toMatch(/ne sont pas disponibles/i);
  });

  it("COMPLETED restitution confirms effect without inventing merge", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Document prêt. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "COMPLETED",
        documentTitle: "Références externes",
        revisionNumber: 2,
        repositoryFullName: "acme/demo",
        publicationBranch: "sfia/pub/demo",
      },
    });
    expect(out).toMatch(/a été publié/i);
    expect(out).toMatch(/révision 2/);
    expect(out).toMatch(/Aucune fusion/i);
    expect(out).not.toMatch(/reste à confirmer/i);
  });

  it("UNKNOWN does not announce success or definitive refusal", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub.",
      effect: { attempted: true, outcome: "UNKNOWN" },
    });
    expect(out).toMatch(/encore en vérification/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/a été publié/i);
    expect(out).not.toMatch(/n'a pas été effectuée/i);
  });

  it("null effect strips premature success claims (no false publication)", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document. La publication reste à confirmer par Studio.",
      effect: null,
    });
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/reste à confirmer/i);
    expect(out).not.toMatch(/a été publié/i);
  });

  it("NOT_ATTEMPTED states intention without claiming execution", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub.",
      effect: {
        attempted: true,
        outcome: "NOT_ATTEMPTED",
        reason: "Intention reconnue — aucun effet Studio",
      },
    });
    expect(out).toMatch(/Aucune publication n'a été tentée/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/a été publié/i);
  });

  it("publicationWriteGate refuses REAL without documentary", () => {
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(false);

    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    expect(publicationWriteGate().allowed).toBe(true);

    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(true);
  });
});

describe("resolvePublicationDocumentTarget — explicit precedence", () => {
  it("parses revision number hints", () => {
    expect(parseRevisionNumberHint("Références externes v2")).toBe(2);
    expect(parseRevisionNumberHint("révision 2")).toBe(2);
    expect(parseRevisionNumberHint("doc_a")).toBeNull();
  });

  it("explicit document B wins over focus A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.source).toBe("explicit");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("explicit document B wins over same-turn D4 A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: {
        status: "AVAILABLE",
        documentId: "doc_a",
        revisionId: "drev_a3",
        revisionNumber: 3,
        title: "A",
      },
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("explicit A v2 requests historical revision (not silent latest v3)", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360 v2",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.requestedRevisionNumber).toBe(2);
      expect(t.revisionId).toBeNull();
      expect(t.revisionNumber).toBe(2);
    }
  });

  it("explicit missing document is NOT_FOUND — no sole fallback", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Document fantôme inexistant XYZ",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) expect(t.reason).toBe("NOT_FOUND");
  });

  it("ambiguous titles require clarification", () => {
    const amb = [
      {
        document: { id: "doc_1", title: "Notes projet" },
        latestRevision: {
          id: "drev_1",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "a",
        },
      },
      {
        document: { id: "doc_2", title: "Notes projet bis" },
        latestRevision: {
          id: "drev_2",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "b",
        },
      },
    ];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: amb as never,
      documentHint: "Notes projet",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.candidates?.length).toBe(2);
    }
  });

  it("sole document without explicit ref is allowed", () => {
    const sole = [docs[0]];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: sole as never,
      documentHint: null,
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.source).toBe("sole_document");
      expect(t.revisionId).toBe("drev_a3");
    }
  });

  it("objectRef doc_id selects exact document", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: null,
      objectRef: "doc_b",
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.source).toBe("explicit");
    }
  });

  it("A: objectRef=doc_A + documentHint title B → AMBIGUOUS (no silent A)", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: "doc_a",
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.detail).toMatch(/EXPLICIT_REF_CONFLICT/);
    }
  });

  it("B: objectRef=doc_A + documentHint title A → concordance A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360",
      objectRef: "doc_a",
      focus: {
        documentId: "doc_b",
        sourceRevisionId: "drev_b1",
        sourceRevisionNumber: 1,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.source).toBe("explicit");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("C: objectRef=doc_A + documentHint=doc_B → AMBIGUOUS no effect target", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "doc_b",
      objectRef: "doc_a",
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.detail).toBe("EXPLICIT_REF_CONFLICT_DOCUMENT_ID");
    }
  });

  it("D: documentHint v2 + objectRef revisionId of v3 → keeps both for D4 mismatch", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360 v2",
      objectRef: "drev_a3",
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.revisionId).toBe("drev_a3");
      expect(t.requestedRevisionNumber).toBe(2);
    }
  });

  it("F: explicit B never yields focus A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) expect(t.documentId).toBe("doc_b");
  });

  it("H: near titles do not arbitrary-match", () => {
    const near = [
      {
        document: { id: "doc_x", title: "Synthèse Campus" },
        latestRevision: {
          id: "drev_x",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "x",
        },
      },
      {
        document: { id: "doc_y", title: "Synthèse CampusFlow" },
        latestRevision: {
          id: "drev_y",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "y",
        },
      },
    ];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: near as never,
      documentHint: "Synthèse Campus",
      objectRef: null,
      focus: null,
    });
    // Exact or unique containment — must not silently pick CampusFlow when both match loosely
    if (t.ok) {
      expect(t.documentId).toBe("doc_x");
    } else {
      expect(["AMBIGUOUS", "NOT_FOUND"]).toContain(t.reason);
    }
  });
});
