import { describe, expect, it } from "vitest";
import {
  composePilotPublicSearchQuery,
  extractPilotProvidedPublicUrls,
  resolvePublicWebRegistry,
  admitNoraProposedPublicQuery,
  PILOT_PUBLIC_QUERY_REF,
} from "@/domains/conversation/public-web-registry";
import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";
import {
  composeInvestigationPartialRestitution,
  formatInvestigationContinuationContext,
  scaleSegmentCharBudget,
} from "@/domains/conversation/investigation-continuation";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import {
  buildConserveOnlyQualification,
  isConserveProposalTransmit,
  DOC_CONSERVE_PROPOSAL,
} from "@/domains/conversation/document-candidate";
import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";
import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";

describe("A — investigation continuation / restitution", () => {
  it("includes consulted sources and answered questions in continuation context", () => {
    const state = createEmptyInvestigation("Analyse convergence");
    state.sources = [
      {
        kind: "D4",
        ref: "doc_1",
        title: "Cadrage Pilotage 360",
        coverage: "CONSULTED",
        notes: "Fonctionnalités prévues listées",
      },
      {
        kind: "WEB",
        ref: "https://example.com/x",
        title: "Example",
        coverage: "DISCOVERED",
      },
    ];
    state.questions = [
      {
        id: "q1",
        text: "Écarts de conception ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "Trois écarts consolidés sur le parcours sas",
      },
    ];
    const block = formatInvestigationContinuationContext(state);
    expect(block).toMatch(/Cadrage Pilotage 360/);
    expect(block).toMatch(/Trois écarts/);
    expect(block).toMatch(/DISCOVERED/);
  });

  it("honest partial distinguishes no conclusions vs acquis", () => {
    const empty = createEmptyInvestigation("x");
    const t1 = composeInvestigationPartialRestitution({
      state: empty,
      suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
    });
    expect(t1).toMatch(/Aucune conclusion métier fiable/);
    expect(t1).toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);

    const rich = createEmptyInvestigation("y");
    rich.questions = [
      {
        id: "q1",
        text: "Objectif ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "Comparer cadrage et conception",
      },
    ];
    const t2 = composeInvestigationPartialRestitution({ state: rich });
    expect(t2).toMatch(/Comparer cadrage/);
  });

  it("scales segment char budget without raising global ceilings", () => {
    expect(scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 10_000 }).reasonCode).toBe(
      "SEGMENT_BUDGET_FULL",
    );
    expect(
      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 120_000 }).chars,
    ).toBeLessThan(40_000);
    expect(
      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 180_000 }).reasonCode,
    ).toBe("SEGMENT_BUDGET_MINIMAL_RESTITUTION");
  });
});

describe("B/C — WEB admission (post T1 regularization)", () => {
  it("does not lexically register a generic public subject", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
      haystack:
        "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
    expect(r.limits).toContain("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");
  });

  it("Nora proposal + server admit enables authorize under B1 modes", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "QUIC protocol site:datatracker.ietf.org",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);
    const auth = authorizePublicWebQuery({
      publicTopicRef: admitted.ref,
      turnPublicTopics: { [admitted.ref]: admitted.query },
      turnAuthorizedExactQueries: [admitted.query],
    });
    expect(auth.ok).toBe(true);
  });

  it("does not register free-form internal work", () => {
    const r = resolvePublicWebRegistry({
      pilotText: "corrige le bug de validation CSV interne du sas",
      haystack: "corrige le bug de validation CSV interne du sas",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
  });

  it("composePilotPublicSearchQuery remains disabled", () => {
    const bad = composePilotPublicSearchQuery(
      "recherche documentation confidentiel budget interne",
    );
    expect(bad.ok).toBe(false);
  });
});

describe("C — WEB P0 URL provenance", () => {
  it("extracts URLs only via assertPublicHttpsUrl (credentials / private fail)", () => {
    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
    const urls = extractPilotProvidedPublicUrls(
      "voir https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query et https://user:secret@evil.test/x et https://192.168.1.1/y",
    );
    expect(urls).toEqual([
      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
    ]);
  });

  it("does not treat URLs from objective/checkpoint haystack as pilot-provided when pilotText absent", () => {
    const r = resolvePublicWebRegistry({
      haystack:
        "Peux-tu comparer ces approches ?\nhttps://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query\ncheckpoint prior",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.pilotProvidedUrls).toHaveLength(0);
  });
});

describe("D — conserve-only qualification", () => {
  it("projects REVISE documentAct without provider", () => {
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
    const q = buildConserveOnlyQualification({ documentId: "doc_abc" });
    const proj = projectStudioEffects(q);
    expect(proj.documentAct.kind).toBe("REVISE");
  });
});
