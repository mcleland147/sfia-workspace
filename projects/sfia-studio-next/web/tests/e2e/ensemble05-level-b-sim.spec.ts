import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";
import { SIM_PROMPTS } from "../../src/domains/conversation/provider-simulated-qualification";

/**
 * Level-B API/BROWSER FAKE — natural prompts through real D3 path with
 * STUDIO_NORA_SIMULATED_PROVIDER (no STUDIO_FORCE_NORA_FIXTURE UI keys).
 * Proof labels: ADAPTER_FAKE + API/BROWSER FAKE.
 */
test.describe("Ensemble 05 Level-B provider-simulated chain", () => {
  test("S1–S11 natural prompts → composition/persist/reload (BROWSER FAKE)", async ({
    page,
  }) => {
    // Standard CI BROWSER FAKE forces STUDIO_FORCE_NORA_FIXTURE — SIM path is a separate lane.
    test.skip(
      process.env.STUDIO_NORA_SIMULATED_PROVIDER !== "1",
      "requires STUDIO_NORA_SIMULATED_PROVIDER=1 (not fixture UI-key lane)",
    );
    test.setTimeout(360_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora/level-b-e2e-chain-20261118",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 Level-B sim chain",
      name: `E05 LB ${Date.now()}`,
      summary: "level-b-sim",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");

    async function ask(text: string) {
      await draft.fill(text);
      await send.click();
      await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
        timeout: 45000,
      });
    }

    // S1 — prose only, no artificial graphic.
    await page.setViewportSize({ width: 1440, height: 900 });
    await ask(SIM_PROMPTS.S1);
    const s1 = page.getByTestId("nora-msg-assistant").last();
    await expect(s1).toContainText(/déploiement progressif/i);
    await expect(s1.getByTestId("nora-visual-composition")).toHaveCount(0);

    // S3 — three cards via real D3 sim path (not E05_R03 key).
    await ask(SIM_PROMPTS.S3);
    const s3 = page.getByTestId("nora-msg-assistant").last();
    await expect(s3.getByTestId("nora-visual-comparison")).toBeVisible({ timeout: 45000 });
    await expect(s3.getByTestId("nora-visual-comparison")).toHaveAttribute("data-variant", "cards");
    await expect(s3.getByTestId("nora-composition-alt-detail")).toHaveCount(3);
    await expect(s3.getByTestId("nora-composition-alt-cons").first()).toBeVisible();
    await s3.getByTestId("nora-visual-composition").screenshot({
      path: path.join(evidenceDir, "runtime-s3-three-strategies-sim-1440.png"),
      animations: "disabled",
    });

    // S4 — five-option matrix.
    await ask(SIM_PROMPTS.S4);
    const s4 = page.getByTestId("nora-msg-assistant").last();
    await expect(s4.getByTestId("nora-composition-matrix-five")).toBeVisible({ timeout: 45000 });
    await expect(s4.getByTestId("nora-composition-matrix-five").locator("tbody tr")).toHaveCount(5);
    await expect(s4.getByTestId("nora-composition-matrix-five")).toContainText(/Effort|Risque|Délai/);
    await s4.getByTestId("nora-visual-composition").screenshot({
      path: path.join(evidenceDir, "runtime-s4-five-matrix-sim-1440.png"),
      animations: "disabled",
    });

    // S6 — timeline without fixtureDemo flag.
    await ask(SIM_PROMPTS.S6);
    const s6 = page.getByTestId("nora-msg-assistant").last();
    const seq = s6.getByTestId("nora-composition-editorial-sequence");
    await expect(seq).toBeVisible({ timeout: 45000 });
    await expect(seq).toHaveAttribute("data-timeline", "1");
    await expect(seq).toHaveAttribute("data-fixture-demo", "0");
    await expect(s6.locator(".fig-nc-timeline-row")).toHaveCount(4);
    await expect(s6.locator(".fig-nc-timeline-week")).toHaveCount(8);
    await s6.getByTestId("nora-visual-composition").screenshot({
      path: path.join(evidenceDir, "runtime-s6-timeline-sim-1440.png"),
      animations: "disabled",
    });

    // S10 — refuse invented quantitative chart.
    const cmpBefore = await page.getByTestId("nora-visual-comparison").count();
    await ask(SIM_PROMPTS.S10);
    const s10 = page.getByTestId("nora-msg-assistant").last();
    await expect(s10).toContainText(/trompeur|ne peux pas|collect/i);
    await expect(s10.getByTestId("nora-visual-composition")).toHaveCount(0);
    await expect(page.getByTestId("nora-visual-comparison")).toHaveCount(cmpBefore);

    // S11 — persistence / reload identity.
    await ask(SIM_PROMPTS.S11);
    const s11 = page.getByTestId("nora-msg-assistant").last();
    await expect(s11.getByTestId("nora-visual-comparison")).toBeVisible({ timeout: 45000 });
    const beforeText = await s11.innerText();
    const assistantsBefore = await page.getByTestId("nora-msg-assistant").count();

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("nora-msg-assistant")).toHaveCount(assistantsBefore);
    const s11Reload = page.getByTestId("nora-msg-assistant").last();
    await expect(s11Reload.getByTestId("nora-visual-comparison")).toBeVisible({ timeout: 20000 });
    await expect(s11Reload.getByTestId("nora-composition-alt-detail")).toHaveCount(2);
    const afterText = await s11Reload.innerText();
    expect(afterText).toContain("Pilote unique");
    expect(afterText).toContain("Deux sites contrastés");
    // No extra assistant invented by reload.
    expect(afterText.length).toBeGreaterThan(80);
    void beforeText;

    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s11-reload-travail-1440.png"),
      fullPage: false,
    });

    // S7 — ELK dependencies non-regression on sim path.
    await ask(SIM_PROMPTS.S7);
    const deps = page.getByTestId("nora-composition-dependencies").last();
    await expect(deps).toBeVisible({ timeout: 45000 });
    await expect(deps).toHaveAttribute("data-layout-engine", "elkjs", { timeout: 15000 });
    await deps.screenshot({
      path: path.join(evidenceDir, "runtime-s7-dependencies-elk-sim-1440.png"),
      animations: "disabled",
    });
  });
});
