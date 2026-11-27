/**
 * E5 — discriminating browser proofs (fixture / substituted only).
 * Sas page (not harness), rail reachability at 1280×720, panel state honesty.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
} from "../e2e/helpers/g4-chat-first";

const EVIDENCE = path.resolve(
  __dirname,
  "../../../construction/evidence/ml5-e5-20261127/browser",
);

test.setTimeout(180_000);

async function ensurePortfolio(page: import("@playwright/test").Page) {
  const auto = await page.request.post("/api/dev/auto-session");
  expect(auto.ok()).toBeTruthy();
  await page.goto("/portfolio", { waitUntil: "domcontentloaded" });
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
}

test("E5 — sas préparation: shared composer present (not harness)", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  const draft = page.getByTestId("prep-draft");
  await expect(draft).toBeVisible({ timeout: 30_000 });
  const url = page.url();
  expect(url).toContain("/preparations/");
  expect(url).not.toContain("dictation-harness");
  // Idle mic uses composer-mic; active shell uses composer-dictation.
  const mic = page.getByTestId("composer-mic");
  await expect(mic).toBeVisible({ timeout: 15_000 });
  const micDisabled = await mic.isDisabled();
  await page.screenshot({
    path: path.join(EVIDENCE, "e5-sas-composer.png"),
    fullPage: false,
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-sas-composer.json"),
    JSON.stringify(
      {
        url,
        prepDraftVisible: true,
        micVisible: true,
        micDisabled,
        harness: false,
      },
      null,
      2,
    ),
  );
  expect(micDisabled).toBe(false);
});

test("E5 — rail 1280×720: Résultats & preuves reachable after nav scroll", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.setViewportSize({ width: 1280, height: 720 });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: "E5 rail",
    summary: "E5 rail reachability",
  });
  await page.waitForTimeout(800);

  const nav = page.locator(".studio-shell-rail-nav").first();
  await expect(nav).toBeVisible({ timeout: 15_000 });
  // Link (not button) — scroll nav range so last Accès directs clears the foot.
  await nav.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  const results = page.getByTestId("nav-resultats");
  await expect(results).toBeVisible({ timeout: 15_000 });
  await results.scrollIntoViewIfNeeded();
  const box = await results.boundingBox();
  expect(box).toBeTruthy();
  const hit = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="nav-resultats"]');
    if (!el) return { ok: false, reason: "missing" as const };
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const top = document.elementFromPoint(cx, cy);
    const navEl = document.querySelector(".studio-shell-rail-nav");
    const foot = document.querySelector(".studio-shell-rail-foot");
    const footTop = foot?.getBoundingClientRect().top ?? null;
    return {
      ok: !!top && (el === top || el.contains(top) || top.contains(el)),
      cx,
      cy,
      topTag: top?.nodeName ?? null,
      paddingBottom: navEl ? getComputedStyle(navEl).paddingBottom : null,
      scrollPaddingBottom: navEl
        ? getComputedStyle(navEl).scrollPaddingBottom
        : null,
      navScrollTop: navEl ? (navEl as HTMLElement).scrollTop : null,
      navScrollHeight: navEl ? (navEl as HTMLElement).scrollHeight : null,
      inViewport: r.bottom <= window.innerHeight && r.top >= 0,
      clearOfFoot: footTop == null ? true : r.bottom <= footTop + 0.5,
      footTop,
      resultsBottom: r.bottom,
    };
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-rail-results-hit.json"),
    JSON.stringify({ box, hit }, null, 2),
  );
  await page.screenshot({
    path: path.join(EVIDENCE, "e5-rail-results-1280x720.png"),
    fullPage: false,
  });
  expect(hit.clearOfFoot).toBeTruthy();
  expect(hit.ok).toBeTruthy();
});

test("E5 — panneau récents: record populated vs empty honestly", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: "E5 panel",
    summary: "E5 panel state",
  });
  await page.waitForTimeout(1000);
  const aside = page.locator('[data-testid="travail-aside-recents"]');
  const present = (await aside.count()) > 0;
  let itemCount = 0;
  if (present) {
    itemCount = await aside.locator('[data-testid="recent-item"]').count();
    if (itemCount === 0) {
      itemCount = await aside.locator("li, a, button").count();
    }
    await aside.screenshot({
      path: path.join(EVIDENCE, "e5-panel-recents-state.png"),
    });
  }
  const payload = {
    asidePresent: present,
    itemCount,
    populated: itemCount > 0,
    note:
      itemCount > 0
        ? "Panel shows items on this fresh DEV project"
        : "Panel empty on fresh project — not claimed as peuplé; natural peuplement remains RECETTE",
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-panel-recents-state.json"),
    JSON.stringify(payload, null, 2),
  );
  expect(present).toBeTruthy();
});
