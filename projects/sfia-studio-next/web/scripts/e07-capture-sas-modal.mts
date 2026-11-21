/**
 * E07 — capture the real SAS create progress modal (not prep page alone).
 * Uses a qualified preparation that can create a project, clicks create, screenshots popup.
 */
import { chromium } from "@playwright/test";
import { config } from "dotenv";
config({ path: ".env.local" });
process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";

import { mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client.ts";
import { pilots, preparations } from "../src/db/schema.ts";
import { newId } from "../src/lib/ids.ts";
import {
  applyPreparationProjection,
  openOrCreatePreparation,
  updatePreview,
} from "../src/domains/preparation/service.ts";
import { draftProjectionFromQualification } from "../src/domains/preparation/projection.ts";

async function main() {
  const outDir = resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/ensemble07-evidence/runtime",
  );
  mkdirSync(outDir, { recursive: true });

  const pilot = (
    await db.select().from(pilots).where(eq(pilots.displayName, "Pilot A (DEV)")).limit(1)
  )[0];
  if (!pilot) throw new Error("Pilot A missing");

  const stamp = Date.now().toString(36);
  const name = `Modal capture ${stamp}`;
  const prep = await openOrCreatePreparation(pilot.id);
  await updatePreview(
    pilot.id,
    prep.id,
    name,
    "Cadrage puis conception pour capture de la modale SAS",
  );
  const draft = draftProjectionFromQualification({
    preparationId: prep.id,
    turnKey: `t-modal-${stamp}`,
    qualificationStatus: "QUALIFIED",
    goal: "Cadrage puis conception pour capture de la modale SAS",
    projectIntention: "Cadrage puis conception pour capture de la modale SAS",
    desiredOutcome: "Rendre les décisions actionnables",
    proposedProjectName: name,
    allowGoalIntentionBootstrap: true,
  });
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  await applyPreparationProjection({
    pilotId: pilot.id,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    draft: draft!,
  });

  const browser = await chromium.launch();
  const page = await (
    await browser.newContext({ viewport: { width: 1680, height: 970 } })
  ).newPage();
  await page.goto("http://127.0.0.1:3100/login", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot: "a" }),
      credentials: "include",
    });
  });

  await page.goto(`http://127.0.0.1:3100/preparations/${prep.id}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(800);

  // Prefer UI create CTA; fallback to API+reload if CTA selector varies.
  const createBtn = page.getByRole("button", { name: /Créer le projet/i });
  if (await createBtn.count()) {
    await createBtn.click();
  } else {
    const after = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id))
    )[0]!;
    const res = await page.evaluate(
      async ({ preparationId, creationRevision, projectName, idem }) => {
        const r = await fetch(`/api/preparations/${preparationId}/create-project`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            expectedCreationRevision: creationRevision,
            projectName,
            previewSummary: "Cadrage puis conception",
            idempotencyKey: idem,
          }),
        });
        return { ok: r.ok, status: r.status, body: await r.json() };
      },
      {
        preparationId: prep.id,
        creationRevision: after.creationRevision,
        projectName: name,
        idem: newId("idem"),
      },
    );
    if (!res.ok) throw new Error(`create failed ${JSON.stringify(res)}`);
    await page.reload({ waitUntil: "networkidle" });
  }

  const popup = page.locator('[data-testid="sas-create-progress-popup"]');
  await popup.waitFor({ state: "visible", timeout: 15000 });
  const path = resolve(outDir, "sas-06-modal-runtime.png");
  await popup.screenshot({ path });
  // Also full viewport with overlay visible
  await page.screenshot({
    path: resolve(outDir, "sas-06-modal-viewport-runtime.png"),
    fullPage: false,
  });
  writeFileSync(
    resolve(outDir, "sas-06-modal-meta.json"),
    JSON.stringify(
      {
        prepId: prep.id,
        capturedAt: new Date().toISOString(),
        viewport: { w: 1680, h: 970 },
        note: "Real create path — modal element screenshot",
      },
      null,
      2,
    ),
  );
  console.log("wrote", path);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
