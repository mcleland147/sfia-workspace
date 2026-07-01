import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import { applySqliteSchema } from "./sqliteSchema.js";
import { seedDatabaseIfEmpty } from "./sqliteSeed.js";

const backendRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

const defaultDbPath = path.join(backendRoot, "data", "interv360.sqlite");

let database: Database.Database | null = null;
let activePath: string | null = null;

function resolveDatabasePath(): string {
  return process.env.SQLITE_PATH ?? defaultDbPath;
}

function ensureParentDirectory(filePath: string): void {
  if (filePath === ":memory:") {
    return;
  }

  const directory = path.dirname(filePath);
  fs.mkdirSync(directory, { recursive: true });
}

export function getDatabase(): Database.Database {
  const databasePath = resolveDatabasePath();

  if (!database || activePath !== databasePath) {
    closeDatabase();
    ensureParentDirectory(databasePath);
    database = new Database(databasePath);
    activePath = databasePath;
    applySqliteSchema(database);
    seedDatabaseIfEmpty(database);
  }

  return database;
}

export function closeDatabase(): void {
  if (database) {
    database.close();
    database = null;
    activePath = null;
  }
}

export function getDatabasePathForTests(): string {
  return resolveDatabasePath();
}
