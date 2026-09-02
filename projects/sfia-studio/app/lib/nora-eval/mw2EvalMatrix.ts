/**
 * MW2 deterministic EVAL matrix (CORR-MW2-DLV-03).
 *
 * Taxonomy note:
 * EVAL is an assessment matrix, not a new EvidenceTier.
 * Existing harness tiers remain D0 / R1 / R2 / R3.
 * This module uses D0-tier harness mechanics for deterministic observation/scoring.
 */
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  validateRuntimeReasoningCapability,
  type CognitiveStrategyClass,
} from "@/lib/nora-cognitive-runtime";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  DEFAULT_PRODUCT_DOCTRINE_PIN,
  deriveCkcAttributedRecommendation,
  enrichQualificationWithCkcSemantics,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import type { QualificationDto } from "@/features/project-assistant/f2/types";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import path from "node:path";

export type Mw2EvalCaseResult = {
  caseId: string;
  story: "MW2-S01" | "MW2-S02";
  inputSummary: string;
  observedStrategy?: CognitiveStrategyClass | null;
  observedEffort?: string | null;
  expectedStrategy?: CognitiveStrategyClass | string;
  capabilityResult?: "ok" | "fail_closed";
  authorityResult?: string;
  passFail: "PASS" | "FAIL";
  detail: string;
  observableIds: string[];
};

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
    correlationId: "cor:mw2-eval-ckc",
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

export function evaluateMw2S01Matrix(): Mw2EvalCaseResult[] {
  const results: Mw2EvalCaseResult[] = [];

  // S1 ROUTINE
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
        rigorCriticality: "low",
        contextSize: "low",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "Routine" &&
      ["none", "low", "medium"].includes(d.reasoningEffort) &&
      !("model" in d);
    results.push({
      caseId: "S1",
      story: "MW2-S01",
      inputSummary: "known low ambiguity/breadth/verification/contradiction",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Routine",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Routine + envelope effort" : "S1 mismatch",
      observableIds: ok ? ["obs.cwp.s1_routine"] : [],
    });
  }

  // S2 FOCUSED (bootstrap / insufficient truth)
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
      }),
      trustedSfiaProfile: null,
    });
    const ok = d.strategyClass === "Focused" && d.bootstrapUsed === true;
    results.push({
      caseId: "S2",
      story: "MW2-S01",
      inputSummary: "moderate/insufficient truth + no trusted Profile",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Focused",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Focused bootstrap" : "S2 mismatch",
      observableIds: ok ? ["obs.cwp.s2_focused"] : [],
    });
  }

  // S3 DEEP
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "Deep" &&
      ["medium", "high", "xhigh"].includes(d.reasoningEffort);
    results.push({
      caseId: "S3",
      story: "MW2-S01",
      inputSummary: "known high depth + multi-source breadth",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "Deep",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "Deep envelope" : "S3 mismatch",
      observableIds: ok ? ["obs.cwp.s3_deep"] : [],
    });
  }

  // S4 HIGH-ASSURANCE
  {
    const d = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "medium",
        contextSize: "medium",
      }),
      trustedSfiaProfile: "profile",
    });
    const ok =
      d.strategyClass === "High-Assurance" &&
      d.criticalChallengeArmed === true &&
      d.reasoningEffort !== "max";
    results.push({
      caseId: "S4",
      story: "MW2-S01",
      inputSummary: "critical rigor + verification",
      observedStrategy: d.strategyClass,
      observedEffort: d.reasoningEffort,
      expectedStrategy: "High-Assurance",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "HA armed, not auto-max" : "S4 mismatch",
      observableIds: ok ? ["obs.cwp.s4_high_assurance"] : [],
    });
  }

  // S5 SAME PROFILE / DIFFERENT WORKLOAD
  {
    const profile = "SFIA-Profile-Exact";
    const a = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        reasoningDepth: "low",
        contradictionRisk: "low",
        rigorCriticality: "low",
      }),
      trustedSfiaProfile: profile,
    });
    const b = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        sourceBreadth: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: profile,
    });
    const sameClassDiffEffortLow = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "low",
      }),
      trustedSfiaProfile: profile,
    });
    const sameClassDiffEffortHigh = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "medium",
        rigorCriticality: "medium",
        contextSize: "high",
        toolDependency: "high",
        verificationNeed: "medium",
      }),
      trustedSfiaProfile: profile,
    });
    const ok =
      a.strategyClass !== b.strategyClass &&
      a.strategyClass === "Routine" &&
      b.strategyClass === "Deep" &&
      sameClassDiffEffortLow.strategyClass ===
        sameClassDiffEffortHigh.strategyClass &&
      sameClassDiffEffortLow.reasoningEffort !==
        sameClassDiffEffortHigh.reasoningEffort;
    results.push({
      caseId: "S5",
      story: "MW2-S01",
      inputSummary: "same trusted Profile, different workloads",
      observedStrategy: a.strategyClass,
      observedEffort: `${a.strategyClass}/${b.strategyClass}`,
      expectedStrategy: "Routine≠Deep + same-class different efforts",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok
        ? "Strategy≠Profile rename; Strategy≠effort"
        : "S5 mismatch",
      observableIds: ok ? ["obs.cwp.s5_profile_independence"] : [],
    });
  }

  // S6 UNSUPPORTED CAPABILITY
  {
    let failClosed = false;
    try {
      validateRuntimeReasoningCapability("gpt-unknown-model", "low");
    } catch (e) {
      failClosed = e instanceof TechnicalError;
    }
    let minimalRejected = false;
    try {
      validateRuntimeReasoningCapability("gpt-5.6-luna", "minimal");
    } catch (e) {
      minimalRejected = e instanceof TechnicalError;
    }
    const ok = failClosed && minimalRejected;
    results.push({
      caseId: "S6",
      story: "MW2-S01",
      inputSummary: "unknown model + unsupported minimal effort",
      capabilityResult: ok ? "fail_closed" : "ok",
      expectedStrategy: "n/a",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "fail-closed, no coercion" : "S6 mismatch",
      observableIds: ok ? ["obs.cwp.s6_capability"] : [],
    });
  }

  return results;
}

export function evaluateMw2S02Matrix(): Mw2EvalCaseResult[] {
  const results: Mw2EvalCaseResult[] = [];
  const APP_ROOT = path.resolve(__dirname, "../..");
  const PRODUCT_REGISTRY_ROOT = resolveProductDoctrineRegistryRoot(APP_ROOT);

  const withCkc = enrichQualificationWithCkcSemantics({
    qualification: baseQualification(),
    proof: productNativeProof(),
    registryRoot: PRODUCT_REGISTRY_ROOT,
    packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    ckcCognitiveRecommendation:
      "[TEST] RECOMMANDATION CKC — anti scope creep : borner le slice Delivery.",
  });

  const withoutCkc = enrichQualificationWithCkcSemantics({
    qualification: baseQualification(),
    proof: {
      ...productNativeProof(),
      source: "repository_candidate" as const,
      doctrineStatus: "method-candidate" as const,
    },
    registryRoot: PRODUCT_REGISTRY_ROOT,
    packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    ckcCognitiveRecommendation:
      "[TEST] RECOMMANDATION CKC — anti scope creep : borner le slice Delivery.",
  });

  // CKC-E1
  {
    const ok =
      withCkc.recommendationLabel ===
        "RECOMMANDATION — PAS UNE DÉCISION HUMAINE" &&
      withCkc.executionAuthority === false &&
      withCkc.isMorrisDecision === false &&
      !!withCkc.ckcSemanticProvenance?.ckcId &&
      /anti scope creep|borner/i.test(withCkc.rationale);
    results.push({
      caseId: "CKC-E1",
      story: "MW2-S02",
      inputSummary: "product-native CKC + semantic guidance",
      authorityResult: `executionAuthority=${withCkc.executionAuthority}`,
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "enriched Recommendation + provenance" : "E1 mismatch",
      observableIds: ok ? ["obs.ckc.e1_enrich"] : [],
    });
  }

  // CKC-E2 — semantic delta vs baseline without applicable CKC
  {
    const delta =
      withCkc.rationale !== withoutCkc.rationale &&
      /anti scope creep|borner/i.test(withCkc.rationale) &&
      withoutCkc.ckcSemanticProvenance === undefined;
    results.push({
      caseId: "CKC-E2",
      story: "MW2-S02",
      inputSummary: "with vs without applicable CKC semantic guidance",
      passFail: delta ? "PASS" : "FAIL",
      detail: delta
        ? "observable semantic delta attributable to CKC"
        : "E2 no semantic delta",
      observableIds: delta ? ["obs.ckc.e2_semantic_delta"] : [],
    });
  }

  // CKC-E3
  {
    const ok =
      withoutCkc.ckcSemanticProvenance === undefined &&
      withoutCkc.executionAuthority === false;
    results.push({
      caseId: "CKC-E3",
      story: "MW2-S02",
      inputSummary: "non-product-native / fallback proof",
      authorityResult: `executionAuthority=${withoutCkc.executionAuthority}`,
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "no trusted enrichment" : "E3 mismatch",
      observableIds: ok ? ["obs.ckc.e3_fallback"] : [],
    });
  }

  // CKC-E4
  {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY_ROOT,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    const rationale = deriveCkcAttributedRecommendation({
      baseRationale: "Base rationale.",
      content,
    });
    const ok =
      !/\[CKC:/.test(rationale) &&
      !/ckc:studio:/.test(rationale) &&
      !/sha256:/.test(rationale);
    results.push({
      caseId: "CKC-E4",
      story: "MW2-S02",
      inputSummary: "business-first rationale scrubbing",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "no technical CKC leakage" : "E4 leakage",
      observableIds: ok ? ["obs.ckc.e4_business_first"] : [],
    });
  }

  // CKC-E5
  {
    const ok =
      withCkc.executionAuthority === false &&
      withCkc.isMorrisDecision === false &&
      !("humanDecisionId" in withCkc) &&
      !("confirmationId" in withCkc) &&
      !("executionContractId" in withCkc);
    results.push({
      caseId: "CKC-E5",
      story: "MW2-S02",
      inputSummary: "no HD/Confirmation/EC/write/execute shortcut",
      authorityResult: "no authority expansion",
      passFail: ok ? "PASS" : "FAIL",
      detail: ok ? "CKC ≠ authority" : "E5 authority leak",
      observableIds: ok ? ["obs.ckc.e5_no_shortcut"] : [],
    });
  }

  return results;
}

export function summarizeMw2EvalMatrix(): {
  s01: Mw2EvalCaseResult[];
  s02: Mw2EvalCaseResult[];
  s01Pass: boolean;
  s02Pass: boolean;
  allPass: boolean;
} {
  const s01 = evaluateMw2S01Matrix();
  const s02 = evaluateMw2S02Matrix();
  const s01Pass = s01.every((c) => c.passFail === "PASS");
  const s02Pass = s02.every((c) => c.passFail === "PASS");
  return { s01, s02, s01Pass, s02Pass, allPass: s01Pass && s02Pass };
}
