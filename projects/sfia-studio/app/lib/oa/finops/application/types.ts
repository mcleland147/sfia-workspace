/**
 * FinOps T1 — capture / ledger event types (usage-only; no Money).
 */

import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";

export const FINOPS_USAGE_IDENTITY_CONTRACT_VERSION = "t1-v1" as const;

export type FinOpsUsageStatus = "validated" | "unavailable" | "invalid";

export type FinOpsUsageEvent = {
  readonly eventId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string | null;
  readonly provider: string;
  readonly model: string | null;
  readonly occurredAt: string;
  /** UTC calendar month start as YYYY-MM-DD */
  readonly periodStart: string;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly evidenceClass: FinOpsCostEvidenceClass;
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly providerRequestId: string | null;
  readonly correctionRef: string | null;
  readonly usageStatus: FinOpsUsageStatus;
};

/** Canonical fingerprint fields used for conflict detection (no secrets, no prompt). */
export type FinOpsUsageFingerprint = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly provider: string;
  readonly providerRequestId: string | null;
  readonly correlationId: string | null;
  readonly usageStatus: FinOpsUsageStatus;
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly model: string | null;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly evidenceClass: FinOpsCostEvidenceClass;
};

export type SanitizedFinOpsCaptureError = {
  readonly code:
    | "FINOPS_CAPTURE_FAILED"
    | "FINOPS_DEDUP_CONFLICT"
    | "FINOPS_VALIDATION_FAILED"
    | "FINOPS_DB_UNAVAILABLE";
  readonly message: string;
  readonly retryable: boolean;
  readonly technicalDetailsRedacted: true;
};

export type FinOpsCaptureDiagnostic =
  | {
      readonly status: "not_attempted";
      readonly reason: string;
    }
  | {
      readonly status: "disabled";
      readonly reason: string;
    }
  | {
      readonly status: "created";
      readonly eventId: string;
      readonly dedupKey: string;
    }
  | {
      readonly status: "duplicate";
      readonly eventId: string;
      readonly dedupKey: string;
    }
  | {
      readonly status: "failed";
      readonly error: SanitizedFinOpsCaptureError;
    };

export type FinOpsLedgerInsertResult =
  | { readonly outcome: "created"; readonly eventId: string }
  | { readonly outcome: "duplicate"; readonly eventId: string }
  | {
      readonly outcome: "conflict";
      readonly error: SanitizedFinOpsCaptureError;
    }
  | {
      readonly outcome: "failed";
      readonly error: SanitizedFinOpsCaptureError;
    };
