/**
 * Increment E — build + validate EvidenceAnalysisPack (fail-closed).
 */

import { createHash } from "node:crypto";
import { canonicalize } from "../hash/canonicalize.js";
import {
  EVIDENCE_ANALYSIS_PACK_SCHEMA,
  type EvidenceAnalysisPack,
  type EvidencePackBuildInput,
  type EvidencePackValidationResult,
} from "../types/evidenceAnalysisPack.js";
import { detectObviousSecrets } from "../finops/analysisLimits.js";

function sanitizeText(s: string, max = 500): string {
  return s
    .replace(/sk-[A-Za-z0-9_-]{8,}/g, "[REDACTED]")
    .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]")
    .replace(/OPENAI_API_KEY\s*=\s*\S+/gi, "OPENAI_API_KEY=[REDACTED]")
    .replace(/\/Users\/[^/\s]+/g, "/Users/[REDACTED]")
    .slice(0, max);
}

export function buildEvidenceAnalysisPack(input: EvidencePackBuildInput): EvidenceAnalysisPack {
  const r = input.report;
  const branch = r.actualBranch ?? r.expectedBranch ?? "";
  const head = r.actualHead ?? r.expectedHead ?? "";
  const filesCreated = [...(r.filesCreated ?? [])];
  const filesModified = [...(r.filesModified ?? [])];
  const filesDeleted = [...(r.filesDeleted ?? [])];
  const outOfAllowlistChanges = [...(r.outOfAllowlistChanges ?? [])];
  const reservations = (r.reservations ?? []).map((x) => sanitizeText(x));
  const provenFacts = (input.provenFacts ?? [
    `executionStatus=${r.status}`,
    `filesCreated=${filesCreated.join(",") || "none"}`,
    `remoteGitWrites=${r.remoteGitWrites ?? "missing"}`,
  ]).map((x) => sanitizeText(x));

  const reportCompleteness: "complete" | "incomplete" =
    r.schemaVersion &&
    r.executionId &&
    r.requestId &&
    r.correlationId &&
    r.contractId &&
    r.contractHash &&
    branch &&
    head &&
    r.status &&
    typeof r.remoteGitWrites === "number" &&
    Array.isArray(r.outOfAllowlistChanges) &&
    Array.isArray(r.reservations)
      ? "complete"
      : "incomplete";

  const reviewPackCompleteness: "complete" | "incomplete" =
    input.reviewPackCompleteness === "complete" && input.reviewPackHasModifiedContent !== false
      ? "complete"
      : input.reviewPackCompleteness === "complete"
        ? "complete"
        : "incomplete";

  const bodyForHash = {
    schemaVersion: EVIDENCE_ANALYSIS_PACK_SCHEMA,
    analysisRequestId: input.analysisRequestId,
    requestId: r.requestId,
    correlationId: r.correlationId,
    qualificationId: input.qualificationId ?? null,
    executionId: r.executionId,
    contractId: r.contractId,
    contractHash: r.contractHash,
    branch,
    head,
    executionStatus: r.status,
    filesCreated,
    filesModified,
    filesDeleted,
    outOfAllowlistChanges,
    remoteGitWrites: r.remoteGitWrites ?? null,
    networkUsed: r.networkUsed ?? null,
    stopRequested: Boolean(r.stopRequested),
    timeout: Boolean(r.timeout),
    reportCompleteness,
    reviewPackCompleteness,
    tests: input.tests ?? {
      harnessPassed: false,
      appPassed: false,
      e2ePassed: false,
      notes: ["tests not provided"],
    },
    securityChecks: input.securityChecks ?? {
      secretsScanPassed: false,
      notes: ["security checks not provided"],
    },
    provenFacts,
    reservations,
    morrisDecisionsAlreadyRecorded: [] as string[],
    sourceReferences: input.sourceReferences ?? [
      "cursor-execution-report",
      "increment-d-sandbox-proof",
    ],
    sanitized: true as const,
    analysisAuthorized: input.analysisAuthorized === true,
    closureAuthorized: false as const,
    cursorModeNote: sanitizeText(
      `s1.cursorMode=${r.s1ContractCursorMode ?? "fixture"} (schema); processMode=${r.mode ?? "unknown"}; realCursor=${r.realCursorProcessInvoked === true}`,
    ),
  };

  const packHash = createHash("sha256").update(canonicalize(bodyForHash)).digest("hex");

  return {
    ...bodyForHash,
    remoteGitWrites: typeof r.remoteGitWrites === "number" ? r.remoteGitWrites : -1,
    networkUsed: Boolean(r.networkUsed),
    generatedAt: input.generatedAt ?? new Date().toISOString(),
    packHash,
  };
}

export function validateEvidenceAnalysisPack(pack: EvidenceAnalysisPack): EvidencePackValidationResult {
  const missing: string[] = [];
  const need = (cond: boolean, key: string) => {
    if (!cond) missing.push(key);
  };

  need(pack.schemaVersion === EVIDENCE_ANALYSIS_PACK_SCHEMA, "schemaVersion");
  need(Boolean(pack.analysisRequestId), "analysisRequestId");
  need(Boolean(pack.requestId), "requestId");
  need(Boolean(pack.correlationId), "correlationId");
  need(Boolean(pack.executionId), "executionId");
  need(Boolean(pack.contractId), "contractId");
  need(Boolean(pack.contractHash) && pack.contractHash.length >= 16, "contractHash");
  need(Boolean(pack.branch), "branch");
  need(Boolean(pack.head), "head");
  need(Boolean(pack.executionStatus), "executionStatus");
  need(Array.isArray(pack.filesCreated), "filesCreated");
  need(Array.isArray(pack.outOfAllowlistChanges), "outOfAllowlistChanges");
  need(typeof pack.remoteGitWrites === "number" && pack.remoteGitWrites >= 0, "remoteGitWrites");
  need(Array.isArray(pack.reservations), "reservations");
  need(pack.reportCompleteness === "complete", "reportCompleteness");
  need(pack.reviewPackCompleteness === "complete", "reviewPackCompleteness");
  need(pack.tests.harnessPassed && pack.tests.appPassed, "tests");
  need(pack.securityChecks.secretsScanPassed, "securityChecks");
  need(pack.analysisAuthorized === true, "analysisAuthorized");
  need(pack.sanitized === true, "sanitized");
  need(pack.closureAuthorized === false, "closureAuthorized");
  need(Boolean(pack.packHash), "packHash");

  const blob = JSON.stringify(pack);
  if (detectObviousSecrets(blob)) {
    return {
      ok: false,
      code: "SECRET_DETECTED",
      missing: ["secret"],
      message: "SECRET OR PII EXPOSURE — STOP",
    };
  }

  if (missing.length) {
    return {
      ok: false,
      code: "PACK_INCOMPLETE",
      missing,
      message: "ANALYSIS PACK INCOMPLETE — GPT ANALYSIS BLOCKED",
    };
  }
  return { ok: true, missing: [], message: "pack complete" };
}
