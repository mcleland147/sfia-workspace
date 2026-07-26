/**
 * In-memory MaturityAssessment store — NOT DATABASE SELECTED (U-M02 OPEN).
 */
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type { MaturityIdempotencyRecord } from "../ports/maturityAssessmentRepository";

export class MemoryMaturityAssessmentStore {
  assessments = new Map<string, MaturityAssessment>();
  idempotencyIndex = new Map<
    string,
    MaturityIdempotencyRecord & { successorId?: string }
  >();
  failNextSave = false;
}
