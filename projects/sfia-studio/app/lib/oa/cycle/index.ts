/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/ckcQualificationResult";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/cyclePersistenceUnitOfWorkPort";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export * from "./application/qualifyCycleWithCkc";
export * from "./application/bindCatalogAuthority";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
  resolveTrajectoryLineageHead,
} from "./application/proposeTrajectoryVersion";
export { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";
export {
  createSqliteCycleServices,
  createTestSqliteCycleServices,
  type CreateSqliteCycleServicesOptions,
  type SqliteCycleServices,
} from "./infrastructure/sqlite/createSqliteCycleServices";
export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  FixedClock,
  PRODUCT_DOCTRINE_PACKAGE_ID,
  SystemClock,
} from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import {
  QualifyCycleWithCkc,
  type QualifyCycleExecutor,
} from "./application/qualifyCycleWithCkc";
import {
  bindCycleTypeCatalogAuthority,
  verifyCycleTypeCatalogAuthority,
} from "./application/bindCatalogAuthority";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "./ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "./ports/cycleRepository";
import type { CkcResolverPort } from "./ports/ckcResolver";
import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";
import type { EpistemicRepositoryPort } from "./ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "./ports/trajectoryRepository";

export type CycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  /** W2: candidate → decided/current promotion, decisionRef mandatory. */
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

export type CkcQualificationServices = {
  readonly audit: CycleAuditPort;
  readonly resolver: CkcQualificationResolverPort;
  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
};

export type CreateCkcQualificationServicesOptions = {
  readonly clock?: ClockPort;
  readonly audit?: CycleAuditPort;
  readonly resolver?: CkcQualificationResolverPort;
  readonly registryRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly productResolverFactory?: (
    audit: CycleAuditPort,
    registryRoot: string,
  ) => CkcQualificationResolverPort;
  readonly qualifyCycle?: QualifyCycleExecutor;
  /**
   * Optional HASH-A-bound catalog authority (test-only future snapshots).
   * Cryptographically verified before use; forged fingerprints fail closed
   * on QualifyCycleWithCkc (R-W3D-03). Prefer {@link catalogSnapshot} when
   * injecting N+1 content — factory binds HASH-A itself.
   */
  readonly catalogAuthority?: CycleTypeCatalogAuthority;
  /**
   * Optional raw catalog snapshot. Factory binds HASH-A via
   * bindCycleTypeCatalogAuthority — callers cannot supply a forged fingerprint.
   * Mutually preferred over an unverified catalogAuthority when both are set.
   */
  readonly catalogSnapshot?: Pick<CycleTypeCatalog, "entries">;
};

function resolveCkcQualificationCatalogAuthority(
  options: CreateCkcQualificationServicesOptions,
): CycleTypeCatalogAuthority {
  if (options.catalogSnapshot) {
    return bindCycleTypeCatalogAuthority(options.catalogSnapshot);
  }
  if (options.catalogAuthority) {
    // Do not re-bind silently: QualifyCycleWithCkc verifies cryptographically
    // and returns CATALOG_FINGERPRINT_STALE for forged authorities.
    if (!verifyCycleTypeCatalogAuthority(options.catalogAuthority)) {
      return options.catalogAuthority;
    }
    return options.catalogAuthority;
  }
  return DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY;
}

function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
  return pin?.doctrinePackageId === PRODUCT_DOCTRINE_PACKAGE_ID;
}

function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
  readonly hasFailed: () => boolean;
} {
  let failed = false;
  return {
    append(event): void {
      if (failed) {
        throw new Error("Audit sink unavailable.");
      }
      try {
        audit.append(event);
      } catch {
        failed = true;
        throw new Error("Audit sink unavailable.");
      }
    },
    hasFailed: () => failed,
  };
}

/**
 * Default CKC resolver selection (COR-W1-07).
 *
 * Product doctrine pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects the
 * product-bound resolver path. Missing/invalid registryRoot must fail closed
 * as Product CKC unavailable — NEVER silently fall back to method-candidate.
 *
 * Explicit `options.resolver` injection remains for deliberate test/DI only.
 */
function createDefaultCkcQualificationResolver(
  options: CreateCkcQualificationServicesOptions,
  audit: CycleAuditPort,
): CkcQualificationResolverPort {
  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
    const pin = options.doctrinePackagePin!;
    return new CkcQualificationResolver(undefined, audit, {
      // Empty/absent root is handled fail-closed inside product index load.
      registryRoot: options.registryRoot ?? "",
      doctrinePackageId: pin.doctrinePackageId,
      packageVersion: pin.version,
      packageDigest: pin.digest,
    });
  }
  return new CkcQualificationResolver(undefined, audit);
}

/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
export function createCkcQualificationServices(
  options: CreateCkcQualificationServicesOptions = {},
): CkcQualificationServices {
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const failureAwareAudit = createFailureAwareAudit(audit);
  const resolver =
    options.resolver ??
    createDefaultCkcQualificationResolver(options, failureAwareAudit);
  const qualifyCycle =
    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

  return Object.freeze({
    audit,
    resolver,
    qualifyCycleWithCkc: new QualifyCycleWithCkc(
      resolver,
      qualifyCycle,
      clock,
      failureAwareAudit,
      resolveCkcQualificationCatalogAuthority(options),
    ),
  });
}

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}
