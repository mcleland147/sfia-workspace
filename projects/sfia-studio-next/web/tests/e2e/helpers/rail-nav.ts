import { expect, type Locator, type Page } from "@playwright/test";

export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

/**
 * CI-hardened rail surface switch: force-click + wait for URL (retry once).
 * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
 */
export async function goRailSurface(
  page: Page,
  surface: ProjectSurface,
  opts?: { timeoutMs?: number },
): Promise<void> {
  const timeout = opts?.timeoutMs ?? 15_000;
  const nav = page.getByTestId("studio-rail").getByTestId(`nav-${surface}`);
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    await nav.click({ force: true });
    try {
      await expect(page).toHaveURL(new RegExp(`surface=${surface}`), {
        timeout: attempt === 1 ? 8_000 : timeout,
      });
      return;
    } catch (err) {
      if (attempt === 2) throw err;
    }
  }
}

/**
 * Journal return: close Travail viewer if open (blocks surface switch on CI),
 * then rail-nav until project-journal mounts.
 */
export async function goJournalReady(
  page: Page,
  opts?: { timeoutMs?: number },
): Promise<Locator> {
  const timeout = opts?.timeoutMs ?? 30_000;
  const viewerClose = page.getByTestId("travail-viewer-close");
  if (await viewerClose.isVisible().catch(() => false)) {
    await viewerClose.click();
    await expect(page.getByTestId("travail-viewer")).toHaveCount(0, {
      timeout: 10_000,
    });
  }
  await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  const journal = page.getByTestId("project-journal");
  if (!(await journal.isVisible().catch(() => false))) {
    await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  }
  await expect(journal).toBeVisible({ timeout });
  return journal;
}
