/**
 * T-A4 ExecutionContract Governance — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project, T-A2 cycle,
 * T-A3 decision/confirmation/authority public APIs only. Does not replace
 * d1 / OPS1 / MethodMode. Studio composition uses Product SQLite (M3);
 * Memory remains for tests.
 *
 * Ownership: T-A4 through confirmed (+ cancelled pre-exec, superseded).
 * T-A5 statuses (executing|completed|failed) and selectedAgentRef are REFUSED.
 *
 * Critical cycle acknowledgment: T-A2 has no public AcknowledgeCriticalCycle
 * API. ConfirmExecutionContract fail-closes when Critical cycle is still
 * `proposed` (R-T-A3-1 OPEN).
 *
 * Confirmation consumption: ConfirmExecutionContract persists confirmed with
 * confirmationRef first, then calls DecisionServices.consumeConfirmation.
 * On consume failure, compensates via CancelExecutionContract (Option B).
 * Residual R-T-A3-2 OPEN if compensate cancel also fails.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export {
  computeExecutionContractSemanticFingerprint,
  executionContractSemanticMaterial,
} from "./domain/semanticFingerprint";
export {
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  EXECUTION_WINDOW_CLASSES,
  PRE_M6_EXECUTION_WINDOW_CAP_MS,
  PRE_M6_EXECUTION_WINDOW_MS,
  assertResolvedTimeoutMs,
  isExecutionWindowClass,
  resolveExecutionWindowClass,
  resolveExecutionWindowForStart,
  type ExecutionWindowClass,
  type ExecutionWindowResolveResult,
  type ResolvedExecutionWindow,
} from "./domain/executionWindowPolicy";

export * from "./ports/executionContractRepository";
export * from "./ports/executionAudit";
export * from "./ports/executionContractPersistenceUnitOfWorkPort";

export { BuildExecutionContract } from "./application/buildExecutionContract";
export { GetExecutionContract } from "./application/getExecutionContract";
export { ListExecutionContractHistory } from "./application/listExecutionContractHistory";
export { ValidateExecutionContract } from "./application/validateExecutionContract";
export { ConfirmExecutionContract } from "./application/confirmExecutionContract";
export { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
export { CancelExecutionContract } from "./application/cancelExecutionContract";
export { CheckExecutionAuthorization } from "./application/checkExecutionAuthorization";

export {
  projectCursorPrepareOnly,
  type CursorPrepareOnlyProjection,
} from "./projection/cursorPrepareOnlyProjection";

export { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
export { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
export {
  ConsoleExecutionAuditJournal,
  MemoryExecutionAuditJournal,
} from "./infrastructure/observability";
export { SqliteExecutionContractRepository } from "./infrastructure/sqlite/sqliteExecutionContractRepository";
export { SqliteExecutionAuditJournal } from "./infrastructure/sqlite/sqliteExecutionAuditJournal";
export {
  createSqliteExecutionContractServices,
  createTestSqliteExecutionContractServices,
  type CreateSqliteExecutionContractServicesOptions,
  type SqliteExecutionContractServices,
} from "./infrastructure/sqlite/createSqliteExecutionContractServices";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices } from "@/lib/oa/project";
import { BuildExecutionContract } from "./application/buildExecutionContract";
import { CancelExecutionContract } from "./application/cancelExecutionContract";
import { CheckExecutionAuthorization } from "./application/checkExecutionAuthorization";
import { ConfirmExecutionContract } from "./application/confirmExecutionContract";
import { GetExecutionContract } from "./application/getExecutionContract";
import { ListExecutionContractHistory } from "./application/listExecutionContractHistory";
import { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
import { ValidateExecutionContract } from "./application/validateExecutionContract";
import { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
import { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
import {
  ConsoleExecutionAuditJournal,
  MemoryExecutionAuditJournal,
} from "./infrastructure/observability";
import type { ExecutionAuditPort } from "./ports/executionAudit";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "./ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionContractRepositoryPort } from "./ports/executionContractRepository";

export type ExecutionContractServices = {
  store: ExecutionContractPersistenceUnitOfWorkPort;
  contracts: ExecutionContractRepositoryPort;
  audit: ExecutionAuditPort;
  buildExecutionContract: BuildExecutionContract;
  getExecutionContract: GetExecutionContract;
  listExecutionContractHistory: ListExecutionContractHistory;
  validateExecutionContract: ValidateExecutionContract;
  confirmExecutionContract: ConfirmExecutionContract;
  supersedeExecutionContract: SupersedeExecutionContract;
  cancelExecutionContract: CancelExecutionContract;
  checkExecutionAuthorization: CheckExecutionAuthorization;
};

export type CreateInMemoryExecutionContractServicesOptions = {
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  cycleServices?: CycleServices;
  clock?: ClockPort;
  audit?: ExecutionAuditPort;
  /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
  authorityResolver?: AuthorityResolverPort;
};

/** Factory for in-memory ExecutionContract governance services. */
export function createInMemoryExecutionContractServices(
  options: CreateInMemoryExecutionContractServicesOptions,
): ExecutionContractServices {
  const store = new MemoryExecutionContractStore();
  const contracts = new MemoryExecutionContractRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;

  const cancelExecutionContract = new CancelExecutionContract(
    contracts,
    authority,
    clock,
    audit,
    store,
  );

  return {
    store,
    contracts,
    audit,
    buildExecutionContract: new BuildExecutionContract(
      contracts,
      authority,
      options.projectServices,
      options.cycleServices,
      options.decisionServices,
      clock,
      audit,
      store,
    ),
    getExecutionContract: new GetExecutionContract(contracts, clock, audit),
    listExecutionContractHistory: new ListExecutionContractHistory(
      contracts,
      clock,
      audit,
    ),
    validateExecutionContract: new ValidateExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      store,
    ),
    confirmExecutionContract: new ConfirmExecutionContract(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
      store,
      cancelExecutionContract,
    ),
    supersedeExecutionContract: new SupersedeExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      store,
    ),
    cancelExecutionContract,
    checkExecutionAuthorization: new CheckExecutionAuthorization(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
    ),
  };
}

export function createTestExecutionContractServices(
  options: CreateInMemoryExecutionContractServicesOptions & {
    audit?: MemoryExecutionAuditJournal;
    fixedNowIso?: string;
  },
): ExecutionContractServices & {
  audit: MemoryExecutionAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-25T06:00:00.000Z"));
  return createInMemoryExecutionContractServices({
    ...options,
    clock,
    audit,
  }) as ExecutionContractServices & {
    audit: MemoryExecutionAuditJournal;
  };
}
