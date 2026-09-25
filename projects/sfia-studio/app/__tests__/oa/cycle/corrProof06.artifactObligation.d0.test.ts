/**
 * CORR-PROOF-06 — Pilot-selectable Artifact obligation + pre-FINALIZE recovery.
 * Deterministic Product DB only — ZERO REAL / ZERO dogfood mutation.
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
  createSqliteCycleServices,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  projectPilotLifecycle,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  recordObligationPolicyNoGovernedEffects,
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import { projectAssistantRecordObligationPolicyAction } from "@/features/project-assistant/actions";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import {
  canOfferGroupedNoGovernedEffects,
  canOfferRequireArtifact,
  lifecycleCtaPresentation,
  showsRequireArtifactContinuation,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
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

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr06-"));
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
      requirePilotGate?: boolean;
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requirePilotGate: req.requirePilotGate ?? true,
        requireMorrisGate: req.requireMorrisGate ?? false,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(dbPath: string): {
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
    fixedNowIso: "2026-09-10T20:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-10T20:00:00.000Z");
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

async function registerPilotAuth(
  authority: MemoryAuthorityResolver,
  cycleId: string,
): Promise<string> {
  const auth = registerLocalPiloteAuthority({
    authorityResolver: authority,
    scope: `pilot-lifecycle:${cycleId}`,
    issuedAt: "2026-09-10T20:00:00.000Z",
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
    title: "CORR-PROOF-06",
    objective: "artifact-obligation",
    context: "product-proof",
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
) {
  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
  expect(lps.ok).toBe(true);
  if (!lps.ok) return;
  const created = await cycles.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: STEPS_DONE,
    status: "active",
    expectedLpsVersion: lps.livingProjectState.version,
    createdBy: ACTOR,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
) {
  return cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:framing",
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
}

async function startActiveCycle(input: {
  stack: ReturnType<typeof buildStack>;
  projectId: string;
  cycleId: string;
}) {
  await seedProject(input.stack.project, input.projectId);
  await seedTrajectory(input.stack.cycles, input.stack.project, input.projectId);
  await createCandidate(input.stack.cycles, input.projectId, input.cycleId);
  const ev = await registerPilotAuth(input.stack.authority, input.cycleId);
  const started = await input.stack.cycles.pilotLifecycle.start({
    cycleInstanceId: input.cycleId,
    projectId: input.projectId,
    createdBy: PILOTE,
    authorityEvidenceId: ev,
  });
  expect(started.ok).toBe(true);
  return ev;
}

describe("CORR-PROOF-06 — Artifact obligation selection & recovery", () => {
  it("T1 — NO_GOVERNED_EFFECTS path preserved", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t1.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t1",
      cycleId: "cyc:corr06-t1",
    });
    const recorded = await recordObligationPolicyNoGovernedEffects({
      projectId: "prj:corr06-t1",
      cycleInstanceId: "cyc:corr06-t1",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.policyKind).toBe("no-governed-effects");
    const art = recorded.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("NOT_APPLICABLE");
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr06-t1",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
  });

  it("T2/T3/T5/T6 — REQUIRE_ARTIFACT records durable HD; Artifact APPLICABLE; finalize blocked", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t2.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t2",
      cycleId: "cyc:corr06-t2",
    });
    const before = await stack.decisions.decisions.listByProject("prj:corr06-t2");
    const recorded = await recordObligationPolicyRequireArtifact({
      projectId: "prj:corr06-t2",
      cycleInstanceId: "cyc:corr06-t2",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:01:00.000Z",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.policyKind).toBe("require-artifact");
    const after = await stack.decisions.decisions.listByProject("prj:corr06-t2");
    expect(after.length).toBe(before.length + 1);
    const policy = after.find(
      (d) => d.subject === obligationPolicySubjectFor("cyc:corr06-t2"),
    );
    expect(policy?.selectedOptionId).toBe(OBLIGATION_POLICY_REQUIRE_ARTIFACT);
    expect(policy?.status).toBe("accepted");
    const art = recorded.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");
    expect(art?.status).not.toBe("SATISFIED");
    expect(recorded.assessment.canComplete).toBe(false);
    // T7–T10 — no auto finalize; cycle remains active
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr06-t2",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
  });

  it("T4 — authority fail-closed when local Pilote authority absent", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "0";
    const stack = buildStack(tempDbPath("t4.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t4",
      cycleId: "cyc:corr06-t4",
    });
    // Clear env so Product path cannot auto-register
    delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    const refused = await recordObligationPolicyRequireArtifact({
      projectId: "prj:corr06-t4",
      cycleInstanceId: "cyc:corr06-t4",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: new MemoryAuthorityResolver(),
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(refused.ok).toBe(false);
    if (refused.ok) return;
    expect(refused.code).toMatch(/AUTHORITY|NOT_CONFIGURED|UNAVAILABLE/i);
  });

  it("T7–T10 — REQUIRE_ARTIFACT does not invent EC/Evidence/Review/Git/FINALIZE", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t7.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t7",
      cycleId: "cyc:corr06-t7",
    });
    const hdBefore = await stack.decisions.decisions.listByProject(
      "prj:corr06-t7",
    );
    const recorded = await recordObligationPolicyRequireArtifact({
      projectId: "prj:corr06-t7",
      cycleInstanceId: "cyc:corr06-t7",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:02:00.000Z",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const hdAfter = await stack.decisions.decisions.listByProject(
      "prj:corr06-t7",
    );
    // Exactly one new HD (obligation-policy); no finalize HD
    expect(hdAfter.length).toBe(hdBefore.length + 1);
    expect(
      hdAfter.some((d) => d.subject.includes("finalize")),
    ).toBe(false);
    for (const family of [
      "execution_contract",
      "evidence",
      "review_bundle",
      "git_repository",
    ] as const) {
      const o = recorded.assessment.obligations.find((x) => x.family === family);
      expect(o?.applicability).not.toBe("NOT_APPLICABLE");
      expect(o?.status).not.toBe("SATISFIED");
    }
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr06-t7",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
  });

  it("T11 — UI helpers expose livrable + no-governed paths", () => {
    const unknownAssessment = {
      cycleInstanceId: "cyc:ui",
      projectId: "prj:ui",
      finalizeDecisionId: null,
      finalizeAccepted: false,
      assessedAt: "2026-09-10T20:00:00.000Z",
      canComplete: false,
      blockers: ["artifact_applicability_unknown"],
      obligations: [
        {
          family: "artifact" as const,
          status: "PENDING" as const,
          applicability: "UNKNOWN" as const,
          blocking: true,
        },
        {
          family: "evidence" as const,
          status: "PENDING" as const,
          applicability: "UNKNOWN" as const,
          blocking: true,
        },
      ],
    };
    expect(canOfferGroupedNoGovernedEffects(unknownAssessment)).toBe(true);
    expect(canOfferRequireArtifact(unknownAssessment)).toBe(true);

    const naAssessment = {
      ...unknownAssessment,
      obligations: [
        {
          family: "artifact" as const,
          status: "NOT_APPLICABLE" as const,
          applicability: "NOT_APPLICABLE" as const,
          blocking: false,
        },
        {
          family: "evidence" as const,
          status: "NOT_APPLICABLE" as const,
          applicability: "NOT_APPLICABLE" as const,
          blocking: false,
        },
      ],
    };
    expect(canOfferGroupedNoGovernedEffects(naAssessment)).toBe(false);
    expect(canOfferRequireArtifact(naAssessment)).toBe(true);

    const requiredAssessment = {
      ...unknownAssessment,
      blockers: ["artifact_missing"],
      obligations: [
        {
          family: "artifact" as const,
          status: "MISSING" as const,
          applicability: "APPLICABLE" as const,
          blocking: true,
        },
      ],
    };
    expect(canOfferRequireArtifact(requiredAssessment)).toBe(false);
    expect(showsRequireArtifactContinuation(requiredAssessment)).toBe(true);
  });

  it("T12/T13/T14 — NO_GOVERNED → REQUIRE_ARTIFACT recovery; prior auditable; N/A lifted", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t12.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t12",
      cycleId: "cyc:corr06-t12",
    });

    const noFx = await recordObligationPolicyNoGovernedEffects({
      projectId: "prj:corr06-t12",
      cycleInstanceId: "cyc:corr06-t12",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(noFx.ok).toBe(true);
    if (!noFx.ok) return;
    expect(
      noFx.assessment.obligations.find((o) => o.family === "artifact")
        ?.applicability,
    ).toBe("NOT_APPLICABLE");

    const require = await recordObligationPolicyRequireArtifact({
      projectId: "prj:corr06-t12",
      cycleInstanceId: "cyc:corr06-t12",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:05:00.000Z",
    });
    expect(require.ok).toBe(true);
    if (!require.ok) return;

    const all = await stack.decisions.decisions.listByProject("prj:corr06-t12");
    const subject = obligationPolicySubjectFor("cyc:corr06-t12");
    const policies = all.filter((d) => d.subject === subject);
    expect(policies.length).toBe(2);
    const accepted = policies.filter((d) => d.status === "accepted");
    const superseded = policies.filter((d) => d.status === "superseded");
    expect(accepted).toHaveLength(1);
    expect(superseded).toHaveLength(1);
    expect(accepted[0]?.selectedOptionId).toBe(
      OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    );
    expect(superseded[0]?.selectedOptionId).toBe(
      OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    );

    const art = require.assessment.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.applicability).toBe("APPLICABLE");
    expect(require.assessment.canComplete).toBe(false);

    // Other families must not remain globally N/A from superseded policy
    for (const family of [
      "execution_contract",
      "evidence",
      "review_bundle",
      "git_repository",
    ] as const) {
      const o = require.assessment.obligations.find((x) => x.family === family);
      expect(o?.applicability).not.toBe("NOT_APPLICABLE");
    }

    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr06-t12",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
  });

  it("CR-06-01 — hostile policyKind rejected at server boundary; no HD written", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    class FixedIdSource implements LocalProjectIdSource {
      private n = 0;
      nextProjectId(): string {
        this.n += 1;
        return `prj:corr06-hostile-${this.n}`;
      }
      nextLpsVersionId(): string {
        return `lps:corr06-hostile-${this.n}`;
      }
      nextCorrelationId(): string {
        return `cor:corr06-hostile-${this.n}`;
      }
    }

    resetRuntimeApplicationServiceForTests();
    const runtime = createRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-10T20:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "CORR-06 hostile policyKind",
      objective: "boundary",
      context: "cr-06-01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C06H",
      idempotencyKey: "idem:corr06-hostile-policy",
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

    const cycleInstanceId = "cyc:corr06-hostile";
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
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
      issuedAt: "2026-09-10T20:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(started.ok).toBe(true);

    const before = await oa.decisionServices.decisions.listByProject(projectId);
    const refused = await projectAssistantRecordObligationPolicyAction({
      projectId,
      cycleInstanceId,
      policyKind: "unexpected-policy" as never,
    });
    expect(refused.ok).toBe(false);
    expect(refused.code).toBe("OBLIGATION_POLICY_KIND_INVALID");
    const after = await oa.decisionServices.decisions.listByProject(projectId);
    expect(after.length).toBe(before.length);
    expect(
      after.some((d) => d.subject === obligationPolicySubjectFor(cycleInstanceId)),
    ).toBe(false);

    const assessed = await oa.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    expect(assessed.ok).toBe(true);
    if (assessed.ok) {
      const art = assessed.assessment.obligations.find(
        (o) => o.family === "artifact",
      );
      expect(art?.applicability).not.toBe("NOT_APPLICABLE");
    }
    const live = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
    expect(live.ok && live.cycle.status).toBe("active");
    resetRuntimeApplicationServiceForTests();
  });

  function baseCognitiveCtx(input: {
    activeCycleId: string | null;
    decisions: StudioCognitiveContext["decisions"]["items"];
  }): StudioCognitiveContext {
    return {
      projectTruth: {
        projectId: "prj:dogfood",
        name: "Gestion de tâches",
        objective: "dogfood",
        context: "cadrage",
        constraints: [],
        criticality: "STANDARD",
        shortReference: null,
        lpsId: "lps:1",
        lpsVersion: 1,
        activeCycleInstanceId: input.activeCycleId,
        doctrineId: "pkg:studio-v3-oa",
        doctrineVersion: "1.0.0",
        doctrineStatus: "resolved",
      },
      method: {
        orientation: {
          state: "UNRESOLVED" as const,
          candidateCycleTypeId: null,
        },
        cycleLabel: "Cadrage",
        ckcLensSection: null,
        ckcLoaded: false,
        doctrinePinPresent: true,
        sourceLimit: "none" as const,
        trajectory: null,
        activeCycleCkcAuthoritative: true,
      },
      activeCycle: input.activeCycleId
        ? {
            cycleInstanceId: input.activeCycleId,
            cycleTypeId: "cyc:framing",
            cycleLabel: "Cadrage",
            profile: "Light",
            status: "active",
            workEligible: true,
            trajectoryId: "trj:1",
            trajectoryVersion: 1,
            trajectoryStepId: "stp:1",
            ckcResolutionRef: null,
          }
        : null,
      activeCycleWorkItems: { state: "NONE" as const, items: [] },
      decisions: {
        state: "PRESENT" as const,
        items: input.decisions,
      },
      evidence: { state: "NONE" as const, items: [] },
      review: { state: "NONE" as const, items: [] },
      trajectory: { state: "ABSENT" as const, current: null },
      lifecycleRecommendation: {
        state: "NONE" as const,
        current: null,
        satisfiesPreCycleNextCycleTransition: false,
      },
      reservationCompactSection: null,
      reservationFocusSection: null,
      limits: {
        oaAvailable: true,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      },
    };
  }

  it("T-CTX-1 / T15 — cognitive context injects active-cycle deliverable obligation and non-FINALIZE guidance", () => {
    // CR-06-03 — proves deterministic context composition only; does NOT prove model behavior.
    const ctx = baseCognitiveCtx({
      activeCycleId: "cyc:A",
      decisions: [
        {
          subject: obligationPolicySubjectFor("cyc:A"),
          selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
          selectedOptionLabel: "Un livrable est requis avant finalisation",
          status: "accepted" as const,
          lifecycle: "CURRENT" as const,
          effectiveAt: "2026-09-10T20:05:00.000Z",
          reversible: false,
          supersedesPresent: true,
        },
      ],
    });
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/Obligation de livrable/);
    expect(prompt).toMatch(/Ne recommande pas FINALIZE/);
    expect(prompt).toMatch(/matérialisation gouvernée/);
  });

  it("T-CTX-2 — prior cycle REQUIRE_ARTIFACT does not contaminate active cycle", () => {
    const ctx = baseCognitiveCtx({
      activeCycleId: "cyc:B",
      decisions: [
        {
          subject: obligationPolicySubjectFor("cyc:A"),
          selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
          selectedOptionLabel: "Un livrable est requis avant finalisation",
          status: "accepted" as const,
          lifecycle: "CURRENT" as const,
          effectiveAt: "2026-09-10T20:05:00.000Z",
          reversible: false,
          supersedesPresent: false,
        },
      ],
    });
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).not.toMatch(/Obligation de livrable/);
    expect(prompt).not.toMatch(/Ne recommande pas FINALIZE/);
  });

  it("T-CTX-3 — UX label does not authorize; selectedOptionId does", () => {
    const ctx = baseCognitiveCtx({
      activeCycleId: "cyc:A",
      decisions: [
        {
          subject: obligationPolicySubjectFor("cyc:A"),
          selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
          selectedOptionLabel: "Deliverable required before close",
          status: "accepted" as const,
          lifecycle: "CURRENT" as const,
          effectiveAt: "2026-09-10T20:05:00.000Z",
          reversible: false,
          supersedesPresent: false,
        },
      ],
    });
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/Obligation de livrable/);
  });

  it("T-CTX-4 — misleading UX label without REQUIRE_ARTIFACT id does not inject", () => {
    const ctx = baseCognitiveCtx({
      activeCycleId: "cyc:A",
      decisions: [
        {
          subject: obligationPolicySubjectFor("cyc:A"),
          selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
          selectedOptionLabel: "Un livrable est requis avant finalisation",
          status: "accepted" as const,
          lifecycle: "CURRENT" as const,
          effectiveAt: "2026-09-10T20:05:00.000Z",
          reversible: false,
          supersedesPresent: false,
        },
      ],
    });
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).not.toMatch(/Obligation de livrable/);
  });

  it("T17 — START/PAUSE/RESUME/FINALIZE attemptable flags non-regressed via projection", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t17.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t17",
      cycleId: "cyc:corr06-t17",
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:corr06-t17");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr06-t17",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const projection = projectPilotLifecycle({
      projectId: "prj:corr06-t17",
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    });
    expect(projection.selectedStatus).toBe("active");
    expect(projection.cta.canPause).toBe(true);
    expect(projection.cta.canFinalize).toBe(true);
    expect(projection.cta.canCancel).toBe(true);
    expect(projection.cta.canStart).toBe(false);
  });

  it("T18 — CTA presentation after require-artifact blocks Finaliser", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("t18.sqlite"));
    await startActiveCycle({
      stack,
      projectId: "prj:corr06-t18",
      cycleId: "cyc:corr06-t18",
    });
    const recorded = await recordObligationPolicyRequireArtifact({
      projectId: "prj:corr06-t18",
      cycleInstanceId: "cyc:corr06-t18",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:06:00.000Z",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const cycles = await stack.cycles.cycles.listByProject("prj:corr06-t18");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr06-t18",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const projection = projectPilotLifecycle({
      projectId: "prj:corr06-t18",
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      assessment: recorded.assessment,
    });
    const cta = lifecycleCtaPresentation(projection);
    expect(cta.showRequireArtifactContinuation).toBe(true);
    expect(cta.showRequireArtifactPolicy).toBe(false);
    expect(cta.finalizeEnabled).toBe(false);
    expect(cta.showGroupedObligationPolicy).toBe(false);
  });
});
