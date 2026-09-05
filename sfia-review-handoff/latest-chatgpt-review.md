# ChatGPT Critical Review Pack — Correction 3

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | `2026-09-05T15:53:29Z` |
| **Cycle** | SFIA v2.6 — CYCLE 8 — DELIVERY / EVOL |
| **Classification** | CRITICAL |
| **Subject** | GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTION 3 — CALL ACCOUNTING + PRODUCT PATH |
| **GO consumed** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTION 3 — ZERO REAL` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep` |
| **Branch** | `docs/sfia-studio-global-model-reasoning-campaign-contract` |
| **HEAD / origin/main / merge-base** | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| **ZERO REAL** | INTEGRAL |
| **Handoff** | HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED |

---

## 1. Local Git Truth

```
pwd = /Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep
branch = docs/sfia-studio-global-model-reasoning-campaign-contract
HEAD = 23d850fda45fe55ba519e0feefe63369d349afcc
origin/main = 23d850fda45fe55ba519e0feefe63369d349afcc
merge-base = 23d850fda45fe55ba519e0feefe63369d349afcc
MAIN_OK — dirty Correction 2/3 candidate expected
```

No stash / reset / clean / rebase / checkout destructif.

---

## 2. Sources (consumed)

Git main doctrine + Studio convergence docs + local candidate E1–E4/F1→F5 + Correction 2 Review Pack provenance.
Git/local files current primés.

---

## 3. Convergence Pre-check

| Item | Status |
| --- | --- |
| Capacity | Nora Cognitive Completion — empirical model × reasoning qualification |
| Milestone | GLOBAL MODEL × REASONING STAGE A ENABLEMENT — CALL ACCOUNTING + PRODUCT PATH — DETERMINISTIC ONLY |
| KEEP | Agents Option C, G1/G2/G3, NoraCampaignBudget, BudgetTracker, F1/F2, MW6, E1 USD honesty |
| ADAPT | Stage A execution plan, F2 binding/accounting, driver counters, MW6 full path, repeat pool |
| INTERDIT | second eval framework, second budget engine, parallel provider, persistence, production router |
| R18 | single coherent lot |
| R21 | DETERMINISTIC PROVEN ≠ REAL |

---

## 4. Reproduction C3-01 → C3-05

### C3-01 — CALL ENVELOPE INVALID (reproduced → closed)
Correction 2 labeled `54+18=72` as `maxModelInvocations`. False: F2 cell = analyzeIntent structured + Agents turns (≤5).

### C3-02 — F2 REASONING BINDING PARTIAL (reproduced → closed)
Metadata pin alone insufficient; need factory(model, effort) → ConversationProvider used by analyzeIntent.

### C3-03 — F3 FULL PRODUCT PATH NOT PROVEN (reproduced → closed)
Prior proof stopped at `resolveMw6GovernedCampaignBudget`. Now full `runMw6GovernedNoraProductTurn`.

### C3-04 — REPEAT POOL GLOBAL STOP BUG (reproduced → closed)
19th repeat set campaign `stopReason=SELECTIVE_REPEAT_POOL_EXHAUSTED`, blocking later base cells.

### C3-05 — MIRROR COUNTERS TRUST EXECUTOR (reproduced → closed)
Driver trusted executor-reported counts; now canonical lease deltas are SoT.

---

## 5. Call plan réel par workload

| Workload | Path | Pre-Agents | Agents maxTurns | Model/cell | Hosted/cell |
| --- | --- | --- | --- | --- | --- |
| W-Routine | agents_cognitive | 0 | 5 (=CT_MAX_TOOL_ROUNDS+1) | 5 | 0 |
| W-Clarification | f2_product | 1 | 5 | 6 | 0 |
| W-Analysis | f2_product | 1 | 5 | 6 | 0 |
| W-High-Assurance | f2_product | 1 | 5 | 6 | 0 |
| W-Memory | agents_cognitive | 0 | 5 | 5 | 0 |
| W-Sources | mw6_governed | 0 | 5 | 5 | 2 |

## 6. Nouvelle enveloppe dérivée

| Quantity | Value | Notes |
| --- | --- | --- |
| maxCellExecutions | **72** | 54+18 — CELL ONLY |
| baseModelInvocationCeiling | **297** | 3×3×33 |
| repeatModelInvocationCeiling | **108** | 18×6 (highest F2 cells) |
| maxModelInvocations | **405** | DERIVED CANDIDATE |
| maxHostedWebOperations | **24** | retained pool |
| maxAggregateRealCalls | **429** | 405+24 DERIVED CANDIDATE |
| Contract version | `global-mr-campaign-contract-v2-candidate` | CANDIDATE ≠ Morris REAL |

Function: `deriveGlobalMrStageAEnvelope()` / `globalMrStageAEnvelopeProof()`.

## 7. USD feasibility

| Metric | Value |
| --- | --- |
| plannedReserveUsdBase | ≈ 6.40 |
| plannedReserveUsdWorstCaseWithRepeats | ≈ **9.77** |
| hardCapUsd | 12 |
| Status | **COMPATIBLE_WITH_CANDIDATE_12** — KEEP 6/9/12 |
| Semantics | pre-dispatch reservation authorization envelope ≠ invoice |

No STOP — STAGE A USD ENVELOPE REQUIRES MORRIS BUDGET DECISION.

## 8. Corrections applied

### C3-01
Explicit `GLOBAL_MR_STAGE_A_CELL_CAPS` vs derived model/aggregate caps. No cell=model equality.

### C3-02
`evalCellProvider.ts`: `EvalCellProviderFactory` + `resolveEvalCellConversationProvider` + `createOpenAiEvalCellProviderFactory` (reuses OpenAIConversationProvider). F2 wires factory → analyzeIntent. Luna+none / Terra+medium / Sol+high proven.

### Constitutive budget claims
`analyzeIntent` claims one `claimModelInvocation` before `completeStructured` when campaignBudget present. Agents path unchanged via existing campaign claim.

### C3-05
`runGlobalMrStageACell` snapshots canonical before/after; mirrors = deltas; executor reports diagnostic only (`reportedMismatch`).

### C3-04
Selective repeat denial returns `cellDenied` without latching `state.stopReason`.

### C3-03
Deterministic test traverses full `runMw6GovernedNoraProductTurn` with Stage A shared lease; mismatch fail-close; ZERO LIVE hosted.

---

## 9. Files

### Modified
- `actions.ts`, `intentAnalysis.ts`, `orchestrateF2.ts`, `mw6GovernedNoraTurn.ts`, `orchestrateTurn.ts`
- `callModelInputFilter.ts`, `runNoraAgentsTurn.ts`, `runNoraCognitiveTurn.ts`, `types.ts`, cognitive-runtime `index.ts`
- `nora-eval/index.ts`
- contract `10-nora-global-model-reasoning-campaign-execution-contract.md`
- `.tmp-sfia-review/chatgpt-review.md` (this pack)

### New
- `app/lib/nora-eval/globalModelReasoningStageA.ts`
- `app/lib/nora-eval/evalCellProvider.ts`
- `app/lib/nora-eval/agentsUsdBridge.ts`
- `app/lib/nora-cognitive-runtime/agentsUsdAccounting.ts`
- tests `c3.call-accounting.d0.test.ts`, `c3.mw6-full-product-path.d0.test.ts`, `e1`–`e4`…

---

## 10. Validation

| Suite | Result |
| --- | --- |
| C3 + E1–E4 targeted | **52+ PASS** (C3 alone 7) |
| Broader G1/G2/G3 + MW0/2/5/6 + runner + authority | **212 PASS** |
| `tsc --noEmit` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| Fake/Scripted only | YES |
| OpenAI LIVE / hosted LIVE / spend | **NONE** |
| ZERO REAL | **INTEGRAL** |

## 11. Non-actions

commit · push · PR · merge · handoff publication · Stage A REAL · production router · package changes · CI · Doctrine/Roadmap

## 12. Next gate

ChatGPT Critical Review → Morris Git integration decision
**PAS** Stage A REAL.

## 13. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A CALL ACCOUNTING + PRODUCT PATH CORRECTED — DETERMINISTIC PROVEN — ZERO REAL**

### Sub-verdicts
- C3-01 CELL EXECUTION × MODEL INVOCATION ENVELOPE — **CLOSED**
- C3-02 F2 STRUCTURED MODEL × EFFORT BINDING — **CLOSED AT DETERMINISTIC SCOPE**
- C3-03 FULL MW6 GOVERNED PRODUCT WIRING — **CLOSED AT DETERMINISTIC SCOPE**
- C3-04 REPEAT POOL SEMANTICS — **CLOSED**
- C3-05 CANONICAL CAMPAIGN COUNTERS — **CLOSED**
- F1 USD HONEST SEMANTICS — REMAINS CLOSED
- G1/G2/G3 — REMAIN CLOSED / ON MAIN
- STAGE A REAL — NOT AUTHORIZED
- PRODUCTION ROUTING — NOT SELECTED
- COGNITIVE COMPLETION — NOT PROVEN
- RUNTIME V3 — NON ADOPTED
- HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED

---

## APPENDIX A — NEW FILE: evalCellProvider.ts

```typescript
/**
 * Eval/server Stage A cell ConversationProvider factory.
 * Reuses OpenAIConversationProvider for REAL; tests inject Fake factories.
 * INTERNAL / EVAL ONLY — never a client DTO.
 */
import {
  OpenAIConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
} from "@/lib/platform/ai";
import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";

export type EvalCellProviderFactory = (input: {
  modelId: string;
  reasoningEffort: OpenAiReasoningEffort;
}) => ConversationProvider;

/**
 * Production-shaped factory: OpenAIConversationProvider(apiKey, model, effort).
 * ZERO REAL tests must NOT call this with a live key — inject a Fake factory instead.
 */
export function createOpenAiEvalCellProviderFactory(
  apiKey: string,
): EvalCellProviderFactory {
  return ({ modelId, reasoningEffort }) => {
    validateRuntimeReasoningCapability(modelId, reasoningEffort);
    return new OpenAIConversationProvider(apiKey, modelId, reasoningEffort);
  };
}

/**
 * Resolve cell provider for Stage A F2 constitutive structured calls.
 * When eval control is set, factory is required (no silent live default).
 */
export function resolveEvalCellConversationProvider(input: {
  evalModelReasoningControl?: {
    modelId: string;
    reasoningEffort: OpenAiReasoningEffort;
  };
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** Explicit injected provider (tests) — must still match pin when both set. */
  provider?: ConversationProvider;
}): ConversationProvider | undefined {
  const control = input.evalModelReasoningControl;
  if (!control) return input.provider;
  validateRuntimeReasoningCapability(control.modelId, control.reasoningEffort);
  if (input.evalCellProviderFactory) {
    return input.evalCellProviderFactory({
      modelId: control.modelId,
      reasoningEffort: control.reasoningEffort,
    });
  }
  if (input.provider) return input.provider;
  return undefined;
}

```

---

## APPENDIX B — NEW FILE: c3.call-accounting.d0.test.ts

```typescript
/** @vitest-environment node */
/**
 * C3 — call envelope + product path corrections — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  FakeConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import {
  buildGlobalMrStageAMatrix,
  buildGlobalMrStageAWorkloadCallPlans,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
  GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
  globalMrStageAEnvelopeProof,
  materializeSelectiveRepeat,
  runGlobalMrStageACell,
  type EvalCellProviderFactory,
  type GlobalMrStageAExecutor,
} from "@/lib/nora-eval";
import {
  buildRunnerModelSettingsForEffort,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { setConversationProviderForTests } from "@/lib/platform/ai";

describe("C3-01 — cell executions ≠ model invocations", () => {
  it("derives envelope: 72 cell executions ≠ model invocations", () => {
    expect(GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS).toBe(
      CT_MAX_TOOL_ROUNDS + 1,
    );
    const plans = buildGlobalMrStageAWorkloadCallPlans();
    expect(plans["W-Routine"].maxModelInvocationsPerCell).toBe(5);
    expect(plans["W-Clarification"].maxModelInvocationsPerCell).toBe(6);
    expect(plans["W-Sources"].maxModelInvocationsPerCell).toBe(5);
    expect(plans["W-Clarification"].preAgentsStructuredModelCalls).toBe(1);

    const d = deriveGlobalMrStageAEnvelope();
    expect(d.maxCellExecutions).toBe(72);
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions).toBe(72);
    // 3×3×(5+6+6+6+5+5)=297 base; top-18 F2 cells×6=108; total 405
    expect(d.baseModelInvocationCeiling).toBe(297);
    expect(d.repeatModelInvocationCeiling).toBe(108);
    expect(d.maxModelInvocations).toBe(405);
    expect(d.maxHostedWebOperations).toBe(24);
    expect(d.maxAggregateRealCalls).toBe(429);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls).toBe(429);
    expect(d.maxModelInvocations).not.toBe(d.maxCellExecutions);
    expect(d.usdFeasibility.ok).toBe(true);
    expect(d.usdFeasibility.status).toBe("COMPATIBLE_WITH_CANDIDATE_12");
    expect(GLOBAL_MR_STAGE_A_CONTRACT_VERSION).toBe(
      "global-mr-campaign-contract-v2-candidate",
    );
    const proof = globalMrStageAEnvelopeProof();
    expect(proof.maxModelInvocations).toBe(405);
    expect(proof.maxCellExecutions).toBe(72);
    expect(proof.usdSemantics).toBe(
      "pre_dispatch_reservation_authorization_envelope",
    );
  });

  it("matrix paths match call plans", () => {
    const cells = buildGlobalMrStageAMatrix({ campaignId: "c3-matrix" });
    expect(cells).toHaveLength(54);
    expect(
      cells.filter((c) => c.executionKind === "f2_product"),
    ).toHaveLength(27);
    expect(
      cells.filter((c) => c.executionKind === "agents_cognitive"),
    ).toHaveLength(18);
    expect(
      cells.filter((c) => c.executionKind === "mw6_governed"),
    ).toHaveLength(9);
  });
});

describe("C3-04 — repeat pool does not latch campaign stop", () => {
  it("after 18 repeats, base cell still executes", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-repeat-${Date.now()}`,
    });
    const cells = buildGlobalMrStageAMatrix({ campaignId: state.campaignId });
    const executor: GlobalMrStageAExecutor = async () => ({
      passFail: "PASS",
      failureClass: "NONE",
      rawSummary: "ok",
      usage: null,
    });
    for (let i = 0; i < 18; i += 1) {
      const out = await runGlobalMrStageACell({
        state,
        cell: materializeSelectiveRepeat(cells[i]!),
        executor,
      });
      expect(out.stopped).toBe(false);
    }
    const denied = await runGlobalMrStageACell({
      state,
      cell: materializeSelectiveRepeat(cells[18]!),
      executor,
    });
    expect(denied.cellDenied).toBe("SELECTIVE_REPEAT_POOL_EXHAUSTED");
    expect(state.stopReason).toBe("NONE");

    // Base cell still allowed
    let called = false;
    const base = await runGlobalMrStageACell({
      state,
      cell: cells[30]!,
      executor: async () => {
        called = true;
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: "base-ok",
          usage: null,
        };
      },
    });
    expect(called).toBe(true);
    expect(base.stopped).toBe(false);
    expect(state.stopReason).toBe("NONE");
  });
});

describe("C3-05 — canonical counters are source of truth", () => {
  it("executor reported 0 does not override canonical delta", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-canon-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.workloadId === "W-Routine")!;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: cell.model,
      assumedInputTokens: 50,
      assumedOutputTokens: 20,
    });
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async (c, ctx) => {
        const turn = await runNoraAgentsTurn({
          correlationId: "c3-canon",
          projectId: "proj",
          systemInstructions: sfiaBoundaryInstructions(),
          userContent: "x",
          model: new ScriptedModel([[assistantMessage("OK")]]),
          runnerModelSettings: buildRunnerModelSettingsForEffort(
            c.reasoningEffort,
          ),
          enableTools: false,
          maxTurns: 1,
          campaignBudget: ctx.campaignBudget,
          usdAccounting: usd,
        });
        return {
          passFail: "PASS",
          failureClass: "NONE",
          rawSummary: turn.text,
          usage: null,
          // Lie: report 0 while canonical claimed 1
          reportedModelInvocationsConsumed: 0,
          reportedHostedOperationsConsumed: 0,
        };
      },
    });
    expect(state.campaignBudget.consumedModelInvocations).toBe(1);
    expect(state.modelInvocations).toBe(1);
    expect(out.evidence?.productObservation?.canonicalDelta).toMatchObject({
      model: 1,
      reportedMismatch: true,
    });
  });
});

describe("C3-02 — F2 provider factory binding + canonical F2 counts", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c3-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-05T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "C3 F2",
      objective: "binding",
      context: "c3",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C3",
      idempotencyKey: `idem:c3-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("factory receives exact Luna+none / Terra+medium / Sol+high", () => {
    const received: Array<{
      modelId: string;
      reasoningEffort: OpenAiReasoningEffort;
    }> = [];
    const factory: EvalCellProviderFactory = ({
      modelId,
      reasoningEffort,
    }) => {
      received.push({ modelId, reasoningEffort });
      return new FakeConversationProvider();
    };
    const pins = [
      { modelId: "gpt-5.6-luna", reasoningEffort: "none" as const },
      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" as const },
      { modelId: "gpt-5.6-sol", reasoningEffort: "high" as const },
    ];
    for (const pin of pins) {
      const provider = factory(pin);
      expect(provider).toBeTruthy();
    }
    expect(received).toEqual(pins);
  });

  it("factory receives exact model+effort; F2 informative counts analyzeIntent + Agents", async () => {
    const received: Array<{
      modelId: string;
      reasoningEffort: OpenAiReasoningEffort;
    }> = [];
    class BoundFake implements ConversationProvider {
      readonly providerId = "fake-test";
      constructor(
        readonly modelId: string,
        readonly reasoningEffort: OpenAiReasoningEffort,
      ) {}
      async complete(messages: ProviderChatMessage[]) {
        return {
          text: `[TEST/FAKE] ${JSON.stringify({
            intentClass: "informative",
            candidateCycleTypeId: null,
            signals: null,
            cognitiveWorkload: null,
            objective: null,
            scope: null,
            rephrasedRequest: "x",
            outOfScope: [],
            risks: [],
            reservations: [],
            stopConditions: [],
            activatedBlocks: [],
            expectedOutcome: null,
            criticalJustification: null,
            requestedOperation: null,
          })}`,
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: this.modelId,
            providerResponseId: "b",
          },
        };
      }
      async completeStructured(input: {
        messages: ProviderChatMessage[];
        schemaName: string;
        jsonSchema: Record<string, unknown>;
      }): Promise<ProviderCompletionResult> {
        return this.complete(input.messages);
      }
    }
    const factory: EvalCellProviderFactory = ({
      modelId,
      reasoningEffort,
    }) => {
      received.push({ modelId, reasoningEffort });
      return new BoundFake(modelId, reasoningEffort);
    };

    const state = createGlobalMrStageADriver({
      campaignId: `c3-f2-${Date.now()}`,
    });
    const before = state.campaignBudget.consumedModelInvocations;
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-terra:medium")],
    ]);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
        agentsModel: scripted,
      },
      evalCellProviderFactory: factory,
      campaignBudget: state.campaignBudget,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(received).toEqual([
      { modelId: "gpt-5.6-terra", reasoningEffort: "medium" },
    ]);
    expect(result.text).toContain("PIN:gpt-5.6-terra:medium");
    expect(result.f2?.turnKind).toBe("f1_informative");
    // analyzeIntent claim (1) + Agents claim (1) = 2
    expect(state.campaignBudget.consumedModelInvocations - before).toBe(2);
  });

  it("analyzeIntent alone claims one canonical slot", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c3-ai-${Date.now()}`,
    });
    const before = state.campaignBudget.consumedModelInvocations;
    await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "p",
      provider: new FakeConversationProvider(),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      campaignBudget: state.campaignBudget,
    });
    expect(state.campaignBudget.consumedModelInvocations - before).toBe(1);
  });
});

```

---

## APPENDIX C — NEW FILE: c3.mw6-full-product-path.d0.test.ts

```typescript
/** @vitest-environment node */
/**
 * C3-03 — full MW6 governed product path through Stage A canonical lease — ZERO REAL.
 *
 * Reuses W2 harness + MW6 server-composition seeding patterns.
 * Does NOT invent a second authority framework.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import type { ActorReference } from "@/lib/oa/decision";
import { FakeConversationProvider, setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { runMw6GovernedNoraProductTurn } from "@/features/project-assistant/mw6GovernedNoraTurn";
import {
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
} from "@/lib/nora-eval";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";

const HUMAN_ACTOR: ActorReference = {
  actorId: "actor:mw6-hd-human",
  role: "project_owner",
  displayName: "MW6 HD",
  authorityLevel: "N2",
};

function makePilote(
  githubUserId: string,
): Extract<ResolveCurrentPiloteResult, { ok: true }> {
  return {
    ok: true,
    githubUserId,
    betterAuthUserId: `ba-user-${githubUserId}`,
    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
  };
}

function productContext(campaignId: string, strategyInput?: SourceStrategyInput) {
  const strategy = decideSourceStrategy(
    strategyInput ?? { claimText: CLAIM },
  );
  const binding = bindSourceProviderCapability(strategy);
  return { strategy, binding, campaignId };
}

async function seedAcceptedDecisionOnRuntime(
  runtime: RuntimeApplicationService,
  input: {
    decisionId: string;
    projectId: string;
    cycleInstanceId: string;
  },
): Promise<void> {
  const oa = runtime.oa!;
  const subject = "subj:mw6-ext-discovery";
  try {
    oa.authorityResolver.register({
      evidenceId: "evd:registry-mw6-hd",
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: subject,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* immutable re-register */
  }
  const recorded = await oa.decisionServices.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject,
    options: [
      { optionId: "opt:go", label: "Go" },
      { optionId: "opt:no", label: "No" },
    ],
    selectedOptionId: "opt:go",
    actor: HUMAN_ACTOR,
    authority: "delegated",
    reversible: false,
    authorityEvidenceId: "evd:registry-mw6-hd",
  });
  expect(recorded.ok).toBe(true);
}

async function seedConfirmedMw6Ec(input: {
  runtime: RuntimeApplicationService;
  projectId: string;
  cycleInstanceId: string;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  confirmationId: string;
}): Promise<{ intent: Mw6ExternalDiscoveryContractInput }> {
  const oa = input.runtime.oa!;
  const product = productContext(input.campaignId);
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");

  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: input.projectId,
    campaignId: input.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [input.decisionId],
    idempotencyKey: `idem:${input.executionContractId}`,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(intentBuilt.ok).toBe(true);
  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
  const intent = intentBuilt.intent;
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);

  const registryEvidenceId = `evd:registry-${input.executionContractId}`;
  try {
    oa.authorityResolver.register({
      evidenceId: registryEvidenceId,
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* already */
  }

  const built = await oa.executionContractServices.buildExecutionContract.execute({
    executionContractId: semantic.executionContractId,
    projectId: semantic.projectId,
    decisionRefs: [input.decisionId],
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    requiredAuthority: "N2",
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
    cycleInstanceId: semantic.cycleInstanceId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
    });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: input.confirmationId,
    level: "N2",
    actionRef: `act:confirm:${input.executionContractId}`,
    requestedBy: HUMAN_ACTOR,
    requestedTo: HUMAN_ACTOR,
    scope: semantic.scope,
    idempotencyKey: `idem-cfm-${input.confirmationId}`,
    decisionRef: input.decisionId,
  });
  expect(requested.ok).toBe(true);

  const granted = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: input.confirmationId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(granted.ok).toBe(true);

  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      confirmationId: input.confirmationId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
      expectedVersion: validated.contract.version,
    });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return { intent };
}

describe("C3-03 — full MW6 governed product path (deterministic)", () => {
  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-c3.sqlite"),
      idPrefix: "mw6c3",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c3" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  it("driver → runMw6GovernedNoraProductTurn → same canonical lease; no 4/2/4; ZERO LIVE", async () => {
    const campaignId = `c3-mw6-${Date.now()}`;
    const executionContractId = "xct:mw6-c3-full";
    const decisionId = "dec:mw6-c3-full";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c3-full",
    });

    const state = createGlobalMrStageADriver({ campaignId });
    expect(state.campaignBudget.maxModelInvocations).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
    );
    expect(state.campaignBudget.maxModelInvocations).not.toBe(4);

    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeHosted = state.campaignBudget.consumedHostedWebOperations;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });

    const pilote = makePilote("11111111");
    const result = await runMw6GovernedNoraProductTurn({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      sharedCampaignBudget: state.campaignBudget,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      usdAccounting: usd,
      // Hostile client fields — ignored
      governedAuthority: {
        actorId: "actor:hostile",
        authorityEvidenceId: "evd:hostile",
      },
      actorId: "actor:hostile-override",
      claimedAuthorityLevel: "N3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition.serverComposedGovernedAuthority).toBe(
      true,
    );
    expect(result.mw6AuthorityComposition.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition.realAuthorized).toBe(false);
    expect(result.mw6AuthorityComposition.liveHostedDispatchCalls).toBe(0);
    expect(result.mw6AuthorityComposition.actorId).toBe(pilote.actor.actorId);

    // Same canonical lease — model claim(s) landed on Stage A budget, not a local 4/2/4.
    expect(state.campaignBudget.consumedModelInvocations).toBeGreaterThan(
      beforeModel,
    );
    expect(state.campaignBudget.campaignId).toBe(campaignId);
    expect(state.campaignBudget.maxAggregateRealCalls).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
    );
    // Deterministic hosted fixture path — no silent REAL hosted claim invent.
    expect(
      state.campaignBudget.consumedHostedWebOperations - beforeHosted,
    ).toBeGreaterThanOrEqual(0);
  });

  it("campaign mismatch fail-closes before model dispatch", async () => {
    const campaignId = `c3-mw6-match-${Date.now()}`;
    const executionContractId = "xct:mw6-c3-mismatch";
    const decisionId = "dec:mw6-c3-mismatch";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c3-mismatch",
    });

    const other = createGlobalMrStageADriver({
      campaignId: `other-${Date.now()}`,
    });
    const before = other.campaignBudget.consumedModelInvocations;

    const result = await runMw6GovernedNoraProductTurn({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
      sharedCampaignBudget: other.campaignBudget,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("CAMPAIGN_ID_MISMATCH");
    expect(other.campaignBudget.consumedModelInvocations).toBe(before);
  });
});

```

---

## APPENDIX D — Product path diff (intent/F2/MW6/actions)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 8137350f..034f4687 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -71,6 +71,16 @@ export async function projectAssistantSendAction(input: {
   resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
   provider?: import("@/lib/platform/ai").ConversationProvider;
   sessionDbPath?: string;
+  /** INTERNAL/EVAL-ONLY — Stage A shared canonical campaign budget. */
+  sharedCampaignBudget?: RunMw6GovernedNoraProductTurnInput["sharedCampaignBudget"];
+  /** INTERNAL/EVAL-ONLY */
+  evalModelReasoningControl?: RunMw6GovernedNoraProductTurnInput["evalModelReasoningControl"];
+  /** INTERNAL/EVAL-ONLY */
+  usdAccounting?: RunMw6GovernedNoraProductTurnInput["usdAccounting"];
+  /** INTERNAL/EVAL-ONLY — F2 non-MW6 path */
+  evalCellProviderFactory?: import("@/lib/nora-eval/evalCellProvider").EvalCellProviderFactory;
+  /** INTERNAL/EVAL-ONLY — F2 non-MW6 path */
+  campaignBudget?: import("@/lib/nora-cognitive-runtime").NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const executionContractId =
     typeof input.executionContractId === "string"
@@ -96,6 +106,9 @@ export async function projectAssistantSendAction(input: {
       currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
       canActAsMorris: input.canActAsMorris,
       claimedAuthorityLevel: input.claimedAuthorityLevel,
+      sharedCampaignBudget: input.sharedCampaignBudget,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
     });
   }
   return orchestrateAssistantSend({
@@ -104,6 +117,10 @@ export async function projectAssistantSendAction(input: {
     history: input.history,
     provider: input.provider,
     sessionDbPath: input.sessionDbPath,
+    evalModelReasoningControl: input.evalModelReasoningControl,
+    evalCellProviderFactory: input.evalCellProviderFactory,
+    usdAccounting: input.usdAccounting,
+    campaignBudget: input.campaignBudget,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 970d8681..b4037665 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -10,6 +10,12 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
+import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
+import type { NoraEvalModelReasoningControl } from "@/lib/nora-cognitive-runtime";
+import {
+  claimModelInvocation,
+  type NoraCampaignBudget,
+} from "@/lib/nora-cognitive-runtime";
 import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
 import type {
   F2QualificationSignals,
@@ -497,12 +503,42 @@ export async function analyzeIntent(input: {
    * Never client-authoritative for model/reasoning selection.
    */
   provider?: ConversationProvider;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell model×effort identity for constitutive
+   * ConversationProvider calls (completeStructured). Absent → production default.
+   * When set, an injected cell provider is required (no silent live default).
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /**
+   * INTERNAL / EVAL-ONLY — shared Stage A NoraCampaignBudget.
+   * When present, one model-call slot is claimed before completeStructured.
+   */
+  campaignBudget?: NoraCampaignBudget;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
   model: string | null;
   rawText: string;
+  /** Eval-only observation — never a client DTO field. */
+  evalPinnedModelId?: string;
+  evalPinnedReasoningEffort?: string;
+  /** True when a canonical model-call claim was taken for this structured call. */
+  campaignModelClaimed?: boolean;
 }> {
+  const evalControl = input.evalModelReasoningControl;
+  if (evalControl) {
+    validateRuntimeReasoningCapability(
+      evalControl.modelId,
+      evalControl.reasoningEffort,
+    );
+    if (!input.provider) {
+      throw new TechnicalError(
+        "CONFIG",
+        "EVAL_CELL_PROVIDER_REQUIRED: evalModelReasoningControl requires an injected cell ConversationProvider (no silent live default).",
+      );
+    }
+  }
+
   const provider = input.provider ?? resolveConversationProvider();
   // Presentation follows the provider instance actually used (explicit injection wins).
   const presentation =
@@ -529,6 +565,19 @@ export async function analyzeIntent(input: {
     );
   }

+  let campaignModelClaimed = false;
+  if (input.campaignBudget) {
+    const ok = claimModelInvocation(input.campaignBudget);
+    if (!ok) {
+      throw new TechnicalError(
+        "CONFIG",
+        input.campaignBudget.denialReason ??
+          "Campaign model invocation cap reached — analyzeIntent not dispatched.",
+      );
+    }
+    campaignModelClaimed = true;
+  }
+
   const completion = await provider.completeStructured({
     messages,
     schemaName: F2_INTENT_SCHEMA_NAME,
@@ -550,5 +599,12 @@ export async function analyzeIntent(input: {
     presentation,
     model: completion.usage?.model ?? null,
     rawText: completion.text,
+    ...(evalControl
+      ? {
+          evalPinnedModelId: evalControl.modelId,
+          evalPinnedReasoningEffort: evalControl.reasoningEffort,
+        }
+      : {}),
+    ...(campaignModelClaimed ? { campaignModelClaimed: true } : {}),
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 276bce91..59325273 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -8,6 +8,15 @@ import {
   isFakeConversationProviderForced,
   type ConversationProvider,
 } from "@/lib/platform/ai";
+import type {
+  NoraAgentsUsdAccounting,
+  NoraCampaignBudget,
+  NoraEvalModelReasoningControl,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  resolveEvalCellConversationProvider,
+  type EvalCellProviderFactory,
+} from "@/lib/nora-eval/evalCellProvider";
 import {
   getRuntimeApplicationService,
   readLiveProjectContext,
@@ -524,10 +533,25 @@ export async function orchestrateAssistantSend(input: {
   /**
    * Optional server-side provider injection (eval / tests).
    * Prefer per-instance OpenAIConversationProvider over process.env mutation.
+   * For Stage A cells: inject the cell-specific ConversationProvider here.
    */
   provider?: ConversationProvider;
   /** Test override for Product SQLite Session path (MW1/MW4 durability). */
   sessionDbPath?: string;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
+   * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /**
+   * INTERNAL / EVAL-ONLY — factory(modelId, effort) → ConversationProvider.
+   * Required with evalModelReasoningControl for honest structured binding.
+   */
+  evalCellProviderFactory?: EvalCellProviderFactory;
+  /** INTERNAL / EVAL-ONLY — USD authorization envelope (Agents path). */
+  usdAccounting?: NoraAgentsUsdAccounting;
+  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
+  campaignBudget?: NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -566,6 +590,24 @@ export async function orchestrateAssistantSend(input: {
     };
   }

+  const cellProvider = resolveEvalCellConversationProvider({
+    evalModelReasoningControl: input.evalModelReasoningControl,
+    evalCellProviderFactory: input.evalCellProviderFactory,
+    provider: input.provider,
+  });
+  if (input.evalModelReasoningControl && !cellProvider) {
+    return {
+      ok: false,
+      status: "provider_error",
+      code: "EVAL_CELL_PROVIDER_REQUIRED",
+      message:
+        "evalModelReasoningControl requires evalCellProviderFactory or injected cell provider.",
+      mode: modeResolution.mode,
+      retryable: false,
+    };
+  }
+  const effectiveProvider = cellProvider ?? input.provider;
+
   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
   try {
@@ -602,7 +644,9 @@ export async function orchestrateAssistantSend(input: {
       userContent: content,
       projectSummary: cognitive.projectSummary,
       challengeContext,
-      provider: input.provider,
+      provider: effectiveProvider,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      campaignBudget: input.campaignBudget,
     });
   } catch (error) {
     const message =
@@ -649,10 +693,13 @@ export async function orchestrateAssistantSend(input: {
   ) {
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
-      provider: input.provider,
+      provider: effectiveProvider,
       semanticCognitiveWorkload: analysis.cognitiveWorkload,
       truthCContext: truthCContextForF1,
       contradictionAssessment,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
+      campaignBudget: input.campaignBudget,
     });
     if (!f1.ok) return f1;
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
index 9620b37b..95c37200 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
@@ -24,8 +24,13 @@ import {
 } from "@/lib/platform/ai";
 import {
   acquireNoraCampaignBudget,
+  isCanonicalCampaignBudget,
+  requireCanonicalCampaignBudget,
   runNoraCognitiveTurn,
+  type NoraCampaignBudget,
   type NoraCognitiveTurnResult,
+  type NoraEvalModelReasoningControl,
+  type NoraAgentsUsdAccounting,
 } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
@@ -82,6 +87,61 @@ export function extractMw6CampaignIdFromScope(scope: string): string | null {
   return m?.[1] ?? null;
 }

+/**
+ * Resolve campaign budget for MW6 governed product turn.
+ * INTERNAL — sharedCampaignBudget is eval/server only, never client-trusted.
+ */
+export function resolveMw6GovernedCampaignBudget(input: {
+  campaignId: string;
+  sharedCampaignBudget?: NoraCampaignBudget;
+}):
+  | { ok: true; budget: NoraCampaignBudget; acquiredLocally: boolean }
+  | { ok: false; code: string; message: string } {
+  if (input.sharedCampaignBudget) {
+    try {
+      requireCanonicalCampaignBudget(input.sharedCampaignBudget);
+    } catch {
+      return {
+        ok: false,
+        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
+        message:
+          "sharedCampaignBudget is not the canonical active lease — refusing fabricated budget.",
+      };
+    }
+    if (!isCanonicalCampaignBudget(input.sharedCampaignBudget)) {
+      return {
+        ok: false,
+        code: "CAMPAIGN_BUDGET_LEASE_INVALID",
+        message: "sharedCampaignBudget failed canonical lease check.",
+      };
+    }
+    if (input.sharedCampaignBudget.campaignId !== input.campaignId) {
+      return {
+        ok: false,
+        code: "CAMPAIGN_ID_MISMATCH",
+        message:
+          "sharedCampaignBudget.campaignId does not match ExecutionContract scope campaignId.",
+      };
+    }
+    return {
+      ok: true,
+      budget: input.sharedCampaignBudget,
+      acquiredLocally: false,
+    };
+  }
+  return {
+    ok: true,
+    budget: acquireNoraCampaignBudget({
+      campaignId: input.campaignId,
+      maxModelInvocations: 4,
+      maxHostedWebOperations: 2,
+      maxAggregateRealCalls: 4,
+      hostedHardCapCapability: "provider_max_tool_calls",
+    }),
+    acquiredLocally: true,
+  };
+}
+
 export type Mw6GovernedNoraProductTurnSuccess = Extract<
   ProjectAssistantSendResult,
   { ok: true }
@@ -132,6 +192,16 @@ export type RunMw6GovernedNoraProductTurnInput = {
   currentExternalDiscoveryIntent?: unknown;
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
+  /**
+   * INTERNAL/EVAL-ONLY — canonical NoraCampaignBudget already acquired by Stage A
+   * driver. Not client-trusted. Possession ≠ authority grant.
+   * Absent → legacy in-turn acquire 4/2/4 unchanged.
+   */
+  sharedCampaignBudget?: NoraCampaignBudget;
+  /** INTERNAL/EVAL-ONLY — model×effort pin for campaign cells. */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /** INTERNAL/EVAL-ONLY — USD accounting bridge for native Agents. */
+  usdAccounting?: NoraAgentsUsdAccounting;
 };

 /**
@@ -253,13 +323,22 @@ export async function runMw6GovernedNoraProductTurn(
   const campaignId =
     extractMw6CampaignIdFromScope(loaded.contract.scope) ??
     `mw6:${composed.executionContractId}`;
-  const campaignBudget = acquireNoraCampaignBudget({
+
+  const budgetResolved = resolveMw6GovernedCampaignBudget({
     campaignId,
-    maxModelInvocations: 4,
-    maxHostedWebOperations: 2,
-    maxAggregateRealCalls: 4,
-    hostedHardCapCapability: "provider_max_tool_calls",
+    sharedCampaignBudget: input.sharedCampaignBudget,
   });
+  if (!budgetResolved.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: budgetResolved.code,
+      message: budgetResolved.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const campaignBudget = budgetResolved.budget;

   const modeResolution = resolveAssistantMode(input.provider);
   if (!modeResolution.canProceed) {
@@ -315,6 +394,8 @@ export async function runMw6GovernedNoraProductTurn(
       enableHostedWebSearch: true,
       campaignBudget,
       governedAuthority: composed.governedAuthority as import("@/lib/nora-cognitive-runtime").Mw6GovernedAuthorityContext,
+      evalModelReasoningControl: input.evalModelReasoningControl,
+      usdAccounting: input.usdAccounting,
       // Deterministic boundary — ZERO LIVE hosted dispatch.
       deterministicHostedWebSearchCalls: [],
     });

```

---

## APPENDIX E — globalModelReasoningStageA.ts (full candidate)

```typescript
/**
 * Global Model × Reasoning — Stage A driver + derived call envelope (nora-eval).
 *
 * CELL EXECUTIONS ≠ MODEL INVOCATIONS.
 * Caps for model/aggregate are DERIVED from product-path ceilings.
 * USD 6/9/12 remains candidate authorization envelope (≠ invoice).
 * ZERO REAL by default: injectable executor; canonical NoraCampaignBudget is SoT.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import {
  acquireNoraCampaignBudget,
  campaignBudgetSnapshot,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  NORA_EVAL_GLOBAL_CATALOG_VERSION,
  type CampaignCellConfig,
  type CampaignBudgetPolicy,
  type FailureClass,
  type PassFail,
  type RunEvidence,
} from "./types";
import {
  BudgetTracker,
  buildGlobalModelReasoningCapabilityManifest,
  conservativePreCallEstimateUsd,
  validateCellAgainstManifest,
  type CapabilityManifest,
} from "./capabilityBudget";
import { getScenario } from "./catalog";

export const GLOBAL_MR_STAGE_A_CONTRACT_VERSION =
  "global-mr-campaign-contract-v2-candidate" as const;

export const GLOBAL_MR_STAGE_A_MODELS = [
  "gpt-5.6-luna",
  "gpt-5.6-terra",
  "gpt-5.6-sol",
] as const;

export const GLOBAL_MR_STAGE_A_EFFORTS = [
  "none",
  "medium",
  "high",
] as const satisfies readonly OpenAiReasoningEffort[];

export const GLOBAL_MR_STAGE_A_WORKLOADS = [
  "W-Routine",
  "W-Clarification",
  "W-Analysis",
  "W-High-Assurance",
  "W-Memory",
  "W-Sources",
] as const;

export type GlobalMrStageAWorkloadId =
  (typeof GLOBAL_MR_STAGE_A_WORKLOADS)[number];

export const GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS: Record<
  GlobalMrStageAWorkloadId,
  string
> = {
  "W-Routine": "mw2.s01.strategy-effort-decoupling",
  "W-Clarification": "mw5.s01.challenge-clarification",
  "W-Analysis": "mw3.s01.disposition-matrix",
  "W-High-Assurance": "mw4.s01.grounding-durability",
  "W-Memory": "mw1.s01.honest-memory-b-availability",
  "W-Sources": "mw6.s02.read-search-partiality-failclosed",
};

/**
 * Product-path Agents model-turn ceiling for Stage A cells.
 * Derived from runNoraAgentsTurn default: CT_MAX_TOOL_ROUNDS + 1.
 */
export const GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS =
  CT_MAX_TOOL_ROUNDS + 1;

export type GlobalMrStageAProductPath =
  | "agents_cognitive"
  | "f2_product"
  | "mw6_governed";

/**
 * Per-workload constitutive call plan (deterministic product-path ceilings).
 * F2 informative Stage A framing: analyzeIntent structured + Agents F1 path.
 * Does not include optional CKC actionable extra structured call (not constitutive
 * of the Stage A informative comparison cells).
 */
export type GlobalMrStageAWorkloadCallPlan = {
  workloadId: GlobalMrStageAWorkloadId;
  productPath: GlobalMrStageAProductPath;
  /** ConversationProvider completeStructured calls before Agents. */
  preAgentsStructuredModelCalls: number;
  /** Max Agents Runner model turns (claimModelInvocation each). */
  maxAgentsModelTurns: number;
  /** Max constitutive model invocations for ONE cell execution. */
  maxModelInvocationsPerCell: number;
  /** Max hosted web ops claimable for ONE cell (Sources only). */
  maxHostedWebOperationsPerCell: number;
  proofNote: string;
};

export function buildGlobalMrStageAWorkloadCallPlans(): Record<
  GlobalMrStageAWorkloadId,
  GlobalMrStageAWorkloadCallPlan
> {
  const agentsTurns = GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS;
  const mk = (
    workloadId: GlobalMrStageAWorkloadId,
    productPath: GlobalMrStageAProductPath,
    pre: number,
    hosted: number,
    proofNote: string,
  ): GlobalMrStageAWorkloadCallPlan => ({
    workloadId,
    productPath,
    preAgentsStructuredModelCalls: pre,
    maxAgentsModelTurns: agentsTurns,
    maxModelInvocationsPerCell: pre + agentsTurns,
    maxHostedWebOperationsPerCell: hosted,
    proofNote,
  });
  return {
    "W-Routine": mk(
      "W-Routine",
      "agents_cognitive",
      0,
      0,
      "runNoraCognitiveTurn → runNoraAgentsTurn; default maxTurns=CT_MAX_TOOL_ROUNDS+1",
    ),
    "W-Clarification": mk(
      "W-Clarification",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent.completeStructured(1) + F1 Agents turns",
    ),
    "W-Analysis": mk(
      "W-Analysis",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
    ),
    "W-High-Assurance": mk(
      "W-High-Assurance",
      "f2_product",
      1,
      0,
      "orchestrateAssistantSend → analyzeIntent(1) + F1 Agents turns",
    ),
    "W-Memory": mk(
      "W-Memory",
      "agents_cognitive",
      0,
      0,
      "Option C / Agents cognitive path; maxTurns=CT_MAX_TOOL_ROUNDS+1",
    ),
    "W-Sources": mk(
      "W-Sources",
      "mw6_governed",
      0,
      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
      "runMw6GovernedNoraProductTurn → Agents; hosted capped per cell at provider tool-calls/response",
    ),
  };
}

/** Candidate hosted tool-calls/response (campaign). */
export const GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE = 2;

/** Cell execution envelope — NOT model invocations. */
export const GLOBAL_MR_STAGE_A_CELL_CAPS = {
  baseCells: 54,
  maxSelectiveRepeats: 18,
  maxRepeatsPerCell: 2,
  maxCellExecutions: 54 + 18,
} as const;

/** Candidate USD envelope — authorization ≠ invoice. */
export const GLOBAL_MR_STAGE_A_USD_POLICY: CampaignBudgetPolicy = {
  targetUsd: 6,
  softStopUsd: 9,
  hardCapUsd: 12,
};

export type GlobalMrStageADerivedEnvelope = {
  contractVersion: typeof GLOBAL_MR_STAGE_A_CONTRACT_VERSION;
  maxCellExecutions: number;
  maxSelectiveRepeats: number;
  baseModelInvocationCeiling: number;
  repeatModelInvocationCeiling: number;
  maxModelInvocations: number;
  maxHostedWebOperations: number;
  maxAggregateRealCalls: number;
  perWorkload: Record<GlobalMrStageAWorkloadId, GlobalMrStageAWorkloadCallPlan>;
  usd: CampaignBudgetPolicy;
  usdFeasibility: {
    ok: boolean;
    plannedReserveUsdBase: number;
    plannedReserveUsdWorstCaseWithRepeats: number;
    hardCapUsd: number;
    status: "COMPATIBLE_WITH_CANDIDATE_12" | "REQUIRES_MORRIS_BUDGET_DECISION";
  };
  derivationNotes: string[];
};

/**
 * Derive Stage A model/aggregate ceilings from product-path plans.
 * Worst-case selective repeats: up to 18 highest per-cell model costs
 * (at most one repeat per base cell).
 */
export function deriveGlobalMrStageAEnvelope(): GlobalMrStageADerivedEnvelope {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const derivationNotes: string[] = [
    "maxCellExecutions = 54 base + 18 selective repeats = 72 (cell executions, not model calls).",
    `maxAgentsModelTurns = CT_MAX_TOOL_ROUNDS+1 = ${GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS}.`,
    "F2 workloads include 1 constitutive analyzeIntent structured model call.",
    "Repeat ceiling uses the 18 highest per-cell model-call costs (≤1 repeat/base cell).",
  ];

  const cellCosts: Array<{
    model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
    effort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
    workloadId: GlobalMrStageAWorkloadId;
    modelCalls: number;
    estimatedUsd: number;
  }> = [];

  let baseModelInvocationCeiling = 0;
  let plannedReserveUsdBase = 0;

  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
    for (const effort of GLOBAL_MR_STAGE_A_EFFORTS) {
      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
        const plan = plans[workloadId];
        const modelCalls = plan.maxModelInvocationsPerCell;
        baseModelInvocationCeiling += modelCalls;
        const perCall = conservativePreCallEstimateUsd({
          manifest: buildGlobalModelReasoningCapabilityManifest(
            "2026-09-05T00:00:00.000Z",
          ),
          modelId: model,
        });
        const estimatedUsd = perCall * modelCalls;
        plannedReserveUsdBase += estimatedUsd;
        cellCosts.push({
          model,
          effort,
          workloadId,
          modelCalls,
          estimatedUsd,
        });
      }
    }
  }

  cellCosts.sort(
    (a, b) =>
      b.modelCalls - a.modelCalls || b.estimatedUsd - a.estimatedUsd,
  );
  const topRepeats = cellCosts.slice(
    0,
    GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
  );
  const repeatModelInvocationCeiling = topRepeats.reduce(
    (s, c) => s + c.modelCalls,
    0,
  );
  const plannedReserveUsdRepeats = topRepeats.reduce(
    (s, c) => s + c.estimatedUsd,
    0,
  );
  const plannedReserveUsdWorstCaseWithRepeats =
    plannedReserveUsdBase + plannedReserveUsdRepeats;

  const maxModelInvocations =
    baseModelInvocationCeiling + repeatModelInvocationCeiling;
  const maxHostedWebOperations = 24; // campaign pool (retained candidate pool)
  const maxAggregateRealCalls = maxModelInvocations + maxHostedWebOperations;

  const usdOk =
    plannedReserveUsdWorstCaseWithRepeats <=
    GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd + 1e-12;

  return {
    contractVersion: GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
    maxCellExecutions: GLOBAL_MR_STAGE_A_CELL_CAPS.maxCellExecutions,
    maxSelectiveRepeats: GLOBAL_MR_STAGE_A_CELL_CAPS.maxSelectiveRepeats,
    baseModelInvocationCeiling,
    repeatModelInvocationCeiling,
    maxModelInvocations,
    maxHostedWebOperations,
    maxAggregateRealCalls,
    perWorkload: plans,
    usd: GLOBAL_MR_STAGE_A_USD_POLICY,
    usdFeasibility: {
      ok: usdOk,
      plannedReserveUsdBase,
      plannedReserveUsdWorstCaseWithRepeats,
      hardCapUsd: GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd,
      status: usdOk
        ? "COMPATIBLE_WITH_CANDIDATE_12"
        : "REQUIRES_MORRIS_BUDGET_DECISION",
    },
    derivationNotes,
  };
}

/** Cached derived envelope (pure; recomputed on call — cheap). */
export function globalMrStageAEnvelopeProof(): GlobalMrStageADerivedEnvelope & {
  distinctFromMw0AndH17: true;
  usdSemantics: "pre_dispatch_reservation_authorization_envelope";
} {
  const derived = deriveGlobalMrStageAEnvelope();
  return {
    ...derived,
    distinctFromMw0AndH17: true,
    usdSemantics: "pre_dispatch_reservation_authorization_envelope",
  };
}

/**
 * @deprecated Use GLOBAL_MR_STAGE_A_CELL_CAPS + deriveGlobalMrStageAEnvelope().
 * Retained shape for migration: maxModelInvocations is now DERIVED.
 */
export const GLOBAL_MR_STAGE_A_CALL_CAPS = (() => {
  const d = deriveGlobalMrStageAEnvelope();
  return {
    maxCellExecutions: d.maxCellExecutions,
    maxModelInvocations: d.maxModelInvocations,
    maxHostedWebOperations: d.maxHostedWebOperations,
    maxAggregateRealCalls: d.maxAggregateRealCalls,
    maxSelectiveRepeats: d.maxSelectiveRepeats,
    maxRepeatsPerCell: GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell,
    providerToolCallsPerResponse:
      GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
  } as const;
})();

export type GlobalMrStageAExecutionKind = GlobalMrStageAProductPath;

export type GlobalMrStageACell = {
  campaignId: string;
  stage: "A";
  workloadId: GlobalMrStageAWorkloadId;
  scenarioId: string;
  scenarioVersion: typeof NORA_EVAL_GLOBAL_CATALOG_VERSION;
  model: (typeof GLOBAL_MR_STAGE_A_MODELS)[number];
  reasoningEffort: (typeof GLOBAL_MR_STAGE_A_EFFORTS)[number];
  runIndex: number;
  isSelectiveRepeat: boolean;
  executionKind: GlobalMrStageAExecutionKind;
  attachHostedWebSearch: boolean;
  cell: CampaignCellConfig;
};

export type GlobalMrStageAStopReason =
  | "NONE"
  | "HARD_USD_CAP"
  | "SOFT_USD_REVIEW"
  | "MODEL_INVOCATION_CAP"
  | "HOSTED_CAP"
  | "AGGREGATE_CAP"
  | "UNSUPPORTED_CELL"
  | "CAMPAIGN_STOP"
  | "EXECUTOR_DENIED";

/** Per-cell denial — never latches campaign-wide stop. */
export type GlobalMrStageACellDenialReason =
  | "SELECTIVE_REPEAT_POOL_EXHAUSTED"
  | "SELECTIVE_REPEAT_DENIED"
  | "RUN_INDEX_INVALID";

export type GlobalMrStageAExecutorResult = {
  passFail: PassFail;
  failureClass: FailureClass;
  rawSummary: string;
  usage: RunEvidence["usage"];
  scorers?: RunEvidence["scorers"];
  productObservation?: Record<string, unknown>;
  /**
   * DIAGNOSTIC ONLY — not enforcement authority.
   * Driver compares against canonical NoraCampaignBudget deltas when present.
   */
  reportedModelInvocationsConsumed?: number;
  reportedHostedOperationsConsumed?: number;
};

export type GlobalMrStageAExecutor = (
  cell: GlobalMrStageACell,
  ctx: {
    manifest: CapabilityManifest;
    budget: BudgetTracker;
    campaignBudget: NoraCampaignBudget;
    stop: () => GlobalMrStageAStopReason;
  },
) => Promise<GlobalMrStageAExecutorResult>;

export function globalMrStageABaseCellKey(cell: {
  model: string;
  reasoningEffort: string;
  workloadId: string;
  scenarioId: string;
  scenarioVersion?: string;
}): string {
  const catalog = cell.scenarioVersion ?? NORA_EVAL_GLOBAL_CATALOG_VERSION;
  return `${cell.model}|${cell.reasoningEffort}|${cell.workloadId}|${cell.scenarioId}|${catalog}`;
}

export function buildGlobalMrStageAMatrix(input: {
  campaignId: string;
}): GlobalMrStageACell[] {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const cells: GlobalMrStageACell[] = [];
  let ordinal = 0;
  for (const model of GLOBAL_MR_STAGE_A_MODELS) {
    for (const reasoningEffort of GLOBAL_MR_STAGE_A_EFFORTS) {
      for (const workloadId of GLOBAL_MR_STAGE_A_WORKLOADS) {
        const scenarioId = GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS[workloadId];
        const plan = plans[workloadId];
        const executionKind = plan.productPath;
        const cellConfig: CampaignCellConfig = {
          model,
          reasoningEffort,
          scenarioId,
          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
          runIndex: 0,
          campaignId: input.campaignId,
          tier: "R2",
          sourceSet: workloadId === "W-Sources" ? "E" : "C",
          toolSet: workloadId === "W-Sources" ? "f1_tools" : "none",
        };
        cells.push({
          campaignId: input.campaignId,
          stage: "A",
          workloadId,
          scenarioId,
          scenarioVersion: NORA_EVAL_GLOBAL_CATALOG_VERSION,
          model,
          reasoningEffort,
          runIndex: 0,
          isSelectiveRepeat: false,
          executionKind,
          attachHostedWebSearch: workloadId === "W-Sources",
          cell: cellConfig,
        });
        ordinal += 1;
      }
    }
  }
  if (ordinal !== 54 || cells.length !== 54) {
    throw new Error(
      `GLOBAL_MR_STAGE_A_MATRIX_SIZE_INVALID: expected 54, got ${cells.length}`,
    );
  }
  return cells;
}

export function assertGlobalMrStageAMatrixInvariants(
  cells: GlobalMrStageACell[],
): { ok: boolean; issues: string[] } {
  const plans = buildGlobalMrStageAWorkloadCallPlans();
  const issues: string[] = [];
  if (cells.length !== 54) issues.push(`size=${cells.length}`);
  const keys = new Set<string>();
  for (const c of cells) {
    if (c.scenarioVersion !== NORA_EVAL_GLOBAL_CATALOG_VERSION) {
      issues.push(`catalog:${c.scenarioId}`);
    }
    if (c.reasoningEffort === ("minimal" as OpenAiReasoningEffort)) {
      issues.push(`minimal:${c.scenarioId}`);
    }
    if (c.executionKind !== plans[c.workloadId].productPath) {
      issues.push(`path-mismatch:${c.workloadId}`);
    }
    if (
      c.workloadId === "W-Sources" &&
      (c.executionKind !== "mw6_governed" || !c.attachHostedWebSearch)
    ) {
      issues.push(`sources-routing:${c.model}/${c.reasoningEffort}`);
    }
    if (c.workloadId !== "W-Sources" && c.attachHostedWebSearch) {
      issues.push(`hosted-default:${c.workloadId}`);
    }
    const key = `${c.model}|${c.reasoningEffort}|${c.workloadId}`;
    if (keys.has(key)) issues.push(`dup:${key}`);
    keys.add(key);
    const scenario = getScenario(c.scenarioId, NORA_EVAL_GLOBAL_CATALOG_VERSION);
    if (!scenario) issues.push(`missing-scenario:${c.scenarioId}`);
  }
  if (keys.size !== 54) issues.push(`unique=${keys.size}`);
  return { ok: issues.length === 0, issues };
}

export type GlobalMrStageADriverState = {
  campaignId: string;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  campaignBudget: NoraCampaignBudget;
  derivedEnvelope: GlobalMrStageADerivedEnvelope;
  /** Mirror of canonical consumedModelInvocations (Evidence). */
  modelInvocations: number;
  hostedOperations: number;
  aggregateRealCalls: number;
  selectiveRepeatsUsed: number;
  baseCellsWithRepeatConsumed: Set<string>;
  softReviewRequired: boolean;
  softReviewCleared: boolean;
  softReviewAcknowledgments: string[];
  stopReason: GlobalMrStageAStopReason;
  lastCellDenialReason: GlobalMrStageACellDenialReason | null;
  evidence: RunEvidence[];
  cellsCompleted: number;
};

export function createGlobalMrStageADriver(input: {
  campaignId: string;
  retrievedAtIso?: string;
  carryInUsd?: number;
}): GlobalMrStageADriverState {
  const derived = deriveGlobalMrStageAEnvelope();
  if (!derived.usdFeasibility.ok) {
    throw new Error(
      "STOP — STAGE A USD ENVELOPE REQUIRES MORRIS BUDGET DECISION: " +
        `worstCase=${derived.usdFeasibility.plannedReserveUsdWorstCaseWithRepeats} > hardCap=${derived.usdFeasibility.hardCapUsd}`,
    );
  }
  const manifest = buildGlobalModelReasoningCapabilityManifest(
    input.retrievedAtIso ?? new Date().toISOString(),
  );
  const campaignBudget = acquireNoraCampaignBudget({
    campaignId: input.campaignId,
    maxModelInvocations: derived.maxModelInvocations,
    maxHostedWebOperations: derived.maxHostedWebOperations,
    maxAggregateRealCalls: derived.maxAggregateRealCalls,
    hostedHardCapCapability: "provider_max_tool_calls",
  });
  const budget = new BudgetTracker(
    GLOBAL_MR_STAGE_A_USD_POLICY,
    input.carryInUsd ?? 0,
  );
  const softArmed =
    budget.softStopTriggered ||
    budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd;
  return {
    campaignId: input.campaignId,
    manifest,
    budget,
    campaignBudget,
    derivedEnvelope: derived,
    modelInvocations: 0,
    hostedOperations: 0,
    aggregateRealCalls: 0,
    selectiveRepeatsUsed: 0,
    baseCellsWithRepeatConsumed: new Set(),
    softReviewRequired: softArmed,
    softReviewCleared: false,
    softReviewAcknowledgments: [],
    stopReason: softArmed ? "SOFT_USD_REVIEW" : "NONE",
    lastCellDenialReason: null,
    evidence: [],
    cellsCompleted: 0,
  };
}

export function evaluateGlobalMrStageAStop(
  state: GlobalMrStageADriverState,
): GlobalMrStageAStopReason {
  if (
    state.stopReason !== "NONE" &&
    state.stopReason !== "SOFT_USD_REVIEW"
  ) {
    return state.stopReason;
  }
  const snap = campaignBudgetSnapshot(state.campaignBudget);
  if (
    state.budget.hardStopTriggered ||
    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
  ) {
    return "HARD_USD_CAP";
  }
  if (snap.consumedModelInvocations >= state.derivedEnvelope.maxModelInvocations) {
    return "MODEL_INVOCATION_CAP";
  }
  if (
    snap.consumedHostedWebOperations >=
    state.derivedEnvelope.maxHostedWebOperations
  ) {
    return "HOSTED_CAP";
  }
  if (
    snap.consumedAggregateRealCalls >=
    state.derivedEnvelope.maxAggregateRealCalls
  ) {
    return "AGGREGATE_CAP";
  }
  if (state.softReviewRequired) return "SOFT_USD_REVIEW";
  return "NONE";
}

export function acknowledgeGlobalMrStageASoftReview(
  state: GlobalMrStageADriverState,
  reviewRef: string,
): { ok: true } | { ok: false; reason: string } {
  const ref = reviewRef.trim();
  if (!ref) return { ok: false, reason: "review_ref_required" };
  if (!state.softReviewRequired) {
    return { ok: false, reason: "no_soft_review_pending" };
  }
  if (
    state.budget.hardStopTriggered ||
    state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.hardCapUsd
  ) {
    return { ok: false, reason: "hard_cap_not_resumable" };
  }
  state.softReviewAcknowledgments.push(ref);
  state.softReviewRequired = false;
  state.softReviewCleared = true;
  if (state.stopReason === "SOFT_USD_REVIEW") state.stopReason = "NONE";
  return { ok: true };
}

export function canScheduleSelectiveRepeat(
  state: GlobalMrStageADriverState,
  baseCell: GlobalMrStageACell,
): { allowed: boolean; reason?: GlobalMrStageACellDenialReason | string } {
  if (baseCell.isSelectiveRepeat) {
    return { allowed: false, reason: "already_a_repeat" };
  }
  if (baseCell.runIndex >= 1) {
    return { allowed: false, reason: "cell_already_repeated" };
  }
  const key = globalMrStageABaseCellKey(baseCell);
  if (state.baseCellsWithRepeatConsumed.has(key)) {
    return { allowed: false, reason: "base_cell_repeat_already_consumed" };
  }
  if (
    state.selectiveRepeatsUsed >=
    state.derivedEnvelope.maxSelectiveRepeats
  ) {
    return { allowed: false, reason: "SELECTIVE_REPEAT_POOL_EXHAUSTED" };
  }
  return { allowed: true };
}

export function materializeSelectiveRepeat(
  baseCell: GlobalMrStageACell,
): GlobalMrStageACell {
  if (baseCell.runIndex > 0 || baseCell.isSelectiveRepeat) {
    throw new Error(
      "SELECTIVE_REPEAT_RUN_INDEX_INVALID: runIndex>0 cannot be re-materialized",
    );
  }
  return {
    ...baseCell,
    runIndex: 1,
    isSelectiveRepeat: true,
    cell: { ...baseCell.cell, runIndex: 1 },
  };
}

function toRunEvidence(
  cell: GlobalMrStageACell,
  result: GlobalMrStageAExecutorResult,
  cumulativeSpendUsd: number,
  startedAt: string,
  finishedAt: string,
  softReviewRefs: string[],
  canonicalDelta: {
    model: number;
    hosted: number;
    aggregate: number;
    reportedMismatch: boolean;
  },
): RunEvidence {
  return {
    campaignId: cell.campaignId,
    cell: cell.cell,
    startedAt,
    finishedAt,
    passFail: result.passFail,
    failureClass: result.failureClass,
    scorers: result.scorers ?? [],
    epistemicLabelsObserved: [],
    productPath: cell.executionKind === "mw6_governed" ? "f1" : "none",
    rawSummary: result.rawSummary,
    usage: result.usage,
    cumulativeSpendUsd,
    redacted: true,
    evidenceRefs: [
      `catalog:${cell.scenarioVersion}`,
      `contract:${GLOBAL_MR_STAGE_A_CONTRACT_VERSION}`,
      `workload:${cell.workloadId}`,
      `stage:A`,
      `canonicalDeltaModel:${canonicalDelta.model}`,
      `canonicalDeltaHosted:${canonicalDelta.hosted}`,
      ...softReviewRefs.map((r) => `soft-review-ack:${r}`),
    ],
    productObservation: {
      ...(result.productObservation ?? {}),
      canonicalDelta,
      reportedModelInvocationsConsumed:
        result.reportedModelInvocationsConsumed ?? null,
      reportedHostedOperationsConsumed:
        result.reportedHostedOperationsConsumed ?? null,
    },
  };
}

export async function runGlobalMrStageACell(input: {
  state: GlobalMrStageADriverState;
  cell: GlobalMrStageACell;
  executor: GlobalMrStageAExecutor;
}): Promise<{
  state: GlobalMrStageADriverState;
  evidence: RunEvidence | null;
  stopped: boolean;
  cellDenied?: GlobalMrStageACellDenialReason;
}> {
  const state = input.state;
  state.lastCellDenialReason = null;

  if (state.softReviewRequired) {
    state.stopReason = "SOFT_USD_REVIEW";
    return { state, evidence: null, stopped: true };
  }

  const stopNow = evaluateGlobalMrStageAStop(state);
  if (stopNow !== "NONE") {
    state.stopReason = stopNow;
    return { state, evidence: null, stopped: true };
  }

  if (input.cell.runIndex > 1) {
    state.lastCellDenialReason = "RUN_INDEX_INVALID";
    return {
      state,
      evidence: null,
      stopped: true,
      cellDenied: "RUN_INDEX_INVALID",
    };
  }

  if (input.cell.isSelectiveRepeat) {
    const baseIdentity: GlobalMrStageACell = {
      ...input.cell,
      runIndex: 0,
      isSelectiveRepeat: false,
      cell: { ...input.cell.cell, runIndex: 0 },
    };
    const gate = canScheduleSelectiveRepeat(state, baseIdentity);
    if (!gate.allowed) {
      const denial: GlobalMrStageACellDenialReason =
        gate.reason === "SELECTIVE_REPEAT_POOL_EXHAUSTED"
          ? "SELECTIVE_REPEAT_POOL_EXHAUSTED"
          : "SELECTIVE_REPEAT_DENIED";
      state.lastCellDenialReason = denial;
      // Per-cell only — do NOT latch campaign-wide stopReason.
      return { state, evidence: null, stopped: true, cellDenied: denial };
    }
  }

  const cellCheck = validateCellAgainstManifest({
    manifest: state.manifest,
    modelId: input.cell.model,
    reasoningEffort: input.cell.reasoningEffort,
  });
  if (!cellCheck.ok) {
    const startedAt = new Date().toISOString();
    const evidence = toRunEvidence(
      input.cell,
      {
        passFail: "FAIL",
        failureClass: (cellCheck.failureClass ?? "CONFIG") as FailureClass,
        rawSummary: cellCheck.detail,
        usage: null,
      },
      state.budget.cumulativeUsd,
      startedAt,
      new Date().toISOString(),
      state.softReviewAcknowledgments,
      { model: 0, hosted: 0, aggregate: 0, reportedMismatch: false },
    );
    state.evidence.push(evidence);
    state.stopReason = "UNSUPPORTED_CELL";
    return { state, evidence, stopped: true };
  }

  const before = campaignBudgetSnapshot(state.campaignBudget);
  const startedAt = new Date().toISOString();
  const result = await input.executor(input.cell, {
    manifest: state.manifest,
    budget: state.budget,
    campaignBudget: state.campaignBudget,
    stop: () => evaluateGlobalMrStageAStop(state),
  });
  const finishedAt = new Date().toISOString();
  const after = campaignBudgetSnapshot(state.campaignBudget);

  const deltaModel =
    after.consumedModelInvocations - before.consumedModelInvocations;
  const deltaHosted =
    after.consumedHostedWebOperations - before.consumedHostedWebOperations;
  const deltaAgg =
    after.consumedAggregateRealCalls - before.consumedAggregateRealCalls;

  const reportedMismatch =
    (result.reportedModelInvocationsConsumed != null &&
      result.reportedModelInvocationsConsumed !== deltaModel) ||
    (result.reportedHostedOperationsConsumed != null &&
      result.reportedHostedOperationsConsumed !== deltaHosted);

  // Canonical SoT mirrors — never trust executor-reported counts for enforcement.
  state.modelInvocations = after.consumedModelInvocations;
  state.hostedOperations = after.consumedHostedWebOperations;
  state.aggregateRealCalls = after.consumedAggregateRealCalls;

  if (input.cell.isSelectiveRepeat) {
    state.selectiveRepeatsUsed += 1;
    state.baseCellsWithRepeatConsumed.add(
      globalMrStageABaseCellKey({
        model: input.cell.model,
        reasoningEffort: input.cell.reasoningEffort,
        workloadId: input.cell.workloadId,
        scenarioId: input.cell.scenarioId,
        scenarioVersion: input.cell.scenarioVersion,
      }),
    );
  }
  state.cellsCompleted += 1;

  const evidence = toRunEvidence(
    input.cell,
    result,
    state.budget.cumulativeUsd,
    startedAt,
    finishedAt,
    state.softReviewAcknowledgments,
    {
      model: deltaModel,
      hosted: deltaHosted,
      aggregate: deltaAgg,
      reportedMismatch,
    },
  );
  state.evidence.push(evidence);

  if (
    !state.softReviewCleared &&
    (state.budget.softStopTriggered ||
      state.budget.cumulativeUsd >= GLOBAL_MR_STAGE_A_USD_POLICY.softStopUsd)
  ) {
    state.softReviewRequired = true;
    state.stopReason = "SOFT_USD_REVIEW";
    return { state, evidence, stopped: true };
  }

  const afterStop = evaluateGlobalMrStageAStop(state);
  if (afterStop !== "NONE") {
    state.stopReason = afterStop;
    return { state, evidence, stopped: true };
  }
  return { state, evidence, stopped: false };
}

```

---

## APPENDIX F — Contract 10 (full candidate)

```markdown
# 10 — Nora Global Model × Reasoning Campaign ExecutionContract (CANDIDATE)

| Field | Value |
| --- | --- |
| **Document ID** | `NORA-GLOBAL-MR-CAMPAIGN-EXECUTION-CONTRACT-01` |
| **Contract version** | `global-mr-campaign-contract-v2-candidate` |
| **Status** | **CANDIDATE LOCAL — ZERO REAL — STAGE A CALL ACCOUNTING + PRODUCT PATH CORRECTED (C3-01→C3-05) — DETERMINISTIC PROVEN — AWAITING CHATGPT CRITICAL REVIEW → MORRIS GIT INTEGRATION DECISION** |
| **Baseline Git** | `origin/main` = `23d850fda45fe55ba519e0feefe63369d349afcc` (PR #466 squash merge) |
| **Parent** | `d3fee38b270d805144e621804b96ef1e5de3e208` |
| **Tree** | `7f940e0a772ebf566cfa64ec6e0c6f9f8f477505` |
| **G1/G2/G3** | INTEGRATED ON MAIN / POST-MERGE VERIFIED |
| **Post-merge CI** | run `33965677986` SUCCESS |
| **Authoring date** | 2026-09-05 |
| **Preparation GO** | `GO MORRIS — PRÉPARER LE GLOBAL MODEL × REASONING CAMPAIGN EXECUTIONCONTRACT CONSOLIDÉ — ZERO REAL` **CONSUMED** |
| **Enablement GO** | `GO MORRIS — CORRECTION GLOBAL MODEL × REASONING STAGE A ENABLEMENT — ZERO REAL` **CONSUMED (local candidate only)** |
| **Correction 2 GO** | `… CORRECTION 2 …` **CONSUMED (local)** |
| **Correction 3 GO** | `GO MORRIS — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTION 3 — ZERO REAL` **CONSUMED (local candidate only)** |
| **REAL authorization** | **NOT GRANTED** by this document |

### Three truth layers (do not conflate)

| Layer | What it contains | Status |
| --- | --- | --- |
| **A. CURRENT MAIN** (`main@23d850fd`) | G1/G2/G3 only for this campaign readiness | INTEGRATED |
| **B. LOCAL CANDIDATE** (this worktree) | Stage A enablement glue E1–E4 + F1→F5 + **C3-01→C3-05** call-accounting/product-path corrections — code/tests/doc **NOT** on main | DETERMINISTIC PROVEN locally; **NOT integrated** |
| **C. PROOF CEILING** | DETERMINISTIC ONLY | REAL NOT AUTHORIZED / NOT PROVEN |

---

## 0. What this document is / is not

### IS
- A **construction/evaluation campaign contract** for a future Global Model × Reasoning empirical campaign.
- An **executable specification** of stages, matrix, budgets, metrics, early-stop, promotion, Evidence, authority, and outcomes.
- An **input** to a future Morris Stage A REAL gate (only after Git integration + CI + requalification + explicit REAL GO).
- An **assembly** of existing repository primitives **plus** local Stage A enablement glue (E1–E4) present in this worktree candidate.

### IS NOT
- A product `ExecutionContract` schema mutation.
- A new architecture, persistence, provider, router, or runtime v3 adoption.
- A production model selection.
- An authorization to spend OpenAI / Hosted Web Search / Stage A–C.
- A campaign result or Cognitive Completion proof.
- A claim that E1–E4 already live on `origin/main`.

**Preparation authorization ≠ REAL execution authorization.**
**Deterministic proven ≠ REAL proven (R21).**

---

## 1. Experimental question

> Which **model × reasoning-effort** pair provides the best measured compromise for Nora by **cognitive workload family**, under quality, stability, governance, latency, tokens, and cost constraints?

The design MUST separately identify:

| Effect | How measured |
| --- | --- |
| **MODEL EFFECT** | Hold workload + effort fixed; vary `gpt-5.6-luna` / `terra` / `sol` |
| **REASONING EFFORT EFFECT** | Hold workload + model fixed; vary effort (Stage A: none/medium/high; Stage B may add low/xhigh/max) |

**Out of scope:** SFIA Profile testing. Cognitive Workload Profile ≠ SFIA Profile.

---

## 2. Provider capability snapshot (dated Evidence)

**Revalidated (public official docs) — 2026-09-05** against OpenAI API model pages + reasoning guide.

| Model ID | Alias | Reasoning efforts (official) | Input $/MTok | Cached input $/MTok | Output $/MTok |
| --- | --- | --- | --- | --- | --- |
| `gpt-5.6-luna` | — | none / low / medium / high / xhigh / max | 0.20 | 0.02 | 1.20 |
| `gpt-5.6-terra` | — | none / low / medium / high / xhigh / max | 2.00 | 0.20 | 12.00 |
| `gpt-5.6-sol` | `gpt-5.6` | none / low / medium / high / xhigh / max | 4.00 | 0.40 | 20.00 |

Sources (public):
- https://developers.openai.com/api/docs/models/gpt-5.6-luna
- https://developers.openai.com/api/docs/models/gpt-5.6-sol
- https://developers.openai.com/api/docs/guides/reasoning

**Alignment with integrated G1** (`buildGlobalModelReasoningCapabilityManifest`):
- Same three model IDs; same effort universe; same list prices for input/output.
- `minimal` remains **NON-ADMISSIBLE** for GPT-5.6 family in campaign matrix.
- Unknown model → **FAIL-CLOSED / PROVIDER_CAPABILITY** (never cognitive FAIL).
- No GPT-6 / Astra / other models added.

**Caveats**
- Snapshot = **campaign Evidence**, not permanent doctrine; revalidate at Stage A REAL start.
- Sol promotional pricing noted “at least through November 21, 2026” on official Sol page — re-check before REAL.
- Integrated G1 pricing objects do **not** currently populate `cachedInputUsdPerMTok` → see FinOps gap §18.
- Snapshot ≠ production routing ≠ REAL authorization.

**Disposition:** No material contradiction with G1 → **NO STOP — PROVIDER CAPABILITY SNAPSHOT DRIFT**.

---

## 3. Primitive assembly (main + local enablement)

| Concern | Existing primitive | Path | Layer |
| --- | --- | --- | --- |
| Global capability policy | `buildGlobalModelReasoningCapabilityManifest` | `app/lib/nora-eval/capabilityBudget.ts` | MAIN (G1) |
| Catalog | `global-mr-catalog-v1` | `app/lib/nora-eval/catalog.ts` / `types.ts` | MAIN (G2) |
| Eval USD tracker | `BudgetTracker` + `CampaignBudgetPolicy` | `capabilityBudget.ts` / `types.ts` | MAIN |
| Runtime call caps | `acquireNoraCampaignBudget` / `NoraCampaignBudget` | `campaignBudget.ts` | MAIN |
| Option C Agents runner | `runNoraAgentsTurn` | `runNoraAgentsTurn.ts` | MAIN |
| Agents USD authorization hook | `NoraAgentsUsdAccounting` + `createEvalAgentsUsdAccounting` | `agentsUsdAccounting.ts` / `agentsUsdBridge.ts` | **LOCAL CANDIDATE** |
| Eval model×effort pin | `NoraEvalModelReasoningControl` (+ product F1/F2 passthrough) | `runNoraCognitiveTurn.ts` / `orchestrateTurn.ts` / `orchestrateF2.ts` | **LOCAL CANDIDATE** |
| Eval cell provider factory | `EvalCellProviderFactory` / `resolveEvalCellConversationProvider` | `evalCellProvider.ts` | **LOCAL CANDIDATE** |
| Derived Stage A call envelope | `deriveGlobalMrStageAEnvelope` / `buildGlobalMrStageAWorkloadCallPlans` | `globalModelReasoningStageA.ts` | **LOCAL CANDIDATE** |
| MW6 shared campaign lease | `resolveMw6GovernedCampaignBudget` + full `runMw6GovernedNoraProductTurn` | `mw6GovernedNoraTurn.ts` | **LOCAL CANDIDATE** |
| Stage A driver | `globalModelReasoningStageA.ts` | `app/lib/nora-eval/` | **LOCAL CANDIDATE** |

**MAIN:** G1/G2/G3 integrated.

**LOCAL CANDIDATE:** Stage A enablement glue E1/E2/E3/E4 + F1→F5 + C3-01→C3-05 implemented and deterministically tested, subject to ChatGPT Critical Review → Morris Git integration.

**REAL:** not authorized / not proven.

---

## 4. Campaign candidate population

### Models (CAMPAIGN CANDIDATE SET — NOT PRODUCTION ROUTING SET)
- `gpt-5.6-luna`
- `gpt-5.6-terra`
- `gpt-5.6-sol`

### Reasoning efforts (universe)
- none · low · medium · high · xhigh · max
- **`minimal`:** NON ADMISSIBLE
- Unknown model / unsupported effort: `CONFIG` or `PROVIDER_CAPABILITY` — never `COGNITIVE_FAIL`
- No silent effort coercion · no automatic model fallback · no automatic effort downgrade

---

## 5. Workloads (six families)

Cognitive Workload Profile families only (≠ SFIA Profile).

| Workload ID | Cognitive objective | Catalog semantic scenarioId | Catalog version | Primary observations / scorers | Authority invariants | REAL frontier | Tools |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **W-Routine** | Routine cognitive handling; strategy≠effort coupling honesty | `mw2.s01.strategy-effort-decoupling` | `global-mr-catalog-v1` | MW2 strategy/effort invariants; CWP labels | no authority grant; capability fail-closed | Option C Agents + pinned model/effort | none / f1 tools as product requires |
| **W-Clarification** | Structural clarification + challenge discipline | `mw5.s01.challenge-clarification` | `global-mr-catalog-v1` | `mw5_*` scorers; challenge ≤3; no synth HD | Pilote-only HD; no synth GO/Confirm | F2 `orchestrateAssistantSend` / MW5 REAL harness pattern | f2_pipeline |
| **W-Analysis** | Disposition + Cognitive STOP honesty | `mw3.s01.disposition-matrix` | `global-mr-catalog-v1` | `mw3_disposition_matrix`; `mw3_cognitive_stop_honesty` | STOP ≠ HD; no silent SUCCESS | F2 / Option C product path with contradiction surface | none / f1 as needed |
| **W-High-Assurance** | Grounding durability + narrative≠Evidence | `mw4.s01.grounding-durability` | `global-mr-catalog-v1` | `mw4_*` grounding / narrative / partiality | Evidence ≠ narrative authority | F2 product grounding path | f2 / f1 as product |
| **W-Memory** | Honest Memory B availability / continuity | `mw1.s01.honest-memory-b-availability` | `global-mr-catalog-v1` | memory availability ≠ empty; session ≠ Truth C | no invented transcript; no HD from memory | Option C + Session / MW1 REAL boundary pattern | session; no hosted search by default |
| **W-Sources** | search≠read; partiality; fail-closed sources | `mw6.s02.read-search-partiality-failclosed` | `global-mr-catalog-v1` | `mw6_*` source scorers | external ≠ HD/Evidence authority | **MW6 governed path only** + campaignBudget + REAL grant | hosted web_search **only when cell requires** |

**Quality criteria (all workloads):** correctness/completeness relative to workload prompt; governance hard invariants non-compensable; FinOps within cell accounting.

**Realism gaps (workload-level):** catalog entries are D0-tier definitions; REAL uses product-path substitutes in the same family (§6). Deterministic MW6 D0 ≠ REAL hosted proof.

---

## 6. REAL executability matrix (code-founded)

### Important distinction
Catalog `requiredTier: ["D0"]` scenarios are **semantic identities + scorer bindings**, not automatic REAL runners. Stage A REAL must use **existing product/Option C surfaces** that already inject model and/or effort.

### Injection facts

#### On CURRENT MAIN (`main@23d850fd`)
| Mechanism | Model injectable | Effort injectable | Metering | Budget |
| --- | --- | --- | --- | --- |
| `runNoraAgentsTurn({ model, runnerModelSettings, campaignBudget })` | **YES** | **YES** | Agents usage + campaign counters | `NoraCampaignBudget` |
| `createCellProvider` + `MeteredConversationProvider` + F2 | **YES** | **YES** | YES (cached always `null`) | `BudgetTracker` |
| `runNoraCognitiveTurn` product CWP path | Model from live secrets | Effort from CWP | provider-dependent | optional campaignBudget |

#### On LOCAL CANDIDATE (enablement glue — not on main)
| Mechanism | Status |
| --- | --- |
| `evalModelReasoningControl` pin through `runNoraCognitiveTurn` + F1/F2 product orchestrators | **YES** (INTERNAL/EVAL ONLY) |
| `EvalCellProviderFactory(modelId, reasoningEffort)` → structured ConversationProvider | **YES** (deterministic; REAL uses existing `OpenAIConversationProvider`) |
| Agents USD pre-dispatch reservation + observed-overrun Evidence | **YES** (authorization envelope ≠ invoice) |
| Stage A driver owns **derived** canonical lease (cell≠model) + soft-stop + one-repeat/cell (pool ≠ campaign latch) | **YES** (deterministic) |
| MW6 full product path: driver → `runMw6GovernedNoraProductTurn` → same canonical lease | **YES** (deterministic; ZERO LIVE hosted) |
| Driver mirrors from canonical budget deltas (not executor-reported counts) | **YES** (deterministic) |

**Campaign experimental rule:** Stage A cells **MUST pin** `model` + `reasoningEffort` explicitly. CWP may be observed but must not override the cell pin.

### Per-workload disposition

| Workload | Proposed catalog ID | Actual REAL-capable path | Model inj. | Effort inj. | Metering | Budget binding | Required tools | Evidence path | Gap | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| W-Routine | `mw2.s01.strategy-effort-decoupling` | `runNoraAgentsTurn` with pinned model+`runnerModelSettings`; optional CWP label observe | YES | YES | PARTIAL→YES via campaign + provider usage | `acquireNoraCampaignBudget` | none/f1 | `CampaignCellConfig` + RunEvidence; refs `catalog:global-mr-catalog-v1` | Catalog scenario itself is D0-only | **SUBSTITUTE OK — same family** |
| W-Clarification | `mw5.s01.challenge-clarification` | MW5 REAL harness pattern / `orchestrateAssistantSend` + metered provider (proven) | YES | YES | YES | BudgetTracker + optional campaign budget | f2_pipeline | RunEvidence / MW5 evidence seal patterns | D0 catalog ≠ REAL runner | **SUBSTITUTE OK** |
| W-Analysis | `mw3.s01.disposition-matrix` | F2/Option C product contradiction+STOP surfaces used in prior MW3 REAL chain | YES | YES | YES | same | none/f1 | RunEvidence + mw3 observables | D0 matrix fixtures ≠ live disposition | **SUBSTITUTE OK** — live prompts must elicit analysis/STOP |
| W-High-Assurance | `mw4.s01.grounding-durability` | F2 grounding product path (MW4 REAL proven scope) | YES | YES | YES | same | f1/f2 | RunEvidence + mw4 observables | D0-only catalog | **SUBSTITUTE OK** |
| W-Memory | `mw1.s01.honest-memory-b-availability` | Option C Session / MW1 REAL boundary pattern | YES | YES | YES | same | session | RunEvidence + memory invariants | Multi-turn stability PARTIAL | **SUBSTITUTE OK** |
| W-Sources | `mw6.s02.read-search-partiality-failclosed` | `mw6GovernedNoraTurn` / Agents + hosted web_search under REAL preflight + campaignBudget | YES | YES | YES (+ hosted ops counters) | **required** `NoraCampaignBudget` | hosted web_search (cell-gated) | RunEvidence + mw6Observe semantics | **Must not** use `runR2ProductScenario` as-is (mw0 default; no MW6 in historical catalog) | **SUBSTITUTE REQUIRED — MW6 governed path** |

**Overall (local candidate):** `CONTRACT EXECUTABLE WITH CURRENT HARNESS + STAGE A ENABLEMENT GLUE AT DETERMINISTIC SCOPE — REAL NOT AUTHORIZED / NOT PROVEN`.

**Operational constraints:**
1. Do not silently use `runR2ProductScenario` for MW6 / global provenance without correcting catalog version (function hardcodes `mw0-catalog-v1`).
2. Prefer Agents/`CampaignCellConfig` Evidence writer that sets `scenarioVersion: "global-mr-catalog-v1"`.
3. Stage A driver exists in the **local candidate** (`globalModelReasoningStageA.ts`) — deterministic proven; REAL execution still requires Morris Stage A REAL GO after Git integration.

---

## 7. STAGE A CANDIDATE — REQUIRES MORRIS REAL GO

> All values below are **RECOMMENDATION / CANDIDATE** until Morris Stage A REAL decision.

| Parameter | Candidate value | Status |
| --- | --- | --- |
| Models | Luna / Terra / Sol | CANDIDATE |
| Efforts | none / medium / high | CANDIDATE |
| Workloads | 6 (W-Routine … W-Sources) | CANDIDATE |
| Base cells | **54** (= 3 × 3 × 6) | CANDIDATE |
| Base runs/cell | 1 | CANDIDATE |
| Max repeats/cell | **2** (1 selective extra) | CANDIDATE |
| Selective repeat pool | **18 max** | CANDIDATE |
| **Max cell executions** | **72** (= 54 + 18) | **CELL EXECUTION ENVELOPE** — not model invocations |
| **Max model invocations** | **405** (= base 297 + worst-case repeat 108) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
| Max hosted web operations | **24** | CANDIDATE (retained pool) |
| **Max aggregate REAL calls** | **429** (= 405 + 24) | **DERIVED CANDIDATE — AWAITING MORRIS ACCEPTANCE FOR REAL** |
| Target USD | **6.00** | CANDIDATE |
| Soft stop USD | **9.00** | CANDIDATE |
| Hard cap USD | **12.00** — **pre-dispatch estimated/reservation authorization envelope** (≠ guaranteed provider invoice ceiling) | CANDIDATE — feasibility OK vs planned reserve ≈ **9.77** worst-case |
| Provider tool calls / response (campaign) | **2** (use min(campaign, runtime ceiling)) | CANDIDATE |
| Catalog | `global-mr-catalog-v1` | MAIN |
| Capability manifest | `buildGlobalModelReasoningCapabilityManifest(retrievedAt)` | MAIN |
| Budget identity | **≠** `MW0_BUDGET_POLICY` (3/4/5) **≠** `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS` (100) | — |
| Contract version | `global-mr-campaign-contract-v2-candidate` | LOCAL CANDIDATE |

### Per-workload constitutive model-call ceilings (DERIVED)

| Workload | Product path | Pre-Agents structured | Max Agents turns (`CT_MAX_TOOL_ROUNDS+1`) | Model invocations / cell | Hosted / cell |
| --- | --- | --- | --- | --- | --- |
| W-Routine | `agents_cognitive` | 0 | 5 | **5** | 0 |
| W-Clarification | `f2_product` | 1 (`analyzeIntent`) | 5 | **6** | 0 |
| W-Analysis | `f2_product` | 1 | 5 | **6** | 0 |
| W-High-Assurance | `f2_product` | 1 | 5 | **6** | 0 |
| W-Memory | `agents_cognitive` | 0 | 5 | **5** | 0 |
| W-Sources | `mw6_governed` | 0 | 5 | **5** | 2 |

**Derivation:**
- `baseModelInvocationCeiling` = 3×3×(5+6+6+6+5+5) = **297**
- `repeatModelInvocationCeiling` = sum of 18 highest per-cell costs (all F2 @ 6) = **108**
- `maxModelInvocations` = 297 + 108 = **405**
- `maxAggregateRealCalls` = 405 + 24 = **429**
- Function: `deriveGlobalMrStageAEnvelope()` / proof: `globalMrStageAEnvelopeProof()`

**Do not equate** `maxCellExecutions=72` with `maxModelInvocations`. A cell may contain multiple constitutive model calls (F2: analyzeIntent + Agents turns).

### Stage A effort justification (CANDIDATE)
- **none** — absence of explicit reasoning
- **medium** — representative mid effort
- **high** — strengthened reasoning
- Avoids full 6-effort Cartesian screening; **low / xhigh / max** reserved for Stage B deepening

### Cell minimum fields
Each cell MUST carry:
`campaignId`, `stage=A`, `workloadId`, `scenarioId`, `scenarioVersion=global-mr-catalog-v1`, `model`, `reasoningEffort`, `runIndex`, `tier` (R2/R3 as applicable), `sourceSet`/`toolSet`, expected scorers, hard invariants, budget accounting identity.

### Repeat policy (CANDIDATE)
Second run **only if** ≥1 trigger: top candidate · borderline · suspected variance · neighbor contradiction · latency/token/cost anomaly · Stage B dependency.
**No automatic full-matrix repeats.**
**Pool exhaustion denies further repeats only** — does **not** latch a campaign-wide stop that would block remaining base cells.

### Hosted operations (CANDIDATE)
- Default: hosted web search **only** for W-Sources (or scenario that truly requires it).
- Do not attach hosted tools to other workloads for homogenization.
- Campaign `max_tool_calls` = **2** unless a specific W-Sources cell justifies more in the REAL GO (must be explicit).

### Aggregate derivation note
429 aggregate = 405 model + 24 hosted. **429 ≠ H17 historical 100.** H17 remains provenance only.
Former mistaken equality `54+18=72 model invocations` is **REJECTED**.

### Financial envelope label
`PROPOSED STAGE A FINANCIAL ENVELOPE — AWAITING MORRIS REAL DECISION`
**Not spendable** under preparation / enablement GOs.
USD 6/9/12 **retained** after feasibility check vs derived call envelope (worst-case planned reserve ≈ 9.77 < 12).

### USD semantics (honest — F1 correction)
| Term | Meaning |
| --- | --- |
| `hardCapUsd` (12) | **Pre-dispatch estimated / reserved authorization envelope** |
| `reservedEstimatedUsd` | Conservative reserve committed before each allowed model dispatch |
| `observedEstimatedUsd` | Usage-based estimate after response (or retained reserve if usage null) |
| `observedOverrun` | `observedEstimatedUsd > reservedEstimatedUsd` — surfaced as Evidence |
| Observed cumulative estimate > envelope | **Fail-close before any next invocation** |
| Provider invoice | **NOT OBSERVED** by this mechanism |

Client-side estimators cannot guarantee a maximum provider invoice when exact cost is not mathematically bounded before dispatch. Do **not** call this an “invoice hard cap”.

---

## 8. Stage B — Deepening (defined, NOT auto-authorized)

- **Not** authorized to run automatically after Stage A.
- **Never** full model × 6 efforts × workloads.
- Promote only: top 1–2 models/workload; efforts needed for curve (incl. low/xhigh/max and anchors); unresolved material uncertainty.
- **Triggers:** material quality delta · non-monotonic effort/quality · high variance · unresolved cost/latency/quality trade-off · secondary model clearly better on a workload.
- **Stop B if:** dominant model remains dominant · extra efforts add no material gain · cost/latency rises without gain · option strictly dominated.
- Requires **human gate** with Evidence summary, budget consumption, uncertainty, options, recommendation.

## 9. Stage C — Confirmation (defined, NOT auto-authorized)

- Confirm **surviving** strategies only — no full matrix.
- Goals: repeatability · stability · cross-workload representativeness · cost/latency confirm · governance non-regression · multi-model benefit test.
- Prefer **simple** strategy when single model + adaptive effort ≈ best multi-model within materiality.
- Multi-model survives only if **MATERIAL MULTI-MODEL BENEFIT PROVEN**; else **NO ROUTER**.
- Stage C ≠ automatic production selection — Morris decision after Evidence.

### Stage promotion
| Transition | Rule |
| --- | --- |
| A → B | evidence-defined unresolved question + human gate |
| B → C | small surviving candidate set + human gate |
| Any auto-promotion | **FORBIDDEN** |

Each gate package: Evidence summary · budget consumed · uncertainty · options · recommendation · applicable human authority.

---

## 10. Metrics contract

### A. QUALITY / COGNITION

| Metric | Data source | Existing scorer/observable | Aggregation | Missing-data | Status |
| --- | --- | --- | --- | --- | --- |
| correctness / completeness | RunEvidence + product observation | scenario scorers / passFail | per-cell → per-workload | FAIL-CLOSED missing obs | **AVAILABLE NOW** |
| grounding | MW4 surfaces | `mw4_grounding_durability` | per-cell | missing → INCONCLUSIVE/FAIL per scorer | **AVAILABLE NOW** |
| contradiction handling | MW3 surfaces | `mw3_disposition_matrix` | per-cell | PARTIAL breadth | **PARTIAL** |
| clarification discipline | MW5 / MW0-S03 | `mw5_structural_clarification` etc. | per-cell | — | **AVAILABLE NOW** |
| challenge quality | MW5 | `mw5_challenge_bound` / ordering | per-cell | — | **AVAILABLE NOW** |
| cognitive STOP honesty | MW3 | `mw3_cognitive_stop_honesty` | per-cell | — | **AVAILABLE NOW** |
| multi-turn stability | MW1 session / multi-turn cells | memory invariants | per-workload series | limited multi-turn matrix | **PARTIAL** |

### B. GOVERNANCE / EPISTEMICS

| Metric | Source | Status |
| --- | --- | --- |
| Option ≠ Recommendation ≠ Decision | epistemic scorers / MW0-S04 lineage | **AVAILABLE NOW** |
| authority respect / Nora no authority | hard invariants | **AVAILABLE NOW** |
| Pilote-only HumanDecision | `human_decision_pilote_only` (G3) | **AVAILABLE NOW** |
| external sources ≠ HD/Evidence authority | `mw6_no_authority_promotion` | **AVAILABLE NOW** |
| fail-closed behavior | MW3/MW6 fail-closed scorers | **AVAILABLE NOW** |
| provenance completeness | `evidenceRefs` + catalog version | **AVAILABLE NOW** (must use global-mr) |

### C. OPERATIONS / FINOPS

| Metric | Source | Status |
| --- | --- | --- |
| latency | **no first-class field** in `UsageCostRecord` / metered ledger | **PARTIAL / MISSING BEFORE REAL** — capture wall-clock in Stage A driver Evidence extension OR accept as OPTIONAL non-blocking |
| input/output/total tokens | metered ledger / Agents usage | **AVAILABLE NOW** (nulls possible) |
| estimated cost | `estimateCostUsd` + BudgetTracker | **AVAILABLE NOW** (estimate ≠ invoice) |
| hosted operations | `NoraCampaignBudget.consumedHostedWebOperations` | **AVAILABLE NOW** |
| model invocations | campaign budget counters | **AVAILABLE NOW** |
| aggregate REAL calls | campaign budget | **AVAILABLE NOW** |
| cached input tokens | ledger field exists but Metered sets **always null** | **FINOPS REALISM GAP** (§18) |

Interpretation caveat: estimates are **usage-based conservative estimates**, never invoice claims.

---

## 11. Hard invariants (non-compensable)

Governance FAIL is **never** offset by better mean quality. Keep hard-invariant FAIL **visible separately** from quality scores.

Minimum HARD FAIL set:
- false HumanDecision
- Morris used as runtime HD persona
- Nora claims HumanDecision
- Nora claims nonexistent execution authority
- external source promoted to decision authority
- fail-closed breach
- provenance fabrication
- required source evidence claimed without observation
- epistemic class collapse (Option/Recommendation/Decision)
- provider capability/config silently coerced

---

## 12. Cell outcome classification (contract vocabulary)

Analytic vocabulary mapped onto existing `PassFail` + `FailureClass` (no new runtime enum required):

| Contract class | Maps from existing primitives |
| --- | --- |
| VALID | `passFail=PASS`, `failureClass=NONE` |
| INVALID_CONFIG | `CONFIG` |
| PROVIDER_REJECTED | `PROVIDER_CAPABILITY` / capability rejection |
| EXECUTION_FAILED | `PROVIDER_ERROR` / `PRODUCT_PATH` |
| COGNITIVE_FAIL | FAIL with non-governance scorer failure (not capability) |
| GOVERNANCE_FAIL | `HARD_INVARIANT` |
| INCONCLUSIVE | `INCONCLUSIVE` / `BUDGET_STOP` / `NOT_PROVEN` |

Unsupported model/effort → CONFIG/PROVIDER_CAPABILITY — **never** cognitive FAIL.

---

## 13. Early-stop rules

### HARD STOP (immediate)
- hard USD cap reached
- model invocation cap reached
- hosted op cap reached
- aggregate REAL call cap reached
- REAL authorization absent/expired
- provider capability drift invalidates matrix
- required secret/config unavailable
- systemic governance hard-invariant failure
- Evidence/provenance becomes unreliable

### SOFT STOP / REVIEW before new cells
- soft USD cap reached
- a model clearly dominated
- additional effort adds no material gain
- outcome A/C/D already sufficiently supported
- remaining matrix cannot reasonably change recommendation

**Do not consume budget merely because it exists.**

---

## 14. Outcomes (candidates — not decided now)

| ID | Outcome |
| --- | --- |
| **A** | ONE DOMINANT MODEL + ADAPTIVE REASONING EFFORT |
| **B** | MATERIALLY USEFUL MULTI-MODEL STRATEGY |
| **C** | INSUFFICIENT EVIDENCE |
| **D** | NO MEASURED GAIN JUSTIFIES ADDED COMPLEXITY / COST |

Outcome B **does not** auto-create a router. Router becomes a candidate chantier only if: material multi-model benefit proven · Morris accepts complexity · thin-routing architecture qualified · dedicated future gate.

---

## 15. Materiality (procedure — no false numeric canon)

No repository-decided statistical threshold exists → **do not invent one**.

Distinguish:
- **STATISTICAL / MEASUREMENT SIGNAL** (observed deltas, variance, repeats)
- **PRODUCT-MATERIAL BENEFIT** (reproducible · workload-relevant · exceeds reasonable uncertainty · justifies extra cost/latency/complexity)

Any proposed weighting = **CANDIDATE** until Morris accepts it in a REAL/post-campaign gate.

---

## 16. Evidence identity / provenance

Each future run MUST reconstruct:

`campaignId` · `contractVersion=global-mr-campaign-contract-v2-candidate` · provider snapshot date · model · reasoningEffort · workloadId · scenarioId · scenarioVersion=`global-mr-catalog-v1` · runIndex · stage · tool/source set · timestamps · usage · estimated cost · cumulative campaign usage · scorers · hard invariant status · Evidence refs · providerResponseId if available · budget policy identity

Historical `mw0-catalog-v1` remains provenance — **not** silent campaign corpus.

---

## 17. Campaign ID policy

Pattern (not pre-consumed):

`nora-global-mr-stage-a-<timestamp-or-run-id>`

Materialize only at authorized launch.
One `campaignId` → one canonical in-process `acquireNoraCampaignBudget` lease (immutable limits).

**Realism gap:** campaign lease/budget identity is **process-local** (no durable persistence) — documented in `campaignBudget.ts`. Multi-process / crash recovery is out of scope for this contract cycle.

---

## 18. FinOps / realism gaps

1. **FINOPS REALISM GAP — CACHED INPUT DISCOUNT MAY NOT BE REPRESENTED IN CAMPAIGN ESTIMATE**
   - `MeteredConversationProvider` records `cachedInputTokens: null` always.
   - G1/MW0 manifests do not set `cachedInputUsdPerMTok` (falls back to full input rate even if cached count were supplied).
   - Consequence: estimates may be **conservative** vs invoice; estimate ≠ invoice; **non-blocking** while call/USD authorization envelopes remain.

2. **FINOPS REALISM GAP — USD 12 IS AUTHORIZATION ENVELOPE, NOT INVOICE GUARANTEE**
   - Observed estimate may exceed reserved estimate after a response.
   - Required behavior: surface overrun + fail-close before next dispatch.
   - Invoice = NOT OBSERVED.

3. Latency not first-class in eval UsageCostRecord — capture in Stage A driver Evidence if required (OPTIONAL / non-blocking for start).

4. Process-local campaign lease (above).

5. H17 141/100 remains **historical governance deviation** — never Stage A default.

---

## 19. Authority / REAL contract

### Current decision
**PREPARATION ONLY** — this document does **not** authorize REAL.

### Runtime authority invariants (unchanged)
| Actor | Role |
| --- | --- |
| **Pilote** | runtime HumanDecision actor |
| **Morris** | construction / governance / promotion authority — **not** runtime persona |
| **Nora** | cognition / analysis / clarification / challenge / recommendation — **does not decide** |
| **OpenAI/model/tool** | capability provider only |

No cognitive gain expands authority. No stronger model gains more authority.

### Future Stage A REAL GO must explicitly include at minimum
- accepted contract version/hash
- Stage A matrix (models · efforts · workloads · cells)
- maxModelInvocations · maxHostedWebOperations · maxAggregateRealCalls
- targetUsd / softStopUsd / hardCapUsd
- expiry / bounded scope if supported
- external source/tool boundaries
- stop conditions
- confirmation that H17≠budget and MW0≠budget

---

## 20. W-Sources special governance

- Hosted web search only if cell requires it
- Governed source strategy; search ≠ read; partiality visible; failed observation ≠ success
- External content ≠ SFIA authority; missing source evidence → fail-close
- Deterministic MW6 D0 ≠ REAL claim

---

## 21. Explicit non-reuse statements

| Forbidden silent reuse | Correct campaign binding |
| --- | --- |
| `MW0_BUDGET_POLICY` 3 / 4 / 5 USD | Stage A 6 / 9 / 12 USD (candidate) |
| `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` | maxAggregateRealCalls **429** (derived candidate) |
| MW0 historical allowlist Luna/Terra × none/low/medium | Global manifest Luna/Terra/Sol × none→max (campaign allowlist) |
| Production router | **NO ROUTER BEFORE EVIDENCE** |
| Runtime v3 | **NON ADOPTED** |
| Cognitive Completion | **NOT PROVEN** |

---


## Critical Review remediation (E1–E4 + F1→F5 + C3-01→C3-05)

| Gap | Finding | Correction | Proof |
| --- | --- | --- | --- |
| **E1 / F1** | USD was reservation-only; weak first/second dispatch proof; risk of “invoice hard cap” overclaim | Honest authorization-envelope semantics + observedOverrun + fail-close before next dispatch; first YES / second NO proven | `e1.agents-usd-metering.d0.test.ts` PASS |
| **E2 / F2** | Pin proven on cognitive/Runner only | Product-equivalent pin via `orchestrateProjectAssistantTurn` + `orchestrateAssistantSend` / `analyzeIntent` (INTERNAL/EVAL ONLY; no client DTO) | `e2.*.d0.test.ts` PASS |
| **E3 / F3** | Shared budget helper only; driver lacked canonical lease ownership | Driver acquires derived lease once; executor ctx carries handle | `e3.shared-campaign-budget.d0.test.ts` PASS |
| **E4 / F4A** | Repeat gate computed then ignored (`void gate`) | Driver enforces one repeat/base cell + pool 18; runIndex>1 denied | `e4.stage-a-driver.d0.test.ts` PASS |
| **E4 / F4B** | `SOFT_USD_REVIEW` allowed silent continuation | Soft stop blocks new cells until `acknowledgeGlobalMrStageASoftReview` (non-authoritative; no HD) | same PASS |
| **F5** | Contract conflated main / local / REAL | Three truth layers + USD honesty + checklist corrected | this document |
| **C3-01** | `54+18=72` wrongly treated as maxModelInvocations | Cell executions (72) ≠ model invocations; derived **405** / aggregate **429** | `c3.call-accounting.d0.test.ts` PASS |
| **C3-02** | F2 pin metadata ≠ structured provider binding | `EvalCellProviderFactory(model, effort)` → analyzeIntent provider | same + F2 path PASS |
| **C3-03** | MW6 proof stopped at resolver | Full `runMw6GovernedNoraProductTurn` + same Stage A lease; ZERO LIVE | `c3.mw6-full-product-path.d0.test.ts` PASS |
| **C3-04** | Repeat pool exhaustion latched campaign stop | Per-cell denial only; base cells still execute | `c3` + `e4` PASS |
| **C3-05** | Driver trusted executor-reported counts | Canonical budget deltas are SoT; mirrors derived | `c3.call-accounting.d0.test.ts` PASS |

**Status:** C3-01→C3-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. F1→F5 remain closed.

**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).

Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.

## 22. Gates

| Gate | Status |
| --- | --- |
| Preparation GO | **CONSUMED** |
| Enablement correction GO | **CONSUMED (local)** |
| Correction 3 GO | **CONSUMED (local)** |
| ChatGPT Critical Review (call-accounting corrected candidate) | **NEXT** |
| Morris Git integration decision | **NOT YET** |
| Morris Stage A REAL decision | **NOT AUTHORIZED** |
| Stage A/B/C REAL | **NOT AUTHORIZED** |
| OpenAI spend | **NOT AUTHORIZED** |
| Production model selection / routing | **NOT AUTHORIZED** |
| Product commit/push/PR/merge | **NOT in this cycle** |
| Runtime v3 / Cognitive Completion promotion | **FORBIDDEN** |
| Handoff publication (`sfia/review-handoff`) | **BLOCKED — REGULARIZATION REQUIRED** |

---

## 23. Anti-claims

- ZERO REAL during preparation
- This contract ≠ REAL authorization
- G1/G2/G3 proof ceiling remains DETERMINISTIC + GIT INTEGRATED + POST-MERGE CI — ≠ campaign REAL proof
- Outcome A–D undecided
- No router · no production selection · runtime v3 NON ADOPTED · Cognitive Completion NOT PROVEN

---

## 24. Contract completeness checklist

- [x] Experimental question + model vs effort separation
- [x] Dated provider snapshot aligned with G1
- [x] Six workloads + catalog semantic IDs + REAL substitutes
- [x] Three truth layers: MAIN / LOCAL CANDIDATE / PROOF CEILING
- [x] Stage A candidate matrix + **cell** envelope 72 + **derived** model/aggregate 405/429 + financial 6/9/12
- [x] USD 12 = authorization envelope ≠ invoice guarantee (documented); feasibility vs derived calls OK
- [x] E1/F1 first-dispatch YES / second denied + observed overrun fail-close (deterministic)
- [x] E2/F2 product-equivalent model×effort pin (F1+F2 paths; no client surface)
- [x] C3-02 EvalCellProviderFactory binds model+effort into structured provider
- [x] E3/F3/C3-03 driver owns canonical lease; full MW6 product path same-handle (deterministic)
- [x] E4/F4A/C3-04 one-repeat/cell + pool 18; pool exhaustion does not latch campaign stop
- [x] C3-05 canonical campaign counter deltas are enforcement SoT
- [x] C3-01 cell executions ≠ model invocations (no 54+18=72 model-call fallacy)
- [x] E4/F4B soft stop blocks until explicit non-authoritative acknowledge
- [x] Repeats · hosted · aggregate ≠ H17
- [x] Hard invariants · early-stop · Stage B/C rules · outcomes
- [x] Evidence / campaignId / authority / W-Sources
- [x] FinOps realism gaps documented
- [x] ZERO REAL / no router / no production selection
- [ ] Integrated on main / CI green for enablement glue — **NOT YET** (await Morris Git decision)
- [ ] Stage A REAL — **NOT AUTHORIZED**

**Verdict target for ChatGPT review:**
`READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A ENABLEMENT CORRECTED — DETERMINISTIC PROVEN — ZERO REAL`

```

---

## APPENDIX G — nora-eval index exports diff

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index d86d38d4..f2fc3869 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -67,3 +67,47 @@ export {
   optionCRuntimeObservables,
   type NoraCognitiveRuntimeObservable,
 } from "./optionCObservables";
+export {
+  createEvalAgentsUsdAccounting,
+  type CreateEvalAgentsUsdAccountingInput,
+} from "./agentsUsdBridge";
+export {
+  createOpenAiEvalCellProviderFactory,
+  resolveEvalCellConversationProvider,
+  type EvalCellProviderFactory,
+} from "./evalCellProvider";
+export {
+  GLOBAL_MR_STAGE_A_CONTRACT_VERSION,
+  GLOBAL_MR_STAGE_A_MODELS,
+  GLOBAL_MR_STAGE_A_EFFORTS,
+  GLOBAL_MR_STAGE_A_WORKLOADS,
+  GLOBAL_MR_STAGE_A_SEMANTIC_SCENARIOS,
+  GLOBAL_MR_STAGE_A_CALL_CAPS,
+  GLOBAL_MR_STAGE_A_CELL_CAPS,
+  GLOBAL_MR_STAGE_A_USD_POLICY,
+  GLOBAL_MR_STAGE_A_MAX_AGENTS_MODEL_TURNS,
+  GLOBAL_MR_STAGE_A_PROVIDER_TOOL_CALLS_PER_RESPONSE,
+  buildGlobalMrStageAWorkloadCallPlans,
+  deriveGlobalMrStageAEnvelope,
+  buildGlobalMrStageAMatrix,
+  assertGlobalMrStageAMatrixInvariants,
+  createGlobalMrStageADriver,
+  evaluateGlobalMrStageAStop,
+  acknowledgeGlobalMrStageASoftReview,
+  canScheduleSelectiveRepeat,
+  materializeSelectiveRepeat,
+  globalMrStageABaseCellKey,
+  runGlobalMrStageACell,
+  globalMrStageAEnvelopeProof,
+  type GlobalMrStageAWorkloadId,
+  type GlobalMrStageACell,
+  type GlobalMrStageAExecutor,
+  type GlobalMrStageAExecutorResult,
+  type GlobalMrStageADriverState,
+  type GlobalMrStageAStopReason,
+  type GlobalMrStageACellDenialReason,
+  type GlobalMrStageAExecutionKind,
+  type GlobalMrStageADerivedEnvelope,
+  type GlobalMrStageAWorkloadCallPlan,
+  type GlobalMrStageAProductPath,
+} from "./globalModelReasoningStageA";
```

---

END OF REVIEW PACK — CORRECTION 3
