/**
 * S08-4D — Workspace 1440 context-rail footer shortcuts proof (46:2).
 * Production `next start` only.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { openProjectWorkspaceView } from "../../../../projects/sfia-studio/app/e2e/support/projectWorkspaceNavigation.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../../..");
const APP = path.join(ROOT, "projects/sfia-studio/app");
const OUT = path.join(__dirname, "runtime");
const STATES = path.join(__dirname, "states");
const SNAPSHOTS_INDEX = path.join(STATES, "snapshots/index.json");
const PORT = process.env.S08_4_CAPTURE_PORT?.trim() || "3022";
const BASE = `http://localhost:${PORT}`;

const require = createRequire(path.join(APP, "package.json"));
const { chromium } = require("playwright");

const storagePath = path.join(
  ROOT,
  ".tmp-sfia-review/auth/studio-storage-state.json",
);
const snapshotsIndex = JSON.parse(fs.readFileSync(SNAPSHOTS_INDEX, "utf8"));
const snap = snapshotsIndex.snapshots["workspace-rich"];

fs.mkdirSync(OUT, { recursive: true });
let serverProc = null;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitReady(attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(`${BASE}/login`, { redirect: "manual" });
      if (res.status >= 200 && res.status < 500) return true;
    } catch {
      /* retry */
    }
    await sleep(500);
  }
  return false;
}

async function stopServer() {
  if (!serverProc) return;
  serverProc.kill("SIGTERM");
  await sleep(800);
  try {
    serverProc.kill("SIGKILL");
  } catch {
    /* ignore */
  }
  serverProc = null;
}

async function startServer() {
  await stopServer();
  serverProc = spawn(
    "npx",
    ["next", "start", "--port", PORT, "--hostname", "localhost"],
    {
      cwd: APP,
      env: {
        ...process.env,
        SFIA_STUDIO_PRODUCT_DB_PATH: snap.productDb,
        SFIA_STUDIO_NORA_SESSION_DB_PATH: snap.sessionDb,
        OPS1_CONVERSATION_PROVIDER: "fake",
        BETTER_AUTH_URL: BASE,
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  if (!(await waitReady())) {
    await stopServer();
    throw new Error("SERVER_NOT_READY");
  }
}

async function openNamedProject(page) {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => {
    const loading = document.querySelector(
      '[data-testid="studio-projects-loading"]',
    );
    return (
      !loading &&
      (!!document.querySelector('[data-testid="studio-projects-list"]') ||
        !!document.querySelector('[data-testid="studio-projects-empty"]'))
    );
  }, { timeout: 60000 });
  const open = page
    .getByTestId("studio-projects-open")
    .filter({ hasText: /Product Simplification/ })
    .first();
  await open.waitFor({ state: "visible", timeout: 20000 });
  await open.click();
  await page.waitForSelector('[data-testid="project-workspace-layout"]', {
    timeout: 60000,
  });
}

async function measureFooter(page) {
  return page.evaluate(() => {
    const col = document.querySelector('[data-testid="project-lps-column"]');
    const scroll = document.querySelector(
      '[data-testid="project-context-scroll"]',
    );
    const nav = document.querySelector(
      '[data-testid="project-context-shortcuts"]',
    );
    const labels = ["Journal du cycle", "Historique", "Synthèses"];
    if (
      !(col instanceof HTMLElement) ||
      !(scroll instanceof HTMLElement) ||
      !(nav instanceof HTMLElement)
    ) {
      return { ok: false, reason: "missing-nodes" };
    }
    const colRect = col.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const scrollRect = scroll.getBoundingClientRect();
    const text = nav.textContent ?? "";
    const missing = labels.filter((l) => !text.includes(l));
    const insideScroll = scroll.contains(nav);
    const dup = document.querySelectorAll(
      '[data-testid="project-context-shortcuts"]',
    ).length;
    return {
      ok: true,
      missing,
      insideScroll,
      dup,
      navTop: Math.round(navRect.top),
      navBottom: Math.round(navRect.bottom),
      navHeight: Math.round(navRect.height),
      colBottom: Math.round(colRect.bottom),
      scrollBottom: Math.round(scrollRect.bottom),
      viewportH: window.innerHeight,
      visible:
        navRect.height > 20 &&
        navRect.bottom <= window.innerHeight + 1 &&
        navRect.top < window.innerHeight,
      pinnedAtColumnFoot: Math.abs(navRect.bottom - colRect.bottom) <= 2,
      belowScroll: navRect.top >= scrollRect.bottom - 1,
      display: getComputedStyle(nav).display,
    };
  });
}

async function shot(page, id) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(200);
  const file = path.join(OUT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  console.log(JSON.stringify({ id, sha256: sha.slice(0, 12), file }));
  return file;
}

async function main() {
  if (!fs.existsSync(storagePath)) {
    throw new Error(`AUTH_STORAGE_MISSING ${storagePath}`);
  }
  await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const ctx = await browser.newContext({
      storageState: storagePath,
      viewport: { width: 1440, height: 1024 },
    });
    const page = await ctx.newPage();
    await openNamedProject(page);
    await openProjectWorkspaceView(page, "conversation");
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.waitForSelector('[data-testid="project-context-shortcuts"]', {
      timeout: 30000,
    });

    const desktop = await measureFooter(page);
    console.log(JSON.stringify({ phase: "1440", ...desktop }));
    if (!desktop.ok) throw new Error("FOOTER_NODES_MISSING");
    if (desktop.missing.length) {
      throw new Error(`FOOTER_LABELS_MISSING ${desktop.missing.join(",")}`);
    }
    if (desktop.insideScroll) throw new Error("FOOTER_INSIDE_SCROLL_SHEET");
    if (desktop.dup !== 1) throw new Error(`FOOTER_DUP_${desktop.dup}`);
    if (!desktop.visible) throw new Error("FOOTER_NOT_IN_VIEWPORT");
    if (!desktop.pinnedAtColumnFoot) {
      throw new Error(
        `FOOTER_NOT_PINNED_TO_COLUMN_FOOT navBottom=${desktop.navBottom} colBottom=${desktop.colBottom}`,
      );
    }
    if (!desktop.belowScroll) {
      throw new Error(
        `FOOTER_NOT_BELOW_SCROLL navTop=${desktop.navTop} scrollBottom=${desktop.scrollBottom}`,
      );
    }
    await shot(page, "workspace-1440");
    await shot(page, "workspace-1440-context-footer");

    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(250);
    const compact = await measureFooter(page);
    console.log(JSON.stringify({ phase: "1024", ...compact }));
    if (!compact.ok || !compact.visible || compact.missing.length) {
      throw new Error("COMPACT_FOOTER_REGRESSION");
    }
    if (compact.insideScroll || compact.dup !== 1) {
      throw new Error("COMPACT_FOOTER_STRUCTURE_REGRESSION");
    }
    await shot(page, "workspace-1024");

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(250);
    const mobileDup = await page.evaluate(() => {
      return document.querySelectorAll(
        '[data-testid="project-context-shortcuts"]',
      ).length;
    });
    console.log(JSON.stringify({ phase: "390", shortcutNavCount: mobileDup }));
    if (mobileDup > 1) throw new Error("MOBILE_DUPLICATE_SHORTCUTS");
    await shot(page, "workspace-390");

    await ctx.close();
    console.log(
      JSON.stringify({ DONE: true, verdict: "CONTEXT_FOOTER_SHORTCUTS_OK" }),
    );
  } finally {
    await browser.close();
    await stopServer();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
