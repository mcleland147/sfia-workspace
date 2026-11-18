import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * UX-05 — real UAT-07 RECETTE shape (exclusive gate/suite, single revue path).
 * DEV/e2e fixture lane only — no LIVE Nora.
 */
test.describe("Ensemble 05 UAT-07 UX-05", () => {
  test("real UAT-07 composition: unique nodes, gate→suite chain, full diagram shot", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora/ensemble05-ux05-01-final-20261118/screenshots",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "Ensemble 05 UAT-07 UX-05",
      name: `E05 UAT07 ${Date.now()}`,
      summary: "ux05 real shape",
    });

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");
    await draft.fill("E05_UAT07_REAL");
    await send.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
      timeout: 45000,
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const parallel = page.getByTestId("nora-composition-parallel").last();
    await expect(parallel).toBeVisible({ timeout: 45000 });
    await expect(parallel).toHaveAttribute("data-layout-engine", "elkjs", { timeout: 15000 });
    await expect(parallel).toHaveAttribute("data-node-count", "6");

    const nodeIds = await parallel.locator(".fig-nc-elk-node").evaluateAll((els) =>
      els.map((el) => (el as HTMLElement).dataset.nodeId ?? el.getAttribute("data-node-id") ?? ""),
    );
    const cleaned = nodeIds.filter(Boolean);
    expect(new Set(cleaned).size).toBe(cleaned.length);
    expect(cleaned.filter((id) => id === "revue")).toHaveLength(1);
    expect(cleaned.filter((id) => id === "synchronisation")).toHaveLength(1);
    expect(cleaned).toContain("lancement");

    const positions = await parallel.locator(".fig-nc-elk-node").evaluateAll((els) =>
      els.map((el) => {
        const h = el as HTMLElement;
        return {
          id: h.dataset.nodeId ?? h.getAttribute("data-node-id") ?? "",
          x: Number(h.dataset.laidX ?? 0),
          y: Number(h.dataset.laidY ?? 0),
          label: (h.textContent ?? "").trim().slice(0, 80),
        };
      }),
    );
    const byId = Object.fromEntries(positions.map((p) => [p.id, p]));
    expect(byId.synchronisation.y).toBeGreaterThan(byId.infrastructure.y + 20);
    expect(byId.revue.y).toBeGreaterThan(byId.synchronisation.y);
    expect(byId.lancement.y).toBeGreaterThan(byId.revue.y);

    const connectors = page.getByTestId("nora-composition-parallel-connectors").last();
    await expect(connectors).toBeVisible();

    // Viewport crop of the board.
    await parallel.evaluate((el) => el.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(300);
    await parallel.screenshot({
      path: path.join(evidenceDir, "uat07-parallel-viewport-1440.png"),
      animations: "disabled",
    });

    // Full diagram: expand scrollWidth capture via element screenshot (includes overflow).
    const canvas = page.getByTestId("nora-composition-elk-canvas").last();
    await expect(canvas).toBeVisible();
    const box = await canvas.boundingBox();
    expect(box).toBeTruthy();
    const scroll = await canvas.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      scrollHeight: el.scrollHeight,
    }));
    // Horizontal scroll is accepted when the diagram exceeds the column.
    fs.writeFileSync(
      path.join(evidenceDir, "uat07-scroll-metrics.json"),
      JSON.stringify({ box, scroll, positions }, null, 2),
    );

    // Assemble proof: scroll to end then capture again if overflow.
    if (scroll.scrollWidth > scroll.clientWidth + 8) {
      await canvas.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
      });
      await page.waitForTimeout(200);
      await parallel.screenshot({
        path: path.join(evidenceDir, "uat07-parallel-scrolled-right-1440.png"),
        animations: "disabled",
      });
      await canvas.evaluate((el) => {
        el.scrollLeft = 0;
      });
    }

    // Element-level full board (Playwright clips to layout size of the node).
    await parallel.screenshot({
      path: path.join(evidenceDir, "uat07-parallel-full-element-1440.png"),
      animations: "disabled",
    });

    // UX-01 — icon vs first title line geometry on intro / recommendation.
    const assistant = page.getByTestId("nora-msg-assistant").last();
    await assistant.scrollIntoViewIfNeeded();
    const iconPairs = await assistant.evaluate((root) => {
      const rows: Array<{
        role: string;
        iconTop: number;
        textTop: number;
        delta: number;
      }> = [];
      const pick = (iconSel: string, textSel: string, role: string) => {
        const icon = root.querySelector(iconSel) as HTMLElement | null;
        const text = root.querySelector(textSel) as HTMLElement | null;
        if (!icon || !text) return;
        icon.scrollIntoView({ block: "center", inline: "nearest" });
        text.scrollIntoView({ block: "center", inline: "nearest" });
        const ib = icon.getBoundingClientRect();
        const tb = text.getBoundingClientRect();
        // Skip pairs still outside the viewport (virtualized / scrolled composition).
        if (ib.bottom < 0 || tb.bottom < 0 || ib.top > window.innerHeight || tb.top > window.innerHeight) {
          return;
        }
        rows.push({ role, iconTop: ib.top, textTop: tb.top, delta: ib.top - tb.top });
      };
      pick(".fig-visual-text-icon", ".fig-visual-text-body > :first-child", "text-with-icon");
      pick(
        ".fig-visual-recommendation > .fig-visual-icon",
        ".fig-visual-recommendation-body > :first-child",
        "recommendation",
      );
      pick(".fig-visual-title > .fig-visual-icon", ".fig-visual-title > span", "title");
      return rows;
    });
    fs.writeFileSync(
      path.join(evidenceDir, "ux01-icon-align-geometry.json"),
      JSON.stringify(iconPairs, null, 2),
    );
    expect(iconPairs.length).toBeGreaterThan(0);
    for (const row of iconPairs) {
      // Optical settle allows ~0–4px; reject large misalignment.
      expect(Math.abs(row.delta)).toBeLessThanOrEqual(4);
    }
    await assistant.getByTestId("nora-visual-composition").screenshot({
      path: path.join(evidenceDir, "ux01-composition-icon-align-1440.png"),
      animations: "disabled",
    });
  });
});
