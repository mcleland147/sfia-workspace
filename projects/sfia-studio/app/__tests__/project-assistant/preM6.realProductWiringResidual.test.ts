/**
 * Cycle 8 residual closure — R1/R2/R3 deterministic simulation.
 * ZERO OpenAI live. ZERO Cursor REAL process.
 * @vitest-environment node
 */
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  rehydrateEvidenceOutcomeFromLps,
} from "@/features/project-assistant/f3";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  assertStudioCursorRealOffForTests,
  isStudioCursorRealEnabled,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  NodeCursorProcessRunner,
  StudioCursorRealLaunchGateway,
  type RealExecutionLaunchPort,
} from "@/lib/oa/execution-attempt";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
  FakeSpawnPrimitive,
} from "../oa/execution-attempt/support/fakeSpawnAndGit";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const TEST_BOUNDED_BASE_HEAD_SHA =
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:c8r-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:c8r-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:c8r-${this.prefix}-${this.correlation}`;
  }
}

const testEnv = (overrides: Record<string, string>): NodeJS.ProcessEnv =>
  ({ ...process.env, ...overrides }) as NodeJS.ProcessEnv;

class CapturingFakeProvider extends FakeConversationProvider {
  readonly completeCalls: ProviderChatMessage[][] = [];
  constructor(
    options: ConstructorParameters<typeof FakeConversationProvider>[0] = {},
  ) {
    super(options);
  }
  override async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.completeCalls.push(messages.map((m) => ({ ...m })));
    return super.complete(messages);
  }
}

function createRuntime(
  prefix: string,
  options?: {
    realBoundary?: {
      launchPort: TestOnlyRealExecutionLaunchPort;
      safetyJournal: MemoryLaunchSafetyJournal;
    };
    realBoundaryEnv?: NodeJS.ProcessEnv;
    realBoundaryComposition?: Parameters<
      typeof composeStudioProductRealBoundary
    >[0];
  },
): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-c8r-${prefix}-`));
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T18:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    realBoundary: options?.realBoundary,
    realBoundaryEnv: options?.realBoundaryEnv,
    realBoundaryComposition: options?.realBoundaryComposition,
    productDbPath: path.join(dir, "oa-product.sqlite"),
  });
}

async function seedGo(runtime: RuntimeApplicationService, label: string) {
  const created = await runtime.createProject({
    name: `C8R ${label}`,
    objective: "Cycle 8 residual closure",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["SIMULATED REAL ONLY"],
    shortReference: "C8RR",
    idempotencyKey: `c8r-${label}-${Date.now()}-${Math.random()}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("overview failed");
  const proposalSnapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Residual wiring",
    objective: "R1/R2/R3",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "residual",
    scope: "wiring",
    outOfScope: ["LIVE REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "closed gaps",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["ZERO LIVE"],
    morrisGateRequired: true,
    nextPossibleStep: "GO",
    contextSnapshot: proposalSnapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposalSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  if (!go.ok) throw new Error("go failed");
  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("overview after failed");
  return {
    projectId,
    decisionId: go.decision.decisionId,
    currentContext: {
      projectId,
      lpsId: after.livingState.id,
      lpsVersion: after.livingState.version,
      doctrineDigest: after.doctrine.digest,
    },
  };
}

function prepareDeps(
  runtime: RuntimeApplicationService,
  extra?: {
    preferBoundedReadOnlyProfile?: boolean;
    boundedReadOnlyBaseHeadSha?: string;
    gitCommandRunner?: FakeGitCommandRunner;
    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
  },
) {
  return {
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    executionContractServices: runtime.oa!.executionContractServices,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
    preferBoundedReadOnlyProfile: extra?.preferBoundedReadOnlyProfile,
    boundedReadOnlyBaseHeadSha: extra?.boundedReadOnlyBaseHeadSha,
    gitCommandRunner: extra?.gitCommandRunner,
    resolveBoundedReadOnlyHead: extra?.resolveBoundedReadOnlyHead,
  };
}

function confirmDeps(runtime: RuntimeApplicationService) {
  return {
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    executionContractServices: runtime.oa!.executionContractServices,
    executionAttemptServices: runtime.oa!.executionAttemptServices,
    evidenceReviewServices: runtime.oa!.evidenceReviewServices,
    fixtureAdapter: runtime.oa!.fixtureAdapter,
    nowIso: () => runtime.oa!.clock.nowIso(),
    projectServices: runtime.oa!.projectServices,
    productDurablePath: runtime.oa!.productDurablePath,
    forceM3Authority: true,
  };
}

describe("Cycle 8 — Pre-M6 REAL product wiring residual closure", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    delete process.env.SFIA_STUDIO_CURSOR_REAL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("T-R1-OFF — live boundary factory returns undefined when flag OFF", () => {
    expect(
      composeStudioProductRealBoundary({
        env: testEnv({ SFIA_STUDIO_CURSOR_REAL: "0" }),
      }),
    ).toBeUndefined();
    const runtime = createRuntime("r1-off", {
      realBoundaryEnv: testEnv({ SFIA_STUDIO_CURSOR_REAL: "0" }),
    });
    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
    expect(runtime.oa!.executionAttemptServices.grantRealExecutionGate).toBeUndefined();
  });

  it("T-R1-CONSTRUCT — env ON builds existing M4 classes without launch/git/spawn", () => {
    const spawn = new FakeSpawnPrimitive();
    const git = new FakeGitCommandRunner();
    const workspace = new FakeRealExecutionWorkspacePort();
    const journal = new MemoryLaunchSafetyJournal();
    const boundary = composeStudioProductRealBoundary({
      env: testEnv({ SFIA_STUDIO_CURSOR_REAL: "1", HOME: os.tmpdir() }),
      processRunner: new NodeCursorProcessRunner({
        spawnPrimitive: spawn.asSpawnPrimitive(),
      }),
      workspacePort: workspace,
      gitRunner: git,
      safetyJournal: journal,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
      repoRoot: mkdtempSync(path.join(os.tmpdir(), "sfia-c8r-repo-")),
      execRoot: mkdtempSync(path.join(os.tmpdir(), "sfia-c8r-exec-")),
    });
    expect(boundary).toBeDefined();
    expect(boundary!.launchPort).toBeInstanceOf(StudioCursorRealLaunchGateway);
    expect(spawn.calls.length).toBe(0);
    expect(git.calls.length).toBe(0);
    expect(workspace.prepares.length).toBe(0);
  });

  it("T-R2-HEAD — server fake git HEAD is pinned into ExecutionContract.inputs", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
    });
    const runtime = createRuntime("r2-head", {
      realBoundary: {
        launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r2-head");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const loaded =
      await runtime.oa!.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(
      (loaded.contract.inputs as { baseHeadSha?: string }).baseHeadSha,
    ).toBe(TEST_BOUNDED_BASE_HEAD_SHA.toLowerCase());
    expect(git.calls.some((c) => c.argv[0] === "rev-parse")).toBe(true);
  });

  it("T-R2-HOSTILE — client baseHeadSha is ignored", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
    });
    const runtime = createRuntime("r2-hostile");
    const seeded = await seedGo(runtime, "r2-hostile");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      baseHeadSha: "cccccccccccccccccccccccccccccccccccccccc",
      workspace: "/tmp/hostile",
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const loaded =
      await runtime.oa!.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(
      (loaded.contract.inputs as { baseHeadSha?: string }).baseHeadSha,
    ).toBe(TEST_BOUNDED_BASE_HEAD_SHA.toLowerCase());
  });

  it("T-R2-INVALID — invalid server HEAD fails closed before launch", async () => {
    const git = new FakeGitCommandRunner({ baseHeadSha: "not-a-sha" });
    const runtime = createRuntime("r2-invalid", {
      realBoundary: {
        launchPort: new TestOnlyRealExecutionLaunchPort(),
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r2-invalid");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("BASE_HEAD_SHA_INVALID");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T-R3-PENDING — simulated ACK stays running without Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({ holdCompletion: true });
    const runtime = createRuntime("r3-pending", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-pending");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("running");
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(launchPort.launchCallCount).toBe(1);
  });

  it("T-R3-NONZERO — completion exit != 0 yields terminal failure, no Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 2,
    });
    const runtime = createRuntime("r3-nonzero", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-nonzero");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("failed");
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(executed.payload.recommendation.analysisStatus).toBe("not_attempted");
  });

  it("T-R3-TIMEOUT — timedOut completion yields timeout/failure without Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionTimedOut: true,
    });
    const runtime = createRuntime("r3-timeout", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-timeout");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(["timeout", "failed"]).toContain(executed.payload.attempt.status);
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
  });

  it("T-R3-NO-AWAIT — launch port without awaitCompletion fails closed", async () => {
    const noAwaitPort: RealExecutionLaunchPort = {
      gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
      externalEffects: true,
      async launch(request) {
        return {
          outcome: "ack",
          gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
          attemptId: request.attemptId,
          realProcessInvoked: true,
          processRef: `proc:no-await:${request.attemptId}`,
        };
      },
      async observe() {
        return null;
      },
    };
    const runtime = createRuntime("r3-no-await", {
      realBoundary: {
        launchPort: noAwaitPort as never,
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r3-no-await");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("REAL_AWAIT_COMPLETION_REQUIRED");
  });

  it("T-R3-PROVIDER-FAILURE — simulated success keeps Evidence/RB, Nora unavailable", async () => {
    const provider = new CapturingFakeProvider({ failOnCall: 1 });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 0,
      completionStdout: "cursor-readonly-stdout",
    });
    const runtime = createRuntime("r3-provider-fail", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-provider-fail");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(executed.payload.recommendation.analysisStatus).toBe("unavailable");
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
  });

  it("T-R3-E2E-SUCCESS — one continuous simulated REAL chain through Nora + rehydrate", async () => {
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora post-Cursor simulated stdout analysis"],
    });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 0,
      completionStdout: "SIMULATED_CURSOR_STDOUT_FOR_NORA",
      completionStderr: "",
    });
    const runtime = createRuntime("r3-e2e", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-e2e");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;

    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.contract.status).toBe("completed");
    expect(executed.payload.attempt.resultRef).toBeTruthy();
    expect(executed.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(executed.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:")).toBe(
      true,
    );
    expect(provider.completeCalls.length).toBe(1);
    const userPayload = provider.completeCalls[0]?.find((m) => m.role === "user")
      ?.content;
    expect(userPayload).toContain("SIMULATED_CURSOR_STDOUT_FOR_NORA");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.analysisStatus).toBe("available");

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
      executed.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
      executed.payload.reviewBundle.reviewBundleId,
    );
    expect(rehydrated.recommendation?.analysisText).toContain("Nora post-Cursor");
  });

  it("T-R3-ASYNC-CONTINUATION — spawn ACK then later resume SAME running Attempt without relaunch", async () => {
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora post-async-completion simulated analysis"],
    });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: true,
    });
    const journal = new MemoryLaunchSafetyJournal();
    const runtime = createRuntime("r3-async", {
      realBoundary: { launchPort, safetyJournal: journal },
    });
    const seeded = await seedGo(runtime, "r3-async");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const decisionsBefore = await runtime.oa!.decisionServices.listDecisionHistory.execute(
      { projectId: seeded.projectId },
    );
    expect(decisionsBefore.ok).toBe(true);
    if (!decisionsBefore.ok) return;
    const contractsBefore =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId: seeded.projectId },
      );
    expect(contractsBefore.ok).toBe(true);
    if (!contractsBefore.ok) return;

    const first = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    expect(first.payload.attempt.status).toBe("running");
    expect(first.payload.contract.status).toBe("executing");
    expect(first.payload.attempt.resultRef).toBeFalsy();
    expect(first.payload.attempt.executionWindowClass).toBe("standard");
    expect(first.payload.attempt.resolvedMaxDurationMs).toBe(15 * 60 * 1000);
    expect(launchPort.calls[0]?.timeoutMs).toBe(15 * 60 * 1000);
    expect(first.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(first.payload.reviewBundle.reviewBundleId).toBe("rb:pending-real");
    expect(first.payload.recommendation.analysisStatus).toBe("not_attempted");
    expect(first.payload.recommendation.decisionCreated).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(provider.completeCalls.length).toBe(0);

    const attemptIdX = first.payload.attempt.attemptId;
    const contractIdY = first.payload.contract.executionContractId;
    expect(contractIdY).toBe(prepared.payload.successor.executionContractId);

    const frontiersAfterAck = await journal.findFrontierByAttempt(attemptIdX);
    expect(frontiersAfterAck.filter((r) => r.kind === "CREATED")).toHaveLength(1);
    expect(frontiersAfterAck.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
    const launched = frontiersAfterAck.find((r) => r.kind === "LAUNCHED");
    expect(launched?.processRef).toBeTruthy();
    const processRef = launched!.processRef!;
    expect(processRef.length).toBeGreaterThan(0);

    const attemptsAfterAck =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: contractIdY,
      });
    expect(attemptsAfterAck.ok).toBe(true);
    if (!attemptsAfterAck.ok) return;
    expect(attemptsAfterAck.attempts).toHaveLength(1);
    expect(attemptsAfterAck.attempts[0]?.attemptId).toBe(attemptIdX);

    launchPort.resolveSimulatedCompletion(processRef, {
      exitCode: 0,
      stdout: "SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA",
      stderr: "",
    });

    const second = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractIdY,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;

    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.attemptId).toBe(attemptIdX);
    expect(second.payload.contract.executionContractId).toBe(contractIdY);
    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(second.payload.attempt.status).toBe("succeeded");
    expect(second.payload.attempt.resultRef).toBeTruthy();
    expect(second.payload.contract.status).toBe("completed");
    expect(second.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(
      second.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:"),
    ).toBe(true);
    expect(provider.completeCalls.length).toBe(1);
    const userPayload = provider.completeCalls[0]?.find((m) => m.role === "user")
      ?.content;
    expect(userPayload).toContain("SIMULATED_CURSOR_ASYNC_COMPLETION_FOR_NORA");
    expect(second.payload.recommendation.executionAuthority).toBe(false);
    expect(second.payload.recommendation.decisionCreated).toBe(false);
    expect(second.payload.recommendation.analysisStatus).toBe("available");

    const frontiersAfterResume = await journal.findFrontierByAttempt(attemptIdX);
    expect(frontiersAfterResume.filter((r) => r.kind === "CREATED")).toHaveLength(1);
    expect(frontiersAfterResume.filter((r) => r.kind === "LAUNCHED")).toHaveLength(1);
    expect(frontiersAfterResume.find((r) => r.kind === "LAUNCHED")?.processRef).toBe(
      processRef,
    );

    const attemptsAfterResume =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: contractIdY,
      });
    expect(attemptsAfterResume.ok).toBe(true);
    if (!attemptsAfterResume.ok) return;
    expect(attemptsAfterResume.attempts).toHaveLength(1);
    expect(attemptsAfterResume.attempts[0]?.attemptId).toBe(attemptIdX);

    const decisionsAfter = await runtime.oa!.decisionServices.listDecisionHistory.execute(
      { projectId: seeded.projectId },
    );
    expect(decisionsAfter.ok).toBe(true);
    if (!decisionsAfter.ok) return;
    expect(decisionsAfter.decisions).toHaveLength(decisionsBefore.decisions.length);

    const contractsAfter =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId: seeded.projectId },
      );
    expect(contractsAfter.ok).toBe(true);
    if (!contractsAfter.ok) return;
    expect(contractsAfter.contracts).toHaveLength(contractsBefore.contracts.length);

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
      second.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
      second.payload.reviewBundle.reviewBundleId,
    );
    expect(rehydrated.recommendation?.analysisText).toContain(
      "Nora post-async-completion",
    );
  });
});
