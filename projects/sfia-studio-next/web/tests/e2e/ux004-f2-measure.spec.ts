import { test, expect } from "@playwright/test";

/**
 * UX-004 F2 — stable geometry vs current shell CSS (px).
 * Topbar height follows `.studio-shell-topbar { height: 72px }` (ML4D shell).
 * Target 0 ; max tolerance 2 CSS px on comparable rectangles.
 */

test("F2: personnel rail 246, topbar ~72, mobile bottom ~72", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const rail = page.getByTestId("studio-rail");
  await expect(rail).toHaveAttribute("data-rail-width", "246");
  const railBox = await rail.boundingBox();
  expect(railBox).toBeTruthy();
  expect(Math.abs(railBox!.width - 246)).toBeLessThanOrEqual(2);
  expect(Math.abs(railBox!.height - 970)).toBeLessThanOrEqual(2);

  const top = page.getByTestId("studio-shell-topbar");
  const topBox = await top.boundingBox();
  expect(topBox).toBeTruthy();
  expect(Math.abs(topBox!.height - 72)).toBeLessThanOrEqual(2);

  await page.setViewportSize({ width: 390, height: 844 });
  const bottom = page.getByTestId("studio-mobile-bottom-nav");
  await expect(bottom).toBeVisible();
  const bottomBox = await bottom.boundingBox();
  expect(bottomBox).toBeTruthy();
  // height includes safe-area; compare content band ~72
  expect(bottomBox!.height).toBeGreaterThanOrEqual(70);
  expect(bottomBox!.height).toBeLessThanOrEqual(100);
});
