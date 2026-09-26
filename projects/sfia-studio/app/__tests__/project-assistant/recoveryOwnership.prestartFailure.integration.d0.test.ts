/**
 * RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — integration.
 * CLASS 2 StartExecution pre-start reject + binding; CLASS 1 legacy; negatives.
 * ZERO REAL. ZERO StudyFlow mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalMorrisGateAuthority,
} from "@/lib/oa/decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeProductOutcomeFromAttempt,
  w3bEvidenceIdentity,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { resolveRecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
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
  "projects/sfia-studio/.sandbox/prestart-recovery-ownership.md";

async function proposeAndDecideGoverned(oa: RuntimeOaStack, projectId: string) {
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
    selectedOptionRef: GOVERNED_OPTION_REF,
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
    evidenceId: `evd:prestart:${input.ecId}`,
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
        artifactBrief: "Note de cadrage StudyFlow — recovery prestart proof",
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
      idempotencyKey: `idem:prestart-${input.ecId}`,
      correlationId: `cor:prestart-${input.ecId}`,
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
    // If materialize failed, Evidence may be missing — force materialize retry
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
    // Last resort: materialize then seal with actual evidence ids from materialize
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

describe("RECOVERY-OWNERSHIP-PRESTART-FAILURE-01", () => {
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

  it("StartExecution deterministic launch reject → Attempt failed + EC confirmed", async () => {
    const { TestExecutionAdapter } = await import("@/lib/oa/execution-attempt");
    const {
      buildStack,
      seedConfirmedContract,
      selectStandardAgent,
      MORRIS_ACTOR,
    } = await import("../oa/execution-attempt/helpers");
    const rejectAdapter = new TestExecutionAdapter({
      launchFixtures: {
        "xat:prestart-0": { outcome: "reject", reason: "need_retry" },
      },
    });
    const stack = buildStack({ adapter: rejectAdapter });
    const { contractId } = await seedConfirmedContract(stack);
    await selectStandardAgent(stack, {
      attemptId: "xat:prestart-0",
      executionContractId: contractId,
      idempotencyKey: "idem-prestart-0",
    });
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:prestart-0",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(false);
    const prior = await stack.attempts.attempts.findById("xat:prestart-0");
    expect(prior?.status).toBe("failed");
    expect(prior?.stopReason).toMatch(/^EXECUTION_LAUNCH_FAILED:\s*reject:/);
    expect(prior?.startedAt).toBeUndefined();
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract?.status).toBe("confirmed");
  });

  it("StudyFlow-equivalent durable facts → binding PRESENT (EC stays confirmed)", async () => {
    const db = tempProductDbPath("prestart-sf-equiv.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pssf" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "sf" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
    const attemptId = `xat:w3a:sf-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-res:sf-${Math.random().toString(16).slice(2, 10)}`;
    const built = await buildDocsWriteContract({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId,
      ecId,
      targetPath: "projects/studyflow/01-cadrage/note-de-cadrage.md",
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
    expect(live.status).toBe("confirmed");

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

    const before = await oa.executionContractServices!.contracts.findById(ecId);
    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.recoveryContextPresent).toBe(true);
    expect(bound.binding?.sourceStatus).toBe("confirmed");
    expect(bound.binding?.sourceExecutionContractId).toBe(ecId);
    expect(bound.binding?.sourceAttemptId).toBe(attemptId);
    expect(bound.binding?.targetPath).toBe(
      "projects/studyflow/01-cadrage/note-de-cadrage.md",
    );
    const after = await oa.executionContractServices!.contracts.findById(ecId);
    expect(after?.status).toBe("confirmed");
    expect(after?.version).toBe(before?.version);
  });

  it("G — CLASS 1 failed-EC recovery path still works", async () => {
    const db = tempProductDbPath("prestart-c1-legacy.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "psc1" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c1" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
    const attemptId = `xat:w3a:c1-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-ev:c1-${Math.random().toString(16).slice(2, 10)}`;
    const built = await buildDocsWriteContract({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId,
      ecId,
    });
    const failedContract = {
      ...built,
      status: "failed" as const,
      version: built.version + 1,
    };
    await oa.executionContractServices!.contracts.save(failedContract);
    const now = oa.clock.nowIso();
    await oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa",
      attemptId,
      executionContractId: ecId,
      executionContractVersion: failedContract.version,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "failed",
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: now,
      failedAt: now,
      launchedAt: now,
      startedAt: now,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      irreversibleEffectsPossible: true,
      processDiagnostic: {
        kind: "process_failure_diagnostic",
        realProcessInvoked: true,
        boundaryProofMode: "cursor_real",
        exitCode: 1,
        stderrExcerpt: "class1",
        authoritativeBusinessEvidence: false,
      },
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

    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.binding?.sourceStatus).toBe("failed");
    expect(bound.binding?.sourceExecutionContractId).toBe(ecId);
  });

  it("negative — confirmed EC + startedAt → binding null while recovery present", async () => {
    const db = tempProductDbPath("prestart-neg-run.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "psnr" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "nr" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
    const attemptId = `xat:w3a:nr-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-ev:nr-${Math.random().toString(16).slice(2, 10)}`;
    const built = await buildDocsWriteContract({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId,
      ecId,
    });
    const confirmed = {
      ...built,
      status: "confirmed" as const,
      version: built.version + 1,
    };
    await oa.executionContractServices!.contracts.save(confirmed);
    const now = oa.clock.nowIso();
    await oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa",
      attemptId,
      executionContractId: ecId,
      executionContractVersion: confirmed.version,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "failed",
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: now,
      failedAt: now,
      startedAt: now,
      launchedAt: now,
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

    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.recoveryContextPresent).toBe(true);
    expect(bound.binding).toBeNull();
  });

  it("CORR-01 C2 — HD then hard reload recovers recovery tip + binding; no successor EC", async () => {
    const { readRecoveryOwnedDecisionContinuity } = await import(
      "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity"
    );
    const db = tempProductDbPath("prestart-corr01-c2.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "psc2" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c2" });
    const oa = runtime.oa!;

    // Seed CLASS 2 source EC + failed Attempt + Evidence/RB/W3C.
    const { decisionId: seedDecisionId } = await proposeAndDecideGoverned(
      oa,
      seeded.projectId,
    );
    const attemptId = `xat:w3a:c2-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-res:c2-${Math.random().toString(16).slice(2, 10)}`;
    const built = await buildDocsWriteContract({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId: seedDecisionId,
      ecId,
      targetPath: TARGET_PATH,
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

    const contractsBeforeHd =
      await oa.executionContractServices!.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(contractsBeforeHd.ok).toBe(true);
    const countBefore = contractsBeforeHd.ok
      ? contractsBeforeHd.contracts.length
      : 0;

    // Recovery OptionSet → GOVERNED HumanDecision (no PREPARE).
    const recoveryDecide = await proposeAndDecideGoverned(
      oa,
      seeded.projectId,
    );
    const recoveryHd = recoveryDecide.decisionId;
    expect(recoveryHd).not.toBe(seedDecisionId);

    const current = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.decidedByDecisionRef).toBe(recoveryHd);
    expect(current.trajectory.decidedOptionRef).toBe(GOVERNED_OPTION_REF);

    const contractsAfterHd =
      await oa.executionContractServices!.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(contractsAfterHd.ok).toBe(true);
    if (!contractsAfterHd.ok) return;
    expect(contractsAfterHd.contracts.length).toBe(countBefore);
    expect(
      contractsAfterHd.contracts.every(
        (c) =>
          c.status === "confirmed" ||
          c.status === "failed" ||
          c.status === "superseded" ||
          c.status === "completed" ||
          c.status === "cancelled",
      ),
    ).toBe(true);
    expect(
      contractsAfterHd.contracts.some(
        (c) =>
          c.status === "confirmation_required" ||
          c.status === "proposed" ||
          c.status === "draft",
      ),
    ).toBe(false);

    // Hard reload boundary: rebuild ONLY from durable Product truth.
    const reloaded = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.kind).toBe("owned");
    if (reloaded.kind !== "owned") return;
    expect(reloaded.decision.decisionId).toBe(recoveryHd);
    expect(reloaded.decision.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(reloaded.trajectory.decidedByDecisionRef).toBe(recoveryHd);
    expect(reloaded.binding.kind).toBe("post_evidence_recovery_execution");
    expect(reloaded.binding.sourceStatus).toBe("confirmed");
    expect(reloaded.binding.sourceExecutionContractId).toBe(ecId);
    expect(reloaded.binding.sourceAttemptId).toBe(attemptId);

    const boundForHd = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
      decisionId: recoveryHd,
    });
    expect(boundForHd.ok).toBe(true);
    if (!boundForHd.ok) return;
    expect(boundForHd.binding?.kind).toBe("post_evidence_recovery_execution");
  });
});
