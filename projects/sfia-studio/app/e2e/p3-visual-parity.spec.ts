/**
 * P5-S08-4 — Global P3 visual parity harness.
 * Reuses authenticated Better Auth session + Playwright Chromium.
 * Captures go under .tmp-sfia-review/visual/s08-4/ (not Product source).
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  applyAuthenticatedStudioCookies,
  gotoAuthenticatedStudio,
  inspectAuthCookieFileStatus,
  resolveAuthStorageStatePath,
} from "./support/authenticatedStudioSession";
import { openProjectWorkspaceView } from "./support/projectWorkspaceNavigation";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/visual/s08-4/final",
);
const GEO_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/visual/s08-4/geometry",
);

const cookieStatus = inspectAuthCookieFileStatus();
const storagePath = resolveAuthStorageStatePath();
const hasStorage =
  Boolean(storagePath) &&
  fs.existsSync(storagePath!) &&
  fs.statSync(storagePath!).size > 0;
const sessionReady = cookieStatus === "PRESENT" || hasStorage;

async function stabilize(page: Page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.addStyleTag({
    content: `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}`,
  });
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function capture(
  page: Page,
  id: string,
  viewport: { width: number; height: number },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  fs.mkdirSync(GEO_ROOT, { recursive: true });
  await page.setViewportSize(viewport);
  await stabilize(page);
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const geo = await page.evaluate(() => {
    const rail = document.querySelector(
      '[data-testid="studio-rail"]',
    ) as HTMLElement | null;
    const r = rail?.getBoundingClientRect();
    return {
      railWidth: r ? Math.round(r.width) : null,
      activeView: document
        .querySelector("[data-active-view]")
        ?.getAttribute("data-active-view"),
      loading: !!document.querySelector(
        '[data-testid="studio-projects-loading"]',
      ),
    };
  });
  fs.writeFileSync(
    path.join(GEO_ROOT, `final-${id}.json`),
    JSON.stringify({ id, sha256, viewport, geo }, null, 2),
  );
  fs.appendFileSync(
    path.join(CAPTURE_ROOT, "manifest.jsonl"),
    `${JSON.stringify({ id, sha256, viewport, geo, ts: new Date().toISOString() })}\n`,
  );
  return { sha256, geo };
}

async function waitProjectsReady(page: Page) {
  await page.waitForFunction(() => {
    const loading = document.querySelector(
      '[data-testid="studio-projects-loading"]',
    );
    const list = document.querySelector('[data-testid="studio-projects-list"]');
    const empty = document.querySelector(
      '[data-testid="studio-projects-empty"]',
    );
    return !loading && (!!list || !!empty);
  }, undefined, { timeout: 45_000 });
}


test.describe("P5-S08-4 P3 visual parity", () => {
  test.describe.configure({ timeout: 240_000 });

  test.skip(
    !sessionReady,
    "AUTH VISUAL BOOTSTRAP REQUIRED — npm run e2e:auth:bootstrap",
  );

  test.use(
    hasStorage && storagePath ? { storageState: storagePath } : {},
  );

  test.beforeEach(async ({ context }) => {
    if (!hasStorage) {
      await applyAuthenticatedStudioCookies(context);
    }
  });

  test("shell + Projects + New Project + workspace bands", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(path.join(CAPTURE_ROOT, "manifest.jsonl"), "");

    await gotoAuthenticatedStudio(page, { path: "/studio" });
    await waitProjectsReady(page);
    expect(
      await page.getByTestId("studio-projects-loading").count(),
    ).toBe(0);

    const projects = await capture(page, "projects-1440", {
      width: 1440,
      height: 1024,
    });
    expect(projects.geo.loading).toBe(false);
    if (projects.geo.railWidth != null && projects.geo.railWidth > 0) {
      expect(Math.abs(projects.geo.railWidth - 192)).toBeLessThanOrEqual(1);
    }

    await capture(page, "projects-390", { width: 390, height: 844 });
    await expect(page.locator("html")).toHaveJSProperty(
      // overflow check via evaluate below
      "nodeName",
      "HTML",
    );
    const overflow = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      cw: document.documentElement.clientWidth,
    }));
    expect(overflow.sw).toBeLessThanOrEqual(overflow.cw + 1);

    await page.goto("/studio/projects/new", { waitUntil: "domcontentloaded" });
    await expect(page.getByTestId("create-project-form")).toBeVisible({
      timeout: 45_000,
    });
    await capture(page, "new-project-1440", { width: 1440, height: 1024 });
    await capture(page, "new-project-390", { width: 390, height: 844 });

    await gotoAuthenticatedStudio(page, { path: "/studio" });
    await waitProjectsReady(page);
    const open = page.getByTestId("studio-projects-open").first();
    test.skip(
      !(await open.isVisible().catch(() => false)),
      "No populated project available for workspace visual proof",
    );
    await open.click();
    await expect(page.getByTestId("project-workspace-layout")).toBeVisible({
      timeout: 45_000,
    });

    await capture(page, "workspace-1440", { width: 1440, height: 1024 });
    await capture(page, "workspace-1024", { width: 1024, height: 768 });
    await capture(page, "workspace-390", { width: 390, height: 844 });

    await openProjectWorkspaceView(page, "overview");
    await capture(page, "apercu-1440", { width: 1440, height: 1024 });

    await openProjectWorkspaceView(page, "journal");
    const journalCap = await capture(page, "journal-1440", {
      width: 1440,
      height: 1024,
    });
    expect(journalCap.geo.activeView).toBe("journal");

    await openProjectWorkspaceView(page, "history");
    const hist = await capture(page, "historique-1440", {
      width: 1440,
      height: 1024,
    });
    expect(hist.geo.activeView).toBe("history");

    await openProjectWorkspaceView(page, "syntheses");
    const syn = await capture(page, "syntheses-1440", {
      width: 1440,
      height: 1024,
    });
    expect(syn.geo.activeView).toBe("syntheses");
  });
});
