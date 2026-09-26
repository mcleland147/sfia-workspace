// @vitest-environment node
/**
 * CORR-01 — product-path proofs for semantic continuity:
 * stale recommendation basis, post-HumanDecision cutoff, decision independence.
 * Isolated W2 harness — does NOT mutate real StudyFlow.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { resolveCurrentNoraTrajectoryRecommendation } from "@/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation";
import { resolveTrajectoryDecisionSupportProjection } from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  validateActiveCycleRecommendationAgainstDecisionSupport,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  buildStudioCognitivePromptSections,
  composeStudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

async function persistAcwRecommendation(input: {
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  recommendedOptionRef: string;
  statement: string;
}): Promise<void> {
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    items: [
      {
        epistemicItemId: input.epistemicItemId,
        type: "Recommendation",
        statement: input.statement,
        status: "active",
        source: ACTIVE_CYCLE_WORK_SOURCE,
        relatedObjects: [
          input.projectId,
          input.cycleInstanceId,
          input.recommendedOptionRef,
        ],
      },
    ],
  });
  expect(written.ok).toBe(true);
  if (!written.ok) throw new Error(written.error.detailCode);
}

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
  };
}

function projectStub(seeded: {
  projectId: string;
  cycleInstanceId: string;
  lpsVersion: number;
}): ProjectAssistantContextDto {
  return {
    projectId: seeded.projectId,
    name: "CORR-01",
    shortReference: "C01",
    objective: "semantic continuity",
    contextSummary: "corr-01",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    lpsId: "lps:corr01",
    lpsVersion: seeded.lpsVersion,
    lpsCreatedAt: "2026-09-26T00:00:00.000Z",
    doctrineId: "pkg:corr01",
    doctrineVersion: "1",
    doctrineDigest: "digest:corr01",
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: seeded.cycleInstanceId,
  };
}

describe("CORR-01 product-path semantic continuity", () => {
  it("stale recommendation basis → OPTION_SET_STALE + zero HD + zero promotion", async () => {
    const db = tempProductDbPath("corr01-stale.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01s" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "stale" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:a",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Nora recommande governed-gated.",
    });

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
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    const sealed = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    expect(sealed.presented.recommendationBasisDigest).toBeTruthy();
    expect(sealed.presented.recommendationSource).toBe("nora_active_cycle");

    // Newer competing Nora Recommendation for same cycle (lexically later id).
    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:z",
      recommendedOptionRef: BOUNDED_OPTION_REF,
      statement: "Nora recommande maintenant bounded-direct.",
    });

    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    const trajBefore = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (!decided.ok) {
      expect(decided.code).toBe("OPTION_SET_STALE");
    }

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    const trajAfter = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(trajAfter.ok).toBe(trajBefore.ok);
    if (trajAfter.ok && trajBefore.ok) {
      expect(trajAfter.trajectory.version).toBe(trajBefore.trajectory.version);
      expect(trajAfter.trajectory.decidedByDecisionRef).toBe(
        trajBefore.trajectory.decidedByDecisionRef,
      );
    }
  });

  it("unchanged basis + non-recommended presented Option → decide succeeds", async () => {
    const db = tempProductDbPath("corr01-decide.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01d" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "decide" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:gov",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Nora recommande governed-gated.",
    });

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
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);

    // Recommendation ≠ Decision — select clarify while governed was recommended.
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.decision.selectedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(decided.executionPerformed).toBe(false);
    expect(decided.trajectory!.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
  });

  it("post-HD: old Nora Recommendation not CURRENT after reload", async () => {
    const db = tempProductDbPath("corr01-posthd.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01h" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "posthd" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:pre",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Pré-décision governed.",
    });

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

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const options = deriveTrajectoryOptions(qualification.qualification.inputs);
    const resolved = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );
    expect(resolved.resolved.noraRecommendationEpistemicItemId).toBeNull();

    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.state).toBe("PRESENT");
    expect(tds.currentNoraRecommendedOptionRef).toBeNull();
    expect(tds.currentRecommendationSource).toBe("deterministic_fallback");

    // Reload durable Product truth (new runtime on same sqlite).
    const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "c01h2" });
    const oa2 = runtime2.oa!;
    const resolved2 = await resolveCurrentNoraTrajectoryRecommendation({
      oa: oa2,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved2.ok).toBe(true);
    if (!resolved2.ok) return;
    expect(resolved2.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub(),
      project: projectStub(seeded),
      registryRoot: W2_REGISTRY_ROOT,
      oa: oa2,
      activeCycleInstanceId: seeded.cycleInstanceId,
      trajectoryDecisionSupport: await resolveTrajectoryDecisionSupportProjection(
        {
          oa: oa2,
          projectId: seeded.projectId,
          cycleInstanceId: seeded.cycleInstanceId,
        },
      ),
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(
      composed.context.decisions.items.some(
        (d) =>
          d.lifecycle === "CURRENT" &&
          d.selectedOptionId === GOVERNED_OPTION_REF,
      ),
    ).toBe(true);
    const prompt = buildStudioCognitivePromptSections(composed.context).join(
      "\n",
    );
    expect(prompt).toMatch(/HumanDecision|décision/i);
    expect(prompt).not.toMatch(
      /Recommendation Nora courante \(structurée\) : opt:trajectory:governed-gated/,
    );
    const hist = composed.context.activeCycleWorkItems.items.find(
      (i) =>
        i.type === "Recommendation" &&
        i.recommendedOptionRef === GOVERNED_OPTION_REF,
    );
    if (hist) {
      expect(hist.recommendationCurrentness).toBe("HISTORICAL");
    }
  });

  it("C2/C4 — invented ref + UNAVAILABLE decision-support fail closed", () => {
    expect(
      validateActiveCycleRecommendationAgainstDecisionSupport({
        items: [
          {
            type: "Recommendation",
            recommendedOptionRef: "opt:trajectory:invented",
          },
        ],
        decisionSupportState: "PRESENT",
        optionRefs: [GOVERNED_OPTION_REF, BOUNDED_OPTION_REF, CLARIFY_OPTION_REF],
      }).ok,
    ).toBe(false);

    expect(
      validateActiveCycleRecommendationAgainstDecisionSupport({
        items: [
          {
            type: "Recommendation",
            recommendedOptionRef: GOVERNED_OPTION_REF,
          },
        ],
        decisionSupportState: "NONE",
        optionRefs: [],
      }).ok,
    ).toBe(false);
  });

  it("C4 — mixed durable invented+valid → resolve fails (not valid winner)", async () => {
    const db = tempProductDbPath("corr01-mixed.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01m" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "mixed" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:valid",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Valid",
    });
    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:invented",
      recommendedOptionRef: "opt:trajectory:invented-mixed",
      statement: "Invented",
    });

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const options = deriveTrajectoryOptions(qualification.qualification.inputs);
    const resolved = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe("NORA_RECOMMENDATION_NOT_IN_OPTION_SET");
    }

    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.state).toBe("UNAVAILABLE");
    expect(tds.currentRecommendationSource).toBeNull();
  });
});
