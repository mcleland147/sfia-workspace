/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 * Runs fixture path by default. Live only if triple flag + key + model.
 * Does NOT invoke Cursor real.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GPTFixtureAdapter } from "../../src/ports/gptFixture.js";
import {
  OpenAIRealSpikeAdapter,
  discoverOpenAiLiveGate,
  isGptRealLiveEnabled,
  readCycleCallCount,
  resetLiveCallCounterForTests,
  getPhaseVerdictCallBudget,
} from "../../src/ports/openaiRealSpike.js";
import {
  GPT_SPIKE_SYNTHETIC_INTENT,
  type GPTQualificationRequest,
} from "../../src/types/gptContracts.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROOF = path.join(HERE, "proofs");
const CYCLE_COUNTER = path.join(PROOF, ".cycle-openai-calls.json");
const PHASE_COUNTER = path.join(PROOF, ".phase-verdict-stabilization-calls.json");

function sampleRequest(): GPTQualificationRequest {
  return {
    requestId: "req-gpt-s1-001",
    correlationId: "corr-gpt-s1-001",
    intent: GPT_SPIKE_SYNTHETIC_INTENT,
    repoRef: "local:sfia-workspace@spike-fixture",
    knownConstraints: ["synthetic"],
    allowedPaths: [
      "projects/sfia-studio/harness/spikes/gpt-openai/fixtures/input.md",
      "projects/sfia-studio/harness/spikes/gpt-openai/proofs/",
    ],
    deniedPaths: ["projects/sfia-studio/app/**"],
    availableCycles: ["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13", "DOC"],
    availableProfiles: ["Light", "Standard", "Critical"],
    decisionsAlreadyValidated: ["GO ouvrir spike GPT/OpenAI après intégration spike Cursor réel"],
    decisionsStillOpen: ["live auth"],
    requestedAt: new Date().toISOString(),
    requestedBy: "Morris",
    allowedActions: ["read-fixture", "write-proof", "cursor-fixture", "git-read-local"],
    requiredMorrisGates: ["GO-MORRIS-EXECUTE-AFTER-CONTRACT"],
  };
}

function summarizeLive(result: Awaited<ReturnType<OpenAIRealSpikeAdapter["qualify"]>>) {
  return {
    ok: result.ok,
    status: result.status,
    usage: result.usage,
    errorCode: result.errorCode,
    errorMessage: result.errorMessage,
    httpError: result.httpError,
    responseObservation: result.responseObservation,
    retriesAttempted: result.retriesAttempted,
    liveInvoked: result.liveInvoked,
    cycleCallNumber: result.cycleCallNumber,
    validatorAccepted: result.ok === true,
  };
}

async function main(): Promise<void> {
  resetLiveCallCounterForTests();
  mkdirSync(PROOF, { recursive: true });
  const maxCompletionTokens = Number(process.env.SFIA_GPT_MAX_COMPLETION_TOKENS ?? "8192");
  const gate = discoverOpenAiLiveGate();
  const fixture = new GPTFixtureAdapter();
  const req = sampleRequest();
  const qFix = await fixture.qualify(req);
  const vFix = qFix.candidate
    ? await fixture.verdict({
        requestId: req.requestId,
        correlationId: req.correlationId,
        executionContract: qFix.candidate,
        orchestrationResult: {
          contractValidated: true,
          gateStatus: "OPEN",
          executionMode: "cursor-fixture",
          executionOk: true,
          artifactRefs: ["fixture://analysis.md"],
          gitEffect: "none-remote",
          knownReserve: "live optional",
          summary: "synthetic",
        },
        evidenceRefs: ["fixture://analysis.md"],
        knownReserves: [],
        expectedVerdicts: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
        decisionAuthority: "Morris",
      })
    : undefined;

  let liveQual = null;
  let liveVerdict = null;
  if (isGptRealLiveEnabled({ enabled: true }) && gate.liveGateSatisfied) {
    const live = new OpenAIRealSpikeAdapter({
      enabled: true,
      timeoutMs: 30_000,
      maxCompletionTokens,
      cycleCounterPath: PHASE_COUNTER,
      cycleCallBudget: getPhaseVerdictCallBudget(),
      historicalCounterPath: CYCLE_COUNTER,
    });
    liveQual = await live.qualify(req);
    if (liveQual.ok && liveQual.candidate) {
      liveVerdict = await live.verdict({
        requestId: req.requestId,
        correlationId: req.correlationId,
        executionContract: liveQual.candidate,
        orchestrationResult: {
          contractValidated: true,
          gateStatus: "OPEN",
          executionMode: "cursor-fixture",
          executionOk: true,
          artifactRefs: ["fixture://analysis.md"],
          gitEffect: "none-remote",
          knownReserve: "live spike",
          summary: "synthetic after live qual",
        },
        evidenceRefs: ["fixture://analysis.md"],
        knownReserves: [],
        expectedVerdicts: ["PASS_WITH_RESERVES", "FAIL", "INCONCLUSIVE", "NEEDS_MORRIS_DECISION"],
        decisionAuthority: "Morris",
      });
    }
  }

  const report = {
    experimental: true,
    productionReadyClaimed: false,
    cursorRealInvoked: false,
    apiKeyDefined: gate.apiKeyDefined,
    modelDefined: gate.modelDefined,
    modelValue: gate.modelValue ?? null,
    maxCompletionTokens,
    phaseCallCount: readCycleCallCount(PHASE_COUNTER),
    phaseCallBudget: getPhaseVerdictCallBudget(),
    historicalCallCount: readCycleCallCount(CYCLE_COUNTER),
    liveGateSatisfied: gate.liveGateSatisfied,
    stopReason: gate.stopReason ?? null,
    fixtureQualificationOk: qFix.ok,
    fixtureVerdictOk: vFix?.ok ?? false,
    liveQualification: liveQual
      ? summarizeLive(liveQual)
      : { status: "NON_EXECUTED", reason: gate.stopReason ?? "flags off" },
    liveVerdict: liveVerdict ? summarizeLive(liveVerdict) : { status: "NON_EXECUTED" },
  };

  const out = path.join(PROOF, `run-${Date.now()}.json`);
  writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  console.log(`proof written: ${out}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
