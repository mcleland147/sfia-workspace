/**
 * Substituted Realtime transport for DEV / Vitest — no live WebSocket.
 */
import type { RealtimeTransport } from "./composer-dictation-session";

export type DictationFixtureHandle = {
  push: (ev: Record<string, unknown>) => void;
  sent: Record<string, unknown>[];
};

const fixtureRegistry = new Map<string, DictationFixtureHandle>();

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
  const handle: DictationFixtureHandle = {
    sent,
    push: (ev) => handler?.(ev),
  };
  fixtureRegistry.set(sessionId, handle);
  let commitOrdinal = 0;
  return {
    send: (p) => {
      sent.push(p);
      if (p.type === "session.update") {
        queueMicrotask(() => {
          handler?.({ type: "session.updated" });
        });
      }
      // Simulate provider item creation after buffer commit (turn_detection: null).
      if (p.type === "input_audio_buffer.commit") {
        commitOrdinal += 1;
        const itemId = `fixture_item_${commitOrdinal}`;
        queueMicrotask(() => {
          handler?.({
            type: "input_audio_buffer.committed",
            item_id: itemId,
          });
        });
      }
    },
    close: () => {
      fixtureRegistry.delete(sessionId);
    },
    onEvent: (h) => {
      handler = h;
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