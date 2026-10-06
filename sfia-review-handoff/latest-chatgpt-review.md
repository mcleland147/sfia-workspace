# P5-S06 CP02.2 — F2 CANCELLATION CLOSURE — FULL REVIEW PACK

**Cycle:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 · P5 · P5-S06 · CP02.2
**Profile:** Critical
**CKC:** `ckc:studio:delivery` / `cyc:delivery` / VALIDATED — guidance only
**Verdict candidate:** READY FOR CHATGPT FINAL CRITICAL RE-REVIEW — P5-S06 CP02.2 LOCAL CANDIDATE
**P5-S06 FUNCTIONAL CLOSURE:** PASS LOCALLY
**P5-S06 FULL CANONICAL SEND CANCELLATION EXIT PROOF:** PASS LOCALLY / DETERMINISTIC
**≠ INTEGRATED · ≠ P5 COMPLETE · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ REAL cancellation proven**

---

## 1. Timestamp

2026-10-06 Europe/Paris

## 2. Repo / worktree

`mcleland147/sfia-workspace`
`/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`

## 3. Branch

`delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion`

## 4. HEAD / base

HEAD = origin/main = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
left/right = 0 0

## 5. Local Git Truth initial

HEAD = origin/main. Staged empty. Working tree = S06 candidate CP01/CP02/CP02.1 + CP02.2 delta. No project commit.

## 6. Morris CP02.2 GO consumed

YES. D-S06-CANCEL-01 not re-decided.

## 7. Review input

commit `eeed48116dd6d03a9ac59f7dca3f2ffa348dded7`
blob `74485d7c4ae5e0dcd1021e46df9154eff1a578de`
file `sfia-review-handoff/latest-chatgpt-review.md` @ `sfia/review-handoff`

## 8. Sources

Process template v2.6; routing/operating/guardrails; CKC delivery VALIDATED guidance only; Build Doctrine / Roadmap / cadrage READ; P1–P5 with P3/P4 priority; CP02.1 handoff eeed4811.

## 9. Cycle / profile / CKC

Cycle 8 Delivery Correction · Critical · EVOL · `ckc:studio:delivery` cognitive only.

## 10. Convergence pre-check

S01–S05 INTEGRATED. P5 IN PROGRESS. S07 NOT STARTED. runtime v3 NON ADOPTED. Git Integration NOT AUTHORIZED.

## 11. Accepted CP02.1 baseline

KEEP transport, canonical send, F1 Runner signal, F1 post-model cut-lines, UI STOP, visuals, retry.

## 12. Full canonical send call graph

```
Request.signal
→ POST /api/studio/projects/[projectId]/assistant/send
→ sendProjectAssistantTurn(..., { signal: request.signal })
→ orchestrateAssistantSend({ signal })
→ analyzeIntent({ signal })
→ ConversationProvider.completeStructured({ signal })
   Metered/eval wrappers forward `input` including signal
   OpenAIConversationProvider.responses.create(body, { signal })
→ throwIfAborted (postAnalyze)
→ F2 governed effects OR F1 orchestrateProjectAssistantTurn({ signal })
→ terminal STOPPED | ok
```

Second F2 provider call: `reasonWithResolvedCkcContext` → `provider.complete()` (no SDK signal on complete(); cut-line `ckcReasoning` before call).

## 13. F2 Cancellation Ledger

| operation | file/function | class | mutate? | vs model | async | abort before CP02.2 | CP02.2 cut-line | rollback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| analyzeIntent / completeStructured | intentAnalysis.ts | provider | no | IS the F2 model | yes | none | throwIfAborted before/after + signal to provider | n/a |
| Metered.completeStructured | meteredProvider.ts | wrapper | budget claim | before inner | yes | none | abort after preflight → no inner dispatch; forward signal | no FinOps redo |
| OpenAI completeStructured | openaiProvider.ts | provider | no | model | yes | none | RequestOptions.signal; abort not TechnicalError | n/a |
| Fake completeStructured | fakeProvider.ts | provider | no | model | yes | none | throw AbortError if already aborted | n/a |
| resolveCognitiveIntentProjectSummary | orchestrateF2 | read | no | before | yes | none | none | n/a |
| loadCanonicalConversationForAnalysis | canonicalConversationSession | session read | no | before | yes | none | none | n/a |
| resolveF2ProductRoutedProvider | routing | ephemeral | no | before | no | none | none | n/a |
| deriveProductPathMw3Assessment | read | no | after analyze | yes | none | after postAnalyze | n/a |
| assessChatFirstWorkEligibility | read | no | after | yes | none | none | n/a |
| resolveChatFirstPilotDecision | w2 | Product HD write possible | yes | after | yes | none | **chatFirstDecision** before call | no rollback if already recorded |
| rememberMw5IssuedChallenge / clear | mw5ChallengeSessionStore | process-local | yes | after | no | none | **mw5ChallengeState** before evaluateF2Mw5 | no |
| qualifyWithCkc | read/qualify | no durable cycle | after | yes | none | none | n/a |
| reasonWithResolvedCkcContext | ckcCognitiveContext complete() | provider | no | after qualify | yes | none | **ckcReasoning** before helper | n/a |
| createCycle.execute | OA | Product durable | yes | after | yes | none | **createCycle** | no |
| saveProposal | proposalStore | process-local | yes | after | no | none | **saveProposal** | no |
| commitPendingDecisionSubjectForDecisionRequired | marker write | Product | yes | after proposal | yes | none | **pendingDecisionSubject** before helper (not mid-helper) | no |
| persistCanonicalF2AssistantTurn | session | session durable | yes | after | yes | none | **transcript** in f2ConversationalSuccess | no |
| f2Success return | orchestrateF2 | ephemeral | no | terminal | no | none | **terminalSuccess** | n/a |
| F1 orchestrateProjectAssistantTurn | KEEP CP02.1 | Product | mixed | after F2 analyze if not formalizationReady | yes | CP02.1 | unchanged | CP02.1 |

## 14. ConversationProvider impact audit

Implementors: OpenAIConversationProvider (ADAPT), FakeConversationProvider (ADAPT abort-if-already-aborted), MeteredConversationProvider (ADAPT forward + abort-before-inner).
Decorators that pass `input` through unchanged: CallCap / IntentCapture / eval capturing (signal survives extra field).
FakeIntakeConversationProvider: no completeStructured.
Eval cell factory: wraps OpenAI+Metered — signal preserved.
Test doubles with explicit `completeStructured(input)` remain compatible (optional signal).

## 15. Installed OpenAI SDK abort signature

Package `openai` ^6.48.0.
`Responses.create(body: ResponseCreateParamsNonStreaming, options?: RequestOptions)`
`RequestOptions.signal?: AbortSignal | undefined | null` in `node_modules/openai/internal/request-options.d.ts`.
Abort error type: `APIUserAbortError`.

## 16–17. F2 provider signal BEFORE / AFTER

BEFORE: orchestrateAssistantSend had `signal` but `analyzeIntent(...)` omitted it; completeStructured had no signal field; OpenAI `responses.create(body)` only.
AFTER: signal on analyzeIntent + completeStructured; OpenAI `create(body, { signal })` when present; no second client/fetch/Promise.race.

## 18. OpenAI adapter signal proof

`__tests__/ops1/openai-provider.test.ts` — second arg `{ signal: controller.signal }` identity; abort errors not wrapped as TechnicalError when `signal.aborted`.

## 19. Wrapper propagation proof

CP02.2 test ForwardingMeterStandIn: `lastSignal === controller.signal`.
Metered: `inner.completeStructured(input)` after abort-if-aborted.

## 20. Abort catch normalization

analyzeIntent try already mapped isAbortLike → noraTurnStoppedFailure.
Post-analyze remainder wrapped in try/catch: isAbortLike / NoraTurnAbortedError → STOPPED (not provider_error).
`return await completeF2Turn` so async cut-line throws are caught.
OpenAI layer rethrows abort; Product maps to STOPPED.

## 21–22. F2 effect cut-lines

postAnalyze · chatFirstDecision · mw5ChallengeState · ckcReasoning · createCycle · saveProposal · pendingDecisionSubject · transcript · terminalSuccess.
TEST-ONLY `beforeF2Effect` suspends then throwIfAborted.

## 23. HumanDecision

STOP ≠ REFUSED/DEFERRED. Cut-line before resolveChatFirstPilotDecision. If HD already recorded, keep. Dedicated eligible-workGate HD abort fixture not constructed (cut-line code-present).

## 24. createCycle

Cut-line immediately before execute. If already launched/committed, no rollback. Proven: abort at createCycle → execute=0. Abort at saveProposal after execute=1 → cycle kept, proposal 0.

## 25. Proposal / pending subject

Cut-line before saveProposal and before commitPending helper (not mid-transaction). Abort at saveProposal → 0 proposals (pending not started).

## 26. MW5 challenge state

Cut-line before evaluateF2Mw5 (remember/clear live inside). Abort at postAnalyze → latest challenge null.

## 27. f2ConversationalSuccess

Same function; signal+beforeF2Effect via local completeF2Turn. throwIfAborted transcript → persist → throwIfAborted terminal. Persist-then-STOP keeps rows.

## 28. Already-started / no rollback

createCycle before saveProposal abort: kept. Transcript before terminal abort: kept.

## 29. Provider in-flight abort proof

T01 HoldStructuredProvider: started, same signal, abort, AbortError, STOPPED, 0 proposal, 0 assistant, no active cycle.

## 30. Post-analysis / pre-effect proofs

T postAnalyze, T03 createCycle=0, T04 saveProposal=0, T06 transcript=0.

## 31. Terminal success proof

T07/T08 abort at terminalSuccess → STOPPED not ok:true; assistant rows preserved.

## 32. Files modified

- orchestrateF2.ts
- intentAnalysis.ts
- types.ts
- openaiProvider.ts
- fakeProvider.ts
- meteredProvider.ts
- openai-provider.test.ts
- Roadmap
- P5 integrated delivery
- PRR manifest hashes

## 33. Files created

`projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s06.cp02.2.f2Cancellation.d0.test.ts`

## 34. Full new-file contents

```ts
/** @vitest-environment node */
/**
 * P5-S06 CP02.2 — F2 provider cancellation + F2 effect cut-lines.
 * ZERO REAL. Does not re-open F1 Runner / UI / transport.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  listProposalsForProject,
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  getMw5ChallengeSession,
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  ProductSqliteSession,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

class HoldStructuredProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  started = false;
  seenSignal: AbortSignal | undefined;
  seenAbortedAtReject = false;
  private readonly inner = new FakeConversationProvider();
  constructor(private readonly hold: Promise<void>) {}
  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    return this.inner.complete(messages);
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    this.started = true;
    this.seenSignal = input.signal;
    await this.hold;
    this.seenAbortedAtReject = input.signal?.aborted === true;
    if (input.signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    return this.inner.completeStructured(input);
  }
}

class ForwardingMeterStandIn implements ConversationProvider {
  readonly providerId: string;
  lastSignal: AbortSignal | undefined;
  constructor(private readonly inner: ConversationProvider) {
    this.providerId = inner.providerId;
  }
  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    return this.inner.complete(messages);
  }
  async completeRound(
    input: Parameters<NonNullable<ConversationProvider["completeRound"]>>[0],
  ) {
    if (typeof this.inner.completeRound !== "function") {
      throw new Error("completeRound missing");
    }
    return this.inner.completeRound(input);
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    this.lastSignal = input.signal;
    if (typeof this.inner.completeStructured !== "function") {
      throw new Error("completeStructured missing");
    }
    return this.inner.completeStructured(input);
  }
}

function listTranscript(projectId: string, sessionDbPath: string) {
  const session = new ProductSqliteSession({
    projectId,
    dbPath: sessionDbPath,
    sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
  });
  try {
    return listPilotTranscriptTurns(session);
  } finally {
    session.close();
  }
}

async function waitFor(
  predicate: () => boolean,
  timeoutMs = 8000,
): Promise<void> {
  const started = Date.now();
  while (!predicate() && Date.now() - started < timeoutMs) {
    await new Promise((r) => setTimeout(r, 10));
  }
  expect(predicate()).toBe(true);
}

describe("P5-S06 CP02.2 F2 cancellation", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cp022-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-10-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet CP022",
      objective: "F2 cancellation.",
      context: "Contexte F2 CP02.2.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "C22",
      idempotencyKey: `idem:cp022-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("CP022 setup create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
  });

  it("T01 — abort during F2 completeStructured: STOPPED, no F2 effects, not provider_error", async () => {
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const provider = new HoldStructuredProvider(hold);
    const controller = new AbortController();
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider,
      signal: controller.signal,
    });
    await waitFor(() => provider.started);
    expect(provider.seenSignal).toBe(controller.signal);
    controller.abort();
    release();
    const result = await pending;
    expect(provider.seenAbortedAtReject).toBe(true);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(result.code).toBe("NORA_TURN_STOPPED");
    expect(listProposalsForProject(projectId)).toHaveLength(0);
    const rows = listTranscript(projectId, sessionDbPath);
    expect(rows.filter((r) => r.role === "assistant")).toHaveLength(0);
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (after.ok) {
      expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
    }
  });

  it("wrapper does not drop completeStructured signal", async () => {
    const controller = new AbortController();
    const inner = new FakeConversationProvider();
    const wrapper = new ForwardingMeterStandIn(inner);
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      provider: wrapper,
      signal: controller.signal,
    });
    expect(result.ok).toBe(true);
    expect(wrapper.lastSignal).toBe(controller.signal);
  });

  it("T postAnalyze — abort after analyze before F2 mutators: createCycle/proposal/transcript = 0", async () => {
    const runtime = getRuntimeApplicationService();
    const createSpy = vi.spyOn(runtime.oa!.cycleServices.createCycle, "execute");
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "postAnalyze") await hold;
      },
    });
    await waitFor(() => seen.includes("postAnalyze"));
    controller.abort();
    release();
    const result = await pending;
    expect(controller.signal.aborted).toBe(true);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(result.code).toBe("NORA_TURN_STOPPED");
    expect(createSpy).not.toHaveBeenCalled();
    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(
      listTranscript(projectId, sessionDbPath).filter((r) => r.role === "assistant"),
    ).toHaveLength(0);
    expect(getMw5ChallengeSession(projectId).latest).toBeNull();
  });

  it("T03 — abort after analyze before createCycle: execute = 0", async () => {
    const runtime = getRuntimeApplicationService();
    const createSpy = vi.spyOn(runtime.oa!.cycleServices.createCycle, "execute");
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "createCycle") await hold;
      },
    });
    await waitFor(() => seen.includes("createCycle"));
    controller.abort();
    release();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(createSpy).not.toHaveBeenCalled();
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("T04/T05/T06 — abort before saveProposal: no proposal, no transcript, createCycle already-started kept", async () => {
    const runtime = getRuntimeApplicationService();
    const createSpy = vi.spyOn(runtime.oa!.cycleServices.createCycle, "execute");
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "saveProposal") await hold;
      },
    });
    await waitFor(() => seen.includes("saveProposal"));
    expect(createSpy).toHaveBeenCalledTimes(1);
    controller.abort();
    release();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(
      listTranscript(projectId, sessionDbPath).filter((r) => r.role === "assistant"),
    ).toHaveLength(0);
  });

  it("T06/T08 — abort before F2 transcript: no assistant row, not ok:true", async () => {
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "transcript") await hold;
      },
    });
    await waitFor(() => seen.includes("transcript"));
    controller.abort();
    release();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(
      listTranscript(projectId, sessionDbPath).filter((r) => r.role === "assistant"),
    ).toHaveLength(0);
  });

  it("T07/T08 — abort after transcript committed: no rollback, terminal STOPPED", async () => {
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "terminalSuccess") await hold;
      },
    });
    await waitFor(() => seen.includes("terminalSuccess"));
    const assistantsBeforeAbort = listTranscript(
      projectId,
      sessionDbPath,
    ).filter((r) => r.role === "assistant").length;
    expect(assistantsBeforeAbort).toBeGreaterThan(0);
    controller.abort();
    release();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(
      listTranscript(projectId, sessionDbPath).filter((r) => r.role === "assistant")
        .length,
    ).toBe(assistantsBeforeAbort);
  });

  it("T09 — next turn after STOP still completes", async () => {
    const controller = new AbortController();
    const seen: string[] = [];
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeF2Effect: async (block) => {
        seen.push(block);
        if (block === "postAnalyze") await hold;
      },
    });
    await waitFor(() => seen.includes("postAnalyze"));
    controller.abort();
    release();
    const stopped = await pending;
    expect(stopped.ok).toBe(false);
    const next = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
      sessionDbPath,
      provider: new FakeConversationProvider(),
    });
    expect(next.ok).toBe(true);
    if (!next.ok) return;
    expect(next.f2?.turnKind).toBe("f1_informative");
  });
});

```

## 35. Useful complete diffs (code / PRR)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 0bc2eab2..c5a01b22 100644
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
@@ -121,6 +127,31 @@ import {
 /** Single source of persistence honesty for both the turn notice and the Proposal. */
 const EPHEMERAL_NOTICE = F2_PROCESS_LOCAL_NOTICE;

+/**
+ * Independent F2 effect blocks. Abort observed before a block starts → do not start it.
+ * Abort after a block started → no artificial rollback.
+ * TEST-ONLY hook may suspend immediately before throwIfAborted.
+ */
+export type F2EffectBlock =
+  | "postAnalyze"
+  | "chatFirstDecision"
+  | "mw5ChallengeState"
+  | "ckcReasoning"
+  | "createCycle"
+  | "saveProposal"
+  | "pendingDecisionSubject"
+  | "transcript"
+  | "terminalSuccess";
+
+async function cutF2Effect(
+  signal: AbortSignal | undefined,
+  block: F2EffectBlock,
+  before?: (block: F2EffectBlock) => void | Promise<void>,
+): Promise<void> {
+  if (before) await before(block);
+  throwIfAborted(signal);
+}
+
 function normalizeOpaqueProposalId(raw: unknown): string | null {
   if (typeof raw !== "string") return null;
   const trimmed = raw.trim();
@@ -938,7 +969,10 @@ async function f2ConversationalSuccess(input: {
     | "f2_decision";
   reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   reinstructionOfProposalId?: string | null;
+  signal?: AbortSignal;
+  beforeF2Effect?: (block: F2EffectBlock) => void | Promise<void>;
 }): Promise<ProjectAssistantSendResult> {
+  await cutF2Effect(input.signal, "transcript", input.beforeF2Effect);
   await persistCanonicalF2AssistantTurn({
     projectId: input.project.projectId,
     sessionDbPath: input.sessionDbPath,
@@ -946,6 +980,7 @@ async function f2ConversationalSuccess(input: {
     assistantText: input.text,
     cycleInstanceId: input.project.activeCycleInstanceId ?? null,
   });
+  await cutF2Effect(input.signal, "terminalSuccess", input.beforeF2Effect);
   return f2Success(input);
 }

@@ -997,6 +1032,13 @@ export async function orchestrateAssistantSend(input: {
   usdAccounting?: NoraAgentsUsdAccounting;
   /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
   campaignBudget?: NoraCampaignBudget;
+  /** Request-scoped AbortSignal from cancellable Product transport. */
+  signal?: AbortSignal;
+  /**
+   * TEST-ONLY — suspend immediately before an F2 effect cut-line.
+   * Never Product truth; never a client DTO field.
+   */
+  beforeF2Effect?: (block: F2EffectBlock) => void | Promise<void>;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   const reinstructionOfProposalId = normalizeOpaqueProposalId(
@@ -1060,6 +1102,18 @@ export async function orchestrateAssistantSend(input: {
     };
   }

+  const completeF2Turn = (
+    args: Omit<
+      Parameters<typeof f2ConversationalSuccess>[0],
+      "signal" | "beforeF2Effect"
+    >,
+  ) =>
+    f2ConversationalSuccess({
+      ...args,
+      signal: input.signal,
+      beforeF2Effect: input.beforeF2Effect,
+    });
+
   let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
   let truthCContextForF1: string | undefined;
   let reservationFocus: ValidatedReservationInteractionContext | null = null;
@@ -1215,6 +1269,7 @@ export async function orchestrateAssistantSend(input: {
               challengeSession.latest.structuralChallengeCount,
           }
         : { challengePresent: false as const };
+    throwIfAborted(input.signal);
     analysisResult = await analyzeIntent({
       userContent: content,
       projectSummary: cognitive.projectSummary,
@@ -1222,8 +1277,12 @@ export async function orchestrateAssistantSend(input: {
       challengeContext,
       provider: effectiveProvider,
       evalModelReasoningControl: input.evalModelReasoningControl,
+      signal: input.signal,
     });
   } catch (error) {
+    if (isAbortLike(error, input.signal) || error instanceof NoraTurnAbortedError) {
+      return noraTurnStoppedFailure(modeResolution.mode);
+    }
     const message =
       error instanceof Error ? error.message : "Erreur provider inattendue.";
     return {
@@ -1250,7 +1309,9 @@ export async function orchestrateAssistantSend(input: {
     };
   }
   const presentation = modeResolution.presentation;
-  const contradictionAssessment = await deriveProductPathMw3Assessment(
+  try {
+    await cutF2Effect(input.signal, "postAnalyze", input.beforeF2Effect);
+    const contradictionAssessment = await deriveProductPathMw3Assessment(
     analysis,
     project.projectId,
   );
@@ -1275,7 +1336,7 @@ export async function orchestrateAssistantSend(input: {
         workGate.eligible === false &&
         workGate.kind === "ambiguous_subjects"
       ) {
-        return f2ConversationalSuccess({
+        return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: [
@@ -1295,6 +1356,11 @@ export async function orchestrateAssistantSend(input: {
       }

       if (workGate.eligible === true) {
+        await cutF2Effect(
+          input.signal,
+          "chatFirstDecision",
+          input.beforeF2Effect,
+        );
         const resolved = await resolveChatFirstPilotDecision({
           oa: oaForChatFirst,
           projectId: project.projectId,
@@ -1317,7 +1383,7 @@ export async function orchestrateAssistantSend(input: {
             readyForNextGatedStep: resolved.readyForNextGatedStep,
             executionPerformed: false,
           };
-          return f2ConversationalSuccess({
+          return await completeF2Turn({
             userText: content,
             sessionDbPath: input.sessionDbPath,
             text: chatFirstDecisionText({
@@ -1339,7 +1405,7 @@ export async function orchestrateAssistantSend(input: {
         }

         if (resolved.kind === "ambiguous_subjects") {
-          return f2ConversationalSuccess({
+          return await completeF2Turn({
             userText: content,
             sessionDbPath: input.sessionDbPath,
             text: [
@@ -1358,7 +1424,7 @@ export async function orchestrateAssistantSend(input: {
         }

         if (resolved.kind === "defer_target_unresolved") {
-          return f2ConversationalSuccess({
+          return await completeF2Turn({
             userText: content,
             sessionDbPath: input.sessionDbPath,
             text: [
@@ -1379,7 +1445,7 @@ export async function orchestrateAssistantSend(input: {
           resolved.kind === "subject_read_failed" ||
           resolved.kind === "decision_refused"
         ) {
-          return f2ConversationalSuccess({
+          return await completeF2Turn({
             userText: content,
             sessionDbPath: input.sessionDbPath,
             text: [
@@ -1399,7 +1465,7 @@ export async function orchestrateAssistantSend(input: {
         }
         // no_eligible_subject / no_decision → fall through
       } else if (candidateDisposition === "defer") {
-        return f2ConversationalSuccess({
+        return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: [
@@ -1485,6 +1551,7 @@ export async function orchestrateAssistantSend(input: {
     // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
     // (studio supersedes in prompt builder).
     const methodContext = studioCognitiveContext.method;
+    throwIfAborted(input.signal);
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: effectiveProvider,
@@ -1570,7 +1637,7 @@ export async function orchestrateAssistantSend(input: {
   const formalizationSignals = analysis.signals;
   if (!cycleTypeId || !formalizationSignals) {
     // Defensive: readiness predicate already requires these; never invent defaults.
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text:
@@ -1587,7 +1654,7 @@ export async function orchestrateAssistantSend(input: {
   const runtime = getRuntimeApplicationService();
   const oa = runtime.oa;
   if (!oa) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text:
@@ -1617,7 +1684,7 @@ export async function orchestrateAssistantSend(input: {
       continuation.activeCycle?.cycleInstanceId ??
       project.activeCycleInstanceId ??
       null;
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: [
@@ -1684,7 +1751,7 @@ export async function orchestrateAssistantSend(input: {
                       : "Le dépôt cible n'est pas encore projeté — configuration serveur requise, ou Project legacy sans binding.",
                   "Votre décision et la préparation de l'action restent fermées tant que la cible n'est pas clarifiée.",
                 ];
-      return f2ConversationalSuccess({
+      return await completeF2Turn({
         userText: content,
         sessionDbPath: input.sessionDbPath,
         text: [
@@ -1714,7 +1781,13 @@ export async function orchestrateAssistantSend(input: {
       !signals?.irreversible &&
       !Boolean(analysis.contradictionCandidate?.conflictPresent);

-    const mw5 = await evaluateF2Mw5({
+    const mw5 = await (async () => {
+      await cutF2Effect(
+        input.signal,
+        "mw5ChallengeState",
+        input.beforeF2Effect,
+      );
+      return evaluateF2Mw5({
       content,
       history: input.history,
       analysis,
@@ -1725,8 +1798,9 @@ export async function orchestrateAssistantSend(input: {
       oa,
       structurallyResolvedActiveCycleContinuation,
     });
+    })();
     if (!mw5.surface.recommendationAllowed) {
-      return f2ConversationalSuccess({
+      return await completeF2Turn({
         userText: content,
         sessionDbPath: input.sessionDbPath,
         text: mw5.text,
@@ -1753,7 +1827,7 @@ export async function orchestrateAssistantSend(input: {
     });
     if (!reinstructionGate.ok) {
       if (isChatFirstDisposableGateCode(reinstructionGate.code)) {
-        return f2ConversationalSuccess({
+        return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: pendingDispositionClarificationText({
@@ -1780,6 +1854,7 @@ export async function orchestrateAssistantSend(input: {
       };
     }

+    await cutF2Effect(input.signal, "saveProposal", input.beforeF2Effect);
     const proposal = saveProposal(
       buildProposal({
         intent: analysis,
@@ -1795,6 +1870,11 @@ export async function orchestrateAssistantSend(input: {

     // CORR-PROOF-10/11 — durable pending subject marker (write or explicit supersession).
     {
+      await cutF2Effect(
+        input.signal,
+        "pendingDecisionSubject",
+        input.beforeF2Effect,
+      );
       const marker = await commitPendingDecisionSubjectForDecisionRequired({
         oa,
         projectId: project.projectId,
@@ -1820,7 +1900,7 @@ export async function orchestrateAssistantSend(input: {
       "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
     ];

-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: textParts.join(" "),
@@ -1856,7 +1936,7 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!qualified.ok) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
@@ -1895,6 +1975,11 @@ export async function orchestrateAssistantSend(input: {
     });
     let ckcCognitiveRecommendation: string | undefined;
     if (ckcContent) {
+      await cutF2Effect(
+        input.signal,
+        "ckcReasoning",
+        input.beforeF2Effect,
+      );
       const reasoning = await reasonWithResolvedCkcContext({
         userContent: content,
         projectSummary,
@@ -1924,7 +2009,7 @@ export async function orchestrateAssistantSend(input: {
     qualification.requiresJustificationForCritical &&
     !(analysis.criticalJustification && analysis.criticalJustification.trim())
   ) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text:
@@ -1940,6 +2025,11 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  await cutF2Effect(
+    input.signal,
+    "mw5ChallengeState",
+    input.beforeF2Effect,
+  );
   const mw5 = await evaluateF2Mw5({
     content,
     history: input.history,
@@ -1951,7 +2041,7 @@ export async function orchestrateAssistantSend(input: {
     oa,
   });
   if (!mw5.surface.recommendationAllowed) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: mw5.text,
@@ -1969,6 +2059,7 @@ export async function orchestrateAssistantSend(input: {
   }

   const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
+  await cutF2Effect(input.signal, "createCycle", input.beforeF2Effect);
   const created = await oa.cycleServices.createCycle.execute({
     cycleInstanceId,
     cycleTypeId: qualification.cycleTypeId,
@@ -1990,7 +2081,7 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!created.ok) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
@@ -2008,7 +2099,7 @@ export async function orchestrateAssistantSend(input: {
   // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
   const live = await readLiveProjectContext(oa, project.projectId);
   if (!live.ok) {
-    return f2ConversationalSuccess({
+    return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
       text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
@@ -2068,7 +2159,7 @@ export async function orchestrateAssistantSend(input: {
     });
     if (!reinstructionGate.ok) {
       if (isChatFirstDisposableGateCode(reinstructionGate.code)) {
-        return f2ConversationalSuccess({
+        return await completeF2Turn({
           userText: content,
           sessionDbPath: input.sessionDbPath,
           text: pendingDispositionClarificationText({
@@ -2097,6 +2188,7 @@ export async function orchestrateAssistantSend(input: {
     newCycleReinstructionOf = reinstructionGate.reinstructionOfProposalId;
   }

+  await cutF2Effect(input.signal, "saveProposal", input.beforeF2Effect);
   const proposal = saveProposal(
     buildProposal({
       intent: analysis,
@@ -2109,6 +2201,11 @@ export async function orchestrateAssistantSend(input: {
   );

   if (status === "DECISION_REQUIRED") {
+    await cutF2Effect(
+      input.signal,
+      "pendingDecisionSubject",
+      input.beforeF2Effect,
+    );
     const marker = await commitPendingDecisionSubjectForDecisionRequired({
       oa,
       projectId: project.projectId,
@@ -2148,7 +2245,7 @@ export async function orchestrateAssistantSend(input: {
     "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
   ];

-  return f2ConversationalSuccess({
+  return await completeF2Turn({
     userText: content,
     sessionDbPath: input.sessionDbPath,
     text: textParts.join(" "),
@@ -2164,4 +2261,10 @@ export async function orchestrateAssistantSend(input: {
     reinstructionOfProposalId,
     reinstructionTransition: newCycleReinstructionOf ? "superseded" : undefined,
   });
+  } catch (error) {
+    if (isAbortLike(error, input.signal) || error instanceof NoraTurnAbortedError) {
+      return noraTurnStoppedFailure(modeResolution.mode);
+    }
+    throw error;
+  }
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index e6c6da26..eb300ce1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -10,6 +10,7 @@ import {
   type ConversationProvider,
   type ProviderChatMessage,
 } from "@/lib/platform/ai";
+import { throwIfAborted } from "@/lib/nora-cognitive-runtime/noraTurnAbort";
 import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
 import type { NoraEvalModelReasoningControl } from "@/lib/nora-cognitive-runtime";
 import { ADOPTED_CYCLE_TYPE_IDS, isKnownCycleTypeId } from "@/lib/oa/cycle";
@@ -791,6 +792,8 @@ export async function analyzeIntent(input: {
    * (USD preflight → claim → dispatch), not here.
    */
   evalModelReasoningControl?: NoraEvalModelReasoningControl;
+  /** Request-scoped AbortSignal from canonical send. */
+  signal?: AbortSignal;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
@@ -846,11 +849,14 @@ export async function analyzeIntent(input: {
     );
   }

+  throwIfAborted(input.signal);
   const completion = await provider.completeStructured({
     messages,
     schemaName: F2_INTENT_SCHEMA_NAME,
     jsonSchema: F2_INTENT_JSON_SCHEMA,
+    signal: input.signal,
   });
+  throwIfAborted(input.signal);
   const parsed = extractJsonObject(completion.text);
   const analysis = validateIntentAnalysisPayload(parsed);


diff --git a/projects/sfia-studio/app/lib/platform/ai/types.ts b/projects/sfia-studio/app/lib/platform/ai/types.ts
index 6a8811d2..af56a432 100644
--- a/projects/sfia-studio/app/lib/platform/ai/types.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/types.ts
@@ -70,6 +70,8 @@ export interface ConversationProvider {
     messages: ProviderChatMessage[];
     schemaName: string;
     jsonSchema: Record<string, unknown>;
+    /** Request-scoped AbortSignal. Optional; omit on non-cancellable callers. */
+    signal?: AbortSignal;
   }): Promise<ProviderCompletionResult>;
 }


diff --git a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
index 13ffc70e..5262cd7a 100644
--- a/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
@@ -11,6 +11,15 @@ import type {
   ProviderToolCall,
 } from "./types";

+function isOpenAiAbortError(error: unknown, signal?: AbortSignal): boolean {
+  if (signal?.aborted) return true;
+  if (error instanceof OpenAI.APIUserAbortError) return true;
+  if (error instanceof Error) {
+    return error.name === "AbortError" || error.name === "APIUserAbortError";
+  }
+  return false;
+}
+
 /**
  * OpenAI Responses adapter — server-only.
  * Domain/UI must not import this module from client components.
@@ -72,9 +81,10 @@ export class OpenAIConversationProvider implements ConversationProvider {
     messages: ProviderChatMessage[];
     schemaName: string;
     jsonSchema: Record<string, unknown>;
+    signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
     try {
-      const response = await this.client.responses.create({
+      const body = {
         model: this.model,
         ...this.reasoningParam(),
         input: input.messages.map((m) => ({
@@ -83,13 +93,16 @@ export class OpenAIConversationProvider implements ConversationProvider {
         })) as OpenAI.Responses.ResponseInput,
         text: {
           format: {
-            type: "json_schema",
+            type: "json_schema" as const,
             name: input.schemaName,
             schema: input.jsonSchema,
             strict: true,
           },
         },
-      });
+      };
+      const response = input.signal
+        ? await this.client.responses.create(body, { signal: input.signal })
+        : await this.client.responses.create(body);

       const usage = response.usage;
       const inputTokens = usage?.input_tokens ?? null;
@@ -118,6 +131,7 @@ export class OpenAIConversationProvider implements ConversationProvider {
       };
     } catch (error) {
       if (error instanceof TechnicalError) throw error;
+      if (isOpenAiAbortError(error, input.signal)) throw error;
       throw new TechnicalError(
         "PROVIDER",
         "Échec de l’appel fournisseur GPT. Réessayez manuellement.",

diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index ecf475fa..14bef383 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -432,9 +432,15 @@ export class FakeConversationProvider implements ConversationProvider {
     messages: ProviderChatMessage[];
     schemaName: string;
     jsonSchema: Record<string, unknown>;
+    signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
     void input.schemaName;
     void input.jsonSchema;
+    if (input.signal?.aborted) {
+      const error = new Error("AbortError");
+      error.name = "AbortError";
+      throw error;
+    }
     // Reuse F2 marker / analysis scripted JSON from complete().
     return this.complete(input.messages);
   }

diff --git a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
index 04d95485..7de11a4a 100644
--- a/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
@@ -133,12 +133,18 @@ export class MeteredConversationProvider implements ConversationProvider {
     messages: ProviderChatMessage[];
     schemaName: string;
     jsonSchema: Record<string, unknown>;
+    signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
     if (typeof this.inner.completeStructured !== "function") {
       throw new Error("completeStructured not available on wrapped provider");
     }
     this.preflight();
     await this.afterPreflightBeforeDispatch();
+    if (input.signal?.aborted) {
+      const error = new Error("AbortError");
+      error.name = "AbortError";
+      throw error;
+    }
     const result = await this.inner.completeStructured(input);
     this.record("completeStructured", result.usage);
     return result;

diff --git a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
index 4786a8a9..23873b58 100644
--- a/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
+++ b/projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
@@ -113,4 +113,53 @@ describe("OpenAIConversationProvider mapping", () => {
     ]);
     expect(payload.tools).toBeUndefined();
   });
+
+  it("completeStructured forwards AbortSignal as SDK RequestOptions.signal", async () => {
+    createMock.mockResolvedValue({
+      id: "resp_abort",
+      model: "gpt-test",
+      output_text: '{"intentClass":"informative"}',
+      usage: { input_tokens: 1, output_tokens: 1, total_tokens: 2 },
+    });
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/platform/ai/openaiProvider"
+    );
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    const controller = new AbortController();
+    await provider.completeStructured({
+      messages: [{ role: "user", content: "ask" }],
+      schemaName: "f2_intent_analysis",
+      jsonSchema: { type: "object", additionalProperties: false, properties: {}, required: [] },
+      signal: controller.signal,
+    });
+    expect(createMock).toHaveBeenCalledTimes(1);
+    expect(createMock.mock.calls[0][1]).toEqual({ signal: controller.signal });
+    expect(createMock.mock.calls[0][1].signal).toBe(controller.signal);
+  });
+
+  it("completeStructured rethrows abort errors instead of TechnicalError", async () => {
+    const abort = new Error("Request was aborted.");
+    abort.name = "APIUserAbortError";
+    createMock.mockRejectedValue(abort);
+    const { OpenAIConversationProvider } = await import(
+      "@/lib/platform/ai/openaiProvider"
+    );
+    const { TechnicalError } = await import("@/lib/platform/ai/errors");
+    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
+    const controller = new AbortController();
+    controller.abort();
+    await expect(
+      provider.completeStructured({
+        messages: [{ role: "user", content: "ask" }],
+        schemaName: "f2_intent_analysis",
+        jsonSchema: { type: "object", additionalProperties: false, properties: {}, required: [] },
+        signal: controller.signal,
+      }),
+    ).rejects.toSatisfy(
+      (error: unknown) =>
+        error instanceof Error &&
+        error.name !== "TechnicalError" &&
+        !(error instanceof TechnicalError),
+    );
+  });
 });

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dc721daf..84e39f83 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -578,19 +578,19 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "8839aac183e38265"
+      "sha256_16": "40476bb2a7b35f9c"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "28b6b3d32b754cec"
+      "sha256_16": "cba03a9222f5b6a6"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "8c5c218b44267b5b"
+      "sha256_16": "66fc6947572fca3f"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
-      "sha256_16": "94d908d10eb822f2"
+      "sha256_16": "aeb3359752700910"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "b1d586c1784f8c75"
+      "sha256_16": "b4aaef8d204e35c7"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
@@ -666,7 +666,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "d8db5a73ecb35722"
+      "sha256_16": "5cdf31daac6a480f"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
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

## 36. Tests map

| proof | test |
| --- | --- |
| T01 in-flight F2 structured | p5.s06.cp02.2 T01 |
| wrapper signal identity | wrapper does not drop |
| OpenAI RequestOptions.signal | openai-provider.test.ts |
| abort after analyze | T postAnalyze |
| createCycle=0 | T03 |
| saveProposal=0 / already-started cycle | T04 |
| transcript=0 | T06/T08 |
| transcript kept + STOPPED | T07/T08 |
| next turn | T09 |
| F1 CP02/CP02.1 | existing tests PASS |
| F2 routing AC | f2.orchestrate.test.ts PASS |

## 37. Targeted tests

CP02.2 + OpenAI + CP02 + CP02.1 + F2 orchestrate + platform-ai + UI/hook cancellation: **48 PASS** (targeted batch). Isolated liveManagedRepoComposition 8 PASS after load-flake.

## 38. Full test results

Test Files **480 passed** | 19 skipped
Tests **5307 passed** | 139 skipped | **0 failed**
(First full run under concurrent build: 1 timeout CASE EXIT liveManagedRepo — isolation PASS; second full run clean.)

## 39. typecheck / lint / build

typecheck PASS. lint PASS. build PASS (pre-existing better-sqlite3 warning).

## 40. ZERO REAL

YES. No live OpenAI. Fake + mocked SDK client.

## 41. Fake/Real

Entry: F1 deterministic proven, F2 incomplete (CP02.1).
Expected/achieved: **DETERMINISTIC FULL CANONICAL SEND CANCELLATION PROVEN**.
NOT REAL BOUNDARY / NOT READY FOR REAL.

## 42. Architecture parallelism

One canonical send. One Nora orchestration. One AbortSignal. No registry/store/queue/streaming.

## 43. UI/Visual FREEZE

No UI/CSS files in CP02.2 delta. CP02 six captures remain S06 visual evidence. No Figma.

## 44. PRR

`--write-digests` after content review of tracked orchestrateF2 / intentAnalysis / fakeProvider (and related tracked hashes that drifted with S06 candidate). Semantic review: abort cut-lines only.

## 45. Docs truth-sync COMPLETE DIFF

### Roadmap (complete useful diff vs origin/main)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 3b89bbcf..27afcb79 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,12 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.2 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.2** · Morris CP02.2 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02.1 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · F2 `completeStructured` AbortSignal **PROVEN** · F2 post-analyze / createCycle / proposal / transcript cut-lines **PROVEN** · already-started createCycle **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review CP02.2** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.1 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.1 — LOCAL CANDIDATE / FINAL EXIT PROOF PASS *(true then; superseded by P5-S06 CP02.2 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.1** · Morris CP02.1 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · post-model cut-lines **throwIfAborted** before ACW / Reservation / LR / readCoverage / transcriptJournal / terminalSuccess · Request.signal identity **PROVEN** · abort post-model pre-transcript **STOPPED / no new assistant row** · already-started transcript **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next was **ChatGPT Final Critical Re-Review CP02.1** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CORRECTION PASS 02 — LOCAL CANDIDATE / FUNCTIONAL CLOSURE PASS *(true then; superseded by P5-S06 CP02.1 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02** · Morris **D-S06-CANCEL-01 ADOPTED / CONSUMED** · prior Delivery+CP01 CONSUMED · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · C2 STOP **DETERMINISTIC bounded AbortSignal / same Runner / same sendProjectAssistantTurn / thin HTTP transport** · Activity honesty **SOURCE_LOOKUP not live** · New Project mobile **title→Nora→composer** · Projects/Auth **frozen** · Visual **PASS AT S06 SCOPE** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next was **ChatGPT Final Critical Review CP02** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — P5-S06 CORRECTION PASS 01 LOCAL CANDIDATE / STOP ARCHITECTURE DELTA ON NORA STOP *(true then; superseded by P5-S06 CP02 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP01** · Morris P5-S06 CP01 GATE = **AUTHORIZED / CONSUMED** · prior S06 DELIVERY CONSUMED · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · A New Project **explicit phases / no regex NLP** · continuity **Project+LPS rebound via workspace projectId** · B Projects **récents ≠ À reprendre** · Orientation **honest new-project only** · C Activity **mapping proven** · STOP **ABSENT / no fake STOPPED** · D visual **structure improved / not Visual PASS** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next was **ChatGPT Critical Re-Review CP01** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — LOCAL CANDIDATE *(true then; superseded by P5-S06 CP01 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Standard** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 DELIVERY GATE = **AUTHORIZED / CONSUMED** (2026-10-06) · slicing P5 restant **S06/S07/S08** = **ADOPTED** · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · P5-S05 = **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment = **CLOSED ON MAIN** · R3 = **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** · Axes S06 : A Projects **ADAPT** · B Nouveau projet chat-first **ADAPT** (ephemeral client · createProjectRuntimeAction · D1 NOT nominal) · C Nora Activity **PARTIAL** (labels honnêtes · **STOP/■ absent** — no fake STOPPED) · D Auth GitHub visual **ADAPT** (backend KEEP) · E responsive/a11y touched surfaces · ZERO REAL · full npm test **5278 PASS / 139 skipped** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Review de S06** → gate Morris distinct si PASS · S07 = **NOT STARTED** · **≠** INTEGRATED · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 INTEGRATED via PR #560 then by P5-S06 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 01 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP02 tip after residual B1 F1 model semantics + B2 R3-19 observation)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP01** · Morris P5-S05 CP01 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 gate remains **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · A1 CKC = **N_A** · A2 accounting = **BOUNDED** · A3 effort = **SELECTED→DISPATCH CONFIG PROVEN** · campaign `p5-s05-r3-cp01-1791245552722` · productFP `35f31263…` · harnessFP `fd10646b…` · Critical Review residual = **CORRECTION REQUIRED** (B1 F1 usage.model ≠ provider-returned; B2 R3-19 stale observation) · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 R3 + F2 ROUTING ALIGNMENT — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP01 tip after Critical Review A1/A2/A3 correction)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Morris P5-S05 DELIVERY + REAL/R3 GATE = **AUTHORIZED / CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** (PR **#559** POST-S04 TRUTH-SYNC merge · CI **#686** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · F2 routing alignment = **EXIT PROOF PASS — LOCAL CANDIDATE** · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE** · campaign `p5-s05-r3-1791242959473` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` · F2 `gpt-6-luna/low` → actual match · F1 `gpt-6-luna/high` → actual match · journal tools `cycle_journal_search` + `get_entry` + `get_sources` · HD=0 · R1/R2 PASS historical · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED** · Critical Review = **CORRECTION REQUIRED** (A1/A2/A3) · **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC *(true then; superseded by P5-S05 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |

```

### P5 Integrated Delivery (complete useful diff vs origin/main)

```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 5f23603b..8304b1fa 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,40 +5,49 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S04** (integrated) + **P5-S05** (local candidate) |
-| **Pass** | **P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** |
+| **Slice** | **P5-S01**…**P5-S05** (integrated) + **P5-S06** (local candidate) |
+| **Pass** | **P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `79a0e48a69c8dd634a8cecf972199bea8a4daeec` (PR **#559** POST-S04 TRUTH-SYNC · CI **#686** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S05** | `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` (local · **NOT committed**) |
+| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` (local · **NOT committed**) |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
+| **P5 COMPLETE** | **NO** |
+| **P6 READY** | **NO** |
 | **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
 | **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
-| **P5-S05** | **LOCAL CANDIDATE PASS AFTER CP02** — F2 routing EXIT PROOF · R3 PASS AT TESTED SCOPE |
-| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE — LOCAL CANDIDATE (CP02)** |
-| **ZERO REAL** | **NO for S05 R3** (bounded REAL OpenAI) · S04 ZERO REAL preserved historically |
-| **READY FOR REAL** | **R3 CP02 executed under Morris S05 + CP01 + CP02 gates** |
+| **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
+| **P5-S06** | **CP02.2 LOCAL CANDIDATE — FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS** · FUNCTIONAL CLOSURE **PASS LOCALLY** · C2 STOP **DETERMINISTIC + F1 cut-lines + F2 provider/effects** · **≠ INTEGRATED** · **≠ COMPLETE until Git** |
+| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** |
+| **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
+| **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
+| **P5-S06 CP02.1** | **AUTHORIZED / CONSUMED** |
+| **P5-S06 CP02.2** | **AUTHORIZED / CONSUMED** |
+| **P5 slicing restant** | **S06 / S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** |
+| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
+| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S05)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
-| **Next** | **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS |
-| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP01** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP02** | **AUTHORIZED / CONSUMED** |
+| **Git (S06)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
+| **Next** | **ChatGPT Final Critical Re-Review of P5-S06 CP02.2** · Git integration **NOT AUTHORIZED** · S07 **NOT STARTED** |
+| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
+| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
+| **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
+| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S04 **intégrés**. P5-S05 CP02 = **LOCAL CANDIDATE PASS** (B1 F1 selected→dispatch · B2 R3-19 scan observation · CKC N_A · accounting borné). **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S05 **intégrés**. P5-S06 CP02.2 = **LOCAL CANDIDATE — FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS** (transport + F2 structured provider + F2 cut-lines + F1 Runner + F1 post-model). **≠ INTEGRATED** · **≠ P5 COMPLETE** · Git **NOT AUTHORIZED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -972,4 +981,123 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01/S02/S03/S04 INTEGRATED / POST-MERGE VERIFIED · S05 CP02 LOCAL CANDIDATE PASS · R3 PASS AT TESTED SCOPE LOCAL · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+---
+
+## 39. P5-S06 — Pilot Experience Completion — LOCAL CANDIDATE (truth-sync)
+
+> **Qualification.** Enregistrement factuel de la Delivery locale P5-S06 sous GO Morris DELIVERY consommé le 2026-10-06. **≠ INTEGRATED** · **≠ P5 COMPLETE** · project Git **NOT AUTHORIZED**.
+
+### 39.1 Git / gates
+
+| Item | Valeur |
+| --- | --- |
+| Base / HEAD | `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` = `origin/main` |
+| Branche | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` |
+| P5-S05 | **INTEGRATED / POST-MERGE VERIFIED** — PR **#560** · CI Studio **#688** SUCCESS |
+| F2 routing | **CLOSED ON MAIN** |
+| R3 | **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
+| Morris S06 DELIVERY | **CONSUMED** |
+| Slicing restant | **S06 / S07 / S08** ADOPTED · S07/S08 **NOT STARTED** |
+| ZERO REAL (S06) | **YES** |
+| runtime v3 | **NON ADOPTED** |
+| P5 COMPLETE / P6 READY | **NO** / **NO** |
+
+### 39.2 Axes livrés (honnêteté)
+
+| Axe | Statut | Notes |
+| --- | --- | --- |
+| A Projects | **ADAPT** | Recherche locale · À reprendre depuis `updatedAt` ≤14j · Orientation → `/studio/projects/new` · empty state · pas d’attention inventée |
+| B Nouveau projet | **ADAPT** | Conversation pré-Project éphémère client · `createProjectRuntimeAction` au CTA · D1 Intake **NOT** nominal · pas de store / pas d’auto-Cycle |
+| C Nora Activity / STOP | **PARTIAL** | Phases START/ACTIVITY/COMPLETE projetées depuis `uiState` réel · **■ STOP absent** (pas de seam Abort Product) — **pas de faux STOPPED** |
+| D Auth GitHub visual | **ADAPT** | Split narrative+card · « Continuer avec GitHub » · mark SVG · backend Better/Auth **KEEP** |
+| E Responsive / a11y | **ADAPT** (surfaces touchées) | Labels · focus · targets · reduced-motion conservé côté conversation |
+
+### 39.3 Preuves
+
+| Porte | Résultat |
+| --- | --- |
+| `p5.s06.pilotExperience.d0.test.tsx` | **6 PASS** |
+| Auth unit tests ciblés | **PASS** |
+| typecheck / lint / build | **PASS** |
+| full `npm test` | **5278 PASS / 139 skipped** |
+| Visual runtime | Auth + Projects `/studio` + New Project capturés sous `.tmp-sfia-review/p5-s06-visual/runtime/` vs Figma refs sous `…/figma/` — **pas de claim Visual PASS global** |
+
+### 39.4 Réserves
+
+| Classe | Réserve |
+| --- | --- |
+| **BLOCKING** (avant S06 COMPLETE) | P3 STOP/■ non satisfait sans architecture cancellation — décision Morris : accepter PARTIAL ou autoriser delta |
+| **NON-BLOCKING** | Écarts Class B Projects/New Project vs frames Figma EXPLORATORY (table Attention, quick-replies, layout 3-col) · STREAMING non projeté (non observable) · D1 HARVEST only |
+
+### 39.5 Next
+
+**ChatGPT Review de S06** → gate Morris distinct. **S07** reste **NOT STARTED**.
+
+---
+
+## 40. P5-S06 CP01 — Correction Pass 01 (truth-sync)
+
+> **Qualification.** Delivery S06 Critical Review = CORRECTION REQUIRED. CP01 = local candidate after semantic/visual correction. STOP Nora remains architecture-blocked. **≠ S06 COMPLETE** · **≠ INTEGRATED**.
+
+| Axe | Statut CP01 |
+| --- | --- |
+| A New Project | **PASS** — explicit phases INTENTION/NAME/OPTIONAL_CONTEXT · no NAME_HINT · factual preview · CTA unique |
+| A2 Continuity | **PASS min-sufficient** — createProjectRuntimeAction writes Project+LPS · router `/studio/projects/:id` · workspace `getProject` + `useProductConversation(projectId)` · no transcript store |
+| B Projects | **PASS** — « Projets récents » from updatedAt · no « À reprendre » as next-action · local search KEEP |
+| B2 Orientation | **PASS** — wording = start new project only · href `/studio/projects/new` |
+| C Activity | **PASS proven** — `projectNoraActivity` mapping + tests |
+| C2 STOP | **BLOCKED** — no Product conversation Abort seam · no fake ■/STOPPED |
+| D Visual | **PARTIEL** — structure closer to 63:39 / 67:39 / 130:3 / mobile 190:* · composer mobile first · no Attention invented · **≠ Visual PASS** |
+
+---
+
+## 41. P5-S06 CP02 — Nora Cancellation Closure (truth-sync)
+
+> **Qualification.** Morris D-S06-CANCEL-01 consumed. Bounded request-scoped AbortSignal through same `sendProjectAssistantTurn` → `orchestrateAssistantSend` → `runNoraAgentsTurn` → `Runner.run({ signal })`. Thin POST `/api/studio/projects/[projectId]/assistant/send`. **≠ INTEGRATED**. **≠ REAL cancellation proven**.
+
+| Axe | Statut CP02 |
+| --- | --- |
+| A / A2 / B | **PASS** (CP01 preserved) |
+| C Activity | **PASS** — SOURCE_LOOKUP no longer projected as live « consulte les sources » |
+| C2 STOP | **PASS DETERMINISTIC / BOUNDED CANCELLATION PROVEN** — ■ only when in-flight · native AbortSignal · STOPPED ≠ Error/Cognitive STOP/Execution STOP · no late success after abort in tested path |
+| D Visual | **PASS AT S06 SCOPE** — Projects/Auth freeze · New Project mobile order title→Nora→composer→preview · six recaptures |
+| P5-S06-DEBT-NORA-STOP | **CLOSED LOCALLY / awaiting Git Integration** |
+
+---
+
+## 42. P5-S06 CP02.1 — Cancellation cut-lines & exit proof (truth-sync)
+
+> **Qualification.** Morris CP02.1 GO consumed. Architecture D-S06-CANCEL-01 unchanged. Added forward `throwIfAborted` cut-lines after cognitive result and before independent durable blocks. **≠ INTEGRATED**. **≠ REAL cancellation proven**.
+
+| Item | Statut CP02.1 |
+| --- | --- |
+| Request.signal → sendProjectAssistantTurn | **PROVEN** (`options.signal === request.signal`; abort of initiator aborts forwarded signal) |
+| Post-model abort before transcript/journal | **PROVEN** — STOPPED · no new assistant transcript row |
+| Already-started transcript | **NOT ROLLED BACK** · terminal abort still STOPPED not ok |
+| ACW / Reservation / LR / readCoverage cut-lines | **CODE PRESENT** immediately before each materialize/persist helper |
+| UI / Projects / Auth / New Project | **FROZEN** |
+| Runner / providerAgentsModel | **FROZEN** |
+
+---
+
+## 43. P5-S06 CP02.2 — F2 cancellation closure (truth-sync)
+
+> **Qualification.** Morris CP02.2 GO consumed. Architecture D-S06-CANCEL-01 unchanged. Same request-scoped AbortSignal now reaches F2 `analyzeIntent` / `completeStructured` and F2 effect cut-lines. **≠ INTEGRATED**. **≠ REAL cancellation proven**.
+
+| Item | Statut CP02.2 |
+| --- | --- |
+| F2 `completeStructured` signal | **PROVEN** — test provider observes `input.signal`; abort in-flight → STOPPED not provider_error |
+| OpenAI adapter | **SDK RequestOptions.signal** (`openai` ^6.48.0 `responses.create(body, { signal })`) — ZERO REAL mock |
+| Wrapper forwarding | **PROVEN** — decorator passes same AbortSignal object |
+| Abort after analyze / before createCycle | **PROVEN** — `createCycle.execute` = 0 |
+| Abort before saveProposal | **PROVEN** — proposal absent; createCycle already started **kept** (no rollback) |
+| Abort before F2 transcript | **PROVEN** — 0 assistant rows · not ok:true |
+| Abort after F2 transcript | **PROVEN** — rows kept · terminal STOPPED |
+| Next turn after STOP | **PROVEN** |
+| HumanDecision write path | **CUT-LINE PRESENT** before `resolveChatFirstPilotDecision` — dedicated HD fixture not required this pass (eligible workGate) |
+| CKC `complete()` second call | **CUT-LINE BEFORE** `reasonWithResolvedCkcContext` — in-flight SDK abort not extended to `complete()` |
+| UI / F1 Runner / transport | **FROZEN** |
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S05 INTEGRATED · S06 CP02.2 LOCAL CANDIDATE FULL CANONICAL SEND CANCELLATION EXIT PROOF · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*

```

## 46. Debt / exit

P5-S06-DEBT-NORA-STOP = CLOSED LOCALLY — FULL CANONICAL SEND deterministic proof / awaiting Git Integration.

## 47. Reserves (non-blocking)

- HumanDecision write abort: cut-line present; dedicated eligible workGate fixture not added.
- CKC `complete()` in-flight: pre-call cut-line only (complete() contract not expanded).
- Continuation-path saveProposal/pending covered by same cut-line names; new-cycle fixture used for proofs.
- load-flake liveManagedRepo CASE EXIT under concurrent Next build — not a CP02.2 product defect.

## 48. Morris decisions required

ChatGPT Final Critical Re-Review. Distinct GO for Git Integration — not consumed.

## 49. Project Git effects

NO add/commit/push/PR/merge.

## 50. Review Handoff

See publisher output after this pack. Input eeed4811.

## 51. Unique readiness

READY FOR CHATGPT FINAL CRITICAL RE-REVIEW — P5-S06 CP02.2 LOCAL CANDIDATE

## 52. Verdict

READY FOR CHATGPT FINAL CRITICAL RE-REVIEW — P5-S06 CP02.2 LOCAL CANDIDATE
P5-S06 INTEGRATED = NO. Git Integration = NOT AUTHORIZED. P5 COMPLETE = NO.

---

## Appendix — git name-status / stat vs origin/main (whole S06 candidate)

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/ops1/openai-provider.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
M	projects/sfia-studio/app/app/login/login-client.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-eval/meteredProvider.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/app/lib/platform/ai/openaiProvider.ts
M	projects/sfia-studio/app/lib/platform/ai/types.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

```
 .tmp-sfia-review/chatgpt-review.md                 | 1015 +++++++++++++++++---
 .../app/__tests__/ops1/openai-provider.test.ts     |   49 +
 .../runningAttemptRefresh.ui.test.tsx              |    7 +
 .../sfia-studio/app/app/login/login-client.tsx     |  161 ++--
 .../NewProjectIntentionPage.module.css             |  311 ++++--
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  |  481 +++++-----
 .../pre-m6-product-ui/ProjectsPage.module.css      |  368 +++++--
 .../features/pre-m6-product-ui/ProjectsPage.tsx    |  283 ++++--
 .../hooks/useProductConversation.ts                |  110 ++-
 .../surfaces/ConversationSurface.module.css        |   49 +
 .../surfaces/ConversationSurface.tsx               |   69 +-
 .../app/features/project-assistant/actions.ts      |  109 +--
 .../project-assistant/f2/intentAnalysis.ts         |    6 +
 .../features/project-assistant/f2/orchestrateF2.ts |  147 ++-
 .../features/project-assistant/orchestrateTurn.ts  |   77 +-
 .../app/features/project-assistant/types.ts        |    1 +
 .../nora-cognitive-runtime/providerAgentsModel.ts  |   26 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   13 +
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |    7 +
 .../app/lib/nora-eval/meteredProvider.ts           |    6 +
 .../app/lib/platform/ai/fakeProvider.ts            |    6 +
 .../app/lib/platform/ai/openaiProvider.ts          |   20 +-
 projects/sfia-studio/app/lib/platform/ai/types.ts  |    2 +
 .../convergence/sfia-studio-convergence-roadmap.md |    7 +-
 ...t-product-simplification-integrated-delivery.md |  160 ++-
 .../production-runtime-reference.manifest.json     |   14 +-
 26 files changed, 2591 insertions(+), 913 deletions(-)

```
