/**
 * Read-only MaturityAssessment access for D5 coordination.
 * Never mutates MaturityAssessment.
 */
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";

export interface MaturityAssessmentReaderPort {
  findById(maturityAssessmentId: string): Promise<MaturityAssessment | null>;
}
