import type {
  ClockPort,
  DoctrinePackageResolverPort,
} from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AppendLivingProjectStateVersion } from "../../application/appendLivingProjectStateVersion";
import { CreateProject } from "../../application/createProject";
import { GetCurrentLivingProjectState } from "../../application/getCurrentLivingProjectState";
import { GetLivingProjectStateVersion } from "../../application/getLivingProjectStateVersion";
import { GetProject } from "../../application/getProject";
import { ListProjects } from "../../application/listProjects";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../../ports/projectAuditJournalPort";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import { SqliteLivingProjectStateRepository } from "./sqliteLivingProjectStateRepository";
import { SqliteProductStore } from "./sqliteProductStore";
import { SqliteProjectAuditJournal } from "./sqliteProjectAuditJournal";
import { SqliteProjectRepository } from "./sqliteProjectRepository";

export type CreateSqliteProductProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
  /** Explicit product DB path (tests). Default: resolveProductSqlitePath(). */
  dbPath?: string;
};

export type SqliteProductProjectServices = {
  store: SqliteProductStore;
  projects: ProjectRepositoryPort;
  lps: LivingProjectStateRepositoryPort;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  listProjects: ListProjects;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  dbPath: string;
  dispose: () => void;
};

/** Factory for OA Product SQLite Project/LPS services (M1). */
export function createSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions,
): SqliteProductProjectServices {
  const store = new SqliteProductStore(options.dbPath);
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
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

export function createTestSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions & {
    audit?: SqliteProjectAuditJournal;
    fixedNowIso?: string;
    dbPath: string;
  },
): SqliteProductProjectServices & { audit: SqliteProjectAuditJournal } {
  const store = new SqliteProductStore(options.dbPath);
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T05:00:00.000Z"));
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
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

/** Type-only helper: Sqlite store satisfies UnitOfWork. */
export type { ProjectPersistenceUnitOfWorkPort };
