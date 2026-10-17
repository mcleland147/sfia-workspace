/**
 * P6 CLOSURE REGULARIZATION — TrajectorySurface Pilot gesture DET proof.
 *
 * Mounts the real TrajectorySurface, fires inspect + Exécuter (or authorize),
 * and asserts Product actions receive attested version/fingerprint.
 *
 * Fake only at action boundary (mocked server actions). ZERO Attempt REAL.
 *
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  inspectMock,
  authorizeMock,
  confirmMock,
  readGovernedExecutionContinuityMock,
  readActiveDecisionSubjectMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  reconcileMock,
} = vi.hoisted(() => ({
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  confirmMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  reconcileMock: vi.fn(),
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
  w2ProposeTrajectoryOptionsAction: vi.fn(),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2ReconcileGovernedExecutionAction: (...args: unknown[]) =>
    reconcileMock(...args),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2DeriveGovernedExecutionContinuityAction: vi.fn().mockResolvedValue({
    ok: true,
    projection: {
      projectId: "prj:p6-ui",
      activeCycleInstanceId: "cyc:p6-ui",
      executionContractId: "xct:gen-prep:ui01",
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
  }),
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
  w2ReadRecoveryExecutionBindingAction: (...args: unknown[]) =>
    readRecoveryExecutionBindingMock(...args),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...args: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...args),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
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
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: vi.fn().mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cyc:p6-ui",
    hasCurrentNextCycleRecommendation: false,
  }),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({ ok: true, presentation: null }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: vi.fn(),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const CONTRACT_ID = "xct:gen-prep:ui01";
const ATTESTED_FP = "fp:attested-ui-01";
const CURRENT_FP = "fp:current-ui-01";

/** Canonical required facts presentable from baseContract disclosure. */
const REQUIRED_INSPECTED_FACTS = [
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

async function openExamAndAttest() {
  fireEvent.click(await screen.findByTestId("w2-inspect-contract"));
  expect(
    await screen.findByTestId("w2-trajectory-inspection-panel"),
  ).toBeVisible();
  expect(inspectMock).not.toHaveBeenCalled();
  fireEvent.click(screen.getByTestId("w2-trajectory-attest"));
  await waitFor(() => expect(inspectMock).toHaveBeenCalled());
}

function baseContract(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: CONTRACT_ID,
    version: 1,
    status: "confirmation_required",
    action: "product:workspace.generalist.apply",
    target: "product:project-workspace",
    scope: "Interface du projet — mission générique bornée",
    requiredAuthority: "N1",
    constraints: [
      "MATERIALITY:NON_STRUCTURAL",
      "EFFECT_CLASS:generate-temporary-artifact",
      "NO_CURSOR_REAL",
      "NO_ATTEMPT",
    ],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    requiredCapabilities: ["cap:product-temp-artifact"],
    reversibility: "reversible",
    semanticFingerprint: CURRENT_FP,
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N1",
    inspectionDisclosure: {
      action: "product:workspace.generalist.apply",
      technicalTarget: "product:project-workspace",
      scope: "Interface du projet — mission générique bornée",
      targetRepositoryRef: "acme/p6-ui",
      targetPath: "projects/demo/app/filter.ts",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: [],
      createOrModify: true,
      noDelete: true,
      objective: "Réorganiser les fichiers demo",
      artifactType: null,
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: ["projects/demo/app/filter.ts"],
      evidenceRequirements: [],
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-temp-artifact"],
      constraints: ["MATERIALITY:NON_STRUCTURAL", "NO_CURSOR_REAL"],
      stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
      reversibility: "reversible",
      contractVersion: 1,
      executionContractId: CONTRACT_ID,
      semanticFingerprint: CURRENT_FP,
      disclosureComplete: true,
      incompletenessCode: null,
    },
    ...overrides,
  };
}

function inspectionDto(overrides: Record<string, unknown> = {}) {
  return {
    executionContractId: CONTRACT_ID,
    contractVersion: 1,
    semanticFingerprint: CURRENT_FP,
    attestedSemanticFingerprint: ATTESTED_FP,
    statusLabel: "INSPECTÉ" as const,
    inspectionSufficient: true,
    attestationRef: "att:ui-01",
    attestedVersion: 1,
    staleAttestationRef: null,
    reinspectionRequired: false,
    reason: "inspected" as const,
    grantsAuthority: false,
    ...overrides,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  inspectMock.mockReset();
  authorizeMock.mockReset();
  confirmMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();
  reconcileMock.mockReset();

  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  reconcileMock.mockResolvedValue({
    ok: true,
    projection: {
      stage: "PRE_EXECUTION",
      attemptId: null,
      attemptStatus: null,
    },
  });
});

describe("P6 Closure Regularization — TrajectorySurface consent UI", () => {
  it("U01–U12 — inspect then Exécuter binds attested version/fp; AUTHORIZED ≠ EXECUTED; 0 Attempt", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        attestedSemanticFingerprint: null,
        reason: "no_attestation",
      }),
      requiredInspectedFacts: [...REQUIRED_INSPECTED_FACTS],
    });

    inspectMock.mockResolvedValue({
      ok: true,
      ...inspectionDto(),
    });
    confirmMock.mockResolvedValue({ ok: true });
    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: CONTRACT_ID,
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ",
      reasonCode: "authorized",
      reasonText: "Autorisation vérifiée.",
      nextAction: "Lancer uniquement si éligible.",
      inspection: inspectionDto(),
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cfm:ui",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: ["agent:local"],
        sufficientAgentRef: "agent:local",
        reason: "ok",
        statusLabel: "EXÉCUTEUR SUFFISANT",
      },
      authorityReceiptRef: "avr:ui",
      decisionRefs: [],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionEligible: false,
      executionEligibilityReasonCode: "NO_ATTEMPT_IN_CYCLE",
      executionPerformed: false,
      attemptCreated: false,
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-inspect-contract")).toBeEnabled();

    await openExamAndAttest();
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:p6-ui",
      executionContractId: CONTRACT_ID,
      inspectedFacts: expect.arrayContaining(["action", "semanticFingerprint"]),
    });

    expect(await screen.findByTestId("w2-pilot-execute")).toBeVisible();
    expect(screen.getByTestId("w2-pilot-execute")).toHaveTextContent("Exécuter");
    expect(screen.getByTestId("w2-pilot-execute-hint").textContent).toMatch(
      /Confirmation et autorisation/,
    );

    fireEvent.click(screen.getByTestId("w2-pilot-execute"));

    await waitFor(() => expect(confirmMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(authorizeMock).toHaveBeenCalledTimes(1));

    expect(authorizeMock.mock.calls[0]![0]).toEqual({
      projectId: "prj:p6-ui",
      executionContractId: CONTRACT_ID,
      expectedVersion: 1,
      expectedSemanticFingerprint: ATTESTED_FP,
    });

    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    const outcome = screen.getByTestId("w2-authorization-outcome");
    expect(outcome).toHaveAttribute("data-outcome", "AUTHORIZED");
    expect(outcome).toHaveAttribute("data-execution-eligible", "false");
    expect(outcome).toHaveTextContent(/Autorisation vérifiée/);
    // AUTHORIZED ≠ EXECUTED: no launch CTA when ineligible
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    expect(reconcileMock).not.toHaveBeenCalled();
    expect(authorizeMock.mock.calls[0]![0].expectedSemanticFingerprint).not.toBe(
      "deadbeef",
    );
  });

  it("U13/U14 — authorize CTA refuses when action returns fingerprint mismatch", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-adv",
      contract: baseContract(),
      inspection: inspectionDto(),
    });

    authorizeMock.mockResolvedValue({
      ok: false,
      code: "FINGERPRINT_MISMATCH",
      message:
        "Empreinte sémantique différente du contrat inspecté — réinspection requise.",
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="legacy_cta"
        projectId="prj:p6-ui-adv"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));

    await waitFor(() => expect(authorizeMock).toHaveBeenCalledTimes(1));
    expect(authorizeMock.mock.calls[0]![0]).toMatchObject({
      projectId: "prj:p6-ui-adv",
      executionContractId: CONTRACT_ID,
      expectedVersion: 1,
      expectedSemanticFingerprint: ATTESTED_FP,
    });
    expect(await screen.findByText(/Empreinte sémantique différente/i)).toBeVisible();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("U17 — Exécuter never auto-inspects; open+attest then Exécuter binds returned attestation", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-insp",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        attestedSemanticFingerprint: null,
        reason: "no_attestation",
      }),
      requiredInspectedFacts: [...REQUIRED_INSPECTED_FACTS],
    });

    inspectMock.mockResolvedValue({
      ok: true,
      ...inspectionDto({
        attestedVersion: 1,
        attestedSemanticFingerprint: "fp:from-inspect-return",
      }),
    });
    confirmMock.mockResolvedValue({ ok: true });
    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: CONTRACT_ID,
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ",
      reasonCode: "authorized",
      reasonText: "ok",
      nextAction: "stop",
      inspection: inspectionDto({
        attestedSemanticFingerprint: "fp:from-inspect-return",
      }),
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cfm:x",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: [],
        sufficientAgentRef: "a",
        reason: "ok",
        statusLabel: "OK",
      },
      authorityReceiptRef: "avr:x",
      decisionRefs: [],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionEligible: false,
      executionEligibilityReasonCode: "NO_ATTEMPT",
      executionPerformed: false,
      attemptCreated: false,
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui-insp"
      />,
    );

    // Pass04 — without attestation, Exécuter zone stays hidden; open does not write.
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-pilot-execute")).toBeNull();
    await openExamAndAttest();
    expect(inspectMock.mock.calls[0]![0]).toMatchObject({
      inspectedFacts: expect.arrayContaining(["action"]),
    });
    expect(await screen.findByTestId("w2-pilot-execute")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-pilot-execute"));

    await waitFor(() => expect(authorizeMock).toHaveBeenCalled());
    expect(authorizeMock.mock.calls[0]![0].expectedSemanticFingerprint).toBe(
      "fp:from-inspect-return",
    );
    expect(reconcileMock).not.toHaveBeenCalled();
  });

  it("U19 — prepared contract alone does not auto-launch", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:continuity:ui-prep",
      contract: baseContract(),
      inspection: inspectionDto({
        inspectionSufficient: false,
        statusLabel: "NON INSPECTÉ",
        attestationRef: null,
        attestedVersion: null,
        reason: "no_attestation",
      }),
    });

    render(
      <TrajectorySurface
        decisionWorkflowMode="chat_first"
        projectId="prj:p6-ui-prep"
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(confirmMock).not.toHaveBeenCalled();
    expect(reconcileMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});
