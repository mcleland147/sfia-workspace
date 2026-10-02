/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 / D3-EXT — non-authoritative disposition
 * candidate: schema contract, fail-closed validation, fake-provider parity.
 *
 * @vitest-environment node
 */
import Ajv from "ajv";
import { describe, expect, it } from "vitest";
import {
  F2_INTENT_JSON_SCHEMA,
  parsePilotDecisionCandidate,
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  toEffectiveDisposition,
  toPilotDecisionTargetKind,
} from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";

function basePayload(extra: Record<string, unknown>) {
  return {
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: "x",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    continuationKind: null,
    artifactMaterializationOperation: null,
    ...extra,
  };
}

describe("F2 intent schema — pilotDecisionCandidate D3-EXT", () => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(F2_INTENT_JSON_SCHEMA);

  it("accepts null and a well-formed candidate with targetKind", () => {
    expect(validate(basePayload({ pilotDecisionCandidate: null }))).toBe(true);
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: {
            disposition: "accept",
            targetKind: "current_recommendation",
            rationale: null,
          },
        }),
      ),
    ).toBe(true);
  });

  it("refuses missing targetKind, unknown disposition, and extra fields", () => {
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: { disposition: "accept", rationale: null },
        }),
      ),
    ).toBe(false);
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: {
            disposition: "go",
            targetKind: "current_recommendation",
            rationale: null,
          },
        }),
      ),
    ).toBe(false);
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: {
            disposition: "accept",
            targetKind: "current_recommendation",
            rationale: null,
            proposalId: "prop:hostile",
          },
        }),
      ),
    ).toBe(false);
  });
});

describe("parsePilotDecisionCandidate — fail-closed D3-EXT", () => {
  it("returns null for absent / null / non-object payloads", () => {
    expect(parsePilotDecisionCandidate(undefined)).toBeNull();
    expect(parsePilotDecisionCandidate(null)).toBeNull();
    expect(parsePilotDecisionCandidate("accept")).toBeNull();
    expect(parsePilotDecisionCandidate(["accept"])).toBeNull();
    expect(parsePilotDecisionCandidate({})).toBeNull();
  });

  it("D3E-05 — unknown targetKind → ambiguous, never current_recommendation", () => {
    expect(
      parsePilotDecisionCandidate({
        disposition: "accept",
        targetKind: "something_else",
      }),
    ).toEqual({
      disposition: "accept",
      targetKind: "ambiguous",
      rationale: null,
    });
  });

  it("absent targetKind → ambiguous (fail-closed, never invents current_recommendation)", () => {
    expect(parsePilotDecisionCandidate({ disposition: "accept" })).toEqual({
      disposition: "accept",
      targetKind: "ambiguous",
      rationale: null,
    });
  });

  it("degrades an unrecognised disposition to ambiguous, never to accept", () => {
    expect(
      parsePilotDecisionCandidate({
        disposition: "go",
        targetKind: "current_recommendation",
      }),
    ).toEqual({
      disposition: "ambiguous",
      targetKind: "current_recommendation",
      rationale: null,
    });
  });

  it("keeps the six known dispositions and four targetKinds", () => {
    for (const disposition of [
      "accept",
      "refuse",
      "amend",
      "defer",
      "none",
      "ambiguous",
    ] as const) {
      expect(
        parsePilotDecisionCandidate({
          disposition,
          targetKind: "presented_subject",
        })?.disposition,
      ).toBe(disposition);
    }
    for (const targetKind of [
      "current_recommendation",
      "presented_subject",
      "specific_alternative",
      "ambiguous",
    ] as const) {
      expect(
        parsePilotDecisionCandidate({ disposition: "accept", targetKind })
          ?.targetKind,
      ).toBe(targetKind);
    }
  });
});

describe("validateIntentAnalysisPayload — candidate is never authority", () => {
  it("carries a validated candidate on an otherwise informative analysis", () => {
    const dto = validateIntentAnalysisPayload(
      basePayload({
        pilotDecisionCandidate: {
          disposition: "accept",
          targetKind: "current_recommendation",
          rationale: "oui",
        },
      }),
    );
    expect(dto.parseOk).toBe(true);
    expect(dto.pilotDecisionCandidate).toEqual({
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "oui",
    });
    expect(dto.intentClass).toBe("informative");
  });

  it("drops the candidate when the payload cannot be parsed", () => {
    const dto = validateIntentAnalysisPayload({ intentClass: "nonsense" });
    expect(dto.parseOk).toBe(false);
    expect(dto.pilotDecisionCandidate).toBeNull();
  });
});

describe("toEffectiveDisposition / toPilotDecisionTargetKind", () => {
  it("maps dispositions and never invents current_recommendation", () => {
    expect(toEffectiveDisposition("accept")).toBe("accept");
    expect(toEffectiveDisposition("none")).toBeNull();
    expect(toPilotDecisionTargetKind("current_recommendation")).toBe(
      "current_recommendation",
    );
    expect(toPilotDecisionTargetKind(null)).toBe("ambiguous");
    expect(toPilotDecisionTargetKind(undefined)).toBe("ambiguous");
    expect(toPilotDecisionTargetKind("nope" as never)).toBe("ambiguous");
  });
});

describe("fake provider parity — D3-EXT", () => {
  async function analyze(userContent: string) {
    const provider = new FakeConversationProvider();
    const completion = await provider.completeStructured({
      messages: [
        { role: "system", content: "Tu analyses ... SFIA Studio F2 ..." },
        {
          role: "user",
          content: `Demande courante (à évaluer):\n${userContent}`,
        },
      ],
      schemaName: "f2_intent_analysis",
      jsonSchema: F2_INTENT_JSON_SCHEMA,
    });
    const json = completion.text.slice(completion.text.indexOf("{"));
    return validateIntentAnalysisPayload(JSON.parse(json));
  }

  it("D3E-06 — Proposal accept marker → presented_subject (not current_recommendation)", async () => {
    const accepted = await analyze("Oui, poursuis. __F2_DECIDE_ACCEPT__");
    expect(accepted.pilotDecisionCandidate?.disposition).toBe("accept");
    expect(accepted.pilotDecisionCandidate?.targetKind).toBe(
      "presented_subject",
    );
    expect(JSON.stringify(accepted)).not.toMatch(/prop:|optset:|opt:proposal/);
  });

  it("D3E-01 — natural « Oui, je valide ta recommandation » → current_recommendation", async () => {
    const dto = await analyze("Oui, je valide ta recommandation.");
    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
      "current_recommendation",
    );
  });

  it("D3E-02 — « Je préfère l'autre option » → specific_alternative", async () => {
    const dto = await analyze("Je préfère l'autre option.");
    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
      "specific_alternative",
    );
  });

  it("D3E-03 — « Je choisis la trajectoire gouvernée plutôt » → specific_alternative", async () => {
    const dto = await analyze(
      "Je choisis la trajectoire gouvernée plutôt.",
    );
    expect(dto.pilotDecisionCandidate?.disposition).toBe("accept");
    expect(dto.pilotDecisionCandidate?.targetKind).toBe(
      "specific_alternative",
    );
  });

  it("D3E-04 — bare oui → none", async () => {
    const none = await analyze("oui __F2_DECIDE_NONE__");
    expect(none.pilotDecisionCandidate?.disposition).toBe("none");
  });

  it("marker ACCEPT_CURRENT_REC / ACCEPT_ALT", async () => {
    const cur = await analyze("ok __F2_DECIDE_ACCEPT_CURRENT_REC__");
    expect(cur.pilotDecisionCandidate?.targetKind).toBe(
      "current_recommendation",
    );
    const alt = await analyze("ok __F2_DECIDE_ACCEPT_ALT__");
    expect(alt.pilotDecisionCandidate?.targetKind).toBe(
      "specific_alternative",
    );
  });

  it("leaves the candidate null on ordinary turns", async () => {
    const ordinary = await analyze("Résume le projet. __F2_INFORMATIVE__");
    expect(ordinary.pilotDecisionCandidate ?? null).toBeNull();
  });
});
