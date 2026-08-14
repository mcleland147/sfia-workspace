/**
 * Shared fixtures for T-A5 ExecutionAttempt tests.
 *
 * Builds the full Option A stack (project → cycle → decision → execution
 * contract) up to a CONFIRMED contract, then plugs the memory-only
 * ExecutionAttempt services on top with the two fake adapters only.
 *
 * @vitest-environment node
 */
import path from "node:path";
import { expect } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
  type ProvenanceRecord,
} from "@/lib/oa/doctrine";
import {
  createTestProjectServices,
  type ActorReference,
  type ProjectServices,
} from "@/lib/oa/project";
import { createTestCycleServices, type CycleServices } from "@/lib/oa/cycle";
import {
  createTestDecisionServices,
  MemoryAuthorityResolver,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createTestExecutionContractServices,
  type BuildExecutionContractRequest,
  type ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  createTestExecutionAttemptServices,
  formatAgentSelectionActionRef,
  MemoryAgentRegistry,
  NoOpExecutionAdapter,
  TestExecutionAdapter,
  type AgentDescriptor,
  type AttemptPolicy,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";

export const APP_ROOT = path.resolve(__dirname, "../../..");
export const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
export const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

export const NOW = "2026-07-25T06:00:00.000Z";

export const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

export const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

export const MORRIS_ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

export const DELEGATE_ACTOR: ActorReference = {
  actorId: "actor:delegate",
  role: "approver",
  displayName: "Delegate",
  authorityLevel: "N2",
};

export const N1_ACTOR: ActorReference = {
  actorId: "actor:n1",
  role: "user",
  displayName: "N1 User",
  authorityLevel: "N1",
};

export const CONTRACT_SCOPE = "docs+schemas+examples only";
export const CONTRACT_ACTION = "publish-modeled-pack";
export const CONTRACT_TARGET = "sfia-v3-modeled/v3-native-option-a";
export const CONTRACT_CAPABILITY = "cap:git-docs";

export const OPTIONS = [
  { optionId: "opt:go", label: "Go", recommended: true },
  { optionId: "opt:hold", label: "Hold" },
];

function provenance(actorId: string, id: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prv:${id}`,
    actor: { actorId, role: "system", authorityLevel: "N1" },
    source: "system",
    timestamp: NOW,
    correlationId: "cor:agent-registry-fixture",
  };
}

export function agentDescriptor(
  overrides: Partial<AgentDescriptor> & { agentId: string },
): AgentDescriptor {
  return {
    schemaVersion: "0.1.0-oa",
    agentType: "docs_writer",
    adapterRef: "adp:test-fixture",
    supportedCapabilities: [CONTRACT_CAPABILITY],
    allowedActions: [CONTRACT_ACTION],
    allowedTargets: [CONTRACT_TARGET],
    allowedScopes: [CONTRACT_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: NOW,
    provenance: provenance("actor:system", overrides.agentId.replace(/\W/g, "")),
    ...overrides,
  };
}

/** Deterministic default registry: `agt:alpha` wins the lexicographic tie. */
export function defaultAgents(): AgentDescriptor[] {
  return [
    agentDescriptor({ agentId: "agt:alpha" }),
    agentDescriptor({ agentId: "agt:beta" }),
    agentDescriptor({ agentId: "agt:disabled", enabled: false }),
    agentDescriptor({ agentId: "agt:sick", healthStatus: "degraded" }),
    agentDescriptor({
      agentId: "agt:wrong-scope",
      allowedScopes: ["everything"],
    }),
    agentDescriptor({
      agentId: "agt:wrong-capability",
      supportedCapabilities: ["cap:sql"],
    }),
  ];
}

export type Stack = {
  projects: ProjectServices;
  cycles: CycleServices;
  decisions: DecisionServices & {
    audit: { events: unknown[] };
    authority: MemoryAuthorityResolver;
  };
  execution: ExecutionContractServices & { audit: { events: unknown[] } };
  attempts: ExecutionAttemptServices & {
    audit: { events: Array<Record<string, unknown>> };
  };
  adapter: TestExecutionAdapter | NoOpExecutionAdapter;
};

export function buildStack(
  options: {
    agents?: AgentDescriptor[];
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    policy?: Partial<AttemptPolicy>;
    fixedNowIso?: string;
  } = {},
): Stack {
  const nowIso = options.fixedNowIso ?? NOW;
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: nowIso,
  });
  const cycles = createTestCycleServices({
    projectServices: projects,
    fixedNowIso: nowIso,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    authorityResolver: authority,
    fixedNowIso: nowIso,
  });
  const execution = createTestExecutionContractServices({
    projectServices: projects,
    cycleServices: cycles,
    decisionServices: decisions,
    fixedNowIso: nowIso,
  });
  const adapter = options.adapter ?? new TestExecutionAdapter();
  const attempts = createTestExecutionAttemptServices({
    decisionServices: decisions,
    executionContractServices: execution,
    agents: options.agents ?? defaultAgents(),
    adapter,
    policy: options.policy,
    fixedNowIso: nowIso,
  });
  return {
    projects,
    cycles,
    decisions,
    execution,
    attempts: attempts as Stack["attempts"],
    adapter,
  };
}

export async function seedProject(
  projects: ProjectServices,
  projectId = "prj:campus360-oa",
): Promise<void> {
  const created = await projects.createProject.execute({
    projectId,
    title: "Campus360 Option A",
    objective: "Conduire Option A conversation → exécution gouvernée",
    doctrinePackagePin: VALID_PIN,
    createdBy: MORRIS_ACTOR,
    lpsVersionId: `lps:${projectId.replace("prj:", "")}-v1`,
  });
  expect(created.ok).toBe(true);
}

export function registerMorris(
  authority: MemoryAuthorityResolver,
  scope = CONTRACT_SCOPE,
  evidenceId = "evd:morris-n3",
): void {
  try {
    authority.register({
      evidenceId,
      actorId: "actor:morris",
      level: "N3",
      scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch (err) {
    if (!(err instanceof Error) || err.message !== "evidence_immutable") throw err;
  }
}

export function registerN3NoMorris(
  authority: MemoryAuthorityResolver,
  scope = CONTRACT_SCOPE,
  evidenceId = "evd:n3-no-morris",
): void {
  authority.register({
    evidenceId,
    actorId: "actor:n3-plain",
    level: "N3",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: false,
  });
}

export function registerDelegate(
  authority: MemoryAuthorityResolver,
  scope = CONTRACT_SCOPE,
  evidenceId = "evd:delegate-n2",
): void {
  authority.register({
    evidenceId,
    actorId: "actor:delegate",
    level: "N2",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });
}

export function registerN1(
  authority: MemoryAuthorityResolver,
  scope = CONTRACT_SCOPE,
  evidenceId = "evd:n1",
): void {
  authority.register({
    evidenceId,
    actorId: "actor:n1",
    level: "N1",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });
}

export async function seedAcceptedDecision(
  stack: Stack,
  opts: { decisionId?: string; subject?: string } = {},
): Promise<string> {
  const decisionId = opts.decisionId ?? "dec:oa-001";
  const subject = opts.subject ?? "subj:exec-gate";
  const evidenceId = `evd:morris-${subject.replace(/[^a-z0-9]/gi, "")}`;
  try {
    stack.decisions.authority.register({
      evidenceId,
      actorId: "actor:morris",
      level: "N3",
      scope: subject,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch {
    // already registered
  }
  const result = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: "prj:campus360-oa",
    subject,
    options: OPTIONS,
    selectedOptionId: "opt:go",
    actor: MORRIS_ACTOR,
    authority: "morris",
    reversible: false,
    authorityEvidenceId: evidenceId,
  });
  expect(result.ok).toBe(true);
  return decisionId;
}

export async function seedStandardCycle(
  stack: Stack,
  cycleInstanceId = "cyc:std-001",
): Promise<void> {
  const created = await stack.cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId: "prj:campus360-oa",
    signals: {},
    requestedProfile: "Standard",
    createdBy: MORRIS_ACTOR,
  });
  expect(created.ok).toBe(true);
}

export function baseBuildRequest(
  overrides: Partial<BuildExecutionContractRequest> = {},
): BuildExecutionContractRequest {
  return {
    executionContractId: "xct:oa-001",
    projectId: "prj:campus360-oa",
    decisionRefs: ["dec:oa-001"],
    action: CONTRACT_ACTION,
    target: CONTRACT_TARGET,
    scope: CONTRACT_SCOPE,
    requiredCapabilities: [CONTRACT_CAPABILITY],
    requiredAuthority: "N3",
    constraints: ["no-runtime-code", "no-sql"],
    stopConditions: ["DOCTRINE_UNRESOLVED", "AUTHORITY_DENIED"],
    evidenceRequirements: ["evreq:schemas", "evreq:examples"],
    reversibility: "partially_reversible",
    idempotencyKey: "idem-xct-oa-001",
    correlationId: "cor:oa-demo-001",
    actor: MORRIS_ACTOR,
    authorityEvidenceId: "evd:morris-n3",
    ...overrides,
  };
}

export async function grantContractConfirmation(
  stack: Stack,
  opts: {
    confirmationId?: string;
    actionRef?: string;
    scope?: string;
    level?: "N1" | "N2" | "N3";
    actor?: ActorReference;
    evidenceId?: string;
    expiresAt?: string;
  } = {},
): Promise<string> {
  const confirmationId = opts.confirmationId ?? "cfm:exec-001";
  const actor = opts.actor ?? MORRIS_ACTOR;
  const requested = await stack.decisions.requestConfirmation.execute({
    confirmationId,
    level: opts.level ?? "N3",
    actionRef: opts.actionRef ?? "act:confirm-exec",
    requestedBy: actor,
    requestedTo: actor,
    scope: opts.scope ?? CONTRACT_SCOPE,
    idempotencyKey: `idem-${confirmationId}`,
    decisionRef: "dec:oa-001",
    expiresAt: opts.expiresAt,
  });
  expect(requested.ok).toBe(true);
  const granted = await stack.decisions.grantConfirmation.execute({
    confirmationId,
    actor,
    authorityEvidenceId: opts.evidenceId ?? "evd:morris-n3",
  });
  expect(granted.ok).toBe(true);
  return confirmationId;
}

/**
 * Full stack up to a CONFIRMED ExecutionContract, the T-A5 entry precondition.
 */
export async function seedConfirmedContract(
  stack: Stack,
  overrides: Partial<BuildExecutionContractRequest> = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  const scope = overrides.scope ?? CONTRACT_SCOPE;
  const evidenceId =
    typeof overrides.authorityEvidenceId === "string"
      ? overrides.authorityEvidenceId
      : scope === CONTRACT_SCOPE
        ? "evd:morris-n3"
        : `evd:morris-${scope.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  registerMorris(stack.decisions.authority, scope, evidenceId);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      authorityEvidenceId: evidenceId,
      ...overrides,
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: evidenceId,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope,
    evidenceId,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: evidenceId,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  expect(confirmed.contract.status).toBe("confirmed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
  };
}

/**
 * Grant an agent_selection Confirmation bound to
 * `act:agent_selection:<contract>:v<version>:<agent>`.
 */
export async function grantAgentSelectionConfirmation(
  stack: Stack,
  input: {
    confirmationId?: string;
    executionContractId: string;
    executionContractVersion: number;
    selectedAgentRef: string;
    level?: "N1" | "N2" | "N3";
    actor?: ActorReference;
    evidenceId?: string;
    expiresAt?: string;
    actionRef?: string;
    scope?: string;
  },
): Promise<string> {
  const confirmationId = input.confirmationId ?? "cfm:agent-001";
  const actor = input.actor ?? MORRIS_ACTOR;
  const evidenceId = input.evidenceId ?? "evd:morris-agent-selection";
  try {
    stack.decisions.authority.register({
      evidenceId,
      actorId: actor.actorId,
      level: input.level ?? "N3",
      scope: "agent_selection",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: actor.actorId === "actor:morris",
    });
  } catch {
    // already registered
  }
  const requested = await stack.decisions.requestConfirmation.execute({
    confirmationId,
    level: input.level ?? "N3",
    actionRef:
      input.actionRef ??
      formatAgentSelectionActionRef({
        executionContractId: input.executionContractId,
        executionContractVersion: input.executionContractVersion,
        selectedAgentRef: input.selectedAgentRef,
      }),
    requestedBy: actor,
    requestedTo: actor,
    scope: input.scope ?? "agent_selection",
    idempotencyKey: `idem-${confirmationId}`,
    expiresAt: input.expiresAt ?? "2026-07-25T07:00:00.000Z",
  });
  expect(requested.ok).toBe(true);
  const granted = await stack.decisions.grantConfirmation.execute({
    confirmationId,
    actor,
    authorityEvidenceId: evidenceId,
  });
  expect(granted.ok).toBe(true);
  return confirmationId;
}

/** Select an agent (deterministic profile) on a confirmed contract. */
export async function selectStandardAgent(
  stack: Stack,
  input: {
    attemptId?: string;
    executionContractId: string;
    idempotencyKey?: string;
    requestedAgentRef?: string;
    selectionTtlMs?: number;
    authorityEvidenceId?: string;
  },
) {
  return stack.attempts.selectExecutionAgent.execute({
    attemptId: input.attemptId ?? "xat:oa-001",
    executionContractId: input.executionContractId,
    idempotencyKey: input.idempotencyKey ?? "idem-attempt-001",
    actor: MORRIS_ACTOR,
    authorityEvidenceId: input.authorityEvidenceId ?? "evd:morris-n3",
    selectionProfile: "standard",
    requestedAgentRef: input.requestedAgentRef,
    selectionTtlMs: input.selectionTtlMs,
  });
}

/** Confirmed contract + accepted Attempt + running Attempt. */
export async function seedRunningAttempt(
  stack: Stack,
  attemptId = "xat:oa-001",
): Promise<{ contractId: string; attemptId: string }> {
  const { contractId } = await seedConfirmedContract(stack);
  const selected = await selectStandardAgent(stack, {
    attemptId,
    executionContractId: contractId,
  });
  expect(selected.ok).toBe(true);
  const startedAttempt = await stack.attempts.startExecution.execute({
    attemptId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: "evd:morris-n3",
  });
  expect(startedAttempt.ok).toBe(true);
  return { contractId, attemptId };
}

export function buildRegistry(agents: AgentDescriptor[]): MemoryAgentRegistry {
  return new MemoryAgentRegistry(agents);
}
