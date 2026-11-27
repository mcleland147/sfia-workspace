/**
 * Targeted Exit — FinOps 13.03 browser qualification (DEV :3100).
 * PG → API → DOM concordance. No LIVE provider calls.
 *
 *   npx tsx scripts/ml5-targeted-exit-finops-browser.mts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "@playwright/test";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT = join(process.cwd(), ".sfia-evidence/targeted-exit/browser");
mkdirSync(OUT, { recursive: true });

const report: Record<string, unknown> = {
  script: "ml5-targeted-exit-finops-browser",
  base: BASE,
  startedAt: new Date().toISOString(),
  api: null as unknown,
  dom: null as unknown,
  screenshots: [] as string[],
  verdict: null as string | null,
};

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 960 },
    locale: "fr-FR",
  });
  const page = await context.newPage();

  // DEV login (cookie session)
  await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded", timeout: 60_000 });
  const loginOk = await page.evaluate(async () => {
    const res = await fetch("/api/dev/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pilot: "a" }),
      credentials: "include",
    });
    return res.ok;
  });
  if (!loginOk) {
    report.verdict = "FAIL_LOGIN";
    writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
    await browser.close();
    process.exit(2);
  }

  // API concordance (same session cookies)
  const apiRes = await page.request.get(`${BASE}/api/finops/summary?period=30`);
  const apiJson = (await apiRes.json()) as {
    summary?: {
      hasObservations?: boolean;
      kpis?: { estimatedCostUsd?: { kind?: string; value?: number } };
      providerReconciliation?: {
        studioEstimatedUsd: number | null;
        providerCostUsd: number | null;
        comparability: string;
        limits: string[];
        compareWindowStartUtc?: string | null;
        compareWindowEndUtc?: string | null;
        freshness?: { status?: string };
      };
    };
  };
  const recon = apiJson.summary?.providerReconciliation;
  report.api = {
    status: apiRes.status(),
    hasObservations: apiJson.summary?.hasObservations ?? false,
    studioKpi: apiJson.summary?.kpis?.estimatedCostUsd ?? null,
    reconciliation: recon
      ? {
          comparability: recon.comparability,
          studioEstimatedUsd: recon.studioEstimatedUsd,
          providerCostUsd: recon.providerCostUsd,
          providerDisclosed: recon.providerCostUsd != null,
          limitsSample: (recon.limits ?? []).slice(0, 8),
          window: {
            start: recon.compareWindowStartUtc ?? null,
            end: recon.compareWindowEndUtc ?? null,
          },
          freshness: recon.freshness?.status ?? null,
        }
      : null,
  };

  await page.goto(`${BASE}/settings/consumption`, {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  // Wait for either empty, KPIs, or comparison banner
  await page.waitForTimeout(1500);
  const banner = page.getByTestId("finops-cost-comparison");
  const empty = page.getByTestId("finops-empty");
  const kpis = page.getByTestId("finops-kpis");
  const hasBanner = await banner.count();
  const hasEmpty = await empty.count();
  const hasKpis = await kpis.count();

  let bannerText = "";
  let comparabilityAttr = "";
  let studioText = "";
  let providerText = "";
  let messagesText = "";
  if (hasBanner) {
    bannerText = (await banner.innerText()).replace(/\s+/g, " ").trim();
    comparabilityAttr = (await banner.getAttribute("data-comparability")) || "";
    studioText = (await page.getByTestId("finops-compare-studio").innerText())
      .replace(/\s+/g, " ")
      .trim();
    providerText = (await page.getByTestId("finops-compare-provider").innerText())
      .replace(/\s+/g, " ")
      .trim();
    if ((await page.getByTestId("finops-compare-messages").count()) > 0) {
      messagesText = (
        await page.getByTestId("finops-compare-messages").innerText()
      )
        .replace(/\s+/g, " ")
        .trim();
    }
  }

  const shotPath = join(OUT, "finops-consumption-13-03.png");
  await page.screenshot({ path: shotPath, fullPage: true });
  (report.screenshots as string[]).push(shotPath);

  // Forbidden technical leaks in Pilot UI
  const leak =
    /org:unspecified|disclosed|ownership|\bDTO\b|\bkind\b|NO_FINANCIAL_HABILITATION|ORG_IDENTITY/i.test(
      bannerText + " " + messagesText,
    );

  const titleOk = !hasBanner || bannerText.includes("Comparaison des coûts");
  const studioDistinct =
    !hasBanner || /Estimation Studio/i.test(studioText + " " + bannerText);
  const providerDistinct =
    !hasBanner || /Coût fournisseur|Non autorisé|Indisponible/i.test(providerText);
  const apiDomConcordant =
    !hasBanner ||
    !recon ||
    comparabilityAttr === recon.comparability;

  report.dom = {
    hasBanner: hasBanner > 0,
    hasEmpty: hasEmpty > 0,
    hasKpis: hasKpis > 0,
    comparabilityAttr,
    bannerTitleOk: titleOk,
    studioDistinct,
    providerDistinct,
    technicalLeak: leak,
    apiDomConcordant,
    studioText,
    providerText,
    messagesText: messagesText.slice(0, 400),
  };

  const ok =
    apiRes.ok() &&
    Boolean(recon) &&
    !leak &&
    titleOk &&
    studioDistinct &&
    providerDistinct &&
    apiDomConcordant &&
    (hasBanner > 0 || hasEmpty > 0);

  report.verdict = ok ? "FINOPS_UX_BROWSER_PROVEN" : "FINOPS_UX_BROWSER_GAP";
  report.finishedAt = new Date().toISOString();
  writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ verdict: report.verdict, api: report.api, dom: report.dom }, null, 2));
  await browser.close();
  process.exit(ok ? 0 : 3);
}

main().catch((e) => {
  report.verdict = "ERROR";
  report.lastError = e instanceof Error ? e.message : String(e);
  writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2));
  console.error(report.lastError);
  process.exit(1);
});
