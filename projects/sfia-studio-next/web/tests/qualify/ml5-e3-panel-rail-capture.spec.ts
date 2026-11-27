import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml5-e3-figma-runtime",
);

test.setTimeout(120_000);

test("E3 — rail F1 + panel/settings runtime captures", async ({ page }) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  await page.waitForURL(/\/(portfolio|projects|preparations|login)/, {
    timeout: 60_000,
  });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /Pilote A|connexion de test|test login/i,
    });
    if (await testBtn.count()) await testBtn.first().click();
    else {
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
  await page.screenshot({
    path: path.join(EVIDENCE, "runtime-portfolio-rail.png"),
    fullPage: false,
  });
  const railPersonal = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="studio-rail"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      width: Math.round(r.width),
      dataWidth: el.getAttribute("data-rail-width"),
    };
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "f1-rail-personal.json"),
    JSON.stringify({ surface: "portfolio", ...railPersonal }, null, 2),
  );
  expect(railPersonal?.width).toBeGreaterThanOrEqual(244);
  expect(railPersonal?.width).toBeLessThanOrEqual(248);

  const proj = page.locator('a[href*="/projects/"]').first();
  test.skip((await proj.count()) === 0, "no project link on portfolio");
  await proj.click();
  await page.waitForURL("**/projects/**", { timeout: 60_000 });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(EVIDENCE, "runtime-travail-full.png"),
    fullPage: false,
  });
  const aside = page.locator('[data-testid="travail-aside-recents"]');
  if (await aside.count()) {
    await aside.screenshot({
      path: path.join(EVIDENCE, "runtime-panel-recents.png"),
    });
  }
  const railProj = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="studio-rail"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      width: Math.round(r.width),
      dataWidth: el.getAttribute("data-rail-width"),
    };
  });
  const settings = await page.locator('[data-testid="rail-settings-trigger"]').count();
  fs.writeFileSync(
    path.join(EVIDENCE, "f1-rail-project.json"),
    JSON.stringify(
      { surface: "project", ...railProj, settingsPresent: settings > 0 },
      null,
      2,
    ),
  );
  expect(railProj?.width).toBeGreaterThanOrEqual(244);
  expect(railProj?.width).toBeLessThanOrEqual(248);
  expect(settings).toBeGreaterThan(0);
  await page.getByTestId("rail-settings-trigger").click();
  await expect(page.getByTestId("rail-settings-popover")).toBeVisible();
  await page.screenshot({
    path: path.join(EVIDENCE, "runtime-rail-settings.png"),
    fullPage: false,
  });
});
