/**
 * S08-4D — Workspace 1024 context-rail scroll/closure proof.
 * Production `next start` only. Captures top + scrolled-end states.
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
const PORT = process.env.S08_4_CAPTURE_PORT?.trim() || "3021";
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
  await page.setViewportSize({ width: 1024, height: 768 });
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

async function measureContextScroll(page) {
  return page.evaluate(() => {
    const scroll = document.querySelector(
      '[data-testid="project-context-scroll"]',
    );
    const col = document.querySelector('[data-testid="project-lps-column"]');
    if (!(scroll instanceof HTMLElement) || !(col instanceof HTMLElement)) {
      return { ok: false };
    }
    const cs = getComputedStyle(scroll);
    const cc = getComputedStyle(col);
    return {
      ok: true,
      scrollTop: scroll.scrollTop,
      scrollHeight: scroll.scrollHeight,
      clientHeight: scroll.clientHeight,
      overflowY: cs.overflowY,
      colHeight: Math.round(col.getBoundingClientRect().height),
      colBottom: Math.round(col.getBoundingClientRect().bottom),
      viewportH: window.innerHeight,
      canScroll: scroll.scrollHeight > scroll.clientHeight + 8,
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
  const sha = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
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
      viewport: { width: 1024, height: 768 },
    });
    const page = await ctx.newPage();
    await openNamedProject(page);
    // Helper forces 1440×1024 for nav reliability; restore compact viewport after.
    await openProjectWorkspaceView(page, "conversation");
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForSelector('[data-testid="project-context-scroll"]', {
      timeout: 30000,
    });

    // Top state
    await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-context-scroll"]',
      );
      if (el) el.scrollTop = 0;
    });
    const topMetrics = await measureContextScroll(page);
    console.log(JSON.stringify({ phase: "top", ...topMetrics }));
    if (!topMetrics.ok) throw new Error("CONTEXT_SCROLL_MISSING");
    if (!topMetrics.canScroll) {
      throw new Error(
        `CONTEXT_NOT_SCROLLABLE scrollHeight=${topMetrics.scrollHeight} clientHeight=${topMetrics.clientHeight}`,
      );
    }
    if (topMetrics.colBottom > topMetrics.viewportH + 2) {
      throw new Error(
        `CONTEXT_COLUMN_EXTENDS_PAST_VIEWPORT colBottom=${topMetrics.colBottom} viewportH=${topMetrics.viewportH}`,
      );
    }
    await page.waitForSelector(
      '[data-testid="project-context-scroll-indicator"]',
      { timeout: 5000 },
    );
    const topThumb = await page.evaluate(() => {
      const thumb = document.querySelector(
        '[data-testid="project-context-scroll-indicator"] > div',
      );
      if (!(thumb instanceof HTMLElement)) return null;
      return {
        top: Math.round(thumb.getBoundingClientRect().top),
        height: Math.round(thumb.getBoundingClientRect().height),
      };
    });
    console.log(JSON.stringify({ phase: "top-thumb", topThumb }));
    await shot(page, "workspace-1024");
    await shot(page, "workspace-1024-context-top");

    // End / scrolled state
    await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-context-scroll"]',
      );
      if (el instanceof HTMLElement) {
        el.scrollTop = el.scrollHeight - el.clientHeight;
      }
    });
    await page.waitForFunction(() => {
      const el = document.querySelector(
        '[data-testid="project-context-scroll"]',
      );
      const thumb = document.querySelector(
        '[data-testid="project-context-scroll-indicator"] > div',
      );
      if (!(el instanceof HTMLElement) || !(thumb instanceof HTMLElement)) {
        return false;
      }
      return el.scrollTop > 20 && /translateY\(([1-9]\d*)px\)/.test(
        thumb.style.transform || "",
      );
    }, { timeout: 5000 });
    const endMetrics = await measureContextScroll(page);
    console.log(JSON.stringify({ phase: "end", ...endMetrics }));
    if (endMetrics.scrollTop <= topMetrics.scrollTop) {
      throw new Error("CONTEXT_SCROLL_DID_NOT_MOVE");
    }
    const endThumb = await page.evaluate(() => {
      const thumb = document.querySelector(
        '[data-testid="project-context-scroll-indicator"] > div',
      );
      if (!(thumb instanceof HTMLElement)) return null;
      return {
        top: Math.round(thumb.getBoundingClientRect().top),
        height: Math.round(thumb.getBoundingClientRect().height),
        transform: thumb.style.transform,
      };
    });
    console.log(JSON.stringify({ phase: "end-thumb", endThumb }));
    if (
      !topThumb ||
      !endThumb ||
      endThumb.top <= topThumb.top
    ) {
      throw new Error("CONTEXT_SCROLL_THUMB_DID_NOT_MOVE");
    }
    await shot(page, "workspace-1024-context-end");

    // Quick regression captures (nav helper forces 1440 — restore after).
    await openProjectWorkspaceView(page, "conversation");
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-context-scroll"]',
      );
      if (el) el.scrollTop = 0;
    });
    await shot(page, "workspace-1440");

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(250);
    await shot(page, "workspace-390");

    await ctx.close();
    console.log(JSON.stringify({ DONE: true, verdict: "CONTEXT_SCROLL_OK" }));
  } finally {
    await browser.close();
    await stopServer();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
