/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  CKC_ATTRIBUTION_MARKER_PREFIX,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  buildCkcCognitivePromptSection,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import * as qualifyModule from "@/features/project-assistant/f2/qualify";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

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

function methodCandidateProof() {
  return {
    cycleTypeId: "cyc:delivery",
    detailedStatus: "resolved_detailed" as const,
    level: "detailed" as const,
    status: "resolved" as const,
    source: "repository_candidate" as const,
    expectedPrimaryReference: "ckc:studio:delivery",
    usedReference: "ckc:studio:delivery",
    fallbackUsed: false,
    catalogVersion: "test",
    catalogHash: "sha256:test",
    correlationId: "cor:test-method",
    resolvedAt: "2026-08-22T12:00:00.000Z",
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: [] as readonly string[],
  };
}

function productNativeProof() {
  return {
    ...methodCandidateProof(),
    doctrineStatus: "product-studio-native" as const,
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

describe("W1 bounded CKC→Nora semantic seam", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    setConversationProviderForTests(null);
  });

  it("loads delivery CKC markdown from product package via repository seam", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    expect(content?.ckcId).toBe("ckc:studio:delivery");
    expect(content?.markdown.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });

  it("control vs treatment: provider output differs with resolved CKC context", async () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeTruthy();
    if (!content) return;

    const control = await reasonWithResolvedCkcContext({
      userContent: "Prépare la prochaine étape __F2_ACTIONABLE__",
      projectSummary: "name=Test | objective=Delivery",
      intentSummary: "Préparer une proposition de livraison bornée",
      ckcPromptSection: null,
    });
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Prépare la prochaine étape __F2_ACTIONABLE__",
      projectSummary: "name=Test | objective=Delivery",
      intentSummary: "Préparer une proposition de livraison bornée",
      ckcPromptSection: buildCkcCognitivePromptSection(content),
    });

    expect(control.recommendation.toLowerCase()).toContain("générique");
    expect(control.recommendation.toLowerCase()).not.toMatch(/anti scope creep/);
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).toContain("RECOMMANDATION");
    expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
  });

});

describe("W1 bounded CKC→Nora semantic seam — enrichment", () => {
  it("control: method-candidate proof keeps generic rationale without CKC marker", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: methodCandidateProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(enriched.rationale).toBe("Qualification catalogue standard.");
    expect(enriched.rationale).not.toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
    expect(enriched.ckcSemanticProvenance).toBeUndefined();
    expect(enriched.ckcCognitiveRecommendation).toBeUndefined();
  });

  it("treatment: product-native proof enriches rationale with attributable CKC marker", () => {
    const enriched = enrichQualificationWithCkcSemantics({
      qualification: baseQualification(),
      proof: productNativeProof(),
      registryRoot: PRODUCT_REGISTRY_ROOT,
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      ckcCognitiveRecommendation:
        "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice.",
    });
    expect(enriched.rationale).toContain(CKC_ATTRIBUTION_MARKER_PREFIX);
    expect(enriched.rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
    expect(enriched.isMorrisDecision).toBe(false);
    expect(enriched.executionAuthority).toBe(false);
    expect(enriched.ckcSemanticProvenance?.ckcId).toBe("ckc:studio:delivery");
    expect(enriched.ckcCognitiveRecommendation?.toLowerCase()).toMatch(
      /anti scope creep/,
    );
  });

  it("deriveCkcAttributedRecommendation is deterministic without live OpenAI", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base.",
      content,
    });
    expect(rationale).toMatch(/Base\./);
    expect(rationale.toLowerCase()).toMatch(/anti scope creep|scope creep/);
  });
});

describe("W1 bounded CKC→Nora — orchestrate enrichment hook", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w1-d-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-22T12:00:00.000Z",
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_REGISTRY_ROOT,
    });
    const created = await runtime.createProject({
      name: "W1 CKC Seam",
      objective: "Prove bounded CKC semantic enrichment.",
      context: "W1 Track D",
      criticality: "STANDARD",
      constraints: ["TEST ONLY"],
      shortReference: "W1D",
      idempotencyKey: `idem:w1d-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("orchestrates product-native Nora/provider cognitive output on actionable turn", async () => {
    vi.spyOn(qualifyModule, "qualifyWithCkc").mockResolvedValue({
      ok: true,
      qualification: baseQualification(),
      raw: {
        state: "success",
        cycleTypeId: "cyc:delivery",
        label: "Delivery",
        shortDescription: "Implémentation bornée",
        lifecycleStatus: "active",
        catalogVersion: "test",
        catalogHash: "sha256:test",
        correlationId: "cor:test-method",
        detailedStatus: "resolved_detailed",
        proof: productNativeProof(),
        recommendedProfile: "Light",
        rationale: "Qualification catalogue standard.",
        criticalSignalsPresent: false,
        requiresJustificationForCritical: false,
        capitalizationViaCycleTypeId: false,
        isMorrisDecision: false,
        disclosures: [],
        resolvedAt: "2026-08-22T12:00:00.000Z",
        qualifiedAt: "2026-08-22T12:00:00.000Z",
      },
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.ckcCognitiveRecommendation?.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.executionAuthority).toBe(false);
    expect(result.f2?.qualification?.ckcSemanticProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(result.text.toLowerCase()).toMatch(/anti scope creep/);
  });
});
