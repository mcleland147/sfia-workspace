/**
 * Deterministic docs_write minimum-conformity verifier (v2).
 * CR-CEC-01/02/03: bound Attempt snapshot only · oracle fingerprint · closed expectations.
 * No NLP / LLM. Unknown criteria → refuse. Fenced code blocks ignored for headings.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import type { Digest } from "@/lib/oa/doctrine";
import type { ExecutionAttemptSnapshot } from "../domain/types";

/** Stable verifier profile — Evidence.source must equal this exactly. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE =
  "docs_write_min_conformity_verifier:v2" as const;

/** @deprecated v1 profile — historical Evidence may still carry this; not accepted by v2 semantic. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE_V1 =
  "docs_write_min_conformity_verifier:v1" as const;

export const DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX =
  "docs_write_min_conformity:v2:oracle:" as const;

/** @deprecated v1 technicalResultRef — not accepted by v2 semantic. */
export const DOCS_WRITE_MIN_CONFORMITY_VERIFIER_TECHNICAL_RESULT_REF_V1 =
  "docs_write_min_conformity:v1:headings_present" as const;

/**
 * Exact supported validationExpectation templates (closed set — no NLP).
 * Apostrophe in VE1 is U+2019 (bound Attempt 3 EC truth).
 */
export const DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET =
  "Vérifier que le fichier existe au chemin cible" as const;

export const DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT =
  "V\u00e9rifier la pr\u00e9sence de l\u2019objectif, du p\u00e9rim\u00e8tre inclus et exclu, des besoins principaux, des crit\u00e8res de succ\u00e8s et de la prochaine \u00e9tape" as const;

const SUPPORTED_VALIDATION_EXPECTATIONS: ReadonlySet<string> = new Set([
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
]);

export type DocsWriteMinConformityCriteria = {
  readonly targetPath: string;
  readonly contentRequirements: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly artifactType?: string;
  readonly boundSemanticFingerprint: string;
};

export type DocsWriteOracleFingerprintMaterial = {
  readonly verifierProfile: typeof DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE;
  readonly boundSemanticFingerprint: string;
  readonly targetPath: string;
  readonly contentRequirements: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly artifactType: string | null;
};

export type DocsWriteMinConformityPass = {
  readonly ok: true;
  readonly artifactPath: string;
  readonly digest: Digest;
  readonly matchedHeadings: readonly string[];
  readonly oracleFingerprint: string;
  readonly technicalResultRef: string;
  readonly verifierSource: typeof DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE;
};

export type DocsWriteMinConformityFail = {
  readonly ok: false;
  readonly code: string;
  readonly message: string;
  readonly missingHeadings?: readonly string[];
  readonly computedDigest?: Digest;
};

export type DocsWriteMinConformityResult =
  | DocsWriteMinConformityPass
  | DocsWriteMinConformityFail;

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : undefined;
}

/**
 * Canonical JSON for oracle fingerprint — fixed key order, arrays preserved.
 */
export function canonicalizeDocsWriteOracleMaterial(
  material: DocsWriteOracleFingerprintMaterial,
): string {
  return JSON.stringify({
    artifactType: material.artifactType,
    boundSemanticFingerprint: material.boundSemanticFingerprint,
    contentRequirements: material.contentRequirements,
    targetPath: material.targetPath,
    validationExpectations: material.validationExpectations,
    verifierProfile: material.verifierProfile,
  });
}

export function computeDocsWriteOracleFingerprint(
  material: DocsWriteOracleFingerprintMaterial,
): string {
  return createHash("sha256")
    .update(canonicalizeDocsWriteOracleMaterial(material), "utf8")
    .digest("hex");
}

export function docsWriteConformityTechnicalResultRef(
  oracleFingerprint: string,
): string {
  return `${DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX}${oracleFingerprint}`;
}

export function parseDocsWriteConformityOracleFingerprint(
  technicalResultRef: string | undefined,
): string | undefined {
  if (!technicalResultRef) return undefined;
  if (
    !technicalResultRef.startsWith(
      DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX,
    )
  ) {
    return undefined;
  }
  const fp = technicalResultRef.slice(
    DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX.length,
  );
  return /^[a-f0-9]{64}$/.test(fp) ? fp : undefined;
}

/**
 * CR-CEC-01 — derive criteria ONLY from Attempt boundExecutionContract snapshot.
 * Never from live ExecutionContract.inputs.
 */
export function extractDocsWriteMinConformityCriteriaFromBoundAttempt(
  attempt: Pick<
    ExecutionAttemptSnapshot,
    "boundExecutionContract" | "executionContractSemanticFingerprint"
  >,
):
  | { ok: true; criteria: DocsWriteMinConformityCriteria }
  | { ok: false; code: string; message: string } {
  const bound = attempt.boundExecutionContract;
  if (!bound) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "attempt.boundExecutionContract absent — fail-closed.",
    };
  }
  const fingerprint =
    asNonEmptyString(bound.semanticFingerprint) ??
    asNonEmptyString(attempt.executionContractSemanticFingerprint);
  if (!fingerprint) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound semanticFingerprint absent — fail-closed.",
    };
  }
  const inputs = bound.semanticMaterial?.inputs;
  if (!inputs || typeof inputs !== "object") {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message:
        "boundExecutionContract.semanticMaterial.inputs absent — fail-closed.",
    };
  }
  return extractDocsWriteMinConformityCriteria(
    inputs as Record<string, unknown>,
    fingerprint,
  );
}

/**
 * Extract + validate closed acceptance criteria from bound inputs.
 * Unknown validationExpectations → BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED.
 */
export function extractDocsWriteMinConformityCriteria(
  inputs: Record<string, unknown> | undefined,
  boundSemanticFingerprint: string,
):
  | { ok: true; criteria: DocsWriteMinConformityCriteria }
  | { ok: false; code: string; message: string } {
  if (!inputs || typeof inputs !== "object") {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs absent — cannot derive conformity oracle.",
    };
  }
  const fp = asNonEmptyString(boundSemanticFingerprint);
  if (!fp) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "boundSemanticFingerprint required.",
    };
  }
  const targetPath = asNonEmptyString(inputs.targetPath);
  if (!targetPath) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.targetPath missing.",
    };
  }
  const rawReq = inputs.contentRequirements;
  if (!Array.isArray(rawReq) || rawReq.length === 0) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.contentRequirements missing.",
    };
  }
  const contentRequirements: string[] = [];
  for (const item of rawReq) {
    const s = asNonEmptyString(item);
    if (!s) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_INVALID",
        message: "contentRequirements contains non-string entry.",
      };
    }
    contentRequirements.push(s);
  }

  const rawVe = inputs.validationExpectations;
  if (!Array.isArray(rawVe) || rawVe.length === 0) {
    return {
      ok: false,
      code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
      message: "bound inputs.validationExpectations missing.",
    };
  }
  const validationExpectations: string[] = [];
  for (const item of rawVe) {
    const s = asNonEmptyString(item);
    if (!s) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_INVALID",
        message: "validationExpectations contains non-string entry.",
      };
    }
    if (!SUPPORTED_VALIDATION_EXPECTATIONS.has(s)) {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED",
        message: `unsupported validationExpectation: ${s}`,
      };
    }
    validationExpectations.push(s);
  }

  const artifactType = asNonEmptyString(inputs.artifactType);

  return {
    ok: true,
    criteria: {
      targetPath,
      contentRequirements,
      validationExpectations,
      ...(artifactType ? { artifactType } : {}),
      boundSemanticFingerprint: fp,
    },
  };
}

export function buildDocsWriteOracleFingerprintMaterial(
  criteria: DocsWriteMinConformityCriteria,
): DocsWriteOracleFingerprintMaterial {
  return {
    verifierProfile: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
    boundSemanticFingerprint: criteria.boundSemanticFingerprint,
    targetPath: criteria.targetPath,
    contentRequirements: criteria.contentRequirements,
    validationExpectations: criteria.validationExpectations,
    artifactType: criteria.artifactType ?? null,
  };
}

/**
 * Strip fenced code blocks (``` / ~~~) so headings inside fences cannot PASS.
 */
export function stripMarkdownFencedCodeBlocks(markdown: string): string {
  // CommonMark-style fences: opening fence of 3+ backticks/tildes, optional info string,
  // closed by a fence of same character with at least the same length.
  return markdown.replace(
    /(^|\n)([`~]{3,})[^\n]*\n[\s\S]*?(?:\n\2[`~]*[ \t]*(?:\n|$)|$)/g,
    "$1",
  );
}

function headingPresentOutsideFences(
  markdown: string,
  requirement: string,
): boolean {
  const body = stripMarkdownFencedCodeBlocks(markdown);
  const escaped = requirement.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^#{1,6}\\s+${escaped}\\s*$`, "m");
  return re.test(body);
}

export function verifyDocsWriteMinConformityFromBytes(input: {
  readonly bytes: Buffer;
  readonly artifactPath: string;
  readonly expectedDigest?: Digest;
  readonly criteria: DocsWriteMinConformityCriteria;
}): DocsWriteMinConformityResult {
  const digest =
    `sha256:${createHash("sha256").update(input.bytes).digest("hex")}` as Digest;
  if (input.expectedDigest && input.expectedDigest !== digest) {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_DIGEST_MISMATCH",
      message: `computed digest ${digest} != expected ${input.expectedDigest}`,
      computedDigest: digest,
    };
  }
  if (input.bytes.length === 0) {
    return {
      ok: false,
      code: "ARTIFACT_EMPTY",
      message: "artifact payload empty",
      computedDigest: digest,
    };
  }

  const markdown = input.bytes.toString("utf8");
  if (!markdown.trim()) {
    return {
      ok: false,
      code: "ARTIFACT_EMPTY",
      message: "artifact payload empty",
      computedDigest: digest,
    };
  }

  // artifactType Markdown → require .md path (closed deterministic check).
  if (input.criteria.artifactType) {
    const at = input.criteria.artifactType;
    if (at === "Markdown" || at.toLowerCase() === "markdown") {
      if (!/\.md$/i.test(input.criteria.targetPath)) {
        return {
          ok: false,
          code: "ARTIFACT_TYPE_PATH_MISMATCH",
          message: "artifactType Markdown requires .md targetPath",
          computedDigest: digest,
        };
      }
      if (!/\.md$/i.test(input.artifactPath)) {
        return {
          ok: false,
          code: "ARTIFACT_TYPE_PATH_MISMATCH",
          message: "artifactType Markdown requires .md artifact path",
          computedDigest: digest,
        };
      }
    } else {
      return {
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED",
        message: `unsupported artifactType: ${at}`,
        computedDigest: digest,
      };
    }
  }

  // VE: file exists at target — bytes non-empty + digest + path already checked.
  if (
    input.criteria.validationExpectations.includes(
      DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
    )
  ) {
    if (input.artifactPath.trim() !== input.criteria.targetPath) {
      return {
        ok: false,
        code: "ARTIFACT_PATH_MISMATCH",
        message: `artifact path ${input.artifactPath} != targetPath ${input.criteria.targetPath}`,
        computedDigest: digest,
      };
    }
  }

  const missing: string[] = [];
  const matched: string[] = [];
  const needsSections = input.criteria.validationExpectations.includes(
    DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  );
  if (needsSections || input.criteria.contentRequirements.length > 0) {
    for (const req of input.criteria.contentRequirements) {
      if (headingPresentOutsideFences(markdown, req)) matched.push(req);
      else missing.push(req);
    }
  }
  if (missing.length > 0) {
    return {
      ok: false,
      code: "CONFORMITY_HEADINGS_MISSING",
      message: `missing required headings: ${missing.join(", ")}`,
      missingHeadings: missing,
      computedDigest: digest,
    };
  }

  const oracleMaterial = buildDocsWriteOracleFingerprintMaterial(
    input.criteria,
  );
  const oracleFingerprint = computeDocsWriteOracleFingerprint(oracleMaterial);
  const technicalResultRef =
    docsWriteConformityTechnicalResultRef(oracleFingerprint);

  return {
    ok: true,
    artifactPath: input.artifactPath,
    digest,
    matchedHeadings: matched,
    oracleFingerprint,
    technicalResultRef,
    verifierSource: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
  };
}

export function verifyDocsWriteMinConformityFromFile(input: {
  readonly absolutePath: string;
  readonly artifactPath: string;
  readonly expectedDigest?: Digest;
  readonly criteria: DocsWriteMinConformityCriteria;
}): DocsWriteMinConformityResult {
  let bytes: Buffer;
  try {
    bytes = readFileSync(input.absolutePath);
  } catch (err) {
    return {
      ok: false,
      code: "HISTORICAL_ARTIFACT_PAYLOAD_UNAVAILABLE",
      message: `cannot read artifact: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
  return verifyDocsWriteMinConformityFromBytes({
    bytes,
    artifactPath: input.artifactPath,
    expectedDigest: input.expectedDigest,
    criteria: input.criteria,
  });
}

/**
 * Derive expected oracle fingerprint from Attempt bound snapshot (server-owned).
 */
export function expectedDocsWriteConformityOracleFingerprint(
  attempt: Pick<
    ExecutionAttemptSnapshot,
    "boundExecutionContract" | "executionContractSemanticFingerprint"
  >,
): string | undefined {
  const extracted = extractDocsWriteMinConformityCriteriaFromBoundAttempt(attempt);
  if (!extracted.ok) return undefined;
  return computeDocsWriteOracleFingerprint(
    buildDocsWriteOracleFingerprintMaterial(extracted.criteria),
  );
}
