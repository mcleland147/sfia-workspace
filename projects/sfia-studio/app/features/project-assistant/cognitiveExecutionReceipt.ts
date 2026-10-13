/**
 * P6-REAL-OBS-P0-RECEIPT-CONSERVATION — Option B receipt (corrected).
 *
 * Projects already-produced Nora/Runner observability into a redacted receipt
 * and remembers it process-locally by server logicalTurnId.
 *
 * Durable P6 Campaign Evidence Ledger (JSONL under .tmp-sfia-review/…) is
 * ADOPTED for **external P6 campaign QA only** (`lib/p6-campaign-evidence`).
 * This Product module does NOT write that ledger — capture is QA-side from DTO.
 *
 * Fake never becomes REAL. Runner-returned ids are observations only.
 * null providerResponseId is NOT_OBSERVED — never invented.
 * Conservation failures never throw into the Product success path.
 */

import type { NoraCognitiveTurnResult } from "@/lib/nora-cognitive-runtime";
import type { AssistantTurnStatus } from "./types";

export const COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION = 1 as const;

/**
 * Honest provider observation at the Product seam.
 * Never upgrades Fake / synthetic / Runner-observed ids into REAL PROVEN.
 * PROVIDER_CONFIRMED is intentionally absent from this seam.
 */
export type ProviderResponseObservation =
  | "FAKE_DETERMINISTIC"
  | "NOT_OBSERVED"
  /** Runner returned a non-null lastResponseId/usage id — observation only. */
  | "RUNNER_RESPONSE_ID_OBSERVED";

/** Always NOT_PROVEN at this Product seam — REAL is a P6 process claim. */
export type RealProofStatus = "NOT_PROVEN";

export type CognitiveExecutionReceiptAdaptive = {
  requestedMaxTurns: number;
  effectiveMaxTurns: number;
  strategyClass: string | null;
  reasonCodes: string[];
  floor: number;
  ceiling: number;
  explicitOverride: boolean;
};

export type CognitiveExecutionReceiptContinuation = {
  continued: boolean;
  segmentsExecuted: number;
  missionMaxTurns: number;
  segmentMaxTurns: number;
  allottedTurns: number;
  stopReason: string;
  reasonCodes: string[];
};

/**
 * Conservation outcome — distinct from cognitive Product status.
 * Durable ledger write is not authorized in this lot.
 */
export type ReceiptConservationStatus = {
  /** Process-local Map keyed by logicalTurnId (ephemeral; ≠ Evidence SoT). */
  processLocal: "remembered" | "failed" | "skipped";
  /**
   * Durable external ledger is QA-side (`lib/p6-campaign-evidence`), never written
   * by Product orchestrateTurn. Product conservation remains process-local only.
   */
  durableLedger: "not_authorized_candidate" | "disabled";
  ok: boolean;
  failureCode: string | null;
};

export type CognitiveExecutionReceipt = {
  schemaVersion: typeof COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION;
  /** Campaign Axis B artifact class for this seam — never auto-REAL. */
  proofClassification: "DETERMINISTIC";
  /** Explicit: this receipt never asserts REAL BOUNDARY PROVEN. */
  realProofStatus: RealProofStatus;
  logicalTurnId: string;
  projectId: string;
  runtimeIdentity: "agents";
  /** Identity boundary — Fake never becomes openai. */
  providerIdentity: "fake" | "openai" | "unknown";
  presentation: "test_provider" | "openai_live";
  /** presentation === openai_live ⇒ configured for live path (≠ invoked/proven). */
  providerConfigured: boolean;
  selectedModelId: string | null;
  /** usage.model as returned/projected by Runner (may be fake-test-model). */
  observedModel: string | null;
  selectedReasoningEffort: string | null;
  providerResponseId: string | null;
  providerResponseObservation: ProviderResponseObservation;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
  };
  adaptiveObserve: CognitiveExecutionReceiptAdaptive | null;
  continuationObserve: CognitiveExecutionReceiptContinuation | null;
  toolCalls: number;
  limitReached: boolean;
  /** Product send terminal status — ≠ logical_product_turns.status=accepted. */
  productTerminalStatus: AssistantTurnStatus;
  conservation: ReceiptConservationStatus;
  capturedAt: string;
};

const REGISTRY_MAX = 512;
const registry = new Map<string, CognitiveExecutionReceipt>();

function rememberCognitiveExecutionReceiptDefault(
  receipt: CognitiveExecutionReceipt,
): void {
  if (registry.size >= REGISTRY_MAX) {
    const oldest = registry.keys().next().value;
    if (typeof oldest === "string") {
      registry.delete(oldest);
    }
  }
  registry.set(receipt.logicalTurnId, receipt);
}

/** Injectable remember for DET fault-injection only — never Product authority. */
let rememberImpl: (receipt: CognitiveExecutionReceipt) => void =
  rememberCognitiveExecutionReceiptDefault;

export function clearCognitiveExecutionReceiptRegistryForTests(): void {
  registry.clear();
  rememberImpl = rememberCognitiveExecutionReceiptDefault;
}

export function setCognitiveExecutionReceiptRememberForTests(
  impl: ((receipt: CognitiveExecutionReceipt) => void) | null,
): void {
  rememberImpl = impl ?? rememberCognitiveExecutionReceiptDefault;
}

export function rememberCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
): void {
  rememberImpl(receipt);
}

export function getCognitiveExecutionReceipt(
  logicalTurnId: string,
): CognitiveExecutionReceipt | null {
  return registry.get(logicalTurnId) ?? null;
}

export type BuildCognitiveExecutionReceiptInput = {
  logicalTurnId: string;
  projectId: string;
  presentation: "test_provider" | "openai_live";
  productTerminalStatus: AssistantTurnStatus;
  turn?: Pick<
    NoraCognitiveTurnResult,
    | "usage"
    | "toolCalls"
    | "limitReached"
    | "cognitiveRuntime"
    | "selectedModelId"
    | "selectedReasoningEffort"
    | "adaptiveObserve"
    | "continuationObserve"
  > | null;
  capturedAt?: string;
  conservation?: ReceiptConservationStatus;
};

function classifyProvider(input: {
  presentation: "test_provider" | "openai_live";
  providerResponseId: string | null;
}): {
  providerIdentity: CognitiveExecutionReceipt["providerIdentity"];
  providerResponseObservation: ProviderResponseObservation;
  providerConfigured: boolean;
} {
  if (input.presentation === "test_provider") {
    return {
      providerIdentity: "fake",
      providerResponseObservation: "FAKE_DETERMINISTIC",
      providerConfigured: false,
    };
  }

  const providerConfigured = true;
  const id = input.providerResponseId;

  if (typeof id !== "string" || id.length === 0) {
    return {
      providerIdentity: "openai",
      providerResponseObservation: "NOT_OBSERVED",
      providerConfigured,
    };
  }

  // Explicit Fake markers — never promote, even on openai_live presentation.
  if (id.startsWith("fake-") || id.startsWith("fake_")) {
    return {
      providerIdentity: "fake",
      providerResponseObservation: "FAKE_DETERMINISTIC",
      providerConfigured,
    };
  }

  // Non-empty Runner-projected id is an observation only.
  // Format resemblance to OpenAI ids is NEVER sufficient for REAL PROVEN /
  // PROVIDER_CONFIRMED. Campaign REAL requires distinct Morris GO + correlation.
  return {
    providerIdentity: "openai",
    providerResponseObservation: "RUNNER_RESPONSE_ID_OBSERVED",
    providerConfigured,
  };
}

const CONSERVATION_DISABLED: ReceiptConservationStatus = {
  processLocal: "skipped",
  durableLedger: "not_authorized_candidate",
  ok: true,
  failureCode: null,
};

export function buildCognitiveExecutionReceipt(
  input: BuildCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt {
  const turn = input.turn ?? null;
  const providerResponseId = turn?.usage?.providerResponseId ?? null;
  const classified = classifyProvider({
    presentation: input.presentation,
    providerResponseId,
  });
  const adaptive = turn?.adaptiveObserve;
  const continuation = turn?.continuationObserve;

  return {
    schemaVersion: COGNITIVE_EXECUTION_RECEIPT_SCHEMA_VERSION,
    proofClassification: "DETERMINISTIC",
    realProofStatus: "NOT_PROVEN",
    logicalTurnId: input.logicalTurnId,
    projectId: input.projectId,
    runtimeIdentity: "agents",
    providerIdentity: classified.providerIdentity,
    presentation: input.presentation,
    providerConfigured: classified.providerConfigured,
    selectedModelId:
      typeof turn?.selectedModelId === "string" ? turn.selectedModelId : null,
    observedModel: turn?.usage?.model ?? null,
    selectedReasoningEffort:
      typeof turn?.selectedReasoningEffort === "string"
        ? turn.selectedReasoningEffort
        : null,
    providerResponseId,
    providerResponseObservation: classified.providerResponseObservation,
    usage: {
      inputTokens: turn?.usage?.inputTokens ?? null,
      outputTokens: turn?.usage?.outputTokens ?? null,
      totalTokens: turn?.usage?.totalTokens ?? null,
    },
    adaptiveObserve: adaptive
      ? {
          requestedMaxTurns: adaptive.requestedMaxTurns,
          effectiveMaxTurns: adaptive.effectiveMaxTurns,
          strategyClass: adaptive.strategyClass ?? null,
          reasonCodes: [...adaptive.reasonCodes],
          floor: adaptive.floor,
          ceiling: adaptive.ceiling,
          explicitOverride: adaptive.explicitOverride,
        }
      : null,
    continuationObserve: continuation
      ? {
          continued: continuation.continued,
          segmentsExecuted: continuation.segmentsExecuted,
          missionMaxTurns: continuation.missionMaxTurns,
          segmentMaxTurns: continuation.segmentMaxTurns,
          allottedTurns: continuation.allottedTurns,
          stopReason: continuation.stopReason,
          reasonCodes: [...continuation.reasonCodes],
        }
      : null,
    toolCalls: turn?.toolCalls ?? 0,
    limitReached: turn?.limitReached === true,
    productTerminalStatus: input.productTerminalStatus,
    conservation: input.conservation ?? CONSERVATION_DISABLED,
    capturedAt: input.capturedAt ?? new Date().toISOString(),
  };
}

/**
 * Conserve receipt process-locally only.
 * Never writes durable JSONL / Product SQLite Evidence.
 * Never throws — capture failure is returned as status.
 */
export function conserveCognitiveExecutionReceipt(
  receipt: CognitiveExecutionReceipt,
): ReceiptConservationStatus {
  try {
    const withStatus: CognitiveExecutionReceipt = {
      ...receipt,
      conservation: {
        processLocal: "remembered",
        durableLedger: "not_authorized_candidate",
        ok: true,
        failureCode: null,
      },
    };
    rememberCognitiveExecutionReceipt(withStatus);
    return withStatus.conservation;
  } catch {
    const failed: ReceiptConservationStatus = {
      processLocal: "failed",
      durableLedger: "not_authorized_candidate",
      ok: false,
      failureCode: "PROCESS_LOCAL_REMEMBER_FAILED",
    };
    // Best-effort: still expose failed status on a registry entry when possible.
    try {
      rememberCognitiveExecutionReceipt({
        ...receipt,
        conservation: failed,
      });
    } catch {
      // Ignore secondary failure — caller keeps Product cognitive status.
    }
    return failed;
  }
}

/**
 * Build + conserve without throwing into Product orchestration.
 * Returns receipt with honest conservation status always set.
 */
export function projectAndConserveCognitiveExecutionReceipt(
  input: BuildCognitiveExecutionReceiptInput,
): CognitiveExecutionReceipt {
  const base = buildCognitiveExecutionReceipt(input);
  try {
    const conservation = conserveCognitiveExecutionReceipt(base);
    const finalReceipt: CognitiveExecutionReceipt = {
      ...base,
      conservation,
    };
    // Re-remember final object so registry matches returned DTO.
    if (conservation.processLocal === "remembered") {
      try {
        rememberCognitiveExecutionReceipt(finalReceipt);
      } catch {
        return {
          ...finalReceipt,
          conservation: {
            processLocal: "failed",
            durableLedger: "not_authorized_candidate",
            ok: false,
            failureCode: "PROCESS_LOCAL_REMEMBER_FAILED",
          },
        };
      }
    }
    return finalReceipt;
  } catch {
    return {
      ...base,
      conservation: {
        processLocal: "failed",
        durableLedger: "not_authorized_candidate",
        ok: false,
        failureCode: "CONSERVATION_UNEXPECTED_FAILURE",
      },
    };
  }
}
