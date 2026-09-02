/**
 * MW2-S01 — runtime-derived deterministic observations for nora-eval.
 */
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  runNoraCognitiveTurn,
  validateRuntimeReasoningCapability,
} from "@/lib/nora-cognitive-runtime";
import { TechnicalError } from "@/lib/platform/ai/errors";
import type { DeterministicObservation } from "./scorers";

export type Mw2S01RuntimeFacts = {
  strategyClassesObserved: string[];
  effortsObserved: string[];
  strategyDecoupledFromEffort: boolean;
  routineElevatedEffort: boolean;
  highAssuranceNotMax: boolean;
  capabilityFailClosed: boolean;
  noModelRouting: boolean;
};

export function observationFromMw2S01Facts(
  facts: Mw2S01RuntimeFacts,
): DeterministicObservation {
  const ok =
    facts.strategyClassesObserved.length >= 3 &&
    facts.strategyDecoupledFromEffort &&
    facts.routineElevatedEffort &&
    facts.highAssuranceNotMax &&
    facts.capabilityFailClosed &&
    facts.noModelRouting;

  return {
    productPath: "agents",
    strategyClassesObserved: facts.strategyClassesObserved,
    effortsObserved: facts.effortsObserved,
    strategyDecoupledFromEffort: facts.strategyDecoupledFromEffort,
    routineElevatedEffort: facts.routineElevatedEffort,
    highAssuranceNotMax: facts.highAssuranceNotMax,
    capabilityFailClosed: facts.capabilityFailClosed,
    observedObservableIds: ok ? ["obs.cwp.strategy_effort"] : [],
  };
}

export async function observeMw2S01FromRuntime(): Promise<DeterministicObservation> {
  const routineElevated = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      ambiguity: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contextSize: "high",
      toolDependency: "high",
      rigorCriticality: "low",
      reasoningDepth: "low",
      contradictionRisk: "low",
    }),
    trustedSfiaProfile: "profile",
  });

  const highAssurance = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "medium",
      contextSize: "medium",
    }),
    trustedSfiaProfile: "profile",
  });

  const focusedLow = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      ambiguity: "medium",
      rigorCriticality: "medium",
      contextSize: "low",
    }),
    trustedSfiaProfile: "profile",
  });

  const focusedHigh = decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals({
      ambiguity: "medium",
      rigorCriticality: "medium",
      contextSize: "high",
      toolDependency: "high",
      verificationNeed: "medium",
    }),
    trustedSfiaProfile: "profile",
  });

  let capabilityFailClosed = false;
  try {
    validateRuntimeReasoningCapability("gpt-unknown", "low");
  } catch (e) {
    capabilityFailClosed = e instanceof TechnicalError;
  }

  const provider = new FakeConversationProvider({
    toolScript: [{ kind: "message", text: "[TEST/FAKE] MW2 eval." }],
  });
  const turn = await runNoraCognitiveTurn({
    correlationId: "mw2-eval-runtime",
    projectId: "prj:mw2-eval",
    messages: [
      { role: "system", content: "SFIA boundary instructions." },
      { role: "user", content: "eval probe" },
    ],
    provider,
    enableTools: false,
    cognitiveWorkloadSignals: {
      rigorCriticality: "high",
      verificationNeed: "high",
    },
    trustedSfiaProfile: "profile",
  });

  const facts: Mw2S01RuntimeFacts = {
    strategyClassesObserved: [
      routineElevated.strategyClass,
      highAssurance.strategyClass,
      focusedLow.strategyClass,
      focusedHigh.strategyClass,
      turn.cognitiveStrategyClass ?? "unknown",
    ],
    effortsObserved: [
      routineElevated.reasoningEffort,
      highAssurance.reasoningEffort,
      focusedLow.reasoningEffort,
      focusedHigh.reasoningEffort,
      turn.selectedReasoningEffort ?? "unknown",
    ],
    strategyDecoupledFromEffort:
      focusedLow.strategyClass === focusedHigh.strategyClass &&
      focusedLow.reasoningEffort !== focusedHigh.reasoningEffort,
    routineElevatedEffort:
      routineElevated.strategyClass === "Routine" &&
      routineElevated.reasoningEffort === "medium",
    highAssuranceNotMax:
      highAssurance.strategyClass === "High-Assurance" &&
      highAssurance.reasoningEffort !== "max",
    capabilityFailClosed,
    noModelRouting: !("model" in routineElevated),
  };

  return observationFromMw2S01Facts(facts);
}
