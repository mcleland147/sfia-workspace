import { describe, expect, it } from "vitest";
import {
  appendMissionAck,
  attemptIsNoraMission,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  isNoraMissionPublicationKey,
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
    expect(m.needsExplicitPath).toBe(false);
  });

  it("P1-E: does not treat GitHub subject mention as publish action", () => {
    const m = qualifyPublicationMission("Explique la différence entre blob et commit sur GitHub");
    expect(m.wantsPublish).toBe(false);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("P1-E: publish without path requires clarification (no silent default)", () => {
    const m = qualifyPublicationMission(
      "Crée un document intitulé X et publie-le dans mon dépôt GitHub",
    );
    expect(m.wantsPublish).toBe(true);
    expect(m.needsExplicitPath).toBe(true);
    expect(m.targetPath).toBeNull();
    expect(m.clarify).toMatch(/chemin/i);
  });

  it("P1-E: ambiguous publish without CREATE", () => {
    const m = qualifyPublicationMission("publie-le sur GitHub chemin docs/a.md");
    expect(m.wantsPublish).toBe(true);
    expect(m.wantsDocumentCreate).toBe(false);
  });

  it("derives stable correlation keys before effects", () => {
    const keys = missionCorrelationKeys("intent-abc");
    expect(keys.document).toBe("doc:mission:intent-abc");
    expect(keys.publication).toBe("pub:mission:intent-abc");
    expect(isNoraMissionPublicationKey(keys.publication)).toBe(true);
    expect(isNoraMissionPublicationKey("pub-project-rev-123")).toBe(false);
    expect(attemptIsNoraMission({ correlationKey: keys.publication })).toBe(true);
    expect(attemptIsNoraMission({ correlationKey: "pub-classic-panel" })).toBe(false);
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
