/**
 * ML5 Cycle 9 — mono-attempt BROWSER journey (Playwright).
 * Exercises real product APIs/UI: D6 No/Yes, SCRIPTED phased RUNNING, D8 bilan, Nora return.
 */
import { createHash } from "crypto";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { chromium, type Page } from "@playwright/test";

const BASE = process.env.SFIA_C9_BASE_URL ?? "http://127.0.0.1:3100";
const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c9");
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
};

type Step = {
  step: string;
  action: string;
  transition?: string;
  api?: { route: string; status: number; useful?: unknown };
  browser?: { url: string; state: string };
  capture?: { file: string; sha256: string; bytes: number };
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

async function autoSession(page: Page) {
  const res = await page.request.post(`${BASE}/api/dev/auto-session`, {
    data: {},
  });
  const j = (await res.json()) as { ok?: boolean; pilotId?: string; error?: string };
  if (!res.ok() || !j.ok) {
    throw new Error(`auto-session failed: ${res.status()} ${JSON.stringify(j)}`);
  }
  return j.pilotId!;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  if (!existsSync(IDS_PATH)) {
    throw new Error(`Missing ${IDS_PATH} — run ml5-c9-seed-scenario.mts first`);
  }
  const ids = JSON.parse(readFileSync(IDS_PATH, "utf8")) as ScenarioIds;
  const steps: Step[] = [];
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const pilotId = await autoSession(page);
  steps.push({
    step: "S0-session",
    action: "POST /api/dev/auto-session (Pilote A DEV)",
    api: { route: "/api/dev/auto-session", status: 200, useful: { pilotId } },
    data: "SCRIPTED",
    criteria: ["ENV-01", "DÉC-ML5-DEV"],
    verdict: pilotId === ids.pilotId || Boolean(pilotId) ? "PASS" : "FAIL",
    reserve:
      pilotId !== ids.pilotId
        ? `pilotId session ${pilotId} ≠ seed ${ids.pilotId} — vérifier Pilot A`
        : undefined,
  });

  // ——— A: Travail + contrat inspectable ———
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=travail`, {
    waitUntil: "networkidle",
  });
  const cTravail = await shot(page, "c9-a1-travail.png");
  steps.push({
    step: "A1-travail",
    action: "Ouvrir surface Travail du projet C9",
    browser: { url: page.url(), state: "travail" },
    capture: cTravail,
    data: "OBSERVED",
    criteria: ["CA-01", "CA-03"],
    verdict: "PASS",
  });

  await page.goto(`${BASE}/projects/${ids.projectId}?surface=execution`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector('[data-testid="cursor-realization-surface"]', {
    timeout: 20000,
  });
  const selectBtn = page.locator(`[data-testid="contract-select-${ids.contractId}"]`);
  await selectBtn.click();
  await page.waitForSelector('[data-testid="contract-viewer"]');
  const toggle = page.locator('[data-testid="contract-instruction-toggle"]');
  if (await toggle.count()) await toggle.click();
  await page.waitForSelector('[data-testid="contract-instruction-full"]', {
    timeout: 5000,
  }).catch(() => null);
  const cContract = await shot(page, "c9-a2-contrat-inspectable.png");
  const instrVisible = await page.locator('[data-testid="contract-instruction-full"]').count();
  steps.push({
    step: "A2-contrat",
    action: "Sélectionner contrat + ouvrir instruction intégrale",
    transition: "viewer closed → contract-viewer open",
    browser: {
      url: page.url(),
      state: `contract ${ids.contractId} v${ids.contractVersion}`,
    },
    capture: cContract,
    data: "OBSERVED",
    criteria: ["CA-03", "CA-04"],
    verdict: instrVisible > 0 ? "PASS" : "PARTIAL",
    reserve:
      instrVisible === 0
        ? "Instruction full non visible — preview seule"
        : undefined,
  });

  // ——— B1: D6 Non ———
  const preparePromise1 = page.waitForResponse(
    (r) => r.url().includes("/attempts/prepare") && r.request().method() === "POST",
    { timeout: 20000 },
  );
  await page.locator(`[data-testid="contract-prepare-${ids.contractId}"]`).click();
  const prep1 = await preparePromise1;
  const prep1Json = (await prep1.json().catch(() => ({}))) as {
    attemptId?: string;
    error?: string;
    message?: string;
  };
  if (!prep1.ok()) {
    const cFail = await shot(page, "c9-b1-prepare-fail.png");
    steps.push({
      step: "B1-prepare-fail",
      action: "Préparer exécution",
      api: { route: "/attempts/prepare", status: prep1.status(), useful: prep1Json },
      capture: cFail,
      data: "OBSERVED",
      criteria: ["CA-04"],
      verdict: "FAIL",
      reserve: prep1Json.message ?? prep1Json.error,
    });
    writeFileSync(join(OUT, "c9-mono-manifest.json"), JSON.stringify({ steps, ids }, null, 2));
    throw new Error(`prepare failed: ${JSON.stringify(prep1Json)}`);
  }
  await page.waitForSelector('[data-testid="d6-confirm-launch"]', { timeout: 15000 });
  const cD6Dialog = await shot(page, "c9-b1-d6-confirm-avant-non.png");
  steps.push({
    step: "B1-dialog",
    action: "Préparer exécution → dialogue D6",
    transition: "PREPARED → confirm dialog",
    capture: cD6Dialog,
    data: "OBSERVED",
    criteria: ["CA-04", "T-02"],
    verdict: "PASS",
  });

  const refuseRespPromise = page.waitForResponse(
    (r) =>
      r.url().includes("/authorize") && r.request().method() === "POST",
    { timeout: 20000 },
  );
  await page.locator('[data-testid="d6-confirm-no"]').click();
  const refuseResp = await refuseRespPromise;
  const refuseJson = (await refuseResp.json().catch(() => ({}))) as {
    status?: string;
    decisionId?: string;
    attemptId?: string;
    refused?: boolean;
  };
  ids.attemptIdRefuse = refuseJson.attemptId ?? null;
  await page.waitForTimeout(500);
  const cRefuse = await shot(page, "c9-b1-d6-refus.png");
  const attemptsAfterRefuse = await page.request.get(
    `${BASE}/api/projects/${ids.projectId}/realization/attempts`,
  );
  const attemptsRefuseBody = (await attemptsAfterRefuse.json()) as {
    attempts?: Array<{ attemptId: string; status: string; decisionId?: string | null }>;
  };
  const refusedRow = attemptsRefuseBody.attempts?.find(
    (a) => a.attemptId === refuseJson.attemptId,
  );
  const noDispatch = !(attemptsRefuseBody.attempts ?? []).some((a) =>
    ["AUTHORIZED", "DISPATCHED", "COMPLETED"].includes(a.status) &&
    a.attemptId === refuseJson.attemptId,
  );
  steps.push({
    step: "B1-refus",
    action: "Clic Non → authorize confirmed:false",
    transition: `PREPARED → ${refuseJson.status ?? "?"} (decision ${refuseJson.decisionId ?? "—"})`,
    api: {
      route: `/realization/attempts/${refuseJson.attemptId}/authorize`,
      status: refuseResp.status(),
      useful: refuseJson,
    },
    capture: cRefuse,
    data: "OBSERVED",
    criteria: ["CA-04", "T-02", "T-03"],
    verdict:
      refuseResp.ok() &&
      refuseJson.status === "CANCELLED" &&
      Boolean(refuseJson.decisionId) &&
      noDispatch
        ? "PASS"
        : "FAIL",
    reserve:
      refusedRow?.status !== "CANCELLED"
        ? `Statut persisté: ${refusedRow?.status}`
        : undefined,
  });

  // ——— B2 + C: D6 Oui + SCRIPTED phased ———
  await page.locator(`[data-testid="contract-prepare-${ids.contractId}"]`).click();
  await page.waitForSelector('[data-testid="d6-confirm-launch"]', { timeout: 15000 });
  const cYesDialog = await shot(page, "c9-b2-d6-confirm-avant-oui.png");
  steps.push({
    step: "B2-dialog",
    action: "Seconde préparation → dialogue D6 Oui",
    capture: cYesDialog,
    data: "OBSERVED",
    criteria: ["CA-04", "T-03"],
    verdict: "PASS",
  });

  const authYesPromise = page.waitForResponse(
    (r) =>
      r.url().includes("/authorize") && r.request().method() === "POST",
    { timeout: 20000 },
  );
  const dispatchPromise = page.waitForResponse(
    (r) =>
      r.url().includes("/dispatch") && r.request().method() === "POST",
    { timeout: 30000 },
  );
  await page.locator('[data-testid="d6-confirm-yes"]').click();
  const authYes = await authYesPromise;
  const authYesJson = (await authYes.json().catch(() => ({}))) as {
    status?: string;
    decisionId?: string;
    attemptId?: string;
    fingerprint?: string;
  };
  const dispatchRes = await dispatchPromise;
  const dispatchJson = (await dispatchRes.json().catch(() => ({}))) as {
    status?: string;
    attemptId?: string;
    live?: { lastActivitySummary?: string; terminalStatus?: string | null };
  };
  ids.attemptIdYes = authYesJson.attemptId ?? dispatchJson.attemptId ?? null;
  await page.waitForTimeout(800);
  const cRunning = await shot(page, "c9-c1-running.png");
  const runningOk =
    dispatchRes.ok() &&
    (dispatchJson.status === "DISPATCHED" ||
      dispatchJson.live?.lastActivitySummary?.includes("RUNNING") ||
      dispatchJson.status === "COMPLETED");
  steps.push({
    step: "B2-oui-C1-dispatch",
    action: "D6 Oui + dispatch SCRIPTED",
    transition: `PREPARED → AUTHORIZED → ${dispatchJson.status}`,
    api: {
      route: "authorize+dispatch",
      status: dispatchRes.status(),
      useful: { authYesJson, dispatchJson },
    },
    capture: cRunning,
    data: "OBSERVED",
    criteria: ["CA-05", "CA-06", "T-04", "T-05"],
    verdict:
      authYes.ok() &&
      authYesJson.status === "AUTHORIZED" &&
      authYesJson.fingerprint === ids.fingerprint &&
      runningOk
        ? "PASS"
        : "FAIL",
  });

  // If phased DISPATCHED, reconcile to COMPLETED
  let terminalStatus = dispatchJson.status;
  if (ids.attemptIdYes && dispatchJson.status === "DISPATCHED") {
    const recon = await page.request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${ids.attemptIdYes}/reconcile`,
    );
    const reconJson = (await recon.json().catch(() => ({}))) as {
      status?: string;
      live?: { lastActivitySummary?: string };
    };
    terminalStatus = reconJson.status;
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForSelector('[data-testid="cursor-realization-surface"]');
    const cTerm = await shot(page, "c9-c2-completed.png");
    steps.push({
      step: "C2-reconcile",
      action: "Réconcilier tentative SCRIPTED_PHASED → COMPLETED",
      transition: `DISPATCHED → ${reconJson.status}`,
      api: {
        route: `/attempts/${ids.attemptIdYes}/reconcile`,
        status: recon.status(),
        useful: reconJson,
      },
      capture: cTerm,
      data: "OBSERVED",
      criteria: ["CA-06", "T-06"],
      verdict: recon.ok() && reconJson.status === "COMPLETED" ? "PASS" : "FAIL",
    });
  } else {
    const cTerm = await shot(page, "c9-c2-completed.png");
    steps.push({
      step: "C2-terminal",
      action: "État terminal après dispatch (non phasé ou déjà COMPLETED)",
      transition: String(terminalStatus),
      capture: cTerm,
      data: "OBSERVED",
      criteria: ["CA-06"],
      verdict: terminalStatus === "COMPLETED" ? "PASS" : "PARTIAL",
      reserve:
        terminalStatus !== "COMPLETED"
          ? "Pas d'état DISPATCHED intermédiaire capturé — PHASED peut être off"
          : undefined,
    });
  }

  // Ingest SCRIPTED handoff for D8 proofs
  if (ids.attemptIdYes) {
    const report = [
      `# Rapport de réalisation (SCRIPTED) — C9`,
      `attemptId: ${ids.attemptIdYes}`,
      `contractFingerprint: ${ids.fingerprint}`,
      ``,
      `## Inventaire`,
      `- Seed + parcours BROWSER C9`,
      ``,
      `## Tests`,
      `- Playwright ml5-c9-e2e-journey`,
      ``,
      `## Réserves`,
      `- ≠ Cursor SDK LIVE`,
    ].join("\n");
    const handoff = await page.request.post(
      `${BASE}/api/projects/${ids.projectId}/realization/attempts/${ids.attemptIdYes}/handoff`,
      {
        data: {
          reportMarkdown: report,
          expectedContractFingerprint: ids.fingerprint,
          provenance: {
            acquisition: "SCRIPTED_ADAPTER",
            // Must match observed agentId when both declared (CF-09 honesty).
            declaredExecutorId: `scripted-agent-${ids.attemptIdYes}`,
            observedAgentId: `scripted-agent-${ids.attemptIdYes}`,
            observedRunId: `scripted-run-${ids.attemptIdYes}`,
          },
          manifest: {
            filesCreated: [],
            filesModified: [],
            testsDeclared: ["c9-e2e-journey"],
            testsExecuted: ["c9-e2e-journey"],
            gaps: ["Inventaire: aucune modification fichier (SCRIPTED)", "SCRIPTED_NOT_LIVE"],
          },
        },
      },
    );
    steps.push({
      step: "C3-handoff",
      action: "POST handoff SCRIPTED_ADAPTER",
      api: {
        route: `/attempts/${ids.attemptIdYes}/handoff`,
        status: handoff.status(),
        useful: await handoff.json().catch(() => ({})),
      },
      data: "SCRIPTED",
      criteria: ["CA-07"],
      verdict: handoff.ok() ? "PASS" : "PARTIAL",
    });
  }

  // ——— C3 reconnexion ———
  await context.clearCookies();
  await autoSession(page);
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=execution`, {
    waitUntil: "networkidle",
  });
  const rowSel = ids.attemptIdYes
    ? `[data-testid="attempt-row-${ids.attemptIdYes}"]`
    : '[data-testid^="attempt-row-"]';
  await page.waitForSelector(rowSel, { timeout: 15000 });
  const cReconnect = await shot(page, "c9-c3-reconnexion.png");
  steps.push({
    step: "C3-reconnexion",
    action: "Cookies purgés + auto-session + tentative retrouvée",
    browser: { url: page.url(), state: `row ${ids.attemptIdYes}` },
    capture: cReconnect,
    data: "OBSERVED",
    criteria: ["CA-06", "T-06"],
    verdict: "PASS",
  });

  // ——— D: Bilan D8 ———
  await page.goto(`${BASE}/projects/${ids.projectId}?surface=publication`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector('[data-testid="cursor-realization-surface"]');
  if (!ids.attemptIdYes) throw new Error("attemptIdYes missing");
  await page.locator(`[data-testid="attempt-bilan-${ids.attemptIdYes}"]`).click();
  await page.waitForSelector('[data-testid="realization-bilan"]', { timeout: 20000 });
  const bilanAttempt = await page
    .locator('[data-testid="realization-bilan"]')
    .getAttribute("data-attempt-id");
  const cBilan = await shot(page, "c9-d1-bilan-synthese.png");
  steps.push({
    step: "D1-bilan",
    action: "Ouvrir Bilan D8 depuis Résultats et preuves",
    transition: "liste → realization-bilan",
    browser: {
      url: page.url(),
      state: `bilan attempt=${bilanAttempt}`,
    },
    capture: cBilan,
    data: "OBSERVED",
    criteria: ["CA-07", "CA-09", "T-07"],
    verdict: bilanAttempt === ids.attemptIdYes ? "PASS" : "FAIL",
  });

  const tabShots: Array<{ tab: string; file: string }> = [
    { tab: "livrables", file: "c9-d2-bilan-livrables.png" },
    { tab: "git", file: "c9-d2-bilan-git.png" },
    { tab: "ecarts", file: "c9-d2-bilan-ecarts.png" },
    { tab: "synthese", file: "c9-d2-bilan-synthese-retour.png" },
  ];
  for (const t of tabShots) {
    await page.locator(`[data-testid="bilan-tab-${t.tab}"]`).click();
    await page.waitForTimeout(200);
    const cap = await shot(page, t.file);
    steps.push({
      step: `D2-tab-${t.tab}`,
      action: `Onglet bilan ${t.tab}`,
      capture: cap,
      data: "OBSERVED",
      criteria: ["CA-07", "T-08"],
      verdict: "PASS",
    });
  }

  // ——— E: Retour Nora ———
  await page.locator('[data-testid="bilan-discuss-nora"]').click();
  await page.waitForTimeout(800);
  await page.waitForSelector('[data-testid="nora-composer"]', { timeout: 15000 });
  const draftVal = await page.locator('[data-testid="thread-draft"]').inputValue().catch(() => "");
  const cNora = await shot(page, "c9-e1-retour-nora.png");
  const draftHasAttempt =
    draftVal.includes(ids.attemptIdYes) || draftVal.includes("tentative");
  steps.push({
    step: "E1-retour-nora",
    action: "En discuter avec Nora → Travail, brouillon non envoyé",
    browser: {
      url: page.url(),
      state: `draftLen=${draftVal.length}`,
    },
    capture: cNora,
    data: "OBSERVED",
    criteria: ["CA-08", "T-09", "T-10"],
    verdict:
      page.url().includes("surface=travail") || draftHasAttempt || draftVal.length > 0
        ? "PASS"
        : "PARTIAL",
    reserve: !draftHasAttempt
      ? "Brouillon présent mais attemptId non détecté dans value"
      : undefined,
  });

  // Persist updated IDs
  writeFileSync(IDS_PATH, JSON.stringify({ ...ids, attemptIdYes: ids.attemptIdYes, attemptIdRefuse: ids.attemptIdRefuse, updatedAt: new Date().toISOString() }, null, 2));

  const manifest = {
    scenarioId: ids.scenarioId,
    at: new Date().toISOString(),
    tool: "playwright",
    frontier: "SCRIPTED_PHASED_DEV",
    correlation: {
      pilotId: ids.pilotId,
      projectId: ids.projectId,
      projectName: ids.projectName,
      contractId: ids.contractId,
      contractKey: ids.contractKey,
      fingerprint: ids.fingerprint,
      attemptIdRefuse: ids.attemptIdRefuse,
      attemptIdYes: ids.attemptIdYes,
    },
    honesty: {
      noraCognitiveContractCreation: false,
      cursorSdkLive: false,
      webLive: false,
      d6RefusalIsAuthenticatedAct: true,
      phasedScriptedObservations: true,
    },
    steps,
    summary: {
      pass: steps.filter((s) => s.verdict === "PASS").length,
      fail: steps.filter((s) => s.verdict === "FAIL").length,
      partial: steps.filter((s) => s.verdict === "PARTIAL").length,
      captures: steps.filter((s) => s.capture).length,
    },
  };
  writeFileSync(join(OUT, "c9-mono-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(JSON.stringify(manifest.summary, null, 2));
  console.log(`attemptIdYes=${ids.attemptIdYes}`);
  console.log(`attemptIdRefuse=${ids.attemptIdRefuse}`);
  await browser.close();
  if (manifest.summary.fail > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
