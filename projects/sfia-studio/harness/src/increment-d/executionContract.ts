/**
 * Increment D — ExecutionContract + GO anchors for Cursor sandbox spawn.
 * Uses existing canonicalize + computeContractHash — no second hash algorithm.
 *
 * ## cursorMode semantics (PR readiness — do not conflate)
 *
 * `ExecutionContract.cursorMode` is typed as S1 `CursorMode = "fixture"` only and is
 * required by PolicyEngine for the stable Orchestrator B path. It is a **schema /
 * policy slot**, not the Increment D process invocation mode.
 *
 * Authoritative process mode for Increment D lives on:
 * - `IncrementDRunInput.mode` (`fixture` | `live`)
 * - `CursorExecutionReport.mode` + `realCursorProcessInvoked`
 * - `CursorExecutionReport.s1ContractCursorMode` (always `"fixture"`, audit echo)
 *
 * Changing S1 `cursorMode` to `"live"` would require widening `CursorMode` and
 * PolicyEngine — structural pivot, out of Increment D readiness scope.
 */

import { createHash } from "node:crypto";
import type { ExecutionContract, GateDecision } from "../types/contracts.js";
import { computeContractHash } from "../hash/contractHash.js";
import { canonicalize } from "../hash/canonicalize.js";
import {
  INC_D_OUTPUT_REL,
  INC_D_SANDBOX_REL,
  INC_D_TIMEOUT_MS,
  INC_D_WORKSPACE_ROOT,
} from "./sandboxPaths.js";

/** Echo of S1 schema slot — never means “no real Cursor process”. */
export const S1_CONTRACT_CURSOR_MODE = "fixture" as const;

/** Stable ExecutionContract for Increment D. */
export function buildIncrementDContract(input: {
  contractId: string;
  requestId: string;
  proofDir: string;
  expectedBranch: string;
  expectedHead: string;
  timeoutMs?: number;
  repositoryRoot?: string;
}): ExecutionContract & {
  expectedBranch: string;
  expectedHead: string;
  allowlistedWritePaths: string[];
  /** Documentation-only: S1 cursorMode is schema, not process mode. */
  s1CursorModeIsSchemaOnly: true;
} {
  const repositoryRoot = input.repositoryRoot ?? INC_D_WORKSPACE_ROOT;
  const base: ExecutionContract = {
    contractId: input.contractId,
    requestId: input.requestId,
    scenario: "S1",
    repositoryRoot,
    allowedPaths: [INC_D_SANDBOX_REL, `${INC_D_SANDBOX_REL}/${INC_D_OUTPUT_REL}`],
    allowedCommands: ["cursor-sandbox-write-output-md", "git-status-short", "git-rev-parse"],
    gitEffect: "none-remote",
    cursorMode: S1_CONTRACT_CURSOR_MODE,
    timeoutMs: input.timeoutMs ?? INC_D_TIMEOUT_MS,
    proofDir: input.proofDir,
    schemaVersion: "poc-s1-1.0.0",
    maxFiles: 1,
    maxFileBytes: 64_000,
    allowedExtensions: [".md"],
    decidedByAllowlist: ["Morris"],
  };
  return {
    ...base,
    expectedBranch: input.expectedBranch,
    expectedHead: input.expectedHead,
    allowlistedWritePaths: [`${INC_D_SANDBOX_REL}/${INC_D_OUTPUT_REL}`],
    s1CursorModeIsSchemaOnly: true,
  };
}

export function hashIncrementDContract(
  contract: ReturnType<typeof buildIncrementDContract>,
): string {
  // Hash the ExecutionContract fields only (stable algorithm).
  // Extension fields (expected*, allowlistedWritePaths, s1CursorModeIsSchemaOnly) excluded.
  const {
    expectedBranch: _b,
    expectedHead: _h,
    allowlistedWritePaths: _a,
    s1CursorModeIsSchemaOnly: _s,
    ...stable
  } = contract;
  return computeContractHash(stable);
}

export function makeIncrementDGo(input: {
  decisionId: string;
  requestId: string;
  contractHash: string;
  branch: string;
  head: string;
  allowlist: string[];
  decidedAt?: string;
  expiresAt?: string;
}): GateDecision {
  return {
    decisionId: input.decisionId,
    requestId: input.requestId,
    contractHash: input.contractHash,
    decision: "GO",
    decidedBy: "Morris",
    decidedAt: input.decidedAt ?? new Date().toISOString(),
    scope: "increment-d-cursor-sandbox",
    expiresAt: input.expiresAt,
    gitBranch: input.branch,
    gitHead: input.head,
    allowlistSnapshot: [...input.allowlist],
    correlationId: `corr-${input.decisionId}`,
  };
}

export function buildIncDMarkdownContent(meta: {
  executionId: string;
  requestId: string;
  contractId: string;
  branch: string;
  head: string;
  contractHash: string;
  timestamp: string;
}): string {
  return [
    "# SFIA Studio Increment D Sandbox Proof",
    "",
    `- executionId: ${meta.executionId}`,
    `- requestId: ${meta.requestId}`,
    `- contractId: ${meta.contractId}`,
    `- branche revalidée: ${meta.branch}`,
    `- HEAD revalidé: ${meta.head}`,
    `- contractHash: ${meta.contractHash}`,
    `- date/heure/fuseau: ${meta.timestamp}`,
    "",
    "Cursor sandbox execution completed",
    "",
    "Remote Git writes: 0",
    "",
    "Candidate proof only — Morris decision required",
    "",
  ].join("\n");
}

export function buildIncDCursorInstruction(meta: {
  workspaceRoot: string;
  sandboxAbs: string;
  outputRel: string;
  markdownContent: string;
}): string {
  return [
    "SFIA Studio Increment D — Cursor sandbox Markdown proof.",
    `Repository root: ${meta.workspaceRoot}`,
    `Working directory (sandbox): ${meta.sandboxAbs}`,
    `Write ONLY this relative file: ${meta.outputRel}`,
    "Do not read secrets, .env, or API keys.",
    "Do not modify any other file.",
    "Do not run git commit, push, pull, fetch, checkout, reset, clean, rm, or any remote Git command.",
    "Do not install dependencies.",
    "Do not access the network.",
    "If the sandbox path is missing or the scope diverges, stop immediately.",
    "Write the following Markdown content exactly:",
    "-----BEGIN MARKDOWN-----",
    meta.markdownContent.trimEnd(),
    "-----END MARKDOWN-----",
    "Return a short completion note only.",
  ].join("\n");
}

/** Provenance hash of demand/instruction without logging full text in events. */
export function sha256Prefix(text: string, n = 16): string {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, n);
}

export function canonicalizeForAudit(value: unknown): string {
  return canonicalize(value);
}
