import {
  METHOD_MODES,
  type CreateProjectInput,
  type MethodMode,
  type ProjectState,
} from "./types";
import { D1Error } from "./errors";

const FORBIDDEN_CLAIMS = [
  "V3-ADOPTED",
  "V3-IMPLEMENTED",
  "V3_ADOPTED",
  "V3_IMPLEMENTED",
] as const;

export function assertMethodMode(value: string): MethodMode {
  if (!(METHOD_MODES as readonly string[]).includes(value)) {
    throw new D1Error("VALIDATION", `MethodMode invalide: ${value}`);
  }
  return value as MethodMode;
}

export function assertNoForbiddenClaim(text: string): void {
  const upper = text.toUpperCase();
  for (const claim of FORBIDDEN_CLAIMS) {
    if (upper.includes(claim.replace("-", "_")) || upper.includes(claim)) {
      throw new D1Error(
        "CLAIM_FORBIDDEN",
        `Claim interdit en D1-I1: ${claim}. Seul V3_CANDIDATE est autorisé.`,
      );
    }
  }
}

export function validateCreateProjectInput(input: CreateProjectInput): void {
  const name = input.name?.trim() ?? "";
  const objective = input.objective?.trim() ?? "";
  if (!name || name.length > 200) {
    throw new D1Error("VALIDATION", "Le nom du projet est requis (max 200).");
  }
  if (!objective || objective.length > 2000) {
    throw new D1Error("VALIDATION", "L’objectif est requis (max 2000).");
  }
  if (input.initialContextSummary && input.initialContextSummary.length > 4000) {
    throw new D1Error("VALIDATION", "Contexte initial trop long (max 4000).");
  }
  assertMethodMode(input.methodMode);
  assertNoForbiddenClaim(name);
  assertNoForbiddenClaim(objective);
  if (input.initialContextSummary) {
    assertNoForbiddenClaim(input.initialContextSummary);
  }
  if (!input.idempotencyKey?.trim()) {
    throw new D1Error("VALIDATION", "idempotencyKey requis.");
  }
}

/** DRAFT → ACTIVE only when methodMode is set. */
export function canActivate(
  state: ProjectState,
  methodMode: MethodMode | null,
): boolean {
  return state === "DRAFT" && methodMode != null;
}

export function nextStateAfterCreate(activate: boolean): ProjectState {
  return activate ? "ACTIVE" : "DRAFT";
}
