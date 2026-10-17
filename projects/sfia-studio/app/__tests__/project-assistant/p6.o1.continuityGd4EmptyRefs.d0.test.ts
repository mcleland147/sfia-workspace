/**
 * STUDIO-P6-EXECUTION-CONVERGENCE-DELIVERY-01 / LOT A
 * Option 1 — W2 continuity admits G-D4 NON_STRUCTURAL empty decisionRefs.
 *
 * Deterministic — ZERO OpenAI REAL — ZERO Cursor REAL — ZERO HQA mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Corriger la fonctionnalité de filtrage",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Corriger le bug de filtrage signalé",
    outOfScope: ["refonte UI", "migration DB"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé avec tests verts",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 O1 — continuity G-D4 empty decisionRefs", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    dbPath = tempProductDbPath("p6-o1-cont.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "o1c" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
  });

  async function seedActiveCycle(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `O1 Cont ${suffix}`,
      objective: "Continuité G-D4 empty refs",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `O1C${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:o1c-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:o1c-${suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    if (oa.projectServices.setProjectRepositoryBinding) {
      const identity = `acme/o1c-${suffix}`;
      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity,
          remoteUrl: `https://github.com/${identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/demo",
        },
      });
      expect(bound.ok).toBe(true);
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
        identity,
      });
    }

    return { projectId, cycleInstanceId };
  }

  async function prepareOk(
    projectId: string,
    cycleInstanceId: string,
    analysis: IntentAnalysisDto = baseAnalysis(),
  ) {
    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    return prep;
  }

  it("T1/T14/T15 — G-D4 NON_STRUCTURAL empty refs → continuity active decisionRef=null", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t1");
    const oa = runtime.oa!;
    const beforeHd = await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await prepareOk(projectId, cycleInstanceId);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) throw new Error(continuity.message);
    expect(continuity.kind).toBe("active");
    if (continuity.kind !== "active") throw new Error("expected active");
    expect(continuity.decisionRef).toBeNull();
    expect(continuity.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
    expect(continuity.contract.version).toBe(prep.contract.version);
    expect(continuity.contract.semanticFingerprint).toBe(
      prep.contract.semanticFingerprint ?? "",
    );

    const afterHd = await oa.decisionServices.decisions.listByProject(projectId);
    expect(afterHd.length).toBe(beforeHd.length);

    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute(
      { executionContractId: prep.contract.executionContractId },
    );
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
  });

  it("T4 — empty refs without MATERIALITY stamp → INTEGRITY refus (G5 preserved)", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t4");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const stripped = {
      ...loaded.contract,
      decisionRefs: [] as string[],
      constraints: loaded.contract.constraints.filter(
        (c) => !c.startsWith("MATERIALITY:"),
      ),
    };
    await oa.executionContractServices.contracts.save(stripped);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(continuity.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("T2 — STRUCTURAL stamp + empty refs → refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t2");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!loaded.ok) throw new Error("load");
    const structural = {
      ...loaded.contract,
      decisionRefs: [] as string[],
      constraints: [
        ...loaded.contract.constraints.filter((c) => !c.startsWith("MATERIALITY:")),
        "MATERIALITY:STRUCTURAL",
      ],
    };
    await oa.executionContractServices.contracts.save(structural);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(
      continuity.code === "MATERIALITY_STRUCTURAL" ||
        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
    ).toBe(true);
  });

  it("T5a — NON_STRUCTURAL stamp but missing productCurrentness facts → refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t5a");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!loaded.ok) throw new Error("load");
    const inputs = { ...(loaded.contract.inputs ?? {}) } as Record<string, unknown>;
    const facts = {
      ...((inputs.materialityFacts as Record<string, unknown>) ?? {}),
    };
    delete facts.productCurrentness;
    inputs.materialityFacts = facts;
    await oa.executionContractServices.contracts.save({
      ...loaded.contract,
      inputs,
    });

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected fail");
    expect(continuity.code).toBe("EXECUTION_CONTINUITY_INTEGRITY_FAILED");
  });

  it("T5 — true Product obsolescence (pathRoot change) → CURRENT/STALE refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t5");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const before = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok || before.kind !== "active") throw new Error("expected active");

    const identity = `acme/o1c-t5`;
    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo-alt",
      },
    });
    expect(rebound.ok).toBe(true);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected stale refus");
    expect(
      continuity.code === "REPOSITORY_BINDING_STALE" ||
        continuity.code === "MATERIALITY_CURRENTNESS_STALE" ||
        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
    ).toBe(true);
  });

  it("T3 — CURRENT materiality UNKNOWN + empty refs → continuity refus", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t3");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.contract.executionContractId,
    });
    if (!loaded.ok) throw new Error("load");
    // Force stamp UNKNOWN while keeping empty refs — never admit without HD.
    await oa.executionContractServices.contracts.save({
      ...loaded.contract,
      decisionRefs: [],
      constraints: [
        ...loaded.contract.constraints.filter((c) => !c.startsWith("MATERIALITY:")),
        "MATERIALITY:UNKNOWN",
      ],
    });

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) throw new Error("expected UNKNOWN refus");
    expect(
      continuity.code === "MATERIALITY_UNKNOWN" ||
        continuity.code === "MATERIALITY_CURRENT_MISMATCH" ||
        continuity.code === "EXECUTION_CONTINUITY_INTEGRITY_FAILED",
    ).toBe(true);
  });

  it("T11/T12/T13 — inspection + amend fingerprint requires reinspect; confirm refused", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t11");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const beforeInspect = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(beforeInspect.ok).toBe(true);
    if (!beforeInspect.ok || beforeInspect.kind !== "active") {
      throw new Error("expected active");
    }
    expect(beforeInspect.inspection.inspectionSufficient).toBe(false);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);

    const afterInspect = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(afterInspect.ok).toBe(true);
    if (!afterInspect.ok || afterInspect.kind !== "active") {
      throw new Error("expected active");
    }
    expect(afterInspect.inspection.inspectionSufficient).toBe(true);
    expect(afterInspect.decisionRef).toBeNull();
    expect(afterInspect.contract.status).toBe(prep.contract.status);

    const { amendExecutionContractWithConstraint } = await import(
      "@/features/project-assistant/w2/amendExecutionContract"
    );
    const amended = await amendExecutionContractWithConstraint({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      additionalConstraint: "PASS02:T13-FP-BUMP",
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);

    const afterAmend = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(afterAmend.ok).toBe(true);
    if (!afterAmend.ok || afterAmend.kind !== "active") {
      throw new Error("expected active after amend");
    }
    // Successor (or bumped) contract must not reuse prior inspection silently.
    expect(afterAmend.inspection.inspectionSufficient).toBe(false);
    expect(
      afterAmend.inspection.reinspectionRequired === true ||
        afterAmend.contract.executionContractId !==
          prep.contract.executionContractId ||
        afterAmend.contract.version !== prep.contract.version ||
        afterAmend.contract.semanticFingerprint !==
          (prep.contract.semanticFingerprint ?? ""),
    ).toBe(true);

    const { confirmExecutionContractForAuthorization } = await import(
      "@/features/project-assistant/w2/confirmForAuthorization"
    );
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId,
      executionContractId: afterAmend.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected confirm refus before reinspect");
  });

  it("T16 — continuity read performs no EC / HD / Inspection / Confirm / Attempt writes", async () => {
    const { projectId, cycleInstanceId } = await seedActiveCycle("t16");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId);

    const saveSpy = vi.spyOn(oa.executionContractServices.contracts, "save");
    const hdBefore = await oa.decisionServices.decisions.listByProject(projectId);
    const inspBefore =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    const attemptsBefore =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prep.contract.executionContractId,
      });

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "active") {
      throw new Error("expected active");
    }
    expect(continuity.contract.executionContractId).toBe(
      prep.contract.executionContractId,
    );
    expect(saveSpy).not.toHaveBeenCalled();
    const hdAfter = await oa.decisionServices.decisions.listByProject(projectId);
    expect(hdAfter.length).toBe(hdBefore.length);
    const inspAfter =
      await oa.executionContractServices.inspectionAttestations.listByContract(
        prep.contract.executionContractId,
      );
    expect(inspAfter.length).toBe(inspBefore.length);
    const attemptsAfter =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prep.contract.executionContractId,
      });
    expect(attemptsAfter.ok).toBe(true);
    if (attemptsBefore.ok && attemptsAfter.ok) {
      expect(attemptsAfter.attempts.length).toBe(attemptsBefore.attempts.length);
    }
    saveSpy.mockRestore();
  });
});
