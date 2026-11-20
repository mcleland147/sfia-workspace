import { describe, expect, it } from "vitest";
import {
  composeSubjectSummaryFromCurrentKnowledge,
  editorialDisplayBullet,
  editorialStripPreamble,
  prioritizeAcquisForJournalDisplay,
  prioritizeOpenPointsForJournalDisplay,
  SUBJECT_SUMMARY_TARGET_MAX,
  KNOWLEDGE_BULLET_DISPLAY_MAX,
} from "@/domains/knowledge/journal-editorial";

describe("Journal editorial density (consolidation corrective)", () => {
  it("strips pilot narrative preamble without inventing content", () => {
    expect(
      editorialStripPreamble(
        "Selon le Pilote, Lille dispose de 12 portables dont 10 opérationnels.",
      ),
    ).toMatch(/^Lille dispose/);
  });

  it("display bullets stay within nominal 160 characters", () => {
    const long =
      "Lille possède effectivement douze ordinateurs portables dont le nombre opérationnel a été corrigé après vérification inventaire, ce qui modifie la capacité mobilisable pour les formations du lundi et implique aussi de tenir compte des prêts déjà consentis.";
    const bullet = editorialDisplayBullet(long);
    expect(bullet.length).toBeLessThanOrEqual(KNOWLEDGE_BULLET_DISPLAY_MAX + 1);
    expect(bullet.toLowerCase()).not.toMatch(/^selon le pilote/);
  });

  it("prioritizes distinctive acquis and keeps overflow accessible", () => {
    const rows = [
      { id: "1", statement: "Note courte" },
      { id: "2", statement: "Lille : 12 portables, 10 opérationnels actuellement." },
      { id: "3", statement: "Incident : 9 mobilisables pour 10 nécessaires." },
      { id: "4", statement: "Les portables sont interchangeables pour les formations." },
      { id: "5", statement: "L'accueil assure les remises ; responsabilité future ouverte." },
      { id: "6", statement: "Lyon : accord de principe confondu avec confirmation finale." },
      { id: "7", statement: "Autre détail secondaire sans chiffre particulier ici." },
      { id: "8", statement: "Encore un point périphérique de contexte général." },
    ];
    const { visible, overflow } = prioritizeAcquisForJournalDisplay(rows, 6);
    expect(visible).toHaveLength(6);
    expect(overflow.length).toBe(2);
    expect(visible.some((v) => v.statement.includes("10 opérationnels"))).toBe(true);
    expect(overflow.every((o) => !visible.some((v) => v.id === o.id))).toBe(true);
  });

  it("dedupes redundant open points in nominal view", () => {
    const rows = [
      { id: "a", statement: "Qui gère le support utilisateur ?" },
      { id: "b", statement: "Qui gère le support utilisateur ?" },
      { id: "c", statement: "Quel format d'atelier retenir ?" },
      { id: "d", statement: "Qui assure les prêts de matériel demain ?" },
      { id: "e", statement: "Faut-il un référent unique ?" },
    ];
    const { visible, overflow } = prioritizeOpenPointsForJournalDisplay(rows, 4);
    expect(visible.length).toBeLessThanOrEqual(4);
    expect(visible.filter((v) => v.statement.includes("support")).length).toBe(1);
    expect(overflow.length + visible.length).toBeGreaterThanOrEqual(4);
  });

  it("composes a bounded synthesis from CURRENT acquis without SUBJECT intent", () => {
    const summary = composeSubjectSummaryFromCurrentKnowledge({
      subjectTitle: "Parcours de réservation et responsabilités",
      acquisStatements: [
        "Lille : 12 portables, dont 10 opérationnels actuellement.",
        "Incident de Lille : 9 mobilisables pour 10 nécessaires, car un portable était prêté.",
        "Les portables sont interchangeables pour les formations concernées.",
      ],
      openPointStatements: ["Qui gère les prêts demain ?"],
    });
    expect(summary.length).toBeGreaterThan(80);
    expect(summary.length).toBeLessThanOrEqual(SUBJECT_SUMMARY_TARGET_MAX + 1);
    expect(summary).toMatch(/Lille|opérationnels|mobilisables/i);
    expect(summary).toMatch(/ouvert|prêts/i);
  });
});
