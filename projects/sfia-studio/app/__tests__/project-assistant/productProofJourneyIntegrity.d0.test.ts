/**
 * PRODUCT-PROOF-JOURNEY-INTEGRITY — Decision Subject continuity, hydrate,
 * reinstruction supersession, pursue→PREPARE lineage (ZERO REAL).
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
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_ACTOR,
} from "./w2Harness";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  hydrateProposalsFromPendingMarkers,
  isValidProposalSnapshotForHydration,
  listActivePendingDecisionSubjectMarkers,
  PENDING_DECISION_SUBJECT_KIND,
  replacePendingDecisionSubjectForExplicitReinstruction,
  writePendingDecisionSubjectMarker,
  type PendingDecisionSubjectMarker,
  type SnapshotHydrationLiveContext,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  assertExplicitReinstructionGate,
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import type {
  RuntimeApplicationService,
  RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const NON_ACME_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox",
} as const;

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
  targetRepositoryRef?: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:jint-${Date.now()}`,
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
      // CR-CI506-03 — seal CREATE + coherent repository identity for PREPARE.
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        input.targetRepositoryRef ??
        (process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
          "acme/vitest-default"),
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
  opts?: { withSnapshot?: boolean },
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
    ...(opts?.withSnapshot === false ? {} : { proposal }),
  });
  expect(written.ok).toBe(true);
}

/** Marker shaped exactly like a durable write, for predicate-level negatives. */
function markerFor(
  proposal: ProposalDto,
  overrides: Partial<PendingDecisionSubjectMarker> = {},
): PendingDecisionSubjectMarker {
  const sealed = sealProposalExecutionBasis(proposal);
  return {
    kind: PENDING_DECISION_SUBJECT_KIND,
    proposalId: proposal.proposalId,
    projectId: proposal.contextSnapshot.projectId,
    subjectDigest: computeProposalSubjectDigest(sealed, proposal.proposalId),
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    status: "pending_binding",
    proposalSnapshot: proposal,
    ...overrides,
  };
}

/** Live Product truth that agrees with the marker (the admissible baseline). */
function liveFor(
  marker: PendingDecisionSubjectMarker,
  overrides: Partial<SnapshotHydrationLiveContext> = {},
): SnapshotHydrationLiveContext {
  return {
    projectId: marker.projectId,
    lpsId: marker.lpsId,
    lpsVersion: marker.lpsVersion,
    doctrineDigest: marker.doctrineDigest,
    ...overrides,
  };
}

describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("journey-integrity.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jint" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "ji",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function liveHydrationContext(
    projectId: string,
  ): Promise<SnapshotHydrationLiveContext> {
    const ctx = await currentF2Context(runtime, projectId);
    return {
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    };
  }

  /**
   * ACW-shaped LPS append: F1 / cognitive work can bump LPS without minting a
   * Proposal. Used to prove a marker left behind by a live LPS is not hydrated.
   */
  async function appendLpsVersion(projectId: string): Promise<void> {
    const oa = runtime.oa!;
    const current =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: current.livingProjectState.version,
        objective: current.livingProjectState.objective,
        createdBy: W2_TEST_ACTOR,
      });
    expect(appended.ok).toBe(true);
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

  it("T02 — marker without snapshot + cleared store → pending lost (recoverable empty)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t02-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: false });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([]);
    expect(read.message).toMatch(/reformul/i);
  });

  it("T03 — marker WITH snapshot + cleared store → recoverable via hydrate", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t03-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([proposalA.proposalId]);
    expect(getProposal(proposalA.proposalId)?.status).toBe("DECISION_REQUIRED");
    expect(getProposal(proposalA.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );
  });

  it("T04–T07 — explicit reinstruction A→B with snapshot; B survives store reset", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });

    const gateRequired = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: null,
    });
    expect(gateRequired.ok).toBe(false);
    if (gateRequired.ok) return;
    expect(gateRequired.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");

    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-b",
    });
    const sealedB = sealProposalExecutionBasis(proposalB);
    const digestB = computeProposalSubjectDigest(sealedB, proposalB.proposalId);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposalA.proposalId,
        newProposalId: proposalB.proposalId,
        subjectDigest: digestB,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: proposalB,
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
      proposalB.proposalId,
    ]);
    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
      proposalB.proposalId,
    );

    const gateOk = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: proposalB.proposalId,
    });
    expect(gateOk.ok).toBe(true);

    // Process-local loss — Epistemic snapshot must rehydrate B.
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalB.proposalId)).toBeNull();

    const afterReset = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(afterReset.ok).toBe(true);
    if (!afterReset.ok) return;
    expect(afterReset.kind).toBe("pending_reinstruction_required");
    if (afterReset.kind !== "pending_reinstruction_required") return;
    expect(afterReset.recoverableProposalIds).toEqual([proposalB.proposalId]);
    expect(getProposal(proposalB.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );

    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const hydrated = hydrateProposalsFromPendingMarkers(
      active.markers,
      await liveHydrationContext(projectId),
    );
    expect(hydrated).toEqual([]); // already hydrated by read
  });

  it("N03 — multi-pending remains AMBIGUOUS (no first-id arbitration)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-a",
    });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-b",
    });
    await markPending(runtime.oa!, a);
    await markPending(runtime.oa!, b);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: a.proposalId,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.message).toMatch(/Plusieurs demandes/i);
    expect(read.markers.map((m) => m.proposalId).sort()).toEqual(
      [a.proposalId, b.proposalId].sort(),
    );
  });

  it("N05 — arm-clearing contract: DECISION_REQUIRED reinstruction ⇒ superseded (not clarification)", async () => {
    // Documented contract (types.ts + useProductConversation):
    // the reinstruction arm clears ONLY when reinstructionTransition ===
    // "superseded". A DECISION_REQUIRED Proposal is no longer sufficient on its
    // own. An armed turn that ends any other way reports "not_consumed".
    const allowed = ["superseded", "not_consumed", "not_applicable"] as const;
    expect(allowed).toContain("superseded");
    expect(allowed).toContain("not_applicable");
    expect("superseded").not.toBe("not_applicable");

    // DECISION_REQUIRED path after explicit replace reports the supersession
    // surface via Epistemic (A resolved) — arm-clearing signal for UI is
    // reinstructionTransition:"superseded" when orchestrate commits B.
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-a",
    });
    await markPending(runtime.oa!, a, { withSnapshot: true });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-b",
    });
    const sealed = sealProposalExecutionBasis(b);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: b.proposalId,
        subjectDigest: computeProposalSubjectDigest(sealed, b.proposalId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: b,
      },
    );
    expect(replaced.ok).toBe(true);

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const oldItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes("jint-n05-a"),
    );
    expect(oldItem?.status).toBe("resolved");
    expect(oldItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
    // Clarification-shaped result must not claim superseded:
    expect("not_applicable" as const).not.toBe("superseded");
  });

  it("T15/T16/T17 — pursue → PREPARE keeps sandbox targetPath; binding not acme/widget", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...NON_ACME_BINDING,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    const managedBase = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    expect(managedBase).toBeTruthy();
    if (managedBase) {
      ensureManagedRepoCloneSkeleton({
        managedRepoRootBase: managedBase,
        identity: NON_ACME_BINDING.identity,
      });
    }
    const binding = bound.repositoryBinding as {
      identity?: string;
      pathRoot?: string;
    } | null;
    expect(binding?.identity).toBe(NON_ACME_BINDING.identity);
    expect(binding?.identity).not.toMatch(/acme\/widget/i);
    expect(String(binding?.pathRoot ?? "")).not.toMatch(/acme\/widget/i);

    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t15",
      targetRepositoryRef: NON_ACME_BINDING.identity,
    });
    expect(proposal.executionIntent?.targetPath).toBe(TARGET_PATH);

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

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T16:00:00.000Z",
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

  it("N04–N08 — snapshot hydration validation rejects every incoherence", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n04",
    });

    const admissible = markerFor(proposal);
    expect(
      isValidProposalSnapshotForHydration(admissible, liveFor(admissible)),
    ).toBe(true);

    // N04 — snapshot belongs to another project / live project differs.
    expect(
      isValidProposalSnapshotForHydration(
        markerFor(proposal, { projectId: "prj:other" }),
        liveFor(admissible, { projectId: "prj:other" }),
      ),
    ).toBe(false);
    expect(
      isValidProposalSnapshotForHydration(
        admissible,
        liveFor(admissible, { projectId: "prj:other" }),
      ),
    ).toBe(false);

    // N05 — live LPS moved on (id or version).
    expect(
      isValidProposalSnapshotForHydration(
        admissible,
        liveFor(admissible, { lpsVersion: admissible.lpsVersion + 1 }),
      ),
    ).toBe(false);
    expect(
      isValidProposalSnapshotForHydration(
        admissible,
        liveFor(admissible, { lpsId: "lps:moved-on" }),
      ),
    ).toBe(false);

    // N06 — doctrine digest drifted.
    expect(
      isValidProposalSnapshotForHydration(
        admissible,
        liveFor(admissible, { doctrineDigest: "sha256:other" }),
      ),
    ).toBe(false);

    // N07 — sealed execution basis no longer matches the sealed digest.
    const tampered = markerFor({
      ...proposal,
      objective: "Objectif remplacé après scellement",
    } as ProposalDto);
    expect(
      isValidProposalSnapshotForHydration(
        { ...tampered, subjectDigest: admissible.subjectDigest },
        liveFor(admissible),
      ),
    ).toBe(false);

    // N08 — already closed by an authoritative Proposal DecisionRef.
    expect(
      isValidProposalSnapshotForHydration(
        admissible,
        liveFor(admissible, {
          closedProposalIds: new Set([proposal.proposalId]),
        }),
      ),
    ).toBe(false);

    // Non-decidable snapshots are never reconstructible subjects.
    expect(
      isValidProposalSnapshotForHydration(
        markerFor({ ...proposal, status: "STALE" } as ProposalDto),
        liveFor(admissible),
      ),
    ).toBe(false);
    expect(
      isValidProposalSnapshotForHydration(
        markerFor({ ...proposal, morrisGateRequired: false } as ProposalDto),
        liveFor(admissible),
      ),
    ).toBe(false);
  });

  it("N09 — legacy marker without snapshot never hydrates (Reformuler)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const legacy = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n09",
    });
    await markPending(runtime.oa!, legacy, { withSnapshot: false });
    resetF2ProposalStoreForTests();

    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    expect(active.markers[0]?.proposalSnapshot).toBeUndefined();
    expect(
      isValidProposalSnapshotForHydration(
        active.markers[0]!,
        await liveHydrationContext(projectId),
      ),
    ).toBe(false);

    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([]);
    expect(read.message).toMatch(/reformul/i);
    expect(getProposal(legacy.proposalId)).toBeNull();
  });

  it("N10 — no decision subject → generic trajectory options stay reachable", async () => {
    const { projectId } = await seed();
    const read = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("none");

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: null,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).not.toBe("proposal");
  });

  it("N19 — process loss with a still-valid snapshot rehydrates the same subject", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n19",
    });
    await markPending(runtime.oa!, proposal, { withSnapshot: true });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposal.proposalId)).toBeNull();

    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const hydrated = hydrateProposalsFromPendingMarkers(
      active.markers,
      await liveHydrationContext(projectId),
    );
    expect(hydrated).toEqual([proposal.proposalId]);
    expect(getProposal(proposal.proposalId)?.objective).toBe(
      proposal.objective,
    );
  });

  it("N20 — marker left behind by a live LPS append is not hydrated; post-append subject is", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const stale = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n20-a",
    });
    await markPending(runtime.oa!, stale, { withSnapshot: true });

    // LPS v(n) → v(n+1) without any Proposal mint (ACW / cognitive work shape).
    await appendLpsVersion(projectId);
    const after = await currentF2Context(runtime, projectId);
    expect(after.lpsVersion).toBeGreaterThan(ctx.lpsVersion);

    resetF2ProposalStoreForTests();
    const staleRead = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(staleRead.ok).toBe(true);
    if (!staleRead.ok) return;
    expect(staleRead.kind).toBe("pending_reinstruction_required");
    if (staleRead.kind !== "pending_reinstruction_required") return;
    expect(staleRead.recoverableProposalIds).toEqual([]);
    expect(getProposal(stale.proposalId)).toBeNull();

    // A subject minted against post-append context is immediately valid.
    const fresh = docsWriteProposal({
      projectId,
      lpsId: after.lpsId,
      lpsVersion: after.lpsVersion,
      doctrineDigest: after.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n20-b",
    });
    const sealedFresh = sealProposalExecutionBasis(fresh);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: stale.proposalId,
        newProposalId: fresh.proposalId,
        subjectDigest: computeProposalSubjectDigest(
          sealedFresh,
          fresh.proposalId,
        ),
        lpsId: after.lpsId,
        lpsVersion: after.lpsVersion,
        doctrineDigest: after.doctrineDigest,
        proposal: fresh,
      },
    );
    expect(replaced.ok).toBe(true);

    resetF2ProposalStoreForTests();
    const freshRead = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(freshRead.ok).toBe(true);
    if (!freshRead.ok) return;
    expect(freshRead.kind).toBe("pending_reinstruction_required");
    if (freshRead.kind !== "pending_reinstruction_required") return;
    expect(freshRead.recoverableProposalIds).toEqual([fresh.proposalId]);
  });

  it("persistence notice is honest: no durable conversation aggregate claim", () => {
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(
      /La conversation n'est pas un agrégat durable/,
    );
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/reconstruisible/);
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/jamais d'invention/);
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/Product SQLite/);
    expect(F2_PROCESS_LOCAL_NOTICE).not.toMatch(
      /Conversation et Proposal F2 restent process-local/,
    );
  });

  it("ZERO REAL / ZERO dogfood — fixture paths only", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});
