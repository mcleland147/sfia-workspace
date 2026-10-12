/**
 * P6 Nora P0 — Chat-first path: useProductConversation + ConversationSurface
 * surface incomplete (status honesty) without ProjectAssistantPanel.
 * Fake send adapter only — ZERO REAL.
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import {
  useProductConversation,
  type ProductConversationController,
} from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";
import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";

const {
  sendCancellableAssistantTurnMock,
  conversationContinuityMock,
} = vi.hoisted(() => ({
  sendCancellableAssistantTurnMock: vi.fn(),
  conversationContinuityMock: vi.fn(),
}));

/** Process-local transcript mirrored into Fake continuity so reconcile does not wipe. */
const fakeTranscript: Array<{
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string | null;
}> = [];

vi.mock("@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn", () => ({
  sendCancellableAssistantTurn: (
    input: unknown,
    signal: AbortSignal,
  ) => sendCancellableAssistantTurnMock(input, signal),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: (...args: unknown[]) =>
    conversationContinuityMock(...args),
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

const PROJECT = {
  projectId: "prj:p0-chat-first",
  name: "Projet P0 Chat-first",
  shortReference: "P0CF",
  objective: "Surface incomplete on chat-first path.",
  contextSummary: "P0 UX chat-first",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:p0-cf",
  lpsVersion: 1,
  lpsCreatedAt: "2026-10-12T00:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:p0-cf",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

function incompleteResult(
  overrides: Partial<Extract<ProjectAssistantSendResult, { ok: true }>> = {},
): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "incomplete",
    text: "Model-turn budget reached (maxTurns).",
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 2,
    toolCalls: 2,
    sources: [],
    toolEvents: [],
    project: PROJECT,
    ephemeralNotice:
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    limitReached: true,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    memoryBAvailability: "unavailable",
    memoryBCompactionState: "none",
    lifecycleRecommendationMaterialized: false,
    logicalTurnId: "lt:p0-incomplete",
    ...overrides,
  } as ProjectAssistantSendResult;
}

function okResult(
  text = "[TEST/FAKE] complete reply",
): ProjectAssistantSendResult {
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
    project: PROJECT,
    ephemeralNotice: "Session ok.",
    limitReached: false,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    memoryBAvailability: "unavailable",
    memoryBCompactionState: "none",
    logicalTurnId: "lt:p0-ok",
  } as ProjectAssistantSendResult;
}

function cognitiveStopResult(
  overrides: Partial<Extract<ProjectAssistantSendResult, { ok: true }>> = {},
): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "cognitive_stop",
    text: "Cognitive STOP — premise invalidated.",
    mode: "fixture",
    presentation: "test_provider",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: PROJECT,
    ephemeralNotice: "Arrêt cognitif.",
    limitReached: false,
    cognitiveRuntime: "agents",
    sessionId: "sess:p0-cf",
    mw3: {
      disposition: "evidence_backed",
      progression: "COGNITIVE_STOP",
      cognitiveStop: true,
      allowsSilentSuccess: false,
      evidenceIds: ["ev:1"],
      sourceIds: [],
      insufficiencyReasons: [],
      anatomy: {
        reason: "premise invalidated",
        contradictionEvidenceIds: ["ev:1"],
        sourceIds: [],
        governingPremise: "X",
        nextAction: "replan",
      },
    },
    logicalTurnId: "lt:p0-stop",
    ...overrides,
  } as ProjectAssistantSendResult;
}

function mirrorSendIntoTranscript(
  userContent: string,
  result: ProjectAssistantSendResult,
) {
  fakeTranscript.push({
    id: `pt:u-${fakeTranscript.length}`,
    role: "user",
    content: userContent,
    createdAt: null,
  });
  if (result.ok) {
    fakeTranscript.push({
      id: `pt:a-${fakeTranscript.length}`,
      role: "assistant",
      content: result.text,
      createdAt: null,
    });
  }
}

function Harness({
  onReady,
}: {
  onReady?: (c: ProductConversationController) => void;
}) {
  const controller = useProductConversation({ projectId: PROJECT.projectId });
  onReady?.(controller);
  return <ConversationSurface controller={controller} />;
}

describe("P6 Nora P0 — Chat-first incomplete surface (useProductConversation)", () => {
  beforeEach(() => {
    fakeTranscript.length = 0;
    sendCancellableAssistantTurnMock.mockReset();
    conversationContinuityMock.mockReset();
    conversationContinuityMock.mockImplementation(async () => ({
      ok: true,
      transcriptAvailability: fakeTranscript.length > 0 ? "available" : "empty",
      messages: fakeTranscript.map((m) => ({ ...m })),
      journal: { cycleInstanceId: null, entries: [] },
    }));
  });

  afterEach(() => {
    cleanup();
  });

  it("T01/T02/T03/T04/T10 — incomplete → hook + Analyse inachevée visible without Sources", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));

    await act(async () => {
      latest.sendMessage("Continuer l'analyse documentaire.");
    });

    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    expect(latest.uiState).toBe("ANSWERED");
    const panel = screen.getByTestId("project-assistant-panel");
    expect(panel.getAttribute("data-execution-incomplete")).toBe("true");
    expect(panel.getAttribute("data-ui-state")).toBe("ANSWERED");
    expect(
      screen.getByTestId("project-assistant-incomplete-notice").textContent,
    ).toMatch(/limite|inachev|analyse complète/i);
    expect(screen.getByText(/Model-turn budget reached/i)).toBeTruthy();
    // Banner is outside "Sources et limites" disclosure
    expect(
      screen.getByTestId("project-assistant-incomplete-surface").closest(
        "details",
      ),
    ).toBeNull();
    expect(screen.queryByTestId("f2-decide-go")).toBeNull();
    expect(screen.queryByTestId("project-assistant-error")).toBeNull();
    expect(screen.queryByTestId("project-assistant-stopped")).toBeNull();
  });

  it("T05 — status ok does not show incomplete warning", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = okResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("ping");
    });
    await waitFor(() => {
      expect(latest.uiState).toBe("ANSWERED");
      expect(screen.getByText(/TEST\/FAKE/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });

  it("T06 — next nominal turn clears stale incomplete", async () => {
    sendCancellableAssistantTurnMock
      .mockImplementationOnce(async (input: { content: string }) => {
        const result = incompleteResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      })
      .mockImplementationOnce(async (input: { content: string }) => {
        const result = okResult("[TEST/FAKE] second turn complete");
        mirrorSendIntoTranscript(input.content, result);
        return result;
      });
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));

    await act(async () => {
      latest.sendMessage("first incomplete");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    await act(async () => {
      latest.sendMessage("second ok");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(false);
      expect(screen.getByText(/second turn complete/i)).toBeTruthy();
    });
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(
      screen.getByTestId("project-assistant-panel").getAttribute(
        "data-execution-incomplete",
      ),
    ).toBe("false");
  });

  it("T07 — provider error remains distinct from incomplete", async () => {
    sendCancellableAssistantTurnMock.mockResolvedValue({
      ok: false,
      status: "provider_error",
      message: "Provider failed",
      mode: "unavailable",
      retryable: true,
      code: "PROVIDER_ERROR",
    });
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("will fail");
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-error")).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    expect(screen.getByText(/Provider failed/i)).toBeTruthy();
  });

  it("T07b — abort remains STOPPED without incomplete banner", async () => {
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
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("will abort");
    });
    await waitFor(() =>
      expect(sendCancellableAssistantTurnMock).toHaveBeenCalled(),
    );
    await act(async () => {
      latest.stopCurrentResponse();
    });
    await waitFor(() => expect(latest.uiState).toBe("STOPPED"));
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T08 — Cognitive STOP does not show Analyse inachevée", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = cognitiveStopResult();
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("contradiction");
    });
    await waitFor(() => {
      expect(latest.uiState).toBe("ANSWERED");
      expect(screen.getByText(/Cognitive STOP/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T08b — Cognitive STOP outranks limitReached for incomplete UI", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = cognitiveStopResult({
          text: "stop and limit",
          limitReached: true,
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("both");
    });
    await waitFor(() => {
      expect(screen.getByText(/stop and limit/i)).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(false);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T09/T12 — incomplete does not invent HumanDecision; ANSWERED is transport phase only", async () => {
    const answeredEvents: Event[] = [];
    const onAnswered = (e: Event) => answeredEvents.push(e);
    window.addEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);

    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult({
          f2: undefined,
          lifecycleRecommendationMaterialized: false,
          reservationProposedIds: [],
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("incomplete mission");
    });
    await waitFor(() => {
      expect(latest.executionIncomplete).toBe(true);
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });

    expect(latest.uiState).toBe("ANSWERED");
    await waitFor(() => {
      expect(answeredEvents.length).toBeGreaterThanOrEqual(1);
    });
    expect(screen.queryByTestId("f2-decide-go")).toBeNull();
    expect(latest.activeProposal).toBeNull();

    window.removeEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
  });

  it("T11 — partial text preserved alongside incomplete surface", async () => {
    sendCancellableAssistantTurnMock.mockImplementation(
      async (input: { content: string }) => {
        const result = incompleteResult({
          text: "Partial documentary notes before budget stop.",
        });
        mirrorSendIntoTranscript(input.content, result);
        return result;
      },
    );
    let latest!: ProductConversationController;
    render(<Harness onReady={(c) => (latest = c)} />);
    await waitFor(() => expect(latest.uiState).not.toBe("INITIAL"));
    await act(async () => {
      latest.sendMessage("GDR");
    });
    await waitFor(() => {
      expect(
        screen.getByText(/Partial documentary notes before budget stop/i),
      ).toBeTruthy();
      expect(
        screen.getByTestId("project-assistant-incomplete-surface"),
      ).toBeTruthy();
    });
    expect(latest.executionIncomplete).toBe(true);
  });
});
