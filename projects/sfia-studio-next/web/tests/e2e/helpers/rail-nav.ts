import { expect, type Page } from "@playwright/test";

export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

/**
 * CI-hardened rail surface switch: force-click + wait for URL.
 * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
 */
export async function goRailSurface(
  page: Page,
  surface: ProjectSurface,
  opts?: { timeoutMs?: number },
): Promise<void> {
  const timeout = opts?.timeoutMs ?? 15_000;
  await page
    .getByTestId("studio-rail")
    .getByTestId(`nav-${surface}`)
    .click({ force: true });
  await expect(page).toHaveURL(new RegExp(`surface=${surface}`), { timeout });
}
