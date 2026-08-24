import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { ProductSqliteHandle } from "@/lib/oa/project";
import {
  resolveAttemptPolicy,
  type AttemptPolicy,
} from "../../application/attemptPolicy";
import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
import { SystemGovernedStop } from "../../application/systemGovernedStop";
import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
import { GrantRealExecutionGate } from "../../application/grantRealExecutionGate";
import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
import { RecordExecutionResult } from "../../application/recordExecutionResult";
import { RetryExecutionAttempt } from "../../application/retryExecutionAttempt";
import { SelectExecutionAgent } from "../../application/selectExecutionAgent";
import { StartExecution } from "../../application/startExecution";
import { TriggerAttemptTimeout } from "../../application/triggerAttemptTimeout";
import type { AgentDescriptor } from "../../domain/types";
import { MemoryAgentRegistry } from "../memoryAgentRegistry";
import { NoOpExecutionAdapter } from "../noOpExecutionAdapter";
import {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "../observability";
import { TestExecutionAdapter } from "../testExecutionAdapter";
import type { AgentRegistryPort } from "../../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
import type { RealExecutionLaunchPort } from "../../ports/realExecutionLaunchPort";
import type { RealLaunchSafetyJournalPort } from "../../ports/realLaunchSafetyJournalPort";
import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";

type InjectableExecutionAdapter = TestExecutionAdapter | NoOpExecutionAdapter;

function isInjectableExecutionAdapter(
  candidate: unknown,
): candidate is InjectableExecutionAdapter {
  return (
    candidate instanceof TestExecutionAdapter ||
    candidate instanceof NoOpExecutionAdapter
  );
}

export type CreateSqliteExecutionAttemptServicesOptions = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  productStore: ProductSqliteHandle;
  agents?: readonly AgentDescriptor[];
  registry?: AgentRegistryPort;
  adapter?: InjectableExecutionAdapter;
  clock?: ClockPort;
  audit?: ExecutionAttemptAuditPort;
  policy?: Partial<AttemptPolicy>;
  authorityResolver?: AuthorityResolverPort;
  /**
   * Optional M4 REAL boundary (journal + specialized launch port).
   * Default undefined / OFF. Does NOT enable SFIA_STUDIO_CURSOR_REAL.
   */
  realBoundary?: {
    readonly launchPort: RealExecutionLaunchPort;
    readonly safetyJournal: RealLaunchSafetyJournalPort;
  };
};

export type SqliteExecutionAttemptServices = {
  store: ExecutionAttemptTechnicalStorePort;
  attempts: ExecutionAttemptRepositoryPort;
  registry: AgentRegistryPort;
  adapter: InjectableExecutionAdapter;
  audit: ExecutionAttemptAuditPort;
  policy: AttemptPolicy;
  contractStatusWriter: ExecutionContractStatusWriter;
  productStore: ProductSqliteHandle;
  selectExecutionAgent: SelectExecutionAgent;
  startExecution: StartExecution;
  cancelExecutionAttempt: CancelExecutionAttempt;
  systemGovernedStop: SystemGovernedStop;
  recordExecutionResult: RecordExecutionResult;
  recordExecutionFailure: RecordExecutionFailure;
  retryExecutionAttempt: RetryExecutionAttempt;
  triggerAttemptTimeout: TriggerAttemptTimeout;
  getExecutionAttempt: GetExecutionAttempt;
  listExecutionAttempts: ListExecutionAttempts;
  checkAttemptAuthorization: CheckAttemptAuthorization;
  grantRealExecutionGate?: GrantRealExecutionGate;
  grantGateD?: GrantRealExecutionGate;
  realBoundary?: {
    readonly launchPort: RealExecutionLaunchPort;
    readonly safetyJournal: RealLaunchSafetyJournalPort;
  };
  launchSafetyJournal?: RealLaunchSafetyJournalPort;
  realLaunch?: RealExecutionLaunchPort;
};

/**
 * Durable ExecutionAttempt services on Product SQLite (M5-A).
 * realBoundary is optional and OFF by default (GAP-3). No live Cursor spawn.
 */
export function createSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions,
): SqliteExecutionAttemptServices {
  if (options.registry && options.agents) {
    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
  }
  const registry =
    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);

  const adapter = options.adapter ?? new NoOpExecutionAdapter();
  if (!isInjectableExecutionAdapter(adapter)) {
    throw new Error("execution_attempt_factory_adapter_not_allowed");
  }

  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const policy = resolveAttemptPolicy(options.policy);

  const store = new SqliteExecutionAttemptTechnicalStore(options.productStore);
  const attempts = new SqliteExecutionAttemptRepository(options.productStore);

  const contracts = options.executionContractServices.contracts;
  const contractStatusWriter = new ExecutionContractStatusWriter(
    contracts,
    options.executionContractServices.store,
    attempts,
  );

  const selectExecutionAgent = new SelectExecutionAgent(
    attempts,
    contracts,
    options.executionContractServices.checkExecutionAuthorization,
    options.decisionServices,
    authority,
    registry,
    clock,
    audit,
    policy,
    store,
  );

  const realBoundary = options.realBoundary;
  const grantRealExecutionGate = realBoundary
    ? new GrantRealExecutionGate(
        attempts,
        contracts,
        registry,
        authority,
        realBoundary.safetyJournal,
        clock,
      )
    : undefined;

  return {
    store,
    attempts,
    registry,
    adapter,
    audit,
    policy,
    contractStatusWriter,
    productStore: options.productStore,
    selectExecutionAgent,
    startExecution: new StartExecution(
      attempts,
      contracts,
      contractStatusWriter,
      options.executionContractServices.checkExecutionAuthorization,
      options.decisionServices,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
      realBoundary?.launchPort,
      realBoundary?.safetyJournal,
    ),
    cancelExecutionAttempt: new CancelExecutionAttempt(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    systemGovernedStop: new SystemGovernedStop(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    recordExecutionResult: new RecordExecutionResult(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      policy,
      store,
    ),
    recordExecutionFailure: new RecordExecutionFailure(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      store,
    ),
    retryExecutionAttempt: new RetryExecutionAttempt(
      attempts,
      contracts,
      selectExecutionAgent,
      authority,
      clock,
      audit,
      policy,
    ),
    triggerAttemptTimeout: new TriggerAttemptTimeout(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      clock,
      audit,
      policy,
      store,
    ),
    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
    checkAttemptAuthorization: new CheckAttemptAuthorization(
      attempts,
      contracts,
      options.executionContractServices.checkExecutionAuthorization,
      authority,
      clock,
      audit,
    ),
    grantRealExecutionGate,
    grantGateD: grantRealExecutionGate,
    realBoundary,
    launchSafetyJournal: realBoundary?.safetyJournal,
    realLaunch: realBoundary?.launchPort,
  };
}

export function createTestSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions & {
    audit?: MemoryExecutionAttemptAuditJournal;
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    fixedNowIso?: string;
  },
): SqliteExecutionAttemptServices & {
  audit: MemoryExecutionAttemptAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-15T07:00:00.000Z"));
  const adapter = options.adapter ?? new TestExecutionAdapter();
  return createSqliteExecutionAttemptServices({
    ...options,
    adapter,
    clock,
    audit,
  }) as SqliteExecutionAttemptServices & {
    audit: MemoryExecutionAttemptAuditJournal;
  };
}
