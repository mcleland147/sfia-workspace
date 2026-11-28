import { describe, expect, it } from "vitest";
import {
  composeKnowledgeEffectRestitution,
  knowledgeEffectActivityLines,
  knowledgeEffectFactLines,
} from "@/domains/conversation/knowledge-effect-restitution";
import type { TurnKnowledgeEffect } from "@/domains/conversation/pilotage-effect-aggregate";

function ke(
  partial: Partial<TurnKnowledgeEffect> & Pick<TurnKnowledgeEffect, "status">,
): TurnKnowledgeEffect {
  return {
    attempted: partial.attempted ?? true,
    capabilityId: "d4.record_knowledge",
    semanticIntentId: partial.semanticIntentId ?? "intent_x",
    status: partial.status,
    reasonCode: partial.reasonCode ?? null,
    reason: partial.reason ?? null,
    ownerRef: partial.ownerRef ?? null,
    proposalKind: partial.proposalKind ?? "ACQUIS",
  };
}

describe("knowledge-effect-restitution (E3 D.3)", () => {
  it("avoids semanticIntentId in primary copy", () => {
    const lines = knowledgeEffectFactLines([
      ke({
        status: "NOT_EXECUTED",
        attempted: false,
        semanticIntentId: "si_secret_should_not_appear",
        reason: "dépendance non satisfaite",
      }),
    ]);
    expect(lines.join(" ")).not.toMatch(/si_secret/);
    expect(lines.join(" ")).not.toMatch(/DEPENDENCY/);
    expect(lines[0]).toMatch(/connaissance capitalisée/);
  });

  it("composes onto prior Nora prose without a Studio block label", () => {
    const out = composeKnowledgeEffectRestitution({
      priorContent: "Voici ce que je retiens.",
      effects: [
        ke({ status: "AVAILABLE", ownerRef: "acq_1", proposalKind: "ACQUIS" }),
        ke({
          status: "UNKNOWN",
          proposalKind: "OPEN_POINT",
        }),
      ],
    });
    expect(out).toContain("Voici ce que je retiens.");
    expect(out).not.toContain("Journal");
    expect(out).toMatch(/reste à confirmer/i);
    expect(out).not.toMatch(/Résultat Studio/i);
    expect(out).not.toMatch(/Je transmets/i);
    const activity = knowledgeEffectActivityLines([
      ke({ status: "AVAILABLE", ownerRef: "acq_1", proposalKind: "ACQUIS" }),
    ]);
    expect(activity.join(" ")).toContain("Journal");
  });
});
