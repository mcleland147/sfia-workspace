import { test, expect } from "@playwright/test";

/**
 * Atlas D2→D4 single-intent — BROWSER on isolated E2E lane (:3101 / sfia_next_e2e).
 * Nora fixture FAKE — not LIVE.
 * G4 oracle: project + D4 document identity/content/reload — not only create HTTP.
 */
test("Atlas: one intent → create → D4 document persisted, visible, reload-stable", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await page
    .getByTestId("prep-draft")
    .fill(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible();

  const createBtn = page.getByTestId("prep-create-project");
  if (!(await createBtn.isEnabled().catch(() => false))) {
    const constitute = page.getByTestId("prep-constitute");
    if (await constitute.isVisible().catch(() => false)) {
      await constitute.click({ force: true });
    }
    const adopt = page.getByTestId("prep-adopt-nora");
    if (await adopt.isVisible().catch(() => false)) {
      await adopt.click({ force: true });
    }
    const nameField = page.getByTestId("prep-proposal-name");
    if (await nameField.isVisible().catch(() => false)) {
      await nameField.fill("Atlas");
      await page.getByTestId("prep-proposal-save").click();
    }
  }

  await expect(createBtn).toBeEnabled({ timeout: 20000 });

  const createRespPromise = page.waitForResponse(
    (r) => r.url().includes("/create-project") && r.request().method() === "POST",
  );
  await createBtn.click();
  const createResp = await createRespPromise;
  expect(createResp.ok()).toBeTruthy();
  const body = await createResp.json();
  expect(body.projectId).toBeTruthy();
  expect(body.missionBindingError).toBeFalsy();
  expect(body.missionBinding === "AUTHORIZED" || body.missionBinding === "REPLAY_ALLOWED").toBeTruthy();
  expect(body.missionContinue?.continued === true || body.missionContinue?.documentSave).toBeTruthy();

  const docId = body.missionContinue?.documentSave?.documentId as string | undefined;
  const revisionId = body.missionContinue?.documentSave?.revisionId as string | undefined;
  expect(docId).toBeTruthy();
  expect(body.missionContinue?.documentSave?.status).toBe("AVAILABLE");

  await page.waitForURL("**/projects/**", { timeout: 30000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });

  const projectUrl = page.url();
  const projectId = projectUrl.match(/\/projects\/([^/?#]+)/)?.[1];
  expect(projectId).toBeTruthy();

  // Document must belong to this project and be visible via project API (not only create JSON).
  const api = await page.request.get(`/api/projects/${projectId}`);
  expect(api.ok()).toBeTruthy();
  const proj = await api.json();
  expect(proj.project?.id).toBe(projectId);
  const docs = (proj.documents ?? []) as Array<{
    document: { id: string; title: string; projectId?: string };
    latestRevision?: { id: string; revisionNumber: number; contentMarkdown?: string } | null;
  }>;
  const match = docs.find((d) => d.document.id === docId);
  expect(match).toBeTruthy();
  expect(match!.latestRevision?.id).toBeTruthy();
  if (revisionId) {
    expect(match!.latestRevision?.id).toBe(revisionId);
  }
  expect(match!.latestRevision?.revisionNumber).toBeGreaterThanOrEqual(1);
  expect((match!.latestRevision?.contentMarkdown ?? "").length).toBeGreaterThan(20);

  // UI surface: document count visible in workspace summary.
  await expect(page.getByText(/Documents Nora · [1-9]/)).toBeVisible({ timeout: 10000 });

  // Reload — results durable; mission not awaiting create again.
  await page.reload();
  await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
  const api2 = await page.request.get(`/api/projects/${projectId}`);
  const proj2 = await api2.json();
  const docs2 = (proj2.documents ?? []) as typeof docs;
  expect(docs2.some((d) => d.document.id === docId)).toBeTruthy();
  expect(docs2.filter((d) => d.document.id === docId)).toHaveLength(1);
});

test("Atlas: forged mission key refused BEFORE create (zero project)", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  const prepUrl = page.url();
  const preparationId = prepUrl.match(/\/preparations\/([^/?#]+)/)?.[1];
  expect(preparationId).toBeTruthy();

  await page.getByTestId("prep-draft").fill("Crée un projet nommé Atlas Guard puis un document.");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  const createBtn = page.getByTestId("prep-create-project");
  if (!(await createBtn.isEnabled().catch(() => false))) {
    const nameField = page.getByTestId("prep-proposal-name");
    if (await nameField.isVisible().catch(() => false)) {
      await nameField.fill("Atlas Guard");
      await page.getByTestId("prep-proposal-save").click();
    }
  }
  await expect(createBtn).toBeEnabled({ timeout: 20000 });

  // Capture creationRevision from prep API.
  const prepRes = await page.request.get(`/api/preparations/${preparationId}`);
  expect(prepRes.ok()).toBeTruthy();
  const prepJson = await prepRes.json();
  const revision = prepJson.preparation?.creationRevision;
  expect(typeof revision).toBe("number");

  const forged = await page.request.post(`/api/preparations/${preparationId}/create-project`, {
    data: {
      expectedCreationRevision: revision,
      projectName: "Atlas Guard",
      previewSummary: "s",
      idempotencyKey: "d2:mission:ctk_forged_browser",
      clientIntentKey: "ctk_forged_browser",
    },
  });
  expect(forged.status()).toBe(409);
  const forgedBody = await forged.json();
  expect(forgedBody.missionBindingError).toBe("MISSION_KEY_MISMATCH");
  expect(forgedBody.projectsCreatedByRequest ?? 0).toBe(0);
  expect(forgedBody.projectId).toBeFalsy();

  // Prep still not attached; awaiting mission remains.
  const prepAfter = await page.request.get(`/api/preparations/${preparationId}`);
  const afterJson = await prepAfter.json();
  expect(afterJson.preparation?.status).not.toBe("ATTACHED");
  expect(afterJson.project).toBeFalsy();
  expect(afterJson.awaitingMission?.status).toBe("AWAITING_PILOT_ACT");
});
