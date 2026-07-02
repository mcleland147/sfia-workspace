import type Database from "better-sqlite3";
import type { DemoRequest, DemoRequestDetail } from "../domain/types.js";
import { demoDetailsSeed, demoRequestsSeed } from "../seed/demoSeed.js";
import { SEEDED_USERS } from "../seed/usersSeed.js";

const EVENT_COUNTER_KEY = "event_counter";

export function seedUsers(db: Database.Database): void {
  const insertUser = db.prepare(`
    INSERT INTO users (id, display_name, email, role, team, is_active)
    VALUES (@id, @displayName, @email, @role, @team, @isActive)
    ON CONFLICT(id) DO UPDATE SET
      display_name = excluded.display_name,
      email = excluded.email,
      role = excluded.role,
      team = excluded.team,
      is_active = excluded.is_active
  `);

  const seedTransaction = db.transaction(() => {
    for (const user of SEEDED_USERS) {
      insertUser.run({
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        role: user.role,
        team: user.team,
        isActive: user.isActive ? 1 : 0,
      });
    }
  });

  seedTransaction();
}

export function seedDatabaseIfEmpty(db: Database.Database): void {
  const row = db
    .prepare("SELECT COUNT(*) AS count FROM requests")
    .get() as { count: number };

  if (row.count === 0) {
    insertSeedData(db);
  }
}

export function clearPersistedData(db: Database.Database): void {
  db.exec(`
    DELETE FROM workflow_events;
    DELETE FROM request_details;
    DELETE FROM requests;
    DELETE FROM store_meta;
  `);
}

export function insertSeedData(db: Database.Database): void {
  const insertRequest = db.prepare(`
    INSERT INTO requests (
      id, title, status, priority, criticality,
      customer_label, site_label, assigned_technician_label,
      created_at, updated_at, detail_id, is_demo
    ) VALUES (
      @id, @title, @status, @priority, @criticality,
      @customerLabel, @siteLabel, @assignedTechnicianLabel,
      @createdAt, @updatedAt, @detailId, 1
    )
  `);

  const insertDetail = db.prepare(`
    INSERT INTO request_details (
      id, request_id, category, channel, impact,
      requested_date, equipment_label, business_impact,
      demo_center, description, readonly_blocks_json
    ) VALUES (
      @id, @requestId, @category, @channel, @impact,
      @requestedDate, @equipmentLabel, @businessImpact,
      @demoCenter, @description, @readonlyBlocksJson
    )
  `);

  const insertMeta = db.prepare(`
    INSERT INTO store_meta (key, value) VALUES (@key, @value)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `);

  const seedTransaction = db.transaction(() => {
    for (const request of demoRequestsSeed) {
      insertRequest.run(requestToRow(request));
    }

    for (const detail of demoDetailsSeed) {
      insertDetail.run(detailToRow(detail));
    }

    insertMeta.run({ key: EVENT_COUNTER_KEY, value: "0" });
  });

  seedTransaction();
}

function requestToRow(request: DemoRequest) {
  return {
    id: request.id,
    title: request.title,
    status: request.status,
    priority: request.priority,
    criticality: request.criticality,
    customerLabel: request.customerLabel,
    siteLabel: request.siteLabel,
    assignedTechnicianLabel: request.assignedTechnicianLabel,
    createdAt: request.createdAt,
    updatedAt: request.updatedAt,
    detailId: request.detailId,
  };
}

function detailToRow(detail: DemoRequestDetail) {
  return {
    id: detail.id,
    requestId: detail.requestId,
    category: detail.category,
    channel: detail.channel,
    impact: detail.impact,
    requestedDate: detail.requestedDate,
    equipmentLabel: detail.equipmentLabel,
    businessImpact: detail.businessImpact,
    demoCenter: detail.demoCenter,
    description: detail.description,
    readonlyBlocksJson: JSON.stringify(detail.readonlyBlocks),
  };
}

export function getEventCounter(db: Database.Database): number {
  const row = db
    .prepare("SELECT value FROM store_meta WHERE key = ?")
    .get(EVENT_COUNTER_KEY) as { value: string } | undefined;

  if (!row) {
    return 0;
  }

  return Number.parseInt(row.value, 10) || 0;
}

export function setEventCounter(db: Database.Database, value: number): void {
  db.prepare(
    `
    INSERT INTO store_meta (key, value) VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `,
  ).run(EVENT_COUNTER_KEY, String(value));
}

export function nextEventId(db: Database.Database): string {
  const next = getEventCounter(db) + 1;
  setEventCounter(db, next);
  return `evt-demo-${String(next).padStart(3, "0")}`;
}
