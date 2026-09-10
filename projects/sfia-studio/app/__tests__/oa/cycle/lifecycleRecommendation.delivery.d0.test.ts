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
