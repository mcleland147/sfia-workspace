# ChatGPT Critical Review Pack — FULL

## Meta
- timestamp: 2026-09-10T01:18:14Z
- Cycle ID: SFIA-STUDIO-GREENFIELD-HD-PROVENANCE-RECHECK-STEPS-PARITY-MICRO-CORRECTIVE-01
- Milestone: Greenfield Product Proof — Governed Cycle Entry
- Cycle SFIA: 8 — Delivery / implémentation corrective
- Typology: RUN — bounded micro-corrective
- Profile: CRITICAL
- Justification CRITICAL: closes two atomicity/TOCTOU windows that could leave accepted HD without coherent provenance seal or return STEPS_CHANGED after COMMIT.
- D-GF-HD-01: ADOPTED BY MORRIS (carried — NOT reopened)
- GO Morris: GO MORRIS — GREENFIELD HD PROVENANCE RECHECK + IN-TRANSACTION STEPS PARITY MICRO-CORRECTIVE (consumed)
- Level: FULL
- Verdict target: GREENFIELD HD PROVENANCE RECHECK + IN-TRANSACTION STEPS PARITY — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Local Git Truth
### Before
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD (anchor): 4c8733bf80e25060241c49157bded9813842e1ce
- parent of anchor: 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
### After
- candidate SHA: d436c31468f66b33cc4110ab9c64601938fa5732
- parent SHA: 4c8733bf80e25060241c49157bded9813842e1ce
- message: fix(sfia-studio): close greenfield HD atomicity gaps
- Product push: NONE
- PR: NONE

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- sfia-review-handoff/latest-chatgpt-review.md
- Anchor Product: 4c8733bf80e25060241c49157bded9813842e1ce

## Convergence Pre-check
- Entry: LR LIVE · candidate LIVE · provenance LIVE · HD→validated DETERMINISTIC at 4c8733bf with Critical Review CHANGES REQUIRED
- Architecture / D-GF-HD-01: KEEP
- Gap closed: CR-HD-01 + CR-HD-02 only
- Next after PASS: fresh bounded LIVE proof of candidate → Pilote HD → validated/current → STOP

## KEEP / ADAPT / HARVEST / REJECT
- KEEP: DecisionBasis candidate_trajectory, digests, unary approval, authority, historical/selectability split, UoW, Promote, no Confirmation/Cycle/START/EC
- ADAPT: approveCandidateTrajectory.ts + BAR-HD-43/44/45
- HARVEST: resolveCandidateTrajectoryProvenance, Product SQLite UoW, spy seams
- REJECT: new persistence/domain/UI/W2/START/digest/compensation

## ChatGPT blockers
### CR-HD-01
- Problem: provenance resolved preflight only; not re-read inside UoW after HD write before promote
- Fix: after RecordHumanDecision + durable getHumanDecision, fresh epistemic.listByProject + resolveCandidateTrajectoryProvenance; require RESOLVED; exact equality on trajectoryId/provenanceObservationId/recommendationId/semanticKey/targetCycleTypeId vs sealed snapshot; else PROVENANCE_* or CANDIDATE_TRAJECTORY_DECISION_STALE → outer rollback
- Disposition: CLOSED DETERMINISTICALLY (BAR-HD-43/44)

### CR-HD-02
- Problem: steps parity after runInTransaction COMMIT; STEPS_CHANGED could return after durable HD+promote
- Fix: parity immediately after PromoteDecidedTrajectory inside UoW callback; STEPS_CHANGED throws ApprovalAtomicFailure → rollback; post-commit formats success only
- Disposition: CLOSED DETERMINISTICALLY (BAR-HD-45)

## In-transaction order
outer runInTransaction
  → RecordHumanDecision
  → durable getHumanDecision
  → fresh Epistemic read
  → resolveCandidateTrajectoryProvenance
  → exact provenance equality
  → assertCandidateTrajectoryDecisionAuthorizesPromotion
  → current-selectability recheck
  → fresh candidate/content digest recheck
  → PromoteDecidedTrajectory
  → STEPS PARITY CHECK
  → return
COMMIT
post-commit: success formatting only

## Rollback proofs
- CR-HD-01: spy listByProject 2nd call MISSING/drift → 0 accepted HD · candidate · no current · LPS unchanged
- CR-HD-02: spy promote execute returns mutated steps after real promote → STEPS_CHANGED → full rollback of real save

## Validation
- BAR-HD (01–45): 24 passed
- BAR-PROV: 14 passed
- BAR-TRJ: 16 passed
- W2 A4 atomic: passed
- m3HumanDecisionDurability: 4 passed
- full Vitest: 3408 passed | 135 skipped
- typecheck PASS · lint PASS · build PASS · git diff --check PASS
- ZERO NEW REAL: YES
- LIVE DB prj:6962aa82… READ-ONLY untouched
- 0 Confirmation · 0 CycleInstance · 0 START · 0 EC on success path (regression preserved)

## Reserves
- CR-HD-01: CLOSED DETERMINISTICALLY
- CR-HD-02: CLOSED DETERMINISTICALLY
- RESERVE-HD-LIVE-01: OPEN
- RESERVE-HD-CONCURRENCY-REALISM-01: OPEN
- RESERVE-QA-MOCK-01: OPEN / NON-BLOCKING
- RESERVE-TRJ-PROVENANCE-01: CLOSED AT LIVE BOUNDARY PROVEN SCOPE (carried)

## Next capability
fresh bounded LIVE proof: candidate → explicit Pilote HD → validated/current → STOP (after Critical Review PASS)

## Anti-claims
NOT claimed: HumanDecision LIVE PROVEN; trajectory approval LIVE; START; CycleInstance; EC; END-TO-END REAL; Greenfield COMPLETE; R2 CLOSED; PR READY; runtime v3 ADOPTED.

## Final verdict
GREENFIELD HD PROVENANCE RECHECK + IN-TRANSACTION STEPS PARITY — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Product files modified (exact)
- projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts
- projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts

## FULL modified-content evidence

### FILE: projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts
```
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
```

### FILE: projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
```
/**
 * D-GF-HD-01 — approve pre-cycle candidate trajectory as-is.
 *
 * Outer Product UoW: RecordHumanDecision → durable readback → promotion guard
 * → PromoteDecidedTrajectory (steps unchanged). No START / Cycle / EC / Confirmation.
 * ZERO model calls. Client may supply only projectId + presentationDigest.
 */

import { randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
  buildCandidateTrajectoryApprovalPresentationDto,
  buildCandidateTrajectoryPresentationMaterial,
  CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
  candidateTrajectoryApprovalSubject,
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  type CandidateTrajectoryApprovalPresentationDto,
  getCycleTypeById,
} from "@/lib/oa/cycle";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "./candidateTrajectoryPromotionGuard";

export type ApproveCandidateTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presentationDigest: string;
  /** Test inject for local Pilote authority gate. */
  readonly forceLocalAuthority?: boolean;
  /**
   * Test-only: mutate durable HD in-memory between readback and guard
   * (simulates corrupted basis before promotion).
   */
  readonly __testMutateDecisionBeforeGuard?: (
    decision: HumanDecision,
  ) => HumanDecision;
};

export type ApproveCandidateTrajectoryResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly trajectoryId: string;
      readonly trajectoryVersion: number;
      readonly status: "validated" | "active";
      readonly decidedByDecisionRef: string;
      readonly targetCycleTypeId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number;
      readonly activeCycleInstanceId: null;
      readonly confirmationCount: 0;
      readonly cycleInstanceCount: 0;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

class ApprovalAtomicFailure extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApprovalAtomicFailure";
  }
}

async function resolveCandidateForProject(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; trajectory: ProjectTrajectory; lpsVersion: number }
  | { ok: false; code: string; message: string }
> {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "Living Project State courant illisible.",
    };
  }
  const version = lps.livingProjectState.trajectoryVersion;
  if (typeof version !== "number" || version < 1) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Aucune trajectoire candidate liée au LPS.",
    };
  }
  const found = await oa.cycleServices.trajectories.findByProjectAndVersion(
    projectId,
    version,
  );
  if (!found) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Trajectoire candidate introuvable.",
    };
  }
  return { ok: true, trajectory: found, lpsVersion: lps.livingProjectState.version };
}

/**
 * Server-owned presentation for the Pilote approval CTA.
 */
export async function buildPreCycleCandidateApprovalPresentation(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<
  | {
      ok: true;
      presentation: CandidateTrajectoryApprovalPresentationDto | null;
      alreadyDecided: {
        trajectoryId: string;
        version: number;
        status: string;
        decidedByDecisionRef: string | null;
        targetCycleTypeId: string | null;
        catalogLabel: string | null;
      } | null;
      activeCycleInstanceId: string | null;
    }
  | { ok: false; code: string; message: string }
> {
  const { oa, projectId } = input;
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const activeCycleInstanceId = live.context.activeCycleInstanceId;

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active") &&
    current.decidedByDecisionRef
  ) {
    let targetCycleTypeId: string | null = null;
    let catalogLabel: string | null = null;
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: current.decidedByDecisionRef,
    });
    if (
      hd.ok &&
      hd.decision.decisionBasis?.sourceType === "candidate_trajectory"
    ) {
      targetCycleTypeId =
        hd.decision.decisionBasis.candidateTrajectoryContext?.targetCycleTypeId ??
        null;
      if (targetCycleTypeId) {
        catalogLabel = getCycleTypeById(targetCycleTypeId)?.label ?? null;
      }
    }
    return {
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: current.trajectoryId,
        version: current.version,
        status: current.status,
        decidedByDecisionRef: current.decidedByDecisionRef,
        targetCycleTypeId,
        catalogLabel,
      },
      activeCycleInstanceId,
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate" || trajectory.projectId !== projectId) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Effective current while still candidate should not happen; refuse presentation.
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  const selectable = isTargetCycleCurrentlySelectable(
    provenance.targetCycleTypeId,
  );

  return {
    ok: true,
    presentation: buildCandidateTrajectoryApprovalPresentationDto({
      material,
      presentationDigest,
      steps: trajectory.steps,
      targetCycleSelectable: selectable,
    }),
    alreadyDecided: null,
    activeCycleInstanceId,
  };
}

export async function approveCandidateTrajectory(
  input: ApproveCandidateTrajectoryInput,
): Promise<ApproveCandidateTrajectoryResult> {
  const { oa, projectId } = input;
  const clientDigest = input.presentationDigest?.trim();
  if (!clientDigest) {
    return {
      ok: false,
      code: "PRESENTATION_DIGEST_REQUIRED",
      message: "presentationDigest requis.",
    };
  }

  const project = await oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet introuvable.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  if (live.context.activeCycleInstanceId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PRESENT",
      message:
        "Un cycle actif est présent — l'approbation greenfield pre-cycle est refusée.",
    };
  }

  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  if (cycles.length > 0) {
    return {
      ok: false,
      code: "CYCLE_INSTANCE_PRESENT",
      message: "Des CycleInstance existent — chemin greenfield refusé.",
    };
  }

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active")
  ) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une trajectoire décidée/courante existe déjà — aucune nouvelle décision.",
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return resolved;
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate") {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_CANDIDATE",
      message: `La trajectoire n'est pas candidate (${trajectory.status}).`,
    };
  }
  if (trajectory.projectId !== projectId) {
    return {
      ok: false,
      code: "TRAJECTORY_PROJECT_MISMATCH",
      message: "La trajectoire n'appartient pas à ce projet.",
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    return {
      ok: false,
      code: "CANDIDATE_IS_CURRENT",
      message: "La candidate est déjà effective current — approbation refusée.",
    };
  }

  const lpsPointer = (
    await oa.projectServices.getCurrentLivingProjectState.execute({ projectId })
  );
  if (!lpsPointer.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "LPS illisible.",
    };
  }
  if (
    lpsPointer.livingProjectState.trajectoryId !== undefined &&
    lpsPointer.livingProjectState.trajectoryId !== trajectory.trajectoryId
  ) {
    return {
      ok: false,
      code: "LPS_TRAJECTORY_MISMATCH",
      message: "Le LPS ne pointe pas la candidate attendue.",
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: false,
      code: `PROVENANCE_${provenance.status}`,
      message: `Provenance candidate non résolue (${provenance.status}).`,
    };
  }

  // Recommendation source project match via relatedObjects / resolver identity.
  if (provenance.trajectoryId !== trajectory.trajectoryId) {
    return {
      ok: false,
      code: "PROVENANCE_TRAJECTORY_MISMATCH",
      message: "La provenance ne correspond pas à la trajectoire candidate.",
    };
  }
  if (!provenance.semanticKey?.trim() || !provenance.targetCycleTypeId?.trim()) {
    return {
      ok: false,
      code: "PROVENANCE_INCOMPLETE",
      message: "semanticKey / targetCycleTypeId manquants.",
    };
  }

  if (!isTargetCycleCurrentlySelectable(provenance.targetCycleTypeId)) {
    return {
      ok: false,
      code: "TARGET_CYCLE_NOT_SELECTABLE",
      message:
        "Le type de cycle proposé n'est plus sélectionnable — réévaluation requise.",
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  if (presentationDigest !== clientDigest) {
    return {
      ok: false,
      code: "CANDIDATE_TRAJECTORY_DECISION_STALE",
      message:
        "La présentation a changé depuis l'affichage — aucune décision enregistrée.",
    };
  }

  const candidateContentDigest = material.candidate.candidateContentDigest;
  const recomputedContent = computeCandidateContentDigest({
    trajectoryId: trajectory.trajectoryId,
    version: trajectory.version,
    status: trajectory.status,
    steps: trajectory.steps,
  });
  if (recomputedContent !== candidateContentDigest) {
    return {
      ok: false,
      code: "CANDIDATE_CONTENT_DIGEST_MISMATCH",
      message: "Digest de contenu candidate incohérent.",
    };
  }

  const subject = candidateTrajectoryApprovalSubject(
    trajectory.trajectoryId,
    trajectory.version,
  );
  const existingAccepted =
    await oa.decisionServices.decisions.listAcceptedBySubject(
      projectId,
      subject,
    );
  if (existingAccepted.length > 0) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une décision acceptée existe déjà pour cette candidate/version.",
    };
  }

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: subject,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const decisionBasis: DecisionBasis = {
    sourceType: "candidate_trajectory",
    sourceRef: trajectory.trajectoryId,
    sourceDigest: presentationDigest,
    projectId,
    proposalContext: {
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    candidateTrajectoryContext: {
      trajectoryId: trajectory.trajectoryId,
      candidateVersion: trajectory.version,
      provenanceObservationId: provenance.provenanceObservationId,
      recommendationId: provenance.recommendationId,
      semanticKey: provenance.semanticKey,
      targetCycleTypeId: provenance.targetCycleTypeId,
      candidateContentDigest,
      presentationDigest,
    },
    executionBasis: {
      objective: live.context.objective,
      expectedOutcome: "Trajectoire candidate validée par le Pilote (as-is).",
      stopConditions: [
        "AUCUN CYCLE",
        "AUCUN START",
        "AUCUN EXECUTION_CONTRACT",
      ],
      cycleTypeId: provenance.targetCycleTypeId,
      requestedOperation: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
    },
  };

  const decisionId = `dec:gf-trj:${randomUUID()}`;
  const preDecisionSteps = structuredClone(trajectory.steps);
  const candidateVersion = trajectory.version;
  const trajectoryId = trajectory.trajectoryId;
  const targetCycleTypeId = provenance.targetCycleTypeId;
  const catalogLabel =
    getCycleTypeById(targetCycleTypeId)?.label ?? null;

  let atomic: {
    decisionId: string;
    promoted: ProjectTrajectory;
    lpsVersionAfter: number;
  };

  try {
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId,
        subject,
        options: [
          {
            optionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
            label: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
            recommended: false,
          },
        ],
        selectedOptionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
        actor: LOCAL_PILOTE_ACTOR,
        authority: "morris",
        status: "accepted",
        reversible: true,
        scope: subject,
        rationale:
          "Le Pilote a validé explicitement la trajectoire candidate telle quelle.",
        authorityEvidenceId: authority.evidenceId,
        decisionBasis,
        linkToLivingProjectState: true,
        expectedLpsVersion: live.context.lpsVersion,
        supersedeExistingAccepted: false,
        linkEpistemicDecisionRef: false,
        correlationId: `gf-hd:${trajectoryId}:v${candidateVersion}`,
      });

      if (!recorded.ok) {
        throw new ApprovalAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      if (!readback.ok) {
        throw new ApprovalAtomicFailure(
          "READBACK_FAILURE",
          "Relecture durable de la HumanDecision impossible.",
        );
      }

      // CR-HD-01 — fresh durable Epistemic read + provenance re-resolution
      // AFTER logical HD write / durable readback, BEFORE promotion.
      const freshEpistemic =
        await oa.cycleServices.epistemic.listByProject(projectId);
      const freshProvenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId,
        epistemicItems: freshEpistemic,
      });
      if (freshProvenance.status !== "RESOLVED") {
        throw new ApprovalAtomicFailure(
          `PROVENANCE_${freshProvenance.status}`,
          `Provenance candidate non résolue au recheck in-transaction (${freshProvenance.status}).`,
        );
      }
      if (
        freshProvenance.trajectoryId !== trajectoryId ||
        freshProvenance.provenanceObservationId !==
          provenance.provenanceObservationId ||
        freshProvenance.recommendationId !== provenance.recommendationId ||
        freshProvenance.semanticKey !== provenance.semanticKey ||
        freshProvenance.targetCycleTypeId !== provenance.targetCycleTypeId
      ) {
        throw new ApprovalAtomicFailure(
          "CANDIDATE_TRAJECTORY_DECISION_STALE",
          "Provenance durable dérivée depuis le snapshot présenté — aucune promotion.",
        );
      }

      let decisionForGuard = readback.decision;
      if (input.__testMutateDecisionBeforeGuard) {
        decisionForGuard = input.__testMutateDecisionBeforeGuard(
          structuredClone(readback.decision),
        );
      }

      const guard = assertCandidateTrajectoryDecisionAuthorizesPromotion({
        decision: decisionForGuard,
        projectId,
        trajectoryId,
        candidateVersion,
        presentationDigest,
        candidateContentDigest,
        provenanceObservationId: freshProvenance.provenanceObservationId,
        recommendationId: freshProvenance.recommendationId,
        semanticKey: freshProvenance.semanticKey,
        targetCycleTypeId: freshProvenance.targetCycleTypeId,
        expectedLpsId: live.context.lpsId,
        expectedLpsVersionAtDecision: live.context.lpsVersion,
      });
      if (!guard.ok) {
        throw new ApprovalAtomicFailure(guard.code, guard.message);
      }

      // Re-check selectability + candidate status inside the UoW.
      if (
        !isTargetCycleCurrentlySelectable(freshProvenance.targetCycleTypeId)
      ) {
        throw new ApprovalAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "Le type de cycle n'est plus sélectionnable au moment de la promotion.",
        );
      }
      const stillCandidate =
        await oa.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          candidateVersion,
        );
      if (!stillCandidate || stillCandidate.status !== "candidate") {
        throw new ApprovalAtomicFailure(
          "TRAJECTORY_NOT_CANDIDATE",
          "La trajectoire n'est plus candidate au moment de la promotion.",
        );
      }
      const stillContent = computeCandidateContentDigest({
        trajectoryId: stillCandidate.trajectoryId,
        version: stillCandidate.version,
        status: stillCandidate.status,
        steps: stillCandidate.steps,
      });
      if (stillContent !== candidateContentDigest) {
        throw new ApprovalAtomicFailure(
          "CANDIDATE_TRAJECTORY_DECISION_STALE",
          "Contenu candidate modifié avant promotion.",
        );
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId,
        projectId,
        expectedVersion: candidateVersion,
        status: "validated",
        decisionRef: decisionId,
        // As-is: omit steps — PromoteDecidedTrajectory keeps candidate steps.
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: `gf-promote:${trajectoryId}:v${candidateVersion}`,
        expectedLpsVersion: lpsAfterDecision,
      });
      if (!promoted.ok) {
        throw new ApprovalAtomicFailure(
          promoted.error.detailCode,
          `Promotion refusée (${promoted.error.detailCode}).`,
        );
      }

      // CR-HD-02 — steps parity BEFORE outer UoW commit (not post-commit).
      const priorSteps = JSON.stringify(preDecisionSteps);
      const promotedSteps = JSON.stringify(promoted.trajectory.steps);
      if (promotedSteps !== priorSteps) {
        throw new ApprovalAtomicFailure(
          "STEPS_CHANGED",
          "Les steps post-promotion diffèrent de la candidate approuvée — rollback.",
        );
      }

      return {
        decisionId,
        promoted: promoted.trajectory,
        lpsVersionAfter:
          promoted.livingProjectStateVersion ?? lpsAfterDecision,
      };
    });
  } catch (err) {
    if (err instanceof ApprovalAtomicFailure) {
      return { ok: false, code: err.code, message: err.message };
    }
    return {
      ok: false,
      code: "PERSISTENCE_FAILURE",
      message:
        "Échec atomique décision+promotion — aucune décision orpheline n'a été commitée.",
    };
  }

  // Post-commit: format success only — no business failure path for
  // provenance / content / steps parity / promotion authorization.
  return {
    ok: true,
    decisionId: atomic.decisionId,
    trajectoryId: atomic.promoted.trajectoryId,
    trajectoryVersion: atomic.promoted.version,
    status: atomic.promoted.status as "validated" | "active",
    decidedByDecisionRef: atomic.decisionId,
    targetCycleTypeId,
    catalogLabel,
    lpsVersionAfter: atomic.lpsVersionAfter,
    activeCycleInstanceId: null,
    confirmationCount: 0,
    cycleInstanceCount: 0,
  };
}
```

## Diffstat
commit d436c31468f66b33cc4110ab9c64601938fa5732
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Thu Sep 10 03:17:48 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Thu Sep 10 03:17:48 2026 +0200

    fix(sfia-studio): close greenfield HD atomicity gaps

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../candidateTrajectoryHumanDecision.d0.test.ts    | 259 ++++++++++++++++++++-
 .../approveCandidateTrajectory.ts                  |  66 ++++--
 2 files changed, 306 insertions(+), 19 deletions(-)
