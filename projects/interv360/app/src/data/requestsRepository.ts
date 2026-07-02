import type {
  DemoRequest,
  DemoWorkflowEvent,
  DemoWorkflowEventType,
  RequestStatus,
} from "../domain/requestStatus";
import { demoRequests } from "../seed/demoRequests";
import { clearInterv360LocalStorage } from "./interv360LocalStorage";
import { STORAGE_KEY_JOURNAL, STORAGE_KEY_REQUESTS } from "./localStorageKeys";

function readStoredRequests(): DemoRequest[] | null {
  const raw = localStorage.getItem(STORAGE_KEY_REQUESTS);
  if (!raw) {
    return null;
  }

  return JSON.parse(raw) as DemoRequest[];
}

function writeStoredRequests(requests: DemoRequest[]): void {
  localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(requests));
}

function readStoredWorkflowEvents(): DemoWorkflowEvent[] {
  const raw = localStorage.getItem(STORAGE_KEY_JOURNAL);
  if (!raw) {
    return [];
  }

  return JSON.parse(raw) as DemoWorkflowEvent[];
}

function writeStoredWorkflowEvents(events: DemoWorkflowEvent[]): void {
  localStorage.setItem(STORAGE_KEY_JOURNAL, JSON.stringify(events));
}

function createLocalTimestamp(): string {
  return new Date().toLocaleString("fr-FR");
}

function appendWorkflowEvent(event: DemoWorkflowEvent): void {
  const events = readStoredWorkflowEvents();
  writeStoredWorkflowEvents([...events, event]);
}

function performTransition(
  requestId: string,
  fromStatus: RequestStatus,
  toStatus: RequestStatus,
  eventType: DemoWorkflowEventType,
  message: string,
): DemoRequest | undefined {
  const requests = getRequests();
  const index = requests.findIndex((request) => request.id === requestId);
  if (index === -1) {
    return undefined;
  }

  const request = requests[index];
  if (request.status !== fromStatus) {
    return undefined;
  }

  const updated: DemoRequest = { ...request, status: toStatus };
  const nextRequests = [...requests];
  nextRequests[index] = updated;
  writeStoredRequests(nextRequests);
  appendWorkflowEvent({
    type: eventType,
    requestId,
    fromStatus,
    toStatus,
    message,
    createdAt: createLocalTimestamp(),
  });

  return updated;
}

function initializeRequests(): DemoRequest[] {
  writeStoredRequests(demoRequests);
  return [...demoRequests];
}

export function getRequests(): DemoRequest[] {
  const stored = readStoredRequests();
  if (stored) {
    return stored;
  }

  return initializeRequests();
}

export function resetDemoData(): DemoRequest[] {
  clearInterv360LocalStorage();
  return initializeRequests();
}

/** @deprecated Use resetDemoData for full prefixed purge and re-seed. */
export function resetDemoRequests(): void {
  resetDemoData();
}

export function getRequestById(id: string): DemoRequest | undefined {
  return getRequests().find((request) => request.id === id);
}

export function getDemoWorkflowEvents(requestId: string): DemoWorkflowEvent[] {
  return readStoredWorkflowEvents().filter(
    (event) => event.requestId === requestId,
  );
}

export function qualifyDemoRequest(requestId: string): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-01",
    "STAT-02",
    "qualification.confirmed",
    "Qualification fictive confirmée",
  );
}

export function planDemoIntervention(
  requestId: string,
): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-02",
    "STAT-03",
    "planning.confirmed",
    "Planification fictive confirmée",
  );
}

export function completeDemoIntervention(
  requestId: string,
): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-03",
    "STAT-04",
    "intervention.completed",
    "Intervention fictive réalisée",
  );
}

export function closeDemoRequest(requestId: string): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-04",
    "STAT-06",
    "report.closed",
    "Compte rendu fictif clôturé",
  );
}

export function putDemoRequestOnHold(
  requestId: string,
): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-03",
    "STAT-05",
    "hold.placed",
    "Demande fictive mise en attente",
  );
}

export function resumeDemoRequest(requestId: string): DemoRequest | undefined {
  return performTransition(
    requestId,
    "STAT-05",
    "STAT-03",
    "hold.resumed",
    "Reprise fictive du traitement",
  );
}

const CANCELLABLE_STATUSES: RequestStatus[] = [
  "STAT-01",
  "STAT-02",
  "STAT-03",
  "STAT-05",
];

export function cancelDemoRequest(requestId: string): DemoRequest | undefined {
  const request = getRequestById(requestId);
  if (!request || !CANCELLABLE_STATUSES.includes(request.status)) {
    return undefined;
  }

  return performTransition(
    requestId,
    request.status,
    "STAT-07",
    "request.cancelled",
    "Demande fictive annulée",
  );
}

const REQUALIFIABLE_STATUSES: RequestStatus[] = [
  "STAT-02",
  "STAT-03",
  "STAT-05",
];

export function requalifyDemoRequest(
  requestId: string,
): DemoRequest | undefined {
  const request = getRequestById(requestId);
  if (!request || !REQUALIFIABLE_STATUSES.includes(request.status)) {
    return undefined;
  }

  return performTransition(
    requestId,
    request.status,
    "STAT-02",
    "request.requalified",
    "Demande fictive requalifiée",
  );
}
