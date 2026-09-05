# ChatGPT Critical Review Pack — Correction 4

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | `2026-09-05T16:50:09Z` |
| **Cycle** | SFIA v2.6 — CYCLE 8 — DELIVERY / EVOL — CONTINUATION |
| **Classification** | CRITICAL |
| **Subject** | GLOBAL MODEL × REASONING STAGE A FINAL DETERMINISTIC SAFETY CORRECTION (C4-01→C4-05) |
| **GO consumed** | `GO MORRIS — CORRECTIF GLOBAL MODEL × REASONING STAGE A + PUBLISH REVIEW HANDOFF — ZERO REAL` |
| **Prior handoff tip** | `3da79ae99c7e106ce2d3ccfd8d7443a64c28302d` (Correction 3) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep` |
| **Branch** | `docs/sfia-studio-global-model-reasoning-campaign-contract` |
| **HEAD / origin/main / merge-base** | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| **ZERO REAL** | INTEGRAL |
| **Envelope unchanged** | maxCellExecutions=72 · maxModelInvocations=405 · maxAggregateRealCalls=429 · v2-candidate |

---

## 1. Local Git Truth

```
MAIN_OK — dirty Correction 1/2/3/4 candidate expected
product commit/push/PR = NONE
```

## 2. Sources

Git main doctrine + Studio docs + handoff Correction 3 @ 3da79ae99c7e106ce2d3ccfd8d7443a64c28302d + local candidate.

## 3. Convergence Pre-check

KEEP: Option C, OpenAIConversationProvider, MeteredConversationProvider, NoraCampaignBudget, BudgetTracker, E1, C3 envelope, MW6 path.
ADAPT: eval cell provider composition, F2 structured FinOps, server/client boundary.
INTERDIT: new provider stack / budget engine / persistence / production routing.

## 4. Prior Critical Review source

Correction 3 handoff tip `3da79ae99c7e106ce2d3ccfd8d7443a64c28302d` — C3-01/03/04/05 closed; residual C4 gaps.

## 5. C4-01 — Server Action client boundary

**Finding:** Stage A eval seams (`evalModelReasoningControl`, `evalCellProviderFactory`, `sharedCampaignBudget`, `usdAccounting`, `campaignBudget`) on `projectAssistantSendAction` ("use server").

**Correction:** Removed from Server Action signature and propagation. Campaign/tests call `orchestrateAssistantSend` / `orchestrateProjectAssistantTurn` / `runMw6GovernedNoraProductTurn` directly.

## 6. C4-02 — Factory mandatory

**Finding:** `resolveEvalCellConversationProvider` fell back to arbitrary provider when control set.

**Correction:** eval control → factory REQUIRED; no provider-only fallback.

## 7–10. C4-03 — Structured F2 USD

**Order:** USD preflight → `beforeAuthorizedDispatch` canonical claim → provider dispatch → usage record.

**Composition:** `createMeteredEvalCellProviderFactory` wraps inner(model,effort) → MeteredConversationProvider(shared BudgetTracker) → optional campaign claim.

**analyzeIntent** no longer claims before dispatch (avoids claim-then-USD-deny).

## 11. C4-04 — maxRepeatsPerCell = 1

Enforcement already one repeat/cell; constant corrected from 2 → 1. Envelope 72/405/429 unchanged.

## 12. C4-05 — Evidence honesty

`productPath`: f2_product→`f2`, mw6→`f1`, agents→`none` + `productObservation.executionKind` + evidenceRef.

## 13. C3 envelope proof unchanged

72 / 405 / 429 / v2-candidate retained.

## 14. Validation

| Suite | Result |
| --- | --- |
| C4 targeted | 10 PASS |
| C3 + E1–E4 + G1/G2/G3 + MW6 composition + runner | PASS |
| tsc / lint / build | PASS |
| ZERO REAL | INTEGRAL |

## 15. Non-actions

product commit/push/PR/merge · REAL · Roadmap/Doctrine · package changes

## 16. Verdict

**READY FOR CHATGPT CRITICAL REVIEW — GLOBAL MODEL × REASONING STAGE A FINAL DETERMINISTIC SAFETY CORRECTION — ZERO REAL — REVIEW HANDOFF PUBLISHED**

### Sub-verdicts
- C4-01 EVAL CONTROL CLIENT BOUNDARY — CLOSED
- C4-02 EVAL PROVIDER MODEL × EFFORT BINDING — CLOSED
- C4-03 F2 STRUCTURED USD ENFORCEMENT — CLOSED AT DETERMINISTIC SCOPE
- C4-04 MAX REPEATS PER CELL COHERENCE — CLOSED
- C4-05 PRODUCT PATH EVIDENCE — CLOSED
- C3-01 / C3-03 / C3-04 / C3-05 — REMAIN CLOSED
- 72 / 405 / 429 — UNCHANGED
- STAGE A REAL — NOT AUTHORIZED
- REVIEW HANDOFF — PUBLISHED + REMOTE VERIFIED (this cycle)

### Next gate
ChatGPT Critical Review → Morris Git integration decision — **PAS Stage A REAL**.

---

## APPENDIX A — evalCellProvider.ts (full)

```typescript
/**
 * Eval/server Stage A cell ConversationProvider factory.
 * Reuses OpenAIConversationProvider + MeteredConversationProvider for REAL/eval.
 * INTERNAL / EVAL ONLY — never a client DTO / never a Server Action seam.
 */
import {
  OpenAIConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
} from "@/lib/platform/ai";
import {
  claimModelInvocation,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
import {
  MeteredConversationProvider,
  type MeteredConversationProviderOptions,
} from "./meteredProvider";
import type { BudgetTracker, CapabilityManifest } from "./capabilityBudget";

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
 * Compose: inner(model, effort) → MeteredConversationProvider(shared BudgetTracker)
 * → optional canonical claim AFTER USD preflight / BEFORE dispatch.
 */
export function createMeteredEvalCellProviderFactory(input: {
  innerFactory: EvalCellProviderFactory;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  campaignBudget?: NoraCampaignBudget;
  assumedPreflight?: { inputTokens: number; outputTokens: number };
}): EvalCellProviderFactory {
  return ({ modelId, reasoningEffort }) => {
    validateRuntimeReasoningCapability(modelId, reasoningEffort);
    const inner = input.innerFactory({ modelId, reasoningEffort });
    const options: MeteredConversationProviderOptions | undefined =
      input.campaignBudget
        ? {
            beforeAuthorizedDispatch: () => {
              const ok = claimModelInvocation(input.campaignBudget!);
              if (!ok) {
                throw new Error(
                  input.campaignBudget!.denialReason ??
                    "Campaign model invocation cap reached — provider not dispatched.",
                );
              }
            },
          }
        : undefined;
    return new MeteredConversationProvider(
      inner,
      input.manifest,
      input.budget,
      modelId,
      input.assumedPreflight ?? { inputTokens: 4000, outputTokens: 1200 },
      options,
    );
  };
}

/**
 * Resolve cell provider for Stage A F2 constitutive structured calls.
 *
 * - No eval control → historical provider passthrough.
 * - Eval control present → EvalCellProviderFactory REQUIRED (no arbitrary provider fallback).
 */
export function resolveEvalCellConversationProvider(input: {
  evalModelReasoningControl?: {
    modelId: string;
    reasoningEffort: OpenAiReasoningEffort;
  };
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** Used only when eval control is absent (production / non-eval injection). */
  provider?: ConversationProvider;
}): ConversationProvider | undefined {
  const control = input.evalModelReasoningControl;
  if (!control) return input.provider;
  validateRuntimeReasoningCapability(control.modelId, control.reasoningEffort);
  if (!input.evalCellProviderFactory) {
    return undefined;
  }
  return input.evalCellProviderFactory({
    modelId: control.modelId,
    reasoningEffort: control.reasoningEffort,
  });
}

```

## APPENDIX B — meteredProvider.ts (full)

```typescript
/**
 * Eval-only metering decorator — NOT a new provider stack.
 *
 * Optional beforeAuthorizedDispatch runs AFTER USD preflight succeeds and
 * BEFORE inner provider dispatch (default-off; historical behavior unchanged).
 */

import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderUsage,
} from "@/lib/platform/ai";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import {
  BudgetTracker,
  estimateCostUsd,
  type CapabilityManifest,
} from "./capabilityBudget";

export type ProviderCallMeterRecord = {
  callIndex: number;
  method: "complete" | "completeStructured" | "completeRound";
  at: string;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  cachedInputTokens: number | null;
  reasoningTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
  estimatedUsd: number;
  cumulativeUsd: number;
};

export type MeteredConversationProviderOptions = {
  /**
   * INTERNAL/EVAL — invoked only after USD preflight allows dispatch.
   * Use for canonical campaign model-call claims. Throw to abort before inner.
   * Default: unset (historical MeteredConversationProvider behavior).
   */
  beforeAuthorizedDispatch?: () => void | Promise<void>;
};

export class MeteredConversationProvider implements ConversationProvider {
  readonly providerId: string;
  private callIndex = 0;
  readonly ledger: ProviderCallMeterRecord[] = [];
  private readonly beforeAuthorizedDispatch?: () => void | Promise<void>;

  constructor(
    private readonly inner: ConversationProvider,
    private readonly manifest: CapabilityManifest,
    private readonly budget: BudgetTracker,
    private readonly modelIdForPricing: string,
    private readonly assumedPreflight: {
      inputTokens: number;
      outputTokens: number;
    } = { inputTokens: 4000, outputTokens: 1200 },
    options?: MeteredConversationProviderOptions,
  ) {
    this.providerId = inner.providerId;
    this.beforeAuthorizedDispatch = options?.beforeAuthorizedDispatch;
  }

  private preflight(): void {
    const estimate = estimateCostUsd({
      manifest: this.manifest,
      modelId: this.modelIdForPricing,
      inputTokens: this.assumedPreflight.inputTokens,
      outputTokens: this.assumedPreflight.outputTokens,
    });
    const gate = this.budget.canContinueEssential(estimate);
    if (!gate.allowed) {
      throw new Error(`BUDGET_STOP:${gate.reason ?? "blocked"}`);
    }
  }

  private async afterPreflightBeforeDispatch(): Promise<void> {
    if (this.beforeAuthorizedDispatch) {
      await this.beforeAuthorizedDispatch();
    }
  }

  private record(
    method: ProviderCallMeterRecord["method"],
    usage: ProviderUsage | null | undefined,
  ): void {
    this.callIndex += 1;
    const inputTokens = usage?.inputTokens ?? null;
    const outputTokens = usage?.outputTokens ?? null;
    const billIn = inputTokens ?? this.assumedPreflight.inputTokens;
    const billOut = outputTokens ?? this.assumedPreflight.outputTokens;
    const estimatedUsd = estimateCostUsd({
      manifest: this.manifest,
      modelId: this.modelIdForPricing,
      inputTokens: billIn,
      outputTokens: billOut,
    });
    this.budget.recordSpend(
      estimatedUsd,
      `metered:${method}:call${this.callIndex}`,
    );
    this.ledger.push({
      callIndex: this.callIndex,
      method,
      at: new Date().toISOString(),
      inputTokens,
      outputTokens,
      totalTokens: usage?.totalTokens ?? null,
      cachedInputTokens: null,
      reasoningTokens: null,
      model: usage?.model ?? null,
      providerResponseId: usage?.providerResponseId ?? null,
      estimatedUsd,
      cumulativeUsd: this.budget.cumulativeUsd,
    });
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.preflight();
    await this.afterPreflightBeforeDispatch();
    const result = await this.inner.complete(messages);
    this.record("complete", result.usage);
    return result;
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    if (typeof this.inner.completeStructured !== "function") {
      throw new Error("completeStructured not available on wrapped provider");
    }
    this.preflight();
    await this.afterPreflightBeforeDispatch();
    const result = await this.inner.completeStructured(input);
    this.record("completeStructured", result.usage);
    return result;
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult> {
    if (typeof this.inner.completeRound !== "function") {
      throw new Error("completeRound not available on wrapped provider");
    }
    this.preflight();
    await this.afterPreflightBeforeDispatch();
    const result = await this.inner.completeRound(input);
    this.record("completeRound", result.usage);
    return result;
  }
}

```

## APPENDIX C — c4.final-safety.d0.test.ts (full)

```typescript
/** @vitest-environment node */
/**
 * C4 — final deterministic safety / client-boundary — ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import {
  buildGlobalMrStageAMatrix,
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  createMeteredEvalCellProviderFactory,
  deriveGlobalMrStageAEnvelope,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
  GLOBAL_MR_STAGE_A_CELL_CAPS,
  MeteredConversationProvider,
  resolveEvalCellConversationProvider,
  runGlobalMrStageACell,
  type EvalCellProviderFactory,
} from "@/lib/nora-eval";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";

describe("C4-01 — Server Action has no Stage A eval seams", () => {
  it("projectAssistantSendAction parameter keys exclude Stage A eval controls", () => {
    // Static/type-level surrogate: inspect function source for forbidden Stage A seams.
    const src = projectAssistantSendAction.toString();
    expect(src).not.toMatch(/evalModelReasoningControl/);
    expect(src).not.toMatch(/evalCellProviderFactory/);
    expect(src).not.toMatch(/sharedCampaignBudget/);
    expect(src).not.toMatch(/usdAccounting/);
    // campaignBudget as Stage A lease injection must not appear on the action.
    expect(src).not.toMatch(/campaignBudget/);
  });
});

describe("C4-02 — factory mandatory when eval control active", () => {
  it("control + factory → provider from factory only", () => {
    let called = false;
    const factory: EvalCellProviderFactory = ({ modelId, reasoningEffort }) => {
      called = true;
      expect(modelId).toBe("gpt-5.6-sol");
      expect(reasoningEffort).toBe("high");
      return new FakeConversationProvider();
    };
    const arbitrary = new FakeConversationProvider();
    const resolved = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: "gpt-5.6-sol",
        reasoningEffort: "high",
      },
      evalCellProviderFactory: factory,
      provider: arbitrary,
    });
    expect(called).toBe(true);
    expect(resolved).not.toBe(arbitrary);
  });

  it("control + provider only → undefined (fail-close)", () => {
    const resolved = resolveEvalCellConversationProvider({
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      provider: new FakeConversationProvider(),
    });
    expect(resolved).toBeUndefined();
  });

  it("no control + provider → historical passthrough", () => {
    const p = new FakeConversationProvider();
    expect(
      resolveEvalCellConversationProvider({ provider: p }),
    ).toBe(p);
  });
});

describe("C4-03 — structured F2 USD via MeteredConversationProvider", () => {
  it("C4-03A — USD preflight deny → 0 canonical claim / 0 dispatch", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03a-${Date.now()}`,
      carryInUsd: 12,
    });
    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 12).toBe(
      true,
    );
    let dispatches = 0;
    class CountingFake implements ConversationProvider {
      readonly providerId = "fake-test";
      async complete() {
        dispatches += 1;
        return {
          text: "{}",
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "gpt-5.6-luna",
            providerResponseId: "x",
          },
        };
      }
      async completeStructured() {
        return this.complete();
      }
    }
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => new CountingFake(),
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const provider = factory({
      modelId: "gpt-5.6-luna",
      reasoningEffort: "none",
    });
    const before = state.campaignBudget.consumedModelInvocations;
    await expect(
      analyzeIntent({
        userContent: "Résume __F2_INFORMATIVE__",
        projectSummary: "p",
        provider,
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toThrow(/BUDGET_STOP/);
    expect(dispatches).toBe(0);
    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
  });

  it("C4-03B — allowed structured → 1 claim / 1 dispatch / ledger + spend", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03b-${Date.now()}`,
    });
    let dispatches = 0;
    class CountingFake implements ConversationProvider {
      readonly providerId = "fake-test";
      async complete(messages: ProviderChatMessage[]) {
        dispatches += 1;
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
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "gpt-5.6-luna",
            providerResponseId: "s",
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
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => new CountingFake(),
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const provider = factory({
      modelId: "gpt-5.6-luna",
      reasoningEffort: "none",
    }) as MeteredConversationProvider;
    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeUsd = state.budget.cumulativeUsd;
    await analyzeIntent({
      userContent: "Résume __F2_INFORMATIVE__",
      projectSummary: "p",
      provider,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
    });
    expect(dispatches).toBe(1);
    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(1);
    expect(provider.ledger).toHaveLength(1);
    expect(provider.ledger[0]?.method).toBe("completeStructured");
    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
  });

  it("C4-03D — after hardStopTriggered, next structured has 0 claim / 0 dispatch", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03d-${Date.now()}`,
    });
    // Exhaust authorization envelope.
    state.budget.recordSpend(12, "force-hard-cap");
    expect(state.budget.hardStopTriggered || state.budget.cumulativeUsd >= 12).toBe(
      true,
    );
    let dispatches = 0;
    const factory = createMeteredEvalCellProviderFactory({
      innerFactory: () => {
        const inner = new FakeConversationProvider();
        const orig = inner.completeStructured?.bind(inner);
        return {
          providerId: "fake-test",
          complete: async () => {
            dispatches += 1;
            return {
              text: "x",
              usage: {
                inputTokens: 1,
                outputTokens: 1,
                totalTokens: 2,
                model: "gpt-5.6-luna",
                providerResponseId: "d",
              },
            };
          },
          completeStructured: async (input: {
            messages: ProviderChatMessage[];
            schemaName: string;
            jsonSchema: Record<string, unknown>;
          }) => {
            dispatches += 1;
            if (orig) return orig(input);
            return {
              text: "x",
              usage: {
                inputTokens: 1,
                outputTokens: 1,
                totalTokens: 2,
                model: "gpt-5.6-luna",
                providerResponseId: "d",
              },
            };
          },
        } as ConversationProvider;
      },
      manifest: state.manifest,
      budget: state.budget,
      campaignBudget: state.campaignBudget,
      assumedPreflight: { inputTokens: 50, outputTokens: 20 },
    });
    const before = state.campaignBudget.consumedModelInvocations;
    await expect(
      analyzeIntent({
        userContent: "Résume __F2_INFORMATIVE__",
        projectSummary: "p",
        provider: factory({
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        }),
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
      }),
    ).rejects.toThrow(/BUDGET_STOP/);
    expect(dispatches).toBe(0);
    expect(state.campaignBudget.consumedModelInvocations).toBe(before);
  });
});

describe("C4-04 — maxRepeatsPerCell = 1; envelope unchanged", () => {
  it("constant and derived envelope", () => {
    expect(GLOBAL_MR_STAGE_A_CELL_CAPS.maxRepeatsPerCell).toBe(1);
    const d = deriveGlobalMrStageAEnvelope();
    expect(d.maxCellExecutions).toBe(72);
    expect(d.maxModelInvocations).toBe(405);
    expect(d.maxAggregateRealCalls).toBe(429);
    expect(GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations).toBe(405);
  });
});

describe("C4-05 — Evidence exposes f2_product execution truth", () => {
  it("F2 cell Evidence productPath=f2 and executionKind", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-05-${Date.now()}`,
    });
    const cell = buildGlobalMrStageAMatrix({
      campaignId: state.campaignId,
    }).find((c) => c.executionKind === "f2_product")!;
    const out = await runGlobalMrStageACell({
      state,
      cell,
      executor: async () => ({
        passFail: "PASS",
        failureClass: "NONE",
        rawSummary: "f2-ok",
        usage: null,
      }),
    });
    expect(out.evidence?.productPath).toBe("f2");
    expect(out.evidence?.productPathAttempted).toBe("f2");
    expect(out.evidence?.productPathSucceeded).toBe(true);
    expect(out.evidence?.productObservation).toMatchObject({
      executionKind: "f2_product",
    });
    expect(out.evidence?.evidenceRefs.some((r) => r === "executionKind:f2_product")).toBe(
      true,
    );
  });
});

describe("C4-03C — F2 informative shares BudgetTracker structured + Agents", () => {
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
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c4-f2-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-05T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "C4 F2",
      objective: "usd",
      context: "c4",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C4",
      idempotencyKey: `idem:c4-${Date.now()}-${Math.random()}`,
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

  it("shared BudgetTracker + canonical delta = analyzeIntent + Agents", async () => {
    const state = createGlobalMrStageADriver({
      campaignId: `c4-03c-${Date.now()}`,
    });
    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeUsd = state.budget.cumulativeUsd;
    const scripted = new ScriptedModel([
      [assistantMessage("PIN:gpt-5.6-luna:none")],
    ]);
    let meteredLedger: { method: string }[] = [];
    const innerFactory: EvalCellProviderFactory = () =>
      new FakeConversationProvider();
    const factory: EvalCellProviderFactory = (pin) => {
      const p = createMeteredEvalCellProviderFactory({
        innerFactory,
        manifest: state.manifest,
        budget: state.budget,
        campaignBudget: state.campaignBudget,
        assumedPreflight: { inputTokens: 40, outputTokens: 20 },
      })(pin);
      meteredLedger = (p as MeteredConversationProvider).ledger;
      return p;
    };
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
      evalCellProviderFactory: factory,
      campaignBudget: state.campaignBudget,
      usdAccounting: createEvalAgentsUsdAccounting({
        budget: state.budget,
        manifest: state.manifest,
        modelId: "gpt-5.6-luna",
        assumedInputTokens: 40,
        assumedOutputTokens: 20,
      }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(state.campaignBudget.consumedModelInvocations - beforeModel).toBe(2);
    expect(meteredLedger.some((e) => e.method === "completeStructured")).toBe(
      true,
    );
    expect(state.budget.cumulativeUsd).toBeGreaterThan(beforeUsd);
  });
});

```

## APPENDIX D — core diffs (actions / evalCell / metered)

```diff
diff --git a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
index 6b992a51..04d95485 100644
--- a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
@@ -1,5 +1,8 @@
 /**
  * Eval-only metering decorator — NOT a new provider stack.
+ *
+ * Optional beforeAuthorizedDispatch runs AFTER USD preflight succeeds and
+ * BEFORE inner provider dispatch (default-off; historical behavior unchanged).
  */

 import type {
@@ -32,10 +35,20 @@ export type ProviderCallMeterRecord = {
   cumulativeUsd: number;
 };

+export type MeteredConversationProviderOptions = {
+  /**
+   * INTERNAL/EVAL — invoked only after USD preflight allows dispatch.
+   * Use for canonical campaign model-call claims. Throw to abort before inner.
+   * Default: unset (historical MeteredConversationProvider behavior).
+   */
+  beforeAuthorizedDispatch?: () => void | Promise<void>;
+};
+
 export class MeteredConversationProvider implements ConversationProvider {
   readonly providerId: string;
   private callIndex = 0;
   readonly ledger: ProviderCallMeterRecord[] = [];
+  private readonly beforeAuthorizedDispatch?: () => void | Promise<void>;

   constructor(
     private readonly inner: ConversationProvider,
@@ -46,8 +59,10 @@ export class MeteredConversationProvider implements ConversationProvider {
       inputTokens: number;
       outputTokens: number;
     } = { inputTokens: 4000, outputTokens: 1200 },
+    options?: MeteredConversationProviderOptions,
   ) {
     this.providerId = inner.providerId;
+    this.beforeAuthorizedDispatch = options?.beforeAuthorizedDispatch;
   }

   private preflight(): void {
@@ -63,6 +78,12 @@ export class MeteredConversationProvider implements ConversationProvider {
     }
   }

+  private async afterPreflightBeforeDispatch(): Promise<void> {
+    if (this.beforeAuthorizedDispatch) {
+      await this.beforeAuthorizedDispatch();
+    }
+  }
+
   private record(
     method: ProviderCallMeterRecord["method"],
     usage: ProviderUsage | null | undefined,
@@ -102,6 +123,7 @@ export class MeteredConversationProvider implements ConversationProvider {
     messages: ProviderChatMessage[],
   ): Promise<ProviderCompletionResult> {
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.complete(messages);
     this.record("complete", result.usage);
     return result;
@@ -116,6 +138,7 @@ export class MeteredConversationProvider implements ConversationProvider {
       throw new Error("completeStructured not available on wrapped provider");
     }
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.completeStructured(input);
     this.record("completeStructured", result.usage);
     return result;
@@ -129,6 +152,7 @@ export class MeteredConversationProvider implements ConversationProvider {
       throw new Error("completeRound not available on wrapped provider");
     }
     this.preflight();
+    await this.afterPreflightBeforeDispatch();
     const result = await this.inner.completeRound(input);
     this.record("completeRound", result.usage);
     return result;

```

## APPENDIX E — intent / orchestrateF2 / stageA / index diffs

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 970d8681..5a815cb7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -10,6 +10,8 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
+import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
+import type { NoraEvalModelReasoningControl } from "@/lib/nora-cognitive-runtime";
 import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
 import type {
   F2QualificationSignals,
@@ -497,12 +499,40 @@ export async function analyzeIntent(input: {
    * Never client-authoritative for model/reasoning selection.
    */
   provider?: ConversationProvider;
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell model×effort identity for constitutive
+   * ConversationProvider calls (completeStructured). Absent → production default.
+   * When set, an injected cell provider is required (no silent live default).
+   */
+  /**
+   * INTERNAL / EVAL-ONLY — Stage A cell identity. Canonical model-call claims
+   * belong on MeteredConversationProvider.beforeAuthorizedDispatch
+   * (USD preflight → claim → dispatch), not here.
+   */
+  evalModelReasoningControl?: NoraEvalModelReasoningControl;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
   model: string | null;
   rawText: string;
+  /** Eval-only observation — never a client DTO field. */
+  evalPinnedModelId?: string;
+  evalPinnedReasoningEffort?: string;
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
@@ -550,5 +580,11 @@ export async function analyzeIntent(input: {
     presentation,
     model: completion.usage?.model ?? null,
     rawText: completion.text,
+    ...(evalControl
+      ? {
+          evalPinnedModelId: evalControl.modelId,
+          evalPinnedReasoningEffort: evalControl.reasoningEffort,
+        }
+      : {}),
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 276bce91..7c314422 100644
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
+        "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
+      mode: modeResolution.mode,
+      retryable: false,
+    };
+  }
+  const effectiveProvider = cellProvider ?? input.provider;
+
   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
   try {
@@ -602,7 +644,8 @@ export async function orchestrateAssistantSend(input: {
       userContent: content,
       projectSummary: cognitive.projectSummary,
       challengeContext,
-      provider: input.provider,
+      provider: effectiveProvider,
+      evalModelReasoningControl: input.evalModelReasoningControl,
     });
   } catch (error) {
     const message =
@@ -649,10 +692,13 @@ export async function orchestrateAssistantSend(input: {
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
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index d86d38d4..2970c326 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -67,3 +67,48 @@ export {
   optionCRuntimeObservables,
   type NoraCognitiveRuntimeObservable,
 } from "./optionCObservables";
+export {
+  createEvalAgentsUsdAccounting,
+  type CreateEvalAgentsUsdAccountingInput,
+} from "./agentsUsdBridge";
+export {
+  createOpenAiEvalCellProviderFactory,
+  createMeteredEvalCellProviderFactory,
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

## APPENDIX F — contract 10 (full candidate)

```markdown
# 10 — Nora Global Model × Reasoning Campaign ExecutionContract (CANDIDATE)

| Field | Value |
| --- | --- |
| **Document ID** | `NORA-GLOBAL-MR-CAMPAIGN-EXECUTION-CONTRACT-01` |
| **Contract version** | `global-mr-campaign-contract-v2-candidate` |
| **Status** | **CANDIDATE LOCAL — ZERO REAL — STAGE A FINAL DETERMINISTIC SAFETY CORRECTION (C4-01→C4-05) — DETERMINISTIC PROVEN — AWAITING CHATGPT CRITICAL REVIEW → MORRIS GIT INTEGRATION DECISION** |
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
| **Correction 4 GO** | `GO MORRIS — CORRECTIF GLOBAL MODEL × REASONING STAGE A + PUBLISH REVIEW HANDOFF — ZERO REAL` **CONSUMED (local candidate only)** |
| **REAL authorization** | **NOT GRANTED** by this document |

### Three truth layers (do not conflate)

| Layer | What it contains | Status |
| --- | --- | --- |
| **A. CURRENT MAIN** (`main@23d850fd`) | G1/G2/G3 only for this campaign readiness | INTEGRATED |
| **B. LOCAL CANDIDATE** (this worktree) | Stage A enablement glue E1–E4 + F1→F5 + C3-01→C3-05 + **C4-01→C4-05** final deterministic safety — code/tests/doc **NOT** on main | DETERMINISTIC PROVEN locally; **NOT integrated** |
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
| Max repeats/cell | **1** (runIndex 0 base + runIndex 1 unique selective repeat) | CANDIDATE — C4-04 |
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

## Critical Review remediation (C4-01→C4-05)

| Gap | Finding | Correction | Proof |
| --- | --- | --- | --- |
| **C4-01** | Stage A eval seams on client-callable Server Action | Removed from `projectAssistantSendAction`; campaign uses internal orchestrators only | `c4.final-safety.d0.test.ts` PASS |
| **C4-02** | Eval control accepted arbitrary provider fallback | Factory mandatory when eval control set | same PASS |
| **C4-03** | F2 structured not on shared USD BudgetTracker; claim-before-USD risk | MeteredConversationProvider `beforeAuthorizedDispatch` after USD preflight; `createMeteredEvalCellProviderFactory` | same PASS |
| **C4-04** | `maxRepeatsPerCell=2` incoherent | Corrected to **1** (72/405/429 unchanged) | same PASS |
| **C4-05** | Evidence productPath dishonest for F2 | `productPath=f2` + `executionKind` observation | same PASS |

**Status:** C4-01→C4-05 = **CLOSED AT DETERMINISTIC TESTED SCOPE**. C3-01/C3-03/C3-04/C3-05 remain closed. 72/405/429 unchanged.

**Client boundary:** Stage A model/effort/campaign/USD seams are **server-internal only** — not on `projectAssistantSendAction`.

**F2 FinOps:** structured `completeStructured` shares Stage A `BudgetTracker` via MeteredConversationProvider; order = USD preflight → canonical claim → dispatch → record. `hardCapUsd=12` remains estimated authorization envelope ≠ invoice.

**Next gate:** ChatGPT Critical Review → **Morris Git integration decision** (NOT Stage A REAL).

Stage A REAL comes only after: Git integration → CI → post-merge verification → campaign REAL requalification → Morris Stage A REAL GO.

## Critical Review remediation (E1–E4 + F1→F5 + C3-01→C3-05) — retained

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
| Correction 4 GO | **CONSUMED (local)** |
| ChatGPT Critical Review (final deterministic safety candidate) | **NEXT** |
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
END OF REVIEW PACK — CORRECTION 4
