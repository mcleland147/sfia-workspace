import { MaturityAssessmentDomainError } from "../domain/maturityAssessmentErrors";
import { validateMaturityAssessmentShape } from "../domain/maturityAssessmentInvariants";
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type {
  MaturityAssessmentRepositoryPort,
  MaturityIdempotencyRecord,
} from "../ports/maturityAssessmentRepository";
import type { MemoryMaturityAssessmentStore } from "./memoryMaturityAssessmentStore";

export class MemoryMaturityAssessmentRepository
  implements MaturityAssessmentRepositoryPort
{
  constructor(private readonly store: MemoryMaturityAssessmentStore) {}

  async findById(
    maturityAssessmentId: string,
  ): Promise<MaturityAssessment | null> {
    const found = this.store.assessments.get(maturityAssessmentId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    maturityAssessment: MaturityAssessment;
    record: MaturityIdempotencyRecord;
    successor?: MaturityAssessment;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const maturityAssessment = await this.findById(record.maturityAssessmentId);
    if (!maturityAssessment) return null;
    const successor = record.successorId
      ? ((await this.findById(record.successorId)) ?? undefined)
      : undefined;
    return {
      maturityAssessment,
      record: structuredClone(record),
      successor,
    };
  }

  async exists(maturityAssessmentId: string): Promise<boolean> {
    return this.store.assessments.has(maturityAssessmentId);
  }

  async create(
    assessment: MaturityAssessment,
    record?: MaturityIdempotencyRecord,
  ): Promise<void> {
    const shape = validateMaturityAssessmentShape(assessment);
    if (shape) {
      throw new MaturityAssessmentDomainError(shape.detailCode, shape.reason);
    }
    if (assessment.version !== 1) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.assessments.has(assessment.maturityAssessmentId)) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_ALREADY_EXISTS",
        "maturity_assessment_id_taken",
      );
    }
    this.failIfForced();
    this.store.assessments.set(
      assessment.maturityAssessmentId,
      structuredClone(assessment),
    );
    if (record && assessment.idempotencyKey) {
      this.store.idempotencyIndex.set(
        assessment.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    assessment: MaturityAssessment,
    expectedVersion: number,
    record?: MaturityIdempotencyRecord,
  ): Promise<void> {
    const current = this.store.assessments.get(assessment.maturityAssessmentId);
    if (!current) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "occ_mismatch",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (assessment.version !== expectedVersion + 1) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateMaturityAssessmentShape(assessment);
    if (shape) {
      throw new MaturityAssessmentDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.assessments.set(
      assessment.maturityAssessmentId,
      structuredClone(assessment),
    );
    if (record && assessment.idempotencyKey) {
      this.store.idempotencyIndex.set(
        assessment.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async createSuccessorAndMarkSuperseded(
    successor: MaturityAssessment,
    superseded: MaturityAssessment,
    expectedVersion: number,
    record: MaturityIdempotencyRecord & { successorId: string },
  ): Promise<void> {
    const successorShape = validateMaturityAssessmentShape(successor);
    if (successorShape) {
      throw new MaturityAssessmentDomainError(
        successorShape.detailCode,
        successorShape.reason,
      );
    }
    const supersededShape = validateMaturityAssessmentShape(superseded);
    if (supersededShape) {
      throw new MaturityAssessmentDomainError(
        supersededShape.detailCode,
        supersededShape.reason,
      );
    }
    if (successor.version !== 1) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "successor_requires_version_1",
      );
    }
    if (superseded.status !== "superseded") {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "source_must_be_superseded",
      );
    }
    if (record.successorId !== successor.maturityAssessmentId) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "record_successor_id_mismatch",
      );
    }
    if (
      successor.maturityAssessmentId === superseded.maturityAssessmentId
    ) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "successor_must_differ",
      );
    }

    const current = this.store.assessments.get(
      superseded.maturityAssessmentId,
    );
    if (!current) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_NOT_FOUND",
        "downgrade_source_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "occ_mismatch",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (superseded.version !== expectedVersion + 1) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (this.store.assessments.has(successor.maturityAssessmentId)) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_ALREADY_EXISTS",
        "successor_id_taken",
      );
    }
    if (!superseded.idempotencyKey && !record) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "downgrade_idempotency_required",
      );
    }

    this.failIfForced();
    this.store.assessments.set(
      successor.maturityAssessmentId,
      structuredClone(successor),
    );
    this.store.assessments.set(
      superseded.maturityAssessmentId,
      structuredClone(superseded),
    );
    if (successor.idempotencyKey) {
      this.store.idempotencyIndex.set(successor.idempotencyKey, {
        ...structuredClone(record),
      });
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new MaturityAssessmentDomainError(
        "MATURITY_PERSISTENCE_FAILED",
        "forced_maturity_save_failure",
      );
    }
  }
}
