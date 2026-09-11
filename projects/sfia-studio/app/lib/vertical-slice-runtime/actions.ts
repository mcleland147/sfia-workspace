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

export async function setProjectRepositoryBindingAction(input: {
  projectId: string;
  identity: string;
  remoteUrl: string;
  defaultBranch: string;
  pathRoot?: string;
  baseSha?: string;
}): Promise<
  | { ok: true; projectId: string; repositoryBinding: unknown }
  | { ok: false; code: string; message: string }
> {
  const svc = getRuntimeApplicationService();
  if (
    typeof (svc as { setProjectRepositoryBinding?: unknown })
      .setProjectRepositoryBinding !== "function"
  ) {
    return {
      ok: false,
      code: "NOT_AVAILABLE",
      message: "Repository binding is unavailable in this runtime.",
    };
  }
  return (
    svc as {
      setProjectRepositoryBinding: (i: typeof input) => Promise<
        | { ok: true; projectId: string; repositoryBinding: unknown }
        | { ok: false; code: string; message: string }
      >;
    }
  ).setProjectRepositoryBinding(input);
}
