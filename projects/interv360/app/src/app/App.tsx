import { useCallback, useEffect, useMemo, useState } from "react";
import {
  closeDemoRequest,
  completeDemoIntervention,
  getRequestById,
  getRequests,
  planDemoIntervention,
  qualifyDemoRequest,
  resetDemoData,
} from "../data/requestsRepository";
import { DEFAULT_SELECTED_REQUEST_ID } from "../seed/demoRequests";
import { DemoOverview } from "../ui/demo/DemoOverview";
import { DemoScenarioGuide } from "../ui/demo/DemoScenarioGuide";
import {
  DEMO_SCENARIO_STEPS,
  getScenarioStepCount,
  INITIAL_SCENARIO_STEP_INDEX,
} from "../ui/demo/demoScenarioSteps";
import { InterventionReadonly } from "../ui/intervention/InterventionReadonly";
import { QualificationReadonly } from "../ui/qualification/QualificationReadonly";
import { PlanningReadonly } from "../ui/planning/PlanningReadonly";
import { ReportReadonly } from "../ui/report/ReportReadonly";
import { DemoResetControl } from "../ui/requests/DemoResetControl";
import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import {
  filterVisibleRequests,
  type StatusFilter,
} from "../ui/requests/requestListFilters";
import { WorkflowActionControl } from "../ui/workflow/WorkflowActionControl";
import { WorkflowJournalReadonly } from "../ui/workflow/WorkflowJournalReadonly";
import "./App.css";

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
  const [selectedRequestId, setSelectedRequestId] = useState(
    DEFAULT_SELECTED_REQUEST_ID,
  );
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [lastResetLabel, setLastResetLabel] = useState<string | undefined>();
  const [lastActionMessage, setLastActionMessage] = useState<
    string | undefined
  >();
  const [scenarioStepIndex, setScenarioStepIndex] = useState(
    INITIAL_SCENARIO_STEP_INDEX,
  );

  const request = useMemo(
    () => getRequestById(selectedRequestId),
    [selectedRequestId, dataVersion],
  );

  const visibleRequests = useMemo(() => {
    const requests = getRequests();
    return filterVisibleRequests(requests, statusFilter, searchQuery);
  }, [dataVersion, statusFilter, searchQuery]);

  useEffect(() => {
    if (visibleRequests.length === 0) {
      return;
    }

    const selectedStillVisible = visibleRequests.some(
      (item) => item.id === selectedRequestId,
    );

    if (!selectedStillVisible) {
      setSelectedRequestId(visibleRequests[0].id);
      setLastActionMessage(undefined);
    }
  }, [visibleRequests, selectedRequestId]);

  const handleSelectRequest = useCallback((requestId: string) => {
    setSelectedRequestId(requestId);
    setLastActionMessage(undefined);
  }, []);

  const handleDemoReset = useCallback(() => {
    resetDemoData();
    setSelectedRequestId(DEFAULT_SELECTED_REQUEST_ID);
    setStatusFilter("ALL");
    setSearchQuery("");
    setScenarioStepIndex(INITIAL_SCENARIO_STEP_INDEX);
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

  const handlePreviousScenarioStep = useCallback(() => {
    setScenarioStepIndex((index) => Math.max(0, index - 1));
  }, []);

  const handleNextScenarioStep = useCallback(() => {
    setScenarioStepIndex((index) =>
      Math.min(getScenarioStepCount() - 1, index + 1),
    );
  }, []);

  const handleResetScenario = useCallback(() => {
    setScenarioStepIndex(INITIAL_SCENARIO_STEP_INDEX);
  }, []);

  const handleWorkflowAction = useCallback(() => {
    if (!request) {
      return;
    }

    let updated;
    switch (request.status) {
      case "STAT-01":
        updated = qualifyDemoRequest(selectedRequestId);
        break;
      case "STAT-02":
        updated = planDemoIntervention(selectedRequestId);
        break;
      case "STAT-03":
        updated = completeDemoIntervention(selectedRequestId);
        break;
      case "STAT-04":
        updated = closeDemoRequest(selectedRequestId);
        break;
      default:
        return;
    }

    if (updated) {
      setDataVersion((version) => version + 1);
      setLastActionMessage(
        `Action fictive enregistrée pour ${selectedRequestId} : ${updated.status}.`,
      );
    }
  }, [request, selectedRequestId]);

  return (
    <main className="app-shell">
      <DemoOverview
        requestId={selectedRequestId}
        currentStatus={request?.status}
        scenarioStepTitle={DEMO_SCENARIO_STEPS[scenarioStepIndex]?.title}
        scenarioProgressLabel={`Étape ${scenarioStepIndex + 1} sur ${getScenarioStepCount()}`}
      />

      <nav className="app-nav" aria-label="Navigation interne de la démo">
        <p className="app-nav__label">Aller à</p>
        <ul className="app-nav__list">
          <li>
            <a className="app-nav__link" href="#section-scenario">
              Scénario
            </a>
          </li>
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
          id="section-scenario"
          className="app-section app-section--scenario"
          aria-label="Scénario guidé"
        >
          <DemoScenarioGuide
            currentStepIndex={scenarioStepIndex}
            onPreviousStep={handlePreviousScenarioStep}
            onNextStep={handleNextScenarioStep}
            onResetScenario={handleResetScenario}
          />
        </section>

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
          aria-label="Demandes fictives"
        >
          <RequestsList
            dataVersion={dataVersion}
            selectedRequestId={selectedRequestId}
            onSelectRequest={handleSelectRequest}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
          <RequestDetail
            requestId={selectedRequestId}
            dataVersion={dataVersion}
          />
        </section>

        <section
          className="app-section app-section--journey"
          aria-label="Parcours readonly"
        >
          <h2 className="app-section__title">
            Parcours readonly — {selectedRequestId}
          </h2>
          <div className="app-journey-grid">
            <div id="section-qualification" className="app-journey-card">
              <QualificationReadonly
                requestId={selectedRequestId}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-planification" className="app-journey-card">
              <PlanningReadonly
                requestId={selectedRequestId}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-intervention" className="app-journey-card">
              <InterventionReadonly
                requestId={selectedRequestId}
                dataVersion={dataVersion}
              />
            </div>
            <div id="section-compte-rendu" className="app-journey-card">
              <ReportReadonly
                requestId={selectedRequestId}
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
            requestId={selectedRequestId}
            dataVersion={dataVersion}
          />
        </section>
      </div>
    </main>
  );
}
