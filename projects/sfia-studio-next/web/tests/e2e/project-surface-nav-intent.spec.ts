import { test, expect } from "@playwright/test";

/**
 * Discriminant: user rail navigation during in-flight project load must not
 * be overwritten by load() normalisation to ?surface=travail.
 *
 * Proof contract:
 * - hold first project GET until after Pilotage click;
 * - release GET;
 * - wait for observable project-load-state=ready (post surface sync);
 * - then assert URL + visible Pilotage surface.
 * No arbitrary sleep / timeout inflation as the fix.
 */
test("rail pilotage during delayed project load keeps surface=pilotage", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill("NAV intent race G4");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-proposal-name").fill("Projet NAV race");
  await page.getByTestId("prep-proposal-summary").fill("résumé nav");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByRole("button", { name: "Discussion", exact: true }).click();

  const deferred: { release: () => void } = {
    release: () => undefined,
  };
  const gate = new Promise<void>((resolve) => {
    deferred.release = resolve;
  });
  let holdFirstProjectGet = true;

  await page.route("**/api/projects/**", async (route) => {
    const url = route.request().url();
    const method = route.request().method();
    const isProjectRootGet =
      method === "GET" &&
      /\/api\/projects\/[^/?#]+\/?$/.test(new URL(url).pathname);
    if (isProjectRootGet && holdFirstProjectGet) {
      holdFirstProjectGet = false;
      await gate;
    }
    await route.continue();
  });

  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  // While load is still gated, click Pilotage (intent must outrank later normalisation).
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "loading",
  );
  const rail = page.getByTestId("studio-rail");
  await rail.getByTestId("nav-pilotage").click();

  deferred.release();

  // Wait until load()+surface sync finished — HTTP completion alone is not enough.
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
  );
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
  await expect(page).not.toHaveURL(/surface=travail/);
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "pilotage",
  );
});

test("rapid rail surface switches keep the last user intent", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill("NAV rapid surfaces");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-proposal-name").fill("Projet NAV rapid");
  await page.getByTestId("prep-proposal-summary").fill("résumé");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByRole("button", { name: "Discussion", exact: true }).click();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
  );

  const rail = page.getByTestId("studio-rail");
  await rail.getByTestId("nav-pilotage").click();
  await expect(page).toHaveURL(new RegExp(`surface=pilotage`));
  await rail.getByTestId("nav-journal").click();
  await expect(page).toHaveURL(new RegExp(`surface=journal`));
  await rail.getByTestId("nav-document").click();
  await expect(page).toHaveURL(new RegExp(`surface=document`));
  await rail.getByTestId("nav-travail").click();
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=travail`));
});

/**
 * Negative: Pilotage intent noted for project A must not make project B open on Pilotage.
 */
test("project B load ignores stale pilotage intent from project A", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  async function createNamedProject(name: string) {
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill(`NAV isolation ${name}`);
    await page.getByTestId("prep-send").click();
    await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
      timeout: 30000,
    });
    await page.getByTestId("prep-constitute").click();
    await page.getByTestId("prep-proposal-name").fill(name);
    await page.getByTestId("prep-proposal-summary").fill(`résumé ${name}`);
    await page.getByTestId("prep-proposal-save").click();
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByRole("button", { name: "Discussion", exact: true }).click();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });
    const id = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(id).toBeTruthy();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
    );
    return id!;
  }

  const projectA = await createNamedProject("Projet NAV A");
  await page.getByTestId("studio-rail").getByTestId("nav-pilotage").click();
  await expect(page).toHaveURL(new RegExp(`/projects/${projectA}\\?surface=pilotage`));

  await page.goto("/portfolio");
  await page.waitForURL("**/portfolio");
  const projectB = await createNamedProject("Projet NAV B");
  expect(projectB).not.toBe(projectA);

  // B created without clicking Pilotage — must settle on travail, not A's intent.
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
  );
  await expect(page).toHaveURL(new RegExp(`/projects/${projectB}\\?surface=travail`));
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "travail",
  );
  await expect(page).not.toHaveURL(/surface=pilotage/);
});
