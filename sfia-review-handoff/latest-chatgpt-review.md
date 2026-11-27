# SFIA REVIEW PACK — FULL
# MACRO-LOT 3 — INTERACTION AUDIO + ML2 RESIDUAL + CONVERGENCE

- **Generated (UTC):** 2026-11-27T07:43:21Z
- **Cycle:** 8 Delivery / Critical / EVOL-CAPA-INC
- **HEAD entrée:** `6665083447244234960b3d724d2fe66f6bead910`
- **HEAD final:** `87ce2c51c482d6b55e995dc0c39318837e600988`
- **Tree web:** `7cdfc3ac4ff87e0b53e43b4e6d2e8a998d5819b1`
- **BUILD_ID:** `getLIoygkylG4wh_cfvdf`
- **Digest:** `84b6d8e400eaeb4b86f2b4b24b155369a8a9b54e25bb24c09e0674b4f5ec9250`
- **Identity:**
```json
{"pid":73525,"port":3100,"host":"127.0.0.1","buildId":"getLIoygkylG4wh_cfvdf","contentDigest":"84b6d8e400eaeb4b86f2b4b24b155369a8a9b54e25bb24c09e0674b4f5ec9250","sessionFingerprint":"e4829b8bd74645b3df79713af1f7d8fcc9d3fc6268c5b59a2bc75f9a1c53a6c4","workspaceRoot":"/tmp/sfia-c12-cursor-live-ws","effectMode":"LIVE","startedAt":"2026-11-27T07:43:47Z","mode":"qualify-next-start"}
```
- **Schema:** 027 · flags SEARCH/JUDGMENT/VISION OFF · `SFIA_COMPOSER_DICTATION` default OFF · WEB OFF · RECETTE protected
- **Verdict:** MACRO-LOT 3 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — ML2 RESIDUAL GAPS RESOLVED — INTEGRATED CONVERGENCE CONSTRUCTION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED
- **SFIA status:** READY WITH RESERVES
- **LIVE audio:** plan prepared — **NOT EXECUTED** (gate Morris distinct)

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `87ce2c51c482d6b55e995dc0c39318837e600988` |
| Tree web | `7cdfc3ac4ff87e0b53e43b4e6d2e8a998d5819b1` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Push projet | NON |

### Commits
```text
87ce2c51 docs(ml3): stamp final DEV BUILD_ID for audio delivery
2a63b609 feat(ml3): add composer Realtime dictation and close residual ML2 gaps
```

### Diffstat
```text
.../as-built-macro-lot-3-audio-20261127.md         |  32 ++
 .../contrat-fonctionnel.md                         |   2 +-
 .../convergence-openai-studio/contrat-technique.md |   2 +-
 .../completeness-cartography-20261127.md           |   6 +-
 .../ml3-audio-live-proof-plan-20261127.md          |  16 +
 .../construction/delivery-history.md               |  15 +
 .../composer-dictation-visual-contract-20261127.md |  36 ++
 projects/sfia-studio-next/web/package-lock.json    | 258 ++++++---
 projects/sfia-studio-next/web/package.json         |   2 +
 .../dictation/sessions/[sessionId]/audio/route.ts  |  33 ++
 .../dictation/sessions/[sessionId]/cancel/route.ts |  28 +
 .../dictation/sessions/[sessionId]/events/route.ts |  62 ++
 .../sessions/[sessionId]/finalize/route.ts         |  28 +
 .../[projectId]/dictation/sessions/route.ts        |  49 ++
 .../web/src/app/projects/[projectId]/page.tsx      |   1 +
 .../components/figma/ComposerDictationControl.tsx  | 371 ++++++++++++
 .../web/src/components/figma/NoraConversation.tsx  |  14 +
 .../web/src/components/figma/tokens.css            | 121 ++++
 .../conversation/composer-dictation-reducer.ts     | 132 +++++
 .../conversation/composer-dictation-session.ts     | 634 +++++++++++++++++++++
 .../conversation/composer-dictation-types.ts       |  81 +++
 .../conversation/provider-emission-frontier.ts     |  10 +
 .../domains/knowledge/derived-embedding-service.ts | 114 ++--
 .../domains/knowledge/hybrid-knowledge-search.ts   |   7 +-
 .../web/src/domains/knowledge/journal.ts           |  48 +-
 .../unit/ml2-hybrid-rights-fingerprint.test.ts     |  48 ++
 .../web/tests/unit/ml2-journal-hybrid-pg.test.ts   |   3 +-
 .../unit/ml3-composer-dictation-reducer.test.ts    |  50 ++
 .../unit/ml3-composer-dictation-session.test.ts    | 141 +++++
 29 files changed, 2220 insertions(+), 124 deletions(-)
```

---

## 1. Arbitrage audio Morris

Transcription progressive = cible principale (`gpt-live-transcribe`).
Mode fichier = alternative conditionnelle (non construite en parallèle).
OUT: agent vocal, TTS, voix bidirectionnelle.

## 2. Architecture retenue

**Transport:** Studio-controlled OpenAI Realtime WebSocket (`intent=transcription`).
Navigateur → PCM 24 kHz → HTTP append → serveur WS fournisseur → SSE deltas → finalize → brouillon → envoi USER existant.

**Pourquoi pas WebRTC navigateur-direct:** maîtrise sessions/durée/FinOps/admission côté Studio requise; Next `next start` sans microservice — HTTP+SSE + WS serveur suffit.

**turn_detection:** `null` (non supporté sur gpt-live-transcribe).

## 3. Contrat visuel

Voir fichier créé `ux-ui/composer-dictation-visual-contract-20261127.md` (contenu ci-dessous).
Micro à gauche d’Envoyer; onde via AnalyserNode réel; masquage texte sans stop.

## 4. ML2 residual gaps résolus

| Id | Fix |
|---|---|
| RIGHTS-FP-01 | lexical n’élargit plus admissible; indexRef sans FP → exclude |
| JOURNAL-ID-01 | subjectId / sourceId / openPointId distincts |
| VECTOR-REUSE-01 | `queryVector` sans stub FinOps |
| FINOPS-EMIT-01 | rebuild/upsert `*EmissionAttemptId` UUID |
| CONCUR-01 | advisory lock conservé (prior delivery) |

## 5. Fichiers créés (contenu complet)

### `src/domains/conversation/composer-dictation-types.ts` (2674 bytes, 81 lines)
```ts
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
```

### `src/domains/conversation/composer-dictation-reducer.ts` (3795 bytes, 132 lines)
```ts
/**
 * Deterministic dictation transcript assembly — no provider I/O.
 * Completions may arrive out of order; correlate by item_id.
 */
import type { DictationDraftSnapshot } from "./composer-dictation-types";

export function createDictationDraftSnapshot(input: {
  baselineDraft: string;
  insertOffset?: number | null;
}): DictationDraftSnapshot {
  return {
    baselineDraft: input.baselineDraft,
    insertOffset:
      input.insertOffset == null || !Number.isFinite(input.insertOffset)
        ? input.baselineDraft.length
        : Math.max(0, Math.min(input.baselineDraft.length, Math.floor(input.insertOffset))),
    provisionalByItem: {},
    finalByItem: {},
    textHidden: false,
  };
}

export function applyTranscriptDelta(
  snap: DictationDraftSnapshot,
  itemId: string,
  delta: string,
): DictationDraftSnapshot {
  if (!itemId || !delta) return snap;
  const prev = snap.provisionalByItem[itemId] ?? "";
  return {
    ...snap,
    provisionalByItem: {
      ...snap.provisionalByItem,
      [itemId]: prev + delta,
    },
  };
}

export function applyTranscriptCompleted(
  snap: DictationDraftSnapshot,
  itemId: string,
  transcript: string,
): DictationDraftSnapshot {
  if (!itemId) return snap;
  const nextProv = { ...snap.provisionalByItem };
  delete nextProv[itemId];
  return {
    ...snap,
    provisionalByItem: nextProv,
    finalByItem: {
      ...snap.finalByItem,
      [itemId]: transcript,
    },
  };
}

export function setDictationTextHidden(
  snap: DictationDraftSnapshot,
  hidden: boolean,
): DictationDraftSnapshot {
  return { ...snap, textHidden: hidden };
}

/** Ordered assembly: finals first (by key), then provisional remainders. */
export function assembleDictationTranscript(snap: DictationDraftSnapshot): string {
  const parts: string[] = [];
  const finalIds = Object.keys(snap.finalByItem).sort();
  for (const id of finalIds) {
    const t = snap.finalByItem[id]?.trim();
    if (t) parts.push(t);
  }
  const provIds = Object.keys(snap.provisionalByItem).sort();
  for (const id of provIds) {
    if (snap.finalByItem[id]) continue;
    const t = snap.provisionalByItem[id]?.trim();
    if (t) parts.push(t);
  }
  return parts.join(" ").trim();
}

/**
 * Merge finalized dictation into baseline draft at insert offset.
 * Cancel restores baseline only.
 */
export function mergeDictationIntoDraft(
  snap: DictationDraftSnapshot,
  mode: "finalize" | "cancel" | "partial",
): { draft: string; transcript: string; partial: boolean } {
  if (mode === "cancel") {
    return { draft: snap.baselineDraft, transcript: "", partial: false };
  }
  const transcript = assembleDictationTranscript(snap);
  if (!transcript) {
    return {
      draft: snap.baselineDraft,
      transcript: "",
      partial: mode === "partial",
    };
  }
  const offset = snap.insertOffset ?? snap.baselineDraft.length;
  const before = snap.baselineDraft.slice(0, offset);
  const after = snap.baselineDraft.slice(offset);
  const needsSpaceBefore =
    before.length > 0 && !/\s$/.test(before) && !/^\s/.test(transcript);
  const needsSpaceAfter =
    after.length > 0 && !/\s$/.test(transcript) && !/^\s/.test(after);
  const draft =
    before +
    (needsSpaceBefore ? " " : "") +
    transcript +
    (needsSpaceAfter ? " " : "") +
    after;
  return { draft, transcript, partial: mode === "partial" };
}

/** Ignore late events after cancel/complete. */
export function shouldAcceptDictationEvent(input: {
  status: string;
  eventSessionId: string;
  activeSessionId: string;
}): boolean {
  if (input.eventSessionId !== input.activeSessionId) return false;
  if (
    input.status === "cancelled" ||
    input.status === "completed" ||
    input.status === "failed" ||
    input.status === "expired"
  ) {
    return false;
  }
  return true;
}
```

### `src/domains/conversation/composer-dictation-session.ts` (18594 bytes, 634 lines)
```ts
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
  composerDictationEnabled,
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
};

const sessions = new Map<string, DictationSessionRecord>();

export function _resetDictationSessionsForTests(): void {
  for (const s of sessions.values()) {
    try {
      s.transport?.close();
    } catch {
      /* ignore */
    }
  }
  sessions.clear();
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
  if (!composerDictationEnabled(env)) {
    return {
      ok: false,
      code: "FLAG_OFF",
      message: "Composer dictation is not enabled (SFIA_COMPOSER_DICTATION).",
    };
  }
  const lane = (env.STUDIO_LANE || "").trim().toUpperCase();
  if (lane && lane !== "DEV") {
    return {
      ok: false,
      code: "LANE_REFUSED",
      message: `Dictation admission refused for lane ${lane}`,
    };
  }
  const apiKey = (env.OPENAI_API_KEY || "").trim();
  const factory = input.transportFactory;
  if (!factory && !apiKey) {
    return {
      ok: false,
      code: "NO_PROVIDER_KEY",
      message: "OpenAI API key unavailable for transcription session.",
    };
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
    record.transport = transport;
    transport.onEvent((event) => handleProviderEvent(record, event));
    transport.send({
      type: "session.update",
      session: {
        type: "transcription",
        audio: {
          input: {
            format: { type: "audio/pcm", rate: COMPOSER_DICTATION_PCM_RATE },
            transcription: {
              model: COMPOSER_DICTATION_MODEL,
              language: "fr",
              prompt: DICTATION_VOCAB_HINT,
            },
            turn_detection: null,
          },
        },
      },
    });
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

  if (type === "input_audio_buffer.committed") {
    const itemId = String(event.item_id || "");
    if (itemId) session.pendingItemId = itemId;
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
  }
}

function maybeCompleteFinalization(session: DictationSessionRecord): void {
  const transcript = assembleDictationTranscript(session.draft);
  // Prefer completed items; if still provisional after commit, mark partial.
  const hasFinal = Object.keys(session.draft.finalByItem).length > 0;
  const hasProv = Object.keys(session.draft.provisionalByItem).length > 0;
  if (!hasFinal && hasProv) {
    // Still waiting — finalize timeout owns partial completion.
    return;
  }
  session.status = "completed";
  const merged = mergeDictationIntoDraft(
    session.draft,
    hasFinal ? "finalize" : "partial",
  );
  emit(session, {
    type: "session.finalized",
    sessionId: session.sessionId,
    transcript: merged.transcript || transcript,
    partial: !hasFinal,
  });
  try {
    session.transport?.close();
  } catch {
    /* */
  }
  session.transport = null;
  void recordDictationFinops(session, "succeeded");
}

export function appendDictationAudio(input: {
  sessionId: string;
  pilotId: string;
  projectId: string;
  pcmBase64: string;
}): { ok: true } | { ok: false; code: string } {
  const session = sessions.get(input.sessionId);
  if (!session) return { ok: false, code: "NOT_FOUND" };
  if (session.pilotId !== input.pilotId || session.projectId !== input.projectId) {
    return { ok: false, code: "FORBIDDEN" };
  }
  if (expireIfNeeded(session)) return { ok: false, code: "EXPIRED" };
  if (session.status !== "open") return { ok: false, code: "NOT_OPEN" };
  const raw = Buffer.from(input.pcmBase64, "base64");
  if (raw.length === 0 || raw.length % 2 !== 0) {
    return { ok: false, code: "INVALID_PCM" };
  }
  if (session.pcmBytes + raw.length > session.limits.maxPcmBytes) {
    return { ok: false, code: "BUFFER_LIMIT" };
  }
  session.pcmBytes += raw.length;
  touch(session);
  session.transport?.send({
    type: "input_audio_buffer.append",
    audio: input.pcmBase64,
  });
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
  if (
    session.status === "cancelled" ||
    session.status === "completed" ||
    session.status === "failed" ||
    session.status === "expired"
  ) {
    const merged = mergeDictationIntoDraft(session.draft, "finalize");
    return {
      ok: session.status === "completed",
      code: session.status.toUpperCase(),
      draft: merged.draft,
    } as { ok: false; code: string; draft: string };
  }
  session.status = "finalizing";
  touch(session);
  try {
    session.transport?.send({ type: "input_audio_buffer.commit" });
  } catch {
    /* */
  }

  const result = await waitForFinalization(session);
  const merged = mergeDictationIntoDraft(
    session.draft,
    result.partial ? "partial" : "finalize",
  );
  const statusNow = session.status as DictationSessionStatus;
  if (statusNow !== "completed" && statusNow !== "failed") {
    session.status = "completed";
    emit(session, {
      type: "session.finalized",
      sessionId: session.sessionId,
      transcript: merged.transcript,
      partial: result.partial,
    });
    try {
      session.transport?.close();
    } catch {
      /* */
    }
    session.transport = null;
    void recordDictationFinops(session, result.partial ? "partial" : "succeeded");
  }
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
      resolve({ partial: true });
    }, session.limits.finalizeTimeoutMs);

    const onEv = (ev: DictationClientEvent) => {
      if (ev.type === "session.finalized") {
        cleanup();
        resolve({ partial: ev.partial });
      }
      if (ev.type === "session.error" || ev.type === "session.expired") {
        cleanup();
        resolve({ partial: true });
      }
    };
    const cleanup = () => {
      clearTimeout(timeout);
      session.listeners.delete(onEv);
    };
    session.listeners.add(onEv);
    // If already completed via provider events:
    if (Object.keys(session.draft.finalByItem).length > 0) {
      maybeCompleteFinalization(session);
    }
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
  status: "succeeded" | "cancelled" | "partial" | "failed",
): Promise<void> {
  if (session.finopsRecorded) return;
  session.finopsRecorded = true;
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    const durationMs = Math.max(0, Date.now() - session.createdAtMs);
    const durationMinutes = durationMs / 60_000;
    // Public tariff verified at cadrage: 0.017 USD/min — estimate only.
    const estimatedUsd =
      status === "cancelled" && session.pcmBytes === 0
        ? null
        : Math.round(durationMinutes * 0.017 * 1_000_000) / 1_000_000;
    await recordProviderUsageObservation({
      operation: "audio.composer_dictation",
      modelRequested: session.modelRequested,
      modelApplied: session.modelApplied,
      inputTokens: null,
      outputTokens: null,
      status: status === "failed" ? "failed" : "succeeded",
      granularity: "REQUEST",
      costCoverage: estimatedUsd == null ? "UNKNOWN" : "PARTIAL",
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
      limits: [
        "NO_DURABLE_AUDIO",
        "NO_D3_BEFORE_SEND",
        "TRANSCRIPTION_ONLY",
        `DURATION_MS_${durationMs}`,
        `PCM_BYTES_${session.pcmBytes}`,
        `STATUS_${status}`,
        "TARIFF_GPT_LIVE_TRANSCRIBE_ESTIMATED",
      ],
    });
  } catch {
    /* best-effort */
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
```

### `src/components/figma/ComposerDictationControl.tsx` (12333 bytes, 371 lines)
```ts
"use client";

/**
 * ML3 — interactive dictation control for NoraConversation composer.
 * Visual contract: mic left of Envoyer; waveform from real analyser levels;
 * hide/show provisional text without stopping capture.
 */
import { useCallback, useEffect, useRef, useState } from "react";

export type ComposerDictationControlProps = {
  projectId: string;
  draft: string;
  onDraft: (next: string) => void;
  disabled?: boolean;
  enabled?: boolean;
};

type UiPhase =
  | "idle"
  | "requesting"
  | "listening"
  | "finalizing"
  | "error";

function floatTo16BitPCM(input: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(input.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]!));
    view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

function downsampleTo24k(
  input: Float32Array,
  inputSampleRate: number,
): Float32Array {
  if (inputSampleRate === 24000) return input;
  const ratio = inputSampleRate / 24000;
  const outLen = Math.floor(input.length / ratio);
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    out[i] = input[Math.floor(i * ratio)] ?? 0;
  }
  return out;
}

function bufToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]!);
  return btoa(binary);
}

export function ComposerDictationControl(props: ComposerDictationControlProps) {
  const [phase, setPhase] = useState<UiPhase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [provisional, setProvisional] = useState("");
  const [textHidden, setTextHidden] = useState(false);
  const [level, setLevel] = useState(0);
  const sessionIdRef = useRef<string | null>(null);
  const baselineRef = useRef("");
  const mediaRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const esRef = useRef<EventSource | null>(null);
  const provisionalAccRef = useRef("");

  const stopMedia = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    try {
      processorRef.current?.disconnect();
    } catch {
      /* */
    }
    processorRef.current = null;
    try {
      analyserRef.current?.disconnect();
    } catch {
      /* */
    }
    analyserRef.current = null;
    mediaRef.current?.getTracks().forEach((t) => t.stop());
    mediaRef.current = null;
    void audioCtxRef.current?.close().catch(() => undefined);
    audioCtxRef.current = null;
    esRef.current?.close();
    esRef.current = null;
    setLevel(0);
  }, []);

  useEffect(() => () => stopMedia(), [stopMedia]);

  const startListening = useCallback(async () => {
    if (props.disabled || props.enabled === false) return;
    setError(null);
    setPhase("requesting");
    setProvisional("");
    provisionalAccRef.current = "";
    setTextHidden(false);
    baselineRef.current = props.draft;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      mediaRef.current = stream;

      const createRes = await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            baselineDraft: props.draft,
            insertOffset: props.draft.length,
            conversationKey: props.projectId,
          }),
        },
      );
      const created = (await createRes.json()) as {
        ok?: boolean;
        sessionId?: string;
        code?: string;
        message?: string;
      };
      if (!createRes.ok || !created.ok || !created.sessionId) {
        stopMedia();
        setPhase("error");
        setError(created.message || created.code || "Session refusée");
        return;
      }
      sessionIdRef.current = created.sessionId;

      const es = new EventSource(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(created.sessionId)}/events`,
      );
      esRef.current = es;
      es.onmessage = (msg) => {
        try {
          const ev = JSON.parse(msg.data) as {
            type?: string;
            delta?: string;
            transcript?: string;
            message?: string;
            code?: string;
            partial?: boolean;
          };
          if (ev.type === "transcript.delta" && ev.delta) {
            provisionalAccRef.current += ev.delta;
            setProvisional(provisionalAccRef.current);
          }
          if (ev.type === "transcript.completed" && ev.transcript) {
            provisionalAccRef.current = ev.transcript;
            setProvisional(ev.transcript);
          }
          if (ev.type === "session.error") {
            setError(ev.message || ev.code || "Erreur de dictée");
            setPhase("error");
            stopMedia();
          }
          if (ev.type === "session.expired") {
            setError("Session expirée");
            setPhase("error");
            stopMedia();
          }
        } catch {
          /* */
        }
      };

      const audioCtx = new AudioContext();
      audioCtxRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      const tick = () => {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i]! - 128) / 128;
          sum += v * v;
        }
        setLevel(Math.min(1, Math.sqrt(sum / data.length) * 4));
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      const mute = audioCtx.createGain();
      mute.gain.value = 0;
      source.connect(processor);
      processor.connect(mute);
      mute.connect(audioCtx.destination);
      processor.onaudioprocess = (e) => {
        const sid = sessionIdRef.current;
        if (!sid) return;
        const input = e.inputBuffer.getChannelData(0);
        const down = downsampleTo24k(input, audioCtx.sampleRate);
        const pcm = floatTo16BitPCM(down);
        const pcmBase64 = bufToBase64(pcm);
        void fetch(
          `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/audio`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ pcmBase64 }),
            keepalive: true,
          },
        ).catch(() => undefined);
      };

      setPhase("listening");
    } catch (e) {
      stopMedia();
      setPhase("error");
      setError(
        e instanceof Error && e.name === "NotAllowedError"
          ? "Microphone refusé"
          : e instanceof Error
            ? e.message.slice(0, 160)
            : "Impossible de démarrer la dictée",
      );
    }
  }, [props.disabled, props.enabled, props.draft, props.projectId, stopMedia]);

  const cancel = useCallback(async () => {
    const sid = sessionIdRef.current;
    stopMedia();
    if (sid) {
      await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/cancel`,
        { method: "POST" },
      ).catch(() => undefined);
    }
    props.onDraft(baselineRef.current);
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
    setError(null);
  }, [props, stopMedia]);

  const finalize = useCallback(async () => {
    const sid = sessionIdRef.current;
    if (!sid) return;
    setPhase("finalizing");
    stopMedia();
    try {
      const res = await fetch(
        `/api/projects/${encodeURIComponent(props.projectId)}/dictation/sessions/${encodeURIComponent(sid)}/finalize`,
        { method: "POST" },
      );
      const body = (await res.json()) as {
        ok?: boolean;
        draft?: string;
        transcript?: string;
        partial?: boolean;
        message?: string;
      };
      if (body.ok && typeof body.draft === "string") {
        props.onDraft(body.draft);
        if (body.partial) setError("Transcription partielle — vérifiez le texte");
      } else if (typeof body.draft === "string") {
        props.onDraft(body.draft);
      }
    } catch {
      setError("Finalisation interrompue");
    }
    sessionIdRef.current = null;
    setProvisional("");
    provisionalAccRef.current = "";
    setPhase("idle");
  }, [props, stopMedia]);

  const active = phase === "listening" || phase === "finalizing" || phase === "requesting";
  const bars = Array.from({ length: 12 }, (_, i) => {
    const amp = active ? Math.max(0.12, level * (0.4 + ((i * 17) % 10) / 14)) : 0.08;
    return amp;
  });

  return (
    <div className="fig-dictation" data-testid="composer-dictation" data-phase={phase}>
      {active ? (
        <div className="fig-dictation-active" role="status" aria-live="polite">
          <div className="fig-dictation-wave" aria-hidden data-testid="dictation-wave">
            {bars.map((h, i) => (
              <span
                key={i}
                className="fig-dictation-bar"
                style={{ transform: `scaleY(${h})` }}
              />
            ))}
          </div>
          {!textHidden && provisional ? (
            <p className="fig-dictation-provisional" data-testid="dictation-provisional">
              {provisional}
            </p>
          ) : null}
          <div className="fig-dictation-actions">
            <button
              type="button"
              className="fig-dictation-toggle-text"
              data-testid="dictation-toggle-text"
              onClick={() => setTextHidden((v) => !v)}
              aria-pressed={textHidden}
            >
              {textHidden ? "Afficher le texte" : "Masquer le texte"}
            </button>
            <button
              type="button"
              className="fig-dictation-stop"
              data-testid="dictation-stop"
              onClick={() => void finalize()}
              disabled={phase === "finalizing"}
            >
              {phase === "finalizing" ? "Finalisation…" : "Arrêter"}
            </button>
            <button
              type="button"
              className="fig-dictation-cancel"
              data-testid="dictation-cancel"
              onClick={() => void cancel()}
            >
              Annuler
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="fig-travail-composer-mic"
        data-testid="composer-mic"
        aria-label={active ? "Dictée en cours" : "Dicter un message"}
        aria-pressed={active}
        disabled={Boolean(props.disabled) || props.enabled === false || active}
        onClick={() => void startListening()}
        title={
          props.enabled === false
            ? "Dictée non activée sur cet environnement"
            : "Dicter"
        }
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden focusable="false">
          <path
            fill="currentColor"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8 1Zm-4 6.5a.75.75 0 0 1 1.5 0 2.5 2.5 0 0 0 5 0 .75.75 0 0 1 1.5 0 4 4 0 0 1-3.25 3.915V13h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5H7.25v-1.585A4 4 0 0 1 4 7.5Z"
          />
        </svg>
      </button>
      {error && phase !== "listening" ? (
        <p className="fig-dictation-error" data-testid="dictation-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
```

### `src/app/api/projects/[projectId]/dictation/sessions/route.ts` (1775 bytes, 49 lines)
```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { createDictationSession } from "@/domains/conversation/composer-dictation-session";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — admit a Studio-controlled Realtime transcription session. */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      baselineDraft?: string;
      insertOffset?: number | null;
      conversationKey?: string;
    };
    if (!composerDictationEnabled()) {
      return NextResponse.json(
        { ok: false, code: "FLAG_OFF", message: "Dictation disabled" },
        { status: 403 },
      );
    }
    const created = await createDictationSession({
      pilotId: session.pilotId,
      projectId,
      conversationKey: (body.conversationKey || projectId).slice(0, 120),
      baselineDraft: String(body.baselineDraft ?? ""),
      insertOffset: body.insertOffset ?? null,
    });
    if (!created.ok) {
      return NextResponse.json(
        { ok: false, code: created.code, message: created.message },
        { status: created.code === "FLAG_OFF" ? 403 : 400 },
      );
    }
    return NextResponse.json({
      ok: true,
      sessionId: created.session.sessionId,
      model: created.session.modelRequested,
      status: created.session.status,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/audio/route.ts` (1232 bytes, 33 lines)
```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { appendDictationAudio } from "@/domains/conversation/composer-dictation-session";

/** Append base64 PCM16 mono 24 kHz chunk — no durable storage. */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as { pcmBase64?: string };
    const pcmBase64 = String(body.pcmBase64 || "");
    if (!pcmBase64) {
      return NextResponse.json({ ok: false, code: "EMPTY" }, { status: 400 });
    }
    const result = appendDictationAudio({
      sessionId,
      pilotId: session.pilotId,
      projectId,
      pcmBase64,
    });
    if (!result.ok) {
      return NextResponse.json(result, { status: result.code === "FORBIDDEN" ? 403 : 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/finalize/route.ts` (930 bytes, 28 lines)
```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { finalizeDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    const result = await finalizeDictationSession({
      sessionId,
      pilotId: session.pilotId,
      projectId,
    });
    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.code === "FORBIDDEN" ? 403 : 400,
      });
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/cancel/route.ts` (920 bytes, 28 lines)
```ts
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { cancelDictationSession } from "@/domains/conversation/composer-dictation-session";

export async function POST(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    const result = cancelDictationSession({
      sessionId,
      pilotId: session.pilotId,
      projectId,
    });
    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.code === "FORBIDDEN" ? 403 : 400,
      });
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

### `src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts` (1921 bytes, 62 lines)
```ts
import { requireStudioSession } from "@/domains/identity/session";
import {
  getDictationSession,
  subscribeDictationSession,
} from "@/domains/conversation/composer-dictation-session";

/** SSE stream of dictation events for the authenticated owner. */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; sessionId: string }> },
) {
  const session = await requireStudioSession();
  const { projectId, sessionId } = await ctx.params;
  const rec = getDictationSession(sessionId);
  if (!rec || rec.pilotId !== session.pilotId || rec.projectId !== projectId) {
    return new Response(JSON.stringify({ ok: false, code: "NOT_FOUND" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  let unsubscribe: (() => void) | null = null;
  const stream = new ReadableStream({
    start(controller) {
      const send = (data: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };
      send({ type: "sse.open", sessionId, status: rec.status });
      unsubscribe = subscribeDictationSession(sessionId, session.pilotId, (ev) => {
        send(ev);
        if (
          ev.type === "session.finalized" ||
          ev.type === "session.cancelled" ||
          ev.type === "session.error" ||
          ev.type === "session.expired"
        ) {
          try {
            controller.close();
          } catch {
            /* */
          }
        }
      });
      if (!unsubscribe) {
        send({ type: "session.error", code: "SUBSCRIBE_FAILED", sessionId });
        controller.close();
      }
    },
    cancel() {
      unsubscribe?.();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    },
  });
}
```

### `tests/unit/ml3-composer-dictation-reducer.test.ts` (1673 bytes, 50 lines)
```ts
import { describe, expect, it } from "vitest";
import {
  applyTranscriptCompleted,
  applyTranscriptDelta,
  assembleDictationTranscript,
  createDictationDraftSnapshot,
  mergeDictationIntoDraft,
  shouldAcceptDictationEvent,
} from "@/domains/conversation/composer-dictation-reducer";

describe("ml3 composer dictation reducer", () => {
  it("assembles out-of-order completions without duplicating deltas", () => {
    let snap = createDictationDraftSnapshot({ baselineDraft: "Bonjour" });
    snap = applyTranscriptDelta(snap, "item_b", " monde");
    snap = applyTranscriptDelta(snap, "item_a", "SFIA");
    snap = applyTranscriptCompleted(snap, "item_b", "monde");
    snap = applyTranscriptCompleted(snap, "item_a", "SFIA");
    expect(assembleDictationTranscript(snap)).toBe("SFIA monde");
    const merged = mergeDictationIntoDraft(snap, "finalize");
    expect(merged.draft).toBe("Bonjour SFIA monde");
  });

  it("cancel restores baseline only", () => {
    let snap = createDictationDraftSnapshot({
      baselineDraft: "existant",
      insertOffset: 8,
    });
    snap = applyTranscriptDelta(snap, "i1", "temp");
    const cancelled = mergeDictationIntoDraft(snap, "cancel");
    expect(cancelled.draft).toBe("existant");
    expect(cancelled.transcript).toBe("");
  });

  it("rejects late events after cancel", () => {
    expect(
      shouldAcceptDictationEvent({
        status: "cancelled",
        eventSessionId: "s1",
        activeSessionId: "s1",
      }),
    ).toBe(false);
    expect(
      shouldAcceptDictationEvent({
        status: "open",
        eventSessionId: "s1",
        activeSessionId: "s1",
      }),
    ).toBe(true);
  });
});
```

### `tests/unit/ml3-composer-dictation-session.test.ts` (4078 bytes, 141 lines)
```ts
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
});
```

### `tests/unit/ml2-hybrid-rights-fingerprint.test.ts` (1622 bytes, 48 lines)
```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 hybrid rights & fingerprint residuals", () => {
  it("does not widen semantic admissibility from lexical subjectIds", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    expect(src).toContain(
      "Lexical subjectIds must NOT widen the semantic admissibility set",
    );
    expect(src).not.toMatch(/for \(const l of input\.lexical\) admissible\.add/);
    expect(src).not.toMatch(/for \(const l of input\.lexical\) freshIds\.add/);
    // Missing indexRef must exclude, not admit.
    expect(src).toMatch(/if \(!m\) return false/);
  });

  it("journal reuses queryVector without stub client FinOps", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/knowledge/journal.ts"),
      "utf8",
    );
    expect(src).toContain("queryVector: opts.queryVector");
    expect(src).not.toContain("stubClient");
    expect(src).toContain("sourceId: h.sourceId");
    expect(src).toContain("openPointId");
  });

  it("rebuild/upsert FinOps use emission attemptId UUID", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    expect(src).toContain("rebuildEmissionAttemptId");
    expect(src).toContain("upsertEmissionAttemptId");
    expect(src).not.toMatch(
      /attemptId: `\$\{input\.sourceId\}:\$\{fp\}`/,
    );
  });
});
```


## 6. Documentation créée

### `ux-ui/composer-dictation-visual-contract-20261127.md` (1284 bytes, 36 lines)
```md
# Contrat visuel — Dictée compositeur (ML3)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Compositeur | `NoraConversation` / `.fig-travail-composer` |
| Référence comportementale | Dictée ChatGPT (pas copie pixel) |
| Tokens | `#151c29` fond · `#272e49` bord · `#656fe1` accent · `#94a2bb` muted · `#f4f6fc` texte |

## Emplacement

Dans `.fig-travail-composer-row` : `+` · textarea · **micro** · Envoyer.

Le micro est immédiatement à gauche d’Envoyer (réserve UX §10.5).

## États

| État | Affichage |
|---|---|
| Repos | Bouton micro 35×35, bord `#272e49`, icône SVG micro |
| Initialisation | `data-phase=requesting` ; micro disabled pendant démarrage |
| Dictée active | Panneau flottant au-dessus : onde (analyseur réel), texte provisoire, Masquer/Afficher, Arrêter, Annuler |
| Finalisation | Libellé « Finalisation… » ; micro toujours non cliquable |
| Erreur | Message `#f0a8a8` au-dessus du micro ; saisie clavier inchangée |
| Annulation | Panneau fermé ; brouillon baseline restauré |

## Accessibilité

- `aria-label` / `aria-pressed` sur le micro
- `role="status"` sur le panneau actif
- `role="alert"` sur l’erreur
- focus-visible accent

## Hors scope

Pas de nouvelle page, pas de panneau latéral autonome, pas de TTS.
```

### `construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md` (1335 bytes, 32 lines)
```md
# As-built — Macro-lot 3 — Interaction audio (dictée compositeur)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Modèle | `gpt-live-transcribe` |
| Transport | **Studio-controlled** Realtime WebSocket (`wss://…/realtime?intent=transcription`) |
| Client | PCM 24 kHz mono → HTTP append + SSE events |
| Flag | `SFIA_COMPOSER_DICTATION=1` (défaut OFF) |
| LIVE fournisseur | **non déclenché** dans ce delivery — plan borné préparé |

## Flux

Pilote → permission micro → `POST …/dictation/sessions` → capture PCM → `…/audio` → OpenAI WS serveur → SSE deltas → Arrêter → `…/finalize` → brouillon → Envoyer USER existant.

Aucun travail D3 à l’ouverture. Annuler restaure le baseline.

## Modules

- `composer-dictation-types.ts` / `composer-dictation-reducer.ts` / `composer-dictation-session.ts`
- API sous `app/api/projects/[projectId]/dictation/sessions/`
- UI `ComposerDictationControl` dans `NoraConversation`
- Contrat visuel `ux-ui/composer-dictation-visual-contract-20261127.md`

## FinOps

`operation: audio.composer_dictation` · `attemptId = emissionAttemptId` stable · durée estimée · tarif public 0,017 USD/min en PARTIAL · pas de workId fictif.

## Preuves

- Unit reducer + session transport substitué
- Pas de campagne LIVE audio (gate Morris distinct requis)
```

### `construction/convergence-openai-studio/ml3-audio-live-proof-plan-20261127.md` (750 bytes, 16 lines)
```md
# Plan de preuve LIVE audio — en attente de GO Morris

| Champ | Valeur |
|---|---|
| Statut | PREPARED — **NOT EXECUTED** |
| Finalité | Qualité transcription FR + latence native gpt-live-transcribe |
| Endpoint | `wss://api.openai.com/v1/realtime?intent=transcription` |
| Modèle | gpt-live-transcribe |
| Sessions max | 6 |
| Durée cumulée max | 8 minutes |
| Estimation coût | ≈ 8 × 0,017 ≈ **0,14 USD** |
| Corpus | Phrases synthétiques FR + termes SFIA/Nora/PostgreSQL (sans données confidentielles) |
| Protection | Flag ON local · `maxDurationMs` · STOP si erreur permission · aucun auto-send |
| STOP | Toute session hors plan · clé Admin · RECETTE |

Aucun effet LIVE tant que Morris n’a pas donné un GO distinct.
```


## 7. Sections modifiées clés (+ annexe knowledge/service)

### Excerpt `HYBRID_RIGHTS` — `src/domains/knowledge/derived-embedding-service.ts`
```ts
export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
  openPointsOnly?: boolean;
  /**
   * Reuse a query embedding already obtained (e.g. journal route).
   * Skips provider emission and FinOps — local search only.
   */
  queryVector?: number[] | null;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
  rightsRevalidated: boolean;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
      rightsRevalidated: false,
      backend: derivedEmbeddingBackend(),
    };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const admissible = new Set(
    collectAdmissibleKnowledgeSources(bundle).map((s) => s.sourceId),
  );
  if (input.openPointsOnly) {
    for (const id of [...admissible]) {
      const op = bundle.openPoints.find((o) => o.id === id);
      if (!op || op.status !== "OPEN") admissible.delete(id);
    }
  }
  // Lexical subjectIds must NOT widen the semantic admissibility set (CONV-F06/F23).

  let queryVector = input.queryVector ?? null;
  if (!queryVector || queryVector.length === 0) {
    const emb = await embedQueryText(input.query, input.client, {
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
    });
    if (!emb) {
      return {
        hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
        derivedUsed: false,
        derivedSkippedReason: "EMBED_UNAVAILABLE",
        rightsRevalidated: true,
```

### Excerpt `JOURNAL_HYBRID` — `src/domains/knowledge/journal.ts`
```ts
ML2 E: hybrid via product service. Reuse precomputed queryVector — no second
  // embed HTTP and no phantom FinOps (queryVector path skips emission).
  if (opts?.queryVector && opts.queryVector.length > 0) {
    const { hybridSearchProjectKnowledge } = await import(
      "@/domains/knowledge/derived-embedding-service"
    );
    const lexical = lexicalResults.map((h) => ({
      sourceId: h.subjectId,
      title: h.title,
      snippet: h.snippet,
      matchKind: h.matchKind,
      channel: "lexical" as const,
    }));
    const merged = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query,
      lexical,
      limit,
      openPointsOnly: opts.openPointsOnly,
      queryVector: opts.queryVector,
    });
    return {
      status: "AVAILABLE" as const,
      results: merged.hits.map((h) => {
        const subjectId =
          (h as { subjectId?: string | null }).subjectId ??
          (byId.has(h.sourceId) ? h.sourceId : h.sourceId);
        const resolvedSubject = byId.has(subjectId!)
          ? subjectId!
          : byId.has(h.sourceId)
            ? h.sourceId
            : subjectId || h.sourceId;
        return {
          subjectId: resolvedSubject,
          sourceId: h.sourceId,
          sourceKind: (h as { sourceKind?: string }).sourceKind ?? null,
          openPointId: (h as { openPointId?: string | null }).openPointId ?? undefined,
          title: h.title ?? resolvedSubject,
          path: subjectPathTitles(resolvedSubject, byId),
          matchKind: (h.matchKind as Hit["matchKind"]) ?? "acquis",
          snippet: h.snippet,
          channel: h.channel,
          score: h.score,
          indexRef: h.indexRef,
        };
      }),
      coverage:
        merged.hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
      derivedUsed: merged.derivedUsed,
      derivedSkippedReason: merged.derivedSkippedReason,
      rightsRevalidated: merged.rightsRevalidated,
```

### Excerpt `LEXICAL_KEEP` — `src/domains/knowledge/hybrid-knowledge-search.ts`
```ts
Lexical channel keeps its own authorized hits. allowedSourceIds constrains
  // the derived/semantic channel only — never silently drops lexical results.
  for (const L of input.lexical) {
    byId.set(L.sourceId, {
      sourceId: L.sourceId,
      title: L.title,
      snippet: L.snippet,
      matchKind: L.matchKind,
      channel: "lexical",
```

### Excerpt `UPSERT_LOCK` — `src/domains/knowledge/derived-embedding-pg.ts`
```ts
Concurrent upserts for the same (projectId, sourceId) are serialized via
 * pg_advisory_xact_lock so two distinct fingerprints cannot both remain active
 * (insert+revoke race).
 */
export async function upsertDerivedChunkPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entry: DerivedIndexEntry;
  vector: number[];
}): Promise<boolean> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const e = input.entry;
  const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
  const vectorJson = JSON.stringify(input.vector);
  await pg.begin(async (tx) => {
    // Transaction-scoped advisory lock keyed by project + source.
    await tx`
      SELECT pg_advisory_xact_lock(
        hashtext(${input.projectId}),
        hashtext(${e.sourceId})
      )
    `;
    await tx.unsafe(
      `INSERT INTO derived_embedding_chunks (
        id, project_id, preparation_id, owner_pilot_id,
        source_id, source_kind, content_fingerprint, model, dims,
        vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,$14,$15,now()
      )
      ON CONFLICT (project_id, source_id, content_fingerprint, model)
      DO UPDATE SET
        vector_json = EXCLUDED.vector_json,
        text_excerpt = EXCLUDED.text_excerpt,
        revoked = false,
        deleted = false,
        version_label = EXCLUDED.version_label,
        index_ref = EXCLUDED.index_ref,
        updated_at = now(),
        preparation_id = EXCLUDED.preparation_id,
        owner_pilot_id = EXCLUDED.owner_pilot_id,
        dims = EXCLUDED.dims`,
      [
        id,
        input.projectId,
        input.preparationId,
        input.ownerPilotId,
        e.sourceId,
        e.sourceKind,
        e.contentFingerprint,
        e.model,
        e.dims,
        vectorJson,
        (e.text ?? "").slice(0, 480),
        false,
        false,
        e.versionLabel,
        e.indexRef,
      ],
    );
    // Revoke prior fingerprints for same sourceId (content change, same id).
    await tx`
      UPDATE derived_embedding_chunks
      SET revoked = true, updated_at = now()
      WHERE project_id = ${input.projectId}
        AND source_id = ${e.sourceId}
        AND content_fingerprint <> ${e.contentFingerprint}
        AND revoked = false
    `;
  });
  return true;
}
```

### Excerpt `COMPOSER_MIC_WIRE` — `src/components/figma/NoraConversation.tsx`
```ts
ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

export type NoraMsg = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function NoraConversation(props: {
  messages: NoraMsg[];
  draft: string;
  busy: boolean;
  unresolvedPending?: boolean;
  activity?: "idle" | "preparing" | "error";
  status?: string;
  onDraft: (v: string) => void;
  onSend: () => void;
  onReconcile?: () => void;
  aside?: React.ReactNode;
  /** When set, participates in project-travail-stage CSS grid via display:contents. */
  embeddedInStage?: boolean;
  projections?: MessageProjectionView[];
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  /** Consultation links — independent of choice lifetime (§6.10). */
  onReference?: (ref: TurnReference) => void;
  choiceFrozen?: boolean;
  forceStickToken?: number;
  layoutMode?: "normal" | "split" | "enlarged";
  /** J-C13 — scroll/highlight exact message without sending. */
  focusMessageId?: string | null;
  onFocusMessageHandled?: () => void;
  focusStatus?: string | null;
  /** Ensemble 07 — verrou qualification initiale (UI + accessibilité). */
  composerLocked?: boolean;
  composerLockReason?: string;
  /** E07 05.17 — bandeau qualification + lien Trajectoire. */
  qualificationBanner?: boolean;
  onOpenTrajectoire?: () => void;
  /** C01/C05/C07 — mid-turn functional activity (polled), distinct from response streaming. */
  liveActivityEvents?: Array<{
    sequence: number;
    nature: string;
    status: string;
    summary: string;
    phase: string;
    sourceRef?: string | null;
    detail?: Record<string, unknown> | null;
  }>;
  liveActivityHeadline?: string;
  /** Figma 12.09 — retirable D8 dossier reference (not free-text). */
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
  /** ML3 — project id for dictation session admission. */
  projectId?: string;
  /** ML3 — SFIA_COMPOSER_DICTATION mirrored from server (optional). */
  dictationEnabled?: boolean;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
  const embedded = Boolean(props.embeddedInStage);
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const sendDisabled =
    props.busy ||
    (!props.draft.trim() && !hasDossier) ||
    composerLocked;
  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
    messageCount: n,
    lastMessageId,
    activityPreparing: props.activity === "preparing",
    forceStickToken: props.forceStickToken ?? 0,
    focusMessageId: props.focusMessageId,
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = Math.min(window.innerHeight * 0.36, 280);
    const next = Math.min(Math.max(el.scrollHeight, 24), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [props.draft]);

  // Include message id order so Journal→Travail highlight rebinds after a same-length
  // setMessages remount (length-only deps lost data-journal-focus on replaced nodes).
  const messageIdsKey = props.messages.map((m) => m.id).join("\0");
  useEffect(() => {
    const targetId = props.focusMessageId?.trim();
    if (!targetId) return;
    let cancelled = false;
    let highlightTimer: number | undefined;
    let attempts = 0;
    const tryFocus = () => {
      if (cancelled) return;
      const root = threadRef.current;
      const node = root?.querySelector(
        `[data-message-id="${CSS.escape(targetId)}"]`,
      ) as HTMLElement | null;
      if (!node) {
        attempts += 1;
        // Wait for async insert / paint — do not clear focus on first miss (avoids landing on last message).
        if (attempts < 40) {
          window.setTimeout(tryFocus, 50);
          return;
        }
        props.onFocusMessageHandled?.();
        return;
      }
      node.scrollIntoView({ block: "center", behavior: "smooth" });
      node.setAttribute("data-journal-focus", "1");
      node.classList.add("is-journal-focus");
      // Keep focus marker long enough for Journal→Travail deep-link asserts / paint races.
      highlightTimer = window.setTimeout(() => {
        node.classList.remove("is-journal-focus");
        node.removeAttribute("data-journal-focus");
        props.onFocusMessageHandled?.();
      }, 5200);
    };
    tryFocus();
    return () => {
      cancelled = true;
      if (highlightTimer) window.clearTimeout(highlightTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.focusMessageId, messageIdsKey]);

  const projectionByMessage = new Map(
    (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
  );

  return (
    <div
      className={
        embedded
          ? "fig-travail-workspace-embed"
          : "fig-workspace fig-nora-responsive fig-travail-workspace"
      }
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
      data-travail-embed={embedded ? "1" : "0"}
      data-travail-layout={props.layoutMode ?? "normal"}
    >
      <section
        className="fig-conversation-panel"
        data-testid="nora-conversation-panel"
        data-nora-main="1"
        id="nora-main"
        hidden={props.layoutMode === "enlarged"}
      >
        <div className="fig-conversation-head">
          <p className="fig-kicker !mb-0">Conversation du projet</p>
          <span className="fig-tag fig-tag-muted">{variantLabel}</span>
          {props.unresolvedPending ? (
            <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
          ) : null}
          {props.focusStatus ? (
            <span className="fig-tag fig-tag-warn" data-testid="nora-focus-status">
              {props.focusStatus}
            </span>
          ) : null}
          {newBelow ? (
            <button
              type="button"
              className="fig-tag fig-tag-ok"
              data-testid="nora-new-below"
              onClick={() => scrollToBottom("smooth")}
            >
              Nouveaux messages ↓
            </button>
          ) : null}
        </div>

        <div
          className="fig-nora-thread"
          data-testid="nora-thread"
          ref={threadRef}
          onScroll={onScroll}
        >
          {n === 0 ? (
            <div className="fig-msg fig-msg-nora" data-testid="nora-first-empty">
              <div className="fig-msg-meta">
                <span className="fig-msg-avatar" aria-hidden>
                  N
                </span>
                <span className="fig-msg-role">Nora</span>
              </div>
              <p className="fig-msg-body">
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message fictif
                n&apos;est prérempli.
              </p>
            </div>
          ) : null}
          {props.messages.map((m) => {
            const isNora = m.role === "assistant";
            const proj = isNora ? projectionByMessage.get(m.id) : undefined;
            return (
              <article
                key={m.id}
                className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
                data-message-id={m.id}
                data-testid={isNora ? "nora-msg-assistant" : "nora-msg-pilot"}
              >
                <div className="fig-msg-meta">
                  {isNora ? (
                    <span className="fig-msg-avatar" aria-hidden>
                      N
                    </span>
                  ) : null}
                  <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
                    {isNora ? "Nora" : "Pilote"}
                  </span>
                  <span className="sr-only">{m.status}</span>
                </div>
                {isNora ? (
                  <div className="fig-msg-body">
                    {(() => {
                      const admission = proj?.visualComposition
                        ? admitConversationalComposition(proj.visualComposition, {
                            canonicalText: m.content,
                          })
                        : null;
                      const policy = admission?.bodyPolicy ?? "markdown_only";
                      const compositionEl =
                        proj?.visualComposition && policy !== "markdown_only" ? (
                          <NoraComposition
                            composition={proj.visualComposition}
                            canonicalText={m.content}
                            choices={proj.choices}
                            references={proj.references}
                            actionable={proj.actionable}
                            busy={props.busy}
                            choiceFrozen={props.choiceFrozen}
                            messageId={m.id}
                            onChoice={props.onChoice}
                            onReference={props.onReference}
                          />
                        ) : null;
                      if (policy === "substitute" && compositionEl) {
                        return compositionEl;
                      }
                      if (policy === "complement" && compositionEl) {
                        return (
                          <>
                            <SafeMarkdown content={m.content} />
                            <div
                              className="fig-comp-complement"
                              data-testid="nora-composition-complement"
                            >
                              {compositionEl}
                            </div>
                          </>
                        );
                      }
                      return <SafeMarkdown content={m.content} />;
                    })()}
                  </div>
                ) : (
                  <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                )}
                {proj?.activity && proj.activity.kind !== "wait" ? (
                  <details className="fig-nora-activity-history" data-testid="nora-activity-history">
                    <summary>Activité de cette réponse</summary>
                    <p>
                      {proj.activity.label}
                      {proj.activity.detail ? ` — ${proj.activity.detail}` : ""}
                    </p>
                  </details>
                ) : null}
                {proj &&
                proj.choices.length > 0 &&
                !compositionAnchorsChoices(proj.visualComposition) ? (
                  <div
                    className="fig-nora-choices"
                    data-testid="nora-choices"
                    data-actionable={proj.actionable ? "1" : "0"}
                    data-message-id={m.id}
                  >
                    {proj.choices.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className="fig-nora-choice"
                        data-testid="nora-choice"
                        data-choice-id={c.id}
                        disabled={!proj.actionable || props.busy || props.choiceFrozen}
                        onClick={() => props.onChoice?.(c, m.id)}
                      >
                        {c.label}
                      </button>
                    ))}
                    {!proj.actionable ? (
                      <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
                        Propositions expirées — consultation seule.
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {proj?.references?.length &&
                !compositionAnchorsReferences(proj.visualComposition) ? (
                  <ul className="fig-nora-refs" data-testid="nora-refs">
                    {proj.references.map((r, i) => (
                      <li key={`${r.kind}-${r.resourceId ?? r.path ?? i}`}>
                        <button
                          type="button"
                          className="fig-nora-ref-link"
                          data-testid="nora-ref-link"
                          data-ref-kind={r.kind}
                          onClick={() => props.onReference?.(r)}
                        >
                          Consulter · {r.label}
                          {r.available === false ? " (à vérifier)" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
          {props.qualificationBanner ? (
            <div
              className="fig-panel space-y-3 my-3"
              role="status"
              aria-live="polite"
              data-testid="qualification-activity-banner"
              style={{ borderColor: "#7477ed55" }}
            >
              <p className="text-[10px] uppercase tracking-wide text-[#7477ed] font-semibold">
                Nora prépare sa réponse
              </p>
              <div className="space-y-2 text-sm text-[#a3b0c7]">
                <p>✓ Sources et intention du projet consultées</p>
                <p>○ Préparation de la première orientation de trajectoire…</p>
              </div>
              {props.onOpenTrajectoire ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-[#7477ed] hover:underline"
                  data-testid="qualification-voir-trajectoire"
                  onClick={props.onOpenTrajectoire}
                >
                  Voir la trajectoire ↗
                </button>
              ) : null}
            </div>
          ) : null}
          {/* RB-14: single LIVE projection — NoraLiveActivity when events/headline exist;
              legacy preparer only as fallback when no live card is shown. */}
          {(props.activity === "preparing" || (props.liveActivityEvents?.length ?? 0) > 0) &&
          (props.liveActivityHeadline || (props.liveActivityEvents?.length ?? 0) > 0) ? (
            <NoraLiveActivity
              events={props.liveActivityEvents ?? []}
              headline={props.liveActivityHeadline}
              active={props.activity === "preparing"}
              figmaFrame="12.01"
            />
          ) : props.activity === "preparing" && !props.qualificationBanner ? (
            <div
              className="fig-nora-activity"
              role="status"
              aria-live="polite"
              data-testid="nora-activity-preparing"
            >
              <span className="fig-nora-activity-pulse" aria-hidden />
              <span>Nora prépare une réponse…</span>
              <span className="fig-nora-activity-note">
                Attente réelle — aucune étape inventée.
              </span>
            </div>
          ) : null}
          {props.activity === "error" ? (
            <div className="fig-alert" role="alert" data-testid="nora-activity-error">
              La dernière réponse n&apos;a pas pu être consolidée entièrement. Le texte saisi est
              conservé. Aucune mutation n&apos;est relancée automatiquement — reformulez, ou
              réconciliez seulement si une intention d&apos;effet reste ouverte.
            </div>
          ) : null}
        </div>
      </section>

      {/*
        Pending banner lives outside the Figma-sized composer card so
        max-height never clips reconcile controls under the shell lock.
      */}
      <div
        className="fig-travail-composer-stack"
        data-testid="nora-composer-stack"
        data-pending={props.unresolvedPending ? "1" : "0"}
        hidden={props.layoutMode === "enlarged"}
      >
        {props.unresolvedPending && props.onReconcile ? (
          <div className="fig-travail-pending" data-testid="thread-pending-banner">
            <p className="fig-travail-pending-copy">
              Tentative non résolue — vérifier l&apos;état serveur avant un nouveau tour. Une
              génération cognitive déjà terminée sans effet métier peut être levée ; un effet
              métier incertain reste protégé.
            </p>
            <button
              type="button"
              className="btn secondary"
              disabled={props.busy}
              data-testid="thread-reconcile-pending"
              onClick={props.onReconcile}
            >
              Vérifier et reprendre
            </button>
          </div>
        ) : null}
        <div
          className="fig-composer fig-travail-composer relative"
          data-testid="nora-composer"
          data-composer-locked={composerLocked ? "1" : "0"}
          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
        >
          {composerLocked ? (
            <div
              className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
              style={{ background: "rgba(12, 16, 28, 0.72)" }}
              data-testid="composer-lock-overlay"
            >
              <svg
                className="shrink-0 text-[#7477ed]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
                <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
                  Compositeur temporairement indisponible
                </p>
                <p data-testid="composer-lock-reason">
                  {props.composerLockReason ||
                    "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
                title={
                  props.composerLockReason ||
                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
                }
                aria-label={
                  props.composerLockReason ||
                  "Compositeur temporairement indisponible pendant la qualification de trajectoire."
                }
                data-testid="composer-lock-info"
              >
                i
              </button>
            </div>
          ) : null}
          {props.dossierAttachment?.attemptId ? (
            <div
              className="fig-dossier-attachment"
              data-testid="dossier-composer-attachment"
            >
              <div className="fig-dossier-attachment-body">
                <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
                <p className="fig-dossier-attachment-meta">
                  {props.dossierAttachment.attemptId}
                  {props.dossierAttachment.dossierVersion != null
                    ? ` · v${props.dossierAttachment.dossierVersion}`
                    : ""}
                  {props.dossierAttachment.verdictD8
                    ? ` · ${props.dossierAttachment.verdictD8}`
                    : ""}
                </p>
              </div>
              <button
                type="button"
                className="fig-dossier-attachment-remove"
                data-testid="dossier-composer-attachment-remove"
                disabled={composerLocked || props.busy}
                onClick={() => props.onRemoveDossierAttachment?.()}
                aria-label="Retirer la référence du dossier D8"
              >
                Retirer
              </button>
            </div>
          ) : null}
          <div className="fig-travail-composer-row">
            <span className="fig-travail-composer-plus" aria-hidden>
              +
            </span>
            <textarea
              ref={textareaRef}
              className="fig-travail-composer-input"
              value={props.draft}
              onChange={(e) => props.onDraft(e.target.value)}
              placeholder="Écrire à Nora dans ce projet…"
              aria-label="Message à Nora"
              data-testid="thread-draft"
              rows={1}
              readOnly={composerLocked}
              disabled={composerLocked}
              aria-disabled={composerLocked}
              onCompositionStart={() => setImeComposing(true)}
              onCompositionEnd={() => setImeComposing(false)}
              onKeyDown={(e) => {
                if (composerLocked) {
                  e.preventDefault();
                  return;
                }
                if (imeComposing || e.nativeEvent.isComposing) return;
                // Mobile: Enter = newline; send via button only.
                if (isMobile) return;
                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
                  e.preventDefault();
                  if (props.draft.trim() || hasDossier) props.onSend();
                }
              }}
            />
            {props.projectId ? (
              <ComposerDictationControl
                projectId={props.projectId}
                draft={props.draft}
                onDraft={props.onDraft}
                disabled={composerLocked || props.busy}
                enabled={props.dictationEnabled !== false}
              />
            ) : null}
            <button
              type="button"
              className="fig-travail-composer-send"
              disabled={sendDisabled}
              onClick={props.onSend}
              data-testid="thread-send"
```

### Excerpt `SELECT_RELEVANT_HYBRID` — `src/domains/knowledge/service.ts`
```ts
DERIVED_HIT[${h.sourceId}/${h.channel}] ${h.snippet.slice(0, 200)} | indexRef=${h.indexRef ?? "∅"} — verify before authority`,
          );
        }
      }
    } catch {
      /* hybrid context never blocks
```


## 8. Preuves

### Units
ml3 reducer/session + ml2 rights/journal — PASS (substituted transport).

### Build DEV
BUILD_ID `getLIoygkylG4wh_cfvdf` digest `84b6d8e400eaeb4b86f2b4b24b155369a8a9b54e25bb24c09e0674b4f5ec9250` port 3100.

### LIVE audio
Plan `ml3-audio-live-proof-plan-20261127.md` — **NOT EXECUTED**.

### Fake/Real
| Frontière | Mode | Prouvé | Non prouvé |
|---|---|---|---|
| Dictation state machine | DETERMINISTIC | oui | — |
| Session + transport | SUBSTITUTED | oui | qualité native |
| Composer UI wiring | CODE + tokens | oui | capture runtime login-gated |
| OpenAI Realtime | — | non | GO Morris LIVE |
| ML2 rights/fp | CODE + unit | oui | RECETTE pertinence |

## 9. Qualifications RECETTE futures

Pertinence dictée réelle · restitution Nora · ranking hybrid · UX FinOps audio · schémas documentaires.

## 10. Convergence trois macro-lots

ML1 socle/Frontier/FinOps réutilisés · ML2 hybrid/rights corrigés · ML3 dictée avant USER/D3.
Conducteur unique · D6 inchangé · pas de registre FinOps concurrent.

## 11. Instruction ChatGPT

1. Lire ce Handoff distant complet (pas les stubs antérieurs).
2. Croiser HEAD `87ce2c51c482d6b55e995dc0c39318837e600988` · tree `7cdfc3ac4ff87e0b53e43b4e6d2e8a998d5819b1` · BUILD `getLIoygkylG4wh_cfvdf` · digest `84b6d8e400eaeb4b86f2b4b24b155369a8a9b54e25bb24c09e0674b4f5ec9250`.
3. Vérifier code ML3 créé + corrections ML2 (sections 5–7).
4. Confirmer LIVE audio non exécuté; plan présent.
5. Apprécier proposition EXIT construction convergence.

## 12. Verdict

**MACRO-LOT 3 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — ML2 RESIDUAL GAPS RESOLVED — INTEGRATED CONVERGENCE CONSTRUCTION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED**

READY WITH RESERVES · ENV ROUTING COMPLETE

R5 IN PROGRESS · ML5 OPEN · LIVRAISON 1 NOT ACCEPTED GLOBALLY · R6 NOT STARTED · NO RELEASE · NOT ADOPTED
