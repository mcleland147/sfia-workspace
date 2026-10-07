/**
 * @vitest-environment node
 *
 * S08-4D — write deterministic QA Product DBs for visual capture.
 * Run: S08_4_SEED=1 npx vitest run __tests__/project-assistant/s08-4.seedGovernedMoments.d0.test.ts
 * Seeds artifacts under .tmp-sfia-review/visual/s08-4/qa-dbs/ (opt-in via S08_4_SEED=1).
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  bootW2Runtime,
  currentF2Context,
  seedQualifiedProject,
  W2_TEST_PINNED_BASE_HEAD_SHA,
  cleanupW2TempDirs,
} from "./w2Harness";
import {
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  F2_PROCESS_LOCAL_NOTICE,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { setConversationProviderForTests } from "@/lib/platform/ai";

const OUT_DIR = path.resolve(
  __dirname,
  "../../../../../.tmp-sfia-review/visual/s08-4/qa-dbs",
);
const MANIFEST = path.resolve(
  __dirname,
  "../../../../../.tmp-sfia-review/visual/s08-4/governed-moments-manifest.json",
);
const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

const runSeed = process.env.S08_4_SEED === "1";

describe.runIf(runSeed)("S08-4D seed governed moments QA DBs", () => {
  beforeAll(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    fs.mkdirSync(OUT_DIR, { recursive: true });
  });

  afterAll(() => {
    cleanupW2TempDirs();
    resetRuntimeApplicationServiceForTests();
  });

  it("seeds Decision DB (bound_awaiting_decision) and Confirmation DB", async () => {
    const decisionDb = path.join(OUT_DIR, "decision.sqlite");
    const confirmationDb = path.join(OUT_DIR, "confirmation.sqlite");
    for (const p of [decisionDb, confirmationDb]) {
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }

    // ---- Decision ----
    resetRuntimeApplicationServiceForTests();
    const decisionRuntime = bootW2Runtime({
      productDbPath: decisionDb,
      idPrefix: "s084d",
    });
    const decisionSeeded = await seedQualifiedProject(decisionRuntime, {
      profile: "Critical",
      suffix: "decision",
    });
    const decisionCtx = await currentF2Context(
      decisionRuntime,
      decisionSeeded.projectId,
    );
    const proposal = saveProposal({
      proposalId: "prop:f2:s08-4d-decision",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Choisir la direction de l'espace projet",
      objective: "Conserver la conversation comme surface principale",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      rationale:
        "Deux directions sont possibles. La première conserve la conversation comme surface principale ; la seconde rend le contexte plus persistant.",
      scope: "docs_write borné — cycle actif",
      outOfScope: ["nouveau cycle", "REAL"],
      activatedBlocks: [],
      expectedOutcome: "Direction retenue sans exécution",
      sources: ["nora"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      morrisGateRequired: true,
      nextPossibleStep: "Décider la direction",
      contextSnapshot: {
        projectId: decisionSeeded.projectId,
        lpsId: decisionCtx.lpsId,
        lpsVersion: decisionCtx.lpsVersion,
        doctrineDigest: decisionCtx.doctrineDigest,
        activeCycleInstanceId: decisionSeeded.cycleInstanceId,
        ckcResolutionRef: "ckcres:w2-harness",
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: null,
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
        artifactWriteMode: "CREATE",
        targetRepositoryRef:
          process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
          "acme/w2-harness",
      },
    });
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const marked = await writePendingDecisionSubjectMarker({
      oa: decisionRuntime.oa!,
      projectId: decisionSeeded.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: decisionCtx.lpsId,
      lpsVersion: decisionCtx.lpsVersion,
      doctrineDigest: decisionCtx.doctrineDigest,
    });
    expect(marked.ok).toBe(true);

    const decisionQual = await resolveW2QualificationInputs({
      oa: decisionRuntime.oa!,
      projectId: decisionSeeded.projectId,
    });
    expect(decisionQual.ok).toBe(true);
    if (!decisionQual.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa: decisionRuntime.oa!,
      projectId: decisionSeeded.projectId,
      ...decisionQual.qualification.inputs,
      packagePin: decisionQual.qualification.packagePin,
      objective: decisionQual.qualification.objective,
      projectTitle: decisionQual.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const subject = await readActiveProposalDecisionSubject(
      decisionRuntime.oa!,
      decisionSeeded.projectId,
    );
    expect(subject.ok).toBe(true);
    if (!subject.ok) return;
    expect(subject.kind).toBe("bound_awaiting_decision");
    expect(proposed.options.length).toBeGreaterThanOrEqual(2);

    // ---- Confirmation ----
    resetRuntimeApplicationServiceForTests();
    const confirmRuntime = bootW2Runtime({
      productDbPath: confirmationDb,
      idPrefix: "s084c",
    });
    const confirmSeeded = await seedQualifiedProject(confirmRuntime, {
      profile: "Critical",
      suffix: "confirm",
    });
    const confirmQual = await resolveW2QualificationInputs({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
    });
    expect(confirmQual.ok).toBe(true);
    if (!confirmQual.ok) return;

    const confirmProposed = await proposeTrajectoryOptions({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
      ...confirmQual.qualification.inputs,
      packagePin: confirmQual.qualification.packagePin,
      objective: confirmQual.qualification.objective,
      projectTitle: confirmQual.qualification.projectTitle,
    });
    expect(confirmProposed.ok).toBe(true);
    if (!confirmProposed.ok) return;

    const decided = await decideTrajectory({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
      optionSetRef: confirmProposed.optionSetRef,
      options: confirmProposed.options,
      recommendedOptionRef: confirmProposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: confirmProposed.proposedTrajectory!.trajectoryId,
      candidateVersion: confirmProposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const confirmCtx = await currentF2Context(
      confirmRuntime,
      confirmSeeded.projectId,
    );
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: confirmCtx,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.contract.status).toBe("confirmation_required");

    const inspected = await inspectExecutionContract({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
      executionContractId: prepared.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa: confirmRuntime.oa!,
      projectId: confirmSeeded.projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.kind).toBe("active");
    if (continuity.kind !== "active") return;
    expect(continuity.contract.status).toBe("confirmation_required");
    expect(continuity.inspection.inspectionSufficient).toBe(true);

    const manifest = {
      seededAt: new Date().toISOString(),
      providerReal: false,
      productionVisualBypass: false,
      decision: {
        scenario: "decision",
        dbPath: decisionDb,
        projectId: decisionSeeded.projectId,
        cycleInstanceId: decisionSeeded.cycleInstanceId,
        optionSetRef: proposed.optionSetRef,
        optionCount: proposed.options.length,
        recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
        subjectKind: subject.kind,
      },
      confirmation: {
        scenario: "confirmation",
        dbPath: confirmationDb,
        projectId: confirmSeeded.projectId,
        cycleInstanceId: confirmSeeded.cycleInstanceId,
        decisionId: decided.decision.decisionId,
        executionContractId: prepared.contract.executionContractId,
        contractStatus: prepared.contract.status,
        inspectionSufficient: continuity.inspection.inspectionSufficient,
      },
    };
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
    expect(fs.existsSync(decisionDb)).toBe(true);
    expect(fs.existsSync(confirmationDb)).toBe(true);
  });
});
