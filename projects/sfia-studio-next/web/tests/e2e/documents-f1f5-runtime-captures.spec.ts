import { test, expect } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  openSasSecondaryTool,
  backToSasConversation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

/**
 * Runtime captures for Figma 930:9 / 930:10 comparison (local evidence only).
 */
test("Documents F4/F5 runtime captures 930:9 and 930:10", async ({ page }) => {
  test.setTimeout(180_000);
  const outDir = path.resolve(
    __dirname,
    "../../../.tmp-sfia-review/documents-runtime/cycle08-f1f5",
  );
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await openNewPreparation(page);
  await sendPrepMessage(page, "Bonjour Nora — captures 930.");
  await expect(page.getByText("Nora", { exact: false }).first()).toBeVisible({ timeout: 30000 });

  await openSasSecondaryTool(page, "Documents");
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V1.\n\n## Responsabilités\nCentres.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 15000 });
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V2.\n\n## Responsabilités\nVérification V2.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/rev 2/i, { timeout: 15000 });
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V3.\n\n## Responsabilités\nCourante V3.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/rev 3/i, { timeout: 15000 });
  await backToSasConversation(page);

  await constituteAndCreateProject(page, {
    name: `DocsCap ${Date.now()}`,
    summary: "captures",
  });
  await page.waitForURL("**/projects/**");

  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await page.getByTestId("doc-rev-2").click();
  await page.getByTestId("doc-action-rework-nora").click();
  await expect(page.getByRole("button", { name: /Repartir de la v2/i })).toBeVisible({
    timeout: 45000,
  });
  await page.screenshot({
    path: path.join(outDir, "runtime-930-9-historical.png"),
    fullPage: false,
  });

  await page.getByRole("button", { name: /Repartir de la v2/i }).click();
  await expect(page.getByText(/nous repartons de la version historique/i)).toBeVisible({
    timeout: 45000,
  });
  await page.getByLabel("Message à Nora").fill(
    "Je souhaite clarifier les responsabilités entre les trois centres.",
  );
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(
    page.getByRole("button", { name: /Conserver comme nouvelle version/i }),
  ).toBeVisible({ timeout: 45000 });
  await expect(page.getByTestId("document-focus-banner")).toContainText(
    /PROPOSITION NON ENREGISTRÉE/i,
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-930-10-proposal.png"),
    fullPage: false,
  });

  const nine = fs.readFileSync(path.join(outDir, "runtime-930-9-historical.png"));
  const ten = fs.readFileSync(path.join(outDir, "runtime-930-10-proposal.png"));
  expect(nine.equals(ten)).toBe(false);
  fs.writeFileSync(
    path.join(outDir, "capture-summary.json"),
    JSON.stringify(
      {
        nineBytes: nine.length,
        tenBytes: ten.length,
        distinct: true,
        viewport: "1680x970",
        frames: ["930:9", "930:10"],
        note: "Local runtime evidence — not embedded in Git handoff text.",
      },
      null,
      2,
    ),
  );
});
