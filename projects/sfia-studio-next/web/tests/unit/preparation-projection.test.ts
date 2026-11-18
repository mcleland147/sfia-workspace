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
      projectIntention: "Cockpit de suivi",
      desiredOutcome: "Voir portefeuille",
      initialScope: "Portefeuille",
      clarifications: [],
      proposedProjectName: "Cockpit projets",
      // no preparationAssessment
    });
    expect(draft?.name?.value).toBe("Cockpit projets");
    expect(draft?.intention?.value).toBe("Cockpit de suivi");
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
      projectIntention: "Cockpit de suivi",
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
      projectIntention: "",
      clarifications: [],
      proposedProjectName: "Assistant de pilotage",
      preparationAssessment: "PROPOSAL",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, noraDraft);
    expect(merged.name?.value).toBe("Cockpit projets");
    expect(merged.name?.status).toBe("PILOT_EXPRESSED");
    expect(merged.name?.source.kind).toBe("PILOT_UI_EDIT");
    expect(merged.intention?.value).toBe("Suivi projets");
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
      projectIntention: "Intention A",
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

  it("C1 — rename goal does not overwrite durable projectIntention", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "Confirmer le périmètre V1",
      projectIntention:
        "Aider les chefs de projet informatiques à retrouver décisions, blocages et actions",
      desiredOutcome: "Retrouver rapidement les engagements après réunion",
      initialScope: "Espace personnel manuel : décisions, blocages, actions",
      clarifications: [],
      proposedProjectName: "Assistant de pilotage",
      preparationAssessment: "BASE_SUFFICIENTE",
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 4,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const renameDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t5",
      qualificationStatus: "QUALIFIED",
      goal:
        'Retenir "Cockpit Réunions Projet — Test 16-11" comme nom de travail et confirmer le premier périmètre',
      projectIntention: "",
      desiredOutcome: "Retrouver rapidement les engagements après réunion",
      initialScope: "Espace personnel manuel : décisions, blocages, actions",
      clarifications: [],
      proposedProjectName: "Cockpit Réunions Projet — Test 16-11",
      preparationAssessment: "BASE_SUFFICIENTE",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, renameDraft);
    expect(merged.name?.value).toBe("Cockpit Réunions Projet — Test 16-11");
    expect(merged.intention?.value).toContain("chefs de projet informatiques");
    expect(merged.intention?.value).not.toMatch(/Retenir/);
    expect(merged.desiredOutcome?.value).toContain("engagements");
  });

  it("C1 — explicit reorientation updates durable intention", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-old",
      qualificationStatus: "QUALIFIED",
      goal: "Suivi des réunions",
      projectIntention: "Suivre les décisions de réunion",
      clarifications: [],
      proposedProjectName: null,
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 2,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const reorient = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-new",
      qualificationStatus: "QUALIFIED",
      goal: "Réorientation budgétaire",
      projectIntention: "Préparer et suivre le budget projet",
      clarifications: ["Quels postes budgétaires sont prioritaires ?"],
      proposedProjectName: null,
      preparationAssessment: "CLARIFYING",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, reorient);
    expect(merged.intention?.value).toBe("Préparer et suivre le budget projet");
  });

  it("C2 — empty clarifications replace prior open questions", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t3",
      qualificationStatus: "QUALIFIED",
      goal: "Usage post-réunion",
      projectIntention: "Retrouver décisions après réunion",
      clarifications: [
        "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
      ],
      proposedProjectName: null,
      preparationAssessment: "CLARIFYING",
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 3,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const resolved = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "V1 manuelle retenue",
      projectIntention: "Retrouver décisions après réunion",
      initialScope: "Saisie manuelle ; intégrations en V2",
      clarifications: [],
      proposedProjectName: null,
      preparationAssessment: "PROPOSAL",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, resolved);
    expect(merged.openQuestions).toEqual([]);
    expect(merged.initialScope?.value).toContain("Saisie manuelle");
  });

  it("C2 — UNAVAILABLE draft is null and does not invent intention", () => {
    expect(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t-u",
        qualificationStatus: "UNAVAILABLE",
        goal: "should-not-apply",
        clarifications: [],
        proposedProjectName: null,
      }),
    ).toBeNull();
  });
});
