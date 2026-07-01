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
      screen.getByText(/Aucun événement fictif enregistré/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Données fictives uniquement/i)).toBeInTheDocument();
  });

  it("displays workflow events after transitions", () => {
    qualifyDemoRequest("SAV-DEMO-001");
    planDemoIntervention("SAV-DEMO-001");
    completeDemoIntervention("SAV-DEMO-001");
    closeDemoRequest("SAV-DEMO-001");

    render(<WorkflowJournalReadonly requestId="SAV-DEMO-001" />);

    expect(screen.getByText("qualification.confirmed")).toBeInTheDocument();
    expect(screen.getByText("planning.confirmed")).toBeInTheDocument();
    expect(screen.getByText("intervention.completed")).toBeInTheDocument();
    expect(screen.getByText("report.closed")).toBeInTheDocument();
    expect(screen.getByText(/STAT-01 → STAT-02/)).toBeInTheDocument();
    expect(screen.getByText(/Qualification fictive confirmée/i)).toBeInTheDocument();
  });
});
