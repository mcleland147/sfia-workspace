/**
 * CORR-PROOF-11 — Explicit reinstruction supersession + pilot language.
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
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  listActivePendingDecisionSubjectMarkers,
  replacePendingDecisionSubjectForExplicitReinstruction,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
  assertExplicitReinstructionGate,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  formatNoraAssistantDisplayText,
  pilotPendingReinstructionMessage,
  pilotPrepareNotApplicableMessage,
  pilotProposalOptionLabel,
} from "@/features/project-assistant/presentationLabels";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  registerLocalMorrisGateAuthority,
} from "@/lib/oa/decision";
import type {
  RuntimeApplicationService,
  RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:corr11-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
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
      targetRepositoryRef: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
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

describe("CORR-PROOF-11 — reinstruction + pilot language R01–R22", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr11.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr11" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c11",
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

  it("R01 — first-time writePending still creates a single effective pending", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r01",
    });
    await markPending(runtime.oa!, proposal);
    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r01",
    ]);
  });

  it("R02/R07 — replacePending atomically resolves old + activates new", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const oldP = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r02-old",
    });
    await markPending(runtime.oa!, oldP);
    const newId = "prop:f2:corr11-r02-new";
    const sealed = sealProposalExecutionBasis(oldP);
    const subjectDigest = computeProposalSubjectDigest(sealed, newId);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: oldP.proposalId,
        newProposalId: newId,
        subjectDigest,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(true);
    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    expect(active.markers.map((m) => m.proposalId)).toEqual([newId]);

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const oldItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes("corr11-r02-old"),
    );
    expect(oldItem?.status).toBe("resolved");
    expect(oldItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
    expect(oldItem?.relatedObjects).toEqual(
      expect.arrayContaining([
        "resolved:superseded_by_reinstruction",
        `superseded_by:${newId}`,
      ]),
    );
  });

  it("R03 — replace fails when oldProposalId is not effective pending", async () => {
    const { projectId, ctx } = await seed();
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: "prop:f2:missing",
        newProposalId: "prop:f2:new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
    if (replaced.ok) return;
    expect(replaced.code).toBe("REINSTRUCTION_SUBJECT_NOT_EFFECTIVE");
  });

  it("R04 — replace fails when oldProposalId equals newProposalId or empty", async () => {
    const { projectId, ctx } = await seed();
    const same = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "prop:f2:same",
      newProposalId: "prop:f2:same",
      subjectDigest: "digest",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(same.ok).toBe(false);
    if (!same.ok) expect(same.code).toBe("INVALID_REINSTRUCTION_SUBJECT");

    const empty = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "",
      newProposalId: "prop:f2:new",
      subjectDigest: "digest",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(empty.ok).toBe(false);
  });

  it("R05 — replace fails when a bound awaiting Proposal OptionSet exists", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r05",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposal.proposalId,
        newProposalId: "prop:f2:corr11-r05-new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
    if (replaced.ok) return;
    expect(replaced.code).toBe("BOUND_PROPOSAL_SUBJECT_BLOCKS_REINSTRUCTION");
  });

  it("R08 — gate blocks competing DECISION_REQUIRED without explicit reinstruction", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const first = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r08-a",
    });
    await markPending(runtime.oa!, first);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: null,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");
    expect(gated.message).not.toMatch(/pending_reinstruction_required/);
    expect(gated.message).toMatch(/Reformulez|reformul/i);

    const after = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r08-a",
    ]);
  });

  it("M01/S01 — two effective pending + reinstruction A → AMBIGUOUS_PENDING_REINSTRUCTION", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-m01-a",
    });
    await markPending(runtime.oa!, a);
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-m01-b",
    });
    await markPending(runtime.oa!, b);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: a.proposalId,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");
    expect(gated.message).toMatch(/Plusieurs demandes/i);
    expect(gated.message).not.toMatch(/fallback|process-local|ProjectTrajectory/i);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId).sort()).toEqual(
      ["prop:f2:corr11-m01-a", "prop:f2:corr11-m01-b"].sort(),
    );
  });

  it("M02/S02 — two effective pending + direct replace A→C → AMBIGUOUS, A+B unchanged", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-m02-a",
    });
    await markPending(runtime.oa!, a);
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-m02-b",
    });
    await markPending(runtime.oa!, b);

    const sealed = sealProposalExecutionBasis(b);
    const newId = "prop:f2:corr11-m02-c";
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: newId,
        subjectDigest: computeProposalSubjectDigest(sealed, newId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
    if (replaced.ok) return;
    expect(replaced.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId).sort()).toEqual(
      ["prop:f2:corr11-m02-a", "prop:f2:corr11-m02-b"].sort(),
    );
    expect(effective.markers.some((m) => m.proposalId === newId)).toBe(false);
  });

  it("M03/S04 — single pending A + explicit reinstruction still atomic", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-m03-a",
    });
    await markPending(runtime.oa!, a);

    const sealed = sealProposalExecutionBasis(a);
    const newId = "prop:f2:corr11-m03-b";
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: newId,
        subjectDigest: computeProposalSubjectDigest(sealed, newId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(true);
    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([newId]);
  });

  it("R10 — ordinary Nora turn without reinstruction does not resolve pending", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r10",
    });
    await markPending(runtime.oa!, proposal);

    const chat = await orchestrateAssistantSend({
      projectId,
      content: "Bonjour Nora, où en est le projet ?",
    });
    expect(chat.ok).toBe(true);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r10",
    ]);
  });

  it("R11 — invalid reinstructionOfProposalId fails closed", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r11",
    });
    await markPending(runtime.oa!, proposal);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: "prop:f2:not-pending",
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("REINSTRUCTION_SUBJECT_NOT_EFFECTIVE");
  });

  it("R12 — replace after saveProposal pattern: new subject supersedes; failure leaves old", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const old = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r12-old",
    });
    await markPending(runtime.oa!, old);

    const newProposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r12-new",
    });
    const sealed = sealProposalExecutionBasis(newProposal);
    const subjectDigest = computeProposalSubjectDigest(
      sealed,
      newProposal.proposalId,
    );
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: old.proposalId,
        newProposalId: newProposal.proposalId,
        subjectDigest,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(true);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      newProposal.proposalId,
    ]);

    // Fail-closed path: invalid replace leaves prior pending authoritative
    const fail = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "prop:f2:ghost",
      newProposalId: "prop:f2:corr11-r12-fail",
      subjectDigest: "x",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(fail.ok).toBe(false);
    const still = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(still.ok).toBe(true);
    if (!still.ok) return;
    expect(still.markers.map((m) => m.proposalId)).toEqual([
      newProposal.proposalId,
    ]);
  });

  it("R14/R15 — recoverableProposalIds + pilot message when store intact vs lost", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r14",
    });
    await markPending(runtime.oa!, proposal);

    const recoverable = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(recoverable.ok).toBe(true);
    if (!recoverable.ok) return;
    expect(recoverable.kind).toBe("pending_reinstruction_required");
    if (recoverable.kind !== "pending_reinstruction_required") return;
    expect(recoverable.recoverableProposalIds).toEqual([proposal.proposalId]);
    expect(recoverable.message).toMatch(/instruire|instruction/i);
    expect(recoverable.message).not.toMatch(/perte process-local/i);

    resetF2ProposalStoreForTests();
    const lost = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(lost.ok).toBe(true);
    if (!lost.ok) return;
    expect(lost.kind).toBe("pending_reinstruction_required");
    if (lost.kind !== "pending_reinstruction_required") return;
    expect(lost.recoverableProposalIds).toEqual([]);
    expect(lost.message).toMatch(/reformul/i);
    expect(lost.message).not.toMatch(/perte process-local|fallback|ProjectTrajectory/i);
  });

  it("R16 — propose gate keeps PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED code", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r16",
    });
    await markPending(runtime.oa!, proposal);
    resetF2ProposalStoreForTests();
    const proposed = await proposeWith(projectId, null);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED");
    expect(proposed.message).toMatch(/reformul/i);
    expect(proposed.message).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
  });

  it("R17/R18/R19 — pursue/amend/refuse option refs and prepare applicability labels", () => {
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_PURSUE_REF)).toBe(
      "Continuer",
    );
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_AMEND_REF)).toBe(
      "Modifier",
    );
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_REFUSE_REF)).toBe(
      "Ne pas poursuivre",
    );
    expect(pilotPrepareNotApplicableMessage()).toMatch(/préparation/i);
  });

  it("R20/R21/R22 — presentationLabels scrub + pending messages", () => {
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).toMatch(/Rien n'a encore été exécuté/);
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).toMatch(/écriture de document/);
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).not.toMatch(/pending_reinstruction_required/);
    expect(
      formatNoraAssistantDisplayText("DÉCISION PILOTE EXPLICITE REQUISE"),
    ).toMatch(/Votre décision est requise/);

    expect(pilotPendingReinstructionMessage({ recoverable: true })).toMatch(
      /instruction|options/i,
    );
    expect(pilotPendingReinstructionMessage({ recoverable: true })).not.toMatch(
      /perte définitive|fallback|process-local/i,
    );
    expect(pilotPendingReinstructionMessage({ recoverable: false })).toMatch(
      /reformul/i,
    );
    expect(pilotPendingReinstructionMessage({ recoverable: false })).not.toMatch(
      /fallback|process-local|ProjectTrajectory|\bpending\b/i,
    );
  });

  it("NL01 — active-cycle deterministic envelope is pilot-facing", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const oa = runtime.oa!;

    const created = await runtime.createProject({
      name: "NL01 Gestion de tâches",
      objective: "CORR-PROOF-11 Nora envelope",
      context: "active cycle + REQUIRE_ARTIFACT",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "NL01",
      idempotencyKey: `idem:corr11-nl01-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) return;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        {
          stepId: "stp:deliver",
          order: 2,
          label: "Deliver",
          state: "done",
        },
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

    const cycleInstanceId = `cyc:corr11-nl01-${Date.now()}`;
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
      issuedAt: "2026-09-14T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

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
      expectedLpsVersion: lps.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
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

    const send = await orchestrateAssistantSend({
      projectId,
      content: "Matérialise ce livrable. __F2_ARTIFACT_MATERIALIZE__",
    });
    expect(send.ok).toBe(true);
    if (!send.ok) return;
    const text = send.text ?? "";
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(text).toMatch(/cycle en cours|conservé/i);
    expect(text).toMatch(/proposition/i);
    expect(text).toMatch(/décision|Pilote/i);
    expect(text).toMatch(/Rien n'a encore été exécuté/i);
    expect(text).not.toMatch(/cyc:/);
    expect(text).not.toMatch(/CycleInstance/);
    expect(text).not.toMatch(/docs_write/);
    expect(text).not.toMatch(/DECISION_REQUIRED/);
    expect(text).not.toMatch(/ZERO Attempt/);
    expect(text).not.toMatch(/ZERO Cursor REAL/);
    expect(text).not.toMatch(/pending_reinstruction_required/);
  });

  it("R06 — DecisionRef-closed old subject cannot be reinvented as reinstruction target", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r06",
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

    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposal.proposalId,
        newProposalId: "prop:f2:corr11-r06-new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
  });
});
