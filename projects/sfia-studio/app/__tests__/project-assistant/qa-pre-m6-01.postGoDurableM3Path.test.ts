/**
 * QA-PRE-M6-01 — post-GO canonical path uses durable M3 + DecisionBasis.
 * Legacy Proposal prepare remains STALE fail-closed after LPS advance.
 * @vitest-environment node
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  prepareF3Fixture,
  prepareM3FromDecision,
  F3_ADAPTER_ID,
  fixtureSafeM3ResolutionProfile,
} from "@/features/project-assistant/f3";
import {
  F3_ACTION,
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
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

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
  nextProjectId(): string {
    this.project += 1;
    return `prj:qa-pre-m6-01-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:qa-pre-m6-01-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:qa-pre-m6-01-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T18:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedGoWithLpsAdvance(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "QA-PRE-M6-01",
    objective: "Durable post-GO path",
    context: "ZERO REAL fixture-safe",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "QAPM601",
    idempotencyKey: `qa-pre-m6-01-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overviewBefore = await runtime.getProject(projectId);
  expect(overviewBefore.ok).toBe(true);
  if (!overviewBefore.ok) throw new Error("overview failed");

  const proposalSnapshot = {
    projectId,
    lpsId: overviewBefore.livingState.id,
    lpsVersion: overviewBefore.livingState.version,
    doctrineDigest: overviewBefore.doctrine.digest,
  };

  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Préparer architecture",
    objective: "Wire durable M3 after GO",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "QA-PRE-M6-01",
    scope: "fixture-docs",
    outOfScope: ["REAL", "git write"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "resolved M3 + attempt",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
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

  const overviewAfter = await runtime.getProject(projectId);
  expect(overviewAfter.ok).toBe(true);
  if (!overviewAfter.ok) throw new Error("overview after failed");

  const currentContext = {
    projectId,
    lpsId: overviewAfter.livingState.id,
    lpsVersion: overviewAfter.livingState.version,
    doctrineDigest: overviewAfter.doctrine.digest,
  };

  return {
    projectId,
    proposal: go.proposal,
    decision: go.decision,
    proposalSnapshot,
    currentContext,
    lpsBefore: overviewBefore.livingState.version,
    lpsAfter: overviewAfter.livingState.version,
    runtime,
  };
}

describe("QA-PRE-M6-01 — durable post-GO path vs Proposal STALE", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("T1 — GO advances LPS and persists Decision + DecisionBasis", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    expect(seeded.lpsAfter).toBeGreaterThan(seeded.lpsBefore);
    expect(seeded.decision.humanDecisionStatus).toBe("accepted");
    expect(seeded.decision.readyForNextGatedStep).toBe(true);
    const durable =
      await runtime.oa!.decisionServices.getHumanDecision.execute({
        decisionId: seeded.decision.decisionId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.status).toBe("accepted");
    expect(durable.decision.decisionBasis).toBeTruthy();
    expect(seeded.proposalSnapshot.lpsVersion).toBe(seeded.lpsBefore);
    expect(seeded.currentContext.lpsVersion).toBe(seeded.lpsAfter);
  });

  it("T2 — legacy prepareF3Fixture remains STALE after LPS advance", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    const legacy = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    expect(legacy.ok).toBe(false);
    if (legacy.ok) return;
    expect(legacy.code).toBe("STALE");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T3 — prepareM3FromDecision succeeds after GO at LPS N+1", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    const prepared = await prepareM3FromDecision({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionAllowed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(prepared.payload.contract.constraints).toContain("PREPARE_ONLY");
  });

  it("T4/T5/T6/T7/T8/T10 — resolve successor, confirmation required, execute once, replay safe, no Proposal persistence", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGoWithLpsAdvance(runtime);
    const profile = fixtureSafeM3ResolutionProfile();
    expect(profile.action).toBe(F3_ACTION);
    expect(profile.target).toBe(F3_TARGET);
    expect(profile.scope).toBe(F3_SCOPE);

    const resolvedPath = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(resolvedPath.ok).toBe(true);
    if (!resolvedPath.ok) return;

    expect(resolvedPath.payload.confirmationRequired).toBe(true);
    expect(resolvedPath.payload.executionPerformed).toBe(false);
    expect(resolvedPath.payload.attemptCreated).toBe(false);
    expect(resolvedPath.payload.successor.action).toBe(F3_ACTION);
    expect(resolvedPath.payload.successor.target).toBe(F3_TARGET);
    expect(resolvedPath.payload.successor.scope).toBe(F3_SCOPE);
    expect(resolvedPath.payload.successor.requiredAuthority).toBe("MORRIS");
    expect(resolvedPath.payload.successor.supersedesExecutionContractId).toBe(
      resolvedPath.payload.original.executionContractId,
    );
    expect(resolvedPath.payload.successor.constraints).not.toContain(
      "PREPARE_ONLY",
    );
    expect(resolvedPath.payload.successor.requiredCapabilities).not.toContain(
      "cap:unresolved",
    );

    // T5/T6 — resolve alone: zero Attempts
    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId:
          resolvedPath.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    // T7 — explicit Confirmation + fixture-safe execute
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolvedPath.payload.successor.executionContractId,
      expectedContractVersion: resolvedPath.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.proposal).toBeNull();
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(executed.payload.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.payload.recommendation.kind).toBe("recommendation");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.reusedExistingAttempt).toBe(false);
    const firstLaunch = executed.payload.attempt.launchCount;
    expect(firstLaunch).toBe(1);

    // T8 — duplicate start / replay reinjects without second launch
    const replay = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolvedPath.payload.successor.executionContractId,
      expectedContractVersion: resolvedPath.payload.successor.version,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        projectServices: runtime.oa!.projectServices,
        productDurablePath: runtime.oa!.productDurablePath,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.payload.reusedExistingAttempt).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(firstLaunch);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    const listedAfter =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId:
          resolvedPath.payload.successor.executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (listedAfter.ok) {
      const succeeded = listedAfter.attempts.filter(
        (a) => a.status === "succeeded",
      );
      expect(succeeded).toHaveLength(1);
    }
  });

  it("T9 — rejected HumanDecision NO_GO blocks M3 product path", async () => {
    const runtime = await createRuntime();
    const created = await runtime.createProject({
      name: "QA-PRE-M6-01 NO_GO",
      objective: "Reject path",
      context: "negative",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "QANOG",
      idempotencyKey: `qa-nogo-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "x",
      objective: "x",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      rationale: "x",
      scope: "fixture",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "x",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const noGo = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.decision.readyForNextGatedStep).toBe(false);

    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId: noGo.decision.decisionId,
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DECISION_NOT_CURRENT");
  });
});
