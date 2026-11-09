import { StudioError } from "@/lib/http-errors";
import type { PublicationPlan, PublicationProgress, PublicationStep } from "./types";

/**
 * Canonical ML4 documentary publication sequence.
 * Contracted vertical: branch → file → PR. No empty/partial client override.
 */
export const NOMINAL_PUBLICATION_STEPS: readonly PublicationStep[] = [
  "CREATE_BRANCH",
  "PUBLISH_FILE",
  "OPEN_PR",
] as const;

const KNOWN = new Set<string>(NOMINAL_PUBLICATION_STEPS);

function reject(message: string): never {
  throw new StudioError("INVALID_REQUEST", message, { exposeMessage: true, httpStatus: 400 });
}

/**
 * Strict validation of a steps list.
 * Rejects null, empty, non-array, unknown, duplicates, wrong order, partial sequences.
 */
export function validatePublicationSteps(raw: unknown): PublicationStep[] {
  if (raw === null) reject("steps null refusé");
  if (!Array.isArray(raw)) reject("steps doit être un tableau");
  if (raw.length === 0) reject("steps vide refusé — PUBLISH_FILE obligatoire");

  const steps = raw.map((s) => String(s)) as string[];
  for (const s of steps) {
    if (!KNOWN.has(s)) reject(`étape inconnue refusée: ${s}`);
  }
  if (new Set(steps).size !== steps.length) reject("étape dupliquée refusée");

  const expected = [...NOMINAL_PUBLICATION_STEPS];
  if (steps.length !== expected.length) {
    reject(
      `séquence invalide — attendu exactement ${expected.join("→")} (PUBLISH_FILE obligatoire)`,
    );
  }
  for (let i = 0; i < expected.length; i++) {
    if (steps[i] !== expected[i]) {
      reject(`ordre invalide — attendu ${expected.join("→")}, reçu ${steps.join("→")}`);
    }
  }
  return steps as PublicationStep[];
}

/** undefined → nominal default; otherwise strict validate (null/[] rejected). */
export function resolvePublicationSteps(raw: unknown): PublicationStep[] {
  if (raw === undefined) return [...NOMINAL_PUBLICATION_STEPS];
  return validatePublicationSteps(raw);
}

export function assertPlanPublicationSteps(plan: Pick<PublicationPlan, "steps">): void {
  validatePublicationSteps(plan.steps);
}

/** Historical plans omit effectProviderMode → UNKNOWN (never invent REAL). */
export function qualifyPlanEffectProviderMode(
  plan: Pick<PublicationPlan, "effectProviderMode">,
): "REAL" | "SCRIPTED" | "UNKNOWN" {
  if (plan.effectProviderMode === "REAL" || plan.effectProviderMode === "SCRIPTED") {
    return plan.effectProviderMode;
  }
  return "UNKNOWN";
}

/**
 * Fail-closed gate before COMPLETED / D8 publicationRef.
 * Base SHA alone is never documentary proof.
 */
export function assertPublicationEffectProof(input: {
  plan: PublicationPlan;
  progress: PublicationProgress;
  commitSha: string | null | undefined;
}): void {
  assertPlanPublicationSteps(input.plan);

  if (!input.progress.filePublished) {
    throw new StudioError(
      "AMBIGUOUS",
      "PUBLISH_FILE non prouvé — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (!input.commitSha || input.commitSha.length === 0) {
    throw new StudioError(
      "AMBIGUOUS",
      "commitSha documentaire absent — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (input.plan.baseSha && input.commitSha === input.plan.baseSha) {
    throw new StudioError(
      "AMBIGUOUS",
      "SHA de base seul insuffisant comme preuve de publication documentaire",
      { exposeMessage: true },
    );
  }
  if (input.plan.steps.includes("CREATE_BRANCH") && !input.progress.branchCreated) {
    throw new StudioError(
      "AMBIGUOUS",
      "CREATE_BRANCH non prouvé — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (input.plan.steps.includes("OPEN_PR")) {
    const st = input.progress.prCurrentState;
    if (
      input.progress.prNumber == null ||
      !st ||
      st === "UNKNOWN" ||
      st === "ABSENT"
    ) {
      throw new StudioError(
        "AMBIGUOUS",
        "OPEN_PR non prouvée à distance — COMPLETED / D8 refusés",
        { exposeMessage: true },
      );
    }
  }
}
