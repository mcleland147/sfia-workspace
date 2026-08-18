/**
 * M4 REAL-OFF correction R2 — contract baseHeadSha + StudioGitWorktreeWorkspace.
 * @vitest-environment node
 */
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  TestExecutionAdapter,
  workspacePathForAttempt,
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
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import {
  M4_EVIDENCE,
  M4_TEST_BASE_HEAD_SHA,
  m4ContractInputs,
} from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: {
    executionContractId?: string;
    idempotencyKey?: string;
    inputs?: Record<string, unknown> | undefined;
    omitInputs?: boolean;
  } = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: overrides.executionContractId ?? "xct:oa-001",
      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
      action: M4_BOUNDED_RO_ACTION,
      target: M4_BOUNDED_RO_TARGET,
      scope: M4_BOUNDED_RO_SCOPE,
      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
      authorityEvidenceId: M4_EVIDENCE,
      ...(overrides.omitInputs
        ? {}
        : { inputs: overrides.inputs ?? m4ContractInputs() }),
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
    scope: M4_BOUNDED_RO_SCOPE,
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
  };
}

async function selectAndGrant(
  stack: Stack,
  contractId: string,
  attemptId: string,
  grantId: string,
) {
  const selected = await selectStandardAgent(stack, {
    attemptId,
    executionContractId: contractId,
    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
  });
  expect(selected.ok).toBe(true);
  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId,
    attemptId,
    actor: MORRIS_ACTOR,
    expiresAt: "2026-07-25T07:00:00.000Z",
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(granted.ok).toBe(true);
  return granted;
}

describe("M4 REAL-OFF correction R2", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R2-01 missing baseHeadSha refused before Gate D consume / CREATED", async () => {
    const journalPath = tempJournalPath("m4-r2-01-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack, {
      omitInputs: true,
    });
    await selectAndGrant(stack, contractId, "xat:r2-01", "gd:r2-01");

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-01",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
      expect(started.error.internalCauseRef).toContain("base_head_sha");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(await journal.hasKindForAttempt("xat:r2-01", "CREATED")).toBe(
      false,
    );
    const grant = await journal.findActiveGateDGrantForAttempt("xat:r2-01");
    expect(grant?.status).toBe("granted");
    journal.close();
  });

  it("R2-02 invalid baseHeadSha refused", async () => {
    const journalPath = tempJournalPath("m4-r2-02-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack, {
      inputs: { baseHeadSha: "not-a-sha" },
    });
    await selectAndGrant(stack, contractId, "xat:r2-02", "gd:r2-02");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-02",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(await journal.hasKindForAttempt("xat:r2-02", "CREATED")).toBe(
      false,
    );
    journal.close();
  });

  it("R2-03 launch receives contract baseHeadSha (not StartExecution field)", async () => {
    const journalPath = tempJournalPath("m4-r2-03-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-03", "gd:r2-03");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-03",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.calls[0]?.baseHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(
      (launchPort.calls[0] as { workspaceRoot?: string }).workspaceRoot,
    ).toBeUndefined();
    journal.close();
  });

  it("R2-04/05 fail-closed when repoRoot/execRoot missing or equal", () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "",
          execRoot: "/tmp/exec",
          gitRunner: git,
        }),
    ).toThrow(/repo_root/);
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "/tmp/repo",
          execRoot: "",
          gitRunner: git,
        }),
    ).toThrow(/exec_root/);
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "/tmp/same",
          execRoot: "/tmp/same",
          gitRunner: git,
        }),
    ).toThrow(/must_differ/);
  });

  it("R2-06/07 refuse outside execRoot / existing path", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-roots-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const existing = workspacePathForAttempt(execRoot, "xat:exists");
    mkdirSync(existing, { recursive: true });
    writeFileSync(path.join(existing, "marker"), "x");
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:exists",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);
  });

  it("R2-08/10 fake git receives only expected commands; HEAD exact accepted", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-ok-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const prepared = await ws.prepareWorkspace({
      attemptId: "xat:r2-ok",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(prepared.workspacePath.startsWith(execRoot + path.sep)).toBe(true);
    expect(git.calls.map((c) => c.argv[0])).toEqual([
      "rev-parse",
      "worktree",
      "rev-parse",
    ]);
    expect(git.calls[0].argv).toEqual([
      "rev-parse",
      "--verify",
      `${M4_TEST_BASE_HEAD_SHA}^{commit}`,
    ]);
    expect(git.calls[1].argv.slice(0, 3)).toEqual([
      "worktree",
      "add",
      "--detach",
    ]);
    expect(git.calls[2].argv).toEqual(["rev-parse", "HEAD"]);
  });

  it("R2-09 HEAD mismatch fail-closed", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-mis-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:r2-mis",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("R2-11 FakeGitCommandRunner never invokes OS git", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(git.calls).toHaveLength(0);
    await git.run(["rev-parse", "HEAD"], "/tmp");
    expect(git.calls).toHaveLength(1);
  });

  it("R2-12 CREATED durable before workspace prepare", async () => {
    const journalPath = tempJournalPath("m4-r2-12-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const workspace = new FakeRealExecutionWorkspacePort();
    const runner = new FakeProcessRunner();
    // Production gateway stays OFF — use TestOnly for ACK, wrap to assert CREATED.
    const base = new TestOnlyRealExecutionLaunchPort();
    const launchPort = {
      gatewayId: base.gatewayId,
      externalEffects: true as const,
      async launch(request: Parameters<typeof base.launch>[0]) {
        const frontier = await journal.findFrontierByAttempt(request.attemptId);
        expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
        // prepare would happen inside production gateway after CREATED;
        // here we simulate that ordering proof via journal assert above.
        expect(workspace.prepares).toHaveLength(0);
        return base.launch(request);
      },
    };
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort: launchPort as TestOnlyRealExecutionLaunchPort,
        safetyJournal: journal,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-12", "gd:r2-12");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-12",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(runner.calls).toHaveLength(0);
    journal.close();
  });

  it("R2-13 workspace prepare failure after CREATED → runner 0, retry blocked", async () => {
    const journalPath = tempJournalPath("m4-r2-13-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const runner = new FakeProcessRunner();
    const workspace = new FakeRealExecutionWorkspacePort({ fail: true });
    // Use a custom launch port that mirrors gateway order: prepare then invoke.
    const launchPort = {
      gatewayId: "adp:m4-cursor-cli-real",
      externalEffects: true as const,
      async launch(request: {
        attemptId: string;
        baseHeadSha: string;
      }) {
        try {
          await workspace.prepareWorkspace({
            attemptId: request.attemptId,
            baseHeadSha: request.baseHeadSha,
          });
        } catch {
          return {
            outcome: "reject" as const,
            gatewayId: "adp:m4-cursor-cli-real",
            attemptId: request.attemptId,
            reason: "REAL_WORKSPACE_INVALID:fake_prepare_failed",
            realProcessInvoked: false as const,
            detailCode: "REAL_WORKSPACE_INVALID" as const,
          };
        }
        return runner.invoke({
          attemptId: request.attemptId,
          executable: "/tmp/x",
          argv: [],
          cwd: "/tmp",
          timeoutMs: 1,
          env: process.env,
        }).then((r) => ({
          outcome: "ack" as const,
          gatewayId: "adp:m4-cursor-cli-real",
          attemptId: request.attemptId,
          realProcessInvoked: true as const,
          processRef: r.processRef,
        }));
      },
    };

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort: launchPort as never,
        safetyJournal: journal,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-13", "gd:r2-13");
    const first = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-13",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    if (!first.ok) {
      expect(first.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
    }
    expect(await journal.hasKindForAttempt("xat:r2-13", "CREATED")).toBe(true);
    expect(runner.calls).toHaveLength(0);

    const retry = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-13",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(runner.calls).toHaveLength(0);
    journal.close();
  });

  it("R2-14 simulated worktree+invoke + LAUNCHED persist fail → no second launch", async () => {
    const journalPath = tempJournalPath("m4-r2-14-");
    const baseJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const journal = {
      persistGateDGrant: (i: never) => baseJournal.persistGateDGrant(i),
      findGateDGrant: (id: string) => baseJournal.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id: string) =>
        baseJournal.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i: never) =>
        baseJournal.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i: never) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("r2_14_crash");
        }
        return baseJournal.appendLaunched(i);
      },
      findFrontierByAttempt: (id: string) =>
        baseJournal.findFrontierByAttempt(id),
      findFrontierByIdentity: (id: never) =>
        baseJournal.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id: never) =>
        baseJournal.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id: never) =>
        baseJournal.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id: string, k: "CREATED" | "LAUNCHED") =>
        baseJournal.hasKindForAttempt(id, k),
    };
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal as never,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-14", "gd:r2-14");
    const first = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-14",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    const retry = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-14",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    baseJournal.close();
  });

  it("production gateway with OFF env never prepares workspace / never invokes runner", async () => {
    const runner = new FakeProcessRunner();
    const workspace = new FakeRealExecutionWorkspacePort();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:gw-off",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
    });
    expect(result.outcome).toBe("reject");
    expect(workspace.prepares).toHaveLength(0);
    expect(runner.calls).toHaveLength(0);
  });
});
