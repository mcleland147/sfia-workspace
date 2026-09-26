/**
 * CR-PCONT-05 — TrajectorySurface post-execution recovery OptionSet preserves
 * Attempt / ProductOutcome / postEvidence and does not raise a false Proposal
 * conflict for project_trajectory. True Proposal + current EC stays fail-closed.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
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
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: (...args: unknown[]) => confirmMock(...args),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...args: unknown[]) =>
    materializeMock(...args),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
    readActiveDecisionSubjectMock(...args),
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
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...args: unknown[]
  ) => readApprovalMock(...args),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...args: unknown[]) =>
    readPreparedCycleMock(...args),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const ATTEMPT_ID = "xat:pcont-ui:succeeded";

function recoveryTrajectoryOptionSet() {
  return {
    ok: true as const,
    optionSetRef: "optset:w2-recovery-ui",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    decisionSubjectMode: "project_trajectory" as const,
    proposalId: null,
    promotesProjectTrajectory: true,
    options: [
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:governed-gated",
        label: "Préparer une nouvelle tentative gouvernée",
        intent: "À partir du STOP durable / arrêt gouverné",
        impacts: ["Attempt succeeded: xat:pcont-ui:succeeded", "productOutcome: UNCLAIMED"],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:bounded-direct",
        label: "Replanifier ou suspendre sans relance immédiate",
        intent: "Conserver le succès technique",
        impacts: ["Pas de relance Execute"],
        reservations: [],
        steps: [],
      },
      {
        kind: "OPTION" as const,
        optionRef: "opt:trajectory:clarify-first",
        label: "Diagnostiquer / clarifier avant nouvelle tentative",
        intent: "Approfondir le diagnostic",
        impacts: [],
        reservations: [],
        steps: [],
      },
    ],
    recommendation: {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: "opt:trajectory:clarify-first",
      rationale: "Épisode post-Evidence UNCLAIMED — diagnostiquer.",
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
    },
    epistemicRefs: [],
    proposedTrajectory: {
      trajectoryId: "trj:pcont-ui",
      version: 2,
      status: "candidate",
      statusLabel: "TRAJECTOIRE PROPOSÉE",
      isCurrent: false,
    },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
  };
}

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:pcont-ui",
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: "cycinst:pcont-ui",
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
});

describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
  it("preserves Attempt/ProductOutcome/postEvidence after project_trajectory proposeOptions; no false Proposal conflict", async () => {
    proposeMock
      .mockResolvedValueOnce({
        ok: true,
        optionSetRef: "optset:w2-framing",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        decisionSubjectMode: "project_trajectory",
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
          trajectoryId: "trj:pcont-ui",
          version: 1,
          status: "candidate",
          statusLabel: "TRAJECTOIRE PROPOSÉE",
          isCurrent: false,
        },
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
      })
      .mockResolvedValueOnce(recoveryTrajectoryOptionSet());

    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:pcont-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-09-20T04:00:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:pcont-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:pcont-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
      promotesProjectTrajectory: true,
      decisionSubjectMode: "project_trajectory",
    });

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:pcont-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:pcont-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "fp:pcont-ui",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      semanticFingerprint: "fp:pcont-ui",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:pcont-ui",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });

    confirmMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      status: "confirmed",
    });

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      outcome: "AUTHORIZED",
      outcomeLabel: "AUTORISÉ — EXÉCUTION ÉLIGIBLE",
      reasonCode: "authorized",
      reasonText: "Autorisé.",
      nextAction: "Exécuter",
      executionEligible: true,
      executionEligibilityReasonCode: "eligible",
      inspection: {
        executionContractId: "xct:pcont-ui",
        contractVersion: 1,
        semanticFingerprint: "fp:pcont-ui",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:pcont-ui",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: true,
        confirmationRef: "cnf:pcont-ui",
        statusLabel: "CONFIRMÉ",
        fabricated: false,
      },
      agentCapability: {
        sufficient: true,
        evaluatedAgentRefs: ["agent:fixture"],
        sufficientAgentRef: "agent:fixture",
        reason: "ok",
        statusLabel: "SUFFISANT",
      },
      authorityReceiptRef: "avr:pcont-ui",
      decisionRefs: ["dec:pcont-ui"],
      requiredAuthority: "N1",
      verifiedAuthorityLevel: "N1",
      executionPerformed: false,
      attemptCreated: false,
    });

    executeSelectMock.mockResolvedValue({
      ok: true,
      phase: "accepted",
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      attemptId: ATTEMPT_ID,
      attemptStatus: "accepted",
      selectedAgentRef: "agent:fixture",
      adapterId: "fixture",
      selectionProfile: "fixture",
      statusLabel: "AGENT SÉLECTIONNÉ",
      attempt: {
        attemptId: ATTEMPT_ID,
        attemptStatus: "accepted",
        adapterId: "fixture",
        selectedAgentRef: "agent:fixture",
        resultRef: null,
        errorRef: null,
        stopReason: null,
      },
    });

    executeStartMock.mockResolvedValue({
      ok: true,
      phase: "terminal",
      executionContractId: "xct:pcont-ui",
      contractVersion: 1,
      attemptId: ATTEMPT_ID,
      attemptStatus: "succeeded",
      selectedAgentRef: "agent:fixture",
      adapterId: "fixture",
      selectionProfile: "fixture",
      statusLabel: "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
      attempt: {
        attemptId: ATTEMPT_ID,
        attemptStatus: "succeeded",
        adapterId: "fixture",
        selectedAgentRef: "agent:fixture",
        resultRef: "res:pcont-ui",
        errorRef: null,
        stopReason: null,
      },
    });

    materializeMock.mockResolvedValue({
      ok: true,
      reusedFromIdempotency: false,
      product: {
        outcome: "UNCLAIMED",
        businessHeadline:
          "Exécution technique réussie — résultat produit non prouvé",
        businessReason: "ClaimEvaluation not_proven",
        claimAllowed: false,
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        claimEvaluationStatus: "not_proven",
        contractResultVerdict: "NOT_PROVEN",
        evidenceStatus: "available",
        evidenceSummary: "Artifact available",
        reviewBundleCompleteness: "partial",
        governedBoundary: "Fake docs_write",
        technicalDetail: {
          attemptId: ATTEMPT_ID,
          attemptStatus: "succeeded",
          resultRef: "res:pcont-ui",
          errorRef: null,
          stopReason: null,
          executionContractId: "xct:pcont-ui",
          executionContractVersion: 1,
        },
        reservations: [],
        antiClaims: {
          ready: false,
          w3Closed: false,
          productCompletionComplete: false,
          runtimeV3Adopted: false,
          realProven: false,
          cycleAutoClosed: false,
          projectAutoArchived: false,
        },
        cycleInstanceClosed: false,
        projectArchived: false,
        noraInvoked: false,
        replanInvoked: false,
        realExecution: false,
      },
      postEvidence: {
        ok: true,
        noraInvoked: false,
        replanInvoked: false,
        analysisText: null,
        analysisUnavailableReason: "deterministic_skip",
        analysisProviderId: null,
        recommendation: {
          kind: "recover",
          headline: "Recovery post-Evidence requise",
          rationale: "UNCLAIMED — diagnostiquer avant relance",
          nextStep: "recovery_diagnose_or_replan",
          requiresHumanDecision: true,
          authority: "none",
          gateConsumed: false,
          decisionCreated: false,
          attemptAutoLaunchNextCycle: false,
          recommendNextGateStatus: null,
          nextActionCode: null,
        },
        lpsVersion: 4,
        evidenceId: "ev:docs-write:pcont-ui",
        reviewBundleId: "rb:docs-write:pcont-ui",
        claimEvaluationId: "ce:pcont-ui",
        productOutcome: "UNCLAIMED",
      },
    });

    render(<TrajectorySurface projectId="prj:pcont-ui" />);

    fireEvent.click(await screen.findByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    await screen.findByTestId("w2-decision");

    // PJ-REPROOF-04 — no Pilot HOW selection; Studio derives mission.
    fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
    await screen.findByTestId("w2-contract");
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    await screen.findByTestId("w2-inspection-state");
    fireEvent.click(screen.getByTestId("w2-confirm-contract"));
    await waitFor(() => {
      expect(confirmMock).toHaveBeenCalled();
    });
    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w3a-governed-execute")).toBeVisible();
    fireEvent.click(screen.getByTestId("w3a-governed-execute"));

    expect(await screen.findByTestId("w3a-attempt")).toBeVisible();
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    await waitFor(() => {
      expect(
        screen.getByTestId("w3a-attempt-technical-status"),
      ).toHaveTextContent("succeeded");
    });
    expect(await screen.findByTestId("w3b-product-outcome")).toBeVisible();
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(executeCompleteMock).not.toHaveBeenCalled();

    // Post-execution: continuity none (EC not pre-execution current).
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "none",
    });
    readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });

    // Canonical recovery CTA (not the generic instruct CTA, which stays hidden
    // while a decided contract still owns the framing subject).
    const recoveryPropose = await screen.findByTestId("w3c-propose-trajectory");
    expect(recoveryPropose).toHaveTextContent(
      "Proposer des options de trajectoire",
    );
    fireEvent.click(recoveryPropose);
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getByTestId("w2-decision-subject-trajectory")).toBeVisible();

    // CR-PCONT-05 — Attempt / ProductOutcome / postEvidence preserved.
    expect(screen.getByTestId("w3a-attempt")).toBeVisible();
    expect(screen.getByTestId("w3a-attempt-id")).toHaveTextContent(ATTEMPT_ID);
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(screen.queryByTestId("w2-error")).toBeNull();
    expect(screen.queryByText(/Contradiction de continuité/)).toBeNull();
    expect(executeSelectMock).toHaveBeenCalledTimes(1);
    expect(proposeMock).toHaveBeenCalledTimes(2);
    expect(proposeMock.mock.calls[1]![0]).toEqual(
      expect.objectContaining({ projectId: "prj:pcont-ui" }),
    );
  });

  it("true Proposal decisionSubjectMode=proposal + current pre-execution EC stays fail-closed conflict", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: {
        optionSetRef: "optset:w2-proposal-conflict",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Critical",
        decisionSubjectMode: "proposal",
        proposalId: "prop:f2:conflict",
        promotesProjectTrajectory: false,
        options: [
          {
            kind: "OPTION",
            optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
            label: "Poursuivre",
            intent: "Continuer",
            impacts: [],
            reservations: [],
            steps: [],
          },
        ],
        recommendation: {
          label: "RECOMMANDATION — PAS UNE DÉCISION",
          recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
          rationale: "Proposal.",
          isHumanDecision: false,
          promotesTrajectory: false,
          ckcAttribution: null,
        },
        epistemicRefs: [],
        proposedTrajectory: null,
        phase: "OPTIONS_PROPOSED",
        autoDecisionPerformed: false,
        executionPerformed: false,
      },
    });
    readGovernedExecutionContinuityMock.mockResolvedValue({
      ok: true,
      kind: "active",
      decisionRef: "dec:pre-exec",
      contract: {
        executionContractId: "xct:pre-exec",
        version: 1,
        status: "confirmed",
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "docs/",
        requiredAuthority: "N3",
        constraints: [],
        stopConditions: [],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibility: "reversible",
        semanticFingerprint: "fp:pre",
        effectConfirmationRequired: false,
        effectConfirmationLevel: null,
        inspectionDisclosure: null,
      },
      inspection: {
        executionContractId: "xct:pre-exec",
        contractVersion: 1,
        semanticFingerprint: "fp:pre",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:pre",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
    });

    render(<TrajectorySurface projectId="prj:true-proposal-conflict" />);
    expect(await screen.findByTestId("w2-error")).toBeVisible();
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /Contradiction de continuité/,
    );
    expect(screen.getByTestId("w2-error").textContent).toMatch(
      /Proposal non résolu/,
    );
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});
