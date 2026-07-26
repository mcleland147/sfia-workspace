import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";

export type MaturityIdempotencyRecord = {
  maturityAssessmentId: string;
  fingerprint: string;
  operation: "propose_maturity" | "confirm_maturity" | "downgrade_maturity";
  successorId?: string;
};

export interface MaturityAssessmentRepositoryPort {
  findById(maturityAssessmentId: string): Promise<MaturityAssessment | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    maturityAssessment: MaturityAssessment;
    record: MaturityIdempotencyRecord;
    successor?: MaturityAssessment;
  } | null>;
  exists(maturityAssessmentId: string): Promise<boolean>;
  create(
    assessment: MaturityAssessment,
    record?: MaturityIdempotencyRecord,
  ): Promise<void>;
  update(
    assessment: MaturityAssessment,
    expectedVersion: number,
    record?: MaturityIdempotencyRecord,
  ): Promise<void>;
  /** Atomic downgrade: create successor + mark source superseded. */
  createSuccessorAndMarkSuperseded(
    successor: MaturityAssessment,
    superseded: MaturityAssessment,
    expectedVersion: number,
    record: MaturityIdempotencyRecord & { successorId: string },
  ): Promise<void>;
}
