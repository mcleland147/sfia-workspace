/** @vitest-environment jsdom */
/**
 * P6-HQA-UI-04 — Pilot-facing Recommendation / Proposal / next-action simplification.
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import {
  formatNoraAssistantDisplayText,
  projectPilotProposalCard,
  projectPilotRecommendationCard,
} from "@/features/project-assistant/presentationLabels";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";

afterEach(() => {
  cleanup();
});

const QUALIFICATION = {
  cycleTypeId: "cycle:delivery",
  cycleLabel: "Delivery / implémentation",
  recommendedProfile: "Standard",
  rationale: "default_standard",
  criticalSignalsPresent: false,
  requiresJustificationForCritical: false,
  capitalizationViaCycleTypeId: false,
  isMorrisDecision: false as const,
  catalogVersion: "1",
  catalogHash: "h",
  detailedStatus: "ok",
  disclosures: [],
  signals: {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  },
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" as const,
  cycleInstanceId: "cyc:hq01-proposed",
  cycleStatus: "proposed",
};

const PROPOSAL: ProposalDto = {
  proposalId: "prop:f2:ui04",
  status: "READY_NO_GATE",
  rephrasedRequest:
    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable HQ-01.",
  objective:
    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable HQ-01.",
  cycleTypeId: "cycle:delivery",
  recommendedProfile: "Standard",
  rationale: "default_standard",
  scope: "Qualification et préparation du démarrage Delivery",
  outOfScope: ["Cursor REAL", "écriture Git"],
  activatedBlocks: [],
  expectedOutcome: "Cycle Delivery prêt à être démarré avec critères de sortie clairs.",
  sources: [],
  risks: [],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  morrisGateRequired: false,
  nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
  contextSnapshot: {
    projectId: "prj:hq01",
    lpsId: "lps:hq01",
    lpsVersion: 3,
    doctrineDigest: "doctrine:test",
    activeCycleInstanceId: null,
  },
  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
  executionForbidden: true,
  noExecutingStatus: true,
  agentBinding: "NOT_AVAILABLE",
};

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [
      {
        id: "m-asst-1",
        role: "assistant",
        content:
          "Confirmez-vous le démarrage de Delivery ? RECOMMANDATION — PAS UNE DÉCISION HUMAINE. CONTINUE — cognition propose-only, pas d'escalade d'autorité. READY_NO_GATE.",
      },
    ],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: {
      turnKind: "f2_proposal",
      intentClass: "actionable",
      qualification: QUALIFICATION,
      proposal: PROPOSAL,
      decision: null,
      labels: {
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: false,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
    activeProposal: PROPOSAL,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

/** Strip sr-only / aria-hidden nodes so assertions match Pilote-visible copy. */
function pilotVisibleText(el: HTMLElement): string {
  const clone = el.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      '[class*="srOnly"], [class*="sr-only"], [aria-hidden="true"]',
    )
    .forEach((node) => node.remove());
  return (clone.textContent || "").replace(/\s+/g, " ").trim();
}

describe("P6-HQA-UI-04 pilot-facing Recommendation / Proposal", () => {
  it("T01/T02/T03 — READY_NO_GATE, processLocalNotice, IDs not visible on nominal path", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const proposal = screen.getByTestId("project-assistant-proposal");
    const qual = screen.getByTestId("project-assistant-qualification");
    const visible = `${pilotVisibleText(qual)}\n${pilotVisibleText(proposal)}`;
    expect(visible).not.toMatch(/READY_NO_GATE/);
    expect(visible).not.toMatch(/F2 S['’]ARRÊTE ICI/);
    expect(visible).not.toMatch(/Product SQLite/i);
    expect(visible).not.toMatch(/TEMPORARY WITH EXIT/i);
    expect(visible).not.toMatch(/lps:hq01/);
    expect(visible).not.toMatch(/prop:f2/);
    expect(visible).not.toMatch(/processLocalNotice/i);
    const notice = screen.getByTestId("f2-process-local-notice");
    expect(notice.className).toMatch(/srOnly|sr-only/i);
    expect(screen.queryByText(/Détails techniques/i)).toBeNull();
    expect(screen.getByTestId("f2-proposal-id")).toHaveAttribute(
      "data-proposal-status",
      "READY_NO_GATE",
    );
  });

  it("T04/T05/T06 — Recommendation and Proposal keep distinct identities; not HumanDecision", () => {
    render(<ConversationSurface controller={stubController({})} />);
    expect(screen.getByTestId("project-assistant-qualification")).toHaveAttribute(
      "data-ui05-object",
      "recommendation",
    );
    expect(screen.getByTestId("project-assistant-proposal")).toHaveAttribute(
      "data-ui05-object",
      "proposal",
    );
    expect(screen.getByTestId("f2-cycle")).toHaveTextContent(
      /Démarrer le cycle Delivery/i,
    );
    expect(screen.getByTestId("f2-proposal-main")).toHaveTextContent(
      /Démarrer le cycle Delivery/i,
    );
    const visible = pilotVisibleText(document.body);
    expect(visible).not.toMatch(/\bHumanDecision\b/);
    expect(visible).toMatch(/recommandation n.est pas une décision/i);
  });

  it("T09/T10 — next action is conversational when no gate; no fake decision CTA", () => {
    render(<ConversationSurface controller={stubController({})} />);
    // UI05: next-action lives in progressive disclosure — open Proposal first.
    fireEvent.click(screen.getByTestId("f2-proposal-open"));
    const next = screen.getByTestId("f2-proposal-next-action");
    expect(next).toHaveAttribute("data-next-kind", "conversation");
    expect(next).toHaveTextContent(/poursuivre avec Nora/i);
    expect(next).not.toHaveTextContent(/F2 S['’]ARRÊTE/i);
    expect(screen.getByTestId("f2-gate-required")).toHaveTextContent(
      /Aucune décision structurée/i,
    );
    expect(screen.queryByTestId("project-assistant-gate")).toBeNull();
    expect(
      screen.queryByRole("button", { name: /Approuver/i }),
    ).toBeNull();
  });

  it("T07 — Confirmation path remains distinct when gate is open (legacy only)", () => {
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={stubController({
          gateOpen: true,
          activeProposal: { ...PROPOSAL, morrisGateRequired: true, status: "DECISION_REQUIRED" },
          f2: {
            turnKind: "f2_proposal",
            intentClass: "actionable",
            qualification: QUALIFICATION,
            proposal: {
              ...PROPOSAL,
              morrisGateRequired: true,
              status: "DECISION_REQUIRED",
            },
            decision: null,
            labels: {
              recommendation: "RECOMMANDATION",
              proposition: "PROPOSITION",
              decisionRequired: "DÉCISION REQUISE",
              decisionTaken: null,
              noExecution: "AUCUNE EXÉCUTION",
            },
            executionBlocked: false,
            processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
          },
        })}
      />,
    );
    expect(screen.getByTestId("project-assistant-gate")).toBeInTheDocument();
    expect(screen.getByTestId("f2-process-local-notice").className).not.toMatch(
      /srOnly|sr-only/i,
    );
  });

  it("T11/T12 — business essentials preserved; resilient when optional fields missing", () => {
    const sparse = projectPilotRecommendationCard({
      cycleLabel: "Delivery / implémentation",
      recommendedProfile: "Standard",
      rationale: null,
      cycleStatus: "proposed",
    });
    expect(sparse.recommendation).toMatch(/Delivery/i);
    expect(sparse.why).toBeTruthy();
    expect(sparse.state).toMatch(/pas encore démarré/i);
    expect(sparse.showProfile).toBe(false);

    const proposal = projectPilotProposalCard({
      rephrasedRequest: "Préparer le livrable",
      morrisGateRequired: false,
      status: "READY_NO_GATE",
      nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
      cycleLabel: "Delivery / implémentation",
    });
    expect(proposal.proposition).toMatch(/livrable/i);
    expect(proposal.nextActionKind).toBe("conversation");
    expect(proposal.nextAction).not.toMatch(/READY_NO_GATE|F2/);
  });

  it("T08/T20 — projection does not invent cycle activation or authority", () => {
    const card = projectPilotProposalCard({
      rephrasedRequest: "Démarrer Delivery",
      morrisGateRequired: false,
      status: "READY_NO_GATE",
      nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
      cycleLabel: "Delivery / implémentation",
      cycleStatus: "proposed",
    });
    expect(card.nextAction).toMatch(/pas encore/i);
    expect(card.nextActionKind).toBe("conversation");
    expect(card.agreement).toMatch(/Aucune décision structurée/i);
  });

  it("scrubs anti scope creep / silent REAL / Evidence in Pourquoi", () => {
    const card = projectPilotRecommendationCard({
      cycleLabel: "Delivery / implémentation",
      recommendedProfile: "Standard",
      rationale:
        "Guider une implémentation bornée — anti scope creep, silent REAL, et « done » sans Evidence.",
      cycleStatus: "proposed",
    });
    expect(card.why).not.toMatch(/anti scope creep|silent REAL|\bEvidence\b/i);
    expect(card.why).toMatch(/dérive de périmètre|preuve/i);
    expect(card.state).toBe("Le cycle n'a pas encore démarré.");
  });

  it("narration — F2 footer jargon softened at display boundary", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const turn = screen.getByTestId("project-assistant-turn-assistant");
    const shown = within(turn).getByText(/Confirmez-vous/i);
    expect(shown.textContent).not.toMatch(/READY_NO_GATE/);
    expect(shown.textContent).not.toMatch(/cognition propose-only/i);
    expect(shown.textContent).not.toMatch(
      /RECOMMANDATION — PAS UNE DÉCISION HUMAINE/i,
    );
    const raw =
      "Texte utile. CONTINUE — cognition propose-only, pas d'escalade d'autorité. READY_NO_GATE.";
    expect(formatNoraAssistantDisplayText(raw)).not.toMatch(/READY_NO_GATE|propose-only/i);
    expect(formatNoraAssistantDisplayText(raw)).toMatch(/Texte utile/);
  });

  it("T21 — legacy/diagnostic path still exposes technical notice when requested", () => {
    render(
      <ConversationSurface
        exposeLegacyAuthorityPath
        controller={stubController({})}
      />,
    );
    expect(screen.getAllByText(/Détails techniques/i).length).toBeGreaterThan(0);
    expect(screen.getByTestId("f2-process-local-notice")).toHaveTextContent(
      /SQLite|processus/i,
    );
    expect(screen.getByTestId("f2-no-execution")).toHaveTextContent(
      "AUCUNE EXÉCUTION",
    );
  });
});
