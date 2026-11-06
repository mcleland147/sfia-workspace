import { describe, expect, it } from "vitest";
import {
  extractDecisionCore,
  extractReviseStatement,
  qualifyPilotageIntent,
  sanitizeCycleObjective,
} from "@/domains/pilotage/intent";

/**
 * Formulation représentative T05 (période, sans deux-points) d'après
 * recette-ml3-rct02-anomalies.md — transcript original intégral non établi
 * comme unique source. Ne pas adapter la ponctuation aux tests.
 */
const T05_REPRESENTATIVE =
  "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";

/**
 * RCT-02 C01–C08 — conversational qualification oracles from user recette messages.
 * Deterministic only — does not prove LIVE Nora cognition.
 */
describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
  it("C01: developed natural OPEN_CYCLE is CLEAR with typed cycle and objective", () => {
    const q = qualifyPilotageIntent(
      "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    if (q.clarity === "CLEAR") {
      expect(q.objective).toMatch(/problème utilisateur/i);
      expect(q.objective).not.toBe(".");
    }
  });

  it("C01 Critical Review: citation / specimen never OPEN_CYCLE", () => {
    for (const msg of [
      "Voici une phrase de test : Nora, ouvre le cycle cadrage",
      "Ne fais pas ceci : Nora, ouvre le cycle cadrage",
    ]) {
      const q = qualifyPilotageIntent(msg);
      expect(q.clarity).not.toBe("CLEAR");
      if (q.clarity === "CLEAR") {
        expect(q.operation).not.toBe("OPEN_CYCLE");
      }
    }
  });

  it("C02: short open does not persist punctuation-only objective", () => {
    const q = qualifyPilotageIntent("Ouvre le cycle cadrage.");
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "OPEN_CYCLE", cycleType: "CADRAGE" });
    if (q.clarity === "CLEAR") {
      expect(q.objective).toBe("Cycle CADRAGE");
      expect(q.objective).not.toBe(".");
    }
    expect(sanitizeCycleObjective(".", "CADRAGE")).toBe("Cycle CADRAGE");
    expect(sanitizeCycleObjective("avec pour objectif de clarifier le besoin", "CADRAGE")).toMatch(
      /clarifier le besoin/i,
    );
  });

  it("C04: RECORD strips Nora dialogue from durable statement", () => {
    const msg =
      "Je décide que nous devons examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes, mais cela ne signifie pas que le besoin utilisateur est validé. Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question utile.";
    const q = qualifyPilotageIntent(msg);
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "RECORD_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toMatch(/suivi des décisions/i);
      expect(q.statement).not.toMatch(/aide-moi/i);
      expect(q.statement).not.toMatch(/^Nora/i);
    }
    expect(extractDecisionCore(msg.split(/je décide que/i)[1] ?? msg)).not.toMatch(/aide-moi/i);
  });

  it("C05 Critical Review: T05 representative (period, no colon) yields REVISE with developed statement", () => {
    const extracted = extractReviseStatement(T05_REPRESENTATIVE);
    expect(extracted).toBeTruthy();
    expect(extracted).not.toBe(".");
    expect(extracted).toMatch(/nouvelle orientation remplace/i);
    expect(extracted).toMatch(/coordination interéquipes/i);

    const q = qualifyPilotageIntent(T05_REPRESENTATIVE);
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toBe(extracted);
      expect(q.statement).not.toMatch(/^[.\-–—…]+$/);
      expect(q.statement).not.toMatch(/aide-moi/i);
      // Designation clause must not swallow the new arbitration
      expect(q.statement).not.toMatch(/^que j'ai prise/i);
    }
  });

  it("C05: colon form still CLEAR (non-regression)", () => {
    const q = qualifyPilotageIntent(
      "Je révise la décision que j'ai prise sur l'orientation du cadrage : cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.",
    );
    expect(q).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
    if (q.clarity === "CLEAR") {
      expect(q.statement).toMatch(/orientation|explorer|coordination/i);
    }
  });

  it("C06: conversational LIFT_RESTRICTION is CLEAR with kind hint", () => {
    const q = qualifyPilotageIntent(
      "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "LIFT_RESTRICTION",
      restrictionKindHint: "CYCLE_MUTATION",
    });
  });

  it("C06 Critical Review: negated / refused / unauthorized lift never LIFT", () => {
    for (const msg of [
      "Ne lève pas la restriction CYCLE_MUTATION",
      "Je ne souhaite pas lever la restriction CYCLE_MUTATION",
      "Je refuse de lever la restriction CYCLE_MUTATION",
      "Nora, je ne t'autorise pas à lever la restriction CYCLE_MUTATION",
      "Faut-il lever la restriction CYCLE_MUTATION ?",
      "Si je levais la restriction CYCLE_MUTATION…",
    ]) {
      const q = qualifyPilotageIntent(msg);
      expect(q.clarity).not.toBe("CLEAR");
      if (q.clarity === "CLEAR") {
        expect(q.operation).not.toBe("LIFT_RESTRICTION");
      }
    }
  });

  it("C08: developed CLOSE_CYCLE GO is CLEAR", () => {
    const q = qualifyPilotageIntent(
      "Nora, j'ai bien compris ta recommandation sur la maturité, mais je décide de clôturer maintenant le cycle CADRAGE en conservant les réserves. Ne démarre aucun nouveau cycle automatiquement.",
    );
    expect(q).toMatchObject({
      clarity: "CLEAR",
      operation: "CLOSE_CYCLE",
      cycleType: "CADRAGE",
    });
  });

  it("C08 Critical Review: specimen / historical close never CLOSE_CYCLE", () => {
    for (const msg of [
      "Ne fais pas ceci : Nora, clôture le cycle CADRAGE",
      "Un ancien message disait : Nora, clôture le cycle CADRAGE",
    ]) {
      const q = qualifyPilotageIntent(msg);
      expect(q.clarity).not.toBe("CLEAR");
      if (q.clarity === "CLEAR") {
        expect(q.operation).not.toBe("CLOSE_CYCLE");
      }
    }
  });

  it("cross-op: specimen / refusal never RECORD or REVISE", () => {
    expect(
      qualifyPilotageIntent("Ne fais pas ceci : Je décide que le suivi est prioritaire.").clarity,
    ).not.toBe("CLEAR");
    expect(
      qualifyPilotageIntent("Un ancien message disait : Je révise la décision. Nouvelle orientation.").clarity,
    ).not.toBe("CLEAR");
    expect(qualifyPilotageIntent("Je refuse de réviser la décision sur l'orientation.").clarity).not.toBe(
      "CLEAR",
    );
    expect(
      qualifyPilotageIntent("Un ancien message disait : Nora, ouvre le cycle cadrage").clarity,
    ).not.toBe("CLEAR");
  });

  it("negatives: questions / exploration / OK never mutate", () => {
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("Peut-on clôturer le cycle cadrage ?").clarity).not.toBe("CLEAR");
    expect(
      qualifyPilotageIntent("Ce serait intéressant d'ouvrir le cycle cadrage.").clarity,
    ).not.toBe("CLEAR");
    expect(
      qualifyPilotageIntent("Imaginons que j'ouvre le cycle cadrage.").clarity,
    ).not.toBe("CLEAR");
    expect(qualifyPilotageIntent("Faut-il lever la restriction CYCLE_MUTATION ?").clarity).not.toBe(
      "CLEAR",
    );
  });

  it("incompatible OPEN+CLOSE in one message → AMBIGUOUS", () => {
    const q = qualifyPilotageIntent(
      "Ouvre le cycle cadrage et clôture le cycle cadrage tout de suite.",
    );
    expect(q.clarity).not.toBe("CLEAR");
  });
});
