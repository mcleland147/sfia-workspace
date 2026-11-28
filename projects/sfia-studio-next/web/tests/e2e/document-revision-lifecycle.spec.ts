import { expect, test, type Page } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { constituteAndCreateProject, openNewPreparation } from "./helpers/g4-chat-first";

async function projectDocument(page: Page): Promise<{
  projectId: string;
  preparationId: string;
  documentId: string;
}> {
  const projectId = new URL(page.url()).pathname.split("/").filter(Boolean)[1] ?? "";
  const project = (await (await page.request.get(`/api/projects/${projectId}`)).json()) as {
    preparation?: { id?: string };
    documents?: Array<{ document?: { id?: string } }>;
  };
  const preparationId = project.preparation?.id ?? "";
  const documentId = project.documents?.[0]?.document?.id ?? "";
  expect(preparationId).not.toBe("");
  expect(documentId).not.toBe("");
  return { projectId, preparationId, documentId };
}

async function inspectCandidate(page: Page, preparationId: string, candidateId: string) {
  const res = await page.request.get(
    `/api/preparations/${preparationId}/document-candidates/${encodeURIComponent(candidateId)}`,
  );
  expect(res.ok()).toBeTruthy();
  const body = (await res.json()) as {
    status?: string;
    candidate?: {
      candidateId?: string;
      documentId?: string;
      sourceRevisionId?: string;
      contentMarkdown?: string;
      contentSha256?: string;
    };
  };
  expect(body.status).toBe("PENDING");
  const markdown = body.candidate?.contentMarkdown ?? "";
  expect(markdown.length).toBeGreaterThan(0);
  expect(body.candidate?.contentSha256).toMatch(/^[a-f0-9]{64}$/);
  return body.candidate!;
}

async function storedRevisions(page: Page, preparationId: string, documentId: string) {
  const res = await page.request.get(
    `/api/preparations/${preparationId}/documents/${documentId}`,
  );
  expect(res.ok()).toBeTruthy();
  const body = (await res.json()) as {
    revisions?: Array<{
      id: string;
      revisionNumber: number;
      contentMarkdown: string;
      provenanceJson: string;
    }>;
  };
  return body.revisions ?? [];
}

function sealedSha(revision: { provenanceJson: string }): string {
  const parsed = JSON.parse(revision.provenanceJson) as { contentSha256?: string };
  return parsed.contentSha256 ?? "";
}

/**
 * Lot 1 — natural V1 → inspected V2 → V3 in one Nora thread.
 * Fixture Nora (STUDIO_E2E), isolated :3101 / sfia_next_e2e. No provider call.
 * The second revise utterance exists only in the fixture lane.
 */
test("cycle documentaire V1 → V2 inspectée → V3 sans faux historique", async ({ page }) => {
  test.setTimeout(240_000);
  const shots = path.resolve(process.cwd(), "../../../.tmp-sfia-review/lot1-captures");
  await mkdir(shots, { recursive: true });

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: `CycleDoc ${Date.now()}`,
    summary: "v1-v2-v3",
  });
  await page.waitForURL("**/projects/**");

  const composer = page.getByTestId("thread-draft");
  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Rédige un document de synthèse sur les options A et B");
  await page.getByTestId("thread-send").click();
  await expect(page.getByText(/Options A et B/i).first()).toBeVisible({ timeout: 45000 });

  await page.getByTestId("nav-documents").click();
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-open").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i, {
    timeout: 15000,
  });
  await page.getByTestId("doc-action-request-revision").click();
  await expect(page).toHaveURL(/surface=travail/);
  await expect(composer).toBeEnabled({ timeout: 20000 });

  await composer.fill("Je souhaite clarifier les responsabilités entre les trois centres.");
  await page.getByTestId("thread-send").click();
  const viewer = page.getByTestId("travail-viewer");
  await expect(viewer).toBeVisible({ timeout: 45000 });
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/Options A et B/i);
  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("PROPOSITION");
  await expect(viewer).toHaveAttribute("data-revision-id", "");
  const candidateIdV2 = await viewer.getAttribute("data-proposal-candidate-id");
  expect(candidateIdV2).toBeTruthy();
  const ids = await projectDocument(page);
  const inspectedV2 = await inspectCandidate(page, ids.preparationId, candidateIdV2!);
  expect(inspectedV2.documentId).toBe(ids.documentId);
  expect(inspectedV2.contentMarkdown).toContain("coordinateur consolide");
  const v1Before = await storedRevisions(page, ids.preparationId, ids.documentId);
  expect(v1Before).toHaveLength(1);
  expect(inspectedV2.sourceRevisionId).toBe(v1Before[0]?.id);
  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
  await page.screenshot({ path: path.join(shots, "01-proposition-v2.png"), fullPage: true });

  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
  await expect(page.getByTestId("doc-rev-2")).toHaveCount(0);

  await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();
  await expect(page.getByText(/Version v2 conservée|Nouvelle version disponible\s*:\s*v2/i).first()).toBeVisible({
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i, {
    timeout: 15000,
  });
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
  await expect(page.getByTestId("document-focus-banner")).toHaveCount(0);
  await expect(viewer).toHaveAttribute("data-proposal-candidate-id", "");
  const afterV2 = await storedRevisions(page, ids.preparationId, ids.documentId);
  expect(afterV2).toHaveLength(2);
  expect(afterV2[1]?.contentMarkdown).toBe(inspectedV2.contentMarkdown);
  expect(sealedSha(afterV2[1]!)).toBe(inspectedV2.contentSha256);
  expect(afterV2[0]?.contentMarkdown).toBe(v1Before[0]?.contentMarkdown);
  expect(sealedSha(afterV2[0]!)).toBe(sealedSha(v1Before[0]!));
  await page.screenshot({ path: path.join(shots, "02-v2-courante.png"), fullPage: true });

  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Je souhaite préciser le suivi entre les centres.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i, {
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
  await expect(viewer).toHaveAttribute("data-revision-id", "");
  const candidateIdV3 = await viewer.getAttribute("data-proposal-candidate-id");
  expect(candidateIdV3).toBeTruthy();
  expect(candidateIdV3).not.toBe(candidateIdV2);
  const inspectedV3 = await inspectCandidate(page, ids.preparationId, candidateIdV3!);
  expect(inspectedV3.sourceRevisionId).toBe(afterV2[1]?.id);
  expect(inspectedV3.contentMarkdown).toContain("suivi V3 discriminant");
  expect(inspectedV3.contentMarkdown).not.toBe(inspectedV2.contentMarkdown);
  await page.screenshot({ path: path.join(shots, "03-proposition-v3.png"), fullPage: true });

  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).last().click();
  await expect(page.getByText(/Version v3 conservée|Nouvelle version disponible\s*:\s*v3/i).first()).toBeVisible({
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i);
  const afterV3 = await storedRevisions(page, ids.preparationId, ids.documentId);
  expect(afterV3).toHaveLength(3);
  expect(afterV3[2]?.contentMarkdown).toBe(inspectedV3.contentMarkdown);
  expect(sealedSha(afterV3[2]!)).toBe(inspectedV3.contentSha256);
  expect(afterV3[0]?.contentMarkdown).toBe(v1Before[0]?.contentMarkdown);
  expect(sealedSha(afterV3[0]!)).toBe(sealedSha(v1Before[0]!));
  expect(afterV3[1]?.contentMarkdown).toBe(inspectedV2.contentMarkdown);
  expect(sealedSha(afterV3[1]!)).toBe(inspectedV2.contentSha256);
  await page.screenshot({ path: path.join(shots, "04-v3-courante.png"), fullPage: true });

  await page.getByTestId("nav-documents").click();
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
  await expect(page.getByTestId("doc-rev-2")).toBeVisible();
  await expect(page.getByTestId("doc-rev-3")).toBeVisible();
  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
  await expect(page.getByTestId("doc-rev-1")).toContainText(/HISTORIQUE/i);
  await page.screenshot({ path: path.join(shots, "05-historique-v1-v2-v3.png"), fullPage: true });

  await page.getByTestId("doc-rev-1").click();
  await page.getByTestId("doc-action-read-version").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i);
  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);

  await page.getByTestId("doc-action-history").click();
  await page.getByTestId("doc-rev-2").click();
  await page.getByTestId("doc-action-read-version").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);

  await page.getByTestId("doc-action-history").click();
  await page.getByTestId("doc-rev-1").click();
  await page.getByTestId("doc-action-rework-nora").click();
  await expect(page.getByRole("button", { name: /Repartir de la v1/i })).toBeVisible({
    timeout: 45000,
  });
  await page.screenshot({ path: path.join(shots, "06-revision-historique-gouvernee.png"), fullPage: true });
  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-4")).toHaveCount(0);

  await page.reload();
  await page.getByTestId("nav-documents").click();
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
});

test("une conservation tardive ne rouvre pas une visionneuse fermée", async ({ page }) => {
  test.setTimeout(180_000);
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: `CycleDoc fermeture ${Date.now()}`,
    summary: "fermeture pendant conservation",
  });
  await page.waitForURL("**/projects/**");
  const composer = page.getByTestId("thread-draft");
  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Rédige un document de synthèse sur les options A et B");
  await page.getByTestId("thread-send").click();
  await expect(page.getByText(/Options A et B/i).first()).toBeVisible({ timeout: 45000 });
  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-open").click();
  await page.getByTestId("doc-action-request-revision").click();
  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Je souhaite clarifier les responsabilités entre les trois centres.");
  await page.getByTestId("thread-send").click();
  const viewer = page.getByTestId("travail-viewer");
  await expect(viewer).toBeVisible({ timeout: 45000 });
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("PROPOSITION");

  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route("**/api/preparations/*/messages", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await gate;
    await route.continue();
  });
  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();
  await page.getByTestId("travail-viewer-close").click();
  await expect(viewer).toBeHidden();
  release();
  await expect(page.getByText(/Version v2 conservée|Nouvelle version disponible\s*:\s*v2/i).first()).toBeVisible({
    timeout: 45000,
  });
  await expect(viewer).toBeHidden();
  const ids = await projectDocument(page);
  const revisions = await storedRevisions(page, ids.preparationId, ids.documentId);
  expect(revisions.map((r) => r.revisionNumber)).toEqual([1, 2]);
  await page.reload();
  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-2")).toContainText(/COURANTE/i);
  await expect(page.getByTestId("travail-viewer")).toHaveCount(0);
});
