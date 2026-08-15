/**
 * T-A6 Evidence-Review barrel — D1…D4 aggregates + D5 RecommendNextGate (read-only).
 *
 * Module: app/lib/oa/evidence-review/**
 *
 * D1: Evidence register/ingest/verify/unavailable — memory + fake-only.
 * D2: ReviewBundle create/attach/remove/freeze/start/complete/reopen.
 * D3: ClaimEvaluation EvaluateClaim / Confirm / Reject.
 * D4: MaturityAssessment ProposeMaturity / ConfirmMaturity / DowngradeMaturity.
 * D5: RecommendNextGate — bounded coordination, read-only, non-executive.
 *
 * WHAT THIS IS NOT: gate consumption, Morris decision creation, SQL, API/UI,
 * real adapters, T-A7 auto-launch, real execution, executionAuthority.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/reviewBundleTypes";
export * from "./domain/reviewBundleErrors";
export * from "./domain/reviewBundleInvariants";
export * from "./domain/claimEvaluationTypes";
export * from "./domain/claimEvaluationErrors";
export {
  CLAIM_TYPES,
  CLAIM_CRITICALITIES,
  CLAIM_METHODS,
  CLAIM_STATUSES,
  isClaimEvaluationId,
  sortEvidenceIds,
  validateClaimEvaluationShape,
  evidenceSupportsPass,
} from "./domain/claimEvaluationInvariants";
export type { ClaimInvariantViolation } from "./domain/claimEvaluationInvariants";
export * from "./domain/maturityAssessmentTypes";
export * from "./domain/maturityAssessmentErrors";
export {
  MATURITY_LEVELS,
  MATURITY_STATUSES,
  isMaturityAssessmentId,
  isProjectId,
  levelRank,
  minLevel,
  validateMaturityAssessmentShape,
} from "./domain/maturityAssessmentInvariants";
export type { MaturityInvariantViolation } from "./domain/maturityAssessmentInvariants";

export * from "./ports/evidenceRepository";
export * from "./ports/evidencePayloadPort";
export * from "./ports/executionAttemptReader";
export * from "./ports/evidenceAudit";
export * from "./ports/idGenerator";
export * from "./ports/evidenceReader";
export * from "./ports/reviewBundleRepository";
export * from "./ports/reviewBundleReader";
export * from "./ports/claimEvaluationRepository";
export * from "./ports/claimEvaluationReader";
export * from "./ports/claimAuthorityPort";
export * from "./ports/maturityAssessmentRepository";
export * from "./ports/maturityAssessmentReader";
export * from "./domain/coordinationTypes";
export * from "./domain/coordinationErrors";

export { RegisterEvidence } from "./application/registerEvidence";
export { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
export { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
export { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
export { CreateReviewBundle } from "./application/createReviewBundle";
export { AttachEvidenceToReviewBundle } from "./application/attachEvidenceToReviewBundle";
export { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
export { FreezeReviewBundle } from "./application/freezeReviewBundle";
export { StartReview } from "./application/startReview";
export { CompleteReview } from "./application/completeReview";
export { ReopenReview } from "./application/reopenReview";
export { EvaluateClaim } from "./application/evaluateClaim";
export { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
export { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
export { ProposeMaturity } from "./application/proposeMaturity";
export { ConfirmMaturity } from "./application/confirmMaturity";
export { DowngradeMaturity } from "./application/downgradeMaturity";
export { RecommendNextGate } from "./application/recommendNextGate";
export {
  assessClaimEligibility,
  calculateMaturityLevel,
  missingClaimBinding,
  reassessStoredBindings,
} from "./application/maturityCalculation";

export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
export { SqliteEvidenceRepository } from "./infrastructure/sqlite/sqliteEvidenceRepository";
export { SqliteReviewBundleRepository } from "./infrastructure/sqlite/sqliteReviewBundleRepository";
export {
  createSqliteEvidenceReviewServices,
  createTestSqliteEvidenceReviewServices,
  type CreateSqliteEvidenceReviewServicesOptions,
  type SqliteEvidenceReviewServices,
} from "./infrastructure/sqlite/createSqliteEvidenceReviewServices";
export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
export { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
export { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
export { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
export { ReviewBundleRepositoryReader } from "./infrastructure/reviewBundleRepositoryReader";
export { MemoryClaimEvaluationStore } from "./infrastructure/memoryClaimEvaluationStore";
export { MemoryClaimEvaluationRepository } from "./infrastructure/memoryClaimEvaluationRepository";
export { ClaimEvaluationRepositoryReader } from "./infrastructure/claimEvaluationRepositoryReader";
export { MemoryMaturityAssessmentStore } from "./infrastructure/memoryMaturityAssessmentStore";
export { MemoryMaturityAssessmentRepository } from "./infrastructure/memoryMaturityAssessmentRepository";
export { MaturityAssessmentRepositoryReader } from "./infrastructure/maturityAssessmentRepositoryReader";
export {
  ClaimAuthorityAdapter,
  FakeClaimAuthority,
} from "./infrastructure/claimAuthorityAdapter";
export {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
export {
  RandomIdGenerator,
  FixedIdGenerator,
} from "./infrastructure/idGenerator";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AttachEvidenceToReviewBundle } from "./application/attachEvidenceToReviewBundle";
import { CompleteReview } from "./application/completeReview";
import { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
import { ConfirmMaturity } from "./application/confirmMaturity";
import { CreateReviewBundle } from "./application/createReviewBundle";
import { DowngradeMaturity } from "./application/downgradeMaturity";
import { EvaluateClaim } from "./application/evaluateClaim";
import { FreezeReviewBundle } from "./application/freezeReviewBundle";
import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
import { ProposeMaturity } from "./application/proposeMaturity";
import { RecommendNextGate } from "./application/recommendNextGate";
import { RegisterEvidence } from "./application/registerEvidence";
import { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
import { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
import { ReopenReview } from "./application/reopenReview";
import { StartReview } from "./application/startReview";
import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
import { FakeClaimAuthority } from "./infrastructure/claimAuthorityAdapter";
import { ClaimEvaluationRepositoryReader } from "./infrastructure/claimEvaluationRepositoryReader";
import { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "./infrastructure/idGenerator";
import { MemoryClaimEvaluationRepository } from "./infrastructure/memoryClaimEvaluationRepository";
import { MemoryClaimEvaluationStore } from "./infrastructure/memoryClaimEvaluationStore";
import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
import { MemoryMaturityAssessmentRepository } from "./infrastructure/memoryMaturityAssessmentRepository";
import { MemoryMaturityAssessmentStore } from "./infrastructure/memoryMaturityAssessmentStore";
import { MaturityAssessmentRepositoryReader } from "./infrastructure/maturityAssessmentRepositoryReader";
import { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
import { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
import { ReviewBundleRepositoryReader } from "./infrastructure/reviewBundleRepositoryReader";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
import type { ClaimAuthorityPort } from "./ports/claimAuthorityPort";
import type { ClaimEvaluationReaderPort } from "./ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "./ports/evidenceAudit";
import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
import type { EvidenceReaderPort } from "./ports/evidenceReader";
import type { EvidenceRepositoryPort } from "./ports/evidenceRepository";
import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
import type { IdGeneratorPort } from "./ports/idGenerator";
import type { MaturityAssessmentReaderPort } from "./ports/maturityAssessmentReader";
import type { ReviewBundleReaderPort } from "./ports/reviewBundleReader";
import type { ReviewBundleRepositoryPort } from "./ports/reviewBundleRepository";

export type EvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: EvidenceRepositoryPort;
  reviewBundleStore: MemoryReviewBundleStore;
  reviewBundleRepository: ReviewBundleRepositoryPort;
  reviewBundleReader: ReviewBundleReaderPort;
  claimEvaluationStore: MemoryClaimEvaluationStore;
  claimEvaluationRepository: MemoryClaimEvaluationRepository;
  claimEvaluationReader: ClaimEvaluationReaderPort;
  claimAuthority: ClaimAuthorityPort;
  maturityAssessmentStore: MemoryMaturityAssessmentStore;
  maturityAssessmentRepository: MemoryMaturityAssessmentRepository;
  maturityAssessmentReader: MaturityAssessmentReaderPort;
  evidenceReader: EvidenceReaderPort;
  payload: EvidencePayloadPort;
  attemptReader: ExecutionAttemptReaderPort;
  clock: ClockPort;
  audit: EvidenceAuditPort;
  ids: IdGeneratorPort;
  registerEvidence: RegisterEvidence;
  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
  markEvidenceUnavailable: MarkEvidenceUnavailable;
  createReviewBundle: CreateReviewBundle;
  attachEvidenceToReviewBundle: AttachEvidenceToReviewBundle;
  removeEvidenceFromReviewBundle: RemoveEvidenceFromReviewBundle;
  freezeReviewBundle: FreezeReviewBundle;
  startReview: StartReview;
  completeReview: CompleteReview;
  reopenReview: ReopenReview;
  evaluateClaim: EvaluateClaim;
  confirmClaimEvaluation: ConfirmClaimEvaluation;
  rejectClaimEvaluation: RejectClaimEvaluation;
  proposeMaturity: ProposeMaturity;
  confirmMaturity: ConfirmMaturity;
  downgradeMaturity: DowngradeMaturity;
  recommendNextGate: RecommendNextGate;
};

export type CreateEvidenceReviewServicesOptions = {
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  store?: MemoryEvidenceStore;
  reviewBundleStore?: MemoryReviewBundleStore;
  claimEvaluationStore?: MemoryClaimEvaluationStore;
  maturityAssessmentStore?: MemoryMaturityAssessmentStore;
  evidenceReader?: EvidenceReaderPort;
  claimAuthority?: ClaimAuthorityPort;
};

export function createInMemoryEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions = {},
): EvidenceReviewServices {
  const store = options.store ?? new MemoryEvidenceStore();
  const repository = new MemoryEvidenceRepository(store);
  const reviewBundleStore =
    options.reviewBundleStore ?? new MemoryReviewBundleStore();
  const reviewBundleRepository = new MemoryReviewBundleRepository(
    reviewBundleStore,
  );
  const reviewBundleReader = new ReviewBundleRepositoryReader(
    reviewBundleRepository,
  );
  const claimEvaluationStore =
    options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
    claimEvaluationStore,
  );
  const claimEvaluationReader = new ClaimEvaluationRepositoryReader(
    claimEvaluationRepository,
    claimEvaluationStore,
  );
  const claimAuthority = options.claimAuthority ?? new FakeClaimAuthority();
  const maturityAssessmentStore =
    options.maturityAssessmentStore ?? new MemoryMaturityAssessmentStore();
  const maturityAssessmentRepository = new MemoryMaturityAssessmentRepository(
    maturityAssessmentStore,
  );
  const maturityAssessmentReader = new MaturityAssessmentRepositoryReader(
    maturityAssessmentRepository,
  );
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
  const ids = options.ids ?? new RandomIdGenerator();
  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
  const attemptReader =
    options.attemptReader ?? new FakeExecutionAttemptReader();
  const evidenceReader =
    options.evidenceReader ?? new EvidenceRepositoryReader(repository);

  return {
    store,
    repository,
    reviewBundleStore,
    reviewBundleRepository,
    reviewBundleReader,
    claimEvaluationStore,
    claimEvaluationRepository,
    claimEvaluationReader,
    claimAuthority,
    maturityAssessmentStore,
    maturityAssessmentRepository,
    maturityAssessmentReader,
    evidenceReader,
    payload,
    attemptReader,
    clock,
    audit,
    ids,
    registerEvidence: new RegisterEvidence(repository, clock, audit, ids),
    ingestExecutionAttemptEvidence: new IngestExecutionAttemptEvidence(
      repository,
      attemptReader,
      clock,
      audit,
      ids,
    ),
    verifyEvidenceIntegrity: new VerifyEvidenceIntegrity(
      repository,
      payload,
      clock,
      audit,
      ids,
    ),
    markEvidenceUnavailable: new MarkEvidenceUnavailable(
      repository,
      clock,
      audit,
      ids,
    ),
    createReviewBundle: new CreateReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    attachEvidenceToReviewBundle: new AttachEvidenceToReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    freezeReviewBundle: new FreezeReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    startReview: new StartReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    completeReview: new CompleteReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    reopenReview: new ReopenReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    evaluateClaim: new EvaluateClaim(
      claimEvaluationRepository,
      reviewBundleReader,
      evidenceReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    confirmClaimEvaluation: new ConfirmClaimEvaluation(
      claimEvaluationRepository,
      reviewBundleReader,
      evidenceReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    rejectClaimEvaluation: new RejectClaimEvaluation(
      claimEvaluationRepository,
      clock,
      audit,
      ids,
    ),
    proposeMaturity: new ProposeMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      clock,
      audit,
      ids,
    ),
    confirmMaturity: new ConfirmMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    downgradeMaturity: new DowngradeMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    recommendNextGate: new RecommendNextGate(
      evidenceReader,
      reviewBundleReader,
      claimEvaluationReader,
      maturityAssessmentReader,
      clock,
      audit,
      ids,
    ),
  };
}

export function createTestEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions & {
    fixedNowIso?: string;
  } = {},
): EvidenceReviewServices & {
  fakePayload: FakeEvidencePayloadAdapter;
  fakeAttempts: FakeExecutionAttemptReader;
  memoryAudit: MemoryEvidenceAuditJournal;
  fakeClaimAuthority: FakeClaimAuthority;
} {
  const fakePayload =
    options.payload instanceof FakeEvidencePayloadAdapter
      ? options.payload
      : new FakeEvidencePayloadAdapter();
  const fakeAttempts =
    options.attemptReader instanceof FakeExecutionAttemptReader
      ? options.attemptReader
      : new FakeExecutionAttemptReader();
  const memoryAudit =
    options.audit instanceof MemoryEvidenceAuditJournal
      ? options.audit
      : new MemoryEvidenceAuditJournal();
  const fakeClaimAuthority =
    options.claimAuthority instanceof FakeClaimAuthority
      ? options.claimAuthority
      : new FakeClaimAuthority();

  const services = createInMemoryEvidenceReviewServices({
    ...options,
    clock:
      options.clock ??
      new FixedClock(options.fixedNowIso ?? "2026-07-26T02:00:00.000Z"),
    audit: memoryAudit,
    ids: options.ids ?? new FixedIdGenerator(),
    payload: fakePayload,
    attemptReader: fakeAttempts,
    claimAuthority: fakeClaimAuthority,
  });

  return {
    ...services,
    fakePayload,
    fakeAttempts,
    memoryAudit,
    fakeClaimAuthority,
  };
}
