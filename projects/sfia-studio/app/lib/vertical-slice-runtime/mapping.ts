import "./serverGuard";
import type {
  CreateLocalProjectCommand,
  LocalProjectCreationView,
  LocalProjectError,
} from "@/lib/vertical-slice-core";
import type { Project, ProjectStructuredError } from "@/lib/oa/project";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "./disclosures";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
  RuntimeErrorDto,
  RuntimeProjectListItem,
  RuntimeProjectState,
} from "./types";
import type { LocalAuditStatus } from "@/lib/vertical-slice-core";

export function toCreateLocalProjectCommand(
  input: CreateProjectRuntimeInput,
): CreateLocalProjectCommand {
  return {
    name: input.name,
    objective: input.objective,
    context: input.context,
    perceivedCriticality: input.criticality,
    constraints: input.constraints,
    shortReference: input.shortReference,
    idempotencyKey: input.idempotencyKey,
  };
}

export function toRuntimeErrorDto(error: LocalProjectError): RuntimeErrorDto {
  return Object.freeze({
    code: error.code,
    message: error.message,
    retryable: error.retryable,
    field: error.field,
    doctrineDetailCode: error.doctrineDetailCode,
    projectDetailCode: error.projectDetailCode,
  });
}

export function toRuntimeErrorDtoFromProjectError(
  error: ProjectStructuredError,
): RuntimeErrorDto {
  const code =
    error.detailCode === "PROJECT_NOT_FOUND"
      ? "PROJECT_NOT_FOUND"
      : error.detailCode === "DOCTRINE_UNRESOLVED"
        ? "DOCTRINE_UNRESOLVED"
        : "PROJECT_CREATION_FAILED";
  return Object.freeze({
    code,
    message: error.message,
    retryable: error.retryable,
    projectDetailCode: error.detailCode,
  });
}

export function toRuntimeProjectState(
  view: LocalProjectCreationView,
): RuntimeProjectState {
  return Object.freeze({
    projectId: view.projectId,
    name: view.projectName,
    shortReference: view.shortReference,
    objective: view.objective,
    contextSummary: view.contextSummary,
    criticality: view.perceivedCriticality,
    constraints: Object.freeze([...view.constraints]),
    localMode: true,
    source: "REAL_LOCAL_CORE",
    fixture: false,
  });
}

export function toRuntimeProjectListItem(
  project: Project,
): RuntimeProjectListItem {
  return Object.freeze({
    projectId: project.projectId,
    title: project.title,
    name: project.title,
    status: project.status,
    updatedAt: project.updatedAt ?? project.createdAt,
  });
}

export function toCreateProjectRuntimeSuccess(
  view: LocalProjectCreationView,
  reusedFromIdempotencyKey: boolean,
  auditStatus: LocalAuditStatus,
): Extract<CreateProjectRuntimeResult, { ok: true }> {
  return Object.freeze({
    ok: true,
    projectId: view.projectId,
    project: toRuntimeProjectState(view),
    doctrine: Object.freeze({ ...view.doctrine }),
    livingState: Object.freeze({ ...view.lps }),
    readiness: RUNTIME_READINESS_NOT_READY,
    disclosures: RUNTIME_DISCLOSURES,
    reusedFromIdempotencyKey,
    auditStatus,
  });
}

export function toCreateProjectRuntimeFailure(
  error: LocalProjectError,
  auditStatus: LocalAuditStatus,
): Extract<CreateProjectRuntimeResult, { ok: false }> {
  return Object.freeze({
    ok: false,
    error: toRuntimeErrorDto(error),
    disclosures: RUNTIME_DISCLOSURES,
    auditStatus,
  });
}

export function toGetProjectRuntimeSuccess(
  view: LocalProjectCreationView,
): Extract<GetProjectRuntimeResult, { ok: true }> {
  return Object.freeze({
    ok: true,
    project: toRuntimeProjectState(view),
    livingState: Object.freeze({ ...view.lps }),
    doctrine: Object.freeze({ ...view.doctrine }),
    readiness: RUNTIME_READINESS_NOT_READY,
    disclosures: RUNTIME_DISCLOSURES,
  });
}

export function toGetProjectRuntimeFailure(
  error: LocalProjectError,
): Extract<GetProjectRuntimeResult, { ok: false }> {
  return Object.freeze({
    ok: false,
    error: toRuntimeErrorDto(error),
    disclosures: RUNTIME_DISCLOSURES,
  });
}

export function toListProjectsRuntimeSuccess(
  projects: readonly Project[],
): Extract<ListProjectsRuntimeResult, { ok: true }> {
  return Object.freeze({
    ok: true,
    projects: Object.freeze(projects.map(toRuntimeProjectListItem)),
    disclosures: RUNTIME_DISCLOSURES,
  });
}

export function toListProjectsRuntimeFailure(
  error: ProjectStructuredError,
): Extract<ListProjectsRuntimeResult, { ok: false }> {
  return Object.freeze({
    ok: false,
    error: toRuntimeErrorDtoFromProjectError(error),
    disclosures: RUNTIME_DISCLOSURES,
  });
}
