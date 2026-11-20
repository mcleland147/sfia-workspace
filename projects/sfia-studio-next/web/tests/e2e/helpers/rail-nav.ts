import { expect, type Locator, type Page } from "@playwright/test";

export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

/**
 * CI-hardened rail surface switch: force-click + wait for URL + shell surface attr.
 * Soft clicks under Playwright FAKE load can miss; URL can also commit before React.
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
      break;
    } catch (err) {
      if (attempt === 2) throw err;
    }
  }
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    surface,
    { timeout },
  );
}

/** Journal return: URL/shell + project-journal mount (retry rail once if shell lags). */
export async function goJournalReady(
  page: Page,
  opts?: { timeoutMs?: number },
): Promise<Locator> {
  const timeout = opts?.timeoutMs ?? 30_000;
  await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  const journal = page.getByTestId("project-journal");
  if (!(await journal.isVisible().catch(() => false))) {
    await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  }
  await expect(journal).toBeVisible({ timeout });
  return journal;
}
