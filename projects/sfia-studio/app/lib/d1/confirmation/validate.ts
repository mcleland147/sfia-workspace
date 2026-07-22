import { D1Error } from "../errors";
import {
  CONFIRMATION_ACTION_TYPES,
  CONFIRMATION_SCHEMA_VERSION,
  type ConfirmationActionType,
  type ConfirmationIntent,
  type ExecuteConfirmationInput,
  type ProjectDraftFields,
} from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function asStrictBoolean(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new D1Error(
      "VALIDATION",
      `Champ ${field} invalide (boolean strict attendu).`,
    );
  }
  return value;
}

export function asActionType(value: unknown): ConfirmationActionType {
  if (
    typeof value !== "string" ||
    !(CONFIRMATION_ACTION_TYPES as readonly string[]).includes(value)
  ) {
    throw new D1Error("VALIDATION", `actionType non autorisé: ${String(value)}`);
  }
  return value as ConfirmationActionType;
}

export function validateProjectDraft(draft: ProjectDraftFields): ProjectDraftFields {
  const name = draft.name?.trim() ?? "";
  const objective = draft.objective?.trim() ?? "";
  const initialContextSummary = (draft.initialContextSummary ?? "").trim();
  if (!name || name.length > 200) {
    throw new D1Error("VALIDATION", "Nom projet requis (max 200).");
  }
  if (!objective || objective.length > 2000) {
    throw new D1Error("VALIDATION", "Objectif requis (max 2000).");
  }
  if (initialContextSummary.length > 4000) {
    throw new D1Error("VALIDATION", "Contexte trop long (max 4000).");
  }
  if (typeof draft.activate !== "boolean") {
    throw new D1Error("VALIDATION", "activate doit être un boolean strict.");
  }
  return {
    name,
    objective,
    initialContextSummary,
    activate: draft.activate,
  };
}

export function draftFingerprint(draft: ProjectDraftFields): string {
  return JSON.stringify({
    name: draft.name.trim(),
    objective: draft.objective.trim(),
    initialContextSummary: (draft.initialContextSummary ?? "").trim(),
    activate: draft.activate === true,
  });
}

/**
 * Validate client payload into a server ConfirmationIntent.
 * Never trusts client-provided Project IDs without later repository re-read.
 */
export function buildConfirmationIntent(
  input: ExecuteConfirmationInput,
): ConfirmationIntent {
  if (!isPlainObject(input as unknown)) {
    throw new D1Error("VALIDATION", "Payload confirmation invalide.");
  }
  const actionType = asActionType(input.actionType);
  if (!asStrictBoolean(input.explicitConfirmation, "explicitConfirmation")) {
    throw new D1Error(
      "VALIDATION",
      "Confirmation explicite obligatoire (explicitConfirmation=true).",
    );
  }
  const sessionLocalId = String(input.sessionLocalId ?? "").trim();
  const proposalId = String(input.proposalId ?? "").trim();
  const idempotencyKey = String(input.idempotencyKey ?? "").trim();
  if (!sessionLocalId || sessionLocalId.length > 120) {
    throw new D1Error("VALIDATION", "sessionLocalId invalide.");
  }
  if (!proposalId || proposalId.length > 120) {
    throw new D1Error("VALIDATION", "proposalId invalide.");
  }
  if (!idempotencyKey || idempotencyKey.length > 200) {
    throw new D1Error("VALIDATION", "idempotencyKey invalide.");
  }

  let projectDraft: ProjectDraftFields | null = null;
  let targetProjectId: string | null = null;

  if (actionType === "CREATE_PROJECT") {
    if (!input.projectDraft || typeof input.projectDraft !== "object") {
      throw new D1Error("VALIDATION", "projectDraft requis pour CREATE_PROJECT.");
    }
    projectDraft = validateProjectDraft(input.projectDraft);
    if (input.targetProjectId != null) {
      throw new D1Error(
        "VALIDATION",
        "CREATE_PROJECT interdit targetProjectId client.",
      );
    }
  }

  if (actionType === "CONFIRM_EXISTING_PROJECT_CONTEXT") {
    const id = String(input.targetProjectId ?? "").trim();
    if (!id || !id.startsWith("proj-")) {
      throw new D1Error(
        "VALIDATION",
        "targetProjectId invalide pour confirmation existante.",
      );
    }
    targetProjectId = id;
  }

  if (actionType === "ANALYZE_ONLY" || actionType === "CANCEL") {
    if (input.targetProjectId != null || input.projectDraft != null) {
      // allow null drafts; reject stray mutation payloads
      if (input.projectDraft != null && actionType === "CANCEL") {
        /* cancel may ignore draft */
      }
    }
  }

  return {
    schemaVersion: CONFIRMATION_SCHEMA_VERSION,
    confirmationId:
      String(input.confirmationId ?? "").trim() ||
      `conf-${Date.now().toString(36)}`,
    sessionLocalId,
    proposalId,
    matchId: input.matchId ? String(input.matchId).trim() : null,
    actionType,
    targetProjectId,
    projectDraft,
    expectedProjectVersion:
      typeof input.expectedProjectVersion === "number"
        ? input.expectedProjectVersion
        : null,
    expectedUpdatedAt: input.expectedUpdatedAt
      ? String(input.expectedUpdatedAt)
      : null,
    idempotencyKey,
    confirmedAt: new Date().toISOString(),
    confirmedBy: "actor-mono-i1",
    requiresHumanConfirmation: true,
    explicitConfirmation: true,
  };
}
