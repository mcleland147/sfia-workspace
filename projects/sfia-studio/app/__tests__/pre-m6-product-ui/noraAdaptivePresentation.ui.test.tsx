/** @vitest-environment jsdom */
/**
 * UI — Nora adaptive presentation renderer (A3/A4 matrix samples).
 * CORR-NAP-02 — typed Studio notices + incomplete banner = last assistant only.
 * DETERMINISTIC — no Product actions from free render.
 */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  NoraAdaptivePresentationView,
  NoraCanonicalFallbackView,
} from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
import {
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  appendStudioControlNotices,
  honestBlockTitle,
  composeCanonicalFromPresentation,
  parseNoraAdaptivePresentation,
  type NoraAdaptivePresentation,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { formatNoraAssistantDisplayText } from "@/features/project-assistant/presentationLabels";
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
      within(root).queryByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeNull();
    expect(
      within(root).queryByTestId("nora-adaptive-epistemic-honesty"),
    ).toBeNull();
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
    // D1 — internal noGovernedAction chrome retired from Pilot view.
    expect(
      within(root).queryByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeNull();
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
          content: composeCanonicalFromPresentation(presentation),
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
    const content = appendStudioControlNotices(
      composeCanonicalFromPresentation(presentation),
      notices,
    );
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
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
      /contrat approuvé/,
    );
  });

  it("D1 — long narrative / short lead → B single canonical fallback (no dual)", () => {
    const presentation = balisePresentation();
    const shortLead = presentation.lead!;
    const longNarrative = [
      shortLead,
      "",
      "Extension canonique : le contrat n'est pas prêt.",
      "Refus explicite de PREPARE jusqu'au 2099-01-01 sauf exception Pilote.",
      "Cette phrase critique ne figure pas dans le lead.",
    ].join("\n");
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: longNarrative,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
    expect(screen.queryByTestId("nora-adaptive-canonical-narrative")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback.getAttribute("data-composition")).toBe("canonical-fallback");
    expect(fallback).toHaveTextContent(/n'est pas prêt/);
    expect(fallback).toHaveTextContent(/2099-01-01/);
    expect(fallback).toHaveTextContent(/phrase critique/);
    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
  });

  it("D1 — body ≡ compose → A1 structured-first single surface", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: composeCanonicalFromPresentation(presentation),
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    const root = screen.getByTestId("nora-adaptive-presentation");
    expect(root.getAttribute("data-canonical-layer")).toBe("none");
    expect(root.getAttribute("data-composition")).toBe("structured-first");
    expect(
      screen.queryByTestId("nora-adaptive-canonical-narrative"),
    ).toBeNull();
    expect(
      screen.queryByTestId("nora-adaptive-secondary-projection"),
    ).toBeNull();
    expect(screen.queryByTestId("nora-canonical-fallback")).toBeNull();
  });

  it("CR-02 R1-T05 — contradiction approuver/rejeter: canonical refusal before projected recommendation", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: "Nous recommandons d'approuver le cycle.",
      blocks: [
        {
          kind: "recommendation",
          title: null,
          statement: "Nous recommandons d'approuver le cycle.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const content =
      "Nous recommandons de rejeter le cycle. Refus jusqu'au 2099-01-01 sauf exception Pilote.";
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback).toHaveTextContent(/rejeter/);
    expect(fallback).toHaveTextContent(/2099-01-01/);
    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
    expect(screen.queryByText(/GO confirm/i)).toBeNull();
  });

  it("CR-02 R2 / CR-03 — canonical layer keeps escapes/negation; no HTML injection", () => {
    const presentation = balisePresentation();
    const rawBody = [
      presentation.lead!,
      "Ligne\\navec\\téchappements.",
      "**Emphase** et `code` restant lisibles.",
      "Négation critique : le contrat n'est pas prêt.",
    ].join("\n");
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: rawBody,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback.getAttribute("data-composition")).toBe("canonical-fallback");
    expect(fallback).toHaveTextContent(/Ligne/);
    expect(fallback).toHaveTextContent(/échappements/);
    expect(fallback).toHaveTextContent(/Emphase/);
    expect(fallback).toHaveTextContent(/n'est pas prêt/);
    expect(fallback.innerHTML).not.toMatch(/<script|onload=/i);
  });

  it("CR-03 T01/T02 — formatter-empty source → B fallback keeps source (no dual)", () => {
    const presentation = balisePresentation();
    const content = "READY_NO_GATE";
    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
      /READY_NO_GATE/,
    );
  });

  it("CR-03 T03 — decision-refusal phrase remains in canonical DOM", () => {
    const presentation = balisePresentation();
    const content = "Nora n'émet pas de décision Pilote.";
    expect(formatNoraAssistantDisplayText(content).trim()).toBe("");
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
      /n'émet pas de décision Pilote/i,
    );
  });

  it("CR-03 T04/T17 — partial formatter scrub keeps deleted phrase + negation in DOM", () => {
    const presentation = balisePresentation();
    const content = [
      "Nora n'émet pas de décision Pilote.",
      "Le contrat n'est pas prêt jusqu'au 2099-01-01 sauf exception Pilote.",
    ].join(" ");
    const scrubbed = formatNoraAssistantDisplayText(content);
    expect(scrubbed.trim().length).toBeGreaterThan(0);
    expect(scrubbed).not.toMatch(/n'émet pas de décision Pilote/i);
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback).toHaveTextContent(/n'émet pas de décision Pilote/i);
    expect(fallback).toHaveTextContent(/n'est pas prêt/);
    expect(fallback).toHaveTextContent(/2099-01-01/);
    expect(fallback).toHaveTextContent(/exception/);
  });

  it("CR-02 R2-T06 — authenticated Studio notice once in appendix, not duplicated as canonical primary", () => {
    const presentation = balisePresentation();
    const notices = ["Refus PREPARE : intention non confirmée."];
    const content = appendStudioControlNotices(
      `${presentation.lead!}\n\nCorps supplémentaire non couvert.`,
      notices,
    );
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
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback).toHaveTextContent(/Corps supplémentaire/);
    expect(fallback).toHaveTextContent(/Refus PREPARE/);
    expect(screen.getAllByText(/Refus PREPARE/).length).toBe(1);
  });

  it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {
    const presentation = balisePresentation();
    const notices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(
      composeCanonicalFromPresentation(presentation),
      notices,
    );
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
          content: composeCanonicalFromPresentation(presentation),
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
          content: composeCanonicalFromPresentation(presentation),
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
          content: composeCanonicalFromPresentation(presentation),
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
    const content = appendStudioControlNotices(
      composeCanonicalFromPresentation(presentation),
      notices,
    );
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
          content: composeCanonicalFromPresentation(presentation),
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
          content: composeCanonicalFromPresentation(presentation),
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
          content: appendStudioControlNotices(
            composeCanonicalFromPresentation(presentation),
            notices,
          ),
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

describe("CORR-NAP-LIVE-RENDER-01 — fallback B GFM table UI", () => {
  const synthMd = [
    "Comparaison synthétique de trois options.",
    "",
    "| Critère | Option A | Option B | Option C |",
    "| --- | --- | --- | --- |",
    "| Coût | 12 mW | 4 MW | 800 Mb |",
    "| Délai | 2 semaines | STOP si hors budget | 1 mois |",
    "| Réserve | ne pas fusionner | condition Pilote | n'est pas prêt |",
    "",
    "Recommandation : privilégier Option B sous réserve Pilote.",
    "",
    "Recommandation : privilégier Option B sous réserve Pilote.",
  ].join("\n");

  it("R02/R03/R07 — ConversationSurface B renders HTML table, single surface", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: synthMd,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-presentation")).toBeNull();
    const fallback = screen.getByTestId("nora-canonical-fallback");
    expect(fallback.getAttribute("data-composition")).toBe("canonical-fallback");
    expect(fallback.getAttribute("data-fallback-tables")).toBe("true");
    const table = screen.getByTestId("nora-canonical-fallback-table");
    expect(table.tagName).toBe("TABLE");
    expect(within(table).getByText("12 mW")).toBeTruthy();
    expect(within(table).getByText("4 MW")).toBeTruthy();
    expect(within(table).getByText("800 Mb")).toBeTruthy();
    expect(within(table).getByText("STOP si hors budget")).toBeTruthy();
    expect(within(table).getByText("n'est pas prêt")).toBeTruthy();
    // Pipes from GFM source must not dominate the fallback surface.
    expect(fallback.textContent ?? "").not.toMatch(/\|\s*---\s*\|/);
    expect(screen.queryByTestId("nora-adaptive-secondary-projection")).toBeNull();
    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
  });

  it("R04/R05 — model-duplicated recommendation stays (no fuzzy hide)", () => {
    render(<NoraCanonicalFallbackView plainText={synthMd} />);
    const matches = screen.getAllByText(
      /privilégier Option B sous réserve Pilote/,
    );
    expect(matches.length).toBe(2);
  });

  it("R01 — admitted comparison_table uses adaptive View table", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: null,
      blocks: [
        {
          kind: "comparison_table",
          title: null,
          columns: ["Critère", "A", "B"],
          rows: [["Coût", "12 mW", "4 MW"]],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const content = composeCanonicalFromPresentation(dto);
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: dto,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
    expect(screen.queryByTestId("nora-canonical-fallback")).toBeNull();
    expect(screen.getByText("12 mW")).toBeTruthy();
    expect(screen.getByText("4 MW")).toBeTruthy();
  });

  it("R11/R12 — no invented authority / no CTA from markdown table fallback", () => {
    render(
      <NoraCanonicalFallbackView
        plainText={`${synthMd}\n\nGO confirmé — exécuter maintenant.`}
      />,
    );
    expect(screen.queryByRole("button")).toBeNull();
    expect(document.querySelector("button")).toBeNull();
    expect(screen.getByTestId("nora-canonical-fallback")).toHaveTextContent(
      /GO confirmé/,
    );
  });

  it("R13 — rehydrate same content → same table DOM contract", () => {
    const presentation = balisePresentation();
    const msg = {
      id: "a1",
      role: "assistant" as const,
      content: synthMd,
      adaptivePresentation: presentation,
    };
    const { unmount } = render(
      <ConversationSurface controller={stubController({ messages: [msg] })} />,
    );
    expect(screen.getByTestId("nora-canonical-fallback-table")).toBeTruthy();
    unmount();
    render(
      <ConversationSurface controller={stubController({ messages: [msg] })} />,
    );
    expect(screen.getByTestId("nora-canonical-fallback-table")).toBeTruthy();
    expect(screen.getByText("12 mW")).toBeTruthy();
  });
});

describe("CORR-NAP-D1-EYEBROW-01 — View authority defense", () => {
  it("E04 — unnormalized authority eyebrow absent from DOM", () => {
    const unsafe = {
      version: 1 as const,
      eyebrow: "Contrôle serveur effectué",
      title: null,
      lead: "Lead utile pour le Pilote.",
      blocks: Object.freeze([
        Object.freeze({
          kind: "plain" as const,
          text: "Substance métier conservée.",
        }),
      ]),
      provenanceNote: null,
      noGovernedActionNote: NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    } as NoraAdaptivePresentation;
    render(<NoraAdaptivePresentationView presentation={unsafe} />);
    expect(screen.queryByText("Contrôle serveur effectué")).toBeNull();
    expect(screen.getByText("Substance métier conservée.")).toBeTruthy();
    expect(screen.getByText("Lead utile pour le Pilote.")).toBeTruthy();
  });

  it("E05 — neutral eyebrow displayed normally", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "NORA / Comparaison",
      title: null,
      lead: "Deux options restent ouvertes.",
      blocks: [{ kind: "plain", text: "Option A." }],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={dto} />);
    expect(screen.getByText("NORA / Comparaison")).toBeTruthy();
  });

  it("E14 — no governed CTA button created from DTO", () => {
    const dto = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "GO confirmé",
      title: null,
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: null,
          statement: "Proposer une note révisable.",
          disclaimer: null,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={dto} />);
    expect(screen.queryByRole("button")).toBeNull();
    expect(document.querySelector("button")).toBeNull();
    expect(screen.queryByText("GO confirmé")).toBeNull();
    expect(screen.getByText("Proposer une note révisable.")).toBeTruthy();
  });
});
