import { describe, expect, it } from "vitest";
import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
import { composeInvestigationPartialRestitution } from "@/domains/conversation/investigation-continuation";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import { mergeInvestigationFromReply } from "@/domains/conversation/run-nora-cognitive-turn";
import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";

describe("RB-27 preventive envelope", () => {
  it("hard-stops at 200k used", () => {
    const r = evaluateGlobalResourceEnvelope({
      segmentCalls: 2,
      inputTokens: 190_000,
      outputTokens: 15_000,
      webCalls: 0,
      durationMs: 1,
      limits: [],
    });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("GLOBAL_TOKEN_BUDGET_EXHAUSTED");
  });

  it("soft-stops when reserve would be consumed on continuation", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 2,
        inputTokens: 185_000,
        outputTokens: 5_000,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      process.env,
      { reserveForRestitution: 12_000 },
    );
    expect(r.ok).toBe(false);
    expect(r.softStop).toBe(true);
  });

  it("allows first segment without reserve", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 0,
        inputTokens: 0,
        outputTokens: 0,
        webCalls: 0,
        durationMs: 0,
        limits: [],
      },
      process.env,
      { reserveForRestitution: 0, projectedNextSegmentTokens: 0 },
    );
    expect(r.ok).toBe(true);
  });

  it("does not raise ceilings above 200k/24", () => {
    const env = {
      SFIA_COGNITIVE_MAX_TOKENS: "200000",
      SFIA_COGNITIVE_MAX_SEGMENTS: "24",
    };
    const overSeg = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 24,
        inputTokens: 10,
        outputTokens: 10,
        webCalls: 0,
        durationMs: 0,
        limits: [],
      },
      env,
    );
    expect(overSeg.ok).toBe(false);
    expect(overSeg.reason).toBe("GLOBAL_SEGMENT_BUDGET_EXHAUSTED");
  });
});

describe("RB-30 conclusions capitalization", () => {
  it("merges answered questions into conclusions", () => {
    const prior = createEmptyInvestigation("investiguer conflits");
    const reply = {
      content: "Analyse des conflits de planning aboutie.",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        goal: "Comprendre les conflits",
        desiredOutcome: "Recommandations de contiguïté",
        intents: [],
        determiningQuestions: [
          {
            id: "q1",
            text: "Les créneaux contigus sont-ils autorisés ?",
            status: "ANSWERED",
            importance: "DETERMINANT",
            answerSummary: "Oui, sans tampon obligatoire.",
          },
        ],
        replyDraft: "Les tests confirment l'acceptation des créneaux contigus.",
      },
      observedToolSources: [
        {
          kind: "GIT",
          ref: "tests/booking.ts",
          title: "Tests conflits",
          coverage: "CONSULTED",
        },
      ],
    } as unknown as NoraGenerateResult;

    const next = mergeInvestigationFromReply(prior, reply, "investiguer");
    expect(next.conclusions?.length).toBeGreaterThan(0);
    expect(next.conclusions?.some((c) => /contigu/i.test(c))).toBe(true);
  });
});

describe("RB-28/B5 restitution", () => {
  it("surfaces prior conclusions instead of raw GLOBAL_TOKEN code", () => {
    const state = createEmptyInvestigation("note");
    state.conclusions = [
      "Créneaux contigus acceptés sans tampon — tests de conflit lus.",
    ];
    state.sources = [
      {
        kind: "GIT",
        ref: "src/booking.ts",
        title: "booking.ts",
        coverage: "CONSULTED",
      },
    ];
    const text = composeInvestigationPartialRestitution({
      state,
      suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
      production: {
        kind: "REPLY",
        status: "PARTIAL",
        parts: [],
        contentMarkdown: "Synthèse métier déjà produite sur le travail précédent.",
      },
    });
    expect(text).not.toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);
    expect(text).toMatch(/limite de ressources/i);
    expect(text).toMatch(/Créneaux contigus/);
    expect(text).not.toMatch(/Aucune conclusion métier fiable n'a été consolidée/);
  });
});
