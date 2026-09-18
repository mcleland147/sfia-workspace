/**
 * Checkpoint F / R6 — durable, redacted, capped process-failure diagnostic.
 *
 * Persisted on ExecutionAttempt (payload_json) — no Evidence schema migration.
 * Diagnostic only: never satisfies evreq:docs_write_artifact / business SUCCESS.
 */
import { redactSecrets } from "@/lib/platform/security/redaction";
import type { RealProcessObservation } from "@/lib/oa/execution-attempt";

/** Durable / Nora observation caps (≤ runner 64 KiB). Do not raise. */
export const PROCESS_DIAGNOSTIC_STDOUT_CAP = 4 * 1024;
export const PROCESS_DIAGNOSTIC_STDERR_CAP = 4 * 1024;

export type ProcessFailureDiagnostic = {
  readonly kind: "process_failure_diagnostic";
  readonly schemaVersion: "0.1.0-oa";
  readonly processRef: string;
  readonly exitCode: number | null;
  readonly timedOut: boolean;
  readonly durationMs: number;
  readonly realProcessInvoked: boolean;
  readonly boundaryProofMode?: "cursor_real" | "deterministic_fake";
  /** Non-secret executable basename only (never full env / argv / prompt). */
  readonly executableBasename?: string;
  readonly stdoutExcerpt: string;
  readonly stderrExcerpt: string;
  readonly stdoutTruncated: boolean;
  readonly stderrTruncated: boolean;
  readonly redacted: true;
  readonly authoritativeBusinessEvidence: false;
};

function capHead(
  value: string,
  cap: number,
): { text: string; truncated: boolean } {
  if (value.length <= cap) return { text: value, truncated: false };
  return { text: `${value.slice(0, cap)}\n…[truncated]`, truncated: true };
}

/** Prefer useful tail of stderr (CLI errors often land at the end). */
function capTail(
  value: string,
  cap: number,
): { text: string; truncated: boolean } {
  if (value.length <= cap) return { text: value, truncated: false };
  return { text: `…[truncated]\n${value.slice(-cap)}`, truncated: true };
}

function basenameOnly(executable: string | undefined): string | undefined {
  if (!executable || typeof executable !== "string") return undefined;
  const trimmed = executable.trim();
  if (!trimmed) return undefined;
  const parts = trimmed.split(/[/\\]/);
  const base = parts[parts.length - 1] ?? "";
  return base.length > 0 && base.length <= 128 ? base : undefined;
}

/**
 * Build a durable diagnostic from a process observation.
 * Always pattern-redacts; never stores env, tokens, or full prompt.
 */
export function buildProcessFailureDiagnostic(input: {
  readonly observation: RealProcessObservation;
  readonly boundaryProofMode?: "cursor_real" | "deterministic_fake";
  readonly executable?: string;
}): ProcessFailureDiagnostic {
  const stdoutRaw = redactSecrets(input.observation.stdout ?? "");
  const stderrRaw = redactSecrets(input.observation.stderr ?? "");
  const stdout = capHead(stdoutRaw, PROCESS_DIAGNOSTIC_STDOUT_CAP);
  const stderr = capTail(stderrRaw, PROCESS_DIAGNOSTIC_STDERR_CAP);
  const executableBasename = basenameOnly(input.executable);

  return {
    kind: "process_failure_diagnostic",
    schemaVersion: "0.1.0-oa",
    processRef: input.observation.processRef,
    exitCode: input.observation.exitCode,
    timedOut: input.observation.timedOut,
    durationMs: input.observation.durationMs,
    realProcessInvoked: input.observation.realProcessInvoked === true,
    ...(input.boundaryProofMode
      ? { boundaryProofMode: input.boundaryProofMode }
      : {}),
    ...(executableBasename ? { executableBasename } : {}),
    stdoutExcerpt: stdout.text,
    stderrExcerpt: stderr.text,
    stdoutTruncated: stdout.truncated,
    stderrTruncated: stderr.truncated,
    redacted: true,
    authoritativeBusinessEvidence: false,
  };
}

export function isProcessFailureDiagnostic(
  value: unknown,
): value is ProcessFailureDiagnostic {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === "process_failure_diagnostic" &&
    v.schemaVersion === "0.1.0-oa" &&
    v.authoritativeBusinessEvidence === false &&
    v.redacted === true &&
    typeof v.processRef === "string" &&
    typeof v.stdoutExcerpt === "string" &&
    typeof v.stderrExcerpt === "string"
  );
}
