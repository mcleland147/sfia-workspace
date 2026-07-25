/**
 * Shared fixtures for T-A4 ExecutionContract tests.
 * @vitest-environment node
 */
import path from "node:path";
import { expect } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestProjectServices,
  type ActorReference,
  type ProjectServices,
} from "@/lib/oa/project";
import {
  createTestCycleServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  createTestDecisionServices,
  MemoryAuthorityResolver,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createTestExecutionContractServices,
  type ExecutionContractServices,
  type BuildExecutionContractRequest,
} from "@/lib/oa/execution-contract";

export const APP_ROOT = path.resolve(__dirname, "../../..");
export const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
export const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

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

export const OPTIONS = [
  { optionId: "opt:go", label: "Go", recommended: true },
  { optionId: "opt:hold", label: "Hold" },
];

export function buildProjectServices(): ProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  return createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-07-25T06:00:00.000Z",
  });
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

export type Stack = {
  projects: ProjectServices;
  cycles: CycleServices;
  decisions: DecisionServices & {
    audit: { events: unknown[] };
    authority: MemoryAuthorityResolver;
  };
  execution: ExecutionContractServices & {
    audit: { events: unknown[] };
  };
};

export function buildStack(): Stack {
  const projects = buildProjectServices();
  const cycles = createTestCycleServices({
    projectServices: projects,
    fixedNowIso: "2026-07-25T06:00:00.000Z",
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    authorityResolver: authority,
    fixedNowIso: "2026-07-25T06:00:00.000Z",
  });
  const execution = createTestExecutionContractServices({
    projectServices: projects,
    cycleServices: cycles,
    decisionServices: decisions,
    fixedNowIso: "2026-07-25T06:00:00.000Z",
  });
  return { projects, cycles, decisions, execution };
}

export function registerMorris(
  authority: MemoryAuthorityResolver,
  scope = "docs+schemas+examples only",
): void {
  authority.register({
    evidenceId: "evd:morris-n3",
    actorId: "actor:morris",
    level: "N3",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: true,
  });
}

export function registerN3NoMorris(
  authority: MemoryAuthorityResolver,
  scope = "docs+schemas+examples only",
): void {
  authority.register({
    evidenceId: "evd:n3-no-morris",
    actorId: "actor:morris",
    level: "N3",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
    canActAsMorris: false,
  });
}

export function registerDelegate(
  authority: MemoryAuthorityResolver,
  scope = "docs+schemas+examples only",
): void {
  authority.register({
    evidenceId: "evd:delegate-n2",
    actorId: "actor:delegate",
    level: "N2",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });
}

export function registerN1(
  authority: MemoryAuthorityResolver,
  scope = "docs+schemas+examples only",
): void {
  authority.register({
    evidenceId: "evd:n1",
    actorId: "actor:n1",
    level: "N1",
    scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });
}

export async function seedAcceptedDecision(
  stack: Stack,
  opts: {
    decisionId?: string;
    projectId?: string;
    subject?: string;
    authority?: "morris" | "delegated";
    evidenceId?: string;
    actor?: ActorReference;
    cycleInstanceId?: string;
  } = {},
): Promise<string> {
  const decisionId = opts.decisionId ?? "dec:oa-001";
  const projectId = opts.projectId ?? "prj:campus360-oa";
  const subject = opts.subject ?? "subj:exec-gate";
  const authority = opts.authority ?? "morris";
  const actor = opts.actor ?? MORRIS_ACTOR;
  const evidenceId =
    opts.evidenceId ??
    (authority === "morris" ? "evd:morris-n3" : "evd:delegate-n2");

  // Authority scope for decisions uses subject; register if needed for subject scope.
  if (authority === "morris") {
    try {
      stack.decisions.authority.register({
        evidenceId: `evd:morris-${subject.replace(/[^a-z0-9]/gi, "")}`,
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
  }

  const result = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId,
    cycleInstanceId: opts.cycleInstanceId,
    subject,
    options: OPTIONS,
    selectedOptionId: "opt:go",
    actor,
    authority,
    reversible: false,
    authorityEvidenceId:
      authority === "morris"
        ? `evd:morris-${subject.replace(/[^a-z0-9]/gi, "")}`
        : evidenceId,
  });
  expect(result.ok).toBe(true);
  return decisionId;
}

export function baseBuildRequest(
  overrides: Partial<BuildExecutionContractRequest> = {},
): BuildExecutionContractRequest {
  return {
    executionContractId: "xct:oa-001",
    projectId: "prj:campus360-oa",
    decisionRefs: ["dec:oa-001"],
    action: "publish-modeled-pack",
    target: "sfia-v3-modeled/v3-native-option-a",
    scope: "docs+schemas+examples only",
    requiredCapabilities: ["cap:git-docs"],
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

export async function seedCriticalCycle(
  stack: Stack,
  cycleInstanceId = "cyc:critical-001",
  projectId = "prj:campus360-oa",
): Promise<void> {
  const created = await stack.cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: {
      structuralChange: true,
      securityImpact: true,
    },
    requestedProfile: "Critical",
    justification:
      "Structural security impact requires Critical profile.",
    createdBy: MORRIS_ACTOR,
  });
  expect(created.ok).toBe(true);
  if (created.ok) {
    expect(created.cycle.profile).toBe("Critical");
    expect(created.cycle.status).toBe("proposed");
  }
}

export async function seedStandardCycle(
  stack: Stack,
  cycleInstanceId = "cyc:std-001",
  projectId = "prj:campus360-oa",
): Promise<void> {
  const created = await stack.cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: {},
    requestedProfile: "Standard",
    createdBy: MORRIS_ACTOR,
  });
  expect(created.ok).toBe(true);
}

export async function grantConfirmation(
  stack: Stack,
  opts: {
    confirmationId?: string;
    level?: "N1" | "N2" | "N3";
    actionRef?: string;
    scope?: string;
    decisionRef?: string;
    actor?: ActorReference;
    evidenceId?: string;
    expiresAt?: string;
  } = {},
): Promise<string> {
  const confirmationId = opts.confirmationId ?? "cfm:exec-001";
  const level = opts.level ?? "N3";
  const scope = opts.scope ?? "docs+schemas+examples only";
  const actor = opts.actor ?? MORRIS_ACTOR;
  const evidenceId = opts.evidenceId ?? "evd:morris-n3";

  const requested = await stack.decisions.requestConfirmation.execute({
    confirmationId,
    level,
    actionRef: opts.actionRef ?? "act:confirm-exec",
    requestedBy: actor,
    requestedTo: actor,
    scope,
    idempotencyKey: `idem-${confirmationId}`,
    decisionRef: opts.decisionRef ?? "dec:oa-001",
    expiresAt: opts.expiresAt,
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

export async function buildValidatedContract(
  stack: Stack,
  overrides: Partial<BuildExecutionContractRequest> = {},
): Promise<{ contractId: string; version: number }> {
  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest(overrides),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");
  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: overrides.actor ?? MORRIS_ACTOR,
    authorityEvidenceId:
      overrides.authorityEvidenceId ?? "evd:morris-n3",
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  return {
    contractId: validated.contract.executionContractId,
    version: validated.contract.version,
  };
}
