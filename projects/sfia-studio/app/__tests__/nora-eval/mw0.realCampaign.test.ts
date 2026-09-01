/** @vitest-environment node */
/**
 * CORR-MW0-05 bounded REAL campaign — skipped unless MW0_RUN_REAL=1.
 * Secrets from OPENAI_API_KEY or sibling .env.local (never asserted/logged).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
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
} from "@/lib/nora-eval";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

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

const runReal = process.env.MW0_RUN_REAL === "1";

describe.runIf(runReal)("MW0 CORR-05 bounded REAL campaign", () => {
  it(
    "D0 → R1 → R2 under cumulative $5 hard cap with carry-in",
    async () => {
      const campaignId = `mw0-corr05-${Date.now()}`;
      const outDir = path.resolve(process.cwd(), ".tmp-nora-mw0-evidence");
      fs.mkdirSync(outDir, { recursive: true });

      const historicalPath = path.join(outDir, `${HISTORICAL_CAMPAIGN_ID}.json`);
      expect(fs.existsSync(historicalPath)).toBe(true);

      const d0 = await runFullD0Suite();
      expect(d0.ok).toBe(true);

      const manifest = buildMw0CapabilityManifest(new Date().toISOString());
      const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
      expect(luna.ok).toBe(true);
      expect(luna.efforts).toContain("none");

      const secrets = loadSecrets();
      expect(secrets).not.toBeNull();
      if (!secrets) return;

      const plan = {
        model: "gpt-5.6-luna" as const,
        reasoningEffort: "none" as const,
        r2: [
          { scenarioId: "mw0.s03.ambiguous-clarification", n: 3, essential: false },
          { scenarioId: "mw0.s04.option-rec-hd-separation", n: 3, essential: false },
          { scenarioId: "mw0.s05.authority-anti-nora-grant", n: 5, essential: true },
          { scenarioId: "mw0.s06.genericity-cycle-a", n: 3, essential: false },
          { scenarioId: "mw0.s06.genericity-cycle-b", n: 3, essential: false },
        ],
      };

      const carryIn = MW0_HISTORICAL_USAGE_BASED_ESTIMATED_SPEND_USD;
      const budget = new BudgetTracker(MW0_BUDGET_POLICY, carryIn);
      const spendAtStart = budget.cumulativeUsd;
      const runs: RunEvidence[] = [...d0.results];

      // eslint-disable-next-line no-console
      console.log(
        "REAL_CAMPAIGN_PLAN",
        JSON.stringify({
          campaignId,
          carryInUsd: carryIn,
          remainingHardCapBudgetUsd: MW0_BUDGET_POLICY.hardCapUsd - carryIn,
          model: plan.model,
          reasoningEffort: plan.reasoningEffort,
          r2Cells: plan.r2,
        }),
      );

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
      expect(r1.passFail).toBe("PASS");

      resetRuntimeApplicationServiceForTests();
      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      delete process.env.OPS1_CONVERSATION_PROVIDER;

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
      expect(created.ok).toBe(true);
      if (!created.ok) return;

      let hardInvariantFail = false;
      for (const cell of plan.r2) {
        for (let i = 1; i <= cell.n; i++) {
          if (budget.hardStopTriggered) break;
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
          // eslint-disable-next-line no-console
          console.log(
            "R2",
            cell.scenarioId,
            i,
            run.passFail,
            run.failureClass,
            `f2.ok=${String(run.productObservation?.f2Ok)}`,
            `spend=${budget.cumulativeUsd.toFixed(6)}`,
          );
          if (run.failureClass === "HARD_INVARIANT") {
            hardInvariantFail = true;
            break;
          }
          if (run.failureClass === "BUDGET_STOP") break;
        }
        if (hardInvariantFail || budget.hardStopTriggered) break;
      }

      expect(hardInvariantFail).toBe(false);
      expect(budget.cumulativeUsd).toBeLessThanOrEqual(MW0_BUDGET_POLICY.hardCapUsd);

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
                "HISTORICAL CAMPAIGN — R1 usable — R2/R3 EXIT CLAIMS SUPERSEDED / INVALIDATED BY CORR-MW0-05 — budget debit retained",
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
            secretsSourceKind: secrets.source,
          },
        }),
      );

      // Historical must still exist unchanged
      expect(fs.existsSync(historicalPath)).toBe(true);

      const r2 = runs.filter((r) => r.cell.tier === "R2");
      // No PASS when f2.ok=false
      for (const r of r2) {
        if (r.productObservation?.f2Ok === false) {
          expect(r.passFail).not.toBe("PASS");
          expect(r.failureClass).not.toBe("NONE");
        }
      }

      const byScenario = new Map<string, RunEvidence[]>();
      for (const r of r2) {
        const list = byScenario.get(r.cell.scenarioId) ?? [];
        list.push(r);
        byScenario.set(r.cell.scenarioId, list);
      }

      // eslint-disable-next-line no-console
      console.log(
        JSON.stringify({
          campaignId,
          packPath,
          carryIn,
          correctionSpend,
          cumulative: budget.cumulativeUsd,
          r1: r1.passFail,
          r2Counts: [...byScenario.entries()].map(([s, list]) => ({
            s,
            n: list.length,
            pass: list.filter((x) => x.passFail === "PASS").length,
            f2OkTrue: list.filter((x) => x.productObservation?.f2Ok === true)
              .length,
          })),
        }),
      );
    },
    600_000,
  );
});
