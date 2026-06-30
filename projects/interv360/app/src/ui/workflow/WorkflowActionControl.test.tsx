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
};

describe("WorkflowActionControl", () => {
  it("shows qualify action in STAT-01", () => {
    render(
      <WorkflowActionControl request={baseRequest} onAction={vi.fn()} />,
    );
    expect(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("shows planning action in STAT-02", () => {
    render(
      <WorkflowActionControl
        request={{ ...baseRequest, status: "STAT-02" }}
        onAction={vi.fn()}
      />,
    );
    expect(
      screen.getByRole("button", { name: /Planifier l'intervention/i }),
    ).toBeInTheDocument();
  });

  it("shows completion action in STAT-03", () => {
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
  });

  it("shows close action in STAT-04", () => {
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

  it("calls onAction when the visible button is clicked", () => {
    const onAction = vi.fn();
    render(
      <WorkflowActionControl request={baseRequest} onAction={onAction} />,
    );
    fireEvent.click(
      screen.getByRole("button", { name: /Qualifier la demande/i }),
    );
    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
