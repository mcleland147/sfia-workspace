import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  _resetDictationSessionsForTests,
  appendDictationAudio,
  buildTranscriptionSessionUpdate,
  cancelDictationSession,
  connectTranscriptionSocket,
  createDictationSession,
  describeDictationProviderFailure,
  finalizeDictationSession,
  transcriptionSocketHeaders,
  type RealtimeTransport,
} from "@/domains/conversation/composer-dictation-session";
import { admitDictationProviderEmission } from "@/domains/conversation/composer-dictation-admission";

function delayedCommitTransport(delayMs = 75): {
  transport: RealtimeTransport;
  push: (ev: Record<string, unknown>) => void;
  sent: Record<string, unknown>[];
} {
  let handler: ((ev: Record<string, unknown>) => void) | null = null;
  const sent: Record<string, unknown>[] = [];
  let commitOrdinal = 0;
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
        if (p.type === "input_audio_buffer.commit") {
          commitOrdinal += 1;
          const itemId = `delayed_item_${commitOrdinal}`;
          setTimeout(() => {
            handler?.({
              type: "input_audio_buffer.committed",
              item_id: itemId,
            });
            handler?.({
              type: "conversation.item.input_audio_transcription.completed",
              item_id: itemId,
              transcript: "phrase deux",
            });
          }, delayMs);
        }
      },
      close: () => undefined,
      onEvent: (h) => {
        handler = h;
      },
    },
  };
}

function mockTransport(): {
  transport: RealtimeTransport;
  push: (ev: Record<string, unknown>) => void;
  sent: Record<string, unknown>[];
} {
  let handler: ((ev: Record<string, unknown>) => void) | null = null;
  const sent: Record<string, unknown>[] = [];
  let commitOrdinal = 0;
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
        if (p.type === "input_audio_buffer.commit") {
          commitOrdinal += 1;
          const itemId = `item_commit_${commitOrdinal}`;
          queueMicrotask(() => {
            handler?.({
              type: "input_audio_buffer.committed",
              item_id: itemId,
            });
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
  beforeEach(() => {
    process.env.SFIA_DICTATION_TRANSPORT = "fixture";
  });

  afterEach(() => {
    _resetDictationSessionsForTests();
    delete process.env.SFIA_COMPOSER_DICTATION;
    delete process.env.SFIA_DICTATION_TRANSPORT;
    delete process.env.SFIA_DICTATION_SUBSTITUTED;
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

    const finPromise = finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    await new Promise<void>((r) => queueMicrotask(r));
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_commit_1",
      transcript: "Nora et SFIA",
    });
    const fin = await finPromise;
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
    const skipped = appendDictationAudio({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
      pcmBase64: pcm,
      seq: 2,
    });
    expect(skipped.ok).toBe(false);
    if (!skipped.ok) expect(skipped.code).toBe("SEQ_OUT_OF_ORDER");
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

  it("finalize waits for delayed commit ack and includes all phrases", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = delayedCommitTransport(75);
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
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "phrase_1",
      transcript: "phrase un",
    });
    const pcm = Buffer.alloc(320, 1).toString("base64");
    expect(
      appendDictationAudio({
        sessionId: sid,
        pilotId: "pilot-1",
        projectId: "proj-1",
        pcmBase64: pcm,
      }).ok,
    ).toBe(true);
    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.transcript).toContain("phrase un");
    expect(fin.transcript).toContain("phrase deux");
    expect(fin.partial).toBe(false);
    expect(created.session.status).toBe("completed");
  });

  it("skips empty final commit when no uncommitted pcm", async () => {
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
      type: "input_audio_buffer.committed",
      item_id: "item_done",
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_done",
      transcript: "terminé",
    });
    const commitCountBefore = mock.sent.filter(
      (s) => s.type === "input_audio_buffer.commit",
    ).length;
    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    const commitCountAfter = mock.sent.filter(
      (s) => s.type === "input_audio_buffer.commit",
    ).length;
    expect(commitCountAfter).toBe(commitCountBefore);
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.partial).toBe(false);
    expect(fin.transcript).toContain("terminé");
  });

  it("fixture misconfig fails closed without live fallback", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DICTATION_TRANSPORT = "fixture";
    delete process.env.SFIA_DICTATION_SUBSTITUTED;
    process.env.VITEST = "";
    delete process.env.OPENAI_API_KEY;
    const admission = admitDictationProviderEmission({
      projectId: "p",
      pilotId: "p",
    });
    expect(admission.ok).toBe(false);
    if (admission.ok) return;
    expect(admission.code).toBe("FIXTURE_NOT_ADMITTED");
    const created = await createDictationSession({
      pilotId: "p",
      projectId: "x",
      conversationKey: "x",
      baselineDraft: "",
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("FIXTURE_NOT_ADMITTED");
    process.env.VITEST = "true";
  });

  it("cancel during delayed finalize stays cancelled", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = delayedCommitTransport(120);
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "base",
      transportFactory: async () => mock.transport,
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    const pcm = Buffer.alloc(320, 1).toString("base64");
    appendDictationAudio({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
      pcmBase64: pcm,
    });
    const finPromise = finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    await new Promise((r) => setTimeout(r, 10));
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

  it("finalize timeout with unacked commit marks partial not complete", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = delayedCommitTransport(10_000);
    // Override commit ack: deliberate silence so finalize times out as partial.
    const baseSend = mock.transport.send;
    mock.transport.send = (p) => {
      if (p.type === "input_audio_buffer.commit") return;
      baseSend(p);
    };
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
      limits: { finalizeTimeoutMs: 80 },
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    const pcm = Buffer.alloc(320, 1).toString("base64");
    appendDictationAudio({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
      pcmBase64: pcm,
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "orphan_item",
      transcript: "fragment",
    });
    const fin = await finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.partial).toBe(true);
    expect(fin.transcript).toContain("fragment");
  });

  it("failed final commit with buffered pcm finalizes partial", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    let finalizePhase = false;
    const mock = delayedCommitTransport(50);
    const baseSend = mock.transport.send;
    mock.transport.send = (p) => {
      if (p.type === "input_audio_buffer.commit" && finalizePhase) {
        throw new Error("commit refused");
      }
      baseSend(p);
    };
    const created = await createDictationSession({
      pilotId: "pilot-1",
      projectId: "proj-1",
      conversationKey: "proj-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
      limits: { finalizeTimeoutMs: 80 },
    });
    if (!created.ok) throw new Error("create failed");
    const sid = created.session.sessionId;
    const pcm = Buffer.alloc(320, 1).toString("base64");
    appendDictationAudio({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
      pcmBase64: pcm,
    });
    mock.push({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "item_early",
      transcript: "partie connue",
    });
    appendDictationAudio({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
      pcmBase64: pcm,
    });
    finalizePhase = true;
    const finPromise = finalizeDictationSession({
      sessionId: sid,
      pilotId: "pilot-1",
      projectId: "proj-1",
    });
    const fin = await finPromise;
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.partial).toBe(true);
    expect(fin.transcript).toContain("partie connue");
  });

  it("admits preparation-scoped sessions without project attribution", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const mock = mockTransport();
    const created = await createDictationSession({
      pilotId: "pilot-prep",
      preparationId: "prep-1",
      conversationKey: "prep-1",
      baselineDraft: "",
      transportFactory: async () => mock.transport,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.session.projectId).toBeNull();
    expect(created.session.preparationId).toBe("prep-1");
    const pcm = Buffer.alloc(320, 1).toString("base64");
    const appended = appendDictationAudio({
      sessionId: created.session.sessionId,
      pilotId: "pilot-prep",
      preparationId: "prep-1",
      pcmBase64: pcm,
    });
    expect(appended.ok).toBe(true);
  });

  it("rejects ambiguous dictation scope", async () => {
    const created = await createDictationSession({
      pilotId: "pilot-x",
      projectId: "proj-x",
      preparationId: "prep-x",
      conversationKey: "x",
      baselineDraft: "",
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("INVALID_SCOPE");
  });

  it("incoherent transport env fails closed without implicit live", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DICTATION_TRANSPORT = "bogus";
    process.env.OPENAI_API_KEY = "sk-should-not-be-used";
    const admission = admitDictationProviderEmission({
      projectId: "p",
      pilotId: "p",
    });
    expect(admission.ok).toBe(false);
    if (admission.ok) return;
    expect(admission.code).toBe("TRANSPORT_UNKNOWN");
    const created = await createDictationSession({
      pilotId: "p",
      projectId: "x",
      conversationKey: "x",
      baselineDraft: "",
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("TRANSPORT_UNKNOWN");
  });

  it("MP-06 DET: silent provider ready → SESSION_OPEN_TIMEOUT, transport closed", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    let closed = false;
    let handler: ((ev: Record<string, unknown>) => void) | null = null;
    const silentTransport: RealtimeTransport = {
      // Opens but never emits session.updated (mic-OK then ~10s hang).
      send: () => undefined,
      close: () => {
        closed = true;
      },
      onEvent: (h) => {
        handler = h;
      },
    };
    void handler;
    const created = await createDictationSession({
      pilotId: "pilot-timeout",
      projectId: "proj-timeout",
      conversationKey: "proj-timeout",
      baselineDraft: "",
      transportFactory: async () => silentTransport,
      limits: { maxDurationMs: 60_000 },
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("SESSION_OPEN_TIMEOUT");
    expect(created.message).toBe("SESSION_OPEN_TIMEOUT");
    expect(closed).toBe(true);
  }, 15_000);

  it("E5: provider error before session.updated rejects open wait (no hang)", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    let handler: ((ev: Record<string, unknown>) => void) | null = null;
    const transport: RealtimeTransport = {
      send: (p) => {
        if (p.type === "session.update") {
          queueMicrotask(() => handler?.({ type: "error", message: "handshake rejected" }));
        }
      },
      close: () => undefined,
      onEvent: (h) => {
        handler = h;
      },
    };
    const created = await createDictationSession({
      pilotId: "pilot-pre-ready-err",
      projectId: "proj-pre-ready-err",
      conversationKey: "proj-pre-ready-err",
      baselineDraft: "",
      transportFactory: async () => transport,
      limits: { maxDurationMs: 60_000 },
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("PROVIDER_ERROR");
  }, 5_000);

  it("E5: session.created alone does not open; session.updated required", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const handlerRef: {
      current: ((ev: Record<string, unknown>) => void) | null;
    } = { current: null };
    const transport: RealtimeTransport = {
      send: (p) => {
        if (p.type === "session.update") {
          queueMicrotask(() => handlerRef.current?.({ type: "session.created" }));
        }
      },
      close: () => undefined,
      onEvent: (h) => {
        handlerRef.current = h;
      },
    };
    const createdPromise = createDictationSession({
      pilotId: "pilot-created-only",
      projectId: "proj-created-only",
      conversationKey: "proj-created-only",
      baselineDraft: "",
      transportFactory: async () => transport,
      limits: { finalizeTimeoutMs: 80 },
    });
    await new Promise((r) => setTimeout(r, 30));
    // Still waiting — inject updated to complete successfully after created ignored.
    handlerRef.current?.({ type: "session.updated" });
    const created = await createdPromise;
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.session.status).toBe("open");
    expect(created.session.modelApplied).toBe("UNVERIFIED");
  }, 5_000);

  it("E5: completed before committed during finalize does not hang awaiting", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const handlerRef: {
      current: ((ev: Record<string, unknown>) => void) | null;
    } = { current: null };
    const transport: RealtimeTransport = {
      send: (p) => {
        if (p.type === "session.update") {
          queueMicrotask(() => handlerRef.current?.({ type: "session.updated" }));
        }
        if (p.type === "input_audio_buffer.commit") {
          // Delay committed past an early completed (qualify fixture race).
          setTimeout(() => {
            handlerRef.current?.({
              type: "input_audio_buffer.committed",
              item_id: "early_item",
            });
          }, 40);
        }
      },
      close: () => undefined,
      onEvent: (h) => {
        handlerRef.current = h;
      },
    };
    const created = await createDictationSession({
      pilotId: "pilot-early-complete",
      projectId: "proj-early-complete",
      conversationKey: "proj-early-complete",
      baselineDraft: "Base",
      transportFactory: async () => transport,
      limits: { finalizeTimeoutMs: 500 },
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    appendDictationAudio({
      sessionId: created.session.sessionId,
      pilotId: "pilot-early-complete",
      projectId: "proj-early-complete",
      pcmBase64: Buffer.alloc(320, 1).toString("base64"),
      seq: 0,
    });
    const finPromise = finalizeDictationSession({
      sessionId: created.session.sessionId,
      pilotId: "pilot-early-complete",
      projectId: "proj-early-complete",
    });
    await new Promise((r) => setTimeout(r, 5));
    handlerRef.current?.({
      type: "conversation.item.input_audio_transcription.completed",
      item_id: "early_item",
      transcript: "précoce",
    });
    const fin = await finPromise;
    expect(fin.ok).toBe(true);
    if (!fin.ok) return;
    expect(fin.transcript).toContain("précoce");
  }, 5_000);

  it("fixture transport recovers ready ack queued before onEvent (MP-06 DET)", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DICTATION_TRANSPORT = "fixture";
    process.env.SFIA_DICTATION_SUBSTITUTED = "1";
    const { createFixtureRealtimeTransport } = await import(
      "@/domains/conversation/composer-dictation-transport-fixture"
    );
    // Simulate send-before-onEvent race: fixture must not drop session.updated.
    const transport = createFixtureRealtimeTransport("fixture-race-sid");
    transport.send({ type: "session.update", session: {} });
    let sawReady = false;
    await new Promise<void>((resolve) => {
      transport.onEvent((ev) => {
        if (ev.type === "session.updated") {
          sawReady = true;
          resolve();
        }
      });
      // Fallback if already delivered synchronously via pending queue flush.
      queueMicrotask(() => {
        if (sawReady) resolve();
      });
      setTimeout(() => resolve(), 50);
    });
    expect(sawReady).toBe(true);

    const created = await createDictationSession({
      pilotId: "pilot-fix",
      projectId: "proj-fix",
      conversationKey: "proj-fix",
      baselineDraft: "",
      transportFactory: async ({ sessionId }) =>
        createFixtureRealtimeTransport(sessionId),
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.session.status).toBe("open");
  });
});

describe("GA transcription transport", () => {
  it("builds the transcription session.update used by the live opener", () => {
    const update = buildTranscriptionSessionUpdate() as {
      type: string;
      session: {
        type: string;
        audio: {
          input: {
            format: { type: string; rate: number };
            transcription: { model: string; languages: string[]; language?: string };
            turn_detection: null;
          };
        };
      };
    };
    expect(update.type).toBe("session.update");
    expect(update.session.type).toBe("transcription");
    expect(update.session.audio.input.format).toEqual({ type: "audio/pcm", rate: 24000 });
    expect(update.session.audio.input.transcription.model).toBe("gpt-live-transcribe");
    expect(update.session.audio.input.transcription.languages).toEqual(["fr"]);
    expect(update.session.audio.input.transcription.language).toBeUndefined();
    expect(update.session.audio.input.turn_detection).toBeNull();
    const src = readFileSync(
      join(process.cwd(), "src/domains/conversation/composer-dictation-session.ts"),
      "utf8",
    );
    expect(src).not.toContain("OpenAI-Beta");
    expect(src).toContain("intent=transcription");
    expect(src).toContain("transcriptionSocketHeaders");
  });

  it("sends only the GA authorization header", () => {
    const headers = transcriptionSocketHeaders("sk-test-not-a-secret");
    expect(Object.keys(headers)).toEqual(["Authorization"]);
    expect(headers.Authorization.startsWith("Bearer ")).toBe(true);
    expect(headers["OpenAI-Beta" as keyof typeof headers]).toBeUndefined();
  });

  it("keeps a structured provider error distinct from an empty history", () => {
    const described = describeDictationProviderFailure({
      type: "error",
      error: {
        type: "invalid_request_error",
        code: "invalid_value",
        message: "Unknown parameter: session.audio.input.language",
        param: "session.audio.input.transcription.languages",
      },
    });
    expect(described.code).toBe("SESSION_PARAMETER_INVALID");
    expect(described.parameter).toBe("session.audio.input.transcription.languages");
    expect(described.message).not.toContain("[object Object]");
    expect(described.message).toContain("Unknown parameter");
  });

  it("closes the socket when the upgrade times out", async () => {
    let closed = false;
    const listeners = new Map<string, Array<(...args: unknown[]) => void>>();
    const ws = {
      readyState: 0,
      send: () => undefined,
      close: () => {
        closed = true;
        ws.readyState = 3;
      },
      once: (event: string, cb: (...args: unknown[]) => void) => {
        const list = listeners.get(event) ?? [];
        list.push(cb);
        listeners.set(event, list);
      },
      on: (event: string, cb: (...args: unknown[]) => void) => {
        const list = listeners.get(event) ?? [];
        list.push(cb);
        listeners.set(event, list);
      },
    };
    await expect(connectTranscriptionSocket(ws, 20)).rejects.toMatchObject({
      code: "REALTIME_OPEN_TIMEOUT",
    });
    expect(closed).toBe(true);
  });

  it("classifies an HTTP 401 upgrade without keeping the socket", async () => {
    const listeners = new Map<string, Array<(...args: unknown[]) => void>>();
    let closed = false;
    const ws = {
      readyState: 0,
      send: () => undefined,
      close: () => {
        closed = true;
      },
      once: (event: string, cb: (...args: unknown[]) => void) => {
        const list = listeners.get(event) ?? [];
        list.push(cb);
        listeners.set(event, list);
        if (event === "error") {
          queueMicrotask(() => cb(new Error("Unexpected server response: 401")));
        }
      },
      on: () => undefined,
    };
    await expect(connectTranscriptionSocket(ws, 1_000)).rejects.toMatchObject({
      code: "AUTHENTICATION",
      httpStatus: 401,
    });
    expect(closed).toBe(true);
  });
});

describe("dictation transport lifecycle", () => {
  beforeEach(() => {
    _resetDictationSessionsForTests();
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_DICTATION_TRANSPORT = "fixture";
    process.env.VITEST = "true";
  });

  afterEach(() => {
    _resetDictationSessionsForTests();
  });

  it("fails an open session when the socket closes and ignores a later transcript", async () => {
    let lifecycle: ((event: { code: string; message: string }) => void) | null = null;
    let handler: ((event: Record<string, unknown>) => void) | null = null;
    const transport: RealtimeTransport = {
      send: (payload) => {
        if (payload.type === "session.update") {
          queueMicrotask(() => handler?.({ type: "session.updated" }));
        }
      },
      close: () => undefined,
      onEvent: (next) => {
        handler = next;
      },
      onLifecycle: (next) => {
        lifecycle = next;
      },
    };
    const created = await createDictationSession({
      pilotId: "pilot-close",
      projectId: "proj-close",
      conversationKey: "proj-close",
      baselineDraft: "brouillon",
      transportFactory: async () => transport,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    lifecycle?.({ code: "TRANSPORT_CLOSED", message: "socket closed" });
    expect(created.session.status).toBe("failed");
    expect(created.session.errorCode).toBe("TRANSPORT_CLOSED");
    handler?.({
      type: "conversation.item.input_audio_transcription.delta",
      item_id: "late",
      delta: "tardif",
    });
    expect(created.session.draft.provisionalByItem.late).toBeUndefined();
    lifecycle?.({ code: "TRANSPORT_CLOSED", message: "again" });
    expect(created.session.status).toBe("failed");
  });

  it("returns a structured provider code when session.update is rejected", async () => {
    const transport: RealtimeTransport = {
      send: (payload) => {
        if (payload.type === "session.update") {
          queueMicrotask(() =>
            handler?.({
              type: "error",
              error: {
                type: "invalid_request_error",
                code: "invalid_value",
                message: "Unsupported language",
                param: "session.audio.input.transcription.languages",
              },
            }),
          );
        }
      },
      close: () => undefined,
      onEvent: (next) => {
        handler = next;
      },
    };
    let handler: ((event: Record<string, unknown>) => void) | null = null;
    const created = await createDictationSession({
      pilotId: "pilot-param",
      projectId: "proj-param",
      conversationKey: "proj-param",
      baselineDraft: "",
      transportFactory: async () => transport,
    });
    expect(created.ok).toBe(false);
    if (created.ok) return;
    expect(created.code).toBe("SESSION_PARAMETER_INVALID");
    expect(created.message).not.toContain("[object Object]");
  });
});
