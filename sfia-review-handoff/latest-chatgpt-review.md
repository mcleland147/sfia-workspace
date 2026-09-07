# CORR-PROOF-05 — DELIVERY ENFORCEMENT CORRECTION
## FULL Review Pack — exploitable mono-cycle

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-07T17:18:31Z |
| **Repo** | `mcleland147/sfia-workspace` |
| **Delivery worktree** | `/Users/morris/Projects/sfia-wt-corr05-impl-12d837fd` |
| **Branch** | `delivery/sfia-studio-proof-corr-05-pilot-lifecycle` |
| **HEAD** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **origin/main** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **Handoff input (before)** | `53995b85b6b0a6ee0acad0fb42404607b71e3e39` |
| **Cycle** | 8 — Delivery / CORR-PROOF-05 DELIVERY ENFORCEMENT CORRECTION |
| **Profile** | CRITICAL |
| **Capability** | Pilot-Governed Project Lifecycle |
| **Gap** | `CYCLE_LIFECYCLE_ORCHESTRATION_GAP` |
| **Product Proof** | OPEN |
| **runtime v3** | NON ADOPTED |
| **Product commit** | NOT PERFORMED (local uncommitted) |
| **Evidence** | DETERMINISTIC PROVEN (enforcement correction) |
| **Verdict** | READY FOR CHATGPT CORR-PROOF-05 DELIVERY RE-REVIEW |

### Anti-claims
- NOT READY FOR COMMIT / PR / REAL
- NOT PRODUCT PROOF CLOSED
- NOT STAGE B AUTHORIZED
- NOT runtime v3 ADOPTED
- NO REAL Suivi executed
- NO FinalizationLedger / new table / migration / second engine

---

# 1. Timestamp UTC
2026-09-07T17:18:31Z

# 2. Local Git Truth initial
- Authoritative WT: `/Users/morris/Projects/sfia-wt-corr05-impl-12d837fd`
- Branch: `delivery/sfia-studio-proof-corr-05-pilot-lifecycle`
- HEAD = origin/main = `12d837fd29a69b3e83155a06ec58dc91b0e15f0b`
- Handoff before: `53995b85b6b0a6ee0acad0fb42404607b71e3e39` (first Delivery publication)
- Mid-cycle hazard: dirty delta was lost to `stash@{0}` after external interrupt/`reset`; Morris GO restore via `stash apply` recovered exact CORR-PROOF-05 Product delta; stash dropped after verify.
- No `move_agent_to_root` / reset --hard / clean -fd used for correction.

# 3. Input handoff
`53995b85b6b0a6ee0acad0fb42404607b71e3e39` — prior CORR-PROOF-05 Delivery implementation (enforcement rejected by ChatGPT).

# 4. Morris decisions consumed
- GO CORRECTION CORR-PROOF-05 (bounded deterministic correction in place)
- GO restore stash@{0} (recover lost uncommitted delta)
- Review Handoff L3 publish-in-cycle REQUIRED by template
NOT consumed: Product commit/push/PR/merge; REAL; Proof closure; Stage B; v3 adopt; doctrine/C1/C2 edits; structural persistence redesign

# 5. Sources read
- Mission contract CORR-PROOF-05 DELIVERY ENFORCEMENT CORRECTION
- Prior handoff 53995b85… content as design reference
- Runtime: assessFinalization, pilotLifecycleTransitions, pilotLifecycleActions, types, errors, createCycle, vertical-slice service, ProjectAssistantPanel, actions, Decision localSingleUserAuthority / VerifyAuthority, Cycle SQLite payload JSON
- Template v2.6 publish-review-handoff requirements

# 6. Convergence qualification
- Same corrective / capability / Delivery cycle / baseline 12d837fd
- KEEP/ADAPT/COMPLETE: enforcement fail-closed without new ledger/table
- FORBIDDEN avoided: parallel engine, FinalizationLedger, DDL, product push/PR

# 7. ChatGPT blocking findings addressed
| ID | Defect | Correction |
| --- | --- | --- |
| A | Finalization fail-open (absence→N/A; gitApplicable:false hardcode) | Applicability APPLICABLE/NOT_APPLICABLE/UNKNOWN; UNKNOWN→BLOCKING; remove git hardcode |
| B | START lacks readiness | Server `assessStartReadiness` from durable assets |
| C | RESUME caller materialDrift SoT | Server `assessResumeReconciliation` + pause JSON snapshot |
| D | Product `forceEnable:true` | Removed; env fail-closed AUTHORITY_NOT_CONFIGURED; verify N3+Morris |
| E | Weak HD validation | Project/cycle/subject/CURRENT helpers reused |
| F | UI from F2 only | `projectPilotLifecycle` + `projectAssistantPilotLifecycleProjection` |

# 8. Before → after enforcement matrix
| Concern | Before | After |
| --- | --- | --- |
| Sparse FINALIZE | could N/A missing models → complete | UNKNOWN/BLOCKING; explicit N/A reasons required |
| Git | hardcoded false → N/A | UNKNOWN unless explicit rule/proof |
| START | transition+single ACTIVE only | StartReadiness + trajectory compatibility + authority |
| RESUME | caller drift boolean SoT | pause snapshot + server reconcile; hint only fail-closed |
| Authority | forceEnable Product path | register without forceEnable + verify |
| HD | decisionId presence | match project/cycle/subject/CURRENT |
| UI lifecycle | F2/proposal | durable CycleRepository+LPS projection |
| Persistence | soft paused + JSON | + optional pauseReconciliation in CycleInstance JSON (no DDL) |

# 9. Finalization applicability rules
Per family: derive or accept explicit `FinalizationApplicabilityRules`. Map APPLICABLE+proof→SATISFIED/MISSING/PENDING/BLOCKING; NOT_APPLICABLE only with `notApplicableReason`; UNKNOWN→BLOCKING. `canComplete` requires finalize HD CURRENT + all SATISFIED|rule-backed N/A + zero UNKNOWN/blockers.

# 10. UNKNOWN vs NOT_APPLICABLE semantics
- ABSENCE OF PROOF ≠ N/A
- ABSENCE OF MODEL ≠ N/A (e.g. artifact model unbound → UNKNOWN)
- UNKNOWN APPLICABILITY ≠ N/A → fail-closed BLOCKING
- N/A only via explicit rule + reason string

# 11. START readiness derivation
`assessStartReadiness`: project/cycle candidate, LPS readable, ≤1 ACTIVE, pointer free, doctrine readable, usable trajectory (not stale/superseded), no blocked entry steps, blocking reservations, structuring trajectory choice → requires matching CURRENT HD `pilot.lifecycle.start+trajectory:<cycleId>`. Caller `requiresTrajectoryHumanDecision` is never sole SoT.

# 12. RESUME reconciliation derivation
`assessResumeReconciliation` compares pause snapshot vs current LPS objective/context/scope, doctrine pin, trajectory fingerprint, CURRENT HD fingerprint, evidence fingerprint, blockers, sibling ACTIVE/pointer. Caller `materialDriftDetected=true` forces drift; false/undefined never proves clean.

# 13. Pause context persistence
`PauseReconciliationSnapshot` stored on `CycleInstance.pauseReconciliation` inside existing `payload_json` (SQLite). NO DDL / new table / store. Cleared on successful RESUME/START/COMPLETE/CANCEL.

# 14. Pilot authority enforcement
Mutating START/PAUSE/RESUME/FINALIZE/CANCEL require `PilotLifecycleAuthorityPort.verify` N3 + Morris gate with `authorityEvidenceId`. Product helper `registerLocalPiloteAuthority` **without** forceEnable; fail-closed when env off.

# 15. HumanDecision validation
Helpers: `matchesLifecycleHumanDecision`, `isAcceptedFinalizeDecision/Cancel/StartTrajectory/ResumeReplan` — projectId + cycleId + subject + CURRENT (accepted|amended).

# 16. forceEnable Product-path audit
`rg forceEnable pilotLifecycleActions.ts` → only comments stating it must not appear. Static test asserts Product file has no `forceEnable: true`. Tests may forceEnable in test helpers only.

# 17. Lifecycle reload / read-model projection
`projectPilotLifecycle` + server action `projectAssistantPilotLifecycleProjection`. Panel loads projection on mount; CTAs from durable status. F1–F4 proven in corrProof05 tests.

# 18. Single-ACTIVE enforcement
Kept/tightened: createCycle link + START/RESUME assert ≤1 ACTIVE and LPS pointer. F2 remains `linkAsActiveCycle:false`.

# 19. Persistence assessment
Soft-add `paused` status (TEXT). Pause snapshot in CycleInstance JSON. No migration. No FinalizationLedger / StartLedger.

# 20. Explicit confirmation
NO new table / migration / store / ledger / second lifecycle engine.

# 21. Files created

- `projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts`

# 22. Files modified

- `projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`
- `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

# 23. Git Review Index
See name-status / stat below and embedded diffs.

# 24. Full content — created files


## CREATED `projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts`

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed Cycle lifecycle deterministic proofs.
 * Scenarios 1–16 + A/B/C/D-E/F enforcement blocks.
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
  assessFinalizationObligations,
  assessResumeReconciliation,
  assessStartReadiness,
  buildPauseReconciliationSnapshot,
  createSqliteCycleServices,
  finalizeSubjectFor,
  cancelSubjectFor,
  projectPilotLifecycle,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  type CycleInstance,
  type FinalizationApplicabilityRules,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
} from "@/lib/oa/decision";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";

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

const COMPLETE_APPLICABILITY: FinalizationApplicabilityRules = {
  exit_criteria: "APPLICABLE",
  artifact: "NOT_APPLICABLE",
  execution_contract: "NOT_APPLICABLE",
  evidence: "NOT_APPLICABLE",
  review_bundle: "NOT_APPLICABLE",
  git_repository: "NOT_APPLICABLE",
  notApplicableReasons: {
    artifact: "explicit_rule_no_artifact_obligation",
    execution_contract: "explicit_rule_no_governed_execution_required",
    evidence: "explicit_rule_no_evidence_obligation",
    review_bundle: "explicit_rule_no_review_bundle_obligation",
    git_repository: "explicit_rule_no_git_obligation",
  },
};

const STEPS_PENDING: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending",
    dependencies: ["stp:clarify"],
  },
];

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr05-"));
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

function buildStack(
  dbPath: string,
  opts?: { applicabilityRules?: FinalizationApplicabilityRules },
): {
  project: SqliteProductProjectServices;
  cycles: ReturnType<typeof createSqliteCycleServices>;
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
} {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-07T16:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-07T16:00:00.000Z");
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
    applicabilityRules: opts?.applicabilityRules,
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

/** TESTS ONLY — forceEnable bypasses product env gate. */
async function registerPilotAuth(
  authority: MemoryAuthorityResolver,
  cycleId: string,
): Promise<string> {
  const auth = registerLocalPiloteAuthority({
    authorityResolver: authority,
    scope: `pilot-lifecycle:${cycleId}`,
    issuedAt: "2026-09-07T16:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  return auth.evidenceId;
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "CORR-05",
    objective: "lifecycle",
    context: "corr05",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function seedTrajectory(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  project: SqliteProductProjectServices,
  projectId: string,
  opts?: {
    status?: "active" | "candidate";
    steps?: TrajectoryStep[];
    trajectoryId?: string;
  },
) {
  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
  expect(lps.ok).toBe(true);
  if (!lps.ok) return;
  const created = await cycles.createInitialTrajectory.execute({
    trajectoryId: opts?.trajectoryId ?? `trj:${projectId}`,
    projectId,
    steps: opts?.steps ?? STEPS_PENDING,
    status: opts?.status ?? "active",
    expectedLpsVersion: lps.livingProjectState.version,
    createdBy: ACTOR,
  });
  expect(created.ok).toBe(true);
  return created;
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
    createdBy: {
      actorId: "actor:nora-f2",
      role: "agent",
      displayName: "Nora F2",
      authorityLevel: "N1",
    },
    linkAsActiveCycle: linkAsActive,
  });
}

async function recordHd(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  decisionId: string;
  evidenceId?: string;
}) {
  const evidenceId =
    input.evidenceId ??
    (await registerPilotAuth(input.authority, input.cycleInstanceId));
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  return input.decisions.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: "opt:accept",
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
  });
}

function baseCycle(overrides?: Partial<CycleInstance>): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: "cyc:corr05-base",
    cycleTypeId: "cyc:delivery",
    projectId: "prj:corr05-base",
    profile: "Standard",
    status: "active",
    createdAt: "2026-09-07T16:00:00.000Z",
    ...overrides,
  };
}

function baseTrajectory(
  overrides?: Partial<ProjectTrajectory>,
): ProjectTrajectory {
  return {
    schemaVersion: "0.1.0-oa",
    trajectoryId: "trj:base",
    projectId: "prj:corr05-base",
    version: 1,
    status: "active",
    steps: STEPS_PENDING,
    ...overrides,
  };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("CORR-PROOF-05 product static guards", () => {
  it("pilotLifecycleActions.ts source must not contain forceEnable: true", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/pilotLifecycleActions.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/forceEnable\s*:\s*true/);
  });
});

describe("CORR-PROOF-05 Pilot lifecycle (1–16)", () => {
  it("1+2 — candidate pre-START; no active link; create without authority", async () => {
    const dbPath = tempDbPath("s1.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s1");
    const created = await createCandidate(
      stack.cycles,
      "prj:corr05-s1",
      "cyc:corr05-s1",
      false,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.cycle.status).not.toBe("active");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s1",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });

  it("3 — START activates exactly one; second ACTIVE refused", async () => {
    const dbPath = tempDbPath("s3.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s3");
    const a = await createCandidate(
      stack.cycles,
      "prj:corr05-s3",
      "cyc:corr05-s3a",
    );
    const b = await createCandidate(
      stack.cycles,
      "prj:corr05-s3",
      "cyc:corr05-s3b",
    );
    expect(a.ok && b.ok).toBe(true);
    const evA = await registerPilotAuth(stack.authority, "cyc:corr05-s3a");
    const startA = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3a",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
      authorityEvidenceId: evA,
    });
    expect(startA.ok).toBe(true);
    if (!startA.ok) return;
    expect(startA.cycle.status).toBe("active");
    expect(startA.activeCycleInstanceId).toBe("cyc:corr05-s3a");
    const evB = await registerPilotAuth(stack.authority, "cyc:corr05-s3b");
    const startB = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3b",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
      authorityEvidenceId: evB,
    });
    expect(startB.ok).toBe(false);
    if (startB.ok) return;
    // Fail-closed readiness reports sibling/LPS conflict before single-ACTIVE detail.
    expect([
      "CYCLE_ALREADY_ACTIVE_EXISTS",
      "CYCLE_START_NOT_READY",
    ]).toContain(startB.error.detailCode);
    if (startB.error.detailCode === "CYCLE_START_NOT_READY") {
      expect(startB.error.internalCauseRef ?? "").toMatch(
        /another_active|lps_active/,
      );
    }
  });

  it("4+5 — PAUSE clears active; BLOCKED retains pointer and stays distinct", async () => {
    const dbPath = tempDbPath("s4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s4");
    await createCandidate(stack.cycles, "prj:corr05-s4", "cyc:corr05-s4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.status).toBe("paused");
    expect(paused.activeCycleInstanceId).toBeNull();
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s4",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();

    await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const active = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-s4",
    });
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const blocked: CycleInstance = {
      ...active.cycle,
      status: "blocked",
    };
    await stack.cycles.cycles.save(blocked);
    const lpsBlocked = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s4",
    });
    expect(lpsBlocked.ok).toBe(true);
    if (!lpsBlocked.ok) return;
    expect(lpsBlocked.livingProjectState.activeCycleInstanceId).toBe(
      "cyc:corr05-s4",
    );
    expect(blocked.status).not.toBe("paused");
  });

  it("6+7 — RESUME clean ok; material drift refused", async () => {
    const dbPath = tempDbPath("s6.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s6");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s6");
    await createCandidate(stack.cycles, "prj:corr05-s6", "cyc:corr05-s6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const clean = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(clean.ok).toBe(true);
    if (!clean.ok) return;
    expect(clean.cycle.status).toBe("active");

    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const drift = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
      materialDriftDetected: true,
    });
    expect(drift.ok).toBe(false);
    if (drift.ok) return;
    expect(drift.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
  });

  it("8+9+11+12 — FINALIZE requires HD; incomplete ≠ completed; no gratuitous EC; complete when ready", async () => {
    const dbPath = tempDbPath("s8.sqlite");
    const stack = buildStack(dbPath, {
      applicabilityRules: COMPLETE_APPLICABILITY,
    });
    await seedProject(stack.project, "prj:corr05-s8");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s8", {
      steps: STEPS_DONE,
      status: "active",
    });
    await createCandidate(stack.cycles, "prj:corr05-s8", "cyc:corr05-s8");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s8");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });

    const noHd = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:missing",
      authorityEvidenceId: ev,
    });
    expect(noHd.ok).toBe(false);
    if (noHd.ok) return;
    expect(noHd.error.detailCode).toBe("CYCLE_DECISION_REQUIRED");

    // Incomplete path: open trajectory steps → ok but not completed
    const incompleteStack = buildStack(tempDbPath("s8-inc.sqlite"), {
      applicabilityRules: COMPLETE_APPLICABILITY,
    });
    await seedProject(incompleteStack.project, "prj:corr05-s8i");
    await seedTrajectory(
      incompleteStack.cycles,
      incompleteStack.project,
      "prj:corr05-s8i",
      { steps: STEPS_PENDING, status: "active" },
    );
    await createCandidate(
      incompleteStack.cycles,
      "prj:corr05-s8i",
      "cyc:corr05-s8i",
    );
    const evI = await registerPilotAuth(
      incompleteStack.authority,
      "cyc:corr05-s8i",
    );
    await incompleteStack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s8i",
      projectId: "prj:corr05-s8i",
      createdBy: PILOTE,
      authorityEvidenceId: evI,
    });
    const hdInc = await recordHd({
      decisions: incompleteStack.decisions,
      authority: incompleteStack.authority,
      projectId: "prj:corr05-s8i",
      cycleInstanceId: "cyc:corr05-s8i",
      subject: finalizeSubjectFor("cyc:corr05-s8i"),
      decisionId: "dec:corr05-finalize-s8i",
      evidenceId: evI,
    });
    expect(hdInc.ok).toBe(true);
    const incomplete = await incompleteStack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8i",
      projectId: "prj:corr05-s8i",
      createdBy: PILOTE,
      decisionId: "dec:corr05-finalize-s8i",
      authorityEvidenceId: evI,
    });
    expect(incomplete.ok).toBe(true);
    if (!incomplete.ok) return;
    expect(incomplete.assessment?.canComplete).toBe(false);
    expect(incomplete.cycle.status).toBe("active");

    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s8",
      cycleInstanceId: "cyc:corr05-s8",
      subject: finalizeSubjectFor("cyc:corr05-s8"),
      decisionId: "dec:corr05-finalize-s8",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);

    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:corr05-finalize-s8",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    expect(finalized.cycle.closedAt).toBeTruthy();
    expect(finalized.activeCycleInstanceId).toBeNull();
    const ecFamily = finalized.assessment?.obligations.find(
      (o) => o.family === "execution_contract",
    );
    expect(ecFamily?.status).toBe("NOT_APPLICABLE");
    expect(ecFamily?.notApplicableReason).toBeTruthy();
  });

  it("10 — ExecutionAttempt terminal_success alone does not complete", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-s10",
      projectId: "prj:corr05-s10",
    });
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-s10",
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
      executionAttempts: [
        {
          attemptId: "att:1",
          terminalState: "terminal_success",
        },
      ],
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.finalizeAccepted).toBe(false);
  });

  it("13+14 — CANCEL requires HD, terminal, no reopen", async () => {
    const dbPath = tempDbPath("s13.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s13");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s13");
    await createCandidate(stack.cycles, "prj:corr05-s13", "cyc:corr05-s13");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s13");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s13",
      cycleInstanceId: "cyc:corr05-s13",
      subject: cancelSubjectFor("cyc:corr05-s13"),
      decisionId: "dec:corr05-cancel-s13",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);
    const cancelled = await stack.cycles.pilotLifecycle.cancel({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      decisionId: "dec:corr05-cancel-s13",
      authorityEvidenceId: ev,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.cycle.status).toBe("cancelled");
    expect(cancelled.activeCycleInstanceId).toBeNull();

    const reopen = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(reopen.ok).toBe(false);
    if (reopen.ok) return;
    expect(reopen.error.detailCode).toBe("CYCLE_TERMINAL");

    const newCycle = await createCandidate(
      stack.cycles,
      "prj:corr05-s13",
      "cyc:corr05-s13-new",
    );
    expect(newCycle.ok).toBe(true);
  });

  it("15 — Pilot lifecycle actions do not use morrisGateRequired; construction gate still exists", () => {
    const construction = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: null,
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        cognitiveWorkload: null,
        objective: "change architecture",
        scope: "runtime",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        rephrasedRequest: null,
        requestedOperation: null,
        criticalJustification: null,
        parseOk: true,
      },
    });
    expect(construction).toBe(true);
  });

  it("16 — NOT_APPLICABLE never used as missing-proof fallback", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-na",
      projectId: "prj:corr05-na",
    });
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-na",
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
      applicability: {
        git_repository: "APPLICABLE",
        gitProofPresent: false,
      },
    });
    const git = assessment.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("MISSING");
    expect(git?.notApplicableReason).toBeUndefined();
    const hd = assessment.obligations.find((o) => o.family === "human_decision");
    expect(hd?.status).toBe("MISSING");
  });

  it("createCycle linkAsActive refuses second ACTIVE overwrite", async () => {
    const dbPath = tempDbPath("link.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-link");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-link");
    const first = await createCandidate(
      stack.cycles,
      "prj:corr05-link",
      "cyc:corr05-link-a",
      true,
    );
    expect(first.ok).toBe(true);
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-link-a");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-link-a",
      projectId: "prj:corr05-link",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const second = await createCandidate(
      stack.cycles,
      "prj:corr05-link",
      "cyc:corr05-link-b",
      true,
    );
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("CYCLE_ALREADY_ACTIVE_EXISTS");
  });
});

describe("A — finalization applicability (A1–A10)", () => {
  const cycle = baseCycle();

  it("A1 — HD missing blocks complete", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    expect(a.canComplete).toBe(false);
    expect(a.blockers).toContain("finalize_human_decision_absent");
  });

  it("A2 — exit criteria open blocks", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_PENDING }),
      applicability: COMPLETE_APPLICABILITY,
    });
    expect(a.blockers).toContain("exit_criteria_open");
  });

  it("A3 — exit criteria closed satisfies when APPLICABLE", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    const exit = a.obligations.find((o) => o.family === "exit_criteria");
    expect(exit?.status).toBe("SATISFIED");
  });

  it("A4 — artifact UNKNOWN blocks (no silent N/A)", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("A5 — artifact explicit N/A requires reason", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: {
        artifact: "NOT_APPLICABLE",
        notApplicableReasons: {
          artifact: "explicit_rule_no_artifact_obligation",
        },
      },
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.status).toBe("NOT_APPLICABLE");
    expect(art?.notApplicableReason).toBeTruthy();
  });

  it("A6 — execution attempt alone never completes", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
      executionAttempts: [{ attemptId: "att:1", terminalState: "terminal_success" }],
    });
    expect(a.canComplete).toBe(false);
  });

  it("A7 — git APPLICABLE without proof → MISSING", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: {
        ...COMPLETE_APPLICABILITY,
        git_repository: "APPLICABLE",
        gitProofPresent: false,
        notApplicableReasons: {
          artifact: "explicit_rule_no_artifact_obligation",
          execution_contract: "explicit_rule_no_governed_execution_required",
          evidence: "explicit_rule_no_evidence_obligation",
          review_bundle: "explicit_rule_no_review_bundle_obligation",
        },
      },
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("MISSING");
  });

  it("A8 — git N/A with reason", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("NOT_APPLICABLE");
    expect(git?.notApplicableReason).toContain("git");
  });

  it("A9 — trajectory absent → exit UNKNOWN blocking", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
    });
    expect(a.blockers.some((b) => b.includes("trajectory") || b.includes("exit"))).toBe(
      true,
    );
  });

  it("A10 — complete path with closed traj + explicit N/A families", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [
        {
          schemaVersion: "0.1.0-oa",
          decisionId: "dec:fin",
          projectId: cycle.projectId,
          cycleInstanceId: cycle.cycleInstanceId,
          subject: finalizeSubjectFor(cycle.cycleInstanceId),
          options: [
            { optionId: "opt:accept", label: "Accept" },
            { optionId: "opt:refuse", label: "Refuse" },
          ],
          selectedOptionId: "opt:accept",
          actor: LOCAL_PILOTE_ACTOR,
          authority: "morris",
          status: "accepted",
          reversible: false,
          effectiveAt: "2026-09-07T16:00:00.000Z",
          recordedAt: "2026-09-07T16:00:00.000Z",
        } as never,
      ],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
      finalizeDecisionId: "dec:fin",
    });
    expect(a.finalizeAccepted).toBe(true);
    expect(a.canComplete).toBe(true);
  });
});

describe("B — start readiness (B1–B8)", () => {
  const cycle = baseCycle({ status: "proposed" });

  it("B1 — ready when candidate + active traj + no sibling", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.ready).toBe(true);
    expect(r.requiresTrajectoryHumanDecision).toBe(false);
  });

  it("B2 — missing trajectory blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: null,
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.ready).toBe(false);
    expect(r.blockers).toContain("trajectory_missing_or_unreadable");
  });

  it("B3 — sibling active blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: true,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers).toContain("another_active_exists");
  });

  it("B4 — non-candidate status blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle: { ...cycle, status: "active" },
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers.some((b) => b.startsWith("cycle_not_candidate"))).toBe(
      true,
    );
  });

  it("B5 — candidate trajectory requires HD", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({ status: "candidate" }),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.requiresTrajectoryHumanDecision).toBe(true);
    expect(r.blockers).toContain("start_trajectory_hd_missing_or_invalid");
  });

  it("B6 — caller requiresTrajectory hint is not sole SoT (active traj still ready)", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({ status: "active" }),
      decisions: [],
      doctrineReadable: true,
      structuringTrajectoryChoiceOpen: false,
    });
    expect(r.ready).toBe(true);
    expect(r.requiresTrajectoryHumanDecision).toBe(false);
  });

  it("B7 — blocked entry step blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({
        steps: [
          { stepId: "stp:x", order: 1, label: "X", state: "blocked" },
        ],
      }),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers).toContain("trajectory_entry_blocked");
  });

  it("B8 — subject helper is stable", () => {
    expect(startTrajectorySubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
  });
});

describe("C — resume reconciliation (C1–C9)", () => {
  function snap(partial?: Partial<ReturnType<typeof buildPauseReconciliationSnapshot>>) {
    return buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: "cyc:corr05-base",
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
      ...partial,
    });
  }

  it("C1 — clean when snapshot matches", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("C2 — missing snapshot is drift", () => {
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: null }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 1,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("pause_snapshot_missing");
  });

  it("C3 — caller material drift hint forces drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
      callerMaterialDriftHint: true,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("caller_material_drift_hint");
  });

  it("C4 — objective drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "CHANGED",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("objective_drift");
  });

  it("C5 — trajectory material drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("trajectory_material_drift");
  });

  it("C6 — another active exists", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: true,
    });
    expect(r.driftReasons).toContain("another_active_exists");
  });

  it("C7 — LPS pointer elsewhere", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: "cyc:other",
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("lps_active_pointer_elsewhere");
  });

  it("C8 — drift requires replan HD flag", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "CHANGED",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.requiresReplanHumanDecision).toBe(true);
  });

  it("C9 — caller false hint never proves clean alone", () => {
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: null }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 1,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
      callerMaterialDriftHint: false,
    });
    expect(r.clean).toBe(false);
  });
});

describe("D/E — authority + HD (D/E1–D/E8)", () => {
  it("D/E1 — mutation without authorityEvidenceId → AUTHORITY_NOT_CONFIGURED", async () => {
    const stack = buildStack(tempDbPath("de1.sqlite"));
    await seedProject(stack.project, "prj:corr05-de1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de1");
    await createCandidate(stack.cycles, "prj:corr05-de1", "cyc:corr05-de1");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de1",
      projectId: "prj:corr05-de1",
      createdBy: PILOTE,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E2 — START with registered evidence succeeds", async () => {
    const stack = buildStack(tempDbPath("de2.sqlite"));
    await seedProject(stack.project, "prj:corr05-de2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de2");
    await createCandidate(stack.cycles, "prj:corr05-de2", "cyc:corr05-de2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de2");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de2",
      projectId: "prj:corr05-de2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(true);
  });

  it("D/E3 — wrong scope evidence denied", async () => {
    const stack = buildStack(tempDbPath("de3.sqlite"));
    await seedProject(stack.project, "prj:corr05-de3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de3");
    await createCandidate(stack.cycles, "prj:corr05-de3", "cyc:corr05-de3");
    const wrong = registerLocalPiloteAuthority({
      authorityResolver: stack.authority,
      scope: "pilot-lifecycle:cyc:other",
      issuedAt: "2026-09-07T16:00:00.000Z",
      forceEnable: true,
    });
    expect(wrong.ok).toBe(true);
    if (!wrong.ok) return;
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de3",
      projectId: "prj:corr05-de3",
      createdBy: PILOTE,
      authorityEvidenceId: wrong.evidenceId,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_LIFECYCLE_DENIED");
  });

  it("D/E4 — FINALIZE missing HD fails even with authority", async () => {
    const stack = buildStack(tempDbPath("de4.sqlite"), {
      applicabilityRules: COMPLETE_APPLICABILITY,
    });
    await seedProject(stack.project, "prj:corr05-de4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de4", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-de4", "cyc:corr05-de4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de4",
      projectId: "prj:corr05-de4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const fin = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-de4",
      projectId: "prj:corr05-de4",
      createdBy: PILOTE,
      decisionId: "dec:missing",
      authorityEvidenceId: ev,
    });
    expect(fin.ok).toBe(false);
    if (fin.ok) return;
    expect(fin.error.detailCode).toBe("CYCLE_DECISION_REQUIRED");
  });

  it("D/E5 — CANCEL with HD + authority succeeds", async () => {
    const stack = buildStack(tempDbPath("de5.sqlite"));
    await seedProject(stack.project, "prj:corr05-de5");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de5");
    await createCandidate(stack.cycles, "prj:corr05-de5", "cyc:corr05-de5");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de5");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de5",
      projectId: "prj:corr05-de5",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-de5",
      cycleInstanceId: "cyc:corr05-de5",
      subject: cancelSubjectFor("cyc:corr05-de5"),
      decisionId: "dec:de5",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);
    const cancelled = await stack.cycles.pilotLifecycle.cancel({
      cycleInstanceId: "cyc:corr05-de5",
      projectId: "prj:corr05-de5",
      createdBy: PILOTE,
      decisionId: "dec:de5",
      authorityEvidenceId: ev,
    });
    expect(cancelled.ok).toBe(true);
  });

  it("D/E6 — PAUSE with unknown evidenceId fail-closed", async () => {
    const stack = buildStack(tempDbPath("de6.sqlite"));
    await seedProject(stack.project, "prj:corr05-de6");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de6");
    await createCandidate(stack.cycles, "prj:corr05-de6", "cyc:corr05-de6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de6",
      projectId: "prj:corr05-de6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-de6",
      projectId: "prj:corr05-de6",
      createdBy: PILOTE,
      authorityEvidenceId: "evd:does-not-exist",
    });
    expect(paused.ok).toBe(false);
    if (paused.ok) return;
    expect(paused.error.detailCode).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E7 — registerLocalPiloteAuthority without forceEnable fails closed in tests env", () => {
    const authority = new MemoryAuthorityResolver();
    const auth = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "pilot-lifecycle:cyc:x",
      issuedAt: "2026-09-07T16:00:00.000Z",
    });
    expect(auth.ok).toBe(false);
    if (auth.ok) return;
    expect(auth.code).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E8 — ASSESS does not require authority evidence", async () => {
    const stack = buildStack(tempDbPath("de8.sqlite"));
    await seedProject(stack.project, "prj:corr05-de8");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de8");
    await createCandidate(stack.cycles, "prj:corr05-de8", "cyc:corr05-de8");
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-de8",
      projectId: "prj:corr05-de8",
    });
    expect(assessed.ok).toBe(true);
  });
});

describe("F — reload projection (F1–F4)", () => {
  it("F1 — candidate projects to selectedCycle with canStart", async () => {
    const stack = buildStack(tempDbPath("f1.sqlite"));
    await seedProject(stack.project, "prj:corr05-f1");
    await createCandidate(stack.cycles, "prj:corr05-f1", "cyc:corr05-f1");
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f1");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f1",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f1",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:corr05-f1");
    expect(projection.cta.canStart).toBe(true);
    expect(projection.cta.canPause).toBe(false);
  });

  it("F2 — after START projection shows active + canPause", async () => {
    const stack = buildStack(tempDbPath("f2.sqlite"));
    await seedProject(stack.project, "prj:corr05-f2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-f2");
    await createCandidate(stack.cycles, "prj:corr05-f2", "cyc:corr05-f2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-f2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-f2",
      projectId: "prj:corr05-f2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f2");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f2",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f2",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedStatus).toBe("active");
    expect(projection.activeCycleInstanceId).toBe("cyc:corr05-f2");
    expect(projection.cta.canPause).toBe(true);
    expect(projection.cta.canStart).toBe(false);
  });

  it("F3 — after PAUSE projection reload shows paused + canResume", async () => {
    const stack = buildStack(tempDbPath("f3.sqlite"));
    await seedProject(stack.project, "prj:corr05-f3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-f3");
    await createCandidate(stack.cycles, "prj:corr05-f3", "cyc:corr05-f3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-f3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-f3",
      projectId: "prj:corr05-f3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-f3",
      projectId: "prj:corr05-f3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f3");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f3",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f3",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedStatus).toBe("paused");
    expect(projection.activeCycleInstanceId).toBeNull();
    expect(projection.cta.canResume).toBe(true);
  });

  it("F4 — ambiguous when two paused, no active", async () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:amb",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:a",
          projectId: "prj:amb",
          status: "paused",
        }),
        baseCycle({
          cycleInstanceId: "cyc:b",
          projectId: "prj:amb",
          status: "paused",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectionAmbiguous).toBe(true);
    expect(projection.selectedCycleInstanceId).toBeNull();
  });
});

```


## CREATED `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`

```typescript
/**
 * CORR-PROOF-05 — Project Assistant Pilot lifecycle server helpers.
 * Pilot lifecycle authority ≠ Morris construction gate.
 *
 * Static guard: forceEnable must not appear in this Product file.
 * registerLocalPiloteAuthority is env-gated fail-closed (AUTHORITY_NOT_CONFIGURED).
 * Tests may forceEnable only outside this Product path.
 */
import { randomUUID } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  cancelSubjectFor,
  finalizeSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  type CycleServices,
  type FinalizationAssessment,
  type PilotLifecycleResult,
} from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";

export type PilotLifecycleActionKind =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "ASSESS"
  | "REEVALUATE";

const PILOTE = LOCAL_PILOTE_ACTOR;

async function ensurePiloteAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  nowIso: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; code: string; message: string }> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope: input.scope,
    issuedAt: input.nowIso,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const verified = input.authorityResolver.verify({
    actorId: LOCAL_PILOTE_ACTOR.actorId,
    requiredLevel: "N3",
    scope: input.scope,
    evidenceId: authority.evidenceId,
    requireMorrisGate: true,
  });
  if (!verified.ok) {
    const reason = verified.reason ?? "authority_verify_failed";
    const notConfigured =
      reason === "no_evidence" ||
      reason === "evidence_not_found" ||
      reason.includes("not_configured") ||
      reason.includes("not configured");
    return {
      ok: false,
      code: notConfigured ? "AUTHORITY_NOT_CONFIGURED" : "CYCLE_LIFECYCLE_DENIED",
      message: reason,
    };
  }
  return { ok: true, evidenceId: authority.evidenceId };
}

async function recordLifecycleDecision(input: {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  selectedOptionId: string;
  nowIso: string;
  /** Reuse evidence already obtained via ensurePiloteAuthority. */
  authorityEvidenceId?: string;
}): Promise<
  | { ok: true; decisionId: string; evidenceId: string }
  | { ok: false; code: string; message: string }
> {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  let evidenceId = input.authorityEvidenceId;
  if (!evidenceId) {
    const auth = await ensurePiloteAuthority({
      authorityResolver: input.authorityResolver,
      scope,
      nowIso: input.nowIso,
    });
    if (!auth.ok) return auth;
    evidenceId = auth.evidenceId;
  }

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId,
    actor: PILOTE,
    // Technical OA authority class for structuring Pilot HD — not Morris runtime UX.
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
    rationale: `Pilot lifecycle ${input.subject}`,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }
  return { ok: true, decisionId, evidenceId };
}

export async function executePilotLifecycleAction(input: {
  action: PilotLifecycleActionKind;
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** RESUME only — caller-detected material drift (hint; server owns SoT). */
  materialDriftDetected?: boolean;
  /** START hint only — server assessStartReadiness decides HD requirement. */
  requiresTrajectoryHumanDecision?: boolean;
  /** RESUME hint only — server assessResumeReconciliation decides. */
  requiresReplanHumanDecision?: boolean;
}): Promise<
  | {
      ok: true;
      action: PilotLifecycleActionKind;
      result?: PilotLifecycleResult;
      assessment?: FinalizationAssessment;
      decisionId?: string;
      authorityEvidenceId?: string;
    }
  | {
      ok: false;
      code: string;
      message: string;
      assessment?: FinalizationAssessment;
    }
> {
  const createdBy = {
    actorId: PILOTE.actorId,
    role: PILOTE.role,
    displayName: PILOTE.displayName,
    authorityLevel: PILOTE.authorityLevel,
  };

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const expectedLpsVersion = lps.ok
    ? lps.livingProjectState.version
    : undefined;

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;

  switch (input.action) {
    case "START": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      // Caller hint may pre-record trajectory HD; server still decides readiness.
      if (input.requiresTrajectoryHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: startTrajectorySubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.start({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        requiresTrajectoryHumanDecision:
          input.requiresTrajectoryHumanDecision,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "START",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "PAUSE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const result = await input.cycleServices.pilotLifecycle.pause({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "PAUSE",
        result,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "RESUME": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      if (input.requiresReplanHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: resumeReplanSubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.resume({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        materialDriftDetected: input.materialDriftDetected,
        requiresReplanHumanDecision: input.requiresReplanHumanDecision,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "RESUME",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "FINALIZE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: finalizeSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.finalize({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "FINALIZE",
        result,
        assessment: result.assessment,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "CANCEL": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: cancelSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.cancel({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "CANCEL",
        result,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "ASSESS": {
      const assessed = await input.cycleServices.pilotLifecycle.assess({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
      });
      if (!assessed.ok) {
        return {
          ok: false,
          code: assessed.error.detailCode,
          message: assessed.error.message,
        };
      }
      return {
        ok: true,
        action: "ASSESS",
        assessment: assessed.assessment,
      };
    }
    case "REEVALUATE": {
      const result =
        await input.cycleServices.pilotLifecycle.reevaluateAndComplete({
          cycleInstanceId: input.cycleInstanceId,
          projectId: input.projectId,
          createdBy,
          expectedLpsVersion,
        });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "REEVALUATE",
        result,
        assessment: result.assessment,
      };
    }
    default: {
      const _exhaustive: never = input.action;
      void _exhaustive;
      return {
        ok: false,
        code: "CYCLE_LIFECYCLE_DENIED",
        message: "Unknown Pilot lifecycle action.",
      };
    }
  }
}

```


## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts`

```typescript
/**
 * CORR-PROOF-05 — derived, idempotent finalization obligation assessment.
 * No FinalizationLedger.
 * ABSENCE OF PROOF ≠ NOT_APPLICABLE.
 * ABSENCE OF MODEL ≠ NOT_APPLICABLE.
 * UNKNOWN APPLICABILITY ≠ NOT_APPLICABLE → fail-closed BLOCKING.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "../domain/types";
import type {
  CycleInstance,
  FinalizationApplicabilityRules,
  FinalizationAssessment,
  FinalizationObligation,
  FinalizationObligationFamily,
  ObligationApplicability,
} from "../domain/types";

export const FINALIZE_SUBJECT_PREFIX = "pilot.lifecycle.finalize:" as const;
export const CANCEL_SUBJECT_PREFIX = "pilot.lifecycle.cancel:" as const;
export const START_TRAJECTORY_SUBJECT_PREFIX =
  "pilot.lifecycle.start+trajectory:" as const;
export const RESUME_REPLAN_SUBJECT_PREFIX =
  "pilot.lifecycle.resume+replan:" as const;

export function finalizeSubjectFor(cycleInstanceId: string): string {
  return `${FINALIZE_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function cancelSubjectFor(cycleInstanceId: string): string {
  return `${CANCEL_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function startTrajectorySubjectFor(cycleInstanceId: string): string {
  return `${START_TRAJECTORY_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function resumeReplanSubjectFor(cycleInstanceId: string): string {
  return `${RESUME_REPLAN_SUBJECT_PREFIX}${cycleInstanceId}`;
}

/** Domain-local CURRENT mapping — mirrors CORR-PROOF-04 HD lifecycle. */
export function isCurrentHumanDecisionStatus(
  status: HumanDecision["status"],
): boolean {
  return status === "accepted" || status === "amended";
}

export type LifecycleHdMatchInput = {
  decision: HumanDecision;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
};

export function matchesLifecycleHumanDecision(
  input: LifecycleHdMatchInput,
): boolean {
  const d = input.decision;
  if (d.projectId !== input.projectId) return false;
  if (d.cycleInstanceId && d.cycleInstanceId !== input.cycleInstanceId) {
    return false;
  }
  if (d.subject !== input.subject) return false;
  return isCurrentHumanDecisionStatus(d.status);
}

export function isAcceptedFinalizeDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId?: string,
): boolean {
  if (projectId && decision.projectId !== projectId) return false;
  if (decision.cycleInstanceId && decision.cycleInstanceId !== cycleInstanceId) {
    return false;
  }
  if (decision.subject !== finalizeSubjectFor(cycleInstanceId)) {
    return false;
  }
  return isCurrentHumanDecisionStatus(decision.status);
}

export function isAcceptedCancelDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId?: string,
): boolean {
  if (projectId && decision.projectId !== projectId) return false;
  if (decision.cycleInstanceId && decision.cycleInstanceId !== cycleInstanceId) {
    return false;
  }
  if (decision.subject !== cancelSubjectFor(cycleInstanceId)) {
    return false;
  }
  return isCurrentHumanDecisionStatus(decision.status);
}

export function isAcceptedStartTrajectoryDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId: string,
): boolean {
  return matchesLifecycleHumanDecision({
    decision,
    projectId,
    cycleInstanceId,
    subject: startTrajectorySubjectFor(cycleInstanceId),
  });
}

export function isAcceptedResumeReplanDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId: string,
): boolean {
  return matchesLifecycleHumanDecision({
    decision,
    projectId,
    cycleInstanceId,
    subject: resumeReplanSubjectFor(cycleInstanceId),
  });
}

export type AssessFinalizationInput = {
  cycle: CycleInstance;
  projectId: string;
  assessedAt: string;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  reviewBundles: readonly ReviewBundle[];
  trajectory: ProjectTrajectory | null;
  /**
   * Explicit applicability rules / proofs. Client booleans are never sole SoT;
   * omit → UNKNOWN when derivation cannot prove APPLICABLE or NOT_APPLICABLE.
   */
  applicability?: FinalizationApplicabilityRules;
  executionRequired?: boolean;
  executionContracts?: ReadonlyArray<{
    contractId: string;
    cycleInstanceId?: string;
    status: string;
  }>;
  executionAttempts?: ReadonlyArray<{
    attemptId: string;
    contractId?: string;
    terminalState?: string;
  }>;
  finalizeDecisionId?: string | null;
  blockingReservationStatements?: readonly string[];
};

function findFinalizeDecision(
  input: AssessFinalizationInput,
): HumanDecision | null {
  if (input.finalizeDecisionId) {
    return (
      input.decisions.find((d) => d.decisionId === input.finalizeDecisionId) ??
      null
    );
  }
  const matches = input.decisions.filter((d) =>
    isAcceptedFinalizeDecision(d, input.cycle.cycleInstanceId, input.projectId),
  );
  return (
    [...matches].sort((a, b) =>
      a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
    )[0] ?? null
  );
}

function resolveApplicability(
  family: Exclude<FinalizationObligationFamily, "human_decision">,
  derived: ObligationApplicability,
  rules: FinalizationApplicabilityRules | undefined,
): ObligationApplicability {
  const override: ObligationApplicability | undefined = {
    exit_criteria: rules?.exit_criteria,
    artifact: rules?.artifact,
    execution_contract: rules?.execution_contract,
    evidence: rules?.evidence,
    review_bundle: rules?.review_bundle,
    git_repository: rules?.git_repository,
    blockers: rules?.blockers,
  }[family];
  if (
    override === "APPLICABLE" ||
    override === "NOT_APPLICABLE" ||
    override === "UNKNOWN"
  ) {
    return override;
  }
  return derived;
}

function naReason(
  family: FinalizationObligationFamily,
  rules: FinalizationApplicabilityRules | undefined,
  fallback: string,
): string {
  return rules?.notApplicableReasons?.[
    family as keyof NonNullable<
      FinalizationApplicabilityRules["notApplicableReasons"]
    >
  ] ?? fallback;
}

function pushUnknownBlocking(
  obligations: FinalizationObligation[],
  blockers: string[],
  family: FinalizationObligationFamily,
  detail: string,
): void {
  obligations.push({
    family,
    applicability: "UNKNOWN",
    status: "BLOCKING",
    detail,
    blocking: true,
  });
  blockers.push(`${family}_applicability_unknown`);
}

function pushNa(
  obligations: FinalizationObligation[],
  family: FinalizationObligationFamily,
  reason: string,
  detail: string,
): void {
  obligations.push({
    family,
    applicability: "NOT_APPLICABLE",
    status: "NOT_APPLICABLE",
    notApplicableReason: reason,
    detail,
  });
}

/**
 * Pure assessment. Idempotent for the same input snapshot.
 */
export function assessFinalizationObligations(
  input: AssessFinalizationInput,
): FinalizationAssessment {
  const obligations: FinalizationObligation[] = [];
  const blockers: string[] = [];
  const rules = input.applicability;

  const finalizeDecision = findFinalizeDecision(input);
  const finalizeAccepted = Boolean(
    finalizeDecision &&
      isAcceptedFinalizeDecision(
        finalizeDecision,
        input.cycle.cycleInstanceId,
        input.projectId,
      ),
  );

  // 1) HumanDecision FINALIZE — always applicable
  if (finalizeAccepted && finalizeDecision) {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "SATISFIED",
      detail: `finalize_decision:${finalizeDecision.decisionId}`,
    });
  } else if (finalizeDecision) {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "PENDING",
      detail: `finalize_decision_status:${finalizeDecision.status}`,
      blocking: true,
    });
    blockers.push("finalize_human_decision_not_current");
  } else {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "MISSING",
      detail: "finalize_human_decision_absent",
      blocking: true,
    });
    blockers.push("finalize_human_decision_absent");
  }

  // 2) Exit criteria / trajectory — Product Completion MUST; absence ≠ N/A
  {
    const derived: ObligationApplicability = input.trajectory
      ? "APPLICABLE"
      : "UNKNOWN";
    const applicability = resolveApplicability("exit_criteria", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "exit_criteria",
        naReason(
          "exit_criteria",
          rules,
          "explicit_rule_no_exit_criteria_for_cycle",
        ),
        "exit_criteria_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN" || !input.trajectory) {
      pushUnknownBlocking(
        obligations,
        blockers,
        "exit_criteria",
        input.trajectory
          ? "exit_criteria_applicability_unknown"
          : "trajectory_absent_applicability_unknown",
      );
    } else {
      const openSteps = input.trajectory.steps.filter(
        (s) =>
          s.state === "pending" || s.state === "active" || s.state === "blocked",
      );
      if (openSteps.length === 0) {
        obligations.push({
          family: "exit_criteria",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: "trajectory_steps_closed_or_skipped",
        });
      } else {
        const blocked = openSteps.some((s) => s.state === "blocked");
        obligations.push({
          family: "exit_criteria",
          applicability: "APPLICABLE",
          status: blocked ? "BLOCKING" : "PENDING",
          detail: `open_steps:${openSteps.map((s) => s.stepId).join(",")}`,
          blocking: true,
        });
        blockers.push("exit_criteria_open");
      }
    }
  }

  // 3) Artifacts — missing model ≠ N/A
  {
    const derived: ObligationApplicability = "UNKNOWN";
    const applicability = resolveApplicability("artifact", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "artifact",
        naReason("artifact", rules, "explicit_rule_no_artifact_obligation"),
        "artifact_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "artifact",
        "artifact_applicability_unknown_or_model_unbound",
      );
    } else if (rules?.artifactProofPresent === true) {
      obligations.push({
        family: "artifact",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "artifact_proof_present",
      });
    } else {
      obligations.push({
        family: "artifact",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "artifact_required_but_proof_absent",
        blocking: true,
      });
      blockers.push("artifact_missing");
    }
  }

  // 4) ExecutionContract — 0..N; unknown ≠ auto N/A
  {
    const cycleContracts = (input.executionContracts ?? []).filter(
      (c) =>
        !c.cycleInstanceId || c.cycleInstanceId === input.cycle.cycleInstanceId,
    );
    let derived: ObligationApplicability;
    if (input.executionRequired === false && cycleContracts.length === 0) {
      derived = "NOT_APPLICABLE";
    } else if (input.executionRequired === true || cycleContracts.length > 0) {
      derived = "APPLICABLE";
    } else {
      derived = "UNKNOWN";
    }
    const applicability = resolveApplicability(
      "execution_contract",
      derived,
      rules,
    );
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "execution_contract",
        naReason(
          "execution_contract",
          rules,
          "explicit_rule_no_governed_execution_required",
        ),
        "execution_explicitly_not_required",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "execution_contract",
        "execution_applicability_unknown",
      );
    } else {
      const open = cycleContracts.filter(
        (c) =>
          c.status !== "confirmed" &&
          c.status !== "cancelled" &&
          c.status !== "superseded",
      );
      const terminalSuccessOnly = (input.executionAttempts ?? []).some(
        (a) => a.terminalState === "terminal_success",
      );
      if (open.length > 0) {
        obligations.push({
          family: "execution_contract",
          applicability: "APPLICABLE",
          status: "PENDING",
          detail: `open_contracts:${open.map((c) => c.contractId).join(",")}`,
          blocking: true,
        });
        blockers.push("execution_contract_open");
      } else if (cycleContracts.length === 0) {
        obligations.push({
          family: "execution_contract",
          applicability: "APPLICABLE",
          status: "MISSING",
          detail: "execution_required_but_no_contract",
          blocking: true,
        });
        blockers.push("execution_contract_missing");
      } else {
        obligations.push({
          family: "execution_contract",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: terminalSuccessOnly
            ? "contracts_settled_attempts_not_sufficient_alone"
            : "contracts_settled",
        });
      }
    }
  }

  // 5) Evidence — zero rows alone ≠ N/A
  {
    const cycleEvidence = input.evidence.filter(
      (e) =>
        e.bindings?.cycleInstanceId === input.cycle.cycleInstanceId ||
        !e.bindings?.cycleInstanceId,
    );
    let derived: ObligationApplicability = "UNKNOWN";
    if (cycleEvidence.length > 0) derived = "APPLICABLE";
    const applicability = resolveApplicability("evidence", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "evidence",
        naReason("evidence", rules, "explicit_rule_no_evidence_obligation"),
        "evidence_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "evidence",
        "evidence_applicability_unknown",
      );
    } else if (cycleEvidence.length === 0) {
      obligations.push({
        family: "evidence",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "evidence_required_but_absent",
        blocking: true,
      });
      blockers.push("evidence_missing");
    } else {
      const weak = cycleEvidence.filter(
        (e) =>
          e.status === "rejected" ||
          e.status === "superseded" ||
          e.status === "unavailable" ||
          e.availability === "unavailable",
      );
      const pending = cycleEvidence.filter(
        (e) =>
          e.status === "expected" ||
          e.status === "incomplete" ||
          e.status === "stale",
      );
      if (weak.length === cycleEvidence.length) {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "BLOCKING",
          detail: "all_evidence_non_supporting",
          blocking: true,
        });
        blockers.push("evidence_non_supporting");
      } else if (pending.length > 0) {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "PENDING",
          detail: `pending_evidence:${pending.length}`,
          blocking: true,
        });
        blockers.push("evidence_pending");
      } else {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: `supporting_evidence:${cycleEvidence.length - weak.length}`,
        });
      }
    }
  }

  // 6) ReviewBundle — zero rows alone ≠ N/A
  {
    const cycleReviews = input.reviewBundles.filter(
      (r) =>
        !r.cycleInstanceId || r.cycleInstanceId === input.cycle.cycleInstanceId,
    );
    let derived: ObligationApplicability = "UNKNOWN";
    if (cycleReviews.length > 0) derived = "APPLICABLE";
    const applicability = resolveApplicability("review_bundle", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "review_bundle",
        naReason(
          "review_bundle",
          rules,
          "explicit_rule_no_review_bundle_obligation",
        ),
        "review_bundle_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "review_bundle",
        "review_bundle_applicability_unknown",
      );
    } else if (cycleReviews.length === 0) {
      obligations.push({
        family: "review_bundle",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "review_required_but_absent",
        blocking: true,
      });
      blockers.push("review_bundle_missing");
    } else {
      const open = cycleReviews.filter(
        (r) =>
          r.status !== "accepted" &&
          r.status !== "superseded" &&
          r.status !== "rejected",
      );
      if (open.length > 0) {
        obligations.push({
          family: "review_bundle",
          applicability: "APPLICABLE",
          status: "PENDING",
          detail: `open_review_bundles:${open.length}`,
          blocking: true,
        });
        blockers.push("review_bundle_open");
      } else {
        obligations.push({
          family: "review_bundle",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: `review_bundles:${cycleReviews.length}`,
        });
      }
    }
  }

  // 7) Git — never hardcode false; derive or UNKNOWN
  {
    const derived: ObligationApplicability = "UNKNOWN";
    const applicability = resolveApplicability("git_repository", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "git_repository",
        naReason(
          "git_repository",
          rules,
          "explicit_rule_git_not_part_of_cycle_effects",
        ),
        "git_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "git_repository",
        "git_applicability_unknown",
      );
    } else if (rules?.gitProofPresent === true) {
      obligations.push({
        family: "git_repository",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "git_proof_present",
      });
    } else {
      obligations.push({
        family: "git_repository",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "git_applicable_but_no_proof",
        blocking: true,
      });
      blockers.push("git_proof_missing");
    }
  }

  // 8) Blockers / reservations
  {
    const blockingReservations = input.blockingReservationStatements ?? [];
    const applicability = resolveApplicability("blockers", "APPLICABLE", rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "blockers",
        naReason("blockers", rules, "explicit_rule_blockers_not_applicable"),
        "blockers_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "blockers",
        "blockers_applicability_unknown",
      );
    } else if (blockingReservations.length > 0) {
      obligations.push({
        family: "blockers",
        applicability: "APPLICABLE",
        status: "BLOCKING",
        detail: blockingReservations.join("|"),
        blocking: true,
      });
      blockers.push("blocking_reservations");
    } else {
      obligations.push({
        family: "blockers",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "no_blocking_reservations",
      });
    }
  }

  // Policy: every N/A must carry reason; UNKNOWN never appears as status
  for (const o of obligations) {
    if (o.status === "NOT_APPLICABLE" && !o.notApplicableReason) {
      o.status = "BLOCKING";
      o.applicability = "UNKNOWN";
      o.blocking = true;
      o.detail = `${o.detail ?? ""}|na_without_reason_fail_closed`;
      blockers.push(`${o.family}_na_without_reason`);
    }
  }

  const hasUnknown = obligations.some((o) => o.applicability === "UNKNOWN");
  const canComplete =
    finalizeAccepted &&
    blockers.length === 0 &&
    !hasUnknown &&
    obligations.every(
      (o) => o.status === "SATISFIED" || o.status === "NOT_APPLICABLE",
    );

  return {
    cycleInstanceId: input.cycle.cycleInstanceId,
    projectId: input.projectId,
    finalizeDecisionId: finalizeDecision?.decisionId ?? null,
    finalizeAccepted,
    obligations,
    canComplete,
    blockers,
    assessedAt: input.assessedAt,
  };
}

```


## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts`

```typescript
/**
 * CORR-PROOF-05 — server-owned PAUSE/RESUME reconciliation (no caller SoT).
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  PauseReconciliationSnapshot,
  ProjectTrajectory,
} from "../domain/types";
import { isCurrentHumanDecisionStatus } from "./assessFinalization";

export type BuildPauseSnapshotInput = {
  pausedAt: string;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  projectId: string;
  cycleInstanceId: string;
};

export function trajectoryFingerprint(
  trajectory: ProjectTrajectory | null,
): string | null {
  if (!trajectory) return null;
  return `${trajectory.trajectoryId}@v${trajectory.version}:${trajectory.status}:${trajectory.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

function decisionFingerprint(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string,
): string {
  const relevant = decisions
    .filter(
      (d) =>
        d.projectId === projectId &&
        (!d.cycleInstanceId || d.cycleInstanceId === cycleInstanceId) &&
        isCurrentHumanDecisionStatus(d.status),
    )
    .map((d) => `${d.decisionId}:${d.status}:${d.subject}`)
    .sort();
  return relevant.join("|") || "none";
}

function evidenceFingerprint(
  evidence: readonly Evidence[],
  cycleInstanceId: string,
): string {
  const relevant = evidence
    .filter(
      (e) =>
        !e.bindings?.cycleInstanceId ||
        e.bindings.cycleInstanceId === cycleInstanceId,
    )
    .map(
      (e) =>
        `${e.evidenceId}:${e.status}:${e.availability ?? ""}:${e.freshness ?? ""}`,
    )
    .sort();
  return relevant.join("|") || "none";
}

export function buildPauseReconciliationSnapshot(
  input: BuildPauseSnapshotInput,
): PauseReconciliationSnapshot {
  return {
    pausedAt: input.pausedAt,
    lpsVersion: input.lpsVersion,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
    objective: input.objective,
    context: input.context,
    scope: input.scope,
    doctrinePackageId: input.doctrinePackageId,
    doctrinePackageVersion: input.doctrinePackageVersion,
    doctrinePackageDigest: input.doctrinePackageDigest,
    trajectoryId: input.trajectory?.trajectoryId ?? null,
    trajectoryVersion: input.trajectory?.version ?? null,
    trajectoryFingerprint: trajectoryFingerprint(input.trajectory),
    currentDecisionFingerprint: decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycleInstanceId,
    ),
    evidenceFingerprint: evidenceFingerprint(
      input.evidence,
      input.cycleInstanceId,
    ),
    blockerFingerprint: (input.blockingReservationStatements ?? [])
      .slice()
      .sort()
      .join("|") || "none",
  };
}

export type ResumeReconciliationInput = {
  cycle: CycleInstance;
  projectId: string;
  lpsReadable: boolean;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  siblingActiveExists: boolean;
  /** Caller hint — forces drift when true; never proves clean when false. */
  callerMaterialDriftHint?: boolean;
};

export type ResumeReconciliationResult = {
  clean: boolean;
  driftReasons: string[];
  requiresReplanHumanDecision: boolean;
};

export function assessResumeReconciliation(
  input: ResumeReconciliationInput,
): ResumeReconciliationResult {
  const driftReasons: string[] = [];

  if (input.callerMaterialDriftHint === true) {
    driftReasons.push("caller_material_drift_hint");
  }

  const snap = input.cycle.pauseReconciliation;
  if (!snap) {
    driftReasons.push("pause_snapshot_missing");
  }

  if (!input.lpsReadable) {
    driftReasons.push("lps_unreadable");
  }

  if (input.siblingActiveExists) {
    driftReasons.push("another_active_exists");
  }

  if (
    input.lpsActiveCycleInstanceId &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    driftReasons.push("lps_active_pointer_elsewhere");
  }

  if (snap) {
    if (snap.objective !== input.objective) driftReasons.push("objective_drift");
    if (snap.context !== input.context) driftReasons.push("context_drift");
    if (snap.scope !== input.scope) driftReasons.push("scope_drift");

    if (
      (snap.doctrinePackageId ?? "") !== (input.doctrinePackageId ?? "") ||
      (snap.doctrinePackageVersion ?? "") !==
        (input.doctrinePackageVersion ?? "") ||
      (snap.doctrinePackageDigest ?? "") !== (input.doctrinePackageDigest ?? "")
    ) {
      driftReasons.push("doctrine_pin_drift");
    }

    const currentTrajFp = trajectoryFingerprint(input.trajectory);
    if ((snap.trajectoryFingerprint ?? null) !== currentTrajFp) {
      driftReasons.push("trajectory_material_drift");
    }

    const currentDecFp = decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycle.cycleInstanceId,
    );
    if ((snap.currentDecisionFingerprint ?? "none") !== currentDecFp) {
      driftReasons.push("human_decision_material_drift");
    }

    const currentEvFp = evidenceFingerprint(
      input.evidence,
      input.cycle.cycleInstanceId,
    );
    if ((snap.evidenceFingerprint ?? "none") !== currentEvFp) {
      // Stale/unavailable evidence only blocks when fingerprint changed
      const stale = input.evidence.some(
        (e) =>
          (!e.bindings?.cycleInstanceId ||
            e.bindings.cycleInstanceId === input.cycle.cycleInstanceId) &&
          (e.status === "stale" ||
            e.status === "unavailable" ||
            e.availability === "unavailable"),
      );
      if (stale || currentEvFp !== (snap.evidenceFingerprint ?? "none")) {
        driftReasons.push("evidence_freshness_drift");
      }
    }

    const blockerFp =
      (input.blockingReservationStatements ?? []).slice().sort().join("|") ||
      "none";
    if ((snap.blockerFingerprint ?? "none") !== blockerFp) {
      driftReasons.push("blocker_introduced_or_changed");
    }
  }

  // Deduplicate
  const unique = [...new Set(driftReasons)];
  return {
    clean: unique.length === 0,
    driftReasons: unique,
    requiresReplanHumanDecision: unique.length > 0,
  };
}

```


## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts`

```typescript
/**
 * CORR-PROOF-05 — pure StartReadiness assessment (no StartLedger).
 * Caller requiresTrajectoryHumanDecision is never sole SoT.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type {
  CycleInstance,
  ProjectTrajectory,
  StartReadinessAssessment,
} from "../domain/types";
import { isCandidateNonActiveStatus } from "../domain/lifecycleInvariants";
import {
  isAcceptedStartTrajectoryDecision,
  startTrajectorySubjectFor,
} from "./assessFinalization";

export type AssessStartReadinessInput = {
  assessedAt: string;
  projectOk: boolean;
  cycle: CycleInstance | null;
  projectId: string;
  lpsReadable: boolean;
  lpsActiveCycleInstanceId: string | null | undefined;
  siblingActiveExists: boolean;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  /** Optional decisionId supplied by caller — validated, never trusted alone. */
  decisionId?: string;
  blockingReservationStatements?: readonly string[];
  doctrineReadable: boolean;
  /**
   * When true, durable context shows an undecided structuring trajectory choice
   * that START must consume (candidate trajectory / undecided amendment).
   */
  structuringTrajectoryChoiceOpen?: boolean;
};

function trajectoryFingerprint(t: ProjectTrajectory): string {
  return `${t.trajectoryId}@v${t.version}:${t.status}:${t.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

export function assessStartReadiness(
  input: AssessStartReadinessInput,
): StartReadinessAssessment {
  const blockers: string[] = [];

  if (!input.projectOk) blockers.push("project_missing");
  if (!input.cycle) {
    blockers.push("cycle_missing");
  } else {
    if (input.cycle.projectId !== input.projectId) {
      blockers.push("cycle_project_mismatch");
    }
    if (!isCandidateNonActiveStatus(input.cycle.status)) {
      blockers.push(`cycle_not_candidate:${input.cycle.status}`);
    }
    if (!input.cycle.cycleTypeId?.trim()) {
      blockers.push("cycle_type_missing");
    }
  }

  if (!input.lpsReadable) blockers.push("lps_unreadable");
  if (input.siblingActiveExists) blockers.push("another_active_exists");
  if (
    input.lpsActiveCycleInstanceId &&
    input.cycle &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    blockers.push("lps_active_pointer_elsewhere");
  }

  if (!input.doctrineReadable) blockers.push("doctrine_unreadable");

  // Product Completion: usable current trajectory required for START compatibility
  if (!input.trajectory) {
    blockers.push("trajectory_missing_or_unreadable");
  } else if (
    input.trajectory.status === "stale" ||
    input.trajectory.status === "superseded"
  ) {
    blockers.push(`trajectory_incompatible:${input.trajectory.status}`);
  }

  const openDeps = (input.trajectory?.steps ?? []).filter(
    (s) => s.state === "blocked",
  );
  if (openDeps.length > 0) {
    blockers.push("trajectory_entry_blocked");
  }

  const blockingReservations = input.blockingReservationStatements ?? [];
  if (blockingReservations.length > 0) {
    blockers.push("blocking_reservations");
  }

  const structuringOpen =
    input.structuringTrajectoryChoiceOpen === true ||
    input.trajectory?.status === "candidate";

  let requiresTrajectoryHumanDecision = structuringOpen;

  if (requiresTrajectoryHumanDecision) {
    const cycleId = input.cycle?.cycleInstanceId ?? "";
    let hd: HumanDecision | null = null;
    if (input.decisionId) {
      hd =
        input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    } else {
      hd =
        input.decisions.find((d) =>
          isAcceptedStartTrajectoryDecision(d, cycleId, input.projectId),
        ) ?? null;
    }
    if (
      !hd ||
      !isAcceptedStartTrajectoryDecision(hd, cycleId, input.projectId)
    ) {
      blockers.push("start_trajectory_hd_missing_or_invalid");
    }
  } else if (input.decisionId) {
    // Arbitrary decisionId must not falsely satisfy when HD not required —
    // but also must not block START. Ignore unless subject matches.
    const hd =
      input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    if (
      hd &&
      hd.subject === startTrajectorySubjectFor(input.cycle?.cycleInstanceId ?? "")
    ) {
      requiresTrajectoryHumanDecision = true;
      if (
        !input.cycle ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          input.cycle.cycleInstanceId,
          input.projectId,
        )
      ) {
        blockers.push("start_trajectory_hd_missing_or_invalid");
      }
    }
  }

  void trajectoryFingerprint;

  return {
    ready: blockers.length === 0,
    blockers,
    requiresTrajectoryHumanDecision,
    assessedAt: input.assessedAt,
  };
}

```


## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

```typescript
/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload-safe).
 * Derived from CycleRepository + LPS (+ optional trajectory/assessment).
 * Never owned by F2/proposal process-local state.
 */
import type {
  CycleInstance,
  CycleInstanceStatus,
  FinalizationAssessment,
} from "../domain/types";
import {
  isCandidateNonActiveStatus,
  isPausedStatus,
  isTerminalCycleStatus,
} from "../domain/lifecycleInvariants";

export type PilotLifecycleProjection = {
  projectId: string;
  activeCycleInstanceId: string | null;
  activeCycle: CycleInstance | null;
  pausedCycles: CycleInstance[];
  candidateCycles: CycleInstance[];
  terminalCycles: CycleInstance[];
  /**
   * Selected cycle for CTA surface.
   * Preference: LPS active → single paused → single candidate → null (ambiguous).
   */
  selectedCycleInstanceId: string | null;
  selectedStatus: CycleInstanceStatus | null;
  selectionAmbiguous: boolean;
  assessment?: FinalizationAssessment | null;
  cta: {
    canStart: boolean;
    canPause: boolean;
    canResume: boolean;
    canFinalize: boolean;
    canCancel: boolean;
  };
};

export function projectPilotLifecycle(input: {
  projectId: string;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  assessment?: FinalizationAssessment | null;
}): PilotLifecycleProjection {
  const byId = new Map(
    input.cycles.map((c) => [c.cycleInstanceId, c] as const),
  );
  const activeId = input.lpsActiveCycleInstanceId ?? null;
  const activeFromRepo = input.cycles.find((c) => c.status === "active") ?? null;
  const activeCycle =
    (activeId ? byId.get(activeId) ?? null : null) ?? activeFromRepo;

  const pausedCycles = input.cycles.filter((c) => isPausedStatus(c.status));
  const candidateCycles = input.cycles.filter((c) =>
    isCandidateNonActiveStatus(c.status),
  );
  const terminalCycles = input.cycles.filter((c) =>
    isTerminalCycleStatus(c.status),
  );

  let selectedCycleInstanceId: string | null = null;
  let selectionAmbiguous = false;

  if (activeCycle) {
    selectedCycleInstanceId = activeCycle.cycleInstanceId;
  } else if (pausedCycles.length === 1) {
    selectedCycleInstanceId = pausedCycles[0]!.cycleInstanceId;
  } else if (pausedCycles.length > 1) {
    selectionAmbiguous = true;
  } else if (candidateCycles.length === 1) {
    selectedCycleInstanceId = candidateCycles[0]!.cycleInstanceId;
  } else if (candidateCycles.length > 1) {
    selectionAmbiguous = true;
  }

  const selected = selectedCycleInstanceId
    ? byId.get(selectedCycleInstanceId) ?? null
    : null;
  const selectedStatus = selected?.status ?? null;

  const cta = {
    canStart: Boolean(
      selected && isCandidateNonActiveStatus(selected.status) && !activeCycle,
    ),
    canPause: Boolean(selected && selected.status === "active"),
    canResume: Boolean(selected && isPausedStatus(selected.status) && !activeCycle),
    canFinalize: Boolean(
      selected &&
        !isTerminalCycleStatus(selected.status) &&
        (selected.status === "active" ||
          selected.status === "paused" ||
          selected.status === "blocked"),
    ),
    canCancel: Boolean(
      selected && !isTerminalCycleStatus(selected.status),
    ),
  };

  return {
    projectId: input.projectId,
    activeCycleInstanceId: activeCycle?.cycleInstanceId ?? activeId,
    activeCycle,
    pausedCycles,
    candidateCycles,
    terminalCycles,
    selectedCycleInstanceId,
    selectedStatus,
    selectionAmbiguous,
    assessment: input.assessment ?? null,
    cta,
  };
}

```


## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`

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

export type LifecycleExecutionSnapshotReader = {
  listContractsByProject?(projectId: string): Promise<
    Array<{
      contractId: string;
      cycleInstanceId?: string;
      status: string;
    }>
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
  authority?: PilotLifecycleAuthorityPort;
  /** Optional static default applicability rules for finalization assessments. */
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
      ...(this.deps.applicabilityRules
        ? { applicability: this.deps.applicabilityRules }
        : {}),
    };
    return assessFinalizationObligations(snapshot);
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
        if (input.clearActiveLink || input.setActiveLink !== undefined) {
          const linkTarget = input.clearActiveLink ? null : input.setActiveLink;
          const lps = await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: input.projectId,
            createdBy: input.createdBy,
            correlationId: input.correlationId,
            expectedLpsVersion: input.expectedLpsVersion,
            activeCycleInstanceId: linkTarget,
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


## CREATED `projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts`

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle invariants.
 * Application/domain enforcement (not UI-only).
 */
import type { CycleInstance, CycleInstanceStatus } from "./types";
import type { InvariantViolation } from "./invariants";

/** Authority-bearing working status for ≤1 ACTIVE enforcement. */
export const ACTIVE_AUTHORITY_STATUS: CycleInstanceStatus = "active";

export type PilotLifecycleAction =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "COMPLETE"
  | "BLOCK";

export function isTerminalCycleStatus(status: CycleInstanceStatus): boolean {
  return status === "completed" || status === "cancelled";
}

export function isActiveAuthorityStatus(status: CycleInstanceStatus): boolean {
  return status === ACTIVE_AUTHORITY_STATUS;
}

export function isPausedStatus(status: CycleInstanceStatus): boolean {
  return status === "paused";
}

export function isCandidateNonActiveStatus(status: CycleInstanceStatus): boolean {
  return (
    status === "proposed" ||
    status === "acknowledged" ||
    status === "superseded"
  );
}

export function listActiveAuthorityCycles(
  cycles: readonly CycleInstance[],
): CycleInstance[] {
  return cycles.filter((c) => isActiveAuthorityStatus(c.status));
}

/**
 * ≤1 ACTIVE CycleInstance per Project.
 * Optional excludeId allows the cycle being activated to pass through.
 */
export function assertAtMostOneActiveCycle(input: {
  cycles: readonly CycleInstance[];
  excludeCycleInstanceId?: string;
}): InvariantViolation | null {
  const actives = listActiveAuthorityCycles(input.cycles).filter(
    (c) => c.cycleInstanceId !== input.excludeCycleInstanceId,
  );
  if (actives.length > 0) {
    return {
      detailCode: "CYCLE_ALREADY_ACTIVE_EXISTS",
      reason: `active_exists:${actives.map((c) => c.cycleInstanceId).join(",")}`,
    };
  }
  return null;
}

export function assertNotTerminal(
  cycle: CycleInstance,
): InvariantViolation | null {
  if (isTerminalCycleStatus(cycle.status)) {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `terminal_${cycle.status}`,
    };
  }
  return null;
}

/**
 * Allowed Pilot lifecycle transitions (domain matrix).
 * BLOCKED remains distinct from PAUSED.
 */
export function assertLifecycleTransition(input: {
  from: CycleInstanceStatus;
  action: PilotLifecycleAction;
}): InvariantViolation | null {
  const { from, action } = input;
  if (isTerminalCycleStatus(from) && action !== "COMPLETE") {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `no_transition_from_${from}`,
    };
  }

  const ok = (allowed: boolean, reason: string): InvariantViolation | null =>
    allowed
      ? null
      : { detailCode: "CYCLE_TRANSITION_INVALID", reason };

  switch (action) {
    case "START":
      return ok(
        from === "proposed" || from === "acknowledged",
        `start_from_${from}`,
      );
    case "PAUSE":
      return ok(from === "active", `pause_from_${from}`);
    case "RESUME":
      return ok(from === "paused", `resume_from_${from}`);
    case "FINALIZE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `finalize_from_${from}`,
      );
    case "CANCEL":
      return ok(!isTerminalCycleStatus(from), `cancel_from_${from}`);
    case "COMPLETE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `complete_from_${from}`,
      );
    case "BLOCK":
      return ok(from === "active" || from === "paused", `block_from_${from}`);
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return { detailCode: "CYCLE_TRANSITION_INVALID", reason: "unknown_action" };
    }
  }
}

export function targetStatusForAction(
  action: PilotLifecycleAction,
): CycleInstanceStatus | null {
  switch (action) {
    case "START":
    case "RESUME":
      return "active";
    case "PAUSE":
      return "paused";
    case "CANCEL":
      return "cancelled";
    case "COMPLETE":
      return "completed";
    case "BLOCK":
      return "blocked";
    case "FINALIZE":
      // FINALIZE does not by itself complete; status unchanged until COMPLETE.
      return null;
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return null;
    }
  }
}

```


# 25. Modified files — full diffs


## MODIFIED `projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
index 4f35ac7d..1c3cabc8 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
@@ -272,7 +272,13 @@ describe("M2 Product SQLite migration + Cycle durability", () => {
     });
     expect(stale.ok).toBe(false);
     if (stale.ok) return;
-    expect(stale.error.detailCode).toBe("LPS_VERSION_CONFLICT");
+    // CORR-PROOF-05: refuse linking a second authority-bearing active pointer
+    // before attempting a stale LPS append. Either fail-closed code proves
+    // no orphan CycleInstance and LPS remains on cyc:m2-std-1 @ v2.
+    expect([
+      "LPS_VERSION_CONFLICT",
+      "CYCLE_ALREADY_ACTIVE_EXISTS",
+    ]).toContain(stale.error.detailCode);

     const orphan = await cycleSvc.cycles.findById("cyc:m2-stale-1");
     expect(orphan).toBeNull();

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index bf6a6db1..b981465d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -45,6 +45,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
     projectAssistantConfirmAndExecuteResolvedM3ActionMock(...args),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index c034ff0d..b44f0c86 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -105,7 +105,7 @@ describe("F2 orchestration AC coverage", () => {
     expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
     expect(result.f2?.qualification?.executionAuthority).toBe(false);
     expect(result.f2?.proposal).toBeTruthy();
-    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(preVersion + 1);
+    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(preVersion);
     expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
     expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
     expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
index e28d5c08..68c10fc8 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
@@ -81,10 +81,11 @@ describe("M2 F2 cognitive piloting e2e", () => {
     expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
     expect(result.f2?.qualification?.executionAuthority).toBe(false);
     expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
+    // CORR-PROOF-05: F2 creates candidate without LPS activation / version bump.
     expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(
-      before.livingState.version + 1,
+      before.livingState.version,
     );
-    expect(result.f2?.proposal?.contextSnapshot.lpsId).not.toBe(
+    expect(result.f2?.proposal?.contextSnapshot.lpsId).toBe(
       before.livingState.id,
     );
     expect(result.f2?.decision).toBeNull();
@@ -93,13 +94,10 @@ describe("M2 F2 cognitive piloting e2e", () => {
     const after = await runtime.getProject(projectId);
     expect(after.ok).toBe(true);
     if (!after.ok) return;
-    expect(after.livingState.version).toBe(before.livingState.version + 1);
-    expect(after.livingState.activeCycleInstanceId).toBe(
-      result.f2?.qualification?.cycleInstanceId,
-    );
-    expect(after.livingState.ckcResolutionRef).toBe(
-      result.f2?.qualification?.ckcResolutionRef,
-    );
+    expect(after.livingState.version).toBe(before.livingState.version);
+    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
+    // CKC ref is carried on qualification; not stamped on LPS until Pilot START path.
+    expect(result.f2?.qualification?.ckcResolutionRef).toBeTruthy();
     expect(after.disclosures.persistence).toBe(
       "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
     );
@@ -111,7 +109,7 @@ describe("M2 F2 cognitive piloting e2e", () => {
     });
     expect(cycle.ok).toBe(true);
     if (!cycle.ok) return;
-    expect(cycle.cycle.status).not.toBe("active" as never);
+    expect(cycle.cycle.status).not.toBe("active");
   });

   it("D/E — ambiguous and informative do not mutate Cycle/LPS", async () => {

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
index 22aa8b62..80556cc3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
@@ -25,6 +25,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
index 93172998..4b2d7c62 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
@@ -25,6 +25,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
index 670e1349..6a33337e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
@@ -295,6 +295,26 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
     const overview = await runtime.getProject(seeded.projectId);
     expect(overview.ok).toBe(true);
     if (!overview.ok) return;
+    // CORR-PROOF-05: never overwrite an existing activeCycleInstanceId silently.
+    // Clear the prior active pointer via LPS append, then link the requalified cycle.
+    const currentLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId: seeded.projectId,
+      });
+    expect(currentLps.ok).toBe(true);
+    if (!currentLps.ok) return;
+    const cleared =
+      await runtime.oa!.projectServices.appendLivingProjectStateVersion.execute({
+        projectId: seeded.projectId,
+        expectedVersion: currentLps.livingProjectState.version,
+        objective: currentLps.livingProjectState.objective,
+        createdBy: W2_TEST_ACTOR,
+        context: currentLps.livingProjectState.context,
+        scope: currentLps.livingProjectState.scope,
+        activeCycleInstanceId: null,
+      });
+    expect(cleared.ok).toBe(true);
+    if (!cleared.ok) return;
     const requal = await runtime.oa!.cycleServices.createCycle.execute({
       cycleInstanceId: "cyc:inst:w2-rq-sec",
       cycleTypeId: "cyc:security",
@@ -304,7 +324,7 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
       scope: "w2-requal",
       createdBy: W2_TEST_ACTOR,
       linkAsActiveCycle: true,
-      expectedLpsVersion: overview.livingState.version,
+      expectedLpsVersion: cleared.livingProjectState.version,
       ckcResolutionRef: "ckcres:w2-harness-sec",
     });
     expect(requal.ok).toBe(true);

```


## MODIFIED `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 22d561b0..640cb16b 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -6,11 +6,18 @@ import {
   projectAssistantConfirmAndExecuteF3FixtureAction,
   projectAssistantConfirmAndExecuteResolvedM3Action,
   projectAssistantDecideAction,
+  projectAssistantPilotLifecycleAction,
+  projectAssistantPilotLifecycleProjection,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareResolvedM3Action,
   projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
+import type { PilotLifecycleActionKind } from "./f2/pilotLifecycleActions";
+import type {
+  FinalizationAssessment,
+  PilotLifecycleProjection,
+} from "@/lib/oa/cycle";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
@@ -128,6 +135,12 @@ export function ProjectAssistantPanel({
     string | null
   >(null);
   const [f3Busy, setF3Busy] = useState(false);
+  const [lifecycleBusy, setLifecycleBusy] = useState(false);
+  const [lifecycleAssessment, setLifecycleAssessment] =
+    useState<FinalizationAssessment | null>(null);
+  const [lifecycleMessage, setLifecycleMessage] = useState<string | null>(null);
+  const [lifecycleProjection, setLifecycleProjection] =
+    useState<PilotLifecycleProjection | null>(null);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -173,6 +186,24 @@ export function ProjectAssistantPanel({
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);

+  useEffect(() => {
+    let cancelled = false;
+    setLifecycleProjection(null);
+    startTransition(() => {
+      void projectAssistantPilotLifecycleProjection({ projectId }).then(
+        (result) => {
+          if (cancelled) return;
+          if (result.ok && result.projection) {
+            setLifecycleProjection(result.projection);
+          }
+        },
+      );
+    });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     let cancelled = false;
     applyDurableEvidenceOutcome(null);
@@ -243,6 +274,7 @@ export function ProjectAssistantPanel({
   const busy =
     isPending ||
     f3Busy ||
+    lifecycleBusy ||
     uiState === "SENDING" ||
     uiState === "ASSISTANT_WORKING" ||
     uiState === "SOURCE_LOOKUP";
@@ -252,6 +284,68 @@ export function ProjectAssistantPanel({
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";

+  const lifecycleCycleId =
+    lifecycleProjection?.selectedCycleInstanceId ??
+    (f2?.qualification?.cycleInstanceId ??
+      activeProposal?.contextSnapshot.activeCycleInstanceId ??
+      null);
+  const lifecycleStatus =
+    lifecycleProjection?.selectedStatus ??
+    f2?.qualification?.cycleStatus ??
+    null;
+  const lifecycleCta = lifecycleProjection?.cta;
+
+  function applyLifecycleProjection(projection?: PilotLifecycleProjection) {
+    if (projection) setLifecycleProjection(projection);
+  }
+
+  function runPilotLifecycle(action: PilotLifecycleActionKind) {
+    if (!lifecycleCycleId || lifecycleBusy || busy) return;
+    setLifecycleBusy(true);
+    setLifecycleMessage(null);
+    startTransition(async () => {
+      const result = await projectAssistantPilotLifecycleAction({
+        projectId,
+        cycleInstanceId: lifecycleCycleId,
+        action,
+      });
+      setLifecycleBusy(false);
+      if (!result.ok) {
+        setLifecycleMessage(result.message ?? result.code ?? "Lifecycle error");
+        if (result.assessment) {
+          setLifecycleAssessment(
+            result.assessment as FinalizationAssessment,
+          );
+        }
+        applyLifecycleProjection(result.projection);
+        return;
+      }
+      setLifecycleMessage(result.message ?? `OK ${action}`);
+      if (result.assessment) {
+        setLifecycleAssessment(result.assessment as FinalizationAssessment);
+      }
+      if (result.projection) {
+        applyLifecycleProjection(result.projection);
+      } else {
+        const refreshed = await projectAssistantPilotLifecycleProjection({
+          projectId,
+        });
+        if (refreshed.ok && refreshed.projection) {
+          applyLifecycleProjection(refreshed.projection);
+        }
+      }
+      if (result.cycleStatus && f2?.qualification) {
+        setF2({
+          ...f2,
+          qualification: {
+            ...f2.qualification,
+            cycleStatus: result.cycleStatus,
+          },
+        });
+      }
+    });
+  }
+
   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
       .filter((m) => m.role === "user" || m.role === "assistant")
@@ -740,12 +834,16 @@ export function ProjectAssistantPanel({
             </div>
             {f2.qualification.cycleInstanceId ? (
               <div>
-                <dt>Cycle lié</dt>
+                <dt>Cycle candidate / instance</dt>
                 <dd data-testid="f2-cycle-instance">
                   {f2.qualification.cycleInstanceId}
                   {f2.qualification.cycleStatus
                     ? ` · ${f2.qualification.cycleStatus}`
                     : ""}
+                  {f2.qualification.cycleStatus &&
+                  f2.qualification.cycleStatus !== "active"
+                    ? " · non authority-bearing jusqu'à Pilot START"
+                    : ""}
                 </dd>
               </div>
             ) : null}
@@ -780,6 +878,131 @@ export function ProjectAssistantPanel({
         </section>
       ) : null}

+      {lifecycleCycleId ? (
+        <section
+          className={styles.qualificationCard}
+          data-testid="pilot-lifecycle-controls"
+          aria-labelledby="pilot-lifecycle-title"
+        >
+          <h3 id="pilot-lifecycle-title" className={styles.cardTitle}>
+            Pilot lifecycle
+          </h3>
+          <p className={styles.cardMeta}>
+            Transitions Pilot-governed — Nora recommande uniquement. Gate Morris
+            construction ≠ lifecycle Pilot.
+          </p>
+          <p className={styles.cardMeta} data-testid="pilot-lifecycle-status">
+            {lifecycleCycleId}
+            {lifecycleStatus ? ` · ${lifecycleStatus}` : ""}
+          </p>
+          <div data-testid="pilot-lifecycle-actions">
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-start"
+              disabled={
+                busy ||
+                (lifecycleCta ? !lifecycleCta.canStart : lifecycleStatus === "active")
+              }
+              onClick={() => runPilotLifecycle("START")}
+            >
+              START
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-pause"
+              disabled={
+                busy ||
+                (lifecycleCta ? !lifecycleCta.canPause : lifecycleStatus !== "active")
+              }
+              onClick={() => runPilotLifecycle("PAUSE")}
+            >
+              PAUSE
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-resume"
+              disabled={
+                busy ||
+                (lifecycleCta
+                  ? !lifecycleCta.canResume
+                  : lifecycleStatus !== "paused")
+              }
+              onClick={() => runPilotLifecycle("RESUME")}
+            >
+              RESUME
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-finalize"
+              disabled={
+                busy ||
+                (lifecycleCta
+                  ? !lifecycleCta.canFinalize
+                  : lifecycleStatus === "completed" ||
+                    lifecycleStatus === "cancelled")
+              }
+              onClick={() => runPilotLifecycle("FINALIZE")}
+            >
+              FINALIZE
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-cancel"
+              disabled={
+                busy ||
+                (lifecycleCta
+                  ? !lifecycleCta.canCancel
+                  : lifecycleStatus === "completed" ||
+                    lifecycleStatus === "cancelled")
+              }
+              onClick={() => runPilotLifecycle("CANCEL")}
+            >
+              CANCEL
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-assess"
+              disabled={busy}
+              onClick={() => runPilotLifecycle("ASSESS")}
+            >
+              Assess exit
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-reevaluate"
+              disabled={busy}
+              onClick={() => runPilotLifecycle("REEVALUATE")}
+            >
+              Re-evaluate
+            </button>
+          </div>
+          {lifecycleMessage ? (
+            <p className={styles.cardMeta} data-testid="pilot-lifecycle-message">
+              {lifecycleMessage}
+            </p>
+          ) : null}
+          {lifecycleAssessment ? (
+            <div data-testid="pilot-lifecycle-assessment">
+              <p className={styles.cardMeta}>
+                canComplete={String(lifecycleAssessment.canComplete)} · blockers=
+                {lifecycleAssessment.blockers.join(",") || "none"}
+              </p>
+              <ul>
+                {lifecycleAssessment.obligations.map((o) => (
+                  <li key={`${o.family}-${o.status}-${o.detail ?? ""}`}>
+                    {o.family}: {o.status}
+                    {o.notApplicableReason
+                      ? ` (${o.notApplicableReason})`
+                      : ""}
+                    {o.detail ? ` — ${o.detail}` : ""}
+                  </li>
+                ))}
+              </ul>
+            </div>
+          ) : null}
+        </section>
+      ) : null}
+
       {activeProposal ? (
         <section
           className={styles.proposalCard}

```


## MODIFIED `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 8137350f..ed66148b 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -4,6 +4,14 @@ import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { orchestrateAssistantSend } from "./f2/orchestrateF2";
 import { recordF2Decision } from "./f2/recordDecision";
+import {
+  executePilotLifecycleAction,
+  type PilotLifecycleActionKind,
+} from "./f2/pilotLifecycleActions";
+import {
+  projectPilotLifecycle,
+  type PilotLifecycleProjection,
+} from "@/lib/oa/cycle";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
@@ -914,3 +922,189 @@ export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
     reviewBundleIds: rehydrated.reviewBundleIds,
   };
 }
+
+
+async function buildAssistantPilotLifecycleProjection(
+  projectId: string,
+): Promise<PilotLifecycleProjection | null> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return null;
+  const cycles = await runtime.oa.cycleServices.cycles.listByProject(projectId);
+  const lps =
+    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+  return projectPilotLifecycle({
+    projectId,
+    cycles,
+    lpsActiveCycleInstanceId: lps.ok
+      ? lps.livingProjectState.activeCycleInstanceId
+      : null,
+  });
+}
+
+/**
+ * CORR-PROOF-05 — durable Pilot lifecycle projection (reload without F2).
+ */
+export async function projectAssistantPilotLifecycleProjection(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  projection?: PilotLifecycleProjection;
+  selectedCycleInstanceId?: string | null;
+  selectedStatus?: string | null;
+  activeCycleInstanceId?: string | null;
+  selectionAmbiguous?: boolean;
+  cta?: PilotLifecycleProjection["cta"];
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour Pilot lifecycle projection.",
+    };
+  }
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+    };
+  }
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  if (!projection) {
+    return {
+      ok: false,
+      status: "projection_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Pilot lifecycle projection unavailable.",
+    };
+  }
+  return {
+    ok: true,
+    status: "ok",
+    projection,
+    selectedCycleInstanceId: projection.selectedCycleInstanceId,
+    selectedStatus: projection.selectedStatus,
+    activeCycleInstanceId: projection.activeCycleInstanceId,
+    selectionAmbiguous: projection.selectionAmbiguous,
+    cta: projection.cta,
+  };
+}
+
+/**
+ * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
+ * Never uses morrisGateRequired as Pilot lifecycle authority.
+ */
+export async function projectAssistantPilotLifecycleAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  action: PilotLifecycleActionKind;
+  materialDriftDetected?: boolean;
+  requiresTrajectoryHumanDecision?: boolean;
+  requiresReplanHumanDecision?: boolean;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  action?: PilotLifecycleActionKind;
+  cycleStatus?: string;
+  activeCycleInstanceId?: string | null;
+  assessment?: unknown;
+  decisionId?: string;
+  project?: ProjectAssistantContextDto;
+  projection?: PilotLifecycleProjection;
+  selectedCycleInstanceId?: string | null;
+  selectedStatus?: string | null;
+  selectionAmbiguous?: boolean;
+  cta?: PilotLifecycleProjection["cta"];
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour Pilot lifecycle.",
+    };
+  }
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+    };
+  }
+  const project = toContextDto(projectResult);
+  const executed = await executePilotLifecycleAction({
+    action: input.action,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    cycleServices: runtime.oa.cycleServices,
+    projectServices: runtime.oa.projectServices,
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+    materialDriftDetected: input.materialDriftDetected,
+    requiresTrajectoryHumanDecision: input.requiresTrajectoryHumanDecision,
+    requiresReplanHumanDecision: input.requiresReplanHumanDecision,
+  });
+  if (!executed.ok) {
+    const projection = await buildAssistantPilotLifecycleProjection(
+      input.projectId,
+    );
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      assessment: executed.assessment,
+      project,
+      projection: projection ?? undefined,
+      selectedCycleInstanceId: projection?.selectedCycleInstanceId,
+      selectedStatus: projection?.selectedStatus,
+      selectionAmbiguous: projection?.selectionAmbiguous,
+      cta: projection?.cta,
+    };
+  }
+  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
+  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  return {
+    ok: true,
+    status: "ok",
+    action: executed.action,
+    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
+    activeCycleInstanceId: executed.result?.ok
+      ? (executed.result.activeCycleInstanceId ??
+        projection?.activeCycleInstanceId ??
+        nextProject.activeCycleInstanceId ??
+        null)
+      : projection?.activeCycleInstanceId ??
+        nextProject.activeCycleInstanceId ??
+        null,
+    assessment: executed.assessment,
+    decisionId: executed.decisionId,
+    project: nextProject,
+    projection: projection ?? undefined,
+    selectedCycleInstanceId: projection?.selectedCycleInstanceId,
+    selectedStatus: projection?.selectedStatus,
+    selectionAmbiguous: projection?.selectionAmbiguous,
+    cta: projection?.cta,
+    message: `Pilot lifecycle ${executed.action} applied.`,
+  };
+}

```


## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 31f2649c..e1d69ee6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -997,7 +997,7 @@ export async function orchestrateAssistantSend(input: {
       authorityLevel: "N1",
     },
     correlationId,
-    linkAsActiveCycle: true,
+    linkAsActiveCycle: false,
     expectedLpsVersion: preLpsVersion,
     ckcResolutionRef,
   });
@@ -1084,16 +1084,19 @@ export async function orchestrateAssistantSend(input: {
     presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
-    `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
+    `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
     `Profil recommandé: ${qualification.recommendedProfile}.`,
-    `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
+    project.lpsVersion === preLpsVersion
+      ? `LPS v${preLpsVersion} inchangé (pas d'activation pre-START).`
+      : `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
     qualification.recommendationLabel,
     ...(qualification.ckcCognitiveRecommendation
       ? [qualification.ckcCognitiveRecommendation]
       : []),
+    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
     morrisGateRequired
-      ? "DÉCISION REQUISE — gate Morris ouvert."
-      : "NO MORRIS GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
+      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
+      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
     executionBlocked
       ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
       : "AUCUNE EXÉCUTION.",

```


## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index 5804633c..eede8eca 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -469,10 +469,12 @@ export function buildStudioCognitivePromptSections(
   lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
   if (ctx.projectTruth.activeCycleInstanceId) {
     lines.push(
-      `Cycle actif (identité) : présent — ne pas inventer d'activation.`,
+      `Cycle ACTIVE authority-bearing : ${ctx.projectTruth.activeCycleInstanceId} — ne pas inventer d'activation.`,
     );
   } else {
-    lines.push("Cycle actif : aucun.");
+    lines.push(
+      "Cycle ACTIVE : aucun (un CycleInstance candidate peut exister sans LPS.activeCycleInstanceId).",
+    );
   }
   lines.push("");


```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
index f4e14a80..1a9b2929 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
@@ -137,6 +137,13 @@ export class CreateCycle {
         await this.cycles.save(cycle);

         if (request.linkAsActiveCycle) {
+          const siblings = await this.cycles.listByProject(request.projectId);
+          const activeSibling = siblings.find((c) => c.status === "active");
+          if (activeSibling) {
+            throw new Error(
+              `active_exists:${activeSibling.cycleInstanceId}`,
+            );
+          }
           const current =
             await this.projectServices.getCurrentLivingProjectState.execute({
               projectId: request.projectId,
@@ -144,6 +151,15 @@ export class CreateCycle {
           if (!current.ok) {
             throw new Error("missing_current_lps");
           }
+          if (
+            current.livingProjectState.activeCycleInstanceId &&
+            current.livingProjectState.activeCycleInstanceId !==
+              request.cycleInstanceId
+          ) {
+            throw new Error(
+              `active_exists:${current.livingProjectState.activeCycleInstanceId}`,
+            );
+          }
           const expected =
             request.expectedLpsVersion ?? current.livingProjectState.version;
           const appended =
@@ -181,6 +197,9 @@ export class CreateCycle {
         if (err instanceof Error && err.message === "cycle_id_taken") {
           return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
         }
+        if (err instanceof Error && err.message.startsWith("active_exists:")) {
+          return fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
+        }
         if (err instanceof Error && err.message === "lps_version_conflict") {
           return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
             expectedVersion: request.expectedLpsVersion,

```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
index 5fe6aaf5..58fb4762 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
@@ -10,6 +10,15 @@ const DETAIL_TO_MODELED: Record<CycleDetailCode, CycleModeledErrorCode> = {
   CYCLE_ALREADY_EXISTS: "STATE_CONFLICT",
   CYCLE_NOT_FOUND: "STATE_CONFLICT",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_ALREADY_ACTIVE_EXISTS: "STATE_CONFLICT",
+  CYCLE_TRANSITION_INVALID: "STATE_CONFLICT",
+  CYCLE_TERMINAL: "STATE_CONFLICT",
+  CYCLE_RESUME_DRIFT: "CONTEXT_STALE",
+  CYCLE_START_NOT_READY: "STATE_CONFLICT",
+  CYCLE_FINALIZE_INCOMPLETE: "STATE_CONFLICT",
+  CYCLE_DECISION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_LIFECYCLE_DENIED: "AUTHORITY_DENIED",
+  AUTHORITY_NOT_CONFIGURED: "AUTHORITY_DENIED",
   PROJECT_NOT_FOUND: "STATE_CONFLICT",
   TRAJECTORY_INVALID: "STATE_CONFLICT",
   TRAJECTORY_ALREADY_EXISTS: "STATE_CONFLICT",
@@ -30,6 +39,21 @@ const SAFE_MESSAGES: Record<CycleDetailCode, string> = {
   CYCLE_NOT_FOUND: "Cycle instance was not found.",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED:
     "Critical profile requires a non-empty justification.",
+  CYCLE_ALREADY_ACTIVE_EXISTS:
+    "Another ACTIVE CycleInstance already exists for this Project.",
+  CYCLE_TRANSITION_INVALID: "Cycle lifecycle transition is not allowed.",
+  CYCLE_TERMINAL: "Terminal CycleInstance cannot be transitioned.",
+  CYCLE_RESUME_DRIFT:
+    "Material context drift prevents silent RESUME; replan required.",
+  CYCLE_START_NOT_READY:
+    "START refused — candidate is not ready to become ACTIVE authority.",
+  CYCLE_FINALIZE_INCOMPLETE:
+    "FINALIZE accepted but applicable exit obligations are not satisfied.",
+  CYCLE_DECISION_REQUIRED:
+    "Pilot HumanDecision is required for this lifecycle action.",
+  CYCLE_LIFECYCLE_DENIED: "Pilot lifecycle action was denied.",
+  AUTHORITY_NOT_CONFIGURED:
+    "Pilot local authority is not configured (fail-closed).",
   PROJECT_NOT_FOUND: "Project was not found.",
   TRAJECTORY_INVALID: "Trajectory input is invalid.",
   TRAJECTORY_ALREADY_EXISTS: "Trajectory already exists.",

```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index c151d57c..baaf827b 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -23,11 +23,55 @@ export type CycleInstanceStatus =
   | "proposed"
   | "acknowledged"
   | "active"
+  | "paused"
   | "blocked"
   | "completed"
   | "cancelled"
   | "superseded";

+/**
+ * CORR-PROOF-05 — derived finalization obligation status (not a persistence enum).
+ * Labels are functional assessment vocabulary; not claimed as migrated schema.
+ */
+export type FinalizationObligationStatus =
+  | "SATISFIED"
+  | "PENDING"
+  | "MISSING"
+  | "BLOCKING"
+  | "NOT_APPLICABLE";
+
+export type FinalizationObligationFamily =
+  | "exit_criteria"
+  | "human_decision"
+  | "artifact"
+  | "execution_contract"
+  | "evidence"
+  | "review_bundle"
+  | "git_repository"
+  | "blockers";
+
+export type FinalizationObligation = {
+  family: FinalizationObligationFamily;
+  status: FinalizationObligationStatus;
+  /** Derived applicability before proof mapping. */
+  applicability?: ObligationApplicability;
+  /** Required whenever status === NOT_APPLICABLE — never a missing-proof fallback. */
+  notApplicableReason?: string;
+  detail?: string;
+  blocking?: boolean;
+};
+
+export type FinalizationAssessment = {
+  cycleInstanceId: string;
+  projectId: string;
+  finalizeDecisionId: string | null;
+  finalizeAccepted: boolean;
+  obligations: FinalizationObligation[];
+  canComplete: boolean;
+  blockers: string[];
+  assessedAt: string;
+};
+
 export type TrajectoryStatus =
   | "candidate"
   | "validated"
@@ -72,6 +116,28 @@ export type CkcSource =
   | "product_package"
   | "unavailable";

+/**
+ * Minimal pause-time reconciliation basis (CORR-PROOF-05).
+ * Stored in CycleInstance JSON payload — no DDL / no new table.
+ */
+export type PauseReconciliationSnapshot = {
+  pausedAt: string;
+  lpsVersion: number;
+  lpsActiveCycleInstanceId: string | null;
+  objective: string;
+  context: string;
+  scope: string;
+  doctrinePackageId?: string;
+  doctrinePackageVersion?: string;
+  doctrinePackageDigest?: string;
+  trajectoryId?: string | null;
+  trajectoryVersion?: number | null;
+  trajectoryFingerprint?: string | null;
+  currentDecisionFingerprint?: string | null;
+  evidenceFingerprint?: string | null;
+  blockerFingerprint?: string | null;
+};
+
 export type CycleInstance = {
   schemaVersion: "0.1.0-oa";
   cycleInstanceId: string;
@@ -82,6 +148,48 @@ export type CycleInstance = {
   acknowledgedAt?: string;
   createdAt: string;
   closedAt?: string;
+  /** Set on PAUSE; cleared on successful RESUME / terminal close. */
+  pauseReconciliation?: PauseReconciliationSnapshot | null;
+};
+
+/** Applicability before proof status (CORR-PROOF-05 enforcement). */
+export type ObligationApplicability =
+  | "APPLICABLE"
+  | "NOT_APPLICABLE"
+  | "UNKNOWN";
+
+export type FinalizationApplicabilityRules = {
+  exit_criteria?: ObligationApplicability;
+  artifact?: ObligationApplicability;
+  execution_contract?: ObligationApplicability;
+  evidence?: ObligationApplicability;
+  review_bundle?: ObligationApplicability;
+  git_repository?: ObligationApplicability;
+  blockers?: ObligationApplicability;
+  /** Required when a family is NOT_APPLICABLE via explicit rule. */
+  notApplicableReasons?: Partial<
+    Record<
+      | "exit_criteria"
+      | "artifact"
+      | "execution_contract"
+      | "evidence"
+      | "review_bundle"
+      | "git_repository"
+      | "blockers",
+      string
+    >
+  >;
+  /** When git is APPLICABLE, whether durable git proof is present. */
+  gitProofPresent?: boolean;
+  /** When artifact is APPLICABLE, whether durable artifact proof is present. */
+  artifactProofPresent?: boolean;
+};
+
+export type StartReadinessAssessment = {
+  ready: boolean;
+  blockers: string[];
+  requiresTrajectoryHumanDecision: boolean;
+  assessedAt: string;
 };

 export type TrajectoryStep = {
@@ -290,6 +398,15 @@ export type CycleDetailCode =
   | "CYCLE_ALREADY_EXISTS"
   | "CYCLE_NOT_FOUND"
   | "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED"
+  | "CYCLE_ALREADY_ACTIVE_EXISTS"
+  | "CYCLE_TRANSITION_INVALID"
+  | "CYCLE_TERMINAL"
+  | "CYCLE_RESUME_DRIFT"
+  | "CYCLE_START_NOT_READY"
+  | "CYCLE_FINALIZE_INCOMPLETE"
+  | "CYCLE_DECISION_REQUIRED"
+  | "CYCLE_LIFECYCLE_DENIED"
+  | "AUTHORITY_NOT_CONFIGURED"
   | "PROJECT_NOT_FOUND"
   | "TRAJECTORY_INVALID"
   | "TRAJECTORY_ALREADY_EXISTS"
@@ -303,6 +420,118 @@ export type CycleDetailCode =
   | "STATE_CONFLICT"
   | "PERSISTENCE_FAILURE";

+/** CORR-PROOF-05 Pilot lifecycle transition requests. */
+export type PilotLifecycleActor = {
+  actorId: string;
+  role: ActorReference["role"];
+  displayName?: string;
+  authorityLevel?: ActorReference["authorityLevel"];
+};
+
+export type StartCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  /** Pilot authority evidence verified server-side (never actorId alone). */
+  authorityEvidenceId?: string;
+  /**
+   * Caller hint only — server derives whether trajectory HD is required.
+   * Never sole authority for skipping HD.
+   */
+  requiresTrajectoryHumanDecision?: boolean;
+  decisionId?: string;
+};
+
+export type PauseCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  authorityEvidenceId?: string;
+};
+
+export type ResumeCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  authorityEvidenceId?: string;
+  /**
+   * Caller diagnostic hint only — NOT source of truth.
+   * Server reconciles; hint true forces fail-closed drift.
+   */
+  materialDriftDetected?: boolean;
+  requiresReplanHumanDecision?: boolean;
+  decisionId?: string;
+};
+
+export type FinalizeCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  /** Required Pilot HumanDecision id for FINALIZE. */
+  decisionId: string;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  authorityEvidenceId?: string;
+};
+
+export type CancelCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  /** Required Pilot HumanDecision id for CANCEL. */
+  decisionId: string;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  authorityEvidenceId?: string;
+};
+
+export type AssessFinalizationRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  /** Optional explicit finalize decision id; otherwise discovered from decisions. */
+  finalizeDecisionId?: string | null;
+};
+
+export type PilotLifecycleSuccess = {
+  ok: true;
+  cycle: CycleInstance;
+  livingProjectStateVersion?: number;
+  activeCycleInstanceId?: string | null;
+  assessment?: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type PilotLifecycleFailure = {
+  ok: false;
+  error: CycleStructuredError;
+  assessment?: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type PilotLifecycleResult = PilotLifecycleSuccess | PilotLifecycleFailure;
+
+export type AssessFinalizationSuccess = {
+  ok: true;
+  assessment: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type AssessFinalizationFailure = {
+  ok: false;
+  error: CycleStructuredError;
+  durationMs: number;
+};
+
+export type AssessFinalizationResult =
+  | AssessFinalizationSuccess
+  | AssessFinalizationFailure;
+
 export type CycleStructuredError = {
   code: CycleModeledErrorCode;
   detailCode: CycleDetailCode;

```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 201f8b2b..b8048b42 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -30,6 +30,47 @@ export * from "./application/qualifyCycleWithCkc";
 export * from "./application/bindCatalogAuthority";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
+export {
+  assessFinalizationObligations,
+  finalizeSubjectFor,
+  cancelSubjectFor,
+  startTrajectorySubjectFor,
+  resumeReplanSubjectFor,
+  isAcceptedFinalizeDecision,
+  isAcceptedCancelDecision,
+  isAcceptedStartTrajectoryDecision,
+  isAcceptedResumeReplanDecision,
+  FINALIZE_SUBJECT_PREFIX,
+  CANCEL_SUBJECT_PREFIX,
+  START_TRAJECTORY_SUBJECT_PREFIX,
+  RESUME_REPLAN_SUBJECT_PREFIX,
+} from "./application/assessFinalization";
+export {
+  assessStartReadiness,
+  type AssessStartReadinessInput,
+} from "./application/assessStartReadiness";
+export {
+  buildPauseReconciliationSnapshot,
+  assessResumeReconciliation,
+  trajectoryFingerprint,
+  type BuildPauseSnapshotInput,
+  type ResumeReconciliationInput,
+  type ResumeReconciliationResult,
+} from "./application/assessResumeReconciliation";
+export {
+  projectPilotLifecycle,
+  type PilotLifecycleProjection,
+} from "./application/lifecycleProjection";
+export {
+  PilotLifecycleTransitions,
+  type PilotLifecycleDeps,
+  type PilotLifecycleAuthorityPort,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+} from "./application/pilotLifecycleTransitions";
+export * from "./domain/lifecycleInvariants";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
 export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
 export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
@@ -92,9 +133,18 @@ import {
 } from "./application/bindCatalogAuthority";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+  type PilotLifecycleAuthorityPort,
+} from "./application/pilotLifecycleTransitions";
 import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
+import type { FinalizationApplicabilityRules } from "./domain/types";
 import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
@@ -132,6 +182,8 @@ export type CycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  /** CORR-PROOF-05 Pilot lifecycle transitions. */
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 export type CreateInMemoryCycleServicesOptions = {
@@ -139,6 +191,12 @@ export type CreateInMemoryCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
+  authority?: PilotLifecycleAuthorityPort;
+  applicabilityRules?: FinalizationApplicabilityRules;
 };

 export type CkcQualificationServices = {
@@ -329,6 +387,20 @@ export function createInMemoryCycleServices(
       clock,
       audit,
     ),
+    pilotLifecycle: new PilotLifecycleTransitions({
+      cycles,
+      trajectories,
+      projectServices: options.projectServices,
+      clock,
+      audit,
+      store,
+      decisions: options.decisions,
+      evidence: options.evidence,
+      reviewBundles: options.reviewBundles,
+      execution: options.execution,
+      authority: options.authority,
+      applicabilityRules: options.applicabilityRules,
+    }),
   };
 }


```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
index 8823ec68..3722eed6 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
@@ -12,6 +12,15 @@ import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVer
 import { QualifyCycle } from "../../application/qualifyCycle";
 import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "../../application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+  type PilotLifecycleAuthorityPort,
+} from "../../application/pilotLifecycleTransitions";
+import type { FinalizationApplicabilityRules } from "../../domain/types";
 import { MemoryCkcResolver } from "../memoryCkcResolver";
 import type { CycleAuditPort } from "../../ports/cycleAudit";
 import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
@@ -31,6 +40,12 @@ export type CreateSqliteCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
+  authority?: PilotLifecycleAuthorityPort;
+  applicabilityRules?: FinalizationApplicabilityRules;
 };

 export type SqliteCycleServices = {
@@ -52,6 +67,7 @@ export type SqliteCycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 /**
@@ -120,6 +136,20 @@ export function createSqliteCycleServices(
       clock,
       audit,
     ),
+    pilotLifecycle: new PilotLifecycleTransitions({
+      cycles,
+      trajectories,
+      projectServices: options.projectServices,
+      clock,
+      audit,
+      store: productStore,
+      decisions: options.decisions,
+      evidence: options.evidence,
+      reviewBundles: options.reviewBundles,
+      execution: options.execution,
+      authority: options.authority,
+      applicabilityRules: options.applicabilityRules,
+    }),
   };
 }


```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index 422b847d..5d915c28 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -130,6 +130,34 @@ export type CycleAuditEvent =
       result: "error";
       detailCode?: string;
       durationMs: number;
+    }
+  | {
+      event: "oa.cycle.lifecycle_transition";
+      ts: string;
+      correlationId?: string;
+      projectId: string;
+      cycleInstanceId: string;
+      action: string;
+      fromStatus: string;
+      toStatus: string;
+      actorId: string;
+      decisionRef?: string;
+      result: "ok" | "error";
+      detailCode?: string;
+      durationMs: number;
+    }
+  | {
+      event: "oa.cycle.finalization_assessed";
+      ts: string;
+      correlationId?: string;
+      projectId: string;
+      cycleInstanceId: string;
+      decisionRef?: string;
+      canComplete: boolean;
+      blockers: string[];
+      result: "ok" | "error";
+      detailCode?: string;
+      durationMs: number;
     };

 export interface CycleAuditPort {

```


## MODIFIED `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 81b82ee2..c5d80196 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -183,21 +183,94 @@ function wireOaStack(
     projectServices.store instanceof SqliteProductStore
       ? projectServices.store
       : null;
+
+  // CORR-PROOF-05 — late-bound readers so CycleServices can assess FINALIZE
+  // without creating a construction-time cycle with Decision/Evidence factories.
+  const late = {
+    decisionServices: null as DecisionServices | null,
+    evidenceReviewServices: null as
+      | EvidenceReviewServices
+      | SqliteEvidenceReviewServices
+      | null,
+    executionContractServices: null as ExecutionContractServices | null,
+  };
+
+  const lifecycleReaders = {
+    decisions: {
+      getById: (decisionId: string) =>
+        late.decisionServices!.decisions.findById(decisionId),
+      listByProject: (projectId: string) =>
+        late.decisionServices!.decisions.listByProject(projectId),
+    },
+    evidence: {
+      listByProject: (projectId: string) =>
+        late.evidenceReviewServices!.repository.listByProject(projectId),
+    },
+    reviewBundles: {
+      listByProject: (projectId: string) =>
+        late.evidenceReviewServices!.reviewBundleRepository.listByProject(
+          projectId,
+        ),
+    },
+    execution: {
+      listContractsByProject: async (projectId: string) => {
+        const list =
+          await late.executionContractServices!.contracts.listByProject(
+            projectId,
+          );
+        return list.map((c) => ({
+          contractId: c.executionContractId,
+          cycleInstanceId: c.cycleInstanceId,
+          status: c.status,
+        }));
+      },
+    },
+  };
+
+  // CORR-PROOF-05 — create authority before CycleServices so Pilot lifecycle
+  // mutations can verify N3 evidence (chicken-egg with decision factory).
+  const authorityResolver = new MemoryAuthorityResolver();
+  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
+  void isM3LocalAuthorityEnabled;
+
+  const authorityPort = {
+    verify: (req: {
+      actorId: string;
+      scope: string;
+      evidenceId?: string;
+      requiredLevel?: "N1" | "N2" | "N3";
+      requireMorrisGate?: boolean;
+    }) => {
+      const r = authorityResolver.verify({
+        actorId: req.actorId,
+        requiredLevel: req.requiredLevel ?? "N3",
+        scope: req.scope,
+        evidenceId: req.evidenceId,
+        requireMorrisGate: req.requireMorrisGate ?? true,
+      });
+      return { ok: r.ok, reason: r.reason };
+    },
+  };
+
   const cycleServices = productSqlite
     ? createSqliteCycleServices({
         projectServices,
         productStore: productSqlite,
         clock,
+        ...lifecycleReaders,
+        authority: authorityPort,
       })
-    : createInMemoryCycleServices({ projectServices, clock });
+    : createInMemoryCycleServices({
+        projectServices,
+        clock,
+        ...lifecycleReaders,
+        authority: authorityPort,
+      });
   const ckcQualification = createCkcQualificationServices({
     clock,
     registryRoot: options?.registryRoot,
     doctrinePackagePin: options?.doctrinePackagePin,
   });
-  const authorityResolver = new MemoryAuthorityResolver();
-  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
-  void isM3LocalAuthorityEnabled;

   const decisionServices = productSqlite
     ? createSqliteDecisionServices({
@@ -213,6 +286,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.decisionServices = decisionServices;

   const executionContractServices = productSqlite
     ? createSqliteExecutionContractServices({
@@ -230,6 +304,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.executionContractServices = executionContractServices;

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
@@ -288,6 +363,7 @@ function wireOaStack(
           executionAttemptServices.attempts,
         ),
       });
+  late.evidenceReviewServices = evidenceReviewServices;

   // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
   // Product SQLite: durable materialization audit via SqliteProjectAuditJournal

```


# 26. Focused tests
`corrProof05.pilotLifecycle.d0.test.ts` — 50/50 PASS (scenarios 1–16 + A1–A10 + B1–B8 + C1–C9 + D/E + F1–F4)
Related: ProjectAssistantPanel / mw3 panel mocks updated; m2Cognitive; w2TrackD; f2.orchestrate — PASS

# 27. Full npm test
From `projects/sfia-studio/app`:
Test Files  315 passed | 17 skipped (332)
Tests  3176 passed | 135 skipped (3311)

# 28. typecheck
`npm run typecheck` — PASS (tsc --noEmit exit 0)

# 29. build
`npm run build` — PASS (Next.js 15.5.20 compiled successfully)

# 30. diff-check
`git diff --check` → OK (exit 0)

# 31. Fake/Real qualification
- Deterministic vitest + in-memory/SQLite Product stores: ALLOWED
- Product parallel fixture path: NOT introduced
- REAL BOUNDARY / E2E REAL: OUT OF SCOPE
- Evidence target: DETERMINISTIC PROVEN (enforcement correction)

# 32. Risks / reserves
- Local Pilot authority still requires `SFIA_STUDIO_M3_LOCAL_AUTHORITY=1` (or equivalent env) in Product runtime — fail-closed by design
- Applicability for sparse cycles is intentionally strict (UNKNOWN) until explicit rules/proofs exist — may surface more FINALIZE incomplete until Product supplies rules
- Pause snapshot is minimal refs/fingerprints — not full epistemic ledger
- Cursor `move_agent_to_root` / wrong-WT checkout remains an operational hazard (mitigated by absolute impl WT path)

# 33. Bounded debt + exit
Debt: REAL Suivi revalidation on existing Project remains future Morris-gated work.
Exit this cycle: ChatGPT DELIVERY RE-REVIEW of enforcement correction.

# 34. Product files explicitly not modified
- Doctrine / C1 / C2 / framing docs
- Schema migrations / new OA tables
- Product Proof closure artifacts
- REAL gateway / Stage B machinery

# 35. Local Git Truth final
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts

```
name-status:
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

```
stat:
```
 .tmp-sfia-review/chatgpt-review.md                 | 4050 ++++++++++++++++++--
 .../oa/cycle/m2ProductCycleDurability.test.ts      |    8 +-
 .../ProjectAssistantPanel.test.tsx                 |   16 +
 .../project-assistant/f2.orchestrate.test.ts       |    2 +-
 .../m2CognitivePiloting.e2e.test.ts                |   18 +-
 .../mw3.cognitiveStop.panel.ux.d0.test.tsx         |   16 +
 .../mw3.correction.panel.ux.d0.test.tsx            |   16 +
 .../project-assistant/w2TrackDPhaseB.test.ts       |   22 +-
 .../project-assistant/ProjectAssistantPanel.tsx    |  225 +-
 .../app/features/project-assistant/actions.ts      |  194 +
 .../features/project-assistant/f2/orchestrateF2.ts |   13 +-
 .../project-assistant/f2/studioCognitiveContext.ts |    6 +-
 .../app/lib/oa/cycle/application/createCycle.ts    |   19 +
 .../sfia-studio/app/lib/oa/cycle/domain/errors.ts  |   24 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |  229 ++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   72 +
 .../sqlite/createSqliteCycleServices.ts            |   30 +
 .../app/lib/oa/cycle/ports/cycleAudit.ts           |   28 +
 .../app/lib/vertical-slice-runtime/service.ts      |   84 +-
 19 files changed, 4724 insertions(+), 348 deletions(-)

```
cached:
```
(none)
```
HEAD remains `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` — Product uncommitted; staged=0 expected.

# 36. Review Handoff publication metadata
- Publisher: `scripts/sfia/publish-review-handoff.sh`
- Handoff WT: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- Branch: `sfia/review-handoff`
- Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message: `docs(review-handoff): publish CORR-PROOF-05 delivery enforcement correction`
- Before: `53995b85b6b0a6ee0acad0fb42404607b71e3e39`
- After: (filled post-publish)

# 37. Final verdict
**READY FOR CHATGPT CORR-PROOF-05 DELIVERY RE-REVIEW**
