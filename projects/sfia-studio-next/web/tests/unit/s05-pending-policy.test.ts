import { describe, expect, it } from "vitest";
import {
  buildTurnCorrelationKeys,
  classifySiblingEffectRisk,
  evaluateS05SiblingPolicy,
  parseSiblingResultEvidence,
  sortS05SiblingsDeterministic,
  type S05SiblingEvidence,
} from "@/domains/conversation/s05-pending-policy";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function unavailableQ(goal = "x"): NoraTurnQualification {
  return asNoraQualification({
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
  });
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
  it("S05-R01 / QA-07: UNAVAILABLE + owner probe false → PROVEN_NO_EFFECT", () => {
    const risk = classifySiblingEffectRisk(baseSibling(), {
      correlationKeys: [],
      requestsOwnerEffect: true,
    });
    expect(risk).toBe("PROVEN_NO_EFFECT");
  });

  it("S05-R02: UNAVAILABLE + empty resultJson save but ownerEffectsFound true → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        ownerEffectsFound: true,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R03: UNAVAILABLE + owner probe incomplete (null) → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ ownerEffectsFound: null }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R04: owner read error (null) → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: "UNAVAILABLE",
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R05 / QA-08: QUALIFIED REQUEST_EFFECT without owner proof → BLOQUÉ", () => {
    const q: NoraTurnQualification = asNoraQualification({
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
    });
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

  it("S05-R06: documentSave=null but pilotageEffectAttempted → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        pilotageEffectAttempted: true,
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R07: two UNKNOWN — one innocent, one dangerous → BLOQUÉ; both evaluated", () => {
    const siblings = [
      baseSibling({ id: "safe", clientTurnKey: "safe-key", createdAtMs: 1 }),
      baseSibling({
        id: "danger",
        clientTurnKey: "danger-key",
        createdAtMs: 2,
        ownerEffectsFound: true,
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "safe-key",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(false);
    expect(decision.classifications).toHaveLength(2);
    expect(decision.primaryBlockingKey).toBe("danger-key");
  });

  it("S05-R08 / QA-07: two proven-harmless UNKNOWN → independent intent allowed", () => {
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
    expect(decision.classifications.every((c) => c.risk === "PROVEN_NO_EFFECT")).toBe(true);
  });

  it("S05-R09 / QA-08: RUNNING sibling always blocks", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ status: "RUNNING", qualificationStatus: "QUALIFIED" }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("ACTIVE_EFFECT_RISK");
  });

  it("S05-R10: same durable correlation keys → SAME_INTENT", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ correlationKeys: ["corr-1", "bind:corr-1"] }),
      { correlationKeys: ["corr-1", "salt:corr-1"], requestsOwnerEffect: true },
    );
    expect(risk).toBe("SAME_INTENT");
  });

  it("S05-R11: overlapping key with divergent content still SAME_INTENT (reconcile, not new CREATE)", () => {
    // Policy classifies SAME_INTENT; caller must reconcile — never authorize a new mutation.
    const risk = classifySiblingEffectRisk(
      baseSibling({
        correlationKeys: ["shared-key"],
        documentSaveStatus: "CONFLICT",
        ownerEffectsFound: true,
      }),
      { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
    );
    expect(risk).toBe("SAME_INTENT");
    expect(evaluateS05SiblingPolicy({
      siblings: [baseSibling({ correlationKeys: ["shared-key"], ownerEffectsFound: true })],
      current: { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
      clientPendingHint: null,
      applyPendingGate: true,
    }).allowOwnerEffects).toBe(false);
  });

  it("S05-R12: independent resources + proven no effect → progression allowed", () => {
    const decision = evaluateS05SiblingPolicy({
      siblings: [baseSibling({ correlationKeys: ["other-a"] })],
      current: { correlationKeys: ["other-b"], requestsOwnerEffect: true },
      clientPendingHint: null,
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(true);
  });

  it("S05-R13: empty current keys → no false SAME_INTENT", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ correlationKeys: ["corr-1"] }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).not.toBe("SAME_INTENT");
    expect(risk).toBe("PROVEN_NO_EFFECT");
  });

  it("S05-R14 / QA-19: hint names safe sibling; dangerous sibling still blocks", () => {
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

  it("S05-R18: Intervencia-shaped ids are not special-cased", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("PROVEN_NO_EFFECT");
    const risk2 = classifySiblingEffectRisk(
      baseSibling({
        clientTurnKey: "turn-e5be1dd4-c15e-4438-84a8-69b463fdbb5a",
        ownerEffectsFound: true,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk2).toBe("UNKNOWN_EFFECT_RISK");
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

  it("buildTurnCorrelationKeys emits durable comparable identities", () => {
    const keys = buildTurnCorrelationKeys({
      commandId: "tcmd_1",
      operationId: "op_1",
      userMessageId: "msg_1",
      clientTurnKey: "turn-a",
      clientCorrelationSalt: "salt-x",
      bindingCorrelationKeys: ["bind-k"],
      businessClientCommandKey: "conv-auth:turn-a",
      missionKeys: ["doc:mission:turn-a"],
    });
    expect(keys).toEqual(
      expect.arrayContaining([
        "tcmd_1",
        "tcmd:tcmd_1",
        "op_1",
        "op:op_1",
        "msg_1",
        "umsg:msg_1",
        "turn-a",
        "ctk:turn-a",
        "salt-x",
        "salt:salt-x",
        "bind-k",
        "bind:bind-k",
        "conv-auth:turn-a",
        "bck:conv-auth:turn-a",
        "doc:mission:turn-a",
      ]),
    );
    expect(keys.every((k) => !k.includes(" "))).toBe(true);
  });

  it("parseSiblingResultEvidence reads durable UNAVAILABLE + binding keys", () => {
    const json = JSON.stringify({
      semanticQualificationStatus: "UNAVAILABLE",
      semanticQualification: unavailableQ(),
      documentSave: null,
      pilotageEffect: null,
      humanDecisionCreated: false,
      operationId: "op-x",
      documentCommandBindings: [{ correlationKey: "corr-bind-1" }],
    });
    const p = parseSiblingResultEvidence(json);
    expect(p.qualificationStatus).toBe("UNAVAILABLE");
    expect(p.documentSaveStatus).toBeNull();
    expect(p.humanDecisionCreated).toBe(false);
    expect(p.bindingCorrelationKeys).toEqual(["corr-bind-1"]);
    expect(p.operationId).toBe("op-x");
  });
});
