import { describe, expect, it } from "vitest";
import {
  documentaryMaterializeIntents,
  effectIntents,
  projectStudioEffects,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function q(intents: NoraTurnQualification["intents"]): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal: "test",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents,
    clarifications: [],
    replyDraft: "ok",
  };
}

describe("ML5 documentary PREPARE materialization (AssetTrack causes)", () => {
  it("PREPARE revise projects documentAct with inspectionRequired — effectIntents stay empty", () => {
    const qual = q([
      {
        id: "revision-rm03-r04",
        capabilityId: "d4.revise_document",
        mode: "PREPARE",
        summary: "Préparer RM-03 et R04 pour inspection",
        parameters: {
          documentHint: "AssetTrack — Conception fonctionnelle V1",
          sectionHint: "Section 2 (RM-03) et section 4 (R04)",
          effectConditionStatus: "OPEN",
        },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ]);
    expect(effectIntents(qual)).toHaveLength(0);
    expect(documentaryMaterializeIntents(qual)).toHaveLength(1);
    const proj = projectStudioEffects(qual);
    expect(proj.documentAct).toEqual({
      kind: "REVISE",
      mode: "PREPARE",
      inspectionRequired: true,
      intentId: "revision-rm03-r04",
      documentHint: "AssetTrack — Conception fonctionnelle V1",
      sectionHint: "Section 2 (RM-03) et section 4 (R04)",
    });
  });

  it("PREPARE create projects CREATE without widening D7 PREPARE to publication", () => {
    const qual = q([
      {
        id: "note-1",
        capabilityId: "d4.create_document",
        mode: "PREPARE",
        summary: "Préparer une note technique",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
      {
        id: "pub-1",
        capabilityId: "d7.prepare_publication",
        mode: "PREPARE",
        summary: "ne doit pas publier",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ]);
    const proj = projectStudioEffects(qual);
    expect(proj.documentAct.kind).toBe("CREATE");
    if (proj.documentAct.kind === "CREATE") {
      expect(proj.documentAct.mode).toBe("PREPARE");
      expect(proj.documentAct.inspectionRequired).toBe(false);
    }
    expect(proj.publication.wantsPublish).toBe(false);
    expect(effectIntents(qual)).toHaveLength(0);
  });
});
