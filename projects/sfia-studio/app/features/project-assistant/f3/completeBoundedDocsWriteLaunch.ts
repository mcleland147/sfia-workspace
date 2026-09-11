/**
 * CR-GCEC-04 — complete bounded docs-write launch (sibling of RO completion).
 * Awaits observation, records ExecutionResult, returns artifact facts.
 */
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";
import {
  completeBoundedReadOnlyLaunch,
  type CompleteBoundedReadOnlyLaunchResult,
} from "./completeBoundedReadOnlyLaunch";

export type DocsWriteCompletionFacts = {
  attemptId: string;
  processRef: string;
  targetPath: string;
  digest: string;
  touchedFiles: string[];
  worktreeRef: string | null;
  stdout: string;
};

export type CompleteBoundedDocsWriteLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: DocsWriteCompletionFacts;
    }
  | Extract<
      CompleteBoundedReadOnlyLaunchResult,
      { ok: true; status: "running" | "failed" | "timeout" } | { ok: false }
    >;

function parseStdoutFacts(stdout: string): {
  files: string[];
  digest: string | null;
} {
  const files: string[] = [];
  let digest: string | null = null;
  for (const line of stdout.split("\n")) {
    const t = line.trim();
    if (t.startsWith("files=")) {
      files.push(
        ...t
          .slice("files=".length)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }
    if (t.startsWith("digest=")) {
      digest = t.slice("digest=".length).trim() || null;
    }
  }
  return { files, digest };
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const parsed = parseStdoutFacts(base.observation.stdout ?? "");
  const targetPath =
    input.targetPath?.trim() ||
    parsed.files[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;

  let digest = parsed.digest;
  if (!digest && worktreeRef) {
    try {
      const abs = path.resolve(worktreeRef, ...targetPath.split("/"));
      const buf = await readFile(abs);
      digest = `sha256:${createHash("sha256").update(buf).digest("hex")}`;
    } catch {
      digest = null;
    }
  }
  if (!digest) {
    return {
      ok: false,
      code: "DOCS_WRITE_DIGEST_MISSING",
      message: "Docs-write completion missing artifact digest.",
    };
  }

  const touchedFiles =
    parsed.files.length > 0 ? parsed.files : [targetPath];

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath,
      digest,
      touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? base.observation.stdout ?? "",
    },
  };
}
