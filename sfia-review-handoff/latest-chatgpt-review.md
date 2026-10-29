# CORR-NAP-03 — INCOMPLETE BANNER TRUST FIX

**Cycle:** SFIA 8 — Delivery / implémentation
**Profil:** STANDARD — micro-correction
**Review pack:** FULL
**Date/heure UTC:** 2026-10-29T20:19:08Z
**Worktree:** `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation`
**Branch:** `feat/akg-m5-nora-adaptive-presentation`
**HEAD:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**origin/main:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**Merge-base:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`

## Verdict unique

**LOCAL CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT FINAL REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING**

Aucun READY FOR PR / READY FOR REAL / FIGMA ALIGNED / ADOPTED.

## 1. Git Truth Check

| Check | Résultat |
|-------|----------|
| toplevel | MATCH |
| branche | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| WIP Delivery Option C + CORR-NAP-01/02 | PRÉSERVÉ, non commité |
| staged | vide |
| handoff distant avant publish | `185c13247abd40aa3ef7dee3d358c9172002df18` / blob `9f83f9cbb7bd142bdd8c6f7e6c7d99b20bddbda2` (CORR-NAP-02) |
| autres worktrees | non touchés |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts

```

## 2. Git Review Index

- SoT cycle précédent: handoff CORR-NAP-02 `185c13247abd40aa3ef7dee3d358c9172002df18` blob `9f83f9cbb7bd142bdd8c6f7e6c7d99b20bddbda2`
- SoT ce cycle: ce pack CORR-NAP-03 (remplace le rapport local)
- Mono-cycle: CORR-NAP-03 uniquement (pas de mélange de cycles dans le corps décisionnel)

## 3. Sources consultées

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- Operating Model / règles SFIA v2.6 (référence cycle)
- Build Doctrine, Convergence Roadmap, Product Completion C1
- doctrines v3 30, 32, 34, 35 ; PRR README + 02/03/04/06/07/08/09 (qualification)
- Handoff CORR-NAP-02 relu (tip/blob ci-dessus)
- Code: ConversationSurface.tsx (helpers banner + render path)
- Tests: noraAdaptivePresentation.ui.test.tsx

Figma A3 466:2 / A4 466:71 — pas de modification design; pixel non démontré sans capture runtime.

## 4. Cause de l'anomalie

`messageAlreadyShowsExecutionIncomplete` (CORR-NAP-02) acceptait un repli:

`content.includes("[Studio]") && /limite d'exécution/i.test(content)`

Nora peut forger ou citer `[Studio]`. Ce marqueur n'est pas une provenance serveur.
Conséquence: avec `executionIncomplete=true`, un faux marqueur pouvait masquer le bandeau.

Également, `lastAssistantShowsExecutionIncomplete` remontait le dernier assistant même si le message trailing était un **user** → une notice historique pouvait supprimer l'alerte du tour courant (T26).

## 5. Correction appliquée

1. Suppression totale du repli textuel `[Studio]` pour masquer le bandeau.
2. Seules les `studioControlNotices` typées (regex limite d'exécution) authentifient.
3. Corrélation stricte: le message **trailing** doit être `assistant` avec notice typée; sinon conserver le bandeau.
4. Aucune nouvelle persistance, aucun nouvel ID, aucun modèle d'autorité.

### Exact helpers (post-correction)

```typescript
/**
 * CORR-NAP-03 — typed Studio notices only. Content / "[Studio]" markers never
 * prove provenance and must not suppress an active incomplete control.
 */
function messageHasAuthenticatedExecutionIncompleteNotice(
  studioControlNotices?: readonly string[] | null,
): boolean {
  const notices = studioControlNotices ?? [];
  return notices.some((n) => /limite d['']ex[eé]cution/i.test(n));
}

/**
 * CORR-NAP-03 — suppress incomplete banner only when the trailing message is
 * the current-turn assistant AND it already shows an authenticated incomplete
 * notice. If the last message is a user (or anything else), correlation to the
 * incomplete turn is uncertain → keep the banner. Never scan history.
 */
function currentTurnAlreadyShowsAuthenticatedIncomplete(
  messages: readonly {
    role: string;
    content: string;
    studioControlNotices?: readonly string[] | null;
  }[],
): boolean {
  if (messages.length === 0) return false;
  const trailing = messages[messages.length - 1];
  if (trailing.role !== "assistant") return false;
  return messageHasAuthenticatedExecutionIncompleteNotice(
    trailing.studioControlNotices,
  );
}

```

### Exact call site

```tsx
  ) : null}

      {executionIncomplete &&
      !currentTurnAlreadyShowsAuthenticatedIncomplete(messages) ? (
        <div
          className={styles.stoppedBanner}
          role="status"
          data-testid="project-assistant-incomple
```

### Diff conceptuel CORR-NAP-02 → CORR-NAP-03 (ConversationSurface banner trust)

```diff
- import { resolveAdaptiveAssistantRender, STUDIO_CONTROL_MARKER } from "...";
+ import { resolveAdaptiveAssistantRender } from "...";

- function messageAlreadyShowsExecutionIncomplete(content, studioControlNotices) {
-   if (notices.some(...limite...)) return true;
-   // Legacy: marker+phrase on content
-   return content.includes(STUDIO_CONTROL_MARKER) && /limite.../.test(content);
- }
- function lastAssistantShowsExecutionIncomplete(messages) {
-   // scan backward to last assistant (even if trailing is user)
- }
+ function messageHasAuthenticatedExecutionIncompleteNotice(studioControlNotices) {
+   return (studioControlNotices ?? []).some(n => /limite d['']ex[eé]cution/i.test(n));
+ }
+ function currentTurnAlreadyShowsAuthenticatedIncomplete(messages) {
+   const trailing = messages[messages.length - 1];
+   if (!trailing || trailing.role !== "assistant") return false;
+   return messageHasAuthenticatedExecutionIncompleteNotice(trailing.studioControlNotices);
+ }

- {executionIncomplete && !lastAssistantShowsExecutionIncomplete(messages) ? (
+ {executionIncomplete && !currentTurnAlreadyShowsAuthenticatedIncomplete(messages) ? (
```

Périmètre fichiers: ConversationSurface.tsx + ui test uniquement. Aucun autre fichier modifié sous CORR-NAP-03.

## 6. Contenu complet — fichier test modifié (untracked Delivery / créé antérieurement, étendu T23–T29)

### FILE: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx`

```tsx
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

```

## 7. Tests T23–T29 et régressions

### Commande 1

```
npx vitest run __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx \
  __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
```

- exit **0**
- **51 passed** (17 ui incl. T23–T29 + 34 d0)

| ID | Résultat |
|----|----------|
| T23 forged current | PASS — texte visible, bandeau visible, pas d'appendix |
| T24 authentic current | PASS — appendix, pas de bandeau doublon |
| T25 historical authentic | PASS — ancien visible, bandeau courant visible |
| T26 last is user | PASS — bandeau visible |
| T27 legacy text | PASS — texte conservé, pas d'auth, bandeau visible |
| T28 complete | PASS — pas de bandeau fictif |
| T29 reload/continuity | PASS — typé suppress; forgé ne suppress pas |

T19/T18/T20/T22 conservés et PASS.

### Commande 2 — régressions

```
npx vitest run __tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts \
  __tests__/nora-cognitive-runtime/pilotabilityJournalIntegrity.d0.test.ts
```

- exit **0** — **24 passed**

### Gates

- `npx eslint …ConversationSurface.tsx …noraAdaptivePresentation.ui.test.tsx --max-warnings 0` → exit **0**
- `npx tsc --noEmit -p tsconfig.json` → exit **0**
- Build Next: non exécuté — micro-correction UI déterministe; tsc+eslint+vitest suffisent sous ce GO; absence explicite (pas de gate build requis par le contrat si applicable sinon expliquer).

## 8. Preuves de non-usurpation

| Invariant | Preuve |
|-----------|--------|
| Marqueur `[Studio]` n'authentifie pas | T23, T27, T29 forged |
| Historique n'efface pas alerte active | T25, T26 |
| Notice typée courante peut supprimer doublon | T24, T29 typed |
| Tour complet ≠ bandeau fictif | T28 |
| Texte libre Nora ne masque pas contrôle Studio | T23 |

## 9. Fake/Real Qualification

- Applicable: OUI
- Frontière: OpenAI Agents / Structured Outputs
- Tests: déterministes uniquement
- Niveau: **DETERMINISTIC PROVEN** (périmètre testé)
- REAL BOUNDARY / E2E REAL / G-REAL / OpenAI LIVE / Cursor REAL: NON
- READY FOR REAL / ADOPTED: NON

## 10. R23 / R24

**R23**
- Chemin rendu: ConversationSurface incomplete banner + adaptive resolve inchangé hors banner trust
- Invariants provenance: typed notices only — **BEHAVIOR PROVEN** (T23–T29)
- Historique ne peut pas supprimer alerte active — **BEHAVIOR PROVEN** (T25/T26)
- DOCUMENTED: ce pack
- COVERAGE VERIFIED: T23–T29
- KNOWN GAP: runtime screenshot A3/A4; LIVE DTO; intégration projet

**R24** (qualification only — no write)
- PRR 03: UI / contrôle conversation (banner trust)
- PRR 06: continuité notices typées (comportement reload T29; pas de nouveau schéma)
- PRR 09: limites / non-usurpation
- **R24 DOCUMENTARY SYNC PENDING — MORRIS DOC GO REQUIRED**

## 11. Trajectoire / capacité / gates ouverts

- Capacité: présentation adaptative Nora — micro-fiabilité banner
- Suivante: QA runtime/Figma sous GO, puis intégration gouvernée
- EP-S2-08 PARTIAL; EP-S2-05 NOT PROVEN; L3 GLOBAL OPEN; L4 NOT AUTHORIZED; Runtime v3 NON ADOPTED
- ChatGPT final review required
- Pas de commit/push projet

## 12. Handoff publish

- Branche: `sfia/review-handoff`
- Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- Message: `docs(review-handoff): publish CORR-NAP-03 banner trust review`
- Remote tip/blob: *complété après publish*

---
**FIN REVIEW PACK CORR-NAP-03 — FULL**
