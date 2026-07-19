/**
 * GPTFixtureAdapter — DEFAULT stable spike path (deterministic).
 * Does not call OpenAI. Does not claim real GPT invocation.
 */

import {
  GPT_CONTRACT_SCHEMA_VERSION,
  GPT_SPIKE_SYNTHETIC_INTENT,
  type ExecutionContractCandidate,
  type GPTCallResult,
  type GPTQualificationRequest,
  type GPTVerdictRequest,
  type VerdictCandidate,
} from "../types/gptContracts.js";
import type { GPTQualificationPort } from "./gptQualification.js";
import type { GPTVerdictPort } from "./gptVerdict.js";
import {
  hashContractCandidate,
  validateExecutionContractCandidate,
  validateVerdictCandidate,
} from "../validation/gptOutputValidator.js";

export class GPTFixtureAdapter implements GPTQualificationPort, GPTVerdictPort {
  async qualify(request: GPTQualificationRequest): Promise<GPTCallResult<ExecutionContractCandidate>> {
    const started = Date.now();
    const withoutHash = {
      schemaVersion: GPT_CONTRACT_SCHEMA_VERSION as typeof GPT_CONTRACT_SCHEMA_VERSION,
      requestId: request.requestId,
      correlationId: request.correlationId,
      proposedCycle: "Cycle 7" as const,
      proposedProfile: "Critical" as const,
      profileJustification:
        "Spike GPT/OpenAI isole un modèle probabiliste dans une chaîne gouvernée ; profil Critical.",
      objective: request.intent || GPT_SPIKE_SYNTHETIC_INTENT,
      allowedReadPaths: request.allowedPaths.filter((p) => p.includes("fixture") || p.includes("fixtures")),
      allowedWritePaths: request.allowedPaths.filter((p) => p.includes("proof")),
      deniedPaths: [...request.deniedPaths],
      requestedActions: request.allowedActions.filter((a) =>
        ["read-fixture", "write-proof", "cursor-fixture", "git-read-local"].includes(a),
      ),
      stopConditions: [
        "STOP if Morris execute gate absent",
        "STOP if path outside allowlist",
        "STOP if git remote write requested",
      ],
      requiredMorrisGates: [...request.requiredMorrisGates],
      assumptions: ["Intention synthétique S1-derived ; aucune donnée utilisateur réelle."],
      observations: ["Fixture GPT déterministe ; aucun appel OpenAI."],
      options: ["Exécuter via Cursor fixture après gate Morris explicite."],
      recommendations: ["Conserver fixture GPT par défaut jusqu'à gate live OpenAI autorisé par Morris."],
      validatedDecisions: [...request.decisionsAlreadyValidated],
    };
    // Objective must not echo injection payloads / secrets from intent.
    const safeObjective =
      /OPENAI_API_KEY\s*=|sk-[a-zA-Z0-9_-]{10,}|git\s+push/i.test(request.intent)
        ? GPT_SPIKE_SYNTHETIC_INTENT
        : request.intent || GPT_SPIKE_SYNTHETIC_INTENT;
    withoutHash.objective = safeObjective;
    if (withoutHash.allowedReadPaths.length === 0 && request.allowedPaths.length > 0) {
      withoutHash.allowedReadPaths = [request.allowedPaths[0]!];
    }
    if (withoutHash.allowedWritePaths.length === 0) {
      const proof = request.allowedPaths.find((p) => p.includes("proof"));
      if (proof) withoutHash.allowedWritePaths = [proof];
    }
    const raw: ExecutionContractCandidate = {
      ...withoutHash,
      contractHashCandidate: hashContractCandidate(withoutHash),
      modelMetadata: {
        provider: "fixture",
        mechanism: "gpt-fixture",
        model: "fixture-deterministic-v1",
        experimental: true,
        productionReadyClaimed: false,
        durationMs: Date.now() - started,
      },
    };
    const candidate = validateExecutionContractCandidate(raw, request);
    return {
      ok: true,
      status: "SUCCEEDED",
      candidate,
      usage: {
        durationMs: Date.now() - started,
        monetaryCostClaimed: false,
        modelReturned: "fixture-deterministic-v1",
      },
      liveInvoked: false,
      retriesAttempted: 0,
      experimental: true,
      productionReadyClaimed: false,
    };
  }

  async verdict(request: GPTVerdictRequest): Promise<GPTCallResult<VerdictCandidate>> {
    const started = Date.now();
    const raw: VerdictCandidate = {
      schemaVersion: GPT_CONTRACT_SCHEMA_VERSION,
      requestId: request.requestId,
      correlationId: request.correlationId,
      status: "READY_FOR_MORRIS_REVIEW",
      observations: [
        `Exécution ${request.orchestrationResult.executionMode}: ok=${request.orchestrationResult.executionOk}`,
        `Gate: ${request.orchestrationResult.gateStatus}`,
        `Git effect: ${request.orchestrationResult.gitEffect}`,
      ],
      provenElements: [
        "Contrat candidat validé déterministement (fixture)",
        "Artefact local synthétique référencé",
        "Aucun effet Git distant dans le résultat synthétique",
      ],
      unprovenElements: [
        "Invocation OpenAI API réelle",
        "Boucle bout-en-bout GPT → harness → Cursor réel → GPT",
        "UI Studio",
      ],
      risks: ["Confusion ChatGPT app vs OpenAI API", "Surinterprétation d’un verdict candidat"],
      reserves: [request.orchestrationResult.knownReserve, ...request.knownReserves],
      recommendations: [
        "Morris reste seule autorité de décision",
        "Ne pas activer live OpenAI sans clé + modèle explicites + plafond",
      ],
      decisionsRequiredFromMorris: [
        "Décider si fournir OPENAI_API_KEY + OPENAI_MODEL pour live",
        "Décider du prochain test bout-en-bout (sans l’exécuter ici)",
      ],
      forbiddenClaimsDetected: [],
      proposedVerdict: "NEEDS_MORRIS_DECISION",
      modelMetadata: {
        provider: "fixture",
        mechanism: "gpt-fixture",
        model: "fixture-deterministic-v1",
        experimental: true,
        productionReadyClaimed: false,
        durationMs: Date.now() - started,
      },
      decisionValidated: false,
      mergeAuthorized: false,
      goConsumed: false,
      baselinePromoted: false,
      productionReady: false,
    };
    const candidate = validateVerdictCandidate(raw, request);
    return {
      ok: true,
      status: "SUCCEEDED",
      candidate,
      usage: {
        durationMs: Date.now() - started,
        monetaryCostClaimed: false,
        modelReturned: "fixture-deterministic-v1",
      },
      liveInvoked: false,
      retriesAttempted: 0,
      experimental: true,
      productionReadyClaimed: false,
    };
  }
}
