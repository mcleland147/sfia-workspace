/**
 * FinOps T0 — structured domain errors (no infrastructure dependency).
 */

import type { FinOpsDetailCode } from "./types";

export type FinOpsStructuredError = {
  readonly detailCode: FinOpsDetailCode;
  readonly message: string;
  readonly reason: string;
  readonly timestamp?: string;
};

export function createFinOpsError(input: {
  detailCode: FinOpsDetailCode;
  reason: string;
  timestamp?: string;
}): FinOpsStructuredError {
  return {
    detailCode: input.detailCode,
    message: `FinOps domain error: ${input.detailCode}`,
    reason: input.reason,
    ...(input.timestamp !== undefined ? { timestamp: input.timestamp } : {}),
  };
}

export class FinOpsDomainError extends Error {
  readonly structured: FinOpsStructuredError;

  constructor(structured: FinOpsStructuredError) {
    super(structured.message);
    this.name = "FinOpsDomainError";
    this.structured = structured;
  }
}
