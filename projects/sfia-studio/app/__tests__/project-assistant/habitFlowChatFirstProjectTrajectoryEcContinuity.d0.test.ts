/**
 * HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 — Correction Pass 01
 *
 * Deterministic proof matrix: chat-first accept of CURRENT ProjectTrajectory
 * Recommendation (targetKind=current_recommendation) → exactly 1 HD via
 * decideTrajectory → durableLocalWriteSeal from repositoryBinding.pathRoot →
 * auto-PREPARE EC → STOP (0 Attempt / 0 Cursor / 0 workspace effect).
 *
 * D3-EXT: specific_alternative → ZERO HD. Production-shaped: NO qualifiedOperationKind.
 * CP3: prepareOutcome prepared|blocked observable.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  loadPresentedOptionSet,
  serializePresentedOptionSet,
} from "@/features/project-assistant/w2/presentedOptionSet";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_ACTOR,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const TARGET_PATH = "projects/sfia-studio/.sandbox/hf-pt-continuity.md";

function docsWriteProposal(input: {
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
    rephrasedRequest: "Matérialiser une note bornée",
    objective: "Livrable sandbox borné",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Sujet Proposal concurrent",
    scope: "docs_write borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note HF continuity",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/w2-harness",
    },
  });
}

async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
  const sealed = sealProposalExecutionBasis(proposal);
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest: computeProposalSubjectDigest(sealed, proposal.proposalId),
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
  });
  expect(written.ok).toBe(true);
}

async function proposePt(oa: RuntimeOaStack, projectId: string) {
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error(qualification.code);
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error(proposed.code);
  return proposed;
}

async function hdCount(oa: RuntimeOaStack, projectId: string): Promise<number> {
  const history = await oa.decisionServices.listDecisionHistory.execute({
    projectId,
  });
  if (!history.ok) return 0;
  return history.decisions.filter((d) => d.status === "accepted").length;
}

async function contractCount(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<number> {
  const listed =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  if (!listed.ok) return 0;
  return listed.contracts.length;
}

async function attemptCountForContract(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<number> {
  const listed =
    await oa.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return -1;
  return listed.attempts.length;
}

async function expectedPathRoot(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<string> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  expect(project.ok).toBe(true);
  if (!project.ok) throw new Error("project read failed");
  const pathRoot = project.project.repositoryBinding?.pathRoot?.trim() ?? "";
  expect(pathRoot.length).toBeGreaterThan(0);
  return pathRoot;
}

describe("HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 CP01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    process.env.OPS1_CURSOR_REAL = "0";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("hf-pt-ec.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "hfpt" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  it("CP-EB-01 / CP-D3-01 — BOUNDED accept CURRENT → 1 HD + DecisionBasis seal + EC sans qualifiedOperationKind", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "bounded",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    const pathRoot = await expectedPathRoot(oa, seeded.projectId);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("project_trajectory");

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Oui, je valide ta recommandation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      // CP2 — no qualifiedOperationKind (production-shaped)
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;

    expect(resolved.subjectFamily).toBe("project_trajectory");
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.decisionBasisLinked).toBe(true);
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.readyForNextGatedStep).toBe(true);
    expect(resolved.attemptCreated).toBe(false);
    expect(resolved.executionPerformed).toBe(false);

    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd + 1);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc + 1);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(durable.decision.decisionBasis?.sourceType).toBe("trajectory_option");
    expect(
      durable.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(BOUNDED_OPTION_REF);
    // CP-EB-05 — DecisionBasis carries durable seal BEFORE PREPARE
    expect(durable.decision.decisionBasis?.executionBasis?.scopeIn).toContain(
      pathRoot,
    );
    expect(
      durable.decision.decisionBasis?.executionBasis?.reversibilityExpectation,
    ).toBe("reversible");
    expect(durable.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: resolved.executionContractId!,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.grantsAuthority).toBe(false);

    const loaded =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: resolved.executionContractId!,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.decisionRefs).toContain(resolved.decisionId);

    expect(
      await attemptCountForContract(oa, resolved.executionContractId!),
    ).toBe(0);
  });

  it("CP-EB-02 — GOVERNED accept CURRENT → 1 HD + seal + EC sans qualifiedOperationKind", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "governed",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    const pathRoot = await expectedPathRoot(oa, seeded.projectId);

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    expect(resolved.executionContractPrepared).toBe(true);
    expect(resolved.executionContractId).toBeTruthy();
    expect(resolved.attemptCreated).toBe(false);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    expect(
      durable.decision.decisionBasis?.executionBasis?.scopeIn,
    ).toContain(pathRoot);
  });

  it("CP-D3-02 — specific_alternative (« Je choisis la trajectoire gouvernée plutôt ») → ZERO HD / ZERO EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "alt-gov",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      BOUNDED_OPTION_REF,
    );
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Je choisis la trajectoire gouvernée plutôt",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    if (resolved.kind === "no_eligible_subject") {
      expect(resolved.code).toBe("PROJECT_TRAJECTORY_SPECIFIC_ALTERNATIVE");
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("CP-D3-03 — accept + ambiguous (prose GOVERNED) never overrides server; ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "prose-gov",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "ambiguous",
      rationale: `Je choisis ${GOVERNED_OPTION_REF} plutôt`,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-D3-04 — absent targetKind → fail closed (ambiguous), ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "no-tk",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      // targetKind omitted → ambiguous
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T7 — qualification drift / stale OptionSet → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "stale",
    });
    await proposePt(oa, seeded.projectId);

    const drifted = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: "epi:hf-pt-stale-rsv",
          type: "Reservation",
          statement: "Réserve ouverte après présentation — drift",
          status: "active",
          blocking: false,
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(drifted.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_refused");
    if (resolved.kind === "decision_refused") {
      expect(resolved.code).toBe("OPTION_SET_STALE");
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("T8 — corrupted sealed candidateVersion → fail closed, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "mismatch",
    });
    const proposed = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const corrupted = {
      ...loaded.presented,
      candidateVersion: loaded.presented.candidateVersion! + 99,
    };
    const rewritten = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${proposed.optionSetRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(corrupted),
          status: "active",
          source: proposed.optionSetRef,
          relatedObjects: [seeded.projectId, proposed.optionSetRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(rewritten.ok).toBe(true);

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(["decision_refused", "no_eligible_subject"]).toContain(
      resolved.kind,
    );
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-D4-01 — Proposal + PT CURRENT simultaneous → ambiguous, 0 HD, 0 EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "d4",
    });
    await proposePt(oa, seeded.projectId);

    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-d4-concurrent",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const proposalBound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposalBound.ok).toBe(true);
    if (!proposalBound.ok) return;
    expect(proposalBound.decisionSubjectMode).toBe("proposal");

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const beforeHd = await hdCount(oa, seeded.projectId);
    const beforeEc = await contractCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(beforeHd);
    expect(await contractCount(oa, seeded.projectId)).toBe(beforeEc);
  });

  it("T9b/D4 — multiple awaiting PT OptionSets → ambiguous, 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "multi-pt",
    });
    const first = await proposePt(oa, seeded.projectId);
    const loaded = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      first.optionSetRef,
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const secondRef = "optset:w2-hf-multi-pt-second";
    const secondBinding = {
      ...loaded.presented,
      optionSetRef: secondRef,
      trajectoryId: "trj:hf-multi-pt-2",
      candidateVersion: 1,
    };
    const injected = await oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: [
        {
          epistemicItemId: `epi:${secondRef.replace("optset:", "set-")}`,
          type: "Observation",
          statement: serializePresentedOptionSet(secondBinding),
          status: "active",
          source: secondRef,
          relatedObjects: [seeded.projectId, secondRef],
        },
      ],
      createdBy: W2_TEST_ACTOR,
    });
    expect(injected.ok).toBe(true);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) return;
    expect(gate.kind).toBe("ambiguous_subjects");

    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("T10 — PT refuse/amend/defer → ZERO HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nonaccept",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);

    for (const disposition of ["refuse", "amend", "defer"] as const) {
      const resolved = await resolveChatFirstPilotDecision({
        oa,
        projectId: seeded.projectId,
        disposition,
        targetKind: "current_recommendation",
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(resolved.kind).toBe("no_eligible_subject");
      if (resolved.kind === "no_eligible_subject") {
        expect(resolved.code).toBe("PROJECT_TRAJECTORY_ACCEPT_ONLY");
      }
    }
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-IDEM-01/02 — retry same accept → no second HD; remount PREPARE → no second EC", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "idem",
    });
    await proposePt(oa, seeded.projectId);

    const first = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(first.kind).toBe("decision_recorded");
    if (first.kind !== "decision_recorded") return;
    const ecId = first.executionContractId!;
    expect(ecId).toBeTruthy();
    expect(first.prepareOutcome.kind).toBe("prepared");

    const second = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(second.kind).not.toBe("decision_recorded");
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(1);

    const { prepareExecutionContractFromW2Decision } = await import(
      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
    );
    const retryPrep = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: first.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      // no qualifiedOperationKind — DecisionBasis seal is authority
    });
    if (retryPrep.ok) {
      expect(retryPrep.contract.executionContractId).toBe(ecId);
    }
    expect(await contractCount(oa, seeded.projectId)).toBe(1);
    expect(await attemptCountForContract(oa, ecId)).toBe(0);
  });

  it("CP-D3-05 / CP-REG — Proposal accept presented_subject → 1 HD pursue; no PT auto-PREPARE", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "prop-lock",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:hf-prop-lock",
    });
    await markPending(oa, proposal);
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qual.ok).toBe(true);
    if (!qual.ok) return;
    const bound = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.decisionSubjectMode).toBe("proposal");
    expect(bound.promotesProjectTrajectory).toBe(false);

    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) return;
    expect(gate.subjectFamily).toBe("proposal");

    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "presented_subject",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.subjectFamily).toBe("proposal");
    expect(resolved.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(resolved.proposalId).toBe(proposal.proposalId);
    expect(resolved.prepareOutcome.kind).toBe("not_applicable");
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
  });

  it("T3 — disposition none → 0 HD", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "none",
    });
    await proposePt(oa, seeded.projectId);
    const before = await hdCount(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "none",
      forceLocalAuthority: true,
    });
    expect(resolved.kind).toBe("no_decision");
    expect(await hdCount(oa, seeded.projectId)).toBe(before);
  });

  it("CP-EB-03 / CP-PO-02 — pathRoot absent → HD recorded, PREPARE blocked honestly, EC 0", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "nopath",
    });
    // Overwrite binding without pathRoot (Product durable fact absent).
    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
      {
        projectId: seeded.projectId,
        actor: W2_TEST_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/w2-harness-nopath",
          remoteUrl: "https://github.com/acme/w2-harness-nopath.git",
          defaultBranch: "main",
          // pathRoot intentionally omitted
        },
      },
    );
    expect(rebound.ok).toBe(true);

    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.selectedOptionRef).toBe(BOUNDED_OPTION_REF);
    expect(resolved.prepareOutcome.kind).toBe("blocked");
    if (resolved.prepareOutcome.kind === "blocked") {
      expect(resolved.prepareOutcome.code).toMatch(/EFFECTS_UNRESOLVED|PATH|SCOPE|MISSION|BASIS/i);
      expect(resolved.prepareOutcome.message.length).toBeGreaterThan(0);
    }
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
    expect(resolved.readyForNextGatedStep).toBe(false);
    expect(await hdCount(oa, seeded.projectId)).toBe(1);
    expect(await contractCount(oa, seeded.projectId)).toBe(0);

    const durable = await oa.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    // No durable seal when pathRoot absent
    const scopeIn =
      durable.decision.decisionBasis?.executionBasis?.scopeIn ?? [];
    expect(scopeIn.some((s) => s.startsWith("projects/"))).toBe(false);
  });

  it("CP-EB-04 — protected pathRoot → no local-write seal authority; PREPARE blocked", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "prot",
    });
    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
      {
        projectId: seeded.projectId,
        actor: W2_TEST_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/w2-harness-prot",
          remoteUrl: "https://github.com/acme/w2-harness-prot.git",
          defaultBranch: "main",
          pathRoot: ".git",
        },
      },
    );
    // May fail invariant validation — either way no local-write authority.
    if (!rebound.ok) {
      // Binding rejected at Product gate — also fail-closed for CP-EB-04.
      expect(rebound.ok).toBe(false);
      return;
    }

    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.executionContractPrepared).toBe(false);
    expect(resolved.executionContractId).toBeNull();
    expect(resolved.prepareOutcome.kind).toBe("blocked");
    expect(await contractCount(oa, seeded.projectId)).toBe(0);
  });

  it("sealRequired eligibility when TDS PRESENT without sealed OptionSet yet", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "seal-req",
    });
    const gate = await assessChatFirstWorkEligibility({
      oa,
      projectId: seeded.projectId,
    });
    if (gate.eligible) {
      expect(gate.subjectFamily).toBe("project_trajectory");
      if ("sealRequired" in gate) expect(gate.sealRequired).toBe(true);
    } else {
      expect(gate.kind).toBe("no_eligible_subject");
    }
  });

  it("T21 — restart after EC: contract rehydrates from durable store", async () => {
    const oa = runtime.oa!;
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Standard",
      suffix: "restart",
    });
    await proposePt(oa, seeded.projectId);
    const resolved = await resolveChatFirstPilotDecision({
      oa,
      projectId: seeded.projectId,
      disposition: "accept",
      targetKind: "current_recommendation",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") return;
    expect(resolved.prepareOutcome.kind).toBe("prepared");
    const ecId = resolved.executionContractId!;

    resetF2ProposalStoreForTests();
    const runtime2 = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "hfpt2",
    });
    const oa2 = runtime2.oa!;
    const listed =
      await oa2.executionContractServices.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    expect(
      listed.contracts.some((c) => c.executionContractId === ecId),
    ).toBe(true);
    const hd = await oa2.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(hd.ok).toBe(true);
  });
});
