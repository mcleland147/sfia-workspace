/**
 * Checkpoint F / R7 — post-Evidence recovery options context continuity.
 * ZERO REAL / ZERO Execute / ZERO HumanDecision on campaign.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ConversationProvider } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  buildRecoveryCognitionSection,
  inferDurableRealProcessInvoked,
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { w3bEvidenceIdentity } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  armW3bBoundary,
  clearW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorFailure,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
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
  setConversationProviderForTests(null);
  vi.restoreAllMocks();
});

const SAMPLE_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "xat:w3a:1f49d8e25e20837a",
  attemptStatus: "failed",
  stopReason: "REAL_PROCESS_NONZERO_EXIT",
  executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
  evidenceId: "ev:w3b:0b7609835db72e9a",
  reviewBundleId: "rb:w3b:0b7609835db72e9a",
  productOutcome: "FAIL",
  recommendationKind: "recover",
  requiresHumanDecision: false,
  headline: "Échec technique — recovery requise",
  rationale: "Attempt failed; Evidence disponible; aucun succès métier.",
  nextStep: "recovery_diagnose_or_replan",
  realProcessInvoked: true,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c-rec:a5b6220be2cc1e84",
};

async function authorizeTempArtifact(suffix: string, dbPath?: string) {
  const db = dbPath ?? tempProductDbPath(`r7-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `r7${suffix}`,
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
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
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
    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
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

async function materializeFail(
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
  expect(started.phase).toBe("running");
  const failed = await settleDeterministicProductCursorFailure({
    oa: ctx.oa,
    attemptId: started.attemptId,
  });
  expect(failed.ok).toBe(true);
  if (!failed.ok) throw new Error(failed.code);
  expect(failed.attempt.status).toBe("failed");
  const materialized = await materializeProductOutcomeFromAttempt({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    attemptId: started.attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error(materialized.code);
  expect(materialized.product.outcome).toBe("FAIL");
  expect(materialized.postEvidence?.ok).toBe(true);
  if (!materialized.postEvidence || !materialized.postEvidence.ok) {
    throw new Error("postEvidence");
  }
  expect(materialized.postEvidence.recommendation.kind).toBe("recover");
  return { started, materialized };
}

describe("R7 — pure derivation / cognition (T2–T5 unit)", () => {
  it("T3/T4 — recovery options + recommendation ≠ decision", () => {
    const inputs = {
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [] as string[],
      ckcAttribution: null,
      recoveryContext: SAMPLE_RECOVERY,
    };
    const options = deriveTrajectoryOptions(inputs);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(options[1]!.label).toMatch(/suspendre|replan/i);
    expect(options[2]!.label).toMatch(/Diagnostiquer|clarifier/i);
    const rec = deriveTrajectoryRecommendation(inputs);
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.promotesTrajectory).toBe(false);
    expect(rec.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(rec.rationale).toMatch(/Diagnostiquer|clarifier|diagnostiquer/i);
    expect(rec.rationale).toMatch(/ne lance aucune action automatiquement/i);
    expect(rec.rationale).not.toMatch(/Recommendation\s*≠\s*HumanDecision/);
    expect(rec.rationale).not.toContain("HumanDecision");
  });

  it("T6 — without RecoveryContext, generic trajectory unchanged", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
    });
    expect(options[0]!.label).toBe("Trajectoire gouvernée par gates");
    expect(options[1]!.label).toBe("Trajectoire bornée directe");
    expect(options[2]!.label).toBe("Clarifier avant d'engager");
  });

  it("T2 — recovery cognition section names FAIL / Evidence / recover", () => {
    const section = buildRecoveryCognitionSection(SAMPLE_RECOVERY);
    expect(section).toMatch(/recovery \/ replan/i);
    expect(section).toContain(SAMPLE_RECOVERY.attemptId);
    expect(section).toContain(SAMPLE_RECOVERY.evidenceId);
    expect(section).toContain("recommendationKind: recover");
    expect(section).toContain("realProcessInvoked (durable): true");
    expect(section).toMatch(/PAS un nouveau cadrage/);
    expect(section).toMatch(/Ne pas repartir sur le cadrage fonctionnel initial/);
  });

  it("T5 — cursor_real durable truth does not collapse to false", () => {
    const attempt = {
      processDiagnostic: {
        realProcessInvoked: true,
        boundaryProofMode: "cursor_real",
      },
      irreversibleEffectsPossible: true,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      launchedAt: "2026-09-17T20:00:00.000Z",
    } as ExecutionAttempt;
    expect(
      inferDurableRealProcessInvoked({
        attempt,
        boundaryProofMode: "cursor_real",
      }),
    ).toBe(true);
    expect(
      inferDurableRealProcessInvoked({
        attempt: {
          ...attempt,
          processDiagnostic: undefined,
          irreversibleEffectsPossible: undefined,
          stopReason: "ADAPTER_UNAVAILABLE",
        } as ExecutionAttempt,
        boundaryProofMode: null,
      }),
    ).toBe(false);
    expect(
      inferDurableRealProcessInvoked({
        attempt: {
          ...attempt,
          processDiagnostic: undefined,
          irreversibleEffectsPossible: undefined,
          stopReason: "OTHER",
        } as ExecutionAttempt,
        boundaryProofMode: "cursor_real",
      }),
    ).toBe(true);
  });
});

describe("R7 — durable RecoveryContext integration", () => {
  it("T1 — failed + Evidence + RB + W3C recover → RecoveryContext", async () => {
    const ctx = await authorizeTempArtifact("t1");
    const { started, materialized } = await materializeFail(ctx);
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).not.toBeNull();
    expect(resolved.context!.attemptId).toBe(started.attemptId);
    expect(resolved.context!.evidenceId).toBe(materialized.product.evidenceId);
    expect(resolved.context!.reviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(resolved.context!.recommendationKind).toBe("recover");
    expect(resolved.context!.productOutcome).toBe("FAIL");
    expect(resolved.context!.businessEffectProven).toBe(false);
  });

  it("T7 — SUCCESS continue episode → no false recovery", async () => {
    const ctx = await authorizeTempArtifact("t7");
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
    const settled = await settleDeterministicProductCursorSuccess({
      oa: ctx.oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) return;
    const { governedExecuteRecordResult } = await import(
      "@/features/project-assistant/w2/governedExecuteAuthorizedContract"
    );
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
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.recommendation.kind).toBe("continue");
    }
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).toBeNull();
  });

  it("T6 — no failed episode → generic propose labels", async () => {
    const db = tempProductDbPath("r7-generic.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r7gen" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "gen" });
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
    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });

  it("T2/T3/T4/T12 — propose after FAIL yields recovery options, no HD/Attempt", async () => {
    const ctx = await authorizeTempArtifact("t234");
    const { started, materialized } = await materializeFail(ctx);

    const attemptsBefore =
      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ctx.executionContractId,
      });
    expect(attemptsBefore.ok).toBe(true);
    if (!attemptsBefore.ok) return;
    const countBefore = attemptsBefore.attempts.length;

    const captured: { system: string; user: string }[] = [];
    const recording: ConversationProvider = {
      providerId: "fake-test",
      async complete(messages) {
        const system = messages.find((m) => m.role === "system")?.content ?? "";
        const user = messages.find((m) => m.role === "user")?.content ?? "";
        captured.push({ system, user });
        return {
          text: "RECOMMANDATION recovery/replan — diagnostiquer avant retry. PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "fake-r7",
          },
        };
      },
    };
    setConversationProviderForTests(recording);

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

    expect(proposed.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposed.options[1]!.label).toMatch(/suspendre|replan/i);
    expect(proposed.options[2]!.label).toMatch(/Diagnostiquer|clarifier/i);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.recommendation.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);

    const recoveryPrompt = captured.find(
      (c) =>
        c.system.includes("recovery / replan") ||
        c.user.includes("recovery/replan"),
    );
    expect(recoveryPrompt).toBeTruthy();
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toContain(
      started.attemptId,
    );
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toContain(
      materialized.product.evidenceId!,
    );
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toMatch(/recover/i);
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toMatch(
      /PAS un nouveau cadrage/i,
    );

    const attemptsAfter =
      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ctx.executionContractId,
      });
    expect(attemptsAfter.ok).toBe(true);
    if (!attemptsAfter.ok) return;
    expect(attemptsAfter.attempts.length).toBe(countBefore);
  });

  it("T8 — Evidence without coherent Attempt binding does not resolve", async () => {
    const ctx = await authorizeTempArtifact("t8");
    const { started, materialized } = await materializeFail(ctx);
    expect(materialized.product.evidenceId).toBeTruthy();
    // Hostile: resolve on a different project id → null / no cross-bind
    const other = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: "prj:hostile-other",
    });
    expect(other.ok).toBe(true);
    if (!other.ok) return;
    expect(other.context).toBeNull();
    // Identity check: mismatched evidenceId in payload is rejected by identity
    const ids = w3bEvidenceIdentity(started.attemptId);
    expect(materialized.product.evidenceId).toBe(ids.evidenceId);
  });

  it("T9 — W3C recover for another project is not injected", async () => {
    const ctxA = await authorizeTempArtifact("t9a");
    await materializeFail(ctxA);
    const ctxB = await authorizeTempArtifact("t9b");
    // B has no fail episode
    const resolvedB = await resolvePostEvidenceRecoveryContext({
      oa: ctxB.oa,
      projectId: ctxB.seeded.projectId,
    });
    expect(resolvedB.ok && resolvedB.context === null).toBe(true);
  });

  it("T10 — restart rebuilds RecoveryContext from durable only", async () => {
    const db = tempProductDbPath("r7-restart.sqlite");
    const ctxA = await authorizeTempArtifact("t10", db);
    const { started, materialized } = await materializeFail(ctxA);
    const projectId = ctxA.seeded.projectId;
    const attemptId = started.attemptId;
    const evidenceId = materialized.product.evidenceId!;

    const runtimeB = bootW2Runtime({
      productDbPath: db,
      idPrefix: "r7t10b",
    });
    const oaB = runtimeB.oa!;
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: oaB,
      projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).not.toBeNull();
    expect(resolved.context!.attemptId).toBe(attemptId);
    expect(resolved.context!.evidenceId).toBe(evidenceId);
    expect(resolved.context!.recommendationKind).toBe("recover");
  });

  it("T11 — generic W2 recommendation does not mask W3C recover", async () => {
    const ctx = await authorizeTempArtifact("t11");
    // First instruct generic (before fail) already happened in authorize.
    // After fail, W3C recover must still resolve even if older OptionSet exists.
    await materializeFail(ctx);
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok && resolved.context?.recommendationKind).toBe("recover");
    expect(resolved.ok && resolved.context?.w3cEpistemicItemId).toMatch(
      /^epi:w3c-rec:/,
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
    if (!proposed.ok) return;
    expect(proposed.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
  });
});
