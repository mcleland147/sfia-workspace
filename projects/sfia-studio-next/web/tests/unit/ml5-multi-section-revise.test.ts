import { describe, expect, it } from "vitest";
import {
  applyTargetedSectionRevision,
  assertSectionScope,
  expandSectionHints,
  extractSectionHintFromPilotText,
  extractSectionHintFromProposalMarkdown,
  formatDocumentEffectAck,
  formatNumericSectionHint,
} from "@/domains/conversation/document-act";

const base = `# RoomBooking — Conception fonctionnelle V1

## 1. Objectif et périmètre

Objectif inchangé.

## 2. Parcours et règles de gestion

1. Consulter.
2. Point à confirmer : tampon entre créneaux.

## 3. Scénarios de recette

| Cas | Attendu |
|---|---|
| A | OK |
| B | OK |
| C | OK |
| D | OK |
| E | OK |

## 4. Suite du projet

Suite inchangée.
`;

const proposalTwoSections = `## 2. Parcours et règles de gestion

1. Consulter.
2. Créneaux contigus autorisés sans tampon.

## 3. Scénarios de recette

| Cas | Attendu |
|---|---|
| A | OK |
| B | OK |
| C | OK |
| D | OK |
| E | OK |
| Contigus | Une salle 14–15 h puis 15–16 h est acceptée. |
`;

describe("expandSectionHints", () => {
  it("keeps single hints", () => {
    expect(expandSectionHints("2")).toEqual(["2"]);
    expect(expandSectionHints("section 2 — Parcours")).toEqual(["section 2 — Parcours"]);
  });

  it("expands Sections 2 et 3", () => {
    expect(expandSectionHints("Sections 2 et 3")).toEqual(["2", "3"]);
  });

  it("expands comma lists", () => {
    expect(expandSectionHints("sections 2, 3 et 4")).toEqual(["2", "3", "4"]);
  });

  it("recovers natural Pilote multi-section wording", () => {
    expect(
      extractSectionHintFromPilotText(
        "Intègre cette règle dans la section 2 et ajoute le scénario correspondant dans la section 3.",
      ),
    ).toEqual("Sections 2 et 3");
    expect(formatNumericSectionHint(["3", "2", "2"])).toEqual("Sections 2 et 3");
  });

  it("recovers section numbers from partial proposal markdown", () => {
    expect(extractSectionHintFromProposalMarkdown(proposalTwoSections)).toEqual("Sections 2 et 3");
  });
});

describe("applyTargetedSectionRevision multi-section", () => {
  it("RoomBooking discriminant: sections 2+3, 1 and 4 unchanged", () => {
    const merged = applyTargetedSectionRevision(base, proposalTwoSections, "Sections 2 et 3");
    expect(merged.ok).toBe(true);
    if (!merged.ok) throw new Error(merged.reason);
    expect(assertSectionScope(base, merged.content, "Sections 2 et 3")).toEqual({ ok: true });
    expect(merged.content).toContain("Objectif inchangé.");
    expect(merged.content).toContain("Suite inchangée.");
    expect(merged.content).toContain("Créneaux contigus autorisés sans tampon.");
    expect(merged.content).toContain("Contigus");
    expect(merged.content).not.toContain("Point à confirmer");
    // six scenario rows (header + 6) — at least the new contiguity row
    expect(merged.content).toMatch(/Contigus \| Une salle/);
  });

  it("single section still works", () => {
    const merged = applyTargetedSectionRevision(
      base,
      "## 2. Parcours et règles de gestion\n\nSeul 2.\n",
      "2",
    );
    expect(merged.ok).toBe(true);
    if (!merged.ok) throw new Error(merged.reason);
    expect(merged.content).toContain("Seul 2.");
    expect(merged.content).toContain("## 3. Scénarios");
  });

  it("refuses missing target", () => {
    const merged = applyTargetedSectionRevision(base, proposalTwoSections, "Sections 2 et 9");
    expect(merged.ok).toBe(false);
    if (merged.ok) throw new Error("expected fail");
    expect(merged.reason).toBe("SECTION_AMBIGUOUS_OR_MISSING_IN_BASE");
  });
});

describe("formatDocumentEffectAck honesty", () => {
  it("does not claim unqualified write for section ambiguity", () => {
    const ack = formatDocumentEffectAck({
      act: "REVISE",
      status: "NOT_EXECUTED",
      reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
    });
    expect(ack).toMatch(/révision ciblée/i);
    expect(ack).not.toMatch(/n'a pas été qualifiée pour une écriture/);
  });
});
