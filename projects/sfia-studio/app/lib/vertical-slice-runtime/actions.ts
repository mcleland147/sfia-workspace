"use server";

/**
 * Future Server Action entrypoints for V2-A2 Create Project UI.
 * No UI is wired in V2-A1; these thin wrappers only expose the runtime service.
 */

import {
  getRuntimeApplicationService,
} from "./singleton";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
} from "./types";

export async function createProjectRuntimeAction(
  input: CreateProjectRuntimeInput,
): Promise<CreateProjectRuntimeResult> {
  return getRuntimeApplicationService().createProject(input);
}

export async function getProjectRuntimeAction(
  projectId: string,
): Promise<GetProjectRuntimeResult> {
  return getRuntimeApplicationService().getProject(projectId);
}

export async function listProjectsRuntimeAction(): Promise<ListProjectsRuntimeResult> {
  return getRuntimeApplicationService().listProjects();
}
