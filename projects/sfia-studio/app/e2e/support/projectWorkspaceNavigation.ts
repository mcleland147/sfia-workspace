/**
 * P5-S08-4 — navigate ProjectWorkspace principal views for visual capture / E2E.
 * Journal · Historique · Synthèses are NOT top-level tabs; use context shortcuts
 * (or Aperçu mobile links as fallback). Always wait for surface testid + data-active-view.
 */
import type { Page } from "@playwright/test";

export type ProjectWorkspacePrincipalView =
  | "conversation"
  | "overview"
  | "execution"
  | "journal"
  | "history"
  | "syntheses";

const TAB_VIEWS: ReadonlySet<ProjectWorkspacePrincipalView> = new Set([
  "conversation",
  "overview",
  "execution",
]);

const SURFACE_TESTID: Record<ProjectWorkspacePrincipalView, string> = {
  conversation: "project-conversation-main",
  overview: "project-overview-surface",
  execution: "project-execution-surface",
  journal: "project-journal-surface",
  history: "project-history-panel",
  syntheses: "project-syntheses-surface",
};

const SHORTCUT_TESTID: Partial<
  Record<ProjectWorkspacePrincipalView, string>
> = {
  journal: "project-shortcut-journal",
  history: "project-shortcut-history",
  syntheses: "project-shortcut-syntheses",
};

const OVERVIEW_LINK_LABEL: Record<
  Exclude<ProjectWorkspacePrincipalView, "conversation" | "overview" | "execution">,
  string
> = {
  journal: "Journal",
  history: "Historique",
  syntheses: "Synthèses",
};

/** Fail closed when the ephemeral view has not committed in the shell. */
export async function waitForWorkspaceView(
  page: Page,
  view: ProjectWorkspacePrincipalView,
  timeout = 45_000,
): Promise<void> {
  await page.getByTestId("project-principal").waitFor({ state: "attached", timeout });
  await page.waitForFunction(
    (expected) =>
      document.querySelector('[data-testid="project-principal"]')?.getAttribute("data-active-view") ===
      expected,
    view,
    { timeout },
  );
  await page.getByTestId(SURFACE_TESTID[view]).waitFor({ state: "visible", timeout });
}

async function ensureContextShortcutsVisible(page: Page): Promise<void> {
  const journalShortcut = page.getByTestId("project-shortcut-journal");
  if (await journalShortcut.isVisible().catch(() => false)) {
    return;
  }
  const mobileOpen = page.getByTestId("project-mobile-open-context");
  if (await mobileOpen.isVisible().catch(() => false)) {
    await mobileOpen.click();
    await journalShortcut.waitFor({ state: "visible", timeout: 15_000 });
    return;
  }
  const lpsToggle = page.getByTestId("lps-drawer-toggle");
  if (await lpsToggle.isVisible().catch(() => false)) {
    await lpsToggle.click();
    await journalShortcut.waitFor({ state: "visible", timeout: 15_000 });
  }
}

async function openViaOverviewMobileLinks(
  page: Page,
  view: Exclude<ProjectWorkspacePrincipalView, "conversation" | "overview" | "execution">,
): Promise<void> {
  await page.getByTestId("project-tab-overview").click();
  await waitForWorkspaceView(page, "overview");
  const links = page.getByTestId("project-overview-mobile-links");
  if (await links.isVisible().catch(() => false)) {
    await links.getByRole("button", { name: OVERVIEW_LINK_LABEL[view] }).click();
    return;
  }
  await page
    .getByRole("button", { name: OVERVIEW_LINK_LABEL[view] })
    .first()
    .click();
}

/**
 * Opens a workspace view and waits until the matching surface testid is visible.
 * Prevents S08-4A false captures (e.g. Exécution while targeting Journal).
 */
export async function openProjectWorkspaceView(
  page: Page,
  view: ProjectWorkspacePrincipalView,
  options?: { timeout?: number },
): Promise<void> {
  const timeout = options?.timeout ?? 45_000;
  // LARGE band: primary tabs + context shortcuts are visible; principal-only
  // views (journal/history/syntheses) hide tabs on smaller viewports.
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.getByTestId("project-workspace-layout").waitFor({ timeout });

  if (TAB_VIEWS.has(view)) {
    await page.getByTestId(`project-tab-${view}`).click();
    await waitForWorkspaceView(page, view, timeout);
    return;
  }

  const current = await page
    .getByTestId("project-principal")
    .getAttribute("data-active-view");

  if (current !== "conversation") {
    const journalBack = page.getByTestId("project-journal-return-conversation");
    if (await journalBack.isVisible().catch(() => false)) {
      await journalBack.click();
    } else if (await page.getByTestId("project-tab-conversation").isVisible().catch(() => false)) {
      await page.getByTestId("project-tab-conversation").click();
    } else {
      // History/Syntèses hide primary tabs — reload lands on conversation default.
      await page.reload({ waitUntil: "domcontentloaded" });
      await page.getByTestId("project-workspace-layout").waitFor({ timeout });
    }
    await waitForWorkspaceView(page, "conversation", timeout);
  }

  await ensureContextShortcutsVisible(page);
  const shortcutId = SHORTCUT_TESTID[view];
  if (!shortcutId) {
    throw new Error(`No shortcut mapping for view "${view}"`);
  }

  const shortcut = page.getByTestId(shortcutId);
  if (await shortcut.isVisible().catch(() => false)) {
    await shortcut.click();
  } else {
    await openViaOverviewMobileLinks(page, view);
  }

  await waitForWorkspaceView(page, view, timeout);
}
