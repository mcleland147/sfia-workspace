import { describe, expect, it } from "vitest";
import {
  resolveSasPresentationStage,
  sasPresentationCopy,
  shouldShowCreateProjectCta,
} from "@/components/figma/sas-presentation";
import { canCreateFromProjection } from "@/domains/preparation/projection";
import type { PreparationProjection } from "@/domains/preparation/projection";

describe("Sas Nora presentation stage", () => {
  it("maps assessment to Figma stages without text heuristics", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "EXPLORING",
        messageCount: 0,
      }),
    ).toBe("first_intention");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "CLARIFYING",
        messageCount: 2,
      }),
    ).toBe("clarification");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "PROPOSAL",
        messageCount: 3,
      }),
    ).toBe("proposal");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: "BASE_SUFFICIENTE",
        messageCount: 4,
      }),
    ).toBe("base_sufficient");
  });

  it("prefers resume stage when preparation is reopened", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: true,
        assessment: "BASE_SUFFICIENTE",
        messageCount: 5,
      }),
    ).toBe("resume");
  });

  it("falls back from empty vs non-empty thread when assessment absent", () => {
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: null,
        messageCount: 0,
      }),
    ).toBe("first_intention");
    expect(
      resolveSasPresentationStage({
        isResumed: false,
        assessment: undefined,
        messageCount: 2,
      }),
    ).toBe("clarification");
  });

  it("exposes Figma copy for each stage", () => {
    expect(sasPresentationCopy("first_intention").title).toBe("Parlons de votre projet");
    expect(sasPresentationCopy("clarification").panelBadge).toBe("Clarification");
    expect(sasPresentationCopy("proposal").kicker).toBe("PROPOSITION ÉVOLUTIVE");
    expect(sasPresentationCopy("base_sufficient").panelBadgeTone).toBe("green");
    expect(sasPresentationCopy("resume").headerBreadcrumb).toBe("Préparation reprise");
  });
});

describe("Create CTA eligibility (D2 only — no Nora gate)", () => {
  function namedProjection(
    suggestion: PreparationProjection["suggestion"],
  ): PreparationProjection {
    return {
      schemaVersion: 1,
      preparationId: "prep-test",
      revision: 1,
      updatedFromTurnKey: null,
      observedAt: null,
      name: {
        value: "Projet Atlas",
        status: "PILOT_EXPRESSED",
        source: { kind: "PILOT_UI_EDIT", ref: "ui" },
        isCurrent: true,
      },
      intention: null,
      desiredOutcome: null,
      initialScope: null,
      openQuestions: [],
      suggestion,
    };
  }

  it("T01 — hides CTA when D2 canCreate is false", () => {
    const canCreate = canCreateFromProjection(null, "");
    expect(canCreate).toBe(false);
    expect(shouldShowCreateProjectCta({ created: false, canCreate })).toBe(false);
  });

  it("T02 — shows CTA when D2 canCreate true even if CLARIFYING", () => {
    const projection = namedProjection({
      assessment: "CLARIFYING",
      explanation: "Besoin de préciser le résultat",
      sourceTurnKey: "t1",
    });
    const canCreate = canCreateFromProjection(projection, "");
    expect(canCreate).toBe(true);
    expect(shouldShowCreateProjectCta({ created: false, canCreate })).toBe(true);
  });

  it("T03 — shows CTA when D2 canCreate true for PROPOSAL", () => {
    const projection = namedProjection({
      assessment: "PROPOSAL",
      explanation: "Proposition enrichie",
      sourceTurnKey: "t2",
    });
    expect(
      shouldShowCreateProjectCta({
        created: false,
        canCreate: canCreateFromProjection(projection, ""),
      }),
    ).toBe(true);
  });

  it("T04 — shows CTA when D2 canCreate true for BASE_SUFFICIENTE", () => {
    const projection = namedProjection({
      assessment: "BASE_SUFFICIENTE",
      explanation: "Base suffisante",
      sourceTurnKey: "t3",
    });
    expect(
      shouldShowCreateProjectCta({
        created: false,
        canCreate: canCreateFromProjection(projection, ""),
      }),
    ).toBe(true);
  });

  it("T05 — shows CTA on resume when D2 canCreate true", () => {
    const projection = namedProjection({
      assessment: "CLARIFYING",
      explanation: "Reprise partielle",
      sourceTurnKey: "t4",
    });
    expect(
      shouldShowCreateProjectCta({
        created: false,
        canCreate: canCreateFromProjection(projection, "Projet Atlas"),
      }),
    ).toBe(true);
  });

  it("T06 — assessment absent with D2 name does not add a Nora gate", () => {
    const projection = namedProjection(null);
    expect(projection.suggestion).toBeNull();
    expect(
      shouldShowCreateProjectCta({
        created: false,
        canCreate: canCreateFromProjection(projection, ""),
      }),
    ).toBe(true);
  });

  it("hides CTA after project already created", () => {
    expect(
      shouldShowCreateProjectCta({
        created: true,
        canCreate: true,
      }),
    ).toBe(false);
  });
});
