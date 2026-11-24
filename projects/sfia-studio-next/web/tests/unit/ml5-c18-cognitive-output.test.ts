import { describe, expect, it } from "vitest";
import {
  mergeInvestigationFromReply,
  mergeQuestions,
  semanticContinueWork,
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
    goal: "test",
    projectIntention: "",
    desiredOutcome: "outcome",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "ok",
    ...partial,
  };
}

function reply(q: NoraTurnQualification | null, content = "hello"): NoraGenerateResult {
  return {
    content,
    status: "COMPLETE",
    generationId: "gen_test",
    qualification: q,
    observedToolSources: [],
  } as unknown as NoraGenerateResult;
}

describe("ML5 C18 cognitive output contract", () => {
  it("does not auto-ANSWER open questions from user prose / empty clarifications", () => {
    const prior = [
      {
        id: "q1",
        text: "Quel workspace ?",
        status: "OPEN" as const,
        importance: "DETERMINANT" as const,
      },
    ];
    const next = mergeQuestions(
      prior,
      qual({ clarifications: [], status: "QUALIFIED" }),
    );
    expect(next.find((q) => q.id === "q1")?.status).toBe("OPEN");
  });

  it("merges structured determiningQuestions with stable ids", () => {
    const next = mergeQuestions(
      [],
      qual({
        determiningQuestions: [
          {
            id: "q-ws",
            text: "Workspace ?",
            status: "ANSWERED",
            importance: "DETERMINANT",
            answerSummary: "/tmp/sandbox",
            sourceRefs: ["pilot"],
          },
        ],
      }),
    );
    expect(next).toHaveLength(1);
    expect(next[0]!.id).toBe("q-ws");
    expect(next[0]!.status).toBe("ANSWERED");
    expect(next[0]!.answerSummary).toBe("/tmp/sandbox");
  });

  it("does not derive productionInstruction from long prose", () => {
    const long = "x".repeat(900);
    const merged = mergeInvestigationFromReply(
      createEmptyInvestigation("prepare"),
      reply(
        qual({
          intents: [
            {
              id: "i1",
              capabilityId: "d7.prepare_cursor_contract",
              mode: "PREPARE",
              parameters: {},
              constraints: [],
              dependsOn: [],
              sourceEvidence: [],
            },
          ],
        }),
        long,
      ),
      "prepare contract",
    );
    expect(merged.productionInstruction).toBeFalsy();
  });

  it("takes productionInstruction from structured qualification only", () => {
    const merged = mergeInvestigationFromReply(
      createEmptyInvestigation("prepare"),
      reply(
        qual({
          productionInstruction: "# Instruction\nDo the thing",
          acceptanceCriteria: ["A", "B", "C"],
          workDisposition: "COMPLETE",
        }),
      ),
      "prepare",
    );
    expect(merged.productionInstruction).toContain("Do the thing");
    expect(merged.acceptanceCriteria).toEqual(["A", "B", "C"]);
  });

  it("stops continuing on AWAIT_PILOT / COMPLETE disposition", () => {
    const inv = createEmptyInvestigation("x");
    expect(
      semanticContinueWork(qual({ workDisposition: "AWAIT_PILOT" }), inv, reply(qual({}))),
    ).toBe(false);
    expect(
      semanticContinueWork(qual({ workDisposition: "COMPLETE" }), inv, reply(qual({}))),
    ).toBe(false);
    expect(
      semanticContinueWork(qual({ workDisposition: "CONTINUE" }), inv, reply(qual({}))),
    ).toBe(true);
  });

  it("READY still requires CONSULTED sources (not instruction alone)", () => {
    const next = evaluateContractReadiness({
      ...createEmptyInvestigation("mission"),
      desiredOutcome: "done",
      productionInstruction: "long instruction",
      acceptanceCriteria: ["c1", "c2", "c3"],
      sources: [],
    });
    expect(next.contractReady).toBe(false);
  });
});
