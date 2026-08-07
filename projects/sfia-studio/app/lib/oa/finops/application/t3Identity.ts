/**
 * FinOps T3 — deterministic C1 identity (SHA-256).
 * Material: version + projectId + periodStart + thresholdCode + currency.
 * Does NOT include kind, basis, amount, rebuildVersion, or timestamps.
 */

import { createHash } from "node:crypto";
import { FINOPS_T3_IDENTITY_CONTRACT_VERSION } from "./types.alertReview";

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveT3ThresholdIdentity(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly thresholdCode: string;
  readonly currency: string;
}): {
  readonly digest: string;
  readonly dedupKey: string;
  readonly alertId: string;
  readonly reviewId: string;
} {
  const material = [
    FINOPS_T3_IDENTITY_CONTRACT_VERSION,
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.thresholdCode),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    digest,
    dedupKey: `t3_dedup_${digest}`,
    alertId: `alert_${digest}`,
    reviewId: `review_${digest}`,
  };
}
