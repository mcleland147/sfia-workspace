/** @vitest-environment node */
/**
 * CORR-MW5-01B / CORR-MW5-PR-01 — authoritative product-fact projection (fail-closed).
 */
import { describe, expect, it } from "vitest";
import {
  decisionBasisMatchesClaimStructured,
  resolveMw5ProductAuthorityFacts,
  truthCMatchesClaimStructured,
} from "@/lib/nora-cognitive-runtime";

describe("resolveMw5ProductAuthorityFacts (CORR-MW5-01B)", () => {
  const architectureClaim = {
    objective: "Faire évoluer l'architecture produit",
    scope: "Changement d'architecture structurant",
    recommendedProfile: "Critical",
    requestedOperation: "architecture change",
  };

  it("structured LPS objective equality → truthCEstablishedForClaim", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "Faire évoluer l'architecture produit",
        context: "Contexte générique sans tag orphelin.",
        scope: "Changement d'architecture structurant",
        decisionIds: [],
      },
      consumedDecisions: [],
      claim: architectureClaim,
    });
    expect(facts.truthCEstablishedForClaim).toBe(true);
    expect(facts.reasonCodes).toContain(
      "truth_c_structured_objective_anchor_match",
    );
  });

  it("ESTABLISHED_CLAIM orphan tag alone does NOT establish Truth C", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "Projet générique",
        context: "ESTABLISHED_CLAIM:architecture — tag orphelin",
        scope: "Autre scope",
        decisionIds: [],
      },
      consumedDecisions: [],
      claim: architectureClaim,
    });
    expect(facts.truthCEstablishedForClaim).toBe(false);
  });

  it("one shared token / weak overlap → false", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Architecture legacy",
          context: "",
          scope: "Ops",
          decisionIds: [],
        },
        architectureClaim,
      ),
    ).toBe(false);
  });

  it("empty claim never match-all for HD", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          decisionId: "dec:1",
          status: "accepted",
          subject: "Anything",
          linkedToCurrentLps: true,
          hasDecisionBasis: true,
          executionObjective: "Faire évoluer l'architecture produit",
        },
        {
          objective: null,
          scope: null,
          recommendedProfile: null,
          requestedOperation: null,
        },
      ),
    ).toBe(false);
  });

  it("accepted HD linked + DecisionBasis exact objective → consumed", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj unrelated short",
        context: "ctx",
        scope: "scp unrelated",
        decisionIds: ["dec:arch-1"],
      },
      consumedDecisions: [
        {
          decisionId: "dec:arch-1",
          status: "accepted",
          subject: "Architecture cible validée",
          linkedToCurrentLps: true,
          hasDecisionBasis: true,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: "architecture change",
        },
      ],
      claim: architectureClaim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(true);
    expect(facts.consumedDecisionIds).toEqual(["dec:arch-1"]);
  });

  it("accepted HD NOT linked to LPS → false", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj",
        context: "ctx",
        scope: "scp",
        decisionIds: [],
      },
      consumedDecisions: [
        {
          decisionId: "dec:arch-1",
          status: "accepted",
          subject: "Architecture",
          linkedToCurrentLps: false,
          hasDecisionBasis: true,
          executionObjective: "Faire évoluer l'architecture produit",
        },
      ],
      claim: architectureClaim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });

  it("linked HD without DecisionBasis → false", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj",
        context: "ctx",
        scope: "scp",
        decisionIds: ["dec:arch-1"],
      },
      consumedDecisions: [
        {
          decisionId: "dec:arch-1",
          status: "accepted",
          subject: "Faire évoluer l'architecture produit",
          linkedToCurrentLps: true,
          hasDecisionBasis: false,
          executionObjective: "Faire évoluer l'architecture produit",
        },
      ],
      claim: architectureClaim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });

  it("linked HD DecisionBasis unrelated → false", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj",
        context: "ctx",
        scope: "scp",
        decisionIds: ["dec:arch-1"],
      },
      consumedDecisions: [
        {
          decisionId: "dec:arch-1",
          status: "accepted",
          subject: "Delivery unrelated",
          linkedToCurrentLps: true,
          hasDecisionBasis: true,
          executionObjective: "Livrer la documentation marketing",
          executionScope: "Docs marketing",
          requestedOperation: "docs publish",
        },
      ],
      claim: architectureClaim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });

  it("superseded / revoked statuses → false", () => {
    for (const status of ["superseded", "revoked", "proposed", "refused"]) {
      const facts = resolveMw5ProductAuthorityFacts({
        truthC: {
          objective: "obj",
          context: "ctx",
          scope: "scp",
          decisionIds: ["dec:arch-1"],
        },
        consumedDecisions: [
          {
            decisionId: "dec:arch-1",
            status,
            subject: "Architecture",
            linkedToCurrentLps: true,
            hasDecisionBasis: true,
            executionObjective: "Faire évoluer l'architecture produit",
          },
        ],
        claim: architectureClaim,
      });
      expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
    }
  });

  it("contradiction signal blocks consumed-HD skip", () => {
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj",
        context: "ctx",
        scope: "scp",
        decisionIds: ["dec:arch-1"],
      },
      consumedDecisions: [
        {
          decisionId: "dec:arch-1",
          status: "accepted",
          subject: "Architecture",
          linkedToCurrentLps: true,
          hasDecisionBasis: true,
          executionObjective: "Faire évoluer l'architecture produit",
        },
      ],
      claim: architectureClaim,
      newContradictionSignalPresent: true,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });
});

describe("CORR-MW5-PR-01 — claim identity fail-closed (adversarial)", () => {
  const linkedAccepted = {
    decisionId: "dec:prior",
    status: "accepted" as const,
    subject: "Prior structural decision",
    linkedToCurrentLps: true,
    hasDecisionBasis: true,
  };

  it("HD-NEG-01 same requestedOperation + different objective/scope → false", () => {
    const claim = {
      objective: "Remplacer le mécanisme d'authentification",
      scope: "Identity and access",
      recommendedProfile: "Critical",
      requestedOperation: "architecture change",
    };
    const decision = {
      ...linkedAccepted,
      executionObjective: "Migrer la persistence du Project",
      executionScope: "Project persistence",
      requestedOperation: "architecture change",
    };
    expect(decisionBasisMatchesClaimStructured(decision, claim)).toBe(false);
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj unrelated short",
        context: "ctx",
        scope: "scp unrelated",
        decisionIds: ["dec:prior"],
      },
      consumedDecisions: [decision],
      claim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(false);
  });

  it("HD-NEG-02 same broad scope + different objective → false", () => {
    const claim = {
      objective: "Remplacer le mécanisme d'authentification",
      scope: "Changement d'architecture structurant",
      recommendedProfile: "Critical",
      requestedOperation: "architecture change",
    };
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Migrer la persistence du Project",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: "other operation",
        },
        claim,
      ),
    ).toBe(false);
  });

  it("HD-NEG-03 same objective + incompatible substantive scope → false", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Project persistence layer only",
          requestedOperation: "architecture change",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Identity and access boundary",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
  });

  it("HD-NEG-04 requestedOperation only / insufficient objective → false", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: undefined,
          executionScope: undefined,
          requestedOperation: "architecture change",
        },
        {
          objective: null,
          scope: null,
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Migrer la persistence du Project",
          requestedOperation: "architecture change",
        },
        {
          objective: null,
          scope: "Identity and access",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
  });

  it("HD-POS-01 matching objective + compatible scope + LPS link → consumed", () => {
    const claim = {
      objective: "Faire évoluer l'architecture produit",
      scope: "Changement d'architecture structurant",
      recommendedProfile: "Critical",
      requestedOperation: "architecture change",
    };
    const facts = resolveMw5ProductAuthorityFacts({
      truthC: {
        objective: "obj unrelated short",
        context: "ctx",
        scope: "scp unrelated",
        decisionIds: ["dec:prior"],
      },
      consumedDecisions: [
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: "architecture change",
        },
      ],
      claim,
    });
    expect(facts.consumedHumanDecisionWithoutNewContradiction).toBe(true);
  });

  it("HD-POS-02 matching objective + optional scope unavailable → consumed", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: undefined,
          requestedOperation: "architecture change",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });

  it("TC-NEG-01 same broad scope + different objective → false", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Migrer la persistence du Project",
          context: "ctx",
          scope: "Changement d'architecture structurant",
          decisionIds: [],
        },
        {
          objective: "Remplacer le mécanisme d'authentification",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
  });

  it("TC-NEG-02 different objective + scope containment only → false", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Livrer la documentation marketing",
          context: "ctx",
          scope:
            "Changement d'architecture structurant pour le périmètre projet entier",
          decisionIds: [],
        },
        {
          objective: "Remplacer le mécanisme d'authentification",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
  });

  it("TC-NEG-03 objective match + incompatible substantive scope → false", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Faire évoluer l'architecture produit",
          context: "ctx",
          scope: "Project persistence layer only",
          decisionIds: [],
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Identity and access boundary",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(false);
  });

  it("TC-POS-01 same objective + compatible scope → true", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Faire évoluer l'architecture produit",
          context: "ctx",
          scope: "Changement d'architecture structurant",
          decisionIds: [],
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });

  it("TC-POS-02 strong objective containment remains safe", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective:
            "Faire évoluer l'architecture produit vers une cible modulaire",
          context: "ctx",
          scope: "Changement d'architecture structurant",
          decisionIds: [],
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });

  it("TC-POS — Studio UI metadata LPS.scope does not block objective anchor", () => {
    expect(
      truthCMatchesClaimStructured(
        {
          objective: "Faire évoluer l'architecture produit",
          context: "ctx",
          scope:
            '{"schemaVersion":"sfia-visible-slice-project-ui.1","shortReference":"T","perceivedCriticality":"STANDARD","constraints":[]}',
          decisionIds: [],
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });
});

describe("CORR-MW5-PR-02 — requestedOperation qualifier compatibility", () => {
  const linkedAccepted = {
    decisionId: "dec:op",
    status: "accepted" as const,
    subject: "Prior structural decision",
    linkedToCurrentLps: true,
    hasDecisionBasis: true,
  };

  it("HD-NEG-05 same objective + scope unavailable + different requestedOperation → false", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: undefined,
          requestedOperation: "migrate project database",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Identity and access boundary",
          recommendedProfile: "Critical",
          requestedOperation: "replace authentication mechanism",
        },
      ),
    ).toBe(false);
  });

  it("HD-NEG-06 same objective + compatible scope + different requestedOperation → false", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: "migrate project database",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "replace authentication mechanism",
        },
      ),
    ).toBe(false);
  });

  it("HD-POS-03 same objective + compatible scope + requestedOperation absent one side → true", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: undefined,
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });

  it("HD-POS-04 same objective + compatible scope + same requestedOperation → true", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation: "architecture change",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change",
        },
      ),
    ).toBe(true);
  });

  it("HD-POS-05 same objective + requestedOperation strong containment → true", () => {
    expect(
      decisionBasisMatchesClaimStructured(
        {
          ...linkedAccepted,
          executionObjective: "Faire évoluer l'architecture produit",
          executionScope: "Changement d'architecture structurant",
          requestedOperation:
            "architecture change for product modular target",
        },
        {
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          recommendedProfile: "Critical",
          requestedOperation: "architecture change for product",
        },
      ),
    ).toBe(true);
  });
});
