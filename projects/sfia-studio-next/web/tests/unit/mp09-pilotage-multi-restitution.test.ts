import { describe, expect, it } from "vitest";
import { composePilotageEffectRestitution } from "@/domains/conversation/pilotage-effect-restitution";
import {
  dependencyPreconditionBlockReason,
  pickPrimaryPilotageEffect,
  type TurnPilotageEffect,
} from "@/domains/conversation/pilotage-effect-aggregate";

describe("MP-09 — multi pilotage restitution", () => {
  it("compose renders A applied + B rejected without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je traite les deux demandes.",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "REJECTED",
          reason: "Cycle source absent",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/Cycle source absent/);
    expect(out).not.toMatch(/transition.*maintenant/i);
  });

  it("compose renders two applied outcomes", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/transition de cycle/i);
  });

  it("first rejected second applied surfaces both", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "REJECTED",
          reason: "Type de cycle requis",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "RETAIN_TRAJECTORY",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/orientation de trajectoire est retenue/i);
  });

  it("ambiguous binding restitutes clarification", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Analyse.",
      effects: [
        {
          attempted: true,
          intentClarity: "AMBIGUOUS",
          reason: "Deux cycles cités",
          status: null,
          decisionId: null,
        },
      ],
    });
    expect(out).toMatch(/intention ambiguë/i);
    expect(out).toMatch(/Deux cycles cités/);
  });

  it("ALREADY_APPLIED honest wording", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "ALREADY_APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/déjà en place/i);
  });

  it("pickPrimary returns first attempted in binding order", () => {
    const records: TurnPilotageEffect[] = [
      {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
      {
        attempted: true,
        operation: "TRANSITION_CYCLE",
        status: "REJECTED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
    ];
    const primary = pickPrimaryPilotageEffect(records);
    expect(primary?.operation).toBe("OPEN_CYCLE");
  });
});

describe("MP-09 — dependsOn precondition gate", () => {
  const pilotageIntentIds = new Set(["i-open", "i-trans"]);

  it("blocks dependent when predecessor rejected", () => {
    const map = new Map([["i-open", "REJECTED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/prérequis/i);
  });

  it("allows dependent when predecessor applied", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toBeNull();
  });

  it("blocks when predecessor ambiguous", () => {
    const map = new Map([["i-open", "AMBIGUOUS"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/ambiguë/i);
  });

  it("E2 A.3 — fail-closed on non-pilotage dependsOn when unresolved", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/hors intentions D5\/D6|inter-capacité|non encore satisfaite/i);
  });

  it("E2-REL-02 — allows D5 when cross-cap D4 outcome is APPLIED", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4-knowledge", "APPLIED"]]),
      }),
    ).toBeNull();
  });

  it("E2-REL-02 — blocks D5 when cross-cap D4 outcome FAILED", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4-knowledge", "FAILED"]]),
      }),
    ).toMatch(/hors pilotage|n'est pas appliqué/i);
  });
});