/**
 * P6-HQA-COG-01 CORRECTION PASS 02 — R1/R2 adversarial discrimination.
 * DETERMINISTIC PROVEN at composer seam. Human naturalness NOT CLOSED.
 */

import { describe, expect, it } from "vitest";
import {
  assessHistoryContinuity,
  composeF2PilotFacingNarrative,
  f2PilotNarrativeInvariants,
  hasExplicitStartIntentForSubject,
  interpretPilotNarrativeStance,
  resolveNamedCycleRelativeToSubject,
  type ComposeF2PilotFacingNarrativeInput,
} from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";
import type { PilotDecisionCandidate } from "@/features/project-assistant/f2/types";

function base(
  overrides: Partial<ComposeF2PilotFacingNarrativeInput> = {},
): ComposeF2PilotFacingNarrativeInput {
  return {
    kind: "new_cycle_proposal",
    presentation: "openai_live",
    userContent: "Prépare un cycle Delivery pour livrer la note.",
    history: [],
    intentClass: "actionable",
    objective: "Livrer la note de cadrage",
    rephrasedRequest: "Formaliser un cycle Delivery pour la note",
    cycleLabel: "Delivery",
    recommendedProfile: "Standard",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    ckcCognitiveRecommendation: undefined,
    projectName: "P6-HQ-01",
    projectObjective: "Exit proof Delivery",
    activeCycleInstanceId: null,
    lpsUnchanged: true,
    morrisGateRequired: false,
    executionBlocked: false,
    mw5Disposition: "CONTINUE",
    mw5EscalatePiloteText: null,
    pilotDecisionCandidate: null,
    productCurrentSubjectVerified: false,
    priorSubjectStatus: null,
    ...overrides,
  };
}

const acceptRec: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "current_recommendation",
  rationale: "ok for recommendation",
};

const acceptPresented: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "presented_subject",
  rationale: "ok for presented subject",
};

const acceptAlt: PilotDecisionCandidate = {
  disposition: "accept",
  targetKind: "specific_alternative",
  rationale: "choose alternative",
};

describe("P6-HQA-COG-01 CP02 — R1 subject identity of accept", () => {
  it("T1 — accept recommendation ≠ accept_start", () => {
    const stance = interpretPilotNarrativeStance({
      userContent: "ok pour la recommandation",
      cycleLabel: "Delivery",
      pilotDecisionCandidate: acceptRec,
    });
    expect(stance.kind).toBe("accept_recommendation");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/accord sur la recommandation/i);
    expect(text).toMatch(/pas encore un démarrage/i);
    expect(text).not.toMatch(/intention de démarrer/i);
  });

  it("T2 — accept presented_subject ≠ accept_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "d'accord pour ce sujet",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptPresented,
      }).kind,
    ).toBe("accept_recommendation");
  });

  it("T3 — explicit start intent is recognized as accept_start", () => {
    expect(
      hasExplicitStartIntentForSubject(
        "Je confirme le démarrage de Delivery",
        "Delivery",
      ),
    ).toBe(true);
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de Delivery.",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("accept_start");
    expect(
      interpretPilotNarrativeStance({
        userContent: "J'accepte de démarrer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("accept_start");
  });

  it("T4 — different cycle name (quoted or bare) → no false Delivery start", () => {
    expect(
      resolveNamedCycleRelativeToSubject(
        "Je confirme le démarrage de Cadrage",
        "Delivery",
      ),
    ).toBe("mismatch");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de Cadrage.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("ambiguous");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je confirme le démarrage de « Cadrage ».",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).not.toBe("accept_start");
  });

  it("T5 — accepted alternative ≠ démarrage", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "je prends l'autre option",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptAlt,
      }).kind,
    ).toBe("ambiguous");
  });

  it("T6 — refuse / question / defer never promoted to accept_start", () => {
    expect(
      interpretPilotNarrativeStance({
        userContent: "Non, ne démarre surtout pas Delivery.",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("refuse_start");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
        cycleLabel: "Delivery",
        pilotDecisionCandidate: acceptRec,
      }).kind,
    ).toBe("question_status");
    expect(
      interpretPilotNarrativeStance({
        userContent: "Je préfère attendre avant de lancer Delivery.",
        cycleLabel: "Delivery",
      }).kind,
    ).toBe("defer_start");
  });

  it("accept recommendation without cycle label stays non-start", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        cycleLabel: null,
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(text).toMatch(/pas encore un démarrage/i);
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
  });
});

describe("P6-HQA-COG-01 CP02 — R2 currentness of continuity", () => {
  it("T7 — new-turn proposalStatus does not create Product CURRENT continuity", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      proposalStatus: "STALE",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery ».",
        },
      ],
    });
    // proposalStatus ignored — history alone → hint, not product current / not stale via status
    expect(c.kind).toBe("same_subject_history_hint");
    expect(c.kind).not.toBe("same_subject_product_current");
  });

  it("T8 — old Delivery history ≠ same object CURRENT", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content:
            "Je propose le cycle « Delivery ». Un cycle candidat est prêt.",
        },
      ],
    });
    expect(c.kind).toBe("same_subject_history_hint");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
        ],
        productCurrentSubjectVerified: false,
      }),
    );
    // Must NOT claim repeated CURRENT agreement from history alone.
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/intention de démarrer/i);
  });

  it("T9 — refused / stale / superseded prior subject", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        priorSubjectStatus: "REFUSED",
        productCurrentSubjectVerified: false,
        history: [],
      }).kind,
    ).toBe("refused_or_stale_hint");
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        priorSubjectStatus: "SUPERSEDED",
        productCurrentSubjectVerified: false,
      }).kind,
    ).toBe("refused_or_stale_hint");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        priorSubjectStatus: "STALE",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
          {
            role: "user",
            content: "Non, ne démarre surtout pas Delivery.",
          },
        ],
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
    expect(text).toMatch(/refus|obsolète/i);
  });

  it("T10 — multiple Delivery mentions remain history hint without Product verify", () => {
    const c = assessHistoryContinuity({
      cycleLabel: "Delivery",
      productCurrentSubjectVerified: false,
      history: [
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery » (première).",
        },
        { role: "user", content: "pas maintenant" },
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery » (seconde).",
        },
      ],
    });
    expect(c.kind).toBe("same_subject_history_hint");
  });

  it("T11 — absent context → neutral formulation", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        history: [],
        productCurrentSubjectVerified: false,
      }).kind,
    ).toBe("none");
    const text = composeF2PilotFacingNarrative(
      base({ userContent: "ok", history: [], pilotDecisionCandidate: null }),
    );
    // "ok" alone → ambiguous or neutral, never agreement-of-start
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(false);
  });

  it("T12 — Product-verified subject allows CURRENT continuity wording", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        productCurrentSubjectVerified: true,
        history: [],
      }).kind,
    ).toBe("same_subject_product_current");

    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        productCurrentSubjectVerified: true,
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ».",
          },
        ],
      }),
    );
    expect(f2PilotNarrativeInvariants(text).acknowledgesAgreement).toBe(true);
    expect(text).toMatch(/ne l'active pas|aucune activation/i);
  });

  it("Cadrage history + Delivery start → other_subject, no false CURRENT", () => {
    expect(
      assessHistoryContinuity({
        cycleLabel: "Delivery",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Cadrage ».",
          },
        ],
      }).kind,
    ).toBe("other_subject");
  });
});

describe("P6-HQA-COG-01 CP02 — governance / persistence / CP01 non-regression", () => {
  it("T13 — no invented HD / activation / execution", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage de Delivery.",
        executionBlocked: true,
        intentClass: "execution_request",
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.claimsActivationAccomplished).toBe(false);
    expect(text).not.toMatch(/HumanDecision enregistr/i);
    expect(text).toMatch(/Rien n'a encore été exécuté/i);
  });

  it("T14 — live/test presentation parity", () => {
    const live = composeF2PilotFacingNarrative(
      base({ userContent: "ok pour la recommandation", pilotDecisionCandidate: acceptRec }),
    );
    const test = composeF2PilotFacingNarrative(
      base({
        presentation: "test_provider",
        userContent: "ok pour la recommandation",
        pilotDecisionCandidate: acceptRec,
      }),
    );
    expect(test.replace(/^\[Mode test\]\s*/, "")).toBe(live);
  });

  it("T15 — CP01 refuse/question/defer/propose still correct", () => {
    const refuse = composeF2PilotFacingNarrative(
      base({ userContent: "Non, ne démarre surtout pas Delivery." }),
    );
    const question = composeF2PilotFacingNarrative(
      base({
        userContent: "Peux-tu confirmer que le cycle n'est pas actif ?",
      }),
    );
    const defer = composeF2PilotFacingNarrative(
      base({
        userContent: "Je préfère attendre avant de lancer Delivery.",
      }),
    );
    const propose = composeF2PilotFacingNarrative(base());
    expect(f2PilotNarrativeInvariants(refuse).acknowledgesRefusal).toBe(true);
    expect(question).toMatch(/aucun cycle n'est actuellement actif/i);
    expect(defer).toMatch(/attendre|Aucun démarrage/i);
    expect(propose).toMatch(/Je propose le cycle/i);
    expect(f2PilotNarrativeInvariants(propose).hasEngineContinue).toBe(false);
  });

  it("same message, different Product active state", () => {
    const msg = "Je confirme le démarrage de Delivery.";
    const inactive = composeF2PilotFacingNarrative(
      base({ userContent: msg, activeCycleInstanceId: null }),
    );
    const active = composeF2PilotFacingNarrative(
      base({ userContent: msg, activeCycleInstanceId: "cycinst:1" }),
    );
    expect(inactive).toMatch(/pas actif|ne constitue pas/i);
    expect(active).toMatch(/déjà actif/i);
  });
});
