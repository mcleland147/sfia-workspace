/**
 * T-A5 ExecutionAttempt Runtime Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes the public APIs of T-A0
 * doctrine (Clock), T-A1 project, T-A2 cycle, T-A3 decision/confirmation/
 * authority and T-A4 execution-contract. Does not replace d1 / OPS1 /
 * MethodMode. In-memory only, synchronous, no durability claim.
 *
 * WHAT THIS IS NOT: this foundation does not execute anything. The only
 * injectable adapters are `TestExecutionAdapter` and `NoOpExecutionAdapter`;
 * there is no shell, network, MCP, Cursor, worker, queue, scheduler, SQL or
 * UI anywhere in this module, and a real execution capability is NOT
 * authorized by it.
 *
 * Ownership split with T-A4:
 * - T-A4 owns draft…confirmed (+ pre-exec cancelled, superseded) and REFUSES
 *   the T-A5 statuses;
 * - T-A5 owns ExecutionAttempt and writes the contract post-start statuses
 *   (executing|completed|failed and the post-start cancelled) through the
 *   SHARED `ExecutionContractRepositoryPort` + `MemoryExecutionContractStore`.
 *   No T-A4 use-case is extended to post-exec.
 *
 * Absolute invariant: `ExecutionContract.executing` ⇒ a matching Attempt is
 * already `running`.
 *
 * Exported surface:
 * - domain types / errors / invariants (including the agent_selection
 *   Confirmation binding helpers);
 * - ports (repository, registry, adapter, audit);
 * - use-cases (Select, Start, Cancel, RecordResult, RecordFailure, Retry,
 *   TriggerTimeout, Get, List, CheckAttemptAuthorization);
 * - memory infrastructure and the two fake adapters;
 * - closed factories `createInMemoryExecutionAttemptServices` and
 *   `createTestExecutionAttemptServices`.
 *
 * NOT exported: any mutation entry point for the agent registry — the
 * descriptor set is closed at construction.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/executionAttemptRepository";
export * from "./ports/agentRegistry";
export * from "./ports/executionAdapter";
export * from "./ports/executionAttemptAudit";

export { SelectExecutionAgent } from "./application/selectExecutionAgent";
export { StartExecution } from "./application/startExecution";
export { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
export { RecordExecutionResult } from "./application/recordExecutionResult";
export { RecordExecutionFailure } from "./application/recordExecutionFailure";
export { RetryExecutionAttempt } from "./application/retryExecutionAttempt";
export { TriggerAttemptTimeout } from "./application/triggerAttemptTimeout";
export { GetExecutionAttempt } from "./application/getExecutionAttempt";
export { ListExecutionAttempts } from "./application/listExecutionAttempts";
export { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
export { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
export type {
  ContractStatusWriteRequest,
  ContractStatusWriteResult,
  Ta5ContractStatus,
} from "./application/executionContractStatusWriter";
export type { AttemptPolicy } from "./application/attemptPolicy";
export {
  DEFAULT_ATTEMPT_POLICY,
  resolveAttemptPolicy,
} from "./application/attemptPolicy";

export { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
export { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
export { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
export { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
export type {
  ScriptedCancelOutcome,
  ScriptedLaunchOutcome,
  TestExecutionAdapterOptions,
} from "./infrastructure/testExecutionAdapter";
export { NoOpExecutionAdapter } from "./infrastructure/noOpExecutionAdapter";
export {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "./infrastructure/observability";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort, DecisionServices } from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import { resolveAttemptPolicy } from "./application/attemptPolicy";
import type { AttemptPolicy } from "./application/attemptPolicy";
import { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
import { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
import { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
import { GetExecutionAttempt } from "./application/getExecutionAttempt";
import { ListExecutionAttempts } from "./application/listExecutionAttempts";
import { RecordExecutionFailure } from "./application/recordExecutionFailure";
import { RecordExecutionResult } from "./application/recordExecutionResult";
import { RetryExecutionAttempt } from "./application/retryExecutionAttempt";
import { SelectExecutionAgent } from "./application/selectExecutionAgent";
import { StartExecution } from "./application/startExecution";
import { TriggerAttemptTimeout } from "./application/triggerAttemptTimeout";
import { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
import { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
import { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
import { NoOpExecutionAdapter } from "./infrastructure/noOpExecutionAdapter";
import {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "./infrastructure/observability";
import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
import type { AgentDescriptor } from "./domain/types";
import type { AgentRegistryPort } from "./ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";

/**
 * Closed union of injectable adapters. An arbitrary object implementing
 * `ExecutionAdapterPort` is NOT accepted by the factories: only these two
 * fakes exist in this foundation.
 */
export type InjectableExecutionAdapter =
  | TestExecutionAdapter
  | NoOpExecutionAdapter;

export function isInjectableExecutionAdapter(
  candidate: unknown,
): candidate is InjectableExecutionAdapter {
  return (
    candidate instanceof TestExecutionAdapter ||
    candidate instanceof NoOpExecutionAdapter
  );
}

export type ExecutionAttemptServices = {
  store: MemoryExecutionAttemptStore;
  attempts: MemoryExecutionAttemptRepository;
  registry: AgentRegistryPort;
  adapter: InjectableExecutionAdapter;
  audit: ExecutionAttemptAuditPort;
  policy: AttemptPolicy;
  contractStatusWriter: ExecutionContractStatusWriter;
  selectExecutionAgent: SelectExecutionAgent;
  startExecution: StartExecution;
  cancelExecutionAttempt: CancelExecutionAttempt;
  recordExecutionResult: RecordExecutionResult;
  recordExecutionFailure: RecordExecutionFailure;
  retryExecutionAttempt: RetryExecutionAttempt;
  triggerAttemptTimeout: TriggerAttemptTimeout;
  getExecutionAttempt: GetExecutionAttempt;
  listExecutionAttempts: ListExecutionAttempts;
  checkAttemptAuthorization: CheckAttemptAuthorization;
};

export type CreateInMemoryExecutionAttemptServicesOptions = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  /** Closed descriptor set, or a pre-built immutable registry. */
  agents?: readonly AgentDescriptor[];
  registry?: MemoryAgentRegistry;
  /** Only TestExecutionAdapter | NoOpExecutionAdapter. */
  adapter?: InjectableExecutionAdapter;
  clock?: ClockPort;
  audit?: ExecutionAttemptAuditPort;
  policy?: Partial<AttemptPolicy>;
  /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
  authorityResolver?: AuthorityResolverPort;
};

/** Factory for the in-memory ExecutionAttempt runtime foundation. */
export function createInMemoryExecutionAttemptServices(
  options: CreateInMemoryExecutionAttemptServicesOptions,
): ExecutionAttemptServices {
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

  const store = new MemoryExecutionAttemptStore();
  const attempts = new MemoryExecutionAttemptRepository(store);

  const contracts = options.executionContractServices.contracts;
  const contractStatusWriter = new ExecutionContractStatusWriter(
    contracts,
    options.executionContractServices.store,
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

  return {
    store,
    attempts,
    registry,
    adapter,
    audit,
    policy,
    contractStatusWriter,
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
  };
}

export function createTestExecutionAttemptServices(
  options: CreateInMemoryExecutionAttemptServicesOptions & {
    audit?: MemoryExecutionAttemptAuditJournal;
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    fixedNowIso?: string;
  },
): ExecutionAttemptServices & {
  audit: MemoryExecutionAttemptAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-25T06:00:00.000Z"));
  const adapter = options.adapter ?? new TestExecutionAdapter();
  return createInMemoryExecutionAttemptServices({
    ...options,
    adapter,
    clock,
    audit,
  }) as ExecutionAttemptServices & {
    audit: MemoryExecutionAttemptAuditJournal;
  };
}
