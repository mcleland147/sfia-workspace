import { afterEach, describe, expect, it } from "vitest";
import {
  _resetDictationSessionsForTests,
  appendDictationAudio,
  cancelDictationSession,
  createDictationSession,
  finalizeDictationSession,
  type RealtimeTransport,
} from "@/domains/conversation/composer-dictation-session";

function mockTransport(): {
  transport: RealtimeTransport;
  push: (ev: Record<string, unknown>) => void;
  sent: Record<string, unknown>[];
} {
  let handler: ((ev: Record<string, unknown>) => void) | null = null;
  const sent: Record<string, unknown>[] = [];
  return {
    sent,
    push: (ev) => handler?.(ev),
    transport: {
      send: (p) => {
        sent.push(p);
        if (p.type === "session.update") {
          queueMicrotask(() => {
            handler?.({ type: "session.updated" });
          });
        }
      },
      close: () => undefined,
      onEvent: (h) => {
        handler = h;
      },
    },
  };
}

describe("ml3 composer dictation session (substituted transport)", () => {
  afterEach(() => {
    _resetDictationSessionsForTests();
    delete process.env.SFIA_COMPOSER_DICTATION;
  });

  it("streams deltas then finalizes into draft without D3 side-effects", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "Préface",
      insertOffset: 7,
      transportFactory: async () => mock.transport,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const sid = created.session.sessionId;

    const pcm = Buffer.alloc(320, 1).toString("base64");
    expect(
      appendDictationAudio({
        sessionId: sid,
        pilotId: "pilot-1",
        projectId: "proj-1",
        pcmBase64: pcm,
      }).ok,
    ).toBe(true);
    expect(mock.sent.some((s) => s.type === "input_audio_buffer.append")).toBe(
      true,
    );

    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_1",
      delta: " Nora",
    });
    mock.push({
      type: "input_audio_buffer.committed",
      item_id: "item_1",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_1",
      transcript: "Nora et SFIA",
    });

    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.transcript).toContain("Nora");
    expect(fin.draft.startsWith("Préface")).toBe(true);
  });

  it("cancel restores baseline and ignores late deltas", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "gardé",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "x",
      delta: "temp",
    });
    const cancelled = cancelDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.draft).toBe("gardé");
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "x",
      delta: "LATE",
    });
    expect(created.session.draft.provisionalByItem.x || "").not.toContain("LATE");
  });

  it("refuses when flag off", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "0";
    const created = await createDictationSession({
      pilotId: "p",
      projectId: "x",
      conversationKey: "x",
      baselineDraft: "",
      transportFactory: async () => mockTransport().transport,
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("FLAG_OFF");
  });

  it("cancel during open returns CANCELLED_DURING_OPEN and closes transport", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    let closed = false;
    let resolveTransport: (t: RealtimeTransport) => void = () => undefined;
    const transportGate = new Promise<RealtimeTransport>((resolve) => {
      resolveTransport = resolve;
    });
    let capturedSessionId = "";
    const createPromise = createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "base",
      transportFactory: async (input) => {
        capturedSessionId = input.sessionId;
        return transportGate;
      },
    });
    await new Promise((r) => setTimeout(r, 5));
    expect(capturedSessionId.length).toBeGreaterThan(0);
    cancelDictationSession({
      sessionId: capturedSessionId,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    resolveTransport({
      send: () => undefined,
      close: () => {
        closed = true;
      },
      onEvent: () => undefined,
    });
    const created = await createPromise;
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("CANCELLED_DURING_OPEN");
    expect(closed).toBe(true);
  });

  it("session.update uses languages fr array not language", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    const update = mock.sent.find((s) => s.type === "session.update") as
      | {
          session?: {
            audio?: { input?: { transcription?: { languages?: string[]; language?: string } } };
          };
        }
      | undefined;
    expect(update?.session?.audio?.input?.transcription?.languages).toEqual(["fr"]);
    expect(update?.session?.audio?.input?.transcription?.language).toBeUndefined();
  });

  it("accepts 0-based audio seq and rejects skip", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    const pcm = Buffer.alloc(320, 1).toString("base64");
    expect(
      appendDictationAudio({
        sessionId: sid,
        pilotId: "pilot-1",
        projectId: "proj-1",
        pcmBase64: pcm,
        seq: 0,
      }).ok,
    ).toBe(true);
    expect(
      appendDictationAudio({
        sessionId: sid,
        pilotId: "pilot-1",
        projectId: "proj-1",
        pcmBase64: pcm,
        seq: 2,
      }).code,
    ).toBe("SEQ_OUT_OF_ORDER");
  });

  it("accepts client enqueue order seq 0 then 1", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    const pcm = Buffer.alloc(320, 1).toString("base64");
    for (const seq of [0, 1]) {
      expect(
        appendDictationAudio({
          sessionId: sid,
          pilotId: "pilot-1",
          projectId: "proj-1",
          pcmBase64: pcm,
          seq,
        }).ok,
      ).toBe(true);
    }
  });

  it("cancelled session cannot finalize to completed", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "gardé",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    expect(
      cancelDictationSession({
        sessionId: sid,
        pilotId: "pilot-1",
        projectId: "proj-1",
      }).ok,
    ).toBe(true);
    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(fin.ok).toBe(false);
    if (fin.ok) return;
    expect(fin.code).toBe("CANCELLED");
    expect(created.session.status).toBe("cancelled");
  });

  it("assembles transcript by first-seen item order when item_2 arrives before item_1 completes", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_2",
      delta: "deuxième",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_2",
      transcript: "segment deux",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_1",
      delta: "premier",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_1",
      transcript: "segment un",
    });
    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.transcript).toBe("segment deux segment un");
    expect(created.session.draft.itemOrder).toEqual(["item_2", "item_1"]);
  });

  it("cancel during finalizing keeps cancelled status", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "base",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    mock.push({
      type: "input_audio_buffer.committed",
      item_id: "item_wait",
    });
    const finPromise = finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    await new Promise((r) => setTimeout(r, 5));
    expect(created.session.status).toBe("finalizing");
    cancelDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    const fin = await finPromise;
    expect(fin.ok).toBe(false);
    if (fin.ok) return;
    expect(fin.code).toBe("CANCELLED");
    expect(created.session.status).toBe("cancelled");
    expect(fin.draft).toBe("base");
  });

  it("finalize waits for all provisionals before complete", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_a",
      delta: "en cours",
    });
    mock.push({
      type: "input_audio_buffer.committed",
      item_id: "item_a",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_a",
      transcript: "segment A",
    });
    mock.push({
      type: "input_audio_buffer.committed",
      item_id: "item_b",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "item_b",
      delta: "provisoire",
    });
    const finPromise = finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    await new Promise((r) => setTimeout(r, 10));
    expect(created.session.status).toBe("finalizing");
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_b",
      transcript: "segment B",
    });
    const fin = await finPromise;
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.transcript).toContain("segment A");
    expect(fin.transcript).toContain("segment B");
    expect(created.session.status).toBe("completed");
  });
});
