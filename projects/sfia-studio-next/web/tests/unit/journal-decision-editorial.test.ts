import { describe, expect, it } from "vitest";
import {
  composeDecisionChoiceText,
  composeDecisionDisplaySummary,
  composeDecisionDisplayTitle,
  decisionKindDisplayLabel,
  decisionListMetaLabel,
  decisionScopeDisplayLabel,
  extractSourcedMotivationFromMessage,
} from "@/domains/knowledge/journal-editorial";

const CAMPUSNOVA_STATEMENT =
  "Pour le fonctionnement cible des trois centres pilotes, une réservation ne sera considérée comme confirmée que lorsque les ressources indispensables auront été vérifiées, que l’engagement sera enregistré dans le planning de référence et que son statut aura été communiqué clairement au demandeur. Un accord oral, un e-mail ou un accord de principe ne suffira pas, à lui seul, à constituer une réservation confirmée.";

describe("Journal decision editorial (D6 display-only)", () => {
  it("derives a short title distinct from the full official statement", () => {
    const title = composeDecisionDisplayTitle({ statement: CAMPUSNOVA_STATEMENT });
    expect(title.toLowerCase()).toMatch(/réservation|confirmation/);
    expect(title.length).toBeLessThan(CAMPUSNOVA_STATEMENT.length / 2);
    expect(title).not.toEqual(CAMPUSNOVA_STATEMENT);
  });

  it("prefers a short objectRef as title when human-readable", () => {
    expect(
      composeDecisionDisplayTitle({
        statement: CAMPUSNOVA_STATEMENT,
        objectRef: "Organisation du Journal",
      }),
    ).toBe("Organisation du Journal");
  });

  it("keeps summary distinct from title and from full choice", () => {
    const title = composeDecisionDisplayTitle({ statement: CAMPUSNOVA_STATEMENT });
    const summary = composeDecisionDisplaySummary({ statement: CAMPUSNOVA_STATEMENT });
    const choice = composeDecisionChoiceText(CAMPUSNOVA_STATEMENT);
    expect(summary.toLowerCase()).toMatch(/centres pilotes|fonctionnement/);
    expect(summary).not.toEqual(title);
    expect(choice).toContain("ressources indispensables");
    expect(choice).toContain("accord oral");
    expect(choice.length).toBeGreaterThan(summary.length);
  });

  it("does not invent motivation when message has none", () => {
    expect(extractSourcedMotivationFromMessage("Je décide X pour le projet.")).toBeNull();
  });

  it("extracts Motivation only when explicitly marked on the source message", () => {
    const excerpt = extractSourcedMotivationFromMessage(
      [
        "Je prends la décision suivante.",
        "",
        "**Motivation :** À Lyon, un accord de principe ; à Lille, le matériel manquait ; à Bordeaux, Outlook montrait un créneau faux.",
        "",
        "Fin.",
      ].join("\n"),
    );
    expect(excerpt).toBeTruthy();
    expect(excerpt!).toMatch(/Lyon/);
    expect(excerpt!).toMatch(/Lille|Bordeaux/);
  });

  it("maps technical D6 codes to métier labels", () => {
    expect(decisionScopeDisplayLabel("PROJECT")).toBe("Projet");
    expect(decisionKindDisplayLabel("RECORD_DECISION")).toBe("Arbitrage structurant");
    expect(
      decisionListMetaLabel({ kind: "RECORD_DECISION", scope: "PROJECT" }),
    ).toBe("Arbitrage structurant · Projet");
    expect(
      decisionListMetaLabel({
        kind: "RECORD_DECISION",
        scope: "PROJECT",
        supersededByDecisionId: "dec_x",
      }),
    ).toMatch(/historique/i);
  });

  it("preserves official statement verbatim as choice text", () => {
    expect(composeDecisionChoiceText(CAMPUSNOVA_STATEMENT)).toBe(
      CAMPUSNOVA_STATEMENT.replace(/\s+/g, " ").trim(),
    );
  });
});
