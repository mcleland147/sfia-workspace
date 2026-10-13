/**
 * P6 Campaign Evidence — external append-only JSONL ledger (QA authority).
 * Not Product persistence. Not ProductSqliteSession.
 */

export {
  P6_CAMPAIGN_ID,
  P6_EVIDENCE_LEDGER_RELATIVE_PATH,
  P6_LEDGER_CONCURRENCY_MODEL,
  resolveP6EvidenceLedgerAbsolutePath,
  resolveP6EvidenceLedgerPath,
  ensureP6EvidenceLedger,
  readP6EvidenceLedger,
  appendP6EvidenceLedgerRow,
  findP6EvidenceLedgerRowsByRunId,
  withP6EvidenceLedgerLock,
  forceRemoveOrphanP6EvidenceLedgerLock,
  type P6EvidenceLedgerRow,
  type P6LedgerIntegrityStatus,
  type ReadP6EvidenceLedgerResult,
  type AppendP6EvidenceLedgerResult,
} from "./evidenceLedger";

export {
  captureCognitiveExecutionReceiptToP6Ledger,
  appendValidatedP6CampaignLedgerRow,
  buildCompleteCognitiveReceiptLedgerEntry,
  diffReceiptAgainstLedgerEntry,
  P6_RECEIPT_LEDGER_SCHEMA_VERSION,
  P6_RECEIPT_COMPLETE_FIELD_PATHS,
  type CaptureCognitiveExecutionReceiptInput,
  type CaptureCognitiveExecutionReceiptResult,
} from "./captureCognitiveExecutionReceipt";

export {
  collectP6ProductTurnEvidence,
  P6_QA_COLLECTION_SEAM_STATUS,
  type P6QaCollectionInput,
} from "./qaCollectionSeam";

export {
  validateLedgerRowForAppend,
  validateCognitiveReceiptRow,
  classifyLedgerRowForRead,
  durableLedgerContentEquivalent,
  MAX_LEDGER_ROW_JSON_BYTES,
  P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED,
  P6_RECEIPT_DURABLE_COMPARE_KEYS,
  type LedgerRowReadClassification,
} from "./ledgerRowValidation";
