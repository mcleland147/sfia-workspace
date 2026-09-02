/** @vitest-environment node */
/**
 * MW2-S02 D0 — CKC semantic assistance authority boundary.
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";

const APP_ROOT = path.resolve(__dirname, "../..");
const PRODUCT_REGISTRY_ROOT = resolveProductDoctrineRegistryRoot(APP_ROOT);

function baseQualification(): QualificationDto {
  return {
    cycleTypeId: "cyc:delivery",
    cycleLabel: "Delivery",
    recommendedProfile: "Light",
    rationale: "Qualification catalogue standard.",
    criticalSignalsPresent: false,
    requiresJustificationForCritical: false,
    capitalizationViaCycleTypeId: false,
    isMorrisDecision: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    detailedStatus: "resolved_detailed",
    disclosures: [],
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    executionAuthority: false,
  };
}

function productNativeProof() {
  return {
    cycleTypeId: "cyc:delivery",
    detailedStatus: "resolved_detailed" as const,
    level: "detailed" as const,
    status: "resolved" as const,
    source: "product_package" as const,
    expectedPrimaryReference: "ckc:studio:delivery",
    usedReference: "ckc:studio:delivery",
    fallbackUsed: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    correlationId: "cor:mw2-ckc",
    resolvedAt: "2026-08-22T12:00:00.000Z",
    doctrineStatus: "product-studio-native" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: [] as readonly string[],
    doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    indexDigest:
      "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ckcId: "ckc:studio:delivery",
    ckcContractVersion: "0.1.0",
    sourceDigest:
      "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
    packageProvenance: {
      ckcId: "ckc:studio:delivery",
      cycleTypeId: "cyc:delivery",
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      contentDigest:
        "sha256:3318640c67e03090a63e7a37742002926e5baf1b6aad61496d0087d0f562151c",
      doctrineStatus: "product-studio-native" as const,
    },
  };
}

describe("MW2-S02 — CKC authority D0", () => {
  it("D0-20/D0-21 — product CKC enriches Recommendation with provenance", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      ckcCognitiveRecommendation:
        "[TEST] RECOMMANDATION CKC — borner le slice.",
    });
    expect(enriched.recommendationLabel).toBe(
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    );
    expect(enriched.ckcSemanticProvenance?.ckcId).toBe("ckc:studio:delivery");
    expect(enriched.ckcSemanticProvenance?.packageVersion).toBeTruthy();
  });

  it("D0-22/D0-23 — remains Recommendation-class with executionAuthority false", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched.recommendationLabel).toContain("RECOMMANDATION");
  });

  it("D0-24 — CKC enrichment does not grant HD / execution", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched).not.toHaveProperty("humanDecisionId");
  });

  it("D0-25 — non-product proof leaves qualification un-enriched", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: {
        ...productNativeProof(),
        source: "repository_candidate" as const,
        doctrineStatus: "method-candidate" as const,
      },
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.ckcSemanticProvenance).toBeUndefined();
  });

  it("D0-26 — business-first rationale scrubs technical CKC mechanics", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base rationale.",
      content,
    });
    expect(rationale).not.toMatch(/\[CKC:/);
    expect(rationale).not.toMatch(/ckc:studio:/);
    expect(rationale).toMatch(/Base rationale\./);
  });
});
