/**
 * P6 G-D4/T-A4 — generic PREPARE → inspect → authorize without systematic HD.
 * Authority Continuity — Product materiality + explicit Pilot inspection.
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
  assessGenericMissionPrepareReadiness,
  assessMaterialityForGenericPrepare,
  hasExplicitPrepareContractIntent,
  isChatFirstPrepareAcceptGo,
  prepareGenericExecutionContractDraft,
  rememberGenericPrepareRecommendation,
  resolveChatFirstGenericPrepareGo,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  assessExecutionMateriality,
  assertDecisionRefsAdmissibleForConfirm,
} from "@/lib/oa/execution-contract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  pathUnderProjectWorkspace,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

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
    objective: "Corriger la fonctionnalité de filtrage",
    scope: filePath,
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
      scopeIn: [filePath],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
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
    dbPath = tempProductDbPath("p6-gd4-ta4.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "gd4a" });
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
    workspaceKey: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `G-D4 ${suffix}`,
      objective: "Continuité préparation générique",
      context: "active cycle + generic prepare",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `GD4${suffix.toUpperCase().slice(0, 8)}`,
      idempotencyKey: `idem:gd4a-${suffix}`,
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

    const cycleInstanceId = `cyc:gd4a-${suffix}`;
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

    const workspaceKey = created.project.projectWorkspaceKey ?? "project";
    return { projectId, cycleInstanceId, workspaceKey };
  }

  async function prepareOk(
    projectId: string,
    cycleInstanceId: string,
    workspaceKey: string,
    analysis?: IntentAnalysisDto,
  ) {
    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis: analysis ?? baseAnalysis(workspaceKey),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    return prep;
  }

  it("Q16/Q20 — actionable alone is not explicit prepare intent", () => {
    expect(
      hasExplicitPrepareContractIntent(
        "Corrige la fonctionnalité de tri dans src/sort.ts",
      ),
    ).toBe(false);
    expect(
      hasExplicitPrepareContractIntent(
        "Prépare le contrat d'exécution pour corriger le tri",
      ),
    ).toBe(true);
    expect(isChatFirstPrepareAcceptGo({ text: "OK, vas-y" })).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:none",
        cycleInstanceId: "cyc:none",
        text: "OK, vas-y",
      }).kind,
    ).toBe("no_go");
  });

  it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
    const mat = assessMaterialityForGenericPrepare(baseAnalysis("demo"));
    expect(mat.materiality).toBe("unknown");
    expect(mat.humanDecisionRequired).toBe(true);
  });

  it("Q01/Q08/Q22 — PREPARE from Product materiality + launch grounding, no HD/Attempt", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("prep");
    const oa = runtime.oa!;
    const before = await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await prepareOk(projectId, cycleInstanceId, workspaceKey);

    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality.materiality).toBe("non_structural");
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.action).toBe(PRODUCT_CANONICAL_EXECUTION_ACTION);
    expect(prep.contract.requiredCapabilities).toEqual([
      PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
    ]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(prep.contract.status).not.toBe("draft");

    const facts = (prep.contract.inputs as { materialityFacts?: Record<string, unknown> })
      ?.materialityFacts;
    expect(facts?.productContextSufficient).toBe(true);
    expect(facts?.productCurrentness).toBeTruthy();
    expect(facts?.wouldMutateStructuralProjectTruth).toBe(false);
    expect(facts?.structuralTruthBasis).toMatch(/live_lps_ok/);
    expect(
      (prep.contract.inputs as { trustedLaunchContextPinnedAtPrepare?: boolean })
        ?.trustedLaunchContextPinnedAtPrepare,
    ).toBe(true);
    expect(
      (prep.contract.inputs as { baseHeadSha?: string })?.baseHeadSha,
    ).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);

    const after = await oa.decisionServices.decisions.listByProject(projectId);
    expect(after.length).toBe(before.length);
  });

  it("Q04/Q05 — D-P6-SHE-01: structural PREPARE OK empty refs; Confirm still refuses empty refs vs STRUCTURAL", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("struct");

    const prep = await prepareGenericExecutionContractDraft({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis(workspaceKey, {
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

    const mat = assessExecutionMateriality({
      modelSignals: { securityImpact: true },
    });
    expect(mat.materiality).toBe("structural");
    expect(mat.humanDecisionRequired).toBe(true);

    const deny = assertDecisionRefsAdmissibleForConfirm({
      decisionRefs: [],
      stampedMateriality: "non_structural",
      recomputed: mat,
    });
    expect(deny.ok).toBe(false);
  });

  it("Q09/Q10 — authorize without prior Pilot inspection BLOCKS (no auto-attestation)", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("noinsp");
    const prep = await prepareOk(projectId, cycleInstanceId, workspaceKey);

    const blocked = await authorizeGenericPreparedContract({
      oa: runtime.oa!,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint:
        prep.contract.semanticFingerprint ?? "unset-fingerprint",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(blocked.code).toBe("INSPECTION_REQUIRED");
  });

  it("Q06/Q07/Q11/Q15 — inspect → confirm → authorize without Attempt / without HD", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("auth");
    const oa = runtime.oa!;

    const prep = await prepareOk(
      projectId,
      cycleInstanceId,
      workspaceKey,
      baseAnalysis(workspaceKey, {
        objective: "Corriger le tri (#auth)",
        expectedOutcome: "Tests verts sur le tri",
      }),
    );
    expect(prep.contract.status).toBe("confirmation_required");

    const decisionsBeforeAuth =
      await oa.decisionServices.decisions.listByProject(projectId);

    // Q09 — Pilote explicit inspect gesture (separate from authorize).
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);
    expect(inspected.inspectionSufficient).toBe(true);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize failed: ${authorized.code} — ${authorized.message}`);
    }
    expect(authorized.ok).toBe(true);

    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);
    expect(authorized.inspection.inspectionSufficient).toBe(true);
    expect(authorized.confirmationRef).toBeTruthy();
    expect(authorized.status).toBe("confirmed");
    expect(authorized.authorization.ok).toBe(true);
    if (authorized.authorization.ok) {
      expect(authorized.authorization.outcome).toBe("AUTHORIZED");
    }

    const decisionsAfterAuth =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfterAuth.length).toBe(decisionsBeforeAuth.length);

    const after = await oa.executionContractServices.getExecutionContract.execute(
      {
        executionContractId: prep.contract.executionContractId,
      },
    );
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.decisionRefs ?? []).toEqual([]);
    expect(after.contract.confirmationRef).toBeTruthy();
    expect(after.contract.status).toBe("confirmed");
  });

  it("Q12/Q13 — version / fingerprint mismatch BLOCK", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("vfp");
    const oa = runtime.oa!;
    const prep = await prepareOk(projectId, cycleInstanceId, workspaceKey);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const badVersion = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(badVersion.ok).toBe(false);
    if (badVersion.ok) throw new Error("expected version block");
    expect(badVersion.code).toBe("VERSION_MISMATCH");

    const badFp = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
      expectedSemanticFingerprint: "deadbeef".repeat(8),
      forceLocalAuthority: true,
    });
    expect(badFp.ok).toBe(false);
    if (badFp.ok) throw new Error("expected fingerprint block");
    expect(badFp.code).toBe("FINGERPRINT_MISMATCH");
  });

  it("Q17/Q18 — chat-first OK vas-y binds CURRENT offer only", () => {
    const projectId = "prj:chat-go";
    const cycleInstanceId = "cyc:chat-go";
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId,
        cycleInstanceId,
        text: "OK, vas-y",
      }).kind,
    ).toBe("no_go");

    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId,
      analysis: baseAnalysis("demo", {
        objective: "Réorganiser les fichiers du projet",
        expectedOutcome: "Arborescence clarifiée",
        scope: pathUnderProjectWorkspace("demo", "docs"),
      }),
      offeredAtIso: "2026-10-15T12:00:00.000Z",
    });

    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId,
      text: "OK, vas-y",
    });
    expect(go.kind).toBe("prepare");
  });

  it("Q14 — different scope yields distinct contract ids (no silent reuse)", async () => {
    const { projectId, cycleInstanceId, workspaceKey } =
      await seedActiveCycle("idem");
    const pathA = pathUnderProjectWorkspace(workspaceKey, "src", "a.ts");
    const pathB = pathUnderProjectWorkspace(workspaceKey, "src", "b.ts");

    const a = await prepareOk(
      projectId,
      cycleInstanceId,
      workspaceKey,
      baseAnalysis(workspaceKey, {
        objective: "Mission idem A",
        scope: pathA,
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: [pathA],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
    );
    const b = await prepareOk(
      projectId,
      cycleInstanceId,
      workspaceKey,
      baseAnalysis(workspaceKey, {
        objective: "Mission idem A",
        scope: pathB,
        expectedOutcome: "A done",
        executionIntent: {
          intentKind: "other",
          scopeIn: [pathB],
          scopeOut: [],
        } as IntentAnalysisDto["executionIntent"],
      }),
    );
    expect(a.contract.executionContractId).not.toBe(
      b.contract.executionContractId,
    );
  });

  it("readiness helper — D-P6-SHE-01: structuralBlocked disclosed but ready true (HD deferred)", () => {
    const r = assessGenericMissionPrepareReadiness(
      baseAnalysis("demo", {
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      }),
    );
    expect(r.structuralBlocked).toBe(true);
    expect(r.ready).toBe(true);
  });
});
