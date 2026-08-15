/**
 * G-UX-15 Slice A — resolveM3ExecutionContract application wiring proof.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  createTestSqliteExecutionAttemptServices,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { resolveM3ExecutionContract } from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import {
  UNRESOLVED_STOP_SENTINELS,
  canonicalM3PrepareContractId,
  canonicalM3ResolutionIdempotencyKey,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import type { ExecutionContract } from "@/lib/oa/execution-contract";import {
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "@/features/project-assistant/f3/fixtureAgent";
import {
  F3_ACTION,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CAPABILITY,
  F3_CONFIRM_ACTION_REF,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const PROJECT_ID = "prj:gux15";
const NOW = "2026-08-15T14:00:00.000Z";

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

type Stack = Awaited<ReturnType<typeof bootAt>>;

async function bootAt(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(projects);
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const fixtureAdapter = createF3TestExecutionAdapter();
  const attempts = createTestSqliteExecutionAttemptServices({
    decisionServices: decisions,
    executionContractServices: contracts,
    productStore: projects.store,
    agents: [createF3FixtureAgentDescriptor(NOW)],
    adapter: fixtureAdapter,
    authorityResolver: authority,
    fixedNowIso: NOW,
  });
  return {
    projects,
    decisions,
    contracts,
    authority,
    attempts,
    fixtureAdapter,
    dbPath,
  };
}

async function createProject(stack: Stack) {
  const created = await stack.projects.createProject.execute({
    projectId: PROJECT_ID,
    title: "G-UX-15",
    objective: "resolve m3",
    context: "slice-a",
    scope: "gux15",
    doctrinePackagePin: VALID_PIN,
    createdBy: {
      actorId: "actor:morris",
      role: "project_owner",
      displayName: "Morris",
      authorityLevel: "N3",
    },
    lpsVersionId: "lps:gux15-v1",
    idempotencyKey: "idem:gux15",
  });
  expect(created.ok).toBe(true);
}

async function recordAcceptedGo(stack: Stack, decisionId: string) {
  const lps = await stack.projects.getCurrentLivingProjectState.execute({
    projectId: PROJECT_ID,
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");

  const scope = `decision:${decisionId}`;
  const reg = registerM3LocalMorrisAuthority({
    authorityResolver: stack.authority,
    scope,
    issuedAt: NOW,
    forceEnable: true,
    evidenceId: `evd:m3:${decisionId}`,
  });
  expect(reg.ok).toBe(true);
  if (!reg.ok) throw new Error("authority");

  const basis: DecisionBasis = {
    sourceType: "proposal",
    sourceRef: "prop:gux15",
    sourceDigest: computeDecisionBasisSourceDigest({
      objective: "gux15-obj",
      op: "m3-gux15-requested-operation",
    }),
    projectId: PROJECT_ID,
    cycleInstanceId: undefined,
    proposalContext: {
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      doctrineDigest: VALID_DIGEST,
    },
    executionBasis: {
      objective: "gux15-obj",
      scope,
      cycleTypeId: "cyc:delivery",
      requestedOperation: "m3-gux15-requested-operation",
    },
  };

  const recorded = await stack.decisions.recordHumanDecision.execute({
    decisionId,
    projectId: PROJECT_ID,
    subject: decisionId,
    options: [{ optionId: "opt:go", label: "GO" }],
    selectedOptionId: "opt:go",
    actor: LOCAL_MORRIS_M3_ACTOR,
    authority: "morris",
    reversible: true,
    scope,
    authorityEvidenceId: reg.evidenceId,
    decisionBasis: basis,
    linkToLivingProjectState: true,
    expectedLpsVersion: lps.livingProjectState.version,
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) {
    throw new Error(JSON.stringify(recorded.error));
  }
  return scope;
}

async function prepareM3(stack: Stack, decisionId: string) {
  const lps = await stack.projects.getCurrentLivingProjectState.execute({
    projectId: PROJECT_ID,
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");

  const prepared = await prepareM3FromDecision({
    projectId: PROJECT_ID,
    decisionId,
    currentContext: {
      projectId: PROJECT_ID,
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      doctrineDigest: VALID_DIGEST,
    },
    deps: {
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      executionContractServices: stack.contracts,
      nowIso: () => NOW,
      forceM3Authority: true,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepare");
  return prepared.payload;
}

function fixtureResolution() {
  return {
    action: F3_ACTION,
    target: F3_TARGET,
    requiredCapabilities: [F3_CAPABILITY],
    reversibility: "reversible" as const,
    scope: F3_SCOPE,
    constraints: [
      "FIXTURE ONLY",
      "TEST ADAPTER ONLY",
      "NO REAL",
      "NO SHELL",
      "NO NETWORK EXECUTION",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
      "NO AUTO RETRY",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
    ],
  };
}

async function resolveFixture(
  stack: Stack,
  decisionId: string,
  originalId: string,
  expectedVersion: number,
) {
  return resolveM3ExecutionContract({
    projectId: PROJECT_ID,
    decisionId,
    originalExecutionContractId: originalId,
    expectedOriginalVersion: expectedVersion,
    resolution: fixtureResolution(),
    supersessionReason: "G-UX-15 resolve durable M3 PREPARE via supersession",
    deps: {
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      executionContractServices: stack.contracts,
      nowIso: () => NOW,
      forceM3Authority: true,
    },
  });
}

async function confirmSelectStart(
  stack: Stack,
  decisionId: string,
  successorId: string,
  expectedVersion: number,
) {
  const get =
    await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
  expect(get.ok).toBe(true);
  if (!get.ok) throw new Error("get successor");
  let contract = get.contract;

  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: stack.authority,
    scope: contract.scope,
    issuedAt: NOW,
    forceEnable: true,
    evidenceId: `evd:m3-cfm:${successorId}`,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error("cfm auth");

  const confirmationId = `cfm:gux15:${successorId}:v${contract.version}`;
  const requested = await stack.decisions.requestConfirmation.execute({
    confirmationId,
    level: "N3",
    actionRef: F3_CONFIRM_ACTION_REF,
    requestedBy: LOCAL_MORRIS_M3_ACTOR,
    requestedTo: LOCAL_MORRIS_M3_ACTOR,
    scope: contract.scope,
    idempotencyKey: `idem:gux15-cfm:${successorId}:v${contract.version}`,
    decisionRef: decisionId,
  });
  expect(requested.ok).toBe(true);

  const granted = await stack.decisions.grantConfirmation.execute({
    confirmationId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(granted.ok).toBe(true);

  const confirmed = await stack.contracts.confirmExecutionContract.execute({
    executionContractId: successorId,
    confirmationId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    expectedVersion,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm");
  contract = confirmed.contract;

  const attemptId = `xat:gux15:${successorId.replace(/^xct:/, "")}`;
  const selected = await stack.attempts.selectExecutionAgent.execute({
    attemptId,
    executionContractId: successorId,
    idempotencyKey: `idem:gux15-att:${successorId}`,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: F3_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);

  const started = await stack.attempts.startExecution.execute({
    attemptId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.error.message);

  const resultRef = `res:gux15-fixture:${attemptId}`;
  const recorded = await stack.attempts.recordExecutionResult.execute({
    attemptId,
    adapterId: F3_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
  });
  expect(recorded.ok).toBe(true);
  if (!recorded.ok) throw new Error(recorded.error.message);

  return {
    attempt: recorded.attempt,
    launchCount: stack.fixtureAdapter.launchCallCount,
    contract,
  };
}

describe("G-UX-15 Slice A — resolveM3ExecutionContract", () => {
  it("AC — preserves unresolved original, supersedes to resolved successor, fixture-safe StartExecution", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-happy";

    const stackA = await bootAt(dbPath);
    await createProject(stackA);
    await recordAcceptedGo(stackA, decisionId);
    const prepared = await prepareM3(stackA, decisionId);
    expect(prepared.executionAllowed).toBe(false);
    expect(prepared.contract.target).toBe("UNRESOLVED_TARGET");
    expect(prepared.contract.constraints).toContain("PREPARE_ONLY");
    const originalId = prepared.contract.executionContractId;
    const originalVersion = prepared.contract.version;

    // Dispose process-scoped services (PROCESS A end).
    stackA.projects.dispose();
    openServices.pop();

    // PROCESS B — reload durable state; no Proposal / Conversation.
    const stackB = await bootAt(dbPath);
    const resolved = await resolveFixture(
      stackB,
      decisionId,
      originalId,
      originalVersion,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    expect(resolved.reusedFromIdempotency).toBe(false);
    expect(resolved.original.status).toBe("superseded");
    expect(resolved.original.target).toBe("UNRESOLVED_TARGET");
    expect(resolved.original.requiredCapabilities).toContain("cap:unresolved");
    expect(resolved.successor.supersedesExecutionContractId).toBe(originalId);
    expect(resolved.successor.action).toBe(F3_ACTION);
    expect(resolved.successor.target).toBe(F3_TARGET);
    expect(resolved.successor.requiredCapabilities).toEqual([F3_CAPABILITY]);
    expect(resolved.successor.constraints).not.toContain("PREPARE_ONLY");
    expect(resolved.successor.constraints).not.toContain("NO_ATTEMPT");
    expect(resolved.successor.status).toBe("confirmation_required");

    const originalReload =
      await stackB.contracts.getExecutionContract.execute({
        executionContractId: originalId,
      });
    expect(originalReload.ok).toBe(true);
    if (!originalReload.ok) return;
    expect(originalReload.contract.status).toBe("superseded");
    expect(originalReload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(originalReload.contract.constraints).toContain("PREPARE_ONLY");

    const exec = await confirmSelectStart(
      stackB,
      decisionId,
      resolved.successor.executionContractId,
      resolved.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");
    expect(exec.attempt.selectedAgentRef).toBe(F3_AGENT_ID);
    expect(exec.launchCount).toBe(1);
    expect(stackB.fixtureAdapter.externalEffects).toBe(false);
    expect(stackB.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    // Original never executed — no attempts on original id.
    const onOriginal = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: originalId,
    });
    expect(onOriginal.ok).toBe(true);
    if (onOriginal.ok) expect(onOriginal.attempts).toHaveLength(0);

    const onSuccessor = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(onSuccessor.ok).toBe(true);
    if (onSuccessor.ok) expect(onSuccessor.attempts).toHaveLength(1);

    // Duplicate StartExecution does not produce a second Attempt/launch.
    const dupStart = await stackB.attempts.startExecution.execute({
      attemptId: exec.attempt.attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: `evd:m3-cfm:${resolved.successor.executionContractId}`,
    });
    expect(dupStart.ok).toBe(false);
    expect(stackB.fixtureAdapter.launchCallCount).toBe(1);

    const listedAfter = await stackB.attempts.listExecutionAttempts.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(listedAfter.ok).toBe(true);
    if (listedAfter.ok) expect(listedAfter.attempts).toHaveLength(1);
  });

  it("idempotent resolve replay returns same successor without second current executable", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-idem-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-idem";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const first = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotency).toBe(true);
    expect(second.successor.executionContractId).toBe(
      first.successor.executionContractId,
    );

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    const currentish = history.contracts.filter(
      (c) =>
        c.status !== "superseded" &&
        c.status !== "cancelled" &&
        c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
    );
    expect(currentish).toHaveLength(1);
  });

  it("negative — unresolved resolution fields and non-accepted decisions", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-neg-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-neg";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const base = {
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "neg",
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    };

    const unresolvedTarget = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        target: "UNRESOLVED_TARGET",
      },
    });
    expect(unresolvedTarget.ok).toBe(false);
    if (!unresolvedTarget.ok) {
      expect(unresolvedTarget.code).toBe("RESOLUTION_TARGET_UNRESOLVED");
    }

    const unresolvedCap = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        requiredCapabilities: ["cap:unresolved"],
      },
    });
    expect(unresolvedCap.ok).toBe(false);
    if (!unresolvedCap.ok) {
      expect(unresolvedCap.code).toBe("RESOLUTION_CAPABILITY_UNRESOLVED");
    }

    const unresolvedAction = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        action: "UNRESOLVED_ACTION",
      },
    });
    expect(unresolvedAction.ok).toBe(false);
    if (!unresolvedAction.ok) {
      expect(unresolvedAction.code).toBe("RESOLUTION_ACTION_UNRESOLVED");
    }

    const prepareOnlyConstraint = await resolveM3ExecutionContract({
      ...base,
      resolution: {
        ...fixtureResolution(),
        constraints: ["PREPARE_ONLY", "NO REAL"],
      },
    });
    expect(prepareOnlyConstraint.ok).toBe(false);
    if (!prepareOnlyConstraint.ok) {
      expect(prepareOnlyConstraint.code).toBe("RESOLUTION_CONSTRAINT_FORBIDDEN");
    }

    const staleVersion = await resolveM3ExecutionContract({
      ...base,
      expectedOriginalVersion: prepared.contract.version + 99,
      resolution: fixtureResolution(),
    });
    expect(staleVersion.ok).toBe(false);
    if (!staleVersion.ok) {
      expect(staleVersion.code).toBe("VERSION_CONFLICT");
    }

    // Amended decision — no DecisionBasis path.
    const amendId = "dec:gux15-amend";
    const amendAuth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: `decision:${amendId}`,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3:${amendId}`,
    });
    expect(amendAuth.ok).toBe(true);
    if (!amendAuth.ok) return;
    const amended = await stack.decisions.recordHumanDecision.execute({
      decisionId: amendId,
      projectId: PROJECT_ID,
      subject: amendId,
      options: [{ optionId: "opt:amend", label: "AMEND" }],
      selectedOptionId: "opt:amend",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope: `decision:${amendId}`,
      authorityEvidenceId: amendAuth.evidenceId,
      status: "amended",
    });
    expect(amended.ok).toBe(true);

    const amendResolve = await resolveM3ExecutionContract({
      ...base,
      decisionId: amendId,
      resolution: fixtureResolution(),
    });
    expect(amendResolve.ok).toBe(false);
    if (!amendResolve.ok) {
      expect(["DECISION_NOT_CURRENT", "DECISION_BASIS_REQUIRED"]).toContain(
        amendResolve.code,
      );
    }
  });

  it("negative — refuse confirm/start of original unresolved M3 contract", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-orig-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-orig";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: prepared.contract.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-badcfm:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const confirmationId = `cfm:bad:${prepared.contract.executionContractId}`;
    const requested = await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: prepared.contract.scope,
      idempotencyKey: `idem:badcfm:${decisionId}`,
      decisionRef: decisionId,
    });
    expect(requested.ok).toBe(true);
    const granted = await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(granted.ok).toBe(true);

    // Confirm may succeed on confirmation_required status — but agent match must fail
    // because cap:unresolved / UNRESOLVED_TARGET cannot match fixture agent.
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: prepared.contract.version,
    });
    // Whether confirm is allowed, selection must fail closed on unresolved fields.
    if (confirmed.ok) {
      const selected = await stack.attempts.selectExecutionAgent.execute({
        attemptId: `xat:bad:${decisionId}`,
        executionContractId: prepared.contract.executionContractId,
        idempotencyKey: `idem:bad-att:${decisionId}`,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
        expectedContractVersion: confirmed.contract.version,
        selectionProfile: "standard",
        selectionStrategy: "capabilities_deterministic",
        requestedAgentRef: F3_AGENT_ID,
        systemInitiated: true,
      });
      expect(selected.ok).toBe(false);
    } else {
      expect(confirmed.ok).toBe(false);
    }
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("negative — invalid agent capability / project mismatch", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-agent-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-agent";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const resolved = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "agent mismatch setup",
      resolution: {
        ...fixtureResolution(),
        requiredCapabilities: ["cap:does-not-exist-for-fixture"],
        // Keep F3 action/target/scope so contract validates; match fails at select.
      },
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-agent:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const confirmationId = `cfm:agent:${resolved.successor.executionContractId}`;
    await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: resolved.successor.scope,
      idempotencyKey: `idem:agentcfm:${decisionId}`,
      decisionRef: decisionId,
    });
    await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: resolved.successor.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: `xat:agent:${decisionId}`,
      executionContractId: resolved.successor.executionContractId,
      idempotencyKey: `idem:agent-att:${decisionId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);

    const projectMismatch = await resolveM3ExecutionContract({
      projectId: "prj:other",
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "mismatch",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(projectMismatch.ok).toBe(false);
    if (!projectMismatch.ok) {
      expect(projectMismatch.code).toBe("PROJECT_MISMATCH");
    }
  });

  it("C1 — explicit unresolved stopConditions reject before supersession", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c1-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c1";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    expect(prepared.contract.executionContractId).toBe(
      canonicalM3PrepareContractId(decisionId),
    );

    for (const sentinel of UNRESOLVED_STOP_SENTINELS) {
      const rejected = await resolveM3ExecutionContract({
        projectId: PROJECT_ID,
        decisionId,
        originalExecutionContractId: prepared.contract.executionContractId,
        expectedOriginalVersion: prepared.contract.version,
        supersessionReason: `c1 ${sentinel}`,
        resolution: {
          ...fixtureResolution(),
          stopConditions: [sentinel, "AUTHORITY_DENIED"],
        },
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: stack.contracts,
          nowIso: () => NOW,
          forceM3Authority: true,
        },
      });
      expect(rejected.ok).toBe(false);
      if (!rejected.ok) {
        expect(rejected.code).toBe("RESOLUTION_STOP_UNRESOLVED");
      }
    }

    const original = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(original.ok).toBe(true);
    if (!original.ok) return;
    expect(original.contract.status).not.toBe("superseded");

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(
      history.contracts.filter((c) =>
        c.executionContractId.startsWith("xct:m3-res:"),
      ),
    ).toHaveLength(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("C1 — successful successor contains none of the known unresolved stop sentinels", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c1ok-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c1ok";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    for (const sentinel of UNRESOLVED_STOP_SENTINELS) {
      expect(resolved.successor.stopConditions).not.toContain(sentinel);
    }
    expect(resolved.successor.action).not.toBe("UNRESOLVED_ACTION");
    expect(resolved.successor.target).not.toBe("UNRESOLVED_TARGET");
    expect(resolved.successor.requiredCapabilities).not.toContain(
      "cap:unresolved",
    );
  });

  it("C3 — noncanonical originalExecutionContractId rejects before mutation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c3-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c3";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    const rejected = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: "xct:m3:not-this-decision",
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "c3 identity",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(rejected.ok).toBe(false);
    if (!rejected.ok) {
      expect(rejected.code).toBe("CANONICAL_M3_CONTRACT_MISMATCH");
    }

    const original = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(original.ok).toBe(true);
    if (!original.ok) return;
    expect(original.contract.status).not.toBe("superseded");
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("C2 — supersession success + validation failure recovers by validating SAME successor", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c2-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c2";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);

    let validateCalls = 0;
    const realValidate = stack.contracts.validateExecutionContract;
    const wrappedServices = {
      ...stack.contracts,
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          if (validateCalls === 1) {
            return {
              ok: false as const,
              error: {
                detailCode: "AUTHORITY_DENIED",
                message: "injected validation failure",
              },
              durationMs: 0,
            };
          }
          return realValidate.execute(req);
        },
      },
    };

    const first = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "c2 interrupted validation",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrappedServices as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(first.ok).toBe(false);
    expect(validateCalls).toBe(1);

    const originalAfter = await stack.contracts.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(originalAfter.ok).toBe(true);
    if (!originalAfter.ok) return;
    expect(originalAfter.contract.status).toBe("superseded");

    const successorId = `xct:m3-res:${decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48)}`;
    const successorAfter = await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
    expect(successorAfter.ok).toBe(true);
    if (!successorAfter.ok) return;
    expect(["draft", "proposed"]).toContain(successorAfter.contract.status);
    expect(successorAfter.contract.supersedesExecutionContractId).toBe(
      prepared.contract.executionContractId,
    );

    const attemptsAfter = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: successorId,
    });
    expect(attemptsAfter.ok).toBe(true);
    if (attemptsAfter.ok) expect(attemptsAfter.attempts).toHaveLength(0);

    const historyAfter = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(historyAfter.ok).toBe(true);
    if (!historyAfter.ok) return;
    expect(
      historyAfter.contracts.filter(
        (c) =>
          c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
      ),
    ).toHaveLength(1);

    // Replay with normal validation — validates EXISTING successor.
    const second = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotency).toBe(true);
    expect(second.successor.executionContractId).toBe(successorId);
    expect(second.successor.status).toBe("confirmation_required");

    const third = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(third.ok).toBe(true);
    if (!third.ok) return;
    expect(third.reusedFromIdempotency).toBe(true);
    expect(third.successor.executionContractId).toBe(successorId);

    const historyFinal = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(historyFinal.ok).toBe(true);
    if (!historyFinal.ok) return;
    expect(
      historyFinal.contracts.filter(
        (c) =>
          c.supersedesExecutionContractId ===
          prepared.contract.executionContractId,
      ),
    ).toHaveLength(1);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);

    // Fixture-safe composition still works after recovery.
    const exec = await confirmSelectStart(
      stack,
      decisionId,
      second.successor.executionContractId,
      second.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");
    expect(exec.launchCount).toBe(1);
  });

  it("C2 — cancelled expected successor fails closed", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-c2can-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-c2can";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-cancel:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const cancelled = await stack.contracts.cancelExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
      reason: "abort resolution candidate",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(cancelled.ok).toBe(true);

    const replay = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("STATE_CONFLICT");
    }
  });

  it("F1 — wrong successor requiredAuthority fails closed before validation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-auth-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-auth";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const successorId = resolved.successor.executionContractId;
    let validateCalls = 0;
    const realGet = stack.contracts.getExecutionContract;
    const realValidate = stack.contracts.validateExecutionContract;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              requiredAuthority: "N3" as const,
            },
            durationMs: 0,
          };
        },
      },
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return realValidate.execute(req);
        },
      },
    };

    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 auth",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
    }
    expect(validateCalls).toBe(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (history.ok) {
      expect(
        history.contracts.filter(
          (c) =>
            c.supersedesExecutionContractId ===
            prepared.contract.executionContractId,
        ),
      ).toHaveLength(1);
    }
  });

  it("F1 — wrong / missing / extra decisionRefs fail closed before validation", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-refs-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-refs";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const successorId = resolved.successor.executionContractId;
    const realGet = stack.contracts.getExecutionContract;

    for (const badRefs of [
      undefined,
      [],
      ["dec:other"],
      [decisionId, "dec:extra"],
    ] as Array<string[] | undefined>) {
      let validateCalls = 0;
      const wrapped = {
        ...stack.contracts,
        getExecutionContract: {
          execute: async (req: { executionContractId: string }) => {
            const got = await realGet.execute(req);
            if (!got.ok || req.executionContractId !== successorId) return got;
            const mutated: ExecutionContract = {
              ...got.contract,
              decisionRefs: badRefs,
            };
            return { ok: true as const, contract: mutated, durationMs: 0 };
          },
        },
        validateExecutionContract: {
          execute: async (req: {
            executionContractId: string;
            actor: typeof LOCAL_MORRIS_M3_ACTOR;
            authorityEvidenceId?: string;
          }) => {
            validateCalls += 1;
            return stack.contracts.validateExecutionContract.execute(req);
          },
        },
      };
      const replay = await resolveM3ExecutionContract({
        projectId: PROJECT_ID,
        decisionId,
        originalExecutionContractId: prepared.contract.executionContractId,
        expectedOriginalVersion: prepared.contract.version,
        supersessionReason: "f1 refs",
        resolution: fixtureResolution(),
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: wrapped as typeof stack.contracts,
          nowIso: () => NOW,
          forceM3Authority: true,
        },
      });
      expect(replay.ok).toBe(false);
      if (!replay.ok) {
        expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
      }
      expect(validateCalls).toBe(0);
    }
    expect(stack.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("F1 — wrong canonical resolution idempotency fails closed", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-idem-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-idem";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const successorId = resolved.successor.executionContractId;
    expect(resolved.successor).toBeTruthy();
    const expectedKey = canonicalM3ResolutionIdempotencyKey(
      decisionId,
      successorId,
    );
    const realGet = stack.contracts.getExecutionContract;
    let validateCalls = 0;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          expect(got.contract.idempotencyKey).toBe(expectedKey);
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              idempotencyKey: "idem:m3-res:forged",
            },
            durationMs: 0,
          };
        },
      },
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return stack.contracts.validateExecutionContract.execute(req);
        },
      },
    };
    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 idem",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("SUCCESSOR_GOVERNANCE_MISMATCH");
    }
    expect(validateCalls).toBe(0);
  });

  it("F1 — validated-only MORRIS successor fails closed (not completed resolution)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f1-val-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f1-val";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    // Lifecycle proof: MORRIS validate yields confirmation_required, not validated.
    expect(resolved.successor.status).toBe("confirmation_required");
    expect(resolved.successor.requiredAuthority).toBe("MORRIS");

    const successorId = resolved.successor.executionContractId;
    const realGet = stack.contracts.getExecutionContract;
    const wrapped = {
      ...stack.contracts,
      getExecutionContract: {
        execute: async (req: { executionContractId: string }) => {
          const got = await realGet.execute(req);
          if (!got.ok || req.executionContractId !== successorId) return got;
          return {
            ok: true as const,
            contract: {
              ...got.contract,
              status: "validated" as const,
              requiredAuthority: "MORRIS" as const,
            },
            durationMs: 0,
          };
        },
      },
    };
    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f1 validated",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(false);
    if (!replay.ok) {
      expect(replay.code).toBe("STATE_CONFLICT");
    }
  });

  it("F2 — failed T-A5 successor replays idempotently without new attempt/launch", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f2-fail-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f2-fail";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const successorId = resolved.successor.executionContractId;
    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope: resolved.successor.scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3-fail:${successorId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const confirmationId = `cfm:gux15-fail:${successorId}`;
    await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: LOCAL_MORRIS_M3_ACTOR,
      requestedTo: LOCAL_MORRIS_M3_ACTOR,
      scope: resolved.successor.scope,
      idempotencyKey: `idem:gux15-fail-cfm:${successorId}`,
      decisionRef: decisionId,
    });
    await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    const confirmed = await stack.contracts.confirmExecutionContract.execute({
      executionContractId: successorId,
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedVersion: resolved.successor.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const attemptId = `xat:gux15-fail:${successorId.replace(/^xct:/, "")}`;
    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId,
      executionContractId: successorId,
      idempotencyKey: `idem:gux15-fail-att:${successorId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;

    const started = await stack.attempts.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);

    // Existing T-A5 failure API — fixture-safe, externalEffects remain false.
    const failed = await stack.attempts.recordExecutionFailure.execute({
      attemptId,
      adapterId: F3_ADAPTER_ID,
      errorRef: "err:gux15-fixture-fail",
      stopReason: "fixture-controlled technical failure",
      technicalExitCode: 1,
    });
    expect(failed.ok).toBe(true);
    if (!failed.ok) return;
    expect(failed.contractStatus).toBe("failed");

    const contractFailed = await stack.contracts.getExecutionContract.execute({
      executionContractId: successorId,
    });
    expect(contractFailed.ok).toBe(true);
    if (!contractFailed.ok) return;
    expect(contractFailed.contract.status).toBe("failed");

    let validateCalls = 0;
    let supersedeCalls = 0;
    const wrapped = {
      ...stack.contracts,
      validateExecutionContract: {
        execute: async (req: {
          executionContractId: string;
          actor: typeof LOCAL_MORRIS_M3_ACTOR;
          authorityEvidenceId?: string;
        }) => {
          validateCalls += 1;
          return stack.contracts.validateExecutionContract.execute(req);
        },
      },
      supersedeExecutionContract: {
        execute: async (req: Parameters<
          typeof stack.contracts.supersedeExecutionContract.execute
        >[0]) => {
          supersedeCalls += 1;
          return stack.contracts.supersedeExecutionContract.execute(req);
        },
      },
    };

    const replay = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: prepared.contract.executionContractId,
      expectedOriginalVersion: prepared.contract.version,
      supersessionReason: "f2 failed replay",
      resolution: fixtureResolution(),
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: wrapped as typeof stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotency).toBe(true);
    expect(replay.successor.executionContractId).toBe(successorId);
    expect(replay.successor.status).toBe("failed");
    expect(validateCalls).toBe(0);
    expect(supersedeCalls).toBe(0);
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);
    expect(stack.fixtureAdapter.externalEffects).toBe(false);

    const attempts = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: successorId,
    });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toHaveLength(1);

    const history = await stack.contracts.listExecutionContractHistory.execute({
      projectId: PROJECT_ID,
    });
    expect(history.ok).toBe(true);
    if (history.ok) {
      expect(
        history.contracts.filter(
          (c) =>
            c.supersedesExecutionContractId ===
            prepared.contract.executionContractId,
        ),
      ).toHaveLength(1);
    }
  });

  it("F2 — completed T-A5 successor remains idempotent replay PASS", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-gux15-f2-done-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const decisionId = "dec:gux15-f2-done";
    const stack = await bootAt(dbPath);
    await createProject(stack);
    await recordAcceptedGo(stack, decisionId);
    const prepared = await prepareM3(stack, decisionId);
    const resolved = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const exec = await confirmSelectStart(
      stack,
      decisionId,
      resolved.successor.executionContractId,
      resolved.successor.version,
    );
    expect(exec.attempt.status).toBe("succeeded");

    const contractDone = await stack.contracts.getExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(contractDone.ok).toBe(true);
    if (!contractDone.ok) return;
    expect(contractDone.contract.status).toBe("completed");

    const replay = await resolveFixture(
      stack,
      decisionId,
      prepared.contract.executionContractId,
      prepared.contract.version,
    );
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotency).toBe(true);
    expect(replay.successor.status).toBe("completed");
    expect(replay.successor.executionContractId).toBe(
      resolved.successor.executionContractId,
    );
    expect(stack.fixtureAdapter.launchCallCount).toBe(1);
  });
});

// Keep unused import type referenced for clarity in tooling.
void (null as unknown as ExecutionAttemptServices);
