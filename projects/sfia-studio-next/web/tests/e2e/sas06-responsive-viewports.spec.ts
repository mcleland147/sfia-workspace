import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect, type Page } from "@playwright/test";

/**
 * Ensemble 07 SAS06 — responsive contract:
 * - 1680×970: card 702×823, top padding equals vertical centering of that card.
 *   This is a geometry check of the implemented window, not an F2 verdict.
 * - 1280×720: CTA reachable via scroll; click navigates to project
 */
async function openSas06Popup(page: Page, seed: string) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill(seed);
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, {
    name: `SAS06 ${Date.now()}`,
    summary: "responsive proof",
  });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();
  await expect(page.getByTestId("sas-create-progress-popup")).toBeVisible({ timeout: 30000 });
}

test("SAS06 desktop 1680×970 uses the 823px window and centered padding", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await openSas06Popup(page, "SAS06 desktop geometry seed");

  const overlay = page.getByTestId("sas-create-progress-popup");
  const card = page.getByTestId("sas-create-progress-card");
  const dismiss = page.getByTestId("sas-create-progress-dismiss");

  const overlayBox = await overlay.boundingBox();
  const cardBox = await card.boundingBox();
  expect(overlayBox).toBeTruthy();
  expect(cardBox).toBeTruthy();

  const padTop = (cardBox!.y - (overlayBox!.y ?? 0));
  expect(Math.abs(padTop - (970 - 823) / 2)).toBeLessThanOrEqual(2);
  expect(Math.abs(cardBox!.width - 702)).toBeLessThanOrEqual(2);
  expect(Math.abs(cardBox!.height - 823)).toBeLessThanOrEqual(2);

  await expect(dismiss).toBeVisible();
  const dismissBox = await dismiss.boundingBox();
  expect(dismissBox).toBeTruthy();
  expect(dismissBox!.y + dismissBox!.height).toBeLessThanOrEqual(970 + 1);

  await dismiss.focus();
  await expect(dismiss).toBeFocused();
  await page.keyboard.press("Enter");
  await page.waitForURL("**/projects/**", { timeout: 30000 });
});

test("SAS06 short 1280×720 CTA reachable with scroll and click", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await openSas06Popup(page, "SAS06 short viewport seed");

  const overlay = page.getByTestId("sas-create-progress-popup");
  const card = page.getByTestId("sas-create-progress-card");
  const dismiss = page.getByTestId("sas-create-progress-dismiss");

  await expect(overlay).toBeVisible();
  await expect(card).toBeVisible();

  const overlayBox = await overlay.boundingBox();
  const cardBox = await card.boundingBox();
  expect(overlayBox).toBeTruthy();
  expect(cardBox).toBeTruthy();
  const padTop = cardBox!.y - (overlayBox!.y ?? 0);
  expect(padTop).toBeLessThan(73.5);
  expect(padTop).toBeGreaterThanOrEqual(14);

  await dismiss.scrollIntoViewIfNeeded();
  const dismissBox = await dismiss.boundingBox();
  expect(dismissBox).toBeTruthy();
  // After scroll, CTA intersects the viewport.
  expect(dismissBox!.y).toBeGreaterThanOrEqual(0);
  expect(dismissBox!.y).toBeLessThan(720);

  await dismiss.focus();
  await expect(dismiss).toBeFocused();
  await dismiss.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
});
