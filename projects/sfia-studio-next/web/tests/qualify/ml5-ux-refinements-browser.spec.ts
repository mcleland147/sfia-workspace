import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml5-ux-refinements-browser",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(180_000);

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

async function ensureSession(page: import("@playwright/test").Page) {
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  await page.waitForURL(/\/(portfolio|projects|preparations|login)/, {
    timeout: 60_000,
  });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /Pilote A|connexion de test|test login/i,
    });
    if (await testBtn.count()) await testBtn.first().click();
    else {
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
}

test("UX-TYPO — conversation body 12.5px/1.65; activity titles ~12/15px", async ({
  page,
}) => {
  await ensureSession(page);
  await openNewPreparation(page);
  const projectId = await constituteAndCreateProject(page, {
    name: uniqueProjectName("UxTypo"),
    summary: "UX typography smoke",
    alreadyUnique: true,
  });
  expect(projectId).toBeTruthy();

  // Inject a local markdown table message via DOM evaluation of styles on
  // existing empty thread — seed a visible msg body via page evaluate fixture.
  const measures = await page.evaluate(() => {
    const host = document.querySelector(".fig-nora-thread") || document.body;
    const article = document.createElement("article");
    article.className = "fig-msg fig-msg-pilot";
    article.innerHTML = `<div class="fig-msg-body"><div class="safe-md"><p>Texte courant UX.</p><table><thead><tr><th>ID</th><th>Statut</th></tr></thead><tbody><tr><td>RM-01</td><td>Ouverte</td></tr></tbody></table></div></div>`;
    host.appendChild(article);
    const body = article.querySelector(".fig-msg-body") as HTMLElement;
    const td = article.querySelector("td") as HTMLElement;
    const cs = getComputedStyle(body);
    const tdCs = getComputedStyle(td);
    const activity = document.createElement("div");
    activity.className = "fig-nora-live-activity";
    activity.innerHTML = `<p class="fig-nora-live-activity-headline">Comparaison documentaire</p><span class="fig-nora-live-activity-group-title">Orientation du travail</span>`;
    host.appendChild(activity);
    const h = getComputedStyle(
      activity.querySelector(".fig-nora-live-activity-headline") as HTMLElement,
    );
    const gt = getComputedStyle(
      activity.querySelector(".fig-nora-live-activity-group-title") as HTMLElement,
    );
    return {
      bodyFontSize: cs.fontSize,
      bodyLineHeight: cs.lineHeight,
      tdWhiteSpace: tdCs.whiteSpace,
      tdWordBreak: tdCs.wordBreak,
      tdMinWidth: tdCs.minWidth,
      headlineFontSize: h.fontSize,
      groupTitleFontSize: gt.fontSize,
    };
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "typography-measures.json"),
    JSON.stringify(measures, null, 2),
  );
  await page.screenshot({
    path: path.join(EVIDENCE, "01-typography-table.png"),
    fullPage: false,
  });
  // D.1 — contract tokens.css 12.5px/1.65; tables wrap in-message (IT-04 revised).
  expect(measures.bodyFontSize).toBe("12.5px");
  expect(measures.groupTitleFontSize).toBe("12px");
  expect(measures.headlineFontSize).toBe("15px");
  expect(measures.tdWhiteSpace).toBe("normal");
  expect(measures.tdWordBreak).toBe("normal");
});

test("UX-SAS — ring still spins (non-regression)", async ({ page }) => {
  await ensureSession(page);
  await openNewPreparation(page);
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  const getRes = await page.request.get(`/api/preparations/${preparationId}`);
  const prep = (await getRes.json()) as {
    creationRevision?: number;
    preparation?: { creationRevision?: number };
  };
  const rev = prep.creationRevision ?? prep.preparation?.creationRevision;
  const name = uniqueProjectName("UxAnim");
  const patch = await page.request.patch(`/api/preparations/${preparationId}`, {
    data: {
      previewName: name,
      previewSummary: "SAS non-regression",
      expectedCreationRevision: rev,
    },
  });
  expect(patch.ok()).toBeTruthy();
  await page.reload();
  await page.getByTestId("prep-create-project").click();
  await expect(page.getByTestId("sas-create-progress-popup")).toBeVisible({
    timeout: 20_000,
  });
  const s1 = await page.evaluate(() => {
    const el = document.querySelector(".fig-sas-progress-ring-spin");
    if (!el) return { present: false };
    const cs = getComputedStyle(el);
    return {
      present: true,
      animationName: cs.animationName,
      transform: cs.transform,
    };
  });
  await page.waitForTimeout(400);
  const s2 = await page.evaluate(() => {
    const el = document.querySelector(".fig-sas-progress-ring-spin");
    if (!el) return { present: false };
    const cs = getComputedStyle(el);
    return {
      present: true,
      animationName: cs.animationName,
      transform: cs.transform,
    };
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "sas-nonreg.json"),
    JSON.stringify({ s1, s2 }, null, 2),
  );
  expect(s1.present).toBe(true);
  expect(String(s1.animationName)).toMatch(/spin|fig-sas/i);
  expect(s1.transform !== s2.transform).toBe(true);
});
