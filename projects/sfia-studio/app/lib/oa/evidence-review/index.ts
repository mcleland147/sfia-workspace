/**
 * T-A6-D1 Evidence core — public barrel (Option A v3-native).
 *
 * Module path: app/lib/oa/evidence-review/**
 *
 * WHAT THIS IS: memory + fake-only Evidence foundation (Register, Ingest
 * Attempt, Verify integrity, Mark unavailable). Attempt is source not owner.
 * ExecutionAttempt.succeeded ≠ verified ≠ PASS.
 *
 * WHAT THIS IS NOT: ReviewBundle, ClaimEvaluation, MaturityAssessment,
 * coordination D2–D5, SQL, API/UI, real payload adapters, T-A7, real execution.
 *
 * T-A5 is read via ExecutionAttemptReaderPort only — no T-A5 → T-A6 dependency.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/evidenceRepository";
export * from "./ports/evidencePayloadPort";
export * from "./ports/executionAttemptReader";
export * from "./ports/evidenceAudit";
export * from "./ports/idGenerator";

export { RegisterEvidence } from "./application/registerEvidence";
export { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
export { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
export { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";

export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
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
import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
import { RegisterEvidence } from "./application/registerEvidence";
import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "./infrastructure/idGenerator";
import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
import type { EvidenceAuditPort } from "./ports/evidenceAudit";
import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
import type { IdGeneratorPort } from "./ports/idGenerator";

export type EvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: MemoryEvidenceRepository;
  payload: EvidencePayloadPort;
  attemptReader: ExecutionAttemptReaderPort;
  clock: ClockPort;
  audit: EvidenceAuditPort;
  ids: IdGeneratorPort;
  registerEvidence: RegisterEvidence;
  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
  markEvidenceUnavailable: MarkEvidenceUnavailable;
};

export type CreateEvidenceReviewServicesOptions = {
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  store?: MemoryEvidenceStore;
};

export function createInMemoryEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions = {},
): EvidenceReviewServices {
  const store = options.store ?? new MemoryEvidenceStore();
  const repository = new MemoryEvidenceRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
  const ids = options.ids ?? new RandomIdGenerator();
  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
  const attemptReader =
    options.attemptReader ?? new FakeExecutionAttemptReader();

  return {
    store,
    repository,
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
    clock: options.clock ?? new FixedClock(options.fixedNowIso ?? "2026-07-26T02:00:00.000Z"),
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
