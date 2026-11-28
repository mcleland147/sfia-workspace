import { expect, test, type Page } from "@playwright/test";

async function login(page: Page, pilot: "A" | "B") {
  await page.goto("/login");
  await page.getByRole("button", { name: `Pilote ${pilot} (DEV)` }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByRole("heading", { name: "Portefeuille" })).toBeVisible();
}

async function settled(page: Page) {
  await expect(page.getByText("Modification en cours…")).toHaveCount(0);
}

test("personal portfolio organization, persistence, archive and isolation", async ({ page, browser }) => {
  test.setTimeout(180_000);
  await login(page, "A");

  let creates = 0;
  await page.route("**/api/preparations", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    creates += 1;
    await new Promise((resolve) => setTimeout(resolve, 600));
    await route.continue();
  });
  await page.getByTestId("portfolio-new-prep").click({ clickCount: 2, delay: 40 });
  await page.waitForURL("**/preparations/**");
  expect(creates).toBe(1);
  const preparationUrl = page.url();
  await page.unroute("**/api/preparations");
  await page.getByRole("link", { name: "Portefeuille" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const secondUrl = page.url();
  await page.getByRole("link", { name: "Portefeuille" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.locator("[data-testid^='resume-prep-']")).toHaveCount(2);

  await page.getByRole("button", { name: "Liste", exact: true }).click();
  await expect(page.getByRole("button", { name: "Liste", exact: true })).toHaveAttribute("aria-pressed", "true");
  await settled(page);
  await page.getByRole("button", { name: "Grille", exact: true }).click();
  await expect(page.getByRole("button", { name: "Grille", exact: true })).toHaveAttribute("aria-pressed", "true");
  await settled(page);
  await page.getByRole("button", { name: "Groupes", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Préparations · 2/ })).toBeVisible();
  await page.getByRole("button", { name: /À reprendre/ }).click();
  await expect(page.getByRole("button", { name: /^Préparations · / })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: /^Tout · / }).click();

  let releaseLate: () => void = () => {};
  const lateHeld = new Promise<void>((resolve) => {
    releaseLate = resolve;
  });
  let sawStale = false;
  await page.route("**/api/portfolio**", async (route) => {
    const url = new URL(route.request().url());
    if (url.searchParams.get("q") === "Nouvelle") {
      sawStale = true;
      await lateHeld;
    }
    await route.continue();
  });
  await page.getByTestId("portfolio-search").fill("Nouvelle");
  await expect.poll(() => sawStale).toBe(true);
  await page.getByTestId("portfolio-search").fill("zzz-absent");
  await expect(page.getByTestId("portfolio-empty")).toHaveText("Aucun résultat.");
  releaseLate();
  await expect(page.getByTestId("portfolio-empty")).toHaveText("Aucun résultat.");
  await expect(page.getByRole("link", { name: "Nouvelle préparation" })).toHaveCount(0);
  await page.unroute("**/api/portfolio**");
  await page.getByTestId("portfolio-search").fill("");
  await expect(page.locator("[data-testid^='resume-prep-']")).toHaveCount(2);

  await page.getByLabel("Tri").selectOption("custom");
  await expect(page.getByRole("button", { name: "Descendre" }).first()).toBeVisible();
  await settled(page);
  const before = await page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("data-testid")),
  );
  await page.locator("[data-testid^='resume-prep-']").first().getByRole("button", { name: "Descendre" }).focus();
  await page.keyboard.press("Enter");
  await expect.poll(async () =>
    page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("data-testid")),
    ),
  ).toEqual([before[1], before[0]]);
  await settled(page);
  await page.getByTestId("portfolio-search").fill("Nouvelle");
  await expect(page.getByRole("button", { name: "Monter" })).toHaveCount(0);
  await page.getByTestId("portfolio-search").fill("");
  await expect(page.getByRole("button", { name: "Monter" }).first()).toBeVisible();

  const source = page.locator("[data-testid^='resume-prep-']").nth(1);
  const target = page.locator("[data-testid^='resume-prep-']").first();
  const sourceId = await source.getAttribute("data-testid");
  await source.dragTo(target, { sourcePosition: { x: 12, y: 12 }, targetPosition: { x: 12, y: 12 } });
  await expect.poll(async () => page.locator("[data-testid^='resume-prep-']").first().getAttribute("data-testid")).toBe(sourceId);
  await settled(page);

  let favorites = 0;
  await page.route("**/favorite", async (route) => {
    favorites += 1;
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });
  await page.getByRole("button", { name: "Ajouter aux favoris" }).first().click({ clickCount: 2, delay: 30 });
  await expect(page.getByTestId("portfolio-rail-favorites")).toContainText("Nouvelle préparation");
  expect(favorites).toBe(1);
  await page.unroute("**/favorite");

  await page.reload();
  await expect(page.getByRole("button", { name: "Groupes", exact: true })).toHaveAttribute("aria-pressed", "true");
  const second = await browser.newContext();
  const other = await second.newPage();
  await login(other, "A");
  await expect(other.getByRole("button", { name: "Groupes", exact: true })).toHaveAttribute("aria-pressed", "true");
  await second.close();

  const seeded: string[] = [];
  for (let index = 0; index < 24; index += 1) {
    const response = await page.request.post("/api/preparations");
    expect(response.ok()).toBeTruthy();
    const body = (await response.json()) as { preparationId?: string };
    expect(body.preparationId).toBeTruthy();
    seeded.push(body.preparationId!);
  }
  await page.reload();
  await page.getByRole("button", { name: "Voir tous les espaces" }).click();
  await page.getByTestId("portfolio-load-more").click();
  await expect(page.getByTestId("portfolio-load-more")).toHaveCount(0);
  const visible = await page.locator("[data-testid^='resume-prep-']").evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("data-testid")),
  );
  expect(new Set(visible).size).toBe(visible.length);
  expect(visible.length).toBe(26);
  for (const id of seeded) expect(visible).toContain(`resume-prep-${id}`);

  await page.route("**/favorite", (route) => route.abort());
  const stillPlain = page.getByRole("button", { name: "Ajouter aux favoris" }).first();
  await stillPlain.click();
  await expect(page.getByText("Résultat incertain. L'action n'est pas relancée.")).toBeVisible();
  await settled(page);
  await page.unroute("**/favorite");

  const favoriteRow = page.locator("[data-testid^='resume-prep-']").filter({ has: page.getByRole("button", { name: "Retirer des favoris" }) }).first();
  const favoriteId = await favoriteRow.getAttribute("data-testid");
  await favoriteRow.getByRole("button", { name: "Actions de l'espace" }).click();
  await favoriteRow.getByRole("button", { name: "Archiver" }).click();
  const archived = page.waitForResponse((response) => response.url().includes("/archive") && response.request().method() === "PUT");
  await page.getByRole("dialog", { name: "Confirmer l'archivage" }).getByRole("button", { name: "Archiver" }).click();
  expect((await archived).ok()).toBeTruthy();
  await expect(page.getByTestId(favoriteId!)).toHaveCount(0);
  await expect(page.getByTestId("portfolio-rail-favorites")).not.toContainText("Nouvelle préparation");
  await page.goto(preparationUrl);
  await expect(page).toHaveURL(/\/preparations\//);
  await page.goto("/portfolio?scope=archive");
  await expect(page.getByTestId(favoriteId!)).toBeVisible();
  await page.getByTestId(favoriteId!).getByRole("button", { name: "Actions de l'espace" }).click();
  await page.getByTestId(favoriteId!).getByRole("button", { name: "Restaurer" }).click();
  await page.getByRole("dialog", { name: "Confirmer la restauration" }).getByRole("button", { name: "Restaurer" }).click();
  await page.getByRole("button", { name: "Retour aux espaces" }).click();
  await expect(page.getByTestId("portfolio-rail-favorites")).toContainText("Nouvelle préparation");

  await page.getByTestId("portfolio-rail-search").fill("Nouvelle");
  await page.getByTestId("portfolio-rail-search").press("Enter");
  await expect(page).toHaveURL(/q=Nouvelle/);
  await expect(page.getByRole("link", { name: "Nouvelle préparation" }).first()).toBeVisible();

  const intruder = await browser.newContext();
  const pilotB = await intruder.newPage();
  await login(pilotB, "B");
  await expect(pilotB.getByTestId("portfolio-empty")).toHaveText("Aucun espace pour le moment.");
  await expect(pilotB.getByTestId("portfolio-rail-favorites")).not.toContainText("Nouvelle préparation");
  const denied = await pilotB.request.get(secondUrl.replace(/\/preparations\//, "/api/preparations/").replace(/\?.*$/, ""));
  expect(denied.status()).toBe(404);
  await pilotB.goto(secondUrl);
  await pilotB.goto("/portfolio");
  await expect(pilotB.getByTestId("portfolio-empty")).toHaveText("Aucun espace pour le moment.");
  await intruder.close();
});
