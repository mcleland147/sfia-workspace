/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
  amendMock.mockReset();
  prepareContractMock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
});

describe("W2 TrajectorySurface", () => {
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({ projectId: "prj:w2-ui" });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:w2-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
      target: { value: "generate-temporary-artifact" },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "product:temporary-local-artifact",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:product-temp-artifact",
    );
    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
      "Confirmation requise",
    );
    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
      "confirmation_required",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    // Amendment affordance appears only after sufficient inspection.
    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();

    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: true,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: false,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /réinspection requise/i,
    );
    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
      "BORNER LE SLICE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "NON INSPECTÉ",
    );
    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(amendMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      executionContractId: "xct:w2-ui",
      additionalConstraint: "BORNER LE SLICE",
    });

    // R1 — UI consumes application statusLabel (not a hardcoded false required).
    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: false,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:successor",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: true,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });
    // Re-open form by mocking a second inspect-sufficient path isn't needed —
    // call amend again via preparing another inspect cycle: force form by
    // clicking inspect mock first then amend with already-satisfied truth.
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui:amd:deadbeef",
      contractVersion: 1,
      semanticFingerprint: "fff111aaa222",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:successor",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
      "RÉINSPECTION DÉJÀ SATISFAITE",
    );
    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
      "RÉINSPECTION REQUISE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "Exécution bloquée",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
    // W3-A: BLOCKED must not expose Execute CTA.
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});
