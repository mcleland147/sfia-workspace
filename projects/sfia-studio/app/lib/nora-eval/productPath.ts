/**
 * Product-path helpers for R1/R2 — reuse F1/F2 with per-cell provider injection.
 * Never mutates process.env for model/effort matrix.
 * CORR-MW0-05: metered provider calls + R2 fail-closed on actual F2 output.
 */

import {
  OpenAIConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  BudgetTracker,
  conservativePreCallEstimateUsd,
  type CapabilityManifest,
  validateCellAgainstManifest,
} from "./capabilityBudget";
import type { FailureClass, RunEvidence } from "./types";
import { NORA_EVAL_CATALOG_VERSION } from "./types";
import { assertNoSecretLeak } from "./evidence";
import { getScenario } from "./catalog";
import { MeteredConversationProvider } from "./meteredProvider";
import { observeF2Product, scoreR2FromObservation } from "./r2Score";
import { aggregatePassFail } from "./scorers";

export function createCellProvider(input: {
  apiKey: string;
  model: string;
  reasoningEffort: OpenAiReasoningEffort;
}): ConversationProvider {
  return new OpenAIConversationProvider(
    input.apiKey,
    input.model,
    input.reasoningEffort,
  );
}

function mapFailureClass(raw: string): FailureClass {
  const allowed: FailureClass[] = [
    "NONE",
    "MECHANICS",
    "SCORER",
    "MISSING_OBSERVABLE",
    "HARD_INVARIANT",
    "PROVIDER_CAPABILITY",
    "PROVIDER_ERROR",
    "PROVIDER",
    "PRODUCT_PATH",
    "CONFIG",
    "BUDGET",
    "BUDGET_STOP",
    "SECURITY",
    "DATA_SAFETY",
    "INCONCLUSIVE",
  ];
  return (allowed.includes(raw as FailureClass)
    ? raw
    : "SCORER") as FailureClass;
}

export async function runR1ProviderSmoke(input: {
  campaignId: string;
  apiKey: string;
  model: string;
  reasoningEffort: OpenAiReasoningEffort;
  runIndex: number;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  essential?: boolean;
}): Promise<RunEvidence> {
  const startedAt = new Date().toISOString();
  const cellBase = {
    model: input.model,
    reasoningEffort: input.reasoningEffort,
    scenarioId: "mw0.r1.provider-smoke",
    scenarioVersion: NORA_EVAL_CATALOG_VERSION,
    runIndex: input.runIndex,
    campaignId: input.campaignId,
    tier: "R1" as const,
    sourceSet: "A" as const,
    toolSet: "none" as const,
  };

  const cellCheck = validateCellAgainstManifest({
    manifest: input.manifest,
    modelId: input.model,
    reasoningEffort: input.reasoningEffort,
  });
  if (!cellCheck.ok) {
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "FAIL",
      failureClass: (cellCheck.failureClass ?? "CONFIG") as FailureClass,
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "r1_provider",
      rawSummary: cellCheck.detail,
      usage: null,
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
    };
  }

  const estimate = conservativePreCallEstimateUsd({
    manifest: input.manifest,
    modelId: input.model,
    assumedInputTokens: 1500,
    assumedOutputTokens: 400,
  });
  const gate = input.essential
    ? input.budget.canContinueEssential(estimate)
    : input.budget.canStartCall(estimate);
  if (!gate.allowed) {
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "INCONCLUSIVE",
      failureClass: "BUDGET_STOP",
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "r1_provider",
      rawSummary: gate.reason ?? "budget stop",
      usage: null,
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
    };
  }

  const inner = createCellProvider({
    apiKey: input.apiKey,
    model: input.model,
    reasoningEffort: input.reasoningEffort,
  });
  const provider = new MeteredConversationProvider(
    inner,
    input.manifest,
    input.budget,
    input.model,
    { inputTokens: 1500, outputTokens: 400 },
  );

  try {
    const completion = await provider.complete([
      {
        role: "system",
        content:
          "You are a bounded MW0 R1 smoke probe. Reply with exactly: R1_OK. No secrets. No authority claims.",
      },
      { role: "user", content: "Confirm provider boundary with R1_OK." },
    ]);
    const call = provider.ledger[provider.ledger.length - 1];
    const ok = /R1_OK/i.test(completion.text);
    const leak = assertNoSecretLeak(completion.text);
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: ok && leak.ok ? "PASS" : "FAIL",
      failureClass: !leak.ok ? "SECURITY" : ok ? "NONE" : "PROVIDER_ERROR",
      scorers: [
        {
          scorerId: "r1.shape",
          passFail: ok ? "PASS" : "FAIL",
          detail: `text_has_R1_OK=${ok}`,
          hardInvariantViolation: false,
        },
        {
          scorerId: "r1.secret",
          passFail: leak.ok ? "PASS" : "FAIL",
          detail: leak.detail,
          hardInvariantViolation: !leak.ok,
        },
      ],
      epistemicLabelsObserved: ["OBSERVATION"],
      productPath: "r1_provider",
      rawSummary: `R1 smoke model=${call?.model ?? input.model} effort=${input.reasoningEffort} providerCalls=${provider.ledger.length}`,
      usage: {
        inputTokens: call?.inputTokens ?? null,
        outputTokens: call?.outputTokens ?? null,
        cachedInputTokens: null,
        reasoningTokens: null,
        estimatedUsd: call?.estimatedUsd ?? 0,
        modelReturned: call?.model ?? null,
        providerResponseId: call?.providerResponseId ?? null,
        providerCallCount: provider.ledger.length,
      },
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: call?.providerResponseId
        ? [`providerResponseId:${call.providerResponseId}`]
        : [],
      providerCallLedger: provider.ledger.map((r) => ({ ...r })),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.startsWith("BUDGET_STOP:")) {
      return {
        campaignId: input.campaignId,
        cell: cellBase,
        startedAt,
        finishedAt: new Date().toISOString(),
        passFail: "INCONCLUSIVE",
        failureClass: "BUDGET_STOP",
        scorers: [],
        epistemicLabelsObserved: [],
        productPath: "r1_provider",
        rawSummary: message,
        usage: null,
        cumulativeSpendUsd: input.budget.cumulativeUsd,
        redacted: true,
        evidenceRefs: [],
        providerCallLedger: provider.ledger.map((r) => ({ ...r })),
      };
    }
    const isCapability =
      /effort|unsupported|invalid|reasoning/i.test(message) ||
      /CONFIG|PROVIDER/i.test(message);
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "FAIL",
      failureClass: isCapability ? "PROVIDER_CAPABILITY" : "PROVIDER_ERROR",
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "r1_provider",
      rawSummary: message.slice(0, 500),
      usage: null,
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
      providerCallLedger: provider.ledger.map((r) => ({ ...r })),
    };
  }
}

export async function runR2ProductScenario(input: {
  campaignId: string;
  apiKey: string;
  model: string;
  reasoningEffort: OpenAiReasoningEffort;
  scenarioId: string;
  runIndex: number;
  projectId: string;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  essential?: boolean;
  /**
   * Optional eval/test provider override (server-side only).
   * When set, skips createCellProvider — used for deterministic F2 fixture tests.
   */
  provider?: ConversationProvider;
}): Promise<RunEvidence> {
  const startedAt = new Date().toISOString();
  const scenario = getScenario(input.scenarioId);
  if (!scenario) {
    throw new Error(`Unknown scenario ${input.scenarioId}`);
  }

  const cellBase = {
    model: input.model,
    reasoningEffort: input.reasoningEffort,
    scenarioId: input.scenarioId,
    scenarioVersion: NORA_EVAL_CATALOG_VERSION,
    runIndex: input.runIndex,
    campaignId: input.campaignId,
    tier: "R2" as const,
    sourceSet: "C" as const,
    toolSet: "f2_pipeline" as const,
  };

  const cellCheck = validateCellAgainstManifest({
    manifest: input.manifest,
    modelId: input.model,
    reasoningEffort: input.reasoningEffort,
  });
  if (!cellCheck.ok) {
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "FAIL",
      failureClass: (cellCheck.failureClass ?? "CONFIG") as FailureClass,
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "f2",
      productPathAttempted: "f2",
      productPathSucceeded: false,
      rawSummary: cellCheck.detail,
      usage: null,
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
    };
  }

  // Preflight for first nested call (F2 may make several). Soft-stop blocks nonessential cells.
  const estimate = conservativePreCallEstimateUsd({
    manifest: input.manifest,
    modelId: input.model,
    assumedInputTokens: 4000,
    assumedOutputTokens: 1200,
  });
  const gate = input.essential
    ? input.budget.canContinueEssential(estimate)
    : input.budget.canStartCall(estimate);
  if (!gate.allowed) {
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "INCONCLUSIVE",
      failureClass: "BUDGET_STOP",
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "f2",
      productPathAttempted: "f2",
      productPathSucceeded: false,
      rawSummary: gate.reason ?? "budget stop",
      usage: null,
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
    };
  }

  const inner =
    input.provider ??
    createCellProvider({
      apiKey: input.apiKey,
      model: input.model,
      reasoningEffort: input.reasoningEffort,
    });
  const provider = new MeteredConversationProvider(
    inner,
    input.manifest,
    input.budget,
    input.model,
    { inputTokens: 4000, outputTokens: 1200 },
  );

  let f2;
  try {
    f2 = await orchestrateAssistantSend({
      projectId: input.projectId,
      content: scenario.prompt,
      provider,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.startsWith("BUDGET_STOP:")) {
      return {
        campaignId: input.campaignId,
        cell: cellBase,
        startedAt,
        finishedAt: new Date().toISOString(),
        passFail: "INCONCLUSIVE",
        failureClass: "BUDGET_STOP",
        scorers: [],
        epistemicLabelsObserved: [],
        productPath: "f2",
        productPathAttempted: "f2",
        productPathSucceeded: false,
        rawSummary: message,
        usage: null,
        cumulativeSpendUsd: input.budget.cumulativeUsd,
        redacted: true,
        evidenceRefs: [],
        providerCallLedger: provider.ledger.map((r) => ({ ...r })),
      };
    }
    return {
      campaignId: input.campaignId,
      cell: cellBase,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "FAIL",
      failureClass: "PROVIDER_ERROR",
      scorers: [
        {
          scorerId: "r2.provider",
          passFail: "FAIL",
          detail: message.slice(0, 300),
          hardInvariantViolation: false,
        },
      ],
      epistemicLabelsObserved: [],
      productPath: "f2",
      productPathAttempted: "f2",
      productPathSucceeded: false,
      rawSummary: message.slice(0, 500),
      usage: {
        inputTokens: null,
        outputTokens: null,
        cachedInputTokens: null,
        reasoningTokens: null,
        estimatedUsd: provider.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
        modelReturned: null,
        providerResponseId: null,
        providerCallCount: provider.ledger.length,
      },
      cumulativeSpendUsd: input.budget.cumulativeUsd,
      redacted: true,
      evidenceRefs: [],
      providerCallLedger: provider.ledger.map((r) => ({ ...r })),
    };
  }

  const obs = observeF2Product(scenario, f2);
  const scored = scoreR2FromObservation(scenario, obs);
  const text = obs.text;
  const leak = assertNoSecretLeak(text);
  const scorers = [...scored.scorers];
  if (!leak.ok) {
    scorers.push({
      scorerId: "r2.secret",
      passFail: "FAIL",
      detail: leak.detail,
      hardInvariantViolation: true,
    });
  }

  const passFail = aggregatePassFail(scorers);

  let failureClass: FailureClass =
    passFail === "PASS"
      ? "NONE"
      : !leak.ok
        ? "SECURITY"
        : mapFailureClass(scored.failureClass);

  // Failed product path must never use NONE
  if (!obs.f2Ok && failureClass === "NONE") {
    failureClass = "PRODUCT_PATH";
  }

  const totalUsd = provider.ledger.reduce((a, c) => a + c.estimatedUsd, 0);
  const totalIn = provider.ledger.reduce(
    (a, c) => a + (c.inputTokens ?? 0),
    0,
  );
  const totalOut = provider.ledger.reduce(
    (a, c) => a + (c.outputTokens ?? 0),
    0,
  );
  const anyNullIn = provider.ledger.some((c) => c.inputTokens == null);
  const anyNullOut = provider.ledger.some((c) => c.outputTokens == null);

  return {
    campaignId: input.campaignId,
    cell: cellBase,
    startedAt,
    finishedAt: new Date().toISOString(),
    passFail,
    failureClass,
    scorers,
    epistemicLabelsObserved: obs.epistemicLabelsObserved,
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: obs.productPathSucceeded,
    rawSummary: JSON.stringify({
      scenarioId: input.scenarioId,
      productPathAttempted: "f2",
      productPathSucceeded: obs.productPathSucceeded,
      f2Ok: obs.f2Ok,
      f2Status: obs.f2Status,
      f2Code: obs.f2Code,
      f2Message: obs.f2Message,
      turnKind: obs.turnKind,
      intentClass: obs.intentClass,
      cycleTypeId: obs.cycleTypeId,
      proposalStatus: obs.proposalStatus,
      executionBlocked: obs.executionBlocked,
      expectedObservableIds: obs.expectedObservableIds,
      observedObservableIds: obs.observedObservableIds,
      providerCallCount: provider.ledger.length,
    }),
    usage: {
      inputTokens: anyNullIn ? null : totalIn,
      outputTokens: anyNullOut ? null : totalOut,
      cachedInputTokens: null,
      reasoningTokens: null,
      estimatedUsd: totalUsd,
      modelReturned:
        provider.ledger.map((c) => c.model).find(Boolean) ?? null,
      providerResponseId:
        provider.ledger.map((c) => c.providerResponseId).find(Boolean) ?? null,
      providerCallCount: provider.ledger.length,
    },
    cumulativeSpendUsd: input.budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [
      `project:${input.projectId}`,
      ...provider.ledger
        .filter((c) => c.providerResponseId)
        .map((c) => `providerResponseId:${c.providerResponseId}`),
    ],
    productObservation: { ...obs },
    providerCallLedger: provider.ledger.map((r) => ({ ...r })),
    barAssessments: scored.barAssessments,
  };
}
