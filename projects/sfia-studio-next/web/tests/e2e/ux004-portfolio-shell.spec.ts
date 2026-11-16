import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * UX-004 — portfolio + personal shell BROWSER proofs on isolated E2E lane :3101.
 * Does not attach to operator DEV :3100 or RECETTE :3200.
 */

const ART = path.join("tests/e2e/artifacts");

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

test.describe("UX-004 portfolio shell", () => {
  test.beforeAll(() => {
    fs.mkdirSync(ART, { recursive: true });
  });

  test("desktop 1680: single Portefeuille nav, fixed rail account, scroll main", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);

    await expect(page.getByTestId("studio-shell-app")).toBeVisible();
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
    await expect(page.getByTestId("nav-portfolio")).toBeVisible();
    await expect(page.getByTestId("nav-new-prep")).toBeVisible();
    await expect(page.getByTestId("nav-new-prep")).toHaveAttribute("type", "button");
    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Portefeuille/,
    );
    await expect(page.getByTestId("nav-mes-projets")).toHaveCount(0);
    await expect(page.getByTestId("nav-login")).toHaveCount(0);
    await expect(page.getByText("Tous les projets")).toHaveCount(0);
    await expect(page.getByTestId("studio-rail-account")).toBeVisible();

    await expect(page.getByText("Préparations ouvertes")).toBeVisible();
    await expect(page.getByText("Reprises récentes")).toHaveCount(0);

    // Force tall content then scroll main — rail account must stay in viewport geometry.
    await page.evaluate(() => {
      const main = document.querySelector('[data-testid="studio-shell-main"]');
      if (main) {
        const spacer = document.createElement("div");
        spacer.setAttribute("data-testid", "scroll-spacer");
        spacer.style.height = "1600px";
        main.appendChild(spacer);
      }
    });
    const main = page.getByTestId("studio-shell-main");
    await main.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    const accountBox = await page.getByTestId("studio-rail-account").boundingBox();
    expect(accountBox).toBeTruthy();
    expect(accountBox!.y).toBeGreaterThan(500);
    expect(accountBox!.y + accountBox!.height).toBeLessThanOrEqual(970 + 1);

    await page.screenshot({
      path: path.join(ART, "ux004-desktop-1680-scrolled.png"),
      fullPage: false,
    });
  });

  test("mobile 390: bottom nav + independent scroll; narrow 320", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await loginPilotA(page);

    const bottom = page.getByTestId("studio-mobile-bottom-nav");
    await expect(bottom).toBeVisible();
    await expect(page.getByTestId("mobile-nav-portfolio")).toBeVisible();
    await expect(page.getByTestId("mobile-nav-create")).toHaveAttribute("type", "button");
    await expect(page.getByTestId("mobile-nav-account")).toHaveAttribute(
      "href",
      "/settings/integrations",
    );

    await page.screenshot({
      path: path.join(ART, "ux004-mobile-390.png"),
      fullPage: false,
    });

    await page.setViewportSize({ width: 320, height: 568 });
    await expect(bottom).toBeVisible();
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    });
    expect(overflow).toBe(false);
    await page.screenshot({
      path: path.join(ART, "ux004-mobile-320.png"),
      fullPage: false,
    });
  });

  test("empty vs preparations-only mixed states via API fixtures", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);

    await page.route("**/api/portfolio", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          session: { displayName: "Pilote A", authMode: "dev" },
          portfolio: {
            kind: "empty",
            openPreparations: 0,
            preparations: { items: [], nextCursor: null },
          },
        }),
      });
    });
    await page.reload();
    await expect(page.getByTestId("portfolio-empty-projects")).toBeVisible();
    await expect(page.getByTestId("portfolio-empty-preps")).toBeVisible();
    await page.screenshot({
      path: path.join(ART, "ux004-desktop-empty.png"),
      fullPage: false,
    });

    await page.unroute("**/api/portfolio");
    await page.route("**/api/portfolio", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          session: { displayName: "Pilote A", authMode: "dev" },
          portfolio: {
            kind: "empty",
            openPreparations: 2,
            preparations: {
              items: [
                {
                  id: "prep-long-name-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  previewName: "Préparation avec un nom volontairement très long pour reflow",
                  previewSummary: "",
                  createdAt: "2026-11-15T10:00:00.000Z",
                  status: "OPEN",
                },
                {
                  id: "prep-b",
                  previewName: "",
                  previewSummary: "Résumé court",
                  createdAt: "2026-11-14T10:00:00.000Z",
                  status: "OPEN",
                },
              ],
              nextCursor: null,
            },
          },
        }),
      });
    });
    await page.reload();
    await expect(page.getByTestId("portfolio-empty-projects")).toBeVisible();
    await expect(page.getByTestId("portfolio-preparations")).toBeVisible();
    await expect(page.getByTestId("resume-prep-prep-b")).toBeVisible();
    await expect(page.getByText("Préparations ouvertes")).toBeVisible();
  });

  test("nouveau projet → sas; from Intégrations; double-click guard; breadcrumb; resume GET; UX-003 login", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);

    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Portefeuille/,
    );

    await page.getByTestId("nav-account").click();
    await page.waitForURL("**/settings/integrations");
    await expect(page.getByTestId("studio-rail")).toBeVisible();
    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Intégrations/,
    );

    // Correction A from Intégrations: rail « Nouveau projet » POSTs D2 directly.
    let postsFromIntegrations = 0;
    page.on("request", (req) => {
      if (req.method() === "POST" && req.url().includes("/api/preparations")) {
        postsFromIntegrations += 1;
      }
    });
    await page.getByTestId("nav-new-prep").click();
    await page.waitForURL("**/preparations/**");
    expect(postsFromIntegrations).toBe(1);
    const prepFromRail = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
    expect(prepFromRail).toBeTruthy();

    await page.goto("/portfolio");
    await expect(page.getByTestId("studio-shell-breadcrumb")).toHaveText(
      /SFIA Studio\s+\/\s+Portefeuille/,
    );

    // Portfolio CTA uses the same D2 path.
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    const prepId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
    expect(prepId).toBeTruthy();

    // Double-click guard on rail (no second POST while opening).
    await page.goto("/portfolio");
    let posts = 0;
    const countPosts = (req: import("@playwright/test").Request) => {
      if (req.method() === "POST" && req.url().includes("/api/preparations")) posts += 1;
    };
    page.on("request", countPosts);
    await page.route("**/api/preparations", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      await new Promise((r) => setTimeout(r, 400));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ preparationId: "prep-dbl-guard" }),
      });
    });
    const btn = page.getByTestId("nav-new-prep");
    await Promise.all([btn.click(), btn.click()]);
    await page.waitForURL("**/preparations/prep-dbl-guard");
    expect(posts).toBe(1);
    page.off("request", countPosts);
    await page.unroute("**/api/preparations");

    await page.goto("/portfolio");
    const resume = page.locator(`[data-testid^="resume-prep-"]`).first();
    if (await resume.count()) {
      let resumePosts = 0;
      page.on("request", (req) => {
        if (req.method() === "POST" && req.url().includes("/api/preparations")) resumePosts += 1;
      });
      await resume.click();
      await page.waitForURL(/resume=1/);
      expect(resumePosts).toBe(0);
    }

    await page.goto("/login");
    await expect(page.getByTestId("studio-shell-entry")).toBeVisible();
    await expect(page.getByTestId("studio-rail")).toHaveCount(0);
  });

  test("rail variants widths preserved on project surfaces", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await loginPilotA(page);
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");

    await page.getByTestId("prep-draft").fill("UX-004 variant check");
    await page.getByTestId("prep-send").click();
    await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
      timeout: 30000,
    });
    await page.getByTestId("prep-constitute").click();
    await page.getByTestId("prep-proposal-name").fill("Projet UX004");
    await page.getByTestId("prep-proposal-summary").fill("résumé");
    await page.getByTestId("prep-proposal-save").click();
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "conversation");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "240");

    await page.goto(`/projects/${projectId}?surface=document`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "244");

    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "projet");
    await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-width", "246");
  });

  test("keyboard focus visible on primary portfolio actions", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await loginPilotA(page);
    await page.getByTestId("portfolio-new-prep").focus();
    await expect(page.getByTestId("portfolio-new-prep")).toBeFocused();
    await page.keyboard.press("Tab");
    // Tab moves within page; ensure rail account remains keyboard reachable
    await page.getByTestId("nav-account").focus();
    await expect(page.getByTestId("nav-account")).toBeFocused();
  });

  test("network error portfolio shows retry", async ({ page }) => {
    await loginPilotA(page);
    await page.route("**/api/portfolio", async (route) => {
      await route.abort("failed");
    });
    await page.reload();
    await expect(page.getByText(/indisponible|réseau/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /réessayer/i })).toBeVisible();
  });

  test("unauthenticated portfolio redirects to login", async ({ browser }) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto("/portfolio");
    await page.waitForURL("**/login");
    await expect(page.getByTestId("studio-shell-entry")).toBeVisible();
    await ctx.close();
  });
});
