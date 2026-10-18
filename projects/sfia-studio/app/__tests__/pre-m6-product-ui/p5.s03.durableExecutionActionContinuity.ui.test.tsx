/** @vitest-environment jsdom */
/**
 * P5-S03 CP01 — restart-safe durable Exécution action continuity (ZERO REAL).
 *
 * Fresh mount + durable EC remains actionable without Conversation F3 state.
 * CONFIRMATION != EXECUTION.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExecutionSurface } from "@/features/pre-m6-product-ui/surfaces/ExecutionSurface";

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
    projectId: "prj:cp01",
    activeCycleInstanceId: "cyc:1",
    executionContractId: "xct:cp01",
    executionContractVersion: 1,
    executionContractStatus: "confirmation_required",
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
    context: {
      executionContract: {
        action: "cursor.docs_write.apply",
        objective: "Écriture documentaire préparée",
      },
      executionReview: { reviewItemSummaries: [] },
    },
    ...overrides,
  };
}

const DOCS_WRITE_REQUIRED_FACTS = [
  "action",
  "target",
  "scope",
  "requiredAuthority",
  "requiredCapabilities",
  "constraints",
  "stopConditions",
  "reversibility",
  "evidenceRequirements",
  "semanticFingerprint",
  "inputs.targetRepositoryRef",
  "inputs.targetPath",
  "inputs.createOrModify",
  "inputs.noDelete",
] as const;

function activeCurrent(args: {
  status: "confirmation_required" | "confirmed" | "validated";
  inspectionSufficient?: boolean;
}) {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:1",
    requiredInspectedFacts: [...DOCS_WRITE_REQUIRED_FACTS],
    contract: {
      executionContractId: "xct:cp01",
      version: 1,
      status: args.status,
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "studio.gcec.docs_write",
      requiredAuthority: "N2",
      constraints: [],
      stopConditions: [],
      requiredCapabilities: [],
      reversibility: "reversible",
      semanticFingerprint: "fp",
      effectConfirmationRequired: args.status === "confirmation_required",
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        targetRepositoryRef: "acme/demo",
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
        executionContractId: "xct:cp01",
        semanticFingerprint: "fp",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: "xct:cp01",
      contractVersion: 1,
      semanticFingerprint: "fp",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: args.inspectionSufficient !== false,
      attestationRef: "att:1",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    },
  };
}

describe("P5-S03 CP01 durable execution action continuity", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    inspectMock.mockResolvedValue({
      ok: true,
      inspectionSufficient: true,
      executionContractId: "xct:cp01",
      contractVersion: 1,
    });
    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:cp01",
      status: "confirmed",
    });
    authorizeMock.mockResolvedValue({
      ok: true,
      outcome: "AUTHORIZED",
      executionEligible: true,
    });
    reconcileMock.mockResolvedValue({
      ok: true,
      intent: "execute",
      projection: projection({
        executionContractStatus: "confirmed",
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
      }),
    });
  });

  it("E1 — fresh mount confirmation_required → Exécuter folds Confirm then Authorize+Execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmation_required" }),
    );
    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:cp01",
      contractVersion: 1,
      confirmationRef: "cfm:1",
      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
      alreadyConfirmed: false,
      executionPerformed: false,
    });

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "À confirmer",
      );
    });
    // Tool-first: no separate Confirmer CTA — Exécuter folds Confirm after inspect.
    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    const executeBtn = screen.getByTestId("project-execution-execute");
    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

    fireEvent.click(executeBtn);

    await waitFor(() => {
      expect(confirmMock).toHaveBeenCalledTimes(1);
      expect(authorizeMock).toHaveBeenCalledTimes(1);
      expect(
        reconcileMock.mock.calls.some(
          (call) => (call[0] as { intent?: string }).intent === "execute",
        ),
      ).toBe(true);
    });
    expect(confirmMock).toHaveBeenCalledWith({
      projectId: "prj:cp01",
      executionContractId: "xct:cp01",
    });
    // R1 — Exécuter never records inspection as a side effect.
    expect(inspectMock).not.toHaveBeenCalled();
  });

  it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({ executionContractStatus: "confirmed" }),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmed" }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "Prête à exécuter",
      );
    });
    const executeBtn = screen.getByTestId("project-execution-execute");
    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

    fireEvent.click(executeBtn);

    await waitFor(() => {
      expect(authorizeMock).toHaveBeenCalledTimes(1);
      expect(
        reconcileMock.mock.calls.some(
          (call) =>
            (call[0] as { intent?: string }).intent === "execute",
        ),
      ).toBe(true);
    });
    expect(confirmMock).not.toHaveBeenCalled();
    const executeCalls = reconcileMock.mock.calls.filter(
      (call) => (call[0] as { intent?: string }).intent === "execute",
    );
    expect(executeCalls).toHaveLength(1);
    expect(executeCalls[0][0]).toEqual(
      expect.objectContaining({
        projectId: "prj:cp01",
        executionContractId: "xct:cp01",
        intent: "execute",
      }),
    );
  });

  it("E3 — without inspection sufficient, confirmation_required shows Inspect not Exécuter", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({
        status: "confirmation_required",
        inspectionSufficient: false,
      }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
    });
    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    expect(confirmMock).not.toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("E4 — authorization fail-closed: no reconcile execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({ executionContractStatus: "confirmed" }),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({ status: "confirmed" }),
    );
    authorizeMock.mockResolvedValue({
      ok: true,
      outcome: "DENIED",
      executionEligible: false,
      executionEligibilityReasonCode: "AUTHORITY_INSUFFICIENT",
    });

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-execute")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-execution-execute"));
    await waitFor(() => {
      expect(authorizeMock).toHaveBeenCalled();
      expect(screen.getByTestId("project-execution-error")).toBeTruthy();
    });
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("E5 — open examination panel without write; attest only after facts shown", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue(
      activeCurrent({
        status: "confirmation_required",
        inspectionSufficient: false,
      }),
    );

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
    });
    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();

    // I07 — opening detail does not attest.
    fireEvent.click(screen.getByTestId("project-execution-inspect"));
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-inspection-panel")).toBeTruthy();
    });
    expect(inspectMock).not.toHaveBeenCalled();
    expect(
      screen.getByTestId("project-execution-inspection-fact-inputs.targetPath"),
    ).toBeTruthy();

    fireEvent.click(screen.getByTestId("project-execution-attest"));
    await waitFor(() => {
      expect(inspectMock).toHaveBeenCalledTimes(1);
    });
    expect(inspectMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:cp01",
        executionContractId: "xct:cp01",
        expectedVersion: 1,
        inspectedFacts: expect.arrayContaining([
          "action",
          "semanticFingerprint",
          "inputs.targetPath",
          "inputs.targetRepositoryRef",
        ]),
      }),
    );
    const facts = (inspectMock.mock.calls[0]![0] as { inspectedFacts: string[] })
      .inspectedFacts;
    expect(facts).not.toContain("inputs.sourceGrounding");
    expect(confirmMock).not.toHaveBeenCalled();
  });

  it("UI01 — projection EC id without active pre → no Confirm/Execute", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection(),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });

    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-attention")).toBeTruthy();
    });
    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    expect(screen.queryByTestId("project-execution-inspect")).toBeNull();
  });

  it("E6 — RUNNING / terminal: no Exécuter", async () => {
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        executionContractStatus: "confirmed",
        stage: "RUNNING",
        attemptId: "att:1",
        attemptStatus: "running",
        context: null,
      }),
    });
    readCurrentContinuityMock.mockResolvedValue({ ok: true, kind: "none" });
    // Remount may auto-continue — return a non-continuing projection to avoid loops.
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
        context: null,
      }),
    });

    const { unmount } = render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toMatch(
        /En cours|Terminée/,
      );
    });
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    unmount();

    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection({
        stage: "POST_EVIDENCE_COMPLETE",
        attemptId: "att:1",
        attemptStatus: "succeeded",
        evidenceId: "ev:1",
        postEvidencePresent: true,
        context: null,
      }),
    });
    render(
      <ExecutionSurface
        projectId="prj:cp01"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-status").textContent).toBe(
        "Terminée",
      );
    });
    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    expect(screen.getByTestId("project-execution-result")).toBeTruthy();
  });
});
