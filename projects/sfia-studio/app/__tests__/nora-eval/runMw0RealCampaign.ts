/**
 * MW0 CORR-05 bounded REAL campaign runner (local Delivery only).
 * Loads secrets from env or sibling .env.local — never logs the key.
 *
 * Run: npx tsx __tests__/nora-eval/runMw0RealCampaign.ts
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  runFullD0Suite,
  runR1ProviderSmoke,
  runR2ProductScenario,
  serializeEvidencePack,
  MW0_BUDGET_POLICY,
  MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
  type RunEvidence,
} from "../../lib/nora-eval";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../../lib/vertical-slice-runtime";

const HISTORICAL_CAMPAIGN_ID = "mw0-1788039895203";

type SecretSource = "process.env" | "env.local";

/**
 * CORR-MW0-08 — portable secret resolution only.
 * Returns categorical source (never a physical file path).
 */
function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  // app/__tests__/nora-eval → ../../.env.local = app/.env.local
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
  ];
  const seen = new Set<string>();
  for (const file of candidates) {
    if (seen.has(file)) continue;
    seen.add(file);
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
    if (m?.[1]) {
      const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
      if (apiKey) return { apiKey, source: "env.local" };
    }
  }
  return null;
}

async function main(): Promise<void> {
  const campaignId = `mw0-corr05-${Date.now()}`;
  const outDir = path.resolve(__dirname, "../../.tmp-nora-mw0-evidence");
  fs.mkdirSync(outDir, { recursive: true });

  const historicalPath = path.join(outDir, `${HISTORICAL_CAMPAIGN_ID}.json`);
  if (!fs.existsSync(historicalPath)) {
    console.error(
      "STOP — historical campaign evidence missing (must preserve)",
      historicalPath,
    );
    process.exit(2);
  }
  console.log("HISTORICAL_CAMPAIGN", {
    id: HISTORICAL_CAMPAIGN_ID,
    classification:
      "HISTORICAL CAMPAIGN — R1 usable — R2/R3 EXIT CLAIMS SUPERSEDED / INVALIDATED BY CORR-MW0-05 REVIEW — budget debit retained",
    debitUsd: MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD,
    terminology: "usage-based estimated API cost (NOT invoice spend)",
  });

  const d0 = runFullD0Suite();
  if (!d0.ok) {
    console.error("STOP — D0 NOT PROVEN", d0.failed);
    process.exit(2);
  }
  console.log("D0 PROVEN", { scenarios: d0.results.length });

  const retrievedAt = new Date().toISOString();
  const manifest = buildMw0CapabilityManifest(retrievedAt);
  const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
  if (!luna.ok || !luna.efforts.includes("none")) {
    console.error("STOP BEFORE REAL — PROVIDER CAPABILITY OR PRICING NOT ESTABLISHED");
    process.exit(3);
  }

  const secrets = loadSecrets();
  if (!secrets) {
    console.error("STOP BEFORE REAL — OPENAI_API_KEY not available");
    process.exit(4);
  }
  console.log("secrets_source", secrets.source);
  console.log("budget_policy", MW0_BUDGET_POLICY);

  const plan = {
    model: "gpt-5.6-luna",
    reasoningEffort: "none" as const,
    r1: { runs: 1 },
    r2: [
      { scenarioId: "mw0.s03.ambiguous-clarification", n: 3, essential: false },
      { scenarioId: "mw0.s04.option-rec-hd-separation", n: 3, essential: false },
      { scenarioId: "mw0.s05.authority-anti-nora-grant", n: 5, essential: true },
      { scenarioId: "mw0.s06.genericity-cycle-a", n: 3, essential: false },
      { scenarioId: "mw0.s06.genericity-cycle-b", n: 3, essential: false },
    ],
    expectedProviderCallsPerR2: "2-4 (intent + optional CKC + rounds)",
  };

  const totalR2 = plan.r2.reduce((a, c) => a + c.n, 0);
  // Conservative: up to 4 provider calls × inflated tokens at Sol rates (upper bound)
  const conservativeMaxAdditional =
    plan.r1.runs *
      ((2000 / 1e6) * 4 + (500 / 1e6) * 20) +
    totalR2 *
      4 *
      ((8000 / 1e6) * 4 + (2000 / 1e6) * 20);
  const carryIn = MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD;
  const expectedMaxCumulative = carryIn + conservativeMaxAdditional;

  console.log(
    "REAL_CAMPAIGN_PLAN",
    JSON.stringify(
      {
        campaignId,
        carryInUsd: carryIn,
        remainingHardCapBudgetUsd: MW0_BUDGET_POLICY.hardCapUsd - carryIn,
        plan,
        conservativeMaxAdditionalUsd: conservativeMaxAdditional,
        expectedMaxCumulativeUsd: expectedMaxCumulative,
        softStopUsd: MW0_BUDGET_POLICY.softStopUsd,
        hardCapUsd: MW0_BUDGET_POLICY.hardCapUsd,
      },
      null,
      2,
    ),
  );

  if (expectedMaxCumulative > MW0_BUDGET_POLICY.hardCapUsd) {
    // Still allow if luna pricing makes actual spend tiny — but warn with Sol-bound check
    console.warn(
      "NOTE — Sol-priced conservative ceiling exceeds hard cap; live metering + preflight still enforce $5",
      expectedMaxCumulative,
    );
  }

  const budget = new BudgetTracker(MW0_BUDGET_POLICY, carryIn);
  const runs: RunEvidence[] = [...d0.results];
  const spendAtStart = budget.cumulativeUsd;

  // R1
  const r1 = await runR1ProviderSmoke({
    campaignId,
    apiKey: secrets.apiKey,
    model: plan.model,
    reasoningEffort: plan.reasoningEffort,
    runIndex: 1,
    manifest,
    budget,
    essential: true,
  });
  runs.push(r1);
  console.log("R1", r1.passFail, r1.failureClass, `spend=${budget.cumulativeUsd.toFixed(6)}`);
  if (r1.passFail !== "PASS") {
    console.error("STOP — R1 failed", r1.rawSummary.slice(0, 200));
    fs.writeFileSync(
      path.join(outDir, `${campaignId}.json`),
      serializeEvidencePack({
        campaignId,
        createdAt: new Date().toISOString(),
        runs,
        extra: {
          manifest,
          plan,
          historical: {
            campaignId: HISTORICAL_CAMPAIGN_ID,
            classification: "SUPERSEDED_R2_R3",
            debitUsd: carryIn,
          },
          stop: "R1_FAIL",
        },
      }),
    );
    process.exit(6);
  }

  // Project fixture for R2
  resetRuntimeApplicationServiceForTests();
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw0-"));
  const runtime = getRuntimeApplicationService({
    productDbPath: path.join(dir, "oa-product.sqlite"),
    auditMode: "noop",
    nowIso: "2026-08-29T22:00:00.000Z",
  });
  const created = await runtime.createProject({
    name: "MW0 Eval Project",
    objective: "Bounded cognitive eval harness evidence.",
    context: "Authorized class C representative fixture for MW0 Delivery.",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
    shortReference: "MW0",
    idempotencyKey: `idem:mw0-${campaignId}`,
  });
  if (!created.ok) {
    console.error("STOP — project fixture failed");
    process.exit(7);
  }

  let hardInvariantStop = false;
  for (const cell of plan.r2) {
    for (let i = 1; i <= cell.n; i++) {
      if (budget.hardStopTriggered) {
        console.error("STOP — MW0 HARD CAP $5 REACHED");
        break;
      }
      const run = await runR2ProductScenario({
        campaignId,
        apiKey: secrets.apiKey,
        model: plan.model,
        reasoningEffort: plan.reasoningEffort,
        scenarioId: cell.scenarioId,
        runIndex: i,
        projectId: created.projectId,
        manifest,
        budget,
        essential: cell.essential,
      });
      runs.push(run);
      const obs = run.productObservation as
        | { f2Ok?: boolean; f2Status?: string; turnKind?: string }
        | undefined;
      console.log(
        "R2",
        cell.scenarioId,
        `n=${i}/${cell.n}`,
        run.passFail,
        run.failureClass,
        `f2.ok=${obs?.f2Ok}`,
        `status=${obs?.f2Status}`,
        `turnKind=${obs?.turnKind}`,
        `calls=${run.usage?.providerCallCount ?? 0}`,
        `spend=${budget.cumulativeUsd.toFixed(6)}`,
      );
      if (run.failureClass === "HARD_INVARIANT") {
        console.error("STOP — MW0 AUTHORITY INVARIANT FAILURE");
        hardInvariantStop = true;
        break;
      }
      if (run.failureClass === "BUDGET_STOP") break;
    }
    if (hardInvariantStop || budget.hardStopTriggered) break;
  }

  const correctionSpend = budget.cumulativeUsd - spendAtStart;
  const packPath = path.join(outDir, `${campaignId}.json`);
  fs.writeFileSync(
    packPath,
    serializeEvidencePack({
      campaignId,
      createdAt: new Date().toISOString(),
      runs,
      extra: {
        corr: "CORR-MW0-05",
        manifest,
        plan,
        historical: {
          campaignId: HISTORICAL_CAMPAIGN_ID,
          classification:
            "HISTORICAL CAMPAIGN — R1 usable — R2 EXIT CLAIM SUPERSEDED / INVALIDATED BY CORR-MW0-05 REVIEW — R3 EXIT CLAIM SUPERSEDED / INVALIDATED — budget debit retained",
          debitUsd: carryIn,
          terminology: "usage-based / harness-estimated historical spend",
        },
        budget: {
          historicalCarryInUsd: carryIn,
          correctionCampaignSpendUsd: correctionSpend,
          cumulativeUsageBasedEstimatedUsd: budget.cumulativeUsd,
          softStopTriggered: budget.softStopTriggered,
          hardStopTriggered: budget.hardStopTriggered,
          ledger: budget.ledger,
          policy: MW0_BUDGET_POLICY,
          terminology: "usage-based estimated API cost (NOT invoice spend)",
        },
        secretsSource: secrets.source,
        hardInvariantStop,
      },
    }),
  );
  console.log("EVIDENCE_PACK", packPath);
  console.log("CORRECTION_SPEND_USD", correctionSpend);
  console.log("CUMULATIVE_USAGE_BASED_ESTIMATED_USD", budget.cumulativeUsd);
  console.log(
    "SUMMARY",
    JSON.stringify(
      {
        d0: d0.ok,
        r1: r1.passFail,
        r2: runs
          .filter((r) => r.cell.tier === "R2")
          .map((r) => ({
            s: r.cell.scenarioId,
            i: r.cell.runIndex,
            p: r.passFail,
            f: r.failureClass,
            f2Ok: r.productObservation?.f2Ok ?? null,
            f2Status: r.productObservation?.f2Status ?? null,
            turnKind: r.productObservation?.turnKind ?? null,
            observed: r.productObservation?.observedObservableIds ?? null,
          })),
        carryIn,
        correctionSpend,
        cumulative: budget.cumulativeUsd,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
