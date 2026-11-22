import { describe, expect, it } from "vitest";
import {
  documentaryRootFilenameFromTitle,
  isPublicationPathClarificationResume,
  resolvePublicationPathAfterClarification,
  userSignalsRepositoryRootPath,
  type MissionProjection,
} from "@/domains/conversation/mission-continuity";

function clarifyingMission(overrides?: Partial<MissionProjection>): MissionProjection {
  return {
    clientIntentKey: "turn-path-await",
    status: "AWAITING_CLARIFICATION",
    goalSummary: "Document identifié — chemin Git requis avant préparation",
    restitution: "DELIVERED",
    steps: [
      {
        id: "d4_source",
        capabilityId: "d4.create_document",
        status: "DONE",
        documentId: "doc_1",
        revisionId: "drev_1",
      },
      {
        id: "d7_prepare",
        capabilityId: "d7.prepare_publication",
        status: "PENDING",
        documentId: "doc_1",
        revisionId: "drev_1",
        reason: "Chemin de publication Git manquant.",
      },
    ],
    ...overrides,
  };
}

describe("UAT-GIT-PUB-01 publication path clarification resume", () => {
  it("detects AWAITING_CLARIFICATION path mission as resumable when wantsPublish", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission(),
        wantsPublish: true,
      }),
    ).toBe(true);
  });

  it("does not resume when wantsPublish is false", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission(),
        wantsPublish: false,
      }),
    ).toBe(false);
  });

  it("does not resume unrelated awaiting missions", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission({
          steps: [
            {
              id: "d2_create",
              capabilityId: "d2.create_project",
              status: "PENDING",
              reason: "PILOT_ACT_REQUIRED",
            },
          ],
        }),
        wantsPublish: true,
      }),
    ).toBe(false);
  });

  it("recognizes root path signals without inventing a filename alone", () => {
    expect(userSignalsRepositoryRootPath("tu peux le mettre à la racine du dépôt chantiers360")).toBe(
      true,
    );
    expect(userSignalsRepositoryRootPath("ok go")).toBe(false);
    expect(
      resolvePublicationPathAfterClarification({
        userText: "à la racine",
        qualifiedPath: null,
        documentTitle: null,
      }),
    ).toBeNull();
  });

  it("prefers qualified path then derives root filename from title", () => {
    expect(
      resolvePublicationPathAfterClarification({
        userText: "à la racine",
        qualifiedPath: "references-externes-enseignements-chantiers360.md",
        documentTitle: "Références externes — Enseignements de Chantiers360",
      }),
    ).toBe("references-externes-enseignements-chantiers360.md");

    expect(
      documentaryRootFilenameFromTitle("Références externes — Enseignements de Chantiers360"),
    ).toBe("references-externes-enseignements-de-chantiers360.md");

    expect(
      resolvePublicationPathAfterClarification({
        userText: "mets-le à la racine du dépôt",
        qualifiedPath: null,
        documentTitle: "Références externes — Enseignements de Chantiers360",
      }),
    ).toBe("references-externes-enseignements-de-chantiers360.md");
  });
});
