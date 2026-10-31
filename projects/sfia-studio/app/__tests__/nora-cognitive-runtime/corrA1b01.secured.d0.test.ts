/**
 * CORR-A1B-01 secured — A1/B narrative vs presentation contract.
 * DETERMINISTIC only — ZERO OpenAI LIVE — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  composeCanonicalFromPresentation,
  deserializeNoraAdaptivePresentation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const tmpDirs: string[] = [];
afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function richComparisonPresentation() {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: "LUMEN · cadrage",
    title: "Comparer les formats et leurs effets possibles",
    lead: null,
    blocks: [
      {
        kind: "plain",
        text: "Les éléments confirmés sont l'objectif d'initiation et le public adulte débutant.",
      },
      {
        kind: "comparison_table",
        title: "Trois possibilités",
        columns: ["Format", "Avantages", "Limites", "Effets"],
        rows: [
          [
            "Atelier court",
            "Simple à organiser",
            "Peu de répétition",
            "Première prise en main",
          ],
          [
            "Parcours plusieurs séances",
            "Progression par étapes",
            "Créneaux récurrents",
            "Autonomie progressive",
          ],
          [
            "Accompagnement long",
            "Personnalisation",
            "Organisation lourde",
            "Suivi individualisé",
          ],
        ],
      },
      {
        kind: "recommendation",
        title: "Piste privilégiée",
        statement:
          "Je privilégierais un parcours structuré sur plusieurs séances, sous réserve des moyens du centre.",
        disclaimer: null,
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: null,
  })!;
}

describe("CORR-A1B-01 — relation classification", () => {
  it("CAS A — equivalence → equivalent", () => {
    const p = richComparisonPresentation();
    const composed = composeCanonicalFromPresentation(p);
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: composed,
        presentation: p,
      }).kind,
    ).toBe("equivalent");
  });

  it("CAS B — guidance-backed ORIENT + rich presentation → complementary", () => {
    const p = richComparisonPresentation();
    const guidance =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    const rel = classifyNarrativePresentationRelation({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(rel.kind).toBe("complementary");
  });

  it("CAS B — ORIENT shape without guidance provenance → divergent (not presumed complementary)", () => {
    const p = richComparisonPresentation();
    const orient =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: orient,
        presentation: p,
      }).kind,
    ).toBe("divergent");
  });

  it("CAS B unsafe — abandon recommendation is divergent even with Je te propose", () => {
    const p = richComparisonPresentation();
    const opposing =
      "Je te propose d'abandonner le parcours structuré sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
        conversationGuidanceStatement: opposing,
      }).kind,
    ).toBe("divergent");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("abandonner");
    expect(built.contentCore).toContain("Trois possibilités");
  });

  it("CAS B unsafe — opposing recommendation is divergent not complementary", () => {
    const p = richComparisonPresentation();
    const opposing =
      "Je te propose au contraire l'atelier court, pas le parcours sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("atelier court");
    expect(built.contentCore).toContain("Trois possibilités");
  });

  it("CAS C — long distinct narrative → divergent", () => {
    const p = richComparisonPresentation();
    const narrative = [
      "Voici une autre analyse complètement distincte et longue.",
      "Le format court est en réalité le seul viable pour ce centre.",
      "Le parcours multi-séances est trop coûteux et doit être abandonné d'emblée.",
      "Aucune hypothèse alternative n'est digne d'examen dans ce contexte.",
    ].join(" ");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: narrative,
        presentation: p,
      }).kind,
    ).toBe("divergent");
  });

  it("CAS A8 — historical divergent read-path shows both versions", () => {
    const p = richComparisonPresentation();
    const shortOpposing =
      "Je te propose au contraire l'atelier court.";
    const d = resolveAdaptiveAssistantRender({
      content: shortOpposing,
      presentation: p,
    });
    expect(d.mode).toBe("plain");
    expect(d.presentation).toBeNull();
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(d.plainText).toContain("Trois possibilités");
    expect(d.plainText).toContain("atelier court");
  });

  it("CAS D — invalid / absent presentation → narrative_only or empty", () => {
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: "Texte seul.",
        presentation: null,
      }).kind,
    ).toBe("narrative_only");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: "",
        presentation: null,
      }).kind,
    ).toBe("empty");
  });
});

describe("CORR-A1B-01 — durable + render", () => {
  it("CAS A — durable A1 compose; render adaptive", () => {
    const p = richComparisonPresentation();
    const composed = composeCanonicalFromPresentation(p);
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: composed,
      presentation: p,
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toBe(composed);
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
  });

  it("CAS B LUMEN-shaped — guidance-backed fold keeps comparison + continuation once", () => {
    const p = richComparisonPresentation();
    const continuation =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: continuation,
      presentation: p,
      conversationGuidanceStatement: continuation,
    });
    expect(built.usedA1).toBe(true);
    expect(built.relation).toBe("complementary");
    expect(built.contentCore).toContain("Trois possibilités");
    expect(built.contentCore).toContain("usages du quotidien");
    const matches = built.contentCore.match(/usages du quotidien/g) ?? [];
    expect(matches.length).toBe(1);

    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
    expect(
      d.presentation?.blocks.some(
        (b) =>
          (b.kind === "question" || b.kind === "plain") &&
          b.text.includes("usages du quotidien"),
      ),
    ).toBe(true);
  });

  it("CAS B historical read-path without guidance — preserves both versions (no presumed A1)", () => {
    const p = richComparisonPresentation();
    const short =
      "Je te propose de poursuivre le cadrage en confrontant ces formats aux disponibilités du centre.";
    const d = resolveAdaptiveAssistantRender({
      content: short,
      presentation: p,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(d.plainText).toContain("Trois possibilités");
    expect(d.plainText).toContain("poursuivre le cadrage");
  });

  it("CAS C — divergent fail-closed preserves both versions; no A1 promotion", () => {
    const p = richComparisonPresentation();
    const narrative = [
      "Analyse narrative alternative longue et distincte.",
      "Je conclus que seul l'atelier court est acceptable.",
      "Le parcours multi-séances doit être écarté sans discussion.",
      "Cette conclusion remplace toute comparaison structurée antérieure.",
    ].join(" ");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: narrative,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.presentation).toBeNull();
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("Trois possibilités");
    expect(built.contentCore).toContain("atelier court est acceptable");
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("plain");
    expect(d.presentation).toBeNull();
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("CAS D — absent presentation keeps narrative plain", () => {
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: "Réponse courte seule.",
      presentation: null,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toBe("Réponse courte seule.");
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: null,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toBe("Réponse courte seule.");
  });

  it("persistence isolated SQLite — guidance-backed complementary reloads as A1", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-a1b-"));
    tmpDirs.push(dir);
    const dbPath = join(dir, "session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:a1b",
      dbPath,
      sessionKey: "default",
    });
    try {
      const p = richComparisonPresentation();
      const guidance =
        "Je te propose de vérifier ensuite les créneaux disponibles au centre.";
      const built = buildDurableAssistantContentForTurn({
        pilotFacingCore: guidance,
        presentation: p,
        conversationGuidanceStatement: guidance,
      });
      expect(built.usedA1).toBe(true);
      appendPilotTranscriptTurn(session, {
        role: "assistant",
        content: built.contentCore,
        presentationJson: JSON.stringify(built.presentation),
      });
      const listed = listPilotTranscriptTurns(session);
      expect(listed).toHaveLength(1);
      const restored = deserializeNoraAdaptivePresentation(
        listed[0]!.presentationJson,
      );
      const d = resolveAdaptiveAssistantRender({
        content: listed[0]!.content,
        presentation: restored,
      });
      expect(d.mode).toBe("adaptive");
      expect(
        d.presentation?.blocks.some((b) => b.kind === "comparison_table"),
      ).toBe(true);
    } finally {
      session.close();
    }
  });
});
