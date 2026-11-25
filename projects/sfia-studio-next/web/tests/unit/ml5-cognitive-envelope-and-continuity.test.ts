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
