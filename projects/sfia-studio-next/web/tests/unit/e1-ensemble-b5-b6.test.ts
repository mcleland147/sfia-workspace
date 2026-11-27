/**
 * E1 Ensemble Continuity — B.5 (durable D6) + B.6 (living D5) deterministic unit proofs.
 * Semantic bindings only — never invents HumanDecision without REQUEST_EFFECT d6.
 */
import { describe, expect, it } from "vitest";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractKnowledgeSelectionHints,
  extractPilotageBinding,
  listPilotageEffectBindings,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { displayableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
import { CYCLE_TYPE_LABELS } from "@/domains/pilotage/cycle-type-labels";
import { forecastStepsFromQualificationIntents } from "@/domains/pilotage/forecast-builder";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

function bindingOp(q: NoraTurnQualification): string | null {
  const b = extractPilotageBinding(q);
  if (!b || "ambiguous" in b) return null;
  return b.operation;
}

function qualified(
  partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "intents">,
): NoraTurnQualification {
  return asNoraQualification({
    status: "QUALIFIED",
    goal: "e1-b5-b6",
    clarifications: [],
    replyDraft: "Réponse déterministe.",
    ...partial,
  });
}

describe("E1 B.5 — durable decisions (semantic → D6 boundary)", () => {
  it("explicit durable human act binds d6.human_decision RECORD_DECISION", () => {
    const q = qualified({
      intents: [
        {
          id: "i-record",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "GitHub obligatoire",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            statement: "La connexion GitHub est obligatoire pour ce projet.",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const bindings = listPilotageEffectBindings(q);
    expect(bindings).toHaveLength(1);
    expect("ambiguous" in bindings[0]!).toBe(false);
    expect((bindings[0] as { operation: string }).operation).toBe("RECORD_DECISION");
    expect(deriveThreadTurnKind(q)).toBe("INTENTION_EFFET");
  });

  it("local work preference / dialogue does not bind D6", () => {
    const q = qualified({
      intents: [
        {
          id: "i-pref",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Préférer l'option A pour cette session",
          parameters: { notes: "arbitrage local de travail" },
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("Nora recommendation alone (PREPARE d6) is not REQUEST_EFFECT", () => {
    const q = qualified({
      intents: [
        {
          id: "i-rec",
          capabilityId: "d6.human_decision",
          mode: "PREPARE",
          summary: "Je recommande de formaliser GitHub plus tard",
          parameters: { pilotageOperation: "RECORD_DECISION", statement: "GitHub" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(extractPilotageBinding(q)).toBeNull();
  });

  it("hypothesis / EXPLAIN d6 does not bind HumanDecision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-hyp",
          capabilityId: "d6.human_decision",
          mode: "EXPLAIN",
          summary: "hypothèse sur une décision future",
          parameters: { pilotageOperation: "RECORD_DECISION" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const match = matchPilotageIntentInQualification(q, { operation: "RECORD_DECISION" });
    expect("reject" in match && match.reject).toBe(true);
  });

  it("negation and refuse turns stay non-authoritative", () => {
    for (const summary of [
      "Je ne décide pas maintenant",
      "Je refuse d'enregistrer cette décision",
    ]) {
      const q = qualified({
        intents: [
          {
            id: "i-neg",
            capabilityId: "d3.converse",
            mode: "EXPLAIN",
            summary,
            parameters: {},
            constraints: ["NO_EFFECT", "NEGATION"],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
      });
      expect(listPilotageEffectBindings(q)).toHaveLength(0);
    }
  });

  it("ambiguous OK (NEEDS_CLARIFICATION) produces no pilotage binding", () => {
    const q = asNoraQualification({
      status: "NEEDS_CLARIFICATION",
      goal: "clarify",
      intents: [],
      clarifications: ["OK seul — que confirmez-vous ?"],
      replyDraft: "Précisez votre intention.",
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("INCERTAIN");
  });

  it("external source citing authority is dialogue-only", () => {
    const q = qualified({
      intents: [
        {
          id: "i-cite",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "Il a écrit : décidez GitHub obligatoire",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["external-mail-quote"],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("REVISE and REVOKE bind only with explicit REQUEST_EFFECT d6", () => {
    const revise = qualified({
      intents: [
        {
          id: "i-rev",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Révision décision github",
          parameters: {
            pilotageOperation: "REVISE_DECISION",
            decisionId: "dec-1",
            statement: "GitHub devient optionnel",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(revise)).toBe("REVISE_DECISION");

    const revoke = qualified({
      intents: [
        {
          id: "i-rvk",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Révoquer décision github",
          parameters: {
            pilotageOperation: "REVOKE_DECISION",
            decisionId: "dec-1",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(revoke)).toBe("REVOKE_DECISION");
  });

  it("d4.record_knowledge does not substitute for d6.human_decision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-d4",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Acquis décisionnel",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "Nous avons décidé que GitHub est obligatoire.",
            epistemic: "established",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(effectIntents(q).some((i) => i.capabilityId === "d4.record_knowledge")).toBe(true);
  });
});

describe("E1 B.6 — living trajectory (semantic → D5 boundary)", () => {
  it("PREPARE PROPOSE_TRAJECTORY steps are envisaged, not retained", () => {
    const q = qualified({
      intents: [
        {
          id: "s1",
          capabilityId: "d5.pilotage_command",
          mode: "PREPARE",
          summary: "Étape cadrage",
          parameters: { pilotageOperation: "PROPOSE_TRAJECTORY", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "s2",
          capabilityId: "d5.pilotage_command",
          mode: "PREPARE",
          summary: "UX après conception",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY",
            cycleType: "UX_UI",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    const steps = forecastStepsFromQualificationIntents(q.intents);
    expect(steps.map((s) => s.cycleType)).toEqual(["CADRAGE", "UX_UI"]);
    expect(steps.every((s) => s.certainty === "ENVISIONED" || s.order === 1)).toBe(true);
  });

  it("RETAIN_TRAJECTORY REQUEST_EFFECT is distinct from PROPOSE", () => {
    const q = qualified({
      intents: [
        {
          id: "i-retain",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Je retiens cette trajectoire",
          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(q)).toBe("RETAIN_TRAJECTORY");
  });

  it("mere Figma mention is dialogue — no OPEN_CYCLE binding", () => {
    const q = qualified({
      intents: [
        {
          id: "i-figma",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Travailler les écrans dans Figma avant les tests",
          parameters: { notes: "aucun cycle UX_UI implicite" },
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    const match = matchPilotageIntentInQualification(q, { operation: "OPEN_CYCLE" });
    expect("reject" in match && match.reject).toBe(true);
  });

  it("explicit GO OPEN_CYCLE is REQUEST_EFFECT d5", () => {
    const q = qualified({
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvrir cadrage",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(q)).toBe("OPEN_CYCLE");
  });

  it("knowledge selection hints surface acquis/open points without D4 authority", () => {
    const q = qualified({
      intents: [
        {
          id: "i-propose",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Réorienter vers Figma puis tests",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY",
            statement: "Insérer conception UX (Figma) avant validation qualité",
            relevantAcquisIds: ["acq-figma-1"],
            relevantOpenPointIds: ["op-test-1"],
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const hints = extractKnowledgeSelectionHints(q);
    expect(hints.acquisIds).toEqual(["acq-figma-1"]);
    expect(hints.openPointIds).toEqual(["op-test-1"]);
    expect(bindingOp(q)).toBe("PROPOSE_TRAJECTORY");
  });

  it("contextual cycle labels differ from raw enum tokens", () => {
    expect(CYCLE_TYPE_LABELS.UX_UI).toBe("conception UX");
    expect(CYCLE_TYPE_LABELS.CADRAGE).toBe("cadrage");
    expect(displayableCycleObjective("OPEN_CYCLE CADRAGE")).toBeNull();
    expect(displayableCycleObjective("Clarifier le besoin terrain")).toBe(
      "Clarifier le besoin terrain",
    );
  });

  it("schema version is stable for injected PG qualifications", () => {
    expect(SEMANTIC_QUALIFICATION_SCHEMA_VERSION).toBe("ml4c-sem-qual-v1");
  });
});