import { expect } from "vitest";
import { fireEvent, screen, within } from "@testing-library/react";

const SIDEBAR_SCREEN_MAP: Record<string, string> = {
  "Vue d'ensemble": "Dashboard",
  Demandes: "Demandes",
  Scénario: "Planning",
  Détail: "Interventions",
  Journal: "Clients",
};

export async function waitForAppNavigation() {
  const { waitFor } = await import("@testing-library/react");
  await waitFor(() => {
    expect(screen.getByText("SAV Command Center")).toBeInTheDocument();
  });
}

export function goToScreen(shortLabel: string) {
  const demoNav = screen.queryByRole("navigation", {
    name: /Navigation par écran de démonstration/i,
  });

  if (demoNav) {
    const demoTab = within(demoNav).queryByRole("button", { name: shortLabel });
    if (demoTab) {
      fireEvent.click(demoTab);
      return;
    }
  }

  const sidebarLabel = SIDEBAR_SCREEN_MAP[shortLabel] ?? shortLabel;
  fireEvent.click(
    screen.getByRole("button", {
      name: `Navigation latérale ${sidebarLabel}`,
    }),
  );
}
