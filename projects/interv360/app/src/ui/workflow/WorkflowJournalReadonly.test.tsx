import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_REQUESTS } from "../../data/localStorageKeys";
import {
  closeDemoRequest,
  completeDemoIntervention,
  planDemoIntervention,
  qualifyDemoRequest,
} from "../../data/requestsRepository";
import { WorkflowJournalReadonly } from "./WorkflowJournalReadonly";

describe("WorkflowJournalReadonly", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.removeItem(STORAGE_KEY_REQUESTS);
  });

  it("shows empty state when no events exist", () => {
    render(<WorkflowJournalReadonly requestId="SAV-DEMO-001" />);
    expect(
      screen.getByText(/Aucun événement enregistré pour cette demande/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Historique de la demande/i }),
    ).toBeInTheDocument();
  });

  it("displays workflow events with readable status labels after transitions", () => {
    qualifyDemoRequest("SAV-DEMO-001");
    planDemoIntervention("SAV-DEMO-001");
    completeDemoIntervention("SAV-DEMO-001");
    closeDemoRequest("SAV-DEMO-001");

    render(<WorkflowJournalReadonly requestId="SAV-DEMO-001" />);

    expect(screen.getByText(/Qualifiée → Planifiée/i)).toBeInTheDocument();
    expect(screen.getByText(/Planifiée → En cours de traitement/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Qualification fictive confirmée/i),
    ).toBeInTheDocument();
    expect(screen.getByText("qualification.confirmed")).toBeInTheDocument();
  });

  it("displays enriched audit fields when present", () => {
    render(
      <WorkflowJournalReadonly
        requestId="SAV-DEMO-001"
        events={[
          {
            type: "qualification.confirmed",
            requestId: "SAV-DEMO-001",
            fromStatus: "STAT-01",
            toStatus: "STAT-02",
            message: "Qualification fictive confirmée",
            createdAt: "12/03/2026 10:00:00",
            action: "qualify",
            actorUserId: "user-technician",
            actorDisplayName: "Théo Technicien",
            actorRole: "technician",
          },
        ]}
      />,
    );

    expect(screen.getByText(/Théo Technicien/i)).toBeInTheDocument();
    expect(screen.getByText(/— Technicien/i)).toBeInTheDocument();
    expect(screen.getByText(/Qualifier la demande/i)).toBeInTheDocument();
    expect(screen.getByText(/Qualifiée → Planifiée/i)).toBeInTheDocument();
    expect(screen.getByText(/STAT-01 → STAT-02/i)).toBeInTheDocument();
  });

  it("keeps legacy events readable without actor or action", () => {
    render(
      <WorkflowJournalReadonly
        requestId="SAV-DEMO-001"
        events={[
          {
            type: "qualification.confirmed",
            requestId: "SAV-DEMO-001",
            fromStatus: "STAT-01",
            toStatus: "STAT-02",
            message: "Qualification fictive confirmée",
            createdAt: "12/03/2026 10:00:00",
          },
        ]}
      />,
    );

    expect(screen.getByText(/Qualification fictive confirmée/i)).toBeInTheDocument();
    expect(screen.queryByText(/Théo Technicien/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/undefined/i)).not.toBeInTheDocument();
  });
});
