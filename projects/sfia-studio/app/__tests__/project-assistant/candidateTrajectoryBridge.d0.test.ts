/** @vitest-environment node */
/**
 * GREENFIELD CURRENT LR → CANDIDATE PROJECT TRAJECTORY BRIDGE — BAR-TRJ-01…24
 * ZERO NEW REAL. D-RB-BOOT-01 / Option B2.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  selectExactCurrentNextCycleRecommendation,
  buildSingleRecommendedCycleStep,
  rebuildBasisRefsForRecommendation,
  deriveLifecycleRecommendationCurrentness,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { isCurrentHumanDecisionStatus } from "@/lib/oa/cycle/application/assessFinalization";

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

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-bridge-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

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
  };
}

function productTurn(
  lr: ReturnType<typeof nextCycleLr>,
  narrative = "Narrative Cadrage recommandée.",
) {
  return {
    narrative,
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`trj-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh bridge ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `TRJ${suffix}`,
    idempotencyKey: `idem:trj-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
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
  const result = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
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
  return result;
}

function expectMaterialized(
  mat: Awaited<ReturnType<typeof materializeFreshNext>>,
) {
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization || !mat.materialization.ok) {
    throw new Error(
      `materialization failed: ${mat.materialization && !mat.materialization.ok ? mat.materialization.code : "null"}`,
    );
  }
  return mat.materialization;
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
  it("BAR-TRJ-01/02/03/04/05/22/23/24 — prepare succeeds with single catalog step, no authority", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsBefore.ok).toBe(true);
    const versionBefore = lpsBefore.ok ? lpsBefore.livingProjectState.version : 0;

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed01",
        newStepId: () => "stp:cadrage-fixed01",
        correlationId: "cor:trj-bridge-01",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.recommendationId).toBe(materialized.item.epistemicItemId);
    expect(prepared.targetCycleTypeId).toBe("cyc:framing");
    expect(prepared.catalogLabel).toBe(getCycleTypeById("cyc:framing")!.label);
    expect(prepared.trajectoryId).toBe("trj:lr-bridge-fixed01");
    expect(prepared.trajectoryVersion).toBe(1);
    expect(prepared.correlationId).toBe("cor:trj-bridge-01");

    const traj = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    expect(traj!.status).toBe("candidate");
    expect(traj!.version).toBe(1);
    expect(traj!.steps).toHaveLength(1);
    expect(traj!.steps[0]!.label).toBe("Cadrage");
    expect(traj!.steps[0]!.state).toBe("pending");
    expect(traj!.steps[0]!.stepId).toBe("stp:cadrage-fixed01");
    expect(traj!.decidedByDecisionRef).toBeUndefined();

    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();

    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);
      expect(lpsAfter.livingProjectState.trajectoryId).toBe(
        "trj:lr-bridge-fixed01",
      );
      expect(lpsAfter.livingProjectState.trajectoryVersion).toBe(1);
      expect(lpsAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
  });

  it("BAR-TRJ-06 — source CURRENT LR becomes STALE after candidate material basis change", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed06",
        newStepId: () => "stp:cadrage-fixed06",
      }),
    });
    expect(prepared.ok).toBe(true);

    const oa = runtime.oa!;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;

    const current = selectCurrentLifecycleRecommendations({
      items: await oa.cycleServices.epistemic.listByProject(projectId),
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: traj,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: traj,
        decisions: [],
        evidence: [],
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");
  });

  it("BAR-TRJ-07 — no CURRENT NEXT_CYCLE refuses without mutation", async () => {
    const { runtime, projectId } = await bootFreshProject("07");
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime),
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-08 — multiple CURRENT NEXT_CYCLE fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("08");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Cadrage A."),
      ),
    );
    // Ambiguity unit: selector refuses >1 CURRENT NEXT_CYCLE without picking by order.
    const envelopes = [
      {
        recommendationId: "epi:lr:a",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:01:00.000Z",
        statement: "A",
        basisFingerprint: "fp-a",
        basisRefs: { projectId },
        semanticKey: "key-a",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
      {
        recommendationId: "epi:lr:b",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:architecture",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:02:00.000Z",
        statement: "B",
        basisFingerprint: "fp-b",
        basisRefs: { projectId },
        semanticKey: "key-b",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
    ];
    const selected = selectExactCurrentNextCycleRecommendation(envelopes);
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE");
    }
  });

  it("BAR-TRJ-09 — non-canonical targetCycleTypeId fail-closed", async () => {
    const step = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "Cadrage",
      stepId: "stp:bad",
    });
    expect(step.ok).toBe(false);
    if (!step.ok) {
      expect(step.code).toMatch(/LR_TARGET_CYCLE_TYPE/);
    }
  });

  it("BAR-TRJ-10/15 — existing candidate refuses second prepare; double invocation ≤1", async () => {
    const { runtime, projectId } = await bootFreshProject("10");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10a",
        newStepId: () => "stp:cadrage-fixed10a",
      }),
    });
    expect(first.ok).toBe(true);

    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10b",
        newStepId: () => "stp:cadrage-fixed10b",
      }),
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(
        second.code === "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT" ||
          second.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    const v2 = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      2,
    );
    expect(v2).toBeNull();
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
  });

  it("BAR-TRJ-11 — CycleInstance present refuses bridge", async () => {
    const { runtime, projectId } = await bootFreshProject("11");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.listCyclesByProject = async () =>
      [
        {
          cycleInstanceId: "cycinst:trj-bridge-11",
          projectId,
          cycleTypeId: "cyc:framing",
          status: "active",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(
        prepared.code === "LR_BOOTSTRAP_CYCLE_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-12 — incompatible current HumanDecision refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    expect(isCurrentHumanDecisionStatus("accepted")).toBe(true);
    const deps = bridgeDeps(runtime);
    deps.listDecisionsByProject = async () =>
      [
        {
          decisionId: "hd:fake-12",
          projectId,
          status: "accepted",
          subject: "trajectory",
          authority: "N2",
          actor: {
            actorId: "actor:pilote",
            role: "project_owner",
            authorityLevel: "N2",
          },
          selectedOptionId: "opt:x",
          effectiveAt: "2026-09-09T20:00:00.000Z",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      // HD either makes LR STALE (basis fingerprint) or fails greenfield eligibility.
      expect(
        prepared.code === "LR_BOOTSTRAP_HD_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-13 — trajectory read UNKNOWN fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("13");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.trajectories = {
      ...deps.trajectories,
      findCurrentByProjectId: async () => {
        throw new Error("boom");
      },
      hasAnyByProjectId: async () => {
        throw new Error("boom");
      },
    };
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_TRAJECTORY_UNKNOWN");
    }
  });

  it("BAR-TRJ-14 — LPS OCC failure leaves no second trajectory", async () => {
    const { runtime, projectId } = await bootFreshProject("14");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime, {
      newTrajectoryId: () => "trj:lr-bridge-occ14",
      newStepId: () => "stp:cadrage-occ14",
    });
    const originalCreate = deps.createInitialTrajectory;
    deps.createInitialTrajectory = {
      execute: async (request) =>
        originalCreate.execute({
          ...request,
          expectedLpsVersion: request.expectedLpsVersion + 99,
        }),
    } as typeof originalCreate;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("LPS_VERSION_CONFLICT");
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    // UoW rollback: no durable candidate row.
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-16 — durable candidate read survives fresh rehydrate", async () => {
    const { runtime, projectId } = await bootFreshProject("16");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed16",
        newStepId: () => "stp:cadrage-fixed16",
      }),
    });
    expect(prepared.ok).toBe(true);

    const read1 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
    });
    expect(read1.ok).toBe(true);
    if (!read1.ok || !read1.candidate) throw new Error("missing candidate");
    expect(read1.candidate.status).toBe("candidate");
    expect(read1.candidate.isEffectiveCurrent).toBe(false);
    expect(read1.candidate.catalogLabel).toBe("Cadrage");
    expect(read1.candidate.steps).toHaveLength(1);

    // Fresh reader path (no React) — second call equals first.
    const read2 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
    });
    expect(read2.ok && read2.candidate?.trajectoryId).toBe(
      read1.candidate.trajectoryId,
    );
  });

  it("BAR-TRJ-17/18/20/21 — CTA bridge wiring + no W2 weaken + no model call (structural)", () => {
    const lifecycleSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(lifecycleSrc).toContain("Préparer la trajectoire");
    expect(lifecycleSrc).toContain(
      "projectAssistantPrepareCandidateTrajectoryAction",
    );
    expect(lifecycleSrc).toContain("preCycleCandidateTrajectoryActions");
    expect(lifecycleSrc).toContain("projectId");
    expect(lifecycleSrc).not.toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[\s\S]*targetCycleTypeId:/,
    );

    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(trajSrc).toContain("Trajectoire proposée");
    expect(trajSrc).toContain("en attente de décision");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");
    expect(trajSrc).toContain("activeCycleInstanceId");
    // Pre-cycle candidate hides W2 propose (gated), does not weaken qualificationInputs.
    const qualSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(qualSrc).toContain("CYCLE_NOT_QUALIFIED");
    expect(qualSrc).toContain("activeCycleInstanceId");

    const bridgeSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
      ),
      "utf8",
    );
    expect(bridgeSrc).not.toMatch(/openai|OpenAI|runNora|Agents/i);
    expect(bridgeSrc).toContain("createInitialTrajectory.execute");
    expect(bridgeSrc).toContain("NORA_LIFECYCLE_RECOMMENDATION_ACTOR");
    expect(bridgeSrc).toContain("deriveLifecycleBlockersFromEpistemicItems");
    expect(bridgeSrc).not.toMatch(
      /blockingReservationStatements:\s*input\.blockingReservationStatements\s*\?\?\s*\[\]/,
    );
  });

  it("BAR-TRJ-19 — W2 proposeTrajectoryOptions module still requires active cycle (regression)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/Aucun cycle qualifié n'est actif/);
  });

  it("BAR-TRJ-25 — blocking Reservation stales LR and bridge refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("25");
    const materialized = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );

    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-blocking-25",
          type: "Reservation",
          statement: "blocking_reservation_trj25",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const oa = runtime.oa!;
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const items = await oa.cycleServices.epistemic.listByProject(projectId);
    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).toContain("blocking_reservation_trj25");

    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
      blockingReservationStatements: blockers.statements,
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: null,
        decisions: [],
        evidence: [],
        blockingReservationStatements: blockers.statements,
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-should-not-25",
        newStepId: () => "stp:should-not-25",
      }),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    }
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
  });

  it("BAR-TRJ-26 — non-blocking Reservation does not stale LR / bridge still succeeds", async () => {
    const { runtime, projectId } = await bootFreshProject("26");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-nonblocking-26",
          type: "Reservation",
          statement: "non_blocking_note_trj26",
          status: "active",
          blocking: false,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).not.toContain("non_blocking_note_trj26");
    expect(blockers.statements).toHaveLength(0);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed26",
        newStepId: () => "stp:cadrage-fixed26",
      }),
    });
    expect(prepared.ok).toBe(true);
  });

  it("BAR-TRJ-29 — W2 active-cycle qualification contract unchanged (structural)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toContain("CYCLE_NOT_QUALIFIED");
    expect(src).toContain("activeCycleInstanceId");
    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    // W2 CTA gated strictly on activeCycleInstanceId truth.
    expect(trajSrc).toMatch(/activeCycleInstanceId \? \(/);
    expect(trajSrc).toContain("hasCurrentNextCycleRecommendation");
  });
});
