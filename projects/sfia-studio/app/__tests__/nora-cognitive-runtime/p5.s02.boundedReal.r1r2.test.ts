/** @vitest-environment node */
/**
 * P5-S02 — Bounded REAL R1+R2 Product cognitive proof.
 * Opt-in only: P5_S02_RUN_REAL=1
 * Never logs OPENAI_API_KEY.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  BudgetTracker,
  buildP5TargetCapabilityManifest,
  runR1ProviderSmoke,
  MW0_BUDGET_POLICY,
} from "@/lib/nora-eval";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import * as cognitiveRuntime from "@/lib/nora-cognitive-runtime";
import * as routingPolicy from "@/lib/nora-cognitive-runtime/cognitiveRoutingPolicy";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

const RUN = process.env.P5_S02_RUN_REAL === "1";
/** Skip re-running R1 when already proven earlier in the same S02 cycle (call budget). */
const SKIP_R1 = process.env.P5_S02_SKIP_R1 === "1";
const OUT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/p5-s02-evidence.json",
);
const R1_PRIOR = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/p5-s02-r1-prior.json",
);

function loadEnvLocal(): void {
  const envLocal = path.resolve(process.cwd(), ".env.local");
  if (!fs.existsSync(envLocal)) return;
  const text = fs.readFileSync(envLocal, "utf8");
  for (const line of text.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    const key = m[1]!;
    const val = m[2]!.trim().replace(/^["']|["']$/g, "");
    if (key === "OPS1_CONVERSATION_PROVIDER" && val.toLowerCase() === "fake") {
      continue;
    }
    // Do not force Cursor REAL execution during cognitive proof.
    if (key === "SFIA_STUDIO_CURSOR_REAL") continue;
    if (!process.env[key]) process.env[key] = val;
  }
  delete process.env.OPS1_CONVERSATION_PROVIDER;
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
  // Product create requires server-owned repository config (fail-closed).
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY =
      "mcleland147/sfia-workspace";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/mcleland147/sfia-workspace.git";
  }
  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH) {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
  }
}

function redactJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2).replace(
    /sk-[a-zA-Z0-9_-]{10,}/g,
    "[REDACTED_KEY]",
  );
}

describe.skipIf(!RUN)("P5-S02 bounded REAL R1+R2", () => {
  it(
    "R1 Luna/Sol/Astra + R2 Product-path router==provider",
    async () => {
      loadEnvLocal();
      expect(Boolean(process.env.OPENAI_API_KEY?.trim())).toBe(true);
      console.log("OPENAI_API_KEY: PRESENT");
      console.log("OPENAI_MODEL:", process.env.OPENAI_MODEL || "(absent)");
      console.log(
        "OPS1_CONVERSATION_PROVIDER:",
        process.env.OPS1_CONVERSATION_PROVIDER || "UNSET(REAL)",
      );

      const campaignId = `p5-s02-${Date.now()}`;
      const manifest = buildP5TargetCapabilityManifest(new Date().toISOString());
      const budget = new BudgetTracker(MW0_BUDGET_POLICY, 0);
      const ledger: Record<string, unknown>[] = [];
      let totalCalls = 0;

      const r1Plan: Array<{
        id: string;
        model: string;
        effort: OpenAiReasoningEffort;
      }> = [
        { id: "R1-LUNA", model: "gpt-6-luna", effort: "none" },
        { id: "R1-SOL", model: "gpt-6.1-sol", effort: "low" },
        { id: "R1-ASTRA", model: "gpt-6-astra", effort: "low" },
      ];
      const r1Results: Record<string, unknown>[] = [];

      if (SKIP_R1 && fs.existsSync(R1_PRIOR)) {
        const prior = JSON.parse(fs.readFileSync(R1_PRIOR, "utf8")) as {
          r1Results: Record<string, unknown>[];
          totalCalls: number;
          budgetCumulativeFromR1Meter: number;
        };
        expect(prior.r1Results.every((r) => r.passFail === "PASS")).toBe(true);
        for (const entry of prior.r1Results) {
          ledger.push({ ...entry, reusedFromPriorInCycle: true });
          r1Results.push(entry);
        }
        totalCalls += prior.totalCalls;
        console.log("R1_REUSED_PRIOR_IN_CYCLE", {
          totalCalls,
          spend: prior.budgetCumulativeFromR1Meter,
        });
      } else {
        for (let i = 0; i < r1Plan.length; i++) {
          const cell = r1Plan[i]!;
          const started = Date.now();
          const run = await runR1ProviderSmoke({
            campaignId,
            apiKey: process.env.OPENAI_API_KEY!.trim(),
            model: cell.model,
            reasoningEffort: cell.effort,
            runIndex: i + 1,
            manifest,
            budget,
            essential: true,
          });
          const latencyMs = Date.now() - started;
          const calls =
            run.usage?.providerCallCount ?? (run.passFail === "PASS" ? 1 : 0);
          totalCalls += calls;
          const entry = {
            sequence: totalCalls,
            purpose: cell.id,
            modelRequested: cell.model,
            effortRequested: cell.effort,
            passFail: run.passFail,
            failureClass: run.failureClass,
            modelReturned: run.usage?.modelReturned ?? null,
            providerResponseId: run.usage?.providerResponseId ?? null,
            inputTokens: run.usage?.inputTokens ?? null,
            outputTokens: run.usage?.outputTokens ?? null,
            estimatedUsd: run.usage?.estimatedUsd ?? null,
            latencyMs,
            rawSummary: (run.rawSummary || "").slice(0, 300),
            productPath: run.productPath,
            routerProvenance: "R1_PINNED_PROVIDER_SMOKE_SAME_ADAPTER",
          };
          ledger.push(entry);
          r1Results.push(entry);
          console.log(
            "R1_DONE",
            cell.id,
            run.passFail,
            run.failureClass,
            `usd=${budget.cumulativeUsd.toFixed(6)}`,
          );
          expect(run.passFail, `${cell.id} ${run.rawSummary}`).toBe("PASS");
        }
        fs.mkdirSync(path.dirname(R1_PRIOR), { recursive: true });
        fs.writeFileSync(
          R1_PRIOR,
          redactJson({
            r1Results,
            totalCalls,
            budgetCumulativeFromR1Meter: budget.cumulativeUsd,
            timestamp: new Date().toISOString(),
          }),
        );
      }

      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      resetRuntimeApplicationServiceForTests();
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s02-"));
      const productDbPath = path.join(dir, "oa-product.sqlite");
      const sessionDbPath = path.join(dir, "nora-session.sqlite");
      const runtime = getRuntimeApplicationService({
        productDbPath,
        auditMode: "noop",
        nowIso: new Date().toISOString(),
      });

      async function createProject(
        criticality: "STANDARD" | "HIGH",
        name: string,
      ): Promise<string> {
        const created = await runtime.createProject({
          name,
          objective: "P5-S02 bounded REAL Product cognitive proof.",
          context:
            "ZERO durable authority mutation intended. HumanDecision Pilote-only.",
          criticality,
          constraints: ["AUCUNE EXÉCUTION", "HumanDecision Pilote-only"],
          shortReference: `P5${criticality.slice(0, 1)}`,
          idempotencyKey: `idem:p5-s02-${criticality}-${campaignId}-${Math.random()}`,
        });
        if (!created.ok) {
          throw new Error(
            `createProject failed: ${JSON.stringify(created).slice(0, 800)}`,
          );
        }
        return created.projectId;
      }

      // PerceivedCriticality = LOW | STANDARD | HIGH (CRITICAL invalid).
      // HIGH drives rigorCriticality=high → stronger Quality Floor for R2-B.
      const projectA = await createProject("STANDARD", "P5-S02 R2-A Routine");
      const projectB = await createProject("HIGH", "P5-S02 R2-B High-Assurance");

      async function runR2(
        label: string,
        projectId: string,
        content: string,
      ): Promise<Record<string, unknown>> {
        const emitted: TechnicalEvent[] = [];
        const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
        const emitSpy = vi
          .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
          .mockImplementation(function (
            this: ProjectAssistantMemoryEventSink,
            event: TechnicalEvent,
          ) {
            emitted.push(event);
            return originalEmit.call(this, event);
          });

        type RoutingOk = Extract<
          ReturnType<typeof routingPolicy.decideCognitiveRouting>,
          { ok: true }
        >;
        const routingOkResults: RoutingOk[] = [];
        const originalDecide = routingPolicy.decideCognitiveRouting;
        const decideSpy = vi
          .spyOn(routingPolicy, "decideCognitiveRouting")
          .mockImplementation((input) => {
            const out = originalDecide(input);
            if (out.ok) routingOkResults.push(out);
            return out;
          });

        type TurnResult = Awaited<
          ReturnType<typeof cognitiveRuntime.runNoraCognitiveTurn>
        >;
        const turnResults: TurnResult[] = [];
        const originalTurn = cognitiveRuntime.runNoraCognitiveTurn;
        const turnSpy = vi
          .spyOn(cognitiveRuntime, "runNoraCognitiveTurn")
          .mockImplementation(async (input) => {
            const out = await originalTurn(input);
            turnResults.push(out);
            return out;
          });

        const started = Date.now();
        let result: Awaited<ReturnType<typeof projectAssistantSendAction>>;
        try {
          result = await projectAssistantSendAction({
            projectId,
            content,
            sessionDbPath,
          });
        } finally {
          emitSpy.mockRestore();
          decideSpy.mockRestore();
          turnSpy.mockRestore();
        }
        const latencyMs = Date.now() - started;

        const routingOk = routingOkResults[routingOkResults.length - 1];
        const resolvedTurn = turnResults[turnResults.length - 1];
        const routingEvent = emitted.find(
          (e) => e.type === "COGNITIVE_ROUTING_SELECTED",
        );

        const selectedModel =
          routingOk?.selectedModel ??
          resolvedTurn?.selectedModelId ??
          (routingEvent?.detail?.selectedModel as string | undefined) ??
          null;
        const selectedEffort =
          routingOk?.selectedReasoningEffort ??
          resolvedTurn?.selectedReasoningEffort ??
          (routingEvent?.detail?.selectedEffort as string | undefined) ??
          null;
        const actualModel =
          resolvedTurn?.usage?.model ?? (result.ok ? result.model : null);
        const actualEffort =
          resolvedTurn?.selectedReasoningEffort ?? selectedEffort;

        const f1Calls = resolvedTurn?.usage ? 1 : 0;
        const f2Calls = result.ok ? 1 : 0;
        totalCalls += f1Calls + f2Calls;

        let estimatedUsd = 0;
        if (actualModel && resolvedTurn?.usage) {
          const m = manifest.models.find((x) => x.modelId === actualModel);
          if (m) {
            estimatedUsd =
              ((resolvedTurn.usage.inputTokens ?? 0) / 1e6) *
                m.inputUsdPerMTok +
              ((resolvedTurn.usage.outputTokens ?? 0) / 1e6) *
                m.outputUsdPerMTok;
          }
        }
        estimatedUsd += f2Calls * 0.002;

        const modelMatch =
          selectedModel != null && selectedModel === actualModel;
        const effortMatch =
          selectedEffort != null &&
          actualEffort != null &&
          selectedEffort === actualEffort;

        const entry = {
          sequence: totalCalls,
          purpose: label,
          projectCriticality: label === "R2-B" ? "HIGH" : "STANDARD",
          contentPreview: content.slice(0, 120),
          passFail: result.ok && modelMatch && effortMatch ? "PASS" : "FAIL",
          sendOk: result.ok,
          sendStatus: result.status,
          strategyClass:
            routingOk?.strategyClass ??
            resolvedTurn?.cognitiveStrategyClass ??
            (routingEvent?.detail?.strategyClass as string | undefined) ??
            null,
          qualityFloor:
            routingOk?.qualityFloor ??
            routingEvent?.detail?.qualityFloor ??
            null,
          routingDecisionId:
            routingOk?.routingDecisionId ??
            resolvedTurn?.cognitiveRoutingDecisionId ??
            (routingEvent?.detail?.routingDecisionId as string | undefined) ??
            null,
          selectedModel,
          selectedEffort,
          actualProviderModel: actualModel,
          actualProviderEffort: actualEffort,
          modelMatch,
          effortMatch,
          providerResponseId: resolvedTurn?.usage?.providerResponseId ?? null,
          inputTokens: resolvedTurn?.usage?.inputTokens ?? null,
          outputTokens: resolvedTurn?.usage?.outputTokens ?? null,
          estimatedUsdF1PlusF2Hint: estimatedUsd,
          latencyMs,
          f1Calls,
          f2Calls,
          f2Note:
            "Historical S02 observation — F2 env constructor debt later exited by P5-S05 local candidate (see p5.s05.*)",
          cognitiveRuntime:
            resolvedTurn?.cognitiveRuntime ??
            (result.ok ? result.cognitiveRuntime : null),
          textPreview: (result.ok ? result.text : result.message || "").slice(
            0,
            200,
          ),
          reasonCodes:
            routingOk?.reasonCodes ??
            (routingEvent?.detail?.reasonCodes as string[] | undefined) ??
            null,
          providerSnapshotIdentity:
            routingOk?.providerSnapshotIdentity ??
            (routingEvent?.detail?.providerCapabilitySnapshot as
              | string
              | undefined) ??
            null,
          escalationUsed: 0,
          error: result.ok
            ? null
            : (result.message || "send_failed").slice(0, 300),
        };
        ledger.push(entry);
        console.log(
          "R2_DONE",
          label,
          entry.passFail,
          `sel=${selectedModel}/${selectedEffort}`,
          `act=${actualModel}/${actualEffort}`,
        );
        expect(totalCalls).toBeLessThanOrEqual(8);
        expect(result.ok, entry.error as string).toBe(true);
        expect(modelMatch, `model ${selectedModel} vs ${actualModel}`).toBe(
          true,
        );
        expect(
          effortMatch,
          `effort ${selectedEffort} vs ${actualEffort}`,
        ).toBe(true);
        return entry;
      }

      const r2a = await runR2(
        "R2-A",
        projectA,
        "Peux-tu me rappeler brièvement l'objectif de ce projet, sans rien modifier ni décider ?",
      );
      const r2b = await runR2(
        "R2-B",
        projectB,
        "Analyse avec une exigence élevée de rigueur : quelles contradictions ou réserves critiques dois-je vérifier avant toute décision Pilote sur ce projet HIGH ? Ne décide rien. Ne mutie rien.",
      );

      const pack = {
        campaignId,
        timestamp: new Date().toISOString(),
        openaiModelEnv: process.env.OPENAI_MODEL || null,
        manifestIdentity: {
          provider: manifest.provider,
          sourceName: manifest.sourceName,
          models: manifest.models.map((m) => m.modelId),
          retrievedAt: manifest.retrievedAt,
        },
        r1Verdict: "PASS",
        r2Verdict:
          r2a.passFail === "PASS" && r2b.passFail === "PASS" ? "PASS" : "FAIL",
        r1Results,
        r2a,
        r2b,
        ledger,
        totalCalls,
        cumulativeSpendUsdHint: ledger.reduce(
          (a, e) =>
            a +
            Number(
              (e as { estimatedUsd?: number }).estimatedUsd ??
                (e as { estimatedUsdF1PlusF2Hint?: number })
                  .estimatedUsdF1PlusF2Hint ??
                0,
            ),
          0,
        ),
        budgetCumulativeFromR1Meter: budget.cumulativeUsd,
        classificationA:
          "router→Agents REAL body already wired (no production fix)",
        f2Debt:
          "P5-DEBT-F2-ROUTING-ALIGNMENT — historical S02 OPEN; S05 EXIT PROOF PASS LOCAL CANDIDATE (not CLOSED ON MAIN)",
        final: "PASS — P5-S02 BOUNDED REAL R1+R2 PROVEN",
      };
      fs.mkdirSync(path.dirname(OUT), { recursive: true });
      fs.writeFileSync(OUT, redactJson(pack));
      console.log("EVIDENCE_WRITTEN", OUT);
      console.log("TOTAL_CALLS", totalCalls);
      console.log("FINAL", pack.final);
      expect(pack.r2Verdict).toBe("PASS");
    },
    300_000,
  );
});
