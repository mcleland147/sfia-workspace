import type {
  ProjectDetailCode,
  ProjectModeledErrorCode,
  ProjectStructuredError,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<ProjectDetailCode, ProjectModeledErrorCode> = {
  PROJECT_INVALID: "STATE_CONFLICT",
  PROJECT_ALREADY_EXISTS: "STATE_CONFLICT",
  PROJECT_NOT_FOUND: "STATE_CONFLICT",
  LPS_NOT_FOUND: "STATE_CONFLICT",
  LPS_VERSION_CONFLICT: "STATE_CONFLICT",
  LPS_INVALID: "STATE_CONFLICT",
  DOCTRINE_UNRESOLVED: "DOCTRINE_UNRESOLVED",
  PERSISTENCE_FAILURE: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<ProjectDetailCode, string> = {
  PROJECT_INVALID: "Project input is invalid.",
  PROJECT_ALREADY_EXISTS: "Project already exists.",
  PROJECT_NOT_FOUND: "Project was not found.",
  LPS_NOT_FOUND: "Living project state version was not found.",
  LPS_VERSION_CONFLICT: "Living project state version conflict.",
  LPS_INVALID: "Living project state input is invalid.",
  DOCTRINE_UNRESOLVED: "Doctrine package could not be resolved or pin mismatch.",
  PERSISTENCE_FAILURE: "Project or LPS persistence failed.",
};

export function mapDetailToModeledCode(
  detail: ProjectDetailCode,
): ProjectModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createProjectError(input: {
  detailCode: ProjectDetailCode;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
  lpsVersionId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  doctrinePackageId?: string;
  version?: string;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): ProjectStructuredError {
  const detailCode = input.detailCode;
  const severity =
    detailCode === "PERSISTENCE_FAILURE" ? "error" : "critical";
  const retryable =
    input.retryable ??
    (detailCode === "LPS_VERSION_CONFLICT" ||
      detailCode === "PERSISTENCE_FAILURE" ||
      detailCode === "DOCTRINE_UNRESOLVED");

  return {
    code: mapDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity,
    retryable,
    blocking: true,
    recoverable: detailCode !== "PROJECT_INVALID" && detailCode !== "LPS_INVALID",
    domain: "C",
    correlationId: input.correlationId,
    projectId: input.projectId,
    lpsVersionId: input.lpsVersionId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    doctrinePackageId: input.doctrinePackageId,
    version: input.version,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

export class ProjectDomainError extends Error {
  readonly structured: ProjectStructuredError;

  constructor(structured: ProjectStructuredError) {
    super(structured.message);
    this.name = "ProjectDomainError";
    this.structured = structured;
  }
}
