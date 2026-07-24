/**
 * T-A2 adversarial validation — prove defects before fix.
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
  createTestCycleServices,
  type CkcResolution,
  type CkcResolverPort,
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
  projectId: string,
): Promise<void> {
  const created = await projects.createProject.execute({
    projectId,
    title: "Adversarial",
    objective: "Prove T-A2 defects",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId.replace("prj:", "")}-v1`,
  });
  expect(created.ok).toBe(true);
}

function buildCycle(
  projects: ProjectServices,
  ckc?: CkcResolverPort,
): CycleServices & { audit: { events: unknown[] } } {
  return createTestCycleServices({
    projectServices: projects,
    fixedNowIso: "2026-07-24T06:00:00.000Z",
    ckcResolver: ckc as never,
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

describe("adversarial validation", () => {
  describe("B1 TOCTOU steps mutate after validate", () => {
    it("ignores cycle injected after clone-before-validate (no cyclic persist)", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:toctou");
      const cycle = buildCycle(projects);

      const v1 = await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:toctou",
        projectId: "prj:toctou",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      expect(v1.ok).toBe(true);

      const hostile: TrajectoryStep[] = [
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
          dependencies: [],
        },
      ];

      const proposePromise = cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:toctou",
        projectId: "prj:toctou",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: hostile,
        createdBy: ACTOR,
      });

      // Mutate after call starts — pre-fix TOCTOU persisted this cycle;
      // clone-first must ignore it.
      hostile[1]!.dependencies = ["stp:a"];

      const result = await proposePromise;
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.trajectory.steps[1]!.dependencies ?? []).toEqual([]);
      expect(result.trajectory.version).toBe(2);
    });

    it("ignores orphan dep injected after clone-before-validate", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:toctou-orphan");
      const cycle = buildCycle(projects);

      await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:toctou-orphan",
        projectId: "prj:toctou-orphan",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });

      const hostile: TrajectoryStep[] = structuredClone(STEPS_V1);
      const proposePromise = cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:toctou-orphan",
        projectId: "prj:toctou-orphan",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: hostile,
        createdBy: ACTOR,
      });
      hostile[1]!.dependencies = ["stp:ghost-missing"];

      const result = await proposePromise;
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.trajectory.steps[1]!.dependencies).toEqual(["stp:clarify"]);
    });
  });

  describe("B3 orphan and self dependencies", () => {
    it("rejects dependency pointing to non-existent stepId", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:orphan-dep");
      const cycle = buildCycle(projects);
      const result = await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:orphan",
        projectId: "prj:orphan-dep",
        steps: [
          {
            stepId: "stp:only",
            order: 1,
            label: "Only",
            state: "pending",
            dependencies: ["stp:does-not-exist"],
          },
        ],
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
      expect(result.error.internalCauseRef).toBe("orphan_dependency");
    });

    it("rejects self-dependency", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:self-dep");
      const cycle = buildCycle(projects);
      const result = await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:self",
        projectId: "prj:self-dep",
        steps: [
          {
            stepId: "stp:loop",
            order: 1,
            label: "Loop",
            state: "pending",
            dependencies: ["stp:loop"],
          },
        ],
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
      expect(
        result.error.internalCauseRef === "self_dependency" ||
          result.error.internalCauseRef === "cyclic_dependencies",
      ).toBe(true);
    });
  });

  describe("B4 ProposeTrajectoryVersion status", () => {
    it("refuses stale status that would orphan current pointer", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:stale-status");
      const cycle = buildCycle(projects);
      await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:stale",
        projectId: "prj:stale-status",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });

      const result = await cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:stale",
        projectId: "prj:stale-status",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: STEPS_V1,
        status: "stale",
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
      expect(result.error.internalCauseRef).toBe(
        "propose_status_not_currentable",
      );

      const current = await cycle.getCurrentTrajectory.execute({
        projectId: "prj:stale-status",
      });
      expect(current.ok).toBe(true);
      if (!current.ok) return;
      expect(current.trajectory.version).toBe(1);
      expect(current.trajectory.status).toBe("candidate");
    });

    it("refuses superseded status on propose", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:superseded-status");
      const cycle = buildCycle(projects);
      await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:sup",
        projectId: "prj:superseded-status",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });

      const result = await cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:sup",
        projectId: "prj:superseded-status",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: STEPS_V1,
        status: "superseded",
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("TRAJECTORY_INVALID");
    });

    it("allows candidate|validated|active on propose", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:ok-status");
      const cycle = buildCycle(projects);
      await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:ok",
        projectId: "prj:ok-status",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      const validated = await cycle.proposeTrajectoryVersion.execute({
        trajectoryId: "trj:ok",
        projectId: "prj:ok-status",
        expectedVersion: 1,
        expectedLpsVersion: 2,
        steps: STEPS_V1,
        status: "validated",
        createdBy: ACTOR,
      });
      expect(validated.ok).toBe(true);
      if (!validated.ok) return;
      expect(validated.trajectory.status).toBe("validated");
    });
  });

  describe("Hostile CKC", () => {
    it("returns CKC_UNAVAILABLE when resolver grants executionAuthority", async () => {
      const projects = buildProjectServices();
      const hostile: CkcResolverPort = {
        async resolve(input): Promise<CkcResolution> {
          return {
            schemaVersion: "0.1.0-oa",
            ckcResolutionId: "ckc:hostile",
            cycleTypeId: input.cycleTypeId,
            level: "detailed",
            status: "resolved",
            resolvedAt: input.resolvedAt,
            fallbackPolicy: "intra_v3_only",
            // Hostile — must never pass through
            executionAuthority: true as unknown as false,
          };
        },
      };
      const cycle = buildCycle(projects, hostile);
      const result = await cycle.resolveCycleKnowledgeContract.execute({
        cycleTypeId: "cyc:delivery",
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("CKC_UNAVAILABLE");
      expect(result.error.internalCauseRef).toBe(
        "execution_authority_forbidden",
      );
    });

    it("returns CKC_UNAVAILABLE for invalid fallbackPolicy", async () => {
      const projects = buildProjectServices();
      const hostile: CkcResolverPort = {
        async resolve(input): Promise<CkcResolution> {
          return {
            schemaVersion: "0.1.0-oa",
            ckcResolutionId: "ckc:bad-fallback",
            cycleTypeId: input.cycleTypeId,
            level: "absent",
            status: "unavailable",
            resolvedAt: input.resolvedAt,
            fallbackPolicy: "v2_6_legacy" as "intra_v3_only",
            executionAuthority: false,
          };
        },
      };
      const cycle = buildCycle(projects, hostile);
      const result = await cycle.resolveCycleKnowledgeContract.execute({
        cycleTypeId: "cyc:delivery",
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("CKC_UNAVAILABLE");
      expect(result.error.internalCauseRef).toBe("fallback_policy_invalid");
    });
  });

  describe("Qualification edges", () => {
    it("Critical wins when lowRiskBounded and critical signal both set", async () => {
      const projects = buildProjectServices();
      const cycle = buildCycle(projects);
      const result = await cycle.qualifyCycle.execute({
        signals: { lowRiskBounded: true, structuralChange: true },
      });
      expect(result.recommendation.recommendedProfile).toBe("Critical");
      expect(result.recommendation.isMorrisDecision).toBe(false);
    });

    it("requestedProfile Light without lowRiskBounded yields Standard", async () => {
      const projects = buildProjectServices();
      const cycle = buildCycle(projects);
      const result = await cycle.qualifyCycle.execute({
        signals: {},
        requestedProfile: "Light",
      });
      expect(result.recommendation.recommendedProfile).toBe("Standard");
    });

    it("Create refuses requested Critical without signals and empty justification", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:crit-req");
      const cycle = buildCycle(projects);
      const result = await cycle.createCycle.execute({
        cycleInstanceId: "cyc:crit-req",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:crit-req",
        signals: {},
        requestedProfile: "Critical",
        justification: "",
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe(
        "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED",
      );
    });

    it("Capitalization cycleTypeId keeps profile from signals not Capitalization enum", async () => {
      const projects = buildProjectServices();
      const cycle = buildCycle(projects);
      const result = await cycle.qualifyCycle.execute({
        signals: { lowRiskBounded: true },
        cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
      });
      expect(result.recommendation.recommendedProfile).toBe("Light");
      expect(result.recommendation.capitalizationViaCycleTypeId).toBe(true);
      expect(
        (result.recommendation.recommendedProfile as string) ===
          "Capitalization",
      ).toBe(false);
    });
  });

  describe("failNextSave rollback", () => {
    it("rolls back cycle save failure with PERSISTENCE_FAILURE", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:fail-cyc");
      const cycle = buildCycle(projects);
      cycle.store.failNextSave = "cycle";
      const result = await cycle.createCycle.execute({
        cycleInstanceId: "cyc:fail",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:fail-cyc",
        signals: {},
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
      const got = await cycle.getCycle.execute({
        cycleInstanceId: "cyc:fail",
      });
      expect(got.ok).toBe(false);
    });

    it("rolls back trajectory save failure with no partial state", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:fail-trj");
      const cycle = buildCycle(projects);
      cycle.store.failNextSave = "trajectory";
      const result = await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:fail",
        projectId: "prj:fail-trj",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
      const current = await cycle.getCurrentTrajectory.execute({
        projectId: "prj:fail-trj",
      });
      expect(current.ok).toBe(false);
    });

    it("rolls back epistemic save failure with PERSISTENCE_FAILURE", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:fail-epi");
      const cycle = buildCycle(projects);
      cycle.store.failNextSave = "epistemic";
      const result = await cycle.updateEpistemicState.execute({
        projectId: "prj:fail-epi",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:fail-1",
            type: "Hypothesis",
            statement: "Should not persist",
          },
        ],
      });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
      const state = await cycle.getEpistemicState.execute({
        projectId: "prj:fail-epi",
      });
      expect(state.ok).toBe(true);
      if (!state.ok) return;
      expect(state.state.items).toHaveLength(0);
    });
  });

  describe("Immutability", () => {
    it("mutating returned epistemic does not mutate store", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:immut-epi");
      const cycle = buildCycle(projects);
      const updated = await cycle.updateEpistemicState.execute({
        projectId: "prj:immut-epi",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:immut",
            type: "Hypothesis",
            statement: "Original",
          },
        ],
      });
      expect(updated.ok).toBe(true);
      if (!updated.ok) return;
      updated.state.items[0]!.statement = "MUTATED";
      updated.state.items[0]!.type = "DecisionRef";

      const stored = await cycle.getEpistemicState.execute({
        projectId: "prj:immut-epi",
      });
      expect(stored.ok).toBe(true);
      if (!stored.ok) return;
      expect(stored.state.items[0]!.statement).toBe("Original");
      expect(stored.state.items[0]!.type).toBe("Hypothesis");
    });
  });

  describe("Concurrent propose", () => {
    it("one success and one TRAJECTORY_VERSION_CONFLICT for same expectedVersion", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:adv-race");
      const cycle = buildCycle(projects);
      await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:adv-race",
        projectId: "prj:adv-race",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });

      const [a, b] = await Promise.all([
        cycle.proposeTrajectoryVersion.execute({
          trajectoryId: "trj:adv-race",
          projectId: "prj:adv-race",
          expectedVersion: 1,
          expectedLpsVersion: 2,
          steps: [
            ...STEPS_V1,
            { stepId: "stp:a", order: 3, label: "A", state: "pending" },
          ],
          createdBy: ACTOR,
        }),
        cycle.proposeTrajectoryVersion.execute({
          trajectoryId: "trj:adv-race",
          projectId: "prj:adv-race",
          expectedVersion: 1,
          expectedLpsVersion: 2,
          steps: [
            ...STEPS_V1,
            { stepId: "stp:b", order: 3, label: "B", state: "pending" },
          ],
          createdBy: ACTOR,
        }),
      ]);

      const oks = [a, b].filter((r) => r.ok);
      const fails = [a, b].filter((r) => !r.ok);
      expect(oks).toHaveLength(1);
      expect(fails).toHaveLength(1);
      if (fails[0]?.ok === false) {
        expect(fails[0].error.detailCode).toBe("TRAJECTORY_VERSION_CONFLICT");
      }
    });
  });

  describe("Critical stays proposed", () => {
    it("never auto-acks Critical and never sets isMorrisDecision", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:crit-stay");
      const cycle = buildCycle(projects);
      const result = await cycle.createCycle.execute({
        cycleInstanceId: "cyc:crit-stay",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:crit-stay",
        signals: { dataImpact: true },
        justification: "Data migration irreversible window",
        createdBy: ACTOR,
      });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.cycle.status).toBe("proposed");
      expect(result.cycle.acknowledgedAt).toBeUndefined();
      expect(result.qualification.isMorrisDecision).toBe(false);
    });
  });

  describe("Epistemic promotion holes", () => {
    it("forbids Hypothesis→DecisionRef via same-id type overwrite", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:epi-overwrite");
      const cycle = buildCycle(projects);
      const hyp = await cycle.updateEpistemicState.execute({
        projectId: "prj:epi-overwrite",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:same",
            type: "Hypothesis",
            statement: "Maybe Light",
          },
        ],
      });
      expect(hyp.ok).toBe(true);

      const promoted = await cycle.updateEpistemicState.execute({
        projectId: "prj:epi-overwrite",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:same",
            type: "DecisionRef",
            statement: "Decide Light",
          },
        ],
      });
      expect(promoted.ok).toBe(false);
      if (promoted.ok) return;
      expect(promoted.error.detailCode).toBe("EPISTEMIC_PROMOTION_FORBIDDEN");

      const stored = await cycle.getEpistemicState.execute({
        projectId: "prj:epi-overwrite",
      });
      expect(stored.ok).toBe(true);
      if (!stored.ok) return;
      expect(stored.state.items).toHaveLength(1);
      expect(stored.state.items[0]!.type).toBe("Hypothesis");
    });

    it("forbids Observation→DecisionRef via same-id type overwrite", async () => {
      const projects = buildProjectServices();
      await seedProject(projects, "prj:epi-obs-dec");
      const cycle = buildCycle(projects);
      await cycle.updateEpistemicState.execute({
        projectId: "prj:epi-obs-dec",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:obs-dec",
            type: "Observation",
            statement: "Observed need",
            source: "interview",
          },
        ],
      });

      const promoted = await cycle.updateEpistemicState.execute({
        projectId: "prj:epi-obs-dec",
        createdBy: ACTOR,
        items: [
          {
            epistemicItemId: "epi:obs-dec",
            type: "DecisionRef",
            statement: "Decide from observation",
          },
        ],
      });
      expect(promoted.ok).toBe(false);
      if (promoted.ok) return;
      expect(promoted.error.detailCode).toBe("EPISTEMIC_PROMOTION_FORBIDDEN");
    });
  });

  describe("B5 LPS carry-forward reserve probe", () => {
    it("documents that T-A2 trajectory link does not invent reservationIds API", async () => {
      // T-A1 append does not accept/carry reservationIds in request overlay.
      // If LPS ever had reservationIds, carry-forward is T-A1 core debt (OPEN RESERVE).
      // This probe only asserts T-A2 linkage still sets trajectory fields.
      const projects = buildProjectServices();
      await seedProject(projects, "prj:lps-carry");
      const cycle = buildCycle(projects);
      const created = await cycle.createInitialTrajectory.execute({
        trajectoryId: "trj:lps-carry",
        projectId: "prj:lps-carry",
        steps: STEPS_V1,
        expectedLpsVersion: 1,
        createdBy: ACTOR,
      });
      expect(created.ok).toBe(true);
      const lps = await projects.getCurrentLivingProjectState.execute({
        projectId: "prj:lps-carry",
      });
      expect(lps.ok).toBe(true);
      if (!lps.ok) return;
      expect(lps.livingProjectState.trajectoryId).toBe("trj:lps-carry");
      expect(lps.livingProjectState.trajectoryVersion).toBe(1);
      // reservationIds remain undefined unless T-A1 seeds them — not T-A2 inventable.
      expect(lps.livingProjectState.reservationIds).toBeUndefined();
    });
  });
});
