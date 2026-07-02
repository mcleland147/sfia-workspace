import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { DemoRequest } from "../../domain/requestStatus";
import { WorkflowActionControl } from "./WorkflowActionControl";

const baseRequest: DemoRequest = {
  id: "SAV-DEMO-001",
  title: "Machine client en panne intermittente",
  customerLabel: "Client Démo Industrie",
  siteLabel: "Lyon Démo",
  status: "STAT-01",
  priority: "high",
  criticality: "urgent",
};

describe("WorkflowActionControl", () => {
  it("shows qualify and cancel actions in STAT-01", () => {
    render(
      <WorkflowActionControl request={baseRequest} onAction={vi.fn()} />,
    );
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("shows planning, requalify and cancel actions in STAT-02", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-02" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Requalifier/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeInTheDocument();
  });

  it("shows completion, hold, requalify and cancel actions in STAT-03", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-03" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", {
        name: /Marquer l'intervention réalisée/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Mettre en attente/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Requalifier/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeInTheDocument();
  });

  it("does not show requalify in STAT-01", () => {
    render(
      <WorkflowActionControl request={baseRequest} onAction={vi.fn()} />,
    );
    expect(
      screen.queryByRole("button", { name: /Requalifier/i }),
    ).not.toBeInTheDocument();
  });

  it("shows close action only in STAT-04", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-04" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", {
        name: /Clôturer avec compte rendu fictif/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("shows resume, requalify and cancel actions in STAT-05", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-05" }}
        onAction={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: /Reprendre/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Requalifier/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/En attente \(STAT-05\)/i)).toBeInTheDocument();
  });

  it("shows closed message in STAT-06 without business button", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-06" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByText(/Demande clôturée fictivement/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("shows cancelled message in STAT-07 without business button", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-07" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByText(/Demande annulée fictivement/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Annulée \(STAT-07\)/i)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("disables workflow buttons when action is not allowed for the role", () => {
    render(
      <WorkflowActionControl
        request={baseRequest}
        onAction={vi.fn()}
        isActionDisabled={() => true}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByText(/Action non autorisée pour le rôle actuel/i),
    ).toBeInTheDocument();
  });

  it("disables only blocked actions when some permissions are denied", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-03" }}
        onAction={vi.fn()}
        isActionDisabled={(action) => action === "cancel"}
      />,
    );

    expect(
      screen.getByRole("button", { name: /Mettre en attente/i }),
    ).not.toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByText(/Action non autorisée pour le rôle actuel/i),
    ).toBeInTheDocument();
  });

  it("calls onAction with the clicked action", () => {
    const onAction = vi.fn();
    render(
      <WorkflowActionControl request={baseRequest} onAction={onAction} />,
    );
    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );
    expect(onAction).toHaveBeenCalledWith("qualify");
  });
});
