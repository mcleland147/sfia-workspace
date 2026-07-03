import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  createRequestsRepository,
  getDataSourceMode,
  getDataSourceModeDescription,
  getDataSourceModeLabel,
} from "../data/requestsRepositoryFactory";
import { RequestsRepositoryError } from "../data/requestsRepository.types";
import type { DemoTransitionAction } from "../data/requestsRepository.types";
import { listApiUsers } from "../data/usersRepository";
import type { DemoUser } from "../domain/demoUsers";
import {
  DEFAULT_DEMO_USER_ID,
  DEMO_USERS,
  findDemoUserById,
  getDefaultDemoUser,
  getDemoUserRole,
} from "../domain/demoUsers";
import {
  getCurrentDemoUser,
  getStoredCurrentUserId,
  persistCurrentUserId,
  setCurrentDemoUser,
} from "../domain/demoUserSession";
import type { DemoRequest, DemoWorkflowEvent } from "../domain/requestStatus";
import { getRequestStatusLabel } from "../domain/requestStatus";
import {
  canRolePerform,
  formatUnauthorizedRoleMessage,
  simulatedRoleLabels,
} from "../domain/simulatedRoles";
import { DEFAULT_SELECTED_REQUEST_ID } from "../seed/demoRequests";
import { DashboardCommandCenter } from "../ui/dashboard/DashboardCommandCenter";
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
import { AuditTrailView } from "../ui/audit/AuditTrailView";
import { DemoResetControl } from "../ui/requests/DemoResetControl";
import { RequestDetail } from "../ui/requests/RequestDetail";
import { RequestsList } from "../ui/requests/RequestsList";
import {
  filterVisibleRequests,
  type StatusFilter,
} from "../ui/requests/requestListFilters";
import { WorkflowActionControl } from "../ui/workflow/WorkflowActionControl";
import { DemoUserControl } from "../ui/roles/DemoUserControl";
import "./App.css";

const SIDEBAR_NAV_ITEMS = [
  { label: "Dashboard", screenId: "overview" as DemoScreenId },
  { label: "Demandes", screenId: "requests" as DemoScreenId },
  { label: "Planning", screenId: "scenario" as DemoScreenId },
  { label: "Interventions", screenId: "details" as DemoScreenId },
  { label: "Clients", screenId: "journal" as DemoScreenId },
  { label: "Catalogue", screenId: "overview" as DemoScreenId },
] as const;

const SCREEN_BREADCRUMB_LABELS: Record<DemoScreenId, string> = {
  overview: "Dashboard",
  scenario: "Scénario guidé",
  requests: "Demandes",
  details: "Détail demande",
  journal: "Journal",
};

function getUserInitials(displayName: string): string {
  return displayName
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type PremiumAppShellProps = {
  users: DemoUser[];
  currentUser: DemoUser;
  onUserChange: (userId: string) => void;
  dataSourceMode: ReturnType<typeof getDataSourceMode>;
  dataModeBanner: ReactNode;
  currentScreen: DemoScreenId;
  onNavigateScreen: (screenId: DemoScreenId) => void;
  children: ReactNode;
};

function PremiumAppShell({
  users,
  currentUser,
  onUserChange,
  dataSourceMode,
  dataModeBanner,
  currentScreen,
  onNavigateScreen,
  children,
}: PremiumAppShellProps) {
  const roleLabel = simulatedRoleLabels[currentUser.role];
  const breadcrumbLabel = SCREEN_BREADCRUMB_LABELS[currentScreen];

  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="Navigation principale">
        <div className="app-sidebar-brand">
          <div className="app-sidebar-logo" aria-hidden="true">
            I
          </div>
          <div className="app-sidebar-title">
            <strong>Interv360</strong>
            <span>SAV &amp; terrain</span>
          </div>
        </div>

        <nav className="app-sidebar-nav" aria-label="Sections produit">
          <p className="app-sidebar-section">Pilotage</p>
          {SIDEBAR_NAV_ITEMS.slice(0, 1).map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                currentScreen === item.screenId &&
                item.label === "Dashboard"
                  ? "app-sidebar-link is-active"
                  : "app-sidebar-link"
              }
              aria-label={`Navigation latérale ${item.label}`}
              onClick={() => onNavigateScreen(item.screenId)}
            >
              {item.label}
              {currentScreen === item.screenId && item.label === "Dashboard" ? (
                <span className="app-sidebar-link-dot" aria-hidden="true" />
              ) : null}
            </button>
          ))}
          <p className="app-sidebar-section">Opérations</p>
          {SIDEBAR_NAV_ITEMS.slice(1, 4).map((item) => (
            <button
              key={item.label}
              type="button"
              className={
                currentScreen === item.screenId
                  ? "app-sidebar-link is-active"
                  : "app-sidebar-link"
              }
              aria-label={`Navigation latérale ${item.label}`}
              onClick={() => onNavigateScreen(item.screenId)}
            >
              {item.label}
              {currentScreen === item.screenId ? (
                <span className="app-sidebar-link-dot" aria-hidden="true" />
              ) : null}
            </button>
          ))}
          <p className="app-sidebar-section">Référentiel</p>
          {SIDEBAR_NAV_ITEMS.slice(4).map((item) => (
            <button
              key={item.label}
              type="button"
              className="app-sidebar-link"
              aria-label={`Navigation latérale ${item.label}`}
              onClick={() => onNavigateScreen(item.screenId)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="app-sidebar-footer">
          <div className="app-sidebar-user">
            <div className="app-sidebar-avatar" aria-hidden="true">
              {getUserInitials(currentUser.displayName)}
            </div>
            <div>
              <strong>{currentUser.displayName}</strong>
              <span>{roleLabel}</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <nav className="app-breadcrumb" aria-label="Fil d'Ariane">
            <span>Accueil</span>
            <span aria-hidden="true">/</span>
            <strong>{breadcrumbLabel}</strong>
          </nav>
          <div className="app-topbar-actions">
            <span className="app-topbar-pill">{getDataSourceModeLabel(dataSourceMode)}</span>
            <div className="app-profile-strip">
              <DemoUserControl
                users={users}
                currentUser={currentUser}
                onUserChange={onUserChange}
              />
            </div>
          </div>
        </header>

        {dataModeBanner}

        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}

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
  const [lastActionMessageKind, setLastActionMessageKind] = useState<
    "success" | "error" | undefined
  >();
  const [scenarioStepIndex, setScenarioStepIndex] = useState(
    INITIAL_SCENARIO_STEP_INDEX,
  );
  const [currentDemoScreen, setCurrentDemoScreen] = useState<DemoScreenId>(
    INITIAL_DEMO_SCREEN_ID,
  );
  const [currentUser, setCurrentUser] = useState<DemoUser>(() =>
    getCurrentDemoUser(),
  );
  const [availableUsers, setAvailableUsers] = useState<DemoUser[]>(() =>
    dataSourceMode === "api" ? [] : DEMO_USERS,
  );
  const [usersLoadError, setUsersLoadError] = useState<string | undefined>();
  const currentRole = getDemoUserRole(currentUser);

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
          : dataSourceMode === "api"
            ? "Impossible de contacter l'API locale. Vérifiez que le backend Interv360 est démarré."
            : "Erreur de chargement des données de démonstration.";
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
      setLastActionMessageKind(undefined);
    }
  }, [visibleRequests, selectedRequestId, isLoading]);

  const handleSelectRequest = useCallback((requestId: string) => {
    setSelectedRequestId(requestId);
    setLastActionMessage(undefined);
    setLastActionMessageKind(undefined);
  }, []);

  const resolveCurrentUser = useCallback((users: DemoUser[]): DemoUser => {
    const activeUsers = users.filter((user) => user.isActive);
    const candidates = activeUsers.length > 0 ? activeUsers : users;

    if (candidates.length === 0) {
      return getDefaultDemoUser();
    }

    const storedId = getStoredCurrentUserId();
    const storedMatch = candidates.find((user) => user.id === storedId);
    if (storedMatch) {
      return storedMatch;
    }

    const defaultMatch = candidates.find(
      (user) => user.id === DEFAULT_DEMO_USER_ID,
    );
    if (defaultMatch) {
      return defaultMatch;
    }

    return candidates[0];
  }, []);

  useEffect(() => {
    if (dataSourceMode !== "api") {
      setAvailableUsers(DEMO_USERS);
      setCurrentUser(getCurrentDemoUser());
      setUsersLoadError(undefined);
      return;
    }

    let cancelled = false;

    const loadApiUsers = async () => {
      try {
        const apiUsers = await listApiUsers();
        if (cancelled) {
          return;
        }

        const nextUser = resolveCurrentUser(apiUsers);
        persistCurrentUserId(nextUser.id);
        setAvailableUsers(apiUsers);
        setCurrentUser(nextUser);
        setUsersLoadError(undefined);
      } catch {
        if (cancelled) {
          return;
        }

        const fallbackUser = findDemoUserById(getStoredCurrentUserId()) ??
          getCurrentDemoUser();
        persistCurrentUserId(fallbackUser.id);
        setAvailableUsers(DEMO_USERS);
        setCurrentUser(fallbackUser);
        setUsersLoadError(
          "Impossible de charger les utilisateurs API. Utilisation des utilisateurs locaux.",
        );
      }
    };

    void loadApiUsers();

    return () => {
      cancelled = true;
    };
  }, [dataSourceMode, resolveCurrentUser]);

  const handleDemoUserChange = useCallback((userId: string) => {
    if (dataSourceMode === "api") {
      const nextUser =
        availableUsers.find((user) => user.id === userId) ??
        resolveCurrentUser(availableUsers);
      persistCurrentUserId(nextUser.id);
      setCurrentUser(nextUser);
    } else {
      setCurrentUser(setCurrentDemoUser(userId));
    }
    setLastActionMessage(undefined);
    setLastActionMessageKind(undefined);
  }, [availableUsers, dataSourceMode, resolveCurrentUser]);

  const handleWorkflowAction = useCallback(
    async (action: DemoTransitionAction) => {
      if (!request) {
        return;
      }

      if (!canRolePerform(currentRole, action)) {
        setLastActionMessage(formatUnauthorizedRoleMessage(currentRole));
        setLastActionMessageKind("error");
        return;
      }

      try {
        const updated = await repository.applyTransition(
          selectedRequestId,
          action,
          {
            actorUserId: currentUser.id,
            actorDisplayName: currentUser.displayName,
            actorRole: currentUser.role,
          },
        );
        if (updated) {
          setDataVersion((version) => version + 1);
          setLastActionMessage(
            `Action enregistrée — statut ${getRequestStatusLabel(updated.status)}.`,
          );
          setLastActionMessageKind("success");
        }
      } catch (error) {
        const message =
          error instanceof RequestsRepositoryError
            ? error.message
            : "Impossible d'enregistrer l'action demandée.";
        setLastActionMessage(message);
        setLastActionMessageKind("error");
      }
    },
    [repository, request, selectedRequestId, currentRole, currentUser],
  );

  const canPerformDemoReset = canRolePerform(currentRole, "demo_reset");

  const handleDemoReset = useCallback(async () => {
    if (!canRolePerform(currentRole, "demo_reset")) {
      setLastActionMessage(formatUnauthorizedRoleMessage(currentRole));
      setLastActionMessageKind("error");
      return;
    }

    try {
      await repository.resetDemo();
      setSelectedRequestId(DEFAULT_SELECTED_REQUEST_ID);
      setStatusFilter("ALL");
      setSearchQuery("");
      setScenarioStepIndex(INITIAL_SCENARIO_STEP_INDEX);
      setDataVersion((version) => version + 1);
      setLastActionMessage(undefined);
      setLastActionMessageKind(undefined);
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
          : "Impossible de réinitialiser la démonstration.";
      setLastActionMessage(message);
      setLastActionMessageKind("error");
    }
  }, [repository, currentRole]);

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

  const dataModeBanner = (
    <div className="app-data-mode" role="status">
      <span className="app-data-mode__description">
        {getDataSourceModeDescription(dataSourceMode)}
      </span>
    </div>
  );

  const shellProps = {
    users: availableUsers.length > 0 ? availableUsers : DEMO_USERS,
    currentUser,
    onUserChange: handleDemoUserChange,
    dataSourceMode,
    dataModeBanner,
    currentScreen: currentDemoScreen,
    onNavigateScreen: goToDemoScreen,
  };

  if (isLoading && requests.length === 0 && !loadError) {
    return (
      <PremiumAppShell {...shellProps} currentScreen={INITIAL_DEMO_SCREEN_ID}>
        <p className="app-loading">Chargement des données de démonstration…</p>
      </PremiumAppShell>
    );
  }

  if (loadError && requests.length === 0) {
    return (
      <PremiumAppShell {...shellProps} currentScreen={INITIAL_DEMO_SCREEN_ID}>
        <p className="app-error" role="alert">
          {loadError}
        </p>
      </PremiumAppShell>
    );
  }

  return (
    <PremiumAppShell {...shellProps}>
      {loadError || usersLoadError ? (
        <p className="app-error app-error--inline" role="alert">
          {loadError ?? usersLoadError}
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
            <DashboardCommandCenter
              requests={requests}
              onNavigateToRequests={() => {
                goToDemoScreen("requests");
              }}
              onOpenRequest={(requestId) => {
                setSelectedRequestId(requestId);
                goToDemoScreen("requests");
              }}
            />
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
              <RequestDetail
                request={request}
                requestId={selectedRequestId}
                variant="premium"
                workflowEvents={workflowEvents}
                onBackToRequests={() => goToDemoScreen("requests")}
                onViewFullHistory={() => goToDemoScreen("journal")}
              />
              <WorkflowActionControl
                request={request}
                onAction={(action) => {
                  void handleWorkflowAction(action);
                }}
                lastActionMessage={lastActionMessage}
                lastActionMessageKind={lastActionMessageKind}
                actorDisplayName={currentUser.displayName}
                actorRoleLabel={simulatedRoleLabels[currentRole]}
                isActionDisabled={(action) =>
                  !canRolePerform(currentRole, action)
                }
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
              isResetDisabled={!canPerformDemoReset}
              lastActionMessage={
                currentDemoScreen === "journal" ? lastActionMessage : undefined
              }
            />
            <AuditTrailView
              request={request}
              requestId={selectedRequestId}
              events={workflowEvents}
            />
          </section>
        ) : null}
      </div>
    </PremiumAppShell>
  );
}
