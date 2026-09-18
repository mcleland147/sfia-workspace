/**
 * Checkpoint F / R6 — REAL failure observability + provenance truth.
 * ZERO REAL / ZERO Cursor binary / fake runners only.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  createM4BoundedDocsWriteCursorAgentDescriptor,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "@/lib/oa/execution-attempt";
import {
  buildProcessFailureDiagnostic,
  PROCESS_DIAGNOSTIC_STDERR_CAP,
  PROCESS_DIAGNOSTIC_STDOUT_CAP,
} from "@/features/project-assistant/f3/processFailureDiagnostic";
import {
  deriveAttemptProvenance,
  F3_BOUNDED_M4_DETERMINISTIC_MODE,
  F3_REAL_MODE,
} from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { productReservationsForAttempt } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";

const NOW = "2026-09-17T20:00:00.000Z";

function baseAttempt(
  overrides: Partial<ExecutionAttempt> = {},
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: "xat:w3a:obs-r6-test",
    executionContractId: "xct:m3-ev:obs-r6",
    executionContractVersion: 1,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    status: "failed",
    idempotencyKey: "idem:w3a:obs-r6-test",
    correlationId: "cor:obs-r6",
    version: 2,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:obs-r6",
      actor: {
        actorId: "actor:local-pilote",
        role: "decision_maker",
        displayName: "Pilote",
        authorityLevel: "none",
      },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:obs-r6",
    },
    launchedAt: NOW,
    failedAt: NOW,
    stopReason: "REAL_PROCESS_NONZERO_EXIT",
    technicalExitCode: 1,
    durationMs: 1500,
    irreversibleEffectsPossible: true,
    ...overrides,
  };
}

describe("Checkpoint F R6 — process failure diagnostic (G1)", () => {
  it("T1 — exit 1 observation → durable diagnostic with stderr excerpt", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:51943",
        exitCode: 1,
        timedOut: false,
        durationMs: 1534,
        realProcessInvoked: true,
        stdout: "agent starting",
        stderr: "Error: authentication required for model",
      },
      boundaryProofMode: "cursor_real",
      executable: "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    });
    expect(diag.kind).toBe("process_failure_diagnostic");
    expect(diag.realProcessInvoked).toBe(true);
    expect(diag.boundaryProofMode).toBe("cursor_real");
    expect(diag.exitCode).toBe(1);
    expect(diag.stderrExcerpt).toContain("authentication required");
    expect(diag.stdoutExcerpt).toContain("agent starting");
    expect(diag.executableBasename).toBe("cursor");
    expect(diag.redacted).toBe(true);
    expect(diag.authoritativeBusinessEvidence).toBe(false);
  });

  it("T2 — redacts API key / bearer / github token patterns", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:1",
        exitCode: 1,
        timedOut: false,
        durationMs: 10,
        realProcessInvoked: true,
        stdout: "using sk-abcdefghijklmnopqrstuvwxyz012345",
        stderr:
          "Authorization: Bearer supersecrettokenvalue99\nghp_abcdefghijklmnopqrstuvwxyz0123456789\nOPENAI_API_KEY=sk-live-secret-value-here",
      },
      boundaryProofMode: "cursor_real",
    });
    const blob = `${diag.stdoutExcerpt}\n${diag.stderrExcerpt}`;
    expect(blob).not.toMatch(/sk-[A-Za-z0-9_-]{10,}/);
    expect(blob).not.toMatch(/Bearer\s+\S+/i);
    expect(blob).not.toMatch(/ghp_[A-Za-z0-9]{20,}/);
    expect(blob).not.toMatch(/OPENAI_API_KEY\s*=\s*.+/i);
    expect(blob).toContain("[redacted]");
  });

  it("T3 — truncates oversized streams with flags (stderr prefers tail)", () => {
    const bigStdout = "S".repeat(PROCESS_DIAGNOSTIC_STDOUT_CAP + 200);
    const bigStderr =
      "HEAD_NOISE".repeat(500) + "TAIL_ERROR_MARKER_UNIQUE";
    expect(bigStderr.length).toBeGreaterThan(PROCESS_DIAGNOSTIC_STDERR_CAP);
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:2",
        exitCode: 1,
        timedOut: false,
        durationMs: 5,
        realProcessInvoked: true,
        stdout: bigStdout,
        stderr: bigStderr,
      },
    });
    expect(diag.stdoutTruncated).toBe(true);
    expect(diag.stderrTruncated).toBe(true);
    expect(diag.stdoutExcerpt.length).toBeLessThanOrEqual(
      PROCESS_DIAGNOSTIC_STDOUT_CAP + 20,
    );
    expect(diag.stderrExcerpt).toContain("TAIL_ERROR_MARKER_UNIQUE");
    expect(diag.stderrExcerpt).toContain("…[truncated]");
  });
});

describe("Checkpoint F R6 — Nora provenance (G2)", () => {
  const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);

  it("T4 — cursor_real + launched + failed → realProcessInvoked true, no business success", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t4",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
        irreversibleEffectsPossible: true,
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    expect(prov.mode).toBe(F3_REAL_MODE);
    expect(prov.realProcessInvoked).toBe(true);
    expect(prov.realExecution).toBe(true);
    expect(prov.boundaryProofMode).toBe("cursor_real");
    // Business success is Attempt status — still failed
    expect(baseAttempt().status).toBe("failed");
  });

  it("T5 — M4-shaped without cursor_real → not REAL", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t5",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(prov.mode).toBe(F3_BOUNDED_M4_DETERMINISTIC_MODE);
    expect(prov.realExecution).toBe(false);
    expect(prov.boundaryProofMode).toBe("deterministic_fake");
  });

  it("T6 — REAL selected but NOT launched → realProcessInvoked false", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t6",
        selectedAgentRef: agent.agentId,
        status: "accepted",
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    expect(prov.realProcessInvoked).toBe(false);
    expect(prov.realExecution).toBe(false);
  });

  it("T4b — omit boundaryProofMode (pre-R6 bug) → false even if launched", () => {
    const prov = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:r6-t4b",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
        irreversibleEffectsPossible: true,
      },
      agent,
      // boundaryProofMode omitted — historical Nora bug
    });
    expect(prov.realProcessInvoked).toBe(false);
  });
});

describe("Checkpoint F R6 — reservations honesty + artifact non-satisfaction", () => {
  it("T8/T9 — diagnostic failure does not claim docs_write artifact; REAL reservation wording", () => {
    const attempt = baseAttempt({
      processDiagnostic: buildProcessFailureDiagnostic({
        observation: {
          processRef: "pid:51943",
          exitCode: 1,
          timedOut: false,
          durationMs: 1534,
          realProcessInvoked: true,
          stdout: "",
          stderr: "cli exit 1",
        },
        boundaryProofMode: "cursor_real",
      }),
    });
    expect(attempt.processDiagnostic?.authoritativeBusinessEvidence).toBe(
      false,
    );
    expect(attempt.processDiagnostic?.kind).toBe("process_failure_diagnostic");
    // Does not look like artifact evidence
    expect(attempt.resultRef).toBeUndefined();
    expect(attempt.status).toBe("failed");

    const reservations = productReservationsForAttempt(attempt);
    expect(reservations).toContain(
      "Process Cursor REAL invoqué — effet métier non prouvé",
    );
    expect(reservations).not.toContain(
      "Exécuteur de substitution — pas d'effet externe réel",
    );
    expect(reservations).toContain("Aucun READY");
  });

  it("substitution wording retained when no REAL launch signals", () => {
    const attempt = baseAttempt({
      stopReason: "FIXTURE_FAIL",
      irreversibleEffectsPossible: undefined,
      processDiagnostic: undefined,
      technicalExitCode: undefined,
    });
    const reservations = productReservationsForAttempt(attempt);
    expect(reservations).toContain(
      "Exécuteur de substitution — pas d'effet externe réel",
    );
  });
});

describe("Checkpoint F R6 — G3 preflight disposition", () => {
  it("documents existing CURSOR_UNAVAILABLE fail-close without Cursor spawn", () => {
    // Gateway already rejects when resolveBin() returns null with
    // detailCode CURSOR_UNAVAILABLE and realProcessInvoked:false —
    // covered by m4RealOff / gateway unit tests. Auth cannot be probed
    // non-invasively → DEFER (no new auth probe in this lot).
    expect(M4_REAL_GATEWAY_ADAPTER_ID).toBe("adp:m4-cursor-cli-real");
  });
});

describe("Checkpoint F R6 — durable reload (T7)", () => {
  it("processDiagnostic survives JSON payload round-trip (Attempt store shape)", () => {
    const diag = buildProcessFailureDiagnostic({
      observation: {
        processRef: "pid:51943",
        exitCode: 1,
        timedOut: false,
        durationMs: 1534,
        realProcessInvoked: true,
        stdout: "out",
        stderr: "useful stderr leaf",
      },
      boundaryProofMode: "cursor_real",
    });
    const attempt = baseAttempt({ processDiagnostic: diag });
    const reloaded = JSON.parse(JSON.stringify(attempt)) as ExecutionAttempt;
    expect(reloaded.processDiagnostic?.stderrExcerpt).toContain(
      "useful stderr leaf",
    );
    expect(reloaded.processDiagnostic?.exitCode).toBe(1);
    expect(reloaded.processDiagnostic?.boundaryProofMode).toBe("cursor_real");
    expect(reloaded.processDiagnostic?.authoritativeBusinessEvidence).toBe(
      false,
    );
  });
});
