/**
 * T-A6 Evidence-Review barrel — D1 Evidence + D2 ReviewBundle (Option A v3-native).
 *
 * Module: app/lib/oa/evidence-review/**
 *
 * D1: Evidence register/ingest/verify/unavailable — memory + fake-only.
 * D2: ReviewBundle create/attach/remove/freeze/start/complete/reopen.
 *
 * WHAT THIS IS NOT: ClaimEvaluation (D3), Maturity (D4), coordination D5,
 * SQL, API/UI, real adapters, T-A7, real execution.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/reviewBundleTypes";
export * from "./domain/reviewBundleErrors";
export * from "./domain/reviewBundleInvariants";

export * from "./ports/evidenceRepository";
export * from "./ports/evidencePayloadPort";
export * from "./ports/executionAttemptReader";
export * from "./ports/evidenceAudit";
export * from "./ports/idGenerator";
export * from "./ports/evidenceReader";
export * from "./ports/reviewBundleRepository";

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

export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
export { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
export { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
export { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
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
import { CreateReviewBundle } from "./application/createReviewBundle";
import { FreezeReviewBundle } from "./application/freezeReviewBundle";
import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
import { RegisterEvidence } from "./application/registerEvidence";
import { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
import { ReopenReview } from "./application/reopenReview";
import { StartReview } from "./application/startReview";
import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
import { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "./infrastructure/idGenerator";
import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
import { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
import { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
import type { EvidenceAuditPort } from "./ports/evidenceAudit";
import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
import type { EvidenceReaderPort } from "./ports/evidenceReader";
import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
import type { IdGeneratorPort } from "./ports/idGenerator";

export type EvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: MemoryEvidenceRepository;
  reviewBundleStore: MemoryReviewBundleStore;
  reviewBundleRepository: MemoryReviewBundleRepository;
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
};

export type CreateEvidenceReviewServicesOptions = {
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  store?: MemoryEvidenceStore;
  reviewBundleStore?: MemoryReviewBundleStore;
  evidenceReader?: EvidenceReaderPort;
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

  const services = createInMemoryEvidenceReviewServices({
    ...options,
    clock:
      options.clock ??
      new FixedClock(options.fixedNowIso ?? "2026-07-26T02:00:00.000Z"),
    audit: memoryAudit,
    ids: options.ids ?? new FixedIdGenerator(),
    payload: fakePayload,
    attemptReader: fakeAttempts,
  });

  return {
    ...services,
    fakePayload,
    fakeAttempts,
    memoryAudit,
  };
}
