/**
 * QA collection seam for P6 campaign harnesses.
 *
 * Status:
 *   QA COLLECTION SEAM DETERMINISTICALLY PROVEN
 *   OPERATIONAL CAMPAIGN WIRING PENDING
 *
 * Historical REAL harnesses (`__tests__/p6-campaign/*.real.test.ts` on qa WT)
 * still call `fs.appendFileSync` inline. They are NOT modified / NOT copied /
 * NOT executed in this Option B worktree.
 *
 * Future REAL wiring (minimal plan — prerequisite under distinct Morris GO):
 *   1. After Product turn returns `ProjectAssistantSendResult`, call
 *      `collectP6ProductTurnEvidence({ productTurnResult, runId, scenarioId })`.
 *   2. `runId` remains campaign-owned (≠ logicalTurnId).
 *   3. Ledger path: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl`
 *      (or explicit absolutePath for isolated DET).
 *   4. Reopen via `readP6EvidenceLedger` / `findP6EvidenceLedgerRowsByRunId`.
 *   5. Keep historical campaign-run appends for non-receipt rows via
 *      `appendValidatedP6CampaignLedgerRow` (secured), or leave scenario rows
 *      as today until migrated.
 *   6. Concurrency: MONO-WRITER — do not parallelize ledger writers.
 *
 * Product must NOT import this module.
 */

import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import {
  captureCognitiveExecutionReceiptToP6Ledger,
  type CaptureCognitiveExecutionReceiptResult,
} from "./captureCognitiveExecutionReceipt";
import { P6_CAMPAIGN_ID } from "./evidenceLedger";

export const P6_QA_COLLECTION_SEAM_STATUS = {
  deterministicProven: true,
  operationalCampaignWiring: "PENDING",
  historicalHarnessMigration: "NOT_DONE",
} as const;

export type P6QaCollectionInput = {
  productTurnResult: ProjectAssistantSendResult;
  runId: string;
  scenarioId: string;
  campaignId?: string;
  absolutePath?: string;
  onDuplicate?: "reject" | "skip";
};

/**
 * Canonical P6 QA collection entrypoint — harnesses call this after Product turn.
 */
export function collectP6ProductTurnEvidence(
  input: P6QaCollectionInput,
): CaptureCognitiveExecutionReceiptResult {
  return captureCognitiveExecutionReceiptToP6Ledger({
    dto: input.productTurnResult,
    runId: input.runId,
    scenarioId: input.scenarioId,
    campaignId: input.campaignId ?? P6_CAMPAIGN_ID,
    absolutePath: input.absolutePath,
    onDuplicate: input.onDuplicate,
  });
}
