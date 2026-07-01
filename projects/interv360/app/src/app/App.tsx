import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createRequestsRepository,
  getDataSourceMode,
  getDataSourceModeLabel,
} from "../data/requestsRepositoryFactory";
import {
  getTransitionActionForStatus,
  RequestsRepositoryError,
} from "../data/requestsRepository.types";
import type { DemoRequest, DemoWorkflowEvent } from "../domain/requestStatus";
import { DEFAULT_SELECTED_REQUEST_ID } from "../seed/demoRequests";
import { DemoOverview } from "../ui/demo/DemoOverview";
import { DemoReadinessPanel } from "../ui/demo/DemoReadinessPanel";
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
  const repository = useMemo(() => createRequestsRepository(), []);
  const dataSourceMode = useMemo(() => getDataSourceMode(), []);

  const [dataVersion, setDataVersion] = useState(0);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | undefined>();
  const [workflowEvents, setWorkflowEvents] = useState<DemoWorkflowEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | undefined>();
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

  const reloadData = useCallback(async () => {
    setIsLoading(true);
    setLoadError(undefined);

    try {
      const [list, detail, events] = await Promise.all([
        repository.listRequests(),
        repository.getRequestById(selectedRequestId),
        repository.listEventsForRequest(selectedRequestId),
      ]);

      setRequests(list);
      setSelectedRequest(detail);
      setWorkflowEvents(events);
    } catch (error) {
      const message =
        error instanceof RequestsRepositoryError
          ? error.message
          : "Erreur de chargement des données fictives.";
      setLoadError(message);
    } finally {
      setIsLoading(false);
    }
  }, [repository, selectedRequestId]);

  useEffect(() => {
    void reloadData();
  }, [reloadData, dataVersion]);

  const request = selectedRequest;

  const visibleRequests = useMemo(() => {
    return filterVisibleRequests(requests, statusFilter, searchQuery);
  }, [requests, statusFilter, searchQuery]);

  useEffect(() => {
    if (visibleRequests.length === 0 || isLoading) {
      return;
    }

    const selectedStillVisible = visibleRequests.some(
      (item) => item.id === selectedRequestId,
    );

    if (!selectedStillVisible) {
      setSelectedRequestId(visibleRequests[0].id);
      setLastActionMessage(undefined);
    }
  }, [visibleRequests, selectedRequestId, isLoading]);

  const handleSelectRequest = useCallback((requestId: string) => {
    setSelectedRequestId(requestId);
    setLastActionMessage(undefined);
  }, []);

  const handleDemoReset = useCallback(async () => {
    try {
      await repository.resetDemo();
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
    } catch (error) {
      const message =
        error instanceof RequestsRepositoryError
          ? error.message
          : "Impossible de réinitialiser la démo.";
      setLastActionMessage(message);
    }
  }, [repository]);

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

  const handleWorkflowAction = useCallback(async () => {
    if (!request) {
      return;
    }

    const action = getTransitionActionForStatus(request.status);
    if (!action) {
      return;
    }

    try {
      const updated = await repository.applyTransition(selectedRequestId, action);
      if (updated) {
        setDataVersion((version) => version + 1);
        setLastActionMessage(
          `Action fictive enregistrée pour ${selectedRequestId} : ${updated.status}.`,
        );
      }
    } catch (error) {
      const message =
        error instanceof RequestsRepositoryError
          ? error.message
          : "Transition fictive refusée.";
      setLastActionMessage(message);
    }
  }, [repository, request, selectedRequestId]);

  if (isLoading && requests.length === 0 && !loadError) {
    return (
      <main className="app-shell">
        <p className="app-data-mode" role="status">
          {getDataSourceModeLabel(dataSourceMode)}
        </p>
        <p className="app-loading">Chargement des données fictives…</p>
      </main>
    );
  }

  if (loadError && requests.length === 0) {
    return (
      <main className="app-shell">
        <p className="app-data-mode" role="status">
          {getDataSourceModeLabel(dataSourceMode)}
        </p>
        <p className="app-error" role="alert">
          {loadError}
        </p>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <p className="app-data-mode" role="status">
        {getDataSourceModeLabel(dataSourceMode)}
      </p>

      {loadError ? (
        <p className="app-error app-error--inline" role="alert">
          {loadError}
        </p>
      ) : null}

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
            <a className="app-nav__link" href="#section-readiness">
              Readiness
            </a>
          </li>
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
          id="section-readiness"
          className="app-section app-section--readiness"
          aria-label="Demo readiness"
        >
          <DemoReadinessPanel />
        </section>

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
            onReset={() => {
              void handleDemoReset();
            }}
            lastResetLabel={lastResetLabel}
          />
          <WorkflowActionControl
            request={request}
            onAction={() => {
              void handleWorkflowAction();
            }}
            lastActionMessage={lastActionMessage}
          />
        </section>

        <section
          id="section-demande"
          className="app-section app-section--request"
          aria-label="Demandes fictives"
        >
          <RequestsList
            requests={requests}
            selectedRequestId={selectedRequestId}
            onSelectRequest={handleSelectRequest}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
          <RequestDetail request={request} requestId={selectedRequestId} />
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
              <QualificationReadonly request={request} requestId={selectedRequestId} />
            </div>
            <div id="section-planification" className="app-journey-card">
              <PlanningReadonly request={request} requestId={selectedRequestId} />
            </div>
            <div id="section-intervention" className="app-journey-card">
              <InterventionReadonly request={request} requestId={selectedRequestId} />
            </div>
            <div id="section-compte-rendu" className="app-journey-card">
              <ReportReadonly request={request} requestId={selectedRequestId} />
            </div>
          </div>
        </section>

        <section
          id="section-journal"
          className="app-section app-section--journal"
          aria-label="Journal local fictif"
        >
          <WorkflowJournalReadonly
            events={workflowEvents}
            requestId={selectedRequestId}
          />
        </section>
      </div>
    </main>
  );
}
