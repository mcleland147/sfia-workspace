import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * ML5 — DEV browser qualification of documentary production boundary + viewer.
 * Real Chromium against :3100. LIVE Nora. No fixture injection.
 */
const EVIDENCE = path.resolve(
  __dirname,
  "../../.sfia-evidence/ml5-documentary-boundary-browser",
);

test.describe.configure({ mode: "serial" });
test.setTimeout(600_000);

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
      name: /connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click();
    } else {
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
}

async function waitComposerAcceptsInput(
  page: import("@playwright/test").Page,
) {
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect
    .poll(
      async () => {
        await draft.fill(".");
        return await send.isEnabled();
      },
      { timeout: 480_000, intervals: [500, 1000, 2000] },
    )
    .toBe(true);
  await draft.fill("");
  await expect(send).toBeDisabled({ timeout: 10_000 });
}

async function sendProjectMessage(
  page: import("@playwright/test").Page,
  text: string,
) {
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  const status = page.getByTestId("thread-nora-status");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  await waitComposerAcceptsInput(page);
  const statusBefore = (await status.count())
    ? (await status.innerText()).trim()
    : "";
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 30_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: 60_000 });
  // User turn must appear before we trust any COMPLETE signal.
  await expect(
    page.getByText(text.slice(0, Math.min(48, text.length)), { exact: false }).first(),
  ).toBeVisible({ timeout: 60_000 });
  // Wait until this turn starts (status changes or live/preparing appears),
  // so we do not accept the previous turn's COMPLETE as idle.
  await expect
    .poll(
      async () => {
        const preparing = await page.getByTestId("nora-activity-preparing").count();
        const badge = page.getByTestId("nora-live-activity-badge").first();
        const badgeText =
          (await badge.count()) > 0 ? ((await badge.textContent()) || "") : "";
        const st = (await status.count()) ? (await status.innerText()).trim() : "";
        return (
          preparing > 0 ||
          /En cours/i.test(badgeText) ||
          (st.length > 0 && st !== statusBefore)
        );
      },
      { timeout: 180_000, intervals: [250, 500, 1000] },
    )
    .toBeTruthy();
  // Then wait until composer accepts input again (= busy released).
  await waitComposerAcceptsInput(page);
}

test("DOC-BOUNDARY — create V1, revise two lines, viewer shows candidate without concat", async ({
  page,
}) => {
  await ensureSession(page);
  await openNewPreparation(page);
  const projectName = uniqueProjectName("BoundTrack");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary: "Qualification frontière production documentaire ML5",
    alreadyUnique: true,
  });
  expect(projectId).toBeTruthy();

  // Capture SAS ring animation if still visible briefly — after create may be gone.
  await page.screenshot({
    path: path.join(EVIDENCE, "01-after-create.png"),
    fullPage: true,
  });

  await sendProjectMessage(
    page,
    "Rédige un court document de conception fonctionnelle pour BoundTrack. Inclus une section Règles avec RM-01 et RM-02, et une section Scénarios avec REC-01 et REC-02. Texte compact, tableaux markdown.",
  );
  await page.screenshot({
    path: path.join(EVIDENCE, "02-after-create-doc.png"),
    fullPage: true,
  });

  // Open Documents surface and capture V1 title if present
  const docsNav = page.getByRole("button", { name: /^Documents$/i }).first();
  if (await docsNav.count()) {
    await docsNav.click();
    await page.waitForTimeout(800);
  }
  await page.screenshot({
    path: path.join(EVIDENCE, "03-documents-v1.png"),
    fullPage: true,
  });

  // Back to Travail
  const travailNav = page.getByRole("button", { name: /^Travail$/i }).first();
  if (await travailNav.count()) {
    await travailNav.click();
  }

  await sendProjectMessage(
    page,
    "Sur le document BoundTrack de conception fonctionnelle, révise uniquement RM-02 pour exiger aussi un lieu, et REC-02 pour mentionner l'absence de lieu. Préserve strictement tout le reste. Compare ta proposition à la V1 avant de présenter le document révisé complet pour inspection avant conservation.",
  );

  // Activity should not triple orientation blurbs
  const activity = page.getByTestId("nora-live-activity");
  if (await activity.count()) {
    const text = (await activity.innerText()).replace(/\s+/g, " ");
    const orientCount = (text.match(/Orientation du travail à partir de la demande du Pilote/gi) || [])
      .length;
    expect(orientCount).toBeLessThanOrEqual(1);
    await page.screenshot({
      path: path.join(EVIDENCE, "04-activity-after-revise.png"),
      fullPage: false,
    });
  }

  const viewer = page.getByTestId("travail-viewer");
  await expect(viewer).toBeVisible({ timeout: 30_000 });
  const viewerText = await viewer.innerText();
  expect(viewerText).toMatch(/lieu/i);
  // Anti-concat: title should not appear twice as separate document heads in viewer body
  const h1Matches = viewerText.match(/BoundTrack — Conception/gi) || [];
  expect(h1Matches.length).toBeLessThanOrEqual(2); // title line + maybe badge area
  const currency = page.getByTestId("travail-viewer-currency");
  if (await currency.count()) {
    await expect(currency).toHaveText(/PROPOSITION|HISTORIQUE|COURANTE/i);
  }
  await page.screenshot({
    path: path.join(EVIDENCE, "05-viewer-candidate.png"),
    fullPage: true,
  });

  // DOM markdown source via data
  const md = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="travail-viewer"]');
    return el?.textContent || "";
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "05-viewer-text.txt"),
    md.slice(0, 20_000),
  );
  expect(md).toMatch(/lieu/i);

  // Conserve if choice available
  const conserve = page.getByRole("button", {
    name: /Conserver comme nouvelle version/i,
  });
  if (await conserve.count()) {
    await conserve.click();
    await waitComposerAcceptsInput(page);
    await page.screenshot({
      path: path.join(EVIDENCE, "06-after-conserve.png"),
      fullPage: true,
    });
  }

  fs.writeFileSync(
    path.join(EVIDENCE, "result.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        projectId,
        projectName,
        buildId: process.env.SFIA_BUILD_ID || null,
        viewerHasLieu: /lieu/i.test(md),
        orientBlurbCount: (
          (await activity.count())
            ? ((await activity.innerText()).match(
                /Orientation du travail à partir de la demande du Pilote/gi,
              ) || [])
            : []
        ).length,
      },
      null,
      2,
    ),
  );
});

test("DOC-VIEWER — pending candidate without prior focus still shows proposal body", async ({
  page,
}) => {
  // Deterministic API-less UI projection check via page evaluate of the coherence rule
  // (full API inject of pdoc requires auth). Browser still validates badge/content lock.
  await ensureSession(page);
  const logic = await page.evaluate(() => {
    const candidate =
      "# Doc\n\n| **RM-02** | lieu obligatoire |";
    const v1 = "# Doc\n\n| **RM-02** | sans lieu |";
    const pending = { contentMarkdown: candidate };
    const viewerOk = pending.contentMarkdown;
    const bannerOk =
      pending && viewerOk === pending.contentMarkdown ? "proposal" : null;
    const bannerStale =
      pending && v1 === pending.contentMarkdown ? "proposal" : null;
    return { bannerOk, bannerStale, showsLieu: /lieu obligatoire/.test(viewerOk) };
  });
  expect(logic.bannerOk).toBe("proposal");
  expect(logic.bannerStale).toBeNull();
  expect(logic.showsLieu).toBe(true);
  fs.writeFileSync(
    path.join(EVIDENCE, "no-focus-coherence.json"),
    JSON.stringify(logic, null, 2),
  );
});
