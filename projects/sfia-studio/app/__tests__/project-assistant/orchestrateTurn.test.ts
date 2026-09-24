import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f1-demo",
    name: "Projet F1",
    shortReference: "F1",
    objective: "Tester l'assistant contextualisé.",
    contextSummary: "Contexte process-local F1.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f1",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f1-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
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

describe("F1 project assistant orchestration", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f1-orch-"));
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

  it("injects project context and returns a fake non-live reply", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Résume l'objectif du projet.",
      sessionDbPath,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.presentation).toBe("test_provider");
    expect(result.mode).toBe("fixture");
    expect(result.text).toMatch(/TEST\/FAKE · NON LIVE/);
    expect(result.project.projectId).toBe("prj:f1-demo");
    expect(result.project.objective).toContain("assistant contextualisé");
    expect(result.ephemeralNotice).toMatch(/Session|Product SQLite/i);
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.sessionId).toBeTruthy();
    expect(getProjectRuntimeActionMock).toHaveBeenCalledWith("prj:f1-demo");
  });

  it("supports multi-turn via Product SQLite Session (caller history not required)", async () => {
    const first = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Premier tour",
      sessionDbPath,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.cognitiveRuntime).toBe("agents");

    const second = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Deuxième tour",
      sessionDbPath,
      history: [
        { role: "user", content: "Premier tour" },
        { role: "assistant", content: first.text },
      ],
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.cognitiveRuntime).toBe("agents");
    expect(second.sessionId).toBe(first.sessionId);
    expect(second.text).toMatch(/TEST\/FAKE · NON LIVE/);
  });

  it("invokes git read tools and surfaces tool events", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Besoin d'un statut git __CT_TOOL_GIT_STATUS__",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.toolCalls).toBeGreaterThan(0);
    expect(
      result.toolEvents.some((e) => e.toolName === "git_local_get_status"),
    ).toBe(true);
    expect(result.toolEvents.every((e) => e.readOnly)).toBe(true);
  });

  it("surfaces a policy deny for .env read attempts", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Lis le secret __CT_TOOL_DENIED_PATH__",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const denied = result.toolEvents.find((e) => e.status === "denied");
    expect(denied).toBeTruthy();
    expect(denied?.toolName).toBe("git_local_read_file");
  });

  it("returns a recoverable provider error without silent fallback", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Force error __OPS1_FORCE_PROVIDER_ERROR__",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_error");
    expect(result.retryable).toBe(true);
    expect(result.mode).toBe("fixture");
  });

  it("rejects empty messages", async () => {
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "   ",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("EMPTY_MESSAGE");
  });

  it("fail-closes when live is requested but secrets are missing (no silent fake)", async () => {
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);

    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:f1-demo",
      content: "Hello",
      sessionDbPath,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe("provider_unavailable");
    expect(result.mode).toBe("unavailable");
    expect(result.message).toMatch(/Aucun basculement silencieux/i);
  });

  it("CR-CJ-01 — server-bounds hostile 150-message history before cognitive envelope", async () => {
    const cognitive = await import(
      "@/lib/nora-cognitive-runtime/runNoraCognitiveTurn"
    );
    const {
      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
      PRODUCT_TURN_MAX_HISTORY_CHARS,
    } = await import("@/features/project-assistant/turnPayloadCanonical");

    const OLD = "HOSTILE_OLD_MARKER_MUST_NOT_REACH_ENVELOPE";
    const hostileHistory = Array.from({ length: 150 }, (_, i) => ({
      role: (i % 2 === 0 ? "user" : "assistant") as "user" | "assistant",
      content: i === 0 ? OLD : `hostile-${i}`,
    }));

    const captured: { messages: Array<{ role: string; content: string }> } = {
      messages: [],
    };
    const spy = vi
      .spyOn(cognitive, "runNoraCognitiveTurn")
      .mockImplementation(async (input) => {
        captured.messages = input.messages.map((m) => ({
          role: m.role,
          content: m.content,
        }));
        return {
          text: "TEST/FAKE · NON LIVE bounded",
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
          toolRounds: 0,
          toolCalls: 0,
          limitReached: false,
          cognitiveRuntime: "agents",
          sessionId: "sess-test",
          memoryBAvailability: "unavailable",
          memoryBCompactionState: "none",
          memoryBCompactionDetails: null,
        } as unknown as Awaited<
          ReturnType<typeof cognitive.runNoraCognitiveTurn>
        >;
      });

    try {
      const result = await orchestrateProjectAssistantTurn({
        projectId: "prj:f1-demo",
        content: "nouveau tour après rehydrate",
        history: hostileHistory,
        sessionDbPath,
        provider: new FakeConversationProvider(),
      });
      expect(result.ok).toBe(true);
      expect(spy).toHaveBeenCalled();
      const msgs = captured.messages;
      expect(msgs.length).toBeGreaterThan(0);
      const nonSystem = msgs.filter(
        (m) => m.role === "user" || m.role === "assistant",
      );
      // bounded recent history + current user message
      expect(nonSystem.length).toBeLessThanOrEqual(
        PRODUCT_TURN_MAX_HISTORY_MESSAGES + 1,
      );
      const prior = nonSystem.slice(0, -1);
      const priorChars = prior.reduce((s, m) => s + m.content.length, 0);
      expect(prior.length).toBeLessThanOrEqual(PRODUCT_TURN_MAX_HISTORY_MESSAGES);
      expect(priorChars).toBeLessThanOrEqual(PRODUCT_TURN_MAX_HISTORY_CHARS);
      expect(msgs.some((m) => m.content.includes(OLD))).toBe(false);
      expect(hostileHistory).toHaveLength(150);
    } finally {
      spy.mockRestore();
    }
  });
});
