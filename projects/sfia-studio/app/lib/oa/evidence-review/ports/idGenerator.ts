import type { ClockPort } from "@/lib/oa/doctrine";

/**
 * Bounded id helpers for Evidence D1.
 * Prefer caller-supplied evidenceId (T-A5 style); generators are for provenance/correlation.
 */
export interface IdGeneratorPort {
  newProvenanceId(): string;
  newCorrelationId(): string;
}

export type { ClockPort };
