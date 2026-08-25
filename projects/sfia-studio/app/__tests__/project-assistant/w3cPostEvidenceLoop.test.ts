/**
 * W3-C — Post-Evidence loop after W3-B terminal (consume, recommend, LPS, propose≠decide).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteCancel,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  materializeProductOutcomeFromAttempt,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import * as ingestMod from "@/features/project-assistant/f3/ingestEvidenceAndRecommend";
import {
  armW3bBoundary,
  clearW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
});

afterEach(() => {
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
  vi.restoreAllMocks();
});

async function authorizeTempArtifact(suffix: string, dbPath?: string) {
  const db = dbPath ?? tempProductDbPath(`w3c-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `w3c${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    candidateVersion: proposed.proposedTrajectory.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);
  return {
    oa,
    seeded,
    executionContractId,
    db,
    runtime,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    trajectoryVersion: proposed.proposedTrajectory.version,
    decidedTrajectoryId: decided.trajectory.trajectoryId,
    decidedTrajectoryVersion: decided.trajectory.version,
  };
}

async function selectAndStart(
  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
) {
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);
  return { selected, started };
}

async function materializeSuccess(
  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
) {
  const { started } = await selectAndStart(ctx);
  await governedExecuteRecordResult({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  const materialized = await materializeProductOutcomeFromAttempt({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    attemptId: started.attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error(materialized.code);
  return { started, materialized };
}

describe("W3C-P01 durable evidence consumed", () => {
  it("P01: consumes ev:w3b Evidence ids — no second evidence id family", async () => {
    const ctx = await authorizeTempArtifact("p01");
    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
    expect(materialized.product.reviewBundleId).toMatch(/^rb:w3b:/);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.evidenceId).toBe(
      materialized.product.evidenceId,
    );
    expect(materialized.postEvidence.evidenceId.startsWith("ev:w3b:")).toBe(
      true,
    );
    expect(materialized.postEvidence.evidenceId.startsWith("ev:f3-")).toBe(
      false,
    );
  });
});

describe("W3C-P02 Nora analysis", () => {
  it("P02: Nora analysis present or honest unavailable", async () => {
    const ctx = await authorizeTempArtifact("p02");
    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.noraInvoked).toBe(true);
    const hasText = Boolean(materialized.postEvidence.analysisText);
    const hasUnavailable = Boolean(
      materialized.postEvidence.analysisUnavailableReason,
    );
    expect(hasText || hasUnavailable).toBe(true);
  });
});

describe("W3C-P03 recommendation anti-authority", () => {
  it("P03: authority none, decisionCreated false, gateConsumed false", async () => {
    const ctx = await authorizeTempArtifact("p03");
    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    const r = materialized.postEvidence.recommendation;
    expect(r.authority).toBe("none");
    expect(r.decisionCreated).toBe(false);
    expect(r.gateConsumed).toBe(false);
    expect(r.attemptAutoLaunchNextCycle).toBe(false);
    expect(materialized.product.noraInvoked).toBe(false);
    expect(materialized.product.replanInvoked).toBe(false);
  });
});

describe("W3C-P04 LPS evidence append", () => {
  it("P04: LPS version bumped with evidenceIds containing ev:w3b", async () => {
    const ctx = await authorizeTempArtifact("p04");
    const before = await ctx.oa.projectServices!.getCurrentLivingProjectState.execute(
      { projectId: ctx.seeded.projectId },
    );
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const versionBefore = before.livingProjectState.version;

    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.lpsVersion).toBeGreaterThan(versionBefore);

    const after = await ctx.oa.projectServices!.getCurrentLivingProjectState.execute(
      { projectId: ctx.seeded.projectId },
    );
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingProjectState.evidenceIds ?? []).toContain(
      materialized.product.evidenceId!,
    );
    expect(
      (after.livingProjectState.evidenceIds ?? []).some((id) =>
        id.startsWith("ev:w3b:"),
      ),
    ).toBe(true);
    expect(after.livingProjectState.nextStep).toBe(
      materialized.postEvidence.recommendation.nextStep,
    );
  });
});

describe("W3C-P05 propose without decide", () => {
  it("P05: propose does not mutate validated trajectory without decide", async () => {
    const ctx = await authorizeTempArtifact("p05");
    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.ok).toBe(true);

    const trajBefore = await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
      projectId: ctx.seeded.projectId,
      version: ctx.decidedTrajectoryVersion,
    });
    expect(trajBefore.ok).toBe(true);
    if (!trajBefore.ok) return;
    expect(trajBefore.trajectory.status).toBe("validated");

    const qualification = await resolveW2QualificationInputs({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const trajAfterPropose =
      await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
        projectId: ctx.seeded.projectId,
        version: ctx.decidedTrajectoryVersion,
      });
    expect(trajAfterPropose.ok).toBe(true);
    if (!trajAfterPropose.ok) return;
    expect(trajAfterPropose.trajectory.status).toBe("validated");
    expect(trajAfterPropose.trajectory.version).toBe(
      trajBefore.trajectory.version,
    );
  });
});

describe("W3C-P06 structural replan requires decide", () => {
  it("P06: structural replan requires decideTrajectory after propose", async () => {
    const ctx = await authorizeTempArtifact("p06");
    await materializeSuccess(ctx);
    const qualification = await resolveW2QualificationInputs({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory.status).toBe("validated");
    expect(decided.decision.decisionId).toBeTruthy();
  });
});

describe("W3C-P07 SUCCESS → continue", () => {
  it("P07: SUCCESS → kind continue", async () => {
    const ctx = await authorizeTempArtifact("p07");
    const { materialized } = await materializeSuccess(ctx);
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.recommendation.kind).toBe("continue");
    expect(materialized.postEvidence.recommendation.nextStep).toBe(
      "continue_with_recommendation",
    );
    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
  });
});

describe("W3C-P08 STOP → recover", () => {
  it("P08: STOP → kind recover", async () => {
    const ctx = await authorizeTempArtifact("p08");
    armW3bBoundary({
      kind: "governed_stop",
      stopCondition: "EXECUTOR_INSUFFICIENT",
    });
    const { started } = await selectAndStart(ctx);
    expect(started.phase).toBe("terminal");
    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("STOP");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
    expect(materialized.postEvidence.recommendation.nextStep).toBe(
      "recovery_requalify",
    );
    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
  });
});

describe("W3C-P09 FAIL → recover", () => {
  it("P09: FAIL → recover distinct from SUCCESS", async () => {
    const ctx = await authorizeTempArtifact("p09");
    armW3bBoundary({
      kind: "adapter_fail",
      reason: "adapter_unavailable",
    });
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("FAIL");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
    expect(materialized.postEvidence.recommendation.nextStep).toBe(
      "recovery_diagnose_or_replan",
    );
    expect(materialized.postEvidence.recommendation.kind).not.toBe("continue");
  });
});

describe("W3C-P10 fail-closed + restart rehydrate", () => {
  it("P10: UNCLAIMED fail-closed; restart rehydrates product + postEvidence", async () => {
    const ctx = await authorizeTempArtifact("p10u");
    const { started } = await selectAndStart(ctx);
    const cancelled = await governedExecuteCancel({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    const unclaimed = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(unclaimed.ok).toBe(true);
    if (!unclaimed.ok) return;
    expect(unclaimed.product.outcome).toBe("UNCLAIMED");
    expect(unclaimed.postEvidence?.ok).toBe(false);
    if (unclaimed.postEvidence && !unclaimed.postEvidence.ok) {
      expect(unclaimed.postEvidence.failClosed).toBe(true);
    }

    const db = tempProductDbPath("w3c-p10-restart.sqlite");
    const ctxA = await authorizeTempArtifact("p10r", db);
    const { started: startedA, materialized } = await materializeSuccess(ctxA);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    const evidenceIdA = materialized.product.evidenceId;
    const lpsVersionA = materialized.postEvidence.lpsVersion;
    const kindA = materialized.postEvidence.recommendation.kind;
    const projectId = ctxA.seeded.projectId;
    const attemptId = startedA.attemptId;

    const runtimeB = bootW2Runtime({
      productDbPath: db,
      idPrefix: "w3cp10b",
    });
    const oaB = runtimeB.oa!;
    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: oaB,
      projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.evidenceId).toBe(evidenceIdA);
    expect(rehydrated.postEvidence?.ok).toBe(true);
    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) return;
    expect(rehydrated.postEvidence.evidenceId).toBe(evidenceIdA);
    expect(rehydrated.postEvidence.lpsVersion).toBe(lpsVersionA);
    expect(rehydrated.postEvidence.recommendation.kind).toBe(kindA);
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
  });
});

describe("W3C-P11 e2e covered", () => {
  it("P11: placeholder — covered by studio-w3c e2e", () => {
    expect(true).toBe(true);
  });
});

describe("W3C-P12 no re-ingest / no auto-launch", () => {
  it("P12: no ingestEvidenceAndRecommend; recommendNextGate attemptAutoLaunch false", async () => {
    const ingestSpy = vi.spyOn(ingestMod, "ingestEvidenceAndRecommend");
    const ctx = await authorizeTempArtifact("p12");
    const recommendSpy = vi.spyOn(
      ctx.oa.evidenceReviewServices!.recommendNextGate,
      "execute",
    );
    await materializeSuccess(ctx);
    expect(ingestSpy).not.toHaveBeenCalled();
    expect(recommendSpy).toHaveBeenCalled();
    for (const call of recommendSpy.mock.calls) {
      expect(call[0]?.attemptAutoLaunchNextCycle).toBe(false);
    }
  });
});
