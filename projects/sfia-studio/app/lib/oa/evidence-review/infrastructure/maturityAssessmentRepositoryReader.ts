/**
 * Read-only adapter over MaturityAssessmentRepository — never mutates.
 */
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
import type { MaturityAssessmentReaderPort } from "../ports/maturityAssessmentReader";

export class MaturityAssessmentRepositoryReader
  implements MaturityAssessmentReaderPort
{
  constructor(private readonly repo: MaturityAssessmentRepositoryPort) {}

  async findById(
    maturityAssessmentId: string,
  ): Promise<MaturityAssessment | null> {
    return this.repo.findById(maturityAssessmentId);
  }
}
