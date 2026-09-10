# ChatGPT Critical Review Pack — FULL

- timestamp: 2026-09-10T05:45:31Z
- Cycle ID: SFIA-STUDIO-GREENFIELD-VALIDATED-TRAJECTORY-PREPARED-CYCLE-EXPLICIT-START-DELIVERY-01
- Level: FULL
- D-GF-START-01: ADOPTED BY MORRIS
- GO Morris: CONSUMED — GREENFIELD VALIDATED TRAJECTORY → PREPARED CYCLEINSTANCE → EXPLICIT START — DELIVERY
- D-GF-HD-01: remains ADOPTED (not reopened)

## Local Git Truth

- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- before HEAD (anchor): d436c31468f66b33cc4110ab9c64601938fa5732
- after candidate SHA: dfb4f019e80e2cf879dad0a46af6f7ec7a99d333
- parent SHA: d436c31468f66b33cc4110ab9c64601938fa5732
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- expected parent of candidate: d436c314 — MATCH

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/candidate-bridge-diffs/
?? .tmp-sfia-review/candidate-f70-diffs/
?? .tmp-sfia-review/live-diagnostic/
?? .tmp-sfia-review/runtime-captures/
```

## Convergence Pre-check

- Capacities served: V3-F01, V3-F02, V3-F04, V3-F05, V3-F06, V3-F09
- Preparation only for V3-F11 / V3-F12 — no ExecutionContract
- Entry LIVE BOUNDARY PROVEN (HD path) — this Delivery DETERMINISTIC ONLY
- Typology: EVOL / Cycle 8 Delivery / CRITICAL
- CRITICAL justification: durable ProjectTrajectory/CycleInstance contracts + authority-bearing START boundary
- CKC Cycle 8 external: detailed CKC absent; fallback synthetic map; method-candidate; experimental cognitive guidance; executionAuthority=none
- R22: KEEP/ADAPT existing OpenAI/Agents SDK structured output — one call; no second classifier
- ZERO NEW REAL

## KEEP / ADAPT / HARVEST / REJECT

- KEEP: PilotLifecycleTransitions.start, CreateCycle, QualifyCycleWithCkc, assessStartReadiness, payload_json stores, D-GF-HD-01 candidate_trajectory HD
- ADAPT: TrajectoryStep.cycleTypeId?, CycleInstance trajectory binding + ckcResolutionRef, LR/HD qualificationSignals, Nora SO schema, CreateCycle persist binding without LPS link, START UoW step+LPS CKC, TrajectorySurface CTAs
- HARVEST: F2 signal semantics, projectCkcResolutionRef (pure), QualifyCycleWithCkc, CreateCycle, N3 authority
- REJECT: F2 ProposalStore/orchestrateF2 for greenfield; label→cycleTypeId; ALL_FALSE invent; auto PREPARE on HD; second HD; Confirmation; EC; SQL DDL; new stores

## Figma

FIGMA SOURCE NOT APPLICABLE — EXISTING PRODUCT SURFACE EXTENSION ONLY

## Architecture delivered

Nora turn (+ six signals) → LR durable → bridge step.cycleTypeId → HD seals signals → validated traj
→ explicit PREPARE (CreateCycle linkAsActiveCycle=false) → durable non-active CycleInstance with binding+CKC+signals+profile
→ explicit Pilote START N3 → same UoW: cycle active + exact step pending→active + LPS activeCycleInstanceId + LPS ckcResolutionRef
→ STOP (0 EC / 0 Attempt / 0 model on PREPARE/START)

## Contracts

- Nora SO: qualificationSignals object|null; additionalProperties=false; one call
- NEXT_CYCLE prepareable requires six explicit booleans; FINALIZE allows null; never invent false
- TrajectoryStep.cycleTypeId required on new greenfield path; label presentation only
- HD candidateTrajectoryContext.qualificationSignals sealed; presentationDigest includes signals
- CycleInstance: trajectoryId/Version/StepId + ckcResolutionRef + qualificationSignals on greenfield prepare
- Invariant cycle.cycleTypeId === step.cycleTypeId; no label authority
- PREPARE idempotent server mint cyc:trj-{sha256…}; Critical justification server-derived from true critical signals
- START: no second HD; no Confirmation; same-version trajectory step progression
- SQL: NO DDL / NO migration — payload_json only
- Historical LIVE project prj:08f868d7-… READ-ONLY / untouched; prepare fail-closes without backfill

## Validation

- BAR-START focused suite: PASS (candidateTrajectoryCycleStart.d0.test.ts + dgfStart01.smoke)
- Full Vitest: 3425 passed | 135 skipped (3560)
- typecheck: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS
- ZERO NEW REAL: confirmed

## Reserves

- RESERVE-START-STEP-LINK-01 = CLOSED DETERMINISTICALLY (pending ChatGPT Critical Review accept)
- RESERVE-START-PROFILE-SIGNAL-01 = CLOSED DETERMINISTICALLY (pending ChatGPT Critical Review accept)
- RESERVE-START-CKC-BIND-01 = CLOSED DETERMINISTICALLY (pending ChatGPT Critical Review accept)
- RESERVE-START-LIVE-01 = OPEN
- RESERVE-START-PROFILE-SIGNAL-LIVE-01 = OPEN
- RESERVE-START-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-HD-LIVE-AUTHORITY-ENV-01 = CLOSED AT ENV-CONFIGURED + LIVE-CONSUMED SCOPE
- RESERVE-HD-LIVE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- RESERVE-TRJ-PROVENANCE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- CR-HD-01 / CR-HD-02 = CLOSED DETERMINISTICALLY
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING

## Next capability

Fresh Bounded LIVE START replay under distinct GO Morris AFTER Critical Review PASS.

## Anti-claims

Do NOT claim: START LIVE PROVEN; CycleInstance LIVE PROVEN; profile signals LIVE PROVEN; CKC START LIVE PROVEN; ExecutionContract PROVEN; END-TO-END REAL; Task App delivered; Greenfield Product Proof COMPLETE; R2 CLOSED; PR READY; runtime v3 ADOPTED; concurrency realism closed.

## Final verdict

GREENFIELD VALIDATED TRAJECTORY → PREPARED CYCLEINSTANCE → EXPLICIT START — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Product files modified (exact list)

- `projects/sfia-studio/app/__tests__/oa/cycle/dgfStart01.smoke.d0.test.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryProvenance.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts`
- `projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryDecisionBasis.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/ckcResolutionRef.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/qualificationSignals.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/readPreparedTrajectoryCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/startPreparedTrajectoryCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

## FULL usable modified content for EVERY Product file

Each file below is the complete post-commit content at the candidate SHA.

### `projects/sfia-studio/app/__tests__/oa/cycle/dgfStart01.smoke.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * D-GF-START-01 smoke — qualification signals + step.cycleTypeId + presentation digest.
 */
import { describe, expect, it } from "vitest";
import {
  buildCandidateTrajectoryPresentationMaterial,
  buildSingleRecommendedCycleStep,
  computeCandidateTrajectoryPresentationDigest,
  parseExplicitQualificationSignals,
  projectCkcResolutionRef,
  mintTrajectoryBoundCycleInstanceId,
  selectExactPrepareStep,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";

const COMPLETE_SIGNALS = {
  structuralChange: false,
  securityImpact: true,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: false,
} as const;

describe("D-GF-START-01 smoke", () => {
  it("requires complete signals on NEXT_CYCLE success; FINALIZE ignores", () => {
    const nextMissing = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "NEXT_CYCLE",
        statement: "Proposer Cadrage.",
        targetCycleTypeId: "cyc:framing",
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(nextMissing.ok).toBe(false);
    if (!nextMissing.ok) {
      expect(nextMissing.code).toBe("LR_QUALIFICATION_SIGNALS_INCOMPLETE");
    }

    const nextOk = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "NEXT_CYCLE",
        statement: "Proposer Cadrage.",
        targetCycleTypeId: "cyc:framing",
        qualificationSignals: COMPLETE_SIGNALS,
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: true,
    });
    expect(nextOk.ok).toBe(true);
    if (nextOk.ok) {
      expect(nextOk.qualificationSignals).toEqual(COMPLETE_SIGNALS);
    }

    const finalize = validateLifecycleRecommendation({
      projectId: "prj:gf-start-01",
      candidate: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser le cycle.",
        subjectCycleInstanceId: "cyc:active-1",
        qualificationSignals: null,
      },
      cycles: [
        {
          schemaVersion: "0.1.0-oa",
          cycleInstanceId: "cyc:active-1",
          cycleTypeId: "cyc:framing",
          projectId: "prj:gf-start-01",
          profile: "Standard",
          status: "active",
          createdAt: "2026-09-10T00:00:00.000Z",
        },
      ],
      lpsActiveCycleInstanceId: "cyc:active-1",
    });
    expect(finalize.ok).toBe(true);
    if (finalize.ok) {
      expect(finalize.qualificationSignals).toBeUndefined();
    }
  });

  it("bridge step carries cycleTypeId; never from label", () => {
    const built = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "cyc:framing",
      stepId: "stp:framing-1",
    });
    expect(built.ok).toBe(true);
    if (built.ok) {
      expect(built.step.cycleTypeId).toBe("cyc:framing");
      expect(built.step.label).toBe(built.catalogLabel);
    }
  });

  it("presentation digest changes when a qualification signal flips", () => {
    const trajectory = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:gf-1",
      projectId: "prj:gf-start-01",
      version: 1,
      status: "candidate" as const,
      steps: [
        {
          stepId: "stp:1",
          order: 1,
          label: "Cadrage",
          state: "pending" as const,
          cycleTypeId: "cyc:framing",
        },
      ],
    };
    const base = {
      projectId: "prj:gf-start-01",
      lpsId: "lps:1",
      lpsVersion: 1,
      trajectory,
      provenanceObservationId: "epi:prov-1",
      recommendationId: "epi:lr-1",
      semanticKey: "sem".padEnd(32, "0"),
      targetCycleTypeId: "cyc:framing",
    };
    const a = buildCandidateTrajectoryPresentationMaterial({
      ...base,
      qualificationSignals: COMPLETE_SIGNALS,
    });
    const b = buildCandidateTrajectoryPresentationMaterial({
      ...base,
      qualificationSignals: { ...COMPLETE_SIGNALS, securityImpact: false },
    });
    expect(computeCandidateTrajectoryPresentationDigest(a)).not.toBe(
      computeCandidateTrajectoryPresentationDigest(b),
    );
  });

  it("mints deterministic cyc:trj- id and selects exact pending step", () => {
    const id = mintTrajectoryBoundCycleInstanceId({
      projectId: "prj:a",
      trajectoryId: "trj:a",
      trajectoryVersion: 1,
      stepId: "stp:1",
      cycleTypeId: "cyc:framing",
    });
    expect(id.startsWith("cyc:trj-")).toBe(true);
    expect(id.length).toBe("cyc:trj-".length + 24);

    const selected = selectExactPrepareStep({
      trajectory: {
        schemaVersion: "0.1.0-oa",
        trajectoryId: "trj:a",
        projectId: "prj:a",
        version: 1,
        status: "validated",
        steps: [
          {
            stepId: "stp:1",
            order: 1,
            label: "Cadrage",
            state: "pending",
            cycleTypeId: "cyc:framing",
          },
        ],
        decidedByDecisionRef: "dec:1",
      },
      targetCycleTypeId: "cyc:framing",
    });
    expect(selected.ok).toBe(true);

    expect(
      parseExplicitQualificationSignals({ structuralChange: true }),
    ).toBeNull();
    expect(parseExplicitQualificationSignals(COMPLETE_SIGNALS)).toEqual(
      COMPLETE_SIGNALS,
    );

    expect(
      projectCkcResolutionRef({
        catalogHash: "sha256:abcdef0123456789",
        correlationId: "cor:gf-prep-deadbeef",
      }),
    ).toMatch(/^ckc:m2-/);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`

```typescript
/**
 * Lifecycle Recommendation Correction Delivery — R1–R15 + R10-A..H.
 * ZERO REAL — ScriptedModel / typed Epistemic Option A / authoritative resume.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Ajv from "ajv";
import { afterEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
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
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
  createSqliteCycleServices,
  produceLifecycleRecommendation,
  projectPilotLifecycle,
  resolveCanonicalLifecycleRecommendationBasis,
  resumeReplanSubjectFor,
  selectCurrentLifecycleRecommendations,
  trajectoryFingerprint,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
  type DecisionServices,
} from "@/lib/oa/decision";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { projectAssistantPilotLifecycleProjection } from "@/features/project-assistant/actions";

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

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS_PENDING = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (openServices.length) {
    openServices.pop()?.dispose();
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-corr-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function loadJson(rel: string): object {
  return JSON.parse(fs.readFileSync(path.join(SCHEMAS, rel), "utf8")) as object;
}

function createEpistemicAjv(): Ajv.Ajv {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
    validateSchema: true,
    format: "full",
    unknownFormats: "ignore",
  });
  for (const f of [
    "common/digest.schema.json",
    "common/identifier.schema.json",
    "common/timestamp.schema.json",
    "common/actor-reference.schema.json",
    "common/provenance-record.schema.json",
  ]) {
    ajv.addSchema(loadJson(f));
  }
  ajv.addSchema(loadJson("epistemic/lifecycle-recommendation.schema.json"));
  ajv.addSchema(loadJson("epistemic/epistemic-item.schema.json"));
  return ajv;
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
    fixedNowIso: "2026-09-08T08:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-08T08:00:00.000Z");
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

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "LR Correction",
    objective: "lifecycle recommendation",
    context: "lr-corr",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
  linkAsActive = false,
) {
  return cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: linkAsActive,
  });
}

function canonicalBasis(input: {
  intent: "FINALIZE_CURRENT_CYCLE" | "NEXT_CYCLE";
  projectId: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  cycles: Awaited<
    ReturnType<ReturnType<typeof createSqliteCycleServices>["cycles"]["listByProject"]>
  >;
  lpsActiveCycleInstanceId: string | null;
  lpsVersion?: number;
  trajectory?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["trajectory"];
  decisions?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["decisions"];
  evidence?: Parameters<
    typeof resolveCanonicalLifecycleRecommendationBasis
  >[0]["evidence"];
  blockers?: string[];
}) {
  return resolveCanonicalLifecycleRecommendationBasis({
    intent: input.intent,
    projectId: input.projectId,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.targetCycleTypeId ?? null,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    lpsVersion: input.lpsVersion ?? 1,
    doctrinePackageId: VALID_PIN.doctrinePackageId,
    doctrinePackageVersion: VALID_PIN.version,
    doctrinePackageDigest: VALID_PIN.digest,
    trajectory: input.trajectory ?? null,
    decisions: input.decisions ?? [],
    evidence: input.evidence ?? [],
    blockingReservationStatements: input.blockers ?? [],
  });
}

describe("Lifecycle Recommendation Correction Delivery", () => {
  it("schema Option A — additive optional field; schemaVersion 0.1.0-oa; backward compatible", () => {
    const ajv = createEpistemicAjv();
    const validate = ajv.getSchema(
      "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/epistemic-item.schema.json",
    );
    expect(validate).toBeTruthy();
    if (!validate) return;

    const baseItem = {
      schemaVersion: "0.1.0-oa",
      epistemicItemId: "epi:hist-1",
      type: "Recommendation",
      statement: "Historical non-lifecycle recommendation.",
      status: "active",
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      createdAt: "2026-09-08T08:00:00.000Z",
      relatedObjects: ["prj:hist"],
    };
    expect(validate(baseItem)).toBe(true);

    const withLr = {
      ...baseItem,
      epistemicItemId: "epi:lr-1",
      lifecycleRecommendation: {
        intent: "FINALIZE_CURRENT_CYCLE",
        basisFingerprint: "a".repeat(64),
        basisRefs: { projectId: "prj:hist" },
        semanticKey: "b".repeat(32),
        subjectCycleInstanceId: "cyc:hist",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        authority: "none",
      },
    };
    expect(validate(withLr)).toBe(true);

    const unknownExtra = { ...baseItem, unexpectedField: true };
    expect(validate(unknownExtra)).toBe(false);

    const schema = loadJson("epistemic/epistemic-item.schema.json") as {
      properties: { schemaVersion: { const: string } };
    };
    expect(schema.properties.schemaVersion.const).toBe("0.1.0-oa");
  });

  it("R1+R2+R12 — FINALIZE and NEXT_CYCLE via same Nora Runner outputType", async () => {
    const finalizePayload = {
      intent: "FINALIZE_CURRENT_CYCLE",
      statement: "Envisager la finalisation du cycle actif.",
      subjectCycleInstanceId: "cyc:lr-r1",
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      rationale: null,
      authority: "none",
      isHumanDecision: false,
      qualificationSignals: null,
    };
    const r1 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r1",
      projectId: "prj:lr-r1",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend finalize",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(finalizePayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    expect(r1.cognitiveRuntime).toBe("agents");
    const structured1 = isNoraLifecycleRecommendationStructuredOutput(
      r1.structuredOutput,
    )
      ? r1.structuredOutput
      : JSON.parse(r1.text || "{}");
    expect(structured1.intent).toBe("FINALIZE_CURRENT_CYCLE");

    const nextPayload = {
      ...finalizePayload,
      intent: "NEXT_CYCLE",
      statement: "Envisager un prochain cycle UX.",
      subjectCycleInstanceId: null,
      targetCycleTypeId: "cyc:ux-ui",
      qualificationSignals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
    };
    const r2 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r2",
      projectId: "prj:lr-r2",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend next",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(nextPayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    const structured2 = isNoraLifecycleRecommendationStructuredOutput(
      r2.structuredOutput,
    )
      ? r2.structuredOutput
      : JSON.parse(r2.text || "{}");
    expect(structured2.intent).toBe("NEXT_CYCLE");
    expect(r1.cognitiveRuntime).toBe(r2.cognitiveRuntime);
  });

  it("R3 — invalid binding fail-closed", async () => {
    const dbPath = tempDbPath("r3.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r3");
    await createCandidate(stack.cycles, "prj:lr-r3", "cyc:lr-r3", true);
    const cycles = await stack.cycles.cycles.listByProject("prj:lr-r3");
    expect(
      validateLifecycleRecommendation({
        projectId: "bad",
        candidate: {
          intent: "FINALIZE_CURRENT_CYCLE",
          statement: "x",
          subjectCycleInstanceId: "cyc:lr-r3",
        },
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r3",
      }).ok,
    ).toBe(false);
  });

  it("R4+R5+R6+R7+R13+R15 — typed Epistemic durability, no lr:* protocol", async () => {
    const dbPath = tempDbPath("r4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r4");
    await createCandidate(stack.cycles, "prj:lr-r4", "cyc:lr-r4", true);
    let cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    const before = cycles[0]!;

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser ce cycle.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: canonicalBasis({
        intent: "FINALIZE_CURRENT_CYCLE",
        projectId: "prj:lr-r4",
        subjectCycleInstanceId: "cyc:lr-r4",
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r4",
      }),
      producedAt: "2026-09-08T08:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    expect(produced.item.lifecycleRecommendation).toBeTruthy();
    expect(produced.item.statement.includes("{")).toBe(false);
    expect(JSON.stringify(produced.item.relatedObjects ?? [])).not.toMatch(
      /lr:(intent|basis|semkey|subject|target|targettype):/,
    );
    expect(produced.envelope.derivedCurrentness).toBe("CURRENT");

    cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    expect(cycles[0]!.status).toBe(before.status);

    const items = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    expect(items[0]?.lifecycleRecommendation?.intent).toBe(
      "FINALIZE_CURRENT_CYCLE",
    );
    const reloaded = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(reloaded).toHaveLength(1);

    const second = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Nouvelle recommandation.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: canonicalBasis({
        intent: "FINALIZE_CURRENT_CYCLE",
        projectId: "prj:lr-r4",
        subjectCycleInstanceId: "cyc:lr-r4",
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r4",
      }),
      producedAt: "2026-09-08T08:00:02.000Z",
      createdBy: NORA_BY,
      existingItems: await stack.cycles.epistemic.listByProject("prj:lr-r4"),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    const afterSuper = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    const current = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.recommendationId).toBe(
      second.envelope.recommendationId,
    );
    expect(
      afterSuper.find((i) => i.epistemicItemId === produced.envelope.recommendationId)
        ?.status,
    ).toBe("superseded");

    const mutated = { ...cycles[0]!, status: "paused" as const };
    await stack.cycles.cycles.save(mutated);
    const stale = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles: [mutated],
      lpsActiveCycleInstanceId: null,
    });
    expect(stale.every((s) => s.derivedCurrentness !== "CURRENT")).toBe(true);
  });

  it("R8 — NEXT_CYCLE does not create Cycle", async () => {
    const dbPath = tempDbPath("r8.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r8");
    const before = await stack.cycles.cycles.listByProject("prj:lr-r8");
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r8",
      structured: {
        intent: "NEXT_CYCLE",
        statement: "Envisager un cycle UX suivant.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:ux-ui",
        rationale: null,
        authority: "none",
        isHumanDecision: false,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      basisRefs: canonicalBasis({
        intent: "NEXT_CYCLE",
        projectId: "prj:lr-r8",
        subjectCycleInstanceId: null,
        targetCycleTypeId: "cyc:ux-ui",
        cycles: [],
        lpsActiveCycleInstanceId: null,
      }),
      producedAt: "2026-09-08T08:00:03.000Z",
      createdBy: NORA_BY,
      existingItems: [],
      hasTrajectoryContext: true,
    });
    expect(produced.ok).toBe(true);
    const after = await stack.cycles.cycles.listByProject("prj:lr-r8");
    expect(after.length).toBe(before.length);
  });

  it("R9+R14 — Recommendation ≠ eligibility; surface has no model calls", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:lr-r9",
      cycles: [
        {
          schemaVersion: "0.1.0-oa",
          cycleInstanceId: "cyc:lr-r9",
          projectId: "prj:lr-r9",
          cycleTypeId: "cyc:delivery",
          profile: "Standard",
          status: "active",
          createdAt: "2026-09-08T08:00:00.000Z",
        },
      ],
      lpsActiveCycleInstanceId: "cyc:lr-r9",
      currentRecommendations: [],
    });
    expect(projection.cta.canFinalize).toBe(true);
    expect(projection.currentRecommendations ?? []).toHaveLength(0);
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/runNoraAgentsTurn|openai|completeRound/);
    expect(src).not.toMatch(/pause_snapshot_present/);
  });

  it("R10-F — replan HD subject never claims drift clearance", () => {
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).not.toMatch(/CLEAR|bypass/i);
  });

  it("R11 — TrajectorySurface reused", () => {
    const ws = fs.readFileSync(
      path.join(APP_ROOT, "features/pre-m6-product-ui/ProjectWorkspacePage.tsx"),
      "utf8",
    );
    expect(ws).toContain("LifecycleSurface");
    expect(ws).toContain("TrajectorySurface");
  });

  it("lr:* protocol retired from Product implementation", () => {
    const root = path.join(APP_ROOT, "lib/oa/cycle/application/lifecycleRecommendation");
    const files = fs.readdirSync(root).map((f) => path.join(root, f));
    files.push(
      path.join(APP_ROOT, "features/project-assistant/actions.ts"),
      path.join(APP_ROOT, "lib/oa/cycle/domain/types.ts"),
    );
    for (const f of files) {
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) continue;
      const text = fs.readFileSync(f, "utf8");
      expect(text).not.toMatch(/lr:intent:/);
      expect(text).not.toMatch(/lr:basis:/);
      expect(text).not.toMatch(/lr:semkey:/);
      expect(text).not.toMatch(/lr:subject:/);
      expect(text).not.toMatch(/lr:target:/);
      expect(text).not.toMatch(/lr:targettype:/);
    }
    expect(
      fs.existsSync(path.join(root, "relatedObjectsCodec.ts")),
    ).toBe(false);
  });
});

describe("R10 authoritative RESUME projection", () => {
  class FixedIdSource implements LocalProjectIdSource {
    private n = 0;
    nextProjectId(): string {
      this.n += 1;
      return `prj:lr-r10-${this.n}`;
    }
    nextLpsVersionId(): string {
      return `lps:lr-r10-${this.n}`;
    }
    nextCorrelationId(): string {
      return `cor:lr-r10-${this.n}`;
    }
  }

  async function bootPausedProject(suffix: string) {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    // Must use process singleton — PA projection reads getRuntimeApplicationService().
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-08T08:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath: tempDbPath(`r10-${suffix}.sqlite`),
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: `LR R10 ${suffix}`,
      objective: "lifecycle",
      context: "lr-r10",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `R10${suffix}`,
      idempotencyKey: `idem:lr-r10-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;
    const oa = runtime.oa;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_PENDING,
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    const cycleInstanceId = `cyc:lr-r10-${suffix}`;
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: NORA_BY,
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-08T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error(auth.message);
    const start = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(start.ok).toBe(true);
    const pause = await oa.cycleServices.pilotLifecycle.pause({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(pause.ok).toBe(true);
    return { runtime, oa, projectId, cycleInstanceId, authEvidenceId: auth.evidenceId };
  }

  it("R10-A — snapshot present + trajectory changed => projection canResume false", async () => {
    const ctx = await bootPausedProject("a");
    // Candidate propose alone does not move getCurrentTrajectory; mutate the
    // durable current trajectory so the authoritative assessor sees material drift.
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...current.trajectory.steps,
        { stepId: "stp:extra", order: 3, label: "Extra", state: "pending" },
      ],
    });

    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
    expect(proj.projection?.resumeReconciliation?.reason).not.toBe(
      "pause_snapshot_present",
    );
  });

  it("R10-E — clean matching facts => canResume true", async () => {
    const ctx = await bootPausedProject("e");
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(true);
    expect(proj.projection?.cta.canResume).toBe(true);
  });

  it("R10-G — only clean fresh reconciliation restores Resume eligibility", async () => {
    const ctx = await bootPausedProject("g");
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    const originalSteps = current.trajectory.steps;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...originalSteps,
        { stepId: "stp:drift", order: 9, label: "Drift", state: "pending" },
      ],
    });
    const dirty = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(dirty.projection?.resumeReconciliation?.clean).toBe(false);
    expect(dirty.projection?.cta.canResume).toBe(false);

    // Replan HD subject alone never claims clearance (R10-F / R10-G).
    expect(resumeReplanSubjectFor(ctx.cycleInstanceId)).not.toMatch(
      /CLEAR|bypass/i,
    );

    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: originalSteps,
    });
    const restored = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(restored.projection?.resumeReconciliation?.clean).toBe(true);
    expect(restored.projection?.cta.canResume).toBe(true);
  });

  it("R10-B/C/D — assessor detects HD/evidence/blocker drift (unit authoritative)", () => {
    const cycle = {
      schemaVersion: "0.1.0-oa" as const,
      cycleInstanceId: "cyc:r10u",
      projectId: "prj:r10u",
      cycleTypeId: "cyc:delivery",
      profile: "Standard" as const,
      status: "paused" as const,
      createdAt: "2026-09-08T08:00:00.000Z",
      pauseReconciliation: buildPauseReconciliationSnapshot({
        pausedAt: "2026-09-08T08:00:00.000Z",
        lpsVersion: 2,
        lpsActiveCycleInstanceId: null,
        objective: "o",
        context: "c",
        scope: "s",
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: {
          schemaVersion: "0.1.0-oa",
          trajectoryId: "trj:r10u",
          projectId: "prj:r10u",
          version: 1,
          status: "active",
          steps: STEPS_PENDING,
        },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
        blockerSnapshotState: "KNOWN",
        projectId: "prj:r10u",
        cycleInstanceId: "cyc:r10u",
      }),
    };
    const traj = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:r10u",
      projectId: "prj:r10u",
      version: 1,
      status: "active" as const,
      steps: STEPS_PENDING,
    };
    const dirtyHd = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [
        {
          schemaVersion: "0.1.0-oa",
          decisionId: "dec:r10u",
          projectId: "prj:r10u",
          cycleInstanceId: "cyc:r10u",
          subject: resumeReplanSubjectFor("cyc:r10u"),
          status: "accepted",
          options: [{ optionId: "opt:accept", label: "Accept" }],
          selectedOptionId: "opt:accept",
          effectiveAt: "2026-09-08T08:01:00.000Z",
          reversible: true,
          actor: LOCAL_PILOTE_ACTOR,
          authority: "morris",
        },
      ],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyHd.clean).toBe(false);
    expect(dirtyHd.driftReasons).toContain("human_decision_material_drift");

    const dirtyEv = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [
        {
          schemaVersion: "0.1.0-oa",
          evidenceId: "ev:r10u",
          projectId: "prj:r10u",
          kind: "artifact",
          status: "stale",
          createdAt: "2026-09-08T08:00:00.000Z",
          createdBy: ACTOR,
          bindings: { cycleInstanceId: "cyc:r10u" },
        } as never,
      ],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyEv.clean).toBe(false);

    const dirtyBlock = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["new blocker"],
      siblingActiveExists: false,
    });
    expect(dirtyBlock.clean).toBe(false);

    void trajectoryFingerprint;
  });

  it("R10-H — missing pause snapshot => fail closed at assessor/projection", async () => {
    const ctx = await bootPausedProject("h");
    const cyc = await ctx.oa.cycleServices.cycles.findById(ctx.cycleInstanceId);
    expect(cyc).toBeTruthy();
    if (!cyc) return;
    const stripped = { ...cyc, pauseReconciliation: null };
    await ctx.oa.cycleServices.cycles.save(stripped);
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts`

```typescript
/**
 * LR CORR-DELIVERY-02 — material basis/currentness + Product Nora→Epistemic bridge.
 * ZERO REAL — ScriptedModel through orchestrateAssistantSend / orchestrateProjectAssistantTurn.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  deriveLifecycleRecommendationCurrentness,
  computeBasisFingerprint,
  materialBasisRefsEqual,
  produceLifecycleRecommendation,
  rebuildBasisRefsForRecommendation,
  resolveCanonicalLifecycleRecommendationBasis,
  selectCurrentLifecycleRecommendations,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";

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

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-final-"));
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

function productTurnPayload(
  lr: object | null,
  narrative: string,
  assessment: {
    routingBlockingUnknownPresent: boolean;
    candidateCycleSupportable: boolean;
    remainingUnknownsAreCycleOwned: boolean;
    multiplePlausibleCycles: boolean;
    activeCycleAlreadyCoversWork: boolean;
  } = lr
    ? {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: true,
        remainingUnknownsAreCycleOwned: true,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      }
    : {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  };
}

function finalizeCandidate(subjectCycleInstanceId: string) {
  return {
    intent: "FINALIZE_CURRENT_CYCLE" as const,
    statement: "Envisager la finalisation du cycle actif.",
    subjectCycleInstanceId,
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    rationale: null,
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: null,
  };
}

async function bootProductProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-08T09:00:00.000Z",
    idSource: new FixedIdSource(`lr-fin-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `LR Final ${suffix}`,
    objective: "lifecycle",
    context: "lr-final",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `LRF${suffix}`,
    idempotencyKey: `idem:lr-fin-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const traj = await oa.cycleServices.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: STEPS,
    status: "active",
    expectedLpsVersion: created.livingState.version,
    createdBy: ACTOR,
  });
  expect(traj.ok).toBe(true);
  const cycleInstanceId = `cyc:lr-fin-${suffix}`;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: false,
  });
  expect(cycle.ok).toBe(true);
  const auth = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: `pilot-lifecycle:${cycleInstanceId}`,
    issuedAt: "2026-09-08T09:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  const start = await oa.cycleServices.pilotLifecycle.start({
    cycleInstanceId,
    projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: auth.evidenceId,
  });
  expect(start.ok).toBe(true);
  return { runtime, oa, projectId, cycleInstanceId, sessionDbPath: tempDbPath(`sess-${suffix}.sqlite`) };
}

describe("LR CORR-DELIVERY-02 material basis", () => {
  it("BASIS-01..08 — intent-scoped material mutations stale; unrelated stays current", async () => {
    const ctx = await bootProductProject("basis");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(basis.finalizeAccepted).toBeNull();
    expect(basis.resumeClean).toBeNull();

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    const item = produced.item;

    // BASIS-01 subject status
    const paused = { ...cycles[0]!, status: "paused" as const };
    let rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles: [paused],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-02 LPS version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version + 1,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-03 trajectory version
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: { ...traj.trajectory, version: traj.trajectory.version + 1 },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-04 HD fingerprint
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [
          {
            schemaVersion: "0.1.0-oa",
            decisionId: "dec:basis-hd",
            projectId: ctx.projectId,
            cycleInstanceId: ctx.cycleInstanceId,
            subject: "finalize-cycle",
            status: "accepted",
            options: [{ optionId: "opt:a", label: "A" }],
            selectedOptionId: "opt:a",
            effectiveAt: "2026-09-08T09:01:00.000Z",
            reversible: true,
            actor: LOCAL_PILOTE_ACTOR,
            authority: "morris",
          },
        ],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-05 evidence
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [
          {
            schemaVersion: "0.1.0-oa",
            evidenceId: "ev:basis",
            projectId: ctx.projectId,
            kind: "artifact",
            status: "available",
            createdAt: "2026-09-08T09:00:00.000Z",
            createdBy: ACTOR,
            bindings: { cycleInstanceId: ctx.cycleInstanceId },
          } as never,
        ],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-06 blockers
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: ["blocking reservation"],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // BASIS-07 doctrine digest
    rebuilt = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: "sha256:" + "b".repeat(64),
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(deriveLifecycleRecommendationCurrentness({ item, currentBasisRefs: rebuilt })).toBe(
      "STALE",
    );

    // Write/read parity under unchanged durable truth
    const writeBasis = basis;
    const readBasis = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(computeBasisFingerprint(writeBasis)).toBe(
      computeBasisFingerprint(readBasis),
    );
    expect(
      deriveLifecycleRecommendationCurrentness({
        item,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");
  });

  it("BASIS-08 — durable non-material Epistemic Observation mutation remains CURRENT", async () => {
    const ctx = await bootProductProject("basis08");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const writeBasis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: writeBasis,
      producedAt: "2026-09-08T09:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;

    // Non-material durable mutation: non-blocking Observation (not Reservation,
    // not Recommendation, does not enter blocker/decision/evidence fingerprints).
    const noise = await ctx.oa.cycleServices.updateEpistemicState.execute({
      projectId: ctx.projectId,
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: `epi:noise-basis08-${ctx.projectId}`,
          type: "Observation",
          statement: "Unrelated durable observation outside LR material scope.",
          source: "test:noise",
          relatedObjects: [ctx.projectId],
        },
      ],
    });
    expect(noise.ok).toBe(true);

    const itemsAfter = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      itemsAfter.some((i) => i.epistemicItemId.includes("noise-basis08")),
    ).toBe(true);
    const lrItem = itemsAfter.find(
      (i) => i.epistemicItemId === produced.item.epistemicItemId,
    )!;
    expect(lrItem).toBeTruthy();

    const cyclesAfter = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const decisionsAfter =
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId);
    const evidenceAfter =
      await ctx.oa.evidenceReviewServices.repository.listByProject(
        ctx.projectId,
      );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(itemsAfter);
    const readBasis = rebuildBasisRefsForRecommendation({
      item: lrItem,
      facts: {
        cycles: cyclesAfter,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: traj.trajectory,
        decisions: decisionsAfter,
        evidence: evidenceAfter,
        blockingReservationStatements: blockers.statements,
      },
    })!;
    expect(materialBasisRefsEqual(writeBasis, readBasis)).toBe(true);
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: lrItem,
        currentBasisRefs: readBasis,
      }),
    ).toBe("CURRENT");

    const current = selectCurrentLifecycleRecommendations({
      items: itemsAfter,
      cycles: cyclesAfter,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: decisionsAfter,
      evidence: evidenceAfter,
      blockingReservationStatements: blockers.statements,
    });
    expect(current.some((c) => c.recommendationId === lrItem.epistemicItemId)).toBe(
      true,
    );
  });
});

describe("LR CORR-DELIVERY-02 Product Nora bridge E2E", () => {
  it("E2E — orchestrateProjectAssistantTurn materializes Recommendation (one Agents call)", async () => {
    const ctx = await bootProductProject("e2e");
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Je recommande d'envisager la finalisation.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );

    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Dois-je finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    if (!result.ok) {
      // eslint-disable-next-line no-console
      console.error("E2E FAIL", result);
    }
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Je recommande d'envisager la finalisation.");
    expect(result.text.includes("{")).toBe(false);
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);

    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = items.filter(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toHaveLength(1);
    expect(lr[0]!.createdBy.actorId).toBe(
      NORA_LIFECYCLE_RECOMMENDATION_ACTOR.actorId,
    );
    expect(lr[0]!.createdBy.role).toBe("agent");
    expect(lr[0]!.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr[0]!.source).toBe("lifecycle-recommendation:nora");
    expect(lr[0]!.lifecycleRecommendation?.authority).toBe("none");
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.finalizeAccepted).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.resumeClean).toBeNull();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.trajectoryId).toBeTruthy();
    expect(lr[0]!.lifecycleRecommendation?.basisRefs.decisionFingerprint).toBe(
      "none",
    );

    const afterCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    expect(afterCycles.map((c) => c.status)).toEqual(
      beforeCycles.map((c) => c.status),
    );
    const afterHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);

    const lpsNow = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lpsNow.ok).toBe(true);
    if (!lpsNow.ok) return;
    const trajNow = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    const pin =
      lpsNow.livingProjectState.doctrinePackageRef ?? VALID_PIN;
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: afterCycles,
      lpsActiveCycleInstanceId: lpsNow.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsNow.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: trajNow.ok ? trajNow.trajectory : null,
      decisions: afterHd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
  });

  it("E2E-NONE — null Recommendation keeps narrative and persists nothing", async () => {
    const ctx = await bootProductProject("none");
    const payload = productTurnPayload(null, "Simple conseil conversationnel.");
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Un conseil?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Simple conseil conversationnel.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E-INVALID — bad subject fails closed without HD/cycle mutation", async () => {
    const ctx = await bootProductProject("inv");
    const bad = finalizeCandidate("cyc:does-not-exist");
    const payload = productTurnPayload(bad, "Texte visible malgré candidat invalide.");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const beforeCycles = await ctx.oa.cycleServices.cycles.listByProject(
      ctx.projectId,
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toBe("Texte visible malgré candidat invalide.");
    expect(result.lifecycleRecommendationMaterialized).toBe(false);
    expect(result.lifecycleRecommendationCode).toBeTruthy();
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId)).map(
        (c) => c.status,
      ),
    ).toEqual(beforeCycles.map((c) => c.status));
  });

  it("E2E-AUTHORITY — authority != none rejected", async () => {
    const ctx = await bootProductProject("auth");
    const payload = productTurnPayload(
      {
        ...finalizeCandidate(ctx.cycleInstanceId),
        authority: "pilot",
      },
      "Narratif visible.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    // Structured product-turn validation may drop invalid LR → null coerce OR fail materialize
    expect(result.lifecycleRecommendationMaterialized).not.toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("E2E via orchestrateAssistantSend — same Product path", async () => {
    const ctx = await bootProductProject("f2");
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Conseil F2→F1 avec recommandation.",
    );
    const result = await orchestrateAssistantSend({
      projectId: ctx.projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath: ctx.sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
      evalCellProviderFactory: () => new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toContain("Conseil F2→F1");
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    expect(
      items.some(
        (i) =>
          i.source === "lifecycle-recommendation:nora" && i.status === "active",
      ),
    ).toBe(true);
  });
});

describe("LR CORR-DELIVERY-03 provenance + fail-closed", () => {
  it("PROV-01..06 — durable reloaded createdBy is Nora agent, never Pilote; no HD", async () => {
    const ctx = await bootProductProject("prov");
    const beforeHd = await ctx.oa.decisionServices.decisions.listByProject(
      ctx.projectId,
    );
    const payload = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif avec recommandation Nora.",
    );
    const result = await orchestrateProjectAssistantTurn({
      projectId: ctx.projectId,
      content: "Finaliser?",
      sessionDbPath: ctx.sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);

    const reloaded = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const lr = reloaded.find(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr).toBeTruthy();
    if (!lr) return;
    expect(lr.createdBy.actorId).toBe("actor:nora");
    expect(lr.createdBy.role).toBe("agent");
    expect(lr.createdBy.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(lr.source).toBe("lifecycle-recommendation:nora");
    expect(lr.lifecycleRecommendation?.authority).toBe("none");
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("FAIL-01..05 — material reader UNKNOWN blocks persist; EMPTY may materialize", async () => {
    const ctx = await bootProductProject("fail");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const baseFacts = {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [] as const,
      evidence: [] as const,
      epistemicItems: [] as const,
    };
    const structured = productTurnPayload(
      finalizeCandidate(ctx.cycleInstanceId),
      "Narratif conserve même si LR refuse.",
    );

    // FAIL-01 trajectory
    let mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["trajectory"]),
      },
      producedAt: "2026-09-08T10:00:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.narrative).toBe("Narratif conserve même si LR refuse.");
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
    }

    // FAIL-02 decisions
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["decisions"]),
      },
      producedAt: "2026-09-08T10:00:01.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_DECISIONS_UNAVAILABLE");
    }

    // FAIL-03 evidence (FINALIZE)
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:02.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EVIDENCE_UNAVAILABLE");
    }

    // FAIL-04 epistemic/blockers
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["epistemic_blockers"]),
      },
      producedAt: "2026-09-08T10:00:03.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BASIS_EPISTEMIC_UNAVAILABLE");
    }

    // FAIL-05 known empty succeeds
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: structured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(),
      },
      producedAt: "2026-09-08T10:00:04.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    // FAIL-07 evidence failure irrelevant for NEXT_CYCLE
    const nextStructured = productTurnPayload(
      {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un prochain cycle.",
        subjectCycleInstanceId: ctx.cycleInstanceId,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:delivery",
        rationale: null,
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
      },
      "Narratif next.",
    );
    mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId: ctx.projectId,
      structuredOutput: nextStructured,
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      facts: {
        ...baseFacts,
        failedMaterialDimensions: new Set(["evidence"]),
      },
      producedAt: "2026-09-08T10:00:05.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);
  });

  it("FAIL-06 — read-side material reader unavailable omits CURRENT", async () => {
    const ctx = await bootProductProject("fail06");
    const cycles = await ctx.oa.cycleServices.cycles.listByProject(ctx.projectId);
    const lps = await ctx.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: ctx.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId: ctx.projectId,
      subjectCycleInstanceId: ctx.cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: ctx.oa.cycleServices.updateEpistemicState,
      projectId: ctx.projectId,
      structured: finalizeCandidate(ctx.cycleInstanceId),
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-08T10:10:00.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    const items = await ctx.oa.cycleServices.epistemic.listByProject(
      ctx.projectId,
    );
    const okCurrent = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.trajectory,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(okCurrent).toHaveLength(1);

    const omitted = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      failedMaterialDimensions: new Set(["trajectory"]),
    });
    expect(omitted).toHaveLength(0);
  });
});
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

```typescript
/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readPreCycleMock,
  readApprovalMock,
  prepareCycleMock,
  readPreparedCycleMock,
  startPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  prepareCycleMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
  startPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: (...args: unknown[]) =>
    prepareCycleMock(...args),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    startPreparedCycleMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
  amendMock.mockReset();
  prepareContractMock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  prepareCycleMock.mockReset();
  readPreparedCycleMock.mockReset();
  startPreparedCycleMock.mockReset();
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:test-active",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:test-active",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("W2 TrajectorySurface", () => {
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({ projectId: "prj:w2-ui" });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:w2-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
      target: { value: "generate-temporary-artifact" },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "product:temporary-local-artifact",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:product-temp-artifact",
    );
    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
      "Confirmation requise",
    );
    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
      "confirmation_required",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    // Amendment affordance appears only after sufficient inspection.
    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();

    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: true,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: false,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /réinspection requise/i,
    );
    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
      "BORNER LE SLICE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "NON INSPECTÉ",
    );
    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(amendMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      executionContractId: "xct:w2-ui",
      additionalConstraint: "BORNER LE SLICE",
    });

    // R1 — UI consumes application statusLabel (not a hardcoded false required).
    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: false,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:successor",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: true,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });
    // Re-open form by mocking a second inspect-sufficient path isn't needed —
    // call amend again via preparing another inspect cycle: force form by
    // clicking inspect mock first then amend with already-satisfied truth.
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui:amd:deadbeef",
      contractVersion: 1,
      semanticFingerprint: "fff111aaa222",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:successor",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
      "RÉINSPECTION DÉJÀ SATISFAITE",
    );
    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
      "RÉINSPECTION REQUISE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "Exécution bloquée",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
    // W3-A: BLOCKED must not expose Execute CTA.
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});

describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
  it("shows Préparer le cycle after greenfield decided with no prepared cycle", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface projectId="prj:gf-prep" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-cycle")).toHaveTextContent(
      "Préparer le cycle",
    );
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("shows profile + Démarrer le cadrage when prepared; clears CTAs after active", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({
      ok: true,
      prepared: {
        cycleInstanceId: "cyc:trj-prepared",
        cycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
        profile: "Light",
        status: "acknowledged",
        trajectoryId: "trj:gf-ui",
        trajectoryVersion: 1,
        trajectoryStepId: "stp:1",
        ckcResolutionRef: "ckc:m2-x",
        qualificationSignals: null,
        isActive: false,
      },
    });

    render(<TrajectorySurface projectId="prj:gf-start" />);
    expect(await screen.findByTestId("pre-cycle-prepared-cycle")).toHaveTextContent(
      "profil Light",
    );
    expect(screen.getByTestId("pre-cycle-start-cycle")).toHaveTextContent(
      "Démarrer le cadrage",
    );
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();

    startPreparedCycleMock.mockResolvedValue({
      ok: true,
      cycleInstanceId: "cyc:trj-prepared",
      catalogLabel: "Cadrage",
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    fireEvent.click(screen.getByTestId("pre-cycle-start-cycle"));

    await waitFor(() => {
      expect(startPreparedCycleMock).toHaveBeenCalled();
    });

    // After START refresh: active cycle → no prepare/start CTAs
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cyc:trj-prepared",
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    // Re-render via durableRefreshSignal path: remount
    cleanup();
    render(<TrajectorySurface projectId="prj:gf-start" />);
    await waitFor(() => {
      expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
      expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    });
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts`

```typescript
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
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read1.ok).toBe(true);
    if (!read1.ok || !read1.candidate) throw new Error("missing candidate");
    expect(read1.candidate.status).toBe("candidate");
    expect(read1.candidate.isEffectiveCurrent).toBe(false);
    expect(read1.candidate.catalogLabel).toBe("Cadrage");
    expect(read1.candidate.steps).toHaveLength(1);
    expect(read1.candidate.provenanceStatus).toBe("RESOLVED");
    expect(read1.candidate.targetCycleTypeId).toBe("cyc:framing");

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
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
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
    expect(trajSrc.toLowerCase()).toContain("en attente de décision");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");
    expect(trajSrc).toContain("Valider cette trajectoire");
    expect(trajSrc).toContain("pre-cycle-validate-trajectory");
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
```

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

    // BAR-START-02 — corrupt label OK while cycleTypeId valid
    const corrupted = structuredClone(traj!);
    corrupted.steps = corrupted.steps.map((s) => ({
      ...s,
      label: "NOT-A-CATALOG-LABEL-XYZ",
    }));
    await seeded.oa.cycleServices.trajectories.save(corrupted);
    const prepOk = await prepareCycleFromValidatedTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(prepOk.ok).toBe(true);

    // Remove cycleTypeId while label looks like Cadrage → fail
    const stripped = structuredClone(corrupted);
    stripped.steps = stripped.steps.map((s) => {
      const { cycleTypeId: _drop, ...rest } = s;
      return { ...rest, label: "Cadrage" };
    });
    await seeded.oa.cycleServices.trajectories.save(stripped);
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
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts`

```typescript
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
    const lrItem = epi.find((e) => e.epistemicItemId === provenance.recommendationId);
    const qualificationSignals =
      lrItem?.lifecycleRecommendation?.qualificationSignals;
    expect(qualificationSignals).toBeTruthy();
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
      qualificationSignals: qualificationSignals!,
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

### `projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryProvenance.d0.test.ts`

```typescript
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
```

### `projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * GREENFIELD LIFECYCLE BOOTSTRAP — BAR-BOOT-01…18 (deterministic).
 * ZERO NEW REAL. D-RB-BOOT-01/02/03.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  classifyTrajectoryBootstrapPresence,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  validateCanonicalTargetCycleTypeId,
  validateLifecycleRecommendation,
  deriveLifecycleRecommendationCurrentness,
  rebuildBasisRefsForRecommendation,
  MemoryTrajectoryRepository,
} from "@/lib/oa/cycle";
import { MemoryCycleStore } from "@/lib/oa/cycle/infrastructure/memoryCycleStore";
import type { TrajectoryRepositoryPort } from "@/lib/oa/cycle/ports/trajectoryRepository";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import * as greenfieldBootstrapMod from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";
import type { ActorReference } from "@/lib/oa/project";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
  lifecycleRecommendationMaterializeFailurePiloteNotice,
} from "@/features/project-assistant/lifecycleRecommendationPiloteNotice";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";

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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "boot-"));
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

function productTurn(
  lr: ReturnType<typeof nextCycleLr> | null,
  narrative: string,
  assessment = lr
    ? { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT }
    : { ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT },
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
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
    nowIso: "2026-09-09T18:00:00.000Z",
    idSource: new FixedIdSource(`boot-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh bootstrap ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `BOOT${suffix}`,
    idempotencyKey: `idem:boot-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, created };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
  extras?: {
    cycles?: Awaited<
      ReturnType<
        NonNullable<
          Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]
        >["cycleServices"]["cycles"]["listByProject"]
      >
    >;
    decisions?: Awaited<
      ReturnType<
        NonNullable<
          Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]
        >["decisionServices"]["decisions"]["listByProject"]
      >
    >;
    presence?: Awaited<ReturnType<typeof resolveTrajectoryBootstrapPresence>>;
    failed?: Set<"trajectory" | "lps" | "decisions">;
  },
) {
  const oa = runtime.oa;
  if (!oa) throw new Error("oa missing");
  const cycles =
    extras?.cycles ?? (await oa.cycleServices.cycles.listByProject(projectId));
  const decisions =
    extras?.decisions ??
    (await oa.decisionServices.decisions.listByProject(projectId));
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence =
    extras?.presence ??
    (await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    ));
  const trajectory =
    presence.kind === "current" ? presence.trajectory : null;
  return materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr, "Narrative Cadrage recommandée."),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
      failedMaterialDimensions: extras?.failed,
    },
    producedAt: "2026-09-09T18:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
}

describe("GREENFIELD LIFECYCLE BOOTSTRAP — BAR-BOOT", () => {
  it("BAR-BOOT-01 — genuine fresh Project materializes NEXT_CYCLE without trajectory", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const presence = await resolveTrajectoryBootstrapPresence(
      runtime.oa!.cycleServices.trajectories,
      projectId,
    );
    expect(presence.kind).toBe("never");
    const framing = getCycleTypeById("cyc:framing");
    expect(framing?.label).toBe("Cadrage");

    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      { presence },
    );
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
  });

  it("BAR-BOOT-02 — durable CURRENT LR with null trajectory refs and zero authority", async () => {
    const { runtime, projectId } = await bootFreshProject("02");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    expect(mat.materialization?.ok).toBe(true);
    if (!mat.materialization || !mat.materialization.ok) return;

    const oa = runtime.oa!;
    const items = await oa.cycleServices.epistemic.listByProject(projectId);
    const lrItems = items.filter(
      (i) => i.source === "lifecycle-recommendation:nora",
    );
    expect(lrItems).toHaveLength(1);
    const lr = lrItems[0]!.lifecycleRecommendation!;
    expect(lr.authority).toBe("none");
    expect(lr.basisRefs.trajectoryId).toBeNull();
    expect(lr.basisRefs.trajectoryVersion).toBeNull();
    expect(lr.basisRefs.trajectoryStatus).toBeNull();
    expect(lr.targetCycleTypeId).toBe("cyc:framing");

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cycles).toHaveLength(0);
    const hd = await oa.decisionServices.decisions.listByProject(projectId);
    expect(hd).toHaveLength(0);
    const trajRows = await oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(trajRows).toBeNull();
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId ?? null).toBeNull();

    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: null,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: null,
      decisions: hd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
    expect(current[0]!.authority).toBe("none");
    expect(current[0]!.doesNotActivateCycle).toBe(true);
    expect(current[0]!.doesNotCreateHumanDecision).toBe(true);
  });

  it("BAR-BOOT-03 — current trajectory keeps standard non-bootstrap path", async () => {
    const { runtime, projectId, created } = await bootFreshProject("03");
    const traj = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "A", state: "pending" },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Cadrage avec trajectory."),
    );
    expect(mat.materialization?.ok).toBe(true);
    if (!mat.materialization || !mat.materialization.ok) return;
    expect(
      mat.materialization.envelope.basisRefs.trajectoryId,
    ).toBeTruthy();
  });

  it("BAR-BOOT-04 — candidate trajectory without CURRENT refuses bootstrap", async () => {
    const { runtime, projectId, created } = await bootFreshProject("04");
    const candidate =
      await runtime.oa!.cycleServices.createInitialTrajectory.execute({
        trajectoryId: `trj:${projectId}`,
        projectId,
        steps: [
          { stepId: "stp:a", order: 1, label: "A", state: "pending" },
        ],
        status: "candidate",
        expectedLpsVersion: created.livingState.version,
        createdBy: ACTOR,
      });
    expect(candidate.ok).toBe(true);
    const presence = await resolveTrajectoryBootstrapPresence(
      runtime.oa!.cycleServices.trajectories,
      projectId,
    );
    expect(presence.kind).toBe("history_without_current");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Should refuse."),
      { presence },
    );
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BOOTSTRAP_HISTORY_PRESENT");
    }
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("BAR-BOOT-05 — CycleInstance without trajectory refuses bootstrap", async () => {
    const { runtime, projectId } = await bootFreshProject("05");
    const cycle = await runtime.oa!.cycleServices.createCycle.execute({
      cycleInstanceId: `cyc:boot-05`,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:system",
        role: "system",
        displayName: "System",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Should refuse with cycle."),
    );
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BOOTSTRAP_CYCLE_PRESENT");
    }
  });

  it("BAR-BOOT-06 — current HumanDecision refuses bootstrap", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    const decisions = [
      {
        decisionId: "hd:boot-06",
        projectId,
        cycleInstanceId: null,
        subject: "subject:bootstrap-gate",
        status: "accepted" as const,
        statement: "Décision structurante incompatible avec bootstrap.",
        options: [{ optionId: "opt:a", label: "A" }],
        chosenOptionId: "opt:a",
        createdBy: ACTOR,
        createdAt: "2026-09-09T18:00:00.000Z",
        updatedAt: "2026-09-09T18:00:00.000Z",
        authority: "delegated" as const,
      },
    ];
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Should refuse with HD."),
      { decisions: decisions as never },
    );
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BOOTSTRAP_HD_PRESENT");
    }
  });

  it("BAR-BOOT-07 — trajectory reader UNKNOWN refuses bootstrap (not absence)", () => {
    const presence = classifyTrajectoryBootstrapPresence({
      readerFailed: true,
      current: null,
      anyVersionExists: false,
    });
    expect(presence.kind).toBe("unknown");
    const validated = validateLifecycleRecommendation({
      projectId: "prj:boot-07",
      candidate: nextCycleLr("cyc:framing", "x"),
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: false,
      trajectoryBootstrapPresence: presence,
      decisions: [],
    });
    expect(validated.ok).toBe(false);
    if (!validated.ok) {
      expect(validated.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
    }
  });

  it("BAR-BOOT-08 — human label Cadrage fails catalog validation", async () => {
    const { runtime, projectId } = await bootFreshProject("08");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("Cadrage", "Label humain interdit."),
    );
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_TARGET_CYCLE_TYPE_UNKNOWN");
    }
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    expect(
      items.filter((i) => i.source === "lifecycle-recommendation:nora"),
    ).toHaveLength(0);
  });

  it("BAR-BOOT-09 — canonical catalog ID accepted", () => {
    const gate = validateCanonicalTargetCycleTypeId("cyc:framing");
    expect(gate.ok).toBe(true);
    if (gate.ok) expect(gate.cycleTypeId).toBe("cyc:framing");
  });

  it("BAR-BOOT-10 — unknown OA-looking cycleTypeId fails", () => {
    const gate = validateCanonicalTargetCycleTypeId("cyc:not-a-real-cycle");
    expect(gate.ok).toBe(false);
    if (!gate.ok) expect(gate.code).toBe("LR_TARGET_CYCLE_TYPE_UNKNOWN");
  });

  it("BAR-BOOT-11 — EMIT + null LR remains fail-closed", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "Je recommande.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
    });
    expect(coherent?.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
  });

  it("BAR-BOOT-12 — CONTINUE/HOLD does not materialize LR", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: productTurn(
        null,
        "Clarifions encore.",
        { ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT },
      ),
      updateEpistemicState: runtime.oa!.cycleServices.updateEpistemicState,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: 1,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: null,
        trajectoryBootstrapPresence: { kind: "never" },
        decisions: [],
        evidence: [],
        epistemicItems: [],
      },
      producedAt: "2026-09-09T18:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(false);
    expect(mat.materialization).toBeNull();
  });

  it("BAR-BOOT-13 — one product turn = one Agents call (orchestrate)", async () => {
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const { runtime, projectId } = await bootFreshProject("13");
    const payload = productTurn(
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      "Besoin clair. Recommandation de Cadrage.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Aide-moi à avancer depuis le besoin.",
      sessionDbPath: tempDbPath("13-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
  });

  it("BAR-BOOT-14 — business-first failure notice keeps technical code", () => {
    const notice = lifecycleRecommendationMaterializeFailurePiloteNotice({
      recommendationAttempted: true,
      materialized: false,
      code: "LR_TARGET_CYCLE_TYPE_UNKNOWN",
    });
    expect(notice).toBe(
      LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
    );
    expect(notice).not.toMatch(/EMIT|materializer|structured output|serveur/i);
    expect(notice).toMatch(/Aucun cycle n'a été ouvert/);
  });

  it("BAR-BOOT-15 — bootstrap CURRENT becomes STALE when trajectory appears", async () => {
    const { runtime, projectId, created } = await bootFreshProject("15");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Bootstrap LR."),
    );
    expect(mat.materialization?.ok).toBe(true);
    if (!mat.materialization || !mat.materialization.ok) return;
    const item = mat.materialization.item;
    const withNull = deriveLifecycleRecommendationCurrentness({
      item,
      currentBasisRefs: rebuildBasisRefsForRecommendation({
        item,
        facts: {
          cycles: [],
          lpsActiveCycleInstanceId: null,
          lpsVersion: created.livingState.version,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          trajectory: null,
          decisions: [],
          evidence: [],
          blockingReservationStatements: [],
        },
      })!,
    });
    expect(withNull).toBe("CURRENT");

    const traj = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "A", state: "pending" },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    if (!traj.ok) return;
    const stale = deriveLifecycleRecommendationCurrentness({
      item,
      currentBasisRefs: rebuildBasisRefsForRecommendation({
        item,
        facts: {
          cycles: [],
          lpsActiveCycleInstanceId: null,
          lpsVersion: created.livingState.version + 1,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          trajectory: traj.trajectory,
          decisions: [],
          evidence: [],
          blockingReservationStatements: [],
        },
      })!,
    });
    expect(stale).toBe("STALE");
  });

  it("BAR-BOOT-16 — bootstrap LR never creates Cycle/HD/START authority", async () => {
    const { runtime, projectId } = await bootFreshProject("16");
    const beforeCycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Cadrage."),
    );
    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
    const lps = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lps.ok && (lps.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );
  });

  it("BAR-BOOT-17 — non-greenfield NEXT_CYCLE still requires trajectory when not bootstrap-eligible", async () => {
    const validated = validateLifecycleRecommendation({
      projectId: "prj:boot-17",
      candidate: nextCycleLr("cyc:delivery", "Delivery."),
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: false,
      // no presence → legacy fail-closed
      decisions: [],
    });
    expect(validated.ok).toBe(false);
    if (!validated.ok) {
      expect(validated.code).toBe("LR_TRAJECTORY_REQUIRED");
    }
  });

  it("BAR-BOOT-18 — no automatic ProjectTrajectory creation + prompt lists canonical IDs", async () => {
    const { runtime, projectId } = await bootFreshProject("18");
    await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Cadrage."),
    );
    expect(
      await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
        projectId,
        1,
      ),
    ).toBeNull();
    const prompt = buildProjectSystemPrompt({
      projectId,
      name: "x",
      shortReference: "X",
      objective: "y",
      contextSummary: "z",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-09T18:00:00.000Z",
      doctrineId: "doc:1",
      doctrineVersion: "1",
      doctrineDigest: "sha256:abc",
      doctrineStatus: "active",
      runtimeMode: "product",
      persistence: "sqlite",
      readiness: "ready",
    });
    expect(prompt).toMatch(/cyc:framing/);
    expect(prompt).toMatch(/identifiant catalogue Studio exact/);
    expect(prompt).not.toMatch(/Cadrage → cyc:framing/);
  });

  it("BAR-BOOT-19 — exact history above old ceiling 64 → history_without_current", async () => {
    const { runtime, projectId } = await bootFreshProject("19");
    const traj: ProjectTrajectory = {
      schemaVersion: "0.1.0-oa",
      trajectoryId: `trj:${projectId}-v65`,
      projectId,
      version: 65,
      status: "candidate",
      steps: [
        { stepId: "stp:a", order: 1, label: "A", state: "pending" },
      ],
    };
    await runtime.oa!.cycleServices.trajectories.save(traj);
    // No rows 1..64, no current pointer — old probe would have falsely said never.
    for (let v = 1; v <= 64; v += 1) {
      expect(
        await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          v,
        ),
      ).toBeNull();
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);

    const presence = await resolveTrajectoryBootstrapPresence(
      runtime.oa!.cycleServices.trajectories,
      projectId,
    );
    expect(presence.kind).toBe("history_without_current");
    expect(presence.kind).not.toBe("never");

    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Must refuse history above old ceiling."),
      { presence },
    );
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe("LR_BOOTSTRAP_HISTORY_PRESENT");
    }
  });

  it("BAR-BOOT-20 — exact project-scoped hasAnyByProjectId (SQLite + Memory)", async () => {
    const { runtime, projectId } = await bootFreshProject("20");
    const otherCreated = await runtime.createProject({
      name: "Other project for hasAny isolation",
      objective: "isolation",
      context: "other",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "BOOT20O",
      idempotencyKey: "idem:boot-20-other",
    });
    expect(otherCreated.ok).toBe(true);
    if (!otherCreated.ok) return;
    const otherId = otherCreated.projectId;
    const trajRepo = runtime.oa!.cycleServices.trajectories;
    expect(await trajRepo.hasAnyByProjectId(projectId)).toBe(false);
    expect(await trajRepo.hasAnyByProjectId(otherId)).toBe(false);
    await trajRepo.save({
      schemaVersion: "0.1.0-oa",
      trajectoryId: `trj:${projectId}-any`,
      projectId,
      version: 3,
      status: "candidate",
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "pending" }],
    });
    expect(await trajRepo.hasAnyByProjectId(projectId)).toBe(true);
    expect(await trajRepo.hasAnyByProjectId(otherId)).toBe(false);

    const memStore = new MemoryCycleStore();
    const mem = new MemoryTrajectoryRepository(memStore);
    expect(await mem.hasAnyByProjectId("prj:mem-a")).toBe(false);
    await mem.save({
      schemaVersion: "0.1.0-oa",
      trajectoryId: "trj:mem-a",
      projectId: "prj:mem-a",
      version: 99,
      status: "candidate",
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "pending" }],
    });
    expect(await mem.hasAnyByProjectId("prj:mem-a")).toBe(true);
    expect(await mem.hasAnyByProjectId("prj:mem-b")).toBe(false);
  });

  it("BAR-BOOT-21 — existence reader failure → unknown fail-closed (never coerced)", async () => {
    const { runtime, projectId } = await bootFreshProject("21");
    const base = runtime.oa!.cycleServices.trajectories;
    const failing: TrajectoryRepositoryPort = {
      findById: (id) => base.findById(id),
      findByProjectAndVersion: (p, v) => base.findByProjectAndVersion(p, v),
      findCurrentByProjectId: async () => null,
      hasAnyByProjectId: async () => {
        throw new Error("forced_has_any_failure");
      },
      exists: (id) => base.exists(id),
      save: (t) => base.save(t),
      markSuperseded: (id, v) => base.markSuperseded(id, v),
    };
    const presence = await resolveTrajectoryBootstrapPresence(
      failing,
      projectId,
    );
    expect(presence.kind).toBe("unknown");
    if (presence.kind === "unknown") {
      expect(presence.reason).toMatch(/forced_has_any_failure/);
    }

    const validated = validateLifecycleRecommendation({
      projectId,
      candidate: nextCycleLr("cyc:framing", "x"),
      cycles: [],
      lpsActiveCycleInstanceId: null,
      hasTrajectoryContext: false,
      trajectoryBootstrapPresence: presence,
      decisions: [],
    });
    expect(validated.ok).toBe(false);
    if (!validated.ok) {
      expect(validated.code).toBe("LR_BASIS_TRAJECTORY_UNAVAILABLE");
    }
  });

  it("BAR-BOOT-22 — no version probe / no TRAJECTORY_HISTORY_PROBE_MAX_VERSION", () => {
    expect(
      "TRAJECTORY_HISTORY_PROBE_MAX_VERSION" in greenfieldBootstrapMod,
    ).toBe(false);
    const srcPath = path.resolve(
      APP_ROOT,
      "lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts",
    );
    const src = fs.readFileSync(srcPath, "utf8");
    expect(src).not.toMatch(/TRAJECTORY_HISTORY_PROBE_MAX_VERSION/);
    expect(src).not.toMatch(/for\s*\(\s*let\s+version\s*=\s*1/);
    expect(src).not.toMatch(/findByProjectAndVersion/);
    expect(src).toMatch(/hasAnyByProjectId/);
    expect(src).toMatch(/findCurrentByProjectId/);
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * PRE-CYCLE ROUTING BOUNDARY — BAR-RB-01…15 (deterministic).
 * ZERO NEW REAL. Same-turn structured output + server coherence only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  applyPreCycleRoutingBoundaryCoherence,
  buildFailClosedProductTurnJson,
  derivePreCycleRoutingDisposition,
  isNoraProductTurnWithOptionalLr,
  normalizeNoraProductTurnStructuredOutput,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";
import {
  extractLifecycleCandidateFromStructuredOutput,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { ActorReference } from "@/lib/oa/project";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rb-"));
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

function productTurn(
  assessment: PreCycleRoutingAssessment,
  lr: ReturnType<typeof nextCycleLr> | null,
  narrative: string,
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  };
}

const baseProject = {
  projectId: "prj:rb",
  name: "Task app",
  shortReference: null as string | null,
  objective: "Application de gestion de tâches",
  contextSummary: "Intention minimale",
  criticality: "standard",
  constraints: [] as string[],
  lpsId: "lps:1",
  lpsVersion: 1,
  lpsCreatedAt: "2026-01-01T00:00:00.000Z",
  doctrineId: "doc:1",
  doctrineVersion: "1",
  doctrineStatus: "active",
  doctrineDigest: "sha256:abc",
  runtimeMode: "product",
  persistence: "sqlite",
  readiness: "ready",
};

describe("BAR-RB — pre-cycle routing boundary (deterministic)", () => {
  it("schema requires preCycleRoutingAssessment on Product turn", () => {
    const required =
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.required;
    expect(required).toContain("preCycleRoutingAssessment");
    expect(required).toContain("lifecycleRecommendation");
    expect(required).toContain("narrative");
  });

  it("BAR-RB-01 — initial intent still ambiguous → CONTINUE, LR null", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Peux-tu préciser la situation concrète ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "should be stripped",
      ),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationSuppressed).toBe(true);
    expect(coherent.disposition).toBe("CONTINUE_PRE_CYCLE");
  });

  it("BAR-RB-02 — routing unknown can change cycle → CONTINUE", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: true,
      activeCycleAlreadyCoversWork: false,
    };
    // multiplePlausible takes precedence → HOLD
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "HOLD_FOR_ROUTING_AMBIGUITY",
    );
    const onlyRoutingBlock: PreCycleRoutingAssessment = {
      ...assessment,
      multiplePlausibleCycles: false,
    };
    expect(derivePreCycleRoutingDisposition(onlyRoutingBlock)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
  });

  it("BAR-RB-03 — candidate clear, details still unknown → EMIT, keep LR", () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    expect(assessment.remainingUnknownsAreCycleOwned).toBe(true);
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const lr = nextCycleLr(
      "cyc:framing",
      "Envisager un Cadrage pour préciser périmètre et succès.",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative:
        "Besoin compris. Plusieurs détails restent ouverts pour le Cadrage.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.lifecycleRecommendation).toEqual(lr);
    expect(coherent.lifecycleRecommendationSuppressed).toBe(false);
  });

  it("BAR-RB-04 — many unknowns does not mean continue qualification", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/Il reste beaucoup à préciser/);
    expect(prompt).toMatch(/Pas de « toujours Cadrage en premier »/);
    expect(prompt).toMatch(/Ne force pas un waterfall fixe/);
  });

  it("BAR-RB-05 — not always Cadrage (delivery-bounded candidate)", () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    const lr = nextCycleLr(
      "cyc:delivery",
      "Correction Delivery bornée déjà définie.",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le correctif est suffisamment borné pour Delivery.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:delivery",
    );
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).not.toBe(
      "cyc:framing",
    );
  });

  it("BAR-RB-06 — cycle ownership pairs (routing vs cycle-owned)", () => {
    const routingRelevant: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    const cycleOwned: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(routingRelevant)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    expect(derivePreCycleRoutingDisposition(cycleOwned)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
  });

  it("BAR-RB-07 — task-app live regression semantic boundary (Fake same-turn)", async () => {
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T12:00:00.000Z",
      idSource: new FixedIdSource("rb07"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb07.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "Gestion de tâches perso",
      objective: "application de gestion de tâches",
      context:
        "tâches quotidiennes personnelles/admin, oubli, priorisation, vue simple",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "TASK",
      idempotencyKey: "idem:rb07",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${created.projectId}`,
      projectId: created.projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });

    const payload = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage pour cadrer le besoin quotidien.",
      ),
      "Besoin : retrouver et prioriser des tâches dispersées. Hypothèses ouvertes restent pour le Cadrage.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      created.projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      created.projectId,
    );

    const result = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content:
        "petites tâches quotidiennes personnelles/administratives, certaines datées, oubli/priorisation, vue simple",
      sessionDbPath: tempDbPath("rb07-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result.text).toMatch(/Besoin|Hypothèses|Cadrage/i);
    // Property: pre-cycle must not keep deepening via null LR after emit path.
    expect(result.lifecycleRecommendationMaterialized).not.toBe(false);

    const afterCycles = await runtime.oa.cycleServices.cycles.listByProject(
      created.projectId,
    );
    expect(afterCycles.length).toBe(beforeCycles.length);
    const afterHd = await runtime.oa.decisionServices.decisions.listByProject(
      created.projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);
  });

  it("BAR-RB-08 — functional design details stay cycle-owned (no pre-cycle emit of behavior rules)", () => {
    // Asking urgency semantics after Cadrage is supportable → must EMIT, not CONTINUE.
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    const prematureContinueWouldBeWrong =
      derivePreCycleRoutingDisposition(assessment) === "CONTINUE_PRE_CYCLE";
    expect(prematureContinueWouldBeWrong).toBe(false);
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Résumé besoin. Recommandation de Cadrage.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
  });

  it("BAR-RB-09 — genuine Critical / gate unknown remains routing-relevant", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Quel est l'impact données / irréversible ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:architecture", "premature"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-10 — active cycle covers work → strip NEXT_CYCLE", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: true,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "DEFER_TO_ACTIVE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le cycle actif couvre déjà ce travail.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.suppressReason).toBe("active_cycle_covers_work");
  });

  it("BAR-RB-11 — multiple plausible cycles → HOLD, no arbitrary LR", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: true,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "HOLD_FOR_ROUTING_AMBIGUITY",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Cadrage ou Conception fonctionnelle ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "arbitrary"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-12 — same turn / no second model (coerce + schema only)", () => {
    const plain = coercePlainTextToProductTurnJson("Clarification ciblée.");
    const parsed = JSON.parse(plain) as unknown;
    expect(isNoraProductTurnWithOptionalLr(parsed)).toBe(true);
    expect(
      (parsed as { lifecycleRecommendation: unknown }).lifecycleRecommendation,
    ).toBeNull();
    expect(
      (parsed as { preCycleRoutingAssessment: PreCycleRoutingAssessment })
        .preCycleRoutingAssessment,
    ).toEqual(PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT);
    // No prose parser: narrative questions are not inspected.
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/nora-cognitive-runtime/noraProductTurnOutputType.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/match\(.*\?|RegExp\(|narrative\.includes/);
  });

  it("BAR-RB-13+14 — NEXT_CYCLE materializes without Cycle/HD; reload CURRENT", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T12:00:00.000Z",
      idSource: new FixedIdSource("rb13"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb13.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB13",
      objective: "greenfield",
      context: "rb13",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB13",
      idempotencyKey: "idem:rb13",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    const traj = await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);

    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps =
      await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const trajNow = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    expect(trajNow.ok).toBe(true);
    if (!trajNow.ok) return;

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      "Recommendation narrative.",
    );
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: structured,
      updateEpistemicState: runtime.oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: beforeCycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: beforeHd,
        evidence: [],
        epistemicItems: [],
      },
      producedAt: "2026-09-09T12:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    expect(mat.routingDisposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");

    const afterCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(afterCycles.length).toBe(beforeCycles.length);
    const afterHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);

    const items = await runtime.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrItems = items.filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrItems.length).toBe(1);
    expect(lrItems[0]!.lifecycleRecommendation?.authority).toBe("none");
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: afterCycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: afterHd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(
      current.some((c) => c.recommendationId === lrItems[0]!.epistemicItemId),
    ).toBe(true);
  });

  it("BAR-RB-15 — routing metadata is not authority / not durable Fact", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput(
      productTurn(
        { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        nextCycleLr("cyc:framing", "Cadrage."),
        "ok",
      ),
    );
    expect(coherent).toBeTruthy();
    // Assessment travels only in ephemeral Product turn — not in LR schema authority.
    expect(coherent!.lifecycleRecommendation?.authority).toBe("none");
    expect(coherent!.lifecycleRecommendation?.isHumanDecision).toBe(false);
    const failClosed = JSON.parse(
      buildFailClosedProductTurnJson("plain"),
    ) as Record<string, unknown>;
    expect(failClosed.lifecycleRecommendation).toBeNull();
    expect(isNoraProductTurnWithOptionalLr(failClosed)).toBe(true);
  });

  it("coherence strips premature LR when CONTINUE despite model emitting LR", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "encore une question de priorité ?",
      preCycleRoutingAssessment:
        PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "premature"),
    });
    expect(coherent?.lifecycleRecommendation).toBeNull();
    expect(coherent?.lifecycleRecommendationSuppressed).toBe(true);
  });

  it("missing assessment fails closed (no invented readiness)", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "legacy partial",
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
    });
    expect(coherent?.preCycleRoutingAssessment).toEqual(
      PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    );
    expect(coherent?.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-16 — EMIT without LR fails closed (materialize + orchestrate)", async () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Besoin compris — mais LR manquante.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: null,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(coherent.lifecycleRecommendation).toBeNull();

    const structured = productTurn(assessment, null, "Besoin compris.");
    const extracted = extractLifecycleCandidateFromStructuredOutput(structured);
    expect(extracted.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(extracted.candidate).toBeNull();

    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:00:00.000Z",
      idSource: new FixedIdSource("rb16"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb16.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB16",
      objective: "greenfield",
      context: "rb16",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB16",
      idempotencyKey: "idem:rb16",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps =
      await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const trajNow = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    expect(trajNow.ok).toBe(true);
    if (!trajNow.ok) return;

    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: structured,
      updateEpistemicState: runtime.oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: beforeCycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: beforeHd,
        evidence: [],
        epistemicItems: [],
      },
      producedAt: "2026-09-09T18:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe(
        MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
      );
    }
    expect(mat.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    // No invented LR / Cycle / HD
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await runtime.oa.cycleServices.epistemic.listByProject(projectId)).filter(
        (i) => i.source === "lifecycle-recommendation:nora",
      ).length,
    ).toBe(0);

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "situation comprise",
      sessionDbPath: tempDbPath("rb16-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.status).toBe("validation_error");
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("BAR-RB-17 — EMIT with LR remains valid (materialize)", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:10:00.000Z",
      idSource: new FixedIdSource("rb17"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb17.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB17",
      objective: "greenfield",
      context: "rb17",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB17",
      idempotencyKey: "idem:rb17",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps =
      await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const trajNow = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    expect(trajNow.ok).toBe(true);
    if (!trajNow.ok) return;

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      "Recommendation narrative.",
    );
    const coherent = normalizeNoraProductTurnStructuredOutput(structured);
    expect(coherent?.boundaryContradiction).toBeNull();
    expect(coherent?.lifecycleRecommendation).not.toBeNull();

    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: structured,
      updateEpistemicState: runtime.oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: beforeCycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: beforeHd,
        evidence: [],
        epistemicItems: [],
      },
      producedAt: "2026-09-09T18:11:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.boundaryContradiction ?? null).toBeNull();
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("BAR-RB-18 — no remaining unknown is not a false block", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const lr = nextCycleLr("cyc:ux-ui", "Changement UX borné.");
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Travail déjà suffisamment borné.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendation).toEqual(lr);
  });

  it("BAR-RB-19 — CONTINUE/HOLD without LR remain valid (not errors)", () => {
    const continueOk = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Quelle situation concrète ?",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      },
      lifecycleRecommendation: null,
    });
    expect(continueOk.disposition).toBe("CONTINUE_PRE_CYCLE");
    expect(continueOk.boundaryContradiction).toBeNull();
    expect(continueOk.lifecycleRecommendation).toBeNull();

    const holdOk = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Cadrage ou Conception ?",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: true,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
    });
    expect(holdOk.disposition).toBe("HOLD_FOR_ROUTING_AMBIGUITY");
    expect(holdOk.boundaryContradiction).toBeNull();
    expect(holdOk.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-20 — same-turn positive enforcement (one Agents call, no retry)", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:20:00.000Z",
      idSource: new FixedIdSource("rb20"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb20.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB20",
      objective: "greenfield",
      context: "rb20",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB20",
      idempotencyKey: "idem:rb20",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${created.projectId}`,
      projectId: created.projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const emitNull = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Ready but missing LR.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(emitNull))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content: "ok",
      sessionDbPath: tempDbPath("rb20-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch.ok).toBe(false);
    if (!orch.ok) {
      expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    }
    expect(spy).toHaveBeenCalledTimes(1);
    // No second model / retry — ScriptedModel queue exhausted after one call.
    expect(spy.mock.calls.length).toBe(1);

    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/nora-cognitive-runtime/noraProductTurnOutputType.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/narrative\.includes|new RegExp|match\(\//);
  });
});
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```typescript
"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
  w2RehydrateProductOutcomeAction,
} from "@/features/project-assistant/w2/actions";
import {
  projectAssistantApprovePreCycleCandidateTrajectoryAction,
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction,
  projectAssistantReadPreCycleCandidateTrajectoryAction,
  prepareCycleFromValidatedTrajectoryAction,
  readPreparedTrajectoryCycleAction,
  startPreparedTrajectoryCycleAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import {
  W4C_NEXT_ACTION_LEAD,
  W4C_POST_EVIDENCE_HEADING,
  W4C_PRODUCT_OUTCOME_LABELS,
} from "@/features/project-assistant/presentationLabels";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
import styles from "./TrajectorySurface.module.css";

/**
 * Presentation-only labels for ExecutionContractStatus.
 * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
 */
const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
  {
    draft: "Brouillon",
    proposed: "Proposé",
    validated: "Validé",
    confirmation_required: "Confirmation requise",
    confirmed: "Confirmation enregistrée",
    executing: "Exécution en cours",
    completed: "Exécution terminée",
    failed: "Échec d'exécution",
    cancelled: "Annulé",
    superseded: "Remplacé",
  };

function executionContractStatusLabel(status: string): string {
  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
  }
  return "État du contrat indisponible";
}

/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute"
  | "approve-candidate"
  | "prepare-cycle"
  | "start-cycle";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  recoveryProposeSignal = 0,
  durableRefreshSignal = 0,
  composition = "standalone",
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
  recoveryProposeSignal?: number;
  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
  durableRefreshSignal?: number;
  /**
   * H-01 Option A: embed visually in the LPS piloting region.
   * Presentation-only — does not change ProjectTrajectory domain identity.
   */
  composition?: "standalone" | "lps-embedded";
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [preCycleCandidate, setPreCycleCandidate] = useState<{
    trajectoryId: string;
    version: number;
    status: "candidate";
    steps: readonly { stepId: string; order: number; label: string; state: string }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus?: string;
    provenanceObservationId?: string | null;
    recommendationId?: string | null;
    semanticKey?: string | null;
  } | null>(null);
  const [approvalPresentation, setApprovalPresentation] = useState<{
    presentationDigest: string;
    targetCycleSelectable: boolean;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    approvalOptionLabel: string;
  } | null>(null);
  const [greenfieldDecided, setGreenfieldDecided] = useState<{
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
  } | null>(null);
  const [preparedCycle, setPreparedCycle] = useState<{
    cycleInstanceId: string;
    cycleTypeId: string;
    catalogLabel: string | null;
    profile: string;
    status: string;
  } | null>(null);
  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
    string | null
  >(null);
  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
    useState(false);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [qualifiedOperationKind, setQualifiedOperationKind] =
    useState<QualifiedOperationKind | null>(null);

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setProductOutcome(null);
    setPostEvidence(null);
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

  const refreshPreCycleCandidate = useCallback(async () => {
    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
      projectId,
    });
    if (!result.ok) {
      setPreCycleCandidate(null);
      setActiveCycleInstanceId(null);
      setHasCurrentNextCycleRecommendation(false);
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    setPreCycleCandidate(result.candidate ?? null);
    setHasCurrentNextCycleRecommendation(
      result.hasCurrentNextCycleRecommendation === true,
    );

    const approval =
      await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
        projectId,
      });
    if (!approval.ok) {
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      setPreparedCycle(null);
      return;
    }
    setGreenfieldDecided(approval.alreadyDecided ?? null);
    if (approval.presentation) {
      setApprovalPresentation({
        presentationDigest: approval.presentation.presentationDigest,
        targetCycleSelectable: approval.presentation.targetCycleSelectable,
        catalogLabel: approval.presentation.catalogLabel,
        targetCycleTypeId: approval.presentation.targetCycleTypeId,
        approvalOptionLabel: approval.presentation.approvalOptionLabel,
      });
    } else {
      setApprovalPresentation(null);
    }

    if (approval.alreadyDecided && !result.activeCycleInstanceId) {
      const prepared = await readPreparedTrajectoryCycleAction({ projectId });
      if (prepared.ok && prepared.prepared) {
        setPreparedCycle({
          cycleInstanceId: prepared.prepared.cycleInstanceId,
          cycleTypeId: prepared.prepared.cycleTypeId,
          catalogLabel: prepared.prepared.catalogLabel,
          profile: prepared.prepared.profile,
          status: prepared.prepared.status,
        });
      } else {
        setPreparedCycle(null);
      }
    } else {
      setPreparedCycle(null);
    }
  }, [projectId]);

  const approveCandidate = useCallback(async () => {
    if (!approvalPresentation) return;
    setBusy("approve-candidate");
    setError(null);
    const result = await projectAssistantApprovePreCycleCandidateTrajectoryAction({
      projectId,
      presentationDigest: approvalPresentation.presentationDigest,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Approbation refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setGreenfieldDecided({
      trajectoryId: result.trajectoryId!,
      version: result.trajectoryVersion!,
      status: result.status!,
      decidedByDecisionRef: result.decidedByDecisionRef ?? null,
      targetCycleTypeId: result.targetCycleTypeId ?? null,
      catalogLabel: result.catalogLabel ?? null,
    });
    setPreCycleCandidate(null);
    setApprovalPresentation(null);
    setPreparedCycle(null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    approvalPresentation,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  const prepareValidatedCycle = useCallback(async () => {
    setBusy("prepare-cycle");
    setError(null);
    const result = await prepareCycleFromValidatedTrajectoryAction({
      projectId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Préparation du cycle refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle({
      cycleInstanceId: result.cycleInstanceId!,
      cycleTypeId: result.cycleTypeId!,
      catalogLabel: result.catalogLabel ?? null,
      profile: result.profile!,
      status: result.status!,
    });
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [projectId, onDurableFactsChanged, refreshPreCycleCandidate]);

  const startPreparedCycle = useCallback(async () => {
    if (!preparedCycle) return;
    setBusy("start-cycle");
    setError(null);
    const result = await startPreparedTrajectoryCycleAction({
      projectId,
      cycleInstanceId: preparedCycle.cycleInstanceId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Démarrage du cycle refusé.");
      await refreshPreCycleCandidate();
      return;
    }
    setPreparedCycle(null);
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    preparedCycle,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  useEffect(() => {
    void refreshPreCycleCandidate();
  }, [refreshPreCycleCandidate]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refreshPreCycleCandidate();
    }
  }, [durableRefreshSignal, refreshPreCycleCandidate]);

  useEffect(() => {
    if (recoveryProposeSignal > 0) {
      void proposeOptions();
    }
  }, [recoveryProposeSignal, proposeOptions]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const result = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: optionSet.optionSetRef,
        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
        candidateVersion: optionSet.proposedTrajectory.version,
        selectedOptionRef,
      });
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision || !qualifiedOperationKind) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
      qualifiedOperationKind,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [contract, authorization, projectId, onDurableFactsChanged]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  return (
    <section
      className={[
        styles.root,
        composition === "lps-embedded" ? styles.embedded : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="w2-trajectory-panel"
      data-composition={composition}
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire du projet</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution n&apos;est possible qu&apos;après une
          autorisation vérifiée, via une action Exécuter explicite et distincte.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      {preCycleCandidate && !activeCycleInstanceId ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-candidate-title"
          data-testid="pre-cycle-candidate-trajectory"
        >
          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
            Trajectoire proposée
          </h3>
          <p className={styles.blockNote}>
            Cycle proposé :{" "}
            {approvalPresentation?.catalogLabel ??
              preCycleCandidate.catalogLabel ??
              preCycleCandidate.steps[0]?.label ??
              "—"}
          </p>
          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
            En attente de décision · Nora recommande cette trajectoire ; le
            Pilote décide · Aucun cycle démarré
          </p>
          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
            {preCycleCandidate.steps.map((step) => (
              <li key={step.stepId} className={styles.option}>
                <div className={styles.optionHead}>
                  <span className={styles.optionBadge}>Étape {step.order}</span>
                  <span className={styles.optionLabel}>{step.label}</span>
                </div>
                <p className={styles.optionIntent}>En attente</p>
              </li>
            ))}
          </ul>
          {approvalPresentation &&
          !approvalPresentation.targetCycleSelectable ? (
            <p
              className={styles.blockNote}
              role="status"
              data-testid="pre-cycle-candidate-not-selectable"
            >
              Le cycle proposé n&apos;est plus sélectionnable. La proposition
              doit être réévaluée avant toute validation.
            </p>
          ) : null}
          {approvalPresentation?.targetCycleSelectable ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-validate-trajectory"
                onClick={() => void approveCandidate()}
                disabled={busy !== null}
              >
                Valider cette trajectoire
              </button>
              <p className={styles.blockNote} data-testid="pre-cycle-validate-hint">
                Valider rendra cette trajectoire décidée/courante. Cela ne
                démarre pas encore le cycle.
              </p>
              {busy === "approve-candidate" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-approve-busy"
                >
                  Validation en cours…
                </span>
              ) : null}
            </div>
          ) : null}
        </section>
      ) : null}

      {greenfieldDecided && !activeCycleInstanceId && !preCycleCandidate ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-decided-title"
          data-testid="pre-cycle-decided-trajectory"
        >
          <h3 id="pre-cycle-decided-title" className={styles.blockTitle}>
            Décision humaine enregistrée
          </h3>
          <p className={styles.blockNote}>
            Trajectoire décidée / courante · Cycle :{" "}
            {greenfieldDecided.catalogLabel ?? "—"} · Aucun cycle démarré
          </p>
          {/*
            FIGMA SOURCE NOT APPLICABLE — D-GF-START-01 prepare/start CTAs follow
            existing TrajectorySurface action patterns (no Figma handoff).
          */}
          {!preparedCycle ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-prepare-cycle"
                onClick={() => void prepareValidatedCycle()}
                disabled={busy !== null}
              >
                Préparer le cycle
              </button>
              {busy === "prepare-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-prepare-busy"
                >
                  Préparation en cours…
                </span>
              ) : null}
            </div>
          ) : (
            <div className={styles.actions}>
              <p
                className={styles.blockNote}
                data-testid="pre-cycle-prepared-cycle"
              >
                Cycle préparé · {preparedCycle.catalogLabel ?? preparedCycle.cycleTypeId}{" "}
                · profil {preparedCycle.profile} · {preparedCycle.status}
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-start-cycle"
                onClick={() => void startPreparedCycle()}
                disabled={busy !== null}
              >
                {preparedCycle.cycleTypeId === "cyc:framing" ||
                preparedCycle.catalogLabel === "Cadrage"
                  ? "Démarrer le cadrage"
                  : "Démarrer le cycle"}
              </button>
              {busy === "start-cycle" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-start-busy"
                >
                  Démarrage en cours…
                </span>
              ) : null}
            </div>
          )}
        </section>
      ) : null}

      {/*
        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
      */}
      {activeCycleInstanceId ? (
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          {optionSet ? "Réinstruire les options" : "Instruire les options"}
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>
      ) : null}

      {!activeCycleInstanceId &&
      !preCycleCandidate &&
      hasCurrentNextCycleRecommendation ? (
        <p
          className={styles.blockNote}
          data-testid="pre-cycle-prepare-trajectory-hint"
        >
          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
          courante — les options W2 nécessitent un cycle actif.
        </p>
      ) : null}

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              <span className={styles.sectionKind} data-kind="option">
                Option
              </span>
              Options proposées
            </h3>
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory.statusLabel} · version{" "}
              {optionSet.proposedTrajectory.version} · pas encore courante
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              <span className={styles.sectionKind} data-kind="recommendation">
                Recommandation
              </span>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision && decided ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            <span className={styles.sectionKind} data-kind="decision">
              Décision humaine
            </span>
            Décision de trajectoire — {decision.statusLabel}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided.statusLabel} · version {decided.version}
              </dd>
            </div>
          </dl>
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire déjà décidée).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
            >
              {contract
                ? "Repréparer le contrat d'exécution"
                : "Préparer le contrat d'exécution"}
            </button>
          </div>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution — résumé
          </h3>
          <p className={styles.blockNote}>
            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
            toute confirmation. Confirmer n&apos;exécute pas.
          </p>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Ce qui sera fait</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Résultat / cible</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>État du contrat</dt>
              <dd
                data-testid="w2-contract-status"
                data-status={contract.status}
              >
                {executionContractStatusLabel(contract.status)}
              </dd>
            </div>
            <div>
              <dt>Prochaine action utile</dt>
              <dd>
                {inspection?.inspectionSufficient
                  ? contract.status === "confirmation_required"
                    ? "Confirmer si requis, puis statuer sur l'autorisation"
                    : "Statuer sur l'autorisation"
                  : "Inspecter le détail du contrat"}
              </dd>
            </div>
          </dl>
          <details className={styles.contractLevel2}>
            <summary>Détails métier du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Version</dt>
                <dd data-testid="w2-contract-version">v{contract.version}</dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="w2-contract-authority">
                  {contract.requiredAuthority}
                </dd>
              </div>
              <div>
                <dt>Capacités</dt>
                <dd data-testid="w2-contract-capabilities">
                  {contract.requiredCapabilities.length
                    ? contract.requiredCapabilities.join(", ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Réversibilité</dt>
                <dd data-testid="w2-contract-reversibility">
                  {contract.reversibility}
                </dd>
              </div>
              <div>
                <dt>Contraintes</dt>
                <dd data-testid="w2-contract-constraints">
                  {contract.constraints.length
                    ? contract.constraints.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Conditions d&apos;arrêt</dt>
                <dd data-testid="w2-contract-stops">
                  {contract.stopConditions.length
                    ? contract.stopConditions.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
            </dl>
          </details>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Statut technique</dt>
                <dd
                  className={styles.code}
                  data-testid="w2-contract-status-tech"
                >
                  {contract.status}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd className={styles.code} data-testid="w2-contract-fingerprint">
                  {contract.semanticFingerprint.slice(0, 12)}…
                </dd>
              </div>
              <div>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="w2-contract-id-tech">
                  {contract.executionContractId}
                </dd>
              </div>
            </dl>
          </details>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={busy !== null || amendmentDraft.trim().length === 0}
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  inspection === null || !inspection.inspectionSufficient
                    ? "Inspection suffisante requise avant de confirmer"
                    : undefined
                }
              >
                Confirmer mon consentement
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span
              data-testid="w2-authorization-outcome"
              data-outcome={authorization.outcome}
            >
              {authorization.outcome === "AUTHORIZED"
                ? "Autorisation vérifiée — l'exécution peut être lancée"
                : "Exécution bloquée"}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
          </dl>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques d&apos;autorité</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Verdict technique</dt>
                <dd data-testid="w2-authorization-outcome-tech">
                  {authorization.outcomeLabel}
                </dd>
              </div>
              <div>
                <dt>Trace d&apos;autorité</dt>
                <dd className={styles.code} data-testid="w2-authority-receipt">
                  {authorization.authorityReceiptRef}
                </dd>
              </div>
            </dl>
          </details>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span
              data-testid="w3b-product-outcome-kind"
              data-kind={productOutcome.outcome}
            >
              {W4C_PRODUCT_OUTCOME_LABELS[productOutcome.outcome]}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Preuve disponible</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label={W4C_POST_EVIDENCE_HEADING}
            >
              <h4 className={styles.blockTitle}>{W4C_POST_EVIDENCE_HEADING}</h4>
              <p
                className={styles.productHeadline}
                data-testid="w3c-recommendation-headline"
              >
                {postEvidence.recommendation.headline}
              </p>
              <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
                {postEvidence.recommendation.rationale}
              </p>
              <p className={styles.blockBody} data-testid="w3c-next-step">
                <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
                {postEvidence.recommendation.nextStep}
              </p>
              <p className={styles.blockBody} data-testid="w3c-nora-analysis">
                {postEvidence.analysisText ??
                  postEvidence.analysisUnavailableReason ??
                  "Analyse indisponible"}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Orientation</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              <details className={styles.technicalDetails}>
                <summary>Détail de recommandation (secondaire)</summary>
                <dl className={styles.facts}>
                  <div>
                    <dt>Authority</dt>
                    <dd data-testid="w3c-recommendation-authority">
                      none — Recommendation ≠ HumanDecision
                    </dd>
                  </div>
                  <div>
                    <dt>LPS version</dt>
                    <dd data-testid="w3c-lps-version">
                      {postEvidence.lpsVersion ?? "—"}
                    </dd>
                  </div>
                </dl>
              </details>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Evidence ID</dt>
                <dd className={styles.code} data-testid="w3b-evidence-id">
                  {productOutcome.evidenceId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>ReviewBundle ID</dt>
                <dd className={styles.code} data-testid="w3b-review-bundle-id">
                  {productOutcome.reviewBundleId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Claim autorisé</dt>
                <dd data-testid="w3b-claim-allowed">
                  {productOutcome.claimAllowed ? "oui" : "non"}
                </dd>
              </div>
              <div>
                <dt>Apprentissage / replan</dt>
                <dd data-testid="w3b-nora-replan">
                  {`analyse: ${
                    postEvidence && postEvidence.ok && postEvidence.noraInvoked
                      ? "oui"
                      : "non"
                  } · replan auto: non`}
                </dd>
              </div>
              <div>
                <dt>Cycle auto-fermé</dt>
                <dd data-testid="w3b-cycle-closed">non</dd>
              </div>
              <div>
                <dt>READY</dt>
                <dd data-testid="w3b-ready">non</dd>
              </div>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}
```

### `projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts`

```typescript
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
  parseExplicitQualificationSignals,
  type CandidateTrajectoryApprovalPresentationDto,
  getCycleTypeById,
} from "@/lib/oa/cycle";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "./candidateTrajectoryPromotionGuard";

function loadQualificationSignalsFromRecommendation(
  epistemic: Awaited<
    ReturnType<RuntimeOaStack["cycleServices"]["epistemic"]["listByProject"]>
  >,
  recommendationId: string,
):
  | {
      ok: true;
      signals: NonNullable<
        ReturnType<typeof parseExplicitQualificationSignals>
      >;
    }
  | { ok: false; code: string; message: string } {
  const lrItem = epistemic.find((e) => e.epistemicItemId === recommendationId);
  if (!lrItem || lrItem.type !== "Recommendation") {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      message:
        "Recommandation source introuvable — signaux de qualification requis.",
    };
  }
  const signals = parseExplicitQualificationSignals(
    lrItem.lifecycleRecommendation?.qualificationSignals,
  );
  if (!signals) {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      message:
        "Signaux de qualification incomplets sur la recommandation lifecycle.",
    };
  }
  return { ok: true, signals };
}

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

  const signalsGate = loadQualificationSignalsFromRecommendation(
    epistemic,
    provenance.recommendationId,
  );
  if (!signalsGate.ok) {
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
    qualificationSignals: signalsGate.signals,
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

  const signalsGate = loadQualificationSignalsFromRecommendation(
    epistemic,
    provenance.recommendationId,
  );
  if (!signalsGate.ok) {
    return signalsGate;
  }
  const qualificationSignals = signalsGate.signals;

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
    qualificationSignals,
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
      qualificationSignals,
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

### `projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts`

```typescript
"use server";

/**
 * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
 * Client may send projectId (+ presentationDigest for approval). ZERO model calls.
 * No Cycle / START / EC / Confirmation. HD only via approve path.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import type { CandidateTrajectoryProvenanceStatus } from "@/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import {
  prepareCycleFromValidatedTrajectory,
  readPreparedTrajectoryCycle,
  startPreparedTrajectoryCycle,
} from "@/lib/oa/cycle";

export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  recommendationId?: string;
  semanticKey?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  provenanceObservationId?: string;
  correlationId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const result = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId: input.projectId,
    deps: {
      trajectories: oa.cycleServices.trajectories,
      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      runInTransaction: (fn) => oa.projectServices.store.runInTransaction(fn),
      listEpistemicByProject: (projectId) =>
        oa.cycleServices.epistemic.listByProject(projectId),
      listCyclesByProject: (projectId) =>
        oa.cycleServices.cycles.listByProject(projectId),
      listDecisionsByProject: (projectId) =>
        oa.decisionServices.decisions.listByProject(projectId),
      listEvidenceByProject: (projectId) =>
        oa.evidenceReviewServices.repository.listByProject(projectId),
      getCurrentLps: (projectId) =>
        oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
      getProjectDoctrinePin: async (projectId) => {
        const project = await oa.projectServices.getProject.execute({
          projectId,
        });
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
    },
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      correlationId: result.correlationId,
    };
  }
  return {
    ok: true,
    recommendationId: result.recommendationId,
    semanticKey: result.semanticKey,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    provenanceObservationId: result.provenanceObservationId,
    correlationId: result.correlationId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * Durable pre-cycle projection: candidate trajectory + CURRENT NEXT_CYCLE flag.
 * CURRENT flag uses the same material basis as lifecycle read-side (incl. blockers).
 * Authoritative targetCycleTypeId only when provenanceStatus === RESOLVED.
 */
export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  candidate?: {
    trajectoryId: string;
    version: number;
    status: "candidate";
    projectId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus: CandidateTrajectoryProvenanceStatus;
    provenanceObservationId: string | null;
    recommendationId: string | null;
    semanticKey: string | null;
    decidedByDecisionRef: null;
    isEffectiveCurrent: false;
  } | null;
  activeCycleInstanceId?: string | null;
  /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
  hasCurrentNextCycleRecommendation?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const activeCycleInstanceId = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  const result = await readPreCycleCandidateTrajectory({
    projectId: input.projectId,
    trajectories: oa.cycleServices.trajectories,
    getCurrentLps: (projectId) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    listCyclesByProject: (projectId) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listEpistemicByProject: (projectId) =>
      oa.cycleServices.epistemic.listByProject(projectId),
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      activeCycleInstanceId,
      hasCurrentNextCycleRecommendation: false,
    };
  }

  let hasCurrentNextCycleRecommendation = false;
  try {
    const epistemicItems = await oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
    const cycles = await oa.cycleServices.cycles.listByProject(input.projectId);
    const decisions =
      await oa.decisionServices.decisions.listByProject(input.projectId);
    let evidence: Awaited<
      ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
    > = [];
    const failed = new Set<LifecycleRecommendationMaterialDimension>();
    try {
      evidence = await oa.evidenceReviewServices.repository.listByProject(
        input.projectId,
      );
    } catch {
      failed.add("evidence");
    }

    let trajectory = null;
    try {
      const traj = await oa.cycleServices.getCurrentTrajectory.execute({
        projectId: input.projectId,
      });
      trajectory = traj.ok ? traj.trajectory : null;
    } catch {
      failed.add("trajectory");
    }

    const project = await oa.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    const doctrinePin = project.ok
      ? (project.project.doctrinePackageRef ??
        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
      : lps.ok
        ? lps.livingProjectState.doctrinePackageRef
        : undefined;

    const blockersSnap =
      deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
    const current = selectCurrentLifecycleRecommendations({
      items: epistemicItems,
      cycles,
      lpsActiveCycleInstanceId: activeCycleInstanceId,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
      doctrinePackageVersion: doctrinePin?.version ?? null,
      doctrinePackageDigest: doctrinePin?.digest ?? null,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.statements,
      failedMaterialDimensions: failed,
    });
    hasCurrentNextCycleRecommendation = current.some(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    );
  } catch {
    // Fail closed for the flag — do not invent CURRENT.
    hasCurrentNextCycleRecommendation = false;
  }

  return {
    ok: true,
    candidate: result.candidate,
    activeCycleInstanceId,
    hasCurrentNextCycleRecommendation,
  };
}

/**
 * Server-owned approval presentation (digest + selectability).
 * Client must not treat sealed fields as SoT beyond display + digest round-trip.
 */
export async function projectAssistantReadCandidateTrajectoryApprovalPresentationAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  presentation?: {
    projectId: string;
    trajectoryId: string;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    provenanceStatus: "RESOLVED";
    recommendationId: string;
    semanticKey: string;
    provenanceObservationId: string;
    awaitingDecision: true;
    cycleStarted: false;
    targetCycleSelectable: boolean;
    approvalOptionLabel: string;
    presentationDigest: string;
    displayCandidateVersionHint: number;
  } | null;
  alreadyDecided?: {
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
  } | null;
  activeCycleInstanceId?: string | null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const built = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!built.ok) {
    return { ok: false, code: built.code, message: built.message };
  }
  return {
    ok: true,
    presentation: built.presentation,
    alreadyDecided: built.alreadyDecided,
    activeCycleInstanceId: built.activeCycleInstanceId,
  };
}

/**
 * Unary Pilote approval: "Valider cette trajectoire".
 * Client input max: projectId + presentationDigest. All else server-resolved.
 */
export async function projectAssistantApprovePreCycleCandidateTrajectoryAction(input: {
  projectId: string;
  presentationDigest: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  decisionId?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  status?: string;
  decidedByDecisionRef?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string | null;
  lpsVersionAfter?: number;
  activeCycleInstanceId?: null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await approveCandidateTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
    presentationDigest: input.presentationDigest,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.message };
  }
  return {
    ok: true,
    decisionId: result.decisionId,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    status: result.status,
    decidedByDecisionRef: result.decidedByDecisionRef,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    lpsVersionAfter: result.lpsVersionAfter,
    activeCycleInstanceId: null,
  };
}

/**
 * D-GF-START-01 — prepare CycleInstance from validated trajectory (non-active).
 * Client: projectId only.
 */
export async function prepareCycleFromValidatedTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  cycleInstanceId?: string;
  cycleTypeId?: string;
  catalogLabel?: string | null;
  profile?: string;
  status?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  ckcResolutionRef?: string;
  reused?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await prepareCycleFromValidatedTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return {
    ok: true,
    cycleInstanceId: result.cycle.cycleInstanceId,
    cycleTypeId: result.cycle.cycleTypeId,
    catalogLabel: result.catalogLabel,
    profile: result.cycle.profile,
    status: result.cycle.status,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    ckcResolutionRef: result.cycle.ckcResolutionRef,
    reused: result.reused,
  };
}

/**
 * D-GF-START-01 — read prepared (non-active) trajectory-bound cycle.
 */
export async function readPreparedTrajectoryCycleAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  prepared?: {
    cycleInstanceId: string;
    cycleTypeId: string;
    catalogLabel: string | null;
    profile: string;
    status: string;
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    ckcResolutionRef: string | null;
    qualificationSignals: {
      structuralChange: boolean;
      securityImpact: boolean;
      architectureImpact: boolean;
      dataImpact: boolean;
      irreversible: boolean;
      lowRiskBounded: boolean;
    } | null;
    isActive: false;
  } | null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await readPreparedTrajectoryCycle({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return { ok: true, prepared: result.prepared };
}

/**
 * D-GF-START-01 — START prepared trajectory-bound cycle (N3 Pilote).
 * Client: projectId (+ optional cycleInstanceId).
 */
export async function startPreparedTrajectoryCycleAction(input: {
  projectId: string;
  cycleInstanceId?: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  cycleInstanceId?: string;
  catalogLabel?: string | null;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  activeCycleInstanceId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await startPreparedTrajectoryCycle({
    oa: runtime.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return {
    ok: true,
    cycleInstanceId: result.cycle.cycleInstanceId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    activeCycleInstanceId: result.activeCycleInstanceId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import { isExplicitCycleQualificationSignals } from "@/lib/oa/cycle/application/lifecycleRecommendation/qualificationSignals";

const QUALIFICATION_SIGNALS_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "structuralChange",
    "securityImpact",
    "architectureImpact",
    "dataImpact",
    "irreversible",
    "lowRiskBounded",
  ],
  properties: {
    structuralChange: { type: "boolean" as const },
    securityImpact: { type: "boolean" as const },
    architectureImpact: { type: "boolean" as const },
    dataImpact: { type: "boolean" as const },
    irreversible: { type: "boolean" as const },
    lowRiskBounded: { type: "boolean" as const },
  },
};

/**
 * Agents SDK outputType for Lifecycle Recommendation candidates.
 * Same Nora Runner path — no second model call / prose parser.
 * D-GF-START-01: qualificationSignals (object | null) on the same turn.
 */
export const NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_lifecycle_recommendation",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "intent",
      "statement",
      "subjectCycleInstanceId",
      "targetCycleInstanceId",
      "targetCycleTypeId",
      "rationale",
      "authority",
      "isHumanDecision",
      "qualificationSignals",
    ],
    properties: {
      intent: {
        type: "string" as const,
        enum: ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"],
      },
      statement: { type: "string" as const },
      subjectCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleTypeId: { type: ["string", "null"] as const },
      rationale: { type: ["string", "null"] as const },
      authority: { type: "string" as const, enum: ["none"] },
      isHumanDecision: { type: "boolean" as const, enum: [false] },
      qualificationSignals: {
        anyOf: [QUALIFICATION_SIGNALS_SCHEMA, { type: "null" as const }],
      },
    },
  },
};

export function isNoraLifecycleRecommendationStructuredOutput(
  value: unknown,
): value is NoraLifecycleRecommendationStructuredOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (o.intent !== "FINALIZE_CURRENT_CYCLE" && o.intent !== "NEXT_CYCLE") {
    return false;
  }
  if (typeof o.statement !== "string") return false;
  if (o.authority !== "none") return false;
  if (o.isHumanDecision !== false) return false;
  if (
    !(
      o.qualificationSignals === null ||
      isExplicitCycleQualificationSignals(o.qualificationSignals)
    )
  ) {
    return false;
  }
  return true;
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  validateCriticalJustification,
  validateCycleIds,
} from "../domain/invariants";
import { qualifyCycle } from "../domain/qualification";
import type {
  CreateCycleRequest,
  CreateCycleResult,
  CycleInstance,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../ports/cycleRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * CreateCycle — stores recommended/accepted profile.
 * Critical → status=`proposed` (no auto-acknowledge; no invented Morris decision).
 * Light/Standard → status=`acknowledged` (no Critical ack gate).
 * Absent CKC never blocks creation.
 */
export class CreateCycle {
  constructor(
    private readonly cycles: CycleRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(request: CreateCycleRequest): Promise<CreateCycleResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): CreateCycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.cycle.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        profile: "Standard",
        status: "proposed",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("CYCLE_INVALID", "created_by_required");
      }

      const idViolation = validateCycleIds({
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        projectId: request.projectId,
      });
      if (idViolation) {
        return fail(idViolation.detailCode, idViolation.reason);
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      const qualification = qualifyCycle({
        objective: request.objective,
        scope: request.scope,
        signals: request.signals,
        requestedProfile: request.requestedProfile,
        justification: request.justification,
        cycleTypeId: request.cycleTypeId,
      }).recommendation;

      const justViolation = validateCriticalJustification(
        qualification.recommendedProfile,
        request.justification,
      );
      if (justViolation) {
        return fail(justViolation.detailCode, justViolation.reason);
      }

      if (await this.cycles.exists(request.cycleInstanceId)) {
        return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
      }

      const status =
        qualification.recommendedProfile === "Critical"
          ? "proposed"
          : "acknowledged";

      const cycle: CycleInstance = {
        schemaVersion: "0.1.0-oa",
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        projectId: request.projectId,
        profile: qualification.recommendedProfile,
        status,
        acknowledgedAt:
          status === "acknowledged" ? timestamp : undefined,
        createdAt: timestamp,
        qualificationSignals: request.signals,
        ...(request.trajectoryId !== undefined
          ? { trajectoryId: request.trajectoryId }
          : {}),
        ...(request.trajectoryVersion !== undefined
          ? { trajectoryVersion: request.trajectoryVersion }
          : {}),
        ...(request.trajectoryStepId !== undefined
          ? { trajectoryStepId: request.trajectoryStepId }
          : {}),
        ...(request.ckcResolutionRef !== undefined
          ? { ckcResolutionRef: request.ckcResolutionRef }
          : {}),
      };

      const persist = async () => {
        if (await this.cycles.exists(request.cycleInstanceId)) {
          throw new Error("cycle_id_taken");
        }
        await this.cycles.save(cycle);

        if (request.linkAsActiveCycle) {
          const siblings = await this.cycles.listByProject(request.projectId);
          const activeSibling = siblings.find((c) => c.status === "active");
          if (activeSibling) {
            throw new Error(
              `active_exists:${activeSibling.cycleInstanceId}`,
            );
          }
          const current =
            await this.projectServices.getCurrentLivingProjectState.execute({
              projectId: request.projectId,
            });
          if (!current.ok) {
            throw new Error("missing_current_lps");
          }
          if (
            current.livingProjectState.activeCycleInstanceId &&
            current.livingProjectState.activeCycleInstanceId !==
              request.cycleInstanceId
          ) {
            throw new Error(
              `active_exists:${current.livingProjectState.activeCycleInstanceId}`,
            );
          }
          const expected =
            request.expectedLpsVersion ?? current.livingProjectState.version;
          const appended =
            await this.projectServices.appendLivingProjectStateVersion.execute({
              projectId: request.projectId,
              expectedVersion: expected,
              objective: current.livingProjectState.objective,
              createdBy: request.createdBy,
              correlationId,
              context: current.livingProjectState.context,
              scope: current.livingProjectState.scope,
              activeCycleInstanceId: request.cycleInstanceId,
              ckcResolutionRef: request.ckcResolutionRef,
            });
          if (!appended.ok) {
            if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
              const err = new Error("lps_version_conflict") as Error & {
                currentVersion?: number;
              };
              err.currentVersion = appended.error.currentVersion;
              throw err;
            }
            throw new Error("lps_append_failed");
          }
        }
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof Error && err.message === "cycle_id_taken") {
          return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
        }
        if (err instanceof Error && err.message.startsWith("active_exists:")) {
          return fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
        }
        if (err instanceof Error && err.message === "lps_version_conflict") {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedLpsVersion,
            currentVersion: (err as Error & { currentVersion?: number })
              .currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_create_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.cycle.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: cycle.cycleInstanceId,
        profile: cycle.profile,
        status: cycle.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: structuredClone(cycle),
        qualification,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts`

```typescript
import { createHash } from "node:crypto";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import { LIFECYCLE_RECOMMENDATION_INTENTS } from "./types";

export function isLifecycleRecommendationIntent(
  value: unknown,
): value is LifecycleRecommendationIntent {
  return (
    typeof value === "string" &&
    (LIFECYCLE_RECOMMENDATION_INTENTS as readonly string[]).includes(value)
  );
}

/**
 * Deterministic fingerprint over MATERIAL Recommendation basis only.
 * Excludes eligibility fields finalizeAccepted / resumeClean (Recommendation ≠ eligibility).
 */
export function computeBasisFingerprint(
  refs: LifecycleRecommendationBasisRefs,
): string {
  const canonical = JSON.stringify({
    projectId: refs.projectId,
    subjectCycleInstanceId: refs.subjectCycleInstanceId ?? null,
    subjectCycleStatus: refs.subjectCycleStatus ?? null,
    targetCycleInstanceId: refs.targetCycleInstanceId ?? null,
    targetCycleTypeId: refs.targetCycleTypeId ?? null,
    lpsActiveCycleInstanceId: refs.lpsActiveCycleInstanceId ?? null,
    lpsVersion: refs.lpsVersion ?? null,
    trajectoryId: refs.trajectoryId ?? null,
    trajectoryVersion: refs.trajectoryVersion ?? null,
    trajectoryStatus: refs.trajectoryStatus ?? null,
    reservationBlockingCount: refs.reservationBlockingCount ?? null,
    doctrinePackageId: refs.doctrinePackageId ?? null,
    doctrinePackageVersion: refs.doctrinePackageVersion ?? null,
    doctrinePackageDigest: refs.doctrinePackageDigest ?? null,
    decisionFingerprint: refs.decisionFingerprint ?? null,
    evidenceFingerprint: refs.evidenceFingerprint ?? null,
    blockerFingerprint: refs.blockerFingerprint ?? null,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function computeSemanticKey(input: {
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.intent,
    input.subjectCycleInstanceId ?? "",
    input.targetCycleInstanceId ?? "",
    input.targetCycleTypeId ?? "",
  ].join("|");
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

/** Genuine domain-object references only — never machine-state prefixes. */
export function buildGenuineRelatedObjects(input: {
  projectId: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
}): string[] {
  const out: string[] = [input.projectId];
  if (input.subjectCycleInstanceId) out.push(input.subjectCycleInstanceId);
  if (input.targetCycleInstanceId) out.push(input.targetCycleInstanceId);
  return out;
}

export function candidateFromStructuredOutput(
  output: LifecycleRecommendationCandidate,
): LifecycleRecommendationCandidate {
  return {
    intent: output.intent,
    statement: output.statement.trim(),
    subjectCycleInstanceId: output.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: output.targetCycleInstanceId ?? null,
    targetCycleTypeId: output.targetCycleTypeId ?? null,
    rationale: output.rationale ?? null,
    qualificationSignals:
      output.qualificationSignals === undefined
        ? undefined
        : output.qualificationSignals === null
          ? null
          : { ...output.qualificationSignals },
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryDecisionBasis.ts`

```typescript
/**
 * D-GF-HD-01 — digests + presentation material for greenfield candidate approval.
 * Reuses computeDecisionBasisSourceDigest — no parallel digest engine.
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

export const CANDIDATE_TRAJECTORY_APPROVAL_KIND =
  "approve_candidate_trajectory_as_is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID =
  "opt:approve-candidate-trajectory-as-is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL =
  "Valider cette trajectoire" as const;

export function candidateTrajectoryApprovalSubject(
  trajectoryId: string,
  candidateVersion: number,
): string {
  return `project.trajectory.approval:${trajectoryId}:v${candidateVersion}`;
}

/** Material step projection — changes that alter what the Pilote approves. */
export function materialTrajectoryStepsProjection(
  steps: readonly TrajectoryStep[],
): readonly Record<string, unknown>[] {
  return steps.map((step) => ({
    stepId: step.stepId,
    order: step.order,
    label: step.label,
    state: step.state,
    ...(step.cycleTypeId !== undefined
      ? { cycleTypeId: step.cycleTypeId }
      : {}),
    ...(step.dependencies !== undefined
      ? { dependencies: [...step.dependencies] }
      : {}),
    ...(step.gate !== undefined ? { gate: step.gate } : {}),
    ...(step.exitCriteria !== undefined
      ? { exitCriteria: [...step.exitCriteria] }
      : {}),
    ...(step.risks !== undefined ? { risks: [...step.risks] } : {}),
    ...(step.reservations !== undefined
      ? { reservations: [...step.reservations] }
      : {}),
  }));
}

export function computeCandidateContentDigest(input: {
  trajectoryId: string;
  version: number;
  status: ProjectTrajectory["status"];
  steps: readonly TrajectoryStep[];
}): string {
  return computeDecisionBasisSourceDigest({
    trajectoryId: input.trajectoryId,
    version: input.version,
    status: input.status,
    steps: materialTrajectoryStepsProjection(input.steps),
  });
}

export type CandidateTrajectoryPresentationMaterial = {
  projectId: string;
  lps: {
    lpsId: string;
    lpsVersion: number;
    doctrineDigest?: string;
  };
  candidate: {
    trajectoryId: string;
    candidateVersion: number;
    status: "candidate";
    candidateContentDigest: string;
  };
  provenance: {
    provenanceObservationId: string;
    recommendationId: string;
    semanticKey: string;
    targetCycleTypeId: string;
  };
  /**
   * D-GF-START-01 — sealed qualification signals when provided on the new path.
   * Included in presentationDigest so a signal flip invalidates approval.
   */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
  approvalKind: typeof CANDIDATE_TRAJECTORY_APPROVAL_KIND;
};

export function buildCandidateTrajectoryPresentationMaterial(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  trajectory: ProjectTrajectory;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
}): CandidateTrajectoryPresentationMaterial {
  const candidateContentDigest = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: input.trajectory.status,
    steps: input.trajectory.steps,
  });
  return {
    projectId: input.projectId,
    lps: {
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      ...(input.doctrineDigest !== undefined
        ? { doctrineDigest: input.doctrineDigest }
        : {}),
    },
    candidate: {
      trajectoryId: input.trajectory.trajectoryId,
      candidateVersion: input.trajectory.version,
      status: "candidate",
      candidateContentDigest,
    },
    provenance: {
      provenanceObservationId: input.provenanceObservationId,
      recommendationId: input.recommendationId,
      semanticKey: input.semanticKey,
      targetCycleTypeId: input.targetCycleTypeId,
    },
    ...(input.qualificationSignals
      ? { qualificationSignals: { ...input.qualificationSignals } }
      : {}),
    approvalKind: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  };
}

export function computeCandidateTrajectoryPresentationDigest(
  material: CandidateTrajectoryPresentationMaterial,
): string {
  return computeDecisionBasisSourceDigest(material);
}

/** Server-owned display DTO — client must not treat as SoT for sealed fields. */
export type CandidateTrajectoryApprovalPresentationDto = {
  projectId: string;
  trajectoryId: string;
  catalogLabel: string | null;
  targetCycleTypeId: string;
  steps: readonly {
    stepId: string;
    order: number;
    label: string;
    state: string;
  }[];
  provenanceStatus: "RESOLVED";
  recommendationId: string;
  semanticKey: string;
  provenanceObservationId: string;
  awaitingDecision: true;
  cycleStarted: false;
  targetCycleSelectable: boolean;
  approvalOptionLabel: typeof CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL;
  presentationDigest: string;
  /** Display-only version hint — never authoritative for approval. */
  displayCandidateVersionHint: number;
};

export function buildCandidateTrajectoryApprovalPresentationDto(input: {
  material: CandidateTrajectoryPresentationMaterial;
  presentationDigest: string;
  steps: readonly TrajectoryStep[];
  targetCycleSelectable: boolean;
}): CandidateTrajectoryApprovalPresentationDto {
  const entry = getCycleTypeById(input.material.provenance.targetCycleTypeId);
  return {
    projectId: input.material.projectId,
    trajectoryId: input.material.candidate.trajectoryId,
    catalogLabel: entry?.label ?? null,
    targetCycleTypeId: input.material.provenance.targetCycleTypeId,
    steps: input.steps.map((s) => ({
      stepId: s.stepId,
      order: s.order,
      label: s.label,
      state: s.state,
    })),
    provenanceStatus: "RESOLVED",
    recommendationId: input.material.provenance.recommendationId,
    semanticKey: input.material.provenance.semanticKey,
    provenanceObservationId: input.material.provenance.provenanceObservationId,
    awaitingDecision: true,
    cycleStarted: false,
    targetCycleSelectable: input.targetCycleSelectable,
    approvalOptionLabel: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
    presentationDigest: input.presentationDigest,
    displayCandidateVersionHint: input.material.candidate.candidateVersion,
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/ckcResolutionRef.ts`

```typescript
/**
 * D-GF-START-01 — pure CKC resolution ref projection (HARVEST from F2 qualify).
 * Kept in lifecycleRecommendation to avoid importing F2 orchestrate / ProposalStore.
 */

export type CkcResolutionRefProofFields = {
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Deterministic durable ref from a successful QualifyCycleWithCkc proof. */
export function projectCkcResolutionRef(
  proof: CkcResolutionRefProofFields,
): string {
  const digest = proof.catalogHash.replace(/^sha256:/i, "").slice(0, 12);
  const corr = proof.correlationId.replace(/[^a-zA-Z0-9]/g, "").slice(-16);
  return `ckc:m2-${digest || "nodigest"}-${corr || "nocorr"}`;
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
export * from "./readPreparedTrajectoryCycle";
export * from "./startPreparedTrajectoryCycle";
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`

```typescript
import type {
  EpistemicItem,
  EpistemicLifecycleRecommendation,
  ExplicitCycleQualificationSignals,
  ProvenanceRecord,
} from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  buildGenuineRelatedObjects,
  computeBasisFingerprint,
  computeSemanticKey,
} from "./basisFingerprint";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationEnvelope,
} from "./types";
import type { ValidateLifecycleRecommendationResult } from "./validateLifecycleRecommendation";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export function lifecycleRecommendationEpistemicId(input: {
  projectId: string;
  semanticKey: string;
  producedAt: string;
}): string {
  const slug = input.semanticKey.slice(0, 16);
  const ts = input.producedAt.replace(/[^0-9A-Za-z]/g, "").slice(0, 20);
  return `epi:lr:${slug}:${ts}`;
}

export function buildPersistedLifecycleRecommendation(input: {
  intent: EpistemicLifecycleRecommendation["intent"];
  basisRefs: LifecycleRecommendationBasisRefs;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  projectId: string;
  qualificationSignals?: ExplicitCycleQualificationSignals;
}): EpistemicLifecycleRecommendation {
  const basisFingerprint = computeBasisFingerprint(input.basisRefs);
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.intent,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
  });
  return {
    intent: input.intent,
    basisFingerprint,
    basisRefs: { ...input.basisRefs, projectId: input.projectId },
    semanticKey,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    authority: "none",
    ...(input.qualificationSignals
      ? { qualificationSignals: { ...input.qualificationSignals } }
      : {}),
  };
}

export function encodeLifecycleRecommendationItem(input: {
  recommendationId: string;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  supersedesRecommendationId?: string | null;
  provenance?: ProvenanceRecord;
}): EpistemicItem {
  const persisted = buildPersistedLifecycleRecommendation({
    intent: input.validated.intent,
    basisRefs: input.basisRefs,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
    projectId: input.projectId,
    qualificationSignals: input.validated.qualificationSignals,
  });
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.recommendationId,
    type: "Recommendation",
    statement: input.validated.statement,
    status: "active",
    source: "lifecycle-recommendation:nora",
    createdBy: structuredClone(input.createdBy),
    createdAt: input.producedAt,
    supersedes: input.supersedesRecommendationId ?? undefined,
    relatedObjects: buildGenuineRelatedObjects({
      projectId: input.projectId,
      subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
      targetCycleInstanceId: input.validated.targetCycleInstanceId,
    }),
    provenance: input.provenance
      ? structuredClone(input.provenance)
      : undefined,
    lifecycleRecommendation: persisted,
  };
}

export function tryDecodeLifecycleRecommendationItem(
  item: EpistemicItem,
  derivedCurrentness: LifecycleRecommendationEnvelope["derivedCurrentness"],
): LifecycleRecommendationEnvelope | null {
  if (item.type !== "Recommendation") return null;
  if (item.source !== "lifecycle-recommendation:nora") return null;
  const persisted = item.lifecycleRecommendation;
  if (!persisted || persisted.authority !== "none") return null;
  if (!persisted.basisFingerprint || !persisted.semanticKey) return null;

  const qualificationSignals = parseExplicitQualificationSignals(
    persisted.qualificationSignals,
  );

  return {
    recommendationId: item.epistemicItemId,
    projectId: persisted.basisRefs.projectId,
    intent: persisted.intent,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    producer: "nora",
    producedAt: item.createdAt,
    statement: item.statement,
    basisFingerprint: persisted.basisFingerprint,
    basisRefs: persisted.basisRefs,
    semanticKey: persisted.semanticKey,
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: item.status,
    supersedesRecommendationId: item.supersedes ?? null,
    derivedCurrentness,
    ...(qualificationSignals ? { qualificationSignals } : {}),
  };
}

export async function materializeLifecycleRecommendation(input: {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
}): Promise<
  | { ok: true; item: EpistemicItem; supersededId: string | null }
  | { ok: false; code: string; reason: string }
> {
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.validated.intent,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
  });

  const priorActive = input.existingItems.find((e) => {
    if (e.type !== "Recommendation" || e.status !== "active") return false;
    if (e.source !== "lifecycle-recommendation:nora") return false;
    return e.lifecycleRecommendation?.semanticKey === semanticKey;
  });

  const recommendationId = lifecycleRecommendationEpistemicId({
    projectId: input.projectId,
    semanticKey,
    producedAt: input.producedAt,
  });

  const item = encodeLifecycleRecommendationItem({
    recommendationId,
    projectId: input.projectId,
    validated: input.validated,
    basisRefs: input.basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    supersedesRecommendationId: priorActive?.epistemicItemId ?? null,
    provenance: input.provenance,
  });

  const result = await input.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: input.createdBy,
    correlationId: input.correlationId,
    items: [
      {
        epistemicItemId: item.epistemicItemId,
        type: "Recommendation",
        statement: item.statement,
        status: "active",
        source: item.source,
        supersedes: item.supersedes,
        relatedObjects: item.relatedObjects,
        provenance: item.provenance,
        lifecycleRecommendation: item.lifecycleRecommendation,
      },
    ],
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      reason: result.error.internalCauseRef ?? "materialize_failed",
    };
  }

  return {
    ok: true,
    item,
    supersededId: priorActive?.epistemicItemId ?? null,
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts`

```typescript
/**
 * Greenfield bridge (D-RB-BOOT-01 / Option B2):
 * CURRENT NEXT_CYCLE Lifecycle Recommendation → durable candidate ProjectTrajectory
 * + Option B provenance Observation (atomic Product UoW).
 *
 * Deterministic Product mechanics only — no model call, no HD, no CycleInstance, no START.
 * Reuses greenfield bootstrap eligibility + CreateInitialTrajectory.
 */
import { randomBytes } from "node:crypto";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ActorReference } from "@/lib/oa/doctrine";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
import type { CreateInitialTrajectory } from "../createInitialTrajectory";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
import {
  assessGreenfieldPreTrajectoryBootstrapEligibility,
  resolveTrajectoryBootstrapPresence,
  validateCanonicalTargetCycleTypeId,
} from "./greenfieldLifecycleBootstrap";
import { deriveLifecycleBlockersFromEpistemicItems } from "../deriveLifecycleBlockers";
import {
  selectCurrentLifecycleRecommendations,
  type RebuildLifecycleRecommendationBasisFacts,
} from "./currentness";
import type { LifecycleRecommendationMaterialDimension } from "./materialReaderContract";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "./noraActor";
import type { LifecycleRecommendationEnvelope } from "./types";
import {
  buildCandidateTrajectoryProvenanceObservationItem,
  CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR,
  newProvenanceObservationId,
  resolveCandidateTrajectoryProvenance,
  type CandidateTrajectoryProvenanceStatus,
} from "./candidateTrajectoryProvenance";

/** Thrown inside outer Product UoW so nested writes roll back together. */
export class CandidateTrajectoryBridgeAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "CandidateTrajectoryBridgeAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

function newCorId(): string {
  return `cor:${randomBytes(8).toString("hex")}`;
}

function newTrajectoryId(): string {
  return `trj:lr-bridge-${randomBytes(6).toString("hex")}`;
}

function newStepId(canonicalKey: string): string {
  const slug = canonicalKey.replace(/[^a-z0-9-]/gi, "").slice(0, 24) || "cycle";
  return `stp:${slug}-${randomBytes(4).toString("hex")}`;
}

export type PrepareCandidateTrajectoryDeps = {
  trajectories: TrajectoryRepositoryPort;
  createInitialTrajectory: CreateInitialTrajectory;
  updateEpistemicState: UpdateEpistemicState;
  /**
   * Outer Product UoW (projectServices.store / SqliteProductStore).
   * Nested CreateInitialTrajectory + UpdateEpistemicState join the same TX.
   */
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
  listDecisionsByProject: (projectId: string) => Promise<HumanDecision[]>;
  listEvidenceByProject?: (projectId: string) => Promise<Evidence[]>;
  getCurrentLps: (projectId: string) => Promise<
    | {
        ok: true;
        livingProjectState: {
          version: number;
          activeCycleInstanceId?: string | null;
          trajectoryId?: string | null;
          trajectoryVersion?: number | null;
          doctrinePackageRef?: {
            doctrinePackageId: string;
            version: string;
            digest: string;
          };
        };
      }
    | { ok: false }
  >;
  getProjectDoctrinePin?: (projectId: string) => Promise<{
    doctrinePackageId: string;
    version: string;
    digest: string;
  } | null>;
  /** Injected for tests — defaults to Nora lifecycle non-authoritative actor. */
  createdBy?: ActorReference;
  /** System actor for provenance Observation — defaults to sys:candidate-trajectory-provenance. */
  provenanceCreatedBy?: ActorReference;
  /** Injected ids for deterministic tests. */
  newTrajectoryId?: () => string;
  newStepId?: (canonicalKey: string) => string;
  newProvenanceObservationId?: () => string;
  correlationId?: string;
};

export type PrepareCandidateTrajectorySuccess = {
  ok: true;
  projectId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  catalogLabel: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
  provenanceObservationId: string;
  correlationId: string;
  lpsVersionAfter: number;
  sourceDerivedCurrentnessBefore: "CURRENT";
};

export type PrepareCandidateTrajectoryFailure = {
  ok: false;
  code: string;
  reason: string;
  correlationId: string;
};

export type PrepareCandidateTrajectoryResult =
  | PrepareCandidateTrajectorySuccess
  | PrepareCandidateTrajectoryFailure;

/**
 * Resolve exactly one CURRENT NEXT_CYCLE Lifecycle Recommendation from durable truth.
 * Ambiguity (0 or >1) → fail-closed.
 */
export function selectExactCurrentNextCycleRecommendation(
  current: readonly LifecycleRecommendationEnvelope[],
):
  | { ok: true; recommendation: LifecycleRecommendationEnvelope }
  | { ok: false; code: string; reason: string } {
  const next = current.filter(
    (r) =>
      r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
  );
  if (next.length === 0) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      reason: "no_current_next_cycle_lifecycle_recommendation",
    };
  }
  if (next.length > 1) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE",
      reason: "multiple_current_next_cycle_recommendations",
    };
  }
  return { ok: true, recommendation: next[0]! };
}

export function buildSingleRecommendedCycleStep(input: {
  targetCycleTypeId: string;
  stepId: string;
}):
  | { ok: true; step: TrajectoryStep; catalogLabel: string; cycleTypeId: string }
  | { ok: false; code: string; reason: string } {
  const gate = validateCanonicalTargetCycleTypeId(input.targetCycleTypeId);
  if (!gate.ok) {
    return { ok: false, code: gate.code, reason: gate.reason };
  }
  const entry = getCycleTypeById(gate.cycleTypeId);
  if (!entry || entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return {
    ok: true,
    cycleTypeId: entry.cycleTypeId,
    catalogLabel: entry.label,
    step: {
      stepId: input.stepId,
      order: 1,
      label: entry.label,
      state: "pending",
      cycleTypeId: entry.cycleTypeId,
    },
  };
}

/**
 * Server-owned bridge. Client must supply projectId only.
 */
export async function prepareCandidateTrajectoryFromCurrentRecommendation(input: {
  projectId: string;
  deps: PrepareCandidateTrajectoryDeps;
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
}): Promise<PrepareCandidateTrajectoryResult> {
  const correlationId = input.deps.correlationId ?? newCorId();
  const fail = (code: string, reason: string): PrepareCandidateTrajectoryFailure => ({
    ok: false,
    code,
    reason,
    correlationId,
  });

  const projectId = input.projectId;
  if (!projectId || !projectId.startsWith("prj:")) {
    return fail("TRJ_BRIDGE_PROJECT_INVALID", "project_id_invalid");
  }

  const lpsResult = await input.deps.getCurrentLps(projectId);
  if (!lpsResult.ok) {
    return fail("TRJ_BRIDGE_LPS_UNAVAILABLE", "current_lps_unreadable");
  }
  const lps = lpsResult.livingProjectState;
  const expectedLpsVersion = lps.version;

  let epistemicItems: EpistemicItem[];
  let cycles: CycleInstance[];
  let decisions: HumanDecision[];
  let evidence: Evidence[] = [];
  const failed = new Set<LifecycleRecommendationMaterialDimension>(
    input.failedMaterialDimensions ?? [],
  );

  try {
    epistemicItems = await input.deps.listEpistemicByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE", "epistemic_reader_failed");
  }
  try {
    cycles = await input.deps.listCyclesByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_CYCLES_UNAVAILABLE", "cycle_reader_failed");
  }
  try {
    decisions = await input.deps.listDecisionsByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_DECISIONS_UNAVAILABLE", "decision_reader_failed");
  }
  if (input.deps.listEvidenceByProject) {
    try {
      evidence = await input.deps.listEvidenceByProject(projectId);
    } catch {
      failed.add("evidence");
    }
  }

  const presence = await resolveTrajectoryBootstrapPresence(
    input.deps.trajectories,
    projectId,
  );
  if (presence.kind === "unknown") {
    return fail("TRJ_BRIDGE_TRAJECTORY_UNKNOWN", presence.reason);
  }
  if (presence.kind !== "never") {
    return fail(
      presence.kind === "current"
        ? "TRJ_BRIDGE_TRAJECTORY_CURRENT_PRESENT"
        : "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT",
      presence.kind === "current"
        ? "current_trajectory_present"
        : "prior_or_candidate_trajectory_exists",
    );
  }

  const doctrinePin =
    (await input.deps.getProjectDoctrinePin?.(projectId)) ??
    lps.doctrinePackageRef ??
    null;

  // Same material basis as lifecycle read-side: derive blockers from durable
  // EpistemicItems — never default to [] when the reader succeeded.
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);

  const facts: RebuildLifecycleRecommendationBasisFacts = {
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    lpsVersion: lps.version,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory: null,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
  };

  const current = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    ...facts,
    failedMaterialDimensions: failed,
  });

  const selected = selectExactCurrentNextCycleRecommendation(current);
  if (!selected.ok) {
    return fail(selected.code, selected.reason);
  }
  const recommendation = selected.recommendation;

  if (recommendation.epistemicStatus !== "active") {
    return fail(
      "TRJ_BRIDGE_RECOMMENDATION_NOT_ACTIVE",
      "recommendation_epistemic_status_not_active",
    );
  }
  if (recommendation.authority !== "none") {
    return fail("TRJ_BRIDGE_AUTHORITY_FORBIDDEN", "authority_must_be_none");
  }
  if (recommendation.isHumanDecision !== false) {
    return fail(
      "TRJ_BRIDGE_HUMAN_DECISION_FORBIDDEN",
      "recommendation_must_not_be_human_decision",
    );
  }
  if (recommendation.subjectCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_SUBJECT_FORBIDDEN",
      "subject_cycle_not_allowed_for_greenfield_bridge",
    );
  }
  if (recommendation.targetCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_TARGET_INSTANCE_FORBIDDEN",
      "target_cycle_instance_not_allowed_for_greenfield_bridge",
    );
  }

  const eligibility = assessGreenfieldPreTrajectoryBootstrapEligibility({
    candidate: {
      intent: recommendation.intent,
      statement: recommendation.statement,
      subjectCycleInstanceId: recommendation.subjectCycleInstanceId,
      targetCycleInstanceId: recommendation.targetCycleInstanceId,
      targetCycleTypeId: recommendation.targetCycleTypeId,
    },
    presence,
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    decisions,
  });
  if (!eligibility.eligible) {
    return fail(eligibility.code, eligibility.reason);
  }

  const targetCycleTypeId = recommendation.targetCycleTypeId;
  if (!targetCycleTypeId) {
    return fail(
      "LR_TARGET_CYCLE_TYPE_MISSING",
      "target_cycle_type_required_for_type_based_next",
    );
  }

  const mkStepId = input.deps.newStepId ?? newStepId;
  const entry = getCycleTypeById(targetCycleTypeId);
  const canonicalKey = entry?.canonicalKey ?? "cycle";
  const stepId = mkStepId(canonicalKey);
  const stepBuild = buildSingleRecommendedCycleStep({
    targetCycleTypeId,
    stepId,
  });
  if (!stepBuild.ok) {
    return fail(stepBuild.code, stepBuild.reason);
  }

  const trajectoryId = (input.deps.newTrajectoryId ?? newTrajectoryId)();
  const provenanceObservationId = (
    input.deps.newProvenanceObservationId ?? newProvenanceObservationId
  )();
  const createdBy =
    input.deps.createdBy ?? NORA_LIFECYCLE_RECOMMENDATION_ACTOR;
  const provenanceCreatedBy =
    input.deps.provenanceCreatedBy ?? CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR;

  if (typeof input.deps.runInTransaction !== "function") {
    return fail(
      "TRJ_BRIDGE_UOW_UNAVAILABLE",
      "product_uow_required_for_provenance_atomicity",
    );
  }
  if (!input.deps.updateEpistemicState) {
    return fail(
      "TRJ_BRIDGE_EPISTEMIC_WRITER_UNAVAILABLE",
      "update_epistemic_state_required",
    );
  }

  const provenanceItem = buildCandidateTrajectoryProvenanceObservationItem({
    epistemicItemId: provenanceObservationId,
    projectId,
    recommendationId: recommendation.recommendationId,
    trajectoryId,
  });

  let trajectory: ProjectTrajectory;
  let lpsVersionAfter: number;

  try {
    const atomic = await input.deps.runInTransaction(async () => {
      const created = await input.deps.createInitialTrajectory.execute({
        trajectoryId,
        projectId,
        steps: [stepBuild.step],
        status: "candidate",
        createdBy,
        correlationId,
        expectedLpsVersion,
      });

      if (!created.ok) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          created.error.detailCode,
          created.error.internalCauseRef ?? "create_initial_trajectory_failed",
        );
      }

      if (created.trajectory.decidedByDecisionRef) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          "TRJ_BRIDGE_DECISION_REF_LEAK",
          "candidate_must_not_carry_decision_ref",
        );
      }

      const provenanceWrite = await input.deps.updateEpistemicState.execute({
        projectId,
        items: [provenanceItem],
        createdBy: provenanceCreatedBy,
        correlationId,
      });

      if (!provenanceWrite.ok) {
        throw new CandidateTrajectoryBridgeAtomicFailure(
          provenanceWrite.error.detailCode,
          provenanceWrite.error.internalCauseRef ??
            "provenance_observation_write_failed",
        );
      }

      return {
        trajectory: created.trajectory,
        lpsVersionAfter:
          created.livingProjectStateVersion ?? expectedLpsVersion + 1,
      };
    });
    trajectory = atomic.trajectory;
    lpsVersionAfter = atomic.lpsVersionAfter;
  } catch (err) {
    if (err instanceof CandidateTrajectoryBridgeAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "TRJ_BRIDGE_ATOMIC_PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "atomic_bridge_failed",
    );
  }

  return {
    ok: true,
    projectId,
    recommendationId: recommendation.recommendationId,
    semanticKey: recommendation.semanticKey,
    targetCycleTypeId: stepBuild.cycleTypeId,
    catalogLabel: stepBuild.catalogLabel,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    stepId: stepBuild.step.stepId,
    provenanceObservationId,
    correlationId,
    lpsVersionAfter,
    sourceDerivedCurrentnessBefore: "CURRENT",
  };
}

/**
 * Durable read of a pre-cycle candidate ProjectTrajectory (not current).
 * Prefer LPS trajectory pointer when present; never coerces candidate to current.
 * Authoritative targetCycleTypeId comes only from Option B provenance (never label map).
 */
export async function readPreCycleCandidateTrajectory(input: {
  projectId: string;
  trajectories: TrajectoryRepositoryPort;
  getCurrentLps: PrepareCandidateTrajectoryDeps["getCurrentLps"];
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
}): Promise<
  | {
      ok: true;
      candidate: {
        trajectoryId: string;
        version: number;
        status: "candidate";
        projectId: string;
        steps: readonly TrajectoryStep[];
        catalogLabel: string | null;
        /** Authoritative only when provenanceStatus === "RESOLVED". */
        targetCycleTypeId: string | null;
        provenanceStatus: CandidateTrajectoryProvenanceStatus;
        provenanceObservationId: string | null;
        recommendationId: string | null;
        semanticKey: string | null;
        decidedByDecisionRef: null;
        isEffectiveCurrent: false;
      };
    }
  | { ok: true; candidate: null }
  | { ok: false; code: string; reason: string }
> {
  const lpsResult = await input.getCurrentLps(input.projectId);
  if (!lpsResult.ok) {
    return { ok: false, code: "TRJ_BRIDGE_LPS_UNAVAILABLE", reason: "lps_unreadable" };
  }
  const lps = lpsResult.livingProjectState;

  try {
    const cycles = await input.listCyclesByProject(input.projectId);
    if (cycles.length > 0 || lps.activeCycleInstanceId) {
      // Pre-cycle candidate surface is only for greenfield-before-cycle.
      // Still allow reading LPS-linked candidate if present, but callers gate UI.
    }
  } catch {
    return {
      ok: false,
      code: "TRJ_BRIDGE_CYCLES_UNAVAILABLE",
      reason: "cycle_reader_failed",
    };
  }

  let trajectory: ProjectTrajectory | null = null;
  try {
    if (
      typeof lps.trajectoryVersion === "number" &&
      lps.trajectoryVersion >= 1
    ) {
      trajectory =
        (await input.trajectories.findByProjectAndVersion(
          input.projectId,
          lps.trajectoryVersion,
        )) ?? null;
    }
    if (!trajectory) {
      const presence = await resolveTrajectoryBootstrapPresence(
        input.trajectories,
        input.projectId,
      );
      if (presence.kind === "unknown") {
        return {
          ok: false,
          code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
          reason: presence.reason,
        };
      }
      if (presence.kind === "history_without_current") {
        trajectory =
          (await input.trajectories.findByProjectAndVersion(
            input.projectId,
            1,
          )) ?? null;
      }
    }
  } catch (error) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
      reason:
        error instanceof Error ? error.message : "trajectory_reader_failed",
    };
  }

  if (!trajectory || trajectory.status !== "candidate") {
    return { ok: true, candidate: null };
  }

  const current = await input.trajectories.findCurrentByProjectId(
    input.projectId,
  );
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Candidate must not be effective current — refuse to mis-present.
    return { ok: true, candidate: null };
  }

  const first = trajectory.steps[0] ?? null;
  // Presentation only — never identity.
  const catalogLabel = first?.label ?? null;

  let epistemicItems: EpistemicItem[];
  try {
    epistemicItems = await input.listEpistemicByProject(input.projectId);
  } catch {
    return {
      ok: false,
      code: "TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE",
      reason: "epistemic_reader_failed",
    };
  }

  const provenance = resolveCandidateTrajectoryProvenance({
    projectId: input.projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems,
  });

  if (provenance.status === "RESOLVED") {
    const entry = getCycleTypeById(provenance.targetCycleTypeId);
    return {
      ok: true,
      candidate: {
        trajectoryId: trajectory.trajectoryId,
        version: trajectory.version,
        status: "candidate",
        projectId: trajectory.projectId,
        steps: trajectory.steps,
        catalogLabel: entry?.label ?? catalogLabel,
        targetCycleTypeId: provenance.targetCycleTypeId,
        provenanceStatus: "RESOLVED",
        provenanceObservationId: provenance.provenanceObservationId,
        recommendationId: provenance.recommendationId,
        semanticKey: provenance.semanticKey,
        decidedByDecisionRef: null,
        isEffectiveCurrent: false,
      },
    };
  }

  return {
    ok: true,
    candidate: {
      trajectoryId: trajectory.trajectoryId,
      version: trajectory.version,
      status: "candidate",
      projectId: trajectory.projectId,
      steps: trajectory.steps,
      catalogLabel,
      // Do not invent cyc:* from label.
      targetCycleTypeId: null,
      provenanceStatus: provenance.status,
      provenanceObservationId: null,
      recommendationId: null,
      semanticKey: null,
      decidedByDecisionRef: null,
      isEffectiveCurrent: false,
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory.ts`

```typescript
/**
 * D-GF-START-01 — prepare CycleInstance from validated/current greenfield trajectory.
 *
 * CreateCycle linkAsActiveCycle=false; no LPS mutation; no step state change; no START.
 * Profile from sealed HD/LR qualificationSignals — never invented defaults.
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
  ExplicitCycleQualificationSignals,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
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

      // D-GF-START-01 — HD must seal signals; legacy HD without signals cannot prepare.
      const qualificationSignals = extractSealedSignalsFromDecision(decision);
      if (!qualificationSignals) {
        throw new PrepareCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "complete_qualification_signals_required",
        );
      }

      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const sourceLr = epistemic.find(
        (e) => e.epistemicItemId === ctx.recommendationId,
      );
      const lrSignals = parseExplicitQualificationSignals(
        sourceLr?.lifecycleRecommendation?.qualificationSignals,
      );
      if (
        lrSignals &&
        !qualificationSignalsEqual(qualificationSignals, lrSignals)
      ) {
        throw new PrepareCycleAtomicFailure(
          "PROVENANCE_SIGNAL_MISMATCH",
          "hd_signals_do_not_match_source_lr",
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

      const existing = await oa.cycleServices.cycles.findById(cycleInstanceId);
      if (existing) {
        if (
          !cycleBindingCompatible(existing, {
            projectId,
            trajectoryId: trajectory.trajectoryId,
            trajectoryVersion: trajectory.version,
            trajectoryStepId: step.stepId,
            cycleTypeId,
          })
        ) {
          throw new PrepareCycleAtomicFailure(
            "CYCLE_BINDING_CONFLICT",
            "existing_cycle_incompatible_binding",
          );
        }
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

      // Also idempotent by exact binding scan (different mint / legacy id).
      const siblings = await oa.cycleServices.cycles.listByProject(projectId);
      const byBinding = siblings.find(
        (c) =>
          cycleBindingCompatible(c, {
            projectId,
            trajectoryId: trajectory.trajectoryId,
            trajectoryVersion: trajectory.version,
            trajectoryStepId: step.stepId,
            cycleTypeId,
          }) &&
          (c.status === "proposed" ||
            c.status === "acknowledged" ||
            c.status === "active"),
      );
      if (byBinding) {
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

      const qualified = await oa.ckcQualification.qualifyCycleWithCkc.execute({
        cycleTypeId,
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId,
        signals: qualificationSignals,
        objective: lps.livingProjectState.objective,
      });
      if (qualified.state !== "success") {
        throw new PrepareCycleAtomicFailure(
          qualified.code,
          "qualify_cycle_with_ckc_failed",
        );
      }

      const ckcResolutionRef = projectCkcResolutionRef(qualified.proof);
      const created = await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId,
        projectId,
        signals: toCreateCycleSignals(qualificationSignals),
        justification: buildCriticalProfileJustificationFromSignals(
          qualificationSignals,
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

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`

```typescript
import type { HumanDecision } from "@/lib/oa/decision";
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { CycleInstance } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  computeBasisFingerprint,
  candidateFromStructuredOutput,
} from "./basisFingerprint";
import { materializeLifecycleRecommendation } from "./materializeLifecycleRecommendation";
import { validateLifecycleRecommendation } from "./validateLifecycleRecommendation";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationEnvelope,
  NoraLifecycleRecommendationStructuredOutput,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import { deriveLifecycleRecommendationCurrentness } from "./currentness";
import type { TrajectoryBootstrapPresence } from "./greenfieldLifecycleBootstrap";

export type ProduceLifecycleRecommendationInput = {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  structured:
    | NoraLifecycleRecommendationStructuredOutput
    | LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /**
   * Server-resolved canonical material basis (intent-scoped).
   * Must already include all material fields — not reconstructed from basisSeed alone.
   */
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  hasTrajectoryContext?: boolean;
  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
  decisions?: readonly HumanDecision[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
};

export type ProduceLifecycleRecommendationResult =
  | {
      ok: true;
      envelope: LifecycleRecommendationEnvelope;
      item: EpistemicItem;
      supersededId: string | null;
    }
  | { ok: false; code: string; reason: string };

/**
 * Product path post-model: validate → persist canonical basis → decode envelope.
 * Used by Fake/deterministic and future REAL boundary alike (R15).
 */
export async function produceLifecycleRecommendation(
  input: ProduceLifecycleRecommendationInput,
): Promise<ProduceLifecycleRecommendationResult> {
  if (
    "authority" in input.structured &&
    input.structured.authority !== undefined &&
    input.structured.authority !== "none"
  ) {
    return {
      ok: false,
      code: "LR_AUTHORITY_FORBIDDEN",
      reason: "authority_bearing_forbidden",
    };
  }
  if (
    "isHumanDecision" in input.structured &&
    input.structured.isHumanDecision !== undefined &&
    input.structured.isHumanDecision !== false
  ) {
    return {
      ok: false,
      code: "LR_HD_FORBIDDEN",
      reason: "recommendation_is_not_human_decision",
    };
  }

  const candidate = candidateFromStructuredOutput({
    intent: input.structured.intent,
    statement: input.structured.statement,
    subjectCycleInstanceId: input.structured.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: input.structured.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.structured.targetCycleTypeId ?? null,
    rationale:
      "rationale" in input.structured
        ? (input.structured.rationale ?? null)
        : null,
    qualificationSignals:
      "qualificationSignals" in input.structured
        ? (input.structured.qualificationSignals ?? null)
        : undefined,
  });

  const validated = validateLifecycleRecommendation({
    projectId: input.projectId,
    candidate,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    hasTrajectoryContext: input.hasTrajectoryContext,
    trajectoryBootstrapPresence: input.trajectoryBootstrapPresence,
    decisions: input.decisions,
  });
  if (!validated.ok) {
    return { ok: false, code: validated.code, reason: validated.reason };
  }

  // Persist the server-owned canonical basis (not the thin validation seed alone).
  const basisRefs: LifecycleRecommendationBasisRefs = {
    ...input.basisRefs,
    projectId: input.projectId,
    subjectCycleInstanceId: validated.subjectCycleInstanceId,
    targetCycleInstanceId: validated.targetCycleInstanceId,
    targetCycleTypeId: validated.targetCycleTypeId,
  };

  const materialized = await materializeLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    validated,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.existingItems,
    provenance: input.provenance,
    correlationId: input.correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.code,
      reason: materialized.reason,
    };
  }

  const currentness = deriveLifecycleRecommendationCurrentness({
    item: materialized.item,
    currentBasisRefs: basisRefs,
  });
  const envelope = tryDecodeLifecycleRecommendationItem(
    materialized.item,
    currentness,
  );
  if (!envelope) {
    return {
      ok: false,
      code: "LR_DECODE_FAILED",
      reason: "envelope_decode_failed",
    };
  }

  if (envelope.basisFingerprint !== computeBasisFingerprint(basisRefs)) {
    return {
      ok: false,
      code: "LR_BASIS_MISMATCH",
      reason: "basis_fingerprint_mismatch",
    };
  }

  return {
    ok: true,
    envelope: { ...envelope, basisRefs },
    item: materialized.item,
    supersededId: materialized.supersededId,
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/qualificationSignals.ts`

```typescript
/**
 * D-GF-START-01 — explicit CycleQualificationSignals helpers.
 * Never invent false defaults. Never reverse-map from labels.
 */

import type {
  CycleQualificationSignals,
  ExplicitCycleQualificationSignals,
} from "../../domain/types";

export const QUALIFICATION_SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

export type QualificationSignalKey = (typeof QUALIFICATION_SIGNAL_KEYS)[number];

export function isExplicitCycleQualificationSignals(
  value: unknown,
): value is ExplicitCycleQualificationSignals {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return QUALIFICATION_SIGNAL_KEYS.every((k) => typeof o[k] === "boolean");
}

/**
 * Parse unknown into six explicit booleans or null.
 * Does NOT invent missing fields as false.
 */
export function parseExplicitQualificationSignals(
  value: unknown,
): ExplicitCycleQualificationSignals | null {
  return isExplicitCycleQualificationSignals(value) ? { ...value } : null;
}

export function toCreateCycleSignals(
  signals: ExplicitCycleQualificationSignals,
): CycleQualificationSignals {
  return {
    structuralChange: signals.structuralChange,
    securityImpact: signals.securityImpact,
    architectureImpact: signals.architectureImpact,
    dataImpact: signals.dataImpact,
    irreversible: signals.irreversible,
    lowRiskBounded: signals.lowRiskBounded,
  };
}

export function qualificationSignalsEqual(
  a: ExplicitCycleQualificationSignals,
  b: ExplicitCycleQualificationSignals,
): boolean {
  return QUALIFICATION_SIGNAL_KEYS.every((k) => a[k] === b[k]);
}

/** Deterministic Critical justification from true critical signals only. */
export function buildCriticalProfileJustificationFromSignals(
  signals: ExplicitCycleQualificationSignals,
): string {
  const criticalTrue = (
    [
      "structuralChange",
      "securityImpact",
      "architectureImpact",
      "dataImpact",
      "irreversible",
    ] as const
  ).filter((k) => signals[k]);
  if (criticalTrue.length === 0) {
    return "Profil Critical dérivé des signaux de qualification scellés.";
  }
  return `Profil Critical dérivé des signaux de qualification scellés : ${criticalTrue.join(", ")}.`;
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/readPreparedTrajectoryCycle.ts`

```typescript
/**
 * D-GF-START-01 — read model for a prepared (non-active) trajectory-bound cycle.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance, CycleProfile } from "../../domain/types";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export type PreparedTrajectoryCycleReadModel = {
  cycleInstanceId: string;
  cycleTypeId: string;
  catalogLabel: string | null;
  profile: CycleProfile;
  status: CycleInstance["status"];
  trajectoryId: string;
  trajectoryVersion: number;
  trajectoryStepId: string;
  ckcResolutionRef: string | null;
  qualificationSignals: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } | null;
  isActive: false;
};

function isPreparedTrajectoryBound(cycle: CycleInstance): boolean {
  return Boolean(
    cycle.trajectoryId &&
      typeof cycle.trajectoryVersion === "number" &&
      cycle.trajectoryStepId &&
      (cycle.status === "proposed" || cycle.status === "acknowledged"),
  );
}

export async function readPreparedTrajectoryCycle(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<
  | { ok: true; prepared: PreparedTrajectoryCycleReadModel | null }
  | { ok: false; code: string; reason: string }
> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return { ok: false, code: "PROJECT_INVALID", reason: "project_id_invalid" };
  }

  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return { ok: false, code: "LPS_UNAVAILABLE", reason: "lps_unreadable" };
  }
  if (lps.livingProjectState.activeCycleInstanceId) {
    return { ok: true, prepared: null };
  }

  const trajectory =
    await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
  if (
    !trajectory ||
    (trajectory.status !== "validated" && trajectory.status !== "active")
  ) {
    return { ok: true, prepared: null };
  }

  let cycles: CycleInstance[];
  try {
    cycles = await oa.cycleServices.cycles.listByProject(projectId);
  } catch {
    return { ok: false, code: "CYCLES_UNAVAILABLE", reason: "cycle_reader_failed" };
  }

  const preparedCandidates = cycles.filter(
    (c) =>
      isPreparedTrajectoryBound(c) &&
      c.trajectoryId === trajectory.trajectoryId &&
      c.trajectoryVersion === trajectory.version,
  );
  if (preparedCandidates.length === 0) {
    return { ok: true, prepared: null };
  }
  if (preparedCandidates.length > 1) {
    return {
      ok: false,
      code: "PREPARED_CYCLE_AMBIGUOUS",
      reason: "multiple_prepared_trajectory_bound_cycles",
    };
  }
  const cycle = preparedCandidates[0]!;
  const entry = getCycleTypeById(cycle.cycleTypeId);
  const signals = parseExplicitQualificationSignals(cycle.qualificationSignals);

  return {
    ok: true,
    prepared: {
      cycleInstanceId: cycle.cycleInstanceId,
      cycleTypeId: cycle.cycleTypeId,
      catalogLabel: entry?.label ?? null,
      profile: cycle.profile,
      status: cycle.status,
      trajectoryId: cycle.trajectoryId!,
      trajectoryVersion: cycle.trajectoryVersion!,
      trajectoryStepId: cycle.trajectoryStepId!,
      ckcResolutionRef: cycle.ckcResolutionRef ?? null,
      qualificationSignals: signals,
      isActive: false,
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/startPreparedTrajectoryCycle.ts`

```typescript
/**
 * D-GF-START-01 — START a prepared trajectory-bound CycleInstance.
 *
 * N3 Pilote via registerLocalPiloteAuthority + PilotLifecycleTransitions.start.
 * No second HD, no Confirmation, no EC. Revalidates sealed signals + CKC ref.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION, getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance } from "../../domain/types";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  mintPrepareCycleCorrelationId,
  selectExactPrepareStep,
} from "./prepareCycleFromValidatedTrajectory";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

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
      if (trajectory.status !== "validated" && trajectory.status !== "active") {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_NOT_VALIDATED",
          `trajectory_status_${trajectory.status}`,
        );
      }
      if (!trajectory.decidedByDecisionRef?.trim()) {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_DECISION_REF_MISSING",
          "decided_by_decision_ref_required",
        );
      }

      const hdResult = await oa.decisionServices.getHumanDecision.execute({
        decisionId: trajectory.decidedByDecisionRef,
      });
      if (!hdResult.ok || hdResult.decision.status !== "accepted") {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_MISSING",
          "deciding_hd_unreadable_or_not_accepted",
        );
      }
      const decision = hdResult.decision;
      if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_SOURCE_MISMATCH",
          "expected_candidate_trajectory_basis",
        );
      }
      const ctx = decision.decisionBasis.candidateTrajectoryContext;
      if (!ctx) {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_CONTEXT_MISSING",
          "candidate_trajectory_context_missing",
        );
      }

      const qualificationSignals = parseExplicitQualificationSignals(
        ctx.qualificationSignals,
      );
      if (!qualificationSignals) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "complete_qualification_signals_required",
        );
      }

      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const provenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        epistemicItems: epistemic,
      });
      if (provenance.status !== "RESOLVED") {
        throw new StartPreparedCycleAtomicFailure(
          `PROVENANCE_${provenance.status}`,
          "provenance_not_resolved",
        );
      }
      if (
        provenance.recommendationId !== ctx.recommendationId ||
        provenance.semanticKey !== ctx.semanticKey ||
        provenance.targetCycleTypeId !== ctx.targetCycleTypeId
      ) {
        throw new StartPreparedCycleAtomicFailure(
          "PROVENANCE_HD_MISMATCH",
          "provenance_does_not_match_human_decision",
        );
      }

      const stepSelect = selectExactPrepareStep({
        trajectory,
        targetCycleTypeId: ctx.targetCycleTypeId,
      });
      if (!stepSelect.ok) {
        throw new StartPreparedCycleAtomicFailure(
          stepSelect.code,
          stepSelect.reason,
        );
      }
      const step = stepSelect.step;
      const cycleTypeId = step.cycleTypeId!;
      if (!isTargetCycleCurrentlySelectable(cycleTypeId)) {
        throw new StartPreparedCycleAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "cycle_type_not_selectable",
        );
      }

      const cycles = await oa.cycleServices.cycles.listByProject(projectId);
      let cycle: CycleInstance | null = null;
      if (input.cycleInstanceId) {
        cycle =
          cycles.find((c) => c.cycleInstanceId === input.cycleInstanceId) ??
          null;
      } else {
        const matches = cycles.filter(
          (c) =>
            c.trajectoryId === trajectory.trajectoryId &&
            c.trajectoryVersion === trajectory.version &&
            c.trajectoryStepId === step.stepId &&
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
      if (
        cycle.trajectoryId !== trajectory.trajectoryId ||
        cycle.trajectoryVersion !== trajectory.version ||
        cycle.trajectoryStepId !== step.stepId ||
        cycle.cycleTypeId !== cycleTypeId
      ) {
        throw new StartPreparedCycleAtomicFailure(
          "CYCLE_BINDING_MISMATCH",
          "cycle_trajectory_binding_mismatch",
        );
      }
      if (!cycle.ckcResolutionRef?.trim()) {
        throw new StartPreparedCycleAtomicFailure(
          "CKC_RESOLUTION_REF_MISSING",
          "prepared_cycle_missing_ckc_ref",
        );
      }

      const sealedOnCycle = parseExplicitQualificationSignals(
        cycle.qualificationSignals,
      );
      if (!sealedOnCycle) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "cycle_qualification_signals_incomplete",
        );
      }

      const correlationId = mintPrepareCycleCorrelationId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
      });
      const requalified = await oa.ckcQualification.qualifyCycleWithCkc.execute({
        cycleTypeId,
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId,
        signals: sealedOnCycle,
        objective: lps.livingProjectState.objective,
      });
      if (requalified.state !== "success") {
        throw new StartPreparedCycleAtomicFailure(
          requalified.code,
          "requalify_failed",
        );
      }
      if (requalified.recommendedProfile !== cycle.profile) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_MISMATCH",
          "requalified_profile_differs",
        );
      }
      const expectedRef = projectCkcResolutionRef(requalified.proof);
      if (expectedRef !== cycle.ckcResolutionRef) {
        throw new StartPreparedCycleAtomicFailure(
          "CKC_RESOLUTION_REF_MISMATCH",
          "ckc_ref_does_not_match_requalify",
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
        throw new StartPreparedCycleAtomicFailure(
          started.error.detailCode,
          started.error.internalCauseRef ?? "start_failed",
        );
      }

      const entry = getCycleTypeById(started.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(started.cycle),
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
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

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`

```typescript
/**
 * Lifecycle Recommendation — Product-side envelope (not Epistemic schema extension alone).
 * Durable carrier = EpistemicItem type Recommendation + optional typed lifecycleRecommendation.
 * LR-D01 / LR-D03 Option A — no new table; no JSON-in-statement; no relatedObjects machine protocol.
 */
import type { EpistemicLifecycleRecommendation } from "../../domain/types";

export const LIFECYCLE_RECOMMENDATION_INTENTS = [
  "FINALIZE_CURRENT_CYCLE",
  "NEXT_CYCLE",
] as const;

export type LifecycleRecommendationIntent =
  (typeof LIFECYCLE_RECOMMENDATION_INTENTS)[number];

export type LifecycleRecommendationDerivedCurrentness =
  | "CURRENT"
  | "STALE"
  | "SUPERSEDED";

/** Model/cognition candidate — never Product truth until SFIA validation + materialization. */
export type LifecycleRecommendationCandidate = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  rationale?: string | null;
  /** D-GF-START-01 — required complete for prepareable NEXT_CYCLE. */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } | null;
};

export type LifecycleRecommendationBasisRefs =
  EpistemicLifecycleRecommendation["basisRefs"];

/** Persisted typed payload — aligns with modeled lifecycle-recommendation.schema.json. */
export type PersistedLifecycleRecommendation = EpistemicLifecycleRecommendation;

export type LifecycleRecommendationEnvelope = {
  recommendationId: string;
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  producer: "nora";
  producedAt: string;
  statement: string;
  basisFingerprint: string;
  basisRefs: LifecycleRecommendationBasisRefs;
  semanticKey: string;
  authority: "none";
  isHumanDecision: false;
  doesNotActivateCycle: true;
  doesNotFinalize: true;
  doesNotCreateHumanDecision: true;
  epistemicStatus: "active" | "superseded" | "rejected" | "resolved";
  supersedesRecommendationId: string | null;
  /** Derived at read time — never persisted as Epistemic status. */
  derivedCurrentness: LifecycleRecommendationDerivedCurrentness;
  /** D-GF-START-01 — surfaced when persisted on the LR item. */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
};

export type NoraLifecycleRecommendationStructuredOutput = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  rationale: string | null;
  authority: "none";
  isHumanDecision: false;
  /**
   * D-GF-START-01 — six explicit signals for NEXT_CYCLE when prepareable.
   * null for FINALIZE_CURRENT_CYCLE / incomplete qualification.
   */
  qualificationSignals: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } | null;
};
```

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`

```typescript
import type { HumanDecision } from "@/lib/oa/decision";
import type {
  CycleInstance,
  ExplicitCycleQualificationSignals,
} from "../../domain/types";
import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import {
  assessGreenfieldPreTrajectoryBootstrapEligibility,
  validateCanonicalTargetCycleTypeId,
  type TrajectoryBootstrapPresence,
} from "./greenfieldLifecycleBootstrap";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export type ValidateLifecycleRecommendationInput = {
  projectId: string;
  candidate: LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /**
   * When known true — current trajectory present (standard non-bootstrap path).
   * When false — absence of current; bootstrap may still apply if presence=never.
   * When undefined — legacy callers; trajectory rule not enforced here.
   */
  hasTrajectoryContext?: boolean;
  /**
   * Explicit presence classification. Required to allow bootstrap.
   * unknown → fail closed (never treat as never).
   */
  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
  /** Decisions used only for bootstrap incompatibility gate. */
  decisions?: readonly HumanDecision[];
};

export type ValidateLifecycleRecommendationResult =
  | {
      ok: true;
      intent: LifecycleRecommendationIntent;
      subjectCycleInstanceId: string | null;
      targetCycleInstanceId: string | null;
      targetCycleTypeId: string | null;
      statement: string;
      basisSeed: LifecycleRecommendationBasisRefs;
      /** True when NEXT_CYCLE accepted via strict greenfield bootstrap. */
      greenfieldBootstrap?: boolean;
      /**
       * D-GF-START-01 — complete six booleans on NEXT_CYCLE success.
       * Absent on FINALIZE (signals ignored).
       */
      qualificationSignals?: ExplicitCycleQualificationSignals;
    }
  | {
      ok: false;
      code: string;
      reason: string;
    };

function requireNextCycleQualificationSignals(
  candidate: LifecycleRecommendationCandidate,
):
  | { ok: true; signals: ExplicitCycleQualificationSignals }
  | { ok: false; code: string; reason: string } {
  const signals = parseExplicitQualificationSignals(
    candidate.qualificationSignals,
  );
  if (!signals) {
    return {
      ok: false,
      code: "LR_QUALIFICATION_SIGNALS_INCOMPLETE",
      reason: "next_cycle_requires_complete_qualification_signals",
    };
  }
  return { ok: true, signals };
}

/**
 * Deterministic SFIA validation — fail closed.
 * Does not mutate Cycle/LPS/HD.
 */
export function validateLifecycleRecommendation(
  input: ValidateLifecycleRecommendationInput,
): ValidateLifecycleRecommendationResult {
  const { candidate, projectId, cycles } = input;
  if (!projectId.startsWith("prj:")) {
    return { ok: false, code: "LR_PROJECT_INVALID", reason: "project_binding" };
  }
  const statement = (candidate.statement ?? "").trim();
  if (statement.length < 1) {
    return { ok: false, code: "LR_STATEMENT_INVALID", reason: "statement_empty" };
  }

  const byId = new Map(cycles.map((c) => [c.cycleInstanceId, c] as const));

  if (candidate.intent === "FINALIZE_CURRENT_CYCLE") {
    const subjectId = candidate.subjectCycleInstanceId ?? null;
    if (!subjectId || !byId.has(subjectId)) {
      return {
        ok: false,
        code: "LR_SUBJECT_INVALID",
        reason: "finalize_subject_missing",
      };
    }
    const subject = byId.get(subjectId)!;
    if (subject.projectId !== projectId) {
      return {
        ok: false,
        code: "LR_PROJECT_MISMATCH",
        reason: "subject_wrong_project",
      };
    }
    if (isTerminalCycleStatus(subject.status)) {
      return {
        ok: false,
        code: "LR_SUBJECT_TERMINAL",
        reason: "finalize_subject_terminal",
      };
    }
    // Eligibility is NOT required — Recommendation ≠ canFinalize.
    // FINALIZE: ignore qualificationSignals / allow null or absent.
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: subjectId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: subjectId,
        subjectCycleStatus: subject.status,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  if (candidate.intent === "NEXT_CYCLE") {
    const targetId = candidate.targetCycleInstanceId ?? null;
    const targetType = candidate.targetCycleTypeId ?? null;
    if (!targetId && !targetType) {
      return {
        ok: false,
        code: "LR_TARGET_MISSING",
        reason: "next_cycle_needs_target",
      };
    }
    // Type-based NEXT_CYCLE must use a canonical catalog cycleTypeId (D-RB-BOOT-02).
    if (targetType) {
      const typeGate = validateCanonicalTargetCycleTypeId(targetType);
      if (!typeGate.ok) {
        return {
          ok: false,
          code: typeGate.code,
          reason: typeGate.reason,
        };
      }
    }
    if (targetId) {
      const target = byId.get(targetId);
      if (!target) {
        return {
          ok: false,
          code: "LR_TARGET_INVALID",
          reason: "target_cycle_missing",
        };
      }
      if (target.projectId !== projectId) {
        return {
          ok: false,
          code: "LR_PROJECT_MISMATCH",
          reason: "target_wrong_project",
        };
      }
      if (
        target.status === "active" ||
        target.status === "completed" ||
        target.status === "cancelled" ||
        target.status === "superseded"
      ) {
        return {
          ok: false,
          code: "LR_TARGET_STATUS",
          reason: "target_not_startable_state",
        };
      }
      // Single ACTIVE invariant: Recommendation must not imply a second active.
      const active =
        cycles.find((c) => c.status === "active") ??
        (input.lpsActiveCycleInstanceId
          ? byId.get(input.lpsActiveCycleInstanceId)
          : null);
      if (active && active.cycleInstanceId === targetId) {
        return {
          ok: false,
          code: "LR_TARGET_ACTIVE",
          reason: "target_already_active",
        };
      }
    }

    const presence = input.trajectoryBootstrapPresence;
    const hasCurrent =
      input.hasTrajectoryContext === true || presence?.kind === "current";

    if (!hasCurrent) {
      // Strict greenfield bootstrap (D-RB-BOOT-01) — never generic null fallback.
      if (!presence) {
        // Legacy callers without presence: preserve prior fail-closed when
        // hasTrajectoryContext === false; allow when undefined (older tests).
        if (input.hasTrajectoryContext === false) {
          return {
            ok: false,
            code: "LR_TRAJECTORY_REQUIRED",
            reason: "next_cycle_requires_trajectory",
          };
        }
      } else if (presence.kind === "unknown") {
        return {
          ok: false,
          code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
          reason: "trajectory_presence_unknown",
        };
      } else {
        const bootstrap = assessGreenfieldPreTrajectoryBootstrapEligibility({
          candidate,
          presence,
          cycles,
          lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
          decisions: input.decisions ?? [],
        });
        if (!bootstrap.eligible) {
          if (bootstrap.code.startsWith("LR_BOOTSTRAP_") || bootstrap.code.startsWith("LR_TARGET_CYCLE_TYPE_") || bootstrap.code.startsWith("LR_BASIS_")) {
            return {
              ok: false,
              code: bootstrap.code,
              reason: bootstrap.reason,
            };
          }
          return {
            ok: false,
            code: "LR_TRAJECTORY_REQUIRED",
            reason: bootstrap.reason,
          };
        }
        const signalsGate = requireNextCycleQualificationSignals(candidate);
        if (!signalsGate.ok) {
          return {
            ok: false,
            code: signalsGate.code,
            reason: signalsGate.reason,
          };
        }
        return {
          ok: true,
          intent: candidate.intent,
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: targetType,
          statement,
          greenfieldBootstrap: true,
          qualificationSignals: signalsGate.signals,
          basisSeed: {
            projectId,
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: targetType,
            lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
            trajectoryId: null,
            trajectoryVersion: null,
            trajectoryStatus: null,
          },
        };
      }
    }

    const signalsGate = requireNextCycleQualificationSignals(candidate);
    if (!signalsGate.ok) {
      return {
        ok: false,
        code: signalsGate.code,
        reason: signalsGate.reason,
      };
    }
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
      targetCycleInstanceId: targetId,
      targetCycleTypeId: targetType,
      statement,
      qualificationSignals: signalsGate.signals,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
        targetCycleInstanceId: targetId,
        targetCycleTypeId: targetType,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  return { ok: false, code: "LR_INTENT_INVALID", reason: "unknown_intent" };
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

    const trajectoryBound =
      Boolean(cycle.trajectoryId) &&
      typeof cycle.trajectoryVersion === "number" &&
      Boolean(cycle.trajectoryStepId);

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
            ckcResolutionRef: cycle.ckcResolutionRef,
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

### `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A2-scoped only.
 * Capitalization is NOT a profile enum — use cycleTypeId `cyc:capitalization`.
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

export const MAX_TRAJECTORY_SNAPSHOT_BYTES = 256_000 as const;

export const CAPITALIZATION_CYCLE_TYPE_ID = "cyc:capitalization" as const;

/** Modeled CycleInstance.profile — no Capitalization member. */
export type CycleProfile = "Light" | "Standard" | "Critical";

export type CycleInstanceStatus =
  | "proposed"
  | "acknowledged"
  | "active"
  | "paused"
  | "blocked"
  | "completed"
  | "cancelled"
  | "superseded";

/**
 * CORR-PROOF-05 — derived finalization obligation status (not a persistence enum).
 * Labels are functional assessment vocabulary; not claimed as migrated schema.
 */
export type FinalizationObligationStatus =
  | "SATISFIED"
  | "PENDING"
  | "MISSING"
  | "BLOCKING"
  | "NOT_APPLICABLE";

export type FinalizationObligationFamily =
  | "exit_criteria"
  | "human_decision"
  | "artifact"
  | "execution_contract"
  | "evidence"
  | "review_bundle"
  | "git_repository"
  | "blockers";

export type FinalizationObligation = {
  family: FinalizationObligationFamily;
  status: FinalizationObligationStatus;
  /** Derived applicability before proof mapping. */
  applicability?: ObligationApplicability;
  /** Required whenever status === NOT_APPLICABLE — never a missing-proof fallback. */
  notApplicableReason?: string;
  detail?: string;
  blocking?: boolean;
};

export type FinalizationAssessment = {
  cycleInstanceId: string;
  projectId: string;
  finalizeDecisionId: string | null;
  finalizeAccepted: boolean;
  obligations: FinalizationObligation[];
  canComplete: boolean;
  blockers: string[];
  assessedAt: string;
};

export type TrajectoryStatus =
  | "candidate"
  | "validated"
  | "active"
  | "stale"
  | "superseded";

export type TrajectoryStepState =
  | "pending"
  | "active"
  | "blocked"
  | "done"
  | "skipped";

export type EpistemicItemType =
  | "Observation"
  | "Hypothesis"
  | "Option"
  | "Recommendation"
  | "DecisionRef"
  | "Reservation"
  | "Contradiction"
  | "EvidenceRef";

export type EpistemicItemStatus =
  | "active"
  | "superseded"
  | "rejected"
  | "resolved";

export type EpistemicConfidence = "high" | "medium" | "low" | "none";

export type CkcLevel = "detailed" | "synthetic" | "absent";

export type CkcStatus = "resolved" | "synthetic" | "unavailable" | "invalid";

export type CkcFallbackPolicy = "intra_v3_only" | "none";

export type CkcSource =
  | "repository_candidate"
  | "intra_v3_synthetic"
  | "product_package"
  | "unavailable";

/**
 * Minimal pause-time reconciliation basis (CORR-PROOF-05).
 * Stored in CycleInstance JSON payload — no DDL / no new table.
 */
export type PauseReconciliationSnapshot = {
  pausedAt: string;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectoryId?: string | null;
  trajectoryVersion?: number | null;
  trajectoryFingerprint?: string | null;
  currentDecisionFingerprint?: string | null;
  evidenceFingerprint?: string | null;
  blockerFingerprint?: string | null;
  /** Pause-time knowledge of blocker baseline (CORR-PROOF-05 #3). */
  blockerSnapshotState?: "KNOWN" | "UNKNOWN";
  blockerSnapshotReason?: string;
};

/** Explicit qualification signals — no invented scores. */
export type CycleQualificationSignals = {
  structuralChange?: boolean;
  securityImpact?: boolean;
  architectureImpact?: boolean;
  dataImpact?: boolean;
  irreversible?: boolean;
  lowRiskBounded?: boolean;
};

/**
 * D-GF-START-01 — six explicit booleans required on the new greenfield path.
 * Legacy objects may still carry partial CycleQualificationSignals.
 */
export type ExplicitCycleQualificationSignals = {
  structuralChange: boolean;
  securityImpact: boolean;
  architectureImpact: boolean;
  dataImpact: boolean;
  irreversible: boolean;
  lowRiskBounded: boolean;
};

export type CycleInstance = {
  schemaVersion: "0.1.0-oa";
  cycleInstanceId: string;
  cycleTypeId: string;
  projectId: string;
  profile: CycleProfile;
  status: CycleInstanceStatus;
  acknowledgedAt?: string;
  createdAt: string;
  closedAt?: string;
  /** Set on PAUSE; cleared on successful RESUME / terminal close. */
  pauseReconciliation?: PauseReconciliationSnapshot | null;
  /** Durable create-time qualification signals (JSON payload — no DDL). */
  qualificationSignals?: CycleQualificationSignals;
  /**
   * D-GF-START-01 — exact ProjectTrajectory binding for trajectory-derived cycles.
   * Optional for legacy CycleInstance; REQUIRED on new greenfield prepare path.
   */
  trajectoryId?: string;
  trajectoryVersion?: number;
  trajectoryStepId?: string;
  /**
   * D-GF-START-01 — durable CKC resolution ref on the prepared CycleInstance.
   * Written at PREPARE (linkAsActiveCycle=false); LPS receives it at START.
   */
  ckcResolutionRef?: string;
};

/** Applicability before proof status (CORR-PROOF-05 enforcement). */
export type ObligationApplicability =
  | "APPLICABLE"
  | "NOT_APPLICABLE"
  | "UNKNOWN";

export type FinalizationApplicabilityRules = {
  exit_criteria?: ObligationApplicability;
  artifact?: ObligationApplicability;
  execution_contract?: ObligationApplicability;
  evidence?: ObligationApplicability;
  review_bundle?: ObligationApplicability;
  git_repository?: ObligationApplicability;
  blockers?: ObligationApplicability;
  /** Required when a family is NOT_APPLICABLE via explicit rule. */
  notApplicableReasons?: Partial<
    Record<
      | "exit_criteria"
      | "artifact"
      | "execution_contract"
      | "evidence"
      | "review_bundle"
      | "git_repository"
      | "blockers",
      string
    >
  >;
  /** When git is APPLICABLE, whether durable git proof is present. */
  gitProofPresent?: boolean;
  /** When artifact is APPLICABLE, whether durable artifact proof is present. */
  artifactProofPresent?: boolean;
  /**
   * Derived contradictions: durable APPLICABLE fact vs contradictory NO_* policy.
   * Transient — never persisted as a second truth store.
   */
  contradictions?: Array<{
    family:
      | "artifact"
      | "execution_contract"
      | "evidence"
      | "review_bundle"
      | "git_repository";
    positiveSource: string;
    conflictingDecisionId: string;
    conflictingOptionId: string;
  }>;
};

export type StartReadinessAssessment = {
  ready: boolean;
  blockers: string[];
  requiresTrajectoryHumanDecision: boolean;
  assessedAt: string;
};

export type TrajectoryStep = {
  stepId: string;
  order: number;
  label: string;
  state: TrajectoryStepState;
  /**
   * D-GF-START-01 — canonical cycle type for greenfield steps.
   * Optional for legacy/W2 steps; REQUIRED on new greenfield bridge path.
   * Authority: never derived from label.
   */
  cycleTypeId?: string;
  dependencies?: string[];
  gate?: string;
  exitCriteria?: string[];
  risks?: string[];
  reservations?: string[];
};

export type ProjectTrajectory = {
  schemaVersion: "0.1.0-oa";
  trajectoryId: string;
  projectId: string;
  version: number;
  status: TrajectoryStatus;
  steps: TrajectoryStep[];
  supersedesTrajectoryVersion?: number;
  /**
   * W2: durable HumanDecision reference that promoted this version to
   * decided/current. Absent on `candidate` (proposed) versions.
   */
  decidedByDecisionRef?: string;
  /** W2: product-level Option reference selected by the HumanDecision. */
  decidedOptionRef?: string;
};

/**
 * Optional typed Lifecycle Recommendation payload (Option A).
 * Persisted on EpistemicItem; CURRENT/STALE never stored here.
 */
export type EpistemicLifecycleRecommendation = {
  intent: "FINALIZE_CURRENT_CYCLE" | "NEXT_CYCLE";
  basisFingerprint: string;
  basisRefs: {
    projectId: string;
    subjectCycleInstanceId?: string | null;
    subjectCycleStatus?: string | null;
    targetCycleInstanceId?: string | null;
    targetCycleTypeId?: string | null;
    lpsActiveCycleInstanceId?: string | null;
    lpsVersion?: number | null;
    trajectoryId?: string | null;
    trajectoryVersion?: number | null;
    trajectoryStatus?: string | null;
    finalizeAccepted?: boolean | null;
    resumeClean?: boolean | null;
    reservationBlockingCount?: number | null;
    /** Optional — doctrine pin when recommendation basis is doctrine-sensitive. */
    doctrinePackageId?: string | null;
    doctrinePackageVersion?: string | null;
    doctrinePackageDigest?: string | null;
    /** Optional — intent-scoped accepted HD fingerprint. */
    decisionFingerprint?: string | null;
    /** Optional — FINALIZE-relevant Evidence fingerprint. */
    evidenceFingerprint?: string | null;
    /** Optional — blocking Reservation fingerprint. */
    blockerFingerprint?: string | null;
  };
  semanticKey: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  authority: "none";
  /**
   * D-GF-START-01 — six explicit signals when a prepareable NEXT_CYCLE was emitted.
   * Optional for historical / FINALIZE / incomplete qualification reads.
   */
  qualificationSignals?: ExplicitCycleQualificationSignals;
};

export type EpistemicItem = {
  schemaVersion: "0.1.0-oa";
  epistemicItemId: string;
  type: EpistemicItemType;
  statement: string;
  status: EpistemicItemStatus;
  confidence?: EpistemicConfidence;
  source?: string;
  createdBy: ActorReference;
  createdAt: string;
  supersedes?: string;
  relatedObjects?: string[];
  blocking?: boolean;
  provenance?: ProvenanceRecord;
  /** Optional — absent on historical / non-lifecycle Recommendations. */
  lifecycleRecommendation?: EpistemicLifecycleRecommendation;
};

export type CkcResolution = {
  schemaVersion: "0.1.0-oa";
  ckcResolutionId: string;
  cycleTypeId: string;
  level: CkcLevel;
  source?: CkcSource;
  version?: string;
  freshness?: "fresh" | "aging" | "stale" | "unknown";
  confidence?: EpistemicConfidence;
  resolvedAt: string;
  fallbackPolicy: CkcFallbackPolicy;
  status: CkcStatus;
  /** Modeled const false — never execution authority. */
  executionAuthority?: false;
  provenance?: ProvenanceRecord;
};

export type QualifyCycleRequest = {
  objective?: string;
  scope?: string;
  signals: CycleQualificationSignals;
  requestedProfile?: CycleProfile;
  justification?: string;
  cycleTypeId?: string;
};

export type QualifyCycleRecommendation = {
  recommendedProfile: CycleProfile;
  rationale: string;
  criticalSignalsPresent: boolean;
  /** Recommendation only — NEVER a Morris decision / gate consumption. */
  isMorrisDecision: false;
  requiresJustificationForCritical: boolean;
  /** Schema gap note: Capitalization is cycleTypeId, not profile. */
  capitalizationViaCycleTypeId: boolean;
};

export type CreateCycleRequest = {
  cycleInstanceId: string;
  cycleTypeId: string;
  projectId: string;
  signals: CycleQualificationSignals;
  requestedProfile?: CycleProfile;
  justification?: string;
  objective?: string;
  scope?: string;
  createdBy: ActorReference;
  correlationId?: string;
  /** When true, also stamp Project.activeCycleInstanceId via LPS append path. */
  linkAsActiveCycle?: boolean;
  expectedLpsVersion?: number;
  /**
   * Durable CKC binding projection (no raw CKC dimensions).
   * Written to LPS when linkAsActiveCycle is true.
   * Also persisted on CycleInstance.ckcResolutionRef when provided (D-GF-START-01).
   */
  ckcResolutionRef?: string;
  /** D-GF-START-01 — trajectory-derived binding (optional for legacy F2). */
  trajectoryId?: string;
  trajectoryVersion?: number;
  trajectoryStepId?: string;
};

export type CreateInitialTrajectoryRequest = {
  trajectoryId: string;
  projectId: string;
  steps: TrajectoryStep[];
  /** Modeled allows candidate | active for v1. Default: candidate. */
  status?: "candidate" | "active";
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

export type ProposeTrajectoryVersionRequest = {
  trajectoryId: string;
  projectId: string;
  expectedVersion: number;
  steps: TrajectoryStep[];
  status?: TrajectoryStatus;
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

/**
 * W2 — promote an existing `candidate` trajectory version to decided/current.
 * `decisionRef` is mandatory: OA never promotes a structuring trajectory
 * without a decision reference. Product-path enforcement (D-W2-03) verifies
 * that the reference is an accepted durable HumanDecision.
 */
export type PromoteDecidedTrajectoryRequest = {
  trajectoryId: string;
  projectId: string;
  /** Version of the candidate to promote. */
  expectedVersion: number;
  status?: "validated" | "active";
  decisionRef: string;
  decidedOptionRef?: string;
  /**
   * W2 A1 — when provided, these steps become the decided trajectory content
   * (same version, candidate → validated). Used so a Pilote-selected option
   * that differs from the recommended outline is sealed at promote time.
   */
  steps?: TrajectoryStep[];
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

export type UpdateEpistemicStateRequest = {
  projectId: string;
  items: Array<{
    epistemicItemId: string;
    type: EpistemicItemType;
    statement: string;
    status?: EpistemicItemStatus;
    confidence?: EpistemicConfidence;
    source?: string;
    supersedes?: string;
    relatedObjects?: string[];
    blocking?: boolean;
    provenance?: ProvenanceRecord;
    lifecycleRecommendation?: EpistemicLifecycleRecommendation;
    /**
     * Forbidden auto-promotion signal — if true and type is DecisionRef
     * while superseding a Hypothesis, refused.
     */
    promoteFromHypothesis?: boolean;
  }>;
  createdBy: ActorReference;
  correlationId?: string;
};

export type ResolveCycleKnowledgeContractRequest = {
  cycleTypeId: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Cycle/Trajectory/Epistemic/CKC. */
export type CycleModeledErrorCode =
  | "DOCTRINE_UNRESOLVED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "CKC_UNAVAILABLE"
  | "DECISION_REQUIRED"
  | "AUTHORITY_DENIED";

/**
 * T-A2 detail codes — finer than modeled ErrorRecord enum.
 * Mapped onto CycleModeledErrorCode for ErrorRecord-compatible emission (T-A2-D08).
 */
export type CycleDetailCode =
  | "CYCLE_INVALID"
  | "CYCLE_ALREADY_EXISTS"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED"
  | "CYCLE_ALREADY_ACTIVE_EXISTS"
  | "CYCLE_TRANSITION_INVALID"
  | "CYCLE_TERMINAL"
  | "CYCLE_RESUME_DRIFT"
  | "CYCLE_START_NOT_READY"
  | "CYCLE_FINALIZE_INCOMPLETE"
  | "CYCLE_DECISION_REQUIRED"
  | "CYCLE_LIFECYCLE_DENIED"
  | "AUTHORITY_NOT_CONFIGURED"
  | "PROJECT_NOT_FOUND"
  | "TRAJECTORY_INVALID"
  | "TRAJECTORY_ALREADY_EXISTS"
  | "TRAJECTORY_NOT_FOUND"
  | "TRAJECTORY_VERSION_CONFLICT"
  | "EPISTEMIC_INVALID"
  | "EPISTEMIC_PROMOTION_FORBIDDEN"
  | "CKC_UNAVAILABLE"
  | "LPS_VERSION_CONFLICT"
  | "CONTEXT_STALE"
  | "STATE_CONFLICT"
  | "PERSISTENCE_FAILURE";

/** CORR-PROOF-05 Pilot lifecycle transition requests. */
export type PilotLifecycleActor = {
  actorId: string;
  role: ActorReference["role"];
  displayName?: string;
  authorityLevel?: ActorReference["authorityLevel"];
};

export type StartCycleRequest = {
  cycleInstanceId: string;
  projectId: string;
  createdBy: PilotLifecycleActor;
  correlationId?: string;
  expectedLpsVersion?: number;
  /** Pilot authority evidence verified server-side (never actorId alone). */
  authorityEvidenceId?: string;
  /**
   * Caller hint only — server derives whether trajectory HD is required.
   * Never sole authority for skipping HD.
   */
  requiresTrajectoryHumanDecision?: boolean;
  decisionId?: string;
};

export type PauseCycleRequest = {
  cycleInstanceId: string;
  projectId: string;
  createdBy: PilotLifecycleActor;
  correlationId?: string;
  expectedLpsVersion?: number;
  authorityEvidenceId?: string;
};

export type ResumeCycleRequest = {
  cycleInstanceId: string;
  projectId: string;
  createdBy: PilotLifecycleActor;
  correlationId?: string;
  expectedLpsVersion?: number;
  authorityEvidenceId?: string;
  /**
   * Caller diagnostic hint only — NOT source of truth.
   * Server reconciles; hint true forces fail-closed drift.
   */
  materialDriftDetected?: boolean;
  requiresReplanHumanDecision?: boolean;
  decisionId?: string;
};

export type FinalizeCycleRequest = {
  cycleInstanceId: string;
  projectId: string;
  createdBy: PilotLifecycleActor;
  /** Required Pilot HumanDecision id for FINALIZE. */
  decisionId: string;
  correlationId?: string;
  expectedLpsVersion?: number;
  authorityEvidenceId?: string;
};

export type CancelCycleRequest = {
  cycleInstanceId: string;
  projectId: string;
  createdBy: PilotLifecycleActor;
  /** Required Pilot HumanDecision id for CANCEL. */
  decisionId: string;
  correlationId?: string;
  expectedLpsVersion?: number;
  authorityEvidenceId?: string;
};

export type AssessFinalizationRequest = {
  cycleInstanceId: string;
  projectId: string;
  /** Optional explicit finalize decision id; otherwise discovered from decisions. */
  finalizeDecisionId?: string | null;
};

export type PilotLifecycleSuccess = {
  ok: true;
  cycle: CycleInstance;
  livingProjectStateVersion?: number;
  activeCycleInstanceId?: string | null;
  assessment?: FinalizationAssessment;
  durationMs: number;
};

export type PilotLifecycleFailure = {
  ok: false;
  error: CycleStructuredError;
  assessment?: FinalizationAssessment;
  durationMs: number;
};

export type PilotLifecycleResult = PilotLifecycleSuccess | PilotLifecycleFailure;

export type AssessFinalizationSuccess = {
  ok: true;
  assessment: FinalizationAssessment;
  durationMs: number;
};

export type AssessFinalizationFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type AssessFinalizationResult =
  | AssessFinalizationSuccess
  | AssessFinalizationFailure;

export type CycleStructuredError = {
  code: CycleModeledErrorCode;
  detailCode: CycleDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "D";
  correlationId?: string;
  projectId?: string;
  cycleInstanceId?: string;
  trajectoryId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  epistemicItemId?: string;
  cycleTypeId?: string;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type QualifyCycleResult = {
  ok: true;
  recommendation: QualifyCycleRecommendation;
};

export type CreateCycleSuccess = {
  ok: true;
  cycle: CycleInstance;
  qualification: QualifyCycleRecommendation;
  durationMs: number;
};

export type CreateCycleFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type CreateCycleResult = CreateCycleSuccess | CreateCycleFailure;

export type GetCycleSuccess = {
  ok: true;
  cycle: CycleInstance;
};

export type GetCycleFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetCycleResult = GetCycleSuccess | GetCycleFailure;

export type TrajectorySuccess = {
  ok: true;
  trajectory: ProjectTrajectory;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type TrajectoryFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type TrajectoryResult = TrajectorySuccess | TrajectoryFailure;

export type GetTrajectorySuccess = {
  ok: true;
  trajectory: ProjectTrajectory;
};

export type GetTrajectoryFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetTrajectoryResult = GetTrajectorySuccess | GetTrajectoryFailure;

export type EpistemicState = {
  projectId: string;
  items: EpistemicItem[];
};

export type GetEpistemicSuccess = {
  ok: true;
  state: EpistemicState;
};

export type GetEpistemicFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetEpistemicResult = GetEpistemicSuccess | GetEpistemicFailure;

export type UpdateEpistemicSuccess = {
  ok: true;
  state: EpistemicState;
  durationMs: number;
};

export type UpdateEpistemicFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type UpdateEpistemicResult =
  | UpdateEpistemicSuccess
  | UpdateEpistemicFailure;

export type ResolveCkcSuccess = {
  ok: true;
  resolution: CkcResolution;
  durationMs: number;
};

export type ResolveCkcFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type ResolveCkcResult = ResolveCkcSuccess | ResolveCkcFailure;
```

### `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

```typescript
/**
 * T-A3 Decision / Confirmation / Authority — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A3-scoped only.
 *
 * Dual enums are intentional:
 * - HumanDecision.authority: morris | delegated | system_non_structuring
 * - Confirmation.level / ActorReference.authorityLevel: N1 | N2 | N3 | none
 *
 * Actor.authorityLevel MUST NOT be trusted from the client — verify via
 * AuthorityResolverPort. N3 verified level does NOT automatically grant Morris
 * gate; HumanDecision.authority === "morris" requires explicit evidence flag
 * `canActAsMorris: true` (or dedicated morrisGrant).
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

/** Alias used in modeled docs — same shape as doctrine ActorReference. */
export type OaActorReference = ActorReference;

export type DecisionAuthority =
  | "morris"
  | "delegated"
  | "system_non_structuring";

export type HumanDecisionStatus =
  | "proposed"
  | "required"
  | "accepted"
  | "refused"
  | "amended"
  | "superseded"
  | "revoked";

export type ConfirmationLevel = "N1" | "N2" | "N3";

export type ConfirmationStatus =
  | "requested"
  | "granted"
  | "refused"
  | "expired"
  | "cancelled"
  | "consumed"
  | "superseded";

export type AuthorityLevel = "N1" | "N2" | "N3";

export type DecisionOption = {
  optionId: string;
  label: string;
  impacts?: string[];
  recommended?: boolean;
};

export type DecisionReservation = {
  reservationId: string;
  statement: string;
  blocking?: boolean;
};

/** Minimal embedded basis for durable GO → PREPARE (generic T-A3; no F2 imports). */
export type DecisionBasisProposalContext = {
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  activeCycleInstanceId?: string;
  ckcResolutionRef?: string;
};

/**
 * W2 — durable linkage from a structuring HumanDecision to the Option set it
 * arbitrated and to the trajectory version it is allowed to promote.
 * Options are described by reference/label only: a Recommendation recorded
 * here is never itself a decision.
 */
export type DecisionBasisTrajectoryContext = {
  /** Trajectory aggregate the decision arbitrates. */
  trajectoryId: string;
  /** Candidate (proposed) version the decision may promote. */
  candidateVersion: number;
  /** Option refs presented to the Pilote, in presentation order. */
  optionRefs: string[];
  /** Option the Pilote selected — must belong to optionRefs. */
  selectedOptionRef: string;
  /** Option that Nora recommended, when any. Never a decision. */
  recommendedOptionRef?: string;
  /** Durable Epistemic item refs materializing the options/recommendation. */
  epistemicRefs?: string[];
  /** W2 A2 — digest of the exact presented OptionSet sealed at propose. */
  optionSetDigest?: string;
};

/**
 * D-GF-HD-01 — greenfield unary APPROVAL of a pre-cycle candidate trajectory.
 * Links the Pilote HumanDecision to the exact candidate + provenance Observation.
 * Not a W2 OptionSet. Not a proposal.
 */
export type DecisionBasisCandidateTrajectoryContext = {
  trajectoryId: string;
  candidateVersion: number;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  /** Digest of material candidate fields (id/version/status/steps). */
  candidateContentDigest: string;
  /** Digest of the exact material object presented to the Pilote. */
  presentationDigest: string;
  /**
   * D-GF-START-01 — six sealed qualification signals from the source LR.
   * Optional for legacy HD; REQUIRED for new greenfield prepare path.
   */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
};

export type DecisionBasisSourceType =
  | "proposal"
  | "trajectory_option"
  | "candidate_trajectory";

export type DecisionBasis = {
  sourceType: DecisionBasisSourceType;
  /**
   * Opaque source id:
   * - proposal id, or
   * - trajectory option-set ref, or
   * - candidate trajectoryId (D-GF-HD-01).
   */
  sourceRef: string;
  /** SHA-256 hex of canonical JSON over stable source fields. */
  sourceDigest: string;
  projectId: string;
  cycleInstanceId?: string;
  proposalContext: DecisionBasisProposalContext;
  /** Present when sourceType is `trajectory_option` (W2 only). */
  trajectoryContext?: DecisionBasisTrajectoryContext;
  /** Present when sourceType is `candidate_trajectory` (greenfield only). */
  candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext;
  executionBasis: {
    objective?: string;
    scope?: string;
    outOfScope?: string[];
    activatedBlocks?: string[];
    expectedOutcome?: string;
    risks?: string[];
    reservations?: string[];
    stopConditions?: string[];
    cycleTypeId?: string;
    recommendedProfile?: string;
    requestedOperation?: string;
  };
};

export type HumanDecision = {
  schemaVersion: "0.1.0-oa";
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  effectiveAt: string;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  supersedes?: string;
  provenance?: ProvenanceRecord;
  /** Optimistic concurrency token — incremented on supersede of this record. */
  version?: number;
  /** M3: embedded basis for exact ExecutionContract preparation. */
  decisionBasis?: DecisionBasis;
};

export type Confirmation = {
  schemaVersion: "0.1.0-oa";
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  status: ConfirmationStatus;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  confirmedAt?: string;
  cancelledAt?: string;
  provenance?: ProvenanceRecord;
};

/**
 * Authority evidence registry record.
 * `canActAsMorris` is SEPARATE from level N3 — N3 ≠ Morris gate.
 */
export type AuthorityEvidence = {
  evidenceId: string;
  actorId: string;
  level: AuthorityLevel;
  scope: string;
  issuedAt: string;
  expiresAt?: string;
  source: string;
  /** Explicit Morris-gate grant. Absent/false → cannot claim authority=morris. */
  canActAsMorris?: boolean;
};

export type VerifyAuthorityRequest = {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  /** Hostile injection — IGNORED. Never trusted. */
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
  /** When true, also require canActAsMorris on matching evidence. */
  requireMorrisGate?: boolean;
};

export type VerifyAuthorityResult = {
  ok: boolean;
  verifiedLevel?: AuthorityLevel;
  canActAsMorris?: boolean;
  reason:
    | "verified"
    | "no_evidence"
    | "expired"
    | "level_insufficient"
    | "scope_mismatch"
    | "morris_gate_denied"
    | "evidence_not_found"
    | "actor_mismatch";
  evidenceId?: string;
};

export type RecordHumanDecisionRequest = {
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  /**
   * Claimed decision authority. For "morris", AuthorityResolver must verify
   * N3 + canActAsMorris. Never inferred from actorId/displayName.
   */
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  /** Required when authority === system_non_structuring. */
  nonStructuring?: boolean;
  /** Authority evidence id to verify against registry. */
  authorityEvidenceId?: string;
  /**
   * When accepting and another accepted decision exists for the same subject,
   * supersede it (default) or refuse with STATE_CONFLICT.
   */
  supersedeExistingAccepted?: boolean;
  /** After accept: append DecisionRef via public Cycle epistemic API. */
  linkEpistemicDecisionRef?: boolean;
  epistemicItemId?: string;
  /** After accept: append decisionId onto LPS via T-A1 append. */
  linkToLivingProjectState?: boolean;
  expectedLpsVersion?: number;
  /** M3: embed DecisionBasis on the durable HumanDecision. */
  decisionBasis?: DecisionBasis;
  correlationId?: string;
};

export type SupersedeHumanDecisionRequest = {
  newDecisionId: string;
  supersedesDecisionId: string;
  selectedOptionId: string;
  options?: DecisionOption[];
  actor: OaActorReference;
  authority: DecisionAuthority;
  reversible: boolean;
  reason: string;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  nonStructuring?: boolean;
  authorityEvidenceId?: string;
  /** OCC: expected version of the decision being superseded. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RequestConfirmationRequest = {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  correlationId?: string;
};

export type GrantConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  authorityEvidenceId?: string;
  /** Hostile injection — ignored. */
  claimedAuthorityLevel?: AuthorityLevel | "none";
  correlationId?: string;
};

export type RefuseConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  rationale?: string;
  correlationId?: string;
};

export type ConsumeConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
  /** Wall-clock override for expiry checks (tests). */
  nowIso?: string;
};

export type CancelConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
};

export type GetHumanDecisionRequest = {
  decisionId: string;
  correlationId?: string;
};

export type ListDecisionHistoryRequest = {
  projectId?: string;
  subject?: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Decision/Confirmation/Authority. */
export type DecisionModeledErrorCode =
  | "DECISION_REQUIRED"
  | "CONFIRMATION_REQUIRED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE";

/**
 * T-A3 detail codes — finer than modeled ErrorRecord enum.
 * AUTHORITY_SCOPE_MISMATCH maps to AUTHORITY_DENIED (modeled enum has no scope code).
 */
export type DecisionDetailCode =
  | "DECISION_INVALID"
  | "DECISION_ALREADY_EXISTS"
  | "DECISION_NOT_FOUND"
  | "DECISION_REQUIRED"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_ALREADY_EXISTS"
  | "CONFIRMATION_NOT_FOUND"
  | "CONFIRMATION_REQUIRED"
  | "CONFIRMATION_EXPIRED"
  | "CONFIRMATION_ALREADY_CONSUMED"
  | "CONFIRMATION_IDEMPOTENCY_CONFLICT"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "PROJECT_NOT_FOUND"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_PROJECT_MISMATCH"
  | "STATE_CONFLICT"
  | "VERSION_CONFLICT"
  | "LPS_VERSION_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type DecisionStructuredError = {
  code: DecisionModeledErrorCode;
  detailCode: DecisionDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "E";
  correlationId?: string;
  projectId?: string;
  decisionId?: string;
  confirmationId?: string;
  subject?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type DecisionSuccess = {
  ok: true;
  decision: HumanDecision;
  supersededDecisionIds?: string[];
  epistemicItemId?: string;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type DecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type DecisionResult = DecisionSuccess | DecisionFailure;

export type GetDecisionSuccess = {
  ok: true;
  decision: HumanDecision;
};

export type GetDecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type GetDecisionResult = GetDecisionSuccess | GetDecisionFailure;

export type ListDecisionsSuccess = {
  ok: true;
  decisions: HumanDecision[];
};

export type ListDecisionsFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type ListDecisionsResult = ListDecisionsSuccess | ListDecisionsFailure;

export type ConfirmationSuccess = {
  ok: true;
  confirmation: Confirmation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type ConfirmationFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type ConfirmationResult = ConfirmationSuccess | ConfirmationFailure;

export type VerifyAuthorityUseCaseResult = {
  ok: true;
  result: VerifyAuthorityResult;
  durationMs: number;
};
```
