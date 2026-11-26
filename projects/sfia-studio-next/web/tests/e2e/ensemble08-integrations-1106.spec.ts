/**
 * E08 POST-UAT 02 — Intégrations 11.06 (DEV SCRIPTED).
 * Does not prove GitHub REAL mutations or Morris OAuth.
 */
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const evidenceDir = path.resolve(
  __dirname,
  "../../../construction/ensemble-08-git-et-publications/figma-evidence",
);
const runtimeDir = path.join(evidenceDir, "runtime");

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function ensureConnected(page: import("@playwright/test").Page) {
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible({ timeout: 20_000 });
  if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("disconnect-github")).toBeVisible({ timeout: 20_000 });
  }
}

test.describe("E08 Intégrations 11.06 (SCRIPTED DEV)", () => {
  test("connected composition + secondary actions + nav active", async ({ page }) => {
    test.setTimeout(180_000);
    await loginPilotA(page);
    await ensureConnected(page);

    await page.getByTestId("rail-settings-trigger").click();
    await expect(page.getByTestId("rail-settings-integrations")).toHaveClass(/is-active/);
    await expect(page.getByTestId("integrations-status-banner")).toContainText(
      /Votre compte GitHub est connecté/i,
    );
    await expect(page.getByTestId("refresh-repos")).toHaveText(/Actualiser les accès/i);
    await expect(page.getByTestId("disconnect-github")).toHaveText(/Déconnecter GitHub/i);
    await expect(page.getByTestId("integrations-explain-column")).toContainText(
      /À propos de votre connexion/i,
    );
    await expect(page.getByTestId("integrations-explain-column")).toContainText(
      /Publier avec Nora/i,
    );
    await expect(page.getByTestId("integrations-write-boundary")).toBeVisible();

    // Buttons are real secondary controls (enabled when not busy)
    await expect(page.getByTestId("refresh-repos")).toBeEnabled();
    await expect(page.getByTestId("disconnect-github")).toBeEnabled();

    // Keyboard: focus refresh
    await page.getByTestId("refresh-repos").focus();
    await expect(page.getByTestId("refresh-repos")).toBeFocused();
  });

  test("disconnect confirm cancel restores panel (11.07)", async ({ page }) => {
    test.setTimeout(120_000);
    await loginPilotA(page);
    await ensureConnected(page);
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await page.getByTestId("disconnect-github-cancel").click();
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    await expect(page.getByTestId("disconnect-github")).toBeVisible();
  });

  test("viewports + G5 geometry measures (connected)", async ({ page }) => {
    test.setTimeout(240_000);
    fs.mkdirSync(runtimeDir, { recursive: true });
    await loginPilotA(page);
    await ensureConnected(page);

    const viewports = [
      { w: 1680, h: 970, name: "1680x970" },
      { w: 1280, h: 970, name: "1280x970" },
      { w: 390, h: 844, name: "390x844" },
      { w: 320, h: 568, name: "320x568" },
    ] as const;

    const measures: Record<string, unknown> = {
      figmaFrame: { w: 1680, h: 970, nodeId: "1095:339" },
      figmaPngSha256:
        "d50412edb6951be57feeef38d7a483aab945fef502a04b026fe8104513ba6335",
      capturedAt: new Date().toISOString(),
      regions: {},
    };

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto("/settings/integrations");
      await expect(page.getByTestId("integrations-panel")).toBeVisible({ timeout: 20_000 });
      await page.waitForTimeout(400);
      const shot = path.join(runtimeDir, `runtime-11.06-integrations-${vp.name}.png`);
      await page.screenshot({ path: shot, fullPage: false });

      if (vp.w === 1680) {
        await page.getByTestId("rail-settings-trigger").click();
        const panel = page.getByTestId("integrations-panel");
        const layout = page.getByTestId("integrations-layout-1106");
        const banner = page.getByTestId("integrations-status-banner");
        const github = page.getByTestId("github-integration-card");
        const aside = page.getByTestId("integrations-explain-column");
        const refresh = page.getByTestId("refresh-repos");
        const disconnect = page.getByTestId("disconnect-github");
        const rail = page.getByTestId("studio-rail");
        const nav = page.getByTestId("rail-settings-integrations");

        const boxes = {
          rail: await rail.boundingBox(),
          navIntegrations: await nav.boundingBox(),
          panel: await panel.boundingBox(),
          layout: await layout.boundingBox(),
          banner: await banner.boundingBox(),
          githubCard: await github.boundingBox(),
          explainColumn: await aside.boundingBox(),
          refreshBtn: await refresh.boundingBox(),
          disconnectBtn: await disconnect.boundingBox(),
        };
        (measures.regions as Record<string, unknown>)[vp.name] = boxes;

        // F2 structural expectations at 1680×970 (shell + content)
        expect(boxes.rail?.width ?? 0).toBeGreaterThanOrEqual(244);
        expect(boxes.rail?.width ?? 0).toBeLessThanOrEqual(248);
        expect(boxes.banner?.width ?? 0).toBeGreaterThan(1000);
        expect(boxes.banner?.height ?? 0).toBeGreaterThanOrEqual(42);
        expect(boxes.banner?.height ?? 0).toBeLessThanOrEqual(48);
        expect(boxes.githubCard?.width ?? 0).toBeGreaterThan(500);
        expect(boxes.explainColumn?.width ?? 0).toBeGreaterThan(280);
        // Figma 11.06 panels h=610; may grow with write-note / extra repos
        expect(boxes.githubCard?.height ?? 0).toBeGreaterThanOrEqual(608);
        expect(boxes.explainColumn?.height ?? 0).toBeGreaterThanOrEqual(608);
        expect(Math.abs((boxes.githubCard?.y ?? 0) - 293)).toBeLessThanOrEqual(2);
        expect(boxes.refreshBtn?.height ?? 0).toBeGreaterThanOrEqual(40);
        expect(boxes.disconnectBtn?.height ?? 0).toBeGreaterThanOrEqual(40);

        const bannerStyles = await banner.evaluate((el) => {
          const s = getComputedStyle(el);
          return {
            backgroundColor: s.backgroundColor,
            color: s.color,
            borderRadius: s.borderRadius,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
          };
        });
        (measures.regions as Record<string, unknown>)["1680x970-banner-computed"] = bannerStyles;
      }
    }

    // Zoom 200% on reference viewport
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.evaluate(() => {
      document.documentElement.style.zoom = "2";
    });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(runtimeDir, "runtime-11.06-integrations-1680x970-zoom200.png"),
      fullPage: false,
    });
    await page.evaluate(() => {
      document.documentElement.style.zoom = "1";
    });

    fs.writeFileSync(
      path.join(runtimeDir, "runtime-11.06-dom-measures.json"),
      JSON.stringify(measures, null, 2),
    );
  });
});
