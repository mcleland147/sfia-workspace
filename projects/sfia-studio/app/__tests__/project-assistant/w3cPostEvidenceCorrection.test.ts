/**
 * W3-C convergence corrections B1–B6 — named R01–R13 coverage.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
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
import {
  armW3cEpistemicMaterializeFailOnceForTests,
  clearW3cEpistemicMaterializeFailForTests,
  findExistingW3cPostEvidence,
  rehydrateW3cPostEvidenceFromLps,
  w3cRecommendationEpistemicId,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
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
  clearW3cEpistemicMaterializeFailForTests();
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  vi.restoreAllMocks();
});

async function authorizeTempArtifact(suffix: string, dbPath?: string) {
  const db = dbPath ?? tempProductDbPath(`w3c-corr-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `w3cc${suffix}`,
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
    decidedTrajectoryVersion: decided.trajectory.version,
  };
}

async function selectStartRecord(
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
  await governedExecuteRecordResult({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });
  return { attemptId: started.attemptId };
}

async function materializeSuccess(
  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
) {
  const { attemptId } = await selectStartRecord(ctx);
  const materialized = await materializeProductOutcomeFromAttempt({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error(materialized.code);
  return { attemptId, materialized };
}

/** Second SUCCESS terminal on the same project (new propose→decide→contract→attempt). */
async function secondSuccessOnSameProject(
  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
) {
  const qualification = await resolveW2QualificationInputs({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual2");
  const proposed = await proposeTrajectoryOptions({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose2");
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
  if (!decided.ok) throw new Error("decide2");
  const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId,
  });
  await confirmExecutionContractForAuthorization({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  await evaluateExecutionAuthorization({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  const nextCtx = { ...ctx, executionContractId };
  return materializeSuccess(nextCtx);
}

describe("W3C-R01 recovery CTA without automatic HD", () => {
  it("R01: STOP recover requiresHumanDecision false; propose available", async () => {
    const ctx = await authorizeTempArtifact("r01");
    armW3bBoundary({
      kind: "governed_stop",
      stopCondition: "EXECUTOR_INSUFFICIENT",
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
    expect(materialized.product.outcome).toBe("STOP");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
    expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
      false,
    );

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
  });
});

describe("W3C-R02/R03 idempotence", () => {
  it("R02/R03: materialize twice → same epistemic id, LPS stable, Nora not double-appended", async () => {
    const ctx = await authorizeTempArtifact("r02");
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: Array(32).fill("NORA_IDEMPOTENCE_MARKER_ALPHA"),
      }),
    );
    const { attemptId, materialized: first } = await materializeSuccess(ctx);
    expect(first.postEvidence?.ok).toBe(true);
    if (!first.postEvidence || !first.postEvidence.ok) return;
    const evidenceId = first.product.evidenceId!;
    const epiId = w3cRecommendationEpistemicId(evidenceId);
    const lpsV1 = first.postEvidence.lpsVersion;
    const analysis1 = first.postEvidence.analysisText;

    const second = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.postEvidence?.ok).toBe(true);
    if (!second.postEvidence || !second.postEvidence.ok) return;
    expect(second.product.evidenceId).toBe(evidenceId);
    expect(second.postEvidence.lpsVersion).toBe(lpsV1);
    expect(second.postEvidence.analysisText).toBe(analysis1);

    const existing = await findExistingW3cPostEvidence({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      evidenceId,
      attemptId,
    });
    expect(existing?.ok).toBe(true);
    expect(w3cRecommendationEpistemicId(evidenceId)).toBe(epiId);

    const lps = await ctx.oa.projectServices!.getCurrentLivingProjectState.execute(
      { projectId: ctx.seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const markerCount = (
      lps.livingProjectState.context?.match(
        /\[\[SFIA_POST_EVIDENCE_NORA_ANALYSIS\]\]/g,
      ) ?? []
    ).length;
    expect(markerCount).toBe(1);
  });
});

describe("W3C-R04/R05 evidence binding", () => {
  it("R04/R05: terminal B rehydrates correctly; A never gets B analysis", async () => {
    const ctx = await authorizeTempArtifact("r04");
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: Array(32).fill("NORA_ANALYSIS_FOR_TERMINAL_A_ONLY"),
      }),
    );
    const { attemptId: attemptA, materialized: matA } =
      await materializeSuccess(ctx);
    expect(matA.postEvidence?.ok).toBe(true);
    if (!matA.postEvidence || !matA.postEvidence.ok) return;
    const evidenceA = matA.product.evidenceId!;
    const analysisA = matA.postEvidence.analysisText;

    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: Array(64).fill("NORA_ANALYSIS_FOR_TERMINAL_B_ONLY"),
      }),
    );
    const { attemptId: attemptB, materialized: matB } =
      await secondSuccessOnSameProject(ctx);
    expect(matB.postEvidence?.ok).toBe(true);
    if (!matB.postEvidence || !matB.postEvidence.ok) return;
    const evidenceB = matB.product.evidenceId!;
    expect(evidenceB).not.toBe(evidenceA);
    expect(matB.postEvidence.analysisText).toContain(
      "NORA_ANALYSIS_FOR_TERMINAL_B_ONLY",
    );

    const rehydrateB = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: attemptB,
    });
    expect(rehydrateB.ok).toBe(true);
    if (!rehydrateB.ok || !rehydrateB.postEvidence?.ok) return;
    expect(rehydrateB.postEvidence.evidenceId).toBe(evidenceB);
    expect(rehydrateB.postEvidence.analysisText).toContain(
      "NORA_ANALYSIS_FOR_TERMINAL_B_ONLY",
    );

    const rehydrateA = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: attemptA,
    });
    expect(rehydrateA.ok).toBe(true);
    if (!rehydrateA.ok) return;
    if (rehydrateA.postEvidence?.ok) {
      expect(rehydrateA.postEvidence.evidenceId).toBe(evidenceA);
      expect(rehydrateA.postEvidence.analysisText).not.toContain(
        "NORA_ANALYSIS_FOR_TERMINAL_B_ONLY",
      );
      if (analysisA) {
        expect(rehydrateA.postEvidence.analysisText).toBe(analysisA);
      }
    } else {
      expect(rehydrateA.postEvidence?.ok).toBe(false);
      if (rehydrateA.postEvidence && !rehydrateA.postEvidence.ok) {
        expect(rehydrateA.postEvidence.code).toBe(
          "STALE_POST_EVIDENCE_BINDING",
        );
      }
    }
  });
});

describe("W3C-R06 Nora unavailable durable", () => {
  it("R06: Nora fail → unavailable durable → rehydrate preserves unavailable", async () => {
    const ctx = await authorizeTempArtifact("r06");
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const { attemptId, materialized } = await materializeSuccess(ctx);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;
    expect(materialized.postEvidence.analysisText).toBeNull();
    expect(materialized.postEvidence.analysisUnavailableReason).toBeTruthy();
    expect(materialized.postEvidence.noraInvoked).toBe(true);

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok || !rehydrated.postEvidence?.ok) return;
    expect(rehydrated.postEvidence.analysisText).toBeNull();
    expect(rehydrated.postEvidence.analysisUnavailableReason).toBe(
      materialized.postEvidence.analysisUnavailableReason,
    );
  });
});

describe("W3C-R08/R09 epistemic supersession", () => {
  it("R08/R09: epistemic recommendation exists; A superseded when B active", async () => {
    const ctx = await authorizeTempArtifact("r08");
    const { materialized: matA } = await materializeSuccess(ctx);
    const evidenceA = matA.product.evidenceId!;
    const epiA = w3cRecommendationEpistemicId(evidenceA);

    const { materialized: matB } = await secondSuccessOnSameProject(ctx);
    const evidenceB = matB.product.evidenceId!;
    const epiB = w3cRecommendationEpistemicId(evidenceB);
    expect(epiB).not.toBe(epiA);

    const epistemic = await ctx.oa.cycleServices!.getEpistemicState.execute({
      projectId: ctx.seeded.projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const itemA = epistemic.state.items.find((i) => i.epistemicItemId === epiA);
    const itemB = epistemic.state.items.find((i) => i.epistemicItemId === epiB);
    expect(itemA).toBeTruthy();
    expect(itemB).toBeTruthy();
    expect(itemA!.status).toBe("superseded");
    expect(itemB!.status).toBe("active");
    expect(itemB!.source).toBe(`w3c-post-evidence:${evidenceB}`);
  });
});

describe("W3C-R10 STOP no automatic HD", () => {
  it("R10: STOP requiresHumanDecision false; no HD created", async () => {
    const ctx = await authorizeTempArtifact("r10");
    armW3bBoundary({
      kind: "governed_stop",
      stopCondition: "EXECUTOR_INSUFFICIENT",
    });
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.code);
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.code);
    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok || !materialized.postEvidence?.ok) return;
    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
    expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
      false,
    );
    expect(materialized.postEvidence.recommendation.authority).toBe("none");
  });
});

describe("W3C-R11 structural path still needs decide", () => {
  it("R11: propose alone does not validate trajectory (existing P06 path)", async () => {
    const ctx = await authorizeTempArtifact("r11");
    await materializeSuccess(ctx);
    const trajBefore = await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
      projectId: ctx.seeded.projectId,
      version: ctx.decidedTrajectoryVersion,
    });
    expect(trajBefore.ok).toBe(true);
    if (!trajBefore.ok) return;

    const qualification = await resolveW2QualificationInputs({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
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
    const trajAfter = await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
      projectId: ctx.seeded.projectId,
      version: ctx.decidedTrajectoryVersion,
    });
    expect(trajAfter.ok).toBe(true);
    if (!trajAfter.ok) return;
    expect(trajAfter.trajectory.status).toBe("validated");
    expect(trajAfter.trajectory.version).toBe(trajBefore.trajectory.version);
  });
});

describe("W3C-R12 Nora-informed rationale", () => {
  it("R12: different Nora scripted text → different rationale containing Nora text", async () => {
    const ctxA = await authorizeTempArtifact("r12a");
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: Array(32).fill("SCRIPT_NORA_VARIANT_ONE_ZZZ"),
      }),
    );
    const { materialized: matA } = await materializeSuccess(ctxA);
    expect(matA.postEvidence?.ok).toBe(true);
    if (!matA.postEvidence || !matA.postEvidence.ok) return;

    const ctxB = await authorizeTempArtifact("r12b");
    setConversationProviderForTests(
      new FakeConversationProvider({
        scripted: Array(32).fill("SCRIPT_NORA_VARIANT_TWO_YYY"),
      }),
    );
    const { materialized: matB } = await materializeSuccess(ctxB);
    expect(matB.postEvidence?.ok).toBe(true);
    if (!matB.postEvidence || !matB.postEvidence.ok) return;

    expect(matA.product.outcome).toBe("SUCCESS");
    expect(matB.product.outcome).toBe("SUCCESS");
    expect(matA.postEvidence.recommendation.rationale).toContain(
      "SCRIPT_NORA_VARIANT_ONE_ZZZ",
    );
    expect(matB.postEvidence.recommendation.rationale).toContain(
      "SCRIPT_NORA_VARIANT_TWO_YYY",
    );
    expect(matA.postEvidence.recommendation.rationale).not.toBe(
      matB.postEvidence.recommendation.rationale,
    );
    expect(matA.postEvidence.recommendation.headline).toMatch(
      /après analyse Nora/i,
    );
  });
});

describe("W3C-R13 reservation presentation filter", () => {
  it("R13: filters historical W3-B reservation when postEvidence ok", () => {
    const reservations = [
      "Evidence requise avant claim produit",
      "Apprentissage / replan non démarrés",
      "Aucun READY",
    ];
    const filtered = filterProductReservationsForDisplay(reservations, true);
    expect(filtered).not.toContain("Apprentissage / replan non démarrés");
    expect(filtered).toContain("Aucun READY");
    const unfiltered = filterProductReservationsForDisplay(reservations, false);
    expect(unfiltered).toContain("Apprentissage / replan non démarrés");
  });
});

describe("W3C-R07 rehydrate binding sanity", () => {
  it("R07: rehydrate after materialize restores Epistemic-backed recommendation", async () => {
    const ctx = await authorizeTempArtifact("r07");
    const { attemptId, materialized } = await materializeSuccess(ctx);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) return;

    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      product: materialized.product,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidenceId).toBe(materialized.product.evidenceId);
    expect(rehydrated.recommendation.kind).toBe(
      materialized.postEvidence.recommendation.kind,
    );
    expect(rehydrated.recommendation.rationale).toBe(
      materialized.postEvidence.recommendation.rationale,
    );

    const again = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(again.ok && again.postEvidence?.ok).toBe(true);
  });
});


describe("W3C-R14 partial-write recovery", () => {
  it("R14: LPS success + Epistemic fail → retry exact structural Recommendation, no Nora/LPS duplicate", async () => {
    const ctx = await authorizeTempArtifact("r14");
    const fake = new FakeConversationProvider({
      scripted: Array(64).fill(
        "NORA_STRUCTURAL_R14_ANALYSIS — replan structurel recommandé.",
      ),
    });
    setConversationProviderForTests(fake);

    const services = ctx.oa.evidenceReviewServices!;
    const originalExecute = services.recommendNextGate.execute.bind(
      services.recommendNextGate,
    );
    services.recommendNextGate.execute = (async (req: never) => {
      const result = await originalExecute(req);
      if (!result.ok) return result;
      return {
        ...result,
        coordination: {
          ...result.coordination,
          nextAction: {
            actionCode: "replan_trajectory" as never,
            reasons: ["W3C-R14 structural fault-injection stub"],
            authorityRequired: "human" as const,
          },
        },
      };
    }) as typeof services.recommendNextGate.execute;

    const trajBefore =
      await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
        projectId: ctx.seeded.projectId,
        version: ctx.decidedTrajectoryVersion,
      });
    expect(trajBefore.ok).toBe(true);
    if (!trajBefore.ok) throw new Error("traj");

    armW3cEpistemicMaterializeFailOnceForTests();
    const { attemptId, materialized: first } = await materializeSuccess(ctx);

    expect(first.postEvidence?.ok).toBe(false);
    if (!first.postEvidence || first.postEvidence.ok) {
      throw new Error("expected Epistemic fault-injected fail-closed");
    }
    expect(first.postEvidence.code).toBe("W3C_EPISTEMIC_FAULT_INJECTED");
    expect(first.product.evidenceId).toBeTruthy();
    const evidenceId = first.product.evidenceId!;
    const reviewBundleId = first.product.reviewBundleId!;
    const noraCallsAfterFail = fake.getCallCountForTests();
    expect(noraCallsAfterFail).toBeGreaterThan(0);

    const lpsAfterFail =
      await ctx.oa.projectServices!.getCurrentLivingProjectState.execute({
        projectId: ctx.seeded.projectId,
      });
    expect(lpsAfterFail.ok).toBe(true);
    if (!lpsAfterFail.ok) throw new Error("lps");
    const lpsVersionAfterFail = lpsAfterFail.livingProjectState.version;
    expect(lpsAfterFail.livingProjectState.evidenceIds ?? []).toContain(
      evidenceId,
    );
    expect(lpsAfterFail.livingProjectState.context ?? "").toContain(
      "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]",
    );
    expect(lpsAfterFail.livingProjectState.nextStep).toBe(
      "structural_replan_propose",
    );

    const epiAfterFail = await ctx.oa.cycleServices!.getEpistemicState.execute({
      projectId: ctx.seeded.projectId,
    });
    expect(epiAfterFail.ok).toBe(true);
    if (!epiAfterFail.ok) throw new Error("epi");
    const epiId = w3cRecommendationEpistemicId(evidenceId);
    expect(
      epiAfterFail.state.items.find(
        (i) => i.epistemicItemId === epiId && i.status === "active",
      ),
    ).toBeUndefined();

    // Retry same terminal (same Product SQLite / same attempt).
    const retry = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) throw new Error(retry.code);
    expect(retry.postEvidence?.ok).toBe(true);
    if (!retry.postEvidence || !retry.postEvidence.ok) {
      throw new Error("retry postEvidence expected ok");
    }

    expect(fake.getCallCountForTests()).toBe(noraCallsAfterFail);
    expect(retry.product.evidenceId).toBe(evidenceId);
    expect(retry.product.reviewBundleId).toBe(reviewBundleId);
    expect(retry.postEvidence.evidenceId).toBe(evidenceId);
    expect(retry.postEvidence.lpsVersion).toBe(lpsVersionAfterFail);
    expect(retry.postEvidence.recommendation.kind).toBe("replan");
    expect(retry.postEvidence.recommendation.requiresHumanDecision).toBe(true);
    expect(retry.postEvidence.recommendation.nextStep).toBe(
      "structural_replan_propose",
    );
    expect(retry.postEvidence.recommendation.nextActionCode).toBe(
      "replan_trajectory",
    );
    expect(retry.postEvidence.recommendation.authority).toBe("none");
    expect(retry.postEvidence.recommendation.gateConsumed).toBe(false);
    expect(retry.postEvidence.recommendation.decisionCreated).toBe(false);
    expect(
      retry.postEvidence.recommendation.attemptAutoLaunchNextCycle,
    ).toBe(false);
    expect(retry.postEvidence.analysisText).toContain("NORA_STRUCTURAL_R14");
    expect(retry.postEvidence.noraInvoked).toBe(true);
    expect(retry.postEvidence.replanInvoked).toBe(false);

    const lpsAfterRetry =
      await ctx.oa.projectServices!.getCurrentLivingProjectState.execute({
        projectId: ctx.seeded.projectId,
      });
    expect(lpsAfterRetry.ok).toBe(true);
    if (!lpsAfterRetry.ok) throw new Error("lps2");
    expect(lpsAfterRetry.livingProjectState.version).toBe(lpsVersionAfterFail);
    const recoMarkers = (
      lpsAfterRetry.livingProjectState.context?.match(
        /\[\[W3C_POST_EVIDENCE_RECOMMENDATION_V1\]\]/g,
      ) ?? []
    ).length;
    expect(recoMarkers).toBe(1);

    const epiAfterRetry = await ctx.oa.cycleServices!.getEpistemicState.execute({
      projectId: ctx.seeded.projectId,
    });
    expect(epiAfterRetry.ok).toBe(true);
    if (!epiAfterRetry.ok) throw new Error("epi2");
    const activeReco = epiAfterRetry.state.items.find(
      (i) => i.epistemicItemId === epiId && i.status === "active",
    );
    expect(activeReco).toBeTruthy();
    expect(activeReco!.type).toBe("Recommendation");

    // Second retry idempotent — still no Nora / no LPS bump / no HD.
    const retry2 = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(retry2.ok && retry2.postEvidence?.ok).toBe(true);
    if (!retry2.ok || !retry2.postEvidence || !retry2.postEvidence.ok) return;
    expect(fake.getCallCountForTests()).toBe(noraCallsAfterFail);
    expect(retry2.postEvidence.lpsVersion).toBe(lpsVersionAfterFail);
    expect(retry2.postEvidence.recommendation.kind).toBe("replan");
    expect(retry2.postEvidence.recommendation.requiresHumanDecision).toBe(true);
    expect(retry2.postEvidence.recommendation.nextActionCode).toBe(
      "replan_trajectory",
    );

    const trajAfter =
      await ctx.oa.cycleServices!.getTrajectoryVersion.execute({
        projectId: ctx.seeded.projectId,
        version: ctx.decidedTrajectoryVersion,
      });
    expect(trajAfter.ok).toBe(true);
    if (!trajAfter.ok) return;
    expect(trajAfter.trajectory.version).toBe(trajBefore.trajectory.version);
    expect(trajAfter.trajectory.status).toBe(trajBefore.trajectory.status);

    // Restart path (rehydrate) preserves exact semantics.
    const restarted = await rehydrateProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId,
    });
    expect(restarted.ok && restarted.postEvidence?.ok).toBe(true);
    if (!restarted.ok || !restarted.postEvidence || !restarted.postEvidence.ok)
      return;
    expect(restarted.postEvidence.recommendation.kind).toBe("replan");
    expect(restarted.postEvidence.recommendation.requiresHumanDecision).toBe(
      true,
    );
    expect(restarted.postEvidence.recommendation.nextActionCode).toBe(
      "replan_trajectory",
    );
    expect(fake.getCallCountForTests()).toBe(noraCallsAfterFail);
  });

  it("R14b: STOP non-structural partial-write keeps recover / requiresHumanDecision false", async () => {
    const ctx = await authorizeTempArtifact("r14b");
    const fake = new FakeConversationProvider({
      scripted: Array(32).fill("NORA_STOP_R14B_RECOVER"),
    });
    setConversationProviderForTests(fake);
    armW3bBoundary({
      kind: "governed_stop",
      stopCondition: "EXECUTOR_INSUFFICIENT",
    });
    armW3cEpistemicMaterializeFailOnceForTests();

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.code);
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.code);

    const first = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.code);
    expect(first.postEvidence?.ok).toBe(false);
    const noraCalls = fake.getCallCountForTests();

    const retry = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(retry.ok && retry.postEvidence?.ok).toBe(true);
    if (!retry.ok || !retry.postEvidence || !retry.postEvidence.ok) return;
    expect(fake.getCallCountForTests()).toBe(noraCalls);
    expect(retry.postEvidence.recommendation.kind).toBe("recover");
    expect(retry.postEvidence.recommendation.requiresHumanDecision).toBe(false);
    expect(retry.postEvidence.recommendation.decisionCreated).toBe(false);
    expect(retry.postEvidence.recommendation.authority).toBe("none");
  });
});
