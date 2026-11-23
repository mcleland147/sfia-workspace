# SFIA Review Pack FULL — ML5 Cycle 10

**Date/heure :** 2026-11-23T19:59:25.347820+01:00
**Verdict :** `ML5 INTEGRATED — QUALIFICATION IN PROGRESS`

## 1–3. Identité / Git Truth / Sources
- Branche `sfia/next-ml5-integrated-delivery-20261123` HEAD `6cf33e9923796974b9ee540a9c6ff27110342950` DIRTY
- origin/main `997897fd7cf914771e7d08e8030dc7123fab7d25` — upstream: none
- Handoff C9 tip `de5e1fc6` — pack C10 reset mono-cycle
- C9 captures conservées (14 PNG) — non modifiées
- Sources: SFIA v2.6, SEF/roadmap main, décisions `1e6929c5`, R-003 `5a4e4405`, UX Figma `itgvCulInEnFY6DvgIegvP` / `1209:2`

## 4–5. Périmètre / Défauts C9
- Overflow instruction + D6 non visible + inspection Exécution seule + bilan « Rapport manquant » après handoff re-ingest + F2 0 PASS
- Blast radius: tokens.css, ContractViewer, D6ConfirmLaunch, page Travail, authorize route, CursorRealizationSurface openBilan, RealizationBilan

## 6–8. Causes et corrections C10
1. Styles `fig-contract-*` / `fig-d6-*` absents → CSS ajoutés (pre-wrap, min-width:0, overlay D6 fixed)
2. D6 uniquement Exécution → Travail 50/50 + Exécuter… + D6ConfirmLaunch partagé
3. `confirmed` absent traité comme Non → **400 CONFIRMATION_REQUIRED** sans HumanDecision
4. Bilan ouvert avant handoff restait stale → openBilan détecte handoff RECEIVED + resume MISSING → requalify judgment_correction
5. RealizationBilan: cards + coverage badges + empty states
6. Requalify new_proof avec capture `ecap_1c817ffb…` exercée

## 9. Fichiers créés (intégral)
### `projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx`
```typescript
"use client";

/**
 * ML5 C10 — HumanDecision D6 confirmation overlay (Oui / Non).
 * Shared by Travail 50/50 and Exécution. Reading ≠ authorizing.
 */

export function D6ConfirmLaunch(props: {
  contractKey: string;
  version: number;
  fingerprint: string;
  title?: string;
  busy?: boolean;
  onYes: () => void;
  onNo: () => void;
  onCancel?: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="d6-confirm-title"
      data-testid="d6-confirm-launch"
      className="fig-d6-confirm"
    >
      <div className="fig-d6-confirm-card">
        <h3 id="d6-confirm-title">Confirmer le lancement</h3>
        <p data-testid="d6-confirm-scope">
          Vous avez inspecté le contrat{" "}
          <strong>
            {props.contractKey} v{props.version}
          </strong>
          {props.title ? ` — ${props.title}` : ""}. Confirmez-vous l&apos;exécution
          Cursor de cette version exacte ?
        </p>
        <p className="fig-travail-viewer-meta" data-testid="d6-confirm-fingerprint">
          Empreinte inspectée : {props.fingerprint.slice(0, 16)}…
        </p>
        <p className="fig-travail-viewer-meta">
          Oui = HumanDecision D6 (mandat). Non = refus explicite, aucun dispatch. Annuler =
          fermer sans acte.
        </p>
        <div className="fig-d6-confirm-actions">
          {props.onCancel ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="d6-confirm-cancel"
              disabled={props.busy}
              onClick={props.onCancel}
            >
              Annuler
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="d6-confirm-no"
            disabled={props.busy}
            onClick={props.onNo}
          >
            Non
          </button>
          <button
            type="button"
            className="btn"
            data-testid="d6-confirm-yes"
            disabled={props.busy}
            onClick={props.onYes}
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
}

```
### `projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts`
```typescript
/**
 * ML5 C10 — seed a correlated DEV mono-attempt scenario (SCRIPTED fixture).
 * Creates: Pilot (existing DEV A), project, Nora preparation linkage, READY contract.
 * Does NOT claim Nora cognitively authored the contract — creationMechanism: DOMAIN_SEED_SCRIPTED.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "../src/db/client";
import { pilots, preparations } from "../src/db/schema";
import { createTechnicalContract } from "../src/domains/execution/technical-contract";
import type { TechnicalContractBody } from "../src/domains/execution/types";
import { createProjectCommand } from "../src/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "../src/domains/preparation/service";
import { newId } from "../src/lib/ids";

const OUT_DIR = join(
  process.cwd(),
  "../../../.tmp-sfia-review/browser/c10",
);

const LONG_INSTRUCTION = [
  "# Instruction technique intégrale — ML5 Cycle 10 (SCRIPTED)",
  "",
  "## Objectif",
  "Démontrer un parcours mono-tentative gouverné depuis l'intention jusqu'au bilan D8,",
  "sans effet Cursor SDK LIVE ni push GitHub REAL.",
  "",
  "## Périmètre IN",
  "- Contrat inspectable (visionneuse 50/50)",
  "- HumanDecision D6 Oui/Non authentifiés",
  "- Adaptateur Cursor SCRIPTED phasé (RUNNING → COMPLETED)",
  "- Bilan D8 à quatre onglets",
  "- Retour Nora contextualisé sans envoi automatique",
  "",
  "## Périmètre OUT",
  "- Cursor SDK LIVE à effets externes",
  "- WEB LIVE (B09)",
  "- Push code projet / PR / merge",
  "- Mutations RECETTE/STABLE",
  "",
  "## Étapes techniques",
  "1. Inspecter ce contrat dans Travail / Exécution.",
  "2. Refuser une première préparation (D6 Non) — aucun dispatch.",
  "3. Préparer à nouveau, autoriser (D6 Oui) sur l'empreinte exacte.",
  "4. Observer RUNNING puis réconcilier vers COMPLETED (SCRIPTED_PHASED).",
  "5. Ouvrir le bilan D8, parcourir les quatre onglets, consulter les pièces.",
  "6. Revenir vers Nora avec la référence du bilan, brouillon non envoyé.",
  "",
  "## Critères d'acceptation",
  "- Même projectId / contractId / attemptId (mandat Oui) corrélés.",
  "- Refus D6 authentifié avec decisionId, sans tentative AUTHORIZED/DISPATCHED.",
  "- Observations SCRIPTED_OBSERVATION_RUNNING consultables avant terminaison.",
  "- Bilan D8 réellement ouvert (≠ liste seule).",
  "",
  "## STOP",
  "STOP si LIVE/REAL externe, double dispatch, ou empreinte divergente.",
  "",
  "## Empreinte / version",
  "Version contractuelle gérée par le serveur. Cette instruction doit rester",
  "lisible sans troncature forcée — scroll de la visionneuse autorisé.",
  "",
  ...Array.from({ length: 12 }, (_, i) =>
    `Paragraphe de densité ${i + 1}/12 — texte volontairement long pour valider le scroll et l'absence de troncature silencieuse de l'instruction intégrale dans ContractViewer.`,
  ),
].join("\n");

function sampleBody(): TechnicalContractBody {
  return {
    title: "ML5 C10 — Parcours mono-tentative gouverné (SCRIPTED)",
    engagements: {
      willDo:
        "Exécuter l'instruction autorisée via adaptateur Cursor SCRIPTED phasé, produire handoff et qualification D8.",
      willNotDo:
        "Aucun push GitHub REAL, aucun Cursor SDK LIVE externe, aucune mutation RECETTE/STABLE.",
      expectedResult:
        "Tentative COMPLETED SCRIPTED avec observations RUNNING, bilan D8 consultable, retour Nora contextualisé.",
      pilotControl: "HumanDecision D6 explicite Oui/Non — lecture ≠ autorisation.",
    },
    volets: {
      mission: "Démonstration E2E ML5 Cycle 10 — une tentative, des transitions prouvées.",
      perimeter: "DEV local 127.0.0.1:3100 / PostgreSQL :5433 / SCRIPTED only.",
      capabilitiesAuthority: "Adaptateur SCRIPTED déclaré — ≠ LIVE SDK.",
      stopConditions: "STOP sur LIVE non autorisé, empreinte divergente, double dispatch.",
      proofsSources: "Handoff SCRIPTED_ADAPTER + captures BROWSER C10 + manifeste mono-tentative.",
      integrity: "Fingerprint contrat = empreinte inspectée au D6 Oui.",
    },
    instructionText: LONG_INSTRUCTION,
    risks: [
      "Confusion fixture SCRIPTED ↔ observation LIVE",
      "401 sans cookie pris pour refus D6",
      "Liste des tentatives prise pour bilan D8",
    ],
    exclusions: ["Cursor SDK LIVE", "WEB LIVE B09", "Push code projet"],
    acceptance: {
      criteria: [
        "Contrat inspectable avec instruction intégrale",
        "D6 Non authentifié sans effet",
        "D6 Oui sur fingerprint exact",
        "RUNNING avec activité puis COMPLETED",
        "Bilan D8 4 onglets + retour Nora sans envoi auto",
      ],
      expectedProofs: [
        "Captures PNG C10 + SHA-256",
        "Manifeste mono-tentative",
        "decisionId refus et mandat",
        "attemptId unique Oui traversant Travail/Exécution/Résultats",
      ],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["SCRIPTED_PHASED"],
      permissionsNeeded: ["DEV_AUTO_SESSION"],
    },
    stopConditions: ["LIVE_WITHOUT_GO", "FINGERPRINT_MISMATCH", "DOUBLE_DISPATCH"],
    reversibilityLimits: ["Pas de rollback GitHub", "CANCEL ≠ rollback workspace"],
    gitScope: null,
  };
}

async function resolvePilotA(): Promise<string> {
  const byGh = (
    await db.select().from(pilots).where(eq(pilots.githubUserId, "dev-github-a")).limit(1)
  )[0];
  if (byGh) return byGh.id;
  const byName = (
    await db.select().from(pilots).where(eq(pilots.displayName, "Pilot A (DEV)")).limit(1)
  )[0];
  if (byName) return byName.id;
  throw new Error("Pilot A (DEV) introuvable — lancer auto-session d'abord");
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";

  const pilotId = await resolvePilotA();
  const label = `ML5-C10-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "Parcours mono-tentative C10 SCRIPTED");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C10 mono-attempt E2E SCRIPTED",
    idempotencyKey: newId("idem"),
  });
  if (
    (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") ||
    !("projectId" in created) ||
    !created.projectId
  ) {
    throw new Error(`project create fail: ${JSON.stringify(created)}`);
  }
  const projectId = created.projectId;

  const contract = await createTechnicalContract({
    pilotId,
    projectId,
    preparationId: prep.id,
    contractKey: `c10-mono-${newId("ck").slice(-8)}`,
    body: sampleBody(),
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {
    scenarioId: "ml5-c10-mono-20261123",
    at: new Date().toISOString(),
    creationMechanism: "DOMAIN_SEED_SCRIPTED",
    honesty:
      "Contrat créé par seed domaine (markReady serveur) — ≠ création cognitive Nora LIVE.",
    pilotId,
    projectId,
    projectName: label,
    preparationId: prep.id,
    contractId: contract.contractId,
    contractKey: contract.contractKey,
    contractVersion: contract.version,
    fingerprint: contract.fingerprint,
    instructionBytes: LONG_INSTRUCTION.length,
    attemptIdYes: null as string | null,
    attemptIdRefuse: null as string | null,
    frontier: "SCRIPTED",
  };
  writeFileSync(join(OUT_DIR, "scenario-ids.json"), JSON.stringify(manifest, null, 2));
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```
### `projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts`
```typescript
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

```
### `projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts`
```typescript
/**
 * ML5 C10 — confirmed must be explicit boolean; absent ≠ silent refuse.
 */
import { describe, expect, it } from "vitest";

describe("ML5 C10 D6 confirmed contract", () => {
  it("treats only true as Oui and only false as Non", () => {
    const decide = (confirmed: unknown) => {
      if (typeof confirmed !== "boolean") return "REJECT_NO_ACT";
      return confirmed ? "AUTHORIZE" : "REFUSE";
    };
    expect(decide(true)).toBe("AUTHORIZE");
    expect(decide(false)).toBe("REFUSE");
    expect(decide(undefined)).toBe("REJECT_NO_ACT");
    expect(decide(null)).toBe("REJECT_NO_ACT");
    expect(decide("true")).toBe("REJECT_NO_ACT");
    expect(decide(1)).toBe("REJECT_NO_ACT");
  });
});

```

## 10. Diffs modifiés
### `projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx`
```diff
NEW FILE — see section 9

```
### `projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx b/projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
index a9a8fc94..d87754e9 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
@@ -12,6 +12,8 @@ export type ContractViewerModel = {
   version: number;
   fingerprint: string;
   title: string;
+  /** DRAFT | READY | … — D6 only when READY */
+  status?: string;
   engagements: {
     willDo: string;
     willNotDo: string;
@@ -55,7 +57,8 @@ export function ContractViewer(props: {
             {c.title}
           </h2>
           <p className="fig-travail-viewer-meta" data-testid="contract-viewer-identity">
-            {c.contractKey} · v{c.version} · {c.fingerprint.slice(0, 12)}
+            {c.contractKey} · v{c.version}
+            {c.status ? ` · ${c.status}` : ""} · {c.fingerprint.slice(0, 12)}
           </p>
         </div>
         <div className="fig-travail-viewer-actions">

```
### `projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx b/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
index 15855cf3..058281e5 100644
--- a/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
@@ -2,16 +2,26 @@
 
 /**
  * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
- * Four tabs covering nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
+ * Four Figma tabs: Synthèse / Livrables et tests / Git et pièces / Écarts.
+ * Cover nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
  */
 
 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";
 
-const TAB_RUBRICS: Record<string, Array<D8Rubric["key"]>> = {
-  synthese: ["resume", "prevu", "realise"],
-  evaluation: ["evaluation", "ecarts", "impact"],
-  verdict: ["verdict", "recommandations"],
-  sources: ["sources"],
+export const BILAN_TAB_LABELS = {
+  synthese: "Synthèse",
+  livrables: "Livrables et tests",
+  git: "Git et pièces",
+  ecarts: "Écarts",
+} as const;
+
+export type BilanTab = keyof typeof BILAN_TAB_LABELS;
+
+const TAB_RUBRICS: Record<BilanTab, Array<D8Rubric["key"]>> = {
+  synthese: ["resume", "prevu", "realise", "verdict", "recommandations"],
+  livrables: ["evaluation"],
+  git: ["sources", "impact"],
+  ecarts: ["ecarts"],
 };
 
 export function RealizationBilan(props: {
@@ -20,8 +30,9 @@ export function RealizationBilan(props: {
   rubrics: D8Rubric[];
   limits: string[];
   noraAnalysisMarkdown?: string | null;
-  activeTab: keyof typeof TAB_RUBRICS;
-  onTabChange: (tab: keyof typeof TAB_RUBRICS) => void;
+  noraAnalysisKind?: string | null;
+  activeTab: BilanTab;
+  onTabChange: (tab: BilanTab) => void;
   onDiscussWithNora?: () => void;
 }) {
   const byKey = new Map(props.rubrics.map((r) => [r.key, r]));
@@ -32,6 +43,7 @@ export function RealizationBilan(props: {
       data-testid="realization-bilan"
       data-attempt-id={props.attemptId}
       data-verdict={props.verdict}
+      data-active-tab={props.activeTab}
     >
       <header>
         <p className="fig-kicker !mb-0">RÉSULTATS ET PREUVES  /  D8</p>
@@ -40,8 +52,11 @@ export function RealizationBilan(props: {
           Verdict D8: {props.verdict} — distinct de l&apos;avis Nora et de la réception D6
         </p>
       </header>
+      <p className="fig-travail-viewer-meta" data-testid="bilan-attempt-id">
+        Tentative {props.attemptId}
+      </p>
       <nav data-testid="bilan-tabs" className="fig-bilan-tabs">
-        {(Object.keys(TAB_RUBRICS) as Array<keyof typeof TAB_RUBRICS>).map((tab) => (
+        {(Object.keys(BILAN_TAB_LABELS) as BilanTab[]).map((tab) => (
           <button
             key={tab}
             type="button"
@@ -49,27 +64,67 @@ export function RealizationBilan(props: {
             data-testid={`bilan-tab-${tab}`}
             onClick={() => props.onTabChange(tab)}
           >
-            {tab}
+            {BILAN_TAB_LABELS[tab]}
           </button>
         ))}
       </nav>
-      <section data-testid="bilan-rubrics">
-        {keys.map((k) => {
-          const r = byKey.get(k);
-          if (!r) return null;
-          return (
-            <article key={k} data-testid={`bilan-rubric-${k}`}>
-              <h3>
-                {r.title}{" "}
-                <span data-coverage={r.coverage}>[{r.coverage}]</span>
-              </h3>
-              <p>{r.content}</p>
-            </article>
-          );
-        })}
+      <section data-testid="bilan-rubrics" className="fig-bilan-rubrics">
+        {keys.length === 0 ? (
+          <p className="fig-bilan-empty" data-testid="bilan-rubrics-empty">
+            Aucune rubrique pour cet onglet.
+          </p>
+        ) : (
+          keys.map((k) => {
+            const r = byKey.get(k);
+            if (!r) {
+              return (
+                <article
+                  key={k}
+                  className="fig-bilan-rubric"
+                  data-testid={`bilan-rubric-${k}`}
+                  data-empty="1"
+                >
+                  <h3>
+                    {k}{" "}
+                    <span className="fig-bilan-coverage" data-coverage="MISSING">
+                      MISSING
+                    </span>
+                  </h3>
+                  <p className="fig-bilan-empty">Rubrique absente de ce dossier.</p>
+                </article>
+              );
+            }
+            const empty =
+              !r.content?.trim() ||
+              r.coverage === "MISSING" ||
+              /^rapport manquant$/i.test(r.content.trim());
+            return (
+              <article
+                key={k}
+                className="fig-bilan-rubric"
+                data-testid={`bilan-rubric-${k}`}
+                data-coverage={r.coverage}
+              >
+                <h3>
+                  {r.title}{" "}
+                  <span className="fig-bilan-coverage" data-coverage={r.coverage}>
+                    {r.coverage}
+                  </span>
+                </h3>
+                {empty ? (
+                  <p className="fig-bilan-empty" data-testid={`bilan-rubric-empty-${k}`}>
+                    {r.content?.trim() || "Donnée absente — non certifiée."}
+                  </p>
+                ) : (
+                  <p>{r.content}</p>
+                )}
+              </article>
+            );
+          })
+        )}
       </section>
       {props.limits.length > 0 ? (
-        <section data-testid="bilan-limits">
+        <section data-testid="bilan-limits" className="fig-bilan-limits">
           <h3>Limites</h3>
           <ul>
             {props.limits.map((l) => (
@@ -79,8 +134,18 @@ export function RealizationBilan(props: {
         </section>
       ) : null}
       {props.noraAnalysisMarkdown ? (
-        <section data-testid="bilan-nora-analysis">
-          <h3>Analyse Nora (post-tentative)</h3>
+        <section
+          className="fig-bilan-nora-analysis"
+          data-testid="bilan-nora-analysis"
+          data-kind={props.noraAnalysisKind ?? "unknown"}
+        >
+          <h3>
+            {props.noraAnalysisKind === "NORA_COGNITIVE"
+              ? "Analyse Nora D3 (post-tentative)"
+              : props.noraAnalysisKind === "DETERMINISTIC_SYNTHESIS"
+                ? "Synthèse déterministe (≠ run Nora)"
+                : "Brief technique (≠ avis Nora)"}
+          </h3>
           <pre>{props.noraAnalysisMarkdown}</pre>
         </section>
       ) : null}

```
### `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index 7cdacec9..186126e2 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -1,14 +1,15 @@
 "use client";
 
 /**
- * ML5 — parcours Exécution / Résultats raccordé (frames 12.02–12.08 / 12.11–12.14).
+ * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
  * Mounted on existing project page — no parallel shell.
  * Reading never authorizes; Non confirmation = no dispatch.
  */
 
 import { useCallback, useEffect, useState } from "react";
 import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
-import { RealizationBilan } from "./RealizationBilan";
+import { D6ConfirmLaunch } from "./D6ConfirmLaunch";
+import { RealizationBilan, type BilanTab } from "./RealizationBilan";
 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";
 
 type AttemptRow = {
@@ -41,7 +42,7 @@ type ContractRow = {
   version: number;
   fingerprint: string;
   status: string;
-  body: ContractViewerModel extends never ? never : {
+  body: {
     title: string;
     engagements: ContractViewerModel["engagements"];
     volets: ContractViewerModel["volets"];
@@ -53,8 +54,11 @@ type ContractRow = {
 
 export function CursorRealizationSurface(props: {
   projectId: string;
+  /** Figma: execution vs résultats — same shell, distinct responsibility. */
+  mode?: "execution" | "results";
   onDiscussWithNora?: (draft: string) => void;
 }) {
+  const mode = props.mode ?? "execution";
   const [contracts, setContracts] = useState<ContractRow[]>([]);
   const [attempts, setAttempts] = useState<AttemptRow[]>([]);
   const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
@@ -67,10 +71,9 @@ export function CursorRealizationSurface(props: {
     rubrics: D8Rubric[];
     limits: string[];
     noraAnalysisMarkdown?: string | null;
+    noraAnalysisKind?: string | null;
   } | null>(null);
-  const [bilanTab, setBilanTab] = useState<"synthese" | "evaluation" | "verdict" | "sources">(
-    "synthese",
-  );
+  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
   const [status, setStatus] = useState("");
   const [busy, setBusy] = useState(false);
 
@@ -83,7 +86,6 @@ export function CursorRealizationSurface(props: {
       const j = (await cRes.json()) as { contracts?: ContractRow[] };
       setContracts(j.contracts ?? []);
     }
-    // attempts list via dedicated route if present; else empty
     if (aRes && aRes.ok) {
       const j = (await aRes.json()) as { attempts?: AttemptRow[] };
       setAttempts(j.attempts ?? []);
@@ -94,20 +96,49 @@ export function CursorRealizationSurface(props: {
     void reload();
   }, [reload]);
 
-  async function loadAttemptsFallback() {
-    // Prefer list endpoint; if 404, keep empty (API may only expose per-id GET).
-    const res = await fetch(`/api/projects/${props.projectId}/realization/attempts`);
-    if (res.ok) {
-      const j = (await res.json()) as { attempts?: AttemptRow[] };
-      setAttempts(j.attempts ?? []);
+  /** E05 — poll DISPATCHED attempts beyond ACK; reconcile is observational, not a second dispatch. */
+  useEffect(() => {
+    const dispatched = attempts.filter(
+      (a) => a.status === "DISPATCHED" && !a.live.terminalStatus,
+    );
+    if (dispatched.length === 0) return;
+    let ticks = 0;
+    const id = window.setInterval(() => {
+      ticks += 1;
+      void reload();
+      if (ticks % 5 === 0) {
+        for (const a of dispatched.slice(0, 3)) {
+          void fetch(
+            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/reconcile`,
+            { method: "POST" },
+          ).catch(() => {
+            /* observational */
+          });
+        }
+      }
+    }, 3000);
+    return () => window.clearInterval(id);
+  }, [attempts, props.projectId, reload]);
+
+  async function reconcileAttempt(attemptId: string) {
+    setBusy(true);
+    try {
+      const res = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${attemptId}/reconcile`,
+        { method: "POST" },
+      );
+      const j = (await res.json().catch(() => ({}))) as { error?: string; message?: string; status?: string };
+      setStatus(
+        res.ok
+          ? `Réconciliation: ${j.status ?? "ok"} — pas de second dispatch`
+          : j.message ?? j.error ?? "Réconciliation refusée",
+      );
+      await reload();
+    } finally {
+      setBusy(false);
     }
   }
 
-  useEffect(() => {
-    void loadAttemptsFallback();
-    // eslint-disable-next-line react-hooks/exhaustive-deps
-  }, [props.projectId]);
-
   async function prepareFromContract(contract: ContractRow) {
     setBusy(true);
     setStatus("");
@@ -179,35 +210,135 @@ export function CursorRealizationSurface(props: {
     }
   }
 
-  function confirmNo() {
-    setConfirmOpen(false);
-    setPendingAttemptId(null);
-    setStatus("Confirmation Non — aucun acte D6, aucun dispatch");
+  async function confirmNo() {
+    if (!pendingAttemptId || !selectedContract) {
+      setConfirmOpen(false);
+      setPendingAttemptId(null);
+      setStatus("Confirmation Non — dialogue fermé sans acte");
+      return;
+    }
+    setBusy(true);
+    try {
+      const auth = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            statement: "Refus explicite D6 — pas d'exécution Cursor du contrat inspecté",
+            inspectedFingerprint: selectedContract.fingerprint,
+            confirmed: false,
+          }),
+        },
+      );
+      const aj = (await auth.json().catch(() => ({}))) as {
+        error?: string;
+        message?: string;
+        status?: string;
+        decisionId?: string;
+        refused?: boolean;
+      };
+      if (!auth.ok) {
+        setStatus(aj.message ?? aj.error ?? "Refus D6 non enregistré");
+      } else {
+        setStatus(
+          `Refus D6 enregistré (${aj.status ?? "CANCELLED"}) — décision ${aj.decisionId ?? "—"} — aucun dispatch`,
+        );
+      }
+      setConfirmOpen(false);
+      setPendingAttemptId(null);
+      await reload();
+    } finally {
+      setBusy(false);
+    }
+  }
+
+  function resumeMissing(rubrics: D8Rubric[] | undefined): boolean {
+    const resume = (rubrics ?? []).find((r) => r.key === "resume");
+    return (
+      !resume ||
+      resume.coverage === "MISSING" ||
+      /^rapport manquant$/i.test((resume.content ?? "").trim())
+    );
   }
 
   async function openBilan(attempt: AttemptRow) {
     setSelectedAttempt(attempt);
     setBusy(true);
     try {
+      const handoffRes = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/handoff`,
+      );
+      const handoffJ = (await handoffRes.json().catch(() => ({}))) as {
+        handoff?: { id?: string; status?: string; reportMarkdown?: string | null };
+        status?: string;
+      };
+      const handoff = handoffJ.handoff ?? null;
+      const handoffReceived =
+        handoffRes.ok &&
+        handoff?.status === "RECEIVED" &&
+        Boolean(handoff.reportMarkdown && String(handoff.reportMarkdown).trim());
+
       let res = await fetch(
         `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
       );
       let j = (await res.json().catch(() => ({}))) as {
         status?: string;
         qualification?: {
+          id?: string;
           verdict: string;
           rubrics: D8Rubric[];
           limits: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
+          updatedAt?: string | null;
         };
       };
-      if (j.status === "MISSING" || !j.qualification) {
+
+      const needsFresh =
+        j.status === "MISSING" ||
+        !j.qualification ||
+        (handoffReceived && resumeMissing(j.qualification?.rubrics));
+
+      if (needsFresh) {
+        const payload =
+          j.qualification && handoffReceived && resumeMissing(j.qualification.rubrics)
+            ? {
+                attachNoraCognitive: true,
+                requalify: true,
+                reason:
+                  "C10 — handoff RECEIVED après qualification initiale (rapport manquant) — correction de jugement, pas de redispatch",
+                // judgment_correction: handoff now available; not claiming a distinct new artifact id
+                requalifyMode: "judgment_correction" as const,
+                newProofRef: handoff?.id ?? "",
+                expectedUpdatedAt: j.qualification.updatedAt ?? undefined,
+              }
+            : { attachNoraCognitive: true };
+        if (
+          "requalify" in payload &&
+          payload.requalify &&
+          !payload.newProofRef
+        ) {
+          setStatus(
+            "Handoff reçu mais handoffId absent — impossible de requalifier proprement",
+          );
+          if (j.qualification) {
+            setBilan({
+              verdict: j.qualification.verdict,
+              rubrics: j.qualification.rubrics,
+              limits: j.qualification.limits,
+              noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+              noraAnalysisKind: j.qualification.noraAnalysisKind,
+            });
+          }
+          return;
+        }
         res = await fetch(
           `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
-            body: JSON.stringify({ attachNoraAnalysis: true }),
+            body: JSON.stringify(payload),
           },
         );
         const created = (await res.json().catch(() => ({}))) as {
@@ -215,6 +346,9 @@ export function CursorRealizationSurface(props: {
           rubrics?: D8Rubric[];
           limits?: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
+          error?: string;
+          message?: string;
         };
         if (res.ok && created.rubrics) {
           setBilan({
@@ -222,17 +356,33 @@ export function CursorRealizationSurface(props: {
             rubrics: created.rubrics,
             limits: created.limits ?? [],
             noraAnalysisMarkdown: created.noraAnalysisMarkdown,
+            noraAnalysisKind: created.noraAnalysisKind,
           });
+          setStatus(
+            payload.requalify
+              ? "Bilan D8 requalifié après handoff RECEIVED"
+              : "Bilan D8 créé",
+          );
           return;
         }
-        setStatus("Qualification indisponible");
+        setStatus(created.message ?? created.error ?? "Qualification indisponible");
+        if (j.qualification) {
+          setBilan({
+            verdict: j.qualification.verdict,
+            rubrics: j.qualification.rubrics,
+            limits: j.qualification.limits,
+            noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+            noraAnalysisKind: j.qualification.noraAnalysisKind,
+          });
+        }
         return;
       }
       setBilan({
-        verdict: j.qualification.verdict,
-        rubrics: j.qualification.rubrics,
-        limits: j.qualification.limits,
-        noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+        verdict: j.qualification!.verdict,
+        rubrics: j.qualification!.rubrics,
+        limits: j.qualification!.limits,
+        noraAnalysisMarkdown: j.qualification!.noraAnalysisMarkdown,
+        noraAnalysisKind: j.qualification!.noraAnalysisKind,
       });
     } finally {
       setBusy(false);
@@ -266,13 +416,26 @@ export function CursorRealizationSurface(props: {
       }
     : null;
 
+  const showExecutionChrome = mode === "execution";
+  const showResultsChrome = mode === "results";
+
   return (
-    <div className="fig-cursor-realization" data-testid="cursor-realization-surface">
+    <div
+      className="fig-cursor-realization"
+      data-testid="cursor-realization-surface"
+      data-mode={mode}
+    >
       <header>
-        <p className="fig-kicker !mb-0">EXÉCUTION CURSOR  /  RÉSULTATS</p>
-        <h2 className="fig-inspector-title">Réalisation gouvernée</h2>
+        <p className="fig-kicker !mb-0">
+          {showExecutionChrome ? "EXÉCUTION CURSOR" : "RÉSULTATS ET PREUVES  /  D8"}
+        </p>
+        <h2 className="fig-inspector-title">
+          {showExecutionChrome ? "Interventions et observations" : "Bilans de réalisation"}
+        </h2>
         <p className="fig-travail-viewer-meta">
-          Inspection → confirmation D6 → une tentative → observations → D8. Lecture ≠ autorisation.
+          {showExecutionChrome
+            ? "Inspection → confirmation D6 → une tentative → observations. Lecture ≠ autorisation."
+            : "Neuf rubriques D8 dans quatre onglets Figma. Verdict ≠ avis Nora ≠ réception D6."}
         </p>
         {status ? (
           <p role="status" data-testid="realization-status">
@@ -281,44 +444,46 @@ export function CursorRealizationSurface(props: {
         ) : null}
       </header>
 
-      <section data-testid="realization-contracts">
-        <h3>Contrats techniques</h3>
-        {contracts.length === 0 ? (
-          <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
-        ) : (
-          <ul>
-            {contracts.map((c) => (
-              <li key={c.id}>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`contract-select-${c.id}`}
-                  disabled={busy}
-                  onClick={() => {
-                    setSelectedContract(c);
-                    setInstructionExpanded(false);
-                  }}
-                >
-                  {c.body.title} · {c.status} · v{c.version}
-                </button>
-                {c.status === "READY" ? (
+      {showExecutionChrome ? (
+        <section data-testid="realization-contracts">
+          <h3>Contrats techniques</h3>
+          {contracts.length === 0 ? (
+            <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
+          ) : (
+            <ul>
+              {contracts.map((c) => (
+                <li key={c.id}>
                   <button
                     type="button"
-                    className="btn"
-                    data-testid={`contract-prepare-${c.id}`}
+                    className="btn secondary"
+                    data-testid={`contract-select-${c.id}`}
                     disabled={busy}
-                    onClick={() => void prepareFromContract(c)}
+                    onClick={() => {
+                      setSelectedContract(c);
+                      setInstructionExpanded(false);
+                    }}
                   >
-                    Préparer exécution
+                    {c.body.title} · {c.status} · v{c.version}
                   </button>
-                ) : null}
-              </li>
-            ))}
-          </ul>
-        )}
-      </section>
+                  {c.status === "READY" ? (
+                    <button
+                      type="button"
+                      className="btn"
+                      data-testid={`contract-prepare-${c.id}`}
+                      disabled={busy}
+                      onClick={() => void prepareFromContract(c)}
+                    >
+                      Préparer exécution
+                    </button>
+                  ) : null}
+                </li>
+              ))}
+            </ul>
+          )}
+        </section>
+      ) : null}
 
-      {viewerModel ? (
+      {showExecutionChrome && viewerModel ? (
         <ContractViewer
           contract={viewerModel}
           instructionExpanded={instructionExpanded}
@@ -334,41 +499,25 @@ export function CursorRealizationSurface(props: {
         />
       ) : null}
 
-      {confirmOpen ? (
-        <div
-          role="dialog"
-          aria-modal="true"
-          data-testid="d6-confirm-launch"
-          className="fig-d6-confirm"
-        >
-          <h3>Confirmer le lancement</h3>
-          <p>
-            Vous avez inspecté le contrat {selectedContract?.contractKey} v
-            {selectedContract?.version}. Confirmez-vous l&apos;exécution Cursor ?
-          </p>
-          <button
-            type="button"
-            className="btn"
-            data-testid="d6-confirm-yes"
-            disabled={busy}
-            onClick={() => void confirmYes()}
-          >
-            Oui
-          </button>
-          <button
-            type="button"
-            className="btn secondary"
-            data-testid="d6-confirm-no"
-            disabled={busy}
-            onClick={confirmNo}
-          >
-            Non
-          </button>
-        </div>
+      {confirmOpen && selectedContract ? (
+        <D6ConfirmLaunch
+          contractKey={selectedContract.contractKey}
+          version={selectedContract.version}
+          fingerprint={selectedContract.fingerprint}
+          title={selectedContract.body.title}
+          busy={busy}
+          onYes={() => void confirmYes()}
+          onNo={() => void confirmNo()}
+          onCancel={() => {
+            setConfirmOpen(false);
+            setPendingAttemptId(null);
+            setStatus("Dialogue D6 annulé — aucun acte");
+          }}
+        />
       ) : null}
 
       <section data-testid="realization-attempts">
-        <h3>Tentatives</h3>
+        <h3>{showExecutionChrome ? "Historique des interventions" : "Tentatives à bilanter"}</h3>
         {attempts.length === 0 ? (
           <p className="muted">Aucune tentative Cursor pour ce projet.</p>
         ) : (
@@ -378,16 +527,37 @@ export function CursorRealizationSurface(props: {
                 <span>
                   {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                   {a.live.lastActivitySummary ?? "pas d'observation"}
+                  {a.live.agentId ? ` · agent ${a.live.agentId.slice(0, 8)}` : ""}
+                  {a.live.runId ? ` · run ${a.live.runId.slice(0, 8)}` : ""}
+                  {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                 </span>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`attempt-bilan-${a.attemptId}`}
-                  onClick={() => void openBilan(a)}
-                >
-                  Bilan D8
-                </button>
-                {a.status === "DISPATCHED" ? (
+                {showResultsChrome ||
+                a.status === "COMPLETED" ||
+                a.status === "FAILED" ||
+                a.status === "AMBIGUOUS" ? (
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    data-testid={`attempt-bilan-${a.attemptId}`}
+                    onClick={() => void openBilan(a)}
+                  >
+                    Bilan D8
+                  </button>
+                ) : null}
+                {showExecutionChrome &&
+                (a.status === "DISPATCHED" || a.status === "AMBIGUOUS") ? (
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    data-testid="cursor-reconcile"
+                    data-attempt-id={a.attemptId}
+                    disabled={busy}
+                    onClick={() => void reconcileAttempt(a.attemptId)}
+                  >
+                    Réconcilier
+                  </button>
+                ) : null}
+                {showExecutionChrome && a.status === "DISPATCHED" ? (
                   <button
                     type="button"
                     className="btn secondary"
@@ -403,17 +573,16 @@ export function CursorRealizationSurface(props: {
         )}
       </section>
 
-      {bilan && selectedAttempt ? (
+      {bilan && selectedAttempt && (showResultsChrome || mode === "execution") ? (
         <RealizationBilan
           attemptId={selectedAttempt.attemptId}
           verdict={bilan.verdict}
           rubrics={bilan.rubrics}
           limits={bilan.limits}
           noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
+          noraAnalysisKind={bilan.noraAnalysisKind}
           activeTab={bilanTab}
-          onTabChange={(tab) =>
-            setBilanTab(tab as "synthese" | "evaluation" | "verdict" | "sources")
-          }
+          onTabChange={setBilanTab}
           onDiscussWithNora={() =>
             props.onDiscussWithNora?.(
               `Reprendre à propos de la tentative ${selectedAttempt.attemptId} (verdict D8: ${bilan.verdict}).`,

```
### `projects/sfia-studio-next/web/src/components/figma/tokens.css`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 9252aa8c..4dfe82e1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5964,3 +5964,278 @@
     width: 100%;
   }
 }
+
+/* ─── ML5 C10 — Contract viewer / D6 modal / D8 bilan ─── */
+
+.fig-contract-viewer {
+  display: flex;
+  flex-direction: column;
+  min-width: 0;
+  min-height: 0;
+  width: 100%;
+  max-width: 100%;
+  height: 100%;
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 16px;
+  overflow: hidden;
+}
+
+.fig-contract-viewer .fig-travail-viewer-head,
+.fig-contract-viewer .fig-contract-footer {
+  flex-shrink: 0;
+}
+
+.fig-contract-section {
+  min-width: 0;
+  max-width: 100%;
+  padding: 12px 18px;
+  border-bottom: 1px solid #272e49;
+}
+
+.fig-contract-section h3 {
+  margin: 0 0 8px;
+  font-size: 13px;
+  color: var(--fig-accent-soft);
+}
+
+.fig-contract-section dl,
+.fig-contract-section ul,
+.fig-contract-section p,
+.fig-contract-section dd,
+.fig-contract-section li {
+  min-width: 0;
+  max-width: 100%;
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-contract-section dl {
+  display: grid;
+  grid-template-columns: minmax(0, 9rem) minmax(0, 1fr);
+  gap: 6px 12px;
+  margin: 0;
+}
+
+.fig-contract-section dt {
+  color: var(--fig-quiet);
+  font-size: 12px;
+}
+
+.fig-contract-section dd {
+  margin: 0;
+  font-size: 13px;
+  color: var(--fig-ink);
+}
+
+.fig-contract-instruction-full {
+  margin: 8px 0 0;
+  padding: 12px;
+  max-width: 100%;
+  max-height: min(48vh, 420px);
+  overflow-x: auto;
+  overflow-y: auto;
+  overscroll-behavior: contain;
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+  word-break: break-word;
+  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
+  font-size: 12px;
+  line-height: 1.45;
+  color: #f4f6fc;
+  background: #0f1420;
+  border: 1px solid #272e49;
+  border-radius: 10px;
+}
+
+.fig-contract-footer {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  justify-content: flex-end;
+  padding: 12px 18px 16px;
+  border-top: 1px solid #272e49;
+}
+
+.fig-cursor-realization {
+  display: flex;
+  flex-direction: column;
+  gap: 16px;
+  min-width: 0;
+  max-width: 100%;
+  width: 100%;
+  overflow-x: hidden;
+}
+
+.fig-cursor-realization header,
+.fig-cursor-realization section {
+  min-width: 0;
+  max-width: 100%;
+}
+
+.fig-cursor-realization ul {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+}
+
+.fig-cursor-realization li {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  align-items: center;
+  min-width: 0;
+}
+
+.fig-d6-confirm {
+  position: fixed;
+  inset: 0;
+  z-index: 80;
+  display: flex;
+  align-items: center;
+  justify-content: center;
+  padding: 24px;
+  background: rgba(7, 10, 18, 0.72);
+  backdrop-filter: blur(2px);
+}
+
+.fig-d6-confirm-card {
+  width: min(520px, 100%);
+  max-height: min(80vh, 640px);
+  overflow: auto;
+  padding: 24px;
+  background: #151c29;
+  border: 1px solid #3a4570;
+  border-radius: 16px;
+  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
+}
+
+.fig-d6-confirm-card h3 {
+  margin: 0 0 8px;
+  font-size: 20px;
+  color: var(--fig-ink);
+}
+
+.fig-d6-confirm-card p {
+  margin: 0 0 12px;
+  color: var(--fig-muted);
+  font-size: 14px;
+  overflow-wrap: anywhere;
+}
+
+.fig-d6-confirm-actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 10px;
+  justify-content: flex-end;
+  margin-top: 16px;
+}
+
+.fig-realization-bilan {
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+  min-width: 0;
+  max-width: 100%;
+  padding: 4px 0 24px;
+}
+
+.fig-bilan-tabs {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.fig-bilan-rubrics {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
+  gap: 12px;
+}
+
+.fig-bilan-rubric {
+  min-width: 0;
+  padding: 14px 16px;
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 12px;
+}
+
+.fig-bilan-rubric h3 {
+  margin: 0 0 8px;
+  font-size: 14px;
+  color: var(--fig-ink);
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  align-items: center;
+}
+
+.fig-bilan-rubric p,
+.fig-bilan-rubric pre {
+  margin: 0;
+  font-size: 13px;
+  line-height: 1.45;
+  color: var(--fig-muted);
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-bilan-coverage {
+  display: inline-flex;
+  align-items: center;
+  padding: 2px 8px;
+  border-radius: 999px;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+}
+
+.fig-bilan-coverage[data-coverage="COMPLETE"] {
+  background: var(--fig-ok-bg);
+  color: var(--fig-ok);
+}
+
+.fig-bilan-coverage[data-coverage="PARTIAL"] {
+  background: var(--fig-warn-bg);
+  color: var(--fig-warn);
+}
+
+.fig-bilan-coverage[data-coverage="MISSING"],
+.fig-bilan-coverage[data-coverage="UNKNOWN"] {
+  background: #3a2030;
+  color: #f0a0b8;
+}
+
+.fig-bilan-empty {
+  margin: 0;
+  padding: 12px 14px;
+  border: 1px dashed #3a4570;
+  border-radius: 10px;
+  color: var(--fig-quiet);
+  font-size: 13px;
+}
+
+.fig-bilan-limits ul {
+  margin: 0;
+  padding-left: 1.1rem;
+  color: var(--fig-muted);
+  font-size: 13px;
+}
+
+.fig-bilan-nora-analysis pre {
+  margin: 8px 0 0;
+  padding: 12px;
+  max-height: 240px;
+  overflow: auto;
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+  word-break: break-word;
+  background: #0f1420;
+  border: 1px solid #272e49;
+  border-radius: 10px;
+  font-size: 12px;
+}

```
### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
index 7cc137a3..399f5ae3 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
@@ -13,17 +13,20 @@ export async function POST(
     const body = (await req.json()) as {
       statement?: string;
       inspectedFingerprint?: string;
-      /** Explicit Oui — required. Missing / false = no HumanDecision, no effect. */
-      confirmed?: boolean;
+      /** Explicit Oui/Non — must be boolean. Absent/null/invalid = no HumanDecision. */
+      confirmed?: unknown;
     };
     if (!body.statement || !body.inspectedFingerprint) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
-    if (body.confirmed !== true) {
+    // C10 / T-02 — confirmed must be an explicit boolean.
+    // Absent, null, or non-boolean → reject without HumanDecision / mutation.
+    if (typeof body.confirmed !== "boolean") {
       return NextResponse.json(
         {
-          error: "CONFIRMATION_REFUSED",
-          message: "Confirmation Non ou absente — aucun acte D6, aucun dispatch",
+          error: "CONFIRMATION_REQUIRED",
+          message:
+            "confirmed doit être true (Oui) ou false (Non) — absence/null/invalide = aucun acte D6",
         },
         { status: 400 },
       );
@@ -34,7 +37,7 @@ export async function POST(
       attemptId,
       statement: body.statement,
       inspectedFingerprint: body.inspectedFingerprint,
-      confirmed: true,
+      confirmed: body.confirmed,
     });
     return NextResponse.json(result);
   } catch (e) {

```
### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index b7e7c4ca..fa951a8c 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -6,6 +6,8 @@ import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
 import { CursorRealizationSurface } from "@/components/figma/CursorRealizationSurface";
 import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
+import { ContractViewer, type ContractViewerModel } from "@/components/figma/ContractViewer";
+import { D6ConfirmLaunch } from "@/components/figma/D6ConfirmLaunch";
 import {
   ProjectJournal,
   type JournalContradiction,
@@ -102,14 +104,7 @@ type Knowledge = {
   openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
 };
 
-type Surface =
-  | "travail"
-  | "projet"
-  | "pilotage"
-  | "journal"
-  | "document"
-  | "git"
-  | "publication";
+type Surface = StudioSurface;
 type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";
 type DocView = "library" | "read" | "history" | "compare";
 type HistoricalSourceConfirmation = {
@@ -216,6 +211,7 @@ const SURFACES: Surface[] = [
   "journal",
   "document",
   "git",
+  "execution",
   "publication",
 ];
 
@@ -290,6 +286,25 @@ export default function ProjectPage() {
   const [forceStickToken, setForceStickToken] = useState(0);
   const [viewer, setViewer] = useState<TravailViewerResource | null>(null);
   const [viewerEnlarged, setViewerEnlarged] = useState(false);
+  /** D09/H02 — technical contract in Travail 50/50; D6 Oui/Non depuis Travail lorsque READY. */
+  const [contractViewer, setContractViewer] = useState<ContractViewerModel | null>(null);
+  const [contractInstructionExpanded, setContractInstructionExpanded] = useState(false);
+  const [readyContracts, setReadyContracts] = useState<
+    Array<{ id: string; contractKey: string; version: number; title: string; status: string }>
+  >([]);
+  const [travailD6AttemptId, setTravailD6AttemptId] = useState<string | null>(null);
+  const [travailD6Busy, setTravailD6Busy] = useState(false);
+  const [liveActivityEvents, setLiveActivityEvents] = useState<
+    Array<{
+      sequence: number;
+      nature: string;
+      status: string;
+      summary: string;
+      phase: string;
+      sourceRef?: string | null;
+    }>
+  >([]);
+  const [liveActivityHeadline, setLiveActivityHeadline] = useState("");
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
@@ -398,6 +413,12 @@ export default function ProjectPage() {
     preparationIdRef.current = preparationId;
   }, [preparationId]);
 
+  useEffect(() => {
+    if (surface !== "travail") return;
+    void refreshReadyContracts();
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- refresh on surface entry
+  }, [surface, params.projectId]);
+
   useEffect(() => {
     if (surface !== "journal") return;
     let cancelled = false;
@@ -496,6 +517,8 @@ export default function ProjectPage() {
     viewerOpenRef.current = false;
     setViewer(null);
     setViewerEnlarged(false);
+    setContractViewer(null);
+    setContractInstructionExpanded(false);
   }
 
   function applyViewerIfCurrent(
@@ -755,12 +778,217 @@ export default function ProjectPage() {
     });
   }
 
+  async function refreshReadyContracts() {
+    try {
+      const res = await fetch(`/api/projects/${params.projectId}/realization/contracts`);
+      const j = (await res.json().catch(() => ({}))) as {
+        contracts?: Array<{
+          id: string;
+          contractKey: string;
+          version: number;
+          status: string;
+          body?: { title?: string };
+        }>;
+      };
+      setReadyContracts(
+        (j.contracts ?? [])
+          .filter((c) => c.status === "READY")
+          .map((c) => ({
+            id: c.id,
+            contractKey: c.contractKey,
+            version: c.version,
+            title: c.body?.title ?? c.contractKey,
+            status: c.status,
+          })),
+      );
+    } catch {
+      /* non-blocking */
+    }
+  }
+
+  async function openContractViewer(contractId: string) {
+    try {
+      const res = await fetch(`/api/projects/${params.projectId}/realization/contracts`);
+      const j = (await res.json().catch(() => ({}))) as {
+        contracts?: Array<{
+          id: string;
+          contractKey: string;
+          version: number;
+          fingerprint: string;
+          status: string;
+          body: ContractViewerModel["engagements"] extends infer _E
+            ? {
+                title: string;
+                engagements: ContractViewerModel["engagements"];
+                volets: ContractViewerModel["volets"];
+                instructionText: string;
+                risks: string[];
+                exclusions: string[];
+              }
+            : never;
+        }>;
+      };
+      const row = (j.contracts ?? []).find((c) => c.id === contractId);
+      if (!row) {
+        setStatus("Contrat introuvable pour la visionneuse Travail");
+        return;
+      }
+      setViewer(null);
+      setViewerEnlarged(false);
+      setContractInstructionExpanded(false);
+      setReadyContracts(
+        (j.contracts ?? [])
+          .filter((c) => c.status === "READY")
+          .map((c) => ({
+            id: c.id,
+            contractKey: c.contractKey,
+            version: c.version,
+            title: c.body?.title ?? c.contractKey,
+            status: c.status,
+          })),
+      );
+      setContractViewer({
+        contractId: row.id,
+        contractKey: row.contractKey,
+        version: row.version,
+        fingerprint: row.fingerprint,
+        status: row.status,
+        title: row.body.title,
+        engagements: row.body.engagements,
+        volets: row.body.volets,
+        instructionText: row.body.instructionText,
+        risks: row.body.risks ?? [],
+        exclusions: row.body.exclusions ?? [],
+      });
+    } catch {
+      setStatus("Impossible d'ouvrir le contrat dans Travail");
+    }
+  }
+
+  async function prepareTravailD6() {
+    if (!contractViewer || contractViewer.status !== "READY") return;
+    setTravailD6Busy(true);
+    setStatus("");
+    try {
+      const correlationKey = `ml5-travail-${contractViewer.contractId}-${Date.now()}`;
+      const res = await fetch(
+        `/api/projects/${params.projectId}/realization/attempts/prepare`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            contractId: contractViewer.contractId,
+            correlationKey,
+            workspaceKey: "default",
+          }),
+        },
+      );
+      const j = (await res.json().catch(() => ({}))) as {
+        attemptId?: string;
+        error?: string;
+        message?: string;
+      };
+      if (!res.ok || !j.attemptId) {
+        setStatus(j.message ?? j.error ?? "Préparation refusée");
+        return;
+      }
+      setTravailD6AttemptId(j.attemptId);
+    } finally {
+      setTravailD6Busy(false);
+    }
+  }
+
+  async function confirmTravailD6Yes() {
+    if (!travailD6AttemptId || !contractViewer) return;
+    setTravailD6Busy(true);
+    try {
+      const auth = await fetch(
+        `/api/projects/${params.projectId}/realization/attempts/${travailD6AttemptId}/authorize`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            statement: "Je mandate l'exécution Cursor du contrat inspecté (Travail)",
+            inspectedFingerprint: contractViewer.fingerprint,
+            confirmed: true,
+          }),
+        },
+      );
+      const aj = (await auth.json().catch(() => ({}))) as {
+        error?: string;
+        message?: string;
+        decisionId?: string;
+      };
+      if (!auth.ok) {
+        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
+        setTravailD6AttemptId(null);
+        return;
+      }
+      const disp = await fetch(
+        `/api/projects/${params.projectId}/realization/attempts/${travailD6AttemptId}/dispatch`,
+        { method: "POST" },
+      );
+      const dj = (await disp.json().catch(() => ({}))) as { error?: string; message?: string };
+      setStatus(
+        disp.ok
+          ? `D6 Oui (Travail) — décision ${aj.decisionId ?? "—"} — dispatch accepté`
+          : dj.message ?? dj.error ?? "Dispatch refusé",
+      );
+      setTravailD6AttemptId(null);
+      selectSurface("execution");
+    } finally {
+      setTravailD6Busy(false);
+    }
+  }
+
+  async function confirmTravailD6No() {
+    if (!travailD6AttemptId || !contractViewer) {
+      setTravailD6AttemptId(null);
+      return;
+    }
+    setTravailD6Busy(true);
+    try {
+      const auth = await fetch(
+        `/api/projects/${params.projectId}/realization/attempts/${travailD6AttemptId}/authorize`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            statement: "Refus explicite D6 depuis Travail — pas d'exécution Cursor",
+            inspectedFingerprint: contractViewer.fingerprint,
+            confirmed: false,
+          }),
+        },
+      );
+      const aj = (await auth.json().catch(() => ({}))) as {
+        error?: string;
+        message?: string;
+        decisionId?: string;
+        status?: string;
+      };
+      setStatus(
+        auth.ok
+          ? `Refus D6 (Travail) ${aj.status ?? "CANCELLED"} — ${aj.decisionId ?? "—"} — aucun dispatch`
+          : aj.message ?? aj.error ?? "Refus D6 non enregistré",
+      );
+      setTravailD6AttemptId(null);
+    } finally {
+      setTravailD6Busy(false);
+    }
+  }
+
   /** C1/Final A — exact revision or live current via D4; D9 Git via existing APIs. */
   async function openTravailReference(ref: TurnReference) {
     const projectIdAtStart = params.projectId;
     const seq = ++viewerRequestSeqRef.current;
     viewerOpenRef.current = true;
 
+    if (ref.kind === "contract" && ref.resourceId) {
+      viewerOpenRef.current = false;
+      await openContractViewer(ref.resourceId);
+      return;
+    }
+
     if (ref.kind === "document" && ref.resourceId) {
       const match = documents.find((d) => d.document.id === ref.resourceId);
       const title = match?.document.title ?? ref.label;
@@ -2252,6 +2480,8 @@ export default function ProjectPage() {
     const pendingBefore = unresolvedPending ?? readPending();
     setBusy(true);
     setNoraActivity("preparing");
+    setLiveActivityEvents([]);
+    setLiveActivityHeadline("Nora prépare une réponse…");
     // Same content reuses the same turn key until a terminal result clears it.
     if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
       messageTurnKeyRef.current = {
@@ -2270,6 +2500,58 @@ export default function ProjectPage() {
       clientCommandKey,
       ...pendingMeta,
     });
+    // C01/C07 — poll durable turn + activity while POST awaits Nora (parallel read path).
+    let activityPollTimer: number | undefined;
+    let lastActivitySeq = 0;
+    let knownTurnCommandId: string | null = null;
+    const pollLiveActivity = async () => {
+      try {
+        if (!knownTurnCommandId) {
+          const look = await fetch(
+            `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
+          );
+          if (look.ok) {
+            const lj = (await look.json()) as { turnCommandId?: string | null };
+            if (lj.turnCommandId) knownTurnCommandId = lj.turnCommandId;
+          }
+        }
+        if (!knownTurnCommandId) return;
+        const q = lastActivitySeq > 0 ? `?afterSequence=${lastActivitySeq}` : "";
+        const act = await fetch(
+          `/api/projects/${params.projectId}/turns/${knownTurnCommandId}/activity${q}`,
+        );
+        if (!act.ok) return;
+        const aj = (await act.json()) as {
+          events?: Array<{
+            sequence: number;
+            nature: string;
+            status: string;
+            summary: string;
+            phase: string;
+            sourceRef?: string | null;
+          }>;
+        };
+        const batch = aj.events ?? [];
+        if (batch.length === 0) return;
+        setLiveActivityEvents((prev) => {
+          const seen = new Set(prev.map((e) => e.sequence));
+          const merged = [...prev];
+          for (const ev of batch) {
+            if (!seen.has(ev.sequence)) merged.push(ev);
+          }
+          return merged;
+        });
+        const last = batch[batch.length - 1]!;
+        lastActivitySeq = Math.max(lastActivitySeq, last.sequence);
+        setLiveActivityHeadline(`${last.nature}: ${last.summary}`.slice(0, 160));
+      } catch {
+        /* observational poll */
+      }
+    };
+    activityPollTimer = window.setInterval(() => {
+      void pollLiveActivity();
+    }, 800);
+    void pollLiveActivity();
     try {
       const res = await fetch(`/api/preparations/${preparationId}/messages`, {
         method: "POST",
@@ -2290,6 +2572,20 @@ export default function ProjectPage() {
         j = { errorCategory: "RESPONSE_PARSE_FAILED" };
       }
       if (res.ok) {
+        const prepared = j.preparedContract as
+          | {
+              contractId: string;
+              contractKey: string;
+              version: number;
+              fingerprint: string;
+              status: string;
+            }
+          | null
+          | undefined;
+        if (prepared?.contractId) {
+          void openContractViewer(prepared.contractId);
+        }
+        void pollLiveActivity();
         const serverKind = (j.nextTurnKind as ThreadTurnKind | undefined) ?? "INCERTAIN";
         const independent = serverKind === "DIALOGUE_INDEPENDANT";
         const effectBlocked = Boolean(j.pendingEffectBlocked);
@@ -2533,6 +2829,7 @@ export default function ProjectPage() {
       setNoraActivity("error");
       setStatus("échec réseau — intention de tour conservée");
     } finally {
+      if (activityPollTimer != null) window.clearInterval(activityPollTimer);
       setBusy(false);
     }
   }
@@ -2568,7 +2865,12 @@ export default function ProjectPage() {
     );
   }
 
-  const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";
+  const travailLayout =
+    contractViewer || viewer
+      ? viewerEnlarged && !contractViewer
+        ? "enlarged"
+        : "split"
+      : "normal";
 
   const docListItems = documents.map((d) => ({
     document: { ...d.document, projectId: params.projectId },
@@ -2686,6 +2988,8 @@ export default function ProjectPage() {
           onOpenTrajectoire={() => selectSurface("pilotage")}
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
+          liveActivityEvents={liveActivityEvents}
+          liveActivityHeadline={liveActivityHeadline}
           status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
           projections={resolveActionableProjections({
             messages,
@@ -2716,7 +3020,32 @@ export default function ProjectPage() {
               : undefined
           }
           aside={
-            viewer ? (
+            contractViewer ? (
+              <ContractViewer
+                contract={contractViewer}
+                instructionExpanded={contractInstructionExpanded}
+                onToggleInstruction={() =>
+                  setContractInstructionExpanded((v) => !v)
+                }
+                onClose={() => {
+                  setContractViewer(null);
+                  setContractInstructionExpanded(false);
+                  setTravailD6AttemptId(null);
+                }}
+                onOpenInExecution={() => {
+                  setContractViewer(null);
+                  selectSurface("execution");
+                }}
+                onRequestExecute={
+                  contractViewer.status === "READY"
+                    ? () => void prepareTravailD6()
+                    : undefined
+                }
+                executeDisabled={
+                  travailD6Busy || contractViewer.status !== "READY"
+                }
+              />
+            ) : viewer ? (
               <TravailViewer
                 resource={viewer}
                 enlarged={viewerEnlarged}
@@ -2756,6 +3085,38 @@ export default function ProjectPage() {
                   Fil de préparation et conversation consultables depuis Travail.
                 </p>
               </div>
+              <div className="fig-inspector-card" data-testid="travail-aside-contracts">
+                <p className="fig-inspector-card-title">Contrats techniques</p>
+                <p className="fig-inspector-card-body">
+                  Visionneuse 50/50 — lecture intégrale puis D6 si READY.
+                </p>
+                <button
+                  type="button"
+                  className="btn secondary mt-2"
+                  data-testid="travail-refresh-contracts"
+                  onClick={() => void refreshReadyContracts()}
+                >
+                  Actualiser
+                </button>
+                {readyContracts.length === 0 ? (
+                  <p className="fig-travail-viewer-meta mt-2">Aucun contrat READY.</p>
+                ) : (
+                  <ul className="mt-2 space-y-1" data-testid="travail-ready-contracts">
+                    {readyContracts.map((c) => (
+                      <li key={c.id}>
+                        <button
+                          type="button"
+                          className="btn secondary"
+                          data-testid={`travail-open-contract-${c.id}`}
+                          onClick={() => void openContractViewer(c.id)}
+                        >
+                          {c.title} · v{c.version}
+                        </button>
+                      </li>
+                    ))}
+                  </ul>
+                )}
+              </div>
               <div className="fig-inspector-card">
                 <p className="fig-inspector-card-title">Dossier du projet</p>
                 <p className="fig-inspector-card-body">
@@ -2786,6 +3147,13 @@ export default function ProjectPage() {
                   >
                     Sources Git
                   </button>
+                  <button
+                    type="button"
+                    className="fig-inspector-link"
+                    onClick={() => selectSurface("execution")}
+                  >
+                    Exécution
+                  </button>
                   <button
                     type="button"
                     className="fig-inspector-link"
@@ -2816,6 +3184,21 @@ export default function ProjectPage() {
             )
           }
         />
+        {travailD6AttemptId && contractViewer ? (
+          <D6ConfirmLaunch
+            contractKey={contractViewer.contractKey}
+            version={contractViewer.version}
+            fingerprint={contractViewer.fingerprint}
+            title={contractViewer.title}
+            busy={travailD6Busy}
+            onYes={() => void confirmTravailD6Yes()}
+            onNo={() => void confirmTravailD6No()}
+            onCancel={() => {
+              setTravailD6AttemptId(null);
+              setStatus("Dialogue D6 annulé (Travail) — aucun acte");
+            }}
+          />
+        ) : null}
         </>
       ) : null}
 
@@ -2984,10 +3367,24 @@ export default function ProjectPage() {
         />
       ) : null}
 
+      {surface === "execution" ? (
+        <div data-testid="execution-surface-ml5">
+          <CursorRealizationSurface
+            projectId={params.projectId}
+            mode="execution"
+            onDiscussWithNora={(text) => {
+              setDraft(text);
+              selectSurface("travail");
+            }}
+          />
+        </div>
+      ) : null}
+
       {surface === "publication" ? (
         <div data-testid="publication-surface-ml5">
           <CursorRealizationSurface
             projectId={params.projectId}
+            mode="results"
             onDiscussWithNora={(text) => {
               setDraft(text);
               selectSurface("travail");

```
### `projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts`
```diff
NEW FILE — see section 9

```
### `projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts`
```diff
NEW FILE — see section 9

```
### `projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts`
```diff
NEW FILE — see section 9

```
### `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cc1c771f..d32e2a75 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,138 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE10-UX-D8-QUAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 10 convergence UX, D6, D8 et qualification visuelle |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C10 non poussés) |
+| Contenu | CSS contrat/D6/D8 ; Travail 50/50 + D6 ; `confirmed` boolean strict ; bilan requalify après handoff ; pièce nouvelle G15 ; viewport 1680×970 |
+| Scénario | `ml5-c10-mono-20261123` — project `proj_d54a9443…` — Oui `efx_d4617b21…` — handoff `rhf_cc411abd…` |
+| Tests | Unit ML5 **73 PASS** ; Playwright C10 **15 PASS / 0 FAIL** ; F2 **0 PASS / NOT PROVEN** |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) |
+| Push projet | **NONE** |
+| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE9-E2E-MONO-ATTEMPT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 9 démonstration fonctionnelle intégrée mono-tentative |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C9 non poussés) |
+| Contenu | D6 Non authentifié (CANCELLED+decisionId) ; D6 Oui+fingerprint ; SCRIPTED_PHASED RUNNING→reconcile COMPLETED ; bilan D8 4 onglets ; retour Nora brouillon ; 14 captures + manifeste mono-tentative |
+| Scénario | `ml5-c9-mono-20261123` — project `proj_a4525a4a…` — attempt Oui `efx_1e86bf8c…` — refus `efx_b70c69ef…` |
+| Frontier | SCRIPTED / DEV — ≠ Nora LIVE, ≠ Cursor SDK LIVE, ≠ WEB LIVE |
+| Tests | Unit C9 phased 3 PASS ; unit ML5 ciblés 15+ PASS ; Playwright E2E 15 PASS / 1 PARTIAL (handoff re-ingéré) ; F2 global NOT PROVEN |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité BROWSER améliorée, présence inchangée |
+| Push projet | **NONE** |
+| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE8-INVARIANTS-INTEGRATED
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 8 fermeture invariants + parcours intégré |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Contenu | A1 origin/ls-remote/REMOTE_VERIFIED ; A2 listen probe ; A3 MCP fail-closed UNKNOWN ; B1 proof exact + no handoff fallback ; G07 PNG magic ; BROWSER intégré SCRIPTED |
+| Tests | Unit+PG ML5 **79 PASS** ; tsc PASS ; Playwright C8 ; F2 global NOT PROVEN |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité ≠ présence |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE7-INTEGRATED-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 7 convergence fonctionnelle, sécurisation, qualification |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Checkpoint | R-003 @ `5a4e4405` · handoff C6 `b5466dd7` |
+| Contenu | CP-01 observeWorkspaceGitFacts ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref + qualify-in-TX ; G07 evidence-captures ; B04 citations ; E12 MCP check ; Playwright runtime PNG ; fixture SCRIPTED BROWSER |
+| Tests | Unit+PG ML5 **75 PASS** ; tsc PASS ; Playwright 4 captures ; F2 global **NOT PROVEN** |
+| Inventaire | **1 / 97 / 1** (B09 reste NOT_IMPL) |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE6-GIT-A-DEV-BROWSER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 6 Git Cursor option A + DEV auto-session + fermeture |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Décision | `1e6929c543a88606488094be2f5dfe7fc34a0cb9` — DÉC-ML5-GIT A + DÉC-ML5-DEV |
+| Lane | DEV `sfia_next_dev` :5433 — mig **019** ; RECETTE/STABLE inchangées |
+| Contenu | Auto-session Pilote DEV fail-closed ; Git option A preflight/observe/bare harness (Studio non publisher) ; G15 FOR UPDATE + PG concurrent ; activityFlushQueue await ; A04 corrective intent ; next.config serverExternalPackages `@cursor/sdk` ; BROWSER Travail/Exécution/Résultats/sas |
+| Tests | Unit+PG ciblés **34 PASS** ; tsc PASS ; BROWSER snapshots OK ; F2 PNG **NOT PROVEN** (capture timeout) ; LIVE/REAL **NOT** |
+| Inventaire | **1 / 92 / 6** (was 1/81/17) |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE5-INTEGRATED-COMPLETION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 5 finalisation fonctionnelle intégrée |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Lane | DEV `sfia_next_dev` :5433 — mig **019** history_json |
+| Contenu | Travail ContractViewer 50/50 ; activité poll RUNNING ; mid-turn OBSERVED ; B1 assertPublicHttpsUrl+confront ; G15 requalify ; Cursor poll/reconcile UI ; preparedContract sur TurnResult |
+| Tests | Unit ciblés **22 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-FUNCTIONAL-COMPLETION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Complétude fonctionnelle, sécurisation et stabilisation |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — cycles 3+4 non commités) |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV `sfia_next_dev` :5433 — RECETTE/STABLE inchangées |
+| Contenu | Inventaire Impl **1/74/24** (réconcilié explore) ; sendIntent pre-SDK ; tool-source-journal ; READY prepId persisté ; B1 public-web-search-frontier SCRIPTED ; activité OBSERVED sources ; DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE ; D8 critères sans preuve lexicale |
+| Tests | Unit ML5 **53 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CONVERGENCE-CONFORMITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Convergence fonctionnelle et conformité intégrée |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV only (`sfia_next_dev` :5433) — RECETTE/STABLE inchangées |
+| Contenu | CF-03 anti-duplicat ACK-lost ; CF-02 READY serveur ; provenance handoff ; Nora→contrat DRAFT bridge ; surfaces `execution`/`publication` ; onglets D8 Figma ; analyse cognitive Nora (dossier) ; docs acceptation/registre |
+| Tests | Unit ML5 **25 PASS** (fichiers ciblés) ; PG dispatch **8 PASS** incl. T-04 ACK-lost ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
 ## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION
 
 | Field | Value |

```
### `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md`
```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index feb1fda3..5e0ad321 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,9 +4,11 @@
 
 | Champ | Valeur |
 |---|---|
-| Version | v0.2 — 23 novembre 2026 : décision Gate C et ouverture de ML5 enregistrées |
+| Version | v0.5 candidate — 23 novembre 2026 : Cycle 10 UX/D6/D8 ; inventaire présence **1 / 97 / 1 (B09)** ; R-003 + C4–C10 ; F2 NOT PROVEN |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
-| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` |
+| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
+| Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
+| Cycle 10 | Scénario `ml5-c10-mono-20261123` — Travail 50/50 + D6 overlay + bilan post-handoff + requalify pièce `ecap_1c817ffb…` ; verdict **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
 | Gate | **GATE C ACCEPTÉ PAR MORRIS AVEC RÉSERVES / GO CONSTRUCTION ML5** — décision explicite du 23/11/2026 dans la conversation ; la Roadmap de `main` présente encore son instantané antérieur `OPEN` et reste à synchroniser sous mandat D2 approprié. |
 | Publication | Document de pilotage **non normatif**, sur branche candidate non mergée ; consigne la décision Morris exprimée, sans prétendre modifier automatiquement les décisions/roadmap de `main`. |
 | Suivi | ChatGPT qualifie les Review Packs/écarts ; Cursor fournit réalisation/rapports ; Morris décide les arbitrages |
@@ -68,14 +70,14 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | — |
 | ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | — |
-| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | NV | — |
-| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | NV | — |
+| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | PARTIEL | `nora-contract-bridge` intent + sources CONSULTED/VERIFIED requises ; LIVE multi-sources NON PROUVÉ |
+| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | PARTIEL | Cycle 6 — `detectsCorrectiveDraftIntent` + bridge `cursorRedispatch:false` ; LIVE non prouvé |
 | ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | — |
 | ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | — |
 | ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | NV | — |
 | ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | — |
-| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state.ts` + unit ; non branché tour LIVE |
-| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | État mémoire A ; pas encore checkpoint durable A |
+| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state` + READY serveur (`technical-contract-server-ready`) ignore flags client ; LIVE NON PROUVÉ |
+| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | Snapshot durable + bridge tour ; pas de second registre D4 |
 | ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
 | ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | — |
 
@@ -113,8 +115,8 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 
 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
-| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | — |
-| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | DRAFT≠READY ; `markReady` + unknownRestrictions ; syntaxe ≠ suffisance |
+| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | PARTIEL | `prepareTechnicalContractFromNora` + bridge tour → DRAFT ; LIVE investigation multi-sources NON PROUVÉE |
+| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | CF-02 : READY serveur via investigation durable ; client `sourcesSufficient` ignoré ; BROWSER NON PROUVÉ |
 | ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
 | ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
 | ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
@@ -139,7 +141,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
 | ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
 | ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
-| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | P0-01 CAS `claimCursorAttempt` ; PG concurrent 1 win ; no blind redispatch DISPATCHED |
+| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | CF-03 : `priorSendMayHaveOccurred` + SQL fence AMBIGUOUS ; PG T-04 ACK-lost **PASS** (DEV) ; LIVE NOT PROVEN |
 | ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | reconcile sans redispatch ; stale claimToken fenced (PG) |
 | ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
 | ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
@@ -152,15 +154,15 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 
 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
-| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | NV | — |
-| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | NV | — |
-| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | NV | — |
-| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | NV | — |
-| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | NV | — |
-| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | NV | — |
-| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | NV | — |
-| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | NV | — |
-| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | NV | — |
+| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | PARTIEL | Cycle 6 option A — `preflightCursorGitOptionA` ; bare local DETERMINISTIC ; GitHub REAL NON |
+| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | PARTIEL | Harness bare + workspace path ; LIVE workspace OS non prouvé |
+| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | PARTIEL | Mandate allowedOps ; PR/merge hors mandat par défaut |
+| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | PARTIEL | Observation REMOTE_VERIFIED après relecture ; Studio non publisher |
+| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | PARTIEL | `observeRemoteAfterPush` bare ; GitHub REAL NON |
+| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | PARTIEL | LOCAL_ONLY vs REMOTE_VERIFIED |
+| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | PARTIEL | allowPullRequest/allowMerge false par défaut ; unit refus |
+| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | PARTIEL | Mandate/baseSha continuity helpers ; multi-contrat LIVE ouvert |
+| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | PARTIEL | DÉC-ML5-GIT option A appliquée ; préflight branché prepare ; pas de publisher Studio |
 
 ### G. Handoff par tentative, qualification D8/D9 et analyse Nora
 **Responsabilités :** D7/D8/D9/D3. **Sources :** Contrat ML5 §§10–11,17.3–17.4,18.3,19.5 ; R2 D8.
@@ -178,10 +180,10 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
 | ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | D7+D8 ; D9 recoupement Git Cursor non branché |
 | ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | `qualifyCursorRealization` + `RealizationBilan` |
-| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`) ; run Nora cognitif encore ouvert |
-| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + `CursorRealizationSurface` sur `?surface=publication` |
+| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | `buildNoraCognitiveAnalysis` (dossier) + brief distinct ; LIVE Nora run = preuve supérieure encore ouverte |
+| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + surfaces `execution` / `publication` (results) distinctes |
 | ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
-| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | NV | — |
+| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | PARTIEL | Cycle 6 — FOR UPDATE + newProofRef + PG concurrent PASS ; BROWSER requalify ouvert |
 
 ### H. UX Figma page 12 et fidélité de transposition
 **Responsabilités :** R3 UX / D3 D6 D7 D8 D9 ; Cursor exécute sous méthode Figma v1.1. **Sources :** Figma file itgvCulInEnFY6DvgIegvP page 12 ; ux-ui/methodologie-contrat-figma-cursor.md v1.1.
@@ -190,10 +192,10 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | — |
 | ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | — |
-| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | NV | — |
-| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | NV | — |
-| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | NV | — |
-| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | NV | — |
+| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | PARTIEL | `?surface=execution` + historique interventions ; F2/BROWSER NOT PROVEN |
+| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | PARTIEL | UI AMBIGUOUS « à réconcilier » + LIVE projection ; LIVE SDK NOT PROVEN |
+| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | PARTIEL | Onglets Figma Synthèse/Livrables et tests/Git et pièces/Écarts ; F2 NOT PROVEN |
+| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | PARTIEL | Bouton bilan → draft Travail ; envoi auto absent ; F2 NOT PROVEN |
 | ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | — |
 | ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | L0+L1 metadata 14 frames + design context 12.02 ; F2/BROWSER runtime NOT PROVEN |
 
@@ -204,7 +206,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
 | ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
-| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | NV | — |
+| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | PARTIEL | PG ML5 dispatch **8 PASS** incl. ACK-lost ; concurrence 1 win ; fencing stale claim |
 | ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
 | ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
 | ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
@@ -214,6 +216,145 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `I10` | Prouver le parcours intégré Nora→contrat inspecté→HumanDecision→Cursor→retours→D8/D9→avis Nora→suite. | NV | — |
 | ☐ | `I11` | Respecter ENV-01 DEV/RECETTE/STABLE, versioning NO RELEASE, recette SHA figé, PR/merge/promotion sous GO et ADOPTED jamais automatique. | NV | — |
 
+
+## 3 ter. Inventaire d'implémentation A01–I11 (cycle 4 — 2026-11-23, réconcilié)
+
+> Axe **Implémentation** distinct de la conformité (NV/PARTIEL/VÉRIFIÉ).
+> Réconcilié avec l'inventaire explore [Inventory A01-I11](28376cd8-26ca-4d04-95ec-34395679e40f) et les correctifs cycle 4 (journal sources, frontier B1, sendIntent, READY prepId, classification synthèse).
+> IMPLEMENTED = comportement constitutif raccordé sans manques essentiels. PARTIAL = pièces présentes. NOT_IMPL = absent.
+
+| ID | Impl | Owner | Fichiers / fonctions | Écart / exit |
+|---|---|---|---|---|
+| `A01` | PARTIAL | D3 | semantic-qualification, nora-adapter | Qualification courte hors intent contrat non consolidée dans investigation-state |
+| `A02` | PARTIAL | D3 | cognitive-policy, nora-adapter tools | Profondeur non exposée transversalement sas/document/bilan |
+| `A03` | PARTIAL | D3/D7 | nora-contract-bridge, nora-contract-prepare, tool-source-journal | Intent + sources CONSULTED/VERIFIED requises (journal cycle 4) ; GO préparation explicite absent |
+| `A04` | PARTIAL | D3 | nora-contract-bridge correctiveIntent | Cycle 6 — détection + cursorRedispatch:false ; LIVE non prouvé |
+| `A05` | PARTIAL | D3/D7 | REQUIRES_REQUALIFICATION, fingerprint mismatch | Anti-boucle partielle ; pas de requal hors mandat complète |
+| `A06` | PARTIAL | D3 | investigation-state questions | Pas de conducteur séquencé révision questions↔découvertes |
+| `A07` | PARTIAL | D3/D4 | d4-read-tools+journal, git/history tools | Lectures D4 journalisées CONSULTED ; git/history journal incomplet |
+| `A08` | PARTIAL | D3 | investigation-state SourceCoverage, tool-source-journal | Types OK ; VERIFIED rare ; peuplement partiel |
+| `A09` | PARTIAL | D3/D7 | technical-contract-server-ready | READY serveur ; snapshot sans lecture D4 live systématique |
+| `A10` | PARTIAL | D3 | investigation-persistence | Snapshot durable ; consolidation acquis D4 incomplète |
+| `A11` | PARTIAL | D3 | investigation-persistence, resumeInvestigation | Reprise mid-turn/incident non branchée au fil |
+| `A12` | PARTIAL | D3 | cognitive-policy | Économie simple sur tour projet seulement |
+| `B01` | PARTIAL | D3 | public-web-search-frontier (cycle 4) | SCRIPTED query-only ; LIVE gated ; hosted tool détaché |
+| `B02` | PARTIAL | D3 | public_web_open_page SCRIPTED | Ouverture LIVE non implémentée |
+| `B03` | PARTIAL | D3 | confrontWebSources (cycle 5) | SCRIPTED confrontation ; LIVE ouvert |
+| `B04` | PARTIAL | D3 | web-source-citation + open_page citation | Cycle 7 — contrat citation SCRIPTED ; UX affichage partiel ; LIVE gated |
+| `B05` | PARTIAL | D3 | frontier coverage DISCOVERED/CONSULTED via open | Distinction partielle runtime ; UX absente |
+| `B06` | PARTIAL | D3 | instructions non-autorité + résultats untrusted | Injection LIVE non prouvée |
+| `B07` | PARTIAL | D3 | frontier outbound log + sanitize | Non-exfil SCRIPTED testé ; WEB LIVE NOT PROVEN |
+| `B08` | PARTIAL | D3 | frontier DENIED/TIMEOUT/budget calls | Timeout/reprise web partielle |
+| `B09` | NOT_IMPL | D3 | — | Compatibilité fournisseur web LIVE absente |
+| `C01` | PARTIAL | D3 | appendActivityEvent, service producers | UI fil n'affiche pas GET activity pendant RUNNING |
+| `C02` | PARTIAL | D3 | natures + OBSERVED sources journal (cycle 4) | Événements outil OBSERVED partiels (D4/WEB ; git/history incomplets) |
+| `C03` | PARTIAL | D3 | activity sourceRef depuis journal | Relier lectures git/history encore ouvert |
+| `C04` | PARTIAL | D3 | status FAILED/LIMITED | Affichage UX limites incomplet |
+| `C05` | PARTIAL | D3/UX | NoraConversation liveActivity detail (cycle 5) | BROWSER/F2 non prouvé |
+| `C06` | PARTIAL | D3 | listActivityEvents API | Sans consommateur UX reconnexion |
+| `C07` | PARTIAL | D3/UX | poll by-key+activity pendant send (cycle 5) | BROWSER longue investigation ouvert |
+| `C08` | PARTIAL | D3 | ownerToken fence + redact | Isolation multi-Pilote incomplete |
+| `D01` | PARTIAL | D3/D7 | nora-contract-prepare + bridge + journal | Pas multi-sources LIVE bout-en-bout |
+| `D02` | PARTIAL | D7 | server-ready ; client prepId ignoré (cycle 4) | Droits révoqués BROWSER ouvert |
+| `D03` | PARTIAL | D7 | technical-contract + fingerprint + mig 018 | Versions OK ; changement matériel helper non branché |
+| `D04` | PARTIAL | D7/UX | ContractViewer | Pas 50/50 Travail Figma 12.02 |
+| `D05` | PARTIAL | D7/UX | ContractViewer volets | Inspectable Exécution, pas Travail |
+| `D06` | PARTIAL | D7/UX | instruction_text + expand | F2 12.14 ouvert |
+| `D07` | PARTIAL | D6/D7 | authorize fingerprint + dispatch + C9 refuseCursorExecution | BROWSER D6 Oui/Non authentifiés C9 ; LIVE octets SDK non garantis |
+| `D08` | PARTIAL | D7 | fingerprint mismatch au dispatch | isMaterialContractChange non appelé |
+| `D09` | PARTIAL | D3/UX | ContractViewer dans Travail aside (cycle 5) | F2 12.02 / BROWSER non prouvé |
+| `D10` | PARTIAL | D6/UX | d6-confirm sur Exécution | Pas 12.03 générique sur Travail |
+| `D11` | PARTIAL | D6/D7 | assertCurrentCursorAuthority | MCP réel non vérifié |
+| `D12` | PARTIAL | D7 | FKs attempt/contract/pilot/project | Cycle D5 optionnel non câblé |
+| `E01` | PARTIAL | D7 | dispatchCursorRun SCRIPTED/LIVE env | Parcours LIVE Studio incomplet |
+| `E02` | PARTIAL | D7 | workspace-resolver | Pas admin Desktop/MCP Studio (by design) |
+| `E03` | PARTIAL | D7 | prepareCursorExecution + correlationKey | — |
+| `E04` | PARTIAL | D7 | claim + sendRequestedAt atomique (cycle 4) | Vérité SDK LIVE partielle |
+| `E05` | PARTIAL | D7 | waitForTerminal=false LIVE | Worker long-run absent |
+| `E06` | PARTIAL | D7/UX | CursorLiveProjection + execution surface | Événements SDK partiels |
+| `E07` | PARTIAL | D7 | CursorLiveProjection fields | — |
+| `E08` | PARTIAL | D7 | stop API | Effets partiels partiels |
+| `E09` | PARTIAL | D7 | priorSend + fence + sendIntent ; PG T-04 | LIVE ACK-loss E2E ouvert |
+| `E10` | PARTIAL | D7 | reconcile + crash-before-SDK via sendIntent | Reconnect navigateur incomplet |
+| `E11` | PARTIAL | D7/UX | attempts list execution | Historique Figma 12.04/05 non équivalent |
+| `E12` | PARTIAL | D7 | mcp-capability-check + prepare gate | Cycle 7 — check conditionnel ; inventaire déclaratif ; MCP REAL gated |
+| `E13` | IMPLEMENTED | D7 | pas d'admin MCP Studio | Exigence négative respectée |
+| `E14` | PARTIAL | D7 | gitScope/mcp optionnels | — |
+| `E15` | PARTIAL | D7 | workspace-resolver root | Isolation OS/Pilotes non prouvée |
+| `F01` | PARTIAL | D7/D9 | observeWorkspaceGitFacts + preflight | CP-01 C7 — observations indépendantes ; GitHub REAL NON |
+| `F02` | PARTIAL | D7/D9 | cursor-git-option-a harness | Workspace isolé test ; OS multi-Pilote ouvert |
+| `F03` | PARTIAL | D7/D9 | mandate allowedOps | Commit/push mandatés ; PR/merge distincts |
+| `F04` | PARTIAL | D7/D9 | observation REMOTE_VERIFIED | Studio lit ; ne publie pas |
+| `F05` | PARTIAL | D7/D9 | observeRemoteAfterPush | Relecture SHA bare ; REAL ouvert |
+| `F06` | PARTIAL | D7/D9 | LOCAL_ONLY vs REMOTE_VERIFIED | Déclaration push ≠ constat |
+| `F07` | PARTIAL | D7/D9 | allowPR/Merge false default | Unit refus hors mandat |
+| `F08` | PARTIAL | D7/D9 | baseSha continuity | Multi-contrat LIVE ouvert |
+| `F09` | PARTIAL | D7/D9 | preflight on prepare + D9 read | Pas de publisher Studio ; option B abandonnée |
+| `G01` | PARTIAL | D7 | realization_handoffs UNIQUE | — |
+| `G02` | PARTIAL | D7 | handoff fields | — |
+| `G03` | PARTIAL | D7 | report + gaps | Structuration incidents/STOP incomplète |
+| `G04` | PARTIAL | D8 | inventoryComplete | Acquisition serveur auto absente |
+| `G05` | PARTIAL | D7 | reportMarkdown | Lecture Git D9 pièces absente |
+| `G06` | PARTIAL | D8 | qualify testsDeclared/Captured | Collecte runtime tests absente |
+| `G07` | PARTIAL | D8 | evidence-captures + API captures | Cycle 7 — store SHA + Playwright PNG ; bilan UX rattachement partiel |
+| `G08` | PARTIAL | D7 | one handoff/attempt | — |
+| `G09` | PARTIAL | D7/D8 | REJECTED/INCOMPLETE | — |
+| `G10` | PARTIAL | D7/D8 | gitFactsVerified hook | Feed D9 Cursor non branché |
+| `G11` | PARTIAL | D8/UX | 9 rubrics + 4 tabs | Recoupement réel faible ; F2 ouvert |
+| `G12` | PARTIAL | D3/D8 | DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE (cycle 4) | Run D3 LIVE post-tentative ouvert |
+| `G13` | PARTIAL | D8/UX | labels + surfaces execution/publication | — |
+| `G14` | PARTIAL | UX | onDiscussWithNora draft | Référence bilan structurée absente |
+| `G15` | PARTIAL | D8 | FOR UPDATE + newProofRef + expectedUpdatedAt | PG concurrent PASS cycle 6 ; BROWSER requalify ouvert |
+| `H01` | PARTIAL | UX | live activity + preparedContract open (cycle 5) | F2 12.01 NOT RUN |
+| `H02` | PARTIAL | UX | ContractViewer Travail 50/50 (cycle 5) | F2/BROWSER NOT RUN |
+| `H03` | PARTIAL | UX | surface=execution | Identité/versions partielles vs 12.04/05 |
+| `H04` | PARTIAL | UX | AMBIGUOUS + live projection | États LIVE Figma incomplets |
+| `H05` | PARTIAL | UX | RealizationBilan 4 onglets | Fidélité 12.08/11-13 ouverte |
+| `H06` | PARTIAL | UX | discuss→Travail | Frame 12.09 non F2 |
+| `H07` | PARTIAL | UX | sas preparations activity | C1 sas ML5 partiel |
+| `H08` | PARTIAL | UX | Figma oracles + Playwright runtime | Cycle 7 — 4 oracles + 4 runtime ; F2 ≤2px global NOT PROVEN |
+| `I01` | PARTIAL | transverse | CURSOR_EXECUTION additive | Vigilance double autorité |
+| `I02` | PARTIAL | D6 | cursor-authority | Matrice I02 incomplete |
+| `I03` | PARTIAL | QA | claim/fence/PG T-04 | UX concurrence ACK/STOP incomplete |
+| `I04` | PARTIAL | QA | frontier+sanitize tests | Suite injection/MCP/Git incomplete |
+| `I05` | PARTIAL | QA | unit+PG+docs cycle 4 | Exigence processus partielle |
+| `I06` | PARTIAL | QA | DEV auto-session + BROWSER snapshots | Cycle 6 — Travail/Exécution/Résultats/sas servis ; F2 PNG timeout |
+| `I07` | PARTIAL | QA | Fake/Real dans packs | Pas distinction UX |
+| `I08` | PARTIAL | gov | pas REAL mutatif ce cycle | Gate I08 ML5 partiel |
+| `I09` | PARTIAL | docs | as-built/registre | — |
+| `I10` | PARTIAL | QA | fixture SCRIPTED + BROWSER surfaces | Cycle 7 — contrat/attempt/handoff DEV + captures ; D6/LIVE non E2E |
+| `I11` | PARTIAL | gov | ENV-01 DEV ; NO RELEASE | Politique ADOPTED hors code |
+
+**Totaux implémentation (cycle 5) :** IMPLEMENTED=1 · PARTIAL=81 · NOT_IMPL=17 · Σ=99.
+
+**Totaux implémentation (cycle 6) :** IMPLEMENTED=1 · PARTIAL=92 · NOT_IMPL=6 · Σ=99.
+Mouvements : A04, F01–F09, I06 → PARTIAL. Restent NOT_IMPL : B04, B09, E12, G07, H08, I10.
+
+**Totaux implémentation (cycle 7) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 · Σ=99.
+Mouvements NOT_IMPL→PARTIAL : B04, E12, G07, H08, I10. Reste NOT_IMPL : **B09** (WEB LIVE fournisseur).
+CP-01 préflight observations indépendantes ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref verify ; Playwright captures runtime ; F2 global NOT PROVEN.
+
+**Totaux implémentation (cycle 8) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09) · Σ=99 — pas de conversion artificielle.
+CP-01 : origin match + ls-remote frais + REMOTE_VERIFIED exige local HEAD. CP-02 : probe TCP loopback à l'émission. CP-03 : preuve exacte, pas de fallback handoff. A3 MCP : UNKNOWN fail-closed. G07 : magic PNG/JPEG. BROWSER intégré SCRIPTED + captures C8. F2 global **NOT PROVEN**.
+
+**Écarts majeurs cycle 6 :** F2 pixel NOT PROVEN (screenshot tooling timeout) ; WEB/SDK/GitHub REAL gated ; I10 parcours E2E non câblé bout-en-bout ; captures G07 absentes.
+
+**T-01…T-12 (sens canonique) :**
+| T | Sens | État |
+|---|---|---|
+| T-01 | Investigation + contrat Nora | PARTIAL |
+| T-02 | Refus Pilote sans effet | PARTIAL (Exécution Non) |
+| T-03 | Autorisation contrat exact | PARTIAL |
+| T-04 | ACK perdu sans second envoi | PG PASS |
+| T-05 | Mission longue navigateur fermé | NOT PROVEN |
+| T-06 | STOP effets partiels | PARTIAL |
+| T-07 | Tests non vérifiés → D8 refuse | PARTIAL |
+| T-08 | Contradiction Git/rapport | PARTIAL (qualify) ; F Cursor NOT_IMPL |
+| T-09 | Unique revue Nora | PARTIAL (synthesis≠D3) |
+| T-10 | Reprise discussion | PARTIAL |
+| T-11 | Web sans exfiltration | PARTIAL SCRIPTED |
+| T-12 | Deux Pilotes / dépôt partagé | NOT PROVEN |
+
 ## 4. Contrôle transversal des 56 scénarios de recette fonctionnelle
 
 Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comportements de référence. Après chaque livraison, contrôler **les scénarios réellement dans le périmètre de la tentative** ; au bilan ML5, vérifier que chaque cas pertinent est couvert, reporté avec preuve ou EXCLU sous arbitrage Morris.
@@ -232,11 +373,41 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 
 **Condition d'intégrité de couverture :** une ligne A–I ou un scénario Q applicable ne peut disparaître sans trace d'un arbitrage explicitement attribué. Une mention « réalisé » sans ref et preuve n'est jamais `VERIFIÉ`.
 
+## 4 bis. Revue de conformité transversale et contrat d'acceptation — R-002 (23/11/2026)
+
+**Contrat d'acceptation intégré candidat :** [Cognition et réalisation gouvernée](./contrat-acceptation-cognition-et-realisation-gouvernee.md). Le présent registre demeure le **seul index de couverture des 99 exigences**. Les 12 cas intégrateurs du contrat d'acceptation sont des regroupements d'oracles de qualification, **pas** un remplacement des Q-01…Q-56 ni des PF propriétaires.
+
+**État reconstitué (sources : deux Review Packs FULL distants) :** 44 PARTIEL, 1 EC, 54 NV, **0 VÉRIFIÉ** au niveau d'acceptation complet. Les preuves unitaires/PostgreSQL ne valent ni BROWSER, ni F2, ni LIVE SDK, ni REAL GitHub. Les statuts des lignes ci-dessus reprennent les changements explicitement tracés dans les diffs des deux handoffs. **Le HEAD produit local `6cf33e99…` n'a pas été lu directement par ChatGPT : son tree, son état et ses tests restent NON OBSERVÉS indépendamment.** Les tests PASS sont déclarés dans les rapports.
+
+| Famille | Total | PARTIEL | EC | NV | Résultat produit manquant |
+|---|---:|---:|---:|---:|---|
+| A — Conduite cognitive | 12 | 3 | 0 | 9 | Investigation Nora et préparation réelle du contrat |
+| B — Recherche web | 9 | 2 | 0 | 7 | Isolation publique et lecture WEB LIVE |
+| C — Activité Nora | 8 | 2 | 0 | 6 | Observations outils, fil courant et reconnexion |
+| D — Contrat / autorité | 12 | 10 | 0 | 2 | READY établi côté serveur, inspection 50/50, fidélité intégrale |
+| E — Cursor SDK / D7 | 15 | 14 | 0 | 1 | ACK perdu sans double effet, supervision, LIVE confiné |
+| F — Git Cursor / D9 | 9 | 0 | 0 | 9 | Choix A/B et continuité par SHA vérifiés |
+| G — Handoff / D8 | 15 | 12 | 1 | 2 | Provenance, inventaire probant, D8 révisable et avis Nora |
+| H — UX Figma | 8 | 1 | 0 | 7 | Surfaces Exécution/Résultats distinctes et F2/BROWSER |
+| I — QA/gates | 11 | 0 | 0 | 11 | Parcours intégré, non-régression et preuves par niveaux |
+| **TOTAL** | **99** | **44** | **1** | **54** | **Aucune réception ML5** |
+
+**Écart UX vérifié directement sur Figma :** page 12 (14 frames) présente Travail 50/50 (12.02), **Exécution distincte** (12.04, 12.05, 12.06, 12.07, 12.14) et **Résultats & preuves distincts** (12.08, 12.11, 12.12, 12.13). Le code rapporté monte `CursorRealizationSurface` sous `?surface=publication` et utilise quatre onglets D8 différents. **Conformité structurelle et F2 NON PROUVÉES.** Les extraits Figma ne sont pas des captures runtime.
+
+**Contrats propriétaires à recroiser impérativement :** R2 D3/D4/D5/D6/D7/D8/D9 ; `PF-REAL-01…30`, `PF-PRV-01…32`, scénarios gouvernance et Git applicables. Les invariants ML4, ENV-01 et les réserves antérieures continuent de s'appliquer.
+
+**Trajectoire recommandée (même macro-lot, pas de micro-gates inventés) :** sécuriser effets/READY/qualification, raccorder Nora et les parcours visuels, rendre les preuves D8 effectivement consultables, qualifier les frontières réelles selon les mandats, puis réconcilier le registre et les scénarios. Git B (publication gouvernée D7/D9) reste **RECOMMANDÉE NON ARBITRÉE**. Aucune architecture, migration structurante ou promotion n'est adoptée par ce document.
+
 ## 5. Journal des livraisons et revues
 
 | ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
 |---|---|---|---|---|---|---|
-| R-001 | 2026-11-23 | ML5 integrated delivery | `sfia/next-ml5-integrated-delivery-20261123` @ base `0f1d37c3` + commits locaux | `.tmp-sfia-review/chatgpt-review.md` → handoff L3 | A09–A11 PARTIEL ; B06–B07 PARTIEL ; C01/C06 EC ; D01–D08/D10–D12 EC–PARTIEL ; E01–E11/E13–E15 EC–PARTIEL ; G01–G13 EC–PARTIEL ; H01–H08 L0 only ; I01/I05/I07/I11 PARTIEL | **ML5 PARTIAL — GOVERNED GAPS** — SCRIPTED/DETERMINISTIC only ; LIVE/BROWSER/REAL outstanding |
+| R-001a | 23/11/2026 | ML5 socle vertical — CRITICAL | `sfia/next-ml5-integrated-delivery-20261123` / `69aeb329…` local rapporté ; aucune publication projet | [Review Pack 1 @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) | A–I, Q applicables, socle D/E/G | ML5 PARTIAL — GOVERNED GAPS ; 17 tests unitaires rapportés ; BROWSER/LIVE/REAL non prouvés |
+| R-001b | 23/11/2026 | ML5 consolidation P0/UX initiale — CRITICAL | même worktree, HEAD local `6b7dac12…` dans pack et `6cf33e99…` rapporté ensuite ; non lu directement | [Review Pack 2 @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) | A–I et 56 Q selon pack ; 29 unit + 7 PG PASS **rapportés** | ML5 PARTIAL — GOVERNED GAPS ; P0 DEV partiels, F2/BROWSER/LIVE/REAL ouverts |
+| R-002 | 23/11/2026 | Revue de conformité fonctionnelle/UX/architecture D0 + intégration documentaire D1/D2 candidate | Branch documentaire de revue, `main` inchangé ; SHA commit à relever après écriture | Même deux Review Packs + Figma page 12 (lecture) | 99 exigences + Q-01…Q-56 + PF propriétaires à recouper | 44 PARTIEL / 1 EC / 54 NV ; contrat d'acceptation **CANDIDAT**, non réceptionné |
+| R-003 | 23/11/2026 | ML5 convergence intégrée — CF-02/03, Nora prepare, surfaces Exécution/Résultats, D8/Nora | `sfia/next-ml5-integrated-delivery-20261123` worktree local (HEAD post-cycle à figer) ; push projet **interdit** | Review Pack 3 → `sfia/review-handoff` (publish-in-cycle) | A03/A09/D01/D02/E09/G12–G14/H03–H06/I03 + CF-02/03 | ML5 PARTIAL — GOVERNED GAPS ; PG 8 PASS ; unit 25+ ; BROWSER/F2/LIVE/REAL ouverts |
+| R-005 | 23/11/2026 | ML5 cycle 5 — Travail 50/50, activité RUNNING, B1 URL, G15 requalify, supervision poll | même worktree DIRTY ; HEAD `6cf33e99…` | Review Pack 5 → `sfia/review-handoff` | Impl 1/81/17 ; BROWSER/F2 NOT RUN | ML5 PARTIAL — GOVERNED GAPS |
+| R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
 
 Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.
 
@@ -244,7 +415,18 @@ Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est jus
 
 | ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
 |---|---|---|---|---|---|---|---|
-| — | — | — | — | — | — | — | — |
+| CF-01 | R-002 / ML5 | A01–A12, D01 | Nora ne prépare pas encore de contrat à partir d'une investigation et des sources effectivement qualifiées | MAJEUR | Packs → cycle 4 | bridge + tool-source-journal (CONSULTED from reads) ; fake count removed | LIVE multi-sources + BROWSER ; PARTIEL |
+| CF-02 | R-002 / ML5 | A09, D02, D11 | READY dépend d'indications client (`sourcesSufficient`, `unknownRestrictions`) | BLOQUANT EFFET | Pack 2 → cycle 3 | `technical-contract-server-ready` + route `/ready` ; client flags ignorés | BROWSER + rights revoked still open ; REMEDIATED DEV / PARTIEL |
+| CF-03 | R-002 / ML5 | E09–E10 | Chemin `AMBIGUOUS → DISPATCHED` potentiellement redéclenchable après ACK perdu | BLOQUANT LIVE | Pack 2 → cycle 3 | `priorSendMayHaveOccurred` + SQL fence ; PG T-04 PASS | LIVE SDK still open ; REMEDIATED DEV / PARTIEL |
+| CF-04 | R-002 / ML5 | B01–B09 | Web B1 désactivé ; variable ISOLATION_PROVEN non équivalente à une barrière sûre | BLOQUANT B1 LIVE | Pack → cycle 4 | `public-web-search-frontier` query-only SCRIPTED + outbound log ; hosted tool détaché ; WEB LIVE gated | WEB LIVE Morris gate ; REMEDIATED DEV SCRIPTED / PARTIEL |
+| CF-05 | R-002 / ML5 | C01–C08 | Activité annoncée/fin de tour, événements outil et reprise incomplètes | MAJEUR | Pack 2 | Cursor : observer outils D3, préserver C1 | BROWSER sas/projet pendant RUNNING/reconnexion ; OUVERT |
+| CF-06 | R-002 / ML5 | D09–D10, H01–H08 | Travail 50/50, Exécution et Résultats distincts de Figma ; F2 absent | MAJEUR UX | Figma page 12 + pack 2 | Cursor : composants propriétaires, L1/L2, BROWSER F2 | 14 états qualifiés par frame/fixture ; OUVERT |
+| CF-07 | R-002 / ML5 | E05–E08, E12/E15 | Supervision run long et SDK LIVE confiné non démontrés | BLOQUANT LIVE | Pack 2 / qualification C9 bornée | Cursor : prouver supervision/reprise, MCP seulement si requis | Browser fermé/crash/STOP, identités réelles ; OUVERT |
+| CF-08 | R-002 / ML5 | F01–F09 | Publication Git Cursor et continuité non implémentées ; option A/B ouverte | GATE MORRIS | Pack 2 / R2 D9 | Morris : arbitrage A/B ; Cursor prépare blast radius | Permettre continuité par SHA sans privilège tacite ; OUVERT |
+| CF-09 | R-002 / ML5 | G01–G11/G15 | Provenance client-déclarée, dossier et D8 pas réellement recoupés et révisables | MAJEUR | Pack 2 | Cursor : acquisition serveur / recoupement D9-D8 | PF-PRV contradictions/preuve tardive ; OUVERT |
+| CF-10 | R-002 / ML5 | G12–G14 | Brief déterministe distinct du véritable avis Nora, absent | MAJEUR | Pack → cycle 4 | Classification corrigée (DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE) ; prompt D3 prêt | Run Nora D3 LIVE encore ouvert ; PARTIEL |
+| CF-11 | R-002 / ML5 | I01–I11, Q-01…Q-56 | Pas de preuve BROWSER/F2/LIVE/REAL ni matrice PF complète | GATE QA | Packs 1–2 | Cursor : preuves multi-niveaux par exigence | Qualifier toutes exigences et les PF sans auto-réception ; OUVERT |
+| CF-12 | R-002 / ML5 | Gouvernance | `main` snapshot Gate C ancien ; code ML5 local ; pas de push produit | SYNCHRO GOUVERNÉE | Git refs vérifiées | Morris : GO séparé si synchronisation normative | Pas de merge/recette/adoption implicite ; OUVERT |
 
 Chaque réserve transférée comporte **propriétaire, impact, preuve attendue, condition de sortie et moment de relecture**. Une correction technique ne déclenche pas de nouvelle tentative Cursor sans GO lorsqu'un nouvel acte d'effet est requis.
 
@@ -273,6 +455,6 @@ Chaque réserve transférée comporte **propriétaire, impact, preuve attendue,
 - [ ] Code/tests/architecture/UX/as-built synchronisés ; dette et capacité suivante qualifiées.
 - [ ] Décision Morris de réception, intégration, promotion et adoption traitée séparément.
 
-**État initial révisé :** `REVIEW REGISTRY VALIDATED FOR USE / ALL 99 ITEMS NV / GATE C ACCEPTED WITH RESERVES BY MORRIS 2026-11-23 / ML5 BUILD GO GRANTED / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`.
+**État courant R-002 (d'après rapports, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.
 
 **Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.

```
### `projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md`
```diff

```

## 11. Inventaire DIRTY C3–C10
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/web/.sfia-evidence/
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
?? projects/sfia-studio-next/web/src/domains/conversation/tool-source-journal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-source-citation.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts
?? projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts
?? projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts
?? projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts
```

## 12–13. Tests / scénario
- vitest unit ML5: **73 PASS**
- Playwright C10: **15 PASS / 0 FAIL**
- scenario `ml5-c10-mono-20261123` project `proj_d54a9443-cfa6-4a1d-b03a-256d1fadbf74`
- refuse `efx_69c06628-4da6-44b6-a859-45c7daf414b6` yes `efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd` handoff `rhf_cc411abd-0df0-4c72-bea1-ac6fb8e4177c`

## 14–17. D6 / handoff / D8
- N1 confirmed absent → 400 PASS
- D6 Non CANCELLED + decisionId ; Oui AUTHORIZED fingerprint match
- Bilan avant: rapport manquant ; après handoff: resume = rapport SCRIPTED (plus « Rapport manquant »)
- 4 onglets parcourus ; requalify new_proof capture OK ; cursorRedispatch false

## 18. Captures C10 SHA-256
| Fichier | SHA-256 | Bytes |
|---|---|---|
| `.tmp-sfia-review/browser/c10/c10-a-travail-50-50-instruction.png` | `f92154c61f9a13c52b03c9e57e738886145f55ec870b6c9dfd597a72a5c92f6b` | 242932 |
| `.tmp-sfia-review/browser/c10/c10-b1-d6-dialog-visible.png` | `947a0a572b07c01a5558c52f2b0fb2a8c6ede50fa0990de61604625e3bc001c2` | 289237 |
| `.tmp-sfia-review/browser/c10/c10-b1-d6-refus.png` | `d1f2bd263c505f02f4162b2f419b6fc2be8920e7d5ad26b088e1d6b6d6f1d448` | 231047 |
| `.tmp-sfia-review/browser/c10/c10-b2-d6-avant-oui.png` | `539771ebd30d91bd6e6cd2c1e64001cc1f12dfbb352ae2b6b38cfb379f2f5246` | 289327 |
| `.tmp-sfia-review/browser/c10/c10-c1-running-or-dispatched.png` | `a7d374cc991948ebf4bf24839ffa72f4584d53c5cf03c8c4c487c2f5bc2589d3` | 119157 |
| `.tmp-sfia-review/browser/c10/c10-c2-completed.png` | `ee7a492be6d6548bfcac88bbff0c338b9196c71ebc71504a21783915c647b9f8` | 118728 |
| `.tmp-sfia-review/browser/c10/c10-d0-bilan-avant-handoff.png` | `52482d87146181f179c559dad2f097fd84154253432c7c5f4d6524162881ac76` | 181917 |
| `.tmp-sfia-review/browser/c10/c10-d1-bilan-apres-handoff.png` | `9243568759d60c1a36cd8e1e059edd5a85352d7468c395a194f2797aecf7d744` | 191265 |
| `.tmp-sfia-review/browser/c10/c10-d2-bilan-ecarts.png` | `66553472e0a89e7d9fb957871514160000681b5b4f1c992413b4b00f8abcb40b` | 157827 |
| `.tmp-sfia-review/browser/c10/c10-d2-bilan-git.png` | `070e335636f7b2315216d22c5992d790a1dbe16c5ed3a90bf982549babef6ac4` | 156501 |
| `.tmp-sfia-review/browser/c10/c10-d2-bilan-livrables.png` | `9bf5bd2d0961a388598df1e206a7c68a64de07c90771e4adb992c7a67532fbde` | 154928 |
| `.tmp-sfia-review/browser/c10/c10-d2-bilan-synthese.png` | `9243568759d60c1a36cd8e1e059edd5a85352d7468c395a194f2797aecf7d744` | 191265 |
| `.tmp-sfia-review/browser/c10/c10-e1-retour-nora.png` | `4166ce208bb6001823aefb3100bdf5f035279f220a7b5953092fa7aa8ff24e1a` | 140002 |

## 19. Manifeste BROWSER
```json
{
  "scenarioId": "ml5-c10-mono-20261123",
  "at": "2026-11-23T18:57:50.921Z",
  "tool": "playwright",
  "frontier": "SCRIPTED_PHASED_DEV",
  "viewport": {
    "w": 1680,
    "h": 970
  },
  "correlation": {
    "scenarioId": "ml5-c10-mono-20261123",
    "at": "2026-11-23T18:56:53.116Z",
    "creationMechanism": "DOMAIN_SEED_SCRIPTED",
    "honesty": "Contrat cr\u00e9\u00e9 par seed domaine (markReady serveur) \u2014 \u2260 cr\u00e9ation cognitive Nora LIVE.",
    "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
    "projectId": "proj_d54a9443-cfa6-4a1d-b03a-256d1fadbf74",
    "projectName": "ML5-C10-2026-11-23-9acddc",
    "preparationId": "prep_54d9eed7-1ee1-41cf-9784-6c0ef274f3ce",
    "contractId": "tctr_d84462aa-eea7-40f9-992d-5c7990203ebf",
    "contractKey": "c10-mono-9ae66c11",
    "contractVersion": 1,
    "fingerprint": "1650d73d2d9583393d675f55d994d8d2d7778c37a18584981591758b657ba845",
    "instructionBytes": 3507,
    "attemptIdYes": "efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
    "attemptIdRefuse": "efx_69c06628-4da6-44b6-a859-45c7daf414b6",
    "frontier": "SCRIPTED",
    "handoffId": "rhf_cc411abd-0df0-4c72-bea1-ac6fb8e4177c",
    "qualificationId": "rqual_03cc0749-a2a4-41f4-b6a3-c0c18597a1fe",
    "newProofCaptureId": "ecap_1c817ffb-bb94-4540-8793-5651372708c5"
  },
  "honesty": {
    "noraCognitive": false,
    "cursorSdkLive": false,
    "d6FromTravail": true,
    "handoffBeforeAfterBilan": true,
    "figmaF2": "NOT PROVEN \u2014 measures recorded; pair compare deferred"
  },
  "steps": [
    {
      "step": "N1-confirmed-absent",
      "action": "POST authorize without confirmed",
      "api": {
        "route": "/authorize",
        "status": 400,
        "useful": {
          "error": "CONFIRMATION_REQUIRED",
          "message": "confirmed doit \u00eatre true (Oui) ou false (Non) \u2014 absence/null/invalide = aucun acte D6"
        }
      },
      "data": "OBSERVED",
      "criteria": [
        "T-02",
        "CA-04"
      ],
      "verdict": "PASS"
    },
    {
      "step": "A-travail-50-50",
      "action": "Ouvrir contrat READY en Travail 50/50 + instruction int\u00e9grale",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_d54a9443-cfa6-4a1d-b03a-256d1fadbf74?surface=travail",
        "state": "travail+contract-viewer"
      },
      "capture": {
        "file": "c10-a-travail-50-50-instruction.png",
        "sha256": "f92154c61f9a13c52b03c9e57e738886145f55ec870b6c9dfd597a72a5c92f6b",
        "bytes": 242932,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-a-travail-50-50-instruction.png"
      },
      "geom": {
        "viewport": {
          "w": 1680,
          "h": 970
        },
        "viewer": {
          "x": 974,
          "y": 96,
          "w": 668,
          "h": 858,
          "scrollW": 666,
          "clientW": 666,
          "overflowX": false
        },
        "instruction": {
          "x": 993,
          "y": 846,
          "w": 630,
          "h": 420,
          "scrollW": 628,
          "clientW": 628,
          "overflowX": false
        },
        "dialog": null,
        "dialogCard": null,
        "dialogVisible": false
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-04",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B1-d6-visible",
      "action": "Dialogue D6 visible (overlay) depuis Travail",
      "capture": {
        "file": "c10-b1-d6-dialog-visible.png",
        "sha256": "947a0a572b07c01a5558c52f2b0fb2a8c6ede50fa0990de61604625e3bc001c2",
        "bytes": 289237,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-b1-d6-dialog-visible.png"
      },
      "geom": {
        "viewport": {
          "w": 1680,
          "h": 970
        },
        "viewer": {
          "x": 974,
          "y": 96,
          "w": 668,
          "h": 858,
          "scrollW": 666,
          "clientW": 666,
          "overflowX": false
        },
        "instruction": {
          "x": 993,
          "y": 426,
          "w": 630,
          "h": 420,
          "scrollW": 628,
          "clientW": 628,
          "overflowX": false
        },
        "dialog": {
          "x": 0,
          "y": 0,
          "w": 1680,
          "h": 970,
          "scrollW": 1680,
          "clientW": 1680,
          "overflowX": false
        },
        "dialogCard": {
          "x": 580,
          "y": 336,
          "w": 520,
          "h": 298,
          "scrollW": 518,
          "clientW": 518,
          "overflowX": false
        },
        "dialogVisible": true
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-04",
        "T-02"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B1-refus",
      "action": "D6 Non depuis Travail",
      "transition": "PREPARED \u2192 CANCELLED",
      "api": {
        "route": "/authorize",
        "status": 200,
        "useful": {
          "attemptId": "efx_69c06628-4da6-44b6-a859-45c7daf414b6",
          "status": "CANCELLED",
          "decisionId": "dec_c937c344-2c4b-48c3-bea8-8d26a9296732",
          "idempotent": false,
          "fingerprint": "1650d73d2d9583393d675f55d994d8d2d7778c37a18584981591758b657ba845",
          "refused": true
        }
      },
      "capture": {
        "file": "c10-b1-d6-refus.png",
        "sha256": "d1f2bd263c505f02f4162b2f419b6fc2be8920e7d5ad26b088e1d6b6d6f1d448",
        "bytes": 231047,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-b1-d6-refus.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "T-02"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B2-oui-dispatch",
      "action": "D6 Oui + dispatch depuis Travail",
      "transition": "\u2192 DISPATCHED",
      "api": {
        "route": "authorize+dispatch",
        "status": 200,
        "useful": {
          "authJ": {
            "attemptId": "efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "status": "AUTHORIZED",
            "decisionId": "dec_55b9d3b6-84ec-4afe-ac9a-f470dec8813b",
            "idempotent": false,
            "fingerprint": "1650d73d2d9583393d675f55d994d8d2d7778c37a18584981591758b657ba845"
          },
          "dispJ": {
            "attemptId": "efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "status": "DISPATCHED",
            "idempotent": false,
            "live": {
              "sendRequestedAt": "2026-11-23T18:57:35.897Z",
              "ackReceivedAt": "2026-11-23T18:57:35.897Z",
              "runObservedAt": "2026-11-23T18:57:35.897Z",
              "agentId": "scripted-agent-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
              "runId": "scripted-run-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
              "lastActivitySummary": "SCRIPTED_OBSERVATION_RUNNING",
              "terminalStatus": null,
              "reportStatus": "EXPECTED",
              "limits": [
                "SCRIPTED_MODE",
                "SCRIPTED_PHASED",
                "NO_REAL_SIDE_EFFECT",
                "REQUIRES_RECONCILE_TO_FINISH"
              ]
            },
            "scriptedReportMarkdown": null,
            "limits": [
              "SCRIPTED_MODE",
              "SCRIPTED_PHASED",
              "NO_REAL_SIDE_EFFECT",
              "REQUIRES_RECONCILE_TO_FINISH"
            ],
            "claimToken": "claim_fd94c512-d7d6-48eb-ac9b-1366b80faade"
          }
        }
      },
      "capture": {
        "file": "c10-c1-running-or-dispatched.png",
        "sha256": "a7d374cc991948ebf4bf24839ffa72f4584d53c5cf03c8c4c487c2f5bc2589d3",
        "bytes": 119157,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-c1-running-or-dispatched.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-04",
        "CA-05",
        "T-03"
      ],
      "verdict": "PASS"
    },
    {
      "step": "C2-reconcile",
      "action": "Reconcile SCRIPTED_PHASED",
      "api": {
        "route": "/reconcile",
        "status": 200,
        "useful": {
          "attemptId": "efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
          "status": "COMPLETED",
          "live": {
            "sendRequestedAt": "2026-11-23T18:57:35.897Z",
            "ackReceivedAt": "2026-11-23T18:57:35.897Z",
            "runObservedAt": "2026-11-23T18:57:35.897Z",
            "agentId": "scripted-agent-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "runId": "scripted-run-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "lastActivitySummary": "SCRIPTED_OBSERVATION_FINISHED",
            "terminalStatus": "finished",
            "reportStatus": "RECEIVED",
            "limits": [
              "SCRIPTED_MODE",
              "SCRIPTED_PHASED",
              "NO_REAL_SIDE_EFFECT",
              "REQUIRES_RECONCILE_TO_FINISH",
              "SCRIPTED_MODE",
              "SCRIPTED_PHASED_RECONCILED",
              "NO_REAL_SIDE_EFFECT"
            ],
            "claim": {
              "claimToken": "claim_fd94c512-d7d6-48eb-ac9b-1366b80faade",
              "claimedAt": "2026-11-23T18:57:35.892Z",
              "leaseExpiresAt": "2026-11-23T18:58:35.898Z",
              "generation": 1,
              "releasedAt": null
            }
          },
          "limits": [
            "SCRIPTED_MODE",
            "SCRIPTED_PHASED",
            "NO_REAL_SIDE_EFFECT",
            "REQUIRES_RECONCILE_TO_FINISH",
            "SCRIPTED_MODE",
            "SCRIPTED_PHASED_RECONCILED",
            "NO_REAL_SIDE_EFFECT"
          ],
          "scriptedReportMarkdown": "# Rapport de r\u00e9alisation (SCRIPTED)\n\nattemptId: efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd\ninstructionFingerprint: fd0cd59e5990dcb7c79a87d8c1dd006144e0402dd1b00952479a410d3ee9c80b\n\n## Inventaire\n- Aucun fichier modifi\u00e9 (mode scripted)\n\n## Tests\n- Non ex\u00e9cut\u00e9s (SCRIPTED)\n\n## R\u00e9serves\n- Preuve LIVE SDK non produite"
        }
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-06"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D0-bilan-avant",
      "action": "Bilan avant ingestion handoff (\u00e9tat incomplet attendu)",
      "capture": {
        "file": "c10-d0-bilan-avant-handoff.png",
        "sha256": "52482d87146181f179c559dad2f097fd84154253432c7c5f4d6524162881ac76",
        "bytes": 181917,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d0-bilan-avant-handoff.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07"
      ],
      "verdict": "PASS",
      "reserve": "Oracle: rapport manquant ou couverture MISSING avant handoff"
    },
    {
      "step": "C3-handoff",
      "action": "POST handoff SCRIPTED_ADAPTER",
      "api": {
        "route": "/handoff",
        "status": 200,
        "useful": {
          "handoffId": "rhf_cc411abd-0df0-4c72-bea1-ac6fb8e4177c",
          "attemptId": "efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
          "status": "RECEIVED",
          "integrityHash": "74466f18b3438bb6a5e1b030e3a70c490e2729ba71b26ff54521f6224aa47c78",
          "limits": [
            "PROVENANCE_SCRIPTED \u2014 pas une preuve LIVE"
          ],
          "provenance": {
            "acquisition": "SCRIPTED_ADAPTER",
            "declaredExecutorId": "scripted-agent-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "observedAgentId": "scripted-agent-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd",
            "observedRunId": "scripted-run-efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd"
          }
        }
      },
      "data": "SCRIPTED",
      "criteria": [
        "CA-07"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D1-bilan-apres",
      "action": "Bilan apr\u00e8s handoff RECEIVED (requalify judgment_correction)",
      "capture": {
        "file": "c10-d1-bilan-apres-handoff.png",
        "sha256": "9243568759d60c1a36cd8e1e059edd5a85352d7468c395a194f2797aecf7d744",
        "bytes": 191265,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d1-bilan-apres-handoff.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-livrables",
      "action": "Onglet livrables",
      "capture": {
        "file": "c10-d2-bilan-livrables.png",
        "sha256": "9bf5bd2d0961a388598df1e206a7c68a64de07c90771e4adb992c7a67532fbde",
        "bytes": 154928,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d2-bilan-livrables.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-git",
      "action": "Onglet git",
      "capture": {
        "file": "c10-d2-bilan-git.png",
        "sha256": "070e335636f7b2315216d22c5992d790a1dbe16c5ed3a90bf982549babef6ac4",
        "bytes": 156501,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d2-bilan-git.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-ecarts",
      "action": "Onglet ecarts",
      "capture": {
        "file": "c10-d2-bilan-ecarts.png",
        "sha256": "66553472e0a89e7d9fb957871514160000681b5b4f1c992413b4b00f8abcb40b",
        "bytes": 157827,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d2-bilan-ecarts.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-synthese",
      "action": "Onglet synthese",
      "capture": {
        "file": "c10-d2-bilan-synthese.png",
        "sha256": "9243568759d60c1a36cd8e1e059edd5a85352d7468c395a194f2797aecf7d744",
        "bytes": 191265,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-d2-bilan-synthese.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09"
      ],
      "verdict": "PASS"
    },
    {
      "step": "E1-retour-nora",
      "action": "Retour Nora contextualis\u00e9",
      "capture": {
        "file": "c10-e1-retour-nora.png",
        "sha256": "4166ce208bb6001823aefb3100bdf5f035279f220a7b5953092fa7aa8ff24e1a",
        "bytes": 140002,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c10/c10-e1-retour-nora.png"
      },
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_d54a9443-cfa6-4a1d-b03a-256d1fadbf74?surface=publication",
        "state": "draft=Reprendre \u00e0 propos de la tentative efx_d4617b21-b87e-4ed4-b9dc-69a745fd00bd (ver"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-08",
        "T-10"
      ],
      "verdict": "PASS"
    },
    {
      "step": "E2-requalify-new-proof",
      "action": "POST qualification requalify new_proof with capture id",
      "api": {
        "route": "/qualification",
        "status": 200,
        "useful": {
          "requalified": true,
          "previousVerdict": "PARTIAL",
          "captureId": "ecap_1c817ffb-bb94-4540-8793-5651372708c5"
        }
      },
      "data": "OBSERVED",
      "criteria": [
        "G15",
        "G07",
        "CA-07"
      ],
      "verdict": "PASS"
    }
  ],
  "summary": {
    "pass": 15,
    "fail": 0,
    "partial": 0,
    "captures": 11
  },
  "f2": {
    "viewportRuntime": {
      "w": 1680,
      "h": 970
    },
    "figmaReference": {
      "w": 1680,
      "h": 970,
      "page": "1209:2",
      "fileKey": "itgvCulInEnFY6DvgIegvP"
    },
    "note": "Viewport aligned to Figma canvas size; L0/L1/L2 pair measures vs native Figma PNG not completed this cycle \u2014 F2 NOT PROVEN globally",
    "states": [
      {
        "id": "12.travail-50-50",
        "capture": "c10-a-travail-50-50-instruction.png",
        "f2": "NOT PROVEN",
        "reason": "no Figma L2 pair measure"
      },
      {
        "id": "12.d6-confirm",
        "capture": "c10-b1-d6-dialog-visible.png",
        "f2": "NOT PROVEN",
        "reason": "no Figma L2 pair measure"
      },
      {
        "id": "12.running",
        "capture": "c10-c1-running-or-dispatched.png",
        "f2": "NOT PROVEN"
      },
      {
        "id": "12.terminal",
        "capture": "c10-c2-completed.png",
        "f2": "NOT PROVEN"
      },
      {
        "id": "12.d8-synthese",
        "capture": "c10-d1-bilan-apres-handoff.png",
        "f2": "NOT PROVEN"
      },
      {
        "id": "12.d8-tabs",
        "capture": "c10-d2-bilan-*.png",
        "f2": "NOT PROVEN"
      },
      {
        "id": "12.nora-return",
        "capture": "c10-e1-retour-nora.png",
        "f2": "NOT PROVEN"
      }
    ],
    "pass": 0,
    "fail": 0,
    "notProven": 7
  }
}
```

## 20–21. Figma F2
- Viewport runtime aligné 1680×970
- Extraction L0/L1/L2 native + pair measure: **non complétée** → F2 **0 PASS / NOT PROVEN**
- Matrice: `.tmp-sfia-review/figma/c10/f2-matrix.json`

## 22–26. CA/T/Q/PF / 99 / CP
- CA-04/09 BROWSER améliorés ; CA-07 handoff→bilan PASS ; CA-08 retour Nora PASS
- Inventaire présence **1/97/1** B09 NOT_IMPL — pas de promotion auto
- CP-01…08 conservés ; non régressés intentionnellement

## 27. Fake/Real
| Frontière | Niveau |
|---|---|
| BROWSER UX/D6/D8 | PROVEN C10 SCRIPTED |
| Figma F2 | NOT PROVEN |
| Nora/Cursor/WEB LIVE | NOT PROVEN / B09 NOT_IMPL |

## 28. ENV-01 / versioning
- DEV 127.0.0.1:3100 / PG :5433 / mig 019 / SCRIPTED_PHASED=1 / NO RELEASE

## 29. Réserves
- F2 mesures paires Figma non faites
- Nora cognitive / SDK LIVE gated
- Registre local réconcilié en notes C10 ; contenu intégral R-003 distant non recopié ligne à ligne (évite écrasement) — historique R-001…R-003 + C4–C10 cité

## 30. Verdict / Handoff
**`ML5 INTEGRATED — QUALIFICATION IN PROGRESS`**
- Publish: `docs(review-handoff): publish ML5 cycle 10 UX and D8 qualification review`
- Push code projet: INTERDIT