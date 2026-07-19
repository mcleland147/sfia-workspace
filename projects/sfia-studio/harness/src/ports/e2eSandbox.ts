/**
 * EXPERIMENTAL — POC SPIKE — NOT DEFAULT — NOT PRODUCTION.
 * Sandbox lifecycle for GPT→Cursor e2e under harness/proofs/e2e-cursor-sandbox (gitignored).
 */

import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
  lstatSync,
} from "node:fs";
import path from "node:path";
import { HarnessError } from "../types/contracts.js";
import {
  E2E_CORRELATION_ID,
  E2E_INPUT_REL,
  E2E_OUTPUT_REL,
  validateOutputMd,
} from "./e2eCursorBounded.js";

export function resolveE2eSandboxAbs(harnessRoot: string): string {
  return path.resolve(harnessRoot, "proofs", "e2e-cursor-sandbox");
}

export function assertSandboxNotSymlink(sandboxAbs: string): void {
  if (!existsSync(sandboxAbs)) return;
  const st = lstatSync(sandboxAbs);
  if (st.isSymbolicLink()) {
    throw new HarnessError("E2E_SANDBOX_SYMLINK", "sandbox path must not be a symlink");
  }
}

function gitSandbox(sandboxAbs: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd: sandboxAbs,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

export function resetE2eSandbox(sandboxAbs: string): void {
  assertSandboxNotSymlink(sandboxAbs);
  if (existsSync(sandboxAbs)) {
    rmSync(sandboxAbs, { recursive: true, force: true });
  }
  mkdirSync(sandboxAbs, { recursive: true });
  assertSandboxNotSymlink(sandboxAbs);

  const input = [
    "# E2E fixture input",
    "",
    `correlationId: ${E2E_CORRELATION_ID}`,
    "",
    "Synthetic non-sensitive fixture for bounded Cursor write of output.md only.",
    "No remote Git. No secrets. No production claims.",
    "",
  ].join("\n");
  writeFileSync(path.join(sandboxAbs, E2E_INPUT_REL), input, "utf8");

  gitSandbox(sandboxAbs, ["init"]);
  gitSandbox(sandboxAbs, ["config", "user.email", "e2e-sandbox@invalid.local"]);
  gitSandbox(sandboxAbs, ["config", "user.name", "E2E Sandbox"]);
  gitSandbox(sandboxAbs, ["add", E2E_INPUT_REL]);
  gitSandbox(sandboxAbs, ["commit", "-m", "e2e fixture baseline"]);
}

export interface SandboxGitSnapshot {
  statusShort: string;
  diffStat: string;
  revParseHead: string;
  files: string[];
}

export function snapshotSandboxGit(sandboxAbs: string): SandboxGitSnapshot {
  const files = listFilesRecursive(sandboxAbs).filter((f) => !f.startsWith(".git/"));
  return {
    statusShort: gitSandbox(sandboxAbs, ["status", "--short"]).trim(),
    diffStat: gitSandbox(sandboxAbs, ["diff", "--stat"]).trim(),
    revParseHead: gitSandbox(sandboxAbs, ["rev-parse", "HEAD"]).trim(),
    files,
  };
}

export function listFilesRecursive(root: string, prefix = ""): string[] {
  const out: string[] = [];
  for (const name of readdirSync(root)) {
    const abs = path.join(root, name);
    const rel = prefix ? `${prefix}/${name}` : name;
    const st = lstatSync(abs);
    if (st.isSymbolicLink()) {
      out.push(rel);
      continue;
    }
    if (st.isDirectory()) {
      if (name === ".git") continue;
      out.push(...listFilesRecursive(abs, rel));
    } else {
      out.push(rel);
    }
  }
  return out.sort();
}

export interface PostCursorValidation {
  ok: boolean;
  outputExists: boolean;
  unexpectedFiles: string[];
  statusShort: string;
  diffStat: string;
  outputPreviewSanitized: string;
  errorCode?: string;
  errorMessage?: string;
}

export function validateSandboxAfterCursor(
  sandboxAbs: string,
  correlationId: string,
  baselineFiles: string[],
): PostCursorValidation {
  const files = listFilesRecursive(sandboxAbs);
  const allowed = new Set([...baselineFiles, E2E_OUTPUT_REL]);
  const unexpectedFiles = files.filter((f) => !allowed.has(f));
  const outputPath = path.join(sandboxAbs, E2E_OUTPUT_REL);
  const outputExists = existsSync(outputPath);
  let statusShort = "";
  let diffStat = "";
  try {
    statusShort = gitSandbox(sandboxAbs, ["status", "--short"]).trim();
    diffStat = gitSandbox(sandboxAbs, ["diff", "--stat"]).trim();
  } catch (e) {
    return {
      ok: false,
      outputExists,
      unexpectedFiles,
      statusShort,
      diffStat,
      outputPreviewSanitized: "",
      errorCode: "E2E_GIT_READ",
      errorMessage: e instanceof Error ? e.message : String(e),
    };
  }

  if (!outputExists) {
    return {
      ok: false,
      outputExists,
      unexpectedFiles,
      statusShort,
      diffStat,
      outputPreviewSanitized: "",
      errorCode: "E2E_OUTPUT_MISSING",
      errorMessage: "output.md not created",
    };
  }
  if (unexpectedFiles.length > 0) {
    return {
      ok: false,
      outputExists,
      unexpectedFiles,
      statusShort,
      diffStat,
      outputPreviewSanitized: "",
      errorCode: "E2E_UNEXPECTED_FILES",
      errorMessage: `unexpected files: ${unexpectedFiles.join(",")}`,
    };
  }

  const content = readFileSync(outputPath, "utf8");
  const preview = content.length > 500 ? `${content.slice(0, 500)}…[truncated]` : content;
  try {
    validateOutputMd(content, correlationId);
  } catch (e) {
    return {
      ok: false,
      outputExists,
      unexpectedFiles,
      statusShort,
      diffStat,
      outputPreviewSanitized: preview,
      errorCode: e instanceof HarnessError ? e.code : "E2E_OUTPUT_CONTRACT",
      errorMessage: e instanceof Error ? e.message : String(e),
    };
  }

  // Expect only untracked/new output.md relative to baseline commit
  const statusLines = statusShort.split("\n").filter(Boolean);
  const illegalStatus = statusLines.filter((l) => {
    const file = l.replace(/^\?\?\s+/, "").replace(/^[AMD]\s+/, "").trim();
    return file !== E2E_OUTPUT_REL && !file.endsWith(`/${E2E_OUTPUT_REL}`);
  });
  if (illegalStatus.length > 0) {
    return {
      ok: false,
      outputExists,
      unexpectedFiles,
      statusShort,
      diffStat,
      outputPreviewSanitized: preview,
      errorCode: "E2E_GIT_STATUS_UNEXPECTED",
      errorMessage: illegalStatus.join(" | "),
    };
  }

  return {
    ok: true,
    outputExists,
    unexpectedFiles,
    statusShort,
    diffStat,
    outputPreviewSanitized: preview,
  };
}

export function captureMainRepoFingerprint(mainRepoAbs: string): string {
  const status = execFileSync("git", ["status", "--short"], {
    cwd: mainRepoAbs,
    encoding: "utf8",
  });
  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: mainRepoAbs,
    encoding: "utf8",
  }).trim();
  return `${head}\n${status}`;
}

export function assertMainRepoUnchangedByCursor(
  mainRepoAbs: string,
  before: string,
  sandboxAbs: string,
): void {
  const after = captureMainRepoFingerprint(mainRepoAbs);
  if (before === after) return;
  const beforeLines = new Set(before.split("\n").slice(1).filter(Boolean));
  const afterLines = after.split("\n").slice(1).filter(Boolean);
  void path.relative(mainRepoAbs, sandboxAbs);
  const unexpected = afterLines.filter((l) => {
    if (beforeLines.has(l)) return false;
    if (l.includes("e2e-cursor-sandbox")) return false;
    if (l.includes("projects/sfia-studio/harness/proofs/")) return false;
    return true;
  });
  if (unexpected.length > 0) {
    throw new HarnessError(
      "E2E_MAIN_REPO_TOUCHED",
      "main repository status changed outside e2e sandbox proofs",
      { unexpected: unexpected.slice(0, 20) },
    );
  }
}
