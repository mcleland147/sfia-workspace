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
