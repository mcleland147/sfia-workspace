import { describe, expect, it } from "vitest";
import {
  consolidateAttachedDossierQuestions,
  formatDossierComposerAttachment,
  isDossierJoinQuestion,
  mergeDraftWithDossierAttachment,
  parseStructuredDossierComposerAttachment,
} from "@/domains/conversation/dossier-composer-attachment";
import {
  mergeInvestigationFromReply,
  mergeQuestions,
} from "@/domains/conversation/run-nora-cognitive-turn";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function qual(partial: Partial<NoraTurnQualification>): NoraTurnQualification {
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    goal: "ajouter processWidgetMaxLen",
    projectIntention: "",
    desiredOutcome: "fonction maxLen + tests",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "ok",
    ...partial,
  };
}

const CANON_ATTACHMENT = {
  attemptId: "efx_f9127c71-900f-449a-ba0f-74e044b36f66",
  contractId: "tctr_216cc6c2-a5bc-4d6a-a309-1f682d09b627",
  handoffId: "rhf_287919ef-b4af-48c8-9dd5-cf50794897b1",
  dossierVersion: 1,
  verdictD8: "PARTIAL",
};

describe("C24 dossier attachment continuity (R2 root cause)", () => {
  it("parses and formats structured bilan dossier blocks", () => {
    const formatted = formatDossierComposerAttachment(CANON_ATTACHMENT);
    const parsed = parseStructuredDossierComposerAttachment(formatted);
    expect(parsed?.attemptId).toBe(CANON_ATTACHMENT.attemptId);
    expect(parsed?.verdictD8).toBe("PARTIAL");
    expect(parsed?.dossierVersion).toBe("1");
  });

  it("keeps dossier attachment when Pilote replaces free-text draft", () => {
    const merged = mergeDraftWithDossierAttachment(
      "Prépare un contrat processWidgetMaxLen avec tests.",
      CANON_ATTACHMENT,
    );
    expect(merged).toContain(CANON_ATTACHMENT.attemptId);
    expect(merged).toContain("processWidgetMaxLen");
    expect(merged).toContain("verdictD8: PARTIAL");
  });

  it("recognizes dossier-join determinant questions", () => {
    expect(
      isDossierJoinQuestion(
        "Pour restituer le verdict D8 et ses limites exactes, peux-tu joindre à ce message le dossier référencé ?",
      ),
    ).toBe(true);
    expect(isDossierJoinQuestion("Quel workspace Cursor utiliser ?")).toBe(false);
  });

  it("ANSWERS open dossier-join questions when attachment is present — does not invent other answers", () => {
    const userText = formatDossierComposerAttachment(CANON_ATTACHMENT);
    const qs = consolidateAttachedDossierQuestions(
      [
        {
          id: "q-146cozf",
          text: "Pour restituer le verdict D8, peux-tu joindre le dossier référencé ?",
          status: "OPEN",
          importance: "DETERMINANT",
        },
        {
          id: "q-ws",
          text: "Quel workspace ?",
          status: "OPEN",
          importance: "DETERMINANT",
        },
      ],
      userText,
    );
    expect(qs.find((q) => q.id === "q-146cozf")?.status).toBe("ANSWERED");
    expect(qs.find((q) => q.id === "q-146cozf")?.answerSummary).toMatch(/efx_f9127c71/);
    expect(qs.find((q) => q.id === "q-ws")?.status).toBe("OPEN");
  });

  it("mergeQuestions consolidates dossier-join clarifications when userText has attachment", () => {
    const userText = mergeDraftWithDossierAttachment(
      "Nouveau contrat MaxLen",
      CANON_ATTACHMENT,
    );
    const next = mergeQuestions(
      [],
      qual({
        clarifications: [
          "Peux-tu joindre à ce message le dossier D8 référencé ?",
          "Quel plafond maxLen appliquer ?",
        ],
      }),
      userText,
    );
    const join = next.find((q) => /joindre/i.test(q.text));
    const max = next.find((q) => /maxLen/i.test(q.text));
    expect(join?.status).toBe("ANSWERED");
    expect(max?.status).toBe("OPEN");
  });

  it("READY stays refused when dossier-join remains OPEN without attachment", () => {
    const base = createEmptyInvestigation("continuité MaxLen");
    base.intentSummary = "ajouter processWidgetMaxLen";
    base.desiredOutcome = "refuse strings > maxLen + tests";
    base.sources = [
      {
        kind: "D4",
        ref: "document:doc_widget",
        coverage: "CONSULTED",
        title: "Widget service",
      },
    ];
    base.questions = [
      {
        id: "q-146cozf",
        text: "Pour restituer le verdict D8, peux-tu joindre le dossier référencé ?",
        status: "OPEN",
        importance: "DETERMINANT",
      },
    ];
    const blocked = evaluateContractReadiness(base);
    expect(blocked.contractReady).toBe(false);
    const reply = {
      content: "ok",
      status: "COMPLETE",
      generationId: "gen_neg",
      qualification: qual({
        determiningQuestions: [
          {
            id: "q-146cozf",
            text: base.questions[0]!.text,
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
      observedToolSources: base.sources,
    } as unknown as NoraGenerateResult;
    const stillBlocked = mergeInvestigationFromReply(
      base,
      reply,
      "Prépare MaxLen sans joindre le dossier.",
    );
    expect(stillBlocked.contractReady).toBe(false);
    expect(stillBlocked.questions.find((q) => q.id === "q-146cozf")?.status).toBe(
      "OPEN",
    );
  });

  it("canonical R2 poison pattern: dossier-join OPEN blocks READY; attachment clears it", () => {
    const base = createEmptyInvestigation("continuité MaxLen");
    base.intentSummary = "ajouter processWidgetMaxLen";
    base.desiredOutcome = "refuse strings > maxLen + tests";
    base.sources = [
      {
        kind: "D4",
        ref: "document:doc_widget",
        coverage: "CONSULTED",
        title: "Widget service",
      },
    ];
    base.questions = [
      {
        id: "q-146cozf",
        text: "Pour restituer le verdict D8 et ses limites exactes, peux-tu joindre à ce message le dossier référencé ?",
        status: "OPEN",
        importance: "DETERMINANT",
      },
    ];
    const blocked = evaluateContractReadiness(base);
    expect(blocked.contractReady).toBe(false);
    expect(blocked.contractReadyBlockedReason).toMatch(/q-146cozf/);

    const userText = mergeDraftWithDossierAttachment(
      "Ferme les questions et prépare processWidgetMaxLen.",
      CANON_ATTACHMENT,
    );
    const reply = {
      content: "ok",
      status: "COMPLETE",
      generationId: "gen_test",
      qualification: qual({
        determiningQuestions: [
          {
            id: "q-146cozf",
            text: base.questions[0]!.text,
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
      observedToolSources: base.sources,
    } as unknown as NoraGenerateResult;

    const merged = mergeInvestigationFromReply(base, reply, userText);
    expect(merged.contractReady).toBe(true);
    expect(merged.questions.find((q) => q.id === "q-146cozf")?.status).toBe(
      "ANSWERED",
    );
  });
});
