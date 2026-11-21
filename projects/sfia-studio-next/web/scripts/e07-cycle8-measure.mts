/**
 * Cycle 8 — seed (reuse e07-seed) + F2 measure key DOM nodes @ 1680×970.
 * Evidence → .tmp-sfia-review/ensemble07-dip-cycle8/
 */
import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { spawnSync } from "child_process";

const ROOT = resolve(process.cwd(), "../../..");
const OUT = resolve(ROOT, ".tmp-sfia-review/ensemble07-dip-cycle8");
mkdirSync(OUT, { recursive: true });
mkdirSync(resolve(OUT, "runtime"), { recursive: true });

const urlsPath = "/tmp/sfia-e07-shot-urls.json";

function sha12(buf: Buffer) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 12);
}

async function measure(
  page: import("@playwright/test").Page,
  selector: string,
): Promise<Record<string, unknown> | null> {
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
      color: s.color,
      background: s.backgroundColor,
      borderRadius: s.borderRadius,
      padding: s.padding,
    };
  }, selector);
}

async function main() {
  // Seed if urls missing
  if (!existsSync(urlsPath)) {
    console.log("seeding…");
    const r = spawnSync("npx", ["tsx", "scripts/e07-seed-screenshot.mts"], {
      cwd: process.cwd(),
      env: process.env,
      encoding: "utf8",
      timeout: 180_000,
    });
    console.log(r.stdout?.slice(-500));
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

  const matrix: Array<Record<string, unknown>> = [];

  // 09.06
  await page.goto(urls.urls.projet06, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="project-overview-no-cycle"]');
  const p06 = resolve(OUT, "runtime/09.06-runtime.png");
  await page.screenshot({ path: p06, fullPage: false });
  matrix.push({
    frame: "09.06",
    shot: sha12(readFileSync(p06)),
    cycleCard: await measure(page, '[data-testid="project-overview-cycle-card"]'),
    sep: await measure(page, '[data-testid="project-overview-state-sep"]'),
    subjects: await measure(page, '[data-testid="project-activity-subjects"]'),
  });

  // 09.11
  await page.goto(urls.urls.traj11, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  const p11 = resolve(OUT, "runtime/09.11-runtime.png");
  await page.screenshot({ path: p11, fullPage: false });
  matrix.push({
    frame: "09.11",
    shot: sha12(readFileSync(p11)),
    panel: await measure(page, '[data-testid="trajectory-proposal-sequential"]'),
    step1: await measure(page, '[data-testid="trajectory-forecast-step-1"]'),
    cta: await measure(page, '[data-testid="trajectory-proposal-cta"]'),
  });

  // 09.05 — prefer a project with ACTIVE cycle (traj02 / traj09)
  const trajForCki = urls.urls.traj02 || urls.urls.traj09 || urls.urls.traj11;
  await page.goto(trajForCki, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const ckiOpen = page.locator('[data-testid="trajectory-open-cki"]');
  if ((await ckiOpen.count()) === 0) {
    throw new Error("trajectory-open-cki not found on " + trajForCki);
  }
  await ckiOpen.click();
  await page.waitForSelector('[data-testid="trajectory-cki-methode"]', { timeout: 15_000 });
  const p05 = resolve(OUT, "runtime/09.05-runtime.png");
  await page.screenshot({ path: p05, fullPage: false });
  const ckiTitle = await page.locator('[data-testid="trajectory-cki-id"]').textContent();
  const ckiIdAttr = await page.locator('[data-testid="trajectory-cki-id"]').getAttribute("data-cki-id");
  matrix.push({
    frame: "09.05",
    shot: sha12(readFileSync(p05)),
    ckiTitle,
    ckiIdAttr,
    titleIsEditorial: ckiTitle !== ckiIdAttr,
    main: await measure(page, '[data-testid="trajectory-cki-main"]'),
    method: await measure(page, '[data-testid="trajectory-method-side"]'),
    result: await measure(page, '[data-testid="trajectory-cki-result"]'),
    angles: await measure(page, '[data-testid="trajectory-cki-angles"]'),
  });

  writeFileSync(resolve(OUT, "f2-measures.json"), JSON.stringify(matrix, null, 2));
  console.log(JSON.stringify(matrix, null, 2));
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
