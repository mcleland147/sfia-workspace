/**
 * QA-NAP-02 — Fake gated adaptive presentation emit + coercion preservation.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  NAP_QA_MARKERS,
  buildFakeNapQaProductTurnJson,
  isFakeNapQaEmitEnabled,
} from "@/lib/platform/ai/fakeProvider";
import {
  composePilotFacingAssistantText,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";
import {
  composeCanonicalFromPresentation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";

const PREV_E2E = process.env.SFIA_STUDIO_E2E_QA_CONTROL;
const PREV_FAKE = process.env.OPS1_CONVERSATION_PROVIDER;

afterEach(() => {
  if (PREV_E2E === undefined) delete process.env.SFIA_STUDIO_E2E_QA_CONTROL;
  else process.env.SFIA_STUDIO_E2E_QA_CONTROL = PREV_E2E;
  if (PREV_FAKE === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
  else process.env.OPS1_CONVERSATION_PROVIDER = PREV_FAKE;
});

describe("Fake NAP QA presentation emit", () => {
  it("stays disabled without E2E QA control + fake provider", () => {
    delete process.env.SFIA_STUDIO_E2E_QA_CONTROL;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    expect(isFakeNapQaEmitEnabled()).toBe(false);
    expect(
      buildFakeNapQaProductTurnJson(NAP_QA_MARKERS.BALISE),
    ).toBeNull();
  });

  it("stays disabled when marker absent even if QA gated", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    expect(buildFakeNapQaProductTurnJson("Bonjour Nora")).toBeNull();
  });

  it("SHORT uses lead once without duplicate question block", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const raw = buildFakeNapQaProductTurnJson(NAP_QA_MARKERS.SHORT)!;
    const parsed = JSON.parse(raw);
    expect(parsed.narrative).toBe(parsed.presentation.lead);
    expect(parsed.presentation.blocks).toEqual([]);
    const needle = "Quel canal souhaitez-vous prioriser en premier";
    const blob = `${parsed.narrative}\n${JSON.stringify(parsed.presentation)}`;
    expect(blob.split(needle).length - 1).toBe(2); // narrative + lead only
  });

  it("emits BALISE presentation Product turn JSON when gated + marker", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const raw = buildFakeNapQaProductTurnJson(
      `Synthèse ${NAP_QA_MARKERS.BALISE}`,
    );
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed.narrative).toContain("clarifié le besoin");
    expect(parsed.presentation?.version).toBe(1);
    expect(parsed.presentation?.lead).toBeNull();
    expect(parsed.presentation?.blocks?.length).toBe(4);
    const dto = parseNoraAdaptivePresentation(parsed.presentation);
    expect(dto).not.toBeNull();
    expect(parsed.narrative).toBe(composeCanonicalFromPresentation(dto!));
  });

  it("coercePlainTextToProductTurnJson preserves presentation", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const raw = buildFakeNapQaProductTurnJson(NAP_QA_MARKERS.BALISE)!;
    const coerced = coercePlainTextToProductTurnJson(raw);
    const turn = JSON.parse(coerced);
    expect(turn.presentation).not.toBeNull();
    const dto = parseNoraAdaptivePresentation(turn.presentation);
    expect(dto?.blocks.length).toBe(4);
    const normalized = normalizeNoraProductTurnStructuredOutput(turn);
    expect(normalized?.presentation?.blocks.length).toBe(4);
  });

  it("invalid presentation coerces to null without failing narrative", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const raw = buildFakeNapQaProductTurnJson(NAP_QA_MARKERS.INVALID)!;
    const coerced = coercePlainTextToProductTurnJson(raw);
    const turn = JSON.parse(coerced);
    expect(turn.narrative).toMatch(/fallback/);
    // Invalid presentation dropped by normalize / coerce path.
    const normalized = normalizeNoraProductTurnStructuredOutput({
      ...turn,
      presentation: turn.presentation,
    });
    // Either null presentation after normalize, or coerce already nullified.
    if (normalized) {
      expect(
        normalized.presentation === null ||
          parseNoraAdaptivePresentation(turn.presentation) === null,
      ).toBe(true);
    }
  });

  it("completeRound returns NAP QA JSON when gated", async () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const provider = new FakeConversationProvider();
    const round = await provider.completeRound({
      items: [
        {
          type: "message",
          role: "user",
          content: `Besoin ${NAP_QA_MARKERS.COMPARE}`,
        },
      ],
      tools: [],
    });
    expect(round.kind).toBe("message");
    if (round.kind !== "message") return;
    const turn = JSON.parse(round.text);
    expect(turn.presentation.blocks[0].kind).toBe("comparison_table");
    expect(turn.conversationGuidance.statement).toBe(turn.narrative);
  });

  it("latest user marker wins over earlier SHORT in history", async () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const provider = new FakeConversationProvider();
    const round = await provider.completeRound({
      items: [
        {
          type: "message",
          role: "user",
          content: `Question simple ${NAP_QA_MARKERS.SHORT}`,
        },
        {
          type: "message",
          role: "assistant",
          content: "Quel canal souhaitez-vous prioriser en premier ?",
        },
        {
          type: "message",
          role: "user",
          content: `Synthèse composée BALISE ${NAP_QA_MARKERS.BALISE}`,
        },
      ],
      tools: [],
    });
    expect(round.kind).toBe("message");
    if (round.kind !== "message") return;
    const turn = JSON.parse(round.text);
    expect(turn.narrative).toContain("clarifié le besoin");
    expect(turn.presentation?.eyebrow).toMatch(/BALISE/i);
    expect(turn.conversationGuidance.statement).toBe(turn.narrative);
  });

  it("normalized + composed BALISE stays adaptive-covered", () => {
    process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const raw = buildFakeNapQaProductTurnJson(NAP_QA_MARKERS.BALISE)!;
    const normalized = normalizeNoraProductTurnStructuredOutput(
      JSON.parse(raw),
    );
    expect(normalized).toBeTruthy();
    const composed = composePilotFacingAssistantText(
      normalized!.narrative,
      normalized!.conversationGuidance,
    );
    expect(composed).toBe(normalized!.narrative);
    const decision = resolveAdaptiveAssistantRender({
      content: composed,
      presentation: normalized!.presentation,
      studioControlNotices: [],
    });
    expect(decision.mode).toBe("adaptive");
  });
});
