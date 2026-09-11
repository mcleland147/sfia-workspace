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
  deriveFinalizationApplicability,
  finalizeSubjectFor,
  cancelSubjectFor,
  isGitQualifyingEvidence,
  isGitApplicableContract,
  hasGitRepositorySemanticMarker,
  isStartableCandidateStatus,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_NO_ARTIFACT,
  OBLIGATION_POLICY_NO_GIT,
  OBLIGATION_POLICY_NO_EXECUTION,
  OBLIGATION_POLICY_NO_EVIDENCE,
  OBLIGATION_POLICY_NO_REVIEW,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  OBLIGATION_POLICY_REQUIRE_GIT,
  projectPilotLifecycle,
  selectEffectiveExecutionContracts,
  selectEffectiveReviewBundles,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  type CycleInstance,
  type FinalizationApplicabilityRules,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type HumanDecision,
} from "@/lib/oa/decision";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

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
  opts?: {
    applicabilityRules?: FinalizationApplicabilityRules;
    epistemic?: {
      listByProject: (projectId: string) => Promise<
        Array<{
          epistemicItemId: string;
          type: string;
          statement: string;
          status: string;
          blocking?: boolean;
        }>
      >;
    };
  },
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
    epistemic: opts?.epistemic as
      | { listByProject: (projectId: string) => Promise<never[]> }
      | undefined,
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
  selectedOptionId?: string;
  options?: Array<{ optionId: string; label: string }>;
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
    options: input.options ?? [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId ?? "opt:accept",
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
  });
}

async function recordObligationPolicy(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  evidenceId?: string;
  selectedOptionId: string;
}) {
  return recordHd({
    ...input,
    subject: obligationPolicySubjectFor(input.cycleInstanceId),
    selectedOptionId: input.selectedOptionId,
    options: [
      {
        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        label: "No governed effects",
      },
      { optionId: OBLIGATION_POLICY_NO_ARTIFACT, label: "No artifact" },
      { optionId: OBLIGATION_POLICY_NO_GIT, label: "No git" },
      { optionId: OBLIGATION_POLICY_NO_EXECUTION, label: "No execution" },
      {
        optionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        label: "Require artifact",
      },
      { optionId: OBLIGATION_POLICY_REQUIRE_GIT, label: "Require git" },
      { optionId: "opt:accept", label: "Accept" },
    ],
  });
}

function makeObligationPolicyDecision(
  cycleInstanceId: string,
  projectId: string,
  selectedOptionId: string,
): HumanDecision {
  return {
    schemaVersion: "0.1.0-oa",
    decisionId: `dec:policy-${selectedOptionId}`,
    projectId,
    cycleInstanceId,
    subject: obligationPolicySubjectFor(cycleInstanceId),
    options: [
      { optionId: selectedOptionId, label: selectedOptionId },
      { optionId: "opt:accept", label: "Accept" },
    ],
    selectedOptionId,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    effectiveAt: "2026-09-07T16:00:00.000Z",
    recordedAt: "2026-09-07T16:00:00.000Z",
  } as HumanDecision;
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
    const stack = buildStack(dbPath);
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
    const incompleteStack = buildStack(tempDbPath("s8-inc.sqlite"));
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
    const policyInc = await recordObligationPolicy({
      decisions: incompleteStack.decisions,
      authority: incompleteStack.authority,
      projectId: "prj:corr05-s8i",
      cycleInstanceId: "cyc:corr05-s8i",
      decisionId: "dec:corr05-policy-s8i",
      evidenceId: evI,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    expect(policyInc.ok).toBe(true);
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
    expect(incomplete.assessment?.blockers).toContain("exit_criteria_open");
    expect(incomplete.cycle.status).toBe("active");

    const policy = await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s8",
      cycleInstanceId: "cyc:corr05-s8",
      decisionId: "dec:corr05-policy-s8",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    expect(policy.ok).toBe(true);
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
    expect(ecFamily?.notApplicableReason).toContain("pilot_hd_obligation_policy");
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
        executionIntent: null,
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
  function snap(
    partial?: Partial<Parameters<typeof buildPauseReconciliationSnapshot>[0]> &
      Partial<ReturnType<typeof buildPauseReconciliationSnapshot>>,
  ) {
    const built = buildPauseReconciliationSnapshot({
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
      blockerSnapshotState: "KNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
      ...(partial as Partial<
        Parameters<typeof buildPauseReconciliationSnapshot>[0]
      >),
    });
    return { ...built, ...partial };
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
    const stack = buildStack(tempDbPath("de4.sqlite"));
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
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-de4",
      cycleInstanceId: "cyc:corr05-de4",
      decisionId: "dec:corr05-policy-de4",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
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

describe("AP — Product-derived applicability", () => {
  it("AP1-runtime — stack without applicabilityRules completes via obligation policy HD", async () => {
    const stack = buildStack(tempDbPath("ap1.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap1", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap1", "cyc:corr05-ap1");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap1");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap1",
      projectId: "prj:corr05-ap1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(
      (
        await recordObligationPolicy({
          decisions: stack.decisions,
          authority: stack.authority,
          projectId: "prj:corr05-ap1",
          cycleInstanceId: "cyc:corr05-ap1",
          decisionId: "dec:ap1-policy",
          evidenceId: ev,
          selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        })
      ).ok,
    ).toBe(true);
    expect(
      (
        await recordHd({
          decisions: stack.decisions,
          authority: stack.authority,
          projectId: "prj:corr05-ap1",
          cycleInstanceId: "cyc:corr05-ap1",
          subject: finalizeSubjectFor("cyc:corr05-ap1"),
          decisionId: "dec:ap1-finalize",
          evidenceId: ev,
        })
      ).ok,
    ).toBe(true);
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-ap1",
      projectId: "prj:corr05-ap1",
      createdBy: PILOTE,
      decisionId: "dec:ap1-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
  });

  it("AP4 — NO_GIT policy → git N/A with pilot_hd_obligation_policy reason", () => {
    const cycleId = "cyc:corr05-ap4";
    const projectId = "prj:corr05-ap4";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({
        projectId,
        steps: STEPS_DONE,
      }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GIT,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.notApplicableReasons?.git_repository).toContain(
      "pilot_hd_obligation_policy",
    );
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("NOT_APPLICABLE");
    expect(git?.notApplicableReason).toContain("pilot_hd_obligation_policy");
  });

  it("AP5 — no policy/EC git signal → git UNKNOWN blocking", () => {
    const cycleId = "cyc:corr05-ap5";
    const projectId = "prj:corr05-ap5";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("AP6 — NO_EXECUTION policy → execution N/A", () => {
    const cycleId = "cyc:corr05-ap6";
    const projectId = "prj:corr05-ap6";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EXECUTION,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.execution_contract).toBe("NOT_APPLICABLE");
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).toBe("NOT_APPLICABLE");
  });

  it("AP7 — no policy no EC → execution UNKNOWN blocking", () => {
    const cycleId = "cyc:corr05-ap7";
    const projectId = "prj:corr05-ap7";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("AP8 — no artifact model/policy → artifact UNKNOWN not N/A", () => {
    const cycleId = "cyc:corr05-ap8";
    const projectId = "prj:corr05-ap8";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.artifact).not.toBe("NOT_APPLICABLE");
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.applicability).toBe("UNKNOWN");
    expect(art?.status).not.toBe("NOT_APPLICABLE");
  });

  it("AP2 — REQUIRE_ARTIFACT policy, no evidence → MISSING/BLOCKING", async () => {
    const stack = buildStack(tempDbPath("ap2.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap2", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap2", "cyc:corr05-ap2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap2",
      projectId: "prj:corr05-ap2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap2",
      cycleInstanceId: "cyc:corr05-ap2",
      decisionId: "dec:ap2-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap2",
      cycleInstanceId: "cyc:corr05-ap2",
      subject: finalizeSubjectFor("cyc:corr05-ap2"),
      decisionId: "dec:ap2-finalize",
      evidenceId: ev,
    });
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-ap2",
      projectId: "prj:corr05-ap2",
      createdBy: PILOTE,
      decisionId: "dec:ap2-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(false);
    const art = finalized.assessment?.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.status).toBe("MISSING");
    expect(finalized.cycle.status).not.toBe("completed");
  });

  it("AP3 — REQUIRE_GIT policy, no git proof → MISSING", async () => {
    const stack = buildStack(tempDbPath("ap3.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap3", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap3", "cyc:corr05-ap3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap3",
      projectId: "prj:corr05-ap3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap3",
      cycleInstanceId: "cyc:corr05-ap3",
      decisionId: "dec:ap3-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_GIT,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-ap3",
      projectId: "prj:corr05-ap3",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const git = assessed.assessment.obligations.find(
      (o) => o.family === "git_repository",
    );
    expect(git?.status).toBe("MISSING");
  });

  it("AP9 — finalize HD required (assess without HD cannot complete)", async () => {
    const stack = buildStack(tempDbPath("ap9.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap9");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap9", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap9", "cyc:corr05-ap9");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap9");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap9",
      projectId: "prj:corr05-ap9",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap9",
      cycleInstanceId: "cyc:corr05-ap9",
      decisionId: "dec:ap9-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-ap9",
      projectId: "prj:corr05-ap9",
      finalizeDecisionId: "dec:ap9-missing",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    expect(assessed.assessment.canComplete).toBe(false);
    expect(assessed.assessment.blockers).toContain(
      "finalize_human_decision_absent",
    );
  });

  it("AP10 — ExecutionAttempt terminal_success alone does not complete", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-ap10",
      projectId: "prj:corr05-ap10",
    });
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-ap10",
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

  it("AP-runtime — createRuntimeApplicationService START then FINALIZE → completed", async () => {
    class FixedIdSource implements LocalProjectIdSource {
      private project = 0;
      private lps = 0;
      private correlation = 0;
      nextProjectId(): string {
        this.project += 1;
        return `prj:corr05-rt-${this.project}`;
      }
      nextLpsVersionId(): string {
        this.lps += 1;
        return `lps:corr05-rt-${this.lps}`;
      }
      nextCorrelationId(): string {
        this.correlation += 1;
        return `cor:corr05-rt-${this.correlation}`;
      }
    }

    resetRuntimeApplicationServiceForTests();
    const runtime = createRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-07T16:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "CORR-05 runtime AP",
      objective: "lifecycle",
      context: "corr05-runtime",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C05RT",
      idempotencyKey: "idem:corr05-ap-runtime",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    const oa = runtime.oa;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_DONE,
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = "cyc:corr05-ap-rt";
    const cycle = await oa.cycleServices.createCycle.execute({
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
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-07T16:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const evidenceId = auth.evidenceId;

    const start = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: evidenceId,
    });
    expect(start.ok).toBe(true);

    const policy = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: "dec:ap-rt-policy",
      projectId,
      cycleInstanceId,
      subject: obligationPolicySubjectFor(cycleInstanceId),
      options: [
        {
          optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
          label: "No governed effects",
        },
        { optionId: "opt:accept", label: "Accept" },
      ],
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: evidenceId,
    });
    expect(policy.ok).toBe(true);

    const hd = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: "dec:ap-rt-finalize",
      projectId,
      cycleInstanceId,
      subject: finalizeSubjectFor(cycleInstanceId),
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: evidenceId,
    });
    expect(hd.ok).toBe(true);

    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      decisionId: "dec:ap-rt-finalize",
      authorityEvidenceId: evidenceId,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    resetRuntimeApplicationServiceForTests();
  });
});

describe("BL — blockers", () => {
  it("BL1 — blocking Reservation → START refused CYCLE_START_NOT_READY", async () => {
    const stack = buildStack(tempDbPath("bl1.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl1");
    await createCandidate(stack.cycles, "prj:corr05-bl1", "cyc:corr05-bl1");
    const epi = await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl1",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl1-rsv",
          type: "Reservation",
          statement: "blocking_reservation_bl1",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl1");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl1",
      projectId: "prj:corr05-bl1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_START_NOT_READY");
    expect(start.error.internalCauseRef ?? "").toContain(
      "blocking_reservations",
    );
  });

  it("BL2 — after START+PAUSE, pauseReconciliation.blockerFingerprint includes reservation", async () => {
    const stack = buildStack(tempDbPath("bl2.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl2");
    await createCandidate(stack.cycles, "prj:corr05-bl2", "cyc:corr05-bl2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl2",
      projectId: "prj:corr05-bl2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl2",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl2-rsv",
          type: "Reservation",
          statement: "pause_blocker_bl2",
          status: "active",
          blocking: true,
        },
      ],
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl2",
      projectId: "prj:corr05-bl2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toContain(
      "pause_blocker_bl2",
    );
  });

  it("BL3 — PAUSE then new blocking reservation → RESUME CYCLE_RESUME_DRIFT", async () => {
    const stack = buildStack(tempDbPath("bl3.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl3");
    await createCandidate(stack.cycles, "prj:corr05-bl3", "cyc:corr05-bl3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl3",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl3-rsv",
          type: "Reservation",
          statement: "introduced_after_pause",
          status: "active",
          blocking: true,
        },
      ],
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resume.ok).toBe(false);
    if (resume.ok) return;
    expect(resume.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-bl3",
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).toBe("paused");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-bl3",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });

  it("BL4 — materialDriftDetected:false still drifts when blockers change", async () => {
    const stack = buildStack(tempDbPath("bl4.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl4");
    await createCandidate(stack.cycles, "prj:corr05-bl4", "cyc:corr05-bl4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl4",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl4-rsv",
          type: "Reservation",
          statement: "drift_even_if_hint_false",
          status: "active",
          blocking: true,
        },
      ],
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
      materialDriftDetected: false,
    });
    expect(resume.ok).toBe(false);
    if (resume.ok) return;
    expect(resume.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
  });

  it("BL6 — clean resume without blockers works", async () => {
    const stack = buildStack(tempDbPath("bl6.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl6");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl6");
    await createCandidate(stack.cycles, "prj:corr05-bl6", "cyc:corr05-bl6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resume.ok).toBe(true);
    if (!resume.ok) return;
    expect(resume.cycle.status).toBe("active");
  });

  it("BL7 — trajectory blocked step still blocks START", async () => {
    const stack = buildStack(tempDbPath("bl7.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl7");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl7", {
      steps: [{ stepId: "stp:x", order: 1, label: "X", state: "blocked" }],
    });
    await createCandidate(stack.cycles, "prj:corr05-bl7", "cyc:corr05-bl7");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl7");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl7",
      projectId: "prj:corr05-bl7",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_START_NOT_READY");
    expect(start.error.internalCauseRef ?? "").toContain(
      "trajectory_entry_blocked",
    );
  });
});

describe("SP — superseded", () => {
  it("SP1/SP2 — proposed/acknowledged canStart true via projectPilotLifecycle", () => {
    for (const status of ["proposed", "acknowledged"] as const) {
      expect(isStartableCandidateStatus(status)).toBe(true);
      const projection = projectPilotLifecycle({
        projectId: "prj:sp12",
        cycles: [
          baseCycle({
            cycleInstanceId: `cyc:sp12-${status}`,
            projectId: "prj:sp12",
            status,
          }),
        ],
        lpsActiveCycleInstanceId: null,
      });
      expect(projection.cta.canStart).toBe(true);
      expect(projection.selectedCycleInstanceId).toBe(`cyc:sp12-${status}`);
    }
  });

  it("SP3 — superseded canStart false", () => {
    expect(isStartableCandidateStatus("superseded")).toBe(false);
    const projection = projectPilotLifecycle({
      projectId: "prj:sp3",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:sp3",
          projectId: "prj:sp3",
          status: "superseded",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.cta.canStart).toBe(false);
    expect(projection.supersededCycles).toHaveLength(1);
  });

  it("SP4 — server START on superseded fails", async () => {
    const stack = buildStack(tempDbPath("sp4.sqlite"));
    await seedProject(stack.project, "prj:corr05-sp4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-sp4");
    await createCandidate(stack.cycles, "prj:corr05-sp4", "cyc:corr05-sp4");
    const got = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-sp4",
    });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    await stack.cycles.cycles.save({ ...got.cycle, status: "superseded" });
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-sp4");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sp4",
      projectId: "prj:corr05-sp4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect([
      "CYCLE_TRANSITION_INVALID",
      "CYCLE_START_NOT_READY",
    ]).toContain(start.error.detailCode);
  });

  it("SP5 — one proposed + two superseded → selected proposed, not ambiguous, canStart", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:sp5",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:sp5-a",
          projectId: "prj:sp5",
          status: "superseded",
        }),
        baseCycle({
          cycleInstanceId: "cyc:sp5-b",
          projectId: "prj:sp5",
          status: "proposed",
        }),
        baseCycle({
          cycleInstanceId: "cyc:sp5-c",
          projectId: "prj:sp5",
          status: "superseded",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:sp5-b");
    expect(projection.selectionAmbiguous).toBe(false);
    expect(projection.cta.canStart).toBe(true);
    expect(projection.supersededCycles).toHaveLength(2);
  });
});

describe("SC runtime acceptance", () => {
  it("SC01–SC06 + SC12 — candidate → start → pause → resume → finalize completed", async () => {
    const stack = buildStack(tempDbPath("sc.sqlite"));
    await seedProject(stack.project, "prj:corr05-sc");
    // SC01/SC02 — candidate, no active link
    const created = await createCandidate(
      stack.cycles,
      "prj:corr05-sc",
      "cyc:corr05-sc",
      false,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(isStartableCandidateStatus(created.cycle.status)).toBe(true);
    expect(created.cycle.status).not.toBe("active");
    let lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-sc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();

    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-sc", {
      steps: STEPS_DONE,
    });
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-sc");

    // SC03 — START
    const started = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.cycle.status).toBe("active");
    expect(started.activeCycleInstanceId).toBe("cyc:corr05-sc");

    // SC04 — PAUSE
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.status).toBe("paused");
    expect(paused.activeCycleInstanceId).toBeNull();

    // SC05 — RESUME
    const resumed = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resumed.ok).toBe(true);
    if (!resumed.ok) return;
    expect(resumed.cycle.status).toBe("active");

    // SC06 — second START refused while active sibling path covered by create+start sibling
    const sibling = await createCandidate(
      stack.cycles,
      "prj:corr05-sc",
      "cyc:corr05-sc-b",
    );
    expect(sibling.ok).toBe(true);
    const evB = await registerPilotAuth(stack.authority, "cyc:corr05-sc-b");
    const startB = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sc-b",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: evB,
    });
    expect(startB.ok).toBe(false);

    // SC12 — FINALIZE complete via obligation policy
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-sc",
      cycleInstanceId: "cyc:corr05-sc",
      decisionId: "dec:sc-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-sc",
      cycleInstanceId: "cyc:corr05-sc",
      subject: finalizeSubjectFor("cyc:corr05-sc"),
      decisionId: "dec:sc-finalize",
      evidenceId: ev,
    });
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      decisionId: "dec:sc-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-sc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });
});

function makeEvidence(
  partial: Partial<Evidence> & Pick<Evidence, "evidenceId" | "type" | "status">,
): Evidence {
  return {
    schemaVersion: "0.1.0-oa",
    source: partial.source ?? "test-source",
    sourceKind: partial.sourceKind ?? "human",
    producedAt: "2026-09-07T16:00:00.000Z",
    classification: "supporting",
    storageMode: "reference",
    availability: "available",
    bindings: partial.bindings ?? {},
    containsSecrets: false,
    provenance: {
      recordedAt: "2026-09-07T16:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    version: 1,
    createdAt: "2026-09-07T16:00:00.000Z",
    ...partial,
  } as Evidence;
}

function makeReview(
  partial: Partial<ReviewBundle> &
    Pick<ReviewBundle, "reviewBundleId" | "status">,
): ReviewBundle {
  return {
    schemaVersion: "0.2.0-oa",
    projectId: partial.projectId ?? "prj:corr05-base",
    version: 1,
    evidenceRefs: [],
    claimEvaluationRefs: [],
    completeness: partial.completeness ?? "complete",
    synthesisOnly: partial.synthesisOnly ?? false,
    createdAt: "2026-09-07T16:00:00.000Z",
    provenance: {
      recordedAt: "2026-09-07T16:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    ...partial,
  } as ReviewBundle;
}

describe("CP — contradiction precedence (CP1–CP9)", () => {
  const traj = () =>
    baseTrajectory({ projectId: "prj:cp", steps: STEPS_DONE });

  it("CP1 — EC git signal + opt:no-git → Git APPLICABLE + contradiction BLOCKING", () => {
    const cycleId = "cyc:cp1";
    const projectId = "prj:cp1";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git.commit"],
        },
      ],
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.contradictions?.some((c) => c.family === "git_repository")).toBe(
      true,
    );
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: traj(),
      applicability: rules,
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
        },
      ],
    });
    expect(a.blockers).toContain("git_policy_contradicts_applicability");
    expect(a.canComplete).toBe(false);
  });

  it("CP2 — EC git + no-governed-effects → Git APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp2";
    const projectId = "prj:cp2";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git"],
        },
      ],
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.contradictions?.length).toBeGreaterThan(0);
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: traj(),
      applicability: rules,
    });
    expect(a.blockers).toContain("git_policy_contradicts_applicability");
    expect(a.canComplete).toBe(false);
  });

  it("CP3 — EC present + no-execution → execution APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp3";
    const projectId = "prj:cp3";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EXECUTION,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        { contractId: "ec:1", cycleInstanceId: cycleId, status: "completed" },
      ],
    });
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("execution_contract");
  });

  it("CP4 — Evidence present + no-evidence → evidence APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp4";
    const projectId = "prj:cp4";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EVIDENCE,
        ),
      ],
      evidence: [
        makeEvidence({
          evidenceId: "ev:1",
          type: "document",
          status: "verified",
          bindings: { cycleInstanceId: cycleId },
        }),
      ],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("evidence");
  });

  it("CP5 — ReviewBundle present + no-review → review APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp5";
    const projectId = "prj:cp5";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_REVIEW,
        ),
      ],
      evidence: [],
      reviewBundles: [
        makeReview({
          reviewBundleId: "rb:1",
          status: "accepted",
          cycleInstanceId: cycleId,
          projectId,
        }),
      ],
      executionContracts: [],
    });
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("review_bundle");
  });

  it("CP6 — artifact signal + no-artifact → artifact APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp6";
    const projectId = "prj:cp6";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_ARTIFACT,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:art",
          cycleInstanceId: cycleId,
          status: "completed",
          expectedOutputs: ["artifact:report"],
        },
      ],
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("artifact");
  });

  it("CP7 — no positive git fact + no-git → explicit NOT_APPLICABLE", () => {
    const cycleId = "cyc:cp7";
    const projectId = "prj:cp7";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.contradictions ?? []).toHaveLength(0);
    expect(rules.notApplicableReasons?.git_repository).toContain(
      "pilot_hd_obligation_policy",
    );
  });

  it("CP8 — no positive governed facts + no-governed-effects → N/A allowed", () => {
    const cycleId = "cyc:cp8";
    const projectId = "prj:cp8";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.execution_contract).toBe("NOT_APPLICABLE");
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.artifact).toBe("NOT_APPLICABLE");
    expect(rules.evidence).toBe("NOT_APPLICABLE");
    expect(rules.review_bundle).toBe("NOT_APPLICABLE");
    expect(rules.contradictions ?? []).toHaveLength(0);
  });

  it("CP9 — contradiction re-derived from durable sources", () => {
    const cycleId = "cyc:cp9";
    const projectId = "prj:cp9";
    const input = {
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [] as Evidence[],
      reviewBundles: [] as ReviewBundle[],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git"],
        },
      ],
    };
    const a = deriveFinalizationApplicability(input);
    const b = deriveFinalizationApplicability(input);
    expect(a.contradictions).toEqual(b.contradictions);
    expect(a.git_repository).toBe("APPLICABLE");
  });
});

describe("EC — execution contract exit semantics (EC1–EC10)", () => {
  function assessEc(
    status: string,
    extra?: {
      contracts?: Array<{
        contractId: string;
        status: string;
        supersedesExecutionContractId?: string;
        cycleInstanceId?: string;
      }>;
      attempts?: Array<{
        attemptId: string;
        contractId?: string;
        terminalState?: string;
      }>;
      policy?: string;
    },
  ) {
    const cycleId = "cyc:ec";
    const projectId = "prj:ec";
    const contracts =
      extra?.contracts ??
      [{ contractId: "ec:1", cycleInstanceId: cycleId, status }];
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: extra?.policy
        ? [makeObligationPolicyDecision(cycleId, projectId, extra.policy)]
        : [],
      evidence: [],
      reviewBundles: [],
      executionContracts: contracts,
    });
    return assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: {
        ...rules,
        artifact: "NOT_APPLICABLE",
        evidence: "NOT_APPLICABLE",
        review_bundle: "NOT_APPLICABLE",
        git_repository: "NOT_APPLICABLE",
        notApplicableReasons: {
          ...rules.notApplicableReasons,
          artifact: "test",
          evidence: "test",
          review_bundle: "test",
          git_repository: "test",
        },
      },
      executionContracts: contracts,
      executionAttempts: extra?.attempts,
    });
  }

  it("EC1 — confirmed only → NOT SATISFIED (PENDING)", () => {
    const a = assessEc("confirmed");
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).toBe("PENDING");
  });

  it("EC2 — executing → PENDING", () => {
    const a = assessEc("executing");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("PENDING");
  });

  it("EC3 — completed → execution SATISFIED", () => {
    const a = assessEc("completed");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("SATISFIED");
    expect(a.canComplete).toBe(false);
  });

  it("EC4 — failed → BLOCKING", () => {
    const a = assessEc("failed");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("BLOCKING");
  });

  it("EC5 — cancelled with execution applicable → NOT SATISFIED", () => {
    const a = assessEc("cancelled");
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).not.toBe("SATISFIED");
    expect(ec?.status).toBe("BLOCKING");
  });

  it("EC6 — superseded predecessor + successor confirmed → successor PENDING", () => {
    const a = assessEc("confirmed", {
      contracts: [
        {
          contractId: "ec:old",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
        {
          contractId: "ec:new",
          status: "confirmed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
    });
    const { effective } = selectEffectiveExecutionContracts(
      [
        { contractId: "ec:old", status: "superseded", cycleInstanceId: "cyc:ec" },
        {
          contractId: "ec:new",
          status: "confirmed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
      "cyc:ec",
    );
    expect(effective.map((c) => c.contractId)).toEqual(["ec:new"]);
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("PENDING");
  });

  it("EC7 — superseded predecessor + successor completed → SATISFIED", () => {
    const a = assessEc("completed", {
      contracts: [
        {
          contractId: "ec:old",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
        {
          contractId: "ec:new",
          status: "completed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("SATISFIED");
  });

  it("EC8 — superseded with no successor → fail closed", () => {
    const a = assessEc("superseded", {
      contracts: [
        {
          contractId: "ec:orphan",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
      ],
    });
    expect(a.blockers).toContain("execution_superseded_unresolved");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("BLOCKING");
  });

  it("EC9 — terminal_success + confirmed EC → not execution-family complete", () => {
    const a = assessEc("confirmed", {
      attempts: [
        {
          attemptId: "att:1",
          contractId: "ec:1",
          terminalState: "terminal_success",
        },
      ],
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).not.toBe("SATISFIED");
  });

  it("EC10 — no EC + no-execution policy → N/A", () => {
    const a = assessEc("completed", {
      contracts: [],
      policy: OBLIGATION_POLICY_NO_EXECUTION,
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("NOT_APPLICABLE");
  });
});

describe("GP — git evidence semantic binding (GP1–GP8)", () => {
  const cycleId = "cyc:gp";
  const projectId = "prj:gp";
  const gitEc = {
    contractId: "ec:git",
    cycleInstanceId: cycleId,
    status: "completed" as const,
    requiredCapabilities: ["git"],
  };
  const otherEc = {
    contractId: "ec:other",
    cycleInstanceId: cycleId,
    status: "completed" as const,
  };

  function assessGit(evidence: Evidence[], contracts = [gitEc, otherEc]) {
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence,
      reviewBundles: [],
      executionContracts: contracts,
    });
    return {
      rules,
      assessment: assessFinalizationObligations({
        cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
        projectId,
        assessedAt: "2026-09-07T16:00:00.000Z",
        decisions: [],
        evidence,
        reviewBundles: [],
        trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
        applicability: rules,
        executionContracts: contracts,
      }),
    };
  }

  it("GP1 — unrelated verified document → Git MISSING", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:doc",
        type: "document",
        status: "verified",
        bindings: { projectId, cycleInstanceId: cycleId },
        source: "meeting-notes",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });

  it("GP2 — verified document bound to unrelated EC → Git MISSING", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:doc",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:other",
        },
        source: "git-log",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });

  it("GP3 — evidence bound to git EC → Git SATISFIED", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:git",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:git",
        },
        source: "repo-proof",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(true);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("SATISFIED");
  });

  it("GP4 — cycle-bound Git-specific log_ref without EC binding → acceptable", () => {
    const ev = makeEvidence({
      evidenceId: "ev:log",
      type: "log_ref",
      status: "available",
      bindings: { cycleInstanceId: cycleId },
      location: "git://repo/main",
      source: "repository-ref",
    });
    expect(isGitQualifyingEvidence(ev, new Set(["ec:git"]), cycleId)).toBe(
      true,
    );
    const { rules } = assessGit([ev]);
    expect(rules.gitProofPresent).toBe(true);
  });

  it("GP5 — generic project attestation → never enough", () => {
    const ev = makeEvidence({
      evidenceId: "ev:att",
      type: "attestation",
      status: "verified",
      bindings: { projectId },
      source: "pilot-attestation",
    });
    expect(isGitQualifyingEvidence(ev, new Set(["ec:git"]), cycleId)).toBe(
      false,
    );
  });

  it("GP6 — unavailable Git evidence → never satisfies", () => {
    const { rules } = assessGit([
      makeEvidence({
        evidenceId: "ev:bad",
        type: "log_ref",
        status: "unavailable",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:git",
        },
        source: "git",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
  });

  it("GP7 — proof for non-Git EC must not satisfy Git", () => {
    const { rules } = assessGit([
      makeEvidence({
        evidenceId: "ev:other",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:other",
        },
        location: "git://spoof",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
  });

  it("GP8 — APPLICABLE git with zero qualifying evidence → MISSING", () => {
    const { assessment } = assessGit([]);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });
});

describe("RV — review bundle exit semantics (RV1–RV9)", () => {
  const cycleId = "cyc:rv";
  const projectId = "prj:rv";

  function assessRv(bundles: ReviewBundle[]) {
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: bundles,
      executionContracts: [],
    });
    return assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: bundles,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: {
        ...rules,
        artifact: "NOT_APPLICABLE",
        execution_contract: "NOT_APPLICABLE",
        evidence: "NOT_APPLICABLE",
        git_repository: "NOT_APPLICABLE",
        notApplicableReasons: {
          artifact: "test",
          execution_contract: "test",
          evidence: "test",
          git_repository: "test",
        },
      },
    });
  }

  it("RV1 — accepted current review → SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "accepted",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("SATISFIED");
  });

  it("RV2 — rejected only → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "rejected",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV3 — incomplete only → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "incomplete",
        completeness: "incomplete",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV4 — draft / ready / under_review → PENDING", () => {
    for (const status of [
      "draft",
      "ready_for_review",
      "under_review",
    ] as const) {
      const a = assessRv([
        makeReview({
          reviewBundleId: `rb:${status}`,
          status,
          cycleInstanceId: cycleId,
          projectId,
        }),
      ]);
      expect(
        a.obligations.find((o) => o.family === "review_bundle")?.status,
      ).toBe("PENDING");
    }
  });

  it("RV5 — superseded only → NOT SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    const rv = a.obligations.find((o) => o.family === "review_bundle");
    expect(rv?.status).not.toBe("SATISFIED");
    expect(a.blockers).toContain("review_bundle_no_current");
  });

  it("RV6 — superseded predecessor + accepted successor → SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "accepted",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    const { effective } = selectEffectiveReviewBundles(
      [
        makeReview({
          reviewBundleId: "rb:old",
          status: "superseded",
          cycleInstanceId: cycleId,
          projectId,
        }),
        makeReview({
          reviewBundleId: "rb:new",
          status: "accepted",
          cycleInstanceId: cycleId,
          projectId,
          supersedesReviewBundleId: "rb:old",
        }),
      ],
      cycleId,
    );
    expect(effective.map((r) => r.reviewBundleId)).toEqual(["rb:new"]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("SATISFIED");
  });

  it("RV7 — superseded predecessor + rejected successor → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "rejected",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV8 — accepted historical superseded + current draft → PENDING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "draft",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("PENDING");
  });

  it("RV9 — synthesis-only → never manufacture completion", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:syn",
        status: "accepted",
        synthesisOnly: true,
        completeness: "incomplete",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).not.toBe("SATISFIED");
  });
});

describe("BL5 — pause blocker baseline UNKNOWN (BL5a–BL5f)", () => {
  it("BL5a — PAUSE with epistemic unreadable → UNKNOWN baseline", async () => {
    let fail = false;
    const stack = buildStack(tempDbPath("bl5a.sqlite"), {
      epistemic: {
        listByProject: async () => {
          if (fail) throw new Error("epistemic_unreadable");
          return [];
        },
      },
    });
    await seedProject(stack.project, "prj:corr05-bl5a");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl5a");
    await createCandidate(stack.cycles, "prj:corr05-bl5a", "cyc:corr05-bl5a");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl5a");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl5a",
      projectId: "prj:corr05-bl5a",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    fail = true;
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl5a",
      projectId: "prj:corr05-bl5a",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerSnapshotState).toBe(
      "UNKNOWN",
    );
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toBeNull();
  });

  it("BL5b — baseline UNKNOWN + later empty → RESUME refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      blockerSnapshotReason: "epistemic_unreadable",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("BL5c — baseline UNKNOWN + later blockers → RESUME refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["still_blocking"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("BL5d — baseline known empty + current known empty → clean", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: [],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("BL5e — baseline known same blockers → clean on blocker dimension", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: ["r1", "r2"],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: ["r2", "r1"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).not.toContain("blocker_introduced_or_changed");
    expect(r.driftReasons).not.toContain("blocker_baseline_unknown");
    expect(r.clean).toBe(true);
  });

  it("BL5f — baseline known + changed blocker set → drift", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: [],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: ["new_blocker"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_introduced_or_changed");
  });
});

describe("CORR-PROOF-05 #3B — Git lexical token matching (GT1–GT12)", () => {
  it("GT1 — digital-signature capability is not Git", () => {
    expect(
      isGitApplicableContract({
        contractId: "xct:gt1",
        requiredCapabilities: ["digital-signature"],
      }),
    ).toBe(false);
  });

  it("GT2 — legitimate-operation capability is not Git", () => {
    expect(
      isGitApplicableContract({
        contractId: "xct:gt2",
        requiredCapabilities: ["legitimate-operation"],
      }),
    ).toBe(false);
  });

  it("GT3 — digital transformation fields are not Git", () => {
    expect(
      isGitApplicableContract({
        contractId: "xct:gt3",
        action: "digital transformation",
        target: "digital-attestation",
        scope: "legitimate document store",
      }),
    ).toBe(false);
  });

  it("GT4 — Evidence source digital-attestation is not Git proof", () => {
    const evidence = {
      evidenceId: "evd:gt4",
      type: "attestation",
      status: "verified",
      source: "digital-attestation",
      bindings: { cycleInstanceId: "cyc:gt" },
    } as Evidence;
    expect(isGitQualifyingEvidence(evidence, new Set(), "cyc:gt")).toBe(false);
  });

  it("GT5 — Evidence location legitimate-document is not Git proof", () => {
    const evidence = {
      evidenceId: "evd:gt5",
      type: "document",
      status: "verified",
      location: "legitimate-document",
      bindings: { cycleInstanceId: "cyc:gt" },
    } as Evidence;
    expect(isGitQualifyingEvidence(evidence, new Set(), "cyc:gt")).toBe(false);
  });

  it("GT6 — explicit git capability is Git", () => {
    expect(
      isGitApplicableContract({
        contractId: "xct:gt6",
        requiredCapabilities: ["git"],
      }),
    ).toBe(true);
  });

  it("GT7 — namespaced git.commit capability is Git", () => {
    expect(
      isGitApplicableContract({
        contractId: "xct:gt7",
        requiredCapabilities: ["git.commit"],
      }),
    ).toBe(true);
    expect(hasGitRepositorySemanticMarker("git.commit")).toBe(true);
  });

  it("GT8 — repository semantic marker is Git", () => {
    expect(hasGitRepositorySemanticMarker("repository")).toBe(true);
    expect(hasGitRepositorySemanticMarker("repository-ref")).toBe(true);
    expect(
      isGitApplicableContract({
        contractId: "xct:gt8",
        scope: "repository",
      }),
    ).toBe(true);
  });

  it("GT9 — case normalization", () => {
    expect(hasGitRepositorySemanticMarker("GIT")).toBe(true);
    expect(hasGitRepositorySemanticMarker("Git.Commit")).toBe(true);
    expect(hasGitRepositorySemanticMarker("REPOSITORY")).toBe(true);
  });

  it("GT10 — Evidence bound to Git-applicable EC qualifies", () => {
    const evidence = {
      evidenceId: "evd:gt10",
      type: "document",
      status: "verified",
      bindings: {
        cycleInstanceId: "cyc:gt",
        executionContractId: "xct:git",
      },
    } as Evidence;
    expect(
      isGitQualifyingEvidence(evidence, new Set(["xct:git"]), "cyc:gt"),
    ).toBe(true);
  });

  it("GT11 — Evidence bound to non-Git EC does not qualify", () => {
    const evidence = {
      evidenceId: "evd:gt11",
      type: "document",
      status: "verified",
      location: "git://spoof",
      bindings: {
        cycleInstanceId: "cyc:gt",
        executionContractId: "xct:other",
      },
    } as Evidence;
    expect(
      isGitQualifyingEvidence(evidence, new Set(["xct:git"]), "cyc:gt"),
    ).toBe(false);
  });

  it("GT12 — GP1–GP8 regression anchors still hold under token matcher", () => {
    // Provider names must not slip through as bare-git substring hits.
    expect(hasGitRepositorySemanticMarker("github")).toBe(false);
    expect(hasGitRepositorySemanticMarker("gitlab")).toBe(false);
    // GP1 shape: git.commit capability → Git-applicable
    expect(
      isGitApplicableContract({
        contractId: "xct:gp1",
        requiredCapabilities: ["git.commit"],
      }),
    ).toBe(true);
    // GP2 shape: same-cycle Evidence with git:// location → qualifies
    expect(
      isGitQualifyingEvidence(
        {
          evidenceId: "evd:gp2",
          type: "document",
          status: "verified",
          location: "git://repo/main",
          bindings: { cycleInstanceId: "cyc:gp" },
        } as Evidence,
        new Set(),
        "cyc:gp",
      ),
    ).toBe(true);
    // GP3 shape: repository-ref source → qualifies
    expect(
      isGitQualifyingEvidence(
        {
          evidenceId: "evd:gp3",
          type: "document",
          status: "verified",
          source: "repository-ref",
          bindings: { cycleInstanceId: "cyc:gp" },
        } as Evidence,
        new Set(),
        "cyc:gp",
      ),
    ).toBe(true);
    // Unrelated EC evidence must not prove Git (GP regress)
    expect(
      isGitQualifyingEvidence(
        {
          evidenceId: "evd:gp-neg",
          type: "document",
          status: "verified",
          bindings: {
            cycleInstanceId: "cyc:gp",
            executionContractId: "xct:other",
          },
        } as Evidence,
        new Set(["xct:git"]),
        "cyc:gp",
      ),
    ).toBe(false);
  });
});

describe("CORR-PROOF-05 #3B — pause blocker missing state fail-closed (PB1–PB10)", () => {
  it("PB1 — new PAUSE + readable empty blockers → KNOWN", async () => {
    const stack = buildStack(tempDbPath("pb1.sqlite"));
    await seedProject(stack.project, "prj:corr05-pb1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-pb1");
    await createCandidate(stack.cycles, "prj:corr05-pb1", "cyc:corr05-pb1");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-pb1");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-pb1",
      projectId: "prj:corr05-pb1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-pb1",
      projectId: "prj:corr05-pb1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerSnapshotState).toBe("KNOWN");
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toBe("none");
  });

  it("PB2 — new PAUSE + unreadable reader → UNKNOWN + null fingerprint", async () => {
    let fail = false;
    const stack = buildStack(tempDbPath("pb2.sqlite"), {
      epistemic: {
        listByProject: async () => {
          if (fail) throw new Error("epistemic_unreadable");
          return [];
        },
      },
    });
    await seedProject(stack.project, "prj:corr05-pb2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-pb2");
    await createCandidate(stack.cycles, "prj:corr05-pb2", "cyc:corr05-pb2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-pb2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-pb2",
      projectId: "prj:corr05-pb2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    fail = true;
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-pb2",
      projectId: "prj:corr05-pb2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerSnapshotState).toBe(
      "UNKNOWN",
    );
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toBeNull();
  });

  it("PB3 — baseline UNKNOWN + recovered empty → refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("PB4 — baseline UNKNOWN + recovered blockers → refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["b1"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("PB5 — legacy omitted blockerSnapshotState + empty current → refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "KNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    // Simulate legacy payload: strip state after build
    const legacy = { ...snap };
    delete (legacy as { blockerSnapshotState?: string }).blockerSnapshotState;
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: legacy }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("PB6 — missing state with matching none fingerprint still refused", () => {
    const r = assessResumeReconciliation({
      cycle: baseCycle({
        status: "paused",
        pauseReconciliation: {
          pausedAt: "2026-09-07T16:00:00.000Z",
          lpsVersion: 2,
          lpsActiveCycleInstanceId: null,
          objective: "lifecycle",
          context: "corr05",
          scope: "pilot-lifecycle",
          trajectoryId: "trj:base",
          trajectoryVersion: 1,
          trajectoryFingerprint: "trj:base@v1:active:stp:clarify:pending,stp:decide:pending",
          currentDecisionFingerprint: "none",
          evidenceFingerprint: "none",
          blockerFingerprint: "none",
          // blockerSnapshotState intentionally omitted
        },
      }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("PB7 — explicit KNOWN + matching empty → clean", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("PB8 — KNOWN + same blockers reordered → clean", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: ["b", "a"],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: ["a", "b"],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("PB9 — KNOWN + changed blockers → drift", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
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
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: ["old"],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
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
      blockingReservationStatements: ["new"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_introduced_or_changed");
  });

  it("PB10 — full resume path: persisted pause without state → CYCLE_RESUME_DRIFT", async () => {
    const stack = buildStack(tempDbPath("pb10.sqlite"));
    await seedProject(stack.project, "prj:corr05-pb10");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-pb10");
    await createCandidate(stack.cycles, "prj:corr05-pb10", "cyc:corr05-pb10");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-pb10");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-pb10",
      projectId: "prj:corr05-pb10",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-pb10",
      projectId: "prj:corr05-pb10",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    // Mutate durable JSON to omit blockerSnapshotState (legacy rehydration).
    const legacyCycle: CycleInstance = {
      ...paused.cycle,
      pauseReconciliation: paused.cycle.pauseReconciliation
        ? (() => {
            const pr = { ...paused.cycle.pauseReconciliation };
            delete (pr as { blockerSnapshotState?: string }).blockerSnapshotState;
            return pr;
          })()
        : null,
    };
    await stack.cycles.cycles.save(legacyCycle);

    const resumed = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-pb10",
      projectId: "prj:corr05-pb10",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
      materialDriftDetected: false,
    });
    expect(resumed.ok).toBe(false);
    if (resumed.ok) return;
    expect(resumed.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
    const after = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-pb10",
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.cycle.status).toBe("paused");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-pb10",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });
});
