/**
 * @vitest-environment jsdom
 *
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — nominal UX proofs.
 *
 * TrajectorySurface defaults to `chat_first`: state / inspection / audit only.
 * JournalSurface carries four read rails, with Recommandations and Décisions
 * strictly read-only (no accept/refuse affordance).
 */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  JournalSurface,
  type JournalDecisionCard,
  type JournalRecommendationCard,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { isWorkRecommendationItem } from "@/lib/oa/cycle/application/deriveWorkRecommendations";

const {
  proposeMock,
  decideMock,
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
  w2InspectExecutionContractAction: vi.fn(),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
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

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  readActiveDecisionSubjectMock.mockReset();
  readGovernedExecutionContinuityMock.mockReset();
  readRecoveryExecutionBindingMock.mockReset();
  readRecoveryOwnedDecisionContinuityMock.mockReset();
  readPreCycleMock.mockReset();
  readApprovalMock.mockReset();
  readPreparedCycleMock.mockReset();

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

const BOUND_OPTION_SET = {
  optionSetRef: "optset:w2-chat-first",
  cycleTypeId: "cyc:functional-design",
  recommendedProfile: "Standard",
  decisionSubjectMode: "proposal" as const,
  proposalId: "prop:f2:chat-first",
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
  ],
  recommendation: {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale: "Poursuivre.",
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

describe("TrajectorySurface — chat_first is the nominal mode", () => {
  it("hides « Instruire les options » with an active cycle and no subject", async () => {
    render(<TrajectorySurface projectId="prj:chat-first-none" />);
    expect(await screen.findByTestId("w2-trajectory-panel")).toBeTruthy();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
  });

  it("shows a bound OptionSet read-only: no per-option decide button", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: BOUND_OPTION_SET,
    });

    render(<TrajectorySurface projectId="prj:chat-first-bound" />);

    // Inspection stays: options and recommendation remain visible.
    expect(await screen.findByTestId("w2-options")).toBeTruthy();
    expect(screen.getByTestId("w2-recommendation")).toBeTruthy();
    expect(
      screen.getByTestId(`w2-option-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeTruthy();

    // The decide affordance is retired from the nominal path.
    expect(
      screen.queryByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeNull();
    expect(screen.getByTestId("w2-chat-first-decision-hint")).toBeTruthy();
    expect(decideMock).not.toHaveBeenCalled();
  });

  it("keeps the pending subject in read mode and points back to the conversation", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "pending_reinstruction_required",
      message: "Une proposition attend votre décision.",
      proposalIds: ["prop:f2:pending"],
      recoverableProposalIds: ["prop:f2:pending"],
    });
    // FR-01 — the sole recoverable subject is materialised by the server read
    // path, not by a Pilot click. Keep the OptionSet unavailable here so the
    // pending block itself is the surface under proof.
    proposeMock.mockResolvedValue({
      ok: false,
      code: "UNUSED",
      message: "unused",
    });

    render(<TrajectorySurface projectId="prj:chat-first-pending" />);

    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeTruthy();
    // No « Instruire les options » button: the Pilot never has to press it.
    expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
    expect(screen.getByTestId("w2-chat-first-pending-hint")).toBeTruthy();
  });

  it("legacy_cta re-exposes the historical affordances for harvest proofs", async () => {
    readActiveDecisionSubjectMock.mockResolvedValue({
      ok: true,
      kind: "bound_awaiting_decision",
      optionSet: BOUND_OPTION_SET,
    });

    render(
      <TrajectorySurface
        projectId="prj:legacy"
        decisionWorkflowMode="legacy_cta"
      />,
    );

    expect(
      await screen.findByTestId(`w2-decide-${PROPOSAL_SUBJECT_PURSUE_REF}`),
    ).toBeTruthy();
    expect(screen.queryByTestId("w2-chat-first-decision-hint")).toBeNull();
  });
});

const RECOMMENDATION: JournalRecommendationCard = {
  epistemicItemId: "epi:work-rec-1",
  statement: "RECOMMANDATION — poursuivre le sujet proposé.",
  status: "active",
  source: "optset:w2-chat-first",
  optionSetRef: "optset:w2-chat-first",
  proposalId: "prop:f2:chat-first",
  cycleInstanceId: "cycinst:a",
  createdAt: "2026-09-27T10:00:00.000Z",
  dispositionDecisionId: null,
};

const DECISION: JournalDecisionCard = {
  decisionId: "dec:w2-prop:1",
  subject: "W2 Proposal subject arbitration for prop:f2:chat-first",
  status: "accepted",
  selectedOptionLabel: "Poursuivre le sujet proposé",
  actorDisplayName: "Pilote",
  authority: "pilot",
  effectiveAt: "2026-09-27T11:00:00.000Z",
  cycleInstanceId: "cycinst:a",
  decisionBasisLinked: true,
  reservations: [],
};

describe("JournalSurface — Sujets | Réserves | Recommandations | Décisions", () => {
  const baseProps = {
    entries: [],
    cycleInstanceId: "cycinst:a",
    selectedEntryId: null,
    onSelectEntry: vi.fn(),
    onViewExchanges: vi.fn(),
    onFocusTurn: vi.fn(),
  };

  it("exposes the four rails", () => {
    render(<JournalSurface {...baseProps} memoryTab="sujets" />);
    expect(screen.getByTestId("memory-rail-tab-sujets")).toBeTruthy();
    expect(screen.getByTestId("memory-rail-tab-reserves")).toBeTruthy();
    expect(screen.getByTestId("memory-rail-tab-recommandations")).toBeTruthy();
    expect(screen.getByTestId("memory-rail-tab-decisions")).toBeTruthy();
  });

  it("Recommandations fixture is a work Recommendation (optset), not lifecycle", () => {
    expect(
      isWorkRecommendationItem({ ...RECOMMENDATION, type: "Recommendation" }),
    ).toBe(true);
    expect(RECOMMENDATION.source).toMatch(/^optset:/);
    expect(
      (RECOMMENDATION as { lifecycleRecommendation?: unknown })
        .lifecycleRecommendation,
    ).toBeUndefined();
  });

  it("Recommandations is read-only and never offers accept/refuse", () => {
    render(
      <JournalSurface
        {...baseProps}
        memoryTab="recommandations"
        recommendations={[RECOMMENDATION]}
      />,
    );
    const card = screen.getByTestId(
      `cycle-recommendation-card-${RECOMMENDATION.epistemicItemId}`,
    );
    expect(card.textContent).toContain("poursuivre le sujet proposé");
    expect(
      screen.getByTestId(
        `cycle-recommendation-authority-${RECOMMENDATION.epistemicItemId}`,
      ).textContent,
    ).toContain("PAS UNE DÉCISION HUMAINE");
    for (const button of screen.queryAllByRole("button")) {
      expect(button.textContent ?? "").not.toMatch(
        /Accepter|Refuser|Décider|Valider/i,
      );
    }
  });

  it("Recommandations offers a non-mutating « reprendre dans le chat » handoff", () => {
    const resume = vi.fn();
    render(
      <JournalSurface
        {...baseProps}
        memoryTab="recommandations"
        recommendations={[RECOMMENDATION]}
        onResumeRecommendationInChat={resume}
      />,
    );
    screen
      .getByTestId(
        `cycle-recommendation-resume-${RECOMMENDATION.epistemicItemId}`,
      )
      .click();
    expect(resume).toHaveBeenCalledWith(RECOMMENDATION.epistemicItemId);
  });

  it("Décisions projects durable HumanDecisions as read-only audit cards", () => {
    render(
      <JournalSurface
        {...baseProps}
        memoryTab="decisions"
        decisions={[DECISION]}
      />,
    );
    const card = screen.getByTestId(
      `cycle-decision-card-${DECISION.decisionId}`,
    );
    expect(card.textContent).toContain("Poursuivre le sujet proposé");
    expect(
      screen.getByTestId(`cycle-decision-state-${DECISION.decisionId}`)
        .textContent,
    ).toBe("Acceptée");
    for (const button of screen.queryAllByRole("button")) {
      expect(button.textContent ?? "").not.toMatch(/Accepter|Refuser|Décider/i);
    }
  });

  it("empty rails stay honest instead of inventing content", () => {
    const { rerender } = render(
      <JournalSurface {...baseProps} memoryTab="recommandations" />,
    );
    expect(screen.getByTestId("cycle-recommendations-empty")).toBeTruthy();
    rerender(<JournalSurface {...baseProps} memoryTab="decisions" />);
    expect(screen.getByTestId("cycle-decisions-empty")).toBeTruthy();
  });
});
