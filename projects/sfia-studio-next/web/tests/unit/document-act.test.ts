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
  leadingSectionNumber,
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

describe("document-act CampusFlow-like numbered ATX (R06-F root cause)", () => {
  /** Sanitized structural twin of RECETTE v1 — numbered ATX + Source 2 + 3.2 sub + ordered list. */
  const campusLike = `# Références externes — Enseignements de Chantiers360

## 1. Contexte et objectif

Contexte A.

## 2. Sources consultées et provenance disponible

### Source 1 — Première consultation : référence à compléter

| Élément | Provenance disponible |
| --- | --- |
| Chemin | a/b.md |
| Limite | incompleteness |

### Source 2 — Definition of Done de Chantiers360

| Élément | Provenance vérifiée |
| --- | --- |
| Blob SHA | blob_aaa |
| Commit SHA | commit_bbb |

## 3. Enseignements utiles

### 3.1. Qualité

Q.

### 3.2. Traçabilité

T.

## 4. Limites de transposition

Limites.

## 5. Points à clarifier par le Pilote

1. **Première référence :** question A ?
2. **Réservation reconnue :** question B ?
3. **Concurrence :** question C ?

## Résultat de l’opération

| Élément | Résultat |
| --- | --- |
| X | Y |
`;

  it("leadingSectionNumber ignores Source 2 / 3.2 / list items", () => {
    expect(leadingSectionNumber("2. Sources consultées et provenance disponible")).toBe("2");
    expect(leadingSectionNumber("Section 2 — Analyse")).toBe("2");
    expect(leadingSectionNumber("Source 2 — Definition of Done de Chantiers360")).toBeNull();
    expect(leadingSectionNumber("3.2. Traçabilité")).toBeNull();
    expect(leadingSectionNumber("Résultat de l’opération")).toBeNull();
  });

  it("resolves section 2 uniquely despite Source 2 and 3.2 (repro R06-F)", () => {
    const proposed = `## 2. Sources consultées et provenance disponible

### Source 1 — Première consultation : référence à compléter

| Élément | Provenance disponible |
| --- | --- |
| Blob SHA | blob_fixed |
| Commit SHA | commit_fixed |

### Source 2 — Definition of Done de Chantiers360

Conservé.
`;
    // Before corrective: hint "2" matched Source 2 / 3.2 via \\b2\\b → AMBIGUOUS.
    const merged = applyTargetedSectionRevision(campusLike, proposed, "2");
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(assertSectionScope(campusLike, merged.content, "2")).toEqual({ ok: true });
    expect(merged.content).toContain("blob_fixed");
    expect(merged.content).toContain("## 1. Contexte et objectif");
    expect(merged.content).toContain("## 3. Enseignements utiles");
    expect(merged.content).toContain("### 3.2. Traçabilité");
    expect(merged.content).toContain("2. **Réservation reconnue :** question B ?");
    expect(merged.content.slice(0, campusLike.indexOf("\n\n### Source 1"))).toBe(
      campusLike.slice(0, campusLike.indexOf("\n\n### Source 1")),
    );
  });

  it("accepts section 2 with full title hint and Section-prefixed proposal", () => {
    const proposed = `## Section 2 — Sources consultées et provenance disponible

Nouveau corps section 2.
`;
    expect(applyTargetedSectionRevision(campusLike, proposed, "2").ok).toBe(true);
    expect(
      applyTargetedSectionRevision(
        campusLike,
        proposed,
        "Sources consultées et provenance disponible",
      ).ok,
    ).toBe(true);
  });

  it("refuses missing / duplicate leading section 2", () => {
    const missing = campusLike.replace("## 2. Sources consultées et provenance disponible", "## 9. Autre");
    expect(applyTargetedSectionRevision(missing, "## 2. X\n\ny\n", "2").ok).toBe(false);
    const dup = `${campusLike}\n## 2. Doublon structurel\n\nz\n`;
    expect(applyTargetedSectionRevision(dup, "## 2. X\n\ny\n", "2").ok).toBe(false);
  });

  it("does not treat numbered list or table cell as section heading", () => {
    const headings = locateSections(campusLike).map((s) => s.heading);
    expect(headings.some((h) => /^2\. \*\*Réservation/.test(h))).toBe(false);
    expect(headings.filter((h) => leadingSectionNumber(h) === "2")).toEqual([
      "2. Sources consultées et provenance disponible",
    ]);
  });

  it("refuses fence-hidden fake section 2", () => {
    const fenced = `# Doc

\`\`\`
## 2. Hidden
body
\`\`\`

## 1. Real

x
`;
    expect(applyTargetedSectionRevision(fenced, "## 2. X\n\ny\n", "2").ok).toBe(false);
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

  it("FAILED ACK: tool read-only claim is not the cause when Studio refused", () => {
    const out = composeDocumentTurnMessage(
      "Les outils disponibles sont en lecture seule.\n\n" +
        "Je ne peux pas exécuter l'enregistrement dans D4.\n\n" +
        "Proposition utile pour la section 2.",
      {
        act: "REVISE",
        status: "FAILED",
        reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
        documentId: "doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2",
        baseRevisionId: "drev_c07ca162-faa4-48f5-b705-018e41ae88d9",
      },
    );
    expect(out).toMatch(/Résultat applicatif D4/);
    expect(out).toMatch(/SECTION_AMBIGUOUS_OR_MISSING_IN_BASE/);
    expect(out).toMatch(/Studio a exécuté l'acte documentaire/);
    expect(out).toContain("Proposition utile pour la section 2.");
    expect(out).not.toMatch(/outils disponibles sont en lecture seule/i);
    expect(out).not.toMatch(/je ne peux pas exécuter l'enregistrement/i);
    expect(
      hasCompetingTransactionalClaim(out, {
        act: "REVISE",
        status: "FAILED",
        reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
      }),
    ).toBe(false);
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
