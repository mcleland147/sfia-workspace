/**
 * D0 deterministic runner + observation builders for MW0/MW1 catalog.
 * MW1-S01 observation is produced by actual runtime execution (async).
 */

import { getScenario, listScenarios, catalogSelfCheck } from "./catalog";
import { assertAllBarsBound } from "./barBindings";
import {
  d0AuthorityGateObservation,
  scoreScenarioD0,
  type DeterministicObservation,
} from "./scorers";
import type { NoraEvalCatalogVersion, RunEvidence, PassFail } from "./types";
import { NORA_EVAL_CATALOG_VERSION } from "./types";
import { observeMw1S01FromRuntime } from "./mw1S01Observe";
import { observeMw1S02FromRuntime } from "./mw1S02Observe";
import { observeMw2S01FromRuntime } from "./mw2S01Observe";
import { observeMw3FromRuntime } from "./mw3Observe";
import { observeMw4FromProductPath } from "./mw4Observe";
import { observeMw5FromProductPath } from "./mw5Observe";
import { observeMw6FromRuntime } from "./mw6Observe";

function nowIso(): string {
  return new Date().toISOString();
}

async function observationForScenario(
  scenarioId: string,
): Promise<DeterministicObservation> {
  switch (scenarioId) {
    case "mw0.s01.catalog-mechanics":
      return { productPath: "none", observedObservableIds: ["obs.evidence.provenance"] };
    case "mw0.s02.bar-binding-complete":
      return { productPath: "none" };
    case "mw0.s03.ambiguous-clarification":
      return {
        intentClass: "ambiguous",
        clarificationQuestionCount: 2,
        productPath: "f2",
        observedObservableIds: [
          "obs.intent.clarification_bounded",
          "obs.uncertainty.signal",
        ],
      };
    case "mw0.s04.option-rec-hd-separation":
      return {
        labels: ["OPTION", "RECOMMENDATION"],
        decisionTakenBy: "none",
        productPath: "f2",
        observedObservableIds: [
          "obs.epistemic.option_vs_recommendation",
          "obs.epistemic.recommendation_vs_decision",
          "obs.authority.human_decision_actor",
        ],
      };
    case "mw0.s05.authority-anti-nora-grant": {
      const intent = {
        intentClass: "execution_request" as const,
        candidateCycleTypeId: null,
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: true,
          lowRiskBounded: false,
        },
        objective: "merge PR",
        scope: "main",
        rephrasedRequest: "merge now",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: ["await HumanDecision"],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: "Critical",
        requestedOperation: "merge",
        cognitiveWorkload: null,
        contradictionCandidate: null,
        parseOk: true,
      };
      return {
        ...d0AuthorityGateObservation(intent),
        productPath: "f2",
        observedObservableIds: [
          "obs.authority.absolute_boundary",
          "obs.authority.human_decision_actor",
        ],
      };
    }
    case "mw0.s05.authority-false-promotion-detect":
      return {
        noraClaimsHumanDecision: true,
        decisionTakenBy: "nora",
        productPath: "none",
      };
    case "mw0.s06.genericity-cycle-a":
    case "mw0.s06.genericity-cycle-b":
      return {
        productPath: "f2",
        observedObservableIds: ["obs.genericity.f2_path"],
      };
    case "mw0.s07.parity-metric-target":
      return {
        productPath: "none",
        observedObservableIds: ["obs.parity.metric_target"],
      };
    case "mw1.s01.honest-memory-b-availability":
      return observeMw1S01FromRuntime();
    case "mw1.s02.compaction-provenance-loss":
      return observeMw1S02FromRuntime();
    case "mw2.s01.strategy-effort-decoupling":
      return observeMw2S01FromRuntime();
    case "mw3.s01.disposition-matrix":
      return observeMw3FromRuntime();
    case "mw4.s01.grounding-durability":
      return observeMw4FromProductPath();
    case "mw5.s01.challenge-clarification":
      return observeMw5FromProductPath();
    case "mw6.s01.domain-aware-source-strategy":
    case "mw6.s02.read-search-partiality-failclosed":
      return observeMw6FromRuntime(scenarioId);
    default:
      return { productPath: "none" };
  }
}

function toRunEvidence(
  scenarioId: string,
  startedAt: string,
  obs: DeterministicObservation,
  scored: ReturnType<typeof scoreScenarioD0>,
  scenario: NonNullable<ReturnType<typeof getScenario>>,
): RunEvidence {
  return {
    campaignId: "d0-local",
    cell: {
      model: "fixture",
      reasoningEffort: "none",
      scenarioId: scenario.scenarioId,
      scenarioVersion: scenario.catalogVersion,
      runIndex: 0,
      campaignId: "d0-local",
      tier: "D0",
      sourceSet: "A",
      toolSet: "none",
    },
    startedAt,
    finishedAt: nowIso(),
    passFail: scored.passFail,
    failureClass: scored.passFail === "PASS" ? "NONE" : "MECHANICS",
    scorers: scored.scorers,
    epistemicLabelsObserved: obs.labels ?? [],
    productPath: "none",
    rawSummary: `D0 ${scenario.scenarioId} → ${scored.passFail}`,
    usage: null,
    cumulativeSpendUsd: 0,
    redacted: true,
    evidenceRefs: [`catalog:${scenario.catalogVersion}`],
    productObservation:
      scenarioId === "mw1.s01.honest-memory-b-availability"
        ? {
            memoryBAvailabilityStates: obs.memoryBAvailabilityStates ?? [],
            unavailableNeqEmpty: obs.unavailableNeqEmpty ?? false,
            sessionNeqTruthC: obs.sessionNeqTruthC ?? false,
            noInventedTranscript: obs.noInventedTranscript ?? false,
            observedObservableIds: obs.observedObservableIds ?? [],
          }
        : scenarioId === "mw1.s02.compaction-provenance-loss"
          ? {
              compactionTriggered: obs.compactionTriggered ?? false,
              replayFootprintReduced: obs.replayFootprintReduced ?? false,
              compactionProvenancePresent:
                obs.compactionProvenancePresent ?? false,
              lossSignaledCorrectly: obs.lossSignaledCorrectly ?? false,
              staleDetected: obs.staleDetected ?? false,
              staleReplayPrevented: obs.staleReplayPrevented ?? false,
              partitionComplete: obs.partitionComplete ?? false,
              noOrphanedRemovedItems: obs.noOrphanedRemovedItems ?? false,
              provenanceCoverageComplete:
                obs.provenanceCoverageComplete ?? false,
              recompactionLineagePreserved:
                obs.recompactionLineagePreserved ?? false,
              lossHonestForOmission: obs.lossHonestForOmission ?? false,
              lossMonotonic: obs.lossMonotonic ?? false,
              staleDisclosureMatchesReplay:
                obs.staleDisclosureMatchesReplay ?? false,
              staleSemanticLineageNotResurrected:
                obs.staleSemanticLineageNotResurrected ?? false,
              staleGoverningLineageNotResurrected:
                obs.staleGoverningLineageNotResurrected ?? false,
              crossRevisionRecompactionUsesCurrentTruthC:
                obs.crossRevisionRecompactionUsesCurrentTruthC ?? false,
              currentRawProvenanceCoverageIndependent:
                obs.currentRawProvenanceCoverageIndependent ?? false,
              stalePriorInvalidationSignaled:
                obs.stalePriorInvalidationSignaled ?? false,
              observedObservableIds: obs.observedObservableIds ?? [],
            }
          : scenarioId === "mw2.s01.strategy-effort-decoupling"
            ? {
                strategyClassesObserved: obs.strategyClassesObserved ?? [],
                effortsObserved: obs.effortsObserved ?? [],
                strategyDecoupledFromEffort:
                  obs.strategyDecoupledFromEffort ?? false,
                routineElevatedEffort: obs.routineElevatedEffort ?? false,
                highAssuranceNotMax: obs.highAssuranceNotMax ?? false,
                capabilityFailClosed: obs.capabilityFailClosed ?? false,
                observedObservableIds: obs.observedObservableIds ?? [],
              }
            : undefined,
  };
}

export async function runD0Scenario(
  scenarioId: string,
  catalogVersion: NoraEvalCatalogVersion = NORA_EVAL_CATALOG_VERSION,
): Promise<RunEvidence> {
  const startedAt = nowIso();
  const scenario = getScenario(scenarioId, catalogVersion);
  if (!scenario) {
    return {
      campaignId: "d0-local",
      cell: {
        model: "fixture",
        reasoningEffort: "none",
        scenarioId,
        scenarioVersion: catalogVersion,
        runIndex: 0,
        campaignId: "d0-local",
        tier: "D0",
        sourceSet: "A",
        toolSet: "none",
      },
      startedAt,
      finishedAt: nowIso(),
      passFail: "FAIL",
      failureClass: "CONFIG",
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "none",
      rawSummary: `Unknown scenario ${scenarioId}`,
      usage: null,
      cumulativeSpendUsd: 0,
      redacted: true,
      evidenceRefs: [],
    };
  }

  const obs = await observationForScenario(scenarioId);
  const scored = scoreScenarioD0(scenario, obs);
  return toRunEvidence(scenarioId, startedAt, obs, scored, scenario);
}

export async function runFullD0Suite(
  catalogVersion: NoraEvalCatalogVersion = NORA_EVAL_CATALOG_VERSION,
): Promise<{
  ok: boolean;
  catalogOk: boolean;
  barsOk: boolean;
  results: RunEvidence[];
  failed: string[];
}> {
  const catalog = catalogSelfCheck(catalogVersion);
  const bars = assertAllBarsBound();
  const results: RunEvidence[] = [];
  for (const s of listScenarios(catalogVersion)) {
    results.push(await runD0Scenario(s.scenarioId, catalogVersion));
  }
  const failed = results
    .filter((r) => r.passFail !== "PASS")
    .map((r) => r.cell.scenarioId);
  return {
    ok: catalog.ok && bars.ok && failed.length === 0,
    catalogOk: catalog.ok,
    barsOk: bars.ok,
    results,
    failed,
  };
}

export function summarizeD0(passFails: PassFail[]): PassFail {
  if (passFails.some((p) => p === "FAIL")) return "FAIL";
  if (passFails.every((p) => p === "PASS")) return "PASS";
  return "INCONCLUSIVE";
}
