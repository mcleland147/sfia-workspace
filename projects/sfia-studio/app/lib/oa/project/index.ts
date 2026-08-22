/**
 * T-A1 Project / LPS Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A0 doctrine ports only.
 * Does not replace d1 / OPS1 / MethodMode.
 * Studio composition uses SQLite Product Store (G0-B / M1); Memory remains for tests.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/projectRepositoryPort";
export * from "./ports/livingProjectStateRepositoryPort";
export * from "./ports/projectAuditJournalPort";
export * from "./ports/projectPersistenceUnitOfWorkPort";

export { CreateProject } from "./application/createProject";
export { GetProject } from "./application/getProject";
export { ListProjects } from "./application/listProjects";
export { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
export { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
export { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";

export { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
export { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
export { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
export {
  ConsoleProjectAuditJournal,
  MemoryProjectAuditJournal,
} from "./infrastructure/observability";

export { resolveProductSqlitePath } from "./infrastructure/sqlite/paths";
export {
  openProductSqlite,
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M1,
  PRODUCT_SCHEMA_VERSION_M2,
  PRODUCT_SCHEMA_VERSION_M3,
  PRODUCT_SCHEMA_VERSION_M5,
  PRODUCT_SCHEMA_VERSION_M6,
} from "./infrastructure/sqlite/db";
export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
export { SqliteProjectRepository } from "./infrastructure/sqlite/sqliteProjectRepository";
export { SqliteLivingProjectStateRepository } from "./infrastructure/sqlite/sqliteLivingProjectStateRepository";
export { SqliteProjectAuditJournal } from "./infrastructure/sqlite/sqliteProjectAuditJournal";
export {
  createSqliteProductProjectServices,
  createTestSqliteProductProjectServices,
  type CreateSqliteProductProjectServicesOptions,
  type SqliteProductProjectServices,
} from "./infrastructure/sqlite/createSqliteProductProjectServices";

import type {
  ClockPort,
  DoctrinePackageResolverPort,
} from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";
import { CreateProject } from "./application/createProject";
import { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
import { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
import { GetProject } from "./application/getProject";
import { ListProjects } from "./application/listProjects";
import { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
import { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
import { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
import {
  ConsoleProjectAuditJournal,
  MemoryProjectAuditJournal,
} from "./infrastructure/observability";
import type { LivingProjectStateRepositoryPort } from "./ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "./ports/projectAuditJournalPort";
import type { ProjectPersistenceUnitOfWorkPort } from "./ports/projectPersistenceUnitOfWorkPort";
import type { ProjectRepositoryPort } from "./ports/projectRepositoryPort";

export type ProjectServices = {
  store: ProjectPersistenceUnitOfWorkPort;
  projects: ProjectRepositoryPort;
  lps: LivingProjectStateRepositoryPort;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  listProjects: ListProjects;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  /** Optional dispose for durable backends (SQLite). */
  dispose?: () => void;
};

export type CreateInMemoryProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
};

/** Factory for in-memory Project/LPS services (unit tests / non-Studio callers). */
export function createInMemoryProjectServices(
  options: CreateInMemoryProjectServicesOptions,
): ProjectServices & { store: MemoryProjectStore } {
  const store = new MemoryProjectStore();
  const projects = new MemoryProjectRepository(store);
  const lps = new MemoryLivingProjectStateRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleProjectAuditJournal();

  return {
    store,
    projects,
    lps,
    audit,
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    listProjects: new ListProjects(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

export function createTestProjectServices(
  options: CreateInMemoryProjectServicesOptions & {
    audit?: MemoryProjectAuditJournal;
    fixedNowIso?: string;
  },
): ProjectServices & {
  store: MemoryProjectStore;
  audit: MemoryProjectAuditJournal;
} {
  const audit = options.audit ?? new MemoryProjectAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T05:00:00.000Z"));
  return createInMemoryProjectServices({
    ...options,
    clock,
    audit,
  }) as ProjectServices & {
    store: MemoryProjectStore;
    audit: MemoryProjectAuditJournal;
  };
}
