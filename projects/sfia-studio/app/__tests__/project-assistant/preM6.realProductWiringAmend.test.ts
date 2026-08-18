/**
 * Cycle 8 Delivery Amend — Pre-M6 REAL product wiring (GAP-1…5).
 * Deterministic only. ZERO OpenAI live. ZERO Cursor REAL process.
 * @vitest-environment node
 */
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  deriveAttemptProvenance,
  fixtureSafeM3ResolutionProfile,
  prepareAndResolveM3ProductPath,
  rehydrateEvidenceOutcomeFromLps,
  F3_ADAPTER_ID,
  F3_MODE,
} from "@/features/project-assistant/f3";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "@/features/project-assistant/f3/constants";
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
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  NodeCursorProcessRunner,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
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

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:c8-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:c8-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:c8-${this.prefix}-${this.correlation}`;
  }
}

const TEST_BOUNDED_BASE_HEAD_SHA =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

class CountingFakeProvider extends FakeConversationProvider {
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
  realBoundary?: {
    launchPort: TestOnlyRealExecutionLaunchPort;
    safetyJournal: MemoryLaunchSafetyJournal;
  },
): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-c8-${prefix}-`));
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T18:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    realBoundary,
    productDbPath: path.join(dir, "oa-product.sqlite"),
  });
}

async function seedGo(runtime: RuntimeApplicationService, label: string) {
  const created = await runtime.createProject({
    name: `C8 ${label}`,
    objective: "Cycle 8 wiring amend",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "C8WIR",
    idempotencyKey: `c8-${label}-${Date.now()}-${Math.random()}`,
  });
  if (!created.ok) {
    throw new Error(`create failed: ${JSON.stringify(created)}`);
  }
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
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
    rephrasedRequest: "Préparer wiring",
    objective: "Cycle 8 amend",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "C8",
    scope: "wiring",
    outOfScope: ["LIVE REAL", "git write"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "wired gaps",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE LIVE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
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
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("GO failed");
  const after = await runtime.getProject(projectId);
  expect(after.ok).toBe(true);
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

describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.SFIA_STUDIO_CURSOR_REAL;
    delete process.env.OPS1_CURSOR_REAL;
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    assertStudioCursorRealOffForTests();
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("T1 — DEFAULT OFF: fixture profile, no realBoundary, no M4, no process", async () => {
    const runtime = createRuntime("t1");
    expect(isStudioCursorRealEnabled()).toBe(false);
    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
    expect(
      runtime.oa!.executionAttemptServices.grantRealExecutionGate,
    ).toBeUndefined();
    const agents = runtime.oa!.executionAttemptServices.registry.listAgents();
    expect(
      agents.map((a) => a.agentId),
    ).toEqual(["agt:f3-fixture"]);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    const seeded = await seedGo(runtime, "t1");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      mode: "REAL",
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      command: "cursor agent --force",
      real: true,
      deps: prepareDeps(runtime),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_FIXTURE");
    expect(prepared.payload.successor.action).toBe(F3_ACTION);
    expect(prepared.payload.successor.target).toBe(F3_TARGET);
    expect(prepared.payload.successor.scope).toBe(F3_SCOPE);
    expect(prepared.payload.successor.requiredCapabilities).toEqual([
      F3_CAPABILITY,
    ]);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T2 — REAL PROFILE STATIC WIRING is server-side and matches M4 descriptor", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const runtime = createRuntime("t2", {
      launchPort,
      safetyJournal: new MemoryLaunchSafetyJournal(),
    });
    const seeded = await seedGo(runtime, "t2");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      adapterRef: "adp:hostile-client",
      agentId: "agt:hostile",
      command: "rm -rf /",
      real: false,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_READ_ONLY");
    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_RO_ACTION);
    expect(prepared.payload.successor.target).toBe(M4_BOUNDED_RO_TARGET);
    expect(prepared.payload.successor.scope).toBe(M4_BOUNDED_RO_SCOPE);
    expect(prepared.payload.successor.requiredCapabilities).toEqual([
      M4_BOUNDED_RO_CAPABILITY,
    ]);
    const m4 = runtime.oa!.executionAttemptServices.registry.getAgent(
      M4_BOUNDED_RO_CURSOR_AGENT_ID,
    );
    expect(m4).toBeTruthy();
    expect(m4?.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(m4?.executionMode).toBe("cursor_cli_real");
    expect(m4?.trustLevel).toBe("bounded");
    expect(m4?.allowedActions).toEqual([M4_BOUNDED_RO_ACTION]);
    expect(m4?.allowedTargets).toEqual([M4_BOUNDED_RO_TARGET]);
    expect(m4?.allowedScopes).toEqual([M4_BOUNDED_RO_SCOPE]);
    expect(launchPort.launchCallCount).toBe(0);
    expect(prepared.payload.realExecution).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
  });

  it("T3 — GATE D REQUIRED: REAL contract without grant use-case does not call launchPort", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const runtime = createRuntime("t3", {
      launchPort,
      safetyJournal: new MemoryLaunchSafetyJournal(),
    });
    runtime.oa!.executionAttemptServices.grantRealExecutionGate = undefined;
    runtime.oa!.executionAttemptServices.grantGateD = undefined;
    const seeded = await seedGo(runtime, "t3");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("GATE_D_REQUIRED");
    expect(launchPort.launchCallCount).toBe(0);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T4 — REAL BOUNDARY REQUIRED: no silent fixture fallback", async () => {
    const runtime = createRuntime("t4");
    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
    const seeded = await seedGo(runtime, "t4");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_RO_ACTION);
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("REAL_BOUNDARY_REQUIRED");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T5 — TEST REAL LAUNCH ADAPTER: fake port once, zero NodeCursorProcessRunner", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    expect(launchPort.constructor.name).toBe("TestOnlyRealExecutionLaunchPort");
    expect(launchPort).not.toBeInstanceOf(StudioCursorRealLaunchGateway);
    expect(launchPort).not.toBeInstanceOf(NodeCursorProcessRunner);
    const runtime = createRuntime("t5", {
      launchPort,
      safetyJournal: new MemoryLaunchSafetyJournal(),
    });
    const seeded = await seedGo(runtime, "t5");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      command: "should-be-ignored",
      real: true,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(launchPort.launchCallCount).toBe(1);
    expect(launchPort.simulatedAckCount).toBe(1);
    expect(executed.payload.attempt.selectedAgentRef).toBe(
      M4_BOUNDED_RO_CURSOR_AGENT_ID,
    );
    expect(executed.payload.attempt.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.payload.attempt.executionMode).toBe("cursor_cli_real");
    expect(executed.payload.attempt.status).toBe("running");
    expect(executed.payload.attempt.realProcessInvoked).toBe(true);
    expect(executed.payload.realExecution).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("T6 / T9 — FIXTURE REGRESSION + honest fixture provenance", async () => {
    const provider = new CountingFakeProvider({
      scripted: ["[TEST/FAKE · NON LIVE] Reco post-evidence fixture"],
    });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("t6");
    const seeded = await seedGo(runtime, "t6");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const profile = fixtureSafeM3ResolutionProfile();
    expect(prepared.payload.successor.action).toBe(profile.action);
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.mode).toBe(F3_MODE);
    expect(executed.payload.attempt.adapterRef).toBe(F3_ADAPTER_ID);
    expect(executed.payload.attempt.realProcessInvoked).toBe(false);
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.evidence.evidenceId.startsWith("ev:f3-fixture:")).toBe(
      true,
    );
    expect(
      executed.payload.reviewBundle.reviewBundleId.startsWith("rb:f3-fixture:"),
    ).toBe(true);
    expect(executed.payload.recommendation.kind).toBe("recommendation");
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBeGreaterThan(0);
  });

  it("T7 — POST-EVIDENCE NORA via FakeConversationProvider after Evidence", async () => {
    const provider = new CountingFakeProvider({
      scripted: [
        "[TEST/FAKE · NON LIVE] Recommandation post-Evidence — pas une décision",
      ],
    });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("t7");
    const seeded = await seedGo(runtime, "t7");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime),
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
    expect(provider.completeCalls.length).toBeGreaterThanOrEqual(1);
    const haystack = provider.completeCalls
      .flat()
      .map((m) => m.content)
      .join("\n");
    expect(haystack).toContain(seeded.projectId);
    expect(haystack).toContain(executed.payload.evidence.evidenceId);
    expect(haystack).toContain(executed.payload.reviewBundle.reviewBundleId);
    expect(executed.payload.recommendation.kind).toBe("recommendation");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.analysisStatus).toBe("available");
    expect(executed.payload.recommendation.analysisText).toMatch(/Recommandation/i);
    const durable = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: seeded.decisionId,
    });
    expect(durable.ok).toBe(true);
  });

  it("T8 — PROVIDER FAILURE keeps Evidence/RB and does not invent a decision", async () => {
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("t8");
    const seeded = await seedGo(runtime, "t8");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime),
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
    expect(executed.payload.evidence.evidenceId.startsWith("ev:f3-fixture:")).toBe(
      true,
    );
    expect(executed.payload.reviewBundle.reviewBundleId.length).toBeGreaterThan(3);
    expect(executed.payload.recommendation.analysisStatus).toBe("unavailable");
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    const loaded = await runtime.oa!.evidenceReviewServices.evidenceReader.findById(
      executed.payload.evidence.evidenceId,
    );
    expect(loaded).toBeTruthy();
  });

  it("T10 — PROVENANCE REAL SIMULATED derives from Attempt, not env flag", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const runtime = createRuntime("t10", {
      launchPort,
      safetyJournal: new MemoryLaunchSafetyJournal(),
    });
    const previousFlag = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const seeded = await seedGo(runtime, "t10");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        boundedReadOnlyBaseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
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
    const recorded =
      await runtime.oa!.executionAttemptServices.recordExecutionResult.execute({
        attemptId: executed.payload.attempt.attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        resultRef: `res:m4-sim:${executed.payload.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
        technicalExitCode: 0,
      });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const agent = runtime.oa!.executionAttemptServices.registry.getAgent(
      recorded.attempt.selectedAgentRef,
    );
    const provenance = deriveAttemptProvenance({
      attempt: recorded.attempt,
      agent,
    });
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(provenance.mode).toBe("CURSOR_CLI_REAL");
    expect(provenance.adapterRef).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(provenance.executionMode).toBe("cursor_cli_real");
    expect(provenance.realProcessInvoked).toBe(true);
    expect(provenance.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(true);
    if (previousFlag === undefined) {
      delete process.env.SFIA_STUDIO_CURSOR_REAL;
    } else {
      process.env.SFIA_STUDIO_CURSOR_REAL = previousFlag;
    }
  });

  it("T11 — HOSTILE CLIENT cannot select adapter, command, workspace, or skip Confirmation", async () => {
    const runtime = createRuntime("t11");
    const seeded = await seedGo(runtime, "t11");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      agentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
      command: "cursor --workspace /etc",
      real: true,
      deps: prepareDeps(runtime),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.successor.action).toBe(F3_ACTION);
    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      command: "hostile",
      real: true,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.adapterRef).toBe(F3_ADAPTER_ID);
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
  });

  it("T12 — PERSISTENCE / REHYDRATE Evidence, RB, recommendation, LPS without migration", async () => {
    const provider = new CountingFakeProvider({
      scripted: ["[TEST/FAKE · NON LIVE] Analyse durable post-Evidence"],
    });
    setConversationProviderForTests(provider);
    const runtime = createRuntime("t12");
    const seeded = await seedGo(runtime, "t12");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime),
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
    expect(rehydrated.recommendation.kind).toBe("recommendation");
    expect(rehydrated.recommendation.decisionCreated).toBe(false);
    expect(rehydrated.recommendation.analysisText).toMatch(/Analyse durable/i);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.evidenceIds).toContain(
      executed.payload.evidence.evidenceId,
    );
  });
});
