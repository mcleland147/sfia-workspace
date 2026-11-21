/**
 * Cycle 8 final — measure + capture all reachable Ensemble 07 frames @ 1680×970.
 */
import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { spawnSync } from "child_process";

const ROOT = resolve(process.cwd(), "../../..");
const OUT = resolve(
  ROOT,
  process.env.E07_MEASURE_OUT?.replace(/^.*\.tmp-sfia-review\//, ".tmp-sfia-review/") ||
    ".tmp-sfia-review/ensemble07-page10-experiment",
);
mkdirSync(resolve(OUT, "runtime"), { recursive: true });
const urlsPath = "/tmp/sfia-e07-shot-urls.json";

function sha12(buf: Buffer) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 12);
}

async function measure(page: import("@playwright/test").Page, selector: string) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return {
      selector: sel,
      x: Math.round(r.x),
      y: Math.round(r.y),
      width: Math.round(r.width),
      height: Math.round(r.height),
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
    };
  }, selector);
}

async function shot(page: import("@playwright/test").Page, name: string) {
  const path = resolve(OUT, "runtime", name);
  await page.waitForTimeout(500);
  await page.screenshot({ path, fullPage: false });
  return { path, sha: sha12(readFileSync(path)) };
}

async function main() {
  if (!existsSync(urlsPath)) {
    const r = spawnSync("npx", ["tsx", "scripts/e07-seed-screenshot.mts"], {
      cwd: process.cwd(),
      env: process.env,
      encoding: "utf8",
      timeout: 180_000,
    });
    if (r.status !== 0) {
      console.error(r.stderr);
      process.exit(1);
    }
  }
  const urls = JSON.parse(readFileSync(urlsPath, "utf8")) as {
    urls: Record<string, string>;
  };

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1680, height: 970 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/login", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot: "a" }),
      credentials: "include",
    });
  });

  const rows: Array<Record<string, unknown>> = [];

  async function visit(
    ref: string,
    url: string | undefined,
    waitSel: string,
    critical: string[],
  ) {
    if (!url) {
      rows.push({ ref, verdict: "NOT PROVEN", reason: "no seed URL" });
      return;
    }
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
      await page.waitForSelector(waitSel, { timeout: 20_000 });
      const s = await shot(page, `${ref}-runtime.png`);
      const measures: Record<string, unknown> = {};
      for (const sel of critical) {
        measures[sel] = await measure(page, sel);
      }
      rows.push({ ref, verdict: "MEASURED", shot: s.sha, measures });
    } catch (e) {
      rows.push({
        ref,
        verdict: "NOT PROVEN",
        reason: e instanceof Error ? e.message : String(e),
      });
    }
  }

  await visit("09.06", urls.urls.projet06, '[data-testid="project-overview-no-cycle"]', [
    '[data-testid="project-overview-cycle-card"]',
    '[data-testid="project-activity-subjects"]',
    '[data-testid="project-overview-hero-sep"]',
  ]);
  await visit("09.01", urls.urls.projet01, '[data-testid="project-overview-cycle-card"]', [
    '[data-testid="project-overview-cycle-card"]',
    '[data-testid="project-activity-subjects"]',
    '[data-testid="project-overview-cycle-objective"]',
  ]);
  await visit("09.11", urls.urls.traj11, '[data-testid="trajectory-proposal-sequential"]', [
    '[data-testid="trajectory-proposal-sequential"]',
    '[data-testid="trajectory-forecast-step-1"]',
    '[data-testid="trajectory-proposal-cta"]',
    '[data-testid="trajectory-hero-sep"]',
  ]);
  await visit("09.10", urls.urls.traj10, '[data-testid="trajectory-board"]', [
    '[data-testid="trajectory-qualification-progress"]',
    '[data-testid="trajectory-analyzing"]',
    '[data-testid="trajectory-hero"]',
  ]);
  await visit("09.07", urls.urls.traj07, '[data-testid="trajectory-board"]', [
    '[data-testid="trajectory-hero"]',
  ]);
  await visit("09.09", urls.urls.traj09, '[data-testid="trajectory-board"]', [
    '[data-testid="trajectory-active-cycle"]',
    '[data-testid="trajectory-cycle-actif-panel"]',
    '[data-testid="trajectory-acquis"]',
    '[data-testid="trajectory-a-clarifier"]',
    '[data-testid="trajectory-cycle-knowledge-row"]',
  ]);
  await visit("09.02", urls.urls.traj02, '[data-testid="trajectory-board"]', [
    '[data-testid="trajectory-roadmap-cards"]',
    '[data-testid="trajectory-active-cycle"]',
    '[data-testid="trajectory-acquis"]',
    '[data-testid="trajectory-a-clarifier"]',
    '[data-testid="trajectory-cycle-knowledge-row"]',
  ]);
  await visit("09.08", urls.urls.traj08, '[data-testid="trajectory-board"]', [
    '[data-testid="trajectory-between-cycles"]',
  ]);

  // 09.05 from traj02
  try {
    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    await page.click('[data-testid="trajectory-open-cki"]');
    await page.waitForSelector('[data-testid="trajectory-cki-methode"]');
    const s = await shot(page, "09.05-runtime.png");
    rows.push({
      ref: "09.05",
      verdict: "MEASURED",
      shot: s.sha,
      ckiTitle: await page.locator('[data-testid="trajectory-cki-id"]').textContent(),
      ckiId: await page.locator('[data-testid="trajectory-cki-id"]').getAttribute("data-cki-id"),
      measures: {
        main: await measure(page, '[data-testid="trajectory-cki-main"]'),
        method: await measure(page, '[data-testid="trajectory-method-side"]'),
        heroSep: await measure(page, ".e07-section-rule"),
      },
    });
  } catch (e) {
    rows.push({
      ref: "09.05",
      verdict: "NOT PROVEN",
      reason: e instanceof Error ? e.message : String(e),
    });
  }

  // 09.04 future step from traj11
  try {
    await page.goto(urls.urls.traj11, { waitUntil: "networkidle" });
    const btn = page.locator('[data-testid="trajectory-forecast-step-2"]');
    if (await btn.count()) {
      await btn.click();
      await page.waitForSelector('[data-testid="trajectory-etape-future"]');
      const s = await shot(page, "09.04-runtime.png");
      rows.push({
        ref: "09.04",
        verdict: "MEASURED",
        shot: s.sha,
        measures: {
          summary: await measure(page, '[data-testid="trajectory-future-summary"]'),
          action: await measure(page, '[data-testid="trajectory-future-action"]'),
        },
      });
    } else {
      rows.push({ ref: "09.04", verdict: "NOT PROVEN", reason: "no forecast step 2" });
    }
  } catch (e) {
    rows.push({
      ref: "09.04",
      verdict: "NOT PROVEN",
      reason: e instanceof Error ? e.message : String(e),
    });
  }

  // 09.03 bilan from traj02 if closed cycle
  try {
    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
    const closed = page.locator('[data-testid="trajectory-closed-cycle"]').first();
    if (await closed.count()) {
      const bil = page.getByRole("button", { name: /bilan/i }).first();
      if (await bil.count()) {
        await bil.click();
        await page.waitForSelector('[data-testid="trajectory-bilan-historique"]');
        const s = await shot(page, "09.03-runtime.png");
        rows.push({ ref: "09.03", verdict: "MEASURED", shot: s.sha });
      } else {
        rows.push({ ref: "09.03", verdict: "NOT PROVEN", reason: "no bilan button" });
      }
    } else {
      rows.push({ ref: "09.03", verdict: "NOT PROVEN", reason: "no closed cycle in seed" });
    }
  } catch (e) {
    rows.push({
      ref: "09.03",
      verdict: "NOT PROVEN",
      reason: e instanceof Error ? e.message : String(e),
    });
  }

  // 05.17 locked travail
  await visit("05.17", urls.urls.travailLock, '[data-testid="nora-composer"]', [
    '[data-testid="nora-composer"]',
  ]);

  // SAS06 — open prep and trigger create if possible; else capture prep page
  try {
    await page.goto(urls.urls.sasPrep, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const popup = page.locator('[data-testid="sas-create-progress-popup"]');
    if (await popup.count()) {
      const s = await shot(page, "SAS06-runtime.png");
      rows.push({
        ref: "SAS06",
        verdict: "MEASURED",
        shot: s.sha,
        measures: { popup: await measure(page, '[data-testid="sas-create-progress-popup"] > div') },
      });
    } else {
      const s = await shot(page, "SAS06-prep-runtime.png");
      rows.push({
        ref: "SAS06",
        verdict: "PARTIAL",
        reason: "popup not visible on seed prep; prep page captured",
        shot: s.sha,
      });
    }
  } catch (e) {
    rows.push({
      ref: "SAS06",
      verdict: "NOT PROVEN",
      reason: e instanceof Error ? e.message : String(e),
    });
  }

  writeFileSync(resolve(OUT, "f2-measures-13.json"), JSON.stringify(rows, null, 2));
  console.log(JSON.stringify(rows, null, 2));
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
