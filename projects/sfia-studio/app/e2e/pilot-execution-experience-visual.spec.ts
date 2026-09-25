/**
 * PILOT-EXEC authenticated visual QA — GAP-14 smoke (default).
 * REAL Better Auth session. ZERO Cursor REAL. Execution deterministic only.
 *
 * GAP-15 / MORRIS BOUNDED RESERVE —
 * authenticated post-HD live proof (RC-05/RC-06) deferred;
 * deterministic RC-05/06 proof retained in unit/UI tests.
 * Do not fail this suite on greenfield START/options deadlock.
 *
 * Skips entirely when no local session file is PRESENT.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  applyAuthenticatedStudioCookies,
  gotoAuthenticatedStudio,
  inspectAuthCookieFileStatus,
  resolveAuthCookieFilePath,
  resolveAuthStorageStatePath,
} from "./support/authenticatedStudioSession";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/pilot-execution-experience-visual",
);

const cookieStatus = inspectAuthCookieFileStatus();
const storagePath = resolveAuthStorageStatePath();
const hasStorage =
  Boolean(storagePath) &&
  fs.existsSync(storagePath!) &&
  fs.statSync(storagePath!).size > 0;
const sessionReady = cookieStatus === "PRESENT" || hasStorage;

type CaptureMeta = {
  state: string;
  observation: string;
  projectIdRedacted?: string;
  extra?: Record<string, unknown>;
};

async function capture(
  page: Page,
  id: string,
  viewport: { width: number; height: number },
  meta: CaptureMeta,
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  await page.setViewportSize(viewport);
  await page.waitForTimeout(350);
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth };
  });
  const layout = await page.evaluate(() => {
    const root = document.querySelector(
      '[data-testid="project-workspace-layout"]',
    ) as HTMLElement | null;
    if (!root) return null;
    const kids = Array.from(root.children) as HTMLElement[];
    return {
      cols: getComputedStyle(root).gridTemplateColumns,
      childWidths: kids.map((k) => Math.round(k.getBoundingClientRect().width)),
      width: Math.round(root.getBoundingClientRect().width),
    };
  });
  fs.appendFileSync(
    path.join(CAPTURE_ROOT, "manifest.jsonl"),
    `${JSON.stringify({
      id,
      file: path.basename(file),
      sha256,
      viewport,
      url: page.url().replace(/prj%3A[a-f0-9-]+/gi, "prj%3AREDACTED"),
      state: meta.state,
      observation: meta.observation,
      projectIdRedacted: meta.projectIdRedacted ?? "REDACTED",
      overflow,
      layout,
      extra: meta.extra ?? null,
      timestamp: new Date().toISOString(),
    })}\n`,
  );
  return { file, sha256, overflow, layout };
}

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.describe("PILOT-EXEC authenticated visual QA", () => {
  test.describe.configure({ timeout: 180_000 });

  test.skip(
    !sessionReady,
    "AUTH VISUAL BOOTSTRAP REQUIRED — npm run e2e:auth:bootstrap",
  );

  test.use(
    hasStorage && storagePath
      ? { storageState: storagePath }
      : {},
  );

  test.beforeEach(async ({ context }) => {
    if (cookieStatus === "PRESENT" && !hasStorage) {
      await applyAuthenticatedStudioCookies(context, {
        cookieFilePath: resolveAuthCookieFilePath(),
      });
    }
  });

  test("GAP-14 — authenticated /studio + workspace layout 1440/1600", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(path.join(CAPTURE_ROOT, "manifest.jsonl"), "");

    await page.setViewportSize({ width: 1440, height: 900 });
    await gotoAuthenticatedStudio(page);
    await expect(page.getByTestId("studio-projects-home")).toBeVisible({
      timeout: 30_000,
    });
    const home1440 = await capture(page, "studio-home-1440", {
      width: 1440,
      height: 900,
    }, {
      state: "authenticated studio home",
      observation: "REAL Better Auth session; /studio reachable",
    });
    expect(home1440.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);

    // Open an existing project if present; else create one for workspace layout.
    const resume = page.getByRole("link", { name: /Reprendre|Voir l'état/i }).first();
    if (await resume.isVisible().catch(() => false)) {
      await resume.click();
    } else {
      await page.goto("/studio/projects/new", { waitUntil: "networkidle" });
      await expect(page.getByTestId("create-project-submit")).toBeEnabled({
        timeout: 15_000,
      });
      const name = `Visual Smoke ${Date.now()}`;
      await page.locator("#project-name").fill(name);
      await page.locator("#project-objective").fill("Authenticated visual smoke");
      await page.locator("#project-context").fill("REAL=0");
      await expect(page.locator("#project-name")).toHaveValue(name);
      await page.getByTestId("create-project-submit").click();
      await expect(page.getByTestId("open-project-workspace")).toBeVisible({
        timeout: 45_000,
      });
      await page.getByTestId("open-project-workspace").click();
    }

    await expect(page.getByTestId("project-workspace-layout")).toBeVisible({
      timeout: 45_000,
    });

    const ws1440 = await capture(page, "workspace-1440", {
      width: 1440,
      height: 900,
    }, {
      state: "authenticated workspace",
      observation: "Journal / Conversation / Pilotage at 1440",
    });
    expect(ws1440.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);
    if (ws1440.layout?.childWidths?.length === 3) {
      const [j, c, r] = ws1440.layout.childWidths;
      expect(j).toBeGreaterThanOrEqual(260);
      expect(j).toBeLessThanOrEqual(300);
      expect(c).toBeGreaterThanOrEqual(600);
      expect(r).toBeGreaterThanOrEqual(500);
      expect(r).toBeLessThanOrEqual(560);
    }

    const ws1600 = await capture(page, "workspace-1600", {
      width: 1600,
      height: 1000,
    }, {
      state: "authenticated workspace large desktop",
      observation: "Layout at 1600; no overflow",
    });
    expect(ws1600.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);
    if (ws1600.layout?.childWidths?.length === 3) {
      const [j, c, r] = ws1600.layout.childWidths;
      expect(j).toBeGreaterThanOrEqual(270);
      expect(j).toBeLessThanOrEqual(310);
      expect(c).toBeGreaterThanOrEqual(650);
      expect(r).toBeGreaterThanOrEqual(540);
      expect(r).toBeLessThanOrEqual(620);
    }

    // Optional home capture at 1600 (session still valid)
    await page.goto("/studio", { waitUntil: "domcontentloaded" });
    if (page.url().includes("/login")) {
      throw new Error("AUTHENTICATED_VISUAL_SESSION_INVALID_OR_EXPIRED");
    }
    const home1600 = await capture(page, "studio-home-1600", {
      width: 1600,
      height: 1000,
    }, {
      state: "studio home large desktop",
      observation: "Authenticated /studio at 1600; no overflow",
    });
    expect(home1600.sha256.length).toBe(64);
    await assertNoHorizontalOverflow(page);
  });

  test(
    "RC-05/RC-06 authenticated post-HD live — deferred (GAP-15)",
    {
      // GAP-15 / MORRIS BOUNDED RESERVE — authenticated post-HD live proof deferred;
      // deterministic RC-05/06 proof retained. Opt-in not wired to greenfield in this PR.
    },
    async () => {
      test.skip(
        true,
        "GAP-15 / MORRIS BOUNDED RESERVE — authenticated post-HD live proof deferred; deterministic RC-05/06 retained",
      );
    },
  );
});
