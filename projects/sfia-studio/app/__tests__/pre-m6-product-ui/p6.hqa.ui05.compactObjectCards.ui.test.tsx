/** @vitest-environment jsdom */
/**
 * P6-HQA-UI05 — compact Recommendation / Proposal / ExecutionContract objects
 * (Figma 46:98 / 46:107 progressive disclosure).
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";

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
  cycleInstanceId: "cyc:ui05-proposed",
  cycleStatus: "proposed",
};

const PROPOSAL: ProposalDto = {
  proposalId: "prop:f2:ui05",
  status: "READY_NO_GATE",
  rephrasedRequest:
    "Démarrer le cycle Delivery pour produire, revoir et valider le livrable.",
  objective: "Démarrer le cycle Delivery.",
  cycleTypeId: "cycle:delivery",
  recommendedProfile: "Standard",
  rationale: "default_standard",
  scope: "Qualification et préparation du démarrage Delivery",
  outOfScope: ["Cursor REAL", "écriture Git"],
  activatedBlocks: [],
  expectedOutcome: "Cycle Delivery prêt à être démarré.",
  sources: [],
  risks: [],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION"],
  morrisGateRequired: false,
  nextPossibleStep: "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
  contextSnapshot: {
    projectId: "prj:ui05",
    lpsId: "lps:ui05",
    lpsVersion: 3,
    doctrineDigest: "doctrine:test",
    activeCycleInstanceId: null,
  },
  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
  executionForbidden: true,
  noExecutingStatus: true,
  agentBinding: "NOT_AVAILABLE",
};

const SYNTHESIS = {
  synthesisId: "syn:ui05",
  title: "Synthèse — Mise à jour de l'espace projet",
  verdictLabel: "indetermine",
  sections: {
    summary: "Portée limitée à deux fichiers. Confirmation potentiellement requise.",
    verdict: "Indéterminé",
    evidence: "",
    next: "",
    risks: "",
  },
} as unknown as ProductSynthesisProjection;

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
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

function pilotVisibleText(el: HTMLElement): string {
  const clone = el.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      '[class*="srOnly"], [class*="sr-only"], [aria-hidden="true"]',
    )
    .forEach((node) => node.remove());
  return (clone.textContent || "").replace(/\s+/g, " ").trim();
}

describe("P6-HQA-UI05 compact object cards", () => {
  it("Recommendation closed by default — type/title/meta/status/Ouvrir", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const card = screen.getByTestId("project-assistant-qualification");
    expect(card).toHaveAttribute("data-ui05-object", "recommendation");
    expect(card).toHaveAttribute("data-expanded", "false");
    expect(within(card).getByText(/^Recommandation$/i)).toBeInTheDocument();
    expect(screen.getByTestId("f2-cycle")).toHaveTextContent(/Delivery/i);
    expect(screen.getByTestId("f2-recommendation-state")).toHaveTextContent(
      /Candidat prêt|À examiner|pas encore démarré/i,
    );
    const open = screen.getByTestId("f2-recommendation-open");
    expect(open).toHaveTextContent(/Ouvrir/i);
    expect(open).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
    const visible = pilotVisibleText(card);
    expect(visible).not.toMatch(/READY_NO_GATE/);
    expect(visible).not.toMatch(/f2-rationale-technical/i);
  });

  it("Recommendation opens and closes; details restored", () => {
    render(<ConversationSurface controller={stubController({})} />);
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    expect(screen.getByTestId("project-assistant-qualification")).toHaveAttribute(
      "data-expanded",
      "true",
    );
    expect(screen.getByTestId("f2-recommendation-details")).toBeInTheDocument();
    expect(screen.getByTestId("f2-rationale")).toBeVisible();
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    expect(screen.queryByTestId("f2-recommendation-details")).toBeNull();
  });

  it("Proposal ≠ Recommendation; READY_NO_GATE ≠ DECISION_REQUIRED", () => {
    render(<ConversationSurface controller={stubController({})} />);
    const rec = screen.getByTestId("project-assistant-qualification");
    const prop = screen.getByTestId("project-assistant-proposal");
    expect(rec).toHaveAttribute("data-ui05-object", "recommendation");
    expect(prop).toHaveAttribute("data-ui05-object", "proposal");
    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
      /Candidat prêt/i,
    );
    expect(pilotVisibleText(prop)).not.toMatch(/En attente de décision/);

    cleanup();
    render(
      <ConversationSurface
        controller={stubController({
          activeProposal: {
            ...PROPOSAL,
            status: "DECISION_REQUIRED",
            morrisGateRequired: true,
          },
          f2: {
            turnKind: "f2_proposal",
            intentClass: "actionable",
            qualification: QUALIFICATION,
            proposal: {
              ...PROPOSAL,
              status: "DECISION_REQUIRED",
              morrisGateRequired: true,
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
    expect(screen.getByTestId("f2-proposal-status-label")).toHaveTextContent(
      /En attente de décision/i,
    );
  });

  it("Proposal progressive disclosure preserves next-action contract", () => {
    render(<ConversationSurface controller={stubController({})} />);
    expect(screen.queryByTestId("f2-proposal-details")).toBeNull();
    fireEvent.click(screen.getByTestId("f2-proposal-open"));
    const next = screen.getByTestId("f2-proposal-next-action");
    expect(next).toHaveAttribute("data-next-kind", "conversation");
    expect(next).toHaveTextContent(/Nora/i);
    expect(screen.getByTestId("f2-gate-required")).toHaveTextContent(
      /Aucune décision structurée/i,
    );
  });

  it("ProductSynthesis alone is never an ExecutionContract / Action préparée", () => {
    const onOpen = vi.fn();
    render(
      <ConversationSurface
        controller={stubController({})}
        latestSynthesis={SYNTHESIS}
        onOpenSynthesis={onOpen}
      />,
    );
    const synth = screen.getByTestId("conversation-synthesis-card");
    expect(synth).toHaveAttribute("data-ui05-object", "synthesis");
    expect(within(synth).getByText(/^Synthèse$/i)).toBeInTheDocument();
    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
    const visible = pilotVisibleText(synth);
    expect(visible).not.toMatch(/Action préparée/i);
    expect(visible).not.toMatch(/confirmation potentiellement requise/i);
    fireEvent.click(screen.getByTestId("conversation-open-synthesis"));
    expect(onOpen).toHaveBeenCalledWith("syn:ui05");
    expect(screen.getByTestId("conversation-synthesis-details")).toBeInTheDocument();
  });

  it("true ExecutionContract projects Action préparée with Product status", () => {
    render(
      <ConversationSurface
        controller={stubController({
          governedExecutionContinuity: {
            ok: true,
            kind: "active",
            decisionRef: "hd:ui05",
            contract: {
              executionContractId: "xct:ui05",
              version: 1,
              status: "validated",
              action: "Mise à jour de l'espace projet",
              target: "workspace",
              scope: "Portée · 2 fichiers",
              requiredAuthority: "N3",
              constraints: [],
              stopConditions: [],
              requiredCapabilities: [],
              reversibility: "réversible",
              semanticFingerprint: "fp",
              effectConfirmationRequired: false,
              inspectionDisclosure: {},
            },
            inspection: { inspectionSufficient: true },
          } as never,
        })}
      />,
    );
    const card = screen.getByTestId("conversation-prepared-action-card");
    expect(card).toHaveAttribute("data-ui05-object", "execution-contract");
    expect(card).toHaveAttribute("data-contract-status", "validated");
    expect(within(card).getByText(/Action préparée/i)).toBeInTheDocument();
    expect(within(card).getByText(/Prête à examiner/i)).toBeInTheDocument();
    expect(within(card).getByText(/Mise à jour de l'espace projet/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("conversation-open-prepared-action"));
    expect(screen.getByTestId("conversation-prepared-action-details")).toBeInTheDocument();
  });

  it("absence of contract yields no phantom Action préparée card", () => {
    render(<ConversationSurface controller={stubController({})} />);
    expect(screen.queryByTestId("conversation-prepared-action-card")).toBeNull();
    expect(document.querySelector('[data-ui05-object="execution-contract"]')).toBeNull();
  });

  it("Ouvrir does not expose mutation START affordance", () => {
    render(<ConversationSurface controller={stubController({})} />);
    fireEvent.click(screen.getByTestId("f2-recommendation-open"));
    fireEvent.click(screen.getByTestId("f2-proposal-open"));
    const visible = pilotVisibleText(document.body);
    expect(visible).not.toMatch(/Démarrer maintenant/i);
    expect(screen.queryByRole("button", { name: /^Démarrer$/i })).toBeNull();
  });
});
