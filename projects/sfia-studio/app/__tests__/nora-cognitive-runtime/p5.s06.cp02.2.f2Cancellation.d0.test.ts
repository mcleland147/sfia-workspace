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
