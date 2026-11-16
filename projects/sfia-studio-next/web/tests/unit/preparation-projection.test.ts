import { describe, expect, it } from "vitest";
import {
  canCreateFromProjection,
  draftProjectionFromQualification,
  inspectedCreatePayload,
  mergeNoraDraftWithPrior,
  namesConflictForSamePilot,
  normalizeProjectNameKey,
  pilotExpressedField,
  previewFieldsFromProjection,
  projectionMateriallyChanged,
  type PreparationProjection,
} from "@/domains/preparation/projection";

describe("preparation projection helpers (corrective)", () => {
  it("normalizes name keys (trim, spaces, case) while preserving accents", () => {
    expect(normalizeProjectNameKey("  Atlas   Pilot  ")).toBe("atlas pilot");
    expect(normalizeProjectNameKey("École")).toBe("école");
    expect(namesConflictForSamePilot("École", "ecole")).toBe(false);
    expect(namesConflictForSamePilot("Atlas", "  atlas ")).toBe(true);
  });

  it("does not treat negation as BASE_SUFFICIENTE via keywords", () => {
    const clarifying = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-neg",
      qualificationStatus: "QUALIFIED",
      goal: "Base encore insuffisante",
      clarifications: ["Quel résultat concret voulez-vous obtenir en premier ?"],
      proposedProjectName: null,
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "Le Pilote indique explicitement que la base n'est pas suffisante.",
    });
    expect(clarifying?.suggestion?.assessment).toBe("CLARIFYING");
    expect(clarifying?.suggestion?.assessment).not.toBe("BASE_SUFFICIENTE");
  });

  it("fills desiredOutcome and initialScope from structured qualification", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-rich",
      qualificationStatus: "QUALIFIED",
      goal: "Cockpit de suivi",
      desiredOutcome: "Voir portefeuille et risques",
      initialScope: "Portefeuille et risques",
      clarifications: [],
      proposedProjectName: "Cockpit projets",
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation: "Base raisonnable pour démarrer.",
    });
    expect(draft?.desiredOutcome?.value).toBe("Voir portefeuille et risques");
    expect(draft?.initialScope?.value).toBe("Portefeuille et risques");
    expect(draft?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
  });

  it("preserves pilot-expressed name against Nora re-proposal", () => {
    const prior: PreparationProjection = {
      schemaVersion: 1,
      preparationId: "prep-1",
      revision: 2,
      updatedFromTurnKey: "pilot-edit",
      observedAt: "2026-11-16T10:00:00.000Z",
      name: pilotExpressedField("Cockpit projets", "pilot-edit"),
      intention: pilotExpressedField("Suivi projets", "pilot-edit"),
      desiredOutcome: null,
      initialScope: null,
      openQuestions: [],
      suggestion: {
        assessment: "PROPOSAL",
        explanation: "corrigé",
        sourceTurnKey: "pilot-edit",
      },
    };
    const noraDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "nora-late",
      qualificationStatus: "QUALIFIED",
      goal: "Assistant de pilotage",
      clarifications: [],
      proposedProjectName: "Assistant de pilotage",
      preparationAssessment: "PROPOSAL",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, noraDraft);
    expect(merged.name?.value).toBe("Cockpit projets");
    expect(merged.name?.status).toBe("PILOT_EXPRESSED");
  });

  it("refuses inventing Projet sans titre", () => {
    expect(inspectedCreatePayload(null, "", "").ok).toBe(false);
    expect(canCreateFromProjection(null, "")).toBe(false);
    const ok = inspectedCreatePayload(null, "Nom réel", "s");
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.projectName).toBe("Nom réel");
  });

  it("detects material changes and syncs preview fields", () => {
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
    const preview = previewFieldsFromProjection(prev, "fallback", "sum");
    expect(preview.previewName).toBe("Nom A");
  });
});
