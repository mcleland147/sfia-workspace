import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * F2 captures — Ensemble 04 vs Figma 652:* at 1680×970.
 * Artifacts under web/docs/evidence/ensemble-04-project-space/
 */
test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
  const outDir = path.join(
    process.cwd(),
    "docs",
    "evidence",
    "ensemble-04-project-space",
  );
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const projectName = `F2 Espace projet ${Date.now()}`;
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill("Capture F2 Ensemble 04");
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, {
    name: projectName,
    summary: "capture runtime",
  });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
    { timeout: 20000 },
  );

  await page.goto(`/projects/${projectId}?surface=travail`);
  await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
  await expect(page.getByTestId("nora-workspace")).toBeVisible();
  await expect(page.getByTestId("thread-send")).toHaveAttribute("aria-label", "Envoyer");

  const measures = await page.evaluate(() => {
    const rail = document.querySelector('[data-testid="studio-rail"]') as HTMLElement | null;
    const workspace = document.querySelector('[data-testid="nora-workspace"]') as HTMLElement | null;
    const intro = document.querySelector('[data-testid="travail-intro"]') as HTMLElement | null;
    const rule = document.querySelector('[data-testid="travail-intro-rule"]') as HTMLElement | null;
    const main = document.querySelector('[data-testid="nora-conversation-panel"]') as HTMLElement | null;
    const aside = document.querySelector('[data-testid="nora-aside"]') as HTMLElement | null;
    const inspector = document.querySelector('[data-testid="travail-aside-inspector"]') as HTMLElement | null;
    const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement | null;
    const thread = document.querySelector('[data-testid="nora-thread"]') as HTMLElement | null;
    const name = document.querySelector('[data-testid="rail-project-name"]') as HTMLElement | null;
    const stage = document.querySelector('[data-testid="project-travail-stage"]') as HTMLElement | null;
    const cs = (el: HTMLElement | null) => (el ? getComputedStyle(el) : null);
    const box = (el: HTMLElement | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: Math.round(r.x),
        y: Math.round(r.y),
        w: Math.round(r.width),
        h: Math.round(r.height),
        bottom: Math.round(r.bottom),
      };
    };
    const introBox = box(intro);
    const conv = box(main);
    const comp = box(composer);
    const insp = box(inspector) || box(aside);
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
      rail: { ...box(rail), widthAttr: rail?.getAttribute("data-rail-width"), fill: rail?.getAttribute("data-rail-fill") },
      stage: box(stage),
      intro: introBox,
      introRule: box(rule),
      workspace: box(workspace),
      conversation: conv,
      aside: box(aside),
      inspector: insp,
      composer: comp,
      thread: {
        ...box(thread),
        overflowY: thread ? cs(thread)?.overflowY : null,
        scrollHeight: thread?.scrollHeight ?? null,
        clientHeight: thread?.clientHeight ?? null,
      },
      gaps: {
        conversationToComposer:
          conv && comp ? Math.round(comp.y - conv.bottom) : null,
        composerInspectorBottomAlign:
          comp && insp ? Math.round(comp.bottom - insp.bottom) : null,
        introToInspectorTop:
          introBox && insp ? Math.round(introBox.y - insp.y) : null,
        bottomSlack: comp ? Math.round(window.innerHeight - comp.bottom) : null,
      },
      structure: {
        composerInsideConversation: Boolean(main?.contains(composer)),
        embed: workspace?.getAttribute("data-travail-embed"),
      },
      projectName: {
        ...box(name),
        lineClamp: name ? cs(name)?.webkitLineClamp : null,
        fontSize: name ? cs(name)?.fontSize : null,
        fontWeight: name ? cs(name)?.fontWeight : null,
      },
      send: (() => {
        const btn = document.querySelector('[data-testid="thread-send"]') as HTMLElement | null;
        return { ...box(btn), aria: btn?.getAttribute("aria-label"), text: btn?.textContent?.trim() };
      })(),
    };
  });
  fs.writeFileSync(path.join(outDir, "dom-measures-travail.json"), JSON.stringify(measures, null, 2));

  // Assert vertical composition contract (desktop 1680×970)
  expect(measures.structure.composerInsideConversation).toBe(false);
  expect(measures.gaps.conversationToComposer).not.toBeNull();
  expect(measures.gaps.conversationToComposer!).toBeGreaterThanOrEqual(18);
  expect(measures.gaps.conversationToComposer!).toBeLessThanOrEqual(32);
  expect(Math.abs(measures.gaps.composerInspectorBottomAlign ?? 99)).toBeLessThanOrEqual(8);
  expect(Math.abs(measures.gaps.introToInspectorTop ?? 99)).toBeLessThanOrEqual(8);
  expect(measures.composer?.h ?? 999).toBeLessThanOrEqual(160);
  expect(measures.gaps.bottomSlack ?? 999).toBeLessThanOrEqual(48);

  await page.screenshot({
    path: path.join(outDir, "runtime-travail-1680x970.png"),
    fullPage: false,
  });

  // Long name wrap check (2-line clamp)
  await page.evaluate((longName) => {
    const el = document.querySelector('[data-testid="rail-project-name"]');
    if (el) {
      el.textContent = longName;
      el.setAttribute("title", longName);
    }
  }, "Cockpit Réunions Projet — Coordination interéquipes et préparation stratégique prolongée");
  await page.screenshot({
    path: path.join(outDir, "runtime-travail-long-name-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=projet`);
  await expect(page.getByTestId("project-overview")).toBeVisible();
  await page.screenshot({
    path: path.join(outDir, "runtime-projet-overview-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=journal`);
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "journal",
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-journal-nav-1680x970.png"),
    fullPage: false,
  });

  await page.goto("/projects/proj_unavailable_e04_f2");
  await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
    "data-unavailable-kind",
    "not_found",
    { timeout: 20000 },
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-unavailable-1680x970.png"),
    fullPage: false,
  });

  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify(
      {
        capturedAt: new Date().toISOString(),
        viewport: { width: 1680, height: 970 },
        projectName,
        projectId,
        frames: {
          travail: "652:8",
          projet: "652:58",
          journal: "652:108",
          unavailable: "652:158",
        },
        files: [
          "runtime-travail-1680x970.png",
          "runtime-travail-long-name-1680x970.png",
          "runtime-projet-overview-1680x970.png",
          "runtime-journal-nav-1680x970.png",
          "runtime-unavailable-1680x970.png",
          "dom-measures-travail.json",
        ],
        figmaReference: {
          viewport: { width: 1680, height: 970 },
          railPx: 246,
          conversationPx: 968,
          asidePx: 369,
          columnGapPx: 25,
          headerPx: 70,
        },
        measures,
      },
      null,
      2,
    ),
  );
});
