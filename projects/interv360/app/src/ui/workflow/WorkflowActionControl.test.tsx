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
      <WorkflowActionControl
        request={baseRequest}
        onAction={vi.fn()}
        actorRoleLabel="Technicien"
        actorDisplayName="Théo Technicien"
      />,
    );
    expect(
      screen.getByRole("heading", { name: /Actions disponibles/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vous intervenez avec le profil/i)).toBeInTheDocument();
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

  it("does not show requalify in STAT-04", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-04" }}
        onAction={vi.fn()}
      />,
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
    expect(screen.getByText(/En attente/i)).toBeInTheDocument();
  });

  it("shows closed message in STAT-06 without business button", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-06" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByText(/Demande clôturée — aucune action supplémentaire/i),
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
      screen.getByText(/Demande annulée — aucune action supplémentaire/i),
    ).toBeInTheDocument();
    expect(screen.getByText("STAT-07")).toBeInTheDocument();
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
    ).toBeDisabled();
    expect(
      screen.getAllByText(/votre rôle ne permet pas cette action/i).length,
    ).toBeGreaterThan(0);
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
    ).toBeEnabled();
    expect(
      screen.getByRole("button", { name: /Annuler la demande/i }),
    ).toBeDisabled();
    expect(
      screen.getByText(/Non disponible — votre rôle ne permet pas cette action/i),
    ).toBeInTheDocument();
  });

  it("does not call onAction when clicking a disabled button", () => {
    const onAction = vi.fn();
    render(
      <WorkflowActionControl
        request={baseRequest}
        onAction={onAction}
        isActionDisabled={() => true}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );

    expect(onAction).not.toHaveBeenCalled();
  });

  it("keeps cancel as the last action when present", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-02" }}
        onAction={vi.fn()}
      />,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[buttons.length - 1]).toHaveTextContent(
      /Annuler la demande/i,
    );
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

  it("renders success and error feedback with distinct roles", () => {
    const { rerender } = render(
      <WorkflowActionControl
        request={baseRequest}
        onAction={vi.fn()}
        lastActionMessage="Action enregistrée — statut Planifiée."
        lastActionMessageKind="success"
      />,
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      /Action enregistrée/i,
    );

    rerender(
      <WorkflowActionControl
        request={baseRequest}
        onAction={vi.fn()}
        lastActionMessage="Action non autorisée pour le rôle simulé : Observateur."
        lastActionMessageKind="error"
      />,
    );
    expect(screen.getByRole("alert")).toHaveTextContent(/non autorisée/i);
  });
});
