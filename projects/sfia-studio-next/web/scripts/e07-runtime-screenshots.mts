import { chromium } from "@playwright/test";
import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";

const urls = JSON.parse(readFileSync("/tmp/sfia-e07-shot-urls.json", "utf8")) as {
  urls: Record<string, string>;
  proposed: { projectId: string };
  analyzing: { projectId: string };
  clarification: { projectId: string };
  firstActive?: { projectId: string };
  withHistory?: { projectId: string };
  between?: { projectId: string };
};

const outDir = resolve(process.cwd(), "../../../.tmp-sfia-review/ensemble07-evidence/runtime");
mkdirSync(outDir, { recursive: true });

async function shot(page: import("@playwright/test").Page, name: string) {
  const path = resolve(outDir, name);
  await page.waitForTimeout(700);
  await page.screenshot({ path, fullPage: false });
  const buf = readFileSync(path);
  console.log(
    "wrote",
    name,
    buf.length,
    createHash("sha256").update(buf).digest("hex").slice(0, 12),
  );
}

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1680, height: 970 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/login", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot: "a" }),
      credentials: "include",
    });
  });

  // 09.06 — projet sans cycle (proposition only)
  await page.goto(urls.urls.projet06, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="project-overview-no-cycle"]');
  await shot(page, "09.06-projet-sans-cycle-runtime.png");

  // 09.01 — projet avec cycle actif
  if (urls.urls.projet01) {
    await page.goto(urls.urls.projet01, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="project-overview-cycle-card"]');
    await shot(page, "09.01-projet-cycle-actif-runtime.png");
  }

  await page.goto(urls.urls.travail, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "travail-apres-proposition-runtime.png");

  // 09.11 — proposition séquentielle
  await page.goto(urls.urls.traj11, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  await shot(page, "09.11-proposition-initiale-runtime.png");

  const futureBtn = page.locator('[data-testid="trajectory-forecast-step-2"]');
  if (await futureBtn.count()) {
    await futureBtn.click();
    await page.waitForSelector('[data-testid="trajectory-etape-future"]');
    await shot(page, "09.04-etape-envisagee-runtime.png");
    await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    await page.waitForSelector('[data-testid="trajectory-proposal-sequential"]');
  }

  await page.click('[data-testid="trajectory-open-cki"]');
  await page.waitForSelector('[data-testid="trajectory-cki-methode"]');
  await shot(page, "09.05-cki-methode-runtime.png");

  // 05.17 + 09.10 — analyzing (HOLD expected on server)
  await page.goto(urls.urls.travailLock, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="nora-composer"]');
  await shot(page, "05.17-travail-qualification-runtime.png");

  await page.goto(urls.urls.traj10, { waitUntil: "networkidle" });
  await page.waitForSelector('[data-testid="trajectory-qualification-progress"]', {
    timeout: 15000,
  });
  await shot(page, "09.10-qualification-en-cours-runtime.png");

  // 09.07 — clarification
  await page.goto(urls.urls.traj07, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await shot(page, "09.07-clarification-runtime.png");

  // 09.09 — premier cycle actif
  if (urls.urls.traj09) {
    await page.goto(urls.urls.traj09, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-active-cycle"]');
    await shot(page, "09.09-premier-cycle-actif-runtime.png");
  }

  // 09.02 — clos + actif + futur
  if (urls.urls.traj02) {
    await page.goto(urls.urls.traj02, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-roadmap"]');
    await shot(page, "09.02-trajectoire-principale-runtime.png");
    const bilan = page.locator('[data-testid="trajectory-closed-cycle"] button').first();
    if (await bilan.count()) {
      await bilan.click();
      await page.waitForSelector('[data-testid="trajectory-bilan-historique"]');
      await shot(page, "09.03-bilan-historique-runtime.png");
      await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    }
  }

  // 09.08 — entre deux cycles
  if (urls.urls.traj08) {
    await page.goto(urls.urls.traj08, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="trajectory-between-cycles"]');
    await shot(page, "09.08-entre-deux-cycles-runtime.png");
  }

  // SAS 06 — preparation page (popup requires live create; capture prep + note)
  await page.goto(urls.urls.sasPrep, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await shot(page, "sas-06-preparation-runtime.png");

  const files = readdirSync(outDir).filter((f) => f.endsWith(".png"));
  const manifest = {
    capturedAt: new Date().toString(),
    viewport: { w: 1680, h: 970 },
    browser: "chromium/playwright",
    holdEnvNote: "09.10/05.17 require server STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=1",
    projects: {
      proposed: urls.proposed.projectId,
      analyzing: urls.analyzing.projectId,
      clarification: urls.clarification.projectId,
      firstActive: urls.firstActive?.projectId ?? null,
      withHistory: urls.withHistory?.projectId ?? null,
      between: urls.between?.projectId ?? null,
    },
    files,
  };
  writeFileSync(resolve(outDir, "capture-manifest.json"), JSON.stringify(manifest, null, 2));
  await browser.close();
  console.log("done", files.length, "png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
