import { describe, expect, it } from "vitest";
import { resolveCognitiveWorkTerminalStatus } from "@/domains/conversation/cognitive-conductor-terminal";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function qual(
  partial: Partial<NoraTurnQualification>,
): NoraTurnQualification {
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    goal: "",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "",
    ...partial,
  } as NoraTurnQualification;
}

describe("A.5 — cognitive work terminal status", () => {
  it("COMPLETes when production is COMPLETE and disposition COMPLETE despite stale clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        clarifications: ["Question déjà traitée dans le cycle ouvert"],
      }),
    });
    expect(r.awaitPilot).toBe(false);
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN on AWAIT_PILOT even when production is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "AWAIT_PILOT",
        clarifications: ["Quel périmètre TVA ?"],
      }),
    });
    expect(r.awaitPilot).toBe(true);
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_PILOT");
  });

  it("stays OPEN on NEEDS_CLARIFICATION with clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({
        status: "NEEDS_CLARIFICATION",
        clarifications: ["Préciser la date d'effet"],
      }),
    });
    expect(r.status).toBe("OPEN");
  });

  it("ignores open determinant questions when disposition is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        determiningQuestions: [
          {
            id: "q1",
            text: "Stale?",
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
    });
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN when conductor suspended flag is set", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: true,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("SUSPENDED");
    expect(r.interruptCause).toBeNull();
  });

  it("stays OPEN on IN_PROGRESS production despite disposition COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.awaitPilot).toBe(true);
  });

  it("maps SUSPEND disposition to AWAIT_OR_SUSPEND interrupt", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "SUSPEND" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_OR_SUSPEND");
  });

  it("E2 A.5 — CONTINUE keeps work OPEN even when production COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "CONTINUE" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.awaitPilot).toBe(true);
    expect(r.interruptCause).toBe("CONTINUE");
  });

  it("SUSPENDs on production PARTIAL or FAILED", () => {
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "PARTIAL" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "FAILED" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
  });
});