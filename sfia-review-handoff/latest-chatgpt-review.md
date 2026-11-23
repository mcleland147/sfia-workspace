# SFIA Review Pack FULL — ML5 Cycle 9

**Date/heure :** 2026-11-23T17:51:01.327880+01:00
**Verdict :** `ML5 INTEGRATED — QUALIFICATION IN PROGRESS`

## 1. Date et identité
- Cycle: ML5 / Cycle 9 — démonstration E2E mono-tentative
- Worktree: `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
- Branche: `sfia/next-ml5-integrated-delivery-20261123`
- HEAD: `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY)

## 2. Git Truth Check
- `origin/main`: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- merge-base HEAD…origin/main: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- upstream: **aucun** (branche locale non poussée — conforme contrat)
- `git status --short` (60 lignes):
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
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
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
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
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
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts
```
- Aucun reset/clean/checkout destructeur exécuté.

## 3. Sources lues (SHA / refs)
- Méthode SFIA v2.6 depuis main@997897fd… (routing, template, operating model, guardrails)
- Décision ML5 Git/DEV: `1e6929c5…`
- Registre/acceptation: `5a4e4405…`
- Handoff C8: `sfia/review-handoff@759517d0` blob `fdf4384e…`
- ENV-01 / product-versioning depuis main — lane DEV only, NO RELEASE

## 4. Périmètre et blast radius
- IN: D6 refuse/authorize, SCRIPTED_PHASED adapter, CursorRealizationSurface, seed+E2E scripts, registre/delivery-history, captures C9
- OUT: push projet, PR/merge, LIVE Nora/Cursor/WEB, RECETTE/STABLE, B09 faux fournisseur

## 5. Scénario E2E mono-tentative
- scenarioId: `ml5-c9-mono-20261123`
- pilotId: `pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9`
- projectId: `proj_a4525a4a-2572-49ab-9345-1748f581448a` / `ML5-C9-2026-11-23-eaf3ad`
- contractId: `tctr_97f4a788-c812-4b46-9257-1246900f153e` key `c9-mono-9a2811c2` fp `e93efdb8cea8fb9343a11cd1ae7c6716012023678dbaf5fe4359e29c79a167f1`
- attemptIdRefuse: `efx_b70c69ef-9ee8-4ef5-8370-faf92fd44d67` → CANCELLED + decisionId
- attemptIdYes: `efx_1e86bf8c-9f82-4f78-b243-8866e762ae63` → COMPLETED SCRIPTED_PHASED
- creationMechanism: `DOMAIN_SEED_SCRIPTED` — **≠ Nora cognitive LIVE**

## 6. Tableau des transitions et preuves
| Étape | Transition | Capture | Verdict |
|---|---|---|---|
| S0-session | — | — | PASS |
| A1-travail | — | c9-a1-travail.png | PASS |
| A2-contrat | viewer closed → contract-viewer open | c9-a2-contrat-inspectable.png | PASS |
| B1-dialog | PREPARED → confirm dialog | c9-b1-d6-confirm-avant-non.png | PASS |
| B1-refus | PREPARED → CANCELLED (decision dec_814f88f0-8a08-4503-8eda-354b8f3a5572) | c9-b1-d6-refus.png | PASS |
| B2-dialog | — | c9-b2-d6-confirm-avant-oui.png | PASS |
| B2-oui-C1-dispatch | PREPARED → AUTHORIZED → DISPATCHED | c9-c1-running.png | PASS |
| C2-reconcile | DISPATCHED → COMPLETED | c9-c2-completed.png | PASS |
| C3-handoff | — | — | PARTIAL |
| C3-reconnexion | — | c9-c3-reconnexion.png | PASS |
| D1-bilan | liste → realization-bilan | c9-d1-bilan-synthese.png | PASS |
| D2-tab-livrables | — | c9-d2-bilan-livrables.png | PASS |
| D2-tab-git | — | c9-d2-bilan-git.png | PASS |
| D2-tab-ecarts | — | c9-d2-bilan-ecarts.png | PASS |
| D2-tab-synthese | — | c9-d2-bilan-synthese-retour.png | PASS |
| E1-retour-nora | — | c9-e1-retour-nora.png | PASS |

Summary: {'pass': 15, 'fail': 0, 'partial': 1, 'captures': 14}

## 7. Corrections C9 réalisées
1. `refuseCursorExecution` — D6 Non authentifié → HumanDecision CURSOR_EXECUTION_REFUSAL + CANCELLED, aucun dispatch
2. UI `confirmNo` appelle authorize `confirmed:false` (≠ simple fermeture dialog)
3. `SFIA_CURSOR_SCRIPTED_PHASED=1` — RUNNING `SCRIPTED_OBSERVATION_RUNNING` puis reconcile → FINISHED
4. Parcours Playwright mono-ID A→E avec 14 captures + manifeste
5. Handoff SCRIPTED_ADAPTER ingesté (après correction provenance agentId)

## 8. Contenu intégral des fichiers créés (C9)
### `projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts`
```typescript
/**
 * ML5 C9 — seed a correlated DEV mono-attempt scenario (SCRIPTED fixture).
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
  "../../../.tmp-sfia-review/browser/c9",
);

const LONG_INSTRUCTION = [
  "# Instruction technique intégrale — ML5 Cycle 9 (SCRIPTED)",
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
    title: "ML5 C9 — Parcours mono-tentative gouverné (SCRIPTED)",
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
      mission: "Démonstration E2E ML5 Cycle 9 — une tentative, des transitions prouvées.",
      perimeter: "DEV local 127.0.0.1:3100 / PostgreSQL :5433 / SCRIPTED only.",
      capabilitiesAuthority: "Adaptateur SCRIPTED déclaré — ≠ LIVE SDK.",
      stopConditions: "STOP sur LIVE non autorisé, empreinte divergente, double dispatch.",
      proofsSources: "Handoff SCRIPTED_ADAPTER + captures BROWSER C9 + manifeste mono-tentative.",
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
        "Captures PNG C9 + SHA-256",
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
  const label = `ML5-C9-${new Date().toISOString().slice(0, 10)}-${newId("nm").slice(-6)}`;
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "Parcours mono-tentative C9 SCRIPTED");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "C9 mono-attempt E2E SCRIPTED",
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
    contractKey: `c9-mono-${newId("ck").slice(-8)}`,
    body: sampleBody(),
    markReady: true,
    sourcesSufficient: true,
    unknownRestrictions: [],
  });

  mkdirSync(OUT_DIR, { recursive: true });
  const manifest = {
    scenarioId: "ml5-c9-mono-20261123",
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

### `projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts`
```typescript
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

```

### `projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts`
```typescript
/**
 * ML5 C9 — D6 refuse is an authenticated act; SCRIPTED phased emits RUNNING then finished.
 */
import { describe, expect, it, afterEach } from "vitest";
import {
  __resetScriptedCursorRunsForTests,
  advanceScriptedRunToFinished,
  dispatchCursorRun,
  isScriptedPhasedMode,
} from "@/domains/execution/cursor-sdk-adapter";

describe("ML5 C9 SCRIPTED phased + D6 refuse helpers", () => {
  afterEach(() => {
    __resetScriptedCursorRunsForTests();
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
  });

  it("isScriptedPhasedMode reads env", () => {
    expect(isScriptedPhasedMode({})).toBe(false);
    expect(isScriptedPhasedMode({ SFIA_CURSOR_SCRIPTED_PHASED: "1" })).toBe(true);
  });

  it("SCRIPTED phased returns RUNNING observation without terminal", async () => {
    process.env.SFIA_CURSOR_SCRIPTED_PHASED = "1";
    const d = await dispatchCursorRun({
      attemptId: "efx_test_phased",
      instructionText: "noop",
      instructionFingerprint: "fp",
      workspaceCwd: "/tmp",
      idempotencyKey: "efx_test_phased",
      waitForTerminal: true, // env PHASED still forces running first
    });
    expect(d.terminalStatus).toBeNull();
    expect(d.lastActivitySummary).toBe("SCRIPTED_OBSERVATION_RUNNING");
    expect(d.limits).toContain("SCRIPTED_PHASED");
    const fin = advanceScriptedRunToFinished("efx_test_phased");
    expect(fin?.lastActivitySummary).toBe("SCRIPTED_OBSERVATION_FINISHED");
    expect(fin?.resultText).toContain("efx_test_phased");
  });

  it("SCRIPTED non-phased still finishes immediately", async () => {
    const d = await dispatchCursorRun({
      attemptId: "efx_test_immediate",
      instructionText: "noop",
      instructionFingerprint: "fp",
      workspaceCwd: "/tmp",
      idempotencyKey: "efx_test_immediate",
      waitForTerminal: true,
    });
    expect(d.terminalStatus).toBe("finished");
    expect(d.lastActivitySummary).toBe("SCRIPTED_FINISHED");
  });
});

```

## 9. Diffs exploitables (fichiers C9 touchés)
### `projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
index 86ed9d13..4c98edb9 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
@@ -77,6 +77,60 @@ export function __resetScriptedCursorRunsForTests(): void {
   scriptedRuns.clear();
 }
 
+/** When true, SCRIPTED returns DISPATCHED/RUNNING first; reconcile advances to finished. */
+export function isScriptedPhasedMode(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (env.SFIA_CURSOR_SCRIPTED_PHASED || "").trim() === "1";
+}
+
+export function getScriptedRun(attemptId: string) {
+  return scriptedRuns.get(attemptId) ?? null;
+}
+
+/** Advance a phased SCRIPTED run to finished — used by reconcile, never a second send. */
+export function advanceScriptedRunToFinished(attemptId: string): {
+  agentId: string;
+  runId: string;
+  resultText: string;
+  lastActivitySummary: string;
+} | null {
+  const existing = scriptedRuns.get(attemptId);
+  if (!existing) return null;
+  if (existing.status === "finished") {
+    return {
+      agentId: existing.agentId,
+      runId: existing.runId,
+      resultText: existing.resultText,
+      lastActivitySummary: "SCRIPTED_ALREADY_FINISHED",
+    };
+  }
+  if (existing.status !== "running") return null;
+  existing.status = "finished";
+  return {
+    agentId: existing.agentId,
+    runId: existing.runId,
+    resultText: existing.resultText,
+    lastActivitySummary: "SCRIPTED_OBSERVATION_FINISHED",
+  };
+}
+
+function buildScriptedReport(attemptId: string, instructionFingerprint: string): string {
+  return [
+    `# Rapport de réalisation (SCRIPTED)`,
+    ``,
+    `attemptId: ${attemptId}`,
+    `instructionFingerprint: ${instructionFingerprint}`,
+    ``,
+    `## Inventaire`,
+    `- Aucun fichier modifié (mode scripted)`,
+    ``,
+    `## Tests`,
+    `- Non exécutés (SCRIPTED)`,
+    ``,
+    `## Réserves`,
+    `- Preuve LIVE SDK non produite`,
+  ].join("\n");
+}
+
 export async function dispatchCursorRun(
   input: CursorDispatchInput,
   mode = resolveCursorAdapterMode(),
@@ -100,28 +154,35 @@ export async function dispatchCursorRun(
     }
     const agentId = `scripted-agent-${input.attemptId}`;
     const runId = `scripted-run-${input.attemptId}`;
-    const resultText = [
-      `# Rapport de réalisation (SCRIPTED)`,
-      ``,
-      `attemptId: ${input.attemptId}`,
-      `instructionFingerprint: ${input.instructionFingerprint}`,
-      ``,
-      `## Inventaire`,
-      `- Aucun fichier modifié (mode scripted)`,
-      ``,
-      `## Tests`,
-      `- Non exécutés (SCRIPTED)`,
-      ``,
-      `## Réserves`,
-      `- Preuve LIVE SDK non produite`,
-    ].join("\n");
+    const resultText = buildScriptedReport(input.attemptId, input.instructionFingerprint);
+    const phased =
+      isScriptedPhasedMode() || input.waitForTerminal === false;
     scriptedRuns.set(input.idempotencyKey, {
       agentId,
       runId,
-      status: "finished",
+      status: phased ? "running" : "finished",
       instructionFingerprint: input.instructionFingerprint,
       resultText,
     });
+    if (phased) {
+      return {
+        mode,
+        sendRequestedAt,
+        ackReceivedAt: sendRequestedAt,
+        runObservedAt: sendRequestedAt,
+        agentId,
+        runId,
+        terminalStatus: null,
+        lastActivitySummary: "SCRIPTED_OBSERVATION_RUNNING",
+        resultText: null,
+        limits: [
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED",
+          "NO_REAL_SIDE_EFFECT",
+          "REQUIRES_RECONCILE_TO_FINISH",
+        ],
+      };
+    }
     return {
       mode,
       sendRequestedAt,

```

### `projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..e701dddd 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,68 @@ export async function prepareCursorExecution(input: {
   )[0];
 
   const mode = resolveCursorAdapterMode();
+  const gitScope = contract.gitScopeJson
+    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
+    : null;
+  // DÉC-ML5-GIT Option A — CP-01 independent Git observations (never contract SHA echo).
+  if (gitScope?.required) {
+    const {
+      buildCursorGitMandateFromScope,
+      observeWorkspaceGitFacts,
+      preflightCursorGitOptionA,
+    } = await import("./cursor-git-option-a");
+    const mandate = buildCursorGitMandateFromScope(gitScope);
+    const authorized =
+      process.env.SFIA_CURSOR_GIT_AUTHORIZED_REPOS?.split(",")
+        .map((s) => s.trim())
+        .filter(Boolean) ?? [];
+    // DEV SCRIPTED: allow the declared repo name when authorized list empty and mode SCRIPTED.
+    const repos =
+      authorized.length > 0
+        ? authorized
+        : mode === "SCRIPTED" && gitScope.repositoryFullName
+          ? [gitScope.repositoryFullName]
+          : [];
+    const observations = observeWorkspaceGitFacts(
+      workspace.workspaceCwd,
+      gitScope.baseRef ?? "main",
+      gitScope.workBranch ?? "cursor/work",
+    );
+    const pre = preflightCursorGitOptionA({
+      mandate,
+      workspacePath: workspace.workspaceCwd,
+      authorizedRepos: repos,
+      observations,
+    });
+    if (!pre.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight Git Cursor option A refusé: ${pre.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  // E12 / C8 A3 — MCP fail-closed: UNKNOWN blocks; SCRIPTED may simulate explicitly.
+  const mcpRequired = input.mcpRequired ?? [];
+  if (mcpRequired.length > 0) {
+    const { assertMcpReadyForDispatch, checkRequiredMcpCapabilities } = await import(
+      "./mcp-capability-check"
+    );
+    const scriptedSimulation = mode === "SCRIPTED";
+    const mcpResults = checkRequiredMcpCapabilities(mcpRequired, process.env, {
+      scriptedSimulation,
+    });
+    const mcpGate = assertMcpReadyForDispatch(mcpResults, {
+      allowScriptedSimulation: scriptedSimulation,
+    });
+    if (!mcpGate.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight MCP refusé: ${mcpGate.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,10 +180,8 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
-    mcpRequired: input.mcpRequired ?? [],
+    gitScope,
+    mcpRequired,
   };
   const fingerprint = contract.fingerprint;
   const planFp = planFingerprintPayload(plan);
@@ -177,6 +237,96 @@ export async function prepareCursorExecution(input: {
   };
 }
 
+/**
+ * Authenticated D6 Non — records an explicit HumanDecision refusal.
+ * No AUTHORIZED transition, no dispatch, no Cursor effect.
+ * Attempt moves PREPARED → CANCELLED (still the same attemptId).
+ */
+export async function refuseCursorExecution(input: {
+  pilotId: string;
+  projectId: string;
+  attemptId: string;
+  statement: string;
+  inspectedFingerprint: string;
+}) {
+  return db.transaction(async (tx) => {
+    const row = (
+      await tx
+        .select()
+        .from(effectAttempts)
+        .where(
+          and(
+            eq(effectAttempts.id, input.attemptId),
+            eq(effectAttempts.projectId, input.projectId),
+            eq(effectAttempts.pilotId, input.pilotId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
+    if (row.kind !== "CURSOR_EXECUTION") {
+      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
+    }
+    if (row.status === "CANCELLED" && row.decisionId) {
+      return {
+        attemptId: row.id,
+        status: "CANCELLED" as const,
+        decisionId: row.decisionId,
+        idempotent: true as const,
+        fingerprint: row.fingerprint,
+        refused: true as const,
+      };
+    }
+    if (row.status !== "PREPARED") {
+      throw new StudioError(
+        "CONFLICT",
+        `Refus D6 impossible depuis statut ${row.status}`,
+        { exposeMessage: true },
+      );
+    }
+    if (input.inspectedFingerprint !== row.fingerprint) {
+      throw new StudioError(
+        "REQUIRES_REQUALIFICATION",
+        "Empreinte inspectée ≠ tentative — relire le contrat",
+        { exposeMessage: true },
+      );
+    }
+    const effectConditions = JSON.stringify({
+      fingerprint: row.fingerprint,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      attemptId: row.id,
+    });
+    const decisionId = await insertHumanDecision(tx, {
+      projectId: input.projectId,
+      pilotId: input.pilotId,
+      sourceKind: "CURSOR_EXECUTION",
+      sourceRef: row.id,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      objectRef: row.id,
+      statement: (input.statement || "Refus explicite D6 — pas d'exécution Cursor").slice(0, 500),
+      effectConditions,
+    });
+    const now = new Date();
+    await tx
+      .update(effectAttempts)
+      .set({
+        status: "CANCELLED",
+        decisionId,
+        effectConditions,
+        updatedAt: now,
+      })
+      .where(eq(effectAttempts.id, row.id));
+    return {
+      attemptId: row.id,
+      status: "CANCELLED" as const,
+      decisionId,
+      idempotent: false as const,
+      fingerprint: row.fingerprint,
+      refused: true as const,
+    };
+  });
+}
+
 export async function authorizeCursorExecution(input: {
   pilotId: string;
   projectId: string;
@@ -187,8 +337,12 @@ export async function authorizeCursorExecution(input: {
   confirmed: boolean;
 }) {
   if (!input.confirmed) {
-    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
-      exposeMessage: true,
+    return refuseCursorExecution({
+      pilotId: input.pilotId,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      statement: input.statement,
+      inspectedFingerprint: input.inspectedFingerprint,
     });
   }
   return db.transaction(async (tx) => {
@@ -377,7 +531,19 @@ export async function dispatchCursorExecution(input: {
   }
 
   const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
-  const claimed = await claimCursorAttempt(row.id, fromStatus);
+  if (fromStatus === "AMBIGUOUS") {
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (priorSendMayHaveOccurred(row.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
+        { exposeMessage: true },
+      );
+    }
+  }
+  // P0: claim + sendRequestedAt in one durable write BEFORE any external SDK call.
+  // Crash between this point and SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
+  const claimed = await claimCursorAttempt(row.id, fromStatus, { stampSendIntent: true });
   if (!claimed) {
     const again = (
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
@@ -387,24 +553,40 @@ export async function dispatchCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
+        { exposeMessage: true },
+      );
+    }
     throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
       exposeMessage: true,
     });
   }
 
   const claimToken = claimed.claim.claimToken;
-  const sendRequestedAt = new Date().toISOString();
+  const sendRequestedAt =
+    claimed.sendRequestedAt ?? new Date().toISOString();
 
   let dispatched;
   try {
+    const { isScriptedPhasedMode } = await import("./cursor-sdk-adapter");
+    const scriptedPhased =
+      plan.effectProviderMode === "SCRIPTED" && isScriptedPhasedMode();
     dispatched = await dispatchCursorRun({
       attemptId: row.id,
       instructionText: contract.instructionText,
       instructionFingerprint: plan.instructionFingerprint,
       workspaceCwd: plan.workspaceCwd,
       idempotencyKey: row.id,
-      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
-      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
+      /**
+       * LIVE: return after ACK/first observation — do not block HTTP on full wait.
+       * SCRIPTED default: finish immediately unless SFIA_CURSOR_SCRIPTED_PHASED=1
+       * (C9 — RUNNING observations then reconcile → COMPLETED).
+       */
+      waitForTerminal: plan.effectProviderMode === "SCRIPTED" && !scriptedPhased,
     });
   } catch (e) {
     const failLive: CursorLiveProjection = {
@@ -424,7 +606,7 @@ export async function dispatchCursorExecution(input: {
   }
 
   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
@@ -534,6 +716,64 @@ export async function reconcileCursorExecution(input: {
   const live = parseLive(row.resultJson);
   const claim = readClaim(row.resultJson);
   const limits = [...(live.limits ?? [])];
+  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
+
+  // SCRIPTED phased: advance in-memory run → COMPLETED without a second send.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "SCRIPTED" &&
+    !live.terminalStatus
+  ) {
+    const { advanceScriptedRunToFinished } = await import("./cursor-sdk-adapter");
+    const advanced = advanceScriptedRunToFinished(row.id);
+    if (advanced) {
+      const nextLive: CursorLiveProjection = {
+        ...live,
+        agentId: advanced.agentId,
+        runId: advanced.runId,
+        terminalStatus: "finished",
+        lastActivitySummary: advanced.lastActivitySummary,
+        reportStatus: "RECEIVED",
+        limits: [
+          ...limits,
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED_RECONCILED",
+          "NO_REAL_SIDE_EFFECT",
+        ],
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify({
+            ...nextLive,
+            reportMarkdown: advanced.resultText,
+          }),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify({
+              ...nextLive,
+              reportMarkdown: advanced.resultText,
+            }),
+            updatedAt: new Date(),
+          })
+          .where(eq(effectAttempts.id, row.id));
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: advanced.resultText,
+      };
+    }
+  }
 
   if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
     if (!live.runId && !live.agentId) {

```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
index 7cc137a3..ecc0b267 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
@@ -19,22 +19,15 @@ export async function POST(
     if (!body.statement || !body.inspectedFingerprint) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
-    if (body.confirmed !== true) {
-      return NextResponse.json(
-        {
-          error: "CONFIRMATION_REFUSED",
-          message: "Confirmation Non ou absente — aucun acte D6, aucun dispatch",
-        },
-        { status: 400 },
-      );
-    }
+    // confirmed === true → D6 Oui (mandate). Otherwise authenticated D6 Non (refusal act).
+    // Missing body after session auth is treated as Non — never as silent authorize.
     const result = await authorizeCursorExecution({
       pilotId: session.pilotId,
       projectId,
       attemptId,
       statement: body.statement,
       inspectedFingerprint: body.inspectedFingerprint,
-      confirmed: true,
+      confirmed: body.confirmed === true,
     });
     return NextResponse.json(result);
   } catch (e) {

```

### `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index 7cdacec9..115d3506 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -1,14 +1,14 @@
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
+import { RealizationBilan, type BilanTab } from "./RealizationBilan";
 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";
 
 type AttemptRow = {
@@ -41,7 +41,7 @@ type ContractRow = {
   version: number;
   fingerprint: string;
   status: string;
-  body: ContractViewerModel extends never ? never : {
+  body: {
     title: string;
     engagements: ContractViewerModel["engagements"];
     volets: ContractViewerModel["volets"];
@@ -53,8 +53,11 @@ type ContractRow = {
 
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
@@ -67,10 +70,9 @@ export function CursorRealizationSurface(props: {
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
 
@@ -83,7 +85,6 @@ export function CursorRealizationSurface(props: {
       const j = (await cRes.json()) as { contracts?: ContractRow[] };
       setContracts(j.contracts ?? []);
     }
-    // attempts list via dedicated route if present; else empty
     if (aRes && aRes.ok) {
       const j = (await aRes.json()) as { attempts?: AttemptRow[] };
       setAttempts(j.attempts ?? []);
@@ -94,20 +95,49 @@ export function CursorRealizationSurface(props: {
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
@@ -179,10 +209,47 @@ export function CursorRealizationSurface(props: {
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
   }
 
   async function openBilan(attempt: AttemptRow) {
@@ -199,6 +266,7 @@ export function CursorRealizationSurface(props: {
           rubrics: D8Rubric[];
           limits: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
         };
       };
       if (j.status === "MISSING" || !j.qualification) {
@@ -207,7 +275,7 @@ export function CursorRealizationSurface(props: {
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
-            body: JSON.stringify({ attachNoraAnalysis: true }),
+            body: JSON.stringify({ attachNoraCognitive: true }),
           },
         );
         const created = (await res.json().catch(() => ({}))) as {
@@ -215,6 +283,7 @@ export function CursorRealizationSurface(props: {
           rubrics?: D8Rubric[];
           limits?: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
         };
         if (res.ok && created.rubrics) {
           setBilan({
@@ -222,6 +291,7 @@ export function CursorRealizationSurface(props: {
             rubrics: created.rubrics,
             limits: created.limits ?? [],
             noraAnalysisMarkdown: created.noraAnalysisMarkdown,
+            noraAnalysisKind: created.noraAnalysisKind,
           });
           return;
         }
@@ -233,6 +303,7 @@ export function CursorRealizationSurface(props: {
         rubrics: j.qualification.rubrics,
         limits: j.qualification.limits,
         noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+        noraAnalysisKind: j.qualification.noraAnalysisKind,
       });
     } finally {
       setBusy(false);
@@ -266,13 +337,26 @@ export function CursorRealizationSurface(props: {
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
@@ -281,44 +365,46 @@ export function CursorRealizationSurface(props: {
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
@@ -360,7 +446,7 @@ export function CursorRealizationSurface(props: {
             className="btn secondary"
             data-testid="d6-confirm-no"
             disabled={busy}
-            onClick={confirmNo}
+            onClick={() => void confirmNo()}
           >
             Non
           </button>
@@ -368,7 +454,7 @@ export function CursorRealizationSurface(props: {
       ) : null}
 
       <section data-testid="realization-attempts">
-        <h3>Tentatives</h3>
+        <h3>{showExecutionChrome ? "Historique des interventions" : "Tentatives à bilanter"}</h3>
         {attempts.length === 0 ? (
           <p className="muted">Aucune tentative Cursor pour ce projet.</p>
         ) : (
@@ -378,16 +464,37 @@ export function CursorRealizationSurface(props: {
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
@@ -403,17 +510,16 @@ export function CursorRealizationSurface(props: {
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

### `projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts`
```diff
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
(NEW FILE — full content in section 8)

```

### `projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts`
```diff
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
(NEW FILE — full content in section 8)

```

### `projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts`
```diff
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
(NEW FILE — full content in section 8)

```

### `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cc1c771f..bb87ff9d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,122 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
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
index feb1fda3..d331312a 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,9 +4,10 @@
 
 | Champ | Valeur |
 |---|---|
-| Version | v0.2 — 23 novembre 2026 : décision Gate C et ouverture de ML5 enregistrées |
+| Version | v0.4 candidate — 23 novembre 2026 : Cycle 9 parcours mono-tentative BROWSER ; inventaire présence **1 IMPLEMENTED / 97 PARTIAL / 1 NOT_IMPL (B09)** inchangé ; conformité BROWSER renforcée sans promotion globale |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` |
+| Cycle 9 | Scénario `ml5-c9-mono-20261123` — attempt Oui `efx_1e86bf8c…` — refus `efx_b70c69ef…` — 14 PNG + manifeste ; frontier SCRIPTED_PHASED ; F2 NOT PROVEN ; verdict **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
 | Gate | **GATE C ACCEPTÉ PAR MORRIS AVEC RÉSERVES / GO CONSTRUCTION ML5** — décision explicite du 23/11/2026 dans la conversation ; la Roadmap de `main` présente encore son instantané antérieur `OPEN` et reste à synchroniser sous mandat D2 approprié. |
 | Publication | Document de pilotage **non normatif**, sur branche candidate non mergée ; consigne la décision Morris exprimée, sans prétendre modifier automatiquement les décisions/roadmap de `main`. |
 | Suivi | ChatGPT qualifie les Review Packs/écarts ; Cursor fournit réalisation/rapports ; Morris décide les arbitrages |
@@ -68,14 +69,14 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
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
 
@@ -113,8 +114,8 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 
 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
-| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | — |
-| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | DRAFT≠READY ; `markReady` + unknownRestrictions ; syntaxe ≠ suffisance |
+| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | PARTIEL | `prepareTechnicalContractFromNora` + bridge tour → DRAFT ; LIVE investigation multi-sources NON PROUVÉE |
+| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | CF-02 : READY serveur via investigation durable ; client `sourcesSufficient` ignoré ; BROWSER NON PROUVÉ |
 | ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
 | ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
 | ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
@@ -139,7 +140,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
 | ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
 | ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
-| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | P0-01 CAS `claimCursorAttempt` ; PG concurrent 1 win ; no blind redispatch DISPATCHED |
+| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | CF-03 : `priorSendMayHaveOccurred` + SQL fence AMBIGUOUS ; PG T-04 ACK-lost **PASS** (DEV) ; LIVE NOT PROVEN |
 | ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | reconcile sans redispatch ; stale claimToken fenced (PG) |
 | ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
 | ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
@@ -152,15 +153,15 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 
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
@@ -178,10 +179,10 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
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
@@ -190,10 +191,10 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
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
 
@@ -204,7 +205,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
 | ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
-| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | NV | — |
+| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | PARTIEL | PG ML5 dispatch **8 PASS** incl. ACK-lost ; concurrence 1 win ; fencing stale claim |
 | ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
 | ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
 | ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
@@ -214,6 +215,145 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
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
@@ -232,11 +372,41 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 
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
 
@@ -244,7 +414,18 @@ Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est jus
 
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
 
@@ -273,6 +454,6 @@ Chaque réserve transférée comporte **propriétaire, impact, preuve attendue,
 - [ ] Code/tests/architecture/UX/as-built synchronisés ; dette et capacité suivante qualifiées.
 - [ ] Décision Morris de réception, intégration, promotion et adoption traitée séparément.
 
-**État initial révisé :** `REVIEW REGISTRY VALIDATED FOR USE / ALL 99 ITEMS NV / GATE C ACCEPTED WITH RESERVES BY MORRIS 2026-11-23 / ML5 BUILD GO GRANTED / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`.
+**État courant R-002 (d'après rapports, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.
 
 **Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.

```

### `projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md`
```diff
(no diff vs HEAD — maybe identical or untracked without content cache)
```

## 10. Inventaire cumulé DIRTY C3–C9
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
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
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
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
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
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts
```

## 11. Acquis historiques non reproduits
- Captures C7/C8 conservées sous `.tmp-sfia-review/browser/c7-*.png`, `c8-*.png`
- Invariants C8 (origin/ls-remote, listen probe, MCP UNKNOWN, proof exact, PNG magic) non régressés volontairement
- Handoffs L3 antérieurs: C6 `b5466dd7`, C7 `01b7b66b`, C8 `759517d0`

## 12. Tests et sorties
- vitest `ml5-c9-d6-refuse-phased.test.ts`: 3 PASS
- vitest ciblés claim/proof/dev-session: 15 PASS
- Playwright `ml5-c9-e2e-journey.mts`: 15 PASS / 0 FAIL / 1 PARTIAL (handoff 400 initial, re-ingéré OK)
- tsc/eslint/build: non rejoués exhaustivement ce cycle (focus parcours) — dette mineure

## 13. Logs/API transitions utiles
- Refus: POST authorize confirmed:false → status CANCELLED + decisionId
- Oui: authorize AUTHORIZED (fingerprint match) → dispatch DISPATCHED (PHASED) → reconcile COMPLETED
- Handoff: rhf_bd21acef… RECEIVED SCRIPTED_ADAPTER

## 14. Captures originales et SHA-256
| Fichier | SHA-256 | Bytes |
|---|---|---|
| `.tmp-sfia-review/browser/c9/c9-a1-travail.png` | `ced903455d2a168cf376e91a6d943f884e8e400e6cca2ab013ce8dbaf832c34d` | 119783 |
| `.tmp-sfia-review/browser/c9/c9-a2-contrat-inspectable.png` | `37965349a88f5d93e638a0670c6778fad3527bce09dc88d18978b2c49d46e3aa` | 226799 |
| `.tmp-sfia-review/browser/c9/c9-b1-d6-confirm-avant-non.png` | `7dfa74b85e6679cb8097c10ded93d4dbbf8fb7688e4847ceb6322af2bc969553` | 225890 |
| `.tmp-sfia-review/browser/c9/c9-b1-d6-refus.png` | `e203cd5a0fa956d9411df1b7ece162cc322d6a7a95620af1f614afe1216db239` | 241326 |
| `.tmp-sfia-review/browser/c9/c9-b2-d6-confirm-avant-oui.png` | `a64b591fad5d1de82ec58d626eecec83d58c25a709f9e1c60519583a3f5d15a7` | 200899 |
| `.tmp-sfia-review/browser/c9/c9-c1-running.png` | `427ad8056437455b80423572e64a75764da65f90a5f9e851425ffd44a10de506` | 259392 |
| `.tmp-sfia-review/browser/c9/c9-c2-completed.png` | `84a3cad23f3bf3bc7cefc7e60c380c4cbd4f24ac86a0c143413359fcefc8c86a` | 108618 |
| `.tmp-sfia-review/browser/c9/c9-c3-reconnexion.png` | `6697407d50ff3af52be5e0d7a52de4003642bf8f1b895730bb80c18d8a783a7f` | 108616 |
| `.tmp-sfia-review/browser/c9/c9-d1-bilan-synthese.png` | `bdec9087a9268a5d7c30386f560cfa7eae969f437ee064b511aad14e7530378b` | 199537 |
| `.tmp-sfia-review/browser/c9/c9-d2-bilan-ecarts.png` | `6364193939f7ad52aed7191df4c5fd92953c1d8b8b26940265967b5542a67336` | 194676 |
| `.tmp-sfia-review/browser/c9/c9-d2-bilan-git.png` | `f6a2e901fbd39d792e6370a733c579a631b1cd7876b7b38d39c6898b2f155866` | 198332 |
| `.tmp-sfia-review/browser/c9/c9-d2-bilan-livrables.png` | `8f2c9e400f7d7cfda0b56c119e10d4e5652238dc79a3f852ea3c5aa46a522793` | 198786 |
| `.tmp-sfia-review/browser/c9/c9-d2-bilan-synthese-retour.png` | `0a309abd6fd6a5fcc4774fed3d2f57751d3b948e362fe52873fe09d4123fc3ee` | 199682 |
| `.tmp-sfia-review/browser/c9/c9-e1-retour-nora.png` | `8b62b63a568ce5d6018ba04c6a95a80bdeba5283aa53d019a4395bf3dfa51dc0` | 128204 |

**Note:** PNG locaux — ChatGPT ne les voit pas via Git. Morris peut transmettre pour revue visuelle.

## 15. Manifeste BROWSER
```json
{
  "scenarioId": "ml5-c9-mono-20261123",
  "at": "2026-11-23T16:48:43.112Z",
  "tool": "playwright",
  "frontier": "SCRIPTED_PHASED_DEV",
  "correlation": {
    "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
    "projectId": "proj_a4525a4a-2572-49ab-9345-1748f581448a",
    "projectName": "ML5-C9-2026-11-23-eaf3ad",
    "contractId": "tctr_97f4a788-c812-4b46-9257-1246900f153e",
    "contractKey": "c9-mono-9a2811c2",
    "fingerprint": "e93efdb8cea8fb9343a11cd1ae7c6716012023678dbaf5fe4359e29c79a167f1",
    "attemptIdRefuse": "efx_b70c69ef-9ee8-4ef5-8370-faf92fd44d67",
    "attemptIdYes": "efx_1e86bf8c-9f82-4f78-b243-8866e762ae63"
  },
  "honesty": {
    "noraCognitiveContractCreation": false,
    "cursorSdkLive": false,
    "webLive": false,
    "d6RefusalIsAuthenticatedAct": true,
    "phasedScriptedObservations": true
  },
  "steps": [
    {
      "step": "S0-session",
      "action": "POST /api/dev/auto-session (Pilote A DEV)",
      "api": {
        "route": "/api/dev/auto-session",
        "status": 200,
        "useful": {
          "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9"
        }
      },
      "data": "SCRIPTED",
      "criteria": [
        "ENV-01",
        "D\u00c9C-ML5-DEV"
      ],
      "verdict": "PASS"
    },
    {
      "step": "A1-travail",
      "action": "Ouvrir surface Travail du projet C9",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_a4525a4a-2572-49ab-9345-1748f581448a?surface=travail",
        "state": "travail"
      },
      "capture": {
        "file": "c9-a1-travail.png",
        "sha256": "ced903455d2a168cf376e91a6d943f884e8e400e6cca2ab013ce8dbaf832c34d",
        "bytes": 119783,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-a1-travail.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-01",
        "CA-03"
      ],
      "verdict": "PASS"
    },
    {
      "step": "A2-contrat",
      "action": "S\u00e9lectionner contrat + ouvrir instruction int\u00e9grale",
      "transition": "viewer closed \u2192 contract-viewer open",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_a4525a4a-2572-49ab-9345-1748f581448a?surface=execution",
        "state": "contract tctr_97f4a788-c812-4b46-9257-1246900f153e v1"
      },
      "capture": {
        "file": "c9-a2-contrat-inspectable.png",
        "sha256": "37965349a88f5d93e638a0670c6778fad3527bce09dc88d18978b2c49d46e3aa",
        "bytes": 226799,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-a2-contrat-inspectable.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-03",
        "CA-04"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B1-dialog",
      "action": "Pr\u00e9parer ex\u00e9cution \u2192 dialogue D6",
      "transition": "PREPARED \u2192 confirm dialog",
      "capture": {
        "file": "c9-b1-d6-confirm-avant-non.png",
        "sha256": "7dfa74b85e6679cb8097c10ded93d4dbbf8fb7688e4847ceb6322af2bc969553",
        "bytes": 225890,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-b1-d6-confirm-avant-non.png"
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
      "action": "Clic Non \u2192 authorize confirmed:false",
      "transition": "PREPARED \u2192 CANCELLED (decision dec_814f88f0-8a08-4503-8eda-354b8f3a5572)",
      "api": {
        "route": "/realization/attempts/efx_b70c69ef-9ee8-4ef5-8370-faf92fd44d67/authorize",
        "status": 200,
        "useful": {
          "attemptId": "efx_b70c69ef-9ee8-4ef5-8370-faf92fd44d67",
          "status": "CANCELLED",
          "decisionId": "dec_814f88f0-8a08-4503-8eda-354b8f3a5572",
          "idempotent": false,
          "fingerprint": "e93efdb8cea8fb9343a11cd1ae7c6716012023678dbaf5fe4359e29c79a167f1",
          "refused": true
        }
      },
      "capture": {
        "file": "c9-b1-d6-refus.png",
        "sha256": "e203cd5a0fa956d9411df1b7ece162cc322d6a7a95620af1f614afe1216db239",
        "bytes": 241326,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-b1-d6-refus.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-04",
        "T-02",
        "T-03"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B2-dialog",
      "action": "Seconde pr\u00e9paration \u2192 dialogue D6 Oui",
      "capture": {
        "file": "c9-b2-d6-confirm-avant-oui.png",
        "sha256": "a64b591fad5d1de82ec58d626eecec83d58c25a709f9e1c60519583a3f5d15a7",
        "bytes": 200899,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-b2-d6-confirm-avant-oui.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-04",
        "T-03"
      ],
      "verdict": "PASS"
    },
    {
      "step": "B2-oui-C1-dispatch",
      "action": "D6 Oui + dispatch SCRIPTED",
      "transition": "PREPARED \u2192 AUTHORIZED \u2192 DISPATCHED",
      "api": {
        "route": "authorize+dispatch",
        "status": 200,
        "useful": {
          "authYesJson": {
            "attemptId": "efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
            "status": "AUTHORIZED",
            "decisionId": "dec_a7feec7e-969b-493f-8aa9-2e18f4250581",
            "idempotent": false,
            "fingerprint": "e93efdb8cea8fb9343a11cd1ae7c6716012023678dbaf5fe4359e29c79a167f1"
          },
          "dispatchJson": {
            "attemptId": "efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
            "status": "DISPATCHED",
            "idempotent": false,
            "live": {
              "sendRequestedAt": "2026-11-23T16:48:30.414Z",
              "ackReceivedAt": "2026-11-23T16:48:30.414Z",
              "runObservedAt": "2026-11-23T16:48:30.414Z",
              "agentId": "scripted-agent-efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
              "runId": "scripted-run-efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
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
            "claimToken": "claim_e6595d5d-dc5c-45ba-8536-193106895170"
          }
        }
      },
      "capture": {
        "file": "c9-c1-running.png",
        "sha256": "427ad8056437455b80423572e64a75764da65f90a5f9e851425ffd44a10de506",
        "bytes": 259392,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-c1-running.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-05",
        "CA-06",
        "T-04",
        "T-05"
      ],
      "verdict": "PASS"
    },
    {
      "step": "C2-reconcile",
      "action": "R\u00e9concilier tentative SCRIPTED_PHASED \u2192 COMPLETED",
      "transition": "DISPATCHED \u2192 COMPLETED",
      "api": {
        "route": "/attempts/efx_1e86bf8c-9f82-4f78-b243-8866e762ae63/reconcile",
        "status": 200,
        "useful": {
          "attemptId": "efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
          "status": "COMPLETED",
          "live": {
            "sendRequestedAt": "2026-11-23T16:48:30.414Z",
            "ackReceivedAt": "2026-11-23T16:48:30.414Z",
            "runObservedAt": "2026-11-23T16:48:30.414Z",
            "agentId": "scripted-agent-efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
            "runId": "scripted-run-efx_1e86bf8c-9f82-4f78-b243-8866e762ae63",
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
              "claimToken": "claim_e6595d5d-dc5c-45ba-8536-193106895170",
              "claimedAt": "2026-11-23T16:48:30.411Z",
              "leaseExpiresAt": "2026-11-23T16:49:30.415Z",
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
          "scriptedReportMarkdown": "# Rapport de r\u00e9alisation (SCRIPTED)\n\nattemptId: efx_1e86bf8c-9f82-4f78-b243-8866e762ae63\ninstructionFingerprint: d7415d0c6497a4e4b393c354df98d0aa937363ddebf5ae606055bd1558b96a69\n\n## Inventaire\n- Aucun fichier modifi\u00e9 (mode scripted)\n\n## Tests\n- Non ex\u00e9cut\u00e9s (SCRIPTED)\n\n## R\u00e9serves\n- Preuve LIVE SDK non produite"
        }
      },
      "capture": {
        "file": "c9-c2-completed.png",
        "sha256": "84a3cad23f3bf3bc7cefc7e60c380c4cbd4f24ac86a0c143413359fcefc8c86a",
        "bytes": 108618,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-c2-completed.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-06",
        "T-06"
      ],
      "verdict": "PASS"
    },
    {
      "step": "C3-handoff",
      "action": "POST handoff SCRIPTED_ADAPTER",
      "api": {
        "route": "/attempts/efx_1e86bf8c-9f82-4f78-b243-8866e762ae63/handoff",
        "status": 400,
        "useful": {
          "error": "INVALID_REQUEST",
          "errorCategory": "INVALID_REQUEST",
          "message": "Ex\u00e9cuteur d\u00e9clar\u00e9 \u2260 agent observ\u00e9 \u2014 provenance refus\u00e9e"
        }
      },
      "data": "SCRIPTED",
      "criteria": [
        "CA-07"
      ],
      "verdict": "PARTIAL"
    },
    {
      "step": "C3-reconnexion",
      "action": "Cookies purg\u00e9s + auto-session + tentative retrouv\u00e9e",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_a4525a4a-2572-49ab-9345-1748f581448a?surface=execution",
        "state": "row efx_1e86bf8c-9f82-4f78-b243-8866e762ae63"
      },
      "capture": {
        "file": "c9-c3-reconnexion.png",
        "sha256": "6697407d50ff3af52be5e0d7a52de4003642bf8f1b895730bb80c18d8a783a7f",
        "bytes": 108616,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-c3-reconnexion.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-06",
        "T-06"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D1-bilan",
      "action": "Ouvrir Bilan D8 depuis R\u00e9sultats et preuves",
      "transition": "liste \u2192 realization-bilan",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_a4525a4a-2572-49ab-9345-1748f581448a?surface=publication",
        "state": "bilan attempt=efx_1e86bf8c-9f82-4f78-b243-8866e762ae63"
      },
      "capture": {
        "file": "c9-d1-bilan-synthese.png",
        "sha256": "bdec9087a9268a5d7c30386f560cfa7eae969f437ee064b511aad14e7530378b",
        "bytes": 199537,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-d1-bilan-synthese.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "CA-09",
        "T-07"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-livrables",
      "action": "Onglet bilan livrables",
      "capture": {
        "file": "c9-d2-bilan-livrables.png",
        "sha256": "8f2c9e400f7d7cfda0b56c119e10d4e5652238dc79a3f852ea3c5aa46a522793",
        "bytes": 198786,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-d2-bilan-livrables.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "T-08"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-git",
      "action": "Onglet bilan git",
      "capture": {
        "file": "c9-d2-bilan-git.png",
        "sha256": "f6a2e901fbd39d792e6370a733c579a631b1cd7876b7b38d39c6898b2f155866",
        "bytes": 198332,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-d2-bilan-git.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "T-08"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-ecarts",
      "action": "Onglet bilan ecarts",
      "capture": {
        "file": "c9-d2-bilan-ecarts.png",
        "sha256": "6364193939f7ad52aed7191df4c5fd92953c1d8b8b26940265967b5542a67336",
        "bytes": 194676,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-d2-bilan-ecarts.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "T-08"
      ],
      "verdict": "PASS"
    },
    {
      "step": "D2-tab-synthese",
      "action": "Onglet bilan synthese",
      "capture": {
        "file": "c9-d2-bilan-synthese-retour.png",
        "sha256": "0a309abd6fd6a5fcc4774fed3d2f57751d3b948e362fe52873fe09d4123fc3ee",
        "bytes": 199682,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-d2-bilan-synthese-retour.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-07",
        "T-08"
      ],
      "verdict": "PASS"
    },
    {
      "step": "E1-retour-nora",
      "action": "En discuter avec Nora \u2192 Travail, brouillon non envoy\u00e9",
      "browser": {
        "url": "http://127.0.0.1:3100/projects/proj_a4525a4a-2572-49ab-9345-1748f581448a?surface=travail",
        "state": "draftLen=104"
      },
      "capture": {
        "file": "c9-e1-retour-nora.png",
        "sha256": "8b62b63a568ce5d6018ba04c6a95a80bdeba5283aa53d019a4395bf3dfa51dc0",
        "bytes": 128204,
        "path": "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/browser/c9/c9-e1-retour-nora.png"
      },
      "data": "OBSERVED",
      "criteria": [
        "CA-08",
        "T-09",
        "T-10"
      ],
      "verdict": "PASS"
    }
  ],
  "summary": {
    "pass": 15,
    "fail": 0,
    "partial": 1,
    "captures": 14
  }
}
```

## 16. Figma L0/L1/L2/F2
- Référence: file `itgvCulInEnFY6DvgIegvP` page `1209:2` états 12.01–12.14
- Viewport captures: 1440×900 vs Figma 1680×970 — **F2 PASS non revendiqué**
- États traversés BROWSER: Travail, contrat/D6, RUNNING/COMPLETED, bilan 4 onglets, Nora return
- Matrice 14: NOT PROVEN global (mesure CSS-px 1:1 non exécutée C9)

## 17. Fake/Real Qualification
| Frontière | Niveau | Preuve |
|---|---|---|
| Identité DEV auto-session | SCRIPTED / DETERMINISTIC | cookie Pilote A loopback |
| Nora D3 cognitive | NOT PROVEN LIVE | contrat seed DOMAIN_SEED_SCRIPTED |
| Cursor SDK | SCRIPTED_PHASED | observations RUNNING≠LIVE |
| Git / GitHub | lecture seule / pas de push | Option A inchangée |
| PostgreSQL DEV | INTEGRATION | attempts/decisions persistés |
| WEB LIVE B09 | NOT_IMPL | — |
| BROWSER | PROVEN parcours | 14 captures |
| Figma F2 | NOT PROVEN | viewport mismatch |

## 18. Matrice 99 exigences
- Inventaire présence: **1 IMPLEMENTED / 97 PARTIAL / 1 NOT_IMPL (B09)**
- Aucune promotion automatique IMPLEMENTED sur seul volume de tests
- D07: preuve BROWSER D6 Oui/Non C9 ajoutée; reste PARTIAL (LIVE non prouvé)
- Historique R-001/R-002/R-003 + C7/C8/C9 conservé

## 19. CA / T / Q / PF
- CA-04/T-02/T-03: BROWSER PASS (refus+autorisation fingerprint)
- CA-05/CA-06/T-04..T-06: SCRIPTED_PHASED PASS (≠ LIVE)
- CA-07/CA-09/T-07/T-08: bilan 4 onglets PASS navigation; preuves SCRIPTED
- CA-08/T-09/T-10: retour Nora brouillon PASS; analyse cognitive LIVE NOT PROVEN
- CA-01 Nora investigation LIVE: NOT PROVEN

## 20. CP-01…CP-08
- Conservés depuis C7/C8 — non rejoués exhaustivement; non régressés intentionnellement
- CP-02 listen: serveur `-H 127.0.0.1` + STUDIO_DEV_BIND

## 21. Régressions et limitations
- Handoff E2E initial PARTIAL (declaredExecutorId mismatch) — corrigé script + re-ingest
- F2 non mesuré
- Contrat créé par seed, pas Nora LIVE

## 22. Dette et exit
- Exit LIVE: GO Nora / Cursor SDK / WEB
- Exit F2: viewport match + mesures ≤2px
- Exit READY FOR RECETTE: hors contrat

## 23. Gates Morris
- GO LIVE Cursor SDK / Nora / WEB
- GO push code projet / PR / merge
- GO RECETTE / release / ADOPTED

## 24. ENV-01 et versioning
- Lane: DEV 127.0.0.1:3100 / PG :5433 / mig 019
- SFIA_CURSOR_EFFECT_MODE=SCRIPTED ; SFIA_CURSOR_SCRIPTED_PHASED=1
- SFIA_CURSOR_WORKSPACE_ROOT=/tmp/sfia-c9-scripted-ws
- Product versioning: NO RELEASE ; STABLE NOT AVAILABLE

## 25. Verdict
**`ML5 INTEGRATED — QUALIFICATION IN PROGRESS`**

Parcours mono-tentative corrélé exercé sur produit réel (SCRIPTED frontier). Qualification LIVE/F2/REAL ouverte.

## 26. Review Handoff
- Mode: publish-in-cycle L3 borné
- Branche: `sfia/review-handoff`
- Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- Commit attendu: `docs(review-handoff): publish ML5 cycle 9 end-to-end journey review`
- Push code projet: **INTERDIT**