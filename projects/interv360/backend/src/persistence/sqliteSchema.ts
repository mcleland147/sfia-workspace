import type Database from "better-sqlite3";

function addColumnIfMissing(
  db: Database.Database,
  table: string,
  column: string,
  definition: string,
): void {
  const columns = db
    .prepare(`PRAGMA table_info(${table})`)
    .all() as Array<{ name: string }>;

  if (!columns.some((entry) => entry.name === column)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
  }
}

export function applySqliteSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS requests (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      status TEXT NOT NULL,
      priority TEXT NOT NULL,
      criticality TEXT NOT NULL,
      customer_label TEXT NOT NULL,
      site_label TEXT NOT NULL,
      assigned_technician_label TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      detail_id TEXT NOT NULL,
      is_demo INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS request_details (
      id TEXT PRIMARY KEY,
      request_id TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL,
      channel TEXT NOT NULL,
      impact TEXT NOT NULL,
      requested_date TEXT NOT NULL DEFAULT '',
      equipment_label TEXT NOT NULL DEFAULT '',
      business_impact TEXT NOT NULL DEFAULT '',
      demo_center TEXT NOT NULL,
      description TEXT NOT NULL,
      readonly_blocks_json TEXT NOT NULL,
      FOREIGN KEY (request_id) REFERENCES requests(id)
    );

    CREATE TABLE IF NOT EXISTS workflow_events (
      id TEXT PRIMARY KEY,
      request_id TEXT NOT NULL,
      type TEXT NOT NULL,
      from_status TEXT NOT NULL,
      to_status TEXT NOT NULL,
      label TEXT NOT NULL,
      created_at TEXT NOT NULL,
      source TEXT NOT NULL,
      is_demo INTEGER NOT NULL DEFAULT 1,
      action TEXT,
      actor_user_id TEXT,
      actor_display_name TEXT,
      actor_role TEXT,
      FOREIGN KEY (request_id) REFERENCES requests(id)
    );

    CREATE TABLE IF NOT EXISTS store_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      display_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      team TEXT NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1
    );
  `);

  addColumnIfMissing(
    db,
    "request_details",
    "requested_date",
    "TEXT NOT NULL DEFAULT ''",
  );
  addColumnIfMissing(
    db,
    "request_details",
    "equipment_label",
    "TEXT NOT NULL DEFAULT ''",
  );
  addColumnIfMissing(
    db,
    "request_details",
    "business_impact",
    "TEXT NOT NULL DEFAULT ''",
  );
  addColumnIfMissing(db, "workflow_events", "action", "TEXT");
  addColumnIfMissing(db, "workflow_events", "actor_user_id", "TEXT");
  addColumnIfMissing(db, "workflow_events", "actor_display_name", "TEXT");
  addColumnIfMissing(db, "workflow_events", "actor_role", "TEXT");
  addColumnIfMissing(db, "requests", "requester_name", "TEXT");
  addColumnIfMissing(db, "requests", "requester_team", "TEXT");
  addColumnIfMissing(db, "requests", "assigned_to_user_id", "TEXT");
  addColumnIfMissing(db, "requests", "assigned_to_display_name", "TEXT");
}
