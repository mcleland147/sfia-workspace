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
