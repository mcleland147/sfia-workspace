// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-POST-EVIDENCE-RECOVERY-CORR-01
 *
 * Structural recovery-owned restart continuity must NOT require a docs_write
 * RecoveryExecutionBinding. PostEvidenceRecoveryContext + GOVERNED HD lineage
 * is sufficient; PREPARE stays canonical generic (NELC / PR #527).
 *
 * Deterministic only — ZERO Cursor REAL — ZERO StudyFlow mutation.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalMorrisGateAuthority,
} from "@/lib/oa/decision";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { resolveRecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
  W2_FIXED_NOW,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";

const NOW = "2026-08-23T04:30:00.000Z";
const SANDBOX_TARGET =
  "projects/sfia-studio/.sandbox/nelc-post-evidence-recovery.md";

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
  assertStudioCursorRealOffForTests();
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(W2_FIXED_NOW));
});

afterEach(() => {
  vi.useRealTimers();
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

/**
 * StudyFlow-equivalent seed: started/succeeded Attempt + Evidence/RB +
 * ClaimEvaluation NOT_PROVEN → ProductOutcome UNCLAIMED RecoveryContext.
 * Historical docs_write EC — RecoveryExecutionBinding stays NULL (not CLASS 1/2).
 */
async function seedSucceededNotProvenUnclaimedRecovery() {
  const db = tempProductDbPath("nelc-post-ev-unclaimed.sqlite");
  const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "nelcPeA" });
  const seeded = await seedQualifiedProject(runtime, { suffix: "nelc-pe" });
  const oa = runtime.oa!;
  const projectId = seeded.projectId;
  const attemptId = `xat:w3a:nelcpe-${Date.now().toString(16).slice(-8)}`;
  const ecId = `xct:nelcpe:${Date.now().toString(16).slice(-8)}`;

  const proposed = await proposeW2OptionsForProject(runtime, projectId);
  if (!proposed.ok) throw new Error("propose-seed");
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
  if (!decided.ok) throw new Error("decide-seed");
  const seedDecisionId = decided.decision.decisionId;

  const authority = registerLocalMorrisGateAuthority({
    authorityResolver: oa.authorityResolver,
    scope: "studio.gcec.docs_write",
    issuedAt: oa.clock.nowIso(),
    evidenceId: `evd:nelcpe-seed:${ecId}`,
    forceEnable: true,
  });
  if (!authority.ok) throw new Error(authority.code);

  const built =
    await oa.executionContractServices!.buildExecutionContract.execute({
      executionContractId: ecId,
      projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionRefs: [seedDecisionId],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: "studio.gcec.docs_write",
      inputs: {
        targetPath: SANDBOX_TARGET,
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
      stopConditions: [
        "AUTHORITY_DENIED",
        "CONTEXT_STALE",
        "DECISION_NOT_CURRENT",
      ],
      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      reversibility: "reversible",
      idempotencyKey: `idem:ec:${ecId}`,
      correlationId: `cor:ec:${ecId}`,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!built.ok) throw new Error(`build: ${built.error.detailCode}`);

  const contract = {
    ...built.contract,
    status: "confirmed" as const,
    expectedOutputs: [
      "Free-form EO that yields NOT_PROVEN against artifact location",
    ],
    evidenceRequirements: [
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
      DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
    ],
  };
  contract.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(
      executionContractSemanticMaterial(contract),
    );
  await oa.executionContractServices!.contracts.save(contract);

  const snap = captureBoundExecutionContractSnapshot(contract);
  const attempt = {
    schemaVersion: "0.2.0-oa" as const,
    attemptId,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status: "succeeded" as const,
    idempotencyKey: `idem:att:${attemptId}`,
    correlationId: `cor:att:${attemptId}`,
    version: 1,
    createdAt: NOW,
    updatedAt: NOW,
    completedAt: NOW,
    launchedAt: NOW,
    startedAt: NOW,
    resultRef: `res:${attemptId}`,
    irreversibleEffectsPossible: true,
    provenance: {
      schemaVersion: "0.1.0-oa" as const,
      provenanceRecordId: `prv:${attemptId}`,
      actor: LOCAL_PILOTE_ACTOR,
      source: "system" as const,
      timestamp: NOW,
      correlationId: `cor:att:${attemptId}`,
    },
  };
  await oa.executionAttemptServices!.attempts.create(attempt as never);

  const ingested = await ingestDocsWriteArtifactEvidence({
    evidenceReviewServices: oa.evidenceReviewServices!,
    projectId,
    cycleInstanceId: seeded.cycleInstanceId,
    executionContractId: contract.executionContractId,
    executionAttemptId: attemptId,
    targetPath: SANDBOX_TARGET,
    digest:
      "sha256:dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" as Digest,
    actor: LOCAL_PILOTE_ACTOR,
    nowIso: NOW,
  });
  if (!ingested.ok) throw new Error("ingest");

  const requal = await requalifyDocsWriteContractResult({
    evidenceReviewServices: oa.evidenceReviewServices!,
    attempt: attempt as ExecutionAttempt,
    contract,
    actor: LOCAL_PILOTE_ACTOR,
    nowIso: NOW,
  });
  if (!requal.ok) throw new Error(requal.message);
  expect(requal.claimEvaluation.status).toBe("not_proven");

  const materialized = await materializeProductOutcomeFromAttempt({
    oa,
    projectId,
    attemptId,
  });
  if (!materialized.ok) throw new Error(JSON.stringify(materialized));
  expect(materialized.product.outcome).toBe("UNCLAIMED");
  expect(materialized.postEvidence?.ok).toBe(true);

  const recovery = await resolvePostEvidenceRecoveryContext({ oa, projectId });
  if (!recovery.ok || !recovery.context) throw new Error("recovery");
  expect(recovery.context.productOutcome).toBe("UNCLAIMED");
  expect(recovery.context.attemptStatus).toBe("succeeded");

  // Binding must be NULL for this shape (not failed / not pre-start CLASS 2).
  const bound = await resolveRecoveryExecutionBinding({ oa, projectId });
  expect(bound.ok).toBe(true);
  if (bound.ok) {
    expect(bound.recoveryContextPresent).toBe(true);
    expect(bound.binding).toBeNull();
  }

  return {
    db,
    runtimeA: runtime,
    oa,
    projectId,
    attemptId,
    ecId,
    evidenceId: materialized.product.evidenceId!,
    reviewBundleId: materialized.product.reviewBundleId!,
    seedDecisionId,
  };
}

describe("NELC POST-EVIDENCE RECOVERY — UNCLAIMED / NOT_PROVEN restart", () => {
  it("runtime A seed → runtime B hard restart owned → generic authenticated PREPARE", async () => {
    const seeded = await seedSucceededNotProvenUnclaimedRecovery();
    const {
      db,
      runtimeA,
      oa: oaA,
      projectId,
      attemptId,
      ecId,
      evidenceId,
      reviewBundleId,
    } = seeded;

    // Recovery OptionSet + distinct GOVERNED HumanDecision on runtime A
    const qualification = await resolveW2QualificationInputs({
      oa: oaA,
      projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa: oaA,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose-recovery");
    expect(proposed.options[0]!.label).toMatch(/nouvelle tentative/i);

    const decided = await decideTrajectory({
      oa: oaA,
      projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide-recovery");
    expect(decided.decision.decisionId).not.toBe(seeded.seedDecisionId);
    expect(decided.decision.decisionBasisLinked).toBe(true);
    const recoveryDecisionId = decided.decision.decisionId;

    const durableHd = await oaA.decisionServices.getHumanDecision.execute({
      decisionId: recoveryDecisionId,
    });
    if (!durableHd.ok) throw new Error("hd");
    expect(durableHd.decision.decisionBasis?.sourceType).toBe(
      "trajectory_option",
    );

    // HARD RESTART — abandon runtime A; boot distinct runtime B on SAME Product DB.
    void runtimeA;
    const runtimeB = bootW2Runtime({
      productDbPath: db,
      idPrefix: "nelcPeB",
    });
    const oaB = runtimeB.oa!;
    expect(oaB).not.toBe(oaA);

    const owned = await readRecoveryOwnedDecisionContinuity({
      oa: oaB,
      projectId,
    });
    expect(owned.ok).toBe(true);
    if (!owned.ok) return;
    expect(owned.kind).toBe("owned");
    if (owned.kind !== "owned") return;
    expect(owned.decision.decisionId).toBe(recoveryDecisionId);
    expect(owned.trajectory.decidedByDecisionRef).toBe(recoveryDecisionId);
    expect(owned.recoveryContext.productOutcome).toBe("UNCLAIMED");
    expect(owned.recoveryContext.attemptStatus).toBe("succeeded");
    expect(owned.recoveryContext.attemptId).toBe(attemptId);
    expect(owned.recoveryContext.evidenceId).toBe(evidenceId);
    expect(owned.recoveryContext.reviewBundleId).toBe(reviewBundleId);
    expect(owned.recoveryContext.executionContractId).toBe(ecId);
    // docs_write binding NOT required for structural ownership
    expect(owned.binding).toBeNull();

    const attemptsBefore =
      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ecId,
      });
    if (!attemptsBefore.ok) throw new Error("list-before");
    const countBefore = attemptsBefore.attempts.length;
    expect(countBefore).toBeGreaterThanOrEqual(1);

    // Canonical generic PREPARE on runtime B — authenticatedPilote, NO forceLocalAuthority
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: oaB,
      projectId,
      decisionId: recoveryDecisionId,
      currentContext: await currentF2Context(runtimeB, projectId),
      authenticatedPilote: piloteA,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toEqual([
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ]);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.executionPerformed).toBe(false);
    expect(prepared.contract.executionContractId).not.toBe(ecId);

    const loaded =
      await oaB.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.contract.executionContractId,
      });
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.inputs?.effectClass).toBe("read");
    expect(loaded.contract.inputs?.internalEffectAction).toBe("product:read");
    expect(loaded.contract.inputs?.recoveryAttemptId).toBe(attemptId);
    expect(loaded.contract.inputs?.recoveryEvidenceId).toBe(evidenceId);
    expect(loaded.contract.inputs?.recoveryReviewBundleId).toBe(reviewBundleId);
    expect(loaded.contract.inputs?.recoveryExecutionContractId).toBe(ecId);
    expect(loaded.contract.inputs?.productOutcome).toBe("UNCLAIMED");

    const authEvidence = oaB.authorityResolver.getEvidence(
      `evd:w3a-auth-s1:${recoveryDecisionId}`,
    );
    expect(authEvidence).not.toBeNull();
    expect(authEvidence?.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(authEvidence?.actorId).toBe(piloteA.actor.actorId);
    expect(
      oaB.authorityResolver.getEvidence(`evd:w3a-prep:${recoveryDecisionId}`),
    ).toBeNull();

    const attemptsAfterSource =
      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ecId,
      });
    if (!attemptsAfterSource.ok) throw new Error("list-after");
    expect(attemptsAfterSource.attempts.length).toBe(countBefore);

    const attemptsAfterRetry =
      await oaB.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prepared.contract.executionContractId,
      });
    if (!attemptsAfterRetry.ok) throw new Error("list-retry");
    expect(attemptsAfterRetry.attempts.length).toBe(0);
  });
});

describe("NELC POST-EVIDENCE RECOVERY — fail-closed continuity", () => {
  it("CASE B — GOVERNED tip + missing DecisionBasis → continuity FAILED (not kind=none)", async () => {
    const db = tempProductDbPath("nelc-pe-corrupt.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "nelcPeCor" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "cor" });
    const oa = runtime.oa!;
    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    if (!hd.ok) throw new Error("hd");
    const corrupted = structuredClone(hd.decision);
    delete corrupted.decisionBasis;
    await oa.decisionServices.decisions.save(corrupted);

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("RECOVERY_DECISION_CONTINUITY_FAILED");
  });

  it("CASE C — non-GOVERNED tip → kind=none (generic path unchanged)", async () => {
    const db = tempProductDbPath("nelc-pe-none.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "nelcPeNone" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "none" });
    const oa = runtime.oa!;
    const proposed = await proposeW2OptionsForProject(runtime, seeded.projectId);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: BOUNDED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");

    const result = await readRecoveryOwnedDecisionContinuity({
      oa,
      projectId: seeded.projectId,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.kind).toBe("none");
  });
});

