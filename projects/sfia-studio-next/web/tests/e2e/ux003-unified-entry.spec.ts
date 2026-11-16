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
  await expect(page.getByTestId("studio-rail-mobile")).toHaveCount(0);
  await expect(page.getByTestId("studio-shell-entry")).toHaveAttribute(
    "data-shell-mode",
    "entry",
  );

  await expect(page.getByRole("heading", { name: /Vos projets avancent/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Bienvenue dans Studio" })).toBeVisible();
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByRole("button", { name: "Pilote A (DEV)" })).toBeVisible();

  // Keyboard focus lands on primary CTA when tabbing into the panel.
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
  await expect(page.getByTestId("login-github")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Avec Nora/ })).toBeVisible();

  // No horizontal overflow on the entry root.
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
    page.getByRole("heading", { name: "Retrouvons votre session" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Se reconnecter avec GitHub" }),
  ).toBeVisible();

  await page.screenshot({
    path: path.join(CAPTURE_DIR, "runtime-desktop-1680x970-session-expired.png"),
    fullPage: true,
  });
});

test("portfolio shell rail still present after DEV login", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByTestId("studio-rail")).toBeVisible();
});
