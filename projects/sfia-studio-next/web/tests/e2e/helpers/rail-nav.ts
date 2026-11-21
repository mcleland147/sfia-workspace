import { expect, type Locator, type Page } from "@playwright/test";

export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

async function readProjectSurface(page: Page): Promise<string | null> {
  return page
    .getByTestId("project-load-state")
    .getAttribute("data-project-surface")
    .catch(() => null);
}

/**
 * CI-hardened rail surface switch: force-click + wait for URL *and* React surface.
 * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
 *
 * When the URL already shows the target surface but React `data-project-surface`
 * differs (document-from-Journal desync), a same-URL Link click is a no-op —
 * bounce via another rail surface first so the target navigation is real.
 */
export async function goRailSurface(
  page: Page,
  surface: ProjectSurface,
  opts?: { timeoutMs?: number },
): Promise<void> {
  const timeout = opts?.timeoutMs ?? 15_000;
  const nav = page.getByTestId("studio-rail").getByTestId(`nav-${surface}`);
  const load = page.getByTestId("project-load-state");
  const urlRe = new RegExp(`surface=${surface}`);
  const bounce: ProjectSurface = surface === "travail" ? "projet" : "travail";

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const urlHasTarget = urlRe.test(page.url());
    const current = await readProjectSurface(page);
    if (urlHasTarget && current !== surface) {
      const bounceNav = page.getByTestId("studio-rail").getByTestId(`nav-${bounce}`);
      await bounceNav.click({ force: true });
      try {
        await expect(page).toHaveURL(new RegExp(`surface=${bounce}`), {
          timeout: attempt === 1 ? 8_000 : timeout,
        });
        await expect(load).toHaveAttribute("data-project-surface", bounce, {
          timeout: attempt === 1 ? 8_000 : timeout,
        });
      } catch {
        // Fall through to a direct target click below.
      }
    }
    await nav.click({ force: true });
    try {
      await expect(page).toHaveURL(urlRe, {
        timeout: attempt === 1 ? 8_000 : timeout,
      });
      await expect(load).toHaveAttribute("data-project-surface", surface, {
        timeout: attempt === 1 ? 8_000 : timeout,
      });
      return;
    } catch (err) {
      if (attempt === 3) throw err;
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
