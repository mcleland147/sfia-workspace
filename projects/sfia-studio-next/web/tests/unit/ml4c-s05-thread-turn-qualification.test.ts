import { describe, expect, it } from "vitest";
import {
  looksLikeIndependentDialogue,
  mayStartNewThreadAct,
  qualifyThreadTurn,
} from "@/domains/pilotage/thread-recovery";

describe("ML4C S05 — qualifyThreadTurn linguistic matrix", () => {
  const pending = {
    content: "Ouvre le cycle cadrage.",
    clientTurnKey: "ctk_pending",
    clientCommandKey: "conv-auth:ctk_pending",
  };

  it("classifies métier OPEN_CYCLE variants as INTENTION_EFFET (not independent by exclusion)", () => {
    for (const s of [
      "Ouvre un cycle cadrage.",
      "Ouvre le cycle cadrage.",
      "Ouvre cycle cadrage.",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).toBe("INTENTION_EFFET");
      expect(q.pilotageOperation, s).toBe("OPEN_CYCLE");
      expect(looksLikeIndependentDialogue(s)).toBe(false);
    }
  });

  it("treats noisy OPEN formulations as INCERTAIN — never DIALOGUE_INDEPENDANT", () => {
    for (const s of [
      "Ouvre the cycle cadrage.",
      "Ouvre L cycle cadrage.",
      "Lance le cycle de cadrage.",
      "Démarre le cadrage.",
      "Peux-tu ouvrir le cycle cadrage ?",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).toBe("INCERTAIN");
      expect(looksLikeIndependentDialogue(s)).toBe(false);
    }
  });

  it("keeps clear effect intents as INTENTION_EFFET", () => {
    expect(qualifyThreadTurn("Crée un autre projet.").kind).toBe("INTENTION_EFFET");
    expect(qualifyThreadTurn("Publie ce document.").kind).toBe("INTENTION_EFFET");
    expect(qualifyThreadTurn("Je décide que GitHub est obligatoire.").kind).toBe(
      "INTENTION_EFFET",
    );
  });

  it("positively establishes independent cognitive questions", () => {
    for (const s of [
      "Pourquoi avions-nous choisi cette architecture ?",
      "Quelle différence entre un blob et un commit ?",
      "À quoi sert un cycle de cadrage ?",
      "Pourquoi ouvrir un cycle de cadrage ?",
      "Que signifie la commande 'ouvre le cycle' ?",
    ]) {
      expect(qualifyThreadTurn(s).kind, s).toBe("DIALOGUE_INDEPENDANT");
      expect(
        mayStartNewThreadAct({
          unresolved: pending,
          nextContent: s,
          nextTurnKind: "DIALOGUE_INDEPENDANT",
        }).ok,
        s,
      ).toBe(true);
    }
  });

  it("keeps ambiguous / mixed formulations out of independent dialogue", () => {
    for (const s of [
      "Tu peux faire ça ?",
      "Fais-le.",
      "Et si on ouvrait le cycle ?",
      "Explique-moi ce choix puis ouvre le cycle.",
      "Je pourrais ouvrir le cycle ?",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
      expect(
        mayStartNewThreadAct({
          unresolved: pending,
          nextContent: s,
          nextTurnKind: q.kind,
        }).ok,
        s,
      ).toBe(false);
    }
  });

  it("blocks INCERTAIN over unresolved pending (conservative)", () => {
    const gate = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Ouvre L cycle cadrage.",
      nextTurnKind: "INCERTAIN",
    });
    expect(gate.ok).toBe(false);
    if (!gate.ok) {
      expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
    }
  });
});
