import { describe, expect, it } from "vitest";
import {
  appendMissionAck,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  missionCorrelationKeys,
  qualifyPublicationMission,
  type MissionProjection,
} from "@/domains/conversation/mission-continuity";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";

describe("mission-continuity helpers", () => {
  it("qualifies CREATE+publish mission without authorizing", () => {
    const text =
      "Crée un document intitulé Mission Continuity et publie-le dans mon dépôt GitHub sous docs/studio-next/mission.md";
    expect(qualifyDocumentAct(text).kind).toBe("CREATE");
    const m = qualifyPublicationMission(text);
    expect(m.wantsDocumentCreate).toBe(true);
    expect(m.wantsPublish).toBe(true);
    expect(m.targetPath).toBe("docs/studio-next/mission.md");
  });

  it("does not treat simple chat as publish mission", () => {
    const m = qualifyPublicationMission("Explique la différence entre blob et commit");
    expect(m.wantsPublish).toBe(false);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("derives stable correlation keys before effects", () => {
    const keys = missionCorrelationKeys("intent-abc");
    expect(keys.document).toBe("doc:mission:intent-abc");
    expect(keys.publication).toBe("pub:mission:intent-abc");
  });

  it("mission ACK states AWAITING_PILOT_AUTH without HD", () => {
    const mission: MissionProjection = {
      clientIntentKey: "k1",
      status: "AWAITING_PILOT_AUTH",
      goalSummary: "test",
      restitution: "DELIVERED",
      steps: [
        {
          id: "d7_prepare",
          capabilityId: "d7.prepare_publication",
          status: "WAITING",
          attemptId: "efx_test",
        },
      ],
    };
    const ack = formatMissionAck(mission);
    expect(ack).toMatch(/AWAITING_PILOT_AUTH/);
    expect(ack).toMatch(/aucune HumanDecision créée/i);
    expect(ack).toMatch(/authorizePublication/);
    const composed = appendMissionAck("corps", mission);
    expect(composed).toContain("corps");
    expect(composed).toContain("efx_test");
  });

  it("canonical restitution preserves D4 facts when Continue fails", () => {
    const text = composeCanonicalMissionRestitution({
      documentEffect: {
        act: "CREATE",
        status: "AVAILABLE",
        documentId: "doc_1",
        revisionId: "drev_1",
        revisionNumber: 1,
      },
      prepareStatus: "PREPARED",
      attemptId: "efx_1",
      restitutionNote: "RESTITUTION_PENDING",
    });
    expect(text).toMatch(/doc_1/);
    expect(text).toMatch(/AVAILABLE/);
    expect(text).toMatch(/PREPARED/);
    expect(text).toMatch(/non encore accordée/);
  });
});
