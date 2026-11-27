# SFIA Review Pack FULL — DICTATION NOMINAL PATH (FINAL CORRECTIVE)


| Champ | Valeur |
|---|---|
| Mandate | DICTATION NOMINAL PATH — FINAL CORRECTIVE DELIVERY |
| Handoff after | `5bd6bb28` (as-built macro-lot 3 audio) |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `f0c905e79d9244939233c36c65d44e0a92b9bf01` |
| HEAD sortie | `8e54d7fe84df4af1149fce142b9b879910eb9d0b` |
| tree sortie | `af5466f40a0ce6219e83dad0fc07e4fab84a538a` |
| BUILD final | `dRmFP_CKHNL8g6MOXuA1q` |
| digest | `0a64a2616950c13f5da39aa9212a0abd69d0c8b781ebcceeadc7b2101356b23c` |
| main merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Pack generated | 2026-11-27 (Cursor subagent) |
| Reset policy | **COMPLETE RESET** — no historical append |


## 1. Git Truth Check


```text
branch=sfia/next-ml5-integrated-delivery-20261123
HEAD=f0c905e79d9244939233c36c65d44e0a92b9bf01
merge-base(origin/main)=997897fd7cf914771e7d08e8030dc7123fab7d25
git status -sb:
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-types.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts
 M projects/sfia-studio-next/web/tests/qualify/ml3-composer-dictation-integrated.spec.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/capability/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/
?? projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-admission.ts
?? projects/sfia-studio-next/web/tests/qualify/ml3-dictation-nominal-path.spec.ts
git log -1: f0c905e7 fix(ml3): align dictation seq and prove integrated product path
```

**Verdict:** Branch and HEAD match mandate. Merge-base equals mandated `997897fd…`. Working tree carries ML3 nominal-path deltas (uncommitted documentation + evidence path) atop commit `f0c905e7`.


## 2. ENV-01 — DEV routing


| Item | Value |
|---|---|
| Lane | **DEV** |
| HTTP | `127.0.0.1:3100` (qualify-next-start for Playwright) |
| PostgreSQL | `:5433` / `sfia_next_dev` |
| Schema | **027** applied on DEV (RECETTE `:5434` **protected**, not mutated) |
| WEB LIVE | **OFF** / blocked (0 provider emissions on public web parcours) |
| Qualify flags (during C01–C03) | `SFIA_COMPOSER_DICTATION=1`, `SFIA_DICTATION_TRANSPORT=fixture`, `SFIA_DICTATION_SUBSTITUTED=1`, fixture auto-transcript + commit delays |
| Flags after restore | `SFIA_COMPOSER_DICTATION` and related product flags **OFF** (default) — capability probe returns `enabled: false` |
| Effect class | `substituted` on qualify lane — **≠ OpenAI LIVE** |
| Provider LIVE audio | **NOT EXECUTED** |

**Verdict:** `ENV ROUTING COMPLETE` — construction confined to DEV substituted qualify; RECETTE protected; WEB LIVE OFF; post-qualify flags restored OFF.


## 3. Inventory ENTRÉE → SORTIE


### Modified (working tree / delivery scope)
- `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts` — Correctif A (`commitsAwaitingAck`, finalize drain)
- `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-transport-fixture.ts` — delayed commit/complete for qualify
- `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-types.ts` — flags / transport env
- `projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-admission.ts` — **new** Correctif B
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/capability/route.ts` — **new**
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts` — **new** (C03 late event)
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` — capability probe → `dictationEnabled`
- `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` — mic gated `dictationEnabled === true`
- `projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts` — delayed commit regression
- `projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts`
- `projects/sfia-studio-next/web/tests/qualify/ml3-composer-dictation-integrated.spec.ts` — defers nominal proof to C01–C03 spec
- `projects/sfia-studio-next/web/tests/qualify/ml3-dictation-nominal-path.spec.ts` — **new** Correctif C
- `projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-3-audio-20261127.md`
- `projects/sfia-studio-next/construction/delivery-history.md` — `DELIV-2026-11-27-…-DICTATION-NOMINAL-PATH-FINAL`
- `.tmp-sfia-review/chatgpt-review.md` — this pack

### Evidence artifacts (runtime, under web tree)
- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-oracle.json`
- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c02-oracle.json`
- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c03-oracle.json`
- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-during-dictation.png`
- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-after-draft.png`

### Retained (non-nominal harness — not counted as product proof)
- `projects/sfia-studio-next/web/src/app/dev/dictation-harness/page.tsx`
- `projects/sfia-studio-next/web/src/app/dev/dictation-visual/[state]/page.tsx`


## 4. Defect reproduction — finalize race


**Symptom (pre-Correctif A):** On stop/finalize, `maybeCompleteFinalization` could run when `awaitingFinalItemIds` was already empty **while a final `input_audio_buffer.commit` was still in flight**. The provider had not yet emitted `input_audio_buffer.committed` + `conversation.item.input_audio_transcription.completed` for the trailing PCM buffer. Finalization therefore completed early (truncated transcript) or raced cancel/finalize.

**Mechanism fixed:** Track `commitsAwaitingAck` (increment on `sendAudioCommit`, decrement on `input_audio_buffer.committed`). Finalize waits until `commitsAwaitingAck === 0` **and** `awaitingFinalItemIds` empty **and** no provisional items.

**Deterministic unit reproduction — `delayedCommitTransport(75)`** delays commit ack + completion **after** finalize issues commit:


```typescript
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
```


```typescript
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
```


## 5. Correctif A — `composer-dictation-session.ts` (COMPLETE FUNCTIONS)

### Session record fields (excerpt)

```typescript
  /** Committed item_ids not yet completed — finalize waits until empty. */
  awaitingFinalItemIds: Set<string>;
  /** Commits sent to provider, not yet acknowledged via input_audio_buffer.committed. */
  commitsAwaitingAck: number;
  /** Bytes buffered since last provider commit while listening. */
  pcmBytesSinceLastCommit: number;
```


### `handleProviderEvent` — commit ack path (excerpt)

```typescript
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
```


### maybeCompleteFinalization — COMPLETE FUNCTION

```typescript
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
```


### shouldSendAudioCommit — COMPLETE FUNCTION

```typescript
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
```


### sendAudioCommit — COMPLETE FUNCTION

```typescript
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
```


### finalizeDictationSession — COMPLETE FUNCTION

```typescript
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
```


### waitForFinalization — COMPLETE FUNCTION

```typescript
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
```


## 6. Correctif B — admission + wiring + FinOps

### FULL FILE `composer-dictation-admission.ts`

```typescript
import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import { composerDictationEnabled } from "./composer-dictation-types";

export type DictationEmissionAdmission =
  | {
      ok: true;
      mode: "live" | "substituted";
      lane: string;
      keyFingerprint: string | null;
      effectClass: "provider_live" | "substituted";
    }
  | { ok: false; code: string; message: string };

/**
 * Fail-closed admission before opening a Realtime transcription transport.
 * Fixture transport never falls through to live OpenAI.
 */
export function admitDictationProviderEmission(input: {
  env?: NodeJS.ProcessEnv;
  projectId: string;
  pilotId: string;
}): DictationEmissionAdmission {
  void input.projectId;
  void input.pilotId;
  const env = input.env ?? process.env;
  if (!composerDictationEnabled(env)) {
    return {
      ok: false,
      code: "FLAG_OFF",
      message: "Composer dictation is not enabled (SFIA_COMPOSER_DICTATION).",
    };
  }

  const lane = (env.STUDIO_LANE ?? "").trim().toUpperCase() || "UNKNOWN";
  const transportKind = (env.SFIA_DICTATION_TRANSPORT || "").trim();

  if (transportKind === "fixture") {
    const vitest = env.VITEST === "true";
    const substitutedQual =
      (env.SFIA_DICTATION_SUBSTITUTED || "").trim() === "1" && lane === "DEV";
    if (!vitest && !substitutedQual) {
      return {
        ok: false,
        code: "FIXTURE_NOT_ADMITTED",
        message:
          "Fixture dictation transport requires VITEST or SFIA_DICTATION_SUBSTITUTED=1 on DEV lane.",
      };
    }
    return {
      ok: true,
      mode: "substituted",
      lane,
      keyFingerprint: null,
      effectClass: "substituted",
    };
  }

  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    const code =
      laneGuard.reasonCode === "OPENAI_KEY_MISSING"
        ? "NO_PROVIDER_KEY"
        : "LANE_GUARD";
    return {
      ok: false,
      code,
      message: laneGuard.reason.slice(0, 240),
    };
  }

  return {
    ok: true,
    mode: "live",
    lane: laneGuard.lane,
    keyFingerprint: laneGuard.keyFingerprint,
    effectClass: "provider_live",
  };
}

/** Narrow live check for call sites that must not open substituted transports. */
export function assertDictationEmissionAllowed(
  env: NodeJS.ProcessEnv = process.env,
): { ok: true } | { ok: false; code: string; message: string } {
  const admission = admitDictationProviderEmission({
    env,
    projectId: "",
    pilotId: "",
  });
  if (!admission.ok) {
    return { ok: false, code: admission.code, message: admission.message };
  }
  if (admission.mode !== "live") {
    return {
      ok: false,
      code: "SUBSTITUTED_ONLY",
      message: "Live transcription requires non-fixture transport admission.",
    };
  }
  return { ok: true };
}
```


### Capability route

```typescript
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import { composerDictationEnabled } from "@/domains/conversation/composer-dictation-types";

/** ML3 — product flag preview for composer dictation (no transport open). */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    await assertOwnedProject(session.pilotId, projectId);
    const enabled = composerDictationEnabled();
    return NextResponse.json({
      ok: true,
      enabled,
      admittedPreview: enabled,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### `page.tsx` — capability probe

```typescript
  const [dictationEnabled, setDictationEnabled] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  useEffect(() => {
    if (surface !== "travail") return;
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch(
          `/api/projects/${params.projectId}/dictation/capability`,
        );
        if (!res.ok) return;
        const data = (await res.json()) as { ok?: boolean; enabled?: boolean };
        if (!cancelled && data.ok) {
          setDictationEnabled(data.enabled === true);
        }
      } catch {
        /* capability probe is best-effort */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [params.projectId, surface]);
```


### `NoraConversation.tsx` — ComposerDictationControl wiring

```tsx
            {props.projectId ? (
              <ComposerDictationControl
                projectId={props.projectId}
                draft={props.draft}
                onDraft={props.onDraft}
                disabled={composerLocked || props.busy}
                enabled={props.dictationEnabled === true}
                onActiveChange={setDictationActive}
              />
            ) : null}
```


### Fixture-push route (C03)

```typescript
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";
import { assertOwnedProject } from "@/domains/conversation/assert-owned-project";
import { getDictationSession } from "@/domains/conversation/composer-dictation-session";
import { getDictationFixtureTransport } from "@/domains/conversation/composer-dictation-transport-fixture";

function dictationFixturePushAllowed(env: NodeJS.ProcessEnv = process.env): boolean {
  if ((env.STUDIO_LANE ?? "").trim() !== "DEV") return false;
  if (env.VITEST === "true") return true;
  if ((env.SFIA_DICTATION_SUBSTITUTED ?? "").trim() === "1") return true;
  return false;
}

/** DEV-only inject — push a substituted provider event into an active fixture session. */
export async function POST(
  req: Request,
  ctx: {
    params: Promise<{ projectId: string; sessionId: string }>;
  },
) {
  try {
    if (!dictationFixturePushAllowed()) {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_PUSH_FORBIDDEN" },
        { status: 403 },
      );
    }
    if ((process.env.SFIA_DICTATION_TRANSPORT || "").trim() !== "fixture") {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_TRANSPORT_INACTIVE" },
        { status: 403 },
      );
    }
    const session = await requireStudioSession();
    const { projectId, sessionId } = await ctx.params;
    await assertOwnedProject(session.pilotId, projectId);

    const rec = getDictationSession(sessionId);
    if (!rec || rec.pilotId !== session.pilotId || rec.projectId !== projectId) {
      return NextResponse.json({ ok: false, code: "NOT_FOUND" }, { status: 404 });
    }

    const transport = getDictationFixtureTransport(sessionId);
    if (!transport) {
      return NextResponse.json(
        { ok: false, code: "FIXTURE_TRANSPORT_NOT_ACTIVE" },
        { status: 404 },
      );
    }

    const body = (await req.json().catch(() => ({}))) as {
      event?: Record<string, unknown>;
    };
    if (!body.event || typeof body.event !== "object") {
      return NextResponse.json(
        { ok: false, code: "INVALID_BODY", message: "event object required" },
        { status: 400 },
      );
    }

    transport.push(body.event);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```


### FinOps `recordDictationFinops` — EFFECT_SUBSTITUTED excerpt

```typescript
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
```


## 7. Correctif C — FULL qualify spec

### FULL FILE `tests/qualify/ml3-dictation-nominal-path.spec.ts`

```typescript
/**
 * ML3 dictation nominal path — product NoraConversation on /projects/{id}?surface=travail.
 *
 * Requires qualify server (`npm run qualify:start`) with:
 *   STUDIO_LANE=DEV
 *   STUDIO_DEV_TEST_LOGIN=1
 *   SFIA_COMPOSER_DICTATION=1
 *   SFIA_DICTATION_TRANSPORT=fixture
 *   SFIA_DICTATION_SUBSTITUTED=1
 *   SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT=1
 *   SFIA_DICTATION_FIXTURE_COMMIT_DELAY_MS=80
 *   SFIA_DICTATION_FIXTURE_COMPLETE_DELAY_MS=120
 *   STUDIO_FORCE_NORA_FIXTURE=1
 *
 * Run: npx playwright test tests/qualify/ml3-dictation-nominal-path.spec.ts -c playwright.qualify.config.ts
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml3-dictation-nominal-path",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(180_000);

let projectId = "";
let serverUp = false;

async function ensureQualifyServer(
  request: import("@playwright/test").APIRequestContext,
): Promise<boolean> {
  const res = await request.get("/login").catch(() => null);
  return Boolean(res?.ok());
}

async function login(page: import("@playwright/test").Page) {
  // Prefer auto-session — login button can detach under concurrent RSC remounts.
  const auto = await page.request.post("/api/dev/auto-session");
  if (!auto.ok()) {
    await page.goto("/login", { waitUntil: "domcontentloaded" });
    const testBtn = page.getByRole("button", {
      name: /Pilote A|connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click({ timeout: 15_000 });
    } else {
      throw new Error(`auto-session failed status=${auto.status()}`);
    }
  }
  await page.goto("/portfolio", { waitUntil: "domcontentloaded" });
  await page.waitForURL(/\/(portfolio|projects|preparations)/, { timeout: 60_000 });
}

async function assertDictationCapability(
  request: import("@playwright/test").APIRequestContext,
  pid: string,
) {
  const res = await request.get(
    `/api/projects/${encodeURIComponent(pid)}/dictation/capability`,
  );
  if (!res.ok()) {
    const bodyText = await res.text().catch(() => "");
    throw new Error(
      `dictation capability route failed status=${res.status()} body=${bodyText.slice(0, 240)}`,
    );
  }
  const body = (await res.json()) as { enabled?: boolean; ok?: boolean };
  if (!body.enabled) {
    throw new Error(
      "SFIA_COMPOSER_DICTATION off or capability disabled on qualify server (no skip — set env)",
    );
  }
}

function installOscillatorMic(page: import("@playwright/test").Page) {
  return page.addInitScript(() => {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (AC) {
      const Patched = class extends AC {
        constructor(contextOptions?: AudioContextOptions) {
          super(contextOptions);
          void this.resume().catch(() => undefined);
        }
      };
      (window as unknown as { AudioContext: typeof AudioContext }).AudioContext =
        Patched as typeof AudioContext;
    }

    const orig = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async (constraints) => {
      if (!constraints?.audio) return orig(constraints as MediaStreamConstraints);
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      void ctx.resume().catch(() => undefined);
      const osc = ctx.createOscillator();
      const dest = ctx.createMediaStreamDestination();
      osc.frequency.value = 440;
      osc.connect(dest);
      osc.start();
      const track = dest.stream.getAudioTracks()[0];
      if (track) track.enabled = true;
      const tracks = dest.stream.getTracks();
      (
        window as unknown as { __sfiaDictationMediaTracks?: MediaStreamTrack[] }
      ).__sfiaDictationMediaTracks = tracks;
      // Silence capture immediately — ScriptProcessor is unreliable in headless;
      // tests pump a bounded PCM volume through the product audio route instead.
      queueMicrotask(() => {
        for (const t of tracks) {
          try {
            t.stop();
          } catch {
            /* */
          }
        }
      });
      return dest.stream;
    };
  });
}

/**
 * Real product audio route with a bounded PCM volume (~3 fixture commits).
 * Browser ScriptProcessor uploads are absorbed by page.route so only the pump
 * reaches the server (headless capture is noisy/unreliable).
 */
async function ensureAudioFragments(
  page: import("@playwright/test").Page,
  pid: string,
  sessionId: string,
  commits = 3,
) {
  const pcm = Buffer.alloc(4_000, 1).toString("base64");
  await page.waitForTimeout(100);
  const posts = Math.max(2, commits * 2);
  for (let i = 0; i < posts; i++) {
    const res = await page.request.post(
      `/api/projects/${encodeURIComponent(pid)}/dictation/sessions/${encodeURIComponent(sessionId)}/audio`,
      {
        data: { pcmBase64: pcm },
        headers: { "x-sfia-dictation-pump": "1" },
      },
    );
    if (!res.ok()) {
      const body = await res.text().catch(() => "");
      throw new Error(`audio pump failed status=${res.status()} ${body.slice(0, 160)}`);
    }
    await page.waitForTimeout(80);
  }
  await page.waitForTimeout(500);
  return { pumped: true, posts };
}

async function gotoTravail(page: import("@playwright/test").Page, pid: string) {
  await page.goto(`/projects/${encodeURIComponent(pid)}?surface=travail`, {
    waitUntil: "domcontentloaded",
  });
  const mic = page.getByTestId("composer-mic");
  await expect(mic).toBeVisible({ timeout: 45_000 });
}

async function waitForDictationProvisional(
  page: import("@playwright/test").Page,
  pattern: RegExp,
  timeoutMs = 60_000,
) {
  const shell = page.getByTestId("composer-dictation");
  await expect(shell).toBeVisible({ timeout: 45_000 });
  const prov = page.getByTestId("dictation-provisional");
  await expect
    .poll(
      async () => {
        if (!(await prov.isVisible().catch(() => false))) return "";
        return (await prov.innerText()).trim();
      },
      { timeout: timeoutMs, intervals: [250, 500, 1000] },
    )
    .toMatch(pattern);
}

async function stopDictationAndWaitMic(page: import("@playwright/test").Page) {
  await page.getByTestId("dictation-stop").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 60_000 });
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);
}

async function startDictation(
  page: import("@playwright/test").Page,
  opts?: { projectId?: string; pumpAudio?: boolean },
): Promise<string> {
  // Install before mic click so native ScriptProcessor frames never reach the server.
  if (opts?.pumpAudio !== false) {
    await page.route("**/dictation/sessions/*/audio", async (route) => {
      if (route.request().headers()["x-sfia-dictation-pump"] === "1") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, suppressed: true }),
      });
    });
  }

  let sessionId = "";
  let createError = "";
  const onResp = async (res: import("@playwright/test").Response) => {
    if (res.request().method() !== "POST") return;
    if (!/\/dictation\/sessions(?:\?|$)/.test(res.url())) return;
    if (/\/dictation\/sessions\/[^/]+\//.test(res.url())) return;
    const j = (await res.json().catch(() => null)) as {
      sessionId?: string;
      ok?: boolean;
      code?: string;
      message?: string;
    } | null;
    if (j?.sessionId) sessionId = j.sessionId;
    if (!res.ok() || j?.ok === false) {
      createError = `${res.status()}:${j?.code || j?.message || "create_failed"}`;
    }
  };
  page.on("response", onResp);
  await page.getByTestId("composer-mic").click();
  await expect(page.getByTestId("composer-dictation")).toBeVisible({ timeout: 45_000 });
  await expect
    .poll(
      async () => (createError ? `ERR:${createError}` : sessionId),
      { timeout: 20_000, intervals: [100, 250] },
    )
    .toMatch(/^[0-9a-f-]{36}$/i);
  page.off("response", onResp);
  if (opts?.pumpAudio !== false && opts?.projectId) {
    await ensureAudioFragments(page, opts.projectId, sessionId);
  }
  return sessionId;
}

test.beforeAll(async ({ request }) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  serverUp = await ensureQualifyServer(request);
  if (!serverUp) {
    throw new Error("qualify server required — run npm run qualify:start");
  }
});

test.beforeEach(async ({ page }) => {
  if (!serverUp) {
    throw new Error("qualify server required");
  }
  await installOscillatorMic(page);
  await login(page);
  if (!projectId) {
    await openNewPreparation(page);
    const name = uniqueProjectName("DictNominal");
    projectId = await constituteAndCreateProject(page, {
      name,
      summary: "ML3 dictation nominal path qualify",
    });
    // Use page.request so the authenticated browser cookie jar is shared.
    await assertDictationCapability(page.request, projectId);
  }
  await gotoTravail(page, projectId);
});

test("C01 — Parcours nominal complet", async ({ page }) => {
  const draft = page.getByTestId("thread-draft");
  await expect(draft).toBeVisible({ timeout: 30_000 });
  await draft.fill("Brouillon initial. ");
  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /Première phrase dictée|phrase dictée/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "c01-during-dictation.png"),
    fullPage: true,
  });

  const toggle = page.getByTestId("dictation-toggle-text");
  if (await toggle.isVisible()) {
    await toggle.click();
    await toggle.click();
  }

  // Allow delayed complete events for the last commit, then stop.
  await page.waitForTimeout(800);
  const draftBeforeStop = await draft.inputValue();
  await stopDictationAndWaitMic(page);

  await expect
    .poll(async () => draft.inputValue(), { timeout: 45_000 })
    .toMatch(/Brouillon initial/i);
  const draftAfterDictation = await draft.inputValue();
  expect(draftAfterDictation).toMatch(/Première phrase dictée/i);
  expect(draftAfterDictation).toMatch(/Deuxième phrase dictée/i);
  expect(draftAfterDictation).toMatch(/Troisième phrase dictée/i);
  // Ordered once each — no rotating duplication from over-pumping.
  expect(draftAfterDictation).toMatch(
    /Première phrase dictée\.?\s*Deuxième phrase dictée\.?\s*Troisième phrase dictée/i,
  );
  expect(draftAfterDictation).not.toMatch(
    /Première phrase dictée[\s\S]*Première phrase dictée/,
  );

  await page.screenshot({
    path: path.join(EVIDENCE, "c01-after-draft.png"),
    fullPage: true,
  });

  await draft.fill(`${draftAfterDictation} Édité clavier.`);
  const draftBeforeSend = await draft.inputValue();
  const send = page.getByTestId("thread-send");
  await expect(send).toBeEnabled({ timeout: 15_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: 60_000 });

  await expect(
    page.getByText(draftBeforeSend.slice(0, Math.min(40, draftBeforeSend.length)), {
      exact: false,
    }).first(),
  ).toBeVisible({ timeout: 60_000 });

  const pilotBubbles = page.getByTestId("nora-msg-pilot");
  await expect
    .poll(async () => pilotBubbles.count(), { timeout: 30_000 })
    .toBeGreaterThanOrEqual(1);

  const matching = await pilotBubbles.filter({ hasText: /Édité clavier/i }).count();
  expect(matching).toBe(1);

  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText(/contact.*fournisseur|provider.*live/i)).toHaveCount(0);

  const oracle = {
    projectId,
    draftBeforeSend,
    messageObserved: true,
    ok: true,
    draftBeforeStop,
    draftAfterDictation,
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "c01-oracle.json"),
    JSON.stringify(oracle, null, 2),
  );
});

test("C02 — Annulation et dictées successives", async ({ page }) => {
  const draft = page.getByTestId("thread-draft");
  await draft.fill("Base C02. ");

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(3_000);
  await stopDictationAndWaitMic(page);
  const afterDict1 = await draft.inputValue();
  expect(afterDict1).toMatch(/Base C02/i);
  expect(afterDict1.length).toBeGreaterThan("Base C02. ".length);

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(3_000);
  await stopDictationAndWaitMic(page);
  const afterDict2 = await draft.inputValue();
  expect(afterDict2.length).toBeGreaterThan(afterDict1.length);

  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i);
  await page.waitForTimeout(500);
  const baselineCancel = afterDict2;
  await page.getByTestId("dictation-cancel").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 45_000 });
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);

  await expect(draft).toHaveValue(baselineCancel);
  const evidence = {
    projectId,
    afterDict1,
    afterDict2,
    afterCancel: await draft.inputValue(),
    ok: (await draft.inputValue()) === baselineCancel,
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "c02-oracle.json"),
    JSON.stringify(evidence, null, 2),
  );
  expect(evidence.ok).toBe(true);
});

test("C03 — Protection et finalisation différée", async ({ page, playwright }) => {
  const draft = page.getByTestId("thread-draft");
  const api = page.request;

  const cap = await api.get(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/capability`,
  );
  expect(cap.ok()).toBe(true);
  const capBody = (await cap.json()) as { enabled?: boolean };
  expect(capBody.enabled).toBe(true);

  const unowned = await api.post(
    `/api/projects/00000000-0000-0000-0000-000000000000/dictation/sessions`,
    { data: { baselineDraft: "x", conversationKey: "x" } },
  );
  expect([403, 404]).toContain(unowned.status());

  const qualifyBase =
    process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100";
  const bare = await playwright.request.newContext({ baseURL: qualifyBase });
  const noAuth = await bare.post(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/sessions`,
    { data: { baselineDraft: "probe", conversationKey: projectId } },
  );
  expect([401, 403]).toContain(noAuth.status());
  await bare.dispose();

  await draft.fill("Base C03. ");
  await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /Première phrase dictée/i, 60_000);
  await page.getByTestId("dictation-stop").click();
  await expect
    .poll(async () => draft.inputValue(), { timeout: 30_000, intervals: [200, 500, 1000] })
    .toMatch(/phrase dictée/i);
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 60_000 });
  const delayedDraft = await draft.inputValue();
  expect(delayedDraft).toMatch(/Base C03/i);

  await draft.fill("Baseline C03 late. ");
  const baselineLate = "Baseline C03 late. ";
  const sid = await startDictation(page, { projectId });
  await waitForDictationProvisional(page, /phrase dictée/i, 45_000);
  await page.getByTestId("dictation-cancel").click();
  await expect(page.getByTestId("composer-mic")).toBeVisible({ timeout: 45_000 });
  await expect(draft).toHaveValue(baselineLate);

  const latePush = await api.post(
    `/api/projects/${encodeURIComponent(projectId)}/dictation/sessions/${encodeURIComponent(sid)}/fixture-push`,
    {
      data: {
        event: {
          type: "conversation.item.input_audio_transcription.completed",
          item_id: "fixture_late_fake",
          transcript: "Événement tardif fantôme.",
        },
      },
    },
  );
  expect(latePush.ok()).toBe(true);

  await page.waitForTimeout(800);
  await expect(draft).toHaveValue(baselineLate);
  await expect(page.getByTestId("composer-dictation")).toHaveCount(0);
  await expect(page.getByTestId("composer-mic")).toBeVisible();

  fs.writeFileSync(
    path.join(EVIDENCE, "c03-oracle.json"),
    JSON.stringify(
      {
        projectId,
        delayedDraft,
        baselineLate,
        latePushOk: true,
        sessionId: sid,
        ok: true,
      },
      null,
      2,
    ),
  );
});
```


**Harness note:** `/dev/dictation-harness` retained for dev fixture UX; **nominal proof is C01–C03 on real NoraConversation** (`surface=travail`).


## 8. Commands + results


| Command | Result |
|---|---|
| `cd projects/sfia-studio-next/web && npx vitest run tests/unit/ml3-composer-dictation-session.test.ts tests/unit/ml3-composer-dictation-client-seq-contract.test.ts tests/unit/ml3-composer-dictation-reducer.test.ts tests/integration/ml3-composer-dictation-integrated.pg.test.ts` | **28 PASS** (re-run this pack build: 4 files, 28 tests) |
| `npx playwright test tests/qualify/ml3-dictation-nominal-path.spec.ts -c playwright.qualify.config.ts` | **C01 C02 C03 — 3 PASS** at delivery time (`DELIV-2026-11-27-…-DICTATION-NOMINAL-PATH-FINAL`, evidence 2026-11-27 09:58 local). Re-run without `npm run qualify:start` fails closed on missing server (expected). |
| BUILD | `dRmFP_CKHNL8g6MOXuA1q` digest `0a64a261…` |
| Post-restore capability | `enabled: false` when `SFIA_COMPOSER_DICTATION` unset/OFF |


## 9. Oracle C01

Source: `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-oracle.json` (logical alias `.sfia-evidence/ml3-dictation-nominal-path/c01-oracle.json` relative to web package root).


```json
{
  "projectId": "proj_7707311c-0550-456f-b59e-6f22439f03fb",
  "draftBeforeSend": "Brouillon initial. Première phrase dictée. Deuxième phrase dictée. Troisième phrase dictée. Édité clavier.",
  "messageObserved": true,
  "ok": true,
  "draftBeforeStop": "Brouillon initial. ",
  "draftAfterDictation": "Brouillon initial. Première phrase dictée. Deuxième phrase dictée. Troisième phrase dictée."
}
```


## 10. Screenshots

- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-during-dictation.png` — **147220 bytes** — real composer on `/projects/{id}?surface=travail` (not harness)

- `projects/sfia-studio-next/web/.sfia-evidence/ml3-dictation-nominal-path/c01-after-draft.png` — **150411 bytes** — real composer on `/projects/{id}?surface=travail` (not harness)


Policy: path refs + sizes only (no base64).


## 11. Fake / Real frontiers


| Frontier | Mode | Notes |
|---|---|---|
| Dictation transport on qualify | **substituted fixture** | `SFIA_DICTATION_TRANSPORT=fixture` + `SFIA_DICTATION_SUBSTITUTED=1` on DEV only |
| OpenAI Realtime LIVE | **not admitted** on qualify run | Admission fail-closed without key/lane; fixture never falls through to live |
| Nora turn | substituted (`STUDIO_FORCE_NORA_FIXTURE=1` in qualify env) | C01 asserts no `openai-agents-sdk-live` copy |
| Microphone capture | oscillator + bounded PCM pump | Headless ScriptProcessor suppressed; product audio route exercised |
| FinOps cost | `EFFECT_SUBSTITUTED`, `costCoverage: UNKNOWN` | No LIVE tariff claim |

**Claims forbidden:** LIVE French audio quality, RECETTE sign-off, STABLE release, global Livraison 1 acceptance, production adoption.

**Interpretation:** `DETERMINISTIC PROVEN ≠ READY FOR REAL` — nominal path is technically proven under substituted qualify; functional RECETTE with real mic/provider remains pending.


## 12. Annex — bounded historical refs


- `as-built-macro-lot-3-audio-20261127.md` § Correctifs nominaux (handoff 5bd6bb28)
- Prior delivery superseded: `DELIV-2026-11-27-…-INTEGRATED-DICTATION-CORRECTIVE` (`9c2afa5e`)
- Integrated exit: `DELIV-2026-11-27-…-INTEGRATED-EXIT` (`87ce2c51`)
- ML3 audio opening: `DELIV-2026-11-27-…-ML3-AUDIO-AND-ML2-RESIDUAL`


## 13. Anti-stub checklist

| Check | Status |
|---|---|

| composer-dictation-admission.ts FULL in §6 | PASS |

| composer-dictation-session key functions COMPLETE in §5 | PASS |

| capability route FULL in §6 | PASS |

| ml3-dictation-nominal-path.spec.ts FULL in §7 | PASS |

| c01-oracle.json embedded §9 | PASS |

| Screenshots path+size §10 | PASS |

| delayedCommitTransport + finalize test quoted §4 | PASS |

| 28 vitest PASS evidenced §8 | PASS |

| Playwright 3/3 via delivery + artifacts §8 | PASS |

| FinOps EFFECT_SUBSTITUTED excerpt §6 | PASS |

| No empty 'TBD' verdict block §14 | PASS |


**Anti-stub result:** `PASS` (11/11)


## 14. Proposed verdict


- **MACRO-LOTS 1–3 — INTEGRATED CONVERGENCE CONSTRUCTION COMPLETE**
- **DICTATION NOMINAL PATH TECHNICALLY PROVEN** (substituted qualify C01–C03 + unit/pg 28)
- **FUNCTIONAL RECETTE QUALIFICATION PENDING** (real mic, FR quality, latency, long dictation, Figma mobile)
- **MORRIS EXIT ACCEPTANCE PROPOSED**

**Status:** READY WITH RESERVES

**Programme:** R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED GLOBALLY / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED


## 15. Instruction ChatGPT obligatoire (Morris review)


Morris — review remote sur ce pack **sans exécution locale** sauf si tu demandes un re-run qualify.

1. Confirmer que Correctif A (`commitsAwaitingAck`) ferme la race finalize/commit ack reproduite par `delayedCommitTransport` (§4–§5).
2. Confirmer Correctif B : fixture fail-closed hors VITEST/`SFIA_DICTATION_SUBSTITUTED`+DEV ; capability aligne l'UI ; FinOps `EFFECT_SUBSTITUTED` (§6).
3. Confirmer Correctif C : C01 ordre des trois phrases + édition clavier + envoi unique ; C02 cancel ; C03 auth + delayed finalize + `fixture-push` ignoré après cancel (§7, §9–§10).
4. Valider frontières §11 : refuser toute extrapolation LIVE/RECETTE/STABLE.
5. Rendre un avis binaire sur **MORRIS EXIT ACCEPTANCE PROPOSED** : ACCEPT / ACCEPT WITH RESERVES / REJECT — avec réserves testables si reserves.

Ne pas réécrire le code dans la review ; pointer fichier+ligne si écart.

