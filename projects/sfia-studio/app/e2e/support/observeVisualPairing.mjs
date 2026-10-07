/**
 * Playwright page → RuntimeObservation for visual pairing contract.
 */

const MARKER_SELECTORS = {
  "studio-projects-home": '[data-testid="studio-projects-home"]',
  "studio-projects-list": '[data-testid="studio-projects-list"]',
  "studio-projects-recent": '[data-testid="studio-projects-recent"]',
  "studio-projects-empty": '[data-testid="studio-projects-empty"]',
  "studio-projects-loading": '[data-testid="studio-projects-loading"]',
  "create-project-form": '[data-testid="create-project-form"]',
  "new-project-clarification": '[data-testid="new-project-clarification"]',
  "create-project-submit": '[data-testid="create-project-submit"]',
  "project-workspace-layout": '[data-testid="project-workspace-layout"]',
  "project-workspace-loading": '[data-testid="project-workspace-loading"]',
  "project-conversation-main": '[data-testid="project-conversation-main"]',
  "project-assistant-panel": '[data-testid="project-assistant-panel"]',
  "governed-decision-card": '[data-testid="governed-decision-card"]',
  "governed-confirmation-card": '[data-testid="governed-confirmation-card"]',
  "governed-confirmation-scope": '[data-testid="governed-confirmation-scope"]',
  "governed-confirmation-impact": '[data-testid="governed-confirmation-impact"]',
  "governed-confirmation-reversibility":
    '[data-testid="governed-confirmation-reversibility"]',
  "project-syntheses-item": '[data-testid="project-syntheses-item"]',
  "project-syntheses-loading": '[data-testid="project-syntheses-loading"]',
  "login-surface": '[data-testid="login-surface"]',
};

/**
 * Detect Next.js dev Issues badge / overlay without relying on Product CSS hacks.
 */
export async function detectForbiddenOverlays(page) {
  return page.evaluate(() => {
    const forbidden = [];
    const issues =
      document.querySelector("nextjs-portal") ||
      document.querySelector("#__next-build-watcher") ||
      document.querySelector("[data-nextjs-toast]") ||
      document.querySelector("[data-nextjs-dialog]") ||
      document.querySelector("[data-next-mark]") ||
      [...document.querySelectorAll("button, a, div")].find((el) => {
        const t = (el.textContent || "").trim();
        return /^(?:\d+\s+)?Issues?$/i.test(t) && el.getBoundingClientRect().width > 0;
      });
    if (issues) forbidden.push("next-dev-issues-badge");

    const overlay =
      document.querySelector("#__next-dialog-overlay") ||
      document.querySelector("[data-nextjs-dialog-overlay]") ||
      document.querySelector("nextjs-portal [data-nextjs-dialog]");
    if (overlay) forbidden.push("next-dev-overlay");

    const err =
      document.querySelector("[data-testid='studio-runtime-error']") ||
      document.querySelector("#__next-error") ||
      document.body?.dataset?.nextjsError === "1";
    if (err) forbidden.push("runtime-error-overlay");

    if (
      document.body?.innerText?.includes("Persistance Product SQLite indisponible")
    ) {
      forbidden.push("sqlite-unavailable");
    }

    return forbidden;
  });
}

export async function observeVisualPairing(page, viewport) {
  const forbiddenPresent = await detectForbiddenOverlays(page);
  const snap = await page.evaluate((selectors) => {
    const present = [];
    for (const [id, sel] of Object.entries(selectors)) {
      if (document.querySelector(sel)) present.push(id);
    }
    const titleEl = document.querySelector('[data-testid="project-title"]');
    const headerH1 = document.querySelector(
      '[data-testid="project-header"] h1',
    );
    // Prefer data-project-name (bare Product identity) over branded display text.
    const projectName =
      titleEl?.getAttribute("data-project-name")?.trim() ||
      titleEl?.textContent?.replace(/^SFIA Studio\s*—\s*/i, "").trim() ||
      headerH1?.textContent?.replace(/^SFIA Studio\s*—\s*/i, "").trim() ||
      null;
    const activeView =
      document
        .querySelector("[data-active-view]")
        ?.getAttribute("data-active-view") || null;
    const collectPhase =
      document
        .querySelector("[data-collect-phase]")
        ?.getAttribute("data-collect-phase") || null;
    const m = location.pathname.match(/\/studio\/projects\/([^/]+)/);
    const projectId = m && m[1] !== "new" ? decodeURIComponent(m[1]) : null;
    return { present, projectName, activeView, collectPhase, projectId };
  }, MARKER_SELECTORS);

  return {
    url: page.url(),
    viewport,
    projectName: snap.projectName,
    projectId: snap.projectId,
    activeView: snap.activeView,
    present: snap.present,
    forbiddenPresent,
    collectPhase: snap.collectPhase,
  };
}
