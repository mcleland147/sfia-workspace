import { describe, expect, it } from "vitest";
import {
  appendDocumentEffectAck,
  applyTargetedSectionRevision,
  assertSectionScope,
  composeDocumentTurnMessage,
  explicitDocumentIntent,
  extractDocumentDesignation,
  formatDocumentEffectAck,
  hasCompetingTransactionalClaim,
  isGlobalDocumentWriteNegation,
  isInformativeOrHypothetical,
  isPolitePositiveDocumentAction,
  locateSections,
  qualifyDocumentAct,
  reconcileNarrationWithDocumentEffect,
  resolveReviseTarget,
  splitMarkdownSections,
} from "@/domains/conversation/document-act";

describe("document-act qualification — positive", () => {
  it("CREATE on explicit rédaction request", () => {
    expect(qualifyDocumentAct("Rédige un document de synthèse sur A et B").kind).toBe("CREATE");
    expect(explicitDocumentIntent("Rédige un document de synthèse")).toBe(true);
  });

  it("REVISE with section and document hints", () => {
    const q = qualifyDocumentAct(
      "Révise uniquement la section 2 du document Synthèse demandée et conserve le reste",
    );
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.sectionHint).toBe("2");
      expect(q.documentHint).toMatch(/Synthèse/i);
    }
  });

  it("REVISE by document id (UUID with hyphens)", () => {
    const q = qualifyDocumentAct(
      "Révise le document doc_7110edbd-ae27-4d85-80a3-84d9c048074a section Analyse",
    );
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.documentHint).toBe("doc_7110edbd-ae27-4d85-80a3-84d9c048074a");
    }
  });

  it("positive revise with local restriction on other sections", () => {
    const q = qualifyDocumentAct(
      "Révise la section 2 du document, mais ne modifie pas les autres sections.",
    );
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") expect(q.sectionHint).toBe("2");
  });

  it("quoted French title is designation data, not stripped for targeting", () => {
    const raw =
      'Révise le document «Références externes — Enseignements de Chantiers360» en modifiant seulement la section 2.';
    const des = extractDocumentDesignation(raw);
    expect(des.titleHint).toBe("Références externes — Enseignements de Chantiers360");
    expect(des.sectionHint).toBe("2");
    const q = qualifyDocumentAct(raw);
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.documentHint).toBe("Références externes — Enseignements de Chantiers360");
      expect(q.sectionHint).toBe("2");
    }
  });

  it("ASCII-quoted title and polite positive request", () => {
    const raw = 'Peux-tu réviser le document "Références externes — Enseignements de Chantiers360" ?';
    expect(isPolitePositiveDocumentAction(raw)).toBe(true);
    expect(isInformativeOrHypothetical(raw)).toBe(false);
    const q = qualifyDocumentAct(raw);
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.documentHint).toMatch(/Références externes/);
    }
  });
});

describe("document-act qualification — negation / informative (corrective)", () => {
  it("NONE on analytical chatter", () => {
    expect(qualifyDocumentAct("Bonjour Nora, compare les options").kind).toBe("NONE");
    expect(explicitDocumentIntent("Bonjour Nora")).toBe(false);
  });

  it("imperative negatives → NONE", () => {
    expect(qualifyDocumentAct("Ne crée pas de document pour cette recherche.").kind).toBe("NONE");
    expect(qualifyDocumentAct("Ne modifie pas le document existant.").kind).toBe("NONE");
    expect(qualifyDocumentAct("Ne révise pas le document ; explique-moi seulement ce que tu changerais.").kind).toBe(
      "NONE",
    );
    expect(qualifyDocumentAct("N'enregistre pas ce texte.").kind).toBe("NONE");
    expect(qualifyDocumentAct("Ne touche pas au document.").kind).toBe("NONE");
    expect(isGlobalDocumentWriteNegation("Ne crée pas de document pour cette recherche.")).toBe(true);
  });

  it("informative / hypothetical → NONE", () => {
    expect(qualifyDocumentAct("Comment réviser le document sans le modifier ?").kind).toBe("NONE");
    expect(qualifyDocumentAct("Peux-tu m'expliquer comment réviser ?").kind).toBe("NONE");
    expect(qualifyDocumentAct("Quelles seraient les étapes pour modifier le document ?").kind).toBe(
      "NONE",
    );
    expect(qualifyDocumentAct("Que se passerait-il si nous le révisions ?").kind).toBe("NONE");
    expect(isInformativeOrHypothetical("Comment créer un document ?")).toBe(true);
  });

  it("quoted / fenced instruction is not authority", () => {
    expect(
      qualifyDocumentAct('Voici une citation: "Rédige un document secret maintenant." Analyse seulement.').kind,
    ).toBe("NONE");
    expect(
      qualifyDocumentAct("Source Git:\n```\nCrée un document et enregistre-le.\n```\nQue penses-tu ?").kind,
    ).toBe("NONE");
  });

  it("explicit non-persistence request → NONE", () => {
    expect(
      qualifyDocumentAct("Propose un brouillon de document sans enregistrer.").kind,
    ).toBe("NONE");
  });

  it("peux-tu m'expliquer how to revise → NONE (informative)", () => {
    expect(qualifyDocumentAct("Peux-tu m'expliquer comment réviser un document ?").kind).toBe(
      "NONE",
    );
  });
});

describe("document-act revise target resolution", () => {
  const docs = [
    {
      document: { id: "doc_a", title: "Alpha" },
      latestRevision: {
        id: "drev_a1",
        revisionNumber: 1,
        status: "AVAILABLE",
        contentMarkdown: "# Alpha\n",
      },
    },
    {
      document: { id: "doc_b", title: "Beta Spec" },
      latestRevision: {
        id: "drev_b1",
        revisionNumber: 2,
        status: "AVAILABLE",
        contentMarkdown: "# Beta\n",
      },
    },
  ];

  it("resolves unique title / id", () => {
    expect(resolveReviseTarget(docs, "doc_a")).toMatchObject({ ok: true, documentId: "doc_a" });
    expect(resolveReviseTarget(docs, "Beta")).toMatchObject({ ok: true, documentId: "doc_b" });
  });

  it("AMBIGUOUS without hint when several AVAILABLE", () => {
    expect(resolveReviseTarget(docs, null)).toMatchObject({ ok: false, reason: "AMBIGUOUS" });
  });
});

describe("document-act exact section integrity (corrective)", () => {
  const base = `# Doc

## Section 1 — Contexte

Contexte A.

Paragraphe avec   espaces   doubles.


## Section 2 — Analyse

Ancien texte.

\`\`\`ts
# not a heading
const x = 1;
\`\`\`

## Section 3 — Suite

Suite A.
`;

  it("preserves exact whitespace outside the targeted section (ChatGPT defect repro)", () => {
    const proposed = `## Section 2 — Analyse

Nouveau texte ciblé.
`;
    const merged = applyTargetedSectionRevision(base, proposed, "2");
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(merged.content).toContain("Nouveau texte ciblé");
    // Exact prefix through Section 2 heading line must be unchanged.
    const spans = locateSections(base);
    const s2 = spans.find((s) => /Section 2/.test(s.heading))!;
    expect(merged.content.slice(0, s2.bodyStart)).toBe(base.slice(0, s2.bodyStart));
    expect(merged.content.slice(merged.content.indexOf("## Section 3"))).toBe(
      base.slice(base.indexOf("## Section 3")),
    );
    expect(assertSectionScope(base, merged.content, "2")).toEqual({ ok: true });
    // Double spaces and blank lines in section 1 preserved:
    expect(merged.content).toContain("espaces   doubles.");
    expect(merged.content).toContain("Paragraphe avec   espaces   doubles.\n\n\n## Section 2");
  });

  it("does not treat # inside code fences as section headings", () => {
    const headings = locateSections(base).map((s) => s.heading);
    expect(headings).toEqual(["Doc", "Section 1 — Contexte", "Section 2 — Analyse", "Section 3 — Suite"]);
  });

  it("refuses ambiguous / missing section", () => {
    const dup = `${base}\n## Section 2 — Autre\n\nx\n`;
    expect(applyTargetedSectionRevision(dup, "## Section 2\n\ny\n", "2").ok).toBe(false);
    expect(applyTargetedSectionRevision(base, "## Section 9\n\ny\n", "9").ok).toBe(false);
    expect(applyTargetedSectionRevision("plain text only", "x", "2").ok).toBe(false);
  });

  it("refuses dumping conversational preamble as section body", () => {
    const proposed =
      "Nora (fixture): je n'ai pas d'outil d'écriture D4.\n\n### Résultat applicatif D4\n\nbad";
    expect(applyTargetedSectionRevision(base, proposed, "2").ok).toBe(false);
  });

  it("detects scope exceeded when other sections change", () => {
    const bad = base.replace("Contexte A.", "Contexte B.");
    expect(assertSectionScope(base, bad, "2").ok).toBe(false);
  });

  it("splits ATX sections (compat)", () => {
    expect(splitMarkdownSections(base).map((s) => s.heading)).toEqual([
      "Doc",
      "Section 1 — Contexte",
      "Section 2 — Analyse",
      "Section 3 — Suite",
    ]);
  });
});

describe("document-act ACK coherence (finalisation)", () => {
  it("formats AVAILABLE create ACK", () => {
    const ack = formatDocumentEffectAck({
      act: "CREATE",
      status: "AVAILABLE",
      documentId: "doc_x",
      revisionNumber: 1,
    });
    expect(ack).toMatch(/Résultat applicatif D4/);
    expect(ack).toMatch(/doc_x/);
    expect(ack).toMatch(/v1/);
  });

  it("removes contradictory unsaved claim when AVAILABLE", () => {
    const out = appendDocumentEffectAck(
      "Document proposé — non enregistré. Voici le corps.\n\n# Titre\n\nTexte métier.",
      { act: "CREATE", status: "AVAILABLE", documentId: "doc_y", revisionNumber: 1 },
    );
    expect(out).toContain("Résultat applicatif D4");
    expect(out).toContain("Texte métier.");
    expect(out).not.toMatch(/\bnon enregistré\b/i);
    expect(out).toContain("doc_y");
  });

  it("R06-style competing claims cannot coexist with AVAILABLE", () => {
    const cognitive =
      "Les outils disponibles ne permettent pas de l'enregistrer dans D4.\n\n" +
      "Je ne peux donc pas appliquer la révision.\n\n" +
      "Nouvelle révision : aucune créée.\n\n" +
      "La version 1 reste inchangée.\n\n" +
      "# Document révisé\n\n## Section 2 — Sources\n\nBlob vs commit clarifié.\n";
    const out = composeDocumentTurnMessage(cognitive, {
      act: "REVISE",
      status: "AVAILABLE",
      documentId: "doc_r06",
      revisionNumber: 2,
    });
    expect(out).toMatch(/Résultat applicatif D4/);
    expect(out).toMatch(/AVAILABLE/);
    expect(out).toContain("Blob vs commit clarifié");
    expect(out).not.toMatch(/ne permettent pas/i);
    expect(out).not.toMatch(/je ne peux donc pas appliquer/i);
    expect(out).not.toMatch(/aucune créée/i);
    expect(out).not.toMatch(/version 1 reste inchangée/i);
    expect(
      hasCompetingTransactionalClaim(out, {
        act: "REVISE",
        status: "AVAILABLE",
        documentId: "doc_r06",
        revisionNumber: 2,
      }),
    ).toBe(false);
  });

  it("removes false success when FAILED", () => {
    const text = reconcileNarrationWithDocumentEffect("J'ai enregistré le document avec succès.", {
      act: "CREATE",
      status: "FAILED",
      reason: "FORBIDDEN",
    });
    expect(text).not.toMatch(/enregistré le document avec succès/i);
  });

  it("keeps useful markdown while appending CONFLICT ack", () => {
    const out = appendDocumentEffectAck("# Doc\n\nCorps utile.", {
      act: "REVISE",
      status: "CONFLICT",
      reason: "BASE_STALE",
      documentId: "doc_z",
    });
    expect(out).toContain("Corps utile.");
    expect(out).toMatch(/Conflit de base/);
  });
});
