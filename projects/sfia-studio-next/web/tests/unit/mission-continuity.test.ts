import { describe, expect, it } from "vitest";
import {
  appendMissionAck,
  attemptIsNoraMission,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  isNoraMissionPublicationKey,
  missionCorrelationKeys,
  qualifyPublicationMission,
  extractPublicationPathHint,
  type MissionProjection,
} from "@/domains/conversation/mission-continuity";

describe("mission-continuity helpers", () => {
  it("SEM-02: qualifyPublicationMission is fail-closed stub", () => {
    const text =
      "Crée un document intitulé Mission Continuity et publie-le dans mon dépôt GitHub sous docs/studio-next/mission.md";
    const m = qualifyPublicationMission(text);
    expect(m.wantsPublish).toBe(false);
    expect(m.wantsDocumentCreate).toBe(false);
    expect(extractPublicationPathHint(text)).toBe("docs/studio-next/mission.md");
  });

  it("P1-E: GitHub subject mention remains non-publish via stub", () => {
    const m = qualifyPublicationMission("Explique la différence entre blob et commit sur GitHub");
    expect(m.wantsPublish).toBe(false);
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

  it("appendMissionAck is a no-op (no diagnostic leak)", () => {
    const mission: MissionProjection = {
      clientIntentKey: "k1",
      status: "AWAITING_PILOT_AUTH",
      goalSummary: "pub",
      steps: [],
      restitution: "PENDING",
    };
    expect(appendMissionAck("Bonjour Nora", mission)).toBe("Bonjour Nora");
  });

  it("formatMissionAck / composeCanonicalMissionRestitution stay factual", () => {
    const ack = formatMissionAck({
      clientIntentKey: "k1",
      status: "AWAITING_PILOT_AUTH",
      goalSummary: "pub",
      steps: [{ id: "d7", capabilityId: "d7.prepare_publication", status: "WAITING" }],
      restitution: "PENDING",
    });
    expect(ack).toMatch(/AWAITING_PILOT_AUTH|WAITING|d7/i);
    const composed = composeCanonicalMissionRestitution({
      prepareStatus: "PREPARED",
      attemptId: "att_1",
    });
    expect(composed).toMatch(/Restitution de mission/);
  });
});
