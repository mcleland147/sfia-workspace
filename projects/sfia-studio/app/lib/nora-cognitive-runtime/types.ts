/**
 * Nora Option C cognitive runtime — types.
 * Session is conversational continuity only — never Truth C / LPS / HD.
 * Single Runner path after legacy Nora runtime retirement.
 */

import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
import type { ContradictionDispositionResult } from "./contradictionDisposition";
import type { CognitiveStopDecision } from "./cognitiveStop";
import type { MemoryBAvailability } from "./memoryBAvailability";
import type {
  MemoryBCompactionDetails,
  MemoryBCompactionState,
  TruthCRevision,
} from "./memoryBCompaction";
import type { Mw4GroundingTurnSurface } from "./groundingDurability";

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
  /** MW1-S01 — honest Memory B availability for this turn. */
  memoryBAvailability: MemoryBAvailability;
  /** MW1-S02 — compaction / stale state for this turn. */
  memoryBCompactionState: MemoryBCompactionState;
  /** MW1-S02 — optional compaction details when relevant. */
  memoryBCompactionDetails: MemoryBCompactionDetails | null;
  /** MW2-S01 — internal strategy telemetry (not Pilote authority). */
  cognitiveStrategyClass?: CognitiveStrategyClass;
  selectedReasoningEffort?: OpenAiReasoningEffort;
  criticalChallengeArmed?: boolean;
  /** MW3 — present only when contradictionAssessment was supplied. */
  contradictionDisposition?: ContradictionDispositionResult;
  /** MW3 — present only when contradictionAssessment was supplied. */
  cognitiveStopDecision?: CognitiveStopDecision;
  /** MW4 — grounding durability surface when Session refs were assessed. */
  mw4Grounding?: Mw4GroundingTurnSurface;
};

export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
