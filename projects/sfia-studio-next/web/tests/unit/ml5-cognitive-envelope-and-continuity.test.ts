import { describe, expect, it } from "vitest";
import {
  COGNITIVE_DEFAULT_MAX_TOKENS,
  COGNITIVE_DEFAULT_REEVAL_TOKENS,
  evaluateGlobalResourceEnvelope,
} from "@/domains/conversation/cognitive-work";
import { composeInvestigationPartialRestitution } from "@/domains/conversation/investigation-continuation";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import {
  mergeInvestigationFromReply,
  semanticContinueWork,
} from "@/domains/conversation/run-nora-cognitive-turn";
import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";
import { contentBodySha256, contentSha256 } from "@/domains/conversation/document-command";
import { extractSectionHintFromPilotText } from "@/domains/conversation/document-act";

describe("adaptive resource envelope (1M reeval / 2M admin)", () => {
  it("allows work under 2M with default calibration", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 10,
        inputTokens: 1_050_000,
        outputTokens: 50_000,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      {
        SFIA_COGNITIVE_MAX_TOKENS: String(COGNITIVE_DEFAULT_MAX_TOKENS),
        SFIA_COGNITIVE_MAX_SEGMENTS: "120",
        SFIA_COGNITIVE_REEVAL_TOKENS: String(COGNITIVE_DEFAULT_REEVAL_TOKENS),
      },
    );
    expect(r.ok).toBe(true);
    expect(r.reevaluationNeeded).toBe(true);
  });

  it("hard-stops at 2M used", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 2,
        inputTokens: 1_900_000,
        outputTokens: 150_000,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      {
        SFIA_COGNITIVE_MAX_TOKENS: "2000000",
        SFIA_COGNITIVE_MAX_SEGMENTS: "120",
      },
    );
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("GLOBAL_TOKEN_BUDGET_EXHAUSTED");
  });

  it("soft-stops when reserve would be consumed on continuation", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 2,
        inputTokens: 1_980_000,
        outputTokens: 5_000,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      { SFIA_COGNITIVE_MAX_TOKENS: "2000000" },
      { reserveForRestitution: 24_000 },
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
      { SFIA_COGNITIVE_MAX_TOKENS: "2000000" },
      { reserveForRestitution: 0, projectedNextSegmentTokens: 0 },
    );
    expect(r.ok).toBe(true);
  });

  it("honours configurable segment anti-loop ceiling", () => {
    const env = {
      SFIA_COGNITIVE_MAX_TOKENS: "2000000",
      SFIA_COGNITIVE_MAX_SEGMENTS: "120",
    };
    const overSeg = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 120,
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

  it("still respects an explicit 200k env override", () => {
    const r = evaluateGlobalResourceEnvelope(
      {
        segmentCalls: 2,
        inputTokens: 190_000,
        outputTokens: 15_000,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
    );
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("GLOBAL_TOKEN_BUDGET_EXHAUSTED");
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
        ref: "a.ts",
        title: "a",
        coverage: "CONSULTED",
      },
    ];
    const text = composeInvestigationPartialRestitution({
      state,
      suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
    });
    expect(text).toMatch(/contigu/i);
    expect(text).not.toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);
  });
});

describe("C1 contentSha256 pair vs body", () => {
  it("pair digest differs from body-only when title is non-empty", () => {
    const title = "Note de recommandation";
    const body = "# Note\n\nContenu métier.";
    const pair = contentSha256(title, body);
    const bodyOnly = contentBodySha256(body);
    expect(pair).not.toBe(bodyOnly);
    expect(contentSha256(title, body)).toBe(pair);
  });
});

describe("C2 section hint authority", () => {
  it("ignores bare section mentions used as reference", () => {
    const hint = extractSectionHintFromPilotText(
      "Comme indiqué en section 1, prépare une synthèse sans modifier le document.",
    );
    expect(hint).toBeNull();
  });

  it("recovers intentional multi-section revision targets", () => {
    const hint = extractSectionHintFromPilotText(
      "Intègre ces précisions dans la section 2 et dans la section 3.",
    );
    expect(hint).toMatch(/2/);
    expect(hint).toMatch(/3/);
  });
});

describe("B3 inventory-incomplete continuation", () => {
  it("continues when Nora declares COMPLETE but inventory remains open", () => {
    const inv = createEmptyInvestigation("Examine intégralement les 50 documents");
    inv.inventoryTotal = 50;
    inv.inventoryExamined = 32;
    inv.sources = [
      {
        kind: "GIT",
        ref: "a.md",
        title: "a",
        coverage: "CONSULTED",
      },
    ];
    const reply = {
      content: "Synthèse partielle",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: "COMPLETE",
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [
        { kind: "GIT", ref: "a.md", title: "a", coverage: "CONSULTED" },
      ],
    } as unknown as NoraGenerateResult;
    // D3 — COMPLETE disposition wins over incomplete inventory (no more force-continue).
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(false);
  });

  it("continues incomplete inventory only when disposition is CONTINUE", () => {
    const inv = createEmptyInvestigation("Examine le périmètre déclaré");
    inv.inventoryTotal = 5;
    inv.inventoryExamined = 2;
    inv.inventoryDenied = 0;
    inv.sources = [
      { kind: "GIT", ref: "a.md", title: "a", coverage: "CONSULTED" },
      { kind: "GIT", ref: "b.md", title: "b", coverage: "CONSULTED" },
    ];
    const reply = {
      content: "Suite",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: "CONTINUE",
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [
        { kind: "GIT", ref: "a.md", title: "a", coverage: "CONSULTED" },
      ],
    } as unknown as NoraGenerateResult;
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(true);
  });

  it("respects AWAIT_PILOT even when inventory incomplete", () => {
    const inv = createEmptyInvestigation("Investigate");
    inv.inventoryTotal = 10;
    inv.inventoryExamined = 3;
    const reply = {
      content: "Clarification requise",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: "AWAIT_PILOT",
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [],
    } as unknown as NoraGenerateResult;
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(false);
  });

  it("continues when inventory is declared but no source recorded yet and disposition unset", () => {
    const inv = createEmptyInvestigation("Examine le périmètre");
    inv.inventoryTotal = 5;
    inv.inventoryExamined = 0;
    const reply = {
      content: "Accès Git indisponible pour l’instant",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: undefined,
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [],
    } as unknown as NoraGenerateResult;
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(true);
  });

  it("stops when COMPLETE is declared even if no source recorded yet", () => {
    const inv = createEmptyInvestigation("Examine le périmètre");
    inv.inventoryTotal = 5;
    inv.inventoryExamined = 0;
    const reply = {
      content: "Accès Git indisponible pour l’instant",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: "COMPLETE",
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [],
    } as unknown as NoraGenerateResult;
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(false);
  });

  it("stops when inventory is complete and disposition is COMPLETE", () => {
    const inv = createEmptyInvestigation("done");
    inv.inventoryTotal = 3;
    inv.inventoryExamined = 3;
    inv.sources = [
      { kind: "GIT", ref: "a", title: "a", coverage: "CONSULTED" },
      { kind: "GIT", ref: "b", title: "b", coverage: "CONSULTED" },
      { kind: "GIT", ref: "c", title: "c", coverage: "CONSULTED" },
    ];
    const reply = {
      content: "Synthèse",
      status: "COMPLETE",
      qualification: {
        status: "QUALIFIED",
        workDisposition: "COMPLETE",
        goal: "Synthèse",
        desiredOutcome: "Synthèse",
        intents: [],
        determiningQuestions: [],
      },
      observedToolSources: [],
    } as unknown as NoraGenerateResult;
    expect(semanticContinueWork(reply.qualification!, inv, reply)).toBe(false);
  });
});
