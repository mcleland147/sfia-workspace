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
  "../../.sfia-evidence/ml5-documentary-boundary-browser",
);

test("SAS-ANIM — ring spin computed styles normal + reduced-motion", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.goto("/login", { waitUntil: "domcontentloaded" });
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
  await openNewPreparation(page);
  const projectName = uniqueProjectName("AnimTrack");
  // Start create but sample ring while popup visible — don't wait for navigate.
  const name = projectName;
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  const getRes = await page.request.get(`/api/preparations/${preparationId}`);
  const prep = (await getRes.json()) as {
    creationRevision?: number;
    preparation?: { creationRevision?: number };
  };
  const rev = prep.creationRevision ?? prep.preparation?.creationRevision;
  const patchRes = await page.request.patch(`/api/preparations/${preparationId}`, {
    data: {
      previewName: name,
      previewSummary: "SAS animation qualify ML5",
      expectedCreationRevision: rev,
    },
  });
  expect(patchRes.ok()).toBeTruthy();
  await page.reload();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({
    timeout: 30_000,
  });
  await page.getByTestId("prep-create-project").click();
  await expect(page.getByTestId("sas-create-progress-popup")).toBeVisible({
    timeout: 20_000,
  });

  async function sample(label: string) {
    return page.evaluate((lbl) => {
      const el = document.querySelector(".fig-sas-progress-ring-spin");
      if (!el) return { label: lbl, present: false };
      const cs = getComputedStyle(el);
      return {
        label: lbl,
        present: true,
        animationName: cs.animationName,
        animationDuration: cs.animationDuration,
        animationPlayState: cs.animationPlayState,
        transform: cs.transform,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches,
      };
    }, label);
  }

  const s1 = await sample("t0");
  await page.waitForTimeout(400);
  const s2 = await sample("t400");
  await page.waitForTimeout(400);
  const s3 = await sample("t800");
  await page.screenshot({
    path: path.join(EVIDENCE, "07-sas-animation.png"),
    fullPage: false,
  });

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(150);
  const sR = await sample("reduced");

  const report = {
    at: new Date().toISOString(),
    projectName: name,
    samples: [s1, s2, s3, sR],
    transformChanged:
      Boolean(s1.present && s2.present) &&
      (s1.transform !== s2.transform || s2.transform !== s3.transform),
    normalHasSpinName: /spin|fig-sas/i.test(String(s1.animationName || "")),
    playStateRunning: s1.animationPlayState === "running",
    reducedHonored:
      sR.reducedMotion === true &&
      (sR.animationName === "none" ||
        sR.animationDuration === "0s" ||
        Number.parseFloat(String(sR.animationDuration)) === 0),
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "07-sas-animation.json"),
    JSON.stringify(report, null, 2),
  );
  expect(s1.present).toBe(true);
  expect(report.normalHasSpinName).toBe(true);
  expect(report.playStateRunning).toBe(true);
  // Temporal proof: transform must change across samples when not reduced.
  expect(report.transformChanged).toBe(true);
  expect(report.reducedHonored).toBe(true);

  // Dismiss to avoid leaving hung create UI
  const dismiss = page.getByTestId("sas-create-progress-dismiss");
  if (await dismiss.isEnabled()) {
    await dismiss.click();
  }
});
