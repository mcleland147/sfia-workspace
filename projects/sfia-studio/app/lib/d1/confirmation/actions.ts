"use server";

import { executeConfirmedMutation } from "./executeConfirmation";
import { buildConfirmationSummary } from "./summary";
import { getProject } from "../commands";
import { D1Error } from "../errors";
import type {
  BoundedMutationResult,
  ConfirmationSummary,
  ExecuteConfirmationInput,
  ProjectDraftFields,
} from "./types";
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
    message: "Échec de confirmation. Réessayez.",
  };
}

export type ConfirmActionResult =
  | { ok: true; result: BoundedMutationResult }
  | { ok: false; code: string; message: string };

export async function actionExecuteConfirmation(
  input: ExecuteConfirmationInput,
): Promise<ConfirmActionResult> {
  try {
    const result = executeConfirmedMutation(input);
    return { ok: true, result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareExistingProjectSummary(input: {
  projectId: string;
}): Promise<
  | {
      ok: true;
      project: {
        projectId: string;
        name: string;
        objective: string;
        state: string;
        version: number;
        updatedAt: string;
      };
      summary: ConfirmationSummary;
    }
  | { ok: false; code: string; message: string }
> {
  try {
    const project = getProject(input.projectId);
    const summary = buildConfirmationSummary({
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      project,
    });
    logIntakeEvent("intake_confirmation_presented", {
      sessionLocalId: "prepare",
      status: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      projectId: project.projectId,
    });
    return {
      ok: true,
      project: {
        projectId: project.projectId,
        name: project.name,
        objective: project.objective,
        state: project.state,
        version: project.version,
        updatedAt: project.updatedAt,
      },
      summary,
    };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareCreateSummary(input: {
  draft: ProjectDraftFields;
}): Promise<{ ok: true; summary: ConfirmationSummary }> {
  const summary = buildConfirmationSummary({
    actionType: "CREATE_PROJECT",
    draft: input.draft,
  });
  return { ok: true, summary };
}
