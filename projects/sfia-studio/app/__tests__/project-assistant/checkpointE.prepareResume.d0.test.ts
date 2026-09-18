/**
 * Checkpoint E resume — durable pursue HD → PREPARE after restart.
 * ProposalStore wiped; no EC; same decisionId; instruct not required.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { isPursueDecisionBasisCurrentForPrepare } from "@/features/project-assistant/w2/prepareReadyProposalPursueContinuation";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";

const TARGET_PATH =
  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
}): ProposalDto {
  const proposalId = input.proposalId ?? `prop:f2:ckpt-e-${Date.now()}`;
  return saveProposal({
    proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la fiche Markdown",
    objective: "Matérialiser le livrable Markdown du cycle actif",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
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
      targetRepositoryRef: "mcleland147/sfia-workspace",
      targetPath: TARGET_PATH,
      scopeIn: ["projects/sfia-studio/.sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Fiche Markdown",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
): Promise<void> {
  const sealed = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealed,
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
  });
  expect(written.ok).toBe(true);
}

describe("Checkpoint E — pursue PREPARE resume after restart", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("ckpt-e-resume.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "ckpt-e" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "resume",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId,
    });
  }

  it("T1 — wipe ProposalStore + no EC → pursue_prepare_ready same decisionId; instruct blocked", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:ckpt-e-resume-t1",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    const decisionId = decided.decision.decisionId;

    const hdBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(hdBefore.ok).toBe(true);
    if (!hdBefore.ok) return;
    const decisionCount = hdBefore.decisions.length;

    resetF2ProposalStoreForTests();
    expect(getProposal(proposal.proposalId)).toBeNull();

    const contracts =
      await runtime.oa!.executionContractServices.listExecutionContractHistory.execute(
        { projectId },
      );
    expect(contracts.ok).toBe(true);
    if (!contracts.ok) return;
    expect(contracts.contracts.length).toBe(0);

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(decisionId);
    expect(read.decision.proposalId).toBe(proposal.proposalId);
    expect(read.decision.decisionBasisLinked).toBe(true);
    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const blocked = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: null,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) return;
    expect(blocked.code).toBe("PREPARE_CONTINUATION_OWNS_NEXT_ACTION");

    const hdAfter =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(hdAfter.ok).toBe(true);
    if (!hdAfter.ok) return;
    expect(hdAfter.decisions.length).toBe(decisionCount);
    expect(getProposal(proposal.proposalId)).toBeNull();
  });

  it("T2 — doctrine-stale basis gate refuses PREPARE continuation", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:ckpt-e-resume-stale",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const loaded = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const basis = loaded.decision.decisionBasis!;
    expect(
      isPursueDecisionBasisCurrentForPrepare({
        decision: loaded.decision,
        liveDoctrineDigest: ctx.doctrineDigest,
        liveLpsVersion: ctx.lpsVersion + 10,
      }),
    ).toBe(true);
    expect(
      isPursueDecisionBasisCurrentForPrepare({
        decision: {
          ...loaded.decision,
          decisionBasis: {
            ...basis,
            proposalContext: {
              ...basis.proposalContext,
              doctrineDigest:
                "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
            },
          },
        },
        liveDoctrineDigest: ctx.doctrineDigest,
        liveLpsVersion: ctx.lpsVersion,
      }),
    ).toBe(false);
  });
});
