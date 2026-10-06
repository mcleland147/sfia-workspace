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
