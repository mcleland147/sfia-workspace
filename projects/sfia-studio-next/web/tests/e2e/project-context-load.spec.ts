import { uniqueProjectName } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";

test("preparation context step follows the project read and does not block access", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const seed = "Je prépare un espace de travail isolé pour le chargement du contexte.";
  const draft = page.getByTestId("prep-draft");
  const send = page.getByTestId("prep-send");
  await draft.fill(seed);
  await expect(send).toBeEnabled();
  await send.click();
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(preparationId).toBeTruthy();
  let seeded = false;
  let lastPatch = "";
  for (let attempt = 0; attempt < 3 && !seeded; attempt += 1) {
    const getRes = await page.request.get(`/api/preparations/${preparationId}`);
    expect(getRes.ok()).toBeTruthy();
    const prep = (await getRes.json()) as {
      creationRevision?: number;
      preparation?: { creationRevision?: number };
    };
    const rev = Number(prep.creationRevision ?? prep.preparation?.creationRevision);
    const patchRes = await page.request.patch(`/api/preparations/${preparationId}`, {
      data: {
        previewName: uniqueProjectName("Contexte"),
        previewSummary: "Lecture du contexte projet",
        expectedCreationRevision: rev,
      },
    });
    lastPatch = `${patchRes.status()} ${await patchRes.text()}`;
    seeded = patchRes.ok();
  }
  expect(seeded, lastPatch).toBeTruthy();
  await page.reload();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();

  const popup = page.getByTestId("sas-create-progress-popup");
  await expect(popup).toBeVisible({ timeout: 30000 });
  const contextStep = page.getByTestId("sas-create-step-2");
  await expect(contextStep).toContainText("Chargement du contexte");
  await expect(contextStep).toHaveAttribute("data-mark", "done", { timeout: 20000 });
  await expect(page.getByTestId("sas-create-step-1")).toHaveAttribute("data-mark", "done");
  const dismiss = page.getByTestId("sas-create-progress-dismiss");
  await expect(dismiss).toBeEnabled();
  await dismiss.scrollIntoViewIfNeeded();
  await dismiss.click();

  await page.waitForURL("**/projects/**", { timeout: 30000 });
  await expect(page.getByTestId("project-unavailable")).toHaveCount(0, { timeout: 20000 });
  await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
  const empty = page.getByTestId("journal-empty-structure");
  await expect(page.getByText("Chargement de la continuité du projet.")).toHaveCount(0, {
    timeout: 20000,
  });
  if (await empty.count()) {
    await expect(empty).toContainText("Aucun thème capitalisé");
  }
});
