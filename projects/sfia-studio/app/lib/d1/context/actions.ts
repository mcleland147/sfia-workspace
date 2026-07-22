"use server";

import { matchExistingContext } from "./matchExistingContext";
import { D1Error } from "../errors";
import type { ContextMatchResult, MatchExistingContextInput } from "./types";
import { logIntakeEvent } from "../intakeObservability";

function serializeError(error: unknown): {
  ok: false;
  code: string;
  message: string;
} {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: "Échec du matching contextuel. Réessayez.",
  };
}

export type MatchContextActionResult =
  | { ok: true; match: ContextMatchResult; durationMs: number }
  | { ok: false; code: string; message: string };

export async function actionMatchExistingContext(
  input: MatchExistingContextInput,
): Promise<MatchContextActionResult> {
  const started = Date.now();
  try {
    const match = matchExistingContext(input);
    return { ok: true, match, durationMs: Date.now() - started };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionLogContextSelection(input: {
  sessionLocalId: string;
  entityId: string | null;
  cleared?: boolean;
}) {
  if (input.cleared || !input.entityId) {
    logIntakeEvent("intake_context_selection_cleared", {
      sessionLocalId: input.sessionLocalId,
      status: "cleared",
    });
  } else {
    logIntakeEvent("intake_context_candidate_selected", {
      sessionLocalId: input.sessionLocalId,
      status: "selected",
      // entity id only — no project name/objective body
      projectId: input.entityId,
    });
  }
  return { ok: true as const };
}
