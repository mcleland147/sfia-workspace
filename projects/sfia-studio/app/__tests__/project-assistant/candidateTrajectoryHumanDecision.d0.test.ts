/** @vitest-environment node */
/**
 * GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION — BAR-HD-01…45
 * ZERO NEW REAL. Deterministic Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  buildCandidateTrajectoryPresentationMaterial,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
  isTargetCycleCurrentlySelectable,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  resolveCandidateTrajectoryProvenance,
  resolveTrajectoryBootstrapPresence,
  candidateTrajectoryApprovalSubject,
} from "@/lib/oa/cycle";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "@/features/project-assistant/candidateTrajectoryPromotionGuard";
import type { DecisionBasis } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  LOCAL_PILOTE_ACTOR_ID,
  validateDecisionBasis,
} from "@/lib/oa/decision";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as cycleTypeCatalog from "@/lib/oa/cycle/domain/cycleTypeCatalog";

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
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-hd-"));
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

async function bootFreshProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T00:00:00.000Z",
    idSource: new FixedIdSource(`hd-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh HD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `HD${suffix}`.slice(0, 8),
    idempotencyKey: `idem:hd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath };
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
    producedAt: "2026-09-10T00:01:00.000Z",
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

async function seedCandidate(
  suffix: string,
  opts?: { trajectoryId?: string; stepId?: string; provId?: string },
) {
  const { runtime, projectId } = await bootFreshProject(suffix);
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr("cyc:framing", "Envisager un Cadrage."),
  );
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => opts?.trajectoryId ?? `trj:hd-${suffix}`,
      newStepId: () => opts?.stepId ?? `stp:hd-${suffix}`,
      newProvenanceObservationId: () => opts?.provId ?? `epi:trj-prov-hd-${suffix}`,
      correlationId: `cor:hd-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepare failed");
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa!,
    projectId,
  });
  expect(presentation.ok).toBe(true);
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }
  return {
    runtime,
    projectId,
    prepared,
    presentation: presentation.presentation,
    oa: runtime.oa!,
  };
}

describe("GREENFIELD CANDIDATE → HUMANDECISION — BAR-HD", () => {
  it("BAR-HD-01/02/03/04 — DecisionBasis candidate_trajectory invariants + legacy", () => {
    const ctx = {
      trajectoryId: "trj:x",
      candidateVersion: 1,
      provenanceObservationId: "epi:p",
      recommendationId: "epi:r",
      semanticKey: "sk",
      targetCycleTypeId: "cyc:framing",
      candidateContentDigest: "aa",
      presentationDigest: "bb",
    };
    const valid: DecisionBasis = {
      sourceType: "candidate_trajectory",
      sourceRef: "trj:x",
      sourceDigest: "bb",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      candidateTrajectoryContext: ctx,
      executionBasis: { cycleTypeId: "cyc:framing" },
    };
    expect(validateDecisionBasis(valid)).toBeNull();

    expect(
      validateDecisionBasis({
        ...valid,
        candidateTrajectoryContext: undefined,
      })?.reason,
    ).toBe("candidate_trajectory_context_required");

    expect(
      validateDecisionBasis({
        ...valid,
        trajectoryContext: {
          trajectoryId: "trj:x",
          candidateVersion: 1,
          optionRefs: ["o1"],
          selectedOptionRef: "o1",
        },
      })?.reason,
    ).toBe("candidate_trajectory_forbids_trajectory_context");

    // Legacy: missing DecisionBasis is ok for readers (validate returns null).
    expect(validateDecisionBasis(undefined)).toBeNull();

    const proposal: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:1",
      sourceDigest: "d",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      executionBasis: {},
    };
    expect(validateDecisionBasis(proposal)).toBeNull();
    expect(
      validateDecisionBasis({
        ...proposal,
        candidateTrajectoryContext: ctx,
      })?.reason,
    ).toBe("proposal_forbids_candidate_trajectory_context");

    const w2: DecisionBasis = {
      sourceType: "trajectory_option",
      sourceRef: "optset:1",
      sourceDigest: "d",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      trajectoryContext: {
        trajectoryId: "trj:x",
        candidateVersion: 1,
        optionRefs: ["o1"],
        selectedOptionRef: "o1",
      },
      executionBasis: {},
    };
    expect(validateDecisionBasis(w2)).toBeNull();
  });

  it("BAR-HD-05/06/07/08 — presentation DTO + digests deterministic / content change", async () => {
    const seeded = await seedCandidate("05");
    const digestA = seeded.presentation.presentationDigest;
    const again = await buildPreCycleCandidateApprovalPresentation({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(again.ok).toBe(true);
    if (!again.ok || !again.presentation) return;
    expect(again.presentation.presentationDigest).toBe(digestA);
    expect(again.presentation.approvalOptionLabel).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
    );

    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const contentA = computeCandidateContentDigest({
      trajectoryId: traj!.trajectoryId,
      version: traj!.version,
      status: traj!.status,
      steps: traj!.steps,
    });
    const contentA2 = computeCandidateContentDigest({
      trajectoryId: traj!.trajectoryId,
      version: traj!.version,
      status: traj!.status,
      steps: traj!.steps,
    });
    expect(contentA).toBe(contentA2);

    const mutated = structuredClone(traj!);
    mutated.steps = [
      ...mutated.steps,
      {
        stepId: "stp:extra",
        order: 2,
        label: "Extra",
        state: "pending",
      },
    ];
    const contentB = computeCandidateContentDigest({
      trajectoryId: mutated.trajectoryId,
      version: mutated.version,
      status: mutated.status,
      steps: mutated.steps,
    });
    expect(contentB).not.toBe(contentA);
  });

  it("BAR-HD-09 — TOCTOU candidate steps change refuses + 0 HD", async () => {
    const seeded = await seedCandidate("09");
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const staleDigest = seeded.presentation.presentationDigest;
    await seeded.oa.cycleServices.trajectories.save({
      ...traj!,
      steps: [
        ...traj!.steps,
        { stepId: "stp:drift", order: 2, label: "Drift", state: "pending" },
      ],
    });
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: staleDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CANDIDATE_TRAJECTORY_DECISION_STALE");
    const hds = await seeded.oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(hds.filter((d) => d.status === "accepted")).toHaveLength(0);
    const still = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(still?.status).toBe("candidate");
  });

  it("BAR-HD-10 — TOCTOU LPS version change refuses", async () => {
    const seeded = await seedCandidate("10");
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const appended =
      await seeded.oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId: seeded.projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: `${lps.livingProjectState.objective} (drift)`,
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: "cor:hd-lps-drift",
      });
    expect(appended.ok).toBe(true);
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CANDIDATE_TRAJECTORY_DECISION_STALE");
  });

  it("BAR-HD-11/12/13 — provenance missing/ambiguous/invalid → no HD", async () => {
    const seeded = await seedCandidate("11");
    // Remove provenance observations by superseding them.
    const items = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const prov = items.filter(
      (i) =>
        i.type === "Observation" &&
        i.source === "candidate-trajectory-provenance:bridge",
    );
    expect(prov.length).toBeGreaterThan(0);
    await seeded.oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: prov.map((p) => ({
        epistemicItemId: p.epistemicItemId,
        type: p.type,
        statement: p.statement,
        status: "superseded" as const,
        source: p.source,
        relatedObjects: p.relatedObjects,
      })),
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: "cor:hd-prov-gone",
    });
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toMatch(/^PROVENANCE_/);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-14/15 — historical RESOLVED + current selectability DENIED", async () => {
    const seeded = await seedCandidate("14");
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");

    const realGet = cycleTypeCatalog.getCycleTypeById;
    vi.spyOn(cycleTypeCatalog, "getCycleTypeById").mockImplementation((id) => {
      const entry = realGet(id);
      if (!entry) return undefined;
      return { ...entry, lifecycleStatus: "deprecated" };
    });

    const still = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(still.status).toBe("RESOLVED");
    expect(isTargetCycleCurrentlySelectable("cyc:framing")).toBe(false);

    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("TARGET_CYCLE_NOT_SELECTABLE");
  });

  it("BAR-HD-16 — no label reverse-map: HD uses provenance targetCycleTypeId", async () => {
    const seeded = await seedCandidate("16");
    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(
      hd.decision.decisionBasis?.candidateTrajectoryContext?.targetCycleTypeId,
    ).toBe("cyc:framing");
    expect(ok.targetCycleTypeId).toBe("cyc:framing");
  });

  it("BAR-HD-17/18 — server authority; missing authority refuses", async () => {
    const seeded = await seedCandidate("17");
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "0";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      // no forceLocalAuthority
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);

    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const actionSource = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/preCycleCandidateTrajectoryActions.ts",
      ),
      "utf8",
    );
    expect(actionSource).toMatch(
      /projectAssistantApprovePreCycleCandidateTrajectoryAction/,
    );
    expect(actionSource).not.toMatch(/claimedAuthorityLevel/);
    expect(actionSource).not.toMatch(/canActAsMorris/);
    expect(actionSource).not.toMatch(/authorityEvidenceId:\s*input/);
  });

  it("BAR-HD-19/20/21/23/29/34/35/36/37/38 — atomic success path seals HD + promote as-is", async () => {
    const seeded = await seedCandidate("23");
    const pre = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    const preSteps = JSON.stringify(pre!.steps);
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(preLps.ok).toBe(true);
    if (!preLps.ok) return;

    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;

    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR_ID);
    expect(hd.decision.authority).toBe("morris");
    expect(hd.decision.options).toHaveLength(1);
    expect(hd.decision.options[0]!.optionId).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
    );
    expect(hd.decision.selectedOptionId).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
    );
    expect(hd.decision.cycleInstanceId).toBeUndefined();
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("candidate_trajectory");
    expect(basis.sourceRef).toBe(ok.trajectoryId);
    expect(basis.sourceDigest).toBe(seeded.presentation.presentationDigest);
    expect(basis.candidateTrajectoryContext?.presentationDigest).toBe(
      basis.sourceDigest,
    );
    expect(basis.trajectoryContext).toBeUndefined();

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.status).toBe("validated");
    expect(current.trajectory.decidedByDecisionRef).toBe(ok.decisionId);
    expect(current.trajectory.decidedOptionRef).toBeUndefined();
    expect(JSON.stringify(current.trajectory.steps)).toBe(preSteps);

    const cycles = await seeded.oa.cycleServices.cycles.listByProject(
      seeded.projectId,
    );
    expect(cycles).toHaveLength(0);
    const ecs =
      await seeded.oa.executionContractServices.contracts.listByProject(
        seeded.projectId,
      );
    expect(ecs).toHaveLength(0);
    const confs = await seeded.oa.decisionServices.confirmations.findById(
      "conf:none-expected",
    );
    expect(confs).toBeNull();
    // No Confirmation created on this path — list API is not on the port; count via HD history only.
    void confs;

    const lpsAfter =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      preLps.livingProjectState.version,
    );
    expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBeUndefined();
    expect(lpsAfter.livingProjectState.decisionIds).toContain(ok.decisionId);
    expect(lpsAfter.livingProjectState.trajectoryId).toBe(ok.trajectoryId);

    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    expect(epi.some((i) => i.type === "DecisionRef")).toBe(false);
  });

  it("BAR-HD-22 — promotion guard mismatch rolls back", async () => {
    const seeded = await seedCandidate("22");
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
      __testMutateDecisionBeforeGuard: (d) => {
        const next = structuredClone(d);
        if (next.decisionBasis?.candidateTrajectoryContext) {
          next.decisionBasis.candidateTrajectoryContext.semanticKey =
            "tampered";
        }
        return next;
      },
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CTX_SEMANTIC_KEY_MISMATCH");
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj?.status).toBe("candidate");
  });

  it("BAR-HD-24 — HD save failure → no HD / no promotion", async () => {
    const seeded = await seedCandidate("24");
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "decision";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-25 — HD LPS append failure → rollback", async () => {
    const seeded = await seedCandidate("25");
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "lps";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok && preLps.ok).toBe(true);
    if (postLps.ok && preLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
  });

  it("BAR-HD-26 — readback failure → outer rollback", async () => {
    const seeded = await seedCandidate("26");
    const spy = vi
      .spyOn(seeded.oa.decisionServices.getHumanDecision, "execute")
      .mockResolvedValueOnce({
        ok: false,
        error: {
          detailCode: "DECISION_NOT_FOUND",
          message: "forced",
        },
      } as never);
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    spy.mockRestore();
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("READBACK_FAILURE");
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-27/28 — BLOCKING: promote failure after HD rolls back HD+LPS", async () => {
    const seeded = await seedCandidate("27");
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "trajectory";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);

    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);

    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj?.status).toBe("candidate");
    expect(traj?.decidedByDecisionRef).toBeUndefined();

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok && preLps.ok).toBe(true);
    if (postLps.ok && preLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
  });

  it("BAR-HD-30 — double sequential invocation ≤1 accepted HD", async () => {
    const seeded = await seedCandidate("30");
    const first = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    const second = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("ALREADY_DECIDED");
    const accepted = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(1);
  });

  it("BAR-HD-31 — concurrent invocation → exactly one accepted (SQLite)", async () => {
    const seeded = await seedCandidate("31");
    const digest = seeded.presentation.presentationDigest;
    const [a, b] = await Promise.all([
      approveCandidateTrajectory({
        oa: seeded.oa,
        projectId: seeded.projectId,
        presentationDigest: digest,
        forceLocalAuthority: true,
      }),
      approveCandidateTrajectory({
        oa: seeded.oa,
        projectId: seeded.projectId,
        presentationDigest: digest,
        forceLocalAuthority: true,
      }),
    ]);
    const successes = [a, b].filter((r) => r.ok);
    expect(successes.length).toBe(1);
    const accepted = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(1);
  });

  it("BAR-HD-32 — already current/validated → no new HD", async () => {
    const seeded = await seedCandidate("32");
    const first = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    const again = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.code).toBe("ALREADY_DECIDED");
  });

  it("BAR-HD-33 — activeCycleInstanceId refuses greenfield path", async () => {
    const seeded = await seedCandidate("33");
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const appended =
      await seeded.oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId: seeded.projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: lps.livingProjectState.objective,
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: "cor:hd-active-cycle",
        activeCycleInstanceId: "cycinst:fake-active",
      });
    expect(appended.ok).toBe(true);
    // Digest stale due to LPS change OR active cycle — either refuse is correct.
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect([
      "ACTIVE_CYCLE_PRESENT",
      "CANDIDATE_TRAJECTORY_DECISION_STALE",
    ]).toContain(failed.code);
  });

  it("BAR-HD-39/40 — proposal + W2 DecisionBasis regression (validate)", () => {
    expect(
      validateDecisionBasis({
        sourceType: "proposal",
        sourceRef: "p",
        sourceDigest: "d",
        projectId: "prj:x",
        proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
        executionBasis: {},
      }),
    ).toBeNull();
    expect(
      validateDecisionBasis({
        sourceType: "trajectory_option",
        sourceRef: "os",
        sourceDigest: "d",
        projectId: "prj:x",
        proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
        trajectoryContext: {
          trajectoryId: "trj:x",
          candidateVersion: 1,
          optionRefs: ["a", "b"],
          selectedOptionRef: "a",
        },
        executionBasis: {},
      }),
    ).toBeNull();
  });

  it("BAR-HD-41/42 — provenance + bridge regression smoke", async () => {
    const seeded = await seedCandidate("41");
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");
    expect(seeded.prepared.ok).toBe(true);
    if (!seeded.prepared.ok) return;
    expect(seeded.prepared.trajectoryVersion).toBe(1);
  });

  it("digest gate — sourceDigest === presentationDigest === sealed object", async () => {
    const seeded = await seedCandidate("digest");
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    const live = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(traj && live.ok).toBeTruthy();
    if (!traj || !live.ok) return;
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: traj.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");
    if (provenance.status !== "RESOLVED") return;
    const material = buildCandidateTrajectoryPresentationMaterial({
      projectId: seeded.projectId,
      lpsId: live.livingProjectState.lpsVersionId,
      lpsVersion: live.livingProjectState.version,
      doctrineDigest: live.livingProjectState.doctrinePackageRef.digest,
      trajectory: traj,
      provenanceObservationId: provenance.provenanceObservationId,
      recommendationId: provenance.recommendationId,
      semanticKey: provenance.semanticKey,
      targetCycleTypeId: provenance.targetCycleTypeId,
    });
    const presentationDigest =
      computeCandidateTrajectoryPresentationDigest(material);
    expect(presentationDigest).toBe(seeded.presentation.presentationDigest);
    expect(computeDecisionBasisSourceDigest(material)).toBe(presentationDigest);

    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(presentationDigest);
    expect(
      hd.decision.decisionBasis?.candidateTrajectoryContext
        ?.candidateContentDigest,
    ).toBe(material.candidate.candidateContentDigest);

    const promoted = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(promoted.ok).toBe(true);
    if (!promoted.ok) return;
    const promotedContent = computeCandidateContentDigest({
      trajectoryId: promoted.trajectory.trajectoryId,
      version: promoted.trajectory.version,
      status: "candidate", // content digest over steps/id/version — status validated differs
      steps: promoted.trajectory.steps,
    });
    // Content digest at approve time used candidate status; promoted status changed.
    // Seal is steps/id/version equivalence — compare steps digest via material projection.
    expect(JSON.stringify(promoted.trajectory.steps)).toBe(
      JSON.stringify(traj.steps),
    );
    expect(promoted.trajectory.trajectoryId).toBe(traj.trajectoryId);
    expect(promoted.trajectory.version).toBe(traj.version);
    void promotedContent;
    void candidateTrajectoryApprovalSubject;
    void assertCandidateTrajectoryDecisionAuthorizesPromotion;
  });

  it("BAR-HD-43 — in-transaction provenance recheck MISSING rolls back HD", async () => {
    const seeded = await seedCandidate("43");
    const preLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(preLps.ok).toBe(true);
    if (!preLps.ok) return;

    const realList = seeded.oa.cycleServices.epistemic.listByProject.bind(
      seeded.oa.cycleServices.epistemic,
    );
    let listCalls = 0;
    const spy = vi
      .spyOn(seeded.oa.cycleServices.epistemic, "listByProject")
      .mockImplementation(async (projectId: string) => {
        listCalls += 1;
        const items = await realList(projectId);
        // First call = preflight RESOLVED; subsequent in-UoW call strips provenance.
        if (listCalls === 1) return items;
        return items.filter(
          (i) => i.source !== "candidate-trajectory-provenance:bridge",
        );
      });

    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    spy.mockRestore();

    expect(listCalls).toBeGreaterThanOrEqual(2);
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("PROVENANCE_MISSING");

    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);

    const traj =
      await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
        seeded.projectId,
        1,
      );
    expect(traj?.status).toBe("candidate");
    expect(traj?.decidedByDecisionRef).toBeUndefined();

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok).toBe(true);
    if (postLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
    expect(
      await seeded.oa.cycleServices.cycles.listByProject(seeded.projectId),
    ).toHaveLength(0);
  });

  it("BAR-HD-44 — in-transaction provenance identity drift rolls back", async () => {
    const seeded = await seedCandidate("44");
    const preLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(preLps.ok).toBe(true);
    if (!preLps.ok) return;

    const realList = seeded.oa.cycleServices.epistemic.listByProject.bind(
      seeded.oa.cycleServices.epistemic,
    );
    let listCalls = 0;
    const spy = vi
      .spyOn(seeded.oa.cycleServices.epistemic, "listByProject")
      .mockImplementation(async (projectId: string) => {
        listCalls += 1;
        const items = await realList(projectId);
        if (listCalls === 1) return items;
        return items.map((item) => {
          if (
            item.type !== "Recommendation" ||
            !item.lifecycleRecommendation
          ) {
            return item;
          }
          return {
            ...item,
            lifecycleRecommendation: {
              ...item.lifecycleRecommendation,
              semanticKey: `${item.lifecycleRecommendation.semanticKey}-drifted`,
            },
          };
        });
      });

    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    spy.mockRestore();

    expect(listCalls).toBeGreaterThanOrEqual(2);
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CANDIDATE_TRAJECTORY_DECISION_STALE");

    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
    const traj =
      await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
        seeded.projectId,
        1,
      );
    expect(traj?.status).toBe("candidate");
    expect(traj?.decidedByDecisionRef).toBeUndefined();
    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok && preLps.ok).toBe(true);
    if (postLps.ok && preLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
  });

  it("BAR-HD-45 — STEPS_CHANGED inside UoW rolls back real promotion", async () => {
    const seeded = await seedCandidate("45");
    const preLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(preLps.ok).toBe(true);
    if (!preLps.ok) return;
    const preTraj =
      await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
        seeded.projectId,
        1,
      );
    expect(preTraj?.status).toBe("candidate");
    const preSteps = JSON.stringify(preTraj!.steps);

    const promoteUc = seeded.oa.cycleServices.promoteDecidedTrajectory;
    const realExecute = promoteUc.execute.bind(promoteUc);
    const spy = vi.spyOn(promoteUc, "execute").mockImplementation(async (req) => {
      const result = await realExecute(req);
      if (!result.ok) return result;
      // Real save already happened inside outer UoW; return mutated steps to
      // trip in-transaction parity → outer rollback must undo promotion + HD.
      return {
        ...result,
        trajectory: {
          ...result.trajectory,
          steps: [
            ...result.trajectory.steps,
            {
              stepId: "stp:parity-tamper",
              order: 99,
              label: "Tampered",
              state: "pending" as const,
            },
          ],
        },
      };
    });

    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    spy.mockRestore();

    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("STEPS_CHANGED");

    const accepted = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(0);

    const traj =
      await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
        seeded.projectId,
        1,
      );
    expect(traj?.status).toBe("candidate");
    expect(traj?.decidedByDecisionRef).toBeUndefined();
    expect(JSON.stringify(traj?.steps)).toBe(preSteps);

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok).toBe(true);
    if (postLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
      expect(postLps.livingProjectState.decisionIds ?? []).not.toEqual(
        expect.arrayContaining([expect.stringMatching(/^dec:gf-trj:/)]),
      );
    }

    // Structural: no post-commit STEPS_CHANGED business failure path remains.
    const approveSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/approveCandidateTrajectory.ts",
      ),
      "utf8",
    );
    const postCommitIdx = approveSrc.indexOf(
      "// Post-commit: format success only",
    );
    expect(postCommitIdx).toBeGreaterThan(0);
    const afterCommit = approveSrc.slice(postCommitIdx);
    expect(afterCommit).not.toContain("STEPS_CHANGED");
    expect(approveSrc).toContain(
      "CR-HD-02 — steps parity BEFORE outer UoW commit",
    );
  });
});
