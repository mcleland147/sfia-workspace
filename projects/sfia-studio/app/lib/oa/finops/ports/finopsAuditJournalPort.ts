/**
 * FinOps T6-foundation — durable append-only audit journal port.
 * Does not expose pg. Failures are handled by callers (best-effort / fail-open).
 */

import type { FinOpsAuditRecord } from "../application/finopsAuditTypes";

export type FinOpsAuditJournalPort = {
  readonly append: (record: FinOpsAuditRecord) => Promise<void>;
};
