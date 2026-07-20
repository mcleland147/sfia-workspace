import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Orchestrator, type RunInput, type RunResult } from "../orchestrator.js";
import { resumeSessionFromProofDir } from "../session/resumeSession.js";
import { verifyProofPack } from "../proof/verifyProofPack.js";
import { EventJournal } from "../journal/eventJournal.js";
import { computeContractHash } from "../hash/contractHash.js";
import { makeContract, makeRequest, WORKSPACE_ROOT } from "../../fixtures/builders.js";
import type {
  GateDecision,
  StudioAdapterRequest,
  StudioAdapterResponse,
} from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import { ProofStore } from "../proof/proofStore.js";

/**
 * Thin Studio↔harness adapter (Increment B).
 *
 * Responsibilities ONLY:
 * - map Studio payload → harness RunInput
 * - forward to Orchestrator / resume
 * - return derived StudioAdapterResponse
 *
 * NEVER:
 * - validate or authorize a GO
 * - own policy / gate logic
 * - write journal or proofStore directly (harness owns those)
 * - call live GPT / Cursor ports
 */
export class ThinStudioAdapter {
  constructor(private readonly orchestrator = new Orchestrator()) {}

  async forward(request: StudioAdapterRequest): Promise<StudioAdapterResponse> {
    if (request.action === "resume") {
      if (!request.proofDir) {
        return this.refusalSkeleton(request, "RESUME_PROOF_DIR_MISSING", "proofDir required for resume");
      }
      return resumeSessionFromProofDir(request.proofDir);
    }

    const proofDir =
      request.proofDir ?? mkdtempSync(path.join(os.tmpdir(), "sfia-studio-inc-b-"));
    const contract = makeContract(proofDir, {
      contractId: request.contractId,
      requestId: request.requestId,
      allowedPaths:
        request.allowlist.length > 0
          ? request.allowlist
          : ["projects/sfia-studio", "projects/sfia-studio/harness"],
      repositoryRoot: WORKSPACE_ROOT,
    });

    // Probe scenarios mutate mapping before forward — still no authority here.
    let gate = this.mapGate(request, contract);
    const runInput = this.mapRunInput(request, contract, gate, proofDir);

    if (request.action === "probe-write-escape") {
      try {
        new ProofStore(proofDir).writeText("../escape-probe.txt", "denied");
        return this.refusalSkeleton(request, "PROBE_UNEXPECTED", "escape write unexpectedly allowed");
      } catch (err) {
        const he = err as HarnessError;
        const journal = new EventJournal(proofDir, request.correlationId);
        journal.append({
          eventType: "security.refusal",
          requestId: request.requestId,
          result: "denied",
          errorCode: he.code,
          detail: { message: he.message, source: "harness", probe: "write-escape" },
        });
        return {
          ...this.refusalSkeleton(request, he.code, he.message),
          proofDir,
          journalPath: journal.filePath,
          events: journal.readAll(),
          proofPack: verifyProofPack(proofDir),
        };
      }
    }

    const result = await this.orchestrator.run(runInput);
    return this.toResponse(request, result, gate);
  }

  /** Pure mapping — no validation. */
  mapGate(
    request: StudioAdapterRequest,
    contract: ReturnType<typeof makeContract>,
  ): GateDecision {
    const hash = computeContractHash(contract);
    const base: GateDecision = {
      decisionId: request.decisionId ?? `gate-${request.correlationId}`,
      requestId: request.requestId,
      contractHash: hash,
      decision: request.morrisDecision,
      decidedBy: "Morris",
      decidedAt: request.decidedAt,
      scope: contract.allowedPaths[0] ?? "projects/sfia-studio",
      gitBranch: request.branch,
      gitHead: request.head,
      allowlistSnapshot: [...contract.allowedPaths],
      correlationId: request.correlationId,
    };

    switch (request.action) {
      case "stop":
        return { ...base, decision: "STOP" };
      case "probe-invalid-hash":
        return { ...base, contractHash: "0".repeat(64) };
      case "probe-invalid-branch":
        return { ...base, gitBranch: `${request.branch}-tampered` };
      case "probe-invalid-head":
        return { ...base, gitHead: "b".repeat(40) };
      case "probe-invalid-allowlist":
        return { ...base, allowlistSnapshot: ["forbidden/path"] };
      case "probe-missing-decider":
        return { ...base, decidedBy: "" };
      default:
        return base;
    }
  }

  mapRunInput(
    request: StudioAdapterRequest,
    contract: ReturnType<typeof makeContract>,
    gate: GateDecision,
    proofDir: string,
  ): RunInput {
    const poc = makeRequest({
      requestId: request.requestId,
      title: "SFIA Studio Increment B fixture cycle",
      cycle: "8",
      scope: proofDir,
      operator: "Morris",
      createdAt: request.decidedAt,
    });

    const input: RunInput = {
      request: poc,
      contract,
      gate,
      expectedBranch: request.branch,
      expectedHead: request.head,
      revalidateBeforeExecute: true,
      studioCorrelationId: request.correlationId,
    };

    if (request.action === "probe-timeout") {
      input.cursorSimulate = "timeout";
    }
    if (request.action === "probe-incomplete-report") {
      input.simulateIncompleteReport = true;
    }
    if (request.action === "probe-missing-proof") {
      input.simulateMissingProof = true;
    }
    if (request.action === "probe-live-port") {
      input.attemptLiveCursor = true;
    }
    return input;
  }

  toResponse(
    request: StudioAdapterRequest,
    result: RunResult,
    gate: GateDecision,
  ): StudioAdapterResponse {
    const journal = new EventJournal(result.proofDir, result.correlationId);
    const events = journal.readAll();
    const requireSuccess = result.ok && result.terminalState === "CLOSED";
    const proofPack = verifyProofPack(result.proofDir, {
      requireSuccessArtifacts: requireSuccess,
    });
    const stopOrTimeout = classify(result.errorCode);
    const goValid =
      result.ok &&
      gate.decision === "GO" &&
      !result.errorCode &&
      stopOrTimeout === null;

    return {
      ok: result.ok && proofPack.ok,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: result.projectedState ?? result.terminalState,
      goValid,
      errorCode: result.errorCode,
      refusalReason: result.errorCode
        ? `Harness refusal: ${result.errorCode}`
        : !proofPack.ok
          ? `Proof pack incomplete: ${proofPack.missing.join(", ")}`
          : undefined,
      stopOrTimeout,
      contractHash: result.contractHash,
      executionId: result.executionId,
      correlationId: result.correlationId,
      proofDir: result.proofDir,
      journalPath: result.journalPath,
      events,
      report: result.report ?? null,
      proofPack,
      reserves: [
        "Statut source = harness",
        "Adaptateur sans autorité",
        "Aucun GPT/Cursor live",
        "Aucune écriture Git distante",
        ...(result.ok ? [] : ["Exécution non réussie — aucun faux succès"]),
      ],
      timestamps: {
        decidedAt: gate.decidedAt,
        completedAt: new Date().toISOString(),
      },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }

  private refusalSkeleton(
    request: StudioAdapterRequest,
    code: string,
    message: string,
  ): StudioAdapterResponse {
    return {
      ok: false,
      statusSource: "harness",
      mode: "fixture",
      canonicalStatus: "REJECTED",
      goValid: false,
      errorCode: code,
      refusalReason: message,
      stopOrTimeout: "refusal",
      contractHash: request.contractHash,
      correlationId: request.correlationId,
      proofDir: request.proofDir ?? "",
      events: [],
      report: null,
      proofPack: { ok: false, missing: [], present: [], integrityNotes: [] },
      reserves: ["Adaptateur sans autorité — refus harness"],
      timestamps: { decidedAt: request.decidedAt, completedAt: new Date().toISOString() },
      realGptClaimed: false,
      realCursorClaimed: false,
      remoteGitWrite: false,
    };
  }
}

function classify(errorCode?: string): "STOP" | "timeout" | "refusal" | null {
  if (!errorCode) return null;
  if (errorCode === "GATE_STOP" || errorCode === "STOP") return "STOP";
  if (errorCode.includes("TIMEOUT")) return "timeout";
  return "refusal";
}

/** Factory used by CLI and autonomous tests — zero React / Studio imports. */
export function createThinStudioAdapter(): ThinStudioAdapter {
  return new ThinStudioAdapter();
}
