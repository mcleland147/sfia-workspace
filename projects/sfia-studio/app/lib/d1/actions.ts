"use server";

import {
  createProject,
  getProject,
  listProjectAudit,
  listWorkspaceProjects,
  selectMethodMode,
} from "./commands";
import { D1Error } from "./errors";
import type { CreateProjectInput, MethodMode, SelectMethodModeInput } from "./types";

function serializeError(error: unknown): { ok: false; code: string; message: string } {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: error instanceof Error ? error.message : "Erreur inconnue",
  };
}

export async function actionCreateProject(input: CreateProjectInput) {
  try {
    const result = createProject(input);
    return { ok: true as const, ...result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionSelectMethodMode(input: SelectMethodModeInput) {
  try {
    const project = selectMethodMode(input);
    return { ok: true as const, project };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionListProjects() {
  try {
    const projects = listWorkspaceProjects();
    return { ok: true as const, projects };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionGetProject(projectId: string) {
  try {
    const project = getProject(projectId);
    const audit = listProjectAudit(projectId);
    return { ok: true as const, project, audit };
  } catch (error) {
    return serializeError(error);
  }
}

export type { MethodMode };
