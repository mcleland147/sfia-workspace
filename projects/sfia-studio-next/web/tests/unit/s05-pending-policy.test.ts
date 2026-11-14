import { describe, expect, it } from "vitest";
import {
  classifySiblingEffectRisk,
  evaluateS05SiblingPolicy,
  parseSiblingResultEvidence,
  sortS05SiblingsDeterministic,
  type S05SiblingEvidence,
} from "@/domains/conversation/s05-pending-policy";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function unavailableQ(goal = "x"): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal,
    intents: [
      {
        id: "i1",
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: "open cycle",
        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    clarifications: [],
    replyDraft: "cannot",
  };
}

function baseSibling(over: Partial<S05SiblingEvidence> = {}): S05SiblingEvidence {
  return {
    id: "tcmd_a",
    clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
    status: "UNKNOWN",
    createdAtMs: 1000,
    qualificationStatus: "UNAVAILABLE",
    qualification: unavailableQ(),
    documentSaveStatus: null,
    pilotageEffectAttempted: false,
    humanDecisionCreated: false,
    ownerEffectsFound: false,
    correlationKeys: [],
    ...over,
  };
}

describe("P2 S05 pending policy", () => {
  it("QA-07: UNAVAILABLE + empty owners → PROVEN_NO_EFFECT (generic, not id-hardcoded)", () => {
    const risk = classifySiblingEffectRisk(baseSibling(), {
      correlationKeys: [],
      requestsOwnerEffect: true,
    });
    expect(risk).toBe("PROVEN_NO_EFFECT");
  });

  it("QA-07: two historical-style UNKNOWN both non-blocking under policy", () => {
    const siblings = [
      baseSibling({ id: "tcmd_1", clientTurnKey: "turn-6424c417-x", createdAtMs: 1 }),
      baseSibling({
        id: "tcmd_2",
        clientTurnKey: "turn-e5be1dd4-x",
        createdAtMs: 2,
        qualification: {
          ...unavailableQ("privacy"),
          intents: [
            {
              id: "i1",
              capabilityId: "d4.read_knowledge",
              mode: "EXPLORE",
              summary: "read",
              parameters: {},
              constraints: [],
              dependsOn: [],
              sourceEvidence: [],
            },
          ],
        },
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "turn-e5be1dd4-x",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(true);
    expect(decision.pendingEffectBlocked).toBe(false);
    expect(decision.classifications).toHaveLength(2);
    expect(decision.classifications.every((c) => c.risk === "PROVEN_NO_EFFECT")).toBe(true);
  });

  it("QA-08: RUNNING sibling always blocks", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ status: "RUNNING", qualificationStatus: "QUALIFIED" }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("ACTIVE_EFFECT_RISK");
  });

  it("QA-08: UNKNOWN without qualification evidence → fail closed", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: null,
        qualification: null,
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("QA-08: QUALIFIED REQUEST_EFFECT without owner proof → UNKNOWN_EFFECT_RISK", () => {
    const q: NoraTurnQualification = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "create",
      intents: [
        {
          id: "c1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: "QUALIFIED",
        qualification: q,
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("QA-19: evaluates all siblings; hint never hides another blocker", () => {
    const siblings = [
      baseSibling({
        id: "safe",
        clientTurnKey: "safe-key",
        createdAtMs: 1,
      }),
      baseSibling({
        id: "danger",
        clientTurnKey: "danger-key",
        createdAtMs: 2,
        status: "RUNNING",
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "safe-key",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(false);
    expect(decision.primaryBlockingKey).toBe("danger-key");
    expect(decision.pendingBlockReason).toContain("danger-key");
  });

  it("QA-19: deterministic order by createdAt then id", () => {
    const ordered = sortS05SiblingsDeterministic([
      { id: "b", createdAtMs: 2 },
      { id: "a", createdAtMs: 1 },
      { id: "c", createdAtMs: 1 },
    ]);
    expect(ordered.map((s) => s.id)).toEqual(["a", "c", "b"]);
  });

  it("QA-20: documentSave=null alone is insufficient without owner probe", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("SAME_INTENT when correlation overlaps", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ correlationKeys: ["corr-1"] }),
      { correlationKeys: ["corr-1"], requestsOwnerEffect: true },
    );
    expect(risk).toBe("SAME_INTENT");
  });

  it("parseSiblingResultEvidence reads durable UNAVAILABLE", () => {
    const json = JSON.stringify({
      semanticQualificationStatus: "UNAVAILABLE",
      semanticQualification: unavailableQ(),
      documentSave: null,
      pilotageEffect: null,
      humanDecisionCreated: false,
    });
    const p = parseSiblingResultEvidence(json);
    expect(p.qualificationStatus).toBe("UNAVAILABLE");
    expect(p.documentSaveStatus).toBeNull();
    expect(p.humanDecisionCreated).toBe(false);
  });
});
