import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ExecutionContract, GateDecision, POCRequest } from "../src/types/contracts.js";
import { computeContractHash } from "../src/hash/contractHash.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(HERE, "../../.."); // projects/sfia-studio -> projects -> workspace?
// harness/fixtures -> harness -> sfia-studio -> projects -> workspace
// HERE = .../harness/fixtures
// ../ = harness
// ../../ = sfia-studio
// ../../../ = projects
// ../../../../ = workspace root
export const WORKSPACE_ROOT = path.resolve(HERE, "../../../..");

export function makeRequest(overrides: Partial<POCRequest> = {}): POCRequest {
  return {
    requestId: "req-s1-001",
    title: "Capitaliser une règle de gate SFIA",
    cycle: "DOC",
    scope: "projects/sfia-studio",
    operator: "Morris",
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

export function makeContract(proofDir: string, overrides: Partial<ExecutionContract> = {}): ExecutionContract {
  return {
    contractId: "ctr-s1-001",
    requestId: "req-s1-001",
    scenario: "S1",
    repositoryRoot: WORKSPACE_ROOT,
    allowedPaths: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    allowedCommands: [
      "branch-show-current",
      "rev-parse",
      "merge-base",
      "status-short",
      "diff-check",
      "diff-stat",
      "diff-name-status",
      "log",
      "show",
      "ls-remote",
    ],
    gitEffect: "none-remote",
    cursorMode: "fixture",
    timeoutMs: 30_000,
    proofDir,
    schemaVersion: "1",
    maxFiles: 30,
    maxFileBytes: 512_000,
    maxAggregateBytes: 5_000_000,
    allowedExtensions: [".md", ".txt", ".json", ".jsonl", ".ts", ""],
    decidedByAllowlist: ["Morris"],
    ...overrides,
  };
}

export function makeGo(contract: ExecutionContract, overrides: Partial<GateDecision> = {}): GateDecision {
  const hash = computeContractHash(contract);
  return {
    decisionId: "gate-go-001",
    requestId: contract.requestId,
    contractHash: hash,
    decision: "GO",
    decidedBy: "Morris",
    decidedAt: new Date().toISOString(),
    scope: "projects/sfia-studio",
    gitBranch: "delivery/sfia-studio-poc-increment-b",
    gitHead: "ee9487797ce44c8d864846030c54fac43ee33611",
    allowlistSnapshot: [...contract.allowedPaths],
    correlationId: "corr-fixture-001",
    ...overrides,
  };
}
