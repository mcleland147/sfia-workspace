/** @vitest-environment node */
/**
 * GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — BAR-PROV-01…20
 * ZERO NEW REAL. Option B Epistemic Observation.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
  CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
  buildCandidateTrajectoryProvenanceObservationItem,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  resolveCandidateTrajectoryProvenance,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  deriveLifecycleBlockersFromEpistemicItems,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";

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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-prov-"));
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

function productTurn(lr: ReturnType<typeof nextCycleLr>) {
  return {
    narrative: "Narrative Cadrage recommandée.",
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string, dbPath?: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`prov-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  if (!dbPath) {
    const created = await runtime.createProject({
      name: `Fresh provenance ${suffix}`,
      objective: "gestion de tâches",
      context: "application web personnelle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `PRV${suffix}`,
      idempotencyKey: `idem:prov-${suffix}`,
    });
    if (!created.ok) throw new Error("create failed");
    return { runtime, projectId: created.projectId, productDbPath };
  }
  // reopen existing db — project already exists
  return { runtime, projectId: "", productDbPath };
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
  return materializeLifecycleRecommendationFromStructuredOutput({
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

function recommendationIdOf(
  mat: ReturnType<typeof expectMaterialized>,
): string {
  return mat.item.epistemicItemId;
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
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

async function countAuthority(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
) {
  const oa = runtime.oa!;
  const trajV1 = await oa.cycleServices.trajectories.findByProjectAndVersion(
    projectId,
    1,
  );
  return {
    traj: trajV1 ? 1 : 0,
    hasAnyTraj: await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    epi: (await oa.cycleServices.epistemic.listByProject(projectId)).length,
    cycles: (await oa.cycleServices.cycles.listByProject(projectId)).length,
    hd: (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ec: (await oa.executionContractServices.contracts.listByProject(projectId))
      .length,
  };
}

describe("GREENFIELD CANDIDATE TRAJECTORY DURABLE PROVENANCE — BAR-PROV", () => {
  it("BAR-PROV-01/02/03/15/16/18 — success write + exact relatedObjects + authority", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov01",
        newStepId: () => "stp:cadrage-prov01",
        newProvenanceObservationId: () => "epi:trj-prov-fixed01",
        correlationId: "cor:prov-01",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.provenanceObservationId).toBe("epi:trj-prov-fixed01");
    expect(prepared.trajectoryId).toBe("trj:lr-bridge-prov01");
    expect(prepared.recommendationId).toBe(recommendationIdOf(mat));
    expect(prepared.targetCycleTypeId).toBe("cyc:framing");

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const observations = items.filter(
      (i) =>
        i.type === "Observation" &&
        i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
    );
    expect(observations).toHaveLength(1);
    const obs = observations[0]!;
    expect(obs.status).toBe("active");
    expect(obs.lifecycleRecommendation).toBeUndefined();
    expect(obs.relatedObjects).toEqual([
      projectId,
      recommendationIdOf(mat),
      "trj:lr-bridge-prov01",
    ]);
    expect(obs.statement).not.toContain(recommendationIdOf(mat));
    expect(obs.createdBy.actorId).toBe(
      CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR.actorId,
    );
    expect(obs.createdBy.role).toBe("system");
    expect(obs.createdBy.authorityLevel).toBe("none");

    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: (
        await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          1,
        )
      ),
      decisions: [],
      evidence: [],
      blockingReservationStatements: blockers.ok ? blockers.statements : [],
    });
    expect(
      current.filter(
        (r) => r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
      ),
    ).toHaveLength(0);

    const counts = await countAuthority(runtime, projectId);
    expect(counts.traj).toBe(1);
    expect(counts.cycles).toBe(0);
    expect(counts.hd).toBe(0);
    expect(counts.ec).toBe(0);
  });

  it("BAR-PROV-04/19 — exact restart reconstruction even when LR is STALE", async () => {
    const dbPath = tempDbPath("04.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T20:00:00.000Z",
      idSource: new FixedIdSource("prov-04"),
      auditMode: "noop",
      productDbPath: dbPath,
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "Fresh provenance 04",
      objective: "gestion de tâches",
      context: "application web personnelle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "PRV04",
      idempotencyKey: "idem:prov-04",
    });
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov04",
        newStepId: () => "stp:cadrage-prov04",
        newProvenanceObservationId: () => "epi:trj-prov-fixed04",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    // Close runtime and reopen SAME sqlite — no process memory.
    resetRuntimeApplicationServiceForTests();
    const reopened = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T21:00:00.000Z",
      idSource: new FixedIdSource("prov-04b"),
      auditMode: "noop",
      productDbPath: dbPath,
    });
    if (!reopened.oa) throw new Error("oa missing");

    const items = await reopened.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov04",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("RESOLVED");
    if (resolved.status !== "RESOLVED") return;
    expect(resolved.recommendationId).toBe(recommendationIdOf(mat));
    expect(resolved.semanticKey).toBe(prepared.semanticKey);
    expect(resolved.targetCycleTypeId).toBe("cyc:framing");
    expect(resolved.provenanceObservationId).toBe("epi:trj-prov-fixed04");

    // LR is STALE by currentness but still resolvable by id.
    const lps = await reopened.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    const traj = await reopened.oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [],
      blockingReservationStatements: blockers.ok ? blockers.statements : [],
    });
    expect(current).toHaveLength(0);
  });

  it("BAR-PROV-05 — label is not identity authority", async () => {
    const { runtime, projectId } = await bootFreshProject("05");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov05",
        newStepId: () => "stp:cadrage-prov05",
        newProvenanceObservationId: () => "epi:trj-prov-fixed05",
      }),
    });
    expect(prepared.ok).toBe(true);

    const traj =
      await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
        projectId,
        1,
      );
    expect(traj).toBeTruthy();
    const mutated = structuredClone(traj!);
    mutated.steps = [
      {
        ...mutated.steps[0]!,
        label: "Label Qui Ne Mappe Pas",
      },
    ];
    await runtime.oa!.cycleServices.trajectories.save(mutated);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov05",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("RESOLVED");
    if (resolved.status !== "RESOLVED") return;
    expect(resolved.targetCycleTypeId).toBe("cyc:framing");
    expect(resolved.recommendationId).toBe(recommendationIdOf(mat));

    const read = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read.ok && read.candidate?.targetCycleTypeId).toBe("cyc:framing");
    expect(read.ok && read.candidate?.steps[0]?.label).toBe(
      "Label Qui Ne Mappe Pas",
    );
  });

  it("BAR-PROV-06 — legacy candidate without Observation → MISSING", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok).toBe(true);
    const created = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
      trajectoryId: "trj:legacy-no-prov-06",
      projectId,
      steps: [
        {
          stepId: "stp:cadrage-legacy06",
          order: 1,
          label: "Cadrage",
          state: "pending",
        },
      ],
      status: "candidate",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      expectedLpsVersion: lps.ok ? lps.livingProjectState.version : 1,
      correlationId: "cor:legacy-06",
    });
    expect(created.ok).toBe(true);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:legacy-no-prov-06",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("MISSING");

    const read = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read.ok).toBe(true);
    if (!read.ok || !read.candidate) throw new Error("expected candidate");
    expect(read.candidate.provenanceStatus).toBe("MISSING");
    expect(read.candidate.targetCycleTypeId).toBeNull();
    expect(read.candidate.catalogLabel).toBe("Cadrage");
  });

  it("BAR-PROV-07 — ambiguous duplicate Observations fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("07");
    const mat = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov07",
        newStepId: () => "stp:cadrage-prov07",
        newProvenanceObservationId: () => "epi:trj-prov-fixed07a",
      }),
    });
    expect(prepared.ok).toBe(true);

    const dup = buildCandidateTrajectoryProvenanceObservationItem({
      epistemicItemId: "epi:trj-prov-fixed07b",
      projectId,
      recommendationId: recommendationIdOf(mat),
      trajectoryId: "trj:lr-bridge-prov07",
    });
    const write = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      items: [dup],
      createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
      correlationId: "cor:dup-07",
    });
    expect(write.ok).toBe(true);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId,
      trajectoryId: "trj:lr-bridge-prov07",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("AMBIGUOUS");
  });

  it("BAR-PROV-08 — missing source Recommendation → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-orphan08",
        type: "Observation",
        statement: "orphan",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-08-1",
          "epi:lr:missing-source",
          "trj:lr-bridge-prov08",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-08-1",
      trajectoryId: "trj:lr-bridge-prov08",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_recommendation_absent");
    }
  });

  it("BAR-PROV-09 — wrong source type → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:not-rec-09",
        type: "Observation",
        statement: "not a recommendation",
        status: "active",
        source: "other",
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:prov-09-1"],
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-09",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-09-1",
          "epi:not-rec-09",
          "trj:lr-bridge-prov09",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-09-1",
      trajectoryId: "trj:lr-bridge-prov09",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_not_recommendation");
    }
  });

  it("BAR-PROV-10 — Recommendation without lifecycle payload → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:rec-bare-10",
        type: "Recommendation",
        statement: "bare recommendation",
        status: "active",
        source: "lifecycle-recommendation:nora",
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:prov-10-1"],
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-10",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-10-1",
          "epi:rec-bare-10",
          "trj:lr-bridge-prov10",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-10-1",
      trajectoryId: "trj:lr-bridge-prov10",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe(
        "source_missing_lifecycle_recommendation_payload",
      );
    }
  });

  it("BAR-PROV-11 — project mismatch → INVALID", async () => {
    const items: EpistemicItem[] = [
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:lr:other-project",
        type: "Recommendation",
        statement: "other",
        status: "active",
        source: "lifecycle-recommendation:nora",
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: ["prj:other"],
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE",
          basisFingerprint: "fp",
          basisRefs: {
            projectId: "prj:other",
            subjectCycleInstanceId: null,
            subjectCycleStatus: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:framing",
            lpsActiveCycleInstanceId: null,
            lpsVersion: 1,
            doctrinePackageId: VALID_PIN.doctrinePackageId,
            doctrinePackageVersion: VALID_PIN.version,
            doctrinePackageDigest: VALID_PIN.digest,
            trajectoryId: null,
            trajectoryVersion: null,
            trajectoryStatus: null,
            decisionFingerprint: "none",
            blockerFingerprint: "none",
            reservationBlockingCount: 0,
            finalizeAccepted: null,
            resumeClean: null,
            evidenceFingerprint: null,
          },
          semanticKey: "sem-other",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:framing",
          authority: "none",
        },
      },
      {
        schemaVersion: "0.1.0-oa",
        epistemicItemId: "epi:trj-prov-11",
        type: "Observation",
        statement: "link",
        status: "active",
        source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
        createdBy: CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
        createdAt: "2026-09-09T20:00:00.000Z",
        relatedObjects: [
          "prj:prov-11-1",
          "epi:lr:other-project",
          "trj:lr-bridge-prov11",
        ],
      },
    ];
    const resolved = resolveCandidateTrajectoryProvenance({
      projectId: "prj:prov-11-1",
      trajectoryId: "trj:lr-bridge-prov11",
      epistemicItems: items,
    });
    expect(resolved.status).toBe("INVALID");
    if (resolved.status === "INVALID") {
      expect(resolved.reason).toBe("source_project_mismatch");
    }
  });

  it("BAR-PROV-12 — atomic rollback when provenance write fails after trajectory create", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsBefore.ok).toBe(true);
    const versionBefore = lpsBefore.ok
      ? lpsBefore.livingProjectState.version
      : 0;
    const trajBefore = await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(
      projectId,
    );
    const epiBefore = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).length;

    const store = runtime.oa!.projectServices.store;
    expect(store).toBeInstanceOf(SqliteProductStore);
    (store as SqliteProductStore).failNextSave = "epistemic";

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov12",
        newStepId: () => "stp:cadrage-prov12",
        newProvenanceObservationId: () => "epi:trj-prov-fixed12",
      }),
    });
    expect(prepared.ok).toBe(false);

    const trajAfter = await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(
      projectId,
    );
    const epiAfter = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).length;
    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(trajAfter).toBe(trajBefore);
    expect(epiAfter).toBe(epiBefore);
    expect(lpsAfter.ok && lpsAfter.livingProjectState.version).toBe(
      versionBefore,
    );
    expect(lpsAfter.ok && lpsAfter.livingProjectState.trajectoryId).toBeFalsy();
  });

  it("BAR-PROV-13 — CreateInitialTrajectory failure writes no Observation", async () => {
    const { runtime, projectId } = await bootFreshProject("13");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    // Force invalid trajectory id so create fails before/at persist.
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "not-a-trj-id",
        newStepId: () => "stp:cadrage-prov13",
        newProvenanceObservationId: () => "epi:trj-prov-fixed13",
      }),
    });
    expect(prepared.ok).toBe(false);
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    expect(
      items.filter(
        (i) => i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
      ),
    ).toHaveLength(0);
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-PROV-14 — double invocation ≤1 candidate and ≤1 provenance Observation", async () => {
    const { runtime, projectId } = await bootFreshProject("14");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime, {
      newTrajectoryId: () => "trj:lr-bridge-prov14",
      newStepId: () => "stp:cadrage-prov14",
      newProvenanceObservationId: () => "epi:trj-prov-fixed14",
    });
    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(first.ok).toBe(true);
    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-prov14b",
        newStepId: () => "stp:cadrage-prov14b",
        newProvenanceObservationId: () => "epi:trj-prov-fixed14b",
      }),
    });
    expect(second.ok).toBe(false);
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
    expect(
      (
        await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
      ).filter((i) => i.source === CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE),
    ).toHaveLength(1);
  });

  it("BAR-PROV-17 — server action takes projectId only (structural)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/preCycleCandidateTrajectoryActions.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(
      /projectAssistantPrepareCandidateTrajectoryAction\(input:\s*\{\s*projectId:\s*string;\s*\}\)/,
    );
    expect(src).toContain("runInTransaction");
    expect(src).toContain("updateEpistemicState");
    // Client hostile: prepare call must not pass recommendationId from input.
    expect(src).toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{\s*projectId: input\.projectId,\s*deps:/,
    );
    expect(src).not.toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[^}]*recommendationId:\s*input/,
    );
  });

  it("BAR-PROV-20 — W2 / pre-cycle CTA / bridge regressions remain wired", () => {
    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(trajSrc).toContain("Instruire les options");
    expect(trajSrc).toContain("activeCycleInstanceId");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");

    const lifecycleSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(lifecycleSrc).toContain("Préparer la trajectoire");

    const bridgeSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
      ),
      "utf8",
    );
    expect(bridgeSrc).toContain("CandidateTrajectoryBridgeAtomicFailure");
    expect(bridgeSrc).toContain("resolveCandidateTrajectoryProvenance");
    expect(bridgeSrc).not.toContain("CYCLE_TYPE_CATALOG.entries.filter");
  });
});
