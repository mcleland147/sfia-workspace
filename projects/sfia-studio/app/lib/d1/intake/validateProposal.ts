import { D1Error } from "../errors";
import {
  C2_OUTCOME_TYPES,
  C2_PROPOSAL_STATUSES,
  REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
  type C2OutcomeType,
  type C2ProposalStatus,
  type RequestRoutingAlternative,
  type RequestRoutingProposal,
} from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown, field: string): string {
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string attendue).`);
  }
  return value.trim();
}

function asStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string[] attendu).`);
  }
  return value.map((v) => v.trim()).filter(Boolean);
}

function asNullableString(value: unknown, field: string): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string|null).`);
  }
  const t = value.trim();
  return t.length ? t : null;
}

function asOutcome(value: unknown): C2OutcomeType {
  if (typeof value !== "string" || !C2_OUTCOME_TYPES.includes(value as C2OutcomeType)) {
    throw new D1Error("VALIDATION", `Outcome C2 non autorisé: ${String(value)}`);
  }
  return value as C2OutcomeType;
}

function asStatus(value: unknown): C2ProposalStatus {
  if (
    typeof value !== "string" ||
    !C2_PROPOSAL_STATUSES.includes(value as C2ProposalStatus)
  ) {
    throw new D1Error("VALIDATION", `Status C2 non autorisé: ${String(value)}`);
  }
  return value as C2ProposalStatus;
}

function asConfidence(value: unknown): number {
  if (typeof value !== "number" || Number.isNaN(value) || value < 0 || value > 1) {
    throw new D1Error("VALIDATION", "confidence hors bornes [0,1].");
  }
  return value;
}

/** Strict boolean — reject string/number/null; never coerce via Boolean(...). */
export function asStrictBoolean(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new D1Error(
      "VALIDATION",
      `Champ ${field} invalide (boolean strict attendu).`,
    );
  }
  return value;
}

function asAlternatives(value: unknown): RequestRoutingAlternative[] {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) {
    throw new D1Error("VALIDATION", "alternatives invalides.");
  }
  return value.map((item, i) => {
    if (!isPlainObject(item)) {
      throw new D1Error("VALIDATION", `alternative[${i}] invalide.`);
    }
    return {
      outcomeType: asOutcome(item.outcomeType),
      label: asString(item.label, `alternatives[${i}].label`),
      rationale: asString(item.rationale, `alternatives[${i}].rationale`),
    };
  });
}

const FORBIDDEN_CLAIM = /V3[-_ ]?(ADOPTED|IMPLEMENTED)/i;

/**
 * Deterministic runtime validation of GPT / fake payload.
 * Rejects invented Project/Cycle IDs and forbidden claims.
 */
export function validateRequestRoutingProposal(
  raw: unknown,
): RequestRoutingProposal {
  if (!isPlainObject(raw)) {
    throw new D1Error("VALIDATION", "Payload proposition non-objet.");
  }

  if (raw.proposedProjectId != null || raw.candidateProjectId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedProjectId / candidateProjectId (matching = C3).",
    );
  }
  if (raw.proposedCycleId != null || raw.candidateCycleId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedCycleId / candidateCycleId (matching = C3).",
    );
  }

  const proposal: RequestRoutingProposal = {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: asString(raw.proposalId, "proposalId"),
    rawIntent: asString(raw.rawIntent, "rawIntent"),
    normalizedIntent: asString(raw.normalizedIntent, "normalizedIntent"),
    subject: asString(raw.subject, "subject"),
    proposedObjective: asString(raw.proposedObjective, "proposedObjective"),
    proposedOutcomeType: asOutcome(raw.proposedOutcomeType),
    proposedCycleType: asNullableString(raw.proposedCycleType, "proposedCycleType"),
    proposedProfile: asNullableString(raw.proposedProfile, "proposedProfile"),
    proposedBlocks: asStringArray(raw.proposedBlocks ?? [], "proposedBlocks"),
    constraints: asStringArray(raw.constraints ?? [], "constraints"),
    assumptions: asStringArray(raw.assumptions ?? [], "assumptions"),
    missingInformation: asStringArray(
      raw.missingInformation ?? [],
      "missingInformation",
    ),
    clarificationQuestion: asNullableString(
      raw.clarificationQuestion,
      "clarificationQuestion",
    ),
    alternatives: asAlternatives(raw.alternatives),
    confidence: asConfidence(raw.confidence),
    rationale: asString(raw.rationale, "rationale"),
    requiresHumanConfirmation: asStrictBoolean(
      raw.requiresHumanConfirmation,
      "requiresHumanConfirmation",
    ),
    status: asStatus(raw.status),
    createdAt: asString(raw.createdAt, "createdAt"),
    proposedProjectId: null,
    proposedCycleId: null,
  };

  const claimSurface = [
    proposal.normalizedIntent,
    proposal.proposedObjective,
    proposal.rationale,
    ...proposal.assumptions,
  ].join(" ");
  if (FORBIDDEN_CLAIM.test(claimSurface)) {
    throw new D1Error("CLAIM_FORBIDDEN", "Claim v3 interdit dans la proposition.");
  }

  if (proposal.proposedOutcomeType === "NEED_CLARIFICATION") {
    if (proposal.status !== "CLARIFICATION_REQUIRED") {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige status CLARIFICATION_REQUIRED.",
      );
    }
    if (!proposal.clarificationQuestion) {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige clarificationQuestion.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "ANALYZE_ONLY") {
    if (proposal.status !== "ANALYSIS_ONLY") {
      throw new D1Error("VALIDATION", "ANALYZE_ONLY exige status ANALYSIS_ONLY.");
    }
  }

  if (
    proposal.proposedOutcomeType === "CREATE_PROJECT_CANDIDATE" ||
    proposal.proposedOutcomeType === "OPEN_CYCLE_CANDIDATE"
  ) {
    if (proposal.status !== "PROPOSAL_READY") {
      throw new D1Error(
        "VALIDATION",
        "Outcome candidat mutatif exige PROPOSAL_READY (non exécutable).",
      );
    }
    if (!proposal.requiresHumanConfirmation) {
      throw new D1Error(
        "VALIDATION",
        "requiresHumanConfirmation doit être true pour une suite candidate.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "UNDETERMINED") {
    if (proposal.status !== "UNDETERMINED") {
      throw new D1Error("VALIDATION", "UNDETERMINED exige status UNDETERMINED.");
    }
  }

  if (raw.schemaVersion && raw.schemaVersion !== REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION) {
    throw new D1Error(
      "VALIDATION",
      `schemaVersion inattendu: ${String(raw.schemaVersion)}`,
    );
  }

  return proposal;
}

/** Extract JSON object from model text (fenced or raw). */
export function parseProposalJsonText(text: string): unknown {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fence ? fence[1].trim() : trimmed;
  try {
    return JSON.parse(candidate);
  } catch (error) {
    throw new D1Error(
      "VALIDATION",
      "Réponse provider non JSON / non parsable.",
      error,
    );
  }
}
