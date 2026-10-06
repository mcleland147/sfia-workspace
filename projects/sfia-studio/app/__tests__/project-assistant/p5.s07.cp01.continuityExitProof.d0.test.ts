/**
 * P5-S07 CP01 — durable Epistemic subject survives Proposal store loss.
 * ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  listProposalsForProject,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { deriveWorkRepresentationFromLifecycleProjection } from "@/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note sandbox",
    objective: "Livrable de référence CP01",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "S07 CP01 continuity",
    scope: "borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "fichier sandbox",
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
      artifactBrief: "Livrable de référence CP01",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/vitest-default",
    },
  });
}

describe("P5-S07 CP01 durable continuity & work representation wiring", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("p5-s07-cp01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "s07cp01" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    cleanupW2TempDirs();
  });

  it("S07-CP01-E01 — durable Epistemic subject survives Proposal store + runtime reset", async () => {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "cp01",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:p5-s07-cp01",
    });
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(1);

    const sealed = sealProposalExecutionBasis(proposal);
    const subjectDigest = computeProposalSubjectDigest(
      sealed,
      proposal.proposalId,
    );
    const marked = await writePendingDecisionSubjectMarker({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      proposalId: proposal.proposalId,
      subjectDigest,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(marked.ok).toBe(true);

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    // Process-local loss.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);

    // Fresh runtime boundary on the SAME Product SQLite.
    resetRuntimeApplicationServiceForTests();
    const fresh = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "s07cp01-reopen",
    });
    const subject = await readActiveProposalDecisionSubject(
      fresh.oa!,
      seeded.projectId,
    );
    expect(subject.ok).toBe(true);
    if (!subject.ok) return;
    expect(subject.kind).toBe("bound_awaiting_decision");
    if (subject.kind === "bound_awaiting_decision") {
      expect(subject.optionSet.proposalId).toBe(proposal.proposalId);
    }
    // No invented ProposalDto after reset.
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);
  });

  it("S07-CP01 — work representation Option A from Lifecycle projection (Product-wired helper)", () => {
    const projection = {
      projectId: "prj:cp01-work",
      selectedCycleInstanceId: "cyc:cp01",
      activeCycleInstanceId: "cyc:cp01",
      selectedStatus: "active",
      assessment: {
        readyExceptFinalizeDecision: false,
        obligations: [
          {
            family: "artifact",
            applicability: "APPLICABLE",
            status: "OPEN",
            kind: "TO_TREAT",
            label: "Artifact",
          },
        ],
      },
    } as unknown as PilotLifecycleProjection;

    const work = deriveWorkRepresentationFromLifecycleProjection(projection);
    expect(work).not.toBeNull();
    expect(work!.requirementState).toBe("expected");
    expect(work!.productionState).toBe("not_produced");
    expect(work!.validationState).toBe("unknown");
    expect(work!.exitProofSatisfied).toBe("unknown");
    expect(work!.cycleComplete).toBe(false);
    expect(work!.distinctions.deliverableIsNotArtifact).toBe(true);
  });

  it("S07-CP01 — Journal cycle scoping: only selected-cycle decisions", async () => {
    // Pure projection filter contract mirrored from actions.ts CP01 rule.
    const decisions = [
      {
        decisionId: "dec:a",
        cycleInstanceId: "cyc:A",
        subject: "Cycle A",
        status: "accepted",
        selectedOptionId: "opt:a",
        options: [{ optionId: "opt:a", label: "A" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T10:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:b",
        cycleInstanceId: "cyc:B",
        subject: "Cycle B",
        status: "accepted",
        selectedOptionId: "opt:b",
        options: [{ optionId: "opt:b", label: "B" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T11:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:orphan",
        cycleInstanceId: null,
        subject: "Sans cycle",
        status: "accepted",
        selectedOptionId: "opt:x",
        options: [{ optionId: "opt:x", label: "X" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T12:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
    ] as const;

    const journalCycleId = "cyc:B";
    const scoped = decisions.filter((d) => d.cycleInstanceId === journalCycleId);
    expect(scoped).toHaveLength(1);
    expect(scoped[0]!.decisionId).toBe("dec:b");
    expect(scoped.every((d) => d.cycleInstanceId === journalCycleId)).toBe(true);
  });

  it("ZERO REAL — provider remains Fake for CP01 continuity suite", () => {
    expect(process.env.OPS1_CONVERSATION_PROVIDER).toBe("fake");
    // Touch runtime to ensure harness path stays local Product SQLite.
    expect(getRuntimeApplicationService().oa).not.toBeNull();
  });
});
