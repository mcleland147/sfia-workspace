import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { AttachEvidenceToReviewBundle } from "../../application/attachEvidenceToReviewBundle";
import { CompleteReview } from "../../application/completeReview";
import { ConfirmClaimEvaluation } from "../../application/confirmClaimEvaluation";
import { ConfirmMaturity } from "../../application/confirmMaturity";
import { CreateReviewBundle } from "../../application/createReviewBundle";
import { DowngradeMaturity } from "../../application/downgradeMaturity";
import { EvaluateClaim } from "../../application/evaluateClaim";
import { FreezeReviewBundle } from "../../application/freezeReviewBundle";
import { IngestExecutionAttemptEvidence } from "../../application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "../../application/markEvidenceUnavailable";
import { ProposeMaturity } from "../../application/proposeMaturity";
import { RecommendNextGate } from "../../application/recommendNextGate";
import { RegisterEvidence } from "../../application/registerEvidence";
import { RejectClaimEvaluation } from "../../application/rejectClaimEvaluation";
import { RemoveEvidenceFromReviewBundle } from "../../application/removeEvidenceFromReviewBundle";
import { ReopenReview } from "../../application/reopenReview";
import { StartReview } from "../../application/startReview";
import { VerifyEvidenceIntegrity } from "../../application/verifyEvidenceIntegrity";
import { FakeClaimAuthority } from "../claimAuthorityAdapter";
import { ClaimEvaluationRepositoryReader } from "../claimEvaluationRepositoryReader";
import { EvidenceRepositoryReader } from "../evidenceRepositoryReader";
import { FakeEvidencePayloadAdapter } from "../fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "../fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "../idGenerator";
import { MemoryClaimEvaluationRepository } from "../memoryClaimEvaluationRepository";
import { MemoryClaimEvaluationStore } from "../memoryClaimEvaluationStore";
import { MemoryEvidenceStore } from "../memoryEvidenceStore";
import { MemoryMaturityAssessmentRepository } from "../memoryMaturityAssessmentRepository";
import { MemoryMaturityAssessmentStore } from "../memoryMaturityAssessmentStore";
import { MemoryReviewBundleStore } from "../memoryReviewBundleStore";
import { MaturityAssessmentRepositoryReader } from "../maturityAssessmentRepositoryReader";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "../observability";
import { ReviewBundleRepositoryReader } from "../reviewBundleRepositoryReader";
import type { ClaimAuthorityPort } from "../../ports/claimAuthorityPort";
import type { ClaimEvaluationReaderPort } from "../../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../../ports/evidenceAudit";
import type { EvidencePayloadPort } from "../../ports/evidencePayloadPort";
import type { EvidenceReaderPort } from "../../ports/evidenceReader";
import type { EvidenceRepositoryPort } from "../../ports/evidenceRepository";
import type { ExecutionAttemptReaderPort } from "../../ports/executionAttemptReader";
import type { IdGeneratorPort } from "../../ports/idGenerator";
import type { MaturityAssessmentReaderPort } from "../../ports/maturityAssessmentReader";
import type { ReviewBundleReaderPort } from "../../ports/reviewBundleReader";
import type { ReviewBundleRepositoryPort } from "../../ports/reviewBundleRepository";
import { SqliteEvidenceRepository } from "./sqliteEvidenceRepository";
import { SqliteReviewBundleRepository } from "./sqliteReviewBundleRepository";

export type CreateSqliteEvidenceReviewServicesOptions = {
  productStore: ProductSqliteHandle;
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  evidenceReader?: EvidenceReaderPort;
  claimAuthority?: ClaimAuthorityPort;
  claimEvaluationStore?: MemoryClaimEvaluationStore;
  maturityAssessmentStore?: MemoryMaturityAssessmentStore;
};

export type SqliteEvidenceReviewServices = {
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
  productStore: ProductSqliteHandle;
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

/**
 * Evidence + ReviewBundle durable on Product SQLite (M5-A).
 * ClaimEvaluation + MaturityAssessment remain Memory (out of minimal M5).
 */
export function createSqliteEvidenceReviewServices(
  options: CreateSqliteEvidenceReviewServicesOptions,
): SqliteEvidenceReviewServices {
  const productStore = options.productStore;
  // Type-compat placeholders — evidence/RB use SQLite repos, not these maps.
  const store = new MemoryEvidenceStore();
  const repository = new SqliteEvidenceRepository(productStore);
  const reviewBundleStore = new MemoryReviewBundleStore();
  const reviewBundleRepository = new SqliteReviewBundleRepository(productStore);
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
    productStore,
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
    startReview: new StartReview(reviewBundleRepository, clock, audit, ids),
    completeReview: new CompleteReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    reopenReview: new ReopenReview(reviewBundleRepository, clock, audit, ids),
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

export function createTestSqliteEvidenceReviewServices(
  options: CreateSqliteEvidenceReviewServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteEvidenceReviewServices & {
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

  const services = createSqliteEvidenceReviewServices({
    ...options,
    clock:
      options.clock ??
      new FixedClock(options.fixedNowIso ?? "2026-08-15T07:00:00.000Z"),
    audit: memoryAudit,
    ids: options.ids ?? new FixedIdGenerator(),
    payload: fakePayload,
    // Preserve caller-provided bridges (e.g. createAttemptReaderBridge).
    attemptReader: options.attemptReader ?? fakeAttempts,
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
