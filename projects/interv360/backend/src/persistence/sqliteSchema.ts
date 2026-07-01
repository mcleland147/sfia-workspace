import type Database from "better-sqlite3";

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
      FOREIGN KEY (request_id) REFERENCES requests(id)
    );

    CREATE TABLE IF NOT EXISTS store_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
}
