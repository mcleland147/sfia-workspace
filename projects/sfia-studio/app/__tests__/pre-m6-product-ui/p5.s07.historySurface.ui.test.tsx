/**
 * P5-S07 — HistorySurface master/detail + local search UI.
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { HistorySurface } from "@/features/pre-m6-product-ui/surfaces/HistorySurface";
import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";

const { readHistoryMock } = vi.hoisted(() => ({
  readHistoryMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ReadProjectHistoryAction: (...args: unknown[]) => readHistoryMock(...args),
}));

const historyPayload = {
  ok: true as const,
  history: {
    projectId: "prj:ui-s07",
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:ui-s07", version: 1 },
    cycle: {
      activeCycleInstanceId: "cyc:ui-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:ui",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:ui",
        decidedOptionRef: "opt:a",
        stepCount: 2,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:ui",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:ui",
          decidedOptionRef: "opt:a",
          stepCount: 2,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:ui",
        subject: "Direction de l espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:a",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:ui@v1",
        reservations: [],
      },
    ],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: ["Conversation (process-local, non rejouee)"],
    boundNote: "Borné · fixture HistorySurface UI.",
  },
};

const result = {
  ok: true,
  project: {
    projectId: "prj:ui-s07",
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
    id: "lps:ui-s07",
    version: 1,
    createdAt: "2026-10-06T00:00:00.000Z",
    activeCycleInstanceId: "cyc:ui-s07",
  },
  doctrine: { packageId: "pkg", digest: "d" },
  readiness: { ready: true, blockers: [] },
} as unknown as GetProjectSuccess;

describe("P5-S07 HistorySurface UI", () => {
  beforeEach(() => {
    readHistoryMock.mockReset();
    readHistoryMock.mockResolvedValue(historyPayload);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders master/detail, filters, and local search over Product events", async () => {
    render(
      <HistorySurface result={result} onReturnToOverview={() => undefined} />,
    );

    expect(screen.getByTestId("project-history-panel")).toBeInTheDocument();
    expect(screen.getByTestId("history-back-overview")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Historique" })).toBeInTheDocument();
    expect(screen.getByTestId("history-master-detail")).toBeInTheDocument();
    expect(screen.getByTestId("history-search")).toBeInTheDocument();

    await waitFor(() => {
      expect(readHistoryMock).toHaveBeenCalled();
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-filter-decisions"));
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("history-search"), {
      target: { value: "retenue" },
    });
    expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Direction de l espace projet retenue",
    );
    expect(screen.getByTestId("history-detail-pane")).toHaveTextContent(
      "Ce qui a été décidé",
    );
  });

  it("CP01 — P3 78:2 exposes Tout / Décisions / Changements only", async () => {
    render(<HistorySurface result={result} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    expect(screen.getByTestId("history-filter-all")).toBeInTheDocument();
    expect(screen.getByTestId("history-filter-decisions")).toBeInTheDocument();
    expect(screen.getByTestId("history-filter-changes")).toBeInTheDocument();
    // « Vérifié » is an event-type chip in the list, never a fourth filter.
    expect(screen.queryByTestId("history-filter-verified")).toBeNull();
    expect(
      screen.getByTestId("history-event-dec:ui").textContent,
    ).toContain("Décision");
  });

  it("CP01 — detail reserves every P3 block and stays honest when facts are absent", async () => {
    render(<HistorySurface result={result} onAskNora={() => undefined} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    for (const block of [
      "history-detail-decided",
      "history-detail-why",
      "history-detail-impact",
      "history-detail-verification",
      "history-detail-sources",
      "history-detail-ask-nora",
    ]) {
      expect(screen.getByTestId(block)).toBeInTheDocument();
    }
    // The decision anchor proves its basis — the block is a fact, not a guess.
    expect(screen.getByTestId("history-detail-why").textContent).toContain(
      "PresentedOptionSet",
    );

    // The project identity anchor proves nothing beyond itself.
    fireEvent.click(screen.getByTestId("history-event-project:prj:ui-s07"));
    expect(
      screen
        .getByTestId("history-detail-why")
        .querySelector("[data-available='false']"),
    ).not.toBeNull();
    expect(screen.getByTestId("history-detail-verification")).toHaveAttribute(
      "data-available",
      "false",
    );
  });

  it("CP01 — « Demander à Nora » prefills a draft and never sends", async () => {
    const drafts: string[] = [];
    render(
      <HistorySurface result={result} onAskNora={(d) => drafts.push(d)} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    fireEvent.click(screen.getByTestId("history-ask-nora-submit"));
    expect(drafts).toHaveLength(1);
    expect(drafts[0]).toContain("Direction de l espace projet retenue");

    fireEvent.change(screen.getByTestId("history-ask-nora-input"), {
      target: { value: "Compare ce moment avec hier" },
    });
    fireEvent.click(screen.getByTestId("history-ask-nora-submit"));
    expect(drafts[1]).toBe("Compare ce moment avec hier");
  });

  it("CP01 — mobile list ↔ detail is one nav level (190:380 → 190:412)", async () => {
    render(<HistorySurface result={result} />);
    await waitFor(() => {
      expect(screen.getByTestId("history-event-dec:ui")).toBeInTheDocument();
    });

    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );
    fireEvent.click(screen.getByTestId("history-event-dec:ui"));
    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "true",
    );
    expect(screen.getByTestId("history-detail-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );

    fireEvent.click(screen.getByTestId("history-back-to-list"));
    expect(screen.getByTestId("history-list-pane")).toHaveAttribute(
      "data-mobile-hidden",
      "false",
    );
  });
});
