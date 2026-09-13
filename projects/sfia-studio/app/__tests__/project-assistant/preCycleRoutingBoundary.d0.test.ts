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
