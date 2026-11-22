import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs";

const outDir = path.resolve(
  __dirname,
  "../../../construction/ensemble-08-git-et-publications/figma-evidence/runtime",
);

test("E08 G5 runtime captures (DEV SCRIPTED)", async ({ page }) => {
  test.setTimeout(180_000);
  fs.mkdirSync(outDir, { recursive: true });
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible({ timeout: 20_000 });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(outDir, "runtime-11.06-integrations-1680x970.png"),
  });
  if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("disconnect-github")).toBeVisible({ timeout: 20_000 });
  }
  if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await page.screenshot({
      path: path.join(outDir, "runtime-11.07-disconnect-confirm-1680x970.png"),
    });
    // Measure key banner box for F2 evidence
    const banner = page.getByTestId("disconnect-consequence-banner");
    const box = await banner.boundingBox();
    fs.writeFileSync(
      path.join(outDir, "runtime-11.07-dom-measures.json"),
      JSON.stringify(
        {
          viewport: { w: 1680, h: 970 },
          disconnectBanner: box,
          note: "F2 regional measure — compare to Figma 11.07 amber banner after parent-chain resolve",
        },
        null,
        2,
      ),
    );
    await page.getByTestId("disconnect-github-cancel").click();
  }
  await page.screenshot({
    path: path.join(outDir, "runtime-integrations-final-1680x970.png"),
  });
});
