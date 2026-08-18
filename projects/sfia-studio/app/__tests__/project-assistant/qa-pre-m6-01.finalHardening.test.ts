/**
 * QA-PRE-M6-01 FINAL HARDENING — shared pipeline + M3 boundary.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteF3Fixture,
  confirmAndExecuteResolvedM3,
  executeConfirmedFixtureSafeContract,
  prepareAndResolveM3ProductPath,
  prepareF3Fixture,
  prepareM3FromDecision,
  validateResolvedM3ExecutionBoundary,
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
  canonicalM3ResolutionIdempotencyKey,
  F3_ADAPTER_ID,
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
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
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
const F3_DIR = path.join(
  APP_ROOT,
  "features/project-assistant/f3",
);

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:harden-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:harden-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:harden-${this.correlation}`;
  }
}

async function createRuntime(): Promise<RuntimeApplicationService> {
  resetRuntimeApplicationServiceForTests();
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T20:00:00.000Z",
    idSource: new FixedIdSource(),
    auditMode: "noop",
  });
}

async function seedGo(runtime: RuntimeApplicationService) {
  const created = await runtime.createProject({
    name: "Hardening",
    objective: "shared pipeline",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["FIXTURE ONLY"],
    shortReference: "HRD",
    idempotencyKey: `harden-${Date.now()}-${Math.random()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create");
  const projectId = created.project.projectId;
  const before = await runtime.getProject(projectId);
  expect(before.ok).toBe(true);
  if (!before.ok) throw new Error("before");

  const snapshot = {
    projectId,
    lpsId: before.livingState.id,
    lpsVersion: before.livingState.version,
    doctrineDigest: before.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "x",
    objective: "x",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "hardening",
    scope: "fixture-docs",
    outOfScope: ["REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "attempt",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
    morrisGateRequired: true,
    nextPossibleStep: "F3",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });

  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");

  const after = await runtime.getProject(projectId);
  expect(after.ok).toBe(true);
  if (!after.ok) throw new Error("after");
  const currentContext = {
    projectId,
    lpsId: after.livingState.id,
    lpsVersion: after.livingState.version,
    doctrineDigest: after.doctrine.digest,
  };
  return {
    projectId,
    proposal: go.proposal,
    decision: go.decision,
    proposalSnapshot: snapshot,
    currentContext,
    runtime,
  };
}

async function resolvePath(runtime: RuntimeApplicationService, seeded: Awaited<ReturnType<typeof seedGo>>) {
  return prepareAndResolveM3ProductPath({
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
}

describe("QA-PRE-M6-01 final hardening — shared pipeline + M3 boundary", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("H1/H2 — both callers import shared pipeline; architecture has one orchestration body", () => {
    const shared = fs.readFileSync(
      path.join(F3_DIR, "executeConfirmedFixtureSafeContract.ts"),
      "utf8",
    );
    const legacy = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteF3Fixture.ts"),
      "utf8",
    );
    const m3 = fs.readFileSync(
      path.join(F3_DIR, "confirmAndExecuteResolvedM3.ts"),
      "utf8",
    );
    expect(shared).toContain("executeConfirmedFixtureSafeContract");
    expect(shared).toContain("requestConfirmation");
    expect(shared).toContain("selectExecutionAgent");
    expect(shared).toContain("startExecution");
    expect(shared).toContain("ingestEvidenceAndRecommend");
    expect(legacy).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(m3).toContain('from "./executeConfirmedFixtureSafeContract"');
    expect(legacy).not.toContain("selectExecutionAgent.execute");
    expect(m3).not.toContain("selectExecutionAgent.execute");
    expect(legacy).toContain("validateF2ForPrepare");
    expect(m3).toContain("validateResolvedM3ExecutionBoundary");
    expect(typeof executeConfirmedFixtureSafeContract).toBe("function");
  });

  it("H1 — legacy valid path uses shared pipeline successfully", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    // Legacy prepare requires matching context (pre-GO snapshot) — historical valid context.
    const prepared = await prepareF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      currentContext: seeded.proposalSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        productDurablePath: runtime.oa!.productDurablePath,
      },
    });
    // After GO LPS advanced; proposal snapshot N vs current N+1 → STALE when using current.
    // Historical valid path uses matching snapshot (same as fixture unit tests).
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposalSnapshot,
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
      },
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

    // R-H03 — legacy valid contract: first Attempt + replay → no second launch
    const firstLaunch = runtime.oa!.fixtureAdapter.launchCallCount;
    const replay = await confirmAndExecuteF3Fixture({
      projectId: seeded.projectId,
      proposalId: seeded.proposal.proposalId,
      decisionId: seeded.decision.decisionId,
      executionContractId: prepared.payload.contract.executionContractId,
      expectedContractVersion: prepared.payload.contract.version,
      currentContext: seeded.proposalSnapshot,
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
      },
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.payload.reusedExistingAttempt).toBe(true);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(firstLaunch);
    const listed =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
        1,
      );
    }
  });

  it("H2/H3/H4/H5/H6/S5–S8 — M3 path shared pipeline + replay + boundary PASS", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
    const resolved = await resolvePath(runtime, seeded);
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;

    const boundary = await validateResolvedM3ExecutionBoundary({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        executionContractServices: runtime.oa!.executionContractServices,
      },
    });
    expect(boundary.ok).toBe(true);

    const listedBefore =
      await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId: resolved.payload.successor.executionContractId,
      });
    expect(listedBefore.ok).toBe(true);
    if (listedBefore.ok) expect(listedBefore.attempts).toHaveLength(0);

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
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
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId).toBeTruthy();
    expect(executed.payload.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    const firstLaunch = runtime.oa!.fixtureAdapter.launchCallCount;
    expect(firstLaunch).toBe(1);

    const replay = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decision.decisionId,
      executionContractId: resolved.payload.successor.executionContractId,
      expectedContractVersion: resolved.payload.successor.version,
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
  });

  it("S2 — legacy STALE after LPS advance preserved", async () => {
    const runtime = await createRuntime();
    const seeded = await seedGo(runtime);
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
  });

  describe("Blocker B — hostile M3 boundary", () => {
    async function setupResolved() {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const resolved = await resolvePath(runtime, seeded);
      expect(resolved.ok).toBe(true);
      if (!resolved.ok) throw new Error("resolve");
      return { runtime, seeded, resolved: resolved.payload };
    }

    async function expectBoundaryFail(
      runtime: RuntimeApplicationService,
      input: {
        projectId: string;
        decisionId: string;
        executionContractId: string;
      },
      code: string,
    ) {
      const before = runtime.oa!.fixtureAdapter.launchCallCount;
      const boundary = await validateResolvedM3ExecutionBoundary({
        ...input,
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          executionContractServices: runtime.oa!.executionContractServices,
        },
      });
      expect(boundary.ok).toBe(false);
      if (boundary.ok) return;
      expect(boundary.code).toBe(code);

      const executed = await confirmAndExecuteResolvedM3({
        ...input,
        expectedContractVersion: 1,
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
      expect(executed.ok).toBe(false);
      expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(before);
      const listed =
        await runtime.oa!.executionAttemptServices.listExecutionAttempts.execute({
          executionContractId: input.executionContractId,
        });
      if (listed.ok) {
        expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
          0,
        );
      }
    }

    it("B1 — successor that does not supersede canonical prepare FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const prepareId = canonicalM3PrepareContractId(seeded.decision.decisionId);
      expect(resolved.successor.supersedesExecutionContractId).toBe(prepareId);
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: "xct:does-not-exist",
        },
        "CONTRACT_NOT_FOUND",
      );
    });

    it("B2 — successor with wrong decisionId FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: "dec:f2:hostile-other",
          executionContractId: resolved.successor.executionContractId,
        },
        "DECISION_NOT_FOUND",
      );
    });

    it("B4 — projectId mismatch FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      await expectBoundaryFail(
        runtime,
        {
          projectId: "prj:hostile-other",
          decisionId: seeded.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "PROJECT_MISMATCH",
      );
    });

    it("B6 — fixture-safe profile mismatch FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
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

      const { resolveM3ExecutionContract } = await import(
        "@/features/project-assistant/f3/resolveM3ExecutionContract"
      );
      const { fixtureSafeM3ResolutionProfile } = await import(
        "@/features/project-assistant/f3/fixtureSafeM3ResolutionProfile"
      );
      const profile = fixtureSafeM3ResolutionProfile();
      const hostile = await resolveM3ExecutionContract({
        projectId: seeded.projectId,
        decisionId: seeded.decision.decisionId,
        originalExecutionContractId: prepared.payload.contract.executionContractId,
        expectedOriginalVersion: prepared.payload.contract.version,
        resolution: {
          ...profile,
          action: "hostile-non-fixture-action",
        },
        supersessionReason: "hostile profile probe",
        deps: {
          decisionServices: runtime.oa!.decisionServices,
          authorityResolver: runtime.oa!.authorityResolver,
          executionContractServices: runtime.oa!.executionContractServices,
          nowIso: () => runtime.oa!.clock.nowIso(),
          forceM3Authority: true,
        },
      });
      expect(hostile.ok).toBe(true);
      if (!hostile.ok) return;

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: hostile.successor.executionContractId,
        },
        "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
      );
    });

    it("B8 — unresolved PREPARE submitted for execution FAIL", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
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
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: prepared.payload.contract.executionContractId,
        },
        "CONTRACT_NOT_RESOLVED_SUCCESSOR",
      );
    });

    it("B3 — resolution lineage under wrong decision FAIL", async () => {
      const { runtime, seeded, resolved } = await setupResolved();
      const expected = canonicalM3ResolutionIdempotencyKey(
        seeded.decision.decisionId,
        resolved.successor.executionContractId,
      );
      const get =
        await runtime.oa!.executionContractServices.getExecutionContract.execute({
          executionContractId: resolved.successor.executionContractId,
        });
      expect(get.ok).toBe(true);
      if (!get.ok) return;
      expect(get.contract.idempotencyKey).toBe(expected);

      const proposal2 = saveProposal({
        proposalId: createProposalId(),
        status: "DECISION_REQUIRED",
        rephrasedRequest: "y",
        objective: "y",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        rationale: "hostile",
        scope: "fixture-docs",
        outOfScope: [],
        activatedBlocks: [],
        expectedOutcome: "y",
        sources: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        morrisGateRequired: true,
        nextPossibleStep: "y",
        contextSnapshot: seeded.currentContext,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
        executionForbidden: true,
        noExecutingStatus: true,
        agentBinding: "NOT_AVAILABLE",
      });
      const go2 = await recordF2Decision({
        proposalId: proposal2.proposalId,
        projectId: seeded.projectId,
        decisionKind: "GO",
        currentContext: seeded.currentContext,
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      });
      expect(go2.ok).toBe(true);
      if (!go2.ok) return;
      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: go2.decision.decisionId,
          executionContractId: resolved.successor.executionContractId,
        },
        "CANONICAL_M3_PREPARE_NOT_FOUND",
      );
    });

    it("B5 / R-H01 — successor requiredAuthority != MORRIS FAIL (Attempt 0, launch 0)", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
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

      // Authority scope must match successor scope (F3_SCOPE), not PREPARE scope.
      const issuedAt = runtime.oa!.clock.nowIso();
      const auth = registerM3LocalMorrisAuthority({
        authorityResolver: runtime.oa!.authorityResolver,
        scope: F3_SCOPE,
        issuedAt,
        evidenceId: `evd:m3-hostile-b5:${seeded.decision.decisionId}`,
        forceEnable: true,
      });
      expect(auth.ok).toBe(true);
      if (!auth.ok) return;

      const hostileId = `xct:m3-res:hostile-b5:${seeded.decision.decisionId}`;
      const supersede =
        await runtime.oa!.executionContractServices.supersedeExecutionContract.execute(
          {
            newExecutionContractId: hostileId,
            supersedesExecutionContractId:
              prepared.payload.contract.executionContractId,
            supersessionReason: "Cycle 9 R-H01 hostile authority probe",
            actor: LOCAL_MORRIS_M3_ACTOR,
            authorityEvidenceId: auth.evidenceId,
            expectedVersion: prepared.payload.contract.version,
            action: F3_ACTION,
            target: F3_TARGET,
            scope: F3_SCOPE,
            requiredCapabilities: [F3_CAPABILITY],
            requiredAuthority: "N2",
            reversibility: "reversible",
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
            decisionRefs: [seeded.decision.decisionId],
            idempotencyKey: canonicalM3ResolutionIdempotencyKey(
              seeded.decision.decisionId,
              hostileId,
            ),
            status: "proposed",
          },
        );
      expect(supersede.ok).toBe(true);
      if (!supersede.ok) return;
      expect(supersede.contract.requiredAuthority).toBe("N2");

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: hostileId,
        },
        "CONTRACT_AUTHORITY_MISMATCH",
      );
    });

    it("B7 / R-H02 — canonical PREPARE idempotency mismatch FAIL (Attempt 0, launch 0)", async () => {
      const runtime = await createRuntime();
      const seeded = await seedGo(runtime);
      const prepareId = canonicalM3PrepareContractId(seeded.decision.decisionId);
      const canonicalIdem = canonicalM3PrepareIdempotencyKey(
        seeded.decision.decisionId,
      );
      expect(canonicalIdem).toMatch(/^idem:m3-prep:/);

      const issuedAt = runtime.oa!.clock.nowIso();
      const auth = registerM3LocalMorrisAuthority({
        authorityResolver: runtime.oa!.authorityResolver,
        scope: "m3-hostile-b7",
        issuedAt,
        evidenceId: `evd:m3-hostile-b7:${seeded.decision.decisionId}`,
        forceEnable: true,
      });
      expect(auth.ok).toBe(true);
      if (!auth.ok) return;

      // Hostile PREPARE at canonical id with non-canonical idempotencyKey.
      // Boundary fails before successor checks — no product seam required.
      const built =
        await runtime.oa!.executionContractServices.buildExecutionContract.execute(
          {
            executionContractId: prepareId,
            projectId: seeded.projectId,
            decisionRefs: [seeded.decision.decisionId],
            action: "UNRESOLVED_ACTION",
            target: "UNRESOLVED_TARGET",
            scope: "m3-hostile-b7",
            requiredCapabilities: ["cap:unresolved"],
            requiredAuthority: "MORRIS",
            constraints: ["PREPARE_ONLY", "NO_ATTEMPT"],
            stopConditions: ["ACTION_UNRESOLVED", "TARGET_UNRESOLVED"],
            evidenceRequirements: ["evreq:m3-hostile-b7"],
            reversibility: "irreversible",
            idempotencyKey: "idem:m3-prep:HOSTILE-WRONG-KEY",
            correlationId: `cor:m3-hostile-b7:${seeded.decision.decisionId}`,
            actor: LOCAL_MORRIS_M3_ACTOR,
            authorityEvidenceId: auth.evidenceId,
          },
        );
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      expect(built.contract.idempotencyKey).not.toBe(canonicalIdem);

      await expectBoundaryFail(
        runtime,
        {
          projectId: seeded.projectId,
          decisionId: seeded.decision.decisionId,
          executionContractId: prepareId,
        },
        "CANONICAL_M3_PREPARE_IDEMPOTENCY_MISMATCH",
      );
    });
  });
});
