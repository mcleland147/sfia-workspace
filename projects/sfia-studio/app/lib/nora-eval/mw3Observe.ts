/**
 * MW3 — deterministic observations for nora-eval (MODELED + EVAL).
 */
import {
  decideCognitiveStop,
  disposeContradiction,
  dispositionIndependentOfStrategy,
  COGNITIVE_STRATEGY_CLASSES,
  type ContradictionConflictInput,
} from "@/lib/nora-cognitive-runtime";
import type { DeterministicObservation } from "./scorers";

export type Mw3RuntimeFacts = {
  candidateWhenInsufficient: boolean;
  evidenceBackedWhenSufficient: boolean;
  staleBlocked: boolean;
  wrongDomainBlocked: boolean;
  multiSourceInsufficient: boolean;
  multiSourceSufficient: boolean;
  fabricationRefused: boolean;
  nonGoverningNoStop: boolean;
  governingStop: boolean;
  technicalNotStop: boolean;
  silentSuccessBlocked: boolean;
  profileNullHonest: boolean;
  strategyIndependent: boolean;
  sourceBreadthFailClosed: boolean;
};

export function observationFromMw3Facts(
  facts: Mw3RuntimeFacts,
): DeterministicObservation {
  const ok =
    facts.candidateWhenInsufficient &&
    facts.evidenceBackedWhenSufficient &&
    facts.staleBlocked &&
    facts.wrongDomainBlocked &&
    facts.multiSourceInsufficient &&
    facts.multiSourceSufficient &&
    facts.fabricationRefused &&
    facts.nonGoverningNoStop &&
    facts.governingStop &&
    facts.technicalNotStop &&
    facts.silentSuccessBlocked &&
    facts.profileNullHonest &&
    facts.strategyIndependent &&
    facts.sourceBreadthFailClosed;

  return {
    productPath: "agents",
    mw3DispositionOk: ok,
    observedObservableIds: ok
      ? [
          "obs.contradiction.disposition",
          "obs.cognitive_stop.honesty",
          "obs.authority.human_decision_actor",
          "obs.authority.absolute_boundary",
        ]
      : [],
  };
}

const sufficient: ContradictionConflictInput = {
  conflictPresent: true,
  requiredDomains: ["governance"],
  requiredSourceCount: 2,
  freshnessMatters: true,
  evidencePointers: [
    {
      evidenceId: "ev:1",
      sourceId: "src:a",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
    {
      evidenceId: "ev:2",
      sourceId: "src:b",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
  ],
  trustedSfiaProfile: null,
};

export function observeMw3FromRuntime(): DeterministicObservation {
  const insufficient = disposeContradiction({
    conflictPresent: true,
    evidencePointers: [],
  });
  const backed = disposeContradiction(sufficient);
  const stale = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 1,
    freshnessMatters: true,
    evidencePointers: [
      {
        evidenceId: "ev:s",
        sourceId: "src:a",
        domain: "governance",
        freshness: "stale",
        attributable: true,
      },
    ],
  });
  const wrongDomain = disposeContradiction({
    conflictPresent: true,
    requiredDomains: ["governance"],
    requiredSourceCount: 1,
    evidencePointers: [
      {
        evidenceId: "ev:d",
        sourceId: "src:a",
        domain: "finance",
        freshness: "fresh",
        attributable: true,
      },
    ],
  });
  const multiInsuf = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 2,
    sourceBreadth: "low",
    evidencePointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
    requiredDomains: ["governance"],
  });
  const fabricated = disposeContradiction({
    conflictPresent: true,
    fabricationAttempt: true,
    evidencePointers: [
      {
        evidenceId: "ev:f",
        sourceId: "src:x",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
        fabricated: true,
      },
    ],
  });
  const nonGov = decideCognitiveStop({
    disposition: backed,
    governingPremiseInvalidated: false,
    localImpactOnly: true,
  });
  const gov = decideCognitiveStop({
    disposition: backed,
    governingPremiseInvalidated: true,
    governingPremise: "Governing premise",
  });
  const technical = decideCognitiveStop({
    disposition: disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    }),
    governingPremiseInvalidated: false,
    technicalFailure: true,
  });

  const facts: Mw3RuntimeFacts = {
    candidateWhenInsufficient: insufficient.disposition === "candidate",
    evidenceBackedWhenSufficient: backed.disposition === "evidence_backed",
    staleBlocked: stale.disposition === "candidate",
    wrongDomainBlocked: wrongDomain.disposition === "candidate",
    multiSourceInsufficient: multiInsuf.disposition === "candidate",
    multiSourceSufficient: backed.disposition === "evidence_backed",
    fabricationRefused:
      fabricated.disposition === "candidate" &&
      fabricated.insufficiencyReasons.includes("fabricated_pointer_rejected"),
    nonGoverningNoStop: nonGov.cognitiveStop === false,
    governingStop: gov.cognitiveStop === true && gov.outcome === "COGNITIVE_STOP",
    technicalNotStop: technical.cognitiveStop === false,
    silentSuccessBlocked: gov.allowsSilentSuccess === false,
    profileNullHonest: backed.trustedSfiaProfile === null,
    strategyIndependent: dispositionIndependentOfStrategy(sufficient, [
      ...COGNITIVE_STRATEGY_CLASSES,
    ]),
    sourceBreadthFailClosed: multiInsuf.insufficiencyReasons.includes(
      "insufficient_source_coverage",
    ),
  };

  return observationFromMw3Facts(facts);
}
