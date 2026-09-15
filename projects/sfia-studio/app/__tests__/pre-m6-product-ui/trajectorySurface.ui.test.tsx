/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  prepareM3Mock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readActiveDecisionSubjectMock,
  readPreCycleMock,
  readApprovalMock,
  prepareCycleMock,
  readPreparedCycleMock,
  startPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  prepareM3Mock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  prepareCycleMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
  startPreparedCycleMock: vi.fn(),
}));

/**
 * JOURNEY-INTEGRITY Lot A-B — the Proposal-backed PREPARE routes the very same
 * application entrypoint the AP23 application-path proof exercises
 * (productProofJourneyIntegrity.applicationPath.d0.test.ts).
 */
vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPrepareM3Action: (...args: unknown[]) =>
    prepareM3Mock(...args),
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
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: (...args: unknown[]) =>
    prepareCycleMock(...args),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    startPreparedCycleMock(...args),
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
  prepareM3Mock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  prepareCycleMock.mockReset();
  readPreparedCycleMock.mockReset();
  startPreparedCycleMock.mockReset();
  readActiveDecisionSubjectMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:test-active",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:test-active",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("W2 TrajectorySurface", () => {
  it("CORR-PROOF-11 — amend decision hides prepare; shows next-action", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-amend",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:amend",
          label: "Amender le sujet avant d'engager",
          intent: "Modifier",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:amend",
        selectedOptionRef: "opt:proposal-subject:amend",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-amend",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-proposal-pursue",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId: "prop:f2:ui-pursue",
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:proposal-subject:pursue",
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:proposal-subject:pursue",
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:pursue",
        selectedOptionRef: "opt:proposal-subject:pursue",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:ui-pursue",
      },
      trajectory: null,
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
  });
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

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
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
    expect(proposeMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      proposalId: null,
    });
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
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
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

    // Generic ProjectTrajectory decision — no sealed Proposal operation, so the
    // legacy sandbox qualification selector still owns the PREPARE affordance.
    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
      target: { value: "generate-temporary-artifact" },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(prepareM3Mock).not.toHaveBeenCalled();
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

describe("D-GF-START-01 TrajectorySurface prepare/start CTAs", () => {
  it("shows Préparer le cycle after greenfield decided with no prepared cycle", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface projectId="prj:gf-prep" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-cycle")).toHaveTextContent(
      "Préparer le cycle",
    );
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("hides Préparer le cycle when prepareBlockedReason is set", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui-blocked",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui-blocked",
        targetCycleTypeId: "cyc:functional-design",
        catalogLabel: "Conception fonctionnelle",
        completedMatchingCycle: true,
        prepareBlockedReason: "cycle_type_already_completed",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    render(<TrajectorySurface projectId="prj:gf-prep-blocked" />);
    expect(await screen.findByTestId("pre-cycle-decided-trajectory")).toBeVisible();
    expect(screen.getByTestId("pre-cycle-prepare-blocked")).toBeVisible();
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
    expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
  });

  it("shows profile + Démarrer le cadrage when prepared; clears CTAs after active", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: null,
    });
    readPreparedCycleMock.mockResolvedValue({
      ok: true,
      prepared: {
        cycleInstanceId: "cyc:trj-prepared",
        cycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
        profile: "Light",
        status: "acknowledged",
        trajectoryId: "trj:gf-ui",
        trajectoryVersion: 1,
        trajectoryStepId: "stp:1",
        ckcResolutionRef: "ckc:m2-x",
        qualificationSignals: null,
        isActive: false,
      },
    });

    render(<TrajectorySurface projectId="prj:gf-start" />);
    expect(await screen.findByTestId("pre-cycle-prepared-cycle")).toHaveTextContent(
      "profil Light",
    );
    expect(screen.getByTestId("pre-cycle-start-cycle")).toHaveTextContent(
      "Démarrer le cadrage",
    );
    expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();

    startPreparedCycleMock.mockResolvedValue({
      ok: true,
      cycleInstanceId: "cyc:trj-prepared",
      catalogLabel: "Cadrage",
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    fireEvent.click(screen.getByTestId("pre-cycle-start-cycle"));

    await waitFor(() => {
      expect(startPreparedCycleMock).toHaveBeenCalled();
    });

    // After START refresh: active cycle → no prepare/start CTAs
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cyc:trj-prepared",
      hasCurrentNextCycleRecommendation: false,
    });
    readApprovalMock.mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: "trj:gf-ui",
        version: 1,
        status: "validated",
        decidedByDecisionRef: "dec:gf-ui",
        targetCycleTypeId: "cyc:framing",
        catalogLabel: "Cadrage",
      },
      activeCycleInstanceId: "cyc:trj-prepared",
    });
    readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });

    // Re-render via durableRefreshSignal path: remount
    cleanup();
    render(<TrajectorySurface projectId="prj:gf-start" />);
    await waitFor(() => {
      expect(screen.queryByTestId("pre-cycle-prepare-cycle")).toBeNull();
      expect(screen.queryByTestId("pre-cycle-start-cycle")).toBeNull();
    });
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
  });
});

describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
  it("U01 — multiple pending: ambiguous title, no CTAs, no first-id arbitration", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Plusieurs demandes sont en attente. Studio ne peut pas déterminer laquelle remplacer sans votre choix. Aucune action ne sera exécutée.",
      proposalIds: ["prop:a", "prop:b"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:ambig"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.getByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Plusieurs demandes sont en attente",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:a",
    );
    expect(screen.getByTestId("w2-technical-details")).toHaveTextContent(
      "prop:b",
    );
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
    expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(reformulate).not.toHaveBeenCalled();
  });

  it("U02 — single recoverable: Proposition à instruire + instruct CTA", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Une proposition attend encore votre instruction. Examinez ses options pour continuer.",
      proposalIds: ["prop:solo"],
      recoverableProposalIds: ["prop:solo"],
    });

    render(<TrajectorySurface projectId="prj:recoverable" />);

    expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Proposition à instruire",
    );
    expect(screen.getByTestId("w2-instruct-recoverable-options")).toBeVisible();
    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    const body = screen.getByTestId("w2-pending-reinstruction-body").textContent ?? "";
    expect(body).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
  });

  it("U03 — single non-recoverable: Reformulez + sole ID callback", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:lost-only"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:lost"
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
      "Reformulez votre demande",
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).toHaveBeenCalledTimes(1);
    expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
  });

  it("U04 — primary pending copy excludes engine jargon", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:x"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface projectId="prj:jargon" />);
    const body = (await screen.findByTestId("w2-pending-reinstruction-body"))
      .textContent ?? "";
    expect(body).not.toMatch(/fallback/i);
    expect(body).not.toMatch(/process-local/i);
    expect(body).not.toMatch(/ProjectTrajectory/i);
    expect(body).not.toMatch(/\bpending\b/i);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:pending-owns"],
      recoverableProposalIds: [],
    });

    render(<TrajectorySurface projectId="prj:pending-cta" />);
    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
  });

  it("JOURNEY-INTEGRITY — ownership callback: CASE A unrecoverable → OWNED", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
      proposalIds: ["prop:case-a"],
      recoverableProposalIds: [],
    });

    render(
      <TrajectorySurface
        projectId="prj:own-a"
        onProposalSubjectOwnershipChange={onOwnership}
        onRequestReformulateWithNora={vi.fn()}
      />,
    );
    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("OWNED");
    });
    expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
  });

  it("JOURNEY-INTEGRITY — ownership callback: kind none → NONE", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    render(
      <TrajectorySurface
        projectId="prj:own-none"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("NONE");
    });
  });

  it("JOURNEY-INTEGRITY — ownership callback: read error → UNKNOWN fail-closed", async () => {
    const onOwnership = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "READ_FAILED",
      message: "Decision Subject illisible",
    });

    render(
      <TrajectorySurface
        projectId="prj:own-err"
        onProposalSubjectOwnershipChange={onOwnership}
      />,
    );
    await waitFor(() => {
      expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
    });
    expect(onOwnership).not.toHaveBeenCalledWith("NONE");
  });
});

describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
  const PROPOSAL_OPTION_SET = {
    ok: true,
    optionSetRef: "optset:cta-exclusivity",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "proposal",
    proposalId: "prop:f2:cta",
    promotesProjectTrajectory: false,
    options: [
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:pursue",
        label: "Poursuivre le sujet proposé",
        intent: "Continuer",
        impacts: [],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION",
        optionRef: "opt:proposal-subject:amend",
        label: "Amender le sujet avant d'engager",
        intent: "Modifier",
        impacts: [],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:proposal-subject:pursue",
      rationale: "Continuer.",
      isHumanDecision: false,
      ckcAttribution: false,
    },
    epistemicRefs: [],
    proposedTrajectory: null,
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  } as const;

  it("an OptionSet awaiting the decision hides the generic instruct CTA", async () => {
    proposeMock.mockResolvedValue(PROPOSAL_OPTION_SET);

    render(<TrajectorySurface projectId="prj:cta-optionset" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");

    // The presented subject owns the next action until the Pilote decides.
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    const surface = screen.getByTestId("w2-trajectory-panel").textContent ?? "";
    expect(surface).not.toMatch(/Réinstruire/i);
    expect(proposeMock).toHaveBeenCalledTimes(1);
  });

  it("no decision subject at all: the generic instruct CTA stays reachable", async () => {
    render(<TrajectorySurface projectId="prj:cta-none" />);

    const cta = await screen.findByTestId("w2-propose-options");
    expect(cta).toBeVisible();
    expect(cta).toHaveTextContent("Instruire les options");
    expect(screen.queryByTestId("w2-pending-reinstruction")).toBeNull();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });
});

/**
 * JOURNEY-INTEGRITY Lot A-B final — the Pilot decides the operation ONCE.
 *
 * After pursue on a Proposal decision subject the sealed DecisionBasis already
 * carries targetPath / requestedOperation, so the surface must:
 *  - offer the Proposal-backed PREPARE (never the sandbox op selector), and
 *  - send projectId + decisionId ONLY — the server re-resolves the rest from
 *    durable lineage (same contract as AP23 in
 *    __tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts).
 */
describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", () => {
  function proposalOptionSet(proposalId: string) {
    return {
      ok: true,
      optionSetRef: `optset:${proposalId}`,
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      decisionSubjectMode: "proposal",
      proposalId,
      promotesProjectTrajectory: false,
      options: [
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          label: "Poursuivre le sujet proposé",
          intent: "Continuer",
          impacts: [],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
          label: "Ne pas poursuivre / refuser",
          intent: "Refuser",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        rationale: "Continuer.",
        isHumanDecision: false,
        ckcAttribution: false,
      },
      epistemicRefs: [],
      proposedTrajectory: null,
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
      ckcCognitionCompletedBeforeMutation: true,
    };
  }

  function proposalDecision(input: {
    decisionId: string;
    proposalId: string;
    selectedOptionRef: string;
  }) {
    return {
      ok: true,
      decision: {
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-15T16:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: input.proposalId,
      },
      trajectory: null,
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    };
  }

  const M3_PREPARED = {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: "Contrat préparé.",
    ephemeralNotice: "",
    f3: {
      turnKind: "f3_m3_prepare",
      mode: "M3_PREPARE",
      decisionId: "dec:sealed-pursue",
      projectId: "prj:sealed",
      contract: {
        executionContractId: "xct:sealed-docs-write",
        version: 1,
        status: "proposed",
        action: "cursor.docs_write.apply",
        target: "docs/livrable-cycle.md",
        scope: "product:artifact-materialization",
        requiredAuthority: "N3",
        constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "sealed0fingerprint",
      },
      executionPerformed: false,
      attemptCreated: false,
      cursorReal: false,
      executionAllowed: false,
      disclosures: [],
    },
  };

  async function decidePursue(projectId: string, proposalId: string) {
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-pursue",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      }),
    );

    render(<TrajectorySurface projectId={projectId} />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
  }

  it("pursue on a sealed subject offers PREPARE without any operation re-selection", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");

    expect(screen.getByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
    // The Pilot must never qualify the operation twice.
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
  });

  it("PREPARE sends projectId + decisionId only, then maps the sealed contract", async () => {
    await decidePursue("prj:sealed", "prop:f2:sealed");

    prepareM3Mock.mockResolvedValue(M3_PREPARED);
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();

    expect(prepareM3Mock).toHaveBeenCalledTimes(1);
    expect(prepareM3Mock).toHaveBeenCalledWith({
      projectId: "prj:sealed",
      decisionId: "dec:sealed-pursue",
    });
    // Exact-shape assertion above already forbids extra keys; assert the
    // dangerous ones explicitly so a regression names itself.
    const sent = prepareM3Mock.mock.calls[0]![0] as Record<string, unknown>;
    expect(Object.keys(sent).sort()).toEqual(["decisionId", "projectId"]);
    for (const forbidden of [
      "targetPath",
      "operation",
      "qualifiedOperationKind",
      "requestedOperation",
      "authority",
      "canActAsMorris",
      "claimedAuthorityLevel",
      "real",
      "mode",
      "command",
    ]) {
      expect(sent).not.toHaveProperty(forbidden);
    }
    // The sandbox PREPARE application path was never touched.
    expect(prepareContractMock).not.toHaveBeenCalled();

    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target")).toHaveTextContent(
      "docs/livrable-cycle.md",
    );
    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:cursor.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      "xct:sealed-docs-write",
    );

    // Inspect owns the next action; PREPARE is not offered again.
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:sealed-docs-write",
      contractVersion: 1,
      semanticFingerprint: "sealed0fingerprint",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:sealed",
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
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "inspecter n'autorise pas",
    );
  });

  it("refuse on a sealed subject exposes no PREPARE path at all", async () => {
    const proposalId = "prop:f2:sealed-refuse";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    decideMock.mockResolvedValue(
      proposalDecision({
        decisionId: "dec:sealed-refuse",
        proposalId,
        selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      }),
    );

    render(<TrajectorySurface projectId="prj:sealed-refuse" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_REFUSE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    expect(screen.getByTestId("w2-refuse-next-action")).toBeVisible();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });

  it("a Proposal pursue without linked DecisionBasis fails closed (never sandbox)", async () => {
    const proposalId = "prop:f2:unlinked";
    proposeMock.mockResolvedValue(proposalOptionSet(proposalId));
    const unlinked = proposalDecision({
      decisionId: "dec:unlinked",
      proposalId,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    decideMock.mockResolvedValue({
      ...unlinked,
      decision: { ...unlinked.decision, decisionBasisLinked: false },
    });

    render(<TrajectorySurface projectId="prj:unlinked" />);
    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`));
    expect(await screen.findByTestId("w2-decision")).toBeVisible();

    // Proposal subject still owns the journey — fail closed, no sandbox fallback.
    expect(screen.getByTestId("w2-proposal-prepare-blocked")).toBeVisible();
    expect(screen.getByTestId("w2-proposal-prepare-blocked").textContent).toMatch(
      /base d.exécution exploitable/i,
    );
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(prepareContractMock).not.toHaveBeenCalled();
  });
});
