/**
 * S08-4D — Figma typography family alignment proof (Geist).
 * Production `next start` only. Verifies computed font + priority captures.
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
const PORT = process.env.S08_4_CAPTURE_PORT?.trim() || "3023";
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

async function waitReady(attempts = 80) {
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

async function fontProbe(page) {
  return page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    const body = getComputedStyle(document.body).fontFamily;
    const root = getComputedStyle(document.documentElement);
    const cssVar = root.getPropertyValue("--font-geist").trim();
    const sfia = root.getPropertyValue("--sfia-font").trim();
    const pm6 = root.getPropertyValue("--pm6-font").trim();
    const sample =
      document.querySelector('[data-testid="project-title"]') ||
      document.querySelector("h1") ||
      document.body;
    const sampleFamily = getComputedStyle(sample).fontFamily;
    const loaded = [...document.fonts].filter((f) =>
      /geist/i.test(f.family),
    ).length;
    return {
      body,
      sampleFamily,
      cssVar,
      sfia,
      pm6,
      loadedGeistFaces: loaded,
      htmlClass: document.documentElement.className,
    };
  });
}

async function shot(page, id) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(250);
  const file = path.join(OUT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  console.log(JSON.stringify({ id, sha256: sha.slice(0, 12), file }));
  return file;
}

async function assertFooterVisible(page) {
  const m = await page.evaluate(() => {
    const nav = document.querySelector(
      '[data-testid="project-context-shortcuts"]',
    );
    if (!(nav instanceof HTMLElement)) return { ok: false };
    const r = nav.getBoundingClientRect();
    return {
      ok: true,
      visible: r.height > 20 && r.bottom <= window.innerHeight + 1,
      text: nav.textContent ?? "",
    };
  });
  if (!m.ok || !m.visible) throw new Error("FOOTER_SHORTCUTS_REGRESSION");
  if (!/Journal du cycle/.test(m.text) || !/Historique/.test(m.text)) {
    throw new Error("FOOTER_LABELS_REGRESSION");
  }
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

    // Projects list
    await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('[data-testid="studio-projects-list"]', {
      timeout: 60000,
    });
    const projectsFont = await fontProbe(page);
    console.log(JSON.stringify({ phase: "projects-font", ...projectsFont }));
    if (!/geist/i.test(projectsFont.body) && !/geist/i.test(projectsFont.cssVar)) {
      throw new Error(`GEIST_NOT_APPLIED body=${projectsFont.body} var=${projectsFont.cssVar}`);
    }
    if (!/geist/i.test(projectsFont.sfia) && !/geist/i.test(projectsFont.pm6)) {
      throw new Error("GEIST_TOKENS_MISSING");
    }
    await shot(page, "projects-1440");

    await openNamedProject(page);
    await openProjectWorkspaceView(page, "conversation");
    await page.setViewportSize({ width: 1440, height: 1024 });
    const wsFont = await fontProbe(page);
    console.log(JSON.stringify({ phase: "workspace-font", ...wsFont }));
    if (!/geist/i.test(wsFont.sampleFamily) && !/geist/i.test(wsFont.body)) {
      throw new Error(`WORKSPACE_NOT_GEIST ${wsFont.sampleFamily}`);
    }
    await assertFooterVisible(page);
    await shot(page, "workspace-1440");

    for (const view of ["overview", "journal", "history", "syntheses"]) {
      await openProjectWorkspaceView(page, view);
      await page.setViewportSize({ width: 1440, height: 1024 });
      await page.waitForTimeout(300);
      const id =
        view === "overview"
          ? "apercu-1440"
          : view === "history"
            ? "historique-1440"
            : view === "journal"
              ? "journal-1440"
              : "syntheses-1440";
      await shot(page, id);
    }

    // New project
    await page.goto(`${BASE}/studio/projects/new`, {
      waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(400);
    await shot(page, "new-project-1440");

    // Compact 1024 workspace
    await openNamedProject(page);
    await openProjectWorkspaceView(page, "conversation");
    await page.setViewportSize({ width: 1024, height: 768 });
    await assertFooterVisible(page);
    const scrollOk = await page.evaluate(() => {
      const el = document.querySelector(
        '[data-testid="project-context-scroll"]',
      );
      if (!(el instanceof HTMLElement)) return false;
      return el.scrollHeight > el.clientHeight + 4;
    });
    console.log(JSON.stringify({ phase: "1024", scrollOk }));
    await shot(page, "workspace-1024");

    // Mobile 390
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    await shot(page, "workspace-390");

    await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(300);
    const authFont = await fontProbe(page);
    console.log(JSON.stringify({ phase: "auth-font", ...authFont }));
    if (!/geist/i.test(authFont.body) && !/geist/i.test(authFont.cssVar)) {
      throw new Error("AUTH_NOT_GEIST");
    }
    await shot(page, "auth-390");
    await shot(page, "login-390");

    await ctx.close();
    console.log(
      JSON.stringify({ DONE: true, verdict: "FIGMA_TYPOGRAPHY_GEIST_OK" }),
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
