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
  type ProjectRepositoryBinding,
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

const GITHUB_IDENTITY_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const SHA1_OR_SHA256_HEX = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i;

/**
 * Validate optional Project.repositoryBinding (GCEC D-GCEC-02).
 * Fail-closed: no ambient workspace fallback, no path traversal.
 */
export function validateRepositoryBinding(
  binding: ProjectRepositoryBinding | undefined | null,
): InvariantViolation | null {
  if (binding == null) return null;
  if (binding.provider !== "github") {
    return { detailCode: "PROJECT_INVALID", reason: "repository_provider_invalid" };
  }
  const identity = typeof binding.identity === "string" ? binding.identity.trim() : "";
  if (!identity || !GITHUB_IDENTITY_PATTERN.test(identity)) {
    return { detailCode: "PROJECT_INVALID", reason: "repository_identity_invalid" };
  }
  const remoteUrl =
    typeof binding.remoteUrl === "string" ? binding.remoteUrl.trim() : "";
  if (!remoteUrl) {
    return { detailCode: "PROJECT_INVALID", reason: "repository_remote_url_empty" };
  }
  const expectedHttps = `https://github.com/${identity}.git`;
  const expectedHttpsBare = `https://github.com/${identity}`;
  const expectedSsh = `git@github.com:${identity}.git`;
  const expectedSshBare = `git@github.com:${identity}`;
  const remoteOk =
    remoteUrl === expectedHttps ||
    remoteUrl === expectedHttpsBare ||
    remoteUrl === expectedSsh ||
    remoteUrl === expectedSshBare;
  if (!remoteOk) {
    return {
      detailCode: "PROJECT_INVALID",
      reason: "repository_remote_identity_mismatch",
    };
  }
  const branch =
    typeof binding.defaultBranch === "string" ? binding.defaultBranch.trim() : "";
  if (!branch || branch.includes("..") || branch.includes("/") || branch.includes("\\")) {
    return { detailCode: "PROJECT_INVALID", reason: "repository_default_branch_invalid" };
  }
  if (binding.baseSha != null) {
    const sha = binding.baseSha.trim();
    if (!SHA1_OR_SHA256_HEX.test(sha)) {
      return { detailCode: "PROJECT_INVALID", reason: "repository_base_sha_invalid" };
    }
  }
  if (binding.pathRoot != null) {
    const pathRoot = binding.pathRoot.trim().replace(/\/+$/, "");
    if (!pathRoot) {
      return { detailCode: "PROJECT_INVALID", reason: "repository_path_root_empty" };
    }
    if (
      pathRoot.startsWith("/") ||
      pathRoot.includes("\\") ||
      pathRoot.split("/").some((seg) => seg === ".." || seg === "")
    ) {
      return {
        detailCode: "PROJECT_INVALID",
        reason: "repository_path_root_traversal",
      };
    }
  }
  return null;
}
