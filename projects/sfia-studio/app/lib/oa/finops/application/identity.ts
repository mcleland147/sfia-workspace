/**
 * FinOps T1 — deterministic event_id / dedup_key (SHA-256, versioned material).
 * No Math.random, no UUID, no wall-clock, no cost, no secrets, no prompt content.
 */

import { createHash } from "node:crypto";
import { FINOPS_USAGE_IDENTITY_CONTRACT_VERSION } from "./types";

export type FinOpsIdentityMaterial = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly provider: string;
  /** Prefer provider response id when present; else stable correlationId. */
  readonly providerRequestId: string | null;
  readonly correlationId: string | null;
};

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

/**
 * Stable material string for identity hashing.
 * Order and separators are part of the contract version.
 */
export function buildIdentityMaterial(input: FinOpsIdentityMaterial): string {
  const responseOrCorrelation =
    normalizePart(input.providerRequestId) ||
    normalizePart(input.correlationId);
  return [
    FINOPS_USAGE_IDENTITY_CONTRACT_VERSION,
    normalizePart(input.projectId),
    normalizePart(input.executionRunId),
    normalizePart(input.provider),
    responseOrCorrelation,
  ].join("|");
}

export function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveFinOpsIdentity(input: FinOpsIdentityMaterial): {
  readonly eventId: string;
  readonly dedupKey: string;
  readonly material: string;
} {
  const material = buildIdentityMaterial(input);
  const digest = sha256Hex(material);
  return {
    eventId: `evt_${digest}`,
    dedupKey: `dedup_${digest}`,
    material,
  };
}
