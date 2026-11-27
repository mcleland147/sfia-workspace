/**
 * Option B — unified D3 sequencing helpers (pure planner; no owner I/O).
 */
import { describe, expect, it } from "vitest";
import {
  isSatisfiedOwnerOutcome,
  orderIntegratedEffectIntents,
  partitionWaveByFamily,
  planIntegratedEffectWave,
  listIntegratedEffectIntents,
  rewriteKnowledgeProposalLocalRefs,
  unresolvedLocalSubjectRefBlockReason,
} from "@/domains/conversation/qualified-effect-conduction";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

function qual(intents: Array<Record<string, unknown>>) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "test",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents,
    clarifications: [] as string[],
    replyDraft: "ok",
  };
}

describe("qualified-effect-conduction", () => {
  it("isSatisfiedOwnerOutcome rejects PARTIAL/FAILED/SKIPPED/UNKNOWN", () => {
    expect(isSatisfiedOwnerOutcome("APPLIED")).toBe(true);
    expect(isSatisfiedOwnerOutcome("ALREADY_APPLIED")).toBe(true);
    expect(isSatisfiedOwnerOutcome("AVAILABLE")).toBe(true);
    expect(isSatisfiedOwnerOutcome("PARTIAL")).toBe(false);
    expect(isSatisfiedOwnerOutcome("FAILED")).toBe(false);
    expect(isSatisfiedOwnerOutcome("SKIPPED")).toBe(false);
    expect(isSatisfiedOwnerOutcome("UNKNOWN")).toBe(false);
  });

  it("plans D6 → D4 → D5 alternating chain across waves", () => {
    const q = qual([
      {
        id: "i-d6",
        capabilityId: "d6.human_decision",
        mode: "REQUEST_EFFECT",
        summary: "Arbitrage",
        parameters: { pilotageOperation: "RECORD_DECISION", statement: "Décision A" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
      {
        id: "i-d4",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Capitalise arbitrage",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement: "L'arbitrage du Pilote fixe le cadre d'habilitation.",
        },
        constraints: [],
        dependsOn: ["i-d6"],
        sourceEvidence: [],
      },
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: "Propose trajectoire",
        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
        constraints: [],
        dependsOn: ["i-d4"],
        sourceEvidence: [],
      },
    ]);
    const hits = listIntegratedEffectIntents(q as never);
    const ordered = orderIntegratedEffectIntents(q as never, hits);
    expect(ordered.map((i) => i.id)).toEqual(["i-d6", "i-d4", "i-d5"]);

    const dependsOn = new Map(q.intents.map((i) => [i.id as string, (i.dependsOn as string[]) ?? []]));
    const integratedIds = new Set(ordered.map((i) => i.id));
    const outcomes = new Map<string, string>();
    const pending = new Set(ordered.map((i) => i.id));
    const orderedIds = ordered.map((i) => i.id);

    const w1 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w1.ready).toEqual(["i-d6"]);
    expect(w1.blocked).toEqual([]);

    outcomes.set("i-d6", "APPLIED");
    pending.delete("i-d6");
    const w2 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w2.ready).toEqual(["i-d4"]);

    outcomes.set("i-d4", "APPLIED");
    pending.delete("i-d4");
    const w3 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w3.ready).toEqual(["i-d5"]);
  });

  it("blocks dependent and keeps independent ready after refusal", () => {
    const dependsOn = new Map<string, string[]>([
      ["i-d6", []],
      ["i-d4-dep", ["i-d6"]],
      ["i-d4-free", []],
    ]);
    const integratedIds = new Set(["i-d6", "i-d4-dep", "i-d4-free"]);
    const orderedIds = ["i-d4-dep", "i-d4-free", "i-d6"];
    const outcomes = new Map<string, string>([["i-d6", "REJECTED"]]);
    const pending = new Set(["i-d4-dep", "i-d4-free"]);

    const plan = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(plan.ready).toEqual(["i-d4-free"]);
    expect(plan.blocked.map((b) => b.id)).toEqual(["i-d4-dep"]);
  });

  it("partitions knowledge and pilotage within a wave", () => {
    const familyById = new Map([
      ["a", "knowledge" as const],
      ["b", "pilotage" as const],
      ["c", "knowledge" as const],
    ]);
    expect(partitionWaveByFamily(["a", "b", "c"], familyById)).toEqual({
      knowledgeIds: ["a", "c"],
      pilotageIds: ["b"],
    });
  });

  it("fail-closes hors-périmètre dependsOn without inventing success", () => {
    const plan = planIntegratedEffectWave({
      pendingIds: ["i-d5"],
      orderedIds: ["i-d5"],
      dependsOn: new Map([["i-d5", ["i-d7-publish"]]]),
      outcomes: new Map(),
      integratedIds: new Set(["i-d5"]),
    });
    expect(plan.ready).toEqual([]);
    expect(plan.blocked[0]?.id).toBe("i-d5");
    expect(plan.blocked[0]?.reason).toMatch(/hors intentions intégrées/);
  });

  it("rewrites local intent subject refs from prior-wave creations", () => {
    const out = rewriteKnowledgeProposalLocalRefs(
      [
        {
          intentId: "i-child",
          parentSubjectId: "i-parent",
          subjectId: undefined,
        },
      ],
      new Map([["i-parent", "subj_abc"]]),
    );
    expect(out[0]?.parentSubjectId).toBe("subj_abc");
  });

  it("blocks unresolved local subject refs after prior wave", () => {
    const reason = unresolvedLocalSubjectRefBlockReason({
      proposal: {
        intentId: "i-child",
        parentSubjectId: "i-missing",
      },
      sameWaveIntentIds: new Set(["i-child"]),
      integratedIds: new Set(["i-child", "i-missing"]),
      createdSubjectByIntentId: new Map(),
    });
    expect(reason).toMatch(/non résolue/);
  });
});
