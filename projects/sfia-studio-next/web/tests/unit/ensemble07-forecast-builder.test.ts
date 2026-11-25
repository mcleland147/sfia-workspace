import { describe, expect, it } from "vitest";
import {
  assembleForecastFromSteps,
  buildInitialForecast,
  forecastInputSufficiency,
  forecastStepsFromQualificationIntents,
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

describe("ensemble07 forecast builder (ML5 — no lexical cycle choice)", () => {
  it("returns CLARIFICATION when no durable text", () => {
    const r = buildInitialForecast({ projection: null, previewSummary: "   " });
    expect(r.kind).toBe("CLARIFICATION");
  });

  it("does not invent a cycle from intention keywords (lexical path removed)", () => {
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
    // Without Nora cognitive structure, builder must NOT keyword-match « cadrage ».
    expect(r.kind).toBe("CLARIFICATION");
    if (r.kind === "CLARIFICATION") {
      expect(r.missing).toContain("recommandation cognitive");
    }
  });

  it("sufficiency accepts AssetTrack-class intention without cycle names", () => {
    const s = forecastInputSufficiency({
      projection: projection({
        intention: {
          value: "Gérer les prêts de matériel informatique aux collaborateurs",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
        desiredOutcome: {
          value: "Une première version simple et utile",
          status: "PILOT_EXPRESSED",
          source: { kind: "PILOT_TURN", ref: "t1" },
          isCurrent: true,
        },
      }),
      previewSummary: "",
    });
    expect(s.ok).toBe(true);
  });

  it("assembleForecastFromSteps builds PROPOSE from Nora-chosen types", () => {
    const r = assembleForecastFromSteps([
      {
        order: 1,
        cycleType: "CONCEPTION_FONCTIONNELLE",
        rationale: "Préciser le parcours de prêt",
        certainty: "QUALIFIED",
      },
      {
        order: 2,
        cycleType: "DELIVERY",
        rationale: "Réaliser le parcours",
        certainty: "ENVISIONED",
      },
    ]);
    expect(r.kind).toBe("PROPOSE");
    if (r.kind === "PROPOSE") {
      expect(r.steps[0]!.cycleType).toBe("CONCEPTION_FONCTIONNELLE");
      expect(validateStructuredForecast(r).ok).toBe(true);
    }
  });

  it("forecastStepsFromQualificationIntents reads d5 PREPARE PROPOSE_TRAJECTORY", () => {
    const steps = forecastStepsFromQualificationIntents([
      {
        capabilityId: "d5.pilotage_command",
        mode: "PREPARE",
        parameters: {
          pilotageOperation: "PROPOSE_TRAJECTORY",
          cycleType: "CONCEPTION_FONCTIONNELLE",
        },
        summary: "Concevoir le parcours gestionnaire",
      },
      {
        capabilityId: "d5.pilotage_command",
        mode: "PREPARE",
        parameters: {
          pilotageOperation: "PROPOSE_TRAJECTORY",
          cycleType: "QA_VALIDATION",
        },
        summary: "Valider avec les gestionnaires",
      },
    ]);
    expect(steps).toHaveLength(2);
    expect(steps[0]!.cycleType).toBe("CONCEPTION_FONCTIONNELLE");
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
