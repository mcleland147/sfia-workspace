import { describe, expect, it } from "vitest";
import {
  buildInitialForecast,
  qualificationInputFingerprint,
  validateStructuredForecast,
} from "@/domains/pilotage/forecast-builder";
import type { PreparationProjection } from "@/domains/preparation/projection";

function projection(partial: Partial<PreparationProjection>): PreparationProjection {
  return {
    schemaVersion: 1,
    preparationId: "prep_1",
    revision: 1,
    updatedFromTurnKey: null,
    observedAt: null,
    name: null,
    intention: null,
    desiredOutcome: null,
    initialScope: null,
    openQuestions: [],
    suggestion: null,
    ...partial,
  };
}

describe("ensemble07 forecast builder", () => {
  it("returns CLARIFICATION when no durable text", () => {
    const r = buildInitialForecast({ projection: null, previewSummary: "   " });
    expect(r.kind).toBe("CLARIFICATION");
  });

  it("does not invent CADRAGE when intention lacks cycle signal (E07-COR-06)", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Lancer un produit B2B pour équipes terrain",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "Terrain",
    });
    expect(r.kind).toBe("CLARIFICATION");
  });

  it("proposes CADRAGE when intention explicitly signals cadrage", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Besoin d'un cadrage pour clarifier le périmètre B2B terrain",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(r.kind).toBe("PROPOSE");
    if (r.kind === "PROPOSE") {
      expect(r.steps[0]!.cycleType).toBe("CADRAGE");
    }
  });

  it("honours explicit UX cycle mention", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Concevoir l'expérience utilisateur d'une application mobile",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(r.kind).toBe("PROPOSE");
    if (r.kind === "PROPOSE") {
      expect(r.steps[0]!.cycleType).toBe("UX_UI");
    }
  });

  it("FIX-07: validateStructuredForecast accepts ordered propose", () => {
    const r = buildInitialForecast({
      projection: projection({
        intention: {
          value: "Besoin d'un cadrage pour clarifier le périmètre",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(validateStructuredForecast(r).ok).toBe(true);
  });

  it("FIX-07: validateStructuredForecast rejects empty propose steps", () => {
    const bad = validateStructuredForecast({
      kind: "PROPOSE",
      steps: [],
      orientation: "x",
      summary: "y",
    });
    expect(bad.ok).toBe(false);
  });

  it("FIX-04: fingerprint changes when openQuestions change", () => {
    const base = {
      preparationId: "prep_1",
      previewSummary: "s",
      creationRevision: 1,
      projection: projection({
        intention: {
          value: "intention",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
    };
    const a = qualificationInputFingerprint(base);
    const b = qualificationInputFingerprint({
      ...base,
      projection: projection({
        intention: base.projection.intention,
        openQuestions: [
          {
            value: "Quelle contrainte budget ?",
            status: "PILOT_EXPRESSED",
            source: { kind: "PILOT_TURN", ref: "t2" },
            isCurrent: true,
          },
        ],
      }),
    });
    expect(a).not.toBe(b);
  });
});