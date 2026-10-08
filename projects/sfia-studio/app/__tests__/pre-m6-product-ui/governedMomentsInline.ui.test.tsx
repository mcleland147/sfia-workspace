/**
 * @vitest-environment jsdom
 *
 * S08-4D — P3 inline Governed Decision / Confirmation in Conversation.
 * Presentation + wiring to existing W2 actions; no parallel authority.
 */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import { GovernedDecisionCard } from "@/features/pre-m6-product-ui/surfaces/GovernedDecisionCard";
import { GovernedConfirmationCard } from "@/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { TrajectoryOptionSetDto } from "@/features/project-assistant/w2/types";

const OPTION_SET: TrajectoryOptionSetDto = {
  optionSetRef: "optset:gov-moment",
  cycleTypeId: "cycle:test",
  recommendedProfile: "A",
  decisionSubjectMode: "proposal",
  proposalId: "prop:gov",
  promotesProjectTrajectory: false,
  options: [
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      label: "Conversation principale + contexte progressif",
      intent: "Conserver la conversation comme surface principale.",
      impacts: [],
      reservations: [],
      steps: [],
    },
    {
      kind: "OPTION",
      optionRef: "opt:alternate",
      label: "Contexte persistant",
      intent: "Rendre le contexte plus persistant.",
      impacts: [],
      reservations: [],
      steps: [],
    },
  ],
  recommendation: {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale:
      "Deux directions sont possibles. La première conserve la conversation.",
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: null,
    ckcProvenance: null,
  },
  epistemicRefs: [],
  proposedTrajectory: null,
  phase: "OPTIONS_PROPOSED",
  autoDecisionPerformed: false,
  executionPerformed: false,
  ckcCognitionCompletedBeforeMutation: true,
};

function baseController(
  overrides: Partial<ProductConversationController> = {},
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "READY",
    error: null,
    modeLabel: "Mode démonstration",
    ephemeralNotice: "",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    decisionSubjectContinuity: { status: "pending" },
    governedExecutionContinuity: { status: "pending" },
    decisionAlternateIndex: -1,
    governedMomentBusy: false,
    governedMomentError: null,
    decideGovernedDirection: vi.fn(),
    revealGovernedDecisionAlternate: vi.fn(),
    inspectGovernedContract: vi.fn(),
    confirmGovernedContract: vi.fn(),
    refreshGovernedMoments: vi.fn(),
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    transcriptAvailability: "empty",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusTurnId: null,
    focusJournalExchanges: [],
    focusTranscriptTurn: vi.fn(),
    clearFocusTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: null,
    qualificationFreshness: null,
    durableOutcomeFreshness: null,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    reservationResolutionProposal: null,
    clearReservationResolutionProposal: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

afterEach(() => {
  cleanup();
});

describe("GovernedDecisionCard presentation", () => {
  it("renders decision label and primary CTA without mutating on alternate reveal", () => {
    const onChoose = vi.fn();
    const onReveal = vi.fn();
    const onAlt = vi.fn();
    render(
      <GovernedDecisionCard
        optionSet={OPTION_SET}
        alternateIndex={-1}
        busy={false}
        error={null}
        onChooseRecommended={onChoose}
        onRevealAlternate={onReveal}
        onChooseAlternate={onAlt}
      />,
    );
    expect(screen.getByTestId("governed-decision-card")).toBeTruthy();
    expect(screen.getByTestId("governed-decision-title")).toHaveTextContent(
      /Choisir la direction/i,
    );
    fireEvent.click(screen.getByTestId("governed-decision-see-alternate"));
    expect(onReveal).toHaveBeenCalledTimes(1);
    expect(onChoose).not.toHaveBeenCalled();
    expect(onAlt).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("governed-decision-choose"));
    expect(onChoose).toHaveBeenCalledTimes(1);
  });
});

function stubDisclosure(
  overrides: Partial<{
    targetPath: string | null;
    targetRepositoryRef: string | null;
  }> = {},
) {
  return {
    action: "cursor.docs_write.apply",
    technicalTarget: "workspace.isolated.docs_write",
    scope: "Interface du projet",
    targetRepositoryRef:
      overrides.targetRepositoryRef === undefined
        ? "mcleland147/sfia-workspace"
        : overrides.targetRepositoryRef,
    targetPath:
      overrides.targetPath === undefined
        ? "projects/sfia-studio/.sandbox/demo.md"
        : overrides.targetPath,
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
    executionContractId: "xct:1",
    semanticFingerprint: "fp",
    disclosureComplete: true,
    incompletenessCode: null,
  };
}

describe("GovernedConfirmationCard presentation", () => {
  const contract = {
    executionContractId: "xct:1",
    version: 1,
    status: "confirmation_required",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "Interface du projet",
    requiredAuthority: "N2",
    constraints: [] as string[],
    stopConditions: [] as string[],
    requiredCapabilities: [] as string[],
    reversibility: "reversible",
    semanticFingerprint: "fp",
    effectConfirmationRequired: true,
    effectConfirmationLevel: "N2",
    inspectionDisclosure: stubDisclosure(),
  };

  it("renders scope / impact / reversibility and confirm CTA when inspected", () => {
    const onConfirm = vi.fn();
    render(
      <GovernedConfirmationCard
        contract={contract}
        inspection={{
          executionContractId: "xct:1",
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
        }}
        busy={false}
        error={null}
        onConfirm={onConfirm}
        onInspect={vi.fn()}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-scope")).toBeTruthy();
    expect(screen.getByTestId("governed-confirmation-impact")).toBeTruthy();
    expect(
      screen.getByTestId("governed-confirmation-reversibility"),
    ).toHaveTextContent(/Réversible/i);
    fireEvent.click(screen.getByTestId("governed-confirmation-confirm"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("does not render when confirmation is not required", () => {
    const { container } = render(
      <GovernedConfirmationCard
        contract={{ ...contract, status: "authorized", effectConfirmationRequired: false }}
        inspection={{
          executionContractId: "xct:1",
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
        }}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onInspect={vi.fn()}
      />,
    );
    expect(container.querySelector("[data-testid='governed-confirmation-card']")).toBeNull();
  });

  it("requires inspect before confirm when inspection insufficient", () => {
    const onInspect = vi.fn();
    render(
      <GovernedConfirmationCard
        contract={contract}
        inspection={{
          executionContractId: "xct:1",
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
        }}
        busy={false}
        error={null}
        onConfirm={vi.fn()}
        onInspect={onInspect}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-inspect-needed")).toBeTruthy();
    expect(screen.queryByTestId("governed-confirmation-confirm")).toBeNull();
    fireEvent.click(screen.getByTestId("governed-confirmation-inspect"));
    expect(onInspect).toHaveBeenCalledTimes(1);
  });
});

describe("ConversationSurface inline governed moments", () => {
  it("renders Decision card only for bound_awaiting_decision and wires decide", () => {
    const decideGovernedDirection = vi.fn();
    const reveal = vi.fn();
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: {
            ok: true,
            kind: "bound_awaiting_decision",
            optionSet: OPTION_SET,
          },
          decideGovernedDirection,
          revealGovernedDecisionAlternate: reveal,
        })}
      />,
    );
    expect(screen.getByTestId("governed-decision-card")).toBeTruthy();
    expect(screen.getByTestId("decision-subject-bound")).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-decision-choose"));
    expect(decideGovernedDirection).toHaveBeenCalledWith(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );
    fireEvent.click(screen.getByTestId("governed-decision-see-alternate"));
    expect(reveal).toHaveBeenCalled();
    expect(decideGovernedDirection).toHaveBeenCalledTimes(1);
  });

  it("does not render Decision from recommendation-only / none subject", () => {
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: { ok: true, kind: "none" },
        })}
      />,
    );
    expect(screen.queryByTestId("governed-decision-card")).toBeNull();
  });

  it("renders Confirmation for confirmation_required continuity", () => {
    const confirmGovernedContract = vi.fn();
    render(
      <ConversationSurface
        controller={baseController({
          decisionSubjectContinuity: { ok: true, kind: "none" },
          governedExecutionContinuity: {
            ok: true,
            kind: "active",
            decisionRef: "dec:1",
            contract: {
              executionContractId: "xct:1",
              version: 1,
              status: "confirmation_required",
              action: "cursor.docs_write.apply",
              target: "workspace.isolated.docs_write",
              scope: "Interface du projet",
              requiredAuthority: "N2",
              constraints: [],
              stopConditions: [],
              requiredCapabilities: [],
              reversibility: "reversible",
              semanticFingerprint: "fp",
              effectConfirmationRequired: true,
              inspectionDisclosure: stubDisclosure({
                targetPath: null,
                targetRepositoryRef: null,
              }),
            },
            inspection: {
              executionContractId: "xct:1",
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
          },
          confirmGovernedContract,
        })}
      />,
    );
    expect(screen.getByTestId("governed-confirmation-card")).toBeTruthy();
    fireEvent.click(screen.getByTestId("governed-confirmation-confirm"));
    expect(confirmGovernedContract).toHaveBeenCalled();
  });

  it("does not enable legacy authority path by default", () => {
    render(<ConversationSurface controller={baseController()} />);
    expect(screen.queryByTestId("project-assistant-proposal")).toBeNull();
    expect(screen.queryByTestId("f2-decide-GO")).toBeNull();
  });
});
