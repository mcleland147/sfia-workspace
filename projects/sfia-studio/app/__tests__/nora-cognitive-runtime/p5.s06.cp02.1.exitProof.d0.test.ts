/** @vitest-environment node */
/**
 * P5-S06 CP02.1 — post-model cut-lines + Request.signal identity.
 * ZERO REAL. Does not re-open Runner wiring.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import {
  ProductSqliteSession,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "@/features/project-assistant/f2/canonicalConversationSession";

const { sendProjectAssistantTurnMock, getProjectRuntimeActionMock } =
  vi.hoisted(() => ({
    sendProjectAssistantTurnMock: vi.fn(),
    getProjectRuntimeActionMock: vi.fn(),
  }));

vi.mock("@/features/project-assistant/sendProjectAssistantTurn", () => ({
  sendProjectAssistantTurn: (
    input: unknown,
    options?: { signal?: AbortSignal },
  ) => sendProjectAssistantTurnMock(input, options),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:cp021",
    name: "CP021",
    shortReference: "C21",
    objective: "Cut-lines.",
    contextSummary: "Fixture.",
    criticality: "STANDARD" as const,
    constraints: [] as string[],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:cp021",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:cp021",
    version: 1 as const,
    createdAt: "2026-10-06T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

function listTranscript(sessionDbPath: string) {
  const session = new ProductSqliteSession({
    projectId: "prj:cp021",
    dbPath: sessionDbPath,
    sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
  });
  try {
    return listPilotTranscriptTurns(session);
  } finally {
    session.close();
  }
}

describe("P5-S06 CP02.1 Request.signal bridge", () => {
  it("P02/P03 — POST forwards request.signal identity; body signal rejected", async () => {
    const { POST } = await import(
      "@/app/api/studio/projects/[projectId]/assistant/send/route"
    );
    sendProjectAssistantTurnMock.mockResolvedValue({
      ok: false,
      status: "stopped",
      code: "NORA_TURN_STOPPED",
      message: "Réponse interrompue.",
      mode: "fixture",
      retryable: true,
    });
    const controller = new AbortController();
    const request = new Request(
      "http://localhost/api/studio/projects/prj%3Acp021/assistant/send",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: "bonjour" }),
        signal: controller.signal,
      },
    );
    await POST(request, { params: Promise.resolve({ projectId: "prj:cp021" }) });
    expect(sendProjectAssistantTurnMock).toHaveBeenCalledTimes(1);
    const [input, options] = sendProjectAssistantTurnMock.mock.calls[0] as [
      { projectId: string },
      { signal?: AbortSignal },
    ];
    expect(input.projectId).toBe("prj:cp021");
    expect(options.signal).toBe(request.signal);
    expect(options.signal?.aborted).toBe(false);
    controller.abort();
    expect(request.signal.aborted).toBe(true);
    expect(options.signal?.aborted).toBe(true);

    expect(
      parseBrowserSafeAssistantSendBody({
        content: "bonjour",
        signal: "hostile",
      }).ok,
    ).toBe(false);
  });
});

describe("P5-S06 CP02.1 post-model / pre-materialization", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cp021-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("P07/P10/P11 — abort after model before transcript: STOPPED, no assistant row", async () => {
    const controller = new AbortController();
    const seen: string[] = [];
    let releaseTranscript!: () => void;
    const holdTranscript = new Promise<void>((resolve) => {
      releaseTranscript = resolve;
    });
    const pending = orchestrateProjectAssistantTurn({
      projectId: "prj:cp021",
      content: "Tour à interrompre après cognition",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeDurableEffect: async (block) => {
        seen.push(block);
        if (block === "transcriptJournal") {
          await holdTranscript;
        }
      },
    });
    const started = Date.now();
    while (
      !seen.includes("transcriptJournal") &&
      Date.now() - started < 8000
    ) {
      await new Promise((r) => setTimeout(r, 20));
    }
    expect(seen).toContain("transcriptJournal");
    expect(seen).not.toContain("terminalSuccess");
    controller.abort();
    releaseTranscript();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    expect(result.status).not.toBe("provider_error");
    expect(controller.signal.aborted).toBe(true);
    const turns = listTranscript(sessionDbPath);
    expect(turns.filter((t) => t.role === "assistant")).toHaveLength(0);
  });

  it("P09 — transcript already started is not rolled back; terminal abort still STOPPED", async () => {
    const controller = new AbortController();
    const seen: string[] = [];
    let releaseTerminal!: () => void;
    const holdTerminal = new Promise<void>((resolve) => {
      releaseTerminal = resolve;
    });
    const pending = orchestrateProjectAssistantTurn({
      projectId: "prj:cp021",
      content: "Tour avec transcript déjà écrit",
      sessionDbPath,
      provider: new FakeConversationProvider(),
      signal: controller.signal,
      beforeDurableEffect: async (block) => {
        seen.push(block);
        if (block === "terminalSuccess") {
          await holdTerminal;
        }
      },
    });
    const started = Date.now();
    while (!seen.includes("terminalSuccess") && Date.now() - started < 8000) {
      await new Promise((r) => setTimeout(r, 20));
    }
    expect(seen).toContain("transcriptJournal");
    expect(seen).toContain("terminalSuccess");
    const beforeAbort = listTranscript(sessionDbPath);
    expect(beforeAbort.some((t) => t.role === "assistant")).toBe(true);
    controller.abort();
    releaseTerminal();
    const result = await pending;
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("stopped");
    const after = listTranscript(sessionDbPath);
    expect(after.filter((t) => t.role === "assistant").length).toBe(
      beforeAbort.filter((t) => t.role === "assistant").length,
    );
  });
});
