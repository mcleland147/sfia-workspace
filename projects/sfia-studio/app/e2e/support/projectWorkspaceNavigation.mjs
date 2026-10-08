/**
 * ESM twin of projectWorkspaceNavigation.ts for Node capture scripts.
 * Keep behavior in sync with the TypeScript helper.
 */

const TAB_VIEWS = new Set(["conversation", "overview", "execution"]);

const SURFACE_TESTID = {
  conversation: "project-conversation-main",
  overview: "project-overview-surface",
  execution: "project-execution-surface",
  journal: "project-journal-surface",
  history: "project-history-panel",
  syntheses: "project-syntheses-surface",
};

const SHORTCUT_TESTID = {
  journal: "project-shortcut-journal",
  history: "project-shortcut-history",
  syntheses: "project-shortcut-syntheses",
};

const OVERVIEW_LINK_LABEL = {
  journal: "Journal",
  history: "Historique",
  syntheses: "Synthèses",
};

export async function waitForWorkspaceView(page, view, timeout = 45_000) {
  await page.getByTestId("project-principal").waitFor({ state: "attached", timeout });
  await page.waitForFunction(
    (expected) =>
      document
        .querySelector('[data-testid="project-principal"]')
        ?.getAttribute("data-active-view") === expected,
    view,
    { timeout },
  );
  await page.getByTestId(SURFACE_TESTID[view]).waitFor({ state: "visible", timeout });
}

async function ensureContextShortcutsVisible(page) {
  const journalShortcut = page.getByTestId("project-shortcut-journal");
  if (await journalShortcut.isVisible().catch(() => false)) return;
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

async function openViaOverviewMobileLinks(page, view) {
  await page.getByTestId("project-tab-overview").click();
  await waitForWorkspaceView(page, "overview");
  const links = page.getByTestId("project-overview-mobile-links");
  if (await links.isVisible().catch(() => false)) {
    await links.getByRole("button", { name: OVERVIEW_LINK_LABEL[view] }).click();
    return;
  }
  await page.getByRole("button", { name: OVERVIEW_LINK_LABEL[view] }).first().click();
}

async function returnToConversation(page, timeout) {
  const back = page.getByTestId("project-journal-return-conversation");
  if (await back.isVisible().catch(() => false)) {
    await back.click();
    await waitForWorkspaceView(page, "conversation", timeout);
    return;
  }
  const historyBack = page.getByTestId("project-history-return-conversation");
  if (await historyBack.isVisible().catch(() => false)) {
    await historyBack.click();
    await waitForWorkspaceView(page, "conversation", timeout);
    return;
  }
  const synBack = page.getByTestId("project-syntheses-return-conversation");
  if (await synBack.isVisible().catch(() => false)) {
    await synBack.click();
    await waitForWorkspaceView(page, "conversation", timeout);
    return;
  }
  const tab = page.getByTestId("project-tab-conversation");
  if (await tab.isVisible().catch(() => false)) {
    await tab.click();
    await waitForWorkspaceView(page, "conversation", timeout);
    return;
  }
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.getByTestId("project-workspace-layout").waitFor({ timeout });
  await waitForWorkspaceView(page, "conversation", timeout);
}

export async function openProjectWorkspaceView(page, view, options = {}) {
  const timeout = options.timeout ?? 45_000;
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.getByTestId("project-workspace-layout").waitFor({ timeout });

  if (TAB_VIEWS.has(view)) {
    // May need to leave principal-only view first.
    const current = await page
      .getByTestId("project-principal")
      .getAttribute("data-active-view");
    if (
      current &&
      current !== view &&
      (current === "journal" || current === "history" || current === "syntheses")
    ) {
      await returnToConversation(page, timeout);
    }
    await page.getByTestId(`project-tab-${view}`).click();
    await waitForWorkspaceView(page, view, timeout);
    return;
  }

  const current = await page
    .getByTestId("project-principal")
    .getAttribute("data-active-view");
  if (current !== "conversation") {
    await returnToConversation(page, timeout);
  }

  await ensureContextShortcutsVisible(page);
  const shortcutId = SHORTCUT_TESTID[view];
  const shortcut = page.getByTestId(shortcutId);
  if (await shortcut.isVisible().catch(() => false)) {
    await shortcut.click();
  } else {
    await openViaOverviewMobileLinks(page, view);
  }

  await waitForWorkspaceView(page, view, timeout);
}
