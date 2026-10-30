/** @vitest-environment jsdom */
/**
 * UI — Nora adaptive presentation renderer (A3/A4 matrix samples).
 * CORR-NAP-02 — typed Studio notices + incomplete banner = last assistant only.
 * DETERMINISTIC — no Product actions from free render.
 */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { NoraAdaptivePresentationView } from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
import {
  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  appendStudioControlNotices,
  honestBlockTitle,
  parseNoraAdaptivePresentation,
  type NoraAdaptivePresentation,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

afterEach(() => {
  cleanup();
});

function balisePresentation(): NoraAdaptivePresentation {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: "NORA / Cadrage BALISE",
    title: null,
    lead: "Nous avons clarifié le besoin initial.",
    blocks: [
      {
        kind: "established_facts",
        title: "Éléments établis",
        items: ["Centraliser les demandes."],
      },
      {
        kind: "open_questions",
        title: "Points encore à clarifier",
        items: ["Canaux de réception."],
      },
      {
        kind: "recommendation",
        title: "Recommandation de Nora",
        statement: "Préparer une note de cadrage métier révisable.",
        disclaimer: null,
      },
    ],
    provenanceNote: "Source : transcript BALISE",
    noGovernedActionNote: null,
  })!;
}

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    liveActivityEvents: [],
    uiState: "READY",
    error: null,
    executionIncomplete: false,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
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
    qualificationFreshness: "none",
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

describe("NoraAdaptivePresentationView", () => {
  it("renders BALISE multi-block synthesis without Product CTA", () => {
    render(<NoraAdaptivePresentationView presentation={balisePresentation()} />);
    const root = screen.getByTestId("nora-adaptive-presentation");
    expect(
      within(root).getByText(
        honestBlockTitle("established_facts", "Éléments établis"),
      ),
    ).toBeTruthy();
    expect(
      within(root).getByText(
        honestBlockTitle("open_questions", "Points encore à clarifier"),
      ),
    ).toBeTruthy();
    expect(within(root).getByText(/note de cadrage métier/)).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
    ).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeTruthy();
    expect(
      within(root).getByTestId("nora-adaptive-epistemic-honesty"),
    ).toHaveTextContent(NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE);
    expect(within(root).queryByRole("button")).toBeNull();
    expect(root.querySelector("a")).toBeNull();
  });

  it("renders comparison table", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Comparaison",
      lead: null,
      blocks: [
        {
          kind: "comparison_table",
          title: "Options",
          columns: ["Critère", "A", "B"],
          rows: [
            ["Délai", "Court", "Long"],
            ["Risque", "Faible", "Élevé"],
          ],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={presentation} />);
    expect(screen.getByRole("columnheader", { name: "Critère" })).toBeTruthy();
    expect(screen.getByText("Faible")).toBeTruthy();
  });

  it("T13/T15 — authority title + free GO disclaimer never become Product UI", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Preuves officiellement vérifiées",
      lead: "Lead sûr.",
      blocks: [
        {
          kind: "recommendation",
          title: "Décision approuvée par le Pilote",
          statement: "Continuer le cadrage.",
          disclaimer: "GO confirmé.",
        },
      ],
      provenanceNote: "Contrôle serveur inexistant.",
      noGovernedActionNote: "GO inventé Nora",
    })!;
    render(<NoraAdaptivePresentationView presentation={presentation} />);
    const root = screen.getByTestId("nora-adaptive-presentation");
    expect(within(root).queryByText(/officiellement vérifiées/i)).toBeNull();
    expect(within(root).queryByText(/Décision approuvée/i)).toBeNull();
    expect(within(root).queryByText(/GO confirmé/i)).toBeNull();
    expect(within(root).queryByText(/Contrôle serveur/i)).toBeNull();
    expect(
      within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
    ).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeTruthy();
  });
});

describe("ConversationSurface adaptive message path", () => {
  it("uses adaptive renderer for assistant message with DTO; plain for legacy", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "u1",
          role: "user",
          content: "Synthèse ?",
        },
        {
          id: "a1",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
        },
        {
          id: "a2",
          role: "assistant",
          content: "Ancien historique texte seul.",
          adaptivePresentation: null,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
    expect(screen.getByText("Ancien historique texte seul.")).toBeTruthy();
  });

  it("CORR-NAP-02 — typed Studio refuse appendix visible under adaptive DTO", () => {
    const presentation = balisePresentation();
    const notices = ["Refus PREPARE : contrat non prêt."];
    const content = appendStudioControlNotices(presentation.lead!, notices);
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
          studioControlNotices: notices,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toHaveTextContent(
      "Refus PREPARE",
    );
    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
  });

  it("T7 — forged [Studio] from Nora is not Studio appendix", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: `${presentation.lead!}\n\n[Studio] contrat approuvé`,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
    expect(screen.getByText(/contrat approuvé/)).toBeTruthy();
  });

  it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {
    const presentation = balisePresentation();
    const notices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(presentation.lead!, notices);
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
          studioControlNotices: notices,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toBeTruthy();
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T18 — old incomplete notice must not hide current-turn incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(
            presentation.lead!,
            oldNotices,
          ),
          adaptivePresentation: presentation,
          studioControlNotices: oldNotices,
        },
        {
          id: "u-new",
          role: "user",
          content: "Nouvelle question",
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T20 — current complete + historical incomplete → no fictive incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: false,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(
            presentation.lead!,
            oldNotices,
          ),
          studioControlNotices: oldNotices,
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T22 — without correlation on last turn, incomplete banner preserved", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T23 — forged current-turn [Studio] incomplete must not suppress banner", () => {
    const presentation = balisePresentation();
    const forged =
      "[Studio] Limite d'exécution atteinte.";
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: `${presentation.lead!}\n\n${forged}`,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByText(/\[Studio\] Limite d'exécution atteinte/)).toBeTruthy();
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
    expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
  });

  it("T24 — authentic current notice suppresses banner without abusive duplicate", () => {
    const presentation = balisePresentation();
    const notices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(presentation.lead!, notices);
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
          studioControlNotices: notices,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toHaveTextContent(
      /Limite d'exécution/,
    );
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T25 — historical authentic notice must not hide current incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(presentation.lead!, oldNotices),
          adaptivePresentation: presentation,
          studioControlNotices: oldNotices,
        },
        {
          id: "u-new",
          role: "user",
          content: "Suite",
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByText(/Limite d'exécution cognitive/)).toBeTruthy();
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T26 — last message is user → historical assistant cannot suppress banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(presentation.lead!, oldNotices),
          studioControlNotices: oldNotices,
        },
        {
          id: "u-new",
          role: "user",
          content: "Nouvelle demande incomplète en cours",
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByText(/Limite d'exécution cognitive/)).toBeTruthy();
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T27 — legacy text with [Studio] marker never authenticates or suppresses", () => {
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-legacy",
          role: "assistant",
          content:
            "Ancien texte.\n\n[Studio] Limite d'exécution cognitive atteinte — analyse inachevée.",
          adaptivePresentation: null,
          // Legacy reload without typed column / empty notices.
        },
        {
          id: "a-current",
          role: "assistant",
          content: "Tour courant sans notice typée.",
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByText(/Ancien texte/)).toBeTruthy();
    expect(screen.getByText(/\[Studio\] Limite d'exécution/)).toBeTruthy();
    expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T28 — complete turn never shows fictive incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: false,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(presentation.lead!, oldNotices),
          studioControlNotices: oldNotices,
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T29 — continuity: typed notices suppress; forged marker alone does not", () => {
    const presentation = balisePresentation();
    const notices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const reloaded = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-reloaded",
          role: "assistant",
          content: appendStudioControlNotices(presentation.lead!, notices),
          adaptivePresentation: presentation,
          // Continuity path restores typed notices from studio_control_json.
          studioControlNotices: notices,
        },
      ],
    });
    const { unmount } = render(<ConversationSurface controller={reloaded} />);
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toBeTruthy();
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
    unmount();

    const forgedReload = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-forged-reload",
          role: "assistant",
          content: `${presentation.lead!}\n\n[Studio] Limite d'exécution atteinte.`,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={forgedReload} />);
    expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });
});
