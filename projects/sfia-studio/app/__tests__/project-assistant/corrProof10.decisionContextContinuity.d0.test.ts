/**
 * CORR-PROOF-10 — Decision context continuity (Proposal subject ↔ W2 Options/HD).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  listActivePendingDecisionSubjectMarkers,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

/** Probe OA store for all known ProjectTrajectory versions (persistence truth). */
async function snapshotTrajectories(oa: RuntimeOaStack, projectId: string) {
  const versions: { version: number; trajectoryId: string; status: string }[] =
    [];
  for (let v = 1; v <= 64; v += 1) {
    const got = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: v,
    });
    if (!got.ok) break;
    versions.push({
      version: got.trajectory.version,
      trajectoryId: got.trajectory.trajectoryId,
      status: got.trajectory.status,
    });
  }
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  return {
    versions,
    count: versions.length,
    fingerprint: versions
      .map((x) => `${x.trajectoryId}@${x.version}:${x.status}`)
      .join("|"),
    currentOk: current.ok,
    currentStatus: current.ok ? current.trajectory.status : null,
  };
}

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
  targetPath?: string;
  requestedOperation?: string;
  morrisGateRequired?: boolean;
  eiOverrides?: Record<string, unknown>;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:corr10-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: input.morrisGateRequired ?? true,
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
    requestedOperation: input.requestedOperation ?? null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: input.targetPath ?? TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation:
        input.requestedOperation ?? F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
      // CR-CI506-03 — automatic projects/… docs_write must seal CREATE/UPDATE
      // AND a coherent repository identity for PREPARE revalidation.
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/vitest-default",
      ...input.eiOverrides,
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

describe("CORR-PROOF-10 — decision context continuity", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr10" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(
    projectId: string,
    proposalId?: string | null,
  ) {
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
      proposalId: proposalId ?? null,
    });
  }

  it("T01/T02/T03/T14 — Proposal docs_write subject → subject options, not generic trio; no new cycle", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t01",
    });

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.proposalId).toBe(proposal.proposalId);
    expect(proposed.promotesProjectTrajectory).toBe(false);
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposedTrajectory).toBeNull();
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(refs).not.toContain(GOVERNED_OPTION_REF);
    expect(refs).not.toContain(BOUNDED_OPTION_REF);
    expect(refs).not.toContain(CLARIFY_OPTION_REF);

    const joined = proposed.options.map((o) => o.intent).join(" ");
    expect(joined).toContain(TARGET_PATH);
    expect(joined).toContain(F2_ARTIFACT_MATERIALIZATION_OPERATION);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);

    // T14 — active cycle unchanged (same instance still active).
    const after = await currentF2Context(runtime, projectId);
    expect(after.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("T04/T15 — propose does not create HumanDecision or ExecutionContract", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t04",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });

  it("T05/T06/T07/T12 — HD references same subject; DecisionBasis seals path/op; no trajectory promotion", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t05",
    });
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

    expect(decided.promotesProjectTrajectory).toBe(false);
    expect(decided.decisionSubjectMode).toBe("proposal");
    expect(decided.decision.proposalId).toBe(proposal.proposalId);
    expect(decided.trajectory).toBeNull();
    expect(decided.executionPerformed).toBe(false);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    // ZERO ProjectTrajectory mutation — none created by propose/decide proposal path.
    expect(current.ok).toBe(false);
    expect(getProposal(proposal.proposalId)?.status).toBe("APPROVED");
  });

  it("T08 — project mismatch blocks", async () => {
    const a = await seed();
    const b = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10b",
    });
    const proposal = docsWriteProposal({
      projectId: a.projectId,
      lpsId: a.ctx.lpsId,
      lpsVersion: a.ctx.lpsVersion,
      doctrineDigest: a.ctx.doctrineDigest,
      activeCycleInstanceId: a.cycleInstanceId,
      proposalId: "prop:f2:corr10-t08",
    });
    const proposed = await proposeWith(b.projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROJECT_MISMATCH");
  });

  it("T09 — stale proposal context blocks", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion + 99,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t09",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_STALE");
  });

  it("T10 — OptionSet / subject mismatch blocks decide", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t10",
    });
    const subjectProposed = await proposeWith(projectId, proposal.proposalId);
    expect(subjectProposed.ok).toBe(true);
    if (!subjectProposed.ok) return;

    const cross = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: subjectProposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      // Hostile trajectory fields — ignored in proposal mode.
      trajectoryId: "trj:hostile",
      candidateVersion: 999,
      forceLocalAuthority: true,
    });
    expect(cross.ok).toBe(false);
    if (cross.ok) return;
    expect(cross.code).toBe("OPTION_NOT_PRESENTED");
  });

  it("T11/R22 — hostile client targetPath/requestedOperation ignored", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t11",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
      // @ts-expect-error hostile fields are not on the typed input
      targetPath: "/etc/passwd",
      requestedOperation: "github.pr.merge",
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      oa,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    expect(presented.presented.sealedExecutionBasis?.targetPath).toBe(
      TARGET_PATH,
    );
    expect(presented.presented.sealedExecutionBasis?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T13 — true trajectory path unchanged when no active Proposal", async () => {
    const { projectId } = await seed();
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(proposed.promotesProjectTrajectory ?? true).toBe(true);
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    if (!proposed.proposedTrajectory) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.promotesProjectTrajectory).toBe(true);
    expect(decided.decisionSubjectMode).toBe("project_trajectory");
    expect(decided.trajectory).not.toBeNull();
    expect(decided.trajectory!.status).toBe("validated");
    expect(decided.trajectory!.isCurrent).toBe(true);
  });

  it("T16 — PREPARE after pursue HD keeps sealed executionBasis lineage", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t16",
    });
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

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    // Existing Proposal→EC seam (prepareM3FromDecision) — no client-widened path/op.
    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T03:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T17 — missing proposal before binding = fail closed (no generic fallback)", async () => {
    const { projectId } = await seed();
    const proposed = await proposeWith(projectId, "prop:f2:missing");
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("T17b — active DECISION_REQUIRED without proposalId refuses generic fallback", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-active",
    });
    const proposed = await proposeWith(projectId, null);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("ACTIVE_PROPOSAL_SUBJECT_REQUIRED");
  });

  it("T19/T20 — no REAL provider / no dogfood mutation markers", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});

describe("CORR-PROOF-10 Critical Remediation R01–R30", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-remed.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10r" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "rem",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId?: string | null) {
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
      proposalId: proposalId ?? null,
    });
  }

  it("R01/R02/R25 — propose+pursue create ZERO ProjectTrajectory; cycle unchanged", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r01",
    });
    await markPending(runtime.oa!, proposal);

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.proposedTrajectory).toBeNull();
    const mid = await snapshotTrajectories(runtime.oa!, projectId);
    expect(mid.fingerprint).toBe(before.fingerprint);
    expect(mid.count).toBe(before.count);

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
    expect(after.count).toBe(before.count);
    const ctxAfter = await currentF2Context(runtime, projectId);
    expect(ctxAfter.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("R03/R04 — amend and refuse create ZERO ProjectTrajectory", async () => {
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix,
      });
      const ctx = await currentF2Context(runtime, seeded.projectId);
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r03-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(decided.trajectory).toBeNull();
      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
  });

  it("R05/R11/R28 — true trajectory path still creates/promotes when no pending subject", async () => {
    const { projectId } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    const mid = await snapshotTrajectories(runtime.oa!, projectId);
    expect(mid.count).toBeGreaterThan(before.count);
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory?.status).toBe("validated");
  });

  it("R06/R07 — decide proposal without trajectory fields; hostile trajectory fields ignored", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r06",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: "trj:hostile-client",
      candidateVersion: 999,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok && hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();
  });

  it("R08/R09 — restart before binding: pending marker + lost store → fail closed, no generic options, no trajectory", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r08",
    });
    await markPending(runtime.oa!, proposal);
    const pending = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(pending.ok).toBe(true);
    if (!pending.ok) return;
    expect(pending.markers.some((m) => m.proposalId === proposal.proposalId)).toBe(
      true,
    );

    const before = await snapshotTrajectories(runtime.oa!, projectId);
    resetF2ProposalStoreForTests(); // simulate restart / process-local loss

    const withoutId = await proposeWith(projectId, null);
    expect(withoutId.ok).toBe(false);
    if (withoutId.ok) return;
    expect(withoutId.code).toBe(
      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
    );

    const withStaleId = await proposeWith(projectId, proposal.proposalId);
    expect(withStaleId.ok).toBe(false);
    if (withStaleId.ok) return;
    expect(withStaleId.code).toBe(
      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
    );

    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
  });

  it("R10 — after OptionSet binding, pending marker is resolved", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r10",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    const pending = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(pending.ok).toBe(true);
    if (!pending.ok) return;
    expect(
      pending.markers.some((m) => m.proposalId === proposal.proposalId),
    ).toBe(false);
  });

  it("R12/R13/R14/R15 — server decidability", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const base = {
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
    };

    const proposedStatus = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r12",
      status: "PROPOSED",
    });
    let r = await proposeWith(projectId, proposedStatus.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");

    const ready = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r13",
      status: "READY_NO_GATE",
      morrisGateRequired: false,
    });
    r = await proposeWith(projectId, ready.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");

    const noGate = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r14",
      status: "DECISION_REQUIRED",
      morrisGateRequired: false,
    });
    r = await proposeWith(projectId, noGate.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_GATE_REQUIRED");

    const ok = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r15",
      status: "DECISION_REQUIRED",
      morrisGateRequired: true,
    });
    await markPending(runtime.oa!, ok);
    r = await proposeWith(projectId, ok.proposalId);
    expect(r.ok).toBe(true);
  });

  it("R16–R20 — full executionBasis digest coverage + DecisionBasis sourceDigest", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const base = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r16",
    });
    const sealed = sealProposalExecutionBasis(base);
    const d0 = computeProposalSubjectDigest(sealed, base.proposalId);

    const dCaps = computeProposalSubjectDigest(
      { ...sealed, requiredCapabilities: ["cap:other"] },
      base.proposalId,
    );
    expect(dCaps).not.toBe(d0);

    const dScope = computeProposalSubjectDigest(
      { ...sealed, scopeIn: ["a"], scopeOut: ["b"] },
      base.proposalId,
    );
    expect(dScope).not.toBe(d0);

    const dVal = computeProposalSubjectDigest(
      {
        ...sealed,
        validationExpectations: ["v1"],
        evidenceRequirements: ["e1"],
      },
      base.proposalId,
    );
    expect(dVal).not.toBe(d0);

    const dArt = computeProposalSubjectDigest(
      {
        ...sealed,
        artifactBrief: "autre",
        contentRequirements: ["c1"],
        exitRequirementKinds: ["k1"],
      },
      base.proposalId,
    );
    expect(dArt).not.toBe(d0);

    await markPending(runtime.oa!, base);
    const proposed = await proposeWith(projectId, base.proposalId);
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
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(d0);
  });

  it("R21 — OptionSet digest mismatch fails decide", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r21",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    // Corrupt sealed observation statement digest
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const corrupted = {
      ...presented.presented,
      optionSetDigest: "deadbeef".repeat(8),
    };
    const { optionSetObservationId, serializePresentedOptionSet } =
      await import(
        "@/features/project-assistant/w2/presentedOptionSet"
      );
    const { LOCAL_PILOTE_ACTOR } = await import("@/lib/oa/decision");
    await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      items: [
        {
          epistemicItemId: optionSetObservationId(proposed.optionSetRef),
          type: "Observation",
          statement: serializePresentedOptionSet(corrupted),
          status: "active",
          source: proposed.optionSetRef,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (decided.ok) return;
    expect(decided.code).toBe("OPTION_SET_STALE");
  });

  it("R23/R24 — PREPARE pursue keeps sealed fields; amend not applicable", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r23",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const pursue = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(pursue.ok).toBe(true);
    if (!pursue.ok) return;
    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: pursue.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T04:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    // Separate amend path
    resetF2ProposalStoreForTests();
    const seeded2 = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "r24",
    });
    const ctx2 = await currentF2Context(runtime, seeded2.projectId);
    const p2 = docsWriteProposal({
      projectId: seeded2.projectId,
      lpsId: ctx2.lpsId,
      lpsVersion: ctx2.lpsVersion,
      doctrineDigest: ctx2.doctrineDigest,
      activeCycleInstanceId: seeded2.cycleInstanceId,
      proposalId: "prop:f2:r24",
    });
    await markPending(runtime.oa!, p2);
    const proposed2 = await proposeWith(seeded2.projectId, p2.proposalId);
    expect(proposed2.ok).toBe(true);
    if (!proposed2.ok) return;
    const amend = await decideTrajectory({
      oa: runtime.oa!,
      projectId: seeded2.projectId,
      optionSetRef: proposed2.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
      forceLocalAuthority: true,
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    const { prepareExecutionContractFromW2Decision } = await import(
      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
    );
    const prepAmend = await prepareExecutionContractFromW2Decision({
      oa: runtime.oa!,
      projectId: seeded2.projectId,
      decisionId: amend.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded2.projectId),
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(prepAmend.ok).toBe(false);
    if (prepAmend.ok) return;
    expect(prepAmend.code).toBe("PREPARE_NOT_APPLICABLE");
  });

  it("R29/R30 — ZERO REAL / ZERO dogfood", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
  });
});

describe("CORR-PROOF-10 Post-binding Continuity R31–R48", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-postbind.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10pb" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: `pb-${Date.now()}`,
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string | null) {
    const qual = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    if (!qual.ok) return qual;
    return proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId,
    });
  }

  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const written = await writePendingDecisionSubjectMarker({
      oa,
      projectId: proposal.contextSnapshot.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: proposal.contextSnapshot.lpsId,
      lpsVersion: proposal.contextSnapshot.lpsVersion,
      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    });
    expect(written.ok).toBe(true);
  }

  it("R31/R32/R38/R41/R42 — restart AFTER OptionSet binding: rehydrate same OptionSet; generic instruct does not create trajectory trio", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r31",
    });
    await markPending(runtime.oa!, proposal);
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposedTrajectory).toBeNull();
    const afterBind = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterBind.fingerprint).toBe(before.fingerprint);

    const originalRef = proposed.optionSetRef;
    const originalDigest = (
      await loadPresentedOptionSet(runtime.oa!, projectId, originalRef)
    );
    expect(originalDigest.ok).toBe(true);
    if (!originalDigest.ok) return;

    resetF2ProposalStoreForTests(); // restart — ProposalStore gone; React state gone

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("bound_awaiting_decision");
    if (read.kind !== "bound_awaiting_decision") return;
    expect(read.optionSet.optionSetRef).toBe(originalRef);
    expect(read.optionSet.recommendation.recommendedOptionRef).toBe(
      proposed.recommendation.recommendedOptionRef,
    );
    expect(read.presented.optionSetDigest).toBe(
      originalDigest.presented.optionSetDigest,
    );
    expect(read.optionSet.options.map((o) => o.optionRef)).toEqual(
      proposed.options.map((o) => o.optionRef),
    );

    // Generic instruct without proposalId → rehydrate same set, ZERO trajectory trio
    const reinstruct = await proposeWith(projectId, null);
    expect(reinstruct.ok).toBe(true);
    if (!reinstruct.ok) return;
    expect(reinstruct.optionSetRef).toBe(originalRef);
    expect(reinstruct.decisionSubjectMode).toBe("proposal");
    expect(
      reinstruct.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
    ).toBe(false);
    expect(
      reinstruct.options.some((o) => o.optionRef === BOUNDED_OPTION_REF),
    ).toBe(false);
    expect(
      reinstruct.options.some((o) => o.optionRef === CLARIFY_OPTION_REF),
    ).toBe(false);
    const afterGeneric = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterGeneric.fingerprint).toBe(before.fingerprint);
  });

  it("R33/R43 — decide pursue AFTER restart with empty ProposalStore; ZERO PT; same digest", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r33",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const expectedDigest = presented.presented.proposalSubjectDigest;

    const before = await snapshotTrajectories(runtime.oa!, projectId);
    resetF2ProposalStoreForTests();
    expect(getProposal(proposal.proposalId)).toBeFalsy();

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    expect(decided.decision.proposalId).toBe(proposal.proposalId);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(expectedDigest);
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();

    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
  });

  it("R34 — amend/refuse AFTER restart with empty store: ZERO EC / ZERO PT", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix: `r34-${suffix}`,
      });
      const c = await currentF2Context(runtime, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: c.lpsId,
        lpsVersion: c.lpsVersion,
        doctrineDigest: c.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r34-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      resetF2ProposalStoreForTests();

      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(decided.trajectory).toBeNull();

      const { prepareExecutionContractFromW2Decision } = await import(
        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
      );
      const prep = await prepareExecutionContractFromW2Decision({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        decisionId: decided.decision.decisionId,
        currentContext: await currentF2Context(runtime, seeded.projectId),
        forceLocalAuthority: true,
        qualifiedOperationKind: "generate-temporary-artifact",
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) return;
      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");

      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
    void projectId;
    void cycleInstanceId;
    void ctx;
  });

  it("R35 — restart AFTER HumanDecision: subject no longer awaiting; no second HD", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r35",
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

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(decided.decision.decisionId);
    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(read.decision.proposalId).toBe(proposal.proposalId);

    const second = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");
  });

  it("R36/R37 — Epistemic read failure fails closed (not empty)", async () => {
    const { projectId } = await seed();
    const oa = runtime.oa!;
    const original = oa.cycleServices.getEpistemicState.execute.bind(
      oa.cycleServices.getEpistemicState,
    );
    oa.cycleServices.getEpistemicState.execute = async () =>
      ({
        ok: false,
        error: {
          code: "PERSISTENCE_FAILURE",
          detailCode: "EPISTEMIC_READ_BOOM",
          message: "boom",
          severity: "error",
          retryable: true,
          blocking: true,
          recoverable: true,
          domain: "D",
          timestamp: "2026-09-15T00:00:00.000Z",
        },
      }) as unknown as Awaited<ReturnType<typeof original>>;

    const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
    expect(pending.ok).toBe(false);
    if (pending.ok) return;
    expect(pending.code).toBe("EPISTEMIC_READ_FAILED");

    const { findActiveAwaitingProposalPresentedOptionSet } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const bound = await findActiveAwaitingProposalPresentedOptionSet(
      oa,
      projectId,
    );
    expect(bound.ok).toBe(false);
    if (bound.ok) return;
    expect(bound.code).toBe("EPISTEMIC_READ_FAILED");

    const propose = await proposeWith(projectId, null);
    expect(propose.ok).toBe(false);
    if (propose.ok) return;
    expect(propose.code).toBe("EPISTEMIC_READ_FAILED");

    oa.cycleServices.getEpistemicState.execute = original;
  });

  it("R39 — no active Proposal subject → ProjectTrajectory W2 accessible", async () => {
    const { projectId } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.count).toBeGreaterThan(before.count);
  });

  it("R40 — marker transition failure after binding: OptionSet still recoverable; no generic trajectory", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r40",
    });
    await markPending(runtime.oa!, proposal);

    const oa = runtime.oa!;
    const originalUpdate = oa.cycleServices.updateEpistemicState.execute.bind(
      oa.cycleServices.updateEpistemicState,
    );
    let optionSetWrites = 0;
    oa.cycleServices.updateEpistemicState.execute = async (req) => {
      const result = await originalUpdate(req);
      // After OptionSet materialisation, force marker resolve path to "fail"
      // by re-activating pending via a second write that we skip — instead:
      // detect resolve correlation and return failure.
      if (
        typeof req.correlationId === "string" &&
        req.correlationId.startsWith("cor:pending-bound:")
      ) {
        return {
          ok: false,
          error: {
            code: "PERSISTENCE_FAILURE",
            detailCode: "MARKER_RESOLVE_FAIL",
            message: "forced",
            severity: "error",
            retryable: true,
            blocking: true,
            recoverable: true,
            domain: "D",
            timestamp: "2026-09-15T00:00:00.000Z",
          },
          durationMs: 0,
        } as unknown as Awaited<ReturnType<typeof originalUpdate>>;
      }
      if (
        req.items?.some(
          (i) =>
            i.type === "Observation" &&
            typeof i.statement === "string" &&
            i.statement.includes("w2_presented_option_set"),
        )
      ) {
        optionSetWrites += 1;
      }
      return result;
    };

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(optionSetWrites).toBeGreaterThan(0);

    oa.cycleServices.updateEpistemicState.execute = originalUpdate;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(oa, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    // Bound OptionSet preferred even if pending marker still active
    expect(read.kind).toBe("bound_awaiting_decision");
    if (read.kind !== "bound_awaiting_decision") return;
    expect(read.optionSet.optionSetRef).toBe(proposed.optionSetRef);

    const generic = await proposeWith(projectId, null);
    expect(generic.ok).toBe(true);
    if (!generic.ok) return;
    expect(generic.optionSetRef).toBe(proposed.optionSetRef);
    expect(
      generic.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
    ).toBe(false);
  });

  it("R48 — ZERO REAL / ZERO dogfood mutation", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
    expect(dbPath).not.toContain(
      "sfia-studio-product-proof-preflight-35b1371d",
    );
  });
});

describe("CORR-PROOF-10 Atomic Subject Closure R49–R68", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-atomic.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10at" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: `at-${Date.now()}`,
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string | null) {
    const qual = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    if (!qual.ok) return qual;
    return proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId,
    });
  }

  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const written = await writePendingDecisionSubjectMarker({
      oa,
      projectId: proposal.contextSnapshot.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: proposal.contextSnapshot.lpsId,
      lpsVersion: proposal.contextSnapshot.lpsVersion,
      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    });
    expect(written.ok).toBe(true);
  }

  async function countDecisionRefsForOptionSet(
    projectId: string,
    optionSetRef: string,
  ): Promise<number> {
    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    if (!epistemic.ok) return -1;
    return epistemic.state.items.filter(
      (i) =>
        i.type === "DecisionRef" &&
        i.status === "active" &&
        (i.relatedObjects ?? []).includes(optionSetRef),
    ).length;
  }

  it("R49–R55 — DecisionRef failure rolls back HD+LPS; ProposalStore unchanged; retry succeeds exactly once", async () => {
    const { SqliteProductStore } = await import("@/lib/oa/project");
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r49",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const beforePt = await snapshotTrajectories(runtime.oa!, projectId);
    const lpsBefore =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;
    const decisionIdsBefore = [
      ...(lpsBefore.livingProjectState.decisionIds ?? []),
    ];
    const histBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histBefore.ok).toBe(true);
    if (!histBefore.ok) return;
    const hdCountBefore = histBefore.decisions.length;

    const store = runtime.oa!.projectServices.store;
    expect(store).toBeInstanceOf(SqliteProductStore);
    (store as InstanceType<typeof SqliteProductStore>).failNextSave =
      "epistemic";

    const failed = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;

    // R50 — no durable HD
    const histAfterFail =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histAfterFail.ok).toBe(true);
    if (!histAfterFail.ok) return;
    expect(histAfterFail.decisions.length).toBe(hdCountBefore);

    // R51 — LPS unchanged
    const lpsAfterFail =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsAfterFail.ok).toBe(true);
    if (!lpsAfterFail.ok) return;
    expect(lpsAfterFail.livingProjectState.version).toBe(lpsVersionBefore);
    expect(lpsAfterFail.livingProjectState.decisionIds ?? []).toEqual(
      decisionIdsBefore,
    );

    // R52 — no DecisionRef closure
    expect(
      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
    ).toBe(0);

    // R53 — still awaiting / rehydratable
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const stillBound = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(stillBound.ok).toBe(true);
    if (!stillBound.ok) return;
    expect(stillBound.kind).toBe("bound_awaiting_decision");
    if (stillBound.kind !== "bound_awaiting_decision") return;
    expect(stillBound.optionSet.optionSetRef).toBe(proposed.optionSetRef);

    // R54 — ProposalStore not advanced
    const local = getProposal(proposal.proposalId);
    expect(local?.status).toBe("DECISION_REQUIRED");

    // R55 — retry after restoring epistemic writes
    (store as InstanceType<typeof SqliteProductStore>).failNextSave = null;
    const retry = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) return;

    const histOk =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histOk.ok).toBe(true);
    if (!histOk.ok) return;
    expect(histOk.decisions.length).toBe(hdCountBefore + 1);
    expect(
      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
    ).toBe(1);
    const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
    expect(getProposal(proposal.proposalId)?.status).toMatch(/^APPROVED/);
  });

  it("R56/R57 — restart after success: not awaiting; second decide SUBJECT_ALREADY_DECIDED; no supersession", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r56",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const first = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const firstId = first.decision.decisionId;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(firstId);
    expect(read.decision.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(read.decision.proposalId).toBe(proposal.proposalId);

    const histBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histBefore.ok).toBe(true);
    if (!histBefore.ok) return;

    const second = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");

    const histAfter =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histAfter.ok).toBe(true);
    if (!histAfter.ok) return;
    expect(histAfter.decisions.length).toBe(histBefore.decisions.length);
    const firstHd = histAfter.decisions.find((d) => d.decisionId === firstId);
    expect(firstHd?.status).toBe("accepted");
    expect(
      histAfter.decisions.filter((d) => d.status === "superseded").length,
    ).toBe(0);
  });

  it("R58 — PREPARE pursue after atomic success keeps sealed PresentedOptionSet", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r58",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const sealed = presented.presented.sealedExecutionBasis!;
    const digest = presented.presented.proposalSubjectDigest;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const reloaded = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.presented.proposalSubjectDigest).toBe(digest);
    expect(reloaded.presented.sealedExecutionBasis?.targetPath).toBe(
      sealed.targetPath,
    );

    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T05:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("R59 — amend/refuse atomic closure + PREPARE_NOT_APPLICABLE + ZERO PT", async () => {
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix: `r59-${suffix}`,
      });
      const c = await currentF2Context(runtime, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: c.lpsId,
        lpsVersion: c.lpsVersion,
        doctrineDigest: c.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r59-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(
        await countDecisionRefsForOptionSet(
          seeded.projectId,
          proposed.optionSetRef,
        ),
      ).toBe(1);
      const { prepareExecutionContractFromW2Decision } = await import(
        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
      );
      const prep = await prepareExecutionContractFromW2Decision({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        decisionId: decided.decision.decisionId,
        currentContext: await currentF2Context(runtime, seeded.projectId),
        forceLocalAuthority: true,
        qualifiedOperationKind: "generate-temporary-artifact",
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) return;
      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");
      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
  });

  it("R62 — closePresentedProposalOptionSet removed (DecisionRef-only closure)", async () => {
    const active = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    expect(
      "closePresentedProposalOptionSet" in active,
    ).toBe(false);
  });

  it("R63/R68 — ZERO new CycleInstance / ZERO REAL / ZERO dogfood", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r63",
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
    const live = await currentF2Context(runtime, projectId);
    expect(live.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
  });
});

describe("CORR-PROOF-10 Crash-Consistency R69–R86", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-crash.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10cr" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed(suffix = `cr-${Date.now()}`) {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix,
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string | null) {
    const qual = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    if (!qual.ok) return qual;
    return proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId,
    });
  }

  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const written = await writePendingDecisionSubjectMarker({
      oa,
      projectId: proposal.contextSnapshot.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: proposal.contextSnapshot.lpsId,
      lpsVersion: proposal.contextSnapshot.lpsVersion,
      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    });
    expect(written.ok).toBe(true);
  }

  /** Simulate crash window: DecisionRef committed but pending marker cleanup never ran. */
  async function reactivateStalePendingMarker(proposal: ProposalDto) {
    await markPending(runtime.oa!, proposal);
    const raw = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      proposal.contextSnapshot.projectId,
    );
    expect(raw.ok).toBe(true);
    if (!raw.ok) return;
    expect(raw.markers.some((m) => m.proposalId === proposal.proposalId)).toBe(
      true,
    );
  }

  it("R69/R77/R78 — SUCCESS + stale pending marker → read none (DecisionRef > marker)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r69");
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r69",
    });
    await markPending(runtime.oa!, proposal);
    const beforePt = await snapshotTrajectories(runtime.oa!, projectId);
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

    await reactivateStalePendingMarker(proposal);
    resetF2ProposalStoreForTests();

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(decided.decision.decisionId);

    const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
  });

  it("R70 — after pursue closure without EC, PREPARE continuation owns next action (no competing trajectory instruct)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r70");
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r70",
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
    await reactivateStalePendingMarker(proposal);
    resetF2ProposalStoreForTests();

    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const traj = await proposeW2OptionsForProject(runtime, projectId);
    expect(traj.ok).toBe(false);
    if (traj.ok) return;
    expect(traj.code).toBe("PREPARE_CONTINUATION_OWNS_NEXT_ACTION");

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pursue_prepare_ready");
    if (read.kind !== "pursue_prepare_ready") return;
    expect(read.decision.decisionId).toBe(decided.decision.decisionId);

    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
  });

  it("R71/R72 — closed A + stale A does not neutralize pending B", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r71");
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r71-a",
    });
    await markPending(runtime.oa!, proposalA);
    const proposedA = await proposeWith(projectId, proposalA.proposalId);
    expect(proposedA.ok).toBe(true);
    if (!proposedA.ok) return;
    const decidedA = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposedA.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decidedA.ok).toBe(true);
    await reactivateStalePendingMarker(proposalA);

    // Fresh LPS context for B — use same project after A closed
    const ctxB = await currentF2Context(runtime, projectId);
    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctxB.lpsId,
      lpsVersion: ctxB.lpsVersion,
      doctrineDigest: ctxB.doctrineDigest,
      activeCycleInstanceId: ctxB.activeCycleInstanceId ?? cycleInstanceId,
      proposalId: "prop:f2:r71-b",
    });
    await markPending(runtime.oa!, proposalB);
    resetF2ProposalStoreForTests();

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.markers.map((m) => m.proposalId)).toEqual(["prop:f2:r71-b"]);
    expect(read.markers.some((m) => m.proposalId === "prop:f2:r71-a")).toBe(
      false,
    );
  });

  it("R73 — unrelated trajectory DecisionRef does not close Proposal pending B", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r73");
    // True trajectory DecisionRef first
    const traj = await proposeW2OptionsForProject(runtime, projectId);
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const decidedTrj = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: traj.optionSetRef,
      trajectoryId: traj.proposedTrajectory!.trajectoryId,
      candidateVersion: traj.proposedTrajectory!.version,
      selectedOptionRef: GOVERNED_OPTION_REF,
      forceLocalAuthority: true,
    });
    expect(decidedTrj.ok).toBe(true);

    const ctxB = await currentF2Context(runtime, projectId);
    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctxB.lpsId,
      lpsVersion: ctxB.lpsVersion,
      doctrineDigest: ctxB.doctrineDigest,
      activeCycleInstanceId: ctxB.activeCycleInstanceId ?? cycleInstanceId,
      proposalId: "prop:f2:r73-b",
    });
    await markPending(runtime.oa!, proposalB);
    resetF2ProposalStoreForTests();

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.markers.some((m) => m.proposalId === "prop:f2:r73-b")).toBe(
      true,
    );
    void ctx;
  });

  it("R74/R77 — bound awaiting B wins over stale closed marker A", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r74");
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r74-a",
    });
    await markPending(runtime.oa!, proposalA);
    const proposedA = await proposeWith(projectId, proposalA.proposalId);
    expect(proposedA.ok).toBe(true);
    if (!proposedA.ok) return;
    const decidedA = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposedA.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decidedA.ok).toBe(true);
    await reactivateStalePendingMarker(proposalA);

    const ctxB = await currentF2Context(runtime, projectId);
    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctxB.lpsId,
      lpsVersion: ctxB.lpsVersion,
      doctrineDigest: ctxB.doctrineDigest,
      activeCycleInstanceId: ctxB.activeCycleInstanceId ?? cycleInstanceId,
      proposalId: "prop:f2:r74-b",
    });
    await markPending(runtime.oa!, proposalB);
    const beforePt = await snapshotTrajectories(runtime.oa!, projectId);
    const proposedB = await proposeWith(projectId, proposalB.proposalId);
    expect(proposedB.ok).toBe(true);
    if (!proposedB.ok) return;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("bound_awaiting_decision");
    if (read.kind !== "bound_awaiting_decision") return;
    expect(read.optionSet.optionSetRef).toBe(proposedB.optionSetRef);
    expect(read.optionSet.proposalId).toBe("prop:f2:r74-b");
    const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
  });

  it("R75 — Epistemic read failure still fail-closed", async () => {
    const { projectId } = await seed("r75");
    const oa = runtime.oa!;
    const original = oa.cycleServices.getEpistemicState.execute.bind(
      oa.cycleServices.getEpistemicState,
    );
    oa.cycleServices.getEpistemicState.execute = async () =>
      ({
        ok: false,
        error: {
          code: "PERSISTENCE_FAILURE",
          detailCode: "EPISTEMIC_READ_BOOM",
          message: "boom",
          severity: "error",
          retryable: true,
          blocking: true,
          recoverable: true,
          domain: "D",
          timestamp: "2026-09-15T00:00:00.000Z",
        },
      }) as unknown as Awaited<ReturnType<typeof original>>;

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(oa, projectId);
    expect(read.ok).toBe(false);
    if (read.ok) return;
    expect(read.code).toBe("EPISTEMIC_READ_FAILED");

    oa.cycleServices.getEpistemicState.execute = original;
  });

  it("R76 — second HD still impossible with stale marker + DecisionRef", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed("r76");
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r76",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const first = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    await reactivateStalePendingMarker(proposal);
    resetF2ProposalStoreForTests();

    const second = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");
  });

  it("R86 — ZERO REAL / ZERO dogfood mutation", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
    expect(dbPath).not.toContain(
      "sfia-studio-product-proof-preflight-35b1371d",
    );
  });
});
