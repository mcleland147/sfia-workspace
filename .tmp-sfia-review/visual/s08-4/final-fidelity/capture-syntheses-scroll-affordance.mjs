/**
 * S08-4D — Synthèses detail scroll-affordance proof (top + verified end).
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
const PORT = process.env.S08_4_CAPTURE_PORT?.trim() || "3024";
const BASE = `http://localhost:${PORT}`;

const require = createRequire(path.join(APP, "package.json"));
const { chromium } = require("playwright");
const storagePath = path.join(
  ROOT,
  ".tmp-sfia-review/auth/studio-storage-state.json",
);
const snap = JSON.parse(fs.readFileSync(SNAPSHOTS_INDEX, "utf8")).snapshots[
  "workspace-rich"
];

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

async function measure(page) {
  return page.evaluate(() => {
    const scroll = document.querySelector(
      '[data-testid="project-syntheses-detail-scroll"]',
    );
    const thumb = document.querySelector(
      '[data-testid="project-syntheses-scroll-indicator"] > div',
    );
    if (!(scroll instanceof HTMLElement)) return { ok: false };
    return {
      ok: true,
      scrollTop: scroll.scrollTop,
      scrollHeight: scroll.scrollHeight,
      clientHeight: scroll.clientHeight,
      canScroll: scroll.scrollHeight > scroll.clientHeight + 8,
      thumbTop:
        thumb instanceof HTMLElement
          ? Math.round(thumb.getBoundingClientRect().top)
          : null,
      thumbTransform:
        thumb instanceof HTMLElement ? thumb.style.transform : null,
      indicator: !!document.querySelector(
        '[data-testid="project-syntheses-scroll-indicator"]',
      ),
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
  console.log(JSON.stringify({ id, sha256: sha.slice(0, 12) }));
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
    await openProjectWorkspaceView(page, "syntheses");
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.waitForSelector(
      '[data-testid="project-syntheses-section-verified"]',
      { timeout: 30000 },
    );
    await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-syntheses-detail-scroll"]',
      );
      if (el) el.scrollTop = 0;
    });
    await page.waitForSelector(
      '[data-testid="project-syntheses-scroll-indicator"]',
      { timeout: 5000 },
    );
    const top = await measure(page);
    console.log(JSON.stringify({ phase: "top", ...top }));
    if (!top.ok || !top.canScroll || !top.indicator) {
      throw new Error(`TOP_AFFORDANCE_FAIL ${JSON.stringify(top)}`);
    }
    await shot(page, "syntheses-1440");
    await shot(page, "syntheses-scroll-top-1440");

    await page.evaluate(() => {
      const scroll = document.querySelector(
        '[data-testid="project-syntheses-detail-scroll"]',
      );
      const card = document.querySelector(
        '[data-testid="project-syntheses-section-verified"]',
      );
      if (scroll instanceof HTMLElement) {
        if (card instanceof HTMLElement) {
          card.scrollIntoView({ block: "end", inline: "nearest" });
        }
        scroll.scrollTop = Math.max(
          0,
          scroll.scrollHeight - scroll.clientHeight,
        );
      }
    });
    await page.waitForFunction(() => {
      const scroll = document.querySelector(
        '[data-testid="project-syntheses-detail-scroll"]',
      );
      const thumb = document.querySelector(
        '[data-testid="project-syntheses-scroll-indicator"] > div',
      );
      if (!(scroll instanceof HTMLElement) || !(thumb instanceof HTMLElement)) {
        return false;
      }
      return (
        scroll.scrollTop > 20 &&
        /translateY\(([1-9]\d*)px\)/.test(thumb.style.transform || "")
      );
    }, { timeout: 5000 });
    const end = await measure(page);
    console.log(JSON.stringify({ phase: "end", ...end }));
    if (!end.ok || end.scrollTop <= top.scrollTop) {
      throw new Error("SCROLL_DID_NOT_MOVE");
    }
    if (end.thumbTop == null || top.thumbTop == null || end.thumbTop <= top.thumbTop) {
      throw new Error("THUMB_DID_NOT_MOVE");
    }
    await shot(page, "syntheses-verified-1440");
    await shot(page, "syntheses-scroll-end-1440");

    // Compact / mobile regression smoke (no nested indicator required on 390).
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-syntheses-detail-scroll"]',
      );
      if (el) el.scrollTop = 0;
    });
    await shot(page, "syntheses-1024");
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(200);
    await shot(page, "syntheses-390");

    await ctx.close();
    console.log(JSON.stringify({ DONE: true, verdict: "SCROLL_AFFORDANCE_OK" }));
  } finally {
    await browser.close();
    await stopServer();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
