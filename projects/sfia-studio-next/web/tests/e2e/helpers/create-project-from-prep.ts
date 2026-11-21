import { expect, type Page } from "@playwright/test";

/**
 * Ensemble 07 SAS06 — create no longer navigates immediately.
 * After `prep-create-project`, the progress popup requires "Accéder au projet".
 */
export async function clickCreateProjectAndEnter(
  page: Page,
  opts?: { createTimeoutMs?: number; navTimeoutMs?: number },
): Promise<string> {
  const createTimeout = opts?.createTimeoutMs ?? 30_000;
  const navTimeout = opts?.navTimeoutMs ?? 30_000;

  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: createTimeout });
  await createBtn.click();

  const popup = page.getByTestId("sas-create-progress-popup");
  const dismiss = page.getByTestId("sas-create-progress-dismiss");
  await expect(popup).toBeVisible({ timeout: createTimeout });
  await expect(dismiss).toBeEnabled({ timeout: createTimeout });
  await dismiss.click();

  await page.waitForURL("**/projects/**", { timeout: navTimeout });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return projectId!;
}
