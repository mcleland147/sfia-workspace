/** @vitest-environment node */
/**
 * P5-S06 CP02.3 — CKC provider.complete in-flight AbortSignal.
 * ZERO REAL. Does not re-open F1 / UI / transport / F2 cut-lines.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
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
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  ProductSqliteSession,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  BudgetTracker,
  MeteredConversationProvider,
  buildMw0CapabilityManifest,
} from "@/lib/nora-eval";

class HoldCompleteProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  completeStarted = false;
  seenSignal: AbortSignal | undefined;
  seenAbortedAtReject = false;
  private readonly inner = new FakeConversationProvider();
  constructor(private readonly hold: Promise<void>) {}
  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    this.completeStarted = true;
    this.seenSignal = options?.signal;
    await this.hold;
    this.seenAbortedAtReject = options?.signal?.aborted === true;
    if (options?.signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    return this.inner.complete(messages, options);
  }
  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    return this.inner.completeStructured!(input);
  }
}

class CountingInner implements ConversationProvider {
  readonly providerId = "fake-test";
  completeCalls = 0;
  lastOptions: { signal?: AbortSignal } | undefined;
  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    this.completeCalls += 1;
    this.lastOptions = options;
    return {
      text: `echo:${messages[messages.length - 1]?.content ?? ""}`,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "inner-complete-1",
      },
    };
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

describe("P5-S06 CP02.3 CKC complete cancellation", () => {
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
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cp023-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-10-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet CP023",
      objective: "CKC cancellation.",
      context: "Contexte F2 CP02.3.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "C23",
      idempotencyKey: `idem:cp023-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("CP023 setup create failed");
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

  it("T-CKC-01 — abort IN-FLIGHT during reasonWithResolvedCkcContext complete", async () => {
    let release!: () => void;
    const hold = new Promise<void>((resolve) => {
      release = resolve;
    });
    const provider = new HoldCompleteProvider(hold);
    const controller = new AbortController();
    const pending = orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
      sessionDbPath,
      provider,
      signal: controller.signal,
    });
    await waitFor(() => provider.completeStarted);
    expect(provider.seenSignal).toBe(controller.signal);
    controller.abort();
    expect(provider.seenSignal?.aborted).toBe(true);
    release();
    const result = await pending;
    expect(provider.seenAbortedAtReject).toBe(true);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(result.code).toBe("NORA_TURN_STOPPED");
    expect(result.status === "provider_error" ? true : false).toBe(false);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
    const rows = listTranscript(projectId, sessionDbPath);
    expect(rows.filter((r) => r.role === "assistant")).toHaveLength(0);
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (after.ok) {
      expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
    }
  });

  it("T07 — complete without signal still succeeds", async () => {
    const fake = new FakeConversationProvider();
    const result = await fake.complete([{ role: "user", content: "hello" }]);
    expect(result.text.length).toBeGreaterThan(0);
  });

  it("T08 — completeRound without signal still succeeds", async () => {
    const fake = new FakeConversationProvider();
    const result = await fake.completeRound({
      items: [{ type: "message", role: "user", content: "hello" }],
      tools: [],
    });
    expect(result.kind === "message" ? result.text.length : 1).toBeGreaterThan(
      0,
    );
  });
});

describe("P5-S06 CP02.3 Metered complete signal", () => {
  it("T05 — Metered complete forwards the same AbortSignal", async () => {
    const inner = new CountingInner();
    const manifest = buildMw0CapabilityManifest("2026-10-06T00:00:00.000Z");
    const budget = new BudgetTracker();
    const metered = new MeteredConversationProvider(
      inner,
      manifest,
      budget,
      "gpt-5.6-luna",
    );
    const controller = new AbortController();
    await metered.complete([{ role: "user", content: "ckc" }], {
      signal: controller.signal,
    });
    expect(inner.completeCalls).toBe(1);
    expect(inner.lastOptions?.signal).toBe(controller.signal);
    expect(metered.ledger).toHaveLength(1);
  });

  it("T06 — abort after preflight / before inner: inner complete = 0", async () => {
    const inner = new CountingInner();
    const manifest = buildMw0CapabilityManifest("2026-10-06T00:00:00.000Z");
    const budget = new BudgetTracker();
    const controller = new AbortController();
    const metered = new MeteredConversationProvider(
      inner,
      manifest,
      budget,
      "gpt-5.6-luna",
      undefined,
      {
        beforeAuthorizedDispatch: () => {
          controller.abort();
        },
      },
    );
    await expect(
      metered.complete([{ role: "user", content: "ckc" }], {
        signal: controller.signal,
      }),
    ).rejects.toMatchObject({ name: "AbortError" });
    expect(inner.completeCalls).toBe(0);
    expect(metered.ledger).toHaveLength(0);
  });
});
