/**
 * CORR-03 / C5 — reader-routing: GOVERNED claim vs absence.
 * Exercises readRecoveryOwnedDecisionContinuity (not only pure assert).
 * ZERO REAL. ZERO StudyFlow mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { LOCAL_PILOTE_ACTOR, registerLocalMorrisGateAuthority } from "@/lib/oa/decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
import {
  materializeProductOutcomeFromAttempt,
  w3bEvidenceIdentity,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  serializeW3cRecommendationPayload,
  w3cRecommendationEpistemicId,
  type W3cRecommendationPayload,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const TARGET_PATH =
  "projects/sfia-studio/.sandbox/prestart-corr03-c5.md";

async function proposeAndDecide(
  oa: RuntimeOaStack,
  projectId: string,
  selectedOptionRef: string,
) {
  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
  const decided = await decideTrajectory({
    oa,
    projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  if (!decided.ok) throw new Error(`decide: ${decided.code}`);
  return { proposed, decisionId: decided.decision.decisionId };
}

async function sealW3cRecover(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attemptId: string;
  ecId: string;
  evidenceId: string;
  reviewBundleId: string;
}) {
  const epistemicId = w3cRecommendationEpistemicId(input.evidenceId);
  const payload: W3cRecommendationPayload = {
    kind: "recover",
    headline: "Échec docs_write — recovery",
    rationale: "Attempt failed; Evidence available; no business success.",
    nextStep: "recovery_diagnose_or_replan",
    requiresHumanDecision: true,
    authority: "none",
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    recommendNextGateStatus: null,
    nextActionCode: null,
    evidenceId: input.evidenceId,
    attemptId: input.attemptId,
    reviewBundleId: input.reviewBundleId,
    claimEvaluationId: null,
    productOutcome: "FAIL",
    analysisText: null,
    analysisUnavailableReason: "test_seed",
    analysisProviderId: null,
    noraInvoked: false,
    lpsVersion: null,
  };
  await input.oa.cycleServices!.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: epistemicId,
        type: "Recommendation",
        statement: serializeW3cRecommendationPayload(payload),
        status: "active",
        source: `w3c-post-evidence:${input.evidenceId}`,
        relatedObjects: [
          input.projectId,
          input.attemptId,
          input.evidenceId,
          input.reviewBundleId,
          input.ecId,
        ],
      },
    ],
    createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
    correlationId: `cor:w3c-seed:${input.attemptId}`,
  });
}

async function buildDocsWriteContract(input: {
  oa: RuntimeOaStack;
  projectId: string;
  cycleInstanceId?: string | null;
  decisionId: string;
  ecId: string;
  targetPath?: string;
}) {
  const authority = registerLocalMorrisGateAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope: "studio.gcec.docs_write",
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:corr03:${input.ecId}`,
    forceEnable: true,
  });
  if (!authority.ok) throw new Error(`authority: ${authority.code}`);
  const built =
    await input.oa.executionContractServices!.buildExecutionContract.execute({
      executionContractId: input.ecId,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId ?? undefined,
      decisionRefs: [input.decisionId],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: "studio.gcec.docs_write",
      inputs: {
        targetPath: input.targetPath ?? TARGET_PATH,
        targetRepositoryRef: "mcleland147/sfia-workspace",
        repositoryRef: "mcleland147/sfia-workspace",
        pathAllowlist: ["projects/sfia-studio/.sandbox/", "projects/studyflow/"],
        contentRequirements: ["markdown heading", "acceptance criteria"],
        baseHeadSha: "a".repeat(40),
        artifactBrief: "Note de cadrage — CORR-03 C5 proof",
        artifactType: "functional_design",
        artifactWriteMode: "CREATE",
      },
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      requiredAuthority: "MORRIS",
      constraints: [
        "BOUNDED DOCS-WRITE",
        "PATH_ALLOWLIST_ONLY",
        "TEXT_DOCS_ONLY",
        "NO_DELETE",
        "NO_COMMIT",
        "NO_GIT_REMOTE",
        "NO_PUSH",
        "NO_PR",
        "NO_MERGE",
        "GATE D REQUIRED",
        "NO WILDCARD",
        "PREPARE_ONLY",
      ],
      stopConditions: [
        "AUTHORITY_DENIED",
        "CONTEXT_STALE",
        "DECISION_NOT_CURRENT",
      ],
      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      reversibility: "reversible",
      idempotencyKey: `idem:corr03-${input.ecId}`,
      correlationId: `cor:corr03-${input.ecId}`,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!built.ok) {
    throw new Error(
      `build failed: ${built.error.detailCode} ${built.error.message ?? ""}`,
    );
  }
  return built.contract;
}

async function materializeAndEnsureRecovery(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attemptId: string;
  ecId: string;
}) {
  const ids = w3bEvidenceIdentity(input.attemptId);
  const materialized = await materializeProductOutcomeFromAttempt({
    oa: input.oa,
    projectId: input.projectId,
    attemptId: input.attemptId,
  });
  let recovered = await resolvePostEvidenceRecoveryContext({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!recovered.ok || !recovered.context) {
    await sealW3cRecover({
      oa: input.oa,
      projectId: input.projectId,
      attemptId: input.attemptId,
      ecId: input.ecId,
      evidenceId: ids.evidenceId,
      reviewBundleId: ids.reviewBundleId,
    });
    if (!materialized.ok) {
      await materializeProductOutcomeFromAttempt({
        oa: input.oa,
        projectId: input.projectId,
        attemptId: input.attemptId,
      });
    }
    recovered = await resolvePostEvidenceRecoveryContext({
      oa: input.oa,
      projectId: input.projectId,
    });
  }
  if (!recovered.ok || !recovered.context) {
    if (
      materialized.ok &&
      typeof materialized.product.evidenceId === "string" &&
      typeof materialized.product.reviewBundleId === "string"
    ) {
      await sealW3cRecover({
        oa: input.oa,
        projectId: input.projectId,
        attemptId: input.attemptId,
        ecId: input.ecId,
        evidenceId: materialized.product.evidenceId,
        reviewBundleId: materialized.product.reviewBundleId,
      });
      recovered = await resolvePostEvidenceRecoveryContext({
        oa: input.oa,
        projectId: input.projectId,
      });
    }
  }
  if (!recovered.ok || !recovered.context) {
    throw new Error("RecoveryContext unavailable after seal");
  }
  return recovered.context;
}

describe("CORR-03 C5 — readRecoveryOwnedDecisionContinuity GOVERNED claim routing", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
    delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    clearW3bBoundaryArm();
  });

  afterEach(() => {
    clearW3bBoundaryArm();
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  it("A — traj GOVERNED + decision non-GOVERNED → fail closed", async () => {
    const db = tempProductDbPath("corr03-a.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecide(
      oa,
      seeded.projectId,
      GOVERNED_OPTION_REF,
    );
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    const corrupted = structuredClone(hd.decision);
    corrupted.selectedOptionId = BOUNDED_OPTION_REF;
    await oa.decisionServices.decisions.save(corrupted);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("B — traj non-GOVERNED + decision GOVERNED → fail closed", async () => {
    const db = tempProductDbPath("corr03-b.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3b" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "b" });
    const oa = runtime.oa!;
    await proposeAndDecide(oa, seeded.projectId, GOVERNED_OPTION_REF);
    const traj = await oa.cycleServices.trajectories.findCurrentByProjectId(
      seeded.projectId,
    );
    expect(traj).toBeTruthy();
    const corrupted = structuredClone(traj!);
    corrupted.decidedOptionRef = BOUNDED_OPTION_REF;
    await oa.cycleServices.trajectories.save(corrupted);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("C — both GOVERNED + DecisionBasis missing → fail closed", async () => {
    const db = tempProductDbPath("corr03-c.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3c" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecide(
      oa,
      seeded.projectId,
      GOVERNED_OPTION_REF,
    );
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    const stripped = structuredClone(hd.decision);
    delete stripped.decisionBasis;
    await oa.decisionServices.decisions.save(stripped);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("D — both GOVERNED + basis.sourceType != trajectory_option → fail closed", async () => {
    const db = tempProductDbPath("corr03-d.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3d" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "d" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecide(
      oa,
      seeded.projectId,
      GOVERNED_OPTION_REF,
    );
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    const drifted = structuredClone(hd.decision);
    drifted.decisionBasis = {
      ...drifted.decisionBasis!,
      sourceType: "proposal",
    };
    await oa.decisionServices.decisions.save(drifted);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("E — both coherently non-GOVERNED → kind=none", async () => {
    const db = tempProductDbPath("corr03-e.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3e" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "e" });
    const oa = runtime.oa!;
    await proposeAndDecide(oa, seeded.projectId, BOUNDED_OPTION_REF);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.kind).toBe("none");
  });

  it("F — coherent GOVERNED recovery → kind=owned", async () => {
    const db = tempProductDbPath("corr03-f.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c3f" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "f" });
    const oa = runtime.oa!;
    const { decisionId: seedDecisionId } = await proposeAndDecide(
      oa,
      seeded.projectId,
      GOVERNED_OPTION_REF,
    );
    const attemptId = `xat:w3a:c3f-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-res:c3f-${Math.random().toString(16).slice(2, 10)}`;
    const built = await buildDocsWriteContract({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId: seedDecisionId,
      ecId,
    });
    const confirmed = {
      ...built,
      status: "confirmed" as const,
      version: built.version + (built.status === "confirmed" ? 0 : 1),
    };
    if (
      confirmed.version !== built.version ||
      confirmed.status !== built.status
    ) {
      await oa.executionContractServices!.contracts.save(confirmed);
    }
    const live =
      (await oa.executionContractServices!.contracts.findById(ecId)) ??
      confirmed;
    const now = oa.clock.nowIso();
    await oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa",
      attemptId,
      executionContractId: ecId,
      executionContractVersion: live.version,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "failed",
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: now,
      failedAt: now,
      stopReason:
        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
      irreversibleEffectsPossible: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: `prv:${attemptId}`,
        actor: LOCAL_PILOTE_ACTOR,
        source: "system",
        timestamp: now,
        correlationId: `cor:att:${attemptId}`,
      },
    } as never);
    await materializeAndEnsureRecovery({
      oa,
      projectId: seeded.projectId,
      attemptId,
      ecId,
    });
    const recovery = await proposeAndDecide(
      oa,
      seeded.projectId,
      GOVERNED_OPTION_REF,
    );

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.kind).toBe("owned");
    if (result.kind !== "owned") return;
    expect(result.decision.decisionId).toBe(recovery.decisionId);
    expect(result.binding.sourceStatus).toBe("confirmed");
    expect(result.binding.sourceExecutionContractId).toBe(ecId);
  });
});
