# SFIA Studio Review Pack — FULL (COMPLETENESS REGULARIZATION)

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 21:27:19 CEST |
| **Cycle ID** | `SFIA-STUDIO-GREENFIELD-LIFECYCLE-BOOTSTRAP-CORRECTIVE-01` |
| **Mode** | Review Pack / Handoff completeness regularization only |
| **Type** | 8 — Delivery · EVOL · CRITICAL |
| **Décisions Morris** | `D-RB-BOOT-01` · `D-RB-BOOT-02` · `D-RB-BOOT-03` |
| **Candidate Product** | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| **Parent** | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| **Product mutation this regularization** | **ZERO** — no Product commit, no Product file edit |
| **ZERO NEW REAL** | OUI |
| **Motif** | ChatGPT CR blocked by `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING` |
| **Verdict** | REVIEW HANDOFF COMPLETENESS REGULARIZED — READY FOR CHATGPT CRITICAL REVIEW |

---

## 0. Regularization statement

This pack **re-publishes** the Critical Review materials for the **unchanged** Product candidate `f70dc8ae9c25b237654a6db9ec44a875880afdde`.

- No Product code was modified during this regularization.
- No new Product commit was created.
- No REAL call was made.
- No Product branch push / PR.

The previous handoff summarized seams but did not embed enough exploitable Product content for an offline Critical Review. This pack embeds the **exact** `git diff e79f16ba467c227470328d7f723f1c2b53fdf2fb..f70dc8ae9c25b237654a6db9ec44a875880afdde` (and full file bodies for new files) for all **12** Product paths.

---

## 1. Local Git Truth (regularization)

| Check | Observed |
| --- | --- |
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| parent | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| dirty Product | NONE |
| dirty local | `.tmp-sfia-review/*` only |

```
f70dc8ae fix(sfia-studio): enable governed greenfield lifecycle bootstrap
A	projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
A	projects/sfia-studio/app/features/project-assistant/lifecycleRecommendationPiloteNotice.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
```

```
.../greenfieldLifecycleBootstrap.d0.test.ts        | 697 +++++++++++++++++++++
 .../hooks/useProductConversation.ts                |  19 +
 .../surfaces/ConversationSurface.tsx               |  20 +
 .../project-assistant/ProjectAssistantPanel.tsx    |  37 ++
 .../project-assistant/buildProjectSystemPrompt.ts  |   9 +-
 .../lifecycleRecommendationPiloteNotice.ts         |  18 +
 .../features/project-assistant/orchestrateTurn.ts  |  56 +-
 .../greenfieldLifecycleBootstrap.ts                | 208 ++++++
 .../application/lifecycleRecommendation/index.ts   |   1 +
 .../materializeFromProductTurn.ts                  |  16 +
 .../produceLifecycleRecommendation.ts              |   6 +
 .../validateLifecycleRecommendation.ts             | 104 ++-
 12 files changed, 1166 insertions(+), 25 deletions(-)
```

---

## 2. Functional summary (unchanged candidate)

### D-RB-BOOT-01 — strict pre-trajectory bootstrap
Genuine fresh Project (`trajectory presence = never`) may materialize first `NEXT_CYCLE` LR without creating ProjectTrajectory / CycleInstance / HD / START. Not a generic `trajectory == null` allow.

### D-RB-BOOT-02 — canonical cycleTypeId
`targetCycleTypeId` validated via `getCycleTypeById` + `lifecycleStatus === "active"`. Human label `"Cadrage"` fails. Prompt lists catalog IDs via `listCycleTypes()`.

### D-RB-BOOT-03 — Pilote-safe failure surface
Business-first notice; technical codes remain in diagnostics. RESERVE-RB-UX-01 closed at deterministic scope.

### Validation (already proven on candidate; not re-run as Product mutation)
- BAR-BOOT 18/18 PASS
- Focused RB+LR+presentation+BOOT 85/85 PASS
- Full Vitest 3347 passed / 135 skipped
- typecheck / lint / build / git diff --check PASS
- ZERO NEW REAL

### Next capability (OUT OF SCOPE)
Prepare non-authoritative candidate ProjectTrajectory from CURRENT Recommendation before Pilot HD.

### Reserves
- RESERVE-QA-MOCK-01 OPEN
- RESERVE-RB-UX-01 CLOSED (deterministic)
- LIVE materialization NOT PROVEN
- R2 OPEN
- runtime v3 NON ADOPTED
- **NEW for CR:** Trajectory history probe ceiling 64 — see §4

---

## 3. Modified Product files checklist (12/12)

| # | Path | Representation |
| --- | --- | --- |
| 1 | `__tests__/.../greenfieldLifecycleBootstrap.d0.test.ts` | FULL file @ f70 |
| 2 | `useProductConversation.ts` | FULL diff |
| 3 | `ConversationSurface.tsx` | FULL diff |
| 4 | `ProjectAssistantPanel.tsx` | FULL diff |
| 5 | `buildProjectSystemPrompt.ts` | FULL diff |
| 6 | `lifecycleRecommendationPiloteNotice.ts` | FULL file @ f70 |
| 7 | `orchestrateTurn.ts` | FULL diff |
| 8 | `greenfieldLifecycleBootstrap.ts` | FULL file @ f70 |
| 9 | `lifecycleRecommendation/index.ts` | FULL diff |
| 10 | `materializeFromProductTurn.ts` | FULL diff |
| 11 | `produceLifecycleRecommendation.ts` | FULL diff |
| 12 | `validateLifecycleRecommendation.ts` | FULL diff |

---

## 4. Trajectory history probe — review context

**Source in candidate:** `TRAJECTORY_HISTORY_PROBE_MAX_VERSION = 64` in `greenfieldLifecycleBootstrap.ts`.

**Why 64 was chosen (implementation rationale, not proven domain law):**
- Existing `TrajectoryRepositoryPort` has no `listByProject`.
- Detection of “any historical/candidate row” reuses `findByProjectAndVersion(projectId, version)` sequentially from 1.
- `proposeTrajectoryVersion.resolveTrajectoryLineageHead` also probes forward version-by-version from a known head — sequential versions are the local operational model.
- 64 is a defensive scan ceiling to avoid unbounded awaits on a fresh Project expected to have 0 rows.

**What repo invariants exist:**
- `MAX_TRAJECTORY_SNAPSHOT_BYTES` (size of a snapshot) — **not** a max version count.
- `assertTrajectorySize` — bytes, not version ceiling.
- No catalogued/domain constant for “max trajectory version = 64” was found under `lib/oa/cycle`.

**Behavior if a trajectory version >64 exists while versions 1..64 are empty:**
- Probe would return `kind: "never"` incorrectly (false greenfield).
- That state is pathological under the sequential lineage model (createInitial starts at v1; propose increments head+1). Still, the ceiling is **not** an enforced Product invariant.

**Classification for Critical Review:**
- **Hypothesis / implementation policy**, not an invariant prouvé.
- Recommend treating as **RESERVE-BOOT-PROBE-01** for Critical Review: either accept as fail-closed-enough for greenfield practical paths, or require a follow-up that uses a true project-scoped existence query without inventing a second store (if such a read seam is later authorized).

**No Product change in this regularization** to address this point.

---

## 5. EXPLOITABLE MODIFIED CONTENT — exact candidate f70dc8ae

Content below is copied from `git show f70dc8ae:<path>` (new files) or `git diff e79f16ba..f70dc8ae -- <path>` (modified files). SHA verified at pack generation: `f70dc8ae9c25b237654a6db9ec44a875880afdde`.


### FILE 01/12 — `projects/sfia-studio/app/__tests__/project-assistant/greenfieldLifecycleBootstrap.d0.test.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL FILE**

```ts
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
} from "@/lib/oa/cycle";
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
});
```

### FILE 02/12 — `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index b194f670..992e0037 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -31,6 +31,7 @@ import {
   isBoundedRunningAttemptRefreshable,
   type RecommendationFreshness,
 } from "@/features/project-assistant/presentationLabels";
+import { lifecycleRecommendationMaterializeFailurePiloteNotice } from "@/features/project-assistant/lifecycleRecommendationPiloteNotice";
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";

 export type ProductMessage = {
@@ -101,6 +102,12 @@ export function useProductConversation({
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
+  const [lrMaterializeNotice, setLrMaterializeNotice] = useState<string | null>(
+    null,
+  );
+  const [lrMaterializeCode, setLrMaterializeCode] = useState<string | null>(
+    null,
+  );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
   const [reservesText, setReservesText] = useState("");
@@ -279,6 +286,16 @@ export function useProductConversation({

       setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
+      setLrMaterializeNotice(
+        lifecycleRecommendationMaterializeFailurePiloteNotice({
+          recommendationAttempted:
+            result.lifecycleRecommendationMaterialized === false &&
+            Boolean(result.lifecycleRecommendationCode),
+          materialized: result.lifecycleRecommendationMaterialized,
+          code: result.lifecycleRecommendationCode,
+        }),
+      );
+      setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
         setUiState("SOURCE_LOOKUP");
@@ -564,6 +581,8 @@ export function useProductConversation({
     error,
     modeLabel,
     ephemeralNotice,
+    lrMaterializeNotice,
+    lrMaterializeCode,
     f2,
     activeProposal,
     reservesText,
```

### FILE 03/12 — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 7dfcb6ab..6a2811d3 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -81,6 +81,8 @@ export function ConversationSurface({
     error,
     modeLabel,
     ephemeralNotice,
+    lrMaterializeNotice,
+    lrMaterializeCode,
     f2,
     activeProposal,
     reservesText,
@@ -1222,6 +1224,16 @@ export function ConversationSurface({
         </div>
       ) : null}

+      {lrMaterializeNotice ? (
+        <p
+          className={styles.cardNote}
+          data-testid="project-assistant-lr-materialize-notice"
+          role="status"
+        >
+          {lrMaterializeNotice}
+        </p>
+      ) : null}
+
       <details className={styles.detailsFlat}>
         <summary>Sources et limites</summary>
         <p className={styles.cardNote} data-testid="project-assistant-scope">
@@ -1229,6 +1241,14 @@ export function ConversationSurface({
           confirmation · tentative · recommandation. Aucune exécution
           automatique. {ephemeralNotice}
         </p>
+        {lrMaterializeCode ? (
+          <p
+            className={styles.cardNote}
+            data-testid="project-assistant-lr-materialize-code"
+          >
+            Code technique (diagnostic) : {lrMaterializeCode}
+          </p>
+        ) : null}
         <section
           className={styles.sources}
           aria-label="Sources consultées"
```

### FILE 04/12 — `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 640cb16b..a0e4378e 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -38,6 +38,9 @@ import {
   executionSemanticUserLabel,
   isBoundedRunningAttemptRefreshable,
 } from "./presentationLabels";
+import {
+  lifecycleRecommendationMaterializeFailurePiloteNotice,
+} from "./lifecycleRecommendationPiloteNotice";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -118,6 +121,12 @@ export function ProjectAssistantPanel({
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
+  const [lrMaterializeNotice, setLrMaterializeNotice] = useState<string | null>(
+    null,
+  );
+  const [lrMaterializeCode, setLrMaterializeCode] = useState<string | null>(
+    null,
+  );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [mw3Surface, setMw3Surface] = useState<Mw3CognitiveSurfaceDto | null>(
     null,
@@ -388,6 +397,16 @@ export function ProjectAssistantPanel({

       setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
+      setLrMaterializeNotice(
+        lifecycleRecommendationMaterializeFailurePiloteNotice({
+          recommendationAttempted:
+            result.lifecycleRecommendationMaterialized === false &&
+            Boolean(result.lifecycleRecommendationCode),
+          materialized: result.lifecycleRecommendationMaterialized,
+          code: result.lifecycleRecommendationCode,
+        }),
+      );
+      setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
       setMw3Surface(result.mw3 ?? null);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
@@ -742,8 +761,26 @@ export function ProjectAssistantPanel({
           confirmation · tentative · recommandation. Aucune exécution
           automatique. {ephemeralNotice}
         </p>
+        {lrMaterializeCode ? (
+          <p
+            className={styles.ephemeral}
+            data-testid="project-assistant-lr-materialize-code"
+          >
+            Code technique (diagnostic) : {lrMaterializeCode}
+          </p>
+        ) : null}
       </details>

+      {lrMaterializeNotice ? (
+        <p
+          className={styles.ephemeral}
+          data-testid="project-assistant-lr-materialize-notice"
+          role="status"
+        >
+          {lrMaterializeNotice}
+        </p>
+      ) : null}
+
       <div
         ref={listRef}
         className={styles.messages}
```

### FILE 05/12 — `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index 73cf3333..e5921984 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -4,7 +4,7 @@ import {
   buildStudioCognitivePromptSections,
   type StudioCognitiveContext,
 } from "./f2/studioCognitiveContext";
-
+import { listCycleTypes } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
 /**
  * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
  * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
@@ -128,6 +128,13 @@ export function buildProjectSystemPrompt(
     "états métier ou signaux d'urgence appartenant au cycle candidat.",
     "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
     "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
+    "targetCycleTypeId DOIT être un identifiant catalogue Studio exact (ex. cyc:framing pour le label « Cadrage »).",
+    "Jamais un label humain seul (« Cadrage », « Delivery ») ni un id inventé.",
+    "Identifiants catalogue actifs : " +
+      listCycleTypes()
+        .map((e) => `${e.cycleTypeId} (« ${e.label} »)`)
+        .join(", ") +
+      ".",
     "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
     "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
     "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
```

### FILE 06/12 — `projects/sfia-studio/app/features/project-assistant/lifecycleRecommendationPiloteNotice.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL FILE**

```ts
/**
 * Pilote-facing Lifecycle Recommendation materialization notices (D-RB-BOOT-03).
 * Client-safe — no OA / Node imports.
 */

export const LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE =
  "La prochaine étape a été recommandée, mais Studio n'a pas pu l'enregistrer. Aucun cycle n'a été ouvert." as const;

export function lifecycleRecommendationMaterializeFailurePiloteNotice(input: {
  recommendationAttempted: boolean;
  materialized: boolean | null | undefined;
  code: string | null | undefined;
}): string | null {
  if (!input.recommendationAttempted) return null;
  if (input.materialized === true) return null;
  if (!input.code) return null;
  return LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE;
}
```

### FILE 07/12 — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 0d6ef3af..407484f1 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -26,6 +26,10 @@ import {
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
 import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
+import {
+  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
+  lifecycleRecommendationMaterializeFailurePiloteNotice,
+} from "./lifecycleRecommendationPiloteNotice";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
@@ -45,6 +49,7 @@ import type {
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";
+import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";

 const MAX_HISTORY_MESSAGES = 20;

@@ -60,14 +65,18 @@ function buildEphemeralNotice(
     | "stale_invalidated",
   stalePriorInvalidated?: boolean,
   cognitiveStopNotice?: string | null,
+  lifecycleMaterializeNotice?: string | null,
 ): string {
   const base = memoryBPiloteNotice(memoryBAvailability);
   const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
     stalePriorInvalidated,
   });
-  const parts = [cognitiveStopNotice, compaction, base].filter(
-    (p): p is string => typeof p === "string" && p.trim().length > 0,
-  );
+  const parts = [
+    lifecycleMaterializeNotice,
+    cognitiveStopNotice,
+    compaction,
+    base,
+  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0);
   return parts.join(" ");
 }

@@ -328,8 +337,7 @@ export async function orchestrateProjectAssistantTurn(input: {
           ok: false,
           status: "validation_error",
           code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
-          message:
-            "Contradiction de frontière de routage : une Recommendation lifecycle était requise (EMIT) mais absente. Aucune Recommendation n'a été inventée côté serveur.",
+          message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
           mode: modeResolution.mode,
           retryable: false,
         };
@@ -362,14 +370,17 @@ export async function orchestrateProjectAssistantTurn(input: {
           }

           let trajectory = null;
-          try {
-            const traj = await oa.cycleServices.getCurrentTrajectory.execute({
-              projectId: project.projectId,
-            });
-            trajectory = traj.ok ? traj.trajectory : null;
-          } catch {
+          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
+            oa.cycleServices.trajectories,
+            project.projectId,
+          );
+          if (trajectoryBootstrapPresence.kind === "unknown") {
             failedMaterialDimensions.add("trajectory");
             trajectory = null;
+          } else if (trajectoryBootstrapPresence.kind === "current") {
+            trajectory = trajectoryBootstrapPresence.trajectory;
+          } else {
+            trajectory = null;
           }

           let decisions: Awaited<
@@ -431,6 +442,7 @@ export async function orchestrateProjectAssistantTurn(input: {
                 doctrinePackageVersion: doctrinePin?.version ?? null,
                 doctrinePackageDigest: doctrinePin?.digest ?? null,
                 trajectory,
+                trajectoryBootstrapPresence,
                 decisions,
                 evidence,
                 epistemicItems,
@@ -524,6 +536,21 @@ export async function orchestrateProjectAssistantTurn(input: {
         allowsSilentSuccess: false,
       },
     );
+    const lrMaterializeNotice =
+      lifecycleRecommendationMaterializeFailurePiloteNotice({
+        recommendationAttempted:
+          lifecycleRecommendationMaterialized === false &&
+          Boolean(lifecycleRecommendationCode),
+        materialized: lifecycleRecommendationMaterialized,
+        code: lifecycleRecommendationCode,
+      });
+    const ephemeralNotice = buildEphemeralNotice(
+      turn.memoryBAvailability,
+      turn.memoryBCompactionState,
+      turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
+      stopNotice,
+      lrMaterializeNotice,
+    );
     const status =
       turn.cognitiveStopDecision?.cognitiveStop === true
         ? ("cognitive_stop" as const)
@@ -541,12 +568,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       sources,
       toolEvents,
       project,
-      ephemeralNotice: buildEphemeralNotice(
-        turn.memoryBAvailability,
-        turn.memoryBCompactionState,
-        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
-        stopNotice,
-      ),
+      ephemeralNotice,
       cognitiveRuntime: turn.cognitiveRuntime,
       sessionId: turn.sessionId,
       memoryBAvailability: turn.memoryBAvailability,
```

### FILE 08/12 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL FILE**

```ts
/**
 * Strict pre-trajectory bootstrap for the first NEXT_CYCLE Lifecycle Recommendation
 * on a genuine fresh Project (D-RB-BOOT-01).
 *
 * Never treats reader failure as absence. Never auto-creates ProjectTrajectory.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { isCurrentHumanDecisionStatus } from "../assessFinalization";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { LifecycleRecommendationCandidate } from "./types";

/** Max version probe — lineages are sequential; avoids unbounded scans. */
export const TRAJECTORY_HISTORY_PROBE_MAX_VERSION = 64 as const;

export type TrajectoryBootstrapPresenceKind =
  | "current"
  | "never"
  | "history_without_current"
  | "unknown";

export type TrajectoryBootstrapPresence =
  | { kind: "current"; trajectory: ProjectTrajectory }
  | { kind: "never" }
  | { kind: "history_without_current" }
  | { kind: "unknown"; reason: string };

export type GreenfieldBootstrapEligibilityResult =
  | { eligible: true }
  | { eligible: false; code: string; reason: string };

/**
 * Pure classification from already-resolved reads.
 * Callers must pass unknown when any required reader threw / failed.
 */
export function classifyTrajectoryBootstrapPresence(input: {
  readerFailed: boolean;
  current: ProjectTrajectory | null;
  /** True when any historical/candidate row exists for the project. */
  anyVersionExists: boolean;
}): TrajectoryBootstrapPresence {
  if (input.readerFailed) {
    return { kind: "unknown", reason: "trajectory_reader_failed" };
  }
  if (input.current) {
    return { kind: "current", trajectory: input.current };
  }
  if (input.anyVersionExists) {
    return { kind: "history_without_current" };
  }
  return { kind: "never" };
}

/**
 * Resolve presence using existing TrajectoryRepositoryPort only.
 * findCurrentByProjectId + findByProjectAndVersion — no new store / list API.
 */
export async function resolveTrajectoryBootstrapPresence(
  trajectories: TrajectoryRepositoryPort,
  projectId: string,
): Promise<TrajectoryBootstrapPresence> {
  try {
    const current = await trajectories.findCurrentByProjectId(projectId);
    if (current) {
      return { kind: "current", trajectory: current };
    }
    let anyVersionExists = false;
    for (let version = 1; version <= TRAJECTORY_HISTORY_PROBE_MAX_VERSION; version += 1) {
      const row = await trajectories.findByProjectAndVersion(projectId, version);
      if (row) {
        anyVersionExists = true;
        break;
      }
    }
    return classifyTrajectoryBootstrapPresence({
      readerFailed: false,
      current: null,
      anyVersionExists,
    });
  } catch (error) {
    return {
      kind: "unknown",
      reason:
        error instanceof Error ? error.message : "trajectory_presence_unresolved",
    };
  }
}

/** Canonical catalog gate for targetCycleTypeId (D-RB-BOOT-02). */
export function validateCanonicalTargetCycleTypeId(
  targetCycleTypeId: string | null,
): { ok: true; cycleTypeId: string } | { ok: false; code: string; reason: string } {
  if (!targetCycleTypeId || targetCycleTypeId.trim().length < 1) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_MISSING",
      reason: "target_cycle_type_required_for_type_based_next",
    };
  }
  const entry = getCycleTypeById(targetCycleTypeId);
  if (!entry) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_UNKNOWN",
      reason: "target_cycle_type_not_in_catalog",
    };
  }
  if (entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return { ok: true, cycleTypeId: entry.cycleTypeId };
}

/**
 * Strict bootstrap eligibility — first NEXT_CYCLE on a Project that never had
 * a ProjectTrajectory. Fail closed on unknown / history / cycles / HD / ids.
 */
export function assessGreenfieldPreTrajectoryBootstrapEligibility(input: {
  candidate: LifecycleRecommendationCandidate;
  presence: TrajectoryBootstrapPresence;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  decisions: readonly HumanDecision[];
}): GreenfieldBootstrapEligibilityResult {
  if (input.candidate.intent !== "NEXT_CYCLE") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_INTENT",
      reason: "bootstrap_next_cycle_only",
    };
  }
  if (input.presence.kind === "unknown") {
    return {
      eligible: false,
      code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
      reason: "trajectory_presence_unknown",
    };
  }
  if (input.presence.kind === "current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_NOT_APPLICABLE",
      reason: "current_trajectory_present",
    };
  }
  if (input.presence.kind === "history_without_current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HISTORY_PRESENT",
      reason: "prior_or_candidate_trajectory_exists",
    };
  }
  // presence.kind === "never"
  if (input.cycles.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_CYCLE_PRESENT",
      reason: "cycle_instance_exists",
    };
  }
  if (input.lpsActiveCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_ACTIVE_CYCLE",
      reason: "active_cycle_present",
    };
  }
  if (input.candidate.subjectCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_SUBJECT_FORBIDDEN",
      reason: "subject_cycle_not_allowed_in_bootstrap",
    };
  }
  if (input.candidate.targetCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_TARGET_INSTANCE_FORBIDDEN",
      reason: "target_cycle_instance_not_allowed_in_bootstrap",
    };
  }
  const typeGate = validateCanonicalTargetCycleTypeId(
    input.candidate.targetCycleTypeId ?? null,
  );
  if (!typeGate.ok) {
    return {
      eligible: false,
      code: typeGate.code,
      reason: typeGate.reason,
    };
  }
  const currentHd = input.decisions.filter((d) =>
    isCurrentHumanDecisionStatus(d.status),
  );
  if (currentHd.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HD_PRESENT",
      reason: "current_human_decision_incompatible_with_bootstrap",
    };
  }
  return { eligible: true };
}
```

### FILE 09/12 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
index 428dd234..b96fa119 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
@@ -8,3 +8,4 @@ export * from "./produceLifecycleRecommendation";
 export * from "./materializeFromProductTurn";
 export * from "./materialReaderContract";
 export * from "./noraActor";
+export * from "./greenfieldLifecycleBootstrap";
```

### FILE 10/12 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
index f2914e4b..f8f707de 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
@@ -31,6 +31,7 @@ import {
   materialBasisUnavailableCode,
   type LifecycleRecommendationMaterialDimension,
 } from "./materialReaderContract";
+import type { TrajectoryBootstrapPresence } from "./greenfieldLifecycleBootstrap";

 export type LifecycleRecommendationMaterialFacts = {
   cycles: readonly CycleInstance[];
@@ -40,6 +41,11 @@ export type LifecycleRecommendationMaterialFacts = {
   doctrinePackageVersion?: string | null;
   doctrinePackageDigest?: string | null;
   trajectory: ProjectTrajectory | null;
+  /**
+   * Explicit trajectory presence for greenfield bootstrap (D-RB-BOOT-01).
+   * UNKNOWN must never be coerced to never/absence.
+   */
+  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
   decisions: readonly HumanDecision[];
   evidence: readonly Evidence[];
   epistemicItems: readonly EpistemicItem[];
@@ -202,6 +208,14 @@ export async function materializeLifecycleRecommendationFromStructuredOutput(inp
     blockingReservationStatements: blockers.statements,
   });

+  const presence =
+    input.facts.trajectoryBootstrapPresence ??
+    (input.facts.trajectory
+      ? ({ kind: "current", trajectory: input.facts.trajectory } as const)
+      : failed.has("trajectory")
+        ? ({ kind: "unknown", reason: "trajectory_dimension_failed" } as const)
+        : undefined);
+
   const materialization = await produceLifecycleRecommendation({
     updateEpistemicState: input.updateEpistemicState,
     projectId: input.projectId,
@@ -213,6 +227,8 @@ export async function materializeLifecycleRecommendationFromStructuredOutput(inp
     createdBy: input.createdBy,
     existingItems: input.facts.epistemicItems,
     hasTrajectoryContext: Boolean(input.facts.trajectory),
+    trajectoryBootstrapPresence: presence,
+    decisions: input.facts.decisions,
     correlationId: input.correlationId,
   });
```

### FILE 11/12 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
index 27411bd9..ab159309 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
@@ -1,3 +1,4 @@
+import type { HumanDecision } from "@/lib/oa/decision";
 import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
 import type { CycleInstance } from "../../domain/types";
 import type { UpdateEpistemicState } from "../updateEpistemicState";
@@ -15,6 +16,7 @@ import type {
 } from "./types";
 import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
 import { deriveLifecycleRecommendationCurrentness } from "./currentness";
+import type { TrajectoryBootstrapPresence } from "./greenfieldLifecycleBootstrap";

 export type ProduceLifecycleRecommendationInput = {
   updateEpistemicState: UpdateEpistemicState;
@@ -33,6 +35,8 @@ export type ProduceLifecycleRecommendationInput = {
   createdBy: EpistemicItem["createdBy"];
   existingItems: readonly EpistemicItem[];
   hasTrajectoryContext?: boolean;
+  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
+  decisions?: readonly HumanDecision[];
   provenance?: ProvenanceRecord;
   correlationId?: string;
 };
@@ -94,6 +98,8 @@ export async function produceLifecycleRecommendation(
     cycles: input.cycles,
     lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
     hasTrajectoryContext: input.hasTrajectoryContext,
+    trajectoryBootstrapPresence: input.trajectoryBootstrapPresence,
+    decisions: input.decisions,
   });
   if (!validated.ok) {
     return { ok: false, code: validated.code, reason: validated.reason };
```

### FILE 12/12 — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`

- Candidate: `f70dc8ae9c25b237654a6db9ec44a875880afdde`
- Representation: **FULL UNIFIED DIFF**

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
index 5d83c63f..214327e9 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
@@ -1,3 +1,4 @@
+import type { HumanDecision } from "@/lib/oa/decision";
 import type { CycleInstance } from "../../domain/types";
 import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
 import type {
@@ -5,14 +6,30 @@ import type {
   LifecycleRecommendationCandidate,
   LifecycleRecommendationIntent,
 } from "./types";
+import {
+  assessGreenfieldPreTrajectoryBootstrapEligibility,
+  validateCanonicalTargetCycleTypeId,
+  type TrajectoryBootstrapPresence,
+} from "./greenfieldLifecycleBootstrap";

 export type ValidateLifecycleRecommendationInput = {
   projectId: string;
   candidate: LifecycleRecommendationCandidate;
   cycles: readonly CycleInstance[];
   lpsActiveCycleInstanceId: string | null | undefined;
-  /** When known — trajectory must be trajectory-aware for NEXT_CYCLE. */
+  /**
+   * When known true — current trajectory present (standard non-bootstrap path).
+   * When false — absence of current; bootstrap may still apply if presence=never.
+   * When undefined — legacy callers; trajectory rule not enforced here.
+   */
   hasTrajectoryContext?: boolean;
+  /**
+   * Explicit presence classification. Required to allow bootstrap.
+   * unknown → fail closed (never treat as never).
+   */
+  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
+  /** Decisions used only for bootstrap incompatibility gate. */
+  decisions?: readonly HumanDecision[];
 };

 export type ValidateLifecycleRecommendationResult =
@@ -24,6 +41,8 @@ export type ValidateLifecycleRecommendationResult =
       targetCycleTypeId: string | null;
       statement: string;
       basisSeed: LifecycleRecommendationBasisRefs;
+      /** True when NEXT_CYCLE accepted via strict greenfield bootstrap. */
+      greenfieldBootstrap?: boolean;
     }
   | {
       ok: false;
@@ -100,6 +119,17 @@ export function validateLifecycleRecommendation(
         reason: "next_cycle_needs_target",
       };
     }
+    // Type-based NEXT_CYCLE must use a canonical catalog cycleTypeId (D-RB-BOOT-02).
+    if (targetType) {
+      const typeGate = validateCanonicalTargetCycleTypeId(targetType);
+      if (!typeGate.ok) {
+        return {
+          ok: false,
+          code: typeGate.code,
+          reason: typeGate.reason,
+        };
+      }
+    }
     if (targetId) {
       const target = byId.get(targetId);
       if (!target) {
@@ -142,13 +172,73 @@ export function validateLifecycleRecommendation(
         };
       }
     }
-    if (input.hasTrajectoryContext === false) {
-      return {
-        ok: false,
-        code: "LR_TRAJECTORY_REQUIRED",
-        reason: "next_cycle_requires_trajectory",
-      };
+
+    const presence = input.trajectoryBootstrapPresence;
+    const hasCurrent =
+      input.hasTrajectoryContext === true || presence?.kind === "current";
+
+    if (!hasCurrent) {
+      // Strict greenfield bootstrap (D-RB-BOOT-01) — never generic null fallback.
+      if (!presence) {
+        // Legacy callers without presence: preserve prior fail-closed when
+        // hasTrajectoryContext === false; allow when undefined (older tests).
+        if (input.hasTrajectoryContext === false) {
+          return {
+            ok: false,
+            code: "LR_TRAJECTORY_REQUIRED",
+            reason: "next_cycle_requires_trajectory",
+          };
+        }
+      } else if (presence.kind === "unknown") {
+        return {
+          ok: false,
+          code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
+          reason: "trajectory_presence_unknown",
+        };
+      } else {
+        const bootstrap = assessGreenfieldPreTrajectoryBootstrapEligibility({
+          candidate,
+          presence,
+          cycles,
+          lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
+          decisions: input.decisions ?? [],
+        });
+        if (!bootstrap.eligible) {
+          if (bootstrap.code.startsWith("LR_BOOTSTRAP_") || bootstrap.code.startsWith("LR_TARGET_CYCLE_TYPE_") || bootstrap.code.startsWith("LR_BASIS_")) {
+            return {
+              ok: false,
+              code: bootstrap.code,
+              reason: bootstrap.reason,
+            };
+          }
+          return {
+            ok: false,
+            code: "LR_TRAJECTORY_REQUIRED",
+            reason: bootstrap.reason,
+          };
+        }
+        return {
+          ok: true,
+          intent: candidate.intent,
+          subjectCycleInstanceId: null,
+          targetCycleInstanceId: null,
+          targetCycleTypeId: targetType,
+          statement,
+          greenfieldBootstrap: true,
+          basisSeed: {
+            projectId,
+            subjectCycleInstanceId: null,
+            targetCycleInstanceId: null,
+            targetCycleTypeId: targetType,
+            lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
+            trajectoryId: null,
+            trajectoryVersion: null,
+            trajectoryStatus: null,
+          },
+        };
+      }
     }
+
     return {
       ok: true,
       intent: candidate.intent,
```


---

## 6. Integrity proof of pack vs candidate

| Check | Result |
| --- | --- |
| `git rev-parse HEAD` | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| parent | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| 12 paths from `git diff --name-only e79f16ba467c227470328d7f723f1c2b53fdf2fb f70dc8ae9c25b237654a6db9ec44a875880afdde` | all embedded above |
| Product files changed during regularization | **ZERO** |
| ZERO NEW REAL | PROVEN |

---

## 7. Verdict

**REVIEW HANDOFF COMPLETENESS REGULARIZED — READY FOR CHATGPT CRITICAL REVIEW**

This does **not** mean Critical Review PASS, LIVE proven, PR ready, R2 closed, or runtime v3 ADOPTED.
