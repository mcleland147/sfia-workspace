/** @vitest-environment node */
/**
 * CORR-MW5-01B — authoritative product-fact projection (fail-closed).
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
        scope: "Périmètre projet",
        decisionIds: [],
      },
      consumedDecisions: [],
      claim: architectureClaim,
    });
    expect(facts.truthCEstablishedForClaim).toBe(true);
    expect(facts.reasonCodes).toContain(
      "truth_c_structured_objective_or_scope_match",
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
