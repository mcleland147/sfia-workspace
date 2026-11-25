import { createHash } from "crypto";
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";
import type { PreparationProjection } from "@/domains/preparation/projection";

export type ForecastStep = {
  order: number;
  cycleType: CycleType;
  rationale: string;
  certainty: "QUALIFIED" | "ENVISIONED";
};

export type ForecastBuildResult =
  | { kind: "PROPOSE"; steps: ForecastStep[]; orientation: string; summary: string }
  | { kind: "CLARIFICATION"; question: string; missing: string[] };

export const CYCLE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

export function projectionTextBundle(
  projection: PreparationProjection | null,
  previewSummary: string,
): string {
  const parts: string[] = [];
  if (projection?.intention?.value?.trim()) parts.push(projection.intention.value.trim());
  if (projection?.desiredOutcome?.value?.trim()) parts.push(projection.desiredOutcome.value.trim());
  if (projection?.initialScope?.value?.trim()) parts.push(projection.initialScope.value.trim());
  if (previewSummary.trim()) parts.push(previewSummary.trim());
  for (const q of projection?.openQuestions ?? []) {
    if (q.value?.trim()) parts.push(q.value.trim());
  }
  return parts.join("\n");
}

/**
 * Sufficiency gate only — NEVER chooses a cycle type from lexical matching.
 * Clarification is legitimate when intention / desired outcome are missing.
 */
export function forecastInputSufficiency(input: {
  projection: PreparationProjection | null;
  previewSummary: string;
}): { ok: true; bundle: string } | { ok: false; result: ForecastBuildResult & { kind: "CLARIFICATION" } } {
  const bundle = projectionTextBundle(input.projection, input.previewSummary);
  if (!bundle.trim()) {
    return {
      ok: false,
      result: {
        kind: "CLARIFICATION",
        question:
          "Pour proposer une trajectoire de cycles utile, précise l'intention du projet et le résultat visé dans le fil de préparation.",
        missing: ["intention", "résultat visé"],
      },
    };
  }
  const hasIntention =
    Boolean(input.projection?.intention?.value?.trim()) ||
    Boolean(input.projection?.desiredOutcome?.value?.trim());
  if (!hasIntention && bundle.length < 24) {
    return {
      ok: false,
      result: {
        kind: "CLARIFICATION",
        question:
          "J'ai besoin de comprendre ce que tu veux accomplir avec ce projet — peux-tu formuler l'intention et le premier résultat attendu ?",
        missing: ["intention"],
      },
    };
  }
  return { ok: true, bundle };
}

/**
 * Assemble a PROPOSE result from Nora-chosen (or validated) steps.
 * D5 catalog membership is enforced by validateStructuredForecast / isCycleType.
 */
export function assembleForecastFromSteps(
  stepsIn: ForecastStep[],
): ForecastBuildResult {
  const steps = stepsIn
    .filter((s) => isCycleType(s.cycleType))
    .slice(0, 3)
    .map((s, i) => ({
      order: i + 1,
      cycleType: s.cycleType,
      rationale: s.rationale?.trim() || "Cycle recommandé à partir des acquis de préparation.",
      certainty: (i === 0 ? "QUALIFIED" : s.certainty === "ENVISIONED" ? "ENVISIONED" : "ENVISIONED") as
        | "QUALIFIED"
        | "ENVISIONED",
    }));
  if (!steps.length) {
    return {
      kind: "CLARIFICATION",
      question:
        "Je n'ai pas pu qualifier une trajectoire structurée fiable. Précise le premier résultat utile attendu.",
      missing: ["sortie structurée"],
    };
  }
  steps[0] = { ...steps[0]!, certainty: "QUALIFIED" };
  const labels = steps.map((s) => CYCLE_LABELS[s.cycleType]);
  const first = steps[0]!;
  const orientation = `Trajectoire séquentielle proposée : ${labels.join(" → ")}.`;
  const summary = `Je recommande d'ouvrir d'abord un cycle ${CYCLE_LABELS[first.cycleType]}, puis d'envisager ${labels.slice(1).join(", ") || "la suite"} selon ce que nous qualifions ensemble.`;
  return { kind: "PROPOSE", steps, orientation, summary };
}

/**
 * @deprecated REMOVE lexical decision path — kept as named tombstone for tests that
 * must assert it no longer drives cycle choice. Prefer buildCognitiveForecast / assembleForecastFromSteps.
 */
export function buildInitialForecast(input: {
  projection: PreparationProjection | null;
  previewSummary: string;
}): ForecastBuildResult {
  const sufficiency = forecastInputSufficiency(input);
  if (!sufficiency.ok) return sufficiency.result;
  // ML5 GO Morris 2025-11-25: lexical inferPreferredFirstCycle REMOVED.
  // Without a Nora-produced structure this function must NOT invent a cycle from
  // keyword matching. Callers that need a proposal must use buildCognitiveForecast.
  return {
    kind: "CLARIFICATION",
    question:
      "La recommandation de trajectoire nécessite l'analyse cognitive Nora — la structure n'a pas encore été produite.",
    missing: ["recommandation cognitive"],
  };
}

export function qualificationInputFingerprint(input: {
  preparationId: string;
  projection: PreparationProjection | null;
  previewSummary: string;
  creationRevision: number;
}): string {
  const openQuestions = (input.projection?.openQuestions ?? [])
    .map((q) => (q.value ?? "").trim())
    .filter(Boolean)
    .sort();
  const payload = {
    preparationId: input.preparationId,
    creationRevision: input.creationRevision,
    previewSummary: input.previewSummary.trim(),
    projectionRevision: input.projection?.revision ?? 0,
    intention: input.projection?.intention?.value ?? "",
    desiredOutcome: input.projection?.desiredOutcome?.value ?? "",
    initialScope: input.projection?.initialScope?.value ?? "",
    openQuestions,
    suggestionExplanation: input.projection?.suggestion?.explanation ?? "",
  };
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}

/**
 * Deterministic validator for structured forecast before D5 persist.
 * Does not invent cycles; rejects ambiguous / invalid shapes.
 */
export function validateStructuredForecast(
  built: ForecastBuildResult,
): { ok: true } | { ok: false; reason: string } {
  if (built.kind === "CLARIFICATION") {
    if (!built.question.trim()) return { ok: false, reason: "CLARIFICATION_EMPTY" };
    return { ok: true };
  }
  if (!built.steps.length) return { ok: false, reason: "NO_STEPS" };
  if (built.steps[0]?.certainty !== "QUALIFIED") {
    return { ok: false, reason: "FIRST_CYCLE_NOT_QUALIFIED" };
  }
  const seen = new Set<number>();
  for (const step of built.steps) {
    if (!isCycleType(step.cycleType)) return { ok: false, reason: "UNKNOWN_CYCLE_TYPE" };
    if (seen.has(step.order)) return { ok: false, reason: "DUPLICATE_ORDER" };
    seen.add(step.order);
  }
  const orders = [...seen].sort((a, b) => a - b);
  for (let i = 0; i < orders.length; i++) {
    if (orders[i] !== i + 1) return { ok: false, reason: "ORDER_NOT_STRICT" };
  }
  if (!built.orientation.trim() || !built.summary.trim()) {
    return { ok: false, reason: "MISSING_JUSTIFICATION" };
  }
  if (built.steps.length > 3) return { ok: false, reason: "CARDINALITY" };
  return { ok: true };
}

export function parseForecastJson(raw: unknown): ForecastStep[] | null {
  if (!Array.isArray(raw)) return null;
  const steps: ForecastStep[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") return null;
    const o = row as Record<string, unknown>;
    const cycleType = typeof o.cycleType === "string" && isCycleType(o.cycleType) ? o.cycleType : null;
    if (!cycleType) return null;
    steps.push({
      order: typeof o.order === "number" ? o.order : steps.length + 1,
      cycleType,
      rationale: typeof o.rationale === "string" ? o.rationale : "",
      certainty: o.certainty === "ENVISIONED" ? "ENVISIONED" : "QUALIFIED",
    });
  }
  return steps.length ? steps.sort((a, b) => a.order - b.order) : null;
}

/** Extract forecast steps from Nora qualification pilotage PREPARE intents. */
export function forecastStepsFromQualificationIntents(
  intents: Array<{
    capabilityId: string;
    mode: string;
    parameters?: { pilotageOperation?: string; cycleType?: string; notes?: string };
    summary?: string;
  }>,
): ForecastStep[] {
  const steps: ForecastStep[] = [];
  for (const intent of intents) {
    if (intent.capabilityId !== "d5.pilotage_command") continue;
    if (intent.mode !== "PREPARE" && intent.mode !== "REQUEST_EFFECT") continue;
    const op = intent.parameters?.pilotageOperation;
    if (op && op !== "PROPOSE_TRAJECTORY") continue;
    const cycleType = intent.parameters?.cycleType;
    if (!cycleType || !isCycleType(cycleType)) continue;
    steps.push({
      order: steps.length + 1,
      cycleType,
      rationale: intent.summary?.trim() || intent.parameters?.notes?.trim() || "",
      certainty: steps.length === 0 ? "QUALIFIED" : "ENVISIONED",
    });
  }
  return steps;
}

export { CYCLE_TYPES };
