import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const OUT =
  process.env.CP_CORRECTION_OUT ||
  path.resolve(__dirname, "../../../.tmp-sfia-review/cp01-cp02-correction");

async function loginAndCreateProject(page: import("@playwright/test").Page, label: string) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const projectName = `${label} ${Date.now()}`;
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill(`${label} draft`);
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, { name: projectName, summary: label });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
    { timeout: 20000 },
  );
  return { projectId: projectId!, projectName };
}

async function seedPending(
  page: import("@playwright/test").Page,
  projectId: string,
  stamp: string,
) {
  await page.evaluate(
    ({ id, stamp: s }) => {
      sessionStorage.setItem(
        `sfia.thread.pending:${id}`,
        JSON.stringify({
          content: `Intention incertaine ${s}`,
          clientTurnKey: `ctk_${s}`,
          clientCommandKey: `conv-auth:ctk_${s}`,
        }),
      );
    },
    { id: projectId, stamp },
  );
  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
  await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
}

type Geom = {
  viewport: { w: number; h: number };
  composer: { top: number; bottom: number; h: number; maxHeight: string };
  banner: { top: number; bottom: number; h: number } | null;
  reconcile: {
    top: number;
    bottom: number;
    fullyInViewport: boolean;
    reachableViaStackScroll: boolean;
    clippedByHiddenAncestor: boolean;
  } | null;
  thread: { bottom: number };
  overlapThread: boolean;
  stack: { overflowY: string; maxHeight: string; scrollHeight: number; clientHeight: number } | null;
  pass: boolean;
  reason: string;
};

async function measurePendingGeom(page: import("@playwright/test").Page): Promise<Geom> {
  return page.evaluate(() => {
    const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement;
    const banner = document.querySelector('[data-testid="thread-pending-banner"]') as HTMLElement | null;
    const reconcile = document.querySelector(
      '[data-testid="thread-reconcile-pending"]',
    ) as HTMLElement | null;
    const thread = document.querySelector('[data-testid="nora-thread"]') as HTMLElement;
    const panel = document.querySelector(
      '[data-testid="nora-conversation-panel"]',
    ) as HTMLElement;
    const stack = document.querySelector('[data-testid="nora-composer-stack"]') as HTMLElement | null;

    const rect = (el: HTMLElement) => {
      const b = el.getBoundingClientRect();
      return { top: b.top, bottom: b.bottom, h: b.height, left: b.left, right: b.right };
    };
    const c = rect(composer);
    const t = rect(thread);
    const b = banner ? rect(banner) : null;
    const r = reconcile ? rect(reconcile) : null;
    const csComposer = getComputedStyle(composer);
    const csStack = stack ? getComputedStyle(stack) : null;

    let clippedByHiddenAncestor = false;
    if (reconcile) {
      let el: HTMLElement | null = reconcile;
      const rb = reconcile.getBoundingClientRect();
      while (el) {
        const cs = getComputedStyle(el);
        if (
          (cs.overflow === "hidden" || cs.overflowY === "hidden") &&
          el !== reconcile &&
          el !== banner
        ) {
          const er = el.getBoundingClientRect();
          // Control extends past a clipping ancestor (and ancestor is not a scrollport).
          if (rb.bottom > er.bottom + 1 && cs.overflowY === "hidden") {
            // Allow stack overflow:auto as managed scroll.
            if (el.getAttribute("data-testid") !== "nora-composer-stack") {
              clippedByHiddenAncestor = true;
              break;
            }
          }
        }
        el = el.parentElement;
      }
    }

    let reachableViaStackScroll = false;
    if (reconcile && stack) {
      const before = reconcile.getBoundingClientRect();
      const fullyBefore =
        before.top >= 0 && before.bottom <= window.innerHeight + 0.5;
      if (!fullyBefore && stack.scrollHeight > stack.clientHeight + 1) {
        reconcile.scrollIntoView({ block: "nearest", inline: "nearest" });
        const after = reconcile.getBoundingClientRect();
        reachableViaStackScroll =
          after.top >= -0.5 && after.bottom <= window.innerHeight + 0.5;
      } else {
        reachableViaStackScroll = fullyBefore;
      }
    }

    const fullyInViewport = r
      ? r.top >= -0.5 && r.bottom <= window.innerHeight + 0.5
      : false;
    const p = rect(panel);
    // Overlap against the conversation panel (not inner thread scrollport).
    const overlapThread = Boolean(
      b && b.top < p.bottom - 1 && b.bottom > p.top + 1 && b.left < p.right && b.right > p.left,
    );

    const reachable = fullyInViewport || reachableViaStackScroll;
    let reason = "ok";
    let pass = true;
    if (!r || !b) {
      pass = false;
      reason = "missing pending controls";
    } else if (overlapThread) {
      pass = false;
      reason = "overlap thread";
    } else if (clippedByHiddenAncestor && !reachable) {
      pass = false;
      reason = "clipped and unreachable";
    } else if (!reachable) {
      pass = false;
      reason = "reconcile not reachable";
    } else if (parseFloat(csComposer.maxHeight) > 0 && c.h > parseFloat(csComposer.maxHeight) + 1) {
      // composer card itself must still honor nominal max-height
      pass = false;
      reason = "composer exceeded max-height";
    }

    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      composer: { top: c.top, bottom: c.bottom, h: c.h, maxHeight: csComposer.maxHeight },
      banner: b ? { top: b.top, bottom: b.bottom, h: b.h } : null,
      reconcile: r
        ? {
            top: r.top,
            bottom: r.bottom,
            fullyInViewport,
            reachableViaStackScroll,
            clippedByHiddenAncestor,
          }
        : null,
      thread: { bottom: t.bottom },
      overlapThread,
      stack: stack
        ? {
            overflowY: csStack!.overflowY,
            maxHeight: csStack!.maxHeight,
            scrollHeight: stack.scrollHeight,
            clientHeight: stack.clientHeight,
          }
        : null,
      pass,
      reason,
    };
  });
}

test.describe("Ensemble 04 CP01/CP02 correction gates", () => {
  test("CP01-A..E geometry + CP02 navigation contracts", async ({ page }) => {
    fs.mkdirSync(OUT, { recursive: true });
    const results: Record<string, unknown> = { at: new Date().toISOString() };

    // --- CP01-A nominal 1680×970 ---
    await page.setViewportSize({ width: 1680, height: 970 });
    const { projectId } = await loginAndCreateProject(page, "CP corr");
    await expect(page.getByTestId("nora-composer")).toBeVisible();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);

    const nominal = await page.evaluate(() => {
      const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement;
      const panel = document.querySelector(
        '[data-testid="nora-conversation-panel"]',
      ) as HTMLElement;
      const stack = document.querySelector('[data-testid="nora-composer-stack"]') as HTMLElement;
      const c = composer.getBoundingClientRect();
      const p = panel.getBoundingClientRect();
      return {
        composerH: c.height,
        maxHeight: getComputedStyle(composer).maxHeight,
        gap: Math.round(c.top - p.bottom),
        separate: !panel.contains(composer),
        stackPending: stack.getAttribute("data-pending"),
        bottomSlack: Math.round(window.innerHeight - c.bottom),
      };
    });
    await page.screenshot({ path: path.join(OUT, "cp01a-nominal-1680x970.png"), fullPage: false });
    expect(nominal.separate).toBe(true);
    expect(nominal.composerH).toBeLessThanOrEqual(160);
    expect(nominal.gap).toBeGreaterThanOrEqual(18);
    expect(nominal.gap).toBeLessThanOrEqual(32);
    expect(nominal.stackPending).toBe("0");
    results["CP01-A"] = { pass: true, nominal };

    // --- CP01-B..E pending viewports ---
    const pendingViewports = [
      { id: "CP01-B", w: 1680, h: 970 },
      { id: "CP01-C", w: 1280, h: 600 },
      { id: "CP01-D", w: 1024, h: 768 },
      { id: "CP01-E", w: 390, h: 844 },
    ];

    for (const vp of pendingViewports) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );
      await seedPending(page, projectId, `${vp.id}_${Date.now()}`);
      const geom = await measurePendingGeom(page);
      await page.screenshot({
        path: path.join(OUT, `${vp.id.toLowerCase()}-pending-${vp.w}x${vp.h}.png`),
        fullPage: false,
      });
      fs.writeFileSync(path.join(OUT, `${vp.id.toLowerCase()}-geom.json`), JSON.stringify(geom, null, 2));

      // Focus + activate reconcile without losing pending authority (busy=false → clickable)
      await page.getByTestId("thread-reconcile-pending").focus();
      await expect(page.getByTestId("thread-reconcile-pending")).toBeFocused();
      await expect(page.getByTestId("thread-reconcile-pending")).toBeEnabled();
      await expect(page.getByTestId("nora-composer")).toBeVisible();

      expect(geom.pass, `${vp.id}: ${geom.reason} ${JSON.stringify(geom)}`).toBe(true);
      results[vp.id] = { pass: true, geom };
    }

    // --- CP02 navigation ---
    const navCases = [
      { name: "desktop", w: 1680, h: 970, expectDesktopRail: true },
      { name: "mid", w: 1024, h: 768, expectDesktopRail: true },
      { name: "mobile", w: 390, h: 844, expectDesktopRail: false },
    ];
    const navResults: Record<string, unknown> = {};

    for (const vp of navCases) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );

      const desktopRail = page.getByTestId("studio-rail");
      const mobileRail = page.getByTestId("studio-rail-mobile");
      if (vp.expectDesktopRail) {
        await expect(desktopRail).toBeVisible();
      } else {
        await expect(desktopRail).toBeHidden();
        await expect(mobileRail).toBeVisible();
      }

      const navRoot = vp.expectDesktopRail ? desktopRail : mobileRail;
      // Four project surfaces (Trajectoire deep-link key remains pilotage).
      const surfaces: Array<{ testId: string; surfaceQuery: string }> = [
        { testId: "nav-travail", surfaceQuery: "travail" },
        { testId: "nav-projet", surfaceQuery: "projet" },
        { testId: "nav-journal", surfaceQuery: "journal" },
        { testId: "nav-pilotage", surfaceQuery: "pilotage" },
      ];
      for (const s of surfaces) {
        await navRoot.getByTestId(s.testId).click();
        await expect(page).toHaveURL(new RegExp(`surface=${s.surfaceQuery}`));
      }

      // Back to Travail
      await navRoot.getByTestId("nav-travail").click();
      await expect(page).toHaveURL(/surface=travail/);
      await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

      // Portfolio access (same destinations as desktop rail)
      await navRoot.getByTestId("nav-portfolio").click();
      await expect(page).toHaveURL(/\/portfolio/);
      // Return to project
      await page.goto(`/projects/${projectId}?surface=travail`);
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );

      const bleed = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      await page.screenshot({
        path: path.join(OUT, `cp02-${vp.name}-${vp.w}x${vp.h}.png`),
        fullPage: false,
      });
      expect(bleed).toBeLessThan(24);
      navResults[vp.name] = { pass: true, bleed, expectDesktopRail: vp.expectDesktopRail };
    }

    results.CP02 = { pass: true, navResults };
    fs.writeFileSync(path.join(OUT, "results.json"), JSON.stringify(results, null, 2));
    console.log("CP_CORRECTION_RESULTS", JSON.stringify(results));
  });
});
