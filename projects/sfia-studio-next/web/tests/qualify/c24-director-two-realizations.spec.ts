import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 director scenario — ONE project, TWO successive governed realizations.
 * Playwright automates Pilote clicks only — does not seed contracts / verdicts.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-director");
const LONG = 240_000;

test.describe.configure({ mode: "serial" });
test.setTimeout(900_000);

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

async function sendNora(page: import("@playwright/test").Page, text: string) {
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  await expect(draft).toHaveValue("", { timeout: 120_000 });
  // Capture prior assistant count so we wait for a new COMPLETE turn.
  const priorNora = await page.locator(".fig-msg-nora").count();
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 15_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: LONG });
  // Wait for LIVE Nora turn to finish — otherwise READY/prepare race a still-running
  // turn that advances cognitive revision past the contract filiation.
  const status = page.getByTestId("thread-nora-status");
  if (await status.count()) {
    await expect(status).toContainText(/COMPLETE|FAILED|UNKNOWN|INTERRUPTED/i, {
      timeout: LONG,
    });
  } else {
    await expect
      .poll(async () => page.locator(".fig-msg-nora").count(), { timeout: LONG })
      .toBeGreaterThan(priorNora);
  }
}

async function openExecutionSurface(
  page: import("@playwright/test").Page,
  projectId: string,
) {
  await page.goto(`/projects/${projectId}?surface=execution`);
  await expect(page.getByTestId("realization-contracts")).toBeVisible({
    timeout: 60_000,
  });
}

test("Director — investigation → R1 → bilan → continuity → R2", async ({
  page,
}) => {
  const report: Record<string, unknown> = {
    at: new Date().toISOString(),
    buildId: process.env.SFIA_BUILD_ID || null,
    workspaceRoot: process.env.SFIA_CURSOR_WORKSPACE_ROOT || null,
  };

  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 60_000,
  });
  const preparationId = await openNewPreparation(page);
  // Initial test data (allowed): durable document Nora can CONSULT before READY.
  const docRes = await page.request.post(
    `/api/preparations/${preparationId}/documents`,
    {
      data: {
        title: "Widget service — état initial",
        contentMarkdown: [
          "# Widget service",
          "",
          "## Fichiers",
          "- `src/widget.js` — `processWidget(input)` trim une string ; TypeError sinon.",
          "- `src/config.js` — `WIDGET_LIMITS.maxLen = 10000`.",
          "- `tests/widget.test.js` — test node:test du trim.",
          "",
          "## Contraintes",
          "- Pas de réseau dans les tests.",
          "- Workspace Git de test isolé du worktree Studio.",
        ].join("\n"),
        correlationKey: `c24-director-doc-${Date.now()}`,
      },
    },
  );
  report.seedDocumentOk = docRes.ok();
  const projectName = uniqueProjectName("C24 Director");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary:
      "Service widget multi-fichiers — deux réalisations gouvernées successives",
    alreadyUnique: true,
  });
  report.projectId = projectId;
  report.projectName = projectName;
  report.preparationId = preparationId;

  // --- Étape A: investigation multi-sources ---
  await sendNora(
    page,
    [
      "Lis d'abord le document « Widget service — état initial » (outil de lecture document),",
      "puis investigue : (1) ce que fait processWidget aujourd'hui d'après ce document,",
      "(2) la version Node LTS recommandée via le site officiel nodejs.org,",
      "(3) si nous devons rester sur une LTS pour ce service interne.",
      "Cite tes sources réellement consultées et signale ce qui n'est pas vérifié.",
    ].join(" "),
  );
  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible();
  const afterA = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepA = {
    assistantHead: afterA.slice(0, 500),
    len: afterA.length,
  };
  expect(afterA.length).toBeGreaterThan(80);
  await page.screenshot({
    path: path.join(EVIDENCE, "a-investigation.png"),
    fullPage: true,
  });

  // --- Étape B: first contract naturally ---
  await sendNora(
    page,
    [
      "Prépare maintenant un contrat technique Cursor pour une première intervention :",
      "ajouter processWidgetSafe(input) qui refuse les non-string (TypeError) et délègue le trim à processWidget pour les strings,",
      "mettre à jour les tests node:test, sans réseau. Inclure critères d'acceptation et preuves attendues.",
      "Utilise l'outil submit_cursor_contract_production.",
    ].join(" "),
  );
  await page.waitForTimeout(3000);
  await openExecutionSurface(page, projectId);

  // Wait for a contract to appear (Nora-produced DRAFT)
  let contractBtn = page.locator("[data-testid^=contract-select-]").first();
  await expect(contractBtn).toBeVisible({ timeout: LONG });
  const contractTestId = await contractBtn.getAttribute("data-testid");
  const contractId = contractTestId?.replace("contract-select-", "") ?? "";
  report.r1ContractId = contractId;
  await contractBtn.click();
  await expect(page.getByTestId("contract-viewer")).toBeVisible({ timeout: 30_000 });
  await page.getByTestId("contract-instruction-toggle").click().catch(() => undefined);
  await page.screenshot({
    path: path.join(EVIDENCE, "b-contract-r1.png"),
    fullPage: true,
  });

  // READY server act from UI — if refused, ask Nora to consult then retry (product path).
  async function tryReady(id: string): Promise<boolean> {
    const btn = page.getByTestId(`contract-ready-${id}`);
    if (!(await btn.count())) return false;
    await btn.click();
    await page.waitForTimeout(2500);
    const st = page.getByTestId("realization-status");
    if (await st.count()) {
      report.readyStatus = await st.textContent();
    }
    await openExecutionSurface(page, projectId);
    return (await page.getByTestId(`contract-prepare-${id}`).count()) > 0;
  }

  let readyOk = await tryReady(contractId);
  if (!readyOk) {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      [
        "READY a été refusé (sources ou filiation cognitive).",
        "Sans poursuivre d'autre discussion : relis le document Widget (corps complet),",
        "puis appelle submit_cursor_contract_production pour un NOUVEAU contrat processWidgetSafe",
        "lié à ce tour (filiation courante). Préparer ≠ autoriser.",
      ].join(" "),
    );
    await openExecutionSurface(page, projectId);
    // Newest contract carries the current cognitive revision filiation.
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    const nid = tid?.replace("contract-select-", "") ?? contractId;
    report.r1ContractIdRetry = nid;
    await latest.click();
    readyOk = await tryReady(nid);
    if (readyOk) report.r1ContractId = nid;
  }

  let activeContractId = String(report.r1ContractId);

  async function refreshNewestContractAndReady(prompt: string): Promise<void> {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(page, prompt);
    await openExecutionSurface(page, projectId);
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    activeContractId = tid?.replace("contract-select-", "") ?? activeContractId;
    report.r1ContractId = activeContractId;
    await latest.click();
    await tryReady(activeContractId);
  }

  async function prepareUntilD6(): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await openExecutionSurface(page, projectId);
      const prepareBtn = page.getByTestId(`contract-prepare-${activeContractId}`);
      if (!(await prepareBtn.count())) {
        await refreshNewestContractAndReady(
          [
            "Contrat non READY pour prepare. Relis le document Widget,",
            "puis submit_cursor_contract_production pour un NOUVEAU contrat lié à ce tour.",
          ].join(" "),
        );
        continue;
      }
      await prepareBtn.click();
      const d6 = page.getByTestId("d6-confirm-launch");
      const prepStatus = page.getByTestId("realization-status");
      let resolved = "wait";
      const deadline = Date.now() + 60_000;
      while (Date.now() < deadline) {
        if (await d6.count()) {
          resolved = "d6";
          break;
        }
        if (await prepStatus.count()) {
          const t = (await prepStatus.textContent()) || "";
          if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
            resolved = `fail:${t}`;
            break;
          }
        }
        await page.waitForTimeout(1500);
      }
      if (resolved === "d6") return;
      report.prepareFail = resolved === "wait" ? "fail:timeout" : resolved;
      await refreshNewestContractAndReady(
        [
          "Le prepare a échoué (mandat/filiation). Relis le document Widget,",
          "puis submit_cursor_contract_production pour un NOUVEAU contrat à la révision courante.",
        ].join(" "),
      );
    }
    throw new Error(`R1: prepare never reached D6 — ${String(report.prepareFail ?? "unknown")}`);
  }

  await prepareUntilD6();
  const fp = await page.getByTestId("d6-confirm-fingerprint").textContent();
  report.r1Fingerprint = fp;
  await page.getByTestId("d6-confirm-yes").click();
  // Wait for authorize+dispatch to finish BEFORE any page.goto (nav aborts in-flight fetch).
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        if (!(await page.getByTestId("d6-confirm-launch").count())) {
          // Dialog closed — soft reload via attempts list without full navigation yet.
          const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
          const joined = texts.join(" ");
          if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        }
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  await expect
    .poll(
      async () => {
        // Prefer soft reload of surface only after dispatch advanced past AUTHORIZED.
        await openExecutionSurface(page, projectId);
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        return texts.join(" ");
      },
      { timeout: LONG, intervals: [8_000, 12_000, 15_000] },
    )
    // DISPATCHED alone is insufficient — wait for terminal attempt + restitution signal.
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "c-after-dispatch-r1.png"),
    fullPage: true,
  });

  // Open bilan (results surface) + discuss with Nora (no auto-send)
  await page.goto(`/projects/${projectId}?surface=publication`);
  const bilanBtn = page.locator("[data-testid^=attempt-bilan-]").first();
  await expect(bilanBtn).toBeVisible({ timeout: LONG });
  // Retries: restitution may still be attaching handoff/qual after COMPLETED.
  await expect
    .poll(
      async () => {
        await bilanBtn.click();
        if (await page.getByTestId("realization-bilan").count()) return "bilan";
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/en cours|absent|MISSING/i.test(t)) return "wait-dossier";
          if (/requalification|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE/i.test(t)) {
            return t;
          }
        }
        return "wait";
      },
      { timeout: LONG, intervals: [3_000, 5_000, 8_000] },
    )
    .toMatch(/bilan|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE|requalification/i);
  await expect(page.getByTestId("realization-bilan")).toBeVisible({
    timeout: 60_000,
  });
  report.r1Bilan = {
    attemptId: await page.getByTestId("bilan-attempt-id").textContent(),
    bodyHead: ((await page.getByTestId("realization-bilan").textContent()) || "").slice(
      0,
      400,
    ),
  };
  const discuss = page.getByTestId("bilan-discuss-nora");
  if (await discuss.count()) {
    await discuss.click();
  }

  // --- Étape D/E: continuity + second realization in SAME project ---
  await page.goto(`/projects/${projectId}?surface=travail`);
  await sendNora(
    page,
    [
      "Tu as le brouillon de dossier D8 dans le compositeur (référence attempt/contrat/version).",
      "En continuité sur CE projet : rappelle le verdict D8 et les limites réellement attachés.",
      "Décisions Pilote pour la suite: Node LTS; tests sans réseau; maxLen=10000 déjà en config.",
      "Ferme toute question déterminante encore ouverte (ANSWERED + answerSummary),",
      "relis le document Widget, puis prépare un NOUVEAU contrat Cursor distinct pour",
      "ajouter processWidgetMaxLen qui refuse les chaînes > WIDGET_LIMITS.maxLen, avec tests.",
      "Utilise submit_cursor_contract_production. Critères différents de processWidgetSafe.",
    ].join(" "),
  );
  const afterD = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepD = {
    recalls: /PARTIAL|CONFORMING|INDETERMINATE|verdict|D8|limite|dossier/i.test(afterD),
    head: afterD.slice(0, 500),
  };

  await openExecutionSurface(page, projectId);

  /** Try READY on every non-R1 contract (newest first) until one qualifies. */
  async function readyAnyOtherThan(excludeId: string): Promise<string> {
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const tried: string[] = [];
    for (let i = count - 1; i >= 0; i -= 1) {
      const el = all.nth(i);
      const tid = await el.getAttribute("data-testid");
      const id = tid?.replace("contract-select-", "") ?? "";
      if (!id || id === excludeId) continue;
      tried.push(id);
      await el.click();
      if (await tryReady(id)) {
        report.r2ReadyStatus = report.readyStatus;
        return id;
      }
    }
    report.r2TriedContracts = tried;
    report.r2ReadyStatus = report.readyStatus;
    return "";
  }

  await expect
    .poll(async () => page.locator("[data-testid^=contract-select-]").count(), {
      timeout: LONG,
    })
    .toBeGreaterThanOrEqual(2);
  report.contractCountAfterR2Prep = await page
    .locator("[data-testid^=contract-select-]")
    .count();

  let r2Id = await readyAnyOtherThan(activeContractId);
  if (!r2Id) {
    const openQ = String(report.r2ReadyStatus ?? report.readyStatus ?? "");
    for (const prompt of [
      [
        "READY R2 refusé — investigation incomplète.",
        openQ ? `Statut serveur: ${openQ}.` : "",
        "Ferme d'abord toute question déterminante ouverte (determiningQuestions → ANSWERED",
        "avec answerSummary étayé). Décisions Pilote pour ce service interne:",
        "Node LTS OK; pas de réseau dans les tests; maxLen=10000 déjà dans config;",
        "processWidgetMaxLen doit refuser les strings trop longues.",
        "Puis relis le document Widget (CONSULTED) et submit_cursor_contract_production",
        "pour processWidgetMaxLen lié à CE tour.",
      ]
        .filter(Boolean)
        .join(" "),
      [
        "Encore un échec READY. Réponds explicitement aux questions déterminantes restantes,",
        "relis le document Widget intégralement, puis produis un contrat processWidgetMaxLen neuf",
        "via submit_cursor_contract_production sur la filiation courante (sources CONSULTED).",
      ].join(" "),
    ]) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(page, prompt);
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      if (r2Id) break;
    }
  }
  report.r2ContractId = r2Id;
  if (!r2Id) {
    fs.writeFileSync(
      path.join(EVIDENCE, "director-report.json"),
      JSON.stringify(report, null, 2),
    );
  }
  expect(r2Id).toBeTruthy();
  expect(r2Id).not.toBe(activeContractId);

  // Prepare with filiation recovery (same pattern as R1).
  let r2Prepared = false;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await openExecutionSurface(page, projectId);
    const prep = page.getByTestId(`contract-prepare-${r2Id}`);
    if (!(await prep.count())) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(
        page,
        "Contrat R2 non préparable. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen.",
      );
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      report.r2ContractId = r2Id;
      continue;
    }
    await prep.click();
    const d6 = page.getByTestId("d6-confirm-launch");
    const prepStatus = page.getByTestId("realization-status");
    let resolved = "wait";
    const deadline = Date.now() + 60_000;
    while (Date.now() < deadline) {
      if (await d6.count()) {
        resolved = "d6";
        break;
      }
      if (await prepStatus.count()) {
        const t = (await prepStatus.textContent()) || "";
        if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
          resolved = `fail:${t}`;
          break;
        }
      }
      await page.waitForTimeout(1500);
    }
    if (resolved === "d6") {
      r2Prepared = true;
      break;
    }
    report.r2PrepareFail = resolved;
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      "Prepare R2 échoué. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen à la révision courante.",
    );
    await openExecutionSurface(page, projectId);
    r2Id = await readyAnyOtherThan(activeContractId);
    report.r2ContractId = r2Id;
  }
  expect(r2Prepared).toBe(true);
  await page.getByTestId("d6-confirm-yes").click();
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const joined = texts.join(" ");
        if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  report.r2Dispatched = true;

  await expect
    .poll(
      async () => {
        await openExecutionSurface(page, projectId);
        // Need TWO terminal attempts for R1+R2.
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const terminals = texts.filter((t) =>
          /COMPLETED|FAILED|AMBIGUOUS/i.test(t),
        );
        return terminals.length >= 2 ? texts.join(" ") : `pending:${texts.join(" ")}`;
      },
      { timeout: LONG, intervals: [10_000, 15_000] },
    )
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "e-after-r2.png"),
    fullPage: true,
  });
  report.ok =
    Boolean(report.r1ContractId) &&
    Boolean(report.r2ContractId) &&
    report.r2ContractId !== report.r1ContractId &&
    Boolean(report.r2Dispatched);
  fs.writeFileSync(
    path.join(EVIDENCE, "director-report.json"),
    JSON.stringify(report, null, 2),
  );
  expect(report.r1ContractId).toBeTruthy();
  expect(report.r2Dispatched).toBe(true);
  expect((report.stepD as { recalls?: boolean }).recalls).toBe(true);
});
