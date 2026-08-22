/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation.
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestProjectServices,
  type ActorReference,
  type ProjectServices,
} from "@/lib/oa/project";
import {
  CAPITALIZATION_CYCLE_TYPE_ID,
  MAX_TRAJECTORY_SNAPSHOT_BYTES,
  MemoryCkcResolver,
  createTestCycleServices,
  measureTrajectorySnapshotBytes,
  type CycleServices,
  type TrajectoryStep,
} from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

function buildProjectServices(): ProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  return createTestProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-07-24T06:00:00.000Z",
  });
}

async function seedProject(
  projects: ProjectServices,
  projectId = "prj:campus360-oa",
): Promise<void> {
  const created = await projects.createProject.execute({
    projectId,
    title: "Campus360 Option A",
    objective: "Conduire Option A conversation → exécution gouvernée",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId.replace("prj:", "")}-v1`,
  });
  expect(created.ok).toBe(true);
}

function buildCycle(
  projects: ProjectServices,
  ckc?: MemoryCkcResolver,
): CycleServices & { audit: { events: unknown[] } } {
  return createTestCycleServices({
    projectServices: projects,
    fixedNowIso: "2026-07-24T06:00:00.000Z",
    ckcResolver: ckc,
  });
}

const STEPS_V1: TrajectoryStep[] = [
  {
    stepId: "stp:clarify",
    order: 1,
    label: "Clarify",
    state: "pending",
  },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending",
    dependencies: ["stp:clarify"],
  },
];

describe("T-A2 QualifyCycle", () => {
  it("recommends Light when lowRiskBounded and no Critical signals", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    const result = await cycle.qualifyCycle.execute({
      signals: { lowRiskBounded: true },
    });
    expect(result.ok).toBe(true);
    expect(result.recommendation.recommendedProfile).toBe("Light");
    expect(result.recommendation.isMorrisDecision).toBe(false);
  });

  it("recommends Standard by default", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    const result = await cycle.qualifyCycle.execute({
      signals: {},
    });
    expect(result.recommendation.recommendedProfile).toBe("Standard");
  });

  it("recommends Critical on any Critical signal", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    for (const key of [
      "structuralChange",
      "securityImpact",
      "architectureImpact",
      "dataImpact",
      "irreversible",
    ] as const) {
      const result = await cycle.qualifyCycle.execute({
        signals: { [key]: true },
      });
      expect(result.recommendation.recommendedProfile).toBe("Critical");
      expect(result.recommendation.requiresJustificationForCritical).toBe(true);
      expect(result.recommendation.isMorrisDecision).toBe(false);
    }
  });

  it("marks Capitalization via cycleTypeId, not profile enum", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    const result = await cycle.qualifyCycle.execute({
      signals: { lowRiskBounded: false },
      cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
    });
    expect(result.recommendation.recommendedProfile).toBe("Standard");
    expect(result.recommendation.capitalizationViaCycleTypeId).toBe(true);
  });
});

describe("T-A2 CreateCycle", () => {
  it("creates Light/Standard as acknowledged and Critical as proposed", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:cyc-light");
    await seedProject(projects, "prj:cyc-crit");
    const cycle = buildCycle(projects);

    const light = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:light-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:cyc-light",
      signals: { lowRiskBounded: true },
      createdBy: ACTOR,
    });
    expect(light.ok).toBe(true);
    if (!light.ok) return;
    expect(light.cycle.profile).toBe("Light");
    expect(light.cycle.status).toBe("acknowledged");
    expect(light.cycle.acknowledgedAt).toBe("2026-07-24T06:00:00.000Z");
    expect(light.qualification.isMorrisDecision).toBe(false);

    const critical = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:crit-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:cyc-crit",
      signals: { structuralChange: true },
      justification: "Structural LPS migration across aggregates",
      createdBy: ACTOR,
    });
    expect(critical.ok).toBe(true);
    if (!critical.ok) return;
    expect(critical.cycle.profile).toBe("Critical");
    expect(critical.cycle.status).toBe("proposed");
    expect(critical.cycle.acknowledgedAt).toBeUndefined();
  });

  it("refuses Critical without justification", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:cyc-noj");
    const cycle = buildCycle(projects);
    const result = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:noj-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:cyc-noj",
      signals: { securityImpact: true },
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe(
      "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED",
    );
    expect(result.error.code).toBe("DECISION_REQUIRED");
  });

  it("creates Capitalization cycleType with Standard profile", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:cap");
    const cycle = buildCycle(projects);
    const result = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:cap-1",
      cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
      projectId: "prj:cap",
      signals: {},
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cycle.cycleTypeId).toBe(CAPITALIZATION_CYCLE_TYPE_ID);
    expect(result.cycle.profile).toBe("Standard");
  });

  it("refuses create when project is absent", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    const result = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:missing-prj",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:does-not-exist",
      signals: {},
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PROJECT_NOT_FOUND");
  });

  it("does not auto-acknowledge Critical and does not invent Morris decision", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:no-morris");
    const cycle = buildCycle(projects);
    const result = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:no-morris",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:no-morris",
      signals: { irreversible: true },
      justification: "Irreversible cutover window",
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cycle.status).toBe("proposed");
    expect(result.qualification.isMorrisDecision).toBe(false);
  });
});

describe("T-A2 Trajectory", () => {
  it("creates v1 trajectory and links LPS via expectedVersion", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-1");
    const cycle = buildCycle(projects);

    const created = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:main",
      projectId: "prj:trj-1",
      steps: STEPS_V1,
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.trajectory.version).toBe(1);
    expect(created.trajectory.status).toBe("candidate");
    expect(created.livingProjectStateVersion).toBe(2);

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:trj-1",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.trajectoryId).toBe("trj:main");
    expect(lps.livingProjectState.trajectoryVersion).toBe(1);
  });

  it("proposes a new trajectory version and supersedes previous", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-2");
    const cycle = buildCycle(projects);

    const v1 = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:replan",
      projectId: "prj:trj-2",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(v1.ok).toBe(true);

    const v2Steps: TrajectoryStep[] = [
      ...STEPS_V1,
      {
        stepId: "stp:execute",
        order: 3,
        label: "Execute",
        state: "pending",
        dependencies: ["stp:decide"],
      },
    ];
    const v2 = await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:replan",
      projectId: "prj:trj-2",
      expectedVersion: 1,
      expectedLpsVersion: 2,
      steps: v2Steps,
      status: "validated",
      createdBy: ACTOR,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.trajectory.version).toBe(2);
    expect(v2.trajectory.supersedesTrajectoryVersion).toBe(1);

    const historical = await cycle.getTrajectoryVersion.execute({
      projectId: "prj:trj-2",
      version: 1,
    });
    expect(historical.ok).toBe(true);
    if (!historical.ok) return;
    expect(historical.trajectory.status).toBe("superseded");
  });

  it("refuses cyclic step dependencies", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-cycle");
    const cycle = buildCycle(projects);
    const cyclic: TrajectoryStep[] = [
      {
        stepId: "stp:a",
        order: 1,
        label: "A",
        state: "pending",
        dependencies: ["stp:b"],
      },
      {
        stepId: "stp:b",
        order: 2,
        label: "B",
        state: "pending",
        dependencies: ["stp:a"],
      },
    ];
    const result = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:cyclic",
      projectId: "prj:trj-cycle",
      steps: cyclic,
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
    expect(result.error.internalCauseRef).toBe("cyclic_dependencies");
  });

  it("conflicts on concurrent trajectory propose with same expectedVersion", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-race");
    const cycle = buildCycle(projects);
    const v1 = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:race",
      projectId: "prj:trj-race",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(v1.ok).toBe(true);

    const nextSteps = structuredClone(STEPS_V1);
    const [a, b] = await Promise.all([
      cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:race",
        projectId: "prj:trj-race",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: nextSteps,
        createdBy: ACTOR,
      }),
      cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:race",
        projectId: "prj:trj-race",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: nextSteps,
        createdBy: ACTOR,
      }),
    ]);

    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (fails[0]?.ok === false) {
      expect(
        fails[0].error.detailCode === "TRAJECTORY_VERSION_CONFLICT" ||
          fails[0].error.detailCode === "LPS_VERSION_CONFLICT",
      ).toBe(true);
    }
  });

  it("supports logical rollback by proposing restored prior steps as new version", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-rb");
    const cycle = buildCycle(projects);
    await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:rb",
      projectId: "prj:trj-rb",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:rb",
      projectId: "prj:trj-rb",
      expectedVersion: 1,
      expectedLpsVersion: 2,
      steps: [
        ...STEPS_V1,
        { stepId: "stp:x", order: 3, label: "X", state: "pending" },
      ],
      status: "validated",
      createdBy: ACTOR,
    });
    const rollback = await cycle.proposeTrajectoryVersion.execute({
      trajectoryId: "trj:rb",
      projectId: "prj:trj-rb",
      expectedVersion: 2,
      expectedLpsVersion: 3,
      steps: structuredClone(STEPS_V1),
      status: "validated",
      createdBy: ACTOR,
    });
    expect(rollback.ok).toBe(true);
    if (!rollback.ok) return;
    expect(rollback.trajectory.version).toBe(3);
    expect(rollback.trajectory.steps).toHaveLength(2);
    const v2 = await cycle.getTrajectoryVersion.execute({
      projectId: "prj:trj-rb",
      version: 2,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.trajectory.status).toBe("superseded");
    expect(v2.trajectory.steps).toHaveLength(3);
  });

  it("surfaces LPS expectedVersion conflict when linking trajectory", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-lps");
    const cycle = buildCycle(projects);
    const result = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:lps-conflict",
      projectId: "prj:trj-lps",
      steps: STEPS_V1,
      expectedLpsVersion: 99,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("LPS_VERSION_CONFLICT");
  });

  it("enforces trajectory JSON size cap", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:trj-size");
    const cycle = buildCycle(projects);
    const hugeLabel = "x".repeat(MAX_TRAJECTORY_SNAPSHOT_BYTES);
    const result = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:huge",
      projectId: "prj:trj-size",
      steps: [
        {
          stepId: "stp:huge",
          order: 1,
          label: hugeLabel,
          state: "pending",
        },
      ],
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
    expect(
      measureTrajectorySnapshotBytes({
        steps: [
          {
            stepId: "stp:huge",
            order: 1,
            label: hugeLabel,
            state: "pending",
          },
        ],
        status: "candidate",
        version: 1,
      }),
    ).toBeGreaterThan(MAX_TRAJECTORY_SNAPSHOT_BYTES);
  });
});

describe("T-A2 Epistemic", () => {
  it("stores Observation/Hypothesis/Option and refuses Hypothesis→DecisionRef promotion", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:epi");
    const cycle = buildCycle(projects);

    const updated = await cycle.updateEpistemicState.execute({
      projectId: "prj:epi",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:obs-1",
          type: "Observation",
          statement: "Users need guided qualification",
          source: "interview:campus",
        },
        {
          epistemicItemId: "epi:hyp-1",
          type: "Hypothesis",
          statement: "Light profile covers most campus changes",
        },
        {
          epistemicItemId: "epi:opt-1",
          type: "Option",
          statement: "Proceed with Standard delivery cycle",
        },
      ],
    });
    expect(updated.ok).toBe(true);
    if (!updated.ok) return;
    expect(updated.state.items).toHaveLength(3);

    const forbiddenFlag = await cycle.updateEpistemicState.execute({
      projectId: "prj:epi",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:dec-1",
          type: "DecisionRef",
          statement: "Decide Light",
          promoteFromHypothesis: true,
        },
      ],
    });
    expect(forbiddenFlag.ok).toBe(false);
    if (forbiddenFlag.ok) return;
    expect(forbiddenFlag.error.detailCode).toBe("EPISTEMIC_PROMOTION_FORBIDDEN");
    expect(forbiddenFlag.error.code).toBe("AUTHORITY_DENIED");

    const forbiddenSupersede = await cycle.updateEpistemicState.execute({
      projectId: "prj:epi",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:dec-2",
          type: "DecisionRef",
          statement: "Decide Light",
          supersedes: "epi:hyp-1",
        },
      ],
    });
    expect(forbiddenSupersede.ok).toBe(false);
    if (forbiddenSupersede.ok) return;
    expect(forbiddenSupersede.error.detailCode).toBe(
      "EPISTEMIC_PROMOTION_FORBIDDEN",
    );
  });

  it("refuses Observation without source or provenance", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:epi-obs");
    const cycle = buildCycle(projects);
    const result = await cycle.updateEpistemicState.execute({
      projectId: "prj:epi-obs",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bare-obs",
          type: "Observation",
          statement: "Fact-like claim without source",
        },
      ],
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EPISTEMIC_INVALID");
  });
});

describe("T-A2 CKC", () => {
  it("returns registry candidate when present", async () => {
    const projects = buildProjectServices();
    const ckc = new MemoryCkcResolver([
      {
        cycleTypeId: "cyc:delivery",
        level: "detailed",
        status: "resolved",
        version: "1.0.0",
        freshness: "fresh",
        confidence: "high",
        source: "repository_candidate",
      },
    ]);
    const cycle = buildCycle(projects, ckc);
    const result = await cycle.resolveCycleKnowledgeContract.execute({
      cycleTypeId: "cyc:delivery",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.level).toBe("detailed");
    expect(result.resolution.status).toBe("resolved");
    expect(result.resolution.executionAuthority).toBe(false);
    expect(result.resolution.fallbackPolicy).toBe("intra_v3_only");
  });

  it("returns absent/unavailable without inventing detailed content", async () => {
    const projects = buildProjectServices();
    const cycle = buildCycle(projects);
    const result = await cycle.resolveCycleKnowledgeContract.execute({
      cycleTypeId: "cyc:unknown-type",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.resolution.level).toBe("absent");
    expect(result.resolution.status).toBe("unavailable");
    expect(result.resolution.executionAuthority).toBe(false);
    expect(result.resolution.fallbackPolicy).toBe("intra_v3_only");
  });

  it("does not block cycle creation solely for absent CKC", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:ckc-absent");
    const cycle = buildCycle(projects);
    const ckc = await cycle.resolveCycleKnowledgeContract.execute({
      cycleTypeId: "cyc:no-ckc",
    });
    expect(ckc.ok).toBe(true);
    if (!ckc.ok) return;
    expect(ckc.resolution.status).toBe("unavailable");

    const created = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:despite-absent-ckc",
      cycleTypeId: "cyc:no-ckc",
      projectId: "prj:ckc-absent",
      signals: {},
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
  });
});

describe("T-A2 immutability / anti-aliasing", () => {
  it("does not alias returned cycle/trajectory/epistemic into the store", async () => {
    const projects = buildProjectServices();
    await seedProject(projects, "prj:alias-cyc");
    const cycle = buildCycle(projects);

    const created = await cycle.createCycle.execute({
      cycleInstanceId: "cyc:alias",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:alias-cyc",
      signals: {},
      createdBy: ACTOR,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    created.cycle.profile = "Critical";
    created.cycle.status = "active";

    const stored = await cycle.getCycle.execute({
      cycleInstanceId: "cyc:alias",
    });
    expect(stored.ok).toBe(true);
    if (!stored.ok) return;
    expect(stored.cycle.profile).toBe("Standard");
    expect(stored.cycle.status).toBe("acknowledged");

    const traj = await cycle.createInitialTrajectory.execute({
      trajectoryId: "trj:alias",
      projectId: "prj:alias-cyc",
      steps: STEPS_V1,
      status: "active",
      expectedLpsVersion: 1,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    traj.trajectory.steps[0]!.label = "MUTATED";
    const current = await cycle.getCurrentTrajectory.execute({
      projectId: "prj:alias-cyc",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.steps[0]!.label).toBe("Clarify");
  });
});
