/**
 * CORR-PROOF-07 — Active-cycle artifact materialization continuation.
 * Deterministic Product routing — ZERO REAL / ZERO dogfood mutation.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  resetF2ProposalStoreForTests,
  getProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  enrichExecutionIntentFromBinding,
  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
  hasCompatibleDocsWriteMaterializationEffect,
  hasCurrentRequireArtifactObligation,
  hasExplicitArtifactContinuationKind,
  isBlankOrCanonicalDocsWriteOperation,
  isGovernedArtifactMaterializationIntent,
  isPathWithinRoot,
  isQualifiedArtifactMaterializationContinuation,
  normalizeRepoRelativePath,
  preferActiveCycleOverParasite,
  resolveActiveCycleGovernedContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
} from "@/lib/oa/decision";
import {
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  type TrajectoryStep,
} from "@/lib/oa/cycle";

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const SANDBOX_PATH_ROOT = "projects/sfia-studio/.sandbox/";
const SANDBOX_PATH_ROOT_CANONICAL = "projects/sfia-studio/.sandbox";

function materializationAnalysis(overrides?: {
  continuationKind?: "active_cycle_artifact_materialization" | null;
  executionIntent?: Record<string, unknown> | null;
  reversibilityExpectation?: "reversible" | "irreversible" | "unknown" | null;
  requestedOperation?: string | null;
  analysisRequestedOperation?: string | null;
}) {
  const continuationKind =
    overrides && "continuationKind" in overrides
      ? overrides.continuationKind
      : "active_cycle_artifact_materialization";
  const reversibilityExpectation =
    overrides && "reversibilityExpectation" in overrides
      ? overrides.reversibilityExpectation
      : null;
  const defaultOp =
    overrides && "requestedOperation" in overrides
      ? overrides.requestedOperation
      : "cursor.docs_write.apply";
  const analysisRequestedOperation =
    overrides && "analysisRequestedOperation" in overrides
      ? overrides.analysisRequestedOperation
      : defaultOp;
  const executionIntent =
    overrides && "executionIntent" in overrides
      ? overrides.executionIntent
      : {
          intentKind: "docs_write",
          artifactType: null,
          targetRepositoryRef: null,
          targetPath: "docs/x.md",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: [],
          validationExpectations: [],
          evidenceRequirements: [],
          requestedOperation: defaultOp,
          reversibilityExpectation,
          artifactBrief: null,
          contentRequirements: [],
          exitRequirementKinds: [],
        };
  return validateIntentAnalysisPayload({
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:framing",
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
    continuationKind,
    objective: "matérialiser",
    scope: "docs",
    rephrasedRequest: "matérialiser",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: analysisRequestedOperation,
    executionIntent,
  });
}

function projectDtoFromOverview(input: {
  projectId: string;
  overview: {
    livingState: {
      id: string;
      version: number;
      createdAt: string;
      activeCycleInstanceId?: string | null;
    };
    doctrine: {
      id: string;
      version: string | number;
      digest: string;
      status: string;
    };
  } | { livingState: any; doctrine: any };
  activeCycleInstanceId: string | null;
  name?: string;
  objective?: string;
  contextSummary?: string;
}): ProjectAssistantContextDto {
  return {
    projectId: input.projectId,
    name: input.name ?? "x",
    shortReference: null,
    objective: input.objective ?? "x",
    contextSummary: input.contextSummary ?? "x",
    criticality: "STANDARD",
    constraints: [],
    lpsId: input.overview.livingState.id,
    lpsVersion: input.overview.livingState.version,
    lpsCreatedAt: input.overview.livingState.createdAt,
    doctrineId: input.overview.doctrine.id,
    doctrineVersion: String(input.overview.doctrine.version),
    doctrineDigest: input.overview.doctrine.digest,
    doctrineStatus: input.overview.doctrine.status,
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: input.activeCycleInstanceId,
    ckcResolutionRef: null,
  };
}

describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let activeCycleId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr07-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-14T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Gestion de tâches",
      objective: "CORR-PROOF-07 materialization continuation",
      context: "active cycle + REQUIRE_ARTIFACT",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "C07",
      idempotencyKey: `idem:corr07-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    projectId = created.projectId;

    const oa = runtime.oa!;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps missing");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_DONE,
      status: "active",
      expectedLpsVersion: lps.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    activeCycleId = `cyc:corr07-active-${Date.now()}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId: activeCycleId,
      cycleTypeId: "cyc:framing",
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
      scope: `pilot-lifecycle:${activeCycleId}`,
      issuedAt: "2026-09-14T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error(auth.message);

    const lps2 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) throw new Error("lps2 missing");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId: activeCycleId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps2.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId: activeCycleId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-14T08:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    await runtime.setProjectRepositoryBinding({
      projectId,
      identity: "acme/gestion-taches",
      remoteUrl: "https://github.com/acme/gestion-taches.git",
      defaultBranch: "main",
      pathRoot: "docs/",
    });
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function countCycles(): Promise<number> {
    const oa = getRuntimeApplicationService().oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    return cycles.length;
  }

  async function sendMaterialize(phrasing: string) {
    return orchestrateAssistantSend({
      projectId,
      content: `${phrasing} __F2_ARTIFACT_MATERIALIZE__`,
    });
  }

  function sandboxBinding(
    overrides?: Partial<ProjectRepositoryBinding>,
  ): ProjectRepositoryBinding {
    return {
      provider: "github",
      identity: "acme/gestion-taches",
      remoteUrl: "https://github.com/acme/gestion-taches.git",
      defaultBranch: "main",
      pathRoot: SANDBOX_PATH_ROOT,
      ...overrides,
    };
  }

  it("T1/T2/T3/T4 — no new CycleInstance; proposal bound to active; stays active; candidate count stable", async () => {
    const before = await countCycles();
    const overviewBefore = await getRuntimeApplicationService().getProject(projectId);
    expect(overviewBefore.ok).toBe(true);
    if (!overviewBefore.ok) return;
    expect(overviewBefore.livingState.activeCycleInstanceId).toBe(activeCycleId);

    const result = await sendMaterialize("Matérialise ce livrable.");
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.f2?.qualification?.cycleInstanceId).toBe(activeCycleId);
    expect(result.f2?.qualification?.cycleInstanceId).not.toMatch(/^cyc:f2-/);
    expect(result.f2?.proposal?.contextSnapshot.activeCycleInstanceId).toBe(
      activeCycleId,
    );
    expect(result.text).not.toMatch(/Pilot START|NON ACTIVE|nouveau CycleInstance candidat/i);
    expect(result.text).not.toMatch(/gate Morris construction/i);

    const after = await countCycles();
    expect(after).toBe(before);

    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    expect(overview.livingState.activeCycleInstanceId).toBe(activeCycleId);
    const cycle = await getRuntimeApplicationService().oa!.cycleServices.getCycle.execute({
      cycleInstanceId: activeCycleId,
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
  });

  it("T5/T6/T7 — no trajectory requalification; no auto HD; no auto EC", async () => {
    const oa = getRuntimeApplicationService().oa!;
    const decisionsBefore = await oa.decisionServices.decisions.listByProject(projectId);
    const contractsBefore =
      await oa.executionContractServices.contracts.listByProject?.(projectId);

    const result = await sendMaterialize("Peux-tu produire le document attendu ?");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.decision).toBeNull();
    expect(result.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(result.text).toMatch(/Décision Pilote|DÉCISION PILOTE/i);

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfter.length).toBe(decisionsBefore.length);

    const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
    expect(traj?.trajectoryId).toBe(`trj:${projectId}`);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contractsAfter =
        await oa.executionContractServices.contracts.listByProject(projectId);
      expect(contractsAfter.length).toBe(
        Array.isArray(contractsBefore) ? contractsBefore.length : 0,
      );
    }
  });

  it("T8/T9/T10 — GO → DecisionBasis on active + executionIntent → PREPARE same cycle ZERO Attempt/REAL", async () => {
    const result = await sendMaterialize("Matérialise le livrable requis.");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const proposal = result.f2?.proposal;
    expect(proposal).toBeTruthy();
    if (!proposal) return;

    expect(proposal.executionIntent?.intentKind).toBe("docs_write");
    expect(proposal.executionIntent?.targetRepositoryRef).toBe("acme/gestion-taches");
    // Fake materialize marker sets null — DecisionBasis must not invent "reversible".
    const proposalRev = proposal.executionIntent?.reversibilityExpectation;
    expect(proposalRev === null || proposalRev === undefined || proposalRev === "unknown").toBe(
      true,
    );
    expect(proposalRev).not.toBe("reversible");

    const runtime = getRuntimeApplicationService();
    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => "2026-09-14T08:05:00.000Z",
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const durable = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: go.decision.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.decisionBasis?.cycleInstanceId).toBe(activeCycleId);
    expect(durable.decision.decisionBasis?.executionBasis?.intentKind).toBe(
      "docs_write",
    );
    // Non-authoritative intent carried; no implicit REAL authority.
    expect(durable.decision.decisionBasis?.executionBasis?.requestedOperation).toMatch(
      /docs_write/,
    );
    const basisRev =
      durable.decision.decisionBasis?.executionBasis?.reversibilityExpectation;
    expect(
      basisRev === null || basisRev === undefined || basisRev === "unknown",
    ).toBe(true);
    expect(basisRev).not.toBe("reversible");

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext: proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-14T08:06:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe("cursor.docs_write.apply");
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.cursorReal).toBe(false);
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.executionAllowed).toBe(false);
    expect(prepared.payload.contract.stopConditions).toContain(
      "REVERSIBILITY_UNRESOLVED",
    );
  });

  it("T11 — parasite non-active candidate never preferred over active", async () => {
    const oa = getRuntimeApplicationService().oa!;
    const parasiteId = `cyc:f2-parasite-${Date.now()}`;
    const parasite = await oa.cycleServices.createCycle.execute({
      cycleInstanceId: parasiteId,
      cycleTypeId: "cyc:framing",
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
    expect(parasite.ok).toBe(true);

    expect(
      preferActiveCycleOverParasite({
        activeCycleInstanceId: activeCycleId,
        parasiteCandidateIds: [parasiteId],
      }),
    ).toBe(activeCycleId);

    const before = await countCycles();
    const result = await sendMaterialize("Matérialise ce livrable.");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.cycleInstanceId).toBe(activeCycleId);
    expect(result.f2?.qualification?.cycleInstanceId).not.toBe(parasiteId);
    expect(await countCycles()).toBe(before);
  });

  it("T12 — without CURRENT REQUIRE_ARTIFACT / active cycle, BLOCKED — ZERO createCycle", async () => {
    // Fresh project without active cycle / obligation → explicit materialize is BLOCKED.
    const runtime = getRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "Sans obligation",
      objective: "T12",
      context: "no require artifact",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "T12",
      idempotencyKey: `idem:t12-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const beforeCycles = await runtime.oa!.cycleServices.cycles.listByProject(
      created.projectId,
    );
    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content:
        "Prémisse d'exécution bornée. __F2_ARTIFACT_MATERIALIZE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.f2?.proposal ?? null).toBeNull();
    expect(result.f2?.turnKind === "f2_blocked" || result.f2?.turnKind === "f2_clarification").toBe(
      true,
    );
    expect(result.text).toMatch(/Aucun nouveau CycleInstance|continuation/i);
    const qid = result.f2?.qualification?.cycleInstanceId;
    expect(qid == null || !/^cyc:f2-/.test(qid)).toBe(true);

    const afterCycles = await runtime.oa!.cycleServices.cycles.listByProject(
      created.projectId,
    );
    expect(afterCycles.length).toBe(beforeCycles.length);
  });

  it("T13 — REQUIRE_ARTIFACT of OLD cycle does not contaminate active", async () => {
    const oa = getRuntimeApplicationService().oa!;
    const oldCycleId = `cyc:corr07-old-${Date.now()}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId: oldCycleId,
      cycleTypeId: "cyc:framing",
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

    // Plant a CURRENT REQUIRE_ARTIFACT HD on the OLD cycle subject only.
    // Active still has its own CURRENT obligation from beforeEach — continuation
    // must bind to active, never to oldCycleId.
    const oldOnlyDecisions: HumanDecision[] = [
      {
        decisionId: "hd:old-require",
        projectId,
        subject: obligationPolicySubjectFor(oldCycleId),
        selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        status: "accepted",
        createdAt: "2026-09-14T07:00:00.000Z",
      } as unknown as HumanDecision,
    ];
    expect(
      hasCurrentRequireArtifactObligation({
        activeCycleInstanceId: activeCycleId,
        decisions: oldOnlyDecisions,
      }),
    ).toBe(false);
    expect(
      hasCurrentRequireArtifactObligation({
        activeCycleInstanceId: oldCycleId,
        decisions: oldOnlyDecisions,
      }),
    ).toBe(true);

    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const project = projectDtoFromOverview({
      projectId,
      overview,
      activeCycleInstanceId: activeCycleId,
    });
    const analysis = materializationAnalysis();
    expect(analysis.parseOk).toBe(true);
    const resolved = await resolveActiveCycleGovernedContinuation({
      project,
      analysis,
      oa,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
    if (resolved.mode === "ACTIVE_CYCLE_GOVERNED_CONTINUATION") {
      expect(resolved.activeCycle.cycleInstanceId).toBe(activeCycleId);
      expect(resolved.activeCycle.cycleInstanceId).not.toBe(oldCycleId);
    }

    // Contamination case: materialization intent + active id present, but ONLY
    // old-cycle REQUIRE_ARTIFACT exists → BLOCKED (never silent NEW_CYCLE).
    const contaminated = await resolveActiveCycleGovernedContinuation({
      project,
      analysis,
      oa: {
        ...oa,
        decisionServices: {
          decisions: {
            listByProject: async () => oldOnlyDecisions,
          },
        },
      },
    });
    expect(contaminated.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (contaminated.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(contaminated.reason).toBe("no_require_artifact");
    }
  });

  it("T14 — absent/terminal active cycle → CONTINUATION_BLOCKED; no false continuation", async () => {
    const runtime = getRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "Sans cycle",
      objective: "T14",
      context: "no active",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "T14",
      idempotencyKey: `idem:t14-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const overview = await runtime.getProject(created.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    expect(overview.livingState.activeCycleInstanceId ?? null).toBeNull();

    const analysis = materializationAnalysis();
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId: created.projectId,
        overview,
        activeCycleInstanceId: null,
        name: "Sans cycle",
        objective: "T14",
        contextSummary: "no active",
      }),
      analysis,
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("no_active_cycle");
    }

    // Terminal (non-active) cycle id pointed by LPS → fail-closed, no false continuation.
    const terminalId = `cyc:t14-terminal-${Date.now()}`;
    await runtime.oa!.cycleServices.createCycle.execute({
      cycleInstanceId: terminalId,
      cycleTypeId: "cyc:framing",
      projectId: created.projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    const terminalResolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId: created.projectId,
        overview,
        activeCycleInstanceId: terminalId,
        name: "Sans cycle",
        objective: "T14",
        contextSummary: "terminal",
      }),
      analysis,
      oa: runtime.oa!,
    });
    expect(terminalResolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (terminalResolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(terminalResolved.reason).toBe("active_cycle_not_active");
    }
  });

  it("T15 — two semantically equivalent phrasings pass (not exact one string)", async () => {
    const a = await sendMaterialize("Matérialise ce livrable.");
    resetF2ProposalStoreForTests();
    const b = await sendMaterialize(
      "Peux-tu écrire le document attendu dans le dépôt ?",
    );
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.f2?.qualification?.cycleInstanceId).toBe(activeCycleId);
    expect(b.f2?.qualification?.cycleInstanceId).toBe(activeCycleId);
    expect(a.f2?.proposal).toBeTruthy();
    expect(b.f2?.proposal).toBeTruthy();
    // Not a magic exact-phrase matcher — structured marker + durable state.
    expect("Matérialise ce livrable.").not.toEqual(
      "Peux-tu écrire le document attendu dans le dépôt ?",
    );
  });

  it("T16 — deliverable definition-only stays advisory; no effect prep", async () => {
    const before = await countCycles();
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Aide-moi à définir la forme du livrable __F2_ARTIFACT_DEFINE_ONLY__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(await countCycles()).toBe(before);
  });

  it("T17 — incomplete repository binding → no invented target; clarify in same cycle", async () => {
    // New project with REQUIRE_ARTIFACT but NO binding
    const runtime = getRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "Sans binding",
      objective: "T17",
      context: "no binding",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "T17",
      idempotencyKey: `idem:t17-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const oa = runtime.oa!;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    if (!lps.ok) throw new Error("lps");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${created.projectId}`,
      projectId: created.projectId,
      steps: STEPS_DONE,
      status: "active",
      expectedLpsVersion: lps.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const cycId = `cyc:t17-${Date.now()}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId: cycId,
      cycleTypeId: "cyc:framing",
      projectId: created.projectId,
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
      scope: `pilot-lifecycle:${cycId}`,
      issuedAt: "2026-09-14T08:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error(auth.message);
    const lps2 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    if (!lps2.ok) throw new Error("lps2");
    await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId: cycId,
      projectId: created.projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps2.livingProjectState.version,
    });
    await recordObligationPolicyRequireArtifact({
      projectId: created.projectId,
      cycleInstanceId: cycId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-14T08:01:00.000Z",
    });

    const before = (await oa.cycleServices.cycles.listByProject(created.projectId))
      .length;
    const result = await orchestrateAssistantSend({
      projectId: created.projectId,
      content: "Matérialise ce livrable __F2_ARTIFACT_MATERIALIZE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.text).toMatch(/binding|cible|targetPath|Repository/i);
    expect(result.text).not.toMatch(/github\.com\/invented/i);
    expect(result.f2?.proposal?.executionIntent?.targetRepositoryRef).toBeFalsy();
    expect(result.f2?.qualification?.cycleInstanceId).toBe(cycId);
    expect(
      (await oa.cycleServices.cycles.listByProject(created.projectId)).length,
    ).toBe(before);
  });

  it("T18 — no runtime wording « gate Morris construction » for materialization decision", async () => {
    const result = await sendMaterialize("Matérialise ce livrable.");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).not.toMatch(/gate Morris construction/i);
    expect(result.f2?.proposal?.nextPossibleStep).toMatch(/Pilote/i);
    expect(result.text).toMatch(/Décision Pilote|DÉCISION PILOTE/i);
  });

  it("intent helper — docs_write alone / kind alone not qualified; both qualified", () => {
    const docsWriteAlone = validateIntentAnalysisPayload({
      intentClass: "execution_request",
      candidateCycleTypeId: "cyc:framing",
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
      challengeResponseAssessment: null,
      continuationKind: null,
      objective: "écrire le livrable",
      scope: null,
      rephrasedRequest: "produire le document",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: {
        intentKind: "docs_write",
        artifactType: null,
        targetRepositoryRef: null,
        targetPath: "docs/a.md",
        scopeIn: [],
        scopeOut: [],
        expectedOutputs: [],
        requiredCapabilities: [],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
        artifactBrief: null,
        contentRequirements: [],
        exitRequirementKinds: [],
      },
    });
    const kindAlone = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:framing",
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
      challengeResponseAssessment: null,
      continuationKind: "active_cycle_artifact_materialization",
      objective: "matérialiser",
      scope: null,
      rephrasedRequest: "générer le livrable attendu",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
    });
    const both = materializationAnalysis();

    expect(hasCompatibleDocsWriteMaterializationEffect(docsWriteAlone)).toBe(true);
    expect(hasExplicitArtifactContinuationKind(docsWriteAlone)).toBe(false);
    expect(isQualifiedArtifactMaterializationContinuation(docsWriteAlone)).toBe(false);
    expect(isGovernedArtifactMaterializationIntent(docsWriteAlone)).toBe(false);

    expect(hasExplicitArtifactContinuationKind(kindAlone)).toBe(true);
    expect(hasCompatibleDocsWriteMaterializationEffect(kindAlone)).toBe(false);
    expect(isQualifiedArtifactMaterializationContinuation(kindAlone)).toBe(false);
    expect(isGovernedArtifactMaterializationIntent(kindAlone)).toBe(false);

    expect(isQualifiedArtifactMaterializationContinuation(both)).toBe(true);
    expect(isGovernedArtifactMaterializationIntent(both)).toBe(true);
    expect(getProposal).toBeTypeOf("function");
  });

  it("CR01-A — enrichExecutionIntentFromBinding clamps scopeIn to pathRoot (provider parent rejected)", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: `${SANDBOX_PATH_ROOT_CANONICAL}/note.md`,
        scopeIn: ["projects/"],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(enriched.executionIntent?.scopeIn).toEqual([SANDBOX_PATH_ROOT_CANONICAL]);
    expect(enriched.executionIntent?.scopeIn).not.toContain("projects/");
    expect(normalizeRepoRelativePath(SANDBOX_PATH_ROOT)).toBe(SANDBOX_PATH_ROOT_CANONICAL);
  });

  it("CR01-B — sibling provider scopeIn never widens effective pathRoot", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: `${SANDBOX_PATH_ROOT_CANONICAL}/ok.md`,
        scopeIn: ["projects/other-sibling/"],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(enriched.executionIntent?.scopeIn).toEqual([SANDBOX_PATH_ROOT_CANONICAL]);
    expect(enriched.executionIntent?.scopeIn).not.toEqual(
      expect.arrayContaining(["projects/other-sibling/"]),
    );
  });

  it("CR02-A — hostile ../outside.md rejected", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "../outside.md",
        scopeIn: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(normalizeRepoRelativePath("../outside.md")).toBeNull();
    expect(isPathWithinRoot("../outside.md", SANDBOX_PATH_ROOT)).toBe(false);
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath).toBeNull();
  });

  it("CR02-B — pathRoot/../outside.md rejected", () => {
    const hostile = `${SANDBOX_PATH_ROOT_CANONICAL}/../outside.md`;
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: hostile,
        scopeIn: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(normalizeRepoRelativePath(hostile)).toBeNull();
    expect(isPathWithinRoot(hostile, SANDBOX_PATH_ROOT)).toBe(false);
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath).toBeNull();
  });

  it("CR02-C — absolute path rejected", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "/tmp/outside.md",
        scopeIn: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(normalizeRepoRelativePath("/tmp/outside.md")).toBeNull();
    expect(isPathWithinRoot("/tmp/outside.md", SANDBOX_PATH_ROOT)).toBe(false);
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath).toBeNull();
  });

  it("CR02-D — valid descendant under pathRoot accepted", () => {
    const valid = `${SANDBOX_PATH_ROOT_CANONICAL}/nested/ok.md`;
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: valid,
        scopeIn: ["projects/"],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: sandboxBinding(),
    });
    expect(isPathWithinRoot(valid, SANDBOX_PATH_ROOT)).toBe(true);
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.targetPath).toBe(valid);
    expect(enriched.executionIntent?.scopeIn).toEqual([SANDBOX_PATH_ROOT_CANONICAL]);
  });

  it("CR03-A — null reversibility is preserved (never fabricated reversible)", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "docs/x.md",
        scopeIn: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
      },
      binding: {
        provider: "github",
        identity: "acme/gestion-taches",
        remoteUrl: "https://github.com/acme/gestion-taches.git",
        defaultBranch: "main",
        pathRoot: "docs/",
      },
    });
    expect(enriched.executionIntent?.reversibilityExpectation).toBeNull();
    expect(enriched.executionIntent?.reversibilityExpectation).not.toBe("reversible");
  });

  it("CR03-B — after GO+PREPARE, REVERSIBILITY_UNRESOLVED when unsourced", async () => {
    const result = await sendMaterialize("Matérialise le livrable requis.");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const proposal = result.f2?.proposal;
    expect(proposal).toBeTruthy();
    if (!proposal) return;

    const runtime = getRuntimeApplicationService();
    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => "2026-09-14T08:05:00.000Z",
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const durable = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: go.decision.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    const basisRev =
      durable.decision.decisionBasis?.executionBasis?.reversibilityExpectation;
    expect(basisRev).not.toBe("reversible");

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext: proposal.contextSnapshot,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-14T08:06:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.cursorReal).toBe(false);
    expect(prepared.payload.contract.stopConditions).toContain(
      "REVERSIBILITY_UNRESOLVED",
    );
  });

  it("CR04-A — CURRENT REQUIRE_ARTIFACT + generic docs_write (no continuationKind) is NOT Artifact continuation", async () => {
    const before = await countCycles();
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Écris dans le README __F2_DOCS_WRITE_GENERIC__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    // Historical new-cycle / MW5 path is allowed — must NOT bind ACTIVE continuation.
    const qid = result.f2?.qualification?.cycleInstanceId ?? null;
    if (qid) {
      expect(qid).not.toBe(activeCycleId);
    }
    const proposal = result.f2?.proposal;
    if (
      proposal?.status === "DECISION_REQUIRED" &&
      proposal.contextSnapshot.activeCycleInstanceId === activeCycleId
    ) {
      // If a proposal exists on the LPS active id, it must not be pilot materialization wording.
      expect(proposal.objective ?? "").not.toMatch(/matérialisation du livrable requis/i);
    }
    // Qualification must not claim active-cycle governed materialization continuation.
    expect(qid === activeCycleId).toBe(false);
    void before;
  });

  it("CR04-B — continuationKind without docs_write → BLOCKED incompatible_execution_intent", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const analysis = materializationAnalysis({
      continuationKind: "active_cycle_artifact_materialization",
      executionIntent: null,
    });
    expect(hasExplicitArtifactContinuationKind(analysis)).toBe(true);
    expect(hasCompatibleDocsWriteMaterializationEffect(analysis)).toBe(false);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis,
      oa: getRuntimeApplicationService().oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("incompatible_execution_intent");
    }
  });

  it("CR04-C — kind + docs_write + durable → ACTIVE_CYCLE_GOVERNED_CONTINUATION", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const analysis = materializationAnalysis();
    expect(isQualifiedArtifactMaterializationContinuation(analysis)).toBe(true);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis,
      oa: getRuntimeApplicationService().oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
    if (resolved.mode === "ACTIVE_CYCLE_GOVERNED_CONTINUATION") {
      expect(resolved.activeCycle.cycleInstanceId).toBe(activeCycleId);
    }
  });

  it("CR05-A — getCycle fail → BLOCKED cycle_load_failed; orchestrate ZERO createCycle", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = getRuntimeApplicationService().oa!;
    const analysis = materializationAnalysis();

    const unit = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis,
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          getCycle: {
            execute: async () => ({
              ok: false as const,
              error: {
                detailCode: "CYCLE_NOT_FOUND",
                message: "mock fail",
              } as any,
            }),
          },
        },
      },
    });
    expect(unit.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (unit.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(unit.reason).toBe("cycle_load_failed");
    }

    const before = await countCycles();
    const spy = vi
      .spyOn(oa.cycleServices.getCycle, "execute")
      .mockResolvedValue({
        ok: false,
        error: {
          detailCode: "CYCLE_NOT_FOUND",
          message: "mock fail",
        } as any,
      });
    try {
      const result = await sendMaterialize("Matérialise ce livrable.");
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.f2?.proposal ?? null).toBeNull();
      expect(await countCycles()).toBe(before);
      expect(result.text).toMatch(/Aucun nouveau CycleInstance/i);
    } finally {
      spy.mockRestore();
    }
  });

  it("CR05-B — contaminated old-only REQUIRE_ARTIFACT → BLOCKED no_require_artifact", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oldCycleId = `cyc:corr07-cr05b-${Date.now()}`;
    const oldOnlyDecisions: HumanDecision[] = [
      {
        decisionId: "hd:cr05b-old",
        projectId,
        subject: obligationPolicySubjectFor(oldCycleId),
        selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        status: "accepted",
        createdAt: "2026-09-14T07:00:00.000Z",
      } as unknown as HumanDecision,
    ];
    const contaminated = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...getRuntimeApplicationService().oa!,
        decisionServices: {
          decisions: {
            listByProject: async () => oldOnlyDecisions,
          },
        },
      },
    });
    expect(contaminated.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (contaminated.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(contaminated.reason).toBe("no_require_artifact");
    }
  });

  it("CR05-C — terminal active pointer → BLOCKED active_cycle_not_active", async () => {
    const runtime = getRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "CR05-C",
      objective: "terminal",
      context: "terminal",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C5C",
      idempotencyKey: `idem:cr05c-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const overview = await runtime.getProject(created.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const terminalId = `cyc:cr05c-terminal-${Date.now()}`;
    await runtime.oa!.cycleServices.createCycle.execute({
      cycleInstanceId: terminalId,
      cycleTypeId: "cyc:framing",
      projectId: created.projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId: created.projectId,
        overview,
        activeCycleInstanceId: terminalId,
      }),
      analysis: materializationAnalysis(),
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("active_cycle_not_active");
    }
  });

  it("CR05-D — pilotLifecycle.assess fail → BLOCKED lifecycle_assess_failed", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = getRuntimeApplicationService().oa!;
    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => ({ ok: false as const }),
          },
        },
      },
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("lifecycle_assess_failed");
    }
  });

  it("CR05-E — artifact already SATISFIED → BLOCKED artifact_already_satisfied ZERO createCycle", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = getRuntimeApplicationService().oa!;
    const before = await countCycles();

    const unit = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis: materializationAnalysis(),
      oa: {
        ...oa,
        cycleServices: {
          ...oa.cycleServices,
          pilotLifecycle: {
            ...oa.cycleServices.pilotLifecycle,
            assess: async () => ({
              ok: true as const,
              assessment: {
                obligations: [{ family: "artifact", status: "SATISFIED" }],
              },
            }),
          },
        },
      },
    });
    expect(unit.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (unit.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(unit.reason).toBe("artifact_already_satisfied");
    }

    const spy = vi.spyOn(oa.cycleServices.pilotLifecycle, "assess").mockResolvedValue({
      ok: true,
      assessment: {
        obligations: [{ family: "artifact", status: "SATISFIED" }],
      },
    } as never);
    try {
      const result = await sendMaterialize("Matérialise ce livrable.");
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.f2?.proposal ?? null).toBeNull();
      expect(await countCycles()).toBe(before);
      expect(result.text).toMatch(/Aucun nouveau CycleInstance/i);
    } finally {
      spy.mockRestore();
    }
  });

  it("CR06-A — docs_write + github.pr.merge → BLOCKED; orchestrate ZERO Proposal/createCycle", async () => {
    expect(isBlankOrCanonicalDocsWriteOperation("github.pr.merge")).toBe(false);
    const hostile = materializationAnalysis({
      requestedOperation: "github.pr.merge",
    });
    expect(hostile.executionIntent?.intentKind).toBe("docs_write");
    expect(hostile.executionIntent?.requestedOperation).toBe("github.pr.merge");
    expect(hasCompatibleDocsWriteMaterializationEffect(hostile)).toBe(false);
    expect(isQualifiedArtifactMaterializationContinuation(hostile)).toBe(false);

    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const oa = getRuntimeApplicationService().oa!;
    const before = await countCycles();
    const createSpy = vi.spyOn(oa.cycleServices.createCycle, "execute");

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis: hostile,
      oa,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("incompatible_execution_intent");
    }

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Matérialise ce livrable __F2_ARTIFACT_HOSTILE_MERGE_OP__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal ?? null).toBeNull();
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.text).toMatch(/Aucun nouveau CycleInstance/i);
    expect(await countCycles()).toBe(before);
    expect(createSpy).not.toHaveBeenCalled();
    createSpy.mockRestore();
  });

  it("CR06-B — blank requestedOperation accepted; effective action+caps canonical", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    expect(isBlankOrCanonicalDocsWriteOperation(null)).toBe(true);
    expect(isBlankOrCanonicalDocsWriteOperation("")).toBe(true);
    expect(isBlankOrCanonicalDocsWriteOperation("   ")).toBe(true);

    const analysis = materializationAnalysis({
      requestedOperation: null,
      analysisRequestedOperation: null,
    });
    expect(hasCompatibleDocsWriteMaterializationEffect(analysis)).toBe(true);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis,
      oa: getRuntimeApplicationService().oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
    if (resolved.mode !== "ACTIVE_CYCLE_GOVERNED_CONTINUATION") return;
    expect(resolved.enrichedExecutionIntent?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(resolved.enrichedExecutionIntent?.requiredCapabilities).toEqual([
      ...F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
    ]);
  });

  it("CR06-C — canonical cursor.docs_write.apply accepted unchanged as effective action", async () => {
    const overview = await getRuntimeApplicationService().getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const analysis = materializationAnalysis({
      requestedOperation: "cursor.docs_write.apply",
    });
    expect(hasCompatibleDocsWriteMaterializationEffect(analysis)).toBe(true);

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: projectDtoFromOverview({
        projectId,
        overview,
        activeCycleInstanceId: activeCycleId,
      }),
      analysis,
      oa: getRuntimeApplicationService().oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_GOVERNED_CONTINUATION");
    if (resolved.mode !== "ACTIVE_CYCLE_GOVERNED_CONTINUATION") return;
    expect(resolved.enrichedExecutionIntent?.requestedOperation).toBe(
      "cursor.docs_write.apply",
    );
    expect(resolved.enrichedExecutionIntent?.requiredCapabilities).toEqual([
      "cap:cursor.docs_write",
    ]);
  });

  it("CR06-D — arbitrary provider requiredCapabilities never traverse after accept", async () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        artifactType: null,
        targetRepositoryRef: null,
        targetPath: `${SANDBOX_PATH_ROOT_CANONICAL}/docs/x.md`,
        scopeIn: ["projects/"],
        scopeOut: [],
        expectedOutputs: [],
        requiredCapabilities: ["cap:github.pr.merge", "cap:shell.exec"],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: "cursor.docs_write.apply",
        reversibilityExpectation: null,
        artifactBrief: null,
        contentRequirements: [],
        exitRequirementKinds: [],
      },
      binding: sandboxBinding(),
    });
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.requiredCapabilities).toEqual([
      "cap:cursor.docs_write",
    ]);
    expect(enriched.executionIntent?.requiredCapabilities).not.toContain(
      "cap:github.pr.merge",
    );
    expect(enriched.executionIntent?.requiredCapabilities).not.toContain(
      "cap:shell.exec",
    );
    expect(enriched.executionIntent?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });
});
