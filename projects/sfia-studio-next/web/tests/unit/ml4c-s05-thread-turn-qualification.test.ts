import { describe, expect, it } from "vitest";
import {
  looksLikeIndependentDialogue,
  mayStartNewThreadAct,
  qualifyThreadTurn,
} from "@/domains/pilotage/thread-recovery";

describe("ML4C S05 — positive independent dialogue qualification", () => {
  const pending = {
    content: "Ouvre le cycle cadrage.",
    clientTurnKey: "ctk_pending",
    clientCommandKey: "conv-auth:ctk_pending",
  };

  it("classifies CLEAR métier variants as INTENTION_EFFET", () => {
    for (const s of [
      "Ouvre le cycle cadrage.",
      "Ouvre un cycle cadrage.",
      "Ouvre cycle cadrage.",
      "Crée un projet.",
      "Publie ce document.",
      "Je décide que GitHub est obligatoire.",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).toBe("INTENTION_EFFET");
      expect(looksLikeIndependentDialogue(s)).toBe(false);
    }
  });

  it("never treats unknown/noisy operational phrasing as independent by default", () => {
    for (const s of [
      "Archive ce projet.",
      "Réinitialise ce projet ?",
      "Supprime cette configuration.",
      "Ouvre L cycle cadrage.",
      "Ouvre the cycle cadrage.",
      "Tu peux faire ça ?",
      "Fais-le.",
      "Explique-moi ce choix puis ouvre le cycle.",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
      expect(["INCERTAIN", "INTENTION_EFFET"]).toContain(q.kind);
    }
  });

  it("requires positive cognitive evidence for DIALOGUE_INDEPENDANT (lone ? insufficient)", () => {
    for (const s of [
      "Pourquoi avions-nous choisi cette architecture ?",
      "Quelle est la différence entre un blob et un commit ?",
      "À quoi sert un cycle de cadrage ?",
      "Pourquoi ouvrir un cycle de cadrage ?",
      "Que signifie la commande 'ouvre le cycle' ?",
      "Explique-moi cette décision.",
      "Comment fonctionne notre trajectoire ?",
    ]) {
      expect(qualifyThreadTurn(s).kind, s).toBe("DIALOGUE_INDEPENDANT");
    }
    // Lone "?" / unknown short ask — not positively independent.
    expect(qualifyThreadTurn("Réinitialise ce projet ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Ok ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Et maintenant").kind).toBe("INCERTAIN");
  });

  it("blocks unknown operational B over unresolved pending A", () => {
    for (const s of ["Archive ce projet.", "Réinitialise ce projet ?", "Ouvre L cycle cadrage."]) {
      const kind = qualifyThreadTurn(s).kind;
      const gate = mayStartNewThreadAct({
        unresolved: pending,
        nextContent: s,
        nextTurnKind: kind,
      });
      expect(gate.ok, s).toBe(false);
      if (!gate.ok) {
        expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
      }
    }
  });

  it("allows positively independent B over pending A", () => {
    const s = "Quelle est la différence entre un blob et un commit ?";
    expect(
      mayStartNewThreadAct({
        unresolved: pending,
        nextContent: s,
        nextTurnKind: "DIALOGUE_INDEPENDANT",
      }).ok,
    ).toBe(true);
  });

  it("does not let nextIsIndependentDialogue alone bypass pending", () => {
    const gate = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Archive ce projet.",
      nextIsIndependentDialogue: true,
      // nextTurnKind omitted — must re-qualify content, not trust the boolean
    });
    expect(gate.ok).toBe(false);
  });

  it("negations / hypotheses / citations stay non-bypass", () => {
    expect(qualifyThreadTurn("N'ouvre pas le cycle.").kind).not.toBe("DIALOGUE_INDEPENDANT");
    expect(qualifyThreadTurn("Et si on ouvrait le cycle ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Que signifie la commande 'ouvre le cycle' ?").kind).toBe(
      "DIALOGUE_INDEPENDANT",
    );
  });
});
