import { resolveTransition } from "../domain/transitions.js";
import type {
  DemoRequest,
  DemoRequestDetail,
  WorkflowEvent,
} from "../domain/types.js";
import { StoreError } from "../domain/types.js";
import { demoDetailsSeed, demoRequestsSeed } from "../seed/demoSeed.js";

interface StoreState {
  requests: DemoRequest[];
  details: Map<string, DemoRequestDetail>;
  events: WorkflowEvent[];
  eventCounter: number;
}

let state: StoreState = createInitialState();

function createInitialState(): StoreState {
  return {
    requests: demoRequestsSeed.map((request) => ({ ...request })),
    details: new Map(
      demoDetailsSeed.map((detail) => [detail.requestId, { ...detail }]),
    ),
    events: [],
    eventCounter: 0,
  };
}

function nextEventId(): string {
  state.eventCounter += 1;
  return `evt-demo-${String(state.eventCounter).padStart(3, "0")}`;
}

function nowIso(): string {
  return new Date().toISOString();
}

function findRequest(id: string): DemoRequest | undefined {
  return state.requests.find((request) => request.id === id);
}

export function listRequests(): DemoRequest[] {
  return state.requests.map((request) => ({ ...request }));
}

export function getRequestWithDetail(
  id: string,
): { request: DemoRequest; detail: DemoRequestDetail } {
  const request = findRequest(id);
  if (!request) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  const detail = state.details.get(id);
  if (!detail) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  return {
    request: { ...request },
    detail: structuredClone(detail),
  };
}

export function listEventsForRequest(id: string): WorkflowEvent[] {
  if (!findRequest(id)) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  return state.events
    .filter((event) => event.requestId === id)
    .map((event) => ({ ...event }))
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export function applyTransition(
  id: string,
  action: string,
): { request: DemoRequest; event: WorkflowEvent } {
  const index = state.requests.findIndex((request) => request.id === id);
  if (index === -1) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  const current = state.requests[index];
  const result = resolveTransition(current.status, action);

  if (!result.ok) {
    throw new StoreError(result.code, getErrorMessage(result.code));
  }

  const updatedAt = nowIso();
  const updatedRequest: DemoRequest = {
    ...current,
    status: result.toStatus,
    updatedAt,
  };

  state.requests[index] = updatedRequest;

  const event: WorkflowEvent = {
    id: nextEventId(),
    requestId: id,
    type: result.type,
    fromStatus: result.fromStatus,
    toStatus: result.toStatus,
    label: result.label,
    createdAt: updatedAt,
    source: "demo",
    isDemo: true,
  };

  state.events.push(event);

  return {
    request: { ...updatedRequest },
    event: { ...event },
  };
}

export function resetDemoStore(): { requestsCount: number } {
  if (!isDemoModeEnabled()) {
    throw new StoreError(
      "DEMO_MODE_REQUIRED",
      "Demo mode is required",
    );
  }

  state = createInitialState();
  return { requestsCount: state.requests.length };
}

export function isDemoModeEnabled(): boolean {
  const value = process.env.DEMO_MODE;
  if (value === undefined) {
    return true;
  }
  return value === "true" || value === "1";
}

function getErrorMessage(code: string): string {
  switch (code) {
    case "INVALID_TRANSITION_ACTION":
      return "Invalid transition action";
    case "TRANSITION_NOT_ALLOWED":
      return "Transition not allowed from current status";
    case "REQUEST_NOT_FOUND":
      return "Request not found";
    case "DEMO_MODE_REQUIRED":
      return "Demo mode is required";
    default:
      return "Unexpected store error";
  }
}

/** Test helper: restore seed without demo mode check. */
export function resetDemoStoreForTests(): void {
  state = createInitialState();
}
