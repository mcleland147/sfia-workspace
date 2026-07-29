import "./serverGuard";
import type {
  CreateLocalProjectCommand,
  LocalProjectCreationView,
  LocalProjectError,
} from "@/lib/vertical-slice-core";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "./disclosures";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  RuntimeErrorDto,
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
