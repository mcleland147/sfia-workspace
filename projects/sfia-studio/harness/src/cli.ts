#!/usr/bin/env node
import { readFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Orchestrator, validateContractOnly } from "./orchestrator.js";
import { EventJournal } from "./journal/eventJournal.js";
import { createThinStudioAdapter } from "./adapter/thinStudioAdapter.js";
import { resumeSessionFromProofDir } from "./session/resumeSession.js";
import { verifyProofPack } from "./proof/verifyProofPack.js";
import type {
  ExecutionContract,
  GateDecision,
  POCRequest,
  StudioAdapterRequest,
} from "./types/contracts.js";
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

  usage();
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain || process.argv[1]?.endsWith("cli.ts") || process.argv[1]?.endsWith("cli.js")) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
