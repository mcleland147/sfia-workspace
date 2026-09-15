/**
 * PRODUCT-PROOF-JOURNEY-INTEGRITY — APPLICATION PATH.
 *
 * Every step below goes through a real Product entrypoint the UI calls:
 *   projectAssistantSendAction → orchestrateAssistantSend (fixture provider)
 *   w2ProposeTrajectoryOptionsAction → w2DecideTrajectoryAction
 *   projectAssistantPrepareM3Action → w2InspectExecutionContractAction
 *
 * No test bypass mints the decision subject: Proposal B is minted by Nora's
 * own turn, and the chain is picked up again from durable truth only.
 *
 * Layer A ("AP1x") proves send → orchestrate → reinstruction verdict + durable
 * marker. Layer B ("AP2x") proves propose → decide → PREPARE → inspect using
 * the very Proposal id Layer A committed, reloaded through
 * readActiveProposalDecisionSubject after a process-local wipe.
 *
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation / ZERO Attempt.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
import {
  w2DecideTrajectoryAction,
  w2InspectExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
} from "@/features/project-assistant/w2/actions";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  listActivePendingDecisionSubjectMarkers,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  tempProductDbPath,
} from "./w2Harness";
import type {
  RuntimeApplicationService,
  RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

const MATERIALIZE_SIGNAL = "__F2_ARTIFACT_MATERIALIZE__";
/** pathRoot must contain the fixture target, otherwise Nora clarifies instead. */
const DOCS_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "docs/",
} as const;
const EXPECTED_TARGET_PATH = "docs/livrable-cycle.md";

/** Prior pending subject A — the thing a reinstruction must actually replace. */
function priorProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:framing",
    recommendedProfile: "Standard",
    rationale: "Sujet de décision antérieur",
    scope: "écriture de document bornée — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: EXPECTED_TARGET_PATH,
      scopeIn: ["docs/"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

async function markPendingWithSnapshot(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
): Promise<void> {
  const subjectDigest = computeProposalSubjectDigest(
    sealProposalExecutionBasis(proposal),
    proposal.proposalId,
  );
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest,
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    proposal,
  });
  expect(written.ok).toBe(true);
}

describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — application path AP11–AP24", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("journey-integrity-apppath.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jiap" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  /**
   * Durable Product truth required by the Artifact-continuation path:
   * Project + LPS + active CycleInstance (pilot lifecycle started) +
   * REQUIRE_ARTIFACT obligation + repository binding.
   */
  async function seedActiveCycleProject(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `Journey integrity ${suffix}`,
      objective: "Prouver la continuité du sujet de décision",
      context: "cycle actif + REQUIRE_ARTIFACT",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `JI${suffix.toUpperCase()}`,
      idempotencyKey: `idem:jiap-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("seed: createProject failed");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("seed: LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
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

    const cycleInstanceId = `cyc:jiap-${suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
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
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-15T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("seed: authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("seed: LPS unavailable");

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

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-15T08:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...DOCS_BINDING,
    });
    expect(bound.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  /** Layer A — send with an armed reinstruction; returns the committed subject. */
  async function runReinstructionTurns(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
    priorProposalId: string;
    newProposalId: string;
  }> {
    const { projectId, cycleInstanceId } = await seedActiveCycleProject(suffix);
    const ctx = await currentF2Context(runtime, projectId);
    const prior = priorProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: `prop:f2:jiap-${suffix}-a`,
    });
    await markPendingWithSnapshot(runtime.oa!, prior);

    // AP11 — armed but non-committing turn: the arm must survive.
    const clarification = await projectAssistantSendAction({
      projectId,
      content: "Bonjour Nora, où en est le projet ?",
      reinstructionOfProposalId: prior.proposalId,
    });
    expect(clarification.ok).toBe(true);
    if (!clarification.ok) throw new Error("clarification turn failed");
    expect(clarification.reinstructionTransition).toBe("not_consumed");
    expect(clarification.f2?.proposal?.status).not.toBe("DECISION_REQUIRED");

    const stillPending = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(stillPending.ok).toBe(true);
    if (!stillPending.ok) throw new Error("pending read failed");
    expect(stillPending.markers.map((m) => m.proposalId)).toEqual([
      prior.proposalId,
    ]);

    // AP12 — Nora mints the replacement subject on her own turn.
    const mint = await projectAssistantSendAction({
      projectId,
      content: `Matérialise ce livrable. ${MATERIALIZE_SIGNAL}`,
      reinstructionOfProposalId: prior.proposalId,
    });
    expect(mint.ok).toBe(true);
    if (!mint.ok) throw new Error("mint turn failed");
    expect(mint.f2?.turnKind).toBe("f2_proposal");
    expect(mint.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(mint.reinstructionTransition).toBe("superseded");

    const newProposalId = mint.f2?.proposal?.proposalId ?? "";
    expect(newProposalId).not.toBe("");
    expect(newProposalId).not.toBe(prior.proposalId);

    return {
      projectId,
      cycleInstanceId,
      priorProposalId: prior.proposalId,
      newProposalId,
    };
  }

  it("AP11/AP12 — send action: armed clarification not_consumed, mint superseded", async () => {
    const { projectId, priorProposalId, newProposalId } =
      await runReinstructionTurns("t1");

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([newProposalId]);
    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
      newProposalId,
    );

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const priorItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes(priorProposalId.replace(/^prop:f2:/, "")),
    );
    expect(priorItem?.status).toBe("resolved");
    expect(priorItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
  });

  it("AP13 — process-local loss after the mint: the same subject is reconstructed", async () => {
    const { projectId, newProposalId } = await runReinstructionTurns("t2");

    resetF2ProposalStoreForTests();
    expect(getProposal(newProposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([newProposalId]);
    expect(getProposal(newProposalId)?.status).toBe("DECISION_REQUIRED");

    // The reconstructed subject agrees with live Product truth, not with itself.
    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const live = await currentF2Context(runtime, projectId);
    expect(active.markers[0]?.lpsId).toBe(live.lpsId);
    expect(active.markers[0]?.lpsVersion).toBe(live.lpsVersion);
  });

  it("AP21–AP24 — reconstructed subject → propose → decide → PREPARE → inspect (ZERO Attempt, STOP)", async () => {
    const { projectId, newProposalId } = await runReinstructionTurns("t3");

    // Pick the chain back up from durable truth only.
    resetF2ProposalStoreForTests();
    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    if (read.kind !== "pending_reinstruction_required") {
      throw new Error(`unexpected decision subject kind: ${read.kind}`);
    }
    expect(read.recoverableProposalIds).toEqual([newProposalId]);

    // AP21 — Options are instructed on the Proposal subject, never a generic one.
    const proposed = await w2ProposeTrajectoryOptionsAction({
      projectId,
      proposalId: newProposalId,
      // Hostile client payload — must be ignored by the server.
      targetPath: "/etc/passwd",
      requestedOperation: "shell_exec",
      objective: "exécuter maintenant",
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposalId).toBe(newProposalId);
    expect(proposed.executionPerformed).toBe(false);

    // AP22 — Pilote decides "poursuivre" on the presented set.
    const decided = await w2DecideTrajectoryAction({
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    const decisionId = decided.decision.decisionId;

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    const executionBasis = hd.decision.decisionBasis?.executionBasis;
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.sourceRef).toBe(newProposalId);
    expect(hd.decision.selectedOptionId).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(executionBasis?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    // docs_write lineage travels in the sealed DecisionBasis, not in a UI field.
    expect(executionBasis?.intentKind).toBe("docs_write");
    expect(executionBasis?.targetPath).toBe(EXPECTED_TARGET_PATH);
    expect(executionBasis?.requiredCapabilities).toContain(
      "cap:cursor.docs_write",
    );

    /**
     * AP23 — PREPARE from the durable decision. No Attempt, no execution.
     *
     * UI CONTRACT LINKAGE (single source of truth for the Pilot journey):
     * TrajectorySurface.prepareProposalBackedContract routes this very action
     * and sends EXACTLY this payload — `{ projectId, decisionId }`. It never
     * sends targetPath, operation, qualifiedOperationKind or any authority
     * claim, because the sealed DecisionBasis asserted above already carries
     * them. The surface-side proof of that payload shape lives in
     * __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
     * ("PREPARE sends projectId + decisionId only").
     */
    const uiPayload = { projectId, decisionId } as const;
    expect(Object.keys(uiPayload).sort()).toEqual(["decisionId", "projectId"]);
    const prepared = await projectAssistantPrepareM3Action(uiPayload);
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    expect(prepared.f3.contract.status).not.toMatch(/executing|executed/i);
    expect(prepared.f3.cursorReal).toBe(false);
    expect(prepared.f3.executionAllowed).toBe(false);

    // AP24 — Inspect is the last admissible step: it grants nothing.
    const inspected = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: prepared.f3.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.grantsAuthority).toBe(false);
    expect(inspected.statusLabel).toBe("INSPECTÉ");
    expect(inspected.executionContractId).toBe(
      prepared.f3.contract.executionContractId,
    );
  });

  it.each([
    ["amend", "t4", PROPOSAL_SUBJECT_AMEND_REF],
    ["refuse", "t5", PROPOSAL_SUBJECT_REFUSE_REF],
  ])(
    "AP25 — %s closes the subject: the PREPARE application path fails closed",
    async (_label, suffix, selectedOptionRef) => {
      const { projectId, newProposalId } = await runReinstructionTurns(suffix);

      resetF2ProposalStoreForTests();
      const read = await readActiveProposalDecisionSubject(
        runtime.oa!,
        projectId,
      );
      expect(read.ok).toBe(true);
      if (!read.ok) return;

      const proposed = await w2ProposeTrajectoryOptionsAction({
        projectId,
        proposalId: newProposalId,
      });
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;

      const decided = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef,
        canActAsMorris: true,
        claimedAuthorityLevel: "N3",
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;

      // The surface hides the PREPARE CTA for amend/refuse; the application
      // path must refuse it too — hiding is not enforcing.
      const prepared = await projectAssistantPrepareM3Action({
        projectId,
        decisionId: decided.decision.decisionId,
      });
      expect(prepared.ok).toBe(false);
      if (prepared.ok) return;
      expect(prepared.code).toBe("PREPARE_NOT_APPLICABLE");

      // Same refusal on the legacy W2 sandbox PREPARE path. The server action
      // needs a request scope for authentication, so the refusal is proven on
      // the application function the action delegates to.
      const sandbox = await prepareExecutionContractFromW2Decision({
        oa: runtime.oa!,
        projectId,
        decisionId: decided.decision.decisionId,
        currentContext: await currentF2Context(runtime, projectId),
        forceLocalAuthority: true,
        qualifiedOperationKind: "generate-temporary-artifact",
      });
      expect(sandbox.ok).toBe(false);
      if (sandbox.ok) return;
      expect(sandbox.code).toBe("PREPARE_NOT_APPLICABLE");
    },
  );

  it("AP23b — hostile PREPARE extras are ignored: same sealed contract, no execution", async () => {
    const { projectId, newProposalId } = await runReinstructionTurns("t6");

    resetF2ProposalStoreForTests();
    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;

    const proposed = await w2ProposeTrajectoryOptionsAction({
      projectId,
      proposalId: newProposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await w2DecideTrajectoryAction({
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const prepared = await projectAssistantPrepareM3Action({
      projectId,
      decisionId: decided.decision.decisionId,
      real: true,
      mode: "REAL",
      command: "rm -rf /",
      adapterRef: "adapter:cursor-real",
      agentId: "agent:whatever",
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    // Nothing from the hostile payload reached the contract: the action is the
    // sealed DecisionBasis operation, and PREPARE stays PREPARE.
    expect(prepared.f3.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(prepared.f3.contract.action).not.toMatch(/rm -rf/);
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.cursorReal).toBe(false);
    expect(prepared.f3.executionAllowed).toBe(false);
    expect(prepared.f3.contract.status).not.toMatch(/executing|executed/i);
  });
});
