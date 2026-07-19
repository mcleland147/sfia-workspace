/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 *
 * Builds a harness-imposed Cursor execution contract from a validated GPT qualification.
 * GPT proposals cannot widen allowlists, commands, or workspace.
 */

import { createHash } from "node:crypto";
import { lstatSync, readlinkSync } from "node:fs";
import path from "node:path";
import { HarnessError } from "../types/contracts.js";
import type { ExecutionContractCandidate } from "../types/gptContracts.js";
import type { CursorRealSpikeContract } from "./cursorRealSpike.js";
import { assertSandboxPaths } from "./cursorRealSpike.js";

export const E2E_CORRELATION_ID = "corr-e2e-gpt-cursor-001";
export const E2E_REQUEST_ID = "req-e2e-gpt-cursor-001";
export const E2E_OUTPUT_REL = "output.md";
export const E2E_INPUT_REL = "input.md";

export const E2E_ALLOWED_COMMANDS = [
  "read-files",
  "write-output.md",
  "git-status",
  "git-diff",
  "git-diff-stat",
  "git-rev-parse",
] as const;

export const E2E_FORBIDDEN_COMMAND_PATTERNS: RegExp[] = [
  /\bgit\s+push\b/i,
  /\bgit\s+pull\b/i,
  /\bgit\s+fetch\b/i,
  /\bgit\s+commit\b/i,
  /\bgit\s+reset\s+--hard\b/i,
  /\bgit\s+clean\s+-fd\b/i,
  /\bgit\s+checkout\s+--\b/i,
  /\bsudo\b/i,
  /\brm\s+-rf\b/i,
  /\bcurl\b/i,
  /\bwget\b/i,
  /\bdocker\b/i,
  /\benv\b/i,
  /\bprintenv\b/i,
  /\bexport\s+-p\b/i,
  /\bgh\s+pr\b/i,
];

export interface E2EBoundedGuards {
  sandboxAbs: string;
  correlationId: string;
  requestId: string;
  timeoutMs: number;
  mainRepoAbs: string;
}

export interface E2EBoundedBuildResult {
  contract: CursorRealSpikeContract;
  instruction: string;
  contractHash: string;
  ignoredGptWidenings: string[];
}

export function assertPathInsideSandbox(candidate: string, sandboxAbs: string, label: string): string {
  if (candidate.includes("..") || path.isAbsolute(candidate)) {
    throw new HarnessError("E2E_PATH_DENIED", `${label}: traversal or absolute path denied`, {
      candidate,
    });
  }
  const sandbox = path.resolve(sandboxAbs);
  const resolved = path.resolve(sandbox, candidate);
  if (!resolved.startsWith(sandbox + path.sep) && resolved !== sandbox) {
    throw new HarnessError("E2E_PATH_ESCAPE", `${label}: escapes sandbox`, { candidate, resolved });
  }
  try {
    const st = lstatSync(resolved);
    if (st.isSymbolicLink()) {
      const target = path.resolve(path.dirname(resolved), readlinkSync(resolved));
      if (!target.startsWith(sandbox + path.sep) && target !== sandbox) {
        throw new HarnessError("E2E_SYMLINK_ESCAPE", `${label}: symlink escapes sandbox`, {
          resolved,
          target,
        });
      }
    }
  } catch (e) {
    if (e instanceof HarnessError) throw e;
  }
  return resolved;
}

export function detectForbiddenCommandText(text: string): string | undefined {
  for (const p of E2E_FORBIDDEN_COMMAND_PATTERNS) {
    if (p.test(text)) return p.source;
  }
  return undefined;
}

export function rejectGptScopeWidening(candidate: ExecutionContractCandidate): string[] {
  const ignored: string[] = [];
  for (const p of candidate.allowedWritePaths) {
    if (p.includes("..") || path.isAbsolute(p)) {
      ignored.push(`write:${p}`);
      continue;
    }
    if (p !== E2E_OUTPUT_REL && !p.endsWith(`/${E2E_OUTPUT_REL}`)) {
      ignored.push(`write:${p}`);
    }
  }
  for (const a of candidate.requestedActions) {
    if (["git-commit", "git-push", "git-merge", "gh-pr", "docker", "app-write"].includes(a)) {
      ignored.push(`action:${a}`);
    }
  }
  return ignored;
}

export function buildExactOutputTemplate(correlationId: string): string {
  return [
    "# E2E Cursor Sandbox Result",
    "",
    `- correlationId: ${correlationId}`,
    "- status: COMPLETED",
    "- summary: Synthetic fixture input.md analyzed in sandbox only.",
    "- gitRemoteActions: none",
    "",
  ].join("\n");
}

export function buildBoundedCursorInstruction(
  candidate: ExecutionContractCandidate,
  guards: E2EBoundedGuards,
): E2EBoundedBuildResult {
  assertPathInsideSandbox(E2E_INPUT_REL, guards.sandboxAbs, "input");
  assertPathInsideSandbox(E2E_OUTPUT_REL, guards.sandboxAbs, "output");

  const ignoredGptWidenings = rejectGptScopeWidening(candidate);

  const objectiveHit = detectForbiddenCommandText(candidate.objective);
  if (objectiveHit) {
    throw new HarnessError(
      "E2E_GPT_OBJECTIVE_FORBIDDEN",
      `GPT objective contains forbidden command pattern: ${objectiveHit}`,
    );
  }

  const instruction = [
    "You are executing a STRICTLY BOUNDED SFIA Studio e2e spike. You do not decide. Morris alone decides.",
    `Workspace (cwd/workspace): ${path.resolve(guards.sandboxAbs)}`,
    `correlationId: ${guards.correlationId}`,
    `requestId: ${guards.requestId}`,
    "",
    "OBJECTIVE (single):",
    `Read ${E2E_INPUT_REL}. Create or overwrite ONLY ${E2E_OUTPUT_REL} with EXACTLY this content (byte-identical recommended):`,
    "-----BEGIN OUTPUT.md-----",
    buildExactOutputTemplate(guards.correlationId).trimEnd(),
    "-----END OUTPUT.md-----",
    "",
    "ALLOWED FILES:",
    `- read: ${E2E_INPUT_REL}`,
    `- write: ${E2E_OUTPUT_REL}`,
    "",
    "FORBIDDEN FILES: anything else under the workspace; entire main repository outside this sandbox.",
    "",
    "ALLOWED COMMANDS (conceptual): " + E2E_ALLOWED_COMMANDS.join(", "),
    "FORBIDDEN COMMANDS (do not run): git push, git pull, git fetch, git commit, git reset --hard, git clean -fd, git checkout --, sudo, rm -rf, curl, wget, docker, env, printenv, export -p, gh pr, package installs.",
    "",
    "STOP CONDITIONS: if you cannot write only output.md with the exact structure, stop without other changes.",
    "Do NOT claim production-ready, merge authorization, or Morris GO.",
    "Do NOT perform any remote Git action.",
    "",
    `GPT qualification objective (informational, non-authoritative): ${candidate.objective.slice(0, 400)}`,
  ].join("\n");

  const partial = {
    spikeId: "spike-e2e-gpt-cursor-001",
    requestId: guards.requestId,
    executionId: `exec-e2e-${Date.now()}`,
    mechanismId: "cursor-agent-cli",
    mechanismVersion: "observed-local",
    instruction,
    workingDirectory: path.resolve(guards.sandboxAbs),
    allowedReadPaths: [E2E_INPUT_REL],
    allowedWritePaths: [E2E_OUTPUT_REL],
    deniedPaths: [
      "projects/sfia-studio/app",
      "../",
      path.resolve(guards.mainRepoAbs),
      "node_modules",
    ],
    timeoutMs: guards.timeoutMs,
    expectedOutputs: [E2E_OUTPUT_REL],
    gitEffect: "none" as const,
    networkEffect: "unknown" as const,
    cursorMode: "real-spike" as const,
    initiatedBy: "Morris",
    initiatedAt: new Date().toISOString(),
  };

  const contractHash = createHash("sha256").update(JSON.stringify(partial)).digest("hex");
  const contract: CursorRealSpikeContract = { ...partial, contractHash };
  assertSandboxPaths(contract);

  return { contract, instruction, contractHash, ignoredGptWidenings };
}

export function validateOutputMd(content: string, correlationId: string): void {
  const required = [
    "# E2E Cursor Sandbox Result",
    `- correlationId: ${correlationId}`,
    "- status: COMPLETED",
    "- summary:",
    "- gitRemoteActions: none",
  ];
  for (const line of required) {
    if (line === "- summary:") {
      if (!/^- summary:\s+\S+/m.test(content)) {
        throw new HarnessError("E2E_OUTPUT_CONTRACT", "output.md missing non-empty summary");
      }
      continue;
    }
    if (!content.includes(line)) {
      throw new HarnessError("E2E_OUTPUT_CONTRACT", `output.md missing required: ${line}`);
    }
  }
  if (/production\s+ready|ready\s+for\s+merge|GO\s+consumed/i.test(content)) {
    throw new HarnessError("E2E_OUTPUT_AUTHORITY", "forbidden authority claim in output.md");
  }
}

export function hashContract(contract: Omit<CursorRealSpikeContract, "contractHash">): string {
  return createHash("sha256").update(JSON.stringify(contract)).digest("hex");
}
