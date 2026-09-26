// @vitest-environment node
/**
 * CORR-02 — C2 PRODUCT-TURN INTEGRATION PROOF (proof-only).
 *
 * Exercises real orchestrateProjectAssistantTurn with FakeConversationProvider
 * structured output. Does NOT call the C2 validator as the primary assertion.
 * ZERO production code change. Isolated Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveTrajectoryDecisionSupportProjection } from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { ACTIVE_CYCLE_WORK_SOURCE } from "@/features/project-assistant/materializeActiveCycleWork";
import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
} from "./w2Harness";

const INVENTED_REF = "opt:trajectory:invented";

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

const sessionDirs: string[] = [];

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  while (sessionDirs.length) {
    const d = sessionDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function sessionDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "corr02-sess-"));
  sessionDirs.push(dir);
  return path.join(dir, name);
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

function acwProductTurn(
  items: NoraActiveCycleWorkItem[],
  narrative: string,
): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: { items },
    conversationGuidance: {
      kind: "RECOMMEND_NEXT_STEP",
      scope: "ACTIVE_CYCLE",
      statement: narrative,
      rationale: "corr02-structured-fixture",
    },
  });
}

async function projectDtoFromSeeded(
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

/**
 * seedQualifiedProject creates Light/Standard cycles as `acknowledged`.
 * ACW materialization requires status=`active` (workEligible).
 * Test-only transition — same pattern as BAR-WORK-09 pause forge, inverted.
 */
async function forgeCycleActiveForAcw(
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>,
  cycleInstanceId: string,
): Promise<void> {
  const loaded = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
  expect(loaded.ok).toBe(true);
  if (!loaded.ok) throw new Error("cycle missing");
  await oa.cycleServices.cycles.save({
    ...structuredClone(loaded.cycle),
    status: "active",
  });
}

async function composeWithDecisionSupport(input: {
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
  projectId: string;
  cycleInstanceId: string;
}) {
  await forgeCycleActiveForAcw(input.oa, input.cycleInstanceId);
  const tds = await resolveTrajectoryDecisionSupportProjection({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(tds.state).toBe("PRESENT");
  expect(tds.optionRefs).toEqual(
    expect.arrayContaining([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]),
  );
  const dto = await projectDtoFromSeeded(input.oa, input.projectId);
  const composed = await composeStudioCognitiveContext({
    analysis: analysisStub(),
    project: dto,
    registryRoot: W2_REGISTRY_ROOT,
    oa: input.oa,
    activeCycleInstanceId: input.cycleInstanceId,
    trajectoryDecisionSupport: tds,
  });
  expect(composed.ok).toBe(true);
  if (!composed.ok) throw new Error(composed.code);
  expect(composed.context.trajectoryDecisionSupport.state).toBe("PRESENT");
  expect(composed.context.activeCycle?.status).toBe("active");
  expect(composed.context.activeCycle?.workEligible).toBe(true);
  return { tds, composed: composed.context };
}

describe("CORR-02 C2 Product-turn integration proof", () => {
  it("invented syntactically-valid recommendedOptionRef → ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID via orchestrateProjectAssistantTurn", async () => {
    // Sanity: invented passes syntactic normalize (semantic membership is the guard).
    expect(normalizeActiveCycleRecommendedOptionRef(INVENTED_REF)).toBe(
      INVENTED_REF,
    );

    const db = tempProductDbPath("corr02-invented.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c02i" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c02i" });
    const oa = runtime.oa!;

    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.optionRefs).not.toContain(INVENTED_REF);

    // Pre-state
    const lpsBefore =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;
    const epistemicBefore = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwBefore = epistemicBefore.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );

    const provider = new FakeConversationProvider({
      scripted: [
        acwProductTurn(
          [
            {
              type: "Recommendation",
              statement:
                "Tenter une voie inventée hors Options serveur (fixture CORR-02).",
              confidence: "high",
              blocking: null,
              recommendedOptionRef: INVENTED_REF,
            },
          ],
          "Diagnostic clarifié — recommandation structurée inventée.",
        ),
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: seeded.projectId,
      content: "Le diagnostic est clarifié — que recommandes-tu ?",
      sessionDbPath: sessionDbPath("corr02-invented-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed,
      turnCorrelationId: "ltu:corr02:invented",
    });

    // A — turn result through real orchestrator
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected validation_error");
    expect(result.status).toBe("validation_error");
    expect(result.code).toBe("ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID");

    // D — validation_error has no successful Pilot-facing structured Recommendation
    expect(
      "text" in result ? (result as { text?: string }).text : undefined,
    ).toBeUndefined();
    expect(result.message).not.toMatch(/Recommandation structurée/);
    expect(result.message).not.toContain(INVENTED_REF);

    // B — no ACW Recommendation with invented ref; no new ACW items
    const epistemicAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwAfter = epistemicAfter.filter(
      (e) => e.source === ACTIVE_CYCLE_WORK_SOURCE,
    );
    expect(acwAfter.length).toBe(acwBefore.length);
    expect(
      acwAfter.some(
        (e) =>
          e.type === "Recommendation" &&
          (e.relatedObjects ?? []).includes(INVENTED_REF),
      ),
    ).toBe(false);

    // C — LPS version unchanged (C2 rejects before ACW materialization)
    const lpsAfter =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBe(lpsVersionBefore);

    // E — no durable object referencing invented ref (orchestrateTurn does not
    // invoke W2 presentation on this ACW path; assert no invented-ref object).
    expect(
      epistemicAfter.some((e) =>
        (e.relatedObjects ?? []).includes(INVENTED_REF),
      ),
    ).toBe(false);

    // F — no HumanDecision / promotion / execute
    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(traj.ok).toBe(false);
  });

  it("positive control — valid recommendedOptionRef is not rejected by C2", async () => {
    const db = tempProductDbPath("corr02-valid.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c02v" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c02v" });
    const oa = runtime.oa!;

    const { tds, composed } = await composeWithDecisionSupport({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.optionRefs).toContain(GOVERNED_OPTION_REF);

    const lpsBefore =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;

    const provider = new FakeConversationProvider({
      scripted: [
        acwProductTurn(
          [
            {
              type: "Recommendation",
              statement:
                "Préparer une nouvelle tentative gouvernée (fixture CORR-02 positive).",
              confidence: "high",
              blocking: null,
              recommendedOptionRef: GOVERNED_OPTION_REF,
            },
          ],
          "Recommendation structurée valide parmi Options serveur.",
        ),
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: seeded.projectId,
      content: "Recommande parmi les options serveur.",
      sessionDbPath: sessionDbPath("corr02-valid-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed,
      turnCorrelationId: "ltu:corr02:valid",
    });

    // Must not be rejected by C2 membership guard.
    if (!result.ok) {
      expect(result.code).not.toBe(
        "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
      );
    }
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    // Successful path persists ACW Recommendation for the valid ref.
    const epistemicAfter = await oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const acwRec = epistemicAfter.find(
      (e) =>
        e.source === ACTIVE_CYCLE_WORK_SOURCE &&
        e.type === "Recommendation" &&
        (e.relatedObjects ?? []).includes(GOVERNED_OPTION_REF),
    );
    expect(acwRec).toBeTruthy();

    const lpsAfter =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    // Valid ACW materialization advances LPS (contrast with invented fail path).
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      lpsVersionBefore,
    );

    // Pilot-facing structured line derived from same canonical option.
    expect(result.text).toMatch(
      /Recommandation structurée \(pas une décision\)/i,
    );
    expect(result.text).not.toContain(INVENTED_REF);
  });
});
