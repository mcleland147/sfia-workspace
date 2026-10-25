/**
 * Semantic invariants for T-A1 Project / LivingProjectState (beyond JSON Schema).
 */
import type {
  DoctrinePackagePin,
  DoctrinePackageRef,
} from "@/lib/oa/doctrine";
import {
  MAX_LPS_SNAPSHOT_BYTES,
  type LivingProjectState,
  type Project,
  type ProjectDetailCode,
} from "./types";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export type InvariantViolation = {
  detailCode: ProjectDetailCode;
  reason: string;
};

export function isOaIdentifier(value: string): boolean {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function assertPrefixedId(
  value: string,
  prefix: "prj:" | "lps:" | "prv:" | "cor:",
): InvariantViolation | null {
  if (!isOaIdentifier(value)) {
    return { detailCode: "PROJECT_INVALID", reason: "identifier_pattern" };
  }
  if (!value.startsWith(prefix)) {
    return { detailCode: "PROJECT_INVALID", reason: `identifier_prefix_${prefix}` };
  }
  return null;
}

export function doctrinePinEqualsRef(
  pin: DoctrinePackagePin,
  ref: DoctrinePackageRef,
): boolean {
  return (
    pin.doctrinePackageId === ref.doctrinePackageId &&
    pin.version === ref.version &&
    pin.digest === ref.digest
  );
}

export function doctrineRefsEqual(
  a: DoctrinePackageRef,
  b: DoctrinePackageRef,
): boolean {
  return (
    a.doctrinePackageId === b.doctrinePackageId &&
    a.version === b.version &&
    a.digest === b.digest
  );
}

export function validateCreateProjectFields(input: {
  projectId: string;
  title: string;
  objective: string;
  lpsVersionId?: string;
}): InvariantViolation | null {
  const projectIdViolation = assertPrefixedId(input.projectId, "prj:");
  if (projectIdViolation) {
    return { detailCode: "PROJECT_INVALID", reason: "project_id_invalid" };
  }
  if (
    typeof input.title !== "string" ||
    input.title.trim().length < 1 ||
    input.title.length > 200
  ) {
    return { detailCode: "PROJECT_INVALID", reason: "title_invalid" };
  }
  if (typeof input.objective !== "string" || input.objective.trim().length < 1) {
    return { detailCode: "LPS_INVALID", reason: "objective_invalid" };
  }
  if (input.lpsVersionId) {
    const lpsViolation = assertPrefixedId(input.lpsVersionId, "lps:");
    if (lpsViolation) {
      return { detailCode: "LPS_INVALID", reason: "lps_version_id_invalid" };
    }
  }
  return null;
}

export function validateAppendFields(input: {
  projectId: string;
  expectedVersion: number;
  objective: string;
  lpsVersionId?: string;
}): InvariantViolation | null {
  const projectIdViolation = assertPrefixedId(input.projectId, "prj:");
  if (projectIdViolation) {
    return { detailCode: "PROJECT_INVALID", reason: "project_id_invalid" };
  }
  if (
    !Number.isInteger(input.expectedVersion) ||
    input.expectedVersion < 1
  ) {
    return { detailCode: "LPS_INVALID", reason: "expected_version_invalid" };
  }
  if (typeof input.objective !== "string" || input.objective.trim().length < 1) {
    return { detailCode: "LPS_INVALID", reason: "objective_invalid" };
  }
  if (input.lpsVersionId) {
    const lpsViolation = assertPrefixedId(input.lpsVersionId, "lps:");
    if (lpsViolation) {
      return { detailCode: "LPS_INVALID", reason: "lps_version_id_invalid" };
    }
  }
  return null;
}

/**
 * Serialized size of LPS fields we store for T-A1 (objective + optional arrays empty).
 * Caps payload to MAX_LPS_SNAPSHOT_BYTES (T-A1-D09).
 */
export function measureLpsSnapshotBytes(
  fields: Pick<
    LivingProjectState,
    | "objective"
    | "context"
    | "scope"
    | "constraints"
    | "stakeholders"
    | "epistemicItemIds"
    | "decisionIds"
    | "reservationIds"
    | "contradictionIds"
    | "evidenceIds"
    | "debtItemIds"
    | "riskItemIds"
    | "reviewBundleIds"
    | "nextStep"
  >,
): number {
  return Buffer.byteLength(JSON.stringify(fields), "utf8");
}

export function assertLpsSnapshotSize(
  fields: Parameters<typeof measureLpsSnapshotBytes>[0],
): InvariantViolation | null {
  const bytes = measureLpsSnapshotBytes(fields);
  if (bytes > MAX_LPS_SNAPSHOT_BYTES) {
    return { detailCode: "LPS_INVALID", reason: "snapshot_too_large" };
  }
  return null;
}

export function assertProjectActiveWithDoctrine(
  project: Project,
): InvariantViolation | null {
  if (project.status === "active" && !project.doctrinePackageRef) {
    return {
      detailCode: "PROJECT_INVALID",
      reason: "active_requires_doctrine_ref",
    };
  }
  if (
    project.doctrinePackageRef &&
    project.doctrinePackageRef.status !== "resolved"
  ) {
    return {
      detailCode: "DOCTRINE_UNRESOLVED",
      reason: "doctrine_ref_not_resolved",
    };
  }
  return null;
}
