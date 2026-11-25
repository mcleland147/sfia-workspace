import { describe, expect, it } from "vitest";
import {
  resolvePublicWebRegistry,
  loadPublicTopicCatalog,
} from "@/domains/conversation/public-web-registry";
import { extractProviderUsageFromRunResult } from "@/domains/conversation/provider-usage";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "@/domains/proofs/d8-cognitive-criterion-eval";

describe("C24 public WEB registry feeding", () => {
  it("registers catalog topic when haystack matches — not free-form Nora text", () => {
    const r = resolvePublicWebRegistry({
      haystack: "Quelle est la version Node.js LTS actuelle ?",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics["node-lts"]).toMatch(/Node\.js/);
    expect(r.limits.some((l) => /CATALOG_REGISTERED:node-lts/.test(l))).toBe(
      true,
    );
  });

  it("leaves registry empty when no catalog match", () => {
    const r = resolvePublicWebRegistry({
      haystack: "corrige le bug de validation CSV interne",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(Object.keys(r.topics)).toHaveLength(0);
    expect(r.limits).toContain("PUBLIC_WEB_REGISTRY_EMPTY");
  });

  it("DEV catalog loads by default", () => {
    const c = loadPublicTopicCatalog({
      STUDIO_LANE: "DEV",
      SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1",
    });
    expect(c.length).toBeGreaterThan(0);
  });

  it("RECETTE loads the same default public catalog (parity)", () => {
    const c = loadPublicTopicCatalog({ STUDIO_LANE: "RECETTE" });
    expect(c.length).toBeGreaterThan(0);
    const r = resolvePublicWebRegistry({
      haystack: "Consulte la doc Next.js App Router",
      env: { STUDIO_LANE: "RECETTE" },
    });
    expect(r.topics["nextjs-docs"]).toMatch(/Next\.js/);
  });

  it("STABLE gets empty default catalog", () => {
    expect(loadPublicTopicCatalog({ STUDIO_LANE: "STABLE" })).toEqual([]);
  });

  it("registers Power Query catalog and extracts pilot URL candidates (not auto-authorized)", () => {
    const url =
      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
    const text = `Compare avec ${url} et le connecteur SharePoint Folder`;
    const r = resolvePublicWebRegistry({
      pilotText: text,
      haystack: text,
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics["ms-power-query"] || r.topics["ms-sharepoint-folder-pq"]).toBeTruthy();
    expect(r.pilotProvidedUrls).toContain(url);
    expect(r.limits).toContain("PILOT_URL_NOT_AUTO_AUTHORIZED");
  });
});

describe("C24 provider usage extraction", () => {
  it("returns UNAVAILABLE without inventing zeros when absent", () => {
    const u = extractProviderUsageFromRunResult({});
    expect(u.provenance).toBe("UNAVAILABLE");
    expect(u.inputTokens).toBeNull();
  });

  it("reads Agents SDK state.usage aggregates and details", () => {
    const u = extractProviderUsageFromRunResult({
      state: {
        usage: {
          requests: 2,
          inputTokens: 100,
          outputTokens: 50,
          totalTokens: 150,
          inputTokensDetails: [{ cached_tokens: 20 }],
          outputTokensDetails: [{ reasoning_tokens: 30 }],
        },
      },
    });
    expect(u.provenance).toBe("AGENTS_SDK_RUN_STATE");
    expect(u.inputTokens).toBe(100);
    expect(u.outputTokens).toBe(50);
    expect(u.cachedInputTokens).toBe(20);
    expect(u.reasoningTokens).toBe(30);
    expect(u.providerRequests).toBe(2);
  });
});

describe("C24 cognitive criterion assessments", () => {
  it("never upgrades unverified technical evidence via SUPPORTS", () => {
    const cog = heuristicCognitiveCriterionAssessments({
      criteria: ["src/x.ts export foo"],
      criterionEvidence: {
        "src/x.ts export foo": {
          refs: ["src/x.ts"],
          verified: false,
          note: "accessible only",
        },
      },
    });
    const applied = applyCognitiveAssessmentsToEvidence({
      criterionEvidence: {
        "src/x.ts export foo": {
          refs: ["src/x.ts"],
          verified: false,
        },
      },
      assessments: cog.assessments.map((a) => ({
        ...a,
        judgment: "SUPPORTS" as const,
      })),
    });
    expect(applied.criterionEvidence["src/x.ts export foo"]?.verified).toBe(
      false,
    );
    expect(
      applied.limits.some((l) => /COGNITIVE_SUPPORTS_NON_CERTIFYING/.test(l)),
    ).toBe(true);
  });

  it("downgrades verified when cognitive CONTRADICTS", () => {
    const applied = applyCognitiveAssessmentsToEvidence({
      criterionEvidence: {
        "export bar": { refs: ["a.ts"], verified: true },
      },
      assessments: [
        {
          criterion: "export bar",
          judgment: "CONTRADICTS",
          rationale: "symbol absent",
          piecesConsulted: ["a.ts"],
          provenance: "DETERMINISTIC_HEURISTIC",
        },
      ],
    });
    expect(applied.criterionEvidence["export bar"]?.verified).toBe(false);
  });
});
