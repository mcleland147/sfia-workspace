import { useCallback, useMemo, useState } from "react";
import {
  closeDemoRequest,
  completeDemoIntervention,
  getRequestById,
  planDemoIntervention,
  qualifyDemoRequest,
  resetDemoData,
} from "../data/requestsRepository";
import { DemoOverview } from "../ui/demo/DemoOverview";
import { InterventionReadonly } from "../ui/intervention/InterventionReadonly";
import { QualificationReadonly } from "../ui/qualification/QualificationReadonly";
import { PlanningReadonly } from "../ui/planning/PlanningReadonly";
import { ReportReadonly } from "../ui/report/ReportReadonly";
import { DemoResetControl } from "../ui/requests/DemoResetControl";
import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import { WorkflowActionControl } from "../ui/workflow/WorkflowActionControl";
import { WorkflowJournalReadonly } from "../ui/workflow/WorkflowJournalReadonly";
import "./App.css";

const DEMO_REQUEST_ID = "SAV-DEMO-001";

const DEMO_SECTION_LINKS = [
  { href: "#section-demande", label: "Demande" },
  { href: "#section-qualification", label: "Qualification" },
  { href: "#section-planification", label: "Planification" },
  { href: "#section-intervention", label: "Intervention" },
  { href: "#section-compte-rendu", label: "Compte rendu" },
  { href: "#section-journal", label: "Journal" },
] as const;

export function App() {
  const [dataVersion, setDataVersion] = useState(0);
  const [lastResetLabel, setLastResetLabel] = useState<string | undefined>();
  const [lastActionMessage, setLastActionMessage] = useState<
    string | undefined
  >();

  const request = useMemo(
    () => getRequestById(DEMO_REQUEST_ID),
    [dataVersion],
  );

  const handleDemoReset = useCallback(() => {
    resetDemoData();
    setDataVersion((version) => version + 1);
    setLastActionMessage(undefined);
    setLastResetLabel(
      new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    );
  }, []);

  const handleWorkflowAction = useCallback(() => {
    if (!request) {
      return;
    }

    let updated;
    switch (request.status) {
      case "STAT-01":
        updated = qualifyDemoRequest(DEMO_REQUEST_ID);
        break;
      case "STAT-02":
        updated = planDemoIntervention(DEMO_REQUEST_ID);
        break;
      case "STAT-03":
        updated = completeDemoIntervention(DEMO_REQUEST_ID);
        break;
      case "STAT-04":
        updated = closeDemoRequest(DEMO_REQUEST_ID);
        break;
      default:
        return;
    }

    if (updated) {
      setDataVersion((version) => version + 1);
      setLastActionMessage(
        `Action fictive enregistrée : ${updated.status}.`,
      );
    }
  }, [request]);

  return (
    <main className="app-shell">
      <DemoOverview
        requestId={DEMO_REQUEST_ID}
        currentStatus={request?.status}
      />

      <nav className="app-nav" aria-label="Navigation interne de la démo">
        <p className="app-nav__label">Aller à</p>
        <ul className="app-nav__list">
          {DEMO_SECTION_LINKS.map((link) => (
            <li key={link.href}>
              <a className="app-nav__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="app-layout">
        <section
          id="section-controls"
          className="app-section app-section--controls"
          aria-label="Contrôles de démonstration"
        >
          <DemoResetControl
            onReset={handleDemoReset}
            lastResetLabel={lastResetLabel}
          />
          <WorkflowActionControl
            request={request}
            onAction={handleWorkflowAction}
            lastActionMessage={lastActionMessage}
          />
        </section>

        <section
          id="section-demande"
          className="app-section app-section--request"
          aria-label="Demande fictive"
        >
          <RequestsList dataVersion={dataVersion} />
          <RequestDetail
            requestId={DEMO_REQUEST_ID}
            dataVersion={dataVersion}
          />
        </section>

        <section
          className="app-section app-section--journey"
          aria-label="Parcours readonly"
        >
          <h2 className="app-section__title">Parcours readonly</h2>
          <div className="app-journey-grid">
            <div id="section-qualification" className="app-journey-card">
              <QualificationReadonly
                requestId={DEMO_REQUEST_ID}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-planification" className="app-journey-card">
              <PlanningReadonly
                requestId={DEMO_REQUEST_ID}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-intervention" className="app-journey-card">
              <InterventionReadonly
                requestId={DEMO_REQUEST_ID}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-compte-rendu" className="app-journey-card">
              <ReportReadonly
                requestId={DEMO_REQUEST_ID}
                dataVersion={dataVersion}
              />
            </div>
          </div>
        </section>

        <section
          id="section-journal"
          className="app-section app-section--journal"
          aria-label="Journal local fictif"
        >
          <WorkflowJournalReadonly
            requestId={DEMO_REQUEST_ID}
            dataVersion={dataVersion}
          />
        </section>
      </div>
    </main>
  );
}
