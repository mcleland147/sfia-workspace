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
  resolveLegacyMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
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
  resolveLegacyMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  prepareCycleMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
  startPreparedCycleMock: vi.fn(),
}));

/**
 * JOURNEY-INTEGRITY Lot A-B — Proposal-backed PREPARE uses the resolved-M3
 * entrypoint (prepareAndResolve → successor), matching TrajectorySurface.
 */
vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
    prepareM3Mock(...args),
  projectAssistantResolveLegacyM3DocsWriteAction: (...args: unknown[]) =>
    resolveLegacyMock(...args),
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
  w2ReadCurrentGovernedExecutionContinuityAction: (...args: unknown[]) =>
    readGovernedExecutionContinuityMock(...args),
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
  resolveLegacyMock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  prepareCycleMock.mockReset();
  readPreparedCycleMock.mockReset();
  startPreparedCycleMock.mockReset();
  readActiveDecisionSubjectMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readGovernedExecutionContinuityMock.mockResolvedValue({
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
    // Fail-closed: Reformuler stays disabled until subject + governed EC
    // continuity both leave pending/error (continuityMutationBlocked). Title
    // can paint before EC resolves — wait for enabled, same as READY recover.
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
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

  const sealedSuccessor = {
    executionContractId: "xct:sealed-docs-write",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "product:artifact-materialization",
    requiredAuthority: "N3",
    constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
    stopConditions: ["STOP AVANT EXECUTE"],
    requiredCapabilities: ["cap:cursor.docs_write"],
    reversibility: "reversible" as const,
    semanticFingerprint: "sealed0fingerprint",
    inspectionDisclosure: {
      action: "cursor.docs_write.apply",
      technicalTarget: "workspace.isolated.docs_write",
      scope: "product:artifact-materialization",
      targetRepositoryRef: "mcleland147/sfia-workspace",
      targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
      scopeIn: ["projects/sfia-studio/.sandbox/"],
      scopeOut: ["projects/sfia-studio/app/"],
      createOrModify: true,
      noDelete: true,
      objective: "Matérialiser la note",
      artifactType: "markdown",
      artifactBrief: null,
      contentRequirements: null,
      validationExpectations: null,
      expectedOutputs: ["note markdown"],
      evidenceRequirements: ["evreq:git-working-tree"],
      requiredAuthority: "N3",
      requiredCapabilities: ["cap:cursor.docs_write"],
      constraints: ["PRODUCT_GOVERNED", "SEALED_DECISION_BASIS"],
      stopConditions: ["STOP AVANT EXECUTE"],
      reversibility: "reversible" as const,
      contractVersion: 1,
      executionContractId: "xct:sealed-docs-write",
      semanticFingerprint: "sealed0fingerprint",
      disclosureComplete: true,
      incompletenessCode: null,
    },
  };

  /** Resolved-M3 success shape consumed by TrajectorySurface (`result.f3.successor`). */
  const M3_PREPARED = {
    ok: true,
    status: "ok",
    mode: "m3_resolved_fixture",
    presentation: "unconfirmed",
    text: "Contrat résolu — confirmation requise.",
    ephemeralNotice: "",
    project: {
      projectId: "prj:sealed",
      name: "sealed",
      lpsId: "lps:sealed",
      lpsVersion: 1,
      doctrineDigest: "digest:sealed",
      activeCycleInstanceId: null,
      ckcResolutionRef: null,
    },
    f3: {
      turnKind: "f3_m3_resolved",
      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
      decisionId: "dec:sealed-pursue",
      projectId: "prj:sealed",
      prepare: {
        turnKind: "f3_m3_prepare",
        mode: "M3_PREPARE",
        decisionId: "dec:sealed-pursue",
        projectId: "prj:sealed",
        contract: { ...sealedSuccessor, status: "draft" },
        executionPerformed: false,
        attemptCreated: false,
        cursorReal: false,
        executionAllowed: false,
        disclosures: [],
      },
      original: {
        executionContractId: "xct:sealed-docs-write-prepare",
        version: 1,
        status: "draft",
        action: sealedSuccessor.action,
        target: sealedSuccessor.target,
        scope: "decision:dec:sealed-pursue",
        requiredAuthority: "N3",
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT"],
        stopConditions: ["AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible" as const,
        semanticFingerprint: "prepare0fingerprint",
      },
      successor: sealedSuccessor,
      reusedFromIdempotency: false,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
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
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target")).toHaveTextContent(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository")).toHaveTextContent(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-authority")).toHaveTextContent("N3");
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:cursor.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      "xct:sealed-docs-write",
    );

    // Pre-inspection: exact path + repo visible BEFORE Inspect click.
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();

    // Inspect owns the next action; PREPARE is not offered again.
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

  it("EC rehydration — fresh mount projects durable EC + incomplete inspection; hides instruct", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contract: {
        executionContractId: "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        version: 2,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        requiredAuthority: "MORRIS",
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp-campaign",
        effectConfirmationRequired: true,
        effectConfirmationLevel: null,
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          createOrModify: true,
          noDelete: true,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          reversibility: "reversible",
          contractVersion: 2,
          executionContractId:
            "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
          semanticFingerprint: "fp-campaign",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        contractVersion: 2,
        semanticFingerprint: "fp-campaign",
        statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: 2,
        staleAttestationRef: "insp:05042f3b6040838e",
        reinspectionRequired: true,
        reason: "inspected_facts_incomplete",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface projectId="prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6" />);

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action").textContent).toBe(
      "cursor.docs_write.apply",
    );
    expect(screen.getByTestId("w2-contract-target").textContent).toBe(
      "workspace.isolated.docs_write",
    );
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-contract-status").textContent).toMatch(
      /Confirmation requise/i,
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );
    expect(screen.getByTestId("w2-inspect-contract")).toBeVisible();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
  });

  it("D01 — legacy PREPARE_ONLY EC shows Actualiser CTA; hides generic PREPARE; rematerialize projects successor", async () => {
    const decisionId = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
    const originalId = `xct:m3:${decisionId}`;
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: decisionId,
      contract: {
        executionContractId: originalId,
        version: 3,
        status: "confirmed",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        requiredAuthority: "MORRIS",
        constraints: [
          "PREPARE_ONLY",
          "NO_CURSOR_REAL",
          "NO_ATTEMPT",
          "NO_GATE_D",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "AUTHORITY_DENIED"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "irreversible",
        semanticFingerprint: "fp-legacy",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N3",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          createOrModify: true,
          noDelete: true,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: ["cap:cursor.docs_write"],
          constraints: ["PREPARE_ONLY"],
          stopConditions: ["AUTHORITY_DENIED"],
          reversibility: "irreversible",
          contractVersion: 3,
          executionContractId: originalId,
          semanticFingerprint: "fp-legacy",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: originalId,
        contractVersion: 3,
        semanticFingerprint: "fp-legacy",
        statusLabel: "INSPECTÉ · inspecter n'autorise pas",
        inspectionSufficient: true,
        attestationRef: "insp:legacy",
        attestedVersion: 3,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: null,
        grantsAuthority: false,
      },
    });

    resolveLegacyMock.mockResolvedValue({
      ok: true,
      status: "ok",
      mode: "m3_legacy_docs_write_resolved",
      presentation: "unconfirmed",
      text: "ok",
      project: { projectId: "prj:legacy" },
      ephemeralNotice: "notice",
      f3: {
        turnKind: "f3_m3_legacy_docs_write_resolved",
        mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
        decisionId,
        projectId: "prj:legacy",
        original: {
          executionContractId: originalId,
          version: 3,
          status: "superseded",
        },
        successor: {
          executionContractId: `xct:m3-res:${decisionId}`,
          version: 1,
          status: "confirmation_required",
          action: "cursor.docs_write.apply",
          target: "workspace.isolated.docs_write",
          scope: "studio.gcec.docs_write",
          requiredAuthority: "MORRIS",
          constraints: ["BOUNDED DOCS-WRITE", "GATE D REQUIRED"],
          stopConditions: ["GATE_D_REQUIRED"],
          requiredCapabilities: ["cap:cursor.docs_write"],
          reversibility: "reversible",
          supersedesExecutionContractId: originalId,
          supersessionReason: "bounded docs-write",
          semanticFingerprint: "fp-successor",
          evidenceRequirements: [],
          inspectionDisclosure: {
            action: "cursor.docs_write.apply",
            technicalTarget: "workspace.isolated.docs_write",
            scope: "studio.gcec.docs_write",
            targetRepositoryRef: "mcleland147/sfia-workspace",
            targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
            scopeIn: ["projects/sfia-studio/.sandbox"],
            scopeOut: [],
            createOrModify: true,
            noDelete: true,
            objective: null,
            artifactType: null,
            artifactBrief: null,
            contentRequirements: null,
            validationExpectations: null,
            expectedOutputs: null,
            evidenceRequirements: [],
            requiredAuthority: "MORRIS",
            requiredCapabilities: ["cap:cursor.docs_write"],
            constraints: ["BOUNDED DOCS-WRITE"],
            stopConditions: ["GATE_D_REQUIRED"],
            reversibility: "reversible",
            contractVersion: 1,
            executionContractId: `xct:m3-res:${decisionId}`,
            semanticFingerprint: "fp-successor",
            disclosureComplete: true,
            incompletenessCode: null,
          },
        },
        reusedFromIdempotency: false,
        executionPerformed: false,
        attemptCreated: false,
        confirmationRequired: true,
        realExecution: false,
        disclosures: [],
      },
    });

    render(<TrajectorySurface projectId="prj:legacy-remat" />);
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
    expect(
      await screen.findByTestId("w2-legacy-docs-write-rematerialize"),
    ).toBeVisible();
    expect(
      screen.getByTestId("w2-rematerialize-legacy-docs-write"),
    ).toBeVisible();

    fireEvent.click(screen.getByTestId("w2-rematerialize-legacy-docs-write"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /CONTRAT ACTUALISÉ/i,
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "studio.gcec.docs_write",
    );
    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
      `xct:m3-res:${decisionId}`,
    );
    expect(screen.queryByTestId("w2-legacy-docs-write-rematerialize")).toBeNull();
    expect(resolveLegacyMock).toHaveBeenCalledWith({
      projectId: "prj:legacy-remat",
      decisionId,
    });
    expect(prepareM3Mock).not.toHaveBeenCalled();
  });

  it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
    let resolveContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValue(
      new Promise((resolve) => {
        resolveContinuity = resolve;
      }),
    );

    render(<TrajectorySurface projectId="prj:pending-continuity" />);
    await waitFor(() => {
      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();

    resolveContinuity({ ok: true, kind: "none" });
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — continuity error/ambiguity hides instruct and shows fail-closed", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: false,
      code: "EXECUTION_CONTINUITY_AMBIGUOUS",
      message:
        "Plusieurs contrats d'exécution courants non terminés — continuation refusée.",
    });

    render(<TrajectorySurface projectId="prj:ambiguous-continuity" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Plusieurs contrats/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-contract")).toBeNull();
  });

  it("EC rehydration — kind none + subject none still shows Instruire after both resolve", async () => {
    render(<TrajectorySurface projectId="prj:none-none" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("EC rehydration — bound subject + active EC conflict fails closed", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: {
        optionSetRef: "optset:conflict",
        cycleTypeId: "cyc:framing",
        recommendedProfile: "Light",
        decisionSubjectMode: "proposal",
        proposalId: "prop:f2:conflict",
        promotesProjectTrajectory: false,
        options: [
          {
            kind: "OPTION",
            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
            label: "Poursuivre",
            intent: "Poursuivre le sujet",
            impacts: ["HumanDecision"],
            recommended: true,
          },
        ],
        recommendation: {
          kind: "RECOMMENDATION",
          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          rationale: "test",
        },
        epistemicRefs: [],
        proposedTrajectory: null,
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
        ckcCognitionCompletedBeforeMutation: true,
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:conflict",
      contract: {
        executionContractId: "xct:conflict",
        version: 1,
        status: "confirmation_required",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "s",
        requiredAuthority: "MORRIS",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: [],
        reversibility: "reversible",
        semanticFingerprint: "fp",
        inspectionDisclosure: {
          action: "cursor.docs_write.apply",
          technicalTarget: "workspace.isolated.docs_write",
          scope: "s",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
          scopeIn: null,
          scopeOut: null,
          createOrModify: null,
          noDelete: null,
          objective: null,
          artifactType: null,
          artifactBrief: null,
          contentRequirements: null,
          validationExpectations: null,
          expectedOutputs: null,
          evidenceRequirements: [],
          requiredAuthority: "MORRIS",
          requiredCapabilities: [],
          constraints: [],
          stopConditions: [],
          reversibility: "reversible",
          contractVersion: 1,
          executionContractId: "xct:conflict",
          semanticFingerprint: "fp",
          disclosureComplete: true,
          incompletenessCode: null,
        },
      },
      inspection: {
        executionContractId: "xct:conflict",
        contractVersion: 1,
        semanticFingerprint: "fp",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface projectId="prj:conflict" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(/Contradiction/);
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
  });

  it("EC rehydration micro — subject ERROR does not invoke governed continuity or expose EC actions", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    render(<TrajectorySurface projectId="prj:subject-error-blocks-ec" />);

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });

  it("EC rehydration micro — refresh subject pending disables governed EC mutating actions", async () => {
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-inspect-contract")).toBeEnabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeEnabled();

    let resolveSubject: (value: unknown) => void = () => {};
    readActiveDecisionSubjectMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubject = resolve;
      }),
    );

    rerender(
      <TrajectorySurface
        projectId="prj:subject-pending-blocks-ec"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
    });

    expect(screen.getByTestId("w2-inspect-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.getByTestId("w2-authorize-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();

    resolveSubject({ ok: true, kind: "none" });
  });

  it("EC rehydration micro — active then authoritative none clears stale EC card", async () => {
    readGovernedExecutionContinuityMock
      .mockResolvedValueOnce(campaignActiveContinuityResult())
      .mockResolvedValue({ ok: true, kind: "none" });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:active-then-none"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );

    rerender(
      <TrajectorySurface
        projectId="prj:active-then-none"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-contract")).toBeNull();
    });
    expect(screen.queryByTestId("w2-contract-exact-target")).toBeNull();
    expect(screen.queryByTestId("w2-inspection-state")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w2-governed-execute")).toBeNull();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
  });

  it("final fail-closed — stale OptionSet + subject ERROR blocks Decision mutation", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-opt"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:stale-optionset-subject-error"
        durableRefreshSignal={0}
      />,
    );

    const decideBtn = await screen.findByTestId(
      `w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`,
    );
    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    expect(decideBtn).toBeInTheDocument();

    const continuityCallsBeforeRefresh =
      readGovernedExecutionContinuityMock.mock.calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:stale-optionset-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    // Stale OptionSet may remain visible informationally.
    expect(screen.getByTestId("w2-options")).toBeVisible();
    expect(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeDisabled();
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
    // No additional governed continuity read while subject errored.
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsBeforeRefresh,
    );
  });

  it("final fail-closed — stale Decision + subject ERROR blocks Proposal PREPARE", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-dec"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-prop:stale-prepare",
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-16T12:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:stale-dec",
      },
      trajectory: null,
      livingProjectStateVersion: 4,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:stale-decision-prepare-block"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:stale-decision-prepare-block"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — bound subject + EC continuity pending blocks Decision", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:ec-pending"),
    });
    let resolveContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValue(
      new Promise((resolve) => {
        resolveContinuity = resolve;
      }),
    );

    render(<TrajectorySurface projectId="prj:bound-ec-pending" />);

    const decideBtn = await screen.findByTestId(
      `w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`,
    );
    expect(decideBtn).toBeDisabled();
    fireEvent.click(decideBtn);
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();

    resolveContinuity({ ok: true, kind: "none" });

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
  });

  it("final fail-closed — stale governed ACTIVE result ignored after newer subject ERROR", async () => {
    let resolveStaleContinuity: (value: unknown) => void = () => {};
    readGovernedExecutionContinuityMock.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveStaleContinuity = resolve;
      }),
    );

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:stale-ec-after-subject-error"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(readGovernedExecutionContinuityMock).toHaveBeenCalledTimes(1);
    });
    const continuityCallsAfterFirst = readGovernedExecutionContinuityMock.mock
      .calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:stale-ec-after-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    // Refresh must NOT start another governed read before subject is ready.
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsAfterFirst,
    );

    resolveStaleContinuity(campaignActiveContinuityResult());

    await waitFor(() => {
      expect(screen.queryByTestId("w2-contract")).toBeNull();
    });
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(inspectMock).not.toHaveBeenCalled();
    expect(authorizeMock).not.toHaveBeenCalled();
  });

  it("final fail-closed — later READY pass recovers durable EC after subject ERROR", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:recover-after-subject-error"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue(
      campaignActiveContinuityResult(),
    );

    rerender(
      <TrajectorySurface
        projectId="prj:recover-after-subject-error"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-exact-target").textContent).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(screen.getByTestId("w2-contract-repository").textContent).toBe(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("w2-inspection-state").textContent).toMatch(
      /RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS/,
    );
    expect(screen.getByTestId("w2-inspect-contract")).toBeEnabled();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — stale lost Reformuler disabled while subject refresh pending", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-pending"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:stale-reformulate-pending"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    const reformulateBtn = await screen.findByTestId("w2-reformulate-with-nora");
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    expect(reformulateBtn).toBeInTheDocument();

    let resolveSubject: (value: unknown) => void = () => {};
    readActiveDecisionSubjectMock.mockReturnValue(
      new Promise((resolve) => {
        resolveSubject = resolve;
      }),
    );

    rerender(
      <TrajectorySurface
        projectId="prj:stale-reformulate-pending"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    await waitFor(() => {
      expect(readActiveDecisionSubjectMock.mock.calls.length).toBeGreaterThan(1);
    });

    expect(screen.getByTestId("w2-reformulate-with-nora")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();

    resolveSubject({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-pending"],
      recoverableProposalIds: [],
    });
  });

  it("final fail-closed — stale lost Reformuler disabled on subject ERROR", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:lost-error"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:stale-reformulate-error"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    const continuityCallsBeforeRefresh =
      readGovernedExecutionContinuityMock.mock.calls.length;

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:stale-reformulate-error"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );
    expect(screen.getByTestId("w2-reformulate-with-nora")).toBeDisabled();
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).not.toHaveBeenCalled();
    expect(readGovernedExecutionContinuityMock.mock.calls.length).toBe(
      continuityCallsBeforeRefresh,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w2-confirm-contract")).toBeNull();
    expect(screen.queryByTestId("w2-authorize-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("final fail-closed — latest READY lost pass re-enables Reformuler", async () => {
    const reformulate = vi.fn();
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:reformulate-recover"
        durableRefreshSignal={0}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(readGovernedExecutionContinuityMock).not.toHaveBeenCalled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message:
        "La demande précédente n'est plus disponible. Reformulez avec Nora.",
      proposalIds: ["prop:f2:current-lost"],
      recoverableProposalIds: [],
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:reformulate-recover"
        durableRefreshSignal={1}
        onRequestReformulateWithNora={reformulate}
      />,
    );

    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByTestId("w2-reformulate-with-nora")).toBeEnabled();
    });
    fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
    expect(reformulate).toHaveBeenCalledTimes(1);
    expect(reformulate).toHaveBeenCalledWith("prop:f2:current-lost");
  });

  it("subject-none — stale Proposal OptionSet invalidated before HumanDecision", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:stale-none"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-none-clears-proposal"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    expect(screen.queryByTestId("w2-decision")).toBeNull();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:subject-none-clears-proposal"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-options")).toBeNull();
    });
    expect(
      screen.queryByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
    expect(screen.queryByTestId("w2-inspect-contract")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });

  it("subject-none — generic ProjectTrajectory OptionSet preserved", async () => {
    proposeMock.mockResolvedValue(genericTrajectoryOptionSet());
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-none-keeps-generic"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
      ).toBeEnabled();
    });

    rerender(
      <TrajectorySurface
        projectId="prj:subject-none-keeps-generic"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-options")).toBeVisible();
    await waitFor(() => {
      expect(
        screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
      ).toBeEnabled();
    });
    expect(proposeMock).toHaveBeenCalledTimes(1);
  });

  it("subject-none — recorded HumanDecision + Proposal PREPARE preserved", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: boundProposalOptionSet("prop:f2:decided-none"),
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-prop:decided-none",
        selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-16T14:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
        proposalId: "prop:f2:decided-none",
      },
      trajectory: null,
      livingProjectStateVersion: 5,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-none-keeps-decision"
        durableRefreshSignal={0}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
      ).toBeEnabled();
    });
    fireEvent.click(
      screen.getByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:subject-none-keeps-decision"
        durableRefreshSignal={1}
      />,
    );

    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decided-option")).toBeVisible();
    expect(screen.getByTestId("w2-decided-option").textContent?.length).toBeGreaterThan(0);
    await waitFor(() => {
      expect(screen.queryByTestId("w2-options")).toBeNull();
    });
    expect(await screen.findByTestId("w2-proposal-backed-prepare")).toBeVisible();
    await waitFor(() => {
      expect(screen.getByTestId("w2-prepare-contract")).toBeEnabled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(decideMock).toHaveBeenCalledTimes(1);
  });

  it("subject-none — successful latest none clears stale subject-read error", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: false,
      code: "SUBJECT_READ_FAILED",
      message: "Lecture du sujet de décision impossible.",
    });

    const { rerender } = render(
      <TrajectorySurface
        projectId="prj:subject-none-clears-error"
        durableRefreshSignal={0}
      />,
    );

    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /sujet de décision impossible/,
    );

    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });

    rerender(
      <TrajectorySurface
        projectId="prj:subject-none-clears-error"
        durableRefreshSignal={1}
      />,
    );

    await waitFor(() => {
      expect(screen.queryByTestId("w2-error")).toBeNull();
    });
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    expect(screen.queryByTestId("w2-options")).toBeNull();
    expect(decideMock).not.toHaveBeenCalled();
    expect(prepareM3Mock).not.toHaveBeenCalled();
    expect(inspectMock).not.toHaveBeenCalled();
  });
});

function boundProposalOptionSet(proposalId: string) {
  return {
    optionSetRef: `optset:${proposalId}`,
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "proposal" as const,
    proposalId,
    promotesProjectTrajectory: false,
    options: [
      {
        kind: "OPTION" as const,
        optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
        label: "Poursuivre le sujet proposé",
        intent: "Continuer",
        impacts: ["HumanDecision"],
        recommended: true,
      },
      {
        kind: "OPTION" as const,
        optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
        label: "Ne pas poursuivre / refuser",
        intent: "Refuser",
        impacts: [],
        recommended: false,
      },
    ],
    recommendation: {
      kind: "RECOMMENDATION" as const,
      recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      rationale: "Continuer.",
    },
    epistemicRefs: [],
    proposedTrajectory: null,
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  };
}

function genericTrajectoryOptionSet() {
  return {
    ok: true as const,
    optionSetRef: "optset:w2-generic-trajectory",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    decisionSubjectMode: "trajectory" as const,
    proposalId: null,
    promotesProjectTrajectory: true,
    options: [
      {
        kind: "OPTION" as const,
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
      trajectoryId: "trj:w2-generic",
      version: 1,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
  };
}

function campaignActiveContinuityResult() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
    contract: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      version: 2,
      status: "confirmation_required",
      action: "cursor.docs_write.apply",
      target: "workspace.isolated.docs_write",
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
      requiredAuthority: "MORRIS",
      constraints: ["PREPARE_ONLY"],
      stopConditions: ["AUTHORITY_DENIED"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      reversibility: "reversible",
      semanticFingerprint: "fp-campaign",
      effectConfirmationRequired: true,
      effectConfirmationLevel: null,
      inspectionDisclosure: {
        action: "cursor.docs_write.apply",
        technicalTarget: "workspace.isolated.docs_write",
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        targetRepositoryRef: "mcleland147/sfia-workspace",
        targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        scopeIn: ["projects/sfia-studio/.sandbox"],
        scopeOut: [],
        createOrModify: true,
        noDelete: true,
        objective: null,
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: [
          "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        ],
        evidenceRequirements: [],
        requiredAuthority: "MORRIS",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: ["PREPARE_ONLY"],
        stopConditions: ["AUTHORITY_DENIED"],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId:
          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
        semanticFingerprint: "fp-campaign",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId:
        "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
      contractVersion: 2,
      semanticFingerprint: "fp-campaign",
      statusLabel: "RÉINSPECTION REQUISE — DÉTAILS INCOMPLETS",
      inspectionSufficient: false,
      attestationRef: null,
      attestedVersion: 2,
      staleAttestationRef: "insp:05042f3b6040838e",
      reinspectionRequired: true,
      reason: "inspected_facts_incomplete",
      grantsAuthority: false,
    },
  };
}
