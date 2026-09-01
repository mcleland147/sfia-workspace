import "./serverGuard";
import {
  BoundedSqliteLocalProjectCreationAudit,
  LOCAL_VERTICAL_SLICE_ARCHITECTURE,
  MemoryLocalProjectCreationAudit,
  NoOpLocalProjectCreationAudit,
  createLocalVerticalSliceServices,
  resolveDoctrinePackagePinForRegistry,
  type LocalProjectFacade,
  type LocalProjectIdSource,
  type LocalVerticalSliceCompositionOptions,
  type LocalVerticalSliceServices,
} from "@/lib/vertical-slice-core";
import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
import {
  createCkcQualificationServices,
  createInMemoryCycleServices,
  createSqliteCycleServices,
  type CkcQualificationServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createInMemoryDecisionServices,
  createSqliteDecisionServices,
  isM3LocalAuthorityEnabled,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createInMemoryExecutionContractServices,
  createSqliteExecutionContractServices,
  type ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  createInMemoryExecutionAttemptServices,
  createSqliteExecutionAttemptServices,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  isStudioCursorRealEnabled,
  type ExecutionAttemptServices,
  type RealBoundaryWiring,
  type TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  composeStudioProductRealBoundary,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
import {
  createInMemoryEvidenceReviewServices,
  createSqliteEvidenceReviewServices,
  type EvidenceReviewServices,
  type SqliteEvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import {
  createMaterializeFromMemoryB,
  MaterializeFromMemoryB,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createAttemptReaderBridge,
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "./f3FixtureWiring";
import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
import {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
} from "./mapping";
import { resolveDefaultVerticalSliceRoots } from "./paths";
import { registerW3bFixtureAdapterForE2eReset } from "./w3bE2eBoundaryControl";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
} from "./types";

export type RuntimeAuditMode = "noop" | "memory" | "sqlite";

export interface RuntimeApplicationServiceOptions {
  readonly registryRoot?: string;
  readonly schemasRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly idSource?: LocalProjectIdSource;
  readonly nowIso?: string;
  /**
   * D-V2-03: default noop. `sqlite` requires `sqliteAuditStore`.
   * Audit never rehydrates business state.
   */
  readonly auditMode?: RuntimeAuditMode;
  readonly sqliteAuditStore?: BoundedAtomicAuditStore;
  /**
   * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
   */
  readonly productDbPath?: string;
  /**
   * Escape hatch for tests: inject a fully built V1 facade.
   * Production path builds via createLocalVerticalSliceServices.
   */
  readonly facade?: LocalProjectFacade;
  /**
   * Optional M4 REAL boundary. Explicit inject wins (tests).
   * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
   */
  readonly realBoundary?: RealBoundaryWiring;
  /**
   * Env snapshot for live-boundary composition only. Never used to spawn.
   * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
   */
  readonly realBoundaryEnv?: NodeJS.ProcessEnv;
  /**
   * Test/production overrides for composeStudioProductRealBoundary.
   * Construction still launches nothing.
   */
  readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
}

export type MaterializationServices = {
  readonly materializeFromMemoryB: MaterializeFromMemoryB;
};

export type RuntimeOaStack = {
  readonly projectServices: ProjectServices;
  readonly clock: ClockPort;
  readonly cycleServices: CycleServices;
  readonly ckcQualification: CkcQualificationServices;
  readonly decisionServices: DecisionServices;
  readonly authorityResolver: MemoryAuthorityResolver;
  readonly executionContractServices: ExecutionContractServices;
  readonly executionAttemptServices: ExecutionAttemptServices;
  readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
  /**
   * MW1-S03 — Studio-owned governed Memory B → Truth C materialization.
   * Composed after Decision + Evidence services. Not a Nora write tool.
   */
  readonly materializationServices: MaterializationServices;
  /** Explicit TestExecutionAdapter — never silent NoOp. */
  readonly fixtureAdapter: TestExecutionAdapter;
  /**
   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
   * Distinguishes persistence durability from fixture execution mode.
   */
  readonly productDurablePath: boolean;
};

function resolveAudit(
  mode: RuntimeAuditMode,
  sqliteAuditStore: BoundedAtomicAuditStore | undefined,
): LocalVerticalSliceCompositionOptions["audit"] {
  if (mode === "memory") {
    return new MemoryLocalProjectCreationAudit();
  }
  if (mode === "sqlite") {
    if (!sqliteAuditStore) {
      throw new Error(
        "sqlite audit mode requires sqliteAuditStore (bounded D1 audit table).",
      );
    }
    return new BoundedSqliteLocalProjectCreationAudit(sqliteAuditStore);
  }
  return new NoOpLocalProjectCreationAudit();
}

function wireOaStack(
  projectServices: ProjectServices,
  clock: ClockPort,
  options?: {
    realBoundary?: RealBoundaryWiring;
    registryRoot?: string;
    doctrinePackagePin?: DoctrinePackagePin;
  },
): RuntimeOaStack {
  // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
  const productSqlite =
    projectServices.store instanceof SqliteProductStore
      ? projectServices.store
      : null;
  const cycleServices = productSqlite
    ? createSqliteCycleServices({
        projectServices,
        productStore: productSqlite,
        clock,
      })
    : createInMemoryCycleServices({ projectServices, clock });
  const ckcQualification = createCkcQualificationServices({
    clock,
    registryRoot: options?.registryRoot,
    doctrinePackagePin: options?.doctrinePackagePin,
  });
  const authorityResolver = new MemoryAuthorityResolver();
  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
  void isM3LocalAuthorityEnabled;

  const decisionServices = productSqlite
    ? createSqliteDecisionServices({
        projectServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryDecisionServices({
        projectServices,
        cycleServices,
        clock,
        authorityResolver,
      });

  const executionContractServices = productSqlite
    ? createSqliteExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        clock,
        authorityResolver,
      });

  // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
  // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
  // registered only on the governed path (injected boundary or REAL flag).
  // This composition does not instantiate StudioCursorRealLaunchGateway.
  const fixtureAdapter = createF3TestExecutionAdapter();
  registerW3bFixtureAdapterForE2eReset(fixtureAdapter);
  const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
  const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
  const realBoundary = options?.realBoundary;
  const registerM4 =
    realBoundary !== undefined || isStudioCursorRealEnabled();
  // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
  const agents = registerM4
    ? [
        fixtureAgent,
        w3aBoundedAgent,
        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
      ]
    : [fixtureAgent, w3aBoundedAgent];
  const registry = new MemoryAgentRegistry(agents);
  const executionAttemptServices = productSqlite
    ? createSqliteExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        productStore: productSqlite,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      })
    : createInMemoryExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      });

  const evidenceReviewServices = productSqlite
    ? createSqliteEvidenceReviewServices({
        productStore: productSqlite,
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      })
    : createInMemoryEvidenceReviewServices({
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      });

  // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
  // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
  // on the same Product store / oa_audit_events (no new table). LPS create/append
  // may still use MemoryProjectAuditJournal from local composition.
  const materializationAudit =
    productSqlite !== null
      ? new SqliteProjectAuditJournal(productSqlite)
      : projectServices.audit;

  const materializationServices: MaterializationServices = Object.freeze({
    materializeFromMemoryB: createMaterializeFromMemoryB({
      projectServices: {
        getProject: projectServices.getProject,
        getCurrentLivingProjectState:
          projectServices.getCurrentLivingProjectState,
        appendLivingProjectStateVersion:
          projectServices.appendLivingProjectStateVersion,
        audit: materializationAudit,
      },
      getHumanDecision: decisionServices.getHumanDecision,
      getEvidenceById: async (evidenceId) => {
        const ev =
          await evidenceReviewServices.repository.findById(evidenceId);
        if (!ev) return null;
        return {
          evidenceId: ev.evidenceId,
          status: ev.status,
          availability: ev.availability,
          freshness: ev.freshness,
          bindings: { projectId: ev.bindings.projectId },
        };
      },
    }),
  });

  return Object.freeze({
    projectServices,
    clock,
    cycleServices,
    ckcQualification,
    decisionServices,
    authorityResolver,
    executionContractServices,
    executionAttemptServices,
    evidenceReviewServices,
    materializationServices,
    fixtureAdapter,
    productDurablePath: productSqlite !== null,
  });
}

/**
 * Application runtime service over V1 LocalProjectFacade.
 * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
 * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
 */
export class RuntimeApplicationService {
  private readonly facade: LocalProjectFacade;
  readonly architecture: LocalVerticalSliceServices["architecture"];
  readonly oa: RuntimeOaStack | null;
  private readonly disposeProduct?: () => void;

  constructor(
    facade: LocalProjectFacade,
    architecture: LocalVerticalSliceServices["architecture"],
    oa: RuntimeOaStack | null = null,
    disposeProduct?: () => void,
  ) {
    this.facade = facade;
    this.architecture = architecture;
    this.oa = oa;
    this.disposeProduct = disposeProduct;
  }

  /** Release durable Product SQLite handles (tests / shutdown). */
  dispose(): void {
    try {
      this.disposeProduct?.();
    } catch {
      /* ignore */
    }
  }

  /** Use case: Create Project via V1 facade. */
  async createProject(
    input: CreateProjectRuntimeInput,
  ): Promise<CreateProjectRuntimeResult> {
    const result = await this.facade.createProject(
      toCreateLocalProjectCommand(input),
    );
    if (!result.ok) {
      return toCreateProjectRuntimeFailure(result.error, result.auditStatus);
    }
    return toCreateProjectRuntimeSuccess(
      result.project,
      result.reusedFromIdempotencyKey,
      result.auditStatus,
    );
  }

  /** Use case: Get Project Overview via V1 facade. */
  async getProject(projectId: string): Promise<GetProjectRuntimeResult> {
    const result = await this.facade.getProjectOverview(projectId);
    if (!result.ok) {
      return toGetProjectRuntimeFailure(result.error);
    }
    return toGetProjectRuntimeSuccess(result.project);
  }

  /**
   * Thin product list via OA ProjectServices over existing oa_projects.
   * Requires OA stack (Product SQLite / in-memory); facade-only runtimes fail closed.
   */
  async listProjects(): Promise<ListProjectsRuntimeResult> {
    if (!this.oa) {
      return toListProjectsRuntimeFailure({
        code: "STATE_CONFLICT",
        detailCode: "PERSISTENCE_FAILURE",
        message: "Project list is unavailable in this runtime composition.",
        severity: "error",
        retryable: false,
        blocking: true,
        recoverable: false,
        domain: "C",
        timestamp: new Date().toISOString(),
        internalCauseRef: "oa_stack_missing",
      });
    }
    const result = await this.oa.projectServices.listProjects.execute();
    if (!result.ok) {
      return toListProjectsRuntimeFailure(result.error);
    }
    return toListProjectsRuntimeSuccess(result.projects);
  }
}

export function createRuntimeApplicationService(
  options: RuntimeApplicationServiceOptions = {},
): RuntimeApplicationService {
  if (options.facade) {
    return new RuntimeApplicationService(
      options.facade,
      LOCAL_VERTICAL_SLICE_ARCHITECTURE,
      null,
    );
  }

  const roots = resolveDefaultVerticalSliceRoots();
  const registryRoot = options.registryRoot ?? roots.registryRoot;
  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
    registryRoot,
    options.doctrinePackagePin,
  );
  const services = createLocalVerticalSliceServices({
    registryRoot,
    schemasRoot: options.schemasRoot ?? roots.schemasRoot,
    doctrinePackagePin,
    idSource: options.idSource,
    nowIso: options.nowIso,
    audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
    productDbPath: options.productDbPath,
  });

  const composedBoundary =
    options.realBoundary ??
    composeStudioProductRealBoundary({
      ...(options.realBoundaryComposition ?? {}),
      env: options.realBoundaryEnv ?? options.realBoundaryComposition?.env,
    });
  const oa = wireOaStack(services.projectServices, services.clock, {
    realBoundary: composedBoundary,
    registryRoot,
    doctrinePackagePin,
  });
  return new RuntimeApplicationService(
    services.facade,
    services.architecture,
    oa,
    services.projectServices.dispose,
  );
}
