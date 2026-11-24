import { describe, expect, it } from "vitest";
import {
  accumulateResources,
  evaluateGlobalResourceEnvelope,
} from "@/domains/conversation/cognitive-work";
import { evaluateContractReadiness, createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import { recordToolSource, createToolSourceJournal } from "@/domains/conversation/tool-source-journal";
import { draftBodyFromInvestigation } from "@/domains/conversation/nora-contract-bridge";
import { assertPublicDnsEgress } from "@/domains/conversation/web-egress-guard";

describe("ML5 C15 — cognitive conductor foundations", () => {
  it("accumulates resources across segments without reset", () => {
    const a = accumulateResources(
      { segmentCalls: 1, inputTokens: 100, outputTokens: 50, webCalls: 1 },
      { segmentCalls: 1, inputTokens: 80, outputTokens: 40, webCalls: 2 },
    );
    expect(a.segmentCalls).toBe(2);
    expect(a.inputTokens).toBe(180);
    expect(a.outputTokens).toBe(90);
    expect(a.webCalls).toBe(3);
  });

  it("suspends on global segment envelope", () => {
    const r = evaluateGlobalResourceEnvelope(
      { segmentCalls: 8 },
      { SFIA_COGNITIVE_MAX_SEGMENTS: "8" },
    );
    expect(r.ok).toBe(false);
    expect(r.reason).toMatch(/SEGMENT/);
  });

  it("excludes verified cacheTokens from token envelope billable input", () => {
    const withoutCache = evaluateGlobalResourceEnvelope(
      { segmentCalls: 2, inputTokens: 180_000, outputTokens: 30_000 },
      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
    );
    expect(withoutCache.ok).toBe(false);
    expect(withoutCache.reason).toMatch(/TOKEN/);
    const withCache = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 2,
        inputTokens: 180_000,
        outputTokens: 30_000,
        cacheTokens: 120_000,
      },
      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
    );
    expect(withCache.ok).toBe(true);
  });

  it("allows source coverage degradation (non-monotonic)", () => {
    const j = createToolSourceJournal();
    recordToolSource(j, { kind: "D4", ref: "doc:1", coverage: "CONSULTED" });
    recordToolSource(j, { kind: "D4", ref: "doc:1", coverage: "STALE", notes: "new revision" });
    expect(j.entries).toHaveLength(1);
    expect(j.entries[0]!.coverage).toBe("STALE");
    expect(j.entries[0]!.notes).toMatch(/CONSULTED->STALE/);
  });

  it("draft instruction is not capped at 24000 chars", () => {
    const long = "X".repeat(30_000);
    const inv = evaluateContractReadiness({
      ...createEmptyInvestigation("mission TVA"),
      desiredOutcome: "TVA export 0%",
      sources: [{ kind: "D4", ref: "spec", coverage: "CONSULTED" }],
      questions: [
        {
          id: "q1",
          text: "Régime?",
          status: "ANSWERED",
          importance: "DETERMINANT",
          answerSummary: "export",
        },
      ],
      remainingWork: Array.from({ length: 12 }, (_, i) => `critère métier ${i + 1}`),
    });
    const body = draftBodyFromInvestigation(inv, { instructionFromNora: long });
    expect(body.instructionText.length).toBeGreaterThan(24_000);
    expect(body.acceptance.criteria).toHaveLength(12);
  });

  it("DNS egress rejects private IP literals", async () => {
    const r = await assertPublicDnsEgress("https://127.0.0.1/secret");
    expect(r.ok).toBe(false);
  });
});
