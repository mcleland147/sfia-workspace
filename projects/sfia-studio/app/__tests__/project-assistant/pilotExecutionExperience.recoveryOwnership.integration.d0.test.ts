/**
 * PILOT-EXEC RC-04 — INTEGRATED OA PROOF
 * Proposal → HD Pursue → EC → Attempt FAIL → ProductOutcome/W3C →
 * structural RecoveryContext → proposeTrajectoryOptions → Recovery OptionSet
 * (no PROPOSAL_STALE / Proposal not active owner).
 *
 * Proof-only. ZERO REAL. ZERO product mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  serializeW3cRecommendationPayload,
  w3cRecommendationEpistemicId,
  type W3cRecommendationPayload,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const TARGET_PATH =
  "projects/sfia-studio/.sandbox/rc04-recovery-ownership.md";

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
  return {
    count: versions.length,
    fingerprint: versions
      .map((x) => `${x.trajectoryId}@${x.version}:${x.status}`)
      .join("|"),
  };
}

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
    rephrasedRequest: "Matérialiser la note RC-04 recovery ownership",
    objective: "Matérialiser le livrable RC-04",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "Integrated OA proof — Proposal subject",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION AUTO", "STOP AVANT EXECUTE"],
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
      artifactBrief: "Note RC-04",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/vitest-default",
    },
  });
}

/**
 * Seal structural W3C Recommendation (kind=replan, requiresHumanDecision)
 * via the durable Epistemic seam W3-C itself uses. Does NOT mock
 * resolvePostEvidenceRecoveryContext — only overlays recommendationKind on
 * the Evidence/Attempt/RB lineage already produced by materialize.
 *
 * (recommendationFromOutcome never invents kind:"replan" from D5 alone.)
 */
async function sealStructuralW3cReplan(input: {
  oa: RuntimeOaStack;
  projectId: string;
  attemptId: string;
  executionContractId: string;
  evidenceId: string;
  reviewBundleId: string;
  claimEvaluationId: string | null;
  productOutcome: "FAIL" | "UNCLAIMED" | "STOP";
}): Promise<string> {
  const epistemicId = w3cRecommendationEpistemicId(
    input.evidenceId,
    input.claimEvaluationId,
  );
  const payload: W3cRecommendationPayload = {
    kind: "replan",
    headline: "Replan structurel après échec terminal",
    rationale:
      "RC-04 integrated proof — structural replan requires Pilot HumanDecision; " +
      "Recovery ≠ automatic retry.",
    nextStep: "propose_trajectory_options",
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
    claimEvaluationId: input.claimEvaluationId,
    productOutcome: input.productOutcome,
    analysisText: null,
    analysisUnavailableReason: "rc04_integrated_structural_seal",
    analysisProviderId: null,
    noraInvoked: false,
    lpsVersion: null,
  };
  const updated = await input.oa.cycleServices.updateEpistemicState.execute({
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
          input.executionContractId,
        ],
      },
    ],
    createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
    correlationId: `cor:rc04-w3c-replan:${input.attemptId}`,
  });
  expect(updated.ok).toBe(true);
  if (!updated.ok) throw new Error("structural W3C seal failed");
  return epistemicId;
}

describe("RC-04 — integrated OA structural recovery ownership", () => {
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

  it("Proposal P → HD Pursue → EC → Attempt FAIL → structural Recovery → Recovery OptionSet (no PROPOSAL_STALE)", async () => {
    const db = tempProductDbPath("rc04-int.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "rc04i" });
    // Standard cycle (not Critical proposed) so Confirm is admissible —
    // same harness posture as checkpointF recoveryOptionsContext.
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "rc04",
    });
    const oa = runtime.oa!;
    const projectId = seeded.projectId;
    const ctx = await currentF2Context(runtime, projectId);

    // ── 6.1 Proposal + OptionSet + HumanDecision Pursue ─────────────────
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:rc04-integrated-p",
    });
    const trajBeforePropose = await snapshotTrajectories(oa, projectId);

    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification");

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposalId).toBe(proposal.proposalId);
    expect(proposed.promotesProjectTrajectory).toBe(false);
    expect(proposed.proposedTrajectory).toBeNull();
    expect(proposed.options.map((o) => o.optionRef)).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);

    const trajAfterPropose = await snapshotTrajectories(oa, projectId);
    expect(trajAfterPropose.fingerprint).toBe(trajBeforePropose.fingerprint);

    const decided = await decideTrajectory({
      oa,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.code}`);
    const decisionId = decided.decision.decisionId;
    expect(decided.decision.proposalId).toBe(proposal.proposalId);

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd missing");
    expect(hd.decision.decisionId).toBe(decisionId);

    const trajAfterDecide = await snapshotTrajectories(oa, projectId);
    expect(trajAfterDecide.fingerprint).toBe(trajBeforePropose.fingerprint);

    // ── 6.2 ExecutionContract via Product PREPARE (candidate path) ──────
    const productPrepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        productRuntimeAuthority: "N2",
        boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        oa,
      },
    });
    expect(productPrepared.ok).toBe(true);
    if (!productPrepared.ok) {
      throw new Error(
        `product prepare failed: ${productPrepared.code}:${productPrepared.message}`,
      );
    }
    expect(productPrepared.payload.attemptCreated).toBe(false);
    expect(productPrepared.payload.executionPerformed).toBe(false);
    const successor = productPrepared.payload.successor;
    expect(successor).toBeTruthy();
    const executionContractId = successor.executionContractId;
    expect(successor.requiredAuthority).toBe("N2");

    const attemptsPre =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(attemptsPre.ok).toBe(true);
    if (!attemptsPre.ok) throw new Error("list attempts");
    expect(attemptsPre.attempts.length).toBe(0);

    // ── 6.3 Attempt terminal FAIL (durable OA — R8 harness pattern) ─────
    // w2Harness Cursor generalist port cannot start bounded docs_write
    // (REAL_AGENT_PROFILE_INVALID). Seal a durable failed Attempt on the
    // Product-prepared EC via the same OA store seam used by checkpointF R8.
    const liveContract =
      (await oa.executionContractServices!.contracts.findById(
        executionContractId,
      )) ?? successor;
    const failedContract = {
      ...liveContract,
      status: "failed" as const,
      version: liveContract.version + 1,
    };
    await oa.executionContractServices!.contracts.save(
      failedContract as never,
    );

    const attemptId = `xat:w3a:rc04-${Math.random().toString(16).slice(2, 10)}`;
    const now = oa.clock.nowIso();
    await oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa",
      attemptId,
      executionContractId,
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
      errorRef: `err:rc04:${attemptId}`.slice(0, 128),
      irreversibleEffectsPossible: true,
      processDiagnostic: {
        kind: "process_failure_diagnostic",
        realProcessInvoked: true,
        boundaryProofMode: "cursor_real",
        exitCode: 1,
        stderrExcerpt: "rc04 integrated proof simulated fail",
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

    const loadedAttempt =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(loadedAttempt.ok).toBe(true);
    if (!loadedAttempt.ok) throw new Error("attempt load");
    expect(loadedAttempt.attempt.status).toBe("failed");
    expect(loadedAttempt.attempt.executionContractId).toBe(executionContractId);

    // ── 6.4 ProductOutcome / Evidence / W3C + structural seal ───────────
    const materialized = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.code);
    // Terminal post-Evidence: Prefer FAIL; UNCLAIMED admissible when CE path
    // projects docs_write EC without Artifact Evidence (honest not_proven).
    expect(["FAIL", "UNCLAIMED"]).toContain(materialized.product.outcome);
    expect(materialized.product.technicalDetail.attemptStatus).toBe("failed");
    expect(materialized.product.evidenceId).toBeTruthy();
    expect(materialized.product.reviewBundleId).toBeTruthy();
    // W3-C auto loop may fail-closed on docs_write CE posture; structural
    // Recommendation is then sealed via the durable Epistemic seam below
    // (same pattern as checkpointF R8).
    if (materialized.postEvidence && !materialized.postEvidence.ok) {
      expect(materialized.postEvidence.failClosed).toBe(true);
    }

    const evidenceId = materialized.product.evidenceId!;
    const reviewBundleId = materialized.product.reviewBundleId!;
    const claimEvaluationId = materialized.product.claimEvaluationId ?? null;
    // Resolver requires FAIL/STOP + failed|timeout Attempt (UNCLAIMED only pairs
    // with succeeded Attempt). Seal structural replan as FAIL for failed Attempt.
    const productOutcome = "FAIL" as const;

    const w3cEpistemicId = await sealStructuralW3cReplan({
      oa,
      projectId,
      attemptId,
      executionContractId,
      evidenceId,
      reviewBundleId,
      claimEvaluationId,
      productOutcome,
    });

    const recovery = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId,
    });
    expect(recovery.ok).toBe(true);
    if (!recovery.ok) throw new Error(recovery.code);
    expect(recovery.context).not.toBeNull();
    expect(recovery.context!.attemptId).toBe(attemptId);
    expect(recovery.context!.evidenceId).toBe(evidenceId);
    expect(recovery.context!.reviewBundleId).toBe(reviewBundleId);
    expect(recovery.context!.executionContractId).toBe(executionContractId);
    expect(recovery.context!.productOutcome).toBe(productOutcome);
    expect(recovery.context!.recommendationKind).toBe("replan");
    expect(recovery.context!.requiresHumanDecision).toBe(true);
    expect(recovery.context!.w3cEpistemicItemId).toBe(w3cEpistemicId);

    // Proposal P remains as durable provenance (store / HD lineage).
    expect(decided.decision.proposalId).toBe(proposal.proposalId);
    const storedP = getProposal(proposal.proposalId);
    // Closed after HD — may remain in process-local store as non-DECISION_REQUIRED
    // or be absent; either way it must not be the active instruct subject.
    if (storedP) {
      expect(storedP.status).not.toBe("DECISION_REQUIRED");
    }

    const attemptsBeforePropose =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(attemptsBeforePropose.ok).toBe(true);
    if (!attemptsBeforePropose.ok) throw new Error("attempts before");
    const attemptCountBefore = attemptsBeforePropose.attempts.length;
    expect(attemptCountBefore).toBe(1);

    const hdBeforePropose =
      await oa.decisionServices.listDecisionHistory.execute({ projectId });
    expect(hdBeforePropose.ok).toBe(true);
    if (!hdBeforePropose.ok) throw new Error("hd list");
    const hdCountBefore = hdBeforePropose.decisions.length;

    const trajBeforeRecoveryPropose = await snapshotTrajectories(
      oa,
      projectId,
    );
    const currentBefore =
      await oa.cycleServices.getCurrentTrajectory.execute({ projectId });

    // ── 6.5 propose with opaque/stale Proposal P — recovery must own ────
    const qualification2 = await resolveW2QualificationInputs({
      oa,
      projectId,
    });
    expect(qualification2.ok).toBe(true);
    if (!qualification2.ok) throw new Error("qualification2");

    const recoveryProposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification2.qualification.inputs,
      packagePin: qualification2.qualification.packagePin,
      objective: qualification2.qualification.objective,
      projectTitle: qualification2.qualification.projectTitle,
      // Hostile / campaign-like: pass closed Proposal P (would PROPOSAL_STALE
      // without RC-04 structural ownership).
      proposalId: proposal.proposalId,
    });

    if (!recoveryProposed.ok) {
      throw new Error(
        `RC-04 propose failed: ${recoveryProposed.code} — ${recoveryProposed.message}`,
      );
    }
    expect(recoveryProposed.ok).toBe(true);

    // Recovery OptionSet — not Proposal subject trio.
    expect(recoveryProposed.decisionSubjectMode).not.toBe("proposal");
    expect(recoveryProposed.proposalId == null || recoveryProposed.proposalId === "").toBe(
      true,
    );
    expect(recoveryProposed.options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(recoveryProposed.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(recoveryProposed.options[1]!.label).toMatch(/suspendre|replan/i);
    expect(recoveryProposed.options.map((o) => o.optionRef)).not.toContain(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );

    // Recommendation ≠ HumanDecision; no auto anything.
    expect(recoveryProposed.recommendation.isHumanDecision).toBe(false);
    expect(recoveryProposed.recommendation.promotesTrajectory).toBe(false);
    expect(recoveryProposed.autoDecisionPerformed).toBe(false);
    expect(recoveryProposed.executionPerformed).toBe(false);

    // New HumanDecision still required (options presented, none decided).
    expect(recoveryProposed.phase).toBe("OPTIONS_PROPOSED");

    const attemptsAfter =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(attemptsAfter.ok).toBe(true);
    if (!attemptsAfter.ok) throw new Error("attempts after");
    expect(attemptsAfter.attempts.length).toBe(attemptCountBefore);

    const hdAfterPropose =
      await oa.decisionServices.listDecisionHistory.execute({ projectId });
    expect(hdAfterPropose.ok).toBe(true);
    if (!hdAfterPropose.ok) throw new Error("hd after");
    expect(hdAfterPropose.decisions.length).toBe(hdCountBefore);

    // Instruct may materialize a PROPOSED candidate OptionSet binding — that is
    // not an automatic promotion of current ProjectTrajectory.
    const currentAfter =
      await oa.cycleServices.getCurrentTrajectory.execute({ projectId });
    expect(recoveryProposed.recommendation.promotesTrajectory).toBe(false);
    if (currentBefore.ok && currentAfter.ok) {
      expect(currentAfter.trajectory.status).toBe(currentBefore.trajectory.status);
      expect(currentAfter.trajectory.version).toBe(currentBefore.trajectory.version);
    } else if (!currentBefore.ok) {
      // No current before: any new trajectory must remain candidate (not current-accepted).
      expect(recoveryProposed.proposedTrajectory?.status ?? "candidate").toBe(
        "candidate",
      );
    }
    void trajBeforeRecoveryPropose;

    // Provenance still points at original Proposal via closed HD.
    expect(decided.decision.proposalId).toBe("prop:f2:rc04-integrated-p");
    expect(decisionId).toBeTruthy();
    expect(executionContractId).toBeTruthy();
    expect(attemptId).toBeTruthy();
    expect(loadedAttempt.attempt.status).toBe("failed");
    expect(recovery.context!.recommendationKind).toBe("replan");
    expect(recovery.context!.productOutcome).toBe("FAIL");
  });

  it("INVERSE CORR-PROOF-10 — pre-terminal DECISION_REQUIRED Proposal still owns instruct", async () => {
    const db = tempProductDbPath("rc04-inv.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "rc04v" });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "inv",
    });
    const oa = runtime.oa!;
    const projectId = seeded.projectId;
    const ctx = await currentF2Context(runtime, projectId);
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:rc04-inverse-preterminal",
    });

    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification");

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error(proposed.code);
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposalId).toBe(proposal.proposalId);
    expect(proposed.options.map((o) => o.optionRef)).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(proposed.promotesProjectTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });
});
