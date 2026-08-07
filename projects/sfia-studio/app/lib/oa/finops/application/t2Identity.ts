/**
 * FinOps T2 — deterministic cost-event / reconciliation identity (SHA-256).
 */

import { createHash } from "node:crypto";
import { FINOPS_T2_IDENTITY_CONTRACT_VERSION } from "./types.aggregate";

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveCostEventIdentity(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly evidenceClass: string;
  readonly correctionRef: string | null;
  readonly sourceBatchId?: string | null;
  readonly amount: string | null;
  readonly currency: string;
}): { readonly costEventId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "cost",
    normalizePart(input.projectId),
    normalizePart(input.executionRunId),
    normalizePart(input.evidenceClass),
    normalizePart(input.correctionRef),
    normalizePart(input.sourceBatchId),
    normalizePart(input.amount),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    costEventId: `cost_${digest}`,
    dedupKey: `cost_dedup_${digest}`,
  };
}

export function deriveReconciliationDedupKey(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
}): { readonly reconciliationId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "recon",
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBatchId),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    reconciliationId: `recon_${digest}`,
    dedupKey: `recon_dedup_${digest}`,
  };
}
