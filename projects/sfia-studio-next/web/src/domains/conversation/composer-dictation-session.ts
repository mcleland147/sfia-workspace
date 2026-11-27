/**
 * In-memory dictation sessions — Studio-controlled Realtime transcription.
 * No durable audio storage. No D3 work creation.
 */
import { randomUUID } from "node:crypto";
import {
  COMPOSER_DICTATION_MODEL,
  COMPOSER_DICTATION_PCM_RATE,
  COMPOSER_DICTATION_SCHEMA,
  DEFAULT_DICTATION_LIMITS,
  DICTATION_VOCAB_HINT,
  type DictationClientEvent,
  type DictationDraftSnapshot,
  type DictationLimits,
  type DictationSessionStatus,
} from "./composer-dictation-types";
import {
  applyTranscriptCompleted,
  applyTranscriptDelta,
  assembleDictationTranscript,
  createDictationDraftSnapshot,
  mergeDictationIntoDraft,
} from "./composer-dictation-reducer";

export type RealtimeTransport = {
  send: (payload: Record<string, unknown>) => void;
  close: () => void;
  /** Register handler for provider JSON events. */
  onEvent: (handler: (event: Record<string, unknown>) => void) => void;
};

export type RealtimeTransportFactory = (input: {
  sessionId: string;
  model: string;
  apiKey: string;
}) => Promise<RealtimeTransport>;

export type DictationSessionRecord = {
  sessionId: string;
  schema: typeof COMPOSER_DICTATION_SCHEMA;
  pilotId: string;
  projectId: string;
  conversationKey: string;
  status: DictationSessionStatus;
  modelRequested: string;
  modelApplied: string | null;
  createdAtMs: number;
  lastActivityAtMs: number;
  pcmBytes: number;
  draft: DictationDraftSnapshot;
  emissionAttemptId: string;
  finopsRecorded: boolean;
  listeners: Set<(ev: DictationClientEvent) => void>;
  transport: RealtimeTransport | null;
  pendingItemId: string | null;
  limits: DictationLimits;
  errorCode: string | null;
  /** Next expected client audio chunk sequence (0-based). */
  nextAudioSeq: number;
  onProviderSessionReady: (() => void) | null;
  /** Committed item_ids not yet completed — finalize waits until empty. */
  awaitingFinalItemIds: Set<string>;
  /** Commits sent to provider, not yet acknowledged via input_audio_buffer.committed. */
  commitsAwaitingAck: number;
  /** Bytes buffered since last provider commit while listening. */
  pcmBytesSinceLastCommit: number;
  finopsPersistFailed: boolean;
  emissionMode: "live" | "substituted";
  effectClass: "provider_live" | "substituted";
  admissionLane: string;
  keyFingerprint: string | null;
};

export { resolveDictationTransportFactory } from "./composer-dictation-transport-fixture";

const sessions = new Map<string, DictationSessionRecord>();
const TERMINAL_GC_MS = 2 * 60 * 1000;
const SESSION_GC_INTERVAL_MS = 5_000;
const SESSION_OPEN_TIMEOUT_MS = 10_000;
/** ~2s mono PCM16 @ 24 kHz — periodic commit while listening. */
const DEFAULT_AUTO_COMMIT_PCM_BYTES = 96_000;

function autoCommitPcmBytes(env: NodeJS.ProcessEnv = process.env): number {
  const raw = (env.SFIA_DICTATION_AUTO_COMMIT_PCM_BYTES || "").trim();
  if (raw) {
    const n = Number(raw);
    if (Number.isFinite(n) && n >= 320) return Math.floor(n);
  }
  // Fixture auto-transcript: shorter threshold so headless capture still commits.
  if ((env.SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT || "").trim() === "1") {
    return 8_000;
  }
  return DEFAULT_AUTO_COMMIT_PCM_BYTES;
}

function isTerminalStatus(status: DictationSessionStatus): boolean {
  return (
    status === "cancelled" ||
    status === "completed" ||
    status === "failed" ||
    status === "expired"
  );
}

function runDictationSessionGc(now = Date.now()): void {
  for (const [sessionId, session] of sessions) {
    expireIfNeeded(session, now);
    if (isTerminalStatus(session.status) && now - session.lastActivityAtMs > TERMINAL_GC_MS) {
      sessions.delete(sessionId);
    }
  }
}

if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => runDictationSessionGc(), SESSION_GC_INTERVAL_MS);
  if (typeof timer === "object" && timer && "unref" in timer) {
    timer.unref();
  }
}

export function _resetDictationSessionsForTests(): void {
  for (const s of sessions.values()) {
    try {
      s.transport?.close();
    } catch {
      /* ignore */
    }
  }
  sessions.clear();
  void import("./composer-dictation-transport-fixture").then((m) =>
    m._resetDictationFixtureRegistry(),
  );
}

export function getDictationSession(sessionId: string): DictationSessionRecord | null {
  return sessions.get(sessionId) ?? null;
}

function emit(session: DictationSessionRecord, ev: DictationClientEvent): void {
  for (const l of session.listeners) {
    try {
      l(ev);
    } catch {
      /* listener isolation */
    }
  }
}

function touch(session: DictationSessionRecord): void {
  session.lastActivityAtMs = Date.now();
}

function expireIfNeeded(session: DictationSessionRecord, now = Date.now()): boolean {
  if (
    session.status === "cancelled" ||
    session.status === "completed" ||
    session.status === "failed" ||
    session.status === "expired"
  ) {
    return false;
  }
  const age = now - session.createdAtMs;
  const idle = now - session.lastActivityAtMs;
  if (age > session.limits.maxDurationMs || idle > session.limits.maxInactivityMs) {
    session.status = "expired";
    try {
      session.transport?.close();
    } catch {
      /* */
    }
    session.transport = null;
    emit(session, { type: "session.expired", sessionId: session.sessionId });
    void recordDictationFinops(session, "expired");
    return true;
  }
  return false;
}

export async function createDictationSession(input: {
  pilotId: string;
  projectId: string;
  conversationKey: string;
  baselineDraft: string;
  insertOffset?: number | null;
  transportFactory?: RealtimeTransportFactory;
  limits?: Partial<DictationLimits>;
  env?: NodeJS.ProcessEnv;
}): Promise<
  | { ok: true; session: DictationSessionRecord }
  | { ok: false; code: string; message: string }
> {
  const env = input.env ?? process.env;
  const { admitDictationProviderEmission } = await import(
    "./composer-dictation-admission"
  );
  const admission = admitDictationProviderEmission({
    env,
    projectId: input.projectId,
    pilotId: input.pilotId,
  });
  if (!admission.ok) {
    return { ok: false, code: admission.code, message: admission.message };
  }
  const apiKey = (env.OPENAI_API_KEY || "").trim();
  const { resolveDictationTransportFactory } = await import(
    "./composer-dictation-transport-fixture"
  );
  let factory = input.transportFactory;
  if (admission.mode === "substituted") {
    factory = factory ?? resolveDictationTransportFactory(env);
    if (!factory) {
      return {
        ok: false,
        code: "SUBSTITUTED_TRANSPORT_MISSING",
        message: "Substituted dictation admission without transport factory.",
      };
    }
  }

  const limits = { ...DEFAULT_DICTATION_LIMITS, ...input.limits };
  let openCount = 0;
  for (const s of sessions.values()) {
    if (
      s.pilotId === input.pilotId &&
      (s.status === "pending" || s.status === "open" || s.status === "finalizing")
    ) {
      openCount += 1;
    }
  }
  if (openCount >= limits.maxConcurrentSessionsPerPilot) {
    return {
      ok: false,
      code: "CONCURRENCY_LIMIT",
      message: "A dictation session is already active.",
    };
  }

  const sessionId = randomUUID();
  const emissionAttemptId = randomUUID();
  const now = Date.now();
  const record: DictationSessionRecord = {
    sessionId,
    schema: COMPOSER_DICTATION_SCHEMA,
    pilotId: input.pilotId,
    projectId: input.projectId,
    conversationKey: input.conversationKey,
    status: "pending",
    modelRequested: COMPOSER_DICTATION_MODEL,
    modelApplied: null,
    createdAtMs: now,
    lastActivityAtMs: now,
    pcmBytes: 0,
    draft: createDictationDraftSnapshot({
      baselineDraft: input.baselineDraft,
      insertOffset: input.insertOffset,
    }),
    emissionAttemptId,
    finopsRecorded: false,
    listeners: new Set(),
    transport: null,
    pendingItemId: null,
    limits,
    errorCode: null,
    nextAudioSeq: 0,
    onProviderSessionReady: null,
    awaitingFinalItemIds: new Set(),
    commitsAwaitingAck: 0,
    pcmBytesSinceLastCommit: 0,
    finopsPersistFailed: false,
    emissionMode: admission.mode,
    effectClass: admission.effectClass,
    admissionLane: admission.lane,
    keyFingerprint: admission.keyFingerprint,
  };
  sessions.set(sessionId, record);
  emit(record, {
    type: "session.created",
    sessionId,
    model: COMPOSER_DICTATION_MODEL,
  });

  try {
    const transport = factory
      ? await factory({
          sessionId,
          model: COMPOSER_DICTATION_MODEL,
          apiKey: apiKey || "test-key",
        })
      : await openOpenAiTranscriptionTransport({
          sessionId,
          model: COMPOSER_DICTATION_MODEL,
          apiKey,
        });
    if (record.status === "cancelled") {
      try {
        transport.close();
      } catch {
        /* */
      }
      record.status = "failed";
      record.errorCode = "CANCELLED_DURING_OPEN";
      return {
        ok: false,
        code: "CANCELLED_DURING_OPEN",
        message: "Dictation session cancelled during transport open.",
      };
    }
    record.transport = transport;
    transport.onEvent((event) => handleProviderEvent(record, event));
    const sessionReady = new Promise<void>((resolve, reject) => {
      const t = setTimeout(() => {
        record.onProviderSessionReady = null;
        reject(new Error("SESSION_OPEN_TIMEOUT"));
      }, SESSION_OPEN_TIMEOUT_MS);
      record.onProviderSessionReady = () => {
        clearTimeout(t);
        record.onProviderSessionReady = null;
        resolve();
      };
    });
    transport.send({
      type: "session.update",
      session: {
        type: "transcription",
        audio: {
          input: {
            format: { type: "audio/pcm", rate: COMPOSER_DICTATION_PCM_RATE },
            transcription: {
              model: COMPOSER_DICTATION_MODEL,
              languages: ["fr"],
              prompt: DICTATION_VOCAB_HINT,
            },
            turn_detection: null,
          },
        },
      },
    });
    await sessionReady;
    record.status = "open";
    record.modelApplied = COMPOSER_DICTATION_MODEL;
    emit(record, { type: "session.open", sessionId });
    return { ok: true, session: record };
  } catch (e) {
    record.status = "failed";
    record.errorCode = "TRANSPORT_OPEN_FAILED";
    const message = e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
    emit(record, {
      type: "session.error",
      sessionId,
      code: "TRANSPORT_OPEN_FAILED",
      message,
    });
    void recordDictationFinops(record, "failed");
    return { ok: false, code: "TRANSPORT_OPEN_FAILED", message };
  }
}

function handleProviderEvent(
  session: DictationSessionRecord,
  event: Record<string, unknown>,
): void {
  if (expireIfNeeded(session)) return;
  const type = String(event.type || "");
  touch(session);

  if (type === "session.updated" || type === "session.created") {
    session.onProviderSessionReady?.();
    return;
  }

  if (type === "input_audio_buffer.committed") {
    session.commitsAwaitingAck = Math.max(0, session.commitsAwaitingAck - 1);
    const itemId = String(event.item_id || "");
    if (itemId) {
      session.pendingItemId = itemId;
      session.awaitingFinalItemIds.add(itemId);
    }
    if (session.status === "finalizing") {
      maybeCompleteFinalization(session);
    }
    return;
  }
  if (type === "conversation.item.input_audio_transcription.delta") {
    const itemId = String(event.item_id || session.pendingItemId || "");
    const delta = String(event.delta || "");
    if (!itemId || !delta) return;
    if (
      session.status === "cancelled" ||
      session.status === "completed" ||
      session.status === "failed" ||
      session.status === "expired"
    ) {
      return;
    }
    session.draft = applyTranscriptDelta(session.draft, itemId, delta);
    emit(session, {
      type: "transcript.delta",
      sessionId: session.sessionId,
      itemId,
      delta,
    });
    return;
  }
  if (type === "conversation.item.input_audio_transcription.completed") {
    const itemId = String(event.item_id || "");
    const transcript = String(event.transcript || "");
    if (!itemId) return;
    if (
      session.status === "cancelled" ||
      session.status === "completed" ||
      session.status === "failed" ||
      session.status === "expired"
    ) {
      return;
    }
    session.draft = applyTranscriptCompleted(session.draft, itemId, transcript);
    session.awaitingFinalItemIds.delete(itemId);
    emit(session, {
      type: "transcript.completed",
      sessionId: session.sessionId,
      itemId,
      transcript,
    });
    if (session.status === "finalizing") {
      maybeCompleteFinalization(session);
    }
    return;
  }
  if (type === "error" || type === "conversation.item.input_audio_transcription.failed") {
    session.status = "failed";
    session.errorCode = "PROVIDER_ERROR";
    emit(session, {
      type: "session.error",
      sessionId: session.sessionId,
      code: "PROVIDER_ERROR",
      message: String(event.error ?? event.message ?? "transcription failed").slice(0, 240),
    });
    try {
      session.transport?.close();
    } catch {
      /* */
    }
    session.transport = null;
    void recordDictationFinops(session, "failed");
  }
}

function maybeCompleteFinalization(session: DictationSessionRecord): void {
  if (isTerminalStatus(session.status) || session.status !== "finalizing") {
    return;
  }
  if (session.commitsAwaitingAck > 0) {
    return;
  }
  if (session.awaitingFinalItemIds.size > 0) {
    return;
  }
  if (Object.keys(session.draft.provisionalByItem).length > 0) {
    return;
  }
  completeFinalization(session, { partial: false });
}

function shouldSendAudioCommit(
  session: DictationSessionRecord,
  opts: { finalize?: boolean },
): boolean {
  if (session.pcmBytesSinceLastCommit > 0) return true;
  if (!opts.finalize) return false;
  const hasTranscriptItems =
    Object.keys(session.draft.finalByItem).length > 0 ||
    Object.keys(session.draft.provisionalByItem).length > 0 ||
    session.awaitingFinalItemIds.size > 0 ||
    session.commitsAwaitingAck > 0;
  return session.pcmBytes > 0 && !hasTranscriptItems;
}

function sendAudioCommit(
  session: DictationSessionRecord,
  opts: { finalize?: boolean } = {},
): boolean {
  if (!session.transport) return false;
  if (!shouldSendAudioCommit(session, opts)) {
    return false;
  }
  try {
    session.transport.send({ type: "input_audio_buffer.commit" });
    session.commitsAwaitingAck += 1;
    session.pcmBytesSinceLastCommit = 0;
    return true;
  } catch {
    return false;
  }
}

function completeFinalization(
  session: DictationSessionRecord,
  input: { partial: boolean; force?: boolean },
): void {
  if (isTerminalStatus(session.status)) {
    return;
  }
  const transcript = assembleDictationTranscript(session.draft);
  const hasFinal = Object.keys(session.draft.finalByItem).length > 0;
  const partial = input.partial || !hasFinal;
  const mergeMode = partial ? "partial" : "finalize";
  session.status = "completed";
  const merged = mergeDictationIntoDraft(session.draft, mergeMode);
  emit(session, {
    type: "session.finalized",
    sessionId: session.sessionId,
    transcript: merged.transcript || transcript,
    partial,
  });
  try {
    session.transport?.close();
  } catch {
    /* */
  }
  session.transport = null;
  void recordDictationFinops(session, partial ? "partial" : "succeeded");
}

export function appendDictationAudio(input: {
  sessionId: string;
  pilotId: string;
  projectId: string;
  pcmBase64: string;
  seq?: number;
}): { ok: true } | { ok: false; code: string } {
  const session = sessions.get(input.sessionId);
  if (!session) return { ok: false, code: "NOT_FOUND" };
  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
    return { ok: false, code: "FORBIDDEN" };
  }
  if (expireIfNeeded(session)) return { ok: false, code: "EXPIRED" };
  if (session.status !== "open") return { ok: false, code: "NOT_OPEN" };
  if (input.seq !== undefined) {
    if (!Number.isInteger(input.seq) || input.seq < 0) {
      return { ok: false, code: "INVALID_SEQ" };
    }
    if (input.seq !== session.nextAudioSeq) {
      return { ok: false, code: "SEQ_OUT_OF_ORDER" };
    }
  }
  const raw = Buffer.from(input.pcmBase64, "base64");
  if (raw.length === 0 || raw.length % 2 !== 0) {
    return { ok: false, code: "INVALID_PCM" };
  }
  if (session.pcmBytes + raw.length > session.limits.maxPcmBytes) {
    return { ok: false, code: "BUFFER_LIMIT" };
  }
  session.pcmBytes += raw.length;
  if (input.seq !== undefined) {
    session.nextAudioSeq += 1;
  }
  touch(session);
  session.transport?.send({
    type: "input_audio_buffer.append",
    audio: input.pcmBase64,
  });
  session.pcmBytesSinceLastCommit += raw.length;
  if (session.pcmBytesSinceLastCommit >= autoCommitPcmBytes()) {
    sendAudioCommit(session);
  }
  return { ok: true };
}

export function setDictationHidden(input: {
  sessionId: string;
  pilotId: string;
  hidden: boolean;
}): { ok: true; textHidden: boolean } | { ok: false; code: string } {
  const session = sessions.get(input.sessionId);
  if (!session) return { ok: false, code: "NOT_FOUND" };
  if (session.pilotId !== input.pilotId) return { ok: false, code: "FORBIDDEN" };
  session.draft = { ...session.draft, textHidden: input.hidden };
  return { ok: true, textHidden: session.draft.textHidden };
}

export async function finalizeDictationSession(input: {
  sessionId: string;
  pilotId: string;
  projectId: string;
}): Promise<
  | { ok: true; draft: string; transcript: string; partial: boolean }
  | { ok: false; code: string; draft?: string }
> {
  const session = sessions.get(input.sessionId);
  if (!session) return { ok: false, code: "NOT_FOUND" };
  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
    return { ok: false, code: "FORBIDDEN" };
  }
  if (isTerminalStatus(session.status)) {
    const mergeMode =
      session.status === "cancelled"
        ? "cancel"
        : session.status === "completed"
          ? "finalize"
          : "partial";
    const merged = mergeDictationIntoDraft(session.draft, mergeMode);
    return {
      ok: session.status === "completed",
      code: session.status.toUpperCase(),
      draft: merged.draft,
      transcript: merged.transcript,
      partial: mergeMode === "partial",
    } as
      | { ok: true; draft: string; transcript: string; partial: boolean }
      | { ok: false; code: string; draft: string };
  }
  session.status = "finalizing";
  touch(session);
  sendAudioCommit(session, { finalize: true });

  const result = await waitForFinalization(session);
  // Re-read after async wait (listeners may mutate status). Escape CFA narrowing.
  const statusAfterWait = session.status as unknown as DictationSessionStatus;
  if (
    statusAfterWait === "cancelled" ||
    statusAfterWait === "expired" ||
    statusAfterWait === "failed"
  ) {
    const merged = mergeDictationIntoDraft(
      session.draft,
      statusAfterWait === "cancelled" ? "cancel" : "partial",
    );
    return {
      ok: false,
      code: statusAfterWait.toUpperCase(),
      draft: merged.draft,
    };
  }
  if (statusAfterWait !== "completed") {
    completeFinalization(session, { partial: result.partial, force: true });
  }
  const merged = mergeDictationIntoDraft(
    session.draft,
    result.partial ? "partial" : "finalize",
  );
  return {
    ok: true,
    draft: merged.draft,
    transcript: merged.transcript,
    partial: result.partial,
  };
}

function waitForFinalization(
  session: DictationSessionRecord,
): Promise<{ partial: boolean }> {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      cleanup();
      if (session.status === "finalizing") {
        completeFinalization(session, { partial: true, force: true });
      }
      resolve({ partial: true });
    }, session.limits.finalizeTimeoutMs);

    const onEv = (ev: DictationClientEvent) => {
      if (ev.type === "session.finalized") {
        cleanup();
        resolve({ partial: ev.partial });
      }
      if (
        ev.type === "session.error" ||
        ev.type === "session.expired" ||
        ev.type === "session.cancelled"
      ) {
        cleanup();
        resolve({ partial: true });
      }
    };
    const cleanup = () => {
      clearTimeout(timeout);
      session.listeners.delete(onEv);
    };
    session.listeners.add(onEv);
    maybeCompleteFinalization(session);
  });
}

export function cancelDictationSession(input: {
  sessionId: string;
  pilotId: string;
  projectId: string;
}): { ok: true; draft: string } | { ok: false; code: string } {
  const session = sessions.get(input.sessionId);
  if (!session) return { ok: false, code: "NOT_FOUND" };
  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
    return { ok: false, code: "FORBIDDEN" };
  }
  if (session.status === "completed") {
    const merged = mergeDictationIntoDraft(session.draft, "finalize");
    return { ok: true, draft: merged.draft };
  }
  session.status = "cancelled";
  try {
    session.transport?.close();
  } catch {
    /* */
  }
  session.transport = null;
  const merged = mergeDictationIntoDraft(session.draft, "cancel");
  emit(session, { type: "session.cancelled", sessionId: session.sessionId });
  void recordDictationFinops(session, "cancelled");
  return { ok: true, draft: merged.draft };
}

export function subscribeDictationSession(
  sessionId: string,
  pilotId: string,
  listener: (ev: DictationClientEvent) => void,
): (() => void) | null {
  const session = sessions.get(sessionId);
  if (!session || session.pilotId !== pilotId) return null;
  session.listeners.add(listener);
  return () => session.listeners.delete(listener);
}

async function recordDictationFinops(
  session: DictationSessionRecord,
  status: "succeeded" | "cancelled" | "partial" | "failed" | "expired",
): Promise<void> {
  if (session.finopsRecorded) return;
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    const durationMs = Math.max(0, Date.now() - session.createdAtMs);
    const substituted = session.emissionMode === "substituted";
    const pcmMinutes =
      session.pcmBytes / (COMPOSER_DICTATION_PCM_RATE * 2) / 60;
    // Public tariff verified at cadrage: 0.017 USD/min — estimate from buffered PCM only.
    const estimatedUsd =
      substituted || session.pcmBytes === 0
        ? null
        : Math.round(pcmMinutes * 0.017 * 1_000_000) / 1_000_000;
    const observationStatus =
      status === "succeeded" || status === "partial" ? "succeeded" : "failed";
    const costCoverage: "KNOWN" | "PARTIAL" | "UNKNOWN" = substituted
      ? "UNKNOWN"
      : status === "partial"
        ? "PARTIAL"
        : estimatedUsd == null
          ? "UNKNOWN"
          : "PARTIAL";
    const limits = [
      "NO_DURABLE_AUDIO",
      "NO_D3_BEFORE_SEND",
      "TRANSCRIPTION_ONLY",
      `DURATION_MS_${durationMs}`,
      `PCM_BYTES_${session.pcmBytes}`,
      `STATUS_${status}`,
      ...(substituted
        ? ["EFFECT_SUBSTITUTED", `LANE_${session.admissionLane}`]
        : ["TARIFF_GPT_LIVE_TRANSCRIBE_ESTIMATED"]),
    ];
    await recordProviderUsageObservation({
      operation: "audio.composer_dictation",
      modelRequested: session.modelRequested,
      modelApplied: session.modelApplied,
      inputTokens: null,
      outputTokens: null,
      status: observationStatus,
      granularity: "REQUEST",
      costCoverage,
      projectId: session.projectId,
      ownerPilotId: session.pilotId,
      estimatedCostUsd: estimatedUsd,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "audio.composer_dictation",
        projectId: session.projectId,
        attemptId: session.emissionAttemptId,
        callOrdinal: 0,
      }),
      limits,
    });
    session.finopsRecorded = true;
  } catch (err) {
    session.finopsPersistFailed = true;
    console.error(
      "[composer-dictation] FinOps persistence failed",
      session.sessionId,
      err,
    );
  }
}

async function openOpenAiTranscriptionTransport(input: {
  sessionId: string;
  model: string;
  apiKey: string;
}): Promise<RealtimeTransport> {
  const { default: WebSocket } = await import("ws");
  const url = "wss://api.openai.com/v1/realtime?intent=transcription";
  const ws = new WebSocket(url, {
    headers: {
      Authorization: `Bearer ${input.apiKey}`,
      "OpenAI-Beta": "realtime=v1",
    },
  });
  await new Promise<void>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("REALTIME_OPEN_TIMEOUT")), 15_000);
    ws.once("open", () => {
      clearTimeout(t);
      resolve();
    });
    ws.once("error", (err) => {
      clearTimeout(t);
      reject(err);
    });
  });
  let handler: ((event: Record<string, unknown>) => void) | null = null;
  ws.on("message", (data) => {
    try {
      const parsed = JSON.parse(String(data)) as Record<string, unknown>;
      handler?.(parsed);
    } catch {
      /* ignore malformed */
    }
  });
  return {
    send: (payload) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(payload));
      }
    },
    close: () => {
      try {
        ws.close();
      } catch {
        /* */
      }
    },
    onEvent: (h) => {
      handler = h;
    },
  };
}
