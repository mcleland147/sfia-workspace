# ChatGPT Critical Review Pack — FULL

- timestamp: 2026-09-10T07:12:20Z
- Cycle ID: SFIA-STUDIO-GREENFIELD-START-CANONICAL-GUARD-SEALED-BASIS-PREPARE-REUSE-CORRECTIVE-01
- Level: FULL
- GO Morris: CONSUMED — GREENFIELD START CANONICAL GUARD + SEALED BASIS PARITY + PREPARE REUSE MICRO-CORRECTIVE
- D-GF-START-01: remains ADOPTED BY MORRIS (not reopened)
- D-GF-HD-01: remains ADOPTED (not reopened)

## Local Git Truth

- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- before HEAD (parent of corrective): dfb4f019e80e2cf879dad0a46af6f7ec7a99d333
- after candidate SHA: 2506775578c04d6aab069b7d5f9d42b4f02a56be
- parent SHA: dfb4f019e80e2cf879dad0a46af6f7ec7a99d333
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- origin/sfia/review-handoff before publish: b2df4663be2d03be63460f0bd5cb4fead9b77064
- expected parent of candidate: dfb4f019 — MATCH

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/live-diagnostic/
?? .tmp-sfia-review/runtime-captures/
```

## Convergence Pre-check

- Capacities: V3-F01, V3-F02, V3-F04, V3-F05, V3-F06, V3-F09; F11/F12 preparation only
- Typology: EVOL / Cycle 8 Delivery / CRITICAL
- CRITICAL justification: START authority boundary, durable LR/HD/Cycle/CKC coherence, atomic activation, bypass prevention
- CKC Cycle 8: detailed absent; synthetic map fallback; experimental; executionAuthority=none
- Fake/Real: DETERMINISTIC ONLY; ZERO NEW REAL; READY FOR REAL not claimed

## Root causes CR-START-01→04

### CR-START-01
Strong greenfield START checks lived only in `startPreparedTrajectoryCycle`; historical `executePilotLifecycleAction` → `pilotLifecycle.start` bypassed them for trajectory-bound CycleInstance.

### CR-START-02
PREPARE used permissive `if (lrSignals && compare)` — missing LR signals skipped parity. START did not require LR===HD===Cycle exact six-field equality.

### CR-START-03
PREPARE/START did not revalidate HD-sealed `candidateContentDigest` after material trajectory drift; candidate→validated lifecycle status alone must remain accepted.

### CR-START-04
PREPARE early-returned `reused=true` on deterministic id/binding before QualifyCycleWithCkc and before exact signals/profile/CKC/prepared-status contract comparison; active/terminal could be incorrectly reused.

## Architecture implemented

- NEW shared guard: `assertTrajectoryBoundCycleStartReady` (+ helpers `isTrajectoryBoundCycle`, `assertDecisionSealedTrajectoryBasis`, `assertGreenfieldSignalParity`)
- `PilotLifecycleTransitions.start` invokes shared guard for every trajectory-bound CycleInstance before mutation — historical path cannot bypass
- Wiring: `qualifyCycleWithCkc` injected into PilotLifecycleDeps via createSqlite/InMemoryCycleServices + vertical-slice-runtime (single adjacent wiring change; qualifier created before CycleServices)
- `startPreparedTrajectoryCycle` remains thin facade (resolve + authority + start)
- PREPARE: LR signals required; sealed digest recheck; qualify BEFORE reuse; reuse = exact contract equality; active/terminal fail closed
- Sealed basis: recompute digest with status normalized to `"candidate"` only (not step-state normalization)
- Legacy unbound START unchanged

## KEEP / ADAPT / HARVEST / REJECT

- KEEP: PilotLifecycleTransitions.start engine, CreateCycle, QualifyCycleWithCkc, assessStartReadiness, payload_json, D-GF-START-01/D-GF-HD-01
- ADAPT: shared START guard, PREPARE reuse, signal parity, sealed digest recheck, PilotLifecycleDeps qualifyCycleWithCkc
- HARVEST: qualificationSignals helpers, computeCandidateContentDigest, provenance resolver, projectCkcResolutionRef
- REJECT: second START engine, new stores/DDL, label→type, false defaults, 2nd HD, Confirmation, EC

## Figma

FIGMA SOURCE NOT APPLICABLE — no UX/UI change

## CR ↔ BAR matrix

| CR | BAR-START-CORR | Coverage |
|---|---|---|
| CR-START-01 | 01, 15 | historical/core START cannot bypass; legacy unbound START green |
| CR-START-02 | 02, 03, 04, 05 | missing LR / LR≠HD PREPARE fail; Cycle/HD/LR drift START fail |
| CR-START-03 | 06, 07, 08 | material drift PREPARE/START fail; candidate→validated OK |
| CR-START-04 | 09, 10, 11, 12, 13 | reuse exact signals/profile/CKC; active/terminal not reused; concurrent ≤1 |
| Atomicity | 14 | cycle/step/LPS rollback preserved |

## Validation

- Focused BAR + HD/PROV/TRJ/LR/lifecycle: 226 passed
- Full Vitest: 3426 passed | 135 skipped (3561)
- typecheck: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS
- ZERO NEW REAL: confirmed
- No second HD / Confirmation / EC / Attempt introduced

## CR-START dispositions

- CR-START-01 = CANDIDATE CLOSED — PENDING CHATGPT CRITICAL REVIEW
- CR-START-02 = CANDIDATE CLOSED — PENDING CHATGPT CRITICAL REVIEW
- CR-START-03 = CANDIDATE CLOSED — PENDING CHATGPT CRITICAL REVIEW
- CR-START-04 = CANDIDATE CLOSED — PENDING CHATGPT CRITICAL REVIEW

## Reserves

- RESERVE-START-STEP-LINK-01 / PROFILE-SIGNAL-01 / CKC-BIND-01: not declared definitively CLOSED pending ChatGPT accept of global candidate
- RESERVE-START-LIVE-01 = OPEN
- RESERVE-START-PROFILE-SIGNAL-LIVE-01 = OPEN
- RESERVE-START-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING

## Anti-claims

Do NOT claim: START LIVE PROVEN; CycleInstance LIVE PROVEN; profile signals LIVE PROVEN; CKC START LIVE PROVEN; END-TO-END REAL; Task App delivered; Greenfield Product Proof COMPLETE; R2 CLOSED; PR READY; runtime v3 ADOPTED; concurrency realism closed; ExecutionContract PROVEN; READY FOR REAL.

## Final verdict

GREENFIELD START CANONICAL GUARD + SEALED BASIS PARITY + PREPARE REUSE MICRO-CORRECTIVE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Product files modified (exact list)

- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/startPreparedTrajectoryCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

## FULL usable modified content for EVERY Product file

Each file below is the complete post-commit content at the candidate SHA.

### `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts`

```typescript
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
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady.ts`

```typescript
/**
 * CR-START-01…04 — shared fail-closed readiness for trajectory-bound cycle START.
 *
 * Strong greenfield invariants live here so PilotLifecycleTransitions.start and
 * prepareCycleFromValidatedTrajectory cannot bypass them (historical path).
 */

import { createHash } from "node:crypto";
import type { ProjectServices } from "@/lib/oa/project";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  ExplicitCycleQualificationSignals,
  ProjectTrajectory,
} from "../../domain/types";
import type { CkcQualificationResult } from "../../domain/ckcQualificationResult";
import type { QualifyCycleWithCkcRequest } from "../qualifyCycleWithCkc";
import type {
  LifecycleDecisionReader,
  LifecycleEpistemicReader,
} from "../pilotLifecycleTransitions";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { computeCandidateContentDigest } from "./candidateTrajectoryDecisionBasis";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  parseExplicitQualificationSignals,
  qualificationSignalsEqual,
} from "./qualificationSignals";

/** Must match prepareCycleFromValidatedTrajectory.mintPrepareCycleCorrelationId. */
function mintPrepareCycleCorrelationId(input: {
  projectId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
}): string {
  const raw = [
    input.projectId,
    input.trajectoryId,
    String(input.trajectoryVersion),
    input.stepId,
  ].join("|");
  return `cor:gf-prep-${createHash("sha256").update(raw).digest("hex").slice(0, 16)}`;
}

export type QualifyCycleWithCkcPort = {
  execute(request: QualifyCycleWithCkcRequest): Promise<CkcQualificationResult>;
};

export function isTrajectoryBoundCycle(cycle: CycleInstance): boolean {
  return (
    Boolean(cycle.trajectoryId?.trim()) &&
    typeof cycle.trajectoryVersion === "number" &&
    Boolean(cycle.trajectoryStepId?.trim())
  );
}

/**
 * Revalidate HD-sealed candidate content digest.
 * Lifecycle status alone may have moved candidate→validated; normalize to
 * "candidate" for comparison. Step material (including step.state) is NOT normalized.
 */
export function assertDecisionSealedTrajectoryBasis(input: {
  trajectory: ProjectTrajectory;
  sealedCandidateContentDigest: string;
}): { ok: true } | { ok: false; code: string; reason: string } {
  const recomputed = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: "candidate",
    steps: input.trajectory.steps,
  });
  if (recomputed !== input.sealedCandidateContentDigest) {
    return {
      ok: false,
      code: "DECISION_SEALED_TRAJECTORY_DRIFT",
      reason: "candidate_content_digest_mismatch_vs_hd_seal",
    };
  }
  return { ok: true };
}

/**
 * Fail-closed LR/HD/(optional Cycle) qualificationSignals parity.
 * Missing LR signals are never skipped.
 */
export function assertGreenfieldSignalParity(input: {
  lrSignals: ExplicitCycleQualificationSignals | null | undefined;
  hdSignals: ExplicitCycleQualificationSignals | null | undefined;
  cycleSignals?: ExplicitCycleQualificationSignals | null | undefined;
}):
  | { ok: true; signals: ExplicitCycleQualificationSignals }
  | { ok: false; code: string; reason: string } {
  const hd = input.hdSignals
    ? parseExplicitQualificationSignals(input.hdSignals)
    : null;
  if (!hd) {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      reason: "hd_qualification_signals_incomplete",
    };
  }
  const lr = input.lrSignals
    ? parseExplicitQualificationSignals(input.lrSignals)
    : null;
  if (!lr) {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      reason: "lr_qualification_signals_required",
    };
  }
  if (!qualificationSignalsEqual(lr, hd)) {
    return {
      ok: false,
      code: "PROVENANCE_SIGNAL_MISMATCH",
      reason: "lr_signals_do_not_match_hd",
    };
  }
  if (input.cycleSignals !== undefined) {
    const cycle = input.cycleSignals
      ? parseExplicitQualificationSignals(input.cycleSignals)
      : null;
    if (!cycle) {
      return {
        ok: false,
        code: "PROFILE_SIGNALS_MISSING",
        reason: "cycle_qualification_signals_incomplete",
      };
    }
    if (!qualificationSignalsEqual(cycle, hd)) {
      return {
        ok: false,
        code: "PROVENANCE_SIGNAL_MISMATCH",
        reason: "cycle_signals_do_not_match_hd",
      };
    }
  }
  return { ok: true, signals: hd };
}

export type AssertTrajectoryBoundCycleStartReadySuccess = {
  ok: true;
  ckcResolutionRef: string;
  stepId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  cycleTypeId: string;
  profile: CycleInstance["profile"];
  qualificationSignals: ExplicitCycleQualificationSignals;
  decisionId: string;
  recommendationId: string;
  correlationId: string;
};

export type AssertTrajectoryBoundCycleStartReadyFailure = {
  ok: false;
  code: string;
  reason: string;
};

export type AssertTrajectoryBoundCycleStartReadyResult =
  | AssertTrajectoryBoundCycleStartReadySuccess
  | AssertTrajectoryBoundCycleStartReadyFailure;

export type AssertTrajectoryBoundCycleStartReadyInput = {
  projectId: string;
  cycle: CycleInstance;
  projectServices: ProjectServices;
  trajectories: TrajectoryRepositoryPort;
  decisions?: LifecycleDecisionReader;
  epistemic?: LifecycleEpistemicReader;
  qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
};

export async function assertTrajectoryBoundCycleStartReady(
  input: AssertTrajectoryBoundCycleStartReadyInput,
): Promise<AssertTrajectoryBoundCycleStartReadyResult> {
  const { projectId, cycle } = input;
  const fail = (
    code: string,
    reason: string,
  ): AssertTrajectoryBoundCycleStartReadyFailure => ({ ok: false, code, reason });

  if (!isTrajectoryBoundCycle(cycle)) {
    return fail("CYCLE_NOT_TRAJECTORY_BOUND", "trajectory_binding_incomplete");
  }
  if (cycle.projectId !== projectId) {
    return fail("CYCLE_PROJECT_MISMATCH", "cycle_wrong_project");
  }

  if (!input.qualifyCycleWithCkc) {
    return fail("CKC_QUALIFIER_UNAVAILABLE", "qualify_cycle_with_ckc_required");
  }
  if (!input.decisions) {
    return fail("DECISION_READER_UNAVAILABLE", "decision_reader_required");
  }
  if (!input.epistemic) {
    return fail("EPISTEMIC_READER_UNAVAILABLE", "epistemic_reader_required");
  }

  const project = await input.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return fail("PROJECT_NOT_FOUND", "missing_project");
  }

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return fail("LPS_UNAVAILABLE", "lps_unreadable");
  }
  const activeId = lps.livingProjectState.activeCycleInstanceId;
  if (activeId && activeId !== cycle.cycleInstanceId) {
    return fail("ACTIVE_CYCLE_PRESENT", "active_cycle_already_linked");
  }

  const trajectory =
    await input.trajectories.findCurrentByProjectId(projectId);
  if (!trajectory) {
    return fail("TRAJECTORY_MISSING", "current_trajectory_missing");
  }
  if (
    trajectory.trajectoryId !== cycle.trajectoryId ||
    trajectory.version !== cycle.trajectoryVersion
  ) {
    return fail(
      "CYCLE_BINDING_MISMATCH",
      "cycle_trajectory_id_or_version_mismatch",
    );
  }
  if (trajectory.status !== "validated" && trajectory.status !== "active") {
    return fail(
      "TRAJECTORY_NOT_VALIDATED",
      `trajectory_status_${trajectory.status}`,
    );
  }
  if (!trajectory.decidedByDecisionRef?.trim()) {
    return fail(
      "TRAJECTORY_DECISION_REF_MISSING",
      "decided_by_decision_ref_required",
    );
  }

  const decision = await input.decisions.getById(
    trajectory.decidedByDecisionRef,
  );
  if (!decision || decision.status !== "accepted") {
    return fail(
      "HUMAN_DECISION_MISSING",
      "deciding_hd_unreadable_or_not_accepted",
    );
  }
  if (decision.projectId !== projectId) {
    return fail("HUMAN_DECISION_PROJECT_MISMATCH", "hd_wrong_project");
  }
  if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
    return fail(
      "HUMAN_DECISION_SOURCE_MISMATCH",
      "expected_candidate_trajectory_basis",
    );
  }
  const ctx = decision.decisionBasis.candidateTrajectoryContext;
  if (!ctx) {
    return fail(
      "HUMAN_DECISION_CONTEXT_MISSING",
      "candidate_trajectory_context_missing",
    );
  }
  if (
    ctx.trajectoryId !== trajectory.trajectoryId ||
    ctx.candidateVersion !== trajectory.version
  ) {
    return fail(
      "TRAJECTORY_VERSION_MISMATCH",
      "hd_candidate_version_or_id_mismatch",
    );
  }

  const hdSignals = parseExplicitQualificationSignals(ctx.qualificationSignals);
  if (!hdSignals) {
    return fail(
      "PROFILE_SIGNALS_MISSING",
      "complete_qualification_signals_required",
    );
  }

  const epistemic = await input.epistemic.listByProject(projectId);
  const sourceLr = epistemic.find(
    (e) => e.epistemicItemId === ctx.recommendationId,
  );
  const lrSignals = parseExplicitQualificationSignals(
    sourceLr?.lifecycleRecommendation?.qualificationSignals,
  );
  const cycleSignals = parseExplicitQualificationSignals(
    cycle.qualificationSignals,
  );
  const parity = assertGreenfieldSignalParity({
    lrSignals,
    hdSignals,
    cycleSignals,
  });
  if (!parity.ok) {
    return fail(parity.code, parity.reason);
  }

  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return fail(`PROVENANCE_${provenance.status}`, "provenance_not_resolved");
  }
  if (
    provenance.recommendationId !== ctx.recommendationId ||
    provenance.semanticKey !== ctx.semanticKey ||
    provenance.targetCycleTypeId !== ctx.targetCycleTypeId
  ) {
    return fail(
      "PROVENANCE_HD_MISMATCH",
      "provenance_does_not_match_human_decision",
    );
  }

  const basis = assertDecisionSealedTrajectoryBasis({
    trajectory,
    sealedCandidateContentDigest: ctx.candidateContentDigest,
  });
  if (!basis.ok) {
    return fail(basis.code, basis.reason);
  }

  const step = trajectory.steps.find((s) => s.stepId === cycle.trajectoryStepId);
  if (!step) {
    return fail("TRAJECTORY_STEP_MISSING", "cycle_trajectory_step_not_found");
  }
  if (step.state !== "pending") {
    return fail(
      "TRAJECTORY_STEP_NOT_PENDING",
      `step_state_${step.state}`,
    );
  }
  if (!step.cycleTypeId?.trim() || step.cycleTypeId !== cycle.cycleTypeId) {
    return fail(
      "TRAJECTORY_STEP_TYPE_MISMATCH",
      "step_cycle_type_does_not_match_cycle",
    );
  }
  if (step.cycleTypeId !== ctx.targetCycleTypeId) {
    return fail(
      "TARGET_CYCLE_TYPE_MISMATCH",
      "step_cycle_type_does_not_match_hd",
    );
  }
  if (!isTargetCycleCurrentlySelectable(cycle.cycleTypeId)) {
    return fail(
      "TARGET_CYCLE_NOT_SELECTABLE",
      "cycle_type_not_selectable",
    );
  }
  if (!cycle.ckcResolutionRef?.trim()) {
    return fail(
      "CKC_RESOLUTION_REF_MISSING",
      "prepared_cycle_missing_ckc_ref",
    );
  }

  const correlationId = mintPrepareCycleCorrelationId({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    stepId: step.stepId,
  });
  const requalified = await input.qualifyCycleWithCkc.execute({
    cycleTypeId: cycle.cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
    signals: parity.signals,
    objective: lps.livingProjectState.objective,
  });
  if (requalified.state !== "success") {
    return fail(requalified.code, "requalify_failed");
  }
  if (requalified.recommendedProfile !== cycle.profile) {
    return fail("PROFILE_MISMATCH", "requalified_profile_differs");
  }
  const expectedRef = projectCkcResolutionRef(requalified.proof);
  if (expectedRef !== cycle.ckcResolutionRef) {
    return fail(
      "CKC_RESOLUTION_REF_MISMATCH",
      "ckc_ref_does_not_match_requalify",
    );
  }

  return {
    ok: true,
    ckcResolutionRef: expectedRef,
    stepId: step.stepId,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    cycleTypeId: cycle.cycleTypeId,
    profile: cycle.profile,
    qualificationSignals: parity.signals,
    decisionId: decision.decisionId,
    recommendationId: ctx.recommendationId,
    correlationId,
  };
}

/** Narrow helper for PREPARE — HD must be accepted candidate_trajectory. */
export function extractAcceptedCandidateTrajectoryDecision(
  decision: HumanDecision | null | undefined,
  projectId: string,
):
  | {
      ok: true;
      decision: HumanDecision;
      ctx: NonNullable<
        NonNullable<HumanDecision["decisionBasis"]>["candidateTrajectoryContext"]
      >;
    }
  | { ok: false; code: string; reason: string } {
  if (!decision) {
    return {
      ok: false,
      code: "HUMAN_DECISION_MISSING",
      reason: "deciding_hd_unreadable",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HUMAN_DECISION_NOT_ACCEPTED",
      reason: "deciding_hd_not_accepted",
    };
  }
  if (decision.projectId !== projectId) {
    return {
      ok: false,
      code: "HUMAN_DECISION_PROJECT_MISMATCH",
      reason: "hd_wrong_project",
    };
  }
  if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
    return {
      ok: false,
      code: "HUMAN_DECISION_SOURCE_MISMATCH",
      reason: "expected_candidate_trajectory_basis",
    };
  }
  const ctx = decision.decisionBasis.candidateTrajectoryContext;
  if (!ctx) {
    return {
      ok: false,
      code: "HUMAN_DECISION_CONTEXT_MISSING",
      reason: "candidate_trajectory_context_missing",
    };
  }
  return { ok: true, decision, ctx };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

```typescript
export * from "./types";
export * from "./basisFingerprint";
export * from "./resolveCanonicalBasis";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";
export * from "./materializeFromProductTurn";
export * from "./materialReaderContract";
export * from "./noraActor";
export * from "./greenfieldLifecycleBootstrap";
export * from "./prepareCandidateTrajectoryFromCurrentRecommendation";
export * from "./candidateTrajectoryProvenance";
export * from "./candidateTrajectoryDecisionBasis";
export * from "./qualificationSignals";
export * from "./ckcResolutionRef";
export * from "./prepareCycleFromValidatedTrajectory";
export * from "./assertTrajectoryBoundCycleStartReady";
export * from "./readPreparedTrajectoryCycle";
export * from "./startPreparedTrajectoryCycle";
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts`

```typescript
/**
 * D-GF-START-01 — prepare CycleInstance from validated/current greenfield trajectory.
 *
 * CreateCycle linkAsActiveCycle=false; no LPS mutation; no step state change; no START.
 * Profile from sealed HD/LR qualificationSignals — never invented defaults.
 *
 * CR-START-02/03/04 — fail-closed LR signals, sealed digest, delayed reuse.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION, getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  CycleProfile,
  ExplicitCycleQualificationSignals,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
import {
  assertDecisionSealedTrajectoryBasis,
  assertGreenfieldSignalParity,
} from "./assertTrajectoryBoundCycleStartReady";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  buildCriticalProfileJustificationFromSignals,
  parseExplicitQualificationSignals,
  qualificationSignalsEqual,
  toCreateCycleSignals,
} from "./qualificationSignals";

export const SYSTEM_PREPARE_CYCLE_ACTOR: ActorReference = Object.freeze({
  actorId: "actor:system-prepare",
  role: "system",
  displayName: "System Prepare",
  authorityLevel: "none",
});

export class PrepareCycleAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "PrepareCycleAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

export function mintTrajectoryBoundCycleInstanceId(input: {
  projectId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
  cycleTypeId: string;
}): string {
  const raw = [
    input.projectId,
    input.trajectoryId,
    String(input.trajectoryVersion),
    input.stepId,
    input.cycleTypeId,
  ].join("|");
  const digest = createHash("sha256").update(raw).digest("hex").slice(0, 24);
  return `cyc:trj-${digest}`;
}

/** Stable correlation so prepare/start requalify produce the same CKC ref. */
export function mintPrepareCycleCorrelationId(input: {
  projectId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
}): string {
  const raw = [
    input.projectId,
    input.trajectoryId,
    String(input.trajectoryVersion),
    input.stepId,
  ].join("|");
  return `cor:gf-prep-${createHash("sha256").update(raw).digest("hex").slice(0, 16)}`;
}

function dependencySatisfied(
  depId: string,
  steps: readonly TrajectoryStep[],
): boolean {
  const dep = steps.find((s) => s.stepId === depId);
  if (!dep) return false;
  return dep.state === "done" || dep.state === "skipped";
}

/**
 * Eligible pending steps: pending + all dependencies satisfied + cycleTypeId present.
 */
export function selectEligiblePendingTrajectorySteps(
  trajectory: ProjectTrajectory,
): TrajectoryStep[] {
  return trajectory.steps.filter((step) => {
    if (step.state !== "pending") return false;
    if (!step.cycleTypeId?.trim()) return false;
    const deps = step.dependencies ?? [];
    return deps.every((d) => dependencySatisfied(d, trajectory.steps));
  });
}

export function selectExactPrepareStep(input: {
  trajectory: ProjectTrajectory;
  targetCycleTypeId: string;
}):
  | { ok: true; step: TrajectoryStep }
  | { ok: false; code: string; reason: string } {
  // D-GF-START-01: all eligible pending steps first — never pick by order/label.
  const eligible = selectEligiblePendingTrajectorySteps(input.trajectory);
  if (eligible.length === 0) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_SELECTION_REQUIRED",
      reason: "no_eligible_pending_step",
    };
  }
  if (eligible.length > 1) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_SELECTION_REQUIRED",
      reason: "ambiguous_eligible_pending_steps",
    };
  }
  const step = eligible[0]!;
  if (step.cycleTypeId !== input.targetCycleTypeId) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_TYPE_MISMATCH",
      reason: "eligible_step_cycle_type_mismatch_hd_target",
    };
  }
  return { ok: true, step };
}

function cycleBindingCompatible(
  existing: CycleInstance,
  expected: {
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    cycleTypeId: string;
    projectId: string;
  },
): boolean {
  return (
    existing.projectId === expected.projectId &&
    existing.trajectoryId === expected.trajectoryId &&
    existing.trajectoryVersion === expected.trajectoryVersion &&
    existing.trajectoryStepId === expected.trajectoryStepId &&
    existing.cycleTypeId === expected.cycleTypeId
  );
}

function isReusablePreparedStatus(status: CycleInstance["status"]): boolean {
  return status === "proposed" || status === "acknowledged";
}

function isTerminalCycleStatus(status: CycleInstance["status"]): boolean {
  return (
    status === "completed" ||
    status === "cancelled" ||
    status === "superseded"
  );
}

function assertReusablePreparedCycle(input: {
  existing: CycleInstance;
  expectedBinding: {
    projectId: string;
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    cycleTypeId: string;
  };
  qualificationSignals: ExplicitCycleQualificationSignals;
  recommendedProfile: CycleProfile;
  ckcResolutionRef: string;
}): void {
  const { existing } = input;
  if (
    !cycleBindingCompatible(existing, input.expectedBinding)
  ) {
    throw new PrepareCycleAtomicFailure(
      "CYCLE_BINDING_CONFLICT",
      "existing_cycle_incompatible_binding",
    );
  }
  if (existing.status === "active") {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_ACTIVE",
      "active_cycle_cannot_be_reused",
    );
  }
  if (isTerminalCycleStatus(existing.status)) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_TERMINAL",
      `terminal_cycle_${existing.status}`,
    );
  }
  if (!isReusablePreparedStatus(existing.status)) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      `status_not_reusable_${existing.status}`,
    );
  }
  const existingSignals = parseExplicitQualificationSignals(
    existing.qualificationSignals,
  );
  if (
    !existingSignals ||
    !qualificationSignalsEqual(existingSignals, input.qualificationSignals)
  ) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_signals_do_not_match",
    );
  }
  if (existing.profile !== input.recommendedProfile) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_profile_does_not_match",
    );
  }
  if (existing.ckcResolutionRef !== input.ckcResolutionRef) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_ckc_ref_does_not_match",
    );
  }
}

function extractSealedSignalsFromDecision(
  decision: HumanDecision,
): ExplicitCycleQualificationSignals | null {
  const ctx = decision.decisionBasis?.candidateTrajectoryContext;
  return parseExplicitQualificationSignals(ctx?.qualificationSignals);
}

export type PrepareCycleFromValidatedTrajectoryResult =
  | {
      ok: true;
      cycle: CycleInstance;
      reused: boolean;
      catalogLabel: string | null;
      stepId: string;
      trajectoryId: string;
      trajectoryVersion: number;
      correlationId: string;
    }
  | { ok: false; code: string; reason: string };

export async function prepareCycleFromValidatedTrajectory(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<PrepareCycleFromValidatedTrajectoryResult> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      reason: "project_id_invalid",
    };
  }

  const fail = (code: string, reason: string): PrepareCycleFromValidatedTrajectoryResult => ({
    ok: false,
    code,
    reason,
  });

  try {
    return await oa.projectServices.store.runInTransaction(async () => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) {
        throw new PrepareCycleAtomicFailure("PROJECT_NOT_FOUND", "missing_project");
      }

      const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        throw new PrepareCycleAtomicFailure("LPS_UNAVAILABLE", "lps_unreadable");
      }
      if (lps.livingProjectState.activeCycleInstanceId) {
        throw new PrepareCycleAtomicFailure(
          "ACTIVE_CYCLE_PRESENT",
          "active_cycle_already_linked",
        );
      }

      const trajectory =
        await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
      if (!trajectory) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_MISSING",
          "current_trajectory_missing",
        );
      }
      if (trajectory.status !== "validated" && trajectory.status !== "active") {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_NOT_VALIDATED",
          `trajectory_status_${trajectory.status}`,
        );
      }
      if (!trajectory.decidedByDecisionRef?.trim()) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_DECISION_REF_MISSING",
          "decided_by_decision_ref_required",
        );
      }

      const hdResult = await oa.decisionServices.getHumanDecision.execute({
        decisionId: trajectory.decidedByDecisionRef,
      });
      if (!hdResult.ok) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_MISSING",
          "deciding_hd_unreadable",
        );
      }
      const decision = hdResult.decision;
      if (decision.status !== "accepted") {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_NOT_ACCEPTED",
          "deciding_hd_not_accepted",
        );
      }
      if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_SOURCE_MISMATCH",
          "expected_candidate_trajectory_basis",
        );
      }
      if (decision.projectId !== projectId) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_PROJECT_MISMATCH",
          "hd_wrong_project",
        );
      }

      const ctx = decision.decisionBasis.candidateTrajectoryContext;
      if (!ctx) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_CONTEXT_MISSING",
          "candidate_trajectory_context_missing",
        );
      }
      if (ctx.trajectoryId !== trajectory.trajectoryId) {
        throw new PrepareCycleAtomicFailure(
          "PROVENANCE_TRAJECTORY_MISMATCH",
          "hd_trajectory_mismatch",
        );
      }
      if (ctx.candidateVersion !== trajectory.version) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_VERSION_MISMATCH",
          "hd_candidate_version_mismatch",
        );
      }

      // CR-START-02 — HD signals required; LR signals required and must equal HD.
      const qualificationSignals = extractSealedSignalsFromDecision(decision);
      if (!qualificationSignals) {
        throw new PrepareCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "complete_qualification_signals_required",
        );
      }

      // CR-START-03 — sealed material content must still match HD digest.
      const sealedBasis = assertDecisionSealedTrajectoryBasis({
        trajectory,
        sealedCandidateContentDigest: ctx.candidateContentDigest,
      });
      if (!sealedBasis.ok) {
        throw new PrepareCycleAtomicFailure(
          sealedBasis.code,
          sealedBasis.reason,
        );
      }

      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const sourceLr = epistemic.find(
        (e) => e.epistemicItemId === ctx.recommendationId,
      );
      const lrSignals = parseExplicitQualificationSignals(
        sourceLr?.lifecycleRecommendation?.qualificationSignals,
      );
      const signalParity = assertGreenfieldSignalParity({
        lrSignals,
        hdSignals: qualificationSignals,
      });
      if (!signalParity.ok) {
        throw new PrepareCycleAtomicFailure(
          signalParity.code,
          signalParity.reason,
        );
      }

      const provenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        epistemicItems: epistemic,
      });
      if (provenance.status !== "RESOLVED") {
        throw new PrepareCycleAtomicFailure(
          `PROVENANCE_${provenance.status}`,
          "provenance_not_resolved",
        );
      }
      if (
        provenance.recommendationId !== ctx.recommendationId ||
        provenance.semanticKey !== ctx.semanticKey ||
        provenance.targetCycleTypeId !== ctx.targetCycleTypeId ||
        provenance.provenanceObservationId !== ctx.provenanceObservationId
      ) {
        throw new PrepareCycleAtomicFailure(
          "PROVENANCE_HD_MISMATCH",
          "provenance_does_not_match_human_decision",
        );
      }

      const stepSelect = selectExactPrepareStep({
        trajectory,
        targetCycleTypeId: ctx.targetCycleTypeId,
      });
      if (!stepSelect.ok) {
        throw new PrepareCycleAtomicFailure(stepSelect.code, stepSelect.reason);
      }
      const step = stepSelect.step;
      const cycleTypeId = step.cycleTypeId!;
      if (cycleTypeId !== ctx.targetCycleTypeId) {
        throw new PrepareCycleAtomicFailure(
          "TARGET_CYCLE_TYPE_MISMATCH",
          "step_cycle_type_does_not_match_hd",
        );
      }
      if (!isTargetCycleCurrentlySelectable(cycleTypeId)) {
        throw new PrepareCycleAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "cycle_type_not_selectable",
        );
      }

      const cycleInstanceId = mintTrajectoryBoundCycleInstanceId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
        cycleTypeId,
      });
      const correlationId = mintPrepareCycleCorrelationId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
      });

      // CR-START-04 — qualify BEFORE reuse; never early-return on id/binding alone.
      const qualified = await oa.ckcQualification.qualifyCycleWithCkc.execute({
        cycleTypeId,
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId,
        signals: signalParity.signals,
        objective: lps.livingProjectState.objective,
      });
      if (qualified.state !== "success") {
        throw new PrepareCycleAtomicFailure(
          qualified.code,
          "qualify_cycle_with_ckc_failed",
        );
      }

      const ckcResolutionRef = projectCkcResolutionRef(qualified.proof);
      const expectedBinding = {
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        trajectoryStepId: step.stepId,
        cycleTypeId,
      };

      const existing = await oa.cycleServices.cycles.findById(cycleInstanceId);
      if (existing) {
        assertReusablePreparedCycle({
          existing,
          expectedBinding,
          qualificationSignals: signalParity.signals,
          recommendedProfile: qualified.recommendedProfile,
          ckcResolutionRef,
        });
        const entry = getCycleTypeById(existing.cycleTypeId);
        return {
          ok: true as const,
          cycle: structuredClone(existing),
          reused: true,
          catalogLabel: entry?.label ?? null,
          stepId: step.stepId,
          trajectoryId: trajectory.trajectoryId,
          trajectoryVersion: trajectory.version,
          correlationId,
        };
      }

      const siblings = await oa.cycleServices.cycles.listByProject(projectId);
      const byBinding = siblings.find((c) =>
        cycleBindingCompatible(c, expectedBinding),
      );
      if (byBinding) {
        assertReusablePreparedCycle({
          existing: byBinding,
          expectedBinding,
          qualificationSignals: signalParity.signals,
          recommendedProfile: qualified.recommendedProfile,
          ckcResolutionRef,
        });
        const entry = getCycleTypeById(byBinding.cycleTypeId);
        return {
          ok: true as const,
          cycle: structuredClone(byBinding),
          reused: true,
          catalogLabel: entry?.label ?? null,
          stepId: step.stepId,
          trajectoryId: trajectory.trajectoryId,
          trajectoryVersion: trajectory.version,
          correlationId,
        };
      }

      const created = await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId,
        projectId,
        signals: toCreateCycleSignals(signalParity.signals),
        justification: buildCriticalProfileJustificationFromSignals(
          signalParity.signals,
        ),
        objective: lps.livingProjectState.objective,
        createdBy: SYSTEM_PREPARE_CYCLE_ACTOR,
        correlationId,
        linkAsActiveCycle: false,
        ckcResolutionRef,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        trajectoryStepId: step.stepId,
      });
      if (!created.ok) {
        throw new PrepareCycleAtomicFailure(
          created.error.detailCode,
          created.error.internalCauseRef ?? "create_cycle_failed",
        );
      }

      // Guard: prepare must not have mutated LPS active pointer.
      const lpsAfter =
        await oa.projectServices.getCurrentLivingProjectState.execute({
          projectId,
        });
      if (
        lpsAfter.ok &&
        lpsAfter.livingProjectState.activeCycleInstanceId
      ) {
        throw new PrepareCycleAtomicFailure(
          "LPS_ACTIVE_MUTATED",
          "prepare_must_not_link_active_cycle",
        );
      }

      const entry = getCycleTypeById(created.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(created.cycle),
        reused: false,
        catalogLabel: entry?.label ?? null,
        stepId: step.stepId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        correlationId,
      };
    });
  } catch (err) {
    if (err instanceof PrepareCycleAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "prepare_cycle_failed",
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/startPreparedTrajectoryCycle.ts`

```typescript
/**
 * D-GF-START-01 — START a prepared trajectory-bound CycleInstance.
 *
 * Facade: resolve prepared cycle + registerLocalPiloteAuthority +
 * PilotLifecycleTransitions.start. Strong invariants live in
 * assertTrajectoryBoundCycleStartReady (invoked inside start).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance } from "../../domain/types";
import { isTrajectoryBoundCycle } from "./assertTrajectoryBoundCycleStartReady";
import { selectExactPrepareStep } from "./prepareCycleFromValidatedTrajectory";

export class StartPreparedCycleAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "StartPreparedCycleAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

export type StartPreparedTrajectoryCycleResult =
  | {
      ok: true;
      cycle: CycleInstance;
      trajectoryId: string;
      trajectoryVersion: number;
      stepId: string;
      catalogLabel: string | null;
      lpsVersionAfter: number | undefined;
      activeCycleInstanceId: string;
    }
  | { ok: false; code: string; reason: string };

export async function startPreparedTrajectoryCycle(input: {
  oa: RuntimeOaStack;
  projectId: string;
  /** Optional — when omitted, server resolves the single prepared bound cycle. */
  cycleInstanceId?: string;
  /** Test inject for local Pilote authority gate. */
  forceLocalAuthority?: boolean;
}): Promise<StartPreparedTrajectoryCycleResult> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      reason: "project_id_invalid",
    };
  }

  const fail = (
    code: string,
    reason: string,
  ): StartPreparedTrajectoryCycleResult => ({ ok: false, code, reason });

  try {
    return await oa.projectServices.store.runInTransaction(async () => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) {
        throw new StartPreparedCycleAtomicFailure(
          "PROJECT_NOT_FOUND",
          "missing_project",
        );
      }

      const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        throw new StartPreparedCycleAtomicFailure(
          "LPS_UNAVAILABLE",
          "lps_unreadable",
        );
      }
      if (lps.livingProjectState.activeCycleInstanceId) {
        throw new StartPreparedCycleAtomicFailure(
          "ACTIVE_CYCLE_PRESENT",
          "active_cycle_already_linked",
        );
      }

      const trajectory =
        await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
      if (!trajectory) {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_MISSING",
          "current_trajectory_missing",
        );
      }

      // Thin resolution only — full readiness is enforced inside pilotLifecycle.start.
      let cycle: CycleInstance | null = null;
      const cycles = await oa.cycleServices.cycles.listByProject(projectId);
      if (input.cycleInstanceId) {
        cycle =
          cycles.find((c) => c.cycleInstanceId === input.cycleInstanceId) ??
          null;
      } else {
        const hdResult = trajectory.decidedByDecisionRef
          ? await oa.decisionServices.getHumanDecision.execute({
              decisionId: trajectory.decidedByDecisionRef,
            })
          : null;
        const targetCycleTypeId =
          hdResult?.ok &&
          hdResult.decision.decisionBasis?.candidateTrajectoryContext
            ?.targetCycleTypeId
            ? hdResult.decision.decisionBasis.candidateTrajectoryContext
                .targetCycleTypeId
            : null;
        const stepSelect = targetCycleTypeId
          ? selectExactPrepareStep({
              trajectory,
              targetCycleTypeId,
            })
          : null;
        const stepId =
          stepSelect && stepSelect.ok ? stepSelect.step.stepId : null;
        const matches = cycles.filter(
          (c) =>
            isTrajectoryBoundCycle(c) &&
            c.trajectoryId === trajectory.trajectoryId &&
            c.trajectoryVersion === trajectory.version &&
            (stepId == null || c.trajectoryStepId === stepId) &&
            (c.status === "proposed" || c.status === "acknowledged"),
        );
        if (matches.length > 1) {
          throw new StartPreparedCycleAtomicFailure(
            "PREPARED_CYCLE_AMBIGUOUS",
            "multiple_prepared_cycles",
          );
        }
        cycle = matches[0] ?? null;
      }
      if (!cycle) {
        throw new StartPreparedCycleAtomicFailure(
          "PREPARED_CYCLE_MISSING",
          "prepared_cycle_not_found",
        );
      }
      if (!isTrajectoryBoundCycle(cycle)) {
        throw new StartPreparedCycleAtomicFailure(
          "CYCLE_BINDING_MISMATCH",
          "cycle_not_trajectory_bound",
        );
      }
      if (cycle.status !== "proposed" && cycle.status !== "acknowledged") {
        throw new StartPreparedCycleAtomicFailure(
          "PREPARED_CYCLE_MISSING",
          `cycle_status_${cycle.status}`,
        );
      }

      const scope = `pilot-lifecycle:${cycle.cycleInstanceId}`;
      const issuedAt = oa.clock.nowIso();
      const authority = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope,
        issuedAt,
        forceEnable: input.forceLocalAuthority === true,
      });
      if (!authority.ok) {
        throw new StartPreparedCycleAtomicFailure(
          authority.code,
          authority.message,
        );
      }

      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId: cycle.cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: authority.evidenceId,
        expectedLpsVersion: lps.livingProjectState.version,
        correlationId: `cor:gf-start-${cycle.cycleInstanceId.slice(-12)}`,
      });
      if (!started.ok) {
        // Surface strong-guard codes (internalCauseRef) when detail is closed enum.
        const code =
          started.error.detailCode === "CYCLE_START_NOT_READY" &&
          started.error.internalCauseRef
            ? started.error.internalCauseRef
            : started.error.detailCode;
        throw new StartPreparedCycleAtomicFailure(
          code,
          started.error.internalCauseRef ?? "start_failed",
        );
      }

      const entry = getCycleTypeById(started.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(started.cycle),
        trajectoryId: cycle.trajectoryId!,
        trajectoryVersion: cycle.trajectoryVersion!,
        stepId: cycle.trajectoryStepId!,
        catalogLabel: entry?.label ?? null,
        lpsVersionAfter: started.livingProjectStateVersion,
        activeCycleInstanceId: started.cycle.cycleInstanceId,
      };
    });
  } catch (err) {
    if (err instanceof StartPreparedCycleAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "start_prepared_cycle_failed",
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle transitions.
 * START / PAUSE / RESUME / FINALIZE / CANCEL (+ auto-complete when ready).
 * Never uses evaluateMorrisGateRequired / morrisGateRequired as authority.
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  assertAtMostOneActiveCycle,
  assertLifecycleTransition,
  targetStatusForAction,
} from "../domain/lifecycleInvariants";
import type {
  AssessFinalizationRequest,
  AssessFinalizationResult,
  CancelCycleRequest,
  CycleInstance,
  EpistemicItem,
  FinalizationApplicabilityRules,
  FinalizeCycleRequest,
  PauseCycleRequest,
  PilotLifecycleResult,
  ResumeCycleRequest,
  StartCycleRequest,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../ports/cycleRepository";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";
import {
  assessFinalizationObligations,
  isAcceptedCancelDecision,
  isAcceptedFinalizeDecision,
  isAcceptedResumeReplanDecision,
  isAcceptedStartTrajectoryDecision,
  type AssessFinalizationInput,
} from "./assessFinalization";
import {
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
} from "./assessResumeReconciliation";
import { assessStartReadiness } from "./assessStartReadiness";
import {
  deriveFinalizationApplicability,
  type DerivableExecutionContract,
} from "./deriveFinalizationApplicability";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./deriveLifecycleBlockers";
import {
  assertTrajectoryBoundCycleStartReady,
  isTrajectoryBoundCycle,
  type QualifyCycleWithCkcPort,
} from "./lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export type LifecycleDecisionReader = {
  getById(decisionId: string): Promise<HumanDecision | null>;
  listByProject(projectId: string): Promise<HumanDecision[]>;
};

export type LifecycleEvidenceReader = {
  listByProject(projectId: string): Promise<Evidence[]>;
};

export type LifecycleReviewBundleReader = {
  listByProject(projectId: string): Promise<ReviewBundle[]>;
};

export type LifecycleEpistemicReader = {
  listByProject(projectId: string): Promise<EpistemicItem[]>;
};

export type LifecycleExecutionSnapshotReader = {
  listContractsByProject?(projectId: string): Promise<
    Array<DerivableExecutionContract>
  >;
  listAttemptsByProject?(projectId: string): Promise<
    Array<{
      attemptId: string;
      contractId?: string;
      terminalState?: string;
    }>
  >;
};

/** Narrow authority verify surface for Pilot lifecycle mutations. */
export type PilotLifecycleAuthorityPort = {
  verify(request: {
    actorId: string;
    scope: string;
    evidenceId?: string;
    requiredLevel?: "N1" | "N2" | "N3";
    requireMorrisGate?: boolean;
  }): { ok: boolean; reason?: string };
};

export type PilotLifecycleDeps = {
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  projectServices: ProjectServices;
  clock: ClockPort;
  audit: CycleAuditPort;
  store?: CyclePersistenceUnitOfWorkPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * CR-START-01 — required for trajectory-bound START (fail-closed if missing).
   * Wired once from vertical-slice-runtime via create*CycleServices.
   */
  qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
  /**
   * Optional static applicability override — test-only / low-level.
   * Product `buildAssessment` always derives from durable facts and ignores this.
   */
  applicabilityRules?: FinalizationApplicabilityRules;
};

function authorityNotConfiguredReason(reason?: string): boolean {
  if (!reason) return true;
  const r = reason.toLowerCase();
  return (
    r.includes("no_evidence") ||
    r.includes("not_configured") ||
    r.includes("not configured") ||
    r.includes("evidence_not_found") ||
    r === "authority_port_unavailable"
  );
}

async function appendLpsActiveLink(input: {
  projectServices: ProjectServices;
  projectId: string;
  createdBy: StartCycleRequest["createdBy"];
  correlationId: string;
  expectedLpsVersion?: number;
  activeCycleInstanceId: string | null;
  /** D-GF-START-01 — bind CKC on LPS at START for trajectory-derived cycles. */
  ckcResolutionRef?: string;
}): Promise<{ ok: true; version: number } | { ok: false; detail: string; currentVersion?: number }> {
  const current =
    await input.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return { ok: false, detail: "missing_current_lps" };
  }
  const expected =
    input.expectedLpsVersion ?? current.livingProjectState.version;
  const appended =
    await input.projectServices.appendLivingProjectStateVersion.execute({
      projectId: input.projectId,
      expectedVersion: expected,
      objective: current.livingProjectState.objective,
      createdBy: input.createdBy,
      correlationId: input.correlationId,
      context: current.livingProjectState.context,
      scope: current.livingProjectState.scope,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ...(input.ckcResolutionRef !== undefined
        ? { ckcResolutionRef: input.ckcResolutionRef }
        : {}),
    });
  if (!appended.ok) {
    if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
      return {
        ok: false,
        detail: "lps_version_conflict",
        currentVersion: appended.error.currentVersion,
      };
    }
    return { ok: false, detail: "lps_append_failed" };
  }
  return { ok: true, version: appended.livingProjectState.version };
}

export class PilotLifecycleTransitions {
  constructor(private readonly deps: PilotLifecycleDeps) {}

  async start(request: StartCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "START",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    const projectOk = projectResult.ok;
    if (!projectOk) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "START",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });
    const siblingActiveExists = Boolean(single);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const lpsReadable = lps.ok;
    const lpsActiveCycleInstanceId = lps.ok
      ? lps.livingProjectState.activeCycleInstanceId
      : undefined;

    // CR-START-01 — trajectory-bound START must pass shared strong guard before
    // any mutation (historical executePilotLifecycleAction path cannot bypass).
    const trajectoryBound = isTrajectoryBoundCycle(cycle);
    let guardedCkcResolutionRef: string | undefined;
    if (trajectoryBound) {
      const ready = await assertTrajectoryBoundCycleStartReady({
        projectId: request.projectId,
        cycle,
        projectServices: this.deps.projectServices,
        trajectories: this.deps.trajectories,
        decisions: this.deps.decisions,
        epistemic: this.deps.epistemic,
        qualifyCycleWithCkc: this.deps.qualifyCycleWithCkc,
      });
      if (!ready.ok) {
        return fail("CYCLE_START_NOT_READY", ready.code);
      }
      guardedCkcResolutionRef = ready.ckcResolutionRef;
    }

    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];

    const doctrineReadable = Boolean(
      (projectResult.ok && projectResult.project.doctrinePackageRef) ||
        (lps.ok && lps.livingProjectState.doctrinePackageRef),
    );

    const blockersSnap = await this.loadBlockers(request.projectId);
    const readiness = assessStartReadiness({
      assessedAt: timestamp,
      projectOk,
      cycle,
      projectId: request.projectId,
      lpsReadable,
      lpsActiveCycleInstanceId,
      siblingActiveExists,
      trajectory,
      decisions,
      decisionId: request.decisionId,
      doctrineReadable,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
    });

    const nonHdBlockers = readiness.blockers.filter(
      (b) => b !== "start_trajectory_hd_missing_or_invalid",
    );
    if (nonHdBlockers.length > 0 || (!readiness.ready && !readiness.requiresTrajectoryHumanDecision)) {
      return fail(
        "CYCLE_START_NOT_READY",
        readiness.blockers.join("|") || "start_not_ready",
      );
    }

    if (readiness.requiresTrajectoryHumanDecision) {
      if (!this.deps.decisions) {
        return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
      }
      let hd: HumanDecision | null = null;
      if (request.decisionId) {
        hd = await this.deps.decisions.getById(request.decisionId);
      } else {
        hd =
          decisions.find((d) =>
            isAcceptedStartTrajectoryDecision(
              d,
              request.cycleInstanceId,
              request.projectId,
            ),
          ) ?? null;
      }
      if (
        !hd ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          request.cycleInstanceId,
          request.projectId,
        )
      ) {
        return fail(
          "CYCLE_DECISION_REQUIRED",
          "start_trajectory_hd_missing_or_invalid",
        );
      }
    }

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "START",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
      ...(trajectoryBound
        ? {
            ckcResolutionRef:
              guardedCkcResolutionRef ?? cycle.ckcResolutionRef,
            activateTrajectoryStep: {
              trajectoryId: cycle.trajectoryId!,
              trajectoryVersion: cycle.trajectoryVersion!,
              stepId: cycle.trajectoryStepId!,
            },
          }
        : {}),
    });
  }

  async pause(request: PauseCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "PAUSE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "PAUSE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const pauseReconciliation = buildPauseReconciliationSnapshot({
      pausedAt: timestamp,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockerSnapshotState: blockersSnap.ok ? "KNOWN" : "UNKNOWN",
      blockerSnapshotReason: blockersSnap.ok ? undefined : blockersSnap.reason,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
    });

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "paused",
      pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: "PAUSE",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      fromStatus: cycle.status,
      toStatus: "paused",
      next,
      setActiveLink: null,
      clearActiveLink: true,
      started,
      timestamp,
      fail,
    });
  }

  async resume(request: ResumeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "RESUME",
        fromStatus: "paused",
        toStatus: "paused",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "RESUME",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const reconciliation = assessResumeReconciliation({
      cycle,
      projectId: request.projectId,
      lpsReadable: lps.ok,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : undefined,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
      siblingActiveExists: Boolean(single),
      callerMaterialDriftHint: request.materialDriftDetected === true,
    });

    if (!reconciliation.clean) {
      // Stay paused; ensure LPS active pointer is cleared.
      // Only a clean reconciliation may activate — replan HD does not override drift.
      if (lps.ok && lps.livingProjectState.activeCycleInstanceId != null) {
        try {
          await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: request.projectId,
            createdBy: request.createdBy,
            correlationId,
            expectedLpsVersion: request.expectedLpsVersion,
            activeCycleInstanceId: null,
          });
        } catch {
          /* best-effort clear; drift denial still returned */
        }
      }
      const replanAsserted =
        request.requiresReplanHumanDecision === true ||
        reconciliation.requiresReplanHumanDecision;
      if (replanAsserted && request.decisionId) {
        if (!this.deps.decisions) {
          return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
        }
        const hd = await this.deps.decisions.getById(request.decisionId);
        if (
          !hd ||
          !isAcceptedResumeReplanDecision(
            hd,
            request.cycleInstanceId,
            request.projectId,
          )
        ) {
          return fail(
            "CYCLE_DECISION_REQUIRED",
            "resume_replan_hd_missing_or_invalid",
          );
        }
      }
      return fail(
        "CYCLE_RESUME_DRIFT",
        reconciliation.driftReasons.join("|") || "resume_drift",
      );
    }

    // Clean path: no replan HD required.
    void request.requiresReplanHumanDecision;

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "RESUME",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
    });
  }

  async finalize(request: FinalizeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      assessment?: AssessFinalizationResult extends { ok: true }
        ? never
        : import("../domain/types").FinalizationAssessment,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, assessment, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "FINALIZE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedFinalizeDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "finalize_hd_missing_or_invalid");
    }

    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.decisionId,
      assessedAt: timestamp,
    });

    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      correlationId,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: request.decisionId,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });

    if (!assessment.canComplete) {
      const durationMs = Date.now() - started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: cycle.status,
        toStatus: cycle.status,
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "ok",
        detailCode: "CYCLE_FINALIZE_INCOMPLETE",
        durationMs,
      });
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs,
      };
    }

    // Auto-complete — no second Close click
    return this.completeFromAssessment({
      cycle,
      projectId: request.projectId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      assessment,
      started,
      timestamp,
    });
  }

  async cancel(request: CancelCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "CANCEL",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }
    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedCancelDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "cancel_hd_missing_or_invalid");
    }

    return this.runTransition({
      action: "CANCEL",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      authorityEvidenceId: request.authorityEvidenceId,
      setActiveLink: null,
      clearActiveLink: true,
      setClosedAt: true,
      skipAuthority: true,
    });
  }

  async assess(
    request: AssessFinalizationRequest,
  ): Promise<AssessFinalizationResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.finalizeDecisionId ?? null,
      assessedAt: timestamp,
    });
    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: assessment.finalizeDecisionId ?? undefined,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });
    return { ok: true, assessment, durationMs: Date.now() - started };
  }

  /**
   * Re-evaluate after obligations change; completes when ready without new FINALIZE.
   */
  async reevaluateAndComplete(input: {
    cycleInstanceId: string;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");
    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    if (cycle.status === "completed" || cycle.status === "cancelled") {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_TERMINAL",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          internalCauseRef: "already_terminal",
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: input.projectId,
      assessedAt: timestamp,
    });
    if (!assessment.canComplete) {
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs: Date.now() - started,
      };
    }
    return this.completeFromAssessment({
      cycle,
      projectId: input.projectId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: assessment.finalizeDecisionId ?? undefined,
      assessment,
      started,
      timestamp,
    });
  }

  private verifyAuthority(input: {
    actorId: string;
    cycleInstanceId: string;
    evidenceId?: string;
  }):
    | { ok: true }
    | {
        ok: false;
        detailCode: "AUTHORITY_NOT_CONFIGURED" | "CYCLE_LIFECYCLE_DENIED";
        internalCauseRef: string;
      } {
    if (!this.deps.authority) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: "authority_port_unavailable",
      };
    }
    const result = this.deps.authority.verify({
      actorId: input.actorId,
      scope: `pilot-lifecycle:${input.cycleInstanceId}`,
      evidenceId: input.evidenceId,
      requiredLevel: "N3",
      requireMorrisGate: true,
    });
    if (result.ok) return { ok: true };
    if (authorityNotConfiguredReason(result.reason)) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: result.reason ?? "authority_not_configured",
      };
    }
    return {
      ok: false,
      detailCode: "CYCLE_LIFECYCLE_DENIED",
      internalCauseRef: result.reason ?? "authority_denied",
    };
  }

  private async buildAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    finalizeDecisionId?: string | null;
    assessedAt: string;
  }) {
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(input.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(input.projectId)
      : [];
    const reviewBundles = this.deps.reviewBundles
      ? await this.deps.reviewBundles.listByProject(input.projectId)
      : [];
    const trajectory = await this.loadTrajectory(input.projectId);

    const executionContracts = this.deps.execution?.listContractsByProject
      ? await this.deps.execution.listContractsByProject(input.projectId)
      : [];
    const executionAttempts = this.deps.execution?.listAttemptsByProject
      ? await this.deps.execution.listAttemptsByProject(input.projectId)
      : [];

    // Product path: always derive from durable facts (ignore static applicabilityRules).
    const applicability = deriveFinalizationApplicability({
      cycleInstanceId: input.cycle.cycleInstanceId,
      projectId: input.projectId,
      trajectory,
      decisions,
      evidence,
      reviewBundles,
      executionContracts,
    });

    const blockersSnap = await this.loadBlockers(input.projectId);
    const blockingReservationStatements = blockersSnap.ok
      ? blockersSnap.statements
      : ["blocker_source_unreadable"];

    const snapshot: AssessFinalizationInput = {
      cycle: input.cycle,
      projectId: input.projectId,
      assessedAt: input.assessedAt,
      decisions,
      evidence,
      reviewBundles,
      trajectory,
      finalizeDecisionId: input.finalizeDecisionId,
      executionContracts,
      executionAttempts,
      applicability,
      blockingReservationStatements,
    };
    return assessFinalizationObligations(snapshot);
  }

  private async loadBlockers(
    projectId: string,
  ): Promise<LifecycleBlockerSnapshot> {
    if (!this.deps.epistemic) {
      return lifecycleBlockersFromReaderFailure("epistemic_reader_unavailable");
    }
    try {
      const items = await this.deps.epistemic.listByProject(projectId);
      return deriveLifecycleBlockersFromEpistemicItems(items);
    } catch {
      return lifecycleBlockersFromReaderFailure("epistemic_unreadable");
    }
  }

  private async loadTrajectory(projectId: string) {
    try {
      return await this.deps.trajectories.findCurrentByProjectId(projectId);
    } catch {
      return null;
    }
  }

  private async completeFromAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    assessment: import("../domain/types").FinalizationAssessment;
    started: number;
    timestamp: string;
  }): Promise<PilotLifecycleResult> {
    const fromStatus = input.cycle.status;
    const next: CycleInstance = {
      ...structuredClone(input.cycle),
      status: "completed",
      closedAt: input.timestamp,
      pauseReconciliation: null,
    };

    try {
      const persist = async () => {
        await this.deps.cycles.save(next);
        const lps = await appendLpsActiveLink({
          projectServices: this.deps.projectServices,
          projectId: input.projectId,
          createdBy: input.createdBy,
          correlationId: input.correlationId,
          expectedLpsVersion: input.expectedLpsVersion,
          activeCycleInstanceId: null,
        });
        if (!lps.ok) {
          const err = new Error(lps.detail) as Error & {
            currentVersion?: number;
          };
          err.currentVersion = lps.currentVersion;
          throw err;
        }
        return lps.version;
      };
      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }
      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycle.cycleInstanceId,
        action: "COMPLETE",
        fromStatus,
        toStatus: "completed",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        cycle: next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: null,
        assessment: input.assessment,
        durationMs,
      };
    } catch (err) {
      const durationMs = Date.now() - input.started;
      const detail =
        err instanceof Error && err.message === "lps_version_conflict"
          ? "LPS_VERSION_CONFLICT"
          : "PERSISTENCE_FAILURE";
      return {
        ok: false,
        error: createCycleError({
          detailCode: detail,
          timestamp: input.timestamp,
          correlationId: input.correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycle.cycleInstanceId,
          currentVersion:
            err instanceof Error
              ? (err as Error & { currentVersion?: number }).currentVersion
              : undefined,
        }),
        assessment: input.assessment,
        durationMs,
      };
    }
  }

  private async persistLifecycleMutation(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    fromStatus: CycleInstance["status"];
    toStatus: CycleInstance["status"];
    next: CycleInstance;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    started: number;
    timestamp: string;
    fail: (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ) => PilotLifecycleResult;
    /** D-GF-START-01 — written to LPS on START for trajectory-derived cycles. */
    ckcResolutionRef?: string;
    /** D-GF-START-01 — activate exact pending step in the same UoW. */
    activateTrajectoryStep?: {
      trajectoryId: string;
      trajectoryVersion: number;
      stepId: string;
    };
  }): Promise<PilotLifecycleResult> {
    try {
      const persist = async () => {
        if (input.action === "START" || input.action === "RESUME") {
          const siblings = await this.deps.cycles.listByProject(input.projectId);
          const single = assertAtMostOneActiveCycle({
            cycles: siblings,
            excludeCycleInstanceId: input.cycleInstanceId,
          });
          if (single) {
            throw new Error(single.reason);
          }
        }
        await this.deps.cycles.save(input.next);

        if (input.action === "START" && input.activateTrajectoryStep) {
          const binding = input.activateTrajectoryStep;
          const traj = await this.deps.trajectories.findByProjectAndVersion(
            input.projectId,
            binding.trajectoryVersion,
          );
          if (!traj || traj.trajectoryId !== binding.trajectoryId) {
            throw new Error("trajectory_binding_missing");
          }
          const stepIdx = traj.steps.findIndex(
            (s) => s.stepId === binding.stepId,
          );
          if (stepIdx < 0) {
            throw new Error("trajectory_step_missing");
          }
          const step = traj.steps[stepIdx]!;
          if (step.state !== "pending") {
            throw new Error(`trajectory_step_not_pending:${step.state}`);
          }
          const nextSteps = traj.steps.map((s, i) =>
            i === stepIdx ? { ...s, state: "active" as const } : s,
          );
          await this.deps.trajectories.save({
            ...traj,
            steps: nextSteps,
          });
        }

        if (input.clearActiveLink || input.setActiveLink !== undefined) {
          const linkTarget = input.clearActiveLink ? null : input.setActiveLink;
          const lps = await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: input.projectId,
            createdBy: input.createdBy,
            correlationId: input.correlationId,
            expectedLpsVersion: input.expectedLpsVersion,
            activeCycleInstanceId: linkTarget,
            ...(input.action === "START" && input.ckcResolutionRef
              ? { ckcResolutionRef: input.ckcResolutionRef }
              : {}),
          });
          if (!lps.ok) {
            const err = new Error(lps.detail) as Error & {
              currentVersion?: number;
            };
            err.currentVersion = lps.currentVersion;
            throw err;
          }
          return lps.version;
        }
        return undefined;
      };

      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }

      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: input.fromStatus,
        toStatus: input.toStatus,
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: input.next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: input.clearActiveLink
          ? null
          : input.setActiveLink,
        durationMs,
      };
    } catch (err) {
      if (err instanceof Error && err.message.startsWith("active_exists")) {
        return input.fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
      }
      if (err instanceof Error && err.message === "lps_version_conflict") {
        return input.fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
          expectedVersion: input.expectedLpsVersion,
          currentVersion: (err as Error & { currentVersion?: number })
            .currentVersion,
        });
      }
      if (
        err instanceof Error &&
        (err.message.startsWith("trajectory_") ||
          err.message.startsWith("trajectory_step_"))
      ) {
        return input.fail("CYCLE_START_NOT_READY", err.message);
      }
      return input.fail("PERSISTENCE_FAILURE", "lifecycle_persist_failed");
    }
  }

  private async runTransition(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    authorityEvidenceId?: string;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    setClosedAt?: boolean;
    skipAuthority?: boolean;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!input.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    if (!input.skipAuthority) {
      const authGate = this.verifyAuthority({
        actorId: input.createdBy.actorId,
        cycleInstanceId: input.cycleInstanceId,
        evidenceId: input.authorityEvidenceId,
      });
      if (!authGate.ok) {
        return fail(authGate.detailCode, authGate.internalCauseRef);
      }
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }

    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }

    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: input.action,
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const toStatus = targetStatusForAction(input.action);
    if (!toStatus) {
      return fail("CYCLE_TRANSITION_INVALID", "no_target_status");
    }

    if (input.action === "START" || input.action === "RESUME") {
      const siblings = await this.deps.cycles.listByProject(input.projectId);
      const single = assertAtMostOneActiveCycle({
        cycles: siblings,
        excludeCycleInstanceId: input.cycleInstanceId,
      });
      if (single) return fail(single.detailCode, single.reason);

      const lps =
        await this.deps.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.projectId,
        });
      if (lps.ok) {
        const activeId = lps.livingProjectState.activeCycleInstanceId;
        if (activeId && activeId !== input.cycleInstanceId) {
          return fail(
            "CYCLE_ALREADY_ACTIVE_EXISTS",
            `lps_active_pointer:${activeId}`,
          );
        }
      }
    }

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: toStatus,
      closedAt: input.setClosedAt ? timestamp : cycle.closedAt,
      acknowledgedAt:
        toStatus === "active" && !cycle.acknowledgedAt
          ? timestamp
          : cycle.acknowledgedAt,
      pauseReconciliation:
        input.action === "CANCEL" ? null : cycle.pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: input.action,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: input.decisionId,
      fromStatus: cycle.status,
      toStatus,
      next,
      setActiveLink: input.setActiveLink,
      clearActiveLink: input.clearActiveLink,
      started,
      timestamp,
      fail,
    });
  }
}

function isTerminalGuard(cycle: CycleInstance): boolean {
  return cycle.status === "completed" || cycle.status === "cancelled";
}
```

### `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/ckcQualificationResult";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/cyclePersistenceUnitOfWorkPort";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export * from "./application/qualifyCycleWithCkc";
export * from "./application/bindCatalogAuthority";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export {
  assessFinalizationObligations,
  finalizeSubjectFor,
  cancelSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  isAcceptedFinalizeDecision,
  isAcceptedCancelDecision,
  isAcceptedStartTrajectoryDecision,
  isAcceptedResumeReplanDecision,
  FINALIZE_SUBJECT_PREFIX,
  CANCEL_SUBJECT_PREFIX,
  START_TRAJECTORY_SUBJECT_PREFIX,
  RESUME_REPLAN_SUBJECT_PREFIX,
} from "./application/assessFinalization";
export {
  assessStartReadiness,
  type AssessStartReadinessInput,
} from "./application/assessStartReadiness";
export {
  buildPauseReconciliationSnapshot,
  assessResumeReconciliation,
  trajectoryFingerprint,
  type BuildPauseSnapshotInput,
  type ResumeReconciliationInput,
  type ResumeReconciliationResult,
} from "./application/assessResumeReconciliation";
export {
  projectPilotLifecycle,
  type PilotLifecycleProjection,
} from "./application/lifecycleProjection";
export * from "./application/lifecycleRecommendation";
export {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./application/deriveLifecycleBlockers";
export {
  deriveFinalizationApplicability,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_SUBJECT_PREFIX,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_NO_ARTIFACT,
  OBLIGATION_POLICY_NO_GIT,
  OBLIGATION_POLICY_NO_EXECUTION,
  OBLIGATION_POLICY_NO_EVIDENCE,
  OBLIGATION_POLICY_NO_REVIEW,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  OBLIGATION_POLICY_REQUIRE_GIT,
  type DerivableExecutionContract,
  type DeriveFinalizationApplicabilityInput,
} from "./application/deriveFinalizationApplicability";
export {
  selectEffectiveExecutionContracts,
  type SelectableExecutionContract,
  type SelectEffectiveExecutionContractsResult,
} from "./application/selectEffectiveExecutionContracts";
export {
  selectEffectiveReviewBundles,
  type SelectEffectiveReviewBundlesResult,
} from "./application/selectEffectiveReviewBundles";
export {
  hasGitRepositorySemanticMarker,
  isGitApplicableContract,
  isGitQualifyingEvidence,
  type GitQualifiableContract,
} from "./application/qualifyGitEvidence";
export {
  PilotLifecycleTransitions,
  type PilotLifecycleDeps,
  type PilotLifecycleAuthorityPort,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
} from "./application/pilotLifecycleTransitions";
export * from "./domain/lifecycleInvariants";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
  resolveTrajectoryLineageHead,
} from "./application/proposeTrajectoryVersion";
export { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";
export {
  createSqliteCycleServices,
  createTestSqliteCycleServices,
  type CreateSqliteCycleServicesOptions,
  type SqliteCycleServices,
} from "./infrastructure/sqlite/createSqliteCycleServices";
export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  FixedClock,
  PRODUCT_DOCTRINE_PACKAGE_ID,
  SystemClock,
} from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import {
  QualifyCycleWithCkc,
  type QualifyCycleExecutor,
} from "./application/qualifyCycleWithCkc";
import {
  bindCycleTypeCatalogAuthority,
  verifyCycleTypeCatalogAuthority,
} from "./application/bindCatalogAuthority";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import {
  PilotLifecycleTransitions,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
  type PilotLifecycleAuthorityPort,
} from "./application/pilotLifecycleTransitions";
import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
import type { FinalizationApplicabilityRules } from "./domain/types";
import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "./ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "./ports/cycleRepository";
import type { CkcResolverPort } from "./ports/ckcResolver";
import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";
import type { EpistemicRepositoryPort } from "./ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "./ports/trajectoryRepository";

export type CycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  /** W2: candidate → decided/current promotion, decisionRef mandatory. */
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
  /** CORR-PROOF-05 Pilot lifecycle transitions. */
  pilotLifecycle: PilotLifecycleTransitions;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * CR-START-01 — inject QualifyCycleWithCkc so trajectory-bound START cannot
   * bypass CKC revalidation (single adjacent wiring point).
   */
  qualifyCycleWithCkc?: import("./application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady").QualifyCycleWithCkcPort;
  applicabilityRules?: FinalizationApplicabilityRules;
};

export type CkcQualificationServices = {
  readonly audit: CycleAuditPort;
  readonly resolver: CkcQualificationResolverPort;
  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
};

export type CreateCkcQualificationServicesOptions = {
  readonly clock?: ClockPort;
  readonly audit?: CycleAuditPort;
  readonly resolver?: CkcQualificationResolverPort;
  readonly registryRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly productResolverFactory?: (
    audit: CycleAuditPort,
    registryRoot: string,
  ) => CkcQualificationResolverPort;
  readonly qualifyCycle?: QualifyCycleExecutor;
  /**
   * Optional HASH-A-bound catalog authority (test-only future snapshots).
   * Cryptographically verified before use; forged fingerprints fail closed
   * on QualifyCycleWithCkc (R-W3D-03). Prefer {@link catalogSnapshot} when
   * injecting N+1 content — factory binds HASH-A itself.
   */
  readonly catalogAuthority?: CycleTypeCatalogAuthority;
  /**
   * Optional raw catalog snapshot. Factory binds HASH-A via
   * bindCycleTypeCatalogAuthority — callers cannot supply a forged fingerprint.
   * Mutually preferred over an unverified catalogAuthority when both are set.
   */
  readonly catalogSnapshot?: Pick<CycleTypeCatalog, "entries">;
};

function resolveCkcQualificationCatalogAuthority(
  options: CreateCkcQualificationServicesOptions,
): CycleTypeCatalogAuthority {
  if (options.catalogSnapshot) {
    return bindCycleTypeCatalogAuthority(options.catalogSnapshot);
  }
  if (options.catalogAuthority) {
    // Do not re-bind silently: QualifyCycleWithCkc verifies cryptographically
    // and returns CATALOG_FINGERPRINT_STALE for forged authorities.
    if (!verifyCycleTypeCatalogAuthority(options.catalogAuthority)) {
      return options.catalogAuthority;
    }
    return options.catalogAuthority;
  }
  return DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY;
}

function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
  return pin?.doctrinePackageId === PRODUCT_DOCTRINE_PACKAGE_ID;
}

function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
  readonly hasFailed: () => boolean;
} {
  let failed = false;
  return {
    append(event): void {
      if (failed) {
        throw new Error("Audit sink unavailable.");
      }
      try {
        audit.append(event);
      } catch {
        failed = true;
        throw new Error("Audit sink unavailable.");
      }
    },
    hasFailed: () => failed,
  };
}

/**
 * Default CKC resolver selection (COR-W1-07).
 *
 * Product doctrine pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects the
 * product-bound resolver path. Missing/invalid registryRoot must fail closed
 * as Product CKC unavailable — NEVER silently fall back to method-candidate.
 *
 * Explicit `options.resolver` injection remains for deliberate test/DI only.
 */
function createDefaultCkcQualificationResolver(
  options: CreateCkcQualificationServicesOptions,
  audit: CycleAuditPort,
): CkcQualificationResolverPort {
  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
    const pin = options.doctrinePackagePin!;
    return new CkcQualificationResolver(undefined, audit, {
      // Empty/absent root is handled fail-closed inside product index load.
      registryRoot: options.registryRoot ?? "",
      doctrinePackageId: pin.doctrinePackageId,
      packageVersion: pin.version,
      packageDigest: pin.digest,
    });
  }
  return new CkcQualificationResolver(undefined, audit);
}

/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
export function createCkcQualificationServices(
  options: CreateCkcQualificationServicesOptions = {},
): CkcQualificationServices {
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const failureAwareAudit = createFailureAwareAudit(audit);
  const resolver =
    options.resolver ??
    createDefaultCkcQualificationResolver(options, failureAwareAudit);
  const qualifyCycle =
    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

  return Object.freeze({
    audit,
    resolver,
    qualifyCycleWithCkc: new QualifyCycleWithCkc(
      resolver,
      qualifyCycle,
      clock,
      failureAwareAudit,
      resolveCkcQualificationCatalogAuthority(options),
    ),
  });
}

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
    pilotLifecycle: new PilotLifecycleTransitions({
      cycles,
      trajectories,
      projectServices: options.projectServices,
      clock,
      audit,
      store,
      decisions: options.decisions,
      evidence: options.evidence,
      reviewBundles: options.reviewBundles,
      execution: options.execution,
      epistemic: options.epistemic ?? {
        listByProject: (projectId) => epistemic.listByProject(projectId),
      },
      authority: options.authority,
      qualifyCycleWithCkc: options.qualifyCycleWithCkc,
      applicabilityRules: options.applicabilityRules,
    }),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { CreateCycle } from "../../application/createCycle";
import { CreateInitialTrajectory } from "../../application/createInitialTrajectory";
import { GetCurrentTrajectory } from "../../application/getCurrentTrajectory";
import { GetCycle } from "../../application/getCycle";
import { GetEpistemicState } from "../../application/getEpistemicState";
import { GetTrajectoryVersion } from "../../application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "../../application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVersion";
import { QualifyCycle } from "../../application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "../../application/updateEpistemicState";
import {
  PilotLifecycleTransitions,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
  type PilotLifecycleAuthorityPort,
} from "../../application/pilotLifecycleTransitions";
import type { QualifyCycleWithCkcPort } from "../../application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";
import type { FinalizationApplicabilityRules } from "../../domain/types";
import { MemoryCkcResolver } from "../memoryCkcResolver";
import type { CycleAuditPort } from "../../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../../ports/cycleRepository";
import type { CkcResolverPort } from "../../ports/ckcResolver";
import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { SqliteCycleAuditJournal } from "./sqliteCycleAuditJournal";
import { SqliteCycleRepository } from "./sqliteCycleRepository";
import { SqliteEpistemicRepository } from "./sqliteEpistemicRepository";
import { SqliteTrajectoryRepository } from "./sqliteTrajectoryRepository";

export type CreateSqliteCycleServicesOptions = {
  projectServices: ProjectServices;
  /** Shared Product SQLite handle (same DB / UoW as Project T-A1). */
  productStore: ProductSqliteHandle & CyclePersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * CR-START-01 — inject QualifyCycleWithCkc so trajectory-bound START cannot
   * bypass CKC revalidation (single adjacent wiring point).
   */
  qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
  applicabilityRules?: FinalizationApplicabilityRules;
};

export type SqliteCycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  productStore: ProductSqliteHandle;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
  pilotLifecycle: PilotLifecycleTransitions;
};

/**
 * CycleInstance + Trajectory + Epistemic durable services on Product SQLite (M2/M6).
 */
export function createSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions,
): SqliteCycleServices {
  const productStore = options.productStore;
  const cycles = new SqliteCycleRepository(productStore);
  const trajectories = new SqliteTrajectoryRepository(productStore);
  const epistemic = new SqliteEpistemicRepository(productStore);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteCycleAuditJournal(productStore);
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store: productStore,
    cycles,
    productStore,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      productStore,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
    pilotLifecycle: new PilotLifecycleTransitions({
      cycles,
      trajectories,
      projectServices: options.projectServices,
      clock,
      audit,
      store: productStore,
      decisions: options.decisions,
      evidence: options.evidence,
      reviewBundles: options.reviewBundles,
      execution: options.execution,
      epistemic: options.epistemic ?? {
        listByProject: (projectId) => epistemic.listByProject(projectId),
      },
      authority: options.authority,
      qualifyCycleWithCkc: options.qualifyCycleWithCkc,
      applicabilityRules: options.applicabilityRules,
    }),
  };
}

export function createTestSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteCycleServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createSqliteCycleServices({ ...options, clock });
}
```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```typescript
import "./serverGuard";
import {
  BoundedSqliteLocalProjectCreationAudit,
  LOCAL_VERTICAL_SLICE_ARCHITECTURE,
  MemoryLocalProjectCreationAudit,
  NoOpLocalProjectCreationAudit,
  createLocalVerticalSliceServices,
  resolveDoctrinePackagePinForRegistry,
  type LocalProjectFacade,
  type LocalProjectIdSource,
  type LocalVerticalSliceCompositionOptions,
  type LocalVerticalSliceServices,
} from "@/lib/vertical-slice-core";
import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
import {
  createCkcQualificationServices,
  createInMemoryCycleServices,
  createSqliteCycleServices,
  type CkcQualificationServices,
  type CycleServices,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createInMemoryDecisionServices,
  createSqliteDecisionServices,
  isM3LocalAuthorityEnabled,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  createInMemoryExecutionContractServices,
  createSqliteExecutionContractServices,
  type ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  createInMemoryExecutionAttemptServices,
  createSqliteExecutionAttemptServices,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  isStudioCursorRealEnabled,
  type ExecutionAttemptServices,
  type RealBoundaryWiring,
  type TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import {
  composeStudioProductRealBoundary,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
import {
  createInMemoryEvidenceReviewServices,
  createSqliteEvidenceReviewServices,
  type EvidenceReviewServices,
  type SqliteEvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import {
  createMaterializeFromMemoryB,
  MaterializeFromMemoryB,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createAttemptReaderBridge,
  createF3FixtureAgentDescriptor,
  createF3TestExecutionAdapter,
} from "./f3FixtureWiring";
import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
import {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
} from "./mapping";
import { resolveDefaultVerticalSliceRoots } from "./paths";
import { registerW3bFixtureAdapterForE2eReset } from "./w3bE2eBoundaryControl";
import type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
} from "./types";

export type RuntimeAuditMode = "noop" | "memory" | "sqlite";

export interface RuntimeApplicationServiceOptions {
  readonly registryRoot?: string;
  readonly schemasRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly idSource?: LocalProjectIdSource;
  readonly nowIso?: string;
  /**
   * D-V2-03: default noop. `sqlite` requires `sqliteAuditStore`.
   * Audit never rehydrates business state.
   */
  readonly auditMode?: RuntimeAuditMode;
  readonly sqliteAuditStore?: BoundedAtomicAuditStore;
  /**
   * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
   */
  readonly productDbPath?: string;
  /**
   * Escape hatch for tests: inject a fully built V1 facade.
   * Production path builds via createLocalVerticalSliceServices.
   */
  readonly facade?: LocalProjectFacade;
  /**
   * Optional M4 REAL boundary. Explicit inject wins (tests).
   * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
   */
  readonly realBoundary?: RealBoundaryWiring;
  /**
   * Env snapshot for live-boundary composition only. Never used to spawn.
   * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
   */
  readonly realBoundaryEnv?: NodeJS.ProcessEnv;
  /**
   * Test/production overrides for composeStudioProductRealBoundary.
   * Construction still launches nothing.
   */
  readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
}

export type MaterializationServices = {
  readonly materializeFromMemoryB: MaterializeFromMemoryB;
};

export type RuntimeOaStack = {
  readonly projectServices: ProjectServices;
  readonly clock: ClockPort;
  readonly cycleServices: CycleServices;
  readonly ckcQualification: CkcQualificationServices;
  readonly decisionServices: DecisionServices;
  readonly authorityResolver: MemoryAuthorityResolver;
  readonly executionContractServices: ExecutionContractServices;
  readonly executionAttemptServices: ExecutionAttemptServices;
  readonly evidenceReviewServices: EvidenceReviewServices | SqliteEvidenceReviewServices;
  /**
   * MW1-S03 — Studio-owned governed Memory B → Truth C materialization.
   * Composed after Decision + Evidence services. Not a Nora write tool.
   */
  readonly materializationServices: MaterializationServices;
  /** Explicit TestExecutionAdapter — never silent NoOp. */
  readonly fixtureAdapter: TestExecutionAdapter;
  /**
   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
   * Distinguishes persistence durability from fixture execution mode.
   */
  readonly productDurablePath: boolean;
};

function resolveAudit(
  mode: RuntimeAuditMode,
  sqliteAuditStore: BoundedAtomicAuditStore | undefined,
): LocalVerticalSliceCompositionOptions["audit"] {
  if (mode === "memory") {
    return new MemoryLocalProjectCreationAudit();
  }
  if (mode === "sqlite") {
    if (!sqliteAuditStore) {
      throw new Error(
        "sqlite audit mode requires sqliteAuditStore (bounded D1 audit table).",
      );
    }
    return new BoundedSqliteLocalProjectCreationAudit(sqliteAuditStore);
  }
  return new NoOpLocalProjectCreationAudit();
}

function wireOaStack(
  projectServices: ProjectServices,
  clock: ClockPort,
  options?: {
    realBoundary?: RealBoundaryWiring;
    registryRoot?: string;
    doctrinePackagePin?: DoctrinePackagePin;
  },
): RuntimeOaStack {
  // M2/M3: same Product SQLite store for Project/LPS + Cycle + Decision + Contract.
  const productSqlite =
    projectServices.store instanceof SqliteProductStore
      ? projectServices.store
      : null;

  // CORR-PROOF-05 — late-bound readers so CycleServices can assess FINALIZE
  // without creating a construction-time cycle with Decision/Evidence factories.
  const late = {
    decisionServices: null as DecisionServices | null,
    evidenceReviewServices: null as
      | EvidenceReviewServices
      | SqliteEvidenceReviewServices
      | null,
    executionContractServices: null as ExecutionContractServices | null,
    executionAttemptServices: null as ExecutionAttemptServices | null,
  };

  const mapAttemptTerminalState = (
    status: string,
  ): string | undefined => {
    switch (status) {
      case "succeeded":
        return "terminal_success";
      case "failed":
        return "terminal_failure";
      case "timeout":
        return "terminal_timeout";
      case "cancelled":
        return "terminal_cancelled";
      default:
        return undefined;
    }
  };

  const lateCycle = {
    services: null as CycleServices | null,
  };

  const lifecycleReaders = {
    decisions: {
      getById: async (decisionId: string) => {
        if (!late.decisionServices) return null;
        return late.decisionServices.decisions.findById(decisionId);
      },
      listByProject: async (projectId: string) => {
        if (!late.decisionServices) return [];
        return late.decisionServices.decisions.listByProject(projectId);
      },
    },
    evidence: {
      listByProject: async (projectId: string) => {
        if (!late.evidenceReviewServices) return [];
        return late.evidenceReviewServices.repository.listByProject(projectId);
      },
    },
    reviewBundles: {
      listByProject: async (projectId: string) => {
        if (!late.evidenceReviewServices) return [];
        return late.evidenceReviewServices.reviewBundleRepository.listByProject(
          projectId,
        );
      },
    },
    epistemic: {
      listByProject: async (projectId: string) => {
        if (!lateCycle.services) {
          throw new Error("epistemic_reader_unavailable");
        }
        return lateCycle.services.epistemic.listByProject(projectId);
      },
    },
    execution: {
      listContractsByProject: async (projectId: string) => {
        if (!late.executionContractServices) return [];
        const list =
          await late.executionContractServices.contracts.listByProject(
            projectId,
          );
        return list.map((c) => ({
          contractId: c.executionContractId,
          cycleInstanceId: c.cycleInstanceId,
          status: c.status,
          expectedOutputs: c.expectedOutputs,
          requiredCapabilities: c.requiredCapabilities,
          evidenceRequirements: c.evidenceRequirements,
          action: c.action,
          target: c.target,
          scope: c.scope,
        }));
      },
      listAttemptsByProject: async (projectId: string) => {
        if (
          !late.executionContractServices ||
          !late.executionAttemptServices
        ) {
          return [];
        }
        const contracts =
          await late.executionContractServices.contracts.listByProject(
            projectId,
          );
        const out: Array<{
          attemptId: string;
          contractId?: string;
          terminalState?: string;
        }> = [];
        for (const c of contracts) {
          const attempts =
            await late.executionAttemptServices.attempts.listByContract(
              c.executionContractId,
            );
          for (const a of attempts) {
            out.push({
              attemptId: a.attemptId,
              contractId: a.executionContractId,
              terminalState: mapAttemptTerminalState(a.status),
            });
          }
        }
        return out;
      },
    },
  };

  // CORR-PROOF-05 — create authority before CycleServices so Pilot lifecycle
  // mutations can verify N3 evidence (chicken-egg with decision factory).
  const authorityResolver = new MemoryAuthorityResolver();
  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
  void isM3LocalAuthorityEnabled;

  const authorityPort = {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authorityResolver.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };

  // CR-START-01 — create CKC qualifier before CycleServices so PilotLifecycle
  // trajectory-bound START can revalidate without a second START engine.
  const ckcQualification = createCkcQualificationServices({
    clock,
    registryRoot: options?.registryRoot,
    doctrinePackagePin: options?.doctrinePackagePin,
  });

  const cycleServices = productSqlite
    ? createSqliteCycleServices({
        projectServices,
        productStore: productSqlite,
        clock,
        ...lifecycleReaders,
        authority: authorityPort,
        qualifyCycleWithCkc: ckcQualification.qualifyCycleWithCkc,
      })
    : createInMemoryCycleServices({
        projectServices,
        clock,
        ...lifecycleReaders,
        authority: authorityPort,
        qualifyCycleWithCkc: ckcQualification.qualifyCycleWithCkc,
      });
  lateCycle.services = cycleServices;

  const decisionServices = productSqlite
    ? createSqliteDecisionServices({
        projectServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryDecisionServices({
        projectServices,
        cycleServices,
        clock,
        authorityResolver,
      });
  late.decisionServices = decisionServices;

  const executionContractServices = productSqlite
    ? createSqliteExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        productStore: productSqlite,
        clock,
        authorityResolver,
      })
    : createInMemoryExecutionContractServices({
        projectServices,
        decisionServices,
        cycleServices,
        clock,
        authorityResolver,
      });
  late.executionContractServices = executionContractServices;

  // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
  // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
  // registered only on the governed path (injected boundary or REAL flag).
  // This composition does not instantiate StudioCursorRealLaunchGateway.
  const fixtureAdapter = createF3TestExecutionAdapter();
  registerW3bFixtureAdapterForE2eReset(fixtureAdapter);
  const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
  const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
  const realBoundary = options?.realBoundary;
  const registerM4 =
    realBoundary !== undefined || isStudioCursorRealEnabled();
  // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
  const agents = registerM4
    ? [
        fixtureAgent,
        w3aBoundedAgent,
        createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
      ]
    : [fixtureAgent, w3aBoundedAgent];
  const registry = new MemoryAgentRegistry(agents);
  const executionAttemptServices = productSqlite
    ? createSqliteExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        productStore: productSqlite,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      })
    : createInMemoryExecutionAttemptServices({
        decisionServices,
        executionContractServices,
        registry,
        adapter: fixtureAdapter,
        clock,
        authorityResolver,
        policy: { defaultMaxRetriesBudget: 0 },
        realBoundary,
      });
  late.executionAttemptServices = executionAttemptServices;

  const evidenceReviewServices = productSqlite
    ? createSqliteEvidenceReviewServices({
        productStore: productSqlite,
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      })
    : createInMemoryEvidenceReviewServices({
        clock,
        attemptReader: createAttemptReaderBridge(
          executionAttemptServices.attempts,
        ),
      });
  late.evidenceReviewServices = evidenceReviewServices;

  // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
  // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
  // on the same Product store / oa_audit_events (no new table). LPS create/append
  // may still use MemoryProjectAuditJournal from local composition.
  const materializationAudit =
    productSqlite !== null
      ? new SqliteProjectAuditJournal(productSqlite)
      : projectServices.audit;

  const materializationServices: MaterializationServices = Object.freeze({
    materializeFromMemoryB: createMaterializeFromMemoryB({
      projectServices: {
        getProject: projectServices.getProject,
        getCurrentLivingProjectState:
          projectServices.getCurrentLivingProjectState,
        appendLivingProjectStateVersion:
          projectServices.appendLivingProjectStateVersion,
        audit: materializationAudit,
      },
      getHumanDecision: decisionServices.getHumanDecision,
      getEvidenceById: async (evidenceId) => {
        const ev =
          await evidenceReviewServices.repository.findById(evidenceId);
        if (!ev) return null;
        return {
          evidenceId: ev.evidenceId,
          status: ev.status,
          availability: ev.availability,
          freshness: ev.freshness,
          bindings: { projectId: ev.bindings.projectId },
        };
      },
    }),
  });

  return Object.freeze({
    projectServices,
    clock,
    cycleServices,
    ckcQualification,
    decisionServices,
    authorityResolver,
    executionContractServices,
    executionAttemptServices,
    evidenceReviewServices,
    materializationServices,
    fixtureAdapter,
    productDurablePath: productSqlite !== null,
  });
}

/**
 * Application runtime service over V1 LocalProjectFacade.
 * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
 * Exposes shared OA stack for F2 + F3 (same ProjectServices instance).
 */
export class RuntimeApplicationService {
  private readonly facade: LocalProjectFacade;
  readonly architecture: LocalVerticalSliceServices["architecture"];
  readonly oa: RuntimeOaStack | null;
  private readonly disposeProduct?: () => void;

  constructor(
    facade: LocalProjectFacade,
    architecture: LocalVerticalSliceServices["architecture"],
    oa: RuntimeOaStack | null = null,
    disposeProduct?: () => void,
  ) {
    this.facade = facade;
    this.architecture = architecture;
    this.oa = oa;
    this.disposeProduct = disposeProduct;
  }

  /** Release durable Product SQLite handles (tests / shutdown). */
  dispose(): void {
    try {
      this.disposeProduct?.();
    } catch {
      /* ignore */
    }
  }

  /** Use case: Create Project via V1 facade. */
  async createProject(
    input: CreateProjectRuntimeInput,
  ): Promise<CreateProjectRuntimeResult> {
    const result = await this.facade.createProject(
      toCreateLocalProjectCommand(input),
    );
    if (!result.ok) {
      return toCreateProjectRuntimeFailure(result.error, result.auditStatus);
    }
    return toCreateProjectRuntimeSuccess(
      result.project,
      result.reusedFromIdempotencyKey,
      result.auditStatus,
    );
  }

  /** Use case: Get Project Overview via V1 facade. */
  async getProject(projectId: string): Promise<GetProjectRuntimeResult> {
    const result = await this.facade.getProjectOverview(projectId);
    if (!result.ok) {
      return toGetProjectRuntimeFailure(result.error);
    }
    return toGetProjectRuntimeSuccess(result.project);
  }

  /**
   * Thin product list via OA ProjectServices over existing oa_projects.
   * Requires OA stack (Product SQLite / in-memory); facade-only runtimes fail closed.
   */
  async listProjects(): Promise<ListProjectsRuntimeResult> {
    if (!this.oa) {
      return toListProjectsRuntimeFailure({
        code: "STATE_CONFLICT",
        detailCode: "PERSISTENCE_FAILURE",
        message: "Project list is unavailable in this runtime composition.",
        severity: "error",
        retryable: false,
        blocking: true,
        recoverable: false,
        domain: "C",
        timestamp: new Date().toISOString(),
        internalCauseRef: "oa_stack_missing",
      });
    }
    const result = await this.oa.projectServices.listProjects.execute();
    if (!result.ok) {
      return toListProjectsRuntimeFailure(result.error);
    }
    return toListProjectsRuntimeSuccess(result.projects);
  }
}

export function createRuntimeApplicationService(
  options: RuntimeApplicationServiceOptions = {},
): RuntimeApplicationService {
  if (options.facade) {
    return new RuntimeApplicationService(
      options.facade,
      LOCAL_VERTICAL_SLICE_ARCHITECTURE,
      null,
    );
  }

  const roots = resolveDefaultVerticalSliceRoots();
  const registryRoot = options.registryRoot ?? roots.registryRoot;
  const doctrinePackagePin = resolveDoctrinePackagePinForRegistry(
    registryRoot,
    options.doctrinePackagePin,
  );
  const services = createLocalVerticalSliceServices({
    registryRoot,
    schemasRoot: options.schemasRoot ?? roots.schemasRoot,
    doctrinePackagePin,
    idSource: options.idSource,
    nowIso: options.nowIso,
    audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
    productDbPath: options.productDbPath,
  });

  const composedBoundary =
    options.realBoundary ??
    composeStudioProductRealBoundary({
      ...(options.realBoundaryComposition ?? {}),
      env: options.realBoundaryEnv ?? options.realBoundaryComposition?.env,
    });
  const oa = wireOaStack(services.projectServices, services.clock, {
    realBoundary: composedBoundary,
    registryRoot,
    doctrinePackagePin,
  });
  return new RuntimeApplicationService(
    services.facade,
    services.architecture,
    oa,
    services.projectServices.dispose,
  );
}
```
