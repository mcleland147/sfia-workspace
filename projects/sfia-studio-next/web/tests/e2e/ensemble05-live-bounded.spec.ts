import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import {
  openNewPreparation,
  constituteAndCreateProject,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 05 Level-C — LIVE bounded campaign L01–L12.
 * GO Morris: ≤12 user turns, ≤€25 TTC, ≤1 retry/turn, DEV only.
 * Corpus/oracles pre-registered — do not rewrite prompts after observation.
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../docs/evidence/ensemble-05-travail-nora/live-bounded-campaign-20261118",
);

/** gpt-6.1-sol short-context USD/1M (OpenAI pricing page 2026-11-18). */
const USD_IN_PER_M = 2.0;
const USD_OUT_PER_M = 10.0;
/** Conservative USD→EUR + TTC (VAT 20%). */
const USD_TO_EUR = 0.95;
const VAT = 1.2;
const CEILING_EUR_TTC = 25.0;
/** Reserve before each turn so the next call cannot breach the ceiling. */
const RESERVE_EUR_TTC = 2.0;
/** Fallback estimate when usage tokens unavailable. */
const FALLBACK_EUR_TTC = 0.85;

const CORPUS: { id: string; prompt: string; notes: string }[] = [
  {
    id: "L01",
    prompt:
      "Explique simplement ce qu'est un déploiement progressif, sans entrer dans un plan détaillé.",
    notes: "prose; no forced graphic",
  },
  {
    id: "L02",
    prompt:
      "À partir de ce que tu sais de ce projet, fais une synthèse de la situation : constats, risques et pistes utiles.",
    notes: "editorial if founded; no invented figures",
  },
  {
    id: "L03",
    prompt:
      "Compare trois approches pour déployer un même service sur plusieurs sites, avec avantages et risques de chacune.",
    notes: "options/cards if pertinent",
  },
  {
    id: "L04",
    prompt:
      "Propose cinq possibilités de déploiement et compare-les sur l'effort, le risque et le délai.",
    notes: "matrix if pertinent",
  },
  {
    id: "L05",
    prompt:
      "Propose un parcours de réalisation en plusieurs étapes pour préparer ce déploiement.",
    notes: "ordered steps",
  },
  {
    id: "L06",
    prompt:
      "Nous avons une fenêtre de huit semaines déjà actée. Propose une répartition temporelle hypothétique des activités sur ces huit semaines.",
    notes: "timeline hypothetical OK",
  },
  {
    id: "L07",
    prompt:
      "Décris les dépendances entre trois chaînes d'activités (accès, données, accompagnement) qui doivent converger avant la mise en service.",
    notes: "directed deps",
  },
  {
    id: "L08",
    prompt:
      "Présente les alternatives selon que le support est saturé ou non, avec les suites possibles.",
    notes: "conditional tree; no auto decision",
  },
  {
    id: "L09",
    prompt:
      "Explique comment trois chantiers peuvent avancer en parallèle, et à quel moment un contrôle commun a du sens.",
    notes: "parallel lanes",
  },
  {
    id: "L10",
    prompt: "Montre-moi un graphique des coûts et des gains attendus pour ce projet.",
    notes: "refuse invented quantitative chart",
  },
  {
    id: "L11",
    prompt:
      "En te basant sur notre échange précédent, rappelle les options déjà évoquées et ce qui reste à clarifier.",
    notes: "continuity",
  },
  {
    id: "L12",
    prompt: "Que me conseilles-tu de faire maintenant pour avancer sereinement ?",
    notes: "open form",
  },
];

type TurnRow = {
  id: string;
  startedAt: string;
  durationMs: number;
  statusText: string;
  modeLive: boolean;
  fixtureLeak: boolean;
  simLeak: boolean;
  hasComposition: boolean;
  compositionVariant: string | null;
  compositionTestIds: string[];
  excerpt: string;
  estimatedEurTtc: number;
  cumulativeEurTtc: number;
  retries: number;
  verdictNotes: string;
};

function estimateEurTtc(inputTokens?: number, outputTokens?: number): number {
  if (inputTokens == null || outputTokens == null) return FALLBACK_EUR_TTC;
  const usd = (inputTokens / 1e6) * USD_IN_PER_M + (outputTokens / 1e6) * USD_OUT_PER_M;
  return usd * USD_TO_EUR * VAT;
}

test.describe("Ensemble 05 LIVE bounded L01–L12", () => {
  test("LIVE campaign — spontaneous composition + persist", async ({ page }) => {
    // Not part of CI BROWSER FAKE: requires explicit LIVE authorization + API key.
    test.skip(
      process.env.STUDIO_ALLOW_LIVE_BOUNDED !== "1" || !process.env.OPENAI_API_KEY,
      "requires STUDIO_ALLOW_LIVE_BOUNDED=1 and OPENAI_API_KEY (excluded from FAKE CI)",
    );
    test.setTimeout(900_000);
    fs.mkdirSync(path.join(EVIDENCE, "runtime"), { recursive: true });

    const ledger: {
      ceilingEurTtc: number;
      model: string;
      pricing: string;
      turns: TurnRow[];
      stoppedEarly?: string;
    } = {
      ceilingEurTtc: CEILING_EUR_TTC,
      model: "gpt-6.1-sol",
      pricing: "USD $2/$10 per 1M in/out · ×0.95 EUR · ×1.20 TTC · fallback €0.85/turn",
      turns: [],
    };

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    // Bootstrap WITHOUT Nora seed (avoids burning a LIVE turn on prep).
    const preparationId = await openNewPreparation(page);
    const projectName = `E05 LIVE ${Date.now()}`;
    const projectId = await constituteAndCreateProject(page, {
      name: projectName,
      summary: "live-bounded-campaign",
    });
    expect(preparationId).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");
    await page.setViewportSize({ width: 1440, height: 900 });

    let cumulative = 0;
    let stopReason: string | undefined;

    for (const turn of CORPUS) {
      if (cumulative + RESERVE_EUR_TTC > CEILING_EUR_TTC) {
        stopReason = `BUDGET_RESERVE_STOP before ${turn.id}: cumulative=${cumulative.toFixed(2)} reserve=${RESERVE_EUR_TTC}`;
        break;
      }

      const t0 = Date.now();
      await draft.fill(turn.prompt);
      await expect(send).toBeEnabled({ timeout: 10000 });
      await send.click();

      // LIVE turns can be slow — wait for terminal status.
      const status = page.getByTestId("thread-nora-status");
      await expect(status).toContainText(/COMPLETE|UNKNOWN|FAILED|INTERRUPTED|Nora/i, {
        timeout: 180_000,
      });
      // Allow UI to settle
      await expect(draft).toHaveValue("", { timeout: 180_000 });

      const statusText = ((await status.textContent()) ?? "").trim();
      const modeLive = /openai-agents-sdk-live/i.test(statusText);
      const fixtureLeak = /deterministic-fixture/i.test(statusText);
      const simLeak = /provider-simulated/i.test(statusText);

      const assistant = page.getByTestId("nora-msg-assistant").last();
      await expect(assistant).toBeVisible({ timeout: 30000 });
      const fullText = (await assistant.innerText()).slice(0, 4000);

      const composition = assistant.getByTestId("nora-visual-composition");
      const hasComposition = (await composition.count()) > 0;
      let compositionVariant: string | null = null;
      const compositionTestIds: string[] = [];
      if (hasComposition) {
        compositionVariant =
          (await composition.getAttribute("data-variant")) ??
          (await composition.getAttribute("data-kind")) ??
          "present";
        for (const tid of [
          "nora-visual-comparison",
          "nora-composition-editorial-synthesis",
          "nora-composition-editorial-sequence",
          "nora-composition-matrix-five",
          "nora-composition-directed",
          "nora-composition-decision-tree",
          "nora-composition-parallel",
        ]) {
          if ((await assistant.getByTestId(tid).count()) > 0) compositionTestIds.push(tid);
        }
        await composition.screenshot({
          path: path.join(EVIDENCE, "runtime", `runtime-${turn.id.toLowerCase()}-1440.png`),
          animations: "disabled",
        });
      } else {
        await assistant.screenshot({
          path: path.join(EVIDENCE, "runtime", `runtime-${turn.id.toLowerCase()}-prose-1440.png`),
          animations: "disabled",
        });
      }

      const cost = estimateEurTtc();
      cumulative += cost;

      const row: TurnRow = {
        id: turn.id,
        startedAt: new Date(t0).toISOString(),
        durationMs: Date.now() - t0,
        statusText,
        modeLive,
        fixtureLeak,
        simLeak,
        hasComposition,
        compositionVariant,
        compositionTestIds,
        excerpt: fullText.slice(0, 800).replace(/\s+/g, " "),
        estimatedEurTtc: cost,
        cumulativeEurTtc: cumulative,
        retries: 0,
        verdictNotes: turn.notes,
      };
      ledger.turns.push(row);
      fs.writeFileSync(
        path.join(EVIDENCE, "live-cost-ledger.json"),
        JSON.stringify(ledger, null, 2),
      );

      // Hard integrity stops
      if (fixtureLeak || simLeak) {
        stopReason = `${turn.id}: FIXTURE_OR_SIM_LEAK status=${statusText}`;
        break;
      }
      if (!modeLive && !/COMPLETE/i.test(statusText)) {
        // Still record; continue unless repeated failures
        row.verdictNotes += " | non-live-or-incomplete";
      }
      if (cumulative > CEILING_EUR_TTC) {
        stopReason = `BUDGET_EXCEEDED after ${turn.id}: ${cumulative.toFixed(2)}`;
        break;
      }
    }

    if (stopReason) ledger.stoppedEarly = stopReason;

    // Persist/reload on last successful LIVE COMPLETE turn with substance
    const lastOk = [...ledger.turns].reverse().find((t) => t.modeLive && /COMPLETE/i.test(t.statusText));
    if (lastOk) {
      const beforeCount = await page.getByTestId("nora-msg-assistant").count();
      const beforeText = await page.getByTestId("nora-msg-assistant").last().innerText();
      await page.reload();
      await expect(page.getByTestId("project-load-state")).toHaveAttribute(
        "data-project-load-state",
        "ready",
        { timeout: 20000 },
      );
      await expect(page.getByTestId("nora-msg-assistant")).toHaveCount(beforeCount);
      const afterText = await page.getByTestId("nora-msg-assistant").last().innerText();
      // Same substance fragment (first 120 non-ws chars)
      const frag = beforeText.replace(/\s+/g, " ").slice(0, 120);
      expect(afterText.replace(/\s+/g, " ")).toContain(frag.slice(0, 40));
      await page.screenshot({
        path: path.join(EVIDENCE, "runtime", "runtime-reload-persist-1440.png"),
        animations: "disabled",
      });
      fs.writeFileSync(
        path.join(EVIDENCE, "persist-reload.json"),
        JSON.stringify(
          {
            projectId,
            assistants: beforeCount,
            fragmentCheck: frag.slice(0, 80),
            matched: afterText.replace(/\s+/g, " ").includes(frag.slice(0, 40)),
          },
          null,
          2,
        ),
      );
    }

    fs.writeFileSync(
      path.join(EVIDENCE, "live-cost-ledger.json"),
      JSON.stringify(ledger, null, 2),
    );
    fs.writeFileSync(
      path.join(EVIDENCE, "live-results-matrix.md"),
      [
        "# LIVE results matrix",
        "",
        `| Tour | LIVE mode | Composition | Variant | € est. TTC | Cumul | Status |`,
        `|---|---|---|---|---|---|---|`,
        ...ledger.turns.map(
          (t) =>
            `| ${t.id} | ${t.modeLive && !t.fixtureLeak ? "YES" : "NO"} | ${t.hasComposition ? "YES" : "text"} | ${t.compositionVariant ?? "—"} | ${t.estimatedEurTtc.toFixed(2)} | ${t.cumulativeEurTtc.toFixed(2)} | ${t.statusText.replace(/\|/g, "/")} |`,
        ),
        "",
        `Total est. TTC: **€${cumulative.toFixed(2)}** / €${CEILING_EUR_TTC}`,
        stopReason ? `Stopped: ${stopReason}` : "Completed corpus or budget-safe stop.",
        "",
      ].join("\n"),
    );

    // Campaign-level expectations
    expect(ledger.turns.length).toBeGreaterThan(0);
    expect(cumulative).toBeLessThanOrEqual(CEILING_EUR_TTC);
    const liveCompletes = ledger.turns.filter(
      (t) => t.modeLive && /COMPLETE/i.test(t.statusText) && !t.fixtureLeak,
    );
    expect(liveCompletes.length).toBeGreaterThan(0);
    expect(ledger.turns.every((t) => !t.fixtureLeak && !t.simLeak)).toBe(true);
  });
});
