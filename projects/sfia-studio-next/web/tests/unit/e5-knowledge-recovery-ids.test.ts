import { describe, expect, it } from "vitest";
import { extractDurableKnowledgeIntentIds } from "@/domains/conversation/service";

describe("E5 knowledge recovery intent ids", () => {
  it("unions knowledgeEffects, capitalisationAttempted and d4 stash intents", () => {
    const ids = extractDurableKnowledgeIntentIds({
      fromJsonEffects: [
        {
          attempted: false,
          capabilityId: "d4.record_knowledge",
          semanticIntentId: "from-json",
          status: "SKIPPED",
          reasonCode: null,
          reason: null,
          ownerRef: null,
          proposalKind: null,
        },
      ],
      resultJson: JSON.stringify({
        capitalisationAttempted: [{ intentId: "from-cap", status: "AVAILABLE", id: "acq_1" }],
        semanticQualification: {
          status: "QUALIFIED",
          intents: [
            {
              id: "from-stash",
              mode: "REQUEST_EFFECT",
              capabilityId: "d4.record_knowledge",
            },
            {
              id: "pilotage-ignored",
              mode: "REQUEST_EFFECT",
              capabilityId: "d5.pilotage_command",
            },
          ],
        },
      }),
    });
    expect(ids.sort()).toEqual(["from-cap", "from-json", "from-stash"].sort());
  });
});
