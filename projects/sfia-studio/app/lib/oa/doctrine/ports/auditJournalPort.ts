import type { DoctrineResolveResult } from "../domain/types";

/**
 * Minimal audit/observability sink for T-A0.
 * Compatible with future EventSink wiring; no distributed broker.
 */
export type DoctrineAuditEvent = {
  event: "oa.doctrine.resolution";
  ts: string;
  correlationId?: string;
  doctrinePackageId?: string;
  packageVersion?: string;
  expectedDigestSuffix?: string;
  observedDigestSuffix?: string;
  result: DoctrineResolveResult["outcome"];
  detailCode?: string;
  durationMs: number;
  adapter: string;
};

export interface AuditJournalPort {
  append(event: DoctrineAuditEvent): void;
}
