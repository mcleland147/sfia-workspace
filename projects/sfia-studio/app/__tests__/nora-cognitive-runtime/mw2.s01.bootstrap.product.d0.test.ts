/** @vitest-environment node */
/**
 * CORR-MW2-DLV-01 + CORR-MW2-DLV-05 — product orchestration seam bootstrap
 * and client-boundary proof.
 *
 * Strategy is observed via INTERNAL EventSink telemetry
 * (COGNITIVE_STRATEGY_SELECTED), NOT via ProjectAssistantSendResult.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { ProjectAssistantMemoryEventSink } from "@/features/project-assistant/memoryEventSink";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

const tempDirs: string[] = [];

describe("CORR-MW2-DLV-01/05 — product path CWP bootstrap + client boundary", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  let emitSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    emitSpy?.mockRestore();
    emitSpy = undefined;
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("CORR-D0-06 — ordinary product turn Focused via internal EventSink, not client DTO", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw2-boot-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");

    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW2 Bootstrap",
      objective: "Ordinary informative ask",
      context: "Insufficient CWP truth",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW2B",
      idempotencyKey: `idem:mw2-boot-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");

    const emitted: TechnicalEvent[] = [];
    const originalEmit = ProjectAssistantMemoryEventSink.prototype.emit;
    emitSpy = vi
      .spyOn(ProjectAssistantMemoryEventSink.prototype, "emit")
      .mockImplementation(function (
        this: ProjectAssistantMemoryEventSink,
        event: TechnicalEvent,
      ) {
        emitted.push(event);
        return originalEmit.call(this, event);
      });

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Ordinary informative answer. AUCUNE EXÉCUTION.",
        },
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content: "Quel est le statut du projet ?",
      provider,
      sessionDbPath,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("turn failed");

    // CORR-D0-09 — internal EventSink observes strategy selection
    const strategyEvents = emitted.filter(
      (e) => e.type === "COGNITIVE_STRATEGY_SELECTED",
    );
    expect(strategyEvents.length).toBeGreaterThanOrEqual(1);
    const detail = strategyEvents[0]!.detail;
    expect(detail.strategyClass).toBe("Focused");
    expect(detail.bootstrapUsed).toBe(true);
    expect(detail.criticalChallengeArmed).not.toBe(true);

    // CORR-D0-08 — client DTO must not serialize CWP internals
    expect(result).not.toHaveProperty("cognitiveStrategyClass");
    expect(result).not.toHaveProperty("selectedReasoningEffort");
    expect(result).not.toHaveProperty("criticalChallengeArmed");

    // CORR-D0-11 — expected user/business + MW1 fields remain
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.memoryBAvailability).toBeDefined();
    expect(result.ephemeralNotice).toBeTruthy();
    expect(result.project.projectId).toBe(created.projectId);

    // CORR-D0-10 — strategy telemetry not converted to toolEvents/sources
    const { toolEvents, sources } = collectToolTelemetry(emitted);
    expect(JSON.stringify(toolEvents)).not.toContain("strategyClass");
    expect(JSON.stringify(sources)).not.toContain("strategyClass");
    expect(
      toolEvents.some((t) => /COGNITIVE_STRATEGY/i.test(t.toolName)),
    ).toBe(false);
  });
});
