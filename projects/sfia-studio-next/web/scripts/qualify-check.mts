/**
 * C24 — DEV qualification preflight (lane, ports, providers, DB).
 * No secrets printed. Does not start the server.
 * LIVE qualify refuses SCRIPTED Cursor / FAKE Nora as "LIVE OK".
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createServer } from "node:net";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.STUDIO_PORT || process.env.SFIA_QUALIFY_PORT || 3100);
const HOST = "127.0.0.1";

type Check = { id: string; ok: boolean; detail: string; live?: boolean };

function mask(v: string | undefined): string {
  if (!v) return "absent";
  return `set(len=${v.length})`;
}

async function portListening(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const s = createServer();
    s.once("error", () => resolve(true));
    s.once("listening", () => {
      s.close(() => resolve(false));
    });
    s.listen(port, HOST);
  });
}

async function probeDevDatabase(url: string): Promise<Check> {
  if (!url) {
    return { id: "database-probe", ok: false, detail: "DATABASE_URL absent" };
  }
  if (/5434|recette|stable|\bprod\b/i.test(url)) {
    return {
      id: "database-probe",
      ok: false,
      detail: "DATABASE_URL matches protected lane marker — refuse",
    };
  }
  try {
    const sql = postgres(url, { max: 1, connect_timeout: 5, idle_timeout: 5 });
    try {
      const rows = await sql<{ v: number; db: string }[]>`
        select 1::int as v, current_database() as db
      `;
      const db = rows[0]?.db ?? "?";
      const ok =
        rows[0]?.v === 1 &&
        !/recette|stable|e2e|prod/i.test(db) &&
        (/sfia_next_dev/i.test(db) || /dev/i.test(db) || db.length > 0);
      return {
        id: "database-probe",
        ok,
        detail: ok
          ? `connected current_database=${db}`
          : `unexpected database name=${db}`,
      };
    } finally {
      await sql.end({ timeout: 2 });
    }
  } catch (e) {
    return {
      id: "database-probe",
      ok: false,
      detail: `connect failed: ${String((e as Error)?.message ?? e).slice(0, 120)}`,
    };
  }
}

async function main() {
  const checks: Check[] = [];
  const lane = (process.env.STUDIO_LANE || "").trim().toUpperCase();
  checks.push({
    id: "lane",
    ok: lane === "DEV",
    detail: `STUDIO_LANE=${lane || "(empty)"}`,
  });

  const dbUrl = process.env.DATABASE_URL || "";
  const dbShapeOk =
    Boolean(dbUrl) &&
    !/5434|recette|stable|\bprod\b/i.test(dbUrl) &&
    (/:5433\b/.test(dbUrl) || /sfia_next_dev|localhost|127\.0\.0\.1/.test(dbUrl));
  checks.push({
    id: "database-shape",
    ok: dbShapeOk,
    detail: dbShapeOk
      ? "DATABASE_URL looks DEV (no RECETTE/STABLE markers)"
      : "DATABASE_URL missing or not DEV",
  });
  checks.push(await probeDevDatabase(dbUrl));

  checks.push({
    id: "test-login",
    ok: process.env.STUDIO_DEV_TEST_LOGIN === "1",
    detail: `STUDIO_DEV_TEST_LOGIN=${process.env.STUDIO_DEV_TEST_LOGIN || "0"}`,
  });

  const fixture =
    process.env.STUDIO_FORCE_NORA_FIXTURE === "1" ||
    process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1" ||
    process.env.STUDIO_E2E === "1";
  checks.push({
    id: "no-fake-nora",
    ok: !fixture,
    live: !fixture,
    detail: fixture
      ? "FAKE/SIM/E2E flags set — refuse LIVE qualify"
      : "fixture/SIM/E2E cleared for LIVE",
  });

  checks.push({
    id: "openai",
    ok: Boolean((process.env.OPENAI_API_KEY || "").trim()),
    live: Boolean((process.env.OPENAI_API_KEY || "").trim()) && !fixture,
    detail: `OPENAI_API_KEY=${mask(process.env.OPENAI_API_KEY)}`,
  });

  const effectMode = (process.env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
  let cursorSource: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" = "NONE";
  if ((process.env.CURSOR_API_KEY || "").trim()) {
    cursorSource = "ENV";
  } else {
    try {
      const { FileCredentialStore } = await import("@cursor/sdk");
      const store = new FileCredentialStore();
      const creds = await store.load();
      const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
      if (key) cursorSource = "FILE_CREDENTIAL_STORE";
    } catch {
      /* store unavailable */
    }
  }
  // SCRIPTED is never LIVE — qualify LIVE requires Cursor LIVE + key.
  const cursorLive =
    effectMode === "LIVE" &&
    (cursorSource === "ENV" || cursorSource === "FILE_CREDENTIAL_STORE");
  checks.push({
    id: "cursor-sdk",
    ok: cursorLive,
    live: cursorLive,
    detail:
      effectMode === "SCRIPTED"
        ? `mode=SCRIPTED source=${cursorSource} — NOT LIVE (refuse as LIVE qualify)`
        : `mode=${effectMode || "(unset)"} source=${cursorSource} live=${cursorLive}`,
  });

  const listening = await portListening(PORT);
  checks.push({
    id: "port",
    ok: true,
    detail: listening
      ? `${HOST}:${PORT} already listening (reuse allowed for qualify:browser)`
      : `${HOST}:${PORT} free`,
  });

  const buildIdPath = join(ROOT, ".next", "BUILD_ID");
  const hasBuild = existsSync(buildIdPath);
  const buildId = hasBuild ? readFileSync(buildIdPath, "utf8").trim() : null;
  const metaPath = join(ROOT, ".sfia-evidence", "qualify-build.json");
  let metaDetail = "no qualify-build.json";
  if (existsSync(metaPath)) {
    try {
      const meta = JSON.parse(readFileSync(metaPath, "utf8")) as {
        buildId?: string;
        contentDigest?: string;
      };
      metaDetail = `meta.buildId=${meta.buildId ?? "?"} digest=${meta.contentDigest ?? "absent"}`;
    } catch {
      metaDetail = "qualify-build.json unreadable";
    }
  }
  checks.push({
    id: "build",
    ok: true,
    detail: hasBuild
      ? `BUILD_ID=${buildId}; ${metaDetail}`
      : `no .next/BUILD_ID — qualify:start will build; ${metaDetail}`,
  });

  const failed = checks.filter((c) => !c.ok);
  const liveCapable = checks
    .filter((c) => c.live === true)
    .map((c) => c.id);
  const report = {
    at: new Date().toISOString(),
    host: HOST,
    port: PORT,
    checks,
    ok: failed.length === 0,
    failIds: failed.map((c) => c.id),
    liveCapable,
    note:
      "SCRIPTED Cursor never counts as LIVE. database-probe opens a real DEV connection.",
  };
  console.log(JSON.stringify(report, null, 2));
  if (failed.length) process.exit(2);
}

main().catch((e) => {
  console.error(String(e?.stack || e));
  process.exit(1);
});
