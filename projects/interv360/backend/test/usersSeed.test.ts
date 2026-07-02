import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Database from "better-sqlite3";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { applySqliteSchema } from "../src/persistence/sqliteSchema.js";
import { seedUsers } from "../src/persistence/sqliteSeed.js";
import {
  closeDatabase,
  getDatabase,
} from "../src/persistence/sqliteDatabase.js";
import { DEFAULT_USER_ID, SEEDED_USERS } from "../src/seed/usersSeed.js";

const EXPECTED_USER_IDS = [
  "user-requester",
  "user-technician",
  "user-manager",
  "user-admin",
  "user-viewer",
] as const;

interface UserRow {
  id: string;
  display_name: string;
  email: string;
  role: string;
  team: string;
  is_active: number;
}

function listUsers(db: Database.Database): UserRow[] {
  return db
    .prepare(
      "SELECT id, display_name, email, role, team, is_active FROM users ORDER BY id",
    )
    .all() as UserRow[];
}

describe("users SQLite seed", () => {
  let tempDbPath = "";
  let db: Database.Database;

  beforeEach(() => {
    tempDbPath = path.join(
      os.tmpdir(),
      `interv360-users-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
    );
    db = new Database(tempDbPath);
    applySqliteSchema(db);
    seedUsers(db);
  });

  afterEach(() => {
    db.close();

    if (tempDbPath && fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  it("creates the users table after schema initialization", () => {
    const table = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'users'",
      )
      .get() as { name: string } | undefined;

    expect(table?.name).toBe("users");
  });

  it("seeds exactly the five reference users", () => {
    const users = listUsers(db);
    expect(users).toHaveLength(5);
  });

  it("includes all expected user ids", () => {
    const ids = listUsers(db).map((user) => user.id);
    expect(ids).toEqual([...EXPECTED_USER_IDS].sort());
  });

  it("seeds user-technician with technician role", () => {
    const technician = db
      .prepare("SELECT role FROM users WHERE id = ?")
      .get(DEFAULT_USER_ID) as { role: string } | undefined;

    expect(technician?.role).toBe("technician");
  });

  it("does not create duplicate users when seed is rerun", () => {
    seedUsers(db);
    seedUsers(db);

    const users = listUsers(db);
    expect(users).toHaveLength(5);
  });

  it("keeps seeded emails unique", () => {
    const emails = listUsers(db).map((user) => user.email);
    expect(new Set(emails).size).toBe(emails.length);
    expect(emails.sort()).toEqual(
      SEEDED_USERS.map((user) => user.email).sort(),
    );
  });

  it("marks all seeded users as active", () => {
    const users = listUsers(db);
    expect(users.every((user) => user.is_active === 1)).toBe(true);
  });

  it("updates existing seeded users on conflict without duplicating rows", () => {
    db.prepare(
      "UPDATE users SET display_name = ? WHERE id = ?",
    ).run("Temporary Name", "user-admin");

    seedUsers(db);

    const admin = db
      .prepare("SELECT display_name FROM users WHERE id = ?")
      .get("user-admin") as { display_name: string } | undefined;

    expect(admin?.display_name).toBe("Amin Admin");
    expect(listUsers(db)).toHaveLength(5);
  });
});

describe("users seed via database initialization", () => {
  let tempDbPath = "";

  beforeEach(() => {
    tempDbPath = path.join(
      os.tmpdir(),
      `interv360-users-init-${Date.now()}-${Math.random().toString(36).slice(2)}.sqlite`,
    );
    process.env.SQLITE_PATH = tempDbPath;
    closeDatabase();
  });

  afterEach(() => {
    closeDatabase();
    delete process.env.SQLITE_PATH;

    if (tempDbPath && fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  it("seeds users when opening the shared database", () => {
    const database = getDatabase();
    const count = database
      .prepare("SELECT COUNT(*) AS count FROM users")
      .get() as { count: number };

    expect(count.count).toBe(5);
  });
});
