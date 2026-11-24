import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 qualify — real Chromium against DEV :3100 (LIVE Nora).
 * AUTOMATE interactions: yes. SIMULATE Nora/Cursor: no.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-browser");

test.describe.configure({ mode: "serial" });

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

test("Q0 — /login loads and DEV session opens portfolio", async ({ page }) => {
  const res = await page.goto("/login", { waitUntil: "domcontentloaded" });
  expect(res?.ok() || res?.status() === 304).toBeTruthy();
  // Auto-session or test login → portfolio
  await page.waitForURL(/\/(portfolio|projects|preparations|login)/, {
    timeout: 60_000,
  });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click();
    } else {
      // Force auto-session API then navigate
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await page.screenshot({
    path: path.join(EVIDENCE, "q0-portfolio.png"),
    fullPage: true,
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "q0.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        url: page.url(),
        ok: true,
      },
      null,
      2,
    ),
  );
});

test("Q1 — Mission 1 fragment: project + Nora LIVE reply", async ({ page }) => {
  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await openNewPreparation(page);
  const projectName = uniqueProjectName("C24 Qualif M1");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary: "Qualification C24 — investigation Node LTS",
    alreadyUnique: true,
  });
  expect(projectId).toBeTruthy();

  // Project conversation composer (Nora LIVE)
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  const prompt =
    "Peux-tu vérifier la version Node.js LTS actuelle sur le site officiel et me recommander si nous devons rester sur une LTS pour un service API Node interne ? Cite tes sources.";
  await draft.fill(prompt);
  await expect(send).toBeEnabled({ timeout: 10_000 });
  await send.click();

  // Wait for turn completion: draft cleared (Nora finished) — not user-prompt echo.
  await expect(draft).toHaveValue("", { timeout: 180_000 });
  await expect(page.getByText("deterministic-fixture", { exact: false })).toHaveCount(0);

  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible({ timeout: 30_000 });
  // Assistant bubble must contain recommendation language beyond the user prompt echo.
  const assistant = thread.locator(".fig-msg-nora, [data-role='assistant']").last();
  await expect(assistant).toBeVisible({ timeout: 60_000 });
  const assistantText = ((await assistant.textContent()) || "").trim();
  expect(assistantText.length).toBeGreaterThan(80);
  expect(assistantText.toLowerCase()).not.toEqual(prompt.toLowerCase());

  const liveBadge = page.getByText(/openai-agents-sdk-live|gpt-6\.2-sol/i);
  const liveCount = await liveBadge.count();
  await page.screenshot({
    path: path.join(EVIDENCE, "q1-m1-nora.png"),
    fullPage: true,
  });
  const ok = assistantText.length > 80;
  fs.writeFileSync(
    path.join(EVIDENCE, "q1-m1.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        projectId,
        projectName,
        prompt,
        liveBadgeObserved: liveCount > 0,
        assistantHead: assistantText.slice(0, 400),
        url: page.url(),
        ok,
      },
      null,
      2,
    ),
  );
  expect(ok).toBe(true);
});
