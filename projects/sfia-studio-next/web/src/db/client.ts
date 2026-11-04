import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL missing — refuse to start without explicit lane DSN");
}

const globalForDb = globalThis as unknown as { __sfiaSql?: ReturnType<typeof postgres> };

export const sql =
  globalForDb.__sfiaSql ??
  postgres(url, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__sfiaSql = sql;
}

export const db = drizzle(sql, { schema });
export type Db = typeof db;
