/** @vitest-environment jsdom */
/**
 * P5-S07 CP03 — P3 visual fidelity contracts (presentation only).
 * V-T01–V-T16 where feasible without pixel capture.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import {
  JournalSurface,
  type JournalSurfaceEntry,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";
import { HistorySurface } from "@/features/pre-m6-product-ui/surfaces/HistorySurface";
import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";
import journalCss from "@/features/pre-m6-product-ui/surfaces/JournalSurface.module.css";
import historyCss from "@/features/pre-m6-product-ui/surfaces/HistorySurface.module.css";
import workspaceCss from "@/features/pre-m6-product-ui/ProjectWorkspacePage.module.css";

afterEach(() => {
  cleanup();
});

const entries: JournalSurfaceEntry[] = [
  {
    journalEntryId: "cje:v1",
    topicOrdinal: 1,
    title: "Architecture de l'espace projet",
    currentSummary: "Conversation comme canal principal.",
    stabilizedPoints: ["Point A"],
    openPoints: ["Point B"],
    status: "active",
    updatedAt: new Date(Date.now() - 60_000).toISOString(),
    sourceTurnRefs: ["pt:1", "pt:2", "pt:3"],
    sourceTurnCount: 3,
    isCurrentTopic: true,
  },
];

const transcript = [
  {
    id: "pt:1",
    role: "user",
    content: "On garde la conversation ?",
    createdAt: "2026-10-04T10:24:00.000Z",
  },
  {
    id: "pt:2",
    role: "assistant",
    content: "Oui, les surfaces complètent.",
    createdAt: "2026-10-04T10:25:00.000Z",
  },
  {
    id: "pt:3",
    role: "user",
    content: "Je veux retrouver les sujets.",
    createdAt: "2026-10-04T10:26:00.000Z",
  },
];

function renderJournal(overrides: Record<string, unknown> = {}) {
  return render(
    <JournalSurface
      variant="principal"
      entries={entries}
      cycleInstanceId="cyc:1"
      selectedEntryId="cje:v1"
      onSelectEntry={() => undefined}
      onViewExchanges={() => undefined}
      onFocusTurn={() => undefined}
      transcriptMessages={transcript}
      onReturnToConversation={() => undefined}
      cycleLabel="Cycle de livraison"
      currentnessLabel="À jour"
      {...overrides}
    />,
  );
}

const { readHistoryMock } = vi.hoisted(() => ({
  readHistoryMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
}));

const historyPayload = {
  ok: true as const,
  history: {
    projectId: "prj:vt",
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:vt", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:vt",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: null,
      proposedNotYetDecided: null,
      versions: [],
    },
    decisions: [
      {
        decisionId: "dec:vt",
        subject: "Direction retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:a",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: null,
        reservations: [],
      },
    ],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: [],
    boundNote: "Borné · V-T History.",
  },
};

const historyResult = {
  ok: true,
  project: {
    projectId: "prj:vt",
    name: "Product Simplification",
    objective: "obj",
    contextSummary: "ctx",
    criticality: "normal",
    constraints: [],
    localMode: true,
    source: "REAL_LOCAL_CORE",
    fixture: false,
  },
  livingState: {
    id: "lps:vt",
    version: 1,
    createdAt: "2026-10-06T00:00:00.000Z",
    activeCycleInstanceId: "cyc:vt",
  },
  doctrine: { packageId: "pkg", digest: "d" },
  readiness: { ready: true, blockers: [] },
} as unknown as GetProjectSuccess;

describe("P5-S07 CP03 visual fidelity (V-T)", () => {
  /** V-T01 — J1 title row: cycle chip + freshness. */
  it("V-T01 J1 — title row exposes cycle chip and currentness", () => {
    renderJournal();
    expect(screen.getByRole("heading", { name: "Journal du cycle" })).toBeTruthy();
    expect(screen.getByTestId("project-journal-cycle-chip").textContent).toBe(
      "Cycle de livraison",
    );
    expect(screen.getByTestId("project-journal-currentness").textContent).toBe(
      "À jour",
    );
  });

  /** V-T02 — J1 never invents P3 · fixture copy. */
  it("V-T02 J1 — falls back to surface-identity copy, not invented Product facts", () => {
    renderJournal({ cycleLabel: null });
    expect(screen.getByTestId("project-journal-cycle-chip").textContent).toBe(
      "Espace projet / interaction",
    );
    expect(screen.getByTestId("project-journal-cycle-chip").textContent).not.toMatch(
      /^P3 ·/,
    );
  });

  /** V-T03 — J2 dense exchange panel + footer actions. */
  it("V-T03 J2 — exchange panel expands with Réduire / conversation footer", () => {
    renderJournal();
    const panel = screen.getByTestId("cycle-journal-exchanges-cje:v1");
    expect(panel.className).toMatch(/exchangePanel/);
    expect(within(panel).getAllByRole("button")).toHaveLength(2);

    fireEvent.click(screen.getByTestId("cycle-journal-view-cje:v1"));
    expect(within(panel).getAllByRole("button")).toHaveLength(3);
    expect(screen.getByTestId("cycle-journal-view-cje:v1").textContent).toBe(
      "Réduire les échanges",
    );
    expect(
      screen.getByTestId("project-journal-open-in-conversation").textContent,
    ).toMatch(/Voir dans la conversation/);
  });

  /** V-T04 — J3 one-row tabs: four tabs, plain digit counts. */
  it("V-T04 J3 — four memory tabs with plain digit counts (no badge chrome)", () => {
    renderJournal();
    const tabs = screen.getByTestId("memory-rail-tabs");
    expect(tabs.getAttribute("role")).toBe("tablist");
    const tabIds = [
      "sujets",
      "reserves",
      "recommandations",
      "decisions",
    ] as const;
    for (const id of tabIds) {
      const tab = screen.getByTestId(`memory-rail-tab-${id}`);
      expect(tab).toBeInTheDocument();
      expect(tab.textContent).toMatch(/\d/);
    }
    // CSS module still ships nowrap + selected tint for the mobile band.
    expect(journalCss).toBeTruthy();
    expect(String(journalCss.tabCount || "")).toBeTruthy();
  });

  /** V-T05 — J4 mobile detail hides list chrome via data-mobile-detail. */
  it("V-T05 J4 — mobile detail sets data-mobile-detail so list chrome can hide", () => {
    renderJournal({ selectedEntryId: null });
    const surface = screen.getByTestId("project-journal-surface");
    expect(surface).toHaveAttribute("data-mobile-detail", "false");

    fireEvent.click(
      within(screen.getByTestId("cycle-journal-entry-cje:v1")).getByRole(
        "button",
        { name: /Architecture/ },
      ),
    );
    expect(surface).toHaveAttribute("data-mobile-detail", "true");
    expect(screen.getByTestId("project-journal-back-to-subjects")).toBeTruthy();
    expect(screen.getByTestId("project-journal-stabilized")).toBeTruthy();
    expect(screen.getByTestId("project-journal-open")).toBeTruthy();
    expect(screen.getByTestId("project-journal-linked")).toBeTruthy();
    expect(screen.getByTestId("project-journal-exchanges")).toBeTruthy();
  });

  /** V-T06 — detail sections present for focused mobile reading. */
  it("V-T06 J4 — focused detail keeps subject reading blocks", () => {
    renderJournal();
    expect(screen.getByTestId("project-journal-detail-title").textContent).toBe(
      "Architecture de l'espace projet",
    );
    expect(screen.getByTestId("project-journal-detail").textContent).toMatch(
      /Points stabilisés|POINTS STABILISÉS/i,
    );
    expect(screen.getByTestId("project-journal-detail").textContent).toMatch(
      /Points ouverts|POINTS OUVERTS/i,
    );
  });
});

describe("P5-S07 CP03 History visual fidelity (V-T)", () => {
  beforeEach(() => {
    readHistoryMock.mockReset();
    readHistoryMock.mockResolvedValue(historyPayload);
  });

  /** V-T07 — H1 desktop keeps search + filters. */
  it("V-T07 H1 — desktop keeps search and filter toolbar", async () => {
    render(
      <HistorySurface
        result={historyResult}
        onReturnToOverview={() => undefined}
      />,
    );
    expect(screen.getByTestId("history-search")).toBeInTheDocument();
    expect(screen.getByTestId("history-filters")).toBeInTheDocument();
    expect(screen.getByTestId("history-filter-all")).toBeInTheDocument();
    expect(screen.getByTestId("history-back-overview")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:vt")).toBeInTheDocument();
    });
  });

  /** V-T08 — H2 compact CSS hides search/filters; keeps compactReading. */
  it("V-T08 H2 — compactReading exists; desktop-only blocks stay marked", async () => {
    render(
      <HistorySurface result={historyResult} onAskNora={() => undefined} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:vt")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("history-event-dec:vt"));

    expect(screen.getByTestId("history-compact-reading")).toBeInTheDocument();
    expect(screen.getByTestId("history-compact-reading").textContent).toMatch(
      /Contexte/i,
    );
    expect(screen.getByTestId("history-compact-reading").textContent).toMatch(
      /Éléments liés/i,
    );
    expect(screen.getByTestId("history-ask-nora-cta")).toBeInTheDocument();
    // Full H1 blocks remain in DOM for LARGE; CSS hides them in compact/mobile.
    expect(screen.getByTestId("history-detail-decided")).toBeInTheDocument();
    expect(historyCss.compactReading).toBeTruthy();
    expect(historyCss.desktopOnly).toBeTruthy();
    expect(historyCss.listEyebrow).toBeTruthy();
  });

  /** V-T09 — H3/H4 mobile nav level + no inventing technical dumps. */
  it("V-T09 H3/H4 — mobile list↔detail and no raw technical dump in reading", async () => {
    render(
      <HistorySurface result={historyResult} onAskNora={() => undefined} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:vt")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("history-event-dec:vt"));
    expect(screen.getByTestId("project-history-panel")).toHaveAttribute(
      "data-mobile-detail",
      "true",
    );
    const reading = screen.getByTestId("history-compact-reading").textContent ?? "";
    // Compact reading must not surface raw Product ids.
    expect(reading).not.toMatch(/dec:vt/);
    expect(reading).not.toMatch(/prj:vt/);
    expect(screen.getByTestId("history-ask-nora-cta")).toBeInTheDocument();
  });

  /** V-T10 — workspace ships history page head for compact. */
  it("V-T10 H2 — ProjectWorkspacePage CSS exposes history page head", () => {
    expect(workspaceCss.historyPageHead).toBeTruthy();
    expect(workspaceCss.historyPageTitle).toBeTruthy();
    expect(workspaceCss.historyPageSubtitle).toBeTruthy();
  });

  /** V-T11 — Journal CSS encodes one-row tab + mobile-detail hide rules. */
  it("V-T11 J3/J4 — CSS modules expose tab + principal chrome classes", () => {
    expect(journalCss.tabs).toBeTruthy();
    expect(journalCss.tab).toBeTruthy();
    expect(journalCss.tabActive).toBeTruthy();
    expect(journalCss.principalHeader).toBeTruthy();
    expect(journalCss.exchangePanel).toBeTruthy();
  });

  /** V-T12 — History master eyebrow for compact. */
  it("V-T12 H2 — master pane exposes HISTORIQUE eyebrow node", async () => {
    render(<HistorySurface result={historyResult} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:vt")).toBeInTheDocument();
    });
    const eyebrows = document.querySelectorAll(
      `[class*="listEyebrow"]`,
    );
    expect(eyebrows.length).toBeGreaterThan(0);
    expect(eyebrows[0]?.textContent).toMatch(/Historique/i);
  });
});
