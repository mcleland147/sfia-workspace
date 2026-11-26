import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

/**
 * ML5 S1 — browser exercise of PdfViewer against DEV harness.
 * Proves local pdfjs render, navigation, zoom, search, cited page, document change.
 */
const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml5-pdf-viewer-browser",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(180_000);

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

test("PdfViewer harness: render, navigate, zoom, search, cite page 6", async ({
  page,
}) => {
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  const auto = await page.request.post("/api/dev/auto-session");
  expect(auto.ok()).toBeTruthy();

  await page.goto("/dev/pdf-viewer-harness", { waitUntil: "domcontentloaded" });
  await expect(page.getByTestId("pdf-harness")).toBeVisible({ timeout: 60_000 });
  await expect(page.getByTestId("pdf-harness-lane")).toContainText("DEV");
  await expect(page.getByTestId("pdf-viewer")).toBeVisible({ timeout: 60_000 });
  await expect(page.getByTestId("pdf-page-indicator")).toContainText(/Page 1 \/ 8/, {
    timeout: 60_000,
  });

  await page.getByRole("button", { name: "Page suivante" }).click();
  await expect(page.getByTestId("pdf-page-indicator")).toContainText("Page 2 / 8");

  await page.getByRole("button", { name: "Augmenter le zoom" }).click();
  await expect(page.getByLabel(/Zoom 125/)).toBeVisible();

  await page.getByTestId("pdf-search-input").fill("DETERMINANT_TOKEN_PAGE_SIX");
  await page.getByRole("button", { name: "Lancer la recherche" }).click();
  await expect(page.getByTestId("pdf-search-hit")).toContainText("Trouvé page 6");
  await expect(page.getByTestId("pdf-page-indicator")).toContainText("Page 6 / 8");

  await page.getByTestId("pdf-harness-cite-6").click();
  await expect(page.getByTestId("pdf-page-indicator")).toContainText("Page 6 / 8");

  await page.getByTestId("pdf-harness-reset-1").click();
  await expect(page.getByTestId("pdf-page-indicator")).toContainText("Page 1 / 8");

  await page.screenshot({
    path: path.join(EVIDENCE, "pdf-viewer-harness.png"),
    fullPage: true,
  });
});
