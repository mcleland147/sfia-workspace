import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "../app/App";
import { waitForAppNavigation } from "./navigationHelpers";

async function renderDashboard() {
  render(<App />);
  await waitForAppNavigation();
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Centre de commande SAV/i }),
    ).toBeInTheDocument();
  });
}

describe("App premium interactions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows the premium dashboard layer", async () => {
    await renderDashboard();
    expect(screen.getByText("SAV Command Center")).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Focus opérationnel/i }),
    ).toBeInTheDocument();
  });

  it("navigates from dashboard to requests via Voir les demandes", async () => {
    await renderDashboard();
    fireEvent.click(screen.getByRole("button", { name: "Voir les demandes" }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Demandes SAV/i }),
      ).toBeInTheDocument();
    });
  });

  it("opens request detail from dashboard focus Ouvrir", async () => {
    await renderDashboard();
    const focus = screen.getByRole("region", { name: /Focus opérationnel/i });
    fireEvent.click(within(focus).getAllByRole("button", { name: /Ouvrir ↗/i })[0]);
    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: /Machine client en panne intermittente/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it("opens request detail from dashboard activity ref DEM-2481", async () => {
    await renderDashboard();
    const activity = screen.getByRole("region", { name: /Activité récente/i });
    fireEvent.click(
      within(activity).getAllByRole("button", { name: "DEM-2481" })[0],
    );
    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
    });
  });

  it("opens request detail from requests table Ouvrir", async () => {
    await renderDashboard();
    fireEvent.click(
      screen.getByRole("button", { name: "Navigation latérale Demandes" }),
    );
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Demandes SAV/i }),
      ).toBeInTheDocument();
    });

    const table = screen.getByRole("table");
    fireEvent.click(within(table).getAllByRole("button", { name: "Ouvrir" })[0]);

    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
    });
  });

  it("navigates to audit trail from detail Tout voir and returns to detail", async () => {
    await renderDashboard();
    const focus = screen.getByRole("region", { name: /Focus opérationnel/i });
    fireEvent.click(within(focus).getAllByRole("button", { name: /Ouvrir ↗/i })[0]);
    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Tout voir" }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Historique de la demande/i }),
      ).toBeInTheDocument();
    });

    fireEvent.click(
      screen.getByRole("button", { name: /Retour à la fiche demande/i }),
    );
    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
    });
  });

  it("returns from detail to requests", async () => {
    await renderDashboard();
    const focus = screen.getByRole("region", { name: /Focus opérationnel/i });
    fireEvent.click(within(focus).getAllByRole("button", { name: /Ouvrir ↗/i })[0]);
    await waitFor(() => {
      expect(screen.getByTestId("request-detail")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /Retour aux demandes/i }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Demandes SAV/i }),
      ).toBeInTheDocument();
    });
  });

  it("keeps search and filters working on requests page", async () => {
    await renderDashboard();
    fireEvent.click(
      screen.getByRole("button", { name: "Navigation latérale Demandes" }),
    );
    await waitFor(() => {
      expect(screen.getByLabelText(/^Recherche$/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/^Recherche$/i), {
      target: { value: "SAV-DEMO-003" },
    });

    await waitFor(() => {
      const table = screen.getByRole("table");
      expect(within(table).getByText("DEM-2475")).toBeInTheDocument();
      expect(within(table).queryByText("DEM-2481")).not.toBeInTheDocument();
    });
  });

  it("does not create a request when Nouvelle demande is disabled", async () => {
    await renderDashboard();
    const createButtons = screen.getAllByRole("button", {
      name: /Nouvelle demande — Hors scope MVP/i,
    });
    expect(createButtons.length).toBeGreaterThan(0);
    createButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("does not export PDF from audit trail", async () => {
    await renderDashboard();
    const focus = screen.getByRole("region", { name: /Focus opérationnel/i });
    fireEvent.click(within(focus).getAllByRole("button", { name: /Ouvrir ↗/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: "Tout voir" }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Historique de la demande/i }),
      ).toBeInTheDocument();
    });

    const exportButton = screen.getByRole("button", {
      name: /Exporter PDF — Hors scope MVP/i,
    });
    expect(exportButton).toBeDisabled();
    fireEvent.click(exportButton);
    expect(exportButton).toBeDisabled();
  });

  it("keeps profile switching available", async () => {
    await renderDashboard();
    fireEvent.change(screen.getByLabelText(/Changer de profil/i), {
      target: { value: "user-manager" },
    });
    expect(screen.getByRole("region", { name: /Profil actif/i })).toHaveTextContent(
      "Maya Responsable",
    );
  });
});
