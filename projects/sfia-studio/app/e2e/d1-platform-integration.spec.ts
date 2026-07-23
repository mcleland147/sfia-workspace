import { test, expect } from "@playwright/test";

test.beforeAll(() => {
  process.env.D1_INTAKE_PROVIDER = "fake";
  process.env.D1_PLATFORM_INTEGRATION = "1";
});

test.describe("D1 Shared Platform Integration — unified fixture", () => {
  test("fake provider + canonical sources + optional tool + C2→C3→C4 create", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "__D1_TOOL_GIT_HEAD__ Je veux lancer une application de suivi des contrats.",
      );
    await page.getByTestId("intake-submit").click();

    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByTestId("intake-platform-telemetry")).toBeVisible();
    await expect(page.getByTestId("intake-platform-sources")).toBeVisible();
    await expect(page.getByTestId("intake-provider-mode")).toContainText("fake");
    await expect(page.getByTestId("intake-platform-tools")).toContainText(
      "git_local_get_head",
    );
    await expect(page.getByTestId("intake-no-mutation")).toBeVisible();

    // C3 matching panel appears for CREATE candidate
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });

    await page.getByTestId("prepare-create-project").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.getByTestId("confirm-name").fill("D1 Platform Integration E2E");
    await page
      .getByTestId("confirm-objective")
      .fill("Prouver parcours unifié platform");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /SUCCEEDED|ALREADY_APPLIED/,
    );
    await expect(page.getByTestId("confirm-project-id")).toContainText(/proj-/);
  });

  test("tool deny path remains visible without secrets", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "__D1_TOOL_DENIED_PATH__ Je veux lancer une application de suivi des contrats.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-platform-tools")).toContainText(
      "DENIED",
      { timeout: 20_000 },
    );
    const body = await page.locator("body").innerText();
    expect(body).not.toMatch(/sk-[A-Za-z0-9]{10,}/);
    expect(body).not.toMatch(/OPENAI_API_KEY\s*=/);
  });
});
