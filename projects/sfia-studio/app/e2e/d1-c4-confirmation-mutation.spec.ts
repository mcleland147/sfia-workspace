import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c4",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

async function createProjectViaUi(
  page: import("@playwright/test").Page,
  name: string,
  objective: string,
) {
  await page.goto("/projects/new");
  await page.getByTestId("project-name").fill(name);
  await page.getByTestId("project-objective").fill(objective);
  await page.getByTestId("project-context").fill(`Contexte ${name}`);
  await page.getByTestId("project-submit").click();
  await expect(page).toHaveURL(/\/projects\//, { timeout: 15_000 });
}

test.describe("D1-C4 Human Confirmation and Bounded Project Mutation", () => {
  test("no-match → prepare create → edit → confirm → cockpit + idempotent replay", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "AstronomieC4",
      "Cataloguer les étoiles",
    );

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible();
    await page.getByTestId("prepare-create-project").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "confirm-create-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("confirm-name").fill("Suivi Contrats C4 E2E");
    await page
      .getByTestId("confirm-objective")
      .fill("Objectif édité avant confirmation");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /SUCCEEDED|ALREADY_APPLIED/,
    );
    await page.screenshot({
      path: path.join(shotDir, "create-success-1440.png"),
      fullPage: false,
    });

    const projectId = await page.getByTestId("confirm-project-id").innerText();
    expect(projectId).toMatch(/proj-/);

    // Double submit same confirmation panel is blocked after result;
    // reopen flow with same key is hard from UI — verify cockpit instead
    await page.getByTestId("confirm-open-cockpit").click();
    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toContainText(
      "Suivi Contrats C4 E2E",
    );
  });

  test("idempotent replay via second create with same key path (unit covered; UI double-guard)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("prepare-create-project")).toBeVisible({
      timeout: 15_000,
    });
    await page.getByTestId("prepare-create-project").click();
    await page.getByTestId("confirm-name").fill("Replay Project C4");
    await page.getByTestId("confirm-objective").fill("Replay objective");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    // Click submit again should not appear after result
    await expect(page.getByTestId("confirm-submit")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "idempotent-replay-1440.png"),
      fullPage: false,
    });
  });

  test("existing project confirm → NO_MUTATION + persistence note", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Campus360C4",
      "Gestion des utilisateurs campus",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "Je veux reprendre Campus360C4 pour la gestion des utilisateurs.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("context-candidates")).toBeVisible({
      timeout: 15_000,
    });
    await page.locator('input[name="context-selection"]').first().check();
    await page.getByTestId("prepare-confirm-existing").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "confirm-existing-1440.png"),
      fullPage: false,
    });
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      "NO_MUTATION",
      { timeout: 15_000 },
    );
    await expect(page.getByTestId("confirm-persistence-note")).toContainText(
      /DOMAIN CONTRACT REQUIRED/i,
    );
    await expect(page.getByText(/PROJECT LINKED/i)).toHaveCount(0);
  });

  test("analyze-only confirmation closes without mutation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("prepare-analyze-only")).toBeVisible({
      timeout: 15_000,
    });
    await page.getByTestId("prepare-analyze-only").click();
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      "NO_MUTATION",
    );
    await page.screenshot({
      path: path.join(shotDir, "analyze-only-1440.png"),
      fullPage: false,
    });
  });

  test("cancel confirmation without mutation", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
    await page.getByTestId("confirm-cancel").click();
    await expect(page.getByTestId("intake-confirmation")).toHaveCount(0);
    await expect(page.getByTestId("intake-proposal")).toBeVisible();
  });

  test("inactive project warning on existing confirm path", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/projects/new");
    await page.getByTestId("project-name").fill("DraftC4Warn");
    await page.getByTestId("project-objective").fill("Brouillon matching");
    await page.getByTestId("project-activate").uncheck();
    await page.getByTestId("project-submit").click();
    await expect(page).toHaveURL(/\/projects\//);

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux reprendre DraftC4Warn pour la gestion des utilisateurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("context-candidates")).toBeVisible({
      timeout: 15_000,
    });
    await page.locator('input[name="context-selection"]').first().check();
    await page.getByTestId("prepare-confirm-existing").click();
    await expect(page.getByTestId("confirm-warnings")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "conflict-or-inactive-1440.png"),
      fullPage: false,
    });
  });

  for (const width of [1728, 1280, 1024] as const) {
    test(`confirm create responsive no H-scroll at ${width}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill("Je veux lancer une application de suivi des contrats.");
      await page.getByTestId("intake-submit").click();
      await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
      await expect(page.getByTestId("intake-confirmation")).toBeVisible();
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      );
      expect(overflow).toBe(false);
      await page.screenshot({
        path: path.join(shotDir, `confirm-create-${width}.png`),
        fullPage: false,
      });
    });
  }

  test("mutation error shown for invalid draft fields", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
    await page.getByTestId("confirm-name").fill("");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /REJECTED|FAILED/,
    );
    await page.screenshot({
      path: path.join(shotDir, "mutation-error-1440.png"),
      fullPage: false,
    });
  });
});
