import { describe, expect, it } from "vitest";
import { listPilotageEffectBindings } from "@/domains/conversation/semantic-qualification";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("MP-09 — listPilotageEffectBindings", () => {
  it("returns every admissible pilotage REQUEST_EFFECT in dependsOn order", () => {
    const q = {
      status: "QUALIFIED",
      intents: [
        {
          id: "i-design",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "conception fonctionnelle",
          dependsOn: ["i-open"],
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CONCEPTION_FONCTIONNELLE",
          },
        },
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "ouvrir cycle",
          dependsOn: [],
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CONCEPTION_FONCTIONNELLE",
          },
        },
        {
          id: "i-know",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "mémoire",
          dependsOn: [],
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "Un acquis significatif pour la continuité du projet.",
            epistemic: "established",
          },
        },
      ],
    } as unknown as NoraTurnQualification;

    const bindings = listPilotageEffectBindings(q);
    expect(bindings).toHaveLength(2);
    expect(bindings[0]).toMatchObject({ intentId: "i-open" });
    expect(bindings[1]).toMatchObject({ intentId: "i-design" });
  });
});
