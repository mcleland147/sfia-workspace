/** @vitest-environment jsdom */
/**
 * P5-S07 CP01 — Journal du cycle as a dedicated principal surface
 * (P3 94:2 desktop · 94:222 expanded · 192:41 mobile list · 192:81 detail).
 *
 * Proves the single JournalSurface serves both compositions: a compact rail
 * shortcut and the principal master/detail view. No JournalSurfaceV2.
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import {
  JournalSurface,
  type JournalReservationCard,
  type JournalSurfaceEntry,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

afterEach(() => {
  cleanup();
});

const entries: JournalSurfaceEntry[] = [
  {
    journalEntryId: "cje:1",
    topicOrdinal: 1,
    title: "Architecture de l'espace projet",
    currentSummary:
      "L'espace projet garde la conversation comme canal principal pour avancer.",
    stabilizedPoints: [
      "La conversation reste l'espace principal pour agir avec Nora.",
      "L'Aperçu sert à comprendre l'état du projet.",
    ],
    openPoints: ["Vérifier la cohérence finale du Journal."],
    status: "active",
    updatedAt: new Date(Date.now() - 3 * 60000).toISOString(),
    sourceTurnRefs: ["pt:a", "pt:b", "pt:c", "pt:d"],
    sourceTurnCount: 4,
    isCurrentTopic: true,
  },
  {
    journalEntryId: "cje:2",
    topicOrdinal: 2,
    title: "Création d'un projet",
    currentSummary: "La création reste conversationnelle.",
    stabilizedPoints: [],
    openPoints: [],
    status: "archived",
    updatedAt: new Date(Date.now() - 3 * 3600_000).toISOString(),
    sourceTurnRefs: [],
    sourceTurnCount: 0,
  },
];

const transcript = [
  {
    id: "pt:a",
    role: "user",
    content: "On garde la conversation ?",
    createdAt: "2026-10-04T10:24:00.000Z",
  },
  {
    id: "pt:b",
    role: "assistant",
    content: "Oui, les surfaces complètent.",
    createdAt: "2026-10-04T10:25:00.000Z",
  },
  {
    id: "pt:c",
    role: "user",
    content: "Je veux retrouver les sujets.",
    createdAt: "2026-10-04T10:26:00.000Z",
  },
  {
    id: "pt:d",
    role: "assistant",
    content: "Le Journal sert de mémoire.",
    createdAt: "2026-10-04T10:27:00.000Z",
  },
];

const linkedReservation = {
  epistemicItemId: "epi:1",
  ordinal: 1,
  title: "Cohérence du Journal",
  summary: "Cohérence du Journal",
  statement: "Cohérence du Journal",
  presentationState: "may_affect_finalization",
  presentationStateLabel: "Peut affecter la clôture",
  impactLabel: "Moyen",
  attentionLabel: "Avant clôture",
  finalizationRelevanceLabel: "Ne bloque pas la clôture",
  rationale: "",
  resolutionCondition: "",
  journalEntryRefs: ["cje:1"],
  sourceTurnRefs: [],
  hasResolutionProposal: false,
  isLegacy: false,
  canDefer: false,
} as JournalReservationCard;

function renderPrincipal(overrides: Record<string, unknown> = {}) {
  return render(
    <JournalSurface
      variant="principal"
      entries={entries}
      cycleInstanceId="cyc:1"
      selectedEntryId={null}
      onSelectEntry={() => undefined}
      onViewExchanges={() => undefined}
      onFocusTurn={() => undefined}
      transcriptMessages={transcript}
      cycleLabel="Cycle de livraison"
      currentnessLabel="À jour"
      {...overrides}
    />,
  );
}

describe("P5-S07 CP01 Journal principal surface", () => {
  it("94:2 — dedicated surface with return link, tabs with counts and master/detail", () => {
    renderPrincipal({ onReturnToConversation: () => undefined });

    const surface = screen.getByTestId("project-journal-surface");
    expect(surface).toHaveAttribute("data-variant", "principal");
    // The rail testid belongs to the rail composition only.
    expect(screen.queryByTestId("cycle-journal-rail")).toBeNull();
    expect(
      screen.getByTestId("project-journal-return-conversation"),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Journal du cycle" })).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-cycle-chip").textContent).toBe(
      "Cycle de livraison",
    );
    expect(screen.getByTestId("project-journal-currentness").textContent).toBe(
      "À jour",
    );

    for (const tab of ["sujets", "reserves", "recommandations", "decisions"]) {
      expect(screen.getByTestId(`memory-rail-tab-${tab}`)).toBeInTheDocument();
    }
    const sujetsTab = screen.getByTestId("memory-rail-tab-sujets");
    expect(sujetsTab.textContent).toMatch(/Sujets/);
    expect(sujetsTab.textContent).toMatch(/1|2/);
    // Plain digit — never a separate circular badge node with its own box model.
    expect(sujetsTab.querySelector("[class*='tabCount']")).toBeTruthy();

    // Subjects index + the selected subject detail live side by side.
    expect(screen.getByTestId("cycle-journal-entry-cje:1")).toBeInTheDocument();
    expect(screen.getByTestId("cycle-journal-entry-cje:2")).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-detail")).toBeInTheDocument();
    expect(screen.getByTestId("cycle-journal-ordinal-cje:1").textContent).toBe(
      "Sujet 01",
    );
    expect(screen.getByTestId("project-journal-detail-title").textContent).toBe(
      "Architecture de l'espace projet",
    );
    expect(
      screen.getByTestId("project-journal-detail").textContent,
    ).toContain("Mis à jour il y a 3 min");

    const stabilized = screen.getByTestId("project-journal-stabilized");
    expect(within(stabilized).getAllByRole("listitem")).toHaveLength(2);
    expect(
      within(screen.getByTestId("project-journal-open")).getAllByRole("listitem"),
    ).toHaveLength(1);
  });

  it("94:222 — exchanges preview expands to the full linked index", () => {
    const viewed: string[] = [];
    const focused: string[] = [];
    renderPrincipal({
      onViewExchanges: (e: JournalSurfaceEntry) => viewed.push(e.journalEntryId),
      onFocusTurn: (id: string) => focused.push(id),
    });

    const panel = screen.getByTestId("cycle-journal-exchanges-cje:1");
    expect(within(panel).getAllByRole("button")).toHaveLength(2);
    expect(
      screen.getByTestId("project-journal-exchanges").textContent,
    ).toContain("2 sur 4 affichés");

    fireEvent.click(screen.getByTestId("cycle-journal-view-cje:1"));
    expect(viewed).toEqual(["cje:1"]);
    expect(
      within(screen.getByTestId("cycle-journal-exchanges-cje:1")).getAllByRole(
        "button",
      ),
    ).toHaveLength(4);
    expect(
      screen.getByTestId("project-journal-exchanges").textContent,
    ).toContain("4 échanges affichés");
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:a").textContent,
    ).toMatch(/VOUS/);
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:a").textContent,
    ).toMatch(/04\/10/);
    expect(
      screen.getByTestId("cycle-journal-exchange-pt:b").textContent,
    ).toMatch(/NORA/);

    fireEvent.click(screen.getByTestId("cycle-journal-exchange-pt:c"));
    expect(focused).toEqual(["pt:c"]);

    fireEvent.click(screen.getByTestId("project-journal-open-in-conversation"));
    expect(focused[1]).toBe("pt:a");
  });

  it("never invents a subject link: only Reservations carry a durable ref", () => {
    const { rerender } = renderPrincipal();
    expect(screen.getByTestId("project-journal-linked").textContent).toContain(
      "seules les réserves portent un rattachement durable",
    );

    rerender(
      <JournalSurface
        variant="principal"
        entries={entries}
        cycleInstanceId="cyc:1"
        selectedEntryId="cje:1"
        onSelectEntry={() => undefined}
        onViewExchanges={() => undefined}
        onFocusTurn={() => undefined}
        transcriptMessages={transcript}
        reservations={[linkedReservation]}
      />,
    );
    expect(
      screen.getByTestId("project-journal-linked-reservation-epi:1"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("project-journal-linked").textContent).toContain(
      "ne portent pas de rattachement durable",
    );
  });

  it("192:41 → 192:81 — mobile list and detail are one nav level", () => {
    renderPrincipal({ onReturnToConversation: () => undefined });
    const surface = screen.getByTestId("project-journal-surface");
    expect(surface).toHaveAttribute("data-mobile-detail", "false");
    expect(screen.getByTestId("project-journal-detail")).toHaveAttribute(
      "data-mobile-hidden",
      "true",
    );
    // List chrome present while browsing subjects.
    expect(
      screen.getByTestId("project-journal-return-conversation"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("memory-rail-tabs")).toBeInTheDocument();

    fireEvent.click(
      within(screen.getByTestId("cycle-journal-entry-cje:2")).getByRole("button", {
        name: /Création d'un projet/,
      }),
    );
    expect(surface).toHaveAttribute("data-mobile-detail", "true");
    expect(screen.getByTestId("project-journal-detail")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );
    // J4 contract: list chrome stays in the tree but is flagged for mobile hide.
    expect(surface.getAttribute("data-mobile-detail")).toBe("true");

    fireEvent.click(screen.getByTestId("project-journal-back-to-subjects"));
    expect(surface).toHaveAttribute("data-mobile-detail", "false");
  });

  it("J1 — missing cycleLabel uses Pilot-facing surface-identity copy", () => {
    renderPrincipal({ cycleLabel: null });
    expect(screen.getByTestId("project-journal-cycle-chip").textContent).toBe(
      "Espace projet / interaction",
    );
  });

  it("empty subject keeps honest unavailable states rather than blank blocks", () => {
    renderPrincipal({ selectedEntryId: "cje:2" });
    expect(screen.getByTestId("project-journal-stabilized").textContent).toContain(
      "Aucun point stabilisé",
    );
    expect(screen.getByTestId("project-journal-open").textContent).toContain(
      "Aucun point ouvert",
    );
    expect(screen.getByTestId("project-journal-exchanges").textContent).toContain(
      "Aucun échange durable",
    );
    expect(
      screen.queryByTestId("project-journal-open-in-conversation"),
    ).toBeNull();
  });
});

describe("P5-S07 CP01 Journal rail stays a shortcut", () => {
  it("bounds the index and promotes the dedicated surface", () => {
    let opened = 0;
    render(
      <JournalSurface
        entries={entries}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => undefined}
        onViewExchanges={() => undefined}
        onFocusTurn={() => undefined}
        transcriptMessages={transcript}
        railMaxEntries={1}
        onOpenFullJournal={() => {
          opened += 1;
        }}
      />,
    );

    expect(screen.getByTestId("cycle-journal-rail")).toHaveAttribute(
      "data-variant",
      "rail",
    );
    expect(screen.queryByTestId("project-journal-detail")).toBeNull();
    expect(screen.getByTestId("cycle-journal-entry-cje:1")).toBeInTheDocument();
    expect(screen.queryByTestId("cycle-journal-entry-cje:2")).toBeNull();

    fireEvent.click(screen.getByTestId("cycle-journal-overflow"));
    fireEvent.click(screen.getByTestId("cycle-journal-open-full"));
    expect(opened).toBe(2);
  });
});
