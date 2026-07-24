/**
 * T-A1 Project / LPS Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A0 doctrine ports only.
 * Does not replace d1 / OPS1 / MethodMode. In-memory persistence only (reversible).
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/projectRepositoryPort";
export * from "./ports/livingProjectStateRepositoryPort";
export * from "./ports/projectAuditJournalPort";

export { CreateProject } from "./application/createProject";
export { GetProject } from "./application/getProject";
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
import { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
import { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
import { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
import {
  ConsoleProjectAuditJournal,
  MemoryProjectAuditJournal,
} from "./infrastructure/observability";
import type { ProjectAuditJournalPort } from "./ports/projectAuditJournalPort";

export type ProjectServices = {
  store: MemoryProjectStore;
  projects: MemoryProjectRepository;
  lps: MemoryLivingProjectStateRepository;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
};

export type CreateInMemoryProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
};

/** Factory for in-memory Project/LPS services (runtime candidate / tests). */
export function createInMemoryProjectServices(
  options: CreateInMemoryProjectServicesOptions,
): ProjectServices {
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
): ProjectServices & { audit: MemoryProjectAuditJournal } {
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
  }) as ProjectServices & { audit: MemoryProjectAuditJournal };
}
