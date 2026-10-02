/**
 * Shared Nora cognitive core seam (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 CORRECTION).
 *
 * BOTH conversation and post_execution invoke this seam, which dispatches to the
 * common Agents Runner path (`runNoraAgentsTurn`). This is NOT a provider.complete
 * wrapper and NOT a second Nora engine.
 *
 * Mode differences (applied here, not in a parallel runtime):
 * - conversation: Memory B / tools / Journal / Product tools / MW6 as caller supplies
 * - post_execution: no tools, no hosted search, no session/Memory B, no Journal,
 *   no Product execution tools, no MW5 (MW5 lives above in conversational turn)
 */
import { resolveConversationProvider } from "@/lib/platform/ai";
import {
  runNoraAgentsTurn,
  type RunNoraAgentsTurnInput,
} from "./runNoraAgentsTurn";

export type NoraCognitiveCompletionMode =
  | "conversation"
  | "post_execution";

/** @deprecated alias — prefer NoraCognitiveCompletionMode */
export type NoraCognitiveMode = NoraCognitiveCompletionMode;

export type NoraCognitiveCoreInvocation = {
  readonly mode: NoraCognitiveCompletionMode;
  readonly correlationId: string;
  readonly projectId: string;
};

type CoreObserver = (invocation: NoraCognitiveCoreInvocation) => void;

const coreObservers = new Set<CoreObserver>();

/**
 * TEST-ONLY — observe every shared-core invocation (conversation + post_execution).
 * Production must not register observers.
 */
export function observeNoraCognitiveCore(observer: CoreObserver): () => void {
  coreObservers.add(observer);
  return () => {
    coreObservers.delete(observer);
  };
}

function notifyCore(invocation: NoraCognitiveCoreInvocation): void {
  for (const observer of coreObservers) {
    try {
      observer(invocation);
    } catch {
      // observers must never break cognition
    }
  }
}

export type NoraCognitiveCompletionResult =
  | {
      readonly ok: true;
      readonly text: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
      readonly cognitiveRuntime: "agents";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly providerId: string | null;
      readonly mode: NoraCognitiveCompletionMode;
      readonly cognitiveRuntime: "agents";
    };

/**
 * Shared Agents-backed cognitive execution for both modes.
 * Conversation callers pass through with their full tool/session policy.
 * Post-execution callers get fail-closed defaults (no tools / no MW6 / no Memory B).
 */
export async function runNoraCognitiveCore(
  input: RunNoraAgentsTurnInput & {
    readonly cognitiveMode: NoraCognitiveCompletionMode;
  },
): Promise<Awaited<ReturnType<typeof runNoraAgentsTurn>>> {
  notifyCore({
    mode: input.cognitiveMode,
    correlationId: input.correlationId,
    projectId: input.projectId,
  });

  if (input.cognitiveMode === "post_execution") {
    const hasReviewTools =
      Boolean(input.executionReviewTools?.projectId?.trim()) &&
      Boolean(input.executionReviewTools?.attemptId?.trim());
    return runNoraAgentsTurn({
      ...input,
      // Deep Review: only bounded execution-review tools when bound; never Memory B / hosted search.
      enableTools: hasReviewTools,
      enableHostedWebSearch: false,
      session: null,
      memoryBAvailability: "unavailable",
      cycleJournalTools: null,
      productExecutionTools: null,
      executionReviewTools: hasReviewTools ? input.executionReviewTools : null,
      deterministicHostedWebSearchCalls: undefined,
      campaignBudget: undefined,
      governedAuthority: undefined,
      currentProductContext: undefined,
    });
  }

  return runNoraAgentsTurn(input);
}

/**
 * Post-execution / bounded text completion entry — routes through shared Agents core.
 * Replaces the former provider.complete-only wrapper.
 */
export async function runNoraCognitiveCompletion(input: {
  readonly mode: "post_execution" | "conversation_completion";
  readonly system: string;
  readonly user: string;
  readonly maxChars?: number;
  readonly projectId?: string;
  readonly correlationId?: string;
  /** D-ER-09 — when set, post_execution enables bounded read-only review tools only. */
  readonly executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
}): Promise<NoraCognitiveCompletionResult> {
  const mode: NoraCognitiveCompletionMode =
    input.mode === "conversation_completion" ? "conversation" : "post_execution";
  let providerId: string | null = null;
  try {
    const provider = resolveConversationProvider();
    providerId = provider.providerId;
    const turn = await runNoraCognitiveCore({
      cognitiveMode: mode,
      correlationId:
        input.correlationId?.trim() ||
        `cor:nora-core:${mode}:${Date.now().toString(36)}`,
      projectId: input.projectId?.trim() || "prj:nora-cognitive-core",
      systemInstructions: input.system,
      userContent: input.user,
      provider,
      enableTools: false,
      enableHostedWebSearch: false,
      session: null,
      memoryBAvailability: "unavailable",
      executionReviewTools: input.executionReviewTools ?? null,
    });
    const text = turn.text.trim();
    if (!text) {
      return {
        ok: false,
        code: "NORA_COGNITIVE_COMPLETION_EMPTY",
        message: "Shared Nora Agents cognitive core returned empty text.",
        providerId,
        mode,
        cognitiveRuntime: "agents",
      };
    }
    const max = input.maxChars ?? 4000;
    return {
      ok: true,
      text: text.slice(0, max),
      providerId,
      mode,
      cognitiveRuntime: "agents",
    };
  } catch (err) {
    return {
      ok: false,
      code: "NORA_COGNITIVE_COMPLETION_UNAVAILABLE",
      message: err instanceof Error ? err.message : "cognitive_completion_failed",
      providerId,
      mode,
      cognitiveRuntime: "agents",
    };
  }
}
