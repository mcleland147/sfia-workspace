/**
 * Targeted F2 — Acquis / À clarifier panels @ 1680×970 (09.02 + 09.09).
 * Expectation Page 10: ~640 / ~646 / gap 24 (tolérance 2 CSS px).
 */
import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { spawnSync } from "child_process";

const ROOT = resolve(process.cwd(), "../../..");
const OUT = resolve(
  ROOT,
  ".tmp-sfia-review/ensemble07-acquis-panels-fix",
);
mkdirSync(resolve(OUT, "runtime"), { recursive: true });
const urlsPath = "/tmp/sfia-e07-shot-urls.json";

const TARGET = {
  acquisW: 640,
  clarifierW: 646,
  gap: 24,
  height: 157,
  tol: 2,
};

function sha12(buf: Buffer) {
  return createHash("sha256").update(buf).digest("hex").slice(0, 12);
}

async function box(page: import("@playwright/test").Page, sel: string) {
  return page.evaluate((s) => {
    const el = document.querySelector(s) as HTMLElement | null;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: Math.round(r.x),
      y: Math.round(r.y),
      width: Math.round(r.width),
      height: Math.round(r.height),
    };
  }, sel);
}

function delta(actual: number, expected: number) {
  return Math.abs(actual - expected);
}

function pass(actual: number, expected: number, tol = TARGET.tol) {
  return delta(actual, expected) <= tol;
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
      console.error(r.stderr || r.stdout);
      process.exit(1);
    }
  }
  const urls = JSON.parse(readFileSync(urlsPath, "utf8")) as {
    urls: Record<string, string>;
  };

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1680, height: 970 },
  });
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
  let allPass = true;

  for (const ref of ["09.02", "09.09"] as const) {
    const url = ref === "09.02" ? urls.urls.traj02 : urls.urls.traj09;
    if (!url) {
      rows.push({ ref, verdict: "NOT PROVEN", reason: "no seed URL" });
      allPass = false;
      continue;
    }
    await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
    await page.waitForSelector('[data-testid="trajectory-acquis"]', {
      timeout: 20_000,
    });
    await page.waitForTimeout(400);

    const acquis = await box(page, '[data-testid="trajectory-acquis"]');
    const clarifier = await box(page, '[data-testid="trajectory-a-clarifier"]');
    const row = await box(page, '[data-testid="trajectory-cycle-knowledge-row"]');
    const emptyA = await page.$('[data-testid="trajectory-acquis-empty"]');
    const emptyC = await page.$('[data-testid="trajectory-a-clarifier-empty"]');
    const linkA = await page.$('[data-testid="trajectory-acquis-journal-link"]');
    const linkC = await page.$(
      '[data-testid="trajectory-a-clarifier-journal-link"]',
    );

    const shotPath = resolve(OUT, "runtime", `${ref}-acquis-panels.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    const shotSha = sha12(readFileSync(shotPath));

    if (!acquis || !clarifier || !row) {
      rows.push({
        ref,
        verdict: "FAIL",
        reason: "panel missing",
        acquis,
        clarifier,
        row,
      });
      allPass = false;
      continue;
    }

    const gap = clarifier.x - (acquis.x + acquis.width);
    const checks = {
      acquisW: {
        actual: acquis.width,
        expected: TARGET.acquisW,
        pass: pass(acquis.width, TARGET.acquisW),
      },
      clarifierW: {
        actual: clarifier.width,
        expected: TARGET.clarifierW,
        pass: pass(clarifier.width, TARGET.clarifierW),
      },
      gap: {
        actual: gap,
        expected: TARGET.gap,
        pass: pass(gap, TARGET.gap),
      },
      acquisMinH: {
        actual: acquis.height,
        expected: TARGET.height,
        pass: acquis.height >= TARGET.height - TARGET.tol,
      },
      clarifierMinH: {
        actual: clarifier.height,
        expected: TARGET.height,
        pass: clarifier.height >= TARGET.height - TARGET.tol,
      },
      noHOverflow: {
        actual: row.width,
        expected: 1310,
        pass: row.width <= 1310 + TARGET.tol && row.x + row.width <= 1680,
      },
      journalLinks: {
        actual: Boolean(linkA && linkC),
        expected: true,
        pass: Boolean(linkA && linkC),
      },
    };

    const refPass = Object.values(checks).every((c) => c.pass);
    if (!refPass) allPass = false;

    rows.push({
      ref,
      verdict: refPass ? "PASS" : "FAIL",
      shot: shotSha,
      emptyStates: { acquis: Boolean(emptyA), clarifier: Boolean(emptyC) },
      boxes: { acquis, clarifier, row, gap },
      checks,
    });

    // Narrow viewport — stack, no horizontal overflow
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth + 2;
    });
    const stacked = await page.evaluate(() => {
      const a = document.querySelector(
        '[data-testid="trajectory-acquis"]',
      ) as HTMLElement | null;
      const c = document.querySelector(
        '[data-testid="trajectory-a-clarifier"]',
      ) as HTMLElement | null;
      if (!a || !c) return false;
      const ar = a.getBoundingClientRect();
      const cr = c.getBoundingClientRect();
      return cr.y >= ar.y + ar.height - 2;
    });
    rows.push({
      ref: `${ref}-narrow`,
      verdict: !overflow && stacked ? "PASS" : "FAIL",
      overflow,
      stacked,
    });
    if (overflow || !stacked) allPass = false;

    await page.setViewportSize({ width: 1680, height: 970 });
  }

  // Long text wrap: inject via DOM on 09.02 if available
  if (urls.urls.traj02) {
    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-acquis"]');
    await page.evaluate(() => {
      const ul = document.querySelector(
        '[data-testid="trajectory-acquis"] ul',
      );
      const host =
        ul ||
        document.querySelector('[data-testid="trajectory-acquis"]');
      if (!host) return;
      const li = document.createElement("p");
      li.setAttribute("data-testid", "trajectory-acquis-long-probe");
      li.className = "mt-3 text-[13px] leading-[1.35] text-[#f3f5ff] break-words";
      li.textContent =
        "Probe wrapping: " +
        "clarification métier et périmètre opérationnel du pilote Equip'Campus ".repeat(
          6,
        );
      host.appendChild(li);
    });
    const before = await box(page, '[data-testid="trajectory-acquis"]');
    const afterC = await box(page, '[data-testid="trajectory-a-clarifier"]');
    const probe = await box(page, '[data-testid="trajectory-acquis-long-probe"]');
    const wrapOk =
      !!before &&
      !!afterC &&
      !!probe &&
      pass(before.width, TARGET.acquisW) &&
      pass(afterC.width, TARGET.clarifierW) &&
      (probe.height ?? 0) > 20;
    rows.push({
      ref: "09.02-long-wrap",
      verdict: wrapOk ? "PASS" : "FAIL",
      before,
      afterC,
      probe,
    });
    if (!wrapOk) allPass = false;
    const shotPath = resolve(OUT, "runtime", "09.02-long-wrap.png");
    await page.screenshot({ path: shotPath, fullPage: false });
  }

  const report = {
    measuredAt: new Date().toISOString(),
    viewport: "1680x970",
    target: TARGET,
    allPass,
    rows,
  };
  writeFileSync(resolve(OUT, "f2-acquis-panels.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ allPass, summary: rows.map((r) => ({ ref: r.ref, verdict: r.verdict })) }, null, 2));
  await browser.close();
  process.exit(allPass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
