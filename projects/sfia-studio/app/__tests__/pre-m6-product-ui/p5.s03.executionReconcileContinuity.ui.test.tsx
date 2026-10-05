/** @vitest-environment jsdom */
/**
 * P5-S03 CP02 — mounted + remount execution reconcile continuity (ZERO REAL).
 *
 * Harvests canonical reconcileContinuePolicy — no second state machine.
 * Timer pattern mirrors TrajectorySurface CP2-08 tests (flush + advanceTimers).
 */
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExecutionSurface } from "@/features/pre-m6-product-ui/surfaces/ExecutionSurface";
import {
  nextReconcileContinueDelayMs,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";

const {
  deriveContinuityMock,
  readCurrentContinuityMock,
  confirmMock,
  inspectMock,
  authorizeMock,
  reconcileMock,
} = vi.hoisted(() => ({
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  confirmMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  reconcileMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
}));

function projection(overrides: Record<string, unknown> = {}) {
  return {
    projectId: "prj:cp02",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:cp02",
    executionContractVersion: 1,
    executionContractStatus: "confirmed",
    attemptId: null,
    attemptStatus: null,
    stage: "PRE_EXECUTION",
    productOutcome: null,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    postEvidencePresent: false,
    nextDeterministicAction: "NONE",
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
    ...overrides,
  };
}

function activeConfirmed(contractId = "xct:cp02") {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:1",
    contract: {
      executionContractId: contractId,
      version: 1,
      status: "confirmed" as const,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [],
      stopConditions: [],
      requiredCapabilities: [],
      reversibility: "reversible",
      semanticFingerprint: "fp",
      effectConfirmationRequired: false,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        targetRepositoryRef: null,
        targetPath: "projects/demo/note.md",
        scopeIn: null,
        scopeOut: null,
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: null,
        sourceGrounding: null,
        acceptanceCriteria: null,
        validationPlan: null,
        reportRequirements: null,
        evidenceRequirements: [],
        requiredAuthority: "N2",
        requiredCapabilities: [],
        constraints: [],
        stopConditions: [],
        reversibility: "reversible",
        contractVersion: 1,
        executionContractId: contractId,
        semanticFingerprint: "fp",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: contractId,
      contractVersion: 1,
      semanticFingerprint: "fp",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:1",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    },
  };
}

function intents(): string[] {
  return reconcileMock.mock.calls.map(
    (call) => (call[0] as { intent: string }).intent,
  );
}

async function flush(ms = 0): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

describe("P5-S03 CP02 execution reconcile continuity", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    inspectMock.mockResolvedValue({
      ok: true,
      inspectionSufficient: true,
      executionContractId: "xct:cp02",
      contractVersion: 1,
    });
    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:cp02",
      status: "confirmed",
    });
    authorizeMock.mockResolvedValue({
      ok: true,
      outcome: "AUTHORIZED",
      executionEligible: true,
    });
  });

  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("C01 — execute enters RUNNING and schedules continue (no second execute)", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(activeConfirmed());
    reconcileMock
      .mockResolvedValueOnce({
        ok: true,
        intent: "execute",
        projection: projection({
          stage: "RUNNING",
          attemptId: "att:1",
          attemptStatus: "running",
        }),
      })
      .mockResolvedValue({
        ok: true,
        intent: "continue",
        projection: projection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          postEvidencePresent: true,
          nextDeterministicAction: "NONE",
        }),
      });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-execute")).toBeTruthy();

    await act(async () => {
      fireEvent.click(screen.getByTestId("project-execution-execute"));
      await vi.advanceTimersByTimeAsync(0);
    });
    expect(intents()).toContain("execute");
    expect(intents().filter((i) => i === "execute")).toHaveLength(1);

    await flush(nextReconcileContinueDelayMs(1));
    expect(intents()).toContain("continue");
    expect(intents().filter((i) => i === "execute")).toHaveLength(1);
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
  });

  it("C02 — ATTEMPT_ACCEPTED remount auto-continues", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "ATTEMPT_ACCEPTED",
        attemptId: "att:1",
        attemptStatus: "accepted",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "continue",
      projection: projection({
        stage: "POST_EVIDENCE_COMPLETE",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        evidenceId: "ev:1",
        postEvidencePresent: true,
        nextDeterministicAction: "NONE",
      }),
    });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(reconcileMock).toHaveBeenCalledWith(
      expect.objectContaining({
        intent: "continue",
        executionContractId: "xct:cp02",
      }),
    );
    expect(intents().filter((i) => i === "execute")).toHaveLength(0);
  });

  it("C03 — RUNNING remount auto-continues; no Exécuter CTA", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "continue",
      projection: projection({
        stage: "POST_EVIDENCE_COMPLETE",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        evidenceId: "ev:1",
        postEvidencePresent: true,
        nextDeterministicAction: "NONE",
      }),
    });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(intents()).toContain("continue");
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    expect(intents().every((i) => i === "continue")).toBe(true);
  });

  it("C04 — PRODUCT_MATERIALIZATION_PENDING schedules continue chain", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "PRODUCT_MATERIALIZATION_PENDING",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        nextDeterministicAction: "MATERIALIZE_PRODUCT",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    reconcileMock
      .mockResolvedValueOnce({
        ok: true,
        intent: "continue",
        projection: projection({
          stage: "POST_EVIDENCE_PENDING",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          nextDeterministicAction: "RUN_POST_EVIDENCE",
        }),
      })
      .mockResolvedValue({
        ok: true,
        intent: "continue",
        projection: projection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          postEvidencePresent: true,
          nextDeterministicAction: "NONE",
        }),
      });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(reconcileMock).toHaveBeenCalled();
    await flush(nextReconcileContinueDelayMs(1));
    expect(intents().filter((i) => i === "continue").length).toBeGreaterThanOrEqual(
      2,
    );
    expect(intents().every((i) => i === "continue")).toBe(true);
  });

  it("C05 — stable NONE does not schedule continue", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "POST_EVIDENCE_COMPLETE",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        evidenceId: "ev:1",
        postEvidencePresent: true,
        nextDeterministicAction: "NONE",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-status").textContent).toBe(
      "Terminée",
    );
    await flush(3000);
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("C06 — recoveryRequired stops continuation", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "RECOVERY_REQUIRED",
        recoveryRequired: true,
        humanDecisionRequired: true,
        attemptId: "att:1",
        attemptStatus: "failed",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-surface")).toBeTruthy();
    await flush(3000);
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("C07 — HUMAN_DECISION_REQUIRED stops continuation", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "PRE_EXECUTION",
        nextDeterministicAction: "HUMAN_DECISION_REQUIRED",
        humanDecisionRequired: true,
      }),
    });
    readCurrentContinuityMock.mockResolvedValue(activeConfirmed());

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-surface")).toBeTruthy();
    await flush(3000);
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("C08 — unmount clears scheduled continue", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(activeConfirmed());
    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "execute",
      projection: projection({
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
      }),
    });

    const { unmount } = render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-execute")).toBeTruthy();

    await act(async () => {
      fireEvent.click(screen.getByTestId("project-execution-execute"));
      await vi.advanceTimersByTimeAsync(0);
    });
    expect(intents()).toContain("execute");
    const callsBeforeUnmount = reconcileMock.mock.calls.length;
    unmount();
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 5);
    expect(reconcileMock.mock.calls.length).toBe(callsBeforeUnmount);
  });

  it("C09 — in-flight continue is not duplicated concurrently", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });

    let resolveFirst: ((value: unknown) => void) | null = null;
    reconcileMock.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveFirst = resolve;
        }),
    );

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(reconcileMock).toHaveBeenCalledTimes(1);
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 2);
    expect(reconcileMock).toHaveBeenCalledTimes(1);

    await act(async () => {
      resolveFirst?.({
        ok: true,
        intent: "continue",
        projection: projection({
          stage: "POST_EVIDENCE_COMPLETE",
          attemptId: "att:1",
          attemptStatus: "succeeded",
          evidenceId: "ev:1",
          postEvidencePresent: true,
          nextDeterministicAction: "NONE",
        }),
      });
      await vi.advanceTimersByTimeAsync(0);
    });
  });

  it("C10 — contract identity change cancels stale continuation", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        executionContractId: "xct:old",
        stage: "PRE_EXECUTION",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue(activeConfirmed("xct:old"));
    reconcileMock.mockResolvedValueOnce({
      ok: true,
      intent: "execute",
      projection: projection({
        executionContractId: "xct:old",
        stage: "RUNNING",
        attemptId: "att:old",
        attemptStatus: "running",
      }),
    });

    const { rerender } = render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-execute")).toBeTruthy();

    await act(async () => {
      fireEvent.click(screen.getByTestId("project-execution-execute"));
      await vi.advanceTimersByTimeAsync(0);
    });
    expect(intents()).toContain("execute");

    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        executionContractId: "xct:new",
        stage: "PRE_EXECUTION",
        nextDeterministicAction: "NONE",
      }),
    });
    readCurrentContinuityMock.mockResolvedValue(activeConfirmed("xct:new"));
    rerender(
      <ExecutionSurface projectId="prj:cp02-b" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(deriveContinuityMock).toHaveBeenCalledWith({
      projectId: "prj:cp02-b",
    });
    const callsAfterSwitch = reconcileMock.mock.calls.length;
    await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS * 5);
    const staleContinues = reconcileMock.mock.calls
      .slice(callsAfterSwitch)
      .filter(
        (call) =>
          (call[0] as { executionContractId?: string; intent?: string })
            .executionContractId === "xct:old" &&
          (call[0] as { intent?: string }).intent === "continue",
      );
    expect(staleContinues).toHaveLength(0);
  });

  it("CP01 regression — Confirmer never reconcile execute/continue", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        executionContractStatus: "confirmation_required",
      }),
    });
    const current = activeConfirmed();
    readCurrentContinuityMock.mockResolvedValue({
      ...current,
      contract: {
        ...current.contract,
        status: "confirmation_required",
        effectConfirmationRequired: true,
      },
    });

    render(
      <ExecutionSurface projectId="prj:cp02" onReturnToConversation={vi.fn()} />,
    );
    await flush(0);
    await flush(0);
    expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();

    await act(async () => {
      fireEvent.click(screen.getByTestId("project-execution-confirm"));
      await vi.advanceTimersByTimeAsync(0);
    });
    expect(confirmMock).toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
  });
});
