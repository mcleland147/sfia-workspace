import { describe, expect, it } from "vitest";
import {
  draftProjectionFromQualification,
  mergeNoraDraftWithPrior,
  parseProjectionJson,
  type PreparationProjection,
} from "@/domains/preparation/projection";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function asProjection(
  draft: NonNullable<ReturnType<typeof draftProjectionFromQualification>>,
  revision: number,
): PreparationProjection {
  return {
    ...draft,
    revision,
    observedAt: "2026-11-16T12:00:00.000Z",
  };
}

describe("R1/R2 consolidation discriminants", () => {
  it("R1-A — initialise first intention when none prior (goal bootstrap only then)", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-init",
      qualificationStatus: "QUALIFIED",
      goal: "Suivre les décisions de projet",
      projectIntention: "",
      proposedProjectName: null,
      clarifications: [],
      allowGoalIntentionBootstrap: true,
    })!;
    expect(draft.intention?.value).toBe("Suivre les décisions de projet");
  });

  it("R1-B — ordinary turn with empty projectIntention must not overwrite durable intention", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t-init",
        qualificationStatus: "QUALIFIED",
        goal: "Suivre les décisions de projet",
        projectIntention: "Suivre les décisions de projet",
        clarifications: [],
        proposedProjectName: null,
      })!,
      2,
    );
    const ordinary = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-ask",
      qualificationStatus: "QUALIFIED",
      goal: "Recommander les prochaines étapes",
      projectIntention: "",
      proposedProjectName: "",
      clarifications: [],
      allowGoalIntentionBootstrap: false,
    })!;
    const merged = mergeNoraDraftWithPrior(prior, ordinary);
    expect(merged.intention?.value).toBe("Suivre les décisions de projet");
    expect(merged.intention?.value).not.toMatch(/Recommander/);
  });

  it("R1-C — rename updates name and preserves intention", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "cadrage",
        projectIntention: "Suivre les décisions de projet",
        clarifications: [],
        proposedProjectName: "Ancien nom",
      })!,
      2,
    );
    const rename = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: 'Retenir "Nouveau nom" comme nom de travail',
      projectIntention: "",
      clarifications: [],
      proposedProjectName: "Nouveau nom",
      allowGoalIntentionBootstrap: false,
    })!;
    const merged = mergeNoraDraftWithPrior(prior, rename);
    expect(merged.name?.value).toBe("Nouveau nom");
    expect(merged.intention?.value).toBe("Suivre les décisions de projet");
  });

  it("R1-D — explicit projectIntention reorientation is allowed", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "réunions",
        projectIntention: "Suivre les décisions de réunion",
        clarifications: [],
        proposedProjectName: null,
      })!,
      2,
    );
    const reorient = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "réorientation",
      projectIntention: "Préparer et suivre le budget projet",
      clarifications: [],
      proposedProjectName: null,
    })!;
    expect(mergeNoraDraftWithPrior(prior, reorient).intention?.value).toBe(
      "Préparer et suivre le budget projet",
    );
  });

  it("R1-E — UNAVAILABLE invents nothing", () => {
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

  it("R1-F — old projection / envelope without projectIntention does not crash", () => {
    const legacy = parseProjectionJson(
      {
        schemaVersion: 1,
        preparationId: "prep-legacy",
        revision: 1,
        updatedFromTurnKey: "t0",
        observedAt: "2026-11-01T00:00:00.000Z",
        name: null,
        intention: {
          value: "Ancienne intention",
          status: "NORA_PROPOSED",
          source: { kind: "NORA_TURN", ref: "t0" },
          isCurrent: true,
        },
        desiredOutcome: null,
        initialScope: null,
        openQuestions: [],
        suggestion: null,
      },
      "prep-legacy",
      1,
    );
    expect(legacy?.intention?.value).toBe("Ancienne intention");

    const raw = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "Tour ordinaire",
      intents: [],
      clarifications: [],
      replyDraft: "ok",
      // projectIntention ABSENT
    };
    expect(Object.prototype.hasOwnProperty.call(raw, "projectIntention")).toBe(false);
    const parsed = validateNoraTurnQualification(raw);
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const draft = draftProjectionFromQualification({
      preparationId: "prep-legacy",
      turnKey: "t1",
      qualificationStatus: parsed.value.status,
      goal: parsed.value.goal,
      projectIntention: parsed.value.projectIntention || "",
      clarifications: parsed.value.clarifications ?? [],
      proposedProjectName: null,
      allowGoalIntentionBootstrap: false,
    })!;
    const merged = mergeNoraDraftWithPrior(legacy, draft);
    expect(merged.intention?.value).toBe("Ancienne intention");
  });

  it("R2-A — explicit clarifications populate current open questions", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "q",
      projectIntention: "i",
      clarifications: ["Question A"],
      proposedProjectName: null,
    })!;
    expect(draft.openQuestions.map((q) => q.value)).toEqual(["Question A"]);
  });

  it("R2-B — explicit empty clarifications clears current open questions", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "i",
        clarifications: ["Question A"],
        proposedProjectName: null,
      })!,
      2,
    );
    const resolved = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "résolu",
      projectIntention: "i",
      clarifications: [],
      proposedProjectName: null,
    })!;
    expect(mergeNoraDraftWithPrior(prior, resolved).openQuestions).toEqual([]);
  });

  it("R2-C — QUALIFIED omitting clarifications preserves prior open questions (raw absence)", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "Suivre les décisions",
        clarifications: ["Alimentation manuelle ou automatique ?"],
        proposedProjectName: null,
      })!,
      3,
    );

    const raw = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "Tour partiel sans réévaluation des questions",
      projectIntention: "Suivre les décisions",
      intents: [],
      replyDraft: "ok",
    };
    expect(Object.prototype.hasOwnProperty.call(raw, "clarifications")).toBe(false);

    const parsed = validateNoraTurnQualification(raw);
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;

    // Proof that omission ≠ [] after validation (no silent default).
    expect(parsed.value.clarifications).toBeUndefined();
    expect(Array.isArray(parsed.value.clarifications) && parsed.value.clarifications.length === 0).toBe(
      false,
    );

    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-omit",
      qualificationStatus: parsed.value.status,
      goal: parsed.value.goal,
      projectIntention: parsed.value.projectIntention || "",
      clarifications: parsed.value.clarifications,
      proposedProjectName: parsed.value.proposedProjectName || null,
    })!;
    const merged = mergeNoraDraftWithPrior(prior, draft);
    expect(merged.openQuestions.map((q) => q.value)).toEqual([
      "Alimentation manuelle ou automatique ?",
    ]);
  });

  it("R2-D — UNAVAILABLE does not clear prior questions via draft", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "i",
        clarifications: ["Question A"],
        proposedProjectName: null,
      })!,
      2,
    );
    expect(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t-u",
        qualificationStatus: "UNAVAILABLE",
        goal: "x",
        clarifications: ["reason"],
        proposedProjectName: null,
      }),
    ).toBeNull();
    // No draft → apply path skips; prior remains authoritative.
    expect(prior.openQuestions.map((q) => q.value)).toEqual(["Question A"]);
  });

  it("R2-E — NEEDS_CLARIFICATION omitting clarifications does not resolve all questions", () => {
    const prior = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "i",
        clarifications: ["Question A", "Question B"],
        proposedProjectName: null,
      })!,
      2,
    );
    const raw = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION",
      goal: "Besoin de précision",
      projectIntention: "",
      intents: [],
      replyDraft: "Pouvez-vous préciser ?",
      // clarifications absent
    };
    const parsed = validateNoraTurnQualification(raw);
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value.clarifications).toBeUndefined();
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-nc",
      qualificationStatus: parsed.value.status,
      goal: parsed.value.goal,
      projectIntention: parsed.value.projectIntention || "",
      clarifications: parsed.value.clarifications,
      proposedProjectName: null,
    })!;
    const merged = mergeNoraDraftWithPrior(prior, draft);
    expect(merged.openQuestions.map((q) => q.value)).toEqual(["Question A", "Question B"]);
  });

  it("R2-F — rename after explicit resolution does not revive Question A", () => {
    const withQ = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "i",
        clarifications: ["Question A"],
        proposedProjectName: "Nom A",
      })!,
      2,
    );
    const resolved = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "Manuelle pour la V1",
      projectIntention: "i",
      clarifications: [],
      proposedProjectName: "Nom A",
    })!;
    const afterResolve = asProjection(mergeNoraDraftWithPrior(withQ, resolved) as typeof withQ, 3);
    expect(afterResolve.openQuestions).toEqual([]);

    const rename = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t3",
      qualificationStatus: "QUALIFIED",
      goal: "Retenir Nom B",
      projectIntention: "",
      clarifications: [],
      proposedProjectName: "Nom B",
      allowGoalIntentionBootstrap: false,
    })!;
    const afterRename = mergeNoraDraftWithPrior(afterResolve, rename);
    expect(afterRename.openQuestions).toEqual([]);
    expect(afterRename.name?.value).toBe("Nom B");
    expect(afterRename.intention?.value).toBe("i");
  });

  it("R2-G — later explicit clarifications can reopen a subject", () => {
    const cleared = asProjection(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t1",
        qualificationStatus: "QUALIFIED",
        goal: "q",
        projectIntention: "i",
        clarifications: [],
        proposedProjectName: null,
      })!,
      2,
    );
    const reopen = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "nouvelle contradiction",
      projectIntention: "i",
      clarifications: ["Faut-il finalement automatiser l'alimentation ?"],
      proposedProjectName: null,
    })!;
    expect(mergeNoraDraftWithPrior(cleared, reopen).openQuestions.map((q) => q.value)).toEqual([
      "Faut-il finalement automatiser l'alimentation ?",
    ]);
  });

  it("R2-H — explicit [] after parse is not confused with omission", () => {
    const withEmpty = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "résolu",
      intents: [],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(withEmpty.ok).toBe(true);
    if (!withEmpty.ok) return;
    expect(withEmpty.value.clarifications).toEqual([]);

    const omitted = validateNoraTurnQualification({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "partiel",
      intents: [],
      replyDraft: "ok",
    });
    expect(omitted.ok).toBe(true);
    if (!omitted.ok) return;
    expect(omitted.value.clarifications).toBeUndefined();
  });
});
