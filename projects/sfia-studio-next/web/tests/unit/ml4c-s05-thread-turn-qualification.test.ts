import { describe, expect, it } from "vitest";
import {
  looksLikeIndependentDialogue,
  mayStartNewThreadAct,
  qualifyThreadTurn,
} from "@/domains/pilotage/thread-recovery";
import { deriveThreadTurnKind, type NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("ML4C S05 — server nextTurnKind owns coexistence", () => {
  const pending = {
    content: "Ouvre le cycle cadrage.",
    clientTurnKey: "ctk_pending",
    clientCommandKey: "conv-auth:ctk_pending",
  };

  it("client qualifyThreadTurn stays fail-closed INCERTAIN", () => {
    expect(qualifyThreadTurn("Pourquoi cette architecture ?").kind).toBe("INCERTAIN");
    expect(looksLikeIndependentDialogue("Pourquoi cette architecture ?")).toBe(false);
  });

  it("server deriveThreadTurnKind distinguishes dialogue vs effect", () => {
    const dialogue: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "q",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "explain",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    expect(deriveThreadTurnKind(dialogue)).toBe("DIALOGUE_INDEPENDANT");

    const effect: NoraTurnQualification = {
      ...dialogue,
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: { pilotageOperation: "OPEN_CYCLE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    };
    expect(deriveThreadTurnKind(effect)).toBe("INTENTION_EFFET");
  });

  it("mayStartNewThreadAct honors server-declared DIALOGUE_INDEPENDANT", () => {
    expect(
      mayStartNewThreadAct({
        unresolved: pending,
        nextContent: "Quelle est la différence entre un blob et un commit ?",
        nextTurnKind: "DIALOGUE_INDEPENDANT",
      }).ok,
    ).toBe(true);
  });

  it("mayStartNewThreadAct blocks INCERTAIN / INTENTION_EFFET over pending", () => {
    expect(
      mayStartNewThreadAct({
        unresolved: pending,
        nextContent: "Archive ce projet.",
        nextTurnKind: "INCERTAIN",
      }).ok,
    ).toBe(false);
    expect(
      mayStartNewThreadAct({
        unresolved: pending,
        nextContent: "Ouvre le cycle sécurité.",
        nextTurnKind: "INTENTION_EFFET",
      }).ok,
    ).toBe(false);
  });
});
