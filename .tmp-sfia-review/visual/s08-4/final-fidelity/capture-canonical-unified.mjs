/**
 * S08-4 — canonical visual snapshot unification capture.
 * Switches Product Simplification QA snapshots under production `next start`.
 * Fail-closed pairing (identityAligned=true required).
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { openProjectWorkspaceView } from "../../../../projects/sfia-studio/app/e2e/support/projectWorkspaceNavigation.mjs";
import { evaluateVisualPair } from "../../../../projects/sfia-studio/app/e2e/support/visualPairingContract.mjs";
import { observeVisualPairing } from "../../../../projects/sfia-studio/app/e2e/support/observeVisualPairing.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../../..");
const APP = path.join(ROOT, "projects/sfia-studio/app");
const OUT = path.join(__dirname, "runtime");
const STATES = path.join(__dirname, "states");
const SNAPSHOTS_INDEX = path.join(STATES, "snapshots/index.json");
const STATE_MANIFEST = path.join(__dirname, "state-manifest.json");
const PAIRING_REPORT = path.join(__dirname, "pairing-report.json");
const PORT = process.env.S08_4_CAPTURE_PORT?.trim() || "3020";
const BASE = `http://localhost:${PORT}`;

const require = createRequire(path.join(APP, "package.json"));
const { chromium } = require("playwright");

const storagePath = path.join(
  ROOT,
  ".tmp-sfia-review/auth/studio-storage-state.json",
);
const stateManifest = JSON.parse(fs.readFileSync(STATE_MANIFEST, "utf8"));
const snapshotsIndex = JSON.parse(fs.readFileSync(SNAPSHOTS_INDEX, "utf8"));
const multiProductDb = path.join(STATES, "canonical-product.sqlite");
const multiSessionDb = path.join(STATES, "companion-nora-session.sqlite");

fs.mkdirSync(OUT, { recursive: true });
const pairingResults = [];
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
  await sleep(400);
}

async function startServer({ productDb, sessionDb }) {
  await stopServer();
  const env = {
    ...process.env,
    SFIA_STUDIO_PRODUCT_DB_PATH: productDb,
    OPS1_CONVERSATION_PROVIDER: "fake",
    BETTER_AUTH_URL: BASE,
  };
  if (sessionDb) {
    env.SFIA_STUDIO_NORA_SESSION_DB_PATH = sessionDb;
  }
  serverProc = spawn(
    "npx",
    ["next", "start", "--port", PORT, "--hostname", "localhost"],
    {
      cwd: APP,
      env,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const ready = await waitReady();
  if (!ready) {
    await stopServer();
    throw new Error(`SERVER_NOT_READY snapshotDb=${productDb}`);
  }
}

function resolvePair(captureId) {
  const raw = stateManifest.pairs.find((p) => p.captureId === captureId);
  if (!raw) return null;
  return {
    id: raw.id,
    figma: raw.figma,
    runtime: {
      fixtureId: raw.runtime.fixtureId,
      projectId: raw.runtime.projectId ?? null,
      expectedProjectName: raw.runtime.expectedProjectName,
      route: raw.runtime.route,
      view: raw.runtime.view,
    },
    state: raw.state,
    identityAligned: raw.identityAligned,
    contentAligned: raw.contentAligned,
    content: raw.content,
    finalFidelity: raw.finalFidelity,
  };
}

async function stabilize(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.addStyleTag({
    content: `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}`,
  });
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function shot(page, id, viewport) {
  await page.setViewportSize(viewport);
  await stabilize(page);
  await page.waitForTimeout(200);
  const pairRecord = resolvePair(id);
  if (!pairRecord) {
    pairingResults.push({
      captureId: id,
      pairing: "UNMANIFESTED",
      ts: new Date().toISOString(),
    });
    const file = path.join(OUT, `${id}.png`);
    await page.screenshot({ path: file, fullPage: false });
    return file;
  }
  const obs = await observeVisualPairing(page, viewport);
  const result = evaluateVisualPair(pairRecord, obs);
  pairingResults.push({
    captureId: id,
    pairId: pairRecord.id,
    figmaNodeId: pairRecord.figma.nodeId,
    fixtureId: pairRecord.runtime.fixtureId,
    identityAligned: pairRecord.identityAligned === true,
    contentAligned: pairRecord.contentAligned === true,
    pairing: result.pairing,
    alignment: result.alignment ?? null,
    reason: result.ok ? null : result.reason,
    observation: {
      url: obs.url.replace(/prj%3A[^/&]+/gi, "prj%3AREDACTED"),
      projectName: obs.projectName,
      activeView: obs.activeView,
      present: obs.present,
      forbiddenPresent: obs.forbiddenPresent,
      content: obs.content ?? null,
    },
    ts: new Date().toISOString(),
  });
  fs.writeFileSync(
    PAIRING_REPORT,
    JSON.stringify({ ts: new Date().toISOString(), results: pairingResults }, null, 2),
  );
  if (!result.ok) {
    console.log(JSON.stringify({ error: "HARNESS_PAIRING_MISMATCH", captureId: id, reason: result.reason, content: obs.content }));
    return null;
  }
  const file = path.join(OUT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha256 = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  console.log(JSON.stringify({
    id,
    pairing: "PASS",
    identityAligned: true,
    contentAligned: true,
    sha256: sha256.slice(0, 12),
  }));
  return file;
}

async function waitProjectsReady(page) {
  await page.waitForFunction(() => {
    const loading = document.querySelector('[data-testid="studio-projects-loading"]');
    const list = document.querySelector('[data-testid="studio-projects-list"]');
    const empty = document.querySelector('[data-testid="studio-projects-empty"]');
    return !loading && (!!list || !!empty);
  }, { timeout: 60000 });
}

async function openNamedProject(page, title) {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded" });
  await waitProjectsReady(page);
  const open = page
    .getByTestId("studio-projects-open")
    .filter({ hasText: new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) })
    .first();
  await open.waitFor({ state: "visible", timeout: 20000 });
  await open.click();
  await page.waitForSelector('[data-testid="project-workspace-layout"]', {
    timeout: 60000,
  });
}

async function main() {
  if (!fs.existsSync(SNAPSHOTS_INDEX)) {
    throw new Error("SNAPSHOTS_MISSING — run S08_4_FIDELITY_SEED=1 seed first");
  }
  const browser = await chromium.launch({ headless: true });
  const contextOpts = { deviceScaleFactor: 1, reducedMotion: "reduce" };
  if (fs.existsSync(storagePath) && fs.statSync(storagePath).size > 0) {
    contextOpts.storageState = storagePath;
  }

  try {
    // Auth (no product DB dependency beyond any running server — use multi)
    await startServer({
      productDb: multiProductDb,
      sessionDb: multiSessionDb,
    });
    {
      const authCtx = await browser.newContext({
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
      });
      const authPage = await authCtx.newPage();
      await authPage.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
      await shot(authPage, "auth-390", { width: 390, height: 844 });
      await authCtx.close();
    }

    // Projects + New Project (multi-project density DB)
    {
      const ctx = await browser.newContext(contextOpts);
      const page = await ctx.newPage();
      await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded" });
      await waitProjectsReady(page);
      await shot(page, "projects-1440", { width: 1440, height: 1024 });
      await shot(page, "projects-1024", { width: 1024, height: 768 });

      await page.goto(`${BASE}/studio/projects/new`, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForSelector('[data-testid="create-project-form"]', {
        timeout: 30000,
      });
      async function fillComposer(text) {
        const input = page.getByTestId("new-project-input");
        await input.click();
        await input.fill("");
        await input.pressSequentially(text, { delay: 2 });
        await page.waitForFunction(() => {
          const btn = document.querySelector('[data-testid="new-project-send"]');
          return btn && !btn.disabled;
        }, { timeout: 5000 });
      }
      await fillComposer(
        "Je veux créer une nouvelle version de notre espace projet pour simplifier la manière dont les équipes comprennent l’avancement et travaillent avec Nora.",
      );
      await page.getByTestId("new-project-send").click();
      // Prefer proposed-name path (P3 67:39). Fall back to explicit name ask.
      const phase = await Promise.race([
        page
          .waitForSelector('[data-collect-phase="OPTIONAL_CONTEXT"]', {
            timeout: 10000,
          })
          .then(() => "OPTIONAL_CONTEXT"),
        page
          .waitForSelector('[data-collect-phase="NAME_REQUIRED"]', {
            timeout: 10000,
          })
          .then(() => "NAME_REQUIRED"),
      ]);
      if (phase === "NAME_REQUIRED") {
        await fillComposer("Refonte de l’espace projet");
        await page.getByTestId("new-project-send").click();
        await page.waitForSelector('[data-collect-phase="OPTIONAL_CONTEXT"]', {
          timeout: 10000,
        });
      }
      await page.getByTestId("new-project-clarification").waitFor({
        state: "visible",
        timeout: 10000,
      });
      await shot(page, "new-project-1440", { width: 1440, height: 1024 });
      await shot(page, "new-project-390", { width: 390, height: 844 });
      await ctx.close();
    }

    // Workspace-rich family (Product Simplification)
    {
      const snap = snapshotsIndex.snapshots["workspace-rich"];
      await startServer({
        productDb: snap.productDb,
        sessionDb: snap.sessionDb,
      });
      const ctx = await browser.newContext(contextOpts);
      const page = await ctx.newPage();
      await openNamedProject(page, "Product Simplification");
      const views = [
        ["conversation", "workspace-1440", { width: 1440, height: 1024 }],
        ["conversation", "workspace-1024", { width: 1024, height: 768 }],
        ["conversation", "workspace-390", { width: 390, height: 844 }],
        ["overview", "apercu-1440", { width: 1440, height: 1024 }],
        ["overview", "apercu-390", { width: 390, height: 844 }],
        ["journal", "journal-1440", { width: 1440, height: 1024 }],
        ["journal", "journal-390", { width: 390, height: 844 }],
        ["history", "historique-1440", { width: 1440, height: 1024 }],
        ["history", "historique-1024", { width: 1024, height: 768 }],
        ["history", "historique-390", { width: 390, height: 844 }],
        ["syntheses", "syntheses-1440", { width: 1440, height: 1024 }],
        ["syntheses", "syntheses-1024", { width: 1024, height: 768 }],
        ["syntheses", "syntheses-390", { width: 390, height: 844 }],
        ["execution", "execution-390", { width: 390, height: 844 }],
      ];
      for (const [view, captureId, viewport] of views) {
        await openProjectWorkspaceView(page, view);
        if (view === "conversation") {
          // Wait for durable transcript + P3 recommendation chrome before capture.
          await page.waitForSelector(
            '[data-testid="project-assistant-turn-user"]',
            { timeout: 30000 },
          );
          await page
            .waitForSelector('[data-testid="project-auto-resume-hint"]', {
              timeout: 8000,
            })
            .catch(() => null);
          await page
            .waitForSelector('[data-testid="durable-recommendation-card"]', {
              timeout: 15000,
            })
            .catch(() => null);
        }
        if (view === "syntheses") {
          await page.waitForFunction(() => {
            const loading = document.querySelector(
              '[data-testid="project-syntheses-loading"]',
            );
            if (loading) return false;
            return (
              !!document.querySelector('[data-testid="project-syntheses-item"]') ||
              !!document.querySelector('[data-testid="project-syntheses-empty"]')
            );
          }, { timeout: 30000 });
          // Top state — ensure detail scroll is at rest (164:3).
          await page.evaluate(() => {
            const el = document.querySelector(
              '[data-testid="project-syntheses-detail-scroll"]',
            );
            if (el) el.scrollTop = 0;
          });
        }
        await shot(page, captureId, viewport);
      }

      // Lower verified scroll state (Figma 316:2) — same surface, scrolled.
      await openProjectWorkspaceView(page, "syntheses");
      await page.waitForSelector(
        '[data-testid="project-syntheses-section-verified"]',
        { timeout: 30000 },
      );
      await page.waitForFunction(() => {
        const scroll = document.querySelector(
          '[data-testid="project-syntheses-detail-scroll"]',
        );
        return (
          scroll instanceof HTMLElement &&
          scroll.scrollHeight > scroll.clientHeight + 40
        );
      }, { timeout: 10000 });
      await page.evaluate(() => {
        const scroll = document.querySelector(
          '[data-testid="project-syntheses-detail-scroll"]',
        );
        const card = document.querySelector(
          '[data-testid="project-syntheses-section-verified"]',
        );
        if (!(scroll instanceof HTMLElement)) return;
        if (card instanceof HTMLElement) {
          card.scrollIntoView({ block: "end", inline: "nearest" });
        }
        scroll.scrollTop = Math.max(
          0,
          scroll.scrollHeight - scroll.clientHeight,
        );
      });
      await page.waitForFunction(() => {
        const scroll = document.querySelector(
          '[data-testid="project-syntheses-detail-scroll"]',
        );
        const card = document.querySelector(
          '[data-testid="project-syntheses-section-verified"]',
        );
        if (!(scroll instanceof HTMLElement) || !(card instanceof HTMLElement)) {
          return false;
        }
        if (scroll.scrollTop < 40) return false;
        const sr = scroll.getBoundingClientRect();
        const cr = card.getBoundingClientRect();
        return cr.bottom <= sr.bottom + 4 && cr.top < sr.bottom;
      }, { timeout: 10000 });
      await shot(page, "syntheses-verified-1440", {
        width: 1440,
        height: 1024,
      });
      // Projects list on compact/mobile from the same populated DB.
      await page.goto(`${BASE}/studio`, { waitUntil: "domcontentloaded" });
      await waitProjectsReady(page);
      await shot(page, "projects-390", { width: 390, height: 844 });
      await ctx.close();
    }

    // Decision
    {
      const snap = snapshotsIndex.snapshots["decision-pending"];
      await startServer({ productDb: snap.productDb });
      const ctx = await browser.newContext(contextOpts);
      const page = await ctx.newPage();
      await openNamedProject(page, "Product Simplification");
      await openProjectWorkspaceView(page, "conversation");
      await page
        .getByTestId("governed-decision-card")
        .waitFor({ state: "visible", timeout: 30000 });
      await page.getByTestId("governed-decision-card").evaluate((el) => {
        el.scrollIntoView({ block: "center", inline: "nearest" });
      });
      await shot(page, "decision-390", { width: 390, height: 844 });
      await ctx.close();
    }

    // Confirmation
    {
      const snap = snapshotsIndex.snapshots["confirmation-required"];
      await startServer({ productDb: snap.productDb });
      const ctx = await browser.newContext(contextOpts);
      const page = await ctx.newPage();
      await openNamedProject(page, "Product Simplification");
      await openProjectWorkspaceView(page, "conversation");
      await page
        .getByTestId("governed-confirmation-card")
        .waitFor({ state: "visible", timeout: 30000 });
      await page.getByTestId("governed-confirmation-card").evaluate((el) => {
        el.scrollIntoView({ block: "center", inline: "nearest" });
      });
      await shot(page, "confirmation-390", { width: 390, height: 844 });
      await ctx.close();
    }
  } finally {
    await browser.close();
    await stopServer();
    fs.writeFileSync(
      PAIRING_REPORT,
      JSON.stringify(
        { ts: new Date().toISOString(), results: pairingResults },
        null,
        2,
      ),
    );
  }

  const failed = pairingResults.filter((r) => r.pairing === "FAIL");
  const pass = pairingResults.filter((r) => r.pairing === "PASS");
  console.log(
    JSON.stringify({
      DONE: true,
      pairingPass: pass.length,
      pairingFail: failed.length,
      identityAlignedPass: pass.filter((r) => r.identityAligned).length,
    }),
  );
  if (failed.length > 0) process.exitCode = 5;
}

main().catch(async (e) => {
  console.error(e);
  await stopServer();
  process.exit(1);
});
