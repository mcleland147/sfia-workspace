/**
 * RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01
 * StudyFlow-equivalent: UNRESOLVED pre-start + decided v5 + proposed v6
 * → restart recovers owned continuity / binding. ZERO REAL / ZERO StudyFlow mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalMorrisGateAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  materializeProductOutcomeFromAttempt,
  w3bEvidenceIdentity,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
import {
  inferDurableRealProcessInvoked,
  resolvePostEvidenceRecoveryContext,
} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { resolveRecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  serializeW3cRecommendationPayload,
  w3cRecommendationEpistemicId,
  type W3cRecommendationPayload,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const STUDYFLOW_TARGET =
  "projects/studyflow/01-cadrage/note-de-cadrage.md";
const WRITE_MODE_UNRESOLVED =
  "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
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
  return {
    proposed,
    decisionId: decided.decision.decisionId,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    decidedVersion: proposed.proposedTrajectory!.version,
  };
}

async function proposeOnly(oa: RuntimeOaStack, projectId: string) {
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
  if (!proposed.ok) throw new Error(`propose-only: ${proposed.code}`);
  return proposed;
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
    headline: "Échec docs_write — recovery write-mode",
    rationale: "Attempt failed pre-start UNRESOLVED; no business success.",
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

describe("RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01", () => {
  it("StudyFlow-equivalent restart: UNRESOLVED + decided vN + proposed vN+1 → owned binding", async () => {
    const db = tempProductDbPath("rbwm-continuity.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "rbwm" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "cont" });
    const oa = runtime.oa!;

    // Episode seed HD (not the recovery tip).
    const seedDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
    const attemptId = `xat:w3a:rbwm-${Math.random().toString(16).slice(2, 10)}`;
    const ecId = `xct:m3-res:rbwm-${Math.random().toString(16).slice(2, 10)}`;

    const authority = registerLocalMorrisGateAuthority({
      authorityResolver: oa.authorityResolver,
      scope: "studio.gcec.docs_write",
      issuedAt: oa.clock.nowIso(),
      evidenceId: `evd:rbwm:${ecId}`,
      forceEnable: true,
    });
    if (!authority.ok) throw new Error(authority.code);

    const built =
      await oa.executionContractServices!.buildExecutionContract.execute({
        executionContractId: ecId,
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId ?? undefined,
        decisionRefs: [seedDecide.decisionId],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "studio.gcec.docs_write",
        inputs: {
          targetPath: STUDYFLOW_TARGET,
          targetRepositoryRef: "mcleland147/sfia-workspace",
          repositoryRef: "mcleland147/sfia-workspace",
          pathAllowlist: ["projects/studyflow/"],
          contentRequirements: ["markdown"],
          // Mode intentionally absent — natural incomplete tip shape.
        },
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        requiredAuthority: "MORRIS",
        constraints: ["BOUNDED DOCS-WRITE", "PATH_ALLOWLIST_ONLY", "PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
        reversibility: "reversible",
        idempotencyKey: `idem:rbwm-${ecId}`,
        correlationId: `cor:rbwm-${ecId}`,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    if (!built.ok) throw new Error(built.error.detailCode);

    await oa.executionContractServices!.contracts.save({
      ...built.contract,
      status: "confirmed",
      version: built.contract.version + 1,
    });

    const now = oa.clock.nowIso();
    await oa.executionAttemptServices!.attempts.create({
      schemaVersion: "0.2.0-oa" as const,
      attemptId,
      executionContractId: ecId,
      executionContractVersion: built.contract.version + 1,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "failed" as const,
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: now,
      failedAt: now,
      stopReason: WRITE_MODE_UNRESOLVED,
      irreversibleEffectsPossible: false,
      processDiagnostic: {
        kind: "process_failure_diagnostic" as const,
        realProcessInvoked: false,
        boundaryProofMode: "cursor_real" as const,
        exitCode: null,
        stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
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
    } as never);

    const ids = w3bEvidenceIdentity(attemptId);
    await materializeProductOutcomeFromAttempt({
      oa,
      projectId: seeded.projectId,
      attemptId,
    });
    await sealW3cRecover({
      oa,
      projectId: seeded.projectId,
      attemptId,
      ecId,
      evidenceId: ids.evidenceId,
      reviewBundleId: ids.reviewBundleId,
    });

    const recoveryCtx = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: seeded.projectId,
    });
    expect(recoveryCtx.ok).toBe(true);
    if (!recoveryCtx.ok || !recoveryCtx.context) {
      throw new Error("recovery context missing");
    }
    expect(recoveryCtx.context.realProcessInvoked).toBe(false);
    expect(recoveryCtx.context.businessEffectProven).toBe(false);
    expect(recoveryCtx.context.stopReason).toBe(WRITE_MODE_UNRESOLVED);

    const attemptLoaded =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(attemptLoaded.ok).toBe(true);
    if (attemptLoaded.ok) {
      expect(
        inferDurableRealProcessInvoked({
          attempt: attemptLoaded.attempt,
          boundaryProofMode: "cursor_real",
        }),
      ).toBe(false);
    }

    // Recovery governed decision (StudyFlow-equivalent "v5") — no PREPARE.
    const recoveryDecide = await proposeAndDecideGoverned(
      oa,
      seeded.projectId,
    );
    const recoveryHd = recoveryDecide.decisionId;
    expect(recoveryHd).not.toBe(seedDecide.decisionId);

    const currentAfterDecide = await oa.cycleServices!.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(currentAfterDecide.ok).toBe(true);
    if (!currentAfterDecide.ok) return;
    const decidedVersion = currentAfterDecide.trajectory.version;
    expect(currentAfterDecide.trajectory.decidedByDecisionRef).toBe(recoveryHd);
    expect(currentAfterDecide.trajectory.decidedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );

    // Later "Instruire les options" creates proposed candidate (StudyFlow v6)
    // but MUST remain undecided / not current tip authority.
    const laterPropose = await proposeOnly(oa, seeded.projectId);
    expect(laterPropose.proposedTrajectory).toBeTruthy();
    expect(laterPropose.proposedTrajectory!.status).toBe("candidate");
    expect(laterPropose.proposedTrajectory!.version).toBeGreaterThan(
      decidedVersion,
    );

    const currentStill = await oa.cycleServices!.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(currentStill.ok).toBe(true);
    if (!currentStill.ok) return;
    // Current tip for ownership remains the decided recovery trajectory.
    expect(currentStill.trajectory.decidedByDecisionRef).toBe(recoveryHd);
    expect(currentStill.trajectory.decidedOptionRef).toBe(GOVERNED_OPTION_REF);

    // Hard-restart-style re-read.
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
    expect(reloaded.binding.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(reloaded.binding.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(reloaded.binding.targetPath).toBe(STUDYFLOW_TARGET);
    expect(reloaded.binding.sourceExecutionContractId).toBe(ecId);
    expect(reloaded.binding.sourceAttemptId).toBe(attemptId);
    expect(reloaded.binding.sourceStatus).toBe("confirmed");

    const bound = await resolveRecoveryExecutionBinding({
      oa,
      projectId: seeded.projectId,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    expect(bound.recoveryContextPresent).toBe(true);
    expect(bound.binding).not.toBeNull();
    expect(bound.binding?.sourceAttemptId).toBe(attemptId);

    // No PREPARE / Execute / Attempt invented by continuity read.
    const history =
      await oa.executionContractServices!.listExecutionContractHistory.execute({
        projectId: seeded.projectId,
      });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(
      history.contracts.some(
        (c) =>
          c.status === "confirmation_required" ||
          c.status === "draft" ||
          c.status === "proposed",
      ),
    ).toBe(false);
  });
});
