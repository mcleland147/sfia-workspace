/**
 * Nora Option C cognitive runtime — types.
 * Session is conversational continuity only — never Truth C / LPS / HD.
 * Single Runner path after legacy Nora runtime retirement.
 */

/** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
export type NoraCognitiveRuntimeKind = "agents";

export type NoraCognitiveTurnResult = {
  text: string;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
    model: string | null;
    providerResponseId: string | null;
  };
  toolRounds: number;
  toolCalls: number;
  limitReached: boolean;
  /** Always "agents" after Nora legacy retirement (honest observability). */
  cognitiveRuntime: NoraCognitiveRuntimeKind;
  sessionId: string | null;
};
