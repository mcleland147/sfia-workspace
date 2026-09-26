// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01
 *
 * Authenticated Pilote S1 must bind the canonical generic Product EC
 * (studio.cursor.generalist.execute) while validating sealed internal
 * effect facts (effectClass + product:read, …) separately.
 *
 * Deterministic only — no Cursor REAL, no StudyFlow mutation.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  CONTRACT_BINDING_MISMATCH,
  resolvePiloteS1AuthorityFromGovernedContract,
  type AuthS1GovernedContractContext,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorFailure,
  tempProductDbPath,
  W2_FIXED_NOW,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "../project-assistant/w2Harness";

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  const issuedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function makeGenericContract(
  overrides: Partial<AuthS1GovernedContractContext> = {},
): AuthS1GovernedContractContext {
  return {
    executionContractId: overrides.executionContractId ?? "xct:nelc-s1-generic",
    projectId: overrides.projectId ?? "prj:demo",
    action: overrides.action ?? STUDIO_CURSOR_GENERALIST_ACTION,
    target: overrides.target ?? STUDIO_CURSOR_GENERALIST_TARGET,
    scope: overrides.scope ?? STUDIO_CURSOR_GENERALIST_SCOPE,
    requiredAuthority: overrides.requiredAuthority ?? "N1",
    requiredCapabilities:
      overrides.requiredCapabilities ?? [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    constraints: overrides.constraints ?? ["c:demo"],
    stopConditions: overrides.stopConditions ?? ["stop:demo"],
    evidenceRequirements: overrides.evidenceRequirements ?? ["evreq:demo"],
    reversibility: overrides.reversibility ?? "partially_reversible",
    idempotencyKey: overrides.idempotencyKey ?? "idem:nelc-s1-generic",
    inputs:
      overrides.inputs ??
      ({
        internalEffectAction: "product:read",
        effectClass: "read",
      } as Record<string, unknown>),
    ...(overrides.decisionRefs !== undefined
      ? { decisionRefs: overrides.decisionRefs }
      : {}),
    ...(overrides.cycleInstanceId !== undefined
      ? { cycleInstanceId: overrides.cycleInstanceId }
      : {}),
    ...(overrides.expectedOutputs !== undefined
      ? { expectedOutputs: overrides.expectedOutputs }
      : {}),
  };
}

function resolveRead(contract: AuthS1GovernedContractContext) {
  return resolvePiloteS1AuthorityFromGovernedContract({
    contract,
    governedEffects: {
      effectClass: "read",
      rollbackAvailable: true,
      protectedBoundaries: [],
      scopeIn: contract.scope,
      target: contract.target,
    },
  });
}

describe("AUTH-S1-CORR-01 — generic EC + internal effect binding", () => {
  it("A — exact generic capability only → S1 PASS + Evidence", () => {
    const contract = makeGenericContract();
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.level).toBe("N1");
    expect(resolved.effectClass).toBe("read");

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:nelc-s1-generic-ok",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("B — generic capability + additional capability → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: [
        STUDIO_CURSOR_GENERALIST_CAPABILITY,
        "cap:product-merge",
      ],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("does not match contract.action");
    }
  });

  it("C — generic capability missing → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: ["cap:hostile"],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("D — generic capability replaced → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: ["cap:product-read"],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("generic action + tampered target → FAIL CLOSED (not legacy-accepted)", () => {
    const contract = makeGenericContract({ target: "tgt:hostile" });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("does not match contract.action");
    }
  });

  it("sealed effectClass mismatch + coherent internalEffectAction → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: {
        internalEffectAction: "product:read",
        effectClass: "push",
      },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("Sealed inputs.effectClass");
    }
  });

  it("sealed effectClass absent → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: { internalEffectAction: "product:read" },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("inputs.effectClass");
    }
  });

  it("sealed internalEffectAction absent → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: { effectClass: "read" },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("internalEffectAction");
    }
  });

  it("sealed effectClass=read + internalEffectAction=product:local-write → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: {
        internalEffectAction: "product:local-write",
        effectClass: "read",
      },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("Internal effect action");
    }
  });

  it("legacy product:read + effectClass=read still PASS", () => {
    const legacy: AuthS1GovernedContractContext = {
      executionContractId: "xct:legacy-ok",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:legacy",
      scope: "biz:legacy",
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-read"],
      constraints: ["c"],
      stopConditions: ["s"],
      evidenceRequirements: ["e"],
      reversibility: "partially_reversible",
      idempotencyKey: "idem:legacy-ok",
    };
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract: legacy,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: "biz:legacy",
        target: "tgt:legacy",
      },
    });
    expect(resolved.ok).toBe(true);
  });

  it("legacy product:read + effectClass=push still FAIL CLOSED", () => {
    const legacy: AuthS1GovernedContractContext = {
      executionContractId: "xct:legacy-mismatch",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:legacy",
      scope: "biz:legacy",
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-read"],
      constraints: ["c"],
      stopConditions: ["s"],
      evidenceRequirements: ["e"],
      reversibility: "partially_reversible",
      idempotencyKey: "idem:legacy-mismatch",
    };
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract: legacy,
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
        scopeIn: "biz:legacy",
        target: "tgt:legacy",
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });
});

describe("AUTH-S1-CORR-01 — authenticated Product PREPARE (clarify)", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    assertStudioCursorRealOffForTests();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(W2_FIXED_NOW));
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanupW2TempDirs();
    assertStudioCursorRealOffForTests();
  });

  it("clarify PREPARE via authenticatedPilote without forceLocalAuthority", async () => {
    const db = tempProductDbPath("nelc-auth-s1-prep.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "nelc-auth-s1",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "nelc-auth-s1",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qualification");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true, // decision seeding only
    });
    if (!decided.ok) throw new Error("decide");

    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      authenticatedPilote: piloteA,
      // intentionally NO forceLocalAuthority — StudyFlow blocker path
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });

    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }
    expect(prepared.ok).toBe(true);
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toEqual([
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ]);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.executionPerformed).toBe(false);

    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.inputs?.internalEffectAction).toBe("product:read");
    expect(loaded.contract.inputs?.effectClass).toBe("read");

    const authEvidence = oa.authorityResolver.getEvidence(
      `evd:w3a-auth-s1:${decided.decision.decisionId}`,
    );
    expect(authEvidence).not.toBeNull();
    expect(authEvidence?.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(authEvidence?.level).toBe("N1");
    expect(authEvidence?.canActAsMorris).toBe(false);
    expect(authEvidence?.actorId).toBe(piloteA.actor.actorId);
    expect(
      oa.authorityResolver.getEvidence(
        `evd:w3a-prep:${decided.decision.decisionId}`,
      ),
    ).toBeNull();
  });
});

describe("AUTH-S1-CORR-01 — post-Evidence governed retry authenticated PREPARE", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
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

  it("FAIL→Evidence→RB→Recovery→GOVERNED HD→authenticated PREPARE (ZERO NEW Attempt)", async () => {
    // ---- Seed: EC → Attempt FAIL → Evidence/RB (deterministic local; ≠ Cursor REAL)
    const db = tempProductDbPath("nelc-auth-s1-recovery.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "nelcAuthS1Rec",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "nelc-auth-s1-rec",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposedSeed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposedSeed.ok) throw new Error("propose-seed");
    const decidedSeed = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposedSeed.optionSetRef,
      options: proposedSeed.options,
      recommendedOptionRef: proposedSeed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposedSeed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposedSeed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decidedSeed.ok) throw new Error("decide-seed");

    const preparedSeed = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decidedSeed.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!preparedSeed.ok) throw new Error(preparedSeed.code);
    const sourceEcId = preparedSeed.contract.executionContractId;

    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
    });
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!confirmed.ok) throw new Error(confirmed.code);
    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!(authorized.ok && authorized.outcome === "AUTHORIZED")) {
      throw new Error("authorize");
    }

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.code);
    const started = await governedExecuteStart({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.code);
    const failed = await settleDeterministicProductCursorFailure({
      oa,
      attemptId: started.attemptId,
    });
    if (!failed.ok) throw new Error(failed.code);
    expect(failed.attempt.status).toBe("failed");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa,
      projectId: seeded.projectId,
      attemptId: started.attemptId,
    });
    if (!materialized.ok) throw new Error(materialized.code);
    expect(materialized.product.outcome).toBe("FAIL");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) {
      throw new Error("postEvidence");
    }
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");

    const recovery = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: seeded.projectId,
    });
    if (!recovery.ok || recovery.context == null) {
      throw new Error("recovery-context");
    }
    expect(recovery.context.attemptId).toBe(started.attemptId);
    expect(recovery.context.evidenceId).toBe(materialized.product.evidenceId);
    expect(recovery.context.reviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(recovery.context.executionContractId).toBe(sourceEcId);

    // ---- Recovery OptionSet + GOVERNED HumanDecision (distinct from seed)
    const qualRecovery = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualRecovery.ok) throw new Error("qual-recovery");
    const proposedRecovery = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualRecovery.qualification.inputs,
      packagePin: qualRecovery.qualification.packagePin,
      objective: qualRecovery.qualification.objective,
      projectTitle: qualRecovery.qualification.projectTitle,
    });
    if (!proposedRecovery.ok) throw new Error("propose-recovery");
    expect(proposedRecovery.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposedRecovery.options.map((o) => o.optionRef)).toContain(
      GOVERNED_OPTION_REF,
    );

    const decidedRecovery = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposedRecovery.optionSetRef,
      options: proposedRecovery.options,
      recommendedOptionRef: proposedRecovery.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposedRecovery.proposedTrajectory!.trajectoryId,
      candidateVersion: proposedRecovery.proposedTrajectory!.version,
      forceLocalAuthority: true, // decision seeding only
    });
    if (!decidedRecovery.ok) throw new Error("decide-recovery");
    expect(decidedRecovery.decision.decisionId).not.toBe(
      decidedSeed.decision.decisionId,
    );
    expect(decidedRecovery.decision.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(decidedRecovery.decision.decisionBasisLinked).toBe(true);
    const durableHd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: decidedRecovery.decision.decisionId,
    });
    if (!durableHd.ok) throw new Error("load-hd");
    expect(durableHd.decision.decisionBasis).toBeTruthy();
    expect(durableHd.decision.decisionBasis?.sourceType).toBe(
      "trajectory_option",
    );
    expect(
      durableHd.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(GOVERNED_OPTION_REF);

    // ---- Attempt count BEFORE authenticated retry PREPARE
    const attemptsBefore =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    if (!attemptsBefore.ok) throw new Error("list-before");
    const countBefore = attemptsBefore.attempts.length;
    expect(countBefore).toBeGreaterThanOrEqual(1);

    // ---- Authenticated PREPARE (StudyFlow-equivalent blocker path)
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decidedRecovery.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      authenticatedPilote: piloteA,
      // intentionally NO forceLocalAuthority
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }

    expect(prepared.ok).toBe(true);
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toEqual([
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ]);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.executionPerformed).toBe(false);
    expect(prepared.contract.executionContractId).not.toBe(sourceEcId);

    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load-retry");
    expect(loaded.contract.inputs?.effectClass).toBe("read");
    expect(loaded.contract.inputs?.internalEffectAction).toBe("product:read");
    expect(loaded.contract.inputs?.recoveryAttemptId).toBe(started.attemptId);
    expect(loaded.contract.inputs?.recoveryEvidenceId).toBe(
      materialized.product.evidenceId,
    );
    expect(loaded.contract.inputs?.recoveryReviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(loaded.contract.inputs?.recoveryExecutionContractId).toBe(sourceEcId);

    const authEvidence = oa.authorityResolver.getEvidence(
      `evd:w3a-auth-s1:${decidedRecovery.decision.decisionId}`,
    );
    expect(authEvidence).not.toBeNull();
    expect(authEvidence?.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(authEvidence?.actorId).toBe(piloteA.actor.actorId);
    expect(authEvidence?.canActAsMorris).toBe(false);
    expect(
      oa.authorityResolver.getEvidence(
        `evd:w3a-prep:${decidedRecovery.decision.decisionId}`,
      ),
    ).toBeNull();

    // ---- ZERO NEW Attempt from retry PREPARE
    const attemptsAfterSource =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    if (!attemptsAfterSource.ok) throw new Error("list-after-source");
    expect(attemptsAfterSource.attempts.length).toBe(countBefore);

    const attemptsAfterRetry =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prepared.contract.executionContractId,
      });
    if (!attemptsAfterRetry.ok) throw new Error("list-after-retry");
    expect(attemptsAfterRetry.attempts.length).toBe(0);
  });
});
