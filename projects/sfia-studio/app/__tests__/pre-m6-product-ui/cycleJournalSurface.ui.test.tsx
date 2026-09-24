/** @vitest-environment jsdom */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fs from "node:fs";
import path from "node:path";
import {
  JournalSurface,
  type JournalSurfaceEntry,
} from "@/features/pre-m6-product-ui/surfaces/JournalSurface";
import { w1RestartHonestyMessage } from "@/features/project-assistant/presentationLabels";
import styles from "@/features/pre-m6-product-ui/ProjectWorkspacePage.module.css";

afterEach(() => {
  cleanup();
});

const sample: JournalSurfaceEntry[] = [
  {
    journalEntryId: "cje:1",
    topicOrdinal: 1,
    title: "Périmètre",
    currentSummary: "Clarifier le périmètre livrable",
    stabilizedPoints: ["Hors stocks V1"],
    openPoints: ["Qui décide ?"],
    status: "active",
    updatedAt: "2026-09-24T12:00:00.000Z",
    sourceTurnRefs: ["pt:a", "pt:b", "pt:c", "pt:d", "pt:e", "pt:f"],
    sourceTurnCount: 6,
    isCurrentTopic: true,
  },
];

const transcript = [
  { id: "pt:a", role: "user", content: "Premier échange périmètre" },
  { id: "pt:b", role: "assistant", content: "Nora répond A" },
  { id: "pt:c", role: "user", content: "Échange intermédiaire C" },
  { id: "pt:d", role: "assistant", content: "Nora répond D" },
  { id: "pt:e", role: "user", content: "Échange final E" },
  { id: "pt:f", role: "assistant", content: "Nora répond F" },
];

describe("JournalSurface UI", () => {
  it("lists all linked exchanges and focuses exact turn (CR-CJ-04)", async () => {
    const user = userEvent.setup();
    let viewed: string | null = null;
    let selected: string | null = null;
    let focused: string | null = null;
    render(
      <JournalSurface
        entries={sample}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={(id) => {
          selected = id;
        }}
        onViewExchanges={(e) => {
          viewed = e.journalEntryId;
        }}
        onFocusTurn={(id) => {
          focused = id;
        }}
        transcriptMessages={transcript}
      />,
    );
    expect(screen.getByTestId("cycle-journal-rail")).toBeTruthy();
    expect(screen.getByText("Journal du cycle")).toBeTruthy();
    expect(screen.getByText("Périmètre")).toBeTruthy();
    await user.click(screen.getByTestId("cycle-journal-view-cje:1"));
    expect(viewed).toBe("cje:1");
    const list = screen.getByTestId("cycle-journal-exchanges-cje:1");
    expect(within(list).getAllByRole("button")).toHaveLength(6);
    expect(within(list).getByText("Échange intermédiaire C")).toBeTruthy();
    await user.click(screen.getByTestId("cycle-journal-exchange-pt:c"));
    expect(focused).toBe("pt:c");
    await user.click(screen.getByTestId("cycle-journal-exchange-pt:f"));
    expect(focused).toBe("pt:f");
    await user.click(screen.getByText("Périmètre"));
    expect(selected).toBe("cje:1");
    expect(screen.getByTestId("cycle-journal-ordinal-cje:1").textContent).toBe(
      "Sujet 1",
    );
    expect(screen.getByTestId("cycle-journal-current-cje:1").textContent).toBe(
      "En cours",
    );
  });

  it("JPI-04 — never shows raw pt:* as nominal exchange label", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <JournalSurface
        entries={sample}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        transcriptMessages={[]}
      />,
    );
    await user.click(screen.getByTestId("cycle-journal-view-cje:1"));
    const excerpts = container.querySelectorAll(
      '[data-testid^="cycle-journal-exchange-"] [class*="exchangeExcerpt"]',
    );
    expect(excerpts.length).toBeGreaterThan(0);
    for (const el of excerpts) {
      expect(el.textContent ?? "").not.toMatch(/^pt:/);
      expect(el.textContent ?? "").toContain("synchronisation");
    }
  });

  it("shows stabilized/open points via progressive disclosure", async () => {
    const user = userEvent.setup();
    render(
      <JournalSurface
        entries={sample}
        cycleInstanceId="cyc:1"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        transcriptMessages={transcript}
      />,
    );
    const card = screen.getByTestId("cycle-journal-entry-cje:1");
    await user.click(within(card).getByTestId("cycle-journal-points-cje:1"));
    expect(
      within(card).getByTestId("cycle-journal-points-body-cje:1"),
    ).toBeTruthy();
    expect(within(card).getByText("Hors stocks V1")).toBeTruthy();
    expect(within(card).getByText("Qui décide ?")).toBeTruthy();
  });
});

describe("layout Option A CSS tokens", () => {
  it("exposes journal column + three-zone desktop classes", () => {
    expect(styles.journalColumn).toBeTruthy();
    expect(styles.layout).toBeTruthy();
    expect(styles.main).toBeTruthy();
    expect(styles.lpsColumn).toBeTruthy();
  });

  it("CR-CJ-05 — Journal accessible below 1200 (no 1025–1199 dead zone)", () => {
    const cssPath = path.resolve(
      __dirname,
      "../../features/pre-m6-product-ui/ProjectWorkspacePage.module.css",
    );
    const css = fs.readFileSync(cssPath, "utf8");
    expect(css).toMatch(/@media\s*\(\s*max-width:\s*1199px\s*\)/);
    expect(css).toMatch(/@media\s*\(\s*min-width:\s*1200px\s*\)/);
    // Mid-band must show journalColumn as block inside <1200 stack.
    const stackBlock = css.match(
      /@media\s*\(\s*max-width:\s*1199px\s*\)\s*\{([\s\S]*?)\n\}/,
    );
    expect(stackBlock?.[1]).toMatch(/\.journalColumn\s*\{[^}]*display:\s*block/);
  });
});

describe("recovery transcript honesty", () => {
  it("mentions restored project when transcript available", () => {
    const msg = w1RestartHonestyMessage({
      transcriptAvailability: "available",
    });
    expect(msg).toMatch(/Projet restauré/);
    expect(msg).not.toMatch(/Peut devoir être repris : conversation en cours/);
  });
});
