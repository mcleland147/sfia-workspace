/**
 * Capture Product CognitiveExecutionReceipt DTO → external P6 Evidence Ledger.
 *
 * Product must NOT call this. QA / campaign harnesses only.
 *
 * ledgerSchemaVersion 2 — complete receipt projection (GO 2026-10-13 completeness).
 * Historical v1 / incomplete rows remain readable; never rewritten.
 */

import type { CognitiveExecutionReceipt } from "@/features/project-assistant/cognitiveExecutionReceipt";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import {
  P6_CAMPAIGN_ID,
  appendP6EvidenceLedgerRow,
  readP6EvidenceLedger,
  resolveP6EvidenceLedgerAbsolutePath,
  withP6EvidenceLedgerLock,
  type P6EvidenceLedgerRow,
} from "./evidenceLedger";
import {
  durableLedgerContentEquivalent,
  validateLedgerRowForAppend,
} from "./ledgerRowValidation";
import fs from "node:fs";
import path from "node:path";

/** Complete CognitiveExecutionReceipt ledger row format. */
export const P6_RECEIPT_LEDGER_SCHEMA_VERSION = 2 as const;

export type CaptureCognitiveExecutionReceiptInput = {
  dto?: ProjectAssistantSendResult;
  receipt?: CognitiveExecutionReceipt;
  runId: string;
  scenarioId: string;
  campaignId?: string;
  absolutePath?: string;
  onDuplicate?: "reject" | "skip";
  reserves?: string[];
  campaignProofClassification?: "DETERMINISTIC";
};

export type CaptureCognitiveExecutionReceiptResult =
  | {
      ok: true;
      status: "appended" | "duplicate_skipped";
      absolutePath: string;
      entry: P6EvidenceLedgerRow;
    }
  | {
      ok: false;
      status:
        | "missing_receipt"
        | "duplicate_rejected"
        | "duplicate_conflict"
        | "campaign_mismatch"
        | "append_failed"
        | "integrity_blocks_capture"
        | "lock_failed"
        | "validation_failed"
        | "identity_mismatch";
      message: string;
      absolutePath?: string;
      existing?: P6EvidenceLedgerRow;
    };

/** Product receipt fields that must round-trip through the ledger (v2). */
export const P6_RECEIPT_COMPLETE_FIELD_PATHS = [
  "logicalTurnId",
  "projectId",
  "runtimeIdentity",
  "providerIdentity",
  "presentation",
  "providerConfigured",
  "providerResponseId",
  "providerResponseObservation",
  "proofClassification",
  "selectedModelId",
  "observedModel",
  "selectedReasoningEffort",
  "usage.inputTokens",
  "usage.outputTokens",
  "usage.totalTokens",
  "adaptiveObserve",
  "continuationObserve",
  "toolCalls",
  "limitReached",
  "productTerminalStatus",
  "conservation",
  "capturedAt",
] as const;

function resolveReceipt(
  input: CaptureCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt | null {
  if (input.dto?.cognitiveExecutionReceipt) {
    return input.dto.cognitiveExecutionReceipt;
  }
  if (input.receipt) return input.receipt;
  return null;
}

function cloneJson<T>(value: T): T {
  return value == null ? value : (JSON.parse(JSON.stringify(value)) as T);
}

/**
 * Project Product CognitiveExecutionReceipt → ledger row (complete, redacted metadata).
 * Null stays null. No invented providerResponseId. No token 0-coercion.
 */
export function buildCompleteCognitiveReceiptLedgerEntry(
  input: CaptureCognitiveExecutionReceiptInput,
  receipt: CognitiveExecutionReceipt,
): P6EvidenceLedgerRow {
  const entry: P6EvidenceLedgerRow = {
    kind: "cognitive_execution_receipt",
    ledgerSchemaVersion: P6_RECEIPT_LEDGER_SCHEMA_VERSION,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    runId: input.runId,
    scenarioId: input.scenarioId,
    logicalTurnId: receipt.logicalTurnId,
    projectId: receipt.projectId,
    runtimeIdentity: receipt.runtimeIdentity,
    providerIdentity: receipt.providerIdentity,
    presentation: receipt.presentation,
    providerConfigured: receipt.providerConfigured,
    providerResponseId: receipt.providerResponseId,
    providerResponseObservation: receipt.providerResponseObservation,
    proofClassification: receipt.proofClassification,
    productRealProofStatus: receipt.realProofStatus,
    selectedModelId: receipt.selectedModelId,
    observedModel: receipt.observedModel,
    selectedReasoningEffort: receipt.selectedReasoningEffort,
    usage: {
      inputTokens: receipt.usage.inputTokens,
      outputTokens: receipt.usage.outputTokens,
      totalTokens: receipt.usage.totalTokens,
    },
    adaptiveObserve: cloneJson(receipt.adaptiveObserve),
    continuationObserve: cloneJson(receipt.continuationObserve),
    toolCalls: receipt.toolCalls,
    limitReached: receipt.limitReached,
    productTerminalStatus: receipt.productTerminalStatus,
    productConservation: cloneJson(receipt.conservation),
    productCapturedAt: receipt.capturedAt,
    capturedAt: new Date().toISOString(),
    captureStatus: "CAPTURED",
    realBoundaryClaim: "NOT_CLAIMED",
    campaignProofClassification:
      input.campaignProofClassification ?? "DETERMINISTIC",
    runnerResponseIdPresent: receipt.providerResponseId != null,
    runnerResponseIdPrefix:
      typeof receipt.providerResponseId === "string"
        ? receipt.providerResponseId.slice(0, 12)
        : null,
    sourceBoundary: receipt.presentation,
    productProviderError:
      input.dto && input.dto.ok === false
        ? { status: input.dto.status, code: input.dto.code }
        : null,
    notes:
      "External P6 ledger complete receipt capture (schema v2). DET seam only unless REAL GO.",
  };
  if (input.reserves && input.reserves.length > 0) {
    entry.reserves = input.reserves.filter(
      (r) => typeof r === "string" && r.length < 200,
    );
  }
  return entry;
}

/**
 * Field-by-field compare of Product receipt vs reopened ledger entry (v2).
 * Returns list of mismatch paths (empty = complete conservation).
 */
export function diffReceiptAgainstLedgerEntry(
  receipt: CognitiveExecutionReceipt,
  entry: P6EvidenceLedgerRow,
): string[] {
  const mismatches: string[] = [];
  const eq = (path: string, a: unknown, b: unknown) => {
    if (JSON.stringify(a) !== JSON.stringify(b)) mismatches.push(path);
  };
  eq("logicalTurnId", receipt.logicalTurnId, entry.logicalTurnId);
  eq("projectId", receipt.projectId, entry.projectId);
  eq("runtimeIdentity", receipt.runtimeIdentity, entry.runtimeIdentity);
  eq("providerIdentity", receipt.providerIdentity, entry.providerIdentity);
  eq("presentation", receipt.presentation, entry.presentation);
  eq("providerConfigured", receipt.providerConfigured, entry.providerConfigured);
  eq("providerResponseId", receipt.providerResponseId, entry.providerResponseId);
  eq(
    "providerResponseObservation",
    receipt.providerResponseObservation,
    entry.providerResponseObservation,
  );
  eq("proofClassification", receipt.proofClassification, entry.proofClassification);
  eq("selectedModelId", receipt.selectedModelId, entry.selectedModelId);
  eq("observedModel", receipt.observedModel, entry.observedModel);
  eq(
    "selectedReasoningEffort",
    receipt.selectedReasoningEffort,
    entry.selectedReasoningEffort,
  );
  const usage = entry.usage as CognitiveExecutionReceipt["usage"] | undefined;
  eq("usage.inputTokens", receipt.usage.inputTokens, usage?.inputTokens);
  eq("usage.outputTokens", receipt.usage.outputTokens, usage?.outputTokens);
  eq("usage.totalTokens", receipt.usage.totalTokens, usage?.totalTokens);
  eq("adaptiveObserve", receipt.adaptiveObserve, entry.adaptiveObserve);
  eq("continuationObserve", receipt.continuationObserve, entry.continuationObserve);
  eq("toolCalls", receipt.toolCalls, entry.toolCalls);
  eq("limitReached", receipt.limitReached, entry.limitReached);
  eq(
    "productTerminalStatus",
    receipt.productTerminalStatus,
    entry.productTerminalStatus,
  );
  eq("conservation", receipt.conservation, entry.productConservation);
  eq("capturedAt", receipt.capturedAt, entry.productCapturedAt);
  eq("realProofStatus", receipt.realProofStatus, entry.productRealProofStatus);
  return mismatches;
}

/**
 * Duplicate skip requires durable content equivalence (tokens/budget/model/…).
 * QA `capturedAt` is excluded. Incomplete historical ≠ v2 complete.
 */
function identityCompatible(
  existing: P6EvidenceLedgerRow,
  candidate: P6EvidenceLedgerRow,
): boolean {
  return durableLedgerContentEquivalent(existing, candidate);
}

function appendUnlocked(
  absolutePath: string,
  row: P6EvidenceLedgerRow,
):
  | { ok: true; bytesWritten: number }
  | { ok: false; code: string; message: string } {
  const validation = validateLedgerRowForAppend(row);
  if (!validation.ok) {
    return { ok: false, code: validation.code, message: validation.message };
  }
  const prior = readP6EvidenceLedger({ absolutePath, allowMissing: true });
  if (
    prior.integrity === "DEGRADED" ||
    prior.integrity === "INVALID" ||
    prior.integrity === "UNREADABLE"
  ) {
    return {
      ok: false,
      code: "LEDGER_INTEGRITY_BLOCKS_APPEND",
      message: `refuse append while integrity=${prior.integrity}`,
    };
  }
  try {
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    const line = `${JSON.stringify(row)}\n`;
    fs.appendFileSync(absolutePath, line, { encoding: "utf8", mode: 0o600 });
    return { ok: true, bytesWritten: Buffer.byteLength(line, "utf8") };
  } catch (err) {
    return {
      ok: false,
      code: "APPEND_IO_ERROR",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function captureCognitiveExecutionReceiptToP6Ledger(
  input: CaptureCognitiveExecutionReceiptInput,
): CaptureCognitiveExecutionReceiptResult {
  const absolutePath =
    input.absolutePath ?? resolveP6EvidenceLedgerAbsolutePath();
  const campaignId = input.campaignId ?? P6_CAMPAIGN_ID;
  if (campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      status: "campaign_mismatch",
      message: `campaignId must be ${P6_CAMPAIGN_ID}`,
      absolutePath,
    };
  }

  const receipt = resolveReceipt(input);
  if (!receipt) {
    return {
      ok: false,
      status: "missing_receipt",
      message: "dto.cognitiveExecutionReceipt / receipt missing",
      absolutePath,
    };
  }

  if (input.runId === receipt.logicalTurnId) {
    return {
      ok: false,
      status: "identity_mismatch",
      message: "runId must differ from logicalTurnId",
      absolutePath,
    };
  }

  const candidate = buildCompleteCognitiveReceiptLedgerEntry(input, receipt);
  const validation = validateLedgerRowForAppend(candidate);
  if (!validation.ok) {
    return {
      ok: false,
      status: "validation_failed",
      message: validation.message,
      absolutePath,
    };
  }

  const onDuplicate = input.onDuplicate ?? "reject";

  const locked = withP6EvidenceLedgerLock(absolutePath, () => {
    const prior = readP6EvidenceLedger({ absolutePath, allowMissing: true });
    if (
      prior.integrity === "DEGRADED" ||
      prior.integrity === "INVALID" ||
      prior.integrity === "UNREADABLE"
    ) {
      return {
        ok: false as const,
        status: "integrity_blocks_capture" as const,
        message: `ledger integrity=${prior.integrity}; capture refused without rewrite`,
        absolutePath,
      };
    }

    const existing = prior.rows.find((r) => r.runId === input.runId);
    if (existing) {
      if (onDuplicate === "skip") {
        if (!identityCompatible(existing, candidate)) {
          return {
            ok: false as const,
            status: "duplicate_conflict" as const,
            message:
              "runId already persisted with incompatible identity; refusing false conservation",
            absolutePath,
            existing,
          };
        }
        return {
          ok: true as const,
          status: "duplicate_skipped" as const,
          absolutePath,
          entry: existing,
        };
      }
      return {
        ok: false as const,
        status: "duplicate_rejected" as const,
        message: `runId already present: ${input.runId}`,
        absolutePath,
        existing,
      };
    }

    const written = appendUnlocked(absolutePath, candidate);
    if (!written.ok) {
      return {
        ok: false as const,
        status: "append_failed" as const,
        message: written.message,
        absolutePath,
      };
    }
    return {
      ok: true as const,
      status: "appended" as const,
      absolutePath,
      entry: candidate,
    };
  });

  if (!locked.ok) {
    return {
      ok: false,
      status: "lock_failed",
      message: locked.message,
      absolutePath,
    };
  }
  return locked.value;
}

export function appendValidatedP6CampaignLedgerRow(
  row: unknown,
  options?: { absolutePath?: string },
): ReturnType<typeof appendP6EvidenceLedgerRow> {
  return appendP6EvidenceLedgerRow(row, options);
}
