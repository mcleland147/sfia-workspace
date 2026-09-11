/**
 * Lifecycle Closure Phase B — Critical Review Follow-up (CR-LC-B-01/02/03).
 * ZERO REAL — Memory OA / temp Product SQLite only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  createSqliteCycleServices,
  projectPilotLifecycle,
  selectLatestTerminalCycle,
  validateLifecycleRecommendation,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  type CycleInstance,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
} from "@/lib/oa/decision";
import { completeBoundTrajectoryStepAction } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

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
const PILOTE = {
  actorId: LOCAL_PILOTE_ACTOR.actorId,
  role: LOCAL_PILOTE_ACTOR.role,
  displayName: LOCAL_PILOTE_ACTOR.displayName,
  authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
};
const STEPS_ACTIVE: TrajectoryStep[] = [
  {
    stepId: "stp:cadrage",
    order: 1,
    label: "Cadrage",
    cycleTypeId: "cyc:framing",
    state: "active",
  },
];
const SIGNALS = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  while (openServices.length > 0) openServices.pop()?.dispose();
  for (const d of tempDirs.splice(0)) {
    try {
      fs.rmSync(d, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cr-lcb-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function authorityAdapter(authority: MemoryAuthorityResolver) {
  return {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-10T20:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-10T20:00:00.000Z");
  let decisions!: DecisionServices;
  const cycles = createSqliteCycleServices({
    projectServices: project,
    productStore: project.store,
    clock,
    decisions: {
      getById: (id) => decisions.decisions.findById(id),
      listByProject: (pid) => decisions.decisions.listByProject(pid),
    },
    authority: authorityAdapter(authority),
  });
  decisions = createSqliteDecisionServices({
    projectServices: project,
    cycleServices: cycles,
    productStore: project.store,
    clock,
    authorityResolver: authority,
  });
  return { project, cycles, decisions, authority };
}

async function registerPilotAuth(
  authority: MemoryAuthorityResolver,
  cycleId: string,
): Promise<string> {
  const auth = registerLocalPiloteAuthority({
    authorityResolver: authority,
    scope: `pilot-lifecycle:${cycleId}`,
    issuedAt: "2026-09-10T20:00:00.000Z",
    forceEnable: true,
  });
  if (!auth.ok) throw new Error(auth.message);
  return auth.evidenceId;
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "CR-LCB",
    objective: "critical-review-follow-up",
    context: "cr-lcb",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  if (!created.ok) throw new Error(JSON.stringify(created));
}

async function seedTrajectory(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
  if (!lps.ok) throw new Error("lps");
  const created = await cycles.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: STEPS_ACTIVE,
    status: "active",
    expectedLpsVersion: lps.livingProjectState.version,
    createdBy: ACTOR,
  });
  if (!created.ok) throw new Error(JSON.stringify(created));
}

async function createAndStart(
  stack: ReturnType<typeof buildStack>,
  projectId: string,
  cycleId: string,
) {
  await seedProject(stack.project, projectId);
  await seedTrajectory(stack.cycles, stack.project, projectId);
  const created = await stack.cycles.createCycle.execute({
    cycleInstanceId: cycleId,
    cycleTypeId: "cyc:framing",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    linkAsActiveCycle: false,
  });
  if (!created.ok) throw new Error(JSON.stringify(created));
  const ev = await registerPilotAuth(stack.authority, cycleId);
  const started = await stack.cycles.pilotLifecycle.start({
    cycleInstanceId: cycleId,
    projectId,
    createdBy: PILOTE,
    authorityEvidenceId: ev,
  });
  if (!started.ok) throw new Error(JSON.stringify(started));
  // Bind trajectory after START so completeBoundActiveTrajectoryStep can close the step
  // without requiring the full CKC-bound START path.
  const cycle = await stack.cycles.cycles.findById(cycleId);
  if (!cycle) throw new Error("cycle missing");
  await stack.cycles.cycles.save({
    ...cycle,
    trajectoryId: `trj:${projectId}`,
    trajectoryVersion: 1,
    trajectoryStepId: "stp:cadrage",
  });
  const traj = await stack.cycles.trajectories.findCurrentByProjectId(projectId);
  if (!traj) throw new Error("trajectory missing");
  const stepIdx = traj.steps.findIndex((s) => s.stepId === "stp:cadrage");
  if (stepIdx < 0) throw new Error("step missing");
  if (traj.steps[stepIdx]!.state !== "active") {
    const nextSteps = traj.steps.map((s, i) =>
      i === stepIdx ? { ...s, state: "active" as const } : s,
    );
    await stack.cycles.trajectories.save({ ...traj, steps: nextSteps });
  }
  return ev;
}

function cycleStub(
  partial: Partial<CycleInstance> &
    Pick<CycleInstance, "cycleInstanceId" | "projectId" | "status">,
): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleTypeId: "cyc:framing",
    profile: "Light",
    createdAt: "2026-09-10T20:00:00.000Z",
    ...partial,
  };
}

function nextCandidate(targetCycleTypeId: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement: "Envisager le prochain cycle.",
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: null,
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: { ...SIGNALS },
  };
}

function nextEnvelope(
  projectId: string,
): LifecycleRecommendationEnvelope {
  return {
    recommendationId: "epi:lr-next",
    projectId,
    intent: "NEXT_CYCLE",
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId: "cyc:delivery",
    producer: "nora",
    producedAt: "2026-09-10T21:00:00.000Z",
    statement: "Envisager delivery.",
    basisFingerprint: "fp:next",
    basisRefs: { projectId, targetCycleTypeId: "cyc:delivery" },
    semanticKey: "sk:next",
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: "active",
    supersedesRecommendationId: null,
    derivedCurrentness: "CURRENT",
  };
}

describe("CR-LC-B-01 — terminal completed projection", () => {
  it("CR-B01-01 — completed + cleared LPS → Terminé · completed, not empty", () => {
    const completed = cycleStub({
      cycleInstanceId: "cyc:done",
      projectId: "prj:b01",
      status: "completed",
      closedAt: "2026-09-10T20:30:00.000Z",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [completed],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:done");
    expect(projection.selectedStatus).toBe("completed");
    const badge = lifecycleStatusBadge(projection);
    expect(badge.status).toBe("completed_next");
    expect(badge.label).toBe("Terminé");
  });

  it("CR-B01-02 — completed exposes ZERO lifecycle mutation CTA", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:done",
          projectId: "prj:b01",
          status: "completed",
          closedAt: "2026-09-10T20:30:00.000Z",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.cta.canStart).toBe(false);
    expect(projection.cta.canPause).toBe(false);
    expect(projection.cta.canResume).toBe(false);
    expect(projection.cta.canFinalize).toBe(false);
    expect(projection.cta.canCancel).toBe(false);
    const cta = lifecycleCtaPresentation(projection);
    expect(cta.showStart).toBe(false);
    expect(cta.showResume).toBe(false);
    expect(cta.showAssess).toBe(false);
    expect(cta.showFinalizePrimary).toBe(false);
    expect(cta.showFinalizeSecondary).toBe(false);
    expect(cta.finalizeEnabled).toBe(false);
    expect(cta.showGroupedObligationPolicy).toBe(false);
  });

  it("CR-B01-03 — hard-reload equivalent projection is identical", () => {
    const cycles = [
      cycleStub({
        cycleInstanceId: "cyc:done",
        projectId: "prj:b01",
        status: "completed",
        closedAt: "2026-09-10T20:30:00.000Z",
      }),
    ];
    const a = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles,
      lpsActiveCycleInstanceId: null,
    });
    const b = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles,
      lpsActiveCycleInstanceId: null,
    });
    expect(a.selectedCycleInstanceId).toBe(b.selectedCycleInstanceId);
    expect(a.selectedStatus).toBe(b.selectedStatus);
    expect(lifecycleStatusBadge(a)).toEqual(lifecycleStatusBadge(b));
  });

  it("CR-B01-04 — latest terminal by closedAt is deterministic", () => {
    const older = cycleStub({
      cycleInstanceId: "cyc:old",
      projectId: "prj:b01",
      status: "completed",
      closedAt: "2026-09-10T19:00:00.000Z",
    });
    const newer = cycleStub({
      cycleInstanceId: "cyc:new",
      projectId: "prj:b01",
      status: "completed",
      closedAt: "2026-09-10T21:00:00.000Z",
    });
    expect(selectLatestTerminalCycle([older, newer])?.cycleInstanceId).toBe(
      "cyc:new",
    );
    expect(selectLatestTerminalCycle([newer, older])?.cycleInstanceId).toBe(
      "cyc:new",
    );
    const projection = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [older, newer],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:new");
  });

  it("CR-B01-05 — active/candidate takes precedence over terminal", () => {
    const done = cycleStub({
      cycleInstanceId: "cyc:done",
      projectId: "prj:b01",
      status: "completed",
      closedAt: "2026-09-10T20:00:00.000Z",
    });
    const active = cycleStub({
      cycleInstanceId: "cyc:active",
      projectId: "prj:b01",
      status: "active",
    });
    const withActive = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [done, active],
      lpsActiveCycleInstanceId: "cyc:active",
    });
    expect(withActive.selectedCycleInstanceId).toBe("cyc:active");
    expect(withActive.selectedStatus).toBe("active");

    const candidate = cycleStub({
      cycleInstanceId: "cyc:cand",
      projectId: "prj:b01",
      status: "acknowledged",
    });
    const withCand = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [done, candidate],
      lpsActiveCycleInstanceId: null,
    });
    expect(withCand.selectedCycleInstanceId).toBe("cyc:cand");
    expect(withCand.selectedStatus).toBe("acknowledged");
  });

  it("CR-B01-06 — NEXT_CYCLE Recommendation visible without activating terminal", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:b01",
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:done",
          projectId: "prj:b01",
          status: "completed",
          closedAt: "2026-09-10T20:30:00.000Z",
        }),
      ],
      lpsActiveCycleInstanceId: null,
      currentRecommendations: [nextEnvelope("prj:b01")],
    });
    expect(projection.selectedStatus).toBe("completed");
    expect(projection.activeCycle).toBeNull();
    const cta = lifecycleCtaPresentation(projection);
    expect(cta.showTrajectoryEscalation).toBe(true);
    expect(cta.showStart).toBe(false);
    expect(cta.finalizeEnabled).toBe(false);
  });
});

describe("CR-LC-B-02 — authority at trajectory-step mutation boundary", () => {
  it("CR-B02-01/02 — direct call without evidence → DENIED, step stays active", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("b02-deny.sqlite"));
    await createAndStart(stack, "prj:b02a", "cyc:b02a");
    const denied =
      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
        projectId: "prj:b02a",
        cycleInstanceId: "cyc:b02a",
        createdBy: PILOTE,
        // no authorityEvidenceId
      });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.detailCode).toBe("CYCLE_LIFECYCLE_DENIED");

    const traj = await stack.cycles.trajectories.findCurrentByProjectId(
      "prj:b02a",
    );
    const step = traj?.steps.find((s) => s.stepId === "stp:cadrage");
    expect(step?.state).toBe("active");
  });

  it("CR-B02-03 — wrong-scope evidence → DENIED + no mutation", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("b02-scope.sqlite"));
    await createAndStart(stack, "prj:b02b", "cyc:b02b");
    const wrong = await registerPilotAuth(stack.authority, "cyc:other");
    const denied =
      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
        projectId: "prj:b02b",
        cycleInstanceId: "cyc:b02b",
        createdBy: PILOTE,
        authorityEvidenceId: wrong,
      });
    expect(denied.ok).toBe(false);
    const traj = await stack.cycles.trajectories.findCurrentByProjectId(
      "prj:b02b",
    );
    expect(traj?.steps.find((s) => s.stepId === "stp:cadrage")?.state).toBe(
      "active",
    );
  });

  it("CR-B02-04 — valid Pilot evidence → active→done", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("b02-ok.sqlite"));
    const ev = await createAndStart(stack, "prj:b02c", "cyc:b02c");
    const ok =
      await stack.cycles.pilotLifecycle.completeBoundActiveTrajectoryStep({
        projectId: "prj:b02c",
        cycleInstanceId: "cyc:b02c",
        createdBy: PILOTE,
        authorityEvidenceId: ev,
      });
    expect(ok.ok).toBe(true);
    if (!ok.ok) {
      throw new Error(JSON.stringify(ok));
    }
    expect(ok.stepId).toBe("stp:cadrage");
    const step = ok.trajectory.steps.find((s) => s.stepId === "stp:cadrage");
    expect(step?.state).toBe("done");
  });

  it("CR-B02-05 — Product wrapper passes evidence; exit path still works", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("b02-wrap.sqlite"));
    await createAndStart(stack, "prj:b02d", "cyc:b02d");
    const closed = await completeBoundTrajectoryStepAction({
      projectId: "prj:b02d",
      cycleInstanceId: "cyc:b02d",
      cycleServices: stack.cycles,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(closed.ok).toBe(true);
    if (!closed.ok) return;
    expect(closed.assessment.blockers).not.toContain("exit_criteria_open");
  });
});

describe("CR-LC-B-03 — D-LC-04 deterministic NEXT_CYCLE gate", () => {
  it("CR-B03-01 — active + NEXT_CYCLE by type → LR_CURRENT_CYCLE_NOT_CLOSED", () => {
    const result = validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: nextCandidate("cyc:delivery"),
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:cur",
          projectId: "prj:b03",
          status: "active",
        }),
      ],
      lpsActiveCycleInstanceId: "cyc:cur",
      hasTrajectoryContext: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
    expect(result.reason).toBe("next_cycle_requires_current_cycle_completion");
  });

  it("CR-B03-02 — active + NEXT_CYCLE by instance → reject", () => {
    const result = validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: {
        ...nextCandidate("cyc:delivery"),
        targetCycleTypeId: null,
        targetCycleInstanceId: "cyc:next-cand",
      },
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:cur",
          projectId: "prj:b03",
          status: "active",
        }),
        cycleStub({
          cycleInstanceId: "cyc:next-cand",
          projectId: "prj:b03",
          status: "acknowledged",
        }),
      ],
      lpsActiveCycleInstanceId: "cyc:cur",
      hasTrajectoryContext: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
  });

  it("CR-B03-03 — paused / blocked current → reject", () => {
    for (const status of ["paused", "blocked"] as const) {
      const result = validateLifecycleRecommendation({
        projectId: "prj:b03",
        candidate: nextCandidate("cyc:delivery"),
        cycles: [
          cycleStub({
            cycleInstanceId: `cyc:${status}`,
            projectId: "prj:b03",
            status,
          }),
        ],
        lpsActiveCycleInstanceId: `cyc:${status}`,
        hasTrajectoryContext: true,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.code).toBe("LR_CURRENT_CYCLE_NOT_CLOSED");
      }
    }
  });

  it("CR-B03-04 — completed current + cleared LPS + NEXT_CYCLE → accept", () => {
    const result = validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: nextCandidate("cyc:delivery"),
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:done",
          projectId: "prj:b03",
          status: "completed",
          closedAt: "2026-09-10T20:00:00.000Z",
        }),
      ],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(result.ok).toBe(true);
  });

  it("CR-B03-05 — no current cycle + valid NEXT_CYCLE → accept", () => {
    const result = validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: nextCandidate("cyc:framing"),
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(result.ok).toBe(true);
  });

  it("CR-B03-06 — FINALIZE_CURRENT_CYCLE still passes for non-terminal", () => {
    const result = validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Envisager la finalisation.",
        subjectCycleInstanceId: "cyc:cur",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        qualificationSignals: null,
      },
      cycles: [
        cycleStub({
          cycleInstanceId: "cyc:cur",
          projectId: "prj:b03",
          status: "active",
        }),
      ],
      lpsActiveCycleInstanceId: "cyc:cur",
    });
    expect(result.ok).toBe(true);
  });

  it("CR-B03-07 — validator produces no HD / no mutation (pure function)", () => {
    const cycles = [
      cycleStub({
        cycleInstanceId: "cyc:cur",
        projectId: "prj:b03",
        status: "active",
      }),
    ];
    const before = JSON.stringify(cycles);
    validateLifecycleRecommendation({
      projectId: "prj:b03",
      candidate: nextCandidate("cyc:delivery"),
      cycles,
      lpsActiveCycleInstanceId: "cyc:cur",
      hasTrajectoryContext: true,
    });
    expect(JSON.stringify(cycles)).toBe(before);
  });
});
