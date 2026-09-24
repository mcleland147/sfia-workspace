/** @vitest-environment node */
/**
 * NORA-CONVERSATIONAL-INITIATIVE-01 — T1–T10 + CR-NCI-01/02/03 (deterministic).
 * ZERO REAL. Same Product turn structured conversationGuidance + server coherence.
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
  CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD,
  CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
  CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP,
  CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE,
  CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER,
  CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  applyConversationGuidanceCoherence,
  applyPreCycleRoutingBoundaryCoherence,
  buildFailClosedProductTurnJson,
  composePilotFacingAssistantText,
  isConversationGuidance,
  isNoraProductTurnWithOptionalLr,
  normalizeNoraProductTurnStructuredOutput,
  type ConversationGuidance,
  type ConversationGuidanceKind,
  type ConversationGuidanceScope,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle";
import type { ActorReference } from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nci-"));
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

function guidance(
  kind: ConversationGuidanceKind,
  scope: ConversationGuidanceScope,
  statement: string,
  rationale: string | null = null,
): ConversationGuidance {
  return { kind, scope, statement, rationale };
}

function productTurn(input: {
  assessment: PreCycleRoutingAssessment;
  lr?: ReturnType<typeof nextCycleLr> | null;
  narrative: string;
  conversationGuidance: ConversationGuidance;
  activeCycleWork?: { items: unknown[] } | null;
}) {
  return {
    narrative: input.narrative,
    preCycleRoutingAssessment: input.assessment,
    lifecycleRecommendation: input.lr ?? null,
    activeCycleWork: input.activeCycleWork ?? null,
    conversationGuidance: input.conversationGuidance,
  };
}

const COGNITIVE_STOP_ASSESSMENT = {
  conflict: {
    conflictPresent: true,
    requiredSourceCount: 2,
    requiredDomains: ["governance"],
    evidencePointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh" as const,
        attributable: true,
      },
      {
        evidenceId: "ev:2",
        sourceId: "src:b",
        domain: "governance",
        freshness: "fresh" as const,
        attributable: true,
      },
    ],
    trustedSfiaProfile: null,
  },
  governingPremiseInvalidated: true,
  governingPremise: "Premisse gouvernante invalidée (NCI CR3).",
};

const baseProject = {
  projectId: "prj:nci",
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

async function bootProject(prefix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-23T12:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    productDbPath: tempDbPath(`${prefix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: prefix.toUpperCase(),
    objective: "greenfield tasks",
    context: prefix,
    criticality: "STANDARD",
    constraints: [],
    shortReference: prefix.toUpperCase(),
    idempotencyKey: `idem:${prefix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
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
  return { runtime, projectId };
}

describe("NORA-CONVERSATIONAL-INITIATIVE-01 (deterministic)", () => {
  it("schema requires conversationGuidance.kind+scope on Product turn", () => {
    const required =
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.required;
    expect(required).toContain("conversationGuidance");
    const gRequired =
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.properties
        .conversationGuidance.required;
    expect(gRequired).toContain("kind");
    expect(gRequired).toContain("scope");
    expect(gRequired).toContain("statement");
  });

  it("prompt requires Orient / conversationGuidance scope matrix", () => {
    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/conversationGuidance/);
    expect(prompt).toMatch(/LIFECYCLE_TRANSITION/);
    expect(prompt).toMatch(/ACTIVE_CYCLE/);
    expect(prompt).toMatch(/BLOCKER_RESOLUTION/);
    expect(prompt).toMatch(/UNDERSTAND/);
    expect(prompt).toMatch(/ORIENT/);
  });

  it("T1 — informative → RECOMMEND_NEXT_STEP + PRE_CYCLE", () => {
    const g = guidance(
      "RECOMMEND_NEXT_STEP",
      "PRE_CYCLE",
      "Je te propose maintenant de finaliser le cadrage minimal avant la conception.",
      "suite supportable après synthèse",
    );
    const coherent = normalizeNoraProductTurnStructuredOutput(
      productTurn({
        assessment: {
          routingBlockingUnknownPresent: false,
          candidateCycleSupportable: false,
          remainingUnknownsAreCycleOwned: false,
          multiplePlausibleCycles: false,
          activeCycleAlreadyCoversWork: false,
        },
        narrative:
          "Le besoin est une app de tâches avec priorités simples et partage d'équipe.",
        conversationGuidance: g,
        lr: null,
      }),
    );
    expect(coherent!.conversationGuidance.kind).toBe("RECOMMEND_NEXT_STEP");
    expect(coherent!.conversationGuidance.scope).toBe("PRE_CYCLE");
    expect(coherent!.conversationGuidance.statement).toBe(g.statement);
    const pilot = composePilotFacingAssistantText(
      coherent!.narrative,
      coherent!.conversationGuidance,
    );
    expect(pilot).toContain(g.statement);
    expect(pilot).not.toMatch(/PROCHAINE ÉTAPE\s*:/i);
  });

  it("T2 — routing-blocking → ASK_CLARIFICATION + PRE_CYCLE", () => {
    const g = guidance(
      "ASK_CLARIFICATION",
      "PRE_CYCLE",
      "Quel est le canal principal d'entrée des tâches (mobile, web, API) ?",
      null,
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le contexte métier reste trop ouvert pour router.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
      conversationGuidance: g,
    });
    expect(coherent.disposition).toBe("CONTINUE_PRE_CYCLE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance.kind).toBe("ASK_CLARIFICATION");
    expect(coherent.conversationGuidance.scope).toBe("PRE_CYCLE");
    expect(coherent.conversationGuidance.statement).toBe(g.statement);
    expect(coherent.conversationGuidanceCoerced).toBe(false);
  });

  it("T3 — LR ready → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION", () => {
    const g = guidance(
      "RECOMMEND_NEXT_STEP",
      "LIFECYCLE_TRANSITION",
      "Je te recommande maintenant de lancer le Cadrage gouverné afin d'y traiter les inconnues restantes.",
      "candidate cycle supportable",
    );
    const coherent = normalizeNoraProductTurnStructuredOutput(
      productTurn({
        assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        lr: nextCycleLr(
          "cyc:framing",
          "Lancer le Cadrage gouverné pour traiter les inconnues restantes.",
        ),
        narrative:
          "Le cadrage est suffisamment stabilisé pour arrêter l'exploration pré-cycle.",
        conversationGuidance: g,
      }),
    );
    expect(coherent?.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
    expect(coherent?.lifecycleRecommendation?.intent).toBe("NEXT_CYCLE");
    expect(coherent?.conversationGuidance.kind).toBe("RECOMMEND_NEXT_STEP");
    expect(coherent?.conversationGuidance.scope).toBe("LIFECYCLE_TRANSITION");
  });

  it("T4 — active cycle → RECOMMEND_NEXT_STEP + ACTIVE_CYCLE", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: true,
    };
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le cycle actif de Cadrage couvre déjà ce travail.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "premature exit"),
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "ACTIVE_CYCLE",
        "Je te propose de clarifier maintenant les critères de succès dans le cycle actif.",
        "work owned by active cycle",
      ),
      activeCycleWork: {
        items: [
          {
            type: "Recommendation",
            statement: "Clarifier les critères de succès",
            confidence: "medium",
            blocking: false,
          },
        ],
      },
    });
    expect(coherent.disposition).toBe("DEFER_TO_ACTIVE_CYCLE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance.scope).toBe("ACTIVE_CYCLE");
    expect(coherent.conversationGuidance.kind).toBe("RECOMMEND_NEXT_STEP");
  });

  it("T5 — multiple paths → PRESENT_OPTIONS + PRE_CYCLE", () => {
    const g = guidance(
      "PRESENT_OPTIONS",
      "PRE_CYCLE",
      "Option A Cadrage si le besoin est encore flou ; option B Conception si le périmètre est déjà net. Je pencherais pour le Cadrage.",
      null,
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Deux chemins restent plausibles : Cadrage ou Conception.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: true,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "arbitrary"),
      conversationGuidance: g,
    });
    expect(coherent.disposition).toBe("HOLD_FOR_ROUTING_AMBIGUITY");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance.kind).toBe("PRESENT_OPTIONS");
    expect(coherent.conversationGuidance.scope).toBe("PRE_CYCLE");
    expect(coherent.conversationGuidance.statement).toBe(g.statement);
  });

  it("T6 — Cognitive Stop → HOLD + BLOCKER_RESOLUTION", () => {
    const guided = applyConversationGuidanceCoherence({
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je te recommande d'avancer normalement vers la delivery.",
        null,
      ),
      disposition: "EMIT_LIFECYCLE_RECOMMENDATION",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:delivery", "x"),
      boundaryContradiction: null,
      cognitiveStop: true,
    });
    expect(guided.conversationGuidance.kind).toBe("HOLD");
    expect(guided.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");
    expect(guided.conversationGuidance.statement).toBe(
      CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP.statement,
    );
    expect(guided.conversationGuidance.statement).not.toMatch(
      /avancer normalement/i,
    );
  });

  it("T7 — history continuity: composed text carries guidance into next turn", async () => {
    const { runtime, projectId } = await bootProject("nci7");
    const g = guidance(
      "RECOMMEND_NEXT_STEP",
      "LIFECYCLE_TRANSITION",
      "Je te propose maintenant de lancer le Cadrage gouverné.",
      "suite",
    );
    const structured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:framing", "Lancer le Cadrage."),
      narrative: "Synthèse : besoin suffisamment clair pour quitter le pré-cycle.",
      conversationGuidance: g,
    });
    const sessionDbPath = tempDbPath("nci7-sess.sqlite");
    const first = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Fais une synthèse de la situation.",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.text).toContain(g.statement);

    const followUp = productTurn({
      assessment: {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lr: null,
      narrative: `Je reprends ta proposition : ${g.statement} Confirmons le canal d'entrée.`,
      conversationGuidance: guidance(
        "ASK_CLARIFICATION",
        "PRE_CYCLE",
        "Le canal d'entrée principal est-il web ou mobile ?",
        "clarification matérielle",
      ),
    });
    const second = await orchestrateProjectAssistantTurn({
      projectId,
      content: "OK, on enchaîne.",
      sessionDbPath,
      history: [
        { role: "user", content: "Fais une synthèse de la situation." },
        { role: "assistant", content: first.text },
      ],
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(followUp))],
        ]),
      },
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.sessionId).toBe(first.sessionId);
    expect(second.text).toMatch(/canal d'entrée/i);
    void runtime;
  });

  it("T8 — authority isolation across kinds", async () => {
    const { runtime, projectId } = await bootProject("nci8");
    const beforeCycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const cases: Array<{
      kind: ConversationGuidanceKind;
      scope: ConversationGuidanceScope;
      assessment: PreCycleRoutingAssessment;
      lr: ReturnType<typeof nextCycleLr> | null;
    }> = [
      {
        kind: "RECOMMEND_NEXT_STEP",
        scope: "LIFECYCLE_TRANSITION",
        assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        lr: nextCycleLr("cyc:framing", "Lancer le Cadrage."),
      },
      {
        kind: "ASK_CLARIFICATION",
        scope: "PRE_CYCLE",
        assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT },
        lr: null,
      },
      {
        kind: "PRESENT_OPTIONS",
        scope: "PRE_CYCLE",
        assessment: {
          routingBlockingUnknownPresent: false,
          candidateCycleSupportable: false,
          remainingUnknownsAreCycleOwned: false,
          multiplePlausibleCycles: true,
          activeCycleAlreadyCoversWork: false,
        },
        lr: null,
      },
      {
        kind: "HOLD",
        scope: "BLOCKER_RESOLUTION",
        assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT },
        lr: null,
      },
    ];
    for (const c of cases) {
      const structured = productTurn({
        assessment: c.assessment,
        lr: c.lr,
        narrative: `Tour kind=${c.kind}`,
        conversationGuidance: guidance(
          c.kind,
          c.scope,
          `Statement pour ${c.kind} — suite utile sans autorité.`,
          "t8",
        ),
      });
      const orch = await orchestrateProjectAssistantTurn({
        projectId,
        content: `msg-${c.kind}`,
        sessionDbPath: tempDbPath(`nci8-${c.kind}.sqlite`),
        simulateMemoryBUnavailable: true,
        provider: new FakeConversationProvider({ scripted: ["unused"] }),
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
          agentsModel: new ScriptedModel([
            [assistantMessage(JSON.stringify(structured))],
          ]),
        },
      });
      expect(orch.ok).toBe(true);
      if (!orch.ok) return;
      expect(orch.text).toContain(`Statement pour ${c.kind}`);
    }
    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("T9 — malformed → HOLD + BLOCKER_RESOLUTION", () => {
    const plain = coercePlainTextToProductTurnJson(
      "Réponse partielle en plain text.",
    );
    const parsed = JSON.parse(plain) as Record<string, unknown>;
    expect(isNoraProductTurnWithOptionalLr(parsed)).toBe(true);
    const g = parsed.conversationGuidance as ConversationGuidance;
    expect(g.kind).toBe("HOLD");
    expect(g.scope).toBe("BLOCKER_RESOLUTION");
    expect(g.statement).toBe(CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD.statement);
    expect(g.kind).not.toBe("RECOMMEND_NEXT_STEP");
  });

  it("T10 — existing cognitive contracts remain coherent", () => {
    expect(
      normalizeNoraProductTurnStructuredOutput({
        narrative: "x",
        preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        lifecycleRecommendation: nextCycleLr("cyc:framing", "ok"),
        conversationGuidance: guidance(
          "RECOMMEND_NEXT_STEP",
          "LIFECYCLE_TRANSITION",
          "Je te propose le Cadrage.",
          null,
        ),
      })?.disposition,
    ).toBe("EMIT_LIFECYCLE_RECOMMENDATION");

    const missingLr = applyPreCycleRoutingBoundaryCoherence({
      narrative: "y",
      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      lifecycleRecommendation: null,
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "should become HOLD via contradiction",
        null,
      ),
    });
    expect(missingLr.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(missingLr.conversationGuidance.kind).toBe("HOLD");
    expect(missingLr.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");

    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/lifecycleRecommendation/);
    expect(prompt).toMatch(/activeCycleWork/);
  });

  // ─── CR-NCI-01 / 02 / 03 adversarial ─────────────────────────────────

  it("CR1-A — never ASK_CLARIFICATION with incompatible recommend statement", () => {
    const badStatement = "Je recommande de passer en Delivery.";
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Routing still blocked.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        badStatement,
        null,
      ),
    });
    expect(coherent.conversationGuidance.kind).toBe("HOLD");
    expect(coherent.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");
    expect(coherent.conversationGuidance.statement).toBe(
      CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER.statement,
    );
    expect(coherent.conversationGuidance.statement).not.toBe(badStatement);
    expect(coherent.conversationGuidanceCoerced).toBe(true);
  });

  it("CR1-B — never PRESENT_OPTIONS with mono-option recommend statement", () => {
    const mono = "Je recommande uniquement le Cadrage maintenant.";
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Ambigu.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: true,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        mono,
        null,
      ),
    });
    expect(coherent.conversationGuidance.kind).toBe("HOLD");
    expect(coherent.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");
    expect(coherent.conversationGuidance.statement).toBe(
      CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE.statement,
    );
    expect(coherent.conversationGuidance.statement).not.toBe(mono);
  });

  it("CR2-A — DEFER rejects LIFECYCLE_TRANSITION scope without prose parse", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Active cycle covers work.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: true,
        remainingUnknownsAreCycleOwned: true,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: true,
      },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je te recommande de sortir vers un nouveau cycle.",
        null,
      ),
    });
    expect(coherent.disposition).toBe("DEFER_TO_ACTIVE_CYCLE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance).toEqual(
      CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
    );
  });

  it("CR2-B — DEFER keeps RECOMMEND_NEXT_STEP + ACTIVE_CYCLE", () => {
    const g = guidance(
      "RECOMMEND_NEXT_STEP",
      "ACTIVE_CYCLE",
      "Je te propose de traiter l'inconnue X dans le cycle actif.",
      null,
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Stay in cycle.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: true,
        remainingUnknownsAreCycleOwned: true,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: true,
      },
      lifecycleRecommendation: null,
      conversationGuidance: g,
    });
    expect(coherent.conversationGuidance).toEqual(g);
    expect(coherent.conversationGuidanceCoerced).toBe(false);
  });

  it("CR3-A — Cognitive Stop blocks NEW LR materialization", async () => {
    const { runtime, projectId } = await bootProject("nci-cr3a");
    const beforeLr = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    const beforeHd = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const beforeCycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const structured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:framing", "Lancer le Cadrage."),
      narrative: "Contradiction détectée malgré LR candidate.",
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je te recommande maintenant le Cadrage.",
        null,
      ),
    });
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Évalue.",
      sessionDbPath: tempDbPath("nci-cr3a-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      contradictionAssessment: COGNITIVE_STOP_ASSESSMENT,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.status).toBe("cognitive_stop");
    expect(orch.text).toMatch(/frein cognitif|bloqu/i);
    expect(orch.text).not.toMatch(/Je te recommande maintenant le Cadrage/i);
    expect(orch.lifecycleRecommendationMaterialized).toBe(false);
    const afterLr = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    expect(afterLr.length).toBe(beforeLr.length);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
  });

  it("CR3-B — EMIT+LR with HOLD guidance → mismatch, no LR materialize", async () => {
    const { runtime, projectId } = await bootProject("nci-cr3b");
    const beforeLr = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    const structured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:framing", "Lancer le Cadrage."),
      narrative: "Prêt mais guidance HOLD.",
      conversationGuidance: guidance(
        "HOLD",
        "BLOCKER_RESOLUTION",
        "Je retiens la suite.",
        null,
      ),
    });
    const unit = normalizeNoraProductTurnStructuredOutput(structured);
    expect(unit?.boundaryContradiction).toBe(
      CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
    );
    expect(unit?.lifecycleRecommendation?.intent).toBe("NEXT_CYCLE");
    expect(unit?.conversationGuidance.kind).toBe("HOLD");
    expect(unit?.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");

    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "go",
      sessionDbPath: tempDbPath("nci-cr3b-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.code).toBe(CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH);
    const afterLr = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    expect(afterLr.length).toBe(beforeLr.length);
  });

  it("CR3-C — EMIT+LR+compatible guidance happy path preserved", async () => {
    const { runtime, projectId } = await bootProject("nci-cr3c");
    const structured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:framing", "Lancer le Cadrage."),
      narrative: "Prêt.",
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je te recommande maintenant le Cadrage.",
        null,
      ),
    });
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "ok",
      sessionDbPath: tempDbPath("nci-cr3c-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationMaterialized).toBe(true);
    const lrItems = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    expect(lrItems.length).toBeGreaterThanOrEqual(1);
    expect(NORA_LIFECYCLE_RECOMMENDATION_ACTOR.role).toBeTruthy();
  });

  it("CR3-D — Cognitive Stop leaves historical LR unchanged; no NEW LR", async () => {
    const { runtime, projectId } = await bootProject("nci-cr3d");
    // First turn: durable LR.
    const firstStructured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:framing", "Lancer le Cadrage historique."),
      narrative: "Premier tour OK.",
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je te recommande le Cadrage.",
        null,
      ),
    });
    const first = await orchestrateProjectAssistantTurn({
      projectId,
      content: "first",
      sessionDbPath: tempDbPath("nci-cr3d-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(firstStructured))],
        ]),
      },
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.lifecycleRecommendationMaterialized).toBe(true);
    const historical = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    expect(historical.length).toBeGreaterThanOrEqual(1);
    const historicalIds = historical.map((i) => i.epistemicItemId).sort();

    // Second turn: Cognitive Stop + optimistic LR candidate.
    const secondStructured = productTurn({
      assessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lr: nextCycleLr("cyc:delivery", "Nouvelle LR à ne pas matérialiser."),
      narrative: "Stop cognitif.",
      conversationGuidance: guidance(
        "RECOMMEND_NEXT_STEP",
        "LIFECYCLE_TRANSITION",
        "Je recommande Delivery maintenant.",
        null,
      ),
    });
    const second = await orchestrateProjectAssistantTurn({
      projectId,
      content: "second",
      sessionDbPath: tempDbPath("nci-cr3d-sess2.sqlite"),
      simulateMemoryBUnavailable: true,
      contradictionAssessment: COGNITIVE_STOP_ASSESSMENT,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(secondStructured))],
        ]),
      },
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.status).toBe("cognitive_stop");
    expect(second.lifecycleRecommendationMaterialized).toBe(false);
    const after = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter((i) => i.source === "lifecycle-recommendation:nora");
    expect(after.map((i) => i.epistemicItemId).sort()).toEqual(historicalIds);
  });
});
