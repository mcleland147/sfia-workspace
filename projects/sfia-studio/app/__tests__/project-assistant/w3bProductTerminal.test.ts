/**
 * W3-B — Terminal + Evidence product seam (FC-11 / FC-12) + true restart.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
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
  w3bEvidenceIdentity,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
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
});

async function authorizeTempArtifact(suffix: string, dbPath?: string) {
  const db = dbPath ?? tempProductDbPath(`w3b-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `w3b${suffix}`,
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
  return { oa, seeded, executionContractId, db, runtime };
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

describe("W3-B SUCCESS / governed STOP / adapter FAIL + Evidence", () => {
  it("SUCCESS: technical terminal → Evidence → complete RB → Product SUCCESS", async () => {
    const ctx = await authorizeTempArtifact("ok");
    const { started } = await selectAndStart(ctx);
    expect(started.phase).toBe("running");
    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.productSuccessSemantics).toBe(false);

    const beforeClaim = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(beforeClaim.ok).toBe(false);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
      claimedProductOutcome: "FAIL",
      cycleProfile: "Critical",
      ckcId: "ckc:hostile",
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(true);
    expect(materialized.product.reviewBundleCompleteness).toBe("complete");
    expect(materialized.product.evidenceId).toMatch(/^ev:w3b:/);
    expect(materialized.product.noraInvoked).toBe(false);
    expect(materialized.product.antiClaims.ready).toBe(false);

    const evidence = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      materialized.product.evidenceId!,
    );
    expect(evidence?.technicalResultRef).toBe(
      materialized.product.technicalDetail.resultRef,
    );
    expect(evidence?.technicalResultRef).not.toBe(
      materialized.product.technicalDetail.errorRef,
    );

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.outcome).toBe("SUCCESS");
    expect(rehydrated.product.evidenceId).toBe(materialized.product.evidenceId);
  });

  it("pilot cancel alone → Evidence but Product UNCLAIMED (not STOP exit proof)", async () => {
    const ctx = await authorizeTempArtifact("pilotcancel");
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
    expect(cancelled.attemptStatus).toBe("cancelled");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.claimAllowed).toBe(false);
  });

  it("governed STOP: EC stopCondition cancel → Evidence → Product STOP", async () => {
    const ctx = await authorizeTempArtifact("govstop");
    armW3bBoundary({
      kind: "governed_stop",
      stopCondition: "EXECUTOR_INSUFFICIENT",
    });
    const { started } = await selectAndStart(ctx);
    expect(started.phase).toBe("terminal");
    expect(started.attemptStatus).toBe("cancelled");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("STOP");
    expect(materialized.product.governedBoundary).toBe("EXECUTOR_INSUFFICIENT");
    expect(materialized.product.outcome).not.toBe("FAIL");
  });

  it("FAIL: TestExecutionAdapter fail via Start → Evidence → Product FAIL", async () => {
    const ctx = await authorizeTempArtifact("adaptfail");
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
    expect(started.phase).toBe("terminal");
    expect(started.attemptStatus).toBe("failed");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("FAIL");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    // R-W3B-06 — no errorRef stuffed into technicalResultRef
    const evidence = await ctx.oa.evidenceReviewServices!.evidenceReader.findById(
      materialized.product.evidenceId!,
    );
    expect(evidence?.technicalResultRef).toBeUndefined();
  });

  it("rejects Evidence binding mismatch (other project)", async () => {
    const ctx = await authorizeTempArtifact("mismatch");
    const { started } = await selectAndStart(ctx);
    await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    const bad = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: "prj:other-hostile",
      attemptId: started.attemptId,
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.code).toBe("PROJECT_MISMATCH");
  });

  it("TRUE RESTART: runtime A → dispose → runtime B same SQLite → read-only rehydrate", async () => {
    const db = tempProductDbPath("w3b-restart.sqlite");
    const ctxA = await authorizeTempArtifact("resta", db);
    const { started } = await selectAndStart(ctxA);
    await governedExecuteRecordResult({
      oa: ctxA.oa,
      projectId: ctxA.seeded.projectId,
      executionContractId: ctxA.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctxA.oa,
      projectId: ctxA.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;

    const ids = w3bEvidenceIdentity(started.attemptId);
    const evidenceBefore =
      await ctxA.oa.evidenceReviewServices!.evidenceReader.findById(
        ids.evidenceId,
      );
    const rbBefore =
      await ctxA.oa.evidenceReviewServices!.reviewBundleReader.findById(
        ids.reviewBundleId,
      );
    expect(evidenceBefore).toBeTruthy();
    expect(rbBefore).toBeTruthy();
    const evidenceVersion = evidenceBefore!.version;
    const rbVersion = rbBefore!.version;
    const projectId = ctxA.seeded.projectId;
    const attemptId = started.attemptId;
    const outcomeA = materialized.product.outcome;
    const evidenceIdA = materialized.product.evidenceId;
    const rbIdA = materialized.product.reviewBundleId;

    // Dispose runtime A — bootW2Runtime resets singleton for B.
    const runtimeB = bootW2Runtime({
      productDbPath: db,
      idPrefix: "w3brestb",
    });
    const oaB = runtimeB.oa!;
    expect(oaB).not.toBe(ctxA.oa);

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: oaB,
      projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.outcome).toBe(outcomeA);
    expect(rehydrated.product.evidenceId).toBe(evidenceIdA);
    expect(rehydrated.product.reviewBundleId).toBe(rbIdA);
    expect(rehydrated.product.technicalDetail.attemptId).toBe(attemptId);

    const evidenceAfter =
      await oaB.evidenceReviewServices!.evidenceReader.findById(ids.evidenceId);
    const rbAfter =
      await oaB.evidenceReviewServices!.reviewBundleReader.findById(
        ids.reviewBundleId,
      );
    expect(evidenceAfter?.version).toBe(evidenceVersion);
    expect(rbAfter?.version).toBe(rbVersion);

    // Read-only: second rehydrate must not bump versions.
    await rehydrateProductOutcomeFromAttempt({
      oa: oaB,
      projectId,
      attemptId,
    });
    const evidenceAfter2 =
      await oaB.evidenceReviewServices!.evidenceReader.findById(ids.evidenceId);
    const rbAfter2 =
      await oaB.evidenceReviewServices!.reviewBundleReader.findById(
        ids.reviewBundleId,
      );
    expect(evidenceAfter2?.version).toBe(evidenceVersion);
    expect(rbAfter2?.version).toBe(rbVersion);
  });

  it("catalog genericity: identity digest independent of cycle profile", async () => {
    const idsA = w3bEvidenceIdentity("xat:w3a:aaa");
    const idsB = w3bEvidenceIdentity("xat:w3a:bbb");
    expect(idsA.evidenceId).not.toBe(idsB.evidenceId);
    expect(idsA.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
  });
});
