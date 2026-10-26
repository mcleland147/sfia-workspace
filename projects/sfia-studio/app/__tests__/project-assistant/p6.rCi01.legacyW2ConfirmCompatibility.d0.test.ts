/**
 * R-CI-01 — Legacy W2 Confirm compatibility vs G-D4 CURRENT materiality.
 *
 * Confirms G-D4 Product revalidation applies only to G-D4-policy contracts.
 * Legacy W2 contracts with real HumanDecision refs and no MATERIALITY stamp
 * must Confirm without requiring NON_STRUCTURAL Product revalidation.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";
import {
  decideTrajectory,
} from "@/features/project-assistant/w2/decideTrajectory";
import {
  prepareExecutionContractFromW2Decision,
} from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import {
  prepareGenericExecutionContractDraft,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  confirmExecutionContractForAuthorization,
} from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  proposeTrajectoryOptions,
} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import {
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import {
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  SEALED_GIT_TARGET_IDENTITY_ENV,
  SEALED_GIT_TARGET_REMOTE_URL_ENV,
} from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  pathUnderProjectWorkspace,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  workspaceKey: string,
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  const filePath = pathUnderProjectWorkspace(workspaceKey, "app", "filter.ts");
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
    objective: "Corriger le filtrage demo",
    scope: filePath,
    rephrasedRequest: "Corriger le bug de filtrage",
    outOfScope: ["refonte UI"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: [filePath],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-rci01.sqlite"),
      idPrefix: "rci01",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  });

  async function prepareLegacyW2(suffix: string) {
    const seeded = await seedQualifiedProject(runtime, { suffix });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    return {
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      contract: prepared.contract,
    };
  }

  async function seedGd4Cycle(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R-CI-01 ${suffix}`,
      objective: "G-D4 confirm routing",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `RC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:rci01-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:rci01-${suffix}`;
    await oa.cycleServices.createCycle.execute({
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
    const identity = `acme/rci01-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    const project = await oa.projectServices.getProject.execute({ projectId });
    if (!project.ok) throw new Error("project");
    const workspaceKey = project.project.projectWorkspaceKey ?? "project";
    return { projectId, cycleInstanceId, oa, identity, workspaceKey };
  }

  it("L01 — legacy W2 prepare (real HD, no G-D4 stamp) → inspect → Confirm PASS", async () => {
    const legacy = await prepareLegacyW2("l01");
    expect(legacy.contract.decisionRefs ?? []).toEqual([legacy.decisionId]);
    expect(
      materialityFromContractConstraints(legacy.contract.constraints),
    ).toBeNull();
    expect(
      (legacy.contract.constraints ?? []).some((c) =>
        c.startsWith("MATERIALITY:"),
      ),
    ).toBe(false);

    const inspected = await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(confirmed.code);
  });

  it("L03 — legacy W2 without inspection → Confirm BLOCK", async () => {
    const legacy = await prepareLegacyW2("l03");
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected block");
    expect(confirmed.code).toBe("INSPECTION_REQUIRED");
  });

  it("L04 — legacy W2 Confirm with wrong projectId → PROJECT_MISMATCH", async () => {
    const legacy = await prepareLegacyW2("l04");
    await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: "prj:other-project-rci01",
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected mismatch");
    expect(confirmed.code).toBe("PROJECT_MISMATCH");
  });

  it("L05 — G-D4 NON_STRUCTURAL empty refs → Confirm PASS (CURRENT available)", async () => {
    const seeded = await seedGd4Cycle("l05");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(seeded.workspaceKey),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(
      prep.contract.constraints.some((c) =>
        /MATERIALITY:NON_STRUCTURAL|PRODUCT_GOVERNED/.test(c),
      ),
    ).toBe(true);

    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(`${confirmed.code}: ${confirmed.message}`);
  });

  it("L06 — G-D4 NON_STRUCTURAL Confirm fails closed when Product context unavailable", async () => {
    const previousIdentity = process.env[SEALED_GIT_TARGET_IDENTITY_ENV];
    const previousRemote = process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV];
    process.env[SEALED_GIT_TARGET_IDENTITY_ENV] = "acme/rci01-l06";
    process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV] =
      "https://github.com/acme/rci01-l06.git";
    try {
      const seeded = await seedGd4Cycle("l06");
      const prep = await prepareGenericExecutionContractDraft({
        oa: seeded.oa,
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        analysis: baseAnalysis(seeded.workspaceKey),
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);

      await inspectExecutionContract({
        oa: seeded.oa,
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
        expectedVersion: prep.contract.version,
      });

      // AKG-M5 — sealed Git identity withdrawn after PREPARE (Binding retired).
      delete process.env[SEALED_GIT_TARGET_IDENTITY_ENV];
      delete process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV];

      const confirmed = await confirmExecutionContractForAuthorization({
        oa: seeded.oa,
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(false);
      if (confirmed.ok) throw new Error("expected G-D4 fail-closed");
      expect([
        "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
        "REPOSITORY_BINDING_UNAVAILABLE",
        "REPOSITORY_BINDING_STALE",
        "SCOPE_OUTSIDE_PATH_ROOT",
      ]).toContain(confirmed.code);
    } finally {
      restoreEnvVar(SEALED_GIT_TARGET_IDENTITY_ENV, previousIdentity);
      restoreEnvVar(SEALED_GIT_TARGET_REMOTE_URL_ENV, previousRemote);
    }
  });

  it("L08 — G-D4 repository identity change (LPS unchanged) → Confirm STALE", async () => {
    const previousIdentity = process.env[SEALED_GIT_TARGET_IDENTITY_ENV];
    const previousRemote = process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV];
    process.env[SEALED_GIT_TARGET_IDENTITY_ENV] = "acme/rci01-l08";
    process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV] =
      "https://github.com/acme/rci01-l08.git";
    try {
      const seeded = await seedGd4Cycle("l08");
      const prep = await prepareGenericExecutionContractDraft({
        oa: seeded.oa,
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        analysis: baseAnalysis(seeded.workspaceKey),
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      await inspectExecutionContract({
        oa: seeded.oa,
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
        expectedVersion: prep.contract.version,
      });

      // AKG-M5 — sealed Git identity substitution (not Product Binding mutation).
      process.env[SEALED_GIT_TARGET_IDENTITY_ENV] = "acme/rci01-l08-other";
      process.env[SEALED_GIT_TARGET_REMOTE_URL_ENV] =
        "https://github.com/acme/rci01-l08-other.git";
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
        identity: "acme/rci01-l08-other",
      });

      const confirmed = await confirmExecutionContractForAuthorization({
        oa: seeded.oa,
        projectId: seeded.projectId,
        executionContractId: prep.contract.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(false);
      if (confirmed.ok) throw new Error("expected stale");
      expect(confirmed.code).toMatch(
        /REPOSITORY_BINDING_STALE|MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE/,
      );
    } finally {
      restoreEnvVar(SEALED_GIT_TARGET_IDENTITY_ENV, previousIdentity);
      restoreEnvVar(SEALED_GIT_TARGET_REMOTE_URL_ENV, previousRemote);
    }
  });

  async function prepareInspectedGd4(suffix: string) {
    const seeded = await seedGd4Cycle(suffix);
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(seeded.workspaceKey),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    return { seeded, prep };
  }

  function withContractOverlay(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    overlay: (contract: ExecutionContract) => ExecutionContract,
  ) {
    const original = oa.executionContractServices.getExecutionContract.execute.bind(
      oa.executionContractServices.getExecutionContract,
    );
    oa.executionContractServices.getExecutionContract.execute = (async (
      req: { executionContractId: string },
    ) => {
      const got = await original(req);
      if (!got.ok) return got;
      return { ok: true as const, contract: overlay(got.contract) };
    }) as typeof oa.executionContractServices.getExecutionContract.execute;
  }

  it("L09 — empty decisionRefs without G-D4 stamp → Confirm REFUS", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l09");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: (contract.constraints ?? []).filter(
        (c) => !c.startsWith("MATERIALITY:"),
      ),
      inputs: {
        ...(contract.inputs as Record<string, unknown>),
        materialityFacts: undefined,
      },
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected refus");
    expect(confirmed.code).toBe("DECISION_REQUIRED");
    expect(confirmed.message).toMatch(/sans décision humaine ni justification G-D4/i);
  });

  it("L10 — STRUCTURAL stamp with empty refs → Confirm BLOCK (no legacy bypass)", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l10");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: [
        ...(contract.constraints ?? []).filter(
          (c) => !c.startsWith("MATERIALITY:"),
        ),
        "MATERIALITY:STRUCTURAL",
      ],
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected structural block");
    // Must not take the legacy HD path; G-D4 structural remains fail-closed.
    // Fail-closed on G-D4 path (stamp mismatch / structural / context) — never legacy PASS.
    expect([
      "DECISION_REQUIRED",
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "MATERIALITY_STRUCTURAL",
      "MATERIALITY_CURRENT_MISMATCH",
    ]).toContain(confirmed.code);
  });
});
