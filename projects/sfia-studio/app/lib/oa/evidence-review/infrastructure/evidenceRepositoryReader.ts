import type { Evidence } from "../domain/types";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";

/** Thin read-only adapter over EvidenceRepository — never writes. */
export class EvidenceRepositoryReader implements EvidenceReaderPort {
  constructor(private readonly repo: EvidenceRepositoryPort) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    return this.repo.findById(evidenceId);
  }
}
