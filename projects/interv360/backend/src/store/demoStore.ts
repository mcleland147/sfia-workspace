import { resolveTransition } from "../domain/transitions.js";
import type {
  DemoRequest,
  DemoRequestDetail,
  RequestCriticality,
  RequestPriority,
  RequestStatus,
  WorkflowEvent,
  WorkflowEventType,
} from "../domain/types.js";
import { StoreError } from "../domain/types.js";
import { closeDatabase, getDatabase } from "../persistence/sqliteDatabase.js";
import {
  clearPersistedData,
  insertSeedData,
  nextEventId,
} from "../persistence/sqliteSeed.js";

interface RequestRow {
  id: string;
  title: string;
  status: string;
  priority: string;
  criticality: string;
  customer_label: string;
  site_label: string;
  assigned_technician_label: string | null;
  created_at: string;
  updated_at: string;
  detail_id: string;
  is_demo: number;
}

interface DetailRow {
  id: string;
  request_id: string;
  category: string;
  channel: string;
  impact: string;
  demo_center: string;
  description: string;
  readonly_blocks_json: string;
}

interface EventRow {
  id: string;
  request_id: string;
  type: string;
  from_status: string;
  to_status: string;
  label: string;
  created_at: string;
  source: string;
  is_demo: number;
}

function nowIso(): string {
  return new Date().toISOString();
}

function rowToRequest(row: RequestRow): DemoRequest {
  return {
    id: row.id,
    title: row.title,
    status: row.status as RequestStatus,
    priority: row.priority as RequestPriority,
    criticality: row.criticality as RequestCriticality,
    customerLabel: row.customer_label,
    siteLabel: row.site_label,
    assignedTechnicianLabel: row.assigned_technician_label,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    detailId: row.detail_id,
    isDemo: true,
  };
}

function rowToDetail(row: DetailRow): DemoRequestDetail {
  return {
    id: row.id,
    requestId: row.request_id,
    category: row.category,
    channel: row.channel,
    impact: row.impact,
    demoCenter: row.demo_center,
    description: row.description,
    readonlyBlocks: JSON.parse(row.readonly_blocks_json) as DemoRequestDetail["readonlyBlocks"],
  };
}

function rowToEvent(row: EventRow): WorkflowEvent {
  return {
    id: row.id,
    requestId: row.request_id,
    type: row.type as WorkflowEventType,
    fromStatus: row.from_status as RequestStatus,
    toStatus: row.to_status as RequestStatus,
    label: row.label,
    createdAt: row.created_at,
    source: "demo",
    isDemo: true,
  };
}

function findRequestRow(id: string): RequestRow | undefined {
  const db = getDatabase();
  return db
    .prepare("SELECT * FROM requests WHERE id = ?")
    .get(id) as RequestRow | undefined;
}

export function listRequests(): DemoRequest[] {
  const db = getDatabase();
  const rows = db
    .prepare("SELECT * FROM requests ORDER BY created_at ASC")
    .all() as RequestRow[];

  return rows.map(rowToRequest);
}

export function getRequestWithDetail(
  id: string,
): { request: DemoRequest; detail: DemoRequestDetail } {
  const requestRow = findRequestRow(id);
  if (!requestRow) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  const db = getDatabase();
  const detailRow = db
    .prepare("SELECT * FROM request_details WHERE request_id = ?")
    .get(id) as DetailRow | undefined;

  if (!detailRow) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  return {
    request: rowToRequest(requestRow),
    detail: structuredClone(rowToDetail(detailRow)),
  };
}

export function listEventsForRequest(id: string): WorkflowEvent[] {
  if (!findRequestRow(id)) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  const db = getDatabase();
  const rows = db
    .prepare(
      "SELECT * FROM workflow_events WHERE request_id = ? ORDER BY created_at ASC",
    )
    .all(id) as EventRow[];

  return rows.map(rowToEvent);
}

export function applyTransition(
  id: string,
  action: string,
): { request: DemoRequest; event: WorkflowEvent } {
  const requestRow = findRequestRow(id);
  if (!requestRow) {
    throw new StoreError("REQUEST_NOT_FOUND", "Request not found");
  }

  const current = rowToRequest(requestRow);
  const result = resolveTransition(current.status, action);

  if (!result.ok) {
    throw new StoreError(result.code, getErrorMessage(result.code));
  }

  const db = getDatabase();
  const updatedAt = nowIso();

  const apply = db.transaction(() => {
    db.prepare(
      `
      UPDATE requests
      SET status = ?, updated_at = ?
      WHERE id = ?
    `,
    ).run(result.toStatus, updatedAt, id);

    const event: WorkflowEvent = {
      id: nextEventId(db),
      requestId: id,
      type: result.type,
      fromStatus: result.fromStatus,
      toStatus: result.toStatus,
      label: result.label,
      createdAt: updatedAt,
      source: "demo",
      isDemo: true,
    };

    db.prepare(
      `
      INSERT INTO workflow_events (
        id, request_id, type, from_status, to_status,
        label, created_at, source, is_demo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
    `,
    ).run(
      event.id,
      event.requestId,
      event.type,
      event.fromStatus,
      event.toStatus,
      event.label,
      event.createdAt,
      event.source,
    );

    return event;
  });

  const event = apply();
  const updatedRequest: DemoRequest = {
    ...current,
    status: result.toStatus,
    updatedAt,
  };

  return {
    request: { ...updatedRequest },
    event: { ...event },
  };
}

export function resetDemoStore(): { requestsCount: number } {
  if (!isDemoModeEnabled()) {
    throw new StoreError("DEMO_MODE_REQUIRED", "Demo mode is required");
  }

  const db = getDatabase();
  const reset = db.transaction(() => {
    clearPersistedData(db);
    insertSeedData(db);
  });

  reset();

  return { requestsCount: listRequests().length };
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
  const db = getDatabase();
  const reset = db.transaction(() => {
    clearPersistedData(db);
    insertSeedData(db);
  });

  reset();
}

/** Test helper: close SQLite connection between isolated runs. */
export function closeDemoStoreForTests(): void {
  closeDatabase();
}
