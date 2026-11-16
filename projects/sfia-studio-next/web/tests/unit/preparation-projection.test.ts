import { describe, expect, it } from "vitest";
import {
  canCreateFromProjection,
  draftProjectionFromQualification,
  normalizeProjectNameKey,
  previewFieldsFromProjection,
  projectionMateriallyChanged,
  type PreparationProjection,
} from "@/domains/preparation/projection";

describe("preparation projection helpers", () => {
  it("normalizes name keys (trim, spaces, case) while preserving accents", () => {
    expect(normalizeProjectNameKey("  Atlas   Pilot  ")).toBe("atlas pilot");
    expect(normalizeProjectNameKey("École")).toBe("école");
    expect(normalizeProjectNameKey("ECOLE")).not.toBe(normalizeProjectNameKey("École"));
  });

  it("drafts exploring/clarifying/proposal/base assessments without opaque scores", () => {
    const exploring = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "",
      clarifications: [],
      proposedProjectName: null,
    });
    expect(exploring?.suggestion?.assessment).toBe("EXPLORING");

    const clarifying = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "Suivre les indicateurs de vente",
      clarifications: ["Quel périmètre de données ?"],
      proposedProjectName: null,
    });
    expect(clarifying?.suggestion?.assessment).toBe("CLARIFYING");
    expect(clarifying?.openQuestions.length).toBe(1);

    const proposal = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t3",
      qualificationStatus: "QUALIFIED",
      goal: "Tableau de bord ventes",
      clarifications: ["Quelle fréquence de mise à jour ?"],
      proposedProjectName: "Pilotage ventes",
    });
    expect(proposal?.suggestion?.assessment).toBe("PROPOSAL");
    expect(proposal?.name?.value).toBe("Pilotage ventes");

    const base = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "Tableau de bord ventes",
      clarifications: [],
      proposedProjectName: "Pilotage ventes",
      replySignalsBaseSufficiency: true,
    });
    expect(base?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
    expect(base?.suggestion?.explanation).not.toMatch(/\b\d{1,3}\s*%|\bscore\b/i);
  });

  it("returns null draft when qualification is unavailable", () => {
    expect(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t",
        qualificationStatus: "UNAVAILABLE",
        goal: "x",
        clarifications: [],
        proposedProjectName: "Y",
      }),
    ).toBeNull();
  });

  it("detects material changes and ignores no-op revisions", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "Intention A",
      clarifications: [],
      proposedProjectName: "Nom A",
    })!;
    const prev: PreparationProjection = {
      ...draft,
      revision: 2,
      observedAt: "2026-11-16T10:00:00.000Z",
    };
    expect(projectionMateriallyChanged(prev, draft)).toBe(false);
    expect(
      projectionMateriallyChanged(prev, {
        ...draft,
        intention: {
          ...draft.intention!,
          value: "Intention B",
        },
      }),
    ).toBe(true);
  });

  it("syncs preview fields and create precondition from projection", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "Intention",
      clarifications: [],
      proposedProjectName: "Nom",
    })!;
    const projection: PreparationProjection = {
      ...draft,
      revision: 3,
      observedAt: "2026-11-16T10:00:00.000Z",
    };
    const preview = previewFieldsFromProjection(projection, "fallback", "sum");
    expect(preview.previewName).toBe("Nom");
    expect(preview.previewSummary).toContain("Intention");
    expect(canCreateFromProjection(projection, "")).toBe(true);
    expect(canCreateFromProjection(null, "")).toBe(false);
    expect(canCreateFromProjection(null, "Manuel")).toBe(true);
  });
});
