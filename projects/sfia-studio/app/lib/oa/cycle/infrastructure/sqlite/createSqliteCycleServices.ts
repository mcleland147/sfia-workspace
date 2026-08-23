import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { CreateCycle } from "../../application/createCycle";
import { CreateInitialTrajectory } from "../../application/createInitialTrajectory";
import { GetCurrentTrajectory } from "../../application/getCurrentTrajectory";
import { GetCycle } from "../../application/getCycle";
import { GetEpistemicState } from "../../application/getEpistemicState";
import { GetTrajectoryVersion } from "../../application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "../../application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVersion";
import { QualifyCycle } from "../../application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "../../application/updateEpistemicState";
import { MemoryCkcResolver } from "../memoryCkcResolver";
import type { CycleAuditPort } from "../../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../../ports/cycleRepository";
import type { CkcResolverPort } from "../../ports/ckcResolver";
import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { SqliteCycleAuditJournal } from "./sqliteCycleAuditJournal";
import { SqliteCycleRepository } from "./sqliteCycleRepository";
import { SqliteEpistemicRepository } from "./sqliteEpistemicRepository";
import { SqliteTrajectoryRepository } from "./sqliteTrajectoryRepository";

export type CreateSqliteCycleServicesOptions = {
  projectServices: ProjectServices;
  /** Shared Product SQLite handle (same DB / UoW as Project T-A1). */
  productStore: ProductSqliteHandle & CyclePersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

export type SqliteCycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  productStore: ProductSqliteHandle;
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
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

/**
 * CycleInstance + Trajectory + Epistemic durable services on Product SQLite (M2/M6).
 */
export function createSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions,
): SqliteCycleServices {
  const productStore = options.productStore;
  const cycles = new SqliteCycleRepository(productStore);
  const trajectories = new SqliteTrajectoryRepository(productStore);
  const epistemic = new SqliteEpistemicRepository(productStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteCycleAuditJournal(productStore);
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store: productStore,
    cycles,
    productStore,
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
      productStore,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      productStore,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteCycleServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createSqliteCycleServices({ ...options, clock });
}
