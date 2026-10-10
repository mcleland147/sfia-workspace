/** @vitest-environment node */
/**
 * P6 chat-first Framing continuity — pure phase + OA front-door reuse.
 * ZERO REAL / ZERO provider.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  classifyFramingContinuityPhase,
  framingContinuityForConversationDisplay,
  framingContinuityPilotMessage,
  type FramingContinuitySnapshot,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "framing-cont-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`frm-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing continuity ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FRM${suffix}`,
    idempotencyKey: `idem:frm-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage.",
      ),
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return { runtime, projectId };
}

describe("classifyFramingContinuityPhase", () => {
  it("orders active > prepared > decided > awaiting > recommendation", () => {
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: "cyc:1",
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: true,
      }),
    ).toBe("active");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: true,
      }),
    ).toBe("ready_to_start");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: false,
      }),
    ).toBe("trajectory_decided_prepare_cycle");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("awaiting_trajectory_decision");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("recommendation_ready");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: false,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("blocked_no_recommendation");
  });

  it("messages stay pilot-facing and never claim START from prose alone", () => {
    const msg = framingContinuityPilotMessage(
      "awaiting_trajectory_decision",
      "Cadrage",
    );
    expect(msg).toMatch(/ok/);
    expect(msg).not.toMatch(/HumanDecision|gate F01|Recommendation ≠/i);
    expect(msg).not.toMatch(/est maintenant actif/i);
    expect(
      framingContinuityPilotMessage("ready_to_start", "Cadrage"),
    ).toMatch(/démarrer/i);
  });

  it("conversation display hides active / blocked; keeps ready_to_start", () => {
    const base: FramingContinuitySnapshot = {
      phase: "ready_to_start",
      catalogLabel: "Cadrage",
      targetCycleTypeId: "cyc:framing",
      recommendationId: null,
      semanticKey: null,
      trajectoryId: "trj:1",
      trajectoryVersion: 1,
      presentationDigest: null,
      approvalOptionLabel: null,
      preparedCycleInstanceId: "cyc:1",
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: true,
      message: "prêt",
      examination: null,
    };
    expect(framingContinuityForConversationDisplay(base)?.phase).toBe(
      "ready_to_start",
    );
    expect(
      framingContinuityForConversationDisplay({
        ...base,
        phase: "active",
        activeCycleInstanceId: "cyc:1",
      }),
    ).toBeNull();
    expect(
      framingContinuityForConversationDisplay({
        ...base,
        phase: "blocked_stale_or_incomplete",
      }),
    ).toBeNull();
  });
});

describe("chat-first Framing continuity OA bridge", () => {
  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("Rec CURRENT → prepare candidate → awaiting decision (no auto HD)", async () => {
    const { projectId } = await bootWithCurrentFramingRec("prep");
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.ok).toBe(true);
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    expect(prepared.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(prepared.continuity?.presentationDigest).toBeTruthy();

    const noDigest = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
    });
    expect(noDigest.ok).toBe(false);
    expect(noDigest.code).toBe("PRESENTATION_DIGEST_REQUIRED");
  });

  it("stale digest refuses HD; opening read does not mutate", async () => {
    const { projectId } = await bootWithCurrentFramingRec("stale");
    const r1 = await projectAssistantReadFramingContinuityAction({ projectId });
    const r2 = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(r1.continuity?.phase).toBe(r2.continuity?.phase);
    expect(r1.continuity?.phase).toBe("recommendation_ready");

    await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
  });

  it("approve digest → prepare cycle → ready_to_start → START → active", async () => {
    const { projectId } = await bootWithCurrentFramingRec("e2e");
    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    const digest = prepared.continuity?.presentationDigest;
    expect(digest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: digest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);

    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const cyclePrep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(cyclePrep.ok).toBe(true);
      expect(cyclePrep.continuity?.phase).toBe("ready_to_start");
    }

    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(true);
    expect(started.activeCycleInstanceId).toBeTruthy();

    const after = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(after.continuity?.phase).toBe("active");
    expect(after.continuity?.activeCycleInstanceId).toBe(
      started.activeCycleInstanceId,
    );

    // Idempotent second START must not invent a second active cycle
    const again = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(again.ok === false || again.activeCycleInstanceId === started.activeCycleInstanceId).toBe(
      true,
    );
  });

  it("START without prepared cycle fails closed", async () => {
    const { projectId } = await bootWithCurrentFramingRec("noprep");
    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(false);
  });
});
