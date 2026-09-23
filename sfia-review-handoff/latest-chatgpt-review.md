# NORA-CONVERSATIONAL-INITIATIVE-01 — CR-NCI-01/02/03 FULL Review Pack

- **Timestamp (UTC):** 2026-09-23T23:26:35Z
- **Cycle:** NORA-CONVERSATIONAL-INITIATIVE-01 — Critical Review Bounded Correction
- **Prior handoff:** `eaf52e802ba4d6d792c4d8057f1b61751522e5ec` / blob `2e3485181384473faf7529a962d2f117914fb817`
- **Candidate branch:** `feat/sfia-studio-nora-conversational-initiative-01`
- **Claim maximal:** CONVERSATIONAL INITIATIVE IMPLEMENTED DETERMINISTICALLY WITH STRUCTURAL ROUTING / ACTIVE-CYCLE / LIFECYCLE / COGNITIVE-STOP COHERENCE AT TESTED PRODUCT-TURN SCOPE
- **Verdict candidate:** NORA-CONVERSATIONAL-INITIATIVE-01 — CR-NCI-01/02/03 CLOSED — READY FOR CHATGPT CRITICAL RE-REVIEW

---

## 1. Local Git Truth

| Check | Value |
|-------|-------|
| branch | `feat/sfia-studio-nora-conversational-initiative-01` |
| HEAD baseline | `7d05e73b4e24f3f6c14d9c15220720957b9b19b5` |
| HEAD^{tree} | `2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5` |
| origin/main | `7d05e73b4e24f3f6c14d9c15220720957b9b19b5` |
| Candidate | local uncommitted continuation of accepted partial candidate |
| Reset/stash/destructive checkout | **0** |
| Project push / PR / merge | **0** |
| Runtime v3 | NON ADOPTED |

---

## 2. CR status

| CR | Status | Fix |
|----|--------|-----|
| CR-NCI-01 | **CLOSED** | Incompatible guidance → full server-owned HOLD object; never kind-only relabel keeping statement |
| CR-NCI-02 | **CLOSED** | Required `scope` enum; DEFER requires `ACTIVE_CYCLE` structurally |
| CR-NCI-03 | **CLOSED** | Normalize with cognitiveStop before LR; NEW LR materialization gated; EMIT requires RECOMMEND+LIFECYCLE_TRANSITION or `CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH` |

---

## 3. Exact final conversationGuidance contract

```
conversationGuidance: {
  kind: RECOMMEND_NEXT_STEP | ASK_CLARIFICATION | PRESENT_OPTIONS | HOLD
  scope: PRE_CYCLE | ACTIVE_CYCLE | LIFECYCLE_TRANSITION | BLOCKER_RESOLUTION
  statement: string (non-empty)
  rationale: string | null
}
```

Fail-closed default: HOLD + BLOCKER_RESOLUTION + safe statement (never RECOMMEND_NEXT_STEP).

---

## 4. Coherence matrix (kind × scope × disposition)

| Disposition / condition | Compatible | Else |
|-------------------------|------------|------|
| CONTINUE + routing blocker | ASK+PRE_CYCLE or HOLD+BLOCKER | full HOLD_ROUTING_BLOCKER |
| CONTINUE no blocker | scope PRE_CYCLE, or HOLD+BLOCKER | full HOLD_BOUNDARY |
| HOLD_FOR_ROUTING_AMBIGUITY | PRESENT/ASK+PRE_CYCLE or HOLD+BLOCKER | full HOLD_MULTI_CYCLE |
| DEFER_TO_ACTIVE_CYCLE | any kind + scope ACTIVE_CYCLE | full HOLD_ACTIVE_CYCLE_SCOPE |
| EMIT + LR | RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION | HOLD_BOUNDARY + code CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH (no materialize) |
| Cognitive Stop | HOLD + BLOCKER_RESOLUTION | replace full object; strip LR for this turn |

**No statement prose parsing. No kind-only relabel.**

---

## 5. Orchestration ordering (before → after)

**Before (gap):** LR materialize possible → later Cognitive Stop only changed Pilot text.

**After:**
1. `runNoraCognitiveTurn`
2. `normalize(+cognitiveStop)` once → `coherentEarly`
3. fail on MISSING_REQUIRED_LR or CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH
4. ACW (existing invariants)
5. LR materialize **only if** `!cognitiveStop && !boundaryContradiction && lifecycleRecommendation`
6. compose Pilot text from coherent guidance
7. return

---

## 6. Proofs

- **No statement relabel mismatch:** CR1-A/B — incompatible RECOMMEND becomes server HOLD statement, not ASK/PRESENT with same statement.
- **Active-cycle scope:** CR2-A/B — DEFER rejects LIFECYCLE_TRANSITION; keeps ACTIVE_CYCLE.
- **Cognitive Stop no-new-LR:** CR3-A/D — status cognitive_stop; LR count unchanged; historical LR preserved.
- **EMIT mismatch:** CR3-B — validation_error CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH; 0 LR write.
- **Happy path:** CR3-C — LR materializes with RECOMMEND+LIFECYCLE_TRANSITION.

---

## 7. Files

| Path | Role |
|------|------|
| noraProductTurnOutputType.ts | scope + matrix + fail-closed objects + mismatch code |
| orchestrateTurn.ts | cognitiveStop-first normalize; LR gate; single compose |
| buildProjectSystemPrompt.ts | scope instructions |
| providerAgentsModel / runNoraAgentsTurn | schema/fail-closed passthrough |
| noraConversationalInitiative.d0.test.ts | T1–T10 + CR1–CR3 |
| fixture helpers (RB / ACW / LR finalCorr) | scope-aligned conversationGuidance |

---

## 8. Tests

| Suite | Result |
|-------|--------|
| noraConversationalInitiative.d0 | **20 PASS** (T1–T10 + CR1-A/B, CR2-A/B, CR3-A/B/C/D) |
| Regression gate (12 files) | **213 PASS** |
| typecheck | **PASS** |
| ZERO REAL | YES |
| Authority side effects | 0 HD / Cycle START / Cursor / EC from guidance |

---

## 9. Reservations

- REAL conversational quality not proven.
- No Nora Cognitive Completion COMPLETE claim.
- Candidate still local uncommitted (no project push).

---

## 10. FULL — created test file

### `noraConversationalInitiative.d0.test.ts`

```typescript
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

```

---

## 11. FULL — core contract file

### `noraProductTurnOutputType.ts`

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "./noraLifecycleRecommendationOutputType";

/**
 * Pre-cycle routing boundary assessment (same Product turn).
 * Non-durable, non-authoritative — forces Routing Relevance / Cycle Ownership
 * into structured facts so server coherence can gate lifecycleRecommendation.
 * NEVER a Fact / HumanDecision / CycleInstance / LPS state.
 */
export const PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "routingBlockingUnknownPresent",
    "candidateCycleSupportable",
    "remainingUnknownsAreCycleOwned",
    "multiplePlausibleCycles",
    "activeCycleAlreadyCoversWork",
  ],
  properties: {
    /** ROUTING RELEVANCE: an answer could still change cycle / profile / gate / STOP. */
    routingBlockingUnknownPresent: { type: "boolean" as const },
    /** A single next cycle type is honestly supportable. */
    candidateCycleSupportable: { type: "boolean" as const },
    /** CYCLE OWNERSHIP: remaining unknowns belong to that candidate cycle's work. */
    remainingUnknownsAreCycleOwned: { type: "boolean" as const },
    /** More than one cycle remains honestly plausible. */
    multiplePlausibleCycles: { type: "boolean" as const },
    /** An active CycleInstance already covers the work. */
    activeCycleAlreadyCoversWork: { type: "boolean" as const },
  },
} as const;

export type PreCycleRoutingAssessment = {
  routingBlockingUnknownPresent: boolean;
  candidateCycleSupportable: boolean;
  remainingUnknownsAreCycleOwned: boolean;
  multiplePlausibleCycles: boolean;
  activeCycleAlreadyCoversWork: boolean;
};

/**
 * Deterministic disposition derived from assessment facts (not model prose).
 * Not persisted; not authority.
 */
export type PreCycleRoutingDisposition =
  | "CONTINUE_PRE_CYCLE"
  | "EMIT_LIFECYCLE_RECOMMENDATION"
  | "DEFER_TO_ACTIVE_CYCLE"
  | "HOLD_FOR_ROUTING_AMBIGUITY";

/** Fail-closed default for plain-text coerce / missing assessment. */
export const PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: true,
    candidateCycleSupportable: false,
    remainingUnknownsAreCycleOwned: false,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** Candidate clear; remaining unknowns belong to the cycle (emit LR). */
export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: false,
    candidateCycleSupportable: true,
    remainingUnknownsAreCycleOwned: true,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids). */
export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["type", "statement", "confidence", "blocking"],
  properties: {
    type: {
      type: "string" as const,
      enum: [
        "Observation",
        "Hypothesis",
        "Option",
        "Recommendation",
        "Reservation",
        "Contradiction",
      ],
    },
    statement: { type: "string" as const },
    confidence: {
      anyOf: [
        {
          type: "string" as const,
          enum: ["high", "medium", "low", "none"],
        },
        { type: "null" as const },
      ],
    },
    blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
  },
} as const;

export const NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["items"],
  properties: {
    items: {
      type: "array" as const,
      items: NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
    },
  },
} as const;

export type NoraActiveCycleWorkItem = {
  type:
    | "Observation"
    | "Hypothesis"
    | "Option"
    | "Recommendation"
    | "Reservation"
    | "Contradiction";
  statement: string;
  confidence: "high" | "medium" | "low" | "none" | null;
  blocking: boolean | null;
};

export type NoraActiveCycleWorkOutput = {
  items: NoraActiveCycleWorkItem[];
};

/**
 * NORA-CONVERSATIONAL-INITIATIVE-01 — ephemeral conversational continuation.
 * Cognitive / non-authoritative / same Product turn — never Truth C,
 * HumanDecision, ExecutionContract, or execution authorization.
 * CR-NCI-01/02: kind×scope matrix; never relabel kind while keeping statement.
 */
export const CONVERSATION_GUIDANCE_KINDS = [
  "RECOMMEND_NEXT_STEP",
  "ASK_CLARIFICATION",
  "PRESENT_OPTIONS",
  "HOLD",
] as const;

export type ConversationGuidanceKind =
  (typeof CONVERSATION_GUIDANCE_KINDS)[number];

export const CONVERSATION_GUIDANCE_SCOPES = [
  "PRE_CYCLE",
  "ACTIVE_CYCLE",
  "LIFECYCLE_TRANSITION",
  "BLOCKER_RESOLUTION",
] as const;

export type ConversationGuidanceScope =
  (typeof CONVERSATION_GUIDANCE_SCOPES)[number];

export const CONVERSATION_GUIDANCE_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["kind", "scope", "statement", "rationale"],
  properties: {
    kind: {
      type: "string" as const,
      enum: [...CONVERSATION_GUIDANCE_KINDS],
    },
    scope: {
      type: "string" as const,
      enum: [...CONVERSATION_GUIDANCE_SCOPES],
    },
    statement: { type: "string" as const },
    rationale: {
      anyOf: [{ type: "string" as const }, { type: "null" as const }],
    },
  },
} as const;

export type ConversationGuidance = {
  kind: ConversationGuidanceKind;
  scope: ConversationGuidanceScope;
  statement: string;
  rationale: string | null;
};

/** Fail-closed HOLD when structured guidance is missing / invalid. */
export const CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.",
    rationale: "sortie structurée insuffisante",
  });

/** Server-owned HOLD — routing blocker (never invents a specific question). */
export const CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Une clarification matérielle est nécessaire avant de pouvoir orienter la suite.",
    rationale: "routing_blocking_unknown",
  });

/** Server-owned HOLD — multiple plausible cycles. */
export const CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Plusieurs trajectoires restent plausibles ; il faut les départager avant de recommander une suite.",
    rationale: "multiple_plausible_cycles",
  });

/** Server-owned HOLD — DEFER requires ACTIVE_CYCLE scope. */
export const CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Le travail doit rester dans le cycle actif ; aucune transition n'est recommandée sur ce tour.",
    rationale: "active_cycle_scope_required",
  });

/** Server-owned HOLD — Cognitive Stop outranks optimistic guidance / LR. */
export const CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Avant toute suite, il faut lever le frein cognitif qui bloque la progression.",
    rationale: "cognitive_stop_outranks_optimistic_guidance",
  });

/** Server-owned HOLD — structured boundary contradiction. */
export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "La suite structurée est incomplète ; aucune progression recommandée tant que le contrat n'est pas cohérent.",
    rationale: "boundary_contradiction_fail_closed",
  });

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - pre-cycle routing assessment (required, non-authoritative)
 * - optional Lifecycle Recommendation candidate (nullable)
 * - optional active-cycle work items (nullable; D-GF-ACW-01)
 * - conversationGuidance (required; ephemeral continuation; non-authoritative)
 * Same Agents Runner — one model call — no prose parsing.
 */
export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_product_turn_with_optional_lr",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "narrative",
      "preCycleRoutingAssessment",
      "lifecycleRecommendation",
      "activeCycleWork",
      "conversationGuidance",
    ],
    properties: {
      narrative: { type: "string" as const },
      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA,
      lifecycleRecommendation: {
        anyOf: [
          { type: "null" as const },
          NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE.schema,
        ],
      },
      activeCycleWork: {
        anyOf: [
          { type: "null" as const },
          NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
        ],
      },
      conversationGuidance: CONVERSATION_GUIDANCE_SCHEMA,
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  conversationGuidance: ConversationGuidance;
};

export function isPreCycleRoutingAssessment(
  value: unknown,
): value is PreCycleRoutingAssessment {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.routingBlockingUnknownPresent === "boolean" &&
    typeof o.candidateCycleSupportable === "boolean" &&
    typeof o.remainingUnknownsAreCycleOwned === "boolean" &&
    typeof o.multiplePlausibleCycles === "boolean" &&
    typeof o.activeCycleAlreadyCoversWork === "boolean"
  );
}

const ACTIVE_CYCLE_WORK_ITEM_TYPES = new Set([
  "Observation",
  "Hypothesis",
  "Option",
  "Recommendation",
  "Reservation",
  "Contradiction",
]);

const ACTIVE_CYCLE_WORK_CONFIDENCES = new Set([
  "high",
  "medium",
  "low",
  "none",
]);

export function isNoraActiveCycleWorkItem(
  value: unknown,
): value is NoraActiveCycleWorkItem {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!ACTIVE_CYCLE_WORK_ITEM_TYPES.has(String(o.type))) return false;
  if (typeof o.statement !== "string") return false;
  if (
    o.confidence !== null &&
    !(
      typeof o.confidence === "string" &&
      ACTIVE_CYCLE_WORK_CONFIDENCES.has(o.confidence)
    )
  ) {
    return false;
  }
  if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
  return true;
}

export function isNoraActiveCycleWorkOutput(
  value: unknown,
): value is NoraActiveCycleWorkOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!Array.isArray(o.items)) return false;
  return o.items.every(isNoraActiveCycleWorkItem);
}

const CONVERSATION_GUIDANCE_KIND_SET = new Set<string>(
  CONVERSATION_GUIDANCE_KINDS,
);
const CONVERSATION_GUIDANCE_SCOPE_SET = new Set<string>(
  CONVERSATION_GUIDANCE_SCOPES,
);

export function isConversationGuidance(
  value: unknown,
): value is ConversationGuidance {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!CONVERSATION_GUIDANCE_KIND_SET.has(String(o.kind))) return false;
  if (!CONVERSATION_GUIDANCE_SCOPE_SET.has(String(o.scope))) return false;
  if (typeof o.statement !== "string" || o.statement.trim().length === 0) {
    return false;
  }
  if (o.rationale !== null && typeof o.rationale !== "string") return false;
  if (typeof o.rationale === "string" && o.rationale.trim().length === 0) {
    return false;
  }
  return true;
}

/**
 * Parse raw conversationGuidance; invalid / missing → fail-closed HOLD.
 * Never invents RECOMMEND_NEXT_STEP.
 */
export function parseConversationGuidanceOrFailClosed(
  value: unknown,
): ConversationGuidance {
  if (!isConversationGuidance(value)) {
    return { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD };
  }
  return {
    kind: value.kind,
    scope: value.scope,
    statement: value.statement.trim(),
    rationale:
      value.rationale === null ? null : String(value.rationale).trim(),
  };
}

/**
 * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
 */
export function derivePreCycleRoutingDisposition(
  assessment: PreCycleRoutingAssessment,
): PreCycleRoutingDisposition {
  if (assessment.activeCycleAlreadyCoversWork) {
    return "DEFER_TO_ACTIVE_CYCLE";
  }
  if (assessment.multiplePlausibleCycles) {
    return "HOLD_FOR_ROUTING_AMBIGUITY";
  }
  if (assessment.routingBlockingUnknownPresent) {
    return "CONTINUE_PRE_CYCLE";
  }
  if (assessment.candidateCycleSupportable) {
    // Remaining unknowns may be cycle-owned (typical) or absent — either way,
    // no routing-blocking unknown remains → cede to Lifecycle Recommendation.
    return "EMIT_LIFECYCLE_RECOMMENDATION";
  }
  return "CONTINUE_PRE_CYCLE";
}

export type PreCycleRoutingBoundaryCoherenceResult = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  disposition: PreCycleRoutingDisposition;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  /** Passthrough — not stripped by routing coherence (D-GF-ACW-01). */
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  /** Ephemeral conversational continuation (coherent with disposition). */
  conversationGuidance: ConversationGuidance;
  /** True when a candidate LR was stripped by boundary coherence. */
  lifecycleRecommendationSuppressed: boolean;
  suppressReason: string | null;
  /**
   * Structured boundary contradiction (e.g. EMIT without LR / guidance mismatch).
   * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
   */
  boundaryContradiction: string | null;
  /**
   * True when guidance was replaced by a server-owned fallback object
   * (never a kind-only relabel that keeps an incompatible statement).
   */
  conversationGuidanceCoerced: boolean;
  conversationGuidanceCoerceReason: string | null;
};

/** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
  "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

/**
 * EMIT + valid LR requires RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.
 * CR-NCI-01/03 — never auto-promote HOLD → RECOMMEND; fail-closed instead.
 */
export const CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH =
  "CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH" as const;

function isHoldBlockerResolution(g: ConversationGuidance): boolean {
  return g.kind === "HOLD" && g.scope === "BLOCKER_RESOLUTION";
}

function keepOrReplace(
  base: ConversationGuidance,
  compatible: boolean,
  fallback: ConversationGuidance,
  reason: string,
): {
  conversationGuidance: ConversationGuidance;
  coerced: boolean;
  coerceReason: string | null;
} {
  if (compatible) {
    return { conversationGuidance: base, coerced: false, coerceReason: null };
  }
  return {
    conversationGuidance: { ...fallback },
    coerced: true,
    coerceReason: reason,
  };
}

/**
 * Deterministic conversationGuidance coherence with routing disposition.
 * CR-NCI-01: never relabel kind while keeping an incompatible statement —
 * replace the full object with a server-owned fail-closed HOLD when needed.
 * CR-NCI-02: kind×scope matrix (structured only — no statement prose parse).
 * Never invents RECOMMEND_NEXT_STEP from fail-closed paths.
 */
export function applyConversationGuidanceCoherence(input: {
  conversationGuidance: ConversationGuidance;
  disposition: PreCycleRoutingDisposition;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  boundaryContradiction: string | null;
  /** When true, Cognitive Stop outranks any optimistic guidance → HOLD. */
  cognitiveStop?: boolean;
}): {
  conversationGuidance: ConversationGuidance;
  coerced: boolean;
  coerceReason: string | null;
  /** When set, parent must strip LR and fail-closed (EMIT guidance mismatch). */
  lifecycleGuidanceMismatch: boolean;
} {
  const base = input.conversationGuidance;

  if (input.cognitiveStop === true) {
    if (isHoldBlockerResolution(base)) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP },
      coerced: true,
      coerceReason: "cognitive_stop_override",
      lifecycleGuidanceMismatch: false,
    };
  }

  if (input.boundaryContradiction != null) {
    if (isHoldBlockerResolution(base)) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
      coerced: true,
      coerceReason: "boundary_contradiction",
      lifecycleGuidanceMismatch: false,
    };
  }

  const kind = base.kind;
  const scope = base.scope;
  const assessment = input.preCycleRoutingAssessment;

  if (input.disposition === "CONTINUE_PRE_CYCLE") {
    if (assessment.routingBlockingUnknownPresent) {
      const ok =
        (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
        (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
      const r = keepOrReplace(
        base,
        ok,
        CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER,
        "routing_blocking_unknown",
      );
      return { ...r, lifecycleGuidanceMismatch: false };
    }
    // Informative pre-cycle without routing blocker.
    const ok =
      scope === "PRE_CYCLE" ||
      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_BOUNDARY,
      "continue_pre_cycle_scope",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  if (input.disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    const ok =
      (kind === "PRESENT_OPTIONS" && scope === "PRE_CYCLE") ||
      (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE,
      "multiple_plausible_cycles",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  if (input.disposition === "DEFER_TO_ACTIVE_CYCLE") {
    const ok = scope === "ACTIVE_CYCLE";
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
      "active_cycle_scope_required",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  // EMIT_LIFECYCLE_RECOMMENDATION + LR kept → require transition guidance.
  if (input.lifecycleRecommendation != null) {
    const ok =
      kind === "RECOMMEND_NEXT_STEP" && scope === "LIFECYCLE_TRANSITION";
    if (ok) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    // Never auto-promote HOLD/ASK/OPTIONS → RECOMMEND_NEXT_STEP.
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
      coerced: true,
      coerceReason: "lifecycle_guidance_mismatch",
      lifecycleGuidanceMismatch: true,
    };
  }

  return {
    conversationGuidance: base,
    coerced: false,
    coerceReason: null,
    lifecycleGuidanceMismatch: false,
  };
}

/**
 * Compose Pilot-facing assistant text for history continuity.
 * narrative + conversationGuidance.statement — no internal field names,
 * no "PROCHAINE ÉTAPE :" label.
 */
export function composePilotFacingAssistantText(
  narrative: string,
  guidance: ConversationGuidance | null | undefined,
): string {
  const n = narrative.trim();
  if (!guidance) return n;
  const statement = guidance.statement.trim();
  if (!statement) return n;
  if (n.includes(statement)) return n;
  if (!n) return statement;
  return `${n}\n\n${statement}`;
}

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT + LR → keep as emitted (never invent one server-side).
 * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
 * - EMIT + LR + incompatible guidance → CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH.
 * - Cognitive Stop → strip LR for this turn; HOLD + BLOCKER_RESOLUTION.
 * Does not parse narrative. Does not create Cycle/HD/START.
 * activeCycleWork is preserved on all return paths (passthrough).
 * conversationGuidance: full-object fallback when incompatible (CR-NCI-01).
 */
export function applyPreCycleRoutingBoundaryCoherence(input: {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork?: NoraActiveCycleWorkOutput | null;
  conversationGuidance?: ConversationGuidance | null;
  cognitiveStop?: boolean;
}): PreCycleRoutingBoundaryCoherenceResult {
  const disposition = derivePreCycleRoutingDisposition(
    input.preCycleRoutingAssessment,
  );
  const candidate = input.lifecycleRecommendation;
  const activeCycleWork = input.activeCycleWork ?? null;
  const rawGuidance = parseConversationGuidanceOrFailClosed(
    input.conversationGuidance ?? null,
  );
  const cognitiveStop = input.cognitiveStop === true;

  const withGuidance = (
    partial: Omit<
      PreCycleRoutingBoundaryCoherenceResult,
      | "conversationGuidance"
      | "conversationGuidanceCoerced"
      | "conversationGuidanceCoerceReason"
    >,
  ): PreCycleRoutingBoundaryCoherenceResult => {
    const guided = applyConversationGuidanceCoherence({
      conversationGuidance: rawGuidance,
      disposition: partial.disposition,
      preCycleRoutingAssessment: partial.preCycleRoutingAssessment,
      lifecycleRecommendation: partial.lifecycleRecommendation,
      boundaryContradiction: partial.boundaryContradiction,
      cognitiveStop,
    });

    let lifecycleRecommendation = partial.lifecycleRecommendation;
    let lifecycleRecommendationSuppressed =
      partial.lifecycleRecommendationSuppressed;
    let suppressReason = partial.suppressReason;
    let boundaryContradiction = partial.boundaryContradiction;

    // CR-NCI-03 — Cognitive Stop outranks LR materialization for this turn.
    if (cognitiveStop && lifecycleRecommendation != null) {
      lifecycleRecommendation = null;
      lifecycleRecommendationSuppressed = true;
      suppressReason = suppressReason ?? "cognitive_stop";
    }

    // CR-NCI-01/03 — EMIT guidance mismatch: fail-closed via contradiction.
    // Keep the Nora-emitted LR on the coherent result for auditability, but
    // orchestrator must not materialize (boundaryContradiction gate).
    // Do not strip LR here — that would make a later normalize look like
    // MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
    if (guided.lifecycleGuidanceMismatch) {
      boundaryContradiction = CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH;
    }

    return {
      ...partial,
      lifecycleRecommendation,
      lifecycleRecommendationSuppressed,
      suppressReason,
      boundaryContradiction,
      conversationGuidance: guided.conversationGuidance,
      conversationGuidanceCoerced: guided.coerced,
      conversationGuidanceCoerceReason: guided.coerceReason,
    };
  };

  if (disposition === "CONTINUE_PRE_CYCLE") {
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null
          ? "routing_blocking_unknown_present"
          : null,
      boundaryContradiction: null,
    });
  }
  if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null ? "multiple_plausible_cycles" : null,
      boundaryContradiction: null,
    });
  }
  if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
    if (candidate?.intent === "NEXT_CYCLE") {
      return withGuidance({
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        activeCycleWork,
        lifecycleRecommendationSuppressed: true,
        suppressReason: "active_cycle_covers_work",
        boundaryContradiction: null,
      });
    }
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: null,
    });
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
  if (candidate === null) {
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    });
  }
  return withGuidance({
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    activeCycleWork,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
    boundaryContradiction: null,
  });
}

/**
 * Normalize raw structured output into a coherent Product turn.
 * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
 * Missing activeCycleWork → null (backward compatible).
 * Missing / invalid conversationGuidance → fail-closed HOLD.
 */
export function normalizeNoraProductTurnStructuredOutput(
  value: unknown,
  options?: { cognitiveStop?: boolean },
): PreCycleRoutingBoundaryCoherenceResult | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return null;

  const assessment = isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)
    ? o.preCycleRoutingAssessment
    : PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT;

  let lr: NoraLifecycleRecommendationStructuredOutput | null = null;
  if (o.lifecycleRecommendation != null) {
    if (
      !isNoraLifecycleRecommendationStructuredOutput(o.lifecycleRecommendation)
    ) {
      return null;
    }
    lr = o.lifecycleRecommendation;
  }

  let activeCycleWork: NoraActiveCycleWorkOutput | null = null;
  if (o.activeCycleWork != null) {
    if (!isNoraActiveCycleWorkOutput(o.activeCycleWork)) {
      return null;
    }
    activeCycleWork = o.activeCycleWork;
  }

  return applyPreCycleRoutingBoundaryCoherence({
    narrative: o.narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
    activeCycleWork,
    conversationGuidance: parseConversationGuidanceOrFailClosed(
      o.conversationGuidance,
    ),
    cognitiveStop: options?.cognitiveStop === true,
  });
}

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (!isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) return false;
  // Backward compat: missing activeCycleWork treated as null.
  if (
    o.activeCycleWork != null &&
    !isNoraActiveCycleWorkOutput(o.activeCycleWork)
  ) {
    return false;
  }
  if (!isConversationGuidance(o.conversationGuidance)) return false;
  if (o.lifecycleRecommendation === null) return true;
  return isNoraLifecycleRecommendationStructuredOutput(
    o.lifecycleRecommendation,
  );
}

export function isNoraProductTurnOutputTypeName(name: unknown): boolean {
  return name === NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.name;
}

/** Plain-text / incomplete Fake → fail-closed Product turn JSON. */
export function buildFailClosedProductTurnJson(narrative: string): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    lifecycleRecommendation: null,
    activeCycleWork: null,
    conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
  });
}

```

---

## 12. FULL — other modified implementation files

### FULL FILE — `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```typescript
import type { ProjectAssistantContextDto } from "./types";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
} from "./f2/studioCognitiveContext";
import { listCycleTypes } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
/**
 * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
 * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
 * Structured lifecycle Recommendation emission is allowed (authority none) via Product turn output.
 * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
 * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
 * QUAL-TO-GOVERNED-CYCLE — semantic boundary before silent pre-cycle deepening.
 */
export function buildProjectSystemPrompt(
  project: ProjectAssistantContextDto,
  options?: {
    /**
     * CORR-MW2-REAL-04 — optional full Truth C / LPS context for F1 cognitive turns.
     * When set, replaces UI contextSummary in the Contexte line only.
     * Does not mutate ProjectAssistantContextDto / client boundary.
     */
    truthCContext?: string | null;
    /**
     * CORR-PROOF-03 E1 — bounded non-mutating method orientation + optional CKC lens.
     * Guidance only; never Truth C / HumanDecision / ExecutionContract.
     */
    methodContext?: AdvisoryMethodContext | null;
    /**
     * CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
     * When present, supersedes methodContext for method + state sections.
     */
    studioCognitiveContext?: StudioCognitiveContext | null;
  },
): string {
  const constraints =
    project.constraints.length > 0
      ? project.constraints.map((c) => `- ${c}`).join("\n")
      : "- (aucune contrainte listée)";

  const shortRef = project.shortReference
    ? `Référence courte : ${project.shortReference}`
    : "Référence courte : (absente)";

  const contextLine =
    options?.truthCContext != null && options.truthCContext !== ""
      ? options.truthCContext
      : project.contextSummary;

  const studio = options?.studioCognitiveContext ?? null;
  const methodSection = studio
    ? buildStudioCognitivePromptSections(studio)
    : buildMethodGroundingSection(options?.methodContext ?? null);

  return [
    "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
    "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
    "Tu n'as aucune autorité de décision Pilote, d'exécution Cursor, d'écriture Git/GitHub,",
    "ni de création / START / HumanDecision / CycleInstance actif.",
    "Tu PEUX émettre une Recommendation lifecycle structurée SANS autorité (champ lifecycleRecommendation)",
    "lorsque la frontière sémantique ci-dessous est atteinte — le serveur valide et matérialise ;",
    "émettre ≠ qualifier formellement un CycleInstance ≠ décider.",
    "Une intention utilisateur n'est jamais une autorisation d'exécution.",
    "",
    "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
    "À l'intérieur de SFIA Studio, « SFIA » désigne PAR DÉFAUT la méthodologie / doctrine produit SFIA Studio",
    "applicable au projet courant (DoctrinePackage / CKC produit), PAS le Skills Framework for the Information Age.",
    "Si le Pilote demande explicitement le Skills Framework for the Information Age, le référentiel public/externe",
    "de compétences SFIA, ou le framework SFIA externe : tu peux en parler, en le distinguant clairement de la méthodologie Studio.",
    "Ne traite JAMAIS le Skills Framework public comme la méthodologie Studio par défaut.",
    "Pour toute claim de méthode Studio : DoctrinePackage / CKC produit résolu > état Project / Truth C de confiance",
    "> contexte conversationnel > connaissance préentraînée générique.",
    "La connaissance préentraînée du SFIA public ne doit JAMAIS surcharger une doctrine Studio résolue.",
    "Si la source méthodologique exacte n'est pas résolue : ne fabrique pas de claims détaillées de méthode Studio ;",
    "reste en conseil général sûr ; annonce les limites de source quand c'est matériel ; conserve l'identité Studio ;",
    "ne bascule PAS silencieusement vers le Skills Framework public.",
    "",
    "=== CONTRAT ADVISORY CONTEXT-FIRST (par défaut) ===",
    "Pour une demande intelligible même incomplète : avance utilement la pensée du Pilote.",
    "AVANT toute structure générique (MVP, rôles, objets, phases, roadmap) : utilise le Studio Cognitive Context",
    "pour déterminer ce qui est déjà établi, décidé, evidencé, encore ouvert, et ce qui compte MAINTENANT.",
    "Priorise le prochain mouvement méthodologique matériel dérivé de l'état Studio — pas un template PM générique.",
    "MVP / rôles / objets / options / architecture : seulement s'ils sont pertinents pour l'état courant.",
    "Indique ce qu'il ne faut PAS faire encore lorsque l'état le justifie (ex. delivery prématurée).",
    "Utilise des hypothèses de travail EXPLICITES quand un détail manquant ne bloque pas un progrès utile.",
    "Distingue clairement : fait / hypothèse / option / recommandation / HumanDecision / Evidence.",
    "Hypothèse ≠ Fait. Option ≠ Recommandation. Recommandation ≠ HumanDecision. Claim utilisateur ≠ fait externe vérifié.",
    "Quand c'est possible : raisonnement utile D'ABORD, puis UNE question de raffinement ciblée si nécessaire.",
    "Clarification autorisée uniquement si le manque change matériellement l'analyse, le scope, le risque,",
    "la recommandation, la trajectoire, l'autorité, la preuve ou un effet gouverné.",
    "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire. Pas d'intake CKC séquentiel obligatoire.",
    "Pas de dimensions CKC comme formulaire.",
    "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC IDs, digests, routage interne ou schémas structurés.",
    "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
    "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
    "",
    "=== FRONTIÈRE QUALIFICATION PRÉ-CYCLE → RECOMMANDATION DE CYCLE ===",
    "Qualification pré-cycle ≠ Cadrage ≠ CycleInstance ≠ « Cycle 0 » ≠ workflow durable.",
    "Elle sert UNIQUEMENT à déterminer honnêtement le prochain travail gouverné.",
    "Pas de règle « après N messages ». Pas de « toujours Cadrage en premier ».",
    "Pas de matrice métier par domaine. Pas de limite arbitraire de questions.",
    "",
    "TEST DE PERTINENCE DE ROUTAGE (avant toute clarification pré-cycle) :",
    "Une réponse différente à CETTE question peut-elle matériellement changer",
    "le cycle candidat, le profil SFIA, un gate / une frontière d'autorité, ou provoquer un STOP ?",
    "Si OUI → clarification pré-cycle autorisée (au plus une, ciblée).",
    "Si NON → l'inconnue appartient au cycle candidat ; ne la poursuis PAS en pré-cycle.",
    "",
    "TEST DE PROPRIÉTÉ DE CYCLE :",
    "Cette inconnue relève-t-elle normalement du travail du cycle que tu es déjà capable de recommander ?",
    "Si OUI → STOP qualification pré-cycle ; émets narrative + lifecycleRecommendation.",
    "« Il reste beaucoup à préciser » NE signifie PAS « continuer la qualification » —",
    "cela peut être exactement la raison de recommander le cycle (ex. Cadrage) qui possède ces inconnues.",
    "",
    "Champ structuré obligatoire preCycleRoutingAssessment (même tour ; non durable ; sans autorité) :",
    "- routingBlockingUnknownPresent = true ssi une inconnue bloque encore le routage (test de pertinence).",
    "- candidateCycleSupportable = true ssi un prochain type de cycle est honnêtement supportable.",
    "- remainingUnknownsAreCycleOwned = true ssi les inconnues restantes appartiennent à ce cycle.",
    "- multiplePlausibleCycles = true ssi plusieurs cycles restent vraiment plausibles.",
    "- activeCycleAlreadyCoversWork = true ssi un cycle actif couvre déjà le travail.",
    "Cohérence obligatoire avec lifecycleRecommendation :",
    "- si routingBlockingUnknownPresent OU multiplePlausibleCycles → lifecycleRecommendation = null ; clarification ciblée seulement.",
    "- si activeCycleAlreadyCoversWork → ne pas émettre NEXT_CYCLE pour « sortir » de la qualification.",
    "- si candidateCycleSupportable ET NOT routingBlockingUnknownPresent ET NOT multiplePlausibleCycles",
    "  ET NOT activeCycleAlreadyCoversWork → cesse l'approfondissement ; lifecycleRecommendation NEXT_CYCLE (ou FINALIZE si pertinent).",
    "Ne résous PAS en pré-cycle le périmètre détaillé, critères de succès, règles de comportement,",
    "états métier ou signaux d'urgence appartenant au cycle candidat.",
    "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
    "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
    "PRIORITÉ D'INTENT (D-LC-04) :",
    "- Tant qu'un cycle courant non terminal doit se clore → FINALIZE_CURRENT_CYCLE uniquement ;",
    "  un prochain cycle peut être expliqué dans la narrative, jamais typé NEXT_CYCLE concurrent.",
    "- NEXT_CYCLE seulement après cycle courant completed / aucune clôture courante en attente.",
    "targetCycleTypeId DOIT être un identifiant catalogue Studio exact (ex. cyc:framing pour le label « Cadrage »).",
    "Jamais un label humain seul (« Cadrage », « Delivery ») ni un id inventé.",
    "Identifiants catalogue actifs : " +
      listCycleTypes()
        .map((e) => `${e.cycleTypeId} (« ${e.label} »)`)
        .join(", ") +
      ".",
    "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
    "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
    "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
    "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
    "",
    "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
    "Identifie le prochain mouvement utile pour faire progresser le projet.",
    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
    "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
    "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
    "Kinds autorisés uniquement :",
    "- RECOMMEND_NEXT_STEP — progression honnête identifiable (recommandation non autoritative).",
    "- ASK_CLARIFICATION — seulement si l'inconnue change matériellement analyse / scope / risque /",
    "  trajectoire / recommandation / autorité / preuve / effet gouverné ; UNE question ciblée.",
    "- PRESENT_OPTIONS — au moins deux chemins réellement plausibles ; explique brièvement ;",
    "  indique une préférence si supportable ; ne décide pas à la place du Pilote.",
    "- HOLD — progression honnête impossible (Cognitive Stop, contradiction, autorité/preuve manquante) ;",
    "  dis quoi résoudre ensuite — pas une fin passive.",
    "Scopes autorisés (internes — ne jamais exposer ces libellés au Pilote) :",
    "- PRE_CYCLE — continuation / clarification avant une transition supportable.",
    "- ACTIVE_CYCLE — prochain mouvement DANS le cycle actif (activeCycleAlreadyCoversWork).",
    "- LIFECYCLE_TRANSITION — accompagnement d'une lifecycleRecommendation émise dans CE tour.",
    "- BLOCKER_RESOLUTION — stop / contradiction / fail-closed / frein cognitif.",
    "Cohérence kind × scope obligatoire :",
    "- routingBlockingUnknownPresent → ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
    "- multiplePlausibleCycles → PRESENT_OPTIONS|ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
    "- activeCycleAlreadyCoversWork → scope ACTIVE_CYCLE (toute kind pertinente).",
    "- lifecycleRecommendation valide émise → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.",
    "- Cognitive Stop → HOLD + BLOCKER_RESOLUTION.",
    "UNE seule continuation principale par défaut. Pas de liste générique de cinq idées.",
    "Ne demande pas confirmation pour des détails non matériels.",
    "Avance sous Hypothesis explicite lorsque la doctrine actuelle l'autorise.",
    "Ne propose JAMAIS Cursor / Execution comme initiative autonome.",
    "HumanDecision uniquement comme frontière à soumettre au Pilote — jamais auto-créée.",
    "Une Recommendation (dont conversationGuidance) n'est JAMAIS une HumanDecision ni une autorisation d'exécution.",
    "statement : formulation naturelle Pilote (ex. « Je te propose maintenant de… ») ;",
    "varie selon le contexte ; évite le label robotique « PROCHAINE ÉTAPE : ».",
    "N'expose jamais les noms internes conversationGuidance / scope / preCycleRoutingAssessment /",
    "activeCycleWork / LifecycleRecommendation / F1/F2/MW* dans le langage Pilote.",
    "",
    ...buildActiveCycleWorkOutputSection(studio),
    "=== LIMITES D'AUTORITÉ (strict) ===",
    "Distingue vérité courante / historique / superseded / réserve ouverte.",
    "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
    "Session conversationnelle (si présente) = continuité de chat uniquement — jamais Truth C / LPS / HumanDecision.",
    "Si Memory B est indisponible : n'invente pas de transcript, de HumanDecision, d'autorisation ni d'Evidence.",
    "Project/LPS/Cycle restent Product SQLite Truth C (autorité métier). AUCUNE EXÉCUTION.",
    "Ne propose pas d'ouvrir OPS1, Cursor, ni un gate d'exécution.",
    "",
    "=== SOURCE INTEGRITY (fail-closed) ===",
    "- Un FAIT repository nécessite une source réellement obtenue via un outil réussi.",
    "- Ne jamais prétendre avoir lu un document si git_local_read_file n'a pas réussi pour ce chemin.",
    "- search hit (git_local_search_files / git_local_search_content) ≠ file read.",
    "- failed / denied / PATH_NOT_ALLOWED / TRANSPORT_UNAVAILABLE ≠ source.",
    "- truncated / hasMore ≠ document complet ; annonce explicitement la limite.",
    "- outil unavailable ≠ information vérifiée.",
    "- Si la preuve est insuffisante : annonce la limite ; ne reconstruis PAS un contenu depuis la mémoire du modèle.",
    "- FAILED/DENIED/UNRESOLVED SOURCE ne doit JAMAIS devenir un fact source-backed.",
    "",
    "=== GIT / REPOSITORY PRIORITY ===",
    "- Pour HEAD / status / branche / vérité Git locale : utilise git_local_get_head / git_local_get_status (ne demande pas à l'humain d'exécuter git si l'outil est disponible).",
    "- Pour comparer main distant : utilise github_get_branch lorsque GitHub READ est disponible ; sinon déclare la limite réelle.",
    "- Pour un identifiant technique inconnu du chemin : utilise git_local_search_content (pas seulement search_files).",
    "- Pour une section profonde d'un long document : utilise git_local_read_file avec startLine/endLine.",
    "",
    ...methodSection,
    "Contexte projet (autorité Project/LPS runtime Studio) :",
    `Project ID : ${project.projectId}`,
    `Nom : ${project.name}`,
    shortRef,
    `Objectif : ${project.objective}`,
    `Contexte : ${contextLine}`,
    `Criticité : ${project.criticality}`,
    "Contraintes :",
    constraints,
    `LPS : ${project.lpsId} (v${project.lpsVersion}, ${project.lpsCreatedAt})`,
    `Doctrine : ${project.doctrineId} ${project.doctrineVersion} · ${project.doctrineStatus} · ${project.doctrineDigest}`,
    `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
  ].join("\n");
}

function buildActiveCycleWorkOutputSection(
  studio: StudioCognitiveContext | null,
): string[] {
  const lines = [
    "=== SORTIE STRUCTURÉE activeCycleWork (D-GF-ACW-01) ===",
    "Champ structuré obligatoire activeCycleWork (même tour ; nullable) :",
  ];

  const active = studio?.activeCycle ?? null;
  if (!active) {
    lines.push(
      "Aucun cycle ACTIVE dans le contexte Studio → activeCycleWork DOIT être null.",
    );
    lines.push(
      "Ne matérialise pas d'Observation/Hypothesis/Option/Recommendation/Reservation/Contradiction",
      "via activeCycleWork hors cycle actif.",
    );
    lines.push("");
    return lines;
  }

  if (active.workEligible) {
    lines.push(
      "Cycle ACTIVE workEligible : émets activeCycleWork.items pour le travail cognitif",
      "ancré utilisateur dans ce cycle (Observation | Hypothesis | Option | Recommendation |",
      "Reservation | Contradiction uniquement).",
    );
    lines.push(
      "INTERDIT dans activeCycleWork : DecisionRef, EvidenceRef, HumanDecision, Fact,",
      "ExecutionContract ; jamais d'ids, d'authority, ni de provenance (le serveur les mints).",
    );
    lines.push(
      "Si activeCycleAlreadyCoversWork = true (ou disposition DEFER_TO_ACTIVE_CYCLE) :",
      "préfère activeCycleWork plutôt qu'une lifecycleRecommendation NEXT_CYCLE.",
    );
  } else {
    lines.push(
      `Cycle ACTIVE présent mais non workEligible (status=${active.status}) →`,
      "activeCycleWork DOIT être null pour ce tour.",
    );
  }
  lines.push("");
  return lines;
}

function buildMethodGroundingSection(
  methodContext: AdvisoryMethodContext | null,
): string[] {
  const lines = [
    "=== ANCRAGE MÉTHODOLOGIQUE (guidance seulement — non mutante) ===",
    "Ce bloc oriente le conseil. Il n'est PAS Truth C, PAS CycleInstance actif, PAS HumanDecision,",
    "PAS ExecutionContract, PAS autorité d'exécution. Orientation candidat = hypothèse / lentille.",
    "Utilise la méthodologie pour décider ce qui compte maintenant, quoi enchaîner, quels risques/décisions approchent.",
    "Ne force pas un waterfall fixe (« toujours commencer au Cycle 1 »). Ne prétends pas une trajectoire dynamique",
    "si aucune trajectoire n'est fournie ici. Pas d'intake séquentiel obligatoire.",
  ];

  if (!methodContext) {
    lines.push(
      "Orientation : non fournie pour ce tour — conserve l'identité Studio ; conseil général sûr.",
    );
    lines.push("");
    return lines;
  }

  if (methodContext.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (methodContext.cycleLabel
          ? ` · cycle candidat « ${methodContext.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; pose une question ciblée seulement si matériel.",
    );
  }

  if (methodContext.sourceLimit === "doctrine_unavailable") {
    lines.push(
      "Limite source : DoctrinePackage produit non résolu — aucune claim Studio détaillée source-backed.",
    );
  } else if (methodContext.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite source : lentille CKC détaillée indisponible pour l'orientation — dégradation gouvernée ;",
      "pas de bascule vers le Skills Framework public ; pas de fabrication de CKC.",
    );
  }

  if (methodContext.ckcLensSection?.trim()) {
    lines.push("Lentille CKC (interne) :");
    lines.push(methodContext.ckcLensSection.trim());
  }

  lines.push("");
  return lines;
}

```

### FULL FILE — `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```typescript
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  aggregateReadCoverage,
  rememberReadCoverage,
  ProductSqliteSession,
  resolveNoraSessionSqlitePath,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  composePilotFacingAssistantText,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
  lifecycleRecommendationMaterializeFailurePiloteNotice,
} from "./lifecycleRecommendationPiloteNotice";
import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
import { resolveOrMintLogicalProductTurn } from "./logicalProductTurn";
import {
  normalizeProductTurnHistory,
} from "./turnPayloadCanonical";
import { buildActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import {
  resolveRememberedEvidence,
  resolveOaStackForLifecycleRecommendation,
} from "./mw3AvailableEvidence";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  Mw4GroundingSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";
import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";

// PRODUCT_TURN_MAX_HISTORY_MESSAGES imported from turnPayloadCanonical (shared).

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
  lifecycleMaterializeNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [
    lifecycleMaterializeNotice,
    cognitiveStopNotice,
    compaction,
    base,
  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0);
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

function toMw4Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw4GroundingSurfaceDto | null {
  const g = turn.mw4Grounding;
  if (!g) return null;
  return {
    rememberedIds: [...g.rememberedIds],
    validIds: [...g.validIds],
    downgradedIds: [...g.downgradedIds],
    missingIds: [...g.missingIds],
    disclosure: g.disclosure,
    readCoverageOverall: g.readCoverageOverall,
    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
  };
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
   * Server-side only; never client-authoritative.
   */
  methodContext?: AdvisoryMethodContext | null;
  /**
   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
   * Server-side only; never client-authoritative. Supersedes methodContext when set.
   */
  studioCognitiveContext?: StudioCognitiveContext | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
   * Never part of ProjectAssistant client DTO. Absent → production default.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
  /**
   * D-GF-ACW-02 Option A — optional re-present of server-issued logical turn id.
   * Production ACW identity; never client-invented.
   */
  logicalTurnId?: string;
  /**
   * Opaque client transport retry correlation (untrusted).
   * NOT Product turn identity — Session-adjacent lookup only.
   */
  turnRetryKey?: string;
  /**
   * TEST-ONLY — explicit correlation override (skips Session mint).
   * Prefer logicalTurnId for production and new tests.
   */
  turnCorrelationId?: string;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  // D-GF-ACW-02 — accept-boundary logical turn id BEFORE model call.
  // Test turnCorrelationId override skips Session mint (BAR-WORK compatibility).
  // Session open failure must NOT abort Truth C / conversational continuity
  // (MW1 Memory B unavailable). ACW materialization remains fail-closed when
  // no durable logicalTurnId is available.
  //
  // Normalize history FIRST so conflict digest seals the exact provider envelope.
  const history = normalizeProductTurnHistory(input.history);
  let logicalTurnId: string | null = null;
  const testCorrOverride = input.turnCorrelationId?.trim() || null;
  if (testCorrOverride) {
    logicalTurnId = testCorrOverride;
  } else {
    const resolvedTurn = resolveOrMintLogicalProductTurn({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      presentedLogicalTurnId: input.logicalTurnId,
      turnRetryKey: input.turnRetryKey,
      content,
      history,
      cycleInstanceId:
        input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null,
      nowIso: new Date().toISOString(),
    });
    if (!resolvedTurn.ok) {
      if (resolvedTurn.code === "LOGICAL_TURN_UNKNOWN") {
        return {
          ok: false,
          status: "validation_error",
          code: "LOGICAL_TURN_UNKNOWN",
          message:
            "Identifiant de tour logique inconnu pour cette session.",
          mode: modeResolution.mode,
          retryable: false,
          logicalTurnId: null,
        };
      }
      if (resolvedTurn.code === "LOGICAL_TURN_RETRY_CONFLICT") {
        return {
          ok: false,
          status: "validation_error",
          code: "LOGICAL_TURN_RETRY_CONFLICT",
          message:
            "Jeton de reprise en conflit avec une soumission déjà acceptée.",
          mode: modeResolution.mode,
          retryable: false,
          logicalTurnId: null,
        };
      }
      // LOGICAL_TURN_SESSION_UNAVAILABLE — continue without ACW identity.
      logicalTurnId = null;
    } else {
      logicalTurnId = resolvedTurn.logicalTurnId;
    }
  }

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
        methodContext: input.methodContext ?? null,
        studioCognitiveContext: input.studioCognitiveContext ?? null,
      }),
    },
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
    });

    let assistantText = turn.text;
    let lifecycleRecommendationMaterialized: boolean | null = null;
    let lifecycleRecommendationCode: string | null = null;

    // CR-NCI-03 — normalize ONCE with Cognitive Stop before any durable LR write.
    // Order: normalize(+cognitiveStop) → boundary fail → ACW → LR only if stop=false
    // → compose Pilot text from final coherent guidance.
    const cognitiveStopActive =
      turn.cognitiveStopDecision?.cognitiveStop === true;
    const coherentEarly =
      turn.structuredOutput !== undefined
        ? normalizeNoraProductTurnStructuredOutput(turn.structuredOutput, {
            cognitiveStop: cognitiveStopActive,
          })
        : null;

    // D-LC-01 — same Product turn: extract → fail-closed contradiction →
    // ACW first (when present) → then LR against final post-ACW basis.
    // No second model call. No fingerprint rewrite.
    if (turn.structuredOutput !== undefined) {
      const { extractLifecycleCandidateFromStructuredOutput } = await import(
        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
      );
      const extracted = extractLifecycleCandidateFromStructuredOutput(
        turn.structuredOutput,
      );
      if (coherentEarly?.narrative) {
        assistantText = coherentEarly.narrative;
      } else if (extracted.narrative) {
        assistantText = extracted.narrative;
      }
      // Positive enforcement: EMIT without LR, or EMIT+LR with incompatible
      // conversationGuidance — fail BEFORE any durable writes (ACW or LR).
      const boundaryCode =
        coherentEarly?.boundaryContradiction ??
        (extracted.kind === "product_turn"
          ? extracted.boundaryContradiction
          : null);
      if (
        boundaryCode === MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION ||
        boundaryCode === CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH
      ) {
        return {
          ok: false,
          status: "validation_error",
          code: boundaryCode,
          message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
          mode: modeResolution.mode,
          retryable: false,
        };
      }

      // D-GF-ACW-01/02 — materialize ACW FIRST when items present + eligible.
      const coherent = coherentEarly;
      const acwItems = coherent?.activeCycleWork?.items ?? [];
      if (acwItems.length > 0) {
        const assessment = coherent?.preCycleRoutingAssessment;
        const disposition = coherent?.disposition;
        const eligibleDefer =
          disposition === "DEFER_TO_ACTIVE_CYCLE" ||
          assessment?.activeCycleAlreadyCoversWork === true;

        // CR-ACW-01 — FORBIDDEN fallback to project.activeCycleInstanceId.
        // Require studioCognitiveContext + activeCycle + workEligible + seal.
        const studio = input.studioCognitiveContext ?? null;
        const contextSeal = buildActiveCycleWorkContextSeal({
          projectId: project.projectId,
          activeCycle: studio?.activeCycle ?? null,
        });
        if (
          !eligibleDefer ||
          !studio ||
          !studio.activeCycle ||
          studio.activeCycle.workEligible !== true ||
          !contextSeal
        ) {
          return {
            ok: false,
            status: "validation_error",
            code: !eligibleDefer
              ? "ACTIVE_CYCLE_WORK_NOT_ELIGIBLE"
              : "ACTIVE_CYCLE_CONTEXT_REQUIRED",
            message: !eligibleDefer
              ? "Travail de cycle actif émis hors contexte éligible — aucune écriture partielle."
              : "Contexte cycle actif studio requis pour matérialiser le travail cognitif — aucune écriture partielle.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId,
          };
        }

        // Option A: ACW write requires durable Session-adjacent logical turn id.
        if (!logicalTurnId) {
          return {
            ok: false,
            status: "validation_error",
            code: "LOGICAL_TURN_SESSION_UNAVAILABLE",
            message:
              "Session indisponible pour l'identité de tour logique — aucune écriture ACW.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId: null,
          };
        }

        const activeCycleId = contextSeal.cycleInstanceId;
        {
          const oaResolved = await resolveOaStackForLifecycleRecommendation();
          if (!oaResolved.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_WORK_OA_UNAVAILABLE",
              message:
                "Impossible de matérialiser le travail du cycle actif (runtime indisponible).",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          const oa = oaResolved.oa;
          const cycleLoad = await oa.cycleServices.getCycle.execute({
            cycleInstanceId: activeCycleId,
          });
          const lpsNow =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          if (!cycleLoad.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_FOUND",
              message: "Cycle actif introuvable avant matérialisation.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (!lpsNow.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "LPS_UNAVAILABLE",
              message: "LPS indisponible avant matérialisation du travail cycle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (cycleLoad.cycle.status !== "active") {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_ELIGIBLE",
              message:
                "Le cycle n'est plus actif — aucune écriture partielle du travail cognitif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (
            (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
            activeCycleId
          ) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_LPS_POINTER_STALE",
              message:
                "Pointeur LPS du cycle actif modifié — aucune écriture partielle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }

          let existingItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            existingItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            existingItems = [];
          }

          // Production key = durable logical turn id (no random f1-acw keys).
          const turnCorrelationId = logicalTurnId!;
          const producedAt = new Date().toISOString();
          const mat = await materializeActiveCycleWork({
            items: acwItems,
            facts: {
              projectId: project.projectId,
              activeCycleInstanceId: activeCycleId,
              lpsVersion: lpsNow.livingProjectState.version,
              lpsObjective: lpsNow.livingProjectState.objective,
              existingEpistemicItemIds:
                lpsNow.livingProjectState.epistemicItemIds ?? [],
              existingItems,
              turnCorrelationId,
              contextSeal,
            },
            updateEpistemicState: oa.cycleServices.updateEpistemicState,
            appendLivingProjectStateVersion:
              oa.projectServices.appendLivingProjectStateVersion,
            getCurrentLivingProjectState:
              oa.projectServices.getCurrentLivingProjectState,
            getCycle: oa.cycleServices.getCycle,
            runInTransaction: oa.cycleServices.store.runInTransaction.bind(
              oa.cycleServices.store,
            ),
            producedAt,
            createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
          });
          if (!mat.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: mat.code,
              message:
                mat.reason ||
                "Échec de matérialisation du travail cognitif du cycle actif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
        }
      }

      // D-LC-01 — LR AFTER ACW (or with current facts when no ACW items).
      // CR-NCI-03 — Cognitive Stop outranks NEW LR materialization this turn.
      // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
      const lrCandidate =
        !cognitiveStopActive &&
        !coherent?.boundaryContradiction &&
        coherent?.lifecycleRecommendation
          ? coherent.lifecycleRecommendation
          : null;
      if (!lrCandidate) {
        lifecycleRecommendationMaterialized = false;
      } else {
        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
        // lazy runtime import) — never import vertical-slice-runtime here.
        const oaResolved = await resolveOaStackForLifecycleRecommendation();
        if (oaResolved.ok) {
          const oa = oaResolved.oa;
          const cycles = await oa.cycleServices.cycles.listByProject(
            project.projectId,
          );
          const lps =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          const projectRow = await oa.projectServices.getProject.execute({
            projectId: project.projectId,
          });
          const failedMaterialDimensions =
            new Set<LifecycleRecommendationMaterialDimension>();
          if (!lps.ok) {
            failedMaterialDimensions.add("lps");
          }
          if (!projectRow.ok) {
            failedMaterialDimensions.add("doctrine");
          }

          let trajectory = null;
          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
            oa.cycleServices.trajectories,
            project.projectId,
          );
          if (trajectoryBootstrapPresence.kind === "unknown") {
            failedMaterialDimensions.add("trajectory");
            trajectory = null;
          } else if (trajectoryBootstrapPresence.kind === "current") {
            trajectory = trajectoryBootstrapPresence.trajectory;
          } else {
            trajectory = null;
          }

          let decisions: Awaited<
            ReturnType<typeof oa.decisionServices.decisions.listByProject>
          > = [];
          try {
            decisions = await oa.decisionServices.decisions.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("decisions");
            decisions = [];
          }

          let evidence: Awaited<
            ReturnType<
              typeof oa.evidenceReviewServices.repository.listByProject
            >
          > = [];
          try {
            evidence =
              await oa.evidenceReviewServices.repository.listByProject(
                project.projectId,
              );
          } catch {
            failedMaterialDimensions.add("evidence");
            evidence = [];
          }

          let epistemicItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            epistemicItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("epistemic_blockers");
            epistemicItems = [];
          }

          const doctrinePin = projectRow.ok
            ? (projectRow.project.doctrinePackageRef ??
              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
            : undefined;
          const producedAt = new Date().toISOString();
          const mat =
            await materializeLifecycleRecommendationFromStructuredOutput({
              projectId: project.projectId,
              structuredOutput: turn.structuredOutput,
              updateEpistemicState: oa.cycleServices.updateEpistemicState,
              facts: {
                cycles,
                lpsActiveCycleInstanceId: lps.ok
                  ? lps.livingProjectState.activeCycleInstanceId
                  : null,
                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
                doctrinePackageVersion: doctrinePin?.version ?? null,
                doctrinePackageDigest: doctrinePin?.digest ?? null,
                trajectory,
                trajectoryBootstrapPresence,
                decisions,
                evidence,
                epistemicItems,
                failedMaterialDimensions,
              },
              producedAt,
              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
              correlationId: `f1:${project.projectId}`,
            });
          if (mat.narrative) {
            assistantText = mat.narrative;
          }
          if (mat.recommendationAttempted) {
            lifecycleRecommendationMaterialized =
              mat.materialization?.ok === true;
            lifecycleRecommendationCode =
              mat.materialization && !mat.materialization.ok
                ? mat.materialization.code
                : mat.materialization?.ok
                  ? null
                  : "LR_MATERIALIZE_UNKNOWN";
          } else {
            lifecycleRecommendationMaterialized = false;
          }
        } else {
          lifecycleRecommendationMaterialized = false;
          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
        }
      }
    }

    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
      sink.events,
    );
    // Persist read coverage for cross-turn honesty (existing session_items).
    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
      try {
        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
        const session = new ProductSqliteSession({
          projectId: project.projectId,
          dbPath,
          sessionKey: "f1-default",
        });
        try {
          await rememberReadCoverage(
            session,
            project.projectId,
            readCoverage.facts.map((f) => ({
              pathOrRef: f.pathOrRef,
              coverage: f.coverage,
            })),
          );
        } finally {
          session.close();
        }
      } catch {
        /* Session path may be unavailable — coverage still on DTO via mw4. */
      }
    }

    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
    const mw3 = toMw3Surface(turn);
    let mw4 = toMw4Surface(turn);
    if (coverageAggregate.facts.length > 0) {
      mw4 = {
        rememberedIds: mw4?.rememberedIds ?? [],
        validIds: mw4?.validIds ?? [],
        downgradedIds: mw4?.downgradedIds ?? [],
        missingIds: mw4?.missingIds ?? [],
        disclosure: mw4?.disclosure ?? "",
        readCoverageOverall:
          coverageAggregate.overall === "mixed_partial"
            ? "partial"
            : coverageAggregate.overall === "none"
              ? "none"
              : coverageAggregate.overall,
        readCoverageDisclosure:
          turn.mw4Grounding?.readCoverageDisclosure ??
          (coverageAggregate.facts.length > 0
            ? `Overall coverage: ${coverageAggregate.overall}`
            : null),
      };
    }
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    // NORA-CONVERSATIONAL-INITIATIVE-01 / CR-NCI-03 — compose from the same
    // coherent guidance already normalized with Cognitive Stop (no second pass).
    if (coherentEarly?.conversationGuidance) {
      assistantText = composePilotFacingAssistantText(
        assistantText,
        coherentEarly.conversationGuidance,
      );
    }
    const lrMaterializeNotice =
      lifecycleRecommendationMaterializeFailurePiloteNotice({
        recommendationAttempted:
          lifecycleRecommendationMaterialized === false &&
          Boolean(lifecycleRecommendationCode),
        materialized: lifecycleRecommendationMaterialized,
        code: lifecycleRecommendationCode,
      });
    const ephemeralNotice = buildEphemeralNotice(
      turn.memoryBAvailability,
      turn.memoryBCompactionState,
      turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      stopNotice,
      lrMaterializeNotice,
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: assistantText,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice,
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
      mw4,
      lifecycleRecommendationMaterialized,
      lifecycleRecommendationCode,
      logicalTurnId,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
      logicalTurnId,
    };
  }
}

```

### FULL FILE — `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```typescript
/**
 * Thin ConversationProvider → Agents SDK Model adapter.
 * Used whenever a ConversationProvider exposes completeRound() (Fake/fixture
 * deterministic path; any completeRound-capable test/provider boundary).
 * ONE model invocation → ONE provider.completeRound(). Runner owns the loop.
 * Does NOT execute tools, persist Session, or resolve authority.
 * RESERVE-OPT-C-02: this is a boundary adapter, not a provider-architecture
 * decision — live OpenAI Agents model routing remains separate when no
 * completeRound provider is supplied.
 */
import { Usage, type Model, type ModelRequest, type ModelResponse } from "@openai/agents";
import type {
  ConversationProvider,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  type ToolDefinition,
} from "@/lib/platform/tools";
import {
  buildFailClosedProductTurnJson,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: unknown }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

/**
 * Map Runner model input → provider round items.
 * Fail closed on unsupported shapes (no silent invention).
 */
export function agentInputToProviderItems(
  input: ModelRequest["input"],
): ProviderInputItem[] {
  if (typeof input === "string") {
    return [{ type: "message", role: "user", content: input }];
  }
  if (!Array.isArray(input)) {
    throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT");
  }
  const items: ProviderInputItem[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") {
      throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_ITEM");
    }
    const item = raw as Record<string, unknown>;
    const type = String(item.type ?? "");
    if (type === "message") {
      const role = String(item.role ?? "");
      if (role !== "user" && role !== "assistant" && role !== "system") {
        throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_ROLE:${role}`);
      }
      items.push({
        type: "message",
        role,
        content: extractTextContent(item.content),
      });
      continue;
    }
    if (type === "function_call") {
      items.push({
        type: "function_call",
        callId: String(item.callId ?? item.id ?? ""),
        name: String(item.name ?? ""),
        argumentsJson:
          typeof item.arguments === "string"
            ? item.arguments
            : JSON.stringify(item.arguments ?? {}),
      });
      continue;
    }
    if (type === "function_call_result" || type === "function_call_output") {
      const output = item.output;
      const outputText =
        typeof output === "string"
          ? output
          : output == null
            ? ""
            : JSON.stringify(output);
      items.push({
        type: "function_call_output",
        callId: String(item.callId ?? item.id ?? ""),
        output: outputText,
      });
      continue;
    }
    // Ignore purely structural / non-conversation items that Runner may prepend
    // (e.g. reasoning) — fail closed if they look like actionable model content.
    if (type === "reasoning") {
      continue;
    }
    throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_TYPE:${type}`);
  }
  return items;
}

/**
 * Resolve SFIA ToolDefinitions from Runner-serialized tools by name only.
 * No second schema source — Studio CONTROL_TOWER_TOOL_DEFINITIONS remain canonical.
 */
export function toolDefinitionsFromModelRequest(
  request: ModelRequest,
): ToolDefinition[] {
  const byName = new Map<string, ToolDefinition>(
    CONTROL_TOWER_TOOL_DEFINITIONS.map((d) => [d.name, d]),
  );
  const out: ToolDefinition[] = [];
  for (const tool of request.tools ?? []) {
    if (!tool || typeof tool !== "object") continue;
    const t = tool as { type?: string; name?: string };
    if (t.type && t.type !== "function") {
      // MW6 CR-09 — only the qualified hosted web_search boundary may be skipped
      // by the deterministic Fake adapter. Unknown hosted tools fail closed.
      if (t.type === "hosted_tool") {
        const hostedName = String(t.name ?? "");
        if (
          hostedName === "web_search" ||
          hostedName === "web_search_preview"
        ) {
          continue;
        }
        throw new Error(
          `NORA_PROVIDER_MODEL_UNSUPPORTED_HOSTED_TOOL:${hostedName || "unnamed"}`,
        );
      }
      throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_TOOL_TYPE:${t.type}`);
    }
    const name = String(t.name ?? "");
    if (!name) continue;
    const def = byName.get(name);
    if (!def) {
      throw new Error(`NORA_PROVIDER_MODEL_UNKNOWN_TOOL:${name}`);
    }
    out.push(def);
  }
  return out;
}

function roundResultToModelResponse(
  round: ProviderRoundResult,
): ModelResponse {
  const usage = new Usage({
    requests: 1,
    inputTokens: round.usage.inputTokens ?? 0,
    outputTokens: round.usage.outputTokens ?? 0,
    totalTokens: round.usage.totalTokens ?? 0,
  });
  if (round.kind === "message") {
    return {
      usage,
      responseId: round.usage.providerResponseId ?? undefined,
      output: [
        {
          type: "message",
          role: "assistant",
          status: "completed",
          content: [{ type: "output_text", text: round.text }],
        },
      ],
    };
  }
  return {
    usage,
    responseId: round.usage.providerResponseId ?? undefined,
    output: round.toolCalls.map((call) => ({
      type: "function_call" as const,
      name: call.name,
      callId: call.callId,
      id: call.callId,
      status: "completed" as const,
      arguments: call.argumentsJson,
    })),
  };
}

/** Coerce plain assistant text into product-turn JSON when outputType requires it. */
export function coercePlainTextToProductTurnJson(text: string): string {
  try {
    const parsed = JSON.parse(text) as unknown;
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as { narrative?: unknown }).narrative === "string"
    ) {
      const o = parsed as Record<string, unknown>;
      const coherent = normalizeNoraProductTurnStructuredOutput({
        narrative: o.narrative,
        lifecycleRecommendation: o.lifecycleRecommendation ?? null,
        preCycleRoutingAssessment: o.preCycleRoutingAssessment,
        activeCycleWork: o.activeCycleWork ?? null,
        conversationGuidance: o.conversationGuidance ?? null,
      });
      if (coherent) {
        return JSON.stringify({
          narrative: coherent.narrative,
          preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
          lifecycleRecommendation: coherent.lifecycleRecommendation,
          activeCycleWork: coherent.activeCycleWork ?? null,
          conversationGuidance: coherent.conversationGuidance,
        });
      }
      return buildFailClosedProductTurnJson(String(o.narrative));
    }
  } catch {
    // plain text
  }
  return buildFailClosedProductTurnJson(text);
}

function productTurnOutputTypeName(request: ModelRequest): string {
  return request.outputType &&
    typeof request.outputType === "object" &&
    "name" in request.outputType
    ? String((request.outputType as { name?: unknown }).name ?? "")
    : "";
}

function coerceModelResponseForProductTurn(
  response: ModelResponse,
  request: ModelRequest,
): ModelResponse {
  if (productTurnOutputTypeName(request) !== "nora_product_turn_with_optional_lr") {
    return response;
  }
  const output = Array.isArray(response.output) ? [...response.output] : [];
  let changed = false;
  for (let i = 0; i < output.length; i += 1) {
    const item = output[i];
    if (!item || typeof item !== "object") continue;
    const msg = item as {
      type?: string;
      role?: string;
      status?: string;
      content?: unknown;
      providerData?: Record<string, unknown>;
      id?: string;
    };
    if (msg.type !== "message" || msg.role !== "assistant") continue;
    if (!Array.isArray(msg.content)) continue;
    const nextContent = msg.content.map((part) => {
      if (
        part &&
        typeof part === "object" &&
        (part as { type?: string }).type === "output_text" &&
        typeof (part as { text?: unknown }).text === "string"
      ) {
        const text = (part as { text: string }).text;
        const coerced = coercePlainTextToProductTurnJson(text);
        if (coerced !== text) changed = true;
        return {
          ...(part as Record<string, unknown>),
          type: "output_text" as const,
          text: coerced,
        };
      }
      return part;
    });
    output[i] = {
      ...msg,
      type: "message" as const,
      role: "assistant" as const,
      status: (msg.status as "completed" | "in_progress" | "incomplete") ?? "completed",
      content: nextContent,
    } as (typeof output)[number];
  }
  return changed ? { ...response, output } : response;
}

/**
 * Wrap an injected Agents Model (e.g. ScriptedModel) so plain-text Fake/eval
 * responses satisfy product-turn outputType — same coerce as Fake completeRound.
 * Live OpenAI string models are unaffected (caller passes string, not Model).
 */
export function wrapAgentsModelForProductTurnPlainTextCoercion(
  model: Model,
): Model {
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      const response = await model.getResponse(request);
      return coerceModelResponseForProductTurn(response, request);
    },
    async *getStreamedResponse(
      ...args: Parameters<Model["getStreamedResponse"]>
    ) {
      const stream = model.getStreamedResponse(...args);
      for await (const event of stream) {
        yield event;
      }
    },
  };
}

/**
 * Agents SDK Model backed by ConversationProvider.completeRound (Fake path).
 */
export function createProviderAgentsModel(
  provider: ConversationProvider,
): Model {
  if (typeof provider.completeRound !== "function") {
    throw new Error("NORA_PROVIDER_MODEL_REQUIRES_COMPLETE_ROUND");
  }
  const completeRound = provider.completeRound.bind(provider);

  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      if (request.signal?.aborted) {
        throw new Error("AbortError");
      }
      const items = agentInputToProviderItems(request.input);
      // Ensure Studio system instructions from the Runner filter are visible
      // to Fake specialization (CKC markers live in system messages).
      if (
        request.systemInstructions &&
        !items.some(
          (i) =>
            i.type === "message" &&
            i.role === "system" &&
            i.content.includes(request.systemInstructions!),
        )
      ) {
        items.unshift({
          type: "message",
          role: "system",
          content: request.systemInstructions,
        });
      }
      const tools = toolDefinitionsFromModelRequest(request);
      const round = await completeRound({ items, tools });
      if (round.kind === "message") {
        if (
          productTurnOutputTypeName(request) ===
          "nora_product_turn_with_optional_lr"
        ) {
          const text = coercePlainTextToProductTurnJson(round.text);
          return roundResultToModelResponse({ ...round, text });
        }
      }
      return roundResultToModelResponse(round);
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("NORA_PROVIDER_MODEL_STREAMING_UNSUPPORTED");
    },
  };
}

export function isFakeConversationProvider(
  provider: ConversationProvider,
): boolean {
  return (
    provider.providerId === "fake-test" ||
    provider.providerId.startsWith("fake")
  );
}

```

### FULL FILE — `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```typescript
/**
 * OpenAI Agents SDK Runner path for Nora F1 cognitive turns.
 * Generic loop mechanics owned by Runner; SFIA authority via routeToolCall.
 *
 * CORR-MW2-REAL-02 model resolution:
 * - Fake / non-OpenAI completeRound providers → createProviderAgentsModel adapter
 * - providerId=openai (incl. Metered wrapper) → native Agents model string
 *   so Runner.modelSettings.reasoning is consumed by the native OpenAI Agents path
 * - otherwise → live model string from secrets
 */
import {
  Agent,
  MaxTurnsExceededError,
  Runner,
  type Model,
  type Session,
  type AgentOutputType,
} from "@openai/agents";
import type { ConversationProvider } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import {
  CampaignModelInvocationDeniedError,
  CampaignUsdHardCapDeniedError,
  createSfiaCallModelInputFilter,
} from "./callModelInputFilter";
import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
import type { NoraAgentsUsdSettleResult } from "./agentsUsdAccounting";
import {
  createProviderAgentsModel,
  isFakeConversationProvider,
  wrapAgentsModelForProductTurnPlainTextCoercion,
} from "./providerAgentsModel";
import {
  buildFailClosedProductTurnJson,
  composePilotFacingAssistantText,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";
import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
import type { MemoryBAvailability } from "./memoryBAvailability";
import {
  createNoraTurnBudget,
  toolRoundsFromBudget,
  type NoraTurnBudget,
} from "./turnBudget";
import type { NoraCognitiveTurnResult } from "./types";
import type { NoraRunnerModelSettings } from "./reasoningModelSettings";
import { withMaxToolCallsProviderData } from "./reasoningModelSettings";
import type { HostedWebSearchCallLike } from "./externalSourceNormalization";
import {
  createNoraHostedWebSearchTool,
  extractHostedWebSearchCallsFromRunItems,
  normalizeOpenAiHostedWebSearchObservations,
  type NoraHostedWebSearchToolOptions,
} from "./openaiHostedWebSearchAdapter";
import type { SourceObservationFact } from "./sourceIntelligenceContract";
import type {
  NoraCampaignBudget,
  Mw6GovernedAuthorityContext,
  Mw6CurrentProductContext,
} from "./campaignBudget";
import type { Mw6ExternalDiscoveryContractInput } from "@/lib/auth/mw6ExternalDiscoveryBinding";
import {
  CampaignLeaseError,
  campaignBudgetSnapshot,
  claimHostedWebOperations,
  clampRunnerBudgetForCampaign,
  evaluateRealSourceExecutionPreflight,
  isCanonicalCampaignBudget,
  markCampaignBudgetBlocked,
  normalizeSafeNonNegativeInteger,
  remainingAggregateRealCalls,
  remainingModelInvocations,
  requireCanonicalCampaignBudget,
  resolveMaxToolCallsProviderData,
} from "./campaignBudget";

export type RunNoraAgentsTurnInput = {
  correlationId: string;
  projectId: string;
  systemInstructions: string;
  userContent: string;
  /**
   * Agents SDK Session when Memory B is available (ProductSqliteSession or MemoryBSessionView).
   * Omit when Memory B is UNAVAILABLE — same Runner path (SDK session optional).
   */
  session?: Session | null;
  /** MW1-S01 availability classification for this turn. */
  memoryBAvailability?: MemoryBAvailability;
  workspaceRoot?: string;
  sink?: EventSink;
  /** Injected model for D0 (ScriptedModel). Live uses OPENAI_MODEL. */
  model?: Model | string;
  /** Provider used to resolve completeRound→Model adapter when model not injected. */
  provider?: ConversationProvider;
  maxTurns?: number;
  /** When false, Agent receives no SFIA function tools. */
  enableTools?: boolean;
  /** Optional shared budget (tests). */
  budget?: NoraTurnBudget;
  /** MW2 — Runner modelSettings override (reasoning.effort + preserved text.verbosity). */
  runnerModelSettings?: NoraRunnerModelSettings;
  /**
   * MW6 — attach OpenAI hosted web_search on the same Option C Agent.
   * Not routed through routeToolCall. NoraTurnBudget does NOT bound it.
   */
  enableHostedWebSearch?: boolean;
  hostedWebSearchToolOptions?: NoraHostedWebSearchToolOptions;
  /**
   * MW6 R21 — deterministic substitute for hosted web_search run-items.
   * Same normalization path as live observation; NEVER a REAL call.
   */
  deterministicHostedWebSearchCalls?: HostedWebSearchCallLike[];
  /** MW6 — optional freshness timestamp when honestly supportable. */
  sourceObservationNowIso?: string | null;
  /**
   * MW6 PRE-REAL — shared campaign budget (must be canonical lease from
   * acquireNoraCampaignBudget; fabricated objects fail closed).
   */
  campaignBudget?: NoraCampaignBudget;
  /**
   * TEST only — attempt to widen max_tool_calls beyond campaign remaining.
   * Not REAL authority.
   */
  testOnlyMaxToolCallsOverride?: number | null;
  /**
   * MW6↔Auth binding — identifiers + canonical EC ports only.
   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Current product strategy+binding from Nora composition (TB-02).
   * Server derives intent — do not inject final fingerprint semantics as truth.
   */
  currentProductContext?: Mw6CurrentProductContext;
  /**
   * @deprecated Ignored for authority (cannot authorize).
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
  /**
   * Optional USD accounting for native Agents model invocations (eval campaigns).
   * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
   */
  usdAccounting?: NoraAgentsUsdAccounting;
  /**
   * LR-D02 — optional Agents SDK structured outputType on the same Runner.
   * When set, finalOutput may be a structured object (candidate data only).
   */
  outputType?: AgentOutputType;
};

export type RunNoraAgentsTurnHostedSearchObserve = {
  hostedWebSearchAttached: boolean;
  deterministicBoundaryUsed: boolean;
  observations: SourceObservationFact[];
  rawCallsObserved: number;
};

export type RunNoraAgentsTurnBudgetObserve = {
  campaign: ReturnType<typeof campaignBudgetSnapshot>;
  clampReasonCodes: string[];
  configuredMaxToolCalls: number | null;
  realPreflightBlocked: boolean;
  realPreflightReasons: string[];
  authorityBound: boolean;
  realAuthorized: boolean;
  realPreflightCode: string;
  eligible: boolean;
};

export type RunNoraAgentsTurnUsdObserve = NoraAgentsUsdSettleResult & {
  reservedInvocations: number;
};

export function createNoraAgentsRunner(
  systemInstructions: string,
  budget?: NoraTurnBudget,
  runnerModelSettings?: NoraRunnerModelSettings,
  campaignBudget?: NoraCampaignBudget,
  usdAccounting?: NoraAgentsUsdAccounting,
): Runner {
  return new Runner({
    tracingDisabled: true,
    callModelInputFilter: createSfiaCallModelInputFilter(
      systemInstructions,
      budget,
      campaignBudget,
      usdAccounting,
    ),
    ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
  });
}

/**
 * CORR-MW2-REAL-02 — OpenAI live F1 must NOT use ConversationProvider.completeRound adapter.
 * MeteredConversationProvider preserves providerId=openai and must also take native path.
 */
export function isOpenAiLiveF1Provider(
  provider: ConversationProvider,
): boolean {
  return provider.providerId === "openai";
}

/**
 * Whether F1 should wrap the provider via createProviderAgentsModel.
 * False for OpenAI live (native Agents model string instead).
 */
export function shouldUseProviderAgentsModelAdapter(
  provider: ConversationProvider,
): boolean {
  if (isOpenAiLiveF1Provider(provider)) return false;
  if (isFakeConversationProvider(provider)) return true;
  return typeof provider.completeRound === "function";
}

/**
 * Resolve Agents F1 model — exported for CORR-02 D0 boundary proof (no live call).
 */
export function resolveNoraAgentsF1Model(
  input: Pick<RunNoraAgentsTurnInput, "model" | "provider">,
): Model | string {
  if (input.model !== undefined) {
    // Injected ScriptedModel (Model object) must coerce plain text under
    // product-turn outputType — same contract as Fake completeRound adapter.
    // Live model strings are unchanged.
    if (typeof input.model === "string") return input.model;
    return wrapAgentsModelForProductTurnPlainTextCoercion(input.model);
  }
  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
    return createProviderAgentsModel(input.provider);
  }
  const secrets = requireLiveConversationSecrets();
  return secrets.model;
}

export async function runNoraAgentsTurn(
  input: RunNoraAgentsTurnInput,
): Promise<
  NoraCognitiveTurnResult & {
    hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
    budgetObserve?: RunNoraAgentsTurnBudgetObserve;
    usdObserve?: RunNoraAgentsTurnUsdObserve;
  }
> {
  const model = resolveNoraAgentsF1Model(input);
  const usdAccounting = input.usdAccounting;

  const budget = input.budget ?? createNoraTurnBudget();
  const campaign = input.campaignBudget;
  if (campaign) {
    try {
      requireCanonicalCampaignBudget(campaign);
    } catch (error) {
      if (error instanceof CampaignLeaseError) {
        return {
          text: error.message,
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
          toolRounds: 0,
          toolCalls: 0,
          limitReached: true,
          cognitiveRuntime: "agents",
          sessionId: null,
          memoryBAvailability: "unavailable",
          memoryBCompactionState: "none",
          memoryBCompactionDetails: null,
          budgetObserve: {
            // Do not call campaignBudgetSnapshot — fabricated objects have no lease.
            campaign: {
              campaignId: campaign.campaignId,
              remainingModelInvocations: 0,
              remainingHostedWebOperations: 0,
              remainingAggregateRealCalls: 0,
              consumedModelInvocations: campaign.consumedModelInvocations,
              consumedHostedWebOperations: campaign.consumedHostedWebOperations,
              consumedAggregateRealCalls: campaign.consumedAggregateRealCalls,
              maxModelInvocations: campaign.maxModelInvocations,
              maxHostedWebOperations: campaign.maxHostedWebOperations,
              maxAggregateRealCalls: campaign.maxAggregateRealCalls,
              limitReached: true,
              denialCode: error.code,
              denialReason: error.message,
              hostedHardCapCapability: campaign.hostedHardCapCapability,
              canonicalLease: false,
            },
            clampReasonCodes: ["campaign_lease_invalid"],
            configuredMaxToolCalls: null,
            realPreflightBlocked: true,
            realPreflightReasons: [error.code],
            authorityBound: false,
            realAuthorized: false,
            realPreflightCode: error.code,
            eligible: false,
          },
        };
      }
      throw error;
    }
  }
  const enableTools = input.enableTools !== false;
  const sfiaTools = enableTools
    ? createSfiaRouteToolAdapters({
        correlationId: input.correlationId,
        workspaceRoot: input.workspaceRoot,
        sink: input.sink,
        budget,
      })
    : [];

  const wantHosted = input.enableHostedWebSearch === true;
  const fixtureCalls = input.deterministicHostedWebSearchCalls ?? [];
  const deterministicBoundaryUsed = fixtureCalls.length > 0;
  const liveOpenAiPath =
    !!input.provider && isOpenAiLiveF1Provider(input.provider);
  // REAL hosted dispatch = live OpenAI + hosted attach + no fixture substitute.
  const wantRealHostedDispatch =
    wantHosted && liveOpenAiPath && !deterministicBoundaryUsed;

  let realPreflightBlocked = false;
  let realPreflightReasons: string[] = [];
  let authorityBound = false;
  let realAuthorized = false;
  let realPreflightCode = "OK";
  let realPreflightEligible = false;
  // Authority composition proof: evaluate when server-composed governedAuthority
  // + product context + campaign are present (deterministic Fake path included).
  // LIVE dispatch gate still requires wantRealHostedDispatch.
  const shouldEvaluateAuthorityBinding =
    wantHosted &&
    !!campaign &&
    !!input.governedAuthority &&
    !!input.currentProductContext;
  if (wantRealHostedDispatch || shouldEvaluateAuthorityBinding) {
    // PRE-REAL-01: LIVE path always requires genuine authority binding.
    // No test/fake boolean is accepted on runtime inputs.
    if (!campaign) {
      realPreflightBlocked = true;
      realPreflightReasons = [
        "REAL_AUTHORITY_NOT_BOUND",
        "campaign_budget_required_for_real_hosted",
      ];
      realPreflightCode = "REAL_AUTHORITY_NOT_BOUND";
      authorityBound = false;
      realAuthorized = false;
      realPreflightEligible = false;
    } else {
      const pre = await evaluateRealSourceExecutionPreflight({
        campaign,
        wantHostedWebSearch: true,
        governedAuthority: input.governedAuthority,
        currentProductContext: input.currentProductContext,
        // Deprecated injection retained only to prove it cannot authorize.
        currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      });
      // LIVE dispatch blocked only on the real hosted path.
      realPreflightBlocked = wantRealHostedDispatch ? pre.blocked : false;
      realPreflightReasons = pre.reasons;
      realPreflightCode = pre.code;
      authorityBound = pre.authorityBound;
      realAuthorized = pre.realAuthorized;
      realPreflightEligible = pre.eligible;
    }
  }

  const requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
  let clamp: {
    maxTurns: number;
    maxToolCalls: number | null;
    attachHostedWebSearch: boolean;
    reasonCodes: string[];
  };
  let resolvedCap: {
    max_tool_calls?: number;
    rejectedOverride: boolean;
  };
  let runnerModelSettings: ReturnType<typeof withMaxToolCallsProviderData>;
  try {
    // R-PRE-REAL-08A: same safe-integer domain with or without campaign.
    const safeRequestedMaxTurns = normalizeSafeNonNegativeInteger(
      "requestedMaxTurns",
      requestedMaxTurns,
    );
    clamp = campaign
      ? clampRunnerBudgetForCampaign({
          campaign,
          requestedMaxTurns: safeRequestedMaxTurns,
          wantHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
        })
      : {
          maxTurns: safeRequestedMaxTurns,
          maxToolCalls: null as number | null,
          attachHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
          reasonCodes: [] as string[],
        };

    // BYPASS-04: enableHostedWebSearch cannot bypass REAL preflight / campaign clamp.
    resolvedCap = campaign
      ? resolveMaxToolCallsProviderData({
          campaign,
          configuredMaxToolCalls: clamp.maxToolCalls,
          callerOverride: input.testOnlyMaxToolCallsOverride,
        })
      : {
          max_tool_calls: undefined as number | undefined,
          rejectedOverride: false,
        };

    // Final providerData boundary — validates injected AND inherited caps (07/07A).
    runnerModelSettings = withMaxToolCallsProviderData(
      input.runnerModelSettings,
      resolvedCap.max_tool_calls ?? null,
    );
  } catch (error) {
    if (error instanceof CampaignLeaseError) {
      return {
        text: error.message,
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: null,
          providerResponseId: null,
        },
        toolRounds: 0,
        toolCalls: 0,
        limitReached: true,
        cognitiveRuntime: "agents",
        sessionId: null,
        memoryBAvailability: "unavailable",
        memoryBCompactionState: "none",
        memoryBCompactionDetails: null,
        budgetObserve: campaign
          ? {
              campaign: isCanonicalCampaignBudget(campaign)
                ? campaignBudgetSnapshot(campaign)
                : {
                    campaignId: campaign.campaignId,
                    remainingModelInvocations: 0,
                    remainingHostedWebOperations: 0,
                    remainingAggregateRealCalls: 0,
                    consumedModelInvocations: campaign.consumedModelInvocations,
                    consumedHostedWebOperations:
                      campaign.consumedHostedWebOperations,
                    consumedAggregateRealCalls:
                      campaign.consumedAggregateRealCalls,
                    maxModelInvocations: campaign.maxModelInvocations,
                    maxHostedWebOperations: campaign.maxHostedWebOperations,
                    maxAggregateRealCalls: campaign.maxAggregateRealCalls,
                    limitReached: true,
                    denialCode: error.code,
                    denialReason: error.message,
                    hostedHardCapCapability: campaign.hostedHardCapCapability,
                    canonicalLease: false,
                  },
              clampReasonCodes: ["invalid_budget_numeric"],
              configuredMaxToolCalls: null,
              realPreflightBlocked: true,
              realPreflightReasons: [error.code],
              authorityBound: false,
              realAuthorized: false,
              realPreflightCode: error.code,
              eligible: false,
            }
          : undefined,
      };
    }
    throw error;
  }

  const enableHostedWebSearch = clamp.attachHostedWebSearch;

  const hostedTool = enableHostedWebSearch
    ? createNoraHostedWebSearchTool(input.hostedWebSearchToolOptions)
    : null;
  const tools = hostedTool ? [...sfiaTools, hostedTool] : sfiaTools;

  const agent = new Agent({
    name: "NoraProjectAssistant",
    instructions: input.systemInstructions,
    model: model as never,
    tools,
    ...(input.outputType ? { outputType: input.outputType } : {}),
  });

  const runner = createNoraAgentsRunner(
    input.systemInstructions,
    budget,
    runnerModelSettings,
    campaign,
    usdAccounting,
  );
  const maxTurns = clamp.maxTurns;
  const session = input.session ?? undefined;
  const memoryBAvailability: MemoryBAvailability =
    input.memoryBAvailability ??
    (session ? "available_with_history" : "unavailable");

  let text = "";
  let structuredOutput: unknown = undefined;
  let lastResponseId: string | null = null;
  let usageAgg: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  } | null = null;
  let runNewItems: unknown[] = [];
  let budgetStop = false;

  if (maxTurns <= 0) {
    budget.limitReached = true;
    budgetStop = true;
    text = "Campaign/model-turn budget reached before dispatch.";
    if (campaign && !campaign.limitReached) {
      if (remainingAggregateRealCalls(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "AGGREGATE_REAL_CALL_CAP_REACHED",
          "Aggregate REAL/provider-call remaining is 0 — Runner not dispatched.",
        );
      } else if (remainingModelInvocations(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "MODEL_INVOCATION_CAP_REACHED",
          "Model invocation remaining is 0 — Runner not dispatched.",
        );
      }
    }
  } else {
    try {
      const result = await runner.run(agent, input.userContent, {
        ...(session ? { session } : {}),
        maxTurns,
        errorHandlers: {
          maxTurns: ({ runData }) => {
            budget.limitReached = true;
            const lastText = [...runData.newItems]
              .reverse()
              .map((item) => {
                const anyItem = item as {
                  type?: string;
                  rawItem?: { content?: unknown };
                };
                if (anyItem.type === "message_output_item") {
                  return String(
                    (item as { content?: string }).content ?? "",
                  );
                }
                return "";
              })
              .find((t) => t.trim().length > 0);
            return {
              finalOutput:
                lastText?.trim() ||
                "Model-turn budget reached (maxTurns).",
              includeInHistory: false,
            };
          },
        },
      });

      text =
        typeof result.finalOutput === "string"
          ? result.finalOutput
          : result.finalOutput == null
            ? ""
            : typeof result.finalOutput === "object"
              ? JSON.stringify(result.finalOutput)
              : String(result.finalOutput);
      if (input.outputType && result.finalOutput != null) {
        structuredOutput =
          typeof result.finalOutput === "string"
            ? (() => {
                try {
                  return JSON.parse(result.finalOutput) as unknown;
                } catch {
                  return result.finalOutput;
                }
              })()
            : result.finalOutput;
        // Plain-string / partial Fake responses under product-turn outputType →
        // coerce to fail-closed assessment + null Recommendation (same turn).
        const isProductTurnOutput =
          input.outputType &&
          typeof input.outputType === "object" &&
          "name" in input.outputType &&
          (input.outputType as { name?: string }).name ===
            "nora_product_turn_with_optional_lr";
        if (isProductTurnOutput && typeof structuredOutput === "string") {
          structuredOutput = JSON.parse(
            buildFailClosedProductTurnJson(structuredOutput),
          ) as unknown;
        } else if (isProductTurnOutput && structuredOutput) {
          const coherent =
            normalizeNoraProductTurnStructuredOutput(structuredOutput);
          if (coherent) {
            structuredOutput = {
              narrative: coherent.narrative,
              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
              lifecycleRecommendation: coherent.lifecycleRecommendation,
              activeCycleWork: coherent.activeCycleWork ?? null,
              conversationGuidance: coherent.conversationGuidance,
            };
          }
        }
        if (
          isProductTurnOutput &&
          structuredOutput &&
          typeof structuredOutput === "object"
        ) {
          const so = structuredOutput as {
            narrative?: unknown;
            conversationGuidance?: unknown;
          };
          if (typeof so.narrative === "string") {
            const coherent =
              normalizeNoraProductTurnStructuredOutput(structuredOutput);
            text = coherent
              ? composePilotFacingAssistantText(
                  coherent.narrative,
                  coherent.conversationGuidance,
                )
              : so.narrative;
          }
        } else if (
          structuredOutput &&
          typeof structuredOutput === "object" &&
          "narrative" in structuredOutput &&
          typeof (structuredOutput as { narrative?: unknown }).narrative ===
            "string"
        ) {
          text = (structuredOutput as { narrative: string }).narrative;
        }
      }
      lastResponseId = result.lastResponseId ?? null;
      usageAgg = result.state?.usage ?? null;
      runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
    } catch (error) {
      if (
        error instanceof CampaignModelInvocationDeniedError ||
        error instanceof CampaignUsdHardCapDeniedError
      ) {
        budget.limitReached = true;
        budgetStop = true;
        text = error.message;
        // BYPASS-07: do not retry / re-dispatch.
      } else if (error instanceof MaxTurnsExceededError) {
        budget.limitReached = true;
        text = "Model-turn budget reached (maxTurns).";
      } else {
        throw error;
      }
    }
  }

  const usage = {
    inputTokens: usageAgg?.inputTokens ?? null,
    outputTokens: usageAgg?.outputTokens ?? null,
    totalTokens: usageAgg?.totalTokens ?? null,
    model:
      typeof model === "string"
        ? model
        : input.provider && isFakeConversationProvider(input.provider)
          ? "fake-test-model"
          : null,
    providerResponseId: lastResponseId,
  };

  const liveCalls = extractHostedWebSearchCallsFromRunItems(runNewItems);
  // R21: fixture substitutes the external hosted boundary; prefer fixture when present.
  const callsForNormalize = deterministicBoundaryUsed ? fixtureCalls : liveCalls;
  const observations =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? normalizeOpenAiHostedWebSearchObservations(callsForNormalize, {
          deterministic: deterministicBoundaryUsed,
          nowIso: input.sourceObservationNowIso,
        })
      : [];

  // Reconcile observed hosted ops against campaign (fixture path does not
  // consume REAL hosted budget — Fake/deterministic ≠ REAL consumption).
  if (campaign && !deterministicBoundaryUsed && liveCalls.length > 0) {
    const ok = claimHostedWebOperations(campaign, liveCalls.length);
    if (!ok) {
      // Provider-enforced cap should make this impossible; mark invariant failure.
      budget.limitReached = true;
      budgetStop = true;
      text = [
        text,
        "",
        "[CAMPAIGN BUDGET INVARIANT FAILURE]",
        campaign.denialReason ??
          "Observed hosted web ops exceeded campaign/provider cap.",
      ]
        .filter(Boolean)
        .join("\n");
    }
  }

  // USD settlement AFTER hosted observation so factual REAL hosted-call fees
  // can be included. Deterministic fixtures → hostedWebSearchCalls=0 (not billed).
  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
    ? (() => {
        const reservedInvocations = usdAccounting.reservedInvocationCount();
        const factualHostedCalls =
          deterministicBoundaryUsed || !enableHostedWebSearch
            ? 0
            : liveCalls.length;
        const settled = usdAccounting.settleTurn({
          reservedInvocations,
          inputTokens: usageAgg?.inputTokens ?? null,
          outputTokens: usageAgg?.outputTokens ?? null,
          totalTokens: usageAgg?.totalTokens ?? null,
          hostedWebSearchCalls: factualHostedCalls,
        });
        return { ...settled, reservedInvocations };
      })()
    : undefined;

  const hostedSearchObserve: RunNoraAgentsTurnHostedSearchObserve | undefined =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? {
          hostedWebSearchAttached: enableHostedWebSearch,
          deterministicBoundaryUsed,
          observations,
          rawCallsObserved: callsForNormalize.length,
        }
      : undefined;

  const budgetObserve: RunNoraAgentsTurnBudgetObserve | undefined = campaign
    ? {
        campaign: campaignBudgetSnapshot(campaign),
        clampReasonCodes: [
          ...clamp.reasonCodes,
          ...(resolvedCap.rejectedOverride
            ? ["caller_max_tool_calls_override_rejected"]
            : []),
        ],
        configuredMaxToolCalls: resolvedCap.max_tool_calls ?? null,
        realPreflightBlocked,
        realPreflightReasons,
        authorityBound,
        realAuthorized,
        realPreflightCode,
        eligible: realPreflightEligible,
      }
    : undefined;

  return {
    text,
    usage,
    toolRounds: toolRoundsFromBudget(budget),
    toolCalls: budget.executedToolCalls,
    limitReached: budget.limitReached || budgetStop,
    cognitiveRuntime: "agents",
    sessionId: session ? await session.getSessionId() : null,
    memoryBAvailability,
    memoryBCompactionState: "none",
    memoryBCompactionDetails: null,
    ...(structuredOutput !== undefined ? { structuredOutput } : {}),
    ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
    ...(budgetObserve ? { budgetObserve } : {}),
    ...(usdObserve ? { usdObserve } : {}),
  };
}

```


---

## 13. Unified diff (tracked modified files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
index da81eb13..36349826 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
@@ -148,6 +148,17 @@ function productTurnPayload(
     narrative,
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
+    activeCycleWork: null,
+    // Statement equals narrative so composePilotFacingAssistantText is a no-op
+    // for fixtures that assert exact narrative text (guidance still present).
+    conversationGuidance: {
+      kind: lr ? ("RECOMMEND_NEXT_STEP" as const) : ("HOLD" as const),
+      scope: lr
+        ? ("LIFECYCLE_TRANSITION" as const)
+        : ("BLOCKER_RESOLUTION" as const),
+      statement: narrative,
+      rationale: "fixture-aligned-guidance",
+    },
   };
 }

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
index b3d6e695..c81e708a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
@@ -164,6 +164,13 @@ function productTurn(lr: ReturnType<typeof nextCycleLr>) {
     narrative: "Narrative recommandée.",
     preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
     lifecycleRecommendation: lr,
+    activeCycleWork: null,
+    conversationGuidance: {
+      kind: "RECOMMEND_NEXT_STEP" as const,
+      scope: "LIFECYCLE_TRANSITION" as const,
+      statement: "Narrative recommandée.",
+      rationale: "fixture-aligned-guidance",
+    },
   };
 }

@@ -173,6 +180,12 @@ function acwTurn(items: NoraActiveCycleWorkItem[], narrative = "Travail in-cycle
     preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
     lifecycleRecommendation: null,
     activeCycleWork: { items },
+    conversationGuidance: {
+      kind: "RECOMMEND_NEXT_STEP" as const,
+      scope: "ACTIVE_CYCLE" as const,
+      statement: narrative,
+      rationale: "fixture-aligned-guidance",
+    },
   };
 }

@@ -1449,6 +1462,12 @@ describe("D-GF-ACW-01 regressions smoke (BAR-WORK-46..50)", () => {
       narrative: "Ready.",
       preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
       lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
+      conversationGuidance: {
+        kind: "RECOMMEND_NEXT_STEP",
+        scope: "LIFECYCLE_TRANSITION",
+        statement: "Ready.",
+        rationale: "fixture",
+      },
     });
     expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
     expect(coherent.boundaryContradiction).toBeNull();
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
index b368109f..0cab9a3c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
@@ -123,6 +123,41 @@ function productTurn(
     narrative,
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
+    activeCycleWork: null,
+    conversationGuidance: lr
+      ? {
+          kind: "RECOMMEND_NEXT_STEP" as const,
+          scope: "LIFECYCLE_TRANSITION" as const,
+          statement: narrative,
+          rationale: "fixture-aligned-guidance",
+        }
+      : assessment.activeCycleAlreadyCoversWork
+        ? {
+            kind: "RECOMMEND_NEXT_STEP" as const,
+            scope: "ACTIVE_CYCLE" as const,
+            statement: narrative,
+            rationale: "fixture-aligned-guidance",
+          }
+        : assessment.multiplePlausibleCycles
+          ? {
+              kind: "PRESENT_OPTIONS" as const,
+              scope: "PRE_CYCLE" as const,
+              statement: narrative,
+              rationale: "fixture-aligned-guidance",
+            }
+          : assessment.routingBlockingUnknownPresent
+            ? {
+                kind: "ASK_CLARIFICATION" as const,
+                scope: "PRE_CYCLE" as const,
+                statement: narrative,
+                rationale: "fixture-aligned-guidance",
+              }
+            : {
+                kind: "RECOMMEND_NEXT_STEP" as const,
+                scope: "PRE_CYCLE" as const,
+                statement: narrative,
+                rationale: "fixture-aligned-guidance",
+              },
   };
 }

@@ -153,6 +188,7 @@ describe("BAR-RB — pre-cycle routing boundary (deterministic)", () => {
     expect(required).toContain("preCycleRoutingAssessment");
     expect(required).toContain("lifecycleRecommendation");
     expect(required).toContain("narrative");
+    expect(required).toContain("conversationGuidance");
   });

   it("BAR-RB-01 — initial intent still ambiguous → CONTINUE, LR null", () => {
@@ -896,6 +932,12 @@ describe("BAR-RB — pre-cycle routing boundary (deterministic)", () => {
       narrative: "Travail déjà suffisamment borné.",
       preCycleRoutingAssessment: assessment,
       lifecycleRecommendation: lr,
+      conversationGuidance: {
+        kind: "RECOMMEND_NEXT_STEP",
+        scope: "LIFECYCLE_TRANSITION",
+        statement: "Travail déjà suffisamment borné.",
+        rationale: "fixture",
+      },
     });
     expect(coherent.boundaryContradiction).toBeNull();
     expect(coherent.lifecycleRecommendation).toEqual(lr);
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index cb114248..6383ef81 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -144,6 +144,42 @@ export function buildProjectSystemPrompt(
     "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
     "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
     "",
+    "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
+    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
+    "Identifie le prochain mouvement utile pour faire progresser le projet.",
+    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
+    "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
+    "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
+    "Kinds autorisés uniquement :",
+    "- RECOMMEND_NEXT_STEP — progression honnête identifiable (recommandation non autoritative).",
+    "- ASK_CLARIFICATION — seulement si l'inconnue change matériellement analyse / scope / risque /",
+    "  trajectoire / recommandation / autorité / preuve / effet gouverné ; UNE question ciblée.",
+    "- PRESENT_OPTIONS — au moins deux chemins réellement plausibles ; explique brièvement ;",
+    "  indique une préférence si supportable ; ne décide pas à la place du Pilote.",
+    "- HOLD — progression honnête impossible (Cognitive Stop, contradiction, autorité/preuve manquante) ;",
+    "  dis quoi résoudre ensuite — pas une fin passive.",
+    "Scopes autorisés (internes — ne jamais exposer ces libellés au Pilote) :",
+    "- PRE_CYCLE — continuation / clarification avant une transition supportable.",
+    "- ACTIVE_CYCLE — prochain mouvement DANS le cycle actif (activeCycleAlreadyCoversWork).",
+    "- LIFECYCLE_TRANSITION — accompagnement d'une lifecycleRecommendation émise dans CE tour.",
+    "- BLOCKER_RESOLUTION — stop / contradiction / fail-closed / frein cognitif.",
+    "Cohérence kind × scope obligatoire :",
+    "- routingBlockingUnknownPresent → ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
+    "- multiplePlausibleCycles → PRESENT_OPTIONS|ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
+    "- activeCycleAlreadyCoversWork → scope ACTIVE_CYCLE (toute kind pertinente).",
+    "- lifecycleRecommendation valide émise → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.",
+    "- Cognitive Stop → HOLD + BLOCKER_RESOLUTION.",
+    "UNE seule continuation principale par défaut. Pas de liste générique de cinq idées.",
+    "Ne demande pas confirmation pour des détails non matériels.",
+    "Avance sous Hypothesis explicite lorsque la doctrine actuelle l'autorise.",
+    "Ne propose JAMAIS Cursor / Execution comme initiative autonome.",
+    "HumanDecision uniquement comme frontière à soumettre au Pilote — jamais auto-créée.",
+    "Une Recommendation (dont conversationGuidance) n'est JAMAIS une HumanDecision ni une autorisation d'exécution.",
+    "statement : formulation naturelle Pilote (ex. « Je te propose maintenant de… ») ;",
+    "varie selon le contexte ; évite le label robotique « PROCHAINE ÉTAPE : ».",
+    "N'expose jamais les noms internes conversationGuidance / scope / preCycleRoutingAssessment /",
+    "activeCycleWork / LifecycleRecommendation / F1/F2/MW* dans le langage Pilote.",
+    "",
     ...buildActiveCycleWorkOutputSection(studio),
     "=== LIMITES D'AUTORITÉ (strict) ===",
     "Distingue vérité courante / historique / superseded / réserve ouverte.",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 23feb4bc..5f608262 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -20,8 +20,10 @@ import {
   type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
 import {
+  CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
   MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
   NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
+  composePilotFacingAssistantText,
   normalizeNoraProductTurnStructuredOutput,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
@@ -384,6 +386,18 @@ export async function orchestrateProjectAssistantTurn(input: {
     let lifecycleRecommendationMaterialized: boolean | null = null;
     let lifecycleRecommendationCode: string | null = null;

+    // CR-NCI-03 — normalize ONCE with Cognitive Stop before any durable LR write.
+    // Order: normalize(+cognitiveStop) → boundary fail → ACW → LR only if stop=false
+    // → compose Pilot text from final coherent guidance.
+    const cognitiveStopActive =
+      turn.cognitiveStopDecision?.cognitiveStop === true;
+    const coherentEarly =
+      turn.structuredOutput !== undefined
+        ? normalizeNoraProductTurnStructuredOutput(turn.structuredOutput, {
+            cognitiveStop: cognitiveStopActive,
+          })
+        : null;
+
     // D-LC-01 — same Product turn: extract → fail-closed contradiction →
     // ACW first (when present) → then LR against final post-ACW basis.
     // No second model call. No fingerprint rewrite.
@@ -394,21 +408,26 @@ export async function orchestrateProjectAssistantTurn(input: {
       const extracted = extractLifecycleCandidateFromStructuredOutput(
         turn.structuredOutput,
       );
-      if (extracted.narrative) {
+      if (coherentEarly?.narrative) {
+        assistantText = coherentEarly.narrative;
+      } else if (extracted.narrative) {
         assistantText = extracted.narrative;
       }
-      // Positive enforcement: EMIT without LR is a structured contradiction.
-      // Fail BEFORE any durable writes (ACW or LR).
-      // Never invent LR; never treat as normal conversational success.
+      // Positive enforcement: EMIT without LR, or EMIT+LR with incompatible
+      // conversationGuidance — fail BEFORE any durable writes (ACW or LR).
+      const boundaryCode =
+        coherentEarly?.boundaryContradiction ??
+        (extracted.kind === "product_turn"
+          ? extracted.boundaryContradiction
+          : null);
       if (
-        extracted.kind === "product_turn" &&
-        extracted.boundaryContradiction ===
-          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
+        boundaryCode === MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION ||
+        boundaryCode === CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH
       ) {
         return {
           ok: false,
           status: "validation_error",
-          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
+          code: boundaryCode,
           message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
           mode: modeResolution.mode,
           retryable: false,
@@ -416,9 +435,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       }

       // D-GF-ACW-01/02 — materialize ACW FIRST when items present + eligible.
-      const coherent = normalizeNoraProductTurnStructuredOutput(
-        turn.structuredOutput,
-      );
+      const coherent = coherentEarly;
       const acwItems = coherent?.activeCycleWork?.items ?? [];
       if (acwItems.length > 0) {
         const assessment = coherent?.preCycleRoutingAssessment;
@@ -599,8 +616,15 @@ export async function orchestrateProjectAssistantTurn(input: {
       }

       // D-LC-01 — LR AFTER ACW (or with current facts when no ACW items).
+      // CR-NCI-03 — Cognitive Stop outranks NEW LR materialization this turn.
       // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
-      if (!extracted.candidate) {
+      const lrCandidate =
+        !cognitiveStopActive &&
+        !coherent?.boundaryContradiction &&
+        coherent?.lifecycleRecommendation
+          ? coherent.lifecycleRecommendation
+          : null;
+      if (!lrCandidate) {
         lifecycleRecommendationMaterialized = false;
       } else {
         // OA access via authorized Project Assistant seam (mw3AvailableEvidence
@@ -794,6 +818,14 @@ export async function orchestrateProjectAssistantTurn(input: {
         allowsSilentSuccess: false,
       },
     );
+    // NORA-CONVERSATIONAL-INITIATIVE-01 / CR-NCI-03 — compose from the same
+    // coherent guidance already normalized with Cognitive Stop (no second pass).
+    if (coherentEarly?.conversationGuidance) {
+      assistantText = composePilotFacingAssistantText(
+        assistantText,
+        coherentEarly.conversationGuidance,
+      );
+    }
     const lrMaterializeNotice =
       lifecycleRecommendationMaterializeFailurePiloteNotice({
         recommendationAttempted:
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 10e7adef..77d85569 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -132,12 +132,126 @@ export type NoraActiveCycleWorkOutput = {
   items: NoraActiveCycleWorkItem[];
 };

+/**
+ * NORA-CONVERSATIONAL-INITIATIVE-01 — ephemeral conversational continuation.
+ * Cognitive / non-authoritative / same Product turn — never Truth C,
+ * HumanDecision, ExecutionContract, or execution authorization.
+ * CR-NCI-01/02: kind×scope matrix; never relabel kind while keeping statement.
+ */
+export const CONVERSATION_GUIDANCE_KINDS = [
+  "RECOMMEND_NEXT_STEP",
+  "ASK_CLARIFICATION",
+  "PRESENT_OPTIONS",
+  "HOLD",
+] as const;
+
+export type ConversationGuidanceKind =
+  (typeof CONVERSATION_GUIDANCE_KINDS)[number];
+
+export const CONVERSATION_GUIDANCE_SCOPES = [
+  "PRE_CYCLE",
+  "ACTIVE_CYCLE",
+  "LIFECYCLE_TRANSITION",
+  "BLOCKER_RESOLUTION",
+] as const;
+
+export type ConversationGuidanceScope =
+  (typeof CONVERSATION_GUIDANCE_SCOPES)[number];
+
+export const CONVERSATION_GUIDANCE_SCHEMA = {
+  type: "object" as const,
+  additionalProperties: false as const,
+  required: ["kind", "scope", "statement", "rationale"],
+  properties: {
+    kind: {
+      type: "string" as const,
+      enum: [...CONVERSATION_GUIDANCE_KINDS],
+    },
+    scope: {
+      type: "string" as const,
+      enum: [...CONVERSATION_GUIDANCE_SCOPES],
+    },
+    statement: { type: "string" as const },
+    rationale: {
+      anyOf: [{ type: "string" as const }, { type: "null" as const }],
+    },
+  },
+} as const;
+
+export type ConversationGuidance = {
+  kind: ConversationGuidanceKind;
+  scope: ConversationGuidanceScope;
+  statement: string;
+  rationale: string | null;
+};
+
+/** Fail-closed HOLD when structured guidance is missing / invalid. */
+export const CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.",
+    rationale: "sortie structurée insuffisante",
+  });
+
+/** Server-owned HOLD — routing blocker (never invents a specific question). */
+export const CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Une clarification matérielle est nécessaire avant de pouvoir orienter la suite.",
+    rationale: "routing_blocking_unknown",
+  });
+
+/** Server-owned HOLD — multiple plausible cycles. */
+export const CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Plusieurs trajectoires restent plausibles ; il faut les départager avant de recommander une suite.",
+    rationale: "multiple_plausible_cycles",
+  });
+
+/** Server-owned HOLD — DEFER requires ACTIVE_CYCLE scope. */
+export const CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Le travail doit rester dans le cycle actif ; aucune transition n'est recommandée sur ce tour.",
+    rationale: "active_cycle_scope_required",
+  });
+
+/** Server-owned HOLD — Cognitive Stop outranks optimistic guidance / LR. */
+export const CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Avant toute suite, il faut lever le frein cognitif qui bloque la progression.",
+    rationale: "cognitive_stop_outranks_optimistic_guidance",
+  });
+
+/** Server-owned HOLD — structured boundary contradiction. */
+export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "La suite structurée est incomplète ; aucune progression recommandée tant que le contrat n'est pas cohérent.",
+    rationale: "boundary_contradiction_fail_closed",
+  });
+
 /**
  * Product Assistant Nora turn contract:
  * - user-visible narrative (required)
  * - pre-cycle routing assessment (required, non-authoritative)
  * - optional Lifecycle Recommendation candidate (nullable)
  * - optional active-cycle work items (nullable; D-GF-ACW-01)
+ * - conversationGuidance (required; ephemeral continuation; non-authoritative)
  * Same Agents Runner — one model call — no prose parsing.
  */
 export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
@@ -152,6 +266,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "preCycleRoutingAssessment",
       "lifecycleRecommendation",
       "activeCycleWork",
+      "conversationGuidance",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -168,6 +283,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
           NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
         ],
       },
+      conversationGuidance: CONVERSATION_GUIDANCE_SCHEMA,
     },
   },
 };
@@ -177,6 +293,7 @@ export type NoraProductTurnWithOptionalLr = {
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork: NoraActiveCycleWorkOutput | null;
+  conversationGuidance: ConversationGuidance;
 };

 export function isPreCycleRoutingAssessment(
@@ -238,6 +355,49 @@ export function isNoraActiveCycleWorkOutput(
   return o.items.every(isNoraActiveCycleWorkItem);
 }

+const CONVERSATION_GUIDANCE_KIND_SET = new Set<string>(
+  CONVERSATION_GUIDANCE_KINDS,
+);
+const CONVERSATION_GUIDANCE_SCOPE_SET = new Set<string>(
+  CONVERSATION_GUIDANCE_SCOPES,
+);
+
+export function isConversationGuidance(
+  value: unknown,
+): value is ConversationGuidance {
+  if (!value || typeof value !== "object") return false;
+  const o = value as Record<string, unknown>;
+  if (!CONVERSATION_GUIDANCE_KIND_SET.has(String(o.kind))) return false;
+  if (!CONVERSATION_GUIDANCE_SCOPE_SET.has(String(o.scope))) return false;
+  if (typeof o.statement !== "string" || o.statement.trim().length === 0) {
+    return false;
+  }
+  if (o.rationale !== null && typeof o.rationale !== "string") return false;
+  if (typeof o.rationale === "string" && o.rationale.trim().length === 0) {
+    return false;
+  }
+  return true;
+}
+
+/**
+ * Parse raw conversationGuidance; invalid / missing → fail-closed HOLD.
+ * Never invents RECOMMEND_NEXT_STEP.
+ */
+export function parseConversationGuidanceOrFailClosed(
+  value: unknown,
+): ConversationGuidance {
+  if (!isConversationGuidance(value)) {
+    return { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD };
+  }
+  return {
+    kind: value.kind,
+    scope: value.scope,
+    statement: value.statement.trim(),
+    rationale:
+      value.rationale === null ? null : String(value.rationale).trim(),
+  };
+}
+
 /**
  * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
  */
@@ -268,50 +428,302 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   /** Passthrough — not stripped by routing coherence (D-GF-ACW-01). */
   activeCycleWork: NoraActiveCycleWorkOutput | null;
+  /** Ephemeral conversational continuation (coherent with disposition). */
+  conversationGuidance: ConversationGuidance;
   /** True when a candidate LR was stripped by boundary coherence. */
   lifecycleRecommendationSuppressed: boolean;
   suppressReason: string | null;
   /**
-   * Structured boundary contradiction (e.g. EMIT without LR).
+   * Structured boundary contradiction (e.g. EMIT without LR / guidance mismatch).
    * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
    */
   boundaryContradiction: string | null;
+  /**
+   * True when guidance was replaced by a server-owned fallback object
+   * (never a kind-only relabel that keeps an incompatible statement).
+   */
+  conversationGuidanceCoerced: boolean;
+  conversationGuidanceCoerceReason: string | null;
 };

 /** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
 export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
   "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

+/**
+ * EMIT + valid LR requires RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.
+ * CR-NCI-01/03 — never auto-promote HOLD → RECOMMEND; fail-closed instead.
+ */
+export const CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH =
+  "CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH" as const;
+
+function isHoldBlockerResolution(g: ConversationGuidance): boolean {
+  return g.kind === "HOLD" && g.scope === "BLOCKER_RESOLUTION";
+}
+
+function keepOrReplace(
+  base: ConversationGuidance,
+  compatible: boolean,
+  fallback: ConversationGuidance,
+  reason: string,
+): {
+  conversationGuidance: ConversationGuidance;
+  coerced: boolean;
+  coerceReason: string | null;
+} {
+  if (compatible) {
+    return { conversationGuidance: base, coerced: false, coerceReason: null };
+  }
+  return {
+    conversationGuidance: { ...fallback },
+    coerced: true,
+    coerceReason: reason,
+  };
+}
+
+/**
+ * Deterministic conversationGuidance coherence with routing disposition.
+ * CR-NCI-01: never relabel kind while keeping an incompatible statement —
+ * replace the full object with a server-owned fail-closed HOLD when needed.
+ * CR-NCI-02: kind×scope matrix (structured only — no statement prose parse).
+ * Never invents RECOMMEND_NEXT_STEP from fail-closed paths.
+ */
+export function applyConversationGuidanceCoherence(input: {
+  conversationGuidance: ConversationGuidance;
+  disposition: PreCycleRoutingDisposition;
+  preCycleRoutingAssessment: PreCycleRoutingAssessment;
+  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
+  boundaryContradiction: string | null;
+  /** When true, Cognitive Stop outranks any optimistic guidance → HOLD. */
+  cognitiveStop?: boolean;
+}): {
+  conversationGuidance: ConversationGuidance;
+  coerced: boolean;
+  coerceReason: string | null;
+  /** When set, parent must strip LR and fail-closed (EMIT guidance mismatch). */
+  lifecycleGuidanceMismatch: boolean;
+} {
+  const base = input.conversationGuidance;
+
+  if (input.cognitiveStop === true) {
+    if (isHoldBlockerResolution(base)) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP },
+      coerced: true,
+      coerceReason: "cognitive_stop_override",
+      lifecycleGuidanceMismatch: false,
+    };
+  }
+
+  if (input.boundaryContradiction != null) {
+    if (isHoldBlockerResolution(base)) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
+      coerced: true,
+      coerceReason: "boundary_contradiction",
+      lifecycleGuidanceMismatch: false,
+    };
+  }
+
+  const kind = base.kind;
+  const scope = base.scope;
+  const assessment = input.preCycleRoutingAssessment;
+
+  if (input.disposition === "CONTINUE_PRE_CYCLE") {
+    if (assessment.routingBlockingUnknownPresent) {
+      const ok =
+        (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
+        (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+      const r = keepOrReplace(
+        base,
+        ok,
+        CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER,
+        "routing_blocking_unknown",
+      );
+      return { ...r, lifecycleGuidanceMismatch: false };
+    }
+    // Informative pre-cycle without routing blocker.
+    const ok =
+      scope === "PRE_CYCLE" ||
+      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_BOUNDARY,
+      "continue_pre_cycle_scope",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  if (input.disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
+    const ok =
+      (kind === "PRESENT_OPTIONS" && scope === "PRE_CYCLE") ||
+      (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
+      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE,
+      "multiple_plausible_cycles",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  if (input.disposition === "DEFER_TO_ACTIVE_CYCLE") {
+    const ok = scope === "ACTIVE_CYCLE";
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
+      "active_cycle_scope_required",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  // EMIT_LIFECYCLE_RECOMMENDATION + LR kept → require transition guidance.
+  if (input.lifecycleRecommendation != null) {
+    const ok =
+      kind === "RECOMMEND_NEXT_STEP" && scope === "LIFECYCLE_TRANSITION";
+    if (ok) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    // Never auto-promote HOLD/ASK/OPTIONS → RECOMMEND_NEXT_STEP.
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
+      coerced: true,
+      coerceReason: "lifecycle_guidance_mismatch",
+      lifecycleGuidanceMismatch: true,
+    };
+  }
+
+  return {
+    conversationGuidance: base,
+    coerced: false,
+    coerceReason: null,
+    lifecycleGuidanceMismatch: false,
+  };
+}
+
+/**
+ * Compose Pilot-facing assistant text for history continuity.
+ * narrative + conversationGuidance.statement — no internal field names,
+ * no "PROCHAINE ÉTAPE :" label.
+ */
+export function composePilotFacingAssistantText(
+  narrative: string,
+  guidance: ConversationGuidance | null | undefined,
+): string {
+  const n = narrative.trim();
+  if (!guidance) return n;
+  const statement = guidance.statement.trim();
+  if (!statement) return n;
+  if (n.includes(statement)) return n;
+  if (!n) return statement;
+  return `${n}\n\n${statement}`;
+}
+
 /**
  * Deterministic coherence between assessment and lifecycleRecommendation.
  * - CONTINUE / HOLD → strip any LR (no premature recommendation).
  * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
  * - EMIT + LR → keep as emitted (never invent one server-side).
  * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
+ * - EMIT + LR + incompatible guidance → CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH.
+ * - Cognitive Stop → strip LR for this turn; HOLD + BLOCKER_RESOLUTION.
  * Does not parse narrative. Does not create Cycle/HD/START.
  * activeCycleWork is preserved on all return paths (passthrough).
- *
- * remainingUnknownsAreCycleOwned semantics:
- * - true  → remaining unknowns exist and belong to the candidate cycle
- * - false → no materially remaining unknowns (or none that are cycle-owned)
- * Either value is compatible with EMIT when candidateCycleSupportable and
- * no routing blocker / multi-cycle / active-cycle deferral. false is NOT
- * automatically incoherent.
+ * conversationGuidance: full-object fallback when incompatible (CR-NCI-01).
  */
 export function applyPreCycleRoutingBoundaryCoherence(input: {
   narrative: string;
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork?: NoraActiveCycleWorkOutput | null;
+  conversationGuidance?: ConversationGuidance | null;
+  cognitiveStop?: boolean;
 }): PreCycleRoutingBoundaryCoherenceResult {
   const disposition = derivePreCycleRoutingDisposition(
     input.preCycleRoutingAssessment,
   );
   const candidate = input.lifecycleRecommendation;
   const activeCycleWork = input.activeCycleWork ?? null;
+  const rawGuidance = parseConversationGuidanceOrFailClosed(
+    input.conversationGuidance ?? null,
+  );
+  const cognitiveStop = input.cognitiveStop === true;
+
+  const withGuidance = (
+    partial: Omit<
+      PreCycleRoutingBoundaryCoherenceResult,
+      | "conversationGuidance"
+      | "conversationGuidanceCoerced"
+      | "conversationGuidanceCoerceReason"
+    >,
+  ): PreCycleRoutingBoundaryCoherenceResult => {
+    const guided = applyConversationGuidanceCoherence({
+      conversationGuidance: rawGuidance,
+      disposition: partial.disposition,
+      preCycleRoutingAssessment: partial.preCycleRoutingAssessment,
+      lifecycleRecommendation: partial.lifecycleRecommendation,
+      boundaryContradiction: partial.boundaryContradiction,
+      cognitiveStop,
+    });
+
+    let lifecycleRecommendation = partial.lifecycleRecommendation;
+    let lifecycleRecommendationSuppressed =
+      partial.lifecycleRecommendationSuppressed;
+    let suppressReason = partial.suppressReason;
+    let boundaryContradiction = partial.boundaryContradiction;
+
+    // CR-NCI-03 — Cognitive Stop outranks LR materialization for this turn.
+    if (cognitiveStop && lifecycleRecommendation != null) {
+      lifecycleRecommendation = null;
+      lifecycleRecommendationSuppressed = true;
+      suppressReason = suppressReason ?? "cognitive_stop";
+    }
+
+    // CR-NCI-01/03 — EMIT guidance mismatch: fail-closed via contradiction.
+    // Keep the Nora-emitted LR on the coherent result for auditability, but
+    // orchestrator must not materialize (boundaryContradiction gate).
+    // Do not strip LR here — that would make a later normalize look like
+    // MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
+    if (guided.lifecycleGuidanceMismatch) {
+      boundaryContradiction = CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH;
+    }

-  if (disposition === "CONTINUE_PRE_CYCLE") {
     return {
+      ...partial,
+      lifecycleRecommendation,
+      lifecycleRecommendationSuppressed,
+      suppressReason,
+      boundaryContradiction,
+      conversationGuidance: guided.conversationGuidance,
+      conversationGuidanceCoerced: guided.coerced,
+      conversationGuidanceCoerceReason: guided.coerceReason,
+    };
+  };
+
+  if (disposition === "CONTINUE_PRE_CYCLE") {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -323,10 +735,10 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
           ? "routing_blocking_unknown_present"
           : null,
       boundaryContradiction: null,
-    };
+    });
   }
   if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
-    return {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -336,11 +748,11 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       suppressReason:
         candidate !== null ? "multiple_plausible_cycles" : null,
       boundaryContradiction: null,
-    };
+    });
   }
   if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
     if (candidate?.intent === "NEXT_CYCLE") {
-      return {
+      return withGuidance({
         narrative: input.narrative,
         preCycleRoutingAssessment: input.preCycleRoutingAssessment,
         disposition,
@@ -349,9 +761,9 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
         lifecycleRecommendationSuppressed: true,
         suppressReason: "active_cycle_covers_work",
         boundaryContradiction: null,
-      };
+      });
     }
-    return {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -360,11 +772,11 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       lifecycleRecommendationSuppressed: false,
       suppressReason: null,
       boundaryContradiction: null,
-    };
+    });
   }
   // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
   if (candidate === null) {
-    return {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -373,9 +785,9 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       lifecycleRecommendationSuppressed: false,
       suppressReason: null,
       boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
-    };
+    });
   }
-  return {
+  return withGuidance({
     narrative: input.narrative,
     preCycleRoutingAssessment: input.preCycleRoutingAssessment,
     disposition,
@@ -384,16 +796,18 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
     lifecycleRecommendationSuppressed: false,
     suppressReason: null,
     boundaryContradiction: null,
-  };
+  });
 }

 /**
  * Normalize raw structured output into a coherent Product turn.
  * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
  * Missing activeCycleWork → null (backward compatible).
+ * Missing / invalid conversationGuidance → fail-closed HOLD.
  */
 export function normalizeNoraProductTurnStructuredOutput(
   value: unknown,
+  options?: { cognitiveStop?: boolean },
 ): PreCycleRoutingBoundaryCoherenceResult | null {
   if (!value || typeof value !== "object") return null;
   const o = value as Record<string, unknown>;
@@ -426,6 +840,10 @@ export function normalizeNoraProductTurnStructuredOutput(
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
     activeCycleWork,
+    conversationGuidance: parseConversationGuidanceOrFailClosed(
+      o.conversationGuidance,
+    ),
+    cognitiveStop: options?.cognitiveStop === true,
   });
 }

@@ -443,6 +861,7 @@ export function isNoraProductTurnWithOptionalLr(
   ) {
     return false;
   }
+  if (!isConversationGuidance(o.conversationGuidance)) return false;
   if (o.lifecycleRecommendation === null) return true;
   return isNoraLifecycleRecommendationStructuredOutput(
     o.lifecycleRecommendation,
@@ -460,5 +879,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
     lifecycleRecommendation: null,
     activeCycleWork: null,
+    conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
   });
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 4fb5883b..02c1efb9 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -20,7 +20,6 @@ import {
 } from "@/lib/platform/tools";
 import {
   buildFailClosedProductTurnJson,
-  isPreCycleRoutingAssessment,
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";

@@ -196,18 +195,12 @@ export function coercePlainTextToProductTurnJson(text: string): string {
       typeof (parsed as { narrative?: unknown }).narrative === "string"
     ) {
       const o = parsed as Record<string, unknown>;
-      if (isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) {
-        // Ensure schema-required activeCycleWork key (default null).
-        if (!("activeCycleWork" in o)) {
-          return JSON.stringify({ ...o, activeCycleWork: null });
-        }
-        return text;
-      }
       const coherent = normalizeNoraProductTurnStructuredOutput({
         narrative: o.narrative,
         lifecycleRecommendation: o.lifecycleRecommendation ?? null,
         preCycleRoutingAssessment: o.preCycleRoutingAssessment,
         activeCycleWork: o.activeCycleWork ?? null,
+        conversationGuidance: o.conversationGuidance ?? null,
       });
       if (coherent) {
         return JSON.stringify({
@@ -215,6 +208,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
           preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
           lifecycleRecommendation: coherent.lifecycleRecommendation,
           activeCycleWork: coherent.activeCycleWork ?? null,
+          conversationGuidance: coherent.conversationGuidance,
         });
       }
       return buildFailClosedProductTurnJson(String(o.narrative));
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index e8c0410d..05c3f582 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -34,6 +34,7 @@ import {
 } from "./providerAgentsModel";
 import {
   buildFailClosedProductTurnJson,
+  composePilotFacingAssistantText,
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
@@ -605,10 +606,30 @@ export async function runNoraAgentsTurn(
               preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
               lifecycleRecommendation: coherent.lifecycleRecommendation,
               activeCycleWork: coherent.activeCycleWork ?? null,
+              conversationGuidance: coherent.conversationGuidance,
             };
           }
         }
         if (
+          isProductTurnOutput &&
+          structuredOutput &&
+          typeof structuredOutput === "object"
+        ) {
+          const so = structuredOutput as {
+            narrative?: unknown;
+            conversationGuidance?: unknown;
+          };
+          if (typeof so.narrative === "string") {
+            const coherent =
+              normalizeNoraProductTurnStructuredOutput(structuredOutput);
+            text = coherent
+              ? composePilotFacingAssistantText(
+                  coherent.narrative,
+                  coherent.conversationGuidance,
+                )
+              : so.narrative;
+          }
+        } else if (
           structuredOutput &&
           typeof structuredOutput === "object" &&
           "narrative" in structuredOutput &&

```

---

## 14. Handoff

Published via `scripts/sfia/publish-review-handoff.sh` (publish-in-cycle L3).
Canonical: `sfia-review-handoff/latest-chatgpt-review.md` on `sfia/review-handoff`.

CHATGPT REVIEW REQUIRED — READ REMOTE CANONICAL HANDOFF BEFORE VERDICT
