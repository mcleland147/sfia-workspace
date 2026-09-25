/**
 * Checkpoint F / R8 — recovery docs_write successor routing.
 * ZERO REAL / ZERO Execute / ZERO new campaign HD mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority,
  registerLocalMorrisGateAuthority } from "@/lib/oa/decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { prepareDocsWriteRecoverySuccessorFromDecision } from "@/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  cloneDocsWriteInputsForRecoverySuccessor,
  resolveRecoveryExecutionBinding,
} from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { w3bEvidenceIdentity } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { w3cRecommendationEpistemicId } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { serializeW3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import type { W3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const TARGET_PATH =
  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  vi.restoreAllMocks();
});

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
  return { proposed, decided, decisionId: decided.decision.decisionId };
}

describe("R8 — pure helpers", () => {
  it("cloneDocsWriteInputs keeps path / content, drops stale keys", () => {
    const cloned = cloneDocsWriteInputsForRecoverySuccessor({
      targetPath: TARGET_PATH,
      targetRepositoryRef: "mcleland147/sfia-workspace",
      contentRequirements: ["markdown"],
      baseHeadSha: "deadbeef",
      confirmationRef: "cfm:stale",
      attemptId: "xat:stale",
    });
    expect(cloned.targetPath).toBe(TARGET_PATH);
    expect(cloned.targetRepositoryRef).toBe("mcleland147/sfia-workspace");
    expect(cloned.contentRequirements).toEqual(["markdown"]);
    expect(cloned.baseHeadSha).toBeUndefined();
    expect(cloned.confirmationRef).toBeUndefined();
    expect(cloned.attemptId).toBeUndefined();
  });
});

async function seedFailedDocsWriteEpisode(input: {
  oa: RuntimeOaStack;
  projectId: string;
  cycleInstanceId?: string | null;
  decisionId: string;
}) {
  const { oa, projectId, decisionId } = input;
  const attemptId = `xat:w3a:r8-${Math.random().toString(16).slice(2, 10)}`;
  const ecId = `xct:m3-ev:r8-${Math.random().toString(16).slice(2, 10)}`;
  const ids = w3bEvidenceIdentity(attemptId);

  const authority = registerLocalMorrisGateAuthority({
    authorityResolver: oa.authorityResolver,
    scope: "studio.gcec.docs_write",
    issuedAt: oa.clock.nowIso(),
    evidenceId: `evd:r8-seed:${ecId}`,
    forceEnable: true,
  });
  if (!authority.ok) {
    throw new Error(`authority: ${authority.code}`);
  }

  const built = await oa.executionContractServices!.buildExecutionContract.execute({
    executionContractId: ecId,
    projectId,
    cycleInstanceId: input.cycleInstanceId ?? undefined,
    decisionRefs: [decisionId],
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: "studio.gcec.docs_write",
    inputs: {
      targetPath: TARGET_PATH,
      targetRepositoryRef: "mcleland147/sfia-workspace",
      repositoryRef: "mcleland147/sfia-workspace",
      pathAllowlist: ["projects/sfia-studio/.sandbox/"],
      contentRequirements: ["markdown heading", "acceptance criteria"],
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
    stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE", "DECISION_NOT_CURRENT"],
    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
    reversibility: "reversible",
    idempotencyKey: `idem:r8-failed-${ecId}`,
    correlationId: `cor:r8-failed-${ecId}`,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!built.ok) {
    throw new Error(
      `build failed: ${built.error.detailCode} ${built.error.message ?? ""}`,
    );
  }

  const failedContract = {
    ...built.contract,
    status: "failed" as const,
    version: built.contract.version + 1,
  };
  await oa.executionContractServices!.contracts.save(failedContract);

  // Minimal Attempt so RecoveryContext coherence can load it.
  const now = oa.clock.nowIso();
  const attempt = {
    schemaVersion: "0.2.0-oa" as const,
    attemptId,
    executionContractId: ecId,
    executionContractVersion: failedContract.version,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status: "failed" as const,
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
      kind: "process_failure_diagnostic" as const,
      realProcessInvoked: true,
      boundaryProofMode: "cursor_real" as const,
      exitCode: 1,
      stderrExcerpt: "seed fail",
      authoritativeBusinessEvidence: false,
    },
    provenance: {
      schemaVersion: "0.1.0-oa" as const,
      provenanceRecordId: `prv:${attemptId}`,
      actor: LOCAL_PILOTE_ACTOR,
      source: "system" as const,
      timestamp: now,
      correlationId: `cor:att:${attemptId}`,
    },
  };
  await oa.executionAttemptServices!.attempts.create(attempt as never);

  // Evidence + RB via materialize; seal W3C recover with canonical payload schema.
  const w3cPayload: W3cRecommendationPayload = {
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
    evidenceId: ids.evidenceId,
    attemptId,
    reviewBundleId: ids.reviewBundleId,
    claimEvaluationId: null,
    productOutcome: "FAIL",
    analysisText: null,
    analysisUnavailableReason: "test_seed",
    analysisProviderId: null,
    noraInvoked: false,
    lpsVersion: null,
  };

  const materialized = await materializeProductOutcomeFromAttempt({
    oa,
    projectId,
    attemptId,
  });
  if (!materialized.ok) {
    throw new Error(
      `R8 seed materialize failed: ${materialized.code} ${materialized.message}`,
    );
  }

  const recoveredAfterMat = await resolvePostEvidenceRecoveryContext({
    oa,
    projectId,
  });
  if (!recoveredAfterMat.ok || !recoveredAfterMat.context) {
    const epistemicId = w3cRecommendationEpistemicId(ids.evidenceId);
    await oa.cycleServices!.updateEpistemicState.execute({
      projectId,
      items: [
        {
          epistemicItemId: epistemicId,
          type: "Recommendation",
          statement: serializeW3cRecommendationPayload(w3cPayload),
          status: "active",
          source: `w3c-post-evidence:${ids.evidenceId}`,
          relatedObjects: [
            projectId,
            attemptId,
            ids.evidenceId,
            ids.reviewBundleId,
            ecId,
          ],
        },
      ],
      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
      correlationId: `cor:w3c-seed:${attemptId}`,
    });
  }

  const recovered = await resolvePostEvidenceRecoveryContext({
    oa,
    projectId,
  });
  if (!recovered.ok || !recovered.context) {
    throw new Error("R8 seed: RecoveryContext unavailable after W3C seal");
  }

  return {
    attemptId,
    ecId,
    evidenceId: ids.evidenceId,
    reviewBundleId: ids.reviewBundleId,
  };
}

describe("R8 — RecoveryExecutionBinding + prepare successor", () => {
  it("T1 — failed docs_write + recovery → binding rehydrates action/target/path", async () => {
    const db = tempProductDbPath("r8-t1.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t1" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "t1" });
    const oa = runtime.oa!;
    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
    await seedFailedDocsWriteEpisode({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId,
    });

    const recovered = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: seeded.projectId,
    });
    expect(recovered.ok && recovered.context).toBeTruthy();
    if (!recovered.ok || !recovered.context) return;

    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok || !bound.binding) {
      expect(bound.ok && bound.binding).toBeTruthy();
      return;
    }
    expect(bound.binding.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(bound.binding.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(bound.binding.targetPath).toBe(TARGET_PATH);
    expect(bound.binding.requiredCapabilities).toContain(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );
  });

  it("T2 — hostile project → no binding", async () => {
    const db = tempProductDbPath("r8-t2.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t2" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "t2" });
    const { decisionId } = await proposeAndDecideGoverned(
      runtime.oa!,
      seeded.projectId,
    );
    await seedFailedDocsWriteEpisode({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId,
    });
    const bound = await resolveRecoveryExecutionBinding({
      oa: runtime.oa!,
      projectId: "prj:hostile-other",
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.binding).toBeNull();
  });

  it("T3 — ProjectTrajectory without recovery keeps generic W3-A path", async () => {
    const db = tempProductDbPath("r8-t3.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r8t3" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "t3" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok && bound.binding === null).toBe(true);
  });
});

describe("R8 — prepare recovery docs_write successor (durable)", () => {
  async function authorizeAndFailDocsWriteViaFixture(suffix: string) {
    const db = tempProductDbPath(`r8-prep-${suffix}.sqlite`);
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: `r8p${suffix}`,
    });
    const seeded = await seedQualifiedProject(runtime, { suffix });
    const oa = runtime.oa!;

    // Seed decision for failed EC lineage, then fail episode, then recovery HD.
    const seedDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
    const seededFail = await seedFailedDocsWriteEpisode({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionId: seedDecide.decisionId,
    });

    let recovered = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: seeded.projectId,
    });
    if (!recovered.ok || !recovered.context) {
      throw new Error("RecoveryContext not available for R8 prepare test");
    }

    const recoveryDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
    expect(recoveryDecide.proposed.options[0]!.label).toMatch(
      /nouvelle tentative/i,
    );

    return {
      oa,
      seeded,
      db,
      runtime,
      decisionId: recoveryDecide.decisionId,
      sourceEcId: seededFail.ecId,
      attemptId: seededFail.attemptId,
    };
  }

  it("T5–T12 — prepare successor docs_write; cancel wrong generic; no Attempt", async () => {
    const ctx = await authorizeAndFailDocsWriteViaFixture("t5");
    const { oa, seeded, decisionId, sourceEcId } = ctx;

    // Create wrong generic EC as current (simulates campaign dead-end).
    const context = await currentF2Context(ctx.runtime, seeded.projectId);
    const wrong = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId,
      currentContext: context,
      qualifiedOperationKind: "generate-temporary-artifact",
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(wrong.ok).toBe(true);
    if (!wrong.ok) return;
    // PJ-REPROOF-04 — durable recovery/Product mission wins over client
    // operationKind. Wrong current EC is a non-docs_write Product EC
    // (diagnostic/read), not a Pilot HOW selection of generate-temporary-artifact.
    expect(wrong.contract.action).not.toContain("docs_write");
    expect(wrong.contract.action).not.toBe(M4_BOUNDED_DOCS_WRITE_ACTION);

    const attemptsBefore =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    const countBefore = attemptsBefore.ok ? attemptsBefore.attempts.length : 0;

    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
      oa,
      projectId: seeded.projectId,
      decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      boundedDocsWriteBaseHeadSha: "a".repeat(40),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(prepared.successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(prepared.successor.requiredCapabilities).toContain(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );
    expect(prepared.cancelledWrongGenericContractId).toBe(
      wrong.contract.executionContractId,
    );
    expect(prepared.executionPerformed).toBe(false);
    expect(prepared.attemptCreated).toBe(false);

    const successorLoaded =
      await oa.executionContractServices!.getExecutionContract.execute({
        executionContractId: prepared.successor.executionContractId,
      });
    expect(successorLoaded.ok).toBe(true);
    if (!successorLoaded.ok) return;
    expect(successorLoaded.contract.inputs?.targetPath).toBe(TARGET_PATH);
    expect(successorLoaded.contract.evidenceRequirements).toContain(
      "evreq:docs_write_artifact",
    );
    for (const c of ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"]) {
      expect(successorLoaded.contract.constraints).toContain(c);
    }
    expect(successorLoaded.contract.confirmationRef).toBeUndefined();
    expect(successorLoaded.contract.status).not.toBe("failed");

    const wrongAfter =
      await oa.executionContractServices!.getExecutionContract.execute({
        executionContractId: wrong.contract.executionContractId,
      });
    expect(wrongAfter.ok).toBe(true);
    if (!wrongAfter.ok) return;
    expect(wrongAfter.contract.status).toBe("cancelled");

    const sourceAfter =
      await oa.executionContractServices!.getExecutionContract.execute({
        executionContractId: sourceEcId,
      });
    expect(sourceAfter.ok).toBe(true);
    if (!sourceAfter.ok) return;
    expect(sourceAfter.contract.status).toBe("failed");

    const attemptsAfter =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    expect(attemptsAfter.ok).toBe(true);
    if (!attemptsAfter.ok) return;
    expect(attemptsAfter.attempts.length).toBe(countBefore);

    // T13/T14 idempotent second prepare
    const again = await prepareDocsWriteRecoverySuccessorFromDecision({
      oa,
      projectId: seeded.projectId,
      decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      boundedDocsWriteBaseHeadSha: "a".repeat(40),
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.successor.executionContractId).toBe(
      prepared.successor.executionContractId,
    );
    expect(again.reusedFromIdempotency).toBe(true);
  });

  it("T10 restart — same current recovery docs_write EC", async () => {
    const ctx = await authorizeAndFailDocsWriteViaFixture("t10");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      boundedDocsWriteBaseHeadSha: "b".repeat(40),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successorId = prepared.successor.executionContractId;

    const runtimeB = bootW2Runtime({
      productDbPath: ctx.db,
      idPrefix: "r8t10b",
    });
    const oaB = runtimeB.oa!;
    const continuity = await oaB.executionContractServices!.getExecutionContract.execute(
      { executionContractId: successorId },
    );
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(continuity.contract.inputs?.targetPath).toBe(TARGET_PATH);
  });
});
