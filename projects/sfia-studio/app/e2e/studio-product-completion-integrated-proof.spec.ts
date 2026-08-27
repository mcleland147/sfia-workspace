/**
 * PC-INTEGRATED-QA-01 (+ CORR-01) — Product Completion integrated proof.
 *
 * Fake substitutes ONLY the external executor boundary.
 * REAL OUT · OpenAI LIVE OUT · Cursor REAL OUT.
 *
 * CORR-01:
 *   QA-INT-07 Case A — browser /studio cyc:delivery full loop
 *   QA-INT-07 Case B — same production OA chain for cyc:security (application path)
 *   QA-INT-05-A — checkpoint A restart (after HD, before Execute)
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import {
  armW3bAdapterFail,
  armW3bGovernedStop,
  clearW3bBoundary,
} from "./support/w3bBoundaryControl";
import { setConversationProviderForTests } from "../lib/platform/ai";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../lib/vertical-slice-runtime";
import { evaluateExecutionAuthorization } from "../features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "../features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "../features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "../features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "../features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "../features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "../features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "../features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "../features/project-assistant/w2/trajectoryOptions";
import { materializeProductOutcomeFromAttempt } from "../features/project-assistant/w2/materializeW3bProductTerminal";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/product-completion-integrated-qa/screenshots",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");
const APP_ROOT = path.resolve(__dirname, "..");

const AMENDMENT_CONSTRAINT =
  "W2_E2E_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";

const GEN_CASE_A = {
  cycleTypeId: "cyc:delivery",
  ckcId: "ckc:studio:delivery",
  marker: "__F2_GATED_STANDARD__",
  label: /livraison|delivery/i,
} as const;

const GEN_CASE_B = {
  cycleTypeId: "cyc:security",
  ckcId: "ckc:studio:security",
} as const;

async function capture(
  page: Page,
  id: string,
  meta: Record<string, string | boolean | null | undefined>,
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      ...meta,
      route: page.url(),
      timestamp: new Date().toISOString(),
      sha256,
      proofLevel: "DETERMINISTIC_PRODUCT_COMPLETION_INTEGRATED",
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — PC INTEGRATED QA /STUDIO — NOT REAL",
    })}\n`,
    "utf8",
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
}

async function createAndQualify(
  page: Page,
  name: string,
  objective: string,
  qualifyText = `Préparer une livraison gated ${GEN_CASE_A.marker}`,
) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/studio");
  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
    timeout: 30_000,
  });
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill(objective);
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });

  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(qualifyText);
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
  await assertNoSecondAuthorityPath(page);
}

async function decideTrajectoryUi(page: Page) {
  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();
  await page.getByTestId("w2-propose-options").click();
  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
  await page.locator("[data-testid^='w2-decide-']").first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });
}

async function prepareInspectConfirmAuthorize(page: Page) {
  await page
    .getByTestId("w3a-operation-kind")
    .selectOption("generate-temporary-artifact");
  await page.getByTestId("w2-prepare-contract").click();
  await expect(page.getByTestId("w2-contract")).toBeVisible({
    timeout: 45_000,
  });
  await page.getByTestId("w2-inspect-contract").click();
  await expect(page.getByTestId("w2-inspection-state")).toContainText(
    "INSPECTÉ",
    { timeout: 30_000 },
  );
  await page.getByTestId("w2-confirm-contract").click();
  await expect(page.getByTestId("w2-contract-status")).toHaveText(
    "Confirmation enregistrée",
    { timeout: 30_000 },
  );
  await page.getByTestId("w2-authorize-contract").click();
  await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
    "Autorisation vérifiée",
    { timeout: 30_000 },
  );
  await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
  await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
}

async function openThroughAuthorized(
  page: Page,
  name: string,
  objective: string,
) {
  await createAndQualify(page, name, objective);
  await decideTrajectoryUi(page);
  await prepareInspectConfirmAuthorize(page);
}

async function assertPostEvidence(page: Page, kind: string) {
  await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(kind);
  await expect(page.getByTestId("w3c-nora-analysis")).toBeVisible();
  const recDetails = page
    .getByTestId("w3c-post-evidence")
    .locator("details")
    .filter({ has: page.getByTestId("w3c-recommendation-authority") });
  if (
    (await recDetails.count()) > 0 &&
    !(await recDetails.evaluate((el) => (el as HTMLDetailsElement).open))
  ) {
    await recDetails.locator("summary").click();
  }
  await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
    "none — Recommendation ≠ HumanDecision",
  );
  await expect(page.getByTestId("w3c-lps-version")).not.toHaveText("—");
}

/** Case B — production OA Product Completion chain (same services as /studio). */
async function runProductNativeFullLoop(cycleTypeId: string, ckcId: string) {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetRuntimeApplicationServiceForTests();

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pcqa-gen-"));
  const db = path.join(dir, "product.sqlite");
  const runtime = getRuntimeApplicationService({
    registryRoot: path.join(APP_ROOT, "lib/oa/doctrine/product"),
    schemasRoot: path.resolve(
      APP_ROOT,
      "../sfia-v3-modeled/v3-native-option-a/schemas",
    ),
    nowIso: "2026-08-27T14:00:00.000Z",
    auditMode: "noop",
    productDbPath: db,
  });
  const created = await runtime.createProject({
    name: `PCQA GEN ${cycleTypeId}`,
    objective: `Full-loop genericity — ${cycleTypeId}`,
    context: "PC-INTEGRATED-QA-01-CORR-01",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION RÉELLE"],
    shortReference: "PCQAGEN",
    idempotencyKey: `pcqa-gen-${cycleTypeId}-${Date.now()}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("getProject failed");
  const oa = runtime.oa!;
  const cycle = await oa.cycleServices.createCycle.execute({
    cycleInstanceId: `cyc:inst:pcqa-${cycleTypeId.replace(":", "-")}`,
    cycleTypeId,
    projectId,
    signals: {},
    objective: `Qualify ${cycleTypeId}`,
    scope: "pcqa-genericity",
    createdBy: {
      actorId: "actor:pcqa-gen",
      role: "project_owner",
      displayName: "PCQA GEN",
      authorityLevel: "N3",
    },
    linkAsActiveCycle: true,
    expectedLpsVersion: overview.livingState.version,
    ckcResolutionRef: `ckcres:pcqa-${cycleTypeId}`,
  });
  expect(cycle.ok).toBe(true);
  if (!cycle.ok) throw new Error(`createCycle ${cycleTypeId}`);

  const qualification = await resolveW2QualificationInputs({ oa, projectId });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qualification");
  expect(qualification.qualification.inputs.cycleTypeId).toBe(cycleTypeId);

  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(ckcId);
  if (cycleTypeId === "cyc:security") {
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /adversarial|risque résiduel|secret/,
    );
  }
  if (cycleTypeId === "cyc:delivery") {
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
  }

  const decided = await decideTrajectory({
    oa,
    projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory.trajectoryId,
    candidateVersion: proposed.proposedTrajectory.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  expect(decided.decision.decisionId).toBeTruthy();
  expect(["validated", "active", "decided"]).toContain(
    decided.trajectory.status,
  );

  const afterDecide = await runtime.getProject(projectId);
  expect(afterDecide.ok).toBe(true);
  if (!afterDecide.ok) throw new Error("get after decide");
  const context = {
    projectId,
    lpsId: afterDecide.livingState.id,
    lpsVersion: afterDecide.livingState.version,
    doctrineDigest: afterDecide.doctrine.digest,
    activeCycleInstanceId:
      afterDecide.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: `ckcres:pcqa-${cycleTypeId}`,
  };

  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
  const executionContractId = prepared.contract.executionContractId;

  const inspected = await inspectExecutionContract({
    oa,
    projectId,
    executionContractId,
  });
  expect(inspected.ok).toBe(true);

  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(`confirm ${confirmed.code}`);

  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("authorize");
  expect(authorized.outcome).toBe("AUTHORIZED");

  const selected = await governedExecuteSelectAgent({
    oa,
    projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);

  const started = await governedExecuteStart({
    oa,
    projectId,
    executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);

  await governedExecuteRecordResult({
    oa,
    projectId,
    executionContractId,
    attemptId: started.attemptId,
    forceLocalAuthority: true,
  });

  const materialized = await materializeProductOutcomeFromAttempt({
    oa,
    projectId,
    attemptId: started.attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error(materialized.code);
  expect(materialized.product.outcome).toBe("SUCCESS");
  expect(materialized.product.evidenceId).toMatch(/^ev:/);
  expect(materialized.product.reviewBundleId).toMatch(/^rb:/);
  expect(materialized.postEvidence).toBeTruthy();
  expect(materialized.postEvidence && "ok" in materialized.postEvidence).toBe(
    true,
  );
  if (!materialized.postEvidence || !("ok" in materialized.postEvidence)) {
    throw new Error("postEvidence missing");
  }
  expect(materialized.postEvidence.ok).toBe(true);
  if (!materialized.postEvidence.ok) throw new Error("postEvidence not ok");
  expect(materialized.postEvidence.recommendation.kind).toBeTruthy();
  expect(materialized.postEvidence.recommendation.authority).toBe("none");
  expect(materialized.postEvidence.lpsVersion ?? 0).toBeGreaterThan(0);
  const recommendationKind = materialized.postEvidence.recommendation.kind;
  const evidenceId = materialized.product.evidenceId;

  // Restart-safe store: reopen same SQLite, re-resolve qualification cycle type.
  resetRuntimeApplicationServiceForTests();
  const runtime2 = getRuntimeApplicationService({
    registryRoot: path.join(APP_ROOT, "lib/oa/doctrine/product"),
    schemasRoot: path.resolve(
      APP_ROOT,
      "../sfia-v3-modeled/v3-native-option-a/schemas",
    ),
    nowIso: "2026-08-27T14:05:00.000Z",
    auditMode: "noop",
    productDbPath: db,
  });
  const requal = await resolveW2QualificationInputs({
    oa: runtime2.oa!,
    projectId,
  });
  expect(requal.ok).toBe(true);
  if (!requal.ok) throw new Error("reopen qual");
  expect(requal.qualification.inputs.cycleTypeId).toBe(cycleTypeId);

  fs.rmSync(dir, { recursive: true, force: true });
  return {
    cycleTypeId,
    ckcId: proposed.recommendation.ckcProvenance?.ckcId,
    decisionId: decided.decision.decisionId,
    executionContractId,
    attemptId: started.attemptId,
    evidenceId,
    outcomeKind: materialized.product.outcome,
    recommendationKind,
  };
}

test.describe("PC Integrated Proof — Product Completion final QA", () => {
  test.describe.configure({ timeout: 420_000 });

  test.beforeEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });
  test.afterEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });

  test("QA-INT-01/05-B nominal SUCCESS loop + Evidence→Nora + reload", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    if (!fs.existsSync(MANIFEST)) fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(
      page,
      `PC-QA INT-01 ${Date.now()}`,
      "Preuve intégrée Product Completion — boucle nominale SUCCESS.",
    );
    await expect(page.getByTestId("f2-cycle")).toContainText(GEN_CASE_A.label);
    await capture(page, "QA-INT-01-pre-execute", {
      scenario: "QA-INT-01",
      state: "authorized_before_execute",
      cycleTypeId: GEN_CASE_A.cycleTypeId,
    });

    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "SUCCESS",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Succès",
    );
    await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
    await expect(page.getByTestId("w3b-ready")).toHaveText("non");
    await expect(page.getByTestId("w3b-evidence-id")).not.toHaveText("");
    await expect(page.getByTestId("w3b-review-bundle-id")).not.toHaveText("");

    await assertPostEvidence(page, "continue");
    await expect(page.getByTestId("w3c-requires-human-decision")).toBeVisible();
    await assertNoSecondAuthorityPath(page);

    await capture(page, "QA-INT-01-success-post-evidence", {
      scenario: "QA-INT-01",
      productOutcome: "SUCCESS",
      postEvidence: "continue",
    });

    const urlBefore = page.url();
    const evidenceId = (
      await page.getByTestId("w3b-evidence-id").textContent()
    )?.trim();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    expect(page.url()).toBe(urlBefore);
    await expect(page.getByTestId("w2-trajectory-panel")).toBeVisible({
      timeout: 30_000,
    });
    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
    if ((await rehydrateBtn.count()) > 0) {
      await rehydrateBtn.first().click();
      await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
        "data-kind",
        "SUCCESS",
        { timeout: 30_000 },
      );
      expect(
        (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
      ).toBe(evidenceId);
    }
    await capture(page, "QA-INT-05-reload-after-success", {
      scenario: "QA-INT-05-B",
      evidenceId: evidenceId ?? null,
      state: "reload_after_terminal_evidence",
    });
  });

  test("QA-INT-02 governed STOP — no false SUCCESS", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(
      page,
      `PC-QA INT-02 ${Date.now()}`,
      "Preuve intégrée — STOP gouverné.",
    );
    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "STOP",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Arrêt",
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveAttribute(
      "data-kind",
      "SUCCESS",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "cancelled",
    );
    await expect(page.getByTestId("w3b-governed-boundary")).toContainText(
      "EXECUTOR_INSUFFICIENT",
    );
    await assertPostEvidence(page, "recover");
    await capture(page, "QA-INT-02-governed-stop", {
      scenario: "QA-INT-02",
      productOutcome: "STOP",
    });
    await clearW3bBoundary(request);
  });

  test("QA-INT-03 FAIL via TestExecutionAdapter + recovery", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(
      page,
      `PC-QA INT-03 ${Date.now()}`,
      "Preuve intégrée — FAIL + recovery.",
    );
    await armW3bAdapterFail(request, "adapter_unavailable");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "FAIL",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Échec",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "failed",
    );
    await assertPostEvidence(page, "recover");
    await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
      "Recommendation ≠ HumanDecision",
    );
    await capture(page, "QA-INT-03-fail-recovery", {
      scenario: "QA-INT-03",
      productOutcome: "FAIL",
    });
    await clearW3bBoundary(request);
  });

  test("QA-INT-04 material EC amend invalidates stale authorization", async ({
    page,
  }) => {
    await createAndQualify(
      page,
      `PC-QA INT-04 ${Date.now()}`,
      "Preuve intégrée — amendement EC matériel.",
    );
    await decideTrajectoryUi(page);

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });
    const confirmBefore = page.getByTestId("w2-confirm-contract");
    if ((await confirmBefore.count()) > 0) {
      await expect(confirmBefore).toBeDisabled();
    }
    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
      { timeout: 30_000 },
    );

    await expect(page.getByTestId("w2-amendment-form")).toBeVisible();
    await page.getByTestId("w2-amend-constraint").fill(AMENDMENT_CONSTRAINT);
    await page.getByTestId("w2-amend-contract").click();
    await expect(page.getByTestId("w2-amendment-notice")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-amendment-status")).toContainText(
      /réinspection requise/i,
    );
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "NON INSPECTÉ",
    );

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
    );
    const blockedReason =
      (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
    expect(blockedReason.toLowerCase()).toMatch(/inspect/);

    await capture(page, "QA-INT-04-stale-auth-blocked", {
      scenario: "QA-INT-04",
      state: "stale_authorization_blocked",
    });
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveCount(0);
  });

  test("QA-INT-05-A checkpoint A — reload after HD before Execute", async ({
    page,
  }) => {
    await createAndQualify(
      page,
      `PC-QA INT-05A ${Date.now()}`,
      "Checkpoint A — HumanDecision durable avant exécution.",
    );
    await decideTrajectoryUi(page);
    await expect(page.getByTestId("w2-decision")).toBeVisible();
    const urlBefore = page.url();
    const decisionText =
      (await page.getByTestId("w2-decision").textContent()) ?? "";
    expect(decisionText.length).toBeGreaterThan(0);

    await capture(page, "QA-INT-05A-before-reload", {
      scenario: "QA-INT-05-A",
      state: "decided_before_execute",
    });

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    expect(page.url()).toBe(urlBefore);
    // Honest recovery: conversation may need resume; durable HD/trajectory preserved.
    await expect(page.getByTestId("project-recovery-banner")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w1-recovery-disclosures")).toContainText(
      /trajectoire décidée|décidée/i,
    );
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await expect(page.getByTestId("project-history-panel")).toContainText(
      /Décidée|décision dec:/i,
    );
    await expect(page.getByTestId("project-history-panel")).toContainText(
      /Décision humaine|Option retenue/i,
    );
    await expect(page.getByTestId("recovery-resume-durable")).toBeVisible();
    // No automatic execute / Attempt after reload.
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveCount(0);
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveCount(0);
    await assertNoSecondAuthorityPath(page);

    await capture(page, "QA-INT-05A-after-reload", {
      scenario: "QA-INT-05-A",
      state: "reloaded_decision_preserved_no_execute",
    });
  });

  test("QA-INT-07 Case A — browser delivery full loop genericity", async ({
    page,
  }) => {
    await openThroughAuthorized(
      page,
      `PC-QA GEN-A ${Date.now()}`,
      "Généricité Case A — cyc:delivery full loop /studio.",
    );
    await expect(page.getByTestId("f2-cycle")).toContainText(GEN_CASE_A.label);
    // Distinct CKC binding visible when exposed.
    const ckcRef = page.getByTestId("f2-ckc-ref");
    if ((await ckcRef.count()) > 0) {
      await expect(ckcRef).toContainText(/ckc:/i);
    }
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "SUCCESS",
      { timeout: 120_000 },
    );
    await assertPostEvidence(page, "continue");
    await expect(page.getByTestId("w3c-nora-analysis")).toContainText(
      /anti scope creep/i,
    );
    await capture(page, "QA-INT-07-case-a-delivery", {
      scenario: "QA-INT-07-A",
      cycleTypeId: GEN_CASE_A.cycleTypeId,
      ckcId: GEN_CASE_A.ckcId,
      productOutcome: "SUCCESS",
    });
  });

  test("QA-INT-07 Case B — security full product OA loop (same mechanism)", async () => {
    const result = await runProductNativeFullLoop(
      GEN_CASE_B.cycleTypeId,
      GEN_CASE_B.ckcId,
    );
    expect(result.cycleTypeId).toBe(GEN_CASE_B.cycleTypeId);
    expect(result.ckcId).toBe(GEN_CASE_B.ckcId);
    expect(result.outcomeKind).toBe("SUCCESS");
    expect(result.evidenceId).toBeTruthy();
    expect(result.attemptId).toBeTruthy();
    // Contrast vs delivery CKC fingerprint is proven by distinct ckcId.
    expect(result.ckcId).not.toBe(GEN_CASE_A.ckcId);
  });
});
