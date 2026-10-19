/**
 * @vitest-environment jsdom
 *
 * STUDIO-P6-UNIFIED-INSPECTION-CONTRACT-04 — Groupe A/B deterministic proofs.
 * Real React surfaces + shared exam panel. Fake at W2 action boundary.
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExecutionSurface } from "@/features/pre-m6-product-ui/surfaces/ExecutionSurface";
import { GovernedConfirmationCard } from "@/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  buildInspectionExamView,
  sameInspectionExamSnapshot,
} from "@/features/pre-m6-product-ui/surfaces/contractInspectionExam";

const {
  inspectMock,
  confirmMock,
  authorizeMock,
  reconcileMock,
  deriveContinuityMock,
  readCurrentContinuityMock,
  readActiveDecisionSubjectMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
} = vi.hoisted(() => ({
  inspectMock: vi.fn(),
  confirmMock: vi.fn(),
  authorizeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  readCurrentContinuityMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
  w2SingleHumanExecuteAction: vi.fn(async () => ({
    ok: false,
    code: "SHE_NOT_UNDER_TEST",
    message: "SHE not under test in UIC Pass04.",
    executionAttemptCreated: false,
    humanDecisionCreated: false,
  })),
  w2DeriveGovernedExecutionContinuityAction: (...args: unknown[]) =>
    deriveContinuityMock(...args),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readCurrentContinuityMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2ResolveProductExecutionContextAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadExecutionReviewItemAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi.fn().mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cyc:uic",
    hasCurrentNextCycleRecommendation: false,
  }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn().mockResolvedValue({
    ok: true,
    prepared: null,
  }),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const REQUIRED = [
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
] as const;

function disclosure(overrides: Record<string, unknown> = {}) {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "docs sandbox",
    targetRepositoryRef: "acme/demo",
    targetPath: "projects/demo/out.md",
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
    evidenceRequirements: [] as string[],
    requiredAuthority: "N2",
    requiredCapabilities: [] as string[],
    constraints: [] as string[],
    stopConditions: [] as string[],
    reversibility: "reversible",
    contractVersion: 1,
    executionContractId: "xct:uic",
    semanticFingerprint: "fp:uic-1",
    disclosureComplete: true,
    incompletenessCode: null,
    ...overrides,
  };
}

function contractDto(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: "xct:uic",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "docs sandbox",
    requiredAuthority: "N2",
    constraints: [] as string[],
    stopConditions: [] as string[],
    requiredCapabilities: [] as string[],
    reversibility: "reversible",
    semanticFingerprint: "fp:uic-1",
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N2",
    inspectionDisclosure: disclosure(),
    ...overrides,
  };
}

function inspectionInsufficient(): {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string;
  readonly attestedSemanticFingerprint: null;
  readonly statusLabel: "NON INSPECTÉ";
  readonly inspectionSufficient: false;
  readonly attestationRef: null;
  readonly attestedVersion: null;
  readonly staleAttestationRef: null;
  readonly reinspectionRequired: false;
  readonly reason: "no_attestation";
  readonly grantsAuthority: false;
} {
  return {
    executionContractId: "xct:uic",
    contractVersion: 1,
    semanticFingerprint: "fp:uic-1",
    attestedSemanticFingerprint: null,
    statusLabel: "NON INSPECTÉ",
    inspectionSufficient: false,
    attestationRef: null,
    attestedVersion: null,
    staleAttestationRef: null,
    reinspectionRequired: false,
    reason: "no_attestation",
    grantsAuthority: false,
  };
}

function inspectionOk() {
  return {
    executionContractId: "xct:uic",
    contractVersion: 1,
    semanticFingerprint: "fp:uic-1",
    attestedSemanticFingerprint: "fp:uic-1" as string | null,
    statusLabel: "INSPECTÉ" as const,
    inspectionSufficient: true as const,
    attestationRef: "att:uic",
    attestedVersion: 1,
    staleAttestationRef: null,
    reinspectionRequired: false as const,
    reason: "inspected" as const,
    grantsAuthority: false as const,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  inspectMock.mockReset();
  confirmMock.mockReset();
  authorizeMock.mockReset();
  reconcileMock.mockReset();
  deriveContinuityMock.mockReset();
  readCurrentContinuityMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();

  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:uic",
      activeCycleInstanceId: "cyc:uic",
      executionContractId: "xct:uic",
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
      context: null,
    },
  });
  readCurrentContinuityMock.mockResolvedValue({
    ok: true,
    kind: "active",
    decisionRef: null,
    contract: contractDto(),
    inspection: inspectionInsufficient(),
    requiredInspectedFacts: [...REQUIRED],
  });
  inspectMock.mockResolvedValue({ ok: true, ...inspectionOk() });
});

describe("Pass04 unified inspection — shared helpers (U04/U06/U07)", () => {
  it("U04 — buildInspectionExamView uses only canonical required facts", () => {
    const view = buildInspectionExamView({
      disclosure: disclosure({
        sourceGrounding: { kind: "repo", refs: ["r1"] },
        acceptanceCriteria: [
          { criterionId: "c1", statement: "ok", kind: "must" },
        ],
        validationPlan: ["step-a"],
        reportRequirements: ["report-1"],
      }),
      requiredInspectedFacts: [
        ...REQUIRED,
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ],
    });
    expect(view.disclosureIncomplete).toBe(false);
    expect(view.missingRequired).toEqual([]);
    expect(view.presentedFactIds).toEqual(
      expect.arrayContaining([
        "inputs.sourceGrounding",
        "inputs.acceptanceCriteria",
        "inputs.validationPlan",
        "inputs.reportRequirements",
      ]),
    );
  });

  it("U06 — missing required fact blocks attestation payload", () => {
    const view = buildInspectionExamView({
      disclosure: disclosure({ targetPath: null }),
      requiredInspectedFacts: [...REQUIRED],
    });
    expect(view.missingRequired).toContain("inputs.targetPath");
    expect(view.presentedFactIds).not.toContain("inputs.targetPath");
  });

  it("U10/U11/U12 — snapshot identity comparison", () => {
    const a = {
      projectId: "p1",
      executionContractId: "x1",
      version: 1,
      semanticFingerprint: "fp1",
    };
    expect(sameInspectionExamSnapshot(a, { ...a })).toBe(true);
    expect(sameInspectionExamSnapshot(a, { ...a, version: 2 })).toBe(false);
    expect(
      sameInspectionExamSnapshot(a, { ...a, semanticFingerprint: "fp2" }),
    ).toBe(false);
    expect(
      sameInspectionExamSnapshot(a, { ...a, executionContractId: "x2" }),
    ).toBe(false);
    expect(sameInspectionExamSnapshot(a, { ...a, projectId: "p2" })).toBe(
      false,
    );
  });
});

describe("Pass04 — ExecutionSurface (U01/U05/U08/U09/U14/U15)", () => {
  it("U01/U08/U09 — open without write; attest presented facts only", async () => {
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
    });
    fireEvent.click(screen.getByTestId("project-execution-inspect"));
    expect(
      await screen.findByTestId("project-execution-inspection-panel"),
    ).toBeTruthy();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("project-execution-attest"));
    await waitFor(() => expect(inspectMock).toHaveBeenCalledTimes(1));
    const payload = inspectMock.mock.calls[0]![0] as {
      inspectedFacts: string[];
      expectedVersion: number;
    };
    expect(payload.expectedVersion).toBe(1);
    expect(payload.inspectedFacts).toEqual(
      expect.arrayContaining(["action", "inputs.targetPath"]),
    );
    expect(payload.inspectedFacts).not.toContain("inputs.sourceGrounding");
  });

  it("U14 — Confirm without inspection refuses and never inspects", async () => {
    readCurrentContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: null,
      contract: contractDto(),
      inspection: inspectionInsufficient(),
      requiredInspectedFacts: [...REQUIRED],
    });
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
    });
    expect(inspectMock).not.toHaveBeenCalled();
    expect(confirmMock).not.toHaveBeenCalled();
  });

  it("U15 — Execute without inspection refuses and never inspects", async () => {
    readCurrentContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: null,
      contract: contractDto({ status: "confirmed" }),
      inspection: inspectionInsufficient(),
      requiredInspectedFacts: [...REQUIRED],
    });
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:uic",
        activeCycleInstanceId: "cyc:uic",
        executionContractId: "xct:uic",
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
      },
    });
    render(
      <ExecutionSurface
        projectId="prj:uic"
        onReturnToConversation={vi.fn()}
      />,
    );
    await waitFor(() => {
      expect(screen.queryByTestId("project-execution-execute")).toBeNull();
    });
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });
});

describe("Pass04 — Conversation GovernedConfirmationCard (U02/U05/U08)", () => {
  it("U02 — Examiner opens panel without attest; Attester sends displayed facts", () => {
    const onAttest = vi.fn();
    render(
      <GovernedConfirmationCard
        projectId="prj:uic"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(onAttest).not.toHaveBeenCalled();
    expect(
      screen.getByTestId("governed-confirmation-inspection-panel"),
    ).toBeTruthy();
    expect(
      screen.getByTestId("governed-confirmation-inspection-fact-action"),
    ).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-confirmation-attest"));
    expect(onAttest).toHaveBeenCalledTimes(1);
    expect(onAttest.mock.calls[0]![0]).toEqual(
      expect.arrayContaining(["action", "semanticFingerprint"]),
    );
  });

  it("U13 — project change closes exam without transferring attestation", () => {
    const onAttest = vi.fn();
    const { rerender } = render(
      <GovernedConfirmationCard
        projectId="prj:a"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(
      screen.getByTestId("governed-confirmation-inspection-panel"),
    ).toBeTruthy();
    rerender(
      <GovernedConfirmationCard
        projectId="prj:b"
        contract={contractDto()}
        inspection={inspectionInsufficient()}
        requiredInspectedFacts={[...REQUIRED]}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onAttestInspection={onAttest}
      />,
    );
    expect(
      screen.queryByTestId("governed-confirmation-inspection-panel"),
    ).toBeNull();
    expect(onAttest).not.toHaveBeenCalled();
  });
});

describe("Pass04 — TrajectorySurface (U03/U16/U15)", () => {
  it("U03 — Inspecter opens exam without write; Attester persists facts", async () => {
    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:uic"
      />,
    );
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(
      await screen.findByTestId("w2-trajectory-inspection-panel"),
    ).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
    await waitFor(() => expect(inspectMock).toHaveBeenCalledTimes(1));
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:uic",
      executionContractId: "xct:uic",
      inspectedFacts: expect.arrayContaining(["action"]),
    });
  });

  it("U16 — active prepared contract does not auto-inspect on mount", async () => {
    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:uic"
      />,
    );
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      /NON INSPECTÉ/i,
    );
  });
});
