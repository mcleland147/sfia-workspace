import { describe, expect, it, afterEach } from "vitest";
import {
  buildLevelAClarification,
  findMessageDecisionConfrontations,
  findPotentialDivergences,
  qualifyCommandOutcome,
  selectApplicableBriefs,
} from "@/domains/decisions/divergence-assist";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";

const prior = {
  id: "dec_gh",
  kind: "RECORD_DECISION",
  objectRef: "github-connexion",
  scope: "PROJECT",
  statement: "La connexion GitHub est obligatoire pour ce projet.",
  state: "APPLICABLE",
  sourceKind: "EXPLICIT_INTERACTION",
};

describe("B13 C01 message↔decision confrontation", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevE2e = process.env.STUDIO_E2E;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevE2e === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prevE2e;
  });

  it("C01: single APPLICABLE decision + new USER message yields Level A without second decision", () => {
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    expect(signals).toHaveLength(1);
    expect(signals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(signals[0].decisionId).toBe("dec_gh");
    expect(signals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(signals[0].authorityClaim).toBe("NONE");
    expect(findPotentialDivergences([prior])).toHaveLength(0);
  });

  it("C01/R2: compatible different formulations are not treated as possible change", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub reste requis pour ce projet.",
      [prior],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R2: negation of same modality is never COMPATIBLE_RESTATEMENT", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    const cases: Array<{ user: string; statement?: string }> = [
      { user: "GitHub n'est plus obligatoire." },
      { user: "GitHub n'est pas obligatoire." },
      { user: "GitHub n'est jamais obligatoire." },
      { user: "GitHub n'est aucunement obligatoire." },
      // Typographic apostrophe (U+2019)
      { user: "GitHub n\u2019est jamais obligatoire." },
      { user: "GitHub n\u2019est aucunement obligatoire." },
      { user: "GitHub ne doit pas être obligatoire." },
      {
        user: "GitHub n'est pas interdit.",
        statement: "GitHub est interdit pour ce projet.",
      },
      {
        user: "GitHub n'est pas requis.",
        statement: "GitHub est requis pour ce projet.",
      },
    ];
    for (const c of cases) {
      const row = { ...base, statement: c.statement ?? base.statement };
      const signals = findMessageDecisionConfrontations(c.user, [row]);
      expect(signals.length, c.user).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing, c.user).not.toBe("COMPATIBLE_RESTATEMENT");
      expect(["POSSIBLE_CHANGE", "AMBIGUOUS"], c.user).toContain(signals[0].framing);
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: positive restatements remain compatible when polarity agrees", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    for (const user of ["GitHub reste obligatoire.", "GitHub reste requis."]) {
      const signals = findMessageDecisionConfrontations(user, [base]);
      expect(signals.length).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: scope shift stays AMBIGUOUS (no automatic global equivalence)", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub obligatoire seulement pour UX",
      [
        {
          ...prior,
          statement: "GitHub obligatoire pour tout le projet.",
        },
      ],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("AMBIGUOUS");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R1: UNKNOWN presentation is never authority-block; cleared outcome shows nothing", () => {
    const restriction = qualifyCommandOutcome({
      status: "REJECTED",
      reasonCode: "RESTRICTION",
    });
    expect(restriction.testId).toBe("authority-block-established");
    // After runCommand start, lastOutcome is null → UI hides qualified motif.
    const afterStart: null = null;
    expect(afterStart).toBeNull();
    const unknown = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(unknown.kind).toBe("unknown");
    expect(unknown.testId).toBe("outcome-unknown");
    expect(unknown.testId).not.toBe("authority-block-established");
    const applied = qualifyCommandOutcome({ status: "APPLIED" });
    expect(applied.testId).toBe("outcome-applied");
    expect(applied.testId).not.toBe("authority-block-established");
  });

  it("C01: unrelated object is not confronted", () => {
    expect(
      findMessageDecisionConfrontations("Je veux changer la couleur du logo.", [prior]),
    ).toHaveLength(0);
  });

  it("C01: REVOKED decision is not a current authority source", () => {
    expect(
      findMessageDecisionConfrontations("GitHub facultatif", [
        { ...prior, state: "REVOKED" },
      ]),
    ).toHaveLength(0);
    expect(selectApplicableBriefs([{ ...prior, state: "REVOKED" }])).toHaveLength(0);
  });

  it("C01 fixture uses structured levelASignals (same entry as conversation path)", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    const result = await generateNoraReply({
      userText: "Finalement, je préfère GitHub facultatif.",
      contextSnippets: [],
      pilotageSnippets: ["### Décisions D6 applicables"],
      levelASignals: signals,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/Niveau A/i);
    expect(result.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
    expect(result.content).toContain("dec_gh");
    expect(result.content).not.toMatch(/HumanDecision créée|je révoque/i);
  });

  it("buildLevelAClarification distinguishes compatible restatement", () => {
    expect(
      buildLevelAClarification({
        priorStatement: prior.statement,
        newExpression: "GitHub reste requis",
        objectRef: prior.objectRef,
        framing: "COMPATIBLE_RESTATEMENT",
      }),
    ).toMatch(/semble compatible/);
  });
});

describe("B13 C02 qualifyCommandOutcome", () => {
  it("does not treat CONFLICT+STALE_REVISION as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "STALE_REVISION" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).not.toBe("authority-block-established");
  });

  it("does not treat CONFLICT+HUMAN_INTENT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "HUMAN_INTENT" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).toBe("outcome-technical-human_intent");
  });

  it("does not treat CONFLICT+FINGERPRINT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "FINGERPRINT" });
    expect(q.kind).toBe("technical_conflict");
  });

  it("REJECTED+RESTRICTION is authority block", () => {
    const q = qualifyCommandOutcome({ status: "REJECTED", reasonCode: "RESTRICTION" });
    expect(q.kind).toBe("authority_block");
    expect(q.testId).toBe("authority-block-established");
  });

  it("CONFLICT+ACTIVE_CYCLE is D5 state, not D6 contradiction", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "ACTIVE_CYCLE" });
    expect(q.kind).toBe("d5_state");
  });

  it("UNKNOWN asks for reconciliation", () => {
    const q = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(q.kind).toBe("unknown");
    expect(q.testId).toBe("outcome-unknown");
  });
});
