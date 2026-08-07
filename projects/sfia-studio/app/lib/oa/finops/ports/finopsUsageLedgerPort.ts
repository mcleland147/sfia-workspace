/**
 * FinOps T1 — append-only ledger port (insert only; no update/delete).
 */

import type {
  FinOpsLedgerInsertResult,
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
} from "../application/types";

export type FinOpsUsageLedgerPort = {
  /**
   * Insert a usage event transactionally with unique dedup_key handling.
   * Implementations must never UPDATE or DELETE business rows.
   */
  readonly insertUsageEvent: (
    event: FinOpsUsageEvent,
    fingerprint: FinOpsUsageFingerprint,
  ) => Promise<FinOpsLedgerInsertResult>;
};
