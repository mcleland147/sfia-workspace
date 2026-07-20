#!/usr/bin/env node
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Orchestrator, validateContractOnly } from "./orchestrator.js";
import { EventJournal } from "./journal/eventJournal.js";
import { createThinStudioAdapter } from "./adapter/thinStudioAdapter.js";
import { resumeSessionFromProofDir } from "./session/resumeSession.js";
import { verifyProofPack } from "./proof/verifyProofPack.js";
import { GptQualificationLivePort, runQualificationFixture } from "./ports/gptQualificationLive.js";
import { runIncrementDSandbox } from "./increment-d/cursorSandboxRunner.js";
import { GptAnalysisLivePort, runAnalysisFixture } from "./ports/gptAnalysisLive.js";
import { recordMorrisFinalDecision, regenerateCycleSummary } from "./increment-e/morrisDecision.js";
import type { GptVerdictCandidate } from "./types/gptVerdictCandidate.js";
import type { EvidenceAnalysisPack } from "./types/evidenceAnalysisPack.js";
import type { MorrisFinalAction } from "./types/morrisFinalDecision.js";
import type {
  ExecutionContract,
  GateDecision,
  POCRequest,
  StudioAdapterRequest,
} from "./types/contracts.js";
import type { QualificationRequestInput } from "./types/qualificationCandidate.js";
import type { IncrementDRunInput } from "./increment-d/cursorSandboxRunner.js";
import type { AnalysisRequestInput } from "./ports/gptAnalysisLive.js";
import { computeContractHash } from "./hash/contractHash.js";

function usage(): never {
  console.error(`sfia-poc-s1 <command> [args]

Commands:
  validate-contract <contract.json>
  run-fixture <dir>                 # expects request.json gate.json contract.json in dir
  request-stop <dir>                # same as run-fixture with STOP gate or --stop flag via stop gate
  inspect-journal <proofDir>
  verify-proofs <proofDir>
  studio-run <payload.json>         # Increment B thin adapter forward (stdout JSON)
  resume-session <proofDir>         # Increment B session resume from journal/proofs
  qualify-fixture <payload.json>    # Increment C qualification fixture (no OpenAI)
  qualify-live <payload.json>       # Increment C live qualification (requires flags + key)
  inc-d-run <payload.json>          # Increment D Cursor sandbox (fixture fake or live)
  analyse-fixture <payload.json>    # Increment E GPT analysis fixture
  analyse-live <payload.json>       # Increment E live GPT analysis (requires flags + key)
  morris-decide <payload.json>      # Increment E record MorrisFinalDecision (+ CycleSummary if CLOSE_SLICE)
  morris-regenerate-summary <payload.json>  # Technical CycleSummary regen (same decision, no new GPT)
`);
  process.exit(2);
}

async function main(): Promise<void> {
  const [, , cmd, ...args] = process.argv;
  if (!cmd) usage();

  if (cmd === "validate-contract") {
    const file = args[0];
    if (!file) usage();
    const contract = JSON.parse(readFileSync(file, "utf8")) as ExecutionContract;
    const { hash } = validateContractOnly(contract);
    console.log(JSON.stringify({ ok: true, contractHash: hash }, null, 2));
    return;
  }

  if (cmd === "run-fixture" || cmd === "request-stop") {
    const dir = args[0];
    if (!dir) usage();
    const request = JSON.parse(readFileSync(path.join(dir, "request.json"), "utf8")) as POCRequest;
    const contract = JSON.parse(readFileSync(path.join(dir, "contract.json"), "utf8")) as ExecutionContract;
    let gate = JSON.parse(readFileSync(path.join(dir, "gate.json"), "utf8")) as GateDecision;
    mkdirSync(contract.proofDir, { recursive: true });
    // Refresh hash on gate if matching contract file
    const hash = computeContractHash(contract);
    if (cmd === "request-stop") {
      gate = { ...gate, decision: "STOP", contractHash: hash };
    } else if (gate.decision === "GO") {
      gate = { ...gate, contractHash: hash };
    }
    const orch = new Orchestrator();
    const result = await orch.run({
      request,
      contract,
      gate,
      stopAfterAuthorize: args.includes("--stop-after-authorize"),
      attemptForbiddenGit: args.includes("--deny-git"),
      cursorSimulate: args.includes("--cursor-timeout")
        ? "timeout"
        : args.includes("--cursor-error")
          ? "error"
          : "success",
    });
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "inspect-journal") {
    const proofDir = args[0];
    if (!proofDir) usage();
    const journal = new EventJournal(proofDir, "inspect");
    console.log(JSON.stringify({ events: journal.readAll(), projectedState: journal.projectLastState() }, null, 2));
    return;
  }

  if (cmd === "verify-proofs") {
    const proofDir = args[0];
    if (!proofDir) usage();
    const required = ["contract.json", "contractHash.txt", "summary.json", "events.jsonl"];
    const missing = required.filter((f) => {
      try {
        readFileSync(path.join(proofDir, f));
        return false;
      } catch {
        return true;
      }
    });
    // summary optional if rejected — accept gate.json + events
    const ok =
      missing.filter((m) => m !== "summary.json").length === 0 ||
      (missing.length <= 1 && missing[0] === "summary.json");
    const journal = new EventJournal(proofDir, "verify");
    const pack = verifyProofPack(proofDir);
    console.log(
      JSON.stringify(
        {
          ok: missing.filter((m) => m !== "summary.json").length === 0 || journal.readAll().length > 0,
          missing,
          eventCount: journal.readAll().length,
          projectedState: journal.projectLastState(),
          softOk: ok,
          proofPack: pack,
        },
        null,
        2,
      ),
    );
    return;
  }

  if (cmd === "studio-run") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as StudioAdapterRequest;
    const adapter = createThinStudioAdapter();
    const result = await adapter.forward(payload);
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "resume-session") {
    const proofDir = args[0];
    if (!proofDir) usage();
    const result = resumeSessionFromProofDir(proofDir);
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "qualify-fixture" || cmd === "qualify-live") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as QualificationRequestInput;
    if (cmd === "qualify-fixture") {
      const result = await runQualificationFixture(payload);
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.ok ? 0 : 1);
    }
    const port = new GptQualificationLivePort();
    const result = await port.run({ ...payload, live: true });
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "inc-d-run") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as IncrementDRunInput;
    const result = await runIncrementDSandbox(payload);
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "analyse-fixture" || cmd === "analyse-live") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as AnalysisRequestInput;
    if (cmd === "analyse-fixture") {
      const result = runAnalysisFixture(payload);
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.ok ? 0 : 1);
    }
    const port = new GptAnalysisLivePort();
    const result = await port.run({ ...payload, live: true });
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "morris-decide") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as {
      verdict: GptVerdictCandidate;
      pack: EvidenceAnalysisPack;
      action: MorrisFinalAction;
      rationale?: string;
      acceptedReservations?: string[];
      unresolvedReservations?: string[];
      consequences?: string[];
      requiresNewGo?: boolean;
      decidedAt?: string;
      decisionId?: string;
      proofDir?: string;
      qualificationCalls?: number;
    };
    const proofDir = payload.proofDir;
    let priorDecisionIdForVerdict: string | null = null;
    if (proofDir) {
      mkdirSync(proofDir, { recursive: true });
      const lockPath = path.join(proofDir, "morris-final-decision.json");
      if (existsSync(lockPath)) {
        const prior = JSON.parse(readFileSync(lockPath, "utf8")) as { decisionId?: string; verdictId?: string };
        if (prior.verdictId === payload.verdict.verdictId && prior.decisionId) {
          priorDecisionIdForVerdict = prior.decisionId;
        }
      }
    }
    const result = recordMorrisFinalDecision({
      verdict: payload.verdict,
      pack: payload.pack,
      action: payload.action,
      rationale: payload.rationale,
      acceptedReservations: payload.acceptedReservations,
      unresolvedReservations: payload.unresolvedReservations,
      consequences: payload.consequences,
      requiresNewGo: payload.requiresNewGo,
      decidedAt: payload.decidedAt,
      decisionId: payload.decisionId,
      priorDecisionIdForVerdict,
      qualificationCalls: payload.qualificationCalls,
    });
    if (result.ok && proofDir && result.decision) {
      writeFileSync(
        path.join(proofDir, "morris-final-decision.json"),
        `${JSON.stringify(result.decision, null, 2)}\n`,
        "utf8",
      );
      if (result.summary) {
        writeFileSync(
          path.join(proofDir, "cycle-summary.json"),
          `${JSON.stringify(result.summary, null, 2)}\n`,
          "utf8",
        );
      }
      writeFileSync(
        path.join(proofDir, "closure-result.json"),
        `${JSON.stringify(
          {
            ok: result.ok,
            uiStatus: result.uiStatus,
            message: result.message,
            gptCallsUnchanged: true,
            gitActions: false,
            verdictId: payload.verdict.verdictId,
            candidateStatusUnchanged: payload.verdict.status,
          },
          null,
          2,
        )}\n`,
        "utf8",
      );
    }
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  if (cmd === "morris-regenerate-summary") {
    const file = args[0];
    if (!file) usage();
    const payload = JSON.parse(readFileSync(file, "utf8")) as {
      verdict: GptVerdictCandidate;
      pack: EvidenceAnalysisPack;
      decision: import("./types/morrisFinalDecision.js").MorrisFinalDecision;
      previousSummaryId?: string;
      summaryId?: string;
      proofDir?: string;
      qualificationCalls?: number;
    };
    const result = regenerateCycleSummary({
      decision: payload.decision,
      verdict: payload.verdict,
      pack: payload.pack,
      analysisCalls: payload.verdict.finOps?.callNumber ?? 0,
      qualificationCalls: payload.qualificationCalls ?? 0,
      previousSummaryId: payload.previousSummaryId,
      summaryId: payload.summaryId,
    });
    if (result.ok && payload.proofDir) {
      mkdirSync(payload.proofDir, { recursive: true });
      writeFileSync(
        path.join(payload.proofDir, "cycle-summary.json"),
        `${JSON.stringify(result.summary, null, 2)}\n`,
        "utf8",
      );
      writeFileSync(
        path.join(payload.proofDir, "cycle-summary-regen-meta.json"),
        `${JSON.stringify(
          {
            technicalRegeneration: true,
            previousSummaryId: payload.previousSummaryId ?? null,
            summaryId: result.summary.summaryId,
            decisionIdUnchanged: payload.decision.decisionId,
            decidedAtUnchanged: payload.decision.decidedAt,
            verdictIdUnchanged: payload.verdict.verdictId,
            candidateStatusUnchanged: payload.verdict.status,
            gptCallsUnchanged: true,
            newMorrisDecision: false,
            gate: "G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION",
          },
          null,
          2,
        )}\n`,
        "utf8",
      );
    }
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  usage();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain || process.argv[1]?.endsWith("cli.ts") || process.argv[1]?.endsWith("cli.js")) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
