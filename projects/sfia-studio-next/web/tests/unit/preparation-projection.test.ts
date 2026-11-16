import { describe, expect, it } from "vitest";
import {
  canCreateFromProjection,
  draftProjectionFromQualification,
  inspectedCreatePayload,
  mergeNoraDraftWithPrior,
  namesConflictForSamePilot,
  normalizeProjectNameKey,
  pilotExpressedField,
  pilotUiEditField,
  previewFieldsFromProjection,
  projectionMateriallyChanged,
  type PreparationProjection,
} from "@/domains/preparation/projection";

describe("preparation projection helpers (final corrective)", () => {
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

  it("does not fabricate Nora assessment from name/intention presence alone", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-no-assess",
      qualificationStatus: "QUALIFIED",
      goal: "Cockpit de suivi",
      desiredOutcome: "Voir portefeuille",
      initialScope: "Portefeuille",
      clarifications: [],
      proposedProjectName: "Cockpit projets",
      // no preparationAssessment
    });
    expect(draft?.name?.value).toBe("Cockpit projets");
    expect(draft?.suggestion).toBeNull();
    // D2 eligibility can still be true without Nora advice.
    expect(canCreateFromProjection(draft as PreparationProjection, "")).toBe(true);
  });

  it("attributes BASE_SUFFICIENTE only from structured assessment", () => {
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
    expect(draft?.suggestion?.explanation).toContain("Base raisonnable");
  });

  it("preserves pilot-expressed name against Nora re-proposal", () => {
    const prior: PreparationProjection = {
      schemaVersion: 1,
      preparationId: "prep-1",
      revision: 2,
      updatedFromTurnKey: "pilot-ui-edit",
      observedAt: "2026-11-16T10:00:00.000Z",
      name: pilotUiEditField("Cockpit projets", "pilot-ui-edit"),
      intention: pilotExpressedField("Suivi projets", "pilot-turn"),
      desiredOutcome: null,
      initialScope: null,
      openQuestions: [],
      suggestion: {
        assessment: "PROPOSAL",
        explanation: "corrigé",
        sourceTurnKey: "pilot-ui-edit",
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
    expect(merged.name?.source.kind).toBe("PILOT_UI_EDIT");
  });

  it("refuses inventing Projet sans titre", () => {
    expect(inspectedCreatePayload(null, "", "").ok).toBe(false);
    expect(canCreateFromProjection(null, "")).toBe(false);
    const ok = inspectedCreatePayload(null, "Nom réel", "s");
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.projectName).toBe("Nom réel");
  });

  it("resolveInspectedProjectName prefers projection then preview; never invents", async () => {
    const {
      resolveInspectedProjectName,
      requestedNameMatchesInspected,
      classifyPilotPatchWrite,
    } = await import("@/domains/preparation/projection");
    expect(resolveInspectedProjectName(null, "")).toBeNull();
    expect(resolveInspectedProjectName(null, "  Preview  ")).toBe("Preview");
    expect(requestedNameMatchesInspected("Wrong", "Preview")).toBe(false);
    expect(requestedNameMatchesInspected(" preview ", "Preview")).toBe(true);
    expect(
      classifyPilotPatchWrite({
        applyStatus: "APPLIED",
        appliedRevision: 2,
        observedRevision: 2,
      }),
    ).toBe("APPLIED_CURRENT");
    expect(
      classifyPilotPatchWrite({
        applyStatus: "APPLIED",
        appliedRevision: 2,
        observedRevision: 3,
      }),
    ).toBe("APPLIED_SUPERSEDED");
    expect(
      classifyPilotPatchWrite({
        applyStatus: "CONFLICT",
        appliedRevision: null,
        observedRevision: 3,
      }),
    ).toBe("CONFLICT_NOT_APPLIED");
  });

  it("detects material changes and syncs preview fields", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "Intention A",
      clarifications: [],
      proposedProjectName: "Nom A",
      preparationAssessment: "PROPOSAL",
      preparationAssessmentExplanation: "Proposition de travail.",
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
