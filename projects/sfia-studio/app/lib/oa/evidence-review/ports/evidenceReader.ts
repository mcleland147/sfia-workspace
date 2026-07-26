import type { Evidence } from "../domain/types";

/**
 * Read-only Evidence surface for ReviewBundle (D-T-A6-DEL-06).
 * Must never mutate Evidence.
 */
export interface EvidenceReaderPort {
  findById(evidenceId: string): Promise<Evidence | null>;
}
