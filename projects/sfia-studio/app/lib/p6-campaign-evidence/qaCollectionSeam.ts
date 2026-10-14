/**
 * QA collection seam for P6 campaign harnesses.
 *
 * Status:
 *   QA COLLECTION SEAM DETERMINISTICALLY PROVEN
 *   O2 LINKED EVIDENCE WIRING — DET IMPLEMENTED (this cycle)
 *   OPERATIONAL REAL HARNESS MIGRATION — NOT DONE
 *
 * Historical REAL harnesses (`__tests__/p6-campaign/*.real.test.ts` on qa WT)
 * still call `fs.appendFileSync` inline. They are NOT modified / NOT copied /
 * NOT executed in this O2 worktree.
 *
 * O2 DET wiring sequence (harness-owned identities):
 *   1. Product turn → ProjectAssistantSendResult
 *   2. Build QA campaign row from observed results
 *   3. appendValidatedP6CampaignLedgerRow (secured)
 *   4. If dto.cognitiveExecutionReceipt present:
 *        collectP6ProductTurnEvidence({ ..., linkedQaRunId: qaRunId })
 *   5. Else: QA-only; never fabricate a receipt
 *   6. Reopen via resolveP6O2LinkedEvidencePair / readP6EvidenceLedger
 *
 * Product must NOT import this module.
 */

import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import {
  appendValidatedP6CampaignLedgerRow,
  captureCognitiveExecutionReceiptToP6Ledger,
  type CaptureCognitiveExecutionReceiptResult,
} from "./captureCognitiveExecutionReceipt";
import {
  P6_CAMPAIGN_ID,
  type AppendP6EvidenceLedgerResult,
  type P6EvidenceLedgerRow,
} from "./evidenceLedger";

export const P6_QA_COLLECTION_SEAM_STATUS = {
  deterministicProven: true,
  operationalCampaignWiring: "O2_DET_IMPLEMENTED",
  o2LinkContract: "MINIMAL_LINKED_QA_RUN_ID",
  o2Cardinality: "QA_0_OR_1_RECEIPT",
  historicalHarnessMigration: "NOT_DONE",
} as const;

export type P6QaCollectionInput = {
  productTurnResult: ProjectAssistantSendResult;
  runId: string;
  scenarioId: string;
  campaignId?: string;
  /** O2 — QA runId this cognitive entry links to (required for dual evidence). */
  linkedQaRunId?: string;
  absolutePath?: string;
  onDuplicate?: "reject" | "skip";
};

/**
 * Canonical P6 QA collection entrypoint — harnesses call this after Product turn
 * when a cognitive receipt must be captured (optionally O2-linked).
 */
export function collectP6ProductTurnEvidence(
  input: P6QaCollectionInput,
): CaptureCognitiveExecutionReceiptResult {
  // Forward linkedQaRunId only when provided — omit key when undefined so capture
  // treats legacy/unlinked calls as truly absent (R-PR581-02 / R02-K).
  return captureCognitiveExecutionReceiptToP6Ledger({
    dto: input.productTurnResult,
    runId: input.runId,
    scenarioId: input.scenarioId,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    absolutePath: input.absolutePath,
    onDuplicate: input.onDuplicate,
    ...(input.linkedQaRunId !== undefined
      ? { linkedQaRunId: input.linkedQaRunId }
      : {}),
  });
}

export type P6O2OperationalWireInput = {
  /** Campaign QA result row (harness-owned runId / scenarioId / campaignId). */
  qaRow: P6EvidenceLedgerRow;
  productTurnResult: ProjectAssistantSendResult;
  /** Distinct cognitive ledger runId (≠ QA runId, ≠ logicalTurnId). */
  cognitiveRunId: string;
  absolutePath?: string;
};

export type P6O2OperationalWireResult = {
  qa: AppendP6EvidenceLedgerResult;
  cognitive:
    | CaptureCognitiveExecutionReceiptResult
    | { ok: true; status: "qa_only_no_receipt" }
    | {
        ok: false;
        status: "cognitive_skipped_qa_failed";
        message: string;
      };
};

/**
 * O2 operational sequence: QA append first, then linked cognitive capture if DTO has receipt.
 * Never fabricates a receipt. Never rewrites QA on cognitive failure.
 */
export function wireP6O2OperationalEvidence(
  input: P6O2OperationalWireInput,
): P6O2OperationalWireResult {
  const qaRunId = input.qaRow.runId;
  const scenarioId = input.qaRow.scenarioId;
  if (typeof qaRunId !== "string" || qaRunId.trim().length === 0) {
    return {
      qa: {
        ok: false,
        code: "O2_QA_RUNID_REQUIRED",
        message: "qaRow.runId required",
        absolutePath: input.absolutePath,
      },
      cognitive: {
        ok: false,
        status: "cognitive_skipped_qa_failed",
        message: "qaRow.runId required",
      },
    };
  }
  if (typeof scenarioId !== "string" || scenarioId.trim().length === 0) {
    return {
      qa: {
        ok: false,
        code: "O2_QA_SCENARIO_REQUIRED",
        message: "qaRow.scenarioId required",
        absolutePath: input.absolutePath,
      },
      cognitive: {
        ok: false,
        status: "cognitive_skipped_qa_failed",
        message: "qaRow.scenarioId required",
      },
    };
  }

  const qa = appendValidatedP6CampaignLedgerRow(input.qaRow, {
    absolutePath: input.absolutePath,
  });
  if (!qa.ok) {
    return {
      qa,
      cognitive: {
        ok: false,
        status: "cognitive_skipped_qa_failed",
        message: qa.message,
      },
    };
  }

  if (!input.productTurnResult.cognitiveExecutionReceipt) {
    return { qa, cognitive: { ok: true, status: "qa_only_no_receipt" } };
  }

  const cognitive = collectP6ProductTurnEvidence({
    productTurnResult: input.productTurnResult,
    runId: input.cognitiveRunId,
    scenarioId,
    campaignId:
      typeof input.qaRow.campaignId === "string"
        ? input.qaRow.campaignId
        : P6_CAMPAIGN_ID,
    linkedQaRunId: qaRunId,
    absolutePath: input.absolutePath,
  });
  return { qa, cognitive };
}
