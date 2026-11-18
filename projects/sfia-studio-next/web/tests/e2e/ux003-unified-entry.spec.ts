import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const CAPTURE_DIR = path.join(
  process.cwd(),
  "..",
  "..",
  "..",
  ".tmp-sfia-review",
  "runtime-captures",
);

test.beforeAll(() => {
  fs.mkdirSync(CAPTURE_DIR, { recursive: true });
});

test("login entry renders without project rail (desktop nominal)", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");

  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
  await expect(page.getByTestId("unified-studio-entry")).toHaveAttribute(
    "data-entry-variant",
    "nominal",
  );
  await expect(page.getByTestId("studio-rail")).toHaveCount(0);
  await expect(page.getByTestId("studio-shell-entry")).toHaveAttribute(
    "data-shell-mode",
    "entry",
  );
  await expect(page.getByRole("heading", { name: /Vos projets avancent/ })).toBeVisible();
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByTestId("login-dev-access")).toBeVisible();
  await expect(page.getByRole("button", { name: "Pilote A (DEV)" })).toBeVisible();

  await page.getByTestId("login-github").focus();
  await expect(page.getByTestId("login-github")).toBeFocused();

  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-nominal.png"),
    fullPage: true,
  });
});

test("login entry mobile nominal composition", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/login");
  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
  const overflow = await page.evaluate(() => {
    const el = document.querySelector("[data-testid='unified-studio-entry']");
    if (!el) return true;
    return el.scrollWidth > el.clientWidth + 1;
  });
  expect(overflow).toBe(false);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-mobile-390x844-nominal.png"),
    fullPage: true,
  });
});

test("login entry tiny viewport 320x568 stays usable", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/login");
  await expect(page.getByTestId("login-github")).toBeVisible();
  const overflow = await page.evaluate(() => {
    const el = document.querySelector("[data-testid='unified-studio-entry']");
    if (!el) return true;
    return el.scrollWidth > el.clientWidth + 1;
  });
  expect(overflow).toBe(false);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-mobile-320x568-nominal.png"),
    fullPage: true,
  });
});

test("session_expired variant via deterministic reason query", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login?reason=session_expired");
  await expect(page.getByTestId("unified-studio-entry")).toHaveAttribute(
    "data-entry-variant",
    "session_expired",
  );
  await expect(page.getByText("SESSION EXPIRÉE", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Se reconnecter avec GitHub" }),
  ).toBeVisible();
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-session-expired.png"),
    fullPage: true,
  });
});

test("OAuth unavailable shows full error outside auth panel", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        configured: false,
        testLoginAvailable: true,
        status: "BLOCKED",
      }),
    });
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  const notice = page.getByTestId("login-notice");
  await expect(notice).toBeVisible();
  await expect(notice).toContainText(/indisponible/i);
  // Must not be clipped by the fixed auth panel.
  const fullyVisible = await notice.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const panel = document.querySelector("[data-testid='unified-entry-auth-panel']");
    const pr = panel?.getBoundingClientRect();
    if (!pr) return false;
    return r.bottom <= window.innerHeight && r.top >= pr.bottom - 1;
  });
  expect(fullyVisible).toBe(true);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-oauth-unavailable.png"),
    fullPage: true,
  });
});

test("long error message is not truncated", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  const longMsg =
    "La connexion GitHub n’a pas pu démarrer. " +
    "Diagnostic opératoire : le fournisseur d’identité a refusé l’initialisation du flux. ".repeat(
      6,
    ) +
    "Aucun secret n’est affiché. Réessayez plus tard.";
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: true, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/auth/sign-in/social", async (route) => {
    await route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ error: longMsg }),
    });
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  const notice = page.getByTestId("login-notice");
  await expect(notice).toBeVisible();
  const box = await notice.boundingBox();
  expect(box).toBeTruthy();
  expect((box?.height ?? 0) > 40).toBe(true);
  const clipped = await notice.evaluate((el) => {
    return el.scrollHeight > el.clientHeight + 2;
  });
  expect(clipped).toBe(false);
  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-long-error.png"),
    fullPage: true,
  });
});

test("network failure shows user-safe error", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: true, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/auth/sign-in/social", async (route) => {
    await route.abort("failed");
  });
  await page.goto("/login");
  await page.getByTestId("login-github").click();
  await expect(page.getByTestId("login-notice")).toContainText(
    /Impossible de joindre le service/i,
  );
});

test("unauthenticated / redirects to /login", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL("**/login");
  await expect(page.getByTestId("unified-studio-entry")).toBeVisible();
});

test("portfolio shell rail still present after DEV login", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByTestId("login-dev-access")).toBeVisible();
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByTestId("studio-rail")).toBeVisible();
});

test("DEV login refused when API forbids", async ({ page }) => {
  await page.route("**/api/auth/status", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ configured: false, testLoginAvailable: true }),
    });
  });
  await page.route("**/api/dev/login", async (route) => {
    await route.fulfill({
      status: 403,
      contentType: "application/json",
      body: JSON.stringify({ error: "DEV_TEST_LOGIN_DISABLED" }),
    });
  });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await expect(page.getByTestId("login-notice")).toContainText(
    /Accès de test indisponible/i,
  );
  await expect(page).toHaveURL(/\/login/);
});
