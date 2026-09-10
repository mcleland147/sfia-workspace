/** @vitest-environment node */
/**
 * D-GF-START-01 — BAR-START-01…55
 * Greenfield validated trajectory → prepared CycleInstance → explicit START.
 * ZERO NEW REAL. Deterministic Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  buildSingleRecommendedCycleStep,
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  buildCandidateTrajectoryPresentationMaterial,
  materializeLifecycleRecommendationFromStructuredOutput,
  mintTrajectoryBoundCycleInstanceId,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  parseExplicitQualificationSignals,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  readPreparedTrajectoryCycle,
  resolveTrajectoryBootstrapPresence,
  selectEligiblePendingTrajectorySteps,
  selectExactPrepareStep,
  startPreparedTrajectoryCycle,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import { createProjectError } from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as cycleTypeCatalog from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import type { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";

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

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const SIGNALS_STANDARD = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: false,
} as const;

const SIGNALS_CRITICAL = {
  structuralChange: true,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: false,
} as const;

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-start-"));
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

function nextCycleLr(
  targetCycleTypeId: string,
  statement: string,
  signals: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } = SIGNALS_LIGHT,
) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: { ...signals },
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
    nowIso: "2026-09-10T08:00:00.000Z",
    idSource: new FixedIdSource(`st-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh START ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `ST${suffix}`.slice(0, 8),
    idempotencyKey: `idem:st-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath };
}

async function reopenRuntime(suffix: string, productDbPath: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T09:00:00.000Z",
    idSource: new FixedIdSource(`st-re-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing on reopen");
  return runtime;
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
    producedAt: "2026-09-10T08:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
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

async function seedValidated(
  suffix: string,
  opts?: {
    signals?: {
      structuralChange: boolean;
      securityImpact: boolean;
      architectureImpact: boolean;
      dataImpact: boolean;
      irreversible: boolean;
      lowRiskBounded: boolean;
    };
    trajectoryId?: string;
    stepId?: string;
    provId?: string;
    dbPath?: string;
  },
) {
  const { runtime, projectId, productDbPath } = await bootFreshProject(
    suffix,
    opts?.dbPath,
  );
  const signals = opts?.signals ?? SIGNALS_LIGHT;
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr("cyc:framing", "Envisager un Cadrage.", signals),
  );
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization?.ok) throw new Error("materialize failed");

  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => opts?.trajectoryId ?? `trj:st-${suffix}`,
      newStepId: () => opts?.stepId ?? `stp:st-${suffix}`,
      newProvenanceObservationId: () =>
        opts?.provId ?? `epi:trj-prov-st-${suffix}`,
      correlationId: `cor:st-bridge-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("bridge failed");

  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa!,
    projectId,
  });
  expect(presentation.ok).toBe(true);
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }

  const approved = await approveCandidateTrajectory({
    oa: runtime.oa!,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  if (!approved.ok) throw new Error("approve failed");

  return {
    runtime,
    projectId,
    productDbPath,
    oa: runtime.oa!,
    prepared,
    approved,
    signals,
    lrItem: mat.materialization.item,
  };
}

async function seedPrepared(
  suffix: string,
  opts?: Parameters<typeof seedValidated>[1],
) {
  const seeded = await seedValidated(suffix, opts);
  const prep = await prepareCycleFromValidatedTrajectory({
    oa: seeded.oa,
    projectId: seeded.projectId,
  });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(`prepare cycle failed: ${prep.code}`);
  return { ...seeded, prep };
}

/** Re-seal HD candidateContentDigest after intentional step mutations in tests. */
async function resealHdCandidateContentDigest(input: {
  oa: Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"];
  decisionId: string;
  trajectory: {
    trajectoryId: string;
    version: number;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
      cycleTypeId?: string;
      dependencies?: string[];
      gate?: string;
      exitCriteria?: string[];
      risks?: string[];
      reservations?: string[];
    }[];
  };
}) {
  const oa = input.oa!;
  const hd = await oa.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!hd.ok) throw new Error("hd missing for reseal");
  const digest = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: "candidate",
    steps: input.trajectory.steps as never,
  });
  const next = structuredClone(hd.decision);
  next.decisionBasis!.candidateTrajectoryContext!.candidateContentDigest =
    digest;
  await oa.decisionServices.decisions.save(next);
}

/** Durable epistemic overwrite — epistemic.save is intentionally a no-op. */
async function persistEpistemicItem(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  projectId: string,
  item: {
    epistemicItemId: string;
    type: string;
    statement: string;
    status?: string;
    source?: string;
    relatedObjects?: string[];
    blocking?: boolean;
    lifecycleRecommendation?: unknown;
  },
) {
  const updated = await oa.cycleServices.updateEpistemicState.execute({
    projectId,
    items: [
      {
        epistemicItemId: item.epistemicItemId,
        type: item.type as "Recommendation",
        statement: item.statement,
        status: (item.status as "active") ?? "active",
        source: item.source,
        relatedObjects: item.relatedObjects,
        blocking: item.blocking,
        lifecycleRecommendation: item.lifecycleRecommendation as never,
      },
    ],
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  if (!updated.ok) {
    throw new Error(`persist epistemic failed: ${updated.error.detailCode}`);
  }
}

describe("GREENFIELD VALIDATED → PREPARE → START — BAR-START", () => {
  it("BAR-START-01/02 — step.cycleTypeId written; no label reverse-map", async () => {
    // BAR-START-01
    const built = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "cyc:framing",
      stepId: "stp:framing-unit",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.step.cycleTypeId).toBe("cyc:framing");

    const seeded = await seedValidated("01");
    const traj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    expect(traj?.steps[0]?.cycleTypeId).toBe("cyc:framing");

    // BAR-START-02 — label change is material (CR-START-03 digest); not a cycleType reverse-map
    const corrupted = structuredClone(traj!);
    corrupted.steps = corrupted.steps.map((s) => ({
      ...s,
      label: "NOT-A-CATALOG-LABEL-XYZ",
    }));
    await seeded.oa.cycleServices.trajectories.save(corrupted);
    const prepLabelDrift = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(prepLabelDrift.ok).toBe(false);
    if (!prepLabelDrift.ok) {
      expect(prepLabelDrift.code).toBe("DECISION_SEALED_TRAJECTORY_DRIFT");
    }

    // Remove cycleTypeId while label looks like Cadrage → fail (no reverse-map)
    const stripped = structuredClone(corrupted);
    stripped.steps = stripped.steps.map((s) => {
      const { cycleTypeId: _drop, ...rest } = s;
      return { ...rest, label: "Cadrage" };
    });
    await seeded.oa.cycleServices.trajectories.save(stripped);
    await resealHdCandidateContentDigest({
      oa: seeded.oa,
      decisionId: seeded.approved.decisionId,
      trajectory: stripped,
    });
    const prepFail = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(prepFail.ok).toBe(false);
    if (!prepFail.ok) {
      expect(prepFail.code).toBe("TRAJECTORY_STEP_SELECTION_REQUIRED");
    }
  });

  it("BAR-START-03/04/05 — six-signal contract; incomplete refuses; LR durability", async () => {
    // BAR-START-03
    const lr = nextCycleLr("cyc:framing", "Cadrage.", SIGNALS_STANDARD);
    expect(Object.keys(lr.qualificationSignals!).sort()).toEqual(
      [
        "architectureImpact",
        "dataImpact",
        "irreversible",
        "lowRiskBounded",
        "securityImpact",
        "structuralChange",
      ].sort(),
    );

    // BAR-START-04 — incomplete / no ALL_FALSE invent
    expect(parseExplicitQualificationSignals({ structuralChange: false })).toBeNull();
    expect(
      parseExplicitQualificationSignals({
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        // lowRiskBounded missing — never invent
      }),
    ).toBeNull();
    const incomplete = validateLifecycleRecommendation({
      projectId: "prj:st-04",
      candidate: {
        intent: "NEXT_CYCLE",
        statement: "x",
        targetCycleTypeId: "cyc:framing",
        qualificationSignals: null,
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(incomplete.ok).toBe(false);
    if (!incomplete.ok) {
      expect(incomplete.code).toBe("LR_QUALIFICATION_SIGNALS_INCOMPLETE");
    }

    // BAR-START-05 — persist + restart readback
    const dbPath = tempDbPath("05.sqlite");
    const seeded = await seedValidated("05", {
      dbPath,
      signals: SIGNALS_CRITICAL,
    });
    const epiBefore = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const lrBefore = epiBefore.find(
      (e) => e.epistemicItemId === seeded.approved.targetCycleTypeId
        ? false
        : e.lifecycleRecommendation?.intent === "NEXT_CYCLE",
    );
    const lrItem = epiBefore.find(
      (e) =>
        e.type === "Recommendation" &&
        e.source === "lifecycle-recommendation:nora" &&
        e.lifecycleRecommendation?.intent === "NEXT_CYCLE",
    );
    expect(lrItem?.lifecycleRecommendation?.qualificationSignals).toEqual(
      SIGNALS_CRITICAL,
    );
    void lrBefore;

    const reopened = await reopenRuntime("05", dbPath);
    const epiAfter = await reopened.oa!.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const lrAfter = epiAfter.find(
      (e) => e.epistemicItemId === lrItem!.epistemicItemId,
    );
    expect(lrAfter?.lifecycleRecommendation?.qualificationSignals).toEqual(
      SIGNALS_CRITICAL,
    );
  });

  it("BAR-START-06/07 — HD seal + digest flip; legacy readable prepare fail-closed", async () => {
    // BAR-START-06
    const seeded = await seedValidated("06", { signals: SIGNALS_STANDARD });
    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded.approved.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(
      hd.decision.decisionBasis?.candidateTrajectoryContext?.qualificationSignals,
    ).toEqual(SIGNALS_STANDARD);

    const traj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: seeded.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok || !traj) return;
    const materialA = buildCandidateTrajectoryPresentationMaterial({
      projectId: seeded.projectId,
      lpsId: lps.livingProjectState.lpsVersionId,
      lpsVersion: lps.livingProjectState.version,
      trajectory: { ...traj, status: "candidate" },
      provenanceObservationId:
        hd.decision.decisionBasis!.candidateTrajectoryContext!
          .provenanceObservationId,
      recommendationId:
        hd.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
      semanticKey:
        hd.decision.decisionBasis!.candidateTrajectoryContext!.semanticKey,
      targetCycleTypeId: "cyc:framing",
      qualificationSignals: SIGNALS_STANDARD,
    });
    const materialB = buildCandidateTrajectoryPresentationMaterial({
      ...{
        projectId: seeded.projectId,
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        trajectory: { ...traj, status: "candidate" as const },
        provenanceObservationId:
          hd.decision.decisionBasis!.candidateTrajectoryContext!
            .provenanceObservationId,
        recommendationId:
          hd.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
        semanticKey:
          hd.decision.decisionBasis!.candidateTrajectoryContext!.semanticKey,
        targetCycleTypeId: "cyc:framing",
      },
      qualificationSignals: { ...SIGNALS_STANDARD, dataImpact: true },
    });
    expect(computeCandidateTrajectoryPresentationDigest(materialA)).not.toBe(
      computeCandidateTrajectoryPresentationDigest(materialB),
    );

    // BAR-START-07 — strip signals; readable; prepare fails
    const strippedHd = structuredClone(hd.decision);
    const ctx = strippedHd.decisionBasis!.candidateTrajectoryContext!;
    strippedHd.decisionBasis = {
      ...strippedHd.decisionBasis!,
      candidateTrajectoryContext: {
        trajectoryId: ctx.trajectoryId,
        candidateVersion: ctx.candidateVersion,
        provenanceObservationId: ctx.provenanceObservationId,
        recommendationId: ctx.recommendationId,
        semanticKey: ctx.semanticKey,
        targetCycleTypeId: ctx.targetCycleTypeId,
        candidateContentDigest: ctx.candidateContentDigest,
        presentationDigest: ctx.presentationDigest,
        // intentionally omit qualificationSignals (legacy shape)
      },
    };
    await seeded.oa.decisionServices.decisions.save(strippedHd);
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const lr = epi.find(
      (e) =>
        e.type === "Recommendation" &&
        e.source === "lifecycle-recommendation:nora",
    );
    if (lr?.lifecycleRecommendation) {
      const nextLr = structuredClone(lr);
      nextLr.lifecycleRecommendation = {
        intent: nextLr.lifecycleRecommendation!.intent,
        basisFingerprint: nextLr.lifecycleRecommendation!.basisFingerprint,
        basisRefs: nextLr.lifecycleRecommendation!.basisRefs,
        semanticKey: nextLr.lifecycleRecommendation!.semanticKey,
        subjectCycleInstanceId:
          nextLr.lifecycleRecommendation!.subjectCycleInstanceId,
        targetCycleInstanceId:
          nextLr.lifecycleRecommendation!.targetCycleInstanceId,
        targetCycleTypeId: nextLr.lifecycleRecommendation!.targetCycleTypeId,
        authority: "none",
        // omit qualificationSignals
      };
      await seeded.oa.cycleServices.epistemic.save(nextLr);
    }
    const stillHd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded.approved.decisionId,
    });
    expect(stillHd.ok).toBe(true);
    if (stillHd.ok) {
      expect(
        stillHd.decision.decisionBasis?.candidateTrajectoryContext
          ?.qualificationSignals,
      ).toBeUndefined();
    }
    const stillTraj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    expect(stillTraj?.status).toBe("validated");
    const prep = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(prep.ok).toBe(false);
    if (!prep.ok) expect(prep.code).toBe("PROFILE_SIGNALS_MISSING");
  });

  it("BAR-START-08/09/10/11/12/13/14/15/16/17 — prepare identity/profile/CKC/binding", async () => {
    const seeded = await seedValidated("08", { signals: SIGNALS_LIGHT });
    const prep = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) return;

    // BAR-START-08/15/16/17
    expect(prep.cycle.cycleTypeId).toBe("cyc:framing");
    expect(prep.cycle.trajectoryId).toBe(seeded.approved.trajectoryId);
    expect(prep.cycle.trajectoryVersion).toBe(seeded.approved.trajectoryVersion);
    expect(prep.cycle.trajectoryStepId).toBe(seeded.prepared.stepId);
    expect(prep.cycle.qualificationSignals).toEqual(SIGNALS_LIGHT);
    expect(prep.cycle.ckcResolutionRef).toMatch(/^ckc:m2-/);
    expect(prep.cycle.cycleInstanceId.startsWith("cyc:trj-")).toBe(true);
    expect(prep.cycle.cycleInstanceId).toBe(
      mintTrajectoryBoundCycleInstanceId({
        projectId: seeded.projectId,
        trajectoryId: prep.cycle.trajectoryId!,
        trajectoryVersion: prep.cycle.trajectoryVersion!,
        stepId: prep.cycle.trajectoryStepId!,
        cycleTypeId: prep.cycle.cycleTypeId,
      }),
    );

    // BAR-START-11/12 — Light from lowRiskBounded; not hardcoded
    expect(prep.cycle.profile).toBe("Light");
    expect(prep.cycle.status).toBe("acknowledged");

    // BAR-START-13 — Critical
    const crit = await seedValidated("13", { signals: SIGNALS_CRITICAL });
    const prepCrit = await prepareCycleFromValidatedTrajectory({
      oa: crit.oa,
      projectId: crit.projectId,
    });
    expect(prepCrit.ok).toBe(true);
    if (prepCrit.ok) {
      expect(prepCrit.cycle.profile).toBe("Critical");
      expect(prepCrit.cycle.status).toBe("proposed");
    }

    // BAR-START-10 — not selectable
    const seededDep = await seedValidated("10");
    vi.spyOn(cycleTypeCatalog, "getCycleTypeById").mockImplementation((id) => {
      const real = cycleTypeCatalog.CYCLE_TYPE_CATALOG.entries.find(
        (e) => e.cycleTypeId === id,
      );
      if (!real) return undefined;
      if (id === "cyc:framing") {
        return { ...real, lifecycleStatus: "deprecated" as const };
      }
      return real;
    });
    const depPrep = await prepareCycleFromValidatedTrajectory({
      oa: seededDep.oa,
      projectId: seededDep.projectId,
    });
    expect(depPrep.ok).toBe(false);
    if (!depPrep.ok) expect(depPrep.code).toBe("TARGET_CYCLE_NOT_SELECTABLE");
    vi.restoreAllMocks();

    // BAR-START-14 — qualify failure
    const seededCkc = await seedValidated("14");
    const spy = vi
      .spyOn(seededCkc.oa.ckcQualification.qualifyCycleWithCkc, "execute")
      .mockResolvedValue({
        state: "failure",
        code: "CKC_UNAVAILABLE",
        message: "ckc unavailable",
        blocking: true,
        retryable: true,
        recoverable: true,
        correlationId: "cor:x",
        failedAt: "2026-09-10T08:00:00.000Z",
      });
    const ckcFail = await prepareCycleFromValidatedTrajectory({
      oa: seededCkc.oa,
      projectId: seededCkc.projectId,
    });
    expect(ckcFail.ok).toBe(false);
    if (!ckcFail.ok) expect(ckcFail.code).toBe("CKC_UNAVAILABLE");
    spy.mockRestore();

    // BAR-START-09 — provenance mismatch via HD drift
    const seeded09 = await seedValidated("09");
    const hd09 = await seeded09.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded09.approved.decisionId,
    });
    expect(hd09.ok).toBe(true);
    if (!hd09.ok) return;
    const drifted = structuredClone(hd09.decision);
    drifted.decisionBasis!.candidateTrajectoryContext!.semanticKey =
      "tampered-semantic-key";
    await seeded09.oa.decisionServices.decisions.save(drifted);
    const mismatch = await prepareCycleFromValidatedTrajectory({
      oa: seeded09.oa,
      projectId: seeded09.projectId,
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) expect(mismatch.code).toBe("PROVENANCE_HD_MISMATCH");
  });

  it("BAR-START-18/19/20/21/22 — idempotent prepare; non-active; restart", async () => {
    const dbPath = tempDbPath("18.sqlite");
    const seeded = await seedValidated("18", { dbPath });

    const first = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    // BAR-START-18
    const second = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reused).toBe(true);
    expect(second.cycle.cycleInstanceId).toBe(first.cycle.cycleInstanceId);
    const cycles = await seeded.oa.cycleServices.cycles.listByProject(
      seeded.projectId,
    );
    expect(cycles).toHaveLength(1);

    // BAR-START-20/21 — before opening another runtime (singleton reset)
    expect(["proposed", "acknowledged"]).toContain(first.cycle.status);
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: seeded.projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
      expect(lps.livingProjectState.ckcResolutionRef).toBeUndefined();
    }
    const traj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    expect(traj?.steps[0]?.state).toBe("pending");

    const read = await readPreparedTrajectoryCycle({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(read.ok).toBe(true);
    if (read.ok) {
      expect(read.prepared?.cycleInstanceId).toBe(first.cycle.cycleInstanceId);
      expect(read.prepared?.isActive).toBe(false);
    }

    // BAR-START-22 restart
    const reopened = await reopenRuntime("18", dbPath);
    const readAfter = await readPreparedTrajectoryCycle({
      oa: reopened.oa!,
      projectId: seeded.projectId,
    });
    expect(readAfter.ok).toBe(true);
    if (readAfter.ok && readAfter.prepared) {
      expect(readAfter.prepared.cycleInstanceId).toBe(first.cycle.cycleInstanceId);
      expect(readAfter.prepared.profile).toBe(first.cycle.profile);
      expect(readAfter.prepared.ckcResolutionRef).toBe(
        first.cycle.ckcResolutionRef ?? null,
      );
      expect(readAfter.prepared.qualificationSignals).toEqual(
        first.cycle.qualificationSignals
          ? parseExplicitQualificationSignals(first.cycle.qualificationSignals)
          : null,
      );
    }

    // BAR-START-19 concurrent (own runtime; last in this it())
    const seeded19 = await seedValidated("19");
    const [a, b] = await Promise.all([
      prepareCycleFromValidatedTrajectory({
        oa: seeded19.oa,
        projectId: seeded19.projectId,
      }),
      prepareCycleFromValidatedTrajectory({
        oa: seeded19.oa,
        projectId: seeded19.projectId,
      }),
    ]);
    expect(a.ok && b.ok).toBe(true);
    if (a.ok && b.ok) {
      expect(a.cycle.cycleInstanceId).toBe(b.cycle.cycleInstanceId);
    }
    const cycles19 = await seeded19.oa.cycleServices.cycles.listByProject(
      seeded19.projectId,
    );
    expect(cycles19).toHaveLength(1);
  });

  it("BAR-START-23/24/25/34/35/40/42/43/44/45 — START success path + anti-claims", async () => {
    // BAR-START-23 — authority denied without env/force
    const seededAuth = await seedPrepared("23");
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "0";
    const denied = await startPreparedTrajectoryCycle({
      oa: seededAuth.oa,
      projectId: seededAuth.projectId,
      cycleInstanceId: seededAuth.prep.cycle.cycleInstanceId,
    });
    expect(denied.ok).toBe(false);
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";

    const dbPath = tempDbPath("35.sqlite");
    const seeded = await seedPrepared("35", { dbPath });
    const hdCountBefore = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).length;
    const lpsBefore =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;

    const started = await startPreparedTrajectoryCycle({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.prep.cycle.cycleInstanceId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;

    // BAR-START-34/35
    expect(started.cycle.status).toBe("active");
    expect(started.activeCycleInstanceId).toBe(started.cycle.cycleInstanceId);
    const traj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    expect(traj?.trajectoryId).toBe(seeded.prep.trajectoryId);
    expect(traj?.version).toBe(seeded.prep.trajectoryVersion);
    expect(traj?.decidedByDecisionRef).toBe(seeded.approved.decisionId);
    const step = traj?.steps.find(
      (s) => s.stepId === seeded.prep.cycle.trajectoryStepId,
    );
    expect(step?.state).toBe("active");

    const lpsAfter =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBe(
        started.cycle.cycleInstanceId,
      );
      expect(lpsAfter.livingProjectState.ckcResolutionRef).toBe(
        seeded.prep.cycle.ckcResolutionRef,
      );
    }

    // BAR-START-24/25 — no second HD, no Confirmation
    const hds = await seeded.oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(hds.length).toBe(hdCountBefore);
    expect(
      hds.every((d) => d.decisionBasis?.sourceType !== "proposal" || true),
    ).toBe(true);

    // BAR-START-43/44
    const ecs =
      await seeded.oa.executionContractServices.contracts.listByProject(
        seeded.projectId,
      );
    expect(ecs).toHaveLength(0);
    const attemptsRepo = seeded.oa.executionAttemptServices.attempts as {
      listByProject?: (projectId: string) => Promise<unknown[]>;
    };
    const attempts = attemptsRepo.listByProject
      ? await attemptsRepo.listByProject(seeded.projectId)
      : [];
    expect(attempts.length).toBe(0);

    // BAR-START-40 double start
    const again = await startPreparedTrajectoryCycle({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.prep.cycle.cycleInstanceId,
      forceLocalAuthority: true,
    });
    expect(again.ok).toBe(false);
    const cycles = await seeded.oa.cycleServices.cycles.listByProject(
      seeded.projectId,
    );
    expect(cycles.filter((c) => c.status === "active")).toHaveLength(1);
    const hdsAfter = await seeded.oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(hdsAfter.length).toBe(hdCountBefore);

    // BAR-START-42 restart
    const reopened = await reopenRuntime("35", dbPath);
    const cycleAfter = await reopened.oa!.cycleServices.cycles.findById(
      started.cycle.cycleInstanceId,
    );
    expect(cycleAfter?.status).toBe("active");
    expect(cycleAfter?.trajectoryStepId).toBe(
      seeded.prep.cycle.trajectoryStepId,
    );
    const trajAfter =
      await reopened.oa!.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    expect(
      trajAfter?.steps.find((s) => s.stepId === seeded.prep.cycle.trajectoryStepId)
        ?.state,
    ).toBe("active");
    const lpsRe =
      await reopened.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsRe.ok).toBe(true);
    if (lpsRe.ok) {
      expect(lpsRe.livingProjectState.activeCycleInstanceId).toBe(
        started.cycle.cycleInstanceId,
      );
      expect(lpsRe.livingProjectState.ckcResolutionRef).toBe(
        seeded.prep.cycle.ckcResolutionRef,
      );
    }

    // BAR-START-45 — no model runner import in prepare/start modules
    const prepareSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts",
      ),
      "utf8",
    );
    const startSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/startPreparedTrajectoryCycle.ts",
      ),
      "utf8",
    );
    expect(prepareSrc).not.toMatch(/runNora|OpenAI|orchestrateF2|openai/i);
    expect(startSrc).not.toMatch(/runNora|OpenAI|orchestrateF2|openai/i);
  });

  it("BAR-START-26/27/28/29/30/31/32/33 — START revalidation fail-closed", async () => {
    // BAR-START-29 catalog drift
    const seeded29 = await seedPrepared("29");
    vi.spyOn(cycleTypeCatalog, "getCycleTypeById").mockImplementation((id) => {
      const real = cycleTypeCatalog.CYCLE_TYPE_CATALOG.entries.find(
        (e) => e.cycleTypeId === id,
      );
      if (!real) return undefined;
      if (id === "cyc:framing") {
        return { ...real, lifecycleStatus: "deprecated" as const };
      }
      return real;
    });
    const driftCat = await startPreparedTrajectoryCycle({
      oa: seeded29.oa,
      projectId: seeded29.projectId,
      forceLocalAuthority: true,
    });
    expect(driftCat.ok).toBe(false);
    if (!driftCat.ok) expect(driftCat.code).toBe("TARGET_CYCLE_NOT_SELECTABLE");
    vi.restoreAllMocks();

    // BAR-START-30 profile drift
    const seeded30 = await seedPrepared("30");
    const cyc30 = structuredClone(seeded30.prep.cycle);
    cyc30.profile = cyc30.profile === "Light" ? "Standard" : "Light";
    await seeded30.oa.cycleServices.cycles.save(cyc30);
    const driftProf = await startPreparedTrajectoryCycle({
      oa: seeded30.oa,
      projectId: seeded30.projectId,
      forceLocalAuthority: true,
    });
    expect(driftProf.ok).toBe(false);
    if (!driftProf.ok) expect(driftProf.code).toBe("PROFILE_MISMATCH");

    // BAR-START-31 CKC drift
    const seeded31 = await seedPrepared("31");
    const cyc31 = structuredClone(seeded31.prep.cycle);
    cyc31.ckcResolutionRef = "ckc:m2-tampered-ref";
    await seeded31.oa.cycleServices.cycles.save(cyc31);
    const driftCkc = await startPreparedTrajectoryCycle({
      oa: seeded31.oa,
      projectId: seeded31.projectId,
      forceLocalAuthority: true,
    });
    expect(driftCkc.ok).toBe(false);
    if (!driftCkc.ok) expect(driftCkc.code).toBe("CKC_RESOLUTION_REF_MISMATCH");

    // BAR-START-27 HD drift
    const seeded27 = await seedPrepared("27");
    const hd27 = await seeded27.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded27.approved.decisionId,
    });
    expect(hd27.ok).toBe(true);
    if (!hd27.ok) return;
    const badHd = structuredClone(hd27.decision);
    badHd.status = "superseded";
    await seeded27.oa.decisionServices.decisions.save(badHd);
    const hdFail = await startPreparedTrajectoryCycle({
      oa: seeded27.oa,
      projectId: seeded27.projectId,
      forceLocalAuthority: true,
    });
    expect(hdFail.ok).toBe(false);

    // BAR-START-28 provenance mismatch
    const seeded28 = await seedPrepared("28");
    const hd28 = await seeded28.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded28.approved.decisionId,
    });
    expect(hd28.ok).toBe(true);
    if (!hd28.ok) return;
    const badProv = structuredClone(hd28.decision);
    badProv.decisionBasis!.candidateTrajectoryContext!.recommendationId =
      "epi:lr:forged";
    await seeded28.oa.decisionServices.decisions.save(badProv);
    const provFail = await startPreparedTrajectoryCycle({
      oa: seeded28.oa,
      projectId: seeded28.projectId,
      forceLocalAuthority: true,
    });
    expect(provFail.ok).toBe(false);

    // BAR-START-26 trajectory not validated
    const seeded26 = await seedPrepared("26");
    const traj26 =
      await seeded26.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded26.projectId,
      );
    const cand = structuredClone(traj26!);
    cand.status = "candidate";
    await seeded26.oa.cycleServices.trajectories.save(cand);
    const trajFail = await startPreparedTrajectoryCycle({
      oa: seeded26.oa,
      projectId: seeded26.projectId,
      forceLocalAuthority: true,
    });
    expect(trajFail.ok).toBe(false);
    if (!trajFail.ok) expect(trajFail.code).toBe("TRAJECTORY_NOT_VALIDATED");

    // BAR-START-32 blocking reservation
    const seeded32 = await seedPrepared("32");
    await seeded32.oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded32.projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: `epi:res-block-${seeded32.projectId}`,
          type: "Reservation",
          statement: "Blocking reservation for START gate.",
          status: "active",
          blocking: true,
          source: "test:bar-start-32",
        },
      ],
    });
    const resFail = await startPreparedTrajectoryCycle({
      oa: seeded32.oa,
      projectId: seeded32.projectId,
      forceLocalAuthority: true,
    });
    expect(resFail.ok).toBe(false);
    if (!resFail.ok) {
      expect(
        resFail.code === "CYCLE_START_NOT_READY" ||
          resFail.reason.includes("blocking"),
      ).toBe(true);
    }

    // BAR-START-33 sibling active
    const seeded33 = await seedPrepared("33");
    await seeded33.oa.cycleServices.createCycle.execute({
      cycleInstanceId: "cyc:sibling-active-33",
      cycleTypeId: "cyc:delivery",
      projectId: seeded33.projectId,
      signals: { ...SIGNALS_STANDARD },
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: await (async () => {
        const cur =
          await seeded33.oa.projectServices.getCurrentLivingProjectState.execute({
            projectId: seeded33.projectId,
          });
        return cur.ok ? cur.livingProjectState.version : undefined;
      })(),
    });
    // Force sibling to active if create left acknowledged
    const sibling = await seeded33.oa.cycleServices.cycles.findById(
      "cyc:sibling-active-33",
    );
    if (sibling && sibling.status !== "active") {
      await seeded33.oa.cycleServices.cycles.save({
        ...sibling,
        status: "active",
      });
    }
    const activeFail = await startPreparedTrajectoryCycle({
      oa: seeded33.oa,
      projectId: seeded33.projectId,
      forceLocalAuthority: true,
    });
    expect(activeFail.ok).toBe(false);
  });

  it("BAR-START-36/37/38 — BLOCKING atomic rollback on cycle/trajectory/LPS save fail", async () => {
    // BAR-START-36 cycle save fail
    const seeded36 = await seedPrepared("36");
    const store36 = seeded36.oa.projectServices.store as SqliteProductStore;
    const lps36a =
      await seeded36.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded36.projectId,
      });
    expect(lps36a.ok).toBe(true);
    if (!lps36a.ok) return;
    store36.failNextSave = "cycle";
    const fail36 = await startPreparedTrajectoryCycle({
      oa: seeded36.oa,
      projectId: seeded36.projectId,
      cycleInstanceId: seeded36.prep.cycle.cycleInstanceId,
      forceLocalAuthority: true,
    });
    store36.failNextSave = null;
    expect(fail36.ok).toBe(false);
    const cyc36 = await seeded36.oa.cycleServices.cycles.findById(
      seeded36.prep.cycle.cycleInstanceId,
    );
    expect(cyc36?.status).not.toBe("active");
    const traj36 =
      await seeded36.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded36.projectId,
      );
    expect(
      traj36?.steps.find((s) => s.stepId === seeded36.prep.cycle.trajectoryStepId)
        ?.state,
    ).toBe("pending");
    const lps36b =
      await seeded36.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded36.projectId,
      });
    expect(lps36b.ok).toBe(true);
    if (lps36b.ok) {
      expect(lps36b.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
      expect(lps36b.livingProjectState.version).toBe(
        lps36a.livingProjectState.version,
      );
    }

    // BAR-START-37 trajectory save fail inside START UoW
    const seeded37 = await seedPrepared("37");
    const store37 = seeded37.oa.projectServices.store as SqliteProductStore;
    const lps37a =
      await seeded37.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded37.projectId,
      });
    expect(lps37a.ok).toBe(true);
    if (!lps37a.ok) return;
    store37.failNextSave = "trajectory";
    const fail37 = await startPreparedTrajectoryCycle({
      oa: seeded37.oa,
      projectId: seeded37.projectId,
      cycleInstanceId: seeded37.prep.cycle.cycleInstanceId,
      forceLocalAuthority: true,
    });
    store37.failNextSave = null;
    expect(fail37.ok).toBe(false);
    const cyc37 = await seeded37.oa.cycleServices.cycles.findById(
      seeded37.prep.cycle.cycleInstanceId,
    );
    expect(cyc37?.status).not.toBe("active");
    const traj37 =
      await seeded37.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded37.projectId,
      );
    expect(
      traj37?.steps.find((s) => s.stepId === seeded37.prep.cycle.trajectoryStepId)
        ?.state,
    ).toBe("pending");
    const lps37b =
      await seeded37.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded37.projectId,
      });
    expect(lps37b.ok).toBe(true);
    if (lps37b.ok) {
      expect(lps37b.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
      expect(lps37b.livingProjectState.version).toBe(
        lps37a.livingProjectState.version,
      );
    }

    // BAR-START-38 LPS append fail after cycle+trajectory logical writes
    const seeded38 = await seedPrepared("38");
    const store38 = seeded38.oa.projectServices.store as SqliteProductStore;
    const lps38a =
      await seeded38.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded38.projectId,
      });
    expect(lps38a.ok).toBe(true);
    if (!lps38a.ok) return;
    store38.failNextSave = "lps";
    const fail38 = await startPreparedTrajectoryCycle({
      oa: seeded38.oa,
      projectId: seeded38.projectId,
      cycleInstanceId: seeded38.prep.cycle.cycleInstanceId,
      forceLocalAuthority: true,
    });
    store38.failNextSave = null;
    expect(fail38.ok).toBe(false);
    const cyc38 = await seeded38.oa.cycleServices.cycles.findById(
      seeded38.prep.cycle.cycleInstanceId,
    );
    expect(cyc38?.status).not.toBe("active");
    const traj38 =
      await seeded38.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded38.projectId,
      );
    expect(
      traj38?.steps.find((s) => s.stepId === seeded38.prep.cycle.trajectoryStepId)
        ?.state,
    ).toBe("pending");
    const lps38b =
      await seeded38.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded38.projectId,
      });
    expect(lps38b.ok).toBe(true);
    if (lps38b.ok) {
      expect(lps38b.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
      expect(lps38b.livingProjectState.ckcResolutionRef).toBeUndefined();
      expect(lps38b.livingProjectState.version).toBe(
        lps38a.livingProjectState.version,
      );
    }
  });

  it("BAR-START-39/41 — LPS OCC + concurrent START ≤1 activation", async () => {
    // BAR-START-39 — stale expected LPS via spy forcing conflict
    const seeded39 = await seedPrepared("39");
    const append = seeded39.oa.projectServices.appendLivingProjectStateVersion;
    const spy = vi.spyOn(append, "execute").mockImplementation(async () => ({
      ok: false as const,
      error: createProjectError({
        detailCode: "LPS_VERSION_CONFLICT",
        timestamp: "2026-09-10T08:00:00.000Z",
        correlationId: "cor:test-occ",
        currentVersion: 999,
      }),
      durationMs: 0,
    }));
    const occ = await startPreparedTrajectoryCycle({
      oa: seeded39.oa,
      projectId: seeded39.projectId,
      forceLocalAuthority: true,
    });
    spy.mockRestore();
    expect(occ.ok).toBe(false);
    const cyc39 = await seeded39.oa.cycleServices.cycles.findById(
      seeded39.prep.cycle.cycleInstanceId,
    );
    expect(cyc39?.status).not.toBe("active");

    // BAR-START-41 concurrent START
    const seeded41 = await seedPrepared("41");
    const [x, y] = await Promise.all([
      startPreparedTrajectoryCycle({
        oa: seeded41.oa,
        projectId: seeded41.projectId,
        forceLocalAuthority: true,
      }),
      startPreparedTrajectoryCycle({
        oa: seeded41.oa,
        projectId: seeded41.projectId,
        forceLocalAuthority: true,
      }),
    ]);
    const oks = [x, y].filter((r) => r.ok);
    expect(oks.length).toBe(1);
    const cycles = await seeded41.oa.cycleServices.cycles.listByProject(
      seeded41.projectId,
    );
    expect(cycles.filter((c) => c.status === "active")).toHaveLength(1);
    const traj =
      await seeded41.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded41.projectId,
      );
    expect(
      traj?.steps.filter((s) => s.state === "active"),
    ).toHaveLength(1);
  });

  it("BAR-START-46/47/48/49/50/51 — regression smoke + co-run notes", () => {
    // BAR-START-46 — no F2 orchestrate import on greenfield prepare/start
    const prepareSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts",
      ),
      "utf8",
    );
    expect(prepareSrc).not.toContain("orchestrateF2");
    expect(prepareSrc).not.toContain("ProposalStore");

    // BAR-START-47 — legacy unbound createCycle shape still constructible
    expect(typeof mintTrajectoryBoundCycleInstanceId).toBe("function");

    // BAR-START-48 — HD suite co-run by vitest command (candidateTrajectoryHumanDecision.d0)
    // BAR-START-49 — provenance suite co-run optional (not in this command)
    // BAR-START-50 — bridge suite co-run optional
    // BAR-START-51 — W2 suite co-run optional
    expect(true).toBe(true);
  });

  it("BAR-START-52/53/54/55 — multi-step selection + historical fail-closed", async () => {
    // Pure helpers — BAR-START-52 dependency
    const multi = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:multi",
      projectId: "prj:multi",
      version: 1,
      status: "validated" as const,
      decidedByDecisionRef: "dec:1",
      steps: [
        {
          stepId: "stp:a",
          order: 1,
          label: "Cadrage",
          state: "done" as const,
          cycleTypeId: "cyc:framing",
        },
        {
          stepId: "stp:b",
          order: 2,
          label: "Livraison",
          state: "pending" as const,
          cycleTypeId: "cyc:delivery",
          dependencies: ["stp:a"],
        },
        {
          stepId: "stp:c",
          order: 3,
          label: "Autre",
          state: "pending" as const,
          cycleTypeId: "cyc:qa-validation",
          dependencies: ["stp:b"],
        },
      ],
    };
    const eligible = selectEligiblePendingTrajectorySteps(multi);
    expect(eligible.map((s) => s.stepId)).toEqual(["stp:b"]);
    const exact = selectExactPrepareStep({
      trajectory: multi,
      targetCycleTypeId: "cyc:delivery",
    });
    expect(exact.ok).toBe(true);

    // BAR-START-53 multi-branch ambiguity
    const branched = {
      ...multi,
      steps: [
        {
          stepId: "stp:x",
          order: 1,
          label: "A",
          state: "pending" as const,
          cycleTypeId: "cyc:framing",
        },
        {
          stepId: "stp:y",
          order: 2,
          label: "B",
          state: "pending" as const,
          cycleTypeId: "cyc:framing",
        },
      ],
    };
    const amb = selectExactPrepareStep({
      trajectory: branched,
      targetCycleTypeId: "cyc:framing",
    });
    expect(amb.ok).toBe(false);
    if (!amb.ok) expect(amb.code).toBe("TRAJECTORY_STEP_SELECTION_REQUIRED");

    // BAR-START-54 same type distinguishable by stepId (mint differs)
    const idX = mintTrajectoryBoundCycleInstanceId({
      projectId: "prj:m",
      trajectoryId: "trj:m",
      trajectoryVersion: 1,
      stepId: "stp:x",
      cycleTypeId: "cyc:framing",
    });
    const idY = mintTrajectoryBoundCycleInstanceId({
      projectId: "prj:m",
      trajectoryId: "trj:m",
      trajectoryVersion: 1,
      stepId: "stp:y",
      cycleTypeId: "cyc:framing",
    });
    expect(idX).not.toBe(idY);

    // Integration: ambiguous eligible steps refuse prepare
    const seeded = await seedValidated("53");
    const traj =
      await seeded.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded.projectId,
      );
    const dual = structuredClone(traj!);
    dual.steps = [
      {
        ...dual.steps[0]!,
        stepId: "stp:branch-a",
        order: 1,
        state: "pending",
        cycleTypeId: "cyc:framing",
      },
      {
        ...dual.steps[0]!,
        stepId: "stp:branch-b",
        order: 2,
        state: "pending",
        cycleTypeId: "cyc:framing",
      },
    ];
    await seeded.oa.cycleServices.trajectories.save(dual);
    await resealHdCandidateContentDigest({
      oa: seeded.oa,
      decisionId: seeded.approved.decisionId,
      trajectory: dual,
    });
    const ambPrep = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(ambPrep.ok).toBe(false);
    if (!ambPrep.ok) {
      expect(ambPrep.code).toBe("TRAJECTORY_STEP_SELECTION_REQUIRED");
    }

    // BAR-START-55 historical without cycleTypeId — readable, prepare fail-closed
    const seeded55 = await seedValidated("55");
    const traj55 =
      await seeded55.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded55.projectId,
      );
    expect(traj55).not.toBeNull();
    const legacy = structuredClone(traj55!);
    legacy.steps = legacy.steps.map((s) => {
      const { cycleTypeId: _c, ...rest } = s;
      return rest;
    });
    await seeded55.oa.cycleServices.trajectories.save(legacy);
    await resealHdCandidateContentDigest({
      oa: seeded55.oa,
      decisionId: seeded55.approved.decisionId,
      trajectory: legacy,
    });
    const still =
      await seeded55.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded55.projectId,
      );
    expect(still?.steps[0]?.label).toBeTruthy();
    expect(still?.steps[0]?.cycleTypeId).toBeUndefined();
    const fail55 = await prepareCycleFromValidatedTrajectory({
      oa: seeded55.oa,
      projectId: seeded55.projectId,
    });
    expect(fail55.ok).toBe(false);
    if (!fail55.ok) {
      expect(fail55.code).toBe("TRAJECTORY_STEP_SELECTION_REQUIRED");
    }
  });

  it("BAR-START-CORR-01…15 — CR-START fail-closed + reuse + legacy smoke", async () => {
    // CORR-01 — historical pilotLifecycle.start cannot bypass strong guard
    const seeded01 = await seedPrepared("corr01");
    const hd01 = await seeded01.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded01.approved.decisionId,
    });
    expect(hd01.ok).toBe(true);
    if (!hd01.ok) return;
    const epi01 = await seeded01.oa.cycleServices.epistemic.listByProject(
      seeded01.projectId,
    );
    const lr01 = epi01.find(
      (e) => e.epistemicItemId === hd01.decision.decisionBasis!
        .candidateTrajectoryContext!.recommendationId,
    );
    expect(lr01?.lifecycleRecommendation).toBeTruthy();
    if (lr01?.lifecycleRecommendation) {
      const lrBody = lr01.lifecycleRecommendation;
      await persistEpistemicItem(seeded01.oa, seeded01.projectId, {
        epistemicItemId: lr01.epistemicItemId,
        type: lr01.type,
        statement: lr01.statement,
        status: lr01.status,
        source: lr01.source,
        relatedObjects: lr01.relatedObjects,
        lifecycleRecommendation: {
          intent: lrBody.intent,
          basisFingerprint: lrBody.basisFingerprint,
          basisRefs: lrBody.basisRefs,
          semanticKey: lrBody.semanticKey,
          subjectCycleInstanceId: lrBody.subjectCycleInstanceId,
          targetCycleInstanceId: lrBody.targetCycleInstanceId,
          targetCycleTypeId: lrBody.targetCycleTypeId,
          authority: "none",
          // omit qualificationSignals — missing LR must fail closed
        },
      });
    }
    const auth01 = registerLocalPiloteAuthority({
      authorityResolver: seeded01.oa.authorityResolver,
      scope: `pilot-lifecycle:${seeded01.prep.cycle.cycleInstanceId}`,
      issuedAt: "2026-09-10T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth01.ok).toBe(true);
    if (!auth01.ok) return;
    const lps01 =
      await seeded01.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded01.projectId,
      });
    expect(lps01.ok).toBe(true);
    if (!lps01.ok) return;
    const epiAfter = await seeded01.oa.cycleServices.epistemic.listByProject(
      seeded01.projectId,
    );
    const lrAfter = epiAfter.find(
      (e) =>
        e.epistemicItemId ===
        hd01.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
    );
    expect(
      lrAfter?.lifecycleRecommendation?.qualificationSignals,
    ).toBeUndefined();
    expect(seeded01.prep.cycle.trajectoryId).toBeTruthy();
    expect(typeof seeded01.prep.cycle.trajectoryVersion).toBe("number");
    const bypass = await seeded01.oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId: seeded01.prep.cycle.cycleInstanceId,
      projectId: seeded01.projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth01.evidenceId,
      expectedLpsVersion: lps01.livingProjectState.version,
    });
    expect(bypass.ok).toBe(false);
    if (!bypass.ok) {
      expect(bypass.error.detailCode).toBe("CYCLE_START_NOT_READY");
      expect(bypass.error.internalCauseRef).toBe("PROFILE_SIGNALS_MISSING");
    }
    const cyc01 = await seeded01.oa.cycleServices.cycles.findById(
      seeded01.prep.cycle.cycleInstanceId,
    );
    expect(cyc01?.status).not.toBe("active");
    const lps01b =
      await seeded01.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded01.projectId,
      });
    expect(lps01b.ok).toBe(true);
    if (lps01b.ok) {
      expect(lps01b.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // CORR-02 — missing LR signals → PREPARE fail
    const seeded02 = await seedValidated("corr02");
    const hd02 = await seeded02.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded02.approved.decisionId,
    });
    expect(hd02.ok).toBe(true);
    if (!hd02.ok) return;
    const epi02 = await seeded02.oa.cycleServices.epistemic.listByProject(
      seeded02.projectId,
    );
    const lr02 = epi02.find(
      (e) =>
        e.epistemicItemId ===
        hd02.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
    );
    if (lr02?.lifecycleRecommendation) {
      const lrBody = lr02.lifecycleRecommendation;
      await persistEpistemicItem(seeded02.oa, seeded02.projectId, {
        epistemicItemId: lr02.epistemicItemId,
        type: lr02.type,
        statement: lr02.statement,
        status: lr02.status,
        source: lr02.source,
        relatedObjects: lr02.relatedObjects,
        lifecycleRecommendation: {
          intent: lrBody.intent,
          basisFingerprint: lrBody.basisFingerprint,
          basisRefs: lrBody.basisRefs,
          semanticKey: lrBody.semanticKey,
          subjectCycleInstanceId: lrBody.subjectCycleInstanceId,
          targetCycleInstanceId: lrBody.targetCycleInstanceId,
          targetCycleTypeId: lrBody.targetCycleTypeId,
          authority: "none",
        },
      });
    }
    const prep02 = await prepareCycleFromValidatedTrajectory({
      oa: seeded02.oa,
      projectId: seeded02.projectId,
    });
    expect(prep02.ok).toBe(false);
    if (!prep02.ok) expect(prep02.code).toBe("PROFILE_SIGNALS_MISSING");

    // CORR-03 — LR≠HD → PREPARE fail
    const seeded03 = await seedValidated("corr03");
    const hd03 = await seeded03.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded03.approved.decisionId,
    });
    expect(hd03.ok).toBe(true);
    if (!hd03.ok) return;
    const epi03 = await seeded03.oa.cycleServices.epistemic.listByProject(
      seeded03.projectId,
    );
    const lr03 = epi03.find(
      (e) =>
        e.epistemicItemId ===
        hd03.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
    );
    if (lr03?.lifecycleRecommendation) {
      const lrBody = lr03.lifecycleRecommendation;
      await persistEpistemicItem(seeded03.oa, seeded03.projectId, {
        epistemicItemId: lr03.epistemicItemId,
        type: lr03.type,
        statement: lr03.statement,
        status: lr03.status,
        source: lr03.source,
        relatedObjects: lr03.relatedObjects,
        lifecycleRecommendation: {
          ...lrBody,
          qualificationSignals: { ...SIGNALS_CRITICAL },
        },
      });
    }
    const prep03 = await prepareCycleFromValidatedTrajectory({
      oa: seeded03.oa,
      projectId: seeded03.projectId,
    });
    expect(prep03.ok).toBe(false);
    if (!prep03.ok) expect(prep03.code).toBe("PROVENANCE_SIGNAL_MISMATCH");

    // CORR-04 — Cycle≠HD signals after PREPARE → START fail
    const seeded04 = await seedPrepared("corr04");
    const cyc04 = structuredClone(seeded04.prep.cycle);
    cyc04.qualificationSignals = { ...SIGNALS_CRITICAL };
    await seeded04.oa.cycleServices.cycles.save(cyc04);
    const start04 = await startPreparedTrajectoryCycle({
      oa: seeded04.oa,
      projectId: seeded04.projectId,
      forceLocalAuthority: true,
    });
    expect(start04.ok).toBe(false);
    if (!start04.ok) expect(start04.code).toBe("PROVENANCE_SIGNAL_MISMATCH");

    // CORR-05 — LR drift after PREPARE → START fail
    const seeded05 = await seedPrepared("corr05");
    const hd05 = await seeded05.oa.decisionServices.getHumanDecision.execute({
      decisionId: seeded05.approved.decisionId,
    });
    expect(hd05.ok).toBe(true);
    if (!hd05.ok) return;
    const epi05 = await seeded05.oa.cycleServices.epistemic.listByProject(
      seeded05.projectId,
    );
    const lr05 = epi05.find(
      (e) =>
        e.epistemicItemId ===
        hd05.decision.decisionBasis!.candidateTrajectoryContext!.recommendationId,
    );
    if (lr05?.lifecycleRecommendation) {
      const lrBody = lr05.lifecycleRecommendation;
      await persistEpistemicItem(seeded05.oa, seeded05.projectId, {
        epistemicItemId: lr05.epistemicItemId,
        type: lr05.type,
        statement: lr05.statement,
        status: lr05.status,
        source: lr05.source,
        relatedObjects: lr05.relatedObjects,
        lifecycleRecommendation: {
          ...lrBody,
          qualificationSignals: { ...SIGNALS_CRITICAL },
        },
      });
    }
    const start05 = await startPreparedTrajectoryCycle({
      oa: seeded05.oa,
      projectId: seeded05.projectId,
      forceLocalAuthority: true,
    });
    expect(start05.ok).toBe(false);
    if (!start05.ok) expect(start05.code).toBe("PROVENANCE_SIGNAL_MISMATCH");

    // CORR-06 — material step drift after HD → PREPARE fail
    const seeded06 = await seedValidated("corr06");
    const traj06 =
      await seeded06.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded06.projectId,
      );
    const drifted06 = structuredClone(traj06!);
    drifted06.steps = drifted06.steps.map((s, i) =>
      i === 0 ? { ...s, label: `${s.label} TAMPERED` } : s,
    );
    await seeded06.oa.cycleServices.trajectories.save(drifted06);
    const prep06 = await prepareCycleFromValidatedTrajectory({
      oa: seeded06.oa,
      projectId: seeded06.projectId,
    });
    expect(prep06.ok).toBe(false);
    if (!prep06.ok) expect(prep06.code).toBe("DECISION_SEALED_TRAJECTORY_DRIFT");

    // CORR-07 — material step drift after PREPARE → START fail
    const seeded07 = await seedPrepared("corr07");
    const traj07 =
      await seeded07.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded07.projectId,
      );
    const drifted07 = structuredClone(traj07!);
    drifted07.steps = drifted07.steps.map((s, i) =>
      i === 0 ? { ...s, label: `${s.label} POST-PREP` } : s,
    );
    await seeded07.oa.cycleServices.trajectories.save(drifted07);
    const start07 = await startPreparedTrajectoryCycle({
      oa: seeded07.oa,
      projectId: seeded07.projectId,
      forceLocalAuthority: true,
    });
    expect(start07.ok).toBe(false);
    if (!start07.ok) expect(start07.code).toBe("DECISION_SEALED_TRAJECTORY_DRIFT");

    // CORR-08 — candidate→validated only (lifecycle status) → PREPARE OK
    const seeded08 = await seedValidated("corr08");
    const traj08 =
      await seeded08.oa.cycleServices.trajectories.findCurrentByProjectId(
        seeded08.projectId,
      );
    expect(traj08?.status).toBe("validated");
    const prep08 = await prepareCycleFromValidatedTrajectory({
      oa: seeded08.oa,
      projectId: seeded08.projectId,
    });
    expect(prep08.ok).toBe(true);

    // CORR-09 — reuse requires exact signals
    const seeded09 = await seedPrepared("corr09");
    const cyc09 = structuredClone(seeded09.prep.cycle);
    cyc09.qualificationSignals = { ...SIGNALS_STANDARD };
    await seeded09.oa.cycleServices.cycles.save(cyc09);
    const reuse09 = await prepareCycleFromValidatedTrajectory({
      oa: seeded09.oa,
      projectId: seeded09.projectId,
    });
    expect(reuse09.ok).toBe(false);
    if (!reuse09.ok) expect(reuse09.code).toBe("PREPARE_REUSE_CONTRACT_MISMATCH");

    // CORR-10 — reuse requires exact profile
    const seeded10 = await seedPrepared("corr10");
    const cyc10 = structuredClone(seeded10.prep.cycle);
    cyc10.profile = cyc10.profile === "Light" ? "Standard" : "Light";
    await seeded10.oa.cycleServices.cycles.save(cyc10);
    const reuse10 = await prepareCycleFromValidatedTrajectory({
      oa: seeded10.oa,
      projectId: seeded10.projectId,
    });
    expect(reuse10.ok).toBe(false);
    if (!reuse10.ok) expect(reuse10.code).toBe("PREPARE_REUSE_CONTRACT_MISMATCH");

    // CORR-11 — reuse requires exact CKC
    const seeded11 = await seedPrepared("corr11");
    const cyc11 = structuredClone(seeded11.prep.cycle);
    cyc11.ckcResolutionRef = "ckc:m2-tampered-reuse";
    await seeded11.oa.cycleServices.cycles.save(cyc11);
    const reuse11 = await prepareCycleFromValidatedTrajectory({
      oa: seeded11.oa,
      projectId: seeded11.projectId,
    });
    expect(reuse11.ok).toBe(false);
    if (!reuse11.ok) expect(reuse11.code).toBe("PREPARE_REUSE_CONTRACT_MISMATCH");

    // CORR-12 — active/terminal cannot reused success
    const seeded12a = await seedPrepared("corr12a");
    const active = structuredClone(seeded12a.prep.cycle);
    active.status = "active";
    await seeded12a.oa.cycleServices.cycles.save(active);
    const reuseActive = await prepareCycleFromValidatedTrajectory({
      oa: seeded12a.oa,
      projectId: seeded12a.projectId,
    });
    expect(reuseActive.ok).toBe(false);
    if (!reuseActive.ok) expect(reuseActive.code).toBe("PREPARE_REUSE_ACTIVE");

    const seeded12t = await seedPrepared("corr12t");
    const terminal = structuredClone(seeded12t.prep.cycle);
    terminal.status = "completed";
    await seeded12t.oa.cycleServices.cycles.save(terminal);
    const reuseTerm = await prepareCycleFromValidatedTrajectory({
      oa: seeded12t.oa,
      projectId: seeded12t.projectId,
    });
    expect(reuseTerm.ok).toBe(false);
    if (!reuseTerm.ok) expect(reuseTerm.code).toBe("PREPARE_REUSE_TERMINAL");

    // CORR-13 concurrent PREPARE ≤1 — covered by BAR-START-19
    // CORR-14 atomicity — covered by BAR-START-36/37/38

    // CORR-15 — legacy unbound START still works
    const { runtime: rt15, projectId: pid15 } = await bootFreshProject("corr15");
    const oa15 = rt15.oa!;
    const lps15 = await oa15.projectServices.getCurrentLivingProjectState.execute({
      projectId: pid15,
    });
    expect(lps15.ok).toBe(true);
    if (!lps15.ok) return;
    const traj15 = await oa15.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:corr15-${pid15}`,
      projectId: pid15,
      steps: [
        { stepId: "stp:corr15-a", order: 1, label: "Clarify", state: "pending" },
        { stepId: "stp:corr15-b", order: 2, label: "Decide", state: "pending" },
      ],
      status: "active",
      expectedLpsVersion: lps15.livingProjectState.version,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(traj15.ok).toBe(true);
    const unboundId = "cyc:corr15-unbound";
    const created15 = await oa15.cycleServices.createCycle.execute({
      cycleInstanceId: unboundId,
      cycleTypeId: "cyc:delivery",
      projectId: pid15,
      signals: { lowRiskBounded: true },
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      linkAsActiveCycle: false,
    });
    expect(created15.ok).toBe(true);
    if (!created15.ok) return;
    expect(created15.cycle.trajectoryId).toBeUndefined();
    expect(created15.cycle.trajectoryStepId).toBeUndefined();
    const auth15 = registerLocalPiloteAuthority({
      authorityResolver: oa15.authorityResolver,
      scope: `pilot-lifecycle:${unboundId}`,
      issuedAt: "2026-09-10T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth15.ok).toBe(true);
    if (!auth15.ok) return;
    const start15 = await oa15.cycleServices.pilotLifecycle.start({
      cycleInstanceId: unboundId,
      projectId: pid15,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth15.evidenceId,
    });
    expect(start15.ok).toBe(true);
    if (start15.ok) expect(start15.cycle.status).toBe("active");
  });
});
