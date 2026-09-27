/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — non-authoritative disposition
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
import { toEffectiveDisposition } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
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

describe("F2 intent schema — pilotDecisionCandidate", () => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(F2_INTENT_JSON_SCHEMA);

  it("accepts an explicit null and a well-formed candidate", () => {
    expect(validate(basePayload({ pilotDecisionCandidate: null }))).toBe(true);
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: { disposition: "accept", rationale: null },
        }),
      ),
    ).toBe(true);
  });

  it("refuses an unknown disposition and any extra field", () => {
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: { disposition: "go", rationale: null },
        }),
      ),
    ).toBe(false);
    expect(
      validate(
        basePayload({
          pilotDecisionCandidate: {
            disposition: "accept",
            rationale: null,
            proposalId: "prop:hostile",
          },
        }),
      ),
    ).toBe(false);
  });
});

describe("parsePilotDecisionCandidate — fail-closed", () => {
  it("returns null for absent / null / non-object payloads", () => {
    expect(parsePilotDecisionCandidate(undefined)).toBeNull();
    expect(parsePilotDecisionCandidate(null)).toBeNull();
    expect(parsePilotDecisionCandidate("accept")).toBeNull();
    expect(parsePilotDecisionCandidate(["accept"])).toBeNull();
    expect(parsePilotDecisionCandidate({})).toBeNull();
  });

  it("degrades an unrecognised disposition to ambiguous, never to accept", () => {
    expect(parsePilotDecisionCandidate({ disposition: "go" })).toEqual({
      disposition: "ambiguous",
      rationale: null,
    });
    expect(parsePilotDecisionCandidate({ disposition: "APPROVE" })).toEqual({
      disposition: "ambiguous",
      rationale: null,
    });
  });

  it("keeps the six known dispositions", () => {
    for (const disposition of [
      "accept",
      "refuse",
      "amend",
      "defer",
      "none",
      "ambiguous",
    ]) {
      expect(
        parsePilotDecisionCandidate({ disposition })?.disposition,
      ).toBe(disposition);
    }
  });
});

describe("validateIntentAnalysisPayload — candidate is never authority", () => {
  it("carries a validated candidate on an otherwise informative analysis", () => {
    const dto = validateIntentAnalysisPayload(
      basePayload({
        pilotDecisionCandidate: { disposition: "accept", rationale: "oui" },
      }),
    );
    expect(dto.parseOk).toBe(true);
    expect(dto.pilotDecisionCandidate).toEqual({
      disposition: "accept",
      rationale: "oui",
    });
    // A candidate never upgrades the intent class or grants authority.
    expect(dto.intentClass).toBe("informative");
  });

  it("drops the candidate when the payload cannot be parsed", () => {
    const dto = validateIntentAnalysisPayload({ intentClass: "nonsense" });
    expect(dto.parseOk).toBe(false);
    expect(dto.pilotDecisionCandidate).toBeNull();
  });
});

describe("toEffectiveDisposition — only three dispositions carry an effect", () => {
  it("maps accept/refuse/amend/defer and neutralises the rest", () => {
    expect(toEffectiveDisposition("accept")).toBe("accept");
    expect(toEffectiveDisposition("refuse")).toBe("refuse");
    expect(toEffectiveDisposition("amend")).toBe("amend");
    expect(toEffectiveDisposition("defer")).toBe("defer");
    expect(toEffectiveDisposition("none")).toBeNull();
    expect(toEffectiveDisposition("ambiguous")).toBeNull();
    expect(toEffectiveDisposition(null)).toBeNull();
    expect(toEffectiveDisposition(undefined)).toBeNull();
  });
});

describe("fake provider parity", () => {
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

  it("emits the candidate on the same structured intent payload as live", async () => {
    const accepted = await analyze("Oui, poursuis. __F2_DECIDE_ACCEPT__");
    expect(accepted.pilotDecisionCandidate?.disposition).toBe("accept");
    // No subject identity is ever produced by the provider.
    expect(JSON.stringify(accepted)).not.toMatch(/prop:|optset:|opt:proposal/);
  });

  it("emits none for a bare acknowledgement", async () => {
    const none = await analyze("oui __F2_DECIDE_NONE__");
    expect(none.pilotDecisionCandidate?.disposition).toBe("none");
  });

  it("leaves the candidate null on ordinary turns", async () => {
    const ordinary = await analyze("Résume le projet. __F2_INFORMATIVE__");
    expect(ordinary.pilotDecisionCandidate ?? null).toBeNull();
  });
});
