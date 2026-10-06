# P5-S06 CP02 — NORA CANCELLATION CLOSURE — FULL REVIEW PACK

**Cycle:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 · P5 · P5-S06 · CORRECTION PASS 02
**Profile:** Critical
**CKC:** `ckc:studio:delivery` / `cyc:delivery` / contractVersion 0.1.0 / VALIDATED — guidance only, no ExecutionAuthority
**Verdict candidate:** READY FOR CHATGPT FINAL CRITICAL REVIEW — P5-S06 CP02 LOCAL CANDIDATE
**P5-S06 FUNCTIONAL CLOSURE:** PASS LOCALLY · **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ P6 READY** · **≠ runtime v3 ADOPTED** · **≠ REAL cancellation proven** · **≠ global Visual PASS**

---

## 1. Timestamp

2026-10-06 Europe/Paris (capture ~11:00–11:05 CEST). Pack generated after typecheck/lint/full test/build.

## 2. Repo / worktree

- GitHub: `mcleland147/sfia-workspace`
- Local worktree: `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`

## 3. Project branch

`delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion`

## 4. HEAD / base

- HEAD = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- origin/main = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- `git rev-list --left-right --count origin/main...HEAD` = `0 0`
- Staged: **empty**
- Candidate: uncommitted S06 Delivery + CP01 + CP02 working tree

## 5. Local git truth initial (this pass)

Expected vs observed: **MATCH**.
- pwd/toplevel = worktree above
- branch/HEAD/origin/main as §4
- CP01 artifacts present: `newProjectConversation.ts`, `noraActivityProjection.ts`, `login-client.module.css`, `p5.s06.pilotExperience.d0.test.tsx`
- No reset/clean/stash/checkout main

## 6. Morris CP02 decision consumed

**D-S06-CANCEL-01 — BOUNDED REQUEST-SCOPED NORA CANCELLATION** ADOPTED 2026-10-06.

Pilot STOP ■ → AbortController request-scoped → cancellable transport → same `sendProjectAssistantTurn` → same `orchestrateAssistantSend` → same Nora → `Runner.run(..., { signal })` → STOPPED.

**Not consumed:** CancellationStore, registry, Redis, DB cancel, streaming engine, second Nora, REAL, project Git.

## 7. Review input

- Canonical handoff branch `sfia/review-handoff`
- File `sfia-review-handoff/latest-chatgpt-review.md`
- Commit **`b588c7de6c2d061aecd230860b88ac190cea86a8`**
- Title: P5-S06 CP01 Critical Correction (FULL / HANDOFF)
- ChatGPT CP01: A PASS · A2 PASS MIN-SUFFICIENT · B PASS · B2 PASS · C Activity PASS WITH MINOR HONESTY CLEANUP · **C2 Nora STOP BLOCKING** · D visual requalified PASS AT S06 SCOPE except New Project mobile minor UX reserve

## 8. Sources read

Templates/method/CKC delivery/convergence/roadmap/P3 §28/30/31/32/34 / P4 §27A / P5 integrated delivery / CP01 handoff. Figma READ ONLY `m4g8j0gNbEzfIuH6S9AZJF`. Protected paths not modified.

## 9. CKC qualification

`ckc:studio:delivery` VALIDATED — cognitive guidance only. No ExecutionAuthority. Cycle type `cyc:delivery`. Profile Critical.

## 10. Convergence pre-check

P5-S01…S05 INTEGRATED on main `16a8e2fd`. P5 IN PROGRESS. S07 NOT STARTED. runtime v3 NON ADOPTED. Roadmap tip updated to CP02 LOCAL CANDIDATE after evidence (historical CP01 tip preserved as SUPERSEDED).

## 11. OpenAI-native Capability Fit Check

R22 ACTIVE. Package `@openai/agents` **^0.17.0** declared; **installed 0.17.0**.

Local type (`@openai/agents-core` `dist/run.d.ts` SharedRunOptions):

```
signal?: AbortSignal;
```

Also `ModelRequest.signal?: AbortSignal` (`model.d.ts`).

Disposition: **KEEP / ADAPT**. Delta SFIA = transport + application propagation + Product/UI STOPPED. COMPLETE/BUILD generic cancellation engine = **REJECT**.

## 12. Installed Agents SDK signal proof

- `runNoraAgentsTurn` calls `runner.run(agent, input.userContent, { ..., signal: input.signal })`
- T01 hanging Model: `request.signal` observed, abort → `NoraTurnAbortedError`
- Fake `providerAgentsModel.getResponse` races `completeRound` against abort listener with removeEventListener cleanup
- **DETERMINISTIC CANCELLATION PROVEN**. **NOT** REAL BOUNDARY PROVEN.

## 13. Cancellation architecture BEFORE

Server Action `projectAssistantSendAction` only. Browser cannot abort in-flight Server Action honestly. UI had no ■. STOPPED not a recognized send status. Activity could imply SOURCE_LOOKUP post-return. C2 BLOCKING.

## 14. Cancellation architecture AFTER

```
ConversationSurface
  → useProductConversation (AbortController per turn)
  → sendCancellableAssistantTurn (fetch + signal)
  → POST /api/studio/projects/[projectId]/assistant/send
       ↘
        sendProjectAssistantTurn(input, { signal })
       ↗
  projectAssistantSendAction(input)  // thin, no signal
        → MW6 path if executionContractId (unchanged; Execution ≠ Nora STOP)
        → else orchestrateAssistantSend({..., signal})
           → orchestrateProjectAssistantTurn / F2
           → runNoraCognitiveTurn({ signal })
           → runNoraAgentsTurn({ signal })
           → Runner.run(..., { signal })
```

Transport ≠ application. One canonical send. One Nora runtime. One Runner.

## 15. Application seam proof

`sendProjectAssistantTurn` is SERVER-ONLY. Client imports only `sendCancellableAssistantTurn` + types. Route and Server Action both call the same function. Count of canonical send = **ONE**.

## 16. Server Action / Route Handler relationship

- `projectAssistantSendAction` → `return sendProjectAssistantTurn(input)` (no browser signal)
- Route POST → parse browser-safe body → `sendProjectAssistantTurn(..., { signal: request.signal })`
- Existing tests/callers of Server Action remain; refresh UI test mocks fetch helper onto the same mock

## 17. Exact AbortSignal propagation chain

1. `AbortController` in `useProductConversation` send transition
2. `fetch(..., { signal })`
3. Next.js `request.signal`
4. `sendProjectAssistantTurn` options.signal
5. `orchestrateAssistantSend({ signal })` (`orchestrateF2.ts`)
6. `orchestrateTurn` input.signal → `runNoraCognitiveTurn`
7. `runNoraAgentsTurn` input.signal → `runner.run({ signal })`
8. SDK `ModelRequest.signal`
9. `throwIfAborted` after cognitive core; abort catch → `noraTurnStoppedFailure` (`status: "stopped"`)

MW6 governed execute path: **no signal** — Nora response STOP ≠ Execution STOP (T11).

## 18. Abort normalization

- Runtime: `NoraTurnAbortedError` / `isAbortLike`
- Application: `noraTurnStoppedFailure` → `{ ok:false, status:"stopped", code:"NORA_TURN_STOPPED", message:"Réponse interrompue." }`
- UI AbortError / `result.status==="stopped"` → `uiState STOPPED`, `error=null`
- Distinct from `provider_error`, `ERROR_RECOVERABLE`, `cognitive_stop`, BLOCKED
- **Not persisted as Product truth**

## 19. UI STOP semantics

- `stopAvailable` = request-scoped cancellable in-flight AND not blocked AND not f3Busy
- ■ `aria-label="Arrêter la réponse de Nora"` · type=button · 38px mobile · not hover-only
- STOPPED banner « Réponse interrompue » + Réessayer · no modal
- Unmount aborts without setting STOPPED if unmounted (T16)

## 20. Retry / idempotency

Existing `logicalTurnId` / `turnRetryKey` / `pendingRetryEnvelopeRef`. STOP is not silent re-emit. Envelope retained until client-observed success. Explicit Réessayer reuses sealed content+key (T07). New send after stop uses new key (T08).

## 21. Product side-effect semantics

Abort after recognized signal: no late assistant SUCCESS append (T05). No transactional rollback architecture. Durable writes already committed before abort are not deleted. Cut-lines: throwIfAborted after cognitive core; ignore late fetch if aborted/generation mismatch. T13: hanging model abort produces `NoraTurnAbortedError`, not Proposal.

## 22. Activity honesty correction

`projectNoraActivity`: busy → « Nora travaille… ». SOURCE_LOOKUP not live phase. `useProductConversation` never `setUiState("SOURCE_LOOKUP")` (legacy panel path only). STREAMING = NOT OBSERVABLE / NOT IMPLEMENTED. No fake %.

## 23. New Project mobile micro-change

CSS `@media` order: hero 1 → thread 2 (max-height 22vh) → composer 3 sticky → preview 4. Desktop unchanged (sha256 SAME vs CP01). Semantics CP01 unchanged.

## 24. Exact file list

### CP02 created

- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraTurnAbort.ts`
- `projects/sfia-studio/app/features/project-assistant/noraTurnStopped.ts`
- `projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/browserSafeAssistantSend.ts`
- `projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s06.cp02.cancellation.d0.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.hook.test.tsx`

### CP01 created (preserved, still untracked)

- `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/noraActivityProjection.ts`
- `projects/sfia-studio/app/app/login/login-client.module.css`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx`

### Adapted (includes CP01+CP02 vs origin/main)
See git name-status. CP02-specific: conversation hook/surface, assistant send/orchestration/Nora runtime, New Project CSS order, PRR hashes, runningAttemptRefresh mock, docs.

### Frozen
ProjectsPage / login CSS: **not further modified in CP02**. Remaining diffs vs main are CP01. Auth/Projects screenshots sha256 **identical** to CP01.

### Docs
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md`

### Scratch
`.tmp-sfia-review/p5-s06-visual/cp02/**`

## 25. Full new files (CP02)


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraTurnAbort.ts`

```
/**
 * P5-S06 CP02 — request-scoped Nora turn abort (not Cognitive STOP, not Execution STOP).
 * AbortSignal is the only cancellation token. Not Product truth.
 */

export class NoraTurnAbortedError extends Error {
  readonly code = "NORA_TURN_STOPPED" as const;
  constructor() {
    super("NORA_TURN_STOPPED");
    this.name = "NoraTurnAbortedError";
  }
}

export function isAbortLike(
  error: unknown,
  signal?: AbortSignal,
): boolean {
  if (signal?.aborted) return true;
  if (error instanceof NoraTurnAbortedError) return true;
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    return error.name === "AbortError";
  }
  if (error instanceof Error) {
    return (
      error.name === "AbortError" ||
      error.message === "AbortError" ||
      error.message === "NORA_TURN_STOPPED"
    );
  }
  return false;
}

export function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) {
    throw new NoraTurnAbortedError();
  }
}

export function abortError(): Error {
  const error = new Error("AbortError");
  error.name = "AbortError";
  return error;
}

```


### `projects/sfia-studio/app/features/project-assistant/noraTurnStopped.ts`

```
import type {
  AssistantUiMode,
  ProjectAssistantSendFailure,
} from "./types";

/** Voluntary Pilot STOP — not a Product durable state. */
export function noraTurnStoppedFailure(
  mode: AssistantUiMode,
  logicalTurnId?: string | null,
): ProjectAssistantSendFailure {
  return {
    ok: false,
    status: "stopped",
    code: "NORA_TURN_STOPPED",
    message: "Réponse interrompue.",
    mode,
    retryable: true,
    ...(logicalTurnId ? { logicalTurnId } : {}),
  };
}

```


### `projects/sfia-studio/app/features/project-assistant/sendProjectAssistantTurn.ts`

```
/**
 * Canonical Project Assistant send APPLICATION seam.
 * Used by the thin Server Action and the cancellable HTTP transport.
 * Not a second Nora / not a second orchestrator.
 */

import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import {
  runMw6GovernedNoraProductTurn,
  type RunMw6GovernedNoraProductTurnInput,
} from "./mw6GovernedNoraTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "./types";

export type SendProjectAssistantTurnInput = {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  executionContractId?: string;
  authorityEvidenceId?: unknown;
  governedAuthority?: unknown;
  actorId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
  provider?: import("@/lib/platform/ai").ConversationProvider;
  sessionDbPath?: string;
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId?: unknown;
    epistemicItemId?: unknown;
  } | null;
};

export type SendProjectAssistantTurnOptions = {
  /** Request-scoped AbortSignal from cancellable transport. Never persisted. */
  signal?: AbortSignal;
};

export async function sendProjectAssistantTurn(
  input: SendProjectAssistantTurnInput,
  options?: SendProjectAssistantTurnOptions,
): Promise<ProjectAssistantSendResult> {
  const executionContractId =
    typeof input.executionContractId === "string"
      ? input.executionContractId.trim()
      : "";
  if (executionContractId.length > 0) {
    return runMw6GovernedNoraProductTurn({
      projectId: input.projectId,
      content: input.content,
      history: input.history,
      executionContractId,
      claimedAuthorityEvidenceId: input.authorityEvidenceId,
      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
      provider: input.provider,
      sessionDbPath: input.sessionDbPath,
      governedAuthority: input.governedAuthority,
      actorId: input.actorId,
      authorityEvidenceId: input.authorityEvidenceId,
      getExecutionContract: input.getExecutionContract,
      checkExecutionAuthorization: input.checkExecutionAuthorization,
      authorityResolver: input.authorityResolver,
      authorizedContract: input.authorizedContract,
      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      canActAsMorris: input.canActAsMorris,
      claimedAuthorityLevel: input.claimedAuthorityLevel,
    });
  }
  const reinstructionOfProposalId =
    typeof input.reinstructionOfProposalId === "string"
      ? input.reinstructionOfProposalId.trim() || null
      : null;
  return orchestrateAssistantSend({
    projectId: input.projectId,
    content: input.content,
    history: input.history,
    provider: input.provider,
    sessionDbPath: input.sessionDbPath,
    logicalTurnId: input.logicalTurnId,
    turnRetryKey: input.turnRetryKey,
    reinstructionOfProposalId,
    reservationInteractionContext: input.reservationInteractionContext,
    signal: options?.signal,
  });
}

```


### `projects/sfia-studio/app/features/project-assistant/browserSafeAssistantSend.ts`

```
import type { AssistantHistoryMessage } from "./types";

const ALLOWED_KEYS = new Set([
  "content",
  "history",
  "logicalTurnId",
  "turnRetryKey",
  "reinstructionOfProposalId",
  "reservationInteractionContext",
]);

const HOSTILE_KEYS = new Set([
  "provider",
  "sessionDbPath",
  "resolveAuthenticatedPilote",
  "governedAuthority",
  "actorId",
  "canActAsMorris",
  "claimedAuthorityLevel",
  "executionContractId",
  "authorityEvidenceId",
  "getExecutionContract",
  "checkExecutionAuthorization",
  "authorityResolver",
  "authorizedContract",
  "currentExternalDiscoveryIntent",
  "model",
  "reasoning",
  "signal",
]);

export type BrowserSafeAssistantSendBody = {
  content: string;
  history?: AssistantHistoryMessage[];
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId?: unknown;
    epistemicItemId?: unknown;
  } | null;
};

export function parseBrowserSafeAssistantSendBody(
  raw: unknown,
):
  | { ok: true; value: BrowserSafeAssistantSendBody }
  | { ok: false; code: string; message: string } {
  if (raw == null || typeof raw !== "object" || Array.isArray(raw)) {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "Corps JSON objet requis.",
    };
  }
  const record = raw as Record<string, unknown>;
  for (const key of Object.keys(record)) {
    if (HOSTILE_KEYS.has(key)) {
      return {
        ok: false,
        code: "HOSTILE_FIELD",
        message: "Champ non autorisé sur ce transport.",
      };
    }
    if (!ALLOWED_KEYS.has(key)) {
      return {
        ok: false,
        code: "INPUT_INVALID",
        message: "Champ inconnu rejeté.",
      };
    }
  }
  if (typeof record.content !== "string") {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "content string requis.",
    };
  }
  if (record.content.length > 20_000) {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "Message trop long.",
    };
  }
  let history: AssistantHistoryMessage[] | undefined;
  if (record.history !== undefined) {
    if (!Array.isArray(record.history)) {
      return {
        ok: false,
        code: "INPUT_INVALID",
        message: "history invalide.",
      };
    }
    history = [];
    for (const item of record.history) {
      const role = (item as { role?: unknown }).role;
      if (
        item == null ||
        typeof item !== "object" ||
        (role !== "user" && role !== "assistant") ||
        typeof (item as { content?: unknown }).content !== "string"
      ) {
        return {
          ok: false,
          code: "INPUT_INVALID",
          message: "history invalide.",
        };
      }
      history.push({
        role: (item as { role: "user" | "assistant" }).role,
        content: (item as { content: string }).content,
      });
    }
  }
  const logicalTurnId =
    typeof record.logicalTurnId === "string"
      ? record.logicalTurnId
      : undefined;
  const turnRetryKey =
    typeof record.turnRetryKey === "string" ? record.turnRetryKey : undefined;
  let reinstructionOfProposalId: string | null | undefined;
  if (record.reinstructionOfProposalId === null) {
    reinstructionOfProposalId = null;
  } else if (typeof record.reinstructionOfProposalId === "string") {
    reinstructionOfProposalId = record.reinstructionOfProposalId;
  }
  let reservationInteractionContext:
    | { cycleInstanceId?: unknown; epistemicItemId?: unknown }
    | null
    | undefined;
  if (record.reservationInteractionContext === null) {
    reservationInteractionContext = null;
  } else if (
    record.reservationInteractionContext != null &&
    typeof record.reservationInteractionContext === "object"
  ) {
    const ctx = record.reservationInteractionContext as Record<string, unknown>;
    reservationInteractionContext = {
      cycleInstanceId: ctx.cycleInstanceId,
      epistemicItemId: ctx.epistemicItemId,
    };
  }
  return {
    ok: true,
    value: {
      content: record.content,
      ...(history ? { history } : {}),
      ...(logicalTurnId ? { logicalTurnId } : {}),
      ...(turnRetryKey ? { turnRetryKey } : {}),
      ...(reinstructionOfProposalId !== undefined
        ? { reinstructionOfProposalId }
        : {}),
      ...(reservationInteractionContext !== undefined
        ? { reservationInteractionContext }
        : {}),
    },
  };
}

```


### `projects/sfia-studio/app/app/api/studio/projects/[projectId]/assistant/send/route.ts`

```
/**
 * Thin cancellable transport for Product Nora send.
 * Same canonical application seam as projectAssistantSendAction.
 * No client authority. AbortSignal = request.signal only.
 */

import { NextResponse } from "next/server";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  context: { params: Promise<{ projectId: string }> },
): Promise<Response> {
  const params = await context.params;
  const projectId =
    typeof params?.projectId === "string" ? params.projectId.trim() : "";
  if (!projectId) {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: "PROJECT_ID_REQUIRED",
        message: "Identifiant projet requis.",
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: "INPUT_INVALID",
        message: "JSON invalide.",
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  const parsed = parseBrowserSafeAssistantSendBody(raw);
  if (!parsed.ok) {
    return NextResponse.json(
      {
        ok: false,
        status: "validation_error",
        code: parsed.code,
        message: parsed.message,
        mode: "unavailable",
        retryable: false,
      },
      { status: 400 },
    );
  }

  const result = await sendProjectAssistantTurn(
    {
      projectId,
      content: parsed.value.content,
      history: parsed.value.history,
      logicalTurnId: parsed.value.logicalTurnId,
      turnRetryKey: parsed.value.turnRetryKey,
      reinstructionOfProposalId: parsed.value.reinstructionOfProposalId,
      reservationInteractionContext: parsed.value.reservationInteractionContext,
    },
    { signal: request.signal },
  );
  return NextResponse.json(result);
}

```


### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn.ts`

```
import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "@/features/project-assistant/types";

export type CancellableAssistantSendInput = {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId: string;
    epistemicItemId: string;
  } | null;
};

/**
 * Browser fetch adapter — request-scoped AbortSignal only.
 * Does not own Product orchestration.
 */
export async function sendCancellableAssistantTurn(
  input: CancellableAssistantSendInput,
  signal: AbortSignal,
): Promise<ProjectAssistantSendResult> {
  const response = await fetch(
    `/api/studio/projects/${encodeURIComponent(input.projectId)}/assistant/send`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        content: input.content,
        ...(input.history ? { history: input.history } : {}),
        ...(input.logicalTurnId ? { logicalTurnId: input.logicalTurnId } : {}),
        ...(input.turnRetryKey ? { turnRetryKey: input.turnRetryKey } : {}),
        ...(input.reinstructionOfProposalId
          ? { reinstructionOfProposalId: input.reinstructionOfProposalId }
          : {}),
        ...(input.reservationInteractionContext
          ? {
              reservationInteractionContext: input.reservationInteractionContext,
            }
          : {}),
      }),
      signal,
    },
  );
  const payload = (await response.json()) as ProjectAssistantSendResult;
  return payload;
}

```


### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s06.cp02.cancellation.d0.test.ts`

```
/** @vitest-environment node */
/**
 * P5-S06 CP02 — bounded request-scoped Nora cancellation.
 * ZERO REAL. Same runNoraAgentsTurn / canonical send seam.
 */
import { describe, expect, it } from "vitest";
import type { Model, ModelRequest, ModelResponse } from "@openai/agents";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { NoraTurnAbortedError } from "@/lib/nora-cognitive-runtime/noraTurnAbort";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import { noraTurnStoppedFailure } from "@/features/project-assistant/noraTurnStopped";
import { POST as assistantSendPost } from "@/app/api/studio/projects/[projectId]/assistant/send/route";

function hangingAbortModel(observe: {
  sawSignal?: AbortSignal;
  aborted?: boolean;
}): Model {
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      observe.sawSignal = request.signal;
      await new Promise<void>((_resolve, reject) => {
        const fail = () => {
          observe.aborted = true;
          const error = new Error("AbortError");
          error.name = "AbortError";
          reject(error);
        };
        if (request.signal?.aborted) {
          fail();
          return;
        }
        request.signal?.addEventListener("abort", fail, { once: true });
      });
      throw new Error("unreachable");
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("streaming not used");
    },
  };
}

describe("P5-S06 CP02 Runner signal", () => {
  it("T01 — Runner/model sees AbortSignal and settles as cancellation", async () => {
    const observe: { sawSignal?: AbortSignal; aborted?: boolean } = {};
    const controller = new AbortController();
    const pending = runNoraAgentsTurn({
      correlationId: "cp02-t01",
      projectId: "prj:cp02",
      systemInstructions: "Test",
      userContent: "hello",
      enableTools: false,
      model: hangingAbortModel(observe),
      signal: controller.signal,
    });
    const started = Date.now();
    while (!observe.sawSignal && Date.now() - started < 3000) {
      await new Promise((r) => setTimeout(r, 20));
    }
    expect(observe.sawSignal).toBeDefined();
    controller.abort();
    await expect(pending).rejects.toBeInstanceOf(NoraTurnAbortedError);
    expect(observe.aborted).toBe(true);
  });
});

describe("P5-S06 CP02 transport body", () => {
  it("T02/T26 — browser-safe parse rejects hostile authority fields", () => {
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        provider: { complete: () => null },
      }).ok,
    ).toBe(false);
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        sessionDbPath: "/tmp/x",
      }).ok,
    ).toBe(false);
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        claimedAuthorityLevel: "morris",
      }).ok,
    ).toBe(false);
    expect(parseBrowserSafeAssistantSendBody({ content: "hello" })).toEqual({
      ok: true,
      value: { content: "hello" },
    });
  });

  it("route is POST-only and binds projectId from URL", async () => {
    const get = (assistantSendPost as { GET?: unknown }).GET;
    expect(get).toBeUndefined();
    const res = await assistantSendPost(
      new Request("http://localhost/api/studio/projects/prj%3Ax/assistant/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: 1 }),
      }),
      { params: { projectId: "prj:x" } },
    );
    expect(res.status).toBe(400);
    const json = (await res.json()) as { code: string };
    expect(json.code).toBe("INPUT_INVALID");
  });
});

describe("P5-S06 CP02 STOPPED semantics", () => {
  it("T04/T09/T10 — STOPPED is distinct from error and cognitive stop", () => {
    const stopped = noraTurnStoppedFailure("fixture");
    expect(stopped.ok).toBe(false);
    expect(stopped.status).toBe("stopped");
    expect(stopped.code).toBe("NORA_TURN_STOPPED");
    expect(stopped.status).not.toBe("provider_error");
    expect(stopped.status).not.toBe("cognitive_stop");
  });
});

```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.ui.test.tsx`

```
/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  createProjectRuntimeAction: vi.fn(),
  listProjectsRuntimeAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "hello",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: "none",
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "empty",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

describe("P5-S06 CP02 Conversation STOP UI", () => {
  it("T15 — no stop control when not cancellable", () => {
    render(
      <ConversationSurface
        controller={stubController({ stopAvailable: false, busy: false })}
      />,
    );
    expect(screen.queryByTestId("project-assistant-stop")).toBeNull();
    expect(screen.getByTestId("project-assistant-send")).toBeInTheDocument();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "unavailable",
    );
  });

  it("T03/T14 — ■ visible when cancellable and abort called once", async () => {
    const stopCurrentResponse = vi.fn();
    const user = userEvent.setup();
    render(
      <ConversationSurface
        controller={stubController({
          busy: true,
          canSend: false,
          stopAvailable: true,
          uiState: "ASSISTANT_WORKING",
          draft: "",
          stopCurrentResponse,
        })}
      />,
    );
    const stop = screen.getByTestId("project-assistant-stop");
    expect(stop).toHaveAttribute("aria-label", "Arrêter la réponse de Nora");
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-phase",
      "activity",
    );
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-stop",
      "available",
    );
    await user.click(stop);
    expect(stopCurrentResponse).toHaveBeenCalledTimes(1);
  });

  it("T04 — STOPPED projection is not ERROR", () => {
    render(
      <ConversationSurface
        controller={stubController({
          busy: false,
          canSend: false,
          stopAvailable: false,
          uiState: "STOPPED",
          draft: "",
          error: null,
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-stopped")).toHaveTextContent(
      "Réponse interrompue",
    );
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(screen.getByTestId("project-assistant-status")).toHaveAttribute(
      "data-nora-phase",
      "stopped",
    );
  });
});

describe("P5-S06 CP02 New Project mobile order", () => {
  it("keeps Nora question in the thread before composer in DOM", () => {
    const { container } = render(<NewProjectIntentionPage />);
    const thread = screen.getByTestId("new-project-thread");
    const composer = screen.getByTestId("new-project-composer");
    const page = container.querySelector("[data-testid='create-project-form']");
    expect(page).toBeTruthy();
    expect(
      thread.compareDocumentPosition(composer) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(thread.textContent).toMatch(/objectif|intention|projet/i);
  });
});

```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.cp02.cancellation.hook.test.tsx`

```
/** @vitest-environment jsdom */
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  useProductConversation,
  type ProductConversationController,
} from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";

const { sendCancellableAssistantTurnMock } = vi.hoisted(() => ({
  sendCancellableAssistantTurnMock: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn", () => ({
  sendCancellableAssistantTurn: (
    input: unknown,
    signal: AbortSignal,
  ) => sendCancellableAssistantTurnMock(input, signal),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn(async () => ({
    ok: false,
    status: "rehydrate_error",
    code: "NO_EVIDENCE_OUTCOME_REFS",
    message: "none",
    mode: "fixture",
    retryable: false,
  })),
}));

function successResult(text: string): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "ok",
    text,
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: { projectId: "prj:cp02-hook" },
    ephemeralNotice: "",
    logicalTurnId: "lt:cp02",
  } as unknown as ProjectAssistantSendResult;
}

function Harness({
  onReady,
}: {
  onReady: (c: ProductConversationController) => void;
}) {
  const controller = useProductConversation({ projectId: "prj:cp02-hook" });
  onReady(controller);
  return (
    <div
      data-testid="hook-state"
      data-ui={controller.uiState}
      data-stop={String(controller.stopAvailable)}
      data-busy={String(controller.busy)}
      data-assistants={controller.messages.filter((m) => m.role === "assistant").length}
    />
  );
}

describe("P5-S06 CP02 hook cancellation", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  beforeEach(() => {
    sendCancellableAssistantTurnMock.mockReset();
  });

  it("T05/T06 — abort ignores late assistant success", async () => {
    let resolveSend!: (value: ProjectAssistantSendResult) => void;
    sendCancellableAssistantTurnMock.mockImplementation(
      (_input: unknown, signal: AbortSignal) =>
        new Promise((resolve, reject) => {
          resolveSend = resolve;
          signal.addEventListener(
            "abort",
            () => {
              const err = new Error("Aborted");
              err.name = "AbortError";
              reject(err);
            },
            { once: true },
          );
        }),
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    act(() => {
      latest.sendMessage("bonjour");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalled(),
    );
    act(() => {
      latest.stopCurrentResponse();
    });
    await waitFor(() => expect(latest.uiState).toBe("STOPPED"));
    act(() => {
      resolveSend(successResult("late answer must not appear"));
    });
    await new Promise((r) => setTimeout(r, 30));
    expect(latest.uiState).toBe("STOPPED");
    expect(
      latest.messages.filter((m) => m.role === "assistant"),
    ).toHaveLength(0);
    expect(screen.getByTestId("hook-state")).toHaveAttribute(
      "data-assistants",
      "0",
    );
  });

  it("T07/T08 — explicit retry after stop yields one assistant; next send works", async () => {
    const calls: AbortSignal[] = [];
    sendCancellableAssistantTurnMock.mockImplementation(
      (_input: unknown, signal: AbortSignal) => {
        calls.push(signal);
        if (calls.length === 1) {
          return new Promise((_resolve, reject) => {
            signal.addEventListener(
              "abort",
              () => {
                const err = new Error("Aborted");
                err.name = "AbortError";
                reject(err);
              },
              { once: true },
            );
          });
        }
        return Promise.resolve(successResult(`reply-${calls.length}`));
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    act(() => {
      latest.sendMessage("tour A");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalled(),
    );
    act(() => {
      latest.stopCurrentResponse();
    });
    await waitFor(() => expect(latest.uiState).toBe("STOPPED"));
    act(() => {
      latest.retryLastUserMessage();
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalledTimes(2),
    );
    const first = sendCancellableAssistantTurnMock.mock.calls[0][0] as {
      content: string;
      turnRetryKey: string;
    };
    const retry = sendCancellableAssistantTurnMock.mock.calls[1][0] as {
      content: string;
      turnRetryKey: string;
    };
    expect(retry.content).toBe("tour A");
    expect(retry.turnRetryKey).toBe(first.turnRetryKey);
    await waitFor(() => expect(latest.uiState).toBe("ANSWERED"));
    act(() => {
      latest.setDraft("tour B");
      latest.sendMessage("tour B");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalledTimes(3),
    );
    const next = sendCancellableAssistantTurnMock.mock.calls[2][0] as {
      content: string;
      turnRetryKey: string;
    };
    expect(next.content).toBe("tour B");
    expect(next.turnRetryKey).not.toBe(first.turnRetryKey);
  });

  it("T09 — transport failure is ERROR_RECOVERABLE not STOPPED", async () => {
    sendCancellableAssistantTurnMock.mockRejectedValue(new Error("network down"));
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    act(() => {
      latest.sendMessage("bonjour");
    });
    await waitFor(() => expect(latest.uiState).toBe("ERROR_RECOVERABLE"));
    expect(latest.uiState).not.toBe("STOPPED");
  });

  it("T16 — unmount abort does not surface Pilot STOPPED", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      (_input: unknown, signal: AbortSignal) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener(
            "abort",
            () => {
              const err = new Error("Aborted");
              err.name = "AbortError";
              reject(err);
            },
            { once: true },
          );
        }),
    );
    let latest!: ProductConversationController;
    const view = render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    act(() => {
      latest.sendMessage("bonjour");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalled(),
    );
    view.unmount();
    await new Promise((r) => setTimeout(r, 20));
    expect(latest.uiState).not.toBe("STOPPED");
  });
});

```


## 26. Useful complete diffs (vs HEAD/main)


### `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index a581711f..8490c6d6 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -9,7 +9,6 @@ import {
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareResolvedM3Action,
   projectAssistantRehydrateEvidenceOutcomeAction,
-  projectAssistantSendAction,
 } from "@/features/project-assistant/actions";
 import type {
   AssistantHistoryMessage,
@@ -42,6 +41,7 @@ import {
   type PendingTurnRetryEnvelope,
 } from "@/features/project-assistant/turnPayloadCanonical";
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
+import { sendCancellableAssistantTurn } from "./sendCancellableAssistantTurn";
 import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";

 export type ProductMessage = {
@@ -64,7 +64,8 @@ export type ProductConversationUiState =
   | "SOURCE_LOOKUP"
   | "ANSWERED"
   | "ERROR_RECOVERABLE"
-  | "BLOCKED";
+  | "BLOCKED"
+  | "STOPPED";

 export type UseProductConversationInput = {
   projectId: string;
@@ -167,6 +168,10 @@ export function useProductConversation({
    * Retained until terminal client-observed success.
    */
   const pendingRetryEnvelopeRef = useRef<PendingTurnRetryEnvelope | null>(null);
+  const abortControllerRef = useRef<AbortController | null>(null);
+  const sendGenerationRef = useRef(0);
+  const mountedRef = useRef(true);
+  const [cancellable, setCancellable] = useState(false);
   /** CORR-PROOF-11 — armed opaque proposalId for explicit reinstruction send. */
   const [armedReinstructionOfProposalId, setArmedReinstructionOfProposalId] =
     useState<string | null>(null);
@@ -223,6 +228,16 @@ export function useProductConversation({
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);

+  useEffect(() => {
+    mountedRef.current = true;
+    return () => {
+      mountedRef.current = false;
+      abortControllerRef.current?.abort();
+      abortControllerRef.current = null;
+      setCancellable(false);
+    };
+  }, []);
+
   useEffect(() => {
     let cancelled = false;
     setTranscriptAvailability("pending");
@@ -340,6 +355,11 @@ export function useProductConversation({
     uiState === "SOURCE_LOOKUP";
   const blocked = uiState === "BLOCKED";
   const canSend = !busy && !blocked && draft.trim().length > 0;
+  const stopAvailable = cancellable && !blocked && !f3Busy;
+
+  function stopCurrentResponse() {
+    abortControllerRef.current?.abort();
+  }
   const gateOpen =
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";
@@ -492,26 +512,47 @@ export function useProductConversation({

     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
-      let result: Awaited<ReturnType<typeof projectAssistantSendAction>>;
+      const generation = ++sendGenerationRef.current;
+      const controller = new AbortController();
+      abortControllerRef.current = controller;
+      setCancellable(true);
+      let result: Awaited<ReturnType<typeof sendCancellableAssistantTurn>>;
       try {
-        result = await projectAssistantSendAction({
-          projectId,
-          content: envelope.content,
-          history: [...envelope.history],
-          turnRetryKey: envelope.turnRetryKey,
-          ...(presentedLogicalTurnId
-            ? { logicalTurnId: presentedLogicalTurnId }
-            : {}),
-          ...(reinstructionOfProposalId
-            ? { reinstructionOfProposalId }
-            : {}),
-          ...(reservationInteractionContext
-            ? { reservationInteractionContext }
-            : {}),
-        });
-      } catch {
-        // Transport / Server Action rejection before structured response.
-        // Retain pendingRetryEnvelopeRef so retry can recover server ltu binding.
+        result = await sendCancellableAssistantTurn(
+          {
+            projectId,
+            content: envelope.content,
+            history: [...envelope.history],
+            turnRetryKey: envelope.turnRetryKey,
+            ...(presentedLogicalTurnId
+              ? { logicalTurnId: presentedLogicalTurnId }
+              : {}),
+            ...(reinstructionOfProposalId
+              ? { reinstructionOfProposalId }
+              : {}),
+            ...(reservationInteractionContext
+              ? { reservationInteractionContext }
+              : {}),
+          },
+          controller.signal,
+        );
+      } catch (error) {
+        if (abortControllerRef.current === controller) {
+          abortControllerRef.current = null;
+        }
+        setCancellable(false);
+        if (!mountedRef.current || generation !== sendGenerationRef.current) {
+          return;
+        }
+        const aborted =
+          controller.signal.aborted ||
+          (error instanceof Error && error.name === "AbortError");
+        if (aborted) {
+          lastSendFailedRef.current = true;
+          setUiState("STOPPED");
+          setError(null);
+          return;
+        }
         lastSendFailedRef.current = true;
         setUiState("ERROR_RECOVERABLE");
         setError(
@@ -520,6 +561,23 @@ export function useProductConversation({
         return;
       }

+      if (abortControllerRef.current === controller) {
+        abortControllerRef.current = null;
+      }
+      setCancellable(false);
+      if (
+        !mountedRef.current ||
+        generation !== sendGenerationRef.current ||
+        controller.signal.aborted
+      ) {
+        if (mountedRef.current && generation === sendGenerationRef.current) {
+          lastSendFailedRef.current = true;
+          setUiState("STOPPED");
+          setError(null);
+        }
+        return;
+      }
+
       if (!result.ok) {
         lastSendFailedRef.current = true;
         if (result.logicalTurnId) {
@@ -535,6 +593,11 @@ export function useProductConversation({
           setArmedReservationInteractionContext(null);
           setReservationResolutionProposal(null);
         }
+        if (result.status === "stopped") {
+          setUiState("STOPPED");
+          setError(null);
+          return;
+        }
         if (result.status === "provider_unavailable") {
           setUiState("BLOCKED");
           setModeLabel("Assistant indisponible");
@@ -597,9 +660,6 @@ export function useProductConversation({
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
-      if (result.toolEvents.length > 0) {
-        setUiState("SOURCE_LOOKUP");
-      }
       setMessages((prev) => [
         ...prev,
         {
@@ -923,6 +983,8 @@ export function useProductConversation({
     busy,
     blocked,
     canSend,
+    stopAvailable,
+    stopCurrentResponse,
     gateOpen,
     recommendationFreshness,
     qualificationFreshness,

```


### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index a423ec48..81413a2e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -26,6 +26,7 @@ import {
   presentSynthesisVerdictLabel,
   synthesisSummaryExcerpt,
 } from "./synthesisPresentation";
+import { projectNoraActivity } from "./noraActivityProjection";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -137,6 +138,8 @@ export function ConversationSurface({
     canConfirmLegacyFixture,
     canRefreshResolvedM3Running,
     sendMessage,
+    stopAvailable,
+    stopCurrentResponse,
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
@@ -242,6 +245,12 @@ export function ConversationSurface({
     executeKind !== "deterministic_test" &&
     executionSemanticKind(durableSemanticFacts) !== "cursor_real" &&
     executionSemanticKind(durableSemanticFacts) !== "durable_read";
+  const noraActivity = projectNoraActivity({
+    blocked,
+    busy,
+    uiState,
+    stopAvailable,
+  });

   return (
     <section
@@ -1362,6 +1371,24 @@ export function ConversationSurface({
         </section>
       ) : null}

+      {uiState === "STOPPED" && !error ? (
+        <div
+          className={styles.stoppedBanner}
+          role="status"
+          data-testid="project-assistant-stopped"
+        >
+          <p className={styles.stoppedText}>Réponse interrompue</p>
+          <button
+            type="button"
+            className={styles.quietButton}
+            data-testid="project-assistant-retry-stopped"
+            onClick={() => retryLastUserMessage()}
+          >
+            Réessayer
+          </button>
+        </div>
+      ) : null}
+
       {error ? (
         <div
           className={styles.errorBox}
@@ -1369,7 +1396,7 @@ export function ConversationSurface({
           data-testid="project-assistant-error"
         >
           <p className={styles.errorText}>{error}</p>
-          {uiState === "ERROR_RECOVERABLE" ? (
+          {uiState === "ERROR_RECOVERABLE" || uiState === "STOPPED" ? (
             <button
               type="button"
               className={styles.quietButton}
@@ -1449,6 +1476,7 @@ export function ConversationSurface({
         data-testid="project-assistant-composer"
         onSubmit={(event) => {
           event.preventDefault();
+          if (stopAvailable) return;
           sendMessage();
         }}
       >
@@ -1477,15 +1505,27 @@ export function ConversationSurface({
             className={styles.composerStatus}
             aria-live="polite"
             data-testid="project-assistant-status"
+            data-nora-phase={noraActivity.phase}
+            data-nora-stop={noraActivity.stopAvailable ? "available" : "unavailable"}
           >
-            {busy
-              ? uiState === "SOURCE_LOOKUP"
-                ? "Consultation des sources en cours…"
-                : "Nora rédige sa réponse…"
-              : blocked
-                ? "Assistant indisponible — configuration manquante."
-                : "Prêt"}
+            {noraActivity.label}
           </span>
+          {/* P3 composer ↑ / ■ / ↑ — ■ only while the request is actually cancellable. */}
+          {stopAvailable ? (
+            <button
+              type="button"
+              className={styles.stopButton}
+              data-testid="project-assistant-stop"
+              onClick={() => stopCurrentResponse()}
+              title="Arrêter la réponse de Nora"
+              aria-label="Arrêter la réponse de Nora"
+            >
+              <span className={styles.sendLabelFull}>Arrêter</span>
+              <span className={styles.sendLabelCompact} aria-hidden="true">
+                ■
+              </span>
+            </button>
+          ) : (
           <button
             type="submit"
             className={styles.sendButton}
@@ -1496,20 +1536,27 @@ export function ConversationSurface({
               blocked
                 ? "Assistant indisponible"
                 : busy
-                  ? "Envoi en cours"
+                  ? "Nora travaille"
                   : draft.trim().length === 0
                     ? "Saisissez un message"
                     : "Envoyer le message"
             }
             aria-label={
-              canSend ? "Envoyer le message à Nora" : "Envoi indisponible"
+              canSend
+                ? "Envoyer le message à Nora"
+                : busy
+                  ? "Nora travaille"
+                  : "Envoi indisponible"
             }
           >
-            <span className={styles.sendLabelFull}>Envoyer</span>
+            <span className={styles.sendLabelFull}>
+              {busy ? "Nora travaille…" : "Envoyer"}
+            </span>
             <span className={styles.sendLabelCompact} aria-hidden="true">
               ↑
             </span>
           </button>
+          )}
         </div>
         <p className={styles.composerCaption}>
           Vous pilotez. La décision vous appartient toujours.

```


### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
index 49deaf31..484cc8b2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
@@ -721,6 +721,43 @@
   cursor: not-allowed;
 }

+.stopButton {
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-ink);
+  background: var(--pm6-canvas);
+  color: var(--pm6-ink);
+  padding: 9px 20px;
+  font-size: 0.87rem;
+  font-weight: 600;
+  cursor: pointer;
+  min-height: 38px;
+}
+
+.stopButton:hover {
+  background: var(--pm6-forest-hover);
+}
+
+.stopButton:focus-visible,
+.sendButton:focus-visible {
+  outline: 2px solid var(--pm6-forest);
+  outline-offset: 2px;
+}
+
+.stoppedBanner {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 10px;
+  padding: 10px 12px;
+  border: 1px solid var(--pm6-border);
+  border-radius: 10px;
+}
+
+.stoppedText {
+  margin: 0;
+  font-size: 0.9rem;
+}
+
 .composerCaption {
   margin: 0;
   font-size: 0.78rem;
@@ -819,6 +856,18 @@
     line-height: 1;
   }

+  .stopButton {
+    display: inline-grid;
+    place-items: center;
+    width: 38px;
+    min-width: 38px;
+    height: 38px;
+    padding: 0;
+    border-radius: 8px;
+    font-size: 0.75rem;
+    line-height: 1;
+  }
+
   .sendLabelFull {
     display: none;
   }

```


### `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 4af97dc1..bb03f760 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -2,7 +2,6 @@

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
-import { orchestrateAssistantSend } from "./f2/orchestrateF2";
 import { recordF2Decision } from "./f2/recordDecision";
 import {
   executePilotLifecycleAction,
@@ -56,9 +55,9 @@ import {
   resolvePersistenceNotice,
 } from "./presentationLabels";
 import {
-  runMw6GovernedNoraProductTurn,
-  type RunMw6GovernedNoraProductTurnInput,
-} from "./mw6GovernedNoraTurn";
+  sendProjectAssistantTurn,
+  type SendProjectAssistantTurnInput,
+} from "./sendProjectAssistantTurn";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
@@ -77,104 +76,10 @@ import type {
  * No OPS1 session. No Cursor REAL. No Git write.
  * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
  */
-export async function projectAssistantSendAction(input: {
-  projectId: string;
-  content: string;
-  history?: AssistantHistoryMessage[];
-  /**
-   * Untrusted ExecutionContract id reference for MW6 governed external discovery.
-   * When present, server composes governedAuthority from Auth + OA and invokes
-   * the real Nora product path. CONTENT/AUTHORITY of the contract are never
-   * trusted from the client — only the id reference.
-   */
-  executionContractId?: string;
-  /**
-   * Optional untrusted evidence hint — verified only by server composition.
-   */
-  authorityEvidenceId?: unknown;
-  /** Hostile — ignored (server builds governedAuthority). */
-  governedAuthority?: unknown;
-  /** Hostile — ignored (Auth resolver owns actor). */
-  actorId?: unknown;
-  getExecutionContract?: unknown;
-  checkExecutionAuthorization?: unknown;
-  authorityResolver?: unknown;
-  authorizedContract?: unknown;
-  currentExternalDiscoveryIntent?: unknown;
-  canActAsMorris?: unknown;
-  claimedAuthorityLevel?: unknown;
-  /**
-   * TEST-ONLY Auth session → Pilote seam. Production omits this and uses
-   * resolveCurrentAuthenticatedPilote. AUTH REAL boundary carried forward.
-   */
-  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
-  provider?: import("@/lib/platform/ai").ConversationProvider;
-  sessionDbPath?: string;
-  /**
-   * D-GF-ACW-02 — optional re-present of server-issued logical Product turn id.
-   * Untrusted until Session lookup; client-invented ids fail LOGICAL_TURN_UNKNOWN.
-   */
-  logicalTurnId?: string;
-  /**
-   * Opaque client transport retry correlation (untrusted).
-   * NOT Product turn identity / SFIA authority — Session-adjacent lookup only.
-   */
-  turnRetryKey?: string;
-  /**
-   * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
-   * Untrusted until server validates against effective pending markers.
-   */
-  reinstructionOfProposalId?: string | null;
-  /**
-   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — untrusted client binding.
-   * Server revalidates project/cycle/Reservation; invalid → fail-closed.
-   */
-  reservationInteractionContext?: {
-    cycleInstanceId?: unknown;
-    epistemicItemId?: unknown;
-  } | null;
-}): Promise<ProjectAssistantSendResult> {
-  const executionContractId =
-    typeof input.executionContractId === "string"
-      ? input.executionContractId.trim()
-      : "";
-  if (executionContractId.length > 0) {
-    return runMw6GovernedNoraProductTurn({
-      projectId: input.projectId,
-      content: input.content,
-      history: input.history,
-      executionContractId,
-      claimedAuthorityEvidenceId: input.authorityEvidenceId,
-      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
-      provider: input.provider,
-      sessionDbPath: input.sessionDbPath,
-      governedAuthority: input.governedAuthority,
-      actorId: input.actorId,
-      authorityEvidenceId: input.authorityEvidenceId,
-      getExecutionContract: input.getExecutionContract,
-      checkExecutionAuthorization: input.checkExecutionAuthorization,
-      authorityResolver: input.authorityResolver,
-      authorizedContract: input.authorizedContract,
-      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
-      canActAsMorris: input.canActAsMorris,
-      claimedAuthorityLevel: input.claimedAuthorityLevel,
-    });
-  }
-  const reinstructionOfProposalId =
-    typeof input.reinstructionOfProposalId === "string"
-      ? input.reinstructionOfProposalId.trim() || null
-      : null;
-  return orchestrateAssistantSend({
-    projectId: input.projectId,
-    content: input.content,
-    history: input.history,
-    provider: input.provider,
-    sessionDbPath: input.sessionDbPath,
-    logicalTurnId: input.logicalTurnId,
-    turnRetryKey: input.turnRetryKey,
-    reinstructionOfProposalId,
-    reservationInteractionContext: input.reservationInteractionContext,
-  });
+export async function projectAssistantSendAction(
+  input: SendProjectAssistantTurnInput,
+): Promise<ProjectAssistantSendResult> {
+  return sendProjectAssistantTurn(input);
 }

 function toContextDto(

```


### `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index daf8841d..2c9db212 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -22,6 +22,7 @@ export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed"
 export type AssistantTurnStatus =
   | "ok"
   | "cognitive_stop"
+  | "stopped"
   | "provider_unavailable"
   | "provider_error"
   | "project_not_found"

```


### `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 7dcb49d2..24ad0d1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -17,8 +17,14 @@ import {
   type Mw3ContradictionAssessmentInput,
   type NoraEvalModelReasoningControl,
   type NoraAgentsUsdAccounting,
-  type NoraCampaignBudget,
+  type   NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
+import {
+  isAbortLike,
+  NoraTurnAbortedError,
+  throwIfAborted,
+} from "@/lib/nora-cognitive-runtime/noraTurnAbort";
+import { noraTurnStoppedFailure } from "./noraTurnStopped";
 import {
   appendPilotTranscriptTurn,
   materializeCycleJournalDelta,
@@ -263,6 +269,8 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Prefer logicalTurnId for production and new tests.
    */
   turnCorrelationId?: string;
+  /** Request-scoped AbortSignal from cancellable Product transport. */
+  signal?: AbortSignal;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -455,7 +463,9 @@ export async function orchestrateProjectAssistantTurn(input: {
           });
         },
       },
+      signal: input.signal,
     });
+    throwIfAborted(input.signal);

     let assistantText = turn.text;
     let lifecycleRecommendationMaterialized: boolean | null = null;
@@ -1340,6 +1350,9 @@ export async function orchestrateProjectAssistantTurn(input: {
       reservationProposedIds,
     };
   } catch (error) {
+    if (isAbortLike(error, input.signal) || error instanceof NoraTurnAbortedError) {
+      return noraTurnStoppedFailure(modeResolution.mode, logicalTurnId);
+    }
     const message =
       error instanceof Error
         ? error.message

```


### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 0bc2eab2..ea256edb 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -13,6 +13,12 @@ import type {
   NoraCampaignBudget,
   NoraEvalModelReasoningControl,
 } from "@/lib/nora-cognitive-runtime";
+import {
+  isAbortLike,
+  NoraTurnAbortedError,
+  throwIfAborted,
+} from "@/lib/nora-cognitive-runtime/noraTurnAbort";
+import { noraTurnStoppedFailure } from "../noraTurnStopped";
 import {
   resolveEvalCellConversationProvider,
   type EvalCellProviderFactory,
@@ -997,6 +1003,8 @@ export async function orchestrateAssistantSend(input: {
   usdAccounting?: NoraAgentsUsdAccounting;
   /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
   campaignBudget?: NoraCampaignBudget;
+  /** Request-scoped AbortSignal from cancellable Product transport. */
+  signal?: AbortSignal;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   const reinstructionOfProposalId = normalizeOpaqueProposalId(
@@ -1224,6 +1232,9 @@ export async function orchestrateAssistantSend(input: {
       evalModelReasoningControl: input.evalModelReasoningControl,
     });
   } catch (error) {
+    if (isAbortLike(error, input.signal) || error instanceof NoraTurnAbortedError) {
+      return noraTurnStoppedFailure(modeResolution.mode);
+    }
     const message =
       error instanceof Error ? error.message : "Erreur provider inattendue.";
     return {
@@ -1485,6 +1496,7 @@ export async function orchestrateAssistantSend(input: {
     // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
     // (studio supersedes in prompt builder).
     const methodContext = studioCognitiveContext.method;
+    throwIfAborted(input.signal);
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: effectiveProvider,

```


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 5894cfc7..179a92cb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -56,6 +56,11 @@ import {
   type NoraTurnBudget,
 } from "./turnBudget";
 import type { NoraCognitiveTurnResult } from "./types";
+import {
+  isAbortLike,
+  NoraTurnAbortedError,
+  throwIfAborted,
+} from "./noraTurnAbort";
 import type { NoraRunnerModelSettings } from "./reasoningModelSettings";
 import { withMaxToolCallsProviderData } from "./reasoningModelSettings";
 import type { HostedWebSearchCallLike } from "./externalSourceNormalization";
@@ -174,6 +179,8 @@ export type RunNoraAgentsTurnInput = {
    * Used by post_execution Deep Review without enabling Memory B / hosted search.
    */
   executionReviewTools?: import("./executionReviewAgentsTools").ExecutionReviewToolContext | null;
+  /** Request-scoped AbortSignal from Product transport. Native Runner option. */
+  signal?: AbortSignal;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -595,8 +602,10 @@ export async function runNoraAgentsTurn(
     }
   } else {
     try {
+      throwIfAborted(input.signal);
       const result = await runner.run(agent, input.userContent, {
         ...(session ? { session } : {}),
+        ...(input.signal ? { signal: input.signal } : {}),
         maxTurns,
         errorHandlers: {
           maxTurns: ({ runData }) => {
@@ -625,6 +634,7 @@ export async function runNoraAgentsTurn(
           },
         },
       });
+      throwIfAborted(input.signal);

       text =
         typeof result.finalOutput === "string"
@@ -710,6 +720,9 @@ export async function runNoraAgentsTurn(
       usageAgg = result.state?.usage ?? null;
       runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
     } catch (error) {
+      if (isAbortLike(error, input.signal)) {
+        throw new NoraTurnAbortedError();
+      }
       if (
         error instanceof CampaignModelInvocationDeniedError ||
         error instanceof CampaignUsdHardCapDeniedError

```


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index faa4c498..296b2016 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -24,6 +24,7 @@ import {
   type RunNoraAgentsTurnHostedSearchObserve,
 } from "./runNoraAgentsTurn";
 import { runNoraCognitiveCore } from "./noraCognitiveCompletion";
+import { throwIfAborted } from "./noraTurnAbort";
 import type { NoraCognitiveTurnResult } from "./types";
 import {
   decideCognitiveStrategy,
@@ -230,6 +231,8 @@ export type RunNoraCognitiveTurnInput = {
    * Bound by caller to projectId; never inject foreign OA handles via model args.
    */
   productExecutionTools?: import("./productExecutionAgentsTools").ProductExecutionToolContext | null;
+  /** Request-scoped AbortSignal — forwarded to the same Agents Runner. */
+  signal?: AbortSignal;
 };

 /**
@@ -882,7 +885,9 @@ export async function runNoraCognitiveTurn(
           : undefined,
       outputType: input.outputType,
       cycleJournalTools: null,
+      signal: input.signal,
     });
+    throwIfAborted(input.signal);
     const observations = [
       ...(input.sourceObservationFacts ?? []),
       ...(turn.hostedSearchObserve?.observations ?? []),
@@ -1060,7 +1065,9 @@ export async function runNoraCognitiveTurn(
             }
           : null,
       productExecutionTools: input.productExecutionTools ?? null,
+      signal: input.signal,
     });
+    throwIfAborted(input.signal);
     const observations = [
       ...(input.sourceObservationFacts ?? []),
       ...(turn.hostedSearchObserve?.observations ?? []),

```


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 2e15bf83..f74cc8f6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -339,7 +339,9 @@ export function createProviderAgentsModel(
   return {
     async getResponse(request: ModelRequest): Promise<ModelResponse> {
       if (request.signal?.aborted) {
-        throw new Error("AbortError");
+        const aborted = new Error("AbortError");
+        aborted.name = "AbortError";
+        throw aborted;
       }
       const items = agentInputToProviderItems(request.input);
       // Ensure Studio system instructions from the Runner filter are visible
@@ -360,7 +362,27 @@ export function createProviderAgentsModel(
         });
       }
       const tools = toolDefinitionsFromModelRequest(request);
-      const round = await completeRound({ items, tools });
+      const work = completeRound({ items, tools });
+      const round = await (request.signal
+        ? new Promise<Awaited<typeof work>>((resolve, reject) => {
+            const onAbort = () => {
+              const aborted = new Error("AbortError");
+              aborted.name = "AbortError";
+              reject(aborted);
+            };
+            request.signal!.addEventListener("abort", onAbort, { once: true });
+            work.then(
+              (value) => {
+                request.signal!.removeEventListener("abort", onAbort);
+                resolve(value);
+              },
+              (error) => {
+                request.signal!.removeEventListener("abort", onAbort);
+                reject(error);
+              },
+            );
+          })
+        : work);
       if (round.kind === "message") {
         if (
           productTurnOutputTypeName(request) ===

```


### `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
index ad57ac05..8a38d12c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
@@ -1,149 +1,147 @@
 .page {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) 404px;
+  min-height: calc(100vh - 96px);
+  margin: -8px -8px 0;
+}
+
+.creationColumn {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
-  max-width: 720px;
+  min-width: 0;
+  border-right: 1px solid var(--pm6-border-soft);
 }

 .hero {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
-  padding: var(--pm6-space-5);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
+  gap: 8px;
+  padding: 26px 30px 16px;
 }

 .heroEyebrow {
   margin: 0;
-  font-size: 0.82rem;
-  font-weight: 600;
-  color: var(--pm6-forest);
+  font-size: 0.78rem;
+  color: var(--pm6-muted);
 }

 .heroTitle {
   margin: 0;
-  font-size: 1.8rem;
+  font-size: 1.7rem;
   font-weight: 650;
-  letter-spacing: -0.01em;
+  letter-spacing: -0.02em;
   color: var(--pm6-ink);
 }

 .heroSubtitle {
   margin: 0;
   font-size: 0.92rem;
-  line-height: 1.6;
+  line-height: 1.5;
   color: var(--pm6-muted-strong);
+  max-width: 62ch;
 }

-.card {
+.thread {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  gap: 16px;
+  flex: 1;
+  min-height: 180px;
+  max-height: none;
+  overflow: auto;
+  padding: 8px 30px 16px;
 }

-.field {
+.bubbleUser,
+.bubbleNora {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
+  gap: 4px;
+  max-width: 92%;
 }

-.label {
-  font-size: 0.86rem;
-  font-weight: 600;
-  color: var(--pm6-ink);
+.bubbleUser {
+  align-self: stretch;
 }

-.optional {
-  font-weight: 400;
+.bubbleNora {
+  align-self: stretch;
+}
+
+.bubbleLabel {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
   color: var(--pm6-muted);
 }

-.input,
-.textarea {
-  width: 100%;
-  border-radius: var(--pm6-radius-sm);
-  border: 1px solid var(--pm6-border);
-  background: var(--pm6-surface);
-  color: var(--pm6-ink);
-  padding: 11px var(--pm6-space-3);
+.bubbleText {
+  margin: 0;
   font-size: 0.94rem;
   line-height: 1.55;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
 }

-.textarea {
-  resize: vertical;
-}
-
-.input::placeholder,
-.textarea::placeholder {
-  color: var(--pm6-muted);
+.composer {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+  padding: 15px 24px 20px;
+  border-top: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface);
 }

-.help {
-  margin: 0;
-  font-size: 0.8rem;
+.textarea {
+  width: 100%;
+  min-height: 72px;
+  border-radius: 12px;
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  color: var(--pm6-ink);
+  padding: 12px 14px;
+  font-size: 0.94rem;
   line-height: 1.5;
-  color: var(--pm6-muted);
-}
-
-.fieldError {
-  margin: 0;
-  font-size: 0.82rem;
-  font-weight: 600;
-  color: var(--pm6-danger);
+  resize: vertical;
 }

-.submitError {
-  margin: 0;
-  border-radius: var(--pm6-radius-sm);
-  border: 1px solid color-mix(in srgb, var(--pm6-danger) 32%, transparent);
-  background: var(--pm6-danger-tint);
-  padding: var(--pm6-space-3);
-  font-size: 0.87rem;
-  line-height: 1.55;
-  color: var(--pm6-danger);
+.textarea:focus-visible,
+.primaryButton:focus-visible,
+.quietButton:focus-visible,
+.textButton:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
 }

 .actions {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
-  gap: var(--pm6-space-3);
+  gap: 10px;
 }

 .primaryButton,
-.primaryLink,
 .quietButton {
   display: inline-flex;
   align-items: center;
-  border-radius: var(--pm6-radius-pill);
-  padding: 11px 20px;
-  font-size: 0.9rem;
+  justify-content: center;
+  border-radius: 10px;
+  padding: 9px 16px;
+  min-height: 38px;
+  font-size: 0.88rem;
   font-weight: 600;
   cursor: pointer;
   text-decoration: none;
 }

-.primaryButton,
-.primaryLink {
+.primaryButton {
   background: var(--pm6-forest);
   border: 1px solid var(--pm6-forest);
   color: var(--pm6-forest-ink);
 }

-.primaryButton:hover:not(:disabled),
-.primaryLink:hover {
-  background: var(--pm6-forest-hover);
-}
-
 .primaryButton:disabled {
   opacity: 0.55;
   cursor: not-allowed;
@@ -155,19 +153,59 @@
   color: var(--pm6-ink-soft);
 }

-.status {
-  font-size: 0.82rem;
+.textButton {
+  background: none;
+  border: 0;
+  padding: 0;
+  min-height: 32px;
+  font: inherit;
+  font-size: 0.8rem;
+  font-weight: 600;
+  color: var(--pm6-ink-soft);
+  text-decoration: underline;
+  cursor: pointer;
+}
+
+.help {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted);
+}
+
+.preview {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  padding: 22px;
+  background: var(--pm6-canvas-raised, var(--pm6-surface-sunken));
+  border-left: 1px solid var(--pm6-border-soft);
+}
+
+.previewEyebrow {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
   color: var(--pm6-muted);
 }

-.summary {
+.previewTitle {
+  margin: 0;
+  font-size: 1.15rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.previewList {
   margin: 0;
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-3);
+  gap: 14px;
 }

-.summary dt {
+.previewList dt {
   font-size: 0.7rem;
   font-weight: 700;
   letter-spacing: 0.07em;
@@ -175,46 +213,111 @@
   color: var(--pm6-muted);
 }

-.summary dd {
-  margin: 2px 0 0;
+.previewList dd {
+  margin: 4px 0 0;
   font-size: 0.9rem;
-  line-height: 1.55;
+  line-height: 1.45;
   color: var(--pm6-ink-soft);
   overflow-wrap: anywhere;
 }

-.details {
-  border-top: 1px solid var(--pm6-border-soft);
-  padding-top: var(--pm6-space-3);
-  font-size: 0.85rem;
+.previewHint,
+.previewHintReady {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.45;
+}
+
+.previewHint {
   color: var(--pm6-muted-strong);
 }

-.details > summary {
-  cursor: pointer;
-  font-size: 0.8rem;
+.previewHintReady {
+  color: var(--pm6-ok);
   font-weight: 600;
-  color: var(--pm6-muted);
 }

-.details > * + * {
-  margin-top: var(--pm6-space-3);
+.correctRow {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 12px;
 }

-.code {
+.submitError {
   margin: 0;
-  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
-  font-size: 0.78rem;
-  color: var(--pm6-muted-strong);
-  overflow-wrap: anywhere;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--pm6-danger) 32%, transparent);
+  background: var(--pm6-danger-tint);
+  padding: 10px 12px;
+  font-size: 0.86rem;
+  color: var(--pm6-danger);
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
 }

-@media (max-width: 767px) {
-  .card {
-    padding: var(--pm6-space-4);
+@media (max-width: 1024px) {
+  .page {
+    grid-template-columns: 1fr;
+    min-height: auto;
+    margin: 0;
+  }
+
+  .creationColumn {
+    border-right: 0;
+  }
+
+  .page {
+    display: flex;
+    flex-direction: column;
+  }
+
+  .hero {
+    order: 1;
+    padding: 14px 16px 8px;
+  }
+
+  .thread {
+    order: 2;
+    min-height: 0;
+    max-height: 22vh;
+    padding: 8px 16px 4px;
+  }
+
+  .composer {
+    order: 3;
+    border-top: 0;
+    border-bottom: 1px solid var(--pm6-border-soft);
+    padding: 12px 16px;
+    position: sticky;
+    bottom: auto;
+    top: 0;
+    z-index: 2;
+  }
+
+  .preview {
+    order: 4;
+    border-left: 0;
+    border-top: 1px solid var(--pm6-border-soft);
+    padding: 16px;
+  }
+
+  .primaryButton,
+  .quietButton {
+    width: 100%;
   }

-  .heroTitle {
-    font-size: 1.5rem;
+  .actions {
+    flex-direction: column;
+    align-items: stretch;
   }
 }

```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
index 52b93e56..7a3e29d7 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
@@ -35,6 +35,13 @@ const {
   projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
 }));

+vi.mock("@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn", () => ({
+  sendCancellableAssistantTurn: (
+    input: unknown,
+    _signal?: AbortSignal,
+  ) => projectAssistantSendActionMock(input),
+}));
+
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConversationContinuityAction: vi.fn(async () => ({
     ok: true,

```


### `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dc721daf..8043e0cc 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -578,15 +578,15 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "8839aac183e38265"
+      "sha256_16": "40476bb2a7b35f9c"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "28b6b3d32b754cec"
+      "sha256_16": "44bcd86fd4d51147"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "8c5c218b44267b5b"
+      "sha256_16": "f9b863bbb0b7ff7b"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "b1d586c1784f8c75"
+      "sha256_16": "b4aaef8d204e35c7"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
@@ -678,7 +678,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "02979a5b05a36ced"
+      "sha256_16": "04bb47dbd1e37a7f"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

## 26. Useful complete diffs (vs HEAD/main)

Diffs for adapted files are included above in this pack (hook, ConversationSurface, actions, types, orchestrateTurn, orchestrateF2, runNoraAgentsTurn, runNoraCognitiveTurn, providerAgentsModel, New Project CSS, runningAttemptRefresh mock, PRR hashes).

## 27. Tests cancellation

| ID | Result |
| --- | --- |
| T01 Runner signal | PASS (`p5.s06.cp02.cancellation.d0.test.ts`) |
| T02 transport body/hostile + POST 400 | PASS |
| T03 ■ click abort once | PASS UI |
| T04 STOPPED ≠ ERROR | PASS UI + noraTurnStoppedFailure |
| T05/T06 late success ignored | PASS hook |
| T07 retry same turnRetryKey | PASS hook |
| T08 new send new key | PASS hook |
| T09 transport error ≠ STOPPED | PASS hook |
| T10 Cognitive STOP distinct | PASS status type + failure helper |
| T11 Execution STOP not wired | MW6 path has no signal by design |
| T12 SOURCE_LOOKUP honesty | PASS `p5.s06.pilotExperience.d0.test.tsx` + projection |
| T13 no late Proposal on abort | PASS T01 abort before model completion |
| T14 a11y name | PASS aria-label |
| T15 no ■ when not cancellable | PASS |
| T16 unmount no Pilot STOPPED | PASS hook |

Targeted: CP02 d0/ui/hook + S06 pilotExperience + previously flaky PRR/MW4/MW5/PJR isolated PASS.

## 28. Targeted regressions

`runningAttemptRefresh.ui.test.tsx` mocks `sendCancellableAssistantTurn`. TrajectorySurface 3 timeouts under full-suite load: **PASS in isolation** (pre-existing load flake, not CP02 product bug). Second full `npm test` **0 failed**.

## 29. Full npm test

**PASS** — Test Files **478 passed** | 19 skipped (497) · Tests **5294 passed** | 139 skipped (5433) · failed **0** · ~85s
CP01 historical 5282/139 — counts grew (CP02 tests). Do not force exact historical count.

## 30. typecheck / lint / build

- `npm run typecheck` PASS
- `npm run lint` PASS (0 warnings/errors)
- `npm run build` PASS — route `/api/studio/projects/[projectId]/assistant/send` listed
- Pre-existing warning: `better-sqlite3` unresolved in `evaluateProductRealReadiness.ts` (unchanged, not CP02)

## 31. ZERO REAL

YES. Fake/hanging Model only. `OPS1_CONVERSATION_PROVIDER=fake` for visual captures. No API key used.

## 32. Fake/Real qualification

Applicable YES. External boundary OpenAI Agents. Deterministic hanging Model + Fake provider abort race. Same Runner / same Nora / same send.
Proof level: **DETERMINISTIC CANCELLATION PROVEN**.
Forbidden claims not made: REAL cancellation, READY FOR REAL, P5 COMPLETE.

## 33. Six visual final screenshots

Folder `.tmp-sfia-review/p5-s06-visual/cp02/runtime/`
Fixture: Playwright + auth storage `.tmp-sfia-review/auth/studio-storage-state.json` · BASE http://localhost:3020 · fake provider · 2026-10-06 ~08:58Z


- `auth-desktop-1440x1024.png` sha256 `2b4b343c187308f693528ba90cb6cab5ee2f43049daf4d494aa7ab7ddb220181` vs CP01 `2b4b343c187308f693528ba90cb6cab5ee2f43049daf4d494aa7ab7ddb220181` → **SAME**
- `auth-mobile-390x844.png` sha256 `ccba366710d9220fd1853905ec18dea5e8834b2ef8051fb01ec0a4684f656948` vs CP01 `ccba366710d9220fd1853905ec18dea5e8834b2ef8051fb01ec0a4684f656948` → **SAME**
- `projects-desktop-1440x1024.png` sha256 `e8e61b2c6c716e26fc23d2867e6e998c78f521096b63f986a1ae6c5113122854` vs CP01 `e8e61b2c6c716e26fc23d2867e6e998c78f521096b63f986a1ae6c5113122854` → **SAME**
- `projects-mobile-390x844.png` sha256 `488e89a39b97411f3f0a3b351ff4aa17382b64c12c53b770608aa9bd3fda2ae0` vs CP01 `488e89a39b97411f3f0a3b351ff4aa17382b64c12c53b770608aa9bd3fda2ae0` → **SAME**
- `new-project-desktop-1440x1024.png` sha256 `54d36c5b70767cf65414e8631c4c9334adea6f1db34cc6f1b1616c84403c5529` vs CP01 `54d36c5b70767cf65414e8631c4c9334adea6f1db34cc6f1b1616c84403c5529` → **SAME**
- `new-project-mobile-390x844.png` sha256 `16f5d7ce397522484efd3b591ce9665de4bd78cc5ea68230d4fe2b060839f357` vs CP01 `0e4300dae2fdbc81d5c0ba22c87bb43fda70130e722f7eb73eedec8820be1cf7` → **DIFF (expected New Project mobile)**


## 34. Figma comparisons

READ ONLY copies in `cp02/figma/` (63:39, 190:253, 67:39, 190:284, 130:3, 190:551). Structural S06 scope only. No pixel-perfect global claim.

## 35. STOPPED state proof

Runtime screenshot of in-flight STOP **not** captured (would require production delay flag — forbidden). Proof = UI tests + hook abort + Runner T01. Qualify: **STOPPED proven deterministically, not visually on live app screenshot**.

## 36. Accessibility

Stop control keyboard (button) · accessible name · focus-visible CSS · non-color ■ glyph + Arrêter · ~38px · reduced-motion already on scroll; STOPPED is text. No WCAG certified claim.

## 37. Architecture parallelism check

Canonical send = 1. Nora runtime = 1. Orchestration = existing. Route = thin adapter. No CancellationStore. No second Product path.

## 38. Security / input boundary (Route Handler)

POST only. `projectId` from URL. JSON parse fail-closed. Allowlist content/history/logicalTurnId/turnRetryKey/reinstruction/reservation. Hostile keys (provider, sessionDbPath, authority, model, executionContractId, signal from body, …) rejected `HOSTILE_FIELD`. No client actor/auth injection. Session cookies same-origin. Auth remains server-side.

## 39. Debt / exit

- **P5-S06-DEBT-NORA-STOP** = CLOSED LOCALLY / awaiting Git Integration. Owner: Studio P5. Target: S06 GI when Morris authorizes. Exit: merge S06.
- Thin HTTP adapter is **nominal** for browser abort of Server Actions, not temporary registry debt.
- Visual residual: New Project mobile composer still uses Envoyer/Annuler (pre-Project collect, not conversation ■). Non-blocking. No invented polish ticket.

## 40. Blocking / nonblocking reserves

- STREAMING P3 not implemented — nonblocking if not claimed
- REAL cancellation unproven — expected
- S06 not Git-integrated
- better-sqlite3 build warning pre-existing nonblocking
- TrajectorySurface load flake isolated PASS
- STOPPED runtime screenshot absent — honesty reserve, tests cover

**No remaining S06 functional blocker identified locally.**

## 41. Docs truth-sync

Roadmap tip CP02 LOCAL CANDIDATE / FUNCTIONAL CLOSURE PASS. P5 doc P5-S06 CP02 status. Historical CP01 preserved as SUPERSEDED tip. P3/P4/doctrine untouched.

## 42. Project Git effects

NONE authorized. No commit, push, PR, merge on project branch. Staged empty. Working tree dirty with S06 candidate.

## 43. Decisions Morris required

1. ChatGPT Final Critical Review of this pack
2. Distinct **P5-S06 Git Integration GO** if PASS — **not consumed**
3. No S07/S08/P6 authorization requested

## 44. Review Handoff publication

Publisher `scripts/sfia/publish-review-handoff.sh`
Message: `docs(review-handoff): publish P5 S06 CP02 cancellation closure`
Input remote before: `b588c7de6c2d061aecd230860b88ac190cea86a8`
Remote after: `6fc7eceff133b174a70e029fb185ba6a51b934d9`
Blob: `5c264bc51405aa2e4017c6f54526ce92a46e8d10`
Reread title: P5-S06 CP02 — NORA CANCELLATION CLOSURE — FULL REVIEW PACK
Handoff branch restored: `sfia/review-handoff`
Project branch restored: `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` @ `16a8e2fd`
(filled after publish)

## 45. Unique readiness

READY FOR CHATGPT FINAL CRITICAL REVIEW — P5-S06 CP02 LOCAL CANDIDATE

## 46. Verdict

**READY FOR CHATGPT FINAL CRITICAL REVIEW — P5-S06 CP02 LOCAL CANDIDATE**

P5-S06 FUNCTIONAL CLOSURE = PASS LOCALLY
A PASS · A2 PASS · B PASS · C Activity PASS · C2 STOP PASS DETERMINISTIC / BOUNDED CANCELLATION PROVEN · D Visual PASS AT S06 SCOPE
ZERO REAL YES
S06 COMPLETE = NOT YET INTEGRATED
P5 COMPLETE NO · P6 READY NO · S07 NOT STARTED · runtime v3 NON ADOPTED · Git NOT AUTHORIZED
