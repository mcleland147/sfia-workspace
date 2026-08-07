/**
 * FinOps T1 — capture boundary port injected into the execution coordinator.
 */

import type { FinOpsCaptureDiagnostic } from "../application/types";

/**
 * Minimal usage shape accepted at the capture boundary.
 * Intentionally independent of execution-run domain imports to keep FinOps
 * application free of execution-run coupling at the type layer when composed.
 */
export type FinOpsCaptureUsageInput = {
  readonly status: "validated" | "unavailable" | "invalid";
  readonly inputTokens?: number;
  readonly outputTokens?: number;
  readonly totalTokens?: number;
  readonly unit?: string;
  readonly model?: string | null;
  readonly providerResponseId?: string | null;
  readonly reason?: string;
};

export type FinOpsCaptureRequest = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly provider: string;
  readonly usage: FinOpsCaptureUsageInput;
  readonly occurredAt: string;
};

export type FinOpsCapturePort = {
  readonly captureUsage: (
    request: FinOpsCaptureRequest,
  ) => Promise<FinOpsCaptureDiagnostic>;
};
