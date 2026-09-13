/**
 * D-GCEC-AGENT-01 + GCEC git.commit same-EC A→B (honest agent swap).
 * ZERO REAL. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedLocalCommitCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  isFsAnchorSupersededByVerifiedLocalCommit,
  isM4BoundedLocalCommitRealAgent,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  resolvePreCommitWorkspaceContinuation,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  verifyLocalCommitEffect,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";
import { createGovernedCommittedWorktree } from "./support/governedCommitFixture";

const IDENTITY = "acme/widget";
const BRANCH = "gcec/docs";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# Commit A→B verified artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const MSG = "docs: Functional design for continuation proof";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "safety.sqlite");
}

function docsWriteInputs(baseHeadSha: string): Record<string, unknown> {
  return {
    baseHeadSha,
    repositoryRef: IDENTITY,
    repositoryIdentity: IDENTITY,
    remoteUrl: `https://github.com/${IDENTITY}.git`,
    defaultBranch: "main",
    workingBranch: BRANCH,
    pathRoot: "docs",
    targetPath: TARGET_PATH,
    pathAllowlist: ["docs/"],
    scopeIn: ["docs/"],
    scopeOut: ["src/"],
    artifactType: "functional_design",
    artifactBrief: "Functional design for continuation proof",
    contentRequirements: ["problem", "constraints", "acceptance"],
    expectedOutputs: [TARGET_PATH],
    validationExpectations: ["markdown"],
    evidenceRequirements: ["artifact", "git:local_commit"],
    commitMessage: MSG,
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: TARGET_PATH,
    digest: ARTIFACT_DIGEST,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:gc-ev",
    },
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef?: string;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef:
      input.selectedAgentRef ?? M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    status: "succeeded",
    idempotencyKey: `idem:${input.attemptId}`,
    correlationId: `cor:${input.attemptId}`,
    version: 1,
    createdAt: NOW,
    launchedAt: NOW,
    startedAt: NOW,
    completedAt: NOW,
    resultRef: `res:${input.attemptId}`,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.attemptId}`,
      actor: MORRIS_ACTOR,
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.attemptId}`,
    },
  };
}

async function seedDocsWriteConfirmedContract(
  stack: Stack,
): Promise<{
  contractId: string;
  version: number;
  projectId: string;
  cycleInstanceId: string;
}> {
  const projectId = "prj:campus360-oa";
  const cycleInstanceId = "cyc:std-001";
  await seedProject(stack.projects, projectId);
  registerMorris(
    stack.decisions.authority,
    M4_BOUNDED_DOCS_WRITE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: "xct:gc-ab",
      idempotencyKey: "idem-xct-gc-ab",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      evidenceRequirements: ["git:local_commit"],
      expectedOutputs: ["artifact", TARGET_PATH],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: docsWriteInputs(M4_TEST_BASE_HEAD_SHA),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    confirmationId: "cfm:gc-ec",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("AG-01/02 Attempt A docs-write; Attempt B local-commit under SAME EC", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-agent01-ab-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-agent01-ab-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
    expect(isM4BoundedLocalCommitRealAgent(commit)).toBe(true);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({
      agents: [docs, commit],
      adapter: fixtureAdapter,
    });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [docs, commit],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal,
        managedRepoRootBase: managedBase,
      },
      resolveProjectRepositoryBinding: async () => ({
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: M4_TEST_BASE_HEAD_SHA,
      }),
      listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    const attemptA = "xat:gc-a";
    const attemptB = "xat:gc-b";

    // Attempt A — docs-write (seeded succeeded + Evidence)
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: attemptA,
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
        selectedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:gc-a-art",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptA,
      }),
    );

    // AG-03: docs-write requested for B → mismatch
    const wrong = await selectStandardAgent(stack, {
      attemptId: "xat:gc-b-wrong",
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-b-wrong",
    });
    expect(wrong.ok).toBe(false);

    // AG-02: B selects local-commit
    const selectedB = await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-b",
    });
    expect(selectedB.ok).toBe(true);
    if (!selectedB.ok) throw new Error("select B failed");
    expect(selectedB.attempt.selectedAgentRef).toBe(
      M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
    );
    expect(selectedB.attempt.selectedAgentRef).not.toBe(
      M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    );

    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:gc-b",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });

    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-gc");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:gc-git-commit",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-gc",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:gc-git-commit",
    );

    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.internalCauseRef);

    const req = launchPort.calls[0]!;
    expect(req.selectedAgentRef).toBe(M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID);
    expect(req.authorizedEffects).toEqual(["git.commit"]);
    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
    expect(req.gitCommitSpec).toBeDefined();

    const evidenceServices = createTestEvidenceReviewServices({
      fixedNowIso: NOW,
    });
    // CR-09: Evidence creator owns observation via governed temp worktree.
    const fx = createGovernedCommittedWorktree({
      priorAttemptId: attemptA,
      pathRel: TARGET_PATH,
      body: "# same-ec-ab\n",
      commitMessage: MSG,
      identity: "acme/widget",
    });
    const verified = await verifyLocalCommitEffect({
      gitRunner: fx.runner,
      governed: fx.governed,
      spec: {
        ...req.gitCommitSpec!,
        expectedParentSha: fx.H0,
        repositoryRef: "acme/widget",
        exactPaths: [TARGET_PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: { [TARGET_PATH]: fx.digest },
      expectedBindings: {
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptB,
      },
      actor: { actorId: MORRIS_ACTOR.actorId, role: "human" },
      evidenceServices,
      nowIso: NOW,
    });
    fx.cleanup();
    expect(verified.ok).toBe(true);

    const a = await stack.attempts.attempts.findById(attemptA);
    const b = await stack.attempts.attempts.findById(attemptB);
    expect(a?.attemptId).not.toBe(b?.attemptId);
    expect(a?.executionContractId).toBe(b?.executionContractId);
    expect(a?.selectedAgentRef).not.toBe(b?.selectedAgentRef);
    expect(b?.status).toBe("running");

    journal.close();
  });

  it("SR-02 stale docs-write selection + later commit slice → Start reject / zero process", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-sr02-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-sr02-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({ agents: [docs, commit], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [docs, commit],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal,
        managedRepoRootBase: managedBase,
      },
      resolveProjectRepositoryBinding: async () => ({
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: M4_TEST_BASE_HEAD_SHA,
      }),
      listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);

    // Select B as docs-write while FS Evidence not yet present (profile = docs-write).
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:sr-b",
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-sr-b",
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error("select failed");

    // Then Attempt A succeeds + Evidence appears → current profile becomes commit.
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: "xat:sr-a",
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:sr-a",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: "xat:sr-a",
      }),
    );

    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:sr-b",
      attemptId: "xat:sr-b",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-sr");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:sr-git",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-sr",
    });
    const gitCnf = await stack.decisions.confirmations.findById("cfm:sr-git");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:sr-b",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    expect(launchPort.calls).toHaveLength(0);
    const still = await stack.attempts.attempts.findById("xat:sr-b");
    expect(still?.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    journal.close();
  });

  it("FS→SHA still requires verified git:local_commit Evidence", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        attempts: [],
        priorAttemptId: "xat:a",
        expectedParentSha: M4_TEST_BASE_HEAD_SHA,
        repositoryRef: "acme/widget",
        requiredPaths: [TARGET_PATH],
        evidence: [
          docsWriteEvidence({
            evidenceId: "ev:a",
            projectId: "prj:campus360-oa",
            cycleInstanceId: "cyc:std-001",
            executionContractId: "xct:gc-ab",
            executionAttemptId: "xat:a",
          }),
        ],
      }),
    ).toBe(false);
    expect(
      resolvePreCommitWorkspaceContinuation({
        currentAttemptId: "xat:push",
        executionContractId: "xct:gc-ab",
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        attempts: [
          succeededAttempt({
            attemptId: "xat:a",
            executionContractId: "xct:gc-ab",
            executionContractVersion: 1,
          }),
        ],
        evidence: [
          docsWriteEvidence({
            evidenceId: "ev:a",
            projectId: "prj:campus360-oa",
            cycleInstanceId: "cyc:std-001",
            executionContractId: "xct:gc-ab",
            executionAttemptId: "xat:a",
          }),
        ],
        authorizedEffects: ["git.push"],
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "git.commit",
        ],
      }).required,
    ).toBe(true);
  });
});
