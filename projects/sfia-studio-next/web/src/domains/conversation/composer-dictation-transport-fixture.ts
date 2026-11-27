/**
 * Substituted Realtime transport for DEV / Vitest — no live WebSocket.
 */
import type { RealtimeTransport } from "./composer-dictation-session";

export type DictationFixtureHandle = {
  push: (ev: Record<string, unknown>) => void;
  sent: Record<string, unknown>[];
};

const fixtureRegistry = new Map<string, DictationFixtureHandle>();

const AUTO_TRANSCRIPT_PHRASES = [
  "Première phrase dictée.",
  " Deuxième phrase dictée.",
  " Troisième phrase dictée.",
] as const;

function fixtureAutoTranscriptEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return (env.SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT || "").trim() === "1";
}

function parseFixtureDelayMs(
  raw: string,
  fallback = 0,
): number {
  const trimmed = raw.trim();
  if (!trimmed) return fallback;
  return Math.max(0, Number(trimmed) || fallback);
}

export function getDictationFixtureTransport(
  sessionId: string,
): DictationFixtureHandle | undefined {
  return fixtureRegistry.get(sessionId);
}

export function _resetDictationFixtureRegistry(): void {
  fixtureRegistry.clear();
}

export function createFixtureRealtimeTransport(sessionId: string): RealtimeTransport {
  let handler: ((ev: Record<string, unknown>) => void) | null = null;
  const sent: Record<string, unknown>[] = [];
  /** Queued until onEvent registers — avoids lost session.updated (MP-06 DET). */
  let pendingReady: Record<string, unknown> | null = null;
  const handle: DictationFixtureHandle = {
    sent,
    push: (ev) => handler?.(ev),
  };
  fixtureRegistry.set(sessionId, handle);
  let commitOrdinal = 0;
  const emitOrQueue = (ev: Record<string, unknown>) => {
    if (handler) {
      handler(ev);
      return;
    }
    if (ev.type === "session.updated" || ev.type === "session.created") {
      pendingReady = ev;
    }
  };
  return {
    send: (p) => {
      sent.push(p);
      if (p.type === "session.update") {
        // Deterministic ready ack — never rely on live provider timing in fixture.
        queueMicrotask(() => {
          emitOrQueue({ type: "session.updated" });
        });
      }
      // Simulate provider item creation after buffer commit (turn_detection: null).
      if (p.type === "input_audio_buffer.commit") {
        commitOrdinal += 1;
        const itemId = `fixture_item_${commitOrdinal}`;
        const commitDelayMs = parseFixtureDelayMs(
          process.env.SFIA_DICTATION_FIXTURE_COMMIT_DELAY_MS || "",
        );
        const completeDelayMs = parseFixtureDelayMs(
          process.env.SFIA_DICTATION_FIXTURE_COMPLETE_DELAY_MS || "",
        );
        const emitCommitted = () => {
          handler?.({
            type: "input_audio_buffer.committed",
            item_id: itemId,
          });
          if (!fixtureAutoTranscriptEnabled()) return;
          const phrase =
            AUTO_TRANSCRIPT_PHRASES[(commitOrdinal - 1) % AUTO_TRANSCRIPT_PHRASES.length]!;
          const emitDelta = () => {
            handler?.({
              type: "conversation.item.input_audio_transcription.delta",
              item_id: itemId,
              delta: phrase,
            });
          };
          const emitCompleted = () => {
            handler?.({
              type: "conversation.item.input_audio_transcription.completed",
              item_id: itemId,
              transcript: phrase.trim(),
            });
          };
          if (completeDelayMs > 0) {
            queueMicrotask(emitDelta);
            setTimeout(emitCompleted, completeDelayMs);
          } else {
            queueMicrotask(() => {
              emitDelta();
              emitCompleted();
            });
          }
        };
        if (commitDelayMs > 0) {
          setTimeout(emitCommitted, commitDelayMs);
        } else {
          queueMicrotask(emitCommitted);
        }
      }
    },
    close: () => {
      // Keep handle for DEV fixture-push (late events after cancel — C03).
      // Drop further ready acks; late commit/transcript still pushable via registry.
      pendingReady = null;
    },
    onEvent: (h) => {
      handler = h;
      if (pendingReady) {
        const ready = pendingReady;
        pendingReady = null;
        queueMicrotask(() => handler?.(ready));
      }
    },
  };
}

export type RealtimeTransportFactory = (input: {
  sessionId: string;
  model: string;
  apiKey: string;
}) => Promise<RealtimeTransport>;

export function resolveDictationTransportFactory(
  env: NodeJS.ProcessEnv = process.env,
): RealtimeTransportFactory | undefined {
  if ((env.SFIA_DICTATION_TRANSPORT || "").trim() !== "fixture") return undefined;
  const vitest = env.VITEST === "true";
  const qual =
    (env.SFIA_DICTATION_SUBSTITUTED || "").trim() === "1" &&
    (env.STUDIO_LANE || "").trim() === "DEV";
  if (!vitest && !qual) return undefined;
  return async ({ sessionId }) => createFixtureRealtimeTransport(sessionId);
}