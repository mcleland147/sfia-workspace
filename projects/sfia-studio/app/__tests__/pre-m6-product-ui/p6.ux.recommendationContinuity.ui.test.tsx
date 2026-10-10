/** @vitest-environment jsdom */
/**
 * P6 UX Correction Pass + FIX-01/02/03 — Recommendation continuity.
 * DETERMINISTIC UI only. No REAL / no provider.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import { deriveAttentionItems } from "@/features/pre-m6-product-ui/workspaceContextPresentation";
import {
  buildFramingTrajectoryExamination,
  framingContinuityPilotMessage,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { chatFirstStartSuccessMessage } from "@/features/project-assistant/f2/resolveChatFirstCycleStartGate";

afterEach(() => {
  cleanup();
});

function stubController(): ProductConversationController {
  return {
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    sendMessage: vi.fn(),
    busy: false,
    uiState: "idle",
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    modeLabel: "fixture",
    ephemeralNotice: null,
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    openContinuityPresentation: { kind: "none" },
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    transcriptAvailability: "available",
    decisionSubjectContinuity: null,
    governedExecutionContinuity: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    framingContinuity: null,
    framingContinuityBusy: false,
    framingContinuityError: null,
    refreshFramingContinuity: vi.fn(),
    prepareFramingCandidate: vi.fn(),
    approveFramingCandidate: vi.fn(),
    prepareFramingCycle: vi.fn(),
    startFramingPrepared: vi.fn(),
    qualificationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    durableOutcomeFreshness: "none",
    recommendationFreshness: "none",
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    gateOpen: false,
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    toolEvents: [],
    listRef: { current: null },
  } as unknown as ProductConversationController;
}

describe("P6 UX Recommendation Continuity + FIX-01/02/03", () => {
  it("UX-02 — Ouvrir toggles inline details without calling discuss", () => {
    const onDiscuss = vi.fn();
    render(
      <ConversationSurface
        controller={stubController()}
        workRecommendations={[
          {
            epistemicItemId: "epi:acw:ux02",
            statement:
              "Commencer par recueillir des exemples concrets de difficultés vécues",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: null,
            createdAt: "2026-10-10T00:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:ux02",
          },
        ]}
        onDiscussRecommendation={onDiscuss}
      />,
    );
    expect(screen.getByTestId("durable-recommendation-status").textContent).toBe(
      "À examiner",
    );
    fireEvent.click(screen.getByTestId("conversation-open-recommendation"));
    expect(screen.getByTestId("durable-recommendation-details")).toBeInTheDocument();
    expect(onDiscuss).not.toHaveBeenCalled();
    const materiality = screen.getByTestId(
      "durable-recommendation-materiality",
    ).textContent;
    expect(materiality).toMatch(/n'est pas automatiquement une décision/i);
    expect(materiality).not.toMatch(/opérationnelle/i);
    // UX-REC-01 — statement shown once in title; not repeated under Proposition.
    expect(screen.queryByText("Proposition")).toBeNull();
    const statementHits = screen.getAllByText(
      /Commencer par recueillir des exemples concrets de difficultés vécues/,
    );
    expect(statementHits).toHaveLength(1);
    // REC-02 — durable cycle card, not implied as this-turn-only answer.
    expect(screen.getByText(/Recommandation active du cycle/i)).toBeTruthy();
    expect(
      screen.getByText(/PAS LIÉE\s+UNIQUEMENT À CE TOUR/i),
    ).toBeTruthy();
    fireEvent.click(screen.getByTestId("conversation-discuss-recommendation"));
    expect(onDiscuss).toHaveBeenCalledWith("epi:acw:ux02");
  });

  it("UX-03/05 — Work Recommendation is not « 1 décision à examiner »", () => {
    const items = deriveAttentionItems({
      decisionPending: false,
      lifecycle: null,
      pendingWorkRecommendationCount: 1,
      pendingWorkRecommendationDetail:
        "Commencer par recueillir des exemples concrets",
    });
    expect(items.some((i) => i.key === "decision")).toBe(false);
    expect(items.find((i) => i.key === "recommendation")?.headline).toMatch(
      /recommandation à examiner/i,
    );

    const structural = deriveAttentionItems({
      decisionPending: true,
      lifecycle: null,
      pendingWorkRecommendationCount: 0,
    });
    expect(structural[0]?.key).toBe("decision");
    expect(structural[0]?.headline).toMatch(/décision à examiner/i);
  });

  it("FIX-01 — digest + generic project objective alone is insufficient", () => {
    const thin = buildFramingTrajectoryExamination({
      projectObjective: "Mieux comprendre les difficultés des PME",
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Cadrage" }],
      presentationDigest: "sha256:abc",
      approvalOptionLabel: "Valider cette trajectoire",
      recommendationStatement: null,
    });
    expect(thin.examinationSufficient).toBe(false);
    expect(thin.projectObjective).toMatch(/PME/);
  });

  it("FIX-01 — exploratory Cadrage with Recommendation statement is sufficient", () => {
    const ok = buildFramingTrajectoryExamination({
      projectObjective: "Mieux comprendre les difficultés des PME",
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Cadrage" }],
      presentationDigest: "sha256:abc",
      approvalOptionLabel: "Valider cette trajectoire",
      recommendationStatement:
        "Je recommande d'ouvrir un cycle de Cadrage pour explorer les difficultés de planification et de suivi, sans définir de fonctionnalités.",
    });
    expect(ok.examinationSufficient).toBe(true);
    expect(ok.trajectoryDescription).toMatch(/explorer les difficultés/i);
    expect(ok.knownStepLabels).toEqual(["Cadrage"]);
  });

  it("FIX-01 — trajectory steps beyond catalog label are sufficient", () => {
    const ok = buildFramingTrajectoryExamination({
      projectObjective: null,
      catalogLabel: "Cadrage",
      steps: [{ order: 1, label: "Préparer le Cadrage exploratoire" }],
      presentationDigest: "sha256:abc",
    });
    expect(ok.examinationSufficient).toBe(true);
  });

  it("UX-04 / FIX-02 — START success message has no technical cycle id", () => {
    const msg = chatFirstStartSuccessMessage({
      cycleLabel: "Cadrage",
      cycleInstanceId: "cyc:trj-abcdef012345678901234567",
    });
    expect(msg).toMatch(/Le Cadrage est maintenant actif/);
    expect(msg).not.toMatch(/cyc:trj-/);
    expect(framingContinuityPilotMessage("active", "Cadrage")).not.toMatch(
      /cyc:/,
    );
  });
});
