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
  DEMO_SCREENS,
  getDemoScreenById,
  getDemoScreenIndex,
  INITIAL_DEMO_SCREEN_ID,
  type DemoScreenId,
} from "../ui/demo/demoScreens";
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
  const [currentDemoScreen, setCurrentDemoScreen] = useState<DemoScreenId>(
    INITIAL_DEMO_SCREEN_ID,
  );

  const currentScreenIndex = getDemoScreenIndex(currentDemoScreen);
  const currentScreen = getDemoScreenById(currentDemoScreen);

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

  const goToDemoScreen = useCallback((screenId: DemoScreenId) => {
    setCurrentDemoScreen(screenId);
  }, []);

  const goToPreviousDemoScreen = useCallback(() => {
    setCurrentDemoScreen(
      DEMO_SCREENS[Math.max(0, currentScreenIndex - 1)].id,
    );
  }, [currentScreenIndex]);

  const goToNextDemoScreen = useCallback(() => {
    setCurrentDemoScreen(
      DEMO_SCREENS[
        Math.min(DEMO_SCREENS.length - 1, currentScreenIndex + 1)
      ].id,
    );
  }, [currentScreenIndex]);

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

      <nav
        className="app-screen-nav"
        aria-label="Navigation par écran de démonstration"
      >
        <div className="app-screen-nav__header">
          <p className="app-screen-nav__status" role="status">
            Écran {currentScreenIndex + 1} sur {DEMO_SCREENS.length} —{" "}
            {currentScreen.label}
          </p>
          <div
            className="app-screen-nav__stepper"
            aria-label="Navigation entre écrans"
          >
            <button
              type="button"
              className="app-screen-nav__step"
              onClick={goToPreviousDemoScreen}
              disabled={currentScreenIndex === 0}
            >
              Écran précédent
            </button>
            <button
              type="button"
              className="app-screen-nav__step"
              onClick={goToNextDemoScreen}
              disabled={currentScreenIndex === DEMO_SCREENS.length - 1}
            >
              Écran suivant
            </button>
          </div>
        </div>
        <ul className="app-screen-nav__list">
          {DEMO_SCREENS.map((screen) => (
            <li key={screen.id}>
              <button
                type="button"
                className={
                  screen.id === currentDemoScreen
                    ? "app-screen-nav__tab app-screen-nav__tab--active"
                    : "app-screen-nav__tab"
                }
                aria-current={
                  screen.id === currentDemoScreen ? "page" : undefined
                }
                onClick={() => {
                  goToDemoScreen(screen.id);
                }}
              >
                {screen.shortLabel}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="app-layout app-layout--screen">
        {currentDemoScreen === "overview" ? (
          <div className="app-screen-panel">
            <DemoOverview
              requestId={selectedRequestId}
              currentStatus={request?.status}
              scenarioStepTitle={DEMO_SCENARIO_STEPS[scenarioStepIndex]?.title}
              scenarioProgressLabel={`Étape ${scenarioStepIndex + 1} sur ${getScenarioStepCount()}`}
            />
            <section
              id="section-readiness"
              className="app-section app-section--readiness"
              aria-label="Demo readiness"
            >
              <DemoReadinessPanel />
            </section>
          </div>
        ) : null}

        {currentDemoScreen === "scenario" ? (
          <section
            id="section-scenario"
            className="app-section app-section--scenario app-screen-panel"
            aria-label="Scénario guidé"
          >
            <DemoScenarioGuide
              currentStepIndex={scenarioStepIndex}
              onPreviousStep={handlePreviousScenarioStep}
              onNextStep={handleNextScenarioStep}
              onResetScenario={handleResetScenario}
            />
          </section>
        ) : null}

        {currentDemoScreen === "requests" ? (
          <section
            id="section-demande"
            className="app-section app-section--request app-screen-panel"
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
          </section>
        ) : null}

        {currentDemoScreen === "details" ? (
          <div className="app-screen-panel">
            <section
              className="app-section app-section--request-detail"
              aria-label="Détail et workflow"
            >
              <RequestDetail request={request} requestId={selectedRequestId} />
              <WorkflowActionControl
                request={request}
                onAction={() => {
                  void handleWorkflowAction();
                }}
                lastActionMessage={lastActionMessage}
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
                    request={request}
                    requestId={selectedRequestId}
                  />
                </div>
                <div id="section-planification" className="app-journey-card">
                  <PlanningReadonly
                    request={request}
                    requestId={selectedRequestId}
                  />
                </div>
                <div id="section-intervention" className="app-journey-card">
                  <InterventionReadonly
                    request={request}
                    requestId={selectedRequestId}
                  />
                </div>
                <div id="section-compte-rendu" className="app-journey-card">
                  <ReportReadonly
                    request={request}
                    requestId={selectedRequestId}
                  />
                </div>
              </div>
            </section>
          </div>
        ) : null}

        {currentDemoScreen === "journal" ? (
          <section
            id="section-journal"
            className="app-section app-section--journal app-screen-panel"
            aria-label="Journal et reset"
          >
            <DemoResetControl
              onReset={() => {
                void handleDemoReset();
              }}
              lastResetLabel={lastResetLabel}
            />
            <WorkflowJournalReadonly
              events={workflowEvents}
              requestId={selectedRequestId}
            />
          </section>
        ) : null}
      </div>
    </main>
  );
}
