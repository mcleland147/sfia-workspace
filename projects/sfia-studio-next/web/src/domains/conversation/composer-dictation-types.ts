/**
 * ML3 — Composer interactive dictation (transcription before USER send).
 * Transport: Studio-controlled OpenAI Realtime transcription WebSocket.
 * Model target: gpt-live-transcribe. No D3 work until explicit send.
 */

export const COMPOSER_DICTATION_SCHEMA = "ml3-composer-dictation-v1";
export const COMPOSER_DICTATION_MODEL = "gpt-live-transcribe";
export const COMPOSER_DICTATION_PCM_RATE = 24000;

/** Product default OFF — admission required; not a production quota. */
export function composerDictationEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_COMPOSER_DICTATION || "").trim() === "1";
}

export type DictationUiState =
  | "idle"
  | "initializing"
  | "listening"
  | "finalizing"
  | "error"
  | "cancelled";

export type DictationSessionStatus =
  | "pending"
  | "open"
  | "finalizing"
  | "completed"
  | "cancelled"
  | "failed"
  | "expired";

export type DictationClientEvent =
  | { type: "session.created"; sessionId: string; model: string }
  | { type: "session.open"; sessionId: string }
  | { type: "transcript.delta"; sessionId: string; itemId: string; delta: string }
  | {
      type: "transcript.completed";
      sessionId: string;
      itemId: string;
      transcript: string;
    }
  | { type: "session.finalized"; sessionId: string; transcript: string; partial: boolean }
  | { type: "session.cancelled"; sessionId: string }
  | { type: "session.error"; sessionId: string; code: string; message: string }
  | { type: "session.expired"; sessionId: string };

export type DictationDraftSnapshot = {
  /** Draft text before this dictation session started. */
  baselineDraft: string;
  /** Cursor / selection when dictation started (best-effort). */
  insertOffset: number | null;
  /** Provisional transcript assembled from deltas (by item). */
  provisionalByItem: Record<string, string>;
  /** Final transcripts by item_id. */
  finalByItem: Record<string, string>;
  /** Hide provisional text in UI without stopping capture. */
  textHidden: boolean;
};

export type DictationLimits = {
  maxDurationMs: number;
  maxInactivityMs: number;
  finalizeTimeoutMs: number;
  maxConcurrentSessionsPerPilot: number;
  maxPcmBytes: number;
};

export const DEFAULT_DICTATION_LIMITS: DictationLimits = {
  maxDurationMs: 10 * 60 * 1000,
  maxInactivityMs: 90 * 1000,
  finalizeTimeoutMs: 15_000,
  maxConcurrentSessionsPerPilot: 1,
  maxPcmBytes: 24_000 * 2 * 60 * 12, // ~12 min mono pcm16 @24kHz
};

/** Technical vocabulary hint for session (not a rewrite instruction). */
export const DICTATION_VOCAB_HINT =
  "SFIA, Studio Next, Nora, Cursor, PostgreSQL, API, Git, macro-lot, FinOps, Realtime";
