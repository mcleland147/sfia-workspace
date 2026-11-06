import { test, expect } from "@playwright/test";
import path from "path";

/**
 * ML3 browser FAKE — pilotage surfaces. LIVE Nora forbidden in E2E.
 * Does not claim pixel-perfect Figma conformity.
 */
test("ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 e2e seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 Pilotage");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e ml3");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("pilotage-panel")).toBeVisible();
  await expect(page.getByTestId("cycle-absent")).toBeVisible();
  await expect(page.getByTestId("method-absent")).toBeVisible();

  await page.getByLabel("Énoncé GO").fill("ouvre le cycle cadrage");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-pending")).toBeVisible();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);
  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");

  await page.getByTestId("close-cycle").click();
  await expect(page.getByTestId("cycle-absent")).toBeVisible({ timeout: 15000 });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByLabel("Type de cycle").selectOption("UX_UI");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByRole("heading", { name: /Cycle UX_UI/ })).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);

  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("method-retained")).toBeVisible({ timeout: 15000 });

  const shot = path.join("tests/e2e/artifacts", `ml3-pilotage-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});

/**
 * B13 C02 — browser FAKE: RESTRICTION shows authority-block-established;
 * HUMAN_INTENT conflict must NOT show authority-block-established.
 * Pixel Figma: NOT VERIFIED.
 */
test("ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 B13 C02 seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 B13 C02");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e b13 c02");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("b13-authority-legend")).toBeVisible();

  // Global cycle restriction → OPEN rejected with RESTRICTION (authority).
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/REJECTED.*RESTRICTION|RESTRICTION/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("authority-block-established")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toContainText(/Restriction D6/i);

  // Lift restriction, open cycle (APPLIED — no false authority block).
  await page.getByRole("button", { name: "Lever" }).first().click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("outcome-applied")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // Controlled CONFLICT+HUMAN_INTENT response → technical motif, never authority-block.
  // (UI open-cycle is hidden while ACTIVE; choose-method is the reachable pilot action.)
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "CONFLICT",
        reasonCode: "HUMAN_INTENT",
        reason: "Intention humaine déjà enregistrée",
        commandId: "bcmd_e2e_c02_human_intent",
        revision: null,
      }),
    });
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/CONFLICT.*HUMAN_INTENT|HUMAN_INTENT/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("outcome-technical-human_intent")).toBeVisible();
  await expect(page.getByTestId("outcome-technical-human_intent")).toContainText(/Intention humaine/i);
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
});

/**
 * B13 R1 — rendered UX: prior RESTRICTION must not remain under a new UNKNOWN/APPLIED result.
 * Observes PilotagePanel motifs, not only qualifyCommandOutcome unit calls.
 */
test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 B13 R1 seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 B13 R1");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e b13 r1");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("authority-block-established")).toBeVisible({ timeout: 15000 });

  // RESTRICTION → network loss on next command → UNKNOWN (no stale authority motif).
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() === "POST") {
      await route.abort("failed");
      return;
    }
    await route.continue();
  });
  // also abort by-key reconcile fetches so resolveUnknown stays UNKNOWN
  await page.route("**/api/projects/*/pilotage/commands/**", async (route) => {
    await route.abort("failed");
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/UNKNOWN/i, { timeout: 15000 });
  await expect(page.getByTestId("outcome-unknown")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // UNKNOWN → controlled APPLIED on a new attempt → outcome-applied, still no authority-block.
  await page.unroute("**/api/projects/*/pilotage/commands");
  await page.unroute("**/api/projects/*/pilotage/commands/**");
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "APPLIED",
        reasonCode: null,
        reason: null,
        commandId: "bcmd_e2e_r1_applied",
        revision: 99,
      }),
    });
  });
  // Change method version so signature differs from the UNKNOWN pending record.
  await page.getByLabel("Version").fill("2.6-r1");
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("outcome-applied")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
  await expect(page.getByTestId("outcome-unknown")).toHaveCount(0);
});
