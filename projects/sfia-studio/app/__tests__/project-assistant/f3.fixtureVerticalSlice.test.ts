/** @vitest-environment node */
/**
 * F3 native fixture vertical slice — AC-F3-FIX-01…22 coverage (practical).
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteF3Fixture,
  prepareF3Fixture,
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_MODE,
} from "@/features/project-assistant/f3";
import { F3_SCOPE } from "@/features/project-assistant/f3/constants";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
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
    return `prj:f3-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:f3-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:f3-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-11T16:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedApprovedGo(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "Projet F3 Fixture",
    objective: "Vertical slice fixture",
    context: "F3 process-local",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "F3F",
    idempotencyKey: `f3-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview failed");

  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Préparer fixture F3",
    objective: "Wire T-A4/5/6 fixture",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "F3 fixture slice",
    scope: "fixture-docs",
    outOfScope: ["REAL", "git write"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "fixture attempt + evidence",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
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

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposal.contextSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("GO failed");
  return { projectId, proposal: go.proposal, decision: go.decision, runtime, overview };
}

describe("F3 native fixture vertical slice", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("AC-F3-FIX-01/02 F2 GO remains prepare-only — no Attempt after GO alone", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    expect(seeded.decision.executionPerformed).toBe(false);
    expect(seeded.decision.readyForNextGatedStep).toBe(true);

    const listed =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: "xct:f3:none",
      });
    // No contracts yet; stack has fixture adapter with 0 launches
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(runtime.oa!.fixtureAdapter.externalEffects).toBe(false);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
    void listed;
  });

  it("AC-F3-FIX-03/04 PREPARE builds+validates contract without Select/Start", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe(F3_MODE);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.contract.status).toBe("confirmation_required");
    expect(prepared.payload.contract.scope).toBe(F3_SCOPE);
    expect(prepared.payload.contract.constraints).toContain("FIXTURE ONLY");
    expect(prepared.payload.contract.constraints).toContain("NO REAL");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);

    const attempts =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toHaveLength(0);
  });

  it("AC-F3-FIX-05 hostile REAL/adapter/agent fields do not change FIXTURE path", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      mode: "REAL",
      adapterRef: "adp:cursor-real",
      agentId: "agt:cursor",
      command: "rm -rf /",
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("FIXTURE");
    expect(prepared.payload.labels.cursorRealBlocked).toBe("CURSOR REAL BLOQUÉ");
  });

  it("AC-F3-FIX-06/07 refuse prepare without approved proposal / missing decision", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const bad = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: "prop:f2:missing",
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("AC-F3-FIX-08..16 confirm+execute fixture chain + reinjection flags", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;

    expect(executed.payload.mode).toBe("FIXTURE");
    expect(executed.payload.realExecution).toBe(false);
    expect(executed.payload.gitWritePerformed).toBe(false);
    expect(executed.payload.attempt.adapterId).toBe(F3_ADAPTER_ID);
    expect(executed.payload.attempt.selectedAgentRef).toBe(F3_AGENT_ID);
    expect(executed.payload.attempt.externalEffects).toBe(false);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.attempt.launchCount).toBe(1);
    expect(executed.payload.attempt.selectionStrategy).toBe(
      "capabilities_deterministic",
    );
    expect(executed.payload.evidence.verified).toBe(false);
    expect(executed.payload.evidence.status).toBe("available");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.recommendation.gateConsumed).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.attemptAutoLaunchNextCycle).toBe(
      false,
    );
    expect(executed.payload.recommendation.openHardReservationRefs).toEqual(
      expect.arrayContaining(["R-T-A3-1", "R-T-A3-2", "R-M01"]),
    );
    expect(executed.payload.labels.fixtureNoReal).toContain("FIXTURE");
    expect(executed.payload.disclosures).toContain("T-A6 COMPLETE NON DÉCLARÉ");
    expect(executed.payload.disclosures).toContain("PAS DE CLAIM READY");
    expect(JSON.stringify(executed.payload)).not.toMatch(/REAL READY/);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
  });

  it("AC-F3-FIX-17/18 double invoke does not second-launch", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const deps = {
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      executionContractServices: runtime.oa!.executionContractServices,
      executionAttemptServices: runtime.oa!.executionAttemptServices,
      evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      fixtureAdapter: runtime.oa!.fixtureAdapter,
      nowIso: () => runtime.oa!.clock.nowIso(),
    };

    const first = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.payload.attempt.launchCount).toBe(1);
    expect(first.payload.reusedExistingAttempt).toBe(false);

    const second = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposal.contextSnapshot,
      deps,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.payload.reusedExistingAttempt).toBe(true);
    expect(second.payload.attempt.launchCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
  });

  it("AC-F3-FIX-19 contract version mismatch fail-closed", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const bad = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version + 99,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        executionAttemptServices: runtime.oa!.executionAttemptServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
        fixtureAdapter: runtime.oa!.fixtureAdapter,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("CONTRACT_VERSION_MISMATCH");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("AC-F3-FIX-20/21 process-local fail closed after proposal store reset", async () => {
    const runtime = await createRuntime();
    const seeded = await seedApprovedGo(runtime);
    resetF2ProposalStoreForTests();
    expect(getProposal(seeded.proposal.proposalId)).toBeNull();
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("AC-F3-FIX-22 runtime wires explicit TestExecutionAdapter (not NoOp)", async () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-08-11T16:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    expect(runtime.oa).toBeTruthy();
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);
    expect(runtime.oa!.fixtureAdapter.externalEffects).toBe(false);
    expect(runtime.oa!.executionAttemptServices.adapter.adapterId).toBe(
      F3_ADAPTER_ID,
    );
    const candidates = runtime.oa!.executionAttemptServices.registry.findCandidates({
      requiredCapabilities: ["cap:f3-fixture-docs"],
      action: "fixture-docs-prepare",
      target: "sfia-studio/f3-fixture-only",
      scope: F3_SCOPE,
    });
    expect(candidates.some((a) => a.agentId === F3_AGENT_ID)).toBe(true);
  });
});
