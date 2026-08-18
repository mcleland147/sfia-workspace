/**
 * Fail-closed deterministic Cursor boundary — TEST/E2E composition.
 * ZERO Cursor REAL process. ZERO OpenAI live.
 * @vitest-environment node
 */
import path from "node:path";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  rehydrateEvidenceOutcomeFromLps,
  selectProductM3ResolutionProfile,
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
  MemoryLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE,
  isDeterministicCursorBoundaryEnabled,
  TestOnlyDeterministicCursorLaunchPort,
} from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { FakeGitCommandRunner } from "../oa/execution-attempt/support/fakeSpawnAndGit";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const TEST_BOUNDED_BASE_HEAD_SHA =
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

const DET_ENV_KEYS = [
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY",
  "SFIA_STUDIO_E2E_QA_CONTROL",
  "OPS1_CONVERSATION_PROVIDER",
  "OPS1_E2E_ALLOW_DIRTY_PRINCIPAL",
  "SFIA_STUDIO_CURSOR_REAL",
  "OPS1_CURSOR_REAL",
  "SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES",
] as const;

function clearDetEnv(): void {
  for (const key of DET_ENV_KEYS) {
    delete process.env[key];
  }
}

function armDetEnv(overrides: Record<string, string> = {}): NodeJS.ProcessEnv {
  const next: Record<string, string> = {
    SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
    SFIA_STUDIO_E2E_QA_CONTROL: "1",
    OPS1_CONVERSATION_PROVIDER: "fake",
    OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
    ...overrides,
  };
  Object.assign(process.env, next);
  return { ...process.env, ...next };
}

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:det-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:det-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:det-${this.prefix}-${this.correlation}`;
  }
}

class CapturingFakeProvider extends FakeConversationProvider {
  readonly completeCalls: ProviderChatMessage[][] = [];
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
      launchPort: TestOnlyDeterministicCursorLaunchPort;
      safetyJournal: MemoryLaunchSafetyJournal;
    };
  },
): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-det-${prefix}-`));
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-17T12:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    productDbPath: path.join(dir, "oa-product.sqlite"),
    realBoundary: options?.realBoundary,
  });
}

async function seedGo(runtime: RuntimeApplicationService, label: string) {
  const created = await runtime.createProject({
    name: `DET ${label}`,
    objective: "Deterministic cursor boundary tooling",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["TEST BOUNDARY ONLY"],
    shortReference: "DET",
    idempotencyKey: `det-${label}-${Date.now()}-${Math.random()}`,
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
    rephrasedRequest: "Deterministic boundary",
    objective: "B1-B3 tooling",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "tooling",
    scope: "boundary",
    outOfScope: ["LIVE REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "tooling",
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

describe("deterministic Cursor external-boundary substitution", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    clearDetEnv();
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    clearDetEnv();
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("N8 — refuses without QA env", () => {
    expect(
      isDeterministicCursorBoundaryEnabled({
        NODE_ENV: "test",
        SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
        OPS1_CONVERSATION_PROVIDER: "fake",
        OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      }),
    ).toBe(false);
    expect(
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "test",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          OPS1_CONVERSATION_PROVIDER: "fake",
          OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
        },
      }),
    ).toBeUndefined();
  });

  it("N9 — DETERMINISTIC + REAL is invalid", () => {
    expect(() =>
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "test",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          SFIA_STUDIO_CURSOR_REAL: "1",
        },
      }),
    ).toThrow(DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE);
  });

  it("N10 — production cannot enable the fake boundary", () => {
    expect(
      isDeterministicCursorBoundaryEnabled({
        NODE_ENV: "production",
        SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
        SFIA_STUDIO_E2E_QA_CONTROL: "1",
        OPS1_CONVERSATION_PROVIDER: "fake",
        OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      }),
    ).toBe(false);
    expect(
      composeStudioProductRealBoundary({
        env: {
          NODE_ENV: "production",
          SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY: "1",
          SFIA_STUDIO_E2E_QA_CONTROL: "1",
          OPS1_CONVERSATION_PROVIDER: "fake",
          OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
        },
      }),
    ).toBeUndefined();
  });

  it("selects bounded M3 profile without the REAL flag", () => {
    const env = armDetEnv();
    const selected = selectProductM3ResolutionProfile({ env });
    expect(selected.kind).toBe("bounded_read_only");
    expect(selectProductM3ResolutionProfile({ env: { NODE_ENV: "test" } }).kind).toBe(
      "fixture",
    );
  });

  it("composes TestOnly port, never StudioCursorRealLaunchGateway", () => {
    const boundary = composeStudioProductRealBoundary({ env: armDetEnv() });
    expect(boundary).toBeDefined();
    expect(boundary!.launchPort).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
    expect(boundary!.launchPort).not.toBeInstanceOf(StudioCursorRealLaunchGateway);
  });

  it("observe counter: pending, pending, then terminal — launch count 1", async () => {
    const port = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 2,
    });
    const ack = await port.launch({
      attemptId: "xat:det-1",
      executionContractId: "xct:det-1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:det",
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
    });
    expect(ack.outcome).toBe("ack");
    if (ack.outcome !== "ack") return;
    const first = await port.observe(ack.processRef);
    const second = await port.observe(ack.processRef);
    const third = await port.observe(ack.processRef);
    expect(first?.exitCode).toBeNull();
    expect(second?.exitCode).toBeNull();
    expect(third?.exitCode).toBe(0);
    expect(port.launchCallCount).toBe(1);
    port.reset();
    expect(port.launchCallCount).toBe(0);
    expect(port.observeCallCount).toBe(0);
  });

  it("D1 — quick success: spawn ACK then first observe is terminal", async () => {
    const port = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 0,
    });
    const ack = await port.launch({
      attemptId: "xat:det-d1",
      executionContractId: "xct:det-d1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:det-d1",
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
    });
    expect(ack.outcome).toBe("ack");
    if (ack.outcome !== "ack") return;
    const done = await port.observe(ack.processRef);
    expect(done?.exitCode).toBe(0);
    expect(done?.timedOut).toBe(false);
    expect(port.launchCallCount).toBe(1);
  });

  it("D3 — timeout uses the same snapshotted window, no relaunch", async () => {
    let now = 0;
    const port = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 99,
      nowMs: () => now,
    });
    const ack = await port.launch({
      attemptId: "xat:det-d3",
      executionContractId: "xct:det-d3",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:det-d3",
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
    });
    expect(ack.outcome).toBe("ack");
    if (ack.outcome !== "ack") return;
    now = 14 * 60 * 1000;
    const still = await port.observe(ack.processRef);
    expect(still?.timedOut).toBe(false);
    expect(still?.exitCode).toBeNull();
    now = 15 * 60 * 1000;
    const timed = await port.observe(ack.processRef);
    expect(timed?.timedOut).toBe(true);
    expect(timed?.exitCode).toBeNull();
    expect(port.launchCallCount).toBe(1);
  });

  it("D4 — nonzero exit is a failure observation, not success", async () => {
    const port = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 0,
      completionExitCode: 2,
    });
    const ack = await port.launch({
      attemptId: "xat:det-d4",
      executionContractId: "xct:det-d4",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:det-d4",
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
    });
    expect(ack.outcome).toBe("ack");
    if (ack.outcome !== "ack") return;
    const failed = await port.observe(ack.processRef);
    expect(failed?.exitCode).toBe(2);
    expect(failed?.timedOut).toBe(false);
    expect(failed?.stdout).toBe("");
    expect(port.launchCallCount).toBe(1);
  });

  it("D5 — observe unknown processRef returns null (registry unavailable)", async () => {
    const port = new TestOnlyDeterministicCursorLaunchPort();
    const missing = await port.observe("proc:missing");
    expect(missing).toBeNull();
    expect(await port.awaitCompletion("proc:missing")).toBeNull();
  });

  it("same product orchestration: running → pending refresh → terminal Evidence/RB/Nora", async () => {
    armDetEnv();
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora deterministic-boundary analysis"],
    });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("orch");
    const launchPort = runtime.oa!.executionAttemptServices.realBoundary
      ?.launchPort;
    expect(launchPort).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
    const port = launchPort as TestOnlyDeterministicCursorLaunchPort;
    const journal = runtime.oa!.executionAttemptServices.realBoundary!.safetyJournal;

    const seeded = await seedGo(runtime, "orch");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_READ_ONLY");

    const confirmDeps = {
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

    const first = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.payload.attempt.status).toBe("running");
    expect(first.payload.contract.status).toBe("executing");
    expect(first.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(first.payload.attempt.executionWindowClass).toBe("standard");
    expect(first.payload.attempt.resolvedMaxDurationMs).toBe(15 * 60 * 1000);
    expect(port.calls[0]?.timeoutMs).toBe(15 * 60 * 1000);
    expect(port.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    const attemptId = first.payload.attempt.attemptId;
    const contractId = first.payload.contract.executionContractId;

    const second = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.attemptId).toBe(attemptId);
    expect(second.payload.attempt.status).toBe("running");
    expect(second.payload.attempt.resolvedMaxDurationMs).toBe(15 * 60 * 1000);
    expect(port.launchCallCount).toBe(1);

    const third = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: contractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps,
    });
    expect(third.ok).toBe(true);
    if (!third.ok) return;
    expect(third.payload.reusedExistingAttempt).toBe(true);
    expect(third.payload.attempt.attemptId).toBe(attemptId);
    expect(third.payload.attempt.status).toBe("succeeded");
    expect(third.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(
      third.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:"),
    ).toBe(true);
    expect(port.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(provider.completeCalls.length).toBe(1);
    expect(third.payload.recommendation.analysisStatus).toBe("available");

    const frontiers = await journal.findFrontierByAttempt(attemptId);
    expect(frontiers.filter((row) => row.kind === "CREATED")).toHaveLength(1);
    expect(frontiers.filter((row) => row.kind === "LAUNCHED")).toHaveLength(1);

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((row) => row.evidenceId)).toContain(
      third.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((row) => row.reviewBundleId)).toContain(
      third.payload.reviewBundle.reviewBundleId,
    );
  });

  it("D4 product path — nonzero exit fails the same Attempt, no Evidence success", async () => {
    const launchPort = new TestOnlyDeterministicCursorLaunchPort({
      pendingObserveLimit: 0,
      completionExitCode: 2,
    });
    const runtime = createRuntime("d4", {
      realBoundary: {
        launchPort,
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "d4");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
        preferBoundedReadOnlyProfile: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: {
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
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("failed");
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(launchPort.launchCallCount).toBe(1);
  });
});
