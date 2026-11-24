/**
 * ML5 Cycle 10 — BROWSER journey: Travail 50/50, D6 visible, handoff→D8, overflow checks.
 */
import { createHash } from "crypto";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { chromium, type Page } from "@playwright/test";

const BASE = process.env.SFIA_C10_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c10");
const IDS_PATH = join(OUT, "scenario-ids.json");

type ScenarioIds = {
  scenarioId: string;
  pilotId: string;
  projectId: string;
  projectName: string;
  preparationId: string;
  contractId: string;
  contractKey: string;
  contractVersion: number;
  fingerprint: string;
  attemptIdYes: string | null;
  attemptIdRefuse: string | null;
  handoffId?: string | null;
  qualificationId?: string | null;
};

type Step = {
  step: string;
  action: string;
  transition?: string;
  api?: { route: string; status: number; useful?: unknown };
  browser?: { url: string; state: string };
  capture?: { file: string; sha256: string; bytes: number };
  geom?: unknown;
  data: "SCRIPTED" | "OBSERVED" | "DECLARED";
  criteria: string[];
  verdict: "PASS" | "FAIL" | "PARTIAL" | "NOT PROVEN";
  reserve?: string;
};

function sha256(buf: Buffer) {
  return createHash("sha256").update(buf).digest("hex");
}

async function shot(page: Page, name: string) {
  const path = join(OUT, name);
  await page.screenshot({ path, fullPage: false });
  const buf = readFileSync(path);
  return { file: name, sha256: sha256(buf), bytes: buf.length, path };
}

async function measureOverflow(page: Page) {
  // String form avoids tsx/esbuild __name injection into the browser context.
  return page.evaluate(`(() => {
    const viewer = document.querySelector('[data-testid="contract-viewer"]');
    const instr = document.querySelector('[data-testid="contract-instruction-full"]');
    const dialog = document.querySelector('[data-testid="d6-confirm-launch"]');
    const dialogCard = document.querySelector(".fig-d6-confirm-card");
    const box = (el) =>
      el
        ? {
            x: Math.round(el.getBoundingClientRect().x),
            y: Math.round(el.getBoundingClientRect().y),
            w: Math.round(el.getBoundingClientRect().width),
            h: Math.round(el.getBoundingClientRect().height),
            scrollW: el.scrollWidth,
            clientW: el.clientWidth,
            overflowX: el.scrollWidth > el.clientWidth + 2,
          }
        : null;
    return {
      viewport: { w: window.innerWidth, h: window.innerHeight },
      viewer: box(viewer),
      instruction: box(instr),
      dialog: box(dialog),
      dialogCard: box(dialogCard),
      dialogVisible: Boolean(
        dialog &&
          getComputedStyle(dialog).display !== "none" &&
          dialog.getBoundingClientRect().height > 40,
      ),
    };
  })()`);
}

async function autoSession(page: Page) {
  const res = await page.request.post(`${BASE}/api/dev/auto-session`, { data: {} });
  const j = (await res.json()) as { ok?: boolean; pilotId?: string };
  if (!res.ok() || !j.ok) throw new Error(`auto-session failed: ${res.status()}`);
  return j.pilotId!;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  if (!existsSync(IDS_PATH)) throw new Error(`Missing ${IDS_PATH}`);
  const ids = JSON.parse(readFileSync(IDS_PATH, "utf8")) as ScenarioIds;
  const steps: Step[] = [];
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1680, height: 970 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await autoSession(page);

  // ——— Neg: confirmed absent ———
  {
    const prep = await page.request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/prepare`,
      {
        data: {
          contractId: ids.contractId,
          correlationKey: `c10-neg-absent-${Date.now()}`,
          workspaceKey: "default",
        },
      },
    );
    const pj = (await prep.json()) as { attemptId?: string };
    const auth = await page.request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${pj.attemptId}/authorize`,
      {
        data: {
          statement: "test absent confirmed",
          inspectedFingerprint: ids.fingerprint,
          // confirmed intentionally omitted
        },
      },
    );
    const aj = await auth.json();
    steps.push({
      step: "N1-confirmed-absent",
      action: "POST authorize without confirmed",
      api: { route: "/authorize", status: auth.status(), useful: aj },
      data: "OBSERVED",
      criteria: ["T-02", "CA-04"],
      verdict: auth.status() === 400 ? "PASS" : "FAIL",
      reserve: auth.status() === 400 ? undefined : "confirmed absent should 400",
    });
  }

  // ——— A/B: Travail 50/50 + instruction + D6 ———
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=travail`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector('[data-testid="travail-refresh-contracts"], [data-testid="nora-workspace"]', {
    timeout: 20000,
  });
  const refresh = page.locator('[data-testid="travail-refresh-contracts"]');
  if (await refresh.count()) await refresh.click();
  await page.waitForTimeout(400);
  const openBtn = page.locator(`[data-testid="travail-open-contract-${ids.contractId}"]`);
  await openBtn.waitFor({ timeout: 15000 });
  await openBtn.click();
  await page.waitForSelector('[data-testid="contract-viewer"]', { timeout: 15000 });
  await page.locator('[data-testid="contract-instruction-toggle"]').click();
  await page.waitForSelector('[data-testid="contract-instruction-full"]');
  const geomA = await measureOverflow(page);
  const cA = await shot(page, "c10-a-travail-50-50-instruction.png");
  steps.push({
    step: "A-travail-50-50",
    action: "Ouvrir contrat READY en Travail 50/50 + instruction intégrale",
    browser: { url: page.url(), state: "travail+contract-viewer" },
    capture: cA,
    geom: geomA,
    data: "OBSERVED",
    criteria: ["CA-04", "CA-09"],
    verdict:
      geomA.instruction &&
      !geomA.instruction.overflowX &&
      geomA.viewer &&
      geomA.viewer.x >= 200
        ? "PASS"
        : "FAIL",
    reserve: geomA.instruction?.overflowX
      ? "overflow-x instruction"
      : undefined,
  });

  // D6 Non from Travail
  await page.locator('[data-testid="contract-request-execute"]').click();
  await page.waitForSelector('[data-testid="d6-confirm-launch"]', { timeout: 15000 });
  const geomD6 = await measureOverflow(page);
  const cD6 = await shot(page, "c10-b1-d6-dialog-visible.png");
  steps.push({
    step: "B1-d6-visible",
    action: "Dialogue D6 visible (overlay) depuis Travail",
    capture: cD6,
    geom: geomD6,
    data: "OBSERVED",
    criteria: ["CA-04", "T-02"],
    verdict: geomD6.dialogVisible && (geomD6.dialogCard?.h ?? 0) > 80 ? "PASS" : "FAIL",
  });

  const refuseP = page.waitForResponse(
    (r) => r.url().includes("/authorize") && r.request().method() === "POST",
  );
  await page.locator('[data-testid="d6-confirm-no"]').click();
  const refuseR = await refuseP;
  const refuseJ = (await refuseR.json()) as {
    attemptId?: string;
    status?: string;
    decisionId?: string;
  };
  ids.attemptIdRefuse = refuseJ.attemptId ?? null;
  const cRefuse = await shot(page, "c10-b1-d6-refus.png");
  steps.push({
    step: "B1-refus",
    action: "D6 Non depuis Travail",
    transition: `PREPARED → ${refuseJ.status}`,
    api: { route: "/authorize", status: refuseR.status(), useful: refuseJ },
    capture: cRefuse,
    data: "OBSERVED",
    criteria: ["T-02"],
    verdict:
      refuseR.ok() && refuseJ.status === "CANCELLED" && Boolean(refuseJ.decisionId)
        ? "PASS"
        : "FAIL",
  });

  // D6 Oui from Travail
  await page.locator('[data-testid="contract-request-execute"]').click();
  await page.waitForSelector('[data-testid="d6-confirm-launch"]');
  await shot(page, "c10-b2-d6-avant-oui.png");
  const authP = page.waitForResponse(
    (r) => r.url().includes("/authorize") && r.request().method() === "POST",
  );
  const dispP = page.waitForResponse(
    (r) => r.url().includes("/dispatch") && r.request().method() === "POST",
  );
  await page.locator('[data-testid="d6-confirm-yes"]').click();
  const authR = await authP;
  const authJ = (await authR.json()) as {
    attemptId?: string;
    status?: string;
    fingerprint?: string;
    decisionId?: string;
  };
  const dispR = await dispP;
  const dispJ = (await dispR.json()) as {
    status?: string;
    attemptId?: string;
    live?: { lastActivitySummary?: string };
  };
  ids.attemptIdYes = authJ.attemptId ?? dispJ.attemptId ?? null;
  await page.waitForTimeout(600);
  const cRun = await shot(page, "c10-c1-running-or-dispatched.png");
  steps.push({
    step: "B2-oui-dispatch",
    action: "D6 Oui + dispatch depuis Travail",
    transition: `→ ${dispJ.status}`,
    api: { route: "authorize+dispatch", status: dispR.status(), useful: { authJ, dispJ } },
    capture: cRun,
    data: "OBSERVED",
    criteria: ["CA-04", "CA-05", "T-03"],
    verdict:
      authR.ok() &&
      authJ.status === "AUTHORIZED" &&
      authJ.fingerprint === ids.fingerprint &&
      dispR.ok()
        ? "PASS"
        : "FAIL",
  });

  // Ensure on execution for reconcile
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=execution`, {
    waitUntil: "networkidle",
  });
  if (ids.attemptIdYes && dispJ.status === "DISPATCHED") {
    const recon = await page.request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${ids.attemptIdYes}/reconcile`,
    );
    const rj = await recon.json();
    steps.push({
      step: "C2-reconcile",
      action: "Reconcile SCRIPTED_PHASED",
      api: { route: "/reconcile", status: recon.status(), useful: rj },
      data: "OBSERVED",
      criteria: ["CA-06"],
      verdict: recon.ok() && (rj as { status?: string }).status === "COMPLETED" ? "PASS" : "FAIL",
    });
  }
  await page.reload({ waitUntil: "networkidle" });
  await shot(page, "c10-c2-completed.png");

  // ——— C: bilan BEFORE handoff ———
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=publication`, {
    waitUntil: "networkidle",
  });
  if (!ids.attemptIdYes) throw new Error("no attemptIdYes");
  await page.locator(`[data-testid="attempt-bilan-${ids.attemptIdYes}"]`).click();
  await page.waitForSelector('[data-testid="realization-bilan"]', { timeout: 20000 });
  const beforeResume = await page
    .locator('[data-testid="bilan-rubric-resume"]')
    .innerText()
    .catch(() => "");
  const cBefore = await shot(page, "c10-d0-bilan-avant-handoff.png");
  steps.push({
    step: "D0-bilan-avant",
    action: "Bilan avant ingestion handoff (état incomplet attendu)",
    capture: cBefore,
    data: "OBSERVED",
    criteria: ["CA-07"],
    verdict: /manquant|MISSING|INDETERMINATE|PARTIAL/i.test(beforeResume)
      ? "PASS"
      : "PARTIAL",
    reserve: "Oracle: rapport manquant ou couverture MISSING avant handoff",
  });

  // Ingest handoff
  const report = [
    `# Rapport SCRIPTED C10`,
    `attemptId: ${ids.attemptIdYes}`,
    ``,
    `## Inventaire`,
    `- aucune modification fichier`,
    ``,
    `## Tests`,
    `- c10-e2e-journey`,
    ``,
    `## Réserves`,
    `- SCRIPTED_NOT_LIVE`,
  ].join("\n");
  const handoff = await page.request.post(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts/${ids.attemptIdYes}/handoff`,
    {
      data: {
        reportMarkdown: report,
        expectedContractFingerprint: ids.fingerprint,
        provenance: {
          acquisition: "SCRIPTED_ADAPTER",
          declaredExecutorId: `scripted-agent-${ids.attemptIdYes}`,
          observedAgentId: `scripted-agent-${ids.attemptIdYes}`,
          observedRunId: `scripted-run-${ids.attemptIdYes}`,
        },
        manifest: {
          filesCreated: [],
          filesModified: [],
          testsDeclared: ["c10-e2e-journey"],
          testsExecuted: ["c10-e2e-journey"],
          gaps: ["Inventaire: aucune modification fichier (SCRIPTED)", "SCRIPTED_NOT_LIVE"],
        },
      },
    },
  );
  const hj = (await handoff.json()) as { handoffId?: string; status?: string; error?: string };
  ids.handoffId = hj.handoffId ?? null;
  steps.push({
    step: "C3-handoff",
    action: "POST handoff SCRIPTED_ADAPTER",
    api: { route: "/handoff", status: handoff.status(), useful: hj },
    data: "SCRIPTED",
    criteria: ["CA-07"],
    verdict: handoff.ok() && hj.status === "RECEIVED" ? "PASS" : "FAIL",
  });

  // Re-open bilan (should requalify)
  await page.reload({ waitUntil: "networkidle" });
  await page.locator(`[data-testid="attempt-bilan-${ids.attemptIdYes}"]`).click();
  await page.waitForSelector('[data-testid="realization-bilan"]', { timeout: 20000 });
  await page.waitForTimeout(800);
  const afterResume = await page
    .locator('[data-testid="bilan-rubric-resume"]')
    .innerText()
    .catch(() => "");
  const cAfter = await shot(page, "c10-d1-bilan-apres-handoff.png");
  const reportOk = !/rapport manquant/i.test(afterResume);
  steps.push({
    step: "D1-bilan-apres",
    action: "Bilan après handoff RECEIVED (requalify judgment_correction)",
    capture: cAfter,
    data: "OBSERVED",
    criteria: ["CA-07", "CA-09"],
    verdict: reportOk ? "PASS" : "FAIL",
    reserve: reportOk ? undefined : `resume still: ${afterResume.slice(0, 120)}`,
  });

  for (const tab of ["livrables", "git", "ecarts", "synthese"] as const) {
    await page.locator(`[data-testid="bilan-tab-${tab}"]`).click();
    await page.waitForTimeout(200);
    const cap = await shot(page, `c10-d2-bilan-${tab}.png`);
    steps.push({
      step: `D2-tab-${tab}`,
      action: `Onglet ${tab}`,
      capture: cap,
      data: "OBSERVED",
      criteria: ["CA-07", "CA-09"],
      verdict: "PASS",
    });
  }

  // ——— E: Nora return ———
  await page.locator('[data-testid="bilan-discuss-nora"]').click();
  await page.waitForSelector('[data-testid="nora-composer"]', { timeout: 15000 });
  const draft = await page.locator('[data-testid="thread-draft"]').inputValue().catch(() => "");
  const cNora = await shot(page, "c10-e1-retour-nora.png");
  steps.push({
    step: "E1-retour-nora",
    action: "Retour Nora contextualisé",
    capture: cNora,
    browser: { url: page.url(), state: `draft=${draft.slice(0, 80)}` },
    data: "OBSERVED",
    criteria: ["CA-08", "T-10"],
    verdict: draft.includes(ids.attemptIdYes!) || draft.includes("tentative") ? "PASS" : "PARTIAL",
  });

  writeFileSync(
    IDS_PATH,
    JSON.stringify({ ...ids, updatedAt: new Date().toISOString() }, null, 2),
  );
  const manifest = {
    scenarioId: ids.scenarioId,
    at: new Date().toISOString(),
    tool: "playwright",
    frontier: "SCRIPTED_PHASED_DEV",
    viewport: { w: 1680, h: 970 },
    correlation: ids,
    honesty: {
      noraCognitive: false,
      cursorSdkLive: false,
      d6FromTravail: true,
      handoffBeforeAfterBilan: true,
      figmaF2: "NOT PROVEN — measures recorded; pair compare deferred",
    },
    steps,
    summary: {
      pass: steps.filter((s) => s.verdict === "PASS").length,
      fail: steps.filter((s) => s.verdict === "FAIL").length,
      partial: steps.filter((s) => s.verdict === "PARTIAL").length,
      captures: steps.filter((s) => s.capture).length,
    },
  };
  writeFileSync(join(OUT, "c10-mono-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(JSON.stringify(manifest.summary, null, 2));
  await browser.close();
  if (manifest.summary.fail > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
